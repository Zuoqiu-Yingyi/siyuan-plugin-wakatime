// Copyright (C) 2023 Zuoqiu Yingyi
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

/* eslint-disable jsdoc/check-param-names */

import { sleep } from "@workspace/utils/misc/sleep";

import { DEFAULT_CONFIG } from "@/configs/default";
import CONSTANTS from "@/constants";
import { WakaTimeCache } from "@/wakatime/cache";
import { Type } from "@/wakatime/heartbeats";

import type * as kernel from "siyuan/kernel";

import type { BlockID } from "@workspace/types/siyuan";

import type { IConfig } from "@/types/config";
import type { Context, Heartbeats } from "@/types/wakatime";
import type { IStorageBackend, TCacheDatum } from "@/wakatime/cache";

interface INotebook {
    id: string;
    name: string;
}

/**
 * 内核版 WakaTime 插件。
 * 运行在 goja 内核运行时中, 通过 siyuan.rpc 暴露方法给前端。
 * Kernel-side WakaTime plugin. Runs in the goja runtime; exposes RPC methods
 * to the frontend via siyuan.rpc.
 */
class KernelWakaTime {
    private readonly siyuan: kernel.ISiyuan = siyuan;

    private readonly config: IConfig = DEFAULT_CONFIG;

    private readonly notebook = new Map<BlockID, INotebook>(); // 笔记本 ID => 笔记本信息

    private readonly cache: WakaTimeCache<TCacheDatum>;

    private readonly caches: InstanceType<typeof WakaTimeCache<TCacheDatum>>[] = [];

    private readonly timer = {
        heartbeat: 0 as unknown as number,
        cacheCheck: 0 as unknown as number,
    };

    private readonly context: Context.IContext = {
        url: "",
        method: "POST",
        headers: {
            "Authorization": "",
            "User-Agent": "",
            "X-Machine-Name": "",
        },

        project: "",
        language: "",

        includeID: [],
        excludeID: [],
        include: [],
        exclude: [],

        blocks: new Map<BlockID, BlockID>(),
        roots: new Map<BlockID, Context.IRoot>(),
        actions: new Array<Heartbeats.IAction>(),
    };

    constructor() {
        this.cache = new WakaTimeCache(
            this.siyuanStorageBackend,
            CONSTANTS.KERNEL_CACHE_PATH,
        );

        // 绑定生命周期钩子。
        // Wire lifecycle hooks.
        this.siyuan.plugin.lifecycle.onload = this.onload.bind(this);
        this.siyuan.plugin.lifecycle.onunload = this.onunload.bind(this);
    }

    /**
     * 基于 siyuan.storage 的缓存后端适配器。
     * siyuan.storage 路径相对于 data/storage/petal/<plugin-name>/。
     * Storage backend backed by siyuan.storage. Paths are relative to
     * data/storage/petal/<plugin-name>/.
     */
    private readonly siyuanStorageBackend: IStorageBackend = {
        putFile: (path, content) => this.siyuan.storage.put(path, content),
        getFile: async (path) => {
            const obj = await this.siyuan.storage.get(path);
            return obj.text();
        },
        readDir: async (path) => {
            const dir: `/${string}` = path.startsWith("/") ? path as `/${string}` : `/${path}`;
            const entries = await this.siyuan.storage.list(dir);
            return entries.map((e) => ({ name: e.name, isDir: e.isDir }));
        },
        removeFile: (path) => this.siyuan.storage.remove(path),
    };

    /**
     * 调用内核 REST API 并校验 code。
     * Calls a kernel REST endpoint and verifies code === 0.
     */
    private async kernelFetch<T>(path: string, body?: Record<string, unknown>): Promise<T> {
        const resp = await this.siyuan.client.fetch(path as `/${string}`, {
            method: "POST",
            body: body === undefined ? "{}" : JSON.stringify(body),
        });
        const data = await resp.json() as { code: number; msg: string; data: T };
        if (data.code !== 0) {
            throw new Error(`kernel ${path}: ${data.msg}`);
        }
        return data.data;
    }

