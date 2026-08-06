<!--
 Copyright (C) 2026 Zuoqiu Yingyi

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU Affero General Public License as
 published by the Free Software Foundation, either version 3 of the
 License, or (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.
-->

<!-- 状态面板 -->

<script
    lang="ts"
    module
>
    import type WakaTimePlugin from "@/index";
    import type { Status } from "@/types/wakatime";

    export interface IProps {
        status: Status.IResponse; // 状态信息
        plugin: InstanceType<typeof WakaTimePlugin>; // 插件实例
    }

    export interface IHandlers {}

    export interface ISlots {}

    export type TProps = IProps & IHandlers & ISlots;
</script>

<script lang="ts">
    import Panel from "@workspace/components/siyuan/setting/panel/Panel.svelte";
    import Panels from "@workspace/components/siyuan/setting/panel/Panels.svelte";
    import Tabs from "@workspace/components/siyuan/setting/tab/Tabs.svelte";

    import DimensionChart from "./DimensionChart.svelte";

    import type { ITab } from "@workspace/components/siyuan/setting/tab";

    const { status, plugin }: TProps = $props();

    // svelte-ignore state_referenced_locally
    const i18n = plugin?.i18n;

    const data = $derived(status?.data);

    const PanelKey = {
        overview: "overview",
        breakdown: "breakdown",
    } as const;

    const panels_focus_key = PanelKey.overview;
    const panels: ITab[] = [
        {
            key: PanelKey.overview,
            text: i18n.status.panel.overview,
            name: i18n.status.panel.overview,
            icon: "#iconInfo",
        },
        {
            key: PanelKey.breakdown,
            text: i18n.status.panel.breakdown,
            name: i18n.status.panel.breakdown,
            icon: "#iconList",
        },
    ];

    const DimensionKey = {
        languages: "languages",
        editors: "editors",
        projects: "projects",
        operating_systems: "operating_systems",
        machines: "machines",
        categories: "categories",
        dependencies: "dependencies",
    } as const;

    const breakdown_focus_key = DimensionKey.languages;
    const breakdown_tabs: ITab[] = [
        { key: DimensionKey.languages, text: i18n.status.dimension.languages, name: i18n.status.dimension.languages, icon: "💻" },
        { key: DimensionKey.editors, text: i18n.status.dimension.editors, name: i18n.status.dimension.editors, icon: "✏️" },
        { key: DimensionKey.projects, text: i18n.status.dimension.projects, name: i18n.status.dimension.projects, icon: "📁" },
        { key: DimensionKey.operating_systems, text: i18n.status.dimension.operating_systems, name: i18n.status.dimension.operating_systems, icon: "🖥️" },
        { key: DimensionKey.machines, text: i18n.status.dimension.machines, name: i18n.status.dimension.machines, icon: "🔌" },
        { key: DimensionKey.categories, text: i18n.status.dimension.categories, name: i18n.status.dimension.categories, icon: "🏷️" },
        { key: DimensionKey.dependencies, text: i18n.status.dimension.dependencies, name: i18n.status.dimension.dependencies, icon: "📦" },
    ];
</script>

<div class="status-panel fn__flex-column">
    <Panels
        focus={panels_focus_key}
        {panels}
        let:focus={focusPanel}
    >
        <!-- 概览面板 -->
        <Panel display={panels[0]?.key === focusPanel}>
            {#if data}
                <div class="status-overview">
                    <div class="status-overview__total">
                        <span class="status-overview__digital">{data.grand_total.digital}</span>
                        <span class="status-overview__text">{data.grand_total.text}</span>
                    </div>
                    <div class="status-overview__range">
                        <span>{data.range.text}</span>
                        <span class="status-overview__date">{data.range.date}</span>
                        <span class="status-overview__tz">{data.range.timezone}</span>
                    </div>
                    <div class="status-overview__cached">{i18n.status.cachedAt}: {status?.cached_at}</div>
                </div>
            {:else}
                <div class="status-overview__empty">{i18n.status.noData}</div>
            {/if}
        </Panel>

        <!-- 细分面板 -->
        <Panel display={panels[1]?.key === focusPanel}>
            <Tabs
                focus={breakdown_focus_key}
                tabs={breakdown_tabs}
                let:focus={focusTab}
            >
                {#each breakdown_tabs as tab (tab.key)}
                    <div
                        class:fn__none={tab.key !== focusTab}
                        data-type={tab.name}
                    >
                        {#if plugin && data}
                            <DimensionChart
                                categories={(data?.[tab.key as keyof typeof data] as Status.Category[] | undefined) ?? []}
                                {plugin}
                                title={tab.text}
                            />
                        {/if}
                    </div>
                {/each}
            </Tabs>
        </Panel>
    </Panels>
</div>

<style lang="less">
    .status-panel {
        height: 100%;
    }

    /* chartRender 注入的 protyle-icons (刷新/编辑/更多) 在对话框中无对应处理器，隐藏 */
    :global(.b3-dialog__content) .status-panel .protyle-icons {
        display: none;
    }

    .status-overview {
        padding: 1em;
        display: flex;
        flex-direction: column;
        gap: 0.75em;
    }

    .status-overview__total {
        display: flex;
        align-items: baseline;
        gap: 0.5em;
    }

    .status-overview__digital {
        font-size: 2em;
        font-weight: 600;
    }

    .status-overview__text {
        color: var(--b3-theme-on-surface);
    }

    .status-overview__range {
        display: flex;
        gap: 1em;
        color: var(--b3-theme-on-surface);
    }

    .status-overview__cached {
        color: var(--b3-theme-on-surface-light);
        font-size: 0.875em;
    }

    .status-overview__empty {
        padding: 1em;
        text-align: center;
        color: var(--b3-theme-on-surface);
    }
</style>
