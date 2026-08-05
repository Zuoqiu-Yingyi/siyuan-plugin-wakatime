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

import { Client } from "@siyuan-community/siyuan-sdk";
import siyuan from "siyuan";
import { mount } from "svelte";

import ToolbarItem from "@workspace/components/siyuan/misc/ToolbarItem.svelte";
import {
    FLAG_MOBILE,
} from "@workspace/utils/env/front-end";
import { Logger } from "@workspace/utils/logger";
import { mergeIgnoreArray } from "@workspace/utils/misc/merge";
import { parse } from "@workspace/utils/path/browserify";
import { normalize } from "@workspace/utils/path/normalize";

import manifest from "~/public/plugin.json";

import icon_wakatime_wakapi from "./assets/symbols/icon-wakatime-wakapi.symbol?raw";
import icon_wakatime from "./assets/symbols/icon-wakatime.symbol?raw";
import { DEFAULT_CONFIG } from "./configs/default";
import CONSTANTS from "./constants";

import { statusBarItemProps } from "./components/props.svelte";
import Settings from "./components/Settings.svelte";

import type { ISiyuanGlobal } from "@workspace/types/siyuan";
import type {
    IClickEditorContentEvent,
    IClosedNotebookEvent,
    IDestroyProtyleEvent,
    ILoadedProtyleDynamicEvent,
    ILoadedProtyleStaticEvent,
    IOpenedNotebookEvent,
    ISwitchProtyleEvent,
    IWebSocketMainEvent,
} from "@workspace/types/siyuan/events";
import type { ITransaction } from "@workspace/types/siyuan/transaction";

import type { IConfig } from "./types/config";
import type {
    Context,
    Status,
} from "./types/wakatime";

const siyuanGlobal = globalThis as ISiyuanGlobal;
// eslint-disable-next-line node/prefer-global/process
const siyuanProcess = siyuanGlobal.process;

export default class WakaTimePlugin extends siyuan.Plugin {
    static readonly GLOBAL_CONFIG_NAME = CONSTANTS.GLOBAL_CONFIG_NAME;

    // @ts-expect-error ignore original type
    declare public readonly i18n: I18N;

    public readonly siyuan = siyuan;
    public readonly logger: InstanceType<typeof Logger>;
    public readonly client: InstanceType<typeof Client>;

    protected readonly SETTINGS_DIALOG_ID: string;

    public config: IConfig = DEFAULT_CONFIG;
    protected kernelPluginReady = false;
    protected topBarButton?: HTMLElement; // 顶部菜单栏按钮
    protected statusBarButton?: HTMLElement; // 状态栏按钮

    constructor(options: any) {
        super(options);

        this.logger = new Logger(this.name);
        this.client = new Client(undefined, "fetch");

        this.SETTINGS_DIALOG_ID = `${this.name}-settings-dialog`;
    }

    public override async onload(): Promise<void> {
        // this.logger.debug(this);

        /* 注册图标 */
        this.addIcons([
            icon_wakatime,
            icon_wakatime_wakapi,
        ].join(""));

        /* 加载配置文件 */
        try {
            this.config = mergeIgnoreArray(DEFAULT_CONFIG, await this.loadData(WakaTimePlugin.GLOBAL_CONFIG_NAME) || {}) as IConfig;
        }
        catch (error) {
            this.logger.error(error);
        }
        finally {
            /* 总线 */
            this.eventBus.on("ws-main", this.webSocketMainEventListener);

            /* 编辑器加载 */
            this.eventBus.on("loaded-protyle-static", this.protyleEventListener);
            this.eventBus.on("loaded-protyle-dynamic", this.protyleEventListener);
            this.eventBus.on("switch-protyle", this.protyleEventListener);
            this.eventBus.on("destroy-protyle", this.protyleEventListener);

            /* 编辑区点击 */
            this.eventBus.on("click-editorcontent", this.clickEditorContentEventListener);

            /* 笔记本状态变化 */
            this.eventBus.on("opened-notebook", this.notebookEventListener);
            this.eventBus.on("closed-notebook", this.notebookEventListener);
        }

        /* 绑定 RPC */
        this.kernel.rpc.bind(CONSTANTS.KERNEL_RPC_METHOD.WAKATIME_STATUS, this.updateWakatimeStatus as siyuan.TJsonRpcHandler<void>);

        this.kernel.rpc.call[CONSTANTS.KERNEL_RPC_METHOD.ON_LOAD]?.();
    }

