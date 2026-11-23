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
var e = require("./rolldown-runtime-8PkXcCTM.js"), t = require("./sapling-engine-OS5i6gdH.js"), n = require("./sapling-engine-Dk_0uYx9.js"), r = require("./sapling-engine-nIouhjEF.js"), i = require("./sapling-engine-sX7qVz9U.js"), a = require("./sapling-engine-6sEQUsKX.js"), o = require("./sapling-engine-BIAzTs9D.js");
function s(e) {
    if (e === void 0) { e = "default"; }
    return c[e] === void 0 && (c[e] = -1), ++c[e];
}
var c;
function l() { return (l = e.n((function () { c = { default: -1 }; })))(); }
var u, d, f, p, m, h, g;
function ee() {
    return (ee = e.n((function () {
        u = new Set, d = "8.0.0", f = "8.3.4", p = "8.21.0", m = "8.22.0", h = { quiet: !1, noColor: !1 }, g = (function (e, t, n) {
            if (n === void 0) { n = 3; }
            if (h.quiet || u.has(t))
                return;
            var r = Error().stack, i = "".concat(t, "\nDeprecated since v").concat(e), a = typeof console.groupCollapsed == "function" && !h.noColor;
            r === void 0 ? console.warn("PixiJS Deprecation Warning: ", i) : (r = r.split("\n").splice(n).join("\n"), a ? (console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s", "color:#614108;background:#fffbe6", "font-weight:normal;color:#614108;background:#fffbe6", i), console.warn(r), console.groupEnd()) : (console.warn("PixiJS Deprecation Warning: ", i), console.warn(r))), u.add(t);
        }), Object.defineProperties(g, { quiet: { get: function () { return h.quiet; }, set: function (e) { h.quiet = e; }, enumerable: !0, configurable: !1 }, noColor: { get: function () { return h.noColor; }, set: function (e) { h.noColor = e; }, enumerable: !0, configurable: !1 } });
    })))();
}
var te;
function _() { return (_ = e.n((function () { te = function () { }; })))(); }
function ne(e, t, n) { var _a = n.orig, r = _a.width, i = _a.height, a = n.trim; if (a) {
    var n_1 = a.width, o_1 = a.height;
    e.minX = a.x - t._x * r, e.maxX = e.minX + n_1, e.minY = a.y - t._y * i, e.maxY = e.minY + o_1;
}
else
    e.minX = -t._x * r, e.maxX = e.minX + r, e.minY = -t._y * i, e.maxY = e.minY + i; }
function v() { return (v = e.n((function () { })))(); }
function re() {
    var e = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        e[_i] = arguments[_i];
    }
    y !== b && (y++, y === b ? console.warn("PixiJS Warning: too many warnings, no more warnings will be reported to the console by PixiJS.") : console.warn.apply(console, __spreadArray(["PixiJS Warning: "], e, false)));
}
var y, b;
function x() { return (x = e.n((function () { y = 0, b = 500; })))(); }
var S;
function C() { return (C = e.n((function () { S = { _registeredResources: new Set, register: function (e) { this._registeredResources.add(e); }, unregister: function (e) { this._registeredResources.delete(e); }, release: function () { this._registeredResources.forEach(function (e) { return e.clear(); }); }, get registeredCount() { return this._registeredResources.size; }, isRegistered: function (e) { return this._registeredResources.has(e); }, reset: function () { this._registeredResources.clear(); } }; })))(); }
var w;
function T() { return (T = e.n((function () { w = (function () {
    function w(e, t) {
        this._pool = [], this._count = 0, this._index = 0, this._classType = e, t && this.prepopulate(t);
    }
    w.prototype.prepopulate = function (e) { for (var t_1 = 0; t_1 < e; t_1++)
        this._pool[this._index++] = new this._classType; this._count += e; };
    w.prototype.get = function (e) { var t; var n; return this._index > 0 ? n = this._pool[--this._index] : (n = new this._classType, this._count++), (t = n.init) == null || t.call(n, e), n; };
    w.prototype.return = function (e) { var t; (t = e.reset) == null || t.call(e), this._pool[this._index++] = e; };
    Object.defineProperty(w.prototype, "totalSize", {
        get: function () { return this._count; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(w.prototype, "totalFree", {
        get: function () { return this._index; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(w.prototype, "totalUsed", {
        get: function () { return this._count - this._index; },
        enumerable: false,
        configurable: true
    });
    w.prototype.clear = function () { if (this._pool.length > 0 && this._pool[0].destroy)
        for (var e_1 = 0; e_1 < this._index; e_1++)
            this._pool[e_1].destroy(); this._pool.length = 0, this._count = 0, this._index = 0; };
    return w;
}()); })))(); }
var E, D;
function ie() { return (ie = e.n((function () { C(), T(), E = (function () {
    function E() {
        this._poolsByClass = new Map;
    }
    E.prototype.prepopulate = function (e, t) { this.getPool(e).prepopulate(t); };
    E.prototype.get = function (e, t) { return this.getPool(e).get(t); };
    E.prototype.return = function (e) { this.getPool(e.constructor).return(e); };
    E.prototype.getPool = function (e) { return this._poolsByClass.has(e) || this._poolsByClass.set(e, new w(e)), this._poolsByClass.get(e); };
    E.prototype.stats = function () { var e = {}; return this._poolsByClass.forEach(function (t) { var n = e[t._classType.name] ? t._classType.name + t._classType.ID : t._classType.name; e[n] = { free: t.totalFree, used: t.totalUsed, size: t.totalSize }; }), e; };
    E.prototype.clear = function () { this._poolsByClass.forEach(function (e) { return e.clear(); }), this._poolsByClass.clear(); };
    return E;
}()), D = new E, S.register(D); })))(); }
function ae(e, t, n) { var r = e.length, i; if (t >= r || n === 0)
    return; n = t + n > r ? r - t : n; var a = r - n; for (i = t; i < a; ++i)
    e[i] = e[i + n]; e.length = a; }
function oe() { return (oe = e.n((function () { })))(); }
var O;
function k() { return (k = e.n((function () { O = (function (e) { return (e[e.INTERACTION = 50] = "INTERACTION", e[e.HIGH = 25] = "HIGH", e[e.NORMAL = 0] = "NORMAL", e[e.LOW = -25] = "LOW", e[e.UTILITY = -50] = "UTILITY", e); })(O || {}); })))(); }
var A;
function se() { return (se = e.n((function () { A = (function () {
    function A(e, t, n, r) {
        if (t === void 0) { t = null; }
        if (n === void 0) { n = 0; }
        if (r === void 0) { r = !1; }
        this.next = null, this.previous = null, this._destroyed = !1, this._fn = e, this._context = t, this.priority = n, this._once = r;
    }
    A.prototype.match = function (e, t) {
        if (t === void 0) { t = null; }
        return this._fn === e && this._context === t;
    };
    A.prototype.emit = function (e) { this._fn && (this._context ? this._fn.call(this._context, e) : this._fn(e)); var t = this.next; return this._once && this.destroy(!0), this._destroyed && (this.next = null), t; };
    A.prototype.connect = function (e) { this.previous = e, e.next && (e.next.previous = this), this.next = e.next, e.next = this; };
    A.prototype.destroy = function (e) {
        if (e === void 0) { e = !1; }
        this._destroyed = !0, this._fn = null, this._context = null, this.previous && (this.previous.next = this.next), this.next && (this.next.previous = this.previous);
        var t = this.next;
        return this.next = e ? null : t, this.previous = null, t;
    };
    return A;
}()); })))(); }
var j, M;
function N() { return (N = e.n((function () { k(), se(), j = (function () {
    function e() {
        var _this = this;
        this.autoStart = !1, this.deltaTime = 1, this.lastTime = -1, this.speed = 1, this.started = !1, this._requestId = null, this._maxElapsedMS = 100, this._minElapsedMS = 0, this._protected = !1, this._lastFrame = -1, this._head = new A(null, null, 1 / 0), this.deltaMS = 1 / e.targetFPMS, this.elapsedMS = 1 / e.targetFPMS, this._tick = function (e) { _this._requestId = null, _this.started && (_this.update(e), _this.started && _this._requestId === null && _this._head.next && (_this._requestId = requestAnimationFrame(_this._tick))); };
    }
    e.prototype._requestIfNeeded = function () { this._requestId === null && this._head.next && (this.lastTime = performance.now(), this._lastFrame = this.lastTime, this._requestId = requestAnimationFrame(this._tick)); };
    e.prototype._cancelIfNeeded = function () { this._requestId !== null && (cancelAnimationFrame(this._requestId), this._requestId = null); };
    e.prototype._startIfPossible = function () { this.started ? this._requestIfNeeded() : this.autoStart && this.start(); };
    e.prototype.add = function (e, t, n) {
        if (n === void 0) { n = O.NORMAL; }
        return this._addListener(new A(e, t, n));
    };
    e.prototype.addOnce = function (e, t, n) {
        if (n === void 0) { n = O.NORMAL; }
        return this._addListener(new A(e, t, n, !0));
    };
    e.prototype._addListener = function (e) { var t = this._head.next, n = this._head; if (!t)
        e.connect(n);
    else {
        for (; t;) {
            if (e.priority > t.priority) {
                e.connect(n);
                break;
            }
            n = t, t = t.next;
        }
        e.previous || e.connect(n);
    } return this._startIfPossible(), this; };
    e.prototype.remove = function (e, t) { var n = this._head.next; for (; n;)
        n = n.match(e, t) ? n.destroy() : n.next; return this._head.next || this._cancelIfNeeded(), this; };
    Object.defineProperty(e.prototype, "count", {
        get: function () { if (!this._head)
            return 0; var e = 0, t = this._head; for (; t = t.next;)
            e++; return e; },
        enumerable: false,
        configurable: true
    });
    e.prototype.start = function () { this.started || (this.started = !0, this._requestIfNeeded()); };
    e.prototype.stop = function () { this.started && (this.started = !1, this._cancelIfNeeded()); };
    e.prototype.destroy = function () { if (!this._protected) {
        this.stop();
        var e_2 = this._head.next;
        for (; e_2;)
            e_2 = e_2.destroy(!0);
        this._head.destroy(), this._head = null;
    } };
    e.prototype.update = function (t) {
        if (t === void 0) { t = performance.now(); }
        var n;
        if (t > this.lastTime) {
            if (n = this.elapsedMS = t - this.lastTime, n > this._maxElapsedMS && (n = this._maxElapsedMS), n *= this.speed, this._minElapsedMS) {
                var e_3 = t - this._lastFrame | 0;
                if (e_3 < this._minElapsedMS)
                    return;
                this._lastFrame = t - e_3 % this._minElapsedMS;
            }
            this.deltaMS = n, this.deltaTime = this.deltaMS * e.targetFPMS;
            var r_1 = this._head, i_1 = r_1.next;
            for (; i_1;)
                i_1 = i_1.emit(this);
            r_1.next || this._cancelIfNeeded();
        }
        else
            this.deltaTime = this.deltaMS = this.elapsedMS = 0;
        this.lastTime = t;
    };
    Object.defineProperty(e.prototype, "FPS", {
        get: function () { return 1e3 / this.elapsedMS; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "minFPS", {
        get: function () { return 1e3 / this._maxElapsedMS; },
        set: function (t) { var n = Math.min(Math.max(0, t) / 1e3, e.targetFPMS); this._maxElapsedMS = 1 / n, this._minElapsedMS && t > this.maxFPS && (this.maxFPS = t); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "maxFPS", {
        get: function () { return this._minElapsedMS ? Math.round(1e3 / this._minElapsedMS) : 0; },
        set: function (e) { e === 0 ? this._minElapsedMS = 0 : (e < this.minFPS && (this.minFPS = e), this._minElapsedMS = 1 / (e / 1e3)); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e, "shared", {
        get: function () { if (!e._shared) {
            var t_2 = e._shared = new e;
            t_2.autoStart = !0, t_2._protected = !0;
        } return e._shared; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e, "system", {
        get: function () { if (!e._system) {
            var t_3 = e._system = new e;
            t_3.autoStart = !0, t_3._protected = !0;
        } return e._system; },
        enumerable: false,
        configurable: true
    });
    return e;
}()), j.targetFPMS = .06, M = j; })))(); }
function ce() {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            return [2, (P != null || (P = (function () { return __awaiter(_this, void 0, void 0, function () { var e, t, r, i, a, o; return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            t = n.N.get().createCanvas(1, 1).getContext("webgl");
                            if (!t)
                                return [2, "premultiply-alpha-on-upload"];
                            return [4, new Promise(function (e) { var t = document.createElement("video"); t.onloadeddata = function () { return e(t); }, t.onerror = function () { return e(null); }, t.autoplay = !1, t.crossOrigin = "anonymous", t.preload = "auto", t.src = "data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=", t.load(); })];
                        case 1:
                            r = _a.sent();
                            if (!r)
                                return [2, "premultiply-alpha-on-upload"];
                            i = t.createTexture();
                            t.bindTexture(t.TEXTURE_2D, i);
                            a = t.createFramebuffer();
                            t.bindFramebuffer(t.FRAMEBUFFER, a), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, i, 0), t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL, t.NONE), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, r);
                            o = new Uint8Array(4);
                            return [2, (t.readPixels(0, 0, 1, 1, t.RGBA, t.UNSIGNED_BYTE, o), t.deleteFramebuffer(a), t.deleteTexture(i), (e = t.getExtension("WEBGL_lose_context")) == null || e.loseContext(), o[0] <= o[3] ? "premultiplied-alpha" : "premultiply-alpha-on-upload")];
                    }
                }); }); })()), P)];
        });
    });
}
var P;
function F() { return (F = e.n((function () { n.P(); })))(); }
function I(e) { if (typeof e != "string")
    throw TypeError("Path must be a string. Received ".concat(JSON.stringify(e))); }
function L(e) { return e.split("?")[0].split("#")[0]; }
function le(e) { return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }
function ue(e, t, n) { return e.replace(new RegExp(le(t), "g"), n); }
function de(e, t) { var n = "", r = 0, i = -1, a = 0, o = -1; for (var s_1 = 0; s_1 <= e.length; ++s_1) {
    if (s_1 < e.length)
        o = e.charCodeAt(s_1);
    else if (o === 47)
        break;
    else
        o = 47;
    if (o === 47) {
        if (i !== s_1 - 1 && a !== 1) {
            if (i !== s_1 - 1 && a === 2) {
                if (n.length < 2 || r !== 2 || n.charCodeAt(n.length - 1) !== 46 || n.charCodeAt(n.length - 2) !== 46) {
                    if (n.length > 2) {
                        var e_4 = n.lastIndexOf("/");
                        if (e_4 !== n.length - 1) {
                            e_4 === -1 ? (n = "", r = 0) : (n = n.slice(0, e_4), r = n.length - 1 - n.lastIndexOf("/")), i = s_1, a = 0;
                            continue;
                        }
                    }
                    else if (n.length === 2 || n.length === 1) {
                        n = "", r = 0, i = s_1, a = 0;
                        continue;
                    }
                }
                t && (n.length > 0 ? n += "/.." : n = "..", r = 2);
            }
            else
                n.length > 0 ? n += "/".concat(e.slice(i + 1, s_1)) : n = e.slice(i + 1, s_1), r = s_1 - i - 1;
        }
        i = s_1, a = 0;
    }
    else
        o === 46 && a !== -1 ? ++a : a = -1;
} return n; }
var R;
function z() { return (z = e.n((function () { n.P(), R = { toPosix: function (e) { return ue(e, "\\", "/"); }, isUrl: function (e) { return /^https?:/.test(this.toPosix(e)); }, isDataUrl: function (e) { return /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(e); }, isBlobUrl: function (e) { return e.startsWith("blob:"); }, hasProtocol: function (e) { return /^[^/:]+:/.test(this.toPosix(e)); }, getProtocol: function (e) { I(e), e = this.toPosix(e); var t = /^file:\/\/\//.exec(e); if (t)
        return t[0]; var n = /^[^/:]+:\/{0,2}/.exec(e); return n ? n[0] : ""; }, toAbsolute: function (e, t, r) { if (I(e), this.isDataUrl(e) || this.isBlobUrl(e))
        return e; var i = L(this.toPosix(t == null ? n.N.get().getBaseUrl() : t)), a = L(this.toPosix(r == null ? this.rootname(i) : r)); return e = this.toPosix(e), e.startsWith("/") ? R.join(a, e.slice(1)) : this.isAbsolute(e) ? e : this.join(i, e); }, normalize: function (e) { if (I(e), e.length === 0)
        return "."; if (this.isDataUrl(e) || this.isBlobUrl(e))
        return e; e = this.toPosix(e); var t = "", n = e.startsWith("/"); this.hasProtocol(e) && (t = this.rootname(e), e = e.slice(t.length)); var r = e.endsWith("/"); return e = de(e, !1), e.length > 0 && r && (e += "/"), n ? "/".concat(e) : t + e; }, isAbsolute: function (e) { return I(e), e = this.toPosix(e), this.hasProtocol(e) ? !0 : e.startsWith("/"); }, join: function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        if (e.length === 0)
            return ".";
        var t;
        for (var r_2 = 0; r_2 < e.length; ++r_2) {
            var i_2 = e[r_2];
            if (I(i_2), i_2.length > 0) {
                if (t === void 0)
                    t = i_2;
                else {
                    var n;
                    var a_1 = (n = e[r_2 - 1]) == null ? "" : n;
                    this.joinExtensions.includes(this.extname(a_1).toLowerCase()) ? t += "/../".concat(i_2) : t += "/".concat(i_2);
                }
            }
        }
        return t === void 0 ? "." : this.normalize(t);
    }, dirname: function (e) { if (I(e), e.length === 0)
        return "."; e = this.toPosix(e); var t = e.charCodeAt(0), n = t === 47, r = -1, i = !0, a = this.getProtocol(e), o = e; e = e.slice(a.length); for (var n_2 = e.length - 1; n_2 >= 1; --n_2)
        if (t = e.charCodeAt(n_2), t === 47) {
            if (!i) {
                r = n_2;
                break;
            }
        }
        else
            i = !1; return r === -1 ? n ? "/" : this.isUrl(o) ? a + e : a : n && r === 1 ? "//" : a + e.slice(0, r); }, rootname: function (e) { I(e), e = this.toPosix(e); var t = ""; if (t = e.startsWith("/") ? "/" : this.getProtocol(e), this.isUrl(e)) {
        var n_3 = e.indexOf("/", t.length);
        t = n_3 === -1 ? e : e.slice(0, n_3), t.endsWith("/") || (t += "/");
    } return t; }, basename: function (e, t) { I(e), t && I(t), e = L(this.toPosix(e)); var n = 0, r = -1, i = !0, a; if (t !== void 0 && t.length > 0 && t.length <= e.length) {
        if (t.length === e.length && t === e)
            return "";
        var o_2 = t.length - 1, s_2 = -1;
        for (a = e.length - 1; a >= 0; --a) {
            var c_1 = e.charCodeAt(a);
            if (c_1 === 47) {
                if (!i) {
                    n = a + 1;
                    break;
                }
            }
            else
                s_2 === -1 && (i = !1, s_2 = a + 1), o_2 >= 0 && (c_1 === t.charCodeAt(o_2) ? --o_2 === -1 && (r = a) : (o_2 = -1, r = s_2));
        }
        return n === r ? r = s_2 : r === -1 && (r = e.length), e.slice(n, r);
    } for (a = e.length - 1; a >= 0; --a)
        if (e.charCodeAt(a) === 47) {
            if (!i) {
                n = a + 1;
                break;
            }
        }
        else
            r === -1 && (i = !1, r = a + 1); return r === -1 ? "" : e.slice(n, r); }, extname: function (e) { I(e), e = L(this.toPosix(e)); var t = -1, n = 0, r = -1, i = !0, a = 0; for (var o_3 = e.length - 1; o_3 >= 0; --o_3) {
        var s_3 = e.charCodeAt(o_3);
        if (s_3 === 47) {
            if (!i) {
                n = o_3 + 1;
                break;
            }
        }
        else
            r === -1 && (i = !1, r = o_3 + 1), s_3 === 46 ? t === -1 ? t = o_3 : a !== 1 && (a = 1) : t !== -1 && (a = -1);
    } return t === -1 || r === -1 || a === 0 || a === 1 && t === r - 1 && t === n + 1 ? "" : e.slice(t, r); }, parse: function (e) { I(e); var t = { root: "", dir: "", base: "", ext: "", name: "" }; if (e.length === 0)
        return t; e = L(this.toPosix(e)); var n = e.charCodeAt(0), r = this.isAbsolute(e), i; t.root = this.rootname(e), i = r || this.hasProtocol(e) ? 1 : 0; var a = -1, o = 0, s = -1, c = !0, l = e.length - 1, u = 0; for (; l >= i; --l)
        if (n = e.charCodeAt(l), n === 47) {
            if (!c) {
                o = l + 1;
                break;
            }
        }
        else
            s === -1 && (c = !1, s = l + 1), n === 46 ? a === -1 ? a = l : u !== 1 && (u = 1) : a !== -1 && (u = -1); return a === -1 || s === -1 || u === 0 || u === 1 && a === s - 1 && a === o + 1 ? s !== -1 && (t.base = t.name = o === 0 && r ? e.slice(1, s) : e.slice(o, s)) : (o === 0 && r ? (t.name = e.slice(1, a), t.base = e.slice(1, s)) : (t.name = e.slice(o, a), t.base = e.slice(o, s)), t.ext = e.slice(a, s)), t.dir = this.dirname(e), t; }, sep: "/", delimiter: ":", joinExtensions: [".html"] }; })))(); }
var B, V;
function H() { return (H = e.n((function () { n.C(), V = ((B = n.w.default) == null ? n.w : B)(globalThis.navigator); })))(); }
function fe() { if (typeof U == "boolean")
    return U; try {
    U = (function () { throw Error("[sapling2d] new Function is not allowed in WeChat Mini Games"); })("param1", "param2", "param3", "return param1[param2] === param3;")({ a: "b" }, "a", "b") === !0;
}
catch (e) {
    U = !1;
} return U; }
var U;
function W() { return (W = e.n((function () { })))(); }
var G;
function K() { return (K = e.n((function () { t.n(), n.H(), G = t.t.default || t.t; })))(); }
var q;
function J() { return (J = e.n((function () { n.H(), q = "8.22.0"; })))(); }
var pe, Y;
function me() { return (me = e.n((function () { n.Y(), J(), pe = (function () {
    function pe() {
    }
    pe.init = function () { var e, t; (e = (t = globalThis).__PIXI_APP_INIT__) == null || e.call(t, this, "8.22.0"); };
    pe.destroy = function () { };
    return pe;
}()), pe.extension = n.q.Application, Y = (function () {
    function Y(e) {
        this._renderer = e;
    }
    Y.prototype.init = function () { var e, t; (e = (t = globalThis).__PIXI_RENDERER_INIT__) == null || e.call(t, this._renderer, "8.22.0"); };
    Y.prototype.destroy = function () { this._renderer = null; };
    return Y;
}()), Y.extension = { type: [n.q.WebGLSystem, n.q.WebGPUSystem], name: "initHook", priority: -10 }; })))(); }
var he;
function ge() { return (ge = e.n((function () { he = (function () {
    function he(e) {
        this.rawBinaryData = typeof e == "number" ? new ArrayBuffer(e) : e instanceof Uint8Array ? e.buffer : e, this.uint32View = new Uint32Array(this.rawBinaryData), this.float32View = new Float32Array(this.rawBinaryData), this.size = this.rawBinaryData.byteLength;
    }
    Object.defineProperty(he.prototype, "int8View", {
        get: function () { return this._int8View || (this._int8View = new Int8Array(this.rawBinaryData)), this._int8View; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(he.prototype, "uint8View", {
        get: function () { return this._uint8View || (this._uint8View = new Uint8Array(this.rawBinaryData)), this._uint8View; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(he.prototype, "int16View", {
        get: function () { return this._int16View || (this._int16View = new Int16Array(this.rawBinaryData)), this._int16View; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(he.prototype, "int32View", {
        get: function () { return this._int32View || (this._int32View = new Int32Array(this.rawBinaryData)), this._int32View; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(he.prototype, "float64View", {
        get: function () { return this._float64Array || (this._float64Array = new Float64Array(this.rawBinaryData)), this._float64Array; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(he.prototype, "bigUint64View", {
        get: function () { return this._bigUint64Array || (this._bigUint64Array = new BigUint64Array(this.rawBinaryData)), this._bigUint64Array; },
        enumerable: false,
        configurable: true
    });
    he.prototype.view = function (e) { return this["".concat(e, "View")]; };
    he.prototype.destroy = function () { this.rawBinaryData = null, this.uint32View = null, this.float32View = null, this.uint16View = null, this._int8View = null, this._uint8View = null, this._int16View = null, this._int32View = null, this._float64Array = null, this._bigUint64Array = null; };
    he.sizeOf = function (e) { switch (e) {
        case "int8":
        case "uint8": return 1;
        case "int16":
        case "uint16": return 2;
        case "int32":
        case "uint32":
        case "float32": return 4;
        default: throw Error("".concat(e, " isn't a valid view type"));
    } };
    return he;
}()); })))(); }
var _e;
function ve() { return (ve = e.n((function () { _e = (function () {
    function _e(e) {
        this.items = Object.create(null);
        var t = e.renderer, n = e.type, r = e.onUnload, i = e.priority, a = e.name;
        this._renderer = t, t.gc.addResourceHash(this, "items", n, i == null ? 0 : i), this._onUnload = r, this.name = a;
    }
    _e.prototype.add = function (e) { return !this.items[e.uid] && (this.items[e.uid] = e, e.once("unload", this.remove, this), e._gcLastUsed = this._renderer.gc.now, !0); };
    _e.prototype.remove = function (e) {
        var t = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            t[_i - 1] = arguments[_i];
        }
        var n;
        if (!this.items[e.uid])
            return;
        var r = e._gpuData[this._renderer.uid];
        r && ((n = this._onUnload) == null || n.call.apply(n, __spreadArray([this, e], t, false)), e.off("unload", this.remove, this), r.destroy(), e._gpuData[this._renderer.uid] = null, this.items[e.uid] = null);
    };
    _e.prototype.removeAll = function () {
        var _this = this;
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        Object.values(this.items).forEach(function (t) { return t && _this.remove.apply(_this, __spreadArray([t], e, false)); });
    };
    _e.prototype.destroy = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        this.removeAll.apply(this, e), this.items = Object.create(null), this._renderer = null, this._onUnload = null;
    };
    return _e;
}()); })))(); }
function ye(e, t) { X || (X = n.N.get().createCanvas(256, 128), Z = X.getContext("2d", { willReadFrequently: !0 }), Z.globalCompositeOperation = "copy", Z.globalAlpha = 1), (X.width < e || X.height < t) && (X.width = r.h(e), X.height = r.h(t)); }
function be(e, t, n) { for (var r_3 = 0, i_3 = 4 * n * t; r_3 < t; ++r_3, i_3 += 4)
    if (e[i_3 + 3] !== 0)
        return !1; return !0; }
function xe(e, t, n, r, i) { var a = 4 * t; for (var t_4 = r, o_4 = r * a + 4 * n; t_4 <= i; ++t_4, o_4 += a)
    if (e[o_4 + 3] !== 0)
        return !1; return !0; }
function Se() {
    var e = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        e[_i] = arguments[_i];
    }
    var t, n, i;
    var a = e[0];
    a.canvas || (a = { canvas: e[0], resolution: e[1] });
    var o = a.canvas, s = Math.min((t = a.resolution) == null ? 1 : t, 1), c = (n = a.width) == null ? o.width : n, l = (i = a.height) == null ? o.height : i, u = a.output;
    if (ye(c, l), !Z)
        throw TypeError("Failed to get canvas 2D context");
    Z.drawImage(o, 0, 0, c, l, 0, 0, c * s, l * s);
    var d = Z.getImageData(0, 0, c, l).data, f = 0, p = 0, m = c - 1, h = l - 1;
    for (; p < l && be(d, c, p);)
        ++p;
    if (p === l)
        return r.g.EMPTY;
    for (; be(d, c, h);)
        --h;
    for (; xe(d, c, f, p, h);)
        ++f;
    for (; xe(d, c, m, p, h);)
        --m;
    return ++m, ++h, Z.globalCompositeOperation = "source-over", Z.strokeRect(f, p, m - f, h - p), Z.globalCompositeOperation = "copy", u != null || (u = new r.g), u.set(f / s, p / s, (m - f) / s, (h - p) / s), u;
}
var X, Z;
function Ce() { return (Ce = e.n((function () { n.P(), r._(), X = null, Z = null; })))(); }
function we() { var e = n.N.get().getNavigator().userAgent; return /^((?!chrome|android).)*safari/i.test(e); }
function Te() { return (Te = e.n((function () { n.P(); })))(); }
function Ee(e) { var t = !1; for (var n_4 in e)
    if (e[n_4] == null) {
        t = !0;
        break;
    } if (!t)
    return e; var n = Object.create(null); for (var t_5 in e) {
    var r_4 = e[t_5];
    r_4 && (n[t_5] = r_4);
} return n; }
function De(e) { var t = 0; for (var n_5 = 0; n_5 < e.length; n_5++)
    e[n_5] == null ? t++ : e[n_5 - t] = e[n_5]; return e.length -= t, e; }
function Oe() { return (Oe = e.n((function () { })))(); }
function ke(e) {
    var _a;
    if (!Q) {
        if (n.N.get().getNavigator().userAgent.toLowerCase().indexOf("chrome") > -1) {
            var t_6 = ["%c  %c  %c  %c  %c PixiJS %c v".concat(q, " (").concat(e, ") http://www.pixijs.com/\n\n"), "background: #E72264; padding:5px 0;", "background: #6CA2EA; padding:5px 0;", "background: #B5D33D; padding:5px 0;", "background: #FED23F; padding:5px 0;", "color: #FFFFFF; background: #E72264; padding:5px 0;", "color: #E72264; background: #FFFFFF; padding:5px 0;"];
            (_a = globalThis.console).log.apply(_a, t_6);
        }
        else
            globalThis.console && globalThis.console.log("PixiJS ".concat(q, " - ").concat(e, " - http://www.pixijs.com/"));
        Q = !0;
    }
}
var Q;
function Ae() { return (Ae = e.n((function () { n.P(), J(), Q = !1; })))(); }
var je;
function Me() { return (Me = e.n((function () { je = { aVertex: function (e, t, n, r, i) { var a = 0, o = 0, s = 0, c = 0; for (var n_6 = 0; n_6 < e.length; ++n_6) {
        var l_1 = e[n_6], u_1 = l_1.texture, d_1 = l_1.scaleX, f_1 = l_1.scaleY, p_1 = l_1.anchorX, m_1 = l_1.anchorY, h_1 = u_1.trim, g_1 = u_1.orig;
        h_1 ? (o = h_1.x - p_1 * g_1.width, a = o + h_1.width, c = h_1.y - m_1 * g_1.height, s = c + h_1.height) : (a = g_1.width * (1 - p_1), o = g_1.width * -p_1, s = g_1.height * (1 - m_1), c = g_1.height * -m_1), t[r] = o * d_1, t[r + 1] = c * f_1, t[r + i] = a * d_1, t[r + i + 1] = c * f_1, t[r + i * 2] = a * d_1, t[r + i * 2 + 1] = s * f_1, t[r + i * 3] = o * d_1, t[r + i * 3 + 1] = s * f_1, r += i * 4;
    } }, aPosition: function (e, t, n, r, i) { for (var n_7 = 0; n_7 < e.length; ++n_7) {
        var a_2 = e[n_7], o_5 = a_2.x, s_4 = a_2.y;
        t[r] = o_5, t[r + 1] = s_4, t[r + i] = o_5, t[r + i + 1] = s_4, t[r + i * 2] = o_5, t[r + i * 2 + 1] = s_4, t[r + i * 3] = o_5, t[r + i * 3 + 1] = s_4, r += i * 4;
    } }, aRotation: function (e, t, n, r, i) { for (var n_8 = 0; n_8 < e.length; ++n_8) {
        var a_3 = e[n_8].rotation;
        t[r] = a_3, t[r + i] = a_3, t[r + i * 2] = a_3, t[r + i * 3] = a_3, r += i * 4;
    } }, aUV: function (e, t, n, r, i) { for (var n_9 = 0; n_9 < e.length; ++n_9) {
        var a_4 = e[n_9].texture.uvs;
        t[r] = a_4.x0, t[r + 1] = a_4.y0, t[r + i] = a_4.x1, t[r + i + 1] = a_4.y1, t[r + i * 2] = a_4.x2, t[r + i * 2 + 1] = a_4.y2, t[r + i * 3] = a_4.x3, t[r + i * 3 + 1] = a_4.y3, r += i * 4;
    } }, aColor: function (e, t, n, r, i) { for (var t_7 = 0; t_7 < e.length; ++t_7) {
        var a_5 = e[t_7].color;
        n[r] = a_5, n[r + i] = a_5, n[r + i * 2] = a_5, n[r + i * 3] = a_5, r += i * 4;
    } } }; })))(); }
function Ne(e) { var t = Object.values(e), n = t.filter(function (e) { return e.dynamic; }), r = t.filter(function (e) { return !e.dynamic; }); return { dynamicUpdate: Pe(n), staticUpdate: Pe(r) }; }
function Pe(e) { var t = 0, n = []; for (var r_5 = 0; r_5 < e.length; r_5++) {
    var a_6 = e[r_5], o_6 = i.tt(a_6.format).stride / 4;
    t += o_6, n.push({ stride: o_6, updateFunction: a_6.updateFunction || je[a_6.attributeName] });
} return function (e, r, i) { var a = 0; for (var o_7 = 0; o_7 < n.length; o_7++) {
    var s_5 = n[o_7];
    s_5.updateFunction(e, r, i, a, t), a += s_5.stride;
} }; }
function Fe() { return (Fe = e.n((function () { i.nt(), Me(); })))(); }
function Ie() { return Le; }
function Le(e, t, n) { var r = e.gl, a = e.shader, o = a._getProgramData(t.glProgram); for (var s_6 in t.groups) {
    var c_2 = t.groups[s_6];
    for (var l_2 in c_2.resources) {
        var u_2 = c_2.resources[l_2];
        if (u_2 instanceof i.Z)
            u_2.ubo ? a.bindUniformBlock(u_2, t._uniformBindMap[s_6][l_2], n.blockIndex++) : a.updateUniformGroup(u_2);
        else if (u_2 instanceof i.a)
            a.bindUniformBlock(u_2, t._uniformBindMap[s_6][l_2], n.blockIndex++);
        else if (u_2 instanceof i.St || u_2 instanceof i.r) {
            e.texture.bind(u_2, n.textureCount);
            var i_4 = t._uniformBindMap[s_6][l_2], a_7 = o.uniformData[i_4];
            a_7 && (a_7.value !== n.textureCount && r.uniform1i(a_7.location, n.textureCount), n.textureCount++);
        }
        else
            u_2 instanceof i.wt;
    }
} }
function Re() { return (Re = e.n((function () { i.o(), i.Q(), i.Ct(), i.Tt(), i.i(); })))(); }
var ze, Be, Ve;
function $() { return ($ = e.n((function () { ze = [function (e, t, n, r, i) { var a = r[e].toArray(!0); t[n] = a[0], t[n + 1] = a[1], t[n + 2] = a[2], t[n + 4] = a[3], t[n + 5] = a[4], t[n + 6] = a[5], t[n + 8] = a[6], t[n + 9] = a[7], t[n + 10] = a[8]; }, function (e, t, n, r, i) { i = r[e], t[n] = i.x, t[n + 1] = i.y, t[n + 2] = i.width, t[n + 3] = i.height; }, function (e, t, n, r, i) { i = r[e], t[n] = i.x, t[n + 1] = i.y; }, function (e, t, n, r, i) { i = r[e], t[n] = i.red, t[n + 1] = i.green, t[n + 2] = i.blue, t[n + 3] = i.alpha; }, function (e, t, n, r, i) { i = r[e], t[n] = i.red, t[n + 1] = i.green, t[n + 2] = i.blue; }], Be = { f32: function (e, t, n, r, i) { t[n] = i; }, i32: function (e, t, n, r, i) { t[n] = i; }, "vec2<f32>": function (e, t, n, r, i) { t[n] = i[0], t[n + 1] = i[1]; }, "vec3<f32>": function (e, t, n, r, i) { t[n] = i[0], t[n + 1] = i[1], t[n + 2] = i[2]; }, "vec4<f32>": function (e, t, n, r, i) { t[n] = i[0], t[n + 1] = i[1], t[n + 2] = i[2], t[n + 3] = i[3]; }, "mat2x2<f32>": function (e, t, n, r, i) { t[n] = i[0], t[n + 1] = i[1], t[n + 2] = i[2], t[n + 3] = i[3]; }, "mat3x3<f32>": function (e, t, n, r, i) { t[n] = i[0], t[n + 1] = i[1], t[n + 2] = i[2], t[n + 4] = i[3], t[n + 5] = i[4], t[n + 6] = i[5], t[n + 8] = i[6], t[n + 9] = i[7], t[n + 10] = i[8]; }, "mat4x4<f32>": function (e, t, n, r, i) { for (var e_5 = 0; e_5 < 16; e_5++)
        t[n + e_5] = i[e_5]; }, "mat3x2<f32>": function (e, t, n, r, i) { for (var e_6 = 0; e_6 < 6; e_6++)
        t[n + (e_6 / 3 | 0) * 4 + e_6 % 3] = i[e_6]; }, "mat4x2<f32>": function (e, t, n, r, i) { for (var e_7 = 0; e_7 < 8; e_7++)
        t[n + (e_7 / 4 | 0) * 4 + e_7 % 4] = i[e_7]; }, "mat2x3<f32>": function (e, t, n, r, i) { for (var e_8 = 0; e_8 < 6; e_8++)
        t[n + (e_8 / 2 | 0) * 4 + e_8 % 2] = i[e_8]; }, "mat4x3<f32>": function (e, t, n, r, i) { for (var e_9 = 0; e_9 < 12; e_9++)
        t[n + (e_9 / 4 | 0) * 4 + e_9 % 4] = i[e_9]; }, "mat2x4<f32>": function (e, t, n, r, i) { for (var e_10 = 0; e_10 < 8; e_10++)
        t[n + (e_10 / 2 | 0) * 4 + e_10 % 2] = i[e_10]; }, "mat3x4<f32>": function (e, t, n, r, i) { for (var e_11 = 0; e_11 < 12; e_11++)
        t[n + (e_11 / 3 | 0) * 4 + e_11 % 3] = i[e_11]; } }, Ve = { f32: function (e, t, n, r, i) { t[n] = i; }, i32: function (e, t, n, r, i) { t[n] = i; }, "vec2<f32>": function (e, t, n, r, i) { t[n] = i[0], t[n + 1] = i[1]; }, "vec3<f32>": function (e, t, n, r, i) { t[n] = i[0], t[n + 1] = i[1], t[n + 2] = i[2]; }, "vec4<f32>": function (e, t, n, r, i) { t[n] = i[0], t[n + 1] = i[1], t[n + 2] = i[2], t[n + 3] = i[3]; }, "mat2x2<f32>": function (e, t, n, r, i) { t[n] = i[0], t[n + 1] = i[1], t[n + 4] = i[2], t[n + 5] = i[3]; }, "mat3x3<f32>": function (e, t, n, r, i) { t[n] = i[0], t[n + 1] = i[1], t[n + 2] = i[2], t[n + 4] = i[3], t[n + 5] = i[4], t[n + 6] = i[5], t[n + 8] = i[6], t[n + 9] = i[7], t[n + 10] = i[8]; }, "mat4x4<f32>": function (e, t, n, r, i) { for (var e_12 = 0; e_12 < 16; e_12++)
        t[n + e_12] = i[e_12]; }, "mat3x2<f32>": function (e, t, n, r, i) { for (var e_13 = 0; e_13 < 6; e_13++)
        t[n + (e_13 / 3 | 0) * 4 + e_13 % 3] = i[e_13]; }, "mat4x2<f32>": function (e, t, n, r, i) { for (var e_14 = 0; e_14 < 8; e_14++)
        t[n + (e_14 / 4 | 0) * 4 + e_14 % 4] = i[e_14]; }, "mat2x3<f32>": function (e, t, n, r, i) { for (var e_15 = 0; e_15 < 6; e_15++)
        t[n + (e_15 / 2 | 0) * 4 + e_15 % 2] = i[e_15]; }, "mat4x3<f32>": function (e, t, n, r, i) { for (var e_16 = 0; e_16 < 12; e_16++)
        t[n + (e_16 / 4 | 0) * 4 + e_16 % 4] = i[e_16]; }, "mat2x4<f32>": function (e, t, n, r, i) { for (var e_17 = 0; e_17 < 8; e_17++)
        t[n + (e_17 / 2 | 0) * 4 + e_17 % 2] = i[e_17]; }, "mat3x4<f32>": function (e, t, n, r, i) { for (var e_18 = 0; e_18 < 12; e_18++)
        t[n + (e_18 / 3 | 0) * 4 + e_18 % 3] = i[e_18]; } }; })))(); }
function He(e) { return We(e, Ve, function (e) { var t = Math.max(a.p[e.data.type] / 16, 1), n = e.data.value.length / e.data.size, r = (4 - n % 4) % 4; return function (i, a, o, s, c) { var l = 0; for (var i_5 = 0; i_5 < e.data.size * t; i_5++) {
    for (var e_19 = 0; e_19 < n; e_19++)
        a[o++] = c[l++];
    o += r;
} }; }); }
function Ue(e) { return We(e, Be, function (e) { var _a = a.r[e.data.type], t = _a.size, n = _a.align, r = (Math.max(t, n) - t) / 4; return function (n, i, a, o, s) { var c = 0; for (var n_10 = 0; n_10 < e.data.size; n_10++) {
    for (var e_20 = 0; e_20 < t / 4; e_20++)
        i[a++] = s[c++];
    a += r;
} }; }); }
function We(e, t, n) { var r = {}; for (var a_8 in e) {
    var o_8 = e[a_8], s_7 = o_8.data, c_3 = !1;
    r[s_7.name] = { offset: o_8.offset / 4, func: null };
    for (var e_21 = 0; e_21 < i.p.length; e_21++) {
        var t_8 = i.p[e_21];
        if (s_7.type === t_8.type && t_8.test(s_7)) {
            r[s_7.name].func = ze[e_21], c_3 = !0;
            break;
        }
    }
    c_3 || (s_7.size === 1 ? r[s_7.name].func = t[s_7.type] : r[s_7.name].func = n(o_8));
} return function (e, t, n, i) { for (var n_11 in r)
    r[n_11].func(n_11, t, i + r[n_11].offset, e, e[n_11]); }; }
function Ge() { return (Ge = e.n((function () { a.m(), a.i(), i.f(), $(); })))(); }
var Ke, qe, Je;
function Ye() { return (Ye = e.n((function () { Ke = { f32: function (e, t, n, r, i, a, o) { n !== r && (t.value = r, o.uniform1f(i[e].location, r)); }, "vec2<f32>": function (e, t, n, r, i, a, o) { (n[0] !== r[0] || n[1] !== r[1]) && (n[0] = r[0], n[1] = r[1], o.uniform2f(i[e].location, r[0], r[1])); }, "vec3<f32>": function (e, t, n, r, i, a, o) { (n[0] !== r[0] || n[1] !== r[1] || n[2] !== r[2]) && (n[0] = r[0], n[1] = r[1], n[2] = r[2], o.uniform3f(i[e].location, r[0], r[1], r[2])); }, "vec4<f32>": function (e, t, n, r, i, a, o) { (n[0] !== r[0] || n[1] !== r[1] || n[2] !== r[2] || n[3] !== r[3]) && (n[0] = r[0], n[1] = r[1], n[2] = r[2], n[3] = r[3], o.uniform4f(i[e].location, r[0], r[1], r[2], r[3])); }, i32: function (e, t, n, r, i, a, o) { n !== r && (t.value = r, o.uniform1i(i[e].location, r)); }, "vec2<i32>": function (e, t, n, r, i, a, o) { (n[0] !== r[0] || n[1] !== r[1]) && (n[0] = r[0], n[1] = r[1], o.uniform2i(i[e].location, r[0], r[1])); }, "vec3<i32>": function (e, t, n, r, i, a, o) { (n[0] !== r[0] || n[1] !== r[1] || n[2] !== r[2]) && (n[0] = r[0], n[1] = r[1], n[2] = r[2], o.uniform3i(i[e].location, r[0], r[1], r[2])); }, "vec4<i32>": function (e, t, n, r, i, a, o) { (n[0] !== r[0] || n[1] !== r[1] || n[2] !== r[2] || n[3] !== r[3]) && (n[0] = r[0], n[1] = r[1], n[2] = r[2], n[3] = r[3], o.uniform4i(i[e].location, r[0], r[1], r[2], r[3])); }, u32: function (e, t, n, r, i, a, o) { n !== r && (t.value = r, o.uniform1ui(i[e].location, r)); }, "vec2<u32>": function (e, t, n, r, i, a, o) { (n[0] !== r[0] || n[1] !== r[1]) && (n[0] = r[0], n[1] = r[1], o.uniform2ui(i[e].location, r[0], r[1])); }, "vec3<u32>": function (e, t, n, r, i, a, o) { (n[0] !== r[0] || n[1] !== r[1] || n[2] !== r[2]) && (n[0] = r[0], n[1] = r[1], n[2] = r[2], o.uniform3ui(i[e].location, r[0], r[1], r[2])); }, "vec4<u32>": function (e, t, n, r, i, a, o) { (n[0] !== r[0] || n[1] !== r[1] || n[2] !== r[2] || n[3] !== r[3]) && (n[0] = r[0], n[1] = r[1], n[2] = r[2], n[3] = r[3], o.uniform4ui(i[e].location, r[0], r[1], r[2], r[3])); }, bool: function (e, t, n, r, i, a, o) { n !== r && (t.value = r, o.uniform1i(i[e].location, r)); }, "vec2<bool>": function (e, t, n, r, i, a, o) { (n[0] !== r[0] || n[1] !== r[1]) && (n[0] = r[0], n[1] = r[1], o.uniform2i(i[e].location, r[0], r[1])); }, "vec3<bool>": function (e, t, n, r, i, a, o) { (n[0] !== r[0] || n[1] !== r[1] || n[2] !== r[2]) && (n[0] = r[0], n[1] = r[1], n[2] = r[2], o.uniform3i(i[e].location, r[0], r[1], r[2])); }, "vec4<bool>": function (e, t, n, r, i, a, o) { (n[0] !== r[0] || n[1] !== r[1] || n[2] !== r[2] || n[3] !== r[3]) && (n[0] = r[0], n[1] = r[1], n[2] = r[2], n[3] = r[3], o.uniform4i(i[e].location, r[0], r[1], r[2], r[3])); }, "mat2x2<f32>": function (e, t, n, r, i, a, o) { o.uniformMatrix2fv(i[e].location, !1, r); }, "mat3x3<f32>": function (e, t, n, r, i, a, o) { o.uniformMatrix3fv(i[e].location, !1, r); }, "mat4x4<f32>": function (e, t, n, r, i, a, o) { o.uniformMatrix4fv(i[e].location, !1, r); } }, qe = { f32: function (e, t, n, r, i, a, o) { o.uniform1fv(i[e].location, r); }, "vec2<f32>": function (e, t, n, r, i, a, o) { o.uniform2fv(i[e].location, r); }, "vec3<f32>": function (e, t, n, r, i, a, o) { o.uniform3fv(i[e].location, r); }, "vec4<f32>": function (e, t, n, r, i, a, o) { o.uniform4fv(i[e].location, r); }, "mat2x2<f32>": function (e, t, n, r, i, a, o) { o.uniformMatrix2fv(i[e].location, !1, r); }, "mat3x3<f32>": function (e, t, n, r, i, a, o) { o.uniformMatrix3fv(i[e].location, !1, r); }, "mat4x4<f32>": function (e, t, n, r, i, a, o) { o.uniformMatrix4fv(i[e].location, !1, r); }, i32: function (e, t, n, r, i, a, o) { o.uniform1iv(i[e].location, r); }, "vec2<i32>": function (e, t, n, r, i, a, o) { o.uniform2iv(i[e].location, r); }, "vec3<i32>": function (e, t, n, r, i, a, o) { o.uniform3iv(i[e].location, r); }, "vec4<i32>": function (e, t, n, r, i, a, o) { o.uniform4iv(i[e].location, r); }, u32: function (e, t, n, r, i, a, o) { o.uniform1iv(i[e].location, r); }, "vec2<u32>": function (e, t, n, r, i, a, o) { o.uniform2iv(i[e].location, r); }, "vec3<u32>": function (e, t, n, r, i, a, o) { o.uniform3iv(i[e].location, r); }, "vec4<u32>": function (e, t, n, r, i, a, o) { o.uniform4iv(i[e].location, r); }, bool: function (e, t, n, r, i, a, o) { o.uniform1iv(i[e].location, r); }, "vec2<bool>": function (e, t, n, r, i, a, o) { o.uniform2iv(i[e].location, r); }, "vec3<bool>": function (e, t, n, r, i, a, o) { o.uniform3iv(i[e].location, r); }, "vec4<bool>": function (e, t, n, r, i, a, o) { o.uniform4iv(i[e].location, r); } }, Je = [function (e, t, n, r, i, a, o) { o.uniformMatrix3fv(i[e].location, !1, a[e].toArray(!0)); }, function (e, t, n, r, i, a, o) { n = i[e].value, r = a[e], (n[0] !== r.x || n[1] !== r.y || n[2] !== r.width || n[3] !== r.height) && (n[0] = r.x, n[1] = r.y, n[2] = r.width, n[3] = r.height, o.uniform4f(i[e].location, r.x, r.y, r.width, r.height)); }, function (e, t, n, r, i, a, o) { n = i[e].value, r = a[e], (n[0] !== r.x || n[1] !== r.y) && (n[0] = r.x, n[1] = r.y, o.uniform2f(i[e].location, r.x, r.y)); }, function (e, t, n, r, i, a, o) { n = i[e].value, r = a[e], (n[0] !== r.red || n[1] !== r.green || n[2] !== r.blue || n[3] !== r.alpha) && (n[0] = r.red, n[1] = r.green, n[2] = r.blue, n[3] = r.alpha, o.uniform4f(i[e].location, r.red, r.green, r.blue, r.alpha)); }, function (e, t, n, r, i, a, o) { n = i[e].value, r = a[e], (n[0] !== r.red || n[1] !== r.green || n[2] !== r.blue) && (n[0] = r.red, n[1] = r.green, n[2] = r.blue, o.uniform3f(i[e].location, r.red, r.green, r.blue)); }]; })))(); }
function Xe(e, t) { var n = {}; for (var r_6 in e.uniformStructures) {
    if (!t[r_6])
        continue;
    var a_9 = e.uniformStructures[r_6], o_9 = !1;
    for (var e_22 = 0; e_22 < i.p.length; e_22++) {
        var t_9 = i.p[e_22];
        if (a_9.type === t_9.type && t_9.test(a_9)) {
            n[r_6] = Je[e_22], o_9 = !0;
            break;
        }
    }
    o_9 || (n[r_6] = (a_9.size === 1 ? Ke : qe)[a_9.type]);
} return function (e, t, r) { var i = r.gl; for (var r_7 in n) {
    var a_10 = t[r_7], o_10 = e[r_7], s_8 = e[r_7].value;
    n[r_7](r_7, o_10, s_8, a_10, e, t, i);
} }; }
function Ze() { return (Ze = e.n((function () { i.f(), Ye(); })))(); }
function Qe() { Object.assign(i.H.prototype, { _unsafeEvalCheck: function () { } }), Object.assign(i.m.prototype, { _systemCheck: function () { } }), Object.assign(a.s.prototype, { _generateUniformsSync: Xe }), Object.assign(a.d.prototype, { _generateUboSync: He }), Object.assign(a.t.prototype, { _generateUboSync: Ue }), Object.assign(a.l.prototype, { _generateShaderSync: Ie }), Object.assign(o.l.prototype, { generateParticleUpdate: Ne }); }
function $e() { return ($e = e.n((function () { a.f(), a.u(), a.c(), a.n(), i.h(), i.U(), o.u(), Fe(), Re(), Ge(), Ze(), Qe(); })))(); }
Object.defineProperty(exports, "A", { enumerable: !0, get: function () { return k; } }), Object.defineProperty(exports, "B", { enumerable: !0, get: function () { return ne; } }), Object.defineProperty(exports, "C", { enumerable: !0, get: function () { return z; } }), Object.defineProperty(exports, "D", { enumerable: !0, get: function () { return M; } }), Object.defineProperty(exports, "E", { enumerable: !0, get: function () { return F; } }), Object.defineProperty(exports, "F", { enumerable: !0, get: function () { return S; } }), Object.defineProperty(exports, "G", { enumerable: !0, get: function () { return d; } }), Object.defineProperty(exports, "H", { enumerable: !0, get: function () { return _; } }), Object.defineProperty(exports, "I", { enumerable: !0, get: function () { return C; } }), Object.defineProperty(exports, "J", { enumerable: !0, get: function () { return f; } }), Object.defineProperty(exports, "K", { enumerable: !0, get: function () { return p; } }), Object.defineProperty(exports, "L", { enumerable: !0, get: function () { return x; } }), Object.defineProperty(exports, "M", { enumerable: !0, get: function () { return ae; } }), Object.defineProperty(exports, "N", { enumerable: !0, get: function () { return D; } }), Object.defineProperty(exports, "O", { enumerable: !0, get: function () { return N; } }), Object.defineProperty(exports, "P", { enumerable: !0, get: function () { return ie; } }), Object.defineProperty(exports, "R", { enumerable: !0, get: function () { return re; } }), Object.defineProperty(exports, "S", { enumerable: !0, get: function () { return V; } }), Object.defineProperty(exports, "T", { enumerable: !0, get: function () { return ce; } }), Object.defineProperty(exports, "U", { enumerable: !0, get: function () { return g; } }), Object.defineProperty(exports, "V", { enumerable: !0, get: function () { return te; } }), Object.defineProperty(exports, "W", { enumerable: !0, get: function () { return ee; } }), Object.defineProperty(exports, "X", { enumerable: !0, get: function () { return s; } }), Object.defineProperty(exports, "Y", { enumerable: !0, get: function () { return l; } }), Object.defineProperty(exports, "_", { enumerable: !0, get: function () { return G; } }), Object.defineProperty(exports, "a", { enumerable: !0, get: function () { return Ee; } }), Object.defineProperty(exports, "b", { enumerable: !0, get: function () { return fe; } }), Object.defineProperty(exports, "c", { enumerable: !0, get: function () { return we; } }), Object.defineProperty(exports, "d", { enumerable: !0, get: function () { return _e; } }), Object.defineProperty(exports, "f", { enumerable: !0, get: function () { return ve; } }), Object.defineProperty(exports, "g", { enumerable: !0, get: function () { return me; } }), Object.defineProperty(exports, "h", { enumerable: !0, get: function () { return Y; } }), Object.defineProperty(exports, "i", { enumerable: !0, get: function () { return De; } }), Object.defineProperty(exports, "j", { enumerable: !0, get: function () { return oe; } }), Object.defineProperty(exports, "k", { enumerable: !0, get: function () { return O; } }), Object.defineProperty(exports, "l", { enumerable: !0, get: function () { return Se; } }), Object.defineProperty(exports, "m", { enumerable: !0, get: function () { return ge; } }), Object.defineProperty(exports, "n", { enumerable: !0, get: function () { return Ae; } }), Object.defineProperty(exports, "o", { enumerable: !0, get: function () { return Oe; } }), Object.defineProperty(exports, "p", { enumerable: !0, get: function () { return he; } }), Object.defineProperty(exports, "q", { enumerable: !0, get: function () { return m; } }), Object.defineProperty(exports, "r", { enumerable: !0, get: function () { return ke; } }), Object.defineProperty(exports, "s", { enumerable: !0, get: function () { return Te; } }), Object.defineProperty(exports, "t", { enumerable: !0, get: function () { return $e; } }), Object.defineProperty(exports, "u", { enumerable: !0, get: function () { return Ce; } }), Object.defineProperty(exports, "v", { enumerable: !0, get: function () { return K; } }), Object.defineProperty(exports, "w", { enumerable: !0, get: function () { return R; } }), Object.defineProperty(exports, "x", { enumerable: !0, get: function () { return H; } }), Object.defineProperty(exports, "y", { enumerable: !0, get: function () { return W; } }), Object.defineProperty(exports, "z", { enumerable: !0, get: function () { return v; } });
