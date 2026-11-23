var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
(function () { var e = typeof globalThis < "u" ? globalThis : typeof GameGlobal < "u" ? GameGlobal : null; if (e) {
    if (!e.navigator || typeof e.navigator.userAgent != "string") {
        var t = { userAgent: "wechatgame", platform: "wechatgame", maxTouchPoints: 1, gpu: null };
        try {
            Object.defineProperty(e, "navigator", { configurable: !0, enumerable: !0, writable: !0, value: t });
        }
        catch (n) {
            e.navigator = t;
        }
    }
    var n = typeof GameGlobal < "u" ? GameGlobal : e, r = typeof e.requestAnimationFrame == "function" ? e.requestAnimationFrame : typeof n.requestAnimationFrame == "function" ? n.requestAnimationFrame : typeof wx < "u" && typeof wx.requestAnimationFrame == "function" ? wx.requestAnimationFrame : null, i = typeof e.cancelAnimationFrame == "function" ? e.cancelAnimationFrame : typeof n.cancelAnimationFrame == "function" ? n.cancelAnimationFrame : typeof wx < "u" && typeof wx.cancelAnimationFrame == "function" ? wx.cancelAnimationFrame : null;
    typeof e.requestAnimationFrame != "function" && (e.requestAnimationFrame = r ? function (e) { return r.call(n, e); } : function (t) { var n = e.performance && typeof e.performance.now == "function" ? e.performance.now() : Date.now(); return e.setTimeout(function () { var r = e.performance && typeof e.performance.now == "function" ? e.performance.now() : Date.now(); t(r > n ? r : n + 16); }, 16); }), typeof e.cancelAnimationFrame != "function" && (e.cancelAnimationFrame = i ? function (e) { return i.call(n, e); } : function (t) { return e.clearTimeout(t); }), n !== e && (typeof n.requestAnimationFrame != "function" && (n.requestAnimationFrame = e.requestAnimationFrame), typeof n.cancelAnimationFrame != "function" && (n.cancelAnimationFrame = e.cancelAnimationFrame));
} })(), (function () { var e = typeof wx < "u"; function t(e, t) { } typeof GameGlobal < "u" && (GameGlobal.__saplingLog = t), e && wx.onError && wx.onError(function (e) { e && e.message, e && e.stack; }); })();
var e = require("./chunks/rolldown-runtime-8PkXcCTM.js"), t = require("./chunks/sapling-engine-CRShniNS.js"), n = require("./chunks/nape-physics-tjC3J-kx.js"), r = require("./chunks/sapling-engine-z5rgo-_C.js"), i = require("./chunks/sapling-engine-BAPCBAVM.js"), a = require("./chunks/sapling-engine-DEUdDAgy.js"), o = require("./chunks/sapling-engine-CDClN5Qk.js"), s = require("./chunks/nape-physics-4EnlLEHY.js"), c = require("./chunks/vendor-CBtsVi5t.js");
function l() { return (l = e.n((function () { GameGlobal.__saplingAssets = JSON.parse("{\"main\":[],\"subpackage\":null}"); })))(); }
var u, d, f;
function p() { return (p = e.n((function () { if (u = "2026-11-23-R11", d = function (e, t) { var n = ""; try {
    n = typeof t == "string" ? t : JSON.stringify(t);
}
catch (e) {
    n = String(t);
} console.error("[MarbleQuest Pixi][" + u + "][" + e + "] " + n), typeof GameGlobal < "u" && (GameGlobal.__marbleQuestLastError = n); }, f = typeof globalThis < "u" ? globalThis : GameGlobal, !f.navigator || typeof f.navigator.userAgent != "string") {
    var e_1 = { userAgent: "wechatgame", platform: "wechatgame", maxTouchPoints: 1, gpu: null };
    try {
        Object.defineProperty(f, "navigator", { configurable: !0, enumerable: !0, writable: !0, value: e_1 });
    }
    catch (t) {
        f.navigator = e_1;
    }
} console.log("[MarbleQuest Pixi][" + u + "] BOOT: main bundle entered; navigator=" + (f.navigator && typeof f.navigator.userAgent == "string" ? "ready" : "missing")), typeof wx < "u" && (typeof wx.onError == "function" && wx.onError(function (e) { return d("wx.onError", e); }), typeof wx.onUnhandledRejection == "function" && wx.onUnhandledRejection(function (e) { return d("unhandled-rejection", e); })); })))(); }
function m(e, t) { if (t.has(e))
    throw TypeError("Cannot initialize the same private elements twice on an object"); }
function h(e, t) { m(e, t), t.add(e); }
function g() { return (g = e.n((function () { })))(); }
function _(e, t, n) { m(e, t), t.set(e, n); }
function v() { return (v = e.n((function () { })))(); }
function y(e, t, n) { if (typeof e == "function" ? e === t : e.has(t))
    return arguments.length < 3 ? t : n; throw TypeError("Private element is not present on this object"); }
function b(e, t) { return e.get(y(e, t)); }
function x() { return (x = e.n((function () { })))(); }
function S(e) { var t, n, r; return (t = (n = e == null ? void 0 : e.castBody) == null ? e == null || (r = e.castShape) == null ? void 0 : r.body : n) == null ? null : t; }
var C, w, T, E, ee;
function te() { return (te = e.n((function () { s.i(), c.o(), g(), n.Sr(), v(), x(), C = new WeakMap, w = new WeakMap, T = new WeakMap, E = new WeakSet, ee = (function () {
    function ee() {
        var _this = this;
        h(this, E), n.xr(this, "space", new n.ir(new n.J(0, 560))), n.xr(this, "stepper", new c.a({ hz: 60, maxStepsPerFrame: 4, velocityIterations: 8, positionIterations: 8 })), n.xr(this, "binding", new c.s({ stepper: this.stepper })), n.xr(this, "projectileType", new n.rn), n.xr(this, "anchorType", new n.rn), n.xr(this, "bossType", new n.rn), _(this, C, []), _(this, w, new n.qt(.68, .12, .18, 1)), _(this, T, new n.qt(.72, .14, .2, 1)), this.space.listeners.add(new s.n(s.r.BEGIN, s.t.COLLISION, this.projectileType, this.anchorType, function (e) { var t = y(E, _this, S).call(_this, e.int1), n = y(E, _this, S).call(_this, e.int2), r = (t == null ? void 0 : t.userData.kind) === "orb" ? t : (n == null ? void 0 : n.userData.kind) === "orb" ? n : null, i = (t == null ? void 0 : t.userData.kind) === "anchor" ? t : (n == null ? void 0 : n.userData.kind) === "anchor" ? n : null; r && i && r !== i && b(C, _this).push({ kind: "orb-anchor", orb: r, anchor: i }); })), this.space.listeners.add(new s.n(s.r.BEGIN, s.t.COLLISION, this.projectileType, this.bossType, function (e) { var t = y(E, _this, S).call(_this, e.int1), n = y(E, _this, S).call(_this, e.int2), r = (t == null ? void 0 : t.userData.kind) === "orb" ? t : (n == null ? void 0 : n.userData.kind) === "orb" ? n : null, i = (t == null ? void 0 : t.userData.kind) === "boss" ? t : (n == null ? void 0 : n.userData.kind) === "boss" ? n : null; r && i && r !== i && b(C, _this).push({ kind: "orb-boss", orb: r, boss: i }); }));
    }
    ee.prototype.addStaticBox = function (e, t, r, i) { var a = new n.i(n.pn.STATIC, new n.J(e, t)); return a.shapes.add(new n.it(n.it.box(r, i), b(T, this).copy())), a.space = this.space, a; };
    ee.prototype.addStaticCircle = function (e, t, r) { var i = new n.i(n.pn.STATIC, new n.J(e, t)); return i.shapes.add(new n.y(r, void 0, b(T, this).copy())), i.space = this.space, i; };
    ee.prototype.addBossBody = function (e, t, n) { var r = this.addStaticCircle(e, t, n); return r.userData.kind = "boss", r.cbTypes.add(this.bossType), r; };
    ee.prototype.launchOrb = function (e, t, r, i, a, o) { var s = new n.i(n.pn.DYNAMIC, new n.J(e, t)); return s.shapes.add(new n.y(r, void 0, b(w, this).copy())), s.userData.kind = "orb", s.mass = i, s.isBullet = !0, s.cbTypes.add(this.projectileType), s.space = this.space, s.velocity.setxy(a, o), s; };
    ee.prototype.bind = function (e, t) { this.binding.bind(e, t); };
    ee.prototype.unbind = function (e) { this.binding.unbind(e); };
    ee.prototype.freeze = function (e) { var t = { x: e.velocity.x, y: e.velocity.y }; return e.userData.kind = "anchor", e.cbTypes.remove(this.projectileType), e.cbTypes.add(this.anchorType), e.type = n.pn.KINEMATIC, e.velocity.setxy(0, 0), e.angularVel = 0, t; };
    ee.prototype.release = function (e, t, r) { e.userData.kind = "orb", e.cbTypes.remove(this.anchorType), e.cbTypes.add(this.projectileType), e.type = n.pn.DYNAMIC, e.velocity.setxy(t, r); };
    ee.prototype.setVelocity = function (e, t, n) { e.velocity.setxy(t, n); };
    ee.prototype.removeBody = function (e) { this.binding.unbind(e), e.space === this.space && (e.space = null); };
    ee.prototype.step = function (e) { var t = Math.max(0, Math.min(e, 1 / 20)); if (t > 0) {
        var e_2 = this.stepper.step(this.space, t);
        this.binding.update(e_2);
    } return b(C, this).splice(0, b(C, this).length); };
    ee.prototype.dispose = function () { this.binding.dispose(), this.space.clear(), b(C, this).length = 0; };
    return ee;
}()); })))(); }
function D(e, t, n, r, i) {
    if (r === void 0) { r = 1; }
    e.poly(t).fill({ color: n, alpha: r }), i !== void 0 && e.poly(t).stroke({ color: i, width: 2, alpha: Math.min(1, r + .15) });
}
function ne(e, t, n, r) { var i = Math.max(5, n * .44); if (t === "fire")
    e.moveTo(0, -i * 1.25).bezierCurveTo(i * 1.05, -i * .25, i * .42, i * .2, 0, i).bezierCurveTo(-i * .85, i * .22, -i * .72, -i * .42, 0, -i * 1.25).fill({ color: r, alpha: .93 }), e.circle(0, i * .25, i * .24).fill({ color: 16777215, alpha: .75 });
else if (t === "ice")
    e.moveTo(0, -i * 1.25).lineTo(i * .42, 0).lineTo(0, i * 1.25).lineTo(-i * .42, 0).closePath().fill({ color: r, alpha: .9 }), e.moveTo(-i, 0).lineTo(i, 0).stroke({ color: 16777215, width: 2, alpha: .7 }), e.moveTo(0, -i).lineTo(0, i).stroke({ color: 16777215, width: 2, alpha: .7 });
else if (t === "heavy")
    e.circle(0, 0, i * .9).stroke({ color: r, width: 3, alpha: .88 }), e.circle(0, 0, i * .48).fill({ color: r, alpha: .9 }), e.circle(0, 0, i * .18).fill({ color: 16777215, alpha: .9 });
else if (t === "lightning")
    e.moveTo(i * .18, -i * 1.1).lineTo(-i * .5, i * .05).lineTo(-i * .04, i * .05).lineTo(-i * .22, i * 1.1).lineTo(i * .56, -i * .16).lineTo(i * .1, -i * .16).closePath().fill({ color: r, alpha: .96 });
else if (t === "split") {
    for (var t_1 = 0; t_1 < 3; t_1++) {
        var n_1 = -Math.PI / 2 + t_1 * Math.PI * 2 / 3;
        e.circle(Math.cos(n_1) * i * .62, Math.sin(n_1) * i * .62, i * .32).fill({ color: r, alpha: .9 });
    }
    e.circle(0, 0, i * .24).fill({ color: 16777215, alpha: .8 });
}
else
    e.circle(0, 0, i * .9).fill({ color: 1379630, alpha: .95 }), e.circle(i * .18, -i * .12, i * .54).stroke({ color: r, width: 3, alpha: .95 }), e.circle(-i * .28, i * .35, i * .12).fill({ color: 16777215, alpha: .9 }); }
