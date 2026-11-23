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


// 4) Sapling2D's native pointer pipeline must normalize touch coordinates
// and preserve pointer capture on a phone-sized landscape viewport.
const { createTestGame } = await import('sapling2d/testing')
const { Node2D, rect, Scene, v } = await import('sapling2d')

class PhoneInputScene extends Scene {
  shotsFired = 0
  moveEvents = 0
  downPosition = null
  upPosition = null

  ready() {
    const inputSurface = this.add(new Node2D({
      name: 'PhoneInputSurface',
      inputPickable: true,
      hitArea: rect(0, 0, 1440, 810),
      zIndex: 10000,
    }))
    inputSurface.pointerDown.connect((event) => {
      this.downPosition = event.position
    })
    inputSurface.pointerMove.connect(() => {
      this.moveEvents++
    })
    inputSurface.pointerUp.connect((event) => {
      this.upPosition = event.position
      this.shotsFired++
    })
  }
}

const mobile = await createTestGame({
  main: PhoneInputScene,
  design: { width: 1440, height: 810, aspect: 'expand' },
  screen: {
    width: 844,
    height: 390,
    pixelRatio: 3,
    safeArea: { left: 38, top: 0, right: 806, bottom: 390 },
  },
})
const arena = mobile.scene
mobile.tap(430, 300)
assert.equal(arena.shotsFired, 1, 'phone-sized tap should arrive as one pointer up')
assert.ok(Math.abs(arena.downPosition.x - 430) < 1, 'touch X should be normalized into design coordinates')
assert.ok(Math.abs(arena.downPosition.y - 300) < 1, 'touch Y should be normalized into design coordinates')
mobile.drag(v(420, 300), v(860, 220), { frames: 4, pointerId: 2 })
assert.equal(arena.shotsFired, 2, 'phone-sized drag should deliver one captured pointer up')
assert.ok(arena.moveEvents >= 4, 'drag move events should stay captured by the original input surface')
assert.ok(Math.abs(arena.upPosition.x - 860) < 1, 'drag release X should be normalized into design coordinates')
assert.ok(Math.abs(arena.upPosition.y - 220) < 1, 'drag release Y should be normalized into design coordinates')
mobile.game.destroy()
console.log('[arena-input] PASS: phone landscape tap, coordinate normalization and captured drag')