    /**
     * 通过 /api/network/forwardProxy 外发 HTTP 请求。
     * Forwards an outbound HTTP request via /api/network/forwardProxy.
     */
    private async forwardProxy(request: Heartbeats.IRequest): Promise<{ status: number; body: string }> {
        const resp = await this.siyuan.client.fetch("/api/network/forwardProxy", {
            method: "POST",
            body: JSON.stringify({
                url: request.url,
                method: request.method,
                headers: [request.headers],
                timeout: request.timeout,
                payload: request.payload,
                contentType: "application/json",
                payloadEncoding: "json",
                responseEncoding: "text",
            }),
        });
        const data = await resp.json() as {
            code: number;
            msg: string;
            data: { status: number; body: string };
        };
        if (data.code !== 0) {
            throw new Error(`forwardProxy: ${data.msg}`);
        }
        return data.data;
    }

    /* 更新定时器 */
    private updateTimer(interval: number = this.config.wakatime.interval): void {
        /* 心跳定时器 */
        clearInterval(this.timer.heartbeat);
        this.timer.heartbeat = setInterval(() => void this.commit(), interval * 1_000) as unknown as number;

        /* 缓存检查定时器 */
        clearInterval(this.timer.cacheCheck);
        this.timer.cacheCheck = setInterval(() => void this.checkCache(), CONSTANTS.CACHE_CHECK_INTERVAL) as unknown as number;
    }

    /* 更新 wakatime 请求上下文 */
    private updateContext(): void {
        this.context.includeID = this.washList(this.config.wakatime.includeID);
        this.context.excludeID = this.washList(this.config.wakatime.excludeID);

        this.context.include = this.washList(this.config.wakatime.include);
        this.context.exclude = this.washList(this.config.wakatime.exclude);
    }

    /* 更新 notebook */
    private async updateNotebook(): Promise<INotebook[]> {
        const notebooks = await this.kernelFetch<{ notebooks: INotebook[] }>("/api/notebook/lsNotebooks");
        notebooks.notebooks.forEach((n) => this.notebook.set(n.id, n));
        return notebooks.notebooks;
    }

    /* 获取时间戳 */
    private time(date: Date = new Date()): number {
        return date.getTime() / 1_000;
    }

    /* 获取当前时间戳 */
    private now(): number {
        return this.time();
    }

    /* 提交活动信息 */
    private async commit(): Promise<void> {
        const roots = Array.from(this.context.roots.values());
        this.context.blocks.clear();
        this.context.roots.clear();

        /* 在 ID 中进行过滤 */
        const valid_roots = roots
            .filter((root) => {
                const entity = `${root.box}${root.path}`;
                return this.filter(
                    entity,
                    this.context.includeID,
                    this.context.excludeID,
                );
            });

        const actions = await this.buildHeartbeats(valid_roots);

        /* 在 entity 中进行过滤 */
        const valid_actions = actions
            .filter((action) => {
                const entity = action.entity;
                return this.filter(
                    entity,
                    this.context.include,
                    this.context.exclude,
                );
            });

        this.context.actions.push(...valid_actions);

        if (this.context.actions.length > 0) {
            const actions = this.context.actions.slice(); // 数组浅拷贝
            this.context.actions.length = 0;

            /* 构造心跳连接请求 */
            const requests: Heartbeats.IRequest[] = [];
            for (let i = 0; i < actions.length; i += CONSTANTS.WAKATIME_HEARTBEATS_BULK) {
                // WakaTime 限制一次最多提交 25 条记录
                requests.push(this.buildHeartbeatsRequest(actions.slice(i, i + CONSTANTS.WAKATIME_HEARTBEATS_BULK)));
            }

            if (this.config.wakatime.heartbeats) { // 提交数据
                for (const request of requests) {
                    await this.sendHeartbeats(
                        request,
                        (request) => {
                            if (this.config.wakatime.offline) {
                                this.cache.push(request.payload);
                            }
                        },
                    ); // 发送载荷
                }
            }
            else { // 不提交数据
                if (this.config.wakatime.offline) { // 若开启离线缓存
                    this.cache.push(...requests.map((request) => request.payload)); // 写入缓存
                }
            }
            await this.cache.save(); // 缓存持久化
        }
    }

