import {
  Body,
  BodyType,
  CbEvent,
  CbType,
  Circle,
  InteractionListener,
  InteractionType,
  Material,
  Polygon,
  Space,
  Vec2,
} from '@newkrok/nape-js'
import { BodySpriteBinding, FixedStepper } from '@newkrok/nape-pixi'
import type { Node2D } from 'sapling2d'

export type NapeContact =
  | { kind: 'orb-anchor'; orb: Body; anchor: Body }
  | { kind: 'orb-boss'; orb: Body; boss: Body }

/**
 * Thin adapter around the ready-made Nape physics engine.
 *
 * The launch/body/collision model follows the upstream Nape Slingshot and
 * Pinball examples. This class only translates Marble Quest's game rules
 * (dual launch points, freeze/release and contact events) into Nape objects.
 */
export class NapeArenaPhysics {
  readonly space = new Space(new Vec2(0, 560))
  readonly stepper = new FixedStepper({
    hz: 60,
    maxStepsPerFrame: 4,
    velocityIterations: 10,
    positionIterations: 10,
  })
  readonly binding = new BodySpriteBinding({ stepper: this.stepper })

  readonly projectileType = new CbType()
  readonly anchorType = new CbType()
  readonly bossType = new CbType()

  readonly #contacts: NapeContact[] = []
  readonly #projectileMaterial = new Material(0.68, 0.12, 0.18, 1)
  readonly #wallMaterial = new Material(0.72, 0.14, 0.2, 1)

  constructor() {
    this.space.listeners.add(new InteractionListener(
      CbEvent.BEGIN,
      InteractionType.COLLISION,
      this.projectileType,
      this.anchorType,
      (callback) => {
        const first = this.#bodyFromInteractor(callback.int1)
        const second = this.#bodyFromInteractor(callback.int2)
        const orb = first?.userData.kind === 'orb' ? first : second?.userData.kind === 'orb' ? second : null
        const anchor = first?.userData.kind === 'anchor' ? first : second?.userData.kind === 'anchor' ? second : null
        if (orb && anchor && orb !== anchor) {
          this.#contacts.push({ kind: 'orb-anchor', orb, anchor })
        }
      },
    ))

    this.space.listeners.add(new InteractionListener(
      CbEvent.BEGIN,
      InteractionType.COLLISION,
      this.projectileType,
      this.bossType,
      (callback) => {
        const first = this.#bodyFromInteractor(callback.int1)
        const second = this.#bodyFromInteractor(callback.int2)
        const orb = first?.userData.kind === 'orb' ? first : second?.userData.kind === 'orb' ? second : null
        const boss = first?.userData.kind === 'boss' ? first : second?.userData.kind === 'boss' ? second : null
        if (orb && boss && orb !== boss) {
          this.#contacts.push({ kind: 'orb-boss', orb, boss })
        }
      },
    ))
  }

  #bodyFromInteractor(interactor: any): Body | null {
    return (interactor?.castBody ?? interactor?.castShape?.body ?? null) as Body | null
  }

  addStaticBox(x: number, y: number, width: number, height: number): Body {
    const body = new Body(BodyType.STATIC, new Vec2(x, y))
    body.shapes.add(new Polygon(Polygon.box(width, height), this.#wallMaterial.copy()))
    body.space = this.space
    return body
  }

  addStaticCircle(x: number, y: number, radius: number): Body {
    const body = new Body(BodyType.STATIC, new Vec2(x, y))
    body.shapes.add(new Circle(radius, undefined, this.#wallMaterial.copy()))
    body.space = this.space
    return body
  }

  addBossBody(x: number, y: number, radius: number): Body {
    const body = this.addStaticCircle(x, y, radius)
    body.userData.kind = 'boss'
    body.cbTypes.add(this.bossType)
    return body
  }

  /**
   * Create a Nape dynamic body, add it to the Space, then set velocity.
   * Ordering intentionally mirrors Nape's official Slingshot demo: space
   * membership is established before the launch velocity is assigned.
   */
  launchOrb(
    x: number,
    y: number,
    radius: number,
    mass: number,
    velocityX: number,
    velocityY: number,
  ): Body {
    const body = new Body(BodyType.DYNAMIC, new Vec2(x, y))
    body.shapes.add(new Circle(radius, undefined, this.#projectileMaterial.copy()))
    body.userData.kind = 'orb'
    body.mass = mass
    body.isBullet = true
    body.cbTypes.add(this.projectileType)
    body.space = this.space
    body.velocity.setxy(velocityX, velocityY)
    return body
  }

  bind(body: Body, node: Node2D): void {
    // Node2D exposes x/y/rotation setters, matching Nape-Pixi's structural
    // PixiDisplayTarget contract; the official binding handles interpolation.
    this.binding.bind(body, node)
  }

  unbind(body: Body): void {
    this.binding.unbind(body)
  }

  freeze(body: Body): { x: number; y: number } {
    const saved = { x: body.velocity.x, y: body.velocity.y }
    body.userData.kind = 'anchor'
    body.cbTypes.remove(this.projectileType)
    body.cbTypes.add(this.anchorType)
    body.type = BodyType.KINEMATIC
    body.velocity.setxy(0, 0)
    body.angularVel = 0
    return saved
  }

  release(body: Body, velocityX: number, velocityY: number): void {
    body.userData.kind = 'orb'
    body.cbTypes.remove(this.anchorType)
    body.cbTypes.add(this.projectileType)
    body.type = BodyType.DYNAMIC
    body.velocity.setxy(velocityX, velocityY)
    body.wake()
  }

  setVelocity(body: Body, velocityX: number, velocityY: number): void {
    body.velocity.setxy(velocityX, velocityY)
    body.wake()
  }

  removeBody(body: Body): void {
    this.binding.unbind(body)
    if (body.space === this.space) body.space = null
  }

  step(deltaSeconds: number): NapeContact[] {
    const dt = Math.max(0, Math.min(deltaSeconds, 1 / 20))
    if (dt > 0) {
      const alpha = this.stepper.step(this.space, dt)
      this.binding.update(alpha)
    }
    return this.#contacts.splice(0, this.#contacts.length)
  }

  dispose(): void {
    this.binding.dispose()
    this.space.clear()
    this.#contacts.length = 0
  }
}
