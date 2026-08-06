# Changelog

## [0.4.1](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/compare/v0.4.0...v0.4.1) (2026-08-06)


### Miscellaneous

* release v0.4.1 ([013522e](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/013522e655e6594be0ed12e25358a46c696d242a))
* **release:** bump version to 0.4.1 in package.json, plugin.json, and release-please-config.json ([a54367e](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/a54367e77f546a7e4a444158c6ad42e42068c43c))


### Features

* **i18n:** update status messages and add time range labels in English and Chinese translations ([0aaa4bb](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/0aaa4bbb679cc49fb4ddebb4e78c3f54abd7d6e1))
* **wakatime:** add reusable DimensionChart component ([d389236](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/d389236333b617a0a0426dbe932588e048145a24))
* **wakatime:** add status command and enhance settings with activity status information ([ca6ca70](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/ca6ca70298a96b44dc12beb5fe99f2cb4ec4b7af))
* **wakatime:** add status panel dialog id constant ([a04a4b3](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/a04a4b3bd6a048e1341b93d296db6df66ec0afdd))
* **wakatime:** add status panel i18n keys ([bf7228d](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/bf7228d2e143b99ec564cbab2f3569b534456682))
* **wakatime:** enhance DimensionChart and Status components with improved props and rendering logic ([e417996](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/e417996f1047ad2a6296f2a29dea867b8c6d8c0a))
* **wakatime:** implement status panel layout with charts ([bb96663](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/bb966638e05480797a3d762fce1a18bc5071f8cb))
* **wakatime:** open status panel dialog from status bar ([1e7730b](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/1e7730b15c249a736927a34c9f20941fb0e7fda5))
* **wakatime:** render chart via chartRender lure + manual echarts.init ([0e68461](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/0e68461471f42388982edd66e406275e8ef07f2c))
* **wakatime:** update i18n files and enhance status handling in components ([1f6e633](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/1f6e633eaa1be80c16576f0e58b41a710ccba9fb))


### Bug Fixes

* **wakatime:** render chart title heading and suppress plugin capture warning ([77acf43](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/77acf431c352bc424c0c532910652fa76647d10f))
* **wakatime:** type-safety, i18n guard, and lint in status panel components ([1318d41](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/1318d41c64fd4fb1162506af247b6f8a6d91665c))


### Code Refactoring

* **wakatime:** drop protyle-icons CSS hack from Status ([a845ffd](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/a845ffdcee78b13707f433185d560541c747d436))
* **wakatime:** restore typed siyuanGlobal alias in DimensionChart ([b07a09a](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/b07a09acd0acc57ea059a2977fced187e3e6d225))

## [0.4.0](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/compare/v0.3.8...v0.4.0) (2026-08-05)


### Build System

* **wakatime:** add kernel build mode producing dist/kernel.js ([b9410ee](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/b9410ee498e90e8d512b85b08f8ef500dcda1f9e))


### Miscellaneous

* release v0.4.0 ([3627be9](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/3627be94c0b8d585ba46226041bf6c899228b6cf))
* **vite:** update entry resolution to use import.meta.dirname ([2b28352](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/2b283520e15cfe4c40d37251900582e619b1808b))


### Features

* **version:** update version to 0.4.0 in package.json, plugin.json, and release-please-config.json ([ac85e8a](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/ac85e8a94d92fdc1ce5fef1720d1a8bfebe7f739))
* **wakatime:** add KERNEL_CACHE_PATH constant for kernel cache dir ([c05ede6](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/c05ede672dbb969a6000ea34cd3afc0c8148004f))
* **wakatime:** add local activity recording and push functionality ([22ea760](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/22ea7605704217a00447e5e548398f56dac0fc14))
* **wakatime:** add status bar item properties and integrate WakaTime status updates ([f5dce0b](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/f5dce0b1f7b618950d1772c9d4acb8e00c01f84c))
* **wakatime:** add top bar button for activity recording and update i18n files ([686ee04](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/686ee04e2cfc234058186ff5d42e880c47cd09f8))
* **wakatime:** implement kernel plugin with rpc/storage/forwardProxy ([1d7007c](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/1d7007cc56bf49c9aa1deffac7d4d28c737b3919))
* **wakatime:** implement top bar recording button with state management and i18n updates ([5beff6b](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/5beff6bc1eee3f056d4de74e287ca3e591ddc9d1))


### Bug Fixes

* **wakatime:** fix two svelte-check type errors ([970cec4](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/970cec4587bdfe74f0d7646a48f8d72618b32d00))


### Code Refactoring

* **onload:** convert onload to async and streamline configuration loading ([0af6218](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/0af6218b7aded71acedb8e4e14e86e3da5e23ecc))
* **wakatime:** drive kernel plugin via this.kernel.rpc ([3f0069f](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/3f0069f4b849a3e8c0c46ba5c345beebb5e27429))
* **wakatime:** extract IStorageBackend for cache, worker injects SDK adapter ([71810d4](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/71810d4fbe0e69d1bb4103c46aa9bca889e19a93))
* **wakatime:** extract IStorageBackend interface for cache ([cc92ea9](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/cc92ea92f2a12ccb74d7c763cb5ad8bdc9657edc))
* **wakatime:** simplify cache management and enhance event context handling ([baf94f9](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/baf94f9e806a09050c5eabc705616c2ac161a9f5))
* **wakatime:** streamline build scripts and enhance kernel plugin event handling ([6c53e94](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/6c53e9408e1c70a305adb85a629d5f5086739fdb))
* **wakatime:** update build configuration and remove unused worker script ([391aec4](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/391aec437b3a8e099c83cde7db83dfa6804ebf40))

## [0.3.8](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/compare/v0.3.7...v0.3.8) (2026-08-04)


### Miscellaneous

* release v0.3.8 ([68d6d32](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/68d6d3223c2a39bbec2452903e755d73f42f9ea0))
* **release:** bump version to 0.3.8 in package.json and plugin.json ([ed38615](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/ed3861513d0a34b621a08f8a44e95a4e42ef2ffd))


### Continuous Integration

* **build:** disable automatic installation during pnpm setup and add explicit install step ([b5ec4ba](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/b5ec4ba2206460b8c2b3ced5fda1b2b9ff4dcb95))

## 0.3.7 (2026-08-04)


### Build System

* **metadata:** 添加附属仓库 `metadata` | Add sub-repository `metadata`. ([c615c37](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/c615c37c3d09f0ba8ba036a5cacf58a66e4f9e1e))
* **metadata:** 添加附属仓库 `metadata` | Add sub-repository `metadata`. ([8a12f35](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/8a12f35658bd87b4b0adfb55a271cadb790116dd))
* **siyuan:** 使用思源提供的类型定义文件 | Use the type definition file provided by SiYuan. ([7247bd8](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/7247bd8af617f79584f3f20ff956a1a31ee7408a))
* **siyuan:** 使用思源提供的类型定义文件 | Use the type definition file provided by SiYuan. ([6945a95](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/6945a9560342fa9c40033f043de8d06d05ef1380))
* update dependencies ([d56656b](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/d56656bf652cee53e207be9d218c218a8ccc6faa))
* update dependencies ([a4e82a6](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/a4e82a61d7e4e3fa35ac6dc1a9d7d9cd3d342ff4))
* update dependencies ([a9fa5f5](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/a9fa5f5ff0b9ffa5f3c5ac564fc71d53721b7a76))
* update dependencies ([f141af5](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/f141af5ca6241203ebf0ee4ce9636dfd295f81a7))
* 更新依赖项 | Update dependencies. ([b671b09](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/b671b099d65c91df05106bc7c36c36d51f2f5c57))
* 更新依赖项 | Update dependencies. ([bae19bc](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/bae19bc71d6da9c32832ae76cede5dad16cff94a))
* 更新依赖项 | Update dependencies. ([9a8156c](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/9a8156cbd62501bbcea214be0a222ac364934243))
* 更新依赖项 | Update dependencies. ([e23d68d](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/e23d68db60fb772320fb7fb2f824dca51ad65942))


### Miscellaneous

