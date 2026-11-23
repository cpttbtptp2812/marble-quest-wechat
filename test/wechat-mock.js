'use strict';
const path = require('path');
const handlers = {};
const ctx = new Proxy({
  createLinearGradient() { return { addColorStop() {} }; },
  createRadialGradient() { return { addColorStop() {} }; },
  roundRect() {},
  setTransform() {},
  drawImage() {},
  measureText(text) { return { width: String(text).length * 6 }; }
}, {
  get(target, key) { return key in target ? target[key] : function noop() {}; },
  set(target, key, value) { target[key] = value; return true; }
});
const canvas = {
  width: 960,
  height: 540,
  getContext() { return ctx; },
  requestAnimationFrame(callback) { global.__mqRaf = callback; return 1; }
};
global.wx = {
  createCanvas() { return canvas; },
  createOffscreenCanvas() { return { width: 1440, height: 810, getContext() { return ctx; } }; },
  getWindowInfo() { return { windowWidth: 960, windowHeight: 540, pixelRatio: 1 }; },
  getSystemInfoSync() { return { windowWidth: 960, windowHeight: 540, pixelRatio: 1 }; },
  onTouchStart(fn) { handlers.start = fn; },
  onTouchMove(fn) { handlers.move = fn; },
  onTouchEnd(fn) { handlers.end = fn; },
  onTouchCancel(fn) { handlers.cancel = fn; },
  onWindowResize(fn) { handlers.resize = fn; },
  onHide(fn) { handlers.hide = fn; },
  onShow(fn) { handlers.show = fn; },
  vibrateShort() {}
};
global.requestAnimationFrame = (callback) => { global.__mqRaf = callback; return 1; };
require(path.join(__dirname, '..', 'game.js'));
if (!global.__mqRaf) throw new Error('Game did not schedule its first frame');
for (let i = 0; i < 3; i += 1) {
  const frame = global.__mqRaf;
  global.__mqRaf = null;
  frame(Date.now() + i * 16);
}
console.log('boot + cached background + draw frames: ok');
handlers.start({ touches: [{ clientX: 180, clientY: 518, identifier: 1 }] });
handlers.end({ changedTouches: [{ clientX: 180, clientY: 518, identifier: 1 }] });
handlers.start({ touches: [{ clientX: 76.7, clientY: 443.3, identifier: 2 }] });
handlers.move({ touches: [{ clientX: 150, clientY: 394, identifier: 2 }] });
handlers.end({ changedTouches: [{ clientX: 150, clientY: 394, identifier: 2 }] });
handlers.start({ touches: [{ clientX: 300, clientY: 240, identifier: 3 }] });
console.log('touch select + aim/fire + stasis dispatch: ok');
