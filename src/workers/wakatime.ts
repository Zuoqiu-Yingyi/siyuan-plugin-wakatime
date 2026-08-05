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

/* eslint-disable no-restricted-globals */
/* eslint-disable ts/no-use-before-define */
/* eslint-disable jsdoc/check-param-names */

import {
    Client,
    KernelError,

} from "@siyuan-community/siyuan-sdk";

import { Logger } from "@workspace/utils/logger";
import { sleep } from "@workspace/utils/misc/sleep";
import { trimSuffix } from "@workspace/utils/misc/string";
import { WorkerBridgeSlave } from "@workspace/utils/worker/bridge/slave";

import { DEFAULT_CONFIG } from "@/configs/default";
import CONSTANTS from "@/constants";
import {
    WakaTimeCache,

} from "@/wakatime/cache";
import { Type } from "@/wakatime/heartbeats";

import type { types } from "@siyuan-community/siyuan-sdk";

import type { BlockID } from "@workspace/types/siyuan";
import type {
    THandlersWrapper,
} from "@workspace/utils/worker/bridge";

import type { IConfig } from "@/types/config";
import type {
    Context,
    Heartbeats,
} from "@/types/wakatime";
import type { TCacheDatum } from "@/wakatime/cache";

type INotebook = types.kernel.api.notebook.lsNotebooks.INotebook;

const config: IConfig = DEFAULT_CONFIG;
const logger = new Logger(`${self.name}-worker:${CONSTANTS.WAKATIME_WORKER_FILE_NAME}`);
const client = new Client(
    {
        baseURL: trimSuffix(self.location.pathname, `plugins/${self.name}/workers/${CONSTANTS.WAKATIME_WORKER_FILE_NAME}.js`),
    },
    "fetch",
);
const notebook = new Map<BlockID, INotebook>(); // 笔记本 ID => 笔记本信息

/* SDK Client 适配器 — 将 siyuan-sdk Client 包装为 IStorageBackend */
const sdkStorageBackend = {
    putFile: (path: string, content: string) => client.putFile({ path, file: content }),
    getFile: (path: string) => client.getFile({ path }, "text"),
    readDir: (path: string) => client.readDir({ path }).then((r) => r.data),
    removeFile: (path: string) => client.removeFile({ path }),
} satisfies import("@/wakatime/cache").IStorageBackend;

