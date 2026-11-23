import {
  CanvasLayer, circle, CollisionShape2D, ColorRect, Ease, Label, Node, Node2D, rect,
  RigidBody2D, Scene, StaticBody2D, rectangle, v, type Vector2,
} from 'sapling2d'
import { AimArt, AmbientArt, BackdropArt, CannonArt, ELEMENTS, FusionArt, MothArt, MuzzleFlashArt, OrbArt, PillarArt, TrailArt, type Element, type FusionStyle } from './art'

const WIDTH = 1440
const HEIGHT = 810
const ORDER: Element[] = ['fire', 'ice', 'heavy', 'lightning', 'split', 'void']

declare module 'sapling2d' { interface GroupRegistry { marbles: Marble } }

type Reaction = { name: string; color: number; style: FusionStyle; damage: number }
const REACTIONS: Record<string, Reaction> = {
  'fire+fire': { name: '双日耀斑', color: 0xff9a52, style: 'plasma', damage: 38 },
  'ice+ice': { name: '极光冰环', color: 0xa8efff, style: 'ice', damage: 28 },
  'heavy+heavy': { name: '双星坠击', color: 0xffd58a, style: 'nova', damage: 48 },
  'lightning+lightning': { name: '天穹雷暴', color: 0xc5a3ff, style: 'storm', damage: 34 },
  'split+split': { name: '翡翠星群', color: 0x9effc9, style: 'shards', damage: 32 },
  'void+void': { name: '永夜奇点', color: 0xd0a2ff, style: 'eclipse', damage: 48 },
  'fire+ice': { name: '星雾蒸汽环', color: 0xd5f8ff, style: 'steam', damage: 26 },
  'fire+heavy': { name: '熔核陨爆', color: 0xffa45c, style: 'nova', damage: 42 },
  'fire+lightning': { name: '日冕等离子', color: 0xffc476, style: 'plasma', damage: 42 },
  'fire+split': { name: '焰羽星网', color: 0xffb47b, style: 'shards', damage: 28 },
  'fire+void': { name: '暗日吞焰', color: 0xd99cff, style: 'eclipse', damage: 38 },
  'ice+heavy': { name: '冰川碎星', color: 0xb8f5ff, style: 'ice', damage: 38 },
  'ice+lightning': { name: '极光棱镜', color: 0xaaf4ff, style: 'storm', damage: 32 },
  'ice+split': { name: '霜晶花冠', color: 0xc4faff, style: 'shards', damage: 28 },
  'ice+void': { name: '零度裂隙', color: 0xc5c8ff, style: 'eclipse', damage: 34 },
  'heavy+lightning': { name: '雷铸冲击', color: 0xe4d3ff, style: 'storm', damage: 42 },
  'heavy+split': { name: '星陨弹片', color: 0xffe1a3, style: 'shards', damage: 34 },
  'heavy+void': { name: '引力坍缩', color: 0xd0a2ff, style: 'eclipse', damage: 44 },
  'lightning+split': { name: '千鸟电网', color: 0xd8c8ff, style: 'storm', damage: 30 },
  'lightning+void': { name: '虚空风暴', color: 0xd5b5ff, style: 'eclipse', damage: 40 },
  'split+void': { name: '暗星蜂群', color: 0xd6b5ff, style: 'shards', damage: 34 },
}
function getReaction(a: Element, b: Element): Reaction {
  const key = [a, b].sort().join('+')
  return REACTIONS[key] ?? { name: '星界共鸣', color: 0xf5e2ff, style: 'nova', damage: 24 }
}

