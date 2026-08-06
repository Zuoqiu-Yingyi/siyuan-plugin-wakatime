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

<!-- 维度图表 -->

<script lang="ts" module>
    import type { Status } from "@/types/wakatime";
    import type WakaTimePlugin from "@/index";

    export interface IProps {
        categories: Status.Category[]; // 一个维度的分项数据
        title: string; // 维度标题 (i18n)
        plugin: InstanceType<typeof WakaTimePlugin>; // 插件实例
    }

    export interface IHandlers {}

    export interface ISlots {}

    export type TProps = IProps & IHandlers & ISlots;
</script>

<script lang="ts">
    import type { ISiyuanGlobal } from "@workspace/types/siyuan";

    const {
        categories,
        title,
        plugin,
    }: TProps = $props();

    const siyuanGlobal = globalThis as ISiyuanGlobal;
    const i18n = plugin.i18n;

    // chartRender 的目标容器根节点
    let container = $state<HTMLDivElement>();

    /**
     * 由 Category[] 构建 echarts 环形图配置
     * value 取 total_seconds（规范时长度量），echarts 据此重新计算占比
     */
    function buildOption(cats: Status.Category[]): Record<string, unknown> {
        return {
            tooltip: {
                trigger: "item",
                formatter: "{b}: {c}s ({d}%)",
            },
            legend: {
                type: "scroll",
                orient: "vertical",
                right: 0,
                top: "middle",
            },
            series: [
                {
                    type: "pie",
                    radius: ["40%", "70%"],
                    avoidLabelOverlap: true,
                    label: {
                        show: true,
                        formatter: "{b} {d}%",
                    },
                    data: cats
                        .filter(c => c.total_seconds > 0)
                        .map(c => ({ name: c.name, value: c.total_seconds })),
                },
            ],
        };
    }

    // 当 categories 变化且非空时，构建 [data-subtype="echarts"] DOM 并调用 chartRender
    $effect(() => {
        if (!container || categories.length === 0) {
            return;
        }
        const option = buildOption(categories);
        const node = document.createElement("div");
        node.setAttribute("data-subtype", "echarts");
        node.setAttribute("data-content", siyuanGlobal.Lute.EscapeHTMLStr(JSON.stringify(option)));
        node.innerHTML = "<div></div>";
        container.innerHTML = "";
        container.appendChild(node);
        plugin.siyuan.ProtyleMethod.chartRender(node);
    });
</script>

{#if categories.length === 0}
    <div class="dimension-chart__empty">{i18n.status.noData}</div>
{:else}
    <div class="dimension-chart__container" bind:this={container}></div>
{/if}

<style lang="less">
    .dimension-chart__container {
        height: 420px;
        width: 100%;
    }

    .dimension-chart__empty {
        padding: 1em;
        color: var(--b3-theme-on-surface);
        text-align: center;
    }
</style>
