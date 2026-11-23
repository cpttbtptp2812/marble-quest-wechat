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
var e = require("./rolldown-runtime-8PkXcCTM.js"), t = require("./sapling-engine-C5cpr8KZ.js"), n = require("./sapling-engine-OS5i6gdH.js"), r = require("./sapling-engine-Dk_0uYx9.js"), i = require("./sapling-engine-nIouhjEF.js"), a = require("./sapling-engine-BKSSueUl.js"), o = require("./sapling-engine-sX7qVz9U.js"), s = require("./sapling-engine-DdkTJwUg.js"), c = require("./sapling-engine-6sEQUsKX.js"), l = require("./sapling-engine-DRXIDWb4.js"), u = require("./sapling-engine-DkqQT0bo.js");
var d;
function f() { return (f = e.n((function () { s.M(), s.h(), d = (function (_super) {
    __extends(d, _super);
    function d(e) {
        var _this = this;
        var t;
        _this = _super.call(this, e) || this, _this.canBundle = !0, _this.allowChildren = !1, _this._roundPixels = 0, _this._lastUsed = -1, _this._gpuData = Object.create(null), _this.autoGarbageCollect = !0, _this._gcLastUsed = -1, _this._bounds = new s.j(0, 1, 0, 0), _this._boundsDirty = !0, _this.autoGarbageCollect = (t = e.autoGarbageCollect) == null || t;
        return _this;
    }
    Object.defineProperty(d.prototype, "bounds", {
        get: function () { return this._boundsDirty && (this.updateBounds(), this._boundsDirty = !1), this._bounds; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(d.prototype, "roundPixels", {
        get: function () { return !!this._roundPixels; },
        set: function (e) { this._roundPixels = +!!e; },
        enumerable: false,
        configurable: true
    });
    d.prototype.containsPoint = function (e) { var t = this.bounds, n = e.x, r = e.y; return n >= t.minX && n <= t.maxX && r >= t.minY && r <= t.maxY; };
    d.prototype.onViewUpdate = function () { if (this._didViewChangeTick++, this._boundsDirty = !0, this.didViewUpdate)
        return; this.didViewUpdate = !0; var e = this.renderGroup || this.parentRenderGroup; e && e.onChildViewUpdate(this); };
    d.prototype.unload = function () { this.emit("unload", this); for (var t_1 in this._gpuData) {
        var e;
        (e = this._gpuData[t_1]) == null || e.destroy();
    } this._gpuData = Object.create(null), this.onViewUpdate(); };
    d.prototype.destroy = function (e) { this.unload(), _super.prototype.destroy.call(this, e), this._bounds = null; };
    d.prototype.collectRenderablesSimple = function (e, t, n) { var r = t.renderPipes; r.blendMode.pushBlendMode(this, this.groupBlendMode, e); var i = r[this.renderPipeId]; i != null && i.addRenderable && i.addRenderable(this, e), this.didViewUpdate = !1; var a = this.children, o = a.length; for (var r_1 = 0; r_1 < o; r_1++)
        a[r_1].collectRenderables(e, t, n); r.blendMode.popBlendMode(e); };
    return d;
}(s.m)); })))(); }
var p, m;
function h() { return (h = e.n((function () { i.O(), o._t(), a.W(), f(), n.i(), n.o(), p = ["texture", "anchor", "roundPixels", "width", "height"], m = (function (_super) {
    __extends(e, _super);
    function e(e) {
        if (e === void 0) { e = o.gt.EMPTY; }
        var _this = this;
        e instanceof o.gt && (e = { texture: e });
        var _a = e.texture, t = _a === void 0 ? o.gt.EMPTY : _a, r = e.anchor, a = e.roundPixels, s = e.width, c = e.height, l = n.r(e, p);
        _this = _super.call(this, n.a({ label: "Sprite" }, l)) || this, _this.renderPipeId = "sprite", _this.batched = !0, _this._visualBounds = { minX: 0, maxX: 1, minY: 0, maxY: 0 }, _this._anchor = new i.D({ _onUpdate: function () { _this.onViewUpdate(); } }), r ? _this.anchor = r : t.defaultAnchor && (_this.anchor = t.defaultAnchor), _this.texture = t, _this.allowChildren = !1, _this.roundPixels = a != null && a, s !== void 0 && (_this.width = s), c !== void 0 && (_this.height = c);
        return _this;
    }
    e.from = function (t, n) {
        if (n === void 0) { n = !1; }
        return t instanceof o.gt ? new e(t) : new e(o.gt.from(t, n));
    };
    Object.defineProperty(e.prototype, "texture", {
        get: function () { return this._texture; },
        set: function (e) { e || (e = o.gt.EMPTY); var t = this._texture; t !== e && (t && t.dynamic && t.off("update", this.onViewUpdate, this), e.dynamic && e.on("update", this.onViewUpdate, this), this._texture = e, this._width && this._setWidth(this._width, this._texture.orig.width), this._height && this._setHeight(this._height, this._texture.orig.height), this.onViewUpdate()); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "visualBounds", {
        get: function () { return a.B(this._visualBounds, this._anchor, this._texture), this._visualBounds; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "sourceBounds", {
        get: function () { return a.U("8.6.1", "Sprite.sourceBounds is deprecated, use visualBounds instead."), this.visualBounds; },
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
}(d)); })))(); }
var g, _;
function v() { return (v = e.n((function () { i._(), o.Ct(), o._t(), g = (function () {
    function e(e, t) {
        this.linkedSheets = [];
        var n = e;
        (e == null ? void 0 : e.source) instanceof o.St && (n = { texture: e, data: t });
        var r = n.texture, i = n.data, _a = n.cachePrefix, a = _a === void 0 ? "" : _a;
        this.cachePrefix = a, this._texture = r instanceof o.gt ? r : null, this.textureSource = r.source, this.textures = {}, this.animations = {}, this.data = i;
        var s = parseFloat(i.meta.scale);
        s ? (this.resolution = s, r.source.resolution = this.resolution) : this.resolution = r.source._resolution, this._frames = this.data.frames, this._frameKeys = Object.keys(this._frames), this._batchIndex = 0, this._callback = null;
    }
    e.prototype.parse = function () {
        var _this = this;
        return new Promise(function (t) { _this._callback = t, _this._batchIndex = 0, _this._frameKeys.length <= e.BATCH_SIZE ? (_this._processFrames(0), _this._processAnimations(), _this._parseComplete()) : _this._nextBatch(); });
    };
    e.prototype.parseSync = function () { return this._processFrames(0, !0), this._processAnimations(), this.textures; };
    e.prototype._processFrames = function (t, n) {
        if (n === void 0) { n = !1; }
        var r = t, a = n ? 1 / 0 : e.BATCH_SIZE;
        for (; r - t < a && r < this._frameKeys.length;) {
            var e_1 = this._frameKeys[r], t_3 = this._frames[e_1], n_1 = t_3.frame;
            if (n_1) {
                var r_2 = null, a_1 = null, s_1 = t_3.trimmed !== !1 && t_3.sourceSize ? t_3.sourceSize : t_3.frame, c_1 = new i.g(0, 0, Math.floor(s_1.w) / this.resolution, Math.floor(s_1.h) / this.resolution);
                r_2 = t_3.rotated ? new i.g(Math.floor(n_1.x) / this.resolution, Math.floor(n_1.y) / this.resolution, Math.floor(n_1.h) / this.resolution, Math.floor(n_1.w) / this.resolution) : new i.g(Math.floor(n_1.x) / this.resolution, Math.floor(n_1.y) / this.resolution, Math.floor(n_1.w) / this.resolution, Math.floor(n_1.h) / this.resolution), t_3.trimmed !== !1 && t_3.spriteSourceSize && (a_1 = new i.g(Math.floor(t_3.spriteSourceSize.x) / this.resolution, Math.floor(t_3.spriteSourceSize.y) / this.resolution, Math.floor(n_1.w) / this.resolution, Math.floor(n_1.h) / this.resolution)), this.textures[e_1] = new o.gt({ source: this.textureSource, frame: r_2, orig: c_1, trim: a_1, rotate: t_3.rotated ? 2 : 0, defaultAnchor: t_3.anchor, defaultBorders: t_3.borders, label: e_1.toString() });
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
}()), g.BATCH_SIZE = 1e3, _ = g; })))(); }
function y(e, t, n) { var r = {}; if (e.forEach(function (e) { r[e] = t; }), Object.keys(t.textures).forEach(function (e) { r["".concat(t.cachePrefix).concat(e)] = t.textures[e]; }), !n) {
    var n_3 = a.w.dirname(e[0]);
    t.linkedSheets.forEach(function (e, i) { var a = y(["".concat(n_3, "/").concat(t.data.meta.related_multi_packs[i])], e, !0); Object.assign(r, a); });
} return r; }
var b, x;
function S() { return (S = e.n((function () { r.A(), r.O(), r.E(), r.Y(), o._t(), a.C(), v(), b = ["jpg", "png", "jpeg", "avif", "webp", "basis", "etc2", "bc7", "bc6h", "bc5", "bc4", "bc3", "bc2", "bc1", "eac", "astc"], x = { extension: r.q.Asset, cache: { test: function (e) { return e instanceof _; }, getCacheableAssets: function (e, t) { return y(e, t, !1); } }, resolver: { extension: { type: r.q.ResolveParser, name: "resolveSpritesheet" }, test: function (e) { var t = e.split("?")[0].split("."), n = t.pop(), r = t.pop(); return n === "json" && b.includes(r); }, parse: function (e) { var t, n; var i = e.split("."); return { resolution: parseFloat((t = (n = r.D.RETINA_PREFIX.exec(e)) == null ? void 0 : n[1]) == null ? "1" : t), format: i[i.length - 2], src: e }; } }, loader: { name: "spritesheetLoader", id: "spritesheet", extension: { type: r.q.LoadParser, priority: r.k.Normal, name: "spritesheetLoader" }, testParse: function (e, t) {
            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2, a.w.extname(t.src).toLowerCase() === ".json" && !!e.frames];
            }); });
        }, parse: function (e, t, n) {
            return __awaiter(this, void 0, void 0, function () { var i, s, _a, c, l, u, d, f, p, i_1, m, h, e_3, _i, h_1, i_2, g, a_2, i_3; return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = (i = t == null ? void 0 : t.data) == null ? {} : i, c = _a.texture, l = _a.imageFilename, u = _a.textureOptions, d = _a.cachePrefix, f = a.w.dirname(t.src);
                        f && f.lastIndexOf("/") !== f.length - 1 && (f += "/");
                        if (!(c instanceof o.gt)) return [3, 1];
                        p = c;
                        return [3, 3];
                    case 1:
                        i_1 = r.T(f + (l == null ? e.meta.image : l), t.src);
                        return [4, n.load([{ src: i_1, data: u }])];
                    case 2:
                        p = (_b.sent())[i_1];
                        _b.label = 3;
                    case 3:
                        m = new _({ texture: p.source, data: e, cachePrefix: d });
                        return [4, m.parse()];
                    case 4:
                        _b.sent();
                        h = e == null || (s = e.meta) == null ? void 0 : s.related_multi_packs;
                        if (!Array.isArray(h)) return [3, 6];
                        e_3 = [];
                        for (_i = 0, h_1 = h; _i < h_1.length; _i++) {
                            i_2 = h_1[_i];
                            if (typeof i_2 != "string")
                                continue;
                            a_2 = f + i_2;
                            (g = t.data) != null && g.ignoreMultiPack || (a_2 = r.T(a_2, t.src), e_3.push(n.load({ src: a_2, data: { textureOptions: u, ignoreMultiPack: !0 } })));
                        }
                        return [4, Promise.all(e_3)];
                    case 5:
                        i_3 = _b.sent();
                        m.linkedSheets = i_3, i_3.forEach(function (e) { e.linkedSheets = [m].concat(m.linkedSheets.filter(function (t) { return t !== e; })); });
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
function C() { return (C = e.n((function () { r.Y(), S(), r.J.add(x); })))(); }
function w(e, t, n, r, i, a) {
    if (i === void 0) { i = !1; }
    var s = T;
    s.minX = 0, s.minY = 0, s.maxX = e.width / r | 0, s.maxY = e.height / r | 0;
    var c = o.ft.getOptimalTexture({ width: s.width, height: s.height, resolution: r, autoGenerateMipmaps: i, scaleMode: a });
    return c.source.uploadMethodId = "image", c.source.resource = e, c.source.alphaMode = "premultiply-alpha-on-upload", c.frame.width = t / r, c.frame.height = n / r, c.source.emit("update", c.source), c.updateUvs(), c;
}
var T;
function E() { return (E = e.n((function () { o.pt(), s.M(), T = new s.j; })))(); }
var D, O;
function k() { return (k = e.n((function () { o.N(), o.F(), o.j(), a.W(), n.o(), D = (function (_super) {
    __extends(e, _super);
    function e() {
        var t = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            t[_i] = arguments[_i];
        }
        var _this = this;
        var r;
        var i = (r = t[0]) == null ? {} : r;
        i instanceof Float32Array && (a.U(a.G, "use new MeshGeometry({ positions, uvs, indices }) instead"), i = { positions: i, uvs: t[1], indices: t[2] }), i = n.a(n.a({}, e.defaultOptions), i);
        var s = i.positions || new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), c = i.uvs;
        c || (c = i.positions ? new Float32Array(s.length) : new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]));
        var l = i.indices || new Uint32Array([0, 1, 2, 0, 2, 3]), u = i.shrinkBuffersToFit, d = new o.M({ data: s, label: "attribute-mesh-positions", shrinkToFit: u, usage: o.P.VERTEX | o.P.COPY_DST }), f = new o.M({ data: c, label: "attribute-mesh-uvs", shrinkToFit: u, usage: o.P.VERTEX | o.P.COPY_DST }), p = new o.M({ data: l, label: "index-mesh-buffer", shrinkToFit: u, usage: o.P.INDEX | o.P.COPY_DST });
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
}(o.A)), D.defaultOptions = { topology: "triangle-list", shrinkBuffersToFit: !1 }, O = D; })))(); }
var A;
function j() { return (j = e.n((function () { A = (function () {
    function A() {
        this.batcherName = "default", this.packAsQuad = !1, this.indexOffset = 0, this.attributeOffset = 0, this.roundPixels = 0, this._batcher = null, this._batch = null, this._textureMatrixUpdateId = -1, this._uvUpdateId = -1;
    }
    Object.defineProperty(A.prototype, "blendMode", {
        get: function () { return this.renderable.groupBlendMode; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(A.prototype, "topology", {
        get: function () { return this._topology || this.geometry.topology; },
        set: function (e) { this._topology = e; },
        enumerable: false,
        configurable: true
    });
    A.prototype.reset = function () { this.renderable = null, this.texture = null, this._batcher = null, this._batch = null, this.geometry = null, this._uvUpdateId = -1, this._textureMatrixUpdateId = -1; };
    A.prototype.setTexture = function (e) { this.texture !== e && (this.texture = e, this._textureMatrixUpdateId = -1); };
    Object.defineProperty(A.prototype, "uvs", {
        get: function () { var e = this.geometry.getBuffer("aUV"), t = e.data, n = t, r = this.texture.textureMatrix; return r.isSimple || (n = this._transformedUvs, (this._textureMatrixUpdateId !== r._updateID || this._uvUpdateId !== e._updateID) && ((!n || n.length < t.length) && (n = this._transformedUvs = new Float32Array(t.length)), this._textureMatrixUpdateId = r._updateID, this._uvUpdateId = e._updateID, r.multiplyUvs(t, n))), n; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(A.prototype, "positions", {
        get: function () { return this.geometry.positions; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(A.prototype, "indices", {
        get: function () { return this.geometry.indices; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(A.prototype, "color", {
        get: function () { return this.renderable.groupColorAlpha; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(A.prototype, "groupTransform", {
        get: function () { return this.renderable.groupTransform; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(A.prototype, "attributeSize", {
        get: function () { return this.geometry.positions.length / 2; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(A.prototype, "indexSize", {
        get: function () { return this.geometry.indices.length; },
        enumerable: false,
        configurable: true
    });
    return A;
}()); })))(); }
var M, N;
function P() { return (P = e.n((function () { r.Y(), i.x(), c.A(), o.Q(), o.L(), j(), M = (function () {
    function M() {
    }
    M.prototype.destroy = function () { };
    return M;
}()), N = (function () {
    function N(e, t) {
        this.localUniforms = new o.Z({ uTransformMatrix: { value: new i.b, type: "mat3x3<f32>" }, uColor: { value: new Float32Array([1, 1, 1, 1]), type: "vec4<f32>" }, uRound: { value: 0, type: "f32" } }), this.localUniformsBindGroup = new c.k({ 0: this.localUniforms }), this.renderer = e, this._adaptor = t, this._adaptor.init();
    }
    N.prototype.validateRenderable = function (e) { var t = this._getMeshData(e), n = t.batched, r = e.batched; if (t.batched = r, n !== r)
        return !0; if (r) {
        var n_4 = e._geometry;
        if (n_4.indices.length !== t.indexSize || n_4.positions.length !== t.vertexSize)
            return t.indexSize = n_4.indices.length, t.vertexSize = n_4.positions.length, !0;
        var r_4 = this._getBatchableMesh(e);
        return r_4.texture.uid !== e._texture.uid && (r_4._textureMatrixUpdateId = -1), !r_4._batcher.checkAndUpdateTexture(r_4, e._texture);
    } return !1; };
    N.prototype.addRenderable = function (e, t) { var n = this.renderer.renderPipes.batch, r = this._getMeshData(e); if (e.didViewUpdate) {
        var i, a;
        r.indexSize = (i = e._geometry.indices) == null ? void 0 : i.length, r.vertexSize = (a = e._geometry.positions) == null ? void 0 : a.length;
    } if (r.batched) {
        var r_5 = this._getBatchableMesh(e);
        r_5.setTexture(e._texture), r_5.geometry = e._geometry, n.addToBatch(r_5, t);
    }
    else
        n.break(t), t.add(e); };
    N.prototype.updateRenderable = function (e) { if (e.batched) {
        var t_5 = this._getBatchableMesh(e);
        t_5.setTexture(e._texture), t_5.geometry = e._geometry, t_5._batcher.updateElement(t_5);
    } };
    N.prototype.execute = function (e) { if (!e.isRenderable)
        return; e.state.blend && (e.state.blendMode = o.I(e.groupBlendMode, e.texture._source)); var t = this.localUniforms; t.uniforms.uTransformMatrix = e.groupTransform, t.uniforms.uRound = this.renderer._roundPixels | e._roundPixels, t.update(), s.u(e.groupColorAlpha, t.uniforms.uColor, 0), this._adaptor.execute(this, e); };
    N.prototype._getMeshData = function (e) { var t, n; return (t = e._gpuData)[n = this.renderer.uid] || (t[n] = new M), e._gpuData[this.renderer.uid].meshData || this._initMeshData(e); };
    N.prototype._initMeshData = function (e) { return e._gpuData[this.renderer.uid].meshData = { batched: e.batched, indexSize: 0, vertexSize: 0 }, e._gpuData[this.renderer.uid].meshData; };
    N.prototype._getBatchableMesh = function (e) { var t, n; return (t = e._gpuData)[n = this.renderer.uid] || (t[n] = new M), e._gpuData[this.renderer.uid].batchableMesh || this._initBatchableMesh(e); };
    N.prototype._initBatchableMesh = function (e) { var t = new A; return t.renderable = e, t.setTexture(e._texture), t.transform = e.groupTransform, t.roundPixels = this.renderer._roundPixels | e._roundPixels, e._gpuData[this.renderer.uid].batchableMesh = t, t; };
    N.prototype.destroy = function () { this.localUniforms = null, this.localUniformsBindGroup = null, this._adaptor.destroy(), this._adaptor = null, this.renderer = null; };
    return N;
}()), N.extension = { type: [r.q.WebGLPipes, r.q.WebGPUPipes], name: "mesh" }; })))(); }
function ee() { return (ee = e.n((function () { r.Y(), P(), r.J.add(N); })))(); }
var te, F;
function I() { return (I = e.n((function () { o.j(), o.K(), o._t(), a.W(), f(), k(), ee(), n.i(), n.o(), te = ["geometry", "shader", "texture", "roundPixels", "state"], F = (function (_super) {
    __extends(F, _super);
    function F() {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        var _this = this;
        var t;
        var r = e[0];
        r instanceof o.A && (a.U(a.G, "Mesh: use new Mesh({ geometry, shader }) instead"), r = { geometry: r, shader: e[1] }, e[3] && (a.U(a.G, "Mesh: drawMode argument has been removed, use geometry.topology instead"), r.geometry.topology = e[3]));
        var i = r.geometry, s = r.shader, c = r.texture, l = r.roundPixels, u = r.state, d = n.r(r, te);
        _this = _super.call(this, n.a({ label: "Mesh" }, d)) || this, _this.renderPipeId = "mesh", _this._shader = null, _this.allowChildren = !1, _this.shader = s == null ? null : s, _this.texture = (t = c == null ? s == null ? void 0 : s.texture : c) == null ? o.gt.WHITE : t, _this.state = u == null ? o.G.for2d() : u, _this._geometry = i, _this._geometry.on("update", _this.onViewUpdate, _this), _this.roundPixels = l != null && l;
        return _this;
    }
    Object.defineProperty(F.prototype, "material", {
        get: function () { return a.U(a.G, "mesh.material property has been removed, use mesh.shader instead"), this._shader; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(F.prototype, "shader", {
        get: function () { return this._shader; },
        set: function (e) { this._shader !== e && (this._shader = e, this.onViewUpdate()); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(F.prototype, "geometry", {
        get: function () { return this._geometry; },
        set: function (e) { var t; this._geometry !== e && ((t = this._geometry) == null || t.off("update", this.onViewUpdate, this), e.on("update", this.onViewUpdate, this), this._geometry = e, this.onViewUpdate()); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(F.prototype, "texture", {
        get: function () { return this._texture; },
        set: function (e) { e || (e = o.gt.EMPTY); var t = this._texture; t !== e && (t && t.dynamic && t.off("update", this.onViewUpdate, this), e.dynamic && e.on("update", this.onViewUpdate, this), this.shader && (this.shader.texture = e), this._texture = e, this.onViewUpdate()); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(F.prototype, "batched", {
        get: function () { return this._shader || this.state.data & 12 ? !1 : this._geometry instanceof O ? this._geometry.batchMode === "auto" ? this._geometry.positions.length / 2 <= 100 : this._geometry.batchMode === "batch" : !1; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(F.prototype, "bounds", {
        get: function () { return this._geometry.bounds; },
        enumerable: false,
        configurable: true
    });
    F.prototype.updateBounds = function () { this._bounds = this._geometry.bounds; };
    F.prototype.containsPoint = function (e) { var t = e.x, n = e.y; if (!this.bounds.containsPoint(t, n))
        return !1; var r = this.geometry.getBuffer("aPosition").data, a = this.geometry.topology === "triangle-strip" ? 3 : 1; if (this.geometry.getIndex()) {
        var e_4 = this.geometry.getIndex().data, o_1 = e_4.length;
        for (var s_2 = 0; s_2 + 2 < o_1; s_2 += a) {
            var a_3 = e_4[s_2] * 2, o_2 = e_4[s_2 + 1] * 2, c_2 = e_4[s_2 + 2] * 2;
            if (i.n(t, n, r[a_3], r[a_3 + 1], r[o_2], r[o_2 + 1], r[c_2], r[c_2 + 1]))
                return !0;
        }
    }
    else {
        var e_5 = r.length / 2;
        for (var o_3 = 0; o_3 + 2 < e_5; o_3 += a) {
            var e_6 = o_3 * 2, a_4 = (o_3 + 1) * 2, s_3 = (o_3 + 2) * 2;
            if (i.n(t, n, r[e_6], r[e_6 + 1], r[a_4], r[a_4 + 1], r[s_3], r[s_3 + 1]))
                return !0;
        }
    } return !1; };
    F.prototype.destroy = function (e) { var t; if (_super.prototype.destroy.call(this, e), typeof e == "boolean" ? e : e != null && e.texture) {
        var t_6 = typeof e == "boolean" ? e : e == null ? void 0 : e.textureSource;
        this._texture.destroy(t_6);
    } (t = this._geometry) == null || t.off("update", this.onViewUpdate, this), this._texture = null, this._geometry = null, this._shader = null; };
    return F;
}(d)); })))(); }
function ne(e, t) { var n; var r = (n = e[0]) == null ? {} : n; return (typeof r == "string" || e[1]) && (a.U(a.G, "use new ".concat(t, "({ text: \"hi!\", style }) instead")), r = { text: r, style: e[1] }), r; }
var re, ie;
function ae() { return (ae = e.n((function () { i.O(), a.W(), f(), n.i(), n.o(), re = ["text", "resolution", "style", "anchor", "width", "height", "roundPixels"], ie = (function (_super) {
    __extends(ie, _super);
    function ie(e, t) {
        var _this = this;
        var r = e.text, a = e.resolution, o = e.style, s = e.anchor, c = e.width, l = e.height, u = e.roundPixels, d = n.r(e, re);
        _this = _super.call(this, n.a({}, d)) || this, _this.batched = !0, _this._resolution = null, _this._autoResolution = !0, _this._didTextUpdate = !0, _this._styleClass = t, _this.text = r == null ? "" : r, _this.style = o, _this.resolution = a == null ? null : a, _this.allowChildren = !1, _this._anchor = new i.D({ _onUpdate: function () { _this.onViewUpdate(); } }), s && (_this.anchor = s), _this.roundPixels = u != null && u, c !== void 0 && (_this.width = c), l !== void 0 && (_this.height = l);
        return _this;
    }
    Object.defineProperty(ie.prototype, "anchor", {
        get: function () { return this._anchor; },
        set: function (e) { typeof e == "number" ? this._anchor.set(e) : this._anchor.copyFrom(e); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ie.prototype, "text", {
        get: function () { return this._text; },
        set: function (e) { e = e.toString(), this._text !== e && (this._text = e, this.onViewUpdate()); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ie.prototype, "resolution", {
        get: function () { return this._resolution; },
        set: function (e) { this._autoResolution = e === null, this._resolution = e, this.onViewUpdate(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ie.prototype, "style", {
        get: function () { return this._style; },
        set: function (e) { var t; e || (e = {}), (t = this._style) == null || t.off("update", this.onViewUpdate, this), this._style = e instanceof this._styleClass ? e : new this._styleClass(e), this._style.on("update", this.onViewUpdate, this), this.onViewUpdate(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ie.prototype, "width", {
        get: function () { return Math.abs(this.scale.x) * this.bounds.width; },
        set: function (e) { this._setWidth(e, this.bounds.width); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ie.prototype, "height", {
        get: function () { return Math.abs(this.scale.y) * this.bounds.height; },
        set: function (e) { this._setHeight(e, this.bounds.height); },
        enumerable: false,
        configurable: true
    });
    ie.prototype.getSize = function (e) { return e || (e = {}), e.width = Math.abs(this.scale.x) * this.bounds.width, e.height = Math.abs(this.scale.y) * this.bounds.height, e; };
    ie.prototype.setSize = function (e, t) { if (typeof e == "object") {
        var n;
        t = (n = e.height) == null ? e.width : n, e = e.width;
    }
    else
        t != null || (t = e); e !== void 0 && this._setWidth(e, this.bounds.width), t !== void 0 && this._setHeight(t, this.bounds.height); };
    ie.prototype.containsPoint = function (e) { var t = this.bounds.width, n = this.bounds.height, r = -t * this.anchor.x, i = 0; return e.x >= r && e.x <= r + t && (i = -n * this.anchor.y, e.y >= i && e.y <= i + n); };
    ie.prototype.onViewUpdate = function () { this.didViewUpdate || (this._didTextUpdate = !0), _super.prototype.onViewUpdate.call(this); };
    ie.prototype.destroy = function (e) {
        if (e === void 0) { e = !1; }
        var t;
        (t = this._style) == null || t.off("update", this.onViewUpdate, this), _super.prototype.destroy.call(this, e), this.owner = null, this._bounds = null, this._anchor = null, (typeof e == "boolean" ? e : e != null && e.style) && this._style.destroy(e), this._style = null, this._text = null;
    };
    Object.defineProperty(ie.prototype, "styleKey", {
        get: function () { return "".concat(this._text, ":").concat(this._style.styleKey, ":").concat(this._resolution); },
        enumerable: false,
        configurable: true
    });
    return ie;
}(d)); })))(); }
function oe(e) { return !!e.tagStyles && Object.keys(e.tagStyles).length > 0; }
function se(e) { return e.includes("<"); }
function L(e, t) { return e.clone().assign(t); }
function R(e, t) { var n = [], r = t.tagStyles; if (!oe(t) || !se(e))
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
                var e_7 = i[i.length - 1], l_2 = L(e_7, r[t_9]);
                i.push(l_2), a.push(t_9), s = c_3 + 1;
                continue;
            }
            o += e.slice(s, c_3 + 1), s = c_3 + 1;
            continue;
        }
    }
    o += t_7, s++;
} return o.length > 0 && n.push({ text: o, style: i[i.length - 1] }), n; }
function z(e) { return typeof e == "string" && q.has(e.charCodeAt(0)); }
function B(e, t) { return typeof e == "string" && le.has(e.charCodeAt(0)); }
function ce(e) { return typeof e == "string" && fe.has(e.charCodeAt(0)); }
function V(e) { return e === "normal" || e === "pre-line"; }
function H(e) { return e === "normal"; }
function U(e) { if (typeof e != "string")
    return ""; var t = e.length - 1; for (; t >= 0 && B(e[t]);)
    t--; return t < e.length - 1 ? e.slice(0, t + 1) : e; }
function W(e) {
    var t = [], n = [];
    if (typeof e != "string")
        return t;
    for (var r_6 = 0; r_6 < e.length; r_6++) {
        var i_4 = e[r_6], a_5 = e[r_6 + 1];
        B(i_4, a_5) || z(i_4) ? (n.length > 0 && (t.push(n.join("")), n.length = 0), i_4 === "\r" && a_5 === "\n" ? (t.push("\r\n"), r_6++) : t.push(i_4)) : (n.push(i_4), ce(i_4) && a_5 && !B(a_5) && !z(a_5) && (t.push(n.join("")), n.length = 0));
    }
    return n.length > 0 && t.push(n.join("")), t;
}
function G(e, t, n, r) { var i = n(e), a = []; for (var n_5 = 0; n_5 < i.length; n_5++) {
    var o_4 = i[n_5], s_4 = o_4, c_4 = 1;
    for (; i[n_5 + c_4];) {
        var a_6 = i[n_5 + c_4];
        if (!r(s_4, a_6, e, n_5, t))
            o_4 += a_6, s_4 = a_6, c_4++;
        else
            break;
    }
    n_5 += c_4 - 1, a.push(o_4);
} return a; }
var K, q, J, le, ue, de, fe, pe, me;
function he() { return (he = e.n((function () { K = [10, 13], q = new Set(K), J = [9, 32, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8200, 8201, 8202, 8287, 12288], le = new Set(J), ue = [9, 32], new Set(ue), de = [45, 8208, 8211, 8212, 173], fe = new Set(de), pe = /(\r\n|\r|\n)/, me = /(?:\r\n|\r|\n)/; })))(); }
function ge(e, t, n, r, i, a, o, s, c) {
    var l;
    var u = R(e, t);
    if (H(t.whiteSpace))
        for (var e_9 = 0; e_9 < u.length; e_9++) {
            var t_10 = u[e_9];
            u[e_9] = { text: t_10.text.replace(ye, " "), style: t_10.style };
        }
    var d = [], f = [];
    for (var _i = 0, u_2 = u; _i < u_2.length; _i++) {
        var e_10 = u_2[_i];
        var t_11 = e_10.text.split(pe);
        for (var n_6 = 0; n_6 < t_11.length; n_6++) {
            var r_7 = t_11[n_6];
            r_7 === "\r\n" || r_7 === "\r" || r_7 === "\n" ? (d.push(f), f = []) : r_7.length > 0 && f.push({ text: r_7, style: e_10.style });
        }
    }
    (f.length > 0 || d.length === 0) && d.push(f);
    var p = n ? _e(d, t, r, a, s, c) : d, m = [], h = [], g = [], _ = [], v = [], y = 0, b = t._fontString, x = o(b);
    x.fontSize === 0 && (x.fontSize = t.fontSize, x.ascent = t.fontSize);
    var S = "", C = !!t.dropShadow, w = ((l = t._stroke) == null ? void 0 : l.width) || 0;
    for (var _a = 0, p_1 = p; _a < p_1.length; _a++) {
        var e_11 = p_1[_a];
        var n_7 = 0, a_7 = x.ascent, s_5 = x.descent, c_5 = "";
        for (var _b = 0, e_8 = e_11; _b < e_8.length; _b++) {
            var t_12 = e_8[_b];
            var T;
            var e_12 = t_12.style._fontString, l_3 = o(e_12);
            e_12 !== S && (r.font = e_12, S = e_12);
            var u_3 = i(t_12.text, t_12.style.letterSpacing, r);
            n_7 += u_3, a_7 = Math.max(a_7, l_3.ascent), s_5 = Math.max(s_5, l_3.descent), c_5 += t_12.text;
            var d_1 = ((T = t_12.style._stroke) == null ? void 0 : T.width) || 0;
            d_1 > w && (w = d_1), !C && t_12.style.dropShadow && (C = !0);
        }
        e_11.length === 0 && (a_7 = x.ascent, s_5 = x.descent), m.push(n_7), h.push(a_7), g.push(s_5), v.push(c_5);
        var l_4 = t.lineHeight || a_7 + s_5;
        _.push(l_4 + t.leading), y = Math.max(y, n_7);
    }
    var E = w, D = y + E + (t.dropShadow ? t.dropShadow.distance : 0), O = 0;
    for (var e_13 = 0; e_13 < _.length; e_13++)
        O += _[e_13];
    return O = Math.max(O, _[0] + E), { width: D, height: O + (t.dropShadow ? t.dropShadow.distance : 0), lines: v, lineWidths: m, lineHeight: (t.lineHeight || x.fontSize) + t.leading, maxLineWidth: y, fontProperties: x, runsByLine: p, lineAscents: h, lineDescents: g, lineHeights: _, hasDropShadow: C };
}
function _e(e, t, n, r, i, a) { var o = t.letterSpacing, s = t.whiteSpace, c = t.wordWrapWidth, l = t.breakWords, u = V(s), d = c + o, f = {}, p = "", m = function (e, t) { var i = "".concat(e, "|").concat(t.styleKey), a = f[i]; if (a === void 0) {
    var o_5 = t._fontString;
    o_5 !== p && (n.font = o_5, p = o_5), a = r(e, t.letterSpacing, n) + t.letterSpacing, f[i] = a;
} return a; }, h = []; var _loop_1 = function (t_13) {
    var e_15 = ve(t_13), n_8 = h.length, r_8 = function (t) { var n = 0, r = t; do {
        var _a = e_15[r], t_14 = _a.token, i_5 = _a.style;
        n += m(t_14, i_5), r++;
    } while (r < e_15.length && e_15[r].continuesFromPrevious); return n; }, o_7 = function (t) { var n = [], r = t; do
        n.push({ token: e_15[r].token, style: e_15[r].style }), r++;
    while (r < e_15.length && e_15[r].continuesFromPrevious); return n; }, s_6 = [], c_6 = 0, f_1 = !u, p_2 = null, y_1 = function () { p_2 && p_2.text.length > 0 && s_6.push(p_2), p_2 = null; }, b_1 = function () { if (y_1(), s_6.length > 0) {
        var e_16 = s_6[s_6.length - 1];
        e_16.text = U(e_16.text), e_16.text.length === 0 && s_6.pop();
    } h.push(s_6), s_6 = [], c_6 = 0, f_1 = !1; };
    for (var t_15 = 0; t_15 < e_15.length; t_15++) {
        var _a = e_15[t_15], n_9 = _a.token, x_1 = _a.style, S_1 = _a.continuesFromPrevious, C_1 = m(n_9, x_1);
        if (u) {
            var e_17 = B(n_9), t_16 = (g = (_ = p_2 == null ? void 0 : p_2.text[p_2.text.length - 1]) == null ? (v = s_6[s_6.length - 1]) == null ? void 0 : v.text.slice(-1) : _) == null ? "" : g, r_9 = t_16 ? B(t_16) : !1;
            if (e_17 && r_9)
                continue;
        }
        var w_1 = !S_1, T_1 = w_1 ? r_8(t_15) : C_1;
        if (T_1 > d && w_1) {
            if (c_6 > 0 && b_1(), l) {
                var e_18 = o_7(t_15);
                for (var t_17 = 0; t_17 < e_18.length; t_17++) {
                    var n_10 = e_18[t_17].token, r_10 = e_18[t_17].style, o_8 = G(n_10, l, a, i);
                    for (var _b = 0, o_6 = o_8; _b < o_6.length; _b++) {
                        var e_19 = o_6[_b];
                        var t_18 = m(e_19, r_10);
                        t_18 + c_6 > d && b_1(), !p_2 || p_2.style !== r_10 ? (y_1(), p_2 = { text: e_19, style: r_10 }) : p_2.text += e_19, c_6 += t_18;
                    }
                }
                t_15 += e_18.length - 1;
            }
            else {
                var e_20 = o_7(t_15);
                y_1(), h.push(e_20.map(function (e) { return ({ text: e.token, style: e.style }); })), f_1 = !1, t_15 += e_20.length - 1;
            }
        }
        else if (T_1 + c_6 > d && w_1) {
            if (B(n_9)) {
                f_1 = !1;
                continue;
            }
            b_1(), p_2 = { text: n_9, style: x_1 }, c_6 = C_1;
        }
        else if (S_1 && !l)
            !p_2 || p_2.style !== x_1 ? (y_1(), p_2 = { text: n_9, style: x_1 }) : p_2.text += n_9, c_6 += C_1;
        else {
            var e_21 = B(n_9);
            if (c_6 === 0 && e_21 && !f_1)
                continue;
            !p_2 || p_2.style !== x_1 ? (y_1(), p_2 = { text: n_9, style: x_1 }) : p_2.text += n_9, c_6 += C_1;
        }
    }
    if (y_1(), s_6.length > 0) {
        var e_22 = s_6[s_6.length - 1];
        e_22.text = U(e_22.text), e_22.text.length === 0 && s_6.pop();
    }
    (s_6.length > 0 || h.length === n_8) && h.push(s_6);
}; var g, _, v; for (var _i = 0, e_14 = e; _i < e_14.length; _i++) {
    var t_13 = e_14[_i];
    _loop_1(t_13);
} return h; }
function ve(e) { var t = [], n = !1; for (var _i = 0, e_23 = e; _i < e_23.length; _i++) {
    var r_11 = e_23[_i];
    var e_25 = W(r_11.text), i_6 = !0;
    for (var _a = 0, e_24 = e_25; _a < e_24.length; _a++) {
        var a_8 = e_24[_a];
        var e_26 = B(a_8) || z(a_8), o_9 = i_6 && n && !e_26;
        t.push({ token: a_8, style: r_11.style, continuesFromPrevious: o_9 }), n = !e_26, i_6 = !1;
    }
} return t; }
var ye;
function be() { return (be = e.n((function () { he(), ye = /\r\n|\r|\n/g; })))(); }
function xe(e, t, n, r, i) { var a = n[e]; return typeof a != "number" && (a = i(e, t, r) + t, n[e] = a), a; }
function Se(e, t, n, r, i, a, o) {
    var s = n.getContext("2d", Ce);
    s.font = t._fontString;
    var c = 0, l = "", u = [], d = Object.create(null), f = t.letterSpacing, p = t.whiteSpace, m = V(p), h = H(p), g = !m, _ = t.wordWrapWidth + f, v = W(e);
    for (var e_28 = 0; e_28 < v.length; e_28++) {
        var n_11 = v[e_28];
        if (z(n_11)) {
            if (!h) {
                u.push(U(l)), g = !m, l = "", c = 0;
                continue;
            }
            n_11 = " ";
        }
        if (m) {
            var e_29 = B(n_11), t_19 = B(l[l.length - 1]);
            if (e_29 && t_19)
                continue;
        }
        var p_3 = xe(n_11, f, d, s, r);
        if (p_3 > _) {
            if (l !== "" && (u.push(U(l)), l = "", c = 0), i(n_11, t.breakWords)) {
                var e_30 = G(n_11, t.breakWords, o, a);
                for (var _i = 0, e_27 = e_30; _i < e_27.length; _i++) {
                    var t_20 = e_27[_i];
                    var e_31 = xe(t_20, f, d, s, r);
                    e_31 + c > _ && (u.push(U(l)), g = !1, l = "", c = 0), l += t_20, c += e_31;
                }
            }
            else
                l.length > 0 && (u.push(U(l)), l = "", c = 0), u.push(U(n_11)), g = !1, l = "", c = 0;
        }
        else
            p_3 + c > _ && (g = !1, u.push(U(l)), l = "", c = 0), (l.length > 0 || !B(n_11) || g) && (l += n_11, c += p_3);
    }
    var y = U(l);
    return y.length > 0 && u.push(y), u.join("\n");
}
var Ce;
function we() { return (we = e.n((function () { he(), Ce = { willReadFrequently: !0 }; })))(); }
var Te, Y, X;
function Ee() { return (Ee = e.n((function () { t.o(), r.P(), be(), he(), we(), Te = { willReadFrequently: !0 }, Y = (function () {
    function e(e, t, n, r, i, a, o, s, c, l) {
        this.text = e, this.style = t, this.width = n, this.height = r, this.lines = i, this.lineWidths = a, this.lineHeight = o, this.maxLineWidth = s, this.fontProperties = c, l && (this.runsByLine = l.runsByLine, this.lineAscents = l.lineAscents, this.lineDescents = l.lineDescents, this.lineHeights = l.lineHeights, this.hasDropShadow = l.hasDropShadow);
    }
    Object.defineProperty(e, "experimentalLetterSpacingSupported", {
        get: function () { var t = e._experimentalLetterSpacingSupported; if (t === void 0) {
            var n_12 = r.N.get().getCanvasRenderingContext2D().prototype;
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
        if (oe(n) && se(t)) {
            var r_12 = ge(t, n, i, e._context, e._measureText, e._measureTextAdvance, e.measureFont, e.canBreakChars, e.wordWrapSplit), a_9 = new e(t, n, r_12.width, r_12.height, r_12.lines, r_12.lineWidths, r_12.lineHeight, r_12.maxLineWidth, r_12.fontProperties, { runsByLine: r_12.runsByLine, lineAscents: r_12.lineAscents, lineDescents: r_12.lineDescents, lineHeights: r_12.lineHeights, hasDropShadow: r_12.hasDropShadow });
            return e._measurementCache.set(s, a_9), a_9;
        }
        var c = n._fontString, l = e.measureFont(c);
        l.fontSize === 0 && (l.fontSize = n.fontSize, l.ascent = n.fontSize, l.descent = 0);
        var u = e._context;
        u.font = c;
        var d = (i ? e._wordWrap(t, n, r) : t).split(me), f = Array(d.length), p = 0;
        for (var t_21 = 0; t_21 < d.length; t_21++) {
            var r_13 = e._measureText(d[t_21], n.letterSpacing, u);
            f[t_21] = r_13, p = Math.max(p, r_13);
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
        return Se(t, n, r, e._measureTextAdvance, e.canBreakWords, e.canBreakChars, e.wordWrapSplit);
    };
    e.isBreakingSpace = function (e, t) { return B(e, t); };
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
                var n_13 = new OffscreenCanvas(0, 0), i_7 = n_13.getContext("2d", Te);
                if (i_7 != null && i_7.measureText)
                    return e.__canvas = n_13, n_13;
                t_22 = r.N.get().createCanvas();
            }
            catch (e) {
                t_22 = r.N.get().createCanvas();
            }
            t_22.width = t_22.height = 10, e.__canvas = t_22;
        } return e.__canvas; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e, "_context", {
        get: function () { return e.__context || (e.__context = e._canvas.getContext("2d", Te)), e.__context; },
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
function De(e) { var t = typeof e.fontSize == "number" ? "".concat(e.fontSize, "px") : e.fontSize, n = e.fontFamily; Array.isArray(e.fontFamily) || (n = e.fontFamily.split(",")); for (var e_34 = n.length - 1; e_34 >= 0; e_34--) {
    var t_23 = n[e_34].trim();
    !/([\"\'])[^\'\"]+\1/.test(t_23) && !Oe.includes(t_23) && (t_23 = "\"".concat(t_23, "\"")), n[e_34] = t_23;
} return "".concat(e.fontStyle, " ").concat(e.fontVariant, " ").concat(e.fontWeight, " ").concat(t, " ").concat(n.join(",")); }
var Oe;
function ke() { return (ke = e.n((function () { Oe = ["serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui"]; })))(); }
function Ae(e, t, n, s, l, d) {
    if (s === void 0) { s = 0; }
    if (l === void 0) { l = 0; }
    if (d === void 0) { d = 0; }
    if (e.texture === o.gt.WHITE && !e.fill) {
        var f;
        return r.z.shared.setValue(e.color).setAlpha((f = e.alpha) == null ? 1 : f).toHexa();
    }
    if (!e.fill) {
        var n_15 = t.createPattern(e.texture.source.resource, "repeat"), r_14 = e.matrix.copyTo(i.b.shared);
        return r_14.scale(e.texture.source.pixelWidth, e.texture.source.pixelHeight), n_15.setTransform(r_14), n_15;
    }
    if (e.fill instanceof u.u) {
        var n_16 = e.fill, r_15 = t.createPattern(n_16.texture.source.resource, "repeat");
        return c.C.applyPatternTransform(r_15, n_16.transform, !1), r_15;
    }
    if (e.fill instanceof u.m) {
        var i_8 = e.fill, a_10 = i_8.type === "linear", o_10 = i_8.textureSpace === "local", c_7 = 1, u_4 = 1;
        o_10 && n && (c_7 = n.width + s, u_4 = n.height + s);
        var f_2, p_4 = !1;
        if (a_10) {
            var e_35 = i_8.start, n_17 = i_8.end;
            f_2 = t.createLinearGradient(e_35.x * c_7 + l, e_35.y * u_4 + d, n_17.x * c_7 + l, n_17.y * u_4 + d), p_4 = Math.abs(n_17.x - e_35.x) < Math.abs((n_17.y - e_35.y) * .1);
        }
        else {
            var e_36 = i_8.center, n_18 = i_8.innerRadius, r_16 = i_8.outerCenter, a_11 = i_8.outerRadius;
            f_2 = t.createRadialGradient(e_36.x * c_7 + l, e_36.y * u_4 + d, n_18 * c_7, r_16.x * c_7 + l, r_16.y * u_4 + d, a_11 * c_7);
        }
        if (p_4 && o_10 && n) {
            var e_37 = n.lineHeight / u_4;
            var _loop_2 = function (t_24) {
                var a_12 = (t_24 * n.lineHeight + s / 2) / u_4;
                i_8.colorStops.forEach(function (t) { var n = a_12 + t.offset * e_37; n = Math.max(0, Math.min(1, n)), f_2.addColorStop(Math.floor(n * je) / je, r.z.shared.setValue(t.color).toHex()); });
            };
            for (var t_24 = 0; t_24 < n.lines.length; t_24++) {
                _loop_2(t_24);
            }
        }
        else
            i_8.colorStops.forEach(function (e) { f_2.addColorStop(e.offset, r.z.shared.setValue(e.color).toHex()); });
        return f_2;
    }
    return a.R("FillStyle not recognised", e), "red";
}
var je;
function Me() { return (Me = e.n((function () { r.B(), i.x(), c.w(), o._t(), a.L(), u.h(), u.d(), je = 1e5; })))(); }
function Z(e) { var t = 0; for (var n_19 = 0; n_19 < e.length; n_19++)
    e.charCodeAt(n_19) === 32 && t++; return t; }
var Ne, Pe, Q;
function Fe() { return (Fe = e.n((function () { r.B(), i._(), o.w(), a.u(), Ee(), ke(), Me(), Ne = new i.g, Pe = (function () {
    function Pe() {
    }
    Pe.prototype.getCanvasAndContext = function (e) { var t = e.text, n = e.style, _a = e.resolution, r = _a === void 0 ? 1 : _a, i = n._getFinalPadding(), s = X.measureText(t || " ", n), c = Math.ceil(Math.ceil(Math.max(1, s.width) + i * 2) * r), l = Math.ceil(Math.ceil(Math.max(1, s.height) + i * 2) * r), u = o.C.getOptimalCanvasAndContext(c, l); return this._renderTextToCanvas(n, i, r, u, s), { canvasAndContext: u, frame: n.trim ? a.l({ canvas: u.canvas, width: c, height: l, resolution: 1, output: Ne }) : Ne.set(0, 0, c, l) }; };
    Pe.prototype.returnCanvasAndContext = function (e) { o.C.returnCanvasAndContext(e); };
    Pe.prototype._renderTextToCanvas = function (e, t, n, r, i) { var a, o, s; if (i.runsByLine && i.runsByLine.length > 0) {
        this._renderTaggedTextToCanvas(i, e, t, n, r);
        return;
    } var c = r.canvas, l = r.context, u = De(e), d = i.lines, f = i.lineHeight, p = i.lineWidths, m = i.maxLineWidth, h = i.fontProperties, g = c.height; if (l.resetTransform(), l.scale(n, n), l.textBaseline = e.textBaseline, (a = e._stroke) != null && a.width) {
        var t_25 = e._stroke;
        l.lineWidth = t_25.width, l.miterLimit = t_25.miterLimit, l.lineJoin = t_25.join, l.lineCap = t_25.cap;
    } l.font = u; var _, v, y = e.dropShadow ? 2 : 1, b = ((o = (s = e._stroke) == null ? void 0 : s.width) == null ? 0 : o) / 2, x = (f - h.fontSize) / 2; f - h.fontSize < 0 && (x = 0); for (var a_13 = 0; a_13 < y; ++a_13) {
        var o_11 = e.dropShadow && a_13 === 0, s_7 = o_11 ? Math.ceil(Math.max(1, g) + t * 2) : 0, c_8 = s_7 * n;
        if (o_11)
            this._setupDropShadow(l, e, n, c_8);
        else {
            var n_20 = e._gradientBounds, r_17 = e._gradientOffset;
            if (n_20) {
                var S, C;
                var a_14 = { width: n_20.width, height: n_20.height, lineHeight: n_20.height, lines: i.lines };
                this._setFillAndStrokeStyles(l, e, a_14, t, b, (S = r_17 == null ? void 0 : r_17.x) == null ? 0 : S, (C = r_17 == null ? void 0 : r_17.y) == null ? 0 : C);
            }
            else
                r_17 ? this._setFillAndStrokeStyles(l, e, i, t, b, r_17.x, r_17.y) : this._setFillAndStrokeStyles(l, e, i, t, b);
            l.shadowColor = "rgba(0,0,0,0)";
        }
        for (var n_21 = 0; n_21 < d.length; n_21++) {
            var w;
            _ = b, v = b + n_21 * f + h.ascent + x, _ += this._getAlignmentOffset(p[n_21], m, e.align);
            var i_9 = 0;
            if (e.align === "justify" && e.wordWrap && n_21 < d.length - 1) {
                var e_38 = Z(d[n_21]);
                e_38 > 0 && (i_9 = (m - p[n_21]) / e_38);
            }
            (w = e._stroke) != null && w.width && this._drawLetterSpacing(d[n_21], e, r, _ + t, v + t - s_7, !0, i_9), e._fill !== void 0 && this._drawLetterSpacing(d[n_21], e, r, _ + t, v + t - s_7, !1, i_9);
        }
    } };
    Pe.prototype._renderTaggedTextToCanvas = function (e, t, n, r, i) { var a, o; var s = i.canvas, c = i.context, l = e.runsByLine, u = e.lineWidths, d = e.maxLineWidth, f = e.lineAscents, p = e.lineHeights, m = e.hasDropShadow, h = s.height; c.resetTransform(), c.scale(r, r), c.textBaseline = t.textBaseline; var g = m ? 2 : 1, _ = (a = (o = t._stroke) == null ? void 0 : o.width) == null ? 0 : a; for (var _i = 0, l_5 = l; _i < l_5.length; _i++) {
        var e_40 = l_5[_i];
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
            var t_29 = De(e_43.style);
            c.font = t_29, n_22.push({ width: X._measureText(e_43.text, e_43.style.letterSpacing, c), font: t_29 });
        }
        x.push(n_22);
    } for (var e_44 = 0; e_44 < g; ++e_44) {
        var a_15 = m && e_44 === 0, o_12 = a_15 ? Math.ceil(Math.max(1, h) + n * 2) : 0, s_8 = o_12 * r;
        a_15 || (c.shadowColor = "rgba(0,0,0,0)");
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
                var t_31 = m_2[e_47], _d = y_2[e_47], l_6 = _d.width, u_5 = _d.font;
                if (c.font = u_5, c.textBaseline = t_31.style.textBaseline, (S = t_31.style._stroke) != null && S.width) {
                    var e_48 = t_31.style._stroke;
                    if (c.lineWidth = e_48.width, c.miterLimit = e_48.miterLimit, c.lineJoin = e_48.join, c.lineCap = e_48.cap, a_15) {
                        if (t_31.style.dropShadow)
                            this._setupDropShadow(c, t_31.style, r, s_8);
                        else {
                            var e_49 = Z(t_31.text);
                            E_1 += l_6 + e_49 * w_2;
                            continue;
                        }
                    }
                    else {
                        var r_18 = X.measureFont(u_5), i_10 = t_31.style.lineHeight || r_18.fontSize;
                        c.strokeStyle = Ae(e_48, c, { width: l_6, height: i_10, lineHeight: i_10, lines: [t_31.text] }, n * 2, E_1 - n, g_1);
                    }
                    this._drawLetterSpacing(t_31.text, t_31.style, i, E_1, T_2 + n - o_12, !0, w_2);
                }
                var d_2 = Z(t_31.text);
                E_1 += l_6 + d_2 * w_2;
            }
            E_1 = C_2 + n;
            for (var e_50 = 0; e_50 < m_2.length; e_50++) {
                var t_32 = m_2[e_50], _f = y_2[e_50], l_7 = _f.width, u_6 = _f.font;
                if (c.font = u_6, c.textBaseline = t_32.style.textBaseline, t_32.style._fill !== void 0) {
                    if (a_15) {
                        if (t_32.style.dropShadow)
                            this._setupDropShadow(c, t_32.style, r, s_8);
                        else {
                            var e_51 = Z(t_32.text);
                            E_1 += l_7 + e_51 * w_2;
                            continue;
                        }
                    }
                    else {
                        var e_52 = X.measureFont(u_6), r_19 = t_32.style.lineHeight || e_52.fontSize, i_11 = { width: l_7, height: r_19, lineHeight: r_19, lines: [t_32.text] };
                        c.fillStyle = Ae(t_32.style._fill, c, i_11, n * 2, E_1 - n, g_1);
                    }
                    this._drawLetterSpacing(t_32.text, t_32.style, i, E_1, T_2 + n - o_12, !1, w_2);
                }
                var d_3 = Z(t_32.text);
                E_1 += l_7 + d_3 * w_2;
            }
            g_1 += v_1;
        }
    } };
    Pe.prototype._setFillAndStrokeStyles = function (e, t, n, r, i, a, o) {
        if (a === void 0) { a = 0; }
        if (o === void 0) { o = 0; }
        var s;
        if (e.fillStyle = t._fill ? Ae(t._fill, e, n, r * 2, a, o) : null, (s = t._stroke) != null && s.width) {
            var s_9 = i + r * 2;
            e.strokeStyle = Ae(t._stroke, e, n, s_9, a, o);
        }
    };
    Pe.prototype._setupDropShadow = function (e, t, n, i) { e.fillStyle = "black", e.strokeStyle = "black"; var a = t.dropShadow, o = a.color, s = a.alpha; e.shadowColor = r.z.shared.setValue(o).setAlpha(s).toRgbaString(); var c = a.blur * n, l = a.distance * n; e.shadowBlur = c, e.shadowOffsetX = Math.cos(a.angle) * l, e.shadowOffsetY = Math.sin(a.angle) * l + i; };
    Pe.prototype._getAlignmentOffset = function (e, t, n) { return n === "right" ? t - e : n === "center" ? (t - e) / 2 : 0; };
    Pe.prototype._drawLetterSpacing = function (e, t, n, r, i, a, o) {
        if (a === void 0) { a = !1; }
        if (o === void 0) { o = 0; }
        var s = n.context, c = t.letterSpacing, l = !1;
        if (X.experimentalLetterSpacingSupported && (X.experimentalLetterSpacing ? (s.letterSpacing = "".concat(c, "px"), s.textLetterSpacing = "".concat(c, "px"), l = !0) : (s.letterSpacing = "0px", s.textLetterSpacing = "0px")), (c === 0 || l) && o === 0) {
            a ? s.strokeText(e, r, i) : s.fillText(e, r, i);
            return;
        }
        if (o !== 0 && (c === 0 || l)) {
            var t_33 = e.split(" "), n_23 = r, c_9 = s.measureText(" ").width;
            for (var e_53 = 0; e_53 < t_33.length; e_53++)
                a ? s.strokeText(t_33[e_53], n_23, i) : s.fillText(t_33[e_53], n_23, i), n_23 += s.measureText(t_33[e_53]).width + c_9 + o;
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
    return Pe;
}()), Q = new Pe; })))(); }
function Ie(e) { var t = e; if (typeof t.dropShadow == "boolean" && t.dropShadow) {
    var i, o, s, c, l;
    var n_25 = Re.defaultDropShadow;
    e.dropShadow = { alpha: (i = t.dropShadowAlpha) == null ? n_25.alpha : i, angle: (o = t.dropShadowAngle) == null ? n_25.angle : o, blur: (s = t.dropShadowBlur) == null ? n_25.blur : s, color: (c = t.dropShadowColor) == null ? n_25.color : c, distance: (l = t.dropShadowDistance) == null ? n_25.distance : l };
} if (t.strokeThickness !== void 0) {
    a.U(a.G, "strokeThickness is now a part of stroke");
    var i_12 = t.stroke, o_13 = {};
    if (r.z.isColorLike(i_12))
        o_13.color = i_12;
    else if (i_12 instanceof u.m || i_12 instanceof u.u)
        o_13.fill = i_12;
    else if (Object.hasOwnProperty.call(i_12, "color") || Object.hasOwnProperty.call(i_12, "fill"))
        o_13 = i_12;
    else
        throw Error("Invalid stroke value.");
    e.stroke = n.a(n.a({}, o_13), {}, { width: t.strokeThickness });
} if (Array.isArray(t.fillGradientStops)) {
    if (a.U(a.G, "gradient fill is now a fill pattern: `new FillGradient(...)`"), !Array.isArray(t.fill) || t.fill.length === 0)
        throw Error("Invalid fill value. Expected an array of colors for gradient fill.");
    t.fill.length !== t.fillGradientStops.length && a.R("The number of fill colors must match the number of fill gradient stops.");
    var n_26 = new u.m({ start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, textureSpace: "local" }), i_13 = t.fillGradientStops.slice(), o_14 = t.fill.map(function (e) { return r.z.shared.setValue(e).toNumber(); });
    i_13.forEach(function (e, t) { n_26.addColorStop(e, o_14[t]); }), e.fill = { fill: n_26 };
} }
var Le, Re;
function ze() { return (ze = e.n((function () { r.H(), r.B(), a.Y(), a.W(), a.L(), u.h(), u.d(), u.o(), u.s(), ke(), n.o(), Le = (function (_super) {
    __extends(e, _super);
    function e(t) {
        if (t === void 0) { t = {}; }
        var _this = this;
        var r;
        _this = _super.call(this) || this, _this.uid = a.X("textStyle"), _this._tick = 0, _this._cachedFontString = null, Ie(t), t instanceof e && (t = t._toObject());
        var i = n.a(n.a({}, e.defaultTextStyle), t);
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
        set: function (t) { this._dropShadow !== t && (this._dropShadow = typeof t == "object" && t ? this._createProxy(n.a(n.a({}, e.defaultDropShadow), t)) : t ? this._createProxy(n.a({}, e.defaultDropShadow)) : null, this.update()); },
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
            e !== this._originalFill && (this._originalFill = e, this._isFillStyle(e) && (this._originalFill = this._createProxy(n.a(n.a({}, u.a.defaultFillStyle), e), function () { _this._fill = u.c(n.a({}, _this._originalFill), u.a.defaultFillStyle); })), this._fill = u.c(e === 0 ? "black" : e, u.a.defaultFillStyle), this.update());
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "stroke", {
        get: function () { return this._originalStroke; },
        set: function (e) {
            var _this = this;
            e !== this._originalStroke && (this._originalStroke = e, this._isFillStyle(e) && (this._originalStroke = this._createProxy(n.a(n.a({}, u.a.defaultStrokeStyle), e), function () { _this._stroke = u.l(n.a({}, _this._originalStroke), u.a.defaultStrokeStyle); })), this._stroke = u.l(e, u.a.defaultStrokeStyle), this.update());
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
        get: function () { return this._cachedFontString === null && (this._cachedFontString = De(this)), this._cachedFontString; },
        enumerable: false,
        configurable: true
    });
    e.prototype._toObject = function () { return { align: this.align, breakWords: this.breakWords, dropShadow: this._dropShadow ? n.a({}, this._dropShadow) : null, fill: this._fill ? n.a({}, this._fill) : void 0, fontFamily: this.fontFamily, fontSize: this.fontSize, fontStyle: this.fontStyle, fontVariant: this.fontVariant, fontWeight: this.fontWeight, leading: this.leading, letterSpacing: this.letterSpacing, lineHeight: this.lineHeight, padding: this.padding, stroke: this._stroke ? n.a({}, this._stroke) : void 0, textBaseline: this.textBaseline, trim: this.trim, whiteSpace: this.whiteSpace, wordWrap: this.wordWrap, wordWrapWidth: this.wordWrapWidth, filters: this._filters ? __spreadArray([], this._filters, true) : void 0, tagStyles: this._tagStyles ? n.a({}, this._tagStyles) : void 0 }; };
    e.prototype.clone = function () { return new e(this._toObject()); };
    e.prototype._getFinalPadding = function () { var e = 0; if (this._filters)
        for (var t_38 = 0; t_38 < this._filters.length; t_38++)
            e += this._filters[t_38].padding; return Math.max(this._padding, e); };
    e.prototype.destroy = function (e) {
        if (e === void 0) { e = !1; }
        if (this.removeAllListeners(), typeof e == "boolean" ? e : e != null && e.texture) {
            var t, n, r, i;
            var a_16 = typeof e == "boolean" ? e : e == null ? void 0 : e.textureSource;
            (t = this._fill) != null && t.texture && this._fill.texture.destroy(a_16), (n = this._originalFill) != null && n.texture && this._originalFill.texture.destroy(a_16), (r = this._stroke) != null && r.texture && this._stroke.texture.destroy(a_16), (i = this._originalStroke) != null && i.texture && this._originalStroke.texture.destroy(a_16);
        }
        this._fill = null, this._stroke = null, this.dropShadow = null, this._originalStroke = null, this._originalFill = null;
    };
    e.prototype._createProxy = function (e, t) {
        var _this = this;
        return new Proxy(e, { set: function (e, n, r) { return (e[n] === r || (e[n] = r, t == null || t(n, r), _this.update()), !0); } });
    };
    e.prototype._isFillStyle = function (e) { return (e == null ? null : e) !== null && !(r.z.isColorLike(e) || e instanceof u.m || e instanceof u.u); };
    return e;
}(r.V)), Le.defaultDropShadow = { alpha: 1, angle: Math.PI / 6, blur: 0, color: "black", distance: 5 }, Le.defaultTextStyle = { align: "left", breakWords: !1, dropShadow: null, fill: "black", fontFamily: "Arial", fontSize: 26, fontStyle: "normal", fontVariant: "normal", fontWeight: "normal", leading: 0, letterSpacing: 0, lineHeight: 0, padding: 0, stroke: null, textBaseline: "alphabetic", trim: !1, whiteSpace: "pre", wordWrap: !1, wordWrapWidth: 100 }, Re = Le; })))(); }
function Be(e) { if (Ve)
    return; var t = new o.wt({ scaleMode: e.scaleMode }); e._resourceId !== t._resourceId && (Ve = !0, a.R("Text textureStyle: only scaleMode is applied to a text texture, the other fields are ignored")); }
var Ve;
function He() { return (He = e.n((function () { o.Tt(), a.L(), Ve = !1; })))(); }
function Ue(e, t) { var n = e.texture, r = e.bounds, i = t._style._getFinalPadding(); a.B(r, t._anchor, n); var o = t._anchor._x * i * 2, s = t._anchor._y * i * 2; r.minX -= i - o, r.minY -= i - s, r.maxX -= i - o, r.maxY -= i - s; }
function We() { return (We = e.n((function () { })))(); }
var Ge;
function Ke() { return (Ke = e.n((function () { Ge = (function () {
    function Ge() {
        this.batcherName = "default", this.topology = "triangle-list", this.attributeSize = 4, this.indexSize = 6, this.packAsQuad = !0, this.roundPixels = 0, this._attributeStart = 0, this._batcher = null, this._batch = null;
    }
    Object.defineProperty(Ge.prototype, "blendMode", {
        get: function () { return this.renderable.groupBlendMode; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ge.prototype, "color", {
        get: function () { return this.renderable.groupColorAlpha; },
        enumerable: false,
        configurable: true
    });
    Ge.prototype.reset = function () { this.renderable = null, this.texture = null, this._batcher = null, this._batch = null, this.bounds = null; };
    Ge.prototype.destroy = function () { this.reset(); };
    return Ge;
}()); })))(); }
var qe;
function Je() { return (Je = e.n((function () { Ke(), qe = (function (_super) {
    __extends(qe, _super);
    function qe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return qe;
}(Ge)); })))(); }
var Ye;
function Xe() { return (Xe = e.n((function () { r.Y(), a.f(), We(), Je(), Ye = (function () {
    function Ye(e) {
        this._renderer = e, e.runners.resolutionChange.add(this), e.runners.contextChange.add(this), this._managedTexts = new a.d({ renderer: e, type: "renderable", onUnload: this.onTextUnload.bind(this), name: "canvasText" });
    }
    Ye.prototype.resolutionChange = function () { for (var e_57 in this._managedTexts.items) {
        var t_39 = this._managedTexts.items[e_57];
        t_39 != null && t_39._autoResolution && t_39.onViewUpdate();
    } };
    Ye.prototype.contextChange = function () { for (var t_40 in this._managedTexts.items) {
        var e;
        (e = this._managedTexts.items[t_40]) == null || e.unload();
    } };
    Ye.prototype.validateRenderable = function (e) { var t = this._getGpuText(e), n = e.styleKey; return t.currentKey !== n || e._didTextUpdate; };
    Ye.prototype.addRenderable = function (e, t) { var n = this._getGpuText(e); if (e._didTextUpdate || n.currentKey !== e.styleKey) {
        var t_41 = e._autoResolution ? this._renderer.resolution : e.resolution;
        (n.currentKey !== e.styleKey || e._resolution !== t_41) && this._updateGpuText(e), e._didTextUpdate = !1, Ue(n, e);
    } this._renderer.renderPipes.batch.addToBatch(n, t); };
    Ye.prototype.updateRenderable = function (e) { var t = this._getGpuText(e); t._batcher.updateElement(t); };
    Ye.prototype._updateGpuText = function (e) { var t = this._getGpuText(e); t.texture && this._renderer.canvasText.decreaseReferenceCount(t.currentKey), e._resolution = e._autoResolution ? this._renderer.resolution : e.resolution, t.texture = this._renderer.canvasText.getManagedTexture(e), t.currentKey = e.styleKey; };
    Ye.prototype._getGpuText = function (e) { return e._gpuData[this._renderer.uid] || this.initGpuText(e); };
    Ye.prototype.initGpuText = function (e) { var t = new qe; return t.currentKey = "--", t.renderable = e, t.transform = e.groupTransform, t.bounds = { minX: 0, maxX: 1, minY: 0, maxY: 0 }, t.roundPixels = this._renderer._roundPixels | e._roundPixels, e._gpuData[this._renderer.uid] = t, this._managedTexts.add(e), t; };
    Ye.prototype.onTextUnload = function (e) { var t = e._gpuData[this._renderer.uid]; if (!t)
        return; var n = this._renderer.canvasText; n.getReferenceCount(t.currentKey) > 0 ? n.decreaseReferenceCount(t.currentKey) : t.texture && n.returnTexture(t.texture); };
    Ye.prototype.destroy = function () { this._managedTexts.destroy(), this._renderer = null; };
    return Ye;
}()), Ye.extension = { type: [r.q.WebGLPipes, r.q.WebGPUPipes, r.q.CanvasPipes], name: "text" }; })))(); }
var Ze;
function Qe() { return (Qe = e.n((function () { o.pt(), a.W(), Fe(), ze(), E(), Ze = (function () {
    function Ze(e, t) {
        this._activeTextures = {}, this._renderer = e, this._retainCanvasContext = t;
    }
    Ze.prototype.getTexture = function (e, t, n, r) { var i; typeof e == "string" && (a.U("8.0.0", "CanvasTextSystem.getTexture: Use object TextOptions instead of separate arguments"), e = { text: e, style: n, resolution: t }), e.style instanceof Re || (e.style = new Re(e.style)), typeof e.text != "string" && (e.text = e.text.toString()); var o = e.text, s = e.style, c = e.textureStyle, l = e.autoGenerateMipmaps, u = (i = e.resolution) == null ? this._renderer.resolution : i, _a = Q.getCanvasAndContext({ text: o, style: s, resolution: u }), d = _a.frame, f = _a.canvasAndContext, p = w(f.canvas, d.width, d.height, u, l, c == null ? void 0 : c.scaleMode); if (s.trim && (d.pad(s.padding), p.frame.copyFrom(d), p.frame.scale(1 / u), p.updateUvs()), s.filters) {
        var e_58 = this._applyFilters(p, s.filters);
        return this.returnTexture(p), Q.returnCanvasAndContext(f), e_58;
    } return this._renderer.texture.initSource(p._source), this._retainCanvasContext || Q.returnCanvasAndContext(f), p; };
    Ze.prototype.returnTexture = function (e) { var t = e.source, n = t.resource; if (this._retainCanvasContext && n != null && n.getContext) {
        var e_59 = n.getContext("2d");
        e_59 && Q.returnCanvasAndContext({ canvas: n, context: e_59 });
    } t.resource = null, t.uploadMethodId = "unknown", t.alphaMode = "no-premultiply-alpha", o.ft.returnTexture(e); };
    Ze.prototype.renderTextToCanvas = function () { a.U("8.10.0", "CanvasTextSystem.renderTextToCanvas: no longer supported, use CanvasTextSystem.getTexture instead"); };
    Ze.prototype.getManagedTexture = function (e) { e._resolution = e._autoResolution ? this._renderer.resolution : e.resolution; var t = e.styleKey; if (this._activeTextures[t])
        return this._increaseReferenceCount(t), this._activeTextures[t].texture; var n = this.getTexture({ text: e.text, style: e.style, resolution: e._resolution, textureStyle: e.textureStyle, autoGenerateMipmaps: e.autoGenerateMipmaps }); return this._activeTextures[t] = { texture: n, usageCount: 1 }, n; };
    Ze.prototype.decreaseReferenceCount = function (e) { var t = this._activeTextures[e]; t && (t.usageCount--, t.usageCount === 0 && (this.returnTexture(t.texture), this._activeTextures[e] = null)); };
    Ze.prototype.getReferenceCount = function (e) { var t, n; return (t = (n = this._activeTextures[e]) == null ? void 0 : n.usageCount) == null ? 0 : t; };
    Ze.prototype._increaseReferenceCount = function (e) { this._activeTextures[e].usageCount++; };
    Ze.prototype._applyFilters = function (e, t) { var n = this._renderer.renderTarget.renderTarget, r = this._renderer.filter.generateFilteredTexture({ texture: e, filters: t }); return this._renderer.renderTarget.bind({ target: n, clear: !1 }), r; };
    Ze.prototype.destroy = function () { this._renderer = null; for (var e_60 in this._activeTextures)
        this._activeTextures[e_60] && this.returnTexture(this._activeTextures[e_60].texture); this._activeTextures = null; };
    return Ze;
}()); })))(); }
var $e;
function et() { return (et = e.n((function () { r.Y(), Qe(), $e = (function (_super) {
    __extends($e, _super);
    function $e(e) {
        return _super.call(this, e, !0) || this;
    }
    return $e;
}(Ze)), $e.extension = { type: [r.q.CanvasSystem], name: "canvasText" }; })))(); }
var tt;
function nt() { return (nt = e.n((function () { r.Y(), Qe(), tt = (function (_super) {
    __extends(tt, _super);
    function tt(e) {
        return _super.call(this, e, !1) || this;
    }
    return tt;
}(Ze)), tt.extension = { type: [r.q.WebGLSystem, r.q.WebGPUSystem], name: "canvasText" }; })))(); }
function rt() { return (rt = e.n((function () { r.Y(), Xe(), et(), nt(), r.J.add($e), r.J.add(tt), r.J.add(Ye); })))(); }
var it;
function at() { return (at = e.n((function () { o.Ct(), o.Tt(), ae(), Fe(), Ee(), ze(), He(), rt(), it = (function (_super) {
    __extends(it, _super);
    function it() {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        var _this = this;
        var t;
        var n = ne(e, "Text");
        _this = _super.call(this, n, Re) || this, _this.renderPipeId = "text", n.textureStyle && (_this.textureStyle = n.textureStyle instanceof o.wt ? n.textureStyle : new o.wt(n.textureStyle), Be(_this.textureStyle)), _this.autoGenerateMipmaps = (t = n.autoGenerateMipmaps) == null ? o.St.defaultOptions.autoGenerateMipmaps : t;
        return _this;
    }
    it.prototype.updateBounds = function () { var e = this._bounds, t = this._anchor, n = 0, r = 0; if (this._style.trim) {
        var _a = Q.getCanvasAndContext({ text: this.text, style: this._style, resolution: 1 }), e_61 = _a.frame, t_42 = _a.canvasAndContext;
        Q.returnCanvasAndContext(t_42), n = e_61.width, r = e_61.height;
    }
    else {
        var e_62 = X.measureText(this._text, this._style);
        n = e_62.width, r = e_62.height;
    } e.minX = -t._x * n, e.maxX = e.minX + n, e.minY = -t._y * r, e.maxY = e.minY + r; };
    return it;
}(ie)); })))(); }
var ot;
function st() { return (st = e.n((function () { r.Y(), Ke(), ot = (function () {
    function ot(e) {
        this._renderer = e;
    }
    ot.prototype.addRenderable = function (e, t) { var n = this._getGpuSprite(e); e.didViewUpdate && this._updateBatchableSprite(e, n), this._renderer.renderPipes.batch.addToBatch(n, t); };
    ot.prototype.updateRenderable = function (e) { var t = this._getGpuSprite(e); e.didViewUpdate && this._updateBatchableSprite(e, t), t._batcher.updateElement(t); };
    ot.prototype.validateRenderable = function (e) { var t = this._getGpuSprite(e); return !t._batcher.checkAndUpdateTexture(t, e._texture); };
    ot.prototype._updateBatchableSprite = function (e, t) { t.bounds = e.visualBounds, t.texture = e._texture; };
    ot.prototype._getGpuSprite = function (e) { return e._gpuData[this._renderer.uid] || this._initGPUSprite(e); };
    ot.prototype._initGPUSprite = function (e) { var t = new Ge; return t.renderable = e, t.transform = e.groupTransform, t.texture = e._texture, t.bounds = e.visualBounds, t.roundPixels = this._renderer._roundPixels | e._roundPixels, e._gpuData[this._renderer.uid] = t, t; };
    ot.prototype.destroy = function () { this._renderer = null; };
    return ot;
}()), ot.extension = { type: [r.q.WebGLPipes, r.q.WebGPUPipes, r.q.CanvasPipes], name: "sprite" }; })))(); }
var ct;
function lt() { return (lt = e.n((function () { r.Y(), i.x(), l.v(), l.s(), l.d(), l.t(), o.J(), o._t(), a.L(), ct = (function () {
    function ct() {
    }
    ct.prototype.init = function () { var e = l._({ name: "mesh", bits: [l.c, l.n, l.f] }); this._shader = new o.q({ glProgram: e, resources: { uTexture: o.gt.EMPTY.source, textureUniforms: { uTextureMatrix: { type: "mat3x3<f32>", value: new i.b } } } }); };
    ct.prototype.execute = function (e, t) { var n = e.renderer, r = t._shader; if (!r) {
        r = this._shader;
        var e_63 = t.texture, n_28 = e_63.source;
        r.resources.uTexture = n_28, r.resources.uSampler = n_28.style, r.resources.textureUniforms.uniforms.uTextureMatrix = e_63.textureMatrix.mapCoord;
    }
    else if (!r.glProgram) {
        a.R("Mesh shader has no glProgram", t.shader);
        return;
    } r.groups[100] = n.globalUniforms.bindGroup, r.groups[101] = e.localUniformsBindGroup, n.encoder.draw({ geometry: t._geometry, shader: r, state: t.state }); };
    ct.prototype.destroy = function () { this._shader.destroy(!0), this._shader = null; };
    return ct;
}()), ct.extension = { type: [r.q.WebGLPipesAdaptor], name: "mesh" }; })))(); }
var ut, dt;
function ft() { return (ft = e.n((function () { a.W(), k(), n.o(), ut = (function (_super) {
    __extends(e, _super);
    function e() {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        var t;
        var _this = _super.call(this, {}) || this;
        var n = (t = e[0]) == null ? {} : t;
        typeof n == "number" && (a.U(a.G, "PlaneGeometry constructor changed please use { width, height, verticesX, verticesY } instead"), n = { width: n, height: e[1], verticesX: e[2], verticesY: e[3] }), _this.build(n);
        return _this;
    }
    e.prototype.build = function (t) { var r, i, a, o; t = n.a(n.a({}, e.defaultOptions), t), this.verticesX = (r = this.verticesX) == null ? t.verticesX : r, this.verticesY = (i = this.verticesY) == null ? t.verticesY : i, this.width = (a = this.width) == null ? t.width : a, this.height = (o = this.height) == null ? t.height : o; var s = this.verticesX * this.verticesY, c = [], l = [], u = [], d = this.verticesX - 1, f = this.verticesY - 1, p = this.width / d, m = this.height / f; for (var e_64 = 0; e_64 < s; e_64++) {
        var t_43 = e_64 % this.verticesX, n_29 = e_64 / this.verticesX | 0;
        c.push(t_43 * p, n_29 * m), l.push(t_43 / d, n_29 / f);
    } var h = d * f; for (var e_65 = 0; e_65 < h; e_65++) {
        var t_44 = e_65 % d, n_30 = e_65 / d | 0, r_20 = n_30 * this.verticesX + t_44, i_14 = n_30 * this.verticesX + t_44 + 1, a_17 = (n_30 + 1) * this.verticesX + t_44, o_15 = (n_30 + 1) * this.verticesX + t_44 + 1;
        u.push(r_20, i_14, a_17, i_14, o_15, a_17);
    } this.buffers[0].data = new Float32Array(c), this.buffers[1].data = new Float32Array(l), this.indexBuffer.data = new Uint32Array(u), this.buffers[0].update(), this.buffers[1].update(), this.indexBuffer.update(); };
    return e;
}(O)), ut.defaultOptions = { width: 100, height: 100, verticesX: 10, verticesY: 10 }, dt = ut; })))(); }
var pt;
function mt() { return (mt = e.n((function () { c.w(), pt = (function () {
    function pt() {
    }
    pt.prototype.execute = function (e, t) { var n, r; var i = e.renderer, a = i.canvasContext.activeContext, o = t.particleChildren, s = t.texture; a.save(), i.canvasContext.setContextTransform(t.worldTransform, t.roundPixels), i.canvasContext.setBlendMode(t.groupBlendMode); var l = t.groupColorAlpha, u = (n = (r = i.filter) == null ? void 0 : r.alphaMultiplier) == null ? 1 : n, d = (l >>> 24 & 255) / 255 * u; for (var e_66 = 0; e_66 < o.length; e_66++) {
        var f;
        var t_45 = o[e_66], n_31 = t_45.texture || s;
        if (!(n_31 != null && (f = n_31.source) != null && f.resource))
            continue;
        var r_21 = t_45.color, i_15 = (r_21 >>> 24 & 255) / 255 * d;
        if (i_15 <= 0)
            continue;
        var l_8 = r_21 & 16777215, u_7 = ((l_8 & 255) << 16) + (l_8 & 65280) + (l_8 >> 16 & 255), p_5 = n_31.source.resource;
        u_7 !== 16777215 && (p_5 = c.C.getTintedCanvas({ texture: n_31 }, u_7));
        var m_3 = n_31.frame, h_3 = n_31.source.resolution, g_2 = m_3.x * h_3, _2 = m_3.y * h_3, v_2 = m_3.width * h_3, y_3 = m_3.height * h_3;
        a.globalAlpha = i_15;
        var b_2 = -t_45.anchorX * m_3.width, x_2 = -t_45.anchorY * m_3.height;
        t_45.rotation !== 0 || t_45.scaleX !== 1 || t_45.scaleY !== 1 ? (a.save(), a.translate(t_45.x, t_45.y), a.rotate(t_45.rotation), a.scale(t_45.scaleX, t_45.scaleY), a.drawImage(p_5, g_2, _2, v_2, y_3, b_2, x_2, m_3.width, m_3.height), a.restore()) : a.drawImage(p_5, g_2, _2, v_2, y_3, t_45.x + b_2, t_45.y + x_2, m_3.width, m_3.height);
    } a.restore(); };
    return pt;
}()); })))(); }
function ht(e, t) {
    if (t === void 0) { t = null; }
    var n = e * 6;
    if (n > 65535 ? t || (t = new Uint32Array(n)) : t || (t = new Uint16Array(n)), t.length !== n)
        throw Error("Out buffer length is incorrect, got ".concat(t.length, " and expected ").concat(n));
    for (var e_67 = 0, r_22 = 0; e_67 < n; e_67 += 6, r_22 += 4)
        t[e_67 + 0] = r_22 + 0, t[e_67 + 1] = r_22 + 1, t[e_67 + 2] = r_22 + 2, t[e_67 + 3] = r_22 + 0, t[e_67 + 4] = r_22 + 2, t[e_67 + 5] = r_22 + 3;
    return t;
}
function gt(e) { return { dynamicUpdate: _t(e, !0), staticUpdate: _t(e, !1) }; }
function _t(e, t) {
    var n = [];
    n.push("\n\n        var index = 0;\n\n        for (let i = 0; i < ps.length; ++i)\n        {\n            const p = ps[i];\n\n            ");
    var r = 0;
    for (var i_16 in e) {
        var a_18 = e[i_16];
        if (t !== a_18.dynamic)
            continue;
        n.push("offset = index + ".concat(r)), n.push(a_18.code);
        var s_10 = o.tt(a_18.format);
        r += s_10.stride / 4;
    }
    return n.push("\n            index += stride * 4;\n        }\n    "), n.unshift("\n        var stride = ".concat(r, ";\n    ")), (function () { throw Error("[sapling2d] new Function is not allowed in WeChat Mini Games"); })("ps", "f32v", "u32v", n.join("\n"));
}
function vt() { return (vt = e.n((function () { o.nt(); })))(); }
function yt(e) { var t = []; for (var n_32 in e) {
    var r_23 = e[n_32];
    t.push(n_32, r_23.code, r_23.dynamic ? "d" : "s");
} return t.join("_"); }
var bt;
function xt() { return (xt = e.n((function () { o.N(), o.F(), o.j(), o.nt(), a.m(), vt(), bt = (function () {
    function bt(e) {
        var t;
        this._size = 0, this._generateParticleUpdateCache = {};
        var n = this._size = (t = e.size) == null ? 1e3 : t, r = e.properties, i = 0, s = 0;
        for (var e_68 in r) {
            var t_46 = r[e_68], n_33 = o.tt(t_46.format);
            t_46.dynamic ? s += n_33.stride : i += n_33.stride;
        }
        this._dynamicStride = s / 4, this._staticStride = i / 4, this.staticAttributeBuffer = new a.p(n * 4 * i), this.dynamicAttributeBuffer = new a.p(n * 4 * s), this.indexBuffer = ht(n);
        var c = new o.A, l = 0, u = 0;
        this._staticBuffer = new o.M({ data: new Float32Array(1), label: "static-particle-buffer", shrinkToFit: !1, usage: o.P.VERTEX | o.P.COPY_DST }), this._dynamicBuffer = new o.M({ data: new Float32Array(1), label: "dynamic-particle-buffer", shrinkToFit: !1, usage: o.P.VERTEX | o.P.COPY_DST });
        for (var e_69 in r) {
            var t_47 = r[e_69], n_34 = o.tt(t_47.format);
            t_47.dynamic ? (c.addAttribute(t_47.attributeName, { buffer: this._dynamicBuffer, stride: this._dynamicStride * 4, offset: l * 4, format: t_47.format }), l += n_34.size) : (c.addAttribute(t_47.attributeName, { buffer: this._staticBuffer, stride: this._staticStride * 4, offset: u * 4, format: t_47.format }), u += n_34.size);
        }
        c.addIndex(this.indexBuffer);
        var d = this.getParticleUpdate(r);
        this._dynamicUpload = d.dynamicUpdate, this._staticUpload = d.staticUpdate, this.geometry = c;
    }
    bt.prototype.getParticleUpdate = function (e) { var t = yt(e); return this._generateParticleUpdateCache[t] || (this._generateParticleUpdateCache[t] = this.generateParticleUpdate(e)), this._generateParticleUpdateCache[t]; };
    bt.prototype.generateParticleUpdate = function (e) { return gt(e); };
    bt.prototype.update = function (e, t) { e.length > this._size && (t = !0, this._size = Math.max(e.length, this._size * 1.5 | 0), this.staticAttributeBuffer = new a.p(this._size * this._staticStride * 4 * 4), this.dynamicAttributeBuffer = new a.p(this._size * this._dynamicStride * 4 * 4), this.indexBuffer = ht(this._size), this.geometry.indexBuffer.setDataWithSize(this.indexBuffer, this.indexBuffer.byteLength, !0)); var n = this.dynamicAttributeBuffer; if (this._dynamicUpload(e, n.float32View, n.uint32View), this._dynamicBuffer.setDataWithSize(this.dynamicAttributeBuffer.float32View, e.length * this._dynamicStride * 4, !0), t) {
        var t_48 = this.staticAttributeBuffer;
        this._staticUpload(e, t_48.float32View, t_48.uint32View), this._staticBuffer.setDataWithSize(t_48.float32View, e.length * this._staticStride * 4, !0);
    } };
    bt.prototype.destroy = function () { this._staticBuffer.destroy(), this._dynamicBuffer.destroy(), this.geometry.destroy(); };
    return bt;
}()); })))(); }
var St;
function Ct() {
    return (Ct = e.n((function () {
        St = "varying vec2 vUV;\nvarying vec4 vColor;\n\nuniform sampler2D uTexture;\n\nvoid main(void){\n    vec4 color = texture2D(uTexture, vUV) * vColor;\n    gl_FragColor = color;\n}";
    })))();
}
var wt;
function Tt() {
    return (Tt = e.n((function () {
        wt = "attribute vec2 aVertex;\nattribute vec2 aUV;\nattribute vec4 aColor;\n\nattribute vec2 aPosition;\nattribute float aRotation;\n\nuniform mat3 uTranslationMatrix;\nuniform float uRound;\nuniform vec2 uResolution;\nuniform vec4 uColor;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\n\nvec2 roundPixels(vec2 position, vec2 targetSize)\n{       \n    return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;\n}\n\nvoid main(void){\n    float cosRotation = cos(aRotation);\n    float sinRotation = sin(aRotation);\n    float x = aVertex.x * cosRotation - aVertex.y * sinRotation;\n    float y = aVertex.x * sinRotation + aVertex.y * cosRotation;\n\n    vec2 v = vec2(x, y);\n    v = v + aPosition;\n\n    gl_Position = vec4((uTranslationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);\n\n    if(uRound == 1.0)\n    {\n        gl_Position.xy = roundPixels(gl_Position.xy, uResolution);\n    }\n\n    vUV = aUV;\n    vColor = vec4(aColor.rgb * aColor.a, aColor.a) * uColor;\n}\n";
    })))();
}
var Et;
function Dt() {
    return (Dt = e.n((function () {
        Et = "\nstruct ParticleUniforms {\n  uTranslationMatrix:mat3x3<f32>,\n  uColor:vec4<f32>,\n  uRound:f32,\n  uResolution:vec2<f32>,\n};\n\nfn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32>\n{\n  return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;\n}\n\n@group(0) @binding(0) var<uniform> uniforms: ParticleUniforms;\n\n@group(1) @binding(0) var uTexture: texture_2d<f32>;\n@group(1) @binding(1) var uSampler : sampler;\n\nstruct VSOutput {\n    @builtin(position) position: vec4<f32>,\n    @location(0) uv : vec2<f32>,\n    @location(1) color : vec4<f32>,\n  };\n@vertex\nfn mainVertex(\n  @location(0) aVertex: vec2<f32>,\n  @location(1) aPosition: vec2<f32>,\n  @location(2) aUV: vec2<f32>,\n  @location(3) aColor: vec4<f32>,\n  @location(4) aRotation: f32,\n) -> VSOutput {\n  \n   let v = vec2(\n       aVertex.x * cos(aRotation) - aVertex.y * sin(aRotation),\n       aVertex.x * sin(aRotation) + aVertex.y * cos(aRotation)\n   ) + aPosition;\n\n   var position = vec4((uniforms.uTranslationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);\n\n   if(uniforms.uRound == 1.0) {\n       position = vec4(roundPixels(position.xy, uniforms.uResolution), position.zw);\n   }\n\n    let vColor = vec4(aColor.rgb * aColor.a, aColor.a) * uniforms.uColor;\n\n  return VSOutput(\n   position,\n   aUV,\n   vColor,\n  );\n}\n\n@fragment\nfn mainFragment(\n  @location(0) uv: vec2<f32>,\n  @location(1) color: vec4<f32>,\n  @builtin(position) position: vec4<f32>,\n) -> @location(0) vec4<f32> {\n\n    var sample = textureSample(uTexture, uSampler, uv) * color;\n   \n    return sample;\n}";
    })))();
}
var Ot;
function kt() { return (kt = e.n((function () { r.B(), i.x(), c.P(), c.M(), o.J(), o._t(), o.Tt(), Ct(), Tt(), Dt(), Ot = (function (_super) {
    __extends(Ot, _super);
    function Ot() {
        var e = c.N.from({ vertex: wt, fragment: St }), t = c.j.from({ fragment: { source: Et, entryPoint: "mainFragment" }, vertex: { source: Et, entryPoint: "mainVertex" } });
        return _super.call(this, { glProgram: e, gpuProgram: t, resources: { uTexture: o.gt.WHITE.source, uSampler: new o.wt({}), uniforms: { uTranslationMatrix: { value: new i.b, type: "mat3x3<f32>" }, uColor: { value: new r.z(16777215), type: "vec4<f32>" }, uRound: { value: 1, type: "f32" }, uResolution: { value: [0, 0], type: "vec2<f32>" } } } }) || this;
    }
    return Ot;
}(o.q)); })))(); }
var At;
function jt() { return (jt = e.n((function () { r.Y(), i.x(), o.Q(), o.L(), o.K(), a.f(), xt(), kt(), At = (function () {
    function At(e, t) {
        this.state = o.G.for2d(), this.localUniforms = new o.Z({ uTranslationMatrix: { value: new i.b, type: "mat3x3<f32>" }, uColor: { value: new Float32Array(4), type: "vec4<f32>" }, uRound: { value: 1, type: "f32" }, uResolution: { value: [0, 0], type: "vec2<f32>" } }), this.renderer = e, this.adaptor = t, this.defaultShader = new Ot, this.state = o.G.for2d(), this._managedContainers = new a.d({ renderer: e, type: "renderable", name: "particleContainer" });
    }
    At.prototype.validateRenderable = function (e) { return !1; };
    At.prototype.addRenderable = function (e, t) { this.renderer.renderPipes.batch.break(t), t.add(e); };
    At.prototype.getBuffers = function (e) { return e._gpuData[this.renderer.uid] || this._initBuffer(e); };
    At.prototype._initBuffer = function (e) { return e._gpuData[this.renderer.uid] = new bt({ size: e.particleChildren.length, properties: e._properties }), this._managedContainers.add(e), e._gpuData[this.renderer.uid]; };
    At.prototype.updateRenderable = function (e) { };
    At.prototype.execute = function (e) { var t = e.particleChildren; if (t.length === 0)
        return; var n = this.renderer, r = this.getBuffers(e); e.texture || (e.texture = t[0].texture); var i = this.state; r.update(t, e._childrenDirty), e._childrenDirty = !1, i.blendMode = o.I(e.groupBlendMode, e.texture._source); var a = this.localUniforms.uniforms, c = a.uTranslationMatrix; e.worldTransform.copyTo(c); var l = n.globalUniforms.globalUniformData; c.tx -= l.offset.x, c.ty -= l.offset.y, c.prepend(l.projectionMatrix), a.uResolution = l.resolution, a.uRound = n._roundPixels | e._roundPixels; var u = e.groupColorAlpha, d = l.worldColor, f = (u >>> 24) * (d >>> 24) / 255 | 0, p = s.T(u & 16777215, d & 16777215); s.u((f << 24 | p) >>> 0, a.uColor, 0), this.adaptor.execute(this, e); };
    At.prototype.destroy = function () { this._managedContainers.destroy(), this.renderer = null, this.defaultShader && (this.defaultShader.destroy(), this.defaultShader = null); };
    return At;
}()), At.extension = { type: [r.q.CanvasPipes], name: "particle" }; })))(); }
var Mt;
function Nt() { return (Nt = e.n((function () { r.Y(), jt(), mt(), Mt = (function (_super) {
    __extends(Mt, _super);
    function Mt(e) {
        return _super.call(this, e, new pt) || this;
    }
    return Mt;
}(At)), Mt.extension = { type: [r.q.CanvasPipes], name: "particle" }; })))(); }
var Pt;
function Ft() { return (Ft = e.n((function () { Pt = (function () {
    function Pt() {
    }
    Pt.prototype.execute = function (e, t) { var n = e.state, r = e.renderer, i = t.shader || e.defaultShader; i.resources.uTexture = t.texture._source, i.resources.uniforms = e.localUniforms; var a = r.gl, o = e.getBuffers(t); r.shader.bind(i), r.state.set(n), r.geometry.bind(o.geometry, i.glProgram); var s = o.geometry.indexBuffer.data.BYTES_PER_ELEMENT === 2 ? a.UNSIGNED_SHORT : a.UNSIGNED_INT; a.drawElements(a.TRIANGLES, t.particleChildren.length * 6, s, 0); };
    return Pt;
}()); })))(); }
var It;
function Lt() { return (Lt = e.n((function () { r.Y(), Ft(), jt(), It = (function (_super) {
    __extends(It, _super);
    function It(e) {
        return _super.call(this, e, new Pt) || this;
    }
    return It;
}(At)), It.extension = { type: [r.q.WebGLPipes], name: "particle" }; })))(); }
var Rt;
function zt() { return (zt = e.n((function () { Rt = (function () {
    function Rt() {
    }
    Rt.prototype.execute = function (e, t) { var n = e.renderer, r = t.shader || e.defaultShader; r.groups[0] = n.renderPipes.uniformBatch.getUniformBindGroup(e.localUniforms, !0), r.groups[1] = n.texture.getTextureBindGroup(t.texture); var i = e.state, a = e.getBuffers(t); n.encoder.draw({ geometry: a.geometry, shader: t.shader || e.defaultShader, state: i, size: t.particleChildren.length * 6 }); };
    return Rt;
}()); })))(); }
var Bt;
function Vt() { return (Vt = e.n((function () { r.Y(), zt(), jt(), Bt = (function (_super) {
    __extends(Bt, _super);
    function Bt(e) {
        return _super.call(this, e, new Rt) || this;
    }
    return Bt;
}(At)), Bt.extension = { type: [r.q.WebGPUPipes], name: "particle" }; })))(); }
var Ht, Ut;
function Wt() { return (Wt = e.n((function () { r.B(), o._t(), s.C(), n.o(), Ht = (function () {
    function e(t) {
        if (t instanceof o.gt)
            this.texture = t, s.g(this, e.defaultOptions, {});
        else {
            var r_24 = n.a(n.a({}, e.defaultOptions), t);
            s.g(this, r_24, {});
        }
    }
    Object.defineProperty(e.prototype, "alpha", {
        get: function () { return this._alpha; },
        set: function (e) { this._alpha = Math.min(Math.max(e, 0), 1), this._updateColor(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "tint", {
        get: function () { return s.S(this._tint); },
        set: function (e) { this._tint = r.z.shared.setValue(e == null ? 16777215 : e).toBgrNumber(), this._updateColor(); },
        enumerable: false,
        configurable: true
    });
    e.prototype._updateColor = function () { this.color = this._tint + ((this._alpha * 255 | 0) << 24); };
    return e;
}()), Ht.defaultOptions = { anchorX: 0, anchorY: 0, x: 0, y: 0, scaleX: 1, scaleY: 1, rotation: 0, tint: 16777215, alpha: 1 }, Ut = Ht; })))(); }
var Gt;
function Kt() {
    return (Kt = e.n((function () {
        Gt = { vertex: { attributeName: "aVertex", format: "float32x2", code: "\n            const texture = p.texture;\n            const sx = p.scaleX;\n            const sy = p.scaleY;\n            const ax = p.anchorX;\n            const ay = p.anchorY;\n            const trim = texture.trim;\n            const orig = texture.orig;\n\n            if (trim)\n            {\n                w1 = trim.x - (ax * orig.width);\n                w0 = w1 + trim.width;\n\n                h1 = trim.y - (ay * orig.height);\n                h0 = h1 + trim.height;\n            }\n            else\n            {\n                w1 = -ax * (orig.width);\n                w0 = w1 + orig.width;\n\n                h1 = -ay * (orig.height);\n                h0 = h1 + orig.height;\n            }\n\n            f32v[offset] = w1 * sx;\n            f32v[offset + 1] = h1 * sy;\n\n            f32v[offset + stride] = w0 * sx;\n            f32v[offset + stride + 1] = h1 * sy;\n\n            f32v[offset + (stride * 2)] = w0 * sx;\n            f32v[offset + (stride * 2) + 1] = h0 * sy;\n\n            f32v[offset + (stride * 3)] = w1 * sx;\n            f32v[offset + (stride * 3) + 1] = h0 * sy;\n        ", dynamic: !1 }, position: { attributeName: "aPosition", format: "float32x2", code: "\n            var x = p.x;\n            var y = p.y;\n\n            f32v[offset] = x;\n            f32v[offset + 1] = y;\n\n            f32v[offset + stride] = x;\n            f32v[offset + stride + 1] = y;\n\n            f32v[offset + (stride * 2)] = x;\n            f32v[offset + (stride * 2) + 1] = y;\n\n            f32v[offset + (stride * 3)] = x;\n            f32v[offset + (stride * 3) + 1] = y;\n        ", dynamic: !0 }, rotation: { attributeName: "aRotation", format: "float32", code: "\n            var rotation = p.rotation;\n\n            f32v[offset] = rotation;\n            f32v[offset + stride] = rotation;\n            f32v[offset + (stride * 2)] = rotation;\n            f32v[offset + (stride * 3)] = rotation;\n        ", dynamic: !1 }, uvs: { attributeName: "aUV", format: "float32x2", code: "\n            var uvs = p.texture.uvs;\n\n            f32v[offset] = uvs.x0;\n            f32v[offset + 1] = uvs.y0;\n\n            f32v[offset + stride] = uvs.x1;\n            f32v[offset + stride + 1] = uvs.y1;\n\n            f32v[offset + (stride * 2)] = uvs.x2;\n            f32v[offset + (stride * 2) + 1] = uvs.y2;\n\n            f32v[offset + (stride * 3)] = uvs.x3;\n            f32v[offset + (stride * 3) + 1] = uvs.y3;\n        ", dynamic: !1 }, color: { attributeName: "aColor", format: "unorm8x4", code: "\n            const c = p.color;\n\n            u32v[offset] = c;\n            u32v[offset + stride] = c;\n            u32v[offset + (stride * 2)] = c;\n            u32v[offset + (stride * 3)] = c;\n        ", dynamic: !1 } };
    })))();
}
function qt() { return (qt = e.n((function () { r.Y(), Nt(), Lt(), Vt(), r.J.add(It), r.J.add(Bt), r.J.add(Mt); })))(); }
var Jt, Yt, Xt, Zt;
function Qt() { return (Qt = e.n((function () { s.M(), f(), Kt(), qt(), n.o(), n.i(), Jt = ["dynamicProperties", "shader", "roundPixels", "texture", "particles"], Yt = new s.j(0, 0, 0, 0), Xt = (function (_super) {
    __extends(e, _super);
    function e(t) {
        if (t === void 0) { t = {}; }
        var _this = this;
        t = n.a(n.a(n.a({}, e.defaultOptions), t), {}, { dynamicProperties: n.a(n.a({}, e.defaultOptions.dynamicProperties), t == null ? void 0 : t.dynamicProperties) });
        var r = t.dynamicProperties, i = t.shader, a = t.roundPixels, o = t.texture, s = t.particles, c = n.r(t, Jt);
        _this = _super.call(this, n.a({ label: "ParticleContainer" }, c)) || this, _this.renderPipeId = "particle", _this.batched = !1, _this._childrenDirty = !1, _this.texture = o || null, _this.shader = i, _this._properties = {};
        for (var e_70 in Gt) {
            var t_49 = Gt[e_70], i_17 = r[e_70];
            _this._properties[e_70] = n.a(n.a({}, t_49), {}, { dynamic: i_17 });
        }
        _this.allowChildren = !0, _this.roundPixels = a != null && a, _this.particleChildren = s == null ? [] : s;
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
            var r_25 = this.particleChildren.indexOf(e[n_35]);
            r_25 > -1 && (this.particleChildren.splice(r_25, 1), t = !0);
        }
        return t && this.onViewUpdate(), e[0];
    };
    e.prototype.update = function () { this._childrenDirty = !0; };
    e.prototype.onViewUpdate = function () { this._childrenDirty = !0, _super.prototype.onViewUpdate.call(this); };
    Object.defineProperty(e.prototype, "bounds", {
        get: function () { return Yt; },
        enumerable: false,
        configurable: true
    });
    e.prototype.updateBounds = function () { };
    e.prototype.destroy = function (e) {
        if (e === void 0) { e = !1; }
        var t;
        if (_super.prototype.destroy.call(this, e), typeof e == "boolean" ? e : e != null && e.texture) {
            var n, r;
            var t_51 = typeof e == "boolean" ? e : e == null ? void 0 : e.textureSource, i_18 = (n = this.texture) == null ? (r = this.particleChildren[0]) == null ? void 0 : r.texture : n;
            i_18 && i_18.destroy(t_51);
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
}(d)), Xt.defaultOptions = { dynamicProperties: { vertex: !1, position: !0, rotation: !1, uvs: !1, color: !1 }, roundPixels: !1 }, Zt = Xt; })))(); }
function $t(e, t, n, r, i, a, o) { e[0][0] = t, e[0][1] = n, e[1][0] = r, e[1][1] = i, e[2][0] = a, e[2][1] = o; }
var en, tn, nn, rn, an;
function on() { return (on = e.n((function () { r.Y(), c.w(), s.C(), en = [[0, 0], [0, 0], [0, 0]], tn = [[0, 0], [0, 0], [0, 0]], nn = [[0, 0], [0, 0], [0, 0]], rn = [[0, 0], [0, 0], [0, 0]], an = (function () {
    function an(e) {
        this._renderer = e;
    }
    an.prototype.validateRenderable = function (e) { return !1; };
    an.prototype.addRenderable = function (e, t) { this._renderer.renderPipes.batch.break(t), t.add(e); };
    an.prototype.updateRenderable = function (e) { };
    an.prototype.execute = function (e) { var t, n, r, i, a, o; var l = this._renderer, u = l.canvasContext, d = u.activeContext; d.save(); var f = e.groupTransform, p = l._roundPixels | e._roundPixels; u.setContextTransform(f, p === 1), u.setBlendMode(e.groupBlendMode); var m = (t = (n = l.globalUniforms.globalUniformData) == null ? void 0 : n.worldColor) == null ? 4294967295 : t, h = e.groupColorAlpha, g = (m >>> 24 & 255) / 255, _ = (h >>> 24 & 255) / 255, v = (r = (i = l.filter) == null ? void 0 : i.alphaMultiplier) == null ? 1 : r, y = g * _ * v; if (y <= 0) {
        d.restore();
        return;
    } d.globalAlpha = y; var b = m & 16777215, x = h & 16777215, S = s.S(s.T(x, b)), C = e.texture, w = c.C.getCanvasSource(C); if (!w) {
        d.restore();
        return;
    } var T = u.smoothProperty, E = C.source.style.scaleMode !== "nearest"; d[T] !== E && (d[T] = E); var D = S !== 16777215 || C.rotate !== 0, O = D ? c.C.getTintedCanvas({ texture: C }, S) : w, k = e.leftWidth, A = e.topHeight, j = e.rightWidth, M = e.bottomHeight, N = e.width, P = e.height, ee = k + j, te = A + M, F = Math.min(ee > N ? N / ee : 1, te > P ? P / te : 1, 1), I = k * F, ne = j * F, re = A * F, ie = M * F, ae = Math.max(0, N - I - ne), oe = Math.max(0, P - re - ie), se = e.anchor, L = (a = (o = C.source._resolution) == null ? C.source.resolution : o) == null ? 1 : a, R = C.frame.x * L, z = C.frame.y * L, B = -se.x * N, ce = -se.y * P, V = k * L, H = A * L, U = j * L, W = M * L, G = C.frame.width * L, K = C.frame.height * L; D && (R = 0, z = 0, G = O.width, K = O.height); var q = G - V - U, J = K - H - W, le = q > 0 ? R + V : Math.max(R, Math.min(R + V, R + G - 1)), ue = q > 0 ? q : 1, de = J > 0 ? z + H : Math.max(z, Math.min(z + H, z + K - 1)), fe = J > 0 ? J : 1; $t(en, R, V, le, ue, R + G - U, U), $t(tn, z, H, de, fe, z + K - W, W), $t(nn, B, I, B + I, ae, B + N - ne, ne), $t(rn, ce, re, ce + re, oe, ce + P - ie, ie); for (var e_71 = 0; e_71 < 3; e_71++) {
        var t_52 = nn[e_71][1];
        if (t_52 <= 0)
            continue;
        var n_36 = en[e_71][0], r_26 = en[e_71][1], i_19 = nn[e_71][0];
        for (var e_72 = 0; e_72 < 3; e_72++) {
            var a_19 = rn[e_72][1];
            a_19 <= 0 || d.drawImage(O, n_36, tn[e_72][0], r_26, tn[e_72][1], i_19, rn[e_72][0], t_52, a_19);
        }
    } d.restore(); };
    an.prototype.destroy = function () { this._renderer = null; };
    return an;
}()), an.extension = { type: [r.q.CanvasPipes], name: "nineSliceSprite" }; })))(); }
var sn, $;
function cn() { return (cn = e.n((function () { ft(), n.o(), sn = (function (_super) {
    __extends(e, _super);
    function e(t) {
        if (t === void 0) { t = {}; }
        var _this = this;
        var r, i;
        t = n.a(n.a({}, e.defaultOptions), t), _this = _super.call(this, { width: t.width, height: t.height, verticesX: 4, verticesY: 4 }) || this, _this._trimX = 0, _this._trimY = 0, _this._trimWidth = (r = t.originalWidth) == null ? e.defaultOptions.originalWidth : r, _this._trimHeight = (i = t.originalHeight) == null ? e.defaultOptions.originalHeight : i, _this.update(t);
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
}(dt)), sn.defaultOptions = { width: 100, height: 100, leftWidth: 10, topHeight: 10, rightWidth: 10, bottomHeight: 10, originalWidth: 100, originalHeight: 100 }, $ = sn; })))(); }
var ln, un;
function dn() { return (dn = e.n((function () { r.Y(), a.f(), j(), cn(), ln = (function (_super) {
    __extends(ln, _super);
    function ln() {
        var _this = this;
        _this = _super.call(this) || this, _this.geometry = new $;
        return _this;
    }
    ln.prototype.destroy = function () { this.geometry.destroy(); };
    return ln;
}(A)), un = (function () {
    function un(e) {
        this._renderer = e, this._managedSprites = new a.d({ renderer: e, type: "renderable", name: "nineSliceSprite" });
    }
    un.prototype.addRenderable = function (e, t) { var n = this._getGpuSprite(e); e.didViewUpdate && this._updateBatchableSprite(e, n), this._renderer.renderPipes.batch.addToBatch(n, t); };
    un.prototype.updateRenderable = function (e) { var t = this._getGpuSprite(e); e.didViewUpdate && this._updateBatchableSprite(e, t), t._batcher.updateElement(t); };
    un.prototype.validateRenderable = function (e) { var t = this._getGpuSprite(e); return !t._batcher.checkAndUpdateTexture(t, e._texture); };
    un.prototype._updateBatchableSprite = function (e, t) { t.geometry.update(e), t.setTexture(e._texture); };
    un.prototype._getGpuSprite = function (e) { return e._gpuData[this._renderer.uid] || this._initGPUSprite(e); };
    un.prototype._initGPUSprite = function (e) { var t = e._gpuData[this._renderer.uid] = new ln, n = t; return n.renderable = e, n.transform = e.groupTransform, n.texture = e._texture, n.roundPixels = this._renderer._roundPixels | e._roundPixels, this._managedSprites.add(e), e.didViewUpdate || this._updateBatchableSprite(e, n), t; };
    un.prototype.destroy = function () { this._managedSprites.destroy(), this._renderer = null; };
    return un;
}()), un.extension = { type: [r.q.WebGLPipes, r.q.WebGPUPipes], name: "nineSliceSprite" }; })))(); }
function fn() { return (fn = e.n((function () { r.Y(), on(), dn(), r.J.add(an), r.J.add(un); })))(); }
var pn, mn, hn;
function gn() { return (gn = e.n((function () { i.O(), o._t(), f(), cn(), fn(), n.i(), n.o(), pn = ["width", "height", "anchor", "leftWidth", "rightWidth", "topHeight", "bottomHeight", "texture", "roundPixels"], mn = (function (_super) {
    __extends(e, _super);
    function e(t) {
        var _this = this;
        var r, a, s, c, l, u, d, f, p, m;
        t instanceof o.gt && (t = { texture: t });
        var h = t.width, g = t.height, _ = t.anchor, v = t.leftWidth, y = t.rightWidth, b = t.topHeight, x = t.bottomHeight, S = t.texture, C = t.roundPixels, w = n.r(t, pn);
        _this = _super.call(this, n.a({ label: "NineSliceSprite" }, w)) || this, _this.renderPipeId = "nineSliceSprite", _this.batched = !0, _this._leftWidth = (r = v == null ? S == null || (a = S.defaultBorders) == null ? void 0 : a.left : v) == null ? $.defaultOptions.leftWidth : r, _this._topHeight = (s = b == null ? S == null || (c = S.defaultBorders) == null ? void 0 : c.top : b) == null ? $.defaultOptions.topHeight : s, _this._rightWidth = (l = y == null ? S == null || (u = S.defaultBorders) == null ? void 0 : u.right : y) == null ? $.defaultOptions.rightWidth : l, _this._bottomHeight = (d = x == null ? S == null || (f = S.defaultBorders) == null ? void 0 : f.bottom : x) == null ? $.defaultOptions.bottomHeight : d, _this._width = (p = h == null ? S.width : h) == null ? $.defaultOptions.width : p, _this._height = (m = g == null ? S.height : g) == null ? $.defaultOptions.height : m, _this.allowChildren = !1, _this.texture = S == null ? e.defaultOptions.texture : S, _this.roundPixels = C != null && C, _this._anchor = new i.D({ _onUpdate: function () { _this.onViewUpdate(); } }), _ ? _this.anchor = _ : _this.texture.defaultAnchor && (_this.anchor = _this.texture.defaultAnchor);
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
        set: function (e) { e || (e = o.gt.EMPTY); var t = this._texture; t !== e && (t && t.dynamic && t.off("update", this.onViewUpdate, this), e.dynamic && e.on("update", this.onViewUpdate, this), this._texture = e, this.onViewUpdate()); },
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
}(d)), mn.defaultOptions = { texture: o.gt.EMPTY }, hn = mn; })))(); }
Object.defineProperty(exports, "C", { enumerable: !0, get: function () { return w; } }), Object.defineProperty(exports, "D", { enumerable: !0, get: function () { return h; } }), Object.defineProperty(exports, "E", { enumerable: !0, get: function () { return m; } }), Object.defineProperty(exports, "O", { enumerable: !0, get: function () { return d; } }), Object.defineProperty(exports, "S", { enumerable: !0, get: function () { return k; } }), Object.defineProperty(exports, "T", { enumerable: !0, get: function () { return C; } }), Object.defineProperty(exports, "_", { enumerable: !0, get: function () { return Ge; } }), Object.defineProperty(exports, "a", { enumerable: !0, get: function () { return Qt; } }), Object.defineProperty(exports, "b", { enumerable: !0, get: function () { return I; } }), Object.defineProperty(exports, "c", { enumerable: !0, get: function () { return Wt; } }), Object.defineProperty(exports, "d", { enumerable: !0, get: function () { return ct; } }), Object.defineProperty(exports, "f", { enumerable: !0, get: function () { return lt; } }), Object.defineProperty(exports, "g", { enumerable: !0, get: function () { return at; } }), Object.defineProperty(exports, "h", { enumerable: !0, get: function () { return it; } }), Object.defineProperty(exports, "i", { enumerable: !0, get: function () { return Zt; } }), Object.defineProperty(exports, "k", { enumerable: !0, get: function () { return f; } }), Object.defineProperty(exports, "l", { enumerable: !0, get: function () { return bt; } }), Object.defineProperty(exports, "m", { enumerable: !0, get: function () { return st; } }), Object.defineProperty(exports, "n", { enumerable: !0, get: function () { return gn; } }), Object.defineProperty(exports, "o", { enumerable: !0, get: function () { return qt; } }), Object.defineProperty(exports, "p", { enumerable: !0, get: function () { return ot; } }), Object.defineProperty(exports, "r", { enumerable: !0, get: function () { return fn; } }), Object.defineProperty(exports, "s", { enumerable: !0, get: function () { return Ut; } }), Object.defineProperty(exports, "t", { enumerable: !0, get: function () { return hn; } }), Object.defineProperty(exports, "u", { enumerable: !0, get: function () { return xt; } }), Object.defineProperty(exports, "v", { enumerable: !0, get: function () { return Ke; } }), Object.defineProperty(exports, "w", { enumerable: !0, get: function () { return E; } }), Object.defineProperty(exports, "x", { enumerable: !0, get: function () { return O; } }), Object.defineProperty(exports, "y", { enumerable: !0, get: function () { return F; } });