class Marble extends RigidBody2D {
  age = 0
  fused = false
  hitBoss = false
  constructor(readonly arena: ArenaScene, readonly element: Element, position: Vector2, velocity: Vector2, readonly trail: TrailArt) {
    const spec = ELEMENTS[element]
    super({
      name: `Marble-${element}`, groups: ['marbles'], position, mass: spec.mass,
      gravityScale: 0.25, friction: 0.035, bounce: element === 'heavy' ? 0.68 : 0.91,
      linearDamp: 0.018, angularDamp: 0.5, ccd: true, inputPickable: true,
      hitArea: rect(-spec.radius - 8, -spec.radius - 8, (spec.radius + 8) * 2, (spec.radius + 8) * 2),
    })
    this.linearVelocity = velocity
    this.add(new CollisionShape2D({ shape: circle(spec.radius) }))
    this.add(new OrbArt(element, spec.radius))
    this.bodyEntered.connect((other) => {
      if (other instanceof FrozenOrb) this.arena.fuse(this, other)
      else if (other instanceof MothBoss && !this.hitBoss && other.shieldOpen > 0) {
        this.hitBoss = true
        other.receiveHit(this)
      }
    }, this)
  }
  override process(dt: number): void {
    this.age += dt
    this.trail.addPoint(this.position)
    if (this.age > 8 || this.x < -100 || this.x > WIDTH + 100 || this.y > HEIGHT + 100) {
      this.trail.queueFree()
      this.arena.forgetMarble(this)
      this.queueFree()
    }
  }
}

class FrozenOrb extends StaticBody2D {
  triggered = false
  constructor(readonly arena: ArenaScene, readonly element: Element, position: Vector2, readonly savedVelocity: Vector2) {
    const spec = ELEMENTS[element]
    super({
      name: `Stasis-${element}`, position, friction: 0.04, bounce: 0.9,
      inputPickable: true, hitArea: rect(-spec.radius - 12, -spec.radius - 12, (spec.radius + 12) * 2, (spec.radius + 12) * 2),
    })
    this.add(new CollisionShape2D({ shape: circle(spec.radius + 1) }))
    this.add(new OrbArt(element, spec.radius, true))
  }
}

class MothBoss extends StaticBody2D {
  hp = 100
  shieldOpen = 0
  constructor(readonly arena: ArenaScene) {
    super({ name: 'Moon-Moth-Queen', position: v(720, 245), friction: 0.1, bounce: 0.55 })
    this.add(new CollisionShape2D({ shape: circle(66) }))
    this.add(new MothArt())
  }
  override process(dt: number): void {
    const wasOpen = this.shieldOpen > 0
    this.shieldOpen = Math.max(0, this.shieldOpen - dt)
    if (wasOpen && this.shieldOpen === 0) this.arena.updateBossBar()
    const art = this.children.find((c) => c instanceof MothArt) as MothArt | undefined
    if (art) art.shield = this.shieldOpen
  }
  openShield(): void {
    this.shieldOpen = 3.6
    this.arena.setMessage('护盾共鸣破裂！现在瞄准蝶后的月核！')
  }
  receiveHit(marble: Marble): void {
    if (this.shieldOpen <= 0) {
      this.arena.floatText(this.position, '护盾吸收', 0xbfaeff)
      return
    }
    const damage = ELEMENTS[marble.element].damage
    this.hp = Math.max(0, this.hp - damage)
    this.arena.updateBossBar()
    this.arena.floatText(this.position.add(v(0, -75)), `-${damage}`, ELEMENTS[marble.element].light)
    if (this.hp <= 0) {
      this.arena.setMessage('月蚀蝶后被净化！星界神殿的封印解除了。')
      this.arena.bossDefeated = true
      this.arena.floatText(this.position, '月核净化！', 0xffe5b7)
    }
  }
}

/**
 * One transparent, full-arena input surface owns all touch gestures.
 * WeChat touch events are routed once here, then dispatched by design-space
 * coordinates. This avoids relying on overlapping per-label hit regions.
 */
class ArenaInputSurface extends Node2D {
  constructor(arena: ArenaScene) {
    super({
      name: 'ArenaInputSurface',
      zIndex: 99999,
      inputPickable: true,
      hitArea: rect(-260, -140, 1960, 1090),
    })
    this.pointerDown.connect((event) => arena.handlePointerDown(event.pointerId, event.position), this)
    this.pointerMove.connect((event) => arena.handlePointerMove(event.pointerId, event.position), this)
    this.pointerUp.connect((event) => arena.handlePointerUp(event.pointerId, event.position), this)
  }
}

function makeWall(position: Vector2, width: number, height: number): StaticBody2D {
  const wall = new StaticBody2D({ position, friction: 0.08, bounce: 0.85 })
  wall.add(new CollisionShape2D({ shape: rectangle(width, height) }))
  return wall
}