* add release-as field to release-please-config ([2fdfe48](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/2fdfe481b4b6f0fc36a4ebb798f3ef562e07bb8b))
* **apis:** 新增 `json-schema` 相关依赖 | Add `json-schema` related dependencies. ([a9f501e](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/a9f501e30e06435368117b05e5392d7b96784f9d))
* **apis:** 新增 `json-schema` 相关依赖 | Add `json-schema` related dependencies. ([2b396a6](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/2b396a64d7f712aa00ba7a6ca67a50100628c725))
* **apis:** 迁移仓库 `siyuan-api-interface` 至 `workspace/packages` 目录 | Migrate repository `siyuan-api-interface` to `workspace/packages` directory. ([daad4fc](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/daad4fcb11ddc53b6d4c8e11daf88b88d7e3fb56))
* **custom-block:** release v1.0.0 ([5640adc](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/5640adc211f2f2cfd22d0e6a3a54d25713443fb0))
* **custom-block:** release v1.0.0 ([b0fada1](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/b0fada1bf12d7e8b0505fe28fac5d297fa988ab7))
* **custom-block:** release v1.0.1 ([203e2b6](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/203e2b69e6638ff77ae704d51ea2b44caa929337))
* **custom-block:** release v1.0.1 ([b0aae09](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/b0aae09e217a87b773e4e24e2040c7ce1a6e538f))
* **custom-block:** release v1.0.2 ([e005544](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/e0055444aba8d54d979db25d2aa44564ad82ac06))
* **custom-block:** release v1.0.2 ([bc6ded7](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/bc6ded7eeb696e552cfae830dad90a1a465363ee))
* **custom-fonts:** release v1.0.0 ([dbdb4b8](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/dbdb4b82da1ea1b6b2993fb1f2f6d4a77de046ec))
* **custom-fonts:** release v1.0.0 ([34c3029](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/34c3029cadfec6fac0ebb23666dcd238edadcd1b))
* **custom-fonts:** release v1.1.0 ([dc06db4](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/dc06db4f2a0d2b6d3d9a7133cf20f7634f5f5458))
* **custom-fonts:** release v1.1.0 ([13dff65](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/13dff653486df5ad6d159d40254dd418799660f6))
* **custom-fonts:** 将推特表情符号字体由 `Twitter Color Emoji` 替换为 `Twemoji Mozilla` | Replace the Twitter emoji font from `Twitter Color Emoji` to `Twemoji Mozilla`. ([75ef9c6](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/75ef9c61842011f8583ba5a644f6fd9136d86031))
* **custom-fonts:** 将推特表情符号字体由 `Twitter Color Emoji` 替换为 `Twemoji Mozilla` | Replace the Twitter emoji font from `Twitter Color Emoji` to `Twemoji Mozilla`. ([7c0d873](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/7c0d873275698cfffbd7105650edf5c9375fb2b3))
* **custom-fonts:** 添加附属仓库 `custom-fonts` 的管理脚本 | Add management scripts for sub-repository `custom-fonts`. ([56b391d](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/56b391d2adde3966edececce5934752f457fef80))
* **main:** release 0.1.0 ([6fe5bd6](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/6fe5bd68bc1543283e54ae6abd15835a4fe01678))
* **main:** release 0.1.0 ([37facfd](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/37facfd4bfb3497527c4946b979ba49cf2beb6e7))
* **main:** release 0.1.0 ([87d9b72](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/87d9b725e0bef5dc73a9124c3aaad3901a28dbb0))
* **main:** release 0.1.0 ([444921c](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/444921cf7c242e5ba969de5dd27cb31b98508ea1))
* **main:** release 0.1.1 ([122653b](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/122653b52a4f2ea1830fc557c62232282c3d7bbe))
* **main:** release 0.1.1 ([690a90d](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/690a90df93b6ded7a24f28a0c95bb950770ba56e))
* **main:** release 0.1.2 ([5e2e2ae](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/5e2e2aea1294cdd6097f068b63d9c96b561c06df))
* **main:** release 0.1.2 ([a8d3a8f](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/a8d3a8fe66bb9af9f8a03a9bd01d68e75b6e8b50))
* **main:** release 0.2.0 ([3118944](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/3118944de47658e8e64803861e0a332af3d3afc8))
* **main:** release 0.2.0 ([80b7488](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/80b74883b187cee95220ba8319e6c27475c791fa))
* **main:** release 0.3.0 ([be93dc6](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/be93dc6df338617eff2cdce842c53a542a93f85b))
* **main:** release 0.3.0 ([fb051cf](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/fb051cf9ff158d341fc17f9ed833c81db0ad9321))
* **main:** release 0.3.1 ([cabc60e](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/cabc60e37f5322407343252ca1586e766218cb62))
* **main:** release 0.3.1 ([a644795](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/a644795c8530e492053ef434b72b5ea773723948))
* **main:** release 0.3.2 ([a4d95be](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/a4d95be2208d5d7d085dfaa2f0e24e9d34d74cfd))
* **main:** release 0.3.2 ([023ed20](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/023ed203e6a8de484203cc5c8a84274bfff1906a))
* **main:** release 0.3.3 ([c637c85](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/c637c85e8c3e9969acd67782d9962c351be7101f))
* **main:** release 0.3.3 ([f3485fa](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/f3485faa99ea5b19e3ec62c355ff66f3876918d1))
* **main:** release 0.3.4 ([b16ed13](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/b16ed1327e7f80e147932e5e09bb9ac1963223b3))
* **main:** release 0.3.4 ([fde27cd](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/fde27cdcdcdcaa68c494550b358852ce87b194dc))
* **main:** release 0.3.5 ([51d7e35](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/51d7e35ce8ce2eaecd2b12558e606362ba5c5b5c))
* **main:** release 0.3.5 ([e849276](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/e84927647f8d9aee99e3c348d491571ed7f58c25))
* **main:** release 0.3.6 ([633023e](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/633023ed09f46c28e047c62268bd1e00a162b134))
* **main:** release 0.3.6 ([5f40007](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/5f40007c8e6aa926d8d525610a55fea1611b8fea))
* **main:** release 1.0.0 ([6fdec25](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/6fdec259e9d0208091dcc686cba9ca4e2e43b59a))
* **main:** release 1.0.0 ([154feee](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/154feee92118d5a8c2cfaef48f630397def787cf))
* **main:** release 1.0.1 ([16fedbb](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/16fedbbb00227955c26142fd49139b4e1134db48))
* **main:** release 1.0.1 ([04e5aed](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/04e5aedb3a8d8562866725ff63e827c694cbf472))
* **main:** release 1.1.0 ([9a679e3](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/9a679e310350bb6a87685bca310081ac6a979546))
* **main:** release 1.1.0 ([915970e](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/915970e6e6717f5852aea8079ce11d60032df0e5))
* **main:** release 1.2.0 ([9fbc31c](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/9fbc31c5b8eeced505a44f5312ead0a721a6e12c))
* **main:** release 1.2.0 ([f362f7b](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/f362f7bebb922ae830131aca5c00fa687da7cc37))
* **metadata:** release v1.0.0 ([5db9aca](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/5db9aca20a0a47162a095bb92a72c87d34ff3e6c))
* **metadata:** 完善 `metadata` 的配置清单 | Improve the manifest of `metadata`. ([390874c](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/390874c3aeb4ead1306532a632980518bbf47209))
* **metadata:** 完善 `metadata` 的配置清单 | Improve the manifest of `metadata`. ([6d0faa5](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/6d0faa5d833b72cf610a8fd2d29bb36aecf5e7c3))
* **monaco-editor:** readd subtree ([c33eedd](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/c33eedd41411566c2037a84fc725960ee4b56724))
* **monaco-editor:** release v0.1.0 ([f07c5de](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/f07c5de25e307d65cc12897df47db5f5b532cf9a))
* **monaco-editor:** release v0.1.0 ([bcf25e4](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/bcf25e4a2a91b8be930038f0a27b80e6853116d0))
* **monaco-editor:** release v0.1.1 ([6b4071a](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/6b4071ae89a570d9926ffab3580880b1097348c6))
* **monaco-editor:** release v0.1.1 ([0624da1](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/0624da17807778e45197be26869ab597b4067e1b))
* **monaco-editor:** release v0.1.2 ([5329be5](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/5329be5e61fd20bea2d7f0724b4700497646c90b))
* **monaco-editor:** 初始化仓库 | Initialize repository. ([9c0d455](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/9c0d455105ccd76a02fd11e8648b727110fbe70a))
* **monaco-editor:** 初始化仓库 | Initialize repository. ([3c9e4c6](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/3c9e4c697221802c1c4121a971bab84ac548e2f7))
* **openCC:** 初始化仓库 | Initialize repository. ([769da9d](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/769da9d771e70173f252874aaa5e470479eadf24))
* readd `custom-block` ([92bb56e](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/92bb56e88d1555b30831b94183245a2a29902871))
* readd `custom-fonts` ([5f39fa6](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/5f39fa685b6fb3b58cd2b9606320c90ea056c8a0))
* rebase dev onto origin/main ([95a8695](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/95a8695036ab8fabd104f572616660cfd9ffbdbf))
* release `v1.0.0` ([48d3f54](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/48d3f5456ad60125fc79a28d58cb291c2e664421))
* release `v1.0.1` ([ef473ca](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/ef473caf3dbc3afe15d68a249494287286787e9e))
* release v0.1.0 ([5b4d7b9](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/5b4d7b92d3effc6cbfc8e1a47e01d6055e8f6c81))
* release v0.1.0 ([b4b6a3b](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/b4b6a3bcd48332bf76ea4f99eb44ed516cb4bcda))
* release v0.1.1 ([f8ed131](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/f8ed131fc7a183cd9d758fa3826edbd9bae0cdbf))
* release v0.1.2 ([5eea405](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/5eea40510af6026f0d4e1436e476c20fb212a71d))
* release v0.2.0 ([d77e802](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/d77e802705c48243e42cf9e4e4a8fcc00fa6c348))
* release v0.3 ([fb2e44e](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/fb2e44efb9bd86194f31b5e1adbd991ef018f877))
* release v0.3.0 ([6599fb7](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/6599fb7e70b95f0ea991e7947d4a737cae725a54))
* release v0.3.2 ([3557be3](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/3557be3249e7fcb73558262bda97db274792c9ef))
* release v0.3.3 ([b4b2ae0](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/b4b2ae0b6c8f8172b494dd221d62345d2d70f05b))
* release v0.3.4 ([044ed99](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/044ed994d6893c8c464bd0ed7a63e3bb2726a6d0))
* release v0.3.5 ([ed706d9](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/ed706d9d1ae05cff37d31ac27ce6bb90c8e89eb1))
* release v0.3.6 ([bce3b5f](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/bce3b5f38bb0ff881a08be22034bd281ee7aaa9c))
* release v0.3.7 ([2c0d07c](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/2c0d07c5a12dc25260db69a8a08477760dd32d72))
* release v1.0.2 ([b3d3284](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/b3d32842b12633268a42bd869c8ca09ef3b30f68))
* release v1.1.1 ([697fa22](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/697fa226810a6669b5e8980b3f4806764ab1619e))
* **scripts:** 添加附属仓库 `chinese-convert` 的管理脚本 | Add management scripts for sub-repository `chinese-convert`. ([79dc1a6](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/79dc1a61462870b06df35620fdb37b54a7e51872))
* **scripts:** 添加附属仓库 `metadata` 的管理脚本 | Add management scripts for sub-repository `metadata`. ([ce1df6d](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/ce1df6dbde4bbaa45b2351d595fab8bc5fc1e022))
* **scripts:** 添加附属仓库 `monaco-editor` 的管理脚本 | Add management scripts for sub-repository `monaco-editor`. ([2e6f797](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/2e6f797ddc794143cb9490dc47ff45d629b3c7dd))
* **script:** 添加附属仓库 `custom-block` 的管理脚本 | Add management scripts for sub-repository `custom-block`. ([f800477](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/f8004779fb5c5f10100bd8c000138329c7dc0dcb))
* **script:** 添加附属仓库 `template` 的管理脚本 | Add management scripts for sub-repository `template`. ([38b15a3](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/38b15a33357bd124927f1f1ddf09e786786c830a))
* **script:** 添加附属仓库 `wakatime` 的管理脚本 | Add management scripts for sub-repository `wakatime`. ([198d146](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/198d14634225e047f0ab13c763dbf80e0ea4f5e7))
* update version to 0.3.7 in package.json, plugin.json, and release-please-config.json; fix default language casing in constants.ts ([d31b9d6](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/d31b9d6c9d0c3ea3e30d12002e60752054da2cc6))
* **wakatime:** release v0.1.0 ([afc0af6](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/afc0af694c6ddedc1773da391bd0fd87f68433a3))
* **wakatime:** release v0.1.0 ([35bd041](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/35bd041f3d08cc44fc26a11771afdeac1b72249c))
* **wakatime:** release v0.1.1 ([165ffcb](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/165ffcb6d8681b84752fc10eaf9c2cd013cd3214))
* **wakatime:** release v0.1.1 ([859c2ba](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/859c2ba2229a212605c11ed12ec3c89ed360ffa0))
* **wakatime:** release v0.1.1 ([8035ab8](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/8035ab83c3418b0397f602446222264cb50e1e1f))
* **wakatime:** release v0.1.2 ([a36832f](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/a36832fa5090897e36580d7eb370f35b9e3845e0))
* **wakatime:** release v0.1.2 ([baf56c5](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/baf56c53ca37e5b8c011afce9aa4cabf22bbb2d9))
* **wakatime:** release v0.2.0 ([e6991df](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/e6991dfacdab1a51b8c0be7178dcab9cfa9b4129))
* **wakatime:** release v0.2.0 ([0f7790e](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/0f7790e5668ba695cb41470393a6df265789ebdc))
* **wakatime:** release v0.3.0 ([930f35d](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/930f35d95ffc4b75aa1784c0cfdec6ee7834fa26))
* **wakatime:** release v0.3.1 ([157fbcd](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/157fbcda7a30ac1e7da0c61f5ddeebcd5228362b))
* **wakatime:** release v0.3.2 ([4d4dd19](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/4d4dd191ab405ec717395be42bc7f4f9f5adadb9))
* **wakatime:** release v0.3.3 ([c4c804b](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/c4c804b9e2cdc575571540ef638b9b17a34f912f))
* **wakatime:** release v0.3.4 ([1071345](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/107134583eb9bd1cf7e2f645a6e43503eb31d50e))
* **wakatime:** release v0.3.5 ([84f62f5](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/84f62f5593bd8da44fa181a54006a547aafc52c6))
* **wakatime:** 重新添加附属仓库 `wakatime` | Re-add sub-repository `wakatime`. ([ddad458](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/ddad458808c4f57029c7cefe3e3d01a108a709ab))
* **wakatime:** 重新添加附属仓库 `wakatime` | Re-add sub-repository `wakatime`. ([bdec504](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/bdec5041ef281b5565d7b17f811cdef8b05c288f))
* **webviewi:** remove webview module ([bef8182](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/bef81826b75bb8cb99d8433d5845d8de918bea74))
* **webview:** release v1.0.0 ([06bc992](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/06bc992b257702297d0c8c7854d0fee661d144fe))
* **webview:** release v1.0.0 ([d57bcf4](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/d57bcf4a393078f138fdcf82e464f930d65e5a95))
* **webview:** release v1.0.1 ([de89d32](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/de89d325f4a8136a5382273c8c601138cc8431d1))
* **webview:** release v1.0.1 ([05fa223](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/05fa2232ae01bfb2d14f96e7803c3f8f4ed0aa2f))
* **webview:** release v1.0.2 ([9f04d1c](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/9f04d1c5be0146a84fd3cea8d0ebbbe007262eb5))
* **webview:** release v1.0.2 ([2e95a24](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/2e95a2469c6eb5d30770ea308d560d6d97794a05))
* **webview:** release v1.1.1 ([1995248](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/19952489a5804b9578ed91d0ca02115b072809cd))
* **webview:** release v1.1.1 ([112b56a](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/112b56ac878321f71ba521139eb40e32a1a1dc55))
* **webview:** release v1.3.0 ([6af1519](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/6af1519a1ec21e8f4d30afb7af10334326a91c37))
* **webview:** release v1.3.0 ([d04daa1](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/d04daa116a409e3c09fb28fc7d6a8ae683682484))
* **webview:** release v1.3.1 ([d81ba84](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/d81ba840bf04b37392ddcd4d7147c916d264647f))
* **webview:** release v1.3.1 ([d0a24b9](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/d0a24b9311220f2fe6d8d495a10fd81fad73cdef))
* **webview:** 清单新增字段 `backends` 与 `frontends` | Manifest adds fields `backends` and `frontends`. ([67cc633](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/67cc6335361991a093512ee31710639cf6a89148))
* **webview:** 清单新增字段 `backends` 与 `frontends` | Manifest adds fields `backends` and `frontends`. ([fd4e50d](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/fd4e50d7e4a2b601336d4407397ae9dad8085046))
* 更新依赖 | Update dependencies. ([42fa457](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/42fa45766941fa6fd91e1ebc707e92cb9b681055))
* 更新依赖 | Update dependencies. ([cd82e8e](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/cd82e8e20b29ff57471995baeb4669cff1dc54f4))
* 更新依赖 | Update dependencies. ([c15c2ba](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/c15c2bafcde1416f1f2ea347dc6b9eba06b7009c))
* 更新第三方依赖 | Update third-party dependencies. ([432097b](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/432097b660140b0ca2ff49fcb6e7e18859057794))
* 重新添加附属仓库 `template` | Re-add sub-repository `template`. ([84be39e](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/84be39e2a5bd7c33d1ba5adbbfc05cb0dd1d17a3))


