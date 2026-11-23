import {
  CanvasLayer, ColorRect, Ease, Label, Node, Node2D, rect, Scene, v,
  type Vector2,
} from 'sapling2d'
import type { Body } from '@newkrok/nape-js'
import { NapeArenaPhysics, type NapeContact } from './nape-physics'
import {
  AimArt, AmbientArt, BackdropArt, CannonArt, ELEMENTS, FusionArt,
  MothArt, MuzzleFlashArt, OrbArt, PillarArt, TrailArt,
  type Element, type FusionStyle,
} from './art'

const WIDTH = 1440
const HEIGHT = 810
const ORDER: Element[] = ['fire', 'ice', 'heavy', 'lightning', 'split', 'void']

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
  return REACTIONS[[a, b].sort().join('+')] ?? {
    name: '星界共鸣', color: 0xf5e2ff, style: 'nova', damage: 24,
  }
}

export class Marble extends Node2D {
  age = 0
  fused = false
  hitBoss = false
  private trailClock = 0
  constructor(
    readonly arena: ArenaScene,
    readonly element: Element,
    readonly body: Body,
    readonly trail: TrailArt,
  ) {
    super({ name: 'NapeMarble-' + element, position: v(body.position.x, body.position.y), zIndex: 4 })
    this.add(new OrbArt(element, ELEMENTS[element].radius))
  }
  override process(dt: number): void {
    this.age += dt
    // 30 Hz trail sampling is visually smooth for fast marbles and halves
    // per-frame point churn without touching canvas/render resolution.
    this.trailClock += dt
    if (this.trailClock >= 1 / 30) {
      this.trailClock %= 1 / 30
      this.trail.addPoint(this.position)
    }
    if (this.age > 12 || this.x < -120 || this.x > WIDTH + 120 || this.y > HEIGHT + 140 || this.y < -180) {
      this.arena.removeMarble(this)
    }
  }
}

export class FrozenOrb extends Node2D {
  triggered = false
  constructor(
    readonly arena: ArenaScene,
    readonly element: Element,
    readonly body: Body,
    readonly savedVelocity: { x: number; y: number },
  ) {
    super({ name: 'NapeStasis-' + element, position: v(body.position.x, body.position.y), zIndex: 5 })
    this.add(new OrbArt(element, ELEMENTS[element].radius, true))
  }
}

class MothBoss extends Node2D {
  hp = 100
  shieldOpen = 0
  constructor(readonly arena: ArenaScene, readonly body: Body) {
    super({ name: 'Moon-Moth-Queen', position: v(body.position.x, body.position.y), zIndex: 3 })
    this.add(new MothArt())
  }
  override process(dt: number): void {
    const wasOpen = this.shieldOpen > 0
    this.shieldOpen = Math.max(0, this.shieldOpen - dt)
    if (wasOpen && this.shieldOpen === 0) this.arena.updateBossBar()
    const art = this.children.find((child) => child instanceof MothArt) as MothArt | undefined
    if (art) art.shield = this.shieldOpen
  }
  openShield(): void {
    this.shieldOpen = 3.6
    this.arena.setMessage('护盾共鸣破裂！趁现在攻击蝶后的月核！')
  }
  receiveHit(marble: Marble): void {
    if (this.shieldOpen <= 0) {
      this.arena.floatText(this.position, '护盾吸收', 0xbfaeff)
      return
    }
    const damage = ELEMENTS[marble.element].damage
    this.hp = Math.max(0, this.hp - damage)
    this.arena.updateBossBar()
    this.arena.floatText(this.position.add(v(0, -75)), '-' + damage, ELEMENTS[marble.element].light)
    if (this.hp <= 0) {
      this.arena.bossDefeated = true
      this.arena.setMessage('月蚀蝶后被净化！星界神殿的封印解除了。')
      this.arena.floatText(this.position, '月核净化！', 0xffe5b7)
    }
  }
}

export class ArenaScene extends Scene {
  readonly physics = new NapeArenaPhysics()
  selected: Element = 'fire'
  aiming = false
  aimSide: 'left' | 'right' = 'left'
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

