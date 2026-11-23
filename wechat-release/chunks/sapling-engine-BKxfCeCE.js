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
var e = require("./rolldown-runtime-8PkXcCTM.js"), t = require("./sapling-engine-B1Z0aBb-.js"), n = require("./nape-physics-tjC3J-kx.js"), r = require("./sapling-engine-BaQMQODF.js"), i = require("./sapling-engine-0ptSNjZs.js"), a = require("./sapling-engine-CudxT9as.js"), o = require("./sapling-engine-D-RMTrWW.js"), s = require("./sapling-engine-BKxInvnL.js"), c = require("./sapling-engine-UgL1Y7P9.js"), l = require("./sapling-engine-BOYt4h2A.js"), u = require("./sapling-engine-CGmSt4Cl.js"), d = require("./sapling-engine-CLKaLt8k.js");
var f;
function p() { return (p = e.n((function () { c.M(), c.h(), f = (function (_super) {
    __extends(f, _super);
    function f(e) {
        var _this = this;
        var t;
        _this = _super.call(this, e) || this, _this.canBundle = !0, _this.allowChildren = !1, _this._roundPixels = 0, _this._lastUsed = -1, _this._gpuData = Object.create(null), _this.autoGarbageCollect = !0, _this._gcLastUsed = -1, _this._bounds = new c.j(0, 1, 0, 0), _this._boundsDirty = !0, _this.autoGarbageCollect = (t = e.autoGarbageCollect) == null || t;
        return _this;
    }
    Object.defineProperty(f.prototype, "bounds", {
        get: function () { return this._boundsDirty && (this.updateBounds(), this._boundsDirty = !1), this._bounds; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(f.prototype, "roundPixels", {
        get: function () { return !!this._roundPixels; },
        set: function (e) { this._roundPixels = +!!e; },
        enumerable: false,
        configurable: true
    });
    f.prototype.containsPoint = function (e) { var t = this.bounds, n = e.x, r = e.y; return n >= t.minX && n <= t.maxX && r >= t.minY && r <= t.maxY; };
    f.prototype.onViewUpdate = function () { if (this._didViewChangeTick++, this._boundsDirty = !0, this.didViewUpdate)
        return; this.didViewUpdate = !0; var e = this.renderGroup || this.parentRenderGroup; e && e.onChildViewUpdate(this); };
    f.prototype.unload = function () { this.emit("unload", this); for (var t_1 in this._gpuData) {
        var e;
        (e = this._gpuData[t_1]) == null || e.destroy();
    } this._gpuData = Object.create(null), this.onViewUpdate(); };
    f.prototype.destroy = function (e) { this.unload(), _super.prototype.destroy.call(this, e), this._bounds = null; };
    f.prototype.collectRenderablesSimple = function (e, t, n) { var r = t.renderPipes; r.blendMode.pushBlendMode(this, this.groupBlendMode, e); var i = r[this.renderPipeId]; i != null && i.addRenderable && i.addRenderable(this, e), this.didViewUpdate = !1; var a = this.children, o = a.length; for (var r_1 = 0; r_1 < o; r_1++)
        a[r_1].collectRenderables(e, t, n); r.blendMode.popBlendMode(e); };
    return f;
}(c.m)); })))(); }
var m, h;
function g() { return (g = e.n((function () { a.O(), s._t(), o.W(), p(), r.o(), n.br(), m = ["texture", "anchor", "roundPixels", "width", "height"], h = (function (_super) {
    __extends(e, _super);
    function e(e) {
        if (e === void 0) { e = s.gt.EMPTY; }
        var _this = this;
        e instanceof s.gt && (e = { texture: e });
        var _a = e.texture, t = _a === void 0 ? s.gt.EMPTY : _a, i = e.anchor, o = e.roundPixels, c = e.width, l = e.height, u = r.a(e, m);
        _this = _super.call(this, n.yr({ label: "Sprite" }, u)) || this, _this.renderPipeId = "sprite", _this.batched = !0, _this._visualBounds = { minX: 0, maxX: 1, minY: 0, maxY: 0 }, _this._anchor = new a.D({ _onUpdate: function () { _this.onViewUpdate(); } }), i ? _this.anchor = i : t.defaultAnchor && (_this.anchor = t.defaultAnchor), _this.texture = t, _this.allowChildren = !1, _this.roundPixels = o != null && o, c !== void 0 && (_this.width = c), l !== void 0 && (_this.height = l);
        return _this;
    }
    e.from = function (t, n) {
        if (n === void 0) { n = !1; }
        return t instanceof s.gt ? new e(t) : new e(s.gt.from(t, n));
    };
    Object.defineProperty(e.prototype, "texture", {
        get: function () { return this._texture; },
        set: function (e) { e || (e = s.gt.EMPTY); var t = this._texture; t !== e && (t && t.dynamic && t.off("update", this.onViewUpdate, this), e.dynamic && e.on("update", this.onViewUpdate, this), this._texture = e, this._width && this._setWidth(this._width, this._texture.orig.width), this._height && this._setHeight(this._height, this._texture.orig.height), this.onViewUpdate()); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "visualBounds", {
        get: function () { return o.B(this._visualBounds, this._anchor, this._texture), this._visualBounds; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "sourceBounds", {
        get: function () { return o.U("8.6.1", "Sprite.sourceBounds is deprecated, use visualBounds instead."), this.visualBounds; },
        enumerable: false,
        configurable: true
    });
    e.prototype.updateBounds = function () { var e = this._anchor, t = this._texture, n = this._bounds, _a = t.orig, r = _a.width, i = _a.height; n.minX = -e._x * r, n.maxX = n.minX + r, n.minY = -e._y * i, n.maxY = n.minY + i; };
    e.prototype.destroy = function (e) {
        if (e === void 0) { e = !1; }
        if (_super.prototype.destroy.call(this, e), typeof e == "boolean" ? e : e != null && e.texture) {
            var t_2 = typeof e == "boolean" ? e : e == null ? void 0 : e.textureSource;
            this._texture.destroy(t_2);
        }
        this._texture = null, this._visualBounds = null, this._bounds = null, this._anchor = null;
    };
    Object.defineProperty(e.prototype, "anchor", {
        get: function () { return this._anchor; },
        set: function (e) { typeof e == "number" ? this._anchor.set(e) : this._anchor.copyFrom(e); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "width", {
        get: function () { return Math.abs(this.scale.x) * this._texture.orig.width; },
        set: function (e) { this._setWidth(e, this._texture.orig.width), this._width = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "height", {
        get: function () { return Math.abs(this.scale.y) * this._texture.orig.height; },
        set: function (e) { this._setHeight(e, this._texture.orig.height), this._height = e; },
        enumerable: false,
        configurable: true
    });
    e.prototype.getSize = function (e) { return e || (e = {}), e.width = Math.abs(this.scale.x) * this._texture.orig.width, e.height = Math.abs(this.scale.y) * this._texture.orig.height, e; };
    e.prototype.setSize = function (e, t) { if (typeof e == "object") {
        var n;
        t = (n = e.height) == null ? e.width : n, e = e.width;
    }
    else
        t != null || (t = e); e !== void 0 && this._setWidth(e, this._texture.orig.width), t !== void 0 && this._setHeight(t, this._texture.orig.height); };
    return e;
}(f)); })))(); }
var _, v;
function y() { return (y = e.n((function () { a._(), s.Ct(), s._t(), _ = (function () {
    function e(e, t) {
        this.linkedSheets = [];
        var n = e;
        (e == null ? void 0 : e.source) instanceof s.St && (n = { texture: e, data: t });
        var r = n.texture, i = n.data, _a = n.cachePrefix, a = _a === void 0 ? "" : _a;
        this.cachePrefix = a, this._texture = r instanceof s.gt ? r : null, this.textureSource = r.source, this.textures = {}, this.animations = {}, this.data = i;
        var o = parseFloat(i.meta.scale);
        o ? (this.resolution = o, r.source.resolution = this.resolution) : this.resolution = r.source._resolution, this._frames = this.data.frames, this._frameKeys = Object.keys(this._frames), this._batchIndex = 0, this._callback = null;
    }
    e.prototype.parse = function () {
        var _this = this;
        return new Promise(function (t) { _this._callback = t, _this._batchIndex = 0, _this._frameKeys.length <= e.BATCH_SIZE ? (_this._processFrames(0), _this._processAnimations(), _this._parseComplete()) : _this._nextBatch(); });
    };
    e.prototype.parseSync = function () { return this._processFrames(0, !0), this._processAnimations(), this.textures; };
    e.prototype._processFrames = function (t, n) {
        if (n === void 0) { n = !1; }
        var r = t, i = n ? 1 / 0 : e.BATCH_SIZE;
        for (; r - t < i && r < this._frameKeys.length;) {
            var e_1 = this._frameKeys[r], t_3 = this._frames[e_1], n_1 = t_3.frame;
            if (n_1) {
                var r_2 = null, i_1 = null, o_1 = t_3.trimmed !== !1 && t_3.sourceSize ? t_3.sourceSize : t_3.frame, c_1 = new a.g(0, 0, Math.floor(o_1.w) / this.resolution, Math.floor(o_1.h) / this.resolution);
                r_2 = t_3.rotated ? new a.g(Math.floor(n_1.x) / this.resolution, Math.floor(n_1.y) / this.resolution, Math.floor(n_1.h) / this.resolution, Math.floor(n_1.w) / this.resolution) : new a.g(Math.floor(n_1.x) / this.resolution, Math.floor(n_1.y) / this.resolution, Math.floor(n_1.w) / this.resolution, Math.floor(n_1.h) / this.resolution), t_3.trimmed !== !1 && t_3.spriteSourceSize && (i_1 = new a.g(Math.floor(t_3.spriteSourceSize.x) / this.resolution, Math.floor(t_3.spriteSourceSize.y) / this.resolution, Math.floor(n_1.w) / this.resolution, Math.floor(n_1.h) / this.resolution)), this.textures[e_1] = new s.gt({ source: this.textureSource, frame: r_2, orig: c_1, trim: i_1, rotate: t_3.rotated ? 2 : 0, defaultAnchor: t_3.anchor, defaultBorders: t_3.borders, label: e_1.toString() });
            }
            r++;
        }
    };
    e.prototype._processAnimations = function () { var e = this.data.animations || {}; for (var t_4 in e) {
        this.animations[t_4] = [];
        for (var n_2 = 0; n_2 < e[t_4].length; n_2++) {
            var r_3 = e[t_4][n_2];
            this.animations[t_4].push(this.textures[r_3]);
        }
    } };
    e.prototype._parseComplete = function () { var e = this._callback; this._callback = null, this._batchIndex = 0, e.call(this, this.textures); };
    e.prototype._nextBatch = function () {
        var _this = this;
        this._processFrames(this._batchIndex * e.BATCH_SIZE), this._batchIndex++, setTimeout(function () { _this._batchIndex * e.BATCH_SIZE < _this._frameKeys.length ? _this._nextBatch() : (_this._processAnimations(), _this._parseComplete()); }, 0);
    };
    e.prototype.destroy = function (e) {
        if (e === void 0) { e = !1; }
        for (var e_2 in this.textures)
            this.textures[e_2].destroy();
        if (this._frames = null, this._frameKeys = null, this.data = null, this.textures = null, e) {
            var t;
            (t = this._texture) == null || t.destroy(), this.textureSource.destroy();
        }
        this._texture = null, this.textureSource = null, this.linkedSheets = [];
    };
    return e;
}()), _.BATCH_SIZE = 1e3, v = _; })))(); }
function b(e, t, n) { var r = {}; if (e.forEach(function (e) { r[e] = t; }), Object.keys(t.textures).forEach(function (e) { r["".concat(t.cachePrefix).concat(e)] = t.textures[e]; }), !n) {
    var n_3 = o.w.dirname(e[0]);
    t.linkedSheets.forEach(function (e, i) { var a = b(["".concat(n_3, "/").concat(t.data.meta.related_multi_packs[i])], e, !0); Object.assign(r, a); });
} return r; }
var x, S;
function C() { return (C = e.n((function () { i.A(), i.O(), i.E(), i.q(), s._t(), o.C(), y(), x = ["jpg", "png", "jpeg", "avif", "webp", "basis", "etc2", "bc7", "bc6h", "bc5", "bc4", "bc3", "bc2", "bc1", "eac", "astc"], S = { extension: i.G.Asset, cache: { test: function (e) { return e instanceof v; }, getCacheableAssets: function (e, t) { return b(e, t, !1); } }, resolver: { extension: { type: i.G.ResolveParser, name: "resolveSpritesheet" }, test: function (e) { var t = e.split("?")[0].split("."), n = t.pop(), r = t.pop(); return n === "json" && x.includes(r); }, parse: function (e) { var t, n; var r = e.split("."); return { resolution: parseFloat((t = (n = i.D.RETINA_PREFIX.exec(e)) == null ? void 0 : n[1]) == null ? "1" : t), format: r[r.length - 2], src: e }; } }, loader: { name: "spritesheetLoader", id: "spritesheet", extension: { type: i.G.LoadParser, priority: i.k.Normal, name: "spritesheetLoader" }, testParse: function (e, t) {
            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2, o.w.extname(t.src).toLowerCase() === ".json" && !!e.frames];
            }); });
        }, parse: function (e, t, n) {
            return __awaiter(this, void 0, void 0, function () { var r, a, _a, c, l, u, d, f, p, r_4, m, h, e_3, _i, h_1, r_5, g, a_1, r_6; return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = (r = t == null ? void 0 : t.data) == null ? {} : r, c = _a.texture, l = _a.imageFilename, u = _a.textureOptions, d = _a.cachePrefix, f = o.w.dirname(t.src);
                        f && f.lastIndexOf("/") !== f.length - 1 && (f += "/");
                        if (!(c instanceof s.gt)) return [3, 1];
                        p = c;
                        return [3, 3];
                    case 1:
                        r_4 = i.T(f + (l == null ? e.meta.image : l), t.src);
                        return [4, n.load([{ src: r_4, data: u }])];
                    case 2:
                        p = (_b.sent())[r_4];
                        _b.label = 3;
                    case 3:
                        m = new v({ texture: p.source, data: e, cachePrefix: d });
                        return [4, m.parse()];
                    case 4:
                        _b.sent();
                        h = e == null || (a = e.meta) == null ? void 0 : a.related_multi_packs;
                        if (!Array.isArray(h)) return [3, 6];
                        e_3 = [];
                        for (_i = 0, h_1 = h; _i < h_1.length; _i++) {
                            r_5 = h_1[_i];
                            if (typeof r_5 != "string")
                                continue;
                            a_1 = f + r_5;
                            (g = t.data) != null && g.ignoreMultiPack || (a_1 = i.T(a_1, t.src), e_3.push(n.load({ src: a_1, data: { textureOptions: u, ignoreMultiPack: !0 } })));
                        }
                        return [4, Promise.all(e_3)];
                    case 5:
                        r_6 = _b.sent();
                        m.linkedSheets = r_6, r_6.forEach(function (e) { e.linkedSheets = [m].concat(m.linkedSheets.filter(function (t) { return t !== e; })); });
                        _b.label = 6;
                    case 6: return [2, m];
                }
            }); });
        }, unload: function (e, t, n) {
            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, n.unload(e.textureSource._sourceOrigin)];
                    case 1:
                        _a.sent(), e.destroy(!1);
                        return [2];
                }
            }); });
        } } }; })))(); }