### Continuous Integration

* **build:** streamline Node.js setup by replacing setup-node with pnpm/setup and removing redundant installation steps ([7af96ed](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/7af96ed706999fa32f925b0e3a688c5f544be928))
* **custom-block:** 添加 CD 脚本 | Add CD scripts. ([128bcb7](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/128bcb7a6fcb0906915ceb326bb1006b8cf0ddcb))
* **custom-block:** 添加 CD 脚本 | Add CD scripts. ([5444aaf](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/5444aaffd7865b21d44d9c140f3f4548264c334c))
* **custom-fonts:** 添加 CD 配置 | Add CD configuration. ([6f6d4da](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/6f6d4daa170de6f10b03e74f26575d92ad7bbcd3))
* **custom-fonts:** 添加 CD 配置 | Add CD configuration. ([2cb23cf](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/2cb23cf640cc8cc145210075103a79ffea841cf5))
* **metadata:** 添加 CD 配置 | Add CD configuration. ([7eccd4b](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/7eccd4b9e13c38542c467b9829b8d582aaf58fa0))
* **metadata:** 添加 CD 配置 | Add CD configuration. ([adb93d3](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/adb93d37d487ab4b11358f3880fe3040a75c864d))
* **webview:** 添加 CD 配置 | Add CD configuration. ([5c3c64c](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/5c3c64ccec28ed10dce4714cacf34f097ada5a2f))
* **webview:** 添加 CD 配置 | Add CD configuration. ([39d03bc](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/39d03bcf3e9dd2c8ab59b32e59d23f9528a19561))
* 优化 CD 配置 | Optimize CD configuration. ([3069692](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/3069692f5f9da5e3ef3f9c05502865bde30aad1d))
* 优化 CD 配置 | Optimize CD configuration. ([90d7c83](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/90d7c83d874aa97284ca84530c6a89d49c5a1f48))
* 优化 CD 配置 | Optimize CD configuration. ([ee1e8fc](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/ee1e8fc61c066d18b47c150d9875907daac2f2aa))


### Documentation