export class ArenaScene extends Scene {
  selected: Element = 'fire'
  aiming = false
  aimSide: 'left' | 'right' = 'left'
  aimStart: Vector2 | null = null
  aimPoint: Vector2 | null = null
  aimGuide!: AimArt
  leftCannon!: CannonArt
  rightCannon!: CannonArt
  boss!: MothBoss
  message!: Label
  diagnosticLabel!: Label
  bossFill!: ColorRect
  bossLabel!: Label
  trayPanel!: ColorRect
  trayTitle!: Label
  bossDefeated = false
  marbles: Marble[] = []
  anchors: FrozenOrb[] = []
  fusionCounter = 0
  #activePointerId: number | null = null
  #gestureMode: 'aim' | 'ui' | null = null
  #shotsFired = 0
  #lastInputState = 'READY'
  #cards: { element: Element; label: Label; bg: ColorRect }[] = []

  override ready(): void {
    this.add(new BackdropArt({ zIndex: -100 }))
    this.add(new AmbientArt({ zIndex: -80 }))
    // Physical bounds and a few bumpers keep trajectories legible.
    this.add(makeWall(v(WIDTH / 2, 714), WIDTH + 100, 44))
    this.add(makeWall(v(-8, 360), 42, 680))
    this.add(makeWall(v(WIDTH + 8, 360), 42, 680))
    this.add(makeWall(v(WIDTH / 2, 12), WIDTH + 60, 28))
    this.#addPillar(v(430, 472), 74, 158, 0x5e9cc6)
    this.#addPillar(v(1010, 472), 74, 158, 0xa184d2)
    this.#addBumper(v(720, 560), 242, 24)
    this.#addBumper(v(720, 410), 126, 16)

    this.leftCannon = this.add(new CannonArt({ position: v(128, 650), zIndex: 4 }))
    this.rightCannon = this.add(new CannonArt({ position: v(1312, 650), zIndex: 4 }))
    this.leftCannon.aimAngle = -0.08
    this.rightCannon.aimAngle = -0.08
    this.boss = this.add(new MothBoss(this))
    this.aimGuide = this.add(new AimArt({ zIndex: 8 }))

    const hud = this.add(new CanvasLayer({ name: 'HUD' }))
    hud.add(new ColorRect({ position: v(24, 20), size: v(390, 58), color: 0x121b39, alpha: 0.92 }))
    hud.add(new Label({ text: 'MARBLE QUEST', fontSize: 29, fontWeight: 'bold', color: 0xf1e4ff, position: v(44, 24) }))
    hud.add(new Label({ text: '星界神殿 · 双炮台弹珠试炼', fontSize: 14, color: 0xa7cde8, position: v(45, 56) }))
    hud.add(new ColorRect({ position: v(520, 24), size: v(400, 54), color: 0x151b3a, alpha: 0.82 }))
    hud.add(new Label({ text: 'MOONLIT SANCTUARY', fontSize: 16, fontWeight: 'bold', color: 0xcbb6ff, align: 'center', position: v(720, 30) }))
    hud.add(new Label({ text: '发射 · 定身 · 主动碰撞 · 元素共鸣', fontSize: 15, color: 0xe7e0ff, align: 'center', position: v(720, 54) }))
    hud.add(new ColorRect({ position: v(1110, 24), size: v(306, 54), color: 0x151b3a, alpha: 0.82 }))
    const reset = hud.add(new Label({ text: '↻ 重置试炼', fontSize: 19, color: 0xffe4ba, align: 'center', position: v(1262, 51), inputPickable: true, hitArea: rect(-70, -24, 140, 48) }))
    reset.clicked.connect(() => this.resetTrial(), this)

    hud.add(new Label({ text: '月蚀蝶后', fontSize: 17, fontWeight: 'bold', color: 0xffe0bb, align: 'center', position: v(720, 100) }))
    this.bossFill = hud.add(new ColorRect({ position: v(555, 121), size: v(330, 9), color: 0xa78be9 }))
    this.bossLabel = hud.add(new Label({ text: '月核护盾 · 先用两颗球制造元素融合', fontSize: 14, color: 0xe1d4ff, align: 'center', position: v(720, 145) }))
    this.message = hud.add(new Label({ text: '点击左/右半屏即可发射；按住拖动瞄准。点击飞行弹珠定身。', fontSize: 20, color: 0xf2edff, align: 'center', wrapWidth: 1180, position: v(720, 630) }))
    // Visible build / renderer diagnostics: no need to hunt through DevTools console.
    hud.add(new ColorRect({ position: v(1030, 166), size: v(380, 36), color: 0x070d21, alpha: 0.94 }))
    this.diagnosticLabel = hud.add(new Label({ text: 'PIXIJ BUILD R5 · INPUT READY', fontSize: 12, fontWeight: 'bold', color: 0x9feaff, align: 'center', position: v(1220, 184) }))
    this.trayPanel = hud.add(new ColorRect({ position: v(20, 668), size: v(1400, 100), color: 0x101a36, alpha: 0.98 }))
    this.trayTitle = hud.add(new Label({ text: '选择弹珠属性 · 点击任意一侧发射', fontSize: 16, fontWeight: 'bold', color: 0xc2d4f2, position: v(40, 676) }))
    this.#createOrbCards(hud)

    this.#createFloorRunes()
    this.updateBossBar()
    this.#refreshCards()
    // Added last and on the HUD layer so it reliably receives all touches.
    hud.add(new ArenaInputSurface(this))
    this.#layoutHud()
    this.tree.viewport.resized.connect(() => this.#layoutHud(), this)
  }

  #addPillar(position: Vector2, width: number, height: number, tint: number): void {
    const body = new StaticBody2D({ position, friction: 0.1, bounce: 0.9 })
    body.add(new CollisionShape2D({ shape: rectangle(width, height) }))
    body.add(new PillarArt(width, height, tint))
    this.add(body)
  }
  #addBumper(position: Vector2, width: number, height: number): void {
    const body = new StaticBody2D({ position, friction: 0.025, bounce: 1.05 })
    body.add(new CollisionShape2D({ shape: rectangle(width, height) }))
    body.add(new ColorRect({ position: v(-width / 2, -height / 2), size: v(width, height), color: 0x7098c9 }))
    body.add(new ColorRect({ position: v(-width / 2 + 7, -height / 2 + 3), size: v(width - 14, 4), color: 0xc7f5ff }))
    this.add(body)
  }
  #createFloorRunes(): void {
    for (let i = 0; i < 9; i++) {
      const x = 210 + i * 128
      this.add(new Label({ text: i % 2 ? '✧' : '◇', fontSize: 23, color: 0x7d8ec1, alpha: 0.56, position: v(x, 672) }))
    }
  }
  #createOrbCards(hud: Node): void {
    for (let i = 0; i < ORDER.length; i++) {
      const element = ORDER[i]!
      const spec = ELEMENTS[element]
      const bg = hud.add(new ColorRect({ position: v(0, 0), size: v(180, 42), color: 0x1a2948, alpha: 0.98 }))
      const label = hud.add(new Label({
        text: `${this.#symbol(element)}  ${spec.name}`, fontSize: 18, fontWeight: 'bold',
        color: spec.light, align: 'center', position: v(90, 21),
        inputPickable: false,
      }))
      this.#cards.push({ element, label, bg })
    }
  }

  #layoutHud(): void {
    const safe = this.tree.viewport.safeRect
    const left = Math.max(18, safe.left + 12)
    const right = Math.min(WIDTH - 18, safe.right - 12)
    const width = Math.max(720, right - left)
    const bottom = Math.min(HEIGHT - 12, safe.bottom - 12)
    const panelY = Math.max(620, bottom - 104)

    this.trayPanel.position = v(left, panelY)
    this.trayPanel.size = v(width, 96)
    this.trayTitle.position = v(left + 18, panelY + 8)
    this.message.position = v((left + right) / 2, panelY - 28)

    const gap = 9
    const cardW = Math.min(194, (width - 36 - gap * 5) / 6)
    const total = cardW * 6 + gap * 5
    const startX = left + (width - total) / 2
    for (let i = 0; i < this.#cards.length; i++) {
      const card = this.#cards[i]!
      const x = startX + i * (cardW + gap)
      card.bg.position = v(x, panelY + 36)
      card.bg.size = v(cardW, 46)
      card.label.position = v(x + cardW / 2, panelY + 59)
    }
  }
  #symbol(element: Element): string {
    return ({ fire: '✦', ice: '❄', heavy: '◈', lightning: 'ϟ', split: '✧', void: '◉' })[element]
  }
  #refreshCards(): void {
    for (const card of this.#cards) {
      card.bg.color = card.element === this.selected ? 0x36436e : 0x1a2948
      card.label.color = card.element === this.selected ? 0xffffff : ELEMENTS[card.element].light
    }
  }

  #launcherOrigin(): Vector2 {
    return this.aimSide === 'left' ? v(128, 650) : v(1312, 650)
  }

  #defaultTarget(): Vector2 {
    return v(WIDTH / 2, 250)
  }

  #isTrayPoint(position: Vector2): boolean {
    const safe = this.tree.viewport.safeRect
    const bottom = Math.min(HEIGHT - 12, safe.bottom - 12)
    return position.y >= bottom - 104
  }

  handlePointerDown(pointerId: number, position: Vector2): void {
    if (this.#activePointerId !== null) return
    this.#activePointerId = pointerId

    if (this.#isTrayPoint(position)) {
      const safe = this.tree.viewport.safeRect
      const left = Math.max(18, safe.left + 12)
      const right = Math.min(WIDTH - 18, safe.right - 12)
      const width = Math.max(720, right - left)
      const gap = 9
      const cardW = Math.min(194, (width - 36 - gap * 5) / 6)
      const total = cardW * 6 + gap * 5
      const startX = left + (width - total) / 2
      const index = Math.floor((position.x - startX) / (cardW + gap))
      if (index >= 0 && index < ORDER.length && position.x <= startX + index * (cardW + gap) + cardW) {
        this.selected = ORDER[index]!
        this.#refreshCards()
        this.setMessage(ELEMENTS[this.selected].name + ' 已装填。点击场地发射，拖动可瞄准。')
      }
      this.#gestureMode = 'ui'
      this.#lastInputState = 'SELECT ' + this.selected
      this.setDiagnostics(this.#lastInputState)
      return
    }

    if (position.x >= 1170 && position.y >= 12 && position.y <= 92) {
      this.resetTrial()
      this.#gestureMode = 'ui'
      this.#lastInputState = 'RESET'
      this.setDiagnostics(this.#lastInputState)
      return
    }

    const marble = [...this.marbles].reverse().find(
      (item) => Math.hypot(item.x - position.x, item.y - position.y) <= ELEMENTS[item.element].radius + 32,
    )
    if (marble) {
      this.freezeMarble(marble)
      this.#gestureMode = 'ui'
      this.#lastInputState = 'STASIS'
      this.setDiagnostics(this.#lastInputState)
      return
    }

    const anchor = this.anchors.find(
      (item) => Math.hypot(item.x - position.x, item.y - position.y) <= ELEMENTS[item.element].radius + 34,
    )
    if (anchor) {
      this.releaseOrb(anchor)
      this.#gestureMode = 'ui'
      this.#lastInputState = 'RELEASE'
      this.setDiagnostics(this.#lastInputState)
      return
    }

    this.aimSide = position.x < WIDTH / 2 ? 'left' : 'right'
    this.aimStart = this.#launcherOrigin()
    this.aimPoint = position
    if (Math.hypot(position.x - this.aimStart.x, position.y - this.aimStart.y) < 85) {
      this.aimPoint = this.#defaultTarget()
    }
    this.aiming = true
    this.#gestureMode = 'aim'
    this.#lastInputState = 'AIM ' + this.aimSide.toUpperCase()
    this.#updateAim()
    this.setMessage('松手即可发射。点击飞行弹珠定身，点击定身球释放。')
    this.setDiagnostics(this.#lastInputState)
  }

  handlePointerMove(pointerId: number, position: Vector2): void {
    if (pointerId !== this.#activePointerId || this.#gestureMode !== 'aim') return
    this.aimPoint = position
    this.#updateAim()
    this.#lastInputState = 'AIMING'
  }

  handlePointerUp(pointerId: number, position: Vector2): void {
    if (pointerId !== this.#activePointerId) return
    if (this.#gestureMode === 'aim') {
      this.aimPoint = position
      this.aiming = false
      this.aimGuide.points = []
      this.#launch(position)
    }
    this.#activePointerId = null
    this.#gestureMode = null
    this.aimStart = null
    this.aimPoint = null
  }

  #updateAim(): void {
    const target = this.aimPoint
    if (!target) return
    const origin = this.#launcherOrigin()
    let dx = target.x - origin.x
    let dy = target.y - origin.y
    let len = Math.hypot(dx, dy)
    if (len < 85) {
      const fallback = this.#defaultTarget()
      dx = fallback.x - origin.x
      dy = fallback.y - origin.y
      len = Math.hypot(dx, dy)
    }
    if (len < 1) return
    const ux = dx / len, uy = dy / len
    const cannon = this.aimSide === 'left' ? this.leftCannon : this.rightCannon
    cannon.aimAngle = Math.atan2(uy, ux) + Math.PI / 2
    const power = Math.max(0.62, Math.min(1.2, len / 520))
    const speed = ELEMENTS[this.selected].speed * power
    const points: Vector2[] = []
    for (let i = 0; i < 15; i++) {
      const t = i * 0.07
      points.push(v(origin.x + ux * speed * t, origin.y + uy * speed * t + 0.5 * 62.5 * t * t))
    }
    this.aimGuide.points = points
  }

  #launch(target: Vector2): void {
    if (this.bossDefeated) return
    const origin = this.#launcherOrigin()
    let dx = target.x - origin.x
    let dy = target.y - origin.y
    let len = Math.hypot(dx, dy)
    if (len < 85) {
      const fallback = this.#defaultTarget()
      dx = fallback.x - origin.x
      dy = fallback.y - origin.y
      len = Math.hypot(dx, dy)
    }
    if (len < 1) return

    const ux = dx / len, uy = dy / len
    const power = Math.max(0.62, Math.min(1.2, len / 520))
    const spec = ELEMENTS[this.selected]
    const speed = spec.speed * power
    const spawn = origin.add(v(ux * 74, uy * 74))
    const trail = this.add(new TrailArt(spec.color, { zIndex: 2 }))
    this.add(new MuzzleFlashArt(spec.color, { position: spawn, rotation: Math.atan2(uy, ux), zIndex: 5 }))
    const marble = this.add(new Marble(this, this.selected, spawn, v(ux * speed, uy * speed), trail))
    marble.linearVelocity = v(ux * speed, uy * speed)
    this.marbles.push(marble)
    this.#shotsFired++
    if (this.aimSide === 'left') this.leftCannon.recoil = 1
    else this.rightCannon.recoil = 1
    this.#lastInputState = 'SHOT ' + this.#shotsFired
    this.setDiagnostics(this.#lastInputState)
    this.setMessage(ELEMENTS[this.selected].name + ' 发射！点中飞行弹珠可将它定身。')
  }

  freezeLatest(): void {
    if (this.anchors.length >= 2) {
      this.setMessage('最多同时定身两颗球。先点击一颗定身球释放它。')
      return
    }
    const target = [...this.marbles].reverse().find((b) => !b.isQueuedForDeletion)
    if (target) this.freezeMarble(target)
    else this.setMessage('先发射一颗弹珠，再点击空白处将它定身。')
  }
  freezeMarble(marble: Marble): void {
    if (marble.isQueuedForDeletion) return
    if (this.anchors.length >= 2) {
      this.setMessage('空中已有两颗定身球。点击其中一颗释放后，再布置新的碰撞点。')
      return
    }
    const velocity = marble.linearVelocity
    const anchor = this.add(new FrozenOrb(this, marble.element, marble.position, velocity))
    this.anchors.push(anchor)
    this.marbles = this.marbles.filter((x) => x !== marble)
    marble.trail.queueFree()
    marble.queueFree()
    this.floatText(anchor.position.add(v(0, -36)), '时空定身', 0xe1d6ff)
    this.setMessage(`${ELEMENTS[anchor.element].name} 已定身！从任意一侧发射另一颗球，主动撞击它。`)
  }
  releaseOrb(anchor: FrozenOrb): void {
    if (anchor.triggered) return
    this.anchors = this.anchors.filter((x) => x !== anchor)
    const velocity = anchor.savedVelocity.length() > 80 ? anchor.savedVelocity : v(0, -380)
    const trail = this.add(new TrailArt(ELEMENTS[anchor.element].color, { zIndex: 2 }))
    this.marbles.push(this.add(new Marble(this, anchor.element, anchor.position, velocity, trail)))
    anchor.queueFree()
    this.setMessage('定身解除，弹珠恢复运动。')
  }
  forgetMarble(marble: Marble): void { this.marbles = this.marbles.filter((x) => x !== marble) }
  fuse(marble: Marble, anchor: FrozenOrb): void {
    if (marble.fused || anchor.triggered || anchor.isQueuedForDeletion) return
    marble.fused = true
    anchor.triggered = true
    const reaction = getReaction(marble.element, anchor.element)
    const collisionPoint = v((marble.x + anchor.x) / 2, (marble.y + anchor.y) / 2)
    this.add(new FusionArt(reaction.color, reaction.style, { position: collisionPoint, zIndex: 12 }))
    const label = this.add(new Label({
      text: reaction.name, fontSize: 31, fontWeight: 'bold', color: reaction.color,
      stroke: { color: 0x11132d, width: 5 }, align: 'center',
      position: collisionPoint.add(v(0, -74)), scale: v(0.35, 0.35), zIndex: 15,
    }))
    label.createTween().to(label, { scale: v(1.15, 1.15) }, 0.24, Ease.BackOut).to(label, { alpha: 0 }, 0.62).call(() => label.queueFree())
    this.fusionCounter++
    this.boss.openShield()
    this.boss.hp = Math.max(0, this.boss.hp - reaction.damage * 0.22)
    this.updateBossBar()
    this.anchors = this.anchors.filter((x) => x !== anchor)
    anchor.queueFree()
    marble.linearVelocity = v(marble.linearVelocity.x * 1.08, marble.linearVelocity.y * 1.08)
    this.setMessage(`${reaction.name}！${ELEMENTS[marble.element].name} × ${ELEMENTS[anchor.element].name}，蝶后护盾已开启，趁现在攻击月核。`)
  }
  updateBossBar(): void {
    const pct = this.boss.hp / 100
    this.bossFill.size = v(330 * pct, 9)
    this.bossFill.color = this.boss.shieldOpen > 0 ? 0xffc68c : 0xa78be9
    this.bossLabel.text = this.bossDefeated ? '封印解除' : this.boss.shieldOpen > 0 ? `月核暴露 · ${this.boss.hp} / 100` : `月蚀护盾 · ${this.boss.hp} / 100 · 先制造一次元素融合`
  }
  floatText(position: Vector2, text: string, color: number): void {
    const label = this.add(new Label({ text, fontSize: 20, fontWeight: 'bold', color, stroke: { color: 0x11132d, width: 4 }, align: 'center', position, zIndex: 20 }))
    label.createTween().to(label, { y: label.y - 46, alpha: 0 }, 0.75).call(() => label.queueFree())
  }
  setMessage(text: string): void { this.message.text = text }
  setDiagnostics(text: string): void { this.diagnosticLabel.text = text }
  get shotsFired(): number { return this.#shotsFired }
  get inputState(): string { return this.#lastInputState }
  resetTrial(): void {
    this.anchors.forEach((x) => x.queueFree())
    this.marbles.forEach((x) => { x.trail.queueFree(); x.queueFree() })
    this.anchors = []
    this.marbles = []
    this.boss.hp = 100
    this.boss.shieldOpen = 0
    this.bossDefeated = false
    this.fusionCounter = 0
    this.#shotsFired = 0
    this.#lastInputState = 'RESET'
    this.updateBossBar()
    this.setMessage('试炼重置。先发射一颗球，点击空白处定身，再用另一颗球主动撞击。')
  }
}

export const gameOptions = {
  main: ArenaScene,
  design: { width: WIDTH, height: HEIGHT, aspect: 'expand' as const },
  background: 0x080d24,
  physics: { pixelsPerMeter: 50, gravity: v(0, 250), velocityIterations: 8, positionIterations: 3 },
  maxPhysicsStepsPerFrame: 2,
  pauseOnBackground: true,
  storagePrefix: 'marble-quest-pixi:',

}
