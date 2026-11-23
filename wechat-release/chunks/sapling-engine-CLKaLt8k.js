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
(function () { var e = typeof wx < "u"; function t(e, t) { } typeof GameGlobal < "u" && (GameGlobal.__saplingLog = t), e && wx.onError && wx.onError(function (e) { e && e.message, e && e.stack; }); })();
var e = require("./rolldown-runtime-8PkXcCTM.js"), t = require("./nape-physics-tjC3J-kx.js"), n = require("./sapling-engine-BaQMQODF.js"), r = require("./sapling-engine-0ptSNjZs.js"), i = require("./sapling-engine-CudxT9as.js"), a = require("./sapling-engine-D-RMTrWW.js"), o = require("./sapling-engine-BKxInvnL.js"), s = require("./sapling-engine-UgL1Y7P9.js"), c = require("./sapling-engine-BKxfCeCE.js"), l = require("./sapling-engine-CGmSt4Cl.js");
function u(e, t) { var n = r.g(e), i = [], o = null, s = 0, c = 0; for (var e_1 = 0; e_1 < n.length; e_1++) {
    var r_1 = n[e_1], l_1 = r_1[0], u_1 = r_1;
    switch (l_1) {
        case "M":
            s = u_1[1], c = u_1[2], t.moveTo(s, c);
            break;
        case "m":
            s += u_1[1], c += u_1[2], t.moveTo(s, c);
            break;
        case "H":
            s = u_1[1], t.lineTo(s, c);
            break;
        case "h":
            s += u_1[1], t.lineTo(s, c);
            break;
        case "V":
            c = u_1[1], t.lineTo(s, c);
            break;
        case "v":
            c += u_1[1], t.lineTo(s, c);
            break;
        case "L":
            s = u_1[1], c = u_1[2], t.lineTo(s, c);
            break;
        case "l":
            s += u_1[1], c += u_1[2], t.lineTo(s, c);
            break;
        case "C":
            s = u_1[5], c = u_1[6], t.bezierCurveTo(u_1[1], u_1[2], u_1[3], u_1[4], s, c);
            break;
        case "c":
            t.bezierCurveTo(s + u_1[1], c + u_1[2], s + u_1[3], c + u_1[4], s + u_1[5], c + u_1[6]), s += u_1[5], c += u_1[6];
            break;
        case "S":
            s = u_1[3], c = u_1[4], t.bezierCurveToShort(u_1[1], u_1[2], s, c);
            break;
        case "s":
            t.bezierCurveToShort(s + u_1[1], c + u_1[2], s + u_1[3], c + u_1[4]), s += u_1[3], c += u_1[4];
            break;
        case "Q":
            s = u_1[3], c = u_1[4], t.quadraticCurveTo(u_1[1], u_1[2], s, c);
            break;
        case "q":
            t.quadraticCurveTo(s + u_1[1], c + u_1[2], s + u_1[3], c + u_1[4]), s += u_1[3], c += u_1[4];
            break;
        case "T":
            s = u_1[1], c = u_1[2], t.quadraticCurveToShort(s, c);
            break;
        case "t":
            s += u_1[1], c += u_1[2], t.quadraticCurveToShort(s, c);
            break;
        case "A":
            s = u_1[6], c = u_1[7], t.arcToSvg(u_1[1], u_1[2], u_1[3], u_1[4], u_1[5], s, c);
            break;
        case "a":
            s += u_1[6], c += u_1[7], t.arcToSvg(u_1[1], u_1[2], u_1[3], u_1[4], u_1[5], s, c);
            break;
        case "Z":
        case "z":
            t.closePath(), i.length > 0 && (o = i.pop(), o ? (s = o.startX, c = o.startY) : (s = 0, c = 0)), o = null;
            break;
        default: a.R("Unknown SVG path command: ".concat(l_1));
    }
    l_1 !== "Z" && l_1 !== "z" && o === null && (o = { startX: s, startY: c }, i.push(o));
} return t; }
function d() { return (d = e.n((function () { r.h(), a.L(); })))(); }
var f, p;
function m() { return (m = e.n((function () { i.x(), f = new i.b, p = (function () {
    function p() {
        this.packAsQuad = !1, this.batcherName = "default", this.topology = "triangle-list", this.applyTransform = !0, this.roundPixels = 0, this._batcher = null, this._batch = null;
    }
    Object.defineProperty(p.prototype, "uvs", {
        get: function () { return this.geometryData.uvs; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(p.prototype, "positions", {
        get: function () { return this.geometryData.vertices; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(p.prototype, "indices", {
        get: function () { return this.geometryData.indices; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(p.prototype, "blendMode", {
        get: function () { return this.renderable && this.applyTransform ? this.renderable.groupBlendMode : "normal"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(p.prototype, "color", {
        get: function () { var e = this.baseColor, t = e >> 16 | e & 65280 | (e & 255) << 16, n = this.renderable; return n ? s.T(t, n.groupColor) + (this.alpha * n.groupAlpha * 255 << 24) : t + (this.alpha * 255 << 24); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(p.prototype, "transform", {
        get: function () { var e; return ((e = this.renderable) == null ? void 0 : e.groupTransform) || f; },
        enumerable: false,
        configurable: true
    });
    p.prototype.copyTo = function (e) { e.indexOffset = this.indexOffset, e.indexSize = this.indexSize, e.attributeOffset = this.attributeOffset, e.attributeSize = this.attributeSize, e.baseColor = this.baseColor, e.alpha = this.alpha, e.texture = this.texture, e.geometryData = this.geometryData, e.topology = this.topology; };
    p.prototype.reset = function () { this.applyTransform = !0, this.renderable = null, this.topology = "triangle-list"; };
    p.prototype.destroy = function () { this.renderable = null, this.texture = null, this.geometryData = null, this._batcher = null, this._batch = null; };
    return p;
}()); })))(); }
var h, g, _;
function v() { return (v = e.n((function () { r.q(), t.br(), h = { extension: { type: r.G.ShapeBuilder, name: "circle" }, build: function (e, t) { var n, r, i, a, o, s; if (e.type === "circle") {
        var t_1 = e;
        if (o = s = t_1.radius, o <= 0)
            return !1;
        n = t_1.x, r = t_1.y, i = a = 0;
    }
    else if (e.type === "ellipse") {
        var t_2 = e;
        if (o = t_2.halfWidth, s = t_2.halfHeight, o <= 0 || s <= 0)
            return !1;
        n = t_2.x, r = t_2.y, i = a = 0;
    }
    else {
        var t_3 = e, c_1 = t_3.width / 2, l_2 = t_3.height / 2;
        n = t_3.x + c_1, r = t_3.y + l_2, o = s = Math.max(0, Math.min(t_3.radius, Math.min(c_1, l_2))), i = c_1 - o, a = l_2 - s;
    } if (i < 0 || a < 0)
        return !1; var c = Math.ceil(2.3 * Math.sqrt(o + s)), l = c * 8 + (i ? 4 : 0) + (a ? 4 : 0); if (l === 0)
        return !1; if (c === 0)
        return t[0] = t[6] = n + i, t[1] = t[3] = r + a, t[2] = t[4] = n - i, t[5] = t[7] = r - a, !0; var u = 0, d = c * 4 + (i ? 2 : 0) + 2, f = d, p = l, m = i + o, h = a, g = n + m, _ = n - m, v = r + h; if (t[u++] = g, t[u++] = v, t[--d] = v, t[--d] = _, a) {
        var e_2 = r - h;
        t[f++] = _, t[f++] = e_2, t[--p] = e_2, t[--p] = g;
    } for (var e_3 = 1; e_3 < c; e_3++) {
        var l_3 = Math.PI / 2 * (e_3 / c), m_1 = i + Math.cos(l_3) * o, h_1 = a + Math.sin(l_3) * s, g_1 = n + m_1, _1 = n - m_1, v_1 = r + h_1, y_1 = r - h_1;
        t[u++] = g_1, t[u++] = v_1, t[--d] = v_1, t[--d] = _1, t[f++] = _1, t[f++] = y_1, t[--p] = y_1, t[--p] = g_1;
    } m = i, h = a + s, g = n + m, _ = n - m, v = r + h; var y = r - h; return t[u++] = g, t[u++] = v, t[--p] = y, t[--p] = g, i && (t[u++] = _, t[u++] = v, t[--p] = y, t[--p] = _), !0; }, triangulate: function (e, t, n, r, i, a) { if (e.length === 0)
        return; var o = 0, s = 0; for (var t_4 = 0; t_4 < e.length; t_4 += 2)
        o += e[t_4], s += e[t_4 + 1]; o /= e.length / 2, s /= e.length / 2; var c = r; t[c * n] = o, t[c * n + 1] = s; var l = c++; for (var r_2 = 0; r_2 < e.length; r_2 += 2)
        t[c * n] = e[r_2], t[c * n + 1] = e[r_2 + 1], r_2 > 0 && (i[a++] = c, i[a++] = l, i[a++] = c - 1), c++; i[a++] = l + 1, i[a++] = l, i[a++] = c - 1; } }, g = t.yr(t.yr({}, h), {}, { extension: t.yr(t.yr({}, h.extension), {}, { name: "ellipse" }) }), _ = t.yr(t.yr({}, h), {}, { extension: t.yr(t.yr({}, h.extension), {}, { name: "roundedRectangle" }) }); })))(); }
var y, b;
function x() { return (x = e.n((function () { y = 1e-4, b = 1e-4; })))(); }
function S(e, t, n, r, i, a, o, s) { var c = e - n * i, l = t - r * i, u = e + n * a, d = t + r * a, f, p; o ? (f = r, p = -n) : (f = -r, p = n); var m = c + f, h = l + p, g = u + f, _ = d + p; return s.push(m, h), s.push(g, _), 2; }
function C(e, t, n, r, i, a, o, s) { var c = n - e, l = r - t, u = Math.atan2(c, l), d = Math.atan2(i - e, a - t); s && u < d ? u += Math.PI * 2 : !s && u > d && (d += Math.PI * 2); var f = u, p = d - u, m = Math.abs(p), h = Math.sqrt(c * c + l * l), g = (15 * m * Math.sqrt(h) / Math.PI | 0) + 1, _ = p / g; if (f += _, s) {
    o.push(e, t), o.push(n, r);
    for (var n_1 = 1, r_3 = f; n_1 < g; n_1++, r_3 += _)
        o.push(e, t), o.push(e + Math.sin(r_3) * h, t + Math.cos(r_3) * h);
    o.push(e, t), o.push(i, a);
}
else {
    o.push(n, r), o.push(e, t);
    for (var n_2 = 1, r_4 = f; n_2 < g; n_2++, r_4 += _)
        o.push(e + Math.sin(r_4) * h, t + Math.cos(r_4) * h), o.push(e, t);
    o.push(i, a), o.push(e, t);
} return g * 2; }
function w(e, t, n, r, a, o) { var s = y; if (e.length === 0)
    return; var c = t, l = c.alignment; if (t.alignment !== .5) {
    var t_5 = i.s(e);
    n && (t_5 *= -1), l = (l - .5) * t_5 + .5;
} var u = new i.S(e[0], e[1]), d = new i.S(e[e.length - 2], e[e.length - 1]), f = r, p = Math.abs(u.x - d.x) < s && Math.abs(u.y - d.y) < s; if (f) {
    e = e.slice(), p && (e.pop(), e.pop(), d.set(e[e.length - 2], e[e.length - 1]));
    var t_6 = (u.x + d.x) * .5, n_3 = (d.y + u.y) * .5;
    e.unshift(t_6, n_3), e.push(t_6, n_3);
} var m = a, h = e.length / 2, g = e.length, _ = m.length / 2, v = c.width / 2, x = v * v, w = c.miterLimit * c.miterLimit, T = e[0], E = e[1], D = e[2], O = e[3], k = 0, A = 0, j = -(E - O), M = T - D, N = 0, P = 0, F = Math.sqrt(j * j + M * M); j /= F, M /= F, j *= v, M *= v; var I = l, L = (1 - I) * 2, R = I * 2; f || (c.cap === "round" ? g += C(T - j * (L - R) * .5, E - M * (L - R) * .5, T - j * L, E - M * L, T + j * R, E + M * R, m, !0) + 2 : c.cap === "square" && (g += S(T, E, j, M, L, R, !0, m))), m.push(T - j * L, E - M * L), m.push(T + j * R, E + M * R); for (var t_7 = 1; t_7 < h - 1; ++t_7) {
    T = e[(t_7 - 1) * 2], E = e[(t_7 - 1) * 2 + 1], D = e[t_7 * 2], O = e[t_7 * 2 + 1], k = e[(t_7 + 1) * 2], A = e[(t_7 + 1) * 2 + 1], j = -(E - O), M = T - D, F = Math.sqrt(j * j + M * M), j /= F, M /= F, j *= v, M *= v, N = -(O - A), P = D - k, F = Math.sqrt(N * N + P * P), N /= F, P /= F, N *= v, P *= v;
    var n_4 = D - T, r_5 = E - O, i_1 = D - k, a_1 = A - O, o_1 = n_4 * i_1 + r_5 * a_1, s_1 = r_5 * i_1 - a_1 * n_4, l_4 = s_1 < 0;
    if (Math.abs(s_1) < .001 * Math.abs(o_1)) {
        m.push(D - j * L, O - M * L), m.push(D + j * R, O + M * R), o_1 >= 0 && (c.join === "round" ? g += C(D, O, D - j * L, O - M * L, D - N * L, O - P * L, m, !1) + 4 : g += 2, m.push(D - N * R, O - P * R), m.push(D + N * L, O + P * L));
        continue;
    }
    var u_2 = (-j + T) * (-M + O) - (-j + D) * (-M + E), d_1 = (-N + k) * (-P + O) - (-N + D) * (-P + A), f_1 = (n_4 * d_1 - i_1 * u_2) / s_1, p_1 = (a_1 * u_2 - r_5 * d_1) / s_1, h_2 = (f_1 - D) * (f_1 - D) + (p_1 - O) * (p_1 - O), _2 = D + (f_1 - D) * L, y_2 = O + (p_1 - O) * L, b_1 = D - (f_1 - D) * R, S_1 = O - (p_1 - O) * R, I_1 = Math.min(n_4 * n_4 + r_5 * r_5, i_1 * i_1 + a_1 * a_1), ee_1 = l_4 ? L : R;
    h_2 <= I_1 + ee_1 * ee_1 * x ? c.join === "bevel" || h_2 / x > w ? (l_4 ? (m.push(_2, y_2), m.push(D + j * R, O + M * R), m.push(_2, y_2), m.push(D + N * R, O + P * R)) : (m.push(D - j * L, O - M * L), m.push(b_1, S_1), m.push(D - N * L, O - P * L), m.push(b_1, S_1)), g += 2) : c.join === "round" ? l_4 ? (m.push(_2, y_2), m.push(D + j * R, O + M * R), g += C(D, O, D + j * R, O + M * R, D + N * R, O + P * R, m, !0) + 4, m.push(_2, y_2), m.push(D + N * R, O + P * R)) : (m.push(D - j * L, O - M * L), m.push(b_1, S_1), g += C(D, O, D - j * L, O - M * L, D - N * L, O - P * L, m, !1) + 4, m.push(D - N * L, O - P * L), m.push(b_1, S_1)) : (m.push(_2, y_2), m.push(b_1, S_1)) : (m.push(D - j * L, O - M * L), m.push(D + j * R, O + M * R), c.join === "round" ? g += l_4 ? C(D, O, D + j * R, O + M * R, D + N * R, O + P * R, m, !0) + 2 : C(D, O, D - j * L, O - M * L, D - N * L, O - P * L, m, !1) + 2 : c.join === "miter" && h_2 / x <= w && (l_4 ? (m.push(b_1, S_1), m.push(b_1, S_1)) : (m.push(_2, y_2), m.push(_2, y_2)), g += 2), m.push(D - N * L, O - P * L), m.push(D + N * R, O + P * R), g += 2);
} T = e[(h - 2) * 2], E = e[(h - 2) * 2 + 1], D = e[(h - 1) * 2], O = e[(h - 1) * 2 + 1], j = -(E - O), M = T - D, F = Math.sqrt(j * j + M * M), j /= F, M /= F, j *= v, M *= v, m.push(D - j * L, O - M * L), m.push(D + j * R, O + M * R), f || (c.cap === "round" ? g += C(D - j * (L - R) * .5, O - M * (L - R) * .5, D - j * L, O - M * L, D + j * R, O + M * R, m, !1) + 2 : c.cap === "square" && (g += S(D, O, j, M, L, R, !1, m))); var ee = b * b; for (var e_4 = _; e_4 < g + _ - 2; ++e_4)
    T = m[e_4 * 2], E = m[e_4 * 2 + 1], D = m[(e_4 + 1) * 2], O = m[(e_4 + 1) * 2 + 1], k = m[(e_4 + 2) * 2], A = m[(e_4 + 2) * 2 + 1], Math.abs(T * (O - A) + D * (A - E) + k * (E - O)) < ee || o.push(e_4, e_4 + 1, e_4 + 2); }
function T() { return (T = e.n((function () { i.C(), x(); })))(); }
function E(e, t, n, r) { var i = y; if (e.length === 0)
    return; var a = e[0], o = e[1], s = e[e.length - 2], c = e[e.length - 1], l = t || Math.abs(a - s) < i && Math.abs(o - c) < i, u = n, d = e.length / 2, f = u.length / 2; for (var t_8 = 0; t_8 < d; t_8++)
    u.push(e[t_8 * 2]), u.push(e[t_8 * 2 + 1]); for (var e_5 = 0; e_5 < d - 1; e_5++)
    r.push(f + e_5, f + e_5 + 1); l && r.push(f + d - 1, f); }
function D() { return (D = e.n((function () { x(); })))(); }
function O(e, t, n, r, i, o, s) { var c = a._(e, t, 2); if (!c)
    return; for (var e_6 = 0; e_6 < c.length; e_6 += 3)
    o[s++] = c[e_6] + i, o[s++] = c[e_6 + 1] + i, o[s++] = c[e_6 + 2] + i; var l = i * r; for (var t_9 = 0; t_9 < e.length; t_9 += 2)
    n[l] = e[t_9], n[l + 1] = e[t_9 + 1], l += r; }
function k() { return (k = e.n((function () { a.v(); })))(); }
var A, j;
function M() { return (M = e.n((function () { r.q(), k(), A = [], j = { extension: { type: r.G.ShapeBuilder, name: "polygon" }, build: function (e, t) { for (var n_5 = 0; n_5 < e.points.length; n_5++)
        t[n_5] = e.points[n_5]; return !0; }, triangulate: function (e, t, n, r, i, a) { O(e, A, t, n, r, i, a); } }; })))(); }
var N;
function P() { return (P = e.n((function () { r.q(), N = { extension: { type: r.G.ShapeBuilder, name: "rectangle" }, build: function (e, t) { var n = e, r = n.x, i = n.y, a = n.width, o = n.height; return a > 0 && o > 0 && (t[0] = r, t[1] = i, t[2] = r + a, t[3] = i, t[4] = r + a, t[5] = i + o, t[6] = r, t[7] = i + o, !0); }, triangulate: function (e, t, n, r, i, a) { var o = 0; r *= n, t[r + o] = e[0], t[r + o + 1] = e[1], o += n, t[r + o] = e[2], t[r + o + 1] = e[3], o += n, t[r + o] = e[6], t[r + o + 1] = e[7], o += n, t[r + o] = e[4], t[r + o + 1] = e[5], o += n; var s = r / n; i[a++] = s, i[a++] = s + 1, i[a++] = s + 2, i[a++] = s + 1, i[a++] = s + 3, i[a++] = s + 2; } }; })))(); }
var F;
function I() { return (I = e.n((function () { r.q(), F = { extension: { type: r.G.ShapeBuilder, name: "triangle" }, build: function (e, t) { return t[0] = e.x, t[1] = e.y, t[2] = e.x2, t[3] = e.y2, t[4] = e.x3, t[5] = e.y3, !0; }, triangulate: function (e, t, n, r, i, a) { var o = 0; r *= n, t[r + o] = e[0], t[r + o + 1] = e[1], o += n, t[r + o] = e[2], t[r + o + 1] = e[3], o += n, t[r + o] = e[4], t[r + o + 1] = e[5]; var s = r / n; i[a++] = s, i[a++] = s + 1, i[a++] = s + 2; } }; })))(); }
function L(e, t) { for (var n_6 = 0; n_6 < t.length; n_6++) {
    var r_6 = t[n_6];
    e.addColorStop(r_6.offset, r_6.color);
} }
function R(e, t) { var n = r.N.get().createCanvas(e, t); return { canvas: n, context: n.getContext("2d") }; }
function ee(e) { var t; var n = (t = e[0]) == null ? {} : t; if (typeof n == "number" || e[1]) {
    var r;
    a.U("8.5.2", "use options object instead"), n = { type: "linear", start: { x: e[0], y: e[1] }, end: { x: e[2], y: e[3] }, textureSpace: e[4], textureSize: (r = e[5]) == null ? z.defaultLinearOptions.textureSize : r };
} return n; }
var te, ne, z;
function B() { return (B = e.n((function () { r.B(), r.P(), i.x(), o.lt(), o._t(), a.Y(), a.W(), t.br(), te = [{ offset: 0, color: "white" }, { offset: 1, color: "black" }], ne = (function () {
    function e() {
        var n = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            n[_i] = arguments[_i];
        }
        var _this = this;
        this.uid = a.X("fillGradient"), this._tick = 0, this.type = "linear", this.colorStops = [];
        var r = ee(n), i = r.type === "radial" ? e.defaultRadialOptions : e.defaultLinearOptions;
        if (r = t.yr(t.yr({}, i), s.N(r)), this._textureSize = r.textureSize, this._wrapMode = r.wrapMode, r.type === "radial") {
            var o;
            this.center = r.center, this.outerCenter = (o = r.outerCenter) == null ? this.center : o, this.innerRadius = r.innerRadius, this.outerRadius = r.outerRadius, this.scale = r.scale, this.rotation = r.rotation;
        }
        else
            this.start = r.start, this.end = r.end;
        this.textureSpace = r.textureSpace, this.type = r.type, r.colorStops.forEach(function (e) { _this.addColorStop(e.offset, e.color); });
    }
    e.prototype.addColorStop = function (e, t) { return this.colorStops.push({ offset: e, color: r.z.shared.setValue(t).toHexa() }), this; };
    e.prototype.buildLinearGradient = function () { if (this.texture)
        return; var _a = this.start, e = _a.x, t = _a.y, _b = this.end, n = _b.x, r = _b.y, a = n - e, s = r - t, c = a < 0 || s < 0; if (this._wrapMode === "clamp-to-edge") {
        if (a < 0) {
            var t_10 = e;
            e = n, n = t_10, a *= -1;
        }
        if (s < 0) {
            var e_7 = t;
            t = r, r = e_7, s *= -1;
        }
    } var l = this.colorStops.length ? this.colorStops : te, u = this._textureSize, _c = R(u, 1), d = _c.canvas, f = _c.context, p = c ? f.createLinearGradient(this._textureSize, 0, 0, 0) : f.createLinearGradient(0, 0, this._textureSize, 0); L(p, l), f.fillStyle = p, f.fillRect(0, 0, u, 1), this.texture = new o.gt({ source: new o.ct({ resource: d, addressMode: this._wrapMode }) }); var m = Math.sqrt(a * a + s * s), h = Math.atan2(s, a), g = new i.b; g.scale(m / u, 1), g.rotate(h), g.translate(e, t), this.textureSpace === "local" && g.scale(u, u), this.transform = g; };
    e.prototype.buildGradient = function () { this.texture || this._tick++, this.type === "linear" ? this.buildLinearGradient() : this.buildRadialGradient(); };
    e.prototype.buildRadialGradient = function () { if (this.texture)
        return; var e = this.colorStops.length ? this.colorStops : te, t = this._textureSize, _a = R(t, t), n = _a.canvas, r = _a.context, _b = this.center, a = _b.x, s = _b.y, _c = this.outerCenter, c = _c.x, l = _c.y, u = this.innerRadius, d = this.outerRadius, f = c - d, p = l - d, m = t / (d * 2), h = (a - f) * m, g = (s - p) * m, _ = r.createRadialGradient(h, g, u * m, (c - f) * m, (l - p) * m, d * m); L(_, e), r.fillStyle = e[e.length - 1].color, r.fillRect(0, 0, t, t), r.fillStyle = _, r.translate(h, g), r.rotate(this.rotation), r.scale(1, this.scale), r.translate(-h, -g), r.fillRect(0, 0, t, t), this.texture = new o.gt({ source: new o.ct({ resource: n, addressMode: this._wrapMode }) }); var v = new i.b; this.textureSpace === "local" ? v.scale(2 * d, 2 * d) : v.scale(1 / m, 1 / m), v.translate(f, p), this.transform = v; };
    e.prototype.destroy = function () { var e; (e = this.texture) == null || e.destroy(!0), this.texture = null, this.transform = null, this.colorStops = [], this.start = null, this.end = null, this.center = null, this.outerCenter = null; };
    Object.defineProperty(e.prototype, "styleKey", {
        get: function () { return "fill-gradient-".concat(this.uid, "-").concat(this._tick); },
        enumerable: false,
        configurable: true
    });
    return e;
}()), ne.defaultLinearOptions = { start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colorStops: [], textureSpace: "local", type: "linear", textureSize: 256, wrapMode: "clamp-to-edge" }, ne.defaultRadialOptions = { center: { x: .5, y: .5 }, innerRadius: 0, outerRadius: .5, colorStops: [], scale: 1, rotation: 0, textureSpace: "local", type: "radial", textureSize: 256, wrapMode: "clamp-to-edge" }, z = ne; })))(); }
function re(e, t, n, r) { var i = t.matrix ? e.copyFrom(t.matrix).invert() : e.identity(); if (t.textureSpace === "local") {
    var e_8 = n.getBounds(ae);
    t.width && e_8.pad(t.width);
    var r_7 = e_8.x, a_2 = e_8.y, o_2 = 1 / e_8.width, s_2 = 1 / e_8.height, c_2 = -r_7 * o_2, l_5 = -a_2 * s_2, u_3 = i.a, d_2 = i.b, f_2 = i.c, p_2 = i.d;
    i.a *= o_2, i.b *= o_2, i.c *= s_2, i.d *= s_2, i.tx = c_2 * u_3 + l_5 * f_2 + i.tx, i.ty = c_2 * d_2 + l_5 * p_2 + i.ty;
}
else if (t.texture.rotate) {
    var _a = t.texture, e_9 = _a.uvs, n_7 = _a.orig;
    i.scale(1 / n_7.width, 1 / n_7.height), i.prepend(oe.set(e_9.x1 - e_9.x0, e_9.y1 - e_9.y0, e_9.x3 - e_9.x0, e_9.y3 - e_9.y0, e_9.x0, e_9.y0));
}
else
    i.translate(t.texture.frame.x, t.texture.frame.y), i.scale(1 / t.texture.source.width, 1 / t.texture.source.height); var a = t.texture.source.style; return !(t.fill instanceof z) && a.addressMode === "clamp-to-edge" && (a.addressMode = "repeat", a.update()), r && i.append(ie.copyFrom(r).invert()), i; }
var ie, ae, oe;
function se() { return (se = e.n((function () { i.x(), i._(), B(), ie = new i.b, ae = new i.g, oe = new i.b; })))(); }
function ce(e, t) { var n = t.geometryData, r = t.batches; r.length = 0, n.indices.length = 0, n.vertices.length = 0, n.uvs.length = 0; for (var t_11 = 0; t_11 < e.instructions.length; t_11++) {
    var i_2 = e.instructions[t_11];
    if (i_2.action === "texture")
        le(i_2.data, r, n);
    else if (i_2.action === "fill" || i_2.action === "stroke") {
        var e_10 = i_2.action === "stroke", t_12 = i_2.data.path.shapePath, a_3 = i_2.data.style, o_3 = i_2.data.hole;
        e_10 && o_3 && ue(o_3.shapePath, a_3, !0, r, n), o_3 && (t_12.shapePrimitives[t_12.shapePrimitives.length - 1].holes = o_3.shapePath.shapePrimitives), ue(t_12, a_3, e_10, r, n);
    }
} }
function le(e, t, n) { var r = [], i = V.rectangle, s = fe; s.x = e.dx, s.y = e.dy, s.width = e.dw, s.height = e.dh; var c = e.transform; if (!i.build(s, r))
    return; var l = n.vertices, u = n.uvs, d = n.indices, f = d.length, m = l.length / 2; c && o.E(r, c), i.triangulate(r, l, 2, m, d, f); var h = e.image, g = h.uvs; u.push(g.x0, g.y0, g.x1, g.y1, g.x3, g.y3, g.x2, g.y2); var _ = a.N.get(p); _.indexOffset = f, _.indexSize = d.length - f, _.attributeOffset = m, _.attributeSize = l.length / 2 - m, _.baseColor = e.style, _.alpha = e.alpha, _.texture = h, _.geometryData = n, t.push(_); }
function ue(e, t, n, r, i) { var s = i.vertices, c = i.uvs, l = i.indices; e.shapePrimitives.forEach(function (_a) {
    var e = _a.shape, u = _a.transform, d = _a.holes;
    var f = [], m = V[e.type];
    if (!m.build(e, f))
        return;
    var h = l.length, g = s.length / 2, _ = "triangle-list";
    if (u && o.E(f, u), n) {
        var v;
        var n_8 = (v = e.closePath) == null || v, r_8 = t;
        r_8.pixelLine ? (E(f, n_8, s, l), _ = "line-list") : w(f, r_8, !1, n_8, s, l);
    }
    else if (d) {
        var e_11 = [], t_13 = f.slice();
        de(d).forEach(function (n) { e_11.push(t_13.length / 2), t_13.push.apply(t_13, n); }), O(t_13, e_11, s, 2, g, l, h);
    }
    else
        m.triangulate(f, s, 2, g, l, h);
    var y = c.length / 2, b = t.texture;
    if (b !== o.gt.WHITE) {
        var n_9 = re(pe, t, e, u);
        o.O(s, 2, g, c, y, 2, s.length / 2 - g, n_9);
    }
    else
        o.D(c, y, 2, s.length / 2 - g);
    var x = a.N.get(p);
    x.indexOffset = h, x.indexSize = l.length - h, x.attributeOffset = g, x.attributeSize = s.length / 2 - g, x.baseColor = t.color, x.alpha = t.alpha, x.texture = b, x.geometryData = i, x.topology = _, r.push(x);
}); }
function de(e) { var t = []; for (var n_10 = 0; n_10 < e.length; n_10++) {
    var r_9 = e[n_10].shape, i_3 = [];
    V[r_9.type].build(r_9, i_3) && t.push(i_3);
} return t; }
var V, fe, pe;
function me() { return (me = e.n((function () { r.q(), i.x(), i._(), o._t(), a.P(), m(), v(), T(), D(), M(), P(), I(), se(), k(), V = {}, r.K.handleByMap(r.G.ShapeBuilder, V), r.K.add(N, j, F, h, g, _), fe = new i.g, pe = new i.b; })))(); }
var he, ge, H, U;
function W() { return (W = e.n((function () { r.q(), l.S(), l.u(), o.ht(), a.f(), a.W(), a.P(), me(), he = (function () {
    function he() {
        this.batches = [], this.geometryData = { vertices: [], uvs: [], indices: [] };
    }
    he.prototype.reset = function () { this.batches && this.batches.forEach(function (e) { a.N.return(e); }), this.graphicsData && a.N.return(this.graphicsData), this.isBatchable = !1, this.context = null, this.batches.length = 0, this.geometryData.indices.length = 0, this.geometryData.vertices.length = 0, this.geometryData.uvs.length = 0, this.graphicsData = null; };
    he.prototype.destroy = function () { this.reset(), this.batches = null, this.geometryData = null; };
    return he;
}()), ge = (function () {
    function ge() {
        this.instructions = new o.mt;
    }
    ge.prototype.init = function (e) { var t = e.maxTextures; this.batcher ? this.batcher._updateMaxTextures(t) : this.batcher = new l.l({ maxTextures: t }), this.instructions.reset(); };
    Object.defineProperty(ge.prototype, "geometry", {
        get: function () { return a.U(a.J, "GraphicsContextRenderData#geometry is deprecated, please use batcher.geometry instead."), this.batcher.geometry; },
        enumerable: false,
        configurable: true
    });
    ge.prototype.destroy = function () { this.batcher.destroy(), this.instructions.destroy(), this.batcher = null, this.instructions = null; };
    return ge;
}()), H = (function () {
    function e(e) {
        this._renderer = e, this._managedContexts = new a.d({ renderer: e, type: "resource", name: "graphicsContext" });
    }
    e.prototype.init = function (t) { var n; e.defaultOptions.bezierSmoothness = (n = t == null ? void 0 : t.bezierSmoothness) == null ? e.defaultOptions.bezierSmoothness : n; };
    e.prototype.getContextRenderData = function (e) { return e._gpuData[this._renderer.uid].graphicsData || this._initContextRenderData(e); };
    e.prototype.updateGpuContext = function (e) { var t = !!e._gpuData[this._renderer.uid], n = e._gpuData[this._renderer.uid] || this._initContext(e); if (e.dirty || !t) {
        t && n.reset(), ce(e, n);
        var r_10 = e.batchMode;
        n.isBatchable = e.customShader || r_10 === "no-batch" ? !1 : r_10 !== "auto" || n.geometryData.vertices.length < 400, e.dirty = !1;
    } return n; };
    e.prototype.getGpuContext = function (e) { return e._gpuData[this._renderer.uid] || this._initContext(e); };
    e.prototype._initContextRenderData = function (e) { var t = a.N.get(ge, { maxTextures: this._renderer.limits.maxBatchableTextures }), n = e._gpuData[this._renderer.uid], r = n.batches, i = n.geometryData; n.graphicsData = t; var o = i.vertices.length, s = i.indices.length; for (var e_12 = 0; e_12 < r.length; e_12++)
        r[e_12].applyTransform = !1; var c = t.batcher; c.ensureAttributeBuffer(o), c.ensureIndexBuffer(s), c.begin(); for (var e_13 = 0; e_13 < r.length; e_13++) {
        var t_14 = r[e_13];
        c.add(t_14);
    } c.finish(t.instructions); var u = c.geometry; u.indexBuffer.setDataWithSize(c.indexBuffer, c.indexSize, !0), u.buffers[0].setDataWithSize(c.attributeBuffer.float32View, c.attributeSize, !0); var d = c.batches; for (var e_14 = 0; e_14 < c.batchIndex; e_14++) {
        var t_15 = d[e_14];
        t_15.bindGroup = l.x(t_15.textures.textures, t_15.textures.count, this._renderer.limits.maxBatchableTextures);
    } return t; };
    e.prototype._initContext = function (e) { var t = new he; return t.context = e, e._gpuData[this._renderer.uid] = t, this._managedContexts.add(e), t; };
    e.prototype.destroy = function () { this._managedContexts.destroy(), this._renderer = null; };
    return e;
}()), H.extension = { type: [r.G.WebGLSystem, r.G.WebGPUSystem], name: "graphicsContext" }, H.defaultOptions = { bezierSmoothness: .5 }, U = H; })))(); }
function _e(e, t, n, r, i, a, o, s, c, l) { var u = Math.min(.99, Math.max(0, l == null ? U.defaultOptions.bezierSmoothness : l)), d = (xe - u) / 1; return d *= d, ve(t, n, r, i, a, o, s, c, e, d), e; }
function ve(e, t, n, r, i, a, o, s, c, l) { ye(e, t, n, r, i, a, o, s, c, l, 0), c.push(o, s); }
function ye(e, t, n, r, i, a, o, s, c, l, u) { if (u > be)
    return; var d = (e + n) / 2, f = (t + r) / 2, p = (n + i) / 2, m = (r + a) / 2, h = (i + o) / 2, g = (a + s) / 2, _ = (d + p) / 2, v = (f + m) / 2, y = (p + h) / 2, b = (m + g) / 2, x = (_ + y) / 2, S = (v + b) / 2; if (u > 0) {
    var u_4 = o - e, d_3 = s - t, f_3 = Math.abs((n - o) * d_3 - (r - s) * u_4), p_3 = Math.abs((i - o) * d_3 - (a - s) * u_4);
    if (f_3 > G && p_3 > G) {
        if ((f_3 + p_3) * (f_3 + p_3) <= l * (u_4 * u_4 + d_3 * d_3)) {
            c.push(x, S);
            return;
        }
    }
    else if (f_3 > G) {
        if (f_3 * f_3 <= l * (u_4 * u_4 + d_3 * d_3)) {
            c.push(x, S);
            return;
        }
    }
    else if (p_3 > G) {
        if (p_3 * p_3 <= l * (u_4 * u_4 + d_3 * d_3)) {
            c.push(x, S);
            return;
        }
    }
    else if (u_4 = x - (e + o) / 2, d_3 = S - (t + s) / 2, u_4 * u_4 + d_3 * d_3 <= l) {
        c.push(x, S);
        return;
    }
} ye(e, t, d, f, _, v, x, S, c, l, u + 1), ye(x, S, y, b, h, g, o, s, c, l, u + 1); }
var be, G, xe;
function Se() { return (Se = e.n((function () { W(), be = 8, G = 1.1920929e-7, xe = 1; })))(); }
function Ce(e, t, n, r, i, a, o, s) { var c = Math.min(.99, Math.max(0, s == null ? U.defaultOptions.bezierSmoothness : s)), l = (Oe - c) / 1; return l *= l, we(t, n, r, i, a, o, e, l), e; }
function we(e, t, n, r, i, a, o, s) { Te(o, e, t, n, r, i, a, s, 0), o.push(i, a); }
function Te(e, t, n, r, i, a, o, s, c) { if (c > Ee)
    return; var l = (t + r) / 2, u = (n + i) / 2, d = (r + a) / 2, f = (i + o) / 2, p = (l + d) / 2, m = (u + f) / 2, h = a - t, g = o - n, _ = Math.abs((r - a) * g - (i - o) * h); if (_ > De) {
    if (_ * _ <= s * (h * h + g * g)) {
        e.push(p, m);
        return;
    }
}
else if (h = p - (t + a) / 2, g = m - (n + o) / 2, h * h + g * g <= s) {
    e.push(p, m);
    return;
} Te(e, t, n, l, u, p, m, s, c + 1), Te(e, p, m, d, f, a, o, s, c + 1); }
var Ee, De, Oe;
function ke() { return (ke = e.n((function () { W(), Ee = 8, De = 1.1920929e-7, Oe = 1; })))(); }
function Ae(e, t, n, r, i, a, o, s) { var c = Math.abs(i - a); (!o && i > a || o && a > i) && (c = 2 * Math.PI - c), s || (s = Math.max(6, Math.floor(6 * Math.pow(r, (1 / 3)) * (c / Math.PI)))), s = Math.max(s, 3); var l = c / s, u = i; l *= o ? -1 : 1; for (var i_4 = 0; i_4 < s + 1; i_4++) {
    var i_5 = Math.cos(u), a_4 = Math.sin(u), o_4 = t + i_5 * r, s_3 = n + a_4 * r;
    e.push(o_4, s_3), u += l;
} }
function je(e, t, n, r, i, a) { var o = e[e.length - 2], s = e[e.length - 1] - n, c = o - t, l = i - n, u = r - t, d = Math.abs(s * u - c * l); if (d < 1e-8 || a === 0) {
    (e[e.length - 2] !== t || e[e.length - 1] !== n) && e.push(t, n);
    return;
} var f = s * s + c * c, p = l * l + u * u, m = s * l + c * u, h = a * Math.sqrt(f) / d, g = a * Math.sqrt(p) / d, _ = h * m / f, v = g * m / p, y = h * u + g * c, b = h * l + g * s, x = c * (g + _), S = s * (g + _), C = u * (h + v), w = l * (h + v), T = Math.atan2(S - b, x - y), E = Math.atan2(w - b, C - y); Ae(e, y + t, b + n, a, T, E, c * l > u * s); }
function Me() { return (Me = e.n((function () { })))(); }
function Ne(e, t) { var n = t === -1.5707963267948966 ? -.551915024494 : 4 / 3 * Math.tan(t / 4), r = t === 1.5707963267948966 ? .551915024494 : n, i = Math.cos(e), a = Math.sin(e), o = Math.cos(e + t), s = Math.sin(e + t); return [{ x: i - a * r, y: a + i * r }, { x: o + s * r, y: s - o * r }, { x: o, y: s }]; }
function Pe(e, t, n, r, i, a, o, s, c, l) {
    if (s === void 0) { s = 0; }
    if (c === void 0) { c = 0; }
    if (l === void 0) { l = 0; }
    if (a === 0 || o === 0)
        return;
    var u = Math.sin(s * K / 360), d = Math.cos(s * K / 360), f = d * (t - r) / 2 + u * (n - i) / 2, p = -u * (t - r) / 2 + d * (n - i) / 2;
    if (f === 0 && p === 0)
        return;
    a = Math.abs(a), o = Math.abs(o);
    var m = Math.pow(f, 2) / Math.pow(a, 2) + Math.pow(p, 2) / Math.pow(o, 2);
    m > 1 && (a *= Math.sqrt(m), o *= Math.sqrt(m)), Le(t, n, r, i, a, o, c, l, u, d, f, p, q);
    var h = q.ang1, g = q.ang2, _ = q.centerX, v = q.centerY, y = Math.abs(g) / (K / 4);
    Math.abs(1 - y) < 1e-7 && (y = 1);
    var b = Math.max(Math.ceil(y), 1);
    g /= b;
    var x = e[e.length - 2], S = e[e.length - 1], C = { x: 0, y: 0 };
    for (var t_16 = 0; t_16 < b; t_16++) {
        var t_17 = Ne(h, g), _a = Fe(t_17[0], a, o, d, u, _, v, C), n_11 = _a.x, r_11 = _a.y, _b = Fe(t_17[1], a, o, d, u, _, v, C), i_6 = _b.x, s_4 = _b.y, _c = Fe(t_17[2], a, o, d, u, _, v, C), c_3 = _c.x, l_6 = _c.y;
        _e(e, x, S, n_11, r_11, i_6, s_4, c_3, l_6), x = c_3, S = l_6, h += g;
    }
}
var K, q, Fe, Ie, Le;
function Re() { return (Re = e.n((function () { Se(), K = Math.PI * 2, q = { centerX: 0, centerY: 0, ang1: 0, ang2: 0 }, Fe = function (_a, n, r, i, a, o, s, c) {
    var e = _a.x, t = _a.y;
    e *= n, t *= r;
    var l = i * e - a * t, u = a * e + i * t;
    return c.x = l + o, c.y = u + s, c;
}, Ie = function (e, t, n, r) { var i = e * r - t * n < 0 ? -1 : 1, a = e * n + t * r; return a > 1 && (a = 1), a < -1 && (a = -1), i * Math.acos(a); }, Le = function (e, t, n, r, i, a, o, s, c, l, u, d, f) { var p = Math.pow(i, 2), m = Math.pow(a, 2), h = Math.pow(u, 2), g = Math.pow(d, 2), _ = p * m - p * g - m * h; _ < 0 && (_ = 0), _ /= p * g + m * h, _ = Math.sqrt(_) * (o === s ? -1 : 1); var v = _ * i / a * d, y = _ * -a / i * u, b = l * v - c * y + (e + n) / 2, x = c * v + l * y + (t + r) / 2, S = (u - v) / i, C = (d - y) / a, w = (-u - v) / i, T = (-d - y) / a, E = Ie(1, 0, S, C), D = Ie(S, C, w, T); s === 0 && D > 0 && (D -= K), s === 1 && D < 0 && (D += K), f.centerX = b, f.centerY = x, f.ang1 = E, f.ang2 = D; }; })))(); }
function ze(e, t, n) { var r = function (e, t) { var n = t.x - e.x, r = t.y - e.y, i = Math.sqrt(n * n + r * r); return { len: i, nx: n / i, ny: r / i }; }, i = function (t, n) { t === 0 ? e.moveTo(n.x, n.y) : e.lineTo(n.x, n.y); }, a = t[t.length - 1]; for (var s_5 = 0; s_5 < t.length; s_5++) {
    var o;
    var c_4 = t[s_5 % t.length], l_7 = (o = c_4.radius) == null ? n : o;
    if (l_7 <= 0) {
        i(s_5, c_4), a = c_4;
        continue;
    }
    var u_5 = t[(s_5 + 1) % t.length], d_4 = r(c_4, a), f_4 = r(c_4, u_5);
    if (d_4.len < 1e-4 || f_4.len < 1e-4) {
        i(s_5, c_4), a = c_4;
        continue;
    }
    var p_4 = Math.asin(d_4.nx * f_4.ny - d_4.ny * f_4.nx), m_2 = 1, h_3 = !1;
    d_4.nx * f_4.nx - d_4.ny * -f_4.ny < 0 ? p_4 < 0 ? p_4 = Math.PI + p_4 : (p_4 = Math.PI - p_4, m_2 = -1, h_3 = !0) : p_4 > 0 && (m_2 = -1, h_3 = !0);
    var g_2 = p_4 / 2, _3 = void 0, v_2 = Math.abs(Math.cos(g_2) * l_7 / Math.sin(g_2));
    v_2 > Math.min(d_4.len / 2, f_4.len / 2) ? (v_2 = Math.min(d_4.len / 2, f_4.len / 2), _3 = Math.abs(v_2 * Math.sin(g_2) / Math.cos(g_2))) : _3 = l_7;
    var y_3 = c_4.x + f_4.nx * v_2 + -f_4.ny * _3 * m_2, b_2 = c_4.y + f_4.ny * v_2 + f_4.nx * _3 * m_2, x_1 = Math.atan2(d_4.ny, d_4.nx) + Math.PI / 2 * m_2, S_2 = Math.atan2(f_4.ny, f_4.nx) - Math.PI / 2 * m_2;
    s_5 === 0 && e.moveTo(y_3 + Math.cos(x_1) * _3, b_2 + Math.sin(x_1) * _3), e.arc(y_3, b_2, _3, x_1, S_2, h_3), a = c_4;
} }
function Be(e, t, n, r) { var i = function (e, t) { return Math.sqrt(Math.pow((e.x - t.x), 2) + Math.pow((e.y - t.y), 2)); }, a = function (e, t, n) { return ({ x: e.x + (t.x - e.x) * n, y: e.y + (t.y - e.y) * n }); }, o = t.length; for (var c_5 = 0; c_5 < o; c_5++) {
    var s;
    var l_8 = t[(c_5 + 1) % o], u_6 = (s = l_8.radius) == null ? n : s;
    if (u_6 <= 0) {
        c_5 === 0 ? e.moveTo(l_8.x, l_8.y) : e.lineTo(l_8.x, l_8.y);
        continue;
    }
    var d_5 = t[c_5], f_5 = t[(c_5 + 2) % o], p_5 = i(d_5, l_8), m_3 = void 0;
    m_3 = p_5 < 1e-4 ? l_8 : a(l_8, d_5, Math.min(p_5 / 2, u_6) / p_5);
    var h_4 = i(f_5, l_8), g_3 = void 0;
    g_3 = h_4 < 1e-4 ? l_8 : a(l_8, f_5, Math.min(h_4 / 2, u_6) / h_4), c_5 === 0 ? e.moveTo(m_3.x, m_3.y) : e.lineTo(m_3.x, m_3.y), e.quadraticCurveTo(l_8.x, l_8.y, g_3.x, g_3.y, r);
} }
var Ve, He;
function Ue() { return (Ue = e.n((function () { i.f(), i.u(), i.o(), i._(), i.i(), s.M(), Se(), ke(), Me(), Re(), Ve = new i.g, He = (function () {
    function He(e) {
        this.shapePrimitives = [], this._currentPoly = null, this._bounds = new s.j, this._graphicsPath2D = e, this.signed = e.checkForHoles;
    }
    He.prototype.moveTo = function (e, t) { return this.startPoly(e, t), this; };
    He.prototype.lineTo = function (e, t) { this._ensurePoly(); var n = this._currentPoly.points, r = n[n.length - 2], i = n[n.length - 1]; return (r !== e || i !== t) && n.push(e, t), this; };
    He.prototype.arc = function (e, t, n, r, i, a) { this._ensurePoly(!1); var o = this._currentPoly.points; return Ae(o, e, t, n, r, i, a), this; };
    He.prototype.arcTo = function (e, t, n, r, i) { this._ensurePoly(); var a = this._currentPoly.points; return je(a, e, t, n, r, i), this; };
    He.prototype.arcToSvg = function (e, t, n, r, i, a, o) { var s = this._currentPoly.points; return Pe(s, this._currentPoly.lastX, this._currentPoly.lastY, a, o, e, t, n, r, i), this; };
    He.prototype.bezierCurveTo = function (e, t, n, r, i, a, o) { this._ensurePoly(); var s = this._currentPoly; return _e(this._currentPoly.points, s.lastX, s.lastY, e, t, n, r, i, a, o), this; };
    He.prototype.quadraticCurveTo = function (e, t, n, r, i) { this._ensurePoly(); var a = this._currentPoly; return Ce(this._currentPoly.points, a.lastX, a.lastY, e, t, n, r, i), this; };
    He.prototype.closePath = function () { return this.endPoly(!0), this; };
    He.prototype.addPath = function (e, t) { this.endPoly(), t && !t.isIdentity() && (e = e.clone(!0), e.transform(t)); var n = this.shapePrimitives, r = n.length; for (var t_18 = 0; t_18 < e.instructions.length; t_18++) {
        var n_12 = e.instructions[t_18];
        this[n_12.action].apply(this, n_12.data);
    } if (e.checkForHoles && n.length - r > 1) {
        var e_15 = null;
        for (var t_19 = r; t_19 < n.length; t_19++) {
            var r_12 = n[t_19];
            if (r_12.shape.type === "polygon") {
                var i_7 = r_12.shape, a_5 = e_15 == null ? void 0 : e_15.shape;
                a_5 && a_5.containsPolygon(i_7) ? (e_15.holes || (e_15.holes = []), e_15.holes.push(r_12), n.copyWithin(t_19, t_19 + 1), n.length--, t_19--) : e_15 = r_12;
            }
        }
    } return this; };
    He.prototype.finish = function (e) {
        if (e === void 0) { e = !1; }
        this.endPoly(e);
    };
    He.prototype.rect = function (e, t, n, r, a) { return this.drawShape(new i.g(e, t, n, r), a), this; };
    He.prototype.circle = function (e, t, n, r) { return this.drawShape(new i.d(e, t, n), r), this; };
    He.prototype.poly = function (e, t, n) { var r = new i.a(e); return r.closePath = t, this.drawShape(r, n), this; };
    He.prototype.regularPoly = function (e, t, n, r, i, a) {
        if (i === void 0) { i = 0; }
        r = Math.max(r | 0, 3);
        var o = -1 * Math.PI / 2 + i, s = Math.PI * 2 / r, c = [];
        for (var i_8 = 0; i_8 < r; i_8++) {
            var r_13 = o - i_8 * s;
            c.push(e + n * Math.cos(r_13), t + n * Math.sin(r_13));
        }
        return this.poly(c, !0, a), this;
    };
    He.prototype.roundPoly = function (e, t, n, r, i, a, o) {
        if (a === void 0) { a = 0; }
        if (r = Math.max(r | 0, 3), i <= 0)
            return this.regularPoly(e, t, n, r, a);
        var s = n * Math.sin(Math.PI / r) - .001;
        i = Math.min(i, s);
        var c = -1 * Math.PI / 2 + a, l = Math.PI * 2 / r, u = (r - 2) * Math.PI / r / 2;
        for (var a_6 = 0; a_6 < r; a_6++) {
            var r_14 = a_6 * l + c, s_6 = e + n * Math.cos(r_14), d_6 = t + n * Math.sin(r_14), f_6 = r_14 + Math.PI + u, p_6 = r_14 - Math.PI - u, m_4 = s_6 + i * Math.cos(f_6), h_5 = d_6 + i * Math.sin(f_6), g_4 = s_6 + i * Math.cos(p_6), _4 = d_6 + i * Math.sin(p_6);
            a_6 === 0 ? this.moveTo(m_4, h_5) : this.lineTo(m_4, h_5), this.quadraticCurveTo(s_6, d_6, g_4, _4, o);
        }
        return this.closePath();
    };
    He.prototype.roundShape = function (e, t, n, r) {
        if (n === void 0) { n = !1; }
        return e.length < 3 ? this : (n ? Be(this, e, t, r) : ze(this, e, t), this.closePath());
    };
    He.prototype.filletRect = function (e, t, n, r, i) { if (i === 0)
        return this.rect(e, t, n, r); var a = Math.min(n, r) / 2, o = Math.min(a, Math.max(-a, i)), s = e + n, c = t + r, l = o < 0 ? -o : 0, u = Math.abs(o); return this.moveTo(e, t + u).arcTo(e + l, t + l, e + u, t, u).lineTo(s - u, t).arcTo(s - l, t + l, s, t + u, u).lineTo(s, c - u).arcTo(s - l, c - l, e + n - u, c, u).lineTo(e + u, c).arcTo(e + l, c - l, e, c - u, u).closePath(); };
    He.prototype.chamferRect = function (e, t, n, r, i, a) { if (i <= 0)
        return this.rect(e, t, n, r); var o = Math.min(i, Math.min(n, r) / 2), s = e + n, c = t + r, l = [e + o, t, s - o, t, s, t + o, s, c - o, s - o, c, e + o, c, e, c - o, e, t + o]; for (var e_16 = l.length - 1; e_16 >= 2; e_16 -= 2)
        l[e_16] === l[e_16 - 2] && l[e_16 - 1] === l[e_16 - 3] && l.splice(e_16 - 1, 2); return this.poly(l, !0, a); };
    He.prototype.ellipse = function (e, t, n, r, a) { return this.drawShape(new i.l(e, t, n, r), a), this; };
    He.prototype.roundRect = function (e, t, n, r, a, o) { return this.drawShape(new i.r(e, t, n, r, a), o), this; };
    He.prototype.drawShape = function (e, t) { return this.endPoly(), this.shapePrimitives.push({ shape: e, transform: t }), this; };
    He.prototype.startPoly = function (e, t) { var n = this._currentPoly; return n && this.endPoly(), n = new i.a, n.points.push(e, t), this._currentPoly = n, this; };
    He.prototype.endPoly = function (e) {
        if (e === void 0) { e = !1; }
        var t = this._currentPoly;
        return t && t.points.length > 2 && (t.closePath = e, this.shapePrimitives.push({ shape: t })), this._currentPoly = null, this;
    };
    He.prototype._ensurePoly = function (e) {
        if (e === void 0) { e = !0; }
        if (!this._currentPoly && (this._currentPoly = new i.a, e)) {
            var e_17 = this.shapePrimitives[this.shapePrimitives.length - 1];
            if (e_17) {
                var t_20 = e_17.shape.x, n_13 = e_17.shape.y;
                if (e_17.transform && !e_17.transform.isIdentity()) {
                    var r_15 = e_17.transform, i_9 = t_20;
                    t_20 = r_15.a * t_20 + r_15.c * n_13 + r_15.tx, n_13 = r_15.b * i_9 + r_15.d * n_13 + r_15.ty;
                }
                this._currentPoly.points.push(t_20, n_13);
            }
            else
                this._currentPoly.points.push(0, 0);
        }
    };
    He.prototype.buildPath = function () { var e = this._graphicsPath2D; this.shapePrimitives.length = 0, this._currentPoly = null; for (var t_21 = 0; t_21 < e.instructions.length; t_21++) {
        var n_14 = e.instructions[t_21];
        this[n_14.action].apply(this, n_14.data);
    } this.finish(); };
    Object.defineProperty(He.prototype, "bounds", {
        get: function () { var e = this._bounds; e.clear(); var t = this.shapePrimitives; for (var n_15 = 0; n_15 < t.length; n_15++) {
            var r_16 = t[n_15], i_10 = r_16.shape.getBounds(Ve);
            r_16.transform ? e.addRect(i_10, r_16.transform) : e.addRect(i_10);
        } return e; },
        enumerable: false,
        configurable: true
    });
    return He;
}()); })))(); }
function J(e, t) { return e ? e.prepend(t) : t.clone(); }
var Y;
function We() { return (We = e.n((function () { i.C(), a.Y(), a.L(), d(), Ue(), Y = (function () {
    function e(e, t) {
        if (t === void 0) { t = !1; }
        if (this.instructions = [], this.uid = a.X("graphicsPath"), this._dirty = !0, this.checkForHoles = t, typeof e == "string")
            u(e, this);
        else {
            var n;
            this.instructions = (n = e == null ? void 0 : e.slice()) == null ? [] : n;
        }
    }
    Object.defineProperty(e.prototype, "shapePath", {
        get: function () { return this._shapePath || (this._shapePath = new He(this)), this._dirty && (this._dirty = !1, this._shapePath.buildPath()), this._shapePath; },
        enumerable: false,
        configurable: true
    });
    e.prototype.addPath = function (e, t) { return e = e.clone(), this.instructions.push({ action: "addPath", data: [e, t] }), this._dirty = !0, this; };
    e.prototype.arc = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return this.instructions.push({ action: "arc", data: e }), this._dirty = !0, this;
    };
    e.prototype.arcTo = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return this.instructions.push({ action: "arcTo", data: e }), this._dirty = !0, this;
    };
    e.prototype.arcToSvg = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return this.instructions.push({ action: "arcToSvg", data: e }), this._dirty = !0, this;
    };
    e.prototype.bezierCurveTo = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return this.instructions.push({ action: "bezierCurveTo", data: e }), this._dirty = !0, this;
    };
    e.prototype.bezierCurveToShort = function (e, t, n, r, a) { var o = this.instructions[this.instructions.length - 1], s = this.getLastPoint(i.S.shared), c = 0, l = 0; if (!o || o.action !== "bezierCurveTo")
        c = s.x, l = s.y;
    else {
        c = o.data[2], l = o.data[3];
        var e_18 = s.x, t_22 = s.y;
        c = e_18 + (e_18 - c), l = t_22 + (t_22 - l);
    } return this.instructions.push({ action: "bezierCurveTo", data: [c, l, e, t, n, r, a] }), this._dirty = !0, this; };
    e.prototype.closePath = function () { return this.instructions.push({ action: "closePath", data: [] }), this._dirty = !0, this; };
    e.prototype.ellipse = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return this.instructions.push({ action: "ellipse", data: e }), this._dirty = !0, this;
    };
    e.prototype.lineTo = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return this.instructions.push({ action: "lineTo", data: e }), this._dirty = !0, this;
    };
    e.prototype.moveTo = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return this.instructions.push({ action: "moveTo", data: e }), this;
    };
    e.prototype.quadraticCurveTo = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return this.instructions.push({ action: "quadraticCurveTo", data: e }), this._dirty = !0, this;
    };
    e.prototype.quadraticCurveToShort = function (e, t, n) { var r = this.instructions[this.instructions.length - 1], a = this.getLastPoint(i.S.shared), o = 0, s = 0; if (!r || r.action !== "quadraticCurveTo")
        o = a.x, s = a.y;
    else {
        o = r.data[0], s = r.data[1];
        var e_19 = a.x, t_23 = a.y;
        o = e_19 + (e_19 - o), s = t_23 + (t_23 - s);
    } return this.instructions.push({ action: "quadraticCurveTo", data: [o, s, e, t, n] }), this._dirty = !0, this; };
    e.prototype.rect = function (e, t, n, r, i) { return this.instructions.push({ action: "rect", data: [e, t, n, r, i] }), this._dirty = !0, this; };
    e.prototype.circle = function (e, t, n, r) { return this.instructions.push({ action: "circle", data: [e, t, n, r] }), this._dirty = !0, this; };
    e.prototype.roundRect = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return this.instructions.push({ action: "roundRect", data: e }), this._dirty = !0, this;
    };
    e.prototype.poly = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return this.instructions.push({ action: "poly", data: e }), this._dirty = !0, this;
    };
    e.prototype.regularPoly = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return this.instructions.push({ action: "regularPoly", data: e }), this._dirty = !0, this;
    };
    e.prototype.roundPoly = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return this.instructions.push({ action: "roundPoly", data: e }), this._dirty = !0, this;
    };
    e.prototype.roundShape = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return this.instructions.push({ action: "roundShape", data: e }), this._dirty = !0, this;
    };
    e.prototype.filletRect = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return this.instructions.push({ action: "filletRect", data: e }), this._dirty = !0, this;
    };
    e.prototype.chamferRect = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return this.instructions.push({ action: "chamferRect", data: e }), this._dirty = !0, this;
    };
    e.prototype.star = function (e, t, n, r, i, a, o) { i || (i = r / 2); var s = -1 * Math.PI / 2 + a, c = n * 2, l = Math.PI * 2 / c, u = []; for (var n_16 = 0; n_16 < c; n_16++) {
        var a_7 = n_16 % 2 ? i : r, o_5 = n_16 * l + s;
        u.push(e + a_7 * Math.cos(o_5), t + a_7 * Math.sin(o_5));
    } return this.poly(u, !0, o), this; };
    e.prototype.clone = function (t) {
        if (t === void 0) { t = !1; }
        var n = new e;
        if (n.checkForHoles = this.checkForHoles, !t)
            n.instructions = this.instructions.slice();
        else
            for (var e_20 = 0; e_20 < this.instructions.length; e_20++) {
                var t_24 = this.instructions[e_20];
                n.instructions.push({ action: t_24.action, data: t_24.data.slice() });
            }
        return n;
    };
    e.prototype.clear = function () { return this.instructions.length = 0, this._dirty = !0, this; };
    e.prototype.transform = function (e) { if (e.isIdentity())
        return this; var t = e.a, n = e.b, r = e.c, i = e.d, o = e.tx, s = e.ty, c = 0, l = 0, u = 0, d = 0, f = 0, p = 0, m = 0, h = 0; for (var g_5 = 0; g_5 < this.instructions.length; g_5++) {
        var _5 = this.instructions[g_5], v_3 = _5.data;
        switch (_5.action) {
            case "moveTo":
            case "lineTo":
                c = v_3[0], l = v_3[1], v_3[0] = t * c + r * l + o, v_3[1] = n * c + i * l + s;
                break;
            case "bezierCurveTo":
                u = v_3[0], d = v_3[1], f = v_3[2], p = v_3[3], c = v_3[4], l = v_3[5], v_3[0] = t * u + r * d + o, v_3[1] = n * u + i * d + s, v_3[2] = t * f + r * p + o, v_3[3] = n * f + i * p + s, v_3[4] = t * c + r * l + o, v_3[5] = n * c + i * l + s;
                break;
            case "quadraticCurveTo":
                u = v_3[0], d = v_3[1], c = v_3[2], l = v_3[3], v_3[0] = t * u + r * d + o, v_3[1] = n * u + i * d + s, v_3[2] = t * c + r * l + o, v_3[3] = n * c + i * l + s;
                break;
            case "arcToSvg":
                c = v_3[5], l = v_3[6], m = v_3[0], h = v_3[1], v_3[0] = t * m + r * h, v_3[1] = n * m + i * h, v_3[5] = t * c + r * l + o, v_3[6] = n * c + i * l + s;
                break;
            case "circle":
                v_3[4] = J(v_3[3], e);
                break;
            case "rect":
                v_3[4] = J(v_3[4], e);
                break;
            case "ellipse":
                v_3[8] = J(v_3[8], e);
                break;
            case "roundRect":
                v_3[5] = J(v_3[5], e);
                break;
            case "addPath":
                v_3[0].transform(e);
                break;
            case "poly":
                v_3[2] = J(v_3[2], e);
                break;
            case "regularPoly":
            case "chamferRect":
                v_3[5] = J(v_3[5], e);
                break;
            case "closePath": break;
            default: a.R("unknown transform action", _5.action);
        }
    } return this._dirty = !0, this; };
    Object.defineProperty(e.prototype, "bounds", {
        get: function () { return this.shapePath.bounds; },
        enumerable: false,
        configurable: true
    });
    e.prototype.getLastPoint = function (e) { var t = this.instructions.length - 1, n = this.instructions[t]; if (!n)
        return e.x = 0, e.y = 0, e; for (; n.action === "closePath";) {
        if (t--, t < 0)
            return e.x = 0, e.y = 0, e;
        n = this.instructions[t];
    } switch (n.action) {
        case "moveTo":
        case "lineTo":
            e.x = n.data[0], e.y = n.data[1];
            break;
        case "quadraticCurveTo":
            e.x = n.data[2], e.y = n.data[3];
            break;
        case "bezierCurveTo":
            e.x = n.data[4], e.y = n.data[5];
            break;
        case "arc":
        case "arcToSvg":
            e.x = n.data[5], e.y = n.data[6];
            break;
        case "addPath": n.data[0].getLastPoint(e);
    } return e; };
    return e;
}()); })))(); }
function X(e, t, n) { var r = e.getAttribute(t); return r ? Number(r) : n; }
function Ge(e, t) { var n = e.querySelectorAll("defs"); for (var e_21 = 0; e_21 < n.length; e_21++) {
    var r_17 = n[e_21];
    for (var e_22 = 0; e_22 < r_17.children.length; e_22++) {
        var n_17 = r_17.children[e_22];
        switch (n_17.nodeName.toLowerCase()) {
            case "lineargradient":
                t.defs[n_17.id] = Je(n_17);
                break;
            case "radialgradient": t.defs[n_17.id] = Ye(n_17);
        }
    }
} }
function Z(e, t, n) { var r = e.getAttribute(t); if (r != null && r.trim().endsWith("%")) {
    var e_23 = Number(r.trim().slice(0, -1));
    return Number.isNaN(e_23) ? n : e_23 / 100;
} return X(e, t, n); }
function Ke(e) { return (e.getAttribute("gradientUnits") || "objectBoundingBox") === "objectBoundingBox" ? "local" : "global"; }
function qe(e) { var t = []; for (var n_18 = 0; n_18 < e.children.length; n_18++) {
    var i_11 = e.children[n_18], a_8 = Z(i_11, "offset", 0), o_6 = r.z.shared.setValue(i_11.getAttribute("stop-color")).toNumber();
    t.push({ offset: a_8, color: o_6 });
} return t; }
function Je(e) { var t = Z(e, "x1", 0), n = Z(e, "y1", 0), r = Z(e, "x2", 1), i = Z(e, "y2", 0); return new z({ type: "linear", start: { x: t, y: n }, end: { x: r, y: i }, textureSpace: Ke(e), colorStops: qe(e) }); }
function Ye(e) { var t = Z(e, "cx", .5), n = Z(e, "cy", .5), r = Z(e, "r", .5), i = Z(e, "fx", t), a = Z(e, "fy", n), o = Z(e, "fr", 0); return new z({ type: "radial", center: { x: i, y: a }, innerRadius: o, outerCenter: { x: t, y: n }, outerRadius: r, textureSpace: Ke(e), colorStops: qe(e) }); }
function Xe() { return (Xe = e.n((function () { r.B(), B(); })))(); }
function Ze(e) { var t = e.match(/url\s*\(\s*['"]?\s*#([^'"\s)]+)\s*['"]?\s*\)/i); return t ? t[1] : ""; }
function Qe(e, t) { var n = e.getAttribute("style"), r = {}, i = {}, a = { strokeStyle: r, fillStyle: i, useFill: !1, useStroke: !1 }; for (var n_19 in et) {
    var r_18 = e.getAttribute(n_19);
    r_18 && $e(t, a, n_19, r_18.trim());
} if (n) {
    var e_24 = n.split(";");
    for (var n_20 = 0; n_20 < e_24.length; n_20++) {
        var _a = e_24[n_20].trim().split(":"), r_19 = _a[0], i_12 = _a[1];
        et[r_19] && $e(t, a, r_19, i_12.trim());
    }
} return { strokeStyle: a.useStroke ? r : null, fillStyle: a.useFill ? i : null, useFill: a.useFill, useStroke: a.useStroke }; }
function $e(e, t, n, i) { switch (n) {
    case "stroke":
        if (i !== "none") {
            if (i.startsWith("url(")) {
                var n_21 = Ze(i);
                t.strokeStyle.fill = e.defs[n_21];
            }
            else
                t.strokeStyle.color = r.z.shared.setValue(i).toNumber();
            t.useStroke = !0;
        }
        break;
    case "stroke-width":
        t.strokeStyle.width = Number(i);
        break;
    case "fill":
        if (i !== "none") {
            if (i.startsWith("url(")) {
                var n_22 = Ze(i);
                t.fillStyle.fill = e.defs[n_22];
            }
            else
                t.fillStyle.color = r.z.shared.setValue(i).toNumber();
            t.useFill = !0;
        }
        break;
    case "fill-opacity":
        t.fillStyle.alpha = Number(i);
        break;
    case "stroke-opacity":
        t.strokeStyle.alpha = Number(i);
        break;
    case "opacity": t.fillStyle.alpha = Number(i), t.strokeStyle.alpha = Number(i);
} }
var et;
function tt() { return (tt = e.n((function () { r.B(), et = { fill: { type: "paint", default: 0 }, "fill-opacity": { type: "number", default: 1 }, stroke: { type: "paint", default: 0 }, "stroke-width": { type: "number", default: 1 }, "stroke-opacity": { type: "number", default: 1 }, "stroke-linecap": { type: "string", default: "butt" }, "stroke-linejoin": { type: "string", default: "miter" }, "stroke-miterlimit": { type: "number", default: 10 }, "stroke-dasharray": { type: "string", default: "none" }, "stroke-dashoffset": { type: "number", default: 0 }, opacity: { type: "number", default: 1 } }; })))(); }
function nt(e) { if (e.length <= 2)
    return !0; var t = e.map(function (e) { return e.area; }).sort(function (e, t) { return t - e; }), n = t[0], r = t[1], i = t[t.length - 1], a = n / r, o = r / i; return !(a > 3 && o < 2); }