* **custom-block:** Optimize document ([c84f1c1](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/c84f1c102d64a50322a179ee1be4b820f95df3ad))
* **custom-block:** Optimize document ([cee0f45](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/cee0f45cf5648bf379eb98dfc9b84fc328be3bc3))
* **custom-block:** 在 `README.md` 中添加常见问题 | Add Q&A in `README.md`. ([4f24582](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/4f24582736e70d9efafa909ac6cbddf21a72b163))
* **custom-block:** 在 `README.md` 中添加常见问题 | Add Q&A in `README.md`. ([8f0fb1f](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/8f0fb1f8e2ab44270e48c87453a4e0678cf507dd))
* **custom-block:** 完善文档 | Improve documentation. ([b08f5a2](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/b08f5a26254c19905561a7a037bb8307c146d213))
* **custom-block:** 完善文档 | Improve documentation. ([6e238e3](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/6e238e3efaa5ad025a686e4abd80cbd3e9b9abbe))
* **custom-block:** 添加预览图 | Add preview image. ([f96d37c](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/f96d37ca4cf1fb205c28c20ef2111eaae7f6ff88))
* **custom-block:** 添加预览图 | Add preview image. ([5d4b32d](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/5d4b32d3b22b1532ffa2333b09fdcd80c7b73151))
* **metadata:** 完善 `README*.md` | Improve `README*.md`. ([29d3fef](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/29d3fef9f2117c9ab40d418f0394580013533ad2))
* **metadata:** 完善 `README*.md` | Improve `README*.md`. ([6eecaa7](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/6eecaa7c99c1fc0e3e35956a533161f237993398))
* **metadata:** 添加 `icon.png` | Add `icon.png`. ([90894a0](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/90894a0b3e92a20705cac101946793d8c0d59620))
* **metadata:** 添加 `icon.png` | Add `icon.png`. ([a7d29e6](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/a7d29e692de6ef1cac2a844a3baebf34bd5e59e5))
* **wakatime:** 完善 `i18n` | Complete `i18n` ([3eb3af9](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/3eb3af9cc117ae5d3a587e70f9dd3f3e6747d088))
* **wakatime:** 完善 `i18n` | Complete `i18n` ([fe06bba](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/fe06bba2a1aff6b8f79ea43a685ded30d3854741))
* **wakatime:** 完善文档说明 | Improve documentation ([f98a8fa](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/f98a8faf655d49a7d56591995ca91d6cd1d10c46))
* **wakatime:** 完善文档说明 | Improve documentation ([58efc6a](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/58efc6afdc84af32b376d7c538c2ddfc0f307dda))
* **webview:** 完善用户文档 | Improve user documentation. ([9dd1e56](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/9dd1e5644e6b29b8af4c6e9d381b08e78f6c5c87))
* **webview:** 完善用户文档 | Improve user documentation. ([5371fa4](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/5371fa43b35c636ecb35a7b53a9498b13ab5f2cd))
* **webview:** 新增网页背景设置项介绍 | Add web page background setting item introduction. ([957046b](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/957046baa1ed519e52a5cc540f10e5ee517f7997))
* **webview:** 新增网页背景设置项介绍 | Add web page background setting item introduction. ([785cf23](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/785cf23488ddb3f9a6389d2b8ede0f105bc15272))
* 完善说明文档 | Improve documentation. ([f028682](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/f028682adb7d6a3dc115ad9dbd9e70978ef4952e))
* 完善说明文档 | Improve documentation. ([be4c699](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/be4c699406213d187b9a86b7425a16ed401f8b39))
* 完善说明文档 | Improve documentation. ([29e10ac](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/29e10acc00767c174bc2ea68574fa8178e41fcaa))
* 完善说明文档 | Improve documentation. ([dce4479](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/dce447907f033b3fa00d01f77932016acce71829))


### Features

