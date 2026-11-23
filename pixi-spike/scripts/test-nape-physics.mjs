import assert from 'node:assert/strict'
import {
  Body, BodyType, CbEvent, CbType, Circle, InteractionListener,
  InteractionType, Material, Polygon, Space, Vec2,
} from '@newkrok/nape-js'
import { BodySpriteBinding, FixedStepper } from '@newkrok/nape-pixi'

// 1) Gravity, rigid-body movement and static-floor collision.
const space = new Space(new Vec2(0, 560))
const floor = new Body(BodyType.STATIC, new Vec2(400, 420))
floor.shapes.add(new Polygon(Polygon.box(800, 24), new Material(0.1, 0.15, 0.2, 1)))
floor.space = space

const ball = new Body(BodyType.DYNAMIC, new Vec2(180, 100))
ball.shapes.add(new Circle(16, undefined, new Material(0.35, 0.12, 0.18, 1)))
ball.mass = 0.72
ball.isBullet = true
ball.space = space
ball.velocity.setxy(500, -160)

const stepper = new FixedStepper({ hz: 60, maxStepsPerFrame: 4 })
const target = { x: 0, y: 0, rotation: 0 }
const binding = new BodySpriteBinding({ stepper })
binding.bind(ball, target)

for (let i = 0; i < 90; i++) {
  const alpha = stepper.step(space, 1 / 60)
  binding.update(alpha)
}
assert.ok(ball.position.x > 250, 'Nape projectile should move horizontally after launch')
assert.ok(Number.isFinite(target.x) && Number.isFinite(target.y), 'Nape-Pixi binding should sync a display target')

// 2) Official Slingshot-style stasis: KINEMATIC + zero velocity, then DYNAMIC + launch velocity.
ball.type = BodyType.KINEMATIC
ball.velocity.setxy(0, 0)
const frozenAt = { x: ball.position.x, y: ball.position.y }
for (let i = 0; i < 30; i++) {
  const alpha = stepper.step(space, 1 / 60)
  binding.update(alpha)
}
assert.ok(Math.abs(ball.position.x - frozenAt.x) < 0.05, 'Kinematic stasis should hold X position')
assert.ok(Math.abs(ball.position.y - frozenAt.y) < 0.05, 'Kinematic stasis should hold Y position')

ball.type = BodyType.DYNAMIC
ball.velocity.setxy(420, -180)
for (let i = 0; i < 15; i++) {
  const alpha = stepper.step(space, 1 / 60)
  binding.update(alpha)
}
assert.ok(ball.position.x > frozenAt.x + 20, 'Releasing stasis should resume projectile motion')

// 3) Nape BEGIN collision listener: a launched orb must contact a kinematic anchor.
const collisionSpace = new Space(new Vec2(0, 0))
const projectileType = new CbType()
const anchorType = new CbType()
let contactCount = 0
collisionSpace.listeners.add(new InteractionListener(
  CbEvent.BEGIN,
  InteractionType.COLLISION,
  projectileType,
  anchorType,
  () => { contactCount++ },
))

const anchor = new Body(BodyType.KINEMATIC, new Vec2(360, 220))
anchor.shapes.add(new Circle(32))
anchor.cbTypes.add(anchorType)
anchor.space = collisionSpace

const projectile = new Body(BodyType.DYNAMIC, new Vec2(230, 220))
projectile.shapes.add(new Circle(18, undefined, new Material(0.4, 0.1, 0.1, 1)))
projectile.isBullet = true
projectile.cbTypes.add(projectileType)
projectile.space = collisionSpace
projectile.velocity.setxy(620, 0)

for (let i = 0; i < 30; i++) collisionSpace.step(1 / 60)
assert.ok(contactCount > 0, 'Nape collision listener should detect projectile vs stasis anchor')

binding.dispose()
space.clear()
collisionSpace.clear()
console.log('[nape-smoke] PASS: launch, Nape-Pixi sync, kinematic stasis, release and collision callbacks')


// 4) The complete arena must receive touch events through Sapling2D's normal
// pointer queue on a phone-sized landscape viewport (the same route used by
// WeChatPlatform). This guards against a render-only scene with dead controls.
const { createTestGame } = await import('sapling2d/testing')
const { ArenaScene, gameOptions } = await import('../src/game-nape.ts')
const { v } = await import('sapling2d')
const mobile = await createTestGame({
  ...gameOptions,
  screen: {
    width: 844,
    height: 390,
    pixelRatio: 3,
    safeArea: { left: 38, top: 0, right: 806, bottom: 390 },
  },
})
const arena = mobile.scene
mobile.tap(430, 300)
assert.equal(arena.shotsFired, 1, 'phone-sized tap should launch exactly one marble')
assert.equal(arena.marbles.length, 1, 'launched marble should be registered in the arena')
mobile.drag(v(420, 300), v(860, 220), { frames: 4, pointerId: 2 })
assert.equal(arena.shotsFired, 2, 'phone-sized drag should aim and launch exactly one more marble')
assert.equal(arena.marbles.length, 2, 'second launched marble should be registered')
mobile.game.destroy()
console.log('[arena-input] PASS: normalized tap and captured drag launch on phone landscape viewport')