    // Nape owns all world collision. Visual nodes below are render-only.
    this.physics.addStaticBox(WIDTH / 2, 710, WIDTH + 100, 44)
    this.physics.addStaticBox(-8, 360, 42, 700)
    this.physics.addStaticBox(WIDTH + 8, 360, 42, 700)
    this.physics.addStaticBox(WIDTH / 2, 8, WIDTH + 60, 28)
    this.#addPillar(v(430, 472), 74, 158, 0x5e9cc6)
    this.#addPillar(v(1010, 472), 74, 158, 0xa184d2)
    this.#addBumper(v(720, 560), 242, 24)
    this.#addBumper(v(720, 410), 126, 16)

    this.leftCannon = this.add(new CannonArt({ position: v(128, 632), zIndex: 4 }))
    this.rightCannon = this.add(new CannonArt({ position: v(1312, 632), zIndex: 4 }))
    this.leftCannon.aimAngle = -0.08
    this.rightCannon.aimAngle = -0.08

    const bossBody = this.physics.addBossBody(720, 245, 66)
    this.boss = this.add(new MothBoss(this, bossBody))
    this.physics.bind(bossBody, this.boss)
    this.aimGuide = this.add(new AimArt({ zIndex: 8 }))

    this.#buildHud()
    this.updateBossBar()
    this.#refreshCards()
    this.#layoutHud()
    this.tree.viewport.resized.connect(() => this.#layoutHud(), this)

    // Use Sapling2D's normal pointer pipeline for both browser and WeChat.
    // The platform already normalizes touch coordinates and captures a
    // pointer from down through move/up; no second wx listener or manual
    // screen-to-design conversion is required in either platform entry.
    const inputSurface = this.add(new Node2D({
      name: 'ArenaInputSurface',
      inputPickable: true,
      hitArea: rect(0, 0, WIDTH, HEIGHT),
      zIndex: 10000,
    }))
    inputSurface.pointerDown.connect((event) => {
      this.handlePointerDown(event.pointerId, event.position)
    })
    inputSurface.pointerMove.connect((event) => {
      this.handlePointerMove(event.pointerId, event.position)
    })
    inputSurface.pointerUp.connect((event) => {
      this.handlePointerUp(event.pointerId, event.position)
    })
  }

  override process(dt: number): void {
    const contacts = this.physics.step(dt)
    for (const contact of contacts) this.#handlePhysicsContact(contact)
  }

