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

import type { types } from "@siyuan-community/siyuan-sdk";

import type { BlockID } from "@workspace/types/siyuan";

import type { Category, Type } from "@/wakatime/heartbeats";

/**
 * 心跳连接
 * REF: https://wakatime.com/developers#heartbeats
 * REF: https://github.com/wakatime/browser-wakatime/blob/master/src/types/heartbeats.ts
 */
export namespace Heartbeats {
    export interface IAction {
        /**
         * entity heartbeat is logging time against, such as an absolute file path or domain
         */
        entity: string;

        /**
         * type of entity
         */
        type: Type;

        /**
         * category for this activity (optional); normally this is inferred automatically from type
         */
        category?: Category;

        /**
         * UNIX epoch timestamp;
         * numbers after decimal point are fractions of a second
         */
        time: number;

        /**
         * project name (optional)
         */
        project?: string;

        /**
         * count of the number of folders in the project root path (optional);
         * for ex: if the project folder is /Users/user/projects/wakatime and the entity path is /Users/user/projects/wakatime/models/user.py then the project_root_count is 5 and the relative entity path after removing 5 prefix folders is models/user.py
         */
        project_root_count?: number;

        /**
         * branch name (optional)
         */
        branch?: string;

        /**
         * language name (optional)
         */
        language?: string;

        /**
         * comma separated list of dependencies detected from entity file (optional)
         */
        dependencies?: string;

        /**
         * total number of lines in the entity (when entity type is file)
         */
        lines?: number;

        /**
         * number of lines added or removed by GenAI since last heartbeat in the current file (optional)
         */
        ai_line_changes?: number;

        /**
         * number of lines added or removed by old-school typing since last heartbeat in the current file (optional)
         */
        human_line_changes?: number;

        /**
         * AI session id (optional)
         */
        ai_session?: string;

        /**
         * number of user input tokens used since the last heartbeat by GenAI tools (optional)
         */
        ai_input_tokens?: number;

        /**
         * number of output tokens used since the last heartbeat by GenAI tools (optional)
         */
        ai_output_tokens?: number;

        /**
         * number of user prompt characters typed to AI since the last heartbeat (optional)
         */
        ai_prompt_length?: number;

        /**
         * subscription plan for the GenAI tool used for this heartbeat (optional)
         */
        ai_subscription_plan?: number;

        /**
         * current line row number of cursor with the first line starting at 1 (optional)
         */
        lineno?: number;

        /**
         * current cursor column position starting from 1 (optional)
         */
        cursorpos?: number;

        /**
         * whether this heartbeat was triggered from writing to a file (optional)
         */
        is_write?: boolean;
    }

    export interface IRequest extends types.kernel.api.network.forwardProxy.IPayload {
        headers: [
            Context.IHeaders,
        ];
        timeout: number;
        payload: IAction[];
    }
}

export namespace Context {
    export interface IHeaders {
        "Authorization": string; // API KEY
        "User-Agent": string; // System + Version + Editor
        "X-Machine-Name": string; // Machine Name
        [key: string]: string;
    }

    export interface IEvent {
        time: number; // UNIX 时间戳 (单位: s)
        is_write: boolean; // 是否写入
        context: IEventContext; // 上下文
    }

    export interface IRoot {
        id: BlockID; // 文档 ID
        box: BlockID; // 笔记本 ID
        path: string; // 文档路径
        events: IEvent[]; // 事件
    }

    export interface IContext {
        url: string;
        method: "POST";
        Authorization: string;

        includeID: (RegExp | string)[];
        excludeID: (RegExp | string)[];
        include: (RegExp | string)[];
        exclude: (RegExp | string)[];

        blocks: Map<BlockID, BlockID>; // block -> root
        roots: Map<BlockID, IRoot>; // root -> { box, path }
    }

    export interface IEventContext {
        project: string; // 项目名称
        language: string; // 语言名称
        hostname: string; // 设备名
        useragent: string; // 用户代理字段
    }
}
