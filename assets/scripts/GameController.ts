import {
  _decorator, Component, Node, Graphics, Color, Vec2, Vec3, Size,
  UITransform, Label, RigidBody2D, CircleCollider2D, BoxCollider2D,
  ERigidBody2DType, PhysicsSystem2D, Contact2DType, input, Input, EventTouch,
} from 'cc';
import { computeShotDirection, computeLaunchVelocity, getLauncherSide } from './aim-math';

const { ccclass } = _decorator;
const UI_LAYER = 33554432;
const GRAVITY = 900;
type ElementId = 'fire' | 'ice' | 'heavy' | 'lightning' | 'split' | 'void';
type Side = 'left' | 'right';
type OrbRecord = {
  node: Node; body: RigidBody2D; collider: CircleCollider2D;
  element: ElementId; radius: number; age: number; frozen: boolean;
  savedVelocity: Vec2; hitBoss: boolean;
};
type CardLayout = { element: ElementId; x: number; y: number; width: number; height: number };

const ELEMENTS: Record<ElementId, {
  name: string; color: number; light: number; dark: number;
  radius: number; mass: number; speed: number; damage: number; symbol: string;
}> = {
  fire:      { name: '烈焰核心', color: 0xff704b, light: 0xffd7a6, dark: 0x702b39, radius: 19, mass: 0.72, speed: 860, damage: 17, symbol: '✦' },
  ice:       { name: '极寒晶核', color: 0x65dafa, light: 0xd7fbff, dark: 0x245d91, radius: 17, mass: 0.58, speed: 920, damage: 15, symbol: '❄' },
  heavy:     { name: '陨星重核', color: 0xf4bd60, light: 0xffefb6, dark: 0x78502e, radius: 25, mass: 1.65, speed: 700, damage: 30, symbol: '◈' },
  lightning: { name: '雷暴之眼', color: 0xb18aff, light: 0xf0deff, dark: 0x44318d, radius: 15, mass: 0.45, speed: 1040, damage: 13, symbol: 'ϟ' },
  split:     { name: '裂变之种', color: 0x70dfa8, light: 0xd4ffeb, dark: 0x276c68, radius: 18, mass: 0.62, speed: 820, damage: 12, symbol: '✧' },
  void:      { name: '虚空奇点', color: 0xb783ff, light: 0xf0ddff, dark: 0x2c174f, radius: 22, mass: 1.05, speed: 760, damage: 18, symbol: '◉' },
};
const ELEMENT_ORDER: ElementId[] = ['fire', 'ice', 'heavy', 'lightning', 'split', 'void'];

@ccclass('GameController')
export class GameController extends Component {
  private canvasTransform!: UITransform;
  private width = 1440;
  private height = 810;
  private lastLayoutWidth = 0;
  private lastLayoutHeight = 0;
  private physics!: PhysicsSystem2D;
  private background!: Graphics;
  private aimGuide!: Graphics;
  private hudGraphics!: Graphics;
  private leftCannon!: Node;
  private rightCannon!: Node;
  private bossNode!: Node;
  private messageLabel!: Label;
  private bossLabel!: Label;
  private titleLabel!: Label;
  private shotLabel!: Label;
  private resetLabel!: Label;
  private cardLabels: Label[] = [];
  private cards: CardLayout[] = [];
  private selected: ElementId = 'fire';
  private orbs: OrbRecord[] = [];
  private bossHp = 100;
  private shieldTimer = 0;
  private shotsFired = 0;
  private fusionCount = 0;
  private message = '点按任意炮台发射；从炮台拖向目标并松开发射。';
  private activeTouchId = -1;
  private gestureMode: 'aim' | 'ui' | null = null;
  private aimSide: Side = 'left';
  private aimOrigin = new Vec2();
  private aimPoint = new Vec2();

  onLoad(): void {
    this.canvasTransform = this.getComponent(UITransform)!;
  }

