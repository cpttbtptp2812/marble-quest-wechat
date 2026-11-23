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
var e = require("./rolldown-runtime-8PkXcCTM.js"), t = require("./sapling-engine-OS5i6gdH.js"), n = require("./sapling-engine-Dk_0uYx9.js"), r = require("./sapling-engine-BKSSueUl.js"), i = require("./sapling-engine-sX7qVz9U.js"), a = require("./sapling-engine-6sEQUsKX.js");
function o() { return (o = e.n((function () { n.Y(), a.H(), a.B(), a.R(), i.xt(), i.dt(), i.lt(), i.st(), i.at(), n.J.add(a.V, a.z, a.L, i.ot, i.ct, i.ut, i.bt); })))(); }
function s(e, t, n) { var r = 2166136261; for (var n_1 = 0; n_1 < t; n_1++)
    r ^= e[n_1].uid, r = Math.imul(r, 16777619), r >>>= 0; return l[r] || c(e, t, r, n); }
function c(e, t, n, r) { var o = {}, s = 0; for (var n_2 = 0; n_2 < r; n_2++) {
    var r_1 = n_2 < t ? e[n_2] : i.gt.EMPTY.source;
    o[s++] = r_1.source, o[s++] = r_1.style;
} var c = new a.k(o); return l[n] = c, c; }
var l;
function u() { return (u = e.n((function () { a.A(), i._t(), l = {}; })))(); }
function d(e) {
    var t = "";
    for (var n_3 = 0; n_3 < e; ++n_3)
        n_3 > 0 && (t += "\nelse "), n_3 < e - 1 && (t += "if(test == ".concat(n_3, ".0){}"));
    return t;
}
function f(e, t) { if (e === 0)
    throw Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`"); var n = t.createShader(t.FRAGMENT_SHADER); try {
    for (;;) {
        var r_2 = p.replace(/%forloop%/gi, d(e));
        if (t.shaderSource(n, r_2), t.compileShader(n), !t.getShaderParameter(n, t.COMPILE_STATUS))
            e = e / 2 | 0;
        else
            break;
    }
}
finally {
    t.deleteShader(n);
} return e; }
var p;
function m() {
    return (m = e.n((function () {
        p = "precision mediump float;\nvoid main(void){\nfloat test = 0.1;\n%forloop%\ngl_FragColor = vec4(0.0);\n}";
    })))();
}
function h() { var e; if (g)
    return g; var t = a.F(); return g = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS), g = f(g, t), (e = t.getExtension("WEBGL_lose_context")) == null || e.loseContext(), g; }
var g;
function _() { return (_ = e.n((function () { a.I(), m(), g = null; })))(); }
var v;
function y() { return (y = e.n((function () { v = (function () {
    function v() {
        this.ids = Object.create(null), this.textures = [], this.count = 0;
    }
    v.prototype.clear = function () { for (var e_1 = 0; e_1 < this.count; e_1++) {
        var t_1 = this.textures[e_1];
        this.textures[e_1] = null, this.ids[t_1.uid] = null;
    } this.count = 0; };
    return v;
}()); })))(); }
function b() { return w > 0 ? C[--w] : new S; }
function x(e) { e.elements = null, C[w++] = e; }
var S, C, w, T, E, ee;
function te() { return (te = e.n((function () { r.Y(), r.m(), r.W(), r.I(), i.L(), _(), y(), t.o(), S = (function () {
    function S() {
        this.renderPipeId = "batch", this.action = "startBatch", this.start = 0, this.size = 0, this.textures = new v, this.blendMode = "normal", this.topology = "triangle-strip", this.canBundle = !0;
    }
    S.prototype.destroy = function () { this.textures = null, this.gpuBindGroup = null, this.bindGroup = null, this.batcher = null, this.elements = null; };
    return S;
}()), C = [], w = 0, r.F.register({ clear: function () { if (C.length > 0)
        for (var _i = 0, C_1 = C; _i < C_1.length; _i++) {
            var e_2 = C_1[_i];
            e_2 && e_2.destroy();
        } C.length = 0, w = 0; } }), T = 0, E = (function () {
    function e(n) {
        this.uid = r.X("batcher"), this.dirty = !0, this.batchIndex = 0, this.batches = [], this._elements = [], n = t.a(t.a({}, e.defaultOptions), n), n.maxTextures || (r.U("v8.8.0", "maxTextures is a required option for Batcher now, please pass it in the options"), n.maxTextures = h());
        var i = n.maxTextures, a = n.attributesInitialSize, o = n.indicesInitialSize;
        this.attributeBuffer = new r.p(a * 4), this.indexBuffer = new Uint16Array(o), this.maxTextures = i;
    }
    e.prototype.begin = function () { this.elementSize = 0, this.elementStart = 0, this.indexSize = 0, this.attributeSize = 0; for (var e_3 = 0; e_3 < this.batchIndex; e_3++)
        x(this.batches[e_3]); this.batchIndex = 0, this._batchIndexStart = 0, this._batchIndexSize = 0, this.dirty = !0; };
    e.prototype.add = function (e) { this._elements[this.elementSize++] = e, e._indexStart = this.indexSize, e._attributeStart = this.attributeSize, e._batcher = this, this.indexSize += e.indexSize, this.attributeSize += e.attributeSize * this.vertexSize; };
    e.prototype.checkAndUpdateTexture = function (e, t) { var n = e._batch.textures.ids[t._source.uid]; return !n && n !== 0 ? !1 : (e._textureId = n, e.texture = t, !0); };
    e.prototype.updateElement = function (e) { this.dirty = !0; var t = this.attributeBuffer; e.packAsQuad ? this.packQuadAttributes(e, t.float32View, t.uint32View, e._attributeStart, e._textureId) : this.packAttributes(e, t.float32View, t.uint32View, e._attributeStart, e._textureId); };
    e.prototype.break = function (e) { var t = this._elements; if (!t[this.elementStart])
        return; var n = b(), r = n.textures; r.clear(); var a = t[this.elementStart], o = i.I(a.blendMode, a.texture._source), s = a.topology; this.attributeSize * 4 > this.attributeBuffer.size && this._resizeAttributeBuffer(this.attributeSize * 4), this.indexSize > this.indexBuffer.length && this._resizeIndexBuffer(this.indexSize); var c = this.attributeBuffer.float32View, l = this.attributeBuffer.uint32View, u = this.indexBuffer, d = this._batchIndexSize, f = this._batchIndexStart, p = "startBatch", m = [], h = this.maxTextures; for (var a_1 = this.elementStart; a_1 < this.elementSize; ++a_1) {
        var g_1 = t[a_1];
        t[a_1] = null;
        var _1 = g_1.texture._source, v_1 = i.I(g_1.blendMode, _1), y_1 = o !== v_1 || s !== g_1.topology;
        _1._batchTick === T && !y_1 ? (g_1._textureId = _1._textureBindLocation, d += g_1.indexSize, g_1.packAsQuad ? (this.packQuadAttributes(g_1, c, l, g_1._attributeStart, g_1._textureId), this.packQuadIndex(u, g_1._indexStart, g_1._attributeStart / this.vertexSize)) : (this.packAttributes(g_1, c, l, g_1._attributeStart, g_1._textureId), this.packIndex(g_1, u, g_1._indexStart, g_1._attributeStart / this.vertexSize)), g_1._batch = n, m.push(g_1)) : (_1._batchTick = T, (r.count >= h || y_1) && (this._finishBatch(n, f, d - f, r, o, s, e, p, m), p = "renderBatch", f = d, o = v_1, s = g_1.topology, n = b(), r = n.textures, r.clear(), m = [], ++T), g_1._textureId = _1._textureBindLocation = r.count, r.ids[_1.uid] = r.count, r.textures[r.count++] = _1, g_1._batch = n, m.push(g_1), d += g_1.indexSize, g_1.packAsQuad ? (this.packQuadAttributes(g_1, c, l, g_1._attributeStart, g_1._textureId), this.packQuadIndex(u, g_1._indexStart, g_1._attributeStart / this.vertexSize)) : (this.packAttributes(g_1, c, l, g_1._attributeStart, g_1._textureId), this.packIndex(g_1, u, g_1._indexStart, g_1._attributeStart / this.vertexSize)));
    } r.count > 0 && (this._finishBatch(n, f, d - f, r, o, s, e, p, m), f = d, ++T), this.elementStart = this.elementSize, this._batchIndexStart = f, this._batchIndexSize = d; };
    e.prototype._finishBatch = function (e, t, n, r, i, a, o, s, c) { e.gpuBindGroup = null, e.bindGroup = null, e.action = s, e.batcher = this, e.textures = r, e.blendMode = i, e.topology = a, e.start = t, e.size = n, e.elements = c, ++T, this.batches[this.batchIndex++] = e, o.add(e); };
    e.prototype.finish = function (e) { this.break(e); };
    e.prototype.ensureAttributeBuffer = function (e) { e * 4 <= this.attributeBuffer.size || this._resizeAttributeBuffer(e * 4); };
    e.prototype.ensureIndexBuffer = function (e) { e <= this.indexBuffer.length || this._resizeIndexBuffer(e); };
    e.prototype._resizeAttributeBuffer = function (e) { var t = Math.max(e, this.attributeBuffer.size * 2), n = new r.p(t); i.B(this.attributeBuffer.rawBinaryData, n.rawBinaryData), this.attributeBuffer = n; };
    e.prototype._resizeIndexBuffer = function (e) { var t = this.indexBuffer, n = Math.max(e, t.length * 1.5); n += n % 2; var r = n > 65535 ? new Uint32Array(n) : new Uint16Array(n); if (r.BYTES_PER_ELEMENT !== t.BYTES_PER_ELEMENT)
        for (var e_4 = 0; e_4 < t.length; e_4++)
            r[e_4] = t[e_4];
    else
        i.B(t.buffer, r.buffer); this.indexBuffer = r; };
    e.prototype.packQuadIndex = function (e, t, n) { e[t] = n + 0, e[t + 1] = n + 1, e[t + 2] = n + 2, e[t + 3] = n + 0, e[t + 4] = n + 2, e[t + 5] = n + 3; };
    e.prototype.packIndex = function (e, t, n, r) { var i = e.indices, a = e.indexSize, o = e.indexOffset, s = e.attributeOffset; for (var e_5 = 0; e_5 < a; e_5++)
        t[n++] = r + i[e_5 + o] - s; };
    e.prototype.destroy = function (e) {
        if (e === void 0) { e = {}; }
        if (this.batches !== null) {
            for (var e_6 = 0; e_6 < this.batchIndex; e_6++)
                x(this.batches[e_6]);
            if (this.batches = null, this.geometry.destroy(!0), this.geometry = null, e.shader) {
                var t;
                (t = this.shader) == null || t.destroy(), this.shader = null;
            }
            for (var e_7 = 0; e_7 < this._elements.length; e_7++)
                this._elements[e_7] && (this._elements[e_7]._batch = null);
            this._elements = null, this.indexBuffer = null, this.attributeBuffer.destroy(), this.attributeBuffer = null;
        }
    };
    return e;
}()), E.defaultOptions = { maxTextures: null, attributesInitialSize: 4, indicesInitialSize: 6 }, ee = E; })))(); }
var ne, re, ie;
function ae() { return (ae = e.n((function () { i.N(), i.F(), i.j(), ne = new Float32Array(1), re = new Uint32Array(1), ie = (function (_super) {
    __extends(ie, _super);
    function ie() {
        var e = new i.M({ data: ne, label: "attribute-batch-buffer", usage: i.P.VERTEX | i.P.COPY_DST, shrinkToFit: !1 }), t = new i.M({ data: re, label: "index-batch-buffer", usage: i.P.INDEX | i.P.COPY_DST, shrinkToFit: !1 });
        return _super.call(this, { attributes: { aPosition: { buffer: e, format: "float32x2", stride: 24, offset: 0 }, aUV: { buffer: e, format: "float32x2", stride: 24, offset: 8 }, aColor: { buffer: e, format: "unorm8x4", stride: 24, offset: 16 }, aTextureIdAndRound: { buffer: e, format: "uint16x2", stride: 24, offset: 20 } }, indexBuffer: t }) || this;
    }
    return ie;
}(i.A)); })))(); }
function oe(e, t, n) { if (e)
    for (var i_1 in e) {
        var a_2 = t[i_1.toLocaleLowerCase()];
        if (a_2) {
            var t_2 = e[i_1];
            i_1 === "header" && (t_2 = t_2.replace(/@in\s+[^;]+;\s*/g, "").replace(/@out\s+[^;]+;\s*/g, "")), n && a_2.push("//----".concat(n, "----//")), a_2.push(t_2);
        }
        else
            r.R("".concat(i_1, " placement hook does not exist in shader"));
    } }
function se() { return (se = e.n((function () { r.L(); })))(); }
function ce(e) { var t, n; var r = {}; return ((t = (n = e.match(le)) == null ? void 0 : n.map(function (e) { return e.replace(/[{()}]/g, ""); })) == null ? [] : t).forEach(function (e) { r[e] = []; }), r; }
var le;
function ue() { return (ue = e.n((function () { le = /\{\{(.*?)\}\}/g; })))(); }
function de(e, t) { var n, r = /@in\s+([^;]+);/g; for (; (n = r.exec(e)) !== null;)
    t.push(n[1]); }
function fe(e, t, n) {
    if (n === void 0) { n = !1; }
    var r = [];
    de(t, r), e.forEach(function (e) { e.header && de(e.header, r); });
    var i = r;
    n && i.sort();
    var a = i.map(function (e, t) { return "       @location(".concat(t, ") ").concat(e, ","); }).join("\n"), o = t.replace(/@in\s+[^;]+;\s*/g, "");
    return o = o.replace("{{in}}", "\n".concat(a, "\n")), o;
}
function pe(e, t) { var n, r = /@out\s+([^;]+);/g; for (; (n = r.exec(e)) !== null;)
    t.push(n[1]); }
function me(e) { var t = /\b(\w+)\s*:/g.exec(e); return t ? t[1] : ""; }
function he(e) { return e.replace(/@.*?\s+/g, ""); }
function ge(e, t) {
    var n = [];
    pe(t, n), e.forEach(function (e) { e.header && pe(e.header, n); });
    var r = 0, i = n.sort().map(function (e) { return e.indexOf("builtin") > -1 ? e : "@location(".concat(r++, ") ").concat(e); }).join(",\n"), a = n.sort().map(function (e) { return "       var ".concat(he(e), ";"); }).join("\n"), o = "return VSOutput(\n            ".concat(n.sort().map(function (e) { return " ".concat(me(e)); }).join(",\n"), ");"), s = t.replace(/@out\s+[^;]+;\s*/g, "");
    return s = s.replace("{{struct}}", "\n".concat(i, "\n")), s = s.replace("{{start}}", "\n".concat(a, "\n")), s = s.replace("{{return}}", "\n".concat(o, "\n")), s;
}
function _e(e, t) {
    var n = e;
    for (var e_8 in t) {
        var r_3 = t[e_8];
        n = r_3.join("\n").length ? n.replace("{{".concat(e_8, "}}"), "//-----".concat(e_8, " START-----//\n").concat(r_3.join("\n"), "\n//----").concat(e_8, " FINISH----//")) : n.replace("{{".concat(e_8, "}}"), "");
    }
    return n;
}
function ve(_a) {
    var e = _a.template, t = _a.bits;
    var n = D(e, t);
    if (k[n])
        return k[n];
    var _b = be(e, t), r = _b.vertex, i = _b.fragment;
    return k[n] = O(r, i, t), k[n];
}
function ye(_a) {
    var e = _a.template, t = _a.bits;
    var n = D(e, t);
    return k[n] || (k[n] = O(e.vertex, e.fragment, t)), k[n];
}
function be(e, t) { var n = t.map(function (e) { return e.vertex; }).filter(function (e) { return !!e; }), r = t.map(function (e) { return e.fragment; }).filter(function (e) { return !!e; }), i = fe(n, e.vertex, !0); i = ge(n, i); var a = fe(r, e.fragment, !0); return { vertex: i, fragment: a }; }
function D(e, t) { return t.map(function (e) { return (A.has(e) || A.set(e, j++), A.get(e)); }).sort(function (e, t) { return e - t; }).join("-") + e.vertex + e.fragment; }
function O(e, t, n) { var r = ce(e), i = ce(t); return n.forEach(function (e) { oe(e.vertex, r, e.name), oe(e.fragment, i, e.name); }), { vertex: _e(e, r), fragment: _e(t, i) }; }
var k, A, j;
function M() { return (M = e.n((function () { se(), ue(), k = Object.create(null), A = new Map, j = 0; })))(); }
var N, P, xe, Se;
function Ce() {
    return (Ce = e.n((function () {
        N = "\n    @in aPosition: vec2<f32>;\n    @in aUV: vec2<f32>;\n\n    @out @builtin(position) vPosition: vec4<f32>;\n    @out vUV : vec2<f32>;\n    @out vColor : vec4<f32>;\n\n    {{header}}\n\n    struct VSOutput {\n        {{struct}}\n    };\n\n    @vertex\n    fn main( {{in}} ) -> VSOutput {\n\n        var worldTransformMatrix = globalUniforms.uWorldTransformMatrix;\n        var modelMatrix = mat3x3<f32>(\n            1.0, 0.0, 0.0,\n            0.0, 1.0, 0.0,\n            0.0, 0.0, 1.0\n          );\n        var position = aPosition;\n        var uv = aUV;\n\n        {{start}}\n\n        vColor = vec4<f32>(1., 1., 1., 1.);\n\n        {{main}}\n\n        vUV = uv;\n\n        var modelViewProjectionMatrix = globalUniforms.uProjectionMatrix * worldTransformMatrix * modelMatrix;\n\n        vPosition =  vec4<f32>((modelViewProjectionMatrix *  vec3<f32>(position, 1.0)).xy, 0.0, 1.0);\n\n        vColor *= globalUniforms.uWorldColorAlpha;\n\n        {{end}}\n\n        {{return}}\n    };\n", P = "\n    @in vUV : vec2<f32>;\n    @in vColor : vec4<f32>;\n\n    {{header}}\n\n    @fragment\n    fn main(\n        {{in}}\n      ) -> @location(0) vec4<f32> {\n\n        {{start}}\n\n        var outColor:vec4<f32>;\n\n        {{main}}\n\n        var finalColor:vec4<f32> = outColor * vColor;\n\n        {{end}}\n\n        return finalColor;\n      };\n", xe = "\n    in vec2 aPosition;\n    in vec2 aUV;\n\n    out vec4 vColor;\n    out vec2 vUV;\n\n    {{header}}\n\n    void main(void){\n\n        mat3 worldTransformMatrix = uWorldTransformMatrix;\n        mat3 modelMatrix = mat3(\n            1.0, 0.0, 0.0,\n            0.0, 1.0, 0.0,\n            0.0, 0.0, 1.0\n          );\n        vec2 position = aPosition;\n        vec2 uv = aUV;\n\n        {{start}}\n\n        vColor = vec4(1.);\n\n        {{main}}\n\n        vUV = uv;\n\n        mat3 modelViewProjectionMatrix = uProjectionMatrix * worldTransformMatrix * modelMatrix;\n\n        gl_Position = vec4((modelViewProjectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n\n        vColor *= uWorldColorAlpha;\n\n        {{end}}\n    }\n", Se = "\n\n    in vec4 vColor;\n    in vec2 vUV;\n\n    out vec4 finalColor;\n\n    {{header}}\n\n    void main(void) {\n\n        {{start}}\n\n        vec4 outColor;\n\n        {{main}}\n\n        finalColor = outColor * vColor;\n\n        {{end}}\n    }\n";
    })))();
}
var we, Te;
function F() {
    return (F = e.n((function () {
        we = { name: "global-uniforms-bit", vertex: { header: "\n        struct GlobalUniforms {\n            uProjectionMatrix:mat3x3<f32>,\n            uWorldTransformMatrix:mat3x3<f32>,\n            uWorldColorAlpha: vec4<f32>,\n            uResolution: vec2<f32>,\n        }\n\n        @group(0) @binding(0) var<uniform> globalUniforms : GlobalUniforms;\n        " } }, Te = { name: "global-uniforms-bit", vertex: { header: "\n          uniform mat3 uProjectionMatrix;\n          uniform mat3 uWorldTransformMatrix;\n          uniform vec4 uWorldColorAlpha;\n          uniform vec2 uResolution;\n        " } };
    })))();
}
function Ee(_a) {
    var e = _a.bits, t = _a.name;
    var n = ve({ template: { fragment: P, vertex: N }, bits: __spreadArray([we], e, true) });
    return a.j.from({ name: t, vertex: { source: n.vertex, entryPoint: "main" }, fragment: { source: n.fragment, entryPoint: "main" } });
}
function De(_a) {
    var e = _a.bits, n = _a.name;
    return new a.N(t.a({ name: n }, ye({ template: { vertex: xe, fragment: Se }, bits: __spreadArray([Te], e, true) })));
}
function I() { return (I = e.n((function () { a.P(), a.M(), M(), Ce(), F(), t.o(); })))(); }
var Oe, L;
function R() {
    return (R = e.n((function () {
        Oe = { name: "color-bit", vertex: { header: "\n            @in aColor: vec4<f32>;\n        ", main: "\n            vColor *= vec4<f32>(aColor.rgb * aColor.a, aColor.a);\n        " } }, L = { name: "color-bit", vertex: { header: "\n            in vec4 aColor;\n        ", main: "\n            vColor *= vec4(aColor.rgb * aColor.a, aColor.a);\n        " } };
    })))();
}
function ke(e) {
    var t = [];
    if (e === 1)
        t.push("@group(1) @binding(0) var textureSource1: texture_2d<f32>;"), t.push("@group(1) @binding(1) var textureSampler1: sampler;");
    else {
        var n_4 = 0;
        for (var r_4 = 0; r_4 < e; r_4++)
            t.push("@group(1) @binding(".concat(n_4++, ") var textureSource").concat(r_4 + 1, ": texture_2d<f32>;")), t.push("@group(1) @binding(".concat(n_4++, ") var textureSampler").concat(r_4 + 1, ": sampler;"));
    }
    return t.join("\n");
}
function Ae(e) {
    var t = [];
    if (e === 1)
        t.push("outColor = textureSampleGrad(textureSource1, textureSampler1, vUV, uvDx, uvDy);");
    else {
        t.push("switch vTextureId {");
        for (var n_5 = 0; n_5 < e; n_5++)
            n_5 === e - 1 ? t.push("  default:{") : t.push("  case ".concat(n_5, ":{")), t.push("      outColor = textureSampleGrad(textureSource".concat(n_5 + 1, ", textureSampler").concat(n_5 + 1, ", vUV, uvDx, uvDy);")), t.push("      break;}");
        t.push("}");
    }
    return t.join("\n");
}
function je(e) {
    return z[e] || (z[e] = { name: "texture-batch-bit", vertex: { header: "\n                @in aTextureIdAndRound: vec2<u32>;\n                @out @interpolate(flat) vTextureId : u32;\n            ", main: "\n                vTextureId = aTextureIdAndRound.y;\n            ", end: "\n                if(aTextureIdAndRound.x == 1)\n                {\n                    vPosition = vec4<f32>(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);\n                }\n            " }, fragment: { header: "\n                @in @interpolate(flat) vTextureId: u32;\n\n                ".concat(ke(e), "\n            "), main: "\n                var uvDx = dpdx(vUV);\n                var uvDy = dpdy(vUV);\n\n                ".concat(Ae(e), "\n            ") } }), z[e];
}
function Me(e) {
    var t = [];
    for (var n_6 = 0; n_6 < e; n_6++)
        n_6 > 0 && t.push("else"), n_6 < e - 1 && t.push("if(vTextureId < ".concat(n_6, ".5)")), t.push("{"), t.push("\toutColor = texture(uTextures[".concat(n_6, "], vUV);")), t.push("}");
    return t.join("\n");
}
function Ne(e) {
    return B[e] || (B[e] = { name: "texture-batch-bit", vertex: { header: "\n                in vec2 aTextureIdAndRound;\n                out float vTextureId;\n\n            ", main: "\n                vTextureId = aTextureIdAndRound.y;\n            ", end: "\n                if(aTextureIdAndRound.x == 1.)\n                {\n                    gl_Position.xy = roundPixels(gl_Position.xy, uResolution);\n                }\n            " }, fragment: { header: "\n                in float vTextureId;\n\n                uniform sampler2D uTextures[".concat(e, "];\n\n            "), main: "\n\n                ".concat(Me(e), "\n            ") } }), B[e];
}
var z, B;
function V() { return (V = e.n((function () { z = {}, B = {}; })))(); }
var Pe, H;
function U() {
    return (U = e.n((function () {
        Pe = { name: "round-pixels-bit", vertex: { header: "\n            fn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32>\n            {\n                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;\n            }\n        " } }, H = { name: "round-pixels-bit", vertex: { header: "\n            vec2 roundPixels(vec2 position, vec2 targetSize)\n            {\n                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;\n            }\n        " } };
    })))();
}
var W;
function Fe() { return (Fe = e.n((function () { I(), R(), V(), U(), a.E(), i.J(), W = (function (_super) {
    __extends(W, _super);
    function W(e) {
        var _this = this;
        var t = De({ name: "batch", bits: [L, Ne(e), H] }), n = Ee({ name: "batch", bits: [Oe, je(e), Pe] });
        _this = _super.call(this, { glProgram: t, gpuProgram: n, resources: { batchSamplers: a.T(e) } }) || this, _this.maxTextures = e;
        return _this;
    }
    return W;
}(i.q)); })))(); }
var G, K, q;
function J() { return (J = e.n((function () { n.Y(), te(), ae(), Fe(), G = null, K = (function (_super) {
    __extends(e, _super);
    function e(t) {
        var _this = this;
        _this = _super.call(this, t) || this, _this.geometry = new ie, _this.name = e.extension.name, _this.vertexSize = 6, G != null || (G = new W(t.maxTextures)), _this.shader = G;
        return _this;
    }
    e.prototype.packAttributes = function (e, t, n, r, i) { var a = i << 16 | e.roundPixels & 65535, o = e.transform, s = o.a, c = o.b, l = o.c, u = o.d, d = o.tx, f = o.ty, p = e.positions, m = e.uvs, h = e.color, g = e.attributeOffset, _ = g + e.attributeSize; for (var e_9 = g; e_9 < _; e_9++) {
        var i_2 = e_9 * 2, o_1 = p[i_2], g_2 = p[i_2 + 1];
        t[r++] = s * o_1 + l * g_2 + d, t[r++] = u * g_2 + c * o_1 + f, t[r++] = m[i_2], t[r++] = m[i_2 + 1], n[r++] = h, n[r++] = a;
    } };
    e.prototype.packQuadAttributes = function (e, t, n, r, i) { var a = e.texture, o = e.transform, s = o.a, c = o.b, l = o.c, u = o.d, d = o.tx, f = o.ty, p = e.bounds, m = p.maxX, h = p.minX, g = p.maxY, _ = p.minY, v = a.uvs, y = e.color, b = i << 16 | e.roundPixels & 65535; t[r + 0] = s * h + l * _ + d, t[r + 1] = u * _ + c * h + f, t[r + 2] = v.x0, t[r + 3] = v.y0, n[r + 4] = y, n[r + 5] = b, t[r + 6] = s * m + l * _ + d, t[r + 7] = u * _ + c * m + f, t[r + 8] = v.x1, t[r + 9] = v.y1, n[r + 10] = y, n[r + 11] = b, t[r + 12] = s * m + l * g + d, t[r + 13] = u * g + c * m + f, t[r + 14] = v.x2, t[r + 15] = v.y2, n[r + 16] = y, n[r + 17] = b, t[r + 18] = s * h + l * g + d, t[r + 19] = u * g + c * h + f, t[r + 20] = v.x3, t[r + 21] = v.y3, n[r + 22] = y, n[r + 23] = b; };
    e.prototype._updateMaxTextures = function (e) { this.shader.maxTextures !== e && (G = new W(e), this.shader = G); };
    e.prototype.destroy = function () { this.shader = null, _super.prototype.destroy.call(this); };
    return e;
}(ee)), K.extension = { type: [n.q.Batcher], name: "default" }, q = K; })))(); }
var Y, Ie;
function Le() {
    return (Le = e.n((function () {
        t.o(), Y = { name: "local-uniform-bit", vertex: { header: "\n\n            struct LocalUniforms {\n                uTransformMatrix:mat3x3<f32>,\n                uColor:vec4<f32>,\n                uRound:f32,\n            }\n\n            @group(1) @binding(0) var<uniform> localUniforms : LocalUniforms;\n        ", main: "\n            vColor *= localUniforms.uColor;\n            modelMatrix *= localUniforms.uTransformMatrix;\n        ", end: "\n            if(localUniforms.uRound == 1)\n            {\n                vPosition = vec4(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);\n            }\n        " } }, t.a(t.a({}, Y), {}, { vertex: t.a(t.a({}, Y.vertex), {}, { header: Y.vertex.header.replace("group(1)", "group(2)") }) }), Ie = { name: "local-uniform-bit", vertex: { header: "\n\n            uniform mat3 uTransformMatrix;\n            uniform vec4 uColor;\n            uniform float uRound;\n        ", main: "\n            vColor *= uColor;\n            modelMatrix = uTransformMatrix;\n        ", end: "\n            if(uRound == 1.)\n            {\n                gl_Position.xy = roundPixels(gl_Position.xy, uResolution);\n            }\n        " } };
    })))();
}
var X;
function Re() { return (Re = e.n((function () { n.Y(), i.K(), X = (function () {
    function X() {
        this._tempState = i.G.for2d(), this._didUploadHash = {};
    }
    X.prototype.init = function (e) { e.renderer.runners.contextChange.add(this); };
    X.prototype.contextChange = function () { this._didUploadHash = {}; };
    X.prototype.start = function (e, t, n) { var r = e.renderer, i = this._didUploadHash[n.uid]; r.shader.bind(n, i), i || (this._didUploadHash[n.uid] = !0), r.shader.updateUniformGroup(r.globalUniforms.uniformGroup), r.geometry.bind(t, n.glProgram); };
    X.prototype.execute = function (e, t) { var n = e.renderer; this._tempState.blendMode = t.blendMode, n.state.set(this._tempState); var r = t.textures.textures; for (var e_10 = 0; e_10 < t.textures.count; e_10++)
        n.texture.bind(r[e_10], e_10); n.texture.unbindIntegerTextures(t.textures.count), n.geometry.draw(t.topology, t.size, t.start); };
    return X;
}()), X.extension = { type: [n.q.WebGLPipesAdaptor], name: "batch" }; })))(); }
var Z, Q;
function ze() { return (ze = e.n((function () { n.Y(), i.K(), J(), Z = (function () {
    function e(e, t) {
        var n, r;
        this.state = i.G.for2d(), this._batchersByInstructionSet = Object.create(null), this._activeBatches = Object.create(null), this.renderer = e, this._adaptor = t, (n = (r = this._adaptor).init) == null || n.call(r, this);
    }
    e.getBatcher = function (e, t) { return new this._availableBatchers[e]({ maxTextures: t }); };
    e.prototype.buildStart = function (e) { var t = this._batchersByInstructionSet[e.uid]; t || (t = this._batchersByInstructionSet[e.uid] = Object.create(null), t.default || (t.default = new q({ maxTextures: this.renderer.limits.maxBatchableTextures }))), this._activeBatches = t, this._activeBatch = this._activeBatches.default; for (var e_11 in this._activeBatches)
        this._activeBatches[e_11].begin(); };
    e.prototype.addToBatch = function (t, n) { if (this._activeBatch.name !== t.batcherName) {
        this._activeBatch.break(n);
        var r_5 = this._activeBatches[t.batcherName];
        r_5 || (r_5 = this._activeBatches[t.batcherName] = e.getBatcher(t.batcherName, this.renderer.limits.maxBatchableTextures), r_5.begin()), this._activeBatch = r_5;
    } this._activeBatch.add(t); };
    e.prototype.break = function (e) { this._activeBatch.break(e); };
    e.prototype.buildEnd = function (e) { this._activeBatch.break(e); var t = this._activeBatches; for (var e_12 in t) {
        var n_7 = t[e_12], r_6 = n_7.geometry;
        r_6.indexBuffer.setDataWithSize(n_7.indexBuffer, n_7.indexSize, !0), r_6.buffers[0].setDataWithSize(n_7.attributeBuffer.float32View, n_7.attributeSize, !1);
    } };
    e.prototype.upload = function (e) { var t = this._batchersByInstructionSet[e.uid]; for (var e_13 in t) {
        var n_8 = t[e_13], r_7 = n_8.geometry;
        n_8.dirty && (n_8.dirty = !1, r_7.buffers[0].update(n_8.attributeSize * 4));
    } };
    e.prototype.execute = function (e) { if (e.action === "startBatch") {
        var t_3 = e.batcher, n_9 = t_3.geometry, r_8 = t_3.shader;
        this._adaptor.start(this, n_9, r_8);
    } this._adaptor.execute(this, e); };
    e.prototype.destroyInstructionSet = function (e) { var t = this._batchersByInstructionSet[e.uid]; if (t) {
        for (var e_14 in t)
            t[e_14].destroy();
        delete this._batchersByInstructionSet[e.uid], this._activeBatches === t && (this._activeBatches = Object.create(null), this._activeBatch = null);
    } };
    e.prototype.destroy = function () { this.state = null, this.renderer = null, this._adaptor = null; for (var e_15 in this._activeBatches)
        this._activeBatches[e_15].destroy(); this._activeBatches = null; };
    return e;
}()), Z.extension = { type: [n.q.WebGLPipes, n.q.WebGPUPipes, n.q.CanvasPipes], name: "batch" }, Z._availableBatchers = Object.create(null), Q = Z, n.J.handleByMap(n.q.Batcher, Q._availableBatchers), n.J.add(q); })))(); }
var Be;
function $() {
    return ($ = e.n((function () {
        Be = { name: "texture-bit", vertex: { header: "\n            uniform mat3 uTextureMatrix;\n        ", main: "\n            uv = (uTextureMatrix * vec3(uv, 1.0)).xy;\n        " }, fragment: { header: "\n        uniform sampler2D uTexture;\n\n\n        ", main: "\n            outColor = texture(uTexture, vUV);\n        " } };
    })))();
}
Object.defineProperty(exports, "C", { enumerable: !0, get: function () { return o; } }), Object.defineProperty(exports, "S", { enumerable: !0, get: function () { return u; } }), Object.defineProperty(exports, "_", { enumerable: !0, get: function () { return De; } }), Object.defineProperty(exports, "a", { enumerable: !0, get: function () { return X; } }), Object.defineProperty(exports, "b", { enumerable: !0, get: function () { return m; } }), Object.defineProperty(exports, "c", { enumerable: !0, get: function () { return Ie; } }), Object.defineProperty(exports, "d", { enumerable: !0, get: function () { return U; } }), Object.defineProperty(exports, "f", { enumerable: !0, get: function () { return H; } }), Object.defineProperty(exports, "g", { enumerable: !0, get: function () { return R; } }), Object.defineProperty(exports, "h", { enumerable: !0, get: function () { return L; } }), Object.defineProperty(exports, "i", { enumerable: !0, get: function () { return ze; } }), Object.defineProperty(exports, "l", { enumerable: !0, get: function () { return q; } }), Object.defineProperty(exports, "m", { enumerable: !0, get: function () { return V; } }), Object.defineProperty(exports, "n", { enumerable: !0, get: function () { return Be; } }), Object.defineProperty(exports, "o", { enumerable: !0, get: function () { return Re; } }), Object.defineProperty(exports, "p", { enumerable: !0, get: function () { return Ne; } }), Object.defineProperty(exports, "r", { enumerable: !0, get: function () { return Q; } }), Object.defineProperty(exports, "s", { enumerable: !0, get: function () { return Le; } }), Object.defineProperty(exports, "t", { enumerable: !0, get: function () { return $; } }), Object.defineProperty(exports, "u", { enumerable: !0, get: function () { return J; } }), Object.defineProperty(exports, "v", { enumerable: !0, get: function () { return I; } }), Object.defineProperty(exports, "x", { enumerable: !0, get: function () { return s; } }), Object.defineProperty(exports, "y", { enumerable: !0, get: function () { return f; } });