  #handlePhysicsContact(contact: NapeContact): void {
    if (contact.kind === 'orb-anchor') {
      const marble = this.marbles.find((item) => item.body === contact.orb)
      const anchor = this.anchors.find((item) => item.body === contact.anchor)
      if (marble && anchor) this.fuse(marble, anchor)
      return
    }
    const marble = this.marbles.find((item) => item.body === contact.orb)
    if (marble && !marble.hitBoss && this.boss.shieldOpen > 0) {
      marble.hitBoss = true
      this.boss.receiveHit(marble)
    } else if (marble && !marble.hitBoss) {
      marble.hitBoss = true
      this.floatText(this.boss.position.add(v(0, -65)), '护盾吸收', 0xbfaeff)
    }
  }

  #addPillar(position: Vector2, width: number, height: number, tint: number): void {
    this.physics.addStaticBox(position.x, position.y, width, height)
    const visual = new Node2D({ position, zIndex: 1 })
    visual.add(new PillarArt(width, height, tint))
    this.add(visual)
  }

  #addBumper(position: Vector2, width: number, height: number): void {
    this.physics.addStaticBox(position.x, position.y, width, height)
    const visual = new Node2D({ position, zIndex: 2 })
    visual.add(new ColorRect({ position: v(-width / 2, -height / 2), size: v(width, height), color: 0x7098c9 }))
    visual.add(new ColorRect({ position: v(-width / 2 + 7, -height / 2 + 3), size: v(width - 14, 4), color: 0xc7f5ff }))
    this.add(visual)
  }

  #buildHud(): void {
    const hud = this.add(new CanvasLayer({ name: 'HUD' }))
    hud.add(new ColorRect({ position: v(24, 20), size: v(390, 58), color: 0x121b39, alpha: 0.92 }))
    hud.add(new Label({ text: 'MARBLE QUEST', fontSize: 29, fontWeight: 'bold', color: 0xf1e4ff, position: v(44, 24) }))
    hud.add(new Label({ text: '星界神殿 · 双炮台弹珠试炼', fontSize: 14, color: 0xa7cde8, position: v(45, 56) }))
    hud.add(new ColorRect({ position: v(520, 24), size: v(400, 54), color: 0x151b3a, alpha: 0.82 }))
    hud.add(new Label({ text: 'MOONLIT SANCTUARY', fontSize: 16, fontWeight: 'bold', color: 0xcbb6ff, align: 'center', position: v(720, 30) }))
    hud.add(new Label({ text: '发射 · 定身 · 主动碰撞 · 元素共鸣', fontSize: 15, color: 0xe7e0ff, align: 'center', position: v(720, 54) }))
    hud.add(new ColorRect({ position: v(1110, 24), size: v(306, 54), color: 0x151b3a, alpha: 0.82 }))
    hud.add(new Label({ text: '↻ 重置试炼', fontSize: 19, color: 0xffe4ba, align: 'center', position: v(1262, 51) }))

    hud.add(new Label({ text: '月蚀蝶后', fontSize: 17, fontWeight: 'bold', color: 0xffe0bb, align: 'center', position: v(720, 100) }))
    this.bossFill = hud.add(new ColorRect({ position: v(555, 121), size: v(330, 9), color: 0xa78be9 }))
    this.bossLabel = hud.add(new Label({ text: '月核护盾 · 先用两颗球制造元素融合', fontSize: 14, color: 0xe1d4ff, align: 'center', position: v(720, 145) }))
    this.message = hud.add(new Label({
      text: '选一种弹珠，然后点击左/右场地发射；按住拖动可以瞄准。点击飞行中的球定身。',
      fontSize: 18, color: 0xf2edff, align: 'center', position: v(720, 640), wrapWidth: 1180,
    }))
    hud.add(new ColorRect({ position: v(1030, 166), size: v(380, 36), color: 0x070d21, alpha: 0.94 }))
    this.diagnosticLabel = hud.add(new Label({
      text: 'NAPE PHYSICS · WAITING FOR INPUT', fontSize: 13, fontWeight: 'bold',
      color: 0x9feaff, align: 'center', position: v(1220, 184),
    }))

    this.trayPanel = hud.add(new ColorRect({ position: v(20, 688), size: v(1400, 100), color: 0x101a36, alpha: 0.98 }))
    this.trayTitle = hud.add(new Label({
      text: '选择弹珠属性 · 左右双炮台均可发射', fontSize: 16, fontWeight: 'bold',
      color: 0xc2d4f2, position: v(40, 696),
    }))
    this.#createOrbCards(hud)
    this.#createFloorRunes()
  }

  #createFloorRunes(): void {
    for (let i = 0; i < 9; i++) {
      const x = 210 + i * 128
      this.add(new Label({ text: i % 2 ? '✧' : '◇', fontSize: 23, color: 0x7d8ec1, alpha: 0.56, position: v(x, 662) }))
    }
  }

  #createOrbCards(hud: Node): void {
    const cardW = 214
    const gap = 11
    const startX = 28
    for (let i = 0; i < ORDER.length; i++) {
      const element = ORDER[i]!
      const spec = ELEMENTS[element]
      const x = startX + i * (cardW + gap)
      const bg = hud.add(new ColorRect({ position: v(x, 733), size: v(cardW, 46), color: 0x1a2948, alpha: 0.98 }))
      const label = hud.add(new Label({
        text: this.#symbol(element) + '  ' + spec.name,
        fontSize: 17, fontWeight: 'bold', color: spec.light,
        align: 'center', position: v(x + cardW / 2, 756),
      }))
      this.#cards.push({ element, label, bg })
    }
  }

  #trayMetrics() {
    const safe = this.tree.viewport.safeRect
    const left = Math.max(18, safe.left + 12)
    const right = Math.min(WIDTH - 18, safe.right - 12)
    const width = Math.max(720, right - left)
    // Keep the entire tray above the phone's home-indicator area.
    const safeBottom = Math.min(HEIGHT - 96, safe.bottom - 96)
    const panelY = Math.max(500, safeBottom - 96)
    const gap = 9
    const cardW = Math.min(194, (width - 36 - gap * 5) / 6)
    const total = cardW * 6 + gap * 5
    const startX = left + (width - total) / 2
    return { left, right, width, panelY, gap, cardW, startX }
  }

  #layoutHud(): void {
    const m = this.#trayMetrics()
    this.trayPanel.position = v(m.left, m.panelY)
    this.trayPanel.size = v(m.width, 96)
    this.trayTitle.position = v(m.left + 18, m.panelY + 8)
    this.message.position = v((m.left + m.right) / 2, m.panelY - 28)

    for (let i = 0; i < this.#cards.length; i++) {
      const card = this.#cards[i]!
      const x = m.startX + i * (m.cardW + m.gap)
      card.bg.position = v(x, m.panelY + 36)
      card.bg.size = v(m.cardW, 46)
      card.label.position = v(x + m.cardW / 2, m.panelY + 59)
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
    return this.aimSide === 'left' ? v(128, 632) : v(1312, 632)
  }

  #defaultTarget(): Vector2 {
    return v(720, 245)
  }

  handlePointerDown(pointerId: number, position: Vector2): void {
    if (this.#activePointerId !== null) return
    this.#activePointerId = pointerId

    const tray = this.#trayMetrics()
    if (position.y >= tray.panelY - 8 && position.y <= tray.panelY + 96) {
      const index = Math.floor((position.x - tray.startX) / (tray.cardW + tray.gap))
      const cardStart = tray.startX + index * (tray.cardW + tray.gap)
      if (index >= 0 && index < ORDER.length && position.x >= cardStart && position.x <= cardStart + tray.cardW) {
        this.selected = ORDER[index]!
        this.#refreshCards()
        this.setMessage(ELEMENTS[this.selected].name + ' 已装填。点击左/右场地发射。')
        this.#lastInputState = 'SELECT ' + this.selected
      }
      this.#gestureMode = 'ui'
      this.setDiagnostics(this.#lastInputState)
      return
    }

    if (position.x >= 1150 && position.y <= 92) {
      this.resetTrial()
      this.#gestureMode = 'ui'
      return
    }

    const movingOrb = [...this.marbles].reverse().find(
      (item) => Math.hypot(item.x - position.x, item.y - position.y) <= ELEMENTS[item.element].radius + 34,
    )
    if (movingOrb) {
      this.freezeMarble(movingOrb)
      this.#gestureMode = 'ui'
      this.setDiagnostics('STASIS')
      return
    }

    const anchor = [...this.anchors].reverse().find(
      (item) => Math.hypot(item.x - position.x, item.y - position.y) <= ELEMENTS[item.element].radius + 36,
    )
    if (anchor) {
      this.releaseOrb(anchor)
      this.#gestureMode = 'ui'
      this.setDiagnostics('RELEASE')
      return
    }

    // The touch begins the existing Slingshot-style aim gesture. The Nape
    // body is created only on release, then launched with a real velocity.
    this.aimSide = position.x < WIDTH / 2 ? 'left' : 'right'
    this.aimPoint = position
    this.aiming = true
    this.#gestureMode = 'aim'
    this.#updateAim()
    this.#lastInputState = 'AIM ' + this.aimSide.toUpperCase()
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
    this.aimPoint = null
  }

  handlePointerCancel(pointerId: number): void {
    if (pointerId !== this.#activePointerId) return
    this.aiming = false
    this.aimGuide.points = []
    this.#activePointerId = null
    this.#gestureMode = null
    this.aimPoint = null
    this.#lastInputState = 'CANCEL'
    this.setDiagnostics(this.#lastInputState)
  }

  #updateAim(): void {
    const target = this.aimPoint
    if (!target) return
    const origin = this.#launcherOrigin()
    let dx = target.x - origin.x
    let dy = target.y - origin.y
    let len = Math.hypot(dx, dy)
    if (len < 30) {
      const fallback = this.#defaultTarget()
      dx = fallback.x - origin.x
      dy = fallback.y - origin.y
      len = Math.hypot(dx, dy)
    }
    const ux = dx / len
    const uy = dy / len
    const cannon = this.aimSide === 'left' ? this.leftCannon : this.rightCannon
    cannon.aimAngle = Math.atan2(uy, ux) + Math.PI / 2
    const speed = ELEMENTS[this.selected].speed
    const points: Vector2[] = []
    for (let i = 0; i < 16; i++) {
      const t = i * 0.065
      points.push(v(origin.x + ux * speed * t, origin.y + uy * speed * t + 0.5 * 560 * t * t))
    }
    this.aimGuide.points = points
  }

  #launch(target: Vector2): void {
    if (this.bossDefeated) return
    const origin = this.#launcherOrigin()
    let dx = target.x - origin.x
    let dy = target.y - origin.y
    let distance = Math.hypot(dx, dy)
    if (distance < 30) {
      const fallback = this.#defaultTarget()
      dx = fallback.x - origin.x
      dy = fallback.y - origin.y
      distance = Math.hypot(dx, dy)
    }
    const ux = dx / distance
    const uy = dy / distance
    const spec = ELEMENTS[this.selected]
    const spawn = v(origin.x + ux * 72, origin.y + uy * 72)
    const speed = spec.speed
    const trail = this.add(new TrailArt(spec.color, { zIndex: 2 }))
    this.add(new MuzzleFlashArt(spec.color, { position: spawn, rotation: Math.atan2(uy, ux), zIndex: 5 }))

    const body = this.physics.launchOrb(
      spawn.x, spawn.y, spec.radius, spec.mass,
      ux * speed, uy * speed,
    )
    const marble = this.add(new Marble(this, this.selected, body, trail))
    this.physics.bind(body, marble)
    this.marbles.push(marble)

    this.#shotsFired++
    if (this.aimSide === 'left') this.leftCannon.recoil = 1
    else this.rightCannon.recoil = 1
    this.#lastInputState = 'SHOT ' + this.#shotsFired
    this.setDiagnostics(this.#lastInputState)
    this.setMessage(ELEMENTS[this.selected].name + ' 已发射！点击飞行弹珠可定身。')
  }

  freezeMarble(marble: Marble): void {
    if (!this.marbles.includes(marble)) return
    if (this.anchors.length >= 2) {
      this.setMessage('最多同时定身两颗球。先点击一颗定身球释放它。')
      return
    }
    const savedVelocity = this.physics.freeze(marble.body)
    this.physics.unbind(marble.body)
    marble.trail.queueFree()
    this.marbles = this.marbles.filter((item) => item !== marble)
    marble.queueFree()

    const anchor = this.add(new FrozenOrb(this, marble.element, marble.body, savedVelocity))
    this.physics.bind(anchor.body, anchor)
    this.anchors.push(anchor)
    this.floatText(anchor.position.add(v(0, -36)), '时空定身', 0xe1d6ff)
    this.setMessage(ELEMENTS[anchor.element].name + ' 已定身！再发射另一颗球撞击它。')
  }

  releaseOrb(anchor: FrozenOrb): void {
    if (!this.anchors.includes(anchor)) return
    this.anchors = this.anchors.filter((item) => item !== anchor)
    this.physics.unbind(anchor.body)
    const speed = ELEMENTS[anchor.element].speed
    const saved = anchor.savedVelocity
    const vx = Math.abs(saved.x) + Math.abs(saved.y) < 40 ? 0 : saved.x
    const vy = Math.abs(saved.x) + Math.abs(saved.y) < 40 ? -speed * 0.7 : saved.y
    this.physics.release(anchor.body, vx, vy)

    const trail = this.add(new TrailArt(ELEMENTS[anchor.element].color, { zIndex: 2 }))
    const marble = this.add(new Marble(this, anchor.element, anchor.body, trail))
    this.physics.bind(anchor.body, marble)
    this.marbles.push(marble)
    anchor.queueFree()
    this.setMessage('定身解除，弹珠恢复运动。')
  }

  removeMarble(marble: Marble): void {
    this.physics.removeBody(marble.body)
    marble.trail.queueFree()
    this.marbles = this.marbles.filter((item) => item !== marble)
    marble.queueFree()
  }

  fuse(marble: Marble, anchor: FrozenOrb): void {
    if (marble.fused || anchor.triggered || !this.anchors.includes(anchor)) return
    marble.fused = true
    anchor.triggered = true
    const reaction = getReaction(marble.element, anchor.element)
    const point = v((marble.x + anchor.x) / 2, (marble.y + anchor.y) / 2)
    this.add(new FusionArt(reaction.color, reaction.style, { position: point, zIndex: 12 }))
    const label = this.add(new Label({
      text: reaction.name, fontSize: 30, fontWeight: 'bold', color: reaction.color,
      stroke: { color: 0x11132d, width: 5 }, align: 'center',
      position: point.add(v(0, -72)), scale: v(0.35, 0.35), zIndex: 15,
    }))
    label.createTween().to(label, { scale: v(1.1, 1.1) }, 0.22, Ease.BackOut)
      .to(label, { alpha: 0 }, 0.6).call(() => label.queueFree())

    this.fusionCounter++
    this.boss.openShield()
    this.boss.hp = Math.max(0, this.boss.hp - reaction.damage * 0.22)
    this.updateBossBar()
    this.anchors = this.anchors.filter((item) => item !== anchor)
    this.physics.removeBody(anchor.body)
    anchor.queueFree()
    this.physics.setVelocity(marble.body, marble.body.velocity.x * 1.08, marble.body.velocity.y * 1.08)
    this.setMessage(reaction.name + '！' + ELEMENTS[marble.element].name + ' × ' +
      ELEMENTS[anchor.element].name + '，蝶后护盾已开启，趁现在攻击月核。')
  }

  updateBossBar(): void {
    const pct = this.boss.hp / 100
    this.bossFill.size = v(330 * pct, 9)
    this.bossFill.color = this.boss.shieldOpen > 0 ? 0xffc68c : 0xa78be9
    this.bossLabel.text = this.bossDefeated
      ? '封印解除'
      : this.boss.shieldOpen > 0
        ? '月核暴露 · ' + this.boss.hp + ' / 100'
        : '月蚀护盾 · ' + this.boss.hp + ' / 100 · 先制造一次元素融合'
  }

  floatText(position: Vector2, text: string, color: number): void {
    const label = this.add(new Label({
      text, fontSize: 20, fontWeight: 'bold', color,
      stroke: { color: 0x11132d, width: 4 }, align: 'center',
      position, zIndex: 20,
    }))
    label.createTween().to(label, { y: label.y - 46, alpha: 0 }, 0.75).call(() => label.queueFree())
  }

  setMessage(text: string): void { this.message.text = text }
  setDiagnostics(text: string): void { this.diagnosticLabel.text = text }
  get shotsFired(): number { return this.#shotsFired }
  get inputState(): string { return this.#lastInputState }

  resetTrial(): void {
    this.anchors.forEach((anchor) => {
      this.physics.removeBody(anchor.body)
      anchor.queueFree()
    })
    this.marbles.slice().forEach((marble) => this.removeMarble(marble))
    this.anchors = []
    this.marbles = []
    this.boss.hp = 100
    this.boss.shieldOpen = 0
    this.bossDefeated = false
    this.fusionCounter = 0
    this.#shotsFired = 0
    this.#lastInputState = 'RESET'
    this.updateBossBar()
    this.setMessage('试炼重置。选择弹珠，点击或拖动场地发射。')
  }
}

export const gameOptions = {
  main: ArenaScene,
  // Expand preserves the complete design and avoids letterboxing on wide
  // landscape devices; HUD controls are positioned from the live safe rect.
  design: { width: WIDTH, height: HEIGHT, aspect: 'expand' as const },
  background: 0x080d24,
  pauseOnBackground: true,
  storagePrefix: 'marble-quest-nape:',
}
