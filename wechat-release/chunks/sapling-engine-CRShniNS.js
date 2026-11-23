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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var e = require("./rolldown-runtime-8PkXcCTM.js"), t = require("./nape-physics-tjC3J-kx.js"), n = require("./sapling-engine-z5rgo-_C.js"), r = require("./sapling-engine-E6YpPtHn.js"), i = require("./sapling-engine-BXH-PsI2.js"), a = require("./sapling-engine-DbC_V8gI.js"), o = require("./sapling-engine-lHNhdQUz.js"), s = require("./sapling-engine-BAPCBAVM.js"), c = require("./sapling-engine-Dihp4nr7.js"), l = require("./sapling-engine-D7PD7dB2.js"), u = require("./sapling-engine-D-hh5wFy.js"), d = require("./sapling-engine-DEUdDAgy.js"), f = require("./sapling-engine-CDClN5Qk.js");
function p(e, t) { var n = e.now(), r = t(), i = n > 0x9184e72a000 ? 1e3 : 1, a = 0, o = !1; return function () { var s = e.now(); if (!o) {
    var e_1 = t() - r;
    if (e_1 >= 1e3) {
        o = !0;
        var t_1 = (s - n) / e_1, r_1 = t_1 > 100 ? 1e3 : 1;
        if (r_1 !== i) {
            var e_2 = s / i + a;
            i = r_1, a = e_2 - s / i, console.warn("[sapling2d] wx.getPerformance().now() unit corrected (ratio ".concat(t_1.toFixed(1), ")"));
        }
    }
} return s / i + a; }; }
var m, h, g;
function _() { return (_ = e.n((function () { m = typeof globalThis < "u" ? globalThis : GameGlobal, h = wx.createCanvas(), typeof h.addEventListener != "function" && (h.addEventListener = function () { }, h.removeEventListener = function () { }), g = h.getContext.bind(h), h.getContext = function (e, t) { var n = g(e, t); if (n && e === "webgl" && !n.__saplingPatched) {
    var e_3 = n.bufferSubData.bind(n);
    n.bufferSubData = function (t, n, r, i, a) { return i === void 0 || typeof (r == null ? void 0 : r.subarray) != "function" ? e_3(t, n, r) : e_3(t, n, r.subarray(i, a === void 0 ? void 0 : i + a)); };
    var _loop_1 = function (e_4) {
        var t_2 = n[e_4].bind(n);
        n[e_4] = function (e, n, r) { n !== void 0 && t_2(e, n, r); };
    };
    for (var _i = 0, _a = ["texParameteri", "texParameterf"]; _i < _a.length; _i++) {
        var e_4 = _a[_i];
        _loop_1(e_4);
    }
    n.__saplingPatched = !0;
} return n; }, m.Intl === void 0 && (m.Intl = {}), m.navigator === void 0 && (m.navigator = { userAgent: "wechatgame", gpu: null }), (m.performance === void 0 || typeof m.performance.now != "function") && (m.performance = { now: p(wx.getPerformance(), function () { return Date.now(); }) }); })))(); }
function v() { return (v = e.n((function () { _(); })))(); }
var y;
function b() { return (b = e.n((function () { n.y(), n.d(), n.s(), n.o(), t.Sr(), t.br(), y = (function (_super) {
    __extends(y, _super);
    function y(e) {
        if (e === void 0) { e = {}; }
        var _this = this;
        var n, r;
        _this = _super.call(this, e) || this, t.xr(_this, "layer", void 0), t.xr(_this, "visible", void 0), _this.layer = (n = e.layer) == null ? 1 : n, _this.visible = (r = e.visible) == null || r;
        return _this;
    }
    Object.defineProperty(y.prototype, "_isCanvasLayer", {
        get: function () { return !0; },
        enumerable: false,
        configurable: true
    });
    y.prototype.dumpProps = function () { return t.yr(t.yr({}, _super.prototype.dumpProps.call(this)), {}, { layer: this.layer, visible: this.visible ? void 0 : !1 }); };
    return y;
}(n.h)); })))(); }
function x(e, t, n) {
    if (e === void 0) { e = 1e3; }
    if (t === void 0) { t = 0; }
    if (n === void 0) { n = !1; }
    if (isNaN(e) || e < 0)
        throw TypeError("Invalid max value");
    if (isNaN(t) || t < 0)
        throw TypeError("Invalid ttl value");
    if (typeof n != "boolean")
        throw TypeError("Invalid resetTtl value");
    return new S(e, t, n);
}
var S;
function C() { return (C = e.n((function () { t.br(), S = (function () {
    function S(e, t, n) {
        if (e === void 0) { e = 0; }
        if (t === void 0) { t = 0; }
        if (n === void 0) { n = !1; }
        this.first = null, this.items = Object.create(null), this.last = null, this.max = e, this.resetTtl = n, this.size = 0, this.ttl = t;
    }
    S.prototype.clear = function () { return this.first = null, this.items = Object.create(null), this.last = null, this.size = 0, this; };
    S.prototype.delete = function (e) { if (this.has(e)) {
        var t_3 = this.items[e];
        delete this.items[e], this.size--, t_3.prev !== null && (t_3.prev.next = t_3.next), t_3.next !== null && (t_3.next.prev = t_3.prev), this.first === t_3 && (this.first = t_3.next), this.last === t_3 && (this.last = t_3.prev);
    } return this; };
    S.prototype.entries = function (e) {
        if (e === void 0) { e = this.keys(); }
        var t = Array(e.length);
        for (var n_1 = 0; n_1 < e.length; n_1++) {
            var r_2 = e[n_1];
            t[n_1] = [r_2, this.get(r_2)];
        }
        return t;
    };
    S.prototype.evict = function (e) {
        if (e === void 0) { e = !1; }
        if (e || this.size > 0) {
            var e_5 = this.first;
            delete this.items[e_5.key], --this.size === 0 ? (this.first = null, this.last = null) : (this.first = e_5.next, this.first.prev = null);
        }
        return this;
    };
    S.prototype.expiresAt = function (e) { var t; return this.has(e) && (t = this.items[e].expiry), t; };
    S.prototype.get = function (e) { var t = this.items[e]; if (t !== void 0) {
        if (this.ttl > 0 && t.expiry <= Date.now()) {
            this.delete(e);
            return;
        }
        return this.moveToEnd(t), t.value;
    } };
    S.prototype.has = function (e) { return e in this.items; };
    S.prototype.moveToEnd = function (e) { this.last !== e && (e.prev !== null && (e.prev.next = e.next), e.next !== null && (e.next.prev = e.prev), this.first === e && (this.first = e.next), e.prev = this.last, e.next = null, this.last !== null && (this.last.next = e), this.last = e, this.first === null && (this.first = e)); };
    S.prototype.keys = function () { var e = Array(this.size), t = this.first, n = 0; for (; t !== null;)
        e[n++] = t.key, t = t.next; return e; };
    S.prototype.setWithEvicted = function (e, n, r) {
        if (r === void 0) { r = this.resetTtl; }
        var i = null;
        if (this.has(e))
            this.set(e, n, !0, r);
        else {
            this.max > 0 && this.size === this.max && (i = t.yr({}, this.first), this.evict(!0));
            var r_3 = this.items[e] = { expiry: this.ttl > 0 ? Date.now() + this.ttl : this.ttl, key: e, prev: this.last, next: null, value: n };
            ++this.size === 1 ? this.first = r_3 : this.last.next = r_3, this.last = r_3;
        }
        return i;
    };
    S.prototype.set = function (e, t, n, r) {
        if (n === void 0) { n = !1; }
        if (r === void 0) { r = this.resetTtl; }
        var i = this.items[e];
        return n || i !== void 0 ? (i.value = t, n === !1 && r && (i.expiry = this.ttl > 0 ? Date.now() + this.ttl : this.ttl), this.moveToEnd(i)) : (this.max > 0 && this.size === this.max && this.evict(!0), i = this.items[e] = { expiry: this.ttl > 0 ? Date.now() + this.ttl : this.ttl, key: e, prev: this.last, next: null, value: t }, ++this.size === 1 ? this.first = i : this.last.next = i, this.last = i), this;
    };
    S.prototype.values = function (e) {
        if (e === void 0) { e = this.keys(); }
        var t = Array(e.length);
        for (var n_2 = 0; n_2 < e.length; n_2++)
            t[n_2] = this.get(e[n_2]);
        return t;
    };
    return S;
}()); })))(); }
function w(e, t) { var n = { cls: e, create: t }, r = N.findIndex(function (t) { return t.cls === e; }); r >= 0 ? N[r] = n : N.push(n); }
function T(e, t) { if (e instanceof n.i)
    return new I(t); if (e instanceof n.p)
    return new te(t); if (e instanceof n.n)
    return new L(t); if (e instanceof n.t)
    return new ne; if (e instanceof n.r)
    return new re(t); if (e instanceof n.a)
    return new R(e, t); for (var n_3 = 0; n_3 < N.length; n_3++) {
    var r_4 = N[n_3];
    if (e instanceof r_4.cls)
        return r_4.create(e, t);
} return null; }
function E(e, t) { if (t === 16777215)
    return e; var n = 0; for (var r_5 = 16; r_5 >= 0; r_5 -= 8)
    n |= Math.round((e >> r_5 & 255) * (t >> r_5 & 255) / 255) << r_5; return n; }