* **components:** 为面包屑添加激活状态 | Add active state to breadcrumb. ([07f39be](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/07f39be8dd970130f920193e2c41ba6389825211))
* **components:** 添加标签页组件 | Add tab component. ([e8f8925](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/e8f8925b46fb4e6bf5b7d773dc26402355af73a0))
* **component:** 添加面包屑组件 | Add breadcrumb component. ([bee4d74](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/bee4d74c8c4b39bb2e57a06f3288463936b07ad7))
* **custom-block:** 实现使用块菜单编辑块 `style` 属性功能 | Implement the function of using block menu to edit block `style` attribute. ([6454c4d](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/6454c4d547739981e58d611130426c6012923a0b))
* **custom-block:** 实现使用块菜单编辑块 `style` 属性功能 | Implement the function of using block menu to edit block `style` attribute. ([b7c626d](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/b7c626de71150066893e3ea44c6498aad3b0e877))
* **custom-block:** 支持设置列表视图中每一项的最大宽度 | Support setting the maximum width of each item in the list view. ([ad06b07](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/ad06b070bbb324dec4c38933238af5bfc70a5111))
* **custom-block:** 新增全宽显示功能 | Add full-width display function. ([5e32265](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/5e3226563e5702fb67fdb6e5c4ffd33c83fd4367))
* **custom-block:** 新增全宽显示功能 | Add full-width display function. ([d9d54ec](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/d9d54ec15c29be4c1a92c1f11dcbd9bc892cd701))
* **custom-block:** 新增全屏显示功能 | Add full-screen display function. ([09e224e](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/09e224e7f37a101847181012810723b84c8bf8ef))
* **custom-block:** 新增全屏显示功能 | Add full-screen display function. ([b1d6dbd](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/b1d6dbd1e40ef4e41696b378e32e4e0344556808))
* **custom-block:** 新增列表看板视图 | Add list kanban view. ([0636cd1](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/0636cd18f6bb06b1ad24cc2fee53fb5573e8b75c))
* **custom-block:** 新增列表看板视图 | Add list kanban view. ([34eb771](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/34eb77116b0e6a5030e123cbc95d03c44a72a16c))
* **custom-block:** 新增列表脑图视图 | Add list mind-map view. ([7347f3b](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/7347f3bf33e047bedeaeb498cf07a34e590b440d))
* **custom-block:** 新增列表脑图视图 | Add list mind-map view. ([e997c55](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/e997c5591c6f493bddc3b473ab826877bec064fa))
* **custom-block:** 新增列表表格视图 | Add list table view. ([1b91c88](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/1b91c88890b8acfe87a8c20c478cafaaedaa6312))
* **custom-block:** 新增列表表格视图 | Add list table view. ([a1d5880](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/a1d5880deb25a9ee184829b3c5ef47c14a504675))
* **custom-block:** 新增弹幕功能 | Add bullet-screen function. ([e2fd9bb](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/e2fd9bbfe7384d13509d0e03fd3ccedaef1aadd5))
* **custom-block:** 新增弹幕功能 | Add bullet-screen function. ([862054e](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/862054e157bf906dc0b5b4e291fb5d3b66571a9a))
* **custom-block:** 新增文本排版模式功能 | Add text layout mode function. ([9aac150](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/9aac1508027e572e9e203eeff4ee9320c1f404a9))
* **custom-block:** 新增文本排版模式功能 | Add text layout mode function. ([fa721c6](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/fa721c6937f6945f6c8689d2e4e975e79f20e2d0))
* **custom-block:** 新增显示块 ID 功能 | Add display block ID function. ([628c613](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/628c61306bd64af2ae8397d96863eff36db595e9))
* **custom-block:** 新增显示块 ID 功能 | Add display block ID function. ([ed40a34](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/ed40a3455ee4ed0c2bcb6b8ba5eb1a8cf0e41035))
* **custom-block:** 新增显示块内容功能 | Add display block content function. ([9542955](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/95429552459d48e797e4d3cc4fc90486d2d712c7))
* **custom-block:** 新增显示块内容功能 | Add display block content function. ([d5e8001](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/d5e8001840a3e1585d13b758a395ec33ae1447cf))
* **custom-block:** 新增显示块序号功能 | Add display block index function. ([0bd517d](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/0bd517da6e2030c08aff9bb223065eb2765e0ebd))
* **custom-block:** 新增显示块序号功能 | Add display block index function. ([5b92104](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/5b92104e6b0e49d7583e81baf5dccfbf1044a5f4))
* **custom-block:** 新增显示块轮廓功能 | Add display block outline function. ([ceff865](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/ceff865208128172460a6231b31ab0c4e58bc7cf))
* **custom-block:** 新增显示块轮廓功能 | Add display block outline function. ([b43f355](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/b43f3554ae7047d94b4ddbf6e22ea9f6a60944f0))
* **custom-block:** 新增滚动显示功能 | Add scrolling display function. ([a36ac1e](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/a36ac1e1695afa558f1bad6fef95047799df97e4))
* **custom-block:** 新增滚动显示功能 | Add scrolling display function. ([4467d3c](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/4467d3cd937862e052df984de5e1e43f74313f4f))
* **custom-block:** 新增表格单元格宽度模式 | Add table cell width mode. ([700aaa9](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/700aaa9655631e82813f131523dcbf2816de05e1))
* **custom-block:** 新增表格单元格宽度模式 | Add table cell width mode. ([347fa22](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/347fa22d5e7cdebedf783eaf8167ac54a07560f5))
* **custom-block:** 新增设置面板 | Add settings panel. ([20fbea9](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/20fbea96cf88a46ec9303581dc4d947dc21c8167))
* **custom-block:** 新增设置面板 | Add settings panel. ([58a1674](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/58a16748bd7ad9b87c54e7c4449bee3dfb8d12db))
* **custom-block:** 新增设置面板 | Add settings panel. ([cba05e7](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/cba05e76b74fcc880d73ed897c7a9b874c399c02))
* **custom-block:** 添加重置设置选项提示对话框 | Add reset settings option prompt dialog. ([b3562da](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/b3562da792dbe4ce905bf3c0708f856cbe324bf0))
* **custom-block:** 添加重置设置选项提示对话框 | Add reset settings option prompt dialog. ([87d7af9](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/87d7af974a0205af8a877858c50a297115255161))
* **custom-fonts:** 使用块菜单设置块字体 | Set block font using block menu. ([5cf3bcb](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/5cf3bcb74c381111eb524ea37ec28a3d964b4d2a))
* **custom-fonts:** 使用块菜单设置块字体 | Set block font using block menu. ([e582ce2](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/e582ce2410fa757bd8738c74557c2935af8af5c2))
* **custom-fonts:** 实现自定义字体列表功能 | Implement custom font list feature. ([de87fbc](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/de87fbc0ef0dc1830012c799b537ea4d8184952e))
* **custom-fonts:** 实现自定义字体列表功能 | Implement custom font list feature. ([d665e36](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/d665e368a65cff5e3cfc55357a7768545b1d61fd))
* **custom-fonts:** 支持嵌入 `Twitter Color Emoji` 字体 | Support embedding `Twitter Color Emoji` font. ([45b0329](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/45b0329e8f97441c2095ab44e84228bd03725248))
* **custom-fonts:** 支持嵌入 `Twitter Color Emoji` 字体 | Support embedding `Twitter Color Emoji` font. ([7a4fdfe](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/7a4fdfe5dc294188339bd0d2e36ff216923584e3))
* **custom-fonts:** 支持嵌入 `Twitter Color Emoji` 字体 | Support embedding `Twitter Color Emoji` font. ([69844b8](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/69844b826b04786452b64387bb8aca650d9df7de))
* **monaco-editor:** 为文件资源管理器添加列表辅助线 | Add list guides lines to the file explorer. ([999a1f1](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/999a1f1554bd24f61f4a5b187e47edff70a13153))
* **monaco-editor:** 为文件资源管理器添加列表辅助线 | Add list guides lines to the file explorer. ([48caac3](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/48caac365acf3be32abdb2fecac7d2196befea45))
* **monaco-editor:** 为编辑器添加更改语言模式命令 | Add change model language command to editor. ([60d9278](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/60d927878a4bc5775665c7fc82eaba1b32f1fbdc))
* **monaco-editor:** 为编辑器添加更改语言模式命令 | Add change model language command to editor. ([e1f32d3](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/e1f32d322c351487d8835e117119788de1ef061f))
* **monaco-editor:** 在操作受保护的资源时进行二次确认 | Double confirmation when operating protected resources. ([52315c2](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/52315c296a3bac4e87e50e41495289d42f1f0ea9))
* **monaco-editor:** 在操作受保护的资源时进行二次确认 | Double confirmation when operating protected resources. ([9b51684](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/9b51684c823fff64b20416fa1b5c7138137dd4a1))
* **monaco-editor:** 在新页签/新窗口中打开编辑器 | Open editor in new tab/new window. ([2d2ae77](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/2d2ae777f7e78c251e341331457520c5cd82aded))
* **monaco-editor:** 在新页签/新窗口中打开编辑器 | Open editor in new tab/new window. ([0871582](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/08715820e86218bf8a28bfe5afef626ddd199873))
* **monaco-editor:** 在新页签/新窗口中打开编辑器 | Open editor in new tab/new window. ([e82abab](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/e82abab8bd3517e71169e1ce592fb93632912855))
* **monaco-editor:** 实现 iframe 编辑器 | Implement iframe editor. ([df894c9](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/df894c90aa36c5beff07193a5dfd1b5107ae4811))
* **monaco-editor:** 实现 iframe 编辑器 | Implement iframe editor. ([160c4b6](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/160c4b6e74d6c686bd36e868730ab3b420cc394d))
* **monaco-editor:** 实现 monaco 编辑器初始化 | Implement monaco editor initialization. ([7d5ac79](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/7d5ac79eb4b5a9c33e4d1d722f7e3d676ec8fbcf))
* **monaco-editor:** 实现 monaco 编辑器初始化 | Implement monaco editor initialization. ([ad85e6c](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/ad85e6c314dd900f154a70e3ea38e2e94068d257))
* **monaco-editor:** 实现侧边栏编辑器 | Implement sidebar editor. ([bae5ddd](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/bae5dddb60d13d63caf983ee6b961add9e2c1053))
* **monaco-editor:** 实现侧边栏编辑器 | Implement sidebar editor. ([198a1a3](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/198a1a3ab6f444ab00b2dc33514819162a144c95))
* **monaco-editor:** 实现块处理器 | Implement block handler. ([fbfe232](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/fbfe232b339fe505b4dfdb502413d82194fb4f1e))
* **monaco-editor:** 实现块处理器 | Implement block handler. ([3ca540b](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/3ca540ba216816caad4f8e8b4ab0f25b7e128f49))
* **monaco-editor:** 差异编辑器支持单独配置 | Diff editor supports separate configuration. ([f2fb9a1](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/f2fb9a12e9f8d74a4255775453ead726920058a9))
* **monaco-editor:** 差异编辑器支持单独配置 | Diff editor supports separate configuration. ([528e2d2](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/528e2d20578f305f40e1b076f6a2c1dd2c755987))
* **monaco-editor:** 支持使用 `siyuan://plugins/monaco-editor/workspace/path/to/file` URL 打开文件 | Support opening files using the `siyuan://plugins/monaco-editor/workspace/path/to/file` URL. ([ccc9680](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/ccc968010941c0b872682ddb8d6ca1423f8d6e09))
* **monaco-editor:** 支持使用 `siyuan://plugins/monaco-editor/workspace/path/to/file` URL 打开文件 | Support opening files using the `siyuan://plugins/monaco-editor/workspace/path/to/file` URL. ([228f8ec](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/228f8ec613039f34e94a63bc9b8951f5cc1b8be4))
* **monaco-editor:** 文件资源管理器支持打开文件 | File explorer supports opening files. ([1481c23](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/1481c23ff142a8e86a16bd0f35116edd943149fe))
* **monaco-editor:** 文件资源管理器支持打开文件 | File explorer supports opening files. ([c8e0f9e](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/c8e0f9edb4e1ee48875aec282541f4cbbd893aa0))
* **monaco-editor:** 文件资源管理支持解析符号链接 | File resource management supports parsing symbolic links. ([aaf47df](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/aaf47df30b08a5d412c2f1555fd4f2bb452d5ddd))
* **monaco-editor:** 文件资源管理支持解析符号链接 | File resource management supports parsing symbolic links. ([b707db3](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/b707db3a9d2b017eef06cfa9c8ba95e1f9882c2b))
* **monaco-editor:** 新增添加/另存为菜单项 | Add add/save as menu item. ([8c1b57b](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/8c1b57b059f587ab046ceb195aa2ae5da0a7a45d))
* **monaco-editor:** 新增添加/另存为菜单项 | Add add/save as menu item. ([57ef89c](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/57ef89c8723abf6e4071d10410d8f2beb1811a23))
* **monaco-editor:** 查看网络文件 | View network files. ([a49f049](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/a49f04969ba4b8bb7de370d33d347b533deea347))
* **monaco-editor:** 查看网络文件 | View network files. ([741a047](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/741a047b6f84105fffdaa01cf85487bf5b7893af))
* **monaco-editor:** 添加 `复制导出超链接` 菜单项 | Add `Copy export hyperlink` menu item. ([9921de8](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/9921de83b4b20f882459504589b4ba3cc2287070))
* **monaco-editor:** 添加 KaTeX 自动补全中的描述与详情信息 | Add description and details information in KaTeX auto-completion. ([25c4e4a](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/25c4e4ab01350e76704f06d6d2998431fd498b12))
* **monaco-editor:** 添加 KaTeX 自动补全中的描述与详情信息 | Add description and details information in KaTeX auto-completion. ([73ddba8](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/73ddba8c6f1669335d02466c5c3bbe88d2af82a0))
* **monaco-editor:** 添加 KaTeX 自动补全功能 | Add KaTeX auto-completion function. ([d4cd58c](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/d4cd58c3f3ea0b503a6d5bef720c4626e24b68f5))
* **monaco-editor:** 添加 KaTeX 自动补全功能 | Add KaTeX auto-completion function. ([8481a46](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/8481a462642fd06fb045d3b4010512e52ece189f))
* **monaco-editor:** 添加代码片段编辑菜单 | Add code snippet edit menu. ([f125283](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/f12528313e421d19e4db01084d1f6c156dd0a890))
* **monaco-editor:** 添加代码片段编辑菜单 | Add code snippet edit menu. ([5881621](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/58816216ebfa0c55ab37d44e27eda18b9fa14d8b))
* **monaco-editor:** 添加删除文件/文件夹菜单项 | Add delete file/folder menu item. ([1ddd34d](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/1ddd34dbbdc39c5b1c199c13bfcb304ef733ccd8))
* **monaco-editor:** 添加删除文件/文件夹菜单项 | Add delete file/folder menu item. ([6805275](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/6805275e7e1459aea2ea3f4a68c198108fe259ed))
* **monaco-editor:** 添加刷新菜单项 | Add refresh menu item. ([77617b1](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/77617b1d8cbcffabeb186fd88013ff7298e71ec2))
* **monaco-editor:** 添加刷新菜单项 | Add refresh menu item. ([352c230](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/352c2304ccff30295930655a71e0081be95c94f3))
* **monaco-editor:** 添加复制超链接菜单项 | Add copy hyperlink menu item. ([23a4834](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/23a4834081ec5aa4a0c235541461d10c270bdf15))
* **monaco-editor:** 添加复制超链接菜单项 | Add copy hyperlink menu item. ([f3e420d](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/f3e420d656c469dc1c106972a21996d48fab82d9))
* **monaco-editor:** 添加工作区目录与文件的提示文本 | Add prompt text for workspace directories and files. ([aca1412](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/aca1412783b65c41bc40eb4c302f96bc3c8ad380))
* **monaco-editor:** 添加工作区目录与文件的提示文本 | Add prompt text for workspace directories and files. ([a5ffb4f](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/a5ffb4fe8f01d3a863e2a52526cca3466366d8e4))
* **monaco-editor:** 添加快照文件差异对比菜单 | Add snapshot file diff menu. ([9ae4a61](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/9ae4a61168982e60b150950e85c7f72f2f99870b))
* **monaco-editor:** 添加快照文件差异对比菜单 | Add snapshot file diff menu. ([75dce45](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/75dce450639fa2bda85a1a5a39a07be00e8f76a8))
* **monaco-editor:** 添加打开与复制菜单项 | Add open and copy menu items. ([4015839](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/4015839af4c1ed66ea8a08986dfcf8dad4f06f14))
* **monaco-editor:** 添加打开与复制菜单项 | Add open and copy menu items. ([ebb892d](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/ebb892d13b80c06ca141da02694b3f37cc436528))
* **monaco-editor:** 添加拖拽上传文件/文件夹功能 | Add drag and drop upload file/folder function. ([9dd5a02](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/9dd5a02c4d6bc5bbaa3cc71223f6fb8eb59dc536))
* **monaco-editor:** 添加拖拽上传文件/文件夹功能 | Add drag and drop upload file/folder function. ([86108b9](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/86108b93e13f62162a69a1e2b1b52f7bccbc3d03))
* **monaco-editor:** 添加拖拽文件至文件夹时自动展开文件夹功能 | Add the function of automatically expanding the folder when dragging files to the folder. ([795d4cc](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/795d4cc3dcbe46e2df75fcc4a8d03e97a49af02e))
* **monaco-editor:** 添加拖拽文件至文件夹时自动展开文件夹功能 | Add the function of automatically expanding the folder when dragging files to the folder. ([1dba3e6](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/1dba3e6762991ab60b0e77e31f2ffc7767d72e1f))
* **monaco-editor:** 添加拖拽资源移动其位置的功能 | Add the function of dragging resources to move their positions. ([3b3a8d3](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/3b3a8d3b6258f6337fe684d6dd59745ebb7c31bc))
* **monaco-editor:** 添加拖拽资源移动其位置的功能 | Add the function of dragging resources to move their positions. ([df4dad4](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/df4dad46c7c7e513a6ec7fe5250461438a94f77c))
* **monaco-editor:** 添加拖拽资源至窗口外时的下载功能 | Add download function when dragging resources out of the window. ([5eb88d3](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/5eb88d3618bd4dec4c7ed357d5453288e9c6e89e))
* **monaco-editor:** 添加拖拽资源至窗口外时的下载功能 | Add download function when dragging resources out of the window. ([f606751](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/f6067516d4b356edee4903840f02de1f41c4de66))
* **monaco-editor:** 添加收集箱编辑菜单 | Add inbox edit menu. ([11492db](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/11492dbb3cbf109f41ea906785692ba3825d770e))
* **monaco-editor:** 添加收集箱编辑菜单 | Add inbox edit menu. ([3bda9e0](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/3bda9e07c8636dbf7d410ad32b7d45d6c4e8d645))
* **monaco-editor:** 添加文件/文件夹上传菜单 | Add file/folder upload menu. ([46639ae](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/46639ae6eb40f86cb36e2ec76e2b528230b2835c))
* **monaco-editor:** 添加文件/文件夹上传菜单 | Add file/folder upload menu. ([b9af362](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/b9af36283d8322c5e2ec32688823c099e0b264f2))
* **monaco-editor:** 添加文件/文件夹下载菜单 | Add file/folder download menu. ([555feec](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/555feec7ffc0b25cb83a54e80b302e532f07a9a4))
* **monaco-editor:** 添加文件/文件夹下载菜单 | Add file/folder download menu. ([57a9693](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/57a969355ec973b8d545e5e04bf4c8eb9baa329d))
* **monaco-editor:** 添加文件/文件夹更新时间 | Add file/folder update time. ([e0411ea](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/e0411eac6035069f0217e7d17f8a112a7490eeb2))
* **monaco-editor:** 添加文件/文件夹重命名菜单栏 | Add file/folder rename menu item. ([8c0a515](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/8c0a5150419389d47bce9ce9e037bbbd1647d86e))
* **monaco-editor:** 添加文件/文件夹重命名菜单栏 | Add file/folder rename menu item. ([3a35542](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/3a355424615dbfa5e95f20c508b5effae0e96fa7))
* **monaco-editor:** 添加文件历史差异对比菜单 | Add file history diff menu. ([7342c6c](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/7342c6c76a62117f07f77d9626db80f1356bd973))
* **monaco-editor:** 添加文件历史差异对比菜单 | Add file history diff menu. ([d73f14f](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/d73f14f2c8afcb3517ebe7049a4bd923d4fa6516))
* **monaco-editor:** 添加文件预览菜单项 | Add file preview menu item. ([d970b3f](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/d970b3f5b678d1b6344db1739645471ae1f49f9a))
* **monaco-editor:** 添加文件预览菜单项 | Add file preview menu item. ([754e3ef](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/754e3efdfc58d164d351ae20625580c458ac55e5))
* **monaco-editor:** 添加文档文件/文件夹鼠标悬浮预览功能 | Add document file/folder mouse hover preview function. ([c4ffb1a](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/c4ffb1a57a90936f30586496ba554b2de7f0a214))
* **monaco-editor:** 添加文档文件/文件夹鼠标悬浮预览功能 | Add document file/folder mouse hover preview function. ([c6e71b9](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/c6e71b9432152a3ea29c433f6b65b36756460985))
* **monaco-editor:** 添加新建文件/文件夹菜单项 | Add new file/folder menu item. ([465c885](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/465c8856fa874ccd7447fb996187bdbb69e1af80))
* **monaco-editor:** 添加新建文件/文件夹菜单项 | Add new file/folder menu item. ([dbbe358](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/dbbe358a2026246e8161ea5cfe4057554224f9dc))
* **monaco-editor:** 添加格式化 Markdown 文本功能 | Add function of formatting Markdown text. ([d1aa0ac](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/d1aa0accfc7307e0dff6f1a7ce78e35427616fab))
* **monaco-editor:** 添加格式化 Markdown 文本功能 | Add function of formatting Markdown text. ([97a89bc](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/97a89bcbbb9272a7af569cfa6bd3b2d1ff91cfc3))
* **monaco-editor:** 添加设置面板 | Add settings panel. ([698d680](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/698d680ccbf5bc8d66e0a105ba2d4be46c85fa82))
* **monaco-editor:** 添加设置面板 | Add settings panel. ([61215a1](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/61215a171286924df819fcdb844bf253e78dbce2))
* **monaco-editor:** 添加静态资源文件拖拽至编辑器时生成超链接的功能 | Add the function of generating hyperlinks when dragging static resource files to the editor. ([af2b774](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/af2b774bb6cedbc78263d8e0aaf1c79b2f7f10ea))
* **monaco-editor:** 添加静态资源文件拖拽至编辑器时生成超链接的功能 | Add the function of generating hyperlinks when dragging static resource files to the editor. ([ab6a201](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/ab6a201a6a86982a857c7ba94cfdda5ff44806be))
* **monaco-editor:** 编辑器中思源字段支持悬浮预览域点击跳转 | SiYuan tokens in the editor support hover preview area click to jump. ([fc0c273](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/fc0c273c64cc8647d19b6ce48dde4169446f6d1a))
* **monaco-editor:** 编辑器中思源字段支持悬浮预览域点击跳转 | SiYuan tokens in the editor support hover preview area click to jump. ([c97f1b1](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/c97f1b1ec5d7f0bd441e6b5e64f8bcefab62e6d3))
* **monaco-editor:** 编辑本地文件 | Edit local files. ([b6818ac](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/b6818ac1bc643b5aca49dd2cb065a2c0ff2099cc))
* **monaco-editor:** 编辑本地文件 | Edit local files. ([2d57847](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/2d57847abc3ee9f642938f48653efbb0e75ea533))
* **monaco-editor:** 编辑资源文件 | Edit asset files. ([237fe1f](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/237fe1f183fb6abd509a51c471d6a147e2013f3c))
* **monaco-editor:** 编辑资源文件 | Edit asset files. ([c0dd965](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/c0dd9659cc3294c187bb3fb70830fe30a7d9c9ff))
* **monaco-editor:** 鼠标事件触发编辑器打开 | Mouse event triggers editor open. ([090caee](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/090caee7680ad2c5ba45a598b647982a779c3921))
* **monaco-editor:** 鼠标事件触发编辑器打开 | Mouse event triggers editor open. ([8a4db99](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/8a4db990a5b1407a09dee962658526c9a9ef4da8))
* **open-api:** 添加 `client` 与 `fs` 属性 | Add `client` and `fs` properties. ([4a8d7ad](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/4a8d7ad95aab15d4497a1cd9747561688b5a5d58))
* **template:** 完善插件模板 | Improve plugin template. ([a33c8ee](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/a33c8ee2eb76f2a41a21941231b731fc433fad7c))
* **template:** 完善插件模板 | Improve plugin template. ([3546a74](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/3546a74fd19e7d87db427d40061a508949aceb6e))
* **wakatime:** 实现 `wakatime` 插件基础功能 | Implement the basic functions of the `wakatime` plugin. ([fe454c2](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/fe454c213dfb8d70c134820f5a64c44ef025286c))
* **wakatime:** 实现 `wakatime` 插件基础功能 | Implement the basic functions of the `wakatime` plugin. ([ca44743](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/ca4474367cd017be36f5cc5d54f518829e105fe3))
* **wakatime:** 实现包含列表与排除列表功能 | Implement include list and exclude list function. ([f05fe9f](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/f05fe9f757f3f70af8ee4ebe1a10260fa72e9e68))
* **wakatime:** 实现包含列表与排除列表功能 | Implement include list and exclude list function. ([29c3819](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/29c38192e89a003a8488743dff496b6469e3a7dc))
* **wakatime:** 实现设置面板 | Implement settings panel. ([db49357](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/db49357caddb58917ccbeefb57ab46e088e120ac))
* **wakatime:** 实现设置面板 | Implement settings panel. ([a6aaabf](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/a6aaabf17dbbd8df2ba81492271398ed4cf31a20))
* **wakatime:** 添加 `hostname` 设置项 | Add `hostname` setting item. ([5ee3e8b](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/5ee3e8b8f945e71ff0f93f64555dc8a17f05d285))
* **wakatime:** 添加 `hostname` 设置项 | Add `hostname` setting item. ([5cbef5c](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/5cbef5c6c8942e2e221ce3c252fb39f23082cb0d))
* **wakatime:** 添加包含列表与排除列表设置项 | Add include list and exclude list setting items. ([b36fd14](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/b36fd143190da79fcebfb4137b60d10912b5d80a))
* **wakatime:** 添加包含列表与排除列表设置项 | Add include list and exclude list setting items. ([8ee32cd](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/8ee32cd13ed245429fed16038d782ece043e3cb7))
* **wakatime:** 添加离线缓存功能 | Add offline cache function. ([10f60dd](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/10f60dd80b8d7457f657dc57e9d52b22aba41c9b))
* **wakatime:** 添加离线缓存功能 | Add offline cache function. ([52b08c3](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/52b08c3c8a9b32ff410f01520445ec3023d6d9d2))
* **wakatime:** 添加设置项 `User-Agent` | Add setting item `User-Agent`. ([8da8f2a](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/8da8f2a7f1a9067c145fe89b5d13843d36e64d12))
* **wakatime:** 添加设置项 `操作系统名称`, `操作系统版本`, `操作系统架构` | Add setting items `OS name`, `OS version`, `OS architecture`. ([99ac59e](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/99ac59e246bf2bfa59c665a01f9c1d32a08a1ce2))
* **wakatime:** 监听 `loaded-protyle-dynamic` 与 `destroy-protyle` 事件 | Listen for `loaded-protyle-dynamic` and `destroy-protyle` events. ([c871379](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/c871379d5383d23e16b26ec66455730b5dd7be61))
* **wakatime:** 调整心跳活动推送策略 | Adjust the heartbeat activity push strategy. ([ff14be9](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/ff14be967bde68dfd33c90bd7ad337ee7704776b))
* **wakatime:** 调整心跳活动推送策略 | Adjust the heartbeat activity push strategy. ([8b7adf0](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/8b7adf05c39d2ad6f8f5713d50aa067c959e00e0))
* **webview:** 改进顶部工具栏菜单项隐藏时的菜单位置 | Improve the menu position when the top toolbar menu item is hidden. ([d627c81](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/d627c81618a5f412bd8011242d4f14ef17b43036))
* **webview:** 改进顶部工具栏菜单项隐藏时的菜单位置 | Improve the menu position when the top toolbar menu item is hidden. ([dde0b4b](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/dde0b4bc2b7189d3059f7fddfef723b39ca2c6f3))
* **webview:** 新增块菜单菜单项 `在新窗口打开` 用 `在新窗口打开并聚焦` | Add block menu item `Open in new window` with `Open in new window and focus`. ([4461104](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/4461104fa1c787a64f3cabd7b9fee50ae8d09852))
* **webview:** 新增块菜单菜单项 `在新窗口打开` 用 `在新窗口打开并聚焦` | Add block menu item `Open in new window` with `Open in new window and focus`. ([1436d67](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/1436d67a5fa363d3ca18ede5f1e43b6d66f08465))
* **webview:** 新增快捷键与命令 | Add keyboard shortcuts and commands. ([d738cfe](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/d738cfebe9914c8054886bfa1d27645732c46981))
* **webview:** 新增快捷键与命令 | Add keyboard shortcuts and commands. ([9b73440](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/9b73440d230e6f90bcb0a3ed4ab71455eda2c935))
* **webview:** 新增超链接地址提示功能 | Add hyperlink address prompt function. ([aaca46c](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/aaca46c52073a40427ca12328b029c221e45545e))
* **webview:** 新增超链接地址提示功能 | Add hyperlink address prompt function. ([b293a3f](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/b293a3f2e2b0cb95420003a60b83ae235a86fc6c))
* **webview:** 添加在屏幕中间显示新窗口功能 | Add the function of displaying new windows in the middle of the screen. ([b1ff7a8](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/b1ff7a8f98c6760fbc8c15132ec6b71de6aeaa23))
* **webview:** 添加在屏幕中间显示新窗口功能 | Add the function of displaying new windows in the middle of the screen. ([86f9aae](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/86f9aae3d12833d65fd16ac22257d1ba72619d24))
* **webview:** 添加块引用菜单 | Add block reference menu. ([19b4806](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/19b48063a2b5c881f90c90b3792196e57da06e1b))
* **webview:** 添加块引用菜单 | Add block reference menu. ([c99f99e](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/c99f99e12ad2bf71e243f374b6a49afa6ee77bb8))
* **webview:** 添加超链接菜单 | Add hyperlink menu. ([94d4a30](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/94d4a3068d6ddaab12742cd502309873b760c59f))
* **webview:** 添加超链接菜单 | Add hyperlink menu. ([358ed3e](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/358ed3ed6c768ecbeaf12fe0afce21e7fc04a7ef))
* **webview:** 添加顶部工具栏菜单项 | Add top toolbar menu items. ([400eaae](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/400eaae0b2cc77b61c43052c201a03cd8ec1611e))
* **webview:** 添加顶部工具栏菜单项 | Add top toolbar menu items. ([4158f6c](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/4158f6c7306c403bbb8b5f247802b2c3c3ead99d))
* **webview:** 网页视图支持自定义网页背景颜色 | Web view supports custom web page background color. ([62aab8e](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/62aab8eb805eea1ebe0f369bd6c4774120f31b29))
* **webview:** 网页视图支持自定义网页背景颜色 | Web view supports custom web page background color. ([2eefbcd](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/2eefbcd0c69b311ce472e34692e0eebc936a9dab))
* **webview:** 设置页签图标为网页图标 | Set the tab icon to the web icon. ([c76238a](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/c76238aa92d6d4586d1b8735dbcef28a1e391cb4))
* **webview:** 设置页签图标为网页图标 | Set the tab icon to the web icon. ([8dbbfad](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/8dbbfadbc18088840f9383c79c2aef8c5e6a42a5))
* **webview:** 设置页签图标为网页图标 | Set the tab icon to the web icon. ([9d57359](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/9d57359b464402088eb6e37e8f1217915329a46a))
* **webview:** 设置页签图标为网页图标 | Set the tab icon to the web icon. ([df40054](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/df40054bc3ff892b46bd3c7b162b4e6e29b56fa5))
* **webview:** 超链接添加 `在新页签中打开` 菜单项 | Hyperlinks add `Open in new tab` menu item. ([de8a6eb](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/de8a6ebf51b92e509aceb345628589598be6b3b6))
* **webview:** 超链接添加 `在新页签中打开` 菜单项 | Hyperlinks add `Open in new tab` menu item. ([d35d17f](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/d35d17ffb1768c68e00cd9b50e40ead2322ef785))
* 添加文件资源管理面板 | Add file resource management panel. ([972c513](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/972c5133dfbfe9518be9b0071b95424f41a59dac))
* 添加文件资源管理面板 | Add file resource management panel. ([e98d816](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/e98d816ae60db3d02461ee994e58dae131541501))
* 监听 `switch-protyle` 事件 | Listen for `switch-protyle` event. ([b62d2b5](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/b62d2b55296a0a27288ba2189a0d4c5575439b8b))


