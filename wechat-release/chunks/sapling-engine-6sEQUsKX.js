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
var e = require("./rolldown-runtime-8PkXcCTM.js"), t = require("./sapling-engine-OS5i6gdH.js"), n = require("./sapling-engine-Dk_0uYx9.js"), r = require("./sapling-engine-nIouhjEF.js"), i = require("./sapling-engine-BKSSueUl.js"), a = require("./sapling-engine-sX7qVz9U.js"), o = require("./sapling-engine-DdkTJwUg.js"), s = require("./sapling-engine-BIAzTs9D.js"), c = require("./sapling-engine-DRXIDWb4.js");
var l, u;
function d() { return (d = e.n((function () { n.Y(), i.P(), l = (function () {
    function l() {
        this._effectClasses = [], this._tests = [], this._initialized = !1;
    }
    l.prototype.init = function () {
        var _this = this;
        this._initialized || (this._initialized = !0, this._effectClasses.forEach(function (e) { _this.add({ test: e.test, maskClass: e }); }));
    };
    l.prototype.add = function (e) { this._tests.push(e); };
    l.prototype.getMaskEffect = function (e) { this._initialized || this.init(); for (var t_1 = 0; t_1 < this._tests.length; t_1++) {
        var n_1 = this._tests[t_1];
        if (n_1.test(e))
            return i.N.get(n_1.maskClass, e);
    } return e; };
    l.prototype.returnMaskEffect = function (e) { i.N.return(e); };
    return l;
}()), u = new l, n.J.handleByList(n.q.MaskEffect, u._effectClasses); })))(); }
function f(e, t, n) { var r = p; e.measurable = !0, o.E(e, n, r), t.addBoundsMask(r), e.measurable = !1; }
var p;
function m() { return (m = e.n((function () { o.M(), o.D(), p = new o.j; })))(); }
function ee(e, t, n) { var r = o.O.get(); e.measurable = !0; var i = o.A.get().identity(), a = te(e, n, i); o.b(e, r, a), e.measurable = !1, t.addBoundsMask(r), o.A.return(i), o.O.return(r); }
function te(e, t, n) { return e ? (e !== t && (te(e.parent, t, n), e.updateLocalTransform(), n.append(e.localTransform)), n) : (i.R("Mask bounds, renderable is not inside the root container"), n); }
function h() { return (h = e.n((function () { o.x(), o.k(), i.L(); })))(); }
var g;
function ne() { return (ne = e.n((function () { n.Y(), s.D(), m(), h(), g = (function () {
    function g(e) {
        this.priority = 0, this.inverse = !1, this.channel = "red", this.pipe = "alphaMask", e != null && e.mask && this.init(e.mask);
    }
    g.prototype.init = function (e) { this.mask = e, this.renderMaskToTexture = !(e instanceof s.E), this.mask.renderable = this.renderMaskToTexture, this.mask.includeInBuild = !this.renderMaskToTexture, this.mask.measurable = !1; };
    g.prototype.reset = function () { this.mask !== null && (this.mask.measurable = !0, this.mask = null); };
    g.prototype.addBounds = function (e, t) { this.inverse || f(this.mask, e, t); };
    g.prototype.addLocalBounds = function (e, t) { ee(this.mask, e, t); };
    g.prototype.containsPoint = function (e, t) { var n = this.mask; return t(n, e); };
    g.prototype.destroy = function () { this.reset(); };
    g.test = function (e) { return e instanceof s.E; };
    return g;
}()), g.extension = n.q.MaskEffect; })))(); }
var re;
function ie() { return (ie = e.n((function () { n.Y(), re = (function () {
    function re(e) {
        this.priority = 0, this.pipe = "colorMask", e != null && e.mask && this.init(e.mask);
    }
    re.prototype.init = function (e) { this.mask = e; };
    re.prototype.destroy = function () { };
    re.test = function (e) { return typeof e == "number"; };
    return re;
}()), re.extension = n.q.MaskEffect; })))(); }
var _;
function ae() { return (ae = e.n((function () { n.Y(), o.h(), m(), h(), _ = (function () {
    function _(e) {
        this.priority = 0, this.pipe = "stencilMask", e != null && e.mask && this.init(e.mask);
    }
    _.prototype.init = function (e) { this.mask = e, this.mask.includeInBuild = !1, this.mask.measurable = !1; };
    _.prototype.reset = function () { this.mask !== null && (this.mask.measurable = !0, this.mask.includeInBuild = !0, this.mask = null); };
    _.prototype.addBounds = function (e, t) { f(this.mask, e, t); };
    _.prototype.addLocalBounds = function (e, t) { ee(this.mask, e, t); };
    _.prototype.containsPoint = function (e, t) { var n = this.mask; return t(n, e); };
    _.prototype.destroy = function () { this.reset(); };
    _.test = function (e) { return e instanceof o.m; };
    return _;
}()), _.extension = n.q.MaskEffect; })))(); }
function oe() { return (!v || v != null && v.isContextLost()) && (v = n.N.get().createCanvas().getContext("webgl", {})), v; }
var v;
function se() { return (se = e.n((function () { n.P(); })))(); }
function ce() { if (!y) {
    y = "mediump";
    var e_1 = oe();
    e_1 && e_1.getShaderPrecisionFormat && (y = e_1.getShaderPrecisionFormat(e_1.FRAGMENT_SHADER, e_1.HIGH_FLOAT).precision ? "highp" : "mediump");
} return y; }
var y;
function le() { return (le = e.n((function () { se(); })))(); }
function ue(e, t, n) {
    return t ? e : n ? (e = e.replace("out vec4 finalColor;", ""), "\n\n        #ifdef GL_ES // This checks if it is WebGL1\n        #define in varying\n        #define finalColor gl_FragColor\n        #define texture texture2D\n        #endif\n        ".concat(e, "\n        ")) : "\n\n        #ifdef GL_ES // This checks if it is WebGL1\n        #define in attribute\n        #define out varying\n        #endif\n        ".concat(e, "\n        ");
}
function de(e, t, n) {
    var r = n ? t.maxSupportedFragmentPrecision : t.maxSupportedVertexPrecision;
    if (e.substring(0, 9) !== "precision") {
        var i_1 = n ? t.requestedFragmentPrecision : t.requestedVertexPrecision;
        i_1 === "highp" && r !== "highp" && (i_1 = "mediump"), e = "precision ".concat(i_1, " float;\n").concat(e);
    }
    else
        r !== "highp" && e.substring(0, 15) === "precision highp" && (e = e.replace("precision highp", "precision mediump"));
    var i = t.maxSupportedFragmentPrecision === "highp" ? "highp" : "mediump";
    return fe(e, i);
}
function fe(e, t) {
    var n = new Set, r = "";
    for (var _i = 0, _a = e.matchAll(me); _i < _a.length; _i++) {
        var _b = _a[_i], t_2 = _b[1];
        n.add(t_2);
    }
    for (var _c = 0, _d = e.matchAll(pe); _c < _d.length; _c++) {
        var _f = _d[_c], a_1 = _f[1];
        var i;
        n.has(a_1) || (n.add(a_1), r += "precision ".concat((i = he[a_1]) == null ? t : i, " ").concat(a_1, ";\n"));
    }
    return r + e;
}
var pe, me, he;
function ge() { return (ge = e.n((function () { pe = /\buniform\s+([iu]?sampler\w+)/g, me = /\bprecision\s+\w+\s+([iu]?sampler\w+)\s*;/g, he = { sampler2D: "lowp", samplerCube: "lowp" }; })))(); }
function _e(e, t) {
    return t ? "#version 300 es\n".concat(e) : e;
}
function ve(e, _a, n) {
    var _b = _a.name, t = _b === void 0 ? "pixi-program" : _b;
    if (n === void 0) { n = !0; }
    t = t.replace(/\s+/g, "-"), t += n ? "-fragment" : "-vertex";
    var r = n ? ye : be;
    return r[t] ? (r[t]++, t += "-".concat(r[t])) : r[t] = 1, e.indexOf("#define SHADER_NAME") === -1 ? "".concat("#define SHADER_NAME ".concat(t), "\n").concat(e) : e;
}
var ye, be;
function xe() { return (xe = e.n((function () { ye = {}, be = {}; })))(); }
function Se(e, t) { return t ? e.replace("#version 300 es", "") : e; }
var b, x, Ce, S;
function we() { return (we = e.n((function () { a.it(), le(), ge(), xe(), t.o(), b = { stripVersion: Se, ensurePrecision: de, addProgramDefines: ue, setProgramName: ve, insertVersion: _e }, x = Object.create(null), Ce = (function () {
    function e(n) {
        n = t.a(t.a({}, e.defaultOptions), n);
        var r = n.fragment.indexOf("#version 300 es") !== -1, i = { stripVersion: r, ensurePrecision: { requestedFragmentPrecision: n.preferredFragmentPrecision, requestedVertexPrecision: n.preferredVertexPrecision, maxSupportedVertexPrecision: "highp", maxSupportedFragmentPrecision: ce() }, setProgramName: { name: n.name }, addProgramDefines: r, insertVersion: r }, o = n.fragment, s = n.vertex;
        Object.keys(b).forEach(function (e) { var t = i[e]; o = b[e](o, t, !0), s = b[e](s, t, !1); }), this.fragment = o, this.vertex = s, this.transformFeedbackVaryings = n.transformFeedbackVaryings, this._key = a.rt("".concat(this.vertex, ":").concat(this.fragment), "gl-program");
    }
    e.prototype.destroy = function () { this.fragment = null, this.vertex = null, this._attributeData = null, this._uniformData = null, this._uniformBlockData = null, this.transformFeedbackVaryings = null, x[this._cacheKey] = null; };
    e.from = function (t) { var n = "".concat(t.vertex, ":").concat(t.fragment); return x[n] || (x[n] = new e(t), x[n]._cacheKey = n), x[n]; };
    return e;
}()), Ce.defaultOptions = { preferredVertexPrecision: "highp", preferredFragmentPrecision: "mediump" }, S = Ce; })))(); }
function Te(e, t) { var n; for (; (n = ke.exec(e)) !== null;) {
    var r;
    var e_2 = (r = Oe[n[3]]) == null ? "float32" : r;
    t[n[2]] = { location: parseInt(n[1], 10), format: e_2, stride: a.tt(e_2).stride, offset: 0, instance: !1, start: 0 };
} ke.lastIndex = 0; }
function Ee(e) { return e.replace(/\/\/.*$/gm, "").replace(/\/\*[\s\S]*?\*\//g, ""); }
function De(_a) {
    var e = _a.source, t = _a.entryPoint;
    var n = {}, r = Ee(e), i = r.indexOf("fn ".concat(t, "("));
    if (i === -1)
        return n;
    var a = r.indexOf("->", i);
    if (a === -1)
        return n;
    var o = r.substring(i, a);
    if (Te(o, n), Object.keys(n).length === 0) {
        var e_3 = o.match(/\(\s*\w+\s*:\s*(\w+)/);
        if (e_3) {
            var t_3 = e_3[1], i_2 = RegExp("struct\\s+".concat(t_3, "\\s*\\{([^}]+)\\}"), "s"), a_2 = r.match(i_2);
            a_2 && Te(a_2[1], n);
        }
    }
    return n;
}
var Oe, ke;
function Ae() { return (Ae = e.n((function () { a.nt(), Oe = { f32: "float32", "vec2<f32>": "float32x2", "vec3<f32>": "float32x3", "vec4<f32>": "float32x4", vec2f: "float32x2", vec3f: "float32x3", vec4f: "float32x4", i32: "sint32", "vec2<i32>": "sint32x2", "vec3<i32>": "sint32x3", "vec4<i32>": "sint32x4", vec2i: "sint32x2", vec3i: "sint32x3", vec4i: "sint32x4", u32: "uint32", "vec2<u32>": "uint32x2", "vec3<u32>": "uint32x3", "vec4<u32>": "uint32x4", vec2u: "uint32x2", vec3u: "uint32x3", vec4u: "uint32x4", bool: "uint32", "vec2<bool>": "uint32x2", "vec3<bool>": "uint32x3", "vec4<bool>": "uint32x4" }, ke = /@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|\)|$)/g; })))(); }
function je(e) { var t, n, r; var i = /(^|[^/])@(group|binding)\(\d+\)[^;]+;/g, a = /@group\((\d+)\)/, o = /@binding\((\d+)\)/, s = /var(<[^>]+>)? (\w+)/, c = /:\s*([\w<>]+)/, l = /struct\s+(\w+)\s*{([^}]+)}/g, u = /(\w+)\s*:\s*([\w\<\>]+)/g, d = /struct\s+(\w+)/, f = (t = e.match(i)) == null ? void 0 : t.map(function (e) { var t; var n = e.match(s), r = (t = n == null ? void 0 : n[1]) == null ? "" : t, i; return r === "<uniform>" ? i = "uniform" : r.startsWith("<storage") && (i = "storage"), { group: parseInt(e.match(a)[1], 10), binding: parseInt(e.match(o)[1], 10), name: n[2], accessMode: i, type: e.match(c)[1] }; }); return f ? { groups: f, structs: (n = (r = e.match(l)) == null ? void 0 : r.map(function (e) { var t = e.match(d)[1], n = e.match(u).reduce(function (e, t) { var _a = t.split(":"), n = _a[0], r = _a[1]; return e[n.trim()] = r.trim(), e; }, {}); return n ? { name: t, members: n } : null; }).filter(function (_a) {
        var e = _a.name;
        return f.some(function (t) { return t.type === e || t.type.includes("<".concat(e, ">")); });
    })) == null ? [] : n } : { groups: [], structs: [] }; }