function D(e, n) { var r = e._frame; if (!r)
    return new o.gt({ source: n }); var a = r.rotated ? r.region.height : r.region.width, s = r.rotated ? r.region.width : r.region.height; return new o.gt(t.yr(t.yr({ source: n, frame: new i.g(r.region.x, r.region.y, r.region.width, r.region.height), orig: new i.g(0, 0, r.width, r.height) }, r.trim ? { trim: new i.g(r.trim.x, r.trim.y, a, s) } : {}), r.rotated ? { rotate: 2 } : {})); }
function O() { var e; return (e = H) == null ? H = u._({ name: "silhouette", bits: [u.c, u.n, u.f, { name: "silhouette-bit", fragment: { end: "finalColor = vec4(finalColor.a);" } }] }) : e; }
function k() { var e; return (e = G) == null ? G = u._({ name: "tile-chunk", bits: [u.c, u.n, u.f] }) : e; }
function A(e, t, n, r, i, a) { var o = e.tileSet, s = o.tileSize, c = s + o.spacing, l = o.texture.width, u = o.texture.height, d = t.positions, f = t.uvs, p = e._cells, m = e.width, h = !0; for (var t_4 = 0; t_4 < 16; t_4++) {
    var g_1 = r * 16 + t_4;
    for (var r_6 = 0; r_6 < 16; r_6++) {
        var _1 = n * 16 + r_6, v_1 = (t_4 * 16 + r_6) * 8, y_1 = _1 < m && g_1 < e.height ? p[g_1 * m + _1] : 0;
        if (!y_1) {
            d.fill(0, v_1, v_1 + 8);
            continue;
        }
        h = !1;
        var b_1 = r_6 * s, x_1 = t_4 * s, S_1 = b_1 + s, C_1 = x_1 + s;
        d[v_1] = b_1, d[v_1 + 1] = x_1, d[v_1 + 2] = S_1, d[v_1 + 3] = x_1, d[v_1 + 4] = S_1, d[v_1 + 5] = C_1, d[v_1 + 6] = b_1, d[v_1 + 7] = C_1;
        var w_1 = y_1 - 1, T_1 = o.margin + w_1 % i * c, E_1 = o.margin + Math.floor(w_1 / i) * c, D_1 = (T_1 + a) / l, O_1 = (E_1 + a) / u, k_1 = (T_1 + s - a) / l, A_1 = (E_1 + s - a) / u;
        f[v_1] = D_1, f[v_1 + 1] = O_1, f[v_1 + 2] = k_1, f[v_1 + 3] = O_1, f[v_1 + 4] = k_1, f[v_1 + 5] = A_1, f[v_1 + 6] = D_1, f[v_1 + 7] = A_1;
    }
} return t.getBuffer("aPosition").update(), t.getBuffer("aUV").update(), h; }
function j(e) { e.mesh.destroy(), e.geometry.destroy(); }
function M(e) { return e ? +!!e.clip + ee(e.content) : 0; }
function ee(e) { return e ? e.overlay ? 2 : 1 : 0; }
var N, P, F, I, L, te, ne, re, R, z, B, V, H, U, W, G, K;
function q() { return (q = e.n((function () { n.y(), n.o(), u.d(), u.t(), f.t(), l.o(), l.r(), t.Sr(), t.br(), N = [], P = "__content", F = "__flash", I = (function () {
    function I(e) {
        t.xr(this, "display", void 0), t.xr(this, "overlay", null), t.xr(this, "_resource", void 0), t.xr(this, "_pixelArt", void 0), this.display = new l.E({ label: P, roundPixels: e.pixelArt }), this._pixelArt = e.pixelArt;
    }
    I.prototype.sync = function (e, t, n) { var r, i, a, s; var c = (r = e.texture) == null ? void 0 : r._resource; if (!n && c === this._resource)
        return; this._resource = c; var u = this.display; u.texture = e.texture ? t.textures.get(e.texture) : o.gt.EMPTY; var d = e.centered ? (i = (a = e.texture) == null ? void 0 : a.pivot) == null ? null : i : null; d ? u.anchor.set(d.x, d.y) : u.anchor.set(e.centered ? .5 : 0), u.position.set(e.offset.x, e.offset.y), u.scale.set(e.flipH ? -1 : 1, e.flipV ? -1 : 1), u.tint = e.selfModulate; var f = e.flash; if (f <= 0 && !this.overlay)
        return; var p = (s = this.overlay) == null ? this.overlay = new l.E({ label: F, roundPixels: this._pixelArt }) : s; p.visible = f > 0 && e.texture !== null, p.visible && (p.texture = t.textures.flash(e.texture), p.anchor.copyFrom(u.anchor), p.position.copyFrom(u.position), p.scale.copyFrom(u.scale), p.tint = e.flashColor, p.alpha = f); };
    I.prototype.destroy = function () { var e; this.display.destroy(), (e = this.overlay) == null || e.destroy(); };
    return I;
}()), L = (function () {
    function L(e) {
        t.xr(this, "display", void 0), t.xr(this, "_resource", void 0), this.display = new l.t({ label: P, texture: o.gt.EMPTY, roundPixels: e.pixelArt });
    }
    L.prototype.sync = function (e, t, n) { var r; var i = (r = e.texture) == null ? void 0 : r._resource; if (!n && i === this._resource)
        return; this._resource = i; var a = this.display; a.texture = e.texture ? t.textures.get(e.texture) : o.gt.EMPTY; var s = e.margins; a.leftWidth = s.left, a.topHeight = s.top, a.rightWidth = s.right, a.bottomHeight = s.bottom, a.setSize(e.size.x, e.size.y), a.tint = e.selfModulate; };
    L.prototype.destroy = function () { this.display.destroy(); };
    return L;
}()), te = (function () {
    function te(e) {
        t.xr(this, "display", void 0), this.display = new l.E({ label: P, texture: o.gt.WHITE, roundPixels: e.pixelArt });
    }
    te.prototype.sync = function (e, t, n) { if (!n)
        return; var r = this.display, i = e.size; r.width = i.x, r.height = i.y, r.tint = E(e.color, e.selfModulate); };
    te.prototype.destroy = function () { this.display.destroy(); };
    return te;
}()), ne = (function () {
    function ne() {
        t.xr(this, "display", new l.h({ label: P })), t.xr(this, "_styleKey", void 0), t.xr(this, "_resolution", void 0);
    }
    ne.prototype.sync = function (e, n, r) { if (!r && this._resolution === n.textResolution)
        return; var i = this.display, a = t.yr(t.yr(t.yr({ fontSize: e.fontSize, fill: e.color, fontFamily: e.fontFamily, fontWeight: e.fontWeight, align: e.align }, e.stroke ? { stroke: { color: e.stroke.color, width: e.stroke.width } } : {}), e.wrapWidth === null ? {} : { wordWrap: !0, wordWrapWidth: e.wrapWidth }), e.lineHeight === null ? {} : { lineHeight: e.lineHeight }), o = JSON.stringify(a); o !== this._styleKey && (i.style = a, this._styleKey = o), i.text = e.text, this._resolution !== n.textResolution && (i.resolution = n.textResolution, this._resolution = n.textResolution), i.anchor.set(B[e.align], B[e.verticalAlign]), i.tint = e.selfModulate; };
    ne.prototype.destroy = function () { this.display.destroy(); };
    return ne;
}()), re = (function () {
    function re(e) {
        t.xr(this, "display", void 0), t.xr(this, "_pool", []), t.xr(this, "_texture", null), t.xr(this, "_resource", null), t.xr(this, "_tint", -1), this.display = new l.i({ label: P, dynamicProperties: { position: !0, vertex: !0, color: !0, rotation: !1, uvs: !1 }, roundPixels: e.pixelArt });
    }
    re.prototype.sync = function (e, t) { var r; if (!e.visible)
        return; var i = this.display, a = e.texture, s = a == null ? void 0 : a._resource, c = a ? e._count : 0, u = this._pool; if (a !== this._texture || s !== this._resource) {
        this._texture = a, this._resource = s;
        var e_6 = a ? t.textures.get(a) : o.gt.EMPTY;
        i.texture = e_6;
        for (var t_5 = 0; t_5 < u.length; t_5++)
            u[t_5].texture = e_6;
        i.update();
    } var d = e.selfModulate; if (d !== this._tint) {
        this._tint = d;
        for (var e_7 = 0; e_7 < u.length; e_7++)
            u[e_7].tint = d;
    } for (; u.length < c;)
        u.push(new l.s({ texture: (r = i.texture) == null ? o.gt.EMPTY : r, anchorX: .5, anchorY: .5, tint: d })); if (e.localCoords)
        (i.x !== 0 || i.y !== 0 || i.rotation !== 0 || i.scale.x !== 1 || i.scale.y !== 1 || i.skew.x !== 0 || i.skew.y !== 0) && i.setFromMatrix(z.identity());
    else {
        if (e._computeGlobal(), !n.b(e._global, z)) {
            i.visible = !1;
            return;
        }
        i.visible = !0, i.setFromMatrix(z);
    } var f = i.particleChildren; if (f.length !== c) {
        for (var e_8 = f.length; e_8 < c; e_8++)
            f[e_8] = u[e_8];
        f.length = c, i.update();
    } var p = e._px, m = e._py, h = e._age, g = e._life, _ = e.scaleStart, v = e.scaleEnd - _, y = e.alphaStart, b = e.alphaEnd - y; for (var e_9 = 0; e_9 < c; e_9++) {
        var t_6 = u[e_9], n_4 = h[e_9] / g[e_9], r_7 = _ + v * n_4;
        t_6.x = p[e_9], t_6.y = m[e_9], t_6.scaleX = r_7, t_6.scaleY = r_7, t_6.alpha = y + b * n_4;
    } };
    re.prototype.destroy = function () { this.display.destroy(); };
    return re;
}()), R = (function () {
    function R(e, n) {
        t.xr(this, "display", void 0), t.xr(this, "_view", void 0), t.xr(this, "_tileMaps", void 0), this._tileMaps = n.tileMaps, this._view = n.tileMaps.createView(e, P), this.display = this._view.content;
    }
    R.prototype.sync = function (e, t) { e.visible && this._tileMaps.sync(e, this._view, t.visibleRect, t.offsetX, t.offsetY); };
    R.prototype.destroy = function () { this._tileMaps.destroyView(this._view); };
    return R;
}()), z = new i.b, B = { left: 0, top: 0, center: .5, right: 1, bottom: 1 }, V = (function () {
    function V(e, n) {
        if (n === void 0) { n = null; }
        t.xr(this, "_pixelArt", void 0), t.xr(this, "_renderer", void 0), t.xr(this, "_silhouettes", new Map), t.xr(this, "_flashTextures", new Map), t.xr(this, "_sources", new Map), t.xr(this, "_textures", new Map), this._pixelArt = e, this._renderer = n;
    }
    Object.defineProperty(V.prototype, "silhouetteCount", {
        get: function () { return this._silhouettes.size; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(V.prototype, "textureCount", {
        get: function () { return this._textures.size; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(V.prototype, "sourceCount", {
        get: function () { return this._sources.size; },
        enumerable: false,
        configurable: true
    });
    V.prototype.get = function (e) { var t; var n = e._resource, r = this._textures.get(e); if (r && r.resource === n)
        return r.texture; if (r && (r.texture.destroy(!1), this._textures.delete(e)), !n)
        return o.gt.EMPTY; var i = D(e, this._imageSource((t = e._base) == null ? e : t, n)); return this._textures.set(e, { resource: n, texture: i }), i; };
    V.prototype.flash = function (e) { var t; var n = e._resource, r = this._flashTextures.get(e); if (r && r.resource === n)
        return r.texture; if (r && (r.texture.destroy(!1), this._flashTextures.delete(e)), !n || !this._renderer)
        return o.gt.EMPTY; var i = D(e, this._silhouette((t = e._base) == null ? e : t, n)); return this._flashTextures.set(e, { resource: n, texture: i }), i; };
    V.prototype.releaseUnloaded = function () { for (var _i = 0, _a = this._flashTextures; _i < _a.length; _i++) {
        var _b = _a[_i], e_10 = _b[0], t_7 = _b[1];
        t_7.resource !== e_10._resource && (t_7.texture.destroy(!1), this._flashTextures.delete(e_10));
    } for (var _c = 0, _d = this._silhouettes; _c < _d.length; _c++) {
        var _f = _d[_c], e_11 = _f[0], t_8 = _f[1];
        t_8.resource !== e_11._resource && (t_8.target.destroy(!0), this._silhouettes.delete(e_11));
    } for (var _g = 0, _h = this._textures; _g < _h.length; _g++) {
        var _j = _h[_g], e_12 = _j[0], t_9 = _j[1];
        t_9.resource !== e_12._resource && (t_9.texture.destroy(!1), this._textures.delete(e_12));
    } for (var _k = 0, _l = this._sources; _k < _l.length; _k++) {
        var _m = _l[_k], e_13 = _m[0], t_10 = _m[1];
        t_10.resource !== e_13._resource && (t_10.source.destroy(), this._sources.delete(e_13));
    } };
    V.prototype.destroy = function () { for (var _i = 0, _a = this._flashTextures.values(); _i < _a.length; _i++) {
        var e_14 = _a[_i];
        e_14.texture.destroy(!1);
    } for (var _b = 0, _c = this._silhouettes.values(); _b < _c.length; _b++) {
        var e_15 = _c[_b];
        e_15.target.destroy(!0);
    } this._flashTextures.clear(), this._silhouettes.clear(); for (var _d = 0, _f = this._textures.values(); _d < _f.length; _d++) {
        var e_16 = _f[_d];
        e_16.texture.destroy(!1);
    } for (var _g = 0, _h = this._sources.values(); _g < _h.length; _g++) {
        var e_17 = _h[_g];
        e_17.source.destroy();
    } this._textures.clear(), this._sources.clear(); };
    V.prototype._silhouette = function (e, n) { var r = this._silhouettes.get(e); if (r && r.resource === n)
        return r.target.source; r == null || r.target.destroy(!0); var a = this._imageSource(e, n), s = a.width, c = a.height, u = o.x.create(t.yr({ width: s, height: c }, this._pixelArt ? { scaleMode: "nearest" } : {})), d = new l.x({ positions: new Float32Array([0, 0, s, 0, s, c, 0, c]), uvs: new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), indices: new Uint16Array([0, 1, 2, 0, 2, 3]) }), f = new o.q({ glProgram: O(), resources: { uTexture: a, uSampler: a.style, textureUniforms: { uTextureMatrix: { type: "mat3x3<f32>", value: new i.b } } } }), p = new l.y({ geometry: d, shader: f, texture: new o.gt({ source: a }) }); return this._renderer.render({ container: p, target: u, clear: !0, clearColor: [0, 0, 0, 0] }), p.destroy(), d.destroy(), f.destroy(), this._silhouettes.set(e, { resource: n, target: u }), u.source; };
    V.prototype._imageSource = function (e, n) { var r = this._sources.get(e); if (r && r.resource === n)
        return r.source; r == null || r.source.destroy(); var i = new o.ct(t.yr(t.yr({ resource: n }, this._pixelArt ? { scaleMode: "nearest" } : {}), e._premultiplied ? { alphaMode: "premultiplied-alpha" } : {})); return this._sources.set(e, { resource: n, source: i }), i; };
    return V;
}()), H = null, U = (function () {
    function U(e) {
        t.xr(this, "_pixelArt", void 0), t.xr(this, "_compileShaders", void 0), t.xr(this, "_textures", void 0), t.xr(this, "_shaders", new Map), t.xr(this, "_global", n.v()), t.xr(this, "_cx0", 0), t.xr(this, "_cy0", 0), t.xr(this, "_cx1", -1), t.xr(this, "_cy1", -1), this._pixelArt = e.pixelArt, this._compileShaders = e.compileShaders, this._textures = e.textures;
    }
    Object.defineProperty(U.prototype, "shaderCount", {
        get: function () { return this._shaders.size; },
        enumerable: false,
        configurable: true
    });
    U.prototype.createView = function (e, t) { return { content: new s.m({ label: t }), chunks: Array(e._chunksX * e._chunksY).fill(null), resource: null, x0: 0, y0: 0, x1: -1, y1: -1 }; };
    U.prototype.destroyView = function (e) { for (var _i = 0, _a = e.chunks; _i < _a.length; _i++) {
        var t_11 = _a[_i];
        t_11 && j(t_11);
    } e.content.destroy(); };
    U.prototype.sync = function (e, t, n, r, i) { var a = e.tileSet.texture._resource, o = e.tileSet.columns; if (!a || o === 0) {
        t.content.visible = !1;
        return;
    } if (t.content.visible = !0, t.resource !== a) {
        for (var e_18 = 0; e_18 < t.chunks.length; e_18++) {
            var n_5 = t.chunks[e_18];
            n_5 && j(n_5), t.chunks[e_18] = null;
        }
        t.resource = a, t.x0 = 0, t.x1 = -1;
    } var s = this._chunkRange(e, n, r, i), c = s ? this._cx0 : 0, l = s ? this._cy0 : 0, u = s ? this._cx1 : -1, d = s ? this._cy1 : -1, f = e._chunksX; for (var e_19 = t.y0; e_19 <= t.y1; e_19++)
        for (var n_6 = t.x0; n_6 <= t.x1; n_6++) {
            if (n_6 >= c && n_6 <= u && e_19 >= l && e_19 <= d)
                continue;
            var r_8 = t.chunks[e_19 * f + n_6];
            r_8 && (r_8.mesh.visible = !1);
        } t.x0 = c, t.y0 = l, t.x1 = u, t.y1 = d; for (var n_7 = l; n_7 <= d; n_7++)
        for (var r_9 = c; r_9 <= u; r_9++) {
            var i_1 = n_7 * f + r_9, a_1 = t.chunks[i_1];
            a_1 || (a_1 = this._createChunk(e, t, r_9, n_7), t.chunks[i_1] = a_1);
            var s_1 = e._chunkVersions[i_1];
            a_1.version !== s_1 && (a_1.version = s_1, a_1.empty = A(e, a_1.geometry, r_9, n_7, o, this._pixelArt ? 0 : .5)), a_1.mesh.visible = !a_1.empty;
        } };
    U.prototype.releaseUnloaded = function () { for (var _i = 0, _a = this._shaders; _i < _a.length; _i++) {
        var _b = _a[_i], e_20 = _b[0], t_12 = _b[1];
        t_12.resource !== e_20._resource && (t_12.shader.destroy(), this._shaders.delete(e_20));
    } };
    U.prototype.destroy = function () { for (var _i = 0, _a = this._shaders.values(); _i < _a.length; _i++) {
        var e_21 = _a[_i];
        e_21.shader.destroy();
    } this._shaders.clear(); };
    U.prototype._chunkRange = function (e, t, r, i) { var a = this._global; if (e._computeGlobalInto(a), !n.b(a, a))
        return !1; var o = 1 / 0, s = 1 / 0, c = -1 / 0, l = -1 / 0; for (var e_22 = 0; e_22 < 4; e_22++) {
        var n_8 = (e_22 & 1 ? t.right : t.left) - r, u_1 = (e_22 & 2 ? t.bottom : t.top) - i, d_1 = a.a * n_8 + a.c * u_1 + a.tx, f_1 = a.b * n_8 + a.d * u_1 + a.ty;
        d_1 < o && (o = d_1), d_1 > c && (c = d_1), f_1 < s && (s = f_1), f_1 > l && (l = f_1);
    } var u = 16 * e.tileSet.tileSize; return this._cx0 = Math.max(0, Math.floor(o / u)), this._cy0 = Math.max(0, Math.floor(s / u)), this._cx1 = Math.min(e._chunksX - 1, Math.floor(c / u)), this._cy1 = Math.min(e._chunksY - 1, Math.floor(l / u)), this._cx0 <= this._cx1 && this._cy0 <= this._cy1; };
    U.prototype._createChunk = function (e, t, n, r) { var i = this._textures.get(e.tileSet.texture), a = new l.x({ positions: new Float32Array(2048), uvs: new Float32Array(2048), indices: W }), o = new l.y({ geometry: a, texture: i, shader: this._shader(e.tileSet.texture, i), roundPixels: this._pixelArt }), s = 16 * e.tileSet.tileSize; return o.position.set(n * s, r * s), t.content.addChild(o), { mesh: o, geometry: a, version: -1, empty: !0 }; };
    U.prototype._shader = function (e, t) { var n = this._shaders.get(e); if (n && n.resource === e._resource)
        return n.shader; n == null || n.shader.destroy(); var r = new o.q({ glProgram: this._compileShaders ? k() : void 0, resources: { uTexture: t.source, uSampler: t.source.style, textureUniforms: { uTextureMatrix: { type: "mat3x3<f32>", value: new i.b } } } }); return this._shaders.set(e, { resource: e._resource, shader: r }), r; };
    return U;
}()), W = (function () { var e = new Uint16Array(1536); for (var t_13 = 0; t_13 < 256; t_13++)
    e.set([t_13 * 4, t_13 * 4 + 1, t_13 * 4 + 2, t_13 * 4, t_13 * 4 + 2, t_13 * 4 + 3], t_13 * 6); return e; })(), G = null, K = (function () {
    function e(e, r) {
        t.xr(this, "_renderer", void 0), t.xr(this, "_root", new s.m), t.xr(this, "_sceneContainer", new s.m), t.xr(this, "_worldContainer", new s.m), t.xr(this, "_mask", new d.t), t.xr(this, "_viewportVersion", -1), t.xr(this, "_views", new Map), t.xr(this, "_frame", 0), t.xr(this, "_seen", 0), t.xr(this, "_orderedByDepth", []), t.xr(this, "_textures", void 0), t.xr(this, "_ctx", void 0), t.xr(this, "_layers", new Map), t.xr(this, "_layerOrder", []), t.xr(this, "_sceneOrder", []), t.xr(this, "_hiddenLayers", 0), t.xr(this, "_tileMaps", void 0), t.xr(this, "_pixelArt", void 0), this._renderer = e, this._pixelArt = r, this._textures = new V(r, e), this._tileMaps = new U({ pixelArt: r, compileShaders: !!e, textures: this._textures }), this._ctx = { pixelArt: r, textures: this._textures, tileMaps: this._tileMaps, textResolution: 1, visibleRect: new n._(0, 0, 0, 0), offsetX: 0, offsetY: 0 }, this._worldContainer.sortableChildren = !0, this._worldContainer.label = "__world", this._sceneContainer.addChild(this._worldContainer), this._root.addChild(this._sceneContainer);
    }
    e._createForSyncTests = function (t) {
        if (t === void 0) { t = {}; }
        var n;
        return new e(null, (n = t.pixelArt) != null && n);
    };
    Object.defineProperty(e.prototype, "_stage", {
        get: function () { return this._worldContainer; },
        enumerable: false,
        configurable: true
    });
    e.create = function (t) {
        return __awaiter(this, void 0, void 0, function () { var n, r, i, a, o, s, l; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    i = new c.a, a = (n = t.quietWarnings) == null ? [] : n, o = console.warn;
                    a.length && (console.warn = function () {
                        var e = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            e[_i] = arguments[_i];
                        }
                        return a.some(function (t) { return e.some(function (e) { return typeof e == "string" && t.test(e); }); }) ? console.debug.apply(console, e) : o.apply(void 0, e);
                    });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, , 3, 4]);
                    return [4, i.init({ canvas: t.canvas, width: 1, height: 1, autoDensity: !0, background: (s = t.background) == null ? 0 : s, preferWebGLVersion: (l = t.webglVersion) == null ? 2 : l, skipExtensionImports: !0, antialias: !1 })];
                case 2:
                    _a.sent();
                    return [3, 4];
                case 3:
                    console.warn = o;
                    return [7];
                case 4: return [2, new e(i, (r = t.pixelArt) != null && r)];
            }
        }); });
    };
    e.prototype.render = function (e) { this.sync(e), this._renderer.render(this._root); };
    e.prototype.sync = function (e) {
        var _this = this;
        this._releaseUnloadedTextures(), this._syncViewport(e.viewport), this._syncCamera(e.viewport);
        var t = ++this._frame;
        this._seen = 0, this._layerOrder.length = 0, this._syncChildren(e._topLevel(), this._worldContainer, 0, null), this._syncLayers(t), this._seen !== this._views.size && this._views.forEach(function (e, n) { e.frame !== t && _this._destroyView(n, e); });
    };
    e.prototype._syncCamera = function (e) { var t = e.canvasOffsetX, n = e.canvasOffsetY; if (this._pixelArt) {
        var r_10 = e.scale * e.renderResolution;
        t = Math.round(t * r_10) / r_10, n = Math.round(n * r_10) / r_10;
    } var r = this._ctx; r.visibleRect = e.visibleRect, r.offsetX = t, r.offsetY = n, this._worldContainer.position.set(t, n); };
    e.prototype._syncViewport = function (e) { var t; if (e._version === this._viewportVersion)
        return; this._viewportVersion = e._version; var _a = e.screen, n = _a.width, r = _a.height; if ((t = this._renderer) == null || t.resize(n, r, e.renderResolution), this._ctx.textResolution = e.renderResolution * e.scale, this._sceneContainer.scale.set(e.scale), this._sceneContainer.position.set(e.offset.x, e.offset.y), e.aspect === "keep") {
        var t_14 = e.offset;
        this._mask.clear().rect(t_14.x, t_14.y, e.designWidth * e.scale, e.designHeight * e.scale).fill(16777215), this._mask.parent || this._root.addChild(this._mask), this._sceneContainer.mask = this._mask;
    } };
    e.prototype.destroy = function () { var e; for (var _i = 0, _a = this._views; _i < _a.length; _i++) {
        var _b = _a[_i], e_23 = _b[0], t_15 = _b[1];
        this._destroyView(e_23, t_15);
    } for (var _c = 0, _d = this._layers.values(); _c < _d.length; _c++) {
        var e_24 = _d[_c];
        e_24.container.destroy({ children: !1 });
    } this._layers.clear(), this._tileMaps.destroy(), this._textures.destroy(), (e = this._renderer) == null || e.destroy(); };
    e.prototype._syncChildren = function (e, t, n, r) { var i, a, o, s; var c = (a = (i = this._orderedByDepth)[n]) == null ? i[n] = [] : a; c.length = 0; for (var t_16 = 0; t_16 < e.length; t_16++)
        this._visit(e[t_16], c, n); var l = t.children, u = (o = r == null ? void 0 : r.clip) == null ? null : o, d = (s = r == null ? void 0 : r.content) == null ? null : s, f = M(r), p = l.length === f + c.length, m = 0; p && u && (p = l[m++] === u), p && d && (p = l[m++] === d.display), p && d != null && d.overlay && (p = l[m++] === d.overlay); for (var e_25 = 0; p && e_25 < c.length; e_25++)
        p = l[f + e_25] === c[e_25]; if (!p) {
        t.removeChildren(), u && t.addChild(u), d && t.addChild(d.display), d != null && d.overlay && t.addChild(d.overlay);
        for (var e_26 = 0; e_26 < c.length; e_26++)
            t.addChild(c[e_26]);
    } };
    e.prototype._visit = function (e, t, r) { var i = e.children; if (e._isCanvasLayer) {
        this._visitLayer(e, r);
        return;
    } if (!(e instanceof n.g)) {
        for (var e_27 = 0; e_27 < i.length; e_27++)
            this._visit(i[e_27], t, r);
        return;
    } var a = this._syncNode(e); t.push(a.container), (i.length > 0 || a.container.children.length !== M(a)) && this._syncChildren(i, a.container, r + 1, a); };
    e.prototype._visitLayer = function (e, t) { var n = this._layers.get(e); if (!n) {
        var t_17 = new s.m({ label: e.name });
        t_17.sortableChildren = !0, n = { container: t_17, frame: 0 }, this._layers.set(e, n);
    } n.frame = this._frame, n.container.visible = e.visible && this._hiddenLayers === 0, this._layerOrder.push(e); var r = this._ctx, i = r.offsetX, a = r.offsetY; r.offsetX = 0, r.offsetY = 0, e.visible || this._hiddenLayers++, this._syncChildren(e.children, n.container, t + 1, null), e.visible || this._hiddenLayers--, r.offsetX = i, r.offsetY = a; };
    e.prototype._syncLayers = function (e) {
        var _this = this;
        var t = this._layerOrder;
        if (t.length === 0 && this._layers.size === 0)
            return;
        n.S(t);
        var r = n.w(t), i = this._sceneOrder;
        i.length = 0;
        for (var e_28 = 0; e_28 < t.length; e_28++)
            e_28 === r && i.push(this._worldContainer), i.push(this._layers.get(t[e_28]).container);
        r === t.length && i.push(this._worldContainer);
        var a = this._sceneContainer, o = a.children.length === i.length;
        for (var e_29 = 0; o && e_29 < i.length; e_29++)
            o = a.children[e_29] === i[e_29];
        if (!o) {
            a.removeChildren();
            for (var e_30 = 0; e_30 < i.length; e_30++)
                a.addChild(i[e_30]);
        }
        this._layers.size !== t.length && this._layers.forEach(function (t, n) { t.frame !== e && (t.container.removeFromParent(), t.container.destroy({ children: !1 }), _this._layers.delete(n)); });
    };
    e.prototype._syncNode = function (e) { var t; var n = this._views.get(e); if (!n) {
        var t_18 = new s.m({ label: e.name });
        t_18.sortableChildren = !0;
        var r_11 = T(e, this._ctx);
        r_11 && t_18.addChild(r_11.display), n = { container: t_18, transformVersion: -1, version: -1, frame: 0, content: r_11, clip: null, clipRect: null }, this._views.set(e, n), e._view = t_18;
    } n.frame = this._frame, this._seen++; var r = n.container; if (n.transformVersion !== e._transformVersion) {
        n.transformVersion = e._transformVersion, r.position.set(e.x, e.y), r.rotation = e.rotation;
        var t_19 = e.scale;
        r.scale.set(t_19.x, t_19.y);
    } var i = n.version !== e._version; return i && (n.version = e._version, r.visible = e.visible, r.zIndex = e.zIndex, r.alpha = e.alpha, r.tint = e.modulate, r.blendMode = e.blendMode, e.clipRect !== n.clipRect && this._syncClip(e, n)), (t = n.content) == null || t.sync(e, this._ctx, i), n; };
    e.prototype._syncClip = function (e, t) { var n = e.clipRect; t.clipRect = n; var r = t.container; if (!n) {
        var e_31 = t.clip;
        e_31 && (r.mask = null, e_31.removeFromParent(), e_31.destroy(), t.clip = null);
        return;
    } var i = t.clip; i || (i = new d.t({ label: "__clip" }), t.clip = i, r.addChildAt(i, 0), r.mask = i), i.clear().rect(n.x, n.y, n.width, n.height).fill(16777215); };
    e.prototype._releaseUnloadedTextures = function () { this._tileMaps.releaseUnloaded(), this._textures.releaseUnloaded(); };
    Object.defineProperty(e.prototype, "_textureCount", {
        get: function () { return this._textures.textureCount; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "_tileShaderCount", {
        get: function () { return this._tileMaps.shaderCount; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "_sourceCount", {
        get: function () { return this._textures.sourceCount; },
        enumerable: false,
        configurable: true
    });
    e.prototype._destroyView = function (e, t) { var n; t.container.removeFromParent(), (n = t.content) == null || n.destroy(), t.clip && (t.container.mask = null, t.clip.destroy(), t.clip = null), t.container.destroy({ children: !1 }), this._views.delete(e), e._view === t.container && (e._view = null); };
    return e;
}()); })))(); }
function ie(e) { if (e.__saplingMetricsPatched)
    return; e.__saplingMetricsPatched = !0; var t = e.measureText.bind(e); e.measureText = function (n) { var r, i, a; var o = t(n); if (typeof o.actualBoundingBoxAscent == "number")
    return o; var s = ae(e.font), c = (r = o.width) == null ? 0 : r; return { width: c, fontBoundingBoxAscent: o.fontBoundingBoxAscent, fontBoundingBoxDescent: o.fontBoundingBoxDescent, actualBoundingBoxAscent: (i = o.fontBoundingBoxAscent) == null ? s * Y : i, actualBoundingBoxDescent: (a = o.fontBoundingBoxDescent) == null ? s * X : a, actualBoundingBoxLeft: 0, actualBoundingBoxRight: c }; }; }
function ae(e) { var t = /(\d+(?:\.\d+)?)px/.exec(e); return t ? Number(t[1]) : 10; }
function oe() { return Z != null || (Z = wx.createCanvas().getContext("2d")), Object.getPrototypeOf(Z); }
function se(e) { return /^https?:\/\//.test(e); }
function J(e, t) {
    var _this = this;
    var n = function () { return typeof t == "string" ? t : ce(t); };
    return { ok: e >= 200 && e < 300, status: e, json: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, JSON.parse(n())];
        }); }); }, text: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, n()];
        }); }); }, arrayBuffer: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, typeof t == "string" ? le(t) : t];
        }); }); }, blob: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            throw Error("[sapling2d] Blob is not supported on WeChat");
        }); }); } };
}
function ce(e) { var t = new Uint8Array(e), n = ""; for (var e_32 = 0; e_32 < t.length; e_32++)
    n += String.fromCharCode(t[e_32]); return decodeURIComponent(escape(n)); }