function rt(e) { return e.split(/(?=[Mm])/).filter(function (e) { return e.trim().length > 0; }); }
function it(e) { var t = e.match(/[-+]?[0-9]*\.?[0-9]+/g); if (!t || t.length < 4)
    return 0; var n = t.map(Number), r = [], i = []; for (var e_25 = 0; e_25 < n.length; e_25 += 2)
    e_25 + 1 < n.length && (r.push(n[e_25]), i.push(n[e_25 + 1])); if (r.length === 0 || i.length === 0)
    return 0; var a = Math.min.apply(Math, r), o = Math.max.apply(Math, r), s = Math.min.apply(Math, i), c = Math.max.apply(Math, i); return (o - a) * (c - s); }
function at(e, t) { var n = new Y(e, !1); for (var _i = 0, _a = n.instructions; _i < _a.length; _i++) {
    var e_26 = _a[_i];
    t.instructions.push(e_26);
} }
function ot() { return (ot = e.n((function () { We(); })))(); }
function st(e, t) { if (typeof e == "string") {
    var t_25 = document.createElement("div");
    t_25.innerHTML = e.trim(), e = t_25.querySelector("svg");
} var n = { context: t, defs: {}, path: new Y }; Ge(e, n); var r = e.children, _a = Qe(e, n), i = _a.fillStyle, a = _a.strokeStyle; for (var e_27 = 0; e_27 < r.length; e_27++) {
    var t_26 = r[e_27];
    t_26.nodeName.toLowerCase() !== "defs" && ct(t_26, n, i, a);
} return t; }
function ct(e, n, r, i) { var o = e.children, _a = Qe(e, n), s = _a.fillStyle, c = _a.strokeStyle; s && r ? r = t.yr(t.yr({}, r), s) : s && (r = s), c && i ? i = t.yr(t.yr({}, i), c) : c && (i = c); var l = !r && !i; l && (r = { color: 0 }); var u, d, f, p, m, h, g, _, v, y, b, x, S, C, w, T, E; switch (e.nodeName.toLowerCase()) {
    case "path": {
        C = e.getAttribute("d");
        var t_27 = e.getAttribute("fill-rule"), a_9 = rt(C), o_7 = t_27 === "evenodd", s_7 = a_9.length > 1;
        if (o_7 && s_7) {
            var e_28 = a_9.map(function (e) { return ({ path: e, area: it(e) }); });
            if (e_28.sort(function (e, t) { return t.area - e.area; }), a_9.length > 3 || !nt(e_28))
                for (var t_28 = 0; t_28 < e_28.length; t_28++) {
                    var a_10 = e_28[t_28], o_8 = t_28 === 0;
                    n.context.beginPath();
                    var s_8 = new Y(void 0, !0);
                    at(a_10.path, s_8), n.context.path(s_8), o_8 ? (r && n.context.fill(r), i && n.context.stroke(i)) : n.context.cut();
                }
            else
                for (var t_29 = 0; t_29 < e_28.length; t_29++) {
                    var a_11 = e_28[t_29], o_9 = t_29 % 2 == 1;
                    n.context.beginPath();
                    var s_9 = new Y(void 0, !0);
                    at(a_11.path, s_9), n.context.path(s_9), o_9 ? n.context.cut() : (r && n.context.fill(r), i && n.context.stroke(i));
                }
        }
        else
            w = new Y(C, !t_27 || t_27 === "evenodd"), n.context.path(w), r && n.context.fill(r), i && n.context.stroke(i);
        break;
    }
    case "circle":
        g = X(e, "cx", 0), _ = X(e, "cy", 0), v = X(e, "r", 0), n.context.ellipse(g, _, v, v), r && n.context.fill(r), i && n.context.stroke(i);
        break;
    case "rect":
        u = X(e, "x", 0), d = X(e, "y", 0), T = X(e, "width", 0), E = X(e, "height", 0), y = X(e, "rx", 0), b = X(e, "ry", 0), y || b ? n.context.roundRect(u, d, T, E, y || b) : n.context.rect(u, d, T, E), r && n.context.fill(r), i && n.context.stroke(i);
        break;
    case "ellipse":
        g = X(e, "cx", 0), _ = X(e, "cy", 0), y = X(e, "rx", 0), b = X(e, "ry", 0), n.context.beginPath(), n.context.ellipse(g, _, y, b), r && n.context.fill(r), i && n.context.stroke(i);
        break;
    case "line":
        f = X(e, "x1", 0), p = X(e, "y1", 0), m = X(e, "x2", 0), h = X(e, "y2", 0), n.context.beginPath(), n.context.moveTo(f, p), n.context.lineTo(m, h), i && n.context.stroke(i);
        break;
    case "polygon":
        S = e.getAttribute("points"), x = S.match(/-?\d+/g).map(function (e) { return parseInt(e, 10); }), n.context.poly(x, !0), r && n.context.fill(r), i && n.context.stroke(i);
        break;
    case "polyline":
        S = e.getAttribute("points"), x = S.match(/-?\d+/g).map(function (e) { return parseInt(e, 10); }), n.context.poly(x, !1), i && n.context.stroke(i);
        break;
    case "g":
    case "svg": break;
    default: a.R("[SVG parser] <".concat(e.nodeName, "> elements unsupported"));
} l && (r = null); for (var e_29 = 0; e_29 < o.length; e_29++)
    ct(o[e_29], n, r, i); }
