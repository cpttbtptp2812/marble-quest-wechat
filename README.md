# Marble Quest · 原生微信小游戏

本仓库是可直接由**微信开发者工具**导入的原生小游戏工程。不需要 Cocos Creator，也不需要额外编辑器。

## 运行

1. 下载/克隆仓库。
2. 微信开发者工具选择「小游戏」项目。
3. 项目目录选择仓库根目录（能看到 `game.js`、`game.json`、`project.config.json`）。
4. 使用自己的小游戏 AppID，或选择开发者工具支持的测试方式。
5. 点击编译。

## 操作

- 在屏幕左侧或右侧按住拖动瞄准，松开发射。
- 点击底部六种元素卡切换弹珠。
- 点击飞行中的弹珠可定身，再次点击解除。
- 两颗弹珠发生物理碰撞会触发共鸣并打开 Boss 护盾。
- 护盾打开时让弹珠击中 Boss 扣血。
- 点击右下角重新开始。

## 技术

- 微信小游戏原生 Canvas 与触摸 API。
- Matter.js 0.14.2 负责弹珠、墙体、平台、重力、反弹和碰撞检测。
- 物理引擎源码位于 `src/physics/matter.js`，MIT 许可，详见 `THIRD_PARTY_NOTICES.md`。
- 不依赖 Cocos Creator、npm install 或额外 build 目录。

## 验证说明

GitHub Actions 会检查 JavaScript 语法和 JSON 配置。自动检查不等同于微信开发者工具编译或手机真机验证；请在微信开发者工具中实际编译运行。