function le(e) { var t = unescape(encodeURIComponent(e)), n = new Uint8Array(t.length); for (var e_33 = 0; e_33 < t.length; e_33++)
    n[e_33] = t.charCodeAt(e_33); return n.buffer; }
function ue() { return { setVolume: function () { }, stop: function () { }, onEnded: function (e) { return void Promise.resolve().then(e); } }; }
function de(e, t) { var n = function (e) { return function (n) { for (var _i = 0, _a = n.changedTouches; _i < _a.length; _i++) {
    var r_12 = _a[_i];
    t({ type: e, pointerId: r_12.identifier, x: r_12.clientX, y: r_12.clientY });
} }; }, r = n("pointerdown"), i = n("pointermove"), a = n("pointerup"), o = n("pointercancel"); return e.onTouchStart(r), e.onTouchMove(i), e.onTouchEnd(a), e.onTouchCancel(o), function () { var t, n, s, c; (t = e.offTouchStart) == null || t.call(e, r), (n = e.offTouchMove) == null || n.call(e, i), (s = e.offTouchEnd) == null || s.call(e, a), (c = e.offTouchCancel) == null || c.call(e, o); }; }
function fe(e) {
    return __awaiter(this, void 0, void 0, function () { var i, a; return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                r.N.set(me), $ = new xe;
                return [4, K.create(t.yr(t.yr({ canvas: $.canvas, webglVersion: 1, quietWarnings: [/does not support 32 index buffer/] }, e.background === void 0 ? {} : { background: e.background }), e.pixelArt ? { pixelArt: !0 } : {}))];
            case 1:
                a = _a.sent();
                return [2, n.c.create(t.yr(t.yr({}, e), {}, { plugins: __spreadArray([n.f()], (i = e.plugins) == null ? [] : i, true), platform: $, renderer: a, start: !0 }))];
        }
    }); });
}
var Y, X, Z, pe, me, Q, he, ge, _e, ve, ye, be, xe, $;
function Se() { return (Se = e.n((function () {
    var _a;
    n.d(), q(), _(), f.t(), a.t(), t.Sr(), t.br(), Y = .82, X = .22, Z = null, pe = (_a = {}, _a[Symbol.hasInstance] = function (e) { return !!e && typeof e.getParameter == "function" && typeof e.createVertexArray != "function"; }, _a), me = { createCanvas: function (e, t) { var n = wx.createCanvas(); e !== void 0 && (n.width = e), t !== void 0 && (n.height = t); var r = n.getContext.bind(n); return n.getContext = function (e, t) { var n = r(e, t); return e === "2d" && n && ie(n), n; }, n; }, createImage: function () { return wx.createImage(); }, getCanvasRenderingContext2D: function () { return ({ prototype: oe() }); }, getWebGLRenderingContext: function () { return pe; }, getNavigator: function () { return ({ userAgent: "wechatgame", gpu: null }); }, getBaseUrl: function () { return ""; }, getFontFaceSet: function () { return null; }, fetch: (function (e) { var t = String(e); return new Promise(function (e, n) { se(t) ? wx.request({ url: t, responseType: "arraybuffer", success: function (t) { return e(J(t.statusCode, t.data)); }, fail: function (e) { return n(Error(e.errMsg)); } }) : wx.getFileSystemManager().readFile({ filePath: t.replace(/^\.?\//, ""), success: function (t) { return e(J(200, t.data)); }, fail: function (e) { return n(Error(e.errMsg)); } }); }); }), parseXML: function () { throw Error("[sapling2d] parseXML is not supported on WeChat"); } }, Q = 2, he = 1e3, ge = 4294967295, _e = (function () {
        function class_1(e, n) {
            var r;
            t.xr(this, "_wx", void 0), t.xr(this, "_main", void 0), t.xr(this, "_sub", void 0), t.xr(this, "_loading", null), t.xr(this, "_loaded", !1), this._wx = e, this._main = n ? new Set(n.main) : null, this._sub = (r = n == null ? void 0 : n.subpackage) == null ? null : r;
        }
        class_1.prototype.inSubpackage = function (e) { return this._sub !== null && this._main !== null && !this._main.has(e); };
        class_1.prototype.resolve = function (e) {
            var _this = this;
            return this.inSubpackage(e) ? this._loading ? this._loading.then(function () { return _this._subPath(e); }) : Promise.reject(Error(this._tooEarly(e))) : Promise.resolve("assets/".concat(e));
        };
        class_1.prototype.resolveNow = function (e) { if (!this.inSubpackage(e))
            return "assets/".concat(e); if (!this._loaded)
            throw Error(this._tooEarly(e)); return this._subPath(e); };
        class_1.prototype.prepare = function (e) { return this._loading || (this._loading = this._sub ? this._download(this._sub.name, e) : Promise.resolve()), this._loading; };
        class_1.prototype._download = function (e, t) {
            return __awaiter(this, void 0, void 0, function () {
                var n, r, t_20, n_9;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            n = 0, r = function (e) { var r = e.totalBytesExpectedToWrite; if (!(r > 0 && r < ge) || !(e.totalBytesWritten >= 0))
                                return; var i = Math.min(1, e.totalBytesWritten / r); i > n && t(n = i); };
                            t_20 = 0;
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 5]);
                            return [4, new Promise(function (t, n) { var i, a; (i = _this._wx.loadSubpackage({ name: e, success: t, fail: function (e) { return n(Error(e.errMsg)); } })) == null || (a = i.onProgressUpdate) == null || a.call(i, r); })];
                        case 2:
                            _a.sent();
                            return [3, 6];
                        case 3:
                            n_9 = _a.sent();
                            if (t_20 >= Q)
                                throw Error("[sapling2d] failed to download the asset subpackage \"".concat(e, "\" after 3 attempts: ").concat(n_9 instanceof Error ? n_9.message : String(n_9)));
                            console.warn("[sapling2d] downloading the asset subpackage \"".concat(e, "\" failed, retrying: ").concat(n_9 instanceof Error ? n_9.message : String(n_9)));
                            return [4, new Promise(function (e) { return setTimeout(e, he); })];
                        case 4:
                            _a.sent();
                            return [3, 5];
                        case 5:
                            t_20++;
                            return [3, 1];
                        case 6:
                            this._loaded = !0, n < 1 && t(1);
                            return [2];
                    }
                });
            });
        };
        class_1.prototype._subPath = function (e) { return "".concat(this._sub.root).concat(e); };
        class_1.prototype._tooEarly = function (e) { return "[sapling2d] \"".concat(e, "\" is in the asset subpackage, which is downloaded after the loading screen appears. Assets used by the loading screen (or before startGame finishes) must be in the main package: put them in public/assets/boot/ (or change saplingWechat({ mainAssets }))."); };
        return class_1;
    }()), ve = (function () {
        function ve(e, n) {
            if (n === void 0) { n = ye; }
            var _this = this;
            t.xr(this, "_wx", void 0), t.xr(this, "_ctx", void 0), t.xr(this, "_master", void 0), t.xr(this, "_suspended", !1), t.xr(this, "_music", new Set), t.xr(this, "_paths", void 0), this._wx = e, this._paths = n, this._ctx = e.createWebAudioContext(), this._master = this._ctx.createGain(), this._master.connect(this._ctx.destination), this._tryResume();
            var r = function () { var t; _this._tryResume(), _this.unlocked && ((t = e.offTouchStart) == null || t.call(e, r)); };
            e.onTouchStart(r);
        }
        Object.defineProperty(ve.prototype, "unlocked", {
            get: function () { return this._ctx.state === "running"; },
            enumerable: false,
            configurable: true
        });
        ve.prototype.loadSound = function (e) {
            var _this = this;
            return this._paths.resolve(e).then(function (t) { return _this._decode(e, t); });
        };
        ve.prototype._decode = function (e, t) {
            var _this = this;
            return new Promise(function (n, r) { _this._wx.getFileSystemManager().readFile({ filePath: t, success: function (t) { var i = function (e) { return n(e); }, a = function (t) { return r(Error("decodeAudioData failed for ".concat(e, ": ").concat(JSON.stringify(t)))); }, o = _this._ctx.decodeAudioData(t.data, i, a); o && typeof o.then == "function" && o.then(i, a); }, fail: function (e) { return r(Error("cannot read ".concat(t, ": ").concat(e.errMsg))); } }); });
        };
        ve.prototype.playSound = function (e, t) { if (!this.unlocked || this._suspended)
            return ue(); var n = this._ctx.createBufferSource(); n.buffer = e, n.loop = t.loop; var r = this._ctx.createGain(); r.gain.value = t.volume, n.connect(r), r.connect(this._master); var i = null, a = !1; return n.onended = function () { n.disconnect(), r.disconnect(), a || i == null || i(); }, n.start(0), { setVolume: function (e) { return r.gain.value = e; }, stop: function () { a = !0; try {
                n.stop();
            }
            catch (e) { } }, onEnded: function (e) { return i = e; } }; };
        ve.prototype.playMusic = function (e, t) {
            var _this = this;
            var n = this._paths.resolveNow(e), r = this._wx.createInnerAudioContext();
            r.src = n, r.loop = t.loop, r.volume = t.volume, this._music.add(r);
            var i = null, a = function () { _this._music.delete(r) && r.destroy(); };
            return r.onEnded(function () { a(), i == null || i(); }), r.onError(function (t) { return console.warn("[sapling2d] music \"".concat(e, "\" error: ").concat(t.errMsg)); }), this._suspended || r.play(), { setVolume: function (e) { return r.volume = e; }, stop: function () { r.stop(), a(); }, onEnded: function (e) { return i = e; } };
        };
        ve.prototype.suspend = function () { this._suspended = !0, this._ctx.suspend(); for (var _i = 0, _a = this._music; _i < _a.length; _i++) {
            var e_34 = _a[_i];
            e_34.pause();
        } };
        ve.prototype.resume = function () { this._suspended = !1, this._tryResume(); for (var _i = 0, _a = this._music; _i < _a.length; _i++) {
            var e_35 = _a[_i];
            e_35.play();
        } };
        ve.prototype._tryResume = function () { try {
            var e, t;
            (e = this._ctx.resume()) == null || (t = e.catch) == null || t.call(e, function () { });
        }
        catch (e) { } };
        return ve;
    }()), ye = { resolve: function (e) { return Promise.resolve("assets/".concat(e)); }, resolveNow: function (e) { return "assets/".concat(e); } }, be = (function () {
        function be(e) {
            t.xr(this, "_wx", void 0), this._wx = e;
        }
        be.prototype.getItem = function (e) { var t = this._wx.getStorageSync(e); return typeof t == "string" && t !== "" ? t : null; };
        be.prototype.setItem = function (e, t) { this._wx.setStorageSync(e, t); };
        be.prototype.removeItem = function (e) { this._wx.removeStorageSync(e); };
        be.prototype.keys = function () { return this._wx.getStorageInfoSync().keys; };
        return be;
    }()), xe = (function () {
        function xe() {
            t.xr(this, "kind", "wechat"), t.xr(this, "assets", new _e(wx, GameGlobal.__saplingAssets)), t.xr(this, "audio", new ve(wx, this.assets)), t.xr(this, "storage", new be(wx)), t.xr(this, "canvas", h), t.xr(this, "_clock", p(wx.getPerformance(), function () { return Date.now(); }));
        }
        xe.prototype.prepareAssets = function (e) { return this.assets.prepare(e); };
        xe.prototype.now = function () { return this._clock(); };
        xe.prototype.requestFrame = function (e) {
            var _this = this;
            return requestAnimationFrame(function () { return e(_this.now()); });
        };
        xe.prototype.cancelFrame = function (e) { cancelAnimationFrame(e); };
        xe.prototype.getScreenInfo = function () { var e = wx.getWindowInfo ? wx.getWindowInfo() : wx.getSystemInfoSync(), n = e.safeArea; return t.yr({ width: e.windowWidth, height: e.windowHeight, pixelRatio: e.pixelRatio }, n ? { safeArea: { left: n.left, top: n.top, right: n.right, bottom: n.bottom } } : {}); };
        xe.prototype.onScreenChange = function (e) {
            var _this = this;
            var t = function () { return e(_this.getScreenInfo()); };
            return wx.onWindowResize(t), function () { var e, n; return (e = (n = wx).offWindowResize) == null ? void 0 : e.call(n, t); };
        };
        xe.prototype.loadFont = function (e) { return wx.loadFont(this.assets.resolveNow(e)); };
        xe.prototype.loadText = function (e) { return this.assets.resolve(e).then(function (e) { return new Promise(function (t, n) { wx.getFileSystemManager().readFile({ filePath: e, encoding: "utf8", success: function (e) { return t(String(e.data)); }, fail: function (t) { return n(Error("cannot load ".concat(e, ": ").concat(t.errMsg))); } }); }); }); };
        xe.prototype.loadImage = function (e) { return (e.startsWith("data:") ? Promise.resolve(e) : this.assets.resolve(e)).then(function (e) { return new Promise(function (t, n) { var r = wx.createImage(); r.onload = function () { return t({ resource: r, width: r.width, height: r.height }); }, r.onerror = function (t) { return n(Error("cannot load ".concat(e.startsWith("data:") ? "data: image" : e, ": ").concat(JSON.stringify(t)))); }, r.src = e; }); }); };
        xe.prototype.onInput = function (e) { return de(wx, e); };
        xe.prototype.onFocusChange = function (e) { var t = function () { return e(!0); }, n = function () { return e(!1); }; return wx.onShow(t), wx.onHide(n), function () { var e, r, i, a; (e = (r = wx).offShow) == null || e.call(r, t), (i = (a = wx).offHide) == null || i.call(a, n); }; };
        return xe;
    }()), $ = null;
})))(); }
function Ce() { return (Ce = e.n((function () { q(); })))(); }
Object.defineProperty(exports, "a", { enumerable: !0, get: function () { return w; } }), Object.defineProperty(exports, "c", { enumerable: !0, get: function () { return y; } }), Object.defineProperty(exports, "i", { enumerable: !0, get: function () { return q; } }), Object.defineProperty(exports, "l", { enumerable: !0, get: function () { return b; } }), Object.defineProperty(exports, "n", { enumerable: !0, get: function () { return Se; } }), Object.defineProperty(exports, "o", { enumerable: !0, get: function () { return C; } }), Object.defineProperty(exports, "r", { enumerable: !0, get: function () { return fe; } }), Object.defineProperty(exports, "s", { enumerable: !0, get: function () { return x; } }), Object.defineProperty(exports, "t", { enumerable: !0, get: function () { return Ce; } }), Object.defineProperty(exports, "u", { enumerable: !0, get: function () { return v; } });
