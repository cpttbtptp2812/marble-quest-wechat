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
(function () { var e = typeof wx < "u"; function t(e, t) { } typeof GameGlobal < "u" && (GameGlobal.__saplingLog = t), e && wx.onError && wx.onError(function (e) { e && e.message, e && e.stack; }); })();
var e = require("./chunks/rolldown-runtime-8PkXcCTM.js"), t = require("./chunks/sapling-engine-CwB9OWmC.js");
function n() { return (n = e.n((function () { GameGlobal.__saplingAssets = JSON.parse("{\"main\":[],\"subpackage\":null}"); })))(); }
var r, i;
function a() { return (a = e.n((function () { r = "2026-11-23-R4", i = function (e, t) { var n = ""; try {
    n = typeof t == "string" ? t : JSON.stringify(t);
}
catch (e) {
    n = String(t);
} console.error("[MarbleQuest Pixi][" + r + "][" + e + "] " + n), typeof GameGlobal < "u" && (GameGlobal.__marbleQuestLastError = n); }, console.log("[MarbleQuest Pixi][" + r + "] BOOT: main bundle entered"), typeof wx < "u" && (typeof wx.onError == "function" && wx.onError(function (e) { return i("wx.onError", e); }), typeof wx.onUnhandledRejection == "function" && wx.onUnhandledRejection(function (e) { return i("unhandled-rejection", e); })); })))(); }
function o(e, t, n, r, i) {
    if (r === void 0) { r = 1; }
    e.poly(t).fill({ color: n, alpha: r }), i !== void 0 && e.poly(t).stroke({ color: i, width: 2, alpha: Math.min(1, r + .15) });
}
function s(e, t, n, r) { var i = Math.max(5, n * .44); if (t === "fire")
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
function c(e, t) { var n = t; e.moveTo(0, -24).bezierCurveTo(n * 38, -106, n * 128, -112, n * 130, -38).bezierCurveTo(n * 132, 14, n * 75, 54, n * 26, 34).bezierCurveTo(n * 8, 25, n * 2, 8, 0, -24).fill({ color: 9532624, alpha: .36 }), e.moveTo(0, -24).bezierCurveTo(n * 38, -106, n * 128, -112, n * 130, -38).bezierCurveTo(n * 132, 14, n * 75, 54, n * 26, 34).bezierCurveTo(n * 8, 25, n * 2, 8, 0, -24).stroke({ color: 15124991, width: 3, alpha: .88 }), e.moveTo(n * 8, -22).bezierCurveTo(n * 36, -60, n * 89, -80, n * 112, -40).bezierCurveTo(n * 94, -12, n * 70, 16, n * 30, 25).stroke({ color: 10283263, width: 2, alpha: .84 }), e.moveTo(n * 12, -12).bezierCurveTo(n * 52, -22, n * 74, 9, n * 65, 32).stroke({ color: 16767913, width: 2, alpha: .72 }), e.circle(n * 78, -40, 17).stroke({ color: 13879551, width: 3, alpha: .7 }), e.circle(n * 78, -40, 8).fill({ color: 13104127, alpha: .62 }), e.circle(n * 47, 20, 5).fill({ color: 16768174, alpha: .78 }); }
var l, u, d, f, p, m, ee, h, te, g, _, v, y, b, x, S, C, w, ne, T, E;
function D() { return (D = e.n((function () { t.o(), t.I(), t.t(), t.Q(), t.X(), l = { fire: { name: "\u70C8\u7130\u6838\u5FC3", color: 16739141, light: 16765595, dark: 7809864, radius: 19, mass: .72, speed: 820, damage: 17 }, ice: { name: "\u6781\u5BD2\u6676\u6838", color: 6873087, light: 14154751, dark: 2383258, radius: 17, mass: .58, speed: 900, damage: 15 }, heavy: { name: "\u9668\u661F\u91CD\u6838", color: 16170851, light: 16773046, dark: 7884846, radius: 25, mass: 1.65, speed: 650, damage: 30 }, lightning: { name: "\u96F7\u66B4\u4E4B\u773C", color: 11701247, light: 15785727, dark: 4469133, radius: 15, mass: .45, speed: 1040, damage: 13 }, split: { name: "\u88C2\u53D8\u4E4B\u79CD", color: 7398060, light: 13959147, dark: 2583656, radius: 18, mass: .62, speed: 780, damage: 12 }, void: { name: "\u865A\u7A7A\u5947\u70B9", color: 12027647, light: 15785471, dark: 2889551, radius: 22, mass: 1.05, speed: 700, damage: 18 } }, u = (function (_super) {
    __extends(u, _super);
    function u() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return u;
}(t.G)), d = (function () {
    function d() {
        t.Z(this, "display", void 0);
        var e = new t.s;
        this.display = e, e.rect(-100, -80, 1640, 900).fill({ color: 527652 }), e.ellipse(720, 260, 650, 420).fill({ color: 2169680, alpha: .4 }), e.ellipse(720, 330, 420, 290).fill({ color: 3745388, alpha: .2 });
        for (var t_2 = 0; t_2 < 6; t_2++) {
            var n_2 = 100 + t_2 * 34;
            e.moveTo(-40, n_2 + 28).bezierCurveTo(260, n_2 - 64, 420, n_2 + 90, 720, n_2 + 8).bezierCurveTo(1020, n_2 - 78, 1190, n_2 + 78, 1490, n_2 - 12).stroke({ color: t_2 % 2 ? 5082568 : 9333193, width: 17 - t_2 * 1.6, alpha: .035 });
        }
        e.circle(720, 224, 116).fill({ color: 9337020, alpha: .075 }), e.circle(720, 224, 94).fill({ color: 15194367, alpha: .16 }), e.circle(720, 224, 75).fill({ color: 16771787, alpha: .88 }), e.circle(748, 196, 76).fill({ color: 1512501, alpha: .98 }), e.circle(720, 224, 105).stroke({ color: 13084159, width: 2, alpha: .42 }), o(e, [35, 442, 145, 400, 246, 420, 312, 475, 272, 512, 102, 509], 1317174, .96, 7038117), o(e, [1150, 463, 1238, 398, 1358, 415, 1414, 468, 1370, 516, 1200, 520], 1317174, .96, 7038117), o(e, [430, 518, 476, 478, 517, 514, 558, 458, 596, 504, 635, 444, 676, 502, 720, 451, 762, 502, 804, 448, 845, 505, 884, 460, 924, 512, 968, 466, 1012, 520], 1120047, .95, 4671349), e.rect(490, 500, 460, 122).fill({ color: 988977, alpha: .96 });
        for (var t_3 = 0; t_3 < 7; t_3++) {
            var n_3 = 520 + t_3 * 65;
            e.roundRect(n_3, 504, 25, 114, 8).fill({ color: 2699859, alpha: .8 }), e.roundRect(n_3 + 5, 508, 4, 105, 2).fill({ color: 8499658, alpha: .22 }), e.circle(n_3 + 12, 514, 3).fill({ color: 10214386, alpha: .8 });
        }
        e.rect(468, 492, 504, 17).fill({ color: 4932220 }), e.rect(468, 492, 504, 3).fill({ color: 13874943, alpha: .72 });
        for (var t_4 = 0; t_4 < 10; t_4++) {
            var n_4 = 185 + t_4 * 119, r_1 = 34 + t_4 * 37 % 70;
            o(e, [n_4 - 12, 574, n_4, 574 - r_1, n_4 + 13, 574], t_4 % 2 ? 3440543 : 7755431, .7, t_4 % 2 ? 10349311 : 13940991);
        }
        o(e, [-80, 636, 120, 608, 342, 628, 546, 604, 720, 620, 930, 602, 1138, 625, 1364, 606, 1510, 640, 1510, 850, -80, 850], 1054767, 1, 5524352), e.rect(-60, 638, 1560, 175).fill({ color: 461854, alpha: .75 }), e.moveTo(-20, 640).lineTo(1460, 640).stroke({ color: 8639981, width: 3, alpha: .5 });
        for (var t_5 = 0; t_5 < 116; t_5++) {
            var n_5 = (t_5 * 173 + t_5 % 7 * 29) % 1440, r_2 = (t_5 * 89 + t_5 % 11 * 17) % 575, i_1 = t_5 % 13 == 0 ? 2.7 : t_5 % 4 == 0 ? 1.8 : 1.1;
            e.circle(n_5, r_2, i_1 + 3).fill({ color: 9228287, alpha: .035 }), e.circle(n_5, r_2, i_1).fill({ color: t_5 % 5 == 0 ? 16770749 : 13027583, alpha: .35 + t_5 % 3 * .12 });
        }
        for (var _i = 0, _a = [26, 1414]; _i < _a.length; _i++) {
            var t_6 = _a[_i];
            e.roundRect(t_6 - 18, 276, 36, 360, 8).fill({ color: 1712451, alpha: .92 }), e.roundRect(t_6 - 22, 268, 44, 20, 6).fill({ color: 5065857 }), e.roundRect(t_6 - 3, 292, 6, 322, 3).fill({ color: 8042965, alpha: .26 }), e.circle(t_6, 281, 6).fill({ color: 15781009, alpha: .85 });
        }
    }
    d.prototype.sync = function (e, t, n) { };
    d.prototype.destroy = function () { this.display.destroy(); };
    return d;
}()), t.a(u, function () { return new d; }), f = (function (_super) {
    __extends(f, _super);
    function f(e, n, r) {
        if (r === void 0) { r = !1; }
        var _this = this;
        _this = _super.call(this, {}) || this, t.Z(_this, "element", void 0), t.Z(_this, "radius", void 0), t.Z(_this, "frozen", void 0), t.Z(_this, "phase", 0), _this.element = e, _this.radius = n, _this.frozen = r;
        return _this;
    }
    f.prototype.process = function (e) { this.phase += e * (this.frozen ? 1.35 : 2.4); };
    return f;
}(t.G)), p = (function () {
    function p(e) {
        t.Z(this, "display", void 0), t.Z(this, "aura", void 0), t.Z(this, "orbit", void 0), t.Z(this, "core", void 0);
        var n = l[e.element], r = e.radius, i = new t.D;
        this.display = i, this.aura = new t.s, this.orbit = new t.s, this.core = new t.s, i.addChild(this.aura, this.orbit, this.core), this.aura.circle(0, 0, r + 20).fill({ color: n.color, alpha: .045 }), this.aura.circle(0, 0, r + 12).stroke({ color: n.color, width: 5, alpha: .16 }), this.aura.circle(0, 0, r + 7).stroke({ color: n.light, width: 1.5, alpha: .38 }), this.orbit.circle(0, 0, r + 4).stroke({ color: n.light, width: 1.3, alpha: .52 }), this.orbit.ellipse(0, 0, r + 8, Math.max(5, r * .34)).stroke({ color: n.color, width: 2.2, alpha: .86 }), this.orbit.circle(r + 8, 0, 3.4).fill({ color: n.light, alpha: .95 }), this.orbit.circle(-r - 8, 0, 2.2).fill({ color: n.color, alpha: .85 }), this.core.circle(0, 0, r).fill({ color: n.dark }), this.core.circle(0, 0, r - 3).fill({ color: n.color, alpha: .98 }), this.core.circle(-r * .17, -r * .18, r * .61).fill({ color: n.light, alpha: .24 }), this.core.ellipse(-r * .28, -r * .43, r * .33, r * .15).fill({ color: 16777215, alpha: .45 }), this.core.circle(0, 0, r - 2).stroke({ color: n.light, width: 1.6, alpha: .76 }), s(this.core, e.element, r, n.light), e.frozen && (this.core.circle(0, 0, r + 9).stroke({ color: 16777215, width: 2, alpha: .5 }), this.core.circle(0, 0, r + 15).stroke({ color: 10414847, width: 1.2, alpha: .48 }));
    }
    p.prototype.sync = function (e) { this.orbit.rotation = e.phase, this.aura.alpha = .72 + Math.sin(e.phase * 1.6) * .14, this.core.scale.set(1 + Math.sin(e.phase * 1.2) * .025); };
    p.prototype.destroy = function () { this.display.destroy({ children: !0 }); };
    return p;
}()), t.a(f, function (e) { return new p(e); }), m = (function (_super) {
    __extends(m, _super);
    function m() {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        var _this = this;
        _this = _super.apply(this, e) || this, t.Z(_this, "aimAngle", -.8), t.Z(_this, "recoil", 0);
        return _this;
    }
    m.prototype.process = function (e) { this.recoil = Math.max(0, this.recoil - e * 4); };
    return m;
}(t.G)), ee = (function () {
    function ee() {
        t.Z(this, "display", void 0), t.Z(this, "barrel", void 0), t.Z(this, "glow", void 0);
        var e = new t.D, n = new t.s;
        this.glow = new t.s, this.barrel = new t.s, n.ellipse(0, 28, 78, 23).fill({ color: 1051949, alpha: .75 }), n.ellipse(0, 24, 65, 19).fill({ color: 2700894 }), n.ellipse(0, 18, 54, 15).stroke({ color: 9083595, width: 3, alpha: .7 }), n.roundRect(-43, 6, 86, 35, 12).fill({ color: 2634841 }), n.roundRect(-39, 9, 78, 7, 4).fill({ color: 14796171, alpha: .9 }), n.circle(-30, 28, 4).fill({ color: 7397375 }), n.circle(30, 28, 4).fill({ color: 7397375 }), this.glow.circle(0, -32, 63).fill({ color: 8351961, alpha: .08 }), this.glow.circle(0, -32, 48).stroke({ color: 10205695, width: 2, alpha: .35 }), this.barrel.roundRect(-25, -99, 50, 106, 17).fill({ color: 2504287 }), this.barrel.roundRect(-18, -105, 36, 86, 12).fill({ color: 5400462 }), this.barrel.roundRect(-12, -104, 24, 78, 10).fill({ color: 1120823 }), this.barrel.roundRect(-28, -107, 56, 18, 8).fill({ color: 14795659 }), this.barrel.roundRect(-22, -105, 44, 5, 2).fill({ color: 16777215, alpha: .55 });
        for (var _i = 0, _a = [-83, -50]; _i < _a.length; _i++) {
            var e_1 = _a[_i];
            this.barrel.roundRect(-26, e_1, 52, 7, 3).fill({ color: 8894423, alpha: .78 });
        }
        e.addChild(this.glow, n, this.barrel), this.display = e;
    }
    ee.prototype.sync = function (e) { this.barrel.rotation = e.aimAngle, this.barrel.y = e.recoil * 7, this.glow.alpha = .65 + Math.sin(e.aimAngle * 2) * .1; };
    ee.prototype.destroy = function () { this.display.destroy({ children: !0 }); };
    return ee;
}()), t.a(m, function () { return new ee; }), h = (function (_super) {
    __extends(h, _super);
    function h(e, n, r) {
        if (r === void 0) { r = 6912948; }
        var _this = this;
        _this = _super.call(this, {}) || this, t.Z(_this, "width", void 0), t.Z(_this, "height", void 0), t.Z(_this, "tint", void 0), _this.width = e, _this.height = n, _this.tint = r;
        return _this;
    }
    return h;
}(t.G)), te = (function () {
    function te(e) {
        t.Z(this, "display", void 0);
        var n = new t.s;
        this.display = n;
        var r = e.width, i = e.height;
        n.roundRect(-r / 2, -i / 2, r, i, 15).fill({ color: 1120824 }), n.roundRect(-r / 2 + 8, -i / 2 + 12, r - 16, i - 24, 10).fill({ color: 2701406 }), n.roundRect(-r / 2 + 15, -i / 2 + 18, 7, i - 36, 4).fill({ color: e.tint, alpha: .55 }), n.roundRect(-r / 2 - 8, -i / 2 - 9, r + 16, 18, 6).fill({ color: 8550837 }), n.roundRect(-r / 2 - 4, i / 2 - 9, r + 8, 17, 5).fill({ color: 4542845 }), n.roundRect(-r / 2 + 4, -i / 2 - 5, r - 8, 4, 2).fill({ color: e.tint, alpha: .9 });
        for (var e_2 = -i / 2 + 38; e_2 < i / 2 - 20; e_2 += 42)
            n.circle(0, e_2, 3).fill({ color: 15126946, alpha: .75 });
    }
    te.prototype.sync = function () { };
    te.prototype.destroy = function () { this.display.destroy(); };
    return te;
}()), t.a(h, function (e) { return new te(e); }), g = (function (_super) {
    __extends(g, _super);
    function g() {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        var _this = this;
        _this = _super.apply(this, e) || this, t.Z(_this, "phase", 0), t.Z(_this, "shield", 0);
        return _this;
    }
    g.prototype.process = function (e) { this.phase += e * 1.8; };
    return g;
}(t.G)), _ = (function () {
    function _() {
        t.Z(this, "display", void 0), t.Z(this, "leftWing", void 0), t.Z(this, "rightWing", void 0), t.Z(this, "halo", void 0), t.Z(this, "core", void 0);
        var e = new t.D;
        this.display = e, this.halo = new t.s, this.leftWing = new t.s, this.rightWing = new t.s, this.core = new t.s, e.addChild(this.halo, this.leftWing, this.rightWing, this.core), this.halo.circle(0, 0, 112).stroke({ color: 10456040, width: 2, alpha: .34 }), this.halo.circle(0, 0, 97).stroke({ color: 14861823, width: 1, alpha: .24 }), this.halo.ellipse(0, 0, 132, 35).stroke({ color: 9231601, width: 2, alpha: .46 }), this.halo.circle(0, 0, 125).fill({ color: 8874981, alpha: .035 }), c(this.leftWing, -1), c(this.rightWing, 1), this.core.ellipse(0, 3, 28, 55).fill({ color: 3023707 }), this.core.ellipse(0, 0, 20, 46).fill({ color: 12821740, alpha: .88 }), this.core.ellipse(-5, -14, 7, 22).fill({ color: 16777215, alpha: .44 }), this.core.circle(0, -47, 9).fill({ color: 16770484 }), this.core.circle(0, -47, 17).stroke({ color: 15387647, width: 2, alpha: .8 }), this.core.moveTo(-23, -58).lineTo(-10, -83).lineTo(0, -62).lineTo(12, -86).lineTo(24, -58).stroke({ color: 16768937, width: 4, alpha: .92 }), this.core.circle(0, -85, 4).fill({ color: 16777215 }), this.core.ellipse(0, 0, 31, 62).stroke({ color: 15849727, width: 2, alpha: .65 });
    }
    _.prototype.sync = function (e) { var t = Math.sin(e.phase) * .16; this.leftWing.rotation = -.15 - t, this.rightWing.rotation = .15 + t, this.halo.rotation = e.phase * .12, this.halo.alpha = e.shield > 0 ? 1 : .58, this.core.scale.set(1 + Math.sin(e.phase * 1.5) * .025); };
    _.prototype.destroy = function () { this.display.destroy({ children: !0 }); };
    return _;
}()), t.a(g, function () { return new _; }), v = (function (_super) {
    __extends(v, _super);
    function v(e, n, r) {
        if (r === void 0) { r = {}; }
        var _this = this;
        _this = _super.call(this, r) || this, t.Z(_this, "color", void 0), t.Z(_this, "style", void 0), t.Z(_this, "age", 0), _this.color = e, _this.style = n;
        return _this;
    }
    v.prototype.process = function (e) { this.age += e, this.age > .78 && this.queueFree(); };
    return v;
}(t.G)), y = (function () {
    function y(e) {
        t.Z(this, "display", void 0), t.Z(this, "rings", []), t.Z(this, "shards", []), t.Z(this, "sparks", void 0);
        var n = new t.D;
        this.display = n;
        for (var r_3 = 0; r_3 < 4; r_3++) {
            var i_2 = new t.s;
            i_2.circle(0, 0, 50 + r_3 * 16).stroke({ color: r_3 % 2 ? 16777215 : e.color, width: 5 - r_3 * .65, alpha: .86 - r_3 * .12 }), n.addChild(i_2), this.rings.push(i_2);
        }
        for (var r_4 = 0; r_4 < 22; r_4++) {
            var i_3 = new t.s, a_1 = r_4 / 22 * Math.PI * 2, s_1 = 12 + r_4 % 5 * 5;
            o(i_3, [0, -s_1, 4 + r_4 % 3 * 2, 0, 0, s_1 * .55, -4 - r_4 % 3 * 2, 0], r_4 % 2 ? 16777215 : e.color, .92), i_3.position.set(Math.cos(a_1) * 10, Math.sin(a_1) * 10), n.addChild(i_3), this.shards.push(i_3);
        }
        this.sparks = new t.s, this.sparks.circle(0, 0, 25).fill({ color: 16777215, alpha: .9 }), this.sparks.circle(0, 0, 43).stroke({ color: e.color, width: 9, alpha: .42 }), n.addChild(this.sparks);
    }
    y.prototype.sync = function (e) { var t = Math.max(0, Math.min(1, e.age / .72)); this.display.scale.set(.25 + t * 1.55), this.display.alpha = 1 - t; for (var n_6 = 0; n_6 < this.rings.length; n_6++)
        this.rings[n_6].scale.set(.48 + t * (1.2 + n_6 * .22)), this.rings[n_6].rotation = (n_6 % 2 ? -1 : 1) * e.age * (.8 + n_6 * .45); for (var n_7 = 0; n_7 < this.shards.length; n_7++) {
        var r_5 = n_7 / this.shards.length * Math.PI * 2 + e.age * (n_7 % 2 ? 1.2 : -.85), i_4 = 28 + t * (80 + n_7 % 4 * 14), a_2 = this.shards[n_7];
        a_2.position.set(Math.cos(r_5) * i_4, Math.sin(r_5) * i_4), a_2.rotation = r_5 + e.age * 2;
    } this.sparks.scale.set(1 - t * .82); };
    y.prototype.destroy = function () { this.display.destroy({ children: !0 }); };
    return y;
}()), t.a(v, function (e) { return new y(e); }), b = (function (_super) {
    __extends(b, _super);
    function b() {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        var _this = this;
        _this = _super.apply(this, e) || this, t.Z(_this, "points", []);
        return _this;
    }
    return b;
}(t.G)), x = (function () {
    function x() {
        t.Z(this, "display", void 0), this.display = new t.s;
    }
    x.prototype.sync = function (e) { var t = this.display; if (t.clear(), !(e.points.length < 2)) {
        t.moveTo(e.points[0].x, e.points[0].y);
        for (var n_8 = 1; n_8 < e.points.length; n_8++)
            t.lineTo(e.points[n_8].x, e.points[n_8].y);
        t.stroke({ color: 14140927, width: 2.5, alpha: .68 });
        for (var n_9 = 0; n_9 < e.points.length; n_9 += 3) {
            var r_6 = e.points[n_9];
            t.circle(r_6.x, r_6.y, n_9 === 0 ? 4 : 2.5).fill({ color: 15916799, alpha: .7 - n_9 / e.points.length * .45 });
        }
    } };
    x.prototype.destroy = function () { this.display.destroy(); };
    return x;
}()), t.a(b, function () { return new x; }), S = (function (_super) {
    __extends(S, _super);
    function S() {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        var _this = this;
        _this = _super.apply(this, e) || this, t.Z(_this, "phase", 0);
        return _this;
    }
    S.prototype.process = function (e) { this.phase += e; };
    return S;
}(t.G)), C = (function () {
    function C() {
        t.Z(this, "display", new t.s);
    }
    C.prototype.sync = function (e) { var t = this.display; t.clear(); for (var n_10 = 0; n_10 < 28; n_10++) {
        var r_7 = 44 + (n_10 * 179 + Math.sin(e.phase * (.14 + n_10 % 4 * .025) + n_10) * 34 + 1800) % 1350, i_5 = 88 + (n_10 * 97 + Math.cos(e.phase * (.11 + n_10 % 3 * .035) + n_10 * 2) * 22 + 720) % 560, a_3 = .28 + .42 * (.5 + .5 * Math.sin(e.phase * (1.1 + n_10 % 5 * .22) + n_10)), o_1 = n_10 % 7 == 0 ? 2.8 : n_10 % 3 == 0 ? 1.8 : 1.15, s_2 = n_10 % 6 == 0 ? 16768167 : n_10 % 3 == 0 ? 10414847 : 13219071;
        t.circle(r_7, i_5, o_1 * 3.2).fill({ color: s_2, alpha: a_3 * .07 }), t.circle(r_7, i_5, o_1).fill({ color: s_2, alpha: a_3 * .8 }), n_10 % 9 == 0 && (t.moveTo(r_7 - 6, i_5).lineTo(r_7 + 6, i_5).stroke({ color: 14350335, width: 1, alpha: a_3 * .58 }), t.moveTo(r_7, i_5 - 6).lineTo(r_7, i_5 + 6).stroke({ color: 14350335, width: 1, alpha: a_3 * .58 }));
    } var n = e.phase * .18; for (var e_3 = 0; e_3 < 3; e_3++) {
        var r_8 = n + e_3 * Math.PI * 2 / 3, i_6 = 720 + Math.cos(r_8) * 144, a_4 = 224 + Math.sin(r_8) * 72;
        t.circle(i_6, a_4, 4.5).fill({ color: 11856639, alpha: .55 }), t.circle(i_6, a_4, 10).stroke({ color: 10980329, width: 1, alpha: .28 });
    } };
    C.prototype.destroy = function () { this.display.destroy(); };
    return C;
}()), t.a(S, function () { return new C; }), w = (function (_super) {
    __extends(w, _super);
    function w(e, n) {
        if (n === void 0) { n = {}; }
        var _this = this;
        _this = _super.call(this, t.Y(t.Y({}, n), {}, { blendMode: "add" })) || this, t.Z(_this, "color", void 0), t.Z(_this, "age", 0), _this.color = e;
        return _this;
    }
    w.prototype.process = function (e) { this.age += e, this.age > .24 && this.queueFree(); };
    return w;
}(t.G)), ne = (function () {
    function ne(e) {
        t.Z(this, "display", new t.s);
        var n = this.display;
        n.circle(0, 0, 15).fill({ color: 16777215, alpha: .94 }), n.circle(0, 0, 32).fill({ color: e.color, alpha: .38 }), n.circle(0, 0, 48).stroke({ color: e.color, width: 5, alpha: .72 });
        for (var t_7 = 0; t_7 < 12; t_7++) {
            var r_9 = t_7 / 12 * Math.PI * 2, i_7 = 54 + t_7 % 3 * 12;
            n.moveTo(Math.cos(r_9) * 24, Math.sin(r_9) * 24).lineTo(Math.cos(r_9) * i_7, Math.sin(r_9) * i_7).stroke({ color: t_7 % 2 ? 16777215 : e.color, width: t_7 % 3 == 0 ? 3 : 1.8, alpha: .85 });
        }
    }
    ne.prototype.sync = function (e) { var t = e.age / .24; this.display.scale.set(1 + t * .75), this.display.alpha = 1 - t; };
    ne.prototype.destroy = function () { this.display.destroy(); };
    return ne;
}()), t.a(w, function (e) { return new ne(e); }), T = (function (_super) {
    __extends(T, _super);
    function T(e, n) {
        if (n === void 0) { n = {}; }
        var _this = this;
        var r;
        _this = _super.call(this, { zIndex: (r = n.zIndex) == null ? 2 : r, blendMode: "add" }) || this, t.Z(_this, "color", void 0), t.Z(_this, "points", []), _this.color = e;
        return _this;
    }
    T.prototype.addPoint = function (e) { var t = this.points[this.points.length - 1]; t && Math.hypot(e.x - t.x, e.y - t.y) < 4 || (this.points.push(e), this.points.length > 15 && this.points.shift()); };
    T.prototype.clear = function () { this.points.length = 0; };
    return T;
}(t.G)), E = (function () {
    function E() {
        t.Z(this, "display", new t.s);
    }
    E.prototype.sync = function (e) { var t = this.display; t.clear(); var n = e.points; if (n.length < 2)
        return; for (var r_10 = 1; r_10 < n.length; r_10++) {
        var i_8 = r_10 / (n.length - 1), a_5 = n[r_10 - 1], o_2 = n[r_10];
        t.moveTo(a_5.x, a_5.y).lineTo(o_2.x, o_2.y).stroke({ color: e.color, width: 3 + i_8 * 8, alpha: i_8 * .18 }), t.circle(o_2.x, o_2.y, 2 + i_8 * 4).fill({ color: e.color, alpha: i_8 * .22 });
    } var r = n[n.length - 1]; t.circle(r.x, r.y, 11).fill({ color: e.color, alpha: .14 }), t.circle(r.x, r.y, 5).fill({ color: 16777215, alpha: .32 }); };
    E.prototype.destroy = function () { this.display.destroy(); };
    return E;
}()), t.a(T, function () { return new E; }); })))(); }
function O(e, t) { if (t.has(e))
    throw TypeError("Cannot initialize the same private elements twice on an object"); }
function re(e, t) { O(e, t), t.add(e); }
function k() { return (k = e.n((function () { })))(); }
function A(e, t, n) { O(e, t), t.set(e, n); }
function j() { return (j = e.n((function () { })))(); }
function M(e, t, n) { if (typeof e == "function" ? e === t : e.has(t))
    return arguments.length < 3 ? t : n; throw TypeError("Private element is not present on this object"); }
function N(e, t) { return e.get(M(e, t)); }
function ie() { return (ie = e.n((function () { })))(); }
function P(e, t, n) { return e.set(M(e, t), n), n; }
function F() { return (F = e.n((function () { })))(); }
function ae(e, t) { var n; var r = [e, t].sort().join("+"); return (n = U[r]) == null ? { name: "\u661F\u754C\u5171\u9E23", color: 16114431, style: "nova", damage: 24 } : n; }
function I(e, n, r) { var i = new t.P({ position: e, friction: .08, bounce: .85 }); return i.add(new t.M({ shape: t.L(n, r) })), i; }
function L(e, n, r, i) { var a = new t.P({ position: e, friction: .1, bounce: .9 }); a.add(new t.M({ shape: t.L(n, r) })), a.add(new h(n, r, i)), this.add(a); }
function R(e, n, r) { var i = new t.P({ position: e, friction: .025, bounce: 1.05 }); i.add(new t.M({ shape: t.L(n, r) })), i.add(new t.U({ position: t.J(-n / 2, -r / 2), size: t.J(n, r), color: 7379145 })), i.add(new t.U({ position: t.J(-n / 2 + 7, -r / 2 + 3), size: t.J(n - 14, 4), color: 13104639 })), this.add(i); }
function oe() { for (var e_4 = 0; e_4 < 9; e_4++) {
    var n_11 = 210 + e_4 * 128;
    this.add(new t.R({ text: e_4 % 2 ? "\u2727" : "\u25C7", fontSize: 23, color: 8228545, alpha: .56, position: t.J(n_11, 672) }));
} }
function se(e) {
    var _this = this;
    var _loop_1 = function (n_12) {
        var r_11 = H[n_12], i_9 = l[r_11], a_6 = 34 + n_12 * 220, o_3 = e.add(new t.U({ position: t.J(a_6, 730), size: t.J(210, 43), color: 1714504, alpha: .98 })), s_3 = e.add(new t.R({ text: "".concat(M(Z, this_1, ce).call(this_1, r_11), "  ").concat(i_9.name), fontSize: 20, fontWeight: "bold", color: i_9.light, align: "center", position: t.J(a_6 + 105, 755), inputPickable: !0, hitArea: t.q(-105, -23, 210, 46) }));
        s_3.clicked.connect(function () { _this.selected = r_11, M(Z, _this, z).call(_this), _this.setMessage("".concat(i_9.name, " \u5DF2\u88C5\u586B\u5230\u4E24\u5EA7\u70AE\u53F0\u3002\u9009\u62E9\u4EFB\u610F\u4E00\u4FA7\u62D6\u52A8\u7784\u51C6\u3002")); }, this_1), N(X, this_1).push({ element: r_11, label: s_3, bg: o_3 });
    };
    var this_1 = this;
    for (var n_12 = 0; n_12 < H.length; n_12++) {
        _loop_1(n_12);
    }
}
function ce(e) { return { fire: "\u2726", ice: "\u2744", heavy: "\u25C8", lightning: "\u03DF", split: "\u2727", void: "\u25C9" }[e]; }
function z() { for (var _i = 0, _a = N(X, this); _i < _a.length; _i++) {
    var e_5 = _a[_i];
    e_5.bg.color = e_5.element === this.selected ? 3556206 : 1714504, e_5.label.color = e_5.element === this.selected ? 16777215 : l[e_5.element].light;
} }
function le() { if (!this.aimStart || !this.aimPoint)
    return; var e = this.aimPoint.x - this.aimStart.x, n = this.aimPoint.y - this.aimStart.y, r = Math.hypot(e, n); if (r < 1)
    return; var i = e / r, a = n / r, o = this.aimSide === "left" ? this.leftCannon : this.rightCannon; o.aimAngle = Math.atan2(a, i) + Math.PI / 2; var s = this.aimSide === "left" ? t.J(128, 650) : t.J(1312, 650), c = Math.max(.48, Math.min(1.3, r / 190)), u = l[this.selected].speed * c, d = []; for (var e_6 = 0; e_6 < 18; e_6++) {
    var n_13 = e_6 * .065;
    d.push(t.J(s.x + i * u * n_13, s.y + a * u * n_13 + 31.25 * n_13 * n_13));
} this.aimGuide.points = d; }
function ue(e, n) { if (this.bossDefeated)
    return; var r = n.x - e.x, i = n.y - e.y, a = Math.hypot(r, i); if (a < 1)
    return; var o = r / a, s = i / a, c = Math.max(.45, Math.min(1.25, a / 180)), u = l[this.selected], d = u.speed * c, f = (this.aimSide === "left" ? t.J(128, 650) : t.J(1312, 650)).add(t.J(o * 67, s * 67)), p = this.add(new T(u.color, { zIndex: 2 })); this.add(new w(u.color, { position: f, rotation: Math.atan2(s, o), zIndex: 5 })), this.marbles.push(this.add(new W(this, this.selected, f, t.J(o * d, s * d), p))), this.aimSide === "left" ? this.leftCannon.recoil = 1 : this.rightCannon.recoil = 1, this.setMessage("".concat(u.name, " \u5DF2\u53D1\u5C04\u3002\u98DE\u884C\u4E2D\u70B9\u51FB\u7A7A\u767D\u5904\uFF0C\u6216\u76F4\u63A5\u70B9\u4E2D\u5F39\u73E0\uFF0C\u8BA9\u5B83\u505C\u5728\u7A7A\u4E2D\u3002")); }
var B, V, H, U, W, G, K, q, J, Y, X, Z, Q, de;
function fe() { return (fe = e.n((function () { t.I(), D(), t.Q(), k(), j(), ie(), F(), B = 1440, V = 810, H = ["fire", "ice", "heavy", "lightning", "split", "void"], U = { "fire+fire": { name: "\u53CC\u65E5\u8000\u6591", color: 16751186, style: "plasma", damage: 38 }, "ice+ice": { name: "\u6781\u5149\u51B0\u73AF", color: 11071487, style: "ice", damage: 28 }, "heavy+heavy": { name: "\u53CC\u661F\u5760\u51FB", color: 16766346, style: "nova", damage: 48 }, "lightning+lightning": { name: "\u5929\u7A79\u96F7\u66B4", color: 12952575, style: "storm", damage: 34 }, "split+split": { name: "\u7FE1\u7FE0\u661F\u7FA4", color: 10420169, style: "shards", damage: 32 }, "void+void": { name: "\u6C38\u591C\u5947\u70B9", color: 13673215, style: "eclipse", damage: 48 }, "fire+ice": { name: "\u661F\u96FE\u84B8\u6C7D\u73AF", color: 14022911, style: "steam", damage: 26 }, "fire+heavy": { name: "\u7194\u6838\u9668\u7206", color: 16753756, style: "nova", damage: 42 }, "fire+lightning": { name: "\u65E5\u5195\u7B49\u79BB\u5B50", color: 16761974, style: "plasma", damage: 42 }, "fire+split": { name: "\u7130\u7FBD\u661F\u7F51", color: 16757883, style: "shards", damage: 28 }, "fire+void": { name: "\u6697\u65E5\u541E\u7130", color: 14261503, style: "eclipse", damage: 38 }, "ice+heavy": { name: "\u51B0\u5DDD\u788E\u661F", color: 12121599, style: "ice", damage: 38 }, "ice+lightning": { name: "\u6781\u5149\u68F1\u955C", color: 11203839, style: "storm", damage: 32 }, "ice+split": { name: "\u971C\u6676\u82B1\u51A0", color: 12909311, style: "shards", damage: 28 }, "ice+void": { name: "\u96F6\u5EA6\u88C2\u9699", color: 12962047, style: "eclipse", damage: 34 }, "heavy+lightning": { name: "\u96F7\u94F8\u51B2\u51FB", color: 14996479, style: "storm", damage: 42 }, "heavy+split": { name: "\u661F\u9668\u5F39\u7247", color: 16769443, style: "shards", damage: 34 }, "heavy+void": { name: "\u5F15\u529B\u574D\u7F29", color: 13673215, style: "eclipse", damage: 44 }, "lightning+split": { name: "\u5343\u9E1F\u7535\u7F51", color: 14207231, style: "storm", damage: 30 }, "lightning+void": { name: "\u865A\u7A7A\u98CE\u66B4", color: 14005759, style: "eclipse", damage: 40 }, "split+void": { name: "\u6697\u661F\u8702\u7FA4", color: 14071295, style: "shards", damage: 34 } }, W = (function (_super) {
    __extends(W, _super);
    function W(e, n, r, i, a) {
        var _this = this;
        var o = l[n];
        _this = _super.call(this, { name: "Marble-".concat(n), groups: ["marbles"], position: r, mass: o.mass, gravityScale: .25, friction: .035, bounce: n === "heavy" ? .68 : .91, linearDamp: .018, angularDamp: .5, ccd: !0, inputPickable: !0, hitArea: t.q(-o.radius - 8, -o.radius - 8, (o.radius + 8) * 2, (o.radius + 8) * 2) }) || this, t.Z(_this, "arena", void 0), t.Z(_this, "element", void 0), t.Z(_this, "trail", void 0), t.Z(_this, "age", 0), t.Z(_this, "fused", !1), t.Z(_this, "hitBoss", !1), _this.arena = e, _this.element = n, _this.trail = a, _this.linearVelocity = i, _this.add(new t.M({ shape: t.F(o.radius) })), _this.add(new f(n, o.radius)), _this.bodyEntered.connect(function (e) { e instanceof G ? _this.arena.fuse(_this, e) : e instanceof K && !_this.hitBoss && e.shieldOpen > 0 && (_this.hitBoss = !0, e.receiveHit(_this)); }, _this);
        return _this;
    }
    W.prototype.process = function (e) { this.age += e, this.trail.addPoint(this.position), (this.age > 8 || this.x < -100 || this.x > 1540 || this.y > 910) && (this.trail.queueFree(), this.arena.forgetMarble(this), this.queueFree()); };
    return W;
}(t.N)), G = (function (_super) {
    __extends(G, _super);
    function G(e, n, r, i) {
        var _this = this;
        var a = l[n];
        _this = _super.call(this, { name: "Stasis-".concat(n), position: r, friction: .04, bounce: .9, inputPickable: !0, hitArea: t.q(-a.radius - 12, -a.radius - 12, (a.radius + 12) * 2, (a.radius + 12) * 2) }) || this, t.Z(_this, "arena", void 0), t.Z(_this, "element", void 0), t.Z(_this, "savedVelocity", void 0), t.Z(_this, "triggered", !1), _this.arena = e, _this.element = n, _this.savedVelocity = i, _this.add(new t.M({ shape: t.F(a.radius + 1) })), _this.add(new f(n, a.radius, !0));
        return _this;
    }
    return G;
}(t.P)), K = (function (_super) {
    __extends(K, _super);
    function K(e) {
        var _this = this;
        _this = _super.call(this, { name: "Moon-Moth-Queen", position: t.J(720, 245), friction: .1, bounce: .55 }) || this, t.Z(_this, "arena", void 0), t.Z(_this, "hp", 100), t.Z(_this, "shieldOpen", 0), _this.arena = e, _this.add(new t.M({ shape: t.F(66) })), _this.add(new g);
        return _this;
    }
    K.prototype.process = function (e) { var t = this.shieldOpen > 0; this.shieldOpen = Math.max(0, this.shieldOpen - e), t && this.shieldOpen === 0 && this.arena.updateBossBar(); var n = this.children.find(function (e) { return e instanceof g; }); n && (n.shield = this.shieldOpen); };
    K.prototype.openShield = function () { this.shieldOpen = 3.6, this.arena.setMessage("\u62A4\u76FE\u5171\u9E23\u7834\u88C2\uFF01\u73B0\u5728\u7784\u51C6\u8776\u540E\u7684\u6708\u6838\uFF01"); };
    K.prototype.receiveHit = function (e) { if (this.shieldOpen <= 0) {
        this.arena.floatText(this.position, "\u62A4\u76FE\u5438\u6536", 12562175);
        return;
    } var n = l[e.element].damage; this.hp = Math.max(0, this.hp - n), this.arena.updateBossBar(), this.arena.floatText(this.position.add(t.J(0, -75)), "-".concat(n), l[e.element].light), this.hp <= 0 && (this.arena.setMessage("\u6708\u8680\u8776\u540E\u88AB\u51C0\u5316\uFF01\u661F\u754C\u795E\u6BBF\u7684\u5C01\u5370\u89E3\u9664\u4E86\u3002"), this.arena.bossDefeated = !0, this.arena.floatText(this.position, "\u6708\u6838\u51C0\u5316\uFF01", 16770487)); };
    return K;
}(t.P)), q = (function (_super) {
    __extends(q, _super);
    function q(e) {
        var _this = this;
        _this = _super.call(this, { name: "ArenaInputSurface", zIndex: 99999, inputPickable: !0, hitArea: t.q(-260, -140, 1960, 1090) }) || this, _this.pointerDown.connect(function (t) { return e.handlePointerDown(t.pointerId, t.position); }, _this), _this.pointerMove.connect(function (t) { return e.handlePointerMove(t.pointerId, t.position); }, _this), _this.pointerUp.connect(function (t) { return e.handlePointerUp(t.pointerId, t.position); }, _this);
        return _this;
    }
    return q;
}(t.G)), J = new WeakMap, Y = new WeakMap, X = new WeakMap, Z = new WeakSet, Q = (function (_super) {
    __extends(Q, _super);
    function Q() {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        var _this = this;
        _this = _super.apply(this, e) || this, re(_this, Z), t.Z(_this, "selected", "fire"), t.Z(_this, "aiming", !1), t.Z(_this, "aimSide", "left"), t.Z(_this, "aimStart", null), t.Z(_this, "aimPoint", null), t.Z(_this, "aimGuide", void 0), t.Z(_this, "leftCannon", void 0), t.Z(_this, "rightCannon", void 0), t.Z(_this, "boss", void 0), t.Z(_this, "message", void 0), t.Z(_this, "diagnosticLabel", void 0), t.Z(_this, "bossFill", void 0), t.Z(_this, "bossLabel", void 0), t.Z(_this, "bossDefeated", !1), t.Z(_this, "marbles", []), t.Z(_this, "anchors", []), t.Z(_this, "fusionCounter", 0), A(_this, J, null), A(_this, Y, null), A(_this, X, []);
        return _this;
    }
    Q.prototype.ready = function () {
        var _this = this;
        this.add(new u({ zIndex: -100 })), this.add(new S({ zIndex: -80 })), this.add(I(t.J(B / 2, 714), 1540, 44)), this.add(I(t.J(-8, 360), 42, 680)), this.add(I(t.J(1448, 360), 42, 680)), this.add(I(t.J(B / 2, 12), 1500, 28)), M(Z, this, L).call(this, t.J(430, 472), 74, 158, 6200518), M(Z, this, L).call(this, t.J(1010, 472), 74, 158, 10585298), M(Z, this, R).call(this, t.J(720, 560), 242, 24), M(Z, this, R).call(this, t.J(720, 410), 126, 16), this.leftCannon = this.add(new m({ position: t.J(128, 650), zIndex: 4 })), this.rightCannon = this.add(new m({ position: t.J(1312, 650), zIndex: 4 })), this.leftCannon.aimAngle = -.08, this.rightCannon.aimAngle = -.08, this.boss = this.add(new K(this)), this.aimGuide = this.add(new b({ zIndex: 8 }));
        var e = this.add(new t.j({ name: "HUD" }));
        e.add(new t.U({ position: t.J(24, 20), size: t.J(390, 58), color: 1186617, alpha: .92 })), e.add(new t.R({ text: "MARBLE QUEST", fontSize: 29, fontWeight: "bold", color: 15852799, position: t.J(44, 24) })), e.add(new t.R({ text: "\u661F\u754C\u795E\u6BBF \u00B7 \u53CC\u70AE\u53F0\u5F39\u73E0\u8BD5\u70BC", fontSize: 14, color: 10997224, position: t.J(45, 56) })), e.add(new t.U({ position: t.J(520, 24), size: t.J(400, 54), color: 1383226, alpha: .82 })), e.add(new t.R({ text: "MOONLIT SANCTUARY", fontSize: 16, fontWeight: "bold", color: 13350655, align: "center", position: t.J(720, 30) })), e.add(new t.R({ text: "\u53D1\u5C04 \u00B7 \u5B9A\u8EAB \u00B7 \u4E3B\u52A8\u78B0\u649E \u00B7 \u5143\u7D20\u5171\u9E23", fontSize: 15, color: 15196415, align: "center", position: t.J(720, 54) })), e.add(new t.U({ position: t.J(1110, 24), size: t.J(306, 54), color: 1383226, alpha: .82 })), e.add(new t.R({ text: "\u21BB \u91CD\u7F6E\u8BD5\u70BC", fontSize: 19, color: 16770234, align: "center", position: t.J(1262, 51), inputPickable: !0, hitArea: t.q(-70, -24, 140, 48) })).clicked.connect(function () { return _this.resetTrial(); }, this), e.add(new t.R({ text: "\u6708\u8680\u8776\u540E", fontSize: 17, fontWeight: "bold", color: 16769211, align: "center", position: t.J(720, 100) })), this.bossFill = e.add(new t.U({ position: t.J(555, 121), size: t.J(330, 9), color: 10980329 })), this.bossLabel = e.add(new t.R({ text: "\u6708\u6838\u62A4\u76FE \u00B7 \u5148\u7528\u4E24\u9897\u7403\u5236\u9020\u5143\u7D20\u878D\u5408", fontSize: 14, color: 14800127, align: "center", position: t.J(720, 145) })), this.message = e.add(new t.R({ text: "\u5728\u4EFB\u610F\u4E00\u4FA7\u62D6\u52A8\u786E\u5B9A\u65B9\u5411\uFF0C\u677E\u5F00\u53D1\u5C04\uFF1B\u70B9\u4E2D\u98DE\u884C\u4E2D\u7684\u5F39\u73E0\u5373\u53EF\u5B9A\u8EAB\u3002", fontSize: 20, color: 15920639, align: "center", wrapWidth: 1180, position: t.J(720, 650) })), e.add(new t.U({ position: t.J(1030, 166), size: t.J(380, 36), color: 462113, alpha: .94 })), this.diagnosticLabel = e.add(new t.R({ text: "PIXIJ BUILD R5 \u00B7 INPUT READY", fontSize: 15, fontWeight: "bold", color: 10480383, align: "center", position: t.J(1220, 184) })), e.add(new t.U({ position: t.J(20, 696), size: t.J(1400, 100), color: 1055286, alpha: .98 })), e.add(new t.R({ text: "\u9009\u62E9\u5F39\u73E0\u5C5E\u6027 \u00B7 \u5DE6\u53F3\u53CC\u70AE\u53F0\u5747\u53EF\u53D1\u5C04", fontSize: 16, fontWeight: "bold", color: 12768498, position: t.J(40, 704) })), M(Z, this, se).call(this, e), M(Z, this, oe).call(this), this.updateBossBar(), M(Z, this, z).call(this), e.add(new q(this));
    };
    Q.prototype.handlePointerDown = function (e, t) { if (N(J, this) !== null)
        return; if (P(J, this, e), t.y >= 700 && t.y <= 800) {
        var e_7 = Math.floor((t.x - 34) / 220), n_14 = 34 + e_7 * 220;
        e_7 >= 0 && e_7 < H.length && t.x <= n_14 + 210 && (this.selected = H[e_7], M(Z, this, z).call(this), this.setMessage(l[this.selected].name + " \u5DF2\u88C5\u586B\u3002\u62D6\u52A8\u573A\u5730\u7784\u51C6\uFF0C\u677E\u5F00\u53D1\u5C04\u3002")), P(Y, this, "ui");
        return;
    } if (t.x >= 1170 && t.y >= 12 && t.y <= 92) {
        this.resetTrial(), P(Y, this, "ui");
        return;
    } var n = this.anchors.find(function (e) { return Math.hypot(e.x - t.x, e.y - t.y) <= l[e.element].radius + 30; }); if (n) {
        this.releaseOrb(n), P(Y, this, "ui");
        return;
    } var r = __spreadArray([], this.marbles, true).reverse().find(function (e) { return Math.hypot(e.x - t.x, e.y - t.y) <= l[e.element].radius + 28; }); r ? (this.freezeMarble(r), P(Y, this, "ui")) : (this.aimStart = t, this.aimPoint = t, this.aimSide = t.x < B / 2 ? "left" : "right", this.aiming = !0, P(Y, this, "aim"), this.setMessage("\u6B63\u5728\u7784\u51C6\uFF1A\u671D\u76EE\u6807\u65B9\u5411\u62D6\u52A8\uFF0C\u677E\u5F00\u53D1\u5C04\u3002")); };
    Q.prototype.handlePointerMove = function (e, t) { e === N(J, this) && N(Y, this) === "aim" && (this.aimPoint = t, M(Z, this, le).call(this)); };
    Q.prototype.handlePointerUp = function (e, t) { if (e === N(J, this)) {
        if (N(Y, this) === "aim") {
            this.aimPoint = t;
            var e_8 = this.aimStart, n_15 = this.aimPoint, r_12 = e_8 && n_15 ? Math.hypot(n_15.x - e_8.x, n_15.y - e_8.y) : 0;
            this.aiming = !1, this.aimGuide.points = [], e_8 && n_15 && r_12 > 30 ? M(Z, this, ue).call(this, e_8, n_15) : this.freezeLatest();
        }
        P(J, this, null), P(Y, this, null), this.aimStart = null, this.aimPoint = null;
    } };
    Q.prototype.freezeLatest = function () { if (this.anchors.length >= 2) {
        this.setMessage("\u6700\u591A\u540C\u65F6\u5B9A\u8EAB\u4E24\u9897\u7403\u3002\u5148\u70B9\u51FB\u4E00\u9897\u5B9A\u8EAB\u7403\u91CA\u653E\u5B83\u3002");
        return;
    } var e = __spreadArray([], this.marbles, true).reverse().find(function (e) { return !e.isQueuedForDeletion; }); e ? this.freezeMarble(e) : this.setMessage("\u5148\u53D1\u5C04\u4E00\u9897\u5F39\u73E0\uFF0C\u518D\u70B9\u51FB\u7A7A\u767D\u5904\u5C06\u5B83\u5B9A\u8EAB\u3002"); };
    Q.prototype.freezeMarble = function (e) { if (e.isQueuedForDeletion)
        return; if (this.anchors.length >= 2) {
        this.setMessage("\u7A7A\u4E2D\u5DF2\u6709\u4E24\u9897\u5B9A\u8EAB\u7403\u3002\u70B9\u51FB\u5176\u4E2D\u4E00\u9897\u91CA\u653E\u540E\uFF0C\u518D\u5E03\u7F6E\u65B0\u7684\u78B0\u649E\u70B9\u3002");
        return;
    } var n = e.linearVelocity, r = this.add(new G(this, e.element, e.position, n)); this.anchors.push(r), this.marbles = this.marbles.filter(function (t) { return t !== e; }), e.trail.queueFree(), e.queueFree(), this.floatText(r.position.add(t.J(0, -36)), "\u65F6\u7A7A\u5B9A\u8EAB", 14800639), this.setMessage("".concat(l[r.element].name, " \u5DF2\u5B9A\u8EAB\uFF01\u4ECE\u4EFB\u610F\u4E00\u4FA7\u53D1\u5C04\u53E6\u4E00\u9897\u7403\uFF0C\u4E3B\u52A8\u649E\u51FB\u5B83\u3002")); };
    Q.prototype.releaseOrb = function (e) { if (e.triggered)
        return; this.anchors = this.anchors.filter(function (t) { return t !== e; }); var n = e.savedVelocity.length() > 80 ? e.savedVelocity : t.J(0, -380), r = this.add(new T(l[e.element].color, { zIndex: 2 })); this.marbles.push(this.add(new W(this, e.element, e.position, n, r))), e.queueFree(), this.setMessage("\u5B9A\u8EAB\u89E3\u9664\uFF0C\u5F39\u73E0\u6062\u590D\u8FD0\u52A8\u3002"); };
    Q.prototype.forgetMarble = function (e) { this.marbles = this.marbles.filter(function (t) { return t !== e; }); };
    Q.prototype.fuse = function (e, n) { if (e.fused || n.triggered || n.isQueuedForDeletion)
        return; e.fused = !0, n.triggered = !0; var r = ae(e.element, n.element), i = t.J((e.x + n.x) / 2, (e.y + n.y) / 2); this.add(new v(r.color, r.style, { position: i, zIndex: 12 })); var a = this.add(new t.R({ text: r.name, fontSize: 31, fontWeight: "bold", color: r.color, stroke: { color: 1119021, width: 5 }, align: "center", position: i.add(t.J(0, -74)), scale: t.J(.35, .35), zIndex: 15 })); a.createTween().to(a, { scale: t.J(1.15, 1.15) }, .24, t.W.BackOut).to(a, { alpha: 0 }, .62).call(function () { return a.queueFree(); }), this.fusionCounter++, this.boss.openShield(), this.boss.hp = Math.max(0, this.boss.hp - r.damage * .22), this.updateBossBar(), this.anchors = this.anchors.filter(function (e) { return e !== n; }), n.queueFree(), e.linearVelocity = t.J(e.linearVelocity.x * 1.08, e.linearVelocity.y * 1.08), this.setMessage("".concat(r.name, "\uFF01").concat(l[e.element].name, " \u00D7 ").concat(l[n.element].name, "\uFF0C\u8776\u540E\u62A4\u76FE\u5DF2\u5F00\u542F\uFF0C\u8D81\u73B0\u5728\u653B\u51FB\u6708\u6838\u3002")); };
    Q.prototype.updateBossBar = function () { var e = this.boss.hp / 100; this.bossFill.size = t.J(330 * e, 9), this.bossFill.color = this.boss.shieldOpen > 0 ? 16762508 : 10980329, this.bossLabel.text = this.bossDefeated ? "\u5C01\u5370\u89E3\u9664" : this.boss.shieldOpen > 0 ? "\u6708\u6838\u66B4\u9732 \u00B7 ".concat(this.boss.hp, " / 100") : "\u6708\u8680\u62A4\u76FE \u00B7 ".concat(this.boss.hp, " / 100 \u00B7 \u5148\u5236\u9020\u4E00\u6B21\u5143\u7D20\u878D\u5408"); };
    Q.prototype.floatText = function (e, n, r) { var i = this.add(new t.R({ text: n, fontSize: 20, fontWeight: "bold", color: r, stroke: { color: 1119021, width: 4 }, align: "center", position: e, zIndex: 20 })); i.createTween().to(i, { y: i.y - 46, alpha: 0 }, .75).call(function () { return i.queueFree(); }); };
    Q.prototype.setMessage = function (e) { this.message.text = e; };
    Q.prototype.setDiagnostics = function (e) { this.diagnosticLabel.text = e; };
    Q.prototype.resetTrial = function () { this.anchors.forEach(function (e) { return e.queueFree(); }), this.marbles.forEach(function (e) { e.trail.queueFree(), e.queueFree(); }), this.anchors = [], this.marbles = [], this.boss.hp = 100, this.boss.shieldOpen = 0, this.bossDefeated = !1, this.fusionCounter = 0, this.updateBossBar(), this.setMessage("\u8BD5\u70BC\u91CD\u7F6E\u3002\u5148\u53D1\u5C04\u4E00\u9897\u7403\uFF0C\u70B9\u51FB\u7A7A\u767D\u5904\u5B9A\u8EAB\uFF0C\u518D\u7528\u53E6\u4E00\u9897\u7403\u4E3B\u52A8\u649E\u51FB\u3002"); };
    return Q;
}(t.B)), de = { main: Q, design: { width: B, height: V, aspect: "expand" }, background: 527652, physics: { pixelsPerMeter: 50, gravity: t.J(0, 250), velocityIterations: 8, positionIterations: 3 }, maxPhysicsStepsPerFrame: 2, pauseOnBackground: !0, storagePrefix: "marble-quest-pixi:" }; })))(); }
var $;
function pe() { return (pe = e.n((function () { a(), t.I(), t.n(), fe(), $ = "2026-11-23-R4", Object.defineProperty(t.V.prototype, "renderResolution", { configurable: !0, get: function () { var e = Number(this.screen.pixelRatio) || 1; return Math.min(Math.max(e, 2), 3); } }), console.log("[MarbleQuest Pixi][" + $ + "] calling startGame"), t.r(de).then(function (e) { var t = function (e) { return console.log("[MarbleQuest Pixi][" + $ + "] " + e); }, n = e.tree.viewport, r = e.platform.canvas, i = r ? r.width + "x" + r.height : "unknown", a = e.scene, o = "DPR " + n.screen.pixelRatio + "/" + n.renderResolution + "x  CANVAS " + i + "  DESIGN " + n.designWidth + "x" + n.designHeight; t("started; screen=" + n.screen.width + "x" + n.screen.height + " deviceDPR=" + n.screen.pixelRatio + " renderDPR=" + n.renderResolution + " canvas=" + i + " design=" + n.designWidth + "x" + n.designHeight + " scale=" + n.scale.toFixed(3)), a.setDiagnostics(o + "  WAIT FPS"), setInterval(function () { var n = e.frameStats, r = n.fps, i = n.logicAvg, o = n.renderAvg, s = e.tree.getNodesInGroup("marbles").length, c = "FPS " + r.toFixed(0) + "  CPU " + i.toFixed(1) + "ms  GPU " + o.toFixed(1) + "ms  ORBS " + s; a.setDiagnostics(c), t(c), e.resetFrameStats(); }, 1e3); }).catch(function (e) { var t = ""; try {
    t = e instanceof Error ? e.stack || e.message : String(e);
}
catch (e) {
    t = "unknown startGame failure";
} console.error("[MarbleQuest Pixi][" + $ + "] startGame failed: " + t), typeof GameGlobal < "u" && (GameGlobal.__marbleQuestLastError = t); }); })))(); }
function me() { return (me = e.n((function () { n(), t.$(), pe(); })))(); }
me();
