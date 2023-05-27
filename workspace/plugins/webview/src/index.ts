/**
 * Copyright (C) 2023 Zuoqiu Yingyi
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 * 
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import siyuan from "siyuan";

import { isElectron } from "@workspace/utils/env/front-end";
import { Logger } from "@workspace/utils/logger";
import { isMatchedMouseEvent } from "@workspace/utils/shortcut/match";
import { merge } from "@workspace/utils/misc/merge";
import { getBlockID } from "@workspace/utils/siyuan/dom";
import {
    Pathname,
    buildSiyuanWebURL,
    editorType2Pathname,
} from "@workspace/utils/siyuan/url";

// import Settings from "@workspace/components/siyuan/setting/Example.svelte";

import Settings from "./components/Settings.svelte";
import Webview from "./components/Webview.svelte"
import { DEFAULT_CONFIG } from "./configs/default";

import type {
    IConfig,
    IProtocols,
    ITargets,
    IWindowParams,
} from "./types/config";
import {
    openNewWindow,
    type IOverwrite,
    type IWebPreferences,
} from "./utils/window";
import { EditorType } from "~/../../packages/utils/siyuan";

export default class WebviewPlugin extends siyuan.Plugin {
    static readonly GLOBAL_CONFIG_NAME = "global-config";

    public readonly siyuan = siyuan;
    public readonly logger: InstanceType<typeof Logger>;

    protected readonly SETTINGS_DIALOG_ID: string;
    protected readonly webview_tab: ReturnType<siyuan.Plugin["addTab"]>;
    protected config: IConfig;

    constructor(options: any) {
        super(options);

        this.logger = new Logger(this.name);
        this.SETTINGS_DIALOG_ID = `${this.name}-settings-dialog`;

        const plugin = this;
        this.webview_tab = this.addTab({
            type: "-webview-tag",
            init() {
                // pluginContext.logger.debug(this)

                // const target = document.createElement("div");
                // (this.element as HTMLElement).append(target);

                const tab = this;
                new Webview({
                    // target,
                    target: tab.element,
                    props: {
                        src: tab.data.href,
                        tab,
                        plugin,
                    },
                });
            },
        });
    }

    onload(): void {
        // this.logger.debug(this);
        this.loadData(WebviewPlugin.GLOBAL_CONFIG_NAME)
            .then(config => {
                this.config = merge(DEFAULT_CONFIG, config || {}) as IConfig;
            })
            .catch(error => this.logger.error(error))
            .finally(() => {
                if (isElectron()) {
                    /* 注册触发打开页签动作的监听器 */
                    globalThis.addEventListener(this.config.tab.open.mouse.type, this.openTabEventListener, true);
                }
                globalThis.addEventListener(this.config.window.open.mouse.type, this.openWindowEventListener, true);
            })
    }

    onLayoutReady(): void {
        // this.openSetting();
    }

    onunload(): void {
        if (isElectron()) {
            /* 移除触发打开页签动作的监听器 */
            globalThis.removeEventListener(this.config.tab.open.mouse.type, this.openTabEventListener, true);
        }
        globalThis.removeEventListener(this.config.window.open.mouse.type, this.openWindowEventListener, true);
    }

    openSetting(): void {
        const that = this;
        const id = globalThis.crypto.randomUUID();
        const dialog = new siyuan.Dialog({
            title: that.name,
            content: `<div id="${that.SETTINGS_DIALOG_ID}" class="fn__flex-column" />`,
            width: siyuan.isMobile() ? "92vw" : "720px",
            height: siyuan.isMobile() ? undefined : "640px",
        });
        const settings = new Settings({
            target: dialog.element.querySelector(`#${that.SETTINGS_DIALOG_ID}`),
            props: {
                config: this.config,
                plugin: this,
            },
        });
    }

    public async resetConfig(): Promise<void> {
        return this.updateConfig(merge(DEFAULT_CONFIG) as IConfig);
    }

    public async updateConfig(config?: IConfig): Promise<void> {
        if (config && config !== this.config) {
            this.config = config;
        }
        return this.saveData(WebviewPlugin.GLOBAL_CONFIG_NAME, this.config);
    }

    public get useragent(): string {
        return this.config.general.useragent || global.navigator.userAgent;
    }

    public openWebviewTab(href: string, title?: string, icon: string = "iconLanguage") {
        siyuan.openTab({
            custom: {
                icon,
                title: title || this.name,
                fn: this.webview_tab,
                data: {
                    href,
                    title: title || this.name,
                },
            },
        });
    }

    public openWindow(
        href: string,
        params: IOverwrite | IWindowParams = {
            x: 0,
            y: 0,
            title: null,
        },
        webPreferences: IWebPreferences = {
            defaultFontSize: globalThis.siyuan.config.editor.fontSize,
            defaultFontFamily: {
                standard: globalThis.siyuan.config.editor.fontFamily,
            },
        },
    ) {
        try {
            const url = new URL(href);
            const window = openNewWindow(
                url,
                this.config.window.params,
                params,
                webPreferences,
                this,
            );
        } catch (err) {
            this.logger.warn(err);
        }
    }

    public openSiyuanDesktopWindow(e?: MouseEvent): void {
        const params = {
            x: e?.screenX | 0,
            y: e?.screenY | 0,
            title: "desktop",
        }
        this.openWindow(buildSiyuanWebURL(Pathname.desktop).href, params);
    }

    public openSiyuanMobileWindow(e?: MouseEvent): void {
        const params = {
            x: e?.screenX | 0,
            y: e?.screenY | 0,
            title: "desktop",
        }
        this.openWindow(buildSiyuanWebURL(Pathname.mobile).href, params);
    }

    protected isUrlSchemeAvailable(url: string, protocols: IProtocols): boolean {
        for (const key in protocols) {
            const protocol = protocols[key];
            if (protocol.enable && url.startsWith(protocol.prefix)) {
                return true;
            }
        }
        return false;
    }

    /**
     * 获取超链接的元数据
     * @param element: 超链接元素
     * @params targets: 目标配置
     */
    protected parseHyperlinkMeta(element: HTMLElement, targets: ITargets) {
        const meta = {
            valid: false,
            href: undefined,
            title: undefined,
        };
        switch (element.localName) {
            case "a":
                meta.valid = targets.hyperlink.other.enable;
                meta.href = (element as HTMLAnchorElement).href;
                meta.title = element.title || element.innerText;
                break;
            case "span":
                if (/\ba\b/.test(element.dataset.type)) {
                    meta.valid = targets.hyperlink.editor.enable;
                    meta.href = element.dataset.href;
                    meta.title = element.dataset.title || element.innerText;
                }
                break;
            default:
                break;
        }
        return meta;
    }

    protected readonly openTabEventListener = (e: MouseEvent) => {
        // this.logger.debug(e);

        /* 判断功能是否已启用 */
        if (!this.config.tab.enable) return;

        /* 判断事件是否为目标事件 */
        if (!isMatchedMouseEvent(e, this.config.tab.open.mouse)) return;

        const meta = this.parseHyperlinkMeta(e.target as HTMLElement, this.config.tab.open.targets);

        /* 判断目标元素是否有效 */
        if (meta.valid) {
            this.logger.info(meta.href);
            if (this.isUrlSchemeAvailable(meta.href, this.config.tab.open.protocols)) {
                try {
                    e.preventDefault();
                    e.stopPropagation();

                    this.openWebviewTab(meta.href, meta.title);
                } catch (e) {
                    this.logger.warn(e);
                }
            }
        }
    }

    protected readonly openWindowEventListener = (e: MouseEvent) => {
        // this.logger.debug(e);

        /* 判断功能是否已启用 */
        if (!this.config.window.enable) return;

        /* 判断事件是否为目标事件 */
        if (!isMatchedMouseEvent(e, this.config.window.open.mouse)) return;

        const meta = this.parseHyperlinkMeta(e.target as HTMLElement, this.config.window.open.targets);

        /* 判断目标元素是否有效 */
        if (meta.valid) {
            this.logger.info(meta.href);
            if (this.isUrlSchemeAvailable(meta.href, this.config.window.open.protocols)) {
                /* 思源协议 siyuan:// 需要转化为 http(s):// 协议 */
                if (meta.href.startsWith("siyuan://") && this.config.window.siyuan.enable) {
                    meta.href = buildSiyuanWebURL(
                        editorType2Pathname(this.config.window.siyuan.editorType),
                        { url: meta.href },
                    );
                }

                try {
                    e.preventDefault();
                    e.stopPropagation();

                    this.openWindow(meta.href, {
                        x: e.screenX,
                        y: e.screenY,
                        title: meta.title || this.name,
                    });
                } catch (e) {
                    this.logger.warn(e);
                }
            }
        }

        /* 打开思源编辑器 */
        if (this.config.window.siyuan.enable) {
            const block_id = getBlockID(e);
            if (block_id) {
                try {
                    e.preventDefault();
                    e.stopPropagation();

                    this.openWindow(
                        buildSiyuanWebURL(
                            editorType2Pathname(this.config.window.siyuan.editorType),
                            {
                                id: block_id,
                                focus: this.config.window.siyuan.focus,
                            }
                        ).href,
                        {
                            x: e.screenX,
                            y: e.screenY,
                            title: undefined,
                            enableMenuBar: true,
                            autoHideMenuBar: false,
                        },
                    );
                } catch (e) {
                    this.logger.warn(e);
                }
            }
        }
    }
};