    /* 检查缓存 */
    private async checkCache(): Promise<void> {
        const cache_files_name = await this.cache.getAllCacheFileName(); // 所有缓存文件名称

        /* 初始化历史缓存对象列表 */
        this.caches.length = 0;
        this.caches.push(...cache_files_name.map((filename) => new WakaTimeCache(
            this.siyuanStorageBackend,
            CONSTANTS.KERNEL_CACHE_PATH,
            filename,
        )));

        /* 定时提交缓存 */
        if (this.caches.length > 0) {
            for (const cache of this.caches) {
                if (this.config.wakatime.heartbeats) { // 提交
                    await cache.load(); // 加载缓存文件

                    const exceptions: TCacheDatum[] = []; // 提交缓存时发生异常

                    /* 依次提交缓存内容 */
                    for (let index = 0; index < cache.length; ++index) {
                        const payload = cache.at(index)!;

                        /* 提交缓存 */
                        await this.sendHeartbeats(
                            this.buildHeartbeatsRequest(payload),
                            (request) => exceptions.push(request.payload),
                        );

                        if (index === 0 && exceptions.length > 0) {
                            /**
                             * 第一次提交出现问题
                             * 可能用户处于离线状态
                             * 本次不再进行提交
                             */
                            return;
                        }

                        /* 休眠 */
                        await sleep(CONSTANTS.CACHE_COMMIT_INTERVAL);
                    }

                    if (exceptions.length > 0) {
                        /* 存在异常, 保存异常提交到缓存文件 */
                        cache.clear();
                        cache.push(...exceptions);
                        await cache.save();

                        /**
                         * 本轮提交存在异常
                         * 可能用户网络状态可能不稳定
                         * 本次不再进行提交
                         */
                        return;
                    }
                    else {
                        /* 不存在异常, 删除缓存文件 */
                        await cache.remove();
                    }
                }
                else { // 不提交
                    return;
                }
            }
        }
    }

    /**
     * 构建一个心跳连接
     * @param doc - - 文档信息
     * @param time - - 时间
     * @param is_write - - 是否写入
     */
    private async buildHeartbeat(
        doc: {
            box: BlockID;
            path: string;
        },
        time: number,
        is_write: boolean,
    ): Promise<Heartbeats.IAction> {
        const branch = this.config.wakatime.hide_branch_names
            ? doc.box
            : this.notebook.get(doc.box)?.name;
        const entity = this.config.wakatime.hide_file_names
            ? `${branch}${doc.path}`
            : `${branch}${(await this.kernelFetch<string>(
                "/api/filetree/getHPathByPath",
                {
                    path: doc.path,
                    notebook: doc.box,
                },
            ))}.sy`;

        return {
            type: Type.File,
            category: is_write
                ? this.config.wakatime.edit.category
                : this.config.wakatime.view.category,

            project: this.context.project,
            branch,
            entity,
            language: this.context.language,
            time,
            is_write,
        };
    }

    /**
     * 构造心跳连接
     * @param roots - 文档信息
     * @returns 心跳连接活动
     */
    private async buildHeartbeats(roots: Context.IRoot[]): Promise<Heartbeats.IAction[]> {
        return Promise.all(roots.flatMap((root) => {
            return root.events.map((event) => this.buildHeartbeat(
                root,
                event.time,
                event.is_write,
            ));
        }));
    }

    /**
     * 构造心跳连接请求
     * @param payload - - 心跳连接载荷
     * @returns 心跳连接请求
     */
    private buildHeartbeatsRequest(payload: Heartbeats.IAction | Heartbeats.IAction[]): Heartbeats.IRequest {
        const request: Heartbeats.IRequest = {
            url: Array.isArray(payload)
                ? `${this.context.url}.bulk`
                : this.context.url,
            method: this.context.method,
            headers: [
                this.context.headers,
            ],
            timeout: this.config.wakatime.timeout * 1_000,
            payload,
        };
        return request;
    }