### Bug Fixes

* **custom-block:** 修复列表导图视图滚动条异常问题 | Fix the issue of abnormal scroll bar in list mind-map view. ([08c6e95](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/08c6e9531e75d71421a924728cf2b518ded845cf))
* **custom-block:** 修复列表导图视图滚动条异常问题 | Fix the issue of abnormal scroll bar in list mind-map view. ([7501f66](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/7501f6608cef19beedc6506f5e9f87ee12062cd1))
* **metadata:** 修复挂件中 API 请求 `baseURL` 初始化错误问题 | Fix the issue of incorrect initialization of `baseURL` in API request in widget. ([7632aac](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/7632aac5f8e188abe70d9a5c9c00be5f28664bfe))
* **monaco-editor:** updage `plugin.json` ([31b2f39](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/31b2f39a12eb067712db877d0e27c6594b048a18))
* **monaco-editor:** 修复拖动页签分栏时编辑器无法重新加载问题 | Fix the issue that the editor cannot be reloaded when dragging the tab to split the screen. ([6f16d87](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/6f16d87cddf7c1e3e716b9dd4cbaca9454821168))
* **monaco-editor:** 修复拖动页签分栏时编辑器无法重新加载问题 | Fix the issue that the editor cannot be reloaded when dragging the tab to split the screen. ([b8deccc](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/b8decccf4586107f7d3d53306ec7acf4f7b4132d))
* **Settings:** add svelte-ignore directive for local state reference ([f39484a](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/f39484a31b814aace2a66e1c7d3841c1eb9c100c))
* **wakatime:** fix(wakatime): 捕获删除块导致的异常 | Catch exceptions caused by deleted blocks. ([613f933](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/613f9334a9f8f8ae34e7f903c8f5e02282343f35))
* **wakatime:** fix(wakatime): 捕获删除块导致的异常 | Catch exceptions caused by deleted blocks. ([4393980](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/4393980ca5d495c025c94d6a1fe4b27d470beabd))
* **wakatime:** 捕获删除块导致的异常 | Catch exceptions caused by deleted blocks. ([106ddd0](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/106ddd0e44b983a39261f7867cc5292cd16d6e33))
* **wakatime:** 捕获删除块导致的异常 | Catch exceptions caused by deleted blocks. ([efc1c37](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/efc1c3744d780c76a38ca0d99be865bc9cbdfd45))
* **webview:** 修复 `#` 链接无法跳转问题 | Fix the issue that `#` link cannot jump. ([1b0985b](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/1b0985b1f91f7d4df9589aebf67887aaa4948b31))
* **webview:** 修复 `#` 链接无法跳转问题 | Fix the issue that `#` link cannot jump. ([94cd77d](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/94cd77dd09f4613cba546f9f54714591ee9d5eed))
* **webview:** 修复 `#` 链接无法跳转问题 | Fix the issue that `#` link cannot jump. ([3025fb5](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/3025fb5cd34f19dece9c16dd2ada2257f0a51401))
* **webview:** 修复在非安全上下文中无法使用 `crypto.randomUUID` 的问题 | Fix the issue that `crypto.randomUUID` cannot be used in an insecure context. ([0d6b387](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/0d6b387191f0fc25c1585d90a4dec41cb2878924))
* **webview:** 修复在非安全上下文中无法使用 `crypto.randomUUID` 的问题 | Fix the issue that `crypto.randomUUID` cannot be used in an insecure context. ([504f7d7](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/504f7d7b8994066d5cafccc29bef5753335e9adb))
* **webview:** 修复页签图标未显示问题 | Fix the issue of tab icon not displayed. ([ca43c09](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/ca43c09bdc6dc98accb9abee06c02517eccf9ea7))
* **webview:** 修复页签图标未显示问题 | Fix the issue of tab icon not displayed. ([dc7228e](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/dc7228eda27e90be786152c43786fc336d31339a))
* 优化插件卸载时对 Worker 的处理 | Optimize the processing of Worker when the plugin is unloading. ([b35e06a](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/b35e06a440b13a1d82f0909d31328117d4355f57))


