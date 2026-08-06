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

import type { TProps as TToolbarItemProps } from "@workspace/components/siyuan/misc/ToolbarItem.svelte";

import type { TProps as TStatusProps } from "./Status.svelte";

export const statusBarItemProps = $state<TToolbarItemProps>({
    icon: "#icon-wakatime",
    ariaLabel: "",
    onClick: () => { },
});

export const statusProps = $state<TStatusProps>({
    status: {
        cached_at: "",
        data: {
            categories: [],
            dependencies: [],
            editors: [],
            grand_total: {
                digital: "",
                hours: 0,
                minutes: 0,
                text: "",
                total_seconds: 0,
            },
            languages: [],
            machines: [],
            operating_systems: [],
            projects: [],
            range: {
                date: "",
                end: "",
                start: "",
                text: "",
                timezone: "",
            },
        },
    },
    plugin: undefined!,
});
