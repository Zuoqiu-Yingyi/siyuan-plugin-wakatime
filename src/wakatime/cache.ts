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

import JSONL from "@/utils/jsonl";

import type { Context, Heartbeats } from "@/types/wakatime";

export interface TCacheData {
    payload: Heartbeats.IAction[];
    context: Context.IEventContext;
}

export type TCache<T> = {
    [P in keyof Array<T>]?: Array<T>[P];
};

/**
 * 与 SiYuan 存储（文件读写）后端无关的接口。
 * worker 端注入基于 SDK Client 的实现，内核端注入基于 siyuan.storage 的实现。
 * Storage-backend-agnostic interface; the worker injects an SDK-Client adapter,
 * the kernel injects a siyuan.storage adapter.
 */
export interface IStorageBackend {
    putFile: (path: string, content: string) => Promise<unknown>;
    getFile: (path: string) => Promise<string>;
    readDir: (path: string) => Promise<{ name: string; isDir: boolean }[]>;
    removeFile: (path: string) => Promise<unknown>;
}

export class WakaTimeCache<T extends object = TCacheData> implements TCache<T> {
    /**
     * 构造缓存文件名
     * @param date - 时间日期
     * @param extension - 文件扩展名
     * @returns 文件名
     */
    public static buildCacheFileName(
        date: Date = new Date(),
        extension: string = "jsonl",
    ): string {
        const year = date.getFullYear().toString().padStart(4, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const day = date.getDate().toString().padStart(2, "0");
        return `${year}-${month}-${day}.${extension}`;
    }

    protected filepath!: string; // 缓存文件路径
    protected filename!: string; // 缓存文件名

    protected readonly data: T[] = []; // 缓存的数据

    constructor(
        private readonly backend: IStorageBackend, // 存储后端
        private readonly directory: string, // 缓存文件目录
        filename?: string,
    ) {
        this.init(filename);
    }

    [n: number]: T;

    /* 初始化 */
    protected init(
        filename: string = WakaTimeCache.buildCacheFileName(),
    ): void {
        this.filename = filename;
        this.filepath = this.buildCacheFilePath();
        this.clear();
    }

    /**
     * 构造缓存文件路径
     * @param directory - 目录路径
     * @param filename - 文件名
     * @returns 文件路径
     */
    public buildCacheFilePath(
        directory: string = this.directory,
        filename: string = this.filename,
    ): string {
        return `${directory}/${filename}`;
    }

    /**
     * 获取所有缓存文件的路径
     * @param directory - 缓存文件目录路径
     * @returns 文件路径列表
     */
    public async getAllCacheFilePath(directory: string = this.directory): Promise<string[]> {
        const files = await this.backend.readDir(directory);
        return files
            .filter((file) => file.isDir === false)
            .map((file) => this.buildCacheFilePath(directory, file.name));
    }

    /**
     * 获取所有缓存文件的名称
     * @param directory - 缓存文件目录路径
     * @returns 文件路径列表
     */
    public async getAllCacheFileName(directory: string = this.directory): Promise<string[]> {
        try {
            const files = await this.backend.readDir(directory);
            return files
                .filter((file) => file.isDir === false)
                .map((file) => file.name);
        }
        catch (error) {
            void error;
            return [];
        }
    }

    /**
     * 清空数据
     */
    public clear(): void {
        this.length = 0;
    }

    get length(): number {
        return this.data.length;
    }

    set length(value: number) {
        this.data.length = value;
    }

    at(index: number): T | undefined {
        return this.data.at(index);
    }

    toString(): string {
        return JSONL.stringify(this.data);
    }

    toLocaleString(): string {
        return this.toString();
    }

    push(...items: T[]): number {
        this.data.push(...items);
        return this.length;
    }

    pop(): T | undefined {
        return this.data.pop();
    }

    shift(): T | undefined {
        return this.data.shift();
    }

    unshift(...items: T[]): number {
        this.data.unshift(...items);
        return this.length;
    }

    slice(start?: number, end?: number): T[] {
        return this.data.slice(start, end);
    }

    splice(start: number, deleteCount?: number, ...items: T[]): T[] {
        return this.data.splice(start, deleteCount!, ...items);
    }

    forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void {
        this.data.forEach(callbackfn, thisArg);
    }

    map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[] {
        return this.data.map<U>(callbackfn, thisArg);
    }

    /**
     * 迭代器, 可用于 for...of 循环
     * REF: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator
     */
    [Symbol.iterator]() {
        return this.data[Symbol.iterator]();
    }

    /**
     * 类型标签
     */
    public get [Symbol.toStringTag]() {
        return "Cache";
    }

    /**
     * 强制类型转换
     */
    public [Symbol.toPrimitive](hint: "default" | "number" | "string") {
        switch (hint) {
            case "number":
                return this.length;
            case "string":
                return this.toString();
            default:
                return this.data;
        }
    }

    /**
     * 加载数据
     * @param filepath - 文件路径
     * @returns 是否加载成功
     */
    public async load(filepath: string = this.filepath): Promise<boolean> {
        /* 检查文件是否存在 */
        const files = await this.backend.readDir(this.directory);
        if (files.some((file) => file.name === this.filename && file.isDir === false)) {
            /* 若文件存在则读取文件 */
            const text = await this.backend.getFile(filepath);
            this.clear();
            this.push(...JSONL.parse<T>(text));
            return true;
        }
        return false;
    }

    /**
     * 移除数据
     * @param filepath - 文件路径
     * @returns 是否移除成功
     */
    public async remove(filepath: string = this.filepath): Promise<boolean> {
        /* 检查文件是否存在 */
        const files = await this.backend.readDir(this.directory);
        if (files.some((file) => file.name === this.filename && file.isDir === false)) {
            /* 若文件存在则移除文件 */
            await this.backend.removeFile(filepath);
            return true;
        }
        return false;
    }

    /**
     * 缓存持久化 (自动更新缓存文件名)
     * @param update - (在需要时) 更新文件名
     * @param filepath - 文件路径
     * @returns 缓存是否持久化成功
     */
    public async save(
        update: boolean = true,
        filepath: string = this.filepath,
    ): Promise<boolean> {
        try {
            /* 持久缓存 */
            const result = await this._save(filepath);

            if (update) {
                const cache_file_name = WakaTimeCache.buildCacheFileName();
                if (cache_file_name !== this.filename) { // 需要初始化缓存
                    /* 初始化缓存 */
                    this.init(cache_file_name);
                }
            }

            return result;
        }
        catch (error) {
            void error;
            return false;
        }
    }

    /**
     * 保存缓存数据为 jsonlines 文件
     * @param filepath - 文件路径
     * @returns 是否持久化成功
     */
    protected async _save(
        filepath: string,
    ): Promise<boolean> {
        if (this.data.length > 0) {
            await this.backend.putFile(filepath, this.toString());
            return true;
        }
        return false;
    }
}