function lt() { return (lt = e.n((function () { a.L(), We(), Xe(), tt(), ot(), t.br(); })))(); }
function ut(e) { return e.texture !== void 0; }
var dt, ft;
function pt() { return (pt = e.n((function () { i.x(), a.Y(), dt = { repeat: { addressModeU: "repeat", addressModeV: "repeat" }, "repeat-x": { addressModeU: "repeat", addressModeV: "clamp-to-edge" }, "repeat-y": { addressModeU: "clamp-to-edge", addressModeV: "repeat" }, "no-repeat": { addressModeU: "clamp-to-edge", addressModeV: "clamp-to-edge" } }, ft = (function () {
    function ft(e, t) {
        var n;
        this.uid = a.X("fillPattern"), this._tick = 0, this.transform = new i.b;
        var r = ut(e) ? e : { texture: e, repetition: t };
        this.texture = r.texture, this.textureSpace = (n = r.textureSpace) == null ? "global" : n;
        var o = r.repetition;
        o && (this.texture.source.style.addressModeU = dt[o].addressModeU, this.texture.source.style.addressModeV = dt[o].addressModeV);
    }
    ft.prototype.setTransform = function (e) { if (e) {
        if (this.transform.equals(e))
            return;
        this.transform.copyFrom(e);
    }
    else {
        if (this.transform.isIdentity())
            return;
        this.transform.identity();
    } this._tick++; };
    Object.defineProperty(ft.prototype, "texture", {
        get: function () { return this._texture; },
        set: function (e) { this._texture !== e && (this._texture = e, this._tick++); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ft.prototype, "styleKey", {
        get: function () { return "fill-pattern-".concat(this.uid, "-").concat(this._tick); },
        enumerable: false,
        configurable: true
    });
    ft.prototype.destroy = function () { this.texture.destroy(!0), this.texture = null; };
    return ft;
}()); })))(); }
function mt(e) { return r.z.isColorLike(e); }
function ht(e) { return e instanceof ft; }
function gt(e) { return e instanceof z; }
function _t(e) { return e instanceof o.gt; }
function vt(e, n, i) { var a = r.z.shared.setValue(n == null ? 0 : n); return e.color = a.toNumber(), e.alpha = a.alpha === 1 ? i.alpha : a.alpha, e.texture = o.gt.WHITE, t.yr(t.yr({}, i), e); }
function yt(e, n, r) { return e.texture = n, t.yr(t.yr({}, r), e); }
function bt(e, n, r) { return e.fill = n, e.color = 16777215, e.texture = n.texture, e.matrix = n.transform, e.textureSpace = n.textureSpace, t.yr(t.yr({}, r), e); }
function xt(e, n, r) { return n.buildGradient(), e.fill = n, e.color = 16777215, e.texture = n.texture, e.matrix = n.transform, e.textureSpace = n.textureSpace, t.yr(t.yr({}, r), e); }
function St(e, n) { var i = t.yr(t.yr({}, n), e), a = r.z.shared.setValue(i.color); return i.alpha *= a.alpha, i.color = a.toNumber(), i; }
function Q(e, t) { if (e == null)
    return null; var n = {}, r = e; return mt(e) ? vt(n, e, t) : _t(e) ? yt(n, e, t) : ht(e) ? bt(n, e, t) : gt(e) ? xt(n, e, t) : r.fill && ht(r.fill) ? bt(r, r.fill, t) : r.fill && gt(r.fill) ? xt(r, r.fill, t) : St(r, t); }
function Ct(e, r) { var i = r.width, a = r.alignment, o = r.miterLimit, s = r.cap, c = r.join, l = r.pixelLine, u = Q(e, n.a(r, wt)); return u ? t.yr({ width: i, alignment: a, miterLimit: o, cap: s, join: c, pixelLine: l }, u) : null; }
var wt;
function Tt() { return (Tt = e.n((function () { r.B(), o._t(), B(), pt(), t.br(), n.o(), wt = ["width", "alignment", "miterLimit", "cap", "join", "pixelLine"]; })))(); }
function Et(e, t) { var n = 1, r = e.shapePath.shapePrimitives; for (var e_30 = 0; e_30 < r.length; e_30++) {
    var i_13 = r[e_30].shape;
    if (i_13.type !== "polygon")
        continue;
    var a_12 = i_13.points, o_10 = a_12.length;
    if (o_10 < 6)
        continue;
    var s_10 = i_13.closePath;
    for (var e_31 = 0; e_31 < o_10; e_31 += 2) {
        if (!s_10 && (e_31 === 0 || e_31 === o_10 - 2))
            continue;
        var r_20 = (e_31 - 2 + o_10) % o_10, i_14 = (e_31 + 2) % o_10, c_6 = a_12[r_20], l_9 = a_12[r_20 + 1], u_7 = a_12[e_31], d_7 = a_12[e_31 + 1], f_7 = a_12[i_14], p_7 = a_12[i_14 + 1], m_5 = c_6 - u_7, h_6 = l_9 - d_7, g_6 = f_7 - u_7, _6 = p_7 - d_7, v_4 = m_5 * m_5 + h_6 * h_6, y_4 = g_6 * g_6 + _6 * _6;
        if (v_4 < 1e-12 || y_4 < 1e-12)
            continue;
        var b_3 = (m_5 * g_6 + h_6 * _6) / Math.sqrt(v_4 * y_4);
        b_3 < -1 ? b_3 = -1 : b_3 > 1 && (b_3 = 1);
        var x_2 = Math.sqrt((1 - b_3) * .5);
        if (x_2 < 1e-6)
            continue;
        var S_3 = Math.min(1 / x_2, t);
        S_3 > n && (n = S_3);
    }
} return n; }
var Dt, Ot, kt, $;
function At() { return (At = e.n((function () { n.i(), r.B(), i.x(), i.C(), o._t(), a.Y(), a.W(), s.M(), We(), lt(), Tt(), t.br(), Dt = new i.S, Ot = new i.b, kt = (function (_super) {
    __extends(e, _super);
    function e() {
        var _this = this;
        _this = _super.apply(this, arguments) || this, _this._gpuData = Object.create(null), _this.autoGarbageCollect = !0, _this._gcLastUsed = -1, _this.uid = a.X("graphicsContext"), _this.dirty = !0, _this.batchMode = "auto", _this.instructions = [], _this.destroyed = !1, _this._activePath = new Y, _this._transform = new i.b, _this._fillStyle = t.yr({}, e.defaultFillStyle), _this._strokeStyle = t.yr({}, e.defaultStrokeStyle), _this._stateStack = [], _this._tick = 0, _this._bounds = new s.j, _this._boundsDirty = !0;
        return _this;
    }
    e.prototype.clone = function () { var n = new e; return n.batchMode = this.batchMode, n.instructions = this.instructions.slice(), n._activePath = this._activePath.clone(), n._transform = this._transform.clone(), n._fillStyle = t.yr({}, this._fillStyle), n._strokeStyle = t.yr({}, this._strokeStyle), n._stateStack = this._stateStack.slice(), n._bounds = this._bounds.clone(), n._boundsDirty = !0, n; };
    Object.defineProperty(e.prototype, "fillStyle", {
        get: function () { return this._fillStyle; },
        set: function (t) { this._fillStyle = Q(t, e.defaultFillStyle); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "strokeStyle", {
        get: function () { return this._strokeStyle; },
        set: function (t) { this._strokeStyle = Ct(t, e.defaultStrokeStyle); },
        enumerable: false,
        configurable: true
    });
    e.prototype.setFillStyle = function (t) { return this._fillStyle = Q(t, e.defaultFillStyle), this; };
    e.prototype.setStrokeStyle = function (t) { return this._strokeStyle = Q(t, e.defaultStrokeStyle), this; };
    e.prototype.texture = function (e, t, n, i, a, o) { return this.instructions.push({ action: "texture", data: { image: e, dx: n || 0, dy: i || 0, dw: a || e.frame.width, dh: o || e.frame.height, transform: this._transform.clone(), alpha: this._fillStyle.alpha, style: t || t === 0 ? r.z.shared.setValue(t).toNumber() : 16777215 } }), this.onUpdate(), this; };
    e.prototype.beginPath = function () { return this._activePath = new Y, this; };
    e.prototype.fill = function (t, n) { var r, i = this.instructions[this.instructions.length - 1]; return r = this._tick === 0 && (i == null ? void 0 : i.action) === "stroke" ? i.data.path : this._activePath.clone(), r && (t != null && (n !== void 0 && typeof t == "number" && (a.U(a.G, "GraphicsContext.fill(color, alpha) is deprecated, use GraphicsContext.fill({ color, alpha }) instead"), t = { color: t, alpha: n }), this._fillStyle = Q(t, e.defaultFillStyle)), this.instructions.push({ action: "fill", data: { style: this.fillStyle, path: r } }), this.onUpdate(), this._initNextPathLocation(), this._tick = 0), this; };
    e.prototype._initNextPathLocation = function () { var _a = this._activePath.getLastPoint(i.S.shared), e = _a.x, t = _a.y; this._activePath.clear(), this._activePath.moveTo(e, t); };
    e.prototype.stroke = function (t) { var n, r = this.instructions[this.instructions.length - 1]; return n = this._tick === 0 && (r == null ? void 0 : r.action) === "fill" ? r.data.path : this._activePath.clone(), n && (t != null && (this._strokeStyle = Ct(t, e.defaultStrokeStyle)), this.instructions.push({ action: "stroke", data: { style: this.strokeStyle, path: n } }), this.onUpdate(), this._initNextPathLocation(), this._tick = 0), this; };
    e.prototype.cut = function () { for (var e_32 = 0; e_32 < 2; e_32++) {
        var t_30 = this.instructions[this.instructions.length - 1 - e_32], n_23 = this._activePath.clone();
        if (t_30 && (t_30.action === "stroke" || t_30.action === "fill")) {
            if (t_30.data.hole)
                t_30.data.hole.addPath(n_23);
            else {
                t_30.data.hole = n_23;
                break;
            }
        }
    } return this._initNextPathLocation(), this; };
    e.prototype.arc = function (e, t, n, r, i, a) { this._tick++; var o = this._transform; return this._activePath.arc(o.a * e + o.c * t + o.tx, o.b * e + o.d * t + o.ty, n, r, i, a), this; };
    e.prototype.arcTo = function (e, t, n, r, i) { this._tick++; var a = this._transform; return this._activePath.arcTo(a.a * e + a.c * t + a.tx, a.b * e + a.d * t + a.ty, a.a * n + a.c * r + a.tx, a.b * n + a.d * r + a.ty, i), this; };
    e.prototype.arcToSvg = function (e, t, n, r, i, a, o) { this._tick++; var s = this._transform; return this._activePath.arcToSvg(e, t, n, r, i, s.a * a + s.c * o + s.tx, s.b * a + s.d * o + s.ty), this; };
    e.prototype.bezierCurveTo = function (e, t, n, r, i, a, o) { this._tick++; var s = this._transform; return this._activePath.bezierCurveTo(s.a * e + s.c * t + s.tx, s.b * e + s.d * t + s.ty, s.a * n + s.c * r + s.tx, s.b * n + s.d * r + s.ty, s.a * i + s.c * a + s.tx, s.b * i + s.d * a + s.ty, o), this; };
    e.prototype.closePath = function () { var e; return this._tick++, (e = this._activePath) == null || e.closePath(), this; };
    e.prototype.ellipse = function (e, t, n, r) { return this._tick++, this._activePath.ellipse(e, t, n, r, this._transform.clone()), this; };
    e.prototype.circle = function (e, t, n) { return this._tick++, this._activePath.circle(e, t, n, this._transform.clone()), this; };
    e.prototype.path = function (e) { return this._tick++, this._activePath.addPath(e, this._transform.clone()), this; };
    e.prototype.lineTo = function (e, t) { this._tick++; var n = this._transform; return this._activePath.lineTo(n.a * e + n.c * t + n.tx, n.b * e + n.d * t + n.ty), this; };
    e.prototype.moveTo = function (e, t) { this._tick++; var n = this._transform, r = this._activePath.instructions, i = n.a * e + n.c * t + n.tx, a = n.b * e + n.d * t + n.ty; return r.length === 1 && r[0].action === "moveTo" ? (r[0].data[0] = i, r[0].data[1] = a, this) : (this._activePath.moveTo(i, a), this); };
    e.prototype.quadraticCurveTo = function (e, t, n, r, i) { this._tick++; var a = this._transform; return this._activePath.quadraticCurveTo(a.a * e + a.c * t + a.tx, a.b * e + a.d * t + a.ty, a.a * n + a.c * r + a.tx, a.b * n + a.d * r + a.ty, i), this; };
    e.prototype.rect = function (e, t, n, r) { return this._tick++, this._activePath.rect(e, t, n, r, this._transform.clone()), this; };
    e.prototype.roundRect = function (e, t, n, r, i) { return this._tick++, this._activePath.roundRect(e, t, n, r, i, this._transform.clone()), this; };
    e.prototype.poly = function (e, t) { return this._tick++, this._activePath.poly(e, t, this._transform.clone()), this; };
    e.prototype.regularPoly = function (e, t, n, r, i, a) {
        if (i === void 0) { i = 0; }
        return this._tick++, this._activePath.regularPoly(e, t, n, r, i, a), this;
    };
    e.prototype.roundPoly = function (e, t, n, r, i, a) { return this._tick++, this._activePath.roundPoly(e, t, n, r, i, a), this; };
    e.prototype.roundShape = function (e, t, n, r) { return this._tick++, this._activePath.roundShape(e, t, n, r), this; };
    e.prototype.filletRect = function (e, t, n, r, i) { return this._tick++, this._activePath.filletRect(e, t, n, r, i), this; };
    e.prototype.chamferRect = function (e, t, n, r, i, a) { return this._tick++, this._activePath.chamferRect(e, t, n, r, i, a), this; };
    e.prototype.star = function (e, t, n, r, i, a) {
        if (i === void 0) { i = 0; }
        if (a === void 0) { a = 0; }
        return this._tick++, this._activePath.star(e, t, n, r, i, a, this._transform.clone()), this;
    };
    e.prototype.svg = function (e) { return this._tick++, st(e, this), this; };
    e.prototype.restore = function () { var e = this._stateStack.pop(); return e && (this._transform = e.transform, this._fillStyle = e.fillStyle, this._strokeStyle = e.strokeStyle), this; };
    e.prototype.save = function () { return this._stateStack.push({ transform: this._transform.clone(), fillStyle: t.yr({}, this._fillStyle), strokeStyle: t.yr({}, this._strokeStyle) }), this; };
    e.prototype.getTransform = function () { return this._transform; };
    e.prototype.resetTransform = function () { return this._transform.identity(), this; };
    e.prototype.rotate = function (e) { return this._transform.rotate(e), this; };
    e.prototype.scale = function (e, t) {
        if (t === void 0) { t = e; }
        return this._transform.scale(e, t), this;
    };
    e.prototype.setTransform = function (e, t, n, r, a, o) { return e instanceof i.b ? (this._transform.set(e.a, e.b, e.c, e.d, e.tx, e.ty), this) : (this._transform.set(e, t, n, r, a, o), this); };
    e.prototype.transform = function (e, t, n, r, a, o) { return e instanceof i.b ? (this._transform.append(e), this) : (Ot.set(e, t, n, r, a, o), this._transform.append(Ot), this); };
    e.prototype.translate = function (e, t) {
        if (t === void 0) { t = e; }
        return this._transform.translate(e, t), this;
    };
    e.prototype.clear = function () { return this._activePath.clear(), this.instructions.length = 0, this.resetTransform(), this.onUpdate(), this; };
    e.prototype.onUpdate = function () { this._boundsDirty = !0, this.dirty = !0, this.emit("update", this, 16); };
    Object.defineProperty(e.prototype, "bounds", {
        get: function () { if (!this._boundsDirty)
            return this._bounds; this._boundsDirty = !1; var e = this._bounds; e.clear(); for (var t_31 = 0; t_31 < this.instructions.length; t_31++) {
            var n_24 = this.instructions[t_31], r_21 = n_24.action;
            if (r_21 === "fill") {
                var t_32 = n_24.data;
                e.addBounds(t_32.path.bounds);
            }
            else if (r_21 === "texture") {
                var t_33 = n_24.data;
                e.addFrame(t_33.dx, t_33.dy, t_33.dx + t_33.dw, t_33.dy + t_33.dh, t_33.transform);
            }
            if (r_21 === "stroke") {
                var t_34 = n_24.data, r_22 = t_34.style.alignment, i_15 = t_34.style.width * (1 - r_22);
                t_34.style.join === "miter" && (i_15 *= Et(t_34.path, t_34.style.miterLimit));
                var a_13 = t_34.path.bounds;
                e.addFrame(a_13.minX - i_15, a_13.minY - i_15, a_13.maxX + i_15, a_13.maxY + i_15);
            }
        } return e.isValid || e.set(0, 0, 0, 0), e; },
        enumerable: false,
        configurable: true
    });
    e.prototype.containsPoint = function (e) { if (!this.bounds.containsPoint(e.x, e.y))
        return !1; var t = this.instructions, n = !1; for (var i_16 = 0; i_16 < t.length; i_16++) {
        var a_14 = t[i_16], o_11 = a_14.data, s_11 = o_11.path;
        if (!a_14.action || !s_11)
            continue;
        var c_7 = o_11.style, l_10 = s_11.shapePath.shapePrimitives;
        for (var t_35 = 0; t_35 < l_10.length; t_35++) {
            var i_17 = l_10[t_35].shape;
            if (!c_7 || !i_17)
                continue;
            var s_12 = l_10[t_35].transform, u_8 = s_12 ? s_12.applyInverse(e, Dt) : e;
            if (a_14.action === "fill")
                n = i_17.contains(u_8.x, u_8.y);
            else {
                var e_33 = c_7;
                n = i_17.strokeContains(u_8.x, u_8.y, e_33.width, e_33.alignment);
            }
            var d_8 = o_11.hole;
            if (d_8) {
                var r;
                var e_34 = (r = d_8.shapePath) == null ? void 0 : r.shapePrimitives;
                if (e_34)
                    for (var t_36 = 0; t_36 < e_34.length; t_36++)
                        e_34[t_36].shape.contains(u_8.x, u_8.y) && (n = !1);
            }
            if (n)
                return !0;
        }
    } return n; };
    e.prototype.unload = function () { this.emit("unload", this); for (var t_37 in this._gpuData) {
        var e;
        (e = this._gpuData[t_37]) == null || e.destroy();
    } this._gpuData = Object.create(null); };
    e.prototype.destroy = function (e) {
        if (e === void 0) { e = !1; }
        if (!this.destroyed) {
            if (this.destroyed = !0, this._stateStack.length = 0, this._transform = null, this.unload(), this.emit("destroy", this), this.removeAllListeners(), typeof e == "boolean" ? e : e != null && e.texture) {
                var t_38 = typeof e == "boolean" ? e : e == null ? void 0 : e.textureSource;
                this._fillStyle.texture && (this._fillStyle.fill && "uid" in this._fillStyle.fill ? this._fillStyle.fill.destroy() : this._fillStyle.texture.destroy(t_38)), this._strokeStyle.texture && (this._strokeStyle.fill && "uid" in this._strokeStyle.fill ? this._strokeStyle.fill.destroy() : this._strokeStyle.texture.destroy(t_38));
            }
            this._fillStyle = null, this._strokeStyle = null, this.instructions = null, this._activePath = null, this._bounds = null, this._stateStack = null, this.customShader = null, this._transform = null;
        }
    };
    return e;
}(n.r)), kt.defaultFillStyle = { color: 16777215, alpha: 1, texture: o.gt.WHITE, matrix: null, fill: null, textureSpace: "local" }, kt.defaultStrokeStyle = { width: 1, color: 16777215, alpha: 1, alignment: .5, miterLimit: 10, cap: "butt", join: "miter", texture: o.gt.WHITE, matrix: null, fill: null, textureSpace: "local", pixelLine: !1 }, $ = kt; })))(); }
var jt, Mt;
function Nt() { return (Nt = e.n((function () { r.q(), o.K(), a.f(), a.P(), m(), jt = (function () {
    function jt() {
        this.batches = [], this.batched = !1;
    }
    jt.prototype.destroy = function () { this.batches.forEach(function (e) { a.N.return(e); }), this.batches.length = 0; };
    return jt;
}()), Mt = (function () {
    function Mt(e, t) {
        this.state = o.G.for2d(), this.renderer = e, this._adaptor = t, this.renderer.runners.contextChange.add(this), this._managedGraphics = new a.d({ renderer: e, type: "renderable", priority: -1, name: "graphics" });
    }
    Mt.prototype.contextChange = function () { this._adaptor.contextChange(this.renderer); };
    Mt.prototype.validateRenderable = function (e) { var t = e.context, n = !!e._gpuData, r = this.renderer.graphicsContext.updateGpuContext(t); return !!(r.isBatchable || n !== r.isBatchable); };
    Mt.prototype.addRenderable = function (e, t) { var n = this.renderer.graphicsContext.updateGpuContext(e.context); (e.didViewUpdate || !e._gpuData[this.renderer.uid]) && this._rebuild(e), n.isBatchable ? this._addToBatcher(e, t) : (this.renderer.renderPipes.batch.break(t), t.add(e)); };
    Mt.prototype.updateRenderable = function (e) { var t = this._getGpuDataForRenderable(e).batches; for (var e_35 = 0; e_35 < t.length; e_35++) {
        var n_25 = t[e_35];
        n_25._batcher.updateElement(n_25);
    } };
    Mt.prototype.execute = function (e) { if (!e.isRenderable)
        return; var t = this.renderer, n = e.context; if (!t.graphicsContext.getGpuContext(n).batches.length)
        return; var r = n.customShader || this._adaptor.shader; this.state.blendMode = e.groupBlendMode; var i = r.resources.localUniforms.uniforms; i.uTransformMatrix = e.groupTransform, i.uRound = t._roundPixels | e._roundPixels, s.u(e.groupColorAlpha, i.uColor, 0), this._adaptor.execute(this, e); };
    Mt.prototype._rebuild = function (e) { var t = this._getGpuDataForRenderable(e), n = this.renderer.graphicsContext.updateGpuContext(e.context); t.destroy(), n.isBatchable && this._updateBatchesForRenderable(e, t); };
    Mt.prototype._addToBatcher = function (e, t) { var n = this.renderer.renderPipes.batch, r = this._getGpuDataForRenderable(e).batches; for (var e_36 = 0; e_36 < r.length; e_36++) {
        var i_18 = r[e_36];
        n.addToBatch(i_18, t);
    } };
    Mt.prototype._getGpuDataForRenderable = function (e) { return e._gpuData[this.renderer.uid] || this._initGpuDataForRenderable(e); };
    Mt.prototype._initGpuDataForRenderable = function (e) { var t = new jt; return e._gpuData[this.renderer.uid] = t, this._managedGraphics.add(e), t; };
    Mt.prototype._updateBatchesForRenderable = function (e, t) { var n = e.context, r = this.renderer.graphicsContext.getGpuContext(n), i = this.renderer._roundPixels | e._roundPixels; t.batches = r.batches.map(function (t) { var n = a.N.get(p); return t.copyTo(n), n.renderable = e, n.roundPixels = i, n; }); };
    Mt.prototype.destroy = function () { this._managedGraphics.destroy(), this.renderer = null, this._adaptor.destroy(), this._adaptor = null, this.state = null; };
    return Mt;
}()), Mt.extension = { type: [r.G.WebGLPipes, r.G.WebGPUPipes], name: "graphics" }; })))(); }
var Pt, Ft;
function It() { return (It = e.n((function () { a.W(), c.k(), At(), s.l(), n.o(), t.br(), Pt = ["context", "roundPixels"], Ft = (function (_super) {
    __extends(e, _super);
    function e(e) {
        var _this = this;
        e instanceof $ && (e = { context: e });
        var r = e || {}, i = r.context, a = r.roundPixels, o = n.a(r, Pt);
        _this = _super.call(this, t.yr({ label: "Graphics" }, o)) || this, _this.renderPipeId = "graphics", i ? _this.context = i : (_this.context = _this._ownedContext = new $, _this.context.autoGarbageCollect = _this.autoGarbageCollect), _this.didViewUpdate = !0, _this.allowChildren = !1, _this.roundPixels = a != null && a;
        return _this;
    }
    Object.defineProperty(e.prototype, "context", {
        get: function () { return this._context; },
        set: function (e) { e !== this._context && (this._context && (this._context.off("update", this.onViewUpdate, this), this._context.off("unload", this.unload, this)), this._context = e, this._context.on("update", this.onViewUpdate, this), this._context.on("unload", this.unload, this), this.onViewUpdate()); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "bounds", {
        get: function () { return this._context.bounds; },
        enumerable: false,
        configurable: true
    });
    e.prototype.updateBounds = function () { };
    e.prototype.containsPoint = function (e) { return this._context.containsPoint(e); };
    e.prototype.destroy = function (e) { var t, n; this._ownedContext && !e ? this._ownedContext.destroy(e) : (e === !0 || (e == null ? void 0 : e.context) === !0) && this._context.destroy(e), (t = this._context) == null || t.off("update", this.onViewUpdate, this), (n = this._context) == null || n.off("unload", this.unload, this), this._ownedContext = null, this._context = null, _super.prototype.destroy.call(this, e); };
    e.prototype._onTouch = function (e) { this._gcLastUsed = e, this._context._gcLastUsed = e; };
    e.prototype._callContextMethod = function (e, t) {
        var _a;
        return (_a = this.context)[e].apply(_a, t), this;
    };
    e.prototype.setFillStyle = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return this._callContextMethod("setFillStyle", e);
    };
    e.prototype.setStrokeStyle = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return this._callContextMethod("setStrokeStyle", e);
    };
    e.prototype.fill = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return this._callContextMethod("fill", e);
    };
    e.prototype.stroke = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return this._callContextMethod("stroke", e);
    };
    e.prototype.texture = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return this._callContextMethod("texture", e);
    };
    e.prototype.beginPath = function () { return this._callContextMethod("beginPath", []); };
    e.prototype.cut = function () { return this._callContextMethod("cut", []); };
    e.prototype.arc = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return this._callContextMethod("arc", e);
    };
    e.prototype.arcTo = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return this._callContextMethod("arcTo", e);
    };
    e.prototype.arcToSvg = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return this._callContextMethod("arcToSvg", e);
    };
    e.prototype.bezierCurveTo = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return this._callContextMethod("bezierCurveTo", e);
    };
    e.prototype.closePath = function () { return this._callContextMethod("closePath", []); };
    e.prototype.ellipse = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return this._callContextMethod("ellipse", e);
    };
    e.prototype.circle = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return this._callContextMethod("circle", e);
    };
    e.prototype.path = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return this._callContextMethod("path", e);
    };
    e.prototype.lineTo = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return this._callContextMethod("lineTo", e);
    };
    e.prototype.moveTo = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return this._callContextMethod("moveTo", e);
    };
    e.prototype.quadraticCurveTo = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return this._callContextMethod("quadraticCurveTo", e);
    };
    e.prototype.rect = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return this._callContextMethod("rect", e);
    };
    e.prototype.roundRect = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return this._callContextMethod("roundRect", e);
    };
    e.prototype.poly = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return this._callContextMethod("poly", e);
    };
    e.prototype.regularPoly = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return this._callContextMethod("regularPoly", e);
    };
    e.prototype.roundPoly = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return this._callContextMethod("roundPoly", e);
    };
    e.prototype.roundShape = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return this._callContextMethod("roundShape", e);
    };
    e.prototype.filletRect = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return this._callContextMethod("filletRect", e);
    };
    e.prototype.chamferRect = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return this._callContextMethod("chamferRect", e);
    };
    e.prototype.star = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return this._callContextMethod("star", e);
    };
    e.prototype.svg = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return this._callContextMethod("svg", e);
    };
    e.prototype.restore = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return this._callContextMethod("restore", e);
    };
    e.prototype.save = function () { return this._callContextMethod("save", []); };
    e.prototype.getTransform = function () { return this.context.getTransform(); };
    e.prototype.resetTransform = function () { return this._callContextMethod("resetTransform", []); };
    e.prototype.rotateTransform = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return this._callContextMethod("rotate", e);
    };
    e.prototype.scaleTransform = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return this._callContextMethod("scale", e);
    };
    e.prototype.setTransform = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return this._callContextMethod("setTransform", e);
    };
    e.prototype.transform = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return this._callContextMethod("transform", e);
    };
    e.prototype.translateTransform = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return this._callContextMethod("translate", e);
    };
    e.prototype.clear = function () { return this._callContextMethod("clear", []); };
    Object.defineProperty(e.prototype, "fillStyle", {
        get: function () { return this._context.fillStyle; },
        set: function (e) { this._context.fillStyle = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "strokeStyle", {
        get: function () { return this._context.strokeStyle; },
        set: function (e) { this._context.strokeStyle = e; },
        enumerable: false,
        configurable: true
    });
    e.prototype.clone = function (t) {
        if (t === void 0) { t = !1; }
        return t ? new e(this._context.clone()) : (this._ownedContext = null, new e(this._context));
    };
    e.prototype.lineStyle = function (e, t, n) { a.U(a.G, "Graphics#lineStyle is no longer needed. Use Graphics#setStrokeStyle to set the stroke style."); var r = {}; return e && (r.width = e), t && (r.color = t), n && (r.alpha = n), this.context.strokeStyle = r, this; };
    e.prototype.beginFill = function (e, t) { a.U(a.G, "Graphics#beginFill is no longer needed. Use Graphics#fill to fill the shape with the desired style."); var n = {}; return e !== void 0 && (n.color = e), t !== void 0 && (n.alpha = t), this.context.fillStyle = n, this; };
    e.prototype.endFill = function () { a.U(a.G, "Graphics#endFill is no longer needed. Use Graphics#fill to fill the shape with the desired style."), this.context.fill(); var e = this.context.strokeStyle; return (e.width !== $.defaultStrokeStyle.width || e.color !== $.defaultStrokeStyle.color || e.alpha !== $.defaultStrokeStyle.alpha) && this.context.stroke(), this; };
    e.prototype.drawCircle = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return a.U(a.G, "Graphics#drawCircle has been renamed to Graphics#circle"), this._callContextMethod("circle", e);
    };
    e.prototype.drawEllipse = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return a.U(a.G, "Graphics#drawEllipse has been renamed to Graphics#ellipse"), this._callContextMethod("ellipse", e);
    };
    e.prototype.drawPolygon = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return a.U(a.G, "Graphics#drawPolygon has been renamed to Graphics#poly"), this._callContextMethod("poly", e);
    };
    e.prototype.drawRect = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return a.U(a.G, "Graphics#drawRect has been renamed to Graphics#rect"), this._callContextMethod("rect", e);
    };
    e.prototype.drawRoundedRect = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return a.U(a.G, "Graphics#drawRoundedRect has been renamed to Graphics#roundRect"), this._callContextMethod("roundRect", e);
    };
    e.prototype.drawStar = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return a.U(a.G, "Graphics#drawStar has been renamed to Graphics#star"), this._callContextMethod("star", e);
    };
    return e;
}(c.O)); })))(); }
Object.defineProperty(exports, "a", { enumerable: !0, get: function () { return $; } }), Object.defineProperty(exports, "c", { enumerable: !0, get: function () { return Q; } }), Object.defineProperty(exports, "d", { enumerable: !0, get: function () { return pt; } }), Object.defineProperty(exports, "f", { enumerable: !0, get: function () { return U; } }), Object.defineProperty(exports, "h", { enumerable: !0, get: function () { return B; } }), Object.defineProperty(exports, "i", { enumerable: !0, get: function () { return Nt; } }), Object.defineProperty(exports, "l", { enumerable: !0, get: function () { return Ct; } }), Object.defineProperty(exports, "m", { enumerable: !0, get: function () { return z; } }), Object.defineProperty(exports, "n", { enumerable: !0, get: function () { return It; } }), Object.defineProperty(exports, "o", { enumerable: !0, get: function () { return At; } }), Object.defineProperty(exports, "p", { enumerable: !0, get: function () { return W; } }), Object.defineProperty(exports, "r", { enumerable: !0, get: function () { return Mt; } }), Object.defineProperty(exports, "s", { enumerable: !0, get: function () { return Tt; } }), Object.defineProperty(exports, "t", { enumerable: !0, get: function () { return Ft; } }), Object.defineProperty(exports, "u", { enumerable: !0, get: function () { return ft; } });