function C(e) { return e.endsWith("<u32>") ? "uint" : e.endsWith("<i32>") ? "sint" : "float"; }
function Me(_a) {
    var e = _a.groups;
    var t = [];
    for (var n_2 = 0; n_2 < e.length; n_2++) {
        var r_1 = e[n_2];
        t[r_1.group] || (t[r_1.group] = []), r_1.accessMode === "uniform" ? t[r_1.group].push({ binding: r_1.binding, visibility: a.$.VERTEX | a.$.FRAGMENT, buffer: { type: "uniform" } }) : r_1.accessMode === "storage" ? t[r_1.group].push({ binding: r_1.binding, visibility: a.$.VERTEX | a.$.FRAGMENT, buffer: { type: "read-only-storage" } }) : r_1.type === "sampler" ? t[r_1.group].push({ binding: r_1.binding, visibility: a.$.VERTEX | a.$.FRAGMENT, sampler: { type: "filtering" } }) : r_1.type === "sampler_comparison" ? t[r_1.group].push({ binding: r_1.binding, visibility: a.$.VERTEX | a.$.FRAGMENT, sampler: { type: "comparison" } }) : r_1.type === "texture_2d" || r_1.type.startsWith("texture_2d<") ? t[r_1.group].push({ binding: r_1.binding, visibility: a.$.VERTEX | a.$.FRAGMENT, texture: { sampleType: C(r_1.type), viewDimension: "2d", multisampled: !1 } }) : r_1.type === "texture_depth_2d" ? t[r_1.group].push({ binding: r_1.binding, visibility: a.$.VERTEX | a.$.FRAGMENT, texture: { sampleType: "depth", viewDimension: "2d", multisampled: !1 } }) : r_1.type === "texture_depth_2d_array" ? t[r_1.group].push({ binding: r_1.binding, visibility: a.$.VERTEX | a.$.FRAGMENT, texture: { sampleType: "depth", viewDimension: "2d-array", multisampled: !1 } }) : r_1.type === "texture_2d_array" || r_1.type.startsWith("texture_2d_array<") ? t[r_1.group].push({ binding: r_1.binding, visibility: a.$.VERTEX | a.$.FRAGMENT, texture: { sampleType: C(r_1.type), viewDimension: "2d-array", multisampled: !1 } }) : r_1.type === "texture_3d" || r_1.type.startsWith("texture_3d<") ? t[r_1.group].push({ binding: r_1.binding, visibility: a.$.VERTEX | a.$.FRAGMENT, texture: { sampleType: C(r_1.type), viewDimension: "3d", multisampled: !1 } }) : (r_1.type === "texture_cube" || r_1.type.startsWith("texture_cube<")) && t[r_1.group].push({ binding: r_1.binding, visibility: a.$.VERTEX | a.$.FRAGMENT, texture: { sampleType: C(r_1.type), viewDimension: "cube", multisampled: !1 } });
    }
    for (var e_4 = 0; e_4 < t.length; e_4++)
        t[e_4] || (t[e_4] = []);
    return t;
}
function Ne() { return (Ne = e.n((function () { a.et(); })))(); }
function Pe(_a) {
    var e = _a.groups;
    var t = [];
    for (var n_3 = 0; n_3 < e.length; n_3++) {
        var r_2 = e[n_3];
        t[r_2.group] || (t[r_2.group] = {}), t[r_2.group][r_2.name] = r_2.binding;
    }
    return t;
}
function Fe(e, t) { var n = new Set, r = new Set; return { structs: __spreadArray(__spreadArray([], e.structs, true), t.structs, true).filter(function (e) { return !n.has(e.name) && (n.add(e.name), !0); }), groups: __spreadArray(__spreadArray([], e.groups, true), t.groups, true).filter(function (e) { var t = "".concat(e.name, "-").concat(e.binding); return !r.has(t) && (r.add(t), !0); }) }; }
var w, Ie;
function Le() { return (Le = e.n((function () { a.it(), Ae(), Ne(), w = Object.create(null), Ie = (function () {
    function e(e) {
        var t, n;
        this._layoutKey = 0, this._attributeLocationsKey = 0;
        var r = e.fragment, i = e.vertex, a = e.layout, o = e.gpuLayout, s = e.name;
        if (this.name = s, this.fragment = r, this.vertex = i, r.source === i.source) {
            var e_5 = je(r.source);
            this.structsAndGroups = e_5;
        }
        else {
            var e_6 = je(i.source), t_4 = je(r.source);
            this.structsAndGroups = Fe(e_6, t_4);
        }
        this.layout = a == null ? Pe(this.structsAndGroups) : a, this.gpuLayout = o == null ? Me(this.structsAndGroups) : o, this.autoAssignGlobalUniforms = ((t = this.layout[0]) == null ? void 0 : t.globalUniforms) !== void 0, this.autoAssignLocalUniforms = ((n = this.layout[1]) == null ? void 0 : n.localUniforms) !== void 0, this._generateProgramKey();
    }
    e.prototype._generateProgramKey = function () { var _a = this, e = _a.vertex, t = _a.fragment, n = e.source + t.source + e.entryPoint + t.entryPoint; this._layoutKey = a.rt(n, "program"); };
    Object.defineProperty(e.prototype, "attributeData", {
        get: function () { return this._attributeData != null || (this._attributeData = De(this.vertex)), this._attributeData; },
        enumerable: false,
        configurable: true
    });
    e.prototype.destroy = function () { this.gpuLayout = null, this.layout = null, this.structsAndGroups = null, this.fragment = null, this.vertex = null, w[this._cacheKey] = null; };
    e.from = function (t) { var n = "".concat(t.vertex.source, ":").concat(t.fragment.source, ":").concat(t.fragment.entryPoint, ":").concat(t.vertex.entryPoint); return w[n] || (w[n] = new e(t), w[n]._cacheKey = n), w[n]; };
    return e;
}()); })))(); }
var Re;
function ze() { return (ze = e.n((function () { i.L(), Re = (function () {
    function Re(e) {
        this.resources = Object.create(null), this._resourceKeysValue = null, this._dirty = !0;
        var t = 0;
        for (var n_4 in e) {
            var r_3 = e[n_4];
            this.setResource(r_3, t++);
        }
    }
    Object.defineProperty(Re.prototype, "_resourceKeys", {
        get: function () { return this._resourceKeysValue != null || (this._resourceKeysValue = Object.keys(this.resources).map(Number)), this._resourceKeysValue; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Re.prototype, "_key", {
        get: function () { if (this._dirty) {
            this._dirty = !1;
            var e_7 = [], t_5 = 0;
            for (var n_5 in this.resources)
                e_7[t_5++] = this.resources[n_5] ? this.resources[n_5]._resourceId : -1;
            this._keyValue = e_7.join("|");
        } return this._keyValue; },
        enumerable: false,
        configurable: true
    });
    Re.prototype.setResource = function (e, t) { var n; var r = this.resources[t]; if (e !== r) {
        if (r) {
            var i;
            (i = r.off) == null || i.call(r, "change", this.onResourceChange, this);
        }
        (n = e.on) == null || n.call(e, "change", this.onResourceChange, this), r === void 0 && (this._resourceKeysValue = null), this.resources[t] = e, this._dirty = !0;
    } };
    Re.prototype.getResource = function (e) { return this.resources[e]; };
    Re.prototype._touch = function (e) { var t = this.resources, n = this._resourceKeys; for (var r_4 = 0; r_4 < n.length; r_4++) {
        var i_3 = t[n[r_4]];
        i_3 && (i_3._gcLastUsed = e);
    } };
    Re.prototype.destroy = function () { var e = this.resources; for (var n_6 in e) {
        var t;
        var r_5 = e[n_6];
        r_5 == null || (t = r_5.off) == null || t.call(r_5, "change", this.onResourceChange, this);
    } this.resources = null, this._resourceKeysValue = null; };
    Re.prototype.onResourceChange = function (e) { if (this._dirty = !0, e.destroyed) {
        var t_6 = this.resources;
        for (var n_7 in t_6)
            t_6[n_7] === e && (t_6[n_7] = null);
        i.R("[BindGroup] a '".concat(e._resourceType, "' was destroyed while still bound to a shader. Remove it from the shader before destroying it."));
    } };
    return Re;
}()); })))(); }
var T;
function E() { return (E = e.n((function () { T = (function (e) { return (e[e.NONE = 0] = "NONE", e[e.COLOR = 16384] = "COLOR", e[e.STENCIL = 1024] = "STENCIL", e[e.DEPTH = 256] = "DEPTH", e[e.COLOR_DEPTH = 16640] = "COLOR_DEPTH", e[e.COLOR_STENCIL = 17408] = "COLOR_STENCIL", e[e.DEPTH_STENCIL = 1280] = "DEPTH_STENCIL", e[e.ALL = 17664] = "ALL", e); })(T || {}); })))(); }
function Be(e) { var t = Ve[e]; if (t)
    return t; var n = new Int32Array(e); for (var t_7 = 0; t_7 < e; t_7++)
    n[t_7] = t_7; return t = Ve[e] = new a.Z({ uTextures: { value: n, type: "i32", size: e } }, { isStatic: !0 }), t; }
var Ve;
function He() { return (He = e.n((function () { a.Q(), Ve = {}; })))(); }
function Ue(e) { var t = n.N.get().createCanvas(6, 1), r = t.getContext("2d"); return r.fillStyle = e, r.fillRect(0, 0, 6, 1), t; }
function We() { if (D !== void 0)
    return D; try {
    var e_8 = Ue("#ff00ff"), t_8 = Ue("#ffff00"), r_6 = n.N.get().createCanvas(6, 1).getContext("2d");
    r_6.globalCompositeOperation = "multiply", r_6.drawImage(e_8, 0, 0), r_6.drawImage(t_8, 2, 0);
    var i_4 = r_6.getImageData(2, 0, 1, 1);
    if (!i_4)
        D = !1;
    else {
        var e_9 = i_4.data;
        D = e_9[0] === 255 && e_9[1] === 0 && e_9[2] === 0;
    }
}
catch (e) {
    D = !1;
} return D; }
var D;
function Ge() { return (Ge = e.n((function () { n.P(); })))(); }
var O;
function Ke() { return (Ke = e.n((function () { n.B(), n.P(), r.y(), Ge(), O = { canvas: null, convertTintToImage: !1, cacheStepsPerColorChannel: 8, canUseMultiply: We(), tintMethod: null, _canvasSourceCache: new WeakMap, _unpremultipliedCache: new WeakMap, getCanvasSource: function (e) { var t, r; var i = e.source, a = i == null ? void 0 : i.resource; if (!a)
        return null; var o = i.alphaMode === "premultiplied-alpha", s = (t = i.resourceWidth) == null ? i.pixelWidth : t, c = (r = i.resourceHeight) == null ? i.pixelHeight : r, l = s !== i.pixelWidth || c !== i.pixelHeight; if (o) {
        if ((a instanceof HTMLCanvasElement || typeof OffscreenCanvas < "u" && a instanceof OffscreenCanvas) && !l)
            return a;
        var e_10 = O._unpremultipliedCache.get(i);
        if ((e_10 == null ? void 0 : e_10.resourceId) === i._resourceId)
            return e_10.canvas;
    } if (a instanceof Uint8Array || a instanceof Uint8ClampedArray || a instanceof Int8Array || a instanceof Uint16Array || a instanceof Int16Array || a instanceof Uint32Array || a instanceof Int32Array || a instanceof Float32Array || a instanceof ArrayBuffer) {
        var e_11 = O._canvasSourceCache.get(i);
        if ((e_11 == null ? void 0 : e_11.resourceId) === i._resourceId)
            return e_11.canvas;
        var t_9 = n.N.get().createCanvas(i.pixelWidth, i.pixelHeight), r_7 = t_9.getContext("2d"), o_1 = r_7.createImageData(i.pixelWidth, i.pixelHeight), s_1 = o_1.data, c_1 = a instanceof ArrayBuffer ? new Uint8Array(a) : new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
        if (i.format === "bgra8unorm")
            for (var e_12 = 0; e_12 < s_1.length && e_12 + 3 < c_1.length; e_12 += 4)
                s_1[e_12] = c_1[e_12 + 2], s_1[e_12 + 1] = c_1[e_12 + 1], s_1[e_12 + 2] = c_1[e_12], s_1[e_12 + 3] = c_1[e_12 + 3];
        else
            s_1.set(c_1.subarray(0, s_1.length));
        return r_7.putImageData(o_1, 0, 0), O._canvasSourceCache.set(i, { canvas: t_9, resourceId: i._resourceId }), t_9;
    } if (o) {
        var e_13 = n.N.get().createCanvas(i.pixelWidth, i.pixelHeight), t_10 = e_13.getContext("2d", { willReadFrequently: !0 });
        e_13.width = i.pixelWidth, e_13.height = i.pixelHeight, t_10.drawImage(a, 0, 0);
        var r_8 = t_10.getImageData(0, 0, e_13.width, e_13.height), o_2 = r_8.data;
        for (var e_14 = 0; e_14 < o_2.length; e_14 += 4) {
            var t_11 = o_2[e_14 + 3];
            if (t_11 > 0) {
                var n_8 = 255 / t_11;
                o_2[e_14] = Math.min(255, o_2[e_14] * n_8 + .5), o_2[e_14 + 1] = Math.min(255, o_2[e_14 + 1] * n_8 + .5), o_2[e_14 + 2] = Math.min(255, o_2[e_14 + 2] * n_8 + .5);
            }
        }
        return t_10.putImageData(r_8, 0, 0), O._unpremultipliedCache.set(i, { canvas: e_13, resourceId: i._resourceId }), e_13;
    } if (l) {
        var e_15 = O._canvasSourceCache.get(i);
        if ((e_15 == null ? void 0 : e_15.resourceId) === i._resourceId)
            return e_15.canvas;
        var t_12 = n.N.get().createCanvas(i.pixelWidth, i.pixelHeight), r_9 = t_12.getContext("2d");
        return t_12.width = i.pixelWidth, t_12.height = i.pixelHeight, r_9.drawImage(a, 0, 0), O._canvasSourceCache.set(i, { canvas: t_12, resourceId: i._resourceId }), t_12;
    } return a; }, getTintedCanvas: function (e, t) { var r = e.texture, i = n.z.shared.setValue(t).toHex(), a = r.tintCache || (r.tintCache = {}), o = a[i], s = r.source._resourceId; if ((o == null ? void 0 : o.tintId) === s)
        return o; var c = o && "getContext" in o ? o : n.N.get().createCanvas(); if (O.tintMethod(r, t, c), c.tintId = s, O.convertTintToImage && c.toDataURL !== void 0) {
        var e_16 = n.N.get().createImage();
        e_16.src = c.toDataURL(), e_16.tintId = s, a[i] = e_16;
    }
    else
        a[i] = c; return a[i]; }, getTintedPattern: function (e, t) { var r = n.z.shared.setValue(t).toHex(), i = e.patternCache || (e.patternCache = {}), a = e.source._resourceId, o = i[r]; return (o == null ? void 0 : o.tintId) === a || (O.canvas || (O.canvas = n.N.get().createCanvas()), O.tintMethod(e, t, O.canvas), o = O.canvas.getContext("2d").createPattern(O.canvas, "repeat"), o.tintId = a, i[r] = o), o; }, applyPatternTransform: function (e, t, n) {
        if (n === void 0) { n = !0; }
        if (!t)
            return;
        var r = e;
        if (!r.setTransform)
            return;
        var i = globalThis.DOMMatrix;
        if (!i)
            return;
        var a = new i([t.a, t.b, t.c, t.d, t.tx, t.ty]);
        r.setTransform(n ? a.inverse() : a);
    }, tintWithMultiply: function (e, t, i) { var a, o; var s = i.getContext("2d"), c = e.frame.clone(), l = (a = (o = e.source._resolution) == null ? e.source.resolution : o) == null ? 1 : a, u = e.rotate; c.x *= l, c.y *= l, c.width *= l, c.height *= l; var d = r.v.isVertical(u), f = d ? c.height : c.width, p = d ? c.width : c.height; i.width = Math.ceil(f), i.height = Math.ceil(p), s.save(), t !== 16777215 && (s.fillStyle = n.z.shared.setValue(t).toHex(), s.fillRect(0, 0, f, p), s.globalCompositeOperation = "multiply"); var m = O.getCanvasSource(e); m && (u && O._applyInverseRotation(s, u, c.width, c.height), s.drawImage(m, c.x, c.y, c.width, c.height, 0, 0, c.width, c.height), t !== 16777215 && (s.globalCompositeOperation = "destination-atop", s.drawImage(m, c.x, c.y, c.width, c.height, 0, 0, c.width, c.height))), s.restore(); }, tintWithOverlay: function (e, t, i) { var a, o; var s = i.getContext("2d"), c = e.frame.clone(), l = (a = (o = e.source._resolution) == null ? e.source.resolution : o) == null ? 1 : a, u = e.rotate; c.x *= l, c.y *= l, c.width *= l, c.height *= l; var d = r.v.isVertical(u), f = d ? c.height : c.width, p = d ? c.width : c.height; i.width = Math.ceil(f), i.height = Math.ceil(p), s.save(), s.globalCompositeOperation = "copy", s.fillStyle = n.z.shared.setValue(t).toHex(), s.fillRect(0, 0, f, p), s.globalCompositeOperation = "destination-atop"; var m = O.getCanvasSource(e); m && (u && O._applyInverseRotation(s, u, c.width, c.height), s.drawImage(m, c.x, c.y, c.width, c.height, 0, 0, c.width, c.height)), s.restore(); }, tintWithPerPixel: function (e, t, n) { var i, a; var o = n.getContext("2d"), s = e.frame.clone(), c = (i = (a = e.source._resolution) == null ? e.source.resolution : a) == null ? 1 : i, l = e.rotate; s.x *= c, s.y *= c, s.width *= c, s.height *= c; var u = r.v.isVertical(l), d = u ? s.height : s.width, f = u ? s.width : s.height; n.width = Math.ceil(d), n.height = Math.ceil(f), o.save(), o.globalCompositeOperation = "copy"; var p = O.getCanvasSource(e); if (!p) {
        o.restore();
        return;
    } l && O._applyInverseRotation(o, l, s.width, s.height), o.drawImage(p, s.x, s.y, s.width, s.height, 0, 0, s.width, s.height), o.restore(); var m = t >> 16 & 255, ee = t >> 8 & 255, te = t & 255, h = o.getImageData(0, 0, d, f), g = h.data; for (var e_17 = 0; e_17 < g.length; e_17 += 4)
        g[e_17] = g[e_17] * m / 255, g[e_17 + 1] = g[e_17 + 1] * ee / 255, g[e_17 + 2] = g[e_17 + 2] * te / 255; o.putImageData(h, 0, 0); }, _applyInverseRotation: function (e, t, n, i) { var a = r.v.inv(t), o = r.v.uX(a), s = r.v.uY(a), c = r.v.vX(a), l = r.v.vY(a), u = -Math.min(0, o * n, c * i, o * n + c * i), d = -Math.min(0, s * n, l * i, s * n + l * i); e.transform(o, s, c, l, u, d); } }, O.tintMethod = O.canUseMultiply ? O.tintWithMultiply : O.tintWithPerPixel; })))(); }
var qe, Je, k;
function Ye() { return (Ye = e.n((function () { n.Y(), n.I(), n.n(), o.M(), o.D(), s.D(), i.P(), a._t(), a.pt(), a.X(), qe = new o.j, Je = (function (_super) {
    __extends(Je, _super);
    function Je() {
        var _this = this;
        _this = _super.call(this) || this, _this._placeholderSprite = new s.E(a.gt.EMPTY), _this.filters = [new n.t({ sprite: _this._placeholderSprite, inverse: !1, resolution: "inherit", antialias: "inherit" })];
        return _this;
    }
    Object.defineProperty(Je.prototype, "sprite", {
        get: function () { return this.filters[0].sprite; },
        set: function (e) { this.filters[0].setSprite(e); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Je.prototype, "inverse", {
        get: function () { return this.filters[0].inverse; },
        set: function (e) { this.filters[0].inverse = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Je.prototype, "channel", {
        get: function () { return this.filters[0].channel; },
        set: function (e) { this.filters[0].channel = e; },
        enumerable: false,
        configurable: true
    });
    Je.prototype.reset = function () { this._placeholderSprite.texture = a.gt.EMPTY, this.sprite = this._placeholderSprite; };
    return Je;
}(n.F)), k = (function () {
    function k(e) {
        this._activeMaskStage = [], this._usedEffects = [], this._renderer = e, e.runners.postrender.add(this);
    }
    k.prototype.push = function (e, t, n) { var r; var i = this._renderer; if (i.renderPipes.batch.break(n), n.add({ renderPipeId: "alphaMask", action: "pushMaskBegin", mask: e, inverse: t._maskOptions.inverse, canBundle: !1, maskedContainer: t }), e.inverse = t._maskOptions.inverse, e.channel = (r = t._maskOptions.channel) == null ? "red" : r, e.renderMaskToTexture) {
        var t_13 = e.mask;
        t_13.includeInBuild = !0, t_13.collectRenderables(n, i, null), t_13.includeInBuild = !1;
    } i.renderPipes.batch.break(n), n.add({ renderPipeId: "alphaMask", action: "pushMaskEnd", mask: e, maskedContainer: t, inverse: t._maskOptions.inverse, canBundle: !1 }); };
    k.prototype.pop = function (e, t, n) { this._renderer.renderPipes.batch.break(n), n.add({ renderPipeId: "alphaMask", action: "popMaskEnd", mask: e, inverse: t._maskOptions.inverse, canBundle: !1 }); };
    k.prototype.execute = function (e) { var t = this._renderer, n = e.mask.renderMaskToTexture; if (e.action === "pushMaskBegin") {
        var r_10 = i.N.get(Je);
        if (r_10.inverse = e.inverse, r_10.channel = e.mask.channel, n) {
            e.mask.mask.measurable = !0;
            var n_9 = o.E(e.mask.mask, !0, qe);
            e.mask.mask.measurable = !1, n_9.ceil();
            var i_5 = t.renderTarget.renderTarget.colorTexture.source, s_2 = a.ft.getOptimalTexture({ width: n_9.width, height: n_9.height, resolution: i_5._resolution, antialias: i_5.antialias });
            t.renderTarget.push({ target: s_2, clear: !0 }), t.globalUniforms.push({ offset: n_9, worldColor: 4294967295 });
            var c_2 = r_10.sprite;
            c_2.texture = s_2, c_2.worldTransform.tx = n_9.minX, c_2.worldTransform.ty = n_9.minY, this._activeMaskStage.push({ filterEffect: r_10, maskedContainer: e.maskedContainer, filterTexture: s_2 });
        }
        else
            r_10.sprite = e.mask.mask, this._activeMaskStage.push({ filterEffect: r_10, maskedContainer: e.maskedContainer });
    }
    else if (e.action === "pushMaskEnd") {
        var e_18 = this._activeMaskStage[this._activeMaskStage.length - 1];
        n && (t.type === a.Y.WEBGL && t.renderTarget.finishRenderPass(), t.renderTarget.pop(), t.globalUniforms.pop()), t.filter.push({ renderPipeId: "filter", action: "pushFilter", container: e_18.maskedContainer, filterEffect: e_18.filterEffect, canBundle: !1 });
    }
    else if (e.action === "popMaskEnd") {
        t.filter.pop();
        var e_19 = this._activeMaskStage.pop();
        n && a.ft.returnTexture(e_19.filterTexture), this._usedEffects.push(e_19.filterEffect);
    } };
    k.prototype.postrender = function () { var e = this._usedEffects; for (var t_14 = 0; t_14 < e.length; t_14++)
        i.N.return(e[t_14]); e.length = 0; };
    k.prototype.destroy = function () { this.postrender(), this._renderer.runners.postrender.remove(this), this._renderer = null, this._activeMaskStage = null, this._usedEffects = null; };
    return k;
}()), k.extension = { type: [n.q.WebGLPipes, n.q.WebGPUPipes, n.q.CanvasPipes], name: "alphaMask" }; })))(); }
var Xe;
function Ze() { return (Ze = e.n((function () { n.Y(), Xe = (function () {
    function Xe(e) {
        this._colorStack = [], this._colorStackIndex = 0, this._currentColor = 0, this._renderer = e;
    }
    Xe.prototype.buildStart = function () { this._colorStack[0] = 15, this._colorStackIndex = 1, this._currentColor = 15; };
    Xe.prototype.push = function (e, t, n) { this._renderer.renderPipes.batch.break(n); var r = this._colorStack; r[this._colorStackIndex] = r[this._colorStackIndex - 1] & e.mask; var i = this._colorStack[this._colorStackIndex]; i !== this._currentColor && (this._currentColor = i, n.add({ renderPipeId: "colorMask", colorMask: i, canBundle: !1 })), this._colorStackIndex++; };
    Xe.prototype.pop = function (e, t, n) { this._renderer.renderPipes.batch.break(n); var r = this._colorStack; this._colorStackIndex--; var i = r[this._colorStackIndex - 1]; i !== this._currentColor && (this._currentColor = i, n.add({ renderPipeId: "colorMask", colorMask: i, canBundle: !1 })); };
    Xe.prototype.execute = function (e) { this._renderer.colorMask.setMask(e.colorMask); };
    Xe.prototype.destroy = function () { this._renderer = null, this._colorStack = null; };
    return Xe;
}()), Xe.extension = { type: [n.q.WebGLPipes, n.q.WebGPUPipes], name: "colorMask" }; })))(); }
var Qe;
function $e() { return ($e = e.n((function () { n.Y(), E(), a.z(), Qe = (function () {
    function Qe(e) {
        this._maskHash = new WeakMap, this._renderer = e;
    }
    Qe.prototype.push = function (e, t, n) { var r = e, i = this._renderer; i.renderPipes.batch.break(n), i.renderPipes.blendMode.setBlendMode(r.mask, "none", n), n.add({ renderPipeId: "stencilMask", action: "pushMaskBegin", mask: e, inverse: t._maskOptions.inverse, canBundle: !1 }); var a = r.mask; a.includeInBuild = !0, this._maskHash.has(r) || this._maskHash.set(r, { instructionsStart: 0, instructionsLength: 0 }); var o = this._maskHash.get(r); o.instructionsStart = n.instructionSize, a.collectRenderables(n, i, null), a.includeInBuild = !1, i.renderPipes.batch.break(n), n.add({ renderPipeId: "stencilMask", action: "pushMaskEnd", mask: e, inverse: t._maskOptions.inverse, canBundle: !1 }), o.instructionsLength = n.instructionSize - o.instructionsStart - 1; };
    Qe.prototype.pop = function (e, t, n) { var r = e, i = this._renderer; i.renderPipes.batch.break(n), i.renderPipes.blendMode.setBlendMode(r.mask, "none", n), n.add({ renderPipeId: "stencilMask", action: "popMaskBegin", inverse: t._maskOptions.inverse, canBundle: !1 }); var a = this._maskHash.get(e); for (var e_20 = 0; e_20 < a.instructionsLength; e_20++)
        n.instructions[n.instructionSize++] = n.instructions[a.instructionsStart++]; n.add({ renderPipeId: "stencilMask", action: "popMaskEnd", canBundle: !1 }); };
    Qe.prototype.execute = function (e) { var t = this._renderer, n = t.renderTarget.getGpuRenderTarget(t.renderTarget.renderTarget), r = n.maskStackIndex; e.action === "pushMaskBegin" ? (t.renderTarget.ensureDepthStencil(), t.stencil.setStencilMode(a.R.RENDERING_MASK_ADD, r), r++, t.colorMask.setMask(0)) : e.action === "pushMaskEnd" ? (e.inverse ? t.stencil.setStencilMode(a.R.INVERSE_MASK_ACTIVE, r) : t.stencil.setStencilMode(a.R.MASK_ACTIVE, r), t.colorMask.setMask(15)) : e.action === "popMaskBegin" ? (t.colorMask.setMask(0), r === 0 ? (t.renderTarget.clear(null, T.STENCIL), t.stencil.setStencilMode(a.R.DISABLED, r)) : t.stencil.setStencilMode(a.R.RENDERING_MASK_REMOVE, r), r--) : e.action === "popMaskEnd" && (e.inverse ? t.stencil.setStencilMode(a.R.INVERSE_MASK_ACTIVE, r) : t.stencil.setStencilMode(a.R.MASK_ACTIVE, r), t.colorMask.setMask(15)), n.maskStackIndex = r; };
    Qe.prototype.destroy = function () { this._renderer = null, this._maskHash = null; };
    return Qe;
}()), Qe.extension = { type: [n.q.WebGLPipes, n.q.WebGPUPipes], name: "stencilMask" }; })))(); }
function et(e, t, n, r, i, a) { var o = a ? 1 : -1; return e.identity(), e.a = 1 / r * 2, e.d = o * (1 / i * 2), e.tx = -1 - t * e.a, e.ty = -o - n * e.d, e; }
function tt() { return (tt = e.n((function () { })))(); }
var A;
function nt() { return (nt = e.n((function () { A = (function (e) { return (e[e.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER", e[e.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER", e[e.UNIFORM_BUFFER = 35345] = "UNIFORM_BUFFER", e); })(A || {}); })))(); }
var rt;
function it() { return (it = e.n((function () { rt = (function () {
    function rt(e, t) {
        this._lastBindBaseLocation = -1, this._lastBindCallId = -1, this.buffer = e || null, this.updateID = -1, this.byteLength = -1, this.type = t;
    }
    rt.prototype.destroy = function () { this.buffer = null, this.updateID = -1, this.byteLength = -1, this.type = -1, this._lastBindBaseLocation = -1, this._lastBindCallId = -1; };
    return rt;
}()); })))(); }
var at;
function ot() { return (ot = e.n((function () { n.Y(), i.f(), a.F(), nt(), it(), at = (function () {
    function at(e) {
        this._boundBufferBases = Object.create(null), this._minBaseLocation = 0, this._nextBindBaseIndex = this._minBaseLocation, this._bindCallId = 0, this._renderer = e, this._managedBuffers = new i.d({ renderer: e, type: "resource", onUnload: this.onBufferUnload.bind(this), name: "glBuffer" });
    }
    at.prototype.destroy = function () { this._managedBuffers.destroy(), this._renderer = null, this._gl = null, this._boundBufferBases = {}; };
    at.prototype.contextChange = function () { this._gl = this._renderer.gl, this.destroyAll(!0), this._maxBindings = this._renderer.limits.maxUniformBindings; };
    at.prototype.getGlBuffer = function (e) { return e._gcLastUsed = this._renderer.gc.now, e._gpuData[this._renderer.uid] || this.createGLBuffer(e); };
    at.prototype.bind = function (e) { var t = this._gl, n = this.getGlBuffer(e); t.bindBuffer(n.type, n.buffer); };
    at.prototype.bindBufferBase = function (e, t) { var n = this._gl; this._boundBufferBases[t] !== e && (this._boundBufferBases[t] = e, e._lastBindBaseLocation = t, n.bindBufferBase(n.UNIFORM_BUFFER, t, e.buffer)); };
    at.prototype.nextBindBase = function (e) { this._bindCallId++, this._minBaseLocation = 0, e && (this._boundBufferBases[0] = null, this._minBaseLocation = 1, this._nextBindBaseIndex < 1 && (this._nextBindBaseIndex = 1)); };
    at.prototype.freeLocationForBufferBase = function (e) { var t = this.getLastBindBaseLocation(e); if (t >= this._minBaseLocation)
        return e._lastBindCallId = this._bindCallId, t; var n = 0, r = this._nextBindBaseIndex; for (; n < 2;) {
        r >= this._maxBindings && (r = this._minBaseLocation, n++);
        var e_21 = this._boundBufferBases[r];
        if (e_21 && e_21._lastBindCallId === this._bindCallId)
            r++;
        else
            break;
    } return t = r, this._nextBindBaseIndex = r + 1, n >= 2 ? -1 : (e._lastBindCallId = this._bindCallId, this._boundBufferBases[t] = null, t); };
    at.prototype.getLastBindBaseLocation = function (e) { var t = e._lastBindBaseLocation; return this._boundBufferBases[t] === e ? t : -1; };
    at.prototype.bindBufferRange = function (e, t, n, r) { var i = this._gl; n || (n = 0), t || (t = 0), this._boundBufferBases[t] = null, i.bindBufferRange(i.UNIFORM_BUFFER, t || 0, e.buffer, n * 256, r || 256); };
    at.prototype.updateBuffer = function (e) { var t = this._gl, n = this.getGlBuffer(e); if (e._updateID === n.updateID)
        return n; n.updateID = e._updateID, t.bindBuffer(n.type, n.buffer); var r = e.data, i = e.descriptor.usage & a.P.STATIC ? t.STATIC_DRAW : t.DYNAMIC_DRAW; return r ? n.byteLength >= r.byteLength ? t.bufferSubData(n.type, e._updateOffset, r, e._updateOffset / r.BYTES_PER_ELEMENT, (e._updateSize || r.byteLength) / r.BYTES_PER_ELEMENT) : (n.byteLength = r.byteLength, t.bufferData(n.type, r, i)) : (n.byteLength = e.descriptor.size, t.bufferData(n.type, n.byteLength, i)), n; };
    at.prototype.destroyAll = function (e) {
        if (e === void 0) { e = !1; }
        this._managedBuffers.removeAll(e);
    };
    at.prototype.onBufferUnload = function (e, t) {
        if (t === void 0) { t = !1; }
        var n = e._gpuData[this._renderer.uid];
        n && (t || this._gl.deleteBuffer(n.buffer));
    };
    at.prototype.createGLBuffer = function (e) { var t = this._gl, n = A.ARRAY_BUFFER; e.descriptor.usage & a.P.INDEX ? n = A.ELEMENT_ARRAY_BUFFER : e.descriptor.usage & a.P.UNIFORM && (n = A.UNIFORM_BUFFER); var r = new rt(t.createBuffer(), n); return e._gpuData[this._renderer.uid] = r, this._managedBuffers.add(e), r; };
    at.prototype.resetState = function () { this._boundBufferBases = Object.create(null); };
    return at;
}()), at.extension = { type: [n.q.WebGLSystem], name: "buffer" }; })))(); }
var j, st;
function ct() { return (ct = e.n((function () { n.P(), n.Y(), i.L(), t.o(), j = (function () {
    function e(e) {
        this.supports = { uint32Indices: !0, uniformBufferObject: !0, vertexArrayObject: !0, srgbTextures: !0, nonPowOf2wrapping: !0, msaa: !0, nonPowOf2mipmaps: !0 }, this._renderer = e, this.extensions = Object.create(null), this.handleContextLost = this.handleContextLost.bind(this), this.handleContextRestored = this.handleContextRestored.bind(this);
    }
    Object.defineProperty(e.prototype, "isLost", {
        get: function () { return !this.gl || this.gl.isContextLost(); },
        enumerable: false,
        configurable: true
    });
    e.prototype.contextChange = function (e) { this.gl = e, this._renderer.gl = e; };
    e.prototype.init = function (r) { r = t.a(t.a({}, e.defaultOptions), r); var a = this.multiView = r.multiView; if (r.context && a && (i.R("Renderer created with both a context and multiview enabled. Disabling multiView as both cannot work together."), a = !1), this.canvas = a ? n.N.get().createCanvas(this._renderer.canvas.width, this._renderer.canvas.height) : this._renderer.view.canvas, r.context)
        this.initFromContext(r.context);
    else {
        var o, s;
        var e_22 = this._renderer.background.alpha < 1, t_15 = (o = r.premultipliedAlpha) == null || o, n_10 = r.antialias && !this._renderer.backBuffer.useBackBuffer;
        this.createContext(r.preferWebGLVersion, { alpha: e_22, premultipliedAlpha: t_15, antialias: n_10, stencil: !0, preserveDrawingBuffer: r.preserveDrawingBuffer, powerPreference: (s = r.powerPreference) == null ? "default" : s });
    } };
    e.prototype.ensureCanvasSize = function (e) { if (!this.multiView) {
        e !== this.canvas && i.R("multiView is disabled, but targetCanvas is not the main canvas");
        return;
    } var t = this.canvas; (t.width < e.width || t.height < e.height) && (t.width = Math.max(e.width, e.width), t.height = Math.max(e.height, e.height)); };
    e.prototype.initFromContext = function (e) { this.gl = e, this.webGLVersion = e instanceof n.N.get().getWebGLRenderingContext() ? 1 : 2, this.getExtensions(), this.validateContext(e), this._renderer.runners.contextChange.emit(e); var t = this._renderer.view.canvas; t.addEventListener("webglcontextlost", this.handleContextLost, !1), t.addEventListener("webglcontextrestored", this.handleContextRestored, !1); };
    e.prototype.createContext = function (e, t) { var n, r = this.canvas; if (e === 2 && (n = r.getContext("webgl2", t)), !n && (n = r.getContext("webgl", t), !n))
        throw Error("This browser does not support WebGL. Try using the canvas renderer"); this.gl = n, this.initFromContext(this.gl); };
    e.prototype.getExtensions = function () { var e = this.gl, n = { anisotropicFiltering: e.getExtension("EXT_texture_filter_anisotropic"), floatTextureLinear: e.getExtension("OES_texture_float_linear"), s3tc: e.getExtension("WEBGL_compressed_texture_s3tc"), s3tc_sRGB: e.getExtension("WEBGL_compressed_texture_s3tc_srgb"), etc: e.getExtension("WEBGL_compressed_texture_etc"), etc1: e.getExtension("WEBGL_compressed_texture_etc1"), pvrtc: e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"), atc: e.getExtension("WEBGL_compressed_texture_atc"), astc: e.getExtension("WEBGL_compressed_texture_astc"), bptc: e.getExtension("EXT_texture_compression_bptc"), rgtc: e.getExtension("EXT_texture_compression_rgtc"), loseContext: e.getExtension("WEBGL_lose_context") }; if (this.webGLVersion === 1)
        this.extensions = t.a(t.a({}, n), {}, { drawBuffers: e.getExtension("WEBGL_draw_buffers"), depthTexture: e.getExtension("WEBGL_depth_texture"), vertexArrayObject: e.getExtension("OES_vertex_array_object") || e.getExtension("MOZ_OES_vertex_array_object") || e.getExtension("WEBKIT_OES_vertex_array_object"), uint32ElementIndex: e.getExtension("OES_element_index_uint"), floatTexture: e.getExtension("OES_texture_float"), floatTextureLinear: e.getExtension("OES_texture_float_linear"), textureHalfFloat: e.getExtension("OES_texture_half_float"), textureHalfFloatLinear: e.getExtension("OES_texture_half_float_linear"), vertexAttribDivisorANGLE: e.getExtension("ANGLE_instanced_arrays"), srgb: e.getExtension("EXT_sRGB") });
    else {
        this.extensions = t.a(t.a({}, n), {}, { colorBufferFloat: e.getExtension("EXT_color_buffer_float") });
        var r_11 = e.getExtension("WEBGL_provoking_vertex");
        r_11 && r_11.provokingVertexWEBGL(r_11.FIRST_VERTEX_CONVENTION_WEBGL);
    } };
    e.prototype.handleContextLost = function (e) {
        var _this = this;
        e.preventDefault(), this._contextLossForced && (this._contextLossForced = !1, setTimeout(function () { if (_this.gl.isContextLost()) {
            var e;
            (e = _this.extensions.loseContext) == null || e.restoreContext();
        } }, 0));
    };
    e.prototype.handleContextRestored = function () { this.getExtensions(), this._renderer.runners.contextChange.emit(this.gl); };
    e.prototype.destroy = function () { var e; var t = this._renderer.view.canvas; this._renderer = null, t.removeEventListener("webglcontextlost", this.handleContextLost), t.removeEventListener("webglcontextrestored", this.handleContextRestored), this.gl.useProgram(null), (e = this.extensions.loseContext) == null || e.loseContext(); };
    e.prototype.forceContextLoss = function () { var e; (e = this.extensions.loseContext) == null || e.loseContext(), this._contextLossForced = !0; };
    e.prototype.validateContext = function (e) { var t = e.getContextAttributes(); t && !t.stencil && i.R("Provided WebGL context does not have a stencil buffer, masks may not render correctly"); var n = this.supports, r = this.webGLVersion === 2, a = this.extensions; n.uint32Indices = r || !!a.uint32ElementIndex, n.uniformBufferObject = r, n.vertexArrayObject = r || !!a.vertexArrayObject, n.srgbTextures = r || !!a.srgb, n.nonPowOf2wrapping = r, n.nonPowOf2mipmaps = r, n.msaa = r, n.uint32Indices || i.R("Provided WebGL context does not support 32 index buffer, large scenes may not render correctly"); };
    return e;
}()), j.extension = { type: [n.q.WebGLSystem], name: "context" }, j.defaultOptions = { context: null, premultipliedAlpha: !0, preserveDrawingBuffer: !1, powerPreference: void 0, preferWebGLVersion: 2, multiView: !1 }, st = j; })))(); }
function lt(e, t) { for (var n_11 in e.attributes) {
    var r_12 = e.attributes[n_11], a_3 = t[n_11];
    a_3 ? (r_12.format != null || (r_12.format = a_3.format), r_12.offset != null || (r_12.offset = a_3.offset), r_12.instance != null || (r_12.instance = a_3.instance)) : r_12.format || i.R("Attribute ".concat(n_11, " is not present in the shader, but is present in the geometry. Unable to infer attribute details."));
} ut(e); }
function ut(e) { var t = e.buffers, n = e.attributes, r = {}, i = {}; for (var e_23 in t) {
    var n_12 = t[e_23];
    r[n_12.uid] = 0, i[n_12.uid] = 0;
} for (var e_24 in n) {
    var t_16 = n[e_24];
    r[t_16.buffer.uid] += a.tt(t_16.format).stride;
} for (var e_25 in n) {
    var t_17 = n[e_25];
    t_17.stride != null || (t_17.stride = r[t_17.buffer.uid]), t_17.start != null || (t_17.start = i[t_17.buffer.uid]), i[t_17.buffer.uid] += a.tt(t_17.format).stride;
} }
function dt() { return (dt = e.n((function () { i.L(), a.nt(); })))(); }
var M, N, P;
function F() { return (F = e.n((function () { M = (function (e) { return (e[e.RGBA = 6408] = "RGBA", e[e.RGB = 6407] = "RGB", e[e.RG = 33319] = "RG", e[e.RED = 6403] = "RED", e[e.RGBA_INTEGER = 36249] = "RGBA_INTEGER", e[e.RGB_INTEGER = 36248] = "RGB_INTEGER", e[e.RG_INTEGER = 33320] = "RG_INTEGER", e[e.RED_INTEGER = 36244] = "RED_INTEGER", e[e.ALPHA = 6406] = "ALPHA", e[e.LUMINANCE = 6409] = "LUMINANCE", e[e.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA", e[e.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT", e[e.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL", e); })(M || {}), N = (function (e) { return (e[e.TEXTURE_2D = 3553] = "TEXTURE_2D", e[e.TEXTURE_CUBE_MAP = 34067] = "TEXTURE_CUBE_MAP", e[e.TEXTURE_2D_ARRAY = 35866] = "TEXTURE_2D_ARRAY", e[e.TEXTURE_3D = 32879] = "TEXTURE_3D", e[e.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X", e[e.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X", e[e.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y", e[e.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y", e[e.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z", e[e.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z", e); })(N || {}), P = (function (e) { return (e[e.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE", e[e.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT", e[e.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5", e[e.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4", e[e.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1", e[e.UNSIGNED_INT = 5125] = "UNSIGNED_INT", e[e.UNSIGNED_INT_10F_11F_11F_REV = 35899] = "UNSIGNED_INT_10F_11F_11F_REV", e[e.UNSIGNED_INT_2_10_10_10_REV = 33640] = "UNSIGNED_INT_2_10_10_10_REV", e[e.UNSIGNED_INT_24_8 = 34042] = "UNSIGNED_INT_24_8", e[e.UNSIGNED_INT_5_9_9_9_REV = 35902] = "UNSIGNED_INT_5_9_9_9_REV", e[e.BYTE = 5120] = "BYTE", e[e.SHORT = 5122] = "SHORT", e[e.INT = 5124] = "INT", e[e.FLOAT = 5126] = "FLOAT", e[e.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV", e[e.HALF_FLOAT = 36193] = "HALF_FLOAT", e); })(P || {}); })))(); }
function ft(e) { var t; return (t = pt[e]) == null ? pt.float32 : t; }
var pt;
function mt() { return (mt = e.n((function () { F(), pt = { uint8x2: P.UNSIGNED_BYTE, uint8x4: P.UNSIGNED_BYTE, sint8x2: P.BYTE, sint8x4: P.BYTE, unorm8x2: P.UNSIGNED_BYTE, unorm8x4: P.UNSIGNED_BYTE, snorm8x2: P.BYTE, snorm8x4: P.BYTE, uint16x2: P.UNSIGNED_SHORT, uint16x4: P.UNSIGNED_SHORT, sint16x2: P.SHORT, sint16x4: P.SHORT, unorm16x2: P.UNSIGNED_SHORT, unorm16x4: P.UNSIGNED_SHORT, snorm16x2: P.SHORT, snorm16x4: P.SHORT, float16x2: P.HALF_FLOAT, float16x4: P.HALF_FLOAT, float32: P.FLOAT, float32x2: P.FLOAT, float32x3: P.FLOAT, float32x4: P.FLOAT, uint32: P.UNSIGNED_INT, uint32x2: P.UNSIGNED_INT, uint32x3: P.UNSIGNED_INT, uint32x4: P.UNSIGNED_INT, sint32: P.INT, sint32x2: P.INT, sint32x3: P.INT, sint32x4: P.INT }; })))(); }
var ht, gt, I;
function _t() { return (_t = e.n((function () { n.Y(), i.f(), a.nt(), dt(), mt(), ht = { "point-list": 0, "line-list": 1, "line-strip": 3, "triangle-list": 4, "triangle-strip": 5 }, gt = (function () {
    function gt() {
        this.vaoCache = Object.create(null);
    }
    gt.prototype.destroy = function () { this.vaoCache = Object.create(null); };
    return gt;
}()), I = (function () {
    function I(e) {
        this._renderer = e, this._activeGeometry = null, this._activeVao = null, this.hasVao = !0, this.hasInstance = !0, this._managedGeometries = new i.d({ renderer: e, type: "resource", onUnload: this.onGeometryUnload.bind(this), name: "glGeometry" });
    }
    I.prototype.contextChange = function () { var e = this.gl = this._renderer.gl; if (!this._renderer.context.supports.vertexArrayObject)
        throw Error("[PixiJS] Vertex Array Objects are not supported on this device"); this.destroyAll(!0); var t = this._renderer.context.extensions.vertexArrayObject; t && (e.createVertexArray = function () { return t.createVertexArrayOES(); }, e.bindVertexArray = function (e) { return t.bindVertexArrayOES(e); }, e.deleteVertexArray = function (e) { return t.deleteVertexArrayOES(e); }); var n = this._renderer.context.extensions.vertexAttribDivisorANGLE; n && (e.drawArraysInstanced = function (e, t, r, i) { n.drawArraysInstancedANGLE(e, t, r, i); }, e.drawElementsInstanced = function (e, t, r, i, a) { n.drawElementsInstancedANGLE(e, t, r, i, a); }, e.vertexAttribDivisor = function (e, t) { return n.vertexAttribDivisorANGLE(e, t); }), this._activeGeometry = null, this._activeVao = null; };
    I.prototype.bind = function (e, t) { var n = this.gl; this._activeGeometry = e; var r = this.getVao(e, t); this._activeVao !== r && (this._activeVao = r, n.bindVertexArray(r)), this.updateBuffers(); };
    I.prototype.resetState = function () { this.unbind(); };
    I.prototype.updateBuffers = function () { var e = this._activeGeometry, t = this._renderer.buffer; for (var n_13 = 0; n_13 < e.buffers.length; n_13++) {
        var r_13 = e.buffers[n_13];
        t.updateBuffer(r_13);
    } e._gcLastUsed = this._renderer.gc.now; };
    I.prototype.checkCompatibility = function (e, t) { var n = e.attributes, r = t._attributeData; for (var e_26 in r)
        if (!n[e_26])
            throw Error("shader and geometry incompatible, geometry missing the \"".concat(e_26, "\" attribute")); };
    I.prototype.getSignature = function (e, t) { var n = e.attributes, r = t._attributeData, i = ["g", e.uid]; for (var e_27 in n)
        r[e_27] && i.push(e_27, r[e_27].location); return i.join("-"); };
    I.prototype.getVao = function (e, t) { var n; return ((n = e._gpuData[this._renderer.uid]) == null ? void 0 : n.vaoCache[t._key]) || this.initGeometryVao(e, t); };
    I.prototype.initGeometryVao = function (e, t, n) {
        if (n === void 0) { n = !0; }
        var r = this._renderer.gl, i = this._renderer.buffer;
        this._renderer.shader._getProgramData(t), this.checkCompatibility(e, t);
        var a = this.getSignature(e, t), o = e._gpuData[this._renderer.uid];
        o || (o = new gt, e._gpuData[this._renderer.uid] = o, this._managedGeometries.add(e));
        var s = o.vaoCache, c = s[a];
        if (c)
            return s[t._key] = c, c;
        lt(e, t._attributeData);
        var l = e.buffers;
        c = r.createVertexArray(), r.bindVertexArray(c);
        for (var e_28 = 0; e_28 < l.length; e_28++) {
            var t_18 = l[e_28];
            i.bind(t_18);
        }
        return this.activateVao(e, t), s[t._key] = c, s[a] = c, r.bindVertexArray(null), c;
    };
    I.prototype.onGeometryUnload = function (e, t) {
        if (t === void 0) { t = !1; }
        var n = e._gpuData[this._renderer.uid];
        if (!n)
            return;
        var r = n.vaoCache;
        if (!t)
            for (var e_29 in r)
                this._activeVao === r[e_29] && this.resetState(), this.gl.deleteVertexArray(r[e_29]);
    };
    I.prototype.destroyAll = function (e) {
        if (e === void 0) { e = !1; }
        this._managedGeometries.removeAll(e);
    };
    I.prototype.activateVao = function (e, t) { var n = this._renderer.gl, r = this._renderer.buffer, i = e.attributes; e.indexBuffer && r.bind(e.indexBuffer); var o = null; for (var e_30 in i) {
        var l_1 = i[e_30], u_1 = l_1.buffer, d_1 = r.getGlBuffer(u_1), f_1 = t._attributeData[e_30];
        if (f_1) {
            var s;
            o !== d_1 && (r.bind(u_1), o = d_1);
            var e_31 = f_1.location;
            n.enableVertexAttribArray(e_31);
            var t_19 = a.tt(l_1.format), i_6 = ft(l_1.format);
            if (((s = f_1.format) == null ? void 0 : s.substring(1, 4)) === "int" ? n.vertexAttribIPointer(e_31, t_19.size, i_6, l_1.stride, l_1.offset) : n.vertexAttribPointer(e_31, t_19.size, i_6, t_19.normalised, l_1.stride, l_1.offset), l_1.instance) {
                if (this.hasInstance) {
                    var c;
                    var t_20 = (c = l_1.divisor) == null ? 1 : c;
                    n.vertexAttribDivisor(e_31, t_20);
                }
                else
                    throw Error("geometry error, GPU Instancing is not supported on this device");
            }
        }
    } };
    I.prototype.draw = function (e, t, n, r) { var i = this._renderer.gl, a = this._activeGeometry, o = ht[e || a.topology]; if (r != null || (r = a.instanceCount), a.indexBuffer) {
        var e_32 = a.indexBuffer.data.BYTES_PER_ELEMENT, s_3 = e_32 === 2 ? i.UNSIGNED_SHORT : i.UNSIGNED_INT, c_3 = t || a.indexCount || a.indexBuffer.data.length, l_2 = (n || 0) * e_32;
        r === 1 ? i.drawElements(o, c_3, s_3, l_2) : i.drawElementsInstanced(o, c_3, s_3, l_2, r);
    }
    else
        r === 1 ? i.drawArrays(o, n || 0, t || a.vertexCount) : i.drawArraysInstanced(o, n || 0, t || a.vertexCount, r); return this; };
    I.prototype.unbind = function () { this.gl.bindVertexArray(null), this._activeVao = null, this._activeGeometry = null; };
    I.prototype.destroy = function () { this._managedGeometries.destroy(), this._renderer = null, this.gl = null, this._activeVao = null, this._activeGeometry = null; };
    return I;
}()), I.extension = { type: [n.q.WebGLSystem], name: "geometry" }; })))(); }
var vt, L, yt;
function bt() {
    return (bt = e.n((function () {
        n.Y(), i.L(), a.j(), a.J(), a.K(), a.Ct(), a._t(), we(), t.o(), vt = new a.A({ attributes: { aPosition: [-1, -1, 3, -1, -1, 3] } }), L = (function () {
            function e(e) {
                this.useBackBuffer = !1, this._useBackBufferThisRender = !1, this._renderer = e;
            }
            e.prototype.init = function (n) {
                if (n === void 0) { n = {}; }
                var _a = t.a(t.a({}, e.defaultOptions), n), r = _a.useBackBuffer, o = _a.antialias;
                this.useBackBuffer = r, this._antialias = o, this._renderer.context.supports.msaa || (i.R("antialiasing, is not supported on when using the back buffer"), this._antialias = !1), this._state = a.G.for2d();
                var s = new S({ vertex: "\n                attribute vec2 aPosition;\n                out vec2 vUv;\n\n                void main() {\n                    gl_Position = vec4(aPosition, 0.0, 1.0);\n\n                    vUv = (aPosition + 1.0) / 2.0;\n\n                    // flip dem UVs\n                    vUv.y = 1.0 - vUv.y;\n                }", fragment: "\n                in vec2 vUv;\n                out vec4 finalColor;\n\n                uniform sampler2D uTexture;\n\n                void main() {\n                    finalColor = texture(uTexture, vUv);\n                }", name: "big-triangle" });
                this._bigTriangleShader = new a.q({ glProgram: s, resources: { uTexture: a.gt.WHITE.source } });
            };
            e.prototype.renderStart = function (e) { var t = this._renderer.renderTarget.getRenderTarget(e.target); if (this._useBackBufferThisRender = this.useBackBuffer && !!t.isRoot, this._useBackBufferThisRender) {
                var t_21 = this._renderer.renderTarget.getRenderTarget(e.target);
                this._targetTexture = t_21.colorTexture, e.target = this._getBackBufferTexture(t_21.colorTexture);
            } };
            e.prototype.renderEnd = function () { this._presentBackBuffer(); };
            e.prototype._presentBackBuffer = function () { var e = this._renderer; e.renderTarget.finishRenderPass(), this._useBackBufferThisRender && (e.renderTarget.bind({ target: this._targetTexture, clear: !1 }), this._bigTriangleShader.resources.uTexture = this._backBufferTexture.source, e.encoder.draw({ geometry: vt, shader: this._bigTriangleShader, state: this._state })); };
            e.prototype._getBackBufferTexture = function (e) { return this._backBufferTexture = this._backBufferTexture || new a.gt({ source: new a.St({ width: e.width, height: e.height, resolution: e._resolution, antialias: this._antialias }) }), this._backBufferTexture.source.resize(e.width, e.height, e._resolution), this._backBufferTexture; };
            e.prototype.destroy = function () { this._backBufferTexture && (this._backBufferTexture.destroy(), this._backBufferTexture = null); };
            return e;
        }()), L.extension = { type: [n.q.WebGLSystem], name: "backBuffer", priority: 1 }, L.defaultOptions = { useBackBuffer: !1 }, yt = L;
    })))();
}
var R;
function xt() { return (xt = e.n((function () { n.Y(), R = (function () {
    function R(e) {
        this._colorMaskCache = 15, this._renderer = e;
    }
    R.prototype.setMask = function (e) { this._colorMaskCache !== e && (this._colorMaskCache = e, this._renderer.gl.colorMask(!!(e & 8), !!(e & 4), !!(e & 2), !!(e & 1))); };
    return R;
}()), R.extension = { type: [n.q.WebGLSystem], name: "colorMask" }; })))(); }
var z;
function St() { return (St = e.n((function () { n.Y(), z = (function () {
    function z(e) {
        this.commandFinished = Promise.resolve(), this._renderer = e;
    }
    z.prototype.setGeometry = function (e, t) { this._renderer.geometry.bind(e, t.glProgram); };
    z.prototype.finishRenderPass = function () { };
    z.prototype.draw = function (e) { var t = this._renderer, n = e.geometry, r = e.shader, i = e.state, a = e.skipSync, o = e.topology, s = e.size, c = e.start, l = e.instanceCount; t.shader.bind(r, a), t.geometry.bind(n, t.shader._activeProgram), i && t.state.set(i), t.geometry.draw(o, s, c, l == null ? n.instanceCount : l); };
    z.prototype.destroy = function () { this._renderer = null; };
    return z;
}()), z.extension = { type: [n.q.WebGLSystem], name: "encoder" }; })))(); }
var B;
function Ct() { return (Ct = e.n((function () { n.Y(), c.b(), B = (function () {
    function B(e) {
        this._renderer = e;
    }
    B.prototype.contextChange = function () { var e = this._renderer.gl; this.maxTextures = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS), this.maxBatchableTextures = c.y(this.maxTextures, e); var t = this._renderer.context.webGLVersion === 2; this.maxUniformBindings = t ? e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS) : 0; };
    B.prototype.destroy = function () { };
    return B;
}()), B.extension = { type: [n.q.WebGLSystem], name: "limits" }; })))(); }
var wt;
function Tt() { return (Tt = e.n((function () { a.z(), wt = (function () {
    function wt() {
        this.width = -1, this.height = -1, this.msaa = !1, this._attachedMipLevel = 0, this._attachedLayer = 0, this.msaaRenderBuffer = [], this.stencilMode = a.R.DISABLED, this.stencilReference = 0, this.maskStackIndex = 0;
    }
    return wt;
}()); })))(); }
var V;
function Et() { return (Et = e.n((function () { a.z(), V = [], V[a.R.NONE] = void 0, V[a.R.DISABLED] = { stencilWriteMask: 0, stencilReadMask: 0 }, V[a.R.RENDERING_MASK_ADD] = { stencilFront: { compare: "equal", passOp: "increment-clamp" }, stencilBack: { compare: "equal", passOp: "increment-clamp" } }, V[a.R.RENDERING_MASK_REMOVE] = { stencilFront: { compare: "equal", passOp: "decrement-clamp" }, stencilBack: { compare: "equal", passOp: "decrement-clamp" } }, V[a.R.MASK_ACTIVE] = { stencilWriteMask: 0, stencilFront: { compare: "equal", passOp: "keep" }, stencilBack: { compare: "equal", passOp: "keep" } }, V[a.R.INVERSE_MASK_ACTIVE] = { stencilWriteMask: 0, stencilFront: { compare: "not-equal", passOp: "keep" }, stencilBack: { compare: "not-equal", passOp: "keep" } }; })))(); }
var H;
function Dt() { return (Dt = e.n((function () { n.Y(), Et(), a.z(), H = (function () {
    function H(e) {
        this._stencilCache = { enabled: !1, stencilReference: 0, stencilMode: a.R.NONE }, this._renderer = e, e.renderTarget.onRenderTargetChange.add(this);
    }
    H.prototype.contextChange = function (e) { this._gl = e, this._comparisonFuncMapping = { always: e.ALWAYS, never: e.NEVER, equal: e.EQUAL, "not-equal": e.NOTEQUAL, less: e.LESS, "less-equal": e.LEQUAL, greater: e.GREATER, "greater-equal": e.GEQUAL }, this._stencilOpsMapping = { keep: e.KEEP, zero: e.ZERO, replace: e.REPLACE, invert: e.INVERT, "increment-clamp": e.INCR, "decrement-clamp": e.DECR, "increment-wrap": e.INCR_WRAP, "decrement-wrap": e.DECR_WRAP }, this._activeGpuRenderTarget = null, this.resetState(); };
    H.prototype.onRenderTargetChange = function (e) { if (this._activeRenderTarget === e)
        return; this._activeRenderTarget = e; var t = this._renderer.renderTarget.getGpuRenderTarget(e); this._activeGpuRenderTarget = t, this.setStencilMode(t.stencilMode, t.stencilReference); };
    H.prototype.resetState = function () { this._stencilCache.enabled = !1, this._stencilCache.stencilMode = a.R.NONE, this._stencilCache.stencilReference = 0; };
    H.prototype.setStencilMode = function (e, t) { var n; var r = (n = this._activeGpuRenderTarget) == null ? this._activeGpuRenderTarget = this._renderer.renderTarget.getGpuRenderTarget(this._activeRenderTarget) : n, i = this._gl, o = V[e], s = this._stencilCache; r.stencilMode = e, r.stencilReference = t, e === a.R.DISABLED ? this._stencilCache.enabled && (this._stencilCache.enabled = !1, i.disable(i.STENCIL_TEST)) : (this._stencilCache.enabled || (this._stencilCache.enabled = !0, i.enable(i.STENCIL_TEST)), (e !== s.stencilMode || s.stencilReference !== t) && (s.stencilMode = e, s.stencilReference = t, i.stencilFunc(this._comparisonFuncMapping[o.stencilBack.compare], t, 255), i.stencilOp(i.KEEP, i.KEEP, this._stencilOpsMapping[o.stencilBack.passOp]))); };
    H.prototype.destroy = function () { this._renderer.renderTarget.onRenderTargetChange.remove(this), this._renderer = null, this._gl = null, this._activeRenderTarget = null, this._activeGpuRenderTarget = null; };
    return H;
}()), H.extension = { type: [n.q.WebGLSystem], name: "stencil" }; })))(); }
function Ot(e) { var t = e.map(function (e) { return ({ data: e, offset: 0, size: 0 }); }), n = 0, r = 0; for (var e_33 = 0; e_33 < t.length; e_33++) {
    var i_7 = t[e_33];
    if (n = U[i_7.data.type], !n)
        throw Error("Unknown type ".concat(i_7.data.type));
    i_7.data.size > 1 && (n = Math.max(n, 16) * i_7.data.size);
    var a_4 = n === 12 ? 16 : n;
    i_7.size = n;
    var o_3 = r % 16;
    o_3 > 0 && 16 - o_3 < a_4 ? r += (16 - o_3) % 16 : r += (n - o_3 % n) % n, i_7.offset = r, r += n;
} return r = Math.ceil(r / 16) * 16, { uboElements: t, size: r }; }
var U;
function W() { return (W = e.n((function () { U = { f32: 4, i32: 4, "vec2<f32>": 8, "vec3<f32>": 12, "vec4<f32>": 16, "vec2<i32>": 8, "vec3<i32>": 12, "vec4<i32>": 16, u32: 4, "vec2<u32>": 8, "vec3<u32>": 12, "vec4<u32>": 16, "mat2x2<f32>": 32, "mat3x3<f32>": 48, "mat4x4<f32>": 64 }; })))(); }
function kt(e, t) {
    var n = Math.max(U[e.data.type] / 16, 1), r = e.data.value.length / e.data.size, i = (4 - r % 4) % 4, a = e.data.type.indexOf("i32") >= 0 ? "dataInt32" : "data";
    return "\n        v = uv.".concat(e.data.name, ";\n        offset += ").concat(t, ";\n\n        arrayOffset = offset;\n\n        t = 0;\n\n        for(var i=0; i < ").concat(e.data.size * n, "; i++)\n        {\n            for(var j = 0; j < ").concat(r, "; j++)\n            {\n                ").concat(a, "[arrayOffset++] = v[t++];\n            }\n            ").concat(i === 0 ? "" : "arrayOffset += ".concat(i, ";"), "\n        }\n    ");
}
function At() { return (At = e.n((function () { W(); })))(); }
function jt(e) { return a.u(e, a.c, kt); }
function Mt() { return (Mt = e.n((function () { a.d(), a.s(), At(); })))(); }
var G;
function Nt() { return (Nt = e.n((function () { n.Y(), a.h(), W(), Mt(), G = (function (_super) {
    __extends(G, _super);
    function G() {
        return _super.call(this, { createUboElements: Ot, generateUboSync: jt }) || this;
    }
    return G;
}(a.m)), G.extension = { type: [n.q.WebGLSystem], name: "ubo" }; })))(); }
var Pt;
function Ft() { return (Ft = e.n((function () { r._(), i.L(), a.dt(), E(), Tt(), Pt = (function () {
    function Pt() {
        this._clearColorCache = [0, 0, 0, 0], this._viewPortCache = new r.g, this._boundFramebuffer = void 0;
    }
    Pt.prototype.init = function (e, t) { this._renderer = e, this._renderTargetSystem = t, e.runners.contextChange.add(this); };
    Pt.prototype.contextChange = function () { this._clearColorCache = [0, 0, 0, 0], this._viewPortCache = new r.g, this._boundFramebuffer = void 0; var e = this._renderer.gl; this._drawBuffersCache = []; for (var t_22 = 1; t_22 <= 16; t_22++)
        this._drawBuffersCache[t_22] = Array.from({ length: t_22 }, function (t, n) { return e.COLOR_ATTACHMENT0 + n; }); };
    Pt.prototype.copyToTexture = function (e, t, n, r, i) { var a = this._renderTargetSystem, o = this._renderer, s = a.getGpuRenderTarget(e), c = o.gl; return this.finishRenderPass(e), c.bindFramebuffer(c.FRAMEBUFFER, s.resolveTargetFramebuffer), this._boundFramebuffer = s.resolveTargetFramebuffer, o.texture.bind(t, 0), c.copyTexSubImage2D(c.TEXTURE_2D, 0, i.x, i.y, n.x, n.y, r.width, r.height), t; };
    Pt.prototype.copyDepthTexture = function (e, t, n, r, i) { var a = this._renderTargetSystem, o = this._renderer.gl; this.finishRenderPass(e); var s = a.getRenderTarget(t), c = a.getGpuRenderTarget(e), l = a.getGpuRenderTarget(s); o.bindFramebuffer(o.READ_FRAMEBUFFER, c.framebuffer), o.bindFramebuffer(o.DRAW_FRAMEBUFFER, l.framebuffer), this._boundFramebuffer = void 0, o.blitFramebuffer(n.x, n.y, n.x + r.width, n.y + r.height, i.x, i.y, i.x + r.width, i.y + r.height, o.DEPTH_BUFFER_BIT, o.NEAREST); };
    Pt.prototype.startRenderPass = function (e, t, n, r, i, a) {
        var _this = this;
        if (t === void 0) { t = !0; }
        if (i === void 0) { i = 0; }
        if (a === void 0) { a = 0; }
        var o = this._renderTargetSystem.getGpuRenderTarget(e);
        if (a !== 0 && this._renderer.context.webGLVersion < 2)
            throw Error("[RenderTargetSystem] Rendering to array layers requires WebGL2.");
        if (i > 0) {
            if (o.msaa)
                throw Error("[RenderTargetSystem] Rendering to mip levels is not supported with MSAA render targets.");
            if (this._renderer.context.webGLVersion < 2)
                throw Error("[RenderTargetSystem] Rendering to mip levels requires WebGL2.");
        }
        e.colorAttachments.forEach(function (e) { _this._renderer.texture.unbind(e.texture); });
        var s = this._renderer.gl;
        this.bindFramebuffer(o.framebuffer), !e.isRoot && e.colorAttachments.length > 0 && (o._attachedMipLevel !== i || o._attachedLayer !== a) && (e.colorAttachments.forEach(function (e, t) { var n = e.texture, r = _this._renderer.texture.getGlSource(n); if (r.target === s.TEXTURE_2D) {
            if (a !== 0)
                throw Error("[RenderTargetSystem] layer must be 0 when rendering to 2D textures in WebGL.");
            s.framebufferTexture2D(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + t, s.TEXTURE_2D, r.texture, i);
        }
        else if (r.target === s.TEXTURE_2D_ARRAY || r.target === s.TEXTURE_3D)
            s.framebufferTextureLayer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + t, r.texture, i, a);
        else if (r.target === s.TEXTURE_CUBE_MAP) {
            if (a < 0 || a > 5)
                throw Error("[RenderTargetSystem] Cube map layer must be between 0 and 5.");
            s.framebufferTexture2D(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + t, s.TEXTURE_CUBE_MAP_POSITIVE_X + a, r.texture, i);
        }
        else
            throw Error("[RenderTargetSystem] Unsupported texture target for render-to-layer in WebGL."); }), o._attachedMipLevel = i, o._attachedLayer = a), o.framebuffer && (e.depthStencilAttachment ? this._attachDepthStencilTexture(e, i, a) : !o.depthStencilRenderBuffer && (e.stencil || e.depth) && this._initStencil(o)), e.colorAttachments.length > 1 && this._setDrawBuffers(e, s);
        var c = r.y;
        e.isRoot && (c = e.pixelHeight - r.height - r.y);
        var l = this._viewPortCache;
        (l.x !== r.x || l.y !== c || l.width !== r.width || l.height !== r.height) && (l.x = r.x, l.y = c, l.width = r.width, l.height = r.height, s.viewport(r.x, c, r.width, r.height)), this.clear(e, t, n);
    };
    Pt.prototype.finishRenderPass = function (e) { var t = this._renderTargetSystem.getGpuRenderTarget(e); if (!t.msaa || e.colorAttachments.length === 0)
        return; var n = this._renderer.gl; n.bindFramebuffer(n.FRAMEBUFFER, t.resolveTargetFramebuffer), n.bindFramebuffer(n.READ_FRAMEBUFFER, t.framebuffer), n.blitFramebuffer(0, 0, t.width, t.height, 0, 0, t.width, t.height, n.COLOR_BUFFER_BIT, n.NEAREST), n.bindFramebuffer(n.FRAMEBUFFER, t.framebuffer), this._boundFramebuffer = t.framebuffer; };
    Pt.prototype.initGpuRenderTarget = function (e) { var t = this._renderer.gl, n = new wt; n._attachedMipLevel = 0, n._attachedLayer = 0; var r = e.colorTexture; return r instanceof a.ut ? (this._renderer.context.ensureCanvasSize(r.resource), n.framebuffer = null, n) : (n.width = e.pixelWidth, n.height = e.pixelHeight, e.colorAttachments.length === 0 ? this._initDepth(e, n) : this._initColor(e, n), e.depthStencilAttachment && this._attachDepthStencilTexture(e, 0, 0), t.bindFramebuffer(t.FRAMEBUFFER, null), this._boundFramebuffer = null, n); };
    Pt.prototype.destroyGpuRenderTarget = function (e) { var t = this._renderer.gl; e.framebuffer && (t.deleteFramebuffer(e.framebuffer), e.framebuffer = null), e.resolveTargetFramebuffer && (t.deleteFramebuffer(e.resolveTargetFramebuffer), e.resolveTargetFramebuffer = null), e.depthStencilRenderBuffer && (t.deleteRenderbuffer(e.depthStencilRenderBuffer), e.depthStencilRenderBuffer = null), e.msaaRenderBuffer.forEach(function (e) { t.deleteRenderbuffer(e); }), e.msaaRenderBuffer.length = 0; };
    Pt.prototype.clear = function (e, t, n, r, i, a) {
        if (i === void 0) { i = 0; }
        if (a === void 0) { a = 0; }
        if (!t)
            return;
        if (a !== 0)
            throw Error("[RenderTargetSystem] Clearing array layers is not supported in WebGL renderer.");
        var o = this._renderTargetSystem;
        if (typeof t == "boolean" && (t = t ? T.ALL : T.NONE), e.colorAttachments.length === 0 && (t &= ~T.COLOR, !t))
            return;
        var s = this._renderer.gl, c = !!(t & T.DEPTH) && !this._renderer.state.depthMaskEnabled;
        if (t & T.COLOR) {
            n != null || (n = o.defaultClearColor);
            var e_34 = this._clearColorCache, t_23 = n;
            (e_34[0] !== t_23[0] || e_34[1] !== t_23[1] || e_34[2] !== t_23[2] || e_34[3] !== t_23[3]) && (e_34[0] = t_23[0], e_34[1] = t_23[1], e_34[2] = t_23[2], e_34[3] = t_23[3], s.clearColor(t_23[0], t_23[1], t_23[2], t_23[3]));
        }
        c && s.depthMask(!0), s.clear(t), c && s.depthMask(!1);
    };
    Pt.prototype.resizeGpuRenderTarget = function (e) { if (e.isRoot)
        return; var t = this._renderTargetSystem.getGpuRenderTarget(e); t.width = e.pixelWidth, t.height = e.pixelHeight, e.colorAttachments.length > 0 && this._resizeColor(e, t), t.depthStencilRenderBuffer && this._resizeStencil(t), this._boundFramebuffer = void 0; };
    Pt.prototype._initColor = function (e, t) { var n = this._renderer, r = n.gl, a = r.createFramebuffer(); if (t.resolveTargetFramebuffer = a, r.bindFramebuffer(r.FRAMEBUFFER, a), e.colorAttachments.forEach(function (e, a) { var o = e.texture; o.antialias && (n.context.supports.msaa ? t.msaa = !0 : i.R("[RenderTexture] Antialiasing on textures is not supported in WebGL1")), n.texture.bindSource(o, 0); var s = n.texture.getGlSource(o), c = s.texture; if (s.target === r.TEXTURE_2D)
        r.framebufferTexture2D(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + a, r.TEXTURE_2D, c, 0);
    else if (s.target === r.TEXTURE_2D_ARRAY || s.target === r.TEXTURE_3D)
        r.framebufferTextureLayer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + a, c, 0, 0);
    else if (s.target === r.TEXTURE_CUBE_MAP)
        r.framebufferTexture2D(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + a, r.TEXTURE_CUBE_MAP_POSITIVE_X, c, 0);
    else
        throw Error("[RenderTargetSystem] Unsupported texture target for framebuffer attachment."); }), t.msaa) {
        var n_14 = r.createFramebuffer();
        t.framebuffer = n_14, r.bindFramebuffer(r.FRAMEBUFFER, n_14), e.colorAttachments.forEach(function (e, n) { var i = r.createRenderbuffer(); t.msaaRenderBuffer[n] = i; });
    }
    else
        t.framebuffer = a; this._resizeColor(e, t); };
    Pt.prototype._initDepth = function (e, t) { var n = this._renderer; if (n.context.webGLVersion < 2)
        throw Error("[RenderTargetSystem] Depth-only render targets require WebGL2."); var r = n.gl, i = r.createFramebuffer(); t.resolveTargetFramebuffer = i, t.framebuffer = i, r.bindFramebuffer(r.FRAMEBUFFER, i), r.drawBuffers([r.NONE]), r.readBuffer(r.NONE); };
    Pt.prototype._resizeColor = function (e, t) { var n = e.colorAttachments[0].texture; if (t._attachedMipLevel = 0, t._attachedLayer = 0, e.colorAttachments.forEach(function (e, t) { t !== 0 && e.texture.resize(n.width, n.height, n._resolution); }), t.msaa) {
        var n_15 = this._renderer, r_14 = n_15.gl, i_8 = t.framebuffer;
        r_14.bindFramebuffer(r_14.FRAMEBUFFER, i_8), e.colorAttachments.forEach(function (e, i) { var a = e.texture; n_15.texture.bindSource(a, 0); var o = n_15.texture.getGlSource(a).internalFormat, s = t.msaaRenderBuffer[i]; r_14.bindRenderbuffer(r_14.RENDERBUFFER, s), r_14.renderbufferStorageMultisample(r_14.RENDERBUFFER, 4, o, a.pixelWidth, a.pixelHeight), r_14.framebufferRenderbuffer(r_14.FRAMEBUFFER, r_14.COLOR_ATTACHMENT0 + i, r_14.RENDERBUFFER, s); });
    } };
    Pt.prototype._attachDepthStencilTexture = function (e, t, n) { var r = this._renderer, i = r.gl, a = e.depthStencilAttachment.texture, o = r.texture.getGlSource(a), s = o.texture, c = a.format, l; l = c === "depth24plus-stencil8" || c === "depth32float-stencil8" ? i.DEPTH_STENCIL_ATTACHMENT : c === "stencil8" ? i.STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, o.target === i.TEXTURE_2D ? i.framebufferTexture2D(i.FRAMEBUFFER, l, i.TEXTURE_2D, s, t) : o.target === i.TEXTURE_2D_ARRAY || o.target === i.TEXTURE_3D ? i.framebufferTextureLayer(i.FRAMEBUFFER, l, s, t, n) : o.target === i.TEXTURE_CUBE_MAP && i.framebufferTexture2D(i.FRAMEBUFFER, l, i.TEXTURE_CUBE_MAP_POSITIVE_X + n, s, t); };
    Pt.prototype._initStencil = function (e) { if (e.framebuffer === null)
        return; var t = this._renderer.gl, n = t.createRenderbuffer(); e.depthStencilRenderBuffer = n, t.bindRenderbuffer(t.RENDERBUFFER, n), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.RENDERBUFFER, n), this._resizeStencil(e); };
    Pt.prototype._resizeStencil = function (e) { var t = this._renderer.gl; t.bindRenderbuffer(t.RENDERBUFFER, e.depthStencilRenderBuffer), e.msaa ? t.renderbufferStorageMultisample(t.RENDERBUFFER, 4, t.DEPTH24_STENCIL8, e.width, e.height) : t.renderbufferStorage(t.RENDERBUFFER, this._renderer.context.webGLVersion === 2 ? t.DEPTH24_STENCIL8 : t.DEPTH_STENCIL, e.width, e.height); };
    Pt.prototype.prerender = function (e) { if (e.colorAttachments.length === 0)
        return; var t = e.colorAttachments[0].texture.resource; this._renderer.context.multiView && a.ut.test(t) && this._renderer.context.ensureCanvasSize(t); };
    Pt.prototype.postrender = function (e) { if (!this._renderer.context.multiView || e.colorAttachments.length === 0)
        return; var t = e.colorAttachments[0].texture; if (a.ut.test(t.resource)) {
        var e_35 = this._renderer.context.canvas, n_16 = t;
        n_16.context2D.drawImage(e_35, 0, n_16.pixelHeight - e_35.height);
    } };
    Pt.prototype._setDrawBuffers = function (e, t) { var n = e.colorAttachments.length, r = this._drawBuffersCache[n]; if (this._renderer.context.webGLVersion === 1) {
        var e_36 = this._renderer.context.extensions.drawBuffers;
        e_36 ? e_36.drawBuffersWEBGL(r) : i.R("[RenderTexture] This WebGL1 context does not support rendering to multiple targets");
    }
    else
        t.drawBuffers(r); };
    Pt.prototype.resetState = function () { this._boundFramebuffer = void 0, this._viewPortCache = new r.g, this._clearColorCache = [0, 0, 0, 0]; };
    Pt.prototype.bindFramebuffer = function (e) { this._boundFramebuffer !== e && (this._boundFramebuffer = e, this._renderer.gl.bindFramebuffer(this._renderer.gl.FRAMEBUFFER, e)); };
    return Pt;
}()); })))(); }
var It;
function Lt() { return (Lt = e.n((function () { n.Y(), a._(), Ft(), It = (function (_super) {
    __extends(It, _super);
    function It(e) {
        var _this = this;
        _this = _super.call(this, e) || this, _this.adaptor = new Pt, _this.adaptor.init(e, _this);
        return _this;
    }
    It.prototype.resetState = function () { this.adaptor.resetState(); };
    return It;
}(a.g)), It.extension = { type: [n.q.WebGLSystem], name: "renderTarget" }; })))(); }
function Rt(e, t) {
    var n = [], r = ["\n        var g = s.groups;\n        var sS = r.shader;\n        var p = s.glProgram;\n        var ugS = r.uniformGroup;\n        var resources;\n    "], i = !1, o = 0, s = t._getProgramData(e.glProgram);
    for (var c_4 in e.groups) {
        var l_3 = e.groups[c_4];
        n.push("\n            resources = g[".concat(c_4, "].resources;\n        "));
        for (var u_2 in l_3.resources) {
            var d_2 = l_3.resources[u_2];
            if (d_2 instanceof a.Z) {
                if (d_2.ubo) {
                    var t_24 = e._uniformBindMap[c_4][Number(u_2)];
                    n.push("\n                        sS.bindUniformBlock(\n                            resources[".concat(u_2, "],\n                            '").concat(t_24, "',\n                            ").concat(e.glProgram._uniformBlockData[t_24].index, "\n                        );\n                    "));
                }
                else
                    n.push("\n                        ugS.updateUniformGroup(resources[".concat(u_2, "], p, sD);\n                    "));
            }
            else if (d_2 instanceof a.a) {
                var t_25 = e._uniformBindMap[c_4][Number(u_2)];
                n.push("\n                    sS.bindUniformBlock(\n                        resources[".concat(u_2, "],\n                        '").concat(t_25, "',\n                        ").concat(e.glProgram._uniformBlockData[t_25].index, "\n                    );\n                "));
            }
            else if (d_2 instanceof a.St || d_2 instanceof a.r) {
                var a_5 = e._uniformBindMap[c_4][u_2], l_4 = s.uniformData[a_5];
                l_4 && (i || (i = !0, r.push("\n                        var tS = r.texture;\n                        ")), t._gl.uniform1i(l_4.location, o), n.push("\n                        tS.bind(resources[".concat(u_2, "], ").concat(o, ");\n                    ")), o++);
            }
        }
    }
    return (function () { throw Error("[sapling2d] new Function is not allowed in WeChat Mini Games"); })("r", "s", "sD", __spreadArray(__spreadArray([], r, true), n, true).join("\n"));
}
function zt() { return (zt = e.n((function () { a.o(), a.Q(), a.Ct(), a.i(); })))(); }
var Bt;
function Vt() { return (Vt = e.n((function () { Bt = (function () {
    function Bt(e, t) {
        this.program = e, this.uniformData = t, this.uniformGroups = {}, this.uniformDirtyGroups = {}, this.uniformBlockBindings = {};
    }
    Bt.prototype.destroy = function () { this.uniformData = null, this.uniformGroups = null, this.uniformDirtyGroups = null, this.uniformBlockBindings = null, this.program = null; };
    return Bt;
}()); })))(); }
function Ht(e, t, n) { var r = e.createShader(t); return e.shaderSource(r, n), e.compileShader(r), r; }
function Ut(e) { var t = Array(e); for (var e_37 = 0; e_37 < t.length; e_37++)
    t[e_37] = !1; return t; }
function Wt(e, t) { switch (e) {
    case "float": return 0;
    case "vec2": return new Float32Array(2 * t);
    case "vec3": return new Float32Array(3 * t);
    case "vec4": return new Float32Array(4 * t);
    case "int":
    case "uint":
    case "sampler2D":
    case "sampler2DArray":
    case "sampler3D": return 0;
    case "ivec2": return new Int32Array(2 * t);
    case "ivec3": return new Int32Array(3 * t);
    case "ivec4": return new Int32Array(4 * t);
    case "uvec2": return new Uint32Array(2 * t);
    case "uvec3": return new Uint32Array(3 * t);
    case "uvec4": return new Uint32Array(4 * t);
    case "bool": return !1;
    case "bvec2": return Ut(2 * t);
    case "bvec3": return Ut(3 * t);
    case "bvec4": return Ut(4 * t);
    case "mat2": return new Float32Array([1, 0, 0, 1]);
    case "mat3": return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
    case "mat4": return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
} return null; }
function Gt(e, t) { if (!K) {
    var t_26 = Object.keys(qt);
    K = {};
    for (var n_17 = 0; n_17 < t_26.length; ++n_17) {
        var r_15 = t_26[n_17];
        K[e[r_15]] = qt[r_15];
    }
} return K[t]; }
function Kt(e, t) { var n = Gt(e, t); return Jt[n] || "float32"; }
var K, qt, Jt;
function Yt() { return (Yt = e.n((function () { K = null, qt = { FLOAT: "float", FLOAT_VEC2: "vec2", FLOAT_VEC3: "vec3", FLOAT_VEC4: "vec4", INT: "int", INT_VEC2: "ivec2", INT_VEC3: "ivec3", INT_VEC4: "ivec4", UNSIGNED_INT: "uint", UNSIGNED_INT_VEC2: "uvec2", UNSIGNED_INT_VEC3: "uvec3", UNSIGNED_INT_VEC4: "uvec4", BOOL: "bool", BOOL_VEC2: "bvec2", BOOL_VEC3: "bvec3", BOOL_VEC4: "bvec4", FLOAT_MAT2: "mat2", FLOAT_MAT3: "mat3", FLOAT_MAT4: "mat4", SAMPLER_2D: "sampler2D", INT_SAMPLER_2D: "sampler2D", UNSIGNED_INT_SAMPLER_2D: "sampler2D", SAMPLER_2D_SHADOW: "sampler2DShadow", SAMPLER_CUBE: "samplerCube", INT_SAMPLER_CUBE: "samplerCube", UNSIGNED_INT_SAMPLER_CUBE: "samplerCube", SAMPLER_CUBE_SHADOW: "samplerCubeShadow", SAMPLER_2D_ARRAY: "sampler2DArray", INT_SAMPLER_2D_ARRAY: "sampler2DArray", UNSIGNED_INT_SAMPLER_2D_ARRAY: "sampler2DArray", SAMPLER_2D_ARRAY_SHADOW: "sampler2DArrayShadow", SAMPLER_3D: "sampler3D", INT_SAMPLER_3D: "sampler3D", UNSIGNED_INT_SAMPLER_3D: "sampler3D" }, Jt = { float: "float32", vec2: "float32x2", vec3: "float32x3", vec4: "float32x4", int: "sint32", ivec2: "sint32x2", ivec3: "sint32x3", ivec4: "sint32x4", uint: "uint32", uvec2: "uint32x2", uvec3: "uint32x3", uvec4: "uint32x4", bool: "uint32", bvec2: "uint32x2", bvec3: "uint32x3", bvec4: "uint32x4" }; })))(); }
function Xt(e, t, n) {
    if (n === void 0) { n = !1; }
    var r = {}, i = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES);
    for (var n_18 = 0; n_18 < i; n_18++) {
        var i_9 = t.getActiveAttrib(e, n_18);
        if (i_9.name.startsWith("gl_"))
            continue;
        var o_4 = Kt(t, i_9.type);
        r[i_9.name] = { location: 0, format: o_4, stride: a.tt(o_4).stride, offset: 0, instance: !1, start: 0 };
    }
    var o = Object.keys(r);
    if (n) {
        o.sort(function (e, t) { return e > t ? 1 : -1; });
        for (var n_19 = 0; n_19 < o.length; n_19++)
            r[o[n_19]].location = n_19, t.bindAttribLocation(e, n_19, o[n_19]);
        t.linkProgram(e);
    }
    else
        for (var n_20 = 0; n_20 < o.length; n_20++)
            r[o[n_20]].location = t.getAttribLocation(e, o[n_20]);
    return r;
}
function Zt() { return (Zt = e.n((function () { a.nt(), Yt(); })))(); }
function Qt(e, t) { if (!t.ACTIVE_UNIFORM_BLOCKS)
    return {}; var n = {}, r = t.getProgramParameter(e, t.ACTIVE_UNIFORM_BLOCKS); for (var i_10 = 0; i_10 < r; i_10++) {
    var r_16 = t.getActiveUniformBlockName(e, i_10);
    n[r_16] = { name: r_16, index: t.getUniformBlockIndex(e, r_16), size: t.getActiveUniformBlockParameter(e, i_10, t.UNIFORM_BLOCK_DATA_SIZE) };
} return n; }
function $t(e, t) { var n = {}, r = t.getProgramParameter(e, t.ACTIVE_UNIFORMS); for (var i_11 = 0; i_11 < r; i_11++) {
    var r_17 = t.getActiveUniform(e, i_11), a_6 = r_17.name.replace(/\[.*?\]$/, ""), o_5 = !!r_17.name.match(/\[.*?\]$/), s_4 = Gt(t, r_17.type);
    n[a_6] = { name: a_6, index: i_11, type: s_4, size: r_17.size, isArray: o_5, value: Wt(s_4, r_17.size) };
} return n; }
function en() { return (en = e.n((function () { Yt(); })))(); }
function tn(e, t) {
    var n;
    var r = e.getShaderSource(t);
    if (r === null) {
        console.error("PixiJS Error: Could not retrieve shader source (WebGL context may be lost).");
        return;
    }
    var i = r.split("\n").map(function (e, t) { return "".concat(t, ": ").concat(e); }), a = (n = e.getShaderInfoLog(t)) == null ? "" : n, o = a.split("\n"), s = {}, c = o.map(function (e) { return parseFloat(e.replace(/^ERROR\: 0\:([\d]+)\:.*$/, "$1")); }).filter(function (e) { return e && !s[e] ? (s[e] = !0, !0) : !1; }), l = [""];
    c.forEach(function (e) { i[e - 1] = "%c".concat(i[e - 1], "%c"), l.push("background: #FF0000; color:#FFFFFF; font-size: 10px", "font-size: 10px"); }), l[0] = i.join("\n"), console.error(a), console.groupCollapsed("click to view full shader code"), console.warn.apply(console, l), console.groupEnd();
}
function nn(e, t, n, r) { e.getProgramParameter(t, e.LINK_STATUS) || (e.getShaderParameter(n, e.COMPILE_STATUS) || tn(e, n), e.getShaderParameter(r, e.COMPILE_STATUS) || tn(e, r), console.error("PixiJS Error: Could not initialize shader."), e.getProgramInfoLog(t) !== "" && console.warn("PixiJS Warning: gl.getProgramInfoLog()", e.getProgramInfoLog(t))); }
function rn(e, t) { var n = Ht(e, e.VERTEX_SHADER, t.vertex), r = Ht(e, e.FRAGMENT_SHADER, t.fragment), a = e.createProgram(); e.attachShader(a, n), e.attachShader(a, r); var o = t.transformFeedbackVaryings; o && (typeof e.transformFeedbackVaryings == "function" ? e.transformFeedbackVaryings(a, o.names, o.bufferMode === "separate" ? e.SEPARATE_ATTRIBS : e.INTERLEAVED_ATTRIBS) : i.R("TransformFeedback is not supported but TransformFeedbackVaryings are given.")), e.linkProgram(a), e.getProgramParameter(a, e.LINK_STATUS) || nn(e, a, n, r), t._attributeData = Xt(a, e, !/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(t.vertex)), t._uniformData = $t(a, e), t._uniformBlockData = Qt(a, e), e.deleteShader(n), e.deleteShader(r); var s = {}; for (var n_21 in t._uniformData) {
    var r_18 = t._uniformData[n_21];
    s[n_21] = { location: e.getUniformLocation(a, n_21), value: Wt(r_18.type, r_18.size) };
} return new Bt(a, s); }
function an() { return (an = e.n((function () { i.L(), Vt(), Zt(), en(); })))(); }
var q, J;
function on() { return (on = e.n((function () { n.Y(), zt(), an(), q = { textureCount: 0, blockIndex: 0 }, J = (function () {
    function J(e) {
        this._activeProgram = null, this._programDataHash = Object.create(null), this._shaderSyncFunctions = Object.create(null), this._renderer = e;
    }
    J.prototype.contextChange = function (e) { this._gl = e, this._programDataHash = Object.create(null), this._shaderSyncFunctions = Object.create(null), this._activeProgram = null; };
    J.prototype.bind = function (e, t) { if (this._setProgram(e.glProgram), t)
        return; q.textureCount = 0, q.blockIndex = 0; var n = this._shaderSyncFunctions[e.glProgram._key]; n || (n = this._shaderSyncFunctions[e.glProgram._key] = this._generateShaderSync(e, this)), this._renderer.buffer.nextBindBase(!!e.glProgram.transformFeedbackVaryings), n(this._renderer, e, q); };
    J.prototype.updateUniformGroup = function (e) { this._renderer.uniformGroup.updateUniformGroup(e, this._activeProgram, q); };
    J.prototype.bindUniformBlock = function (e, t, n) {
        if (n === void 0) { n = 0; }
        var r = this._renderer.buffer, i = this._getProgramData(this._activeProgram), a = e._bufferResource;
        a || this._renderer.ubo.updateUniformGroup(e);
        var o = e.buffer, s = r.updateBuffer(o), c = r.freeLocationForBufferBase(s);
        if (a) {
            var t_27 = e.offset, n_22 = e.size;
            t_27 === 0 && n_22 === o.data.byteLength ? r.bindBufferBase(s, c) : r.bindBufferRange(s, c, t_27);
        }
        else
            r.getLastBindBaseLocation(s) !== c && r.bindBufferBase(s, c);
        var l = this._activeProgram._uniformBlockData[t].index;
        i.uniformBlockBindings[n] !== c && (i.uniformBlockBindings[n] = c, this._renderer.gl.uniformBlockBinding(i.program, l, c));
    };
    J.prototype._setProgram = function (e) { if (this._activeProgram === e)
        return; this._activeProgram = e; var t = this._getProgramData(e); this._gl.useProgram(t.program); };
    J.prototype._getProgramData = function (e) { return this._programDataHash[e._key] || this._createProgramData(e); };
    J.prototype._createProgramData = function (e) { var t = e._key; return this._programDataHash[t] = rn(this._gl, e), this._programDataHash[t]; };
    J.prototype.destroy = function () { for (var _i = 0, _a = Object.keys(this._programDataHash); _i < _a.length; _i++) {
        var e_38 = _a[_i];
        this._programDataHash[e_38].destroy();
    } this._programDataHash = null, this._shaderSyncFunctions = null, this._activeProgram = null, this._renderer = null, this._gl = null; };
    J.prototype._generateShaderSync = function (e, t) { return Rt(e, t); };
    J.prototype.resetState = function () { this._activeProgram = null; };
    return J;
}()), J.extension = { type: [n.q.WebGLSystem], name: "shader" }; })))(); }
var sn, cn;
function ln() {
    return (ln = e.n((function () {
        sn = { f32: "if (cv !== v) {\n            cu.value = v;\n            gl.uniform1f(location, v);\n        }", "vec2<f32>": "if (cv[0] !== v[0] || cv[1] !== v[1]) {\n            cv[0] = v[0];\n            cv[1] = v[1];\n            gl.uniform2f(location, v[0], v[1]);\n        }", "vec3<f32>": "if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2]) {\n            cv[0] = v[0];\n            cv[1] = v[1];\n            cv[2] = v[2];\n            gl.uniform3f(location, v[0], v[1], v[2]);\n        }", "vec4<f32>": "if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3]) {\n            cv[0] = v[0];\n            cv[1] = v[1];\n            cv[2] = v[2];\n            cv[3] = v[3];\n            gl.uniform4f(location, v[0], v[1], v[2], v[3]);\n        }", i32: "if (cv !== v) {\n            cu.value = v;\n            gl.uniform1i(location, v);\n        }", "vec2<i32>": "if (cv[0] !== v[0] || cv[1] !== v[1]) {\n            cv[0] = v[0];\n            cv[1] = v[1];\n            gl.uniform2i(location, v[0], v[1]);\n        }", "vec3<i32>": "if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2]) {\n            cv[0] = v[0];\n            cv[1] = v[1];\n            cv[2] = v[2];\n            gl.uniform3i(location, v[0], v[1], v[2]);\n        }", "vec4<i32>": "if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3]) {\n            cv[0] = v[0];\n            cv[1] = v[1];\n            cv[2] = v[2];\n            cv[3] = v[3];\n            gl.uniform4i(location, v[0], v[1], v[2], v[3]);\n        }", u32: "if (cv !== v) {\n            cu.value = v;\n            gl.uniform1ui(location, v);\n        }", "vec2<u32>": "if (cv[0] !== v[0] || cv[1] !== v[1]) {\n            cv[0] = v[0];\n            cv[1] = v[1];\n            gl.uniform2ui(location, v[0], v[1]);\n        }", "vec3<u32>": "if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2]) {\n            cv[0] = v[0];\n            cv[1] = v[1];\n            cv[2] = v[2];\n            gl.uniform3ui(location, v[0], v[1], v[2]);\n        }", "vec4<u32>": "if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3]) {\n            cv[0] = v[0];\n            cv[1] = v[1];\n            cv[2] = v[2];\n            cv[3] = v[3];\n            gl.uniform4ui(location, v[0], v[1], v[2], v[3]);\n        }", bool: "if (cv !== v) {\n            cu.value = v;\n            gl.uniform1i(location, v);\n        }", "vec2<bool>": "if (cv[0] !== v[0] || cv[1] !== v[1]) {\n            cv[0] = v[0];\n            cv[1] = v[1];\n            gl.uniform2i(location, v[0], v[1]);\n        }", "vec3<bool>": "if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2]) {\n            cv[0] = v[0];\n            cv[1] = v[1];\n            cv[2] = v[2];\n            gl.uniform3i(location, v[0], v[1], v[2]);\n        }", "vec4<bool>": "if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3]) {\n            cv[0] = v[0];\n            cv[1] = v[1];\n            cv[2] = v[2];\n            cv[3] = v[3];\n            gl.uniform4i(location, v[0], v[1], v[2], v[3]);\n        }", "mat2x2<f32>": "gl.uniformMatrix2fv(location, false, v);", "mat3x3<f32>": "gl.uniformMatrix3fv(location, false, v);", "mat4x4<f32>": "gl.uniformMatrix4fv(location, false, v);" }, cn = { f32: "gl.uniform1fv(location, v);", "vec2<f32>": "gl.uniform2fv(location, v);", "vec3<f32>": "gl.uniform3fv(location, v);", "vec4<f32>": "gl.uniform4fv(location, v);", "mat2x2<f32>": "gl.uniformMatrix2fv(location, false, v);", "mat3x3<f32>": "gl.uniformMatrix3fv(location, false, v);", "mat4x4<f32>": "gl.uniformMatrix4fv(location, false, v);", i32: "gl.uniform1iv(location, v);", "vec2<i32>": "gl.uniform2iv(location, v);", "vec3<i32>": "gl.uniform3iv(location, v);", "vec4<i32>": "gl.uniform4iv(location, v);", u32: "gl.uniform1iv(location, v);", "vec2<u32>": "gl.uniform2iv(location, v);", "vec3<u32>": "gl.uniform3iv(location, v);", "vec4<u32>": "gl.uniform4iv(location, v);", bool: "gl.uniform1iv(location, v);", "vec2<bool>": "gl.uniform2iv(location, v);", "vec3<bool>": "gl.uniform3iv(location, v);", "vec4<bool>": "gl.uniform4iv(location, v);" };
    })))();
}
function un(e, t) {
    var n = ["\n        var v = null;\n        var cv = null;\n        var cu = null;\n        var t = 0;\n        var gl = renderer.gl;\n        var name = null;\n    "];
    for (var r_19 in e.uniforms) {
        if (!t[r_19]) {
            e.uniforms[r_19] instanceof a.Z ? e.uniforms[r_19].ubo ? n.push("\n                        renderer.shader.bindUniformBlock(uv.".concat(r_19, ", \"").concat(r_19, "\");\n                    ")) : n.push("\n                        renderer.shader.updateUniformGroup(uv.".concat(r_19, ");\n                    ")) : e.uniforms[r_19] instanceof a.a && n.push("\n                        renderer.shader.bindBufferResource(uv.".concat(r_19, ", \"").concat(r_19, "\");\n                    "));
            continue;
        }
        var i_12 = e.uniformStructures[r_19], o_6 = !1;
        for (var e_39 = 0; e_39 < a.p.length; e_39++) {
            var t_28 = a.p[e_39];
            if (i_12.type === t_28.type && t_28.test(i_12)) {
                n.push("name = \"".concat(r_19, "\";"), a.p[e_39].uniform), o_6 = !0;
                break;
            }
        }
        if (!o_6) {
            var e_40 = (i_12.size === 1 ? sn : cn)[i_12.type].replace("location", "ud[\"".concat(r_19, "\"].location"));
            n.push("\n            cu = ud[\"".concat(r_19, "\"];\n            cv = cu.value;\n            v = uv[\"").concat(r_19, "\"];\n            ").concat(e_40, ";"));
        }
    }
    return (function () { throw Error("[sapling2d] new Function is not allowed in WeChat Mini Games"); })("ud", "uv", "renderer", "syncData", n.join("\n"));
}
function dn() { return (dn = e.n((function () { a.o(), a.Q(), a.f(), ln(); })))(); }
var Y;
function fn() { return (fn = e.n((function () { n.Y(), dn(), Y = (function () {
    function Y(e) {
        this._cache = {}, this._uniformGroupSyncHash = {}, this._renderer = e, this.gl = null, this._cache = {};
    }
    Y.prototype.contextChange = function (e) { this.gl = e; };
    Y.prototype.updateUniformGroup = function (e, t, n) { var r = this._renderer.shader._getProgramData(t); e.isStatic && e._dirtyId === r.uniformDirtyGroups[e.uid] || (r.uniformDirtyGroups[e.uid] = e._dirtyId, this._getUniformSyncFunction(e, t)(r.uniformData, e.uniforms, this._renderer, n)); };
    Y.prototype._getUniformSyncFunction = function (e, t) { var n; return ((n = this._uniformGroupSyncHash[e._signature]) == null ? void 0 : n[t._key]) || this._createUniformSyncFunction(e, t); };
    Y.prototype._createUniformSyncFunction = function (e, t) { var n = this._uniformGroupSyncHash[e._signature] || (this._uniformGroupSyncHash[e._signature] = {}), r = this._getSignature(e, t._uniformData, "u"); return this._cache[r] || (this._cache[r] = this._generateUniformsSync(e, t._uniformData)), n[t._key] = this._cache[r], n[t._key]; };
    Y.prototype._generateUniformsSync = function (e, t) { return un(e, t); };
    Y.prototype._getSignature = function (e, t, n) { var r = e.uniforms, i = ["".concat(n, "-")]; for (var e_41 in r)
        i.push(e_41), t[e_41] && i.push(t[e_41].type); return i.join("-"); };
    Y.prototype.destroy = function () { this._renderer = null, this._cache = null; };
    return Y;
}()), Y.extension = { type: [n.q.WebGLSystem], name: "uniformGroup" }; })))(); }
function pn(e) { var t = {}; if (t.normal = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t.add = [e.ONE, e.ONE], t.multiply = [e.DST_COLOR, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA], t.screen = [e.ONE, e.ONE_MINUS_SRC_COLOR, e.ONE, e.ONE_MINUS_SRC_ALPHA], t.none = [0, 0], t["normal-npm"] = [e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA], t["add-npm"] = [e.SRC_ALPHA, e.ONE, e.ONE, e.ONE], t["screen-npm"] = [e.SRC_ALPHA, e.ONE_MINUS_SRC_COLOR, e.ONE, e.ONE_MINUS_SRC_ALPHA], t.erase = [e.ZERO, e.ONE_MINUS_SRC_ALPHA], !(e instanceof n.N.get().getWebGLRenderingContext()))
    t.min = [e.ONE, e.ONE, e.ONE, e.ONE, e.MIN, e.MIN], t.max = [e.ONE, e.ONE, e.ONE, e.ONE, e.MAX, e.MAX];
else {
    var n_23 = e.getExtension("EXT_blend_minmax");
    n_23 && (t.min = [e.ONE, e.ONE, e.ONE, e.ONE, n_23.MIN_EXT, n_23.MIN_EXT], t.max = [e.ONE, e.ONE, e.ONE, e.ONE, n_23.MAX_EXT, n_23.MAX_EXT]);
} return t; }
function mn() { return (mn = e.n((function () { n.P(); })))(); }
var hn, gn, _n, vn, yn, bn, xn, Sn;
function Cn() { return (Cn = e.n((function () {
    var _a;
    n.Y(), a.K(), mn(), _a = a.W, hn = _a.BLEND, gn = _a.OFFSET, _n = _a.CULLING, vn = _a.DEPTH_TEST, yn = _a.WINDING, bn = _a.DEPTH_MASK, xn = (function () {
        function e(e) {
            this._invertFrontFace = !1, this._renderer = e, this.gl = null, this.stateId = 0, this.polygonOffset = 0, this.blendMode = "none", this._blendEq = !1, this.map = [], this.map[hn] = this.setBlend, this.map[gn] = this.setOffset, this.map[_n] = this.setCullFace, this.map[vn] = this.setDepthTest, this.map[yn] = this.setFrontFace, this.map[bn] = this.setDepthMask, this.checks = [], this.defaultState = a.G.for2d(), e.renderTarget.onRenderTargetChange.add(this);
        }
        e.prototype.onRenderTargetChange = function (e) { this._invertFrontFace = this._renderer.renderTarget.isFrontFaceInverted(e, e.flipY), this._cullFace ? this.setFrontFace(this._frontFace) : this._frontFaceDirty = !0; };
        e.prototype.contextChange = function (e) { this.gl = e, this.blendModesMap = pn(e), this.resetState(); };
        e.prototype.set = function (e) { if (e || (e = this.defaultState), this.stateId !== e.data) {
            var t_29 = this.stateId ^ e.data, n_24 = 0;
            for (; t_29;)
                t_29 & 1 && this.map[n_24].call(this, !!(e.data & 1 << n_24)), t_29 >>= 1, n_24++;
            this.stateId = e.data;
        } for (var t_30 = 0; t_30 < this.checks.length; t_30++)
            this.checks[t_30](this, e); };
        e.prototype.forceState = function (e) { e || (e = this.defaultState); for (var t_31 = 0; t_31 < this.map.length; t_31++)
            this.map[t_31].call(this, !!(e.data & 1 << t_31)); for (var t_32 = 0; t_32 < this.checks.length; t_32++)
            this.checks[t_32](this, e); this.stateId = e.data; };
        e.prototype.setBlend = function (t) { this._updateCheck(e._checkBlendMode, t), this.gl[t ? "enable" : "disable"](this.gl.BLEND); };
        e.prototype.setOffset = function (t) { this._updateCheck(e._checkPolygonOffset, t), this.gl[t ? "enable" : "disable"](this.gl.POLYGON_OFFSET_FILL); };
        e.prototype.setDepthTest = function (e) { this.gl[e ? "enable" : "disable"](this.gl.DEPTH_TEST); };
        e.prototype.setDepthMask = function (e) { this.gl.depthMask(e); };
        Object.defineProperty(e.prototype, "depthMaskEnabled", {
            get: function () { return !!(this.stateId & 1 << bn); },
            enumerable: false,
            configurable: true
        });
        e.prototype.setCullFace = function (e) { this._cullFace = e, this.gl[e ? "enable" : "disable"](this.gl.CULL_FACE), this._cullFace && this._frontFaceDirty && this.setFrontFace(this._frontFace); };
        e.prototype.setFrontFace = function (e) { this._frontFace = e, this._frontFaceDirty = !1; var t = this._invertFrontFace ? !e : e; this._glFrontFace !== t && (this._glFrontFace = t, this.gl.frontFace(this.gl[t ? "CW" : "CCW"])); };
        e.prototype.setBlendMode = function (e) { if (this.blendModesMap[e] || (e = "normal"), e === this.blendMode)
            return; this.blendMode = e; var t = this.blendModesMap[e], n = this.gl; t.length === 2 ? n.blendFunc(t[0], t[1]) : n.blendFuncSeparate(t[0], t[1], t[2], t[3]), t.length === 6 ? (this._blendEq = !0, n.blendEquationSeparate(t[4], t[5])) : this._blendEq && (this._blendEq = !1, n.blendEquationSeparate(n.FUNC_ADD, n.FUNC_ADD)); };
        e.prototype.setPolygonOffset = function (e, t) { this.gl.polygonOffset(e, t); };
        e.prototype.resetState = function () { this._glFrontFace = !1, this._frontFace = !1, this._cullFace = !1, this._frontFaceDirty = !1, this._invertFrontFace = !1, this.gl.frontFace(this.gl.CCW), this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !1), this.forceState(this.defaultState), this._blendEq = !0, this.blendMode = "", this.setBlendMode("normal"); };
        e.prototype._updateCheck = function (e, t) { var n = this.checks.indexOf(e); t && n === -1 ? this.checks.push(e) : !t && n !== -1 && this.checks.splice(n, 1); };
        e._checkBlendMode = function (e, t) { e.setBlendMode(t.blendMode); };
        e._checkPolygonOffset = function (e, t) { e.setPolygonOffset(1, t.polygonOffset); };
        e.prototype.destroy = function () { this.gl = null, this.checks.length = 0, this._renderer = null; };
        return e;
    }()), xn.extension = { type: [n.q.WebGLSystem], name: "state" }, Sn = xn;
})))(); }
var wn;
function Tn() { return (Tn = e.n((function () { F(), wn = (function () {
    function wn(e) {
        this.target = N.TEXTURE_2D, this._layerInitMask = 0, this.texture = e, this.width = -1, this.height = -1, this.type = P.UNSIGNED_BYTE, this.internalFormat = M.RGBA, this.format = M.RGBA, this.samplerType = 0;
    }
    wn.prototype.destroy = function () { };
    return wn;
}()); })))(); }
var En, Dn;
function On() { return (On = e.n((function () { r._(), F(), En = [new r.g, new r.g, new r.g], Dn = { id: "buffer", upload: function (e, t, n, r, i, o) {
        if (o === void 0) { o = !1; }
        var s = i || t.target, c = e.resource;
        if (s === N.TEXTURE_3D || s === N.TEXTURE_2D_ARRAY) {
            o || t.width !== e.width || t.height !== e.height ? n.texImage3D(s, 0, t.internalFormat, e.width, e.height, e.depthOrArrayLayers, 0, t.format, t.type, c) : n.texSubImage3D(s, 0, 0, 0, 0, e.width, e.height, e.depthOrArrayLayers, t.format, t.type, c), t.width = e.width, t.height = e.height;
            return;
        }
        var l = e.width * e.height, u = o || t.width !== e.width || t.height !== e.height, d = e._updateStart > 0 || e._updateEnd < l;
        if (u)
            n.texImage2D(s, 0, t.internalFormat, e.width, e.height, 0, t.format, t.type, c);
        else if (d) {
            var r_20 = c.length / l, i_13 = a.t(e._updateStart, e._updateEnd, e.width, e.height, En);
            for (var a_7 = 0; a_7 < i_13; a_7++) {
                var i_14 = En[a_7], o_7 = (i_14.y * e.width + i_14.x) * r_20;
                n.texSubImage2D(s, 0, i_14.x, i_14.y, i_14.width, i_14.height, t.format, t.type, c.subarray(o_7, o_7 + i_14.width * i_14.height * r_20));
            }
        }
        else
            n.texSubImage2D(s, 0, 0, 0, e.width, e.height, t.format, t.type, c);
        t.width = e.width, t.height = e.height;
    } }; })))(); }
var kn, An;
function jn() { return (jn = e.n((function () { kn = { "bc1-rgba-unorm": !0, "bc1-rgba-unorm-srgb": !0, "bc2-rgba-unorm": !0, "bc2-rgba-unorm-srgb": !0, "bc3-rgba-unorm": !0, "bc3-rgba-unorm-srgb": !0, "bc4-r-unorm": !0, "bc4-r-snorm": !0, "bc5-rg-unorm": !0, "bc5-rg-snorm": !0, "bc6h-rgb-ufloat": !0, "bc6h-rgb-float": !0, "bc7-rgba-unorm": !0, "bc7-rgba-unorm-srgb": !0, "etc2-rgb8unorm": !0, "etc2-rgb8unorm-srgb": !0, "etc2-rgb8a1unorm": !0, "etc2-rgb8a1unorm-srgb": !0, "etc2-rgba8unorm": !0, "etc2-rgba8unorm-srgb": !0, "eac-r11unorm": !0, "eac-r11snorm": !0, "eac-rg11unorm": !0, "eac-rg11snorm": !0, "astc-4x4-unorm": !0, "astc-4x4-unorm-srgb": !0, "astc-5x4-unorm": !0, "astc-5x4-unorm-srgb": !0, "astc-5x5-unorm": !0, "astc-5x5-unorm-srgb": !0, "astc-6x5-unorm": !0, "astc-6x5-unorm-srgb": !0, "astc-6x6-unorm": !0, "astc-6x6-unorm-srgb": !0, "astc-8x5-unorm": !0, "astc-8x5-unorm-srgb": !0, "astc-8x6-unorm": !0, "astc-8x6-unorm-srgb": !0, "astc-8x8-unorm": !0, "astc-8x8-unorm-srgb": !0, "astc-10x5-unorm": !0, "astc-10x5-unorm-srgb": !0, "astc-10x6-unorm": !0, "astc-10x6-unorm-srgb": !0, "astc-10x8-unorm": !0, "astc-10x8-unorm-srgb": !0, "astc-10x10-unorm": !0, "astc-10x10-unorm-srgb": !0, "astc-12x10-unorm": !0, "astc-12x10-unorm-srgb": !0, "astc-12x12-unorm": !0, "astc-12x12-unorm-srgb": !0 }, An = { id: "compressed", upload: function (e, t, n, r, i, a) { var o = i == null ? t.target : i; n.pixelStorei(n.UNPACK_ALIGNMENT, 4); var s = e.pixelWidth, c = e.pixelHeight, l = !!kn[e.format]; for (var r_21 = 0; r_21 < e.resource.length; r_21++) {
        var i_15 = e.resource[r_21];
        l ? n.compressedTexImage2D(o, r_21, t.internalFormat, s, c, 0, i_15) : n.texImage2D(o, r_21, t.internalFormat, s, c, 0, t.format, t.type, i_15), s = Math.max(s >> 1, 1), c = Math.max(c >> 1, 1);
    } } }; })))(); }
function Mn(e) { return { id: "cube", upload: function (t, n, r, i) { var a = t.faces; for (var t_33 = 0; t_33 < Nn.length; t_33++) {
        var o_8 = a[Nn[t_33]];
        o_8.resource && ((e[o_8.uploadMethodId] || e.image).upload(o_8, n, r, i, N.TEXTURE_CUBE_MAP_POSITIVE_X + t_33, !(n._layerInitMask & 1 << t_33)), n._layerInitMask |= 1 << t_33);
    } n.width = t.pixelWidth, n.height = t.pixelHeight; } }; }
var Nn;
function Pn() { return (Pn = e.n((function () { F(), Nn = ["right", "left", "top", "bottom", "front", "back"]; })))(); }
function Fn(e, t, n, r, i, a, o, s, c, l) { l ? c ? e.texImage2D(t, 0, n.internalFormat, r, i, 0, n.format, n.type, s) : e.texSubImage2D(t, 0, 0, 0, n.format, n.type, s) : (c && e.texImage2D(t, 0, n.internalFormat, r, i, 0, n.format, n.type, null), e.texSubImage2D(t, 0, 0, 0, a, o, n.format, n.type, s)); }
function In(e, t, n, r, i, a, o, s, c, l) { l ? c ? e.texImage2D(t, 0, n.internalFormat, n.format, n.type, s) : e.texSubImage2D(t, 0, 0, 0, n.format, n.type, s) : (c && e.texImage2D(t, 0, n.internalFormat, r, i, 0, n.format, n.type, null), e.texSubImage2D(t, 0, 0, 0, n.format, n.type, s)); }
var Ln;
function Rn() { return (Rn = e.n((function () { Ln = { id: "image", upload: function (e, t, n, r, i, a) {
        if (a === void 0) { a = !1; }
        var o = i || t.target, s = e.pixelWidth, c = e.pixelHeight, l = e.resourceWidth, u = e.resourceHeight, d = r === 2, f = a || t.width !== s || t.height !== c, p = l >= s && u >= c, m = e.resource;
        (d ? Fn : In)(n, o, t, s, c, l, u, m, f, p), t.width = s, t.height = c;
    } }; })))(); }
var zn, Bn;
function Vn() { return (Vn = e.n((function () { i.s(), Rn(), zn = i.c(), Bn = { id: "video", upload: function (e, t, n, r, i, a) {
        if (a === void 0) { a = zn; }
        if (e.isValid)
            Ln.upload(e, t, n, r, i, a);
        else {
            var e_42 = i == null ? t.target : i;
            n.texImage2D(e_42, 0, t.internalFormat, 1, 1, 0, t.format, t.type, null);
        }
    } }; })))(); }
var Hn, Un, X, Wn;
function Gn() { return (Gn = e.n((function () { Hn = { linear: 9729, nearest: 9728 }, Un = { linear: { linear: 9987, nearest: 9985 }, nearest: { linear: 9986, nearest: 9984 } }, X = { "clamp-to-edge": 33071, repeat: 10497, "mirror-repeat": 33648 }, Wn = { never: 512, less: 513, equal: 514, "less-equal": 515, greater: 516, "not-equal": 517, "greater-equal": 518, always: 519 }; })))(); }
function Kn(e, t, n, r, i, a, o, s) { var c = a; if (!s || e.addressModeU !== "repeat" || e.addressModeV !== "repeat" || e.addressModeW !== "repeat") {
    var n_25 = X[o ? "clamp-to-edge" : e.addressModeU], r_22 = X[o ? "clamp-to-edge" : e.addressModeV], a_8 = X[o ? "clamp-to-edge" : e.addressModeW];
    t[i](c, t.TEXTURE_WRAP_S, n_25), t[i](c, t.TEXTURE_WRAP_T, r_22), t.TEXTURE_WRAP_R && t[i](c, t.TEXTURE_WRAP_R, a_8);
} if (s && e.magFilter === "linear" || t[i](c, t.TEXTURE_MAG_FILTER, Hn[e.magFilter]), n) {
    if (!s || e.mipmapFilter !== "linear") {
        var n_26 = Un[e.minFilter][e.mipmapFilter];
        t[i](c, t.TEXTURE_MIN_FILTER, n_26);
    }
}
else
    t[i](c, t.TEXTURE_MIN_FILTER, Hn[e.minFilter]); if (r && e.maxAnisotropy > 1) {
    var n_27 = Math.min(e.maxAnisotropy, t.getParameter(r.MAX_TEXTURE_MAX_ANISOTROPY_EXT));
    t[i](c, r.TEXTURE_MAX_ANISOTROPY_EXT, n_27);
} e.compare ? (t[i](c, t.TEXTURE_COMPARE_FUNC, Wn[e.compare]), t[i](c, t.TEXTURE_COMPARE_MODE, t.COMPARE_REF_TO_TEXTURE)) : s || t[i](c, t.TEXTURE_COMPARE_MODE, t.NONE); }
function qn() { return (qn = e.n((function () { Gn(); })))(); }
function Jn(e) { return { r8unorm: e.RED, r8snorm: e.RED, r8uint: e.RED_INTEGER, r8sint: e.RED_INTEGER, r16uint: e.RED_INTEGER, r16sint: e.RED_INTEGER, r16float: e.RED, rg8unorm: e.RG, rg8snorm: e.RG, rg8uint: e.RG_INTEGER, rg8sint: e.RG_INTEGER, r32uint: e.RED_INTEGER, r32sint: e.RED_INTEGER, r32float: e.RED, rg16uint: e.RG_INTEGER, rg16sint: e.RG_INTEGER, rg16float: e.RG, rgba8unorm: e.RGBA, "rgba8unorm-srgb": e.RGBA, rgba8snorm: e.RGBA, rgba8uint: e.RGBA_INTEGER, rgba8sint: e.RGBA_INTEGER, bgra8unorm: e.RGBA, "bgra8unorm-srgb": e.RGBA, rgb9e5ufloat: e.RGB, rgb10a2unorm: e.RGBA, rg11b10ufloat: e.RGB, rg32uint: e.RG_INTEGER, rg32sint: e.RG_INTEGER, rg32float: e.RG, rgba16uint: e.RGBA_INTEGER, rgba16sint: e.RGBA_INTEGER, rgba16float: e.RGBA, rgba32uint: e.RGBA_INTEGER, rgba32sint: e.RGBA_INTEGER, rgba32float: e.RGBA, stencil8: e.STENCIL_INDEX8, depth16unorm: e.DEPTH_COMPONENT, depth24plus: e.DEPTH_COMPONENT, "depth24plus-stencil8": e.DEPTH_STENCIL, depth32float: e.DEPTH_COMPONENT, "depth32float-stencil8": e.DEPTH_STENCIL }; }
function Yn(e, r) { var i = {}, a = e.RGBA; return e instanceof n.N.get().getWebGLRenderingContext() ? r.srgb && (i = { "rgba8unorm-srgb": r.srgb.SRGB8_ALPHA8_EXT, "bgra8unorm-srgb": r.srgb.SRGB8_ALPHA8_EXT }) : (i = { "rgba8unorm-srgb": e.SRGB8_ALPHA8, "bgra8unorm-srgb": e.SRGB8_ALPHA8 }, a = e.RGBA8), t.a(t.a(t.a(t.a(t.a(t.a(t.a({ r8unorm: e.R8, r8snorm: e.R8_SNORM, r8uint: e.R8UI, r8sint: e.R8I, r16uint: e.R16UI, r16sint: e.R16I, r16float: e.R16F, rg8unorm: e.RG8, rg8snorm: e.RG8_SNORM, rg8uint: e.RG8UI, rg8sint: e.RG8I, r32uint: e.R32UI, r32sint: e.R32I, r32float: e.R32F, rg16uint: e.RG16UI, rg16sint: e.RG16I, rg16float: e.RG16F, rgba8unorm: e.RGBA }, i), {}, { rgba8snorm: e.RGBA8_SNORM, rgba8uint: e.RGBA8UI, rgba8sint: e.RGBA8I, bgra8unorm: a, rgb9e5ufloat: e.RGB9_E5, rgb10a2unorm: e.RGB10_A2, rg11b10ufloat: e.R11F_G11F_B10F, rg32uint: e.RG32UI, rg32sint: e.RG32I, rg32float: e.RG32F, rgba16uint: e.RGBA16UI, rgba16sint: e.RGBA16I, rgba16float: e.RGBA16F, rgba32uint: e.RGBA32UI, rgba32sint: e.RGBA32I, rgba32float: e.RGBA32F, stencil8: e.STENCIL_INDEX8, depth16unorm: e.DEPTH_COMPONENT16, depth24plus: e.DEPTH_COMPONENT24, "depth24plus-stencil8": e.DEPTH24_STENCIL8, depth32float: e.DEPTH_COMPONENT32F, "depth32float-stencil8": e.DEPTH32F_STENCIL8 }, r.s3tc ? { "bc1-rgba-unorm": r.s3tc.COMPRESSED_RGBA_S3TC_DXT1_EXT, "bc2-rgba-unorm": r.s3tc.COMPRESSED_RGBA_S3TC_DXT3_EXT, "bc3-rgba-unorm": r.s3tc.COMPRESSED_RGBA_S3TC_DXT5_EXT } : {}), r.s3tc_sRGB ? { "bc1-rgba-unorm-srgb": r.s3tc_sRGB.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, "bc2-rgba-unorm-srgb": r.s3tc_sRGB.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT, "bc3-rgba-unorm-srgb": r.s3tc_sRGB.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT } : {}), r.rgtc ? { "bc4-r-unorm": r.rgtc.COMPRESSED_RED_RGTC1_EXT, "bc4-r-snorm": r.rgtc.COMPRESSED_SIGNED_RED_RGTC1_EXT, "bc5-rg-unorm": r.rgtc.COMPRESSED_RED_GREEN_RGTC2_EXT, "bc5-rg-snorm": r.rgtc.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT } : {}), r.bptc ? { "bc6h-rgb-float": r.bptc.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT, "bc6h-rgb-ufloat": r.bptc.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT, "bc7-rgba-unorm": r.bptc.COMPRESSED_RGBA_BPTC_UNORM_EXT, "bc7-rgba-unorm-srgb": r.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT } : {}), r.etc ? { "etc2-rgb8unorm": r.etc.COMPRESSED_RGB8_ETC2, "etc2-rgb8unorm-srgb": r.etc.COMPRESSED_SRGB8_ETC2, "etc2-rgb8a1unorm": r.etc.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2, "etc2-rgb8a1unorm-srgb": r.etc.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2, "etc2-rgba8unorm": r.etc.COMPRESSED_RGBA8_ETC2_EAC, "etc2-rgba8unorm-srgb": r.etc.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC, "eac-r11unorm": r.etc.COMPRESSED_R11_EAC, "eac-rg11unorm": r.etc.COMPRESSED_SIGNED_RG11_EAC } : {}), r.astc ? { "astc-4x4-unorm": r.astc.COMPRESSED_RGBA_ASTC_4x4_KHR, "astc-4x4-unorm-srgb": r.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR, "astc-5x4-unorm": r.astc.COMPRESSED_RGBA_ASTC_5x4_KHR, "astc-5x4-unorm-srgb": r.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR, "astc-5x5-unorm": r.astc.COMPRESSED_RGBA_ASTC_5x5_KHR, "astc-5x5-unorm-srgb": r.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR, "astc-6x5-unorm": r.astc.COMPRESSED_RGBA_ASTC_6x5_KHR, "astc-6x5-unorm-srgb": r.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR, "astc-6x6-unorm": r.astc.COMPRESSED_RGBA_ASTC_6x6_KHR, "astc-6x6-unorm-srgb": r.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR, "astc-8x5-unorm": r.astc.COMPRESSED_RGBA_ASTC_8x5_KHR, "astc-8x5-unorm-srgb": r.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR, "astc-8x6-unorm": r.astc.COMPRESSED_RGBA_ASTC_8x6_KHR, "astc-8x6-unorm-srgb": r.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR, "astc-8x8-unorm": r.astc.COMPRESSED_RGBA_ASTC_8x8_KHR, "astc-8x8-unorm-srgb": r.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR, "astc-10x5-unorm": r.astc.COMPRESSED_RGBA_ASTC_10x5_KHR, "astc-10x5-unorm-srgb": r.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR, "astc-10x6-unorm": r.astc.COMPRESSED_RGBA_ASTC_10x6_KHR, "astc-10x6-unorm-srgb": r.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR, "astc-10x8-unorm": r.astc.COMPRESSED_RGBA_ASTC_10x8_KHR, "astc-10x8-unorm-srgb": r.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR, "astc-10x10-unorm": r.astc.COMPRESSED_RGBA_ASTC_10x10_KHR, "astc-10x10-unorm-srgb": r.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR, "astc-12x10-unorm": r.astc.COMPRESSED_RGBA_ASTC_12x10_KHR, "astc-12x10-unorm-srgb": r.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR, "astc-12x12-unorm": r.astc.COMPRESSED_RGBA_ASTC_12x12_KHR, "astc-12x12-unorm-srgb": r.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR } : {}); }
function Xn() { return (Xn = e.n((function () { n.P(), t.o(); })))(); }
function Zn(e) { return { r8unorm: e.UNSIGNED_BYTE, r8snorm: e.BYTE, r8uint: e.UNSIGNED_BYTE, r8sint: e.BYTE, r16uint: e.UNSIGNED_SHORT, r16sint: e.SHORT, r16float: e.HALF_FLOAT, rg8unorm: e.UNSIGNED_BYTE, rg8snorm: e.BYTE, rg8uint: e.UNSIGNED_BYTE, rg8sint: e.BYTE, r32uint: e.UNSIGNED_INT, r32sint: e.INT, r32float: e.FLOAT, rg16uint: e.UNSIGNED_SHORT, rg16sint: e.SHORT, rg16float: e.HALF_FLOAT, rgba8unorm: e.UNSIGNED_BYTE, "rgba8unorm-srgb": e.UNSIGNED_BYTE, rgba8snorm: e.BYTE, rgba8uint: e.UNSIGNED_BYTE, rgba8sint: e.BYTE, bgra8unorm: e.UNSIGNED_BYTE, "bgra8unorm-srgb": e.UNSIGNED_BYTE, rgb9e5ufloat: e.UNSIGNED_INT_5_9_9_9_REV, rgb10a2unorm: e.UNSIGNED_INT_2_10_10_10_REV, rg11b10ufloat: e.UNSIGNED_INT_10F_11F_11F_REV, rg32uint: e.UNSIGNED_INT, rg32sint: e.INT, rg32float: e.FLOAT, rgba16uint: e.UNSIGNED_SHORT, rgba16sint: e.SHORT, rgba16float: e.HALF_FLOAT, rgba32uint: e.UNSIGNED_INT, rgba32sint: e.INT, rgba32float: e.FLOAT, stencil8: e.UNSIGNED_BYTE, depth16unorm: e.UNSIGNED_SHORT, depth24plus: e.UNSIGNED_INT, "depth24plus-stencil8": e.UNSIGNED_INT_24_8, depth32float: e.FLOAT, "depth32float-stencil8": e.FLOAT_32_UNSIGNED_INT_24_8_REV }; }
function Qn(e) { return { "2d": e.TEXTURE_2D, cube: e.TEXTURE_CUBE_MAP, "1d": null, "3d": (e == null ? void 0 : e.TEXTURE_3D) || null, "2d-array": (e == null ? void 0 : e.TEXTURE_2D_ARRAY) || null, "cube-array": (e == null ? void 0 : e.TEXTURE_CUBE_MAP_ARRAY) || null }; }
var $n, Z, er;
function tr() { return (tr = e.n((function () { n.P(), n.Y(), i.f(), a._t(), Tn(), On(), jn(), Pn(), Rn(), Vn(), qn(), Xn(), t.o(), $n = 4, Z = (function () {
    function e(n) {
        this._glSamplers = Object.create(null), this._boundTextures = [], this._integerUnits = 0, this._activeTextureLocation = -1, this._boundSamplers = Object.create(null), this._premultiplyAlpha = !1, this._useSeparateSamplers = !1, this._renderer = n, this._managedTextures = new i.d({ renderer: n, type: "resource", onUnload: this.onSourceUnload.bind(this), name: "glTexture" });
        var r = t.a({ image: Ln, buffer: Dn, video: Bn, compressed: An }, e.uploadExtensions);
        this._uploads = t.a(t.a({}, r), {}, { cube: Mn(r) });
    }
    Object.defineProperty(e.prototype, "managedTextures", {
        get: function () { return Object.values(this._managedTextures.items); },
        enumerable: false,
        configurable: true
    });
    e.prototype.contextChange = function (e) { this._gl = e, this._mapFormatToInternalFormat || (this._mapFormatToInternalFormat = Yn(e, this._renderer.context.extensions), this._mapFormatToType = Zn(e), this._mapFormatToFormat = Jn(e), this._mapViewDimensionToGlTarget = Qn(e)), this._managedTextures.removeAll(!0), this._glSamplers = Object.create(null), this._boundSamplers = Object.create(null), this._premultiplyAlpha = !1; for (var e_43 = 0; e_43 < 16; e_43++)
        this.bind(a.gt.EMPTY, e_43); };
    e.prototype.initSource = function (e) { this.bind(e); };
    e.prototype.bind = function (e, t) {
        if (t === void 0) { t = 0; }
        var n = e.source;
        e ? (this.bindSource(n, t), this._useSeparateSamplers && this._bindSampler(n.style, t)) : (this.bindSource(null, t), this._useSeparateSamplers && this._bindSampler(null, t));
    };
    e.prototype.bindSource = function (e, t) {
        if (t === void 0) { t = 0; }
        var n = this._gl;
        if (e._gcLastUsed = this._renderer.gc.now, this._boundTextures[t] !== e) {
            this._setBoundTexture(t, e), this._activateLocation(t), e || (e = a.gt.EMPTY.source);
            var r_23 = this.getGlSource(e);
            n.bindTexture(r_23.target, r_23.texture);
        }
    };
    e.prototype.unbindIntegerTextures = function (e) { if (e >= 32)
        return; var t = this._integerUnits >>> e << e; for (; t;) {
        var e_44 = 31 - Math.clz32(t);
        t &= ~(1 << e_44), this.bind(a.gt.EMPTY, e_44);
    } };
    e.prototype._setBoundTexture = function (e, t) { this._boundTextures[e] = t, e < 0 || e > 31 || t && t.viewDimension === "2d" && (a.Dt(t.format) ? this._integerUnits |= 1 << e : this._integerUnits &= ~(1 << e)); };
    e.prototype._bindSampler = function (e, t) {
        if (t === void 0) { t = 0; }
        var n = this._gl;
        if (!e) {
            this._boundSamplers[t] = null, n.bindSampler(t, null);
            return;
        }
        var r = this._getGlSampler(e);
        this._boundSamplers[t] !== r && (this._boundSamplers[t] = r, n.bindSampler(t, r));
    };
    e.prototype.unbind = function (e) { var t = e.source, n = this._boundTextures, r = this._gl; for (var e_45 = 0; e_45 < n.length; e_45++)
        if (n[e_45] === t) {
            this._activateLocation(e_45);
            var n_28 = this.getGlSource(t);
            r.bindTexture(n_28.target, null), this._setBoundTexture(e_45, null);
        } };
    e.prototype._activateLocation = function (e) { this._activeTextureLocation !== e && (this._activeTextureLocation = e, this._gl.activeTexture(this._gl.TEXTURE0 + e)); };
    e.prototype._initSource = function (e) { var t = this._gl, n = new wn(t.createTexture()); if (n.type = this._mapFormatToType[e.format], n.internalFormat = this._mapFormatToInternalFormat[e.format], n.format = this._mapFormatToFormat[e.format], n.target = this._mapViewDimensionToGlTarget[e.viewDimension], n.target === null)
        throw Error("Unsupported view dimension: ".concat(e.viewDimension, " with this webgl version: ").concat(this._renderer.context.webGLVersion)); if (e.autoGenerateMipmaps && (this._renderer.context.supports.nonPowOf2mipmaps || e.isPowerOfTwo)) {
        var t_34 = Math.max(e.width, e.height, e.depth);
        e.mipLevelCount = Math.floor(Math.log2(t_34)) + 1;
    } return e._gpuData[this._renderer.uid] = n, this._managedTextures.add(e) && (e.on("update", this.onSourceUpdate, this), e.on("resize", this.onSourceUpdate, this), e.on("styleChange", this.onStyleChange, this), e.on("updateMipmaps", this.onUpdateMipmaps, this)), this.onSourceUpdate(e), this.updateStyle(e, !1), n; };
    e.prototype.onStyleChange = function (e) { this.updateStyle(e, !1); };
    e.prototype.updateStyle = function (e, t) { var n = this._gl, r = this.getGlSource(e); n.bindTexture(r.target, r.texture), this._setBoundTexture(this._activeTextureLocation, e), Kn(e.style, n, e.mipLevelCount > 1, this._renderer.context.extensions.anisotropicFiltering, "texParameteri", r.target, !this._renderer.context.supports.nonPowOf2wrapping && !e.isPowerOfTwo, t); };
    e.prototype.onSourceUnload = function (e, t) {
        if (t === void 0) { t = !1; }
        var n = e._gpuData[this._renderer.uid];
        n && (t || (this.unbind(e), this._gl.deleteTexture(n.texture)), e.off("update", this.onSourceUpdate, this), e.off("resize", this.onSourceUpdate, this), e.off("styleChange", this.onStyleChange, this), e.off("updateMipmaps", this.onUpdateMipmaps, this));
    };
    e.prototype.onSourceUpdate = function (e) { var t = this._gl, n = this.getGlSource(e); t.bindTexture(n.target, n.texture), this._setBoundTexture(this._activeTextureLocation, e); var r = e.alphaMode === "premultiply-alpha-on-upload" && !a.Dt(e.format) && n.target !== t.TEXTURE_3D && n.target !== t.TEXTURE_2D_ARRAY; if (this._premultiplyAlpha !== r && (this._premultiplyAlpha = r, t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, r)), this._uploads[e.uploadMethodId])
        this._uploads[e.uploadMethodId].upload(e, n, t, this._renderer.context.webGLVersion);
    else if (n.target === t.TEXTURE_2D)
        this._initEmptyTexture2D(n, e);
    else if (n.target === t.TEXTURE_2D_ARRAY || n.target === t.TEXTURE_3D)
        this._initEmptyTexture3D(n, e);
    else if (n.target === t.TEXTURE_CUBE_MAP)
        this._initEmptyTextureCube(n, e);
    else
        throw Error("[GlTextureSystem] Unsupported texture target for empty allocation."); this._applyMipRange(n, e), e.autoGenerateMipmaps && e.mipLevelCount > 1 && this.onUpdateMipmaps(e, !1); };
    e.prototype.onUpdateMipmaps = function (e, t) {
        if (t === void 0) { t = !0; }
        t && this.bindSource(e, 0);
        var n = this.getGlSource(e);
        this._gl.generateMipmap(n.target);
    };
    e.prototype._initEmptyTexture2D = function (e, t) { var n = this._gl; n.texImage2D(n.TEXTURE_2D, 0, e.internalFormat, t.pixelWidth, t.pixelHeight, 0, e.format, e.type, null); var r = Math.max(t.pixelWidth >> 1, 1), i = Math.max(t.pixelHeight >> 1, 1); for (var a_9 = 1; a_9 < t.mipLevelCount; a_9++)
        n.texImage2D(n.TEXTURE_2D, a_9, e.internalFormat, r, i, 0, e.format, e.type, null), r = Math.max(r >> 1, 1), i = Math.max(i >> 1, 1); };
    e.prototype._initEmptyTexture3D = function (e, t) { var n = this._gl, r = e.target === n.TEXTURE_3D, i = t.pixelWidth, a = t.pixelHeight, o = t.depthOrArrayLayers; for (var s_5 = 0; s_5 < t.mipLevelCount; s_5++)
        n.texImage3D(e.target, s_5, e.internalFormat, i, a, o, 0, e.format, e.type, null), i = Math.max(i >> 1, 1), a = Math.max(a >> 1, 1), r && (o = Math.max(o >> 1, 1)); };
    e.prototype._initEmptyTextureCube = function (e, t) { var n = this._gl; for (var r_24 = 0; r_24 < 6; r_24++)
        n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + r_24, 0, e.internalFormat, t.pixelWidth, t.pixelHeight, 0, e.format, e.type, null); var r = Math.max(t.pixelWidth >> 1, 1), i = Math.max(t.pixelHeight >> 1, 1); for (var a_10 = 1; a_10 < t.mipLevelCount; a_10++) {
        for (var t_35 = 0; t_35 < 6; t_35++)
            n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + t_35, a_10, e.internalFormat, r, i, 0, e.format, e.type, null);
        r = Math.max(r >> 1, 1), i = Math.max(i >> 1, 1);
    } };
    e.prototype._applyMipRange = function (e, t) { if (this._renderer.context.webGLVersion !== 2 || t.mipLevelCount <= 1)
        return; var n = this._gl, r = Math.max((t.mipLevelCount | 0) - 1, 0); n.texParameteri(e.target, n.TEXTURE_BASE_LEVEL, 0), n.texParameteri(e.target, n.TEXTURE_MAX_LEVEL, r); };
    e.prototype._initSampler = function (e) { var t = this._gl, n = this._gl.createSampler(); return this._glSamplers[e._resourceId] = n, Kn(e, t, this._boundTextures[this._activeTextureLocation].mipLevelCount > 1, this._renderer.context.extensions.anisotropicFiltering, "samplerParameteri", n, !1, !0), this._glSamplers[e._resourceId]; };
    e.prototype._getGlSampler = function (e) { return this._glSamplers[e._resourceId] || this._initSampler(e); };
    e.prototype.getGlSource = function (e) { return e._gcLastUsed = this._renderer.gc.now, e._gpuData[this._renderer.uid] || this._initSource(e); };
    e.prototype.generateCanvas = function (e) { var _a = this.getPixels(e), t = _a.pixels, r = _a.width, i = _a.height, a = n.N.get().createCanvas(); a.width = r, a.height = i; var o = a.getContext("2d"); if (o) {
        var e_46 = o.createImageData(r, i);
        e_46.data.set(t), o.putImageData(e_46, 0, 0);
    } return a; };
    e.prototype.getPixels = function (e) { var t = e.source.resolution, n = e.frame, r = Math.max(Math.round(n.width * t), 1), i = Math.max(Math.round(n.height * t), 1), a = new Uint8Array($n * r * i), o = this._renderer, s = o.renderTarget.getRenderTarget(e), c = o.renderTarget.getGpuRenderTarget(s), l = o.gl; return o.renderTarget.adaptor.bindFramebuffer(c.resolveTargetFramebuffer), l.readPixels(Math.round(n.x * t), Math.round(n.y * t), r, i, l.RGBA, l.UNSIGNED_BYTE, a), { pixels: new Uint8ClampedArray(a.buffer), width: r, height: i }; };
    e.prototype.destroy = function () { this._managedTextures.destroy(), this._glSamplers = null, this._boundTextures = null, this._boundSamplers = null, this._mapFormatToInternalFormat = null, this._mapFormatToType = null, this._mapFormatToFormat = null, this._uploads = null, this._renderer = null; };
    e.prototype.resetState = function () { var e = this._renderer.limits.maxTextures; this._activeTextureLocation = -1, this._boundTextures.fill(null), this._integerUnits = e >= 32 ? -1 : (1 << e) - 1, this._boundSamplers = Object.create(null); var t = this._gl; this._premultiplyAlpha = !1, t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this._premultiplyAlpha); };
    return e;
}()), Z.extension = { type: [n.q.WebGLSystem], name: "texture" }, Z.uploadExtensions = Object.create(null), er = Z, n.J.handleByMap(n.q.TextureUploaderWebGL, er.uploadExtensions); })))(); }
var nr, rr, ir, ar, or, sr, cr, lr;
function ur() { return (ur = e.n((function () {
    var _a;
    n.Y(), o.n(), s.f(), c.o(), a.U(), a.b(), a.X(), ot(), ct(), _t(), bt(), xt(), St(), Ct(), Dt(), Nt(), Lt(), on(), fn(), Cn(), tr(), nr = __spreadArray(__spreadArray([], a.y, true), [G, yt, st, B, at, er, It, I, Y, J, z, Sn, H, R], false), rr = __spreadArray([], a.v, true), ir = [c.a, s.d, o.t], ar = [], or = [], sr = [], cr = [], n.J.handleByNamedList(n.q.WebGLSystem, ar), n.J.handleByNamedList(n.q.WebGLPipes, or), n.J.handleByNamedList(n.q.WebGLPipesAdaptor, sr), n.J.handleByNamedList(n.q.WebGLLoader, cr), (_a = n.J).add.apply(_a, __spreadArray(__spreadArray(__spreadArray([], nr, false), rr, false), ir, false)), lr = (function (_super) {
        __extends(lr, _super);
        function lr() {
            var e = { name: "webgl", type: a.Y.WEBGL, systems: ar, renderPipes: or, renderPipeAdaptors: sr, loaders: cr };
            return _super.call(this, e) || this;
        }
        return lr;
    }(a.H));
})))(); }
function dr(e) { var t = e.map(function (e) { return ({ data: e, offset: 0, size: 0 }); }), n = 0; for (var e_47 = 0; e_47 < t.length; e_47++) {
    var r_25 = t[e_47], i_16 = Q[r_25.data.type].size, a_11 = Q[r_25.data.type].align;
    if (!Q[r_25.data.type])
        throw Error("[Pixi.js] WebGPU UniformBuffer: Unknown type ".concat(r_25.data.type));
    r_25.data.size > 1 && (i_16 = Math.max(i_16, a_11) * r_25.data.size), n = Math.ceil(n / a_11) * a_11, r_25.size = i_16, r_25.offset = n, n += i_16;
} return n = Math.ceil(n / 16) * 16, { uboElements: t, size: n }; }
var Q;
function $() { return ($ = e.n((function () { Q = { i32: { align: 4, size: 4 }, u32: { align: 4, size: 4 }, f32: { align: 4, size: 4 }, f16: { align: 2, size: 2 }, "vec2<i32>": { align: 8, size: 8 }, "vec2<u32>": { align: 8, size: 8 }, "vec2<f32>": { align: 8, size: 8 }, "vec2<f16>": { align: 4, size: 4 }, "vec3<i32>": { align: 16, size: 12 }, "vec3<u32>": { align: 16, size: 12 }, "vec3<f32>": { align: 16, size: 12 }, "vec3<f16>": { align: 8, size: 6 }, "vec4<i32>": { align: 16, size: 16 }, "vec4<u32>": { align: 16, size: 16 }, "vec4<f32>": { align: 16, size: 16 }, "vec4<f16>": { align: 8, size: 8 }, "mat2x2<f32>": { align: 8, size: 16 }, "mat2x2<f16>": { align: 4, size: 8 }, "mat3x2<f32>": { align: 8, size: 24 }, "mat3x2<f16>": { align: 4, size: 12 }, "mat4x2<f32>": { align: 8, size: 32 }, "mat4x2<f16>": { align: 4, size: 16 }, "mat2x3<f32>": { align: 16, size: 32 }, "mat2x3<f16>": { align: 8, size: 16 }, "mat3x3<f32>": { align: 16, size: 48 }, "mat3x3<f16>": { align: 8, size: 24 }, "mat4x3<f32>": { align: 16, size: 64 }, "mat4x3<f16>": { align: 8, size: 32 }, "mat2x4<f32>": { align: 16, size: 32 }, "mat2x4<f16>": { align: 8, size: 16 }, "mat3x4<f32>": { align: 16, size: 48 }, "mat3x4<f16>": { align: 8, size: 24 }, "mat4x4<f32>": { align: 16, size: 64 }, "mat4x4<f16>": { align: 8, size: 32 } }; })))(); }
function fr(e, t) {
    var _a = Q[e.data.type], n = _a.size, r = _a.align, i = (Math.max(n, r) - n) / 4, a = e.data.type.indexOf("i32") >= 0 ? "dataInt32" : "data";
    return "\n         v = uv.".concat(e.data.name, ";\n         ").concat(t === 0 ? "" : "offset += ".concat(t, ";"), "\n\n         arrayOffset = offset;\n\n         t = 0;\n\n         for(var i=0; i < ").concat(e.data.size, "; i++)\n         {\n             for(var j = 0; j < ").concat(n / 4, "; j++)\n             {\n                 ").concat(a, "[arrayOffset++] = v[t++];\n             }\n             ").concat(i === 0 ? "" : "arrayOffset += ".concat(i, ";"), "\n         }\n     ");
}
function pr() { return (pr = e.n((function () { $(); })))(); }
function mr(e) { return a.u(e, a.l, fr); }
function hr() { return (hr = e.n((function () { a.d(), a.s(), pr(); })))(); }
var gr;
function _r() { return (_r = e.n((function () { n.Y(), a.h(), $(), hr(), gr = (function (_super) {
    __extends(gr, _super);
    function gr() {
        return _super.call(this, { createUboElements: dr, generateUboSync: mr }) || this;
    }
    return gr;
}(a.m)), gr.extension = { type: [n.q.WebGPUSystem], name: "ubo" }; })))(); }
Object.defineProperty(exports, "A", { enumerable: !0, get: function () { return ze; } }), Object.defineProperty(exports, "B", { enumerable: !0, get: function () { return ie; } }), Object.defineProperty(exports, "C", { enumerable: !0, get: function () { return O; } }), Object.defineProperty(exports, "D", { enumerable: !0, get: function () { return T; } }), Object.defineProperty(exports, "E", { enumerable: !0, get: function () { return He; } }), Object.defineProperty(exports, "F", { enumerable: !0, get: function () { return oe; } }), Object.defineProperty(exports, "H", { enumerable: !0, get: function () { return ne; } }), Object.defineProperty(exports, "I", { enumerable: !0, get: function () { return se; } }), Object.defineProperty(exports, "L", { enumerable: !0, get: function () { return _; } }), Object.defineProperty(exports, "M", { enumerable: !0, get: function () { return Le; } }), Object.defineProperty(exports, "N", { enumerable: !0, get: function () { return S; } }), Object.defineProperty(exports, "O", { enumerable: !0, get: function () { return E; } }), Object.defineProperty(exports, "P", { enumerable: !0, get: function () { return we; } }), Object.defineProperty(exports, "R", { enumerable: !0, get: function () { return ae; } }), Object.defineProperty(exports, "S", { enumerable: !0, get: function () { return Ye; } }), Object.defineProperty(exports, "T", { enumerable: !0, get: function () { return Be; } }), Object.defineProperty(exports, "U", { enumerable: !0, get: function () { return u; } }), Object.defineProperty(exports, "V", { enumerable: !0, get: function () { return g; } }), Object.defineProperty(exports, "W", { enumerable: !0, get: function () { return d; } }), Object.defineProperty(exports, "_", { enumerable: !0, get: function () { return Qe; } }), Object.defineProperty(exports, "a", { enumerable: !0, get: function () { return lr; } }), Object.defineProperty(exports, "b", { enumerable: !0, get: function () { return Ze; } }), Object.defineProperty(exports, "c", { enumerable: !0, get: function () { return fn; } }), Object.defineProperty(exports, "d", { enumerable: !0, get: function () { return G; } }), Object.defineProperty(exports, "f", { enumerable: !0, get: function () { return Nt; } }), Object.defineProperty(exports, "g", { enumerable: !0, get: function () { return tt; } }), Object.defineProperty(exports, "h", { enumerable: !0, get: function () { return et; } }), Object.defineProperty(exports, "i", { enumerable: !0, get: function () { return $; } }), Object.defineProperty(exports, "j", { enumerable: !0, get: function () { return Ie; } }), Object.defineProperty(exports, "k", { enumerable: !0, get: function () { return Re; } }), Object.defineProperty(exports, "l", { enumerable: !0, get: function () { return J; } }), Object.defineProperty(exports, "m", { enumerable: !0, get: function () { return W; } }), Object.defineProperty(exports, "n", { enumerable: !0, get: function () { return _r; } }), Object.defineProperty(exports, "o", { enumerable: !0, get: function () { return ur; } }), Object.defineProperty(exports, "p", { enumerable: !0, get: function () { return U; } }), Object.defineProperty(exports, "r", { enumerable: !0, get: function () { return Q; } }), Object.defineProperty(exports, "s", { enumerable: !0, get: function () { return Y; } }), Object.defineProperty(exports, "t", { enumerable: !0, get: function () { return gr; } }), Object.defineProperty(exports, "u", { enumerable: !0, get: function () { return on; } }), Object.defineProperty(exports, "v", { enumerable: !0, get: function () { return $e; } }), Object.defineProperty(exports, "w", { enumerable: !0, get: function () { return Ke; } }), Object.defineProperty(exports, "x", { enumerable: !0, get: function () { return k; } }), Object.defineProperty(exports, "y", { enumerable: !0, get: function () { return Xe; } }), Object.defineProperty(exports, "z", { enumerable: !0, get: function () { return re; } });
