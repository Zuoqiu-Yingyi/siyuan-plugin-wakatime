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

/**
 * 状态信息
 * REF: https://wakatime.com/developers#status_bar
 * REF: https://github.com/wakatime/browser-wakatime/blob/master/src/types/summaries.ts
 */
export namespace Status {
    export interface IRequest extends types.kernel.api.network.forwardProxy.IPayload {
        method: "GET";
        headers: [
            Pick<Context.IHeaders, "Authorization">,
        ];
        timeout: number;
    }
    export interface IResponse {
        /**
         * ISO 8601 UTC datetime when this response was calculated and cached
         */
        cached_at: string;

        /**
         * summary of coding activity for the requested time range
         */
        data: Summary;
    }

    /**
     * response of the summaries endpoint covering a date range
     */
    export interface Summaries {
        /**
         * summaries for each day in the requested range
         */
        data: Summary[];

        /**
         * ISO 8601 UTC datetime marking the end of the range
         */
        end: string;

        /**
         * ISO 8601 UTC datetime marking the start of the range
         */
        start: string;
    }

    /**
     * aggregated coding activity for a single day
     */
    export interface Summary {
        /**
         * coding activity grouped by category (e.g. coding, debugging, building)
         */
        categories: Category[];

        /**
         * coding activity grouped by file dependency
         */
        dependencies: Category[];

        /**
         * coding activity grouped by editor
         */
        editors: Category[];

        /**
         * total coding activity aggregated across all dimensions
         */
        grand_total: GrandTotal;

        /**
         * coding activity grouped by programming language
         */
        languages: Category[];

        /**
         * coding activity grouped by machine
         */
        machines: Category[];

        /**
         * coding activity grouped by operating system
         */
        operating_systems: Category[];

        /**
         * coding activity grouped by project
         */
        projects: Category[];

        /**
         * metadata of the day this summary covers
         */
        range: Range;
    }

    /**
     * coding activity broken down by a single dimension
     * (e.g. one language, editor, machine, project, or category)
     */
    export interface Category {
        /**
         * duration in digital clock format (e.g. "10:30")
         */
        digital: string;

        /**
         * whole hours of activity
         */
        hours: number;

        /**
         * identifier of the machine this entry belongs to;
         * only present in the machines breakdown
         */
        machine_name_id?: string;

        /**
         * whole minutes of activity (the remainder after hours)
         */
        minutes: number;

        /**
         * name of this entry (e.g. language, editor, or project name)
         */
        name: string;

        /**
         * percentage of the grand total, between 0 and 100
         */
        percent: number;

        /**
         * whole seconds of activity (the remainder after minutes)
         */
        seconds: number;

        /**
         * duration in human-readable format (e.g. "10 hrs 30 mins")
         */
        text: string;

        /**
         * total activity duration in seconds
         */
        total_seconds: number;
    }

    /**
     * total coding activity aggregated across all dimensions
     */
    export interface GrandTotal {
        /**
         * duration in digital clock format (e.g. "10:30")
         */
        digital: string;

        /**
         * whole hours of activity
         */
        hours: number;

        /**
         * whole minutes of activity (the remainder after hours)
         */
        minutes: number;

        /**
         * duration in human-readable format (e.g. "10 hrs 30 mins")
         */
        text: string;

        /**
         * total activity duration in seconds
         */
        total_seconds: number;
    }

    /**
     * metadata of the time range a summary covers
     */
    export interface Range {
        /**
         * date of this summary in YEAR-MONTH-DAY format
         */
        date: string;

        /**
         * ISO 8601 UTC datetime marking the end of the range
         */
        end: string;

        /**
         * ISO 8601 UTC datetime marking the start of the range
         */
        start: string;

        /**
         * human-readable description of the range (e.g. "Today")
         */
        text: string;

        /**
         * timezone in Olson Country/Region format (e.g. "Asia/Shanghai")
         */
        timezone: string;
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
