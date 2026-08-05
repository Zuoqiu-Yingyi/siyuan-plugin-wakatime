// Copyright (C) 2026 Zuoqiu Yingyi
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
import type { IStorageBackend, TCacheData } from "@/wakatime/cache";

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

    private readonly cache: WakaTimeCache<TCacheData>;

    private readonly timer = {
        /**
         * 心跳定时器
         */
        heartbeat: undefined,

        /**
         * 缓存检查定时器
         */
        cacheCheck: undefined,
    } as Record<string, any>;

    private readonly context: Context.IContext = {
        url: "",
        method: "POST",
        Authorization: "",

        includeID: [],
        excludeID: [],
        include: [],
        exclude: [],

        blocks: new Map<BlockID, BlockID>(),
        roots: new Map<BlockID, Context.IRoot>(),
    };

    constructor() {
        this.cache = new WakaTimeCache(
            this.siyuanStorageBackend,
            CONSTANTS.KERNEL_CACHE_PATH,
        );

        // 绑定生命周期钩子。
        // Wire lifecycle hooks.
        this.siyuan.plugin.lifecycle.onload = this.onload.bind(this);
        this.siyuan.plugin.lifecycle.onrunning = this.onrunning.bind(this);
        this.siyuan.plugin.lifecycle.onunload = this.onunload.bind(this);
    }

    /**
     * 基于 siyuan.storage 的缓存后端适配器。
     * siyuan.storage 路径相对于 data/storage/petal/<plugin-name>/。
     * Storage backend backed by siyuan.storage. Paths are relative to
     * data/storage/petal/<plugin-name>/.
     */
    private readonly siyuanStorageBackend: IStorageBackend = {
        putFile: async (path, content) => {
            await this.siyuan.storage.put(path, content);
        },
        getFile: async (path) => {
            const obj = await this.siyuan.storage.get(path);
            const content = await obj.text();
            return content;
        },
        readDir: async (path) => {
            const entries = await this.siyuan.storage.list(path);
            return entries.map((e) => ({ name: e.name, isDir: e.isDir }));
        },
        removeFile: async (path) => {
            await this.siyuan.storage.remove(path);
        },
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
        const response = await this.siyuan.client.fetch("/api/network/forwardProxy", {
            method: "POST",
            body: JSON.stringify({
                url: request.url,
                method: request.method,
                headers: request.headers,
                timeout: request.timeout,
                payload: request.payload,
                contentType: "application/json",
                payloadEncoding: "json",
                responseEncoding: "text",
            }),
        });
        const data = await response.json() as {
            code: number;
            msg: string;
            data: { status: number; body: string };
        };
        if (data.code !== 0) {
            throw new Error(`forwardProxy: ${data.msg}`);
        }
        return data.data;
    }

    /* 清理定时器 */
    private clearTimer(): void {
        clearInterval(this.timer.heartbeat);
        clearInterval(this.timer.cacheCheck);
    }

    /* 启动定时器 */
    private startTimer(interval: number = this.config.wakatime.interval): void {
        this.commit();
        this.checkCache();

        this.timer.heartbeat = setInterval(() => void this.commit(), interval * 1_000) as unknown as number;
        this.timer.cacheCheck = setInterval(() => void this.checkCache(), CONSTANTS.CACHE_CHECK_INTERVAL) as unknown as number;
    }

    /* 加载配置 */
    private async loadConfig(): Promise<void> {
        try {
            const obj = await this.siyuan.storage.get(CONSTANTS.GLOBAL_CONFIG_NAME);
            const config = await obj.json();
            this.updateConfig(config);
        }
        catch { }
    }

    /* 更新 wakatime 配置 */
    private updateConfig(config: IConfig): void {
        Object.assign(this.config, config);
        this.updateContext();
    }

    /* 更新 wakatime 请求上下文 */
    private updateContext(): void {
        this.context.url = `${this.config?.wakatime?.api_url ?? CONSTANTS.WAKATIME_DEFAULT_API_URL}/${CONSTANTS.WAKATIME_HEARTBEATS_PATHNAME}`;
        // eslint-disable-next-line node/prefer-global/buffer
        this.context.Authorization = `Basic ${Buffer.from(this.config.wakatime.api_key).toString("base64")}`;

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

        const datum = await this.buildHeartbeats(valid_roots);

        /* 在 entity 中进行过滤 */
        datum.forEach((data) => {
            data.payload = data.payload.filter((action) => {
                const entity = action.entity;
                return this.filter(
                    entity,
                    this.context.include,
                    this.context.exclude,
                );
            });
        });

        for (const data of datum) {
            if (data.payload.length > 0) {
                /* 构造心跳连接请求 */
                const requests: Heartbeats.IRequest[] = [];
                for (let i = 0; i < data.payload.length; i += CONSTANTS.WAKATIME_HEARTBEATS_BULK) {
                    // WakaTime 限制一次最多提交 25 条记录
                    requests.push(this.buildHeartbeatsRequest({
                        context: data.context,
                        payload: data.payload.slice(i, i + CONSTANTS.WAKATIME_HEARTBEATS_BULK),
                    }));
                }

                if (this.config.wakatime.heartbeats) { // 提交数据
                    for (const request of requests) {
                        await this.sendHeartbeats(
                            request,
                            (request) => {
                                if (this.config.wakatime.offline) {
                                    this.cache.push({
                                        context: data.context,
                                        payload: request.payload,
                                    });
                                }
                            },
                        ); // 发送载荷
                    }
                }
                else { // 不提交数据
                    if (this.config.wakatime.offline) { // 若开启离线缓存
                        this.cache.push(...requests.map((request) => ({
                            context: data.context,
                            payload: request.payload,
                        }))); // 写入缓存
                    }
                }
                await this.cache.save(); // 缓存持久化
            }
        }
    }

    /* 检查缓存 */
    private async checkCache(): Promise<void> {
        if (this.config.wakatime.heartbeats === false) {
            return; // 若不提交数据, 则不检查缓存
        }

        const cache_files_name = await this.cache.getAllCacheFileName(); // 所有缓存文件名称

        for (const filename of cache_files_name) {
            const cache = new WakaTimeCache(
                this.siyuanStorageBackend,
                CONSTANTS.KERNEL_CACHE_PATH,
                filename,
            );

            await cache.load(); // 加载缓存文件

            const exceptions: TCacheData[] = []; // 提交缓存时发生异常

            /* 依次提交缓存内容 */
            for (let index = 0; index < cache.length; ++index) {
                const data = cache.at(index)!;

                /* 提交缓存 */
                await this.sendHeartbeats(
                    this.buildHeartbeatsRequest(data),
                    (request) => {
                        exceptions.push({
                            context: data.context,
                            payload: request.payload,
                        });
                    },
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
        event: Context.IEvent,
    ): Promise<TCacheData> {
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
            payload: [{
                type: Type.File,
                category: event.is_write
                    ? this.config.wakatime.edit.category
                    : this.config.wakatime.view.category,

                project: event.context.project,
                branch,
                entity,
                language: event.context.language,
                time: event.time,
                is_write: event.is_write,
            }],
            context: event.context,
        };
    }

    /**
     * 构造心跳连接
     * @param roots - 文档信息
     * @returns 心跳连接活动
     */
    private async buildHeartbeats(roots: Context.IRoot[]): Promise<TCacheData[]> {
        const datum = await Promise.all(roots.flatMap((root) => {
            return root.events.map((event) => this.buildHeartbeat(
                root,
                event,
            ));
        }));
        const map = new Map<string, TCacheData>();
        datum.forEach((d) => {
            const key = `${d.context.hostname}\0${d.context.useragent}`;
            let data = map.get(key);
            if (data == null) {
                data = {
                    payload: [],
                    context: d.context,
                };
                map.set(key, data);
            }
            data.payload.push(...d.payload);
        });
        return Array.from(map.values());
    }

    /**
     * 构造心跳连接请求
     * @param payload - 心跳连接载荷
     * @returns 心跳连接请求
     */
    private buildHeartbeatsRequest(data: TCacheData): Heartbeats.IRequest {
        const request: Heartbeats.IRequest = {
            url: Array.isArray(data.payload)
                ? `${this.context.url}.bulk`
                : this.context.url,
            method: this.context.method,
            headers: [
                {
                    "Authorization": this.context.Authorization,
                    "User-Agent": data.context.useragent,
                    "X-Machine-Name": data.context.hostname,
                },
            ],
            timeout: this.config.wakatime.timeout * 1_000,
            payload: data.payload,
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
                            void error;
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
                context: options.context,
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
                    context: options.context,
                }],
            };
            this.context.roots.set(options.id, root);
        }
        return root;
    }

    /* 获取块信息 */
    private async getBlockInfo(id: BlockID): Promise<Context.IRoot | null> {
        try {
            /* 获取块对应的文档信息 */
            let root_id = this.context.blocks.get(id);
            let root_info = root_id != null ? this.context.roots.get(root_id) : undefined;
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

            return root_info;
        }
        catch {
            /* 块删除事件导致无法查询到对应的块 — 静默忽略 */
            return null;
        }
    }

    /* 加载 */
    private async onload(): Promise<void> {
        /* 加载配置 */
        await this.loadConfig();

        /* 加载缓存数据 */
        await this.cache.load();

        /* 更新笔记本列表 */
        await this.updateNotebook();

        /* 启动定时器 */
        this.startTimer();

        /* 绑定 RPC 方法 */
        await this.siyuan.rpc.bind("clearCache", this.rpcClearCache.bind(this), "Clear the offline cache.");
        await this.siyuan.rpc.bind("updateConfig", this.rpcUpdateConfig.bind(this), "Update config and request context.");
        await this.siyuan.rpc.bind("updateNotebooks", this.rpcUpdateNotebooks.bind(this), "Update the list of notebooks.");
        await this.siyuan.rpc.bind("addViewEvent", this.rpcAddViewEvent.bind(this), "Record a view heartbeat (id only).");
        await this.siyuan.rpc.bind("addEditEvent", this.rpcAddEditEvent.bind(this), "Record an edit heartbeat (id only).");
    }

    /* 运行中 */
    private async onrunning(): Promise<void> { }

    /* 卸载 */
    private async onunload(): Promise<void> {
        this.clearTimer();
        await this.commit();

        await this.siyuan.rpc.unbind("clearCache");
        await this.siyuan.rpc.unbind("updateConfig");
        await this.siyuan.rpc.unbind("updateNotebooks");
        await this.siyuan.rpc.unbind("addViewEvent");
        await this.siyuan.rpc.unbind("addEditEvent");
    }

    /* RPC: updateNotebooks */
    private async rpcUpdateNotebooks(): Promise<void> {
        await this.updateNotebook();
    }

    /* RPC: clearCache */
    private async rpcClearCache(): Promise<void> {
        this.cache.clear();
        await this.siyuan.storage.remove(CONSTANTS.KERNEL_CACHE_PATH);
    }

    /* RPC: updateConfig */
    private async rpcUpdateConfig(config: IConfig): Promise<void> {
        this.clearTimer();
        this.updateConfig(config);
        this.startTimer();
    }

    /* RPC: addViewEvent — 与 addEditEvent 统一, 只传 id, 内核内部解析块信息 */
    private async rpcAddViewEvent(id: BlockID, context: Context.IEventContext): Promise<void> {
        const root_info = await this.getBlockInfo(id);
        if (root_info != null) {
            const time = this.now();
            this.addEvent({
                id: root_info.id,
                box: root_info.box,
                path: root_info.path,
                time,
                is_write: false,
                context,
            });
        }
    }

    /* RPC: addEditEvent */
    private async rpcAddEditEvent(id: BlockID, context: Context.IEventContext): Promise<void> {
        const root_info = await this.getBlockInfo(id);
        if (root_info != null) {
            const time = this.now();
            this.addEvent({
                id: root_info.id,
                box: root_info.box,
                path: root_info.path,
                time,
                is_write: true,
                context,
            });
        }
    }
}

void new KernelWakaTime();