    /**
     * 发送心跳连接
     * REF: https://wakatime.com/developers#heartbeats
     */
    private async sendHeartbeats(
        request: Heartbeats.IRequest,
        reject: (request: Heartbeats.IRequest) => void,
    ): Promise<{ status: number; body: string } | null> {
        try {
            const response = await this.forwardProxy(request);
            if (response.status >= 200 && response.status < 300) {
                return response;
            }
            else {
                reject(request);
            }
        }
        catch (error) {
            void error;
            reject(request);
        }
        return null;
    }

    /**
     * 黑白名单过滤
     * @param entity - 文件路径
     * @param include - 包含列表
     * @param exclude - 排除列表
     * @returns 是否通过过滤
     */
    private filter(
        entity: string,
        include: (RegExp | string)[],
        exclude: (RegExp | string)[],
    ): boolean {
        if (include.length > 0) { // 白名单过滤
            let pass = false; // 是否通过白名单过滤
            for (const entry of include) {
                if (typeof entry === "string") {
                    if (entity.includes(entry)) {
                        pass = true;
                        break;
                    }
                }
                else if (entry instanceof RegExp) {
                    if (entry.test(entity)) {
                        pass = true;
                        break;
                    }
                }
            }
            if (!pass)
                return false;
        }
        if (exclude.length > 0) { // 黑名单过滤
            let pass = true; // 是否通过黑名单过滤
            for (const entry of exclude) {
                if (typeof entry === "string") {
                    if (entity.includes(entry)) {
                        pass = false;
                        break;
                    }
                }
                else if (entry instanceof RegExp) {
                    if (entry.test(entity)) {
                        pass = false;
                        break;
                    }
                }
            }
            return pass;
        }
        return true;
    }

    /* 清洗列表 */
    private washList(list: string[]): (RegExp | string)[] {
        return list
            .filter((entry) => {
                entry = entry.trim();
                if (entry !== "" && entry !== "//") {
                    /* 过滤无效的正则表达式 */
                    if (entry.startsWith("/") && entry.endsWith("/")) {
                        try {
                            void new RegExp(entry.slice(1, -1));
                            return true;
                        }
                        catch (error) {
                            void this.siyuan.logger.warn(error as string);
                            return false;
                        }
                    }
                    return true;
                }
                else {
                    return false;
                }
            })
            .map((entry) => {
                if (entry.startsWith("/") && entry.endsWith("/")) {
                    return new RegExp(entry.slice(1, -1));
                }
                else {
                    return entry;
                }
            });
    }

    /* 添加事件 */
    private addEvent(options: Omit<Context.IRoot, "events"> & Context.IEvent): Context.IRoot {
        let root = this.context.roots.get(options.id);
        if (root) {
            const event: Context.IEvent = {
                time: options.time,
                is_write: options.is_write,
            };

            /* 如果上一个事件为同类型的事件, 替换该事件 */
            if (root.events.at(-1)?.is_write === event.is_write) {
                root.events.pop();
            }
            root.events.push(event);
        }
        else {
            root = {
                id: options.id,
                box: options.box,
                path: options.path,
                events: [{
                    time: options.time,
                    is_write: options.is_write,
                }],
            };
            this.context.roots.set(options.id, root);
        }
        return root;
    }

    /* 创建缓存目录 */
    private async createCacheDirectory(directory: string = CONSTANTS.KERNEL_CACHE_PATH): Promise<void> {
        /* storage.put 会自动创建父目录, 写一个占位文件确保目录存在 */
        await this.siyuan.storage.put(`${directory}/.gitkeep`, "");
    }

    /* 加载 */
    private async onload(): Promise<void> {
        /* 创建缓存目录 */
        await this.createCacheDirectory();

        /* 加载缓存数据 */
        await this.cache.load();

        /* 更新笔记本列表 */
        await this.updateNotebook();

        /* 绑定 RPC 方法 */
        await this.siyuan.rpc.bind("onload", this.rpcOnload.bind(this), "Initialize the wakatime kernel plugin.");
        await this.siyuan.rpc.bind("unload", this.rpcUnload.bind(this), "Stop the wakatime kernel plugin.");
        await this.siyuan.rpc.bind("restart", this.rpcRestart.bind(this), "Restart timers and context.");
        await this.siyuan.rpc.bind("updateConfig", this.rpcUpdateConfig.bind(this), "Update config and request context.");
        await this.siyuan.rpc.bind("addViewEvent", this.rpcAddViewEvent.bind(this), "Record a view heartbeat (id only).");
        await this.siyuan.rpc.bind("addEditEvent", this.rpcAddEditEvent.bind(this), "Record an edit heartbeat (id only).");
    }

