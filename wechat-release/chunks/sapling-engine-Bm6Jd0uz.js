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
var e = require("./rolldown-runtime-8PkXcCTM.js"), t = require("./sapling-engine-OS5i6gdH.js"), n = require("./sapling-engine-BSPBfx32.js");
function r(e, t) { return new C(e, t); }
function i(e) { return String(Number.isInteger(e) ? e : Math.round(e * 100) / 100); }
function a(e) { var t = 7.5625, n = 2.75; return e < 1 / n ? t * e * e : e < 2 / n ? t * (e -= 1.5 / n) * e + .75 : e < 2.5 / n ? t * (e -= 2.25 / n) * e + .9375 : t * (e -= 2.625 / n) * e + .984375; }
function o(e, t) { var n = e._colorProps; return n instanceof Set && n.has(t); }
function s(e, t, n) { var r = 0; for (var _i = 0, _a = [16, 8, 0]; _i < _a.length; _i++) {
    var i_1 = _a[_i];
    var a_1 = e >> i_1 & 255, o_1 = t >> i_1 & 255;
    r |= Math.round(a_1 + (o_1 - a_1) * n) << i_1;
} return r; }
function c(e) { return "isFreed" in e && e.isFreed === !0; }
function l() { return { a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0 }; }
function u(e, t) { var n = e.a, r = e.b, i = e.c, a = e.d, o = e.tx, s = e.ty, c = n * a - r * i; return c !== 0 && (t.a = a / c, t.b = -r / c, t.c = -i / c, t.d = n / c, t.tx = (i * s - a * o) / c, t.ty = (r * o - n * s) / c, !0); }
function d(e, t, n, r) { return new A(e, t, n, r); }
function f(e) { if (!M.includes(e))
    throw Error("Node2D: unknown blendMode \"".concat(String(e), "\". Expected: ").concat(M.join(", "), ".")); return e; }
function p(e) { return Math.min(1, Math.max(0, e)); }
function m(e) { return Math.min(P, Math.max(0, Math.round(e))); }
function h(e) { return "#" + e.toString(16).padStart(6, "0"); }
function g(e) { for (var t_1 = 1; t_1 < e.length; t_1++) {
    var n_1 = e[t_1], r_1 = t_1 - 1;
    for (; r_1 >= 0 && e[r_1].layer > n_1.layer;)
        e[r_1 + 1] = e[r_1], r_1--;
    e[r_1 + 1] = n_1;
} }
function _(e) { var t = 0; for (; t < e.length && e[t].layer < 0;)
    t++; return t; }
function v(e, t, n) { var r = []; y(e, r), g(r); var i = _(r), a = function (e, r) { var i = t.length; if (b(e, t), n)
    for (var e_1 = i; e_1 < t.length; e_1++)
        n[e_1] = r; }; for (var e_2 = 0; e_2 < i; e_2++)
    a(r[e_2].children, !0); a(e, !1); for (var e_3 = i; e_3 < r.length; e_3++)
    a(r[e_3].children, !0); }