  start(): void {
    this.canvasTransform = this.canvasTransform || this.getComponent(UITransform)!;
    this.updateViewportMetrics();
    this.setupPhysics();
    this.buildWorld();
    this.buildHud();
    this.bindInput();
    this.setMessage(this.message);
    this.updateBossHud();
  }

  onDestroy(): void {
    input.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
    input.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
    input.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
    input.off(Input.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
    if (this.physics) this.physics.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
  }

  update(dt: number): void {
    const size = this.canvasTransform.contentSize;
    if (Math.abs(size.width - this.lastLayoutWidth) > 1 || Math.abs(size.height - this.lastLayoutHeight) > 1) {
      this.updateViewportMetrics();
      this.layoutHud();
    }
    for (let i = this.orbs.length - 1; i >= 0; i--) {
      const orb = this.orbs[i]!;
      if (!orb.frozen) orb.age += dt;
      const p = orb.node.position;
      if (orb.age > 16 || p.x < -this.width * 0.7 || p.x > this.width * 0.7 ||
          p.y < -this.height * 0.8 || p.y > this.height * 0.8) this.removeOrb(orb);
    }
    if (this.shieldTimer > 0) {
      this.shieldTimer = Math.max(0, this.shieldTimer - dt);
      if (this.shieldTimer === 0) {
        this.setMessage('月蚀护盾重新闭合。再次让两颗弹珠相撞，打开护盾。');
        this.updateBossHud();
      }
    }
  }

  private updateViewportMetrics(): void {
    const size = this.canvasTransform.contentSize;
    this.width = Math.max(960, size.width);
    this.height = Math.max(540, size.height);
    this.lastLayoutWidth = size.width;
    this.lastLayoutHeight = size.height;
  }

  private setupPhysics(): void {
    this.physics = PhysicsSystem2D.instance;
    this.physics.enable = true;
    this.physics.gravity = new Vec2(0, -GRAVITY);
    this.physics.maxSubSteps = 4;
    this.physics.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
  }

  private bindInput(): void {
    input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
    input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
    input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
    input.on(Input.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
  }

  private buildWorld(): void {
    const halfW = this.width / 2;
    const halfH = this.height / 2;
    this.background = this.createGraphicsNode('Starfield', 0, 0, this.width, this.height).getComponent(Graphics)!;
    this.drawBackground();
    this.aimGuide = this.createGraphicsNode('AimGuide', 0, 0, this.width, this.height).getComponent(Graphics)!;

    const floorY = -halfH + 145;
    this.createPhysicsBox('ArenaFloor', 0, floorY, this.width + 80, 30, 0x141b39, 0x6774ac, 0.82);
    this.createPhysicsBox('ArenaLeftWall', -halfW + 10, 20, 28, this.height + 160, 0x182044, 0x566a9a, 0.78);
    this.createPhysicsBox('ArenaRightWall', halfW - 10, 20, 28, this.height + 160, 0x182044, 0x566a9a, 0.78);
    this.createPhysicsBox('LeftPillar', -this.width * 0.20, 8, 76, 176, 0x29345f, 0x8297ce, 0.68);
    this.createPhysicsBox('RightPillar', this.width * 0.20, 8, 76, 176, 0x342c62, 0xb091dd, 0.68);
    this.createPhysicsBox('LowerBumper', 0, floorY + 150, 246, 22, 0x34416d, 0x9aaddb, 0.82);
    this.createPhysicsBox('UpperBumper', 0, 10, 132, 18, 0x3a326c, 0xc0a7f2, 0.86);

    this.bossNode = this.createBoss();
    const cannonY = -halfH + 222;
    this.leftCannon = this.createCannon('LeftCannon', -halfW + 124, cannonY, 0x83c7eb);
    this.rightCannon = this.createCannon('RightCannon', halfW - 124, cannonY, 0xc5a3f2);
  }

  private drawBackground(): void {
    const g = this.background;
    const halfW = this.width / 2;
    const halfH = this.height / 2;
    g.clear();
    g.fillColor = this.color(0x080d24);
    g.rect(-halfW, -halfH, this.width, this.height);
    g.fill();
    g.fillColor = this.color(0x211b50, 65);
    g.circle(0, 150, Math.min(this.width * 0.46, this.height * 0.74));
    g.fill();
    g.fillColor = this.color(0x503b82, 35);
    g.circle(0, 160, Math.min(this.width * 0.30, this.height * 0.48));
    g.fill();
    for (let i = 0; i < 112; i++) {
      const x = ((i * 173 + (i % 7) * 29) % this.width) - halfW;
      const y = ((i * 89 + (i % 11) * 17) % Math.max(100, this.height - 160)) - halfH + 80;
      const radius = i % 13 === 0 ? 2.5 : (i % 4 === 0 ? 1.7 : 1.05);
      g.fillColor = this.color(i % 5 === 0 ? 0xffe6bd : 0xc6c8ff, 150);
      g.circle(x, y, radius);
      g.fill();
    }
    g.fillColor = this.color(0x10182f);
    g.moveTo(-halfW, floorYFor(this.height) - 20);
    g.lineTo(-halfW, -halfH);
    g.lineTo(halfW, -halfH);
    g.lineTo(halfW, floorYFor(this.height) - 20);
    g.close();
    g.fill();
  }

  private buildHud(): void {
    this.hudGraphics = this.createGraphicsNode('HUD', 0, 0, this.width, this.height).getComponent(Graphics)!;
    this.titleLabel = this.createLabel('MARBLE QUEST', 28, 0xf0e5ff, 420, 44, 0, this.height / 2 - 48);
    this.bossLabel = this.createLabel('', 17, 0xffe3be, 440, 32, 0, this.height / 2 - 108);
    this.shotLabel = this.createLabel('发射 0 次', 14, 0xaedcf3, 180, 28, -this.width / 2 + 125, this.height / 2 - 48);
    this.resetLabel = this.createLabel('↻ 重置', 17, 0xffe3be, 130, 38, this.width / 2 - 92, this.height / 2 - 48);
    this.messageLabel = this.createLabel(this.message, 17, 0xf2edff, Math.min(1050, this.width - 80), 42, 0, -this.height / 2 + 119);
    this.cardLabels = [];
    this.cards = [];
    for (const element of ELEMENT_ORDER) {
      this.cardLabels.push(this.createLabel('', 15, 0xffffff, 170, 30, 0, 0));
      this.cards.push({ element, x: 0, y: 0, width: 0, height: 48 });
    }
    this.layoutHud();
  }

  private layoutHud(): void {
    if (!this.hudGraphics) return;
    const halfW = this.width / 2;
    const halfH = this.height / 2;
    const trayY = -halfH + 48;
    const gap = 12;
    const cardWidth = Math.min(178, (this.width - 90 - gap * 5) / 6);
    const total = cardWidth * 6 + gap * 5;
    const start = -total / 2 + cardWidth / 2;
    this.titleLabel.node.setPosition(0, halfH - 48, 0);
    this.bossLabel.node.setPosition(0, halfH - 108, 0);
    this.shotLabel.node.setPosition(-halfW + 125, halfH - 48, 0);
    this.resetLabel.node.setPosition(halfW - 92, halfH - 48, 0);
    this.messageLabel.node.setPosition(0, -halfH + 119, 0);
    this.messageLabel.getComponent(UITransform)!.setContentSize(Math.min(1050, this.width - 80), 42);
    for (let i = 0; i < this.cards.length; i++) {
      const card = this.cards[i]!;
      card.width = cardWidth;
      card.height = 48;
      card.x = start + i * (cardWidth + gap);
      card.y = trayY;
      this.cardLabels[i]!.node.setPosition(card.x, card.y, 0);
      this.cardLabels[i]!.getComponent(UITransform)!.setContentSize(cardWidth - 8, 34);
    }
    this.drawHudGraphics();
  }

  private drawHudGraphics(): void {
    if (!this.hudGraphics) return;
    const g = this.hudGraphics;
    const halfW = this.width / 2;
    const halfH = this.height / 2;
    g.clear();
    g.fillColor = this.color(0x101a36, 248);
    g.roundRect(-halfW + 18, -halfH + 20, this.width - 36, 86, 18);
    g.fill();
    for (const card of this.cards) {
      const selected = card.element === this.selected;
      g.fillColor = this.color(selected ? 0x46558b : 0x1a2948);
      g.roundRect(card.x - card.width / 2, card.y - card.height / 2, card.width, card.height, 12);
      g.fill();
      g.strokeColor = this.color(selected ? 0xe8d5ff : 0x54658e, selected ? 255 : 180);
      g.lineWidth = selected ? 2 : 1;
      g.roundRect(card.x - card.width / 2, card.y - card.height / 2, card.width, card.height, 12);
      g.stroke();
    }
    g.fillColor = this.color(0x12182f, 230);
    g.roundRect(-184, halfH - 148, 368, 12, 6);
    g.fill();
    g.fillColor = this.color(this.shieldTimer > 0 ? 0xffc68c : 0xa78be9);
    g.roundRect(-184, halfH - 148, 368 * Math.max(0, this.bossHp / 100), 12, 6);
    g.fill();
    g.fillColor = this.color(0x252344, 235);
    g.roundRect(halfW - 152, halfH - 70, 132, 42, 10);
    g.fill();
    g.strokeColor = this.color(0xd3b7ff, 180);
    g.lineWidth = 1;
    g.roundRect(halfW - 152, halfH - 70, 132, 42, 10);
    g.stroke();
    for (let i = 0; i < this.cardLabels.length; i++) {
      const card = this.cards[i]!;
      const spec = ELEMENTS[card.element];
      this.cardLabels[i]!.string = spec.symbol + '  ' + spec.name;
      this.cardLabels[i]!.color = this.color(card.element === this.selected ? 0xffffff : spec.light);
    }
    this.shotLabel.string = '发射 ' + this.shotsFired + ' 次';
    this.bossLabel.string = this.shieldTimer > 0
      ? '月核暴露 · ' + this.bossHp + ' / 100'
      : '月蚀护盾 · ' + this.bossHp + ' / 100 · 先制造元素碰撞';
  }

  private createBoss(): Node {
    const node = this.createGraphicsNode('MoonMothBoss', 0, this.height / 2 - 220, 280, 160);
    const g = node.getComponent(Graphics)!;
    g.fillColor = this.color(0x8068c7, 95);
    g.ellipse(-64, 0, 75, 43); g.fill();
    g.ellipse(64, 0, 75, 43); g.fill();
    g.strokeColor = this.color(0xe3c8ff); g.lineWidth = 3;
    g.ellipse(-64, 0, 75, 43); g.stroke();
    g.ellipse(64, 0, 75, 43); g.stroke();
    g.fillColor = this.color(0xc5a4ee); g.ellipse(0, 0, 24, 58); g.fill();
    g.fillColor = this.color(0xffe2ad); g.circle(0, 53, 11); g.fill();
    const body = node.addComponent(RigidBody2D);
    body.type = ERigidBody2DType.Static;
    body.gravityScale = 0;
    body.enabledContactListener = true;
    const collider = node.addComponent(CircleCollider2D);
    collider.radius = 64;
    collider.sensor = true;
    collider.apply();
    return node;
  }

  private createCannon(name: string, x: number, y: number, accent: number): Node {
    const node = this.createGraphicsNode(name, x, y, 144, 160);
    const g = node.getComponent(Graphics)!;
    g.fillColor = this.color(0x11152f); g.ellipse(0, -12, 62, 22); g.fill();
    g.fillColor = this.color(0x34436c); g.roundRect(-42, -18, 84, 43, 13); g.fill();
    g.fillColor = this.color(accent); g.roundRect(-24, 0, 48, 96, 14); g.fill();
    g.fillColor = this.color(0x15203e); g.roundRect(-15, 8, 30, 80, 9); g.fill();
    g.strokeColor = this.color(0xffe0ae); g.lineWidth = 4;
    g.roundRect(-27, 78, 54, 16, 7); g.stroke();
    g.fillColor = this.color(accent, 75); g.circle(0, 20, 52); g.fill();
    return node;
  }

  private createGraphicsNode(name: string, x: number, y: number, width = 180, height = 180): Node {
    const node = new Node(name);
    node.layer = UI_LAYER;
    node.addComponent(UITransform).setContentSize(width, height);
    node.setPosition(x, y, 0);
    node.addComponent(Graphics);
    this.node.addChild(node);
    return node;
  }

  private createLabel(text: string, fontSize: number, color: number, width: number, height: number, x: number, y: number): Label {
    const node = new Node('Label-' + text.slice(0, 12));
    node.layer = UI_LAYER;
    node.addComponent(UITransform).setContentSize(width, height);
    node.setPosition(x, y, 0);
    const label = node.addComponent(Label);
    label.string = text;
    label.fontSize = fontSize;
    label.lineHeight = fontSize + 8;
    label.color = this.color(color);
    label.horizontalAlign = Label.HorizontalAlign.CENTER;
    label.verticalAlign = Label.VerticalAlign.CENTER;
    label.fontFamily = 'Arial';
    this.node.addChild(node);
    return label;
  }

  private createPhysicsBox(name: string, x: number, y: number, width: number, height: number, fill: number, edge: number, restitution: number): Node {
    const node = this.createGraphicsNode(name, x, y, width, height);
    const g = node.getComponent(Graphics)!;
    g.fillColor = this.color(fill);
    g.roundRect(-width / 2, -height / 2, width, height, 10); g.fill();
    g.strokeColor = this.color(edge); g.lineWidth = 3;
    g.roundRect(-width / 2, -height / 2, width, height, 10); g.stroke();
    const body = node.addComponent(RigidBody2D);
    body.type = ERigidBody2DType.Static;
    body.gravityScale = 0;
    const collider = node.addComponent(BoxCollider2D);
    collider.size = new Size(width, height);
    collider.restitution = restitution;
    collider.friction = 0.12;
    collider.apply();
    return node;
  }

  private spawnOrb(origin: Vec2, direction: Vec2): void {
    if (this.bossHp <= 0) {
      this.setMessage('试炼已完成。点击重置再来一次。');
      return;
    }
    const spec = ELEMENTS[this.selected];
    const spawn = new Vec2(origin.x + direction.x * (spec.radius + 46), origin.y + direction.y * (spec.radius + 46));
    const node = this.createGraphicsNode('MarbleOrb', spawn.x, spawn.y, (spec.radius + 20) * 2, (spec.radius + 20) * 2);
    this.drawOrb(node.getComponent(Graphics)!, spec.radius, this.selected, false);
    const body = node.addComponent(RigidBody2D);
    body.type = ERigidBody2DType.Dynamic;
    body.gravityScale = 1;
    body.fixedRotation = true;
    body.bullet = true;
    body.enabledContactListener = true;
    const collider = node.addComponent(CircleCollider2D);
    collider.radius = spec.radius;
    collider.density = spec.mass;
    collider.restitution = 0.78;
    collider.friction = 0.10;
    collider.apply();
    const velocity = computeLaunchVelocity(direction, spec.speed);
    body.linearVelocity = new Vec2(velocity.x, velocity.y);
    this.orbs.push({
      node, body, collider, element: this.selected, radius: spec.radius,
      age: 0, frozen: false, savedVelocity: new Vec2(0, 0), hitBoss: false,
    });
    this.shotsFired++;
    this.drawHudGraphics();
    this.setMessage(spec.name + ' 已发射。点按飞行中的弹珠可定身。');
  }

  private drawOrb(g: Graphics, radius: number, element: ElementId, frozen: boolean): void {
    const spec = ELEMENTS[element];
    g.clear();
    g.fillColor = this.color(spec.color, 34); g.circle(0, 0, radius + 19); g.fill();
    g.strokeColor = this.color(frozen ? 0xffffff : spec.light, 220);
    g.lineWidth = frozen ? 4 : 2; g.circle(0, 0, radius + 10); g.stroke();
    g.fillColor = this.color(spec.dark); g.circle(0, 0, radius); g.fill();
    g.fillColor = this.color(spec.color); g.circle(0, 0, radius - 3); g.fill();
    g.fillColor = this.color(0xffffff, 150); g.ellipse(-radius * 0.24, radius * 0.36, radius * 0.30, radius * 0.13); g.fill();
    g.strokeColor = this.color(spec.light); g.lineWidth = 2; g.circle(0, 0, radius - 2); g.stroke();

    if (element === 'fire') {
      g.fillColor = this.color(0xffedc7);
      g.moveTo(0, -radius * 0.56); g.lineTo(radius * 0.35, 0);
      g.lineTo(0, radius * 0.58); g.lineTo(-radius * 0.35, 0); g.close(); g.fill();
    } else if (element === 'ice') {
      g.strokeColor = this.color(0xffffff); g.lineWidth = 2;
      g.moveTo(-radius * 0.56, 0); g.lineTo(radius * 0.56, 0);
      g.moveTo(0, -radius * 0.56); g.lineTo(0, radius * 0.56); g.stroke();
    } else if (element === 'heavy') {
      g.strokeColor = this.color(0xffffff); g.lineWidth = 3;
      g.circle(0, 0, radius * 0.47); g.stroke();
    } else if (element === 'lightning') {
      g.fillColor = this.color(0xffffff);
      g.moveTo(radius * 0.16, -radius * 0.66); g.lineTo(-radius * 0.40, radius * 0.04);
      g.lineTo(-radius * 0.02, radius * 0.04); g.lineTo(-radius * 0.18, radius * 0.68);
      g.lineTo(radius * 0.48, -radius * 0.12); g.lineTo(radius * 0.10, -radius * 0.12);
      g.close(); g.fill();
    } else if (element === 'split') {
      g.fillColor = this.color(0xffffff);
      g.circle(0, 0, radius * 0.22); g.fill();
      g.circle(-radius * 0.42, 0, radius * 0.18); g.fill();
      g.circle(radius * 0.42, 0, radius * 0.18); g.fill();
    } else {
      g.fillColor = this.color(0x19112f); g.circle(0, 0, radius * 0.47); g.fill();
      g.strokeColor = this.color(0xffffff); g.lineWidth = 2;
      g.circle(radius * 0.18, -radius * 0.08, radius * 0.28); g.stroke();
    }
  }

  private onBeginContact(self: any, other: any): void {
    const selfNode = self && self.node ? self.node as Node : null;
    const otherNode = other && other.node ? other.node as Node : null;
    if (!selfNode || !otherNode) return;
    const a = this.orbs.find((item) => item.node === selfNode);
    const b = this.orbs.find((item) => item.node === otherNode);
    if (a && b && a.frozen !== b.frozen) {
      this.resolveFusion(a.frozen ? b : a, a.frozen ? a : b);
      return;
    }
    if (a && otherNode.name === 'MoonMothBoss') this.hitBoss(a);
    else if (b && selfNode.name === 'MoonMothBoss') this.hitBoss(b);
  }

  private resolveFusion(flying: OrbRecord, anchor: OrbRecord): void {
    if (anchor.node === flying.node || flying.frozen) return;
    this.fusionCount++;
    this.shieldTimer = 3.6;
    this.bossHp = Math.max(0, this.bossHp - 8);
    this.removeOrb(anchor);
    this.updateBossHud();
    this.setMessage(ELEMENTS[flying.element].name + ' 与定身弹珠发生元素共鸣！蝶后护盾开启，趁现在攻击月核。');
  }

  private hitBoss(orb: OrbRecord): void {
    if (orb.hitBoss) return;
    orb.hitBoss = true;
    if (this.shieldTimer <= 0) {
      this.setMessage('护盾吸收了攻击。先让两颗弹珠发生碰撞，打破护盾。');
      return;
    }
    const damage = ELEMENTS[orb.element].damage;
    this.bossHp = Math.max(0, this.bossHp - damage);
    this.updateBossHud();
    this.setMessage(this.bossHp <= 0
      ? '月蚀蝶后被净化！星界神殿的封印解除了。点击重置再次挑战。'
      : '命中月核！造成 ' + damage + ' 点伤害。');
  }

  private toggleFreeze(orb: OrbRecord): void {
    if (!orb.frozen) {
      if (this.orbs.filter((item) => item.frozen).length >= 2) {
        this.setMessage('最多同时定身两颗弹珠。先点一颗定身弹珠释放它。');
        return;
      }
      orb.savedVelocity = new Vec2(orb.body.linearVelocity.x, orb.body.linearVelocity.y);
      orb.body.type = ERigidBody2DType.Kinematic;
      orb.body.linearVelocity = new Vec2(0, 0);
      orb.frozen = true;
      this.drawOrb(orb.node.getComponent(Graphics)!, orb.radius, orb.element, true);
      this.setMessage(ELEMENTS[orb.element].name + ' 已定身。再发射一颗弹珠撞击它，触发元素共鸣。');
    } else {
      orb.body.type = ERigidBody2DType.Dynamic;
      orb.body.linearVelocity = new Vec2(orb.savedVelocity.x, orb.savedVelocity.y);
      orb.frozen = false;
      this.drawOrb(orb.node.getComponent(Graphics)!, orb.radius, orb.element, false);
      this.setMessage(ELEMENTS[orb.element].name + ' 已解除定身。');
    }
  }

  private removeOrb(orb: OrbRecord): void {
    const index = this.orbs.indexOf(orb);
    if (index >= 0) this.orbs.splice(index, 1);
    if (orb.node && orb.node.isValid) orb.node.destroy();
  }

  private resetTrial(): void {
    for (const orb of this.orbs.slice()) this.removeOrb(orb);
    this.bossHp = 100;
    this.shieldTimer = 0;
    this.shotsFired = 0;
    this.fusionCount = 0;
    this.aimGuide.clear();
    this.updateBossHud();
    this.drawHudGraphics();
    this.setMessage('试炼已重置。点按炮台发射，拖动炮台瞄准。');
  }

  private onTouchStart(event: EventTouch): void {
    if (this.activeTouchId !== -1) return;
    const point = this.toLocalPoint(event);
    const halfW = this.width / 2;
    const halfH = this.height / 2;
    this.activeTouchId = event.getID();

    if (point.x > halfW - 165 && point.y > halfH - 95) {
      this.resetTrial();
      this.gestureMode = 'ui';
      return;
    }
    const trayY = -halfH + 48;
    if (Math.abs(point.y - trayY) <= 42) {
      const card = this.cards.find((item) =>
        Math.abs(point.x - item.x) <= item.width / 2 && Math.abs(point.y - item.y) <= item.height / 2,
      );
      if (card) {
        this.selected = card.element;
        this.drawHudGraphics();
        this.setMessage(ELEMENTS[this.selected].name + ' 已装填。点按任意炮台发射。');
      }
      this.gestureMode = 'ui';
      return;
    }
    const orb = this.findOrbAt(point);
    if (orb) {
      this.toggleFreeze(orb);
      this.gestureMode = 'ui';
      return;
    }
    this.aimSide = getLauncherSide(point.x);
    this.aimOrigin = this.getLauncherOrigin(this.aimSide);
    this.aimPoint = point;
    this.gestureMode = 'aim';
    this.updateAimPreview();
  }

  private onTouchMove(event: EventTouch): void {
    if (event.getID() !== this.activeTouchId || this.gestureMode !== 'aim') return;
    this.aimPoint = this.toLocalPoint(event);
    this.updateAimPreview();
  }

  private onTouchEnd(event: EventTouch): void {
    if (event.getID() !== this.activeTouchId) return;
    if (this.gestureMode === 'aim') {
      this.aimPoint = this.toLocalPoint(event);
      this.aimGuide.clear();
      const direction = computeShotDirection(this.aimOrigin, this.aimPoint, new Vec2(0, this.height / 2 - 220));
      this.spawnOrb(this.aimOrigin, direction);
      this.updateCannonAngle(this.aimSide, direction);
    }
    this.activeTouchId = -1;
    this.gestureMode = null;
  }

  private onTouchCancel(event: EventTouch): void {
    if (event.getID() !== this.activeTouchId) return;
    this.activeTouchId = -1;
    this.gestureMode = null;
    this.aimGuide.clear();
  }

  private toLocalPoint(event: EventTouch): Vec2 {
    const ui = event.getUILocation();
    const local = this.canvasTransform.convertToNodeSpaceAR(new Vec3(ui.x, ui.y, 0));
    return new Vec2(local.x, local.y);
  }

  private findOrbAt(point: Vec2): OrbRecord | null {
    for (let i = this.orbs.length - 1; i >= 0; i--) {
      const orb = this.orbs[i]!;
      const p = orb.node.position;
      if (Math.hypot(p.x - point.x, p.y - point.y) <= orb.radius + 30) return orb;
    }
    return null;
  }

  private getLauncherOrigin(side: Side): Vec2 {
    const x = side === 'left' ? -this.width / 2 + 124 : this.width / 2 - 124;
    return new Vec2(x, -this.height / 2 + 222);
  }

  private updateAimPreview(): void {
    const direction = computeShotDirection(this.aimOrigin, this.aimPoint, new Vec2(0, this.height / 2 - 220));
    this.updateCannonAngle(this.aimSide, direction);
    const spec = ELEMENTS[this.selected];
    const g = this.aimGuide;
    g.clear();
    g.strokeColor = this.color(spec.light, 190);
    g.lineWidth = 3;
    const start = new Vec2(this.aimOrigin.x + direction.x * (spec.radius + 46), this.aimOrigin.y + direction.y * (spec.radius + 46));
    g.moveTo(start.x, start.y);
    for (let i = 1; i <= 20; i++) {
      const t = i * 0.055;
      g.lineTo(start.x + direction.x * spec.speed * t, start.y + direction.y * spec.speed * t - 0.5 * GRAVITY * t * t);
    }
    g.stroke();
  }

  private updateCannonAngle(side: Side, direction: Vec2): void {
    const cannon = side === 'left' ? this.leftCannon : this.rightCannon;
    cannon.angle = Math.atan2(direction.y, direction.x) * 180 / Math.PI - 90;
  }

  private updateBossHud(): void {
    if (this.bossLabel && this.hudGraphics) this.drawHudGraphics();
  }

  private setMessage(text: string): void {
    this.message = text;
    if (this.messageLabel) this.messageLabel.string = text;
  }

  private color(hex: number, alpha = 255): Color {
    return new Color((hex >> 16) & 255, (hex >> 8) & 255, hex & 255, alpha);
  }
}

function floorYFor(height: number): number {
  return -height / 2 + 145;
}
