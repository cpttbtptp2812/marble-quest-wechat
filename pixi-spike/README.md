# Marble Quest · PixiJS Rendering Spike

这是《弹珠任务》独立的渲染引擎验证项目，不替换仓库根目录的旧版微信小游戏入口。

## 为什么做这条分支

旧版用原生 Canvas 2D 每帧重新绘制整个战场，上一轮又把设备像素比限制到 1.25、绘制频率限制在约 45 FPS，画面因此发虚且动作不够顺。这一分支改用 Sapling2D 0.6.0：PixiJS 8.22 WebGL 渲染 + Planck 1.5 物理，并使用官方微信小游戏 Vite 构建插件。

背景、炮台、六种弹珠、月蝶 Boss、瞄准轨迹和元素碰撞演出由 Pixi Graphics 矢量节点绘制，按设备像素比渲染（引擎最多使用 2× DPR），不通过降低画面分辨率换帧率。粒子和碰撞演出会限制数量，避免不必要的过量物理对象。

## 技术选型来源

- [Sapling2D](https://github.com/sapling2d/sapling2d)：MIT，代码优先的 2D 引擎，PixiJS v8 + Planck，并提供 `sapling2d/wechat` 与 `saplingWechat()`。
- [微信 PixiJS + Planck 真机测试报告](https://github.com/sapling2d/sapling2d/blob/main/spikes/wechat/REPORT.md)：报告记录了 iOS 真机 60 FPS、Android 真机约 56 FPS、开发者工具模拟器 54–56 FPS 的测试场景。那是引擎基准，不是本游戏的帧率承诺。

## 当前试验场

- 两座炮台可以装填全部六种弹珠。
- 拖动空白场地瞄准，松开后发射；炮台根据触摸区域自动选择左 / 右。
- 飞行中的弹珠可以直接点击定身，也可以在场地空白处点击，将最近发射的球定身。
- 最多同时定身两颗球；点击定身球可恢复运动。
- 另一颗弹珠实体撞击定身球后，触发对应元素融合，锚点消耗，撞击球继续运动。
- 融合会短暂打开月蚀蝶后的护盾，之后可攻击月核。
- 21 种属性配对有各自的命名、配色和演出类别。

## 本地运行（浏览器预览）

需要 Node.js >= 24（Planck 1.5.1 的运行时要求）。

```bash
npm install
npm run dev
```

浏览器预览用于快速检查视觉和交互；最终兼容性必须以微信开发者工具与真机为准。

## 构建微信小游戏

```bash
npm install
npm run build:wechat
```

也可以执行 `npm run check` 一次完成类型检查、浏览器构建、微信小游戏发布构建，并同步生成仓库根目录的 `wechat-release/`。微信构建结束后会自动执行语法兼容修正与入口脚本语法检查。

成功构建后，脚本会自动把纯发布文件复制到仓库根目录的 `wechat-release/`。在微信开发者工具中选择「小游戏」，始终导入仓库根目录的 `wechat-release/`，不要导入 `pixi-spike/`。`vite.wechat.config.ts` 使用 `saplingWechat()`，生成微信小游戏入口 `game.js`、`game.json`、`project.config.json` 和资源目录。请按自己的微信小游戏账号配置 AppID；本试验分支尚未配置用户 AppID。

## 性能设计原则

- 使用设备原生 DPR，最多 3×；不会把高分屏强制降到 1.25× 或 2×。运行日志会输出逻辑屏幕尺寸、设备 DPR、实际渲染 DPR 和 Canvas 缓冲区尺寸。
- 背景和大部分美术是静态矢量 Graphics，构建一次、GPU 绘制，不在每帧重新生成复杂纹理。
- 物理世界固定步长，每帧最多推进 2 个物理步，避免掉帧后补帧雪崩。
- 控制同时存在的弹珠、定身锚点和视觉 FX 数量。
- 微信运行日志每秒输出 FPS、逻辑耗时、渲染耗时和活跃弹珠数；启动时还输出设备 DPR、渲染 DPR 与 Canvas 实际尺寸。诊断信息也会显示在画面右上角，不必只看控制台。不能用浏览器预览帧率代替真机结果。

## 当前限制

- 这是渲染 / 手感验证场景，不是完整关卡流程。
- Boss 目前采用矢量骨架式图形与程序动画；Spine 是下一步可选方案，需要单独制作并持有 Spine Editor 授权的动画资产。
- 尚未在真实微信开发者工具、iOS 或 Android 设备完成本分支的编译和帧率验收。


## Git 同步后直接导入（推荐）

CI 在 `main` 分支构建成功后，会自动提交纯发布目录 `wechat-release/`。日常更新只需在仓库根目录：

```bash
git pull --ff-only origin main
```

然后微信开发者工具选择「小游戏」，导入 `wechat-release/`。不要导入仓库根目录、`pixi-spike/` 或 `pixi-spike/dist-wechat/` 以外的源码目录；Node 构建脚本不是小游戏运行文件。
