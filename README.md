# Marble Quest

Marble Quest is a landscape 2D physics game for WeChat Mini Games, rebuilt on **Cocos Creator 3.8.9**.

The project has one engine, one scene and one gameplay implementation. It no longer contains the old Canvas prototype, PixiJS/Sapling2D experiment, Nape adapter or prebuilt release bundle.

## Open the project

1. Install **Cocos Creator 3.8.9** from the [official download page](https://www.cocos.com/creator-download).
2. In Cocos Dashboard, choose **Open Other** and select this repository root (the folder containing \`package.json\` and \`assets/\`).
3. Open \`assets/scenes/Main.scene\`. It is the only scene in the project.

## Build for WeChat Mini Games

1. Open the **Build** panel in Cocos Creator.
2. Choose **WeChat Mini Game** as the platform.
3. Set your own WeChat Mini Game AppID. No real AppID is stored in this repository.
4. Build the project. Cocos generates the DevTools project under \`build/wechatgame/\`.
5. Import that generated folder into WeChat Developer Tools and use Preview/QR code to test on a phone.

See the [Cocos Creator 3.8 WeChat publishing guide](https://docs.cocos.com/creator/3.8/manual/en/editor/publish/publish-wechatgame.html).

## Controls

- Tap either side of the arena (including a cannon) to fire from that side toward the boss.
- Touch and drag toward the direction you want to shoot, then release to fire along the live aim guide.
- Tap an element card at the bottom to change the projectile.
- Tap a flying marble to freeze it; tap the frozen marble again to release it.
- Fire another marble into a frozen marble to trigger elemental resonance and open the boss shield.
- Hit the boss while its shield is open. Use **Reset** at the top-right to restart.

The game uses one Cocos touch-input path and Cocos Creator's built-in 2D physics system. There is no custom physics adapter.

## Development checks

With Node.js 22 or newer, run:

\`\`\`bash
npm test
\`\`\`

The checks cover launch-vector math and verify the serialized scene/script link and removal of the old engine outputs.

GitHub checks do not run the proprietary Cocos editor or replace a WeChat DevTools/device test. Build in Creator and preview on a real phone before treating the migration as device-verified.
