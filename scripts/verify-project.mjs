import assert from 'node:assert/strict';
import { readFile, readdir, access } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const read = async (path) => JSON.parse(await readFile(new URL(path, root), 'utf8'));
const project = await read('package.json');
assert.equal(project.creator.version, '3.8.9');

const engine = await read('settings/v2/packages/engine.json');
assert.ok(engine.modules.includeModules.includes('physics-2d-box2d'), 'Box2D backend must be included');
assert.equal(engine.modules.cache['physics-2d']._option, 'physics-2d-box2d');
assert.equal(engine.modules.cache['physics-2d-box2d']._value, true);
assert.equal(engine.modules.cache['physics-2d-builtin']._value, false);

const scene = await read('assets/scenes/Main.scene');
const scriptMeta = await read('assets/scripts/GameController.ts.meta');
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
const hex = scriptMeta.uuid.replace(/-/g, '');
let compressed = hex.slice(0, 2);
for (let i = 2; i < hex.length; i += 3) {
  const a = parseInt(hex[i], 16);
  const b = parseInt(hex[i + 1], 16);
  const c = parseInt(hex[i + 2], 16);
  compressed += alphabet[(a << 2) | (b >> 2)];
  compressed += alphabet[((b & 3) << 4) | c];
}
assert.ok(scene.some((item) => item.__type__ === compressed), 'scene must reference GameController UUID');
assert.ok(scene.some((item) => item.__type__ === 'cc.Canvas'));
assert.ok(scene.some((item) => item.__type__ === 'cc.Camera'));

for (const path of ['pixi-spike', 'wechat-release', 'src', 'test', 'game.js', 'game.json', 'project.config.json']) {
  try {
    await access(new URL(path, root));
    assert.fail('legacy path remains: ' + path);
  } catch (error) {
    if (error && error.code !== 'ENOENT') throw error;
  }
}
const assets = await readdir(new URL('assets/scripts/', root));
assert.deepEqual(new Set(assets), new Set(['GameController.ts', 'GameController.ts.meta', 'aim-math.js', 'aim-math.js.meta']));
console.log('Project structure OK: Cocos Creator 3.8.9, Box2D enabled, scene/script link valid, legacy engine files removed.');