function w() { return (w = e.n((function () { i.q(), C(), i.K.add(S); })))(); }
function T(e, t, n, r, i, a) {
    if (i === void 0) { i = !1; }
    var o = E;
    o.minX = 0, o.minY = 0, o.maxX = e.width / r | 0, o.maxY = e.height / r | 0;
    var c = s.ft.getOptimalTexture({ width: o.width, height: o.height, resolution: r, autoGenerateMipmaps: i, scaleMode: a });
    return c.source.uploadMethodId = "image", c.source.resource = e, c.source.alphaMode = "premultiply-alpha-on-upload", c.frame.width = t / r, c.frame.height = n / r, c.source.emit("update", c.source), c.updateUvs(), c;
}
var E;
function D() { return (D = e.n((function () { s.pt(), c.M(), E = new c.j; })))(); }
var O, k;
function A() { return (A = e.n((function () { s.N(), s.F(), s.j(), o.W(), n.br(), O = (function (_super) {
    __extends(e, _super);
    function e() {
        var t = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            t[_i] = arguments[_i];
        }
        var _this = this;
        var r;
        var i = (r = t[0]) == null ? {} : r;
        i instanceof Float32Array && (o.U(o.G, "use new MeshGeometry({ positions, uvs, indices }) instead"), i = { positions: i, uvs: t[1], indices: t[2] }), i = n.yr(n.yr({}, e.defaultOptions), i);
        var a = i.positions || new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), c = i.uvs;
        c || (c = i.positions ? new Float32Array(a.length) : new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]));
        var l = i.indices || new Uint32Array([0, 1, 2, 0, 2, 3]), u = i.shrinkBuffersToFit, d = new s.M({ data: a, label: "attribute-mesh-positions", shrinkToFit: u, usage: s.P.VERTEX | s.P.COPY_DST }), f = new s.M({ data: c, label: "attribute-mesh-uvs", shrinkToFit: u, usage: s.P.VERTEX | s.P.COPY_DST }), p = new s.M({ data: l, label: "index-mesh-buffer", shrinkToFit: u, usage: s.P.INDEX | s.P.COPY_DST });
        _this = _super.call(this, { attributes: { aPosition: { buffer: d, format: "float32x2", stride: 8, offset: 0 }, aUV: { buffer: f, format: "float32x2", stride: 8, offset: 0 } }, indexBuffer: p, topology: i.topology }) || this, _this.batchMode = "auto";
        return _this;
    }
    Object.defineProperty(e.prototype, "positions", {
        get: function () { return this.attributes.aPosition.buffer.data; },
        set: function (e) { this.attributes.aPosition.buffer.data = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "uvs", {
        get: function () { return this.attributes.aUV.buffer.data; },
        set: function (e) { this.attributes.aUV.buffer.data = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "indices", {
        get: function () { return this.indexBuffer.data; },
        set: function (e) { this.indexBuffer.data = e; },
        enumerable: false,
        configurable: true
    });
    return e;
}(s.A)), O.defaultOptions = { topology: "triangle-list", shrinkBuffersToFit: !1 }, k = O; })))(); }
var j;
function M() { return (M = e.n((function () { j = (function () {
    function j() {
        this.batcherName = "default", this.packAsQuad = !1, this.indexOffset = 0, this.attributeOffset = 0, this.roundPixels = 0, this._batcher = null, this._batch = null, this._textureMatrixUpdateId = -1, this._uvUpdateId = -1;
    }
    Object.defineProperty(j.prototype, "blendMode", {
        get: function () { return this.renderable.groupBlendMode; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(j.prototype, "topology", {
        get: function () { return this._topology || this.geometry.topology; },
        set: function (e) { this._topology = e; },
        enumerable: false,
        configurable: true
    });
    j.prototype.reset = function () { this.renderable = null, this.texture = null, this._batcher = null, this._batch = null, this.geometry = null, this._uvUpdateId = -1, this._textureMatrixUpdateId = -1; };
    j.prototype.setTexture = function (e) { this.texture !== e && (this.texture = e, this._textureMatrixUpdateId = -1); };
    Object.defineProperty(j.prototype, "uvs", {
        get: function () { var e = this.geometry.getBuffer("aUV"), t = e.data, n = t, r = this.texture.textureMatrix; return r.isSimple || (n = this._transformedUvs, (this._textureMatrixUpdateId !== r._updateID || this._uvUpdateId !== e._updateID) && ((!n || n.length < t.length) && (n = this._transformedUvs = new Float32Array(t.length)), this._textureMatrixUpdateId = r._updateID, this._uvUpdateId = e._updateID, r.multiplyUvs(t, n))), n; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(j.prototype, "positions", {
        get: function () { return this.geometry.positions; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(j.prototype, "indices", {
        get: function () { return this.geometry.indices; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(j.prototype, "color", {
        get: function () { return this.renderable.groupColorAlpha; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(j.prototype, "groupTransform", {
        get: function () { return this.renderable.groupTransform; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(j.prototype, "attributeSize", {
        get: function () { return this.geometry.positions.length / 2; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(j.prototype, "indexSize", {
        get: function () { return this.geometry.indices.length; },
        enumerable: false,
        configurable: true
    });
    return j;
}()); })))(); }
var N, P;
function ee() { return (ee = e.n((function () { i.q(), a.x(), l.A(), s.Q(), s.L(), M(), N = (function () {
    function N() {
    }
    N.prototype.destroy = function () { };
    return N;
}()), P = (function () {
    function P(e, t) {
        this.localUniforms = new s.Z({ uTransformMatrix: { value: new a.b, type: "mat3x3<f32>" }, uColor: { value: new Float32Array([1, 1, 1, 1]), type: "vec4<f32>" }, uRound: { value: 0, type: "f32" } }), this.localUniformsBindGroup = new l.k({ 0: this.localUniforms }), this.renderer = e, this._adaptor = t, this._adaptor.init();
    }
    P.prototype.validateRenderable = function (e) { var t = this._getMeshData(e), n = t.batched, r = e.batched; if (t.batched = r, n !== r)
        return !0; if (r) {
        var n_4 = e._geometry;
        if (n_4.indices.length !== t.indexSize || n_4.positions.length !== t.vertexSize)
            return t.indexSize = n_4.indices.length, t.vertexSize = n_4.positions.length, !0;
        var r_7 = this._getBatchableMesh(e);
        return r_7.texture.uid !== e._texture.uid && (r_7._textureMatrixUpdateId = -1), !r_7._batcher.checkAndUpdateTexture(r_7, e._texture);
    } return !1; };
    P.prototype.addRenderable = function (e, t) { var n = this.renderer.renderPipes.batch, r = this._getMeshData(e); if (e.didViewUpdate) {
        var i, a;
        r.indexSize = (i = e._geometry.indices) == null ? void 0 : i.length, r.vertexSize = (a = e._geometry.positions) == null ? void 0 : a.length;
    } if (r.batched) {
        var r_8 = this._getBatchableMesh(e);
        r_8.setTexture(e._texture), r_8.geometry = e._geometry, n.addToBatch(r_8, t);
    }
    else
        n.break(t), t.add(e); };
    P.prototype.updateRenderable = function (e) { if (e.batched) {
        var t_5 = this._getBatchableMesh(e);
        t_5.setTexture(e._texture), t_5.geometry = e._geometry, t_5._batcher.updateElement(t_5);
    } };
    P.prototype.execute = function (e) { if (!e.isRenderable)
        return; e.state.blend && (e.state.blendMode = s.I(e.groupBlendMode, e.texture._source)); var t = this.localUniforms; t.uniforms.uTransformMatrix = e.groupTransform, t.uniforms.uRound = this.renderer._roundPixels | e._roundPixels, t.update(), c.u(e.groupColorAlpha, t.uniforms.uColor, 0), this._adaptor.execute(this, e); };
    P.prototype._getMeshData = function (e) { var t, n; return (t = e._gpuData)[n = this.renderer.uid] || (t[n] = new N), e._gpuData[this.renderer.uid].meshData || this._initMeshData(e); };
    P.prototype._initMeshData = function (e) { return e._gpuData[this.renderer.uid].meshData = { batched: e.batched, indexSize: 0, vertexSize: 0 }, e._gpuData[this.renderer.uid].meshData; };
    P.prototype._getBatchableMesh = function (e) { var t, n; return (t = e._gpuData)[n = this.renderer.uid] || (t[n] = new N), e._gpuData[this.renderer.uid].batchableMesh || this._initBatchableMesh(e); };
    P.prototype._initBatchableMesh = function (e) { var t = new j; return t.renderable = e, t.setTexture(e._texture), t.transform = e.groupTransform, t.roundPixels = this.renderer._roundPixels | e._roundPixels, e._gpuData[this.renderer.uid].batchableMesh = t, t; };
    P.prototype.destroy = function () { this.localUniforms = null, this.localUniformsBindGroup = null, this._adaptor.destroy(), this._adaptor = null, this.renderer = null; };
    return P;
}()), P.extension = { type: [i.G.WebGLPipes, i.G.WebGPUPipes], name: "mesh" }; })))(); }
function te() { return (te = e.n((function () { i.q(), ee(), i.K.add(P); })))(); }
var F, I;
function ne() { return (ne = e.n((function () { s.j(), s.K(), s._t(), o.W(), p(), A(), te(), r.o(), n.br(), F = ["geometry", "shader", "texture", "roundPixels", "state"], I = (function (_super) {
    __extends(I, _super);
    function I() {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        var _this = this;
        var t;
        var i = e[0];
        i instanceof s.A && (o.U(o.G, "Mesh: use new Mesh({ geometry, shader }) instead"), i = { geometry: i, shader: e[1] }, e[3] && (o.U(o.G, "Mesh: drawMode argument has been removed, use geometry.topology instead"), i.geometry.topology = e[3]));
        var a = i.geometry, c = i.shader, l = i.texture, u = i.roundPixels, d = i.state, f = r.a(i, F);
        _this = _super.call(this, n.yr({ label: "Mesh" }, f)) || this, _this.renderPipeId = "mesh", _this._shader = null, _this.allowChildren = !1, _this.shader = c == null ? null : c, _this.texture = (t = l == null ? c == null ? void 0 : c.texture : l) == null ? s.gt.WHITE : t, _this.state = d == null ? s.G.for2d() : d, _this._geometry = a, _this._geometry.on("update", _this.onViewUpdate, _this), _this.roundPixels = u != null && u;
        return _this;
    }
    Object.defineProperty(I.prototype, "material", {
        get: function () { return o.U(o.G, "mesh.material property has been removed, use mesh.shader instead"), this._shader; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(I.prototype, "shader", {
        get: function () { return this._shader; },
        set: function (e) { this._shader !== e && (this._shader = e, this.onViewUpdate()); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(I.prototype, "geometry", {
        get: function () { return this._geometry; },
        set: function (e) { var t; this._geometry !== e && ((t = this._geometry) == null || t.off("update", this.onViewUpdate, this), e.on("update", this.onViewUpdate, this), this._geometry = e, this.onViewUpdate()); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(I.prototype, "texture", {
        get: function () { return this._texture; },
        set: function (e) { e || (e = s.gt.EMPTY); var t = this._texture; t !== e && (t && t.dynamic && t.off("update", this.onViewUpdate, this), e.dynamic && e.on("update", this.onViewUpdate, this), this.shader && (this.shader.texture = e), this._texture = e, this.onViewUpdate()); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(I.prototype, "batched", {
        get: function () { return this._shader || this.state.data & 12 ? !1 : this._geometry instanceof k ? this._geometry.batchMode === "auto" ? this._geometry.positions.length / 2 <= 100 : this._geometry.batchMode === "batch" : !1; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(I.prototype, "bounds", {
        get: function () { return this._geometry.bounds; },
        enumerable: false,
        configurable: true
    });
    I.prototype.updateBounds = function () { this._bounds = this._geometry.bounds; };
    I.prototype.containsPoint = function (e) { var t = e.x, n = e.y; if (!this.bounds.containsPoint(t, n))
        return !1; var r = this.geometry.getBuffer("aPosition").data, i = this.geometry.topology === "triangle-strip" ? 3 : 1; if (this.geometry.getIndex()) {
        var e_4 = this.geometry.getIndex().data, o_2 = e_4.length;
        for (var s_1 = 0; s_1 + 2 < o_2; s_1 += i) {
            var i_2 = e_4[s_1] * 2, o_3 = e_4[s_1 + 1] * 2, c_2 = e_4[s_1 + 2] * 2;
            if (a.n(t, n, r[i_2], r[i_2 + 1], r[o_3], r[o_3 + 1], r[c_2], r[c_2 + 1]))
                return !0;
        }
    }
    else {
        var e_5 = r.length / 2;
        for (var o_4 = 0; o_4 + 2 < e_5; o_4 += i) {
            var e_6 = o_4 * 2, i_3 = (o_4 + 1) * 2, s_2 = (o_4 + 2) * 2;
            if (a.n(t, n, r[e_6], r[e_6 + 1], r[i_3], r[i_3 + 1], r[s_2], r[s_2 + 1]))
                return !0;
        }
    } return !1; };
    I.prototype.destroy = function (e) { var t; if (_super.prototype.destroy.call(this, e), typeof e == "boolean" ? e : e != null && e.texture) {
        var t_6 = typeof e == "boolean" ? e : e == null ? void 0 : e.textureSource;
        this._texture.destroy(t_6);
    } (t = this._geometry) == null || t.off("update", this.onViewUpdate, this), this._texture = null, this._geometry = null, this._shader = null; };
    return I;
}(f)); })))(); }
function re(e, t) { var n; var r = (n = e[0]) == null ? {} : n; return (typeof r == "string" || e[1]) && (o.U(o.G, "use new ".concat(t, "({ text: \"hi!\", style }) instead")), r = { text: r, style: e[1] }), r; }
var ie, ae;
function oe() { return (oe = e.n((function () { a.O(), o.W(), p(), r.o(), n.br(), ie = ["text", "resolution", "style", "anchor", "width", "height", "roundPixels"], ae = (function (_super) {
    __extends(ae, _super);
    function ae(e, t) {
        var _this = this;
        var i = e.text, o = e.resolution, s = e.style, c = e.anchor, l = e.width, u = e.height, d = e.roundPixels, f = r.a(e, ie);
        _this = _super.call(this, n.yr({}, f)) || this, _this.batched = !0, _this._resolution = null, _this._autoResolution = !0, _this._didTextUpdate = !0, _this._styleClass = t, _this.text = i == null ? "" : i, _this.style = s, _this.resolution = o == null ? null : o, _this.allowChildren = !1, _this._anchor = new a.D({ _onUpdate: function () { _this.onViewUpdate(); } }), c && (_this.anchor = c), _this.roundPixels = d != null && d, l !== void 0 && (_this.width = l), u !== void 0 && (_this.height = u);
        return _this;
    }
    Object.defineProperty(ae.prototype, "anchor", {
        get: function () { return this._anchor; },
        set: function (e) { typeof e == "number" ? this._anchor.set(e) : this._anchor.copyFrom(e); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ae.prototype, "text", {
        get: function () { return this._text; },
        set: function (e) { e = e.toString(), this._text !== e && (this._text = e, this.onViewUpdate()); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ae.prototype, "resolution", {
        get: function () { return this._resolution; },
        set: function (e) { this._autoResolution = e === null, this._resolution = e, this.onViewUpdate(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ae.prototype, "style", {
        get: function () { return this._style; },
        set: function (e) { var t; e || (e = {}), (t = this._style) == null || t.off("update", this.onViewUpdate, this), this._style = e instanceof this._styleClass ? e : new this._styleClass(e), this._style.on("update", this.onViewUpdate, this), this.onViewUpdate(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ae.prototype, "width", {
        get: function () { return Math.abs(this.scale.x) * this.bounds.width; },
        set: function (e) { this._setWidth(e, this.bounds.width); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ae.prototype, "height", {
        get: function () { return Math.abs(this.scale.y) * this.bounds.height; },
        set: function (e) { this._setHeight(e, this.bounds.height); },
        enumerable: false,
        configurable: true
    });
    ae.prototype.getSize = function (e) { return e || (e = {}), e.width = Math.abs(this.scale.x) * this.bounds.width, e.height = Math.abs(this.scale.y) * this.bounds.height, e; };
    ae.prototype.setSize = function (e, t) { if (typeof e == "object") {
        var n;
        t = (n = e.height) == null ? e.width : n, e = e.width;
    }
    else
        t != null || (t = e); e !== void 0 && this._setWidth(e, this.bounds.width), t !== void 0 && this._setHeight(t, this.bounds.height); };
    ae.prototype.containsPoint = function (e) { var t = this.bounds.width, n = this.bounds.height, r = -t * this.anchor.x, i = 0; return e.x >= r && e.x <= r + t && (i = -n * this.anchor.y, e.y >= i && e.y <= i + n); };
    ae.prototype.onViewUpdate = function () { this.didViewUpdate || (this._didTextUpdate = !0), _super.prototype.onViewUpdate.call(this); };
    ae.prototype.destroy = function (e) {
        if (e === void 0) { e = !1; }
        var t;
        (t = this._style) == null || t.off("update", this.onViewUpdate, this), _super.prototype.destroy.call(this, e), this.owner = null, this._bounds = null, this._anchor = null, (typeof e == "boolean" ? e : e != null && e.style) && this._style.destroy(e), this._style = null, this._text = null;
    };
    Object.defineProperty(ae.prototype, "styleKey", {
        get: function () { return "".concat(this._text, ":").concat(this._style.styleKey, ":").concat(this._resolution); },
        enumerable: false,
        configurable: true
    });
    return ae;
}(f)); })))(); }
function se(e) { return !!e.tagStyles && Object.keys(e.tagStyles).length > 0; }
function L(e) { return e.includes("<"); }
function R(e, t) { return e.clone().assign(t); }
function z(e, t) { var n = [], r = t.tagStyles; if (!se(t) || !L(e))
    return n.push({ text: e, style: t }), n; var i = [t], a = [], o = "", s = 0; for (; s < e.length;) {
    var t_7 = e[s];
    if (t_7 === "<") {
        var c_3 = e.indexOf(">", s);
        if (c_3 === -1) {
            o += t_7, s++;
            continue;
        }
        var l_1 = e.indexOf("<", s + 1);
        if (l_1 !== -1 && l_1 < c_3) {
            o += t_7, s++;
            continue;
        }
        var u_1 = e.slice(s + 1, c_3);
        if (u_1.startsWith("/")) {
            var t_8 = u_1.slice(1).trim();
            if (a.length > 0 && a[a.length - 1] === t_8) {
                o.length > 0 && (n.push({ text: o, style: i[i.length - 1] }), o = ""), i.pop(), a.pop(), s = c_3 + 1;
                continue;
            }
            o += e.slice(s, c_3 + 1), s = c_3 + 1;
            continue;
        }
        {
            var t_9 = u_1.trim();
            if (r[t_9]) {
                o.length > 0 && (n.push({ text: o, style: i[i.length - 1] }), o = "");
                var e_7 = i[i.length - 1], l_2 = R(e_7, r[t_9]);
                i.push(l_2), a.push(t_9), s = c_3 + 1;
                continue;
            }
            o += e.slice(s, c_3 + 1), s = c_3 + 1;
            continue;
        }
    }
    o += t_7, s++;
} return o.length > 0 && n.push({ text: o, style: i[i.length - 1] }), n; }
function B(e) { return typeof e == "string" && ce.has(e.charCodeAt(0)); }
function V(e, t) { return typeof e == "string" && ue.has(e.charCodeAt(0)); }
function H(e) { return typeof e == "string" && pe.has(e.charCodeAt(0)); }
function U(e) { return e === "normal" || e === "pre-line"; }
function W(e) { return e === "normal"; }
function G(e) { if (typeof e != "string")
    return ""; var t = e.length - 1; for (; t >= 0 && V(e[t]);)
    t--; return t < e.length - 1 ? e.slice(0, t + 1) : e; }
function K(e) {
    var t = [], n = [];
    if (typeof e != "string")
        return t;
    for (var r_9 = 0; r_9 < e.length; r_9++) {
        var i_4 = e[r_9], a_2 = e[r_9 + 1];
        V(i_4, a_2) || B(i_4) ? (n.length > 0 && (t.push(n.join("")), n.length = 0), i_4 === "\r" && a_2 === "\n" ? (t.push("\r\n"), r_9++) : t.push(i_4)) : (n.push(i_4), H(i_4) && a_2 && !V(a_2) && !B(a_2) && (t.push(n.join("")), n.length = 0));
    }
    return n.length > 0 && t.push(n.join("")), t;
}
function q(e, t, n, r) { var i = n(e), a = []; for (var n_5 = 0; n_5 < i.length; n_5++) {
    var o_5 = i[n_5], s_3 = o_5, c_4 = 1;
    for (; i[n_5 + c_4];) {
        var a_3 = i[n_5 + c_4];
        if (!r(s_3, a_3, e, n_5, t))
            o_5 += a_3, s_3 = a_3, c_4++;
        else
            break;
    }
    n_5 += c_4 - 1, a.push(o_5);
} return a; }
var J, ce, le, ue, de, fe, pe, me, he;
function ge() { return (ge = e.n((function () { J = [10, 13], ce = new Set(J), le = [9, 32, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8200, 8201, 8202, 8287, 12288], ue = new Set(le), de = [9, 32], new Set(de), fe = [45, 8208, 8211, 8212, 173], pe = new Set(fe), me = /(\r\n|\r|\n)/, he = /(?:\r\n|\r|\n)/; })))(); }
function _e(e, t, n, r, i, a, o, s, c) {
    var l;
    var u = z(e, t);
    if (W(t.whiteSpace))
        for (var e_9 = 0; e_9 < u.length; e_9++) {
            var t_10 = u[e_9];
            u[e_9] = { text: t_10.text.replace(be, " "), style: t_10.style };
        }
    var d = [], f = [];
    for (var _i = 0, u_2 = u; _i < u_2.length; _i++) {
        var e_10 = u_2[_i];
        var t_11 = e_10.text.split(me);
        for (var n_6 = 0; n_6 < t_11.length; n_6++) {
            var r_10 = t_11[n_6];
            r_10 === "\r\n" || r_10 === "\r" || r_10 === "\n" ? (d.push(f), f = []) : r_10.length > 0 && f.push({ text: r_10, style: e_10.style });
        }
    }
    (f.length > 0 || d.length === 0) && d.push(f);
    var p = n ? ve(d, t, r, a, s, c) : d, m = [], h = [], g = [], _ = [], v = [], y = 0, b = t._fontString, x = o(b);
    x.fontSize === 0 && (x.fontSize = t.fontSize, x.ascent = t.fontSize);
    var S = "", C = !!t.dropShadow, w = ((l = t._stroke) == null ? void 0 : l.width) || 0;
    for (var _a = 0, p_1 = p; _a < p_1.length; _a++) {
        var e_11 = p_1[_a];
        var n_7 = 0, a_4 = x.ascent, s_4 = x.descent, c_5 = "";
        for (var _b = 0, e_8 = e_11; _b < e_8.length; _b++) {
            var t_12 = e_8[_b];
            var T;
            var e_12 = t_12.style._fontString, l_3 = o(e_12);
            e_12 !== S && (r.font = e_12, S = e_12);
            var u_3 = i(t_12.text, t_12.style.letterSpacing, r);
            n_7 += u_3, a_4 = Math.max(a_4, l_3.ascent), s_4 = Math.max(s_4, l_3.descent), c_5 += t_12.text;
            var d_1 = ((T = t_12.style._stroke) == null ? void 0 : T.width) || 0;
            d_1 > w && (w = d_1), !C && t_12.style.dropShadow && (C = !0);
        }
        e_11.length === 0 && (a_4 = x.ascent, s_4 = x.descent), m.push(n_7), h.push(a_4), g.push(s_4), v.push(c_5);
        var l_4 = t.lineHeight || a_4 + s_4;
        _.push(l_4 + t.leading), y = Math.max(y, n_7);
    }
    var E = w, D = y + E + (t.dropShadow ? t.dropShadow.distance : 0), O = 0;
    for (var e_13 = 0; e_13 < _.length; e_13++)
        O += _[e_13];
    return O = Math.max(O, _[0] + E), { width: D, height: O + (t.dropShadow ? t.dropShadow.distance : 0), lines: v, lineWidths: m, lineHeight: (t.lineHeight || x.fontSize) + t.leading, maxLineWidth: y, fontProperties: x, runsByLine: p, lineAscents: h, lineDescents: g, lineHeights: _, hasDropShadow: C };
}
function ve(e, t, n, r, i, a) { var o = t.letterSpacing, s = t.whiteSpace, c = t.wordWrapWidth, l = t.breakWords, u = U(s), d = c + o, f = {}, p = "", m = function (e, t) { var i = "".concat(e, "|").concat(t.styleKey), a = f[i]; if (a === void 0) {
    var o_6 = t._fontString;
    o_6 !== p && (n.font = o_6, p = o_6), a = r(e, t.letterSpacing, n) + t.letterSpacing, f[i] = a;
} return a; }, h = []; var _loop_1 = function (t_13) {
    var e_15 = ye(t_13), n_8 = h.length, r_11 = function (t) { var n = 0, r = t; do {
        var _a = e_15[r], t_14 = _a.token, i_5 = _a.style;
        n += m(t_14, i_5), r++;
    } while (r < e_15.length && e_15[r].continuesFromPrevious); return n; }, o_8 = function (t) { var n = [], r = t; do
        n.push({ token: e_15[r].token, style: e_15[r].style }), r++;
    while (r < e_15.length && e_15[r].continuesFromPrevious); return n; }, s_5 = [], c_6 = 0, f_1 = !u, p_2 = null, y_1 = function () { p_2 && p_2.text.length > 0 && s_5.push(p_2), p_2 = null; }, b_1 = function () { if (y_1(), s_5.length > 0) {
        var e_16 = s_5[s_5.length - 1];
        e_16.text = G(e_16.text), e_16.text.length === 0 && s_5.pop();
    } h.push(s_5), s_5 = [], c_6 = 0, f_1 = !1; };
    for (var t_15 = 0; t_15 < e_15.length; t_15++) {
        var _a = e_15[t_15], n_9 = _a.token, x_1 = _a.style, S_1 = _a.continuesFromPrevious, C_1 = m(n_9, x_1);
        if (u) {
            var e_17 = V(n_9), t_16 = (g = (_ = p_2 == null ? void 0 : p_2.text[p_2.text.length - 1]) == null ? (v = s_5[s_5.length - 1]) == null ? void 0 : v.text.slice(-1) : _) == null ? "" : g, r_12 = t_16 ? V(t_16) : !1;
            if (e_17 && r_12)
                continue;
        }
        var w_1 = !S_1, T_1 = w_1 ? r_11(t_15) : C_1;
        if (T_1 > d && w_1) {
            if (c_6 > 0 && b_1(), l) {
                var e_18 = o_8(t_15);
                for (var t_17 = 0; t_17 < e_18.length; t_17++) {
                    var n_10 = e_18[t_17].token, r_13 = e_18[t_17].style, o_9 = q(n_10, l, a, i);
                    for (var _b = 0, o_7 = o_9; _b < o_7.length; _b++) {
                        var e_19 = o_7[_b];
                        var t_18 = m(e_19, r_13);
                        t_18 + c_6 > d && b_1(), !p_2 || p_2.style !== r_13 ? (y_1(), p_2 = { text: e_19, style: r_13 }) : p_2.text += e_19, c_6 += t_18;
                    }
                }
                t_15 += e_18.length - 1;
            }
            else {
                var e_20 = o_8(t_15);
                y_1(), h.push(e_20.map(function (e) { return ({ text: e.token, style: e.style }); })), f_1 = !1, t_15 += e_20.length - 1;
            }
        }
        else if (T_1 + c_6 > d && w_1) {
            if (V(n_9)) {
                f_1 = !1;
                continue;
            }
            b_1(), p_2 = { text: n_9, style: x_1 }, c_6 = C_1;
        }
        else if (S_1 && !l)
            !p_2 || p_2.style !== x_1 ? (y_1(), p_2 = { text: n_9, style: x_1 }) : p_2.text += n_9, c_6 += C_1;
        else {
            var e_21 = V(n_9);
            if (c_6 === 0 && e_21 && !f_1)
                continue;
            !p_2 || p_2.style !== x_1 ? (y_1(), p_2 = { text: n_9, style: x_1 }) : p_2.text += n_9, c_6 += C_1;
        }
    }
    if (y_1(), s_5.length > 0) {
        var e_22 = s_5[s_5.length - 1];
        e_22.text = G(e_22.text), e_22.text.length === 0 && s_5.pop();
    }
    (s_5.length > 0 || h.length === n_8) && h.push(s_5);
}; var g, _, v; for (var _i = 0, e_14 = e; _i < e_14.length; _i++) {
    var t_13 = e_14[_i];
    _loop_1(t_13);
} return h; }
function ye(e) { var t = [], n = !1; for (var _i = 0, e_23 = e; _i < e_23.length; _i++) {
    var r_14 = e_23[_i];
    var e_25 = K(r_14.text), i_6 = !0;
    for (var _a = 0, e_24 = e_25; _a < e_24.length; _a++) {
        var a_5 = e_24[_a];
        var e_26 = V(a_5) || B(a_5), o_10 = i_6 && n && !e_26;
        t.push({ token: a_5, style: r_14.style, continuesFromPrevious: o_10 }), n = !e_26, i_6 = !1;
    }
} return t; }
var be;
function xe() { return (xe = e.n((function () { ge(), be = /\r\n|\r|\n/g; })))(); }
function Se(e, t, n, r, i) { var a = n[e]; return typeof a != "number" && (a = i(e, t, r) + t, n[e] = a), a; }
function Ce(e, t, n, r, i, a, o) {
    var s = n.getContext("2d", we);
    s.font = t._fontString;
    var c = 0, l = "", u = [], d = Object.create(null), f = t.letterSpacing, p = t.whiteSpace, m = U(p), h = W(p), g = !m, _ = t.wordWrapWidth + f, v = K(e);
    for (var e_28 = 0; e_28 < v.length; e_28++) {
        var n_11 = v[e_28];
        if (B(n_11)) {
            if (!h) {
                u.push(G(l)), g = !m, l = "", c = 0;
                continue;
            }
            n_11 = " ";
        }
        if (m) {
            var e_29 = V(n_11), t_19 = V(l[l.length - 1]);
            if (e_29 && t_19)
                continue;
        }
        var p_3 = Se(n_11, f, d, s, r);
        if (p_3 > _) {
            if (l !== "" && (u.push(G(l)), l = "", c = 0), i(n_11, t.breakWords)) {
                var e_30 = q(n_11, t.breakWords, o, a);
                for (var _i = 0, e_27 = e_30; _i < e_27.length; _i++) {
                    var t_20 = e_27[_i];
                    var e_31 = Se(t_20, f, d, s, r);
                    e_31 + c > _ && (u.push(G(l)), g = !1, l = "", c = 0), l += t_20, c += e_31;
                }
            }
            else
                l.length > 0 && (u.push(G(l)), l = "", c = 0), u.push(G(n_11)), g = !1, l = "", c = 0;
        }
        else
            p_3 + c > _ && (g = !1, u.push(G(l)), l = "", c = 0), (l.length > 0 || !V(n_11) || g) && (l += n_11, c += p_3);
    }
    var y = G(l);
    return y.length > 0 && u.push(y), u.join("\n");
}
var we;
function Te() { return (Te = e.n((function () { ge(), we = { willReadFrequently: !0 }; })))(); }
var Ee, Y, X;
function De() { return (De = e.n((function () { t.o(), i.P(), xe(), ge(), Te(), Ee = { willReadFrequently: !0 }, Y = (function () {
    function e(e, t, n, r, i, a, o, s, c, l) {
        this.text = e, this.style = t, this.width = n, this.height = r, this.lines = i, this.lineWidths = a, this.lineHeight = o, this.maxLineWidth = s, this.fontProperties = c, l && (this.runsByLine = l.runsByLine, this.lineAscents = l.lineAscents, this.lineDescents = l.lineDescents, this.lineHeights = l.lineHeights, this.hasDropShadow = l.hasDropShadow);
    }
    Object.defineProperty(e, "experimentalLetterSpacingSupported", {
        get: function () { var t = e._experimentalLetterSpacingSupported; if (t === void 0) {
            var n_12 = i.N.get().getCanvasRenderingContext2D().prototype;
            t = e._experimentalLetterSpacingSupported = "letterSpacing" in n_12 || "textLetterSpacing" in n_12;
        } return t; },
        enumerable: false,
        configurable: true
    });
    e.measureText = function (t, n, r, i) {
        if (t === void 0) { t = " "; }
        if (r === void 0) { r = e._canvas; }
        if (i === void 0) { i = n.wordWrap; }
        var a, o;
        var s = "".concat(t, "-").concat(n.styleKey, "-wordWrap-").concat(i);
        if (e._measurementCache.has(s))
            return e._measurementCache.get(s);
        if (se(n) && L(t)) {
            var r_15 = _e(t, n, i, e._context, e._measureText, e._measureTextAdvance, e.measureFont, e.canBreakChars, e.wordWrapSplit), a_6 = new e(t, n, r_15.width, r_15.height, r_15.lines, r_15.lineWidths, r_15.lineHeight, r_15.maxLineWidth, r_15.fontProperties, { runsByLine: r_15.runsByLine, lineAscents: r_15.lineAscents, lineDescents: r_15.lineDescents, lineHeights: r_15.lineHeights, hasDropShadow: r_15.hasDropShadow });
            return e._measurementCache.set(s, a_6), a_6;
        }
        var c = n._fontString, l = e.measureFont(c);
        l.fontSize === 0 && (l.fontSize = n.fontSize, l.ascent = n.fontSize, l.descent = 0);
        var u = e._context;
        u.font = c;
        var d = (i ? e._wordWrap(t, n, r) : t).split(he), f = Array(d.length), p = 0;
        for (var t_21 = 0; t_21 < d.length; t_21++) {
            var r_16 = e._measureText(d[t_21], n.letterSpacing, u);
            f[t_21] = r_16, p = Math.max(p, r_16);
        }
        var m = (a = (o = n._stroke) == null ? void 0 : o.width) == null ? 0 : a, h = n.lineHeight || l.fontSize, g = e._adjustWidthForStyle(p, n), _ = Math.max(h, l.fontSize + m) + (d.length - 1) * (h + n.leading), v = e._adjustHeightForStyle(_, n), y = new e(t, n, g, v, d, f, h + n.leading, p, l);
        return e._measurementCache.set(s, y), y;
    };
    e._adjustWidthForStyle = function (e, t) { var n; var r = e + (((n = t._stroke) == null ? void 0 : n.width) || 0); return t.dropShadow && (r += t.dropShadow.distance), r; };
    e._adjustHeightForStyle = function (e, t) { var n = e; return t.dropShadow && (n += t.dropShadow.distance), n; };
    e._measureText = function (t, n, r) { var i, a; var _a = e._measureTextCore(t, n, r), o = _a.metricWidth, s = _a.metrics, c = _a.letterSpacingVal, l = -((i = s.actualBoundingBoxLeft) == null ? 0 : i), u = ((a = s.actualBoundingBoxRight) == null ? 0 : a) - l; return s.width > 0 && (u += c), Math.max(o, u); };
    e._measureTextAdvance = function (t, n, r) { return e._measureTextCore(t, n, r).metricWidth; };
    e._measureTextCore = function (t, n, r) { var i = !1; e.experimentalLetterSpacingSupported && (e.experimentalLetterSpacing ? (r.letterSpacing = "".concat(n, "px"), r.textLetterSpacing = "".concat(n, "px"), i = !0) : (r.letterSpacing = "0px", r.textLetterSpacing = "0px")); var a = r.measureText(t), o = a.width, s = 0; return o > 0 && (s = i ? -n : (e.graphemeSegmenter(t).length - 1) * n, o += s), { metricWidth: o, metrics: a, letterSpacingVal: s }; };
    e._wordWrap = function (t, n, r) {
        if (r === void 0) { r = e._canvas; }
        return Ce(t, n, r, e._measureTextAdvance, e.canBreakWords, e.canBreakChars, e.wordWrapSplit);
    };
    e.isBreakingSpace = function (e, t) { return V(e, t); };
    e.canBreakWords = function (e, t) { return t; };
    e.canBreakChars = function (e, t, n, r, i) { return !0; };
    e.wordWrapSplit = function (t) { return e.graphemeSegmenter(t); };
    e.measureFont = function (t) { var n, r; if (e._fonts[t])
        return e._fonts[t]; var i = e._context; i.font = t; var a = i.measureText(e.METRICS_STRING + e.BASELINE_SYMBOL), o = (n = a.actualBoundingBoxAscent) == null ? 0 : n, s = (r = a.actualBoundingBoxDescent) == null ? 0 : r, c = { ascent: o, descent: s, fontSize: o + s }; return e._fonts[t] = c, c; };
    e.clearMetrics = function (t) {
        if (t === void 0) { t = ""; }
        t ? delete e._fonts[t] : e._fonts = {};
    };
    Object.defineProperty(e, "_canvas", {
        get: function () { if (!e.__canvas) {
            var t_22;
            try {
                var n_13 = new OffscreenCanvas(0, 0), r_17 = n_13.getContext("2d", Ee);
                if (r_17 != null && r_17.measureText)
                    return e.__canvas = n_13, n_13;
                t_22 = i.N.get().createCanvas();
            }
            catch (e) {
                t_22 = i.N.get().createCanvas();
            }
            t_22.width = t_22.height = 10, e.__canvas = t_22;
        } return e.__canvas; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e, "_context", {
        get: function () { return e.__context || (e.__context = e._canvas.getContext("2d", Ee)), e.__context; },
        enumerable: false,
        configurable: true
    });
    return e;
}()), Y.METRICS_STRING = "|\u00C9q\u00C5", Y.BASELINE_SYMBOL = "M", Y.BASELINE_MULTIPLIER = 1.4, Y.HEIGHT_MULTIPLIER = 2, Y.graphemeSegmenter = (function () { var e; if (typeof ((e = Intl) == null ? void 0 : e.Segmenter) == "function") {
    var e_32 = new Intl.Segmenter;
    return function (t) { var n = e_32.segment(t), r = [], i = 0; for (var _i = 0, n_14 = n; _i < n_14.length; _i++) {
        var e_33 = n_14[_i];
        r[i++] = e_33.segment;
    } return r; };
} return function (e) { return __spreadArray([], e, true); }; })(), Y.experimentalLetterSpacing = !1, Y._fonts = {}, Y._measurementCache = t.s(1e3), X = Y; })))(); }
function Oe(e) { var t = typeof e.fontSize == "number" ? "".concat(e.fontSize, "px") : e.fontSize, n = e.fontFamily; Array.isArray(e.fontFamily) || (n = e.fontFamily.split(",")); for (var e_34 = n.length - 1; e_34 >= 0; e_34--) {
    var t_23 = n[e_34].trim();
    !/([\"\'])[^\'\"]+\1/.test(t_23) && !ke.includes(t_23) && (t_23 = "\"".concat(t_23, "\"")), n[e_34] = t_23;
} return "".concat(e.fontStyle, " ").concat(e.fontVariant, " ").concat(e.fontWeight, " ").concat(t, " ").concat(n.join(",")); }
var ke;
function Ae() { return (Ae = e.n((function () { ke = ["serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui"]; })))(); }
function je(e, t, n, r, c, u) {
    if (r === void 0) { r = 0; }
    if (c === void 0) { c = 0; }
    if (u === void 0) { u = 0; }
    if (e.texture === s.gt.WHITE && !e.fill) {
        var f;
        return i.z.shared.setValue(e.color).setAlpha((f = e.alpha) == null ? 1 : f).toHexa();
    }
    if (!e.fill) {
        var n_15 = t.createPattern(e.texture.source.resource, "repeat"), r_18 = e.matrix.copyTo(a.b.shared);
        return r_18.scale(e.texture.source.pixelWidth, e.texture.source.pixelHeight), n_15.setTransform(r_18), n_15;
    }
    if (e.fill instanceof d.u) {
        var n_16 = e.fill, r_19 = t.createPattern(n_16.texture.source.resource, "repeat");
        return l.C.applyPatternTransform(r_19, n_16.transform, !1), r_19;
    }
    if (e.fill instanceof d.m) {
        var a_7 = e.fill, o_11 = a_7.type === "linear", s_6 = a_7.textureSpace === "local", l_5 = 1, d_2 = 1;
        s_6 && n && (l_5 = n.width + r, d_2 = n.height + r);
        var f_2, p_4 = !1;
        if (o_11) {
            var e_35 = a_7.start, n_17 = a_7.end;
            f_2 = t.createLinearGradient(e_35.x * l_5 + c, e_35.y * d_2 + u, n_17.x * l_5 + c, n_17.y * d_2 + u), p_4 = Math.abs(n_17.x - e_35.x) < Math.abs((n_17.y - e_35.y) * .1);
        }
        else {
            var e_36 = a_7.center, n_18 = a_7.innerRadius, r_20 = a_7.outerCenter, i_7 = a_7.outerRadius;
            f_2 = t.createRadialGradient(e_36.x * l_5 + c, e_36.y * d_2 + u, n_18 * l_5, r_20.x * l_5 + c, r_20.y * d_2 + u, i_7 * l_5);
        }
        if (p_4 && s_6 && n) {
            var e_37 = n.lineHeight / d_2;
            var _loop_2 = function (t_24) {
                var o_12 = (t_24 * n.lineHeight + r / 2) / d_2;
                a_7.colorStops.forEach(function (t) { var n = o_12 + t.offset * e_37; n = Math.max(0, Math.min(1, n)), f_2.addColorStop(Math.floor(n * Me) / Me, i.z.shared.setValue(t.color).toHex()); });
            };
            for (var t_24 = 0; t_24 < n.lines.length; t_24++) {
                _loop_2(t_24);
            }
        }
        else
            a_7.colorStops.forEach(function (e) { f_2.addColorStop(e.offset, i.z.shared.setValue(e.color).toHex()); });
        return f_2;
    }
    return o.R("FillStyle not recognised", e), "red";
}
var Me;
function Ne() { return (Ne = e.n((function () { i.B(), a.x(), l.w(), s._t(), o.L(), d.h(), d.d(), Me = 1e5; })))(); }
function Z(e) { var t = 0; for (var n_19 = 0; n_19 < e.length; n_19++)
    e.charCodeAt(n_19) === 32 && t++; return t; }
var Pe, Fe, Q;
function Ie() { return (Ie = e.n((function () { i.B(), a._(), s.w(), o.u(), De(), Ae(), Ne(), Pe = new a.g, Fe = (function () {
    function Fe() {
    }
    Fe.prototype.getCanvasAndContext = function (e) { var t = e.text, n = e.style, _a = e.resolution, r = _a === void 0 ? 1 : _a, i = n._getFinalPadding(), a = X.measureText(t || " ", n), c = Math.ceil(Math.ceil(Math.max(1, a.width) + i * 2) * r), l = Math.ceil(Math.ceil(Math.max(1, a.height) + i * 2) * r), u = s.C.getOptimalCanvasAndContext(c, l); return this._renderTextToCanvas(n, i, r, u, a), { canvasAndContext: u, frame: n.trim ? o.l({ canvas: u.canvas, width: c, height: l, resolution: 1, output: Pe }) : Pe.set(0, 0, c, l) }; };
    Fe.prototype.returnCanvasAndContext = function (e) { s.C.returnCanvasAndContext(e); };
    Fe.prototype._renderTextToCanvas = function (e, t, n, r, i) { var a, o, s; if (i.runsByLine && i.runsByLine.length > 0) {
        this._renderTaggedTextToCanvas(i, e, t, n, r);
        return;
    } var c = r.canvas, l = r.context, u = Oe(e), d = i.lines, f = i.lineHeight, p = i.lineWidths, m = i.maxLineWidth, h = i.fontProperties, g = c.height; if (l.resetTransform(), l.scale(n, n), l.textBaseline = e.textBaseline, (a = e._stroke) != null && a.width) {
        var t_25 = e._stroke;
        l.lineWidth = t_25.width, l.miterLimit = t_25.miterLimit, l.lineJoin = t_25.join, l.lineCap = t_25.cap;
    } l.font = u; var _, v, y = e.dropShadow ? 2 : 1, b = ((o = (s = e._stroke) == null ? void 0 : s.width) == null ? 0 : o) / 2, x = (f - h.fontSize) / 2; f - h.fontSize < 0 && (x = 0); for (var a_8 = 0; a_8 < y; ++a_8) {
        var o_13 = e.dropShadow && a_8 === 0, s_7 = o_13 ? Math.ceil(Math.max(1, g) + t * 2) : 0, c_7 = s_7 * n;
        if (o_13)
            this._setupDropShadow(l, e, n, c_7);
        else {
            var n_20 = e._gradientBounds, r_21 = e._gradientOffset;
            if (n_20) {
                var S, C;
                var a_9 = { width: n_20.width, height: n_20.height, lineHeight: n_20.height, lines: i.lines };
                this._setFillAndStrokeStyles(l, e, a_9, t, b, (S = r_21 == null ? void 0 : r_21.x) == null ? 0 : S, (C = r_21 == null ? void 0 : r_21.y) == null ? 0 : C);
            }
            else
                r_21 ? this._setFillAndStrokeStyles(l, e, i, t, b, r_21.x, r_21.y) : this._setFillAndStrokeStyles(l, e, i, t, b);
            l.shadowColor = "rgba(0,0,0,0)";
        }
        for (var n_21 = 0; n_21 < d.length; n_21++) {
            var w;
            _ = b, v = b + n_21 * f + h.ascent + x, _ += this._getAlignmentOffset(p[n_21], m, e.align);
            var i_8 = 0;
            if (e.align === "justify" && e.wordWrap && n_21 < d.length - 1) {
                var e_38 = Z(d[n_21]);
                e_38 > 0 && (i_8 = (m - p[n_21]) / e_38);
            }
            (w = e._stroke) != null && w.width && this._drawLetterSpacing(d[n_21], e, r, _ + t, v + t - s_7, !0, i_8), e._fill !== void 0 && this._drawLetterSpacing(d[n_21], e, r, _ + t, v + t - s_7, !1, i_8);
        }
    } };
    Fe.prototype._renderTaggedTextToCanvas = function (e, t, n, r, i) { var a, o; var s = i.canvas, c = i.context, l = e.runsByLine, u = e.lineWidths, d = e.maxLineWidth, f = e.lineAscents, p = e.lineHeights, m = e.hasDropShadow, h = s.height; c.resetTransform(), c.scale(r, r), c.textBaseline = t.textBaseline; var g = m ? 2 : 1, _ = (a = (o = t._stroke) == null ? void 0 : o.width) == null ? 0 : a; for (var _i = 0, l_6 = l; _i < l_6.length; _i++) {
        var e_40 = l_6[_i];
        for (var _a = 0, e_39 = e_40; _a < e_39.length; _a++) {
            var t_27 = e_39[_a];
            var v, y;
            var e_41 = (v = (y = t_27.style._stroke) == null ? void 0 : y.width) == null ? 0 : v;
            e_41 > _ && (_ = e_41);
        }
    } var b = _ / 2, x = []; for (var e_42 = 0; e_42 < l.length; e_42++) {
        var t_28 = l[e_42], n_22 = [];
        for (var _b = 0, t_26 = t_28; _b < t_26.length; _b++) {
            var e_43 = t_26[_b];
            var t_29 = Oe(e_43.style);
            c.font = t_29, n_22.push({ width: X._measureText(e_43.text, e_43.style.letterSpacing, c), font: t_29 });
        }
        x.push(n_22);
    } for (var e_44 = 0; e_44 < g; ++e_44) {
        var a_10 = m && e_44 === 0, o_14 = a_10 ? Math.ceil(Math.max(1, h) + n * 2) : 0, s_8 = o_14 * r;
        a_10 || (c.shadowColor = "rgba(0,0,0,0)");
        var g_1 = b;
        for (var e_45 = 0; e_45 < l.length; e_45++) {
            var m_2 = l[e_45], h_2 = u[e_45], _1 = f[e_45], v_1 = p[e_45], y_2 = x[e_45], C_2 = b;
            C_2 += this._getAlignmentOffset(h_2, d, t.align);
            var w_2 = 0;
            if (t.align === "justify" && t.wordWrap && e_45 < l.length - 1) {
                var e_46 = 0;
                for (var _c = 0, m_1 = m_2; _c < m_1.length; _c++) {
                    var t_30 = m_1[_c];
                    e_46 += Z(t_30.text);
                }
                e_46 > 0 && (w_2 = (d - h_2) / e_46);
            }
            var T_2 = g_1 + _1, E_1 = C_2 + n;
            for (var e_47 = 0; e_47 < m_2.length; e_47++) {
                var S;
                var t_31 = m_2[e_47], _d = y_2[e_47], l_7 = _d.width, u_4 = _d.font;
                if (c.font = u_4, c.textBaseline = t_31.style.textBaseline, (S = t_31.style._stroke) != null && S.width) {
                    var e_48 = t_31.style._stroke;
                    if (c.lineWidth = e_48.width, c.miterLimit = e_48.miterLimit, c.lineJoin = e_48.join, c.lineCap = e_48.cap, a_10) {
                        if (t_31.style.dropShadow)
                            this._setupDropShadow(c, t_31.style, r, s_8);
                        else {
                            var e_49 = Z(t_31.text);
                            E_1 += l_7 + e_49 * w_2;
                            continue;
                        }
                    }
                    else {
                        var r_22 = X.measureFont(u_4), i_9 = t_31.style.lineHeight || r_22.fontSize;
                        c.strokeStyle = je(e_48, c, { width: l_7, height: i_9, lineHeight: i_9, lines: [t_31.text] }, n * 2, E_1 - n, g_1);
                    }
                    this._drawLetterSpacing(t_31.text, t_31.style, i, E_1, T_2 + n - o_14, !0, w_2);
                }
                var d_3 = Z(t_31.text);
                E_1 += l_7 + d_3 * w_2;
            }
            E_1 = C_2 + n;
            for (var e_50 = 0; e_50 < m_2.length; e_50++) {
                var t_32 = m_2[e_50], _f = y_2[e_50], l_8 = _f.width, u_5 = _f.font;
                if (c.font = u_5, c.textBaseline = t_32.style.textBaseline, t_32.style._fill !== void 0) {
                    if (a_10) {
                        if (t_32.style.dropShadow)
                            this._setupDropShadow(c, t_32.style, r, s_8);
                        else {
                            var e_51 = Z(t_32.text);
                            E_1 += l_8 + e_51 * w_2;
                            continue;
                        }
                    }
                    else {
                        var e_52 = X.measureFont(u_5), r_23 = t_32.style.lineHeight || e_52.fontSize, i_10 = { width: l_8, height: r_23, lineHeight: r_23, lines: [t_32.text] };
                        c.fillStyle = je(t_32.style._fill, c, i_10, n * 2, E_1 - n, g_1);
                    }
                    this._drawLetterSpacing(t_32.text, t_32.style, i, E_1, T_2 + n - o_14, !1, w_2);
                }
                var d_4 = Z(t_32.text);
                E_1 += l_8 + d_4 * w_2;
            }
            g_1 += v_1;
        }
    } };
    Fe.prototype._setFillAndStrokeStyles = function (e, t, n, r, i, a, o) {
        if (a === void 0) { a = 0; }
        if (o === void 0) { o = 0; }
        var s;
        if (e.fillStyle = t._fill ? je(t._fill, e, n, r * 2, a, o) : null, (s = t._stroke) != null && s.width) {
            var s_9 = i + r * 2;
            e.strokeStyle = je(t._stroke, e, n, s_9, a, o);
        }
    };
    Fe.prototype._setupDropShadow = function (e, t, n, r) { e.fillStyle = "black", e.strokeStyle = "black"; var a = t.dropShadow, o = a.color, s = a.alpha; e.shadowColor = i.z.shared.setValue(o).setAlpha(s).toRgbaString(); var c = a.blur * n, l = a.distance * n; e.shadowBlur = c, e.shadowOffsetX = Math.cos(a.angle) * l, e.shadowOffsetY = Math.sin(a.angle) * l + r; };
    Fe.prototype._getAlignmentOffset = function (e, t, n) { return n === "right" ? t - e : n === "center" ? (t - e) / 2 : 0; };
    Fe.prototype._drawLetterSpacing = function (e, t, n, r, i, a, o) {
        if (a === void 0) { a = !1; }
        if (o === void 0) { o = 0; }
        var s = n.context, c = t.letterSpacing, l = !1;
        if (X.experimentalLetterSpacingSupported && (X.experimentalLetterSpacing ? (s.letterSpacing = "".concat(c, "px"), s.textLetterSpacing = "".concat(c, "px"), l = !0) : (s.letterSpacing = "0px", s.textLetterSpacing = "0px")), (c === 0 || l) && o === 0) {
            a ? s.strokeText(e, r, i) : s.fillText(e, r, i);
            return;
        }
        if (o !== 0 && (c === 0 || l)) {
            var t_33 = e.split(" "), n_23 = r, c_8 = s.measureText(" ").width;
            for (var e_53 = 0; e_53 < t_33.length; e_53++)
                a ? s.strokeText(t_33[e_53], n_23, i) : s.fillText(t_33[e_53], n_23, i), n_23 += s.measureText(t_33[e_53]).width + c_8 + o;
            return;
        }
        var u = r, d = X.graphemeSegmenter(e), f = s.measureText(e).width, p = 0;
        for (var e_54 = 0; e_54 < d.length; ++e_54) {
            var t_34 = d[e_54];
            a ? s.strokeText(t_34, u, i) : s.fillText(t_34, u, i);
            var n_24 = "";
            for (var t_35 = e_54 + 1; t_35 < d.length; ++t_35)
                n_24 += d[t_35];
            p = s.measureText(n_24).width, u += f - p + c, t_34 === " " && (u += o), f = p;
        }
    };
    return Fe;
}()), Q = new Fe; })))(); }
function Le(e) { var t = e; if (typeof t.dropShadow == "boolean" && t.dropShadow) {
    var r, a, s, c, l;
    var n_25 = ze.defaultDropShadow;
    e.dropShadow = { alpha: (r = t.dropShadowAlpha) == null ? n_25.alpha : r, angle: (a = t.dropShadowAngle) == null ? n_25.angle : a, blur: (s = t.dropShadowBlur) == null ? n_25.blur : s, color: (c = t.dropShadowColor) == null ? n_25.color : c, distance: (l = t.dropShadowDistance) == null ? n_25.distance : l };
} if (t.strokeThickness !== void 0) {
    o.U(o.G, "strokeThickness is now a part of stroke");
    var r_24 = t.stroke, a_11 = {};
    if (i.z.isColorLike(r_24))
        a_11.color = r_24;
    else if (r_24 instanceof d.m || r_24 instanceof d.u)
        a_11.fill = r_24;
    else if (Object.hasOwnProperty.call(r_24, "color") || Object.hasOwnProperty.call(r_24, "fill"))
        a_11 = r_24;
    else
        throw Error("Invalid stroke value.");
    e.stroke = n.yr(n.yr({}, a_11), {}, { width: t.strokeThickness });
} if (Array.isArray(t.fillGradientStops)) {
    if (o.U(o.G, "gradient fill is now a fill pattern: `new FillGradient(...)`"), !Array.isArray(t.fill) || t.fill.length === 0)
        throw Error("Invalid fill value. Expected an array of colors for gradient fill.");
    t.fill.length !== t.fillGradientStops.length && o.R("The number of fill colors must match the number of fill gradient stops.");
    var n_26 = new d.m({ start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, textureSpace: "local" }), r_25 = t.fillGradientStops.slice(), a_12 = t.fill.map(function (e) { return i.z.shared.setValue(e).toNumber(); });
    r_25.forEach(function (e, t) { n_26.addColorStop(e, a_12[t]); }), e.fill = { fill: n_26 };
} }
var Re, ze;
function Be() { return (Be = e.n((function () { r.i(), i.B(), o.Y(), o.W(), o.L(), d.h(), d.d(), d.o(), d.s(), Ae(), n.br(), Re = (function (_super) {
    __extends(e, _super);
    function e(t) {
        if (t === void 0) { t = {}; }
        var _this = this;
        var r;
        _this = _super.call(this) || this, _this.uid = o.X("textStyle"), _this._tick = 0, _this._cachedFontString = null, Le(t), t instanceof e && (t = t._toObject());
        var i = n.yr(n.yr({}, e.defaultTextStyle), t);
        for (var e_55 in i) {
            var t_36 = e_55;
            _this[t_36] = i[e_55];
        }
        _this._tagStyles = (r = t.tagStyles) == null ? void 0 : r, _this.update(), _this._tick = 0;
        return _this;
    }
    Object.defineProperty(e.prototype, "align", {
        get: function () { return this._align; },
        set: function (e) { this._align !== e && (this._align = e, this.update()); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "breakWords", {
        get: function () { return this._breakWords; },
        set: function (e) { this._breakWords !== e && (this._breakWords = e, this.update()); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "dropShadow", {
        get: function () { return this._dropShadow; },
        set: function (t) { this._dropShadow !== t && (this._dropShadow = typeof t == "object" && t ? this._createProxy(n.yr(n.yr({}, e.defaultDropShadow), t)) : t ? this._createProxy(n.yr({}, e.defaultDropShadow)) : null, this.update()); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "fontFamily", {
        get: function () { return this._fontFamily; },
        set: function (e) { this._fontFamily !== e && (this._fontFamily = e, this.update()); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "fontSize", {
        get: function () { return this._fontSize; },
        set: function (e) { this._fontSize !== e && (this._fontSize = typeof e == "string" ? parseInt(e, 10) : e, this.update()); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "fontStyle", {
        get: function () { return this._fontStyle; },
        set: function (e) { this._fontStyle !== e && (this._fontStyle = e.toLowerCase(), this.update()); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "fontVariant", {
        get: function () { return this._fontVariant; },
        set: function (e) { this._fontVariant !== e && (this._fontVariant = e, this.update()); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "fontWeight", {
        get: function () { return this._fontWeight; },
        set: function (e) { this._fontWeight !== e && (this._fontWeight = e, this.update()); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "leading", {
        get: function () { return this._leading; },
        set: function (e) { this._leading !== e && (this._leading = e, this.update()); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "letterSpacing", {
        get: function () { return this._letterSpacing; },
        set: function (e) { this._letterSpacing !== e && (this._letterSpacing = e, this.update()); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "lineHeight", {
        get: function () { return this._lineHeight; },
        set: function (e) { this._lineHeight !== e && (this._lineHeight = e, this.update()); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "padding", {
        get: function () { return this._padding; },
        set: function (e) { this._padding !== e && (this._padding = e, this.update()); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "filters", {
        get: function () { return this._filters; },
        set: function (e) { this._filters !== e && (this._filters = Object.freeze(e), this.update()); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "trim", {
        get: function () { return this._trim; },
        set: function (e) { this._trim !== e && (this._trim = e, this.update()); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "textBaseline", {
        get: function () { return this._textBaseline; },
        set: function (e) { this._textBaseline !== e && (this._textBaseline = e, this.update()); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "whiteSpace", {
        get: function () { return this._whiteSpace; },
        set: function (e) { this._whiteSpace !== e && (this._whiteSpace = e, this.update()); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "wordWrap", {
        get: function () { return this._wordWrap; },
        set: function (e) { this._wordWrap !== e && (this._wordWrap = e, this.update()); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "wordWrapWidth", {
        get: function () { return this._wordWrapWidth; },
        set: function (e) { this._wordWrapWidth !== e && (this._wordWrapWidth = e, this.update()); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "fill", {
        get: function () { return this._originalFill; },
        set: function (e) {
            var _this = this;
            e !== this._originalFill && (this._originalFill = e, this._isFillStyle(e) && (this._originalFill = this._createProxy(n.yr(n.yr({}, d.a.defaultFillStyle), e), function () { _this._fill = d.c(n.yr({}, _this._originalFill), d.a.defaultFillStyle); })), this._fill = d.c(e === 0 ? "black" : e, d.a.defaultFillStyle), this.update());
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "stroke", {
        get: function () { return this._originalStroke; },
        set: function (e) {
            var _this = this;
            e !== this._originalStroke && (this._originalStroke = e, this._isFillStyle(e) && (this._originalStroke = this._createProxy(n.yr(n.yr({}, d.a.defaultStrokeStyle), e), function () { _this._stroke = d.l(n.yr({}, _this._originalStroke), d.a.defaultStrokeStyle); })), this._stroke = d.l(e, d.a.defaultStrokeStyle), this.update());
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "tagStyles", {
        get: function () { return this._tagStyles; },
        set: function (e) { this._tagStyles !== e && (this._tagStyles = e == null ? void 0 : e, this.update()); },
        enumerable: false,
        configurable: true
    });
    e.prototype.update = function () { this._tick++, this._cachedFontString = null, this.emit("update", this); };
    e.prototype.reset = function () { var t = e.defaultTextStyle; for (var e_56 in t)
        this[e_56] = t[e_56]; };
    e.prototype.assign = function (e) { for (var t_37 in e) {
        var n_27 = t_37;
        this[n_27] = e[t_37];
    } return this; };
    Object.defineProperty(e.prototype, "styleKey", {
        get: function () { return "".concat(this.uid, "-").concat(this._tick); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "_fontString", {
        get: function () { return this._cachedFontString === null && (this._cachedFontString = Oe(this)), this._cachedFontString; },
        enumerable: false,
        configurable: true
    });
    e.prototype._toObject = function () { return { align: this.align, breakWords: this.breakWords, dropShadow: this._dropShadow ? n.yr({}, this._dropShadow) : null, fill: this._fill ? n.yr({}, this._fill) : void 0, fontFamily: this.fontFamily, fontSize: this.fontSize, fontStyle: this.fontStyle, fontVariant: this.fontVariant, fontWeight: this.fontWeight, leading: this.leading, letterSpacing: this.letterSpacing, lineHeight: this.lineHeight, padding: this.padding, stroke: this._stroke ? n.yr({}, this._stroke) : void 0, textBaseline: this.textBaseline, trim: this.trim, whiteSpace: this.whiteSpace, wordWrap: this.wordWrap, wordWrapWidth: this.wordWrapWidth, filters: this._filters ? __spreadArray([], this._filters, true) : void 0, tagStyles: this._tagStyles ? n.yr({}, this._tagStyles) : void 0 }; };
    e.prototype.clone = function () { return new e(this._toObject()); };
    e.prototype._getFinalPadding = function () { var e = 0; if (this._filters)
        for (var t_38 = 0; t_38 < this._filters.length; t_38++)
            e += this._filters[t_38].padding; return Math.max(this._padding, e); };
    e.prototype.destroy = function (e) {
        if (e === void 0) { e = !1; }
        if (this.removeAllListeners(), typeof e == "boolean" ? e : e != null && e.texture) {
            var t, n, r, i;
            var a_13 = typeof e == "boolean" ? e : e == null ? void 0 : e.textureSource;
            (t = this._fill) != null && t.texture && this._fill.texture.destroy(a_13), (n = this._originalFill) != null && n.texture && this._originalFill.texture.destroy(a_13), (r = this._stroke) != null && r.texture && this._stroke.texture.destroy(a_13), (i = this._originalStroke) != null && i.texture && this._originalStroke.texture.destroy(a_13);
        }
        this._fill = null, this._stroke = null, this.dropShadow = null, this._originalStroke = null, this._originalFill = null;
    };
    e.prototype._createProxy = function (e, t) {
        var _this = this;
        return new Proxy(e, { set: function (e, n, r) { return (e[n] === r || (e[n] = r, t == null || t(n, r), _this.update()), !0); } });
    };
    e.prototype._isFillStyle = function (e) { return (e == null ? null : e) !== null && !(i.z.isColorLike(e) || e instanceof d.m || e instanceof d.u); };
    return e;
}(r.r)), Re.defaultDropShadow = { alpha: 1, angle: Math.PI / 6, blur: 0, color: "black", distance: 5 }, Re.defaultTextStyle = { align: "left", breakWords: !1, dropShadow: null, fill: "black", fontFamily: "Arial", fontSize: 26, fontStyle: "normal", fontVariant: "normal", fontWeight: "normal", leading: 0, letterSpacing: 0, lineHeight: 0, padding: 0, stroke: null, textBaseline: "alphabetic", trim: !1, whiteSpace: "pre", wordWrap: !1, wordWrapWidth: 100 }, ze = Re; })))(); }
function Ve(e) { if (He)
    return; var t = new s.wt({ scaleMode: e.scaleMode }); e._resourceId !== t._resourceId && (He = !0, o.R("Text textureStyle: only scaleMode is applied to a text texture, the other fields are ignored")); }
var He;
function Ue() { return (Ue = e.n((function () { s.Tt(), o.L(), He = !1; })))(); }
function We(e, t) { var n = e.texture, r = e.bounds, i = t._style._getFinalPadding(); o.B(r, t._anchor, n); var a = t._anchor._x * i * 2, s = t._anchor._y * i * 2; r.minX -= i - a, r.minY -= i - s, r.maxX -= i - a, r.maxY -= i - s; }
function Ge() { return (Ge = e.n((function () { })))(); }
var Ke;
function qe() { return (qe = e.n((function () { Ke = (function () {
    function Ke() {
        this.batcherName = "default", this.topology = "triangle-list", this.attributeSize = 4, this.indexSize = 6, this.packAsQuad = !0, this.roundPixels = 0, this._attributeStart = 0, this._batcher = null, this._batch = null;
    }
    Object.defineProperty(Ke.prototype, "blendMode", {
        get: function () { return this.renderable.groupBlendMode; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ke.prototype, "color", {
        get: function () { return this.renderable.groupColorAlpha; },
        enumerable: false,
        configurable: true
    });
    Ke.prototype.reset = function () { this.renderable = null, this.texture = null, this._batcher = null, this._batch = null, this.bounds = null; };
    Ke.prototype.destroy = function () { this.reset(); };
    return Ke;
}()); })))(); }
var Je;
function Ye() { return (Ye = e.n((function () { qe(), Je = (function (_super) {
    __extends(Je, _super);
    function Je() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Je;
}(Ke)); })))(); }
var Xe;
function Ze() { return (Ze = e.n((function () { i.q(), o.f(), Ge(), Ye(), Xe = (function () {
    function Xe(e) {
        this._renderer = e, e.runners.resolutionChange.add(this), e.runners.contextChange.add(this), this._managedTexts = new o.d({ renderer: e, type: "renderable", onUnload: this.onTextUnload.bind(this), name: "canvasText" });
    }
    Xe.prototype.resolutionChange = function () { for (var e_57 in this._managedTexts.items) {
        var t_39 = this._managedTexts.items[e_57];
        t_39 != null && t_39._autoResolution && t_39.onViewUpdate();
    } };
    Xe.prototype.contextChange = function () { for (var t_40 in this._managedTexts.items) {
        var e;
        (e = this._managedTexts.items[t_40]) == null || e.unload();
    } };
    Xe.prototype.validateRenderable = function (e) { var t = this._getGpuText(e), n = e.styleKey; return t.currentKey !== n || e._didTextUpdate; };
    Xe.prototype.addRenderable = function (e, t) { var n = this._getGpuText(e); if (e._didTextUpdate || n.currentKey !== e.styleKey) {
        var t_41 = e._autoResolution ? this._renderer.resolution : e.resolution;
        (n.currentKey !== e.styleKey || e._resolution !== t_41) && this._updateGpuText(e), e._didTextUpdate = !1, We(n, e);
    } this._renderer.renderPipes.batch.addToBatch(n, t); };
    Xe.prototype.updateRenderable = function (e) { var t = this._getGpuText(e); t._batcher.updateElement(t); };
    Xe.prototype._updateGpuText = function (e) { var t = this._getGpuText(e); t.texture && this._renderer.canvasText.decreaseReferenceCount(t.currentKey), e._resolution = e._autoResolution ? this._renderer.resolution : e.resolution, t.texture = this._renderer.canvasText.getManagedTexture(e), t.currentKey = e.styleKey; };
    Xe.prototype._getGpuText = function (e) { return e._gpuData[this._renderer.uid] || this.initGpuText(e); };
    Xe.prototype.initGpuText = function (e) { var t = new Je; return t.currentKey = "--", t.renderable = e, t.transform = e.groupTransform, t.bounds = { minX: 0, maxX: 1, minY: 0, maxY: 0 }, t.roundPixels = this._renderer._roundPixels | e._roundPixels, e._gpuData[this._renderer.uid] = t, this._managedTexts.add(e), t; };
    Xe.prototype.onTextUnload = function (e) { var t = e._gpuData[this._renderer.uid]; if (!t)
        return; var n = this._renderer.canvasText; n.getReferenceCount(t.currentKey) > 0 ? n.decreaseReferenceCount(t.currentKey) : t.texture && n.returnTexture(t.texture); };
    Xe.prototype.destroy = function () { this._managedTexts.destroy(), this._renderer = null; };
    return Xe;
}()), Xe.extension = { type: [i.G.WebGLPipes, i.G.WebGPUPipes, i.G.CanvasPipes], name: "text" }; })))(); }
var Qe;
function $e() { return ($e = e.n((function () { s.pt(), o.W(), Ie(), Be(), D(), Qe = (function () {
    function Qe(e, t) {
        this._activeTextures = {}, this._renderer = e, this._retainCanvasContext = t;
    }
    Qe.prototype.getTexture = function (e, t, n, r) { var i; typeof e == "string" && (o.U("8.0.0", "CanvasTextSystem.getTexture: Use object TextOptions instead of separate arguments"), e = { text: e, style: n, resolution: t }), e.style instanceof ze || (e.style = new ze(e.style)), typeof e.text != "string" && (e.text = e.text.toString()); var a = e.text, s = e.style, c = e.textureStyle, l = e.autoGenerateMipmaps, u = (i = e.resolution) == null ? this._renderer.resolution : i, _a = Q.getCanvasAndContext({ text: a, style: s, resolution: u }), d = _a.frame, f = _a.canvasAndContext, p = T(f.canvas, d.width, d.height, u, l, c == null ? void 0 : c.scaleMode); if (s.trim && (d.pad(s.padding), p.frame.copyFrom(d), p.frame.scale(1 / u), p.updateUvs()), s.filters) {
        var e_58 = this._applyFilters(p, s.filters);
        return this.returnTexture(p), Q.returnCanvasAndContext(f), e_58;
    } return this._renderer.texture.initSource(p._source), this._retainCanvasContext || Q.returnCanvasAndContext(f), p; };
    Qe.prototype.returnTexture = function (e) { var t = e.source, n = t.resource; if (this._retainCanvasContext && n != null && n.getContext) {
        var e_59 = n.getContext("2d");
        e_59 && Q.returnCanvasAndContext({ canvas: n, context: e_59 });
    } t.resource = null, t.uploadMethodId = "unknown", t.alphaMode = "no-premultiply-alpha", s.ft.returnTexture(e); };
    Qe.prototype.renderTextToCanvas = function () { o.U("8.10.0", "CanvasTextSystem.renderTextToCanvas: no longer supported, use CanvasTextSystem.getTexture instead"); };
    Qe.prototype.getManagedTexture = function (e) { e._resolution = e._autoResolution ? this._renderer.resolution : e.resolution; var t = e.styleKey; if (this._activeTextures[t])
        return this._increaseReferenceCount(t), this._activeTextures[t].texture; var n = this.getTexture({ text: e.text, style: e.style, resolution: e._resolution, textureStyle: e.textureStyle, autoGenerateMipmaps: e.autoGenerateMipmaps }); return this._activeTextures[t] = { texture: n, usageCount: 1 }, n; };
    Qe.prototype.decreaseReferenceCount = function (e) { var t = this._activeTextures[e]; t && (t.usageCount--, t.usageCount === 0 && (this.returnTexture(t.texture), this._activeTextures[e] = null)); };
    Qe.prototype.getReferenceCount = function (e) { var t, n; return (t = (n = this._activeTextures[e]) == null ? void 0 : n.usageCount) == null ? 0 : t; };
    Qe.prototype._increaseReferenceCount = function (e) { this._activeTextures[e].usageCount++; };
    Qe.prototype._applyFilters = function (e, t) { var n = this._renderer.renderTarget.renderTarget, r = this._renderer.filter.generateFilteredTexture({ texture: e, filters: t }); return this._renderer.renderTarget.bind({ target: n, clear: !1 }), r; };
    Qe.prototype.destroy = function () { this._renderer = null; for (var e_60 in this._activeTextures)
        this._activeTextures[e_60] && this.returnTexture(this._activeTextures[e_60].texture); this._activeTextures = null; };
    return Qe;
}()); })))(); }
var et;
function tt() { return (tt = e.n((function () { i.q(), $e(), et = (function (_super) {
    __extends(et, _super);
    function et(e) {
        return _super.call(this, e, !0) || this;
    }
    return et;
}(Qe)), et.extension = { type: [i.G.CanvasSystem], name: "canvasText" }; })))(); }
var nt;
function rt() { return (rt = e.n((function () { i.q(), $e(), nt = (function (_super) {
    __extends(nt, _super);
    function nt(e) {
        return _super.call(this, e, !1) || this;
    }
    return nt;
}(Qe)), nt.extension = { type: [i.G.WebGLSystem, i.G.WebGPUSystem], name: "canvasText" }; })))(); }
function it() { return (it = e.n((function () { i.q(), Ze(), tt(), rt(), i.K.add(et), i.K.add(nt), i.K.add(Xe); })))(); }
var at;
function ot() { return (ot = e.n((function () { s.Ct(), s.Tt(), oe(), Ie(), De(), Be(), Ue(), it(), at = (function (_super) {
    __extends(at, _super);
    function at() {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        var _this = this;
        var t;
        var n = re(e, "Text");
        _this = _super.call(this, n, ze) || this, _this.renderPipeId = "text", n.textureStyle && (_this.textureStyle = n.textureStyle instanceof s.wt ? n.textureStyle : new s.wt(n.textureStyle), Ve(_this.textureStyle)), _this.autoGenerateMipmaps = (t = n.autoGenerateMipmaps) == null ? s.St.defaultOptions.autoGenerateMipmaps : t;
        return _this;
    }
    at.prototype.updateBounds = function () { var e = this._bounds, t = this._anchor, n = 0, r = 0; if (this._style.trim) {
        var _a = Q.getCanvasAndContext({ text: this.text, style: this._style, resolution: 1 }), e_61 = _a.frame, t_42 = _a.canvasAndContext;
        Q.returnCanvasAndContext(t_42), n = e_61.width, r = e_61.height;
    }
    else {
        var e_62 = X.measureText(this._text, this._style);
        n = e_62.width, r = e_62.height;
    } e.minX = -t._x * n, e.maxX = e.minX + n, e.minY = -t._y * r, e.maxY = e.minY + r; };
    return at;
}(ae)); })))(); }
var st;
function ct() { return (ct = e.n((function () { i.q(), qe(), st = (function () {
    function st(e) {
        this._renderer = e;
    }
    st.prototype.addRenderable = function (e, t) { var n = this._getGpuSprite(e); e.didViewUpdate && this._updateBatchableSprite(e, n), this._renderer.renderPipes.batch.addToBatch(n, t); };
    st.prototype.updateRenderable = function (e) { var t = this._getGpuSprite(e); e.didViewUpdate && this._updateBatchableSprite(e, t), t._batcher.updateElement(t); };
    st.prototype.validateRenderable = function (e) { var t = this._getGpuSprite(e); return !t._batcher.checkAndUpdateTexture(t, e._texture); };
    st.prototype._updateBatchableSprite = function (e, t) { t.bounds = e.visualBounds, t.texture = e._texture; };
    st.prototype._getGpuSprite = function (e) { return e._gpuData[this._renderer.uid] || this._initGPUSprite(e); };
    st.prototype._initGPUSprite = function (e) { var t = new Ke; return t.renderable = e, t.transform = e.groupTransform, t.texture = e._texture, t.bounds = e.visualBounds, t.roundPixels = this._renderer._roundPixels | e._roundPixels, e._gpuData[this._renderer.uid] = t, t; };
    st.prototype.destroy = function () { this._renderer = null; };
    return st;
}()), st.extension = { type: [i.G.WebGLPipes, i.G.WebGPUPipes, i.G.CanvasPipes], name: "sprite" }; })))(); }
var lt;
function ut() { return (ut = e.n((function () { i.q(), a.x(), u.v(), u.s(), u.d(), u.t(), s.J(), s._t(), o.L(), lt = (function () {
    function lt() {
    }
    lt.prototype.init = function () { var e = u._({ name: "mesh", bits: [u.c, u.n, u.f] }); this._shader = new s.q({ glProgram: e, resources: { uTexture: s.gt.EMPTY.source, textureUniforms: { uTextureMatrix: { type: "mat3x3<f32>", value: new a.b } } } }); };
    lt.prototype.execute = function (e, t) { var n = e.renderer, r = t._shader; if (!r) {
        r = this._shader;
        var e_63 = t.texture, n_28 = e_63.source;
        r.resources.uTexture = n_28, r.resources.uSampler = n_28.style, r.resources.textureUniforms.uniforms.uTextureMatrix = e_63.textureMatrix.mapCoord;
    }
    else if (!r.glProgram) {
        o.R("Mesh shader has no glProgram", t.shader);
        return;
    } r.groups[100] = n.globalUniforms.bindGroup, r.groups[101] = e.localUniformsBindGroup, n.encoder.draw({ geometry: t._geometry, shader: r, state: t.state }); };
    lt.prototype.destroy = function () { this._shader.destroy(!0), this._shader = null; };
    return lt;
}()), lt.extension = { type: [i.G.WebGLPipesAdaptor], name: "mesh" }; })))(); }
var dt, ft;
function pt() { return (pt = e.n((function () { o.W(), A(), n.br(), dt = (function (_super) {
    __extends(e, _super);
    function e() {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        var t;
        var _this = _super.call(this, {}) || this;
        var n = (t = e[0]) == null ? {} : t;
        typeof n == "number" && (o.U(o.G, "PlaneGeometry constructor changed please use { width, height, verticesX, verticesY } instead"), n = { width: n, height: e[1], verticesX: e[2], verticesY: e[3] }), _this.build(n);
        return _this;
    }
    e.prototype.build = function (t) { var r, i, a, o; t = n.yr(n.yr({}, e.defaultOptions), t), this.verticesX = (r = this.verticesX) == null ? t.verticesX : r, this.verticesY = (i = this.verticesY) == null ? t.verticesY : i, this.width = (a = this.width) == null ? t.width : a, this.height = (o = this.height) == null ? t.height : o; var s = this.verticesX * this.verticesY, c = [], l = [], u = [], d = this.verticesX - 1, f = this.verticesY - 1, p = this.width / d, m = this.height / f; for (var e_64 = 0; e_64 < s; e_64++) {
        var t_43 = e_64 % this.verticesX, n_29 = e_64 / this.verticesX | 0;
        c.push(t_43 * p, n_29 * m), l.push(t_43 / d, n_29 / f);
    } var h = d * f; for (var e_65 = 0; e_65 < h; e_65++) {
        var t_44 = e_65 % d, n_30 = e_65 / d | 0, r_26 = n_30 * this.verticesX + t_44, i_11 = n_30 * this.verticesX + t_44 + 1, a_14 = (n_30 + 1) * this.verticesX + t_44, o_15 = (n_30 + 1) * this.verticesX + t_44 + 1;
        u.push(r_26, i_11, a_14, i_11, o_15, a_14);
    } this.buffers[0].data = new Float32Array(c), this.buffers[1].data = new Float32Array(l), this.indexBuffer.data = new Uint32Array(u), this.buffers[0].update(), this.buffers[1].update(), this.indexBuffer.update(); };
    return e;
}(k)), dt.defaultOptions = { width: 100, height: 100, verticesX: 10, verticesY: 10 }, ft = dt; })))(); }
var mt;
function ht() { return (ht = e.n((function () { l.w(), mt = (function () {
    function mt() {
    }
    mt.prototype.execute = function (e, t) { var n, r; var i = e.renderer, a = i.canvasContext.activeContext, o = t.particleChildren, s = t.texture; a.save(), i.canvasContext.setContextTransform(t.worldTransform, t.roundPixels), i.canvasContext.setBlendMode(t.groupBlendMode); var c = t.groupColorAlpha, u = (n = (r = i.filter) == null ? void 0 : r.alphaMultiplier) == null ? 1 : n, d = (c >>> 24 & 255) / 255 * u; for (var e_66 = 0; e_66 < o.length; e_66++) {
        var f;
        var t_45 = o[e_66], n_31 = t_45.texture || s;
        if (!(n_31 != null && (f = n_31.source) != null && f.resource))
            continue;
        var r_27 = t_45.color, i_12 = (r_27 >>> 24 & 255) / 255 * d;
        if (i_12 <= 0)
            continue;
        var c_9 = r_27 & 16777215, u_6 = ((c_9 & 255) << 16) + (c_9 & 65280) + (c_9 >> 16 & 255), p_5 = n_31.source.resource;
        u_6 !== 16777215 && (p_5 = l.C.getTintedCanvas({ texture: n_31 }, u_6));
        var m_3 = n_31.frame, h_3 = n_31.source.resolution, g_2 = m_3.x * h_3, _2 = m_3.y * h_3, v_2 = m_3.width * h_3, y_3 = m_3.height * h_3;
        a.globalAlpha = i_12;
        var b_2 = -t_45.anchorX * m_3.width, x_2 = -t_45.anchorY * m_3.height;
        t_45.rotation !== 0 || t_45.scaleX !== 1 || t_45.scaleY !== 1 ? (a.save(), a.translate(t_45.x, t_45.y), a.rotate(t_45.rotation), a.scale(t_45.scaleX, t_45.scaleY), a.drawImage(p_5, g_2, _2, v_2, y_3, b_2, x_2, m_3.width, m_3.height), a.restore()) : a.drawImage(p_5, g_2, _2, v_2, y_3, t_45.x + b_2, t_45.y + x_2, m_3.width, m_3.height);
    } a.restore(); };
    return mt;
}()); })))(); }
function gt(e, t) {
    if (t === void 0) { t = null; }
    var n = e * 6;
    if (n > 65535 ? t || (t = new Uint32Array(n)) : t || (t = new Uint16Array(n)), t.length !== n)
        throw Error("Out buffer length is incorrect, got ".concat(t.length, " and expected ").concat(n));
    for (var e_67 = 0, r_28 = 0; e_67 < n; e_67 += 6, r_28 += 4)
        t[e_67 + 0] = r_28 + 0, t[e_67 + 1] = r_28 + 1, t[e_67 + 2] = r_28 + 2, t[e_67 + 3] = r_28 + 0, t[e_67 + 4] = r_28 + 2, t[e_67 + 5] = r_28 + 3;
    return t;
}
function _t(e) { return { dynamicUpdate: vt(e, !0), staticUpdate: vt(e, !1) }; }
function vt(e, t) {
    var n = [];
    n.push("\n\n        var index = 0;\n\n        for (let i = 0; i < ps.length; ++i)\n        {\n            const p = ps[i];\n\n            ");
    var r = 0;
    for (var i_13 in e) {
        var a_15 = e[i_13];
        if (t !== a_15.dynamic)
            continue;
        n.push("offset = index + ".concat(r)), n.push(a_15.code);
        var o_16 = s.tt(a_15.format);
        r += o_16.stride / 4;
    }
    return n.push("\n            index += stride * 4;\n        }\n    "), n.unshift("\n        var stride = ".concat(r, ";\n    ")), (function () { throw Error("[sapling2d] new Function is not allowed in WeChat Mini Games"); })("ps", "f32v", "u32v", n.join("\n"));
}
function yt() { return (yt = e.n((function () { s.nt(); })))(); }
function bt(e) { var t = []; for (var n_32 in e) {
    var r_29 = e[n_32];
    t.push(n_32, r_29.code, r_29.dynamic ? "d" : "s");
} return t.join("_"); }
var xt;
function St() { return (St = e.n((function () { s.N(), s.F(), s.j(), s.nt(), o.m(), yt(), xt = (function () {
    function xt(e) {
        var t;
        this._size = 0, this._generateParticleUpdateCache = {};
        var n = this._size = (t = e.size) == null ? 1e3 : t, r = e.properties, i = 0, a = 0;
        for (var e_68 in r) {
            var t_46 = r[e_68], n_33 = s.tt(t_46.format);
            t_46.dynamic ? a += n_33.stride : i += n_33.stride;
        }
        this._dynamicStride = a / 4, this._staticStride = i / 4, this.staticAttributeBuffer = new o.p(n * 4 * i), this.dynamicAttributeBuffer = new o.p(n * 4 * a), this.indexBuffer = gt(n);
        var c = new s.A, l = 0, u = 0;
        this._staticBuffer = new s.M({ data: new Float32Array(1), label: "static-particle-buffer", shrinkToFit: !1, usage: s.P.VERTEX | s.P.COPY_DST }), this._dynamicBuffer = new s.M({ data: new Float32Array(1), label: "dynamic-particle-buffer", shrinkToFit: !1, usage: s.P.VERTEX | s.P.COPY_DST });
        for (var e_69 in r) {
            var t_47 = r[e_69], n_34 = s.tt(t_47.format);
            t_47.dynamic ? (c.addAttribute(t_47.attributeName, { buffer: this._dynamicBuffer, stride: this._dynamicStride * 4, offset: l * 4, format: t_47.format }), l += n_34.size) : (c.addAttribute(t_47.attributeName, { buffer: this._staticBuffer, stride: this._staticStride * 4, offset: u * 4, format: t_47.format }), u += n_34.size);
        }
        c.addIndex(this.indexBuffer);
        var d = this.getParticleUpdate(r);
        this._dynamicUpload = d.dynamicUpdate, this._staticUpload = d.staticUpdate, this.geometry = c;
    }
    xt.prototype.getParticleUpdate = function (e) { var t = bt(e); return this._generateParticleUpdateCache[t] || (this._generateParticleUpdateCache[t] = this.generateParticleUpdate(e)), this._generateParticleUpdateCache[t]; };
    xt.prototype.generateParticleUpdate = function (e) { return _t(e); };
    xt.prototype.update = function (e, t) { e.length > this._size && (t = !0, this._size = Math.max(e.length, this._size * 1.5 | 0), this.staticAttributeBuffer = new o.p(this._size * this._staticStride * 4 * 4), this.dynamicAttributeBuffer = new o.p(this._size * this._dynamicStride * 4 * 4), this.indexBuffer = gt(this._size), this.geometry.indexBuffer.setDataWithSize(this.indexBuffer, this.indexBuffer.byteLength, !0)); var n = this.dynamicAttributeBuffer; if (this._dynamicUpload(e, n.float32View, n.uint32View), this._dynamicBuffer.setDataWithSize(this.dynamicAttributeBuffer.float32View, e.length * this._dynamicStride * 4, !0), t) {
        var t_48 = this.staticAttributeBuffer;
        this._staticUpload(e, t_48.float32View, t_48.uint32View), this._staticBuffer.setDataWithSize(t_48.float32View, e.length * this._staticStride * 4, !0);
    } };
    xt.prototype.destroy = function () { this._staticBuffer.destroy(), this._dynamicBuffer.destroy(), this.geometry.destroy(); };
    return xt;
}()); })))(); }
var Ct;
function wt() {
    return (wt = e.n((function () {
        Ct = "varying vec2 vUV;\nvarying vec4 vColor;\n\nuniform sampler2D uTexture;\n\nvoid main(void){\n    vec4 color = texture2D(uTexture, vUV) * vColor;\n    gl_FragColor = color;\n}";
    })))();
}
var Tt;
function Et() {
    return (Et = e.n((function () {
        Tt = "attribute vec2 aVertex;\nattribute vec2 aUV;\nattribute vec4 aColor;\n\nattribute vec2 aPosition;\nattribute float aRotation;\n\nuniform mat3 uTranslationMatrix;\nuniform float uRound;\nuniform vec2 uResolution;\nuniform vec4 uColor;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\n\nvec2 roundPixels(vec2 position, vec2 targetSize)\n{       \n    return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;\n}\n\nvoid main(void){\n    float cosRotation = cos(aRotation);\n    float sinRotation = sin(aRotation);\n    float x = aVertex.x * cosRotation - aVertex.y * sinRotation;\n    float y = aVertex.x * sinRotation + aVertex.y * cosRotation;\n\n    vec2 v = vec2(x, y);\n    v = v + aPosition;\n\n    gl_Position = vec4((uTranslationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);\n\n    if(uRound == 1.0)\n    {\n        gl_Position.xy = roundPixels(gl_Position.xy, uResolution);\n    }\n\n    vUV = aUV;\n    vColor = vec4(aColor.rgb * aColor.a, aColor.a) * uColor;\n}\n";
    })))();
}
var Dt;
function Ot() {
    return (Ot = e.n((function () {
        Dt = "\nstruct ParticleUniforms {\n  uTranslationMatrix:mat3x3<f32>,\n  uColor:vec4<f32>,\n  uRound:f32,\n  uResolution:vec2<f32>,\n};\n\nfn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32>\n{\n  return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;\n}\n\n@group(0) @binding(0) var<uniform> uniforms: ParticleUniforms;\n\n@group(1) @binding(0) var uTexture: texture_2d<f32>;\n@group(1) @binding(1) var uSampler : sampler;\n\nstruct VSOutput {\n    @builtin(position) position: vec4<f32>,\n    @location(0) uv : vec2<f32>,\n    @location(1) color : vec4<f32>,\n  };\n@vertex\nfn mainVertex(\n  @location(0) aVertex: vec2<f32>,\n  @location(1) aPosition: vec2<f32>,\n  @location(2) aUV: vec2<f32>,\n  @location(3) aColor: vec4<f32>,\n  @location(4) aRotation: f32,\n) -> VSOutput {\n  \n   let v = vec2(\n       aVertex.x * cos(aRotation) - aVertex.y * sin(aRotation),\n       aVertex.x * sin(aRotation) + aVertex.y * cos(aRotation)\n   ) + aPosition;\n\n   var position = vec4((uniforms.uTranslationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);\n\n   if(uniforms.uRound == 1.0) {\n       position = vec4(roundPixels(position.xy, uniforms.uResolution), position.zw);\n   }\n\n    let vColor = vec4(aColor.rgb * aColor.a, aColor.a) * uniforms.uColor;\n\n  return VSOutput(\n   position,\n   aUV,\n   vColor,\n  );\n}\n\n@fragment\nfn mainFragment(\n  @location(0) uv: vec2<f32>,\n  @location(1) color: vec4<f32>,\n  @builtin(position) position: vec4<f32>,\n) -> @location(0) vec4<f32> {\n\n    var sample = textureSample(uTexture, uSampler, uv) * color;\n   \n    return sample;\n}";
    })))();
}
var kt;
function At() { return (At = e.n((function () { i.B(), a.x(), l.P(), l.M(), s.J(), s._t(), s.Tt(), wt(), Et(), Ot(), kt = (function (_super) {
    __extends(kt, _super);
    function kt() {
        var e = l.N.from({ vertex: Tt, fragment: Ct }), t = l.j.from({ fragment: { source: Dt, entryPoint: "mainFragment" }, vertex: { source: Dt, entryPoint: "mainVertex" } });
        return _super.call(this, { glProgram: e, gpuProgram: t, resources: { uTexture: s.gt.WHITE.source, uSampler: new s.wt({}), uniforms: { uTranslationMatrix: { value: new a.b, type: "mat3x3<f32>" }, uColor: { value: new i.z(16777215), type: "vec4<f32>" }, uRound: { value: 1, type: "f32" }, uResolution: { value: [0, 0], type: "vec2<f32>" } } } }) || this;
    }
    return kt;
}(s.q)); })))(); }
var jt;
function Mt() { return (Mt = e.n((function () { i.q(), a.x(), s.Q(), s.L(), s.K(), o.f(), St(), At(), jt = (function () {
    function jt(e, t) {
        this.state = s.G.for2d(), this.localUniforms = new s.Z({ uTranslationMatrix: { value: new a.b, type: "mat3x3<f32>" }, uColor: { value: new Float32Array(4), type: "vec4<f32>" }, uRound: { value: 1, type: "f32" }, uResolution: { value: [0, 0], type: "vec2<f32>" } }), this.renderer = e, this.adaptor = t, this.defaultShader = new kt, this.state = s.G.for2d(), this._managedContainers = new o.d({ renderer: e, type: "renderable", name: "particleContainer" });
    }
    jt.prototype.validateRenderable = function (e) { return !1; };
    jt.prototype.addRenderable = function (e, t) { this.renderer.renderPipes.batch.break(t), t.add(e); };
    jt.prototype.getBuffers = function (e) { return e._gpuData[this.renderer.uid] || this._initBuffer(e); };
    jt.prototype._initBuffer = function (e) { return e._gpuData[this.renderer.uid] = new xt({ size: e.particleChildren.length, properties: e._properties }), this._managedContainers.add(e), e._gpuData[this.renderer.uid]; };
    jt.prototype.updateRenderable = function (e) { };
    jt.prototype.execute = function (e) { var t = e.particleChildren; if (t.length === 0)
        return; var n = this.renderer, r = this.getBuffers(e); e.texture || (e.texture = t[0].texture); var i = this.state; r.update(t, e._childrenDirty), e._childrenDirty = !1, i.blendMode = s.I(e.groupBlendMode, e.texture._source); var a = this.localUniforms.uniforms, o = a.uTranslationMatrix; e.worldTransform.copyTo(o); var l = n.globalUniforms.globalUniformData; o.tx -= l.offset.x, o.ty -= l.offset.y, o.prepend(l.projectionMatrix), a.uResolution = l.resolution, a.uRound = n._roundPixels | e._roundPixels; var u = e.groupColorAlpha, d = l.worldColor, f = (u >>> 24) * (d >>> 24) / 255 | 0, p = c.T(u & 16777215, d & 16777215); c.u((f << 24 | p) >>> 0, a.uColor, 0), this.adaptor.execute(this, e); };
    jt.prototype.destroy = function () { this._managedContainers.destroy(), this.renderer = null, this.defaultShader && (this.defaultShader.destroy(), this.defaultShader = null); };
    return jt;
}()), jt.extension = { type: [i.G.CanvasPipes], name: "particle" }; })))(); }
var Nt;
function Pt() { return (Pt = e.n((function () { i.q(), Mt(), ht(), Nt = (function (_super) {
    __extends(Nt, _super);
    function Nt(e) {
        return _super.call(this, e, new mt) || this;
    }
    return Nt;
}(jt)), Nt.extension = { type: [i.G.CanvasPipes], name: "particle" }; })))(); }
var Ft;
function It() { return (It = e.n((function () { Ft = (function () {
    function Ft() {
    }
    Ft.prototype.execute = function (e, t) { var n = e.state, r = e.renderer, i = t.shader || e.defaultShader; i.resources.uTexture = t.texture._source, i.resources.uniforms = e.localUniforms; var a = r.gl, o = e.getBuffers(t); r.shader.bind(i), r.state.set(n), r.geometry.bind(o.geometry, i.glProgram); var s = o.geometry.indexBuffer.data.BYTES_PER_ELEMENT === 2 ? a.UNSIGNED_SHORT : a.UNSIGNED_INT; a.drawElements(a.TRIANGLES, t.particleChildren.length * 6, s, 0); };
    return Ft;
}()); })))(); }
var Lt;
function Rt() { return (Rt = e.n((function () { i.q(), It(), Mt(), Lt = (function (_super) {
    __extends(Lt, _super);
    function Lt(e) {
        return _super.call(this, e, new Ft) || this;
    }
    return Lt;
}(jt)), Lt.extension = { type: [i.G.WebGLPipes], name: "particle" }; })))(); }
var zt;
function Bt() { return (Bt = e.n((function () { zt = (function () {
    function zt() {
    }
    zt.prototype.execute = function (e, t) { var n = e.renderer, r = t.shader || e.defaultShader; r.groups[0] = n.renderPipes.uniformBatch.getUniformBindGroup(e.localUniforms, !0), r.groups[1] = n.texture.getTextureBindGroup(t.texture); var i = e.state, a = e.getBuffers(t); n.encoder.draw({ geometry: a.geometry, shader: t.shader || e.defaultShader, state: i, size: t.particleChildren.length * 6 }); };
    return zt;
}()); })))(); }
var Vt;
function Ht() { return (Ht = e.n((function () { i.q(), Bt(), Mt(), Vt = (function (_super) {
    __extends(Vt, _super);
    function Vt(e) {
        return _super.call(this, e, new zt) || this;
    }
    return Vt;
}(jt)), Vt.extension = { type: [i.G.WebGPUPipes], name: "particle" }; })))(); }
var Ut, Wt;
function Gt() { return (Gt = e.n((function () { i.B(), s._t(), c.C(), n.br(), Ut = (function () {
    function e(t) {
        if (t instanceof s.gt)
            this.texture = t, c.g(this, e.defaultOptions, {});
        else {
            var r_30 = n.yr(n.yr({}, e.defaultOptions), t);
            c.g(this, r_30, {});
        }
    }
    Object.defineProperty(e.prototype, "alpha", {
        get: function () { return this._alpha; },
        set: function (e) { this._alpha = Math.min(Math.max(e, 0), 1), this._updateColor(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "tint", {
        get: function () { return c.S(this._tint); },
        set: function (e) { this._tint = i.z.shared.setValue(e == null ? 16777215 : e).toBgrNumber(), this._updateColor(); },
        enumerable: false,
        configurable: true
    });
    e.prototype._updateColor = function () { this.color = this._tint + ((this._alpha * 255 | 0) << 24); };
    return e;
}()), Ut.defaultOptions = { anchorX: 0, anchorY: 0, x: 0, y: 0, scaleX: 1, scaleY: 1, rotation: 0, tint: 16777215, alpha: 1 }, Wt = Ut; })))(); }
var Kt;
function qt() {
    return (qt = e.n((function () {
        Kt = { vertex: { attributeName: "aVertex", format: "float32x2", code: "\n            const texture = p.texture;\n            const sx = p.scaleX;\n            const sy = p.scaleY;\n            const ax = p.anchorX;\n            const ay = p.anchorY;\n            const trim = texture.trim;\n            const orig = texture.orig;\n\n            if (trim)\n            {\n                w1 = trim.x - (ax * orig.width);\n                w0 = w1 + trim.width;\n\n                h1 = trim.y - (ay * orig.height);\n                h0 = h1 + trim.height;\n            }\n            else\n            {\n                w1 = -ax * (orig.width);\n                w0 = w1 + orig.width;\n\n                h1 = -ay * (orig.height);\n                h0 = h1 + orig.height;\n            }\n\n            f32v[offset] = w1 * sx;\n            f32v[offset + 1] = h1 * sy;\n\n            f32v[offset + stride] = w0 * sx;\n            f32v[offset + stride + 1] = h1 * sy;\n\n            f32v[offset + (stride * 2)] = w0 * sx;\n            f32v[offset + (stride * 2) + 1] = h0 * sy;\n\n            f32v[offset + (stride * 3)] = w1 * sx;\n            f32v[offset + (stride * 3) + 1] = h0 * sy;\n        ", dynamic: !1 }, position: { attributeName: "aPosition", format: "float32x2", code: "\n            var x = p.x;\n            var y = p.y;\n\n            f32v[offset] = x;\n            f32v[offset + 1] = y;\n\n            f32v[offset + stride] = x;\n            f32v[offset + stride + 1] = y;\n\n            f32v[offset + (stride * 2)] = x;\n            f32v[offset + (stride * 2) + 1] = y;\n\n            f32v[offset + (stride * 3)] = x;\n            f32v[offset + (stride * 3) + 1] = y;\n        ", dynamic: !0 }, rotation: { attributeName: "aRotation", format: "float32", code: "\n            var rotation = p.rotation;\n\n            f32v[offset] = rotation;\n            f32v[offset + stride] = rotation;\n            f32v[offset + (stride * 2)] = rotation;\n            f32v[offset + (stride * 3)] = rotation;\n        ", dynamic: !1 }, uvs: { attributeName: "aUV", format: "float32x2", code: "\n            var uvs = p.texture.uvs;\n\n            f32v[offset] = uvs.x0;\n            f32v[offset + 1] = uvs.y0;\n\n            f32v[offset + stride] = uvs.x1;\n            f32v[offset + stride + 1] = uvs.y1;\n\n            f32v[offset + (stride * 2)] = uvs.x2;\n            f32v[offset + (stride * 2) + 1] = uvs.y2;\n\n            f32v[offset + (stride * 3)] = uvs.x3;\n            f32v[offset + (stride * 3) + 1] = uvs.y3;\n        ", dynamic: !1 }, color: { attributeName: "aColor", format: "unorm8x4", code: "\n            const c = p.color;\n\n            u32v[offset] = c;\n            u32v[offset + stride] = c;\n            u32v[offset + (stride * 2)] = c;\n            u32v[offset + (stride * 3)] = c;\n        ", dynamic: !1 } };
    })))();
}
function Jt() { return (Jt = e.n((function () { i.q(), Pt(), Rt(), Ht(), i.K.add(Lt), i.K.add(Vt), i.K.add(Nt); })))(); }
var Yt, Xt, Zt, Qt;
function $t() { return ($t = e.n((function () { c.M(), p(), qt(), Jt(), n.br(), r.o(), Yt = ["dynamicProperties", "shader", "roundPixels", "texture", "particles"], Xt = new c.j(0, 0, 0, 0), Zt = (function (_super) {
    __extends(e, _super);
    function e(t) {
        if (t === void 0) { t = {}; }
        var _this = this;
        t = n.yr(n.yr(n.yr({}, e.defaultOptions), t), {}, { dynamicProperties: n.yr(n.yr({}, e.defaultOptions.dynamicProperties), t == null ? void 0 : t.dynamicProperties) });
        var i = t.dynamicProperties, a = t.shader, o = t.roundPixels, s = t.texture, c = t.particles, l = r.a(t, Yt);
        _this = _super.call(this, n.yr({ label: "ParticleContainer" }, l)) || this, _this.renderPipeId = "particle", _this.batched = !1, _this._childrenDirty = !1, _this.texture = s || null, _this.shader = a, _this._properties = {};
        for (var e_70 in Kt) {
            var t_49 = Kt[e_70], r_31 = i[e_70];
            _this._properties[e_70] = n.yr(n.yr({}, t_49), {}, { dynamic: r_31 });
        }
        _this.allowChildren = !0, _this.roundPixels = o != null && o, _this.particleChildren = c == null ? [] : c;
        return _this;
    }
    e.prototype.addParticle = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        for (var t_50 = 0; t_50 < e.length; t_50++)
            this.particleChildren.push(e[t_50]);
        return this.onViewUpdate(), e[0];
    };
    e.prototype.removeParticle = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        var t = !1;
        for (var n_35 = 0; n_35 < e.length; n_35++) {
            var r_32 = this.particleChildren.indexOf(e[n_35]);
            r_32 > -1 && (this.particleChildren.splice(r_32, 1), t = !0);
        }
        return t && this.onViewUpdate(), e[0];
    };
    e.prototype.update = function () { this._childrenDirty = !0; };
    e.prototype.onViewUpdate = function () { this._childrenDirty = !0, _super.prototype.onViewUpdate.call(this); };
    Object.defineProperty(e.prototype, "bounds", {
        get: function () { return Xt; },
        enumerable: false,
        configurable: true
    });
    e.prototype.updateBounds = function () { };
    e.prototype.destroy = function (e) {
        if (e === void 0) { e = !1; }
        var t;
        if (_super.prototype.destroy.call(this, e), typeof e == "boolean" ? e : e != null && e.texture) {
            var n, r;
            var t_51 = typeof e == "boolean" ? e : e == null ? void 0 : e.textureSource, i_14 = (n = this.texture) == null ? (r = this.particleChildren[0]) == null ? void 0 : r.texture : n;
            i_14 && i_14.destroy(t_51);
        }
        this.texture = null, (t = this.shader) == null || t.destroy();
    };
    e.prototype.removeParticles = function (e, t) { e != null || (e = 0), t != null || (t = this.particleChildren.length); var n = this.particleChildren.splice(e, t - e); return this.onViewUpdate(), n; };
    e.prototype.removeParticleAt = function (e) { var t = this.particleChildren.splice(e, 1); return this.onViewUpdate(), t[0]; };
    e.prototype.addParticleAt = function (e, t) { return this.particleChildren.splice(t, 0, e), this.onViewUpdate(), e; };
    e.prototype.addChild = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        throw Error("ParticleContainer.addChild() is not available. Please use ParticleContainer.addParticle()");
    };
    e.prototype.removeChild = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        throw Error("ParticleContainer.removeChild() is not available. Please use ParticleContainer.removeParticle()");
    };
    e.prototype.removeChildren = function (e, t) { throw Error("ParticleContainer.removeChildren() is not available. Please use ParticleContainer.removeParticles()"); };
    e.prototype.removeChildAt = function (e) { throw Error("ParticleContainer.removeChildAt() is not available. Please use ParticleContainer.removeParticleAt()"); };
    e.prototype.getChildAt = function (e) { throw Error("ParticleContainer.getChildAt() is not available. Please use ParticleContainer.getParticleAt()"); };
    e.prototype.setChildIndex = function (e, t) { throw Error("ParticleContainer.setChildIndex() is not available. Please use ParticleContainer.setParticleIndex()"); };
    e.prototype.getChildIndex = function (e) { throw Error("ParticleContainer.getChildIndex() is not available. Please use ParticleContainer.getParticleIndex()"); };
    e.prototype.addChildAt = function (e, t) { throw Error("ParticleContainer.addChildAt() is not available. Please use ParticleContainer.addParticleAt()"); };
    e.prototype.swapChildren = function (e, t) { throw Error("ParticleContainer.swapChildren() is not available. Please use ParticleContainer.swapParticles()"); };
    e.prototype.reparentChild = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        throw Error("ParticleContainer.reparentChild() is not available with the particle container");
    };
    e.prototype.reparentChildAt = function (e, t) { throw Error("ParticleContainer.reparentChildAt() is not available with the particle container"); };
    return e;
}(f)), Zt.defaultOptions = { dynamicProperties: { vertex: !1, position: !0, rotation: !1, uvs: !1, color: !1 }, roundPixels: !1 }, Qt = Zt; })))(); }
function en(e, t, n, r, i, a, o) { e[0][0] = t, e[0][1] = n, e[1][0] = r, e[1][1] = i, e[2][0] = a, e[2][1] = o; }
var tn, nn, rn, an, on;
function sn() { return (sn = e.n((function () { i.q(), l.w(), c.C(), tn = [[0, 0], [0, 0], [0, 0]], nn = [[0, 0], [0, 0], [0, 0]], rn = [[0, 0], [0, 0], [0, 0]], an = [[0, 0], [0, 0], [0, 0]], on = (function () {
    function on(e) {
        this._renderer = e;
    }
    on.prototype.validateRenderable = function (e) { return !1; };
    on.prototype.addRenderable = function (e, t) { this._renderer.renderPipes.batch.break(t), t.add(e); };
    on.prototype.updateRenderable = function (e) { };
    on.prototype.execute = function (e) { var t, n, r, i, a, o; var s = this._renderer, u = s.canvasContext, d = u.activeContext; d.save(); var f = e.groupTransform, p = s._roundPixels | e._roundPixels; u.setContextTransform(f, p === 1), u.setBlendMode(e.groupBlendMode); var m = (t = (n = s.globalUniforms.globalUniformData) == null ? void 0 : n.worldColor) == null ? 4294967295 : t, h = e.groupColorAlpha, g = (m >>> 24 & 255) / 255, _ = (h >>> 24 & 255) / 255, v = (r = (i = s.filter) == null ? void 0 : i.alphaMultiplier) == null ? 1 : r, y = g * _ * v; if (y <= 0) {
        d.restore();
        return;
    } d.globalAlpha = y; var b = m & 16777215, x = h & 16777215, S = c.S(c.T(x, b)), C = e.texture, w = l.C.getCanvasSource(C); if (!w) {
        d.restore();
        return;
    } var T = u.smoothProperty, E = C.source.style.scaleMode !== "nearest"; d[T] !== E && (d[T] = E); var D = S !== 16777215 || C.rotate !== 0, O = D ? l.C.getTintedCanvas({ texture: C }, S) : w, k = e.leftWidth, A = e.topHeight, j = e.rightWidth, M = e.bottomHeight, N = e.width, P = e.height, ee = k + j, te = A + M, F = Math.min(ee > N ? N / ee : 1, te > P ? P / te : 1, 1), I = k * F, ne = j * F, re = A * F, ie = M * F, ae = Math.max(0, N - I - ne), oe = Math.max(0, P - re - ie), se = e.anchor, L = (a = (o = C.source._resolution) == null ? C.source.resolution : o) == null ? 1 : a, R = C.frame.x * L, z = C.frame.y * L, B = -se.x * N, V = -se.y * P, H = k * L, U = A * L, W = j * L, G = M * L, K = C.frame.width * L, q = C.frame.height * L; D && (R = 0, z = 0, K = O.width, q = O.height); var J = K - H - W, ce = q - U - G, le = J > 0 ? R + H : Math.max(R, Math.min(R + H, R + K - 1)), ue = J > 0 ? J : 1, de = ce > 0 ? z + U : Math.max(z, Math.min(z + U, z + q - 1)), fe = ce > 0 ? ce : 1; en(tn, R, H, le, ue, R + K - W, W), en(nn, z, U, de, fe, z + q - G, G), en(rn, B, I, B + I, ae, B + N - ne, ne), en(an, V, re, V + re, oe, V + P - ie, ie); for (var e_71 = 0; e_71 < 3; e_71++) {
        var t_52 = rn[e_71][1];
        if (t_52 <= 0)
            continue;
        var n_36 = tn[e_71][0], r_33 = tn[e_71][1], i_15 = rn[e_71][0];
        for (var e_72 = 0; e_72 < 3; e_72++) {
            var a_16 = an[e_72][1];
            a_16 <= 0 || d.drawImage(O, n_36, nn[e_72][0], r_33, nn[e_72][1], i_15, an[e_72][0], t_52, a_16);
        }
    } d.restore(); };
    on.prototype.destroy = function () { this._renderer = null; };
    return on;
}()), on.extension = { type: [i.G.CanvasPipes], name: "nineSliceSprite" }; })))(); }
var cn, $;
function ln() { return (ln = e.n((function () { pt(), n.br(), cn = (function (_super) {
    __extends(e, _super);
    function e(t) {
        if (t === void 0) { t = {}; }
        var _this = this;
        var r, i;
        t = n.yr(n.yr({}, e.defaultOptions), t), _this = _super.call(this, { width: t.width, height: t.height, verticesX: 4, verticesY: 4 }) || this, _this._trimX = 0, _this._trimY = 0, _this._trimWidth = (r = t.originalWidth) == null ? e.defaultOptions.originalWidth : r, _this._trimHeight = (i = t.originalHeight) == null ? e.defaultOptions.originalHeight : i, _this.update(t);
        return _this;
    }
    e.prototype.update = function (e) { var t, n, r, i, a, o, s, c, l, u; if (this.width = (t = e.width) == null ? this.width : t, this.height = (n = e.height) == null ? this.height : n, this._originalWidth = (r = e.originalWidth) == null ? this._originalWidth : r, this._originalHeight = (i = e.originalHeight) == null ? this._originalHeight : i, this._leftWidth = (a = e.leftWidth) == null ? this._leftWidth : a, this._rightWidth = (o = e.rightWidth) == null ? this._rightWidth : o, this._topHeight = (s = e.topHeight) == null ? this._topHeight : s, this._bottomHeight = (c = e.bottomHeight) == null ? this._bottomHeight : c, this._anchorX = (l = e.anchor) == null ? void 0 : l.x, this._anchorY = (u = e.anchor) == null ? void 0 : u.y, e.trim !== void 0) {
        var d, f, p, m, h, g, _, v;
        this._trimX = (d = (f = e.trim) == null ? void 0 : f.x) == null ? 0 : d, this._trimY = (p = (m = e.trim) == null ? void 0 : m.y) == null ? 0 : p, this._trimWidth = (h = (g = e.trim) == null ? void 0 : g.width) == null ? this._originalWidth : h, this._trimHeight = (_ = (v = e.trim) == null ? void 0 : v.height) == null ? this._originalHeight : _;
    }
    else
        this._trimWidth = this._originalWidth, this._trimHeight = this._originalHeight; this.updateUvs(), this.updatePositions(); };
    e.prototype.updatePositions = function () { var e = this.positions, _a = this, t = _a.width, n = _a.height, r = _a._leftWidth, i = _a._rightWidth, a = _a._topHeight, o = _a._bottomHeight, s = _a._anchorX, c = _a._anchorY, l = r + i, u = t > l ? 1 : t / l, d = a + o, f = n > d ? 1 : n / d, p = Math.min(u, f), m = s * t, h = c * n; e[0] = e[8] = e[16] = e[24] = -m, e[2] = e[10] = e[18] = e[26] = r * p - m, e[4] = e[12] = e[20] = e[28] = t - i * p - m, e[6] = e[14] = e[22] = e[30] = t - m, e[1] = e[3] = e[5] = e[7] = -h, e[9] = e[11] = e[13] = e[15] = a * p - h, e[17] = e[19] = e[21] = e[23] = n - o * p - h, e[25] = e[27] = e[29] = e[31] = n - h, this.getBuffer("aPosition").update(); };
    e.prototype.updateUvs = function () { var e = this.uvs, t = this._originalWidth, n = this._originalHeight, r = this._trimX / t, i = this._trimY / n, a = (this._trimX + this._trimWidth) / t, o = (this._trimY + this._trimHeight) / n; e[0] = e[8] = e[16] = e[24] = r, e[1] = e[3] = e[5] = e[7] = i, e[6] = e[14] = e[22] = e[30] = a, e[25] = e[27] = e[29] = e[31] = o; var s = 1 / t, c = 1 / n; e[2] = e[10] = e[18] = e[26] = r + s * this._leftWidth, e[9] = e[11] = e[13] = e[15] = i + c * this._topHeight, e[4] = e[12] = e[20] = e[28] = a - s * this._rightWidth, e[17] = e[19] = e[21] = e[23] = o - c * this._bottomHeight, this.getBuffer("aUV").update(); };
    return e;
}(ft)), cn.defaultOptions = { width: 100, height: 100, leftWidth: 10, topHeight: 10, rightWidth: 10, bottomHeight: 10, originalWidth: 100, originalHeight: 100 }, $ = cn; })))(); }
var un, dn;
function fn() { return (fn = e.n((function () { i.q(), o.f(), M(), ln(), un = (function (_super) {
    __extends(un, _super);
    function un() {
        var _this = this;
        _this = _super.call(this) || this, _this.geometry = new $;
        return _this;
    }
    un.prototype.destroy = function () { this.geometry.destroy(); };
    return un;
}(j)), dn = (function () {
    function dn(e) {
        this._renderer = e, this._managedSprites = new o.d({ renderer: e, type: "renderable", name: "nineSliceSprite" });
    }
    dn.prototype.addRenderable = function (e, t) { var n = this._getGpuSprite(e); e.didViewUpdate && this._updateBatchableSprite(e, n), this._renderer.renderPipes.batch.addToBatch(n, t); };
    dn.prototype.updateRenderable = function (e) { var t = this._getGpuSprite(e); e.didViewUpdate && this._updateBatchableSprite(e, t), t._batcher.updateElement(t); };
    dn.prototype.validateRenderable = function (e) { var t = this._getGpuSprite(e); return !t._batcher.checkAndUpdateTexture(t, e._texture); };
    dn.prototype._updateBatchableSprite = function (e, t) { t.geometry.update(e), t.setTexture(e._texture); };
    dn.prototype._getGpuSprite = function (e) { return e._gpuData[this._renderer.uid] || this._initGPUSprite(e); };
    dn.prototype._initGPUSprite = function (e) { var t = e._gpuData[this._renderer.uid] = new un, n = t; return n.renderable = e, n.transform = e.groupTransform, n.texture = e._texture, n.roundPixels = this._renderer._roundPixels | e._roundPixels, this._managedSprites.add(e), e.didViewUpdate || this._updateBatchableSprite(e, n), t; };
    dn.prototype.destroy = function () { this._managedSprites.destroy(), this._renderer = null; };
    return dn;
}()), dn.extension = { type: [i.G.WebGLPipes, i.G.WebGPUPipes], name: "nineSliceSprite" }; })))(); }
function pn() { return (pn = e.n((function () { i.q(), sn(), fn(), i.K.add(on), i.K.add(dn); })))(); }
var mn, hn, gn;
function _n() { return (_n = e.n((function () { a.O(), s._t(), p(), ln(), pn(), r.o(), n.br(), mn = ["width", "height", "anchor", "leftWidth", "rightWidth", "topHeight", "bottomHeight", "texture", "roundPixels"], hn = (function (_super) {
    __extends(e, _super);
    function e(t) {
        var _this = this;
        var i, o, c, l, u, d, f, p, m, h;
        t instanceof s.gt && (t = { texture: t });
        var g = t.width, _ = t.height, v = t.anchor, y = t.leftWidth, b = t.rightWidth, x = t.topHeight, S = t.bottomHeight, C = t.texture, w = t.roundPixels, T = r.a(t, mn);
        _this = _super.call(this, n.yr({ label: "NineSliceSprite" }, T)) || this, _this.renderPipeId = "nineSliceSprite", _this.batched = !0, _this._leftWidth = (i = y == null ? C == null || (o = C.defaultBorders) == null ? void 0 : o.left : y) == null ? $.defaultOptions.leftWidth : i, _this._topHeight = (c = x == null ? C == null || (l = C.defaultBorders) == null ? void 0 : l.top : x) == null ? $.defaultOptions.topHeight : c, _this._rightWidth = (u = b == null ? C == null || (d = C.defaultBorders) == null ? void 0 : d.right : b) == null ? $.defaultOptions.rightWidth : u, _this._bottomHeight = (f = S == null ? C == null || (p = C.defaultBorders) == null ? void 0 : p.bottom : S) == null ? $.defaultOptions.bottomHeight : f, _this._width = (m = g == null ? C.width : g) == null ? $.defaultOptions.width : m, _this._height = (h = _ == null ? C.height : _) == null ? $.defaultOptions.height : h, _this.allowChildren = !1, _this.texture = C == null ? e.defaultOptions.texture : C, _this.roundPixels = w != null && w, _this._anchor = new a.D({ _onUpdate: function () { _this.onViewUpdate(); } }), v ? _this.anchor = v : _this.texture.defaultAnchor && (_this.anchor = _this.texture.defaultAnchor);
        return _this;
    }
    Object.defineProperty(e.prototype, "anchor", {
        get: function () { return this._anchor; },
        set: function (e) { typeof e == "number" ? this._anchor.set(e) : this._anchor.copyFrom(e); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "width", {
        get: function () { return this._width; },
        set: function (e) { this._width = e, this.onViewUpdate(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "height", {
        get: function () { return this._height; },
        set: function (e) { this._height = e, this.onViewUpdate(); },
        enumerable: false,
        configurable: true
    });
    e.prototype.setSize = function (e, t) { var n; if (typeof e == "object") {
        var r;
        t = (r = e.height) == null ? e.width : r, e = e.width;
    } this._width = e, this._height = (n = t) == null ? e : n, this.onViewUpdate(); };
    e.prototype.getSize = function (e) { return e || (e = {}), e.width = this._width, e.height = this._height, e; };
    Object.defineProperty(e.prototype, "leftWidth", {
        get: function () { return this._leftWidth; },
        set: function (e) { this._leftWidth = e, this.onViewUpdate(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "topHeight", {
        get: function () { return this._topHeight; },
        set: function (e) { this._topHeight = e, this.onViewUpdate(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "rightWidth", {
        get: function () { return this._rightWidth; },
        set: function (e) { this._rightWidth = e, this.onViewUpdate(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "bottomHeight", {
        get: function () { return this._bottomHeight; },
        set: function (e) { this._bottomHeight = e, this.onViewUpdate(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "texture", {
        get: function () { return this._texture; },
        set: function (e) { e || (e = s.gt.EMPTY); var t = this._texture; t !== e && (t && t.dynamic && t.off("update", this.onViewUpdate, this), e.dynamic && e.on("update", this.onViewUpdate, this), this._texture = e, this.onViewUpdate()); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "originalWidth", {
        get: function () { return this._texture.width; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "originalHeight", {
        get: function () { return this._texture.height; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "trim", {
        get: function () { var e; return (e = this._texture.trim) == null ? null : e; },
        enumerable: false,
        configurable: true
    });
    e.prototype.destroy = function (e) { if (_super.prototype.destroy.call(this, e), typeof e == "boolean" ? e : e != null && e.texture) {
        var t_53 = typeof e == "boolean" ? e : e == null ? void 0 : e.textureSource;
        this._texture.destroy(t_53);
    } this._texture = null; };
    e.prototype.updateBounds = function () { var e = this._bounds, t = this._anchor, n = this._width, r = this._height; e.minX = -t._x * n, e.maxX = e.minX + n, e.minY = -t._y * r, e.maxY = e.minY + r; };
    return e;
}(f)), hn.defaultOptions = { texture: s.gt.EMPTY }, gn = hn; })))(); }
Object.defineProperty(exports, "C", { enumerable: !0, get: function () { return T; } }), Object.defineProperty(exports, "D", { enumerable: !0, get: function () { return g; } }), Object.defineProperty(exports, "E", { enumerable: !0, get: function () { return h; } }), Object.defineProperty(exports, "O", { enumerable: !0, get: function () { return f; } }), Object.defineProperty(exports, "S", { enumerable: !0, get: function () { return A; } }), Object.defineProperty(exports, "T", { enumerable: !0, get: function () { return w; } }), Object.defineProperty(exports, "_", { enumerable: !0, get: function () { return Ke; } }), Object.defineProperty(exports, "a", { enumerable: !0, get: function () { return $t; } }), Object.defineProperty(exports, "b", { enumerable: !0, get: function () { return ne; } }), Object.defineProperty(exports, "c", { enumerable: !0, get: function () { return Gt; } }), Object.defineProperty(exports, "d", { enumerable: !0, get: function () { return lt; } }), Object.defineProperty(exports, "f", { enumerable: !0, get: function () { return ut; } }), Object.defineProperty(exports, "g", { enumerable: !0, get: function () { return ot; } }), Object.defineProperty(exports, "h", { enumerable: !0, get: function () { return at; } }), Object.defineProperty(exports, "i", { enumerable: !0, get: function () { return Qt; } }), Object.defineProperty(exports, "k", { enumerable: !0, get: function () { return p; } }), Object.defineProperty(exports, "l", { enumerable: !0, get: function () { return xt; } }), Object.defineProperty(exports, "m", { enumerable: !0, get: function () { return ct; } }), Object.defineProperty(exports, "n", { enumerable: !0, get: function () { return _n; } }), Object.defineProperty(exports, "o", { enumerable: !0, get: function () { return Jt; } }), Object.defineProperty(exports, "p", { enumerable: !0, get: function () { return st; } }), Object.defineProperty(exports, "r", { enumerable: !0, get: function () { return pn; } }), Object.defineProperty(exports, "s", { enumerable: !0, get: function () { return Wt; } }), Object.defineProperty(exports, "t", { enumerable: !0, get: function () { return gn; } }), Object.defineProperty(exports, "u", { enumerable: !0, get: function () { return St; } }), Object.defineProperty(exports, "v", { enumerable: !0, get: function () { return qe; } }), Object.defineProperty(exports, "w", { enumerable: !0, get: function () { return D; } }), Object.defineProperty(exports, "x", { enumerable: !0, get: function () { return k; } }), Object.defineProperty(exports, "y", { enumerable: !0, get: function () { return I; } });