### Performance Improvements

* **components:** 设置面板组件兼容 `v2.9.4` | Settings panel component compatible with `v2.9.4`. ([2829ee9](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/2829ee99ebe993db942e34a749aec96306da43af))
* **custom-block:** 优化列表导图视图 | Optimize list mind-map view. ([346e78e](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/346e78e1a30cffe6604ef02c92e2eddf8d61dc0e))
* **custom-block:** 优化列表导图视图 | Optimize list mind-map view. ([3f0dcce](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/3f0dccef945a2fbf3c35084e85e622a70af185e9))
* **custom-fonts:** 优化字体样式预览功能 | Optimize font style preview function. ([ade08d9](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/ade08d9fd69f81cc89ecd954e001c05e00371e71))
* **custom-font:** 优化字体列表样式 | Optimize font list style. ([bcb99eb](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/bcb99eb4ef253ad4b2c301866caac5d544fb215a))
* **custom-font:** 优化字体列表样式 | Optimize font list style. ([52e192c](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/52e192c9c359fcca31fd3668f5e2c7a63755362c))
* **monaco-editor:** 优化编辑器另存为选项 | Optimize editor save as option. ([f03bc1e](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/f03bc1e02c9a3040205dba56f57f4bfa242d008e))
* **monaco-editor:** 优化编辑器另存为选项 | Optimize editor save as option. ([6d1f553](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/6d1f55345ff4c1a85bcd343457b649526471c921))
* **monaco-editor:** 支持使用设置项控制上下文菜单 | Support using setting items to control context menus. ([b91fc63](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/b91fc6363c9dd804851caf5ce7651b9898ef5ade))
* **monaco-editor:** 支持使用设置项控制上下文菜单 | Support using setting items to control context menus. ([33bacf0](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/33bacf0424445155a5636070e280e9708d8196cc))
* **monaco-editor:** 调整菜单文本 | Adjust menu text. ([46d702c](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/46d702c542387b8bd4c8f6192c91abc8ccc36c89))
* **monaco-editor:** 调整菜单文本 | Adjust menu text. ([e7a3724](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/e7a3724b6a93d0bf98d86e89b151a8aa3984b483))
* **webview:** 优化开发者工具 | Optimize developer tools. ([8a27a30](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/8a27a3053d6668863e418cc02c4360a74bab4998))
* **webview:** 优化开发者工具 | Optimize developer tools. ([54a0b00](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/54a0b00681a1b15335ba1d61ddfde184c9ab88fa))
* **webview:** 优化思源静态文件服务的判断 | Optimize the judgment of siyuan static file service. ([6e67f00](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/6e67f00bcbc55b6dffdde75c78b04ab832a6b8fa))
* **webview:** 优化思源静态文件服务的判断 | Optimize the judgment of siyuan static file service. ([3ff8424](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/3ff8424454fc3bd5485863e125fdaed5cd01fa1e))
* 兼容事件总线 `loaded-protyle-static` | Compatible with event bus `loaded-protyle-static`. ([0d7d052](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/0d7d052ec6ba879cc23bae7bff0990d64b8db371))
* 改进设置对话框标题内容 | Improve the title content of the settings dialog. ([cc2a9aa](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/cc2a9aadfea66e1659fd2bc53302978b719e0f3d))
* 改进设置对话框标题内容 | Improve the title content of the settings dialog. ([6c31975](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/6c31975c1c91781e528868ae1c903fa6be5ee9ef))
* 调整打开 `siyuan://plugins` 链接事件的名称 | Adjust the name of the event to open the `siyuan://plugins` link. ([45b6031](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/45b6031415b08bbd7819983247898f78ab3152ab))


