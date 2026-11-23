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
var e = require("./rolldown-runtime-8PkXcCTM.js"), t = require("./sapling-engine-OS5i6gdH.js"), n = require("./sapling-engine-Dk_0uYx9.js"), r = require("./sapling-engine-nIouhjEF.js"), i = require("./sapling-engine-BKSSueUl.js"), a = require("./sapling-engine-sX7qVz9U.js"), o = require("./sapling-engine-DdkTJwUg.js"), s = require("./sapling-engine-BIAzTs9D.js"), c = require("./sapling-engine-DRXIDWb4.js");
function l(e, t) { var r = n.g(e), a = [], o = null, s = 0, c = 0; for (var e_1 = 0; e_1 < r.length; e_1++) {
    var n_1 = r[e_1], l_1 = n_1[0], u_1 = n_1;
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
            t.closePath(), a.length > 0 && (o = a.pop(), o ? (s = o.startX, c = o.startY) : (s = 0, c = 0)), o = null;
            break;
        default: i.R("Unknown SVG path command: ".concat(l_1));
    }
    l_1 !== "Z" && l_1 !== "z" && o === null && (o = { startX: s, startY: c }, a.push(o));
} return t; }
function u() { return (u = e.n((function () { n.h(), i.L(); })))(); }
var d, f;
function p() { return (p = e.n((function () { r.x(), d = new r.b, f = (function () {
    function f() {
        this.packAsQuad = !1, this.batcherName = "default", this.topology = "triangle-list", this.applyTransform = !0, this.roundPixels = 0, this._batcher = null, this._batch = null;
    }
    Object.defineProperty(f.prototype, "uvs", {
        get: function () { return this.geometryData.uvs; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(f.prototype, "positions", {
        get: function () { return this.geometryData.vertices; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(f.prototype, "indices", {
        get: function () { return this.geometryData.indices; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(f.prototype, "blendMode", {
        get: function () { return this.renderable && this.applyTransform ? this.renderable.groupBlendMode : "normal"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(f.prototype, "color", {
        get: function () { var e = this.baseColor, t = e >> 16 | e & 65280 | (e & 255) << 16, n = this.renderable; return n ? o.T(t, n.groupColor) + (this.alpha * n.groupAlpha * 255 << 24) : t + (this.alpha * 255 << 24); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(f.prototype, "transform", {
        get: function () { var e; return ((e = this.renderable) == null ? void 0 : e.groupTransform) || d; },
        enumerable: false,
        configurable: true
    });
    f.prototype.copyTo = function (e) { e.indexOffset = this.indexOffset, e.indexSize = this.indexSize, e.attributeOffset = this.attributeOffset, e.attributeSize = this.attributeSize, e.baseColor = this.baseColor, e.alpha = this.alpha, e.texture = this.texture, e.geometryData = this.geometryData, e.topology = this.topology; };
    f.prototype.reset = function () { this.applyTransform = !0, this.renderable = null, this.topology = "triangle-list"; };
    f.prototype.destroy = function () { this.renderable = null, this.texture = null, this.geometryData = null, this._batcher = null, this._batch = null; };
    return f;
}()); })))(); }
var m, h, g;
function _() { return (_ = e.n((function () { n.Y(), t.o(), m = { extension: { type: n.q.ShapeBuilder, name: "circle" }, build: function (e, t) { var n, r, i, a, o, s; if (e.type === "circle") {
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
        o += e[t_4], s += e[t_4 + 1]; o /= e.length / 2, s /= e.length / 2; var c = r; t[c * n] = o, t[c * n + 1] = s; var l = c++; for (var r_1 = 0; r_1 < e.length; r_1 += 2)
        t[c * n] = e[r_1], t[c * n + 1] = e[r_1 + 1], r_1 > 0 && (i[a++] = c, i[a++] = l, i[a++] = c - 1), c++; i[a++] = l + 1, i[a++] = l, i[a++] = c - 1; } }, h = t.a(t.a({}, m), {}, { extension: t.a(t.a({}, m.extension), {}, { name: "ellipse" }) }), g = t.a(t.a({}, m), {}, { extension: t.a(t.a({}, m.extension), {}, { name: "roundedRectangle" }) }); })))(); }
var v, y;
function b() { return (b = e.n((function () { v = 1e-4, y = 1e-4; })))(); }
function x(e, t, n, r, i, a, o, s) { var c = e - n * i, l = t - r * i, u = e + n * a, d = t + r * a, f, p; o ? (f = r, p = -n) : (f = -r, p = n); var m = c + f, h = l + p, g = u + f, _ = d + p; return s.push(m, h), s.push(g, _), 2; }
function S(e, t, n, r, i, a, o, s) { var c = n - e, l = r - t, u = Math.atan2(c, l), d = Math.atan2(i - e, a - t); s && u < d ? u += Math.PI * 2 : !s && u > d && (d += Math.PI * 2); var f = u, p = d - u, m = Math.abs(p), h = Math.sqrt(c * c + l * l), g = (15 * m * Math.sqrt(h) / Math.PI | 0) + 1, _ = p / g; if (f += _, s) {
    o.push(e, t), o.push(n, r);
    for (var n_2 = 1, r_2 = f; n_2 < g; n_2++, r_2 += _)
        o.push(e, t), o.push(e + Math.sin(r_2) * h, t + Math.cos(r_2) * h);
    o.push(e, t), o.push(i, a);
}
else {
    o.push(n, r), o.push(e, t);
    for (var n_3 = 1, r_3 = f; n_3 < g; n_3++, r_3 += _)
        o.push(e + Math.sin(r_3) * h, t + Math.cos(r_3) * h), o.push(e, t);
    o.push(i, a), o.push(e, t);
} return g * 2; }
function C(e, t, n, i, a, o) { var s = v; if (e.length === 0)
    return; var c = t, l = c.alignment; if (t.alignment !== .5) {
    var t_5 = r.s(e);
    n && (t_5 *= -1), l = (l - .5) * t_5 + .5;
} var u = new r.S(e[0], e[1]), d = new r.S(e[e.length - 2], e[e.length - 1]), f = i, p = Math.abs(u.x - d.x) < s && Math.abs(u.y - d.y) < s; if (f) {
    e = e.slice(), p && (e.pop(), e.pop(), d.set(e[e.length - 2], e[e.length - 1]));
    var t_6 = (u.x + d.x) * .5, n_4 = (d.y + u.y) * .5;
    e.unshift(t_6, n_4), e.push(t_6, n_4);
} var m = a, h = e.length / 2, g = e.length, _ = m.length / 2, b = c.width / 2, C = b * b, w = c.miterLimit * c.miterLimit, T = e[0], E = e[1], D = e[2], O = e[3], k = 0, A = 0, j = -(E - O), M = T - D, N = 0, P = 0, F = Math.sqrt(j * j + M * M); j /= F, M /= F, j *= b, M *= b; var I = l, L = (1 - I) * 2, R = I * 2; f || (c.cap === "round" ? g += S(T - j * (L - R) * .5, E - M * (L - R) * .5, T - j * L, E - M * L, T + j * R, E + M * R, m, !0) + 2 : c.cap === "square" && (g += x(T, E, j, M, L, R, !0, m))), m.push(T - j * L, E - M * L), m.push(T + j * R, E + M * R); for (var t_7 = 1; t_7 < h - 1; ++t_7) {
    T = e[(t_7 - 1) * 2], E = e[(t_7 - 1) * 2 + 1], D = e[t_7 * 2], O = e[t_7 * 2 + 1], k = e[(t_7 + 1) * 2], A = e[(t_7 + 1) * 2 + 1], j = -(E - O), M = T - D, F = Math.sqrt(j * j + M * M), j /= F, M /= F, j *= b, M *= b, N = -(O - A), P = D - k, F = Math.sqrt(N * N + P * P), N /= F, P /= F, N *= b, P *= b;
    var n_5 = D - T, r_4 = E - O, i_1 = D - k, a_1 = A - O, o_1 = n_5 * i_1 + r_4 * a_1, s_1 = r_4 * i_1 - a_1 * n_5, l_4 = s_1 < 0;
    if (Math.abs(s_1) < .001 * Math.abs(o_1)) {
        m.push(D - j * L, O - M * L), m.push(D + j * R, O + M * R), o_1 >= 0 && (c.join === "round" ? g += S(D, O, D - j * L, O - M * L, D - N * L, O - P * L, m, !1) + 4 : g += 2, m.push(D - N * R, O - P * R), m.push(D + N * L, O + P * L));
        continue;
    }
    var u_2 = (-j + T) * (-M + O) - (-j + D) * (-M + E), d_1 = (-N + k) * (-P + O) - (-N + D) * (-P + A), f_1 = (n_5 * d_1 - i_1 * u_2) / s_1, p_1 = (a_1 * u_2 - r_4 * d_1) / s_1, h_2 = (f_1 - D) * (f_1 - D) + (p_1 - O) * (p_1 - O), _2 = D + (f_1 - D) * L, v_2 = O + (p_1 - O) * L, y_2 = D - (f_1 - D) * R, x_1 = O - (p_1 - O) * R, I_1 = Math.min(n_5 * n_5 + r_4 * r_4, i_1 * i_1 + a_1 * a_1), z_1 = l_4 ? L : R;
    h_2 <= I_1 + z_1 * z_1 * C ? c.join === "bevel" || h_2 / C > w ? (l_4 ? (m.push(_2, v_2), m.push(D + j * R, O + M * R), m.push(_2, v_2), m.push(D + N * R, O + P * R)) : (m.push(D - j * L, O - M * L), m.push(y_2, x_1), m.push(D - N * L, O - P * L), m.push(y_2, x_1)), g += 2) : c.join === "round" ? l_4 ? (m.push(_2, v_2), m.push(D + j * R, O + M * R), g += S(D, O, D + j * R, O + M * R, D + N * R, O + P * R, m, !0) + 4, m.push(_2, v_2), m.push(D + N * R, O + P * R)) : (m.push(D - j * L, O - M * L), m.push(y_2, x_1), g += S(D, O, D - j * L, O - M * L, D - N * L, O - P * L, m, !1) + 4, m.push(D - N * L, O - P * L), m.push(y_2, x_1)) : (m.push(_2, v_2), m.push(y_2, x_1)) : (m.push(D - j * L, O - M * L), m.push(D + j * R, O + M * R), c.join === "round" ? g += l_4 ? S(D, O, D + j * R, O + M * R, D + N * R, O + P * R, m, !0) + 2 : S(D, O, D - j * L, O - M * L, D - N * L, O - P * L, m, !1) + 2 : c.join === "miter" && h_2 / C <= w && (l_4 ? (m.push(y_2, x_1), m.push(y_2, x_1)) : (m.push(_2, v_2), m.push(_2, v_2)), g += 2), m.push(D - N * L, O - P * L), m.push(D + N * R, O + P * R), g += 2);
} T = e[(h - 2) * 2], E = e[(h - 2) * 2 + 1], D = e[(h - 1) * 2], O = e[(h - 1) * 2 + 1], j = -(E - O), M = T - D, F = Math.sqrt(j * j + M * M), j /= F, M /= F, j *= b, M *= b, m.push(D - j * L, O - M * L), m.push(D + j * R, O + M * R), f || (c.cap === "round" ? g += S(D - j * (L - R) * .5, O - M * (L - R) * .5, D - j * L, O - M * L, D + j * R, O + M * R, m, !1) + 2 : c.cap === "square" && (g += x(D, O, j, M, L, R, !1, m))); var z = y * y; for (var e_4 = _; e_4 < g + _ - 2; ++e_4)
    T = m[e_4 * 2], E = m[e_4 * 2 + 1], D = m[(e_4 + 1) * 2], O = m[(e_4 + 1) * 2 + 1], k = m[(e_4 + 2) * 2], A = m[(e_4 + 2) * 2 + 1], Math.abs(T * (O - A) + D * (A - E) + k * (E - O)) < z || o.push(e_4, e_4 + 1, e_4 + 2); }
function w() { return (w = e.n((function () { r.C(), b(); })))(); }
function T(e, t, n, r) { var i = v; if (e.length === 0)
    return; var a = e[0], o = e[1], s = e[e.length - 2], c = e[e.length - 1], l = t || Math.abs(a - s) < i && Math.abs(o - c) < i, u = n, d = e.length / 2, f = u.length / 2; for (var t_8 = 0; t_8 < d; t_8++)
    u.push(e[t_8 * 2]), u.push(e[t_8 * 2 + 1]); for (var e_5 = 0; e_5 < d - 1; e_5++)
    r.push(f + e_5, f + e_5 + 1); l && r.push(f + d - 1, f); }
function E() { return (E = e.n((function () { b(); })))(); }
function D(e, t, n, r, a, o, s) { var c = i._(e, t, 2); if (!c)
    return; for (var e_6 = 0; e_6 < c.length; e_6 += 3)
    o[s++] = c[e_6] + a, o[s++] = c[e_6 + 1] + a, o[s++] = c[e_6 + 2] + a; var l = a * r; for (var t_9 = 0; t_9 < e.length; t_9 += 2)
    n[l] = e[t_9], n[l + 1] = e[t_9 + 1], l += r; }
function O() { return (O = e.n((function () { i.v(); })))(); }
var k, A;
function j() { return (j = e.n((function () { n.Y(), O(), k = [], A = { extension: { type: n.q.ShapeBuilder, name: "polygon" }, build: function (e, t) { for (var n_6 = 0; n_6 < e.points.length; n_6++)
        t[n_6] = e.points[n_6]; return !0; }, triangulate: function (e, t, n, r, i, a) { D(e, k, t, n, r, i, a); } }; })))(); }
var M;
function N() { return (N = e.n((function () { n.Y(), M = { extension: { type: n.q.ShapeBuilder, name: "rectangle" }, build: function (e, t) { var n = e, r = n.x, i = n.y, a = n.width, o = n.height; return a > 0 && o > 0 && (t[0] = r, t[1] = i, t[2] = r + a, t[3] = i, t[4] = r + a, t[5] = i + o, t[6] = r, t[7] = i + o, !0); }, triangulate: function (e, t, n, r, i, a) { var o = 0; r *= n, t[r + o] = e[0], t[r + o + 1] = e[1], o += n, t[r + o] = e[2], t[r + o + 1] = e[3], o += n, t[r + o] = e[6], t[r + o + 1] = e[7], o += n, t[r + o] = e[4], t[r + o + 1] = e[5], o += n; var s = r / n; i[a++] = s, i[a++] = s + 1, i[a++] = s + 2, i[a++] = s + 1, i[a++] = s + 3, i[a++] = s + 2; } }; })))(); }
var P;
function F() { return (F = e.n((function () { n.Y(), P = { extension: { type: n.q.ShapeBuilder, name: "triangle" }, build: function (e, t) { return t[0] = e.x, t[1] = e.y, t[2] = e.x2, t[3] = e.y2, t[4] = e.x3, t[5] = e.y3, !0; }, triangulate: function (e, t, n, r, i, a) { var o = 0; r *= n, t[r + o] = e[0], t[r + o + 1] = e[1], o += n, t[r + o] = e[2], t[r + o + 1] = e[3], o += n, t[r + o] = e[4], t[r + o + 1] = e[5]; var s = r / n; i[a++] = s, i[a++] = s + 1, i[a++] = s + 2; } }; })))(); }
function I(e, t) { for (var n_7 = 0; n_7 < t.length; n_7++) {
    var r_5 = t[n_7];
    e.addColorStop(r_5.offset, r_5.color);
} }
function L(e, t) { var r = n.N.get().createCanvas(e, t); return { canvas: r, context: r.getContext("2d") }; }
function R(e) { var t; var n = (t = e[0]) == null ? {} : t; if (typeof n == "number" || e[1]) {
    var r;
    i.U("8.5.2", "use options object instead"), n = { type: "linear", start: { x: e[0], y: e[1] }, end: { x: e[2], y: e[3] }, textureSpace: e[4], textureSize: (r = e[5]) == null ? B.defaultLinearOptions.textureSize : r };
} return n; }
var z, ee, B;
function V() { return (V = e.n((function () { n.B(), n.P(), r.x(), a.lt(), a._t(), i.Y(), i.W(), t.o(), z = [{ offset: 0, color: "white" }, { offset: 1, color: "black" }], ee = (function () {
    function e() {
        var n = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            n[_i] = arguments[_i];
        }
        var _this = this;
        this.uid = i.X("fillGradient"), this._tick = 0, this.type = "linear", this.colorStops = [];
        var r = R(n), a = r.type === "radial" ? e.defaultRadialOptions : e.defaultLinearOptions;
        if (r = t.a(t.a({}, a), o.N(r)), this._textureSize = r.textureSize, this._wrapMode = r.wrapMode, r.type === "radial") {
            var s;
            this.center = r.center, this.outerCenter = (s = r.outerCenter) == null ? this.center : s, this.innerRadius = r.innerRadius, this.outerRadius = r.outerRadius, this.scale = r.scale, this.rotation = r.rotation;
        }
        else
            this.start = r.start, this.end = r.end;
        this.textureSpace = r.textureSpace, this.type = r.type, r.colorStops.forEach(function (e) { _this.addColorStop(e.offset, e.color); });
    }
    e.prototype.addColorStop = function (e, t) { return this.colorStops.push({ offset: e, color: n.z.shared.setValue(t).toHexa() }), this; };
    e.prototype.buildLinearGradient = function () { if (this.texture)
        return; var _a = this.start, e = _a.x, t = _a.y, _b = this.end, n = _b.x, i = _b.y, o = n - e, s = i - t, c = o < 0 || s < 0; if (this._wrapMode === "clamp-to-edge") {
        if (o < 0) {
            var t_10 = e;
            e = n, n = t_10, o *= -1;
        }
        if (s < 0) {
            var e_7 = t;
            t = i, i = e_7, s *= -1;
        }
    } var l = this.colorStops.length ? this.colorStops : z, u = this._textureSize, _c = L(u, 1), d = _c.canvas, f = _c.context, p = c ? f.createLinearGradient(this._textureSize, 0, 0, 0) : f.createLinearGradient(0, 0, this._textureSize, 0); I(p, l), f.fillStyle = p, f.fillRect(0, 0, u, 1), this.texture = new a.gt({ source: new a.ct({ resource: d, addressMode: this._wrapMode }) }); var m = Math.sqrt(o * o + s * s), h = Math.atan2(s, o), g = new r.b; g.scale(m / u, 1), g.rotate(h), g.translate(e, t), this.textureSpace === "local" && g.scale(u, u), this.transform = g; };
    e.prototype.buildGradient = function () { this.texture || this._tick++, this.type === "linear" ? this.buildLinearGradient() : this.buildRadialGradient(); };
    e.prototype.buildRadialGradient = function () { if (this.texture)
        return; var e = this.colorStops.length ? this.colorStops : z, t = this._textureSize, _a = L(t, t), n = _a.canvas, i = _a.context, _b = this.center, o = _b.x, s = _b.y, _c = this.outerCenter, c = _c.x, l = _c.y, u = this.innerRadius, d = this.outerRadius, f = c - d, p = l - d, m = t / (d * 2), h = (o - f) * m, g = (s - p) * m, _ = i.createRadialGradient(h, g, u * m, (c - f) * m, (l - p) * m, d * m); I(_, e), i.fillStyle = e[e.length - 1].color, i.fillRect(0, 0, t, t), i.fillStyle = _, i.translate(h, g), i.rotate(this.rotation), i.scale(1, this.scale), i.translate(-h, -g), i.fillRect(0, 0, t, t), this.texture = new a.gt({ source: new a.ct({ resource: n, addressMode: this._wrapMode }) }); var v = new r.b; this.textureSpace === "local" ? v.scale(2 * d, 2 * d) : v.scale(1 / m, 1 / m), v.translate(f, p), this.transform = v; };
    e.prototype.destroy = function () { var e; (e = this.texture) == null || e.destroy(!0), this.texture = null, this.transform = null, this.colorStops = [], this.start = null, this.end = null, this.center = null, this.outerCenter = null; };
    Object.defineProperty(e.prototype, "styleKey", {
        get: function () { return "fill-gradient-".concat(this.uid, "-").concat(this._tick); },
        enumerable: false,
        configurable: true
    });
    return e;
}()), ee.defaultLinearOptions = { start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colorStops: [], textureSpace: "local", type: "linear", textureSize: 256, wrapMode: "clamp-to-edge" }, ee.defaultRadialOptions = { center: { x: .5, y: .5 }, innerRadius: 0, outerRadius: .5, colorStops: [], scale: 1, rotation: 0, textureSpace: "local", type: "radial", textureSize: 256, wrapMode: "clamp-to-edge" }, B = ee; })))(); }
function te(e, t, n, r) { var i = t.matrix ? e.copyFrom(t.matrix).invert() : e.identity(); if (t.textureSpace === "local") {
    var e_8 = n.getBounds(re);
    t.width && e_8.pad(t.width);
    var r_6 = e_8.x, a_2 = e_8.y, o_2 = 1 / e_8.width, s_2 = 1 / e_8.height, c_2 = -r_6 * o_2, l_5 = -a_2 * s_2, u_3 = i.a, d_2 = i.b, f_2 = i.c, p_2 = i.d;
    i.a *= o_2, i.b *= o_2, i.c *= s_2, i.d *= s_2, i.tx = c_2 * u_3 + l_5 * f_2 + i.tx, i.ty = c_2 * d_2 + l_5 * p_2 + i.ty;
}
else if (t.texture.rotate) {
    var _a = t.texture, e_9 = _a.uvs, n_8 = _a.orig;
    i.scale(1 / n_8.width, 1 / n_8.height), i.prepend(ie.set(e_9.x1 - e_9.x0, e_9.y1 - e_9.y0, e_9.x3 - e_9.x0, e_9.y3 - e_9.y0, e_9.x0, e_9.y0));
}
else
    i.translate(t.texture.frame.x, t.texture.frame.y), i.scale(1 / t.texture.source.width, 1 / t.texture.source.height); var a = t.texture.source.style; return !(t.fill instanceof B) && a.addressMode === "clamp-to-edge" && (a.addressMode = "repeat", a.update()), r && i.append(ne.copyFrom(r).invert()), i; }
var ne, re, ie;
function ae() { return (ae = e.n((function () { r.x(), r._(), V(), ne = new r.b, re = new r.g, ie = new r.b; })))(); }
function oe(e, t) { var n = t.geometryData, r = t.batches; r.length = 0, n.indices.length = 0, n.vertices.length = 0, n.uvs.length = 0; for (var t_11 = 0; t_11 < e.instructions.length; t_11++) {
    var i_2 = e.instructions[t_11];
    if (i_2.action === "texture")
        se(i_2.data, r, n);
    else if (i_2.action === "fill" || i_2.action === "stroke") {
        var e_10 = i_2.action === "stroke", t_12 = i_2.data.path.shapePath, a_3 = i_2.data.style, o_3 = i_2.data.hole;
        e_10 && o_3 && ce(o_3.shapePath, a_3, !0, r, n), o_3 && (t_12.shapePrimitives[t_12.shapePrimitives.length - 1].holes = o_3.shapePath.shapePrimitives), ce(t_12, a_3, e_10, r, n);
    }
} }
function se(e, t, n) { var r = [], o = H.rectangle, s = ue; s.x = e.dx, s.y = e.dy, s.width = e.dw, s.height = e.dh; var c = e.transform; if (!o.build(s, r))
    return; var l = n.vertices, u = n.uvs, d = n.indices, p = d.length, m = l.length / 2; c && a.E(r, c), o.triangulate(r, l, 2, m, d, p); var h = e.image, g = h.uvs; u.push(g.x0, g.y0, g.x1, g.y1, g.x3, g.y3, g.x2, g.y2); var _ = i.N.get(f); _.indexOffset = p, _.indexSize = d.length - p, _.attributeOffset = m, _.attributeSize = l.length / 2 - m, _.baseColor = e.style, _.alpha = e.alpha, _.texture = h, _.geometryData = n, t.push(_); }
function ce(e, t, n, r, o) { var s = o.vertices, c = o.uvs, l = o.indices; e.shapePrimitives.forEach(function (_a) {
    var e = _a.shape, u = _a.transform, d = _a.holes;
    var p = [], m = H[e.type];
    if (!m.build(e, p))
        return;
    var h = l.length, g = s.length / 2, _ = "triangle-list";
    if (u && a.E(p, u), n) {
        var v;
        var n_9 = (v = e.closePath) == null || v, r_7 = t;
        r_7.pixelLine ? (T(p, n_9, s, l), _ = "line-list") : C(p, r_7, !1, n_9, s, l);
    }
    else if (d) {
        var e_11 = [], t_13 = p.slice();
        le(d).forEach(function (n) { e_11.push(t_13.length / 2), t_13.push.apply(t_13, n); }), D(t_13, e_11, s, 2, g, l, h);
    }
    else
        m.triangulate(p, s, 2, g, l, h);
    var y = c.length / 2, b = t.texture;
    if (b !== a.gt.WHITE) {
        var n_10 = te(de, t, e, u);
        a.O(s, 2, g, c, y, 2, s.length / 2 - g, n_10);
    }
    else
        a.D(c, y, 2, s.length / 2 - g);
    var x = i.N.get(f);
    x.indexOffset = h, x.indexSize = l.length - h, x.attributeOffset = g, x.attributeSize = s.length / 2 - g, x.baseColor = t.color, x.alpha = t.alpha, x.texture = b, x.geometryData = o, x.topology = _, r.push(x);
}); }
function le(e) { var t = []; for (var n_11 = 0; n_11 < e.length; n_11++) {
    var r_8 = e[n_11].shape, i_3 = [];
    H[r_8.type].build(r_8, i_3) && t.push(i_3);
} return t; }
var H, ue, de;
function fe() { return (fe = e.n((function () { n.Y(), r.x(), r._(), a._t(), i.P(), p(), _(), w(), E(), j(), N(), F(), ae(), O(), H = {}, n.J.handleByMap(n.q.ShapeBuilder, H), n.J.add(M, A, P, m, h, g), ue = new r.g, de = new r.b; })))(); }
var pe, me, U, W;
function G() { return (G = e.n((function () { n.Y(), c.S(), c.u(), a.ht(), i.f(), i.W(), i.P(), fe(), pe = (function () {
    function pe() {
        this.batches = [], this.geometryData = { vertices: [], uvs: [], indices: [] };
    }
    pe.prototype.reset = function () { this.batches && this.batches.forEach(function (e) { i.N.return(e); }), this.graphicsData && i.N.return(this.graphicsData), this.isBatchable = !1, this.context = null, this.batches.length = 0, this.geometryData.indices.length = 0, this.geometryData.vertices.length = 0, this.geometryData.uvs.length = 0, this.graphicsData = null; };
    pe.prototype.destroy = function () { this.reset(), this.batches = null, this.geometryData = null; };
    return pe;
}()), me = (function () {
    function me() {
        this.instructions = new a.mt;
    }
    me.prototype.init = function (e) { var t = e.maxTextures; this.batcher ? this.batcher._updateMaxTextures(t) : this.batcher = new c.l({ maxTextures: t }), this.instructions.reset(); };
    Object.defineProperty(me.prototype, "geometry", {
        get: function () { return i.U(i.J, "GraphicsContextRenderData#geometry is deprecated, please use batcher.geometry instead."), this.batcher.geometry; },
        enumerable: false,
        configurable: true
    });
    me.prototype.destroy = function () { this.batcher.destroy(), this.instructions.destroy(), this.batcher = null, this.instructions = null; };
    return me;
}()), U = (function () {
    function e(e) {
        this._renderer = e, this._managedContexts = new i.d({ renderer: e, type: "resource", name: "graphicsContext" });
    }
    e.prototype.init = function (t) { var n; e.defaultOptions.bezierSmoothness = (n = t == null ? void 0 : t.bezierSmoothness) == null ? e.defaultOptions.bezierSmoothness : n; };
    e.prototype.getContextRenderData = function (e) { return e._gpuData[this._renderer.uid].graphicsData || this._initContextRenderData(e); };
    e.prototype.updateGpuContext = function (e) { var t = !!e._gpuData[this._renderer.uid], n = e._gpuData[this._renderer.uid] || this._initContext(e); if (e.dirty || !t) {
        t && n.reset(), oe(e, n);
        var r_9 = e.batchMode;
        n.isBatchable = e.customShader || r_9 === "no-batch" ? !1 : r_9 !== "auto" || n.geometryData.vertices.length < 400, e.dirty = !1;
    } return n; };
    e.prototype.getGpuContext = function (e) { return e._gpuData[this._renderer.uid] || this._initContext(e); };
    e.prototype._initContextRenderData = function (e) { var t = i.N.get(me, { maxTextures: this._renderer.limits.maxBatchableTextures }), n = e._gpuData[this._renderer.uid], r = n.batches, a = n.geometryData; n.graphicsData = t; var o = a.vertices.length, s = a.indices.length; for (var e_12 = 0; e_12 < r.length; e_12++)
        r[e_12].applyTransform = !1; var l = t.batcher; l.ensureAttributeBuffer(o), l.ensureIndexBuffer(s), l.begin(); for (var e_13 = 0; e_13 < r.length; e_13++) {
        var t_14 = r[e_13];
        l.add(t_14);
    } l.finish(t.instructions); var u = l.geometry; u.indexBuffer.setDataWithSize(l.indexBuffer, l.indexSize, !0), u.buffers[0].setDataWithSize(l.attributeBuffer.float32View, l.attributeSize, !0); var d = l.batches; for (var e_14 = 0; e_14 < l.batchIndex; e_14++) {
        var t_15 = d[e_14];
        t_15.bindGroup = c.x(t_15.textures.textures, t_15.textures.count, this._renderer.limits.maxBatchableTextures);
    } return t; };
    e.prototype._initContext = function (e) { var t = new pe; return t.context = e, e._gpuData[this._renderer.uid] = t, this._managedContexts.add(e), t; };
    e.prototype.destroy = function () { this._managedContexts.destroy(), this._renderer = null; };
    return e;
}()), U.extension = { type: [n.q.WebGLSystem, n.q.WebGPUSystem], name: "graphicsContext" }, U.defaultOptions = { bezierSmoothness: .5 }, W = U; })))(); }
function he(e, t, n, r, i, a, o, s, c, l) { var u = Math.min(.99, Math.max(0, l == null ? W.defaultOptions.bezierSmoothness : l)), d = (ye - u) / 1; return d *= d, ge(t, n, r, i, a, o, s, c, e, d), e; }
function ge(e, t, n, r, i, a, o, s, c, l) { _e(e, t, n, r, i, a, o, s, c, l, 0), c.push(o, s); }
function _e(e, t, n, r, i, a, o, s, c, l, u) { if (u > ve)
    return; var d = (e + n) / 2, f = (t + r) / 2, p = (n + i) / 2, m = (r + a) / 2, h = (i + o) / 2, g = (a + s) / 2, _ = (d + p) / 2, v = (f + m) / 2, y = (p + h) / 2, b = (m + g) / 2, x = (_ + y) / 2, S = (v + b) / 2; if (u > 0) {
    var u_4 = o - e, d_3 = s - t, f_3 = Math.abs((n - o) * d_3 - (r - s) * u_4), p_3 = Math.abs((i - o) * d_3 - (a - s) * u_4);
    if (f_3 > K && p_3 > K) {
        if ((f_3 + p_3) * (f_3 + p_3) <= l * (u_4 * u_4 + d_3 * d_3)) {
            c.push(x, S);
            return;
        }
    }
    else if (f_3 > K) {
        if (f_3 * f_3 <= l * (u_4 * u_4 + d_3 * d_3)) {
            c.push(x, S);
            return;
        }
    }
    else if (p_3 > K) {
        if (p_3 * p_3 <= l * (u_4 * u_4 + d_3 * d_3)) {
            c.push(x, S);
            return;
        }
    }
    else if (u_4 = x - (e + o) / 2, d_3 = S - (t + s) / 2, u_4 * u_4 + d_3 * d_3 <= l) {
        c.push(x, S);
        return;
    }
} _e(e, t, d, f, _, v, x, S, c, l, u + 1), _e(x, S, y, b, h, g, o, s, c, l, u + 1); }
var ve, K, ye;
function be() { return (be = e.n((function () { G(), ve = 8, K = 1.1920929e-7, ye = 1; })))(); }
function xe(e, t, n, r, i, a, o, s) { var c = Math.min(.99, Math.max(0, s == null ? W.defaultOptions.bezierSmoothness : s)), l = (Ee - c) / 1; return l *= l, Se(t, n, r, i, a, o, e, l), e; }
function Se(e, t, n, r, i, a, o, s) { Ce(o, e, t, n, r, i, a, s, 0), o.push(i, a); }
function Ce(e, t, n, r, i, a, o, s, c) { if (c > we)
    return; var l = (t + r) / 2, u = (n + i) / 2, d = (r + a) / 2, f = (i + o) / 2, p = (l + d) / 2, m = (u + f) / 2, h = a - t, g = o - n, _ = Math.abs((r - a) * g - (i - o) * h); if (_ > Te) {
    if (_ * _ <= s * (h * h + g * g)) {
        e.push(p, m);
        return;
    }
}
else if (h = p - (t + a) / 2, g = m - (n + o) / 2, h * h + g * g <= s) {
    e.push(p, m);
    return;
} Ce(e, t, n, l, u, p, m, s, c + 1), Ce(e, p, m, d, f, a, o, s, c + 1); }
var we, Te, Ee;
function De() { return (De = e.n((function () { G(), we = 8, Te = 1.1920929e-7, Ee = 1; })))(); }
function Oe(e, t, n, r, i, a, o, s) { var c = Math.abs(i - a); (!o && i > a || o && a > i) && (c = 2 * Math.PI - c), s || (s = Math.max(6, Math.floor(6 * Math.pow(r, (1 / 3)) * (c / Math.PI)))), s = Math.max(s, 3); var l = c / s, u = i; l *= o ? -1 : 1; for (var i_4 = 0; i_4 < s + 1; i_4++) {
    var i_5 = Math.cos(u), a_4 = Math.sin(u), o_4 = t + i_5 * r, s_3 = n + a_4 * r;
    e.push(o_4, s_3), u += l;
} }
function ke(e, t, n, r, i, a) { var o = e[e.length - 2], s = e[e.length - 1] - n, c = o - t, l = i - n, u = r - t, d = Math.abs(s * u - c * l); if (d < 1e-8 || a === 0) {
    (e[e.length - 2] !== t || e[e.length - 1] !== n) && e.push(t, n);
    return;
} var f = s * s + c * c, p = l * l + u * u, m = s * l + c * u, h = a * Math.sqrt(f) / d, g = a * Math.sqrt(p) / d, _ = h * m / f, v = g * m / p, y = h * u + g * c, b = h * l + g * s, x = c * (g + _), S = s * (g + _), C = u * (h + v), w = l * (h + v), T = Math.atan2(S - b, x - y), E = Math.atan2(w - b, C - y); Oe(e, y + t, b + n, a, T, E, c * l > u * s); }
function Ae() { return (Ae = e.n((function () { })))(); }
function je(e, t) { var n = t === -1.5707963267948966 ? -.551915024494 : 4 / 3 * Math.tan(t / 4), r = t === 1.5707963267948966 ? .551915024494 : n, i = Math.cos(e), a = Math.sin(e), o = Math.cos(e + t), s = Math.sin(e + t); return [{ x: i - a * r, y: a + i * r }, { x: o + s * r, y: s - o * r }, { x: o, y: s }]; }
function Me(e, t, n, r, i, a, o, s, c, l) {
    if (s === void 0) { s = 0; }
    if (c === void 0) { c = 0; }
    if (l === void 0) { l = 0; }
    if (a === 0 || o === 0)
        return;
    var u = Math.sin(s * q / 360), d = Math.cos(s * q / 360), f = d * (t - r) / 2 + u * (n - i) / 2, p = -u * (t - r) / 2 + d * (n - i) / 2;
    if (f === 0 && p === 0)
        return;
    a = Math.abs(a), o = Math.abs(o);
    var m = Math.pow(f, 2) / Math.pow(a, 2) + Math.pow(p, 2) / Math.pow(o, 2);
    m > 1 && (a *= Math.sqrt(m), o *= Math.sqrt(m)), Ie(t, n, r, i, a, o, c, l, u, d, f, p, Ne);
    var h = Ne.ang1, g = Ne.ang2, _ = Ne.centerX, v = Ne.centerY, y = Math.abs(g) / (q / 4);
    Math.abs(1 - y) < 1e-7 && (y = 1);
    var b = Math.max(Math.ceil(y), 1);
    g /= b;
    var x = e[e.length - 2], S = e[e.length - 1], C = { x: 0, y: 0 };
    for (var t_16 = 0; t_16 < b; t_16++) {
        var t_17 = je(h, g), _a = Pe(t_17[0], a, o, d, u, _, v, C), n_12 = _a.x, r_10 = _a.y, _b = Pe(t_17[1], a, o, d, u, _, v, C), i_6 = _b.x, s_4 = _b.y, _c = Pe(t_17[2], a, o, d, u, _, v, C), c_3 = _c.x, l_6 = _c.y;
        he(e, x, S, n_12, r_10, i_6, s_4, c_3, l_6), x = c_3, S = l_6, h += g;
    }
}
var q, Ne, Pe, Fe, Ie;
function Le() { return (Le = e.n((function () { be(), q = Math.PI * 2, Ne = { centerX: 0, centerY: 0, ang1: 0, ang2: 0 }, Pe = function (_a, n, r, i, a, o, s, c) {
    var e = _a.x, t = _a.y;
    e *= n, t *= r;
    var l = i * e - a * t, u = a * e + i * t;
    return c.x = l + o, c.y = u + s, c;
}, Fe = function (e, t, n, r) { var i = e * r - t * n < 0 ? -1 : 1, a = e * n + t * r; return a > 1 && (a = 1), a < -1 && (a = -1), i * Math.acos(a); }, Ie = function (e, t, n, r, i, a, o, s, c, l, u, d, f) { var p = Math.pow(i, 2), m = Math.pow(a, 2), h = Math.pow(u, 2), g = Math.pow(d, 2), _ = p * m - p * g - m * h; _ < 0 && (_ = 0), _ /= p * g + m * h, _ = Math.sqrt(_) * (o === s ? -1 : 1); var v = _ * i / a * d, y = _ * -a / i * u, b = l * v - c * y + (e + n) / 2, x = c * v + l * y + (t + r) / 2, S = (u - v) / i, C = (d - y) / a, w = (-u - v) / i, T = (-d - y) / a, E = Fe(1, 0, S, C), D = Fe(S, C, w, T); s === 0 && D > 0 && (D -= q), s === 1 && D < 0 && (D += q), f.centerX = b, f.centerY = x, f.ang1 = E, f.ang2 = D; }; })))(); }
function Re(e, t, n) { var r = function (e, t) { var n = t.x - e.x, r = t.y - e.y, i = Math.sqrt(n * n + r * r); return { len: i, nx: n / i, ny: r / i }; }, i = function (t, n) { t === 0 ? e.moveTo(n.x, n.y) : e.lineTo(n.x, n.y); }, a = t[t.length - 1]; for (var s_5 = 0; s_5 < t.length; s_5++) {
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
    var g_2 = p_4 / 2, _3 = void 0, v_3 = Math.abs(Math.cos(g_2) * l_7 / Math.sin(g_2));
    v_3 > Math.min(d_4.len / 2, f_4.len / 2) ? (v_3 = Math.min(d_4.len / 2, f_4.len / 2), _3 = Math.abs(v_3 * Math.sin(g_2) / Math.cos(g_2))) : _3 = l_7;
    var y_3 = c_4.x + f_4.nx * v_3 + -f_4.ny * _3 * m_2, b_1 = c_4.y + f_4.ny * v_3 + f_4.nx * _3 * m_2, x_2 = Math.atan2(d_4.ny, d_4.nx) + Math.PI / 2 * m_2, S_1 = Math.atan2(f_4.ny, f_4.nx) - Math.PI / 2 * m_2;
    s_5 === 0 && e.moveTo(y_3 + Math.cos(x_2) * _3, b_1 + Math.sin(x_2) * _3), e.arc(y_3, b_1, _3, x_2, S_1, h_3), a = c_4;
} }
function ze(e, t, n, r) { var i = function (e, t) { return Math.sqrt(Math.pow((e.x - t.x), 2) + Math.pow((e.y - t.y), 2)); }, a = function (e, t, n) { return ({ x: e.x + (t.x - e.x) * n, y: e.y + (t.y - e.y) * n }); }, o = t.length; for (var c_5 = 0; c_5 < o; c_5++) {
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
var Be, Ve;
function He() { return (He = e.n((function () { r.f(), r.u(), r.o(), r._(), r.i(), o.M(), be(), De(), Ae(), Le(), Be = new r.g, Ve = (function () {
    function Ve(e) {
        this.shapePrimitives = [], this._currentPoly = null, this._bounds = new o.j, this._graphicsPath2D = e, this.signed = e.checkForHoles;
    }
    Ve.prototype.moveTo = function (e, t) { return this.startPoly(e, t), this; };
    Ve.prototype.lineTo = function (e, t) { this._ensurePoly(); var n = this._currentPoly.points, r = n[n.length - 2], i = n[n.length - 1]; return (r !== e || i !== t) && n.push(e, t), this; };
    Ve.prototype.arc = function (e, t, n, r, i, a) { this._ensurePoly(!1); var o = this._currentPoly.points; return Oe(o, e, t, n, r, i, a), this; };
    Ve.prototype.arcTo = function (e, t, n, r, i) { this._ensurePoly(); var a = this._currentPoly.points; return ke(a, e, t, n, r, i), this; };
    Ve.prototype.arcToSvg = function (e, t, n, r, i, a, o) { var s = this._currentPoly.points; return Me(s, this._currentPoly.lastX, this._currentPoly.lastY, a, o, e, t, n, r, i), this; };
    Ve.prototype.bezierCurveTo = function (e, t, n, r, i, a, o) { this._ensurePoly(); var s = this._currentPoly; return he(this._currentPoly.points, s.lastX, s.lastY, e, t, n, r, i, a, o), this; };
    Ve.prototype.quadraticCurveTo = function (e, t, n, r, i) { this._ensurePoly(); var a = this._currentPoly; return xe(this._currentPoly.points, a.lastX, a.lastY, e, t, n, r, i), this; };
    Ve.prototype.closePath = function () { return this.endPoly(!0), this; };
    Ve.prototype.addPath = function (e, t) { this.endPoly(), t && !t.isIdentity() && (e = e.clone(!0), e.transform(t)); var n = this.shapePrimitives, r = n.length; for (var t_18 = 0; t_18 < e.instructions.length; t_18++) {
        var n_13 = e.instructions[t_18];
        this[n_13.action].apply(this, n_13.data);
    } if (e.checkForHoles && n.length - r > 1) {
        var e_15 = null;
        for (var t_19 = r; t_19 < n.length; t_19++) {
            var r_11 = n[t_19];
            if (r_11.shape.type === "polygon") {
                var i_7 = r_11.shape, a_5 = e_15 == null ? void 0 : e_15.shape;
                a_5 && a_5.containsPolygon(i_7) ? (e_15.holes || (e_15.holes = []), e_15.holes.push(r_11), n.copyWithin(t_19, t_19 + 1), n.length--, t_19--) : e_15 = r_11;
            }
        }
    } return this; };
    Ve.prototype.finish = function (e) {
        if (e === void 0) { e = !1; }
        this.endPoly(e);
    };
    Ve.prototype.rect = function (e, t, n, i, a) { return this.drawShape(new r.g(e, t, n, i), a), this; };
    Ve.prototype.circle = function (e, t, n, i) { return this.drawShape(new r.d(e, t, n), i), this; };
    Ve.prototype.poly = function (e, t, n) { var i = new r.a(e); return i.closePath = t, this.drawShape(i, n), this; };
    Ve.prototype.regularPoly = function (e, t, n, r, i, a) {
        if (i === void 0) { i = 0; }
        r = Math.max(r | 0, 3);
        var o = -1 * Math.PI / 2 + i, s = Math.PI * 2 / r, c = [];
        for (var i_8 = 0; i_8 < r; i_8++) {
            var r_12 = o - i_8 * s;
            c.push(e + n * Math.cos(r_12), t + n * Math.sin(r_12));
        }
        return this.poly(c, !0, a), this;
    };
    Ve.prototype.roundPoly = function (e, t, n, r, i, a, o) {
        if (a === void 0) { a = 0; }
        if (r = Math.max(r | 0, 3), i <= 0)
            return this.regularPoly(e, t, n, r, a);
        var s = n * Math.sin(Math.PI / r) - .001;
        i = Math.min(i, s);
        var c = -1 * Math.PI / 2 + a, l = Math.PI * 2 / r, u = (r - 2) * Math.PI / r / 2;
        for (var a_6 = 0; a_6 < r; a_6++) {
            var r_13 = a_6 * l + c, s_6 = e + n * Math.cos(r_13), d_6 = t + n * Math.sin(r_13), f_6 = r_13 + Math.PI + u, p_6 = r_13 - Math.PI - u, m_4 = s_6 + i * Math.cos(f_6), h_5 = d_6 + i * Math.sin(f_6), g_4 = s_6 + i * Math.cos(p_6), _4 = d_6 + i * Math.sin(p_6);
            a_6 === 0 ? this.moveTo(m_4, h_5) : this.lineTo(m_4, h_5), this.quadraticCurveTo(s_6, d_6, g_4, _4, o);
        }
        return this.closePath();
    };
    Ve.prototype.roundShape = function (e, t, n, r) {
        if (n === void 0) { n = !1; }
        return e.length < 3 ? this : (n ? ze(this, e, t, r) : Re(this, e, t), this.closePath());
    };
    Ve.prototype.filletRect = function (e, t, n, r, i) { if (i === 0)
        return this.rect(e, t, n, r); var a = Math.min(n, r) / 2, o = Math.min(a, Math.max(-a, i)), s = e + n, c = t + r, l = o < 0 ? -o : 0, u = Math.abs(o); return this.moveTo(e, t + u).arcTo(e + l, t + l, e + u, t, u).lineTo(s - u, t).arcTo(s - l, t + l, s, t + u, u).lineTo(s, c - u).arcTo(s - l, c - l, e + n - u, c, u).lineTo(e + u, c).arcTo(e + l, c - l, e, c - u, u).closePath(); };
    Ve.prototype.chamferRect = function (e, t, n, r, i, a) { if (i <= 0)
        return this.rect(e, t, n, r); var o = Math.min(i, Math.min(n, r) / 2), s = e + n, c = t + r, l = [e + o, t, s - o, t, s, t + o, s, c - o, s - o, c, e + o, c, e, c - o, e, t + o]; for (var e_16 = l.length - 1; e_16 >= 2; e_16 -= 2)
        l[e_16] === l[e_16 - 2] && l[e_16 - 1] === l[e_16 - 3] && l.splice(e_16 - 1, 2); return this.poly(l, !0, a); };
    Ve.prototype.ellipse = function (e, t, n, i, a) { return this.drawShape(new r.l(e, t, n, i), a), this; };
    Ve.prototype.roundRect = function (e, t, n, i, a, o) { return this.drawShape(new r.r(e, t, n, i, a), o), this; };
    Ve.prototype.drawShape = function (e, t) { return this.endPoly(), this.shapePrimitives.push({ shape: e, transform: t }), this; };
    Ve.prototype.startPoly = function (e, t) { var n = this._currentPoly; return n && this.endPoly(), n = new r.a, n.points.push(e, t), this._currentPoly = n, this; };
    Ve.prototype.endPoly = function (e) {
        if (e === void 0) { e = !1; }
        var t = this._currentPoly;
        return t && t.points.length > 2 && (t.closePath = e, this.shapePrimitives.push({ shape: t })), this._currentPoly = null, this;
    };
    Ve.prototype._ensurePoly = function (e) {
        if (e === void 0) { e = !0; }
        if (!this._currentPoly && (this._currentPoly = new r.a, e)) {
            var e_17 = this.shapePrimitives[this.shapePrimitives.length - 1];
            if (e_17) {
                var t_20 = e_17.shape.x, n_14 = e_17.shape.y;
                if (e_17.transform && !e_17.transform.isIdentity()) {
                    var r_14 = e_17.transform, i_9 = t_20;
                    t_20 = r_14.a * t_20 + r_14.c * n_14 + r_14.tx, n_14 = r_14.b * i_9 + r_14.d * n_14 + r_14.ty;
                }
                this._currentPoly.points.push(t_20, n_14);
            }
            else
                this._currentPoly.points.push(0, 0);
        }
    };
    Ve.prototype.buildPath = function () { var e = this._graphicsPath2D; this.shapePrimitives.length = 0, this._currentPoly = null; for (var t_21 = 0; t_21 < e.instructions.length; t_21++) {
        var n_15 = e.instructions[t_21];
        this[n_15.action].apply(this, n_15.data);
    } this.finish(); };
    Object.defineProperty(Ve.prototype, "bounds", {
        get: function () { var e = this._bounds; e.clear(); var t = this.shapePrimitives; for (var n_16 = 0; n_16 < t.length; n_16++) {
            var r_15 = t[n_16], i_10 = r_15.shape.getBounds(Be);
            r_15.transform ? e.addRect(i_10, r_15.transform) : e.addRect(i_10);
        } return e; },
        enumerable: false,
        configurable: true
    });
    return Ve;
}()); })))(); }
function J(e, t) { return e ? e.prepend(t) : t.clone(); }
var Y;
function Ue() { return (Ue = e.n((function () { r.C(), i.Y(), i.L(), u(), He(), Y = (function () {
    function e(e, t) {
        if (t === void 0) { t = !1; }
        if (this.instructions = [], this.uid = i.X("graphicsPath"), this._dirty = !0, this.checkForHoles = t, typeof e == "string")
            l(e, this);
        else {
            var n;
            this.instructions = (n = e == null ? void 0 : e.slice()) == null ? [] : n;
        }
    }
    Object.defineProperty(e.prototype, "shapePath", {
        get: function () { return this._shapePath || (this._shapePath = new Ve(this)), this._dirty && (this._dirty = !1, this._shapePath.buildPath()), this._shapePath; },
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
    e.prototype.bezierCurveToShort = function (e, t, n, i, a) { var o = this.instructions[this.instructions.length - 1], s = this.getLastPoint(r.S.shared), c = 0, l = 0; if (!o || o.action !== "bezierCurveTo")
        c = s.x, l = s.y;
    else {
        c = o.data[2], l = o.data[3];
        var e_18 = s.x, t_22 = s.y;
        c = e_18 + (e_18 - c), l = t_22 + (t_22 - l);
    } return this.instructions.push({ action: "bezierCurveTo", data: [c, l, e, t, n, i, a] }), this._dirty = !0, this; };
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
    e.prototype.quadraticCurveToShort = function (e, t, n) { var i = this.instructions[this.instructions.length - 1], a = this.getLastPoint(r.S.shared), o = 0, s = 0; if (!i || i.action !== "quadraticCurveTo")
        o = a.x, s = a.y;
    else {
        o = i.data[0], s = i.data[1];
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
    e.prototype.star = function (e, t, n, r, i, a, o) { i || (i = r / 2); var s = -1 * Math.PI / 2 + a, c = n * 2, l = Math.PI * 2 / c, u = []; for (var n_17 = 0; n_17 < c; n_17++) {
        var a_7 = n_17 % 2 ? i : r, o_5 = n_17 * l + s;
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
        return this; var t = e.a, n = e.b, r = e.c, a = e.d, o = e.tx, s = e.ty, c = 0, l = 0, u = 0, d = 0, f = 0, p = 0, m = 0, h = 0; for (var g_5 = 0; g_5 < this.instructions.length; g_5++) {
        var _5 = this.instructions[g_5], v_4 = _5.data;
        switch (_5.action) {
            case "moveTo":
            case "lineTo":
                c = v_4[0], l = v_4[1], v_4[0] = t * c + r * l + o, v_4[1] = n * c + a * l + s;
                break;
            case "bezierCurveTo":
                u = v_4[0], d = v_4[1], f = v_4[2], p = v_4[3], c = v_4[4], l = v_4[5], v_4[0] = t * u + r * d + o, v_4[1] = n * u + a * d + s, v_4[2] = t * f + r * p + o, v_4[3] = n * f + a * p + s, v_4[4] = t * c + r * l + o, v_4[5] = n * c + a * l + s;
                break;
            case "quadraticCurveTo":
                u = v_4[0], d = v_4[1], c = v_4[2], l = v_4[3], v_4[0] = t * u + r * d + o, v_4[1] = n * u + a * d + s, v_4[2] = t * c + r * l + o, v_4[3] = n * c + a * l + s;
                break;
            case "arcToSvg":
                c = v_4[5], l = v_4[6], m = v_4[0], h = v_4[1], v_4[0] = t * m + r * h, v_4[1] = n * m + a * h, v_4[5] = t * c + r * l + o, v_4[6] = n * c + a * l + s;
                break;
            case "circle":
                v_4[4] = J(v_4[3], e);
                break;
            case "rect":
                v_4[4] = J(v_4[4], e);
                break;
            case "ellipse":
                v_4[8] = J(v_4[8], e);
                break;
            case "roundRect":
                v_4[5] = J(v_4[5], e);
                break;
            case "addPath":
                v_4[0].transform(e);
                break;
            case "poly":
                v_4[2] = J(v_4[2], e);
                break;
            case "regularPoly":
            case "chamferRect":
                v_4[5] = J(v_4[5], e);
                break;
            case "closePath": break;
            default: i.R("unknown transform action", _5.action);
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
function We(e, t) { var n = e.querySelectorAll("defs"); for (var e_21 = 0; e_21 < n.length; e_21++) {
    var r_16 = n[e_21];
    for (var e_22 = 0; e_22 < r_16.children.length; e_22++) {
        var n_18 = r_16.children[e_22];
        switch (n_18.nodeName.toLowerCase()) {
            case "lineargradient":
                t.defs[n_18.id] = qe(n_18);
                break;
            case "radialgradient": t.defs[n_18.id] = Je(n_18);
        }
    }
} }
function Z(e, t, n) { var r = e.getAttribute(t); if (r != null && r.trim().endsWith("%")) {
    var e_23 = Number(r.trim().slice(0, -1));
    return Number.isNaN(e_23) ? n : e_23 / 100;
} return X(e, t, n); }
function Ge(e) { return (e.getAttribute("gradientUnits") || "objectBoundingBox") === "objectBoundingBox" ? "local" : "global"; }
function Ke(e) { var t = []; for (var r_17 = 0; r_17 < e.children.length; r_17++) {
    var i_11 = e.children[r_17], a_8 = Z(i_11, "offset", 0), o_6 = n.z.shared.setValue(i_11.getAttribute("stop-color")).toNumber();
    t.push({ offset: a_8, color: o_6 });
} return t; }
function qe(e) { var t = Z(e, "x1", 0), n = Z(e, "y1", 0), r = Z(e, "x2", 1), i = Z(e, "y2", 0); return new B({ type: "linear", start: { x: t, y: n }, end: { x: r, y: i }, textureSpace: Ge(e), colorStops: Ke(e) }); }
function Je(e) { var t = Z(e, "cx", .5), n = Z(e, "cy", .5), r = Z(e, "r", .5), i = Z(e, "fx", t), a = Z(e, "fy", n), o = Z(e, "fr", 0); return new B({ type: "radial", center: { x: i, y: a }, innerRadius: o, outerCenter: { x: t, y: n }, outerRadius: r, textureSpace: Ge(e), colorStops: Ke(e) }); }
function Ye() { return (Ye = e.n((function () { n.B(), V(); })))(); }
function Xe(e) { var t = e.match(/url\s*\(\s*['"]?\s*#([^'"\s)]+)\s*['"]?\s*\)/i); return t ? t[1] : ""; }
function Ze(e, t) { var n = e.getAttribute("style"), r = {}, i = {}, a = { strokeStyle: r, fillStyle: i, useFill: !1, useStroke: !1 }; for (var n_19 in $e) {
    var r_18 = e.getAttribute(n_19);
    r_18 && Qe(t, a, n_19, r_18.trim());
} if (n) {
    var e_24 = n.split(";");
    for (var n_20 = 0; n_20 < e_24.length; n_20++) {
        var _a = e_24[n_20].trim().split(":"), r_19 = _a[0], i_12 = _a[1];
        $e[r_19] && Qe(t, a, r_19, i_12.trim());
    }
} return { strokeStyle: a.useStroke ? r : null, fillStyle: a.useFill ? i : null, useFill: a.useFill, useStroke: a.useStroke }; }
function Qe(e, t, r, i) { switch (r) {
    case "stroke":
        if (i !== "none") {
            if (i.startsWith("url(")) {
                var n_21 = Xe(i);
                t.strokeStyle.fill = e.defs[n_21];
            }
            else
                t.strokeStyle.color = n.z.shared.setValue(i).toNumber();
            t.useStroke = !0;
        }
        break;
    case "stroke-width":
        t.strokeStyle.width = Number(i);
        break;
    case "fill":
        if (i !== "none") {
            if (i.startsWith("url(")) {
                var n_22 = Xe(i);
                t.fillStyle.fill = e.defs[n_22];
            }
            else
                t.fillStyle.color = n.z.shared.setValue(i).toNumber();
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
var $e;
function et() { return (et = e.n((function () { n.B(), $e = { fill: { type: "paint", default: 0 }, "fill-opacity": { type: "number", default: 1 }, stroke: { type: "paint", default: 0 }, "stroke-width": { type: "number", default: 1 }, "stroke-opacity": { type: "number", default: 1 }, "stroke-linecap": { type: "string", default: "butt" }, "stroke-linejoin": { type: "string", default: "miter" }, "stroke-miterlimit": { type: "number", default: 10 }, "stroke-dasharray": { type: "string", default: "none" }, "stroke-dashoffset": { type: "number", default: 0 }, opacity: { type: "number", default: 1 } }; })))(); }
function tt(e) { if (e.length <= 2)
    return !0; var t = e.map(function (e) { return e.area; }).sort(function (e, t) { return t - e; }), n = t[0], r = t[1], i = t[t.length - 1], a = n / r, o = r / i; return !(a > 3 && o < 2); }
function nt(e) { return e.split(/(?=[Mm])/).filter(function (e) { return e.trim().length > 0; }); }
function rt(e) { var t = e.match(/[-+]?[0-9]*\.?[0-9]+/g); if (!t || t.length < 4)
    return 0; var n = t.map(Number), r = [], i = []; for (var e_25 = 0; e_25 < n.length; e_25 += 2)
    e_25 + 1 < n.length && (r.push(n[e_25]), i.push(n[e_25 + 1])); if (r.length === 0 || i.length === 0)
    return 0; var a = Math.min.apply(Math, r), o = Math.max.apply(Math, r), s = Math.min.apply(Math, i), c = Math.max.apply(Math, i); return (o - a) * (c - s); }
function it(e, t) { var n = new Y(e, !1); for (var _i = 0, _a = n.instructions; _i < _a.length; _i++) {
    var e_26 = _a[_i];
    t.instructions.push(e_26);
} }
function at() { return (at = e.n((function () { Ue(); })))(); }
function ot(e, t) { if (typeof e == "string") {
    var t_25 = document.createElement("div");
    t_25.innerHTML = e.trim(), e = t_25.querySelector("svg");
} var n = { context: t, defs: {}, path: new Y }; We(e, n); var r = e.children, _a = Ze(e, n), i = _a.fillStyle, a = _a.strokeStyle; for (var e_27 = 0; e_27 < r.length; e_27++) {
    var t_26 = r[e_27];
    t_26.nodeName.toLowerCase() !== "defs" && st(t_26, n, i, a);
} return t; }
function st(e, n, r, a) { var o = e.children, _a = Ze(e, n), s = _a.fillStyle, c = _a.strokeStyle; s && r ? r = t.a(t.a({}, r), s) : s && (r = s), c && a ? a = t.a(t.a({}, a), c) : c && (a = c); var l = !r && !a; l && (r = { color: 0 }); var u, d, f, p, m, h, g, _, v, y, b, x, S, C, w, T, E; switch (e.nodeName.toLowerCase()) {
    case "path": {
        C = e.getAttribute("d");
        var t_27 = e.getAttribute("fill-rule"), i_13 = nt(C), o_7 = t_27 === "evenodd", s_7 = i_13.length > 1;
        if (o_7 && s_7) {
            var e_28 = i_13.map(function (e) { return ({ path: e, area: rt(e) }); });
            if (e_28.sort(function (e, t) { return t.area - e.area; }), i_13.length > 3 || !tt(e_28))
                for (var t_28 = 0; t_28 < e_28.length; t_28++) {
                    var i_14 = e_28[t_28], o_8 = t_28 === 0;
                    n.context.beginPath();
                    var s_8 = new Y(void 0, !0);
                    it(i_14.path, s_8), n.context.path(s_8), o_8 ? (r && n.context.fill(r), a && n.context.stroke(a)) : n.context.cut();
                }
            else
                for (var t_29 = 0; t_29 < e_28.length; t_29++) {
                    var i_15 = e_28[t_29], o_9 = t_29 % 2 == 1;
                    n.context.beginPath();
                    var s_9 = new Y(void 0, !0);
                    it(i_15.path, s_9), n.context.path(s_9), o_9 ? n.context.cut() : (r && n.context.fill(r), a && n.context.stroke(a));
                }
        }
        else
            w = new Y(C, !t_27 || t_27 === "evenodd"), n.context.path(w), r && n.context.fill(r), a && n.context.stroke(a);
        break;
    }
    case "circle":
        g = X(e, "cx", 0), _ = X(e, "cy", 0), v = X(e, "r", 0), n.context.ellipse(g, _, v, v), r && n.context.fill(r), a && n.context.stroke(a);
        break;
    case "rect":
        u = X(e, "x", 0), d = X(e, "y", 0), T = X(e, "width", 0), E = X(e, "height", 0), y = X(e, "rx", 0), b = X(e, "ry", 0), y || b ? n.context.roundRect(u, d, T, E, y || b) : n.context.rect(u, d, T, E), r && n.context.fill(r), a && n.context.stroke(a);
        break;
    case "ellipse":
        g = X(e, "cx", 0), _ = X(e, "cy", 0), y = X(e, "rx", 0), b = X(e, "ry", 0), n.context.beginPath(), n.context.ellipse(g, _, y, b), r && n.context.fill(r), a && n.context.stroke(a);
        break;
    case "line":
        f = X(e, "x1", 0), p = X(e, "y1", 0), m = X(e, "x2", 0), h = X(e, "y2", 0), n.context.beginPath(), n.context.moveTo(f, p), n.context.lineTo(m, h), a && n.context.stroke(a);
        break;
    case "polygon":
        S = e.getAttribute("points"), x = S.match(/-?\d+/g).map(function (e) { return parseInt(e, 10); }), n.context.poly(x, !0), r && n.context.fill(r), a && n.context.stroke(a);
        break;
    case "polyline":
        S = e.getAttribute("points"), x = S.match(/-?\d+/g).map(function (e) { return parseInt(e, 10); }), n.context.poly(x, !1), a && n.context.stroke(a);
        break;
    case "g":
    case "svg": break;
    default: i.R("[SVG parser] <".concat(e.nodeName, "> elements unsupported"));
} l && (r = null); for (var e_29 = 0; e_29 < o.length; e_29++)
    st(o[e_29], n, r, a); }
function ct() { return (ct = e.n((function () { i.L(), Ue(), Ye(), et(), at(), t.o(); })))(); }
function lt(e) { return e.texture !== void 0; }
var ut, dt;
function ft() { return (ft = e.n((function () { r.x(), i.Y(), ut = { repeat: { addressModeU: "repeat", addressModeV: "repeat" }, "repeat-x": { addressModeU: "repeat", addressModeV: "clamp-to-edge" }, "repeat-y": { addressModeU: "clamp-to-edge", addressModeV: "repeat" }, "no-repeat": { addressModeU: "clamp-to-edge", addressModeV: "clamp-to-edge" } }, dt = (function () {
    function dt(e, t) {
        var n;
        this.uid = i.X("fillPattern"), this._tick = 0, this.transform = new r.b;
        var a = lt(e) ? e : { texture: e, repetition: t };
        this.texture = a.texture, this.textureSpace = (n = a.textureSpace) == null ? "global" : n;
        var o = a.repetition;
        o && (this.texture.source.style.addressModeU = ut[o].addressModeU, this.texture.source.style.addressModeV = ut[o].addressModeV);
    }
    dt.prototype.setTransform = function (e) { if (e) {
        if (this.transform.equals(e))
            return;
        this.transform.copyFrom(e);
    }
    else {
        if (this.transform.isIdentity())
            return;
        this.transform.identity();
    } this._tick++; };
    Object.defineProperty(dt.prototype, "texture", {
        get: function () { return this._texture; },
        set: function (e) { this._texture !== e && (this._texture = e, this._tick++); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(dt.prototype, "styleKey", {
        get: function () { return "fill-pattern-".concat(this.uid, "-").concat(this._tick); },
        enumerable: false,
        configurable: true
    });
    dt.prototype.destroy = function () { this.texture.destroy(!0), this.texture = null; };
    return dt;
}()); })))(); }
function pt(e) { return n.z.isColorLike(e); }
function mt(e) { return e instanceof dt; }
function ht(e) { return e instanceof B; }
function gt(e) { return e instanceof a.gt; }
function _t(e, r, i) { var o = n.z.shared.setValue(r == null ? 0 : r); return e.color = o.toNumber(), e.alpha = o.alpha === 1 ? i.alpha : o.alpha, e.texture = a.gt.WHITE, t.a(t.a({}, i), e); }
function vt(e, n, r) { return e.texture = n, t.a(t.a({}, r), e); }
function yt(e, n, r) { return e.fill = n, e.color = 16777215, e.texture = n.texture, e.matrix = n.transform, e.textureSpace = n.textureSpace, t.a(t.a({}, r), e); }
function bt(e, n, r) { return n.buildGradient(), e.fill = n, e.color = 16777215, e.texture = n.texture, e.matrix = n.transform, e.textureSpace = n.textureSpace, t.a(t.a({}, r), e); }
function xt(e, r) { var i = t.a(t.a({}, r), e), a = n.z.shared.setValue(i.color); return i.alpha *= a.alpha, i.color = a.toNumber(), i; }
function Q(e, t) { if (e == null)
    return null; var n = {}, r = e; return pt(e) ? _t(n, e, t) : gt(e) ? vt(n, e, t) : mt(e) ? yt(n, e, t) : ht(e) ? bt(n, e, t) : r.fill && mt(r.fill) ? yt(r, r.fill, t) : r.fill && ht(r.fill) ? bt(r, r.fill, t) : xt(r, t); }
function St(e, n) { var r = n.width, i = n.alignment, a = n.miterLimit, o = n.cap, s = n.join, c = n.pixelLine, l = Q(e, t.r(n, Ct)); return l ? t.a({ width: r, alignment: i, miterLimit: a, cap: o, join: s, pixelLine: c }, l) : null; }
var Ct;
function wt() { return (wt = e.n((function () { n.B(), a._t(), V(), ft(), t.o(), t.i(), Ct = ["width", "alignment", "miterLimit", "cap", "join", "pixelLine"]; })))(); }
function Tt(e, t) { var n = 1, r = e.shapePath.shapePrimitives; for (var e_30 = 0; e_30 < r.length; e_30++) {
    var i_16 = r[e_30].shape;
    if (i_16.type !== "polygon")
        continue;
    var a_9 = i_16.points, o_10 = a_9.length;
    if (o_10 < 6)
        continue;
    var s_10 = i_16.closePath;
    for (var e_31 = 0; e_31 < o_10; e_31 += 2) {
        if (!s_10 && (e_31 === 0 || e_31 === o_10 - 2))
            continue;
        var r_20 = (e_31 - 2 + o_10) % o_10, i_17 = (e_31 + 2) % o_10, c_6 = a_9[r_20], l_9 = a_9[r_20 + 1], u_7 = a_9[e_31], d_7 = a_9[e_31 + 1], f_7 = a_9[i_17], p_7 = a_9[i_17 + 1], m_5 = c_6 - u_7, h_6 = l_9 - d_7, g_6 = f_7 - u_7, _6 = p_7 - d_7, v_5 = m_5 * m_5 + h_6 * h_6, y_4 = g_6 * g_6 + _6 * _6;
        if (v_5 < 1e-12 || y_4 < 1e-12)
            continue;
        var b_2 = (m_5 * g_6 + h_6 * _6) / Math.sqrt(v_5 * y_4);
        b_2 < -1 ? b_2 = -1 : b_2 > 1 && (b_2 = 1);
        var x_3 = Math.sqrt((1 - b_2) * .5);
        if (x_3 < 1e-6)
            continue;
        var S_2 = Math.min(1 / x_3, t);
        S_2 > n && (n = S_2);
    }
} return n; }
var Et, Dt, Ot, $;
function kt() { return (kt = e.n((function () { n.H(), n.B(), r.x(), r.C(), a._t(), i.Y(), i.W(), o.M(), Ue(), ct(), wt(), t.o(), Et = new r.S, Dt = new r.b, Ot = (function (_super) {
    __extends(e, _super);
    function e() {
        var _this = this;
        _this = _super.apply(this, arguments) || this, _this._gpuData = Object.create(null), _this.autoGarbageCollect = !0, _this._gcLastUsed = -1, _this.uid = i.X("graphicsContext"), _this.dirty = !0, _this.batchMode = "auto", _this.instructions = [], _this.destroyed = !1, _this._activePath = new Y, _this._transform = new r.b, _this._fillStyle = t.a({}, e.defaultFillStyle), _this._strokeStyle = t.a({}, e.defaultStrokeStyle), _this._stateStack = [], _this._tick = 0, _this._bounds = new o.j, _this._boundsDirty = !0;
        return _this;
    }
    e.prototype.clone = function () { var n = new e; return n.batchMode = this.batchMode, n.instructions = this.instructions.slice(), n._activePath = this._activePath.clone(), n._transform = this._transform.clone(), n._fillStyle = t.a({}, this._fillStyle), n._strokeStyle = t.a({}, this._strokeStyle), n._stateStack = this._stateStack.slice(), n._bounds = this._bounds.clone(), n._boundsDirty = !0, n; };
    Object.defineProperty(e.prototype, "fillStyle", {
        get: function () { return this._fillStyle; },
        set: function (t) { this._fillStyle = Q(t, e.defaultFillStyle); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "strokeStyle", {
        get: function () { return this._strokeStyle; },
        set: function (t) { this._strokeStyle = St(t, e.defaultStrokeStyle); },
        enumerable: false,
        configurable: true
    });
    e.prototype.setFillStyle = function (t) { return this._fillStyle = Q(t, e.defaultFillStyle), this; };
    e.prototype.setStrokeStyle = function (t) { return this._strokeStyle = Q(t, e.defaultStrokeStyle), this; };
    e.prototype.texture = function (e, t, r, i, a, o) { return this.instructions.push({ action: "texture", data: { image: e, dx: r || 0, dy: i || 0, dw: a || e.frame.width, dh: o || e.frame.height, transform: this._transform.clone(), alpha: this._fillStyle.alpha, style: t || t === 0 ? n.z.shared.setValue(t).toNumber() : 16777215 } }), this.onUpdate(), this; };
    e.prototype.beginPath = function () { return this._activePath = new Y, this; };
    e.prototype.fill = function (t, n) { var r, a = this.instructions[this.instructions.length - 1]; return r = this._tick === 0 && (a == null ? void 0 : a.action) === "stroke" ? a.data.path : this._activePath.clone(), r && (t != null && (n !== void 0 && typeof t == "number" && (i.U(i.G, "GraphicsContext.fill(color, alpha) is deprecated, use GraphicsContext.fill({ color, alpha }) instead"), t = { color: t, alpha: n }), this._fillStyle = Q(t, e.defaultFillStyle)), this.instructions.push({ action: "fill", data: { style: this.fillStyle, path: r } }), this.onUpdate(), this._initNextPathLocation(), this._tick = 0), this; };
    e.prototype._initNextPathLocation = function () { var _a = this._activePath.getLastPoint(r.S.shared), e = _a.x, t = _a.y; this._activePath.clear(), this._activePath.moveTo(e, t); };
    e.prototype.stroke = function (t) { var n, r = this.instructions[this.instructions.length - 1]; return n = this._tick === 0 && (r == null ? void 0 : r.action) === "fill" ? r.data.path : this._activePath.clone(), n && (t != null && (this._strokeStyle = St(t, e.defaultStrokeStyle)), this.instructions.push({ action: "stroke", data: { style: this.strokeStyle, path: n } }), this.onUpdate(), this._initNextPathLocation(), this._tick = 0), this; };
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
    e.prototype.svg = function (e) { return this._tick++, ot(e, this), this; };
    e.prototype.restore = function () { var e = this._stateStack.pop(); return e && (this._transform = e.transform, this._fillStyle = e.fillStyle, this._strokeStyle = e.strokeStyle), this; };
    e.prototype.save = function () { return this._stateStack.push({ transform: this._transform.clone(), fillStyle: t.a({}, this._fillStyle), strokeStyle: t.a({}, this._strokeStyle) }), this; };
    e.prototype.getTransform = function () { return this._transform; };
    e.prototype.resetTransform = function () { return this._transform.identity(), this; };
    e.prototype.rotate = function (e) { return this._transform.rotate(e), this; };
    e.prototype.scale = function (e, t) {
        if (t === void 0) { t = e; }
        return this._transform.scale(e, t), this;
    };
    e.prototype.setTransform = function (e, t, n, i, a, o) { return e instanceof r.b ? (this._transform.set(e.a, e.b, e.c, e.d, e.tx, e.ty), this) : (this._transform.set(e, t, n, i, a, o), this); };
    e.prototype.transform = function (e, t, n, i, a, o) { return e instanceof r.b ? (this._transform.append(e), this) : (Dt.set(e, t, n, i, a, o), this._transform.append(Dt), this); };
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
                var t_34 = n_24.data, r_22 = t_34.style.alignment, i_18 = t_34.style.width * (1 - r_22);
                t_34.style.join === "miter" && (i_18 *= Tt(t_34.path, t_34.style.miterLimit));
                var a_10 = t_34.path.bounds;
                e.addFrame(a_10.minX - i_18, a_10.minY - i_18, a_10.maxX + i_18, a_10.maxY + i_18);
            }
        } return e.isValid || e.set(0, 0, 0, 0), e; },
        enumerable: false,
        configurable: true
    });
    e.prototype.containsPoint = function (e) { if (!this.bounds.containsPoint(e.x, e.y))
        return !1; var t = this.instructions, n = !1; for (var i_19 = 0; i_19 < t.length; i_19++) {
        var a_11 = t[i_19], o_11 = a_11.data, s_11 = o_11.path;
        if (!a_11.action || !s_11)
            continue;
        var c_7 = o_11.style, l_10 = s_11.shapePath.shapePrimitives;
        for (var t_35 = 0; t_35 < l_10.length; t_35++) {
            var i_20 = l_10[t_35].shape;
            if (!c_7 || !i_20)
                continue;
            var s_12 = l_10[t_35].transform, u_8 = s_12 ? s_12.applyInverse(e, Et) : e;
            if (a_11.action === "fill")
                n = i_20.contains(u_8.x, u_8.y);
            else {
                var e_33 = c_7;
                n = i_20.strokeContains(u_8.x, u_8.y, e_33.width, e_33.alignment);
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
}(n.V)), Ot.defaultFillStyle = { color: 16777215, alpha: 1, texture: a.gt.WHITE, matrix: null, fill: null, textureSpace: "local" }, Ot.defaultStrokeStyle = { width: 1, color: 16777215, alpha: 1, alignment: .5, miterLimit: 10, cap: "butt", join: "miter", texture: a.gt.WHITE, matrix: null, fill: null, textureSpace: "local", pixelLine: !1 }, $ = Ot; })))(); }
var At, jt;
function Mt() { return (Mt = e.n((function () { n.Y(), a.K(), i.f(), i.P(), p(), At = (function () {
    function At() {
        this.batches = [], this.batched = !1;
    }
    At.prototype.destroy = function () { this.batches.forEach(function (e) { i.N.return(e); }), this.batches.length = 0; };
    return At;
}()), jt = (function () {
    function jt(e, t) {
        this.state = a.G.for2d(), this.renderer = e, this._adaptor = t, this.renderer.runners.contextChange.add(this), this._managedGraphics = new i.d({ renderer: e, type: "renderable", priority: -1, name: "graphics" });
    }
    jt.prototype.contextChange = function () { this._adaptor.contextChange(this.renderer); };
    jt.prototype.validateRenderable = function (e) { var t = e.context, n = !!e._gpuData, r = this.renderer.graphicsContext.updateGpuContext(t); return !!(r.isBatchable || n !== r.isBatchable); };
    jt.prototype.addRenderable = function (e, t) { var n = this.renderer.graphicsContext.updateGpuContext(e.context); (e.didViewUpdate || !e._gpuData[this.renderer.uid]) && this._rebuild(e), n.isBatchable ? this._addToBatcher(e, t) : (this.renderer.renderPipes.batch.break(t), t.add(e)); };
    jt.prototype.updateRenderable = function (e) { var t = this._getGpuDataForRenderable(e).batches; for (var e_35 = 0; e_35 < t.length; e_35++) {
        var n_25 = t[e_35];
        n_25._batcher.updateElement(n_25);
    } };
    jt.prototype.execute = function (e) { if (!e.isRenderable)
        return; var t = this.renderer, n = e.context; if (!t.graphicsContext.getGpuContext(n).batches.length)
        return; var r = n.customShader || this._adaptor.shader; this.state.blendMode = e.groupBlendMode; var i = r.resources.localUniforms.uniforms; i.uTransformMatrix = e.groupTransform, i.uRound = t._roundPixels | e._roundPixels, o.u(e.groupColorAlpha, i.uColor, 0), this._adaptor.execute(this, e); };
    jt.prototype._rebuild = function (e) { var t = this._getGpuDataForRenderable(e), n = this.renderer.graphicsContext.updateGpuContext(e.context); t.destroy(), n.isBatchable && this._updateBatchesForRenderable(e, t); };
    jt.prototype._addToBatcher = function (e, t) { var n = this.renderer.renderPipes.batch, r = this._getGpuDataForRenderable(e).batches; for (var e_36 = 0; e_36 < r.length; e_36++) {
        var i_21 = r[e_36];
        n.addToBatch(i_21, t);
    } };
    jt.prototype._getGpuDataForRenderable = function (e) { return e._gpuData[this.renderer.uid] || this._initGpuDataForRenderable(e); };
    jt.prototype._initGpuDataForRenderable = function (e) { var t = new At; return e._gpuData[this.renderer.uid] = t, this._managedGraphics.add(e), t; };
    jt.prototype._updateBatchesForRenderable = function (e, t) { var n = e.context, r = this.renderer.graphicsContext.getGpuContext(n), a = this.renderer._roundPixels | e._roundPixels; t.batches = r.batches.map(function (t) { var n = i.N.get(f); return t.copyTo(n), n.renderable = e, n.roundPixels = a, n; }); };
    jt.prototype.destroy = function () { this._managedGraphics.destroy(), this.renderer = null, this._adaptor.destroy(), this._adaptor = null, this.state = null; };
    return jt;
}()), jt.extension = { type: [n.q.WebGLPipes, n.q.WebGPUPipes], name: "graphics" }; })))(); }
var Nt, Pt;
function Ft() { return (Ft = e.n((function () { i.W(), s.k(), kt(), o.l(), t.i(), t.o(), Nt = ["context", "roundPixels"], Pt = (function (_super) {
    __extends(e, _super);
    function e(e) {
        var _this = this;
        e instanceof $ && (e = { context: e });
        var n = e || {}, r = n.context, i = n.roundPixels, a = t.r(n, Nt);
        _this = _super.call(this, t.a({ label: "Graphics" }, a)) || this, _this.renderPipeId = "graphics", r ? _this.context = r : (_this.context = _this._ownedContext = new $, _this.context.autoGarbageCollect = _this.autoGarbageCollect), _this.didViewUpdate = !0, _this.allowChildren = !1, _this.roundPixels = i != null && i;
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
    e.prototype.lineStyle = function (e, t, n) { i.U(i.G, "Graphics#lineStyle is no longer needed. Use Graphics#setStrokeStyle to set the stroke style."); var r = {}; return e && (r.width = e), t && (r.color = t), n && (r.alpha = n), this.context.strokeStyle = r, this; };
    e.prototype.beginFill = function (e, t) { i.U(i.G, "Graphics#beginFill is no longer needed. Use Graphics#fill to fill the shape with the desired style."); var n = {}; return e !== void 0 && (n.color = e), t !== void 0 && (n.alpha = t), this.context.fillStyle = n, this; };
    e.prototype.endFill = function () { i.U(i.G, "Graphics#endFill is no longer needed. Use Graphics#fill to fill the shape with the desired style."), this.context.fill(); var e = this.context.strokeStyle; return (e.width !== $.defaultStrokeStyle.width || e.color !== $.defaultStrokeStyle.color || e.alpha !== $.defaultStrokeStyle.alpha) && this.context.stroke(), this; };
    e.prototype.drawCircle = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return i.U(i.G, "Graphics#drawCircle has been renamed to Graphics#circle"), this._callContextMethod("circle", e);
    };
    e.prototype.drawEllipse = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return i.U(i.G, "Graphics#drawEllipse has been renamed to Graphics#ellipse"), this._callContextMethod("ellipse", e);
    };
    e.prototype.drawPolygon = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return i.U(i.G, "Graphics#drawPolygon has been renamed to Graphics#poly"), this._callContextMethod("poly", e);
    };
    e.prototype.drawRect = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return i.U(i.G, "Graphics#drawRect has been renamed to Graphics#rect"), this._callContextMethod("rect", e);
    };
    e.prototype.drawRoundedRect = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return i.U(i.G, "Graphics#drawRoundedRect has been renamed to Graphics#roundRect"), this._callContextMethod("roundRect", e);
    };
    e.prototype.drawStar = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return i.U(i.G, "Graphics#drawStar has been renamed to Graphics#star"), this._callContextMethod("star", e);
    };
    return e;
}(s.O)); })))(); }
Object.defineProperty(exports, "a", { enumerable: !0, get: function () { return $; } }), Object.defineProperty(exports, "c", { enumerable: !0, get: function () { return Q; } }), Object.defineProperty(exports, "d", { enumerable: !0, get: function () { return ft; } }), Object.defineProperty(exports, "f", { enumerable: !0, get: function () { return W; } }), Object.defineProperty(exports, "h", { enumerable: !0, get: function () { return V; } }), Object.defineProperty(exports, "i", { enumerable: !0, get: function () { return Mt; } }), Object.defineProperty(exports, "l", { enumerable: !0, get: function () { return St; } }), Object.defineProperty(exports, "m", { enumerable: !0, get: function () { return B; } }), Object.defineProperty(exports, "n", { enumerable: !0, get: function () { return Ft; } }), Object.defineProperty(exports, "o", { enumerable: !0, get: function () { return kt; } }), Object.defineProperty(exports, "p", { enumerable: !0, get: function () { return G; } }), Object.defineProperty(exports, "r", { enumerable: !0, get: function () { return jt; } }), Object.defineProperty(exports, "s", { enumerable: !0, get: function () { return wt; } }), Object.defineProperty(exports, "t", { enumerable: !0, get: function () { return Pt; } }), Object.defineProperty(exports, "u", { enumerable: !0, get: function () { return dt; } });