const cache = new WakaTimeCache(sdkStorageBackend, CONSTANTS.OFFLINE_CACHE_PATH);
const caches: InstanceType<typeof WakaTimeCache<TCacheDatum>>[] = [];
const timer = {
    heartbeat: 0, // 心跳定时器
    cacheCheck: 0, // 缓存检查定时器
};
const context: Context.IContext = {
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

/* 创建缓存目录 */
async function createCacheDirectory(directory: string = CONSTANTS.OFFLINE_CACHE_PATH) {
    return client.putFile({
        isDir: true,
        path: directory,
    });
}

/* 更新定时器 */
function updateTimer(interval: number = config.wakatime.interval) {
    /* 心跳定时器 */
    self.clearInterval(timer.heartbeat);
    timer.heartbeat = self.setInterval(commit, interval * 1_000);

    /* 缓存检查定时器 */
    self.clearInterval(timer.cacheCheck);
    timer.cacheCheck = self.setInterval(checkCache, CONSTANTS.CACHE_CHECK_INTERVAL);
}

/* 更新 wakatime 请求上下文 */
function updateContext(): void {
    context.includeID = wakatimeIncludeID();
    context.excludeID = wakatimeExcludeID();

    context.include = wakatimeInclude();
    context.exclude = wakatimeExclude();
}

/* 更新 notebook */
async function updateNotebook(): Promise<INotebook[]> {
    const response = await client.lsNotebooks();
    const notebooks = response.data.notebooks;
    notebooks.forEach((n) => notebook.set(n.id, n));
    return notebooks;
}

/* 提交活动信息 */
async function commit(): Promise<void> {
    const roots = Array.from(context.roots.values());
    context.blocks.clear();
    context.roots.clear();

    /* 在 ID 中进行过滤 */
    const valid_roots = roots
        .filter((root) => {
            const entity = `${root.box}${root.path}`;
            return filter(
                entity,
                context.includeID,
                context.excludeID,
            );
        });

    const actions = await buildHeartbeats(valid_roots);

    /* 在 entity 中进行过滤 */
    const valid_actions = actions
        .filter((action) => {
            const entity = action.entity;
            return filter(
                entity,
                context.include,
                context.exclude,
            );
        });

    context.actions.push(...valid_actions);

    if (context.actions.length > 0) {
        const actions = context.actions.slice(); // 数组浅拷贝
        context.actions.length = 0;

        /* 构造心跳连接请求 */
        const requests: Heartbeats.IRequest[] = [];
        for (let i = 0; i < actions.length; i += CONSTANTS.WAKATIME_HEARTBEATS_BULK) {
            // WakaTime 限制一次最多提交 25 条记录
            requests.push(buildHeartbeatsRequest(actions.slice(i, i + CONSTANTS.WAKATIME_HEARTBEATS_BULK)));
        }

        if (config.wakatime.heartbeats) { // 提交数据
            for (const request of requests) {
                await sentHeartbeats(
                    request,
                    (request) => {
                        if (config.wakatime.offline) {
                            cache.push(request.payload);
                        }
                    },
                ); // 发送载荷
            }
        }
        else { // 不提交数据
            if (config.wakatime.offline) { // 若开启离线缓存
                cache.push(...requests.map((request) => request.payload)); // 写入缓存
            }
        }
        await cache.save(); // 缓存持久化
    }
};

/* 检查缓存 */
async function checkCache(): Promise<void> {
    const cache_files_name = await cache.getAllCacheFileName(); // 所有缓存文件名称

    /* 初始化历史缓存对象列表 */
    caches.length = 0;
    caches.push(...cache_files_name.map((filename) => new WakaTimeCache(
        sdkStorageBackend,
        CONSTANTS.OFFLINE_CACHE_PATH,
        filename,
    )));

    /* 定时提交缓存 */
    if (caches.length > 0) {
        for (const cache of caches) {
            if (config.wakatime.heartbeats) { // 提交
                await cache.load(); // 加载缓存文件

                const exceptions: TCacheDatum[] = []; // 提交缓存时发生异常

                /* 依次提交缓存内容 */
                for (let index = 0; index < cache.length; ++index) {
                    const payload = cache.at(index)!;

                    /* 提交缓存 */
                    await sentHeartbeats(
                        buildHeartbeatsRequest(payload),
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
async function buildHeartbeat(
    doc: {
        box: BlockID;
        path: string;
    },
    time: number,
    is_write: boolean,
): Promise<Heartbeats.IAction> {
    const branch = config.wakatime.hide_branch_names
        ? doc.box
        : notebook.get(doc.box)?.name;
    const entity = config.wakatime.hide_file_names
        ? `${branch}${doc.path}`
        : `${branch}${(await client.getHPathByPath({
            path: doc.path,
            notebook: doc.box,
        })).data}.sy`;

    return {
        type: Type.File,
        category: is_write
            ? config.wakatime.edit.category
            : config.wakatime.view.category,

        project: context.project,
        branch,
        entity,
        language: context.language,
        time,
        is_write,
    };
}

/**
 * 构造心跳连接
 * @param roots - 文档信息
 * @returns 心跳连接活动
 */
async function buildHeartbeats(roots: Context.IRoot[]): Promise<Heartbeats.IAction[]> {
    return Promise.all(roots.flatMap((root) => {
        return root.events.map((event) => buildHeartbeat(
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
function buildHeartbeatsRequest(payload: Heartbeats.IAction | Heartbeats.IAction[]): Heartbeats.IRequest {
    const request: Heartbeats.IRequest = {
        url: Array.isArray(payload)
            ? `${context.url}.bulk`
            : context.url,
        method: context.method,
        headers: [
            context.headers,
        ],
        timeout: config.wakatime.timeout * 1_000,
        payload,
    };
    return request;
}

/**
 * 发送心跳连接
 * REF: https://wakatime.com/developers#heartbeats
 * @param request - 心跳连接请求
 * @param reject - 心跳连接失败时的回调
 */
async function sentHeartbeats(
    request: Heartbeats.IRequest,
    reject: (request: Heartbeats.IRequest) => void,
): Promise<null | types.kernel.api.network.forwardProxy.IResponse> {
    try {
        const response = await client.forwardProxy(request);
        if (response.data.status >= 200 && response.data.status < 300) {
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
function filter(
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

/* 获取时间戳 */
function time(date: Date = new Date()): number {
    return date.getTime() / 1_000;
}

/* 获取当前时间戳 */
function now(): number {
    return time();
}

/* wakatime include */
function wakatimeIncludeID(): (RegExp | string)[] {
    return washList(config.wakatime.includeID);
}
function wakatimeInclude(): (RegExp | string)[] {
    return washList(config.wakatime.include);
}

/* wakatime exclude */
function wakatimeExcludeID(): (RegExp | string)[] {
    return washList(config.wakatime.excludeID);
}
function wakatimeExclude(): (RegExp | string)[] {
    return washList(config.wakatime.exclude);
}

/* 清洗列表 */
function washList(list: string[]): (RegExp | string)[] {
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
                        client.pushErrMsg({ msg: error as string });
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
function addEvent(options: Omit<Context.IRoot, "events"> & Context.IEvent): Context.IRoot {
    let root = context.roots.get(options.id);
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
        context.roots.set(options.id, root);
    }
    return root;
}

/* 👇由插件调用👇 */

/* 加载 */
export async function onload(): Promise<void> {
    /* 创建缓存目录 */
    await createCacheDirectory();

    /* 加载缓存数据 */
    await cache.load();

    /* 更新笔记本列表 */
    await updateNotebook();
}

/* 卸载 */
export async function unload(): Promise<void> {
    clearInterval(timer.heartbeat);
    clearInterval(timer.cacheCheck);
    await commit();
}

/* 重置 (加载后与更新设置选项后) */
export function restart(): void {
    updateTimer();
    updateContext();
}

/* 更新设置选项 */
export function updateConfig(
    config_: IConfig,
    context_: Pick<Context.IContext, "headers" | "language" | "project" | "url">,
): void {
    Object.assign(config, config_);
    Object.assign(context, context_);
}

/* 添加查看事件 */
export function addViewEvent(info: {
    id: string;
    box: string;
    path: string;
}): void {
    const time = now();

    context.blocks.set(info.id, info.id);
    addEvent({
        ...info,
        time,
        is_write: false,
    });
}

/* 添加编辑事件 */
export async function addEditEvent(id: BlockID): Promise<void> {
    try {
        const time = now();

        /* 获取块对应的文档信息 */
        let root_id = context.blocks.get(id);
        let root_info = root_id && context.roots.get(root_id);
        if (!root_info) {
            const block_info = await client.getBlockInfo({ id });
            root_id = block_info.data.rootID;
            root_info = {
                id: root_id,
                box: block_info.data.box,
                path: block_info.data.path,
                events: [],
            };

            context.blocks.set(id, root_id);
            context.roots.set(root_id, root_info);
        }

        /* 添加编辑事件 */
        addEvent({
            id: root_info.id,
            box: root_info.box,
            path: root_info.path,
            time,
            is_write: true,
        });
    }
    catch (error) {
        if (error instanceof KernelError) { // 块删除事件导致无法查询到对应的块
            // logger.warn(error);

        }
        else {
            throw error;
        }
    }
}

const handlers = {
    onload: {
        this: self,
        func: onload,
    },
    unload: {
        this: self,
        func: unload,
    },
    restart: {
        this: self,
        func: restart,
    },
    updateConfig: {
        this: self,
        func: updateConfig,
    },
    addViewEvent: {
        this: self,
        func: addViewEvent,
    },
    addEditEvent: {
        this: self,
        func: addEditEvent,
    },
} as const;

export type THandlers = THandlersWrapper<typeof handlers>;

const channel = new BroadcastChannel(CONSTANTS.WAKATIME_WORKER_BROADCAST_CHANNEL_NAME);
const bridge = new WorkerBridgeSlave(
    channel,
    logger,
    handlers,
);
void bridge;
