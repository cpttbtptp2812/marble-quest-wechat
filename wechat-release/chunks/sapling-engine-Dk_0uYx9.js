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
var e = require("./rolldown-runtime-8PkXcCTM.js"), t = require("./sapling-engine-OS5i6gdH.js"), n = require("./sapling-engine-nIouhjEF.js"), r = require("./sapling-engine-BKSSueUl.js"), i = require("./sapling-engine-sX7qVz9U.js"), a = require("./sapling-engine-DdkTJwUg.js"), o = require("./pixi-vendor-C_INTMxb.js"), s = require("./sapling-engine-6sEQUsKX.js"), c = require("./sapling-engine-BIAzTs9D.js");
var l, u, d, f;
function p() { return (p = e.n((function () { t.o(), l = (function (e) { return (e.Application = "application", e.WebGLPipes = "webgl-pipes", e.WebGLPipesAdaptor = "webgl-pipes-adaptor", e.WebGLSystem = "webgl-system", e.WebGLLoader = "webgl-loader", e.WebGPUPipes = "webgpu-pipes", e.WebGPUPipesAdaptor = "webgpu-pipes-adaptor", e.WebGPUSystem = "webgpu-system", e.WebGPULoader = "webgpu-loader", e.CanvasSystem = "canvas-system", e.CanvasPipesAdaptor = "canvas-pipes-adaptor", e.CanvasPipes = "canvas-pipes", e.CanvasLoader = "canvas-loader", e.Asset = "asset", e.LoadParser = "load-parser", e.ResolveParser = "resolve-parser", e.CacheParser = "cache-parser", e.DetectionParser = "detection-parser", e.MaskEffect = "mask-effect", e.BlendMode = "blend-mode", e.TextureSource = "texture-source", e.TextureUploaderWebGL = "texture-uploader-webgl", e.TextureUploaderWebGPU = "texture-uploader-webgpu", e.Environment = "environment", e.ShapeBuilder = "shape-builder", e.Batcher = "batcher", e); })(l || {}), u = function (e) { if (typeof e == "function" || typeof e == "object" && e.extension) {
    if (!e.extension)
        throw Error("Extension class must have an extension object");
    var n_1 = typeof e.extension == "object" ? e.extension : { type: e.extension };
    e = t.a(t.a({}, n_1), {}, { ref: e });
} if (typeof e == "object")
    e = t.a({}, e);
else
    throw Error("Invalid extension type"); return typeof e.type == "string" && (e.type = [e.type]), e; }, d = function (e, t) { var n; return (n = u(e).priority) == null ? t : n; }, f = { _addHandlers: {}, _removeHandlers: {}, _queue: {}, remove: function () {
        var _this = this;
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return e.map(u).forEach(function (e) { e.type.forEach(function (t) { var n, r; return (n = (r = _this._removeHandlers)[t]) == null ? void 0 : n.call(r, e); }); }), this;
    }, add: function () {
        var _this = this;
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return e.map(u).forEach(function (e) { e.type.forEach(function (t) { var n = _this._addHandlers, r = _this._queue; if (n[t]) {
            var i;
            (i = n[t]) == null || i.call(n, e);
        }
        else {
            var a;
            r[t] = r[t] || [], (a = r[t]) == null || a.push(e);
        } }); }), this;
    }, handle: function (e, t, n) { var r = this._addHandlers, i = this._removeHandlers; if (r[e] || i[e])
        throw Error("Extension type ".concat(e, " already has a handler")); r[e] = t, i[e] = n; var a = this._queue; if (a[e]) {
        var o;
        (o = a[e]) == null || o.forEach(function (e) { return t(e); }), delete a[e];
    } return this; }, handleByMap: function (e, t) { return this.handle(e, function (e) { e.name && (t[e.name] = e.ref); }, function (e) { e.name && delete t[e.name]; }); }, handleByNamedList: function (e, t, n) {
        if (n === void 0) { n = -1; }
        return this.handle(e, function (e) { t.findIndex(function (t) { return t.name === e.name; }) >= 0 || (t.push({ name: e.name, value: e.ref }), t.sort(function (e, t) { return d(t.value, n) - d(e.value, n); })); }, function (e) { var n = t.findIndex(function (t) { return t.name === e.name; }); n !== -1 && t.splice(n, 1); });
    }, handleByList: function (e, t, n) {
        if (n === void 0) { n = -1; }
        return this.handle(e, function (e) { t.includes(e.ref) || (t.push(e.ref), t.sort(function (e, t) { return d(t, n) - d(e, n); })); }, function (e) { var n = t.indexOf(e.ref); n !== -1 && t.splice(n, 1); });
    }, mixin: function (e) {
        var t = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            t[_i - 1] = arguments[_i];
        }
        for (var _a = 0, t_1 = t; _a < t_1.length; _a++) {
            var n_2 = t_1[_a];
            Object.defineProperties(e.prototype, Object.getOwnPropertyDescriptors(n_2));
        }
    } }; })))(); }