function y(e, t) { for (var _i = 0, e_4 = e; _i < e_4.length; _i++) {
    var n_2 = e_4[_i];
    n_2._isCanvasLayer && t.push(n_2), y(n_2.children, t);
} }
function b(e, t, n) {
    if (n === void 0) { n = null; }
    var r = [], i = function (e) { for (var _i = 0, e_5 = e; _i < e_5.length; _i++) {
        var t_2 = e_5[_i];
        t_2._isCanvasLayer || (t_2 instanceof N ? r.push(t_2) : i(t_2.children));
    } };
    i(e);
    var a = r.map(function (e, t) { return ({ n: e, i: t, z: e.zIndex }); });
    n && a.push({ n: n, i: -1, z: 0 }), a.sort(function (e, t) { return e.z - t.z || e.i - t.i; });
    for (var _i = 0, a_2 = a; _i < a_2.length; _i++) {
        var _a = a_2[_i], e_6 = _a.n, n_3 = _a.i;
        n_3 === -1 ? t.push(e_6) : b(e_6.children, t, e_6);
    }
}
var x, S, C, w, T, ee, E, te, D, O, ne, k, A, j, re, M, N, P, ie, ae, oe, F;
function I() { return (I = e.n((function () { t.c(), t.o(), x = (function () {
    function e(e, n) {
        t.s(this, "x", void 0), t.s(this, "y", void 0), this.x = e, this.y = n, Object.freeze(this);
    }
    e.fromAngle = function (t) { return new e(Math.cos(t), Math.sin(t)); };
    e.prototype.add = function (t) { return new e(this.x + t.x, this.y + t.y); };
    e.prototype.sub = function (t) { return new e(this.x - t.x, this.y - t.y); };
    e.prototype.mul = function (t) { return typeof t == "number" ? new e(this.x * t, this.y * t) : new e(this.x * t.x, this.y * t.y); };
    e.prototype.div = function (t) { return typeof t == "number" ? new e(this.x / t, this.y / t) : new e(this.x / t.x, this.y / t.y); };
    e.prototype.neg = function () { return new e(-this.x, -this.y); };
    e.prototype.dot = function (e) { return this.x * e.x + this.y * e.y; };
    e.prototype.cross = function (e) { return this.x * e.y - this.y * e.x; };
    e.prototype.length = function () { return Math.hypot(this.x, this.y); };
    e.prototype.lengthSquared = function () { return this.x * this.x + this.y * this.y; };
    e.prototype.normalized = function () { var t = this.length(); return t === 0 ? e.ZERO : new e(this.x / t, this.y / t); };
    e.prototype.distanceTo = function (e) { return Math.hypot(this.x - e.x, this.y - e.y); };
    e.prototype.angle = function () { return Math.atan2(this.y, this.x); };
    e.prototype.angleTo = function (e) { return Math.atan2(this.cross(e), this.dot(e)); };
    e.prototype.rotated = function (t) { var n = Math.cos(t), r = Math.sin(t); return new e(this.x * n - this.y * r, this.x * r + this.y * n); };
    e.prototype.lerp = function (t, n) { return new e(this.x + (t.x - this.x) * n, this.y + (t.y - this.y) * n); };
    e.prototype.equals = function (e) { return this.x === e.x && this.y === e.y; };
    e.prototype.isEqualApprox = function (e, t) {
        if (t === void 0) { t = 1e-6; }
        return Math.abs(this.x - e.x) <= t && Math.abs(this.y - e.y) <= t;
    };
    e.prototype.toString = function () { return "(".concat(i(this.x), ", ").concat(i(this.y), ")"); };
    return e;
}()), C = (t.s(x, "ZERO", new x(0, 0)), t.s(x, "ONE", new x(1, 1)), t.s(x, "UP", new x(0, -1)), t.s(x, "DOWN", new x(0, 1)), t.s(x, "LEFT", new x(-1, 0)), t.s(x, "RIGHT", new x(1, 0)), x), w = (function () {
    function w() {
        t.s(this, "_listeners", []);
    }
    Object.defineProperty(w.prototype, "connectionCount", {
        get: function () { return this._listeners.length; },
        enumerable: false,
        configurable: true
    });
    w.prototype.connect = function (e, t) { return this._add(e, !1, t); };
    w.prototype.once = function (e, t) { return this._add(e, !0, t); };
    w.prototype.disconnect = function (e) { var t = this._listeners.find(function (t) { return t.fn === e; }); t && this._remove(t); };
    w.prototype.isConnected = function (e) { return this._listeners.some(function (t) { return t.fn === e; }); };
    w.prototype.disconnectAll = function () { for (var _i = 0, _a = __spreadArray([], this._listeners, true); _i < _a.length; _i++) {
        var e_7 = _a[_i];
        this._remove(e_7);
    } };
    w.prototype.emit = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        for (var _a = 0, _b = __spreadArray([], this._listeners, true); _a < _b.length; _a++) {
            var t_3 = _b[_a];
            t_3.active && (t_3.once && this._remove(t_3), t_3.fn.apply(t_3, e));
        }
    };
    w.prototype._remove = function (e) { var t; e.active && (e.active = !1, this._listeners = this._listeners.filter(function (t) { return t !== e; }), (t = e.owner) == null || t._untrackConnection(this, e.fn)); };
    w.prototype.wait = function () {
        var _this = this;
        return new Promise(function (e) { _this.once(function () {
            var t = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                t[_i] = arguments[_i];
            }
            return e(t.length === 0 ? void 0 : t.length === 1 ? t[0] : t);
        }); });
    };
    w.prototype.then = function (e, t) { return this.wait().then(e, t); };
    w.prototype._add = function (e, t, n) {
        var _this = this;
        return this.isConnected(e) || (this._listeners.push({ fn: e, once: t, owner: n, active: !0 }), n == null || n._trackConnection(this, e)), function () { return _this.disconnect(e); };
    };
    return w;
}()), T = 1.70158, ee = T * 1.525, E = 2.70158, te = 2 * Math.PI / 3, D = { Linear: function (e) { return e; }, QuadIn: function (e) { return e * e; }, QuadOut: function (e) { return 1 - (1 - e) * (1 - e); }, QuadInOut: function (e) { return e < .5 ? 2 * e * e : 1 - Math.pow((-2 * e + 2), 2) / 2; }, CubicIn: function (e) { return e * e * e; }, CubicOut: function (e) { return 1 - Math.pow((1 - e), 3); }, CubicInOut: function (e) { return e < .5 ? 4 * e * e * e : 1 - Math.pow((-2 * e + 2), 3) / 2; }, SineIn: function (e) { return 1 - Math.cos(e * Math.PI / 2); }, SineOut: function (e) { return Math.sin(e * Math.PI / 2); }, SineInOut: function (e) { return -(Math.cos(Math.PI * e) - 1) / 2; }, BackIn: function (e) { return E * e * e * e - T * e * e; }, BackOut: function (e) { return 1 + E * Math.pow((e - 1), 3) + T * Math.pow((e - 1), 2); }, BackInOut: function (e) { return e < .5 ? Math.pow((2 * e), 2) * (7.189819 * e - ee) / 2 : (Math.pow((2 * e - 2), 2) * (3.5949095 * (e * 2 - 2) + ee) + 2) / 2; }, ElasticOut: function (e) { return e === 0 ? 0 : e === 1 ? 1 : Math.pow(2, (-10 * e)) * Math.sin((e * 10 - .75) * te) + 1; }, BounceOut: a, BounceIn: function (e) { return 1 - a(1 - e); } }, O = (function () {
    function O(e, n) {
        if (n === void 0) { n = !1; }
        t.s(this, "finished", new w), t.s(this, "_steps", []), t.s(this, "_nextParallel", !1), t.s(this, "_stepIndex", 0), t.s(this, "_stepTime", 0), t.s(this, "_stepStarted", !1), t.s(this, "_running", !0), t.s(this, "_bound", void 0), t.s(this, "processInPhysics", void 0), this._bound = e, this.processInPhysics = n;
    }
    Object.defineProperty(O.prototype, "isRunning", {
        get: function () { return this._running; },
        enumerable: false,
        configurable: true
    });
    O.prototype.to = function (e, t, n, r) {
        if (r === void 0) { r = D.Linear; }
        var i = Object.keys(t);
        var _loop_1 = function (a_3, l_1) {
            a_3 > 0 && (this_1._nextParallel = !0);
            var i_2 = t[l_1], u_1 = 0, d_1 = e;
            this_1._add({ duration: Math.max(0, n), start: function () { var t = d_1[l_1]; if (typeof t != "number" && !(t instanceof C))
                    throw Error("Tween: property \"".concat(l_1, "\" of ").concat(e.constructor.name, " is not a number or Vector2")); u_1 = t; }, update: function (t) { if (c(e))
                    return; var n = r(t); typeof u_1 == "number" ? o(e, l_1) ? d_1[l_1] = s(u_1, i_2, n) : d_1[l_1] = u_1 + (i_2 - u_1) * n : d_1[l_1] = u_1.lerp(i_2, n); } });
        };
        var this_1 = this;
        for (var _i = 0, _a = i.entries(); _i < _a.length; _i++) {
            var _b = _a[_i], a_3 = _b[0], l_1 = _b[1];
            _loop_1(a_3, l_1);
        }
        return this;
    };
    O.prototype.wait = function (e) { return this._add({ duration: Math.max(0, e), start: function () { }, update: function () { } }), this; };
    O.prototype.call = function (e) { var t = !1; return this._add({ duration: 0, start: function () { return t = !1; }, update: function () { t || (t = !0, e()); } }), this; };
    O.prototype.parallel = function () { return this._nextParallel = !0, this; };
    O.prototype.kill = function () { this._running = !1; };
    O.prototype._add = function (e) { var t = this._steps[this._steps.length - 1]; this._nextParallel && t ? t.push(e) : this._steps.push([e]), this._nextParallel = !1; };
    O.prototype._advance = function (e, t) {
        var _this = this;
        if (!this._running)
            return !1;
        if (this._bound && (this._bound.isFreed || this._bound.isQueuedForDeletion))
            return this._running = !1, !1;
        if (this._bound ? !this._bound.canProcess() : t)
            return !0;
        var n = e;
        for (; this._stepIndex < this._steps.length;) {
            var e_10 = this._steps[this._stepIndex];
            if (!this._stepStarted) {
                for (var _i = 0, e_8 = e_10; _i < e_8.length; _i++) {
                    var t_4 = e_8[_i];
                    t_4.start();
                }
                this._stepStarted = !0, this._stepTime = 0;
            }
            var t_5 = Math.max.apply(Math, e_10.map(function (e) { return e.duration; }));
            this._stepTime += n;
            var r_2 = function (e) { return _this._stepTime >= e.duration - ne ? 1 : _this._stepTime / e.duration; };
            for (var _a = 0, e_9 = e_10; _a < e_9.length; _a++) {
                var t_6 = e_9[_a];
                t_6.update(r_2(t_6));
            }
            if (!this._running)
                return !1;
            if (this._stepTime < t_5 - ne)
                return !0;
            n = Math.max(0, this._stepTime - t_5), this._stepIndex++, this._stepStarted = !1;
        }
        return this._running = !1, this.finished.emit(), !1;
    };
    return O;
}()), ne = 1e-9, k = (function () {
    function e(e) {
        if (e === void 0) { e = {}; }
        var n, r, i;
        t.s(this, "_name", void 0), t.s(this, "_parent", null), t.s(this, "_children", []), t.s(this, "_childByName", new Map), t.s(this, "_nextSuffix", new Map), t.s(this, "_tree", null), t.s(this, "_isReady", !1), t.s(this, "_queuedForDeletion", !1), t.s(this, "_freed", !1), t.s(this, "_groups", new Set), t.s(this, "_connections", []), t.s(this, "processMode", void 0), this._name = (n = e.name) == null ? this.constructor.name : n, this.processMode = (r = e.processMode) == null ? "inherit" : r;
        for (var _i = 0, _a = (i = e.groups) == null ? [] : i; _i < _a.length; _i++) {
            var t_7 = _a[_i];
            this._groups.add(t_7);
        }
    }
    e.prototype.enterTree = function () { };
    e.prototype.ready = function () { };
    e.prototype.process = function (e) { };
    e.prototype.physicsProcess = function (e) { };
    e.prototype.exitTree = function () { };
    Object.defineProperty(e.prototype, "name", {
        get: function () { return this._name; },
        set: function (e) { var t = this._parent; t ? (t._unindexChild(this), this._name = t._uniqueChildName(e, this), t._childByName.set(this._name, this)) : this._name = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "parent", {
        get: function () { return this._parent; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "children", {
        get: function () { return this._children; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "isInsideTree", {
        get: function () { return this._tree !== null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "isReady", {
        get: function () { return this._isReady; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "tree", {
        get: function () { if (!this._tree)
            throw Error("Node \"".concat(this._name, "\" (").concat(this.constructor.name, ") is not inside the scene tree yet. Use the tree in enterTree() or ready(), not in the constructor.")); return this._tree; },
        enumerable: false,
        configurable: true
    });
    e.prototype.add = function (e) { if (this._assertNotFreed("add a child to"), e._assertNotFreed("add"), e._parent)
        throw Error("Cannot add \"".concat(e._name, "\" to \"").concat(this._name, "\": it already has a parent \"").concat(e._parent._name, "\". Remove it first.")); for (var t_8 = this; t_8; t_8 = t_8._parent)
        if (t_8 === e)
            throw Error("Cannot add \"".concat(e._name, "\" to \"").concat(this._name, "\": a node cannot be its own ancestor.")); return e._name = this._uniqueChildName(e._name, e), this._childByName.set(e._name, e), e._parent = this, this._children.push(e), this._tree && (e._propagateEnterTree(this._tree), e._propagateReady()), e; };
    e.prototype.remove = function (e) { var t = this._children.indexOf(e); if (t === -1)
        throw Error("\"".concat(e._name, "\" is not a child of \"").concat(this._name, "\".")); e._tree && e._propagateExitTree(), this._children.splice(t, 1), this._unindexChild(e), e._parent = null; };
    e.prototype._uniqueChildName = function (e, t) {
        var _this = this;
        var n;
        var r = function (e) { var n = _this._childByName.get(e); return n !== void 0 && n !== t; };
        if (!r(e))
            return e;
        var i = e.replace(/\d+$/, ""), a = (n = this._nextSuffix.get(i)) == null ? 2 : n;
        for (; r("".concat(i).concat(a));)
            a++;
        return this._nextSuffix.set(i, a + 1), "".concat(i).concat(a);
    };
    e.prototype._unindexChild = function (e) { this._childByName.get(e._name) === e && this._childByName.delete(e._name); };
    Object.defineProperty(e.prototype, "effectiveProcessMode", {
        get: function () { for (var e_11 = this; e_11; e_11 = e_11._parent)
            if (e_11.processMode !== "inherit")
                return e_11.processMode; return "pausable"; },
        enumerable: false,
        configurable: true
    });
    e.prototype.canProcess = function () { return this._tree ? !this._tree.paused || this.effectiveProcessMode === "always" : !1; };
    Object.defineProperty(e.prototype, "isQueuedForDeletion", {
        get: function () { return this._queuedForDeletion; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "isFreed", {
        get: function () { return this._freed; },
        enumerable: false,
        configurable: true
    });
    e.prototype.queueFree = function () { this._freed || this._queuedForDeletion || (this._tree ? (this._queuedForDeletion = !0, this._tree._queueFree(this)) : this._free()); };
    e.prototype.callDeferred = function (e) {
        var _this = this;
        this.tree.callDeferred(function () { _this._freed || e(); });
    };
    e.prototype._free = function () { this._freed || (this._parent ? this._parent.remove(this) : this._tree && this._propagateExitTree(), this._markFreed()); };
    e.prototype._markFreed = function () { for (var _i = 0, _a = this._children; _i < _a.length; _i++) {
        var e_12 = _a[_i];
        e_12._markFreed();
    } this._freed = !0, this._queuedForDeletion = !1; for (var _b = 0, _c = __spreadArray([], this._connections, true); _b < _c.length; _b++) {
        var _d = _c[_b], e_13 = _d.signal, t_9 = _d.listener;
        e_13.disconnect(t_9);
    } this._connections = []; for (var _f = 0, _g = Object.values(this); _f < _g.length; _f++) {
        var e_14 = _g[_f];
        e_14 instanceof w && e_14.disconnectAll();
    } this._groups.clear(), this._onFreed(); };
    Object.defineProperty(e.prototype, "_isCanvasLayer", {
        get: function () { return !1; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "_canvasParent", {
        get: function () { var e = this.parent; return e && !e._isCanvasLayer ? e : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "_canvasLayer", {
        get: function () { for (var e_15 = this.parent; e_15; e_15 = e_15.parent)
            if (e_15._isCanvasLayer)
                return e_15; return null; },
        enumerable: false,
        configurable: true
    });
    e.prototype._onFreed = function () { };
    e.prototype._onEnterTree = function () { };
    e.prototype._onExitTree = function () { };
    e.prototype._internalProcess = function (e) { };
    e.prototype._internalPhysicsProcess = function (e) { };
    Object.defineProperty(e.prototype, "_needsPhysicsStep", {
        get: function () { return !1; },
        enumerable: false,
        configurable: true
    });
    e.prototype.createTween = function (e) {
        if (e === void 0) { e = {}; }
        var t;
        return this.tree._addTween(new O(this, (t = e.processInPhysics) != null && t));
    };
    e.prototype._trackConnection = function (e, t) { this._assertNotFreed("connect a signal to"), this._connections.push({ signal: e, listener: t }); };
    e.prototype._untrackConnection = function (e, t) { var n = this._connections.findIndex(function (n) { return n.signal === e && n.listener === t; }); n !== -1 && this._connections.splice(n, 1); };
    Object.defineProperty(e.prototype, "_connectionCount", {
        get: function () { return this._connections.length; },
        enumerable: false,
        configurable: true
    });
    e.prototype._assertNotFreed = function (e) { if (this._freed)
        throw Error("Cannot ".concat(e, " \"").concat(this._name, "\" (").concat(this.constructor.name, "): the node has been freed.")); };
    Object.defineProperty(e.prototype, "groups", {
        get: function () { return __spreadArray([], this._groups, true); },
        enumerable: false,
        configurable: true
    });
    e.prototype.addToGroup = function (e) { this._groups.add(e); };
    e.prototype.removeFromGroup = function (e) { this._groups.delete(e); };
    e.prototype.isInGroup = function (e) { return this._groups.has(e); };
    e.prototype._attachAsRoot = function (e) { this._propagateEnterTree(e), this._propagateReady(); };
    e.prototype._propagateEnterTree = function (e) { this._tree = e, this._usesPhysicsStep() && e._physicsProcessNodes++, this._onEnterTree(), this.enterTree(); for (var _i = 0, _a = __spreadArray([], this._children, true); _i < _a.length; _i++) {
        var t_10 = _a[_i];
        t_10._parent === this && t_10._tree !== e && t_10._propagateEnterTree(e);
    } };
    e.prototype._propagateReady = function () { for (var _i = 0, _a = __spreadArray([], this._children, true); _i < _a.length; _i++) {
        var e_16 = _a[_i];
        e_16._parent === this && e_16._tree && e_16._propagateReady();
    } !this._isReady && this._tree && (this._isReady = !0, this.ready()); };
    e.prototype._propagateExitTree = function () { for (var _i = 0, _a = __spreadArray([], this._children, true); _i < _a.length; _i++) {
        var e_17 = _a[_i];
        e_17._propagateExitTree();
    } this.exitTree(), this._onExitTree(), this._tree && this._usesPhysicsStep() && this._tree._physicsProcessNodes--, this._tree = null; };
    e.prototype._usesPhysicsStep = function () { return this.physicsProcess !== e.prototype.physicsProcess || this._needsPhysicsStep; };
    e.prototype._collect = function (e) { e.push(this); var t = this._children; for (var n_4 = 0; n_4 < t.length; n_4++)
        t[n_4]._collect(e); };
    e.prototype.dumpProps = function () { return {}; };
    e.prototype._dump = function () { var e = {}; for (var _i = 0, _a = Object.entries(this.dumpProps()); _i < _a.length; _i++) {
        var _b = _a[_i], t_11 = _b[0], n_5 = _b[1];
        n_5 !== void 0 && (e[t_11] = n_5 instanceof C ? n_5.toString() : n_5);
    } return this._groups.size && (e.groups = __spreadArray([], this._groups, true)), this.processMode !== "inherit" && (e.processMode = this.processMode), { type: this.constructor.name, name: this._name, props: e, children: this._children.map(function (e) { return e._dump(); }) }; };
    return e;
}()), A = (function () {
    function e(e, n, r, i) {
        t.s(this, "x", void 0), t.s(this, "y", void 0), t.s(this, "width", void 0), t.s(this, "height", void 0), this.x = e, this.y = n, this.width = r, this.height = i, Object.freeze(this);
    }
    Object.defineProperty(e.prototype, "position", {
        get: function () { return new C(this.x, this.y); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "size", {
        get: function () { return new C(this.width, this.height); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "left", {
        get: function () { return this.x; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "top", {
        get: function () { return this.y; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "right", {
        get: function () { return this.x + this.width; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "bottom", {
        get: function () { return this.y + this.height; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "center", {
        get: function () { return new C(this.x + this.width / 2, this.y + this.height / 2); },
        enumerable: false,
        configurable: true
    });
    e.prototype.contains = function (e) { return e.x >= this.x && e.y >= this.y && e.x < this.right && e.y < this.bottom; };
    e.prototype.intersection = function (t) { var n = Math.max(this.x, t.x), r = Math.max(this.y, t.y); return new e(n, r, Math.max(0, Math.min(this.right, t.right) - n), Math.max(0, Math.min(this.bottom, t.bottom) - r)); };
    e.prototype.isEqualApprox = function (e, t) {
        if (t === void 0) { t = 1e-6; }
        return [this.x - e.x, this.y - e.y, this.width - e.width, this.height - e.height].every(function (e) { return Math.abs(e) <= t; });
    };
    e.prototype.toString = function () { return "Rect2(".concat(i(this.x), ", ").concat(i(this.y), ", ").concat(i(this.width), ", ").concat(i(this.height), ")"); };
    return e;
}()), j = (S = (function () {
    function e(e, n, r, i, a, o) {
        t.s(this, "a", void 0), t.s(this, "b", void 0), t.s(this, "c", void 0), t.s(this, "d", void 0), t.s(this, "tx", void 0), t.s(this, "ty", void 0), this.a = e, this.b = n, this.c = r, this.d = i, this.tx = a, this.ty = o, Object.freeze(this);
    }
    e.fromParts = function (t, n, r) { var i = Math.cos(n), a = Math.sin(n); return new e(i * r.x, a * r.x, -a * r.y, i * r.y, t.x, t.y); };
    e.prototype.multiply = function (t) { return new e(this.a * t.a + this.c * t.b, this.b * t.a + this.d * t.b, this.a * t.c + this.c * t.d, this.b * t.c + this.d * t.d, this.a * t.tx + this.c * t.ty + this.tx, this.b * t.tx + this.d * t.ty + this.ty); };
    e.prototype.inverse = function () { var t = re; return u(this, t) ? new e(t.a, t.b, t.c, t.d, t.tx, t.ty) : null; };
    e.prototype.apply = function (e) { return new C(this.a * e.x + this.c * e.y + this.tx, this.b * e.x + this.d * e.y + this.ty); };
    Object.defineProperty(e.prototype, "origin", {
        get: function () { return new C(this.tx, this.ty); },
        enumerable: false,
        configurable: true
    });
    return e;
}()), t.s(S, "IDENTITY", new S(1, 0, 0, 1, 0, 0)), S), re = l(), M = ["inherit", "normal", "add"], N = (function (_super) {
    __extends(e, _super);
    function e(e) {
        if (e === void 0) { e = {}; }
        var _this = this;
        var n, r, i, a, o, s, c, l, u, d, h, g;
        _this = _super.call(this, e) || this, t.s(_this, "_x", void 0), t.s(_this, "_y", void 0), t.s(_this, "_positionCache", null), t.s(_this, "_rotation", void 0), t.s(_this, "_scale", void 0), t.s(_this, "_visible", void 0), t.s(_this, "_zIndex", void 0), t.s(_this, "_alpha", void 0), t.s(_this, "_modulate", void 0), t.s(_this, "_selfModulate", void 0), t.s(_this, "_blendMode", void 0), t.s(_this, "_clipRect", void 0), t.s(_this, "_pointerDown", null), t.s(_this, "_pointerMove", null), t.s(_this, "_pointerUp", null), t.s(_this, "_clicked", null), t.s(_this, "inputPickable", void 0), t.s(_this, "hitArea", void 0), t.s(_this, "_transformVersion", 0), t.s(_this, "_version", 0), t.s(_this, "_view", null);
        var _ = (n = e.position) == null ? C.ZERO : n;
        _this._x = _.x, _this._y = _.y, _this._positionCache = _, _this._rotation = (r = e.rotation) == null ? 0 : r, _this._scale = (i = e.scale) == null ? C.ONE : i, _this._visible = (a = e.visible) == null || a, _this._zIndex = (o = e.zIndex) == null ? 0 : o, _this._alpha = p((s = e.alpha) == null ? 1 : s), _this._modulate = m((c = e.modulate) == null ? P : c), _this._selfModulate = m((l = e.selfModulate) == null ? P : l), _this._blendMode = f((u = e.blendMode) == null ? "inherit" : u), _this.inputPickable = (d = e.inputPickable) != null && d, _this.hitArea = (h = e.hitArea) == null ? null : h, _this._clipRect = (g = e.clipRect) == null ? null : g;
        return _this;
    }
    Object.defineProperty(e.prototype, "position", {
        get: function () { var e; return (e = this._positionCache) == null ? this._positionCache = new C(this._x, this._y) : e; },
        set: function (e) { this._x = e.x, this._y = e.y, this._positionCache = e, this._transformVersion++, this._transformChanged(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "x", {
        get: function () { return this._x; },
        set: function (e) { this._x = e, this._positionCache = null, this._transformVersion++, this._transformChanged(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "y", {
        get: function () { return this._y; },
        set: function (e) { this._y = e, this._positionCache = null, this._transformVersion++, this._transformChanged(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "rotation", {
        get: function () { return this._rotation; },
        set: function (e) { this._rotation = e, this._transformVersion++, this._transformChanged(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "rotationDegrees", {
        get: function () { return this._rotation * 180 / Math.PI; },
        set: function (e) { this.rotation = e * Math.PI / 180; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "scale", {
        get: function () { return this._scale; },
        set: function (e) { this._scale = e, this._transformVersion++, this._transformChanged(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "visible", {
        get: function () { return this._visible; },
        set: function (e) { this._visible = e, this._version++; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "zIndex", {
        get: function () { return this._zIndex; },
        set: function (e) { this._zIndex = e, this._version++; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "alpha", {
        get: function () { return this._alpha; },
        set: function (e) { this._alpha = p(e), this._version++; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "modulate", {
        get: function () { return this._modulate; },
        set: function (e) { this._modulate = m(e), this._version++; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "selfModulate", {
        get: function () { return this._selfModulate; },
        set: function (e) { this._selfModulate = m(e), this._version++; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "blendMode", {
        get: function () { return this._blendMode; },
        set: function (e) { e !== this._blendMode && (this._blendMode = f(e), this._version++); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "clipRect", {
        get: function () { return this._clipRect; },
        set: function (e) { e !== this._clipRect && (this._clipRect = e, this._version++); },
        enumerable: false,
        configurable: true
    });
    e.prototype._insideClips = function (t) { for (var n_6 = this; n_6; n_6 = n_6._canvasParent) {
        if (!(n_6 instanceof e) || !n_6._clipRect)
            continue;
        var r_3 = n_6.globalTransform.inverse();
        if (!r_3 || !n_6._clipRect.contains(r_3.apply(t)))
            return !1;
    } return !0; };
    Object.defineProperty(e.prototype, "_colorProps", {
        get: function () { return ie; },
        enumerable: false,
        configurable: true
    });
    e.prototype._transformChanged = function () { };
    Object.defineProperty(e.prototype, "transform", {
        get: function () { return j.fromParts(this.position, this._rotation, this._scale); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "globalTransform", {
        get: function () { var e = ae; return this._computeGlobalInto(e), new j(e.a, e.b, e.c, e.d, e.tx, e.ty); },
        enumerable: false,
        configurable: true
    });
    e.prototype._computeGlobalInto = function (t) { var n = 1, r = 0, i = 0, a = 1, o = 0, s = 0; for (var t_12 = this; t_12; t_12 = t_12._canvasParent) {
        if (!(t_12 instanceof e))
            continue;
        var c_1 = t_12.scale, l_2 = t_12.rotation, u_2 = l_2 === 0 ? 1 : Math.cos(l_2), d_2 = l_2 === 0 ? 0 : Math.sin(l_2), f_1 = u_2 * c_1.x, p_1 = d_2 * c_1.x, m_1 = -d_2 * c_1.y, h_1 = u_2 * c_1.y, g_1 = f_1 * n + m_1 * r, _1 = p_1 * n + h_1 * r, v_1 = f_1 * i + m_1 * a, y_1 = p_1 * i + h_1 * a, b_1 = f_1 * o + m_1 * s + t_12.x, x_1 = p_1 * o + h_1 * s + t_12.y;
        n = g_1, r = _1, i = v_1, a = y_1, o = b_1, s = x_1;
    } t.a = n, t.b = r, t.c = i, t.d = a, t.tx = o, t.ty = s; };
    Object.defineProperty(e.prototype, "globalRotation", {
        get: function () { var e = this.globalTransform; return Math.atan2(e.b, e.a); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "globalPosition", {
        get: function () { return this.globalTransform.origin; },
        enumerable: false,
        configurable: true
    });
    e.prototype.toLocal = function (e) { var t, n; return (t = (n = this.globalTransform.inverse()) == null ? void 0 : n.apply(e)) == null ? C.ZERO : t; };
    e.prototype.toGlobal = function (e) { return this.globalTransform.apply(e); };
    Object.defineProperty(e.prototype, "isVisibleInTree", {
        get: function () { for (var t_13 = this; t_13; t_13 = t_13._canvasParent)
            if (t_13 instanceof e && !t_13.visible)
                return !1; for (var e_18 = this._canvasLayer; e_18; e_18 = e_18._canvasLayer)
            if (!e_18.visible)
                return !1; return !0; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "pointerDown", {
        get: function () { var e; return (e = this._pointerDown) == null ? this._pointerDown = new w : e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "pointerMove", {
        get: function () { var e; return (e = this._pointerMove) == null ? this._pointerMove = new w : e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "pointerUp", {
        get: function () { var e; return (e = this._pointerUp) == null ? this._pointerUp = new w : e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "clicked", {
        get: function () { var e; return (e = this._clicked) == null ? this._clicked = new w : e; },
        enumerable: false,
        configurable: true
    });
    e.prototype.capturePointer = function (e) { return this.isInsideTree && this.tree.input._capturePointer(e, this); };
    e.prototype.hasPointerCapture = function (e, t) {
        if (t === void 0) { t = !1; }
        return this.isInsideTree && this.tree.input._hasPointerCapture(e, this, t);
    };
    e.prototype.hitTest = function (e) { var t; var n = this.hitArea; return n ? n instanceof A ? n.contains(e) : e.distanceTo((t = n.center) == null ? C.ZERO : t) <= n.radius : !1; };
    e.prototype._onFreed = function () { for (var _i = 0, _a = [this._pointerDown, this._pointerMove, this._pointerUp, this._clicked]; _i < _a.length; _i++) {
        var e_19 = _a[_i];
        e_19 == null || e_19.disconnectAll();
    } };
    Object.defineProperty(e.prototype, "unsafePixi", {
        get: function () { return this._view; },
        enumerable: false,
        configurable: true
    });
    e.prototype.dumpProps = function () { return { position: this.position, rotationDegrees: this._rotation === 0 ? void 0 : Math.round(this.rotationDegrees * 100) / 100, scale: this._scale.equals(C.ONE) ? void 0 : this._scale, visible: this._visible ? void 0 : !1, zIndex: this._zIndex === 0 ? void 0 : this._zIndex, alpha: this._alpha === 1 ? void 0 : Math.round(this._alpha * 100) / 100, modulate: this._modulate === P ? void 0 : h(this._modulate), selfModulate: this._selfModulate === P ? void 0 : h(this._selfModulate), blendMode: this._blendMode === "inherit" ? void 0 : this._blendMode, clipRect: this._clipRect ? "(".concat(i(this._clipRect.x), ", ").concat(i(this._clipRect.y), ", ").concat(i(this._clipRect.width), ", ").concat(i(this._clipRect.height), ")") : void 0 }; };
    return e;
}(k)), P = 16777215, ie = new Set(["modulate", "selfModulate"]), ae = l(), oe = new Set(["modulate", "selfModulate", "color"]), F = (function (_super) {
    __extends(F, _super);
    function F(e) {
        if (e === void 0) { e = {}; }
        var _this = this;
        var n, r;
        _this = _super.call(this, e) || this, t.s(_this, "_size", void 0), t.s(_this, "_color", void 0), _this._size = (n = e.size) == null ? C.ZERO : n, _this._color = m((r = e.color) == null ? 16777215 : r);
        return _this;
    }
    Object.defineProperty(F.prototype, "size", {
        get: function () { return this._size; },
        set: function (e) { this._size = e, this._version++; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(F.prototype, "color", {
        get: function () { return this._color; },
        set: function (e) { this._color = m(e), this._version++; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(F.prototype, "rect", {
        get: function () { return new A(0, 0, this._size.x, this._size.y); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(F.prototype, "_colorProps", {
        get: function () { return oe; },
        enumerable: false,
        configurable: true
    });
    F.prototype.hitTest = function (e) { if (this.hitArea)
        return _super.prototype.hitTest.call(this, e); var t = this._size; return e.x >= 0 && e.y >= 0 && e.x <= t.x && e.y <= t.y; };
    F.prototype.dumpProps = function () { return t.a(t.a({}, _super.prototype.dumpProps.call(this)), {}, { size: this._size, color: h(this._color) }); };
    return F;
}(N)); })))(); }
function L(e) { return Math.min(1, Math.max(0, e)); }
function se(e, t) { return t == null ? !0 : Array.isArray(t) ? Array.isArray(e) : e === null || Array.isArray(e) ? !1 : typeof e == typeof t; }
function ce(e) { return e.flatMap(function (e) { return __spreadArray([e], e._textures().flatMap(function (e) { return __spreadArray([e], e._textures(), true); }), true); }); }
function le(e, t) { if (!e.isLoaded)
    return e._load(t).then(function () { return Promise.all(e._textures().map(function (e) { return e._load(t); })); }).then(function () { return void 0; }); }
function ue(e) { var t = e.type; return t === "pointerdown" || t === "pointermove" || t === "pointerup" || t === "pointercancel"; }
function R(e) { return !e.isQueuedForDeletion && e.isVisibleInTree && e.canProcess(); }
function de(e, t, n, r) { if (!R(e))
    return !1; var i = e.globalTransform.inverse(); if (!i)
    return !1; var a = (r == null ? e._canvasLayer !== null : r) ? n : t; return e.hitTest(i.apply(a)) && e._insideClips(a); }
function z(e, t, n, r) { var i = r._canvasLayer ? n : t; return { pointerId: e, position: i, localPosition: r.toLocal(i) }; }
function B(e, t) { var n = e.indexOf(t); n >= 0 && e.splice(n, 1); }
function fe(e, t) { t.length = 0; for (var n_7 = 0; n_7 < e.length; n_7++)
    t.push(e[n_7]); return t; }
function V(e, t, n, r, i) {
    if (i === void 0) { i = n; }
    var a = [];
    for (var o_2 = 0; o_2 < e.length; o_2++) {
        var s_1 = e[o_2];
        (o_2 >= t || s_1._advance(s_1.ignoreTimeScale ? i : n, r)) && a.push(s_1);
    }
    return a;
}
function pe(e) { return typeof e == "number" ? i(e) : Array.isArray(e) ? "[".concat(e.map(pe).join(", "), "]") : typeof e == "string" ? /^\(.*\)$/.test(e) || !(/\s/.test(e) || e === "") ? e : JSON.stringify(e) : String(e); }
function me() { return { install: function (e) { var t = new Q; e.provide(Q, t); var n = e.tree.input; n.addSource(t); var r = e.platform.kind === "browser" ? he(function (e) { return n.enqueue(e); }) : null; return function () { r == null || r(), n.removeSource(t); }; } }; }
function he(e) { var t = globalThis.window; if (!t)
    return null; var n = new Set, r = function (t) { if (t.repeat)
    return; var r = t.type === "keydown"; r ? n.add(t.code) : n.delete(t.code), e({ type: r ? "keydown" : "keyup", code: t.code }); }, i = function () { for (var _i = 0, n_8 = n; _i < n_8.length; _i++) {
    var t_14 = n_8[_i];
    e({ type: "keyup", code: t_14 });
} n.clear(); }; return t.addEventListener("keydown", r), t.addEventListener("keyup", r), t.addEventListener("blur", i), function () { t.removeEventListener("keydown", r), t.removeEventListener("keyup", r), t.removeEventListener("blur", i); }; }
var H, U, W, G, ge, _e, ve, K, ye, be, q, J, Y, xe, Se, Ce, we, Te, X, Ee, Z, De, Q, $, Oe, ke, Ae;
function je() {
    return (je = e.n((function () {
        I(), n.o(), t.c(), t.o(), H = (function (_super) {
            __extends(H, _super);
            function H() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return H;
        }(N)), W = (t.s(H, "assets", {}), H), G = (function () {
            function G(e) {
                if (e === void 0) { e = Date.now(); }
                t.s(this, "_state", void 0), t.s(this, "seed", void 0), this.seed = e >>> 0, this._state = this.seed;
            }
            G.prototype.randf = function () { this._state = this._state + 1831565813 >>> 0; var e = this._state; return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296; };
            G.prototype.randfRange = function (e, t) { return e + (t - e) * this.randf(); };
            G.prototype.randiRange = function (e, t) { return e + Math.floor(this.randf() * (t - e + 1)); };
            G.prototype.pick = function (e) { return e.length === 0 ? void 0 : e[Math.floor(this.randf() * e.length)]; };
            return G;
        }()), ge = (function () {
            function ge(e) {
                var _this = this;
                var r, i, a, o;
                t.s(this, "pixelsPerMeter", void 0), t.s(this, "velocityIterations", void 0), t.s(this, "positionIterations", void 0), t.s(this, "_world", void 0), t.s(this, "_entries", new Map), t.s(this, "_gravity", void 0), t.s(this, "_events", []), t.s(this, "_pairs", new Map), t.s(this, "_queryBox", new n.t), t.s(this, "_queryFound", null), t.s(this, "_onStaticQuery", function (e) { var t = e.getBody(); return t.getType() !== "static" || !n.t.testOverlap(_this._queryBox, e.getAABB(0)) || (_this._queryFound = t.getUserData(), !1); });
                var s = e.physicsSettings;
                this.pixelsPerMeter = (r = s.pixelsPerMeter) == null ? 50 : r, this.velocityIterations = (i = s.velocityIterations) == null ? 8 : i, this.positionIterations = (a = s.positionIterations) == null ? 3 : a, this._gravity = (o = s.gravity) == null ? new C(0, 980) : o, this._world = new n.a({ gravity: this._toMeters(this._gravity) }), this._world.on("begin-contact", function (e) { return _this._onContact(e, !0); }), this._world.on("end-contact", function (e) { return _this._onContact(e, !1); });
            }
            Object.defineProperty(ge.prototype, "gravity", {
                get: function () { return this._gravity; },
                set: function (e) { this._gravity = e, this._world.setGravity(this._toMeters(e)); },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(ge.prototype, "bodyCount", {
                get: function () { return this._entries.size; },
                enumerable: false,
                configurable: true
            });
            ge.prototype._register = function (e) { this._entries.has(e) || this._entries.set(e, { node: e, body: null, shapesDirty: !0, propsDirty: !0, teleport: !1, lastX: NaN, lastY: NaN, lastAngle: NaN }); };
            ge.prototype._unregister = function (e) { var t = this._entries.get(e); t && (this._entries.delete(e), t.body && this._world.destroyBody(t.body), e._detached()); };
            ge.prototype._shapesChanged = function (e) { var t = this._entries.get(e); t && (t.shapesDirty = !0); };
            ge.prototype._propsChanged = function (e) { var t = this._entries.get(e); t && (t.propsDirty = !0); };
            ge.prototype._teleport = function (e) { var t = this._entries.get(e); t && t.body && !e._isArea && (this._world.isLocked() ? t.teleport = !0 : this._applyTeleport(t.body, e)); };
            ge.prototype._applyTeleport = function (e, t) { var n, r; e.setTransform(this._toMeters(t.globalPosition), t.globalRotation), t._bodyType === "dynamic" && (e.setLinearVelocity({ x: 0, y: 0 }), e.setAngularVelocity(0)), e.setAwake(!0); for (var t_15 = e.getContactList(); t_15; t_15 = (n = t_15.next) == null ? null : n)
                (r = t_15.other) == null || r.setAwake(!0); };
            ge.prototype._overlaps = function (e) { var t, n; return __spreadArray([], (t = (n = this._pairs.get(e)) == null ? void 0 : n.keys()) == null ? [] : t, true).filter(function (e) { return !e._isArea; }); };
            ge.prototype.physicsStep = function (e) { for (var _i = 0, _a = this._entries.values(); _i < _a.length; _i++) {
                var e_20 = _a[_i];
                this._sync(e_20);
            } this._world.step(e, this.velocityIterations, this.positionIterations); var t = this.pixelsPerMeter; for (var _b = 0, _c = this._entries.values(); _b < _c.length; _b++) {
                var e_21 = _c[_b];
                var n_9 = e_21.body;
                if (!n_9 || e_21.node._isArea || e_21.node._bodyType === "static" || !n_9.isAwake())
                    continue;
                var r_4 = n_9.getPosition();
                e_21.node._writeBack(new C(r_4.x * t, r_4.y * t), n_9.getAngle());
            } this._dispatchContacts(); };
            ge.prototype._onContact = function (e, t) { var n = e.getFixtureA().getBody().getUserData(), r = e.getFixtureB().getBody().getUserData(); n && r && n !== r && this._events.push({ begin: t, a: n, b: r }); };
            ge.prototype._dispatchContacts = function () { for (; this._events.length > 0;) {
                var e_23 = this._events;
                this._events = [];
                for (var _i = 0, e_22 = e_23; _i < e_22.length; _i++) {
                    var _a = e_22[_i], t_16 = _a.begin, n_10 = _a.a, r_5 = _a.b;
                    var e_24 = this._pairCount(n_10, r_5);
                    this._setPairCount(n_10, r_5, Math.max(0, e_24 + (t_16 ? 1 : -1))), t_16 && e_24 === 0 ? this._emit(n_10, r_5, !0) : !t_16 && e_24 === 1 && this._emit(n_10, r_5, !1);
                }
            } };
            ge.prototype._emit = function (e, t, n) { var r = function (e, t) { t._isArea || e.isFreed || (n ? e._emitBodyEntered(t) : e._emitBodyExited(t)); }; r(e, t), r(t, e); };
            ge.prototype._pairCount = function (e, t) { var n, r; return (n = (r = this._pairs.get(e)) == null ? void 0 : r.get(t)) == null ? 0 : n; };
            ge.prototype._setPairCount = function (e, t, n) { for (var _i = 0, _a = [[e, t], [t, e]]; _i < _a.length; _i++) {
                var _b = _a[_i], r_6 = _b[0], i_3 = _b[1];
                var e_25 = this._pairs.get(r_6);
                n > 0 ? (e_25 || this._pairs.set(r_6, e_25 = new Map), e_25.set(i_3, n)) : e_25 && (e_25.delete(i_3), e_25.size === 0 && this._pairs.delete(r_6));
            } };
            ge.prototype._firstStaticOverlapping = function (e, t, n, r) { var i = 1 / this.pixelsPerMeter, a = this._queryBox; a.lowerBound.x = e * i, a.lowerBound.y = t * i, a.upperBound.x = n * i, a.upperBound.y = r * i, this._queryFound = null, this._world.queryAABB(a, this._onStaticQuery); var o = this._queryFound; return this._queryFound = null, o; };
            ge.prototype._sync = function (e) { var t = e.node, n = !1; e.body || (e.body = this._world.createBody({ type: t._bodyType, position: this._toMeters(t.globalPosition), angle: t.globalRotation }), e.body.setUserData(t), e.shapesDirty = !0, e.propsDirty = !0, n = !0); var r = e.body; if (e.shapesDirty || e.propsDirty) {
                var n_11 = t._props();
                e.shapesDirty ? this._rebuildFixtures(r, t, n_11) : this._applyFixtureProps(r, n_11), this._applyBodyProps(r, n_11), e.shapesDirty = !1, e.propsDirty = !1;
            } if (t._isArea) {
                var n_12 = t.globalPosition, i_4 = t.globalRotation;
                (n_12.x !== e.lastX || n_12.y !== e.lastY || i_4 !== e.lastAngle) && (r.setTransform(this._toMeters(n_12), i_4), r.setAwake(!0), e.lastX = n_12.x, e.lastY = n_12.y, e.lastAngle = i_4), e.teleport = !1;
            }
            else
                e.teleport && (e.teleport = !1, this._applyTeleport(r, t)); n && t._attached(new _e(r, this.pixelsPerMeter)); };
            ge.prototype._rebuildFixtures = function (e, t, n) { for (var t_17 = e.getFixtureList(); t_17;) {
                var n_13 = t_17.getNext();
                e.destroyFixture(t_17), t_17 = n_13;
            } var r = t._shapes(), i = this.pixelsPerMeter, a = r.reduce(function (e, t) { return e + t.shape.area; }, 0) / (i * i), o = a > 0 ? n.mass / a : 1; for (var _i = 0, r_7 = r; _i < r_7.length; _i++) {
                var i_5 = r_7[_i];
                var r_8 = e.createFixture({ shape: this._planckShape(i_5), density: o, friction: n.friction, restitution: n.bounce, isSensor: t._isArea });
                r_8.setUserData(t), r_8.shouldCollide = function (e) { var n = e.getUserData(); return !n || (t.collisionMask & n.collisionLayer) !== 0 || (n.collisionMask & t.collisionLayer) !== 0; };
            } e.resetMassData(); };
            ge.prototype._planckShape = function (_a) {
                var _this = this;
                var e = _a.shape, t = _a.position, r = _a.rotation;
                var i = this.pixelsPerMeter, a = this._toMeters(t);
                return e.kind === "circle" ? new n.r(a, e.radius / i) : e.kind === "rectangle" ? new n.n(e.width / 2 / i, e.height / 2 / i, a, r) : new n.i(e.points.map(function (e) { return _this._toMeters(e.rotated(r).add(t)); }));
            };
            ge.prototype._applyFixtureProps = function (e, t) { var n = 0; for (var r_9 = e.getFixtureList(); r_9; r_9 = r_9.getNext())
                r_9.setFriction(t.friction), r_9.setRestitution(t.bounce), r_9.refilter(), n++; if (n === 0 || e.isStatic())
                return; var r = e.getMass(); if (r > 0 && Math.abs(r - t.mass) > 1e-9) {
                var n_14 = t.mass / r;
                for (var t_18 = e.getFixtureList(); t_18; t_18 = t_18.getNext())
                    t_18.setDensity(t_18.getDensity() * n_14);
                e.resetMassData();
            } };
            ge.prototype._applyBodyProps = function (e, t) { e.setGravityScale(t.gravityScale), e.setLinearDamping(t.linearDamp), e.setAngularDamping(t.angularDamp), e.setFixedRotation(t.lockRotation), e.setSleepingAllowed(t.canSleep), e.setBullet(t.ccd); };
            ge.prototype._toMeters = function (e) { return { x: e.x / this.pixelsPerMeter, y: e.y / this.pixelsPerMeter }; };
            return ge;
        }()), _e = (function () {
            function _e(e, n) {
                t.s(this, "_body", void 0), t.s(this, "_ppm", void 0), this._body = e, this._ppm = n;
            }
            Object.defineProperty(_e.prototype, "linearVelocity", {
                get: function () { var e = this._body.getLinearVelocity(); return new C(e.x * this._ppm, e.y * this._ppm); },
                set: function (e) { this._body.setLinearVelocity({ x: e.x / this._ppm, y: e.y / this._ppm }), e.lengthSquared() > 0 && this._body.setAwake(!0); },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(_e.prototype, "angularVelocity", {
                get: function () { return this._body.getAngularVelocity(); },
                set: function (e) { this._body.isFixedRotation() || (this._body.setAngularVelocity(e), e !== 0 && this._body.setAwake(!0)); },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(_e.prototype, "sleeping", {
                get: function () { return !this._body.isAwake(); },
                set: function (e) { this._body.setAwake(!e); },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(_e.prototype, "mass", {
                get: function () { return this._body.getMass(); },
                enumerable: false,
                configurable: true
            });
            _e.prototype.applyImpulse = function (e, t) {
                if (t === void 0) { t = C.ZERO; }
                var n = this._body.getWorldCenter();
                this._body.applyLinearImpulse({ x: e.x / this._ppm, y: e.y / this._ppm }, { x: n.x + t.x / this._ppm, y: n.y + t.y / this._ppm }, !0);
            };
            _e.prototype.applyForce = function (e, t) {
                if (t === void 0) { t = C.ZERO; }
                var n = this._body.getWorldCenter();
                this._body.applyForce({ x: e.x / this._ppm, y: e.y / this._ppm }, { x: n.x + t.x / this._ppm, y: n.y + t.y / this._ppm }, !0);
            };
            _e.prototype.applyTorqueImpulse = function (e) { this._body.applyAngularImpulse(e / (this._ppm * this._ppm), !0); };
            _e.prototype.applyTorque = function (e) { this._body.applyTorque(e / (this._ppm * this._ppm), !0); };
            return _e;
        }()), ve = (function () {
            function ve(e, n, r) {
                t.s(this, "finished", new w), t.s(this, "stream", void 0), t.s(this, "bus", void 0), t.s(this, "loop", void 0), t.s(this, "_volume", void 0), t.s(this, "_playing", !0), t.s(this, "_handle", null), t.s(this, "_server", void 0), this._server = e, this.stream = n, this.bus = r.bus, this.loop = r.loop, this._volume = r.volume;
            }
            Object.defineProperty(ve.prototype, "playing", {
                get: function () { return this._playing; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(ve.prototype, "volume", {
                get: function () { return this._volume; },
                set: function (e) { var t; this._volume = L(e), (t = this._handle) == null || t.setVolume(this._server._effectiveVolume(this)); },
                enumerable: false,
                configurable: true
            });
            ve.prototype.stop = function () { var e; this._playing && (this._playing = !1, (e = this._handle) == null || e.stop(), this._handle = null, this._server._forget(this)); };
            ve.prototype._drop = function () { this._playing = !1; };
            ve.prototype._ended = function () { this._playing && (this._playing = !1, this._handle = null, this._server._forget(this), this.finished.emit()); };
            return ve;
        }()), K = (function () {
            function K(e) {
                t.s(this, "_backend", void 0), t.s(this, "_buses", { Master: { volume: 1, muted: !1 }, Music: { volume: 1, muted: !1 }, SFX: { volume: 1, muted: !1 } }), t.s(this, "_voices", new Set), t.s(this, "_warned", new Set), this._backend = e;
            }
            K.prototype.getBusVolume = function (e) { return this._buses[e].volume; };
            K.prototype.setBusVolume = function (e, t) { this._buses[e].volume = L(t), this._refresh(); };
            K.prototype.isBusMuted = function (e) { return this._buses[e].muted; };
            K.prototype.setBusMute = function (e, t) { this._buses[e].muted = t, this._refresh(); };
            K.prototype.play = function (e, t) {
                var _this = this;
                if (t === void 0) { t = {}; }
                var n, r, i;
                var a = new ve(this, e, { volume: L((n = t.volume) == null ? 1 : n), loop: (r = t.loop) != null && r, bus: (i = t.bus) == null ? e.kind === "music" ? "Music" : "SFX" : i }), o = t.maxVoices;
                if (o !== void 0) {
                    if (!(o >= 0))
                        throw Error("audio.play: maxVoices must be a number >= 0, got ".concat(o, "."));
                    var t_19 = 0;
                    for (var _i = 0, _a = this._voices; _i < _a.length; _i++) {
                        var n_15 = _a[_i];
                        n_15.stream === e && t_19++;
                    }
                    if (t_19 >= o)
                        return a._drop(), a;
                }
                return this._voices.add(a), e.isLoaded ? this._start(a) : (this._warned.has(e.path) || (this._warned.add(e.path), console.warn("Sound \"".concat(e.path, "\" was played before it was loaded; declare it in the scene's static assets to avoid the delay."))), this._backend.loadSound(e.path).then(function (t) { e._setLoaded(t), a.playing && _this._start(a); }, function (t) { console.error("Failed to load sound \"".concat(e.path, "\":"), t), a.stop(); })), a;
            };
            K.prototype.stopAll = function () { for (var _i = 0, _a = __spreadArray([], this._voices, true); _i < _a.length; _i++) {
                var e_26 = _a[_i];
                e_26.stop();
            } };
            Object.defineProperty(K.prototype, "voiceCount", {
                get: function () { return this._voices.size; },
                enumerable: false,
                configurable: true
            });
            K.prototype._start = function (e) { var t = { volume: this._effectiveVolume(e), loop: e.loop }, n = e.stream.kind === "music" ? this._backend.playMusic(e.stream.path, t) : this._backend.playSound(e.stream._buffer, t); e._handle = n, n.onEnded(function () { return e._ended(); }); };
            K.prototype._refresh = function () { var e; for (var _i = 0, _a = this._voices; _i < _a.length; _i++) {
                var t_20 = _a[_i];
                (e = t_20._handle) == null || e.setVolume(this._effectiveVolume(t_20));
            } };
            K.prototype._effectiveVolume = function (e) { var t = this._buses[e.bus], n = this._buses.Master; return t.muted || n.muted ? 0 : e.volume * t.volume * (e.bus === "Master" ? 1 : n.volume); };
            K.prototype._forget = function (e) { this._voices.delete(e); };
            K.prototype._setFocused = function (e) { e ? this._backend.resume() : this._backend.suspend(); };
            return K;
        }()), ye = (function () {
            function ye() {
                t.s(this, "log", []), t.s(this, "_suspended", !1), t.s(this, "_endCallbacks", new Map);
            }
            Object.defineProperty(ye.prototype, "suspended", {
                get: function () { return this._suspended; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(ye.prototype, "playing", {
                get: function () { return this.log.filter(function (e) { return !e.ended; }); },
                enumerable: false,
                configurable: true
            });
            ye.prototype.loadSound = function (e) { return Promise.resolve({ path: e }); };
            ye.prototype.playSound = function (e, t) { return this._play("sfx", e.path, t); };
            ye.prototype.playMusic = function (e, t) { return this._play("music", e, t); };
            ye.prototype.suspend = function () { this._suspended = !0; };
            ye.prototype.resume = function () { this._suspended = !1; };
            ye.prototype.finishAll = function () { for (var _i = 0, _a = this.playing; _i < _a.length; _i++) {
                var t_21 = _a[_i];
                var e;
                t_21.loop || (t_21.ended = !0, (e = this._endCallbacks.get(t_21)) == null || e());
            } };
            ye.prototype._play = function (e, t, n) {
                var _this = this;
                var r = { kind: e, path: t, volume: n.volume, loop: n.loop, ended: !1 };
                return this.log.push(r), { setVolume: function (e) { return r.volume = e; }, stop: function () { return r.ended = !0; }, onEnded: function (e) { return _this._endCallbacks.set(r, e); } };
            };
            return ye;
        }()), be = (function () {
            function be() {
                t.s(this, "_data", new Map);
            }
            be.prototype.getItem = function (e) { var t; return (t = this._data.get(e)) == null ? null : t; };
            be.prototype.setItem = function (e, t) { this._data.set(e, t); };
            be.prototype.removeItem = function (e) { this._data.delete(e); };
            be.prototype.keys = function () { return __spreadArray([], this._data.keys(), true); };
            return be;
        }()), q = (function () {
            function q(e, n) {
                t.s(this, "prefix", void 0), t.s(this, "_backend", void 0), this._backend = e, this.prefix = n;
            }
            q.prototype.get = function (e, t) { var n; try {
                n = this._backend.getItem(this.prefix + e);
            }
            catch (e) {
                return t;
            } if (n === null)
                return t; var r; try {
                r = JSON.parse(n);
            }
            catch (n) {
                return console.warn("Storage: value of \"".concat(e, "\" is not valid JSON; using the default.")), t;
            } return se(r, t) ? r : t; };
            q.prototype.set = function (e, t) { try {
                return this._backend.setItem(this.prefix + e, JSON.stringify(t)), !0;
            }
            catch (t) {
                return console.warn("Storage: failed to save \"".concat(e, "\":"), t), !1;
            } };
            q.prototype.has = function (e) { try {
                return this._backend.getItem(this.prefix + e) !== null;
            }
            catch (e) {
                return !1;
            } };
            q.prototype.remove = function (e) { try {
                this._backend.removeItem(this.prefix + e);
            }
            catch (e) { } };
            q.prototype.keys = function () {
                var _this = this;
                try {
                    return this._backend.keys().filter(function (e) { return e.startsWith(_this.prefix); }).map(function (e) { return e.slice(_this.prefix.length); });
                }
                catch (e) {
                    return [];
                }
            };
            q.prototype.clear = function () { for (var _i = 0, _a = this.keys(); _i < _a.length; _i++) {
                var e_27 = _a[_i];
                this._backend.removeItem(this.prefix + e_27);
            } };
            return q;
        }()), J = .7, Y = (function () {
            function class_1(e) {
                t.s(this, "_platform", void 0), t.s(this, "_progress", 1), t.s(this, "_pinned", []), t.s(this, "_preloaded", []), this._platform = e;
            }
            Object.defineProperty(class_1.prototype, "progress", {
                get: function () { return this._progress; },
                enumerable: false,
                configurable: true
            });
            class_1.prototype.load = function (e) {
                return __awaiter(this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                this._progress = 0;
                                return [4, this._loadAll(Object.values(e == null ? {} : e), function (e) { return _this._progress = e; })];
                            case 1:
                                _a.sent(), this._progress = 1;
                                return [2];
                        }
                    });
                });
            };
            class_1.prototype.preload = function (e) {
                var _a, _b;
                var t = Object.values(e);
                (_a = this._preloaded).push.apply(_a, t), (_b = this._pinned).push.apply(_b, t);
            };
            class_1.prototype._startup = function (e) {
                return __awaiter(this, void 0, void 0, function () {
                    var t, n, _a;
                    var _this = this;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                n = 0;
                                _a = (t = this._platform) != null && t.prepareAssets;
                                if (!_a) return [3, 2];
                                this._progress = 0;
                                return [4, this._platform.prepareAssets(function (e) { return _this._progress = e * J; })];
                            case 1:
                                _a = (_b.sent(), n = J);
                                _b.label = 2;
                            case 2:
                                _a, this._progress = n;
                                return [4, this._loadAll(__spreadArray(__spreadArray([], this._preloaded, true), Object.values(e == null ? {} : e), true), function (e) { return _this._progress = n + e * (1 - n); })];
                            case 3:
                                _b.sent(), this._progress = 1;
                                return [2];
                        }
                    });
                });
            };
            class_1.prototype._unloadUnused = function (e, t) { if (!e)
                return; var n = new Set(ce(__spreadArray(__spreadArray([], Object.values(t == null ? {} : t), true), this._pinned, true))); for (var _i = 0, _a = new Set(ce(Object.values(e))); _i < _a.length; _i++) {
                var t_22 = _a[_i];
                n.has(t_22) || t_22._unload();
            } };
            class_1.prototype._loadAll = function (e, t) {
                return __awaiter(this, void 0, void 0, function () { var n, r, i, a; return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            n = this._platform;
                            if (!n || e.length === 0)
                                return [2];
                            r = __spreadArray([], new Set(e), true), i = 0, a = function () { return t(++i / r.length); };
                            return [4, Promise.all(r.map(function (e) { var t = le(e, n); return t ? t.then(a) : a(); }))];
                        case 1:
                            _a.sent();
                            return [2];
                    }
                }); });
            };
            return class_1;
        }()), xe = .5, Se = (function () {
            function Se() {
                t.s(this, "_actions", new Map), t.s(this, "_pressed", new Set), t.s(this, "_justPressed", new Set), t.s(this, "_justReleased", new Set), t.s(this, "_physicsJustPressed", new Set), t.s(this, "_physicsJustReleased", new Set), t.s(this, "_strength", new Map), t.s(this, "_inPhysics", !1);
            }
            Se.prototype.add = function (e, t) { this._actions.set(e, __spreadArray([], t, true)); };
            Se.prototype.remove = function (e) { this._actions.delete(e), this._pressed.delete(e), this._justPressed.delete(e), this._justReleased.delete(e), this._physicsJustPressed.delete(e), this._physicsJustReleased.delete(e), this._strength.delete(e); };
            Se.prototype.has = function (e) { return this._actions.has(e); };
            Se.prototype.isPressed = function (e) { return this._assert(e), this._pressed.has(e); };
            Se.prototype.isJustPressed = function (e) { return this._assert(e), (this._inPhysics ? this._physicsJustPressed : this._justPressed).has(e); };
            Se.prototype.isJustReleased = function (e) { return this._assert(e), (this._inPhysics ? this._physicsJustReleased : this._justReleased).has(e); };
            Se.prototype.strength = function (e) { var t; return this._assert(e), (t = this._strength.get(e)) == null ? 0 : t; };
            Se.prototype.beginFrame = function () { this._justPressed.clear(), this._justReleased.clear(); };
            Se.prototype.beginPhysicsStep = function () { this._inPhysics = !0; };
            Se.prototype.endPhysicsStep = function () { this._inPhysics = !1, this._physicsJustPressed.clear(), this._physicsJustReleased.clear(); };
            Se.prototype.update = function (e) { for (var _i = 0, _a = this._actions; _i < _a.length; _i++) {
                var _b = _a[_i], t_23 = _b[0], n_16 = _b[1];
                var r_10 = e.strength(t_23, n_16);
                this._strength.set(t_23, r_10);
                var i_6 = r_10 >= xe, a_4 = this._pressed.has(t_23);
                i_6 && !a_4 ? (this._pressed.add(t_23), this._justPressed.add(t_23), this._physicsJustPressed.add(t_23)) : !i_6 && a_4 && (this._pressed.delete(t_23), this._justReleased.add(t_23), this._physicsJustReleased.add(t_23));
            } };
            Se.prototype._assert = function (e) { if (!this._actions.has(e)) {
                var t_24 = __spreadArray([], this._actions.keys(), true);
                throw Error("Unknown input action \"".concat(e, "\". Define it in the game options (actions: { ").concat(e, ": [...] }) or with tree.input.addAction(). Known actions: ").concat(t_24.length ? t_24.join(", ") : "(none)", "."));
            } };
            return Se;
        }()), Ce = (function () {
            function Ce(e, n) {
                t.s(this, "_viewport", void 0), t.s(this, "_topLevel", void 0), t.s(this, "_pointers", new Map), t.s(this, "_pointersDesign", new Map), t.s(this, "_unhandled", new Set), t.s(this, "_captures", new Map), t.s(this, "_position", null), t.s(this, "_positionDesign", null), t.s(this, "_justPressed", !1), t.s(this, "_justReleased", !1), this._viewport = e, this._topLevel = n;
            }
            Object.defineProperty(Ce.prototype, "pointers", {
                get: function () { return this._pointers; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Ce.prototype, "position", {
                get: function () { return this._position; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Ce.prototype, "justPressed", {
                get: function () { return this._justPressed; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Ce.prototype, "justReleased", {
                get: function () { return this._justReleased; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Ce.prototype, "hasUnhandled", {
                get: function () { return this._unhandled.size > 0; },
                enumerable: false,
                configurable: true
            });
            Ce.prototype.beginFrame = function () { this._justPressed = !1, this._justReleased = !1; var e = this._viewport; for (var _i = 0, _a = this._pointersDesign; _i < _a.length; _i++) {
                var _b = _a[_i], t_25 = _b[0], n_17 = _b[1];
                this._pointers.set(t_25, e.designToWorld(n_17));
            } this._positionDesign && (this._position = e.designToWorld(this._positionDesign)); };
            Ce.prototype.cancelUnhittable = function () { if (this._captures.size !== 0)
                for (var _i = 0, _a = this._captures; _i < _a.length; _i++) {
                    var _b = _a[_i], e_28 = _b[0], t_26 = _b[1];
                    t_26.isInsideTree && !t_26.isFreed && R(t_26) || this._end(e_28, !1, this._pointers.get(e_28), this._pointersDesign.get(e_28));
                } };
            Ce.prototype.releaseAll = function (e) { var t = new Map; for (var _i = 0, _a = this._pointersDesign; _i < _a.length; _i++) {
                var _b = _a[_i], e_30 = _b[0], n_18 = _b[1];
                t.set(e_30, this._viewport.designToScreen(n_18));
            } for (var _c = 0, e_29 = e; _c < e_29.length; _c++) {
                var n_19 = e_29[_c];
                n_19.type === "pointerdown" && t.set(n_19.pointerId, { x: n_19.x, y: n_19.y });
            } for (var _d = 0, t_27 = t; _d < t_27.length; _d++) {
                var _f = t_27[_d], n_20 = _f[0], r_11 = _f[1];
                e.push({ type: "pointercancel", pointerId: n_20, x: r_11.x, y: r_11.y });
            } };
            Ce.prototype.handle = function (e) { var t = this._viewport.screenToDesign(new C(e.x, e.y)), n = this._viewport.designToWorld(t); this._position = n, this._positionDesign = t; var r = e.pointerId; if (e.type === "pointerdown") {
                this._pointers.set(r, n), this._pointersDesign.set(r, t), this._justPressed = !0;
                var e_31 = this._pick(n, t);
                e_31 ? (this._captures.set(r, e_31), e_31.pointerDown.emit(z(r, n, t, e_31))) : this._unhandled.add(r);
                return;
            } if (!this._pointers.has(r))
                return; if (e.type !== "pointermove") {
                this._end(r, e.type === "pointerup", n, t);
                return;
            } this._pointers.set(r, n), this._pointersDesign.set(r, t); var i = this._captures.get(r); i && i.isInsideTree && !i.isFreed && i.pointerMove.emit(z(r, n, t, i)); };
            Ce.prototype.cancelStale = function (e) { var t = this._pointers.get(e); return t ? (this._end(e, !1, t, this._pointersDesign.get(e)), !0) : !1; };
            Ce.prototype.transfer = function (e, t) { var n = this._pointers.get(e); if (!n || !t.isInsideTree || t.isFreed || !R(t))
                return !1; var r = this._captures.get(e); return r === t || (this._captures.set(e, t), this._unhandled.delete(e), r && r.isInsideTree && !r.isFreed && r.pointerUp.emit(z(e, n, this._pointersDesign.get(e), r))), !0; };
            Ce.prototype.isCapturedBy = function (e, t, n) { var r = this._captures.get(e); if (!r)
                return !1; if (!n)
                return r === t; for (var e_32 = r; e_32; e_32 = e_32.parent)
                if (e_32 === t)
                    return !0; return !1; };
            Ce.prototype._end = function (e, t, n, r) { var i = this._captures.get(e), a = i && i.isInsideTree && !i.isFreed ? i : null; if (this._pointers.delete(e), this._pointersDesign.delete(e), this._unhandled.delete(e), this._captures.delete(e), this._justReleased = !0, a) {
                var i_7 = z(e, n, r, a);
                a.pointerUp.emit(i_7), t && a.hitTest(i_7.localPosition) && a._insideClips(i_7.position) && a.clicked.emit(i_7);
            } };
            Ce.prototype._pick = function (e, t) { var n = [], r = []; v(this._topLevel(), n, r); for (var i_8 = n.length - 1; i_8 >= 0; i_8--) {
                var a_5 = n[i_8];
                if (a_5.inputPickable && de(a_5, e, t, r[i_8]))
                    return a_5;
            } return null; };
            return Ce;
        }()), we = (function () {
            function we(e, n) {
                var _this = this;
                t.s(this, "_queue", []), t.s(this, "_spare", []), t.s(this, "_actions", new Se), t.s(this, "_pointer", void 0), t.s(this, "_sources", []), t.s(this, "_strengthSources", []), t.s(this, "_frameSources", []), t.s(this, "_routes", new Map), t.s(this, "_frameScratch", []), t.s(this, "_dispatchScratch", []), t.s(this, "_warnedTypes", new Set), t.s(this, "_source", { strength: function (e, t) { return _this._strength(e, t); } }), this._pointer = new Ce(e, n);
            }
            we.prototype.addAction = function (e, t) { for (var _i = 0, t_28 = t; _i < t_28.length; _i++) {
                var n_21 = t_28[_i];
                n_21.type === "pointer" || this._warnedTypes.has(n_21.type) || this._claims(n_21.type) || (this._warnedTypes.add(n_21.type), console.warn("Input action \"".concat(e, "\": binding type \"").concat(n_21.type, "\" has no input source, so it will never press the action. Install its plugin in the game options (plugins: [...]).")));
            } this._actions.add(e, t); };
            we.prototype.removeAction = function (e) { this._actions.remove(e); };
            we.prototype.hasAction = function (e) { return this._actions.has(e); };
            we.prototype.isActionPressed = function (e) { return this._actions.isPressed(e); };
            we.prototype.isActionJustPressed = function (e) { return this._actions.isJustPressed(e); };
            we.prototype.isActionJustReleased = function (e) { return this._actions.isJustReleased(e); };
            we.prototype.getActionStrength = function (e) { return this._actions.strength(e); };
            we.prototype.getAxis = function (e, t) { return this.getActionStrength(t) - this.getActionStrength(e); };
            we.prototype.getVector = function (e, t, n, r) { var i = this.getAxis(e, t), a = this.getAxis(n, r), o = Math.sqrt(i * i + a * a); return o > 1 && (i /= o, a /= o), new C(i, a); };
            we.prototype._beginPhysicsStep = function () { this._actions.beginPhysicsStep(); };
            we.prototype._endPhysicsStep = function () { this._actions.endPhysicsStep(); };
            we.prototype._strength = function (e, t) { var n = 0; if (this._pointer.hasUnhandled) {
                for (var e_33 = 0; e_33 < t.length; e_33++)
                    if (t[e_33].type === "pointer") {
                        n = 1;
                        break;
                    }
            } var r = this._strengthSources; for (var i_9 = 0; n < 1 && i_9 < r.length; i_9++) {
                var a_6 = r[i_9].strength(e, t);
                a_6 > n && (n = a_6);
            } return n; };
            we.prototype._claims = function (e) { for (var t_29 = 0; t_29 < this._sources.length; t_29++) {
                var n_22 = this._sources[t_29].bindingTypes;
                if (n_22 && n_22.includes(e))
                    return !0;
            } return !1; };
            Object.defineProperty(we.prototype, "pointerPosition", {
                get: function () { return this._pointer.position; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(we.prototype, "isPointerPressed", {
                get: function () { return this._pointer.pointers.size > 0; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(we.prototype, "isPointerJustPressed", {
                get: function () { return this._pointer.justPressed; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(we.prototype, "isPointerJustReleased", {
                get: function () { return this._pointer.justReleased; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(we.prototype, "pressedPointers", {
                get: function () { return this._pointer.pointers; },
                enumerable: false,
                configurable: true
            });
            we.prototype.addSource = function (e) { if (!this._sources.includes(e) && (this._sources.push(e), e.strength && this._strengthSources.push(e), e.beginFrame && this._frameSources.push(e), e.eventTypes))
                for (var _i = 0, _a = e.eventTypes; _i < _a.length; _i++) {
                    var t_30 = _a[_i];
                    var n_23 = this._routes.get(t_30);
                    n_23 ? n_23.push(e) : this._routes.set(t_30, [e]);
                } };
            we.prototype.removeSource = function (e) { B(this._sources, e), B(this._strengthSources, e), B(this._frameSources, e); for (var _i = 0, _a = this._routes.values(); _i < _a.length; _i++) {
                var t_31 = _a[_i];
                B(t_31, e);
            } };
            we.prototype.enqueue = function (e) { this._queue.push(e); };
            we.prototype._flush = function () { this._actions.beginFrame(), this._pointer.beginFrame(), this._pointer.cancelUnhittable(); var e = fe(this._frameSources, this._frameScratch); for (var t_32 = 0; t_32 < e.length; t_32++)
                e[t_32].beginFrame(); this._actions.update(this._source); var t = this._queue; if (t.length !== 0) {
                this._queue = this._spare, this._spare = t;
                for (var e_34 = 0; e_34 < t.length; e_34++) {
                    var n_24 = t[e_34];
                    ue(n_24) && (n_24.type === "pointerdown" && this._pointer.cancelStale(n_24.pointerId) && this._actions.update(this._source), this._pointer.handle(n_24));
                    var r_12 = this._routes.get(n_24.type);
                    if (r_12) {
                        var e_35 = fe(r_12, this._dispatchScratch);
                        for (var t_33 = 0; t_33 < e_35.length; t_33++)
                            e_35[t_33].handle(n_24);
                    }
                    this._actions.update(this._source);
                }
                t.length = 0;
            } };
            we.prototype._capturePointer = function (e, t) { return this._pointer.transfer(e, t); };
            we.prototype._hasPointerCapture = function (e, t, n) { return this._pointer.isCapturedBy(e, t, n); };
            we.prototype._releaseAll = function () { var e, t; this._pointer.releaseAll(this._queue); var n = this._sources.slice(); for (var r_13 = 0; r_13 < n.length; r_13++)
                (e = (t = n[r_13]).releaseAll) == null || e.call(t, this._queue); };
            return we;
        }()), Te = (function () {
            function Te(e, n, r, i) {
                if (r === void 0) { r = !1; }
                if (i === void 0) { i = !1; }
                t.s(this, "timeout", new w), t.s(this, "processAlways", void 0), t.s(this, "ignoreTimeScale", void 0), t.s(this, "processInPhysics", void 0), t.s(this, "_timeLeft", void 0), this._timeLeft = e, this.processAlways = n, this.ignoreTimeScale = r, this.processInPhysics = i;
            }
            Object.defineProperty(Te.prototype, "timeLeft", {
                get: function () { return Math.max(0, this._timeLeft); },
                enumerable: false,
                configurable: true
            });
            Te.prototype._advance = function (e, t) { return t && !this.processAlways || (this._timeLeft -= e, this._timeLeft > 1e-9) ? !0 : (this.timeout.emit(), !1); };
            return Te;
        }()), X = (function () {
            function X(e, n) {
                var r;
                t.s(this, "designWidth", void 0), t.s(this, "designHeight", void 0), t.s(this, "aspect", void 0), t.s(this, "resized", new w), t.s(this, "_screen", void 0), t.s(this, "_scale", 1), t.s(this, "_offset", C.ZERO), t.s(this, "_visibleRect", void 0), t.s(this, "_safeRect", void 0), t.s(this, "_version", 0), t.s(this, "_canvasX", 0), t.s(this, "_canvasY", 0), this.designWidth = e.width, this.designHeight = e.height, this.aspect = (r = e.aspect) == null ? "expand" : r, this._update(n, !1);
            }
            Object.defineProperty(X.prototype, "designRect", {
                get: function () { return new A(0, 0, this.designWidth, this.designHeight); },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(X.prototype, "visibleRect", {
                get: function () { return this._visibleRect; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(X.prototype, "safeRect", {
                get: function () { return this._safeRect; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(X.prototype, "scale", {
                get: function () { return this._scale; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(X.prototype, "offset", {
                get: function () { return this._offset; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(X.prototype, "screen", {
                get: function () { return this._screen; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(X.prototype, "renderResolution", {
                get: function () { return Math.min(this._screen.pixelRatio, 2); },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(X.prototype, "canvasOffsetX", {
                get: function () { return this._canvasX; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(X.prototype, "canvasOffsetY", {
                get: function () { return this._canvasY; },
                enumerable: false,
                configurable: true
            });
            X.prototype._setCanvasOffset = function (e, t) { this._canvasX = e, this._canvasY = t; };
            Object.defineProperty(X.prototype, "visibleWorldRect", {
                get: function () { var e = this._visibleRect; return new A(e.x - this._canvasX, e.y - this._canvasY, e.width, e.height); },
                enumerable: false,
                configurable: true
            });
            X.prototype.screenToWorld = function (e) { return this.designToWorld(this.screenToDesign(e)); };
            X.prototype.worldToScreen = function (e) { return this.designToScreen(this.worldToDesign(e)); };
            X.prototype.designToWorld = function (e) { return new C(e.x - this._canvasX, e.y - this._canvasY); };
            X.prototype.worldToDesign = function (e) { return new C(e.x + this._canvasX, e.y + this._canvasY); };
            X.prototype.screenToDesign = function (e) { return new C((e.x - this._offset.x) / this._scale, (e.y - this._offset.y) / this._scale); };
            X.prototype.designToScreen = function (e) { return new C(e.x * this._scale + this._offset.x, e.y * this._scale + this._offset.y); };
            X.prototype._update = function (e, t) {
                if (t === void 0) { t = !0; }
                var n;
                var r = (n = e.safeArea) == null ? { left: 0, top: 0, right: e.width, bottom: e.height } : n;
                this._screen = { width: e.width, height: e.height, pixelRatio: e.pixelRatio, safeArea: r };
                var i = Math.min(e.width / this.designWidth, e.height / this.designHeight);
                this._scale = i, this._offset = new C((e.width - this.designWidth * i) / 2, (e.height - this.designHeight * i) / 2), this._visibleRect = this.aspect === "keep" ? this.designRect : new A((0 - this._offset.x) / i, (0 - this._offset.y) / i, e.width / i, e.height / i);
                var a = this.screenToDesign(new C(r.left, r.top)), o = this.screenToDesign(new C(r.right, r.bottom));
                this._safeRect = new A(a.x, a.y, o.x - a.x, o.y - a.y).intersection(this._visibleRect), this._version++, t && this.resized.emit();
            };
            return X;
        }()), Ee = 1e-9, Z = 100, De = (U = (function () {
            function e(n) {
                if (n === void 0) { n = {}; }
                var _this = this;
                var r, i, a, o, s, c;
                if (t.s(this, "physicsDelta", 1 / e.PHYSICS_TICKS_PER_SECOND), t.s(this, "maxPhysicsStepsPerFrame", void 0), t.s(this, "rng", void 0), t.s(this, "fxRng", void 0), t.s(this, "viewport", void 0), t.s(this, "input", void 0), t.s(this, "audio", void 0), t.s(this, "storage", void 0), t.s(this, "assets", void 0), t.s(this, "physicsSettings", void 0), t.s(this, "_root", new k({ name: "root" })), t.s(this, "_scene", null), t.s(this, "_autoloads", new Map), t.s(this, "_services", new Map), t.s(this, "_systems", new Map), t.s(this, "_physicsSteppers", []), t.s(this, "_frameEnders", []), t.s(this, "_accumulator", 0), t.s(this, "_physicsFrames", 0), t.s(this, "_gameSteps", 0), t.s(this, "_processFrames", 0), t.s(this, "_deferred", []), t.s(this, "_paused", !1), t.s(this, "_timeScale", 1), t.s(this, "sceneChanged", new w), t.s(this, "_changeChain", Promise.resolve()), t.s(this, "_currentArgs", null), t.s(this, "focusChanged", new w), t.s(this, "_tweens", []), t.s(this, "_timers", []), t.s(this, "_physicsTweens", []), t.s(this, "_physicsTimers", []), t.s(this, "_physicsProcessNodes", 0), t.s(this, "_inPhysicsProcess", !1), t.s(this, "_freeQueue", []), this.rng = new G(n.seed), this.fxRng = new G(this.rng.seed ^ 2654435769), this.maxPhysicsStepsPerFrame = (r = n.maxPhysicsStepsPerFrame) == null ? 2 : r, !(this.maxPhysicsStepsPerFrame >= 1))
                    throw Error("maxPhysicsStepsPerFrame must be >= 1, got ".concat(n.maxPhysicsStepsPerFrame, "."));
                this.viewport = (i = n.viewport) == null ? new X({ width: 750, height: 1334 }, { width: 750, height: 1334, pixelRatio: 1 }) : i, this.input = new we(this.viewport, function () { return _this._root.children; }), this.physicsSettings = (a = n.physics) == null ? {} : a, this.audio = (o = n.audio) == null ? new K(new ye) : o, this.storage = (s = n.storage) == null ? new q(new be, "sapling2d:") : s, this.assets = (c = n.assets) == null ? new Y(null) : c, this._root._attachAsRoot(this);
            }
            Object.defineProperty(e.prototype, "currentScene", {
                get: function () { return this._scene; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(e.prototype, "physicsFrames", {
                get: function () { return this._physicsFrames; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(e.prototype, "processFrames", {
                get: function () { return this._processFrames; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(e.prototype, "time", {
                get: function () { return this._gameSteps * this.physicsDelta; },
                enumerable: false,
                configurable: true
            });
            e.prototype.rand = function () { return this.rng.randf(); };
            Object.defineProperty(e.prototype, "paused", {
                get: function () { return this._paused; },
                set: function (e) { this._paused = e; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(e.prototype, "timeScale", {
                get: function () { return this._timeScale; },
                set: function (e) { if (!(e >= 0) || !Number.isFinite(e))
                    throw Error("tree.timeScale must be a finite number >= 0, got ".concat(e, ".")); this._timeScale = e; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(e.prototype, "physics", {
                get: function () { return this.system(ge); },
                enumerable: false,
                configurable: true
            });
            e.prototype.system = function (e) { var t = this._systems.get(e); if (t === void 0) {
                t = new e(this), this._systems.set(e, t);
                var n_25 = t;
                typeof n_25.physicsStep == "function" && this._physicsSteppers.push(n_25), typeof n_25.frameEnd == "function" && this._frameEnders.push(n_25);
            } return t; };
            e.prototype.systemIfCreated = function (e) { var t; return (t = this._systems.get(e)) == null ? null : t; };
            e.prototype.addAutoload = function (e) { if (this._autoloads.has(e))
                throw Error("Autoload ".concat(e.name, " is already registered.")); if (this._scene)
                throw Error("Autoload ".concat(e.name, " must be registered before the first scene starts.")); var t = new e; return this._autoloads.set(e, t), this._root.add(t), t; };
            e.prototype.autoload = function (e) { var t = this._autoloads.get(e); if (!t)
                throw Error("Autoload ".concat(e.name, " is not registered. Pass it in the game options: autoloads: [").concat(e.name, "].")); return t; };
            e.prototype.get = function (e) { var t = this._services.get(e); if (t === void 0)
                throw Error("".concat(e.name, " is not installed. Pass its plugin in the game options: plugins: [...].")); return t; };
            e.prototype.provide = function (e, t) { if (this._services.has(e))
                throw Error("".concat(e.name, " is already provided by another plugin.")); this._services.set(e, t); };
            e.prototype.changeScene = function (e) {
                var _this = this;
                var t = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    t[_i - 1] = arguments[_i];
                }
                var n = function () { return __awaiter(_this, void 0, void 0, function () { var n, r, i; return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.assets.load(e.assets)];
                        case 1:
                            _a.sent();
                            r = new (e.bind.apply(e, __spreadArray([void 0], t, false)))(), i = (n = this._currentArgs) == null ? void 0 : n.cls.assets;
                            return [2, (this._currentArgs = { cls: e, args: t }, this._setScene(r), this.assets._unloadUnused(i, e.assets), this.sceneChanged.emit(r), r)];
                    }
                }); }); }, r = this._changeChain.then(n, n);
                return this._changeChain = r.catch(function () { }), r;
            };
            e.prototype.reloadCurrentScene = function () { if (!this._currentArgs)
                throw Error("reloadCurrentScene: no scene has been loaded with changeScene yet."); var _a = this._currentArgs, e = _a.cls, t = _a.args; return this.changeScene.apply(this, __spreadArray([e], t, false)); };
            e.prototype._setScene = function (e) { var t = this._scene; this._scene = e, t == null || t._free(), this._root.add(e); };
            e.prototype.createTween = function (e) {
                if (e === void 0) { e = {}; }
                var t;
                return this._addTween(new O(null, (t = e.processInPhysics) != null && t));
            };
            e.prototype._addTween = function (e) { return (e.processInPhysics ? this._physicsTweens : this._tweens).push(e), e; };
            e.prototype.createTimer = function (e, t) {
                if (t === void 0) { t = {}; }
                var n, r, i;
                if (t.ignoreTimeScale && t.processInPhysics)
                    throw Error("createTimer: ignoreTimeScale and processInPhysics cannot be combined (physics steps are game time).");
                var a = new Te(e, (n = t.processAlways) == null || n, (r = t.ignoreTimeScale) != null && r, (i = t.processInPhysics) != null && i);
                return (a.processInPhysics ? this._physicsTimers : this._timers).push(a), a;
            };
            e.prototype.getNodesInGroup = function (e) { return this._snapshot().filter(function (t) { return t.isInGroup(e); }); };
            e.prototype.getFirstNodeInGroup = function (e) { var t; return (t = this.getNodesInGroup(e)[0]) == null ? null : t; };
            e.prototype.callDeferred = function (e) { this._deferred.push(e); };
            e.prototype._queueFree = function (e) { this._freeQueue.push(e); };
            e.prototype._flushDeferred = function () { for (var e_37 = 0; this._deferred.length > 0; e_37++) {
                if (e_37 >= Z)
                    throw Error("callDeferred kept scheduling new calls for ".concat(Z, " rounds; possible infinite loop."));
                var t_35 = this._deferred;
                this._deferred = [];
                for (var _i = 0, t_34 = t_35; _i < t_34.length; _i++) {
                    var e_38 = t_34[_i];
                    e_38();
                }
            } for (; this._freeQueue.length > 0;) {
                var e_39 = this._freeQueue;
                this._freeQueue = [];
                for (var _a = 0, e_36 = e_39; _a < e_36.length; _a++) {
                    var t_36 = e_36[_a];
                    t_36 === this._scene && (this._scene = null), t_36._free();
                }
            } };
            e.prototype.advance = function (e) { var t = this._tweens.length, n = this._timers.length; this.input._flush(); var r = Math.min(Math.max(e, 0), this.maxPhysicsStepsPerFrame * this.physicsDelta), i = r * this._timeScale; for (this._accumulator += i; this._accumulator >= this.physicsDelta - Ee;) {
                this._accumulator -= this.physicsDelta, this._physicsFrames++, this._paused || this._gameSteps++;
                var e_40 = this._physicsTweens.length, t_37 = this._physicsTimers.length;
                this.input._beginPhysicsStep();
                try {
                    if (this._physicsProcessNodes > 0) {
                        this._inPhysicsProcess = !0;
                        try {
                            for (var _i = 0, _a = this._snapshot(); _i < _a.length; _i++) {
                                var e_41 = _a[_i];
                                e_41.canProcess() && (e_41._internalPhysicsProcess(this.physicsDelta), e_41.canProcess() && e_41.physicsProcess(this.physicsDelta));
                            }
                        }
                        finally {
                            this._inPhysicsProcess = !1;
                        }
                    }
                    if (!this._paused) {
                        var e_42 = this._physicsSteppers;
                        for (var t_38 = 0; t_38 < e_42.length; t_38++)
                            e_42[t_38].physicsStep(this.physicsDelta);
                    }
                    this._physicsTweens = V(this._physicsTweens, e_40, this.physicsDelta, this._paused), this._physicsTimers = V(this._physicsTimers, t_37, this.physicsDelta, this._paused), this._flushDeferred();
                }
                finally {
                    this.input._endPhysicsStep();
                }
            } this._accumulator < 0 && (this._accumulator = 0), this._processFrames++; for (var _b = 0, _c = this._snapshot(); _b < _c.length; _b++) {
                var e_43 = _c[_b];
                e_43.canProcess() && (e_43._internalProcess(i), e_43.canProcess() && e_43.process(i));
            } this._tweens = V(this._tweens, t, i, this._paused), this._timers = V(this._timers, n, i, this._paused, r), this._flushDeferred(); var a = this._frameEnders; for (var e_44 = 0; e_44 < a.length; e_44++)
                a[e_44].frameEnd(i); };
            e.prototype.setFocused = function (e) { e ? this._accumulator = 0 : this.input._releaseAll(), this.audio._setFocused(e), this.focusChanged.emit(e); };
            e.prototype._topLevel = function () { return this._root.children; };
            e.prototype._snapshot = function () { var e = []; for (var _i = 0, _a = this._root.children; _i < _a.length; _i++) {
                var t_39 = _a[_i];
                t_39._collect(e);
            } return e; };
            e.prototype.dump = function (e) {
                if (e === void 0) { e = {}; }
                var t = this._root.children.map(function (e) { return e._dump(); });
                if (e.json)
                    return t;
                if (t.length === 0)
                    return "(empty tree)";
                var n = [], r = function (e, t) { var i = Object.entries(e.props).map(function (_a) {
                    var e = _a[0], t = _a[1];
                    return "".concat(e, "=").concat(pe(t));
                }); n.push("".concat("  ".repeat(t)).concat(e.name, " (").concat(e.type, ")").concat(i.length ? " " + i.join(" ") : "")); for (var _i = 0, _a = e.children; _i < _a.length; _i++) {
                    var n_26 = _a[_i];
                    r(n_26, t + 1);
                } };
                for (var _i = 0, t_40 = t; _i < t_40.length; _i++) {
                    var e_45 = t_40[_i];
                    r(e_45, 0);
                }
                return n.join("\n");
            };
            return e;
        }()), t.s(U, "PHYSICS_TICKS_PER_SECOND", 60), U), Q = (function () {
            function Q() {
                t.s(this, "bindingTypes", ["key"]), t.s(this, "eventTypes", ["keydown", "keyup"]), t.s(this, "_down", new Set);
            }
            Q.prototype.isPressed = function (e) { return this._down.has(e); };
            Q.prototype.handle = function (e) { e.type === "keydown" ? this._down.add(e.code) : e.type === "keyup" && this._down.delete(e.code); };
            Q.prototype.strength = function (e, t) { for (var e_46 = 0; e_46 < t.length; e_46++) {
                var n_27 = t[e_46];
                if (n_27.type === "key" && this._down.has(n_27.code))
                    return 1;
            } return 0; };
            Q.prototype.releaseAll = function (e) { var t = new Set(this._down); for (var n_28 = 0; n_28 < e.length; n_28++) {
                var r_14 = e[n_28];
                r_14.type === "keydown" && t.add(r_14.code);
            } for (var _i = 0, t_41 = t; _i < t_41.length; _i++) {
                var n_29 = t_41[_i];
                e.push({ type: "keyup", code: n_29 });
            } };
            return Q;
        }()), $ = 8, Oe = (function (_super) {
            __extends(Oe, _super);
            function Oe() {
                var e = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    e[_i] = arguments[_i];
                }
                var _this = this;
                _this = _super.apply(this, e) || this, t.s(_this, "_fill", null);
                return _this;
            }
            Oe.prototype.ready = function () { var e = this.tree.viewport.designRect, t = Math.round(e.width * .6), n = this.add(new F({ name: "Track", position: r(e.x + (e.width - t) / 2, e.y + e.height / 2 - $ / 2), size: r(t, $), color: 4210752 })); this._fill = n.add(new F({ name: "Fill", size: r(t, $), color: 16777215 })), this._update(); };
            Oe.prototype.process = function () { this._update(); };
            Oe.prototype._update = function () { var e = this.tree.assets.progress; this._fill && this._fill.scale.x !== e && (this._fill.scale = r(e, 1)); };
            return Oe;
        }(W)), ke = (function () {
            function ke() {
                t.s(this, "frames", 0), t.s(this, "intervalMax", 0), t.s(this, "logicMax", 0), t.s(this, "renderMax", 0), t.s(this, "_interval", 0), t.s(this, "_logic", 0), t.s(this, "_render", 0);
            }
            Object.defineProperty(ke.prototype, "intervalAvg", {
                get: function () { return this.frames ? this._interval / this.frames : 0; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(ke.prototype, "logicAvg", {
                get: function () { return this.frames ? this._logic / this.frames : 0; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(ke.prototype, "renderAvg", {
                get: function () { return this.frames ? this._render / this.frames : 0; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(ke.prototype, "fps", {
                get: function () { return this._interval ? 1e3 * this.frames / this._interval : 0; },
                enumerable: false,
                configurable: true
            });
            ke.prototype._add = function (e, t, n) { this.frames++, this._interval += e, this._logic += t, this._render += n, e > this.intervalMax && (this.intervalMax = e), t > this.logicMax && (this.logicMax = t), n > this.renderMax && (this.renderMax = n); };
            ke.prototype._reset = function () { this.frames = this._interval = this._logic = this._render = 0, this.intervalMax = this.logicMax = this.renderMax = 0; };
            return ke;
        }()), Ae = (function () {
            function e(e, n, r, i, a) {
                var _this = this;
                t.s(this, "tree", void 0), t.s(this, "_platform", void 0), t.s(this, "_renderer", void 0), t.s(this, "_stats", new ke), t.s(this, "_frameId", null), t.s(this, "_lastTime", 0), t.s(this, "_unsubscribeScreen", void 0), t.s(this, "_unsubscribeInput", void 0), t.s(this, "_unsubscribeFocus", void 0), t.s(this, "_disposers", void 0), t.s(this, "_suspended", !1), this._platform = e, this._renderer = n, this.tree = r, this._disposers = a, this._unsubscribeScreen = e.onScreenChange(function (e) { return r.viewport._update(e); }), this._unsubscribeInput = e.onInput(function (e) { return r.input.enqueue(e); }), this._unsubscribeFocus = e.onFocusChange(function (t) { i && (_this._suspended = !t, t && (_this._lastTime = e.now())), r.setFocused(t); });
            }
            e.create = function (n) {
                return __awaiter(this, void 0, void 0, function () { var r, i, a, o, s, c, l, u, d, f, p, m, _i, _a, e_47, t_42, _b, _c, _d, e_48, t_43, _f, _g, e_49, h, g, _, _h, _j; return __generator(this, function (_k) {
                    switch (_k.label) {
                        case 0:
                            d = n.platform, f = new De(t.a(t.a(t.a({ viewport: new X((r = n.design) == null ? { width: 750, height: 1334 } : r, d.getScreenInfo()), audio: new K(d.audio), storage: new q(d.storage, (i = n.storagePrefix) == null ? "sapling2d:" : i), assets: new Y(d) }, n.seed === void 0 ? {} : { seed: n.seed }), n.physics ? { physics: n.physics } : {}), n.maxPhysicsStepsPerFrame === void 0 ? {} : { maxPhysicsStepsPerFrame: n.maxPhysicsStepsPerFrame })), p = [], m = { tree: f, platform: d, provide: function (e, t) { return f.provide(e, t); }, preload: function (e) { return f.assets.preload(e); }, autoload: function (e) { return f.addAutoload(e); } };
                            for (_i = 0, _a = (a = n.plugins) == null ? [] : a; _i < _a.length; _i++) {
                                e_47 = _a[_i];
                                t_42 = e_47.install(m);
                                t_42 && p.push(t_42);
                            }
                            for (_b = 0, _c = Object.entries((o = n.actions) == null ? {} : o); _b < _c.length; _b++) {
                                _d = _c[_b], e_48 = _d[0], t_43 = _d[1];
                                t_43 && f.input.addAction(e_48, t_43);
                            }
                            for (_f = 0, _g = (s = n.autoloads) == null ? [] : s; _f < _g.length; _f++) {
                                e_49 = _g[_f];
                                f.addAutoload(e_49);
                            }
                            h = new e(d, (c = n.renderer) == null ? null : c, f, (l = n.pauseOnBackground) == null || l, p), g = n.loading === void 0 ? Oe : n.loading;
                            if (!g) return [3, 2];
                            return [4, f.changeScene(g)];
                        case 1:
                            _h = _k.sent();
                            return [3, 3];
                        case 2:
                            _h = null;
                            _k.label = 3;
                        case 3:
                            _ = _h;
                            n.start && h.start();
                            return [4, f.assets._startup(n.main.assets)];
                        case 4:
                            _k.sent();
                            _j = n.start;
                            if (!_j) return [3, 6];
                            return [4, (_ == null || (u = _.loaded) == null ? void 0 : u.call(_))];
                        case 5:
                            _j = (_k.sent());
                            _k.label = 6;
                        case 6:
                            _j;
                            return [4, f.changeScene(n.main)];
                        case 7: return [2, (_k.sent(), h)];
                    }
                }); });
            };
            Object.defineProperty(e.prototype, "platform", {
                get: function () { return this._platform; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(e.prototype, "scene", {
                get: function () { return this.tree.currentScene; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(e.prototype, "suspended", {
                get: function () { return this._suspended; },
                enumerable: false,
                configurable: true
            });
            e.prototype.frame = function (e) { var t; if (this._suspended)
                return; var n = this._platform, r = n.now(); this.tree.advance(e); var i = n.now(); (t = this._renderer) == null || t.render(this.tree); var a = n.now(); this._stats._add(e * 1e3, i - r, a - i); };
            Object.defineProperty(e.prototype, "frameStats", {
                get: function () { return this._stats; },
                enumerable: false,
                configurable: true
            });
            e.prototype.resetFrameStats = function () { this._stats._reset(); };
            e.prototype.start = function () {
                var _this = this;
                if (this._frameId !== null)
                    return;
                this._lastTime = this._platform.now();
                var e = function (t) { var n = (t - _this._lastTime) / 1e3; _this._lastTime = t, _this.frame(n), _this._frameId = _this._platform.requestFrame(e); };
                this._frameId = this._platform.requestFrame(e);
            };
            e.prototype.stop = function () { this._frameId !== null && this._platform.cancelFrame(this._frameId), this._frameId = null; };
            e.prototype.destroy = function () { var e; this.stop(); for (var e_50 = this._disposers.length - 1; e_50 >= 0; e_50--)
                this._disposers[e_50](); this._disposers.length = 0, this._unsubscribeScreen(), this._unsubscribeInput(), this._unsubscribeFocus(), (e = this._renderer) == null || e.destroy(); };
            return e;
        }());
    })))();
}
function Me() { return (Me = e.n((function () { je(); })))(); }
function Ne(e) { return e > 0 ? Math.min(1, e) : 0; }
function Pe(e) { return new Be({ name: e.name, tileSet: e.tileSet, width: e.width, height: e.height, cells: e.cells, position: new C(e.offsetX, e.offsetY), visible: e.visible, alpha: e.opacity, collisionLayer: e.collisionLayer }); }
function Fe(e) { if (!Number.isInteger(e) || e < 0 || e > 65535)
    throw Error("TileMapLayer: tile id must be an integer from 0 (empty) to 65535 (got ".concat(e, ").")); }
function Ie(e) { var t = typeof e == "number" ? { left: e, top: e, right: e, bottom: e } : e; for (var _i = 0, _a = ["left", "top", "right", "bottom"]; _i < _a.length; _i++) {
    var e_51 = _a[_i];
    var n_30 = t[e_51];
    if (!(n_30 >= 0) || !Number.isFinite(n_30))
        throw Error("NineSliceSprite: margin ".concat(e_51, " must be a finite number >= 0, got ").concat(n_30, "."));
} return Object.freeze({ left: t.left, top: t.top, right: t.right, bottom: t.bottom }); }
var Le, Re, ze, Be, Ve, He, Ue;
function We() { return (We = e.n((function () { I(), t.c(), t.o(), Le = new Set(["modulate", "selfModulate", "flashColor"]), Re = (function (_super) {
    __extends(Re, _super);
    function Re(e) {
        if (e === void 0) { e = {}; }
        var _this = this;
        var n, r, i, a, o, s, c;
        _this = _super.call(this, e) || this, t.s(_this, "_texture", void 0), t.s(_this, "_centered", void 0), t.s(_this, "_offset", void 0), t.s(_this, "_flipH", void 0), t.s(_this, "_flipV", void 0), t.s(_this, "_flashAmount", void 0), t.s(_this, "_flashTint", void 0), _this._texture = (n = e.texture) == null ? null : n, _this._centered = (r = e.centered) == null || r, _this._offset = (i = e.offset) == null ? C.ZERO : i, _this._flipH = (a = e.flipH) != null && a, _this._flipV = (o = e.flipV) != null && o, _this._flashAmount = Ne((s = e.flash) == null ? 0 : s), _this._flashTint = m((c = e.flashColor) == null ? 16777215 : c);
        return _this;
    }
    Object.defineProperty(Re.prototype, "texture", {
        get: function () { return this._texture; },
        set: function (e) { this._texture = e, this._version++; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Re.prototype, "centered", {
        get: function () { return this._centered; },
        set: function (e) { this._centered = e, this._version++; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Re.prototype, "offset", {
        get: function () { return this._offset; },
        set: function (e) { this._offset = e, this._version++; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Re.prototype, "flipH", {
        get: function () { return this._flipH; },
        set: function (e) { this._flipH = e, this._version++; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Re.prototype, "flipV", {
        get: function () { return this._flipV; },
        set: function (e) { this._flipV = e, this._version++; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Re.prototype, "flash", {
        get: function () { return this._flashAmount; },
        set: function (e) { var t = Ne(e); t !== this._flashAmount && (this._flashAmount = t, this._version++); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Re.prototype, "flashColor", {
        get: function () { return this._flashTint; },
        set: function (e) { this._flashTint = m(e), this._version++; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Re.prototype, "_colorProps", {
        get: function () { return Le; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Re.prototype, "rect", {
        get: function () { var e = this._texture; if (!e || e.width === 0 || e.height === 0)
            return null; var t = this._centered ? e.pivot : null, n = this._centered ? t ? t.x : .5 : 0, r = this._centered ? t ? t.y : .5 : 0; return new A(-n * e.width + this._offset.x, -r * e.height + this._offset.y, e.width, e.height); },
        enumerable: false,
        configurable: true
    });
    Re.prototype.hitTest = function (e) { var t, n; return this.hitArea ? _super.prototype.hitTest.call(this, e) : (t = (n = this.rect) == null ? void 0 : n.contains(e)) != null && t; };
    Re.prototype.dumpProps = function () { var e, n; return t.a(t.a({}, _super.prototype.dumpProps.call(this)), {}, { texture: (e = (n = this._texture) == null ? void 0 : n.path) == null ? null : e, centered: this._centered ? void 0 : !1, offset: this._offset.equals(C.ZERO) ? void 0 : this._offset, flipH: this._flipH || void 0, flipV: this._flipV || void 0, flash: this._flashAmount > 0 ? Math.round(this._flashAmount * 100) / 100 : void 0, flashColor: this._flashTint === 16777215 ? void 0 : h(this._flashTint) }); };
    return Re;
}(N)), Object.freeze({}), ze = (function () {
    function ze() {
        t.s(this, "layers", []);
    }
    ze.prototype.add = function (e) { this.layers.push(e); };
    ze.prototype.remove = function (e) { var t = this.layers.indexOf(e); t >= 0 && this.layers.splice(t, 1); };
    return ze;
}()), Be = (function (_super) {
    __extends(Be, _super);
    function Be(e) {
        var _this = this;
        var n;
        _this = _super.call(this, e) || this, t.s(_this, "tileSet", void 0), t.s(_this, "width", void 0), t.s(_this, "height", void 0), t.s(_this, "collisionLayer", void 0), t.s(_this, "_cells", void 0), t.s(_this, "_chunksX", void 0), t.s(_this, "_chunksY", void 0), t.s(_this, "_chunkVersions", void 0), t.s(_this, "_usedCount", 0);
        var r = e.tileSet, i = e.width, a = e.height, o = e.cells;
        if (!Number.isInteger(i) || !Number.isInteger(a) || i < 1 || a < 1)
            throw Error("TileMapLayer: width and height must be positive integers (got ".concat(i, "\u00D7").concat(a, ")."));
        if (_this.tileSet = r, _this.width = i, _this.height = a, _this.collisionLayer = (n = e.collisionLayer) == null ? 1 : n, _this._cells = new Uint16Array(i * a), _this._chunksX = Math.ceil(i / 16), _this._chunksY = Math.ceil(a / 16), _this._chunkVersions = new Uint32Array(_this._chunksX * _this._chunksY), o) {
            if (o.length !== i * a)
                throw Error("TileMapLayer: cells has ".concat(o.length, " entries, expected ").concat(i, "\u00D7").concat(a, " = ").concat(i * a, "."));
            for (var e_52 = 0; e_52 < o.length; e_52++) {
                var t_44 = o[e_52];
                Fe(t_44), _this._cells[e_52] = t_44, t_44 && _this._usedCount++;
            }
        }
        return _this;
    }
    Be.fromTiled = function (e, t) { return t === void 0 ? e.tileLayers.map(Pe) : Pe(e.tileLayer(t)); };
    Object.defineProperty(Be.prototype, "usedCellCount", {
        get: function () { return this._usedCount; },
        enumerable: false,
        configurable: true
    });
    Be.prototype.getCell = function (e, t) { return e < 0 || t < 0 || e >= this.width || t >= this.height || !Number.isInteger(e) || !Number.isInteger(t) ? 0 : this._cells[t * this.width + e]; };
    Be.prototype.setCell = function (e, t, n) { if (e < 0 || t < 0 || e >= this.width || t >= this.height || !Number.isInteger(e) || !Number.isInteger(t))
        throw Error("TileMapLayer \"".concat(this.name, "\": cell (").concat(e, ", ").concat(t, ") is outside the map (").concat(this.width, "\u00D7").concat(this.height, ").")); Fe(n); var r = t * this.width + e, i = this._cells[r]; i !== n && (this._cells[r] = n, this._usedCount += !!n - +!!i, this._chunkVersions[Math.floor(t / 16) * this._chunksX + Math.floor(e / 16)]++); };
    Be.prototype.eraseCell = function (e, t) { this.setCell(e, t, 0); };
    Be.prototype.getCellTileData = function (e, t) { var n = this.getCell(e, t); return n ? this.tileSet.tile(n) : null; };
    Be.prototype.localToMap = function (e) { var t = this.tileSet.tileSize; return new C(Math.floor(e.x / t), Math.floor(e.y / t)); };
    Be.prototype.mapToLocal = function (e) { var t = this.tileSet.tileSize; return new C((e.x + .5) * t, (e.y + .5) * t); };
    Be.prototype.getUsedRect = function () { var e = this.width, t = this.height, n = -1, r = -1, i = this.width; for (var a_7 = 0; a_7 < this._cells.length; a_7++) {
        if (!this._cells[a_7])
            continue;
        var o_3 = a_7 % i, s_2 = (a_7 - o_3) / i;
        o_3 < e && (e = o_3), o_3 > n && (n = o_3), s_2 < t && (t = s_2), s_2 > r && (r = s_2);
    } return n < 0 ? new A(0, 0, 0, 0) : new A(e, t, n - e + 1, r - t + 1); };
    Be.prototype._cellCollision = function (e, t) { var n; return e < 0 || t < 0 || e >= this.width || t >= this.height || (n = this.tileSet._collision[this._cells[t * this.width + e]]) == null ? 0 : n; };
    Be.prototype._onEnterTree = function () { this.tree.system(ze).add(this); };
    Be.prototype._onExitTree = function () { this.tree.system(ze).remove(this); };
    Be.prototype.dumpProps = function () { return t.a(t.a({}, _super.prototype.dumpProps.call(this)), {}, { tileSet: this.tileSet.texture.path, size: "".concat(this.width, "x").concat(this.height), cells: this._usedCount, collisionLayer: this.collisionLayer === 1 ? void 0 : this.collisionLayer }); };
    return Be;
}(N)), Ve = (function (_super) {
    __extends(Ve, _super);
    function Ve(e) {
        if (e === void 0) { e = {}; }
        var _this = this;
        var n, r, i;
        _this = _super.call(this, e) || this, t.s(_this, "_texture", void 0), t.s(_this, "_margins", void 0), t.s(_this, "_size", void 0), _this._texture = (n = e.texture) == null ? null : n, _this._margins = Ie((r = e.margins) == null ? 0 : r), _this._size = (i = e.size) == null ? C.ZERO : i;
        return _this;
    }
    Object.defineProperty(Ve.prototype, "texture", {
        get: function () { return this._texture; },
        set: function (e) { this._texture = e, this._version++; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ve.prototype, "margins", {
        get: function () { return this._margins; },
        set: function (e) { this._margins = Ie(e), this._version++; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ve.prototype, "size", {
        get: function () { return this._size; },
        set: function (e) { this._size = e, this._version++; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ve.prototype, "rect", {
        get: function () { return new A(0, 0, this._size.x, this._size.y); },
        enumerable: false,
        configurable: true
    });
    Ve.prototype.hitTest = function (e) { if (this.hitArea)
        return _super.prototype.hitTest.call(this, e); var t = this._size; return e.x >= 0 && e.y >= 0 && e.x <= t.x && e.y <= t.y; };
    Ve.prototype.dumpProps = function () { var e, n; var r = this._margins, i = r.left === r.top && r.left === r.right && r.left === r.bottom; return t.a(t.a({}, _super.prototype.dumpProps.call(this)), {}, { texture: (e = (n = this._texture) == null ? void 0 : n.path) == null ? null : e, size: this._size, margins: i ? r.left === 0 ? void 0 : r.left : "".concat(r.left, ",").concat(r.top, ",").concat(r.right, ",").concat(r.bottom) }); };
    return Ve;
}(N)), He = (function (_super) {
    __extends(He, _super);
    function He(e) {
        if (e === void 0) { e = {}; }
        var _this = this;
        var n, r, i, a, o, s, c, u, d, f, p, m, h, g, _, v, y, b;
        _this = _super.call(this, e) || this, t.s(_this, "finished", new w), t.s(_this, "texture", void 0), t.s(_this, "lifetime", void 0), t.s(_this, "lifetimeRandomness", void 0), t.s(_this, "oneShot", void 0), t.s(_this, "rate", void 0), t.s(_this, "direction", void 0), t.s(_this, "spread", void 0), t.s(_this, "speedMin", void 0), t.s(_this, "speedMax", void 0), t.s(_this, "gravity", void 0), t.s(_this, "damping", void 0), t.s(_this, "scaleStart", void 0), t.s(_this, "scaleEnd", void 0), t.s(_this, "alphaStart", void 0), t.s(_this, "alphaEnd", void 0), t.s(_this, "localCoords", void 0), t.s(_this, "_emitting", void 0), t.s(_this, "_amount", 0), t.s(_this, "_count", 0), t.s(_this, "_px", new Float64Array), t.s(_this, "_py", new Float64Array), t.s(_this, "_age", new Float64Array), t.s(_this, "_life", new Float64Array), t.s(_this, "_vx", new Float64Array), t.s(_this, "_vy", new Float64Array), t.s(_this, "_acc", 0), t.s(_this, "_running", !1), t.s(_this, "_global", l()), _this.texture = (n = e.texture) == null ? null : n, _this.lifetime = (r = e.lifetime) == null ? 1 : r, _this.lifetimeRandomness = (i = e.lifetimeRandomness) == null ? 0 : i, _this._emitting = (a = e.emitting) == null || a, _this.oneShot = (o = e.oneShot) != null && o, _this.rate = (s = e.rate) == null ? null : s, _this.direction = (c = e.direction) == null ? 0 : c, _this.spread = (u = e.spread) == null ? Math.PI : u, _this.speedMin = (d = e.speedMin) == null ? 100 : d, _this.speedMax = (f = e.speedMax) == null ? _this.speedMin : f, _this.gravity = (p = e.gravity) == null ? C.ZERO : p, _this.damping = (m = e.damping) == null ? 0 : m, _this.scaleStart = (h = e.scaleStart) == null ? 1 : h, _this.scaleEnd = (g = e.scaleEnd) == null ? _this.scaleStart : g, _this.alphaStart = (_ = e.alphaStart) == null ? 1 : _, _this.alphaEnd = (v = e.alphaEnd) == null ? _this.alphaStart : v, _this.localCoords = (y = e.localCoords) != null && y, _this.amount = (b = e.amount) == null ? 16 : b;
        return _this;
    }
    Object.defineProperty(He.prototype, "amount", {
        get: function () { return this._amount; },
        set: function (e) { if (!Number.isInteger(e) || e < 0)
            throw Error("Particles2D \"".concat(this.name, "\": amount must be an integer >= 0, got ").concat(e, ".")); this._amount = e, this._count = 0, this._px = new Float64Array(e), this._py = new Float64Array(e), this._vx = new Float64Array(e), this._vy = new Float64Array(e), this._age = new Float64Array(e), this._life = new Float64Array(e); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(He.prototype, "emitting", {
        get: function () { return this._emitting; },
        set: function (e) { this._emitting = e, e && (this._acc = 0); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(He.prototype, "aliveCount", {
        get: function () { return this._count; },
        enumerable: false,
        configurable: true
    });
    He.prototype.emit = function (e) {
        if (e === void 0) { e = this._amount; }
        if (this.isInsideTree) {
            this.localCoords || this._computeGlobal();
            for (var t_45 = 0; t_45 < e && this._count < this._amount; t_45++)
                this._spawn();
        }
    };
    He.prototype.restart = function () { this._count = 0, this._acc = 0, this._running = !1; };
    He.prototype._internalProcess = function (e) { if (this._simulate(e), this._emitting) {
        if (this.oneShot)
            this._emitting = !1, this.emit();
        else {
            var t;
            var n_31 = (t = this.rate) == null ? this.lifetime > 0 ? this._amount / this.lifetime : 0 : t;
            if (this._acc += n_31 * e, this._acc >= 1)
                for (this.localCoords || this._computeGlobal(); this._acc >= 1;)
                    this._count < this._amount && this._spawn(), --this._acc;
        }
    } this._running && this._count === 0 && !this._emitting && (this._running = !1, this.finished.emit()); };
    He.prototype._simulate = function (e) { if (this._count === 0 || e === 0)
        return; var t = this._px, n = this._py, r = this._vx, i = this._vy, a = this._age, o = this._life, s = this.gravity.x * e, c = this.gravity.y * e, l = this.damping > 0 ? Math.max(0, 1 - this.damping * e) : 1, u = this._count; for (var d_3 = 0; d_3 < u; d_3++) {
        var f_2 = a[d_3] + e;
        if (f_2 >= o[d_3]) {
            u--, t[d_3] = t[u], n[d_3] = n[u], r[d_3] = r[u], i[d_3] = i[u], a[d_3] = a[u], o[d_3] = o[u], d_3--;
            continue;
        }
        a[d_3] = f_2;
        var p_2 = (r[d_3] + s) * l, m_2 = (i[d_3] + c) * l;
        r[d_3] = p_2, i[d_3] = m_2, t[d_3] = t[d_3] + p_2 * e, n[d_3] = n[d_3] + m_2 * e;
    } this._count = u; };
    He.prototype._spawn = function () { var e = this.tree.fxRng, t = this._count++, n = this.direction + (e.randf() * 2 - 1) * this.spread; if (this.localCoords)
        this._px[t] = 0, this._py[t] = 0;
    else {
        var e_53 = this._global;
        this._px[t] = e_53.tx, this._py[t] = e_53.ty, n += Math.atan2(e_53.b, e_53.a);
    } var r = this.speedMin + (this.speedMax - this.speedMin) * e.randf(); this._vx[t] = Math.cos(n) * r, this._vy[t] = Math.sin(n) * r, this._age[t] = 0, this._life[t] = Math.max(1e-6, this.lifetime * (1 - this.lifetimeRandomness * e.randf())), this._running = !0; };
    He.prototype._computeGlobal = function () { this._computeGlobalInto(this._global); };
    He.prototype.dumpProps = function () { var e, n; return t.a(t.a({}, _super.prototype.dumpProps.call(this)), {}, { texture: (e = (n = this.texture) == null ? void 0 : n.path) == null ? void 0 : e, emitting: this._emitting || void 0, particles: this._count }); };
    return He;
}(N)), Ue = (function (_super) {
    __extends(Ue, _super);
    function Ue(e) {
        if (e === void 0) { e = {}; }
        var _this = this;
        var n, r, i, a, o, s, c, l, u, d;
        _this = _super.call(this, e) || this, t.s(_this, "_text", void 0), t.s(_this, "_fontSize", void 0), t.s(_this, "_color", void 0), t.s(_this, "_fontFamily", void 0), t.s(_this, "_fontWeight", void 0), t.s(_this, "_align", void 0), t.s(_this, "_verticalAlign", void 0), t.s(_this, "_stroke", void 0), t.s(_this, "_wrapWidth", void 0), t.s(_this, "_lineHeight", void 0), _this._text = (n = e.text) == null ? "" : n, _this._fontSize = (r = e.fontSize) == null ? 32 : r, _this._color = (i = e.color) == null ? 16777215 : i, _this._fontFamily = (a = e.fontFamily) == null ? "sans-serif" : a, _this._fontWeight = (o = e.fontWeight) == null ? "normal" : o, _this._align = (s = e.align) == null ? "left" : s, _this._verticalAlign = (c = e.verticalAlign) == null ? "top" : c, _this._stroke = (l = e.stroke) == null ? null : l, _this._wrapWidth = (u = e.wrapWidth) == null ? null : u, _this._lineHeight = (d = e.lineHeight) == null ? null : d;
        return _this;
    }
    Object.defineProperty(Ue.prototype, "text", {
        get: function () { return this._text; },
        set: function (e) { e !== this._text && (this._text = e, this._version++); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ue.prototype, "fontSize", {
        get: function () { return this._fontSize; },
        set: function (e) { this._fontSize = e, this._version++; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ue.prototype, "color", {
        get: function () { return this._color; },
        set: function (e) { this._color = e, this._version++; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ue.prototype, "fontFamily", {
        get: function () { return this._fontFamily; },
        set: function (e) { this._fontFamily = e, this._version++; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ue.prototype, "fontWeight", {
        get: function () { return this._fontWeight; },
        set: function (e) { this._fontWeight = e, this._version++; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ue.prototype, "align", {
        get: function () { return this._align; },
        set: function (e) { this._align = e, this._version++; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ue.prototype, "verticalAlign", {
        get: function () { return this._verticalAlign; },
        set: function (e) { this._verticalAlign = e, this._version++; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ue.prototype, "stroke", {
        get: function () { return this._stroke; },
        set: function (e) { this._stroke = e, this._version++; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ue.prototype, "wrapWidth", {
        get: function () { return this._wrapWidth; },
        set: function (e) { this._wrapWidth = e, this._version++; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ue.prototype, "lineHeight", {
        get: function () { return this._lineHeight; },
        set: function (e) { this._lineHeight = e, this._version++; },
        enumerable: false,
        configurable: true
    });
    Ue.prototype.dumpProps = function () { return t.a(t.a({}, _super.prototype.dumpProps.call(this)), {}, { text: this._text, fontSize: this._fontSize === 32 ? void 0 : this._fontSize, align: this._align === "left" ? void 0 : this._align }); };
    return Ue;
}(N)); })))(); }
Object.defineProperty(exports, "C", { enumerable: !0, get: function () { return d; } }), Object.defineProperty(exports, "E", { enumerable: !0, get: function () { return _; } }), Object.defineProperty(exports, "S", { enumerable: !0, get: function () { return u; } }), Object.defineProperty(exports, "T", { enumerable: !0, get: function () { return r; } }), Object.defineProperty(exports, "_", { enumerable: !0, get: function () { return A; } }), Object.defineProperty(exports, "a", { enumerable: !0, get: function () { return Be; } }), Object.defineProperty(exports, "b", { enumerable: !0, get: function () { return l; } }), Object.defineProperty(exports, "c", { enumerable: !0, get: function () { return Ae; } }), Object.defineProperty(exports, "d", { enumerable: !0, get: function () { return je; } }), Object.defineProperty(exports, "f", { enumerable: !0, get: function () { return me; } }), Object.defineProperty(exports, "g", { enumerable: !0, get: function () { return N; } }), Object.defineProperty(exports, "h", { enumerable: !0, get: function () { return k; } }), Object.defineProperty(exports, "i", { enumerable: !0, get: function () { return Re; } }), Object.defineProperty(exports, "l", { enumerable: !0, get: function () { return W; } }), Object.defineProperty(exports, "m", { enumerable: !0, get: function () { return D; } }), Object.defineProperty(exports, "n", { enumerable: !0, get: function () { return Ve; } }), Object.defineProperty(exports, "o", { enumerable: !0, get: function () { return We; } }), Object.defineProperty(exports, "p", { enumerable: !0, get: function () { return F; } }), Object.defineProperty(exports, "r", { enumerable: !0, get: function () { return He; } }), Object.defineProperty(exports, "s", { enumerable: !0, get: function () { return Me; } }), Object.defineProperty(exports, "t", { enumerable: !0, get: function () { return Ue; } }), Object.defineProperty(exports, "u", { enumerable: !0, get: function () { return X; } }), Object.defineProperty(exports, "v", { enumerable: !0, get: function () { return w; } }), Object.defineProperty(exports, "w", { enumerable: !0, get: function () { return g; } }), Object.defineProperty(exports, "x", { enumerable: !0, get: function () { return I; } }), Object.defineProperty(exports, "y", { enumerable: !0, get: function () { return C; } });
