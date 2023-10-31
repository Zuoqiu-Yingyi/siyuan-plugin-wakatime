# Changelog

## [0.3.5](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/compare/v0.3.4...v0.3.5) (2023-10-31)


### Miscellaneous

* **wakatime:** release v0.3.5 ([84f62f5](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/84f62f5593bd8da44fa181a54006a547aafc52c6))


### Features

* **open-api:** 添加 `client` 与 `fs` 属性 | Add `client` and `fs` properties. ([4a8d7ad](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/4a8d7ad95aab15d4497a1cd9747561688b5a5d58))
* 监听 `switch-protyle` 事件 | Listen for `switch-protyle` event. ([b62d2b5](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/b62d2b55296a0a27288ba2189a0d4c5575439b8b))


### Performance Improvements

* **custom-fonts:** 优化字体样式预览功能 | Optimize font style preview function. ([ade08d9](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/ade08d9fd69f81cc89ecd954e001c05e00371e71))
* 兼容事件总线 `loaded-protyle-static` | Compatible with event bus `loaded-protyle-static`. ([0d7d052](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/0d7d052ec6ba879cc23bae7bff0990d64b8db371))

## [0.3.4](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/compare/v0.3.3...v0.3.4) (2023-08-29)


### Miscellaneous

* **wakatime:** release v0.3.4 ([1071345](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/107134583eb9bd1cf7e2f645a6e43503eb31d50e))


### Features

* **wakatime:** 监听 `loaded-protyle-dynamic` 与 `destroy-protyle` 事件 | Listen for `loaded-protyle-dynamic` and `destroy-protyle` events. ([c871379](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/c871379d5383d23e16b26ec66455730b5dd7be61))

## [0.3.3](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/compare/v0.3.2...v0.3.3) (2023-08-27)


### Miscellaneous

* **wakatime:** release v0.3.3 ([c4c804b](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/c4c804b9e2cdc575571540ef638b9b17a34f912f))


### Bug Fixes

* 优化插件卸载时对 Worker 的处理 | Optimize the processing of Worker when the plugin is unloading. ([b35e06a](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/b35e06a440b13a1d82f0909d31328117d4355f57))

## [0.3.2](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/compare/v0.3.1...v0.3.2) (2023-08-26)


### Miscellaneous

* **wakatime:** release v0.3.2 ([4d4dd19](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/4d4dd191ab405ec717395be42bc7f4f9f5adadb9))

## [0.3.1](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/compare/v0.3.0...v0.3.1) (2023-08-25)


### Miscellaneous

* **wakatime:** release v0.3.1 ([157fbcd](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/157fbcda7a30ac1e7da0c61f5ddeebcd5228362b))


### Code Refactoring

* **jupyter-client:** 使用 `worker` 重构 | Refactor with `worker`. ([6d4f8f5](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/6d4f8f58db95edc65e1c9b5d4fef18cb460b2639))
* **wakatime:** 使用 `BroadcastChannel` 重构与 Worker 的通讯 | Refactor communication with Worker using `BroadcastChannel`. ([c9a9383](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/c9a9383dbb94a342d8b0888b6a73ba5ea1d020a6))
* **wakatime:** 使用 `BroadcastChannel` 重构与 Worker 的通讯 | Refactor communication with Worker using `BroadcastChannel`. ([dd09154](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/dd09154a18f346ca0932434548c5eb42007ab19e))
* **worker:** 重构 Worker 通讯桥 | Refactor Worker communication bridge. ([5bbaebf](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/5bbaebf18a79c3e7c57efd4899f37d3360e0a76e))

## [0.3.0](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/compare/v0.2.0...v0.3.0) (2023-08-22)


### Miscellaneous

* **wakatime:** release v0.3.0 ([930f35d](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/930f35d95ffc4b75aa1784c0cfdec6ee7834fa26))


### Features

* **wakatime:** 添加设置项 `User-Agent` | Add setting item `User-Agent`. ([8da8f2a](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/8da8f2a7f1a9067c145fe89b5d13843d36e64d12))
* **wakatime:** 添加设置项 `操作系统名称`, `操作系统版本`, `操作系统架构` | Add setting items `OS name`, `OS version`, `OS architecture`. ([99ac59e](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/99ac59e246bf2bfa59c665a01f9c1d32a08a1ce2))


