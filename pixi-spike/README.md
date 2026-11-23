# Marble Quest · Nape.js + PixiJS

《弹珠任务》当前试验版使用 **PixiJS 8 + Sapling2D 微信平台适配 + Nape.js 物理引擎**。渲染继续使用现有 Pixi 矢量场景和美术；物理模拟、发射刚体、反弹、碰撞、定身和释放由成熟的 Nape.js 负责。

## 这次改成了什么

- **物理引擎：** `@newkrok/nape-js@3.43.5`，负责 Space、刚体、Circle / Polygon 碰撞体、物理材质、连续碰撞检测与碰撞回调。
- **渲染同步：** `@newkrok/nape-pixi@0.1.4`，直接使用官方 `BodySpriteBinding` 和 `FixedStepper`，把 Nape 刚体位置同步到现有 Sapling2D / Pixi 节点，并使用 60 Hz 固定步进与插值。
- **微信触摸：** 使用 Sapling2D 官方 WeChat `platform.onInput()` 适配器，再转换成场景设计坐标；不再自行重复绑定 `wx.onTouch*`。
- **发射模型：** 参考 Nape 仓库的 [Slingshot demo](https://github.com/NewKrok/nape-js/blob/master/docs/demos/slingshot.js)：刚体加入 Space 后再写入初速度；拖动瞄准，松手发射。
- **碰撞参数：** 参考 Nape [Pinball demo](https://github.com/NewKrok/nape-js/blob/master/docs/demos/pinball.js) 的弹性、摩擦、碰撞冲量与刚体反弹模型。
- **定身：** 飞行球切换为 `BodyType.KINEMATIC` 并把速度设为零；释放时切回 `DYNAMIC`，恢复保存的速度。
- **双炮台：** 保留左 / 右炮台选择、六种弹珠的质量 / 半径 / 速度参数、定身锚点与元素融合规则。

不再使用 Sapling2D 的 `RigidBody2D` / Planck 发射链路。Sapling2D 仍负责 Pixi 场景树、微信小游戏入口、屏幕和指针事件。

## 当前操作

1. 点底部六种弹珠卡片，选择要发射的球。
2. 在左半场按住并拖动，从左炮台瞄准；右半场则使用右炮台。
3. 松开手指发射。即使只点击一下，也会向点击位置发射；点击靠近炮口的位置时默认瞄准 Boss。
4. 点击飞行中的球，将刚体切换为 KINEMATIC，停在空中。
5. 再点击定身球，恢复 DYNAMIC 和保存的速度。
6. 另一颗球撞击定身球时，由 Nape 碰撞监听器通知游戏触发元素融合。

## 目录

- `src/game-nape.ts`：Nape 版本游戏场景、控件和游戏规则。
- `src/nape-physics.ts`：薄物理适配层，封装 Nape Space、碰撞过滤、碰撞事件、固定步进器和渲染绑定。
- `src/art.ts`：Pixi / Sapling2D 视觉组件。
- `src/main.wechat.ts`：微信小游戏入口，使用 Sapling 的官方 pointer adapter。
- `src/game.ts`：旧 Planck / Sapling 物理实验快照，本分支入口不再使用它。

## 安装和运行

需要 Node.js 24 或更高版本。

```bash
npm install
npm run dev
```


## Mobile performance work

The WeChat renderer keeps its existing 2x device-pixel-ratio render budget; this optimization does not lower the design canvas size or apply a lower-resolution render pass. To reduce frame work while keeping the same visual scale:

- Static ambient stars and orbit geometry are tessellated once and animated with transforms instead of clearing and rebuilding Graphics every frame.
- Marble trails sample at 30 Hz, are redrawn only when a new sample arrives, and use a single stroke rather than dozens of separate segments and circles.
- Nape remains at a fixed 60 Hz; the contact solver uses 8 velocity and 8 position iterations instead of 10/10 to reduce CPU work while preserving the fixed simulation cadence.
- The WeChat entry continues to expose FPS, CPU and GPU frame statistics in the diagnostics line.

## 自动物理冒烟测试

```bash
npm run test:nape
```

测试覆盖：
- Nape 动态刚体发射和重力运动；
- 静态地板碰撞；
- Nape-Pixi BodySpriteBinding 同步；
- KINEMATIC 定身；
- DYNAMIC 恢复运动；
- projectile 与 stasis anchor 的真实碰撞回调。

完整验证：

```bash
npm run check
```

它会执行 TypeScript 检查、Nape 物理冒烟测试、浏览器构建，以及微信发布构建。微信构建会将所有本地 JavaScript 分块转译为 ES5 并检查，然后生成仓库根目录的 `wechat-release/`。

## 微信开发者工具

每次 `main` 构建成功后，CI 会更新仓库根目录 `wechat-release/`。日常同步：

```bash
git pull --ff-only origin main
```

然后微信开发者工具以「小游戏」导入 `wechat-release/`，不要导入 `pixi-spike/` 源码目录。发布包需要完整保留 `chunks/`，不能只复制 `game.js`。

## 许可与来源

- `@newkrok/nape-js`：MIT；部分来源于旧版 Nape 的代码同时保留原 Nape 项目的 BSD 许可条件。
- `@newkrok/nape-pixi`：MIT（同一维护者）。
- 发射交互参考 Nape 上游 Slingshot 演示；弹珠反弹参数参考上游 Pinball 演示。完整许可文本见 [THIRD_PARTY_LICENSES.md](./THIRD_PARTY_LICENSES.md)。
- Sapling2D：MIT。
