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

<script
    lang="ts"
    module
>
    import type WakaTimePlugin from "@/index";
    import type { Status } from "@/types/wakatime";

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
    const { categories, title, plugin }: TProps = $props();

    // svelte-ignore state_referenced_locally
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
                    data: cats.filter((c) => c.total_seconds > 0).map((c) => ({ name: c.name, value: c.total_seconds })),
                },
            ],
        };
    }

    let instance: any;
    let disposed = false;

    // 当 categories 变化且非空时：
    //   1. 用脱离 DOM 的诱饵节点触发 chartRender 加载 echarts 脚本（chartRender 是插件能触达 echarts 的唯一入口，
    //      addScript/Constants.PROTYLE_CDN 属内核内部实现）。诱饵有 data-subtype="echarts" 但无 data-content，
    //      故 chartRender 走完 addScript 链后于 `无 data-content` 分支提前 return，不触碰真实容器、不调用 echarts.init。
    //   2. 轮询 globalThis.echarts 就绪（addScript 按 id 去重，首次后常驻），到顶则显示错误态。
    //   3. 就绪后在真实 container 上手动 echarts.init(...).setOption(option)，teardown 释放实例。
    $effect(() => {
        if (!container || categories.length === 0) {
            return;
        }
        const option = buildOption(categories);

        // 1. 诱饵加载 echarts 脚本（脱离 DOM，不 appendChild）
        const decoy = document.createElement("div");
        decoy.setAttribute("data-subtype", "echarts");
        plugin.siyuan.ProtyleMethod.chartRender(decoy);

        // 2. 轮询就绪
        let tries = 0;
        const MAX_TRIES = 600; // 16ms * 600 ≈ 9.6s，覆盖首次 CDN 加载
        const poll = setInterval(() => {
            if (disposed) {
                clearInterval(poll);
                return;
            }
            if (!(globalThis as any).echarts) {
                if (++tries >= MAX_TRIES) {
                    clearInterval(poll);
                    if (container) {
                        // eslint-disable-next-line svelte/no-dom-manipulating
                        container.innerHTML = `<div class="ft__error" style="height:420px;display:flex;align-items:center;justify-content:center;">${i18n.status.noData}</div>`;
                    }
                }
                return;
            }
            clearInterval(poll);
            if (disposed || !container) {
                return;
            }
            try {
                // 3. 手动 init 真实容器（暗色主题判定与内核 chartRender 同源）
                const dark = (globalThis as any).siyuan.config.appearance.mode === 1;
                instance = (globalThis as any).echarts.init(container, dark ? "dark" : undefined);
                instance.setOption(option);
            }
            catch (error) {
                (globalThis as any).echarts?.dispose(instance);
                instance = undefined;
                // eslint-disable-next-line svelte/no-dom-manipulating
                container.innerHTML = `<div class="ft__error" style="height:420px;display:flex;align-items:center;justify-content:center;">echarts render error: ${String(error)}</div>`;
            }
        }, 16);

        return () => {
            disposed = true;
            clearInterval(poll);
            if (instance) {
                (globalThis as any).echarts?.dispose(instance);
                instance = undefined;
            }
        };
    });
</script>

<h3 class="dimension-chart__title">{title}</h3>
{#if categories.length === 0}
    <div class="dimension-chart__empty">{i18n.status.noData}</div>
{:else}
    <div
        bind:this={container}
        class="dimension-chart__container protyle-wysiwyg"
    ></div>
{/if}

<style lang="less">
    .dimension-chart__title {
        margin: 0 0 0.5em;
        font-size: 1em;
        font-weight: 600;
    }

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