    /* 卸载 */
    private async onunload(): Promise<void> {
        clearInterval(this.timer.heartbeat);
        clearInterval(this.timer.cacheCheck);
        await this.commit();

        await this.siyuan.rpc.unbind("onload");
        await this.siyuan.rpc.unbind("unload");
        await this.siyuan.rpc.unbind("restart");
        await this.siyuan.rpc.unbind("updateConfig");
        await this.siyuan.rpc.unbind("addViewEvent");
        await this.siyuan.rpc.unbind("addEditEvent");
    }

    /* RPC: onload — 由前端在内核进入 running 状态后调用 */
    private async rpcOnload(): Promise<void> {
        /* 缓存目录与数据已在内核 onload 生命周期创建/加载, 此处补一次 notebook 刷新 */
        await this.updateNotebook();
    }

    /* RPC: unload */
    private async rpcUnload(): Promise<void> {
        clearInterval(this.timer.heartbeat);
        clearInterval(this.timer.cacheCheck);
        await this.commit();
    }

    /* RPC: restart */
    private rpcRestart(): void {
        this.updateTimer();
        this.updateContext();
    }

    /* RPC: updateConfig */
    private rpcUpdateConfig(
        config: IConfig,
        context: Pick<Context.IContext, "headers" | "language" | "project" | "url">,
    ): void {
        Object.assign(this.config, config);
        Object.assign(this.context, context);
    }

    /* RPC: addViewEvent — 与 addEditEvent 统一, 只传 id, 内核内部解析块信息 */
    private async rpcAddViewEvent(id: BlockID): Promise<void> {
        try {
            const time = this.now();

            /* 复用 addEditEvent 已建立的块映射, 若缺失则补查 getBlockInfo */
            let root_id = this.context.blocks.get(id);
            let root_info = root_id && this.context.roots.get(root_id);
            if (!root_info) {
                const block_info = await this.kernelFetch<{ box: string; path: string; rootID: string }>(
                    "/api/block/getBlockInfo",
                    { id },
                );
                root_id = block_info.rootID;
                root_info = {
                    id: root_id,
                    box: block_info.box,
                    path: block_info.path,
                    events: [],
                };

                this.context.blocks.set(id, root_id);
                this.context.roots.set(root_id, root_info);
            }

            this.addEvent({
                id: root_info.id,
                box: root_info.box,
                path: root_info.path,
                time,
                is_write: false,
            });
        }
        catch {
            /* 块删除事件导致无法查询到对应的块 — 静默忽略 */
        }
    }

    /* RPC: addEditEvent */
    private async rpcAddEditEvent(id: BlockID): Promise<void> {
        try {
            const time = this.now();

            /* 获取块对应的文档信息 */
            let root_id = this.context.blocks.get(id);
            let root_info = root_id && this.context.roots.get(root_id);
            if (!root_info) {
                const block_info = await this.kernelFetch<{ box: string; path: string; rootID: string }>(
                    "/api/block/getBlockInfo",
                    { id },
                );
                root_id = block_info.rootID;
                root_info = {
                    id: root_id,
                    box: block_info.box,
                    path: block_info.path,
                    events: [],
                };

                this.context.blocks.set(id, root_id);
                this.context.roots.set(root_id, root_info);
            }

            /* 添加编辑事件 */
            this.addEvent({
                id: root_info.id,
                box: root_info.box,
                path: root_info.path,
                time,
                is_write: true,
            });
        }
        catch {
            /* 块删除事件导致无法查询到对应的块 — 静默忽略 */
            /* Block deleted — silently ignore (mirrors worker's KernelError swallow). */
        }
    }
}

void new KernelWakaTime();
