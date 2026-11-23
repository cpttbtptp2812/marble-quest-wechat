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
var e = require("./rolldown-runtime-8PkXcCTM.js"), t = require("./sapling-engine-OS5i6gdH.js"), n = require("./sapling-engine-Bm6Jd0uz.js"), r = require("./sapling-engine-Dk_0uYx9.js"), i = require("./sapling-engine-nIouhjEF.js"), a = require("./sapling-engine-BKSSueUl.js"), o = require("./sapling-engine-sX7qVz9U.js"), s = require("./sapling-engine-DdkTJwUg.js"), c = require("./sapling-engine-6sEQUsKX.js"), l = require("./sapling-engine-BIAzTs9D.js"), u = require("./sapling-engine-DRXIDWb4.js"), d = require("./sapling-engine-DkqQT0bo.js"), f = require("./sapling-engine-DK3rVQTY.js");
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
function y(e) { if (!Number.isInteger(e) || e < 1 || e > 32)
    throw Error("Collision layer must be an integer in 1..32, got ".concat(e)); return 1 << e - 1 >>> 0; }
function b(e) { return new O(e); }
function x(e, t) { return new k(e, t); }
var S, C, w, T, E, D, O, k;
function A() { return (A = e.n((function () { n.x(), n.d(), n.s(), n.o(), t.c(), t.o(), S = (function (_super) {
    __extends(S, _super);
    function S(e) {
        if (e === void 0) { e = {}; }
        var _this = this;
        var n, r;
        _this = _super.call(this, e) || this, t.s(_this, "layer", void 0), t.s(_this, "visible", void 0), _this.layer = (n = e.layer) == null ? 1 : n, _this.visible = (r = e.visible) == null || r;
        return _this;
    }
    Object.defineProperty(S.prototype, "_isCanvasLayer", {
        get: function () { return !0; },
        enumerable: false,
        configurable: true
    });
    S.prototype.dumpProps = function () { return t.a(t.a({}, _super.prototype.dumpProps.call(this)), {}, { layer: this.layer, visible: this.visible ? void 0 : !1 }); };
    return S;
}(n.h)), C = (function (_super) {
    __extends(C, _super);
    function C(e) {
        if (e === void 0) { e = {}; }
        var _this = this;
        var n, r;
        _this = _super.call(this, e) || this, t.s(_this, "_shape", void 0), t.s(_this, "_disabled", void 0), _this._shape = (n = e.shape) == null ? null : n, _this._disabled = (r = e.disabled) != null && r;
        return _this;
    }
    Object.defineProperty(C.prototype, "shape", {
        get: function () { return this._shape; },
        set: function (e) { this._shape = e, this._notifyBody(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(C.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (e) { this._disabled = e, this._notifyBody(); },
        enumerable: false,
        configurable: true
    });
    C.prototype._onEnterTree = function () { var e, t; this.parent instanceof w || console.warn("CollisionShape2D \"".concat(this.name, "\" only works as a direct child of a CollisionObject2D (RigidBody2D, StaticBody2D, Area2D); its parent is ").concat((e = (t = this.parent) == null ? void 0 : t.constructor.name) == null ? "none" : e, ".")), this._notifyBody(); };
    C.prototype._onExitTree = function () { this._notifyBody(); };
    C.prototype._transformChanged = function () { this._notifyBody(); };
    C.prototype._notifyBody = function () { this.parent instanceof w && this.parent._shapesChanged(); };
    C.prototype.dumpProps = function () { return t.a(t.a({}, _super.prototype.dumpProps.call(this)), {}, { shape: this._shape ? this._shape.toString() : null, disabled: this._disabled || void 0 }); };
    return C;
}(n.g)), w = (function (_super) {
    __extends(w, _super);
    function w(e) {
        if (e === void 0) { e = {}; }
        var _this = this;
        var n, r;
        _this = _super.call(this, e) || this, t.s(_this, "_collisionLayer", void 0), t.s(_this, "_collisionMask", void 0), t.s(_this, "_bodyEntered", null), t.s(_this, "_bodyExited", null), t.s(_this, "_handle", null), _this._collisionLayer = ((n = e.collisionLayer) == null ? 1 : n) >>> 0, _this._collisionMask = ((r = e.collisionMask) == null ? 1 : r) >>> 0;
        return _this;
    }
    Object.defineProperty(w.prototype, "collisionLayer", {
        get: function () { return this._collisionLayer; },
        set: function (e) { this._collisionLayer = e >>> 0, this._propsChanged(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(w.prototype, "collisionMask", {
        get: function () { return this._collisionMask; },
        set: function (e) { this._collisionMask = e >>> 0, this._propsChanged(); },
        enumerable: false,
        configurable: true
    });
    w.prototype.getCollisionLayerValue = function (e) { return (this._collisionLayer & y(e)) !== 0; };
    w.prototype.setCollisionLayerValue = function (e, t) { this.collisionLayer = t ? this._collisionLayer | y(e) : this._collisionLayer & ~y(e); };
    w.prototype.getCollisionMaskValue = function (e) { return (this._collisionMask & y(e)) !== 0; };
    w.prototype.setCollisionMaskValue = function (e, t) { this.collisionMask = t ? this._collisionMask | y(e) : this._collisionMask & ~y(e); };
    Object.defineProperty(w.prototype, "bodyEntered", {
        get: function () { var e; return (e = this._bodyEntered) == null ? this._bodyEntered = new n.v : e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(w.prototype, "bodyExited", {
        get: function () { var e; return (e = this._bodyExited) == null ? this._bodyExited = new n.v : e; },
        enumerable: false,
        configurable: true
    });
    w.prototype._onEnterTree = function () { this.tree.physics._register(this); };
    w.prototype._onExitTree = function () { this.tree.physics._unregister(this); };
    w.prototype._onFreed = function () { var e, t; _super.prototype._onFreed.call(this), (e = this._bodyEntered) == null || e.disconnectAll(), (t = this._bodyExited) == null || t.disconnectAll(); };
    w.prototype._shapes = function () { var e = []; for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
        var t_3 = _a[_i];
        t_3 instanceof C && t_3.shape && !t_3.disabled && t_3.isInsideTree && e.push({ shape: t_3.shape, position: t_3.position, rotation: t_3.rotation });
    } return e; };
    w.prototype._props = function () { return { friction: .5, bounce: 0, mass: 1, gravityScale: 1, linearDamp: 0, angularDamp: 0, lockRotation: !1, canSleep: !0, ccd: !1 }; };
    w.prototype._writeBack = function (e, t) { };
    w.prototype._attached = function (e) { this._handle = e; };
    w.prototype._detached = function () { this._handle = null; };
    w.prototype._emitBodyEntered = function (e) { var t; (t = this._bodyEntered) == null || t.emit(e); };
    w.prototype._emitBodyExited = function (e) { var t; (t = this._bodyExited) == null || t.emit(e); };
    w.prototype._shapesChanged = function () { this.isInsideTree && this.tree.physics._shapesChanged(this); };
    w.prototype._propsChanged = function () { this.isInsideTree && this.tree.physics._propsChanged(this); };
    w.prototype.dumpProps = function () { return t.a(t.a({}, _super.prototype.dumpProps.call(this)), {}, { collisionLayer: this._collisionLayer === 1 ? void 0 : this._collisionLayer, collisionMask: this._collisionMask === 1 ? void 0 : this._collisionMask }); };
    return w;
}(n.g)), T = (function (_super) {
    __extends(T, _super);
    function T(e) {
        if (e === void 0) { e = {}; }
        var _this = this;
        var n, r;
        _this = _super.call(this, e) || this, t.s(_this, "_isArea", !1), t.s(_this, "_friction", void 0), t.s(_this, "_bounce", void 0), t.s(_this, "_writingBack", !1), _this._friction = (n = e.friction) == null ? .5 : n, _this._bounce = (r = e.bounce) == null ? 0 : r;
        return _this;
    }
    Object.defineProperty(T.prototype, "friction", {
        get: function () { return this._friction; },
        set: function (e) { this._friction = e, this._propsChanged(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(T.prototype, "bounce", {
        get: function () { return this._bounce; },
        set: function (e) { this._bounce = e, this._propsChanged(); },
        enumerable: false,
        configurable: true
    });
    T.prototype.getCollidingBodies = function () { return this.isInsideTree ? this.tree.physics._overlaps(this) : []; };
    T.prototype._props = function () { return t.a(t.a({}, _super.prototype._props.call(this)), {}, { friction: this._friction, bounce: this._bounce }); };
    T.prototype._writeBack = function (e, t) { this._writingBack = !0; try {
        var n_1 = this._parent2D();
        if (n_1) {
            var r_2 = n_1.globalTransform.inverse();
            if (!r_2)
                return;
            this.position = r_2.apply(e), this.rotation = t - n_1.globalRotation;
        }
        else
            this.position = e, this.rotation = t;
    }
    finally {
        this._writingBack = !1;
    } };
    T.prototype._transformChanged = function () { !this._writingBack && this.isInsideTree && this.tree.physics._teleport(this); };
    T.prototype._parent2D = function () { for (var e_5 = this._canvasParent; e_5; e_5 = e_5._canvasParent)
        if (e_5 instanceof n.g)
            return e_5; return null; };
    T.prototype.dumpProps = function () { return t.a(t.a({}, _super.prototype.dumpProps.call(this)), {}, { friction: this._friction === .5 ? void 0 : this._friction, bounce: this._bounce === 0 ? void 0 : this._bounce }); };
    return T;
}(w)), E = (function (_super) {
    __extends(E, _super);
    function E() {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        var _this = this;
        _this = _super.apply(this, e) || this, t.s(_this, "_bodyType", "static");
        return _this;
    }
    return E;
}(T)), D = (function (_super) {
    __extends(D, _super);
    function D(e) {
        if (e === void 0) { e = {}; }
        var _this = this;
        var n, r, i, a, o, s, c, l, u;
        _this = _super.call(this, e) || this, t.s(_this, "_bodyType", "dynamic"), t.s(_this, "_mass", void 0), t.s(_this, "_gravityScale", void 0), t.s(_this, "_linearDamp", void 0), t.s(_this, "_angularDamp", void 0), t.s(_this, "_lockRotation", void 0), t.s(_this, "_canSleep", void 0), t.s(_this, "_ccd", void 0), t.s(_this, "_pendingLinearVelocity", void 0), t.s(_this, "_pendingAngularVelocity", void 0), t.s(_this, "_pending", []), _this._mass = (n = e.mass) == null ? 1 : n, _this._gravityScale = (r = e.gravityScale) == null ? 1 : r, _this._linearDamp = (i = e.linearDamp) == null ? 0 : i, _this._angularDamp = (a = e.angularDamp) == null ? 0 : a, _this._lockRotation = (o = e.lockRotation) != null && o, _this._canSleep = (s = e.canSleep) == null || s, _this._ccd = (c = e.ccd) != null && c, _this._pendingLinearVelocity = (l = e.linearVelocity) == null ? null : l, _this._pendingAngularVelocity = (u = e.angularVelocity) == null ? null : u;
        return _this;
    }
    Object.defineProperty(D.prototype, "mass", {
        get: function () { return this._mass; },
        set: function (e) { if (!(e > 0))
            throw Error("RigidBody2D mass must be > 0, got ".concat(e)); this._mass = e, this._propsChanged(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "gravityScale", {
        get: function () { return this._gravityScale; },
        set: function (e) { this._gravityScale = e, this._propsChanged(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "linearDamp", {
        get: function () { return this._linearDamp; },
        set: function (e) { this._linearDamp = e, this._propsChanged(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "angularDamp", {
        get: function () { return this._angularDamp; },
        set: function (e) { this._angularDamp = e, this._propsChanged(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "lockRotation", {
        get: function () { return this._lockRotation; },
        set: function (e) { this._lockRotation = e, this._propsChanged(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "canSleep", {
        get: function () { return this._canSleep; },
        set: function (e) { this._canSleep = e, this._propsChanged(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "ccd", {
        get: function () { return this._ccd; },
        set: function (e) { this._ccd = e, this._propsChanged(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "linearVelocity", {
        get: function () { var e, t, r; return (e = (t = (r = this._handle) == null ? void 0 : r.linearVelocity) == null ? this._pendingLinearVelocity : t) == null ? n.y.ZERO : e; },
        set: function (e) { this._handle ? this._handle.linearVelocity = e : this._pendingLinearVelocity = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "angularVelocity", {
        get: function () { var e, t, n; return (e = (t = (n = this._handle) == null ? void 0 : n.angularVelocity) == null ? this._pendingAngularVelocity : t) == null ? 0 : e; },
        set: function (e) { this._handle ? this._handle.angularVelocity = e : this._pendingAngularVelocity = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "sleeping", {
        get: function () { var e, t; return (e = (t = this._handle) == null ? void 0 : t.sleeping) != null && e; },
        set: function (e) { this._withHandle(function (t) { return t.sleeping = e; }); },
        enumerable: false,
        configurable: true
    });
    D.prototype.applyCentralImpulse = function (e) { this._withHandle(function (t) { return t.applyImpulse(e); }); };
    D.prototype.applyImpulse = function (e, t) { this._withHandle(function (n) { return n.applyImpulse(e, t); }); };
    D.prototype.applyCentralForce = function (e) { this._withHandle(function (t) { return t.applyForce(e); }); };
    D.prototype.applyForce = function (e, t) { this._withHandle(function (n) { return n.applyForce(e, t); }); };
    D.prototype.applyTorqueImpulse = function (e) { this._withHandle(function (t) { return t.applyTorqueImpulse(e); }); };
    D.prototype.applyTorque = function (e) { this._withHandle(function (t) { return t.applyTorque(e); }); };
    D.prototype._withHandle = function (e) { this._handle ? e(this._handle) : this._pending.push(e); };
    D.prototype._props = function () { return t.a(t.a({}, _super.prototype._props.call(this)), {}, { mass: this._mass, gravityScale: this._gravityScale, linearDamp: this._linearDamp, angularDamp: this._angularDamp, lockRotation: this._lockRotation, canSleep: this._canSleep, ccd: this._ccd }); };
    D.prototype._attached = function (e) { _super.prototype._attached.call(this, e), this._pendingLinearVelocity && (e.linearVelocity = this._pendingLinearVelocity), this._pendingAngularVelocity !== null && (e.angularVelocity = this._pendingAngularVelocity), this._pendingLinearVelocity = null, this._pendingAngularVelocity = null; var t = this._pending; this._pending = []; for (var _i = 0, t_4 = t; _i < t_4.length; _i++) {
        var n_2 = t_4[_i];
        n_2(e);
    } };
    D.prototype._detached = function () { this._handle && (this._pendingLinearVelocity = this._handle.linearVelocity, this._pendingAngularVelocity = this._handle.angularVelocity), _super.prototype._detached.call(this); };
    D.prototype.dumpProps = function () { var e = this.linearVelocity, n = this.sleeping; return t.a(t.a({}, _super.prototype.dumpProps.call(this)), {}, { mass: this._mass === 1 ? void 0 : this._mass, linearVelocity: !n && e.lengthSquared() > 1e-4 ? e : void 0, sleeping: n || void 0 }); };
    return D;
}(T)), O = (function () {
    function O(e) {
        if (t.s(this, "radius", void 0), t.s(this, "kind", "circle"), this.radius = e, !(e > 0))
            throw Error("CircleShape2D radius must be > 0, got ".concat(e));
        Object.freeze(this);
    }
    Object.defineProperty(O.prototype, "area", {
        get: function () { return Math.PI * this.radius * this.radius; },
        enumerable: false,
        configurable: true
    });
    O.prototype.toString = function () { return "circle(".concat(this.radius, ")"); };
    return O;
}()), k = (function () {
    function k(e, n) {
        if (t.s(this, "width", void 0), t.s(this, "height", void 0), t.s(this, "kind", "rectangle"), this.width = e, this.height = n, !(e > 0 && n > 0))
            throw Error("RectangleShape2D size must be > 0, got ".concat(e, "\u00D7").concat(n));
        Object.freeze(this);
    }
    Object.defineProperty(k.prototype, "area", {
        get: function () { return this.width * this.height; },
        enumerable: false,
        configurable: true
    });
    k.prototype.toString = function () { return "rectangle(".concat(this.width, ", ").concat(this.height, ")"); };
    return k;
}()); })))(); }
function ee(e, t, n) {
    if (e === void 0) { e = 1e3; }
    if (t === void 0) { t = 0; }
    if (n === void 0) { n = !1; }
    if (isNaN(e) || e < 0)
        throw TypeError("Invalid max value");
    if (isNaN(t) || t < 0)
        throw TypeError("Invalid ttl value");
    if (typeof n != "boolean")
        throw TypeError("Invalid resetTtl value");
    return new j(e, t, n);
}
var j;
function M() { return (M = e.n((function () { t.o(), j = (function () {
    function j(e, t, n) {
        if (e === void 0) { e = 0; }
        if (t === void 0) { t = 0; }
        if (n === void 0) { n = !1; }
        this.first = null, this.items = Object.create(null), this.last = null, this.max = e, this.resetTtl = n, this.size = 0, this.ttl = t;
    }
    j.prototype.clear = function () { return this.first = null, this.items = Object.create(null), this.last = null, this.size = 0, this; };
    j.prototype.delete = function (e) { if (this.has(e)) {
        var t_5 = this.items[e];
        delete this.items[e], this.size--, t_5.prev !== null && (t_5.prev.next = t_5.next), t_5.next !== null && (t_5.next.prev = t_5.prev), this.first === t_5 && (this.first = t_5.next), this.last === t_5 && (this.last = t_5.prev);
    } return this; };
    j.prototype.entries = function (e) {
        if (e === void 0) { e = this.keys(); }
        var t = Array(e.length);
        for (var n_3 = 0; n_3 < e.length; n_3++) {
            var r_3 = e[n_3];
            t[n_3] = [r_3, this.get(r_3)];
        }
        return t;
    };
    j.prototype.evict = function (e) {
        if (e === void 0) { e = !1; }
        if (e || this.size > 0) {
            var e_6 = this.first;
            delete this.items[e_6.key], --this.size === 0 ? (this.first = null, this.last = null) : (this.first = e_6.next, this.first.prev = null);
        }
        return this;
    };
    j.prototype.expiresAt = function (e) { var t; return this.has(e) && (t = this.items[e].expiry), t; };
    j.prototype.get = function (e) { var t = this.items[e]; if (t !== void 0) {
        if (this.ttl > 0 && t.expiry <= Date.now()) {
            this.delete(e);
            return;
        }
        return this.moveToEnd(t), t.value;
    } };
    j.prototype.has = function (e) { return e in this.items; };
    j.prototype.moveToEnd = function (e) { this.last !== e && (e.prev !== null && (e.prev.next = e.next), e.next !== null && (e.next.prev = e.prev), this.first === e && (this.first = e.next), e.prev = this.last, e.next = null, this.last !== null && (this.last.next = e), this.last = e, this.first === null && (this.first = e)); };
    j.prototype.keys = function () { var e = Array(this.size), t = this.first, n = 0; for (; t !== null;)
        e[n++] = t.key, t = t.next; return e; };
    j.prototype.setWithEvicted = function (e, n, r) {
        if (r === void 0) { r = this.resetTtl; }
        var i = null;
        if (this.has(e))
            this.set(e, n, !0, r);
        else {
            this.max > 0 && this.size === this.max && (i = t.a({}, this.first), this.evict(!0));
            var r_4 = this.items[e] = { expiry: this.ttl > 0 ? Date.now() + this.ttl : this.ttl, key: e, prev: this.last, next: null, value: n };
            ++this.size === 1 ? this.first = r_4 : this.last.next = r_4, this.last = r_4;
        }
        return i;
    };
    j.prototype.set = function (e, t, n, r) {
        if (n === void 0) { n = !1; }
        if (r === void 0) { r = this.resetTtl; }
        var i = this.items[e];
        return n || i !== void 0 ? (i.value = t, n === !1 && r && (i.expiry = this.ttl > 0 ? Date.now() + this.ttl : this.ttl), this.moveToEnd(i)) : (this.max > 0 && this.size === this.max && this.evict(!0), i = this.items[e] = { expiry: this.ttl > 0 ? Date.now() + this.ttl : this.ttl, key: e, prev: this.last, next: null, value: t }, ++this.size === 1 ? this.first = i : this.last.next = i, this.last = i), this;
    };
    j.prototype.values = function (e) {
        if (e === void 0) { e = this.keys(); }
        var t = Array(e.length);
        for (var n_4 = 0; n_4 < e.length; n_4++)
            t[n_4] = this.get(e[n_4]);
        return t;
    };
    return j;
}()); })))(); }
function te(e, t) { var n = { cls: e, create: t }, r = P.findIndex(function (t) { return t.cls === e; }); r >= 0 ? P[r] = n : P.push(n); }
function ne(e, t) { if (e instanceof n.i)
    return new L(t); if (e instanceof n.p)
    return new z(t); if (e instanceof n.n)
    return new R(t); if (e instanceof n.t)
    return new B; if (e instanceof n.r)
    return new V(t); if (e instanceof n.a)
    return new H(e, t); for (var n_5 = 0; n_5 < P.length; n_5++) {
    var r_5 = P[n_5];
    if (e instanceof r_5.cls)
        return r_5.create(e, t);
} return null; }
function re(e, t) { if (t === 16777215)
    return e; var n = 0; for (var r_6 = 16; r_6 >= 0; r_6 -= 8)
    n |= Math.round((e >> r_6 & 255) * (t >> r_6 & 255) / 255) << r_6; return n; }
function ie(e, n) { var r = e._frame; if (!r)
    return new o.gt({ source: n }); var a = r.rotated ? r.region.height : r.region.width, s = r.rotated ? r.region.width : r.region.height; return new o.gt(t.a(t.a({ source: n, frame: new i.g(r.region.x, r.region.y, r.region.width, r.region.height), orig: new i.g(0, 0, r.width, r.height) }, r.trim ? { trim: new i.g(r.trim.x, r.trim.y, a, s) } : {}), r.rotated ? { rotate: 2 } : {})); }
function ae() { var e; return (e = K) == null ? K = u._({ name: "silhouette", bits: [u.c, u.n, u.f, { name: "silhouette-bit", fragment: { end: "finalColor = vec4(finalColor.a);" } }] }) : e; }
function oe() { var e; return (e = Y) == null ? Y = u._({ name: "tile-chunk", bits: [u.c, u.n, u.f] }) : e; }
function se(e, t, n, r, i, a) { var o = e.tileSet, s = o.tileSize, c = s + o.spacing, l = o.texture.width, u = o.texture.height, d = t.positions, f = t.uvs, p = e._cells, m = e.width, h = !0; for (var t_6 = 0; t_6 < 16; t_6++) {
    var g_1 = r * 16 + t_6;
    for (var r_7 = 0; r_7 < 16; r_7++) {
        var _1 = n * 16 + r_7, v_1 = (t_6 * 16 + r_7) * 8, y_1 = _1 < m && g_1 < e.height ? p[g_1 * m + _1] : 0;
        if (!y_1) {
            d.fill(0, v_1, v_1 + 8);
            continue;
        }
        h = !1;
        var b_1 = r_7 * s, x_1 = t_6 * s, S_1 = b_1 + s, C_1 = x_1 + s;
        d[v_1] = b_1, d[v_1 + 1] = x_1, d[v_1 + 2] = S_1, d[v_1 + 3] = x_1, d[v_1 + 4] = S_1, d[v_1 + 5] = C_1, d[v_1 + 6] = b_1, d[v_1 + 7] = C_1;
        var w_1 = y_1 - 1, T_1 = o.margin + w_1 % i * c, E_1 = o.margin + Math.floor(w_1 / i) * c, D_1 = (T_1 + a) / l, O_1 = (E_1 + a) / u, k_1 = (T_1 + s - a) / l, A_1 = (E_1 + s - a) / u;
        f[v_1] = D_1, f[v_1 + 1] = O_1, f[v_1 + 2] = k_1, f[v_1 + 3] = O_1, f[v_1 + 4] = k_1, f[v_1 + 5] = A_1, f[v_1 + 6] = D_1, f[v_1 + 7] = A_1;
    }
} return t.getBuffer("aPosition").update(), t.getBuffer("aUV").update(), h; }
function ce(e) { e.mesh.destroy(), e.geometry.destroy(); }
function N(e) { return e ? +!!e.clip + le(e.content) : 0; }
function le(e) { return e ? e.overlay ? 2 : 1 : 0; }
var P, F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, ue;
function X() { return (X = e.n((function () { n.x(), n.o(), u.d(), u.t(), f.t(), l.o(), l.r(), t.c(), t.o(), P = [], F = "__content", I = "__flash", L = (function () {
    function L(e) {
        t.s(this, "display", void 0), t.s(this, "overlay", null), t.s(this, "_resource", void 0), t.s(this, "_pixelArt", void 0), this.display = new l.E({ label: F, roundPixels: e.pixelArt }), this._pixelArt = e.pixelArt;
    }
    L.prototype.sync = function (e, t, n) { var r, i, a, s; var c = (r = e.texture) == null ? void 0 : r._resource; if (!n && c === this._resource)
        return; this._resource = c; var u = this.display; u.texture = e.texture ? t.textures.get(e.texture) : o.gt.EMPTY; var d = e.centered ? (i = (a = e.texture) == null ? void 0 : a.pivot) == null ? null : i : null; d ? u.anchor.set(d.x, d.y) : u.anchor.set(e.centered ? .5 : 0), u.position.set(e.offset.x, e.offset.y), u.scale.set(e.flipH ? -1 : 1, e.flipV ? -1 : 1), u.tint = e.selfModulate; var f = e.flash; if (f <= 0 && !this.overlay)
        return; var p = (s = this.overlay) == null ? this.overlay = new l.E({ label: I, roundPixels: this._pixelArt }) : s; p.visible = f > 0 && e.texture !== null, p.visible && (p.texture = t.textures.flash(e.texture), p.anchor.copyFrom(u.anchor), p.position.copyFrom(u.position), p.scale.copyFrom(u.scale), p.tint = e.flashColor, p.alpha = f); };
    L.prototype.destroy = function () { var e; this.display.destroy(), (e = this.overlay) == null || e.destroy(); };
    return L;
}()), R = (function () {
    function R(e) {
        t.s(this, "display", void 0), t.s(this, "_resource", void 0), this.display = new l.t({ label: F, texture: o.gt.EMPTY, roundPixels: e.pixelArt });
    }
    R.prototype.sync = function (e, t, n) { var r; var i = (r = e.texture) == null ? void 0 : r._resource; if (!n && i === this._resource)
        return; this._resource = i; var a = this.display; a.texture = e.texture ? t.textures.get(e.texture) : o.gt.EMPTY; var s = e.margins; a.leftWidth = s.left, a.topHeight = s.top, a.rightWidth = s.right, a.bottomHeight = s.bottom, a.setSize(e.size.x, e.size.y), a.tint = e.selfModulate; };
    R.prototype.destroy = function () { this.display.destroy(); };
    return R;
}()), z = (function () {
    function z(e) {
        t.s(this, "display", void 0), this.display = new l.E({ label: F, texture: o.gt.WHITE, roundPixels: e.pixelArt });
    }
    z.prototype.sync = function (e, t, n) { if (!n)
        return; var r = this.display, i = e.size; r.width = i.x, r.height = i.y, r.tint = re(e.color, e.selfModulate); };
    z.prototype.destroy = function () { this.display.destroy(); };
    return z;
}()), B = (function () {
    function B() {
        t.s(this, "display", new l.h({ label: F })), t.s(this, "_styleKey", void 0), t.s(this, "_resolution", void 0);
    }
    B.prototype.sync = function (e, n, r) { if (!r && this._resolution === n.textResolution)
        return; var i = this.display, a = t.a(t.a(t.a({ fontSize: e.fontSize, fill: e.color, fontFamily: e.fontFamily, fontWeight: e.fontWeight, align: e.align }, e.stroke ? { stroke: { color: e.stroke.color, width: e.stroke.width } } : {}), e.wrapWidth === null ? {} : { wordWrap: !0, wordWrapWidth: e.wrapWidth }), e.lineHeight === null ? {} : { lineHeight: e.lineHeight }), o = JSON.stringify(a); o !== this._styleKey && (i.style = a, this._styleKey = o), i.text = e.text, this._resolution !== n.textResolution && (i.resolution = n.textResolution, this._resolution = n.textResolution), i.anchor.set(W[e.align], W[e.verticalAlign]), i.tint = e.selfModulate; };
    B.prototype.destroy = function () { this.display.destroy(); };
    return B;
}()), V = (function () {
    function V(e) {
        t.s(this, "display", void 0), t.s(this, "_pool", []), t.s(this, "_texture", null), t.s(this, "_resource", null), t.s(this, "_tint", -1), this.display = new l.i({ label: F, dynamicProperties: { position: !0, vertex: !0, color: !0, rotation: !1, uvs: !1 }, roundPixels: e.pixelArt });
    }
    V.prototype.sync = function (e, t) { var r; if (!e.visible)
        return; var i = this.display, a = e.texture, s = a == null ? void 0 : a._resource, c = a ? e._count : 0, u = this._pool; if (a !== this._texture || s !== this._resource) {
        this._texture = a, this._resource = s;
        var e_7 = a ? t.textures.get(a) : o.gt.EMPTY;
        i.texture = e_7;
        for (var t_7 = 0; t_7 < u.length; t_7++)
            u[t_7].texture = e_7;
        i.update();
    } var d = e.selfModulate; if (d !== this._tint) {
        this._tint = d;
        for (var e_8 = 0; e_8 < u.length; e_8++)
            u[e_8].tint = d;
    } for (; u.length < c;)
        u.push(new l.s({ texture: (r = i.texture) == null ? o.gt.EMPTY : r, anchorX: .5, anchorY: .5, tint: d })); if (e.localCoords)
        (i.x !== 0 || i.y !== 0 || i.rotation !== 0 || i.scale.x !== 1 || i.scale.y !== 1 || i.skew.x !== 0 || i.skew.y !== 0) && i.setFromMatrix(U.identity());
    else {
        if (e._computeGlobal(), !n.S(e._global, U)) {
            i.visible = !1;
            return;
        }
        i.visible = !0, i.setFromMatrix(U);
    } var f = i.particleChildren; if (f.length !== c) {
        for (var e_9 = f.length; e_9 < c; e_9++)
            f[e_9] = u[e_9];
        f.length = c, i.update();
    } var p = e._px, m = e._py, h = e._age, g = e._life, _ = e.scaleStart, v = e.scaleEnd - _, y = e.alphaStart, b = e.alphaEnd - y; for (var e_10 = 0; e_10 < c; e_10++) {
        var t_8 = u[e_10], n_6 = h[e_10] / g[e_10], r_8 = _ + v * n_6;
        t_8.x = p[e_10], t_8.y = m[e_10], t_8.scaleX = r_8, t_8.scaleY = r_8, t_8.alpha = y + b * n_6;
    } };
    V.prototype.destroy = function () { this.display.destroy(); };
    return V;
}()), H = (function () {
    function H(e, n) {
        t.s(this, "display", void 0), t.s(this, "_view", void 0), t.s(this, "_tileMaps", void 0), this._tileMaps = n.tileMaps, this._view = n.tileMaps.createView(e, F), this.display = this._view.content;
    }
    H.prototype.sync = function (e, t) { e.visible && this._tileMaps.sync(e, this._view, t.visibleRect, t.offsetX, t.offsetY); };
    H.prototype.destroy = function () { this._tileMaps.destroyView(this._view); };
    return H;
}()), U = new i.b, W = { left: 0, top: 0, center: .5, right: 1, bottom: 1 }, G = (function () {
    function G(e, n) {
        if (n === void 0) { n = null; }
        t.s(this, "_pixelArt", void 0), t.s(this, "_renderer", void 0), t.s(this, "_silhouettes", new Map), t.s(this, "_flashTextures", new Map), t.s(this, "_sources", new Map), t.s(this, "_textures", new Map), this._pixelArt = e, this._renderer = n;
    }
    Object.defineProperty(G.prototype, "silhouetteCount", {
        get: function () { return this._silhouettes.size; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(G.prototype, "textureCount", {
        get: function () { return this._textures.size; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(G.prototype, "sourceCount", {
        get: function () { return this._sources.size; },
        enumerable: false,
        configurable: true
    });
    G.prototype.get = function (e) { var t; var n = e._resource, r = this._textures.get(e); if (r && r.resource === n)
        return r.texture; if (r && (r.texture.destroy(!1), this._textures.delete(e)), !n)
        return o.gt.EMPTY; var i = ie(e, this._imageSource((t = e._base) == null ? e : t, n)); return this._textures.set(e, { resource: n, texture: i }), i; };
    G.prototype.flash = function (e) { var t; var n = e._resource, r = this._flashTextures.get(e); if (r && r.resource === n)
        return r.texture; if (r && (r.texture.destroy(!1), this._flashTextures.delete(e)), !n || !this._renderer)
        return o.gt.EMPTY; var i = ie(e, this._silhouette((t = e._base) == null ? e : t, n)); return this._flashTextures.set(e, { resource: n, texture: i }), i; };
    G.prototype.releaseUnloaded = function () { for (var _i = 0, _a = this._flashTextures; _i < _a.length; _i++) {
        var _b = _a[_i], e_11 = _b[0], t_9 = _b[1];
        t_9.resource !== e_11._resource && (t_9.texture.destroy(!1), this._flashTextures.delete(e_11));
    } for (var _c = 0, _d = this._silhouettes; _c < _d.length; _c++) {
        var _f = _d[_c], e_12 = _f[0], t_10 = _f[1];
        t_10.resource !== e_12._resource && (t_10.target.destroy(!0), this._silhouettes.delete(e_12));
    } for (var _g = 0, _h = this._textures; _g < _h.length; _g++) {
        var _j = _h[_g], e_13 = _j[0], t_11 = _j[1];
        t_11.resource !== e_13._resource && (t_11.texture.destroy(!1), this._textures.delete(e_13));
    } for (var _k = 0, _l = this._sources; _k < _l.length; _k++) {
        var _m = _l[_k], e_14 = _m[0], t_12 = _m[1];
        t_12.resource !== e_14._resource && (t_12.source.destroy(), this._sources.delete(e_14));
    } };
    G.prototype.destroy = function () { for (var _i = 0, _a = this._flashTextures.values(); _i < _a.length; _i++) {
        var e_15 = _a[_i];
        e_15.texture.destroy(!1);
    } for (var _b = 0, _c = this._silhouettes.values(); _b < _c.length; _b++) {
        var e_16 = _c[_b];
        e_16.target.destroy(!0);
    } this._flashTextures.clear(), this._silhouettes.clear(); for (var _d = 0, _f = this._textures.values(); _d < _f.length; _d++) {
        var e_17 = _f[_d];
        e_17.texture.destroy(!1);
    } for (var _g = 0, _h = this._sources.values(); _g < _h.length; _g++) {
        var e_18 = _h[_g];
        e_18.source.destroy();
    } this._textures.clear(), this._sources.clear(); };
    G.prototype._silhouette = function (e, n) { var r = this._silhouettes.get(e); if (r && r.resource === n)
        return r.target.source; r == null || r.target.destroy(!0); var a = this._imageSource(e, n), s = a.width, c = a.height, u = o.x.create(t.a({ width: s, height: c }, this._pixelArt ? { scaleMode: "nearest" } : {})), d = new l.x({ positions: new Float32Array([0, 0, s, 0, s, c, 0, c]), uvs: new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), indices: new Uint16Array([0, 1, 2, 0, 2, 3]) }), f = new o.q({ glProgram: ae(), resources: { uTexture: a, uSampler: a.style, textureUniforms: { uTextureMatrix: { type: "mat3x3<f32>", value: new i.b } } } }), p = new l.y({ geometry: d, shader: f, texture: new o.gt({ source: a }) }); return this._renderer.render({ container: p, target: u, clear: !0, clearColor: [0, 0, 0, 0] }), p.destroy(), d.destroy(), f.destroy(), this._silhouettes.set(e, { resource: n, target: u }), u.source; };
    G.prototype._imageSource = function (e, n) { var r = this._sources.get(e); if (r && r.resource === n)
        return r.source; r == null || r.source.destroy(); var i = new o.ct(t.a(t.a({ resource: n }, this._pixelArt ? { scaleMode: "nearest" } : {}), e._premultiplied ? { alphaMode: "premultiplied-alpha" } : {})); return this._sources.set(e, { resource: n, source: i }), i; };
    return G;
}()), K = null, q = (function () {
    function q(e) {
        t.s(this, "_pixelArt", void 0), t.s(this, "_compileShaders", void 0), t.s(this, "_textures", void 0), t.s(this, "_shaders", new Map), t.s(this, "_global", n.b()), t.s(this, "_cx0", 0), t.s(this, "_cy0", 0), t.s(this, "_cx1", -1), t.s(this, "_cy1", -1), this._pixelArt = e.pixelArt, this._compileShaders = e.compileShaders, this._textures = e.textures;
    }
    Object.defineProperty(q.prototype, "shaderCount", {
        get: function () { return this._shaders.size; },
        enumerable: false,
        configurable: true
    });
    q.prototype.createView = function (e, t) { return { content: new s.m({ label: t }), chunks: Array(e._chunksX * e._chunksY).fill(null), resource: null, x0: 0, y0: 0, x1: -1, y1: -1 }; };
    q.prototype.destroyView = function (e) { for (var _i = 0, _a = e.chunks; _i < _a.length; _i++) {
        var t_13 = _a[_i];
        t_13 && ce(t_13);
    } e.content.destroy(); };
    q.prototype.sync = function (e, t, n, r, i) { var a = e.tileSet.texture._resource, o = e.tileSet.columns; if (!a || o === 0) {
        t.content.visible = !1;
        return;
    } if (t.content.visible = !0, t.resource !== a) {
        for (var e_19 = 0; e_19 < t.chunks.length; e_19++) {
            var n_7 = t.chunks[e_19];
            n_7 && ce(n_7), t.chunks[e_19] = null;
        }
        t.resource = a, t.x0 = 0, t.x1 = -1;
    } var s = this._chunkRange(e, n, r, i), c = s ? this._cx0 : 0, l = s ? this._cy0 : 0, u = s ? this._cx1 : -1, d = s ? this._cy1 : -1, f = e._chunksX; for (var e_20 = t.y0; e_20 <= t.y1; e_20++)
        for (var n_8 = t.x0; n_8 <= t.x1; n_8++) {
            if (n_8 >= c && n_8 <= u && e_20 >= l && e_20 <= d)
                continue;
            var r_9 = t.chunks[e_20 * f + n_8];
            r_9 && (r_9.mesh.visible = !1);
        } t.x0 = c, t.y0 = l, t.x1 = u, t.y1 = d; for (var n_9 = l; n_9 <= d; n_9++)
        for (var r_10 = c; r_10 <= u; r_10++) {
            var i_1 = n_9 * f + r_10, a_1 = t.chunks[i_1];
            a_1 || (a_1 = this._createChunk(e, t, r_10, n_9), t.chunks[i_1] = a_1);
            var s_1 = e._chunkVersions[i_1];
            a_1.version !== s_1 && (a_1.version = s_1, a_1.empty = se(e, a_1.geometry, r_10, n_9, o, this._pixelArt ? 0 : .5)), a_1.mesh.visible = !a_1.empty;
        } };
    q.prototype.releaseUnloaded = function () { for (var _i = 0, _a = this._shaders; _i < _a.length; _i++) {
        var _b = _a[_i], e_21 = _b[0], t_14 = _b[1];
        t_14.resource !== e_21._resource && (t_14.shader.destroy(), this._shaders.delete(e_21));
    } };
    q.prototype.destroy = function () { for (var _i = 0, _a = this._shaders.values(); _i < _a.length; _i++) {
        var e_22 = _a[_i];
        e_22.shader.destroy();
    } this._shaders.clear(); };
    q.prototype._chunkRange = function (e, t, r, i) { var a = this._global; if (e._computeGlobalInto(a), !n.S(a, a))
        return !1; var o = 1 / 0, s = 1 / 0, c = -1 / 0, l = -1 / 0; for (var e_23 = 0; e_23 < 4; e_23++) {
        var n_10 = (e_23 & 1 ? t.right : t.left) - r, u_1 = (e_23 & 2 ? t.bottom : t.top) - i, d_1 = a.a * n_10 + a.c * u_1 + a.tx, f_1 = a.b * n_10 + a.d * u_1 + a.ty;
        d_1 < o && (o = d_1), d_1 > c && (c = d_1), f_1 < s && (s = f_1), f_1 > l && (l = f_1);
    } var u = 16 * e.tileSet.tileSize; return this._cx0 = Math.max(0, Math.floor(o / u)), this._cy0 = Math.max(0, Math.floor(s / u)), this._cx1 = Math.min(e._chunksX - 1, Math.floor(c / u)), this._cy1 = Math.min(e._chunksY - 1, Math.floor(l / u)), this._cx0 <= this._cx1 && this._cy0 <= this._cy1; };
    q.prototype._createChunk = function (e, t, n, r) { var i = this._textures.get(e.tileSet.texture), a = new l.x({ positions: new Float32Array(2048), uvs: new Float32Array(2048), indices: J }), o = new l.y({ geometry: a, texture: i, shader: this._shader(e.tileSet.texture, i), roundPixels: this._pixelArt }), s = 16 * e.tileSet.tileSize; return o.position.set(n * s, r * s), t.content.addChild(o), { mesh: o, geometry: a, version: -1, empty: !0 }; };
    q.prototype._shader = function (e, t) { var n = this._shaders.get(e); if (n && n.resource === e._resource)
        return n.shader; n == null || n.shader.destroy(); var r = new o.q({ glProgram: this._compileShaders ? oe() : void 0, resources: { uTexture: t.source, uSampler: t.source.style, textureUniforms: { uTextureMatrix: { type: "mat3x3<f32>", value: new i.b } } } }); return this._shaders.set(e, { resource: e._resource, shader: r }), r; };
    return q;
}()), J = (function () { var e = new Uint16Array(1536); for (var t_15 = 0; t_15 < 256; t_15++)
    e.set([t_15 * 4, t_15 * 4 + 1, t_15 * 4 + 2, t_15 * 4, t_15 * 4 + 2, t_15 * 4 + 3], t_15 * 6); return e; })(), Y = null, ue = (function () {
    function e(e, r) {
        t.s(this, "_renderer", void 0), t.s(this, "_root", new s.m), t.s(this, "_sceneContainer", new s.m), t.s(this, "_worldContainer", new s.m), t.s(this, "_mask", new d.t), t.s(this, "_viewportVersion", -1), t.s(this, "_views", new Map), t.s(this, "_frame", 0), t.s(this, "_seen", 0), t.s(this, "_orderedByDepth", []), t.s(this, "_textures", void 0), t.s(this, "_ctx", void 0), t.s(this, "_layers", new Map), t.s(this, "_layerOrder", []), t.s(this, "_sceneOrder", []), t.s(this, "_hiddenLayers", 0), t.s(this, "_tileMaps", void 0), t.s(this, "_pixelArt", void 0), this._renderer = e, this._pixelArt = r, this._textures = new G(r, e), this._tileMaps = new q({ pixelArt: r, compileShaders: !!e, textures: this._textures }), this._ctx = { pixelArt: r, textures: this._textures, tileMaps: this._tileMaps, textResolution: 1, visibleRect: new n._(0, 0, 0, 0), offsetX: 0, offsetY: 0 }, this._worldContainer.sortableChildren = !0, this._worldContainer.label = "__world", this._sceneContainer.addChild(this._worldContainer), this._root.addChild(this._sceneContainer);
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
        var r_11 = e.scale * e.renderResolution;
        t = Math.round(t * r_11) / r_11, n = Math.round(n * r_11) / r_11;
    } var r = this._ctx; r.visibleRect = e.visibleRect, r.offsetX = t, r.offsetY = n, this._worldContainer.position.set(t, n); };
    e.prototype._syncViewport = function (e) { var t; if (e._version === this._viewportVersion)
        return; this._viewportVersion = e._version; var _a = e.screen, n = _a.width, r = _a.height; if ((t = this._renderer) == null || t.resize(n, r, e.renderResolution), this._ctx.textResolution = e.renderResolution * e.scale, this._sceneContainer.scale.set(e.scale), this._sceneContainer.position.set(e.offset.x, e.offset.y), e.aspect === "keep") {
        var t_16 = e.offset;
        this._mask.clear().rect(t_16.x, t_16.y, e.designWidth * e.scale, e.designHeight * e.scale).fill(16777215), this._mask.parent || this._root.addChild(this._mask), this._sceneContainer.mask = this._mask;
    } };
    e.prototype.destroy = function () { var e; for (var _i = 0, _a = this._views; _i < _a.length; _i++) {
        var _b = _a[_i], e_24 = _b[0], t_17 = _b[1];
        this._destroyView(e_24, t_17);
    } for (var _c = 0, _d = this._layers.values(); _c < _d.length; _c++) {
        var e_25 = _d[_c];
        e_25.container.destroy({ children: !1 });
    } this._layers.clear(), this._tileMaps.destroy(), this._textures.destroy(), (e = this._renderer) == null || e.destroy(); };
    e.prototype._syncChildren = function (e, t, n, r) { var i, a, o, s; var c = (a = (i = this._orderedByDepth)[n]) == null ? i[n] = [] : a; c.length = 0; for (var t_18 = 0; t_18 < e.length; t_18++)
        this._visit(e[t_18], c, n); var l = t.children, u = (o = r == null ? void 0 : r.clip) == null ? null : o, d = (s = r == null ? void 0 : r.content) == null ? null : s, f = N(r), p = l.length === f + c.length, m = 0; p && u && (p = l[m++] === u), p && d && (p = l[m++] === d.display), p && d != null && d.overlay && (p = l[m++] === d.overlay); for (var e_26 = 0; p && e_26 < c.length; e_26++)
        p = l[f + e_26] === c[e_26]; if (!p) {
        t.removeChildren(), u && t.addChild(u), d && t.addChild(d.display), d != null && d.overlay && t.addChild(d.overlay);
        for (var e_27 = 0; e_27 < c.length; e_27++)
            t.addChild(c[e_27]);
    } };
    e.prototype._visit = function (e, t, r) { var i = e.children; if (e._isCanvasLayer) {
        this._visitLayer(e, r);
        return;
    } if (!(e instanceof n.g)) {
        for (var e_28 = 0; e_28 < i.length; e_28++)
            this._visit(i[e_28], t, r);
        return;
    } var a = this._syncNode(e); t.push(a.container), (i.length > 0 || a.container.children.length !== N(a)) && this._syncChildren(i, a.container, r + 1, a); };
    e.prototype._visitLayer = function (e, t) { var n = this._layers.get(e); if (!n) {
        var t_19 = new s.m({ label: e.name });
        t_19.sortableChildren = !0, n = { container: t_19, frame: 0 }, this._layers.set(e, n);
    } n.frame = this._frame, n.container.visible = e.visible && this._hiddenLayers === 0, this._layerOrder.push(e); var r = this._ctx, i = r.offsetX, a = r.offsetY; r.offsetX = 0, r.offsetY = 0, e.visible || this._hiddenLayers++, this._syncChildren(e.children, n.container, t + 1, null), e.visible || this._hiddenLayers--, r.offsetX = i, r.offsetY = a; };
    e.prototype._syncLayers = function (e) {
        var _this = this;
        var t = this._layerOrder;
        if (t.length === 0 && this._layers.size === 0)
            return;
        n.w(t);
        var r = n.E(t), i = this._sceneOrder;
        i.length = 0;
        for (var e_29 = 0; e_29 < t.length; e_29++)
            e_29 === r && i.push(this._worldContainer), i.push(this._layers.get(t[e_29]).container);
        r === t.length && i.push(this._worldContainer);
        var a = this._sceneContainer, o = a.children.length === i.length;
        for (var e_30 = 0; o && e_30 < i.length; e_30++)
            o = a.children[e_30] === i[e_30];
        if (!o) {
            a.removeChildren();
            for (var e_31 = 0; e_31 < i.length; e_31++)
                a.addChild(i[e_31]);
        }
        this._layers.size !== t.length && this._layers.forEach(function (t, n) { t.frame !== e && (t.container.removeFromParent(), t.container.destroy({ children: !1 }), _this._layers.delete(n)); });
    };
    e.prototype._syncNode = function (e) { var t; var n = this._views.get(e); if (!n) {
        var t_20 = new s.m({ label: e.name });
        t_20.sortableChildren = !0;
        var r_12 = ne(e, this._ctx);
        r_12 && t_20.addChild(r_12.display), n = { container: t_20, transformVersion: -1, version: -1, frame: 0, content: r_12, clip: null, clipRect: null }, this._views.set(e, n), e._view = t_20;
    } n.frame = this._frame, this._seen++; var r = n.container; if (n.transformVersion !== e._transformVersion) {
        n.transformVersion = e._transformVersion, r.position.set(e.x, e.y), r.rotation = e.rotation;
        var t_21 = e.scale;
        r.scale.set(t_21.x, t_21.y);
    } var i = n.version !== e._version; return i && (n.version = e._version, r.visible = e.visible, r.zIndex = e.zIndex, r.alpha = e.alpha, r.tint = e.modulate, r.blendMode = e.blendMode, e.clipRect !== n.clipRect && this._syncClip(e, n)), (t = n.content) == null || t.sync(e, this._ctx, i), n; };
    e.prototype._syncClip = function (e, t) { var n = e.clipRect; t.clipRect = n; var r = t.container; if (!n) {
        var e_32 = t.clip;
        e_32 && (r.mask = null, e_32.removeFromParent(), e_32.destroy(), t.clip = null);
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
function de(e) { if (e.__saplingMetricsPatched)
    return; e.__saplingMetricsPatched = !0; var t = e.measureText.bind(e); e.measureText = function (n) { var r, i, a; var o = t(n); if (typeof o.actualBoundingBoxAscent == "number")
    return o; var s = fe(e.font), c = (r = o.width) == null ? 0 : r; return { width: c, fontBoundingBoxAscent: o.fontBoundingBoxAscent, fontBoundingBoxDescent: o.fontBoundingBoxDescent, actualBoundingBoxAscent: (i = o.fontBoundingBoxAscent) == null ? s * xe : i, actualBoundingBoxDescent: (a = o.fontBoundingBoxDescent) == null ? s * Se : a, actualBoundingBoxLeft: 0, actualBoundingBoxRight: c }; }; }
function fe(e) { var t = /(\d+(?:\.\d+)?)px/.exec(e); return t ? Number(t[1]) : 10; }
function pe() { return Z != null || (Z = wx.createCanvas().getContext("2d")), Object.getPrototypeOf(Z); }
function me(e) { return /^https?:\/\//.test(e); }
function he(e, t) {
    var _this = this;
    var n = function () { return typeof t == "string" ? t : ge(t); };
    return { ok: e >= 200 && e < 300, status: e, json: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, JSON.parse(n())];
        }); }); }, text: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, n()];
        }); }); }, arrayBuffer: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, typeof t == "string" ? _e(t) : t];
        }); }); }, blob: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            throw Error("[sapling2d] Blob is not supported on WeChat");
        }); }); } };
}
function ge(e) { var t = new Uint8Array(e), n = ""; for (var e_33 = 0; e_33 < t.length; e_33++)
    n += String.fromCharCode(t[e_33]); return decodeURIComponent(escape(n)); }
function _e(e) { var t = unescape(encodeURIComponent(e)), n = new Uint8Array(t.length); for (var e_34 = 0; e_34 < t.length; e_34++)
    n[e_34] = t.charCodeAt(e_34); return n.buffer; }
function ve() { return { setVolume: function () { }, stop: function () { }, onEnded: function (e) { return void Promise.resolve().then(e); } }; }
function ye(e, t) { var n = function (e) { return function (n) { for (var _i = 0, _a = n.changedTouches; _i < _a.length; _i++) {
    var r_13 = _a[_i];
    t({ type: e, pointerId: r_13.identifier, x: r_13.clientX, y: r_13.clientY });
} }; }, r = n("pointerdown"), i = n("pointermove"), a = n("pointerup"), o = n("pointercancel"); return e.onTouchStart(r), e.onTouchMove(i), e.onTouchEnd(a), e.onTouchCancel(o), function () { var t, n, s, c; (t = e.offTouchStart) == null || t.call(e, r), (n = e.offTouchMove) == null || n.call(e, i), (s = e.offTouchEnd) == null || s.call(e, a), (c = e.offTouchCancel) == null || c.call(e, o); }; }
function be(e) {
    return __awaiter(this, void 0, void 0, function () { var i, a; return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                r.N.set(we), $ = new je;
                return [4, ue.create(t.a(t.a({ canvas: $.canvas, webglVersion: 1, quietWarnings: [/does not support 32 index buffer/] }, e.background === void 0 ? {} : { background: e.background }), e.pixelArt ? { pixelArt: !0 } : {}))];
            case 1:
                a = _a.sent();
                return [2, n.c.create(t.a(t.a({}, e), {}, { plugins: __spreadArray([n.f()], (i = e.plugins) == null ? [] : i, true), platform: $, renderer: a, start: !0 }))];
        }
    }); });
}
var xe, Se, Z, Ce, we, Te, Ee, De, Oe, Q, ke, Ae, je, $;
function Me() { return (Me = e.n((function () {
    var _a;
    n.d(), X(), _(), f.t(), a.t(), t.c(), t.o(), xe = .82, Se = .22, Z = null, Ce = (_a = {}, _a[Symbol.hasInstance] = function (e) { return !!e && typeof e.getParameter == "function" && typeof e.createVertexArray != "function"; }, _a), we = { createCanvas: function (e, t) { var n = wx.createCanvas(); e !== void 0 && (n.width = e), t !== void 0 && (n.height = t); var r = n.getContext.bind(n); return n.getContext = function (e, t) { var n = r(e, t); return e === "2d" && n && de(n), n; }, n; }, createImage: function () { return wx.createImage(); }, getCanvasRenderingContext2D: function () { return ({ prototype: pe() }); }, getWebGLRenderingContext: function () { return Ce; }, getNavigator: function () { return ({ userAgent: "wechatgame", gpu: null }); }, getBaseUrl: function () { return ""; }, getFontFaceSet: function () { return null; }, fetch: (function (e) { var t = String(e); return new Promise(function (e, n) { me(t) ? wx.request({ url: t, responseType: "arraybuffer", success: function (t) { return e(he(t.statusCode, t.data)); }, fail: function (e) { return n(Error(e.errMsg)); } }) : wx.getFileSystemManager().readFile({ filePath: t.replace(/^\.?\//, ""), success: function (t) { return e(he(200, t.data)); }, fail: function (e) { return n(Error(e.errMsg)); } }); }); }), parseXML: function () { throw Error("[sapling2d] parseXML is not supported on WeChat"); } }, Te = 2, Ee = 1e3, De = 4294967295, Oe = (function () {
        function class_1(e, n) {
            var r;
            t.s(this, "_wx", void 0), t.s(this, "_main", void 0), t.s(this, "_sub", void 0), t.s(this, "_loading", null), t.s(this, "_loaded", !1), this._wx = e, this._main = n ? new Set(n.main) : null, this._sub = (r = n == null ? void 0 : n.subpackage) == null ? null : r;
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
                var n, r, t_22, n_11;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            n = 0, r = function (e) { var r = e.totalBytesExpectedToWrite; if (!(r > 0 && r < De) || !(e.totalBytesWritten >= 0))
                                return; var i = Math.min(1, e.totalBytesWritten / r); i > n && t(n = i); };
                            t_22 = 0;
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 5]);
                            return [4, new Promise(function (t, n) { var i, a; (i = _this._wx.loadSubpackage({ name: e, success: t, fail: function (e) { return n(Error(e.errMsg)); } })) == null || (a = i.onProgressUpdate) == null || a.call(i, r); })];
                        case 2:
                            _a.sent();
                            return [3, 6];
                        case 3:
                            n_11 = _a.sent();
                            if (t_22 >= Te)
                                throw Error("[sapling2d] failed to download the asset subpackage \"".concat(e, "\" after 3 attempts: ").concat(n_11 instanceof Error ? n_11.message : String(n_11)));
                            console.warn("[sapling2d] downloading the asset subpackage \"".concat(e, "\" failed, retrying: ").concat(n_11 instanceof Error ? n_11.message : String(n_11)));
                            return [4, new Promise(function (e) { return setTimeout(e, Ee); })];
                        case 4:
                            _a.sent();
                            return [3, 5];
                        case 5:
                            t_22++;
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
    }()), Q = (function () {
        function Q(e, n) {
            if (n === void 0) { n = ke; }
            var _this = this;
            t.s(this, "_wx", void 0), t.s(this, "_ctx", void 0), t.s(this, "_master", void 0), t.s(this, "_suspended", !1), t.s(this, "_music", new Set), t.s(this, "_paths", void 0), this._wx = e, this._paths = n, this._ctx = e.createWebAudioContext(), this._master = this._ctx.createGain(), this._master.connect(this._ctx.destination), this._tryResume();
            var r = function () { var t; _this._tryResume(), _this.unlocked && ((t = e.offTouchStart) == null || t.call(e, r)); };
            e.onTouchStart(r);
        }
        Object.defineProperty(Q.prototype, "unlocked", {
            get: function () { return this._ctx.state === "running"; },
            enumerable: false,
            configurable: true
        });
        Q.prototype.loadSound = function (e) {
            var _this = this;
            return this._paths.resolve(e).then(function (t) { return _this._decode(e, t); });
        };
        Q.prototype._decode = function (e, t) {
            var _this = this;
            return new Promise(function (n, r) { _this._wx.getFileSystemManager().readFile({ filePath: t, success: function (t) { var i = function (e) { return n(e); }, a = function (t) { return r(Error("decodeAudioData failed for ".concat(e, ": ").concat(JSON.stringify(t)))); }, o = _this._ctx.decodeAudioData(t.data, i, a); o && typeof o.then == "function" && o.then(i, a); }, fail: function (e) { return r(Error("cannot read ".concat(t, ": ").concat(e.errMsg))); } }); });
        };
        Q.prototype.playSound = function (e, t) { if (!this.unlocked || this._suspended)
            return ve(); var n = this._ctx.createBufferSource(); n.buffer = e, n.loop = t.loop; var r = this._ctx.createGain(); r.gain.value = t.volume, n.connect(r), r.connect(this._master); var i = null, a = !1; return n.onended = function () { n.disconnect(), r.disconnect(), a || i == null || i(); }, n.start(0), { setVolume: function (e) { return r.gain.value = e; }, stop: function () { a = !0; try {
                n.stop();
            }
            catch (e) { } }, onEnded: function (e) { return i = e; } }; };
        Q.prototype.playMusic = function (e, t) {
            var _this = this;
            var n = this._paths.resolveNow(e), r = this._wx.createInnerAudioContext();
            r.src = n, r.loop = t.loop, r.volume = t.volume, this._music.add(r);
            var i = null, a = function () { _this._music.delete(r) && r.destroy(); };
            return r.onEnded(function () { a(), i == null || i(); }), r.onError(function (t) { return console.warn("[sapling2d] music \"".concat(e, "\" error: ").concat(t.errMsg)); }), this._suspended || r.play(), { setVolume: function (e) { return r.volume = e; }, stop: function () { r.stop(), a(); }, onEnded: function (e) { return i = e; } };
        };
        Q.prototype.suspend = function () { this._suspended = !0, this._ctx.suspend(); for (var _i = 0, _a = this._music; _i < _a.length; _i++) {
            var e_35 = _a[_i];
            e_35.pause();
        } };
        Q.prototype.resume = function () { this._suspended = !1, this._tryResume(); for (var _i = 0, _a = this._music; _i < _a.length; _i++) {
            var e_36 = _a[_i];
            e_36.play();
        } };
        Q.prototype._tryResume = function () { try {
            var e, t;
            (e = this._ctx.resume()) == null || (t = e.catch) == null || t.call(e, function () { });
        }
        catch (e) { } };
        return Q;
    }()), ke = { resolve: function (e) { return Promise.resolve("assets/".concat(e)); }, resolveNow: function (e) { return "assets/".concat(e); } }, Ae = (function () {
        function Ae(e) {
            t.s(this, "_wx", void 0), this._wx = e;
        }
        Ae.prototype.getItem = function (e) { var t = this._wx.getStorageSync(e); return typeof t == "string" && t !== "" ? t : null; };
        Ae.prototype.setItem = function (e, t) { this._wx.setStorageSync(e, t); };
        Ae.prototype.removeItem = function (e) { this._wx.removeStorageSync(e); };
        Ae.prototype.keys = function () { return this._wx.getStorageInfoSync().keys; };
        return Ae;
    }()), je = (function () {
        function je() {
            t.s(this, "kind", "wechat"), t.s(this, "assets", new Oe(wx, GameGlobal.__saplingAssets)), t.s(this, "audio", new Q(wx, this.assets)), t.s(this, "storage", new Ae(wx)), t.s(this, "canvas", h), t.s(this, "_clock", p(wx.getPerformance(), function () { return Date.now(); }));
        }
        je.prototype.prepareAssets = function (e) { return this.assets.prepare(e); };
        je.prototype.now = function () { return this._clock(); };
        je.prototype.requestFrame = function (e) {
            var _this = this;
            return requestAnimationFrame(function () { return e(_this.now()); });
        };
        je.prototype.cancelFrame = function (e) { cancelAnimationFrame(e); };
        je.prototype.getScreenInfo = function () { var e = wx.getWindowInfo ? wx.getWindowInfo() : wx.getSystemInfoSync(), n = e.safeArea; return t.a({ width: e.windowWidth, height: e.windowHeight, pixelRatio: e.pixelRatio }, n ? { safeArea: { left: n.left, top: n.top, right: n.right, bottom: n.bottom } } : {}); };
        je.prototype.onScreenChange = function (e) {
            var _this = this;
            var t = function () { return e(_this.getScreenInfo()); };
            return wx.onWindowResize(t), function () { var e, n; return (e = (n = wx).offWindowResize) == null ? void 0 : e.call(n, t); };
        };
        je.prototype.loadFont = function (e) { return wx.loadFont(this.assets.resolveNow(e)); };
        je.prototype.loadText = function (e) { return this.assets.resolve(e).then(function (e) { return new Promise(function (t, n) { wx.getFileSystemManager().readFile({ filePath: e, encoding: "utf8", success: function (e) { return t(String(e.data)); }, fail: function (t) { return n(Error("cannot load ".concat(e, ": ").concat(t.errMsg))); } }); }); }); };
        je.prototype.loadImage = function (e) { return (e.startsWith("data:") ? Promise.resolve(e) : this.assets.resolve(e)).then(function (e) { return new Promise(function (t, n) { var r = wx.createImage(); r.onload = function () { return t({ resource: r, width: r.width, height: r.height }); }, r.onerror = function (t) { return n(Error("cannot load ".concat(e.startsWith("data:") ? "data: image" : e, ": ").concat(JSON.stringify(t)))); }, r.src = e; }); }); };
        je.prototype.onInput = function (e) { return ye(wx, e); };
        je.prototype.onFocusChange = function (e) { var t = function () { return e(!0); }, n = function () { return e(!1); }; return wx.onShow(t), wx.onHide(n), function () { var e, r, i, a; (e = (r = wx).offShow) == null || e.call(r, t), (i = (a = wx).offHide) == null || i.call(a, n); }; };
        return je;
    }()), $ = null;
})))(); }
function Ne() { return (Ne = e.n((function () { X(); })))(); }
Object.defineProperty(exports, "a", { enumerable: !0, get: function () { return te; } }), Object.defineProperty(exports, "c", { enumerable: !0, get: function () { return S; } }), Object.defineProperty(exports, "d", { enumerable: !0, get: function () { return E; } }), Object.defineProperty(exports, "f", { enumerable: !0, get: function () { return b; } }), Object.defineProperty(exports, "h", { enumerable: !0, get: function () { return v; } }), Object.defineProperty(exports, "i", { enumerable: !0, get: function () { return X; } }), Object.defineProperty(exports, "l", { enumerable: !0, get: function () { return C; } }), Object.defineProperty(exports, "m", { enumerable: !0, get: function () { return x; } }), Object.defineProperty(exports, "n", { enumerable: !0, get: function () { return Me; } }), Object.defineProperty(exports, "o", { enumerable: !0, get: function () { return M; } }), Object.defineProperty(exports, "p", { enumerable: !0, get: function () { return A; } }), Object.defineProperty(exports, "r", { enumerable: !0, get: function () { return be; } }), Object.defineProperty(exports, "s", { enumerable: !0, get: function () { return ee; } }), Object.defineProperty(exports, "t", { enumerable: !0, get: function () { return Ne; } }), Object.defineProperty(exports, "u", { enumerable: !0, get: function () { return D; } });