### Code Refactoring

* **wakatime:** 使用 `worker` 重构 | Refactor with `worker`. ([93bec3d](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/93bec3dc525cdd4679d91b719a87611c15a9e110))

## [0.2.0](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/compare/v0.1.2...v0.2.0) (2023-08-18)


### Miscellaneous

* **wakatime:** release v0.2.0 ([0f7790e](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/0f7790e5668ba695cb41470393a6df265789ebdc))


### Features

* **wakatime:** 添加离线缓存功能 | Add offline cache function. ([52b08c3](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/52b08c3c8a9b32ff410f01520445ec3023d6d9d2))

## [0.1.2](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/compare/v0.1.1...v0.1.2) (2023-08-17)


### Miscellaneous

* **script:** 添加附属仓库 `template` 的管理脚本 | Add management scripts for sub-repository `template`. ([38b15a3](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/38b15a33357bd124927f1f1ddf09e786786c830a))
* **wakatime:** release v0.1.2 ([baf56c5](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/baf56c53ca37e5b8c011afce9aa4cabf22bbb2d9))
* 重新添加附属仓库 `template` | Re-add sub-repository `template`. ([84be39e](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/84be39e2a5bd7c33d1ba5adbbfc05cb0dd1d17a3))


### Features

* **template:** 完善插件模板 | Improve plugin template. ([a33c8ee](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/a33c8ee2eb76f2a41a21941231b731fc433fad7c))
* **template:** 完善插件模板 | Improve plugin template. ([3546a74](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/3546a74fd19e7d87db427d40061a508949aceb6e))


### Bug Fixes

* **wakatime:** fix(wakatime): 捕获删除块导致的异常 | Catch exceptions caused by deleted blocks. ([4393980](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/4393980ca5d495c025c94d6a1fe4b27d470beabd))
* **wakatime:** 捕获删除块导致的异常 | Catch exceptions caused by deleted blocks. ([efc1c37](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/efc1c3744d780c76a38ca0d99be865bc9cbdfd45))

## [0.1.1](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/compare/v0.1.0...v0.1.1) (2023-08-15)


### Miscellaneous

* **wakatime:** release v0.1.1 ([859c2ba](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/859c2ba2229a212605c11ed12ec3c89ed360ffa0))


### Features

* **wakatime:** 实现包含列表与排除列表功能 | Implement include list and exclude list function. ([f05fe9f](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/f05fe9f757f3f70af8ee4ebe1a10260fa72e9e68))
* **wakatime:** 添加包含列表与排除列表设置项 | Add include list and exclude list setting items. ([b36fd14](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/b36fd143190da79fcebfb4137b60d10912b5d80a))

## 0.1.0 (2023-08-15)


### Miscellaneous

* **wakatime:** release v0.1.0 ([afc0af6](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/afc0af694c6ddedc1773da391bd0fd87f68433a3))


### Documentation

* **wakatime:** 完善 `i18n` | Complete `i18n` ([3eb3af9](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/3eb3af9cc117ae5d3a587e70f9dd3f3e6747d088))
* **wakatime:** 完善文档说明 | Improve documentation ([f98a8fa](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/f98a8faf655d49a7d56591995ca91d6cd1d10c46))


### Features

* **wakatime:** 实现 `wakatime` 插件基础功能 | Implement the basic functions of the `wakatime` plugin. ([fe454c2](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/fe454c213dfb8d70c134820f5a64c44ef025286c))
* **wakatime:** 实现设置面板 | Implement settings panel. ([db49357](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/db49357caddb58917ccbeefb57ab46e088e120ac))
* **wakatime:** 添加 `hostname` 设置项 | Add `hostname` setting item. ([5ee3e8b](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/5ee3e8b8f945e71ff0f93f64555dc8a17f05d285))
* **wakatime:** 调整心跳活动推送策略 | Adjust the heartbeat activity push strategy. ([ff14be9](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/ff14be967bde68dfd33c90bd7ad337ee7704776b))
