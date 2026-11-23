import test from 'node:test';
import assert from 'node:assert/strict';
import { computeShotDirection, computeLaunchVelocity, getLauncherSide } from '../assets/scripts/aim-math.js';

test('tap uses a default direction toward the target', () => {
  const direction = computeShotDirection({ x: -600, y: -180 }, { x: -600, y: -180 }, { x: 0, y: 200 });
  assert.ok(direction.x > 0 && direction.y > 0);
  assert.ok(Math.abs(Math.hypot(direction.x, direction.y) - 1) < 1e-10);
});

test('drag aims toward the release point, not the reverse vector', () => {
  const direction = computeShotDirection({ x: -600, y: -180 }, { x: -300, y: 220 }, { x: 0, y: 200 });
  assert.ok(direction.x > 0 && direction.y > 0);
});

test('launch velocity preserves requested speed', () => {
  const velocity = computeLaunchVelocity({ x: 0.6, y: 0.8 }, 900);
  assert.deepEqual(velocity, { x: 540, y: 720 });
  assert.equal(Math.hypot(velocity.x, velocity.y), 900);
});

test('screen halves choose the matching launcher', () => {
  assert.equal(getLauncherSide(-10), 'left');
  assert.equal(getLauncherSide(0), 'left');
  assert.equal(getLauncherSide(10), 'right');
});
