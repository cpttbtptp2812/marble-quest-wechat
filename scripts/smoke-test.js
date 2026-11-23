// Headless startup smoke test for the native WeChat game entry.
const noop = () => {};
const ctx = new Proxy({
  createLinearGradient: () => ({ addColorStop: noop })
}, {
  get(target, key) {
    if (Object.prototype.hasOwnProperty.call(target, key)) return target[key];
    return noop;
  },
  set() { return true; }
});
const canvas = { width: 960, height: 540, getContext: () => ctx };
let nextFrame = null;
const handlers = {};
global.requestAnimationFrame = callback => { nextFrame = callback; return 1; };
global.wx = {
  createCanvas: () => canvas,
  getSystemInfoSync: () => ({ pixelRatio: 1, windowWidth: 960, windowHeight: 540 }),
  onWindowResize: noop,
  onTouchStart: callback => { handlers.start = callback; },
  onTouchMove: callback => { handlers.move = callback; },
  onTouchEnd: callback => { handlers.end = callback; },
  onTouchCancel: callback => { handlers.cancel = callback; }
};

require('../game.js');
if (typeof nextFrame !== 'function') throw new Error('Game loop did not start');
if (!handlers.start || !handlers.end) throw new Error('Touch handlers were not registered');

// Fire one marble and advance a few frames to exercise Matter.js startup/update/render.
handlers.start({ changedTouches: [{ clientX: 100, clientY: 400 }] });
handlers.end({ changedTouches: [{ clientX: 360, clientY: 180 }] });
for (let i = 0; i < 4; i++) {
  const tick = nextFrame;
  if (typeof tick !== 'function') throw new Error('Next animation frame was not scheduled');
  nextFrame = null;
  tick();
}
console.log('Native game startup, touch input, Matter.js update and render smoke test passed.');
