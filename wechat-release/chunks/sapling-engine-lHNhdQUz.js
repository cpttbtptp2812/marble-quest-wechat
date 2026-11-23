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
var e = require("./rolldown-runtime-8PkXcCTM.js"), t = require("./nape-physics-tjC3J-kx.js"), n = require("./sapling-engine-BaQMQODF.js"), r = require("./sapling-engine-E6YpPtHn.js"), i = require("./sapling-engine-BXH-PsI2.js"), a = require("./sapling-engine-DbC_V8gI.js"), o = require("./sapling-engine-BAPCBAVM.js"), s = require("./sapling-engine-Dihp4nr7.js"), c = require("./sapling-engine-D7PD7dB2.js"), l = require("./sapling-engine-D-hh5wFy.js");
function u(e) { return e.endsWith("int"); }
function d() { return (d = e.n((function () { })))(); }
function f(e) { var t = p[e]; return t === void 0 && (p[e] = a.X("resource")), t; }
var p, m, h;
function g() { return (g = e.n((function () { n.i(), a.Y(), a.W(), t.br(), p = Object.create(null), m = (function (_super) {
    __extends(e, _super);
    function e(n) {
        if (n === void 0) { n = {}; }
        var _this = this;
        var r, i, a, o, s, c, l;
        _this = _super.call(this) || this, _this._resourceType = "textureSampler", _this._maxAnisotropy = 1, _this.destroyed = !1, n = t.yr(t.yr({}, e.defaultOptions), n), _this.addressMode = n.addressMode, _this.addressModeU = (r = n.addressModeU) == null ? _this.addressModeU : r, _this.addressModeV = (i = n.addressModeV) == null ? _this.addressModeV : i, _this.addressModeW = (a = n.addressModeW) == null ? _this.addressModeW : a, _this.scaleMode = n.scaleMode, _this.magFilter = (o = n.magFilter) == null ? _this.magFilter : o, _this.minFilter = (s = n.minFilter) == null ? _this.minFilter : s, _this.mipmapFilter = (c = n.mipmapFilter) == null ? _this.mipmapFilter : c, _this.lodMinClamp = n.lodMinClamp, _this.lodMaxClamp = n.lodMaxClamp, _this.compare = n.compare, _this.maxAnisotropy = (l = n.maxAnisotropy) == null ? 1 : l;
        return _this;
    }
    Object.defineProperty(e.prototype, "addressMode", {
        get: function () { return this.addressModeU; },
        set: function (e) { this.addressModeU = e, this.addressModeV = e, this.addressModeW = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "wrapMode", {
        get: function () { return this.addressMode; },
        set: function (e) { a.U(a.G, "TextureStyle.wrapMode is now TextureStyle.addressMode"), this.addressMode = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "scaleMode", {
        get: function () { return this.magFilter; },
        set: function (e) { this.magFilter = e, this.minFilter = e, this.mipmapFilter = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "maxAnisotropy", {
        get: function () { return this._maxAnisotropy; },
        set: function (e) { this._maxAnisotropy = Math.min(e, 16), this._maxAnisotropy > 1 && (this.scaleMode = "linear"); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "_resourceId", {
        get: function () { return this._sharedResourceId || this._generateResourceId(); },
        enumerable: false,
        configurable: true
    });
    e.prototype.update = function () { this._sharedResourceId = null, this.emit("change", this); };
    e.prototype._generateResourceId = function () { var e = "".concat(this.addressModeU, "-").concat(this.addressModeV, "-").concat(this.addressModeW, "-").concat(this.magFilter, "-").concat(this.minFilter, "-").concat(this.mipmapFilter, "-").concat(this.lodMinClamp, "-").concat(this.lodMaxClamp, "-").concat(this.compare, "-").concat(this._maxAnisotropy); return this._sharedResourceId = f(e), this._resourceId; };
    e.prototype.destroy = function () { this.destroyed = !0, this.emit("destroy", this), this.emit("change", this), this.removeAllListeners(); };
    return e;
}(n.r)), m.defaultOptions = { addressMode: "clamp-to-edge", scaleMode: "linear" }, h = m; })))(); }
function _(e) { return e.viewDimension ? e.viewDimension : e.depth ? "3d" : e.arrayLayerCount > 1 ? "2d-array" : "2d"; }
function v(e, t, n) { if (e.depth !== void 0 && typeof e.depth != "number")
    throw Error("[TextureSource] depth is a 3D texture's depth in texels, but got ".concat(e.depth, ". For a depth buffer, use the depth option of a RenderTarget or the renderer.")); if (e.depth && e.arrayLayerCount > 1)
    throw Error("[TextureSource] depth and arrayLayerCount can't be combined: use depth for a 3D texture or arrayLayerCount for a 2D array."); if (e.depth && t !== "3d")
    throw Error("[TextureSource] depth makes a 3D texture, but viewDimension is '".concat(t, "'. Use arrayLayerCount for layered textures.")); if (t === "3d" && e.arrayLayerCount > 1)
    throw Error("[TextureSource] a 3D texture takes depth, not arrayLayerCount."); if (e.dimensions && e.dimensions !== n)
    throw Error("[TextureSource] dimensions '".concat(e.dimensions, "' doesn't match viewDimension '").concat(t, "'. Leave dimensions out; it is derived from the view.")); if (e.dimensions && a.U(a.q, "TextureSource dimensions is derived from viewDimension and depth; leave it out."), n === "3d" && e.antialias)
    throw Error("[TextureSource] a 3D texture can't be antialiased: WebGPU has no multisampled 3D textures."); }
var y, b;
function x() { return (x = e.n((function () { n.i(), a.Y(), a.W(), g(), t.br(), y = (function (_super) {
    __extends(e, _super);
    function e(n) {
        if (n === void 0) { n = {}; }
        var _this = this;
        var r, i, s, c;
        _this = _super.call(this) || this, _this.options = n, _this._gpuData = Object.create(null), _this._gcLastUsed = -1, _this.uid = a.X("textureSource"), _this._resourceType = "textureSource", _this._resourceId = a.X("resource"), _this.uploadMethodId = "unknown", _this._resolution = 1, _this.pixelWidth = 1, _this.pixelHeight = 1, _this.width = 1, _this.height = 1, _this.sampleCount = 1, _this.mipLevelCount = 1, _this.autoGenerateMipmaps = !1, _this.format = "rgba8unorm", _this.dimension = "2d", _this.viewDimension = "2d", _this.arrayLayerCount = 1, _this.depth = 1, _this._ownsStyle = !1, _this.antialias = !1, _this.transient = !1, _this.storage = !1, _this._batchTick = -1, _this._textureBindLocation = -1;
        var l = n;
        n = t.yr(t.yr({}, e.defaultOptions), n);
        var u = _(n), d = u === "3d" || u === "1d" ? u : "2d";
        if (v(l, u, d), _this.label = (r = n.label) == null ? "" : r, _this.resource = n.resource, _this.autoGarbageCollect = n.autoGarbageCollect, _this._resolution = n.resolution, n.width)
            _this.pixelWidth = n.width * _this._resolution;
        else {
            var f;
            _this.pixelWidth = _this.resource ? (f = _this.resourceWidth) == null ? 1 : f : 1;
        }
        if (n.height)
            _this.pixelHeight = n.height * _this._resolution;
        else {
            var p;
            _this.pixelHeight = _this.resource ? (p = _this.resourceHeight) == null ? 1 : p : 1;
        }
        _this.width = _this.pixelWidth / _this._resolution, _this.height = _this.pixelHeight / _this._resolution, _this.format = n.format, _this.dimension = d, _this.viewDimension = u, _this.arrayLayerCount = n.arrayLayerCount, _this.depth = d === "3d" ? (i = n.depth) == null ? 1 : i : 1, _this.mipLevelCount = n.mipLevelCount, _this.autoGenerateMipmaps = n.autoGenerateMipmaps, _this.sampleCount = n.sampleCount, _this.antialias = d !== "3d" && n.antialias, _this.transient = (s = n.transient) != null && s, _this.storage = (c = n.storage) != null && c, _this.alphaMode = n.alphaMode, _this.style = new h(o.N(n)), _this._ownsStyle = !0, _this.destroyed = !1, _this._refreshPOT();
        return _this;
    }
    Object.defineProperty(e.prototype, "depthOrArrayLayers", {
        get: function () { return this.dimension === "3d" ? this.depth : this.arrayLayerCount || 1; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "source", {
        get: function () { return this; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "style", {
        get: function () { return this._style; },
        set: function (e) { var t, n; this.style !== e && (this._ownsStyle = !1, (t = this._style) == null || t.off("change", this._onStyleChange, this), this._style = e, (n = this._style) == null || n.on("change", this._onStyleChange, this), this._onStyleChange()); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "maxAnisotropy", {
        get: function () { return this._style.maxAnisotropy; },
        set: function (e) { this._style.maxAnisotropy = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "addressMode", {
        get: function () { return this._style.addressMode; },
        set: function (e) { this._style.addressMode = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "repeatMode", {
        get: function () { return this._style.addressMode; },
        set: function (e) { this._style.addressMode = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "magFilter", {
        get: function () { return this._style.magFilter; },
        set: function (e) { this._style.magFilter = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "minFilter", {
        get: function () { return this._style.minFilter; },
        set: function (e) { this._style.minFilter = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "mipmapFilter", {
        get: function () { return this._style.mipmapFilter; },
        set: function (e) { this._style.mipmapFilter = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "lodMinClamp", {
        get: function () { return this._style.lodMinClamp; },
        set: function (e) { this._style.lodMinClamp = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "lodMaxClamp", {
        get: function () { return this._style.lodMaxClamp; },
        set: function (e) { this._style.lodMaxClamp = e; },
        enumerable: false,
        configurable: true
    });
    e.prototype._onStyleChange = function () { this.emit("styleChange", this); };
    e.prototype.update = function () { if (this.resource) {
        var e_1 = this._resolution;
        if (this.resize(this.resourceWidth / e_1, this.resourceHeight / e_1))
            return;
    } this.emit("update", this); };
    e.prototype.destroy = function () { this.destroyed = !0, this.unload(), this.emit("destroy", this), this._style && (this._ownsStyle && this._style.destroy(), this._style = null), this.uploadMethodId = null, this.resource = null, this.removeAllListeners(); };
    e.prototype.unload = function () { this._resourceId = a.X("resource"), this.emit("change", this), this.emit("unload", this); for (var n_1 in this._gpuData) {
        var e, t;
        (e = this._gpuData[n_1]) == null || (t = e.destroy) == null || t.call(e);
    } this._gpuData = Object.create(null); };
    Object.defineProperty(e.prototype, "resourceWidth", {
        get: function () { var e = this.resource; return e.naturalWidth || e.videoWidth || e.displayWidth || e.width; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "resourceHeight", {
        get: function () { var e = this.resource; return e.naturalHeight || e.videoHeight || e.displayHeight || e.height; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "resolution", {
        get: function () { return this._resolution; },
        set: function (e) { this._resolution !== e && (this._resolution = e, this.width = this.pixelWidth / e, this.height = this.pixelHeight / e); },
        enumerable: false,
        configurable: true
    });
    e.prototype.resize = function (e, t, n) { n || (n = this._resolution), e || (e = this.width), t || (t = this.height); var r = Math.round(e * n), i = Math.round(t * n); return this.width = r / n, this.height = i / n, this._resolution = n, this.pixelWidth === r && this.pixelHeight === i ? !1 : (this._refreshPOT(), this.pixelWidth = r, this.pixelHeight = i, this.emit("resize", this), this._resourceId = a.X("resource"), this.emit("change", this), !0); };
    e.prototype.updateMipmaps = function () { this.autoGenerateMipmaps && this.mipLevelCount > 1 && this.emit("updateMipmaps", this); };
    Object.defineProperty(e.prototype, "wrapMode", {
        get: function () { return this._style.wrapMode; },
        set: function (e) { this._style.wrapMode = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "scaleMode", {
        get: function () { return this._style.scaleMode; },
        set: function (e) { this._style.scaleMode = e; },
        enumerable: false,
        configurable: true
    });
    e.prototype._refreshPOT = function () { this.isPowerOfTwo = i.m(this.pixelWidth) && i.m(this.pixelHeight); };
    e.test = function (e) { throw Error("Unimplemented"); };
    return e;
}(n.r)), y.defaultOptions = { resolution: 1, format: "bgra8unorm", alphaMode: "premultiply-alpha-on-upload", arrayLayerCount: 1, mipLevelCount: 1, autoGenerateMipmaps: !1, sampleCount: 1, antialias: !1, autoGarbageCollect: !1 }, b = y; })))(); }
var S;
function C() { return (C = e.n((function () { r.q(), x(), t.br(), S = (function (_super) {
    __extends(S, _super);
    function S(e) {
        var _this = this;
        var n, r;
        var i = (n = (r = e.depth) == null ? e.arrayLayerCount : r) == null ? 1 : n, a = e.resource || new Float32Array(e.width * e.height * i * 4), o = e.format;
        o || (o = a instanceof Float32Array ? "rgba32float" : a instanceof Int32Array || a instanceof Uint32Array ? "rgba32uint" : a instanceof Int16Array || a instanceof Uint16Array ? "rgba16uint" : (a instanceof Int8Array, "bgra8unorm"));
        var s = u(o) || i > 1;
        _this = _super.call(this, t.yr(t.yr(t.yr({}, s && { alphaMode: "no-premultiply-alpha" }), e), {}, { resource: a, format: o })) || this, _this.uploadMethodId = "buffer", _this._updateStart = 0, _this._updateEnd = 1 / 0;
        return _this;
    }
    S.prototype.update = function (e, t) {
        if (e === void 0) { e = 0; }
        if (t === void 0) { t = 1 / 0; }
        if ((e > 0 || t < 1 / 0) && this.depthOrArrayLayers > 1)
            throw Error("[BufferImageSource] a 3D texture or 2D array uploads whole: call update() with no range.");
        this._updateStart = e, this._updateEnd = t, _super.prototype.update.call(this), this._updateStart = 0, this._updateEnd = 1 / 0;
    };
    S.test = function (e) { return e instanceof Int8Array || e instanceof Uint8Array || e instanceof Uint8ClampedArray || e instanceof Int16Array || e instanceof Uint16Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Float32Array; };
    return S;
}(b)), S.extension = r.G.TextureSource; })))(); }
var w, T;
function E() { return (E = e.n((function () { i.x(), w = new i.b, T = (function () {
    function T(e, t) {
        this.mapCoord = new i.b, this.uClampFrame = new Float32Array(4), this.uClampOffset = new Float32Array(2), this._updateID = 0, this.clampOffset = 0, this.clampMargin = t === void 0 ? e.width < 10 ? 0 : .5 : t, this.isSimple = !1, this.texture = e;
    }
    Object.defineProperty(T.prototype, "texture", {
        get: function () { return this._texture; },
        set: function (e) { if (this._texture !== e) {
            var t;
            (t = this._texture) == null || t.removeListener("update", this.update, this), this._texture = e, this._texture.addListener("update", this.update, this);
        } this.update(); },
        enumerable: false,
        configurable: true
    });
    T.prototype.destroy = function () { var e; (e = this._texture) == null || e.removeListener("update", this.update, this), this._texture = null; };
    T.prototype.multiplyUvs = function (e, t) { t === void 0 && (t = e); var n = this.mapCoord; for (var r_1 = 0; r_1 < e.length; r_1 += 2) {
        var i_1 = e[r_1], a_1 = e[r_1 + 1];
        t[r_1] = i_1 * n.a + a_1 * n.c + n.tx, t[r_1 + 1] = i_1 * n.b + a_1 * n.d + n.ty;
    } return t; };
    T.prototype.update = function () { var e = this._texture; this._updateID++; var t = e.uvs; this.mapCoord.set(t.x1 - t.x0, t.y1 - t.y0, t.x3 - t.x0, t.y3 - t.y0, t.x0, t.y0); var n = e.orig, r = e.trim; r && (w.set(n.width / r.width, 0, 0, n.height / r.height, -r.x / r.width, -r.y / r.height), this.mapCoord.append(w)); var i = e.source, a = this.uClampFrame, o = this.clampMargin / i._resolution, s = this.clampOffset / i._resolution; return a[0] = (e.frame.x + o + s) / i.width, a[1] = (e.frame.y + o + s) / i.height, a[2] = (e.frame.x + e.frame.width - o + s) / i.width, a[3] = (e.frame.y + e.frame.height - o + s) / i.height, this.uClampOffset[0] = this.clampOffset / i.pixelWidth, this.uClampOffset[1] = this.clampOffset / i.pixelHeight, this.isSimple = e.frame.width === i.width && e.frame.height === i.height && e.rotate === 0, !0; };
    return T;
}()); })))(); }
var D;
function O() { return (O = e.n((function () { n.i(), i.y(), i._(), a.Y(), a.W(), a.H(), C(), x(), E(), D = (function (_super) {
    __extends(D, _super);
    function D(_a) {
        var _b = _a === void 0 ? {} : _a, e = _b.source, t = _b.label, n = _b.frame, r = _b.orig, o = _b.trim, s = _b.defaultAnchor, c = _b.defaultBorders, l = _b.rotate, u = _b.dynamic;
        var _this = this;
        var d;
        if (_this = _super.call(this) || this, _this.uid = a.X("texture"), _this.uvs = { x0: 0, y0: 0, x1: 0, y1: 0, x2: 0, y2: 0, x3: 0, y3: 0 }, _this.frame = new i.g, _this.noFrame = !1, _this.dynamic = !1, _this.isTexture = !0, _this.label = t, _this.source = (d = e == null ? void 0 : e.source) == null ? new b : d, _this.noFrame = !n, n)
            _this.frame.copyFrom(n);
        else {
            var _c = _this._source, e_2 = _c.width, t_1 = _c.height;
            _this.frame.width = e_2, _this.frame.height = t_1;
        }
        _this.orig = r || _this.frame, _this.trim = o, _this.rotate = l == null ? 0 : l, _this.defaultAnchor = s, _this.defaultBorders = c, _this.destroyed = !1, _this.dynamic = u || !1, _this.updateUvs();
        return _this;
    }
    Object.defineProperty(D.prototype, "source", {
        get: function () { return this._source; },
        set: function (e) { this._source && this._source.off("resize", this.update, this), this._source = e, e.on("resize", this.update, this), this.emit("update", this); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "textureMatrix", {
        get: function () { return this._textureMatrix || (this._textureMatrix = new T(this)), this._textureMatrix; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "width", {
        get: function () { return this.orig.width; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "height", {
        get: function () { return this.orig.height; },
        enumerable: false,
        configurable: true
    });
    D.prototype.updateUvs = function () { var _a = this, e = _a.uvs, t = _a.frame, _b = this._source, n = _b.width, r = _b.height, a = t.x / n, o = t.y / r, s = t.width / n, c = t.height / r, l = this.rotate; if (l) {
        var t_2 = s / 2, n_2 = c / 2, r_2 = a + t_2, u_1 = o + n_2;
        l = i.v.add(l, i.v.NW), e.x0 = r_2 + t_2 * i.v.uX(l), e.y0 = u_1 + n_2 * i.v.uY(l), l = i.v.add(l, 2), e.x1 = r_2 + t_2 * i.v.uX(l), e.y1 = u_1 + n_2 * i.v.uY(l), l = i.v.add(l, 2), e.x2 = r_2 + t_2 * i.v.uX(l), e.y2 = u_1 + n_2 * i.v.uY(l), l = i.v.add(l, 2), e.x3 = r_2 + t_2 * i.v.uX(l), e.y3 = u_1 + n_2 * i.v.uY(l);
    }
    else
        e.x0 = a, e.y0 = o, e.x1 = a + s, e.y1 = o, e.x2 = a + s, e.y2 = o + c, e.x3 = a, e.y3 = o + c; };
    D.prototype.destroy = function (e) {
        if (e === void 0) { e = !1; }
        this._source && (this._source.off("resize", this.update, this), e && (this._source.destroy(), this._source = null)), this._textureMatrix = null, this.destroyed = !0, this.emit("destroy", this), this.removeAllListeners();
    };
    D.prototype.update = function () { this.noFrame && (this.frame.width = this._source.width, this.frame.height = this._source.height), this.updateUvs(), this.emit("update", this); };
    Object.defineProperty(D.prototype, "baseTexture", {
        get: function () { return a.U(a.G, "Texture.baseTexture is now Texture.source"), this._source; },
        enumerable: false,
        configurable: true
    });
    return D;
}(n.r)), D.EMPTY = new D({ label: "EMPTY", source: new b({ label: "EMPTY" }) }), D.EMPTY.destroy = a.V, D.WHITE = new D({ source: new S({ resource: new Uint8Array([255, 255, 255, 255]), width: 1, height: 1, alphaMode: "premultiply-alpha-on-upload", label: "WHITE" }), label: "WHITE" }), D.WHITE.destroy = a.V; })))(); }
var ee;
function te() { return (te = e.n((function () { a.Y(), ee = (function () {
    function ee() {
        this.uid = a.X("instructionSet"), this.instructions = [], this.instructionSize = 0, this.renderables = [], this.gcTick = 0;
    }
    ee.prototype.reset = function () { this.instructionSize = 0; };
    ee.prototype.destroy = function () { if (this.renderPipes)
        for (var n_3 in this.renderPipes) {
            var e, t;
            (e = (t = this.renderPipes[n_3]).destroyInstructionSet) == null || e.call(t, this);
        } this.instructions.length = 0, this.renderables.length = 0, this.renderPipes = null, this.gcTick = 0; };
    ee.prototype.add = function (e) { this.instructions[this.instructionSize++] = e; };
    ee.prototype.log = function () { this.instructions.length = this.instructionSize, console.table(this.instructions, ["type", "action"]); };
    return ee;
}()); })))(); }
var ne;
function re() { return (re = e.n((function () { ne = (function () {
    function ne() {
        this._screenSizes = new Map, this._widths = [], this._heights = [];
    }
    Object.defineProperty(ne.prototype, "size", {
        get: function () { return this._screenSizes.size; },
        enumerable: false,
        configurable: true
    });
    ne.prototype.set = function (e, t, n) { var r = this._screenSizes.get(e); return r && r.pixelWidth === t && r.pixelHeight === n ? !1 : (this._screenSizes.set(e, { pixelWidth: t, pixelHeight: n }), this._update(), !0); };
    ne.prototype.remove = function (e) { return this._screenSizes.delete(e) ? (this._update(), !0) : !1; };
    ne.prototype.getFittingWidth = function (e) { return this._getFittingAxis(e, this._widths); };
    ne.prototype.getFittingHeight = function (e) { return this._getFittingAxis(e, this._heights); };
    ne.prototype.hasWidth = function (e) { return this._widths.includes(e); };
    ne.prototype.hasHeight = function (e) { return this._heights.includes(e); };
    ne.prototype._getFittingAxis = function (e, t) { for (var n_4 = 0; n_4 < t.length; n_4++) {
        var r_3 = t[n_4];
        if (r_3 >= e)
            return r_3;
    } };
    ne.prototype._update = function () { this._widths = __spreadArray([], this._screenSizes.values(), true).map(function (e) { return e.pixelWidth; }).filter(function (e, t, n) { return n.indexOf(e) === t; }).sort(function (e, t) { return e - t; }), this._heights = __spreadArray([], this._screenSizes.values(), true).map(function (e) { return e.pixelHeight; }).filter(function (e, t, n) { return n.indexOf(e) === t; }).sort(function (e, t) { return e - t; }); };
    return ne;
}()); })))(); }
function ie(e) { var t = le[e]; return t === void 0 ? le[e] = ue++ : t; }
function ae(e, t, n, r, i, a) { return (e << 17) + (t << 2) + (!!r << 1) + +!!n + +(a === "nearest") * se + ie(i) * ce; }
var oe, k, se, ce, le, ue, de, A;
function fe() { return (fe = e.n((function () { a.W(), a.L(), a.I(), x(), O(), g(), re(), t.br(), oe = 0, k = 32767, se = 4294967296, ce = 8589934592, le = Object.create(null), ue = 0, de = (function () {
    function de(e) {
        this._buckets = new Map, this._poolKey = Object.create(null), this._poolStyle = Object.create(null), this._screens = new ne, this._enableFullScreen = !1, this.textureOptions = e || {};
    }
    Object.defineProperty(de.prototype, "textureStyle", {
        get: function () { return a.U(a.K, "TexturePool.textureStyle is no longer used, pooled textures carry their own style. Pass scaleMode in the request instead."), this._textureStyle || (this._textureStyle = new h(this.textureOptions)), this._textureStyle; },
        set: function (e) { a.U(a.K, "TexturePool.textureStyle is no longer used, pooled textures carry their own style. Pass scaleMode in the request instead."), this._textureStyle = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(de.prototype, "enableFullScreen", {
        get: function () { return a.U(a.K, "TexturePool.enableFullScreen is no longer used, the pool sizes textures to the screens registered with setScreenSize."), this._enableFullScreen; },
        set: function (e) { a.U(a.K, "TexturePool.enableFullScreen is no longer used, the pool sizes textures to the screens registered with setScreenSize."), this._enableFullScreen = e; },
        enumerable: false,
        configurable: true
    });
    de.prototype.createTexture = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        var n, r, i, o, s, c;
        var l = e[0];
        if (typeof l == "number") {
            var u, d;
            a.U(a.K, "TexturePool.createTexture params are now an options object. See params: { width, height, antialias, autoGenerateMipmaps }"), l = { width: l, height: e[1], antialias: (u = e[2]) != null && u, autoGenerateMipmaps: (d = e[3]) != null && d };
        }
        var f = (n = (r = l.format) == null ? this.textureOptions.format : r) == null ? b.defaultOptions.format : n, p = (i = (o = l.scaleMode) == null ? this.textureOptions.scaleMode : o) == null ? h.defaultOptions.scaleMode : i, m = new b(t.yr(t.yr({}, this.textureOptions), {}, { width: l.width, height: l.height, resolution: 1, antialias: (s = l.antialias) != null && s, autoGarbageCollect: !1, autoGenerateMipmaps: (c = l.autoGenerateMipmaps) != null && c, format: f, scaleMode: p }));
        return new D({ source: m, label: "texturePool_".concat(oe++) });
    };
    de.prototype.getOptimalTexture = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        var t, n, r, i, o, s, c;
        var l = e[0];
        if (typeof l == "number") {
            var u, d, f;
            a.U(a.K, "TexturePool.getOptimalTexture params are now an options object. See params: { width, height, resolution, antialias, autoGenerateMipmaps }"), l = { width: l, height: e[1], resolution: (u = e[2]) == null ? 1 : u, antialias: (d = e[3]) != null && d, autoGenerateMipmaps: (f = e[4]) != null && f };
        }
        var p = l.width, m = l.height, g = (t = l.resolution) == null ? 1 : t, _ = (n = l.antialias) != null && n, v = (r = l.autoGenerateMipmaps) != null && r, y = (i = (o = l.format) == null ? this.textureOptions.format : o) == null ? b.defaultOptions.format : i, x = (s = (c = l.scaleMode) == null ? this.textureOptions.scaleMode : c) == null ? h.defaultOptions.scaleMode : s, _a = this.getOptimalSize(p, m, g), S = _a.width, C = _a.height;
        (S > k || C > k) && a.R("TexturePool: ".concat(S, "x").concat(C, " is larger than the ").concat(k, "px pool key limit, textures of this size may be pooled together"));
        var w = ae(S, C, _, v, y, x), T = this._buckets.get(w);
        T || (T = [], this._buckets.set(w, T));
        var E = T.pop();
        return E || (E = this.createTexture({ width: S, height: C, antialias: _, autoGenerateMipmaps: v, format: y, scaleMode: x }), this._poolStyle[E.uid] = E.source.style), E.source._resolution = g, E.source.width = S / g, E.source.height = C / g, E.source.pixelWidth = S, E.source.pixelHeight = C, E.frame.x = 0, E.frame.y = 0, E.frame.width = p, E.frame.height = m, E.updateUvs(), this._poolKey[E.uid] = w, E;
    };
    de.prototype.getOptimalSize = function (e, t, n) {
        if (n === void 0) { n = 1; }
        var r = Math.ceil(e * n - 1e-6), a = Math.ceil(t * n - 1e-6), o = i.h(r), s = this._screens.getFittingWidth(r), c = i.h(a), l = this._screens.getFittingHeight(a);
        return { width: s === void 0 ? o : Math.min(s, o), height: l === void 0 ? c : Math.min(l, c) };
    };
    de.prototype.getSameSizeTexture = function (e, t) {
        if (t === void 0) { t = !1; }
        var n = e.source;
        return this.getOptimalTexture({ width: e.width, height: e.height, resolution: n._resolution, antialias: t });
    };
    de.prototype.returnTexture = function (e, t) {
        if (t === void 0) { t = !1; }
        var n = e.uid, r = this._poolKey[n];
        if (r === void 0) {
            a.R("TexturePool: returnTexture was passed a texture that did not come from this pool, ignoring it");
            return;
        }
        var i = this._poolStyle[n];
        t && e.source.style !== i && (e.source.style = i);
        var o = this._buckets.get(r);
        o ? o.push(e) : (delete this._poolKey[n], delete this._poolStyle[n], e.destroy(!0));
    };
    de.prototype.setScreenSize = function (e, t, n) { this._screens.set(e, t, n) && this._pruneScreenTextures(); };
    de.prototype.removeScreen = function (e) { this._screens.remove(e) && this._pruneScreenTextures(); };
    de.prototype._pruneScreenTextures = function () { for (var _i = 0, _a = this._buckets; _i < _a.length; _i++) {
        var _b = _a[_i], e_3 = _b[0], t_3 = _b[1];
        var n_5 = e_3 >>> 0, r_4 = n_5 >>> 17, a_2 = n_5 >>> 2 & 32767;
        (!i.m(r_4) && !this._screens.hasWidth(r_4) || !i.m(a_2) && !this._screens.hasHeight(a_2)) && (this._dropTextures(t_3, !0), this._buckets.delete(e_3));
    } };
    de.prototype._dropTextures = function (e, t) { for (var n_6 = 0; n_6 < e.length; n_6++) {
        var r_5 = e[n_6];
        delete this._poolKey[r_5.uid], delete this._poolStyle[r_5.uid], t && r_5.destroy(!0);
    } };
    de.prototype.clear = function (e) { for (var _i = 0, _a = this._buckets.values(); _i < _a.length; _i++) {
        var t_4 = _a[_i];
        this._dropTextures(t_4, e !== !1);
    } this._buckets.clear(); };
    return de;
}()), A = new de, a.F.register(A); })))(); }
var j;
function M() { return (M = e.n((function () { r.P(), r.q(), x(), j = (function (_super) {
    __extends(j, _super);
    function j(e) {
        var _this = this;
        e.resource || (e.resource = r.N.get().createCanvas()), e.width || (e.width = e.resource.width, e.autoDensity || (e.width /= e.resolution)), e.height || (e.height = e.resource.height, e.autoDensity || (e.height /= e.resolution)), _this = _super.call(this, e) || this, _this.uploadMethodId = "image", _this.autoDensity = e.autoDensity, _this.resizeCanvas(), _this.transparent = !!e.transparent;
        return _this;
    }
    j.prototype.resizeCanvas = function () { this.autoDensity && "style" in this.resource && (this.resource.style.width = "".concat(this.width, "px"), this.resource.style.height = "".concat(this.height, "px")), (this.resource.width !== this.pixelWidth || this.resource.height !== this.pixelHeight) && (this.resource.width = this.pixelWidth, this.resource.height = this.pixelHeight); };
    j.prototype.resize = function (e, t, n) {
        if (e === void 0) { e = this.width; }
        if (t === void 0) { t = this.height; }
        if (n === void 0) { n = this._resolution; }
        var r = _super.prototype.resize.call(this, e, t, n);
        return r && this.resizeCanvas(), r;
    };
    j.test = function (e) { return globalThis.HTMLCanvasElement && e instanceof HTMLCanvasElement || globalThis.OffscreenCanvas && e instanceof OffscreenCanvas; };
    Object.defineProperty(j.prototype, "context2D", {
        get: function () { return this._context2D || (this._context2D = this.resource.getContext("2d")); },
        enumerable: false,
        configurable: true
    });
    return j;
}(b)), j.extension = r.G.TextureSource; })))(); }
var pe;
function me() { return (me = e.n((function () { r.q(), x(), pe = (function (_super) {
    __extends(pe, _super);
    function pe(e) {
        var _this = this;
        _this = _super.call(this, e) || this, _this.uploadMethodId = "image", _this.autoGarbageCollect = !0;
        return _this;
    }
    pe.test = function (e) { return globalThis.HTMLImageElement && e instanceof HTMLImageElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap || globalThis.VideoFrame && e instanceof VideoFrame; };
    return pe;
}(b)), pe.extension = r.G.TextureSource; })))(); }
var N, he;
function ge() { return (ge = e.n((function () { r.q(), a.O(), a.E(), x(), t.br(), N = (function (_super) {
    __extends(e, _super);
    function e(n) {
        var _this = this;
        var r;
        _this = _super.call(this, n) || this, _this.isReady = !1, _this.uploadMethodId = "video", n = t.yr(t.yr({}, e.defaultOptions), n), _this._autoUpdate = !0, _this._isConnectedToTicker = !1, _this._updateFPS = n.updateFPS || 0, _this._msToNextUpdate = 0, _this.autoPlay = n.autoPlay !== !1, _this.alphaMode = (r = n.alphaMode) == null ? "premultiply-alpha-on-upload" : r, _this._videoFrameRequestCallback = _this._videoFrameRequestCallback.bind(_this), _this._videoFrameRequestCallbackHandle = null, _this._load = null, _this._resolve = null, _this._reject = null, _this._onCanPlay = _this._onCanPlay.bind(_this), _this._onCanPlayThrough = _this._onCanPlayThrough.bind(_this), _this._onError = _this._onError.bind(_this), _this._onPlayStart = _this._onPlayStart.bind(_this), _this._onPlayStop = _this._onPlayStop.bind(_this), _this._onSeeked = _this._onSeeked.bind(_this), _this._onLoadedMetadata = _this._onLoadedMetadata.bind(_this), n.autoLoad !== !1 && _this.load();
        return _this;
    }
    e.prototype.updateFrame = function () { if (!this.destroyed) {
        if (this._updateFPS) {
            var e_4 = a.D.shared.elapsedMS * this.resource.playbackRate;
            this._msToNextUpdate = Math.floor(this._msToNextUpdate - e_4);
        }
        (!this._updateFPS || this._msToNextUpdate <= 0) && (this._msToNextUpdate = this._updateFPS ? Math.floor(1e3 / this._updateFPS) : 0), this.isValid && this.update();
    } };
    e.prototype._videoFrameRequestCallback = function () { this.updateFrame(), this._videoFrameRequestCallbackHandle = this.destroyed ? null : this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback); };
    Object.defineProperty(e.prototype, "isValid", {
        get: function () { return !!this.resource.videoWidth && !!this.resource.videoHeight; },
        enumerable: false,
        configurable: true
    });
    e.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e, t, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this._load)
                            return [2, this._load];
                        e = this.resource, t = this.options;
                        (e.readyState === e.HAVE_ENOUGH_DATA || e.readyState === e.HAVE_FUTURE_DATA) && e.width && e.height && (e.complete = !0), e.addEventListener("play", this._onPlayStart), e.addEventListener("pause", this._onPlayStop), e.addEventListener("seeked", this._onSeeked), this._isSourceReady() ? this._mediaReady() : (t.preload || e.addEventListener("canplay", this._onCanPlay), e.addEventListener("canplaythrough", this._onCanPlayThrough), e.addEventListener("error", this._onError, !0)), this.isValid || e.addEventListener("loadedmetadata", this._onLoadedMetadata);
                        _a = this;
                        return [4, a.T()];
                    case 1: return [2, (_a.alphaMode = _b.sent(), this._load = new Promise(function (n, r) { _this.isValid ? n(_this) : (_this._resolve = n, _this._reject = r, t.preloadTimeoutMs !== void 0 && (_this._preloadTimeout = setTimeout(function () { _this._onError(new ErrorEvent("Preload exceeded timeout of ".concat(t.preloadTimeoutMs, "ms"))); })), e.load()); }), this._load)];
                }
            });
        });
    };
    e.prototype._onError = function (e) { this.resource.removeEventListener("error", this._onError, !0), this.emit("error", e), this._reject && (this._reject(e), this._reject = null, this._resolve = null); };
    e.prototype._isSourcePlaying = function () { var e = this.resource; return !e.paused && !e.ended; };
    e.prototype._isSourceReady = function () { return this.resource.readyState > 2; };
    e.prototype._onPlayStart = function () { this._configureAutoUpdate(); };
    e.prototype._onPlayStop = function () { this._configureAutoUpdate(); };
    e.prototype._onSeeked = function () { this._autoUpdate && !this._isSourcePlaying() && (this._msToNextUpdate = 0, this.updateFrame(), this._msToNextUpdate = 0); };
    e.prototype._onLoadedMetadata = function () { this.isValid && this._mediaReady(); };
    e.prototype._onCanPlay = function () { this.resource.removeEventListener("canplay", this._onCanPlay), this._mediaReady(); };
    e.prototype._onCanPlayThrough = function () { this.resource.removeEventListener("canplaythrough", this._onCanPlayThrough), this._preloadTimeout && (clearTimeout(this._preloadTimeout), this._preloadTimeout = void 0), this._mediaReady(); };
    e.prototype._mediaReady = function () { var e = this.resource; this.isValid && (this.isReady = !0, this.resize(e.videoWidth, e.videoHeight)), this._msToNextUpdate = 0, this.updateFrame(), this._msToNextUpdate = 0, this._resolve && this.isValid && (this._resolve(this), this._resolve = null, this._reject = null), this._isSourcePlaying() ? this._onPlayStart() : this.autoPlay && this.resource.play(); };
    e.prototype.destroy = function () { this._configureAutoUpdate(); var e = this.resource; e && (e.removeEventListener("play", this._onPlayStart), e.removeEventListener("pause", this._onPlayStop), e.removeEventListener("seeked", this._onSeeked), e.removeEventListener("canplay", this._onCanPlay), e.removeEventListener("canplaythrough", this._onCanPlayThrough), e.removeEventListener("loadedmetadata", this._onLoadedMetadata), e.removeEventListener("error", this._onError, !0), e.pause(), e.src = "", e.load()), _super.prototype.destroy.call(this); };
    Object.defineProperty(e.prototype, "autoUpdate", {
        get: function () { return this._autoUpdate; },
        set: function (e) { e !== this._autoUpdate && (this._autoUpdate = e, this._configureAutoUpdate()); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "updateFPS", {
        get: function () { return this._updateFPS; },
        set: function (e) { e !== this._updateFPS && (this._updateFPS = e, this._configureAutoUpdate()); },
        enumerable: false,
        configurable: true
    });
    e.prototype._configureAutoUpdate = function () { this._autoUpdate && this._isSourcePlaying() ? !this._updateFPS && this.resource.requestVideoFrameCallback ? (this._isConnectedToTicker && (a.D.shared.remove(this.updateFrame, this), this._isConnectedToTicker = !1, this._msToNextUpdate = 0), this._videoFrameRequestCallbackHandle === null && (this._videoFrameRequestCallbackHandle = this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback))) : (this._videoFrameRequestCallbackHandle !== null && (this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle), this._videoFrameRequestCallbackHandle = null), this._isConnectedToTicker || (a.D.shared.add(this.updateFrame, this), this._isConnectedToTicker = !0, this._msToNextUpdate = 0)) : (this._videoFrameRequestCallbackHandle !== null && (this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle), this._videoFrameRequestCallbackHandle = null), this._isConnectedToTicker && (a.D.shared.remove(this.updateFrame, this), this._isConnectedToTicker = !1, this._msToNextUpdate = 0)); };
    e.test = function (e) { return globalThis.HTMLVideoElement && e instanceof HTMLVideoElement; };
    return e;
}(b)), N.extension = r.G.TextureSource, N.defaultOptions = t.yr(t.yr({}, b.defaultOptions), {}, { autoLoad: !0, autoPlay: !0, updateFPS: 0, crossorigin: !0, loop: !1, muted: !0, playsinline: !0, preload: !1 }), N.MIME_TYPES = { ogv: "video/ogg", mov: "video/quicktime", m4v: "video/mp4" }, he = N; })))(); }
function _e(e) {
    if (e === void 0) { e = {}; }
    var t = e && e.resource, n = t ? e.resource : e, r = t ? e : { resource: e };
    for (var e_5 = 0; e_5 < P.length; e_5++) {
        var t_5 = P[e_5];
        if (t_5.test(n))
            return new t_5(r);
    }
    throw Error("Could not find a source type for resource: ".concat(r.resource));
}
function ve(e, t) {
    if (e === void 0) { e = {}; }
    if (t === void 0) { t = !1; }
    var n = e && e.resource, i = n ? e.resource : e, a = n ? e : { resource: e };
    if (!t && r.j.has(i))
        return r.j.get(i);
    var o = new D({ source: _e(a) });
    return o.on("destroy", function () { r.j.has(i) && r.j.remove(i); }), t || r.j.set(i, o), o;
}
function ye(e, t) {
    if (t === void 0) { t = !1; }
    return typeof e == "string" ? r.j.get(e) : e instanceof b ? new D({ source: e }) : ve(e, t);
}
var P;
function be() { return (be = e.n((function () { r.M(), r.q(), x(), O(), P = [], r.K.handleByList(r.G.TextureSource, P), D.from = ye, b.from = _e; })))(); }
function xe(e, t) { var n = Se[e]; return n === void 0 && (F[t] === void 0 && (F[t] = 1), Se[e] = n = F[t]++), n; }
var F, Se;
function I() { return (I = e.n((function () { F = Object.create(null), Se = Object.create(null); })))(); }
function Ce(e) { var t; return (t = we[e]) == null ? we.float32 : t; }
var we;
function Te() { return (Te = e.n((function () { we = { uint8x2: { size: 2, stride: 2, normalised: !1 }, uint8x4: { size: 4, stride: 4, normalised: !1 }, sint8x2: { size: 2, stride: 2, normalised: !1 }, sint8x4: { size: 4, stride: 4, normalised: !1 }, unorm8x2: { size: 2, stride: 2, normalised: !0 }, unorm8x4: { size: 4, stride: 4, normalised: !0 }, snorm8x2: { size: 2, stride: 2, normalised: !0 }, snorm8x4: { size: 4, stride: 4, normalised: !0 }, uint16x2: { size: 2, stride: 4, normalised: !1 }, uint16x4: { size: 4, stride: 8, normalised: !1 }, sint16x2: { size: 2, stride: 4, normalised: !1 }, sint16x4: { size: 4, stride: 8, normalised: !1 }, unorm16x2: { size: 2, stride: 4, normalised: !0 }, unorm16x4: { size: 4, stride: 8, normalised: !0 }, snorm16x2: { size: 2, stride: 4, normalised: !0 }, snorm16x4: { size: 4, stride: 8, normalised: !0 }, float16x2: { size: 2, stride: 4, normalised: !1 }, float16x4: { size: 4, stride: 8, normalised: !1 }, float32: { size: 1, stride: 4, normalised: !1 }, float32x2: { size: 2, stride: 8, normalised: !1 }, float32x3: { size: 3, stride: 12, normalised: !1 }, float32x4: { size: 4, stride: 16, normalised: !1 }, uint32: { size: 1, stride: 4, normalised: !1 }, uint32x2: { size: 2, stride: 8, normalised: !1 }, uint32x3: { size: 3, stride: 12, normalised: !1 }, uint32x4: { size: 4, stride: 16, normalised: !1 }, sint32: { size: 1, stride: 4, normalised: !1 }, sint32x2: { size: 2, stride: 8, normalised: !1 }, sint32x3: { size: 3, stride: 12, normalised: !1 }, sint32x4: { size: 4, stride: 16, normalised: !1 } }; })))(); }
var Ee;
function De() { return (De = e.n((function () { Ee = (function (e) { return (e[e.VERTEX = 1] = "VERTEX", e[e.FRAGMENT = 2] = "FRAGMENT", e[e.COMPUTE = 4] = "COMPUTE", e); })(Ee || {}); })))(); }
var Oe, ke;
function Ae() { return (Ae = e.n((function () { Oe = ["f32", "i32", "u32", "vec2<f32>", "vec3<f32>", "vec4<f32>", "mat2x2<f32>", "mat3x3<f32>", "mat4x4<f32>", "mat3x2<f32>", "mat4x2<f32>", "mat2x3<f32>", "mat4x3<f32>", "mat2x4<f32>", "mat3x4<f32>", "vec2<i32>", "vec3<i32>", "vec4<i32>", "vec2<u32>", "vec3<u32>", "vec4<u32>"], ke = Oe.reduce(function (e, t) { return (e[t] = !0, e); }, {}); })))(); }
function je(e, t) { switch (e) {
    case "f32": return 0;
    case "vec2<f32>": return new Float32Array(2 * t);
    case "vec3<f32>": return new Float32Array(3 * t);
    case "vec4<f32>": return new Float32Array(4 * t);
    case "mat2x2<f32>": return new Float32Array([1, 0, 0, 1]);
    case "mat3x3<f32>": return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
    case "mat4x4<f32>": return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
} return null; }
var Me, L;
function R() { return (R = e.n((function () { n.i(), a.Y(), I(), Ae(), t.br(), Me = (function (_super) {
    __extends(e, _super);
    function e(n, r) {
        var _this = this;
        _this = _super.call(this) || this, _this.uid = a.X("uniform"), _this._resourceType = "uniformGroup", _this._resourceId = a.X("resource"), _this.isUniformGroup = !0, _this._dirtyId = 0, _this.destroyed = !1, r = t.yr(t.yr({}, e.defaultOptions), r), _this.uniformStructures = n;
        var i = {};
        for (var e_6 in n) {
            var o;
            var t_6 = n[e_6];
            if (t_6.name = e_6, t_6.size = (o = t_6.size) == null ? 1 : o, !ke[t_6.type]) {
                var e_7 = t_6.type.match(/^array<(\w+(?:<\w+>)?),\s*(\d+)>$/);
                if (e_7) {
                    var n_7 = e_7[1], r_6 = e_7[2];
                    throw Error("Uniform type ".concat(t_6.type, " is not supported. Use type: '").concat(n_7, "', size: ").concat(r_6, " instead."));
                }
                throw Error("Uniform type ".concat(t_6.type, " is not supported. Supported uniform types are: ").concat(Oe.join(", ")));
            }
            t_6.value != null || (t_6.value = je(t_6.type, t_6.size)), i[e_6] = t_6.value;
        }
        _this.uniforms = i, _this._dirtyId = 1, _this.ubo = r.ubo, _this.isStatic = r.isStatic, _this._signature = xe(Object.keys(i).map(function (e) { return "".concat(e, "-").concat(n[e].type); }).join("-"), "uniform-group");
        return _this;
    }
    Object.defineProperty(e.prototype, "buffer", {
        get: function () { return this._buffer; },
        set: function (e) { var t; this._buffer !== e && ((t = this._buffer) == null || t.off("change", this.onBufferChange, this), this._buffer = e, e == null || e.on("change", this.onBufferChange, this)); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "_gcLastUsed", {
        get: function () { var e, t; return (e = (t = this._buffer) == null ? void 0 : t._gcLastUsed) == null ? -1 : e; },
        set: function (e) { this._buffer && (this._buffer._gcLastUsed = e); },
        enumerable: false,
        configurable: true
    });
    e.prototype.onBufferChange = function () { this._resourceId = a.X("resource"), this.emit("change", this); };
    e.prototype.update = function () { this._dirtyId++; };
    return e;
}(n.r)), Me.defaultOptions = { ubo: !1, isStatic: !1 }, L = Me; })))(); }
var z;
function B() { return (B = e.n((function () { z = (function (e) { return (e[e.WEBGL = 1] = "WEBGL", e[e.WEBGPU = 2] = "WEBGPU", e[e.CANVAS = 4] = "CANVAS", e[e.BOTH = 3] = "BOTH", e); })(z || {}); })))(); }
var Ne;
function Pe() { return (Pe = e.n((function () { I(), t.br(), Ne = (function () {
    function e(e) {
        this.data = t.yr({}, e);
        var n = Object.keys(e).sort().map(function (t) { return "".concat(t, ":").concat(e[t]); }).join("|");
        this.id = xe(n, "shader-overrides");
    }
    e.from = function (t) { return t instanceof e ? t : new e(t); };
    return e;
}()); })))(); }
var Fe, Ie;
function Le() { return (Le = e.n((function () { n.i(), a.Y(), a.L(), s.P(), s.A(), s.M(), B(), Pe(), R(), n.o(), t.br(), Fe = ["gpu", "gl"], Ie = (function (_super) {
    __extends(e, _super);
    function e(e) {
        var _this = this;
        _this = _super.call(this) || this, _this.uid = a.X("shader"), _this._uniformBindMap = Object.create(null), _this._ownedBindGroups = [], _this._destroyed = !1;
        var t = e.gpuProgram, n = e.glProgram, r = e.groups, i = e.resources, o = e.compatibleRenderers, c = e.groupMap, l = e.overrides;
        _this._overrides = l ? Ne.from(l) : null, _this.gpuProgram = t, _this.glProgram = n, o === void 0 && (o = 0, t && (o |= z.WEBGPU), n && (o |= z.WEBGL)), _this.compatibleRenderers = o;
        var u = {};
        if (c)
            for (var e_8 in c)
                for (var t_7 in c[e_8]) {
                    var n_8 = c[e_8][t_7];
                    u[n_8] = { group: e_8, binding: t_7, name: n_8 };
                }
        if (!i && !r && (i = {}), i && r)
            throw Error("[Shader] Cannot have both resources and groups");
        if (!t && r && !c)
            throw Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");
        if (t && r && !c) {
            var e_9 = t.structsAndGroups.groups;
            c = {}, e_9.forEach(function (e) { c[e.group] = c[e.group] || {}, c[e.group][e.binding] = e.name, u[e.name] = e; });
        }
        else if (i) {
            r = {}, c || (c = {}), t && t.structsAndGroups.groups.forEach(function (e) { c[e.group] = c[e.group] || {}, c[e.group][e.binding] = e.name, u[e.name] = e; });
            var e_10 = 0;
            for (var o_1 in i)
                u[o_1] || (t && !n && a.R("[Shader] the resource '".concat(o_1, "' matches no binding in the WGSL source \u2014 is the name correct?")), r[99] || (r[99] = new s.k, _this._ownedBindGroups.push(r[99])), u[o_1] = { group: 99, binding: e_10, name: o_1 }, c[99] = c[99] || {}, c[99][e_10] = o_1, e_10++);
            for (var e_11 in i) {
                var t_8 = e_11, n_9 = i[e_11];
                !n_9.source && !n_9._resourceType && (n_9 = new L(n_9));
                var a_3 = u[t_8];
                a_3 && (r[a_3.group] || (r[a_3.group] = new s.k, _this._ownedBindGroups.push(r[a_3.group])), r[a_3.group].setResource(n_9, a_3.binding));
            }
        }
        _this.groups = r, _this._uniformBindMap = c, _this.resources = _this._buildResourceAccessor(r, u);
        return _this;
    }
    e.prototype.addResource = function (e, t, n) { var r, i; (r = this._uniformBindMap)[t] || (r[t] = {}), (i = this._uniformBindMap[t])[n] || (i[n] = e), this.groups[t] || (this.groups[t] = new s.k, this._ownedBindGroups.push(this.groups[t])); };
    e.prototype._buildResourceAccessor = function (e, t) { var n = {}; var _loop_1 = function (r_7) {
        var i_2 = t[r_7];
        Object.defineProperty(n, i_2.name, { get: function () { return e[i_2.group].getResource(i_2.binding); }, set: function (t) { e[i_2.group].setResource(t, i_2.binding); } });
    }; for (var r_7 in t) {
        _loop_1(r_7);
    } return n; };
    e.prototype.destroy = function (e) {
        if (e === void 0) { e = !1; }
        if (!this._destroyed) {
            if (this._destroyed = !0, this.emit("destroy", this), e) {
                var t, n;
                (t = this.gpuProgram) == null || t.destroy(), (n = this.glProgram) == null || n.destroy();
            }
            this.gpuProgram = null, this.glProgram = null, this.removeAllListeners(), this._uniformBindMap = null, this._ownedBindGroups.forEach(function (e) { e.destroy(); }), this._ownedBindGroups = null, this.resources = null, this.groups = null, this._overrides = null;
        }
    };
    e.from = function (r) { var i = r.gpu, a = r.gl, o = n.a(r, Fe), c, l; return i && (c = s.j.from(i)), a && (l = s.N.from(a)), new e(t.yr({ gpuProgram: c, glProgram: l }, o)); };
    return e;
}(n.r)); })))(); }
var Re, ze, V, H, U, Be, Ve, He, Ue, We;
function Ge() { return (Ge = e.n((function () { Re = { normal: 0, add: 1, multiply: 2, screen: 3, overlay: 4, erase: 5, "normal-npm": 6, "add-npm": 7, "screen-npm": 8, min: 9, max: 10 }, ze = { BLEND: 0, OFFSET: 1, CULLING: 2, DEPTH_TEST: 3, WINDING: 4, DEPTH_MASK: 5 }, V = ze.BLEND, H = ze.OFFSET, U = ze.CULLING, Be = ze.DEPTH_TEST, Ve = ze.WINDING, He = ze.DEPTH_MASK, Ue = (function () {
    function e() {
        this.data = 0, this.blendMode = "normal", this.polygonOffset = 0, this.blend = !0, this.depthMask = !0;
    }
    Object.defineProperty(e.prototype, "blend", {
        get: function () { return !!(this.data & 1 << V); },
        set: function (e) { !!(this.data & 1 << V) !== e && (this.data ^= 1 << V); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "offsets", {
        get: function () { return !!(this.data & 1 << H); },
        set: function (e) { !!(this.data & 1 << H) !== e && (this.data ^= 1 << H); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "cullMode", {
        get: function () { return this.culling ? this.clockwiseFrontFace ? "front" : "back" : "none"; },
        set: function (e) { e === "none" ? this.culling = !1 : (this.culling = !0, this.clockwiseFrontFace = e === "front"); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "culling", {
        get: function () { return !!(this.data & 1 << U); },
        set: function (e) { !!(this.data & 1 << U) !== e && (this.data ^= 1 << U); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "depthTest", {
        get: function () { return !!(this.data & 1 << Be); },
        set: function (e) { !!(this.data & 1 << Be) !== e && (this.data ^= 1 << Be); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "depthMask", {
        get: function () { return !!(this.data & 1 << He); },
        set: function (e) { !!(this.data & 1 << He) !== e && (this.data ^= 1 << He); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "clockwiseFrontFace", {
        get: function () { return !!(this.data & 1 << Ve); },
        set: function (e) { !!(this.data & 1 << Ve) !== e && (this.data ^= 1 << Ve); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "blendMode", {
        get: function () { return this._blendMode; },
        set: function (e) { this.blend = e !== "none", this._blendMode = e, this._blendModeId = Re[e] || 0; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "polygonOffset", {
        get: function () { return this._polygonOffset; },
        set: function (e) { this.offsets = !!e, this._polygonOffset = e; },
        enumerable: false,
        configurable: true
    });
    e.prototype.toString = function () { return "[pixi.js/core:State blendMode=".concat(this.blendMode, " clockwiseFrontFace=").concat(this.clockwiseFrontFace, " culling=").concat(this.culling, " depthMask=").concat(this.depthMask, " polygonOffset=").concat(this.polygonOffset, "]"); };
    e.for2d = function () { var t = new e; return t.depthTest = !1, t.depthMask = !1, t.blend = !0, t; };
    return e;
}()), Ue.default2d = Ue.for2d(), We = Ue; })))(); }
var Ke;
function qe() { return (qe = e.n((function () { Ke = (function () {
    function Ke(e) {
        this.items = [], this._name = e;
    }
    Ke.prototype.emit = function (e, t, n, r, i, a, o, s) { var _a = this, c = _a.name, l = _a.items; for (var u_2 = 0, d_1 = l.length; u_2 < d_1; u_2++)
        l[u_2][c](e, t, n, r, i, a, o, s); return this; };
    Ke.prototype.add = function (e) { return e[this._name] && (this.remove(e), this.items.push(e)), this; };
    Ke.prototype.remove = function (e) { var t = this.items.indexOf(e); return t !== -1 && this.items.splice(t, 1), this; };
    Ke.prototype.contains = function (e) { return this.items.indexOf(e) !== -1; };
    Ke.prototype.removeAll = function () { return this.items.length = 0, this; };
    Ke.prototype.destroy = function () { this.removeAll(), this.items = null, this._name = null; };
    Object.defineProperty(Ke.prototype, "empty", {
        get: function () { return this.items.length === 0; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ke.prototype, "name", {
        get: function () { return this._name; },
        enumerable: false,
        configurable: true
    });
    return Ke;
}()); })))(); }
var Je, Ye, Xe;
function Ze() { return (Ze = e.n((function () { r.B(), r._(), o.h(), a.y(), a.Y(), a.W(), a.I(), s.O(), qe(), n.i(), t.br(), Je = ["init", "destroy", "contextChange", "resolutionChange", "resetState", "renderEnd", "renderStart", "render", "update", "postrender", "prerender"], Ye = (function (_super) {
    __extends(e, _super);
    function e(e) {
        var _this = this;
        var t;
        _this = _super.call(this) || this, _this.tick = 0, _this.uid = a.X("renderer"), _this.runners = Object.create(null), _this.renderPipes = Object.create(null), _this._initOptions = {}, _this._systemsHash = Object.create(null), _this.type = e.type, _this.name = e.name, _this.config = e;
        var n = __spreadArray(__spreadArray([], Je, true), (t = _this.config.runners) == null ? [] : t, true);
        _this._addRunners.apply(_this, n), _this._unsafeEvalCheck();
        return _this;
    }
    e.prototype.init = function () {
        return __awaiter(this, arguments, void 0, function (n) {
            var i, _a, e_12, r_8, e_13;
            if (n === void 0) { n = {}; }
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        i = n.skipExtensionImports === !0 || n.manageImports === !1;
                        return [4, r.v(i)];
                    case 1:
                        _b.sent();
                        _a = !i && this.config.loaders;
                        if (!_a) return [3, 3];
                        return [4, Promise.all(this.config.loaders.map(function (e) { return e.value.load(); }))];
                    case 2:
                        _a = (_b.sent());
                        _b.label = 3;
                    case 3:
                        _a, this._addSystems(this.config.systems), this._addPipes(this.config.renderPipes, this.config.renderPipeAdaptors);
                        for (e_12 in this._systemsHash) {
                            r_8 = this._systemsHash[e_12].constructor.defaultOptions;
                            n = t.yr(t.yr({}, r_8), n);
                        }
                        n = t.yr(t.yr({}, e.defaultOptions), n), this._roundPixels = +!!n.roundPixels;
                        e_13 = 0;
                        _b.label = 4;
                    case 4:
                        if (!(e_13 < this.runners.init.items.length)) return [3, 7];
                        return [4, this.runners.init.items[e_13].init(n)];
                    case 5:
                        _b.sent();
                        _b.label = 6;
                    case 6:
                        e_13++;
                        return [3, 4];
                    case 7:
                        this._initOptions = n;
                        return [2];
                }
            });
        });
    };
    e.prototype.render = function (e, t) { this.tick++; var n = e; if (n instanceof o.m && (n = { container: n }, t && (a.U(a.G, "passing a second argument is deprecated, please use render options instead"), n.target = t.renderTexture)), n.target || (n.target = this.view.renderTarget), n.target === this.view.renderTarget && (this._lastObjectRendered = n.container, n.clearColor != null || (n.clearColor = this.background.colorRgba), n.clear != null || (n.clear = this.background.clearBeforeRender)), n.clearColor) {
        var e_14 = Array.isArray(n.clearColor) && n.clearColor.length === 4;
        n.clearColor = e_14 ? n.clearColor : r.z.shared.setValue(n.clearColor).toArray();
    } n.transform || (n.container.updateLocalTransform(), n.transform = n.container.localTransform), n.container.visible && (n.container.enableRenderGroup(), this.runners.prerender.emit(n), this.runners.renderStart.emit(n), this.runners.render.emit(n), this.runners.renderEnd.emit(n), this.runners.postrender.emit(n)); };
    e.prototype.resize = function (e, t, n) { var r = this.view.resolution; this.view.resize(e, t, n), this.emit("resize", this.view.screen.width, this.view.screen.height, this.view.resolution), n !== void 0 && n !== r && this.runners.resolutionChange.emit(n); };
    e.prototype.clear = function (e) {
        if (e === void 0) { e = {}; }
        var t = this;
        e.target || (e.target = t.renderTarget.renderTarget), e.clearColor || (e.clearColor = this.background.colorRgba), e.clear != null || (e.clear = s.D.ALL);
        var n = e.clear, i = e.clearColor, a = e.target, o = e.mipLevel, c = e.layer;
        r.z.shared.setValue(i == null ? this.background.colorRgba : i), t.renderTarget.clear(a, n, r.z.shared.toArray(), o == null ? 0 : o, c == null ? 0 : c);
    };
    Object.defineProperty(e.prototype, "resolution", {
        get: function () { return this.view.resolution; },
        set: function (e) { this.view.resolution = e, this.runners.resolutionChange.emit(e); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "width", {
        get: function () { return this.view.texture.frame.width; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "height", {
        get: function () { return this.view.texture.frame.height; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "canvas", {
        get: function () { return this.view.canvas; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "lastObjectRendered", {
        get: function () { return this._lastObjectRendered; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "renderingToScreen", {
        get: function () { return this.renderTarget.renderingToScreen; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "screen", {
        get: function () { return this.view.screen; },
        enumerable: false,
        configurable: true
    });
    e.prototype._addRunners = function () {
        var _this = this;
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        e.forEach(function (e) { _this.runners[e] = new Ke(e); });
    };
    e.prototype._addSystems = function (e) { var t; for (t in e) {
        var n_10 = e[t];
        this._addSystem(n_10.value, n_10.name);
    } };
    e.prototype._addSystem = function (e, t) { var n = new e(this); if (this[t])
        throw Error("Whoops! The name \"".concat(t, "\" is already in use")); this[t] = n, this._systemsHash[t] = n; for (var e_15 in this.runners)
        this.runners[e_15].add(n); return this; };
    e.prototype._addPipes = function (e, t) {
        var _this = this;
        var n = t.reduce(function (e, t) { return (e[t.name] = t.value, e); }, {});
        e.forEach(function (e) { var t = e.value, r = e.name, i = n[r]; _this.renderPipes[r] = new t(_this, i ? new i : null), _this.runners.destroy.add(_this.renderPipes[r]); });
    };
    e.prototype.destroy = function (e) {
        if (e === void 0) { e = !1; }
        this.runners.destroy.items.reverse(), this.runners.destroy.emit(e), (e === !0 || typeof e == "object" && e.releaseGlobalResources) && a.F.release(), Object.values(this.runners).forEach(function (e) { e.destroy(); }), this._systemsHash = null, this.renderPipes = null, this.removeAllListeners();
    };
    e.prototype.generateTexture = function (e) { return this.textureGenerator.generateTexture(e); };
    Object.defineProperty(e.prototype, "roundPixels", {
        get: function () { return !!this._roundPixels; },
        enumerable: false,
        configurable: true
    });
    e.prototype._unsafeEvalCheck = function () { if (!a.b())
        throw Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support."); };
    e.prototype.resetState = function () { this.runners.resetState.emit(); };
    return e;
}(n.r)), Ye.defaultOptions = { resolution: 1, failIfMajorPerformanceCaveat: !1, roundPixels: !1 }, Xe = Ye; })))(); }
function Qe(e, t, n, r) { if (n != null || (n = 0), r != null || (r = Math.min(e.byteLength - n, t.byteLength)), !(n & 7) && !(r & 7)) {
    var i_3 = r / 8;
    new Float64Array(t, 0, i_3).set(new Float64Array(e, n, i_3));
}
else if (!(n & 3) && !(r & 3)) {
    var i_4 = r / 4;
    new Float32Array(t, 0, i_4).set(new Float32Array(e, n, i_4));
}
else
    new Uint8Array(t).set(new Uint8Array(e, n, r)); }
function $e() { return ($e = e.n((function () { })))(); }
var et, tt;
function nt() { return (nt = e.n((function () { et = { normal: "normal-npm", add: "add-npm", screen: "screen-npm" }, tt = (function (e) { return (e[e.DISABLED = 0] = "DISABLED", e[e.RENDERING_MASK_ADD = 1] = "RENDERING_MASK_ADD", e[e.MASK_ACTIVE = 2] = "MASK_ACTIVE", e[e.INVERSE_MASK_ACTIVE = 3] = "INVERSE_MASK_ACTIVE", e[e.RENDERING_MASK_REMOVE = 4] = "RENDERING_MASK_REMOVE", e[e.NONE = 5] = "NONE", e); })(tt || {}); })))(); }
function rt(e, t) { return t.alphaMode === "no-premultiply-alpha" && et[e] || e; }
function it() { return (it = e.n((function () { nt(); })))(); }
var W;
function G() { return (G = e.n((function () { W = (function (e) { return (e[e.MAP_READ = 1] = "MAP_READ", e[e.MAP_WRITE = 2] = "MAP_WRITE", e[e.COPY_SRC = 4] = "COPY_SRC", e[e.COPY_DST = 8] = "COPY_DST", e[e.INDEX = 16] = "INDEX", e[e.VERTEX = 32] = "VERTEX", e[e.UNIFORM = 64] = "UNIFORM", e[e.STORAGE = 128] = "STORAGE", e[e.INDIRECT = 256] = "INDIRECT", e[e.QUERY_RESOLVE = 512] = "QUERY_RESOLVE", e[e.STATIC = 1024] = "STATIC", e); })(W || {}); })))(); }
var K;
function q() { return (q = e.n((function () { n.i(), a.Y(), G(), K = (function (_super) {
    __extends(K, _super);
    function K(e) {
        var _this = this;
        var t = e.data, n = e.size, r = e.usage, i = e.label, o = e.shrinkToFit;
        _this = _super.call(this) || this, _this._gpuData = Object.create(null), _this._gcLastUsed = -1, _this.autoGarbageCollect = !0, _this.uid = a.X("buffer"), _this._resourceType = "buffer", _this._resourceId = a.X("resource"), _this._updateID = 1, _this._updateOffset = 0, _this._dataInt32 = null, _this.shrinkToFit = !0, _this.destroyed = !1, t instanceof Array && (t = new Float32Array(t)), _this._data = t, n != null || (n = t == null ? void 0 : t.byteLength);
        var s = !!t;
        _this.descriptor = { size: n, usage: r, mappedAtCreation: s, label: i }, _this.shrinkToFit = o == null || o;
        return _this;
    }
    Object.defineProperty(K.prototype, "data", {
        get: function () { return this._data; },
        set: function (e) { this.setDataWithSize(e, e.length, !0); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(K.prototype, "dataInt32", {
        get: function () { return this._dataInt32 || (this._dataInt32 = new Int32Array(this.data.buffer)), this._dataInt32; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(K.prototype, "static", {
        get: function () { return !!(this.descriptor.usage & W.STATIC); },
        set: function (e) { e ? this.descriptor.usage |= W.STATIC : this.descriptor.usage &= ~W.STATIC; },
        enumerable: false,
        configurable: true
    });
    K.prototype.setDataWithSize = function (e, t, n) { if (this._updateID++, this._updateSize = t * e.BYTES_PER_ELEMENT, this._updateOffset = 0, this._data === e) {
        n && this.emit("update", this);
        return;
    } var r = this._data; this._data = e, this._dataInt32 = null, !r || r.length !== e.length ? !this.shrinkToFit && r && e.byteLength < r.byteLength ? n && this.emit("update", this) : (this.descriptor.size = e.byteLength, this._resourceId = a.X("resource"), this.emit("change", this)) : n && this.emit("update", this); };
    K.prototype.update = function (e, t) { this._updateSize = e == null ? this._updateSize : e, this._updateOffset = t || 0, this._updateID++, this.emit("update", this); };
    K.prototype.unload = function () { this.emit("unload", this); for (var t_9 in this._gpuData) {
        var e;
        (e = this._gpuData[t_9]) == null || e.destroy();
    } this._gpuData = Object.create(null), this.destroyed || (this._resourceId = a.X("resource"), this.emit("change", this)); };
    K.prototype.destroy = function () { this.destroyed = !0, this.unload(), this.emit("destroy", this), this.emit("change", this), this._data = null, this.descriptor = null, this.removeAllListeners(); };
    return K;
}(n.r)); })))(); }
function at(e, t) { if (!(e instanceof K)) {
    var n_11 = t ? W.INDEX : W.VERTEX;
    e instanceof Array && (t ? (e = new Uint32Array(e), n_11 = W.INDEX | W.COPY_DST) : (e = new Float32Array(e), n_11 = W.VERTEX | W.COPY_DST)), e = new K({ data: e, label: t ? "index-mesh-buffer" : "vertex-mesh-buffer", usage: n_11 });
} return e; }
function ot() { return (ot = e.n((function () { q(), G(); })))(); }
function st(e, t, n) { var r = e.getAttribute(t); if (!r)
    return n.minX = 0, n.minY = 0, n.maxX = 0, n.maxY = 0, n; var i = r.buffer.data, a = 1 / 0, o = 1 / 0, s = -1 / 0, c = -1 / 0, l = i.BYTES_PER_ELEMENT, u = (r.offset || 0) / l, d = (r.stride || 8) / l; for (var e_16 = u; e_16 < i.length; e_16 += d) {
    var t_10 = i[e_16], n_12 = i[e_16 + 1];
    t_10 > s && (s = t_10), n_12 > c && (c = n_12), t_10 < a && (a = t_10), n_12 < o && (o = n_12);
} return n.minX = a, n.minY = o, n.maxX = s, n.maxY = c, n; }
function ct(e) { return (e instanceof K || Array.isArray(e) || e.BYTES_PER_ELEMENT) && (e = { buffer: e }), e.buffer = at(e.buffer, !1), e; }
var lt;
function ut() { return (ut = e.n((function () { n.i(), o.M(), a.Y(), a.W(), q(), ot(), lt = (function (_super) {
    __extends(lt, _super);
    function lt(e) {
        if (e === void 0) { e = {}; }
        var _this = this;
        var t, n;
        _this = _super.call(this) || this, _this._gpuData = Object.create(null), _this.autoGarbageCollect = !0, _this._gcLastUsed = -1, _this.uid = a.X("geometry"), _this._layoutKey = 0, _this.instanceCount = 1, _this.indexCount = 0, _this._bounds = new o.j, _this._boundsDirty = !0, _this._vertexCount = 0, _this._vertexCountDirty = !0;
        var r = e.attributes, i = e.indexBuffer, s = e.topology;
        if (_this.buffers = [], _this.attributes = {}, r)
            for (var e_17 in r)
                _this.addAttribute(e_17, r[e_17]);
        _this.instanceCount = (t = e.instanceCount) == null ? 1 : t, _this.indexCount = (n = e.indexCount) == null ? 0 : n, i && _this.addIndex(i), _this.topology = s || "triangle-list";
        return _this;
    }
    lt.prototype.onBufferUpdate = function () { this._boundsDirty = !0, this._vertexCountDirty = !0, this.emit("update", this); };
    lt.prototype.getAttribute = function (e) { return this.attributes[e]; };
    lt.prototype.getIndex = function () { return this.indexBuffer; };
    lt.prototype.getBuffer = function (e) { return this.getAttribute(e).buffer; };
    Object.defineProperty(lt.prototype, "vertexCount", {
        get: function () { if (!this._vertexCountDirty)
            return this._vertexCount; this._vertexCountDirty = !1; var e = this.attributes; for (var t_11 in e) {
            var n_13 = e[t_11];
            if (n_13.instance)
                continue;
            var r_9 = n_13.buffer;
            return this._vertexCount = r_9.data.length / (n_13.stride / 4 || n_13.size), this._vertexCount;
        } return this._vertexCount = 0, 0; },
        enumerable: false,
        configurable: true
    });
    lt.prototype.getSize = function () { return a.U("8.20.0", "Geometry.getSize is deprecated, please use Geometry.vertexCount instead."), this.vertexCount; };
    lt.prototype.addAttribute = function (e, t) { var n = ct(t); this.buffers.indexOf(n.buffer) === -1 && (this.buffers.push(n.buffer), n.buffer.on("update", this.onBufferUpdate, this), n.buffer.on("change", this.onBufferUpdate, this)), this.attributes[e] = n, this._vertexCountDirty = !0; };
    lt.prototype.addIndex = function (e) { this.indexBuffer = at(e, !0), this.buffers.push(this.indexBuffer); };
    Object.defineProperty(lt.prototype, "bounds", {
        get: function () { return this._boundsDirty ? (this._boundsDirty = !1, st(this, "aPosition", this._bounds)) : this._bounds; },
        enumerable: false,
        configurable: true
    });
    lt.prototype.unload = function () { this.emit("unload", this); for (var t_12 in this._gpuData) {
        var e;
        (e = this._gpuData[t_12]) == null || e.destroy();
    } this._gpuData = Object.create(null); };
    lt.prototype.destroy = function (e) {
        if (e === void 0) { e = !1; }
        this.emit("destroy", this);
        for (var _i = 0, _a = this.buffers; _i < _a.length; _i++) {
            var t_13 = _a[_i];
            t_13.off("update", this.onBufferUpdate, this), t_13.off("change", this.onBufferUpdate, this), e && t_13.destroy();
        }
        this.unload(), this.removeAllListeners(), this.attributes = null, this.buffers = null, this.indexBuffer = null, this._bounds = null;
    };
    return lt;
}(n.r)); })))(); }
function dt(e, t, n, r, i, a, o, s) {
    if (s === void 0) { s = null; }
    var c = 0;
    n *= t, i *= a;
    var l = s.a, u = s.b, d = s.c, f = s.d, p = s.tx, m = s.ty;
    for (; c < o;) {
        var o_2 = e[n], s_1 = e[n + 1];
        r[i] = l * o_2 + d * s_1 + p, r[i + 1] = u * o_2 + f * s_1 + m, i += a, n += t, c++;
    }
}
function ft(e, t, n, r) { var i = 0; for (t *= n; i < r;)
    e[t] = 0, e[t + 1] = 0, t += n, i++; }
function pt() { return (pt = e.n((function () { })))(); }
function mt(e, t, n, r, i) { var a = t.a, o = t.b, s = t.c, c = t.d, l = t.tx, u = t.ty; n || (n = 0), r || (r = 2), i || (i = e.length / r - n); var d = n * r; for (var t_14 = 0; t_14 < i; t_14++) {
    var t_15 = e[d], n_14 = e[d + 1];
    e[d] = a * t_15 + s * n_14 + l, e[d + 1] = o * t_15 + c * n_14 + u, d += r;
} }
function ht() { return (ht = e.n((function () { })))(); }
function gt(e, t) { return (e << 17) + (t << 2); }
var _t, vt, J;
function yt() { return (yt = e.n((function () { r.P(), a.W(), a.L(), a.I(), re(), _t = 32767, vt = (function () {
    function vt(e) {
        this._buckets = new Map, this._screens = new ne, this._enableFullScreen = !1, this.canvasOptions = e || {};
    }
    Object.defineProperty(vt.prototype, "enableFullScreen", {
        get: function () { return a.U(a.K, "CanvasPool.enableFullScreen is no longer used, the pool sizes canvases to the screens registered with setScreenSize."), this._enableFullScreen; },
        set: function (e) { a.U(a.K, "CanvasPool.enableFullScreen is no longer used, the pool sizes canvases to the screens registered with setScreenSize."), this._enableFullScreen = e; },
        enumerable: false,
        configurable: true
    });
    vt.prototype._createCanvasAndContext = function (e, t) { var n = r.N.get().createCanvas(); return n.width = e, n.height = t, { canvas: n, context: n.getContext("2d") }; };
    vt.prototype.getOptimalCanvasAndContext = function (e, t, n) {
        if (n === void 0) { n = 1; }
        var _a = this.getOptimalSize(e, t, n), r = _a.width, i = _a.height;
        (r > _t || i > _t) && a.R("CanvasPool: ".concat(r, "x").concat(i, " is larger than the ").concat(_t, "px pool key limit, canvases of this size may be pooled together"));
        var o = gt(r, i), s = this._buckets.get(o);
        s || (s = [], this._buckets.set(o, s));
        var c = s.pop();
        return c || (c = this._createCanvasAndContext(r, i)), c;
    };
    vt.prototype.getOptimalSize = function (e, t, n) {
        if (n === void 0) { n = 1; }
        var r = Math.ceil(e * n - 1e-6), a = Math.ceil(t * n - 1e-6), o = i.h(r), s = this._screens.getFittingWidth(r), c = i.h(a), l = this._screens.getFittingHeight(a);
        return { width: s === void 0 ? o : Math.min(s, o), height: l === void 0 ? c : Math.min(l, c) };
    };
    vt.prototype.returnCanvasAndContext = function (e) { var _a = e.canvas, t = _a.width, n = _a.height, r = this._buckets.get(gt(t, n)); r && (e.context.resetTransform(), e.context.clearRect(0, 0, t, n), r.push(e)); };
    vt.prototype.setScreenSize = function (e, t, n) { this._screens.set(e, t, n) && this._pruneScreenCanvases(); };
    vt.prototype.removeScreen = function (e) { this._screens.remove(e) && this._pruneScreenCanvases(); };
    vt.prototype.clear = function () { this._buckets.clear(); };
    vt.prototype._pruneScreenCanvases = function () { for (var _i = 0, _a = this._buckets; _i < _a.length; _i++) {
        var e_18 = _a[_i][0];
        var t_16 = e_18 >>> 17, n_15 = e_18 >>> 2 & 32767;
        (!i.m(t_16) && !this._screens.hasWidth(t_16) || !i.m(n_15) && !this._screens.hasHeight(n_15)) && this._buckets.delete(e_18);
    } };
    return vt;
}()), J = new vt, a.F.register(J); })))(); }
var Y, bt;
function xt() { return (xt = e.n((function () { r.q(), r.I(), o.y(), a.L(), Y = {}, r.K.handle(r.G.BlendMode, function (e) { if (!e.name)
    throw Error("BlendMode extension must have a name property"); Y[e.name] = e.ref; }, function (e) { delete Y[e.name]; }), bt = (function () {
    function bt(e) {
        this._blendModeStack = [], this._isAdvanced = !1, this._filterHash = Object.create(null), this._renderer = e, this._renderer.runners.prerender.add(this);
    }
    bt.prototype.prerender = function () { this._activeBlendMode = "normal", this._isAdvanced = !1; };
    bt.prototype.pushBlendMode = function (e, t, n) { this._blendModeStack.push(t), this.setBlendMode(e, t, n); };
    bt.prototype.popBlendMode = function (e) { var t; this._blendModeStack.pop(); var n = (t = this._blendModeStack[this._activeBlendMode.length - 1]) == null ? "normal" : t; this.setBlendMode(null, n, e); };
    bt.prototype.setBlendMode = function (e, t, n) { var r = e instanceof o.v; if (this._activeBlendMode === t) {
        if (this._isAdvanced && e && !r) {
            var i;
            (i = this._renderableList) == null || i.push(e);
        }
    }
    else
        this._isAdvanced && this._endAdvancedBlendMode(n), this._activeBlendMode = t, e && (this._isAdvanced = !!Y[t], this._isAdvanced && this._beginAdvancedBlendMode(e, n)); };
    bt.prototype._beginAdvancedBlendMode = function (e, t) { this._renderer.renderPipes.batch.break(t); var n = this._activeBlendMode; if (!Y[n]) {
        a.R("Unable to assign BlendMode: '".concat(n, "'. You may want to include: import 'pixi.js/advanced-blend-modes'"));
        return;
    } var r = this._ensureFilterEffect(n), i = e instanceof o.v, s = { renderPipeId: "filter", action: "pushFilter", filterEffect: r, renderables: i ? null : [e], container: i ? e.root : null, canBundle: !1 }; this._renderableList = s.renderables, t.add(s); };
    bt.prototype._ensureFilterEffect = function (e) { var t = this._filterHash[e]; return t || (t = this._filterHash[e] = new r.F, t.filters = [new Y[e]]), t; };
    bt.prototype._endAdvancedBlendMode = function (e) { this._isAdvanced = !1, this._renderableList = null, this._renderer.renderPipes.batch.break(e), e.add({ renderPipeId: "filter", action: "popFilter", canBundle: !1 }); };
    bt.prototype.buildStart = function () { this._isAdvanced = !1; };
    bt.prototype.buildEnd = function (e) { this._isAdvanced && this._endAdvancedBlendMode(e); };
    bt.prototype.destroy = function () { this._renderer = null, this._renderableList = null; for (var e_19 in this._filterHash)
        this._filterHash[e_19].destroy(); this._filterHash = null; };
    return bt;
}()), bt.extension = { type: [r.G.WebGLPipes, r.G.WebGPUPipes, r.G.CanvasPipes], name: "blendMode" }; })))(); }
var St, Ct;
function wt() { return (wt = e.n((function () { r.B(), r.q(), a.L(), t.br(), St = (function () {
    function e() {
        this.clearBeforeRender = !0, this._backgroundColor = new r.z(0), this.color = this._backgroundColor, this.alpha = 1;
    }
    e.prototype.init = function (n) { n = t.yr(t.yr({}, e.defaultOptions), n), this.clearBeforeRender = n.clearBeforeRender, this.color = n.background || n.backgroundColor || this._backgroundColor, this.alpha = n.backgroundAlpha, this._backgroundColor.setAlpha(n.backgroundAlpha); };
    Object.defineProperty(e.prototype, "color", {
        get: function () { return this._backgroundColor; },
        set: function (e) { r.z.shared.setValue(e).alpha < 1 && this._backgroundColor.alpha === 1 && a.R("Cannot set a transparent background on an opaque canvas. To enable transparency, set backgroundAlpha < 1 when initializing your Application."), this._backgroundColor.setValue(e); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "alpha", {
        get: function () { return this._backgroundColor.alpha; },
        set: function (e) { this._backgroundColor.setAlpha(e); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "colorRgba", {
        get: function () { return this._backgroundColor.toArray(); },
        enumerable: false,
        configurable: true
    });
    e.prototype.destroy = function () { };
    return e;
}()), St.extension = { type: [r.G.WebGLSystem, r.G.WebGPUSystem, r.G.CanvasSystem], name: "background", priority: 0 }, St.defaultOptions = { backgroundAlpha: 1, backgroundColor: 0, clearBeforeRender: !0 }, Ct = St; })))(); }
var Tt, Et, Dt;
function Ot() { return (Ot = e.n((function () { r.P(), r.q(), o.h(), O(), t.br(), Tt = { png: "image/png", jpg: "image/jpeg", webp: "image/webp" }, Et = (function () {
    function e(e) {
        this._renderer = e;
    }
    e.prototype._normalizeOptions = function (e, n) {
        if (n === void 0) { n = {}; }
        return e instanceof o.m || e instanceof D ? t.yr({ target: e }, n) : t.yr(t.yr({}, n), e);
    };
    e.prototype.image = function (e) {
        return __awaiter(this, void 0, void 0, function () { var t, _a; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    t = r.N.get().createImage();
                    _a = t;
                    return [4, this.base64(e)];
                case 1: return [2, (_a.src = _b.sent(), t)];
            }
        }); });
    };
    e.prototype.base64 = function (t) {
        return __awaiter(this, void 0, void 0, function () { var n, r, i, e_20; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    t = this._normalizeOptions(t, e.defaultImageOptions);
                    n = t.format, r = t.quality, i = this.canvas(t);
                    if (i.toBlob !== void 0)
                        return [2, new Promise(function (e, t) { i.toBlob(function (n) { if (!n) {
                                t(Error("ICanvas.toBlob failed!"));
                                return;
                            } var r = new FileReader; r.onload = function () { return e(r.result); }, r.onerror = t, r.readAsDataURL(n); }, Tt[n], r); })];
                    if (i.toDataURL !== void 0)
                        return [2, i.toDataURL(Tt[n], r)];
                    if (!(i.convertToBlob !== void 0)) return [3, 2];
                    return [4, i.convertToBlob({ type: Tt[n], quality: r })];
                case 1:
                    e_20 = _a.sent();
                    return [2, new Promise(function (t, n) { var r = new FileReader; r.onload = function () { return t(r.result); }, r.onerror = n, r.readAsDataURL(e_20); })];
                case 2: throw Error("Extract.base64() requires ICanvas.toDataURL, ICanvas.toBlob, or ICanvas.convertToBlob to be implemented");
            }
        }); });
    };
    e.prototype.canvas = function (e) { e = this._normalizeOptions(e); var t = e.target, n = this._renderer; if (t instanceof D)
        return n.texture.generateCanvas(t); var r = n.textureGenerator.generateTexture(e), i = n.texture.generateCanvas(r); return r.destroy(!0), i; };
    e.prototype.pixels = function (e) { e = this._normalizeOptions(e); var t = e.target, n = this._renderer, r = t instanceof D ? t : n.textureGenerator.generateTexture(e), i = n.texture.getPixels(r); return t instanceof o.m && r.destroy(!0), i; };
    e.prototype.texture = function (e) { return e = this._normalizeOptions(e), e.target instanceof D ? e.target : this._renderer.textureGenerator.generateTexture(e); };
    e.prototype.download = function (e) { var t; e = this._normalizeOptions(e); var n = this.canvas(e), r = document.createElement("a"); r.download = (t = e.filename) == null ? "image.png" : t, r.href = n.toDataURL("image/png"), document.body.appendChild(r), r.click(), document.body.removeChild(r); };
    e.prototype.log = function (e) { var t; var n = (t = e.width) == null ? 200 : t; e = this._normalizeOptions(e); var r = this.canvas(e), i = r.toDataURL(); console.log("[Pixi Texture] ".concat(r.width, "px ").concat(r.height, "px")); var a = ["font-size: 1px;", "padding: ".concat(n, "px 300px;"), "background: url(".concat(i, ") no-repeat;"), "background-size: contain;"].join(" "); console.log("%c ", a); };
    e.prototype.destroy = function () { this._renderer = null; };
    return e;
}()), Et.extension = { type: [r.G.WebGLSystem, r.G.WebGPUSystem, r.G.CanvasSystem], name: "extract" }, Et.defaultImageOptions = { format: "png", quality: 1 }, Dt = Et; })))(); }
var kt, At;
function jt() { return (jt = e.n((function () { x(), O(), n.o(), t.br(), kt = ["dynamic", "textureOptions"], At = (function (_super) {
    __extends(e, _super);
    function e() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    e.create = function (r) { var i = r.dynamic, a = r.textureOptions, o = n.a(r, kt); return new e(t.yr(t.yr({}, a), {}, { source: new b(o), dynamic: i != null && i })); };
    e.prototype.resize = function (e, t, n) { return this.source.resize(e, t, n), this; };
    return e;
}(D)); })))(); }
var Mt, Nt, Pt, Ft;
function It() { return (It = e.n((function () { r.B(), r.q(), i.x(), i._(), o.M(), o.x(), o.h(), jt(), t.br(), Mt = new i.g, Nt = new o.j, Pt = [0, 0, 0, 0], Ft = (function () {
    function Ft(e) {
        this._renderer = e;
    }
    Ft.prototype.generateTexture = function (e) { var n; e instanceof o.m && (e = { target: e, frame: void 0, textureSourceOptions: {}, resolution: void 0 }); var a = e.resolution || this._renderer.resolution, s = e.antialias || this._renderer.view.antialias, c = e.target, l = e.clearColor; l = l ? Array.isArray(l) && l.length === 4 ? l : r.z.shared.setValue(l).toArray() : Pt; var u = ((n = e.frame) == null ? void 0 : n.copyTo(Mt)) || o.b(c, Nt).rectangle, d = e.defaultAnchor && { defaultAnchor: e.defaultAnchor }; u.width = Math.max(u.width, 1 / a) | 0, u.height = Math.max(u.height, 1 / a) | 0; var f = At.create(t.yr(t.yr({}, e.textureSourceOptions), {}, { width: u.width, height: u.height, resolution: a, antialias: s, textureOptions: d })), p = i.b.shared.translate(-u.x, -u.y); return this._renderer.render({ container: c, transform: p, target: f, clearColor: l }), f.source.updateMipmaps(), f; };
    Ft.prototype.destroy = function () { this._renderer = null; };
    return Ft;
}()), Ft.extension = { type: [r.G.WebGLSystem, r.G.WebGPUSystem, r.G.CanvasSystem], name: "textureGenerator" }; })))(); }
var Lt, Rt;
function zt() { return (zt = e.n((function () { r.q(), t.br(), Lt = (function () {
    function e(e) {
        this._managedResources = [], this._managedResourceHashes = [], this._managedCollections = [], this._ready = !1, this._running = !1, this._renderer = e;
    }
    e.prototype.init = function (n) { n = t.yr(t.yr({}, e.defaultOptions), n), this.maxUnusedTime = n.gcMaxUnusedTime, this._frequency = n.gcFrequency, this.enabled = n.gcActive, this.now = performance.now(); };
    Object.defineProperty(e.prototype, "enabled", {
        get: function () { return !!this._handler; },
        set: function (e) {
            var _this = this;
            this.enabled !== e && (e ? (this._handler = this._renderer.scheduler.repeat(function () { _this._ready = !0; }, this._frequency, !1), this._collectionsHandler = this._renderer.scheduler.repeat(function () { for (var _i = 0, _a = _this._managedCollections; _i < _a.length; _i++) {
                var e_21 = _a[_i];
                var t_17 = e_21.context, n_16 = e_21.collection, r_10 = e_21.type;
                t_17[n_16] = r_10 === "hash" ? a.a(t_17[n_16]) : a.i(t_17[n_16]);
            } }, this._frequency)) : (this._renderer.scheduler.cancel(this._handler), this._renderer.scheduler.cancel(this._collectionsHandler), this._handler = 0, this._collectionsHandler = 0));
        },
        enumerable: false,
        configurable: true
    });
    e.prototype.prerender = function (_a) {
        var e = _a.container;
        this.now = performance.now(), e.renderGroup.gcTick = this._renderer.tick++, this._updateInstructionGCTick(e.renderGroup, e.renderGroup.gcTick);
    };
    e.prototype.postrender = function () { this._ready && this.enabled && (this.run(), this._ready = !1); };
    e.prototype._updateInstructionGCTick = function (e, t) { e.instructionSet.gcTick = t, e.gcTick = t; for (var _i = 0, _a = e.renderGroupChildren; _i < _a.length; _i++) {
        var n_17 = _a[_i];
        this._updateInstructionGCTick(n_17, t);
    } };
    e.prototype.addCollection = function (e, t, n) { this._managedCollections.push({ context: e, collection: t, type: n }); };
    e.prototype.addResource = function (e, t) { var n; if (e._gcLastUsed !== -1) {
        var r;
        e._gcLastUsed = this.now, (r = e._onTouch) == null || r.call(e, this.now);
    }
    else
        e._gcData = { index: this._managedResources.length, type: t }, e._gcLastUsed = this.now, (n = e._onTouch) == null || n.call(e, this.now), e.once("unload", this.removeResource, this), this._managedResources.push(e); };
    e.prototype.removeResource = function (e) { var t = e._gcData; if (!t)
        return; var n = t.index, r = this._managedResources.length - 1; if (this._running)
        this._managedResources[n] = null;
    else {
        if (n !== r) {
            var e_22 = this._managedResources[r];
            this._managedResources[n] = e_22, e_22._gcData.index = n;
        }
        this._managedResources.length--;
    } e._gcData = null, e._gcLastUsed = -1; };
    e.prototype.addResourceHash = function (e, t, n, r) {
        if (r === void 0) { r = 0; }
        this._managedResourceHashes.push({ context: e, hash: t, type: n, priority: r }), this._managedResourceHashes.sort(function (e, t) { return e.priority - t.priority; });
    };
    e.prototype.run = function () { if (this._running)
        return; var e = performance.now(), t = this._managedResourceHashes, n = this._managedResources; this._running = !0; try {
        for (var _i = 0, t_18 = t; _i < t_18.length; _i++) {
            var n_18 = t_18[_i];
            this.runOnHash(n_18, e);
        }
        var r_11 = n.length;
        for (var t_19 = 0; t_19 < r_11; t_19++) {
            var r_12 = n[t_19];
            r_12 && this.runOnResource(r_12, e);
        }
    }
    finally {
        var e_23 = 0;
        for (var t_20 = 0; t_20 < n.length; t_20++) {
            var r_13 = n[t_20];
            r_13 && (e_23 !== t_20 && (n[e_23] = r_13, r_13._gcData.index = e_23), e_23++);
        }
        n.length = e_23, this._running = !1;
    } };
    e.prototype.updateRenderableGCTick = function (e, t) { var n, r, i, a; var o = (n = e.renderGroup) == null ? e.parentRenderGroup : n, s = (r = o == null || (i = o.instructionSet) == null ? void 0 : i.gcTick) == null ? -1 : r; if (((a = o == null ? void 0 : o.gcTick) == null ? 0 : a) === s) {
        var c;
        e._gcLastUsed = t, (c = e._onTouch) == null || c.call(e, t);
    } };
    e.prototype.runOnResource = function (e, t) { e._gcData.type === "renderable" && this.updateRenderableGCTick(e, t), t - e._gcLastUsed < this.maxUnusedTime || !e.autoGarbageCollect || (e.off("unload", this.removeResource, this), e.unload(), this.removeResource(e)); };
    e.prototype._createHashClone = function (e, t) { var n = Object.create(null); for (var r_14 in e) {
        if (r_14 === t)
            break;
        e[r_14] !== null && (n[r_14] = e[r_14]);
    } return n; };
    e.prototype.runOnHash = function (e, t) { var n = e.context, r = e.hash, i = e.type, a = n[r], o = null, s = 0; for (var e_24 in a) {
        var n_19 = a[e_24];
        if (n_19 === null)
            s++, s === 1e4 && !o && (o = this._createHashClone(a, e_24));
        else if (n_19._gcLastUsed === -1) {
            var c;
            n_19._gcLastUsed = t, (c = n_19._onTouch) == null || c.call(n_19, t), o && (o[e_24] = n_19);
        }
        else if (i === "renderable" && this.updateRenderableGCTick(n_19, t), !(t - n_19._gcLastUsed < this.maxUnusedTime) && n_19.autoGarbageCollect) {
            if (i === "renderable") {
                var l;
                var e_25 = n_19, t_21 = (l = e_25.renderGroup) == null ? e_25.parentRenderGroup : l;
                t_21 && (t_21.structureDidChange = !0);
            }
            n_19.unload(), n_19._gcData = null, n_19._gcLastUsed = -1, o || (s + 1 === 1e4 ? o = this._createHashClone(a, e_24) : (a[e_24] = null, s++));
        }
        else
            o && (o[e_24] = n_19);
    } o && (n[r] = o); };
    e.prototype.destroy = function () {
        var _this = this;
        this.enabled = !1, this._managedResources.forEach(function (e) { e == null || e.off("unload", _this.removeResource, _this); }), this._managedResources.length = 0, this._managedResourceHashes.length = 0, this._managedCollections.length = 0, this._renderer = null;
    };
    return e;
}()), Lt.extension = { type: [r.G.WebGLSystem, r.G.WebGPUSystem, r.G.CanvasSystem], name: "gc", priority: 0 }, Lt.defaultOptions = { gcActive: !0, gcMaxUnusedTime: 6e4, gcFrequency: 3e4 }, Rt = Lt; })))(); }
var Bt;
function Vt() { return (Vt = e.n((function () { r.q(), i.x(), i.C(), s.A(), B(), R(), Bt = (function () {
    function Bt(e) {
        this._stackIndex = 0, this._globalUniformDataStack = [], this._uniformsPool = [], this._activeUniforms = [], this._bindGroupPool = [], this._activeBindGroups = [], this._renderer = e;
    }
    Bt.prototype.reset = function () { this._stackIndex = 0; for (var e_26 = 0; e_26 < this._activeUniforms.length; e_26++)
        this._uniformsPool.push(this._activeUniforms[e_26]); for (var e_27 = 0; e_27 < this._activeBindGroups.length; e_27++)
        this._bindGroupPool.push(this._activeBindGroups[e_27]); this._activeUniforms.length = 0, this._activeBindGroups.length = 0; };
    Bt.prototype.start = function (e) { this.reset(), this.push(e); };
    Bt.prototype.bind = function (_a) {
        var e = _a.size, t = _a.projectionMatrix, n = _a.worldTransformMatrix, r = _a.worldColor, a = _a.offset;
        var c = this._renderer.renderTarget.renderTarget, l = this._stackIndex ? this._globalUniformDataStack[this._stackIndex - 1] : { projectionData: c, worldTransformMatrix: new i.b, worldColor: 4294967295, offset: new i.S }, u = { projectionMatrix: t || this._renderer.renderTarget.projectionMatrix, resolution: e || c.size, worldTransformMatrix: n || l.worldTransformMatrix, worldColor: r || l.worldColor, offset: a || l.offset, bindGroup: null }, d = this._uniformsPool.pop() || this._createUniforms();
        this._activeUniforms.push(d);
        var f = d.uniforms;
        f.uProjectionMatrix = u.projectionMatrix, f.uResolution = u.resolution, f.uWorldTransformMatrix.copyFrom(u.worldTransformMatrix), f.uWorldTransformMatrix.tx -= u.offset.x, f.uWorldTransformMatrix.ty -= u.offset.y, o.u(u.worldColor, f.uWorldColorAlpha, 0), d.update();
        var p;
        this._renderer.renderPipes.uniformBatch ? p = this._renderer.renderPipes.uniformBatch.getUniformBindGroup(d, !1) : (p = this._bindGroupPool.pop() || new s.k, this._activeBindGroups.push(p), p.setResource(d, 0)), u.bindGroup = p, this._currentGlobalUniformData = u;
    };
    Bt.prototype.push = function (e) { this.bind(e), this._globalUniformDataStack[this._stackIndex++] = this._currentGlobalUniformData; };
    Bt.prototype.pop = function () { this._currentGlobalUniformData = this._globalUniformDataStack[--this._stackIndex - 1], this._renderer.type === z.WEBGL && this._currentGlobalUniformData.bindGroup.resources[0].update(); };
    Object.defineProperty(Bt.prototype, "bindGroup", {
        get: function () { return this._currentGlobalUniformData.bindGroup; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bt.prototype, "globalUniformData", {
        get: function () { return this._currentGlobalUniformData; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bt.prototype, "uniformGroup", {
        get: function () { return this._currentGlobalUniformData.bindGroup.resources[0]; },
        enumerable: false,
        configurable: true
    });
    Bt.prototype._createUniforms = function () { return new L({ uProjectionMatrix: { value: new i.b, type: "mat3x3<f32>" }, uWorldTransformMatrix: { value: new i.b, type: "mat3x3<f32>" }, uWorldColorAlpha: { value: new Float32Array(4), type: "vec4<f32>" }, uResolution: { value: [0, 0], type: "vec2<f32>" } }, { isStatic: !0 }); };
    Bt.prototype.destroy = function () { this._renderer = null, this._globalUniformDataStack.length = 0, this._uniformsPool.length = 0, this._activeUniforms.length = 0, this._bindGroupPool.length = 0, this._activeBindGroups.length = 0, this._currentGlobalUniformData = null; };
    return Bt;
}()), Bt.extension = { type: [r.G.WebGLSystem, r.G.WebGPUSystem, r.G.CanvasSystem], name: "globalUniforms" }; })))(); }
var Ht, Ut;
function Wt() { return (Wt = e.n((function () { r.q(), a.O(), Ht = 1, Ut = (function () {
    function Ut() {
        this._tasks = [], this._offset = 0;
    }
    Ut.prototype.init = function () { a.D.system.add(this._update, this); };
    Ut.prototype.repeat = function (e, t, n) {
        if (n === void 0) { n = !0; }
        var r = Ht++, i = 0;
        return n && (this._offset += 1e3, i = this._offset), this._tasks.push({ func: e, duration: t, start: performance.now(), offset: i, last: performance.now(), repeat: !0, id: r }), r;
    };
    Ut.prototype.cancel = function (e) { for (var t_22 = 0; t_22 < this._tasks.length; t_22++)
        if (this._tasks[t_22].id === e) {
            this._tasks.splice(t_22, 1);
            return;
        } };
    Ut.prototype._update = function () { var e = performance.now(); for (var t_23 = 0; t_23 < this._tasks.length; t_23++) {
        var n_20 = this._tasks[t_23];
        if (e - n_20.offset - n_20.last >= n_20.duration) {
            var t_24 = e - n_20.start;
            n_20.func(t_24), n_20.last = e;
        }
    } };
    Ut.prototype.destroy = function () { a.D.system.remove(this._update, this), this._tasks.length = 0; };
    return Ut;
}()), Ut.extension = { type: [r.G.WebGLSystem, r.G.WebGPUSystem, r.G.CanvasSystem], name: "scheduler", priority: 0 }; })))(); }
var Gt;
function Kt() { return (Kt = e.n((function () { r.q(), a.n(), B(), Gt = (function () {
    function Gt(e) {
        this._renderer = e;
    }
    Gt.prototype.init = function (e) { if (e.hello) {
        var e_28 = this._renderer.name;
        this._renderer.type === z.WEBGL && (e_28 += " ".concat(this._renderer.context.webGLVersion)), a.r(e_28);
    } };
    return Gt;
}()), Gt.extension = { type: [r.G.WebGLSystem, r.G.WebGPUSystem, r.G.CanvasSystem], name: "hello", priority: -2 }, Gt.defaultOptions = { hello: !1 }; })))(); }
var qt, Jt;
function Yt() { return (Yt = e.n((function () { r.q(), a.W(), t.br(), qt = (function () {
    function e(e) {
        this._renderer = e;
    }
    e.prototype.init = function (n) { n = t.yr(t.yr({}, e.defaultOptions), n), this.maxUnusedTime = n.renderableGCMaxUnusedTime; };
    Object.defineProperty(e.prototype, "enabled", {
        get: function () { return a.U("8.15.0", "RenderableGCSystem.enabled is deprecated, please use the GCSystem.enabled instead."), this._renderer.gc.enabled; },
        set: function (e) { a.U("8.15.0", "RenderableGCSystem.enabled is deprecated, please use the GCSystem.enabled instead."), this._renderer.gc.enabled = e; },
        enumerable: false,
        configurable: true
    });
    e.prototype.addManagedHash = function (e, t) { a.U("8.15.0", "RenderableGCSystem.addManagedHash is deprecated, please use the GCSystem.addCollection instead."), this._renderer.gc.addCollection(e, t, "hash"); };
    e.prototype.addManagedArray = function (e, t) { a.U("8.15.0", "RenderableGCSystem.addManagedArray is deprecated, please use the GCSystem.addCollection instead."), this._renderer.gc.addCollection(e, t, "array"); };
    e.prototype.addRenderable = function (e) { a.U("8.15.0", "RenderableGCSystem.addRenderable is deprecated, please use the GCSystem instead."), this._renderer.gc.addResource(e, "renderable"); };
    e.prototype.run = function () { a.U("8.15.0", "RenderableGCSystem.run is deprecated, please use the GCSystem instead."), this._renderer.gc.run(); };
    e.prototype.destroy = function () { this._renderer = null; };
    return e;
}()), qt.extension = { type: [r.G.WebGLSystem, r.G.WebGPUSystem, r.G.CanvasSystem], name: "renderableGC", priority: 0 }, qt.defaultOptions = { renderableGCActive: !0, renderableGCMaxUnusedTime: 6e4, renderableGCFrequency: 3e4 }, Jt = qt; })))(); }
var Xt, Zt;
function Qt() { return (Qt = e.n((function () { r.q(), a.W(), Xt = (function () {
    function e(e) {
        this._renderer = e, this._checkCount = 0;
    }
    Object.defineProperty(e.prototype, "count", {
        get: function () { return this._renderer.tick; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "checkCount", {
        get: function () { return this._checkCount; },
        set: function (e) { a.U("8.15.0", "TextureGCSystem.run is deprecated, please use the GCSystem instead."), this._checkCount = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "maxIdle", {
        get: function () { return this._renderer.gc.maxUnusedTime / 1e3 * 60; },
        set: function (e) { a.U("8.15.0", "TextureGCSystem.run is deprecated, please use the GCSystem instead."), this._renderer.gc.maxUnusedTime = e / 60 * 1e3; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "checkCountMax", {
        get: function () { return Math.floor(this._renderer.gc._frequency / 1e3); },
        set: function (e) { a.U("8.15.0", "TextureGCSystem.run is deprecated, please use the GCSystem instead."); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "active", {
        get: function () { return this._renderer.gc.enabled; },
        set: function (e) { a.U("8.15.0", "TextureGCSystem.run is deprecated, please use the GCSystem instead."), this._renderer.gc.enabled = e; },
        enumerable: false,
        configurable: true
    });
    e.prototype.init = function (t) { t.textureGCActive !== e.defaultOptions.textureGCActive && (this.active = t.textureGCActive), t.textureGCMaxIdle !== e.defaultOptions.textureGCMaxIdle && (this.maxIdle = t.textureGCMaxIdle), t.textureGCCheckCountMax !== e.defaultOptions.textureGCCheckCountMax && (this.checkCountMax = t.textureGCCheckCountMax); };
    e.prototype.run = function () { a.U("8.15.0", "TextureGCSystem.run is deprecated, please use the GCSystem instead."), this._renderer.gc.run(); };
    e.prototype.destroy = function () { this._renderer = null; };
    return e;
}()), Xt.extension = { type: [r.G.WebGLSystem, r.G.WebGPUSystem], name: "textureGC" }, Xt.defaultOptions = { textureGCActive: !0, textureGCAMaxIdle: null, textureGCMaxIdle: 3600, textureGCCheckCountMax: 600 }, Zt = Xt; })))(); }
var $t, X;
function en() { return (en = e.n((function () { n.i(), a.Y(), x(), O(), t.br(), $t = (function (_super) {
    __extends(e, _super);
    function e(e) {
        if (e === void 0) { e = {}; }
        var _this = this;
        var t;
        _this = _super.call(this) || this, _this.uid = a.X("renderTarget"), _this.colorAttachments = [], _this.dirtyId = 0, _this.isRoot = !1, _this._size = new Float32Array(2), _this._managedColorTextures = !1, _this._depth = !1, _this._stencil = !1, _this._colorTextures = null;
        var n = "colorAttachments" in e ? e : _this._normalizeOptions(e);
        if (_this.isRoot = (t = n.isRoot) != null && t, _this.label = n.label, _this.colorAttachments = n.colorAttachments, _this.depthStencilAttachment = n.depthStencilAttachment, _this.depthStencilAttachment) {
            var e_29 = _this.depthStencilAttachment.texture.format;
            _this._depth || (_this._depth = e_29.includes("depth")), _this._stencil || (_this._stencil = e_29.includes("stencil"));
        }
        if (_this.colorAttachments.length === 0 && !_this.depthStencilAttachment)
            throw Error("[RenderTarget] no color textures or depth textures were provided. Provide a depthStencilTexture or set depth/stencil to true when using colorTextures: 0.");
        if (_this.colorAttachments.length > 0) {
            var e_30 = _this.colorTexture;
            _this.resize(e_30.width, e_30.height, e_30._resolution);
        }
        _this.sizeSource && _this.sizeSource.on("resize", _this.onSourceResize, _this);
        return _this;
    }
    e.prototype._normalizeOptions = function (n) { var r = t.yr(t.yr({}, e.defaultOptions), n), i = [], a; if (typeof r.colorTextures == "number") {
        if (r.colorTextures > 0) {
            this._managedColorTextures = !0;
            for (var e_31 = 0; e_31 < r.colorTextures; e_31++)
                i.push({ texture: new b({ width: r.width, height: r.height, resolution: r.resolution, antialias: r.antialias }), loadOp: "clear", storeOp: "store" });
        }
    }
    else
        r.colorTextures.forEach(function (e) { i.push({ texture: e.source, loadOp: "clear", storeOp: "store" }); }); var o = r.depthStencilTexture === !0; if (this._depth = !!(r.depth || o), this._stencil = !!(r.stencil || o), r.depthStencilTexture instanceof D || r.depthStencilTexture instanceof b) {
        if (r.isRoot)
            throw Error("[RenderTarget] cannot attach a depth-stencil texture to the screen \u2014 the canvas owns its own depth/stencil buffers. Render to a texture target instead.");
        a = { texture: r.depthStencilTexture.source };
    }
    else
        (o && !r.isRoot || (r.stencil || r.depth) && i.length === 0) && (a = this._createDepthStencilTexture(r.width, r.height, r.resolution)); return { colorAttachments: i, depthStencilAttachment: a, isRoot: r.isRoot, label: r.label }; };
    Object.defineProperty(e.prototype, "size", {
        get: function () { var e = this._size; return e[0] = this.pixelWidth, e[1] = this.pixelHeight, e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "width", {
        get: function () { return this.sizeSource.width; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "height", {
        get: function () { return this.sizeSource.height; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "pixelWidth", {
        get: function () { return this.sizeSource.pixelWidth; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "pixelHeight", {
        get: function () { return this.sizeSource.pixelHeight; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "resolution", {
        get: function () { return this.sizeSource._resolution; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "colorTextures", {
        get: function () { return this._colorTextures || (this._colorTextures = this.colorAttachments.map(function (e) { return e.texture; })), this._colorTextures; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "depthStencilTexture", {
        get: function () { var e, t; return (e = (t = this.depthStencilAttachment) == null ? void 0 : t.texture) == null ? null : e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "depth", {
        get: function () { return this._depth; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "stencil", {
        get: function () { return this._stencil; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "colorTexture", {
        get: function () { var e; return (e = this.colorAttachments[0]) == null ? void 0 : e.texture; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "sizeSource", {
        get: function () { var e, t, n; return (e = (t = this.colorAttachments[0]) == null ? void 0 : t.texture) == null ? (n = this.depthStencilAttachment) == null ? void 0 : n.texture : e; },
        enumerable: false,
        configurable: true
    });
    e.prototype.onSourceResize = function (e) { this.resize(e.width, e.height, e._resolution, !0); };
    e.prototype.ensureDepthStencilTexture = function () { this._createDepthStencilTexture(this.sizeSource.width, this.sizeSource.height, this.sizeSource._resolution), this._depth = !0, this._stencil = !0; };
    e.prototype.resize = function (e, t, n, r) {
        if (n === void 0) { n = this.resolution; }
        if (r === void 0) { r = !1; }
        if (this.dirtyId++, this.colorAttachments.forEach(function (i, a) { r && a === 0 || i.texture.resize(e, t, n); }), this.depthStencilAttachment) {
            if (r && this.colorAttachments.length === 0)
                return;
            this.depthStencilAttachment.texture.resize(e, t, n);
        }
    };
    e.prototype.destroy = function () { (this.colorAttachments || this.depthStencilAttachment) && (this.emit("destroy", this), this.sizeSource.off("resize", this.onSourceResize, this), this._managedColorTextures && this.colorAttachments.forEach(function (e) { e.texture.destroy(); }), this.depthStencilAttachment && (this.depthStencilAttachment.texture.destroy(), delete this.depthStencilAttachment), this.colorAttachments = null, this._colorTextures = null, this.removeAllListeners()); };
    e.prototype._createDepthStencilTexture = function (e, t, n) { return this.depthStencilAttachment != null || (this.depthStencilAttachment = { texture: new b({ width: e, height: t, resolution: n, format: "depth24plus-stencil8", autoGenerateMipmaps: !1, antialias: !1, mipLevelCount: 1 }) }), this.depthStencilAttachment; };
    return e;
}(n.r)), $t.defaultOptions = { width: 0, height: 0, resolution: 1, colorTextures: 1, stencil: !1, depth: !1, antialias: !1, isRoot: !1 }, X = $t; })))(); }
function tn(e, n) { if (!Z.has(e)) {
    var r_15 = new D({ source: new j(t.yr({ resource: e }, n)) }), i_5 = function () { Z.get(e) === r_15 && Z.delete(e); };
    r_15.once("destroy", i_5), r_15.source.once("destroy", i_5), Z.set(e, r_15);
} return Z.get(e); }
var Z;
function nn() { return (nn = e.n((function () { a.I(), M(), O(), t.br(), Z = new Map, a.F.register(Z); })))(); }
var rn, an, on;
function sn() { return (sn = e.n((function () { r.P(), r.q(), i._(), a.W(), en(), yt(), fe(), nn(), t.br(), n.o(), rn = ["depth"], an = (function () {
    function e(e) {
        this._renderer = e;
    }
    Object.defineProperty(e.prototype, "autoDensity", {
        get: function () { return this.texture.source.autoDensity; },
        set: function (e) { this.texture.source.autoDensity = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "resolution", {
        get: function () { return this.texture.source._resolution; },
        set: function (e) { this.texture.source.resize(this.texture.source.width, this.texture.source.height, e); },
        enumerable: false,
        configurable: true
    });
    e.prototype.init = function (o) { o = t.yr(t.yr({}, e.defaultOptions), o), o.view && (a.U(a.G, "ViewSystem.view has been renamed to ViewSystem.canvas"), o.canvas = o.view), this.screen = new i.g(0, 0, o.width, o.height), this.canvas = o.canvas || r.N.get().createCanvas(), this.antialias = !!o.antialias; var s = o.depth, c = n.a(o, rn); this.texture = tn(this.canvas, c), this.renderTarget = new X({ colorTextures: [this.texture], depth: !!s, isRoot: !0 }), this.texture.source.transparent = o.backgroundAlpha < 1, this.texture.source.on("resize", this._updateScreenSize, this), this.resolution = o.resolution, this._updateScreenSize(); };
    e.prototype.resize = function (e, t, n) { this.texture.source.resize(e, t, n), this.screen.width = this.texture.frame.width, this.screen.height = this.texture.frame.height; };
    e.prototype.destroy = function (e) {
        if (e === void 0) { e = !1; }
        (typeof e == "boolean" ? e : e != null && e.removeView) && this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas), this.texture.source.off("resize", this._updateScreenSize, this), A.removeScreen(this._renderer.uid), J.removeScreen(this._renderer.uid), this.texture.destroy();
    };
    e.prototype._updateScreenSize = function () { var _a = this.texture.source, e = _a.pixelWidth, t = _a.pixelHeight, n = this._renderer.uid; A.setScreenSize(n, e, t), J.setScreenSize(n, e, t); };
    return e;
}()), an.extension = { type: [r.G.WebGLSystem, r.G.WebGPUSystem, r.G.CanvasSystem], name: "view", priority: 0 }, an.defaultOptions = { width: 800, height: 600, autoDensity: !1, antialias: !1 }, on = an; })))(); }
var cn, ln;
function un() { return (un = e.n((function () { o.c(), o.o(), o.i(), c.m(), a.g(), l.i(), s.S(), s.b(), s.v(), wt(), xt(), Ot(), It(), zt(), Vt(), Wt(), Kt(), Yt(), Qt(), sn(), cn = [Ct, Bt, Gt, on, o.r, Rt, Zt, Ft, Dt, a.h, Jt, Ut], ln = [bt, l.r, c.p, o.a, s.x, s._, s.y, o.s]; })))(); }
function dn(e) { if (e.colorAttachments.length === 0)
    return !1; var t = e.colorTexture.resource; return globalThis.HTMLCanvasElement && t instanceof HTMLCanvasElement && document.body.contains(t); }
var fn;
function pn() { return (pn = e.n((function () { i.x(), i._(), a.W(), a.L(), s.O(), B(), qe(), M(), x(), O(), nn(), en(), fn = (function () {
    function fn(e) {
        this.rootViewPort = new i.g, this.viewport = new i.g, this.onRenderTargetChange = new Ke("onRenderTargetChange"), this.projectionMatrix = new i.b, this.defaultClearColor = [0, 0, 0, 0], this._renderSurfaceToRenderTargetHash = new Map, this._gpuRenderTargetHash = Object.create(null), this._renderTargetStack = [], this._bindState = { target: null, frame: void 0, mipLevel: 0, layer: 0, flipY: !1 }, this._bindFrame = new i.g, this._renderer = e, e.gc.addCollection(this, "_gpuRenderTargetHash", "hash");
    }
    Object.defineProperty(fn.prototype, "renderSurface", {
        get: function () { return this._bindState.target; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(fn.prototype, "mipLevel", {
        get: function () { return this._bindState.mipLevel; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(fn.prototype, "layer", {
        get: function () { return this._bindState.layer; },
        enumerable: false,
        configurable: true
    });
    fn.prototype.finishRenderPass = function () { this.adaptor.finishRenderPass(this.renderTarget); };
    fn.prototype.renderStart = function (e) { var t, n; this._renderTargetStack.length = 0, this.push(e), this.rootViewPort.copyFrom(this.viewport), this.rootRenderTarget = this.renderTarget, this.renderingToScreen = dn(this.rootRenderTarget), (t = (n = this.adaptor).prerender) == null || t.call(n, this.rootRenderTarget); };
    fn.prototype.postrender = function () { var e, t; (e = (t = this.adaptor).postrender) == null || e.call(t, this.rootRenderTarget); };
    fn.prototype.bind = function (e, t, n, r, i, o, c) {
        if (t === void 0) { t = !0; }
        if (i === void 0) { i = 0; }
        if (o === void 0) { o = 0; }
        var l, u, d, f, p;
        var m;
        "target" in e ? m = e : (a.U("8.20.0", "RenderTargetSystem.bind: positional arguments are deprecated, please use an options object instead: bind({ target, clear, clearColor, frame, mipLevel, layer, flipY })"), m = { target: e, clear: t, clearColor: n, frame: r, mipLevel: i, layer: o, flipY: c });
        var h = m.target;
        t = (l = m.clear) == null || l, n = m.clearColor, i = ((u = m.mipLevel) == null ? 0 : u) | 0, o = ((d = m.layer) == null ? 0 : d) | 0, c = m.flipY, r = m.frame;
        var g = this.getRenderTarget(h), _ = this.renderTarget !== g || !!g.flipY != !!c;
        this.renderTarget = g;
        var v = this.getGpuRenderTarget(g);
        (g.pixelWidth !== v.width || g.pixelHeight !== v.height) && (this.adaptor.resizeGpuRenderTarget(g), v.width = g.pixelWidth, v.height = g.pixelHeight);
        var y = ((f = g.colorAttachments[0]) == null ? void 0 : f.texture) || ((p = g.depthStencilAttachment) == null ? void 0 : p.texture), b = this.viewport, x = y.dimension === "3d" ? Math.max(y.depth >> i, 1) : y.depthOrArrayLayers;
        if (o < 0 || o >= x)
            throw Error("[RenderTargetSystem] layer ".concat(o, " is out of bounds (layer count=").concat(x, ")."));
        var S = this._bindState;
        S.target = h, S.frame = r ? this._bindFrame.copyFrom(r) : void 0, S.mipLevel = i, S.layer = o, S.flipY = c;
        var C = Math.max(y.pixelWidth >> i, 1), w = Math.max(y.pixelHeight >> i, 1);
        if (!r && h instanceof D && (r = h.frame), r) {
            var e_32 = y._resolution, t_25 = 1 << Math.max(i, 0), n_21 = r.x * e_32 + .5 | 0, a_4 = r.y * e_32 + .5 | 0, o_3 = r.width * e_32 + .5 | 0, s_2 = r.height * e_32 + .5 | 0, c_1 = Math.floor(n_21 / t_25), l_1 = Math.floor(a_4 / t_25), u_3 = Math.ceil(o_3 / t_25), d_2 = Math.ceil(s_2 / t_25);
            c_1 < 0 && (u_3 += c_1, c_1 = 0), l_1 < 0 && (d_2 += l_1, l_1 = 0), c_1 = Math.min(c_1, C - 1), l_1 = Math.min(l_1, w - 1), u_3 = Math.min(u_3, C - c_1), d_2 = Math.min(d_2, w - l_1), u_3 = Math.max(u_3, 1), d_2 = Math.max(d_2, 1), b.x = c_1, b.y = l_1, b.width = u_3, b.height = d_2;
        }
        else
            b.x = 0, b.y = 0, b.width = C, b.height = w;
        return g.flipY = c, s.h(this.projectionMatrix, 0, 0, b.width / y.resolution, b.height / y.resolution, !g.isRoot != !!g.flipY), this.adaptor.startRenderPass(g, t, n, b, i, o), _ && this.onRenderTargetChange.emit(g), g;
    };
    fn.prototype.getBindState = function (e) { if (!this.renderTarget)
        throw Error("[RenderTargetSystem] getBindState is only valid while a render surface is bound"); var t = this._bindState; return e != null || (e = {}), e.target = t.target, e.clear = s.D.NONE, e.clearColor = void 0, t.frame ? e.frame ? e.frame.copyFrom(t.frame) : e.frame = t.frame.clone() : e.frame = void 0, e.mipLevel = t.mipLevel, e.layer = t.layer, e.flipY = !!t.flipY, e; };
    fn.prototype.isFrontFaceInverted = function (e, t) { if (!e) {
        if (e = this.renderTarget, !e)
            return !1;
        t = e.flipY;
    } return !!t != (this._renderer.type === z.WEBGL && !e.isRoot); };
    Object.defineProperty(fn.prototype, "frontFaceInverted", {
        get: function () { return a.U(a.K, "RenderTargetSystem.frontFaceInverted is deprecated, use isFrontFaceInverted() instead"), this.isFrontFaceInverted(); },
        enumerable: false,
        configurable: true
    });
    fn.prototype.clear = function (e, t, n, r, i) {
        if (t === void 0) { t = s.D.ALL; }
        if (r === void 0) { r = this.mipLevel; }
        if (i === void 0) { i = this.layer; }
        t && (e && (e = this.getRenderTarget(e)), this.adaptor.clear(e || this.renderTarget, t, n, this.viewport, r, i));
    };
    fn.prototype.contextChange = function () { this._gpuRenderTargetHash = Object.create(null); };
    fn.prototype.push = function (e, t, n, r, i, o, c) {
        if (t === void 0) { t = s.D.ALL; }
        if (i === void 0) { i = 0; }
        if (o === void 0) { o = 0; }
        var l;
        "target" in e ? l = e : (a.U("8.20.0", "RenderTargetSystem.push: positional arguments are deprecated, please use an options object instead: push({ target, clear, clearColor, frame, mipLevel, layer, flipY })"), l = { target: e, clear: t, clearColor: n, frame: r, mipLevel: i, layer: o, flipY: c });
        var u = this.bind(l);
        return this._renderTargetStack.push({ target: l.target, clear: !1, clearColor: void 0, frame: l.frame ? l.frame.clone() : void 0, mipLevel: l.mipLevel, layer: l.layer, flipY: l.flipY }), u;
    };
    fn.prototype.pop = function () { this._renderTargetStack.pop(); var e = this._renderTargetStack[this._renderTargetStack.length - 1]; if (!e)
        throw Error("[RenderTargetSystem] pop: no previous binding to restore (unbalanced pop)"); return this.bind(e); };
    fn.prototype.getRenderTarget = function (e) { var t; return e.isTexture && (e = e.source), (t = this._renderSurfaceToRenderTargetHash.get(e)) == null ? this._initRenderTarget(e) : t; };
    fn.prototype.copyToTexture = function (e, t, n, r, i) { var a = this.getRenderTarget(e); n.x < 0 && (r.width += n.x, i.x -= n.x, n.x = 0), n.y < 0 && (r.height += n.y, i.y -= n.y, n.y = 0); var o = a.pixelWidth, s = a.pixelHeight; return r.width = Math.min(r.width, o - n.x), r.height = Math.min(r.height, s - n.y), this.adaptor.copyToTexture(a, t, n, r, i); };
    fn.prototype.copyDepthTexture = function (e, t, n, r, i) {
        if (i === void 0) { i = { x: 0, y: 0 }; }
        var o = this.getRenderTarget(e);
        if (!o.depthStencilAttachment) {
            a.R("[RenderTargetSystem] copyDepthTexture: the source render target has no depth attachment to copy from");
            return;
        }
        var s = t.source;
        if (!s.format.includes("depth") && !s.format.includes("stencil")) {
            a.R("[RenderTargetSystem] copyDepthTexture: the destination texture must have a depth/stencil format (got '".concat(s.format, "')"));
            return;
        }
        var c = n.x, l = n.y, u = i.x, d = i.y, f = r.width, p = r.height;
        c < 0 && (f += c, u -= c, c = 0), l < 0 && (p += l, d -= l, l = 0), f = Math.min(f, o.pixelWidth - c), p = Math.min(p, o.pixelHeight - l), f = Math.min(f, s.pixelWidth - u), p = Math.min(p, s.pixelHeight - d), f <= 0 || p <= 0 || this.adaptor.copyDepthTexture(o, t, { x: c, y: l }, { width: f, height: p }, { x: u, y: d });
    };
    fn.prototype.ensureDepthStencil = function () { if (!this.renderTarget.stencil) {
        if (this.renderTarget.depthStencilTexture) {
            a.R("[RenderTargetSystem] a stencil mask is being used, but the render target's depthStencilTexture format '".concat(this.renderTarget.depthStencilTexture.format, "' has no stencil aspect, so masking cannot work here. Use a 'depth24plus-stencil8' texture instead."));
            return;
        }
        this.renderTarget._depth = !0, this.renderTarget._stencil = !0, this.adaptor.startRenderPass(this.renderTarget, !1, null, this.viewport, 0, this.layer);
    } };
    fn.prototype.destroy = function () {
        var _this = this;
        this._renderer = null, this._renderSurfaceToRenderTargetHash.forEach(function (e, t) { e === t ? e.off("destroy", _this._onRenderTargetDestroy, _this) : _this._releaseRenderTarget(t, e); }), this._renderSurfaceToRenderTargetHash.clear();
        for (var _i = 0, _a = Object.values(this._gpuRenderTargetHash); _i < _a.length; _i++) {
            var e_33 = _a[_i];
            e_33 && this.adaptor.destroyGpuRenderTarget(e_33);
        }
        this._gpuRenderTargetHash = Object.create(null);
    };
    fn.prototype._initRenderTarget = function (e) { var t = null; if (j.test(e) && (e = tn(e).source), e instanceof X)
        t = e, e.once("destroy", this._onRenderTargetDestroy, this);
    else if (e instanceof b) {
        var n_22 = e.format;
        t = n_22.includes("depth") || n_22.includes("stencil") ? new X({ colorTextures: 0, depthStencilTexture: e }) : new X({ colorTextures: [e] }), e.source instanceof j && (t.isRoot = !0), e.once("destroy", this._onRenderSurfaceDestroy, this);
    } return this._renderSurfaceToRenderTargetHash.set(e, t), t; };
    fn.prototype._onRenderSurfaceDestroy = function (e) { var t = this._renderSurfaceToRenderTargetHash.get(e); t && this._releaseRenderTarget(e, t); };
    fn.prototype._onRenderTargetDestroy = function (e) { this._renderSurfaceToRenderTargetHash.delete(e), this._releaseGpuRenderTarget(e); };
    fn.prototype._releaseRenderTarget = function (e, t) { t.destroy(), this._renderSurfaceToRenderTargetHash.delete(e), e.off("destroy", this._onRenderSurfaceDestroy, this), this._releaseGpuRenderTarget(t); };
    fn.prototype._releaseGpuRenderTarget = function (e) { var t = this._gpuRenderTargetHash[e.uid]; t && (this._gpuRenderTargetHash[e.uid] = null, this.adaptor.destroyGpuRenderTarget(t)); };
    fn.prototype.getGpuRenderTarget = function (e) { return this._gpuRenderTargetHash[e.uid] || (this._gpuRenderTargetHash[e.uid] = this.adaptor.initGpuRenderTarget(e)); };
    fn.prototype.resetState = function () { this.renderTarget = null, this._bindState.target = null; };
    return fn;
}()); })))(); }
var mn;
function hn() { return (hn = e.n((function () { a.y(), q(), G(), mn = (function () {
    function mn(e) {
        this._syncFunctionHash = Object.create(null), this._adaptor = e, this._systemCheck();
    }
    mn.prototype._systemCheck = function () { if (!a.b())
        throw Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support."); };
    mn.prototype.ensureUniformGroup = function (e) { var t = this.getUniformGroupData(e); e.buffer || (e.buffer = new K({ data: new Float32Array(t.layout.size / 4), usage: W.UNIFORM | W.COPY_DST })); };
    mn.prototype.getUniformGroupData = function (e) { return this._syncFunctionHash[e._signature] || this._initUniformGroup(e); };
    mn.prototype._initUniformGroup = function (e) { var t = e._signature, n = this._syncFunctionHash[t]; if (!n) {
        var r_16 = Object.keys(e.uniformStructures).map(function (t) { return e.uniformStructures[t]; }), i_6 = this._adaptor.createUboElements(r_16), a_5 = this._generateUboSync(i_6.uboElements);
        n = this._syncFunctionHash[t] = { layout: i_6, syncFunction: a_5 };
    } return this._syncFunctionHash[t]; };
    mn.prototype._generateUboSync = function (e) { return this._adaptor.generateUboSync(e); };
    mn.prototype.syncUniformGroup = function (e, t, n) { var r = this.getUniformGroupData(e); e.buffer || (e.buffer = new K({ data: new Float32Array(r.layout.size / 4), usage: W.UNIFORM | W.COPY_DST })); var i = null; return t || (t = e.buffer.data, i = e.buffer.dataInt32), n || (n = 0), r.syncFunction(e.uniforms, t, i, n), !0; };
    mn.prototype.updateUniformGroup = function (e) { if (e.isStatic && !e._dirtyId)
        return !1; e._dirtyId = 0; var t = this.syncUniformGroup(e); return e.buffer.update(), t; };
    mn.prototype.destroy = function () { this._syncFunctionHash = null; };
    return mn;
}()); })))(); }
var Q;
function gn() {
    return (gn = e.n((function () {
        Q = [{ type: "mat3x3<f32>", test: function (e) { return e.value.a !== void 0; }, ubo: "\n            var matrix = uv[name].toArray(true);\n            data[offset] = matrix[0];\n            data[offset + 1] = matrix[1];\n            data[offset + 2] = matrix[2];\n            data[offset + 4] = matrix[3];\n            data[offset + 5] = matrix[4];\n            data[offset + 6] = matrix[5];\n            data[offset + 8] = matrix[6];\n            data[offset + 9] = matrix[7];\n            data[offset + 10] = matrix[8];\n        ", uniform: "\n            gl.uniformMatrix3fv(ud[name].location, false, uv[name].toArray(true));\n        " }, { type: "vec4<f32>", test: function (e) { return e.type === "vec4<f32>" && e.size === 1 && e.value.width !== void 0; }, ubo: "\n            v = uv[name];\n            data[offset] = v.x;\n            data[offset + 1] = v.y;\n            data[offset + 2] = v.width;\n            data[offset + 3] = v.height;\n        ", uniform: "\n            cv = ud[name].value;\n            v = uv[name];\n            if (cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height) {\n                cv[0] = v.x;\n                cv[1] = v.y;\n                cv[2] = v.width;\n                cv[3] = v.height;\n                gl.uniform4f(ud[name].location, v.x, v.y, v.width, v.height);\n            }\n        " }, { type: "vec2<f32>", test: function (e) { return e.type === "vec2<f32>" && e.size === 1 && e.value.x !== void 0; }, ubo: "\n            v = uv[name];\n            data[offset] = v.x;\n            data[offset + 1] = v.y;\n        ", uniform: "\n            cv = ud[name].value;\n            v = uv[name];\n            if (cv[0] !== v.x || cv[1] !== v.y) {\n                cv[0] = v.x;\n                cv[1] = v.y;\n                gl.uniform2f(ud[name].location, v.x, v.y);\n            }\n        " }, { type: "vec4<f32>", test: function (e) { return e.type === "vec4<f32>" && e.size === 1 && e.value.red !== void 0; }, ubo: "\n            v = uv[name];\n            data[offset] = v.red;\n            data[offset + 1] = v.green;\n            data[offset + 2] = v.blue;\n            data[offset + 3] = v.alpha;\n        ", uniform: "\n            cv = ud[name].value;\n            v = uv[name];\n            if (cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.alpha) {\n                cv[0] = v.red;\n                cv[1] = v.green;\n                cv[2] = v.blue;\n                cv[3] = v.alpha;\n                gl.uniform4f(ud[name].location, v.red, v.green, v.blue, v.alpha);\n            }\n        " }, { type: "vec3<f32>", test: function (e) { return e.type === "vec3<f32>" && e.size === 1 && e.value.red !== void 0; }, ubo: "\n            v = uv[name];\n            data[offset] = v.red;\n            data[offset + 1] = v.green;\n            data[offset + 2] = v.blue;\n        ", uniform: "\n            cv = ud[name].value;\n            v = uv[name];\n            if (cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue) {\n                cv[0] = v.red;\n                cv[1] = v.green;\n                cv[2] = v.blue;\n                gl.uniform3f(ud[name].location, v.red, v.green, v.blue);\n            }\n        " }];
    })))();
}
function _n(e, t, n) {
    var r = ["\n        var v = null;\n        var v2 = null;\n        var t = 0;\n        var index = 0;\n        var name = null;\n        var arrayOffset = null;\n    "], i = 0;
    for (var a_6 = 0; a_6 < e.length; a_6++) {
        var o_4 = e[a_6], s_3 = o_4.data.name, c_2 = !1, l_2 = 0;
        for (var e_34 = 0; e_34 < Q.length; e_34++)
            if (Q[e_34].test(o_4.data)) {
                l_2 = o_4.offset / 4, r.push("name = \"".concat(s_3, "\";"), "offset += ".concat(l_2 - i, ";"), Q[e_34].ubo), c_2 = !0;
                break;
            }
        if (!c_2) {
            if (o_4.data.size > 1)
                l_2 = o_4.offset / 4, r.push(n(o_4, l_2 - i));
            else {
                var e_35 = t[o_4.data.type];
                l_2 = o_4.offset / 4, r.push("\n                    v = uv.".concat(s_3, ";\n                    offset += ").concat(l_2 - i, ";\n                    ").concat(e_35, ";\n                "));
            }
        }
        i = l_2;
    }
    return (function () { throw Error("[sapling2d] new Function is not allowed in WeChat Mini Games"); })("uv", "data", "dataInt32", "offset", r.join("\n"));
}
function vn() { return (vn = e.n((function () { gn(); })))(); }
function $(e, t) {
    return "\n        for (let i = 0; i < ".concat(e * t, "; i++) {\n            data[offset + (((i / ").concat(e, ")|0) * 4) + (i % ").concat(e, ")] = v[i];\n        }\n    ");
}
var yn, bn;
function xn() {
    return (xn = e.n((function () {
        t.br(), yn = { f32: "\n        data[offset] = v;", i32: "\n        dataInt32[offset] = v;", u32: "\n        dataInt32[offset] = v;", "vec2<f32>": "\n        data[offset] = v[0];\n        data[offset + 1] = v[1];", "vec3<f32>": "\n        data[offset] = v[0];\n        data[offset + 1] = v[1];\n        data[offset + 2] = v[2];", "vec4<f32>": "\n        data[offset] = v[0];\n        data[offset + 1] = v[1];\n        data[offset + 2] = v[2];\n        data[offset + 3] = v[3];", "vec2<i32>": "\n        dataInt32[offset] = v[0];\n        dataInt32[offset + 1] = v[1];", "vec3<i32>": "\n        dataInt32[offset] = v[0];\n        dataInt32[offset + 1] = v[1];\n        dataInt32[offset + 2] = v[2];", "vec4<i32>": "\n        dataInt32[offset] = v[0];\n        dataInt32[offset + 1] = v[1];\n        dataInt32[offset + 2] = v[2];\n        dataInt32[offset + 3] = v[3];", "vec2<u32>": "\n        dataInt32[offset] = v[0];\n        dataInt32[offset + 1] = v[1];", "vec3<u32>": "\n        dataInt32[offset] = v[0];\n        dataInt32[offset + 1] = v[1];\n        dataInt32[offset + 2] = v[2];", "vec4<u32>": "\n        dataInt32[offset] = v[0];\n        dataInt32[offset + 1] = v[1];\n        dataInt32[offset + 2] = v[2];\n        dataInt32[offset + 3] = v[3];", "mat2x2<f32>": "\n        data[offset] = v[0];\n        data[offset + 1] = v[1];\n        data[offset + 4] = v[2];\n        data[offset + 5] = v[3];", "mat3x3<f32>": "\n        data[offset] = v[0];\n        data[offset + 1] = v[1];\n        data[offset + 2] = v[2];\n        data[offset + 4] = v[3];\n        data[offset + 5] = v[4];\n        data[offset + 6] = v[5];\n        data[offset + 8] = v[6];\n        data[offset + 9] = v[7];\n        data[offset + 10] = v[8];", "mat4x4<f32>": "\n        for (let i = 0; i < 16; i++) {\n            data[offset + i] = v[i];\n        }", "mat3x2<f32>": $(3, 2), "mat4x2<f32>": $(4, 2), "mat2x3<f32>": $(2, 3), "mat4x3<f32>": $(4, 3), "mat2x4<f32>": $(2, 4), "mat3x4<f32>": $(3, 4) }, bn = t.yr(t.yr({}, yn), {}, { "mat2x2<f32>": "\n        data[offset] = v[0];\n        data[offset + 1] = v[1];\n        data[offset + 2] = v[2];\n        data[offset + 3] = v[3];\n    " });
    })))();
}
var Sn;
function Cn() { return (Cn = e.n((function () { n.i(), a.Y(), Sn = (function (_super) {
    __extends(Sn, _super);
    function Sn(_a) {
        var e = _a.buffer, t = _a.offset, n = _a.size;
        var _this = this;
        _this = _super.call(this) || this, _this.uid = a.X("buffer"), _this._resourceType = "bufferResource", _this._resourceId = a.X("resource"), _this._bufferResource = !0, _this.destroyed = !1, _this.buffer = e, _this.offset = t | 0, _this.size = n, _this.buffer.on("change", _this.onBufferChange, _this);
        return _this;
    }
    Object.defineProperty(Sn.prototype, "_gcLastUsed", {
        get: function () { var e, t; return (e = (t = this.buffer) == null ? void 0 : t._gcLastUsed) == null ? -1 : e; },
        set: function (e) { this.buffer && (this.buffer._gcLastUsed = e); },
        enumerable: false,
        configurable: true
    });
    Sn.prototype.onBufferChange = function () { this._resourceId = a.X("resource"), this.emit("change", this); };
    Sn.prototype.destroy = function (e) {
        if (e === void 0) { e = !1; }
        this.destroyed = !0, e && this.buffer.destroy(), this.emit("change", this), this.buffer = null, this.removeAllListeners();
    };
    return Sn;
}(n.r)); })))(); }
var wn;
function Tn() { return (Tn = e.n((function () { n.i(), a.Y(), wn = (function (_super) {
    __extends(wn, _super);
    function wn(e, t) {
        var _this = this;
        _this = _super.call(this) || this, _this._resourceType = "textureView", _this._resourceId = a.X("resource"), _this.source = e, _this.viewDescriptor = t, _this._onChange = _this._onChange.bind(_this), _this._onDestroy = _this._onDestroy.bind(_this), _this.source.on("change", _this._onChange), _this.source.on("destroy", _this._onDestroy);
        return _this;
    }
    wn.prototype._onChange = function () { this.emit("change", this); };
    wn.prototype._onDestroy = function () { this.destroy(); };
    Object.defineProperty(wn.prototype, "destroyed", {
        get: function () { return this.source.destroyed; },
        enumerable: false,
        configurable: true
    });
    wn.prototype.destroy = function () { this.source && (this.source.off("change", this._onChange), this.source.off("destroy", this._onDestroy)), this.emit("destroy", this), this.removeAllListeners(); };
    return wn;
}(n.r)); })))(); }
function En(e, t, n, r, i) { if (e = Math.max(0, e), t = Math.min(t, n * r), e >= t)
    return 0; var a = Math.floor(e / n), o = e - a * n, s = Math.floor(t / n), c = t - s * n; if (a === s)
    return i[0].set(o, a, c - o, 1), 1; var l = 0, u = a; return o > 0 && (i[l++].set(o, a, n - o, 1), u++), s > u && i[l++].set(0, u, n, s - u), c > 0 && i[l++].set(0, s, c, 1), l; }
function Dn() { return (Dn = e.n((function () { })))(); }
Object.defineProperty(exports, "$", { enumerable: !0, get: function () { return Ee; } }), Object.defineProperty(exports, "A", { enumerable: !0, get: function () { return lt; } }), Object.defineProperty(exports, "B", { enumerable: !0, get: function () { return Qe; } }), Object.defineProperty(exports, "C", { enumerable: !0, get: function () { return J; } }), Object.defineProperty(exports, "Ct", { enumerable: !0, get: function () { return x; } }), Object.defineProperty(exports, "D", { enumerable: !0, get: function () { return ft; } }), Object.defineProperty(exports, "Dt", { enumerable: !0, get: function () { return u; } }), Object.defineProperty(exports, "E", { enumerable: !0, get: function () { return mt; } }), Object.defineProperty(exports, "Et", { enumerable: !0, get: function () { return d; } }), Object.defineProperty(exports, "F", { enumerable: !0, get: function () { return G; } }), Object.defineProperty(exports, "G", { enumerable: !0, get: function () { return We; } }), Object.defineProperty(exports, "H", { enumerable: !0, get: function () { return Xe; } }), Object.defineProperty(exports, "I", { enumerable: !0, get: function () { return rt; } }), Object.defineProperty(exports, "J", { enumerable: !0, get: function () { return Le; } }), Object.defineProperty(exports, "K", { enumerable: !0, get: function () { return Ge; } }), Object.defineProperty(exports, "L", { enumerable: !0, get: function () { return it; } }), Object.defineProperty(exports, "M", { enumerable: !0, get: function () { return K; } }), Object.defineProperty(exports, "N", { enumerable: !0, get: function () { return q; } }), Object.defineProperty(exports, "O", { enumerable: !0, get: function () { return dt; } }), Object.defineProperty(exports, "P", { enumerable: !0, get: function () { return W; } }), Object.defineProperty(exports, "Q", { enumerable: !0, get: function () { return R; } }), Object.defineProperty(exports, "R", { enumerable: !0, get: function () { return tt; } }), Object.defineProperty(exports, "S", { enumerable: !0, get: function () { return jt; } }), Object.defineProperty(exports, "St", { enumerable: !0, get: function () { return b; } }), Object.defineProperty(exports, "T", { enumerable: !0, get: function () { return ht; } }), Object.defineProperty(exports, "Tt", { enumerable: !0, get: function () { return g; } }), Object.defineProperty(exports, "U", { enumerable: !0, get: function () { return Ze; } }), Object.defineProperty(exports, "V", { enumerable: !0, get: function () { return $e; } }), Object.defineProperty(exports, "W", { enumerable: !0, get: function () { return ze; } }), Object.defineProperty(exports, "X", { enumerable: !0, get: function () { return B; } }), Object.defineProperty(exports, "Y", { enumerable: !0, get: function () { return z; } }), Object.defineProperty(exports, "Z", { enumerable: !0, get: function () { return L; } }), Object.defineProperty(exports, "_", { enumerable: !0, get: function () { return pn; } }), Object.defineProperty(exports, "_t", { enumerable: !0, get: function () { return O; } }), Object.defineProperty(exports, "a", { enumerable: !0, get: function () { return Sn; } }), Object.defineProperty(exports, "at", { enumerable: !0, get: function () { return be; } }), Object.defineProperty(exports, "b", { enumerable: !0, get: function () { return un; } }), Object.defineProperty(exports, "bt", { enumerable: !0, get: function () { return S; } }), Object.defineProperty(exports, "c", { enumerable: !0, get: function () { return yn; } }), Object.defineProperty(exports, "ct", { enumerable: !0, get: function () { return pe; } }), Object.defineProperty(exports, "d", { enumerable: !0, get: function () { return vn; } }), Object.defineProperty(exports, "dt", { enumerable: !0, get: function () { return M; } }), Object.defineProperty(exports, "et", { enumerable: !0, get: function () { return De; } }), Object.defineProperty(exports, "f", { enumerable: !0, get: function () { return gn; } }), Object.defineProperty(exports, "ft", { enumerable: !0, get: function () { return A; } }), Object.defineProperty(exports, "g", { enumerable: !0, get: function () { return fn; } }), Object.defineProperty(exports, "gt", { enumerable: !0, get: function () { return D; } }), Object.defineProperty(exports, "h", { enumerable: !0, get: function () { return hn; } }), Object.defineProperty(exports, "ht", { enumerable: !0, get: function () { return te; } }), Object.defineProperty(exports, "i", { enumerable: !0, get: function () { return Tn; } }), Object.defineProperty(exports, "it", { enumerable: !0, get: function () { return I; } }), Object.defineProperty(exports, "j", { enumerable: !0, get: function () { return ut; } }), Object.defineProperty(exports, "k", { enumerable: !0, get: function () { return pt; } }), Object.defineProperty(exports, "l", { enumerable: !0, get: function () { return bn; } }), Object.defineProperty(exports, "lt", { enumerable: !0, get: function () { return me; } }), Object.defineProperty(exports, "m", { enumerable: !0, get: function () { return mn; } }), Object.defineProperty(exports, "mt", { enumerable: !0, get: function () { return ee; } }), Object.defineProperty(exports, "n", { enumerable: !0, get: function () { return Dn; } }), Object.defineProperty(exports, "nt", { enumerable: !0, get: function () { return Te; } }), Object.defineProperty(exports, "o", { enumerable: !0, get: function () { return Cn; } }), Object.defineProperty(exports, "ot", { enumerable: !0, get: function () { return he; } }), Object.defineProperty(exports, "p", { enumerable: !0, get: function () { return Q; } }), Object.defineProperty(exports, "pt", { enumerable: !0, get: function () { return fe; } }), Object.defineProperty(exports, "q", { enumerable: !0, get: function () { return Ie; } }), Object.defineProperty(exports, "r", { enumerable: !0, get: function () { return wn; } }), Object.defineProperty(exports, "rt", { enumerable: !0, get: function () { return xe; } }), Object.defineProperty(exports, "s", { enumerable: !0, get: function () { return xn; } }), Object.defineProperty(exports, "st", { enumerable: !0, get: function () { return ge; } }), Object.defineProperty(exports, "t", { enumerable: !0, get: function () { return En; } }), Object.defineProperty(exports, "tt", { enumerable: !0, get: function () { return Ce; } }), Object.defineProperty(exports, "u", { enumerable: !0, get: function () { return _n; } }), Object.defineProperty(exports, "ut", { enumerable: !0, get: function () { return j; } }), Object.defineProperty(exports, "v", { enumerable: !0, get: function () { return ln; } }), Object.defineProperty(exports, "vt", { enumerable: !0, get: function () { return T; } }), Object.defineProperty(exports, "w", { enumerable: !0, get: function () { return yt; } }), Object.defineProperty(exports, "wt", { enumerable: !0, get: function () { return h; } }), Object.defineProperty(exports, "x", { enumerable: !0, get: function () { return At; } }), Object.defineProperty(exports, "xt", { enumerable: !0, get: function () { return C; } }), Object.defineProperty(exports, "y", { enumerable: !0, get: function () { return cn; } }), Object.defineProperty(exports, "yt", { enumerable: !0, get: function () { return E; } }), Object.defineProperty(exports, "z", { enumerable: !0, get: function () { return nt; } });
