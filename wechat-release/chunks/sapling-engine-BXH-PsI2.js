(function () { var e = typeof wx < "u"; function t(e, t) { } typeof GameGlobal < "u" && (GameGlobal.__saplingLog = t), e && wx.onError && wx.onError(function (e) { e && e.message, e && e.stack; }); })();
var e = require("./rolldown-runtime-8PkXcCTM.js"), t = require("./sapling-engine-DbC_V8gI.js");
var n;
function r() { return (r = e.n((function () { n = (function () {
    function e(e, t, n) {
        this._x = t || 0, this._y = n || 0, this._observer = e;
    }
    e.prototype.clone = function (t) { return new e(t == null ? this._observer : t, this._x, this._y); };
    e.prototype.set = function (e, t) {
        if (e === void 0) { e = 0; }
        if (t === void 0) { t = e; }
        return (this._x !== e || this._y !== t) && (this._x = e, this._y = t, this._observer._onUpdate(this)), this;
    };
    e.prototype.copyFrom = function (e) { return (this._x !== e.x || this._y !== e.y) && (this._x = e.x, this._y = e.y, this._observer._onUpdate(this)), this; };
    e.prototype.copyTo = function (e) { return e.set(this._x, this._y), e; };
    e.prototype.equals = function (e) { return e.x === this._x && e.y === this._y; };
    e.prototype.toString = function () { return "[pixi.js/math:ObservablePoint x=".concat(this._x, " y=").concat(this._y, " scope=").concat(this._observer, "]"); };
    Object.defineProperty(e.prototype, "x", {
        get: function () { return this._x; },
        set: function (e) { this._x !== e && (this._x = e, this._observer._onUpdate(this)); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "y", {
        get: function () { return this._y; },
        set: function (e) { this._y !== e && (this._y = e, this._observer._onUpdate(this)); },
        enumerable: false,
        configurable: true
    });
    return e;
}()); })))(); }
var i, a, o;
function s() { return (s = e.n((function () { i = Math.PI * 2, a = 180 / Math.PI, o = Math.PI / 180; })))(); }
var c, l;
function u() { return (u = e.n((function () { c = (function () {
    function e(e, t) {
        if (e === void 0) { e = 0; }
        if (t === void 0) { t = 0; }
        this.x = 0, this.y = 0, this.x = e, this.y = t;
    }
    e.prototype.clone = function () { return new e(this.x, this.y); };
    e.prototype.copyFrom = function (e) { return this.set(e.x, e.y), this; };
    e.prototype.copyTo = function (e) { return e.set(this.x, this.y), e; };
    e.prototype.equals = function (e) { return e.x === this.x && e.y === this.y; };
    e.prototype.set = function (e, t) {
        if (e === void 0) { e = 0; }
        if (t === void 0) { t = e; }
        return this.x = e, this.y = t, this;
    };
    e.prototype.toString = function () { return "[pixi.js/math:Point x=".concat(this.x, " y=").concat(this.y, "]"); };
    Object.defineProperty(e, "shared", {
        get: function () { return l.x = 0, l.y = 0, l; },
        enumerable: false,
        configurable: true
    });
    return e;
}()), l = new c; })))(); }
var d, f, p;
function m() { return (m = e.n((function () { s(), u(), d = (function () {
    function e(e, t, n, r, i, a) {
        if (e === void 0) { e = 1; }
        if (t === void 0) { t = 0; }
        if (n === void 0) { n = 0; }
        if (r === void 0) { r = 1; }
        if (i === void 0) { i = 0; }
        if (a === void 0) { a = 0; }
        this.array = null, this.a = e, this.b = t, this.c = n, this.d = r, this.tx = i, this.ty = a;
    }
    e.prototype.fromArray = function (e) { this.a = e[0], this.b = e[1], this.c = e[3], this.d = e[4], this.tx = e[2], this.ty = e[5]; };
    e.prototype.set = function (e, t, n, r, i, a) { return this.a = e, this.b = t, this.c = n, this.d = r, this.tx = i, this.ty = a, this; };
    e.prototype.toArray = function (e, t) { this.array || (this.array = new Float32Array(9)); var n = t || this.array; return e ? (n[0] = this.a, n[1] = this.b, n[2] = 0, n[3] = this.c, n[4] = this.d, n[5] = 0, n[6] = this.tx, n[7] = this.ty, n[8] = 1) : (n[0] = this.a, n[1] = this.c, n[2] = this.tx, n[3] = this.b, n[4] = this.d, n[5] = this.ty, n[6] = 0, n[7] = 0, n[8] = 1), n; };
    e.prototype.apply = function (e, t) { t = t || new c; var n = e.x, r = e.y; return t.x = this.a * n + this.c * r + this.tx, t.y = this.b * n + this.d * r + this.ty, t; };
    e.prototype.applyInverse = function (e, t) { t = t || new c; var n = this.a, r = this.b, i = this.c, a = this.d, o = this.tx, s = this.ty, l = 1 / (n * a + i * -r), u = e.x, d = e.y; return t.x = a * l * u + -i * l * d + (s * i - o * a) * l, t.y = n * l * d + -r * l * u + (-s * n + o * r) * l, t; };
    e.prototype.translate = function (e, t) { return this.tx += e, this.ty += t, this; };
    e.prototype.scale = function (e, t) { return this.a *= e, this.d *= t, this.c *= e, this.b *= t, this.tx *= e, this.ty *= t, this; };
    e.prototype.rotate = function (e) { var t = Math.cos(e), n = Math.sin(e), r = this.a, i = this.c, a = this.tx; return this.a = r * t - this.b * n, this.b = r * n + this.b * t, this.c = i * t - this.d * n, this.d = i * n + this.d * t, this.tx = a * t - this.ty * n, this.ty = a * n + this.ty * t, this; };
    e.prototype.append = function (e) { var t = this.a, n = this.b, r = this.c, i = this.d; return this.a = e.a * t + e.b * r, this.b = e.a * n + e.b * i, this.c = e.c * t + e.d * r, this.d = e.c * n + e.d * i, this.tx = e.tx * t + e.ty * r + this.tx, this.ty = e.tx * n + e.ty * i + this.ty, this; };
    e.prototype.appendFrom = function (e, t) { var n = e.a, r = e.b, i = e.c, a = e.d, o = e.tx, s = e.ty, c = t.a, l = t.b, u = t.c, d = t.d; return this.a = n * c + r * u, this.b = n * l + r * d, this.c = i * c + a * u, this.d = i * l + a * d, this.tx = o * c + s * u + t.tx, this.ty = o * l + s * d + t.ty, this; };
    e.prototype.setTransform = function (e, t, n, r, i, a, o, s, c) { return this.a = Math.cos(o + c) * i, this.b = Math.sin(o + c) * i, this.c = -Math.sin(o - s) * a, this.d = Math.cos(o - s) * a, this.tx = e - (n * this.a + r * this.c), this.ty = t - (n * this.b + r * this.d), this; };
    e.prototype.prepend = function (e) { var t = this.tx; if (e.a !== 1 || e.b !== 0 || e.c !== 0 || e.d !== 1) {
        var t_1 = this.a, n_1 = this.c;
        this.a = t_1 * e.a + this.b * e.c, this.b = t_1 * e.b + this.b * e.d, this.c = n_1 * e.a + this.d * e.c, this.d = n_1 * e.b + this.d * e.d;
    } return this.tx = t * e.a + this.ty * e.c + e.tx, this.ty = t * e.b + this.ty * e.d + e.ty, this; };
    e.prototype.decompose = function (e) { var t = this.a, n = this.b, r = this.c, a = this.d, o = e.pivot, s = -Math.atan2(-r, a), c = Math.atan2(n, t), l = Math.abs(s + c), u = Math.sqrt(t * t + n * n); return l < 1e-5 || Math.abs(i - l) < 1e-5 ? (e.rotation = c, e.skew.x = e.skew.y = 0) : Math.abs(Math.PI - l) < 1e-5 ? (e.rotation = c - Math.PI, e.skew.x = e.skew.y = 0, u = -u) : (e.rotation = 0, e.skew.x = s, e.skew.y = c), e.scale.x = u, e.scale.y = Math.sqrt(r * r + a * a), e.position.x = this.tx + (o.x * t + o.y * r), e.position.y = this.ty + (o.x * n + o.y * a), e; };
    e.prototype.invert = function () { var e = this.a, t = this.b, n = this.c, r = this.d, i = this.tx, a = e * r - t * n; return this.a = r / a, this.b = -t / a, this.c = -n / a, this.d = e / a, this.tx = (n * this.ty - r * i) / a, this.ty = -(e * this.ty - t * i) / a, this; };
    e.prototype.isIdentity = function () { return this.a === 1 && this.b === 0 && this.c === 0 && this.d === 1 && this.tx === 0 && this.ty === 0; };
    e.prototype.identity = function () { return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this; };
    e.prototype.clone = function () { var t = new e; return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t; };
    e.prototype.copyTo = function (e) { return e.a = this.a, e.b = this.b, e.c = this.c, e.d = this.d, e.tx = this.tx, e.ty = this.ty, e; };
    e.prototype.copyFrom = function (e) { return this.a = e.a, this.b = e.b, this.c = e.c, this.d = e.d, this.tx = e.tx, this.ty = e.ty, this; };
    e.prototype.equals = function (e) { return e.a === this.a && e.b === this.b && e.c === this.c && e.d === this.d && e.tx === this.tx && e.ty === this.ty; };
    e.prototype.toString = function () { return "[pixi.js:Matrix a=".concat(this.a, " b=").concat(this.b, " c=").concat(this.c, " d=").concat(this.d, " tx=").concat(this.tx, " ty=").concat(this.ty, "]"); };
    Object.defineProperty(e, "IDENTITY", {
        get: function () { return p.identity(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e, "shared", {
        get: function () { return f.identity(); },
        enumerable: false,
        configurable: true
    });
    return e;
}()), f = new d, p = new d; })))(); }
function h() { for (var e_1 = 0; e_1 < 16; e_1++) {
    var t_2 = [];
    b.push(t_2);
    for (var n_2 = 0; n_2 < 16; n_2++) {
        var r_1 = S(g[e_1] * g[n_2] + v[e_1] * _[n_2]), i_1 = S(_[e_1] * g[n_2] + y[e_1] * _[n_2]), a_1 = S(g[e_1] * v[n_2] + v[e_1] * y[n_2]), o_1 = S(_[e_1] * v[n_2] + y[e_1] * y[n_2]);
        for (var e_2 = 0; e_2 < 16; e_2++)
            if (g[e_2] === r_1 && _[e_2] === i_1 && v[e_2] === a_1 && y[e_2] === o_1) {
                t_2.push(e_2);
                break;
            }
    }
} for (var e_3 = 0; e_3 < 16; e_3++) {
    var t_3 = new d;
    t_3.set(g[e_3], _[e_3], v[e_3], y[e_3], 0, 0), x.push(t_3);
} }
var g, _, v, y, b, x, S, C;
function w() { return (w = e.n((function () { m(), g = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1], _ = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1], v = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1], y = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1], b = [], x = [], S = Math.sign, h(), C = { E: 0, SE: 1, S: 2, SW: 3, W: 4, NW: 5, N: 6, NE: 7, MIRROR_VERTICAL: 8, MAIN_DIAGONAL: 10, MIRROR_HORIZONTAL: 12, REVERSE_DIAGONAL: 14, uX: function (e) { return g[e]; }, uY: function (e) { return _[e]; }, vX: function (e) { return v[e]; }, vY: function (e) { return y[e]; }, inv: function (e) { return e & 8 ? e & 15 : -e & 7; }, add: function (e, t) { return b[e][t]; }, sub: function (e, t) { return b[e][C.inv(t)]; }, rotate180: function (e) { return e ^ 4; }, isVertical: function (e) { return (e & 3) == 2; }, byDirection: function (e, t) { return Math.abs(e) * 2 <= Math.abs(t) ? t >= 0 ? C.S : C.N : Math.abs(t) * 2 <= Math.abs(e) ? e > 0 ? C.E : C.W : t > 0 ? e > 0 ? C.SE : C.SW : e > 0 ? C.NE : C.NW; }, matrixAppendRotationInv: function (e, t, n, r, i, a) {
        if (n === void 0) { n = 0; }
        if (r === void 0) { r = 0; }
        if (i === void 0) { i = 0; }
        if (a === void 0) { a = 0; }
        var o = x[C.inv(t)], s = o.a, c = o.b, l = o.c, u = o.d, d = n - Math.min(0, s * i, l * a, s * i + l * a), f = r - Math.min(0, c * i, u * a, c * i + u * a), p = e.a, m = e.b, h = e.c, g = e.d;
        e.a = s * p + c * h, e.b = s * m + c * g, e.c = l * p + u * h, e.d = l * m + u * g, e.tx = d * p + f * h + e.tx, e.ty = d * m + f * g + e.ty;
    }, transformRectCoords: function (e, t, n, r) { var i = e.x, a = e.y, o = e.width, s = e.height, c = t.x, l = t.y, u = t.width, d = t.height; return n === C.E ? (r.set(i + c, a + l, o, s), r) : n === C.S ? r.set(u - a - s + c, i + l, s, o) : n === C.W ? r.set(u - i - o + c, d - a - s + l, o, s) : n === C.N ? r.set(a + c, d - i - o + l, s, o) : r.set(i + c, a + l, o, s); } }; })))(); }
var T, E;
function D() { return (D = e.n((function () { u(), T = [new c, new c, new c, new c], E = (function () {
    function e(e, t, n, r) {
        if (e === void 0) { e = 0; }
        if (t === void 0) { t = 0; }
        if (n === void 0) { n = 0; }
        if (r === void 0) { r = 0; }
        this.type = "rectangle", this.x = Number(e), this.y = Number(t), this.width = Number(n), this.height = Number(r);
    }
    Object.defineProperty(e.prototype, "left", {
        get: function () { return this.x; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "right", {
        get: function () { return this.x + this.width; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "top", {
        get: function () { return this.y; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "bottom", {
        get: function () { return this.y + this.height; },
        enumerable: false,
        configurable: true
    });
    e.prototype.isEmpty = function () { return this.left === this.right || this.top === this.bottom; };
    Object.defineProperty(e, "EMPTY", {
        get: function () { return new e(0, 0, 0, 0); },
        enumerable: false,
        configurable: true
    });
    e.prototype.clone = function () { return new e(this.x, this.y, this.width, this.height); };
    e.prototype.copyFromBounds = function (e) { return this.x = e.minX, this.y = e.minY, this.width = e.maxX - e.minX, this.height = e.maxY - e.minY, this; };
    e.prototype.copyFrom = function (e) { return this.x = e.x, this.y = e.y, this.width = e.width, this.height = e.height, this; };
    e.prototype.copyTo = function (e) { return e.copyFrom(this), e; };
    e.prototype.contains = function (e, t) { return this.width <= 0 || this.height <= 0 ? !1 : e >= this.x && e < this.x + this.width && t >= this.y && t < this.y + this.height; };
    e.prototype.strokeContains = function (e, t, n, r) {
        if (r === void 0) { r = .5; }
        var _a = this, i = _a.width, a = _a.height;
        if (i <= 0 || a <= 0)
            return !1;
        var o = this.x, s = this.y, c = n * (1 - r), l = n - c, u = o - c, d = o + i + c, f = s - c, p = s + a + c, m = o + l, h = o + i - l, g = s + l, _ = s + a - l;
        return e >= u && e <= d && t >= f && t <= p && !(e > m && e < h && t > g && t < _);
    };
    e.prototype.intersects = function (e, t) { if (!t) {
        var t_4 = this.x < e.x ? e.x : this.x;
        if ((this.right > e.right ? e.right : this.right) <= t_4)
            return !1;
        var n_3 = this.y < e.y ? e.y : this.y;
        return (this.bottom > e.bottom ? e.bottom : this.bottom) > n_3;
    } var n = this.left, r = this.right, i = this.top, a = this.bottom; if (r <= n || a <= i)
        return !1; var o = T[0].set(e.left, e.top), s = T[1].set(e.left, e.bottom), c = T[2].set(e.right, e.top), l = T[3].set(e.right, e.bottom); if (c.x <= o.x || s.y <= o.y)
        return !1; var u = Math.sign(t.a * t.d - t.b * t.c); if (u === 0 || (t.apply(o, o), t.apply(s, s), t.apply(c, c), t.apply(l, l), Math.max(o.x, s.x, c.x, l.x) <= n || Math.min(o.x, s.x, c.x, l.x) >= r || Math.max(o.y, s.y, c.y, l.y) <= i || Math.min(o.y, s.y, c.y, l.y) >= a))
        return !1; var d = u * (s.y - o.y), f = u * (o.x - s.x), p = d * n + f * i, m = d * r + f * i, h = d * n + f * a, g = d * r + f * a; if (Math.max(p, m, h, g) <= d * o.x + f * o.y || Math.min(p, m, h, g) >= d * l.x + f * l.y)
        return !1; var _ = u * (o.y - c.y), v = u * (c.x - o.x), y = _ * n + v * i, b = _ * r + v * i, x = _ * n + v * a, S = _ * r + v * a; return !(Math.max(y, b, x, S) <= _ * o.x + v * o.y || Math.min(y, b, x, S) >= _ * l.x + v * l.y); };
    e.prototype.pad = function (e, t) {
        if (e === void 0) { e = 0; }
        if (t === void 0) { t = e; }
        return this.x -= e, this.y -= t, this.width += e * 2, this.height += t * 2, this;
    };
    e.prototype.fit = function (e) { var t = Math.max(this.x, e.x), n = Math.min(this.x + this.width, e.x + e.width), r = Math.max(this.y, e.y), i = Math.min(this.y + this.height, e.y + e.height); return this.x = t, this.width = Math.max(n - t, 0), this.y = r, this.height = Math.max(i - r, 0), this; };
    e.prototype.ceil = function (e, t) {
        if (e === void 0) { e = 1; }
        if (t === void 0) { t = .001; }
        var n = Math.ceil((this.x + this.width - t) * e) / e, r = Math.ceil((this.y + this.height - t) * e) / e;
        return this.x = Math.floor((this.x + t) * e) / e, this.y = Math.floor((this.y + t) * e) / e, this.width = n - this.x, this.height = r - this.y, this;
    };
    e.prototype.scale = function (e, t) {
        if (t === void 0) { t = e; }
        return this.x *= e, this.y *= t, this.width *= e, this.height *= t, this;
    };
    e.prototype.enlarge = function (e) { var t = Math.min(this.x, e.x), n = Math.max(this.x + this.width, e.x + e.width), r = Math.min(this.y, e.y), i = Math.max(this.y + this.height, e.y + e.height); return this.x = t, this.width = n - t, this.y = r, this.height = i - r, this; };
    e.prototype.getBounds = function (t) { return t || (t = new e), t.copyFrom(this), t; };
    e.prototype.containsRect = function (e) { if (this.width <= 0 || this.height <= 0)
        return !1; var t = e.x, n = e.y, r = e.x + e.width, i = e.y + e.height; return t >= this.x && t < this.x + this.width && n >= this.y && n < this.y + this.height && r >= this.x && r <= this.x + this.width && i >= this.y && i <= this.y + this.height; };
    e.prototype.set = function (e, t, n, r) { return this.x = e, this.y = t, this.width = n, this.height = r, this; };
    e.prototype.toString = function () { return "[pixi.js/math:Rectangle x=".concat(this.x, " y=").concat(this.y, " width=").concat(this.width, " height=").concat(this.height, "]"); };
    return e;
}()); })))(); }
function O(e) { return e += +(e === 0), --e, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e + 1; }
function k(e) { return !(e & e - 1) && !!e; }
function A() { return (A = e.n((function () { })))(); }
var j;
function M() { return (M = e.n((function () { D(), j = (function () {
    function e(e, t, n) {
        if (e === void 0) { e = 0; }
        if (t === void 0) { t = 0; }
        if (n === void 0) { n = 0; }
        this.type = "circle", this.x = e, this.y = t, this.radius = n;
    }
    e.prototype.clone = function () { return new e(this.x, this.y, this.radius); };
    e.prototype.contains = function (e, t) { if (this.radius <= 0)
        return !1; var n = this.radius * this.radius, r = this.x - e, i = this.y - t; return r *= r, i *= i, r + i <= n; };
    e.prototype.strokeContains = function (e, t, n, r) {
        if (r === void 0) { r = .5; }
        if (this.radius === 0)
            return !1;
        var i = this.x - e, a = this.y - t, o = this.radius, s = (1 - r) * n, c = Math.sqrt(i * i + a * a);
        return c <= o + s && c > o - (n - s);
    };
    e.prototype.getBounds = function (e) { return e || (e = new E), e.x = this.x - this.radius, e.y = this.y - this.radius, e.width = this.radius * 2, e.height = this.radius * 2, e; };
    e.prototype.copyFrom = function (e) { return this.x = e.x, this.y = e.y, this.radius = e.radius, this; };
    e.prototype.copyTo = function (e) { return e.copyFrom(this), e; };
    e.prototype.toString = function () { return "[pixi.js/math:Circle x=".concat(this.x, " y=").concat(this.y, " radius=").concat(this.radius, "]"); };
    return e;
}()); })))(); }
var N;
function P() { return (P = e.n((function () { D(), N = (function () {
    function e(e, t, n, r) {
        if (e === void 0) { e = 0; }
        if (t === void 0) { t = 0; }
        if (n === void 0) { n = 0; }
        if (r === void 0) { r = 0; }
        this.type = "ellipse", this.x = e, this.y = t, this.halfWidth = n, this.halfHeight = r;
    }
    e.prototype.clone = function () { return new e(this.x, this.y, this.halfWidth, this.halfHeight); };
    e.prototype.contains = function (e, t) { if (this.halfWidth <= 0 || this.halfHeight <= 0)
        return !1; var n = (e - this.x) / this.halfWidth, r = (t - this.y) / this.halfHeight; return n *= n, r *= r, n + r <= 1; };
    e.prototype.strokeContains = function (e, t, n, r) {
        if (r === void 0) { r = .5; }
        var _a = this, i = _a.halfWidth, a = _a.halfHeight;
        if (i <= 0 || a <= 0)
            return !1;
        var o = n * (1 - r), s = n - o, c = i - s, l = a - s, u = i + o, d = a + o, f = e - this.x, p = t - this.y;
        return f * f / (u * u) + p * p / (d * d) > 1 ? !1 : c <= 0 || l <= 0 || f * f / (c * c) + p * p / (l * l) > 1;
    };
    e.prototype.getBounds = function (e) { return e || (e = new E), e.x = this.x - this.halfWidth, e.y = this.y - this.halfHeight, e.width = this.halfWidth * 2, e.height = this.halfHeight * 2, e; };
    e.prototype.copyFrom = function (e) { return this.x = e.x, this.y = e.y, this.halfWidth = e.halfWidth, this.halfHeight = e.halfHeight, this; };
    e.prototype.copyTo = function (e) { return e.copyFrom(this), e; };
    e.prototype.toString = function () { return "[pixi.js/math:Ellipse x=".concat(this.x, " y=").concat(this.y, " halfWidth=").concat(this.halfWidth, " halfHeight=").concat(this.halfHeight, "]"); };
    return e;
}()); })))(); }
function F(e) { var t = e.length; if (t < 6)
    return 1; var n = 0; for (var r_2 = 0, i_2 = e[t - 2], a_2 = e[t - 1]; r_2 < t; r_2 += 2) {
    var t_5 = e[r_2], o_2 = e[r_2 + 1];
    n += (t_5 - i_2) * (o_2 + a_2), i_2 = t_5, a_2 = o_2;
} return n < 0 ? -1 : 1; }
function I() { return (I = e.n((function () { })))(); }
function L(e, t, n, r, i, a) { var o = e - n, s = t - r, c = i - n, l = a - r, u = o * c + s * l, d = c * c + l * l, f = -1; d !== 0 && (f = u / d); var p, m; f < 0 ? (p = n, m = r) : f > 1 ? (p = i, m = a) : (p = n + f * c, m = r + f * l); var h = e - p, g = t - m; return h * h + g * g; }
var R, z, B;
function V() { return (V = e.n((function () { t.W(), D(), B = (function () {
    function e() {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        this.type = "polygon";
        var t = Array.isArray(e[0]) ? e[0] : e;
        if (typeof t[0] != "number") {
            var e_4 = [];
            for (var n_4 = 0, r_3 = t.length; n_4 < r_3; n_4++)
                e_4.push(t[n_4].x, t[n_4].y);
            t = e_4;
        }
        this.points = t, this.closePath = !0;
    }
    e.prototype.isClockwise = function () { var e = 0, t = this.points, n = t.length; for (var r_4 = 0; r_4 < n; r_4 += 2) {
        var i_3 = t[r_4], a_3 = t[r_4 + 1], o_3 = t[(r_4 + 2) % n], s_1 = t[(r_4 + 3) % n];
        e += (o_3 - i_3) * (s_1 + a_3);
    } return e < 0; };
    e.prototype.containsPolygon = function (e) { var t = this.getBounds(R), n = e.getBounds(z); if (!t.containsRect(n))
        return !1; var r = e.points; for (var e_5 = 0; e_5 < r.length; e_5 += 2) {
        var t_6 = r[e_5], n_5 = r[e_5 + 1];
        if (!this.contains(t_6, n_5))
            return !1;
    } return !0; };
    e.prototype.clone = function () { var t = this.points.slice(), n = new e(t); return n.closePath = this.closePath, n; };
    e.prototype.contains = function (e, t) { var n = !1, r = this.points.length / 2; for (var i_4 = 0, a_4 = r - 1; i_4 < r; a_4 = i_4++) {
        var r_5 = this.points[i_4 * 2], o_4 = this.points[i_4 * 2 + 1], s_2 = this.points[a_4 * 2], c_1 = this.points[a_4 * 2 + 1];
        o_4 > t != c_1 > t && e < (s_2 - r_5) * ((t - o_4) / (c_1 - o_4)) + r_5 && (n = !n);
    } return n; };
    e.prototype.strokeContains = function (e, t, n, r) {
        if (r === void 0) { r = .5; }
        var i = this.points, a = n * (r === .5 ? r : (r - .5) * F(i) + .5), o = n - a, s = a * a, c = o * o, l = i.length - (this.closePath ? 0 : 2);
        for (var n_6 = 0; n_6 < l; n_6 += 2) {
            var r_6 = i[n_6], a_5 = i[n_6 + 1], o_5 = i[(n_6 + 2) % i.length], l_1 = i[(n_6 + 3) % i.length];
            if (L(e, t, r_6, a_5, o_5, l_1) <= (Math.sign((o_5 - r_6) * (t - a_5) - (l_1 - a_5) * (e - r_6)) < 0 ? s : c))
                return !0;
        }
        return !1;
    };
    e.prototype.getBounds = function (e) { e || (e = new E); var t = this.points, n = 1 / 0, r = -1 / 0, i = 1 / 0, a = -1 / 0; for (var e_6 = 0, o_6 = t.length; e_6 < o_6; e_6 += 2) {
        var o_7 = t[e_6], s_3 = t[e_6 + 1];
        n = o_7 < n ? o_7 : n, r = o_7 > r ? o_7 : r, i = s_3 < i ? s_3 : i, a = s_3 > a ? s_3 : a;
    } return e.x = n, e.width = r - n, e.y = i, e.height = a - i, e; };
    e.prototype.copyFrom = function (e) { return this.points = e.points.slice(), this.closePath = e.closePath, this; };
    e.prototype.copyTo = function (e) { return e.copyFrom(this), e; };
    e.prototype.toString = function () { return "[pixi.js/math:PolygoncloseStroke=".concat(this.closePath, "points=").concat(this.points.reduce(function (e, t) { return "".concat(e, ", ").concat(t); }, ""), "]"); };
    Object.defineProperty(e.prototype, "lastX", {
        get: function () { return this.points[this.points.length - 2]; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "lastY", {
        get: function () { return this.points[this.points.length - 1]; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "x", {
        get: function () { return t.U("8.11.0", "Polygon.lastX is deprecated, please use Polygon.lastX instead."), this.points[this.points.length - 2]; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "y", {
        get: function () { return t.U("8.11.0", "Polygon.y is deprecated, please use Polygon.lastY instead."), this.points[this.points.length - 1]; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "startX", {
        get: function () { return this.points[0]; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "startY", {
        get: function () { return this.points[1]; },
        enumerable: false,
        configurable: true
    });
    return e;
}()); })))(); }
var H, U;
function W() { return (W = e.n((function () { D(), H = function (e, t, n, r, i, a, o) { var s = e - n, c = t - r, l = Math.sqrt(s * s + c * c); return l >= i - a && l <= i + o; }, U = (function () {
    function e(e, t, n, r, i) {
        if (e === void 0) { e = 0; }
        if (t === void 0) { t = 0; }
        if (n === void 0) { n = 0; }
        if (r === void 0) { r = 0; }
        if (i === void 0) { i = 20; }
        this.type = "roundedRectangle", this.x = e, this.y = t, this.width = n, this.height = r, this.radius = i;
    }
    e.prototype.getBounds = function (e) { return e || (e = new E), e.x = this.x, e.y = this.y, e.width = this.width, e.height = this.height, e; };
    e.prototype.clone = function () { return new e(this.x, this.y, this.width, this.height, this.radius); };
    e.prototype.copyFrom = function (e) { return this.x = e.x, this.y = e.y, this.width = e.width, this.height = e.height, this.radius = e.radius, this; };
    e.prototype.copyTo = function (e) { return e.copyFrom(this), e; };
    e.prototype.contains = function (e, t) { if (this.width <= 0 || this.height <= 0)
        return !1; if (e >= this.x && e <= this.x + this.width && t >= this.y && t <= this.y + this.height) {
        var n_7 = Math.max(0, Math.min(this.radius, Math.min(this.width, this.height) / 2));
        if (t >= this.y + n_7 && t <= this.y + this.height - n_7 || e >= this.x + n_7 && e <= this.x + this.width - n_7)
            return !0;
        var r_7 = e - (this.x + n_7), i_5 = t - (this.y + n_7), a_6 = n_7 * n_7;
        if (r_7 * r_7 + i_5 * i_5 <= a_6 || (r_7 = e - (this.x + this.width - n_7), r_7 * r_7 + i_5 * i_5 <= a_6) || (i_5 = t - (this.y + this.height - n_7), r_7 * r_7 + i_5 * i_5 <= a_6) || (r_7 = e - (this.x + n_7), r_7 * r_7 + i_5 * i_5 <= a_6))
            return !0;
    } return !1; };
    e.prototype.strokeContains = function (e, t, n, r) {
        if (r === void 0) { r = .5; }
        var _a = this, i = _a.x, a = _a.y, o = _a.width, s = _a.height, c = _a.radius, l = n * (1 - r), u = n - l, d = i + c, f = a + c, p = o - c * 2, m = s - c * 2, h = i + o, g = a + s;
        return (e >= i - l && e <= i + u || e >= h - u && e <= h + l) && t >= f && t <= f + m || (t >= a - l && t <= a + u || t >= g - u && t <= g + l) && e >= d && e <= d + p || e < d && t < f && H(e, t, d, f, c, u, l) || e > h - c && t < f && H(e, t, h - c, f, c, u, l) || e > h - c && t > g - c && H(e, t, h - c, g - c, c, u, l) || e < d && t > g - c && H(e, t, d, g - c, c, u, l);
    };
    e.prototype.toString = function () { return "[pixi.js/math:RoundedRectangle x=".concat(this.x, " y=").concat(this.y, "width=").concat(this.width, " height=").concat(this.height, " radius=").concat(this.radius, "]"); };
    return e;
}()); })))(); }
function G(e, t, n, r, i, a, o, s) { var c = o - n, l = s - r, u = i - n, d = a - r, f = e - n, p = t - r, m = c * c + l * l, h = c * u + l * d, g = c * f + l * p, _ = u * u + d * d, v = u * f + d * p, y = 1 / (m * _ - h * h), b = (_ * g - h * v) * y, x = (m * v - h * g) * y; return b >= 0 && x >= 0 && b + x < 1; }
function K() { return (K = e.n((function () { })))(); }
Object.defineProperty(exports, "C", { enumerable: !0, get: function () { return u; } }), Object.defineProperty(exports, "D", { enumerable: !0, get: function () { return n; } }), Object.defineProperty(exports, "E", { enumerable: !0, get: function () { return s; } }), Object.defineProperty(exports, "O", { enumerable: !0, get: function () { return r; } }), Object.defineProperty(exports, "S", { enumerable: !0, get: function () { return c; } }), Object.defineProperty(exports, "T", { enumerable: !0, get: function () { return a; } }), Object.defineProperty(exports, "_", { enumerable: !0, get: function () { return D; } }), Object.defineProperty(exports, "a", { enumerable: !0, get: function () { return B; } }), Object.defineProperty(exports, "b", { enumerable: !0, get: function () { return d; } }), Object.defineProperty(exports, "c", { enumerable: !0, get: function () { return I; } }), Object.defineProperty(exports, "d", { enumerable: !0, get: function () { return j; } }), Object.defineProperty(exports, "f", { enumerable: !0, get: function () { return M; } }), Object.defineProperty(exports, "g", { enumerable: !0, get: function () { return E; } }), Object.defineProperty(exports, "h", { enumerable: !0, get: function () { return O; } }), Object.defineProperty(exports, "i", { enumerable: !0, get: function () { return W; } }), Object.defineProperty(exports, "l", { enumerable: !0, get: function () { return N; } }), Object.defineProperty(exports, "m", { enumerable: !0, get: function () { return k; } }), Object.defineProperty(exports, "n", { enumerable: !0, get: function () { return G; } }), Object.defineProperty(exports, "o", { enumerable: !0, get: function () { return V; } }), Object.defineProperty(exports, "p", { enumerable: !0, get: function () { return A; } }), Object.defineProperty(exports, "r", { enumerable: !0, get: function () { return U; } }), Object.defineProperty(exports, "s", { enumerable: !0, get: function () { return F; } }), Object.defineProperty(exports, "t", { enumerable: !0, get: function () { return K; } }), Object.defineProperty(exports, "u", { enumerable: !0, get: function () { return P; } }), Object.defineProperty(exports, "v", { enumerable: !0, get: function () { return C; } }), Object.defineProperty(exports, "w", { enumerable: !0, get: function () { return o; } }), Object.defineProperty(exports, "x", { enumerable: !0, get: function () { return m; } }), Object.defineProperty(exports, "y", { enumerable: !0, get: function () { return w; } });