    public override onLayoutReady(): void {
        /* 添加活动记录功能开关 */
        this.topBarButton = this.addTopBar({
            icon: "icon-wakatime",
            title: this.wakatimeRecordStateText,
            position: "right",
            callback: this.toggleRecordState,
        });
        this.updateTopBarButtonState();

        /* 添加状态栏图标 */
        this.statusBarButton = this.addStatusBar({
            element: globalThis.document.createElement("div"),
            position: "right",
        });
        mount(ToolbarItem, {
            target: this.statusBarButton,
            props: statusBarItemProps,
        });
    }

    public override onunload(): void {
        this.eventBus.off("ws-main", this.webSocketMainEventListener);
        this.eventBus.off("loaded-protyle-static", this.protyleEventListener);
        this.eventBus.off("loaded-protyle-dynamic", this.protyleEventListener);
        this.eventBus.off("switch-protyle", this.protyleEventListener);
        this.eventBus.off("destroy-protyle", this.protyleEventListener);
        this.eventBus.off("click-editorcontent", this.clickEditorContentEventListener);
        this.eventBus.off("opened-notebook", this.notebookEventListener);
        this.eventBus.off("closed-notebook", this.notebookEventListener);
    }

    public override openSetting(): void {
        const dialog = new siyuan.Dialog({
            title: `${this.i18n.displayName} <code class="fn__code">${this.name}</code>`,
            content: `<div id="${this.SETTINGS_DIALOG_ID}" class="fn__flex-column" />`,
            width: FLAG_MOBILE ? "92vw" : "720px",
            height: FLAG_MOBILE ? undefined : "640px",
        });
        const target = dialog.element.querySelector(`#${this.SETTINGS_DIALOG_ID}`);
        if (target) {
            mount(Settings, {
                target,
                props: {
                    config: this.config,
                    plugin: this,
                },
            });
        }
    }

    /* 重置插件配置 */
    public async resetConfig(): Promise<void> {
        return this.updateConfig(mergeIgnoreArray(DEFAULT_CONFIG) as IConfig);
    }

    /* 清理缓存 */
    public async clearCache(): Promise<boolean> {
        try {
            await this.kernel.rpc.call.clearCache?.();
            return true;
        }
        catch (error) {
            void error;
            return false;
        }
    }

    /* 更新插件配置 */
    public async updateConfig(config?: IConfig): Promise<void> {
        if (config && config !== this.config) {
            this.config = config;
        }
        this.updateTopBarButtonState();
        await this.updateWorkerConfig();
        return this.saveData(WakaTimePlugin.GLOBAL_CONFIG_NAME, this.config);
    }

    /* 更新内核插件配置 */
    public async updateWorkerConfig(): Promise<void> {
        await this.kernel.rpc.call[CONSTANTS.KERNEL_RPC_METHOD.UPDATE_CONFIG]?.(this.config);
    }

    /**
     * 更新顶部菜单栏按钮状态
     */
    protected updateTopBarButtonState(): void {
        if (this.topBarButton) {
            const enable = this.config.wakatime.record;

            /* 更改顶部菜单栏按钮文本 */
            this.topBarButton.ariaLabel = this.wakatimeRecordStateText;

            /* 更改顶部菜单栏按钮状态 */
            this.topBarButton.classList.toggle("toolbar__item--active", enable);
        }
    }

    /* 切换活动记录状态 */
    protected readonly toggleRecordState = () => {
        this.config.wakatime.record = !this.config.wakatime.record;
        this.updateConfig();
    };