var m;
function h() {
    var _this = this;
    return (h = e.n((function () { p(), m = { extension: { type: l.Environment, name: "browser", priority: -1 }, test: function () { return !0; }, load: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, Promise.resolve().then(function () { return require("./vendor-C9hcC2Gf.js"); }).then(function (e) { return (e.i(), e.r); })];
                case 1:
                    _a.sent();
                    return [2];
            }
        }); }); } }; })))();
}
var g;
function _() {
    var _this = this;
    return (_ = e.n((function () { p(), g = { extension: { type: l.Environment, name: "webworker", priority: 0 }, test: function () { return typeof self < "u" && self.WorkerGlobalScope !== void 0; }, load: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, Promise.resolve().then(function () { return require("./vendor-C9hcC2Gf.js"); }).then(function (e) { return (e.t(), e.n); })];
                case 1:
                    _a.sent();
                    return [2];
            }
        }); }); } }; })))();
}
var v = e.t((function (e, t) { var n = Object.prototype.hasOwnProperty, r = "~"; function i() { } Object.create && (i.prototype = Object.create(null), new i().__proto__ || (r = !1)); function a(e, t, n) { this.fn = e, this.context = t, this.once = n || !1; } function o(e, t, n, i, o) { if (typeof n != "function")
    throw TypeError("The listener must be a function"); var s = new a(n, i || e, o), c = r ? r + t : t; return e._events[c] ? e._events[c].fn ? e._events[c] = [e._events[c], s] : e._events[c].push(s) : (e._events[c] = s, e._eventsCount++), e; } function s(e, t) { --e._eventsCount === 0 ? e._events = new i : delete e._events[t]; } function c() { this._events = new i, this._eventsCount = 0; } c.prototype.eventNames = function () { var e = [], t, i; if (this._eventsCount === 0)
    return e; for (i in t = this._events)
    n.call(t, i) && e.push(r ? i.slice(1) : i); return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e; }, c.prototype.listeners = function (e) { var t = r ? r + e : e, n = this._events[t]; if (!n)
    return []; if (n.fn)
    return [n.fn]; for (var i = 0, a = n.length, o = Array(a); i < a; i++)
    o[i] = n[i].fn; return o; }, c.prototype.listenerCount = function (e) { var t = r ? r + e : e, n = this._events[t]; return n ? n.fn ? 1 : n.length : 0; }, c.prototype.emit = function (e, t, n, i, a, o) { var s = r ? r + e : e; if (!this._events[s])
    return !1; var c = this._events[s], l = arguments.length, u, d; if (c.fn) {
    switch (c.once && this.removeListener(e, c.fn, void 0, !0), l) {
        case 1: return c.fn.call(c.context), !0;
        case 2: return c.fn.call(c.context, t), !0;
        case 3: return c.fn.call(c.context, t, n), !0;
        case 4: return c.fn.call(c.context, t, n, i), !0;
        case 5: return c.fn.call(c.context, t, n, i, a), !0;
        case 6: return c.fn.call(c.context, t, n, i, a, o), !0;
    }
    for (d = 1, u = Array(l - 1); d < l; d++)
        u[d - 1] = arguments[d];
    c.fn.apply(c.context, u);
}
else {
    var f = c.length, p;
    for (d = 0; d < f; d++)
        switch (c[d].once && this.removeListener(e, c[d].fn, void 0, !0), l) {
            case 1:
                c[d].fn.call(c[d].context);
                break;
            case 2:
                c[d].fn.call(c[d].context, t);
                break;
            case 3:
                c[d].fn.call(c[d].context, t, n);
                break;
            case 4:
                c[d].fn.call(c[d].context, t, n, i);
                break;
            default:
                if (!u)
                    for (p = 1, u = Array(l - 1); p < l; p++)
                        u[p - 1] = arguments[p];
                c[d].fn.apply(c[d].context, u);
        }
} return !0; }, c.prototype.on = function (e, t, n) { return o(this, e, t, n, !1); }, c.prototype.once = function (e, t, n) { return o(this, e, t, n, !0); }, c.prototype.removeListener = function (e, t, n, i) { var a = r ? r + e : e; if (!this._events[a])
    return this; if (!t)
    return s(this, a), this; var o = this._events[a]; if (o.fn)
    o.fn !== t || i && !o.once || n && o.context !== n || s(this, a);
else {
    for (var c = 0, l = [], u = o.length; c < u; c++)
        (o[c].fn !== t || i && !o[c].once || n && o[c].context !== n) && l.push(o[c]);
    l.length ? this._events[a] = l.length === 1 ? l[0] : l : s(this, a);
} return this; }, c.prototype.removeAllListeners = function (e) { var t; return e ? (t = r ? r + e : e, this._events[t] && s(this, t)) : (this._events = new i, this._eventsCount = 0), this; }, c.prototype.off = c.prototype.removeListener, c.prototype.addListener = c.prototype.on, c.prefixed = r, c.EventEmitter = c, t !== void 0 && (t.exports = c); })), ee, te;
function ne() { return (ne = e.n((function () { ee = e.i(v(), 1), te = ee.default; })))(); }
var y, re;
function ie() { return (ie = e.n((function () { o.r(), t.o(), o.i([o.n]), y = (function () {
    function e(e) {
        if (e === void 0) { e = 16777215; }
        this._value = null, this._components = new Float32Array(4), this._components.fill(1), this._int = 16777215, this.value = e;
    }
    Object.defineProperty(e.prototype, "red", {
        get: function () { return this._components[0]; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "green", {
        get: function () { return this._components[1]; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "blue", {
        get: function () { return this._components[2]; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "alpha", {
        get: function () { return this._components[3]; },
        enumerable: false,
        configurable: true
    });
    e.prototype.setValue = function (e) { return this.value = e, this; };
    Object.defineProperty(e.prototype, "value", {
        get: function () { return this._value; },
        set: function (t) { if (t instanceof e)
            this._value = this._cloneSource(t._value), this._int = t._int, this._components.set(t._components);
        else if (t === null)
            throw Error("Cannot set Color#value to null");
        else
            this._value !== null && this._isSourceEqual(this._value, t) || (this._value = this._cloneSource(t), this._normalize(this._value)); },
        enumerable: false,
        configurable: true
    });
    e.prototype._cloneSource = function (e) { return typeof e == "string" || typeof e == "number" || e instanceof Number || e === null ? e : Array.isArray(e) || ArrayBuffer.isView(e) ? e.slice(0) : typeof e == "object" && e ? t.a({}, e) : e; };
    e.prototype._isSourceEqual = function (e, t) { var n = typeof e; if (n !== typeof t)
        return !1; if (n === "number" || n === "string" || e instanceof Number)
        return e === t; if (Array.isArray(e) && Array.isArray(t) || ArrayBuffer.isView(e) && ArrayBuffer.isView(t))
        return e.length === t.length && e.every(function (e, n) { return e === t[n]; }); if (e !== null && t !== null) {
        var n_3 = Object.keys(e), r_1 = Object.keys(t);
        return n_3.length === r_1.length && n_3.every(function (n) { return e[n] === t[n]; });
    } return e === t; };
    e.prototype.toRgba = function () { var _a = this._components, e = _a[0], t = _a[1], n = _a[2], r = _a[3]; return { r: e, g: t, b: n, a: r }; };
    e.prototype.toRgb = function () { var _a = this._components, e = _a[0], t = _a[1], n = _a[2]; return { r: e, g: t, b: n }; };
    e.prototype.toRgbaString = function () { var _a = this.toUint8RgbArray(), e = _a[0], t = _a[1], n = _a[2]; return "rgba(".concat(e, ",").concat(t, ",").concat(n, ",").concat(this.alpha, ")"); };
    e.prototype.toUint8RgbArray = function (e) { var _a = this._components, t = _a[0], n = _a[1], r = _a[2]; return this._arrayRgb || (this._arrayRgb = []), e || (e = this._arrayRgb), e[0] = Math.round(t * 255), e[1] = Math.round(n * 255), e[2] = Math.round(r * 255), e; };
    e.prototype.toArray = function (e) { this._arrayRgba || (this._arrayRgba = []), e || (e = this._arrayRgba); var _a = this._components, t = _a[0], n = _a[1], r = _a[2], i = _a[3]; return e[0] = t, e[1] = n, e[2] = r, e[3] = i, e; };
    e.prototype.toRgbArray = function (e) { this._arrayRgb || (this._arrayRgb = []), e || (e = this._arrayRgb); var _a = this._components, t = _a[0], n = _a[1], r = _a[2]; return e[0] = t, e[1] = n, e[2] = r, e; };
    e.prototype.toNumber = function () { return this._int; };
    e.prototype.toBgrNumber = function () { var _a = this.toUint8RgbArray(), e = _a[0], t = _a[1], n = _a[2]; return (n << 16) + (t << 8) + e; };
    e.prototype.toLittleEndianNumber = function () { var e = this._int; return (e >> 16) + (e & 65280) + ((e & 255) << 16); };
    e.prototype.multiply = function (t) { var _a = e._temp.setValue(t)._components, n = _a[0], r = _a[1], i = _a[2], a = _a[3]; return this._components[0] *= n, this._components[1] *= r, this._components[2] *= i, this._components[3] *= a, this._refreshInt(), this._value = null, this; };
    e.prototype.premultiply = function (e, t) {
        if (t === void 0) { t = !0; }
        return t && (this._components[0] *= e, this._components[1] *= e, this._components[2] *= e), this._components[3] = e, this._refreshInt(), this._value = null, this;
    };
    e.prototype.toPremultiplied = function (e, t) {
        if (t === void 0) { t = !0; }
        if (e === 1)
            return (255 << 24) + this._int;
        if (e === 0)
            return t ? 0 : this._int;
        var n = this._int >> 16 & 255, r = this._int >> 8 & 255, i = this._int & 255;
        return t && (n = n * e + .5 | 0, r = r * e + .5 | 0, i = i * e + .5 | 0), (e * 255 << 24) + (n << 16) + (r << 8) + i;
    };
    e.prototype.toHex = function () { var e = this._int.toString(16); return "#".concat("000000".substring(0, 6 - e.length) + e); };
    e.prototype.toHexa = function () { var e = Math.round(this._components[3] * 255).toString(16); return this.toHex() + "00".substring(0, 2 - e.length) + e; };
    e.prototype.setAlpha = function (e) { return this._components[3] = this._clamp(e), this._value = null, this; };
    e.prototype._normalize = function (t) {
        var _a, _b, _c;
        var n, r, i, a;
        if ((typeof t == "number" || t instanceof Number) && t >= 0 && t <= 16777215) {
            var e_1 = t;
            n = (e_1 >> 16 & 255) / 255, r = (e_1 >> 8 & 255) / 255, i = (e_1 & 255) / 255, a = 1;
        }
        else if ((Array.isArray(t) || t instanceof Float32Array) && t.length >= 3 && t.length <= 4)
            t = this._clamp(t), n = t[0], r = t[1], i = t[2], _a = t[3], a = _a === void 0 ? 1 : _a;
        else if ((t instanceof Uint8Array || t instanceof Uint8ClampedArray) && t.length >= 3 && t.length <= 4)
            t = this._clamp(t, 0, 255), n = t[0], r = t[1], i = t[2], _b = t[3], a = _b === void 0 ? 255 : _b, n /= 255, r /= 255, i /= 255, a /= 255;
        else if (typeof t == "string" || typeof t == "object") {
            if (typeof t == "string") {
                var n_4 = e.HEX_PATTERN.exec(t);
                n_4 && (t = "#".concat(n_4[2]));
            }
            var s_1 = o.a(t);
            s_1.isValid() && (_c = s_1.rgba, n = _c.r, r = _c.g, i = _c.b, a = _c.a, n /= 255, r /= 255, i /= 255);
        }
        if (n !== void 0)
            this._components[0] = n, this._components[1] = r, this._components[2] = i, this._components[3] = a, this._refreshInt();
        else
            throw Error("Unable to convert color ".concat(t));
    };
    e.prototype._refreshInt = function () { this._clamp(this._components); var _a = this._components, e = _a[0], t = _a[1], n = _a[2]; this._int = (e * 255 << 16) + (t * 255 << 8) + (n * 255 | 0); };
    e.prototype._clamp = function (e, t, n) {
        if (t === void 0) { t = 0; }
        if (n === void 0) { n = 1; }
        return typeof e == "number" ? Math.min(Math.max(e, t), n) : (e.forEach(function (r, i) { e[i] = Math.min(Math.max(r, t), n); }), e);
    };
    e.isColorLike = function (t) { return typeof t == "number" || typeof t == "string" || t instanceof Number || t instanceof e || Array.isArray(t) || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Float32Array || t.r !== void 0 && t.g !== void 0 && t.b !== void 0 || t.r !== void 0 && t.g !== void 0 && t.b !== void 0 && t.a !== void 0 || t.h !== void 0 && t.s !== void 0 && t.l !== void 0 || t.h !== void 0 && t.s !== void 0 && t.l !== void 0 && t.a !== void 0 || t.h !== void 0 && t.s !== void 0 && t.v !== void 0 || t.h !== void 0 && t.s !== void 0 && t.v !== void 0 && t.a !== void 0; };
    return e;
}()), y.shared = new y, y._temp = new y, y.HEX_PATTERN = /^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i, re = y; })))(); }
var ae;
function oe() { return (oe = e.n((function () { ae = { cullArea: null, cullable: !1, cullableChildren: !0 }; })))(); }
var se;
function ce() { return (ce = e.n((function () { se = (function () {
    function se() {
        this.pipe = "filter", this.priority = 1;
    }
    se.prototype.destroy = function () { for (var e_2 = 0; e_2 < this.filters.length; e_2++)
        this.filters[e_2].destroy(); this.filters = null, this.filterArea = null; };
    return se;
}()); })))(); }
var le;
function ue() { return (ue = e.n((function () { le = { createCanvas: function (e, t) { var n = document.createElement("canvas"); return n.width = e, n.height = t, n; }, createImage: function () { return new Image; }, getCanvasRenderingContext2D: function () { return CanvasRenderingContext2D; }, getWebGLRenderingContext: function () { return WebGLRenderingContext; }, getNavigator: function () { return navigator; }, getBaseUrl: function () { var e; return (e = document.baseURI) == null ? window.location.href : e; }, getFontFaceSet: function () { return document.fonts; }, fetch: function (e, t) { return fetch(e, t); }, parseXML: function (e) { return new DOMParser().parseFromString(e, "text/xml"); } }; })))(); }
var de, fe;
function pe() { return (pe = e.n((function () { ue(), de = le, fe = { get: function () { return de; }, set: function (e) { de = e; } }; })))(); }
var b;
function me() { return (me = e.n((function () { b = function (e, t, n) {
    if (n === void 0) { n = !1; }
    return (Array.isArray(e) || (e = [e]), t ? e.map(function (e) { return typeof e == "string" || n ? t(e) : e; }) : e);
}; })))(); }
var he, ge;
function _e() { return (_e = e.n((function () { r.L(), me(), he = (function () {
    function he() {
        this._parsers = [], this._cache = new Map, this._cacheMap = new Map;
    }
    he.prototype.reset = function () { this._cacheMap.clear(), this._cache.clear(); };
    he.prototype.has = function (e) { return this._cache.has(e); };
    he.prototype.get = function (e) { var t = this._cache.get(e); return t || r.R("[Assets] Asset id ".concat(e, " was not found in the Cache")), t; };
    he.prototype.set = function (e, t) {
        var _this = this;
        var n = b(e), i;
        for (var e_3 = 0; e_3 < this.parsers.length; e_3++) {
            var r_2 = this.parsers[e_3];
            if (r_2.test(t)) {
                i = r_2.getCacheableAssets(n, t);
                break;
            }
        }
        var a = new Map(Object.entries(i || {}));
        i || n.forEach(function (e) { a.set(e, t); });
        var o = __spreadArray([], a.keys(), true), s = { cacheKeys: o, keys: n };
        n.forEach(function (e) { _this._cacheMap.set(e, s); }), o.forEach(function (e) { var n = i ? i[e] : t; _this._cache.has(e) && _this._cache.get(e) !== n && r.R("[Cache] already has key:", e), _this._cache.set(e, a.get(e)); });
    };
    he.prototype.remove = function (e) {
        var _this = this;
        if (!this._cacheMap.has(e)) {
            r.R("[Assets] Asset id ".concat(e, " was not found in the Cache"));
            return;
        }
        var t = this._cacheMap.get(e);
        t.cacheKeys.forEach(function (e) { _this._cache.delete(e); }), t.keys.forEach(function (e) { _this._cacheMap.delete(e); });
    };
    Object.defineProperty(he.prototype, "parsers", {
        get: function () { return this._parsers; },
        enumerable: false,
        configurable: true
    });
    return he;
}()), ge = new he; })))(); }
var ve;
function ye() { return (ye = e.n((function () { ve = (function (e) { return (e[e.Low = 0] = "Low", e[e.Normal = 1] = "Normal", e[e.High = 2] = "High", e); })(ve || {}); })))(); }
function be(e, t, n, r, i) { var a = t[n]; for (var o_1 = 0; o_1 < a.length; o_1++) {
    var s_2 = a[o_1];
    n < t.length - 1 ? be(e.replace(r[n], s_2), t, n + 1, r, i) : i.push(e.replace(r[n], s_2));
} }
function xe(e) { var t = e.match(/\{(.*?)\}/g), n = []; if (t) {
    var r_3 = [];
    t.forEach(function (e) { var t = e.substring(1, e.length - 1).split(","); r_3.push(t); }), be(e, r_3, 0, t, n);
}
else
    n.push(e); return n; }
var Se;
function Ce() { return (Ce = e.n((function () { Se = function (e) { return !Array.isArray(e); }; })))(); }
function we(e) { return e.split(".").pop().split("?").shift().split("#").shift(); }
var Te;
function Ee() { return (Ee = e.n((function () { r.L(), r.C(), me(), Ce(), t.o(), Te = (function () {
    function Te() {
        var _this = this;
        this._defaultBundleIdentifierOptions = { connector: "-", createBundleAssetId: function (e, t) { return "".concat(e).concat(_this._bundleIdConnector).concat(t); }, extractAssetIdFromBundle: function (e, t) { return t.replace("".concat(e).concat(_this._bundleIdConnector), ""); } }, this._bundleIdConnector = this._defaultBundleIdentifierOptions.connector, this._createBundleAssetId = this._defaultBundleIdentifierOptions.createBundleAssetId, this._extractAssetIdFromBundle = this._defaultBundleIdentifierOptions.extractAssetIdFromBundle, this._assetMap = {}, this._preferredOrder = [], this._parsers = [], this._resolverHash = {}, this._bundles = {};
    }
    Te.prototype.setBundleIdentifier = function (e) { var t, n, r; if (this._bundleIdConnector = (t = e.connector) == null ? this._bundleIdConnector : t, this._createBundleAssetId = (n = e.createBundleAssetId) == null ? this._createBundleAssetId : n, this._extractAssetIdFromBundle = (r = e.extractAssetIdFromBundle) == null ? this._extractAssetIdFromBundle : r, this._extractAssetIdFromBundle("foo", this._createBundleAssetId("foo", "bar")) !== "bar")
        throw Error("[Resolver] GenerateBundleAssetId are not working correctly"); };
    Te.prototype.prefer = function () {
        var _this = this;
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        e.forEach(function (e) { _this._preferredOrder.push(e), e.priority || (e.priority = Object.keys(e.params)); }), this._resolverHash = {};
    };
    Object.defineProperty(Te.prototype, "basePath", {
        get: function () { return this._basePath; },
        set: function (e) { this._basePath = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Te.prototype, "rootPath", {
        get: function () { return this._rootPath; },
        set: function (e) { this._rootPath = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Te.prototype, "parsers", {
        get: function () { return this._parsers; },
        enumerable: false,
        configurable: true
    });
    Te.prototype.reset = function () { this.setBundleIdentifier(this._defaultBundleIdentifierOptions), this._assetMap = {}, this._preferredOrder = [], this._resolverHash = {}, this._rootPath = null, this._basePath = null, this._manifest = null, this._bundles = {}, this._defaultSearchParams = null; };
    Te.prototype.setDefaultSearchParams = function (e) { if (typeof e == "string")
        this._defaultSearchParams = e;
    else {
        var t_2 = e;
        this._defaultSearchParams = Object.keys(t_2).map(function (e) { return "".concat(encodeURIComponent(e), "=").concat(encodeURIComponent(t_2[e])); }).join("&");
    } };
    Te.prototype.getAlias = function (e) { var t = e.alias, n = e.src; return b(t || n, function (e) { return typeof e == "string" ? e : Array.isArray(e) ? e.map(function (e) { var t; return (t = e == null ? void 0 : e.src) == null ? e : t; }) : e != null && e.src ? e.src : e; }, !0); };
    Te.prototype.removeAlias = function (e, t) { this._assetMap[e] && (t && t !== this._resolverHash[e] || (delete this._resolverHash[e], delete this._assetMap[e])); };
    Te.prototype.addManifest = function (e) {
        var _this = this;
        this._manifest && r.R("[Resolver] Manifest already exists, this will be overwritten"), this._manifest = e, e.bundles.forEach(function (e) { _this.addBundle(e.name, e.assets); });
    };
    Te.prototype.addBundle = function (e, n) {
        var _this = this;
        var r = [], i = n;
        Array.isArray(n) || (i = Object.entries(n).map(function (_a) {
            var e = _a[0], n = _a[1];
            return typeof n == "string" || Array.isArray(n) ? { alias: e, src: n } : t.a({ alias: e }, n);
        })), i.forEach(function (n) { var i = n.src, a = n.alias, o; if (typeof a == "string") {
            var t_3 = _this._createBundleAssetId(e, a);
            r.push(t_3), o = [a, t_3];
        }
        else {
            var t_4 = a.map(function (t) { return _this._createBundleAssetId(e, t); });
            r.push.apply(r, t_4), o = __spreadArray(__spreadArray([], a, true), t_4, true);
        } _this.add(t.a(t.a({}, n), { alias: o, src: i })); }), this._bundles[e] = r;
    };
    Te.prototype.add = function (e) {
        var _this = this;
        var n = [];
        Array.isArray(e) ? n.push.apply(n, e) : n.push(e);
        var i = function (e) { _this.hasKey(e) && r.R("[Resolver] already has key: ".concat(e, " overwriting")); };
        b(n).forEach(function (e) { var n = e.src, r = e.data, a = e.format, o = e.loadParser, s = e.parser, c = b(n).map(function (e) { return typeof e == "string" ? xe(e) : Array.isArray(e) ? e : [e]; }), l = _this.getAlias(e); Array.isArray(l) ? l.forEach(i) : i(l); var u = [], d = function (e) { var n = _this._parsers.find(function (t) { return t.test(e); }); return t.a({ src: e }, n == null ? void 0 : n.parse(e)); }; c.forEach(function (n) { n.forEach(function (n) { var i = {}; if (typeof n != "object")
            i = d(n);
        else {
            var c, f;
            if (r = (c = n.data) == null ? r : c, a = (f = n.format) == null ? a : f, n.loadParser || n.parser) {
                var p, m;
                o = (p = n.loadParser) == null ? o : p, s = (m = n.parser) == null ? s : m;
            }
            i = t.a(t.a({}, d(n.src)), n);
        } if (!l)
            throw Error("[Resolver] alias is undefined for this asset: ".concat(i.src)); i = _this._buildResolvedAsset(i, { aliases: l, data: r, format: a, loadParser: o, parser: s, progressSize: e.progressSize }), u.push(i); }); }), l.forEach(function (e) { _this._assetMap[e] = u; }); });
    };
    Te.prototype.resolveBundle = function (e) {
        var _this = this;
        var t = Se(e);
        e = b(e);
        var n = {};
        return e.forEach(function (e) { var t = _this._bundles[e]; if (t) {
            var r_4 = _this.resolve(t), i_1 = {};
            for (var t_5 in r_4) {
                var n_5 = r_4[t_5];
                i_1[_this._extractAssetIdFromBundle(e, t_5)] = n_5;
            }
            n[e] = i_1;
        } }), t ? n[e[0]] : n;
    };
    Te.prototype.resolveUrl = function (e) { var t = this.resolve(e); if (typeof e != "string") {
        var e_4 = {};
        for (var n_6 in t)
            e_4[n_6] = t[n_6].src;
        return e_4;
    } return t.src; };
    Te.prototype.resolve = function (e) {
        var _this = this;
        var t = Se(e);
        e = b(e);
        var n = {};
        return e.forEach(function (e) { if (!_this._resolverHash[e]) {
            if (_this._assetMap[e]) {
                var t_6 = _this._assetMap[e], n_7 = _this._getPreferredOrder(t_6);
                n_7 == null || n_7.priority.forEach(function (e) { n_7.params[e].forEach(function (n) { var r = t_6.filter(function (t) { return t[e] ? t[e] === n : !1; }); r.length && (t_6 = r); }); }), _this._resolverHash[e] = t_6[0];
            }
            else
                _this._resolverHash[e] = _this._buildResolvedAsset({ alias: [e], src: e }, {});
        } n[e] = _this._resolverHash[e]; }), t ? n[e[0]] : n;
    };
    Te.prototype.hasKey = function (e) { return !!this._assetMap[e]; };
    Te.prototype.hasBundle = function (e) { return !!this._bundles[e]; };
    Te.prototype._getPreferredOrder = function (e) { var _loop_1 = function (t_7) {
        var n_8 = e[t_7], r_5 = this_1._preferredOrder.find(function (e) { return e.params.format.includes(n_8.format); });
        if (r_5)
            return { value: r_5 };
    }; var this_1 = this; for (var t_7 = 0; t_7 < e.length; t_7++) {
        var state_1 = _loop_1(t_7);
        if (typeof state_1 === "object")
            return state_1.value;
    } return this._preferredOrder[0]; };
    Te.prototype._appendDefaultSearchParams = function (e) { return this._defaultSearchParams ? "".concat(e).concat(/\?/.test(e) ? "&" : "?").concat(this._defaultSearchParams) : e; };
    Te.prototype._buildResolvedAsset = function (e, n) { var i, a; var o = n.aliases, s = n.data, c = n.loadParser, l = n.parser, u = n.format, d = n.progressSize; return (this._basePath || this._rootPath) && (e.src = r.w.toAbsolute(e.src, this._basePath, this._rootPath)), e.alias = (i = o == null ? e.alias : o) == null ? [e.src] : i, e.src = this._appendDefaultSearchParams(e.src), e.data = t.a(t.a({}, s || {}), e.data), e.loadParser = c == null ? e.loadParser : c, e.parser = l == null ? e.parser : l, e.format = (a = u == null ? e.format : u) == null ? we(e.src) : a, d !== void 0 && (e.progressSize = d), e; };
    return Te;
}()), Te.RETINA_PREFIX = /@([0-9\.]+)x/; })))(); }
var De;
function Oe() { return (Oe = e.n((function () { De = function (e, t) { var n = t.split("?")[1]; return n && (e += "?".concat(n)), e; }; })))(); }
var x;
function S() { return (S = e.n((function () { r.A(), r.O(), x = (function () {
    function x(e) {
        var _this = this;
        this._lastTransform = "", this._observer = null, this._tickerAttached = !1, this.updateTranslation = function () { if (!_this._canvas)
            return; var e = _this._canvas.getBoundingClientRect(), t = _this._canvas.width, n = _this._canvas.height, r = e.width / t * _this._renderer.resolution, i = e.height / n * _this._renderer.resolution, a = "translate(".concat(e.left, "px, ").concat(e.top, "px) scale(").concat(r, ", ").concat(i, ")"); a !== _this._lastTransform && (_this._domElement.style.transform = a, _this._lastTransform = a); }, this._domElement = e.domElement, this._renderer = e.renderer, globalThis.OffscreenCanvas && this._renderer.canvas instanceof OffscreenCanvas || (this._canvas = this._renderer.canvas, this._attachObserver());
    }
    Object.defineProperty(x.prototype, "canvas", {
        get: function () { return this._canvas; },
        enumerable: false,
        configurable: true
    });
    x.prototype.ensureAttached = function () { !this._domElement.parentNode && this._canvas.parentNode && (this._canvas.parentNode.appendChild(this._domElement), this.updateTranslation()); };
    x.prototype._attachObserver = function () {
        var _this = this;
        "ResizeObserver" in globalThis ? (this._observer && (this._observer.disconnect(), this._observer = null), this._observer = new ResizeObserver(function (e) { for (var _i = 0, e_5 = e; _i < e_5.length; _i++) {
            var t_8 = e_5[_i];
            if (t_8.target !== _this._canvas)
                continue;
            var e_6 = _this.canvas.width, n_9 = _this.canvas.height, r_6 = t_8.contentRect.width / e_6 * _this._renderer.resolution, i_2 = t_8.contentRect.height / n_9 * _this._renderer.resolution;
            (_this._lastScaleX !== r_6 || _this._lastScaleY !== i_2) && (_this.updateTranslation(), _this._lastScaleX = r_6, _this._lastScaleY = i_2);
        } }), this._observer.observe(this._canvas)) : this._tickerAttached || r.D.shared.add(this.updateTranslation, this, r.k.HIGH);
    };
    x.prototype.destroy = function () { this._observer ? (this._observer.disconnect(), this._observer = null) : this._tickerAttached && r.D.shared.remove(this.updateTranslation), this._domElement = null, this._renderer = null, this._canvas = null, this._tickerAttached = !1, this._lastTransform = "", this._lastScaleX = null, this._lastScaleY = null; };
    return x;
}()); })))(); }
var C;
function w() { return (w = e.n((function () { n.C(), C = (function () {
    function e(t) {
        this.bubbles = !0, this.cancelBubble = !0, this.cancelable = !1, this.composed = !1, this.defaultPrevented = !1, this.eventPhase = e.prototype.NONE, this.propagationStopped = !1, this.propagationImmediatelyStopped = !1, this.layer = new n.S, this.page = new n.S, this.NONE = 0, this.CAPTURING_PHASE = 1, this.AT_TARGET = 2, this.BUBBLING_PHASE = 3, this.manager = t;
    }
    Object.defineProperty(e.prototype, "layerX", {
        get: function () { return this.layer.x; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "layerY", {
        get: function () { return this.layer.y; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "pageX", {
        get: function () { return this.page.x; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "pageY", {
        get: function () { return this.page.y; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "data", {
        get: function () { return this; },
        enumerable: false,
        configurable: true
    });
    e.prototype.composedPath = function () { return this.manager && (!this.path || this.path[this.path.length - 1] !== this.target) && (this.path = this.target ? this.manager.propagationPath(this.target) : []), this.path; };
    e.prototype.initEvent = function (e, t, n) { throw Error("initEvent() is a legacy DOM API. It is not implemented in the Federated Events API."); };
    e.prototype.initUIEvent = function (e, t, n, r, i) { throw Error("initUIEvent() is a legacy DOM API. It is not implemented in the Federated Events API."); };
    e.prototype.preventDefault = function () { this.nativeEvent instanceof Event && this.nativeEvent.cancelable && this.nativeEvent.preventDefault(), this.defaultPrevented = !0; };
    e.prototype.stopImmediatePropagation = function () { this.propagationImmediatelyStopped = !0; };
    e.prototype.stopPropagation = function () { this.propagationStopped = !0; };
    return e;
}()); })))(); }
function ke(e) { return function (t) { return t.test(e); }; }
function Ae(e) { var t = { userAgent: "", platform: "", maxTouchPoints: 0 }; !e && typeof navigator < "u" ? t = { userAgent: navigator.userAgent, platform: navigator.platform, maxTouchPoints: navigator.maxTouchPoints || 0 } : typeof e == "string" ? t.userAgent = e : e && e.userAgent && (t = { userAgent: e.userAgent, platform: e.platform, maxTouchPoints: e.maxTouchPoints || 0 }); var n = t.userAgent, r = n.split("[FBAN"); r[1] !== void 0 && (n = r[0]), r = n.split("Twitter"), r[1] !== void 0 && (n = r[0]); var i = ke(n), a = { apple: { phone: i(T) && !i(k), ipod: i(je), tablet: !i(T) && (i(Me) || I(t)) && !i(k), universal: i(Ne), device: (i(T) || i(je) || i(Me) || i(Ne) || I(t)) && !i(k) }, amazon: { phone: i(D), tablet: !i(D) && i(O), device: i(D) || i(O) }, android: { phone: !i(k) && i(D) || !i(k) && i(E), tablet: !i(k) && !i(D) && !i(E) && (i(O) || i(Pe)), device: !i(k) && (i(D) || i(O) || i(E) || i(Pe)) || i(/\bokhttp\b/i) }, windows: { phone: i(k), tablet: i(A), device: i(k) || i(A) }, other: { blackberry: i(j), blackberry10: i(M), opera: i(N), firefox: i(F), chrome: i(P), device: i(j) || i(M) || i(N) || i(F) || i(P) }, any: !1, phone: !1, tablet: !1 }; return a.any = a.apple.device || a.android.device || a.windows.device || a.other.device, a.phone = a.apple.phone || a.android.phone || a.windows.phone, a.tablet = a.apple.tablet || a.android.tablet || a.windows.tablet, a; }
var T, je, Me, Ne, E, Pe, D, O, k, A, j, M, N, P, F, I;
function Fe() { return (Fe = e.n((function () { T = /iPhone/i, je = /iPod/i, Me = /iPad/i, Ne = /\biOS-universal(?:.+)Mac\b/i, E = /\bAndroid(?:.+)Mobile\b/i, Pe = /Android/i, D = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i, O = /Silk/i, k = /Windows Phone/i, A = /\bWindows(?:.+)ARM\b/i, j = /BlackBerry/i, M = /BB10/i, N = /Opera Mini/i, P = /\b(CriOS|Chrome)(?:.+)Mobile/i, F = /Mobile(?:.+)Firefox\b/i, I = function (e) { return e !== void 0 && e.platform === "MacIntel" && typeof e.maxTouchPoints == "number" && e.maxTouchPoints > 1 && typeof MSStream > "u"; }; })))(); }
var Ie, L, Le, Re, R, z, ze, Be, Ve, B, He;
function Ue() {
    return (Ue = e.n((function () {
        S(), w(), p(), r.x(), t.o(), Ie = 9, L = 100, Le = 0, Re = 0, R = 2, z = 1, ze = -1e3, Be = -1e3, Ve = 2, B = (function () {
            function e(e, t) {
                if (t === void 0) { t = r.S; }
                this._mobileInfo = t, this.debug = !1, this._activateOnTab = !0, this._deactivateOnMouseMove = !0, this._isActive = !1, this._isMobileAccessibility = !1, this._div = null, this._pools = {}, this._renderId = 0, this._children = [], this._androidUpdateCount = 0, this._androidUpdateFrequency = 500, this._isRunningTests = !1, this._boundOnKeyDown = this._onKeyDown.bind(this), this._boundOnMouseMove = this._onMouseMove.bind(this), this._hookDiv = null, (t.tablet || t.phone) && this._createTouchHook(), this._renderer = e;
            }
            Object.defineProperty(e.prototype, "isActive", {
                get: function () { return this._isActive; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(e.prototype, "isMobileAccessibility", {
                get: function () { return this._isMobileAccessibility; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(e.prototype, "hookDiv", {
                get: function () { return this._hookDiv; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(e.prototype, "div", {
                get: function () { return this._div; },
                enumerable: false,
                configurable: true
            });
            e.prototype._createTouchHook = function () {
                var _this = this;
                var e = document.createElement("button");
                e.style.width = "".concat(z, "px"), e.style.height = "".concat(z, "px"), e.style.position = "absolute", e.style.top = "".concat(ze, "px"), e.style.left = "".concat(Be, "px"), e.style.zIndex = Ve.toString(), e.style.backgroundColor = "#FF0000", e.title = "select to enable accessibility for this content", e.addEventListener("focus", function () { _this._isMobileAccessibility = !0, _this._activate(), _this._destroyTouchHook(); }), document.body.appendChild(e), this._hookDiv = e;
            };
            e.prototype._destroyTouchHook = function () { this._hookDiv && (document.body.removeChild(this._hookDiv), this._hookDiv = null); };
            e.prototype._activate = function () {
                var _this = this;
                if (this._isActive)
                    return;
                this._isActive = !0, this._div || (this._div = document.createElement("div"), this._div.style.position = "absolute", this._div.style.top = "".concat(Le, "px"), this._div.style.left = "".concat(Re, "px"), this._div.style.pointerEvents = "none", this._div.style.zIndex = R.toString(), this._canvasObserver = new x({ domElement: this._div, renderer: this._renderer })), this._deactivateOnMouseMove && globalThis.document.addEventListener("mousemove", this._boundOnMouseMove, !0);
                var e = this._renderer.view.canvas;
                if (e.parentNode)
                    this._canvasObserver.ensureAttached(), this._initAccessibilitySetup();
                else {
                    var t_9 = new MutationObserver(function () { e.parentNode && (t_9.disconnect(), _this._canvasObserver.ensureAttached(), _this._initAccessibilitySetup()); });
                    t_9.observe(document.body, { childList: !0, subtree: !0 });
                }
            };
            e.prototype._initAccessibilitySetup = function () { this._renderer.runners.postrender.add(this), this._renderer.lastObjectRendered && this._updateAccessibleObjects(this._renderer.lastObjectRendered); };
            e.prototype._deactivate = function () { var e; if (this._isActive && !this._isMobileAccessibility) {
                this._isActive = !1, globalThis.document.removeEventListener("mousemove", this._boundOnMouseMove, !0), this._renderer.runners.postrender.remove(this);
                for (var _i = 0, _a = this._children; _i < _a.length; _i++) {
                    var e_7 = _a[_i];
                    var t;
                    (t = e_7._accessibleDiv) != null && t.parentNode && (e_7._accessibleDiv.parentNode.removeChild(e_7._accessibleDiv), e_7._accessibleDiv = null), e_7._accessibleActive = !1;
                }
                for (var e_8 in this._pools)
                    this._pools[e_8].forEach(function (e) { e.parentNode && e.parentNode.removeChild(e); }), delete this._pools[e_8];
                (e = this._div) != null && e.parentNode && this._div.parentNode.removeChild(this._div), this._pools = {}, this._children = [];
            } };
            e.prototype._updateAccessibleObjects = function (e) { if (!e.visible || !e.accessibleChildren)
                return; e.accessible && (e._accessibleActive || this._addChild(e), e._renderId = this._renderId); var t = e.children; if (t)
                for (var e_9 = 0; e_9 < t.length; e_9++)
                    this._updateAccessibleObjects(t[e_9]); };
            e.prototype.init = function (n) { var r = e.defaultOptions, i = { accessibilityOptions: t.a(t.a({}, r), (n == null ? void 0 : n.accessibilityOptions) || {}) }; this.debug = i.accessibilityOptions.debug, this._activateOnTab = i.accessibilityOptions.activateOnTab, this._deactivateOnMouseMove = i.accessibilityOptions.deactivateOnMouseMove, this._activateOnTab && globalThis.addEventListener("keydown", this._boundOnKeyDown, !1), i.accessibilityOptions.enabledByDefault && this._activate(), this._renderer.runners.postrender.remove(this); };
            e.prototype.postrender = function () { var e = performance.now(); if (this._mobileInfo.android.device && e < this._androidUpdateCount || (this._androidUpdateCount = e + this._androidUpdateFrequency, (!this._renderer.renderingToScreen || !this._renderer.view.canvas) && !this._isRunningTests))
                return; var t = new Set; if (this._renderer.lastObjectRendered) {
                this._updateAccessibleObjects(this._renderer.lastObjectRendered);
                for (var _i = 0, _a = this._children; _i < _a.length; _i++) {
                    var e_10 = _a[_i];
                    e_10._renderId === this._renderId && t.add(this._children.indexOf(e_10));
                }
            } for (var e_11 = this._children.length - 1; e_11 >= 0; e_11--) {
                var n_10 = this._children[e_11];
                t.has(e_11) || (n_10._accessibleDiv && n_10._accessibleDiv.parentNode && (n_10._accessibleDiv.parentNode.removeChild(n_10._accessibleDiv), this._getPool(n_10.accessibleType).push(n_10._accessibleDiv), n_10._accessibleDiv = null), n_10._accessibleActive = !1, r.M(this._children, e_11, 1));
            } this._renderer.renderingToScreen && this._canvasObserver.ensureAttached(); for (var e_12 = 0; e_12 < this._children.length; e_12++) {
                var t_10 = this._children[e_12];
                if (!t_10._accessibleActive || !t_10._accessibleDiv)
                    continue;
                var n_11 = t_10._accessibleDiv, r_7 = t_10.hitArea || t_10.getBounds().rectangle;
                if (t_10.hitArea) {
                    var e_13 = t_10.worldTransform;
                    n_11.style.left = "".concat(e_13.tx + r_7.x * e_13.a, "px"), n_11.style.top = "".concat(e_13.ty + r_7.y * e_13.d, "px"), n_11.style.width = "".concat(r_7.width * e_13.a, "px"), n_11.style.height = "".concat(r_7.height * e_13.d, "px");
                }
                else
                    this._capHitArea(r_7), n_11.style.left = "".concat(r_7.x, "px"), n_11.style.top = "".concat(r_7.y, "px"), n_11.style.width = "".concat(r_7.width, "px"), n_11.style.height = "".concat(r_7.height, "px");
            } this._renderId++; };
            e.prototype._updateDebugHTML = function (e) { e.innerHTML = "type: ".concat(e.type, "</br> title : ").concat(e.title, "</br> tabIndex: ").concat(e.tabIndex); };
            e.prototype._capHitArea = function (e) { e.x < 0 && (e.width += e.x, e.x = 0), e.y < 0 && (e.height += e.y, e.y = 0); var _a = this._renderer, t = _a.width, n = _a.height; e.x + e.width > t && (e.width = t - e.x), e.y + e.height > n && (e.height = n - e.y); };
            e.prototype._addChild = function (e) {
                var t = this._getPool(e.accessibleType).pop();
                t ? (t.innerHTML = "", t.removeAttribute("title"), t.removeAttribute("aria-label"), t.tabIndex = 0) : (e.accessibleType === "button" ? (t = document.createElement("button"), this.debug || (t.style.color = "transparent")) : (t = document.createElement(e.accessibleType), t.style.cssText = "\n                        color: transparent;\n                        pointer-events: none;\n                        padding: 0;\n                        margin: 0;\n                        border: 0;\n                        outline: 0;\n                        background: transparent;\n                        box-sizing: border-box;\n                        user-select: none;\n                        -webkit-user-select: none;\n                        -moz-user-select: none;\n                        -ms-user-select: none;\n                    "), t.style.width = "".concat(L, "px"), t.style.height = "".concat(L, "px"), t.style.backgroundColor = this.debug ? "rgba(255,255,255,0.5)" : "transparent", t.style.position = "absolute", t.style.zIndex = R.toString(), t.style.borderStyle = "none", navigator.userAgent.toLowerCase().includes("chrome") ? t.setAttribute("aria-live", "off") : t.setAttribute("aria-live", "polite"), navigator.userAgent.match(/rv:.*Gecko\//) ? t.setAttribute("aria-relevant", "additions") : t.setAttribute("aria-relevant", "text"), t.addEventListener("click", this._onClick.bind(this)), t.addEventListener("focus", this._onFocus.bind(this)), t.addEventListener("focusout", this._onFocusOut.bind(this))), t.style.pointerEvents = e.accessiblePointerEvents, t.type = e.accessibleType, e.accessibleText && (t.innerText = e.accessibleText), e.accessibleTitle && e.accessibleTitle !== null ? t.title = e.accessibleTitle : e.accessibleHint && e.accessibleHint !== null || (t.title = "container ".concat(e.tabIndex)), e.accessibleHint && e.accessibleHint !== null && t.setAttribute("aria-label", e.accessibleHint), e.interactive ? t.tabIndex = e.tabIndex : t.tabIndex = 0, this.debug && this._updateDebugHTML(t), e._accessibleActive = !0, e._accessibleDiv = t, t.container = e, this._children.push(e), this._div.appendChild(e._accessibleDiv);
            };
            e.prototype._dispatchEvent = function (e, t) { var n = e.target.container, r = this._renderer.events.rootBoundary, i = Object.assign(new C(r), { target: n }); r.rootTarget = this._renderer.lastObjectRendered, t.forEach(function (e) { return r.dispatchEvent(i, e); }); };
            e.prototype._onClick = function (e) { this._dispatchEvent(e, ["click", "pointertap", "tap"]); };
            e.prototype._onFocus = function (e) { e.target.getAttribute("aria-live") || e.target.setAttribute("aria-live", "assertive"), this._dispatchEvent(e, ["mouseover"]); };
            e.prototype._onFocusOut = function (e) { e.target.getAttribute("aria-live") || e.target.setAttribute("aria-live", "polite"), this._dispatchEvent(e, ["mouseout"]); };
            e.prototype._onKeyDown = function (e) { e.keyCode === Ie && this._activateOnTab && this._activate(); };
            e.prototype._onMouseMove = function (e) { (e.movementX !== 0 || e.movementY !== 0) && this._deactivate(); };
            e.prototype.destroy = function () { var e; this._deactivate(), this._destroyTouchHook(), (e = this._canvasObserver) == null || e.destroy(), this._canvasObserver = null, this._div = null, this._pools = null, this._children = null, this._renderer = null, this._hookDiv = null, globalThis.removeEventListener("keydown", this._boundOnKeyDown), this._boundOnKeyDown = null, globalThis.document.removeEventListener("mousemove", this._boundOnMouseMove, !0), this._boundOnMouseMove = null; };
            e.prototype.setAccessibilityEnabled = function (e) { e ? this._activate() : this._deactivate(); };
            e.prototype._getPool = function (e) { return this._pools[e] || (this._pools[e] = []), this._pools[e]; };
            return e;
        }()), B.extension = { type: [l.WebGLSystem, l.WebGPUSystem], name: "accessibility" }, B.defaultOptions = { enabledByDefault: !1, debug: !1, activateOnTab: !0, deactivateOnMouseMove: !0 }, He = B;
    })))();
}
var We;
function Ge() { return (Ge = e.n((function () { We = { accessible: !1, accessibleTitle: null, accessibleHint: null, tabIndex: 0, accessibleType: "button", accessibleText: null, accessiblePointerEvents: "auto", accessibleChildren: !0, _accessibleActive: !1, _accessibleDiv: null, _renderId: -1 }; })))(); }
var Ke, V, H;
function U() { return (U = e.n((function () { s.P(), s.M(), i.J(), i.K(), t.o(), t.i(), Ke = ["gpu", "gl"], V = (function (_super) {
    __extends(e, _super);
    function e(n) {
        var _this = this;
        n = t.a(t.a({}, e.defaultOptions), n), _this = _super.call(this, n) || this, _this.enabled = !0, _this._state = i.G.for2d(), _this.blendMode = n.blendMode, _this.padding = n.padding, _this.antialias = typeof n.antialias == "boolean" ? n.antialias ? "on" : "off" : n.antialias, _this.resolution = n.resolution, _this.blendRequired = n.blendRequired, _this.clipToViewport = n.clipToViewport, _this.addResource("uTexture", 0, 1), n.blendRequired && _this.addResource("uBackTexture", 0, 3);
        return _this;
    }
    e.prototype.apply = function (e, t, n, r) { e.applyFilter(this, t, n, r); };
    Object.defineProperty(e.prototype, "blendMode", {
        get: function () { return this._state.blendMode; },
        set: function (e) { this._state.blendMode = e; },
        enumerable: false,
        configurable: true
    });
    e.from = function (n) { var r = n.gpu, i = n.gl, a = t.r(n, Ke), o, c; return r && (o = s.j.from(r)), i && (c = s.N.from(i)), new e(t.a({ gpuProgram: o, glProgram: c }, a)); };
    return e;
}(i.q)), V.defaultOptions = { blendMode: "normal", resolution: 1, padding: 0, antialias: "off", blendRequired: !1, clipToViewport: !0 }, H = V; })))(); }
function qe(e) {
    return __awaiter(this, void 0, void 0, function () { var e_14, t_11; return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!!e) return [3, 4];
                e_14 = 0;
                _a.label = 1;
            case 1:
                if (!(e_14 < W.length)) return [3, 4];
                t_11 = W[e_14];
                if (!t_11.value.test()) return [3, 3];
                return [4, t_11.value.load()];
            case 2:
                _a.sent();
                return [2];
            case 3:
                e_14++;
                return [3, 1];
            case 4: return [2];
        }
    }); });
}
var W;
function Je() { return (Je = e.n((function () { p(), W = [], f.handleByNamedList(l.Environment, W); })))(); }
function Ye(e) { var t = []; return e.replace(Ze, function (e, n, r) { var i = n.toLowerCase(), a = n, o = Xe(r); for (i === "m" && o.length > 2 && (t.push(__spreadArray([a], o.splice(0, 2), true)), i = "l", a = a === "m" ? "l" : "L");;) {
    if (o.length === G[i])
        return t.push(__spreadArray([a], o, true)), "";
    if (o.length < G[i])
        throw Error("malformed path data");
    t.push(__spreadArray([a], o.splice(0, G[i]), true));
} }), t; }
function Xe(e) { var t = e.match(Qe); return t ? t.map(Number) : []; }
var G, Ze, Qe;
function $e() { return ($e = e.n((function () { G = { a: 7, c: 6, h: 1, l: 2, m: 2, q: 4, s: 4, t: 2, v: 1, z: 0 }, Ze = /([astvzqmhlc])([^astvzqmhlc]*)/gi, Qe = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi; })))(); }
var et;
function tt() { return (tt = e.n((function () { p(), S(), et = (function () {
    function et(e) {
        this._attachedDomElements = [], this._renderer = e, this._renderer.runners.postrender.add(this), this._renderer.runners.init.add(this), this._domElement = document.createElement("div"), this._domElement.style.position = "absolute", this._domElement.style.top = "0", this._domElement.style.left = "0", this._domElement.style.pointerEvents = "none", this._domElement.style.zIndex = "1000";
    }
    et.prototype.init = function () { this._canvasObserver = new x({ domElement: this._domElement, renderer: this._renderer }); };
    et.prototype.addRenderable = function (e, t) { this._attachedDomElements.includes(e) || this._attachedDomElements.push(e); };
    et.prototype.updateRenderable = function (e) { };
    et.prototype.validateRenderable = function (e) { return !0; };
    et.prototype.postrender = function () { var e = this._attachedDomElements; if (e.length === 0)
        this._domElement.remove();
    else {
        this._canvasObserver.ensureAttached();
        for (var t_12 = 0; t_12 < e.length; t_12++) {
            var n_12 = e[t_12], r_8 = n_12.element;
            if (!n_12.parent || n_12.globalDisplayStatus < 7)
                r_8 == null || r_8.remove(), e.splice(t_12, 1), t_12--;
            else {
                this._domElement.contains(r_8) || (r_8.style.position = "absolute", r_8.style.pointerEvents = "auto", this._domElement.appendChild(r_8));
                var e_15 = n_12.worldTransform, t_13 = n_12._anchor, i_3 = n_12.width * t_13.x, a_1 = n_12.height * t_13.y;
                r_8.style.transformOrigin = "".concat(i_3, "px ").concat(a_1, "px"), r_8.style.transform = "matrix(".concat(e_15.a, ", ").concat(e_15.b, ", ").concat(e_15.c, ", ").concat(e_15.d, ", ").concat(e_15.tx - i_3, ", ").concat(e_15.ty - a_1, ")"), r_8.style.opacity = n_12.groupAlpha.toString();
            }
        }
    } };
    et.prototype.destroy = function () { this._renderer.runners.postrender.remove(this); for (var t_14 = 0; t_14 < this._attachedDomElements.length; t_14++) {
        var e;
        (e = this._attachedDomElements[t_14].element) == null || e.remove();
    } this._attachedDomElements.length = 0, this._domElement.remove(), this._canvasObserver.destroy(), this._renderer = null; };
    return et;
}()), et.extension = { type: [l.WebGLPipes, l.WebGPUPipes, l.CanvasPipes], name: "dom" }; })))(); }
var nt, K;
function rt() { return (rt = e.n((function () { r.A(), r.O(), nt = (function () {
    function nt() {
        this.interactionFrequency = 10, this._deltaTime = 0, this._didMove = !1, this._tickerAdded = !1, this._pauseUpdate = !0;
    }
    nt.prototype.init = function (e) { this.removeTickerListener(), this.events = e, this.interactionFrequency = 10, this._deltaTime = 0, this._didMove = !1, this._tickerAdded = !1, this._pauseUpdate = !0; };
    Object.defineProperty(nt.prototype, "pauseUpdate", {
        get: function () { return this._pauseUpdate; },
        set: function (e) { this._pauseUpdate = e; },
        enumerable: false,
        configurable: true
    });
    nt.prototype.addTickerListener = function () { !this._tickerAdded && this.domElement && (r.D.system.add(this._tickerUpdate, this, r.k.INTERACTION), this._tickerAdded = !0); };
    nt.prototype.removeTickerListener = function () { this._tickerAdded && (r.D.system.remove(this._tickerUpdate, this), this._tickerAdded = !1); };
    nt.prototype.pointerMoved = function () { this._didMove = !0; };
    nt.prototype._update = function () { if (!this.domElement || this._pauseUpdate)
        return; if (this._didMove) {
        this._didMove = !1;
        return;
    } var e = this.events._rootPointerEvent; this.events.supportsTouchEvents && e.pointerType === "touch" || globalThis.document.dispatchEvent(this.events.supportsPointerEvents ? new PointerEvent("pointermove", { clientX: e.clientX, clientY: e.clientY, pointerType: e.pointerType, pointerId: e.pointerId }) : new MouseEvent("mousemove", { clientX: e.clientX, clientY: e.clientY })); };
    nt.prototype._tickerUpdate = function (e) { this._deltaTime += e.deltaTime, this._deltaTime < this.interactionFrequency || (this._deltaTime = 0, this._update()); };
    nt.prototype.destroy = function () { this.removeTickerListener(), this.events = null, this.domElement = null, this._deltaTime = 0, this._didMove = !1, this._tickerAdded = !1, this._pauseUpdate = !0; };
    return nt;
}()), K = new nt; })))(); }
var q;
function J() { return (J = e.n((function () { n.C(), w(), q = (function (_super) {
    __extends(q, _super);
    function q() {
        var _this = this;
        _this = _super.apply(this, arguments) || this, _this.client = new n.S, _this.movement = new n.S, _this.offset = new n.S, _this.global = new n.S, _this.screen = new n.S;
        return _this;
    }
    Object.defineProperty(q.prototype, "clientX", {
        get: function () { return this.client.x; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(q.prototype, "clientY", {
        get: function () { return this.client.y; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(q.prototype, "x", {
        get: function () { return this.clientX; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(q.prototype, "y", {
        get: function () { return this.clientY; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(q.prototype, "movementX", {
        get: function () { return this.movement.x; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(q.prototype, "movementY", {
        get: function () { return this.movement.y; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(q.prototype, "offsetX", {
        get: function () { return this.offset.x; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(q.prototype, "offsetY", {
        get: function () { return this.offset.y; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(q.prototype, "globalX", {
        get: function () { return this.global.x; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(q.prototype, "globalY", {
        get: function () { return this.global.y; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(q.prototype, "screenX", {
        get: function () { return this.screen.x; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(q.prototype, "screenY", {
        get: function () { return this.screen.y; },
        enumerable: false,
        configurable: true
    });
    q.prototype.getLocalPosition = function (e, t, n) { return e.worldTransform.applyInverse(n || this.global, t); };
    q.prototype.getModifierState = function (e) { return "getModifierState" in this.nativeEvent && this.nativeEvent.getModifierState(e); };
    q.prototype.initMouseEvent = function (e, t, n, r, i, a, o, s, c, l, u, d, f, p, m) { throw Error("Method not implemented."); };
    return q;
}(C)); })))(); }
var Y;
function it() { return (it = e.n((function () { J(), Y = (function (_super) {
    __extends(Y, _super);
    function Y() {
        var _this = this;
        _this = _super.apply(this, arguments) || this, _this.width = 0, _this.height = 0, _this.isPrimary = !1, _this.persistentDeviceId = 0;
        return _this;
    }
    Y.prototype.getCoalescedEvents = function () { return this.type === "pointermove" || this.type === "mousemove" || this.type === "touchmove" ? [this] : []; };
    Y.prototype.getPredictedEvents = function () { throw Error("getPredictedEvents is not supported!"); };
    return Y;
}(q)); })))(); }
var X;
function at() { return (at = e.n((function () { J(), X = (function (_super) {
    __extends(X, _super);
    function X() {
        var _this = this;
        _this = _super.apply(this, arguments) || this, _this.DOM_DELTA_PIXEL = 0, _this.DOM_DELTA_LINE = 1, _this.DOM_DELTA_PAGE = 2;
        return _this;
    }
    return X;
}(q)), X.DOM_DELTA_PIXEL = 0, X.DOM_DELTA_LINE = 1, X.DOM_DELTA_PAGE = 2; })))(); }
var ot, st, Z, ct;
function lt() { return (lt = e.n((function () { ne(), n.C(), r.L(), rt(), J(), it(), at(), ot = 2048, st = new n.S, Z = new n.S, ct = (function () {
    function ct(e) {
        this.dispatch = new te, this.moveOnAll = !1, this.enableGlobalMoveEvents = !0, this.mappingState = { trackingData: {} }, this.eventPool = new Map, this._allInteractiveElements = [], this._hitElements = [], this._isPointerMoveEvent = !1, this.rootTarget = e, this.hitPruneFn = this.hitPruneFn.bind(this), this.hitTestFn = this.hitTestFn.bind(this), this.mapPointerDown = this.mapPointerDown.bind(this), this.mapPointerMove = this.mapPointerMove.bind(this), this.mapPointerOut = this.mapPointerOut.bind(this), this.mapPointerOver = this.mapPointerOver.bind(this), this.mapPointerUp = this.mapPointerUp.bind(this), this.mapPointerUpOutside = this.mapPointerUpOutside.bind(this), this.mapWheel = this.mapWheel.bind(this), this.mapContextMenu = this.mapContextMenu.bind(this), this.mappingTable = {}, this.addEventMapping("pointerdown", this.mapPointerDown), this.addEventMapping("pointermove", this.mapPointerMove), this.addEventMapping("pointerout", this.mapPointerOut), this.addEventMapping("pointerleave", this.mapPointerOut), this.addEventMapping("pointerover", this.mapPointerOver), this.addEventMapping("pointerup", this.mapPointerUp), this.addEventMapping("pointerupoutside", this.mapPointerUpOutside), this.addEventMapping("wheel", this.mapWheel), this.addEventMapping("contextmenu", this.mapContextMenu);
    }
    ct.prototype.addEventMapping = function (e, t) { this.mappingTable[e] || (this.mappingTable[e] = []), this.mappingTable[e].push({ fn: t, priority: 0 }), this.mappingTable[e].sort(function (e, t) { return e.priority - t.priority; }); };
    ct.prototype.dispatchEvent = function (e, t) { e.propagationStopped = !1, e.propagationImmediatelyStopped = !1, this.propagate(e, t), this.dispatch.emit(t || e.type, e); };
    ct.prototype.mapEvent = function (e) { if (!this.rootTarget)
        return; var t = this.mappingTable[e.type]; if (t)
        for (var n_13 = 0, r_9 = t.length; n_13 < r_9; n_13++)
            t[n_13].fn(e);
    else
        r.R("[EventBoundary]: Event mapping not defined for ".concat(e.type)); };
    ct.prototype.hitTest = function (e, t) { K.pauseUpdate = !0; var n = this._isPointerMoveEvent && this.enableGlobalMoveEvents ? "hitTestMoveRecursive" : "hitTestRecursive", r = this[n](this.rootTarget, this.rootTarget.eventMode, st.set(e, t), this.hitTestFn, this.hitPruneFn); return r && r[0]; };
    ct.prototype.propagate = function (e, t) { if (!e.target)
        return; var n = e.composedPath(); e.eventPhase = e.CAPTURING_PHASE; for (var r_10 = 0, i_4 = n.length - 1; r_10 < i_4; r_10++)
        if (e.currentTarget = n[r_10], this.notifyTarget(e, t), e.propagationStopped || e.propagationImmediatelyStopped)
            return; if (e.eventPhase = e.AT_TARGET, e.currentTarget = e.target, this.notifyTarget(e, t), !(e.propagationStopped || e.propagationImmediatelyStopped)) {
        e.eventPhase = e.BUBBLING_PHASE;
        for (var r_11 = n.length - 2; r_11 >= 0; r_11--)
            if (e.currentTarget = n[r_11], this.notifyTarget(e, t), e.propagationStopped || e.propagationImmediatelyStopped)
                return;
    } };
    ct.prototype.all = function (e, t, n) {
        var _this = this;
        if (n === void 0) { n = this._allInteractiveElements; }
        if (n.length === 0)
            return;
        e.eventPhase = e.BUBBLING_PHASE;
        var r = Array.isArray(t) ? t : [t];
        var _loop_2 = function (t_15) {
            r.forEach(function (r) { e.currentTarget = n[t_15], _this.notifyTarget(e, r); });
        };
        for (var t_15 = n.length - 1; t_15 >= 0; t_15--) {
            _loop_2(t_15);
        }
    };
    ct.prototype.propagationPath = function (e) { var t = [e]; for (var n_14 = 0; n_14 < ot && e !== this.rootTarget && e.parent; n_14++) {
        if (!e.parent)
            throw Error("Cannot find propagation path to disconnected target");
        t.push(e.parent), e = e.parent;
    } return t.reverse(), t; };
    ct.prototype.hitTestMoveRecursive = function (e, t, n, r, i, a) {
        if (a === void 0) { a = !1; }
        var o = !1;
        if (this._interactivePrune(e))
            return null;
        if ((e.eventMode === "dynamic" || t === "dynamic") && (K.pauseUpdate = !1), e.interactiveChildren && e.children) {
            var s_3 = e.children;
            for (var c_1 = s_3.length - 1; c_1 >= 0; c_1--) {
                var l_1 = s_3[c_1], u_1 = this.hitTestMoveRecursive(l_1, this._isInteractive(t) ? t : l_1.eventMode, n, r, i, a || i(e, n));
                if (u_1) {
                    if (u_1.length > 0 && !u_1[u_1.length - 1].parent)
                        continue;
                    var t_16 = e.isInteractive();
                    (u_1.length > 0 || t_16) && (t_16 && this._allInteractiveElements.push(e), u_1.push(e)), this._hitElements.length === 0 && (this._hitElements = u_1), o = !0;
                }
            }
        }
        var s = this._isInteractive(t), c = e.isInteractive();
        return c && c && this._allInteractiveElements.push(e), a || this._hitElements.length > 0 ? null : o ? this._hitElements : s && !i(e, n) && r(e, n) ? c ? [e] : [] : null;
    };
    ct.prototype.hitTestRecursive = function (e, t, n, r, i) { if (this._interactivePrune(e) || i(e, n))
        return null; if ((e.eventMode === "dynamic" || t === "dynamic") && (K.pauseUpdate = !1), e.interactiveChildren && e.children) {
        var a_2 = e.children, o_2 = n;
        for (var n_15 = a_2.length - 1; n_15 >= 0; n_15--) {
            var s_4 = a_2[n_15], c_2 = this.hitTestRecursive(s_4, this._isInteractive(t) ? t : s_4.eventMode, o_2, r, i);
            if (c_2) {
                if (c_2.length > 0 && !c_2[c_2.length - 1].parent)
                    continue;
                var t_17 = e.isInteractive();
                return (c_2.length > 0 || t_17) && c_2.push(e), c_2;
            }
        }
    } var a = this._isInteractive(t), o = e.isInteractive(); return a && r(e, n) ? o ? [e] : [] : null; };
    ct.prototype._isInteractive = function (e) { return e === "static" || e === "dynamic"; };
    ct.prototype._interactivePrune = function (e) { return !e || !e.visible || !e.renderable || !e.measurable || e.eventMode === "none" || e.eventMode === "passive" && !e.interactiveChildren; };
    ct.prototype.hitPruneFn = function (e, t) { if (e.hitArea && (e.worldTransform.applyInverse(t, Z), !e.hitArea.contains(Z.x, Z.y)))
        return !0; if (e.effects && e.effects.length)
        for (var n_16 = 0; n_16 < e.effects.length; n_16++) {
            var r_12 = e.effects[n_16];
            if (r_12.containsPoint && !r_12.containsPoint(t, this.hitTestFn))
                return !0;
        } return !1; };
    ct.prototype.hitTestFn = function (e, t) { return e.hitArea ? !0 : e != null && e.containsPoint ? (e.worldTransform.applyInverse(t, Z), e.containsPoint(Z)) : !1; };
    ct.prototype.notifyTarget = function (e, t) { var n, r; if (!e.currentTarget.isInteractive())
        return; t != null || (t = e.type); var i = "on".concat(t); (n = (r = e.currentTarget)[i]) == null || n.call(r, e); var a = e.eventPhase === e.CAPTURING_PHASE || e.eventPhase === e.AT_TARGET ? "".concat(t, "capture") : t; this._notifyListeners(e, a), e.eventPhase === e.AT_TARGET && this._notifyListeners(e, t); };
    ct.prototype.mapPointerDown = function (e) { if (!(e instanceof Y)) {
        r.R("EventBoundary cannot map a non-pointer event as a pointer event");
        return;
    } var t = this.createPointerEvent(e); if (this.dispatchEvent(t, "pointerdown"), t.pointerType === "touch")
        this.dispatchEvent(t, "touchstart");
    else if (t.pointerType === "mouse" || t.pointerType === "pen") {
        var e_16 = t.button === 2;
        this.dispatchEvent(t, e_16 ? "rightdown" : "mousedown");
    } var n = this.trackingData(e.pointerId); n.pressTargetsByButton[e.button] = t.composedPath(), this.freeEvent(t); };
    ct.prototype.mapPointerMove = function (e) { var t, n; if (!(e instanceof Y)) {
        r.R("EventBoundary cannot map a non-pointer event as a pointer event");
        return;
    } this._allInteractiveElements.length = 0, this._hitElements.length = 0, this._isPointerMoveEvent = !0; var i = this.createPointerEvent(e); this._isPointerMoveEvent = !1; var a = i.pointerType === "mouse" || i.pointerType === "pen", o = this.trackingData(e.pointerId), s = this.findMountedTarget(o.overTargets); if (((t = o.overTargets) == null ? void 0 : t.length) > 0 && s !== i.target) {
        var t_18 = e.type === "mousemove" ? "mouseout" : "pointerout", n_17 = this.createPointerEvent(e, t_18, s);
        if (this.dispatchEvent(n_17, "pointerout"), a && this.dispatchEvent(n_17, "mouseout"), !i.composedPath().includes(s)) {
            var t_19 = this.createPointerEvent(e, "pointerleave", s);
            for (t_19.eventPhase = t_19.AT_TARGET; t_19.target && !i.composedPath().includes(t_19.target);)
                t_19.currentTarget = t_19.target, this.notifyTarget(t_19), a && this.notifyTarget(t_19, "mouseleave"), t_19.target = t_19.target.parent;
            this.freeEvent(t_19);
        }
        this.freeEvent(n_17);
    } if (s !== i.target) {
        var t_20 = e.type === "mousemove" ? "mouseover" : "pointerover", n_18 = this.clonePointerEvent(i, t_20);
        this.dispatchEvent(n_18, "pointerover"), a && this.dispatchEvent(n_18, "mouseover");
        var r_13 = s == null ? void 0 : s.parent;
        for (; r_13 && r_13 !== this.rootTarget.parent && r_13 !== i.target;)
            r_13 = r_13.parent;
        if (!r_13 || r_13 === this.rootTarget.parent) {
            var e_17 = this.clonePointerEvent(i, "pointerenter");
            for (e_17.eventPhase = e_17.AT_TARGET; e_17.target && e_17.target !== s && e_17.target !== this.rootTarget.parent;)
                e_17.currentTarget = e_17.target, this.notifyTarget(e_17), a && this.notifyTarget(e_17, "mouseenter"), e_17.target = e_17.target.parent;
            this.freeEvent(e_17);
        }
        this.freeEvent(n_18);
    } var c = [], l = (n = this.enableGlobalMoveEvents) == null || n; if (this.moveOnAll ? c.push("pointermove") : this.dispatchEvent(i, "pointermove"), l && c.push("globalpointermove"), i.pointerType === "touch" && (this.moveOnAll ? c.splice(1, 0, "touchmove") : this.dispatchEvent(i, "touchmove"), l && c.push("globaltouchmove")), a) {
        var u;
        this.moveOnAll ? c.splice(1, 0, "mousemove") : this.dispatchEvent(i, "mousemove"), l && c.push("globalmousemove"), this.cursor = (u = i.target) == null ? void 0 : u.cursor;
    } c.length > 0 && this.all(i, c), this._allInteractiveElements.length = 0, this._hitElements.length = 0, o.overTargets = i.composedPath(), this.freeEvent(i); };
    ct.prototype.mapPointerOver = function (e) { var t; if (!(e instanceof Y)) {
        r.R("EventBoundary cannot map a non-pointer event as a pointer event");
        return;
    } var n = this.trackingData(e.pointerId), i = this.createPointerEvent(e), a = i.pointerType === "mouse" || i.pointerType === "pen"; this.dispatchEvent(i, "pointerover"), a && this.dispatchEvent(i, "mouseover"), i.pointerType === "mouse" && (this.cursor = (t = i.target) == null ? void 0 : t.cursor); var o = this.clonePointerEvent(i, "pointerenter"); for (o.eventPhase = o.AT_TARGET; o.target && o.target !== this.rootTarget.parent;)
        o.currentTarget = o.target, this.notifyTarget(o), a && this.notifyTarget(o, "mouseenter"), o.target = o.target.parent; n.overTargets = i.composedPath(), this.freeEvent(i), this.freeEvent(o); };
    ct.prototype.mapPointerOut = function (e) { if (!(e instanceof Y)) {
        r.R("EventBoundary cannot map a non-pointer event as a pointer event");
        return;
    } var t = this.trackingData(e.pointerId); if (t.overTargets) {
        var n_19 = e.pointerType === "mouse" || e.pointerType === "pen", r_14 = this.findMountedTarget(t.overTargets), i_5 = this.createPointerEvent(e, "pointerout", r_14);
        this.dispatchEvent(i_5), n_19 && this.dispatchEvent(i_5, "mouseout");
        var a_3 = this.createPointerEvent(e, "pointerleave", r_14);
        for (a_3.eventPhase = a_3.AT_TARGET; a_3.target && a_3.target !== this.rootTarget.parent;)
            a_3.currentTarget = a_3.target, this.notifyTarget(a_3), n_19 && this.notifyTarget(a_3, "mouseleave"), a_3.target = a_3.target.parent;
        t.overTargets = null, this.freeEvent(i_5), this.freeEvent(a_3);
    } this.cursor = null; };
    ct.prototype.mapPointerUp = function (e) { if (!(e instanceof Y)) {
        r.R("EventBoundary cannot map a non-pointer event as a pointer event");
        return;
    } var t = performance.now(), n = this.createPointerEvent(e); if (this.dispatchEvent(n, "pointerup"), n.pointerType === "touch")
        this.dispatchEvent(n, "touchend");
    else if (n.pointerType === "mouse" || n.pointerType === "pen") {
        var e_18 = n.button === 2;
        this.dispatchEvent(n, e_18 ? "rightup" : "mouseup");
    } var i = this.trackingData(e.pointerId), a = this.findMountedTarget(i.pressTargetsByButton[e.button]), o = a; if (a && !n.composedPath().includes(a)) {
        var t_21 = a;
        for (; t_21 && !n.composedPath().includes(t_21);) {
            if (n.currentTarget = t_21, this.notifyTarget(n, "pointerupoutside"), n.pointerType === "touch")
                this.notifyTarget(n, "touchendoutside");
            else if (n.pointerType === "mouse" || n.pointerType === "pen") {
                var e_19 = n.button === 2;
                this.notifyTarget(n, e_19 ? "rightupoutside" : "mouseupoutside");
            }
            t_21 = t_21.parent;
        }
        delete i.pressTargetsByButton[e.button], o = t_21;
    } if (o) {
        var r_15 = this.clonePointerEvent(n, "click");
        r_15.target = o, r_15.path = null, i.clicksByButton[e.button] || (i.clicksByButton[e.button] = { clickCount: 0, target: r_15.target, timeStamp: t });
        var a_4 = i.clicksByButton[e.button];
        if (a_4.target === r_15.target && t - a_4.timeStamp < 200 ? ++a_4.clickCount : a_4.clickCount = 1, a_4.target = r_15.target, a_4.timeStamp = t, r_15.detail = a_4.clickCount, r_15.pointerType === "mouse") {
            var e_20 = r_15.button === 2;
            this.dispatchEvent(r_15, e_20 ? "rightclick" : "click");
        }
        else
            r_15.pointerType === "touch" && this.dispatchEvent(r_15, "tap");
        this.dispatchEvent(r_15, "pointertap"), this.freeEvent(r_15);
    } this.freeEvent(n); };
    ct.prototype.mapPointerUpOutside = function (e) { if (!(e instanceof Y)) {
        r.R("EventBoundary cannot map a non-pointer event as a pointer event");
        return;
    } var t = this.trackingData(e.pointerId), n = this.findMountedTarget(t.pressTargetsByButton[e.button]), i = this.createPointerEvent(e); if (n) {
        var r_16 = n;
        for (; r_16;)
            i.currentTarget = r_16, this.notifyTarget(i, "pointerupoutside"), i.pointerType === "touch" ? this.notifyTarget(i, "touchendoutside") : (i.pointerType === "mouse" || i.pointerType === "pen") && this.notifyTarget(i, i.button === 2 ? "rightupoutside" : "mouseupoutside"), r_16 = r_16.parent;
        delete t.pressTargetsByButton[e.button];
    } this.freeEvent(i); };
    ct.prototype.mapWheel = function (e) { if (!(e instanceof X)) {
        r.R("EventBoundary cannot map a non-wheel event as a wheel event");
        return;
    } var t = this.createWheelEvent(e); this.dispatchEvent(t), this.freeEvent(t); };
    ct.prototype.mapContextMenu = function (e) { if (!(e instanceof Y)) {
        r.R("EventBoundary cannot map a non-pointer event as a pointer event");
        return;
    } var t = this.createPointerEvent(e); this.dispatchEvent(t, "contextmenu"), this.freeEvent(t); };
    ct.prototype.findMountedTarget = function (e) { if (!e)
        return null; var t = e[0]; for (var n_20 = 1; n_20 < e.length && e[n_20].parent === t; n_20++)
        t = e[n_20]; return t; };
    ct.prototype.createPointerEvent = function (e, t, n) { var r; var i = this.allocateEvent(Y); return this.copyPointerData(e, i), this.copyMouseData(e, i), this.copyData(e, i), i.nativeEvent = e.nativeEvent, i.originalEvent = e, i.target = (r = n == null ? this.hitTest(i.global.x, i.global.y) : n) == null ? this._hitElements[0] : r, typeof t == "string" && (i.type = t), i; };
    ct.prototype.createWheelEvent = function (e) { var t = this.allocateEvent(X); return this.copyWheelData(e, t), this.copyMouseData(e, t), this.copyData(e, t), t.nativeEvent = e.nativeEvent, t.originalEvent = e, t.target = this.hitTest(t.global.x, t.global.y), t; };
    ct.prototype.clonePointerEvent = function (e, t) { var n = this.allocateEvent(Y); return n.nativeEvent = e.nativeEvent, n.originalEvent = e.originalEvent, this.copyPointerData(e, n), this.copyMouseData(e, n), this.copyData(e, n), n.target = e.target, n.path = e.composedPath().slice(), n.type = t == null ? n.type : t, n; };
    ct.prototype.copyWheelData = function (e, t) { t.deltaMode = e.deltaMode, t.deltaX = e.deltaX, t.deltaY = e.deltaY, t.deltaZ = e.deltaZ; };
    ct.prototype.copyPointerData = function (e, t) { e instanceof Y && t instanceof Y && (t.pointerId = e.pointerId, t.width = e.width, t.height = e.height, t.isPrimary = e.isPrimary, t.pointerType = e.pointerType, t.pressure = e.pressure, t.tangentialPressure = e.tangentialPressure, t.tiltX = e.tiltX, t.tiltY = e.tiltY, t.twist = e.twist, t.persistentDeviceId = e.persistentDeviceId); };
    ct.prototype.copyMouseData = function (e, t) { e instanceof q && t instanceof q && (t.altKey = e.altKey, t.button = e.button, t.buttons = e.buttons, t.client.copyFrom(e.client), t.ctrlKey = e.ctrlKey, t.metaKey = e.metaKey, t.movement.copyFrom(e.movement), t.screen.copyFrom(e.screen), t.shiftKey = e.shiftKey, t.global.copyFrom(e.global)); };
    ct.prototype.copyData = function (e, t) { t.isTrusted = e.isTrusted, t.srcElement = e.srcElement, t.timeStamp = performance.now(), t.type = e.type, t.detail = e.detail, t.view = e.view, t.which = e.which, t.layer.copyFrom(e.layer), t.page.copyFrom(e.page); };
    ct.prototype.trackingData = function (e) { return this.mappingState.trackingData[e] || (this.mappingState.trackingData[e] = { pressTargetsByButton: {}, clicksByButton: {}, overTarget: null }), this.mappingState.trackingData[e]; };
    ct.prototype.allocateEvent = function (e) { this.eventPool.has(e) || this.eventPool.set(e, []); var t = this.eventPool.get(e).pop() || new e(this); return t.eventPhase = t.NONE, t.currentTarget = null, t.defaultPrevented = !1, t.path = null, t.target = null, t; };
    ct.prototype.freeEvent = function (e) { if (e.manager !== this)
        throw Error("It is illegal to free an event not managed by this EventBoundary!"); var t = e.constructor; this.eventPool.has(t) || this.eventPool.set(t, []), this.eventPool.get(t).push(e); };
    ct.prototype._notifyListeners = function (e, t) { var n = e.currentTarget._events[t]; if (n) {
        if ("fn" in n)
            n.once && e.currentTarget.removeListener(t, n.fn, void 0, !0), n.fn.call(n.context, e);
        else
            for (var r_17 = 0, i_6 = n.length; r_17 < i_6 && !e.propagationImmediatelyStopped; r_17++)
                n[r_17].once && e.currentTarget.removeListener(t, n[r_17].fn, void 0, !0), n[r_17].fn.call(n[r_17].context, e);
    } };
    return ct;
}()); })))(); }
var ut, dt, Q, ft;
function pt() { return (pt = e.n((function () { p(), lt(), rt(), it(), at(), t.o(), ut = 1, dt = { touchstart: "pointerdown", touchend: "pointerup", touchendoutside: "pointerupoutside", touchmove: "pointermove", touchcancel: "pointercancel" }, Q = (function () {
    function e(n) {
        var _this = this;
        this.supportsTouchEvents = "ontouchstart" in globalThis, this.supportsPointerEvents = !!globalThis.PointerEvent, this.domElement = null, this.resolution = 1, this.renderer = n, this.rootBoundary = new ct(null), K.init(this), this.autoPreventDefault = !0, this._eventsAdded = !1, this._rootPointerEvent = new Y(null), this._rootWheelEvent = new X(null), this._rootContextMenuEvent = new Y(null), this.cursorStyles = { default: "inherit", pointer: "pointer" }, this.features = new Proxy(t.a({}, e.defaultEventFeatures), { set: function (e, t, n) { return (t === "globalMove" && (_this.rootBoundary.enableGlobalMoveEvents = n), e[t] = n, !0); } }), this._onPointerDown = this._onPointerDown.bind(this), this._onPointerMove = this._onPointerMove.bind(this), this._onPointerUp = this._onPointerUp.bind(this), this._onPointerOverOut = this._onPointerOverOut.bind(this), this._onContextMenu = this._onContextMenu.bind(this), this.onWheel = this.onWheel.bind(this);
    }
    Object.defineProperty(e, "defaultEventMode", {
        get: function () { return this._defaultEventMode; },
        enumerable: false,
        configurable: true
    });
    e.prototype.init = function (t) { var n, r; var _a = this.renderer, i = _a.canvas, a = _a.resolution; this.setTargetElement(i), this.resolution = a, e._defaultEventMode = (n = t.eventMode) == null ? "passive" : n, Object.assign(this.features, (r = t.eventFeatures) == null ? {} : r), this.rootBoundary.enableGlobalMoveEvents = this.features.globalMove; };
    e.prototype.resolutionChange = function (e) { this.resolution = e; };
    e.prototype.destroy = function () { K.destroy(), this.setTargetElement(null), this.renderer = null, this._currentCursor = null; };
    e.prototype.setCursor = function (e) { e || (e = "default"); var t = !0; if (globalThis.OffscreenCanvas && this.domElement instanceof OffscreenCanvas && (t = !1), this._currentCursor === e)
        return; this._currentCursor = e; var n = this.cursorStyles[e]; if (n)
        switch (typeof n) {
            case "string":
                t && (this.domElement.style.cursor = n);
                break;
            case "function":
                n(e);
                break;
            case "object": t && Object.assign(this.domElement.style, n);
        }
    else
        t && typeof e == "string" && !Object.prototype.hasOwnProperty.call(this.cursorStyles, e) && (this.domElement.style.cursor = e); };
    Object.defineProperty(e.prototype, "pointer", {
        get: function () { return this._rootPointerEvent; },
        enumerable: false,
        configurable: true
    });
    e.prototype._onPointerDown = function (e) { if (!this.features.click)
        return; this.rootBoundary.rootTarget = this.renderer.lastObjectRendered; var t = this._normalizeToPointerData(e); this.autoPreventDefault && t[0].isNormalized && (e.cancelable || !("cancelable" in e)) && e.preventDefault(); for (var e_21 = 0, n_21 = t.length; e_21 < n_21; e_21++) {
        var n_22 = t[e_21], r_18 = this._bootstrapEvent(this._rootPointerEvent, n_22);
        this.rootBoundary.mapEvent(r_18);
    } this.setCursor(this.rootBoundary.cursor); };
    e.prototype._onPointerMove = function (e) { if (!this.features.move)
        return; this.rootBoundary.rootTarget = this.renderer.lastObjectRendered, K.pointerMoved(); var t = this._normalizeToPointerData(e); for (var e_22 = 0, n_23 = t.length; e_22 < n_23; e_22++) {
        var n_24 = this._bootstrapEvent(this._rootPointerEvent, t[e_22]);
        this.rootBoundary.mapEvent(n_24);
    } this.setCursor(this.rootBoundary.cursor); };
    e.prototype._onPointerUp = function (e) { if (!this.features.click)
        return; this.rootBoundary.rootTarget = this.renderer.lastObjectRendered; var t = e.target; e.composedPath && e.composedPath().length > 0 && (t = e.composedPath()[0]); var n = t === this.domElement ? "" : "outside", r = this._normalizeToPointerData(e); for (var e_23 = 0, t_22 = r.length; e_23 < t_22; e_23++) {
        var t_23 = this._bootstrapEvent(this._rootPointerEvent, r[e_23]);
        t_23.type += n, this.rootBoundary.mapEvent(t_23);
    } this.setCursor(this.rootBoundary.cursor); };
    e.prototype._onPointerOverOut = function (e) { if (!this.features.click)
        return; this.rootBoundary.rootTarget = this.renderer.lastObjectRendered; var t = this._normalizeToPointerData(e); for (var e_24 = 0, n_25 = t.length; e_24 < n_25; e_24++) {
        var n_26 = this._bootstrapEvent(this._rootPointerEvent, t[e_24]);
        this.rootBoundary.mapEvent(n_26);
    } this.setCursor(this.rootBoundary.cursor); };
    e.prototype._onContextMenu = function (e) { if (!this.features.click)
        return; this.rootBoundary.rootTarget = this.renderer.lastObjectRendered; var t = this._normalizeToPointerData(e); for (var e_25 = 0, n_27 = t.length; e_25 < n_27; e_25++) {
        var n_28 = this._bootstrapEvent(this._rootContextMenuEvent, t[e_25]);
        this.rootBoundary.mapEvent(n_28);
    } this.setCursor(this.rootBoundary.cursor); };
    e.prototype.onWheel = function (e) { if (!this.features.wheel)
        return; var t = this.normalizeWheelEvent(e); this.rootBoundary.rootTarget = this.renderer.lastObjectRendered, this.rootBoundary.mapEvent(t); };
    e.prototype.setTargetElement = function (e) { this._removeEvents(), this.domElement = e, K.domElement = e, this._addEvents(); };
    e.prototype._addEvents = function () { if (this._eventsAdded || !this.domElement)
        return; K.addTickerListener(); var e = this.domElement.style; e && (globalThis.navigator.msPointerEnabled ? (e.msContentZooming = "none", e.msTouchAction = "none") : this.supportsPointerEvents && (e.touchAction = "none")), this.supportsPointerEvents ? (globalThis.document.addEventListener("pointermove", this._onPointerMove, !0), this.domElement.addEventListener("pointerdown", this._onPointerDown, !0), this.domElement.addEventListener("pointerleave", this._onPointerOverOut, !0), this.domElement.addEventListener("pointerover", this._onPointerOverOut, !0), globalThis.addEventListener("pointerup", this._onPointerUp, !0)) : (globalThis.document.addEventListener("mousemove", this._onPointerMove, !0), this.domElement.addEventListener("mousedown", this._onPointerDown, !0), this.domElement.addEventListener("mouseout", this._onPointerOverOut, !0), this.domElement.addEventListener("mouseover", this._onPointerOverOut, !0), globalThis.addEventListener("mouseup", this._onPointerUp, !0), this.supportsTouchEvents && (this.domElement.addEventListener("touchstart", this._onPointerDown, !0), this.domElement.addEventListener("touchend", this._onPointerUp, !0), this.domElement.addEventListener("touchmove", this._onPointerMove, !0))), this.domElement.addEventListener("wheel", this.onWheel, { passive: !0, capture: !0 }), this.domElement.addEventListener("contextmenu", this._onContextMenu, !0), this._eventsAdded = !0; };
    e.prototype._removeEvents = function () { if (!this._eventsAdded || !this.domElement)
        return; K.removeTickerListener(); var e = this.domElement.style; e && (globalThis.navigator.msPointerEnabled ? (e.msContentZooming = "", e.msTouchAction = "") : this.supportsPointerEvents && (e.touchAction = "")), this.supportsPointerEvents ? (globalThis.document.removeEventListener("pointermove", this._onPointerMove, !0), this.domElement.removeEventListener("pointerdown", this._onPointerDown, !0), this.domElement.removeEventListener("pointerleave", this._onPointerOverOut, !0), this.domElement.removeEventListener("pointerover", this._onPointerOverOut, !0), globalThis.removeEventListener("pointerup", this._onPointerUp, !0)) : (globalThis.document.removeEventListener("mousemove", this._onPointerMove, !0), this.domElement.removeEventListener("mousedown", this._onPointerDown, !0), this.domElement.removeEventListener("mouseout", this._onPointerOverOut, !0), this.domElement.removeEventListener("mouseover", this._onPointerOverOut, !0), globalThis.removeEventListener("mouseup", this._onPointerUp, !0), this.supportsTouchEvents && (this.domElement.removeEventListener("touchstart", this._onPointerDown, !0), this.domElement.removeEventListener("touchend", this._onPointerUp, !0), this.domElement.removeEventListener("touchmove", this._onPointerMove, !0))), this.domElement.removeEventListener("wheel", this.onWheel, !0), this.domElement.removeEventListener("contextmenu", this._onContextMenu, !0), this.domElement = null, this._eventsAdded = !1; };
    e.prototype.mapPositionToPoint = function (e, t, n) { var r = this.domElement.isConnected ? this.domElement.getBoundingClientRect() : { x: 0, y: 0, width: this.domElement.width, height: this.domElement.height, left: 0, top: 0 }, i = 1 / this.resolution; e.x = (t - r.left) * (this.domElement.width / r.width) * i, e.y = (n - r.top) * (this.domElement.height / r.height) * i; };
    e.prototype._normalizeToPointerData = function (e) { var t = []; if (this.supportsTouchEvents && e instanceof TouchEvent)
        for (var n_29 = 0, r_19 = e.changedTouches.length; n_29 < r_19; n_29++) {
            var r_20 = e.changedTouches[n_29];
            r_20.button === void 0 && (r_20.button = 0), r_20.buttons === void 0 && (r_20.buttons = 1), r_20.isPrimary === void 0 && (r_20.isPrimary = e.touches.length === 1 && e.type === "touchstart"), r_20.width === void 0 && (r_20.width = r_20.radiusX || 1), r_20.height === void 0 && (r_20.height = r_20.radiusY || 1), r_20.tiltX === void 0 && (r_20.tiltX = 0), r_20.tiltY === void 0 && (r_20.tiltY = 0), r_20.pointerType === void 0 && (r_20.pointerType = "touch"), r_20.pointerId === void 0 && (r_20.pointerId = r_20.identifier || 0), r_20.pressure === void 0 && (r_20.pressure = r_20.force || .5), r_20.twist === void 0 && (r_20.twist = 0), r_20.tangentialPressure === void 0 && (r_20.tangentialPressure = 0), r_20.layerX === void 0 && (r_20.layerX = r_20.offsetX = r_20.clientX), r_20.layerY === void 0 && (r_20.layerY = r_20.offsetY = r_20.clientY), r_20.isNormalized = !0, r_20.type = e.type, r_20.altKey != null || (r_20.altKey = e.altKey), r_20.ctrlKey != null || (r_20.ctrlKey = e.ctrlKey), r_20.metaKey != null || (r_20.metaKey = e.metaKey), r_20.shiftKey != null || (r_20.shiftKey = e.shiftKey), t.push(r_20);
        }
    else if (!globalThis.MouseEvent || e instanceof MouseEvent && (!this.supportsPointerEvents || !(e instanceof globalThis.PointerEvent))) {
        var n_30 = e;
        n_30.isPrimary === void 0 && (n_30.isPrimary = !0), n_30.width === void 0 && (n_30.width = 1), n_30.height === void 0 && (n_30.height = 1), n_30.tiltX === void 0 && (n_30.tiltX = 0), n_30.tiltY === void 0 && (n_30.tiltY = 0), n_30.pointerType === void 0 && (n_30.pointerType = "mouse"), n_30.pointerId === void 0 && (n_30.pointerId = ut), n_30.pressure === void 0 && (n_30.pressure = .5), n_30.twist === void 0 && (n_30.twist = 0), n_30.tangentialPressure === void 0 && (n_30.tangentialPressure = 0), n_30.isNormalized = !0, t.push(n_30);
    }
    else
        t.push(e); return t; };
    e.prototype.normalizeWheelEvent = function (e) { var t = this._rootWheelEvent; return this._transferMouseData(t, e), t.deltaX = e.deltaX, t.deltaY = e.deltaY, t.deltaZ = e.deltaZ, t.deltaMode = e.deltaMode, this.mapPositionToPoint(t.screen, e.clientX, e.clientY), t.global.copyFrom(t.screen), t.offset.copyFrom(t.screen), t.nativeEvent = e, t.type = e.type, t; };
    e.prototype._bootstrapEvent = function (e, t) { return e.originalEvent = null, e.nativeEvent = t, e.pointerId = t.pointerId, e.width = t.width, e.height = t.height, e.isPrimary = t.isPrimary, e.pointerType = t.pointerType, e.pressure = t.pressure, e.tangentialPressure = t.tangentialPressure, e.tiltX = t.tiltX, e.tiltY = t.tiltY, e.twist = t.twist, this._transferMouseData(e, t), this.mapPositionToPoint(e.screen, t.clientX, t.clientY), e.global.copyFrom(e.screen), e.offset.copyFrom(e.screen), e.isTrusted = t.isTrusted, e.type === "pointerleave" && (e.type = "pointerout"), e.type.startsWith("mouse") && (e.type = e.type.replace("mouse", "pointer")), e.type.startsWith("touch") && (e.type = dt[e.type] || e.type), e; };
    e.prototype._transferMouseData = function (e, t) { e.isTrusted = t.isTrusted, e.srcElement = t.srcElement, e.timeStamp = performance.now(), e.type = t.type, e.altKey = t.altKey, e.button = t.button, e.buttons = t.buttons, e.client.x = t.clientX, e.client.y = t.clientY, e.ctrlKey = t.ctrlKey, e.metaKey = t.metaKey, e.movement.x = t.movementX, e.movement.y = t.movementY, e.page.x = t.pageX, e.page.y = t.pageY, e.relatedTarget = null, e.shiftKey = t.shiftKey; };
    return e;
}()), Q.extension = { name: "events", type: [l.WebGLSystem, l.CanvasSystem, l.WebGPUSystem], priority: -1 }, Q.defaultEventFeatures = { move: !0, globalMove: !0, click: !0, wheel: !0 }, ft = Q; })))(); }
var mt;
function ht() { return (ht = e.n((function () { pt(), w(), mt = { onclick: null, oncontextmenu: null, onmousedown: null, onmouseenter: null, onmouseleave: null, onmousemove: null, onglobalmousemove: null, onmouseout: null, onmouseover: null, onmouseup: null, onmouseupoutside: null, onpointercancel: null, onpointerdown: null, onpointerenter: null, onpointerleave: null, onpointermove: null, onglobalpointermove: null, onpointerout: null, onpointerover: null, onpointertap: null, onpointerup: null, onpointerupoutside: null, onrightclick: null, onrightdown: null, onrightup: null, onrightupoutside: null, ontap: null, ontouchcancel: null, ontouchend: null, ontouchendoutside: null, ontouchmove: null, onglobaltouchmove: null, ontouchstart: null, onwheel: null, get interactive() { return this.eventMode === "dynamic" || this.eventMode === "static"; }, set interactive(e) { this.eventMode = e ? "static" : "passive"; }, _internalEventMode: void 0, get eventMode() { var e; return (e = this._internalEventMode) == null ? ft.defaultEventMode : e; }, set eventMode(e) { this._internalEventMode = e; }, isInteractive: function () { return this.eventMode === "static" || this.eventMode === "dynamic"; }, interactiveChildren: !0, hitArea: null, addEventListener: function (e, t, n) { var r = typeof n == "boolean" && n || typeof n == "object" && n.capture, i = typeof n == "object" ? n.signal : void 0, a = typeof n == "object" && n.once === !0, o = typeof t == "function" ? void 0 : t; e = r ? "".concat(e, "capture") : e; var s = typeof t == "function" ? t : t.handleEvent, c = this; i && i.addEventListener("abort", function () { c.off(e, s, o); }), a ? c.once(e, s, o) : c.on(e, s, o); }, removeEventListener: function (e, t, n) { var r = typeof n == "boolean" && n || typeof n == "object" && n.capture, i = typeof t == "function" ? void 0 : t; e = r ? "".concat(e, "capture") : e, t = typeof t == "function" ? t : t.handleEvent, this.off(e, t, i); }, dispatchEvent: function (e) { if (!(e instanceof C))
        throw Error("Container cannot propagate events outside of the Federated Events API"); return e.defaultPrevented = !1, e.path = null, e.target = this, e.manager.dispatchEvent(e), !e.defaultPrevented; } }; })))(); }
function gt(e) { return typeof e.getCanvasFilterString == "function"; }
var _t, vt;
function yt() { return (yt = e.n((function () { p(), s.w(), i.w(), a.M(), a.p(), c.w(), _t = (function () {
    function _t() {
        this.skip = !1, this.useClip = !1, this.filters = null, this.container = null, this.bounds = new a.j, this.cssFilterString = "";
    }
    return _t;
}()), vt = (function () {
    function vt(e) {
        this._filterStack = [], this._filterStackIndex = 0, this._savedStates = [], this._alphaMultiplier = 1, this._warnedFilterTypes = new Set, this.renderer = e;
    }
    vt.prototype.push = function (e) { var t = this._pushFilterFrame(), n = e.filterEffect.filters; if (t.skip = !1, t.useClip = !1, t.filters = n, t.container = e.container, t.cssFilterString = "", n.every(function (e) { return !e.enabled; })) {
        t.skip = !0;
        return;
    } var r = []; for (var _i = 0, n_31 = n; _i < n_31.length; _i++) {
        var e_26 = n_31[_i];
        if (!e_26.enabled)
            continue;
        if (!gt(e_26)) {
            this._warnUnsupportedFilter(e_26);
            continue;
        }
        var t_24 = e_26.getCanvasFilterString();
        t_24 === null ? this._warnUnsupportedFilter(e_26) : t_24 && r.push(t_24);
    } if (r.length === 0) {
        t.skip = !0;
        return;
    } t.cssFilterString = r.join(" "), this._calculateFilterArea(e, t.bounds), t.useClip = !!e.filterEffect.filterArea; var i = this.renderer.canvasContext.activeContext, a = i.filter || "none"; if (this._savedStates.push({ filter: a, alphaMultiplier: this._alphaMultiplier }), t.useClip && Number.isFinite(t.bounds.width) && Number.isFinite(t.bounds.height) && t.bounds.width > 0 && t.bounds.height > 0) {
        var e_27 = this.renderer.canvasContext.activeResolution || 1;
        i.save(), i.setTransform(1, 0, 0, 1, 0, 0), i.beginPath(), i.rect(t.bounds.x * e_27, t.bounds.y * e_27, t.bounds.width * e_27, t.bounds.height * e_27), i.clip();
    }
    else
        t.useClip = !1; t.cssFilterString && (i.filter = a === "none" ? t.cssFilterString : "".concat(a, " ").concat(t.cssFilterString)); };
    vt.prototype.pop = function () { var e = this._popFilterFrame(); if (e.skip)
        return; var t = this._savedStates.pop(); if (!t)
        return; var n = this.renderer.canvasContext.activeContext; e.useClip ? n.restore() : n.filter = t.filter, this._alphaMultiplier = t.alphaMultiplier; };
    vt.prototype.generateFilteredTexture = function (_a) {
        var e = _a.texture, t = _a.filters;
        var n, r;
        if (!(t != null && t.length) || t.every(function (e) { return !e.enabled; }))
            return e;
        var a = [];
        for (var _i = 0, t_25 = t; _i < t_25.length; _i++) {
            var e_28 = t_25[_i];
            if (!e_28.enabled)
                continue;
            if (!gt(e_28)) {
                this._warnUnsupportedFilter(e_28);
                continue;
            }
            var t_26 = e_28.getCanvasFilterString();
            t_26 === null ? this._warnUnsupportedFilter(e_28) : t_26 && a.push(t_26);
        }
        if (a.length === 0)
            return e;
        var o = s.C.getCanvasSource(e);
        if (!o)
            return e;
        var l = e.frame, u = (n = (r = e.source._resolution) == null ? e.source.resolution : r) == null ? 1 : n, d = l.width, f = l.height, _b = i.C.getOptimalCanvasAndContext(d, f, u), p = _b.canvas, m = _b.context;
        m.setTransform(1, 0, 0, 1, 0, 0), m.clearRect(0, 0, p.width, p.height), a.length && (m.filter = a.join(" "));
        var h = l.x * u, g = l.y * u, _ = d * u, v = f * u;
        return m.drawImage(o, h, g, _, v, 0, 0, _, v), m.filter = "none", m.globalAlpha = 1, c.C(p, d, f, u);
    };
    vt.prototype._calculateFilterArea = function (e, t) { if (e.renderables ? a.f(e.renderables, t) : e.filterEffect.filterArea ? (t.clear(), t.addRect(e.filterEffect.filterArea), t.applyMatrix(e.container.worldTransform)) : e.container.getFastGlobalBounds(!0, t), e.container) {
        var n_32 = e.container.renderGroup || e.container.parentRenderGroup, r_21 = n_32 == null ? void 0 : n_32.cacheToLocalTransform;
        r_21 && t.applyMatrix(r_21);
    } };
    vt.prototype._warnUnsupportedFilter = function (e) { var t; var n = (e == null || (t = e.constructor) == null ? void 0 : t.name) || "Filter"; this._warnedFilterTypes.has(n) || (this._warnedFilterTypes.add(n), console.warn("CanvasRenderer: filter \"".concat(n, "\" is not supported in Canvas2D and will be skipped."))); };
    Object.defineProperty(vt.prototype, "alphaMultiplier", {
        get: function () { return this._alphaMultiplier; },
        enumerable: false,
        configurable: true
    });
    vt.prototype._pushFilterFrame = function () { var e = this._filterStack[this._filterStackIndex]; return e || (e = this._filterStack[this._filterStackIndex] = new _t), this._filterStackIndex++, e; };
    vt.prototype._popFilterFrame = function () { return this._filterStackIndex <= 0 ? this._filterStack[0] : (this._filterStackIndex--, this._filterStack[this._filterStackIndex]); };
    vt.prototype.destroy = function () { this._filterStack = null, this._savedStates = null, this._warnedFilterTypes = null, this._alphaMultiplier = 1; };
    return vt;
}()), vt.extension = { type: [l.CanvasSystem], name: "filter" }; })))(); }
var bt;
function xt() {
    return (xt = e.n((function () {
        bt = "in vec2 aPosition;\nout vec2 vTextureCoord;\n\nuniform vec4 uInputSize;\nuniform vec4 uOutputFrame;\nuniform vec4 uOutputTexture;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;\n    \n    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;\n    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;\n\n    return vec4(position, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aPosition * (uOutputFrame.zw * uInputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n";
    })))();
}
var St;
function Ct() {
    return (Ct = e.n((function () {
        St = "in vec2 vTextureCoord;\nout vec4 finalColor;\nuniform sampler2D uTexture;\nvoid main() {\n    finalColor = texture(uTexture, vTextureCoord);\n}\n";
    })))();
}
var $;
function wt() {
    return (wt = e.n((function () {
        $ = "struct GlobalFilterUniforms {\n  uInputSize: vec4<f32>,\n  uInputPixel: vec4<f32>,\n  uInputClamp: vec4<f32>,\n  uOutputFrame: vec4<f32>,\n  uGlobalFrame: vec4<f32>,\n  uOutputTexture: vec4<f32>,\n};\n\n@group(0) @binding(0) var <uniform> gfu: GlobalFilterUniforms;\n@group(0) @binding(1) var uTexture: texture_2d<f32>;\n@group(0) @binding(2) var uSampler: sampler;\n\nstruct VSOutput {\n  @builtin(position) position: vec4<f32>,\n  @location(0) uv: vec2<f32>\n};\n\nfn filterVertexPosition(aPosition: vec2<f32>) -> vec4<f32>\n{\n    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;\n\n    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;\n    position.y = position.y * (2.0 * gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;\n\n    return vec4(position, 0.0, 1.0);\n}\n\nfn filterTextureCoord(aPosition: vec2<f32>) -> vec2<f32>\n{\n    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);\n}\n\n@vertex\nfn mainVertex(\n  @location(0) aPosition: vec2<f32>,\n) -> VSOutput {\n  return VSOutput(\n   filterVertexPosition(aPosition),\n   filterTextureCoord(aPosition)\n  );\n}\n\n@fragment\nfn mainFragment(\n  @location(0) uv: vec2<f32>,\n) -> @location(0) vec4<f32> {\n    return textureSample(uTexture, uSampler, uv);\n}\n";
    })))();
}
var Tt;
function Et() { return (Et = e.n((function () { s.P(), s.M(), U(), xt(), Ct(), wt(), Tt = (function (_super) {
    __extends(Tt, _super);
    function Tt() {
        var e = s.j.from({ vertex: { source: $, entryPoint: "mainVertex" }, fragment: { source: $, entryPoint: "mainFragment" }, name: "passthrough-filter" }), t = s.N.from({ vertex: bt, fragment: St, name: "passthrough-filter" });
        return _super.call(this, { gpuProgram: e, glProgram: t }) || this;
    }
    return Tt;
}(H)); })))(); }
var Dt;
function Ot() { return (Ot = e.n((function () { p(), Dt = (function () {
    function Dt(e) {
        this._renderer = e;
    }
    Dt.prototype.push = function (e, t, n) { this._renderer.renderPipes.batch.break(n), n.add({ renderPipeId: "filter", canBundle: !1, action: "pushFilter", container: t, filterEffect: e }); };
    Dt.prototype.pop = function (e, t, n) { this._renderer.renderPipes.batch.break(n), n.add({ renderPipeId: "filter", action: "popFilter", canBundle: !1 }); };
    Dt.prototype.execute = function (e) { e.action === "pushFilter" ? this._renderer.filter.push(e) : e.action === "popFilter" && this._renderer.filter.pop(); };
    Dt.prototype.destroy = function () { this._renderer = null; };
    return Dt;
}()), Dt.extension = { type: [l.WebGLPipes, l.WebGPUPipes, l.CanvasPipes], name: "filter" }; })))(); }
var kt, At, jt;
function Mt() { return (Mt = e.n((function () { p(), Et(), n.x(), s.A(), i.j(), i.Q(), i._t(), i.pt(), i.X(), a.M(), a.p(), r.L(), kt = new i.A({ attributes: { aPosition: { buffer: new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), format: "float32x2", stride: 8, offset: 0 } }, indexBuffer: new Uint32Array([0, 1, 2, 0, 2, 3]) }), At = (function () {
    function At() {
        this.skip = !1, this.inputTexture = null, this.backTexture = null, this.filters = null, this.bounds = new a.j, this.container = null, this.blendRequired = !1, this.outputRenderSurface = null, this.firstEnabledIndex = -1, this.lastEnabledIndex = -1;
    }
    return At;
}()), jt = (function () {
    function jt(e) {
        this._filterStackIndex = 0, this._filterStack = [], this._filterGlobalUniforms = new i.Z({ uInputSize: { value: new Float32Array(4), type: "vec4<f32>" }, uInputPixel: { value: new Float32Array(4), type: "vec4<f32>" }, uInputClamp: { value: new Float32Array(4), type: "vec4<f32>" }, uOutputFrame: { value: new Float32Array(4), type: "vec4<f32>" }, uGlobalFrame: { value: new Float32Array(4), type: "vec4<f32>" }, uOutputTexture: { value: new Float32Array(4), type: "vec4<f32>" } }), this._globalFilterBindGroup = new s.k({}), this.renderer = e;
    }
    Object.defineProperty(jt.prototype, "activeBackTexture", {
        get: function () { var e; return (e = this._activeFilterData) == null ? void 0 : e.backTexture; },
        enumerable: false,
        configurable: true
    });
    jt.prototype.push = function (e) { var t = this.renderer, n = e.filterEffect.filters, r = this._pushFilterData(); r.skip = !1, r.filters = n, r.container = e.container, r.outputRenderSurface = t.renderTarget.renderSurface; var i = t.renderTarget.renderTarget.colorTexture.source, a = i.resolution, o = i.antialias; if (n.every(function (e) { return !e.enabled; })) {
        r.skip = !0;
        return;
    } var s = r.bounds; if (this._calculateFilterArea(e, s), this._calculateFilterBounds(r, t.renderTarget.rootViewPort, o, a, 1), r.skip)
        return; var c = this._getPreviousFilterData(); this._setupFilterTextures(r, s, t, c); };
    jt.prototype.generateFilteredTexture = function (_a) {
        var e = _a.texture, t = _a.filters;
        if (t.every(function (e) { return !e.enabled; }))
            return e;
        var n = this._pushFilterData();
        this._activeFilterData = n, n.skip = !1, n.filters = t;
        var r = e.source, a = r.resolution, o = r.antialias, s = n.bounds;
        if (s.clear(), s.addRect(e.frame), this._calculateFilterBounds(n, s.rectangle, o, a, 0), n.skip)
            return this._popFilterData(), e;
        n.outputRenderSurface = i.ft.getOptimalTexture({ width: s.width, height: s.height, resolution: n.resolution, antialias: n.antialias }), n.backTexture = i.gt.EMPTY, n.inputTexture = e, this.renderer.renderTarget.finishRenderPass(), this._applyFiltersToTexture(n, !0);
        var c = n.outputRenderSurface;
        return c.source.alphaMode = "premultiplied-alpha", this._popFilterData(), c;
    };
    jt.prototype.pop = function () { var e = this.renderer, t = this._popFilterData(); t.skip || (e.globalUniforms.pop(), e.renderTarget.finishRenderPass(), this._activeFilterData = t, this._applyFiltersToTexture(t, !1), t.blendRequired && i.ft.returnTexture(t.backTexture), i.ft.returnTexture(t.inputTexture)); };
    jt.prototype.getBackTexture = function (e, t, n) { var r = e.colorTexture.source._resolution, a = i.ft.getOptimalTexture({ width: t.width, height: t.height, resolution: r }), o = t.minX, s = t.minY; n && (o -= n.minX, s -= n.minY), o = Math.floor(o * r), s = Math.floor(s * r); var c = Math.ceil(t.width * r), l = Math.ceil(t.height * r); return this.renderer.renderTarget.copyToTexture(e, a, { x: o, y: s }, { width: c, height: l }, { x: 0, y: 0 }), a; };
    jt.prototype.applyFilter = function (e, t, n, r) { var i = this.renderer, a = this._activeFilterData, o = a.outputRenderSurface === n, s = this._findClosestFilterData(), c = s ? s.inputTexture.source._resolution : i.renderTarget.rootRenderTarget.colorTexture.source._resolution, l = 0, u = 0; o && s && (l = s.bounds.minX, u = s.bounds.minY), this._updateFilterUniforms(t, n, a, l, u, c, o, r); var d = e.enabled ? e : this._getPassthroughFilter(); this._setupBindGroupsAndRender(d, t, i); };
    jt.prototype.calculateSpriteMatrix = function (e, t) { var r = this._activeFilterData, i = e.set(r.inputTexture._source.width, 0, 0, r.inputTexture._source.height, r.bounds.minX, r.bounds.minY), a = t.worldTransform.copyTo(n.b.shared), o = t.renderGroup || t.parentRenderGroup; return o && o.cacheToLocalTransform && a.prepend(o.cacheToLocalTransform), a.invert(), i.prepend(a), i.scale(1 / t.texture.orig.width, 1 / t.texture.orig.height), i.translate(t.anchor.x, t.anchor.y), i; };
    jt.prototype.destroy = function () { var e; (e = this._passthroughFilter) == null || e.destroy(!0), this._passthroughFilter = null; };
    jt.prototype._getPassthroughFilter = function () { return this._passthroughFilter != null || (this._passthroughFilter = new Tt), this._passthroughFilter; };
    jt.prototype._setupBindGroupsAndRender = function (e, t, n) { if (n.renderPipes.uniformBatch) {
        var e_29 = n.renderPipes.uniformBatch.getUboResource(this._filterGlobalUniforms);
        this._globalFilterBindGroup.setResource(e_29, 0);
    }
    else
        this._globalFilterBindGroup.setResource(this._filterGlobalUniforms, 0); this._globalFilterBindGroup.setResource(t.source, 1), this._globalFilterBindGroup.setResource(t.source.style, 2), e.groups[0] = this._globalFilterBindGroup, n.encoder.draw({ geometry: kt, shader: e, state: e._state, topology: "triangle-list" }), n.type === i.Y.WEBGL && n.renderTarget.finishRenderPass(); };
    jt.prototype._setupFilterTextures = function (e, t, n, r) { if (e.backTexture = i.gt.EMPTY, e.inputTexture = i.ft.getOptimalTexture({ width: t.width, height: t.height, resolution: e.resolution, antialias: e.antialias }), e.blendRequired) {
        n.renderTarget.finishRenderPass();
        var i_7 = n.renderTarget.getRenderTarget(e.outputRenderSurface);
        e.backTexture = this.getBackTexture(i_7, t, r == null ? void 0 : r.bounds);
    } n.renderTarget.bind({ target: e.inputTexture, clear: !0 }), n.globalUniforms.push({ offset: t }); };
    jt.prototype._updateFilterUniforms = function (e, t, n, r, a, o, s, c) { var l = this._filterGlobalUniforms.uniforms, u = l.uOutputFrame, d = l.uInputSize, f = l.uInputPixel, p = l.uInputClamp, m = l.uGlobalFrame, h = l.uOutputTexture; s ? (u[0] = n.bounds.minX - r, u[1] = n.bounds.minY - a) : (u[0] = 0, u[1] = 0), u[2] = e.frame.width, u[3] = e.frame.height, d[0] = e.source.width, d[1] = e.source.height, d[2] = 1 / d[0], d[3] = 1 / d[1], f[0] = e.source.pixelWidth, f[1] = e.source.pixelHeight, f[2] = 1 / f[0], f[3] = 1 / f[1], p[0] = .5 * f[2], p[1] = .5 * f[3], p[2] = e.frame.width * d[2] - .5 * f[2], p[3] = e.frame.height * d[3] - .5 * f[3]; var g = this.renderer.renderTarget.rootRenderTarget.colorTexture; m[0] = r * o, m[1] = a * o, m[2] = g.source.width * o, m[3] = g.source.height * o, t instanceof i.gt && (t.source.resource = null); var _ = this.renderer.renderTarget.getRenderTarget(t); this.renderer.renderTarget.bind({ target: t, clear: !!c }), t instanceof i.gt ? (h[0] = t.frame.width, h[1] = t.frame.height) : (h[0] = _.width, h[1] = _.height), h[2] = _.isRoot ? -1 : 1, this._filterGlobalUniforms.update(); };
    jt.prototype._findClosestFilterData = function () { for (var e_30 = this._filterStackIndex - 1; e_30 >= 0; e_30--) {
        var t_27 = this._filterStack[e_30];
        if (!t_27.skip)
            return t_27;
    } return null; };
    jt.prototype._calculateFilterArea = function (e, t) { if (e.renderables ? a.f(e.renderables, t) : e.filterEffect.filterArea ? (t.clear(), t.addRect(e.filterEffect.filterArea), t.applyMatrix(e.container.worldTransform)) : e.container.getFastGlobalBounds(!0, t), e.container) {
        var n_33 = (e.container.renderGroup || e.container.parentRenderGroup).cacheToLocalTransform;
        n_33 && t.applyMatrix(n_33);
    } };
    jt.prototype._applyFiltersToTexture = function (e, t) { var n = e.inputTexture, r = e.bounds, a = e.filters, o = e.firstEnabledIndex, s = e.lastEnabledIndex; if (this._globalFilterBindGroup.setResource(n.source.style, 2), this._globalFilterBindGroup.setResource(e.backTexture.source, 3), o === s)
        a[o].apply(this, n, e.outputRenderSurface, t);
    else {
        var n_34 = e.inputTexture, c_3 = i.ft.getOptimalTexture({ width: r.width, height: r.height, resolution: n_34.source._resolution }), l_2 = c_3;
        for (var e_31 = o; e_31 < s; e_31++) {
            var t_28 = a[e_31];
            if (!t_28.enabled)
                continue;
            t_28.apply(this, n_34, l_2, !0);
            var r_22 = n_34;
            n_34 = l_2, l_2 = r_22;
        }
        a[s].apply(this, n_34, e.outputRenderSurface, t), i.ft.returnTexture(c_3);
    } };
    jt.prototype._calculateFilterBounds = function (e, t, n, i, a) { var o = this.renderer, s = e.bounds, c = e.filters, l = 1 / 0, u = 0, d = !0, f = !1, p = !1, m = !0, h = -1, g = -1; for (var e_32 = 0; e_32 < c.length; e_32++) {
        var _, v;
        var t_29 = c[e_32];
        if (t_29.enabled) {
            if (h === -1 && (h = e_32), g = e_32, l = Math.min(l, t_29.resolution === "inherit" ? i : t_29.resolution), u += t_29.padding, t_29.antialias === "off" ? d = !1 : t_29.antialias === "inherit" && d && (d = n), t_29.clipToViewport || (m = !1), !(t_29.compatibleRenderers & o.type)) {
                p = !1;
                break;
            }
            if (t_29.blendRequired && !((_ = (v = o.backBuffer) == null ? void 0 : v.useBackBuffer) == null || _)) {
                r.R("Blend filter requires backBuffer on WebGL renderer to be enabled. Set `useBackBuffer: true` in the renderer options."), p = !1;
                break;
            }
            p = !0, f || (f = t_29.blendRequired);
        }
    } p ? (m && s.fitBounds(0, t.width / i, 0, t.height / i), s.scale(l).ceil().scale(1 / l).pad((u | 0) * a), s.isPositive ? (e.antialias = d, e.resolution = l, e.blendRequired = f, e.firstEnabledIndex = h, e.lastEnabledIndex = g) : e.skip = !0) : e.skip = !0; };
    jt.prototype._popFilterData = function () { return this._filterStackIndex--, this._filterStack[this._filterStackIndex]; };
    jt.prototype._getPreviousFilterData = function () { for (var e_33 = this._filterStackIndex - 2; e_33 >= 0; e_33--) {
        var t_30 = this._filterStack[e_33];
        if (!t_30.skip)
            return t_30;
    } return null; };
    jt.prototype._pushFilterData = function () { var e = this._filterStack[this._filterStackIndex]; return e || (e = this._filterStack[this._filterStackIndex] = new At), this._filterStackIndex++, e; };
    return jt;
}()), jt.extension = { type: [l.WebGLSystem, l.WebGPUSystem], name: "filter" }; })))(); }
var Nt;
function Pt() {
    return (Pt = e.n((function () {
        Nt = "in vec2 vMaskCoord;\nin vec2 vTextureCoord;\n\nuniform sampler2D uTexture;\nuniform sampler2D uMaskTexture;\n\nuniform float uAlpha;\nuniform vec4 uMaskClamp;\nuniform float uInverse;\nuniform float uChannel;\n\nout vec4 finalColor;\n\nvoid main(void)\n{\n    float clip = step(3.5,\n        step(uMaskClamp.x, vMaskCoord.x) +\n        step(uMaskClamp.y, vMaskCoord.y) +\n        step(vMaskCoord.x, uMaskClamp.z) +\n        step(vMaskCoord.y, uMaskClamp.w));\n\n    // TODO look into why this is needed\n    float npmAlpha = uAlpha;\n    vec4 original = texture(uTexture, vTextureCoord);\n    vec4 masky = texture(uMaskTexture, vMaskCoord);\n\n    float a;\n    if (uChannel == 1.0) {\n        a = masky.a * npmAlpha * clip;\n    } else {\n        float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);\n        a = alphaMul * masky.r * npmAlpha * clip;\n    }\n\n    if (uInverse == 1.0) {\n        a = 1.0 - a;\n    }\n\n    finalColor = original * a;\n}\n";
    })))();
}
var Ft;
function It() {
    return (It = e.n((function () {
        Ft = "in vec2 aPosition;\n\nout vec2 vTextureCoord;\nout vec2 vMaskCoord;\n\n\nuniform vec4 uInputSize;\nuniform vec4 uOutputFrame;\nuniform vec4 uOutputTexture;\nuniform mat3 uFilterMatrix;\n\nvec4 filterVertexPosition(  vec2 aPosition )\n{\n    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;\n       \n    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;\n    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;\n\n    return vec4(position, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord(  vec2 aPosition )\n{\n    return aPosition * (uOutputFrame.zw * uInputSize.zw);\n}\n\nvec2 getFilterCoord( vec2 aPosition )\n{\n    return  ( uFilterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;\n}   \n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition(aPosition);\n    vTextureCoord = filterTextureCoord(aPosition);\n    vMaskCoord = getFilterCoord(aPosition);\n}\n";
    })))();
}
var Lt;
function Rt() {
    return (Rt = e.n((function () {
        Lt = "struct GlobalFilterUniforms {\n  uInputSize:vec4<f32>,\n  uInputPixel:vec4<f32>,\n  uInputClamp:vec4<f32>,\n  uOutputFrame:vec4<f32>,\n  uGlobalFrame:vec4<f32>,\n  uOutputTexture:vec4<f32>,\n};\n\nstruct MaskUniforms {\n  uFilterMatrix:mat3x3<f32>,\n  uMaskClamp:vec4<f32>,\n  uAlpha:f32,\n  uInverse:f32,\n  uChannel:f32,\n};\n\n@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;\n@group(0) @binding(1) var uTexture: texture_2d<f32>;\n@group(0) @binding(2) var uSampler : sampler;\n\n@group(1) @binding(0) var<uniform> filterUniforms : MaskUniforms;\n@group(1) @binding(1) var uMaskTexture: texture_2d<f32>;\n\nstruct VSOutput {\n    @builtin(position) position: vec4<f32>,\n    @location(0) uv : vec2<f32>,\n    @location(1) filterUv : vec2<f32>,\n};\n\nfn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>\n{\n    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;\n\n    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;\n    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;\n\n    return vec4(position, 0.0, 1.0);\n}\n\nfn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>\n{\n    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);\n}\n\nfn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>\n{\n  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);\n}\n\nfn getFilterCoord(aPosition:vec2<f32> ) -> vec2<f32>\n{\n  return ( filterUniforms.uFilterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;\n}\n\nfn getSize() -> vec2<f32>\n{\n  return gfu.uGlobalFrame.zw;\n}\n\n@vertex\nfn mainVertex(\n  @location(0) aPosition : vec2<f32>,\n) -> VSOutput {\n  return VSOutput(\n   filterVertexPosition(aPosition),\n   filterTextureCoord(aPosition),\n   getFilterCoord(aPosition)\n  );\n}\n\n@fragment\nfn mainFragment(\n  @location(0) uv: vec2<f32>,\n  @location(1) filterUv: vec2<f32>,\n  @builtin(position) position: vec4<f32>\n) -> @location(0) vec4<f32> {\n\n    var maskClamp = filterUniforms.uMaskClamp;\n    var uAlpha = filterUniforms.uAlpha;\n\n    var clip = step(3.5,\n      step(maskClamp.x, filterUv.x) +\n      step(maskClamp.y, filterUv.y) +\n      step(filterUv.x, maskClamp.z) +\n      step(filterUv.y, maskClamp.w));\n\n    var mask = textureSample(uMaskTexture, uSampler, filterUv);\n    var source = textureSample(uTexture, uSampler, uv);\n\n    var a: f32;\n    if (filterUniforms.uChannel == 1.0) {\n        a = mask.a * uAlpha * clip;\n    } else {\n        var alphaMul = 1.0 - uAlpha * (1.0 - mask.a);\n        a = alphaMul * mask.r * uAlpha * clip;\n    }\n\n    if (filterUniforms.uInverse == 1.0) {\n        a = 1.0 - a;\n    }\n\n    return source * a;\n}\n";
    })))();
}
var zt, Bt;
function Vt() { return (Vt = e.n((function () { n.x(), s.P(), s.M(), i.Q(), i._t(), i.yt(), r.L(), U(), Pt(), It(), Rt(), t.i(), t.o(), zt = ["sprite"], Bt = (function (_super) {
    __extends(Bt, _super);
    function Bt(e) {
        var _this = this;
        var r = e.sprite, a = t.r(e, zt), o = new i.vt(r.texture), c = new i.Z({ uFilterMatrix: { value: new n.b, type: "mat3x3<f32>" }, uMaskClamp: { value: o.uClampFrame, type: "vec4<f32>" }, uAlpha: { value: 1, type: "f32" }, uInverse: { value: +!!e.inverse, type: "f32" }, uChannel: { value: +(e.channel === "alpha"), type: "f32" } }), l = s.j.from({ vertex: { source: Lt, entryPoint: "mainVertex" }, fragment: { source: Lt, entryPoint: "mainFragment" } }), u = s.N.from({ vertex: Ft, fragment: Nt, name: "mask-filter" });
        _this = _super.call(this, t.a(t.a({}, a), {}, { gpuProgram: l, glProgram: u, clipToViewport: !1, resources: { filterUniforms: c, uMaskTexture: r.texture.source } })) || this, _this.sprite = r, _this._textureMatrix = o;
        return _this;
    }
    Bt.prototype.setSprite = function (e) { this.sprite = e; var t = this._getSafeTexture(); this._textureMatrix.texture = t, this.resources.uMaskTexture = t.source; };
    Object.defineProperty(Bt.prototype, "inverse", {
        get: function () { return this.resources.filterUniforms.uniforms.uInverse === 1; },
        set: function (e) { this.resources.filterUniforms.uniforms.uInverse = +!!e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bt.prototype, "channel", {
        get: function () { return this.resources.filterUniforms.uniforms.uChannel === 1 ? "alpha" : "red"; },
        set: function (e) { this.resources.filterUniforms.uniforms.uChannel = +(e === "alpha"); },
        enumerable: false,
        configurable: true
    });
    Bt.prototype.apply = function (e, t, n, r) { var i = this._getSafeTexture(); this._textureMatrix.texture = i, e.calculateSpriteMatrix(this.resources.filterUniforms.uniforms.uFilterMatrix, this.sprite).prepend(this._textureMatrix.mapCoord), this.resources.uMaskTexture = i.source, e.applyFilter(this, t, n, r); };
    Bt.prototype._getSafeTexture = function () { var e = this.sprite.texture; return e.destroyed || !e.source || e.source.destroyed ? (r.R("[MaskFilter] The mask texture was destroyed while the mask is still in use. Remove the mask before destroying its texture."), i.gt.EMPTY) : e; };
    Bt.prototype.destroy = function (e) {
        if (e === void 0) { e = !1; }
        this._textureMatrix.destroy(), _super.prototype.destroy.call(this, e);
    };
    return Bt;
}(H)); })))(); }
Object.defineProperty(exports, "A", { enumerable: !0, get: function () { return ye; } }), Object.defineProperty(exports, "B", { enumerable: !0, get: function () { return ie; } }), Object.defineProperty(exports, "C", { enumerable: !0, get: function () { return Fe; } }), Object.defineProperty(exports, "D", { enumerable: !0, get: function () { return Te; } }), Object.defineProperty(exports, "E", { enumerable: !0, get: function () { return Oe; } }), Object.defineProperty(exports, "F", { enumerable: !0, get: function () { return se; } }), Object.defineProperty(exports, "G", { enumerable: !0, get: function () { return m; } }), Object.defineProperty(exports, "H", { enumerable: !0, get: function () { return ne; } }), Object.defineProperty(exports, "I", { enumerable: !0, get: function () { return ce; } }), Object.defineProperty(exports, "J", { enumerable: !0, get: function () { return f; } }), Object.defineProperty(exports, "K", { enumerable: !0, get: function () { return h; } }), Object.defineProperty(exports, "L", { enumerable: !0, get: function () { return ae; } }), Object.defineProperty(exports, "M", { enumerable: !0, get: function () { return _e; } }), Object.defineProperty(exports, "N", { enumerable: !0, get: function () { return fe; } }), Object.defineProperty(exports, "O", { enumerable: !0, get: function () { return Ee; } }), Object.defineProperty(exports, "P", { enumerable: !0, get: function () { return pe; } }), Object.defineProperty(exports, "R", { enumerable: !0, get: function () { return oe; } }), Object.defineProperty(exports, "S", { enumerable: !0, get: function () { return Ue; } }), Object.defineProperty(exports, "T", { enumerable: !0, get: function () { return De; } }), Object.defineProperty(exports, "U", { enumerable: !0, get: function () { return _; } }), Object.defineProperty(exports, "V", { enumerable: !0, get: function () { return te; } }), Object.defineProperty(exports, "W", { enumerable: !0, get: function () { return g; } }), Object.defineProperty(exports, "Y", { enumerable: !0, get: function () { return p; } }), Object.defineProperty(exports, "_", { enumerable: !0, get: function () { return Je; } }), Object.defineProperty(exports, "a", { enumerable: !0, get: function () { return Dt; } }), Object.defineProperty(exports, "b", { enumerable: !0, get: function () { return Ge; } }), Object.defineProperty(exports, "c", { enumerable: !0, get: function () { return yt; } }), Object.defineProperty(exports, "d", { enumerable: !0, get: function () { return ft; } }), Object.defineProperty(exports, "f", { enumerable: !0, get: function () { return pt; } }), Object.defineProperty(exports, "g", { enumerable: !0, get: function () { return Ye; } }), Object.defineProperty(exports, "h", { enumerable: !0, get: function () { return $e; } }), Object.defineProperty(exports, "i", { enumerable: !0, get: function () { return Mt; } }), Object.defineProperty(exports, "j", { enumerable: !0, get: function () { return ge; } }), Object.defineProperty(exports, "k", { enumerable: !0, get: function () { return ve; } }), Object.defineProperty(exports, "l", { enumerable: !0, get: function () { return mt; } }), Object.defineProperty(exports, "m", { enumerable: !0, get: function () { return tt; } }), Object.defineProperty(exports, "n", { enumerable: !0, get: function () { return Vt; } }), Object.defineProperty(exports, "o", { enumerable: !0, get: function () { return Ot; } }), Object.defineProperty(exports, "p", { enumerable: !0, get: function () { return et; } }), Object.defineProperty(exports, "q", { enumerable: !0, get: function () { return l; } }), Object.defineProperty(exports, "r", { enumerable: !0, get: function () { return jt; } }), Object.defineProperty(exports, "s", { enumerable: !0, get: function () { return vt; } }), Object.defineProperty(exports, "t", { enumerable: !0, get: function () { return Bt; } }), Object.defineProperty(exports, "u", { enumerable: !0, get: function () { return ht; } }), Object.defineProperty(exports, "v", { enumerable: !0, get: function () { return qe; } }), Object.defineProperty(exports, "w", { enumerable: !0, get: function () { return Ae; } }), Object.defineProperty(exports, "x", { enumerable: !0, get: function () { return He; } }), Object.defineProperty(exports, "y", { enumerable: !0, get: function () { return We; } }), Object.defineProperty(exports, "z", { enumerable: !0, get: function () { return re; } });