### Code Refactoring

* **components:** 优化 BlockIcon 组件 | Optimize BlockIcon component. ([a1669ff](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/a1669ff9fccb58e4a0e82e19ed2948bc68abb6b5))
* **components:** 优化 BlockIcon 组件 | Optimize BlockIcon component. ([06ce3b9](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/06ce3b935ab9a4c8e723729a443f72a07c775939))
* **components:** 移除重复组件 | Remove duplicate components. ([22b74e2](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/22b74e2f44baf2aba437a4151c4518fb1ed95749))
* **i18n:** refactor multilingual support with updated language files and README links ([30e77e0](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/30e77e045eb0be6ad689f3ecdd524dd23cc2f326))
* **jupyter-client:** 使用 `worker` 重构 | Refactor with `worker`. ([6d4f8f5](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/6d4f8f58db95edc65e1c9b5d4fef18cb460b2639))
* **monaco-editor:** 调整文件资源管理器图标与提示文本 | Adjust the icon and prompt text of the file explorer. ([32fff26](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/32fff26498754350c7cc4304fc37aca9425c9c8f))
* **monaco-editor:** 调整文件资源管理器图标与提示文本 | Adjust the icon and prompt text of the file explorer. ([89e363e](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/89e363eae6ab779de14d52b43e5d8e0c6d285ebb))
* **monaco-editor:** 重构侧边栏组件 | Refactor sidebar component. ([6f9b136](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/6f9b1365204428384491dfe47dabb66baa791483))
* **monaco-editor:** 重构侧边栏组件 | Refactor sidebar component. ([c748225](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/c74822575724bc94e166f62a8f42cdbee43c3969))
* update descriptions and categories in plugin and settings, enhance heartbeat types ([d165a5b](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/d165a5b48c18993d49bb01fb3afdd75f5092ac92))
* **wakatime:** 使用 `BroadcastChannel` 重构与 Worker 的通讯 | Refactor communication with Worker using `BroadcastChannel`. ([c9a9383](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/c9a9383dbb94a342d8b0888b6a73ba5ea1d020a6))
* **wakatime:** 使用 `BroadcastChannel` 重构与 Worker 的通讯 | Refactor communication with Worker using `BroadcastChannel`. ([dd09154](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/dd09154a18f346ca0932434548c5eb42007ab19e))
* **wakatime:** 使用 `worker` 重构 | Refactor with `worker`. ([93bec3d](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/93bec3dc525cdd4679d91b719a87611c15a9e110))
* **webview:** 调整 Webview 组件结构 | Adjust the structure of the Webview component. ([8de39c3](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/8de39c3fb249a6c17b31eddbe80b4fc13a953901))
* **webview:** 调整 Webview 组件结构 | Adjust the structure of the Webview component. ([61d95b2](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/61d95b2df84a7bf3121e40e40bb0e0b27d93ef5c))
* **webview:** 调整在新窗口打开触发策略 | Adjust the trigger strategy for opening in a new window. ([b9e8b5d](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/b9e8b5df75b0a3a6329da996239fd20cf6b2f4a8))
* **worker:** 重构 Worker 通讯桥 | Refactor Worker communication bridge. ([5bbaebf](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/5bbaebf18a79c3e7c57efd4899f37d3360e0a76e))
* 重构 `apis.siyuan` | Refactor `apis.siyuan`. ([a102e9f](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/a102e9f94a06ab81258f932950712fece1117477))
* 重构 `apis.siyuan` | Refactor `apis.siyuan`. ([43d97e0](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/43d97e0c793607b9847816f440d44e17ce0e5ed9))


### Styles

* **i18n:** correct import order for zh_Hant language type ([6656e55](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-wakatime/commit/6656e55250c609bb494de63364258237e1c16c7b))

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