function re(e, t) { var n = t; e.moveTo(0, -24).bezierCurveTo(n * 38, -106, n * 128, -112, n * 130, -38).bezierCurveTo(n * 132, 14, n * 75, 54, n * 26, 34).bezierCurveTo(n * 8, 25, n * 2, 8, 0, -24).fill({ color: 9532624, alpha: .36 }), e.moveTo(0, -24).bezierCurveTo(n * 38, -106, n * 128, -112, n * 130, -38).bezierCurveTo(n * 132, 14, n * 75, 54, n * 26, 34).bezierCurveTo(n * 8, 25, n * 2, 8, 0, -24).stroke({ color: 15124991, width: 3, alpha: .88 }), e.moveTo(n * 8, -22).bezierCurveTo(n * 36, -60, n * 89, -80, n * 112, -40).bezierCurveTo(n * 94, -12, n * 70, 16, n * 30, 25).stroke({ color: 10283263, width: 2, alpha: .84 }), e.moveTo(n * 12, -12).bezierCurveTo(n * 52, -22, n * 74, 9, n * 65, 32).stroke({ color: 16767913, width: 2, alpha: .72 }), e.circle(n * 78, -40, 17).stroke({ color: 13879551, width: 3, alpha: .7 }), e.circle(n * 78, -40, 8).fill({ color: 13104127, alpha: .62 }), e.circle(n * 47, 20, 5).fill({ color: 16768174, alpha: .78 }); }
var O, k, ie, A, ae, j, oe, M, se, N, ce, P, le, F, ue, I, de, L, fe, R, pe;
function z() { return (z = e.n((function () { o.t(), t.l(), t.t(), n.Sr(), n.br(), O = { fire: { name: "\u70C8\u7130\u6838\u5FC3", color: 16739141, light: 16765595, dark: 7809864, radius: 19, mass: .72, speed: 820, damage: 17 }, ice: { name: "\u6781\u5BD2\u6676\u6838", color: 6873087, light: 14154751, dark: 2383258, radius: 17, mass: .58, speed: 900, damage: 15 }, heavy: { name: "\u9668\u661F\u91CD\u6838", color: 16170851, light: 16773046, dark: 7884846, radius: 25, mass: 1.65, speed: 650, damage: 30 }, lightning: { name: "\u96F7\u66B4\u4E4B\u773C", color: 11701247, light: 15785727, dark: 4469133, radius: 15, mass: .45, speed: 1040, damage: 13 }, split: { name: "\u88C2\u53D8\u4E4B\u79CD", color: 7398060, light: 13959147, dark: 2583656, radius: 18, mass: .62, speed: 780, damage: 12 }, void: { name: "\u865A\u7A7A\u5947\u70B9", color: 12027647, light: 15785471, dark: 2889551, radius: 22, mass: 1.05, speed: 700, damage: 18 } }, k = (function (_super) {
    __extends(k, _super);
    function k() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return k;
}(r.g)), ie = (function () {
    function ie() {
        n.xr(this, "display", void 0);
        var e = new a.t;
        this.display = e, e.rect(-100, -80, 1640, 900).fill({ color: 527652 }), e.ellipse(720, 260, 650, 420).fill({ color: 2169680, alpha: .4 }), e.ellipse(720, 330, 420, 290).fill({ color: 3745388, alpha: .2 });
        for (var t_2 = 0; t_2 < 6; t_2++) {
            var n_2 = 100 + t_2 * 34;
            e.moveTo(-40, n_2 + 28).bezierCurveTo(260, n_2 - 64, 420, n_2 + 90, 720, n_2 + 8).bezierCurveTo(1020, n_2 - 78, 1190, n_2 + 78, 1490, n_2 - 12).stroke({ color: t_2 % 2 ? 5082568 : 9333193, width: 17 - t_2 * 1.6, alpha: .035 });
        }
        e.circle(720, 224, 116).fill({ color: 9337020, alpha: .075 }), e.circle(720, 224, 94).fill({ color: 15194367, alpha: .16 }), e.circle(720, 224, 75).fill({ color: 16771787, alpha: .88 }), e.circle(748, 196, 76).fill({ color: 1512501, alpha: .98 }), e.circle(720, 224, 105).stroke({ color: 13084159, width: 2, alpha: .42 }), D(e, [35, 442, 145, 400, 246, 420, 312, 475, 272, 512, 102, 509], 1317174, .96, 7038117), D(e, [1150, 463, 1238, 398, 1358, 415, 1414, 468, 1370, 516, 1200, 520], 1317174, .96, 7038117), D(e, [430, 518, 476, 478, 517, 514, 558, 458, 596, 504, 635, 444, 676, 502, 720, 451, 762, 502, 804, 448, 845, 505, 884, 460, 924, 512, 968, 466, 1012, 520], 1120047, .95, 4671349), e.rect(490, 500, 460, 122).fill({ color: 988977, alpha: .96 });
        for (var t_3 = 0; t_3 < 7; t_3++) {
            var n_3 = 520 + t_3 * 65;
            e.roundRect(n_3, 504, 25, 114, 8).fill({ color: 2699859, alpha: .8 }), e.roundRect(n_3 + 5, 508, 4, 105, 2).fill({ color: 8499658, alpha: .22 }), e.circle(n_3 + 12, 514, 3).fill({ color: 10214386, alpha: .8 });
        }
        e.rect(468, 492, 504, 17).fill({ color: 4932220 }), e.rect(468, 492, 504, 3).fill({ color: 13874943, alpha: .72 });
        for (var t_4 = 0; t_4 < 10; t_4++) {
            var n_4 = 185 + t_4 * 119, r_1 = 34 + t_4 * 37 % 70;
            D(e, [n_4 - 12, 574, n_4, 574 - r_1, n_4 + 13, 574], t_4 % 2 ? 3440543 : 7755431, .7, t_4 % 2 ? 10349311 : 13940991);
        }
        D(e, [-80, 636, 120, 608, 342, 628, 546, 604, 720, 620, 930, 602, 1138, 625, 1364, 606, 1510, 640, 1510, 850, -80, 850], 1054767, 1, 5524352), e.rect(-60, 638, 1560, 175).fill({ color: 461854, alpha: .75 }), e.moveTo(-20, 640).lineTo(1460, 640).stroke({ color: 8639981, width: 3, alpha: .5 });
        for (var t_5 = 0; t_5 < 116; t_5++) {
            var n_5 = (t_5 * 173 + t_5 % 7 * 29) % 1440, r_2 = (t_5 * 89 + t_5 % 11 * 17) % 575, i_1 = t_5 % 13 == 0 ? 2.7 : t_5 % 4 == 0 ? 1.8 : 1.1;
            e.circle(n_5, r_2, i_1 + 3).fill({ color: 9228287, alpha: .035 }), e.circle(n_5, r_2, i_1).fill({ color: t_5 % 5 == 0 ? 16770749 : 13027583, alpha: .35 + t_5 % 3 * .12 });
        }
        for (var _i = 0, _a = [26, 1414]; _i < _a.length; _i++) {
            var t_6 = _a[_i];
            e.roundRect(t_6 - 18, 276, 36, 360, 8).fill({ color: 1712451, alpha: .92 }), e.roundRect(t_6 - 22, 268, 44, 20, 6).fill({ color: 5065857 }), e.roundRect(t_6 - 3, 292, 6, 322, 3).fill({ color: 8042965, alpha: .26 }), e.circle(t_6, 281, 6).fill({ color: 15781009, alpha: .85 });
        }
    }
    ie.prototype.sync = function (e, t, n) { };
    ie.prototype.destroy = function () { this.display.destroy(); };
    return ie;
}()), t.a(k, function () { return new ie; }), A = (function (_super) {
    __extends(A, _super);
    function A(e, t, r) {
        if (r === void 0) { r = !1; }
        var _this = this;
        _this = _super.call(this, {}) || this, n.xr(_this, "element", void 0), n.xr(_this, "radius", void 0), n.xr(_this, "frozen", void 0), n.xr(_this, "phase", 0), _this.element = e, _this.radius = t, _this.frozen = r;
        return _this;
    }
    A.prototype.process = function (e) { this.phase += e * (this.frozen ? 1.35 : 2.4); };
    return A;
}(r.g)), ae = (function () {
    function ae(e) {
        n.xr(this, "display", void 0), n.xr(this, "aura", void 0), n.xr(this, "orbit", void 0), n.xr(this, "core", void 0);
        var t = O[e.element], r = e.radius, o = new i.m;
        this.display = o, this.aura = new a.t, this.orbit = new a.t, this.core = new a.t, o.addChild(this.aura, this.orbit, this.core), this.aura.circle(0, 0, r + 20).fill({ color: t.color, alpha: .045 }), this.aura.circle(0, 0, r + 12).stroke({ color: t.color, width: 5, alpha: .16 }), this.aura.circle(0, 0, r + 7).stroke({ color: t.light, width: 1.5, alpha: .38 }), this.orbit.circle(0, 0, r + 4).stroke({ color: t.light, width: 1.3, alpha: .52 }), this.orbit.ellipse(0, 0, r + 8, Math.max(5, r * .34)).stroke({ color: t.color, width: 2.2, alpha: .86 }), this.orbit.circle(r + 8, 0, 3.4).fill({ color: t.light, alpha: .95 }), this.orbit.circle(-r - 8, 0, 2.2).fill({ color: t.color, alpha: .85 }), this.core.circle(0, 0, r).fill({ color: t.dark }), this.core.circle(0, 0, r - 3).fill({ color: t.color, alpha: .98 }), this.core.circle(-r * .17, -r * .18, r * .61).fill({ color: t.light, alpha: .24 }), this.core.ellipse(-r * .28, -r * .43, r * .33, r * .15).fill({ color: 16777215, alpha: .45 }), this.core.circle(0, 0, r - 2).stroke({ color: t.light, width: 1.6, alpha: .76 }), ne(this.core, e.element, r, t.light), e.frozen && (this.core.circle(0, 0, r + 9).stroke({ color: 16777215, width: 2, alpha: .5 }), this.core.circle(0, 0, r + 15).stroke({ color: 10414847, width: 1.2, alpha: .48 }));
    }
    ae.prototype.sync = function (e) { this.orbit.rotation = e.phase, this.aura.alpha = .72 + Math.sin(e.phase * 1.6) * .14, this.core.scale.set(1 + Math.sin(e.phase * 1.2) * .025); };
    ae.prototype.destroy = function () { this.display.destroy({ children: !0 }); };
    return ae;
}()), t.a(A, function (e) { return new ae(e); }), j = (function (_super) {
    __extends(j, _super);
    function j() {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        var _this = this;
        _this = _super.apply(this, e) || this, n.xr(_this, "aimAngle", -.8), n.xr(_this, "recoil", 0);
        return _this;
    }
    j.prototype.process = function (e) { this.recoil = Math.max(0, this.recoil - e * 4); };
    return j;
}(r.g)), oe = (function () {
    function oe() {
        n.xr(this, "display", void 0), n.xr(this, "barrel", void 0), n.xr(this, "glow", void 0);
        var e = new i.m, t = new a.t;
        this.glow = new a.t, this.barrel = new a.t, t.ellipse(0, 28, 78, 23).fill({ color: 1051949, alpha: .75 }), t.ellipse(0, 24, 65, 19).fill({ color: 2700894 }), t.ellipse(0, 18, 54, 15).stroke({ color: 9083595, width: 3, alpha: .7 }), t.roundRect(-43, 6, 86, 35, 12).fill({ color: 2634841 }), t.roundRect(-39, 9, 78, 7, 4).fill({ color: 14796171, alpha: .9 }), t.circle(-30, 28, 4).fill({ color: 7397375 }), t.circle(30, 28, 4).fill({ color: 7397375 }), this.glow.circle(0, -32, 63).fill({ color: 8351961, alpha: .08 }), this.glow.circle(0, -32, 48).stroke({ color: 10205695, width: 2, alpha: .35 }), this.barrel.roundRect(-25, -99, 50, 106, 17).fill({ color: 2504287 }), this.barrel.roundRect(-18, -105, 36, 86, 12).fill({ color: 5400462 }), this.barrel.roundRect(-12, -104, 24, 78, 10).fill({ color: 1120823 }), this.barrel.roundRect(-28, -107, 56, 18, 8).fill({ color: 14795659 }), this.barrel.roundRect(-22, -105, 44, 5, 2).fill({ color: 16777215, alpha: .55 });
        for (var _i = 0, _a = [-83, -50]; _i < _a.length; _i++) {
            var e_3 = _a[_i];
            this.barrel.roundRect(-26, e_3, 52, 7, 3).fill({ color: 8894423, alpha: .78 });
        }
        e.addChild(this.glow, t, this.barrel), this.display = e;
    }
    oe.prototype.sync = function (e) { this.barrel.rotation = e.aimAngle, this.barrel.y = e.recoil * 7, this.glow.alpha = .65 + Math.sin(e.aimAngle * 2) * .1; };
    oe.prototype.destroy = function () { this.display.destroy({ children: !0 }); };
    return oe;
}()), t.a(j, function () { return new oe; }), M = (function (_super) {
    __extends(M, _super);
    function M(e, t, r) {
        if (r === void 0) { r = 6912948; }
        var _this = this;
        _this = _super.call(this, {}) || this, n.xr(_this, "width", void 0), n.xr(_this, "height", void 0), n.xr(_this, "tint", void 0), _this.width = e, _this.height = t, _this.tint = r;
        return _this;
    }
    return M;
}(r.g)), se = (function () {
    function se(e) {
        n.xr(this, "display", void 0);
        var t = new a.t;
        this.display = t;
        var r = e.width, i = e.height;
        t.roundRect(-r / 2, -i / 2, r, i, 15).fill({ color: 1120824 }), t.roundRect(-r / 2 + 8, -i / 2 + 12, r - 16, i - 24, 10).fill({ color: 2701406 }), t.roundRect(-r / 2 + 15, -i / 2 + 18, 7, i - 36, 4).fill({ color: e.tint, alpha: .55 }), t.roundRect(-r / 2 - 8, -i / 2 - 9, r + 16, 18, 6).fill({ color: 8550837 }), t.roundRect(-r / 2 - 4, i / 2 - 9, r + 8, 17, 5).fill({ color: 4542845 }), t.roundRect(-r / 2 + 4, -i / 2 - 5, r - 8, 4, 2).fill({ color: e.tint, alpha: .9 });
        for (var e_4 = -i / 2 + 38; e_4 < i / 2 - 20; e_4 += 42)
            t.circle(0, e_4, 3).fill({ color: 15126946, alpha: .75 });
    }
    se.prototype.sync = function () { };
    se.prototype.destroy = function () { this.display.destroy(); };
    return se;
}()), t.a(M, function (e) { return new se(e); }), N = (function (_super) {
    __extends(N, _super);
    function N() {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        var _this = this;
        _this = _super.apply(this, e) || this, n.xr(_this, "phase", 0), n.xr(_this, "shield", 0);
        return _this;
    }
    N.prototype.process = function (e) { this.phase += e * 1.8; };
    return N;
}(r.g)), ce = (function () {
    function ce() {
        n.xr(this, "display", void 0), n.xr(this, "leftWing", void 0), n.xr(this, "rightWing", void 0), n.xr(this, "halo", void 0), n.xr(this, "core", void 0);
        var e = new i.m;
        this.display = e, this.halo = new a.t, this.leftWing = new a.t, this.rightWing = new a.t, this.core = new a.t, e.addChild(this.halo, this.leftWing, this.rightWing, this.core), this.halo.circle(0, 0, 112).stroke({ color: 10456040, width: 2, alpha: .34 }), this.halo.circle(0, 0, 97).stroke({ color: 14861823, width: 1, alpha: .24 }), this.halo.ellipse(0, 0, 132, 35).stroke({ color: 9231601, width: 2, alpha: .46 }), this.halo.circle(0, 0, 125).fill({ color: 8874981, alpha: .035 }), re(this.leftWing, -1), re(this.rightWing, 1), this.core.ellipse(0, 3, 28, 55).fill({ color: 3023707 }), this.core.ellipse(0, 0, 20, 46).fill({ color: 12821740, alpha: .88 }), this.core.ellipse(-5, -14, 7, 22).fill({ color: 16777215, alpha: .44 }), this.core.circle(0, -47, 9).fill({ color: 16770484 }), this.core.circle(0, -47, 17).stroke({ color: 15387647, width: 2, alpha: .8 }), this.core.moveTo(-23, -58).lineTo(-10, -83).lineTo(0, -62).lineTo(12, -86).lineTo(24, -58).stroke({ color: 16768937, width: 4, alpha: .92 }), this.core.circle(0, -85, 4).fill({ color: 16777215 }), this.core.ellipse(0, 0, 31, 62).stroke({ color: 15849727, width: 2, alpha: .65 });
    }
    ce.prototype.sync = function (e) { var t = Math.sin(e.phase) * .16; this.leftWing.rotation = -.15 - t, this.rightWing.rotation = .15 + t, this.halo.rotation = e.phase * .12, this.halo.alpha = e.shield > 0 ? 1 : .58, this.core.scale.set(1 + Math.sin(e.phase * 1.5) * .025); };
    ce.prototype.destroy = function () { this.display.destroy({ children: !0 }); };
    return ce;
}()), t.a(N, function () { return new ce; }), P = (function (_super) {
    __extends(P, _super);
    function P(e, t, r) {
        if (r === void 0) { r = {}; }
        var _this = this;
        _this = _super.call(this, r) || this, n.xr(_this, "color", void 0), n.xr(_this, "style", void 0), n.xr(_this, "age", 0), _this.color = e, _this.style = t;
        return _this;
    }
    P.prototype.process = function (e) { this.age += e, this.age > .78 && this.queueFree(); };
    return P;
}(r.g)), le = (function () {
    function le(e) {
        n.xr(this, "display", void 0), n.xr(this, "rings", []), n.xr(this, "shards", []), n.xr(this, "sparks", void 0);
        var t = new i.m;
        this.display = t;
        for (var n_6 = 0; n_6 < 4; n_6++) {
            var r_3 = new a.t;
            r_3.circle(0, 0, 50 + n_6 * 16).stroke({ color: n_6 % 2 ? 16777215 : e.color, width: 5 - n_6 * .65, alpha: .86 - n_6 * .12 }), t.addChild(r_3), this.rings.push(r_3);
        }
        for (var n_7 = 0; n_7 < 22; n_7++) {
            var r_4 = new a.t, i_2 = n_7 / 22 * Math.PI * 2, o_1 = 12 + n_7 % 5 * 5;
            D(r_4, [0, -o_1, 4 + n_7 % 3 * 2, 0, 0, o_1 * .55, -4 - n_7 % 3 * 2, 0], n_7 % 2 ? 16777215 : e.color, .92), r_4.position.set(Math.cos(i_2) * 10, Math.sin(i_2) * 10), t.addChild(r_4), this.shards.push(r_4);
        }
        this.sparks = new a.t, this.sparks.circle(0, 0, 25).fill({ color: 16777215, alpha: .9 }), this.sparks.circle(0, 0, 43).stroke({ color: e.color, width: 9, alpha: .42 }), t.addChild(this.sparks);
    }
    le.prototype.sync = function (e) { var t = Math.max(0, Math.min(1, e.age / .72)); this.display.scale.set(.25 + t * 1.55), this.display.alpha = 1 - t; for (var n_8 = 0; n_8 < this.rings.length; n_8++)
        this.rings[n_8].scale.set(.48 + t * (1.2 + n_8 * .22)), this.rings[n_8].rotation = (n_8 % 2 ? -1 : 1) * e.age * (.8 + n_8 * .45); for (var n_9 = 0; n_9 < this.shards.length; n_9++) {
        var r_5 = n_9 / this.shards.length * Math.PI * 2 + e.age * (n_9 % 2 ? 1.2 : -.85), i_3 = 28 + t * (80 + n_9 % 4 * 14), a_1 = this.shards[n_9];
        a_1.position.set(Math.cos(r_5) * i_3, Math.sin(r_5) * i_3), a_1.rotation = r_5 + e.age * 2;
    } this.sparks.scale.set(1 - t * .82); };
    le.prototype.destroy = function () { this.display.destroy({ children: !0 }); };
    return le;
}()), t.a(P, function (e) { return new le(e); }), F = (function (_super) {
    __extends(F, _super);
    function F() {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        var _this = this;
        _this = _super.apply(this, e) || this, n.xr(_this, "points", []);
        return _this;
    }
    return F;
}(r.g)), ue = (function () {
    function ue() {
        n.xr(this, "display", void 0), this.display = new a.t;
    }
    ue.prototype.sync = function (e) { var t = this.display; if (t.clear(), !(e.points.length < 2)) {
        t.moveTo(e.points[0].x, e.points[0].y);
        for (var n_10 = 1; n_10 < e.points.length; n_10++)
            t.lineTo(e.points[n_10].x, e.points[n_10].y);
        t.stroke({ color: 14140927, width: 2.5, alpha: .68 });
        for (var n_11 = 0; n_11 < e.points.length; n_11 += 3) {
            var r_6 = e.points[n_11];
            t.circle(r_6.x, r_6.y, n_11 === 0 ? 4 : 2.5).fill({ color: 15916799, alpha: .7 - n_11 / e.points.length * .45 });
        }
    } };
    ue.prototype.destroy = function () { this.display.destroy(); };
    return ue;
}()), t.a(F, function () { return new ue; }), I = (function (_super) {
    __extends(I, _super);
    function I() {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        var _this = this;
        _this = _super.apply(this, e) || this, n.xr(_this, "phase", 0);
        return _this;
    }
    I.prototype.process = function (e) { this.phase += e; };
    return I;
}(r.g)), de = (function () {
    function de() {
        n.xr(this, "display", void 0), n.xr(this, "stars", void 0), n.xr(this, "runes", void 0);
        var e = new i.m;
        this.display = e, this.stars = new a.t, this.runes = new a.t, e.addChild(this.stars, this.runes);
        var t = this.stars;
        for (var e_5 = 0; e_5 < 28; e_5++) {
            var n_12 = 44 + (e_5 * 179 + 1800) % 1350, r_7 = 88 + (e_5 * 97 + 720) % 560, i_4 = .28 + .42 * (.5 + .5 * Math.sin(e_5 * 1.7)), a_2 = e_5 % 7 == 0 ? 2.8 : e_5 % 3 == 0 ? 1.8 : 1.15, o_2 = e_5 % 6 == 0 ? 16768167 : e_5 % 3 == 0 ? 10414847 : 13219071;
            t.circle(n_12, r_7, a_2 * 3.2).fill({ color: o_2, alpha: i_4 * .07 }), t.circle(n_12, r_7, a_2).fill({ color: o_2, alpha: i_4 * .8 }), e_5 % 9 == 0 && (t.moveTo(n_12 - 6, r_7).lineTo(n_12 + 6, r_7).stroke({ color: 14350335, width: 1, alpha: i_4 * .58 }), t.moveTo(n_12, r_7 - 6).lineTo(n_12, r_7 + 6).stroke({ color: 14350335, width: 1, alpha: i_4 * .58 }));
        }
        for (var e_6 = 0; e_6 < 3; e_6++) {
            var t_7 = e_6 * Math.PI * 2 / 3, n_13 = 720 + Math.cos(t_7) * 144, r_8 = 224 + Math.sin(t_7) * 72;
            this.runes.circle(n_13, r_8, 4.5).fill({ color: 11856639, alpha: .55 }), this.runes.circle(n_13, r_8, 10).stroke({ color: 10980329, width: 1, alpha: .28 });
        }
    }
    de.prototype.sync = function (e) { this.stars.alpha = .94 + Math.sin(e.phase * .65) * .06, this.runes.rotation = e.phase * .18; };
    de.prototype.destroy = function () { this.display.destroy({ children: !0 }); };
    return de;
}()), t.a(I, function () { return new de; }), L = (function (_super) {
    __extends(L, _super);
    function L(e, t) {
        if (t === void 0) { t = {}; }
        var _this = this;
        _this = _super.call(this, n.yr(n.yr({}, t), {}, { blendMode: "add" })) || this, n.xr(_this, "color", void 0), n.xr(_this, "age", 0), _this.color = e;
        return _this;
    }
    L.prototype.process = function (e) { this.age += e, this.age > .24 && this.queueFree(); };
    return L;
}(r.g)), fe = (function () {
    function fe(e) {
        n.xr(this, "display", new a.t);
        var t = this.display;
        t.circle(0, 0, 15).fill({ color: 16777215, alpha: .94 }), t.circle(0, 0, 32).fill({ color: e.color, alpha: .38 }), t.circle(0, 0, 48).stroke({ color: e.color, width: 5, alpha: .72 });
        for (var n_14 = 0; n_14 < 12; n_14++) {
            var r_9 = n_14 / 12 * Math.PI * 2, i_5 = 54 + n_14 % 3 * 12;
            t.moveTo(Math.cos(r_9) * 24, Math.sin(r_9) * 24).lineTo(Math.cos(r_9) * i_5, Math.sin(r_9) * i_5).stroke({ color: n_14 % 2 ? 16777215 : e.color, width: n_14 % 3 == 0 ? 3 : 1.8, alpha: .85 });
        }
    }
    fe.prototype.sync = function (e) { var t = e.age / .24; this.display.scale.set(1 + t * .75), this.display.alpha = 1 - t; };
    fe.prototype.destroy = function () { this.display.destroy(); };
    return fe;
}()), t.a(L, function (e) { return new fe(e); }), R = (function (_super) {
    __extends(R, _super);
    function R(e, t) {
        if (t === void 0) { t = {}; }
        var _this = this;
        var r;
        _this = _super.call(this, { zIndex: (r = t.zIndex) == null ? 2 : r, blendMode: "add" }) || this, n.xr(_this, "color", void 0), n.xr(_this, "points", []), n.xr(_this, "revision", 0), _this.color = e;
        return _this;
    }
    R.prototype.addPoint = function (e) { var t = this.points[this.points.length - 1]; t && Math.hypot(e.x - t.x, e.y - t.y) < 4 || (this.points.push(e), this.points.length > 12 && this.points.shift(), this.revision++); };
    R.prototype.clear = function () { this.points.length = 0, this.revision++; };
    return R;
}(r.g)), pe = (function () {
    function pe() {
        n.xr(this, "display", new a.t), n.xr(this, "lastRevision", -1);
    }
    pe.prototype.sync = function (e) { if (this.lastRevision === e.revision)
        return; this.lastRevision = e.revision; var t = this.display; t.clear(); var n = e.points; if (n.length < 2)
        return; t.moveTo(n[0].x, n[0].y); for (var e_7 = 1; e_7 < n.length; e_7++)
        t.lineTo(n[e_7].x, n[e_7].y); t.stroke({ color: e.color, width: 6, alpha: .24 }); var r = n[n.length - 1]; t.circle(r.x, r.y, 10).fill({ color: e.color, alpha: .14 }), t.circle(r.x, r.y, 4.5).fill({ color: 16777215, alpha: .32 }); };
    pe.prototype.destroy = function () { this.display.destroy(); };
    return pe;
}()), t.a(R, function () { return new pe; }); })))(); }
function B(e, t, n) { return e.set(y(e, t), n), n; }
function me() { return (me = e.n((function () { })))(); }
function he(e, t) { var n; return (n = ke[[e, t].sort().join("+")]) == null ? { name: "\u661F\u754C\u5171\u9E23", color: 16114431, style: "nova", damage: 24 } : n; }
function ge(e) { if (e.kind === "orb-anchor") {
    var t_8 = this.marbles.find(function (t) { return t.body === e.orb; }), n_15 = this.anchors.find(function (t) { return t.body === e.anchor; });
    t_8 && n_15 && this.fuse(t_8, n_15);
    return;
} var t = this.marbles.find(function (t) { return t.body === e.orb; }); t && !t.hitBoss && this.boss.shieldOpen > 0 ? (t.hitBoss = !0, this.boss.receiveHit(t)) : t && !t.hitBoss && (t.hitBoss = !0, this.floatText(this.boss.position.add(r.C(0, -65)), "\u62A4\u76FE\u5438\u6536", 12562175)); }
function _e(e, t, n, i) { this.physics.addStaticBox(e.x, e.y, t, n); var a = new r.g({ position: e, zIndex: 1 }); a.add(new M(t, n, i)), this.add(a); }
function ve(e, t, n) { this.physics.addStaticBox(e.x, e.y, t, n); var i = new r.g({ position: e, zIndex: 2 }); i.add(new r.p({ position: r.C(-t / 2, -n / 2), size: r.C(t, n), color: 7379145 })), i.add(new r.p({ position: r.C(-t / 2 + 7, -n / 2 + 3), size: r.C(t - 14, 4), color: 13104639 })), this.add(i); }
function ye() { var e = this.add(new t.c({ name: "HUD" })); e.add(new r.p({ position: r.C(24, 20), size: r.C(390, 58), color: 1186617, alpha: .92 })), e.add(new r.t({ text: "MARBLE QUEST", fontSize: 29, fontWeight: "bold", color: 15852799, position: r.C(44, 24) })), e.add(new r.t({ text: "\u661F\u754C\u795E\u6BBF \u00B7 \u53CC\u70AE\u53F0\u5F39\u73E0\u8BD5\u70BC", fontSize: 14, color: 10997224, position: r.C(45, 56) })), e.add(new r.p({ position: r.C(520, 24), size: r.C(400, 54), color: 1383226, alpha: .82 })), e.add(new r.t({ text: "MOONLIT SANCTUARY", fontSize: 16, fontWeight: "bold", color: 13350655, align: "center", position: r.C(720, 30) })), e.add(new r.t({ text: "\u53D1\u5C04 \u00B7 \u5B9A\u8EAB \u00B7 \u4E3B\u52A8\u78B0\u649E \u00B7 \u5143\u7D20\u5171\u9E23", fontSize: 15, color: 15196415, align: "center", position: r.C(720, 54) })), e.add(new r.p({ position: r.C(1110, 24), size: r.C(306, 54), color: 1383226, alpha: .82 })), e.add(new r.t({ text: "\u21BB \u91CD\u7F6E\u8BD5\u70BC", fontSize: 19, color: 16770234, align: "center", position: r.C(1262, 51) })), e.add(new r.t({ text: "\u6708\u8680\u8776\u540E", fontSize: 17, fontWeight: "bold", color: 16769211, align: "center", position: r.C(720, 100) })), this.bossFill = e.add(new r.p({ position: r.C(555, 121), size: r.C(330, 9), color: 10980329 })), this.bossLabel = e.add(new r.t({ text: "\u6708\u6838\u62A4\u76FE \u00B7 \u5148\u7528\u4E24\u9897\u7403\u5236\u9020\u5143\u7D20\u878D\u5408", fontSize: 14, color: 14800127, align: "center", position: r.C(720, 145) })), this.message = e.add(new r.t({ text: "\u9009\u4E00\u79CD\u5F39\u73E0\uFF0C\u7136\u540E\u70B9\u51FB\u5DE6/\u53F3\u573A\u5730\u53D1\u5C04\uFF1B\u6309\u4F4F\u62D6\u52A8\u53EF\u4EE5\u7784\u51C6\u3002\u70B9\u51FB\u98DE\u884C\u4E2D\u7684\u7403\u5B9A\u8EAB\u3002", fontSize: 18, color: 15920639, align: "center", position: r.C(720, 640), wrapWidth: 1180 })), e.add(new r.p({ position: r.C(1030, 166), size: r.C(380, 36), color: 462113, alpha: .94 })), this.diagnosticLabel = e.add(new r.t({ text: "NAPE PHYSICS \u00B7 WAITING FOR INPUT", fontSize: 13, fontWeight: "bold", color: 10480383, align: "center", position: r.C(1220, 184) })), this.trayPanel = e.add(new r.p({ position: r.C(20, 688), size: r.C(1400, 100), color: 1055286, alpha: .98 })), this.trayTitle = e.add(new r.t({ text: "\u9009\u62E9\u5F39\u73E0\u5C5E\u6027 \u00B7 \u5DE6\u53F3\u53CC\u70AE\u53F0\u5747\u53EF\u53D1\u5C04", fontSize: 16, fontWeight: "bold", color: 12768498, position: r.C(40, 696) })), y(Q, this, xe).call(this, e), y(Q, this, be).call(this); }
function be() { for (var e_8 = 0; e_8 < 9; e_8++) {
    var t_9 = 210 + e_8 * 128;
    this.add(new r.t({ text: e_8 % 2 ? "\u2727" : "\u25C7", fontSize: 23, color: 8228545, alpha: .56, position: r.C(t_9, 662) }));
} }
function xe(e) { for (var t_10 = 0; t_10 < W.length; t_10++) {
    var n_16 = W[t_10], i_6 = O[n_16], a_3 = 28 + t_10 * 225, o_3 = e.add(new r.p({ position: r.C(a_3, 733), size: r.C(214, 46), color: 1714504, alpha: .98 })), s_1 = e.add(new r.t({ text: y(Q, this, Ce).call(this, n_16) + "  " + i_6.name, fontSize: 17, fontWeight: "bold", color: i_6.light, align: "center", position: r.C(a_3 + 107, 756) }));
    b(Z, this).push({ element: n_16, label: s_1, bg: o_3 });
} }
function Se() { var e = this.tree.viewport.safeRect, t = Math.max(18, e.left + 12), n = Math.min(1422, e.right - 12), r = Math.max(720, n - t), i = Math.min(798, e.bottom - 12), a = Math.max(620, Math.min(688, i - 122)), o = Math.min(194, (r - 36 - 45) / 6); return { left: t, right: n, width: r, panelY: a, gap: 9, cardW: o, startX: t + (r - (o * 6 + 45)) / 2 }; }
function V() { var e = y(Q, this, Se).call(this); this.trayPanel.position = r.C(e.left, e.panelY), this.trayPanel.size = r.C(e.width, 96), this.trayTitle.position = r.C(e.left + 18, e.panelY + 8), this.message.position = r.C((e.left + e.right) / 2, e.panelY - 28), B(Y, this, e.panelY - 72), this.leftCannon.x = 128, this.leftCannon.y = b(Y, this), this.rightCannon.x = 1312, this.rightCannon.y = b(Y, this); for (var t_11 = 0; t_11 < b(Z, this).length; t_11++) {
    var n_17 = b(Z, this)[t_11], i_7 = e.startX + t_11 * (e.cardW + e.gap);
    n_17.bg.position = r.C(i_7, e.panelY + 36), n_17.bg.size = r.C(e.cardW, 46), n_17.label.position = r.C(i_7 + e.cardW / 2, e.panelY + 59);
} }
function Ce(e) { return { fire: "\u2726", ice: "\u2744", heavy: "\u25C8", lightning: "\u03DF", split: "\u2727", void: "\u25C9" }[e]; }
function we() { for (var _i = 0, _a = b(Z, this); _i < _a.length; _i++) {
    var e_9 = _a[_i];
    e_9.bg.color = e_9.element === this.selected ? 3556206 : 1714504, e_9.label.color = e_9.element === this.selected ? 16777215 : O[e_9.element].light;
} }
function Te() { return this.aimSide === "left" ? r.C(this.leftCannon.x, this.leftCannon.y) : r.C(this.rightCannon.x, this.rightCannon.y); }
function Ee() { return r.C(720, 245); }
function De() { var e = this.aimPoint; if (!e)
    return; var t = y(Q, this, Te).call(this), n = e.x - t.x, i = e.y - t.y, a = Math.hypot(n, i); if (a < 30) {
    var e_10 = y(Q, this, Ee).call(this);
    n = e_10.x - t.x, i = e_10.y - t.y, a = Math.hypot(n, i);
} var o = n / a, s = i / a, c = this.aimSide === "left" ? this.leftCannon : this.rightCannon; c.aimAngle = Math.atan2(s, o) + Math.PI / 2; var l = O[this.selected].speed, u = []; for (var e_11 = 0; e_11 < 16; e_11++) {
    var n_18 = e_11 * .065;
    u.push(r.C(t.x + o * l * n_18, t.y + s * l * n_18 + 280 * n_18 * n_18));
} this.aimGuide.points = u; }
function Oe(e) { var t; if (this.bossDefeated)
    return; var n = y(Q, this, Te).call(this), i = e.x - n.x, a = e.y - n.y, o = Math.hypot(i, a); if (o < 30) {
    var e_12 = y(Q, this, Ee).call(this);
    i = e_12.x - n.x, a = e_12.y - n.y, o = Math.hypot(i, a);
} var s = i / o, c = a / o, l = O[this.selected], u = r.C(n.x + s * 72, n.y + c * 72), d = l.speed, f = this.add(new R(l.color, { zIndex: 2 })); this.add(new L(l.color, { position: u, rotation: Math.atan2(c, s), zIndex: 5 })); var p = this.physics.launchOrb(u.x, u.y, l.radius, l.mass, s * d, c * d), m = this.add(new G(this, this.selected, p, f)); this.physics.bind(p, m), this.marbles.push(m), B(J, this, (t = b(J, this), t++, t)), console.log("[MarbleQuest input] shot", b(J, this), this.selected, u.x, u.y, s * d, c * d), this.aimSide === "left" ? this.leftCannon.recoil = 1 : this.rightCannon.recoil = 1, B(X, this, "SHOT " + b(J, this)), this.setDiagnostics(b(X, this)), this.setMessage(O[this.selected].name + " \u5DF2\u53D1\u5C04\uFF01\u70B9\u51FB\u98DE\u884C\u5F39\u73E0\u53EF\u5B9A\u8EAB\u3002"); }
var H, U, W, ke, G, Ae, je, K, q, J, Y, X, Z, Q, Me, Ne;
function Pe() { return (Pe = e.n((function () { t.l(), te(), z(), n.Sr(), g(), v(), x(), me(), H = 1440, U = 810, W = ["fire", "ice", "heavy", "lightning", "split", "void"], ke = { "fire+fire": { name: "\u53CC\u65E5\u8000\u6591", color: 16751186, style: "plasma", damage: 38 }, "ice+ice": { name: "\u6781\u5149\u51B0\u73AF", color: 11071487, style: "ice", damage: 28 }, "heavy+heavy": { name: "\u53CC\u661F\u5760\u51FB", color: 16766346, style: "nova", damage: 48 }, "lightning+lightning": { name: "\u5929\u7A79\u96F7\u66B4", color: 12952575, style: "storm", damage: 34 }, "split+split": { name: "\u7FE1\u7FE0\u661F\u7FA4", color: 10420169, style: "shards", damage: 32 }, "void+void": { name: "\u6C38\u591C\u5947\u70B9", color: 13673215, style: "eclipse", damage: 48 }, "fire+ice": { name: "\u661F\u96FE\u84B8\u6C7D\u73AF", color: 14022911, style: "steam", damage: 26 }, "fire+heavy": { name: "\u7194\u6838\u9668\u7206", color: 16753756, style: "nova", damage: 42 }, "fire+lightning": { name: "\u65E5\u5195\u7B49\u79BB\u5B50", color: 16761974, style: "plasma", damage: 42 }, "fire+split": { name: "\u7130\u7FBD\u661F\u7F51", color: 16757883, style: "shards", damage: 28 }, "fire+void": { name: "\u6697\u65E5\u541E\u7130", color: 14261503, style: "eclipse", damage: 38 }, "ice+heavy": { name: "\u51B0\u5DDD\u788E\u661F", color: 12121599, style: "ice", damage: 38 }, "ice+lightning": { name: "\u6781\u5149\u68F1\u955C", color: 11203839, style: "storm", damage: 32 }, "ice+split": { name: "\u971C\u6676\u82B1\u51A0", color: 12909311, style: "shards", damage: 28 }, "ice+void": { name: "\u96F6\u5EA6\u88C2\u9699", color: 12962047, style: "eclipse", damage: 34 }, "heavy+lightning": { name: "\u96F7\u94F8\u51B2\u51FB", color: 14996479, style: "storm", damage: 42 }, "heavy+split": { name: "\u661F\u9668\u5F39\u7247", color: 16769443, style: "shards", damage: 34 }, "heavy+void": { name: "\u5F15\u529B\u574D\u7F29", color: 13673215, style: "eclipse", damage: 44 }, "lightning+split": { name: "\u5343\u9E1F\u7535\u7F51", color: 14207231, style: "storm", damage: 30 }, "lightning+void": { name: "\u865A\u7A7A\u98CE\u66B4", color: 14005759, style: "eclipse", damage: 40 }, "split+void": { name: "\u6697\u661F\u8702\u7FA4", color: 14071295, style: "shards", damage: 34 } }, G = (function (_super) {
    __extends(G, _super);
    function G(e, t, i, a) {
        var _this = this;
        _this = _super.call(this, { name: "NapeMarble-" + t, position: r.C(i.position.x, i.position.y), zIndex: 4 }) || this, n.xr(_this, "arena", void 0), n.xr(_this, "element", void 0), n.xr(_this, "body", void 0), n.xr(_this, "trail", void 0), n.xr(_this, "age", 0), n.xr(_this, "fused", !1), n.xr(_this, "hitBoss", !1), n.xr(_this, "trailClock", 0), _this.arena = e, _this.element = t, _this.body = i, _this.trail = a, _this.add(new A(t, O[t].radius));
        return _this;
    }
    G.prototype.process = function (e) { this.age += e, this.trailClock += e, this.trailClock >= 1 / 30 && (this.trailClock %= 1 / 30, this.trail.addPoint(this.position)), (this.age > 12 || this.x < -120 || this.x > 1560 || this.y > 950 || this.y < -180) && this.arena.removeMarble(this); };
    return G;
}(r.g)), Ae = (function (_super) {
    __extends(Ae, _super);
    function Ae(e, t, i, a) {
        var _this = this;
        _this = _super.call(this, { name: "NapeStasis-" + t, position: r.C(i.position.x, i.position.y), zIndex: 5 }) || this, n.xr(_this, "arena", void 0), n.xr(_this, "element", void 0), n.xr(_this, "body", void 0), n.xr(_this, "savedVelocity", void 0), n.xr(_this, "triggered", !1), _this.arena = e, _this.element = t, _this.body = i, _this.savedVelocity = a, _this.add(new A(t, O[t].radius, !0));
        return _this;
    }
    return Ae;
}(r.g)), je = (function (_super) {
    __extends(je, _super);
    function je(e, t) {
        var _this = this;
        _this = _super.call(this, { name: "Moon-Moth-Queen", position: r.C(t.position.x, t.position.y), zIndex: 3 }) || this, n.xr(_this, "arena", void 0), n.xr(_this, "body", void 0), n.xr(_this, "hp", 100), n.xr(_this, "shieldOpen", 0), _this.arena = e, _this.body = t, _this.add(new N);
        return _this;
    }
    je.prototype.process = function (e) { var t = this.shieldOpen > 0; this.shieldOpen = Math.max(0, this.shieldOpen - e), t && this.shieldOpen === 0 && this.arena.updateBossBar(); var n = this.children.find(function (e) { return e instanceof N; }); n && (n.shield = this.shieldOpen); };
    je.prototype.openShield = function () { this.shieldOpen = 3.6, this.arena.setMessage("\u62A4\u76FE\u5171\u9E23\u7834\u88C2\uFF01\u8D81\u73B0\u5728\u653B\u51FB\u8776\u540E\u7684\u6708\u6838\uFF01"); };
    je.prototype.receiveHit = function (e) { if (this.shieldOpen <= 0) {
        this.arena.floatText(this.position, "\u62A4\u76FE\u5438\u6536", 12562175);
        return;
    } var t = O[e.element].damage; this.hp = Math.max(0, this.hp - t), this.arena.updateBossBar(), this.arena.floatText(this.position.add(r.C(0, -75)), "-" + t, O[e.element].light), this.hp <= 0 && (this.arena.bossDefeated = !0, this.arena.setMessage("\u6708\u8680\u8776\u540E\u88AB\u51C0\u5316\uFF01\u661F\u754C\u795E\u6BBF\u7684\u5C01\u5370\u89E3\u9664\u4E86\u3002"), this.arena.floatText(this.position, "\u6708\u6838\u51C0\u5316\uFF01", 16770487)); };
    return je;
}(r.g)), K = new WeakMap, q = new WeakMap, J = new WeakMap, Y = new WeakMap, X = new WeakMap, Z = new WeakMap, Q = new WeakSet, Me = (function (_super) {
    __extends(Me, _super);
    function Me() {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        var _this = this;
        _this = _super.apply(this, e) || this, h(_this, Q), n.xr(_this, "physics", new ee), n.xr(_this, "selected", "fire"), n.xr(_this, "aiming", !1), n.xr(_this, "aimSide", "left"), n.xr(_this, "aimPoint", null), n.xr(_this, "aimGuide", void 0), n.xr(_this, "leftCannon", void 0), n.xr(_this, "rightCannon", void 0), n.xr(_this, "boss", void 0), n.xr(_this, "message", void 0), n.xr(_this, "diagnosticLabel", void 0), n.xr(_this, "bossFill", void 0), n.xr(_this, "bossLabel", void 0), n.xr(_this, "trayPanel", void 0), n.xr(_this, "trayTitle", void 0), n.xr(_this, "bossDefeated", !1), n.xr(_this, "marbles", []), n.xr(_this, "anchors", []), n.xr(_this, "fusionCounter", 0), _(_this, K, null), _(_this, q, null), _(_this, J, 0), _(_this, Y, 632), _(_this, X, "READY"), _(_this, Z, []);
        return _this;
    }
    Me.prototype.ready = function () {
        var _this = this;
        this.add(new k({ zIndex: -100 })), this.add(new I({ zIndex: -80 })), this.physics.addStaticBox(H / 2, 710, 1540, 44), this.physics.addStaticBox(-8, 360, 42, 700), this.physics.addStaticBox(1448, 360, 42, 700), this.physics.addStaticBox(H / 2, 8, 1500, 28), y(Q, this, _e).call(this, r.C(430, 472), 74, 158, 6200518), y(Q, this, _e).call(this, r.C(1010, 472), 74, 158, 10585298), y(Q, this, ve).call(this, r.C(720, 560), 242, 24), y(Q, this, ve).call(this, r.C(720, 410), 126, 16), this.leftCannon = this.add(new j({ position: r.C(128, 632), zIndex: 4 })), this.rightCannon = this.add(new j({ position: r.C(1312, 632), zIndex: 4 })), this.leftCannon.aimAngle = -.08, this.rightCannon.aimAngle = -.08;
        var e = this.physics.addBossBody(720, 245, 66);
        this.boss = this.add(new je(this, e)), this.physics.bind(e, this.boss), this.aimGuide = this.add(new F({ zIndex: 8 })), y(Q, this, ye).call(this), this.updateBossBar(), y(Q, this, we).call(this), y(Q, this, V).call(this), this.tree.viewport.resized.connect(function () { return y(Q, _this, V).call(_this); }, this);
        var t = this.add(new r.g({ name: "ArenaInputSurface", inputPickable: !0, hitArea: r.x(0, 0, H, U), zIndex: 1e4 }));
        t.pointerDown.connect(function (e) { _this.handlePointerDown(e.pointerId, e.position); }), t.pointerMove.connect(function (e) { _this.handlePointerMove(e.pointerId, e.position); }), t.pointerUp.connect(function (e) { _this.handlePointerUp(e.pointerId, e.position); }), typeof wx < "u" && typeof wx.onTouchCancel == "function" && wx.onTouchCancel(function (e) { var t; for (var _i = 0, _a = (t = e.changedTouches) == null ? [] : t; _i < _a.length; _i++) {
            var n_19 = _a[_i];
            _this.handlePointerCancel(n_19.identifier);
        } });
    };
    Me.prototype.process = function (e) { var t = this.physics.step(e); for (var _i = 0, t_12 = t; _i < t_12.length; _i++) {
        var e_13 = t_12[_i];
        y(Q, this, ge).call(this, e_13);
    } };
    Me.prototype.handlePointerDown = function (e, t) { if (b(K, this) !== null)
        return; B(K, this, e), console.log("[MarbleQuest input] down", e, t.x, t.y); var n = y(Q, this, Se).call(this); if (t.y >= n.panelY - 8 && t.y <= n.panelY + 96) {
        var e_14 = Math.floor((t.x - n.startX) / (n.cardW + n.gap)), r_10 = n.startX + e_14 * (n.cardW + n.gap);
        e_14 >= 0 && e_14 < W.length && t.x >= r_10 && t.x <= r_10 + n.cardW && (this.selected = W[e_14], y(Q, this, we).call(this), this.setMessage(O[this.selected].name + " \u5DF2\u88C5\u586B\u3002\u70B9\u51FB\u5DE6/\u53F3\u573A\u5730\u53D1\u5C04\u3002"), B(X, this, "SELECT " + this.selected)), B(q, this, "ui"), this.setDiagnostics(b(X, this));
        return;
    } if (t.x >= 1150 && t.y <= 92) {
        this.resetTrial(), B(q, this, "ui");
        return;
    } var r = __spreadArray([], this.marbles, true).reverse().find(function (e) { return Math.hypot(e.x - t.x, e.y - t.y) <= O[e.element].radius + 34; }); if (r) {
        this.freezeMarble(r), B(q, this, "ui"), this.setDiagnostics("STASIS");
        return;
    } var i = __spreadArray([], this.anchors, true).reverse().find(function (e) { return Math.hypot(e.x - t.x, e.y - t.y) <= O[e.element].radius + 36; }); i ? (this.releaseOrb(i), B(q, this, "ui"), this.setDiagnostics("RELEASE")) : (this.aimSide = t.x < H / 2 ? "left" : "right", this.aimPoint = t, this.aiming = !0, B(q, this, "aim"), y(Q, this, De).call(this), B(X, this, "AIM " + this.aimSide.toUpperCase()), this.setDiagnostics(b(X, this))); };
    Me.prototype.handlePointerMove = function (e, t) { e === b(K, this) && b(q, this) === "aim" && (this.aimPoint = t, y(Q, this, De).call(this), B(X, this, "AIMING")); };
    Me.prototype.handlePointerUp = function (e, t) { e === b(K, this) && (console.log("[MarbleQuest input] up", e, t.x, t.y, b(q, this)), b(q, this) === "aim" && (this.aimPoint = t, this.aiming = !1, this.aimGuide.points = [], y(Q, this, Oe).call(this, t)), B(K, this, null), B(q, this, null), this.aimPoint = null); };
    Me.prototype.handlePointerCancel = function (e) { e === b(K, this) && (this.aiming = !1, this.aimGuide.points = [], B(K, this, null), B(q, this, null), this.aimPoint = null, B(X, this, "CANCEL"), console.log("[MarbleQuest input] cancel", e), this.setDiagnostics(b(X, this))); };
    Me.prototype.freezeMarble = function (e) { if (!this.marbles.includes(e))
        return; if (this.anchors.length >= 2) {
        this.setMessage("\u6700\u591A\u540C\u65F6\u5B9A\u8EAB\u4E24\u9897\u7403\u3002\u5148\u70B9\u51FB\u4E00\u9897\u5B9A\u8EAB\u7403\u91CA\u653E\u5B83\u3002");
        return;
    } var t = this.physics.freeze(e.body); this.physics.unbind(e.body), e.trail.queueFree(), this.marbles = this.marbles.filter(function (t) { return t !== e; }), e.queueFree(); var n = this.add(new Ae(this, e.element, e.body, t)); this.physics.bind(n.body, n), this.anchors.push(n), this.floatText(n.position.add(r.C(0, -36)), "\u65F6\u7A7A\u5B9A\u8EAB", 14800639), this.setMessage(O[n.element].name + " \u5DF2\u5B9A\u8EAB\uFF01\u518D\u53D1\u5C04\u53E6\u4E00\u9897\u7403\u649E\u51FB\u5B83\u3002"); };
    Me.prototype.releaseOrb = function (e) { if (!this.anchors.includes(e))
        return; this.anchors = this.anchors.filter(function (t) { return t !== e; }), this.physics.unbind(e.body); var t = O[e.element].speed, n = e.savedVelocity, r = Math.abs(n.x) + Math.abs(n.y) < 40 ? 0 : n.x, i = Math.abs(n.x) + Math.abs(n.y) < 40 ? -t * .7 : n.y; this.physics.release(e.body, r, i); var a = this.add(new R(O[e.element].color, { zIndex: 2 })), o = this.add(new G(this, e.element, e.body, a)); this.physics.bind(e.body, o), this.marbles.push(o), e.queueFree(), this.setMessage("\u5B9A\u8EAB\u89E3\u9664\uFF0C\u5F39\u73E0\u6062\u590D\u8FD0\u52A8\u3002"); };
    Me.prototype.removeMarble = function (e) { this.physics.removeBody(e.body), e.trail.queueFree(), this.marbles = this.marbles.filter(function (t) { return t !== e; }), e.queueFree(); };
    Me.prototype.fuse = function (e, t) { if (e.fused || t.triggered || !this.anchors.includes(t))
        return; e.fused = !0, t.triggered = !0; var n = he(e.element, t.element), i = r.C((e.x + t.x) / 2, (e.y + t.y) / 2); this.add(new P(n.color, n.style, { position: i, zIndex: 12 })); var a = this.add(new r.t({ text: n.name, fontSize: 30, fontWeight: "bold", color: n.color, stroke: { color: 1119021, width: 5 }, align: "center", position: i.add(r.C(0, -72)), scale: r.C(.35, .35), zIndex: 15 })); a.createTween().to(a, { scale: r.C(1.1, 1.1) }, .22, r.m.BackOut).to(a, { alpha: 0 }, .6).call(function () { return a.queueFree(); }), this.fusionCounter++, this.boss.openShield(), this.boss.hp = Math.max(0, this.boss.hp - n.damage * .22), this.updateBossBar(), this.anchors = this.anchors.filter(function (e) { return e !== t; }), this.physics.removeBody(t.body), t.queueFree(), this.physics.setVelocity(e.body, e.body.velocity.x * 1.08, e.body.velocity.y * 1.08), this.setMessage(n.name + "\uFF01" + O[e.element].name + " \u00D7 " + O[t.element].name + "\uFF0C\u8776\u540E\u62A4\u76FE\u5DF2\u5F00\u542F\uFF0C\u8D81\u73B0\u5728\u653B\u51FB\u6708\u6838\u3002"); };
    Me.prototype.updateBossBar = function () { var e = this.boss.hp / 100; this.bossFill.size = r.C(330 * e, 9), this.bossFill.color = this.boss.shieldOpen > 0 ? 16762508 : 10980329, this.bossLabel.text = this.bossDefeated ? "\u5C01\u5370\u89E3\u9664" : this.boss.shieldOpen > 0 ? "\u6708\u6838\u66B4\u9732 \u00B7 " + this.boss.hp + " / 100" : "\u6708\u8680\u62A4\u76FE \u00B7 " + this.boss.hp + " / 100 \u00B7 \u5148\u5236\u9020\u4E00\u6B21\u5143\u7D20\u878D\u5408"; };
    Me.prototype.floatText = function (e, t, n) { var i = this.add(new r.t({ text: t, fontSize: 20, fontWeight: "bold", color: n, stroke: { color: 1119021, width: 4 }, align: "center", position: e, zIndex: 20 })); i.createTween().to(i, { y: i.y - 46, alpha: 0 }, .75).call(function () { return i.queueFree(); }); };
    Me.prototype.setMessage = function (e) { this.message.text = e; };
    Me.prototype.setDiagnostics = function (e) { this.diagnosticLabel.text = e; };
    Object.defineProperty(Me.prototype, "shotsFired", {
        get: function () { return b(J, this); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Me.prototype, "inputState", {
        get: function () { return b(X, this); },
        enumerable: false,
        configurable: true
    });
    Me.prototype.resetTrial = function () {
        var _this = this;
        this.anchors.forEach(function (e) { _this.physics.removeBody(e.body), e.queueFree(); }), this.marbles.slice().forEach(function (e) { return _this.removeMarble(e); }), this.anchors = [], this.marbles = [], this.boss.hp = 100, this.boss.shieldOpen = 0, this.bossDefeated = !1, this.fusionCounter = 0, B(J, this, 0), B(X, this, "RESET"), this.updateBossBar(), this.setMessage("\u8BD5\u70BC\u91CD\u7F6E\u3002\u9009\u62E9\u5F39\u73E0\uFF0C\u70B9\u51FB\u6216\u62D6\u52A8\u573A\u5730\u53D1\u5C04\u3002");
    };
    return Me;
}(r.l)), Ne = { main: Me, design: { width: H, height: U, aspect: "expand" }, background: 527652, pauseOnBackground: !0, storagePrefix: "marble-quest-nape:" }; })))(); }
var $;
function Fe() { return (Fe = e.n((function () { p(), t.l(), t.n(), Pe(), $ = "2026-11-23-NAPE-5", Object.defineProperty(r.u.prototype, "renderResolution", { configurable: !0, get: function () { var e = Number(this.screen.pixelRatio) || 1; return Math.min(e, 2); } }), console.log("[MarbleQuest][" + $ + "] booting Pixi + Nape"), t.r(Ne).then(function (e) { var t = function (e) { return console.log("[MarbleQuest][" + $ + "] " + e); }, n = e.tree.viewport, r = e.platform.canvas, i = r ? r.width + "x" + r.height : "unknown", a = e.scene, o = "NAPE 3.43.5 \u00B7 DPR " + n.screen.pixelRatio + "/" + n.renderResolution + "x \u00B7 CANVAS " + i; a.setDiagnostics(o + " \u00B7 INPUT READY"), t("Sapling pointer pipeline ready"), t("screen=" + n.screen.width + "x" + n.screen.height + " dpr=" + n.screen.pixelRatio + " renderDpr=" + n.renderResolution + " canvas=" + i + " design=" + n.designWidth + "x" + n.designHeight + " scale=" + n.scale.toFixed(3)), setInterval(function () { var n = e.frameStats, r = "FPS " + n.fps.toFixed(0) + " CPU " + n.logicAvg.toFixed(1) + " GPU " + n.renderAvg.toFixed(1) + " ORB " + a.marbles.length + " SHOT " + a.shotsFired + " " + a.inputState; a.setDiagnostics(r), t(r), e.resetFrameStats(); }, 1e3); }).catch(function (e) { var t = ""; try {
    t = e instanceof Error ? e.stack || e.message : String(e);
}
catch (e) {
    t = "unknown startGame failure";
} console.error("[MarbleQuest][" + $ + "] startGame failed: " + t), typeof GameGlobal < "u" && (GameGlobal.__marbleQuestLastError = t); }); })))(); }
function Ie() { return (Ie = e.n((function () { l(), t.u(), Fe(); })))(); }
Ie();
