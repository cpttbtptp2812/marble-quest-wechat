(function () { var e = typeof wx < "u"; function t(e, t) { } typeof GameGlobal < "u" && (GameGlobal.__saplingLog = t), e && wx.onError && wx.onError(function (e) { e && e.message, e && e.stack; }); })();
var e = require("./rolldown-runtime-8PkXcCTM.js"), t = require("./sapling-engine-0ptSNjZs.js"), n = require("./sapling-engine-UgL1Y7P9.js"), r = require("./sapling-engine-BKxfCeCE.js"), i = require("./sapling-engine-CGmSt4Cl.js");
function a(e, t, n) { return e + (t - e) * n; }
function o(e, t, n) { var r = t - e; return r > Math.PI ? r -= v : r < -Math.PI && (r += v), e + r * n; }
function s(e, t, n, r) { var i = e.sprite, a = e.offsetX, o = e.offsetY; if (a !== 0 || o !== 0) {
    var e_1 = Math.cos(r), s_1 = Math.sin(r);
    i.x = t + e_1 * a - s_1 * o, i.y = n + s_1 * a + e_1 * o;
}
else
    i.x = t, i.y = n; i.rotation = r; }
var c, l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w;
function T() { return (T = e.n((function () { c = function (e) { throw TypeError(e); }, l = function (e, t, n) { return t.has(e) || c("Cannot " + n); }, u = function (e, t, n) { return (l(e, t, "read from private field"), n ? n.call(e) : t.get(e)); }, d = function (e, t, n) { return t.has(e) ? c("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n); }, f = function (e, t, n, r) { return (l(e, t, "write to private field"), t.set(e, n), n); }, p = function (e, t, n) { return (l(e, t, "access private method"), n); }, _ = (function () {
    function _(e) {
        if (e === void 0) { e = {}; }
        var t, n, r, i;
        d(this, m, 0), d(this, h, []), d(this, g, []);
        var a = (t = e.hz) == null ? 60 : t;
        if (!(a > 0) || !Number.isFinite(a))
            throw RangeError("FixedStepper: 'hz' must be a positive finite number, got ".concat(a));
        this.hz = a, this.dt = 1 / a, this.maxStepsPerFrame = (n = e.maxStepsPerFrame) == null ? 5 : n, this.velocityIterations = (r = e.velocityIterations) == null ? 10 : r, this.positionIterations = (i = e.positionIterations) == null ? 10 : i;
    }
    _.prototype.step = function (e, t) { if (!Number.isFinite(t) || t < 0)
        return u(this, m) / this.dt; f(this, m, u(this, m) + t); var n = 0; for (; u(this, m) >= this.dt && n < this.maxStepsPerFrame;) {
        for (var _i = 0, _a = u(this, h); _i < _a.length; _i++) {
            var t_1 = _a[_i];
            t_1(e);
        }
        e.step(this.dt, this.velocityIterations, this.positionIterations);
        for (var _b = 0, _c = u(this, g); _b < _c.length; _b++) {
            var t_2 = _c[_b];
            t_2(e, this.dt);
        }
        f(this, m, u(this, m) - this.dt), n++;
    } return n >= this.maxStepsPerFrame && u(this, m) > this.dt && f(this, m, 0), u(this, m) / this.dt; };
    _.prototype.onBeforeStep = function (e) {
        var _this = this;
        return u(this, h).push(e), function () { var t = u(_this, h).indexOf(e); t >= 0 && u(_this, h).splice(t, 1); };
    };
    _.prototype.onAfterStep = function (e) {
        var _this = this;
        return u(this, g).push(e), function () { var t = u(_this, g).indexOf(e); t >= 0 && u(_this, g).splice(t, 1); };
    };
    _.prototype.reset = function () { f(this, m, 0); };
    Object.defineProperty(_.prototype, "alpha", {
        get: function () { return u(this, m) / this.dt; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_.prototype, "accumulatorSeconds", {
        get: function () { return u(this, m); },
        enumerable: false,
        configurable: true
    });
    return _;
}()), m = new WeakMap, h = new WeakMap, g = new WeakMap, v = Math.PI * 2, w = (function () {
    function w(e) {
        if (e === void 0) { e = {}; }
        var _this = this;
        var t;
        d(this, S), d(this, y, new Map), d(this, b), d(this, x), f(this, b, (t = e.autoCleanup) == null || t), e.stepper && f(this, x, e.stepper.onBeforeStep(function () { return p(_this, S, C).call(_this); }));
    }
    Object.defineProperty(w.prototype, "size", {
        get: function () { return u(this, y).size; },
        enumerable: false,
        configurable: true
    });
    w.prototype.bind = function (e, t, n) {
        if (n === void 0) { n = {}; }
        var r, i;
        var a = { sprite: t, offsetX: (r = n.offsetX) == null ? 0 : r, offsetY: (i = n.offsetY) == null ? 0 : i, prevX: e.position.x, prevY: e.position.y, prevRotation: e.rotation };
        u(this, y).set(e, a), s(a, e.position.x, e.position.y, e.rotation);
    };
    w.prototype.unbind = function (e) { return u(this, y).delete(e); };
    w.prototype.has = function (e) { return u(this, y).has(e); };
    w.prototype.bodies = function () { return u(this, y).keys(); };
    w.prototype.update = function (e) {
        if (e === void 0) { e = 1; }
        var t = u(this, x) !== void 0 && e < 1;
        for (var _i = 0, _a = u(this, y); _i < _a.length; _i++) {
            var _b = _a[_i], n_1 = _b[0], r_1 = _b[1];
            if (u(this, b) && n_1.space === null) {
                u(this, y).delete(n_1);
                continue;
            }
            var i_1 = n_1.position.x, c_1 = n_1.position.y, l_1 = n_1.rotation;
            t ? s(r_1, a(r_1.prevX, i_1, e), a(r_1.prevY, c_1, e), o(r_1.prevRotation, l_1, e)) : s(r_1, i_1, c_1, l_1);
        }
    };
    w.prototype.dispose = function () { var e; u(this, y).clear(), (e = u(this, x)) == null || e.call(this); };
    return w;
}()), y = new WeakMap, b = new WeakMap, x = new WeakMap, S = new WeakSet, C = function () { for (var _i = 0, _a = u(this, y); _i < _a.length; _i++) {
    var _b = _a[_i], e_2 = _b[0], t_3 = _b[1];
    u(this, b) && e_2.space === null ? u(this, y).delete(e_2) : (t_3.prevX = e_2.position.x, t_3.prevY = e_2.position.y, t_3.prevRotation = e_2.rotation);
} }, Object.freeze([5809919, 13801762, 4176208, 16273737, 10711543, 14396415]), Object.freeze({ BODY_COUNT: 0, TIME_STAMP: 1, STEP_MS: 2 }); })))(); }
function E() { return (E = e.n((function () { t.q(), n.h(), t.S(), t.b(), t.K.add(t.x), t.K.mixin(n.m, t.y); })))(); }
function D() { return (D = e.n((function () { t.q(), t.m(), t.K.add(t.p); })))(); }
function O() { return (O = e.n((function () { t.q(), n.h(), t.f(), t.u(), t.K.add(t.d), t.K.mixin(n.m, t.l); })))(); }
function k() { return (k = e.n((function () { t.q(), t.c(), t.o(), t.i(), t.K.add(t.r, t.s), t.K.add(t.a); })))(); }
var A = e.r({});
function j() { return (j = e.n((function () { E(), D(), O(), r.T(), i.C(), k(); })))(); }
var M = e.r({});
function N() { return (N = e.n((function () { r.T(), i.C(), k(); })))(); }
Object.defineProperty(exports, "a", { enumerable: !0, get: function () { return _; } }), Object.defineProperty(exports, "i", { enumerable: !0, get: function () { return j; } }), Object.defineProperty(exports, "n", { enumerable: !0, get: function () { return M; } }), Object.defineProperty(exports, "o", { enumerable: !0, get: function () { return T; } }), Object.defineProperty(exports, "r", { enumerable: !0, get: function () { return A; } }), Object.defineProperty(exports, "s", { enumerable: !0, get: function () { return w; } }), Object.defineProperty(exports, "t", { enumerable: !0, get: function () { return N; } });
