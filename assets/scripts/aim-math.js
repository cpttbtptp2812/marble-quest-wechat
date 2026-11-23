export function computeShotDirection(origin, target, fallbackTarget, threshold = 36) {
  let dx = target.x - origin.x;
  let dy = target.y - origin.y;
  let length = Math.hypot(dx, dy);
  if (length < threshold) {
    dx = fallbackTarget.x - origin.x;
    dy = fallbackTarget.y - origin.y;
    length = Math.hypot(dx, dy);
  }
  if (!Number.isFinite(length) || length < 0.0001) return { x: 0, y: 1 };
  return { x: dx / length, y: dy / length };
}

export function computeLaunchVelocity(direction, speed) {
  return { x: direction.x * speed, y: direction.y * speed };
}

export function getLauncherSide(x) {
  return x <= 0 ? 'left' : 'right';
}