    /* 总线事件监听器 */
    protected readonly webSocketMainEventListener = (e: IWebSocketMainEvent) => {
        // this.logger.debug(e);
        if (e.detail.cmd === "transactions") {
            const transactions = e.detail.data as ITransaction[];

            /* 获取所有更改的块 ID */
            transactions?.forEach((transaction) => {
                transaction.doOperations?.forEach((operation) => {
                    // this.logger.debug(operation);
                    switch (operation.action) {
                        case "create":
                        case "update":
                        case "insert":
                        case "move":
                        case "append":
                        case "appendInsert":
                        case "prependInsert":
                        case "foldHeading":
                        case "unfoldHeading":
                        case "setAttrs":
                        case "doUpdateUpdated":
                            if (this.config.wakatime.record && operation.id) {
                                this.kernel.rpc.call[CONSTANTS.KERNEL_RPC_METHOD.ADD_EDIT_EVENT]?.(operation.id, this.wakatimeEventContext);
                            }
                            break;
                        case "delete": // 忽略删除操作 (避免无法查询块信息)
                        default: // 忽略其他操作 (闪卡, 属性视图等)
                            break;
                    }
                });
                // transaction.undoOperations?.forEach(operation => {
                //     this.addEditEvent(operation.id);
                // });
            });
        }
    };

    /* 编辑器加载事件监听器 */
    protected readonly protyleEventListener = (e: IDestroyProtyleEvent | ILoadedProtyleDynamicEvent | ILoadedProtyleStaticEvent | ISwitchProtyleEvent) => {
        // this.logger.debug(e);
        const protyle = e.detail.protyle;
        if (this.config.wakatime.record && protyle.block.rootID) {
            this.kernel.rpc.call[CONSTANTS.KERNEL_RPC_METHOD.ADD_VIEW_EVENT]?.(protyle.block.rootID, this.wakatimeEventContext);
        }
    };

    /* 编辑器点击事件监听器 */
    protected readonly clickEditorContentEventListener = (e: IClickEditorContentEvent) => {
        // this.logger.debug(e);
        const protyle = e.detail.protyle;
        if (this.config.wakatime.record && protyle.block.rootID) {
            this.kernel.rpc.call[CONSTANTS.KERNEL_RPC_METHOD.ADD_VIEW_EVENT]?.(protyle.block.rootID, this.wakatimeEventContext);
        }
    };

    /* 笔记本事件监听器 */
    protected readonly notebookEventListener = (_e: IClosedNotebookEvent | IOpenedNotebookEvent) => {
        // this.logger.debug(e);
        this.kernel.rpc.call[CONSTANTS.KERNEL_RPC_METHOD.UPDATE_NOTEBOOKS]?.();
    };

    /* 更新 Wakatime 状态 */
    protected readonly updateWakatimeStatus = (status: Status.IResponse) => {
        // this.logger.debug(`wakatime-status:`, status);
        statusBarItemProps.ariaLabel = status.data.grand_total.text;
    };

    /* 测试服务状态 */
    public async testService(): Promise<boolean> {
        const response = await this.kernel.rpc.call[CONSTANTS.KERNEL_RPC_METHOD.WAKATIME_STATUS]?.();
        if (response != null) {
            return true;
        }
        else {
            return false;
        };
    }

    /* 获取一个新 ID */
    public get newId(): string {
        return siyuanGlobal.Lute.NewNodeID();
    }

    /* default project name */
    public get wakatimeDefaultProject(): string {
        return `siyuan-workspace:${this.wakatimeWorkspaceName}`;
    }

    /* default language name */
    public get wakatimeDefaultLanguage(): string {
        return CONSTANTS.WAKATIME_DEFAULT_LANGUAGE;
    }

    /* default API URL */
    public get wakatimeDefaultApiUrl(): string {
        return CONSTANTS.WAKATIME_DEFAULT_API_URL;
    }

    /* default hostname */
    public get wakatimeDefaultHostname(): string {
        return siyuanGlobal.siyuan?.config?.system?.name
            || siyuanProcess?.env?.COMPUTERNAME
            || siyuanProcess?.env?.USERDOMAIN
            || "unknown";
    }

