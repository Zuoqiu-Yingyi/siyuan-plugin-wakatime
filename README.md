> **[READ ONLY] Subtree split of the [siyuan-packages-monorepo](https://github.com/Zuoqiu-Yingyi/siyuan-packages-monorepo) [/workspace/plugins/monaco-editor](https://github.com/Zuoqiu-Yingyi/siyuan-packages-monorepo/tree/main/workspace/plugins/monaco-editor)**

<div align="center">
<img alt="icon" src="./public/icon.png" style="width: 8em; height: 8em;">

---
[![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/Zuoqiu-Yingyi/siyuan-plugin-monaco-editor?include_prereleases&style=flat-square)](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-monaco-editor/releases/latest)
[![GitHub Release Date](https://img.shields.io/github/release-date/Zuoqiu-Yingyi/siyuan-plugin-monaco-editor?style=flat-square)](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-monaco-editor/releases/latest)
[![GitHub License](https://img.shields.io/github/license/Zuoqiu-Yingyi/siyuan-plugin-monaco-editor?style=flat-square)](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-monaco-editor/blob/main/LICENSE)
[![GitHub last commit](https://img.shields.io/github/last-commit/Zuoqiu-Yingyi/siyuan-plugin-monaco-editor?style=flat-square)](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-monaco-editor/commits/main)
![GitHub repo size](https://img.shields.io/github/repo-size/Zuoqiu-Yingyi/siyuan-plugin-monaco-editor?style=flat-square)
![hits](https://hits.b3log.org/Zuoqiu-Yingyi/siyuan-plugin-monaco-editor.svg)
[![GitHub all releases](https://img.shields.io/github/downloads/Zuoqiu-Yingyi/siyuan-plugin-monaco-editor/total?style=flat-square)](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-monaco-editor/releases)

---
</div>

## USER GUIDE

[简体中文](./public/README_zh_CN.md) \| [English](./public/README.md)

## DEVELOPMENT GUIDE

### RELEASE STEPS

1. Update the version number in `<subrepo-root-dir>/package.json` and `<subrepo-root-dir>/public/plugin.json`, then commit the changes in [monorepo](https://github.com/Zuoqiu-Yingyi/siyuan-packages-monorepo).
2. Run script `./scripts/git-subtree/monaco-editor/push.ps1` with the folowing command in **monorepo root dir** to push the subtree to sub-repository (`dev` branch).
   ```powershell
   pwsh -f "./scripts/git-subtree/monaco-editor/push.ps1"
   ```
3. Create a pull request from `dev` branch to `main` branch in sub-repository.
4. Merge the pull request.
5. Await for the CD workflow `release-please.yml` to complete, it will create a *release pull request* in sub-repository.
6. Merge the *release pull request*, it will create a new *pre-release* with current [changelog](./CHANGELOG.md) and a new *tag* with [semantic version](https://semver.org/) in sub-repository.
7. Await for the CD workflow `build.yml` to complete, it will update the distribution files to `publish` branch in sub-repository.
8. Await for the CD workflow `release-distribution.yml` to complete, it will create a new *pre-release* with an asset named `package.zip` and a new *tag* with timestamp in sub-repository.

## CHANGELOG

[CHANGE LOG](./CHANGELOG.md)