    /* wakatime user agent */
    public get wakatimeDefaultUserAgent(): string {
        return `${CONSTANTS.WAKATIME_CLIENT_NAME // wakatime 客户端名称
        }/${CONSTANTS.WAKATIME_CLIENT_VERSION // wakatime 客户端版本
        } (${this.wakatimeSystemName // 操作系统名称
        }-${this.wakatimeSystemVersion // 操作系统版本
        }-${this.wakatimeSystemArch // 内核 CPU 架构
        }) ${CONSTANTS.WAKATIME_EDITOR_NAME // 编辑器名称
        }/${this.wakatimeKernelVersion // 编辑器版本
        } ${CONSTANTS.WAKATIME_PLUGIN_NAME // 插件名称
        }/${manifest.version // 插件版本
        }`;
    }

    /* 操作系统名称 */
    public get wakatimeDefaultSystemName(): string {
        return siyuanGlobal.require?.("os")?.hostname?.()
            || siyuanGlobal.siyuan?.config?.system?.os
            || siyuanProcess?.platform
            // @ts-expect-error userAgentData 为实验性特性
            || globalThis.navigator.userAgentData?.platform
            || globalThis.navigator.platform
            || "unknown";
    }

    /* 操作系统版本 */
    public get wakatimeDefaultSystemVersion(): string {
        return siyuanGlobal.require?.("os")?.release?.()
            || "unknown";
    }

    /* 内核名称 */
    public get wakatimeDefaultSystemArch(): string {
        return siyuanGlobal.require?.("os")?.arch?.()
            || siyuanProcess?.arch
            || "unknown";
    }

    public get wakatimeWorkspaceDirectory(): string {
        return siyuanGlobal.siyuan?.config?.system?.workspaceDir
            || "unknown";
    }

    public get wakatimeWorkspaceName(): string {
        return parse(normalize(this.wakatimeWorkspaceDirectory)).base;
    }

    public get wakatimeKernelVersion(): string {
        return siyuanGlobal.siyuan?.config?.system?.kernelVersion
            || "0.0.0";
    }

    /* wakatime API base URL */
    public get wakatimeApiBaseUrl(): string {
        return this.config?.wakatime?.api_url || this.wakatimeDefaultApiUrl;
    }

    /* wakatime statusbar url */
    public get wakatimeStatusBarApiUrl(): string {
        return `${this.wakatimeApiBaseUrl}/${CONSTANTS.WAKATIME_STATUS_BAR_PATHNAME}`;
    }

    /* wakatime statusbar url */
    public get wakatimeHeartbeatsApiUrl(): string {
        return `${this.wakatimeApiBaseUrl}/${CONSTANTS.WAKATIME_HEARTBEATS_PATHNAME}`;
    }

    /* wakatime Hostname */
    public get wakatimeHostname(): string {
        return this.config?.wakatime?.hostname
            || this.wakatimeDefaultHostname;
    }

    /* wakatime User Agent */
    public get wakatimeUserAgent(): string {
        return this.config?.wakatime?.useragent
            || this.wakatimeDefaultUserAgent;
    }

    /* wakatime User Agent */
    public get wakatimeProject(): string {
        return this.config?.wakatime?.project
            || this.wakatimeDefaultProject;
    }

    /* wakatime User Agent */
    public get wakatimeLanguage(): string {
        return this.config?.wakatime?.language
            || this.wakatimeDefaultLanguage;
    }

    /* 操作系统名称 */
    public get wakatimeSystemName(): string {
        return this.config?.wakatime?.system_name
            || this.wakatimeDefaultSystemName;
    }

    /* 操作系统版本 */
    public get wakatimeSystemVersion(): string {
        return this.config?.wakatime?.system_version
            || this.wakatimeDefaultSystemVersion;
    }

    /* 内核名称 */
    public get wakatimeSystemArch(): string {
        return this.config?.wakatime?.system_arch
            || this.wakatimeDefaultSystemArch;
    }

    /* 事件上下文 */
    public get wakatimeEventContext(): Context.IEventContext {
        return {
            project: this.wakatimeProject,
            language: this.wakatimeLanguage,
            hostname: this.wakatimeHostname,
            useragent: this.wakatimeUserAgent,
        };
    }

    private get wakatimeRecordStateText(): string {
        return this.config.wakatime.record
            ? this.i18n.topBar.record.enabled
            : this.i18n.topBar.record.disabled;
    }
};
