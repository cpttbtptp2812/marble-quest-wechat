(function () { var e = typeof wx < "u"; function t(e, t) { } typeof GameGlobal < "u" && (GameGlobal.__saplingLog = t), e && wx.onError && wx.onError(function (e) { e && e.message, e && e.stack; }); })();
var e = require("./rolldown-runtime-8PkXcCTM.js");
function t(e, t) { if (typeof t != "function" && t !== null)
    throw TypeError("Class extends value " + String(t) + " is not a constructor or null"); xe(e, t); function n() { this.constructor = e; } e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n); }
function n(e) { return e |= e >> 1, e |= e >> 2, e |= e >> 4, e |= e >> 8, e |= e >> 16, e + 1; }
function r(e) { return e > 0 && !(e & e - 1); }
function i(e, t, n) { return t === void 0 ? (n = 1, t = 0) : n === void 0 && (n = t, t = 0), n > t ? (e = (e - t) % (n - t), e + (e < 0 ? n : t)) : (e = (e - n) % (t - n), e + (e <= 0 ? t : n)); }
function a(e, t, n) { return e < t ? t : e > n ? n : e; }
function o(e, t) { return e === void 0 ? (t = 1, e = 0) : t === void 0 && (t = e, e = 0), e === t ? e : we() * (t - e) + e; }
function s(e, t) { return { x: e, y: t }; }
function c(e) { return { s: Ke(e), c: qe(e) }; }
function l(e, t, n) { return e.x = t, e.y = n, e; }
function u(e, t) { return e.x = t.x, e.y = t.y, e; }
function d(e) { return e.x = 0, e.y = 0, e; }
function f(e) { return e.x = -e.x, e.y = -e.y, e; }
function p(e, t) { return e.x += t.x, e.y += t.y, e; }
function m(e, t, n) { return e.x = t.x + n.x, e.y = t.y + n.y, e; }
function h(e, t) { return e.x -= t.x, e.y -= t.y, e; }
function g(e, t, n) { return e.x = t.x - n.x, e.y = t.y - n.y, e; }
function _(e, t) { return e.x *= t, e.y *= t, e; }
function v(e, t, n) { return e.x = t * n.x, e.y = t * n.y, e; }
function y(e, t, n) { return e.x += t * n.x, e.y += t * n.y, e; }
function b(e, t, n) { return e.x -= t * n.x, e.y -= t * n.y, e; }
function x(e, t, n, r, i) { return e.x = t * n.x + r * i.x, e.y = t * n.y + r * i.y, e; }
function S(e, t, n, r, i, a, o) { return e.x = t * n.x + r * i.x + a * o.x, e.y = t * n.y + r * i.y + a * o.y, e; }
function C(e) { var t = Je(e.x * e.x + e.y * e.y); if (t !== 0) {
    var n = 1 / t;
    e.x *= n, e.y *= n;
} return t; }
function w(e) { var t = Je(e.x * e.x + e.y * e.y); if (t > 0) {
    var n = 1 / t;
    e.x *= n, e.y *= n;
} return e; }
function T(e, t, n) { var r = n * t.y, i = -n * t.x; return e.x = r, e.y = i, e; }
function E(e, t, n) { var r = -t * n.y, i = t * n.x; return e.x = r, e.y = i, e; }
function D(e, t) { return e.x * t.y - e.y * t.x; }
function O(e, t) { return e.x * t.x + e.y * t.y; }
function k(e) { return e.x * e.x + e.y * e.y; }
function A(e, t) { var n = e.x - t.x, r = e.y - t.y; return Je(n * n + r * r); }
function j(e, t) { var n = e.x - t.x, r = e.y - t.y; return n * n + r * r; }
function ee(e, t) { return e.c = qe(t), e.s = Ke(t), e; }
function M(e, t, n) { return e.x = t.c * n.x - t.s * n.y, e.y = t.s * n.x + t.c * n.y, e; }
function te(e, t, n) { var r = t.c * n.x + t.s * n.y, i = -t.s * n.x + t.c * n.y; return e.x = r, e.y = i, e; }
function ne(e, t, n, r) { var i = t.c * r.x + t.s * r.y, a = -t.s * r.x + t.c * r.y, o = n.c * i - n.s * a, s = n.s * i + n.c * a; return e.x = o, e.y = s, e; }
function N(e, t, n) { return { p: s(e, t), q: c(n) }; }
function P(e, t) { return e.p.x = t.p.x, e.p.y = t.p.y, e.q.s = t.q.s, e.q.c = t.q.c, e; }
function F(e, t, n) { var r = t.q.c * n.x - t.q.s * n.y + t.p.x, i = t.q.s * n.x + t.q.c * n.y + t.p.y; return e.x = r, e.y = i, e; }
function re(e, t, n) { var r = n.x - t.p.x, i = n.y - t.p.y, a = t.q.c * r + t.q.s * i, o = -t.q.s * r + t.q.c * i; return e.x = a, e.y = o, e; }
function ie(e, t, n, r) { var i = t.q.c * r.x - t.q.s * r.y + t.p.x, a = t.q.s * r.x + t.q.c * r.y + t.p.y, o = i - n.p.x, s = a - n.p.y, c = n.q.c * o + n.q.s * s, l = -n.q.s * o + n.q.c * s; return e.x = c, e.y = l, e; }
function ae(e, t, n) { var r = t.q.c * n.q.c + t.q.s * n.q.s, i = t.q.c * n.q.s - t.q.s * n.q.c, a = t.q.c * (n.p.x - t.p.x) + t.q.s * (n.p.y - t.p.y), o = -t.q.s * (n.p.x - t.p.x) + t.q.c * (n.p.y - t.p.y); return e.q.c = r, e.q.s = i, e.p.x = a, e.p.y = o, e; }
function oe(e, t, n, r) { return e.q.c = at(r), e.q.s = it(r), e.p.x = n.x - (e.q.c * t.x - e.q.s * t.y), e.p.y = n.y - (e.q.s * t.x + e.q.c * t.y), e; }
function se(e, t, n, r) { for (var i = 0; i < n.pointCount; ++i) {
    var a = n.points[i].id;
    e[i] = Un.removeState;
    for (var o = 0; o < r.pointCount; ++o)
        if (r.points[o].id.key === a.key) {
            e[i] = Un.persistState;
            break;
        }
} for (var i = 0; i < r.pointCount; ++i) {
    var a = r.points[i].id;
    t[i] = Un.addState;
    for (var o = 0; o < n.pointCount; ++o)
        if (n.points[o].id.key === a.key) {
            t[i] = Un.persistState;
            break;
        }
} }
function ce(e, t, n, r, i) { var a = 0, o = O(n, t[0].v) - r, s = O(n, t[1].v) - r; if (o <= 0 && e[a++].set(t[0]), s <= 0 && e[a++].set(t[1]), o * s < 0) {
    var c = o / (o - s);
    x(e[a].v, 1 - c, t[0].v, c, t[1].v), e[a].id.setFeatures(i, U.e_vertex, t[0].id.indexB, U.e_face), ++a;
} return a; }
function le(e, t) { return Yn(e * t); }
function ue(e, t) { return e > t ? e : t; }
function de(e, t) { for (var n = I.zero(), r = 0, i = I.zero(), a, o = 1 / 3, a = 0; a < t; ++a) {
    var s = i, c = e[a], l = a + 1 < t ? e[a + 1] : e[0], u = I.sub(c, s), d = I.sub(l, s), f = .5 * I.crossVec2Vec2(u, d);
    r += f, S(zr, 1, s, 1, c, 1, l), y(n, f * o, zr);
} return n.mul(1 / r), n; }
function fe(e, t, n, r, i, a, o) { Gi(e, n.getShape(), t, a.getShape(), i); }
function pe(e, t, n, r, i, a, o) { Qi(e, n.getShape(), t, a.getShape(), i); }
function me(e, t, n, r, i, a, o) { var s = n.getShape(), c = new Nr; s.getChildEdge(c, r), Qi(e, c, t, a.getShape(), i); }
function he(e, t, n, r, i, a, o) { ha(e, n.getShape(), t, a.getShape(), i); }
function ge(e, t, n, r, i) { var a = e.m_count, o = n.m_count, s = e.m_normals, c = e.m_vertices, l = n.m_vertices; ae(aa, r, t); for (var u = 0, d = -1 / 0, f = 0; f < a; ++f) {
    M(ia, aa.q, s[f]), F(ra, aa, c[f]);
    for (var p = 1 / 0, m = 0; m < o; ++m) {
        var h = O(ia, l[m]) - O(ia, ra);
        h < p && (p = h);
    }
    p > d && (d = p, u = f);
} i.maxSeparation = d, i.bestIndex = u; }
function _e(e, t, n, r, i, a) { var o = t.m_normals, s = i.m_count, c = i.m_vertices, l = i.m_normals; ne(pa, a.q, n.q, o[r]); for (var u = 0, d = 1 / 0, f = 0; f < s; ++f) {
    var p = O(pa, l[f]);
    p < d && (d = p, u = f);
} var m = u, h = m + 1 < s ? m + 1 : 0; F(e[0].v, a, c[m]), e[0].id.setFeatures(r, U.e_face, m, U.e_vertex), F(e[1].v, a, c[h]), e[1].id.setFeatures(r, U.e_face, h, U.e_vertex); }
function ve(e, t, n, r, i, a, o) { va(e, n.getShape(), t, a.getShape(), i); }
function ye(e, t, n, r, i, a, o) { Ba(e, n.getShape(), t, a.getShape(), i); }
function be(e, t, n, r, i, a, o) { n.getShape().getChildEdge(ba, r), Ba(e, ba, t, a.getShape(), i); }
var xe, Se, Ce, we, Te, Ee, De, Oe, ke, Ae, je, I, Me, Ne, Pe, Fe, L, R, Ie, Le, Re, ze, Be, Ve, He, Ue, We, Ge, Ke, qe, Je, Ye, Xe, Ze, z, Qe, $e, et, tt, nt, rt, it, at, ot, st, ct, lt, ut, dt, ft, pt, mt, ht, gt, _t, vt, yt, bt, xt, St, B, Ct, wt, V, Tt, Et, Dt, Ot, kt, At, jt, Mt, Nt, Pt, Ft, It, Lt, Rt, zt, Bt, Vt, Ht, Ut, Wt, Gt, Kt, qt, Jt, Yt, Xt, Zt, Qt, $t, en, tn, nn, rn, an, on, sn, cn, ln, un, dn, fn, pn, mn, hn, gn, _n, vn, yn, bn, xn, Sn, Cn, wn, Tn, En, Dn, On, kn, An, jn, Mn, Nn, Pn, Fn, In, Ln, Rn, zn, Bn, Vn, Hn, H, U, Un, Wn, Gn, Kn, qn, Jn, Yn, Xn, Zn, Qn, $n, er, tr, nr, rr, ir, ar, or, sr, cr, lr, ur, dr, fr, pr, mr, hr, gr, W, G, _r, vr, yr, br, xr, Sr, Cr, wr, Tr, Er, Dr, Or, kr, Ar, K, jr, Mr, Nr, Pr, Fr, Ir, Lr, Rr, zr, Br, Vr, Hr, Ur, Wr, Gr, Kr, qr, Jr, Yr, Xr, Zr, Qr, $r, ei, ti, ni, ri, ii, ai, oi, si, ci, li, ui, di, fi, pi, mi, hi, gi, _i, vi, yi, bi, xi, Si, Ci, wi, Ti, Ei, Di, Oi, ki, Ai, ji, Mi, Ni, Pi, q, Fi, Ii, Li, Ri, zi, Bi, Vi, Hi, Ui, Wi, Gi, Ki, qi, Ji, Yi, Xi, Zi, Qi, $i, ea, ta, na, ra, ia, aa, oa, sa, ca, la, ua, da, fa, pa, ma, ha, ga, _a, va, ya, ba, xa, Sa, Ca, wa, Ta, Ea, Da, Oa, ka, Aa, J, Y, ja, Ma, Na, Pa, Fa, X, Ia, Z, La, Q, $, Ra, za, Ba;
function Va() {
    return (Va = e.n((function () {
        xe = function (e, t) { return xe = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) { e.__proto__ = t; } || function (e, t) { for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]); }, xe(e, t); }, Se = function () { return Se = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in t = arguments[n], t)
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }, Se.apply(this, arguments); }, Ce = function (e, t) { e == null && (e = {}); var n = Se({}, e); for (var r in t)
            t.hasOwnProperty(r) && e[r] === void 0 && (n[r] = t[r]); if (typeof Object.getOwnPropertySymbols == "function")
            for (var i = Object.getOwnPropertySymbols(t), a = 0; a < i.length; a++) {
                var o = i[a];
                t.propertyIsEnumerable(o) && e[o] === void 0 && (n[o] = t[o]);
            } return n; }, we = Math.random, Te = 1e-9, Ee = Number.isFinite, De = Object.create(Math), De.EPSILON = Te, De.isFinite = Ee, De.nextPowerOfTwo = n, De.isPowerOfTwo = r, De.mod = i, De.clamp = a, De.random = o, Oe = Math.abs, ke = Math.sqrt, Ae = Math.max, je = Math.min, I = (function () { function e(t, n) { if (!(this instanceof e))
            return new e(t, n); t === void 0 ? (this.x = 0, this.y = 0) : typeof t == "object" ? (this.x = t.x, this.y = t.y) : (this.x = t, this.y = n); } return e.prototype._serialize = function () { return { x: this.x, y: this.y }; }, e._deserialize = function (t) { var n = Object.create(e.prototype); return n.x = t.x, n.y = t.y, n; }, e.zero = function () { var t = Object.create(e.prototype); return t.x = 0, t.y = 0, t; }, e.neo = function (t, n) { var r = Object.create(e.prototype); return r.x = t, r.y = n, r; }, e.clone = function (t) { return e.neo(t.x, t.y); }, e.prototype.toString = function () { return JSON.stringify(this); }, e.isValid = function (e) { return e != null && Number.isFinite(e.x) && Number.isFinite(e.y); }, e.assert = function (e) { }, e.prototype.clone = function () { return e.clone(this); }, e.prototype.setZero = function () { return this.x = 0, this.y = 0, this; }, e.prototype.set = function (e, t) { return typeof e == "object" ? (this.x = e.x, this.y = e.y) : (this.x = e, this.y = t), this; }, e.prototype.setNum = function (e, t) { return this.x = e, this.y = t, this; }, e.prototype.setVec2 = function (e) { return this.x = e.x, this.y = e.y, this; }, e.prototype.wSet = function (e, t, n, r) { return n !== void 0 || r !== void 0 ? this.setCombine(e, t, n, r) : this.setMul(e, t); }, e.prototype.setCombine = function (e, t, n, r) { var i = e * t.x + n * r.x, a = e * t.y + n * r.y; return this.x = i, this.y = a, this; }, e.prototype.setMul = function (e, t) { var n = e * t.x, r = e * t.y; return this.x = n, this.y = r, this; }, e.prototype.add = function (e) { return this.x += e.x, this.y += e.y, this; }, e.prototype.wAdd = function (e, t, n, r) { return n !== void 0 || r !== void 0 ? this.addCombine(e, t, n, r) : this.addMul(e, t); }, e.prototype.addCombine = function (e, t, n, r) { var i = e * t.x + n * r.x, a = e * t.y + n * r.y; return this.x += i, this.y += a, this; }, e.prototype.addMul = function (e, t) { var n = e * t.x, r = e * t.y; return this.x += n, this.y += r, this; }, e.prototype.wSub = function (e, t, n, r) { return n !== void 0 || r !== void 0 ? this.subCombine(e, t, n, r) : this.subMul(e, t); }, e.prototype.subCombine = function (e, t, n, r) { var i = e * t.x + n * r.x, a = e * t.y + n * r.y; return this.x -= i, this.y -= a, this; }, e.prototype.subMul = function (e, t) { var n = e * t.x, r = e * t.y; return this.x -= n, this.y -= r, this; }, e.prototype.sub = function (e) { return this.x -= e.x, this.y -= e.y, this; }, e.prototype.mul = function (e) { return this.x *= e, this.y *= e, this; }, e.prototype.length = function () { return e.lengthOf(this); }, e.prototype.lengthSquared = function () { return e.lengthSquared(this); }, e.prototype.normalize = function () { var e = this.length(); if (e < Te)
            return 0; var t = 1 / e; return this.x *= t, this.y *= t, e; }, e.normalize = function (t) { var n = e.lengthOf(t); if (n < Te)
            return e.zero(); var r = 1 / n; return e.neo(t.x * r, t.y * r); }, e.lengthOf = function (e) { return ke(e.x * e.x + e.y * e.y); }, e.lengthSquared = function (e) { return e.x * e.x + e.y * e.y; }, e.distance = function (e, t) { var n = e.x - t.x, r = e.y - t.y; return ke(n * n + r * r); }, e.distanceSquared = function (e, t) { var n = e.x - t.x, r = e.y - t.y; return n * n + r * r; }, e.areEqual = function (e, t) { return e === t || typeof t == "object" && !!t && e.x === t.x && e.y === t.y; }, e.skew = function (t) { return e.neo(-t.y, t.x); }, e.dot = function (e, t) { return e.x * t.x + e.y * t.y; }, e.cross = function (t, n) { return typeof n == "number" ? e.neo(n * t.y, -n * t.x) : typeof t == "number" ? e.neo(-t * n.y, t * n.x) : t.x * n.y - t.y * n.x; }, e.crossVec2Vec2 = function (e, t) { return e.x * t.y - e.y * t.x; }, e.crossVec2Num = function (t, n) { return e.neo(n * t.y, -n * t.x); }, e.crossNumVec2 = function (t, n) { return e.neo(-t * n.y, t * n.x); }, e.addCross = function (t, n, r) { if (typeof r == "number")
            return e.neo(r * n.y + t.x, -r * n.x + t.y); if (typeof n == "number")
            return e.neo(-n * r.y + t.x, n * r.x + t.y); }, e.addCrossVec2Num = function (t, n, r) { return e.neo(r * n.y + t.x, -r * n.x + t.y); }, e.addCrossNumVec2 = function (t, n, r) { return e.neo(-n * r.y + t.x, n * r.x + t.y); }, e.add = function (t, n) { return e.neo(t.x + n.x, t.y + n.y); }, e.wAdd = function (t, n, r, i) { return r !== void 0 || i !== void 0 ? e.combine(t, n, r, i) : e.mulNumVec2(t, n); }, e.combine = function (t, n, r, i) { return e.zero().setCombine(t, n, r, i); }, e.sub = function (t, n) { return e.neo(t.x - n.x, t.y - n.y); }, e.mul = function (t, n) { if (typeof t == "object")
            return e.neo(t.x * n, t.y * n); if (typeof n == "object")
            return e.neo(t * n.x, t * n.y); }, e.mulVec2Num = function (t, n) { return e.neo(t.x * n, t.y * n); }, e.mulNumVec2 = function (t, n) { return e.neo(t * n.x, t * n.y); }, e.prototype.neg = function () { return this.x = -this.x, this.y = -this.y, this; }, e.neg = function (t) { return e.neo(-t.x, -t.y); }, e.abs = function (t) { return e.neo(Oe(t.x), Oe(t.y)); }, e.mid = function (t, n) { return e.neo((t.x + n.x) * .5, (t.y + n.y) * .5); }, e.upper = function (t, n) { return e.neo(Ae(t.x, n.x), Ae(t.y, n.y)); }, e.lower = function (t, n) { return e.neo(je(t.x, n.x), je(t.y, n.y)); }, e.prototype.clamp = function (e) { var t = this.x * this.x + this.y * this.y; if (t > e * e) {
            var n = e / ke(t);
            this.x *= n, this.y *= n;
        } return this; }, e.clamp = function (t, n) { var r = e.neo(t.x, t.y); return r.clamp(n), r; }, e.clampVec2 = function (e, t, n) { return { x: a(e.x, t == null ? void 0 : t.x, n == null ? void 0 : n.x), y: a(e.y, t == null ? void 0 : t.y, n == null ? void 0 : n.y) }; }, e.scaleFn = function (t, n) { return function (r) { return e.neo(r.x * t, r.y * n); }; }, e.translateFn = function (t, n) { return function (r) { return e.neo(r.x + t, r.y + n); }; }, e; })(), Me = Math.max, Ne = Math.min, Pe = (function () { function e(t, n) { if (!(this instanceof e))
            return new e(t, n); this.lowerBound = I.zero(), this.upperBound = I.zero(), typeof t == "object" && this.lowerBound.setVec2(t), typeof n == "object" ? this.upperBound.setVec2(n) : typeof t == "object" && this.upperBound.setVec2(t); } return e.prototype.isValid = function () { return e.isValid(this); }, e.isValid = function (e) { return e != null && I.isValid(e.lowerBound) && I.isValid(e.upperBound) && I.sub(e.upperBound, e.lowerBound).lengthSquared() >= 0; }, e.assert = function (e) { }, e.prototype.getCenter = function () { return I.neo((this.lowerBound.x + this.upperBound.x) * .5, (this.lowerBound.y + this.upperBound.y) * .5); }, e.prototype.getExtents = function () { return I.neo((this.upperBound.x - this.lowerBound.x) * .5, (this.upperBound.y - this.lowerBound.y) * .5); }, e.prototype.getPerimeter = function () { return 2 * (this.upperBound.x - this.lowerBound.x + this.upperBound.y - this.lowerBound.y); }, e.prototype.combine = function (e, t) { t = t || this; var n = e.lowerBound, r = e.upperBound, i = t.lowerBound, a = t.upperBound, o = Ne(n.x, i.x), s = Ne(n.y, i.y), c = Me(a.x, r.x), l = Me(a.y, r.y); this.lowerBound.setNum(o, s), this.upperBound.setNum(c, l); }, e.prototype.combinePoints = function (e, t) { this.lowerBound.setNum(Ne(e.x, t.x), Ne(e.y, t.y)), this.upperBound.setNum(Me(e.x, t.x), Me(e.y, t.y)); }, e.prototype.set = function (e) { this.lowerBound.setNum(e.lowerBound.x, e.lowerBound.y), this.upperBound.setNum(e.upperBound.x, e.upperBound.y); }, e.prototype.contains = function (e) { var t = !0; return t = t && this.lowerBound.x <= e.lowerBound.x, t = t && this.lowerBound.y <= e.lowerBound.y, t = t && e.upperBound.x <= this.upperBound.x, t = t && e.upperBound.y <= this.upperBound.y, t; }, e.prototype.extend = function (t) { return e.extend(this, t), this; }, e.extend = function (e, t) { return e.lowerBound.x -= t, e.lowerBound.y -= t, e.upperBound.x += t, e.upperBound.y += t, e; }, e.testOverlap = function (e, t) { var n = t.lowerBound.x - e.upperBound.x, r = e.lowerBound.x - t.upperBound.x, i = t.lowerBound.y - e.upperBound.y, a = e.lowerBound.y - t.upperBound.y; return !(n > 0 || i > 0 || r > 0 || a > 0); }, e.areEqual = function (e, t) { return I.areEqual(e.lowerBound, t.lowerBound) && I.areEqual(e.upperBound, t.upperBound); }, e.diff = function (e, t) { var n = Me(0, Ne(e.upperBound.x, t.upperBound.x) - Me(t.lowerBound.x, e.lowerBound.x)), r = Me(0, Ne(e.upperBound.y, t.upperBound.y) - Me(t.lowerBound.y, e.lowerBound.y)), i = e.upperBound.x - e.lowerBound.x, a = e.upperBound.y - e.lowerBound.y, o = t.upperBound.x - t.lowerBound.x, s = t.upperBound.y - t.lowerBound.y; return i * a + o * s - n * r; }, e.prototype.rayCast = function (e, t) { var n = -1 / 0, r = 1 / 0, i = t.p1, a = I.sub(t.p2, t.p1), o = I.abs(a), s = I.zero(); if (o.x < Te) {
            if (i.x < this.lowerBound.x || this.upperBound.x < i.x)
                return !1;
        }
        else {
            var c = 1 / a.x, l = (this.lowerBound.x - i.x) * c, u = (this.upperBound.x - i.x) * c, d = -1;
            if (l > u) {
                var f = l;
                l = u, u = f, d = 1;
            }
            if (l > n && (s.setZero(), s.x = d, n = l), r = Ne(r, u), n > r)
                return !1;
        } if (o.y < Te) {
            if (i.y < this.lowerBound.y || this.upperBound.y < i.y)
                return !1;
        }
        else {
            var c = 1 / a.y, l = (this.lowerBound.y - i.y) * c, u = (this.upperBound.y - i.y) * c, d = -1;
            if (l > u) {
                var f = l;
                l = u, u = f, d = 1;
            }
            if (l > n && (s.setZero(), s.y = d, n = l), r = Ne(r, u), n > r)
                return !1;
        } return n < 0 || t.maxFraction < n ? !1 : (e.fraction = n, e.normal = s, !0); }, e.prototype.toString = function () { return JSON.stringify(this); }, e.combinePoints = function (e, t, n) { return e.lowerBound.x = Ne(t.x, n.x), e.lowerBound.y = Ne(t.y, n.y), e.upperBound.x = Me(t.x, n.x), e.upperBound.y = Me(t.y, n.y), e; }, e.combinedPerimeter = function (e, t) { var n = Ne(e.lowerBound.x, t.lowerBound.x), r = Ne(e.lowerBound.y, t.lowerBound.y), i = Me(e.upperBound.x, t.upperBound.x), a = Me(e.upperBound.y, t.upperBound.y); return 2 * (i - n + a - r); }, e; })(), Fe = Math.PI, L = (function () { function e() { } return Object.defineProperty(e, "polygonRadius", { get: function () { return 2 * e.linearSlop; }, enumerable: !1, configurable: !0 }), e.lengthUnitsPerMeter = 1, e.maxManifoldPoints = 2, e.maxPolygonVertices = 12, e.aabbExtension = .1, e.aabbMultiplier = 2, e.linearSlop = .005, e.angularSlop = 2 / 180 * Fe, e.maxSubSteps = 8, e.maxTOIContacts = 32, e.maxTOIIterations = 20, e.maxDistanceIterations = 20, e.velocityThreshold = 1, e.maxLinearCorrection = .2, e.maxAngularCorrection = 8 / 180 * Fe, e.maxTranslation = 2, e.maxRotation = .5 * Fe, e.baumgarte = .2, e.toiBaugarte = .75, e.timeToSleep = .5, e.linearSleepTolerance = .01, e.angularSleepTolerance = 2 / 180 * Fe, e; })(), R = (function () { function e() { } return Object.defineProperty(e, "maxManifoldPoints", { get: function () { return L.maxManifoldPoints; }, enumerable: !1, configurable: !0 }), Object.defineProperty(e, "maxPolygonVertices", { get: function () { return L.maxPolygonVertices; }, enumerable: !1, configurable: !0 }), Object.defineProperty(e, "aabbExtension", { get: function () { return L.aabbExtension * L.lengthUnitsPerMeter; }, enumerable: !1, configurable: !0 }), Object.defineProperty(e, "aabbMultiplier", { get: function () { return L.aabbMultiplier; }, enumerable: !1, configurable: !0 }), Object.defineProperty(e, "linearSlop", { get: function () { return L.linearSlop * L.lengthUnitsPerMeter; }, enumerable: !1, configurable: !0 }), Object.defineProperty(e, "linearSlopSquared", { get: function () { return L.linearSlop * L.lengthUnitsPerMeter * L.linearSlop * L.lengthUnitsPerMeter; }, enumerable: !1, configurable: !0 }), Object.defineProperty(e, "angularSlop", { get: function () { return L.angularSlop; }, enumerable: !1, configurable: !0 }), Object.defineProperty(e, "polygonRadius", { get: function () { return 2 * L.linearSlop; }, enumerable: !1, configurable: !0 }), Object.defineProperty(e, "maxSubSteps", { get: function () { return L.maxSubSteps; }, enumerable: !1, configurable: !0 }), Object.defineProperty(e, "maxTOIContacts", { get: function () { return L.maxTOIContacts; }, enumerable: !1, configurable: !0 }), Object.defineProperty(e, "maxTOIIterations", { get: function () { return L.maxTOIIterations; }, enumerable: !1, configurable: !0 }), Object.defineProperty(e, "maxDistanceIterations", { get: function () { return L.maxDistanceIterations; }, enumerable: !1, configurable: !0 }), Object.defineProperty(e, "velocityThreshold", { get: function () { return L.velocityThreshold * L.lengthUnitsPerMeter; }, enumerable: !1, configurable: !0 }), Object.defineProperty(e, "maxLinearCorrection", { get: function () { return L.maxLinearCorrection * L.lengthUnitsPerMeter; }, enumerable: !1, configurable: !0 }), Object.defineProperty(e, "maxAngularCorrection", { get: function () { return L.maxAngularCorrection; }, enumerable: !1, configurable: !0 }), Object.defineProperty(e, "maxTranslation", { get: function () { return L.maxTranslation * L.lengthUnitsPerMeter; }, enumerable: !1, configurable: !0 }), Object.defineProperty(e, "maxTranslationSquared", { get: function () { return L.maxTranslation * L.lengthUnitsPerMeter * L.maxTranslation * L.lengthUnitsPerMeter; }, enumerable: !1, configurable: !0 }), Object.defineProperty(e, "maxRotation", { get: function () { return L.maxRotation; }, enumerable: !1, configurable: !0 }), Object.defineProperty(e, "maxRotationSquared", { get: function () { return L.maxRotation * L.maxRotation; }, enumerable: !1, configurable: !0 }), Object.defineProperty(e, "baumgarte", { get: function () { return L.baumgarte; }, enumerable: !1, configurable: !0 }), Object.defineProperty(e, "toiBaugarte", { get: function () { return L.toiBaugarte; }, enumerable: !1, configurable: !0 }), Object.defineProperty(e, "timeToSleep", { get: function () { return L.timeToSleep; }, enumerable: !1, configurable: !0 }), Object.defineProperty(e, "linearSleepTolerance", { get: function () { return L.linearSleepTolerance * L.lengthUnitsPerMeter; }, enumerable: !1, configurable: !0 }), Object.defineProperty(e, "linearSleepToleranceSqr", { get: function () { return L.linearSleepTolerance * L.lengthUnitsPerMeter * L.linearSleepTolerance * L.lengthUnitsPerMeter; }, enumerable: !1, configurable: !0 }), Object.defineProperty(e, "angularSleepTolerance", { get: function () { return L.angularSleepTolerance; }, enumerable: !1, configurable: !0 }), Object.defineProperty(e, "angularSleepToleranceSqr", { get: function () { return L.angularSleepTolerance * L.angularSleepTolerance; }, enumerable: !1, configurable: !0 }), e; })(), Ie = (function () { function e(e) { this._list = [], this._max = 1 / 0, this._hasCreateFn = !1, this._createCount = 0, this._hasAllocateFn = !1, this._allocateCount = 0, this._hasReleaseFn = !1, this._releaseCount = 0, this._hasDisposeFn = !1, this._disposeCount = 0, this._list = [], this._max = e.max || this._max, this._createFn = e.create, this._hasCreateFn = typeof this._createFn == "function", this._allocateFn = e.allocate, this._hasAllocateFn = typeof this._allocateFn == "function", this._releaseFn = e.release, this._hasReleaseFn = typeof this._releaseFn == "function", this._disposeFn = e.dispose, this._hasDisposeFn = typeof this._disposeFn == "function"; } return e.prototype.max = function (e) { return typeof e == "number" ? (this._max = e, this) : this._max; }, e.prototype.size = function () { return this._list.length; }, e.prototype.allocate = function () { var e; return this._list.length > 0 ? e = this._list.shift() : (this._createCount++, e = this._hasCreateFn ? this._createFn() : {}), this._allocateCount++, this._hasAllocateFn && this._allocateFn(e), e; }, e.prototype.release = function (e) { this._list.length < this._max ? (this._releaseCount++, this._hasReleaseFn && this._releaseFn(e), this._list.push(e)) : (this._disposeCount++, this._hasDisposeFn && (e = this._disposeFn(e))); }, e.prototype.toString = function () { return " +" + this._createCount + " >" + this._allocateCount + " <" + this._releaseCount + " -" + this._disposeCount + " =" + this._list.length + "/" + this._max; }, e; })(), Le = Math.abs, Re = Math.max, ze = (function () { function e(e) { this.aabb = new Pe, this.userData = null, this.parent = null, this.child1 = null, this.child2 = null, this.height = -1, this.id = e; } return e.prototype.toString = function () { return this.id + ": " + this.userData; }, e.prototype.isLeaf = function () { return this.child1 == null; }, e; })(), Be = new Ie({ create: function () { return new ze; }, release: function (e) { e.userData = null, e.parent = null, e.child1 = null, e.child2 = null, e.height = -1, e.id = void 0; } }), Ve = (function () { function e() { this.inputPool = new Ie({ create: function () { return {}; }, release: function (e) { } }), this.stackPool = new Ie({ create: function () { return []; }, release: function (e) { e.length = 0; } }), this.iteratorPool = new Ie({ create: function () { return new He; }, release: function (e) { e.close(); } }), this.m_root = null, this.m_nodes = {}, this.m_lastProxyId = 0; } return e.prototype.getUserData = function (e) { return this.m_nodes[e].userData; }, e.prototype.getFatAABB = function (e) { return this.m_nodes[e].aabb; }, e.prototype.allocateNode = function () { var e = Be.allocate(); return e.id = ++this.m_lastProxyId, this.m_nodes[e.id] = e, e; }, e.prototype.freeNode = function (e) { delete this.m_nodes[e.id], Be.release(e); }, e.prototype.createProxy = function (e, t) { var n = this.allocateNode(); return n.aabb.set(e), Pe.extend(n.aabb, R.aabbExtension), n.userData = t, n.height = 0, this.insertLeaf(n), n.id; }, e.prototype.destroyProxy = function (e) { var t = this.m_nodes[e]; this.removeLeaf(t), this.freeNode(t); }, e.prototype.moveProxy = function (e, t, n) { var r = this.m_nodes[e]; return !r.aabb.contains(t) && (this.removeLeaf(r), r.aabb.set(t), t = r.aabb, Pe.extend(t, R.aabbExtension), n.x < 0 ? t.lowerBound.x += n.x * R.aabbMultiplier : t.upperBound.x += n.x * R.aabbMultiplier, n.y < 0 ? t.lowerBound.y += n.y * R.aabbMultiplier : t.upperBound.y += n.y * R.aabbMultiplier, this.insertLeaf(r), !0); }, e.prototype.insertLeaf = function (e) { if (this.m_root == null)
            this.m_root = e, this.m_root.parent = null;
        else {
            for (var t = e.aabb, n = this.m_root; !n.isLeaf();) {
                var r = n.child1, i = n.child2, a = n.aabb.getPerimeter(), o = Pe.combinedPerimeter(n.aabb, t), s = 2 * o, c = 2 * (o - a), l = Pe.combinedPerimeter(t, r.aabb) + c;
                if (!r.isLeaf()) {
                    var u = r.aabb.getPerimeter();
                    l -= u;
                }
                var d = Pe.combinedPerimeter(t, i.aabb) + c;
                if (!i.isLeaf()) {
                    var u = i.aabb.getPerimeter();
                    d -= u;
                }
                if (s < l && s < d)
                    break;
                n = l < d ? r : i;
            }
            var f = n, p = f.parent, m = this.allocateNode();
            for (m.parent = p, m.userData = null, m.aabb.combine(t, f.aabb), m.height = f.height + 1, p == null ? (m.child1 = f, m.child2 = e, f.parent = m, e.parent = m, this.m_root = m) : (p.child1 === f ? p.child1 = m : p.child2 = m, m.child1 = f, m.child2 = e, f.parent = m, e.parent = m), n = e.parent; n != null;) {
                n = this.balance(n);
                var r = n.child1, i = n.child2;
                n.height = 1 + Re(r.height, i.height), n.aabb.combine(r.aabb, i.aabb), n = n.parent;
            }
        } }, e.prototype.removeLeaf = function (e) { if (e === this.m_root)
            this.m_root = null;
        else {
            var t = e.parent, n = t.parent, r = t.child1 === e ? t.child2 : t.child1;
            if (n != null) {
                n.child1 === t ? n.child1 = r : n.child2 = r, r.parent = n, this.freeNode(t);
                for (var i = n; i != null;) {
                    i = this.balance(i);
                    var a = i.child1, o = i.child2;
                    i.aabb.combine(a.aabb, o.aabb), i.height = 1 + Re(a.height, o.height), i = i.parent;
                }
            }
            else
                this.m_root = r, r.parent = null, this.freeNode(t);
        } }, e.prototype.balance = function (e) { var t = e; if (t.isLeaf() || t.height < 2)
            return e; var n = t.child1, r = t.child2, i = r.height - n.height; if (i > 1) {
            var a = r.child1, o = r.child2;
            return r.child1 = t, r.parent = t.parent, t.parent = r, r.parent == null ? this.m_root = r : r.parent.child1 === e ? r.parent.child1 = r : r.parent.child2 = r, a.height > o.height ? (r.child2 = a, t.child2 = o, o.parent = t, t.aabb.combine(n.aabb, o.aabb), r.aabb.combine(t.aabb, a.aabb), t.height = 1 + Re(n.height, o.height), r.height = 1 + Re(t.height, a.height)) : (r.child2 = o, t.child2 = a, a.parent = t, t.aabb.combine(n.aabb, a.aabb), r.aabb.combine(t.aabb, o.aabb), t.height = 1 + Re(n.height, a.height), r.height = 1 + Re(t.height, o.height)), r;
        } if (i < -1) {
            var s = n.child1, c = n.child2;
            return n.child1 = t, n.parent = t.parent, t.parent = n, n.parent == null ? this.m_root = n : n.parent.child1 === t ? n.parent.child1 = n : n.parent.child2 = n, s.height > c.height ? (n.child2 = s, t.child1 = c, c.parent = t, t.aabb.combine(r.aabb, c.aabb), n.aabb.combine(t.aabb, s.aabb), t.height = 1 + Re(r.height, c.height), n.height = 1 + Re(t.height, s.height)) : (n.child2 = c, t.child1 = s, s.parent = t, t.aabb.combine(r.aabb, s.aabb), n.aabb.combine(t.aabb, c.aabb), t.height = 1 + Re(r.height, s.height), n.height = 1 + Re(t.height, c.height)), n;
        } return t; }, e.prototype.getHeight = function () { return this.m_root == null ? 0 : this.m_root.height; }, e.prototype.getAreaRatio = function () { if (this.m_root == null)
            return 0; for (var e = this.m_root.aabb.getPerimeter(), t = 0, n, r = this.iteratorPool.allocate().preorder(this.m_root); n = r.next();)
            n.height < 0 || (t += n.aabb.getPerimeter()); return this.iteratorPool.release(r), t / e; }, e.prototype.computeHeight = function (e) { var t = e === void 0 ? this.m_root : this.m_nodes[e]; return t.isLeaf() ? 0 : 1 + Re(this.computeHeight(t.child1.id), this.computeHeight(t.child2.id)); }, e.prototype.validateStructure = function (e) { if (e != null) {
            this.m_root;
            var t = e.child1, n = e.child2;
            e.isLeaf() || (this.validateStructure(t), this.validateStructure(n));
        } }, e.prototype.validateMetrics = function (e) { if (e != null) {
            var t = e.child1, n = e.child2;
            e.isLeaf() || (this.validateMetrics(t), this.validateMetrics(n));
        } }, e.prototype.validate = function () { }, e.prototype.getMaxBalance = function () { for (var e = 0, t, n = this.iteratorPool.allocate().preorder(this.m_root); t = n.next();)
            if (!(t.height <= 1)) {
                var r = Le(t.child2.height - t.child1.height);
                e = Re(e, r);
            } return this.iteratorPool.release(n), e; }, e.prototype.rebuildBottomUp = function () { for (var e = [], t = 0, n, r = this.iteratorPool.allocate().preorder(this.m_root); n = r.next();)
            n.height < 0 || (n.isLeaf() ? (n.parent = null, e[t] = n, ++t) : this.freeNode(n)); for (this.iteratorPool.release(r); t > 1;) {
            for (var i = 1 / 0, a = -1, o = -1, s = 0; s < t; ++s)
                for (var c = e[s].aabb, l = s + 1; l < t; ++l) {
                    var u = e[l].aabb, d = Pe.combinedPerimeter(c, u);
                    d < i && (a = s, o = l, i = d);
                }
            var f = e[a], p = e[o], m = this.allocateNode();
            m.child1 = f, m.child2 = p, m.height = 1 + Re(f.height, p.height), m.aabb.combine(f.aabb, p.aabb), m.parent = null, f.parent = m, p.parent = m, e[o] = e[t - 1], e[a] = m, --t;
        } this.m_root = e[0]; }, e.prototype.shiftOrigin = function (e) { for (var t, n = this.iteratorPool.allocate().preorder(this.m_root); t = n.next();) {
            var r = t.aabb;
            r.lowerBound.x -= e.x, r.lowerBound.y -= e.y, r.upperBound.x -= e.x, r.upperBound.y -= e.y;
        } this.iteratorPool.release(n); }, e.prototype.query = function (e, t) { var n = this.stackPool.allocate(); for (n.push(this.m_root); n.length > 0;) {
            var r = n.pop();
            if (r != null && Pe.testOverlap(r.aabb, e)) {
                if (r.isLeaf()) {
                    if (t(r.id) === !1)
                        return;
                }
                else
                    n.push(r.child1), n.push(r.child2);
            }
        } this.stackPool.release(n); }, e.prototype.rayCast = function (e, t) { var n = e.p1, r = e.p2, i = I.sub(r, n); i.normalize(); var a = I.crossNumVec2(1, i), o = I.abs(a), s = e.maxFraction, c = new Pe, l = I.combine(1 - s, n, s, r); c.combinePoints(n, l); var u = this.stackPool.allocate(), d = this.inputPool.allocate(); for (u.push(this.m_root); u.length > 0;) {
            var f = u.pop();
            if (f != null && Pe.testOverlap(f.aabb, c) !== !1) {
                var p = f.aabb.getCenter(), m = f.aabb.getExtents();
                if (!(Le(I.dot(a, I.sub(n, p))) - I.dot(o, m) > 0)) {
                    if (f.isLeaf()) {
                        d.p1 = I.clone(e.p1), d.p2 = I.clone(e.p2), d.maxFraction = s;
                        var h = t(d, f.id);
                        if (h === 0)
                            break;
                        h > 0 && (s = h, l = I.combine(1 - s, n, s, r), c.combinePoints(n, l));
                    }
                    else
                        u.push(f.child1), u.push(f.child2);
                }
            }
        } this.stackPool.release(u), this.inputPool.release(d); }, e; })(), He = (function () { function e() { this.parents = [], this.states = []; } return e.prototype.preorder = function (e) { return this.parents.length = 0, this.parents.push(e), this.states.length = 0, this.states.push(0), this; }, e.prototype.next = function () { for (; this.parents.length > 0;) {
            var e = this.parents.length - 1, t = this.parents[e];
            if (this.states[e] === 0)
                return this.states[e] = 1, t;
            if (this.states[e] === 1 && (this.states[e] = 2, t.child1))
                return this.parents.push(t.child1), this.states.push(1), t.child1;
            if (this.states[e] === 2 && (this.states[e] = 3, t.child2))
                return this.parents.push(t.child2), this.states.push(1), t.child2;
            this.parents.pop(), this.states.pop();
        } }, e.prototype.close = function () { this.parents.length = 0; }, e; })(), Ue = Math.max, We = Math.min, Ge = (function () { function e() { var e = this; this.m_tree = new Ve, this.m_moveBuffer = [], this.query = function (t, n) { e.m_tree.query(t, n); }, this.queryCallback = function (t) { if (t === e.m_queryProxyId)
            return !0; var n = We(t, e.m_queryProxyId), r = Ue(t, e.m_queryProxyId), i = e.m_tree.getUserData(n), a = e.m_tree.getUserData(r); return e.m_callback(i, a), !0; }; } return e.prototype.getUserData = function (e) { return this.m_tree.getUserData(e); }, e.prototype.testOverlap = function (e, t) { var n = this.m_tree.getFatAABB(e), r = this.m_tree.getFatAABB(t); return Pe.testOverlap(n, r); }, e.prototype.getFatAABB = function (e) { return this.m_tree.getFatAABB(e); }, e.prototype.getProxyCount = function () { return this.m_moveBuffer.length; }, e.prototype.getTreeHeight = function () { return this.m_tree.getHeight(); }, e.prototype.getTreeBalance = function () { return this.m_tree.getMaxBalance(); }, e.prototype.getTreeQuality = function () { return this.m_tree.getAreaRatio(); }, e.prototype.rayCast = function (e, t) { this.m_tree.rayCast(e, t); }, e.prototype.shiftOrigin = function (e) { this.m_tree.shiftOrigin(e); }, e.prototype.createProxy = function (e, t) { var n = this.m_tree.createProxy(e, t); return this.bufferMove(n), n; }, e.prototype.destroyProxy = function (e) { this.unbufferMove(e), this.m_tree.destroyProxy(e); }, e.prototype.moveProxy = function (e, t, n) { this.m_tree.moveProxy(e, t, n) && this.bufferMove(e); }, e.prototype.touchProxy = function (e) { this.bufferMove(e); }, e.prototype.bufferMove = function (e) { this.m_moveBuffer.push(e); }, e.prototype.unbufferMove = function (e) { for (var t = 0; t < this.m_moveBuffer.length; ++t)
            this.m_moveBuffer[t] === e && (this.m_moveBuffer[t] = null); }, e.prototype.updatePairs = function (e) { for (this.m_callback = e; this.m_moveBuffer.length > 0;)
            if (this.m_queryProxyId = this.m_moveBuffer.pop(), this.m_queryProxyId !== null) {
                var t = this.m_tree.getFatAABB(this.m_queryProxyId);
                this.m_tree.query(t, this.queryCallback);
            } }, e; })(), Ke = Math.sin, qe = Math.cos, Je = Math.sqrt, Ye = Math.sin, Xe = Math.cos, Ze = Math.atan2, z = (function () { function e(t) { if (!(this instanceof e))
            return new e(t); typeof t == "number" ? this.setAngle(t) : typeof t == "object" ? this.setRot(t) : this.setIdentity(); } return e.neo = function (t) { var n = Object.create(e.prototype); return n.setAngle(t), n; }, e.clone = function (t) { var n = Object.create(e.prototype); return n.s = t.s, n.c = t.c, n; }, e.identity = function () { var t = Object.create(e.prototype); return t.s = 0, t.c = 1, t; }, e.isValid = function (e) { return e != null && Number.isFinite(e.s) && Number.isFinite(e.c); }, e.assert = function (e) { }, e.prototype.setIdentity = function () { this.s = 0, this.c = 1; }, e.prototype.set = function (e) { typeof e == "object" ? (this.s = e.s, this.c = e.c) : (this.s = Ye(e), this.c = Xe(e)); }, e.prototype.setRot = function (e) { this.s = e.s, this.c = e.c; }, e.prototype.setAngle = function (e) { this.s = Ye(e), this.c = Xe(e); }, e.prototype.getAngle = function () { return Ze(this.s, this.c); }, e.prototype.getXAxis = function () { return I.neo(this.c, this.s); }, e.prototype.getYAxis = function () { return I.neo(-this.s, this.c); }, e.mul = function (t, n) { if ("c" in n && "s" in n) {
            var r = e.identity();
            return r.s = t.s * n.c + t.c * n.s, r.c = t.c * n.c - t.s * n.s, r;
        } if ("x" in n && "y" in n)
            return I.neo(t.c * n.x - t.s * n.y, t.s * n.x + t.c * n.y); }, e.mulRot = function (t, n) { var r = e.identity(); return r.s = t.s * n.c + t.c * n.s, r.c = t.c * n.c - t.s * n.s, r; }, e.mulVec2 = function (e, t) { return I.neo(e.c * t.x - e.s * t.y, e.s * t.x + e.c * t.y); }, e.mulSub = function (e, t, n) { var r = e.c * (t.x - n.x) - e.s * (t.y - n.y), i = e.s * (t.x - n.x) + e.c * (t.y - n.y); return I.neo(r, i); }, e.mulT = function (t, n) { if ("c" in n && "s" in n) {
            var r = e.identity();
            return r.s = t.c * n.s - t.s * n.c, r.c = t.c * n.c + t.s * n.s, r;
        } if ("x" in n && "y" in n)
            return I.neo(t.c * n.x + t.s * n.y, -t.s * n.x + t.c * n.y); }, e.mulTRot = function (t, n) { var r = e.identity(); return r.s = t.c * n.s - t.s * n.c, r.c = t.c * n.c + t.s * n.s, r; }, e.mulTVec2 = function (e, t) { return I.neo(e.c * t.x + e.s * t.y, -e.s * t.x + e.c * t.y); }, e; })(), Qe = Math.atan2, $e = Math.PI, et = s(0, 0), tt = (function () { function e() { this.localCenter = I.zero(), this.c = I.zero(), this.a = 0, this.alpha0 = 0, this.c0 = I.zero(), this.a0 = 0; } return e.prototype.recycle = function () { d(this.localCenter), d(this.c), this.a = 0, this.alpha0 = 0, d(this.c0), this.a0 = 0; }, e.prototype.setTransform = function (e) { F(et, e, this.localCenter), u(this.c, et), u(this.c0, et), this.a = this.a0 = Qe(e.q.s, e.q.c); }, e.prototype.setLocalCenter = function (e, t) { u(this.localCenter, e), F(et, t, this.localCenter), u(this.c, et), u(this.c0, et); }, e.prototype.getTransform = function (e, t) { t === void 0 && (t = 0), ee(e.q, (1 - t) * this.a0 + t * this.a), x(e.p, 1 - t, this.c0, t, this.c), h(e.p, M(et, e.q, this.localCenter)); }, e.prototype.advance = function (e) { var t = (e - this.alpha0) / (1 - this.alpha0); x(this.c0, t, this.c, 1 - t, this.c0), this.a0 = t * this.a + (1 - t) * this.a0, this.alpha0 = e; }, e.prototype.forward = function () { this.a0 = this.a, u(this.c0, this.c); }, e.prototype.normalize = function () { var e = i(this.a0, -$e, +$e); this.a -= this.a0 - e, this.a0 = e; }, e.prototype.isValid = function () { return Number.isFinite(this.localCenter.x) && Number.isFinite(this.localCenter.y) && Number.isFinite(this.c0.x) && Number.isFinite(this.c0.y) && Number.isFinite(this.c.x) && Number.isFinite(this.c.y) && Number.isFinite(this.a0) && Number.isFinite(this.a) && Number.isFinite(this.alpha0); }, e.prototype.set = function (e) { u(this.localCenter, e.localCenter), u(this.c, e.c), this.a = e.a, this.alpha0 = e.alpha0, u(this.c0, e.c0), this.a0 = e.a0; }, e; })(), nt = (function () { function e(t, n) { if (!(this instanceof e))
            return new e(t, n); this.p = I.zero(), this.q = z.identity(), t !== void 0 && this.p.setVec2(t), n !== void 0 && this.q.setAngle(n); } return e.clone = function (t) { var n = Object.create(e.prototype); return n.p = I.clone(t.p), n.q = z.clone(t.q), n; }, e.neo = function (t, n) { var r = Object.create(e.prototype); return r.p = I.clone(t), r.q = z.clone(n), r; }, e.identity = function () { var t = Object.create(e.prototype); return t.p = I.zero(), t.q = z.identity(), t; }, e.prototype.setIdentity = function () { this.p.setZero(), this.q.setIdentity(); }, e.prototype.set = function (e, t) { t === void 0 ? (this.p.set(e.p), this.q.set(e.q)) : (this.p.set(e), this.q.set(t)); }, e.prototype.setNum = function (e, t) { this.p.setVec2(e), this.q.setAngle(t); }, e.prototype.setTransform = function (e) { this.p.setVec2(e.p), this.q.setRot(e.q); }, e.isValid = function (e) { return e != null && I.isValid(e.p) && z.isValid(e.q); }, e.assert = function (e) { }, e.mul = function (t, n) { if (Array.isArray(n)) {
            for (var r = [], i = 0; i < n.length; i++)
                r[i] = e.mul(t, n[i]);
            return r;
        } if ("x" in n && "y" in n)
            return e.mulVec2(t, n); if ("p" in n && "q" in n)
            return e.mulXf(t, n); }, e.mulAll = function (t, n) { for (var r = [], i = 0; i < n.length; i++)
            r[i] = e.mul(t, n[i]); return r; }, e.mulFn = function (t) { return function (n) { return e.mul(t, n); }; }, e.mulVec2 = function (e, t) { var n = e.q.c * t.x - e.q.s * t.y + e.p.x, r = e.q.s * t.x + e.q.c * t.y + e.p.y; return I.neo(n, r); }, e.mulXf = function (t, n) { var r = e.identity(); return r.q = z.mulRot(t.q, n.q), r.p = I.add(z.mulVec2(t.q, n.p), t.p), r; }, e.mulT = function (t, n) { if ("x" in n && "y" in n)
            return e.mulTVec2(t, n); if ("p" in n && "q" in n)
            return e.mulTXf(t, n); }, e.mulTVec2 = function (e, t) { var n = t.x - e.p.x, r = t.y - e.p.y, i = e.q.c * n + e.q.s * r, a = -e.q.s * n + e.q.c * r; return I.neo(i, a); }, e.mulTXf = function (t, n) { var r = e.identity(); return r.q.setRot(z.mulTRot(t.q, n.q)), r.p.setVec2(z.mulTVec2(t.q, I.sub(n.p, t.p))), r; }, e; })(), rt = (function () { function e() { this.v = I.zero(), this.w = 0; } return e; })(), it = Math.sin, at = Math.cos, ot = (function () { function e() { this.c = I.zero(), this.a = 0; } return e.prototype.getTransform = function (e, t) { return e.q.c = at(this.a), e.q.s = it(this.a), e.p.x = this.c.x - (e.q.c * t.x - e.q.s * t.y), e.p.y = this.c.y - (e.q.s * t.x + e.q.c * t.y), e; }, e; })(), st = (function () { function e() { this.style = {}, this.appData = {}; } return e.isValid = function (e) { return e != null && typeof e.m_type == "string" && typeof e.m_radius == "number"; }, e; })(), ct = new Pe, lt = new Pe, ut = s(0, 0), dt = { userData: null, friction: .2, restitution: 0, density: 0, isSensor: !1, filterGroupIndex: 0, filterCategoryBits: 1, filterMaskBits: 65535 }, ft = (function () { function e(e, t) { this.aabb = new Pe, this.fixture = e, this.childIndex = t; } return e; })(), pt = (function () { function e(e, t, n) { this.style = {}, this.appData = {}, t.shape ? (n = t, t = t.shape) : typeof n == "number" && (n = { density: n }), n = Ce(n, dt), this.m_body = e, this.m_friction = n.friction, this.m_restitution = n.restitution, this.m_density = n.density, this.m_isSensor = n.isSensor, this.m_filterGroupIndex = n.filterGroupIndex, this.m_filterCategoryBits = n.filterCategoryBits, this.m_filterMaskBits = n.filterMaskBits, this.m_shape = t, this.m_next = null, this.m_proxies = [], this.m_proxyCount = 0; for (var r = this.m_shape.getChildCount(), i = 0; i < r; ++i)
            this.m_proxies[i] = new ft(this, i); this.m_userData = n.userData, typeof n.style == "object" && n.style !== null && (this.style = n.style); } return e.prototype._reset = function () { var e = this.getBody(), t = e.m_world.m_broadPhase; this.destroyProxies(t), this.m_shape._reset && this.m_shape._reset(); for (var n = this.m_shape.getChildCount(), r = 0; r < n; ++r)
            this.m_proxies[r] = new ft(this, r); this.createProxies(t, e.m_xf), e.resetMassData(); }, e.prototype._serialize = function () { return { friction: this.m_friction, restitution: this.m_restitution, density: this.m_density, isSensor: this.m_isSensor, filterGroupIndex: this.m_filterGroupIndex, filterCategoryBits: this.m_filterCategoryBits, filterMaskBits: this.m_filterMaskBits, shape: this.m_shape }; }, e._deserialize = function (t, n, r) { var i = r(st, t.shape); return i && new e(n, i, t); }, e.prototype.getType = function () { return this.m_shape.m_type; }, e.prototype.getShape = function () { return this.m_shape; }, e.prototype.isSensor = function () { return this.m_isSensor; }, e.prototype.setSensor = function (e) { e != this.m_isSensor && (this.m_body.setAwake(!0), this.m_isSensor = e); }, e.prototype.getUserData = function () { return this.m_userData; }, e.prototype.setUserData = function (e) { this.m_userData = e; }, e.prototype.getBody = function () { return this.m_body; }, e.prototype.getNext = function () { return this.m_next; }, e.prototype.getDensity = function () { return this.m_density; }, e.prototype.setDensity = function (e) { this.m_density = e; }, e.prototype.getFriction = function () { return this.m_friction; }, e.prototype.setFriction = function (e) { this.m_friction = e; }, e.prototype.getRestitution = function () { return this.m_restitution; }, e.prototype.setRestitution = function (e) { this.m_restitution = e; }, e.prototype.testPoint = function (e) { return this.m_shape.testPoint(this.m_body.getTransform(), e); }, e.prototype.rayCast = function (e, t, n) { return this.m_shape.rayCast(e, t, this.m_body.getTransform(), n); }, e.prototype.getMassData = function (e) { this.m_shape.computeMass(e, this.m_density); }, e.prototype.getAABB = function (e) { return this.m_proxies[e].aabb; }, e.prototype.createProxies = function (e, t) { this.m_proxyCount = this.m_shape.getChildCount(); for (var n = 0; n < this.m_proxyCount; ++n) {
            var r = this.m_proxies[n];
            this.m_shape.computeAABB(r.aabb, t, n), r.proxyId = e.createProxy(r.aabb, r);
        } }, e.prototype.destroyProxies = function (e) { for (var t = 0; t < this.m_proxyCount; ++t) {
            var n = this.m_proxies[t];
            e.destroyProxy(n.proxyId), n.proxyId = null;
        } this.m_proxyCount = 0; }, e.prototype.synchronize = function (e, t, n) { for (var r = 0; r < this.m_proxyCount; ++r) {
            var i = this.m_proxies[r];
            this.m_shape.computeAABB(ct, t, i.childIndex), this.m_shape.computeAABB(lt, n, i.childIndex), i.aabb.combine(ct, lt), g(ut, n.p, t.p), e.moveProxy(i.proxyId, i.aabb, ut);
        } }, e.prototype.setFilterData = function (e) { this.m_filterGroupIndex = e.groupIndex, this.m_filterCategoryBits = e.categoryBits, this.m_filterMaskBits = e.maskBits, this.refilter(); }, e.prototype.getFilterGroupIndex = function () { return this.m_filterGroupIndex; }, e.prototype.setFilterGroupIndex = function (e) { this.m_filterGroupIndex = e, this.refilter(); }, e.prototype.getFilterCategoryBits = function () { return this.m_filterCategoryBits; }, e.prototype.setFilterCategoryBits = function (e) { this.m_filterCategoryBits = e, this.refilter(); }, e.prototype.getFilterMaskBits = function () { return this.m_filterMaskBits; }, e.prototype.setFilterMaskBits = function (e) { this.m_filterMaskBits = e, this.refilter(); }, e.prototype.refilter = function () { if (this.m_body != null) {
            for (var e = this.m_body.getContactList(); e;) {
                var t = e.contact, n = t.getFixtureA(), r = t.getFixtureB();
                (n == this || r == this) && t.flagForFiltering(), e = e.next;
            }
            var i = this.m_body.getWorld();
            if (i != null)
                for (var a = i.m_broadPhase, o = 0; o < this.m_proxyCount; ++o)
                    a.touchProxy(this.m_proxies[o].proxyId);
        } }, e.prototype.shouldCollide = function (e) { if (e.m_filterGroupIndex === this.m_filterGroupIndex && e.m_filterGroupIndex !== 0)
            return e.m_filterGroupIndex > 0; var t = (e.m_filterMaskBits & this.m_filterCategoryBits) !== 0, n = (e.m_filterCategoryBits & this.m_filterMaskBits) !== 0; return t && n; }, e; })(), mt = "static", ht = "kinematic", gt = "dynamic", _t = s(0, 0), vt = s(0, 0), yt = s(0, 0), bt = s(0, 0), xt = N(0, 0, 0), St = { type: mt, position: I.zero(), angle: 0, linearVelocity: I.zero(), angularVelocity: 0, linearDamping: 0, angularDamping: 0, fixedRotation: !1, bullet: !1, gravityScale: 1, allowSleep: !0, awake: !0, active: !0, userData: null }, B = (function () { function e(e, t) { this.style = {}, this.appData = {}, t = Ce(t, St), this.m_world = e, this.m_awakeFlag = t.awake, this.m_autoSleepFlag = t.allowSleep, this.m_bulletFlag = t.bullet, this.m_fixedRotationFlag = t.fixedRotation, this.m_activeFlag = t.active, this.m_islandFlag = !1, this.m_toiFlag = !1, this.m_userData = t.userData, this.m_type = t.type, this.m_type == gt ? (this.m_mass = 1, this.m_invMass = 1) : (this.m_mass = 0, this.m_invMass = 0), this.m_I = 0, this.m_invI = 0, this.m_xf = nt.identity(), this.m_xf.p.setVec2(t.position), this.m_xf.q.setAngle(t.angle), this.m_sweep = new tt, this.m_sweep.setTransform(this.m_xf), this.c_velocity = new rt, this.c_position = new ot, this.m_force = I.zero(), this.m_torque = 0, this.m_linearVelocity = I.clone(t.linearVelocity), this.m_angularVelocity = t.angularVelocity, this.m_linearDamping = t.linearDamping, this.m_angularDamping = t.angularDamping, this.m_gravityScale = t.gravityScale, this.m_sleepTime = 0, this.m_jointList = null, this.m_contactList = null, this.m_fixtureList = null, this.m_prev = null, this.m_next = null, this.m_destroyed = !1, typeof t.style == "object" && t.style !== null && (this.style = t.style); } return e.prototype._serialize = function () { for (var e = [], t = this.m_fixtureList; t; t = t.m_next)
            e.push(t); return { type: this.m_type, bullet: this.m_bulletFlag, fixedRotation: this.m_fixedRotationFlag, position: this.m_xf.p, angle: this.m_xf.q.getAngle(), linearVelocity: this.m_linearVelocity, angularVelocity: this.m_angularVelocity, fixtures: e }; }, e._deserialize = function (t, n, r) { var i = new e(n, t); if (t.fixtures)
            for (var a = t.fixtures.length - 1; a >= 0; a--) {
                var o = r(pt, t.fixtures[a], i);
                i._addFixture(o);
            } return i; }, e.prototype.isWorldLocked = function () { return !!(this.m_world && this.m_world.isLocked()); }, e.prototype.getWorld = function () { return this.m_world; }, e.prototype.getNext = function () { return this.m_next; }, e.prototype.setUserData = function (e) { this.m_userData = e; }, e.prototype.getUserData = function () { return this.m_userData; }, e.prototype.getFixtureList = function () { return this.m_fixtureList; }, e.prototype.getJointList = function () { return this.m_jointList; }, e.prototype.getContactList = function () { return this.m_contactList; }, e.prototype.isStatic = function () { return this.m_type == mt; }, e.prototype.isDynamic = function () { return this.m_type == gt; }, e.prototype.isKinematic = function () { return this.m_type == ht; }, e.prototype.setStatic = function () { return this.setType(mt), this; }, e.prototype.setDynamic = function () { return this.setType(gt), this; }, e.prototype.setKinematic = function () { return this.setType(ht), this; }, e.prototype.getType = function () { return this.m_type; }, e.prototype.setType = function (e) { if (this.isWorldLocked() != 1 && this.m_type != e) {
            this.m_type = e, this.resetMassData(), this.m_type == mt && (this.m_linearVelocity.setZero(), this.m_angularVelocity = 0, this.m_sweep.forward(), this.synchronizeFixtures()), this.setAwake(!0), this.m_force.setZero(), this.m_torque = 0;
            for (var t = this.m_contactList; t;) {
                var n = t;
                t = t.next, this.m_world.destroyContact(n.contact);
            }
            this.m_contactList = null;
            for (var r = this.m_world.m_broadPhase, i = this.m_fixtureList; i; i = i.m_next)
                for (var a = 0; a < i.m_proxyCount; ++a)
                    r.touchProxy(i.m_proxies[a].proxyId);
        } }, e.prototype.isBullet = function () { return this.m_bulletFlag; }, e.prototype.setBullet = function (e) { this.m_bulletFlag = !!e; }, e.prototype.isSleepingAllowed = function () { return this.m_autoSleepFlag; }, e.prototype.setSleepingAllowed = function (e) { this.m_autoSleepFlag = !!e, this.m_autoSleepFlag == 0 && this.setAwake(!0); }, e.prototype.isAwake = function () { return this.m_awakeFlag; }, e.prototype.setAwake = function (e) { e ? (this.m_awakeFlag = !0, this.m_sleepTime = 0) : (this.m_awakeFlag = !1, this.m_sleepTime = 0, this.m_linearVelocity.setZero(), this.m_angularVelocity = 0, this.m_force.setZero(), this.m_torque = 0); }, e.prototype.isActive = function () { return this.m_activeFlag; }, e.prototype.setActive = function (e) { if (e != this.m_activeFlag) {
            if (this.m_activeFlag = !!e, this.m_activeFlag) {
                for (var t = this.m_world.m_broadPhase, n = this.m_fixtureList; n; n = n.m_next)
                    n.createProxies(t, this.m_xf);
                this.m_world.m_newFixture = !0;
            }
            else {
                for (var t = this.m_world.m_broadPhase, n = this.m_fixtureList; n; n = n.m_next)
                    n.destroyProxies(t);
                for (var r = this.m_contactList; r;) {
                    var i = r;
                    r = r.next, this.m_world.destroyContact(i.contact);
                }
                this.m_contactList = null;
            }
        } }, e.prototype.isFixedRotation = function () { return this.m_fixedRotationFlag; }, e.prototype.setFixedRotation = function (e) { this.m_fixedRotationFlag != e && (this.m_fixedRotationFlag = !!e, this.m_angularVelocity = 0, this.resetMassData()); }, e.prototype.getTransform = function () { return this.m_xf; }, e.prototype.setTransform = function (e, t) { if (this.isWorldLocked() != 1) {
            typeof t == "number" ? this.m_xf.setNum(e, t) : this.m_xf.setTransform(e), this.m_sweep.setTransform(this.m_xf);
            for (var n = this.m_world.m_broadPhase, r = this.m_fixtureList; r; r = r.m_next)
                r.synchronize(n, this.m_xf, this.m_xf);
            this.setAwake(!0);
        } }, e.prototype.synchronizeTransform = function () { this.m_sweep.getTransform(this.m_xf, 1); }, e.prototype.synchronizeFixtures = function () { this.m_sweep.getTransform(xt, 0); for (var e = this.m_world.m_broadPhase, t = this.m_fixtureList; t; t = t.m_next)
            t.synchronize(e, xt, this.m_xf); }, e.prototype.advance = function (e) { this.m_sweep.advance(e), u(this.m_sweep.c, this.m_sweep.c0), this.m_sweep.a = this.m_sweep.a0, this.m_sweep.getTransform(this.m_xf, 1); }, e.prototype.getPosition = function () { return this.m_xf.p; }, e.prototype.setPosition = function (e) { this.setTransform(e, this.m_sweep.a); }, e.prototype.getAngle = function () { return this.m_sweep.a; }, e.prototype.setAngle = function (e) { this.setTransform(this.m_xf.p, e); }, e.prototype.getWorldCenter = function () { return this.m_sweep.c; }, e.prototype.getLocalCenter = function () { return this.m_sweep.localCenter; }, e.prototype.getLinearVelocity = function () { return this.m_linearVelocity; }, e.prototype.getLinearVelocityFromWorldPoint = function (e) { var t = I.sub(e, this.m_sweep.c); return I.add(this.m_linearVelocity, I.crossNumVec2(this.m_angularVelocity, t)); }, e.prototype.getLinearVelocityFromLocalPoint = function (e) { return this.getLinearVelocityFromWorldPoint(this.getWorldPoint(e)); }, e.prototype.setLinearVelocity = function (e) { this.m_type != mt && (I.dot(e, e) > 0 && this.setAwake(!0), this.m_linearVelocity.setVec2(e)); }, e.prototype.getAngularVelocity = function () { return this.m_angularVelocity; }, e.prototype.setAngularVelocity = function (e) { this.m_type != mt && (e * e > 0 && this.setAwake(!0), this.m_angularVelocity = e); }, e.prototype.getLinearDamping = function () { return this.m_linearDamping; }, e.prototype.setLinearDamping = function (e) { this.m_linearDamping = e; }, e.prototype.getAngularDamping = function () { return this.m_angularDamping; }, e.prototype.setAngularDamping = function (e) { this.m_angularDamping = e; }, e.prototype.getGravityScale = function () { return this.m_gravityScale; }, e.prototype.setGravityScale = function (e) { this.m_gravityScale = e; }, e.prototype.getMass = function () { return this.m_mass; }, e.prototype.getInertia = function () { return this.m_I + this.m_mass * I.dot(this.m_sweep.localCenter, this.m_sweep.localCenter); }, e.prototype.getMassData = function (e) { e.mass = this.m_mass, e.I = this.getInertia(), u(e.center, this.m_sweep.localCenter); }, e.prototype.resetMassData = function () { if (this.m_mass = 0, this.m_invMass = 0, this.m_I = 0, this.m_invI = 0, d(this.m_sweep.localCenter), this.isStatic() || this.isKinematic())
            u(this.m_sweep.c0, this.m_xf.p), u(this.m_sweep.c, this.m_xf.p), this.m_sweep.a0 = this.m_sweep.a;
        else {
            d(vt);
            for (var e = this.m_fixtureList; e; e = e.m_next)
                if (e.m_density != 0) {
                    var t = { mass: 0, center: s(0, 0), I: 0 };
                    e.getMassData(t), this.m_mass += t.mass, y(vt, t.mass, t.center), this.m_I += t.I;
                }
            this.m_mass > 0 ? (this.m_invMass = 1 / this.m_mass, v(vt, this.m_invMass, vt)) : (this.m_mass = 1, this.m_invMass = 1), this.m_I > 0 && this.m_fixedRotationFlag == 0 ? (this.m_I -= this.m_mass * O(vt, vt), this.m_invI = 1 / this.m_I) : (this.m_I = 0, this.m_invI = 0), u(_t, this.m_sweep.c), this.m_sweep.setLocalCenter(vt, this.m_xf), g(yt, this.m_sweep.c, _t), E(bt, this.m_angularVelocity, yt), p(this.m_linearVelocity, bt);
        } }, e.prototype.setMassData = function (e) { this.isWorldLocked() != 1 && this.m_type == gt && (this.m_invMass = 0, this.m_I = 0, this.m_invI = 0, this.m_mass = e.mass, this.m_mass <= 0 && (this.m_mass = 1), this.m_invMass = 1 / this.m_mass, e.I > 0 && this.m_fixedRotationFlag == 0 && (this.m_I = e.I - this.m_mass * O(e.center, e.center), this.m_invI = 1 / this.m_I), u(_t, this.m_sweep.c), this.m_sweep.setLocalCenter(e.center, this.m_xf), g(yt, this.m_sweep.c, _t), E(bt, this.m_angularVelocity, yt), p(this.m_linearVelocity, bt)); }, e.prototype.applyForce = function (e, t, n) { n === void 0 && (n = !0), this.m_type == gt && (n && this.m_awakeFlag == 0 && this.setAwake(!0), this.m_awakeFlag && (this.m_force.add(e), this.m_torque += I.crossVec2Vec2(I.sub(t, this.m_sweep.c), e))); }, e.prototype.applyForceToCenter = function (e, t) { t === void 0 && (t = !0), this.m_type == gt && (t && this.m_awakeFlag == 0 && this.setAwake(!0), this.m_awakeFlag && this.m_force.add(e)); }, e.prototype.applyTorque = function (e, t) { t === void 0 && (t = !0), this.m_type == gt && (t && this.m_awakeFlag == 0 && this.setAwake(!0), this.m_awakeFlag && (this.m_torque += e)); }, e.prototype.applyLinearImpulse = function (e, t, n) { n === void 0 && (n = !0), this.m_type == gt && (n && this.m_awakeFlag == 0 && this.setAwake(!0), this.m_awakeFlag && (this.m_linearVelocity.addMul(this.m_invMass, e), this.m_angularVelocity += this.m_invI * I.crossVec2Vec2(I.sub(t, this.m_sweep.c), e))); }, e.prototype.applyAngularImpulse = function (e, t) { t === void 0 && (t = !0), this.m_type == gt && (t && this.m_awakeFlag == 0 && this.setAwake(!0), this.m_awakeFlag && (this.m_angularVelocity += this.m_invI * e)); }, e.prototype.shouldCollide = function (e) { if (this.m_type != gt && e.m_type != gt)
            return !1; for (var t = this.m_jointList; t; t = t.next)
            if (t.other == e && t.joint.m_collideConnected == 0)
                return !1; return !0; }, e.prototype._addFixture = function (e) { if (this.isWorldLocked() == 1)
            return null; if (this.m_activeFlag) {
            var t = this.m_world.m_broadPhase;
            e.createProxies(t, this.m_xf);
        } return e.m_next = this.m_fixtureList, this.m_fixtureList = e, e.m_density > 0 && this.resetMassData(), this.m_world.m_newFixture = !0, e; }, e.prototype.createFixture = function (e, t) { if (this.isWorldLocked() == 1)
            return null; var n = new pt(this, e, t); return this._addFixture(n), this.m_world.publish("add-fixture", n), n; }, e.prototype.destroyFixture = function (e) { if (this.isWorldLocked() != 1) {
            if (this.m_fixtureList === e)
                this.m_fixtureList = e.m_next;
            else
                for (var t = this.m_fixtureList; t != null;) {
                    if (t.m_next === e) {
                        t.m_next = e.m_next;
                        break;
                    }
                    t = t.m_next;
                }
            for (var n = this.m_contactList; n;) {
                var r = n.contact;
                n = n.next;
                var i = r.getFixtureA(), a = r.getFixtureB();
                (e == i || e == a) && this.m_world.destroyContact(r);
            }
            if (this.m_activeFlag) {
                var o = this.m_world.m_broadPhase;
                e.destroyProxies(o);
            }
            e.m_body = null, e.m_next = null, this.m_world.publish("remove-fixture", e), this.resetMassData();
        } }, e.prototype.getWorldPoint = function (e) { return nt.mulVec2(this.m_xf, e); }, e.prototype.getWorldVector = function (e) { return z.mulVec2(this.m_xf.q, e); }, e.prototype.getLocalPoint = function (e) { return nt.mulTVec2(this.m_xf, e); }, e.prototype.getLocalVector = function (e) { return z.mulTVec2(this.m_xf.q, e); }, e.STATIC = "static", e.KINEMATIC = "kinematic", e.DYNAMIC = "dynamic", e; })(), Ct = (function () { function e() { this.other = null, this.joint = null, this.prev = null, this.next = null; } return e; })(), wt = (function () { function e(e, t, n) { this.m_type = "unknown-joint", this.m_prev = null, this.m_next = null, this.m_edgeA = new Ct, this.m_edgeB = new Ct, this.m_islandFlag = !1, this.style = {}, this.appData = {}, t = "bodyA" in e ? e.bodyA : t, n = "bodyB" in e ? e.bodyB : n, this.m_bodyA = t, this.m_bodyB = n, this.m_collideConnected = !!e.collideConnected, this.m_userData = e.userData, typeof e.style == "object" && e.style !== null && (this.style = e.style); } return e.prototype.isActive = function () { return this.m_bodyA.isActive() && this.m_bodyB.isActive(); }, e.prototype.getType = function () { return this.m_type; }, e.prototype.getBodyA = function () { return this.m_bodyA; }, e.prototype.getBodyB = function () { return this.m_bodyB; }, e.prototype.getNext = function () { return this.m_next; }, e.prototype.getUserData = function () { return this.m_userData; }, e.prototype.setUserData = function (e) { this.m_userData = e; }, e.prototype.getCollideConnected = function () { return this.m_collideConnected; }, e.prototype.shiftOrigin = function (e) { }, e.prototype._resetAnchors = function (e) { return this._reset(e); }, e; })(), V = { gjkCalls: 0, gjkIters: 0, gjkMaxIters: 0, toiTime: 0, toiMaxTime: 0, toiCalls: 0, toiIters: 0, toiMaxIters: 0, toiRootIters: 0, toiMaxRootIters: 0, toString: function (e) {
                e = typeof e == "string" ? e : "\n";
                var t = "";
                for (var n in this)
                    typeof this[n] != "function" && typeof this[n] != "object" && (t += n + ": " + this[n] + e);
                return t;
            } }, Tt = function () { return Date.now(); }, Et = function (e) { return Date.now() - e; }, Dt = { now: Tt, diff: Et }, Ot = Math.max, kt = s(0, 0), At = s(0, 0), jt = s(0, 0), Mt = s(0, 0), Nt = s(0, 0), Pt = s(0, 0), Ft = s(0, 0), V.gjkCalls = 0, V.gjkIters = 0, V.gjkMaxIters = 0, It = (function () { function e() { this.proxyA = new Bt, this.proxyB = new Bt, this.transformA = nt.identity(), this.transformB = nt.identity(), this.useRadii = !1; } return e.prototype.recycle = function () { this.proxyA.recycle(), this.proxyB.recycle(), this.transformA.setIdentity(), this.transformB.setIdentity(), this.useRadii = !1; }, e; })(), Lt = (function () { function e() { this.pointA = s(0, 0), this.pointB = s(0, 0), this.distance = 0, this.iterations = 0; } return e.prototype.recycle = function () { d(this.pointA), d(this.pointB), this.distance = 0, this.iterations = 0; }, e; })(), Rt = (function () { function e() { this.metric = 0, this.indexA = [], this.indexB = [], this.count = 0; } return e.prototype.recycle = function () { this.metric = 0, this.indexA.length = 0, this.indexB.length = 0, this.count = 0; }, e; })(), zt = function (e, t, n) { ++V.gjkCalls; var r = n.proxyA, i = n.proxyB, a = n.transformA, o = n.transformB; Gt.recycle(), Gt.readCache(t, r, a, i, o); for (var s = Gt.m_v, c = R.maxDistanceIterations, l = [], d = [], f = 0, p = 0; p < c;) {
            f = Gt.m_count;
            for (var m = 0; m < f; ++m)
                l[m] = s[m].indexA, d[m] = s[m].indexB;
            if (Gt.solve(), Gt.m_count === 3)
                break;
            var h = Gt.getSearchDirection();
            if (k(h) < Te * Te)
                break;
            var _ = s[Gt.m_count];
            _.indexA = r.getSupport(te(kt, a.q, v(kt, -1, h))), F(_.wA, a, r.getVertex(_.indexA)), _.indexB = i.getSupport(te(kt, o.q, h)), F(_.wB, o, i.getVertex(_.indexB)), g(_.w, _.wB, _.wA), ++p, ++V.gjkIters;
            for (var x = !1, m = 0; m < f; ++m)
                if (_.indexA === l[m] && _.indexB === d[m]) {
                    x = !0;
                    break;
                }
            if (x)
                break;
            ++Gt.m_count;
        } if (V.gjkMaxIters = Ot(V.gjkMaxIters, p), Gt.getWitnessPoints(e.pointA, e.pointB), e.distance = A(e.pointA, e.pointB), e.iterations = p, Gt.writeCache(t), n.useRadii) {
            var S = r.m_radius, C = i.m_radius;
            if (e.distance > S + C && e.distance > Te)
                e.distance -= S + C, g(At, e.pointB, e.pointA), w(At), y(e.pointA, S, At), b(e.pointB, C, At);
            else {
                var T = g(kt, e.pointA, e.pointB);
                u(e.pointA, T), u(e.pointB, T), e.distance = 0;
            }
        } }, Bt = (function () { function e() { this.m_vertices = [], this.m_count = 0, this.m_radius = 0; } return e.prototype.recycle = function () { this.m_vertices.length = 0, this.m_count = 0, this.m_radius = 0; }, e.prototype.getVertexCount = function () { return this.m_count; }, e.prototype.getVertex = function (e) { return this.m_vertices[e]; }, e.prototype.getSupport = function (e) { for (var t = 0, n = -1 / 0, r = 0; r < this.m_count; ++r) {
            var i = O(this.m_vertices[r], e);
            i > n && (t = r, n = i);
        } return t; }, e.prototype.getSupportVertex = function (e) { return this.m_vertices[this.getSupport(e)]; }, e.prototype.set = function (e, t) { e.computeDistanceProxy(this, t); }, e.prototype.setVertices = function (e, t, n) { this.m_vertices = e, this.m_count = t, this.m_radius = n; }, e; })(), Vt = (function () { function e() { this.wA = s(0, 0), this.indexA = 0, this.wB = s(0, 0), this.indexB = 0, this.w = s(0, 0), this.a = 0; } return e.prototype.recycle = function () { this.indexA = 0, this.indexB = 0, d(this.wA), d(this.wB), d(this.w), this.a = 0; }, e.prototype.set = function (e) { this.indexA = e.indexA, this.indexB = e.indexB, u(this.wA, e.wA), u(this.wB, e.wB), u(this.w, e.w), this.a = e.a; }, e; })(), Ht = s(0, 0), Ut = s(0, 0), Wt = (function () { function e() { this.m_v1 = new Vt, this.m_v2 = new Vt, this.m_v3 = new Vt, this.m_v = [this.m_v1, this.m_v2, this.m_v3]; } return e.prototype.recycle = function () { this.m_v1.recycle(), this.m_v2.recycle(), this.m_v3.recycle(), this.m_count = 0; }, e.prototype.toString = function () { return this.m_count === 3 ? ["+" + this.m_count, this.m_v1.a, this.m_v1.wA.x, this.m_v1.wA.y, this.m_v1.wB.x, this.m_v1.wB.y, this.m_v2.a, this.m_v2.wA.x, this.m_v2.wA.y, this.m_v2.wB.x, this.m_v2.wB.y, this.m_v3.a, this.m_v3.wA.x, this.m_v3.wA.y, this.m_v3.wB.x, this.m_v3.wB.y].toString() : this.m_count === 2 ? ["+" + this.m_count, this.m_v1.a, this.m_v1.wA.x, this.m_v1.wA.y, this.m_v1.wB.x, this.m_v1.wB.y, this.m_v2.a, this.m_v2.wA.x, this.m_v2.wA.y, this.m_v2.wB.x, this.m_v2.wB.y].toString() : this.m_count === 1 ? ["+" + this.m_count, this.m_v1.a, this.m_v1.wA.x, this.m_v1.wA.y, this.m_v1.wB.x, this.m_v1.wB.y].toString() : "+" + this.m_count; }, e.prototype.readCache = function (e, t, n, r, i) { this.m_count = e.count; for (var a = 0; a < this.m_count; ++a) {
            var o = this.m_v[a];
            o.indexA = e.indexA[a], o.indexB = e.indexB[a];
            var s = t.getVertex(o.indexA), c = r.getVertex(o.indexB);
            F(o.wA, n, s), F(o.wB, i, c), g(o.w, o.wB, o.wA), o.a = 0;
        } if (this.m_count > 1) {
            var l = e.metric, u = this.getMetric();
            (u < .5 * l || 2 * l < u || u < Te) && (this.m_count = 0);
        } if (this.m_count === 0) {
            var o = this.m_v[0];
            o.indexA = 0, o.indexB = 0;
            var s = t.getVertex(0), c = r.getVertex(0);
            F(o.wA, n, s), F(o.wB, i, c), g(o.w, o.wB, o.wA), o.a = 1, this.m_count = 1;
        } }, e.prototype.writeCache = function (e) { e.metric = this.getMetric(), e.count = this.m_count; for (var t = 0; t < this.m_count; ++t)
            e.indexA[t] = this.m_v[t].indexA, e.indexB[t] = this.m_v[t].indexB; }, e.prototype.getSearchDirection = function () { var e = this.m_v1, t = this.m_v2; switch (this.m_count) {
            case 1: return l(Ht, -e.w.x, -e.w.y);
            case 2: return g(jt, t.w, e.w), -D(jt, e.w) > 0 ? l(Ht, -jt.y, jt.x) : l(Ht, jt.y, -jt.x);
            default: return d(Ht);
        } }, e.prototype.getClosestPoint = function () { var e = this.m_v1, t = this.m_v2; switch (this.m_count) {
            case 0: return d(Ut);
            case 1: return u(Ut, e.w);
            case 2: return x(Ut, e.a, e.w, t.a, t.w);
            case 3: return d(Ut);
            default: return d(Ut);
        } }, e.prototype.getWitnessPoints = function (e, t) { var n = this.m_v1, r = this.m_v2, i = this.m_v3; switch (this.m_count) {
            case 0: break;
            case 1:
                u(e, n.wA), u(t, n.wB);
                break;
            case 2:
                x(e, n.a, n.wA, r.a, r.wA), x(t, n.a, n.wB, r.a, r.wB);
                break;
            case 3: S(e, n.a, n.wA, r.a, r.wA, i.a, i.wA), u(t, e);
        } }, e.prototype.getMetric = function () { switch (this.m_count) {
            case 0: return 0;
            case 1: return 0;
            case 2: return A(this.m_v1.w, this.m_v2.w);
            case 3: return D(g(Pt, this.m_v2.w, this.m_v1.w), g(Ft, this.m_v3.w, this.m_v1.w));
            default: return 0;
        } }, e.prototype.solve = function () { switch (this.m_count) {
            case 1: break;
            case 2:
                this.solve2();
                break;
            case 3: this.solve3();
        } }, e.prototype.solve2 = function () { var e = this.m_v1.w, t = this.m_v2.w; g(jt, t, e); var n = -O(e, jt); if (n <= 0)
            this.m_v1.a = 1, this.m_count = 1;
        else {
            var r = O(t, jt);
            if (r <= 0)
                this.m_v2.a = 1, this.m_count = 1, this.m_v1.set(this.m_v2);
            else {
                var i = 1 / (r + n);
                this.m_v1.a = r * i, this.m_v2.a = n * i, this.m_count = 2;
            }
        } }, e.prototype.solve3 = function () { var e = this.m_v1.w, t = this.m_v2.w, n = this.m_v3.w; g(jt, t, e); var r = O(e, jt), i = O(t, jt), a = -r; g(Mt, n, e); var o = O(e, Mt), s = O(n, Mt), c = -o; g(Nt, n, t); var l = O(t, Nt), u = O(n, Nt), d = -l, f = D(jt, Mt), p = f * D(t, n), m = f * D(n, e), h = f * D(e, t); if (a <= 0 && c <= 0)
            this.m_v1.a = 1, this.m_count = 1;
        else if (i > 0 && a > 0 && h <= 0) {
            var _ = 1 / (i + a);
            this.m_v1.a = i * _, this.m_v2.a = a * _, this.m_count = 2;
        }
        else if (s > 0 && c > 0 && m <= 0) {
            var v = 1 / (s + c);
            this.m_v1.a = s * v, this.m_v3.a = c * v, this.m_count = 2, this.m_v2.set(this.m_v3);
        }
        else if (i <= 0 && d <= 0)
            this.m_v2.a = 1, this.m_count = 1, this.m_v1.set(this.m_v2);
        else if (s <= 0 && u <= 0)
            this.m_v3.a = 1, this.m_count = 1, this.m_v1.set(this.m_v3);
        else if (u > 0 && d > 0 && p <= 0) {
            var y = 1 / (u + d);
            this.m_v2.a = u * y, this.m_v3.a = d * y, this.m_count = 2, this.m_v1.set(this.m_v3);
        }
        else {
            var b = 1 / (p + m + h);
            this.m_v1.a = p * b, this.m_v2.a = m * b, this.m_v3.a = h * b, this.m_count = 3;
        } }, e; })(), Gt = new Wt, Kt = new It, qt = new Rt, Jt = new Lt, Yt = function (e, t, n, r, i, a) { return Kt.recycle(), Kt.proxyA.set(e, t), Kt.proxyB.set(n, r), P(Kt.transformA, i), P(Kt.transformB, a), Kt.useRadii = !0, Jt.recycle(), qt.recycle(), zt(Jt, qt, Kt), Jt.distance < 10 * Te; }, zt.testOverlap = Yt, zt.Input = It, zt.Output = Lt, zt.Proxy = Bt, zt.Cache = Rt, (function () { function e() { this.proxyA = new Bt, this.proxyB = new Bt, this.transformA = nt.identity(), this.transformB = nt.identity(), this.translationB = I.zero(); } return e.prototype.recycle = function () { this.proxyA.recycle(), this.proxyB.recycle(), this.transformA.setIdentity(), this.transformB.setIdentity(), d(this.translationB); }, e; })(), Xt = Math.abs, Zt = Math.max, Qt = (function () { function e() { this.proxyA = new Bt, this.proxyB = new Bt, this.sweepA = new tt, this.sweepB = new tt; } return e.prototype.recycle = function () { this.proxyA.recycle(), this.proxyB.recycle(), this.sweepA.recycle(), this.sweepB.recycle(), this.tMax = -1; }, e; })(), (function (e) { e[e.e_unset = -1] = "e_unset", e[e.e_unknown = 0] = "e_unknown", e[e.e_failed = 1] = "e_failed", e[e.e_overlapped = 2] = "e_overlapped", e[e.e_touching = 3] = "e_touching", e[e.e_separated = 4] = "e_separated"; })($t || ($t = {})), en = (function () { function e() { this.state = $t.e_unset, this.t = -1; } return e.prototype.recycle = function () { this.state = $t.e_unset, this.t = -1; }, e; })(), V.toiTime = 0, V.toiMaxTime = 0, V.toiCalls = 0, V.toiIters = 0, V.toiMaxIters = 0, V.toiRootIters = 0, V.toiMaxRootIters = 0, tn = new It, nn = new Lt, rn = new Rt, an = N(0, 0, 0), on = N(0, 0, 0), sn = s(0, 0), cn = s(0, 0), ln = s(0, 0), un = s(0, 0), dn = s(0, 0), fn = s(0, 0), pn = s(0, 0), mn = s(0, 0), hn = function (e, t) { var n = Dt.now(); ++V.toiCalls, e.state = $t.e_unknown, e.t = t.tMax; var r = t.proxyA, i = t.proxyB, a = t.sweepA, o = t.sweepB; if (a.normalize(), o.normalize(), !a.isValid() || !o.isValid())
            e.state = $t.e_failed;
        else {
            var s = t.tMax, c = r.m_radius + i.m_radius, l = Zt(R.linearSlop, c - 3 * R.linearSlop), u = .25 * R.linearSlop, d = 0, f = R.maxTOIIterations, p = 0;
            for (rn.recycle(), tn.proxyA.setVertices(r.m_vertices, r.m_count, r.m_radius), tn.proxyB.setVertices(i.m_vertices, i.m_count, i.m_radius), tn.useRadii = !1;;) {
                if (a.getTransform(an, d), o.getTransform(on, d), P(tn.transformA, an), P(tn.transformB, on), zt(nn, rn, tn), nn.distance <= 0) {
                    e.state = $t.e_overlapped, e.t = 0;
                    break;
                }
                if (nn.distance < l + u) {
                    e.state = $t.e_touching, e.t = d;
                    break;
                }
                _n.initialize(rn, r, a, i, o, d);
                for (var m = !1, h = s, g = 0;;) {
                    var _ = _n.findMinSeparation(h);
                    if (_ > l + u) {
                        e.state = $t.e_separated, e.t = s, m = !0;
                        break;
                    }
                    if (_ > l - u) {
                        d = h;
                        break;
                    }
                    var v = _n.evaluate(d);
                    if (v < l - u) {
                        e.state = $t.e_failed, e.t = d, m = !0;
                        break;
                    }
                    if (v <= l + u) {
                        e.state = $t.e_touching, e.t = d, m = !0;
                        break;
                    }
                    for (var y = 0, b = d, x = h;;) {
                        var S = void 0;
                        S = y & 1 ? b + (l - v) * (x - b) / (_ - v) : .5 * (b + x), ++y, ++V.toiRootIters;
                        var C = _n.evaluate(S);
                        if (Xt(C - l) < u) {
                            h = S;
                            break;
                        }
                        if (C > l ? (b = S, v = C) : (x = S, _ = C), y === 50)
                            break;
                    }
                    if (V.toiMaxRootIters = Zt(V.toiMaxRootIters, y), ++g, g === R.maxPolygonVertices)
                        break;
                }
                if (++p, ++V.toiIters, m)
                    break;
                if (p === f) {
                    e.state = $t.e_failed, e.t = d;
                    break;
                }
            }
            V.toiMaxIters = Zt(V.toiMaxIters, p);
            var w = Dt.diff(n);
            V.toiMaxTime = Zt(V.toiMaxTime, w), V.toiTime += w, _n.recycle();
        } }, (function (e) { e[e.e_unset = -1] = "e_unset", e[e.e_points = 1] = "e_points", e[e.e_faceA = 2] = "e_faceA", e[e.e_faceB = 3] = "e_faceB"; })(gn || (gn = {})), _n = new ((function () { function e() { this.m_proxyA = null, this.m_proxyB = null, this.m_sweepA = null, this.m_sweepB = null, this.m_type = gn.e_unset, this.m_localPoint = s(0, 0), this.m_axis = s(0, 0), this.indexA = -1, this.indexB = -1; } return e.prototype.recycle = function () { this.m_proxyA = null, this.m_proxyB = null, this.m_sweepA = null, this.m_sweepB = null, this.m_type = gn.e_unset, d(this.m_localPoint), d(this.m_axis), this.indexA = -1, this.indexB = -1; }, e.prototype.initialize = function (e, t, n, r, i, a) { var o = e.count; if (this.m_proxyA = t, this.m_proxyB = r, this.m_sweepA = n, this.m_sweepB = i, this.m_sweepA.getTransform(an, a), this.m_sweepB.getTransform(on, a), o === 1) {
            this.m_type = gn.e_points;
            var s = this.m_proxyA.getVertex(e.indexA[0]), c = this.m_proxyB.getVertex(e.indexB[0]);
            F(cn, an, s), F(ln, on, c), g(this.m_axis, ln, cn);
            var l = C(this.m_axis);
            return l;
        } if (e.indexA[0] === e.indexA[1]) {
            this.m_type = gn.e_faceB;
            var u = r.getVertex(e.indexB[0]), d = r.getVertex(e.indexB[1]);
            T(this.m_axis, g(sn, d, u), 1), w(this.m_axis), M(un, on.q, this.m_axis), x(this.m_localPoint, .5, u, .5, d), F(ln, on, this.m_localPoint);
            var p = t.getVertex(e.indexA[0]), l = O(nt.mulVec2(an, p), un) - O(ln, un);
            return l < 0 && (f(this.m_axis), l = -l), l;
        } this.m_type = gn.e_faceA; var m = this.m_proxyA.getVertex(e.indexA[0]), h = this.m_proxyA.getVertex(e.indexA[1]); T(this.m_axis, g(sn, h, m), 1), w(this.m_axis), M(un, an.q, this.m_axis), x(this.m_localPoint, .5, m, .5, h), F(cn, an, this.m_localPoint), F(ln, on, this.m_proxyB.getVertex(e.indexB[0])); var l = O(ln, un) - O(cn, un); return l < 0 && (f(this.m_axis), l = -l), l; }, e.prototype.compute = function (e, t) { switch (this.m_sweepA.getTransform(an, t), this.m_sweepB.getTransform(on, t), this.m_type) {
            case gn.e_points:
                e && (te(dn, an.q, this.m_axis), te(fn, on.q, v(sn, -1, this.m_axis)), this.indexA = this.m_proxyA.getSupport(dn), this.indexB = this.m_proxyB.getSupport(fn)), u(pn, this.m_proxyA.getVertex(this.indexA)), u(mn, this.m_proxyB.getVertex(this.indexB)), F(cn, an, pn), F(ln, on, mn);
                var n = O(ln, this.m_axis) - O(cn, this.m_axis);
                return n;
            case gn.e_faceA:
                M(un, an.q, this.m_axis), F(cn, an, this.m_localPoint), e && (te(fn, on.q, v(sn, -1, un)), this.indexA = -1, this.indexB = this.m_proxyB.getSupport(fn)), u(mn, this.m_proxyB.getVertex(this.indexB)), F(ln, on, mn);
                var n = O(ln, un) - O(cn, un);
                return n;
            case gn.e_faceB:
                M(un, on.q, this.m_axis), F(ln, on, this.m_localPoint), e && (te(dn, an.q, v(sn, -1, un)), this.indexB = -1, this.indexA = this.m_proxyA.getSupport(dn)), u(pn, this.m_proxyA.getVertex(this.indexA)), F(cn, an, pn);
                var n = O(cn, un) - O(ln, un);
                return n;
            default: return e && (this.indexA = -1, this.indexB = -1), 0;
        } }, e.prototype.findMinSeparation = function (e) { return this.compute(!0, e); }, e.prototype.evaluate = function (e) { return this.compute(!1, e); }, e; })()), hn.Input = Qt, hn.Output = en, vn = Math.abs, yn = Math.sqrt, bn = Math.min, xn = (function () { function e() { this.dt = 0, this.inv_dt = 0, this.velocityIterations = 0, this.positionIterations = 0, this.warmStarting = !1, this.blockSolve = !0, this.inv_dt0 = 0, this.dtRatio = 1; } return e.prototype.reset = function (e) { this.dt > 0 && (this.inv_dt0 = this.inv_dt), this.dt = e, this.inv_dt = e == 0 ? 0 : 1 / e, this.dtRatio = e * this.inv_dt0; }, e; })(), Sn = new xn, Cn = s(0, 0), wn = s(0, 0), Tn = s(0, 0), En = new Qt, Dn = new en, On = new tt, kn = new tt, An = new tt, jn = (function () { function e(e) { this.contact = e, this.normals = [], this.tangents = []; } return e.prototype.recycle = function () { this.normals.length = 0, this.tangents.length = 0; }, Object.defineProperty(e.prototype, "normalImpulses", { get: function () { var e = this.contact, t = this.normals; t.length = 0; for (var n = 0; n < e.v_points.length; ++n)
                t.push(e.v_points[n].normalImpulse); return t; }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "tangentImpulses", { get: function () { var e = this.contact, t = this.tangents; t.length = 0; for (var n = 0; n < e.v_points.length; ++n)
                t.push(e.v_points[n].tangentImpulse); return t; }, enumerable: !1, configurable: !0 }), e; })(), Mn = (function () { function e(e) { this.m_world = e, this.m_stack = [], this.m_bodies = [], this.m_contacts = [], this.m_joints = []; } return e.prototype.clear = function () { this.m_stack.length = 0, this.m_bodies.length = 0, this.m_contacts.length = 0, this.m_joints.length = 0; }, e.prototype.addBody = function (e) { this.m_bodies.push(e); }, e.prototype.addContact = function (e) { this.m_contacts.push(e); }, e.prototype.addJoint = function (e) { this.m_joints.push(e); }, e.prototype.solveWorld = function (e) { for (var t = this.m_world, n = t.m_bodyList; n; n = n.m_next)
            n.m_islandFlag = !1; for (var r = t.m_contactList; r; r = r.m_next)
            r.m_islandFlag = !1; for (var i = t.m_jointList; i; i = i.m_next)
            i.m_islandFlag = !1; for (var a = this.m_stack, o = t.m_bodyList; o; o = o.m_next)
            if (!o.m_islandFlag && o.isAwake() != 0 && o.isActive() != 0 && !o.isStatic()) {
                for (this.clear(), a.push(o), o.m_islandFlag = !0; a.length > 0;) {
                    var n = a.pop();
                    if (this.addBody(n), n.m_awakeFlag = !0, !n.isStatic()) {
                        for (var s = n.m_contactList; s; s = s.next) {
                            var c = s.contact;
                            if (!c.m_islandFlag && c.isEnabled() != 0 && c.isTouching() != 0) {
                                var l = c.m_fixtureA.m_isSensor, u = c.m_fixtureB.m_isSensor;
                                if (!(l || u)) {
                                    this.addContact(c), c.m_islandFlag = !0;
                                    var d = s.other;
                                    d.m_islandFlag || (a.push(d), d.m_islandFlag = !0);
                                }
                            }
                        }
                        for (var f = n.m_jointList; f; f = f.next)
                            if (f.joint.m_islandFlag != 1) {
                                var d = f.other;
                                d.isActive() != 0 && (this.addJoint(f.joint), f.joint.m_islandFlag = !0, d.m_islandFlag || (a.push(d), d.m_islandFlag = !0));
                            }
                    }
                }
                this.solveIsland(e);
                for (var p = 0; p < this.m_bodies.length; ++p) {
                    var n = this.m_bodies[p];
                    n.isStatic() && (n.m_islandFlag = !1);
                }
            } }, e.prototype.solveIsland = function (e) { for (var t = this.m_world, n = t.m_gravity, r = t.m_allowSleep, i = e.dt, a = 0; a < this.m_bodies.length; ++a) {
            var o = this.m_bodies[a];
            u(Cn, o.m_sweep.c);
            var s = o.m_sweep.a;
            u(wn, o.m_linearVelocity);
            var c = o.m_angularVelocity;
            u(o.m_sweep.c0, o.m_sweep.c), o.m_sweep.a0 = o.m_sweep.a, o.isDynamic() && (y(wn, i * o.m_gravityScale, n), y(wn, i * o.m_invMass, o.m_force), c += i * o.m_invI * o.m_torque, v(wn, 1 / (1 + i * o.m_linearDamping), wn), c *= 1 / (1 + i * o.m_angularDamping)), u(o.c_position.c, Cn), o.c_position.a = s, u(o.c_velocity.v, wn), o.c_velocity.w = c;
        } for (var a = 0; a < this.m_contacts.length; ++a) {
            var l = this.m_contacts[a];
            l.initConstraint(e);
        } for (var a = 0; a < this.m_contacts.length; ++a) {
            var l = this.m_contacts[a];
            l.initVelocityConstraint(e);
        } if (e.warmStarting)
            for (var a = 0; a < this.m_contacts.length; ++a) {
                var l = this.m_contacts[a];
                l.warmStartConstraint(e);
            } for (var a = 0; a < this.m_joints.length; ++a) {
            var d = this.m_joints[a];
            d.initVelocityConstraints(e);
        } for (var a = 0; a < e.velocityIterations; ++a) {
            for (var f = 0; f < this.m_joints.length; ++f) {
                var d = this.m_joints[f];
                d.solveVelocityConstraints(e);
            }
            for (var f = 0; f < this.m_contacts.length; ++f) {
                var l = this.m_contacts[f];
                l.solveVelocityConstraint(e);
            }
        } for (var a = 0; a < this.m_contacts.length; ++a) {
            var l = this.m_contacts[a];
            l.storeConstraintImpulses(e);
        } for (var a = 0; a < this.m_bodies.length; ++a) {
            var o = this.m_bodies[a];
            u(Cn, o.c_position.c);
            var s = o.c_position.a;
            u(wn, o.c_velocity.v);
            var c = o.c_velocity.w;
            v(Tn, i, wn);
            var p = k(Tn);
            if (p > R.maxTranslationSquared) {
                var m = R.maxTranslation / yn(p);
                _(wn, m);
            }
            var h = i * c;
            if (h * h > R.maxRotationSquared) {
                var m = R.maxRotation / vn(h);
                c *= m;
            }
            y(Cn, i, wn), s += i * c, u(o.c_position.c, Cn), o.c_position.a = s, u(o.c_velocity.v, wn), o.c_velocity.w = c;
        } for (var g = !1, a = 0; a < e.positionIterations; ++a) {
            for (var b = 0, f = 0; f < this.m_contacts.length; ++f) {
                var l = this.m_contacts[f], x = l.solvePositionConstraint(e);
                b = bn(b, x);
            }
            for (var S = b >= -3 * R.linearSlop, C = !0, f = 0; f < this.m_joints.length; ++f) {
                var d = this.m_joints[f], w = d.solvePositionConstraints(e);
                C = C && w;
            }
            if (S && C) {
                g = !0;
                break;
            }
        } for (var a = 0; a < this.m_bodies.length; ++a) {
            var o = this.m_bodies[a];
            u(o.m_sweep.c, o.c_position.c), o.m_sweep.a = o.c_position.a, u(o.m_linearVelocity, o.c_velocity.v), o.m_angularVelocity = o.c_velocity.w, o.synchronizeTransform();
        } if (this.postSolveIsland(), r) {
            for (var T = 1 / 0, E = R.linearSleepToleranceSqr, D = R.angularSleepToleranceSqr, a = 0; a < this.m_bodies.length; ++a) {
                var o = this.m_bodies[a];
                o.isStatic() || (o.m_autoSleepFlag == 0 || o.m_angularVelocity * o.m_angularVelocity > D || k(o.m_linearVelocity) > E ? (o.m_sleepTime = 0, T = 0) : (o.m_sleepTime += i, T = bn(T, o.m_sleepTime)));
            }
            if (T >= R.timeToSleep && g)
                for (var a = 0; a < this.m_bodies.length; ++a) {
                    var o = this.m_bodies[a];
                    o.setAwake(!1);
                }
        } }, e.prototype.solveWorldTOI = function (e) { var t = this.m_world; if (t.m_stepComplete) {
            for (var n = t.m_bodyList; n; n = n.m_next)
                n.m_islandFlag = !1, n.m_sweep.alpha0 = 0;
            for (var r = t.m_contactList; r; r = r.m_next)
                r.m_toiFlag = !1, r.m_islandFlag = !1, r.m_toiCount = 0, r.m_toi = 1;
        } for (;;) {
            for (var i = null, a = 1, o = t.m_contactList; o; o = o.m_next)
                if (o.isEnabled() != 0 && !(o.m_toiCount > R.maxSubSteps)) {
                    var s = 1;
                    if (o.m_toiFlag)
                        s = o.m_toi;
                    else {
                        var c = o.getFixtureA(), l = o.getFixtureB();
                        if (c.isSensor() || l.isSensor())
                            continue;
                        var u = c.getBody(), d = l.getBody(), f = u.isAwake() && !u.isStatic(), p = d.isAwake() && !d.isStatic();
                        if (f == 0 && p == 0)
                            continue;
                        var m = u.isBullet() || !u.isDynamic(), h = d.isBullet() || !d.isDynamic();
                        if (m == 0 && h == 0)
                            continue;
                        var g = u.m_sweep.alpha0;
                        u.m_sweep.alpha0 < d.m_sweep.alpha0 ? (g = d.m_sweep.alpha0, u.m_sweep.advance(g)) : d.m_sweep.alpha0 < u.m_sweep.alpha0 && (g = u.m_sweep.alpha0, d.m_sweep.advance(g));
                        var _ = o.getChildIndexA(), v = o.getChildIndexB();
                        En.proxyA.set(c.getShape(), _), En.proxyB.set(l.getShape(), v), En.sweepA.set(u.m_sweep), En.sweepB.set(d.m_sweep), En.tMax = 1, hn(Dn, En);
                        var y = Dn.t;
                        s = Dn.state == $t.e_touching ? bn(g + (1 - g) * y, 1) : 1, o.m_toi = s, o.m_toiFlag = !0;
                    }
                    s < a && (i = o, a = s);
                }
            if (i == null || 1 - 10 * Te < a) {
                t.m_stepComplete = !0;
                break;
            }
            var b = i.getFixtureA(), x = i.getFixtureB(), S = b.getBody(), C = x.getBody();
            if (kn.set(S.m_sweep), An.set(C.m_sweep), S.advance(a), C.advance(a), i.update(t), i.m_toiFlag = !1, ++i.m_toiCount, i.isEnabled() == 0 || i.isTouching() == 0)
                i.setEnabled(!1), S.m_sweep.set(kn), C.m_sweep.set(An), S.synchronizeTransform(), C.synchronizeTransform();
            else {
                S.setAwake(!0), C.setAwake(!0), this.clear(), this.addBody(S), this.addBody(C), this.addContact(i), S.m_islandFlag = !0, C.m_islandFlag = !0, i.m_islandFlag = !0;
                for (var w = [S, C], T = 0; T < w.length; ++T) {
                    var E = w[T];
                    if (E.isDynamic())
                        for (var D = E.m_contactList; D; D = D.next) {
                            var O = D.contact;
                            if (!O.m_islandFlag) {
                                var k = D.other;
                                if (!k.isDynamic() || E.isBullet() || k.isBullet()) {
                                    var A = O.m_fixtureA.m_isSensor, j = O.m_fixtureB.m_isSensor;
                                    A || j || (On.set(k.m_sweep), k.m_islandFlag == 0 && k.advance(a), O.update(t), O.isEnabled() == 0 || O.isTouching() == 0 ? (k.m_sweep.set(On), k.synchronizeTransform()) : (O.m_islandFlag = !0, this.addContact(O), k.m_islandFlag || (k.m_islandFlag = !0, k.isStatic() || k.setAwake(!0), this.addBody(k))));
                                }
                            }
                        }
                }
                Sn.reset((1 - a) * e.dt), Sn.dtRatio = 1, Sn.positionIterations = 20, Sn.velocityIterations = e.velocityIterations, Sn.warmStarting = !1, this.solveIslandTOI(Sn, S, C);
                for (var T = 0; T < this.m_bodies.length; ++T) {
                    var E = this.m_bodies[T];
                    if (E.m_islandFlag = !1, E.isDynamic()) {
                        E.synchronizeFixtures();
                        for (var D = E.m_contactList; D; D = D.next)
                            D.contact.m_toiFlag = !1, D.contact.m_islandFlag = !1;
                    }
                }
                if (t.findNewContacts(), t.m_subStepping) {
                    t.m_stepComplete = !1;
                    break;
                }
            }
        } }, e.prototype.solveIslandTOI = function (e, t, n) { for (var r = 0; r < this.m_bodies.length; ++r) {
            var i = this.m_bodies[r];
            u(i.c_position.c, i.m_sweep.c), i.c_position.a = i.m_sweep.a, u(i.c_velocity.v, i.m_linearVelocity), i.c_velocity.w = i.m_angularVelocity;
        } for (var r = 0; r < this.m_contacts.length; ++r) {
            var a = this.m_contacts[r];
            a.initConstraint(e);
        } for (var r = 0; r < e.positionIterations; ++r) {
            for (var o = 0, s = 0; s < this.m_contacts.length; ++s) {
                var a = this.m_contacts[s], c = a.solvePositionConstraintTOI(e, t, n);
                o = bn(o, c);
            }
            if (o >= -1.5 * R.linearSlop)
                break;
        } var r; u(t.m_sweep.c0, t.c_position.c), t.m_sweep.a0 = t.c_position.a, u(n.m_sweep.c0, n.c_position.c), n.m_sweep.a0 = n.c_position.a; for (var r = 0; r < this.m_contacts.length; ++r) {
            var a = this.m_contacts[r];
            a.initVelocityConstraint(e);
        } for (var r = 0; r < e.velocityIterations; ++r)
            for (var s = 0; s < this.m_contacts.length; ++s) {
                var a = this.m_contacts[s];
                a.solveVelocityConstraint(e);
            } for (var l = e.dt, r = 0; r < this.m_bodies.length; ++r) {
            var i = this.m_bodies[r];
            u(Cn, i.c_position.c);
            var d = i.c_position.a;
            u(wn, i.c_velocity.v);
            var f = i.c_velocity.w;
            v(Tn, l, wn);
            var p = k(Tn);
            if (p > R.maxTranslationSquared) {
                var m = R.maxTranslation / yn(p);
                _(wn, m);
            }
            var h = l * f;
            if (h * h > R.maxRotationSquared) {
                var m = R.maxRotation / vn(h);
                f *= m;
            }
            y(Cn, l, wn), d += l * f, u(i.c_position.c, Cn), i.c_position.a = d, u(i.c_velocity.v, wn), i.c_velocity.w = f, u(i.m_sweep.c, Cn), i.m_sweep.a = d, u(i.m_linearVelocity, wn), i.m_angularVelocity = f, i.synchronizeTransform();
        } this.postSolveIsland(); }, e.prototype.postSolveIsland = function () { for (var e = 0; e < this.m_contacts.length; ++e) {
            var t = this.m_contacts[e];
            this.m_world.postSolve(t, t.m_impulse);
        } }, e; })(), Mn.TimeStep = xn, Nn = (function () { function e(e, t, n, r) { typeof e == "object" && e ? (this.ex = I.clone(e), this.ey = I.clone(t)) : typeof e == "number" ? (this.ex = I.neo(e, n), this.ey = I.neo(t, r)) : (this.ex = I.zero(), this.ey = I.zero()); } return e.prototype.toString = function () { return JSON.stringify(this); }, e.isValid = function (e) { return e != null && I.isValid(e.ex) && I.isValid(e.ey); }, e.assert = function (e) { }, e.prototype.set = function (e, t, n, r) { typeof e == "number" && typeof t == "number" && typeof n == "number" && typeof r == "number" ? (this.ex.setNum(e, n), this.ey.setNum(t, r)) : typeof e == "object" && typeof t == "object" ? (this.ex.setVec2(e), this.ey.setVec2(t)) : typeof e == "object" && (this.ex.setVec2(e.ex), this.ey.setVec2(e.ey)); }, e.prototype.setIdentity = function () { this.ex.x = 1, this.ey.x = 0, this.ex.y = 0, this.ey.y = 1; }, e.prototype.setZero = function () { this.ex.x = 0, this.ey.x = 0, this.ex.y = 0, this.ey.y = 0; }, e.prototype.getInverse = function () { var t = this.ex.x, n = this.ey.x, r = this.ex.y, i = this.ey.y, a = t * i - n * r; a !== 0 && (a = 1 / a); var o = new e; return o.ex.x = a * i, o.ey.x = -a * n, o.ex.y = -a * r, o.ey.y = a * t, o; }, e.prototype.solve = function (e) { var t = this.ex.x, n = this.ey.x, r = this.ex.y, i = this.ey.y, a = t * i - n * r; a !== 0 && (a = 1 / a); var o = I.zero(); return o.x = a * (i * e.x - n * e.y), o.y = a * (t * e.y - r * e.x), o; }, e.mul = function (t, n) { if (n && "x" in n && "y" in n) {
            var r = t.ex.x * n.x + t.ey.x * n.y, i = t.ex.y * n.x + t.ey.y * n.y;
            return I.neo(r, i);
        } if (n && "ex" in n && "ey" in n)
            return new e(t.ex.x * n.ex.x + t.ey.x * n.ex.y, t.ex.x * n.ey.x + t.ey.x * n.ey.y, t.ex.y * n.ex.x + t.ey.y * n.ex.y, t.ex.y * n.ey.x + t.ey.y * n.ey.y); }, e.mulVec2 = function (e, t) { var n = e.ex.x * t.x + e.ey.x * t.y, r = e.ex.y * t.x + e.ey.y * t.y; return I.neo(n, r); }, e.mulMat22 = function (t, n) { return new e(t.ex.x * n.ex.x + t.ey.x * n.ex.y, t.ex.x * n.ey.x + t.ey.x * n.ey.y, t.ex.y * n.ex.x + t.ey.y * n.ex.y, t.ex.y * n.ey.x + t.ey.y * n.ey.y); }, e.mulT = function (t, n) { if (n && "x" in n && "y" in n)
            return I.neo(I.dot(n, t.ex), I.dot(n, t.ey)); if (n && "ex" in n && "ey" in n)
            return new e(I.neo(I.dot(t.ex, n.ex), I.dot(t.ey, n.ex)), I.neo(I.dot(t.ex, n.ey), I.dot(t.ey, n.ey))); }, e.mulTVec2 = function (e, t) { return I.neo(I.dot(t, e.ex), I.dot(t, e.ey)); }, e.mulTMat22 = function (t, n) { return new e(I.neo(I.dot(t.ex, n.ex), I.dot(t.ey, n.ex)), I.neo(I.dot(t.ex, n.ey), I.dot(t.ey, n.ey))); }, e.abs = function (t) { return new e(I.abs(t.ex), I.abs(t.ey)); }, e.add = function (t, n) { return new e(I.add(t.ex, n.ex), I.add(t.ey, n.ey)); }, e; })(), Pn = Math.sqrt, Fn = s(0, 0), In = s(0, 0), Ln = s(0, 0), Rn = s(0, 0), zn = s(0, 0), Bn = s(0, 0), Vn = s(0, 0), Hn = s(0, 0), (function (e) { e[e.e_unset = -1] = "e_unset", e[e.e_circles = 0] = "e_circles", e[e.e_faceA = 1] = "e_faceA", e[e.e_faceB = 2] = "e_faceB"; })(H || (H = {})), (function (e) { e[e.e_unset = -1] = "e_unset", e[e.e_vertex = 0] = "e_vertex", e[e.e_face = 1] = "e_face"; })(U || (U = {})), (function (e) { e[e.nullState = 0] = "nullState", e[e.addState = 1] = "addState", e[e.persistState = 2] = "persistState", e[e.removeState = 3] = "removeState"; })(Un || (Un = {})), Wn = (function () { function e() { this.v = s(0, 0), this.id = new qn; } return e.prototype.set = function (e) { u(this.v, e.v), this.id.set(e.id); }, e.prototype.recycle = function () { d(this.v), this.id.recycle(); }, e; })(), Gn = (function () { function e() { this.localNormal = s(0, 0), this.localPoint = s(0, 0), this.points = [new Kn, new Kn], this.pointCount = 0; } return e.prototype.set = function (e) { this.type = e.type, u(this.localNormal, e.localNormal), u(this.localPoint, e.localPoint), this.pointCount = e.pointCount, this.points[0].set(e.points[0]), this.points[1].set(e.points[1]); }, e.prototype.recycle = function () { this.type = H.e_unset, d(this.localNormal), d(this.localPoint), this.pointCount = 0, this.points[0].recycle(), this.points[1].recycle(); }, e.prototype.getWorldManifold = function (e, t, n, r, i) { if (this.pointCount == 0)
            return e; e = e || new Jn, e.pointCount = this.pointCount; var a = e.normal, o = e.points, s = e.separations; switch (this.type) {
            case H.e_circles:
                l(a, 1, 0);
                var c = this.points[0];
                F(Fn, t, this.localPoint), F(In, r, c.localPoint), g(Bn, In, Fn);
                var u = k(Bn);
                u > Te * Te && v(a, 1 / Pn(u), Bn), x(Rn, 1, Fn, n, a), x(zn, 1, In, -i, a), x(o[0], .5, Rn, .5, zn), s[0] = O(g(Ln, zn, Rn), a);
                break;
            case H.e_faceA:
                M(a, t.q, this.localNormal), F(Vn, t, this.localPoint);
                for (var d = 0; d < this.pointCount; ++d) {
                    var c = this.points[d];
                    F(Hn, r, c.localPoint), x(Rn, 1, Hn, n - O(g(Ln, Hn, Vn), a), a), x(zn, 1, Hn, -i, a), x(o[d], .5, Rn, .5, zn), s[d] = O(g(Ln, zn, Rn), a);
                }
                break;
            case H.e_faceB:
                M(a, r.q, this.localNormal), F(Vn, r, this.localPoint);
                for (var d = 0; d < this.pointCount; ++d) {
                    var c = this.points[d];
                    F(Hn, t, c.localPoint), x(zn, 1, Hn, i - O(g(Ln, Hn, Vn), a), a), x(Rn, 1, Hn, -n, a), x(o[d], .5, Rn, .5, zn), s[d] = O(g(Ln, Rn, zn), a);
                }
                f(a);
        } return e; }, e.clipSegmentToLine = ce, e.ClipVertex = Wn, e.getPointStates = se, e.PointState = Un, e; })(), Kn = (function () { function e() { this.localPoint = s(0, 0), this.normalImpulse = 0, this.tangentImpulse = 0, this.id = new qn; } return e.prototype.set = function (e) { u(this.localPoint, e.localPoint), this.normalImpulse = e.normalImpulse, this.tangentImpulse = e.tangentImpulse, this.id.set(e.id); }, e.prototype.recycle = function () { d(this.localPoint), this.normalImpulse = 0, this.tangentImpulse = 0, this.id.recycle(); }, e; })(), qn = (function () { function e() { this.key = -1, this.indexA = -1, this.indexB = -1, this.typeA = U.e_unset, this.typeB = U.e_unset; } return e.prototype.setFeatures = function (e, t, n, r) { this.indexA = e, this.indexB = n, this.typeA = t, this.typeB = r, this.key = this.indexA + this.indexB * 256 + this.typeA * 65536 + this.typeB * 16777216; }, e.prototype.set = function (e) { this.indexA = e.indexA, this.indexB = e.indexB, this.typeA = e.typeA, this.typeB = e.typeB, this.key = this.indexA + this.indexB * 256 + this.typeA * 65536 + this.typeB * 16777216; }, e.prototype.swapFeatures = function () { var e = this.indexA, t = this.indexB, n = this.typeA, r = this.typeB; this.indexA = t, this.indexB = e, this.typeA = r, this.typeB = n, this.key = this.indexA + this.indexB * 256 + this.typeA * 65536 + this.typeB * 16777216; }, e.prototype.recycle = function () { this.indexA = 0, this.indexB = 0, this.typeA = U.e_unset, this.typeB = U.e_unset, this.key = -1; }, e; })(), Jn = (function () { function e() { this.normal = s(0, 0), this.points = [s(0, 0), s(0, 0)], this.separations = [0, 0], this.pointCount = 0; } return e.prototype.recycle = function () { d(this.normal), d(this.points[0]), d(this.points[1]), this.separations[0] = 0, this.separations[1] = 0, this.pointCount = 0; }, e; })(), Yn = Math.sqrt, Xn = Math.max, Zn = Math.min, Qn = new Ie({ create: function () { return new Or; }, release: function (e) { e.recycle(); } }), $n = new Gn, er = new Jn, tr = (function () { function e(e) { this.prev = null, this.next = null, this.other = null, this.contact = e; } return e.prototype.recycle = function () { this.prev = null, this.next = null, this.other = null; }, e; })(), nr = [], rr = (function () { function e() { this.rA = s(0, 0), this.rB = s(0, 0), this.normalImpulse = 0, this.tangentImpulse = 0, this.normalMass = 0, this.tangentMass = 0, this.velocityBias = 0; } return e.prototype.recycle = function () { d(this.rA), d(this.rB), this.normalImpulse = 0, this.tangentImpulse = 0, this.normalMass = 0, this.tangentMass = 0, this.velocityBias = 0; }, e; })(), ir = s(0, 0), ar = s(0, 0), or = s(0, 0), sr = s(0, 0), cr = s(0, 0), lr = N(0, 0, 0), ur = N(0, 0, 0), dr = s(0, 0), fr = s(0, 0), pr = s(0, 0), mr = s(0, 0), hr = s(0, 0), gr = s(0, 0), W = s(0, 0), G = s(0, 0), _r = s(0, 0), vr = s(0, 0), yr = s(0, 0), br = s(0, 0), xr = s(0, 0), Sr = s(0, 0), Cr = s(0, 0), wr = s(0, 0), Tr = s(0, 0), Er = s(0, 0), Dr = s(0, 0), Or = (function () { function e() { this.m_nodeA = new tr(this), this.m_nodeB = new tr(this), this.m_fixtureA = null, this.m_fixtureB = null, this.m_indexA = -1, this.m_indexB = -1, this.m_evaluateFcn = null, this.m_manifold = new Gn, this.m_prev = null, this.m_next = null, this.m_toi = 1, this.m_toiCount = 0, this.m_toiFlag = !1, this.m_friction = 0, this.m_restitution = 0, this.m_tangentSpeed = 0, this.m_enabledFlag = !0, this.m_islandFlag = !1, this.m_touchingFlag = !1, this.m_filterFlag = !1, this.m_bulletHitFlag = !1, this.m_impulse = new jn(this), this.v_points = [new rr, new rr], this.v_normal = s(0, 0), this.v_normalMass = new Nn, this.v_K = new Nn, this.v_pointCount = 0, this.v_tangentSpeed = 0, this.v_friction = 0, this.v_restitution = 0, this.v_invMassA = 0, this.v_invMassB = 0, this.v_invIA = 0, this.v_invIB = 0, this.p_localPoints = [s(0, 0), s(0, 0)], this.p_localNormal = s(0, 0), this.p_localPoint = s(0, 0), this.p_localCenterA = s(0, 0), this.p_localCenterB = s(0, 0), this.p_type = H.e_unset, this.p_radiusA = 0, this.p_radiusB = 0, this.p_pointCount = 0, this.p_invMassA = 0, this.p_invMassB = 0, this.p_invIA = 0, this.p_invIB = 0; } return e.prototype.initialize = function (e, t, n, r, i) { this.m_fixtureA = e, this.m_fixtureB = n, this.m_indexA = t, this.m_indexB = r, this.m_evaluateFcn = i, this.m_friction = le(this.m_fixtureA.m_friction, this.m_fixtureB.m_friction), this.m_restitution = ue(this.m_fixtureA.m_restitution, this.m_fixtureB.m_restitution); }, e.prototype.recycle = function () { this.m_nodeA.recycle(), this.m_nodeB.recycle(), this.m_fixtureA = null, this.m_fixtureB = null, this.m_indexA = -1, this.m_indexB = -1, this.m_evaluateFcn = null, this.m_manifold.recycle(), this.m_prev = null, this.m_next = null, this.m_toi = 1, this.m_toiCount = 0, this.m_toiFlag = !1, this.m_friction = 0, this.m_restitution = 0, this.m_tangentSpeed = 0, this.m_enabledFlag = !0, this.m_islandFlag = !1, this.m_touchingFlag = !1, this.m_filterFlag = !1, this.m_bulletHitFlag = !1, this.m_impulse.recycle(); for (var e = 0, t = this.v_points; e < t.length; e++)
            t[e].recycle(); d(this.v_normal), this.v_normalMass.setZero(), this.v_K.setZero(), this.v_pointCount = 0, this.v_tangentSpeed = 0, this.v_friction = 0, this.v_restitution = 0, this.v_invMassA = 0, this.v_invMassB = 0, this.v_invIA = 0, this.v_invIB = 0; for (var n = 0, r = this.p_localPoints; n < r.length; n++) {
            var i = r[n];
            d(i);
        } d(this.p_localNormal), d(this.p_localPoint), d(this.p_localCenterA), d(this.p_localCenterB), this.p_type = H.e_unset, this.p_radiusA = 0, this.p_radiusB = 0, this.p_pointCount = 0, this.p_invMassA = 0, this.p_invMassB = 0, this.p_invIA = 0, this.p_invIB = 0; }, e.prototype.initConstraint = function (e) { var t = this.m_fixtureA, n = this.m_fixtureB; if (t !== null && n !== null) {
            var r = t.m_body, i = n.m_body;
            if (r !== null && i !== null) {
                var a = t.m_shape, o = n.m_shape;
                if (a !== null && o !== null) {
                    var s = this.m_manifold, c = s.pointCount;
                    this.v_invMassA = r.m_invMass, this.v_invMassB = i.m_invMass, this.v_invIA = r.m_invI, this.v_invIB = i.m_invI, this.v_friction = this.m_friction, this.v_restitution = this.m_restitution, this.v_tangentSpeed = this.m_tangentSpeed, this.v_pointCount = c, this.v_K.setZero(), this.v_normalMass.setZero(), this.p_invMassA = r.m_invMass, this.p_invMassB = i.m_invMass, this.p_invIA = r.m_invI, this.p_invIB = i.m_invI, u(this.p_localCenterA, r.m_sweep.localCenter), u(this.p_localCenterB, i.m_sweep.localCenter), this.p_radiusA = a.m_radius, this.p_radiusB = o.m_radius, this.p_type = s.type, u(this.p_localNormal, s.localNormal), u(this.p_localPoint, s.localPoint), this.p_pointCount = c;
                    for (var l = 0; l < R.maxManifoldPoints; ++l)
                        this.v_points[l].recycle(), d(this.p_localPoints[l]);
                    for (var l = 0; l < c; ++l) {
                        var f = s.points[l], p = this.v_points[l];
                        e.warmStarting && (p.normalImpulse = e.dtRatio * f.normalImpulse, p.tangentImpulse = e.dtRatio * f.tangentImpulse), u(this.p_localPoints[l], f.localPoint);
                    }
                }
            }
        } }, e.prototype.getManifold = function () { return this.m_manifold; }, e.prototype.getWorldManifold = function (e) { var t = this.m_fixtureA, n = this.m_fixtureB; if (t !== null && n !== null) {
            var r = t.m_body, i = n.m_body;
            if (r !== null && i !== null) {
                var a = t.m_shape, o = n.m_shape;
                if (a !== null && o !== null)
                    return this.m_manifold.getWorldManifold(e, r.getTransform(), a.m_radius, i.getTransform(), o.m_radius);
            }
        } }, e.prototype.setEnabled = function (e) { this.m_enabledFlag = !!e; }, e.prototype.isEnabled = function () { return this.m_enabledFlag; }, e.prototype.isTouching = function () { return this.m_touchingFlag; }, e.prototype.getNext = function () { return this.m_next; }, e.prototype.getFixtureA = function () { return this.m_fixtureA; }, e.prototype.getFixtureB = function () { return this.m_fixtureB; }, e.prototype.getChildIndexA = function () { return this.m_indexA; }, e.prototype.getChildIndexB = function () { return this.m_indexB; }, e.prototype.flagForFiltering = function () { this.m_filterFlag = !0; }, e.prototype.setFriction = function (e) { this.m_friction = e; }, e.prototype.getFriction = function () { return this.m_friction; }, e.prototype.resetFriction = function () { var e = this.m_fixtureA, t = this.m_fixtureB; e !== null && t !== null && (this.m_friction = le(e.m_friction, t.m_friction)); }, e.prototype.setRestitution = function (e) { this.m_restitution = e; }, e.prototype.getRestitution = function () { return this.m_restitution; }, e.prototype.resetRestitution = function () { var e = this.m_fixtureA, t = this.m_fixtureB; e !== null && t !== null && (this.m_restitution = ue(e.m_restitution, t.m_restitution)); }, e.prototype.setTangentSpeed = function (e) { this.m_tangentSpeed = e; }, e.prototype.getTangentSpeed = function () { return this.m_tangentSpeed; }, e.prototype.evaluate = function (e, t, n) { var r = this.m_fixtureA, i = this.m_fixtureB; r !== null && i !== null && this.m_evaluateFcn(e, t, r, this.m_indexA, n, i, this.m_indexB); }, e.prototype.update = function (e) { var t = this.m_fixtureA, n = this.m_fixtureB; if (t !== null && n !== null) {
            var r = t.m_body, i = n.m_body;
            if (r !== null && i !== null) {
                var a = t.m_shape, o = n.m_shape;
                if (a !== null && o !== null) {
                    this.m_enabledFlag = !0;
                    var s = !1, c = this.m_touchingFlag, l = t.m_isSensor, u = n.m_isSensor, d = l || u, f = r.m_xf, p = i.m_xf;
                    if (d)
                        s = Yt(a, this.m_indexA, o, this.m_indexB, f, p), this.m_manifold.pointCount = 0;
                    else {
                        $n.recycle(), $n.set(this.m_manifold), this.m_manifold.recycle(), this.evaluate(this.m_manifold, f, p), s = this.m_manifold.pointCount > 0;
                        for (var m = 0; m < this.m_manifold.pointCount; ++m) {
                            var h = this.m_manifold.points[m];
                            h.normalImpulse = 0, h.tangentImpulse = 0;
                            for (var g = 0; g < $n.pointCount; ++g) {
                                var _ = $n.points[g];
                                if (_.id.key === h.id.key) {
                                    h.normalImpulse = _.normalImpulse, h.tangentImpulse = _.tangentImpulse;
                                    break;
                                }
                            }
                        }
                        s !== c && (r.setAwake(!0), i.setAwake(!0));
                    }
                    this.m_touchingFlag = s;
                    var v = typeof e == "object" && !!e;
                    !c && s && v && e.beginContact(this), c && !s && v && e.endContact(this), !d && s && v && $n && e.preSolve(this, $n);
                }
            }
        } }, e.prototype.solvePositionConstraint = function (e) { return this._solvePositionConstraint(e, null, null); }, e.prototype.solvePositionConstraintTOI = function (e, t, n) { return this._solvePositionConstraint(e, t, n); }, e.prototype._solvePositionConstraint = function (e, t, n) { var r = t !== null && n !== null, i = 0, o = this.m_fixtureA, s = this.m_fixtureB; if (o === null || s === null)
            return i; var c = o.m_body, l = s.m_body; if (c === null || l === null)
            return i; var d = c.c_position, p = l.c_position, m = this.p_localCenterA, h = this.p_localCenterB, _ = 0, S = 0; r && c !== t && c !== n || (_ = this.p_invMassA, S = this.p_invIA); var C = 0, T = 0; r && l !== t && l !== n || (C = this.p_invMassB, T = this.p_invIB), u(ir, d.c); var E = d.a; u(or, p.c); for (var k = p.a, A = 0; A < this.p_pointCount; ++A) {
            oe(lr, m, ir, E), oe(ur, h, or, k);
            var j = void 0;
            switch (this.p_type) {
                case H.e_circles:
                    F(dr, lr, this.p_localPoint), F(fr, ur, this.p_localPoints[0]), g(G, fr, dr), w(G), x(_r, .5, dr, .5, fr), j = O(fr, G) - O(dr, G) - this.p_radiusA - this.p_radiusB;
                    break;
                case H.e_faceA:
                    M(G, lr.q, this.p_localNormal), F(mr, lr, this.p_localPoint), F(pr, ur, this.p_localPoints[A]), j = O(pr, G) - O(mr, G) - this.p_radiusA - this.p_radiusB, u(_r, pr);
                    break;
                case H.e_faceB:
                    M(G, ur.q, this.p_localNormal), F(mr, ur, this.p_localPoint), F(pr, lr, this.p_localPoints[A]), j = O(pr, G) - O(mr, G) - this.p_radiusA - this.p_radiusB, u(_r, pr), f(G);
                    break;
                default: return i;
            }
            g(hr, _r, ir), g(gr, _r, or), i = Zn(i, j);
            var ee = r ? R.toiBaugarte : R.baumgarte, te = R.linearSlop, ne = R.maxLinearCorrection, N = a(ee * (j + te), -ne, 0), P = D(hr, G), re = D(gr, G), ie = _ + C + S * P * P + T * re * re;
            v(W, ie > 0 ? -N / ie : 0, G), b(ir, _, W), E -= S * D(hr, W), y(or, C, W), k += T * D(gr, W);
        } return u(d.c, ir), d.a = E, u(p.c, or), p.a = k, i; }, e.prototype.initVelocityConstraint = function (e) { var t = this.m_fixtureA, n = this.m_fixtureB; if (t !== null && n !== null) {
            var r = t.m_body, i = n.m_body;
            if (r !== null && i !== null) {
                var a = r.c_velocity, o = i.c_velocity, s = r.c_position, c = i.c_position, l = this.p_radiusA, d = this.p_radiusB, f = this.m_manifold, p = this.v_invMassA, m = this.v_invMassB, h = this.v_invIA, _ = this.v_invIB, v = this.p_localCenterA, y = this.p_localCenterB;
                u(ir, s.c);
                var b = s.a;
                u(ar, a.v);
                var x = a.w;
                u(or, c.c);
                var S = c.a;
                u(sr, o.v);
                var C = o.w;
                oe(lr, v, ir, b), oe(ur, y, or, S), er.recycle(), f.getWorldManifold(er, lr, l, ur, d), u(this.v_normal, er.normal);
                for (var w = 0; w < this.v_pointCount; ++w) {
                    var k = this.v_points[w], A = er.points[w];
                    g(k.rA, A, ir), g(k.rB, A, or);
                    var j = D(k.rA, this.v_normal), ee = D(k.rB, this.v_normal), M = p + m + h * j * j + _ * ee * ee;
                    k.normalMass = M > 0 ? 1 / M : 0, T(cr, this.v_normal, 1);
                    var te = D(k.rA, cr), ne = D(k.rB, cr), N = p + m + h * te * te + _ * ne * ne;
                    k.tangentMass = N > 0 ? 1 / N : 0, k.velocityBias = 0;
                    var P = 0;
                    P += O(this.v_normal, sr), P += O(this.v_normal, E(Dr, C, k.rB)), P -= O(this.v_normal, ar), P -= O(this.v_normal, E(Dr, x, k.rA)), P < -R.velocityThreshold && (k.velocityBias = -this.v_restitution * P);
                }
                if (this.v_pointCount == 2 && e.blockSolve) {
                    var F = this.v_points[0], re = this.v_points[1], ie = D(F.rA, this.v_normal), ae = D(F.rB, this.v_normal), se = D(re.rA, this.v_normal), ce = D(re.rB, this.v_normal), le = p + m + h * ie * ie + _ * ae * ae, ue = p + m + h * se * se + _ * ce * ce, de = p + m + h * ie * se + _ * ae * ce;
                    if (le * le < 1e3 * (le * ue - de * de)) {
                        this.v_K.ex.setNum(le, de), this.v_K.ey.setNum(de, ue);
                        var fe = this.v_K.ex.x, pe = this.v_K.ey.x, me = this.v_K.ex.y, he = this.v_K.ey.y, ge = fe * he - pe * me;
                        ge !== 0 && (ge = 1 / ge), this.v_normalMass.ex.x = ge * he, this.v_normalMass.ey.x = -ge * pe, this.v_normalMass.ex.y = -ge * me, this.v_normalMass.ey.y = ge * fe;
                    }
                    else
                        this.v_pointCount = 1;
                }
                u(s.c, ir), s.a = b, u(a.v, ar), a.w = x, u(c.c, or), c.a = S, u(o.v, sr), o.w = C;
            }
        } }, e.prototype.warmStartConstraint = function (e) { var t = this.m_fixtureA, n = this.m_fixtureB; if (t !== null && n !== null) {
            var r = t.m_body, i = n.m_body;
            if (r !== null && i !== null) {
                var a = r.c_velocity, o = i.c_velocity, s = this.v_invMassA, c = this.v_invIA, l = this.v_invMassB, d = this.v_invIB;
                u(ar, a.v);
                var f = a.w;
                u(sr, o.v);
                var p = o.w;
                u(G, this.v_normal), T(cr, G, 1);
                for (var m = 0; m < this.v_pointCount; ++m) {
                    var h = this.v_points[m];
                    x(W, h.normalImpulse, G, h.tangentImpulse, cr), f -= c * D(h.rA, W), b(ar, s, W), p += d * D(h.rB, W), y(sr, l, W);
                }
                u(a.v, ar), a.w = f, u(o.v, sr), o.w = p;
            }
        } }, e.prototype.storeConstraintImpulses = function (e) { for (var t = this.m_manifold, n = 0; n < this.v_pointCount; ++n)
            t.points[n].normalImpulse = this.v_points[n].normalImpulse, t.points[n].tangentImpulse = this.v_points[n].tangentImpulse; }, e.prototype.solveVelocityConstraint = function (e) { var t = this.m_fixtureA, n = this.m_fixtureB; if (t !== null && n !== null) {
            var r = t.m_body, i = n.m_body;
            if (r !== null && i !== null) {
                var o = r.c_velocity, s = i.c_velocity, c = this.v_invMassA, f = this.v_invIA, m = this.v_invMassB, _ = this.v_invIB;
                u(ar, o.v);
                var x = o.w;
                u(sr, s.v);
                var C = s.w;
                u(G, this.v_normal), T(cr, G, 1);
                for (var w = this.v_friction, k = 0; k < this.v_pointCount; ++k) {
                    var A = this.v_points[k];
                    d(vr), p(vr, sr), p(vr, E(Dr, C, A.rB)), h(vr, ar), h(vr, E(Dr, x, A.rA));
                    var j = O(vr, cr) - this.v_tangentSpeed, ee = A.tangentMass * -j, M = w * A.normalImpulse, te = a(A.tangentImpulse + ee, -M, M);
                    ee = te - A.tangentImpulse, A.tangentImpulse = te, v(W, ee, cr), b(ar, c, W), x -= f * D(A.rA, W), y(sr, m, W), C += _ * D(A.rB, W);
                }
                if (this.v_pointCount == 1 || e.blockSolve == 0)
                    for (var ne = 0; ne < this.v_pointCount; ++ne) {
                        var A = this.v_points[ne];
                        d(vr), p(vr, sr), p(vr, E(Dr, C, A.rB)), h(vr, ar), h(vr, E(Dr, x, A.rA));
                        var N = O(vr, G), ee = -A.normalMass * (N - A.velocityBias), te = Xn(A.normalImpulse + ee, 0);
                        ee = te - A.normalImpulse, A.normalImpulse = te, v(W, ee, G), b(ar, c, W), x -= f * D(A.rA, W), y(sr, m, W), C += _ * D(A.rB, W);
                    }
                else {
                    var P = this.v_points[0], F = this.v_points[1];
                    l(Sr, P.normalImpulse, F.normalImpulse), d(yr), p(yr, sr), p(yr, E(Dr, C, P.rB)), h(yr, ar), h(yr, E(Dr, x, P.rA)), d(br), p(br, sr), p(br, E(Dr, C, F.rB)), h(br, ar), h(br, E(Dr, x, F.rA));
                    var re = O(yr, G), ie = O(br, G);
                    for (l(xr, re - P.velocityBias, ie - F.velocityBias), xr.x -= this.v_K.ex.x * Sr.x + this.v_K.ey.x * Sr.y, xr.y -= this.v_K.ex.y * Sr.x + this.v_K.ey.y * Sr.y;;) {
                        if (d(Cr), Cr.x = -(this.v_normalMass.ex.x * xr.x + this.v_normalMass.ey.x * xr.y), Cr.y = -(this.v_normalMass.ex.y * xr.x + this.v_normalMass.ey.y * xr.y), Cr.x >= 0 && Cr.y >= 0 || (Cr.x = -P.normalMass * xr.x, Cr.y = 0, re = 0, ie = this.v_K.ex.y * Cr.x + xr.y, Cr.x >= 0 && ie >= 0) || (Cr.x = 0, Cr.y = -F.normalMass * xr.y, re = this.v_K.ey.x * Cr.y + xr.x, ie = 0, Cr.y >= 0 && re >= 0) || (Cr.x = 0, Cr.y = 0, re = xr.x, ie = xr.y, re >= 0 && ie >= 0)) {
                            g(wr, Cr, Sr), v(Tr, wr.x, G), v(Er, wr.y, G), S(ar, -c, Tr, -c, Er, 1, ar), x -= f * (D(P.rA, Tr) + D(F.rA, Er)), S(sr, m, Tr, m, Er, 1, sr), C += _ * (D(P.rB, Tr) + D(F.rB, Er)), P.normalImpulse = Cr.x, F.normalImpulse = Cr.y;
                            break;
                        }
                        break;
                    }
                }
                u(o.v, ar), o.w = x, u(s.v, sr), s.w = C;
            }
        } }, e.addType = function (e, t, n) { nr[e] = nr[e] || {}, nr[e][t] = n; }, e.create = function (e, t, n, r) { var i = e.m_shape.m_type, a = n.m_shape.m_type, o = Qn.allocate(), s; if (s = nr[i] && nr[i][a])
            o.initialize(e, t, n, r, s);
        else if (s = nr[a] && nr[a][i])
            o.initialize(n, r, e, t, s);
        else
            return null; e = o.m_fixtureA, n = o.m_fixtureB, t = o.getChildIndexA(), r = o.getChildIndexB(); var c = e.m_body, l = n.m_body; return o.m_nodeA.contact = o, o.m_nodeA.other = l, o.m_nodeA.prev = null, o.m_nodeA.next = c.m_contactList, c.m_contactList != null && (c.m_contactList.prev = o.m_nodeA), c.m_contactList = o.m_nodeA, o.m_nodeB.contact = o, o.m_nodeB.other = c, o.m_nodeB.prev = null, o.m_nodeB.next = l.m_contactList, l.m_contactList != null && (l.m_contactList.prev = o.m_nodeB), l.m_contactList = o.m_nodeB, e.isSensor() == 0 && n.isSensor() == 0 && (c.setAwake(!0), l.setAwake(!0)), o; }, e.destroy = function (e, t) { var n = e.m_fixtureA, r = e.m_fixtureB; if (n !== null && r !== null) {
            var i = n.m_body, a = r.m_body;
            i !== null && a !== null && (e.isTouching() && t.endContact(e), e.m_nodeA.prev && (e.m_nodeA.prev.next = e.m_nodeA.next), e.m_nodeA.next && (e.m_nodeA.next.prev = e.m_nodeA.prev), e.m_nodeA == i.m_contactList && (i.m_contactList = e.m_nodeA.next), e.m_nodeB.prev && (e.m_nodeB.prev.next = e.m_nodeB.next), e.m_nodeB.next && (e.m_nodeB.next.prev = e.m_nodeB.prev), e.m_nodeB == a.m_contactList && (a.m_contactList = e.m_nodeB.next), e.m_manifold.pointCount > 0 && !n.m_isSensor && !r.m_isSensor && (i.setAwake(!0), a.setAwake(!0)), Qn.release(e));
        } }, e; })(), kr = { gravity: I.zero(), allowSleep: !0, warmStarting: !0, continuousPhysics: !0, subStepping: !1, blockSolve: !0, velocityIterations: 8, positionIterations: 3 }, Ar = (function () { function e(t) { if (!(this instanceof e))
            return new e(t); this.s_step = new xn, t ? I.isValid(t) && (t = { gravity: t }) : t = {}, t = Ce(t, kr), this.m_solver = new Mn(this), this.m_broadPhase = new Ge, this.m_contactList = null, this.m_contactCount = 0, this.m_bodyList = null, this.m_bodyCount = 0, this.m_jointList = null, this.m_jointCount = 0, this.m_stepComplete = !0, this.m_allowSleep = t.allowSleep, this.m_gravity = I.clone(t.gravity), this.m_clearForces = !0, this.m_newFixture = !1, this.m_locked = !1, this.m_warmStarting = t.warmStarting, this.m_continuousPhysics = t.continuousPhysics, this.m_subStepping = t.subStepping, this.m_blockSolve = t.blockSolve, this.m_velocityIterations = t.velocityIterations, this.m_positionIterations = t.positionIterations, this.m_t = 0, this.m_step_callback = []; } return e.prototype._serialize = function () { for (var e = [], t = [], n = this.getBodyList(); n; n = n.getNext())
            e.push(n); for (var r = this.getJointList(); r; r = r.getNext())
            typeof r._serialize == "function" && t.push(r); return { gravity: this.m_gravity, bodies: e, joints: t }; }, e._deserialize = function (t, n, r) { if (!t)
            return new e; var i = new e(t.gravity); if (t.bodies)
            for (var a = t.bodies.length - 1; a >= 0; --a)
                i._addBody(r(B, t.bodies[a], i)); if (t.joints)
            for (var a = t.joints.length - 1; a >= 0; a--)
                i.createJoint(r(wt, t.joints[a], i)); return i; }, e.prototype.getBodyList = function () { return this.m_bodyList; }, e.prototype.getJointList = function () { return this.m_jointList; }, e.prototype.getContactList = function () { return this.m_contactList; }, e.prototype.getBodyCount = function () { return this.m_bodyCount; }, e.prototype.getJointCount = function () { return this.m_jointCount; }, e.prototype.getContactCount = function () { return this.m_contactCount; }, e.prototype.setGravity = function (e) { this.m_gravity.set(e); }, e.prototype.getGravity = function () { return this.m_gravity; }, e.prototype.isLocked = function () { return this.m_locked; }, e.prototype.setAllowSleeping = function (e) { if (e != this.m_allowSleep && (this.m_allowSleep = e, this.m_allowSleep == 0))
            for (var t = this.m_bodyList; t; t = t.m_next)
                t.setAwake(!0); }, e.prototype.getAllowSleeping = function () { return this.m_allowSleep; }, e.prototype.setWarmStarting = function (e) { this.m_warmStarting = e; }, e.prototype.getWarmStarting = function () { return this.m_warmStarting; }, e.prototype.setContinuousPhysics = function (e) { this.m_continuousPhysics = e; }, e.prototype.getContinuousPhysics = function () { return this.m_continuousPhysics; }, e.prototype.setSubStepping = function (e) { this.m_subStepping = e; }, e.prototype.getSubStepping = function () { return this.m_subStepping; }, e.prototype.setAutoClearForces = function (e) { this.m_clearForces = e; }, e.prototype.getAutoClearForces = function () { return this.m_clearForces; }, e.prototype.clearForces = function () { for (var e = this.m_bodyList; e; e = e.getNext())
            e.m_force.setZero(), e.m_torque = 0; }, e.prototype.queryAABB = function (e, t) { var n = this.m_broadPhase; this.m_broadPhase.query(e, function (e) { return t(n.getUserData(e).fixture); }); }, e.prototype.rayCast = function (e, t, n) { var r = this.m_broadPhase; this.m_broadPhase.rayCast({ maxFraction: 1, p1: e, p2: t }, function (e, t) { var i = r.getUserData(t), a = i.fixture, o = i.childIndex, s = {}; if (a.rayCast(s, e, o)) {
            var c = s.fraction;
            return n(a, I.add(I.mulNumVec2(1 - c, e.p1), I.mulNumVec2(c, e.p2)), s.normal, c);
        } return e.maxFraction; }); }, e.prototype.getProxyCount = function () { return this.m_broadPhase.getProxyCount(); }, e.prototype.getTreeHeight = function () { return this.m_broadPhase.getTreeHeight(); }, e.prototype.getTreeBalance = function () { return this.m_broadPhase.getTreeBalance(); }, e.prototype.getTreeQuality = function () { return this.m_broadPhase.getTreeQuality(); }, e.prototype.shiftOrigin = function (e) { if (!this.isLocked()) {
            for (var t = this.m_bodyList; t; t = t.m_next)
                t.m_xf.p.sub(e), t.m_sweep.c0.sub(e), t.m_sweep.c.sub(e);
            for (var n = this.m_jointList; n; n = n.m_next)
                n.shiftOrigin(e);
            this.m_broadPhase.shiftOrigin(e);
        } }, e.prototype._addBody = function (e) { this.isLocked() || (e.m_prev = null, e.m_next = this.m_bodyList, this.m_bodyList && (this.m_bodyList.m_prev = e), this.m_bodyList = e, ++this.m_bodyCount, this.publish("add-body", e)); }, e.prototype.createBody = function (e, t) { if (this.isLocked())
            return null; var n = {}; e && (I.isValid(e) ? n = { position: e, angle: t } : typeof e == "object" && (n = e)); var r = new B(this, n); return this._addBody(r), r; }, e.prototype.createDynamicBody = function (e, t) { var n = {}; return e && (I.isValid(e) ? n = { position: e, angle: t } : typeof e == "object" && (n = e)), n.type = "dynamic", this.createBody(n); }, e.prototype.createKinematicBody = function (e, t) { var n = {}; return e && (I.isValid(e) ? n = { position: e, angle: t } : typeof e == "object" && (n = e)), n.type = "kinematic", this.createBody(n); }, e.prototype.destroyBody = function (e) { if (!this.isLocked()) {
            if (e.m_destroyed)
                return !1;
            for (var t = e.m_jointList; t;) {
                var n = t;
                t = t.next, this.publish("remove-joint", n.joint), this.destroyJoint(n.joint), e.m_jointList = t;
            }
            e.m_jointList = null;
            for (var r = e.m_contactList; r;) {
                var i = r;
                r = r.next, this.destroyContact(i.contact), e.m_contactList = r;
            }
            e.m_contactList = null;
            for (var a = e.m_fixtureList; a;) {
                var o = a;
                a = a.m_next, this.publish("remove-fixture", o), o.destroyProxies(this.m_broadPhase), e.m_fixtureList = a;
            }
            return e.m_fixtureList = null, e.m_prev && (e.m_prev.m_next = e.m_next), e.m_next && (e.m_next.m_prev = e.m_prev), e == this.m_bodyList && (this.m_bodyList = e.m_next), e.m_destroyed = !0, --this.m_bodyCount, this.publish("remove-body", e), !0;
        } }, e.prototype.createJoint = function (e) { if (this.isLocked())
            return null; if (e.m_prev = null, e.m_next = this.m_jointList, this.m_jointList && (this.m_jointList.m_prev = e), this.m_jointList = e, ++this.m_jointCount, e.m_edgeA.joint = e, e.m_edgeA.other = e.m_bodyB, e.m_edgeA.prev = null, e.m_edgeA.next = e.m_bodyA.m_jointList, e.m_bodyA.m_jointList && (e.m_bodyA.m_jointList.prev = e.m_edgeA), e.m_bodyA.m_jointList = e.m_edgeA, e.m_edgeB.joint = e, e.m_edgeB.other = e.m_bodyA, e.m_edgeB.prev = null, e.m_edgeB.next = e.m_bodyB.m_jointList, e.m_bodyB.m_jointList && (e.m_bodyB.m_jointList.prev = e.m_edgeB), e.m_bodyB.m_jointList = e.m_edgeB, e.m_collideConnected == 0)
            for (var t = e.m_bodyB.getContactList(); t; t = t.next)
                t.other == e.m_bodyA && t.contact.flagForFiltering(); return this.publish("add-joint", e), e; }, e.prototype.destroyJoint = function (e) { if (!this.isLocked()) {
            e.m_prev && (e.m_prev.m_next = e.m_next), e.m_next && (e.m_next.m_prev = e.m_prev), e == this.m_jointList && (this.m_jointList = e.m_next);
            var t = e.m_bodyA, n = e.m_bodyB;
            if (t.setAwake(!0), n.setAwake(!0), e.m_edgeA.prev && (e.m_edgeA.prev.next = e.m_edgeA.next), e.m_edgeA.next && (e.m_edgeA.next.prev = e.m_edgeA.prev), e.m_edgeA == t.m_jointList && (t.m_jointList = e.m_edgeA.next), e.m_edgeA.prev = null, e.m_edgeA.next = null, e.m_edgeB.prev && (e.m_edgeB.prev.next = e.m_edgeB.next), e.m_edgeB.next && (e.m_edgeB.next.prev = e.m_edgeB.prev), e.m_edgeB == n.m_jointList && (n.m_jointList = e.m_edgeB.next), e.m_edgeB.prev = null, e.m_edgeB.next = null, --this.m_jointCount, e.m_collideConnected == 0)
                for (var r = n.getContactList(); r;)
                    r.other == t && r.contact.flagForFiltering(), r = r.next;
            this.publish("remove-joint", e);
        } }, e.prototype.step = function (e, t, n) { if (this.publish("pre-step", e), (t | 0) !== t && (t = 0), t = t || this.m_velocityIterations, n = n || this.m_positionIterations, this.m_newFixture && (this.findNewContacts(), this.m_newFixture = !1), this.m_locked = !0, this.s_step.reset(e), this.s_step.velocityIterations = t, this.s_step.positionIterations = n, this.s_step.warmStarting = this.m_warmStarting, this.s_step.blockSolve = this.m_blockSolve, this.updateContacts(), this.m_stepComplete && e > 0) {
            this.m_solver.solveWorld(this.s_step);
            for (var r = this.m_bodyList; r; r = r.getNext())
                r.m_islandFlag != 0 && (r.isStatic() || r.synchronizeFixtures());
            this.findNewContacts();
        } this.m_continuousPhysics && e > 0 && this.m_solver.solveWorldTOI(this.s_step), this.m_clearForces && this.clearForces(), this.m_locked = !1; for (var i; i = this.m_step_callback.shift();)
            i(this); this.publish("post-step", e); }, e.prototype.queueUpdate = function (e) { this.isLocked() ? this.m_step_callback.push(e) : e(this); }, e.prototype.findNewContacts = function () { var e = this; this.m_broadPhase.updatePairs(function (t, n) { return e.createContact(t, n); }); }, e.prototype.createContact = function (e, t) { var n = e.fixture, r = t.fixture, i = e.childIndex, a = t.childIndex, o = n.getBody(), s = r.getBody(); if (o != s) {
            for (var c = s.getContactList(); c;) {
                if (c.other == o) {
                    var l = c.contact.getFixtureA(), u = c.contact.getFixtureB(), d = c.contact.getChildIndexA(), f = c.contact.getChildIndexB();
                    if (l == n && u == r && d == i && f == a || l == r && u == n && d == a && f == i)
                        return;
                }
                c = c.next;
            }
            if (s.shouldCollide(o) != 0 && r.shouldCollide(n) != 0) {
                var p = Or.create(n, i, r, a);
                p != null && (p.m_prev = null, this.m_contactList != null && (p.m_next = this.m_contactList, this.m_contactList.m_prev = p), this.m_contactList = p, ++this.m_contactCount);
            }
        } }, e.prototype.updateContacts = function () { for (var e, t = this.m_contactList; e = t;) {
            t = e.getNext();
            var n = e.getFixtureA(), r = e.getFixtureB(), i = e.getChildIndexA(), a = e.getChildIndexB(), o = n.getBody(), s = r.getBody();
            if (e.m_filterFlag) {
                if (s.shouldCollide(o) == 0 || r.shouldCollide(n) == 0) {
                    this.destroyContact(e);
                    continue;
                }
                e.m_filterFlag = !1;
            }
            var c = o.isAwake() && !o.isStatic(), l = s.isAwake() && !s.isStatic();
            if (c != 0 || l != 0) {
                var u = n.m_proxies[i].proxyId, d = r.m_proxies[a].proxyId;
                this.m_broadPhase.testOverlap(u, d) == 0 ? this.destroyContact(e) : e.update(this);
            }
        } }, e.prototype.destroyContact = function (e) { e.m_prev && (e.m_prev.m_next = e.m_next), e.m_next && (e.m_next.m_prev = e.m_prev), e == this.m_contactList && (this.m_contactList = e.m_next), Or.destroy(e, this), --this.m_contactCount; }, e.prototype.on = function (e, t) { return typeof e != "string" || typeof t != "function" || (this._listeners || (this._listeners = {}), this._listeners[e] || (this._listeners[e] = []), this._listeners[e].push(t)), this; }, e.prototype.off = function (e, t) { if (typeof e != "string" || typeof t != "function")
            return this; var n = this._listeners && this._listeners[e]; if (!n || !n.length)
            return this; var r = n.indexOf(t); return r >= 0 && n.splice(r, 1), this; }, e.prototype.publish = function (e, t, n, r) { var i = this._listeners && this._listeners[e]; if (!i || !i.length)
            return 0; for (var a = 0; a < i.length; a++)
            i[a].call(this, t, n, r); return i.length; }, e.prototype.beginContact = function (e) { this.publish("begin-contact", e); }, e.prototype.endContact = function (e) { this.publish("end-contact", e); }, e.prototype.preSolve = function (e, t) { this.publish("pre-solve", e, t); }, e.prototype.postSolve = function (e, t) { this.publish("post-solve", e, t); }, e; })(), K = (function () { function e(t, n, r) { if (!(this instanceof e))
            return new e(t, n, r); t === void 0 ? (this.x = 0, this.y = 0, this.z = 0) : typeof t == "object" ? (this.x = t.x, this.y = t.y, this.z = t.z) : (this.x = t, this.y = n, this.z = r); } return e.prototype._serialize = function () { return { x: this.x, y: this.y, z: this.z }; }, e._deserialize = function (t) { var n = Object.create(e.prototype); return n.x = t.x, n.y = t.y, n.z = t.z, n; }, e.neo = function (t, n, r) { var i = Object.create(e.prototype); return i.x = t, i.y = n, i.z = r, i; }, e.zero = function () { var t = Object.create(e.prototype); return t.x = 0, t.y = 0, t.z = 0, t; }, e.clone = function (t) { return e.neo(t.x, t.y, t.z); }, e.prototype.toString = function () { return JSON.stringify(this); }, e.isValid = function (e) { return e != null && Number.isFinite(e.x) && Number.isFinite(e.y) && Number.isFinite(e.z); }, e.assert = function (e) { }, e.prototype.setZero = function () { return this.x = 0, this.y = 0, this.z = 0, this; }, e.prototype.set = function (e, t, n) { return this.x = e, this.y = t, this.z = n, this; }, e.prototype.add = function (e) { return this.x += e.x, this.y += e.y, this.z += e.z, this; }, e.prototype.sub = function (e) { return this.x -= e.x, this.y -= e.y, this.z -= e.z, this; }, e.prototype.mul = function (e) { return this.x *= e, this.y *= e, this.z *= e, this; }, e.areEqual = function (e, t) { return e === t || typeof e == "object" && !!e && typeof t == "object" && !!t && e.x === t.x && e.y === t.y && e.z === t.z; }, e.dot = function (e, t) { return e.x * t.x + e.y * t.y + e.z * t.z; }, e.cross = function (t, n) { return new e(t.y * n.z - t.z * n.y, t.z * n.x - t.x * n.z, t.x * n.y - t.y * n.x); }, e.add = function (t, n) { return new e(t.x + n.x, t.y + n.y, t.z + n.z); }, e.sub = function (t, n) { return new e(t.x - n.x, t.y - n.y, t.z - n.z); }, e.mul = function (t, n) { return new e(n * t.x, n * t.y, n * t.z); }, e.prototype.neg = function () { return this.x = -this.x, this.y = -this.y, this.z = -this.z, this; }, e.neg = function (t) { return new e(-t.x, -t.y, -t.z); }, e; })(), jr = s(0, 0), Mr = s(0, 0), Nr = (function (e) { t(n, e); function n(t, r) { var i = this; return i instanceof n ? (i = e.call(this) || this, i.m_type = n.TYPE, i.m_radius = R.polygonRadius, i.m_vertex1 = t ? I.clone(t) : I.zero(), i.m_vertex2 = r ? I.clone(r) : I.zero(), i.m_vertex0 = I.zero(), i.m_vertex3 = I.zero(), i.m_hasVertex0 = !1, i.m_hasVertex3 = !1, i) : new n(t, r); } return n.prototype._serialize = function () { return { type: this.m_type, vertex1: this.m_vertex1, vertex2: this.m_vertex2, vertex0: this.m_vertex0, vertex3: this.m_vertex3 }; }, n._deserialize = function (e) { var t = new n(e.vertex1, e.vertex2); return t.m_hasVertex0 && t.setPrevVertex(e.vertex0), t.m_hasVertex3 && t.setNextVertex(e.vertex3), t; }, n.prototype._reset = function () { }, n.prototype.getRadius = function () { return this.m_radius; }, n.prototype.getType = function () { return this.m_type; }, n.prototype.setNext = function (e) { return this.setNextVertex(e); }, n.prototype.setNextVertex = function (e) { return e ? (this.m_vertex3.setVec2(e), this.m_hasVertex3 = !0) : (this.m_vertex3.setZero(), this.m_hasVertex3 = !1), this; }, n.prototype.getNextVertex = function () { return this.m_vertex3; }, n.prototype.setPrev = function (e) { return this.setPrevVertex(e); }, n.prototype.setPrevVertex = function (e) { return e ? (this.m_vertex0.setVec2(e), this.m_hasVertex0 = !0) : (this.m_vertex0.setZero(), this.m_hasVertex0 = !1), this; }, n.prototype.getPrevVertex = function () { return this.m_vertex0; }, n.prototype._set = function (e, t) { return this.m_vertex1.setVec2(e), this.m_vertex2.setVec2(t), this.m_hasVertex0 = !1, this.m_hasVertex3 = !1, this; }, n.prototype._clone = function () { var e = new n; return e.m_type = this.m_type, e.m_radius = this.m_radius, e.m_vertex1.setVec2(this.m_vertex1), e.m_vertex2.setVec2(this.m_vertex2), e.m_vertex0.setVec2(this.m_vertex0), e.m_vertex3.setVec2(this.m_vertex3), e.m_hasVertex0 = this.m_hasVertex0, e.m_hasVertex3 = this.m_hasVertex3, e; }, n.prototype.getChildCount = function () { return 1; }, n.prototype.testPoint = function (e, t) { return !1; }, n.prototype.rayCast = function (e, t, n, r) { var i = z.mulTVec2(n.q, I.sub(t.p1, n.p)), a = z.mulTVec2(n.q, I.sub(t.p2, n.p)), o = I.sub(a, i), s = this.m_vertex1, c = this.m_vertex2, l = I.sub(c, s), u = I.neo(l.y, -l.x); u.normalize(); var d = I.dot(u, I.sub(s, i)), f = I.dot(u, o); if (f == 0)
            return !1; var p = d / f; if (p < 0 || t.maxFraction < p)
            return !1; var m = I.add(i, I.mulNumVec2(p, o)), h = I.sub(c, s), g = I.dot(h, h); if (g == 0)
            return !1; var _ = I.dot(I.sub(m, s), h) / g; return _ < 0 || 1 < _ ? !1 : (e.fraction = p, e.normal = d > 0 ? z.mulVec2(n.q, u).neg() : z.mulVec2(n.q, u), !0); }, n.prototype.computeAABB = function (e, t, n) { F(jr, t, this.m_vertex1), F(Mr, t, this.m_vertex2), Pe.combinePoints(e, jr, Mr), Pe.extend(e, this.m_radius); }, n.prototype.computeMass = function (e, t) { e.mass = 0, x(e.center, .5, this.m_vertex1, .5, this.m_vertex2), e.I = 0; }, n.prototype.computeDistanceProxy = function (e) { e.m_vertices[0] = this.m_vertex1, e.m_vertices[1] = this.m_vertex2, e.m_vertices.length = 2, e.m_count = 2, e.m_radius = this.m_radius; }, n.TYPE = "edge", n; })(st), Pr = s(0, 0), Fr = s(0, 0), Ir = (function (e) { t(n, e); function n(t, r) { var i = this; return i instanceof n ? (i = e.call(this) || this, i.m_type = n.TYPE, i.m_radius = R.polygonRadius, i.m_vertices = [], i.m_count = 0, i.m_prevVertex = null, i.m_nextVertex = null, i.m_hasPrevVertex = !1, i.m_hasNextVertex = !1, i.m_isLoop = !!r, t && t.length && (r ? i._createLoop(t) : i._createChain(t)), i) : new n(t, r); } return n.prototype._serialize = function () { var e = { type: this.m_type, vertices: this.m_isLoop ? this.m_vertices.slice(0, this.m_vertices.length - 1) : this.m_vertices, isLoop: this.m_isLoop, hasPrevVertex: this.m_hasPrevVertex, hasNextVertex: this.m_hasNextVertex, prevVertex: null, nextVertex: null }; return this.m_prevVertex && (e.prevVertex = this.m_prevVertex), this.m_nextVertex && (e.nextVertex = this.m_nextVertex), e; }, n._deserialize = function (e, t, r) { var i = []; if (e.vertices)
            for (var a = 0; a < e.vertices.length; a++)
                i.push(e.vertices[a]); var o = new n(i, e.isLoop); return e.prevVertex && o.setPrevVertex(e.prevVertex), e.nextVertex && o.setNextVertex(e.nextVertex), o; }, n.prototype.getType = function () { return this.m_type; }, n.prototype.getRadius = function () { return this.m_radius; }, n.prototype._createLoop = function (e) { if (!(e.length < 3)) {
            var t;
            this.m_vertices = [], this.m_count = e.length + 1;
            for (var t = 0; t < e.length; ++t)
                this.m_vertices[t] = I.clone(e[t]);
            return this.m_vertices[e.length] = I.clone(e[0]), this.m_prevVertex = this.m_vertices[this.m_count - 2], this.m_nextVertex = this.m_vertices[1], this.m_hasPrevVertex = !0, this.m_hasNextVertex = !0, this;
        } }, n.prototype._createChain = function (e) { var t; this.m_vertices = [], this.m_count = e.length; for (var t = 0; t < e.length; ++t)
            this.m_vertices[t] = I.clone(e[t]); return this.m_prevVertex = null, this.m_nextVertex = null, this.m_hasPrevVertex = !1, this.m_hasNextVertex = !1, this; }, n.prototype._reset = function () { this.m_isLoop ? this._createLoop(this.m_vertices.slice(0, this.m_vertices.length - 1)) : this._createChain(this.m_vertices); }, n.prototype.setPrevVertex = function (e) { this.m_prevVertex = e, this.m_hasPrevVertex = !0; }, n.prototype.getPrevVertex = function () { return this.m_prevVertex; }, n.prototype.setNextVertex = function (e) { this.m_nextVertex = e, this.m_hasNextVertex = !0; }, n.prototype.getNextVertex = function () { return this.m_nextVertex; }, n.prototype._clone = function () { var e = new n; return e._createChain(this.m_vertices), e.m_type = this.m_type, e.m_radius = this.m_radius, e.m_prevVertex = this.m_prevVertex, e.m_nextVertex = this.m_nextVertex, e.m_hasPrevVertex = this.m_hasPrevVertex, e.m_hasNextVertex = this.m_hasNextVertex, e; }, n.prototype.getChildCount = function () { return this.m_count - 1; }, n.prototype.getChildEdge = function (e, t) { e.m_type = Nr.TYPE, e.m_radius = this.m_radius, e.m_vertex1 = this.m_vertices[t], e.m_vertex2 = this.m_vertices[t + 1], t > 0 ? (e.m_vertex0 = this.m_vertices[t - 1], e.m_hasVertex0 = !0) : (e.m_vertex0 = this.m_prevVertex, e.m_hasVertex0 = this.m_hasPrevVertex), t < this.m_count - 2 ? (e.m_vertex3 = this.m_vertices[t + 2], e.m_hasVertex3 = !0) : (e.m_vertex3 = this.m_nextVertex, e.m_hasVertex3 = this.m_hasNextVertex); }, n.prototype.getVertex = function (e) { return e < this.m_count ? this.m_vertices[e] : this.m_vertices[0]; }, n.prototype.isLoop = function () { return this.m_isLoop; }, n.prototype.testPoint = function (e, t) { return !1; }, n.prototype.rayCast = function (e, t, n, r) { return new Nr(this.getVertex(r), this.getVertex(r + 1)).rayCast(e, t, n, 0); }, n.prototype.computeAABB = function (e, t, n) { F(Pr, t, this.getVertex(n)), F(Fr, t, this.getVertex(n + 1)), Pe.combinePoints(e, Pr, Fr); }, n.prototype.computeMass = function (e, t) { e.mass = 0, d(e.center), e.I = 0; }, n.prototype.computeDistanceProxy = function (e, t) { e.m_vertices[0] = this.getVertex(t), e.m_vertices[1] = this.getVertex(t + 1), e.m_count = 2, e.m_radius = this.m_radius; }, n.TYPE = "chain", n; })(st), Lr = Math.max, Rr = Math.min, zr = s(0, 0), Br = s(0, 0), Vr = s(0, 0), Hr = s(0, 0), Ur = s(0, 0), Wr = s(0, 0), Gr = (function (e) { t(n, e); function n(t) { var r = this; return r instanceof n ? (r = e.call(this) || this, r.m_type = n.TYPE, r.m_radius = R.polygonRadius, r.m_centroid = I.zero(), r.m_vertices = [], r.m_normals = [], r.m_count = 0, t && t.length && r._set(t), r) : new n(t); } return n.prototype._serialize = function () { return { type: this.m_type, vertices: this.m_vertices }; }, n._deserialize = function (e, t, r) { var i = []; if (e.vertices)
            for (var a = 0; a < e.vertices.length; a++)
                i.push(e.vertices[a]); return new n(i); }, n.prototype.getType = function () { return this.m_type; }, n.prototype.getRadius = function () { return this.m_radius; }, n.prototype._clone = function () { var e = new n; e.m_type = this.m_type, e.m_radius = this.m_radius, e.m_count = this.m_count, e.m_centroid.setVec2(this.m_centroid); for (var t = 0; t < this.m_count; t++)
            e.m_vertices.push(this.m_vertices[t].clone()); for (var t = 0; t < this.m_normals.length; t++)
            e.m_normals.push(this.m_normals[t].clone()); return e; }, n.prototype.getChildCount = function () { return 1; }, n.prototype._reset = function () { this._set(this.m_vertices); }, n.prototype._set = function (e) { if (e.length < 3)
            this._setAsBox(1, 1);
        else {
            for (var t = Rr(e.length, R.maxPolygonVertices), n = [], r = 0; r < t; ++r) {
                for (var i = e[r], a = !0, o = 0; o < n.length; ++o)
                    if (I.distanceSquared(i, n[o]) < .25 * R.linearSlopSquared) {
                        a = !1;
                        break;
                    }
                a && n.push(I.clone(i));
            }
            if (t = n.length, t < 3)
                this._setAsBox(1, 1);
            else {
                for (var s = 0, c = n[0].x, r = 1; r < t; ++r) {
                    var l = n[r].x;
                    (l > c || l === c && n[r].y < n[s].y) && (s = r, c = l);
                }
                for (var u = [], d = 0, f = s;;) {
                    u[d] = f;
                    for (var p = 0, o = 1; o < t; ++o)
                        if (p === f)
                            p = o;
                        else {
                            var m = I.sub(n[p], n[u[d]]), i = I.sub(n[o], n[u[d]]), h = I.crossVec2Vec2(m, i);
                            h < 0 && (p = o), h === 0 && i.lengthSquared() > m.lengthSquared() && (p = o);
                        }
                    if (++d, f = p, p === s)
                        break;
                }
                if (d < 3)
                    this._setAsBox(1, 1);
                else {
                    this.m_count = d, this.m_vertices = [];
                    for (var r = 0; r < d; ++r)
                        this.m_vertices[r] = n[u[r]];
                    for (var r = 0; r < d; ++r) {
                        var g = r, _ = r + 1 < d ? r + 1 : 0, v = I.sub(this.m_vertices[_], this.m_vertices[g]);
                        this.m_normals[r] = I.crossVec2Num(v, 1), this.m_normals[r].normalize();
                    }
                    this.m_centroid = de(this.m_vertices, d);
                }
            }
        } }, n.prototype._setAsBox = function (e, t, n, r) { if (this.m_vertices[0] = I.neo(e, -t), this.m_vertices[1] = I.neo(e, t), this.m_vertices[2] = I.neo(-e, t), this.m_vertices[3] = I.neo(-e, -t), this.m_normals[0] = I.neo(1, 0), this.m_normals[1] = I.neo(0, 1), this.m_normals[2] = I.neo(-1, 0), this.m_normals[3] = I.neo(0, -1), this.m_count = 4, n && I.isValid(n)) {
            r = r || 0, u(this.m_centroid, n);
            var i = nt.identity();
            i.p.setVec2(n), i.q.setAngle(r);
            for (var a = 0; a < this.m_count; ++a)
                this.m_vertices[a] = nt.mulVec2(i, this.m_vertices[a]), this.m_normals[a] = z.mulVec2(i.q, this.m_normals[a]);
        } }, n.prototype.testPoint = function (e, t) { for (var n = re(zr, e, t), r = 0; r < this.m_count; ++r)
            if (O(this.m_normals[r], n) - O(this.m_normals[r], this.m_vertices[r]) > 0)
                return !1; return !0; }, n.prototype.rayCast = function (e, t, n, r) { for (var i = z.mulTVec2(n.q, I.sub(t.p1, n.p)), a = z.mulTVec2(n.q, I.sub(t.p2, n.p)), o = I.sub(a, i), s = 0, c = t.maxFraction, l = -1, u = 0; u < this.m_count; ++u) {
            var d = I.dot(this.m_normals[u], I.sub(this.m_vertices[u], i)), f = I.dot(this.m_normals[u], o);
            if (f == 0) {
                if (d < 0)
                    return !1;
            }
            else
                f < 0 && d < s * f ? (s = d / f, l = u) : f > 0 && d < c * f && (c = d / f);
            if (c < s)
                return !1;
        } return l >= 0 && (e.fraction = s, e.normal = z.mulVec2(n.q, this.m_normals[l]), !0); }, n.prototype.computeAABB = function (e, t, n) { for (var r = 1 / 0, i = 1 / 0, a = -1 / 0, o = -1 / 0, s = 0; s < this.m_count; ++s) {
            var c = F(zr, t, this.m_vertices[s]);
            r = Rr(r, c.x), a = Lr(a, c.x), i = Rr(i, c.y), o = Lr(o, c.y);
        } l(e.lowerBound, r - this.m_radius, i - this.m_radius), l(e.upperBound, a + this.m_radius, o + this.m_radius); }, n.prototype.computeMass = function (e, t) { d(Ur); var n = 0, r = 0; d(Wr); for (var i = 0; i < this.m_count; ++i)
            p(Wr, this.m_vertices[i]); v(Wr, 1 / this.m_count, Wr); for (var a = 1 / 3, i = 0; i < this.m_count; ++i) {
            g(Vr, this.m_vertices[i], Wr), i + 1 < this.m_count ? g(Hr, this.m_vertices[i + 1], Wr) : g(Hr, this.m_vertices[0], Wr);
            var o = D(Vr, Hr), s = .5 * o;
            n += s, x(zr, s * a, Vr, s * a, Hr), p(Ur, zr);
            var c = Vr.x, l = Vr.y, u = Hr.x, f = Hr.y, h = c * c + u * c + u * u, _ = l * l + f * l + f * f;
            r += .25 * a * o * (h + _);
        } e.mass = t * n, v(Ur, 1 / n, Ur), m(e.center, Ur, Wr), e.I = t * r, e.I += e.mass * (O(e.center, e.center) - O(Ur, Ur)); }, n.prototype.validate = function () { for (var e = 0; e < this.m_count; ++e) {
            var t = e, n = e < this.m_count - 1 ? t + 1 : 0, r = this.m_vertices[t];
            g(Br, this.m_vertices[n], r);
            for (var i = 0; i < this.m_count; ++i)
                if (i != t && i != n && D(Br, g(zr, this.m_vertices[i], r)) < 0)
                    return !1;
        } return !0; }, n.prototype.computeDistanceProxy = function (e) { for (var t = 0; t < this.m_count; ++t)
            e.m_vertices[t] = this.m_vertices[t]; e.m_vertices.length = this.m_count, e.m_count = this.m_count, e.m_radius = this.m_radius; }, n.TYPE = "polygon", n; })(st), Kr = Math.sqrt, qr = Math.PI, Jr = s(0, 0), Yr = (function (e) { t(n, e); function n(t, r) { var i = this; return i instanceof n ? (i = e.call(this) || this, i.m_type = n.TYPE, i.m_p = I.zero(), i.m_radius = 1, typeof t == "object" && I.isValid(t) ? (i.m_p.setVec2(t), typeof r == "number" && (i.m_radius = r)) : typeof t == "number" && (i.m_radius = t), i) : new n(t, r); } return n.prototype._serialize = function () { return { type: this.m_type, p: this.m_p, radius: this.m_radius }; }, n._deserialize = function (e) { return new n(e.p, e.radius); }, n.prototype._reset = function () { }, n.prototype.getType = function () { return this.m_type; }, n.prototype.getRadius = function () { return this.m_radius; }, n.prototype.getCenter = function () { return this.m_p; }, n.prototype._clone = function () { var e = new n; return e.m_type = this.m_type, e.m_radius = this.m_radius, e.m_p = this.m_p.clone(), e; }, n.prototype.getChildCount = function () { return 1; }, n.prototype.testPoint = function (e, t) { return j(t, F(Jr, e, this.m_p)) <= this.m_radius * this.m_radius; }, n.prototype.rayCast = function (e, t, n, r) { var i = I.add(n.p, z.mulVec2(n.q, this.m_p)), a = I.sub(t.p1, i), o = I.dot(a, a) - this.m_radius * this.m_radius, s = I.sub(t.p2, t.p1), c = I.dot(a, s), l = I.dot(s, s), u = c * c - l * o; if (u < 0 || l < Te)
            return !1; var d = -(c + Kr(u)); return 0 <= d && d <= t.maxFraction * l && (d /= l, e.fraction = d, e.normal = I.add(a, I.mulNumVec2(d, s)), e.normal.normalize(), !0); }, n.prototype.computeAABB = function (e, t, n) { var r = F(Jr, t, this.m_p); l(e.lowerBound, r.x - this.m_radius, r.y - this.m_radius), l(e.upperBound, r.x + this.m_radius, r.y + this.m_radius); }, n.prototype.computeMass = function (e, t) { e.mass = t * qr * this.m_radius * this.m_radius, u(e.center, this.m_p), e.I = e.mass * (.5 * this.m_radius * this.m_radius + k(this.m_p)); }, n.prototype.computeDistanceProxy = function (e) { e.m_vertices[0] = this.m_p, e.m_vertices.length = 1, e.m_count = 1, e.m_radius = this.m_radius; }, n.TYPE = "circle", n; })(st), Xr = Math.abs, Zr = Math.PI, Qr = { frequencyHz: 0, dampingRatio: 0 }, $r = (function (e) { t(n, e); function n(t, r, i, a, o) { var s = this; if (!(s instanceof n))
            return new n(t, r, i, a, o); if (i && a && "m_type" in a && "x" in i && "y" in i) {
            var c = i;
            i = a, a = c;
        } return t = Ce(t, Qr), s = e.call(this, t, r, i) || this, r = s.m_bodyA, i = s.m_bodyB, s.m_type = n.TYPE, s.m_localAnchorA = I.clone(a ? r.getLocalPoint(a) : t.localAnchorA || I.zero()), s.m_localAnchorB = I.clone(o ? i.getLocalPoint(o) : t.localAnchorB || I.zero()), s.m_length = Number.isFinite(t.length) ? t.length : I.distance(r.getWorldPoint(s.m_localAnchorA), i.getWorldPoint(s.m_localAnchorB)), s.m_frequencyHz = t.frequencyHz, s.m_dampingRatio = t.dampingRatio, s.m_impulse = 0, s.m_gamma = 0, s.m_bias = 0, s; } return n.prototype._serialize = function () { return { type: this.m_type, bodyA: this.m_bodyA, bodyB: this.m_bodyB, collideConnected: this.m_collideConnected, frequencyHz: this.m_frequencyHz, dampingRatio: this.m_dampingRatio, localAnchorA: this.m_localAnchorA, localAnchorB: this.m_localAnchorB, length: this.m_length }; }, n._deserialize = function (e, t, r) { return e = Se({}, e), e.bodyA = r(B, e.bodyA, t), e.bodyB = r(B, e.bodyB, t), new n(e); }, n.prototype._reset = function (e) { e.anchorA ? this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(e.anchorA)) : e.localAnchorA && this.m_localAnchorA.setVec2(e.localAnchorA), e.anchorB ? this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(e.anchorB)) : e.localAnchorB && this.m_localAnchorB.setVec2(e.localAnchorB), e.length > 0 ? this.m_length = +e.length : e.length < 0 || (e.anchorA || e.anchorA || e.anchorA || e.anchorA) && (this.m_length = I.distance(this.m_bodyA.getWorldPoint(this.m_localAnchorA), this.m_bodyB.getWorldPoint(this.m_localAnchorB))), Number.isFinite(e.frequencyHz) && (this.m_frequencyHz = e.frequencyHz), Number.isFinite(e.dampingRatio) && (this.m_dampingRatio = e.dampingRatio); }, n.prototype.getLocalAnchorA = function () { return this.m_localAnchorA; }, n.prototype.getLocalAnchorB = function () { return this.m_localAnchorB; }, n.prototype.setLength = function (e) { this.m_length = e; }, n.prototype.getLength = function () { return this.m_length; }, n.prototype.setFrequency = function (e) { this.m_frequencyHz = e; }, n.prototype.getFrequency = function () { return this.m_frequencyHz; }, n.prototype.setDampingRatio = function (e) { this.m_dampingRatio = e; }, n.prototype.getDampingRatio = function () { return this.m_dampingRatio; }, n.prototype.getAnchorA = function () { return this.m_bodyA.getWorldPoint(this.m_localAnchorA); }, n.prototype.getAnchorB = function () { return this.m_bodyB.getWorldPoint(this.m_localAnchorB); }, n.prototype.getReactionForce = function (e) { return I.mulNumVec2(this.m_impulse, this.m_u).mul(e); }, n.prototype.getReactionTorque = function (e) { return 0; }, n.prototype.initVelocityConstraints = function (e) { this.m_localCenterA = this.m_bodyA.m_sweep.localCenter, this.m_localCenterB = this.m_bodyB.m_sweep.localCenter, this.m_invMassA = this.m_bodyA.m_invMass, this.m_invMassB = this.m_bodyB.m_invMass, this.m_invIA = this.m_bodyA.m_invI, this.m_invIB = this.m_bodyB.m_invI; var t = this.m_bodyA.c_position.c, n = this.m_bodyA.c_position.a, r = this.m_bodyA.c_velocity.v, i = this.m_bodyA.c_velocity.w, a = this.m_bodyB.c_position.c, o = this.m_bodyB.c_position.a, s = this.m_bodyB.c_velocity.v, c = this.m_bodyB.c_velocity.w, l = z.neo(n), u = z.neo(o); this.m_rA = z.mulVec2(l, I.sub(this.m_localAnchorA, this.m_localCenterA)), this.m_rB = z.mulVec2(u, I.sub(this.m_localAnchorB, this.m_localCenterB)), this.m_u = I.sub(I.add(a, this.m_rB), I.add(t, this.m_rA)); var d = this.m_u.length(); d > R.linearSlop ? this.m_u.mul(1 / d) : this.m_u.setNum(0, 0); var f = I.crossVec2Vec2(this.m_rA, this.m_u), p = I.crossVec2Vec2(this.m_rB, this.m_u), m = this.m_invMassA + this.m_invIA * f * f + this.m_invMassB + this.m_invIB * p * p; if (this.m_mass = m == 0 ? 0 : 1 / m, this.m_frequencyHz > 0) {
            var h = d - this.m_length, g = 2 * Zr * this.m_frequencyHz, _ = 2 * this.m_mass * this.m_dampingRatio * g, v = this.m_mass * g * g, y = e.dt;
            this.m_gamma = y * (_ + y * v), this.m_gamma = this.m_gamma == 0 ? 0 : 1 / this.m_gamma, this.m_bias = h * y * v * this.m_gamma, m += this.m_gamma, this.m_mass = m == 0 ? 0 : 1 / m;
        }
        else
            this.m_gamma = 0, this.m_bias = 0; if (e.warmStarting) {
            this.m_impulse *= e.dtRatio;
            var b = I.mulNumVec2(this.m_impulse, this.m_u);
            r.subMul(this.m_invMassA, b), i -= this.m_invIA * I.crossVec2Vec2(this.m_rA, b), s.addMul(this.m_invMassB, b), c += this.m_invIB * I.crossVec2Vec2(this.m_rB, b);
        }
        else
            this.m_impulse = 0; this.m_bodyA.c_velocity.v.setVec2(r), this.m_bodyA.c_velocity.w = i, this.m_bodyB.c_velocity.v.setVec2(s), this.m_bodyB.c_velocity.w = c; }, n.prototype.solveVelocityConstraints = function (e) { var t = this.m_bodyA.c_velocity.v, n = this.m_bodyA.c_velocity.w, r = this.m_bodyB.c_velocity.v, i = this.m_bodyB.c_velocity.w, a = I.add(t, I.crossNumVec2(n, this.m_rA)), o = I.add(r, I.crossNumVec2(i, this.m_rB)), s = I.dot(this.m_u, o) - I.dot(this.m_u, a), c = -this.m_mass * (s + this.m_bias + this.m_gamma * this.m_impulse); this.m_impulse += c; var l = I.mulNumVec2(c, this.m_u); t.subMul(this.m_invMassA, l), n -= this.m_invIA * I.crossVec2Vec2(this.m_rA, l), r.addMul(this.m_invMassB, l), i += this.m_invIB * I.crossVec2Vec2(this.m_rB, l), this.m_bodyA.c_velocity.v.setVec2(t), this.m_bodyA.c_velocity.w = n, this.m_bodyB.c_velocity.v.setVec2(r), this.m_bodyB.c_velocity.w = i; }, n.prototype.solvePositionConstraints = function (e) { if (this.m_frequencyHz > 0)
            return !0; var t = this.m_bodyA.c_position.c, n = this.m_bodyA.c_position.a, r = this.m_bodyB.c_position.c, i = this.m_bodyB.c_position.a, o = z.neo(n), s = z.neo(i), c = z.mulSub(o, this.m_localAnchorA, this.m_localCenterA), l = z.mulSub(s, this.m_localAnchorB, this.m_localCenterB), u = I.sub(I.add(r, l), I.add(t, c)), d = a(u.normalize() - this.m_length, -R.maxLinearCorrection, R.maxLinearCorrection), f = -this.m_mass * d, p = I.mulNumVec2(f, u); return t.subMul(this.m_invMassA, p), n -= this.m_invIA * I.crossVec2Vec2(c, p), r.addMul(this.m_invMassB, p), i += this.m_invIB * I.crossVec2Vec2(l, p), this.m_bodyA.c_position.c.setVec2(t), this.m_bodyA.c_position.a = n, this.m_bodyB.c_position.c.setVec2(r), this.m_bodyB.c_position.a = i, Xr(d) < R.linearSlop; }, n.TYPE = "distance-joint", n; })(wt), ei = { maxForce: 0, maxTorque: 0 }, ti = (function (e) { t(n, e); function n(t, r, i, a) { var o = this; return o instanceof n ? (t = Ce(t, ei), o = e.call(this, t, r, i) || this, r = o.m_bodyA, i = o.m_bodyB, o.m_type = n.TYPE, o.m_localAnchorA = I.clone(a ? r.getLocalPoint(a) : t.localAnchorA || I.zero()), o.m_localAnchorB = I.clone(a ? i.getLocalPoint(a) : t.localAnchorB || I.zero()), o.m_linearImpulse = I.zero(), o.m_angularImpulse = 0, o.m_maxForce = t.maxForce, o.m_maxTorque = t.maxTorque, o) : new n(t, r, i, a); } return n.prototype._serialize = function () { return { type: this.m_type, bodyA: this.m_bodyA, bodyB: this.m_bodyB, collideConnected: this.m_collideConnected, maxForce: this.m_maxForce, maxTorque: this.m_maxTorque, localAnchorA: this.m_localAnchorA, localAnchorB: this.m_localAnchorB }; }, n._deserialize = function (e, t, r) { return e = Se({}, e), e.bodyA = r(B, e.bodyA, t), e.bodyB = r(B, e.bodyB, t), new n(e); }, n.prototype._reset = function (e) { e.anchorA ? this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(e.anchorA)) : e.localAnchorA && this.m_localAnchorA.setVec2(e.localAnchorA), e.anchorB ? this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(e.anchorB)) : e.localAnchorB && this.m_localAnchorB.setVec2(e.localAnchorB), Number.isFinite(e.maxForce) && (this.m_maxForce = e.maxForce), Number.isFinite(e.maxTorque) && (this.m_maxTorque = e.maxTorque); }, n.prototype.getLocalAnchorA = function () { return this.m_localAnchorA; }, n.prototype.getLocalAnchorB = function () { return this.m_localAnchorB; }, n.prototype.setMaxForce = function (e) { this.m_maxForce = e; }, n.prototype.getMaxForce = function () { return this.m_maxForce; }, n.prototype.setMaxTorque = function (e) { this.m_maxTorque = e; }, n.prototype.getMaxTorque = function () { return this.m_maxTorque; }, n.prototype.getAnchorA = function () { return this.m_bodyA.getWorldPoint(this.m_localAnchorA); }, n.prototype.getAnchorB = function () { return this.m_bodyB.getWorldPoint(this.m_localAnchorB); }, n.prototype.getReactionForce = function (e) { return I.mulNumVec2(e, this.m_linearImpulse); }, n.prototype.getReactionTorque = function (e) { return e * this.m_angularImpulse; }, n.prototype.initVelocityConstraints = function (e) { this.m_localCenterA = this.m_bodyA.m_sweep.localCenter, this.m_localCenterB = this.m_bodyB.m_sweep.localCenter, this.m_invMassA = this.m_bodyA.m_invMass, this.m_invMassB = this.m_bodyB.m_invMass, this.m_invIA = this.m_bodyA.m_invI, this.m_invIB = this.m_bodyB.m_invI; var t = this.m_bodyA.c_position.a, n = this.m_bodyA.c_velocity.v, r = this.m_bodyA.c_velocity.w, i = this.m_bodyB.c_position.a, a = this.m_bodyB.c_velocity.v, o = this.m_bodyB.c_velocity.w, s = z.neo(t), c = z.neo(i); this.m_rA = z.mulVec2(s, I.sub(this.m_localAnchorA, this.m_localCenterA)), this.m_rB = z.mulVec2(c, I.sub(this.m_localAnchorB, this.m_localCenterB)); var l = this.m_invMassA, u = this.m_invMassB, d = this.m_invIA, f = this.m_invIB, p = new Nn; if (p.ex.x = l + u + d * this.m_rA.y * this.m_rA.y + f * this.m_rB.y * this.m_rB.y, p.ex.y = -d * this.m_rA.x * this.m_rA.y - f * this.m_rB.x * this.m_rB.y, p.ey.x = p.ex.y, p.ey.y = l + u + d * this.m_rA.x * this.m_rA.x + f * this.m_rB.x * this.m_rB.x, this.m_linearMass = p.getInverse(), this.m_angularMass = d + f, this.m_angularMass > 0 && (this.m_angularMass = 1 / this.m_angularMass), e.warmStarting) {
            this.m_linearImpulse.mul(e.dtRatio), this.m_angularImpulse *= e.dtRatio;
            var m = I.neo(this.m_linearImpulse.x, this.m_linearImpulse.y);
            n.subMul(l, m), r -= d * (I.crossVec2Vec2(this.m_rA, m) + this.m_angularImpulse), a.addMul(u, m), o += f * (I.crossVec2Vec2(this.m_rB, m) + this.m_angularImpulse);
        }
        else
            this.m_linearImpulse.setZero(), this.m_angularImpulse = 0; this.m_bodyA.c_velocity.v = n, this.m_bodyA.c_velocity.w = r, this.m_bodyB.c_velocity.v = a, this.m_bodyB.c_velocity.w = o; }, n.prototype.solveVelocityConstraints = function (e) { var t = this.m_bodyA.c_velocity.v, n = this.m_bodyA.c_velocity.w, r = this.m_bodyB.c_velocity.v, i = this.m_bodyB.c_velocity.w, o = this.m_invMassA, s = this.m_invMassB, c = this.m_invIA, l = this.m_invIB, u = e.dt, d = i - n, f = -this.m_angularMass * d, p = this.m_angularImpulse, m = u * this.m_maxTorque; this.m_angularImpulse = a(this.m_angularImpulse + f, -m, m), f = this.m_angularImpulse - p, n -= c * f, i += l * f; var d = I.sub(I.add(r, I.crossNumVec2(i, this.m_rB)), I.add(t, I.crossNumVec2(n, this.m_rA))), f = I.neg(Nn.mulVec2(this.m_linearMass, d)), p = this.m_linearImpulse; this.m_linearImpulse.add(f); var m = u * this.m_maxForce; this.m_linearImpulse.lengthSquared() > m * m && (this.m_linearImpulse.normalize(), this.m_linearImpulse.mul(m)), f = I.sub(this.m_linearImpulse, p), t.subMul(o, f), n -= c * I.crossVec2Vec2(this.m_rA, f), r.addMul(s, f), i += l * I.crossVec2Vec2(this.m_rB, f), this.m_bodyA.c_velocity.v = t, this.m_bodyA.c_velocity.w = n, this.m_bodyB.c_velocity.v = r, this.m_bodyB.c_velocity.w = i; }, n.prototype.solvePositionConstraints = function (e) { return !0; }, n.TYPE = "friction-joint", n; })(wt), ni = (function () { function e(e, t, n) { typeof e == "object" && e ? (this.ex = K.clone(e), this.ey = K.clone(t), this.ez = K.clone(n)) : (this.ex = K.zero(), this.ey = K.zero(), this.ez = K.zero()); } return e.prototype.toString = function () { return JSON.stringify(this); }, e.isValid = function (e) { return e != null && K.isValid(e.ex) && K.isValid(e.ey) && K.isValid(e.ez); }, e.assert = function (e) { }, e.prototype.setZero = function () { return this.ex.setZero(), this.ey.setZero(), this.ez.setZero(), this; }, e.prototype.solve33 = function (e) { var t = this.ey.y * this.ez.z - this.ey.z * this.ez.y, n = this.ey.z * this.ez.x - this.ey.x * this.ez.z, r = this.ey.x * this.ez.y - this.ey.y * this.ez.x, i = this.ex.x * t + this.ex.y * n + this.ex.z * r; i !== 0 && (i = 1 / i); var a = new K; return t = this.ey.y * this.ez.z - this.ey.z * this.ez.y, n = this.ey.z * this.ez.x - this.ey.x * this.ez.z, r = this.ey.x * this.ez.y - this.ey.y * this.ez.x, a.x = i * (e.x * t + e.y * n + e.z * r), t = e.y * this.ez.z - e.z * this.ez.y, n = e.z * this.ez.x - e.x * this.ez.z, r = e.x * this.ez.y - e.y * this.ez.x, a.y = i * (this.ex.x * t + this.ex.y * n + this.ex.z * r), t = this.ey.y * e.z - this.ey.z * e.y, n = this.ey.z * e.x - this.ey.x * e.z, r = this.ey.x * e.y - this.ey.y * e.x, a.z = i * (this.ex.x * t + this.ex.y * n + this.ex.z * r), a; }, e.prototype.solve22 = function (e) { var t = this.ex.x, n = this.ey.x, r = this.ex.y, i = this.ey.y, a = t * i - n * r; a !== 0 && (a = 1 / a); var o = I.zero(); return o.x = a * (i * e.x - n * e.y), o.y = a * (t * e.y - r * e.x), o; }, e.prototype.getInverse22 = function (e) { var t = this.ex.x, n = this.ey.x, r = this.ex.y, i = this.ey.y, a = t * i - n * r; a !== 0 && (a = 1 / a), e.ex.x = a * i, e.ey.x = -a * n, e.ex.z = 0, e.ex.y = -a * r, e.ey.y = a * t, e.ey.z = 0, e.ez.x = 0, e.ez.y = 0, e.ez.z = 0; }, e.prototype.getSymInverse33 = function (e) { var t = K.dot(this.ex, K.cross(this.ey, this.ez)); t !== 0 && (t = 1 / t); var n = this.ex.x, r = this.ey.x, i = this.ez.x, a = this.ey.y, o = this.ez.y, s = this.ez.z; e.ex.x = t * (a * s - o * o), e.ex.y = t * (i * o - r * s), e.ex.z = t * (r * o - i * a), e.ey.x = e.ex.y, e.ey.y = t * (n * s - i * i), e.ey.z = t * (i * r - n * o), e.ez.x = e.ex.z, e.ez.y = e.ey.z, e.ez.z = t * (n * a - r * r); }, e.mul = function (e, t) { if (t && "z" in t && "y" in t && "x" in t) {
            var n = e.ex.x * t.x + e.ey.x * t.y + e.ez.x * t.z, r = e.ex.y * t.x + e.ey.y * t.y + e.ez.y * t.z;
            return new K(n, r, e.ex.z * t.x + e.ey.z * t.y + e.ez.z * t.z);
        } if (t && "y" in t && "x" in t) {
            var n = e.ex.x * t.x + e.ey.x * t.y, r = e.ex.y * t.x + e.ey.y * t.y;
            return I.neo(n, r);
        } }, e.mulVec3 = function (e, t) { return new K(e.ex.x * t.x + e.ey.x * t.y + e.ez.x * t.z, e.ex.y * t.x + e.ey.y * t.y + e.ez.y * t.z, e.ex.z * t.x + e.ey.z * t.y + e.ez.z * t.z); }, e.mulVec2 = function (e, t) { var n = e.ex.x * t.x + e.ey.x * t.y, r = e.ex.y * t.x + e.ey.y * t.y; return I.neo(n, r); }, e.add = function (t, n) { return new e(K.add(t.ex, n.ex), K.add(t.ey, n.ey), K.add(t.ez, n.ez)); }, e; })(), ri = Math.abs, (function (e) { e[e.inactiveLimit = 0] = "inactiveLimit", e[e.atLowerLimit = 1] = "atLowerLimit", e[e.atUpperLimit = 2] = "atUpperLimit", e[e.equalLimits = 3] = "equalLimits"; })(ii || (ii = {})), ai = { lowerAngle: 0, upperAngle: 0, maxMotorTorque: 0, motorSpeed: 0, enableLimit: !1, enableMotor: !1 }, oi = (function (e) { t(n, e); function n(t, r, i, a) { var o = this, s, c, l, u, d, f; return o instanceof n ? (t = t == null ? {} : t, o = e.call(this, t, r, i) || this, r = o.m_bodyA, i = o.m_bodyB, o.m_mass = new ni, o.m_limitState = ii.inactiveLimit, o.m_type = n.TYPE, I.isValid(a) ? o.m_localAnchorA = r.getLocalPoint(a) : I.isValid(t.localAnchorA) ? o.m_localAnchorA = I.clone(t.localAnchorA) : o.m_localAnchorA = I.zero(), I.isValid(a) ? o.m_localAnchorB = i.getLocalPoint(a) : I.isValid(t.localAnchorB) ? o.m_localAnchorB = I.clone(t.localAnchorB) : o.m_localAnchorB = I.zero(), Number.isFinite(t.referenceAngle) ? o.m_referenceAngle = t.referenceAngle : o.m_referenceAngle = i.getAngle() - r.getAngle(), o.m_impulse = new K, o.m_motorImpulse = 0, o.m_lowerAngle = (s = t.lowerAngle) == null ? ai.lowerAngle : s, o.m_upperAngle = (c = t.upperAngle) == null ? ai.upperAngle : c, o.m_maxMotorTorque = (l = t.maxMotorTorque) == null ? ai.maxMotorTorque : l, o.m_motorSpeed = (u = t.motorSpeed) == null ? ai.motorSpeed : u, o.m_enableLimit = (d = t.enableLimit) == null ? ai.enableLimit : d, o.m_enableMotor = (f = t.enableMotor) == null ? ai.enableMotor : f, o) : new n(t, r, i, a); } return n.prototype._serialize = function () { return { type: this.m_type, bodyA: this.m_bodyA, bodyB: this.m_bodyB, collideConnected: this.m_collideConnected, lowerAngle: this.m_lowerAngle, upperAngle: this.m_upperAngle, maxMotorTorque: this.m_maxMotorTorque, motorSpeed: this.m_motorSpeed, enableLimit: this.m_enableLimit, enableMotor: this.m_enableMotor, localAnchorA: this.m_localAnchorA, localAnchorB: this.m_localAnchorB, referenceAngle: this.m_referenceAngle }; }, n._deserialize = function (e, t, r) { return e = Se({}, e), e.bodyA = r(B, e.bodyA, t), e.bodyB = r(B, e.bodyB, t), new n(e); }, n.prototype._reset = function (e) { e.anchorA ? this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(e.anchorA)) : e.localAnchorA && this.m_localAnchorA.setVec2(e.localAnchorA), e.anchorB ? this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(e.anchorB)) : e.localAnchorB && this.m_localAnchorB.setVec2(e.localAnchorB), Number.isFinite(e.referenceAngle) && (this.m_referenceAngle = e.referenceAngle), e.enableLimit !== void 0 && (this.m_enableLimit = e.enableLimit), Number.isFinite(e.lowerAngle) && (this.m_lowerAngle = e.lowerAngle), Number.isFinite(e.upperAngle) && (this.m_upperAngle = e.upperAngle), Number.isFinite(e.maxMotorTorque) && (this.m_maxMotorTorque = e.maxMotorTorque), Number.isFinite(e.motorSpeed) && (this.m_motorSpeed = e.motorSpeed), e.enableMotor !== void 0 && (this.m_enableMotor = e.enableMotor); }, n.prototype.getLocalAnchorA = function () { return this.m_localAnchorA; }, n.prototype.getLocalAnchorB = function () { return this.m_localAnchorB; }, n.prototype.getReferenceAngle = function () { return this.m_referenceAngle; }, n.prototype.getJointAngle = function () { var e = this.m_bodyA; return this.m_bodyB.m_sweep.a - e.m_sweep.a - this.m_referenceAngle; }, n.prototype.getJointSpeed = function () { var e = this.m_bodyA; return this.m_bodyB.m_angularVelocity - e.m_angularVelocity; }, n.prototype.isMotorEnabled = function () { return this.m_enableMotor; }, n.prototype.enableMotor = function (e) { e != this.m_enableMotor && (this.m_bodyA.setAwake(!0), this.m_bodyB.setAwake(!0), this.m_enableMotor = e); }, n.prototype.getMotorTorque = function (e) { return e * this.m_motorImpulse; }, n.prototype.setMotorSpeed = function (e) { e != this.m_motorSpeed && (this.m_bodyA.setAwake(!0), this.m_bodyB.setAwake(!0), this.m_motorSpeed = e); }, n.prototype.getMotorSpeed = function () { return this.m_motorSpeed; }, n.prototype.setMaxMotorTorque = function (e) { e != this.m_maxMotorTorque && (this.m_bodyA.setAwake(!0), this.m_bodyB.setAwake(!0), this.m_maxMotorTorque = e); }, n.prototype.getMaxMotorTorque = function () { return this.m_maxMotorTorque; }, n.prototype.isLimitEnabled = function () { return this.m_enableLimit; }, n.prototype.enableLimit = function (e) { e != this.m_enableLimit && (this.m_bodyA.setAwake(!0), this.m_bodyB.setAwake(!0), this.m_enableLimit = e, this.m_impulse.z = 0); }, n.prototype.getLowerLimit = function () { return this.m_lowerAngle; }, n.prototype.getUpperLimit = function () { return this.m_upperAngle; }, n.prototype.setLimits = function (e, t) { (e != this.m_lowerAngle || t != this.m_upperAngle) && (this.m_bodyA.setAwake(!0), this.m_bodyB.setAwake(!0), this.m_impulse.z = 0, this.m_lowerAngle = e, this.m_upperAngle = t); }, n.prototype.getAnchorA = function () { return this.m_bodyA.getWorldPoint(this.m_localAnchorA); }, n.prototype.getAnchorB = function () { return this.m_bodyB.getWorldPoint(this.m_localAnchorB); }, n.prototype.getReactionForce = function (e) { return I.neo(this.m_impulse.x, this.m_impulse.y).mul(e); }, n.prototype.getReactionTorque = function (e) { return e * this.m_impulse.z; }, n.prototype.initVelocityConstraints = function (e) { this.m_localCenterA = this.m_bodyA.m_sweep.localCenter, this.m_localCenterB = this.m_bodyB.m_sweep.localCenter, this.m_invMassA = this.m_bodyA.m_invMass, this.m_invMassB = this.m_bodyB.m_invMass, this.m_invIA = this.m_bodyA.m_invI, this.m_invIB = this.m_bodyB.m_invI; var t = this.m_bodyA.c_position.a, n = this.m_bodyA.c_velocity.v, r = this.m_bodyA.c_velocity.w, i = this.m_bodyB.c_position.a, a = this.m_bodyB.c_velocity.v, o = this.m_bodyB.c_velocity.w, s = z.neo(t), c = z.neo(i); this.m_rA = z.mulVec2(s, I.sub(this.m_localAnchorA, this.m_localCenterA)), this.m_rB = z.mulVec2(c, I.sub(this.m_localAnchorB, this.m_localCenterB)); var l = this.m_invMassA, u = this.m_invMassB, d = this.m_invIA, f = this.m_invIB, p = d + f === 0; if (this.m_mass.ex.x = l + u + this.m_rA.y * this.m_rA.y * d + this.m_rB.y * this.m_rB.y * f, this.m_mass.ey.x = -this.m_rA.y * this.m_rA.x * d - this.m_rB.y * this.m_rB.x * f, this.m_mass.ez.x = -this.m_rA.y * d - this.m_rB.y * f, this.m_mass.ex.y = this.m_mass.ey.x, this.m_mass.ey.y = l + u + this.m_rA.x * this.m_rA.x * d + this.m_rB.x * this.m_rB.x * f, this.m_mass.ez.y = this.m_rA.x * d + this.m_rB.x * f, this.m_mass.ex.z = this.m_mass.ez.x, this.m_mass.ey.z = this.m_mass.ez.y, this.m_mass.ez.z = d + f, this.m_motorMass = d + f, this.m_motorMass > 0 && (this.m_motorMass = 1 / this.m_motorMass), (this.m_enableMotor == 0 || p) && (this.m_motorImpulse = 0), this.m_enableLimit && p == 0) {
            var m = i - t - this.m_referenceAngle;
            ri(this.m_upperAngle - this.m_lowerAngle) < 2 * R.angularSlop ? this.m_limitState = ii.equalLimits : m <= this.m_lowerAngle ? (this.m_limitState != ii.atLowerLimit && (this.m_impulse.z = 0), this.m_limitState = ii.atLowerLimit) : m >= this.m_upperAngle ? (this.m_limitState != ii.atUpperLimit && (this.m_impulse.z = 0), this.m_limitState = ii.atUpperLimit) : (this.m_limitState = ii.inactiveLimit, this.m_impulse.z = 0);
        }
        else
            this.m_limitState = ii.inactiveLimit; if (e.warmStarting) {
            this.m_impulse.mul(e.dtRatio), this.m_motorImpulse *= e.dtRatio;
            var h = I.neo(this.m_impulse.x, this.m_impulse.y);
            n.subMul(l, h), r -= d * (I.crossVec2Vec2(this.m_rA, h) + this.m_motorImpulse + this.m_impulse.z), a.addMul(u, h), o += f * (I.crossVec2Vec2(this.m_rB, h) + this.m_motorImpulse + this.m_impulse.z);
        }
        else
            this.m_impulse.setZero(), this.m_motorImpulse = 0; this.m_bodyA.c_velocity.v = n, this.m_bodyA.c_velocity.w = r, this.m_bodyB.c_velocity.v = a, this.m_bodyB.c_velocity.w = o; }, n.prototype.solveVelocityConstraints = function (e) { var t = this.m_bodyA.c_velocity.v, n = this.m_bodyA.c_velocity.w, r = this.m_bodyB.c_velocity.v, i = this.m_bodyB.c_velocity.w, o = this.m_invMassA, s = this.m_invMassB, c = this.m_invIA, l = this.m_invIB, u = c + l === 0; if (this.m_enableMotor && this.m_limitState != ii.equalLimits && u == 0) {
            var d = i - n - this.m_motorSpeed, f = -this.m_motorMass * d, p = this.m_motorImpulse, m = e.dt * this.m_maxMotorTorque;
            this.m_motorImpulse = a(this.m_motorImpulse + f, -m, m), f = this.m_motorImpulse - p, n -= c * f, i += l * f;
        } if (this.m_enableLimit && this.m_limitState != ii.inactiveLimit && u == 0) {
            var h = I.zero();
            h.addCombine(1, r, 1, I.crossNumVec2(i, this.m_rB)), h.subCombine(1, t, 1, I.crossNumVec2(n, this.m_rA));
            var g = i - n, d = new K(h.x, h.y, g), f = K.neg(this.m_mass.solve33(d));
            if (this.m_limitState == ii.equalLimits)
                this.m_impulse.add(f);
            else if (this.m_limitState == ii.atLowerLimit) {
                var _ = this.m_impulse.z + f.z;
                if (_ < 0) {
                    var v = I.combine(-1, h, this.m_impulse.z, I.neo(this.m_mass.ez.x, this.m_mass.ez.y)), y = this.m_mass.solve22(v);
                    f.x = y.x, f.y = y.y, f.z = -this.m_impulse.z, this.m_impulse.x += y.x, this.m_impulse.y += y.y, this.m_impulse.z = 0;
                }
                else
                    this.m_impulse.add(f);
            }
            else if (this.m_limitState == ii.atUpperLimit) {
                var _ = this.m_impulse.z + f.z;
                if (_ > 0) {
                    var v = I.combine(-1, h, this.m_impulse.z, I.neo(this.m_mass.ez.x, this.m_mass.ez.y)), y = this.m_mass.solve22(v);
                    f.x = y.x, f.y = y.y, f.z = -this.m_impulse.z, this.m_impulse.x += y.x, this.m_impulse.y += y.y, this.m_impulse.z = 0;
                }
                else
                    this.m_impulse.add(f);
            }
            var b = I.neo(f.x, f.y);
            t.subMul(o, b), n -= c * (I.crossVec2Vec2(this.m_rA, b) + f.z), r.addMul(s, b), i += l * (I.crossVec2Vec2(this.m_rB, b) + f.z);
        }
        else {
            var d = I.zero();
            d.addCombine(1, r, 1, I.crossNumVec2(i, this.m_rB)), d.subCombine(1, t, 1, I.crossNumVec2(n, this.m_rA));
            var f = this.m_mass.solve22(I.neg(d));
            this.m_impulse.x += f.x, this.m_impulse.y += f.y, t.subMul(o, f), n -= c * I.crossVec2Vec2(this.m_rA, f), r.addMul(s, f), i += l * I.crossVec2Vec2(this.m_rB, f);
        } this.m_bodyA.c_velocity.v = t, this.m_bodyA.c_velocity.w = n, this.m_bodyB.c_velocity.v = r, this.m_bodyB.c_velocity.w = i; }, n.prototype.solvePositionConstraints = function (e) { var t = this.m_bodyA.c_position.c, n = this.m_bodyA.c_position.a, r = this.m_bodyB.c_position.c, i = this.m_bodyB.c_position.a, o = z.neo(n), s = z.neo(i), c = 0, l = 0, u = this.m_invIA + this.m_invIB == 0; if (this.m_enableLimit && this.m_limitState != ii.inactiveLimit && u == 0) {
            var d = i - n - this.m_referenceAngle, f = 0;
            if (this.m_limitState == ii.equalLimits) {
                var p = a(d - this.m_lowerAngle, -R.maxAngularCorrection, R.maxAngularCorrection);
                f = -this.m_motorMass * p, c = ri(p);
            }
            else if (this.m_limitState == ii.atLowerLimit) {
                var p = d - this.m_lowerAngle;
                c = -p, p = a(p + R.angularSlop, -R.maxAngularCorrection, 0), f = -this.m_motorMass * p;
            }
            else if (this.m_limitState == ii.atUpperLimit) {
                var p = d - this.m_upperAngle;
                c = p, p = a(p - R.angularSlop, 0, R.maxAngularCorrection), f = -this.m_motorMass * p;
            }
            n -= this.m_invIA * f, i += this.m_invIB * f;
        } o.setAngle(n), s.setAngle(i); var m = z.mulVec2(o, I.sub(this.m_localAnchorA, this.m_localCenterA)), h = z.mulVec2(s, I.sub(this.m_localAnchorB, this.m_localCenterB)), p = I.zero(); p.addCombine(1, r, 1, h), p.subCombine(1, t, 1, m), l = p.length(); var g = this.m_invMassA, _ = this.m_invMassB, v = this.m_invIA, y = this.m_invIB, b = new Nn; b.ex.x = g + _ + v * m.y * m.y + y * h.y * h.y, b.ex.y = -v * m.x * m.y - y * h.x * h.y, b.ey.x = b.ex.y, b.ey.y = g + _ + v * m.x * m.x + y * h.x * h.x; var x = I.neg(b.solve(p)); return t.subMul(g, x), n -= v * I.crossVec2Vec2(m, x), r.addMul(_, x), i += y * I.crossVec2Vec2(h, x), this.m_bodyA.c_position.c.setVec2(t), this.m_bodyA.c_position.a = n, this.m_bodyB.c_position.c.setVec2(r), this.m_bodyB.c_position.a = i, l <= R.linearSlop && c <= R.angularSlop; }, n.TYPE = "revolute-joint", n; })(wt), si = Math.abs, ci = Math.max, li = Math.min, (function (e) { e[e.inactiveLimit = 0] = "inactiveLimit", e[e.atLowerLimit = 1] = "atLowerLimit", e[e.atUpperLimit = 2] = "atUpperLimit", e[e.equalLimits = 3] = "equalLimits"; })(ui || (ui = {})), di = { enableLimit: !1, lowerTranslation: 0, upperTranslation: 0, enableMotor: !1, maxMotorForce: 0, motorSpeed: 0 }, fi = (function (e) { t(n, e); function n(t, r, i, a, o) { var s = this; return s instanceof n ? (t = Ce(t, di), s = e.call(this, t, r, i) || this, r = s.m_bodyA, i = s.m_bodyB, s.m_type = n.TYPE, s.m_localAnchorA = I.clone(a ? r.getLocalPoint(a) : t.localAnchorA || I.zero()), s.m_localAnchorB = I.clone(a ? i.getLocalPoint(a) : t.localAnchorB || I.zero()), s.m_localXAxisA = I.clone(o ? r.getLocalVector(o) : t.localAxisA || I.neo(1, 0)), s.m_localXAxisA.normalize(), s.m_localYAxisA = I.crossNumVec2(1, s.m_localXAxisA), s.m_referenceAngle = Number.isFinite(t.referenceAngle) ? t.referenceAngle : i.getAngle() - r.getAngle(), s.m_impulse = new K, s.m_motorMass = 0, s.m_motorImpulse = 0, s.m_lowerTranslation = t.lowerTranslation, s.m_upperTranslation = t.upperTranslation, s.m_maxMotorForce = t.maxMotorForce, s.m_motorSpeed = t.motorSpeed, s.m_enableLimit = t.enableLimit, s.m_enableMotor = t.enableMotor, s.m_limitState = ui.inactiveLimit, s.m_axis = I.zero(), s.m_perp = I.zero(), s.m_K = new ni, s) : new n(t, r, i, a, o); } return n.prototype._serialize = function () { return { type: this.m_type, bodyA: this.m_bodyA, bodyB: this.m_bodyB, collideConnected: this.m_collideConnected, lowerTranslation: this.m_lowerTranslation, upperTranslation: this.m_upperTranslation, maxMotorForce: this.m_maxMotorForce, motorSpeed: this.m_motorSpeed, enableLimit: this.m_enableLimit, enableMotor: this.m_enableMotor, localAnchorA: this.m_localAnchorA, localAnchorB: this.m_localAnchorB, localAxisA: this.m_localXAxisA, referenceAngle: this.m_referenceAngle }; }, n._deserialize = function (e, t, r) { return e = Se({}, e), e.bodyA = r(B, e.bodyA, t), e.bodyB = r(B, e.bodyB, t), e.localAxisA = I.clone(e.localAxisA), new n(e); }, n.prototype._reset = function (e) { e.anchorA ? this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(e.anchorA)) : e.localAnchorA && this.m_localAnchorA.setVec2(e.localAnchorA), e.anchorB ? this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(e.anchorB)) : e.localAnchorB && this.m_localAnchorB.setVec2(e.localAnchorB), e.localAxisA && (this.m_localXAxisA.setVec2(e.localAxisA), this.m_localYAxisA.setVec2(I.crossNumVec2(1, e.localAxisA))), Number.isFinite(e.referenceAngle) && (this.m_referenceAngle = e.referenceAngle), e.enableLimit !== void 0 && (this.m_enableLimit = !!e.enableLimit), Number.isFinite(e.lowerTranslation) && (this.m_lowerTranslation = e.lowerTranslation), Number.isFinite(e.upperTranslation) && (this.m_upperTranslation = e.upperTranslation), e.enableMotor !== void 0 && (this.m_enableMotor = !!e.enableMotor), Number.isFinite(e.maxMotorForce) && (this.m_maxMotorForce = e.maxMotorForce), Number.isFinite(e.motorSpeed) && (this.m_motorSpeed = e.motorSpeed); }, n.prototype.getLocalAnchorA = function () { return this.m_localAnchorA; }, n.prototype.getLocalAnchorB = function () { return this.m_localAnchorB; }, n.prototype.getLocalAxisA = function () { return this.m_localXAxisA; }, n.prototype.getReferenceAngle = function () { return this.m_referenceAngle; }, n.prototype.getJointTranslation = function () { var e = this.m_bodyA.getWorldPoint(this.m_localAnchorA), t = this.m_bodyB.getWorldPoint(this.m_localAnchorB), n = I.sub(t, e), r = this.m_bodyA.getWorldVector(this.m_localXAxisA); return I.dot(n, r); }, n.prototype.getJointSpeed = function () { var e = this.m_bodyA, t = this.m_bodyB, n = z.mulVec2(e.m_xf.q, I.sub(this.m_localAnchorA, e.m_sweep.localCenter)), r = z.mulVec2(t.m_xf.q, I.sub(this.m_localAnchorB, t.m_sweep.localCenter)), i = I.add(e.m_sweep.c, n), a = I.add(t.m_sweep.c, r), o = I.sub(a, i), s = z.mulVec2(e.m_xf.q, this.m_localXAxisA), c = e.m_linearVelocity, l = t.m_linearVelocity, u = e.m_angularVelocity, d = t.m_angularVelocity; return I.dot(o, I.crossNumVec2(u, s)) + I.dot(s, I.sub(I.addCrossNumVec2(l, d, r), I.addCrossNumVec2(c, u, n))); }, n.prototype.isLimitEnabled = function () { return this.m_enableLimit; }, n.prototype.enableLimit = function (e) { e != this.m_enableLimit && (this.m_bodyA.setAwake(!0), this.m_bodyB.setAwake(!0), this.m_enableLimit = e, this.m_impulse.z = 0); }, n.prototype.getLowerLimit = function () { return this.m_lowerTranslation; }, n.prototype.getUpperLimit = function () { return this.m_upperTranslation; }, n.prototype.setLimits = function (e, t) { (e != this.m_lowerTranslation || t != this.m_upperTranslation) && (this.m_bodyA.setAwake(!0), this.m_bodyB.setAwake(!0), this.m_lowerTranslation = e, this.m_upperTranslation = t, this.m_impulse.z = 0); }, n.prototype.isMotorEnabled = function () { return this.m_enableMotor; }, n.prototype.enableMotor = function (e) { e != this.m_enableMotor && (this.m_bodyA.setAwake(!0), this.m_bodyB.setAwake(!0), this.m_enableMotor = e); }, n.prototype.setMotorSpeed = function (e) { e != this.m_motorSpeed && (this.m_bodyA.setAwake(!0), this.m_bodyB.setAwake(!0), this.m_motorSpeed = e); }, n.prototype.setMaxMotorForce = function (e) { e != this.m_maxMotorForce && (this.m_bodyA.setAwake(!0), this.m_bodyB.setAwake(!0), this.m_maxMotorForce = e); }, n.prototype.getMaxMotorForce = function () { return this.m_maxMotorForce; }, n.prototype.getMotorSpeed = function () { return this.m_motorSpeed; }, n.prototype.getMotorForce = function (e) { return e * this.m_motorImpulse; }, n.prototype.getAnchorA = function () { return this.m_bodyA.getWorldPoint(this.m_localAnchorA); }, n.prototype.getAnchorB = function () { return this.m_bodyB.getWorldPoint(this.m_localAnchorB); }, n.prototype.getReactionForce = function (e) { return I.combine(this.m_impulse.x, this.m_perp, this.m_motorImpulse + this.m_impulse.z, this.m_axis).mul(e); }, n.prototype.getReactionTorque = function (e) { return e * this.m_impulse.y; }, n.prototype.initVelocityConstraints = function (e) { this.m_localCenterA = this.m_bodyA.m_sweep.localCenter, this.m_localCenterB = this.m_bodyB.m_sweep.localCenter, this.m_invMassA = this.m_bodyA.m_invMass, this.m_invMassB = this.m_bodyB.m_invMass, this.m_invIA = this.m_bodyA.m_invI, this.m_invIB = this.m_bodyB.m_invI; var t = this.m_bodyA.c_position.c, n = this.m_bodyA.c_position.a, r = this.m_bodyA.c_velocity.v, i = this.m_bodyA.c_velocity.w, a = this.m_bodyB.c_position.c, o = this.m_bodyB.c_position.a, s = this.m_bodyB.c_velocity.v, c = this.m_bodyB.c_velocity.w, l = z.neo(n), u = z.neo(o), d = z.mulVec2(l, I.sub(this.m_localAnchorA, this.m_localCenterA)), f = z.mulVec2(u, I.sub(this.m_localAnchorB, this.m_localCenterB)), p = I.zero(); p.addCombine(1, a, 1, f), p.subCombine(1, t, 1, d); var m = this.m_invMassA, h = this.m_invMassB, g = this.m_invIA, _ = this.m_invIB; this.m_axis = z.mulVec2(l, this.m_localXAxisA), this.m_a1 = I.crossVec2Vec2(I.add(p, d), this.m_axis), this.m_a2 = I.crossVec2Vec2(f, this.m_axis), this.m_motorMass = m + h + g * this.m_a1 * this.m_a1 + _ * this.m_a2 * this.m_a2, this.m_motorMass > 0 && (this.m_motorMass = 1 / this.m_motorMass), this.m_perp = z.mulVec2(l, this.m_localYAxisA), this.m_s1 = I.crossVec2Vec2(I.add(p, d), this.m_perp), this.m_s2 = I.crossVec2Vec2(f, this.m_perp), I.crossVec2Vec2(d, this.m_perp); var v = m + h + g * this.m_s1 * this.m_s1 + _ * this.m_s2 * this.m_s2, y = g * this.m_s1 + _ * this.m_s2, b = g * this.m_s1 * this.m_a1 + _ * this.m_s2 * this.m_a2, x = g + _; x == 0 && (x = 1); var S = g * this.m_a1 + _ * this.m_a2, C = m + h + g * this.m_a1 * this.m_a1 + _ * this.m_a2 * this.m_a2; if (this.m_K.ex.set(v, y, b), this.m_K.ey.set(y, x, S), this.m_K.ez.set(b, S, C), this.m_enableLimit) {
            var w = I.dot(this.m_axis, p);
            si(this.m_upperTranslation - this.m_lowerTranslation) < 2 * R.linearSlop ? this.m_limitState = ui.equalLimits : w <= this.m_lowerTranslation ? this.m_limitState != ui.atLowerLimit && (this.m_limitState = ui.atLowerLimit, this.m_impulse.z = 0) : w >= this.m_upperTranslation ? this.m_limitState != ui.atUpperLimit && (this.m_limitState = ui.atUpperLimit, this.m_impulse.z = 0) : (this.m_limitState = ui.inactiveLimit, this.m_impulse.z = 0);
        }
        else
            this.m_limitState = ui.inactiveLimit, this.m_impulse.z = 0; if (this.m_enableMotor == 0 && (this.m_motorImpulse = 0), e.warmStarting) {
            this.m_impulse.mul(e.dtRatio), this.m_motorImpulse *= e.dtRatio;
            var T = I.combine(this.m_impulse.x, this.m_perp, this.m_motorImpulse + this.m_impulse.z, this.m_axis), E = this.m_impulse.x * this.m_s1 + this.m_impulse.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_a1, D = this.m_impulse.x * this.m_s2 + this.m_impulse.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_a2;
            r.subMul(m, T), i -= g * E, s.addMul(h, T), c += _ * D;
        }
        else
            this.m_impulse.setZero(), this.m_motorImpulse = 0; this.m_bodyA.c_velocity.v.setVec2(r), this.m_bodyA.c_velocity.w = i, this.m_bodyB.c_velocity.v.setVec2(s), this.m_bodyB.c_velocity.w = c; }, n.prototype.solveVelocityConstraints = function (e) { var t = this.m_bodyA.c_velocity.v, n = this.m_bodyA.c_velocity.w, r = this.m_bodyB.c_velocity.v, i = this.m_bodyB.c_velocity.w, o = this.m_invMassA, s = this.m_invMassB, c = this.m_invIA, l = this.m_invIB; if (this.m_enableMotor && this.m_limitState != ui.equalLimits) {
            var u = I.dot(this.m_axis, I.sub(r, t)) + this.m_a2 * i - this.m_a1 * n, d = this.m_motorMass * (this.m_motorSpeed - u), f = this.m_motorImpulse, p = e.dt * this.m_maxMotorForce;
            this.m_motorImpulse = a(this.m_motorImpulse + d, -p, p), d = this.m_motorImpulse - f;
            var m = I.mulNumVec2(d, this.m_axis), h = d * this.m_a1, g = d * this.m_a2;
            t.subMul(o, m), n -= c * h, r.addMul(s, m), i += l * g;
        } var _ = I.zero(); if (_.x += I.dot(this.m_perp, r) + this.m_s2 * i, _.x -= I.dot(this.m_perp, t) + this.m_s1 * n, _.y = i - n, this.m_enableLimit && this.m_limitState != ui.inactiveLimit) {
            var v = 0;
            v += I.dot(this.m_axis, r) + this.m_a2 * i, v -= I.dot(this.m_axis, t) + this.m_a1 * n;
            var u = new K(_.x, _.y, v), y = K.clone(this.m_impulse), b = this.m_K.solve33(K.neg(u));
            this.m_impulse.add(b), this.m_limitState == ui.atLowerLimit ? this.m_impulse.z = ci(this.m_impulse.z, 0) : this.m_limitState == ui.atUpperLimit && (this.m_impulse.z = li(this.m_impulse.z, 0));
            var x = I.combine(-1, _, -(this.m_impulse.z - y.z), I.neo(this.m_K.ez.x, this.m_K.ez.y)), S = I.add(this.m_K.solve22(x), I.neo(y.x, y.y));
            this.m_impulse.x = S.x, this.m_impulse.y = S.y, b = K.sub(this.m_impulse, y);
            var m = I.combine(b.x, this.m_perp, b.z, this.m_axis), h = b.x * this.m_s1 + b.y + b.z * this.m_a1, g = b.x * this.m_s2 + b.y + b.z * this.m_a2;
            t.subMul(o, m), n -= c * h, r.addMul(s, m), i += l * g;
        }
        else {
            var b = this.m_K.solve22(I.neg(_));
            this.m_impulse.x += b.x, this.m_impulse.y += b.y;
            var m = I.mulNumVec2(b.x, this.m_perp), h = b.x * this.m_s1 + b.y, g = b.x * this.m_s2 + b.y;
            t.subMul(o, m), n -= c * h, r.addMul(s, m), i += l * g;
        } this.m_bodyA.c_velocity.v = t, this.m_bodyA.c_velocity.w = n, this.m_bodyB.c_velocity.v = r, this.m_bodyB.c_velocity.w = i; }, n.prototype.solvePositionConstraints = function (e) { var t = this.m_bodyA.c_position.c, n = this.m_bodyA.c_position.a, r = this.m_bodyB.c_position.c, i = this.m_bodyB.c_position.a, o = z.neo(n), s = z.neo(i), c = this.m_invMassA, l = this.m_invMassB, u = this.m_invIA, d = this.m_invIB, f = z.mulVec2(o, I.sub(this.m_localAnchorA, this.m_localCenterA)), p = z.mulVec2(s, I.sub(this.m_localAnchorB, this.m_localCenterB)), m = I.sub(I.add(r, p), I.add(t, f)), h = z.mulVec2(o, this.m_localXAxisA), g = I.crossVec2Vec2(I.add(m, f), h), _ = I.crossVec2Vec2(p, h), v = z.mulVec2(o, this.m_localYAxisA), y = I.crossVec2Vec2(I.add(m, f), v), b = I.crossVec2Vec2(p, v), x = new K, S = I.zero(); S.x = I.dot(v, m), S.y = i - n - this.m_referenceAngle; var C = si(S.x), w = si(S.y), T = R.linearSlop, E = R.maxLinearCorrection, D = !1, O = 0; if (this.m_enableLimit) {
            var k = I.dot(h, m);
            si(this.m_upperTranslation - this.m_lowerTranslation) < 2 * T ? (O = a(k, -E, E), C = ci(C, si(k)), D = !0) : k <= this.m_lowerTranslation ? (O = a(k - this.m_lowerTranslation + T, -E, 0), C = Math.max(C, this.m_lowerTranslation - k), D = !0) : k >= this.m_upperTranslation && (O = a(k - this.m_upperTranslation - T, 0, E), C = Math.max(C, k - this.m_upperTranslation), D = !0);
        } if (D) {
            var A = c + l + u * y * y + d * b * b, j = u * y + d * b, ee = u * y * g + d * b * _, M = u + d;
            M == 0 && (M = 1);
            var te = u * g + d * _, ne = c + l + u * g * g + d * _ * _, N = new ni;
            N.ex.set(A, j, ee), N.ey.set(j, M, te), N.ez.set(ee, te, ne);
            var P = new K;
            P.x = S.x, P.y = S.y, P.z = O, x = N.solve33(K.neg(P));
        }
        else {
            var A = c + l + u * y * y + d * b * b, j = u * y + d * b, M = u + d;
            M == 0 && (M = 1);
            var N = new Nn;
            N.ex.setNum(A, j), N.ey.setNum(j, M);
            var F = N.solve(I.neg(S));
            x.x = F.x, x.y = F.y, x.z = 0;
        } var re = I.combine(x.x, v, x.z, h), ie = x.x * y + x.y + x.z * g, ae = x.x * b + x.y + x.z * _; return t.subMul(c, re), n -= u * ie, r.addMul(l, re), i += d * ae, this.m_bodyA.c_position.c = t, this.m_bodyA.c_position.a = n, this.m_bodyB.c_position.c = r, this.m_bodyB.c_position.a = i, C <= R.linearSlop && w <= R.angularSlop; }, n.TYPE = "prismatic-joint", n; })(wt), pi = { ratio: 1 }, mi = (function (e) { t(n, e); function n(t, r, i, a, o, s) { var c = this; if (!(c instanceof n))
            return new n(t, r, i, a, o, s); t = Ce(t, pi), c = e.call(this, t, r, i) || this, r = c.m_bodyA, i = c.m_bodyB, c.m_type = n.TYPE, c.m_joint1 = a || t.joint1, c.m_joint2 = o || t.joint2, c.m_ratio = Number.isFinite(s) ? s : t.ratio, c.m_type1 = c.m_joint1.getType(), c.m_type2 = c.m_joint2.getType(); var l, u; c.m_bodyC = c.m_joint1.getBodyA(), c.m_bodyA = c.m_joint1.getBodyB(); var d = c.m_bodyA.m_xf, f = c.m_bodyA.m_sweep.a, p = c.m_bodyC.m_xf, m = c.m_bodyC.m_sweep.a; if (c.m_type1 === oi.TYPE) {
            var h = c.m_joint1;
            c.m_localAnchorC = h.m_localAnchorA, c.m_localAnchorA = h.m_localAnchorB, c.m_referenceAngleA = h.m_referenceAngle, c.m_localAxisC = I.zero(), l = f - m - c.m_referenceAngleA;
        }
        else {
            var g = c.m_joint1;
            c.m_localAnchorC = g.m_localAnchorA, c.m_localAnchorA = g.m_localAnchorB, c.m_referenceAngleA = g.m_referenceAngle, c.m_localAxisC = g.m_localXAxisA;
            var _ = c.m_localAnchorC, v = z.mulTVec2(p.q, I.add(z.mulVec2(d.q, c.m_localAnchorA), I.sub(d.p, p.p)));
            l = I.dot(v, c.m_localAxisC) - I.dot(_, c.m_localAxisC);
        } c.m_bodyD = c.m_joint2.getBodyA(), c.m_bodyB = c.m_joint2.getBodyB(); var y = c.m_bodyB.m_xf, b = c.m_bodyB.m_sweep.a, x = c.m_bodyD.m_xf, S = c.m_bodyD.m_sweep.a; if (c.m_type2 === oi.TYPE) {
            var h = c.m_joint2;
            c.m_localAnchorD = h.m_localAnchorA, c.m_localAnchorB = h.m_localAnchorB, c.m_referenceAngleB = h.m_referenceAngle, c.m_localAxisD = I.zero(), u = b - S - c.m_referenceAngleB;
        }
        else {
            var g = c.m_joint2;
            c.m_localAnchorD = g.m_localAnchorA, c.m_localAnchorB = g.m_localAnchorB, c.m_referenceAngleB = g.m_referenceAngle, c.m_localAxisD = g.m_localXAxisA;
            var C = c.m_localAnchorD, w = z.mulTVec2(x.q, I.add(z.mulVec2(y.q, c.m_localAnchorB), I.sub(y.p, x.p)));
            u = I.dot(w, c.m_localAxisD) - I.dot(C, c.m_localAxisD);
        } return c.m_constant = l + c.m_ratio * u, c.m_impulse = 0, c; } return n.prototype._serialize = function () { return { type: this.m_type, bodyA: this.m_bodyA, bodyB: this.m_bodyB, collideConnected: this.m_collideConnected, joint1: this.m_joint1, joint2: this.m_joint2, ratio: this.m_ratio }; }, n._deserialize = function (e, t, r) { return e = Se({}, e), e.bodyA = r(B, e.bodyA, t), e.bodyB = r(B, e.bodyB, t), e.joint1 = r(wt, e.joint1, t), e.joint2 = r(wt, e.joint2, t), new n(e); }, n.prototype._reset = function (e) { Number.isFinite(e.ratio) && (this.m_ratio = e.ratio); }, n.prototype.getJoint1 = function () { return this.m_joint1; }, n.prototype.getJoint2 = function () { return this.m_joint2; }, n.prototype.setRatio = function (e) { this.m_ratio = e; }, n.prototype.getRatio = function () { return this.m_ratio; }, n.prototype.getAnchorA = function () { return this.m_bodyA.getWorldPoint(this.m_localAnchorA); }, n.prototype.getAnchorB = function () { return this.m_bodyB.getWorldPoint(this.m_localAnchorB); }, n.prototype.getReactionForce = function (e) { return I.mulNumVec2(this.m_impulse, this.m_JvAC).mul(e); }, n.prototype.getReactionTorque = function (e) { return e * (this.m_impulse * this.m_JwA); }, n.prototype.initVelocityConstraints = function (e) { this.m_lcA = this.m_bodyA.m_sweep.localCenter, this.m_lcB = this.m_bodyB.m_sweep.localCenter, this.m_lcC = this.m_bodyC.m_sweep.localCenter, this.m_lcD = this.m_bodyD.m_sweep.localCenter, this.m_mA = this.m_bodyA.m_invMass, this.m_mB = this.m_bodyB.m_invMass, this.m_mC = this.m_bodyC.m_invMass, this.m_mD = this.m_bodyD.m_invMass, this.m_iA = this.m_bodyA.m_invI, this.m_iB = this.m_bodyB.m_invI, this.m_iC = this.m_bodyC.m_invI, this.m_iD = this.m_bodyD.m_invI; var t = this.m_bodyA.c_position.a, n = this.m_bodyA.c_velocity.v, r = this.m_bodyA.c_velocity.w, i = this.m_bodyB.c_position.a, a = this.m_bodyB.c_velocity.v, o = this.m_bodyB.c_velocity.w, s = this.m_bodyC.c_position.a, c = this.m_bodyC.c_velocity.v, l = this.m_bodyC.c_velocity.w, u = this.m_bodyD.c_position.a, d = this.m_bodyD.c_velocity.v, f = this.m_bodyD.c_velocity.w, p = z.neo(t), m = z.neo(i), h = z.neo(s), g = z.neo(u); if (this.m_mass = 0, this.m_type1 == oi.TYPE)
            this.m_JvAC = I.zero(), this.m_JwA = 1, this.m_JwC = 1, this.m_mass += this.m_iA + this.m_iC;
        else {
            var _ = z.mulVec2(h, this.m_localAxisC), v = z.mulSub(h, this.m_localAnchorC, this.m_lcC), y = z.mulSub(p, this.m_localAnchorA, this.m_lcA);
            this.m_JvAC = _, this.m_JwC = I.crossVec2Vec2(v, _), this.m_JwA = I.crossVec2Vec2(y, _), this.m_mass += this.m_mC + this.m_mA + this.m_iC * this.m_JwC * this.m_JwC + this.m_iA * this.m_JwA * this.m_JwA;
        } if (this.m_type2 == oi.TYPE)
            this.m_JvBD = I.zero(), this.m_JwB = this.m_ratio, this.m_JwD = this.m_ratio, this.m_mass += this.m_ratio * this.m_ratio * (this.m_iB + this.m_iD);
        else {
            var _ = z.mulVec2(g, this.m_localAxisD), b = z.mulSub(g, this.m_localAnchorD, this.m_lcD), x = z.mulSub(m, this.m_localAnchorB, this.m_lcB);
            this.m_JvBD = I.mulNumVec2(this.m_ratio, _), this.m_JwD = this.m_ratio * I.crossVec2Vec2(b, _), this.m_JwB = this.m_ratio * I.crossVec2Vec2(x, _), this.m_mass += this.m_ratio * this.m_ratio * (this.m_mD + this.m_mB) + this.m_iD * this.m_JwD * this.m_JwD + this.m_iB * this.m_JwB * this.m_JwB;
        } this.m_mass = this.m_mass > 0 ? 1 / this.m_mass : 0, e.warmStarting ? (n.addMul(this.m_mA * this.m_impulse, this.m_JvAC), r += this.m_iA * this.m_impulse * this.m_JwA, a.addMul(this.m_mB * this.m_impulse, this.m_JvBD), o += this.m_iB * this.m_impulse * this.m_JwB, c.subMul(this.m_mC * this.m_impulse, this.m_JvAC), l -= this.m_iC * this.m_impulse * this.m_JwC, d.subMul(this.m_mD * this.m_impulse, this.m_JvBD), f -= this.m_iD * this.m_impulse * this.m_JwD) : this.m_impulse = 0, this.m_bodyA.c_velocity.v.setVec2(n), this.m_bodyA.c_velocity.w = r, this.m_bodyB.c_velocity.v.setVec2(a), this.m_bodyB.c_velocity.w = o, this.m_bodyC.c_velocity.v.setVec2(c), this.m_bodyC.c_velocity.w = l, this.m_bodyD.c_velocity.v.setVec2(d), this.m_bodyD.c_velocity.w = f; }, n.prototype.solveVelocityConstraints = function (e) { var t = this.m_bodyA.c_velocity.v, n = this.m_bodyA.c_velocity.w, r = this.m_bodyB.c_velocity.v, i = this.m_bodyB.c_velocity.w, a = this.m_bodyC.c_velocity.v, o = this.m_bodyC.c_velocity.w, s = this.m_bodyD.c_velocity.v, c = this.m_bodyD.c_velocity.w, l = I.dot(this.m_JvAC, t) - I.dot(this.m_JvAC, a) + I.dot(this.m_JvBD, r) - I.dot(this.m_JvBD, s); l += this.m_JwA * n - this.m_JwC * o + (this.m_JwB * i - this.m_JwD * c); var u = -this.m_mass * l; this.m_impulse += u, t.addMul(this.m_mA * u, this.m_JvAC), n += this.m_iA * u * this.m_JwA, r.addMul(this.m_mB * u, this.m_JvBD), i += this.m_iB * u * this.m_JwB, a.subMul(this.m_mC * u, this.m_JvAC), o -= this.m_iC * u * this.m_JwC, s.subMul(this.m_mD * u, this.m_JvBD), c -= this.m_iD * u * this.m_JwD, this.m_bodyA.c_velocity.v.setVec2(t), this.m_bodyA.c_velocity.w = n, this.m_bodyB.c_velocity.v.setVec2(r), this.m_bodyB.c_velocity.w = i, this.m_bodyC.c_velocity.v.setVec2(a), this.m_bodyC.c_velocity.w = o, this.m_bodyD.c_velocity.v.setVec2(s), this.m_bodyD.c_velocity.w = c; }, n.prototype.solvePositionConstraints = function (e) { var t = this.m_bodyA.c_position.c, n = this.m_bodyA.c_position.a, r = this.m_bodyB.c_position.c, i = this.m_bodyB.c_position.a, a = this.m_bodyC.c_position.c, o = this.m_bodyC.c_position.a, s = this.m_bodyD.c_position.c, c = this.m_bodyD.c_position.a, l = z.neo(n), u = z.neo(i), d = z.neo(o), f = z.neo(c), p = 0, m, h, g, _, v, y, b, x, S = 0; if (this.m_type1 == oi.TYPE)
            g = I.zero(), v = 1, b = 1, S += this.m_iA + this.m_iC, m = n - o - this.m_referenceAngleA;
        else {
            var C = z.mulVec2(d, this.m_localAxisC), w = z.mulSub(d, this.m_localAnchorC, this.m_lcC), T = z.mulSub(l, this.m_localAnchorA, this.m_lcA);
            g = C, b = I.crossVec2Vec2(w, C), v = I.crossVec2Vec2(T, C), S += this.m_mC + this.m_mA + this.m_iC * b * b + this.m_iA * v * v;
            var E = I.sub(this.m_localAnchorC, this.m_lcC), D = z.mulTVec2(d, I.add(T, I.sub(t, a)));
            m = I.dot(I.sub(D, E), this.m_localAxisC);
        } if (this.m_type2 == oi.TYPE)
            _ = I.zero(), y = this.m_ratio, x = this.m_ratio, S += this.m_ratio * this.m_ratio * (this.m_iB + this.m_iD), h = i - c - this.m_referenceAngleB;
        else {
            var C = z.mulVec2(f, this.m_localAxisD), O = z.mulSub(f, this.m_localAnchorD, this.m_lcD), k = z.mulSub(u, this.m_localAnchorB, this.m_lcB);
            _ = I.mulNumVec2(this.m_ratio, C), x = this.m_ratio * I.crossVec2Vec2(O, C), y = this.m_ratio * I.crossVec2Vec2(k, C), S += this.m_ratio * this.m_ratio * (this.m_mD + this.m_mB) + this.m_iD * x * x + this.m_iB * y * y;
            var A = I.sub(this.m_localAnchorD, this.m_lcD), j = z.mulTVec2(f, I.add(k, I.sub(r, s)));
            h = I.dot(j, this.m_localAxisD) - I.dot(A, this.m_localAxisD);
        } var ee = m + this.m_ratio * h - this.m_constant, M = 0; return S > 0 && (M = -ee / S), t.addMul(this.m_mA * M, g), n += this.m_iA * M * v, r.addMul(this.m_mB * M, _), i += this.m_iB * M * y, a.subMul(this.m_mC * M, g), o -= this.m_iC * M * b, s.subMul(this.m_mD * M, _), c -= this.m_iD * M * x, this.m_bodyA.c_position.c.setVec2(t), this.m_bodyA.c_position.a = n, this.m_bodyB.c_position.c.setVec2(r), this.m_bodyB.c_position.a = i, this.m_bodyC.c_position.c.setVec2(a), this.m_bodyC.c_position.a = o, this.m_bodyD.c_position.c.setVec2(s), this.m_bodyD.c_position.a = c, p < R.linearSlop; }, n.TYPE = "gear-joint", n; })(wt), hi = { maxForce: 1, maxTorque: 1, correctionFactor: .3 }, gi = (function (e) { t(n, e); function n(t, r, i) { var a = this; return a instanceof n ? (t = Ce(t, hi), a = e.call(this, t, r, i) || this, r = a.m_bodyA, i = a.m_bodyB, a.m_type = n.TYPE, a.m_linearOffset = I.isValid(t.linearOffset) ? I.clone(t.linearOffset) : r.getLocalPoint(i.getPosition()), a.m_angularOffset = Number.isFinite(t.angularOffset) ? t.angularOffset : i.getAngle() - r.getAngle(), a.m_linearImpulse = I.zero(), a.m_angularImpulse = 0, a.m_maxForce = t.maxForce, a.m_maxTorque = t.maxTorque, a.m_correctionFactor = t.correctionFactor, a) : new n(t, r, i); } return n.prototype._serialize = function () { return { type: this.m_type, bodyA: this.m_bodyA, bodyB: this.m_bodyB, collideConnected: this.m_collideConnected, maxForce: this.m_maxForce, maxTorque: this.m_maxTorque, correctionFactor: this.m_correctionFactor, linearOffset: this.m_linearOffset, angularOffset: this.m_angularOffset }; }, n._deserialize = function (e, t, r) { return e = Se({}, e), e.bodyA = r(B, e.bodyA, t), e.bodyB = r(B, e.bodyB, t), new n(e); }, n.prototype._reset = function (e) { Number.isFinite(e.angularOffset) && (this.m_angularOffset = e.angularOffset), Number.isFinite(e.maxForce) && (this.m_maxForce = e.maxForce), Number.isFinite(e.maxTorque) && (this.m_maxTorque = e.maxTorque), Number.isFinite(e.correctionFactor) && (this.m_correctionFactor = e.correctionFactor), I.isValid(e.linearOffset) && this.m_linearOffset.set(e.linearOffset); }, n.prototype.setMaxForce = function (e) { this.m_maxForce = e; }, n.prototype.getMaxForce = function () { return this.m_maxForce; }, n.prototype.setMaxTorque = function (e) { this.m_maxTorque = e; }, n.prototype.getMaxTorque = function () { return this.m_maxTorque; }, n.prototype.setCorrectionFactor = function (e) { this.m_correctionFactor = e; }, n.prototype.getCorrectionFactor = function () { return this.m_correctionFactor; }, n.prototype.setLinearOffset = function (e) { (e.x != this.m_linearOffset.x || e.y != this.m_linearOffset.y) && (this.m_bodyA.setAwake(!0), this.m_bodyB.setAwake(!0), this.m_linearOffset.set(e)); }, n.prototype.getLinearOffset = function () { return this.m_linearOffset; }, n.prototype.setAngularOffset = function (e) { e != this.m_angularOffset && (this.m_bodyA.setAwake(!0), this.m_bodyB.setAwake(!0), this.m_angularOffset = e); }, n.prototype.getAngularOffset = function () { return this.m_angularOffset; }, n.prototype.getAnchorA = function () { return this.m_bodyA.getPosition(); }, n.prototype.getAnchorB = function () { return this.m_bodyB.getPosition(); }, n.prototype.getReactionForce = function (e) { return I.mulNumVec2(e, this.m_linearImpulse); }, n.prototype.getReactionTorque = function (e) { return e * this.m_angularImpulse; }, n.prototype.initVelocityConstraints = function (e) { this.m_localCenterA = this.m_bodyA.m_sweep.localCenter, this.m_localCenterB = this.m_bodyB.m_sweep.localCenter, this.m_invMassA = this.m_bodyA.m_invMass, this.m_invMassB = this.m_bodyB.m_invMass, this.m_invIA = this.m_bodyA.m_invI, this.m_invIB = this.m_bodyB.m_invI; var t = this.m_bodyA.c_position.c, n = this.m_bodyA.c_position.a, r = this.m_bodyA.c_velocity.v, i = this.m_bodyA.c_velocity.w, a = this.m_bodyB.c_position.c, o = this.m_bodyB.c_position.a, s = this.m_bodyB.c_velocity.v, c = this.m_bodyB.c_velocity.w, l = z.neo(n), u = z.neo(o); this.m_rA = z.mulVec2(l, I.sub(this.m_linearOffset, this.m_localCenterA)), this.m_rB = z.mulVec2(u, I.neg(this.m_localCenterB)); var d = this.m_invMassA, f = this.m_invMassB, p = this.m_invIA, m = this.m_invIB, h = new Nn; if (h.ex.x = d + f + p * this.m_rA.y * this.m_rA.y + m * this.m_rB.y * this.m_rB.y, h.ex.y = -p * this.m_rA.x * this.m_rA.y - m * this.m_rB.x * this.m_rB.y, h.ey.x = h.ex.y, h.ey.y = d + f + p * this.m_rA.x * this.m_rA.x + m * this.m_rB.x * this.m_rB.x, this.m_linearMass = h.getInverse(), this.m_angularMass = p + m, this.m_angularMass > 0 && (this.m_angularMass = 1 / this.m_angularMass), this.m_linearError = I.zero(), this.m_linearError.addCombine(1, a, 1, this.m_rB), this.m_linearError.subCombine(1, t, 1, this.m_rA), this.m_angularError = o - n - this.m_angularOffset, e.warmStarting) {
            this.m_linearImpulse.mul(e.dtRatio), this.m_angularImpulse *= e.dtRatio;
            var g = I.neo(this.m_linearImpulse.x, this.m_linearImpulse.y);
            r.subMul(d, g), i -= p * (I.crossVec2Vec2(this.m_rA, g) + this.m_angularImpulse), s.addMul(f, g), c += m * (I.crossVec2Vec2(this.m_rB, g) + this.m_angularImpulse);
        }
        else
            this.m_linearImpulse.setZero(), this.m_angularImpulse = 0; this.m_bodyA.c_velocity.v = r, this.m_bodyA.c_velocity.w = i, this.m_bodyB.c_velocity.v = s, this.m_bodyB.c_velocity.w = c; }, n.prototype.solveVelocityConstraints = function (e) { var t = this.m_bodyA.c_velocity.v, n = this.m_bodyA.c_velocity.w, r = this.m_bodyB.c_velocity.v, i = this.m_bodyB.c_velocity.w, o = this.m_invMassA, s = this.m_invMassB, c = this.m_invIA, l = this.m_invIB, u = e.dt, d = e.inv_dt, f = i - n + d * this.m_correctionFactor * this.m_angularError, p = -this.m_angularMass * f, m = this.m_angularImpulse, h = u * this.m_maxTorque; this.m_angularImpulse = a(this.m_angularImpulse + p, -h, h), p = this.m_angularImpulse - m, n -= c * p, i += l * p; var f = I.zero(); f.addCombine(1, r, 1, I.crossNumVec2(i, this.m_rB)), f.subCombine(1, t, 1, I.crossNumVec2(n, this.m_rA)), f.addMul(d * this.m_correctionFactor, this.m_linearError); var p = I.neg(Nn.mulVec2(this.m_linearMass, f)), m = I.clone(this.m_linearImpulse); this.m_linearImpulse.add(p); var h = u * this.m_maxForce; this.m_linearImpulse.clamp(h), p = I.sub(this.m_linearImpulse, m), t.subMul(o, p), n -= c * I.crossVec2Vec2(this.m_rA, p), r.addMul(s, p), i += l * I.crossVec2Vec2(this.m_rB, p), this.m_bodyA.c_velocity.v = t, this.m_bodyA.c_velocity.w = n, this.m_bodyB.c_velocity.v = r, this.m_bodyB.c_velocity.w = i; }, n.prototype.solvePositionConstraints = function (e) { return !0; }, n.TYPE = "motor-joint", n; })(wt), _i = Math.PI, vi = { maxForce: 0, frequencyHz: 5, dampingRatio: .7 }, yi = (function (e) { t(n, e); function n(t, r, i, a) { var o = this; return o instanceof n ? (t = Ce(t, vi), o = e.call(this, t, r, i) || this, r = o.m_bodyA, i = o.m_bodyB, o.m_type = n.TYPE, I.isValid(a) ? o.m_targetA = I.clone(a) : I.isValid(t.target) ? o.m_targetA = I.clone(t.target) : o.m_targetA = I.zero(), o.m_localAnchorB = nt.mulTVec2(i.getTransform(), o.m_targetA), o.m_maxForce = t.maxForce, o.m_impulse = I.zero(), o.m_frequencyHz = t.frequencyHz, o.m_dampingRatio = t.dampingRatio, o.m_beta = 0, o.m_gamma = 0, o.m_rB = I.zero(), o.m_localCenterB = I.zero(), o.m_invMassB = 0, o.m_invIB = 0, o.m_mass = new Nn, o.m_C = I.zero(), o) : new n(t, r, i, a); } return n.prototype._serialize = function () { return { type: this.m_type, bodyA: this.m_bodyA, bodyB: this.m_bodyB, collideConnected: this.m_collideConnected, target: this.m_targetA, maxForce: this.m_maxForce, frequencyHz: this.m_frequencyHz, dampingRatio: this.m_dampingRatio, _localAnchorB: this.m_localAnchorB }; }, n._deserialize = function (e, t, r) { e = Se({}, e), e.bodyA = r(B, e.bodyA, t), e.bodyB = r(B, e.bodyB, t), e.target = I.clone(e.target); var i = new n(e); return e._localAnchorB && (i.m_localAnchorB = e._localAnchorB), i; }, n.prototype._reset = function (e) { Number.isFinite(e.maxForce) && (this.m_maxForce = e.maxForce), Number.isFinite(e.frequencyHz) && (this.m_frequencyHz = e.frequencyHz), Number.isFinite(e.dampingRatio) && (this.m_dampingRatio = e.dampingRatio); }, n.prototype.setTarget = function (e) { I.areEqual(e, this.m_targetA) || (this.m_bodyB.setAwake(!0), this.m_targetA.set(e)); }, n.prototype.getTarget = function () { return this.m_targetA; }, n.prototype.setMaxForce = function (e) { this.m_maxForce = e; }, n.prototype.getMaxForce = function () { return this.m_maxForce; }, n.prototype.setFrequency = function (e) { this.m_frequencyHz = e; }, n.prototype.getFrequency = function () { return this.m_frequencyHz; }, n.prototype.setDampingRatio = function (e) { this.m_dampingRatio = e; }, n.prototype.getDampingRatio = function () { return this.m_dampingRatio; }, n.prototype.getAnchorA = function () { return I.clone(this.m_targetA); }, n.prototype.getAnchorB = function () { return this.m_bodyB.getWorldPoint(this.m_localAnchorB); }, n.prototype.getReactionForce = function (e) { return I.mulNumVec2(e, this.m_impulse); }, n.prototype.getReactionTorque = function (e) { return e * 0; }, n.prototype.shiftOrigin = function (e) { this.m_targetA.sub(e); }, n.prototype.initVelocityConstraints = function (e) { this.m_localCenterB = this.m_bodyB.m_sweep.localCenter, this.m_invMassB = this.m_bodyB.m_invMass, this.m_invIB = this.m_bodyB.m_invI; var t = this.m_bodyB.c_position, n = this.m_bodyB.c_velocity, r = t.c, i = t.a, a = n.v, o = n.w, s = z.neo(i), c = this.m_bodyB.getMass(), l = 2 * _i * this.m_frequencyHz, u = 2 * c * this.m_dampingRatio * l, d = l * l * c, f = e.dt; this.m_gamma = f * (u + f * d), this.m_gamma != 0 && (this.m_gamma = 1 / this.m_gamma), this.m_beta = f * d * this.m_gamma, this.m_rB = z.mulVec2(s, I.sub(this.m_localAnchorB, this.m_localCenterB)); var p = new Nn; p.ex.x = this.m_invMassB + this.m_invIB * this.m_rB.y * this.m_rB.y + this.m_gamma, p.ex.y = -this.m_invIB * this.m_rB.x * this.m_rB.y, p.ey.x = p.ex.y, p.ey.y = this.m_invMassB + this.m_invIB * this.m_rB.x * this.m_rB.x + this.m_gamma, this.m_mass = p.getInverse(), this.m_C.setVec2(r), this.m_C.addCombine(1, this.m_rB, -1, this.m_targetA), this.m_C.mul(this.m_beta), o *= .98, e.warmStarting ? (this.m_impulse.mul(e.dtRatio), a.addMul(this.m_invMassB, this.m_impulse), o += this.m_invIB * I.crossVec2Vec2(this.m_rB, this.m_impulse)) : this.m_impulse.setZero(), n.v.setVec2(a), n.w = o; }, n.prototype.solveVelocityConstraints = function (e) { var t = this.m_bodyB.c_velocity, n = I.clone(t.v), r = t.w, i = I.crossNumVec2(r, this.m_rB); i.add(n), i.addCombine(1, this.m_C, this.m_gamma, this.m_impulse), i.neg(); var a = Nn.mulVec2(this.m_mass, i), o = I.clone(this.m_impulse); this.m_impulse.add(a); var s = e.dt * this.m_maxForce; this.m_impulse.clamp(s), a = I.sub(this.m_impulse, o), n.addMul(this.m_invMassB, a), r += this.m_invIB * I.crossVec2Vec2(this.m_rB, a), t.v.setVec2(n), t.w = r; }, n.prototype.solvePositionConstraints = function (e) { return !0; }, n.TYPE = "mouse-joint", n; })(wt), bi = Math.abs, xi = { collideConnected: !0 }, Si = (function (e) { t(n, e); function n(t, r, i, a, o, s, c, l) { var u = this; return u instanceof n ? (t = Ce(t, xi), u = e.call(this, t, r, i) || this, r = u.m_bodyA, i = u.m_bodyB, u.m_type = n.TYPE, u.m_groundAnchorA = I.clone(a || t.groundAnchorA || I.neo(-1, 1)), u.m_groundAnchorB = I.clone(o || t.groundAnchorB || I.neo(1, 1)), u.m_localAnchorA = I.clone(s ? r.getLocalPoint(s) : t.localAnchorA || I.neo(-1, 0)), u.m_localAnchorB = I.clone(c ? i.getLocalPoint(c) : t.localAnchorB || I.neo(1, 0)), u.m_lengthA = Number.isFinite(t.lengthA) ? t.lengthA : I.distance(s, a), u.m_lengthB = Number.isFinite(t.lengthB) ? t.lengthB : I.distance(c, o), u.m_ratio = Number.isFinite(l) ? l : t.ratio, u.m_constant = u.m_lengthA + u.m_ratio * u.m_lengthB, u.m_impulse = 0, u) : new n(t, r, i, a, o, s, c, l); } return n.prototype._serialize = function () { return { type: this.m_type, bodyA: this.m_bodyA, bodyB: this.m_bodyB, collideConnected: this.m_collideConnected, groundAnchorA: this.m_groundAnchorA, groundAnchorB: this.m_groundAnchorB, localAnchorA: this.m_localAnchorA, localAnchorB: this.m_localAnchorB, lengthA: this.m_lengthA, lengthB: this.m_lengthB, ratio: this.m_ratio }; }, n._deserialize = function (e, t, r) { return e = Se({}, e), e.bodyA = r(B, e.bodyA, t), e.bodyB = r(B, e.bodyB, t), new n(e); }, n.prototype._reset = function (e) { I.isValid(e.groundAnchorA) && this.m_groundAnchorA.set(e.groundAnchorA), I.isValid(e.groundAnchorB) && this.m_groundAnchorB.set(e.groundAnchorB), I.isValid(e.localAnchorA) ? this.m_localAnchorA.set(e.localAnchorA) : I.isValid(e.anchorA) && this.m_localAnchorA.set(this.m_bodyA.getLocalPoint(e.anchorA)), I.isValid(e.localAnchorB) ? this.m_localAnchorB.set(e.localAnchorB) : I.isValid(e.anchorB) && this.m_localAnchorB.set(this.m_bodyB.getLocalPoint(e.anchorB)), Number.isFinite(e.lengthA) && (this.m_lengthA = e.lengthA), Number.isFinite(e.lengthB) && (this.m_lengthB = e.lengthB), Number.isFinite(e.ratio) && (this.m_ratio = e.ratio); }, n.prototype.getGroundAnchorA = function () { return this.m_groundAnchorA; }, n.prototype.getGroundAnchorB = function () { return this.m_groundAnchorB; }, n.prototype.getLengthA = function () { return this.m_lengthA; }, n.prototype.getLengthB = function () { return this.m_lengthB; }, n.prototype.getRatio = function () { return this.m_ratio; }, n.prototype.getCurrentLengthA = function () { var e = this.m_bodyA.getWorldPoint(this.m_localAnchorA), t = this.m_groundAnchorA; return I.distance(e, t); }, n.prototype.getCurrentLengthB = function () { var e = this.m_bodyB.getWorldPoint(this.m_localAnchorB), t = this.m_groundAnchorB; return I.distance(e, t); }, n.prototype.shiftOrigin = function (e) { this.m_groundAnchorA.sub(e), this.m_groundAnchorB.sub(e); }, n.prototype.getAnchorA = function () { return this.m_bodyA.getWorldPoint(this.m_localAnchorA); }, n.prototype.getAnchorB = function () { return this.m_bodyB.getWorldPoint(this.m_localAnchorB); }, n.prototype.getReactionForce = function (e) { return I.mulNumVec2(this.m_impulse, this.m_uB).mul(e); }, n.prototype.getReactionTorque = function (e) { return 0; }, n.prototype.initVelocityConstraints = function (e) { this.m_localCenterA = this.m_bodyA.m_sweep.localCenter, this.m_localCenterB = this.m_bodyB.m_sweep.localCenter, this.m_invMassA = this.m_bodyA.m_invMass, this.m_invMassB = this.m_bodyB.m_invMass, this.m_invIA = this.m_bodyA.m_invI, this.m_invIB = this.m_bodyB.m_invI; var t = this.m_bodyA.c_position.c, n = this.m_bodyA.c_position.a, r = this.m_bodyA.c_velocity.v, i = this.m_bodyA.c_velocity.w, a = this.m_bodyB.c_position.c, o = this.m_bodyB.c_position.a, s = this.m_bodyB.c_velocity.v, c = this.m_bodyB.c_velocity.w, l = z.neo(n), u = z.neo(o); this.m_rA = z.mulVec2(l, I.sub(this.m_localAnchorA, this.m_localCenterA)), this.m_rB = z.mulVec2(u, I.sub(this.m_localAnchorB, this.m_localCenterB)), this.m_uA = I.sub(I.add(t, this.m_rA), this.m_groundAnchorA), this.m_uB = I.sub(I.add(a, this.m_rB), this.m_groundAnchorB); var d = this.m_uA.length(), f = this.m_uB.length(); d > 10 * R.linearSlop ? this.m_uA.mul(1 / d) : this.m_uA.setZero(), f > 10 * R.linearSlop ? this.m_uB.mul(1 / f) : this.m_uB.setZero(); var p = I.crossVec2Vec2(this.m_rA, this.m_uA), m = I.crossVec2Vec2(this.m_rB, this.m_uB), h = this.m_invMassA + this.m_invIA * p * p, g = this.m_invMassB + this.m_invIB * m * m; if (this.m_mass = h + this.m_ratio * this.m_ratio * g, this.m_mass > 0 && (this.m_mass = 1 / this.m_mass), e.warmStarting) {
            this.m_impulse *= e.dtRatio;
            var _ = I.mulNumVec2(-this.m_impulse, this.m_uA), v = I.mulNumVec2(-this.m_ratio * this.m_impulse, this.m_uB);
            r.addMul(this.m_invMassA, _), i += this.m_invIA * I.crossVec2Vec2(this.m_rA, _), s.addMul(this.m_invMassB, v), c += this.m_invIB * I.crossVec2Vec2(this.m_rB, v);
        }
        else
            this.m_impulse = 0; this.m_bodyA.c_velocity.v = r, this.m_bodyA.c_velocity.w = i, this.m_bodyB.c_velocity.v = s, this.m_bodyB.c_velocity.w = c; }, n.prototype.solveVelocityConstraints = function (e) { var t = this.m_bodyA.c_velocity.v, n = this.m_bodyA.c_velocity.w, r = this.m_bodyB.c_velocity.v, i = this.m_bodyB.c_velocity.w, a = I.add(t, I.crossNumVec2(n, this.m_rA)), o = I.add(r, I.crossNumVec2(i, this.m_rB)), s = -I.dot(this.m_uA, a) - this.m_ratio * I.dot(this.m_uB, o), c = -this.m_mass * s; this.m_impulse += c; var l = I.mulNumVec2(-c, this.m_uA), u = I.mulNumVec2(-this.m_ratio * c, this.m_uB); t.addMul(this.m_invMassA, l), n += this.m_invIA * I.crossVec2Vec2(this.m_rA, l), r.addMul(this.m_invMassB, u), i += this.m_invIB * I.crossVec2Vec2(this.m_rB, u), this.m_bodyA.c_velocity.v = t, this.m_bodyA.c_velocity.w = n, this.m_bodyB.c_velocity.v = r, this.m_bodyB.c_velocity.w = i; }, n.prototype.solvePositionConstraints = function (e) { var t = this.m_bodyA.c_position.c, n = this.m_bodyA.c_position.a, r = this.m_bodyB.c_position.c, i = this.m_bodyB.c_position.a, a = z.neo(n), o = z.neo(i), s = z.mulVec2(a, I.sub(this.m_localAnchorA, this.m_localCenterA)), c = z.mulVec2(o, I.sub(this.m_localAnchorB, this.m_localCenterB)), l = I.sub(I.add(t, this.m_rA), this.m_groundAnchorA), u = I.sub(I.add(r, this.m_rB), this.m_groundAnchorB), d = l.length(), f = u.length(); d > 10 * R.linearSlop ? l.mul(1 / d) : l.setZero(), f > 10 * R.linearSlop ? u.mul(1 / f) : u.setZero(); var p = I.crossVec2Vec2(s, l), m = I.crossVec2Vec2(c, u), h = this.m_invMassA + this.m_invIA * p * p, g = this.m_invMassB + this.m_invIB * m * m, _ = h + this.m_ratio * this.m_ratio * g; _ > 0 && (_ = 1 / _); var v = this.m_constant - d - this.m_ratio * f, y = bi(v), b = -_ * v, x = I.mulNumVec2(-b, l), S = I.mulNumVec2(-this.m_ratio * b, u); return t.addMul(this.m_invMassA, x), n += this.m_invIA * I.crossVec2Vec2(s, x), r.addMul(this.m_invMassB, S), i += this.m_invIB * I.crossVec2Vec2(c, S), this.m_bodyA.c_position.c = t, this.m_bodyA.c_position.a = n, this.m_bodyB.c_position.c = r, this.m_bodyB.c_position.a = i, y < R.linearSlop; }, n.TYPE = "pulley-joint", n; })(wt), Ci = Math.min, (function (e) { e[e.inactiveLimit = 0] = "inactiveLimit", e[e.atLowerLimit = 1] = "atLowerLimit", e[e.atUpperLimit = 2] = "atUpperLimit", e[e.equalLimits = 3] = "equalLimits"; })(wi || (wi = {})), Ti = { maxLength: 0 }, Ei = (function (e) { t(n, e); function n(t, r, i, a) { var o = this; return o instanceof n ? (t = Ce(t, Ti), o = e.call(this, t, r, i) || this, r = o.m_bodyA, i = o.m_bodyB, o.m_type = n.TYPE, o.m_localAnchorA = I.clone(a ? r.getLocalPoint(a) : t.localAnchorA || I.neo(-1, 0)), o.m_localAnchorB = I.clone(a ? i.getLocalPoint(a) : t.localAnchorB || I.neo(1, 0)), o.m_maxLength = t.maxLength, o.m_mass = 0, o.m_impulse = 0, o.m_length = 0, o.m_state = wi.inactiveLimit, o) : new n(t, r, i, a); } return n.prototype._serialize = function () { return { type: this.m_type, bodyA: this.m_bodyA, bodyB: this.m_bodyB, collideConnected: this.m_collideConnected, localAnchorA: this.m_localAnchorA, localAnchorB: this.m_localAnchorB, maxLength: this.m_maxLength }; }, n._deserialize = function (e, t, r) { return e = Se({}, e), e.bodyA = r(B, e.bodyA, t), e.bodyB = r(B, e.bodyB, t), new n(e); }, n.prototype._reset = function (e) { Number.isFinite(e.maxLength) && (this.m_maxLength = e.maxLength); }, n.prototype.getLocalAnchorA = function () { return this.m_localAnchorA; }, n.prototype.getLocalAnchorB = function () { return this.m_localAnchorB; }, n.prototype.setMaxLength = function (e) { this.m_maxLength = e; }, n.prototype.getMaxLength = function () { return this.m_maxLength; }, n.prototype.getLimitState = function () { return this.m_state; }, n.prototype.getAnchorA = function () { return this.m_bodyA.getWorldPoint(this.m_localAnchorA); }, n.prototype.getAnchorB = function () { return this.m_bodyB.getWorldPoint(this.m_localAnchorB); }, n.prototype.getReactionForce = function (e) { return I.mulNumVec2(this.m_impulse, this.m_u).mul(e); }, n.prototype.getReactionTorque = function (e) { return 0; }, n.prototype.initVelocityConstraints = function (e) { this.m_localCenterA = this.m_bodyA.m_sweep.localCenter, this.m_localCenterB = this.m_bodyB.m_sweep.localCenter, this.m_invMassA = this.m_bodyA.m_invMass, this.m_invMassB = this.m_bodyB.m_invMass, this.m_invIA = this.m_bodyA.m_invI, this.m_invIB = this.m_bodyB.m_invI; var t = this.m_bodyA.c_position.c, n = this.m_bodyA.c_position.a, r = this.m_bodyA.c_velocity.v, i = this.m_bodyA.c_velocity.w, a = this.m_bodyB.c_position.c, o = this.m_bodyB.c_position.a, s = this.m_bodyB.c_velocity.v, c = this.m_bodyB.c_velocity.w, l = z.neo(n), u = z.neo(o); if (this.m_rA = z.mulSub(l, this.m_localAnchorA, this.m_localCenterA), this.m_rB = z.mulSub(u, this.m_localAnchorB, this.m_localCenterB), this.m_u = I.zero(), this.m_u.addCombine(1, a, 1, this.m_rB), this.m_u.subCombine(1, t, 1, this.m_rA), this.m_length = this.m_u.length(), this.m_state = this.m_length - this.m_maxLength > 0 ? wi.atUpperLimit : wi.inactiveLimit, this.m_length > R.linearSlop)
            this.m_u.mul(1 / this.m_length);
        else {
            this.m_u.setZero(), this.m_mass = 0, this.m_impulse = 0;
            return;
        } var d = I.crossVec2Vec2(this.m_rA, this.m_u), f = I.crossVec2Vec2(this.m_rB, this.m_u), p = this.m_invMassA + this.m_invIA * d * d + this.m_invMassB + this.m_invIB * f * f; if (this.m_mass = p == 0 ? 0 : 1 / p, e.warmStarting) {
            this.m_impulse *= e.dtRatio;
            var m = I.mulNumVec2(this.m_impulse, this.m_u);
            r.subMul(this.m_invMassA, m), i -= this.m_invIA * I.crossVec2Vec2(this.m_rA, m), s.addMul(this.m_invMassB, m), c += this.m_invIB * I.crossVec2Vec2(this.m_rB, m);
        }
        else
            this.m_impulse = 0; this.m_bodyA.c_velocity.v.setVec2(r), this.m_bodyA.c_velocity.w = i, this.m_bodyB.c_velocity.v.setVec2(s), this.m_bodyB.c_velocity.w = c; }, n.prototype.solveVelocityConstraints = function (e) { var t = this.m_bodyA.c_velocity.v, n = this.m_bodyA.c_velocity.w, r = this.m_bodyB.c_velocity.v, i = this.m_bodyB.c_velocity.w, a = I.addCrossNumVec2(t, n, this.m_rA), o = I.addCrossNumVec2(r, i, this.m_rB), s = this.m_length - this.m_maxLength, c = I.dot(this.m_u, I.sub(o, a)); s < 0 && (c += e.inv_dt * s); var l = -this.m_mass * c, u = this.m_impulse; this.m_impulse = Ci(0, this.m_impulse + l), l = this.m_impulse - u; var d = I.mulNumVec2(l, this.m_u); t.subMul(this.m_invMassA, d), n -= this.m_invIA * I.crossVec2Vec2(this.m_rA, d), r.addMul(this.m_invMassB, d), i += this.m_invIB * I.crossVec2Vec2(this.m_rB, d), this.m_bodyA.c_velocity.v = t, this.m_bodyA.c_velocity.w = n, this.m_bodyB.c_velocity.v = r, this.m_bodyB.c_velocity.w = i; }, n.prototype.solvePositionConstraints = function (e) { var t = this.m_bodyA.c_position.c, n = this.m_bodyA.c_position.a, r = this.m_bodyB.c_position.c, i = this.m_bodyB.c_position.a, o = z.neo(n), s = z.neo(i), c = z.mulSub(o, this.m_localAnchorA, this.m_localCenterA), l = z.mulSub(s, this.m_localAnchorB, this.m_localCenterB), u = I.zero(); u.addCombine(1, r, 1, l), u.subCombine(1, t, 1, c); var d = u.normalize(), f = d - this.m_maxLength; f = a(f, 0, R.maxLinearCorrection); var p = -this.m_mass * f, m = I.mulNumVec2(p, u); return t.subMul(this.m_invMassA, m), n -= this.m_invIA * I.crossVec2Vec2(c, m), r.addMul(this.m_invMassB, m), i += this.m_invIB * I.crossVec2Vec2(l, m), this.m_bodyA.c_position.c.setVec2(t), this.m_bodyA.c_position.a = n, this.m_bodyB.c_position.c.setVec2(r), this.m_bodyB.c_position.a = i, d - this.m_maxLength < R.linearSlop; }, n.TYPE = "rope-joint", n; })(wt), Di = Math.abs, Oi = Math.PI, ki = { frequencyHz: 0, dampingRatio: 0 }, Ai = (function (e) { t(n, e); function n(t, r, i, a) { var o = this; return o instanceof n ? (t = Ce(t, ki), o = e.call(this, t, r, i) || this, r = o.m_bodyA, i = o.m_bodyB, o.m_type = n.TYPE, o.m_localAnchorA = I.clone(a ? r.getLocalPoint(a) : t.localAnchorA || I.zero()), o.m_localAnchorB = I.clone(a ? i.getLocalPoint(a) : t.localAnchorB || I.zero()), o.m_referenceAngle = Number.isFinite(t.referenceAngle) ? t.referenceAngle : i.getAngle() - r.getAngle(), o.m_frequencyHz = t.frequencyHz, o.m_dampingRatio = t.dampingRatio, o.m_impulse = new K, o.m_bias = 0, o.m_gamma = 0, o.m_mass = new ni, o) : new n(t, r, i, a); } return n.prototype._serialize = function () { return { type: this.m_type, bodyA: this.m_bodyA, bodyB: this.m_bodyB, collideConnected: this.m_collideConnected, frequencyHz: this.m_frequencyHz, dampingRatio: this.m_dampingRatio, localAnchorA: this.m_localAnchorA, localAnchorB: this.m_localAnchorB, referenceAngle: this.m_referenceAngle }; }, n._deserialize = function (e, t, r) { return e = Se({}, e), e.bodyA = r(B, e.bodyA, t), e.bodyB = r(B, e.bodyB, t), new n(e); }, n.prototype._reset = function (e) { e.anchorA ? this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(e.anchorA)) : e.localAnchorA && this.m_localAnchorA.setVec2(e.localAnchorA), e.anchorB ? this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(e.anchorB)) : e.localAnchorB && this.m_localAnchorB.setVec2(e.localAnchorB), Number.isFinite(e.frequencyHz) && (this.m_frequencyHz = e.frequencyHz), Number.isFinite(e.dampingRatio) && (this.m_dampingRatio = e.dampingRatio); }, n.prototype.getLocalAnchorA = function () { return this.m_localAnchorA; }, n.prototype.getLocalAnchorB = function () { return this.m_localAnchorB; }, n.prototype.getReferenceAngle = function () { return this.m_referenceAngle; }, n.prototype.setFrequency = function (e) { this.m_frequencyHz = e; }, n.prototype.getFrequency = function () { return this.m_frequencyHz; }, n.prototype.setDampingRatio = function (e) { this.m_dampingRatio = e; }, n.prototype.getDampingRatio = function () { return this.m_dampingRatio; }, n.prototype.getAnchorA = function () { return this.m_bodyA.getWorldPoint(this.m_localAnchorA); }, n.prototype.getAnchorB = function () { return this.m_bodyB.getWorldPoint(this.m_localAnchorB); }, n.prototype.getReactionForce = function (e) { return I.neo(this.m_impulse.x, this.m_impulse.y).mul(e); }, n.prototype.getReactionTorque = function (e) { return e * this.m_impulse.z; }, n.prototype.initVelocityConstraints = function (e) { this.m_localCenterA = this.m_bodyA.m_sweep.localCenter, this.m_localCenterB = this.m_bodyB.m_sweep.localCenter, this.m_invMassA = this.m_bodyA.m_invMass, this.m_invMassB = this.m_bodyB.m_invMass, this.m_invIA = this.m_bodyA.m_invI, this.m_invIB = this.m_bodyB.m_invI; var t = this.m_bodyA.c_position.a, n = this.m_bodyA.c_velocity.v, r = this.m_bodyA.c_velocity.w, i = this.m_bodyB.c_position.a, a = this.m_bodyB.c_velocity.v, o = this.m_bodyB.c_velocity.w, s = z.neo(t), c = z.neo(i); this.m_rA = z.mulVec2(s, I.sub(this.m_localAnchorA, this.m_localCenterA)), this.m_rB = z.mulVec2(c, I.sub(this.m_localAnchorB, this.m_localCenterB)); var l = this.m_invMassA, u = this.m_invMassB, d = this.m_invIA, f = this.m_invIB, p = new ni; if (p.ex.x = l + u + this.m_rA.y * this.m_rA.y * d + this.m_rB.y * this.m_rB.y * f, p.ey.x = -this.m_rA.y * this.m_rA.x * d - this.m_rB.y * this.m_rB.x * f, p.ez.x = -this.m_rA.y * d - this.m_rB.y * f, p.ex.y = p.ey.x, p.ey.y = l + u + this.m_rA.x * this.m_rA.x * d + this.m_rB.x * this.m_rB.x * f, p.ez.y = this.m_rA.x * d + this.m_rB.x * f, p.ex.z = p.ez.x, p.ey.z = p.ez.y, p.ez.z = d + f, this.m_frequencyHz > 0) {
            p.getInverse22(this.m_mass);
            var m = d + f, h = m > 0 ? 1 / m : 0, g = i - t - this.m_referenceAngle, _ = 2 * Oi * this.m_frequencyHz, v = 2 * h * this.m_dampingRatio * _, y = h * _ * _, b = e.dt;
            this.m_gamma = b * (v + b * y), this.m_gamma = this.m_gamma == 0 ? 0 : 1 / this.m_gamma, this.m_bias = g * b * y * this.m_gamma, m += this.m_gamma, this.m_mass.ez.z = m == 0 ? 0 : 1 / m;
        }
        else
            p.ez.z == 0 ? (p.getInverse22(this.m_mass), this.m_gamma = 0, this.m_bias = 0) : (p.getSymInverse33(this.m_mass), this.m_gamma = 0, this.m_bias = 0); if (e.warmStarting) {
            this.m_impulse.mul(e.dtRatio);
            var x = I.neo(this.m_impulse.x, this.m_impulse.y);
            n.subMul(l, x), r -= d * (I.crossVec2Vec2(this.m_rA, x) + this.m_impulse.z), a.addMul(u, x), o += f * (I.crossVec2Vec2(this.m_rB, x) + this.m_impulse.z);
        }
        else
            this.m_impulse.setZero(); this.m_bodyA.c_velocity.v = n, this.m_bodyA.c_velocity.w = r, this.m_bodyB.c_velocity.v = a, this.m_bodyB.c_velocity.w = o; }, n.prototype.solveVelocityConstraints = function (e) { var t = this.m_bodyA.c_velocity.v, n = this.m_bodyA.c_velocity.w, r = this.m_bodyB.c_velocity.v, i = this.m_bodyB.c_velocity.w, a = this.m_invMassA, o = this.m_invMassB, s = this.m_invIA, c = this.m_invIB; if (this.m_frequencyHz > 0) {
            var l = i - n, u = -this.m_mass.ez.z * (l + this.m_bias + this.m_gamma * this.m_impulse.z);
            this.m_impulse.z += u, n -= s * u, i += c * u;
            var d = I.zero();
            d.addCombine(1, r, 1, I.crossNumVec2(i, this.m_rB)), d.subCombine(1, t, 1, I.crossNumVec2(n, this.m_rA));
            var f = I.neg(ni.mulVec2(this.m_mass, d));
            this.m_impulse.x += f.x, this.m_impulse.y += f.y;
            var p = I.clone(f);
            t.subMul(a, p), n -= s * I.crossVec2Vec2(this.m_rA, p), r.addMul(o, p), i += c * I.crossVec2Vec2(this.m_rB, p);
        }
        else {
            var d = I.zero();
            d.addCombine(1, r, 1, I.crossNumVec2(i, this.m_rB)), d.subCombine(1, t, 1, I.crossNumVec2(n, this.m_rA));
            var l = i - n, m = new K(d.x, d.y, l), h = K.neg(ni.mulVec3(this.m_mass, m));
            this.m_impulse.add(h);
            var p = I.neo(h.x, h.y);
            t.subMul(a, p), n -= s * (I.crossVec2Vec2(this.m_rA, p) + h.z), r.addMul(o, p), i += c * (I.crossVec2Vec2(this.m_rB, p) + h.z);
        } this.m_bodyA.c_velocity.v = t, this.m_bodyA.c_velocity.w = n, this.m_bodyB.c_velocity.v = r, this.m_bodyB.c_velocity.w = i; }, n.prototype.solvePositionConstraints = function (e) { var t = this.m_bodyA.c_position.c, n = this.m_bodyA.c_position.a, r = this.m_bodyB.c_position.c, i = this.m_bodyB.c_position.a, a = z.neo(n), o = z.neo(i), s = this.m_invMassA, c = this.m_invMassB, l = this.m_invIA, u = this.m_invIB, d = z.mulVec2(a, I.sub(this.m_localAnchorA, this.m_localCenterA)), f = z.mulVec2(o, I.sub(this.m_localAnchorB, this.m_localCenterB)), p, m, h = new ni; if (h.ex.x = s + c + d.y * d.y * l + f.y * f.y * u, h.ey.x = -d.y * d.x * l - f.y * f.x * u, h.ez.x = -d.y * l - f.y * u, h.ex.y = h.ey.x, h.ey.y = s + c + d.x * d.x * l + f.x * f.x * u, h.ez.y = d.x * l + f.x * u, h.ex.z = h.ez.x, h.ey.z = h.ez.y, h.ez.z = l + u, this.m_frequencyHz > 0) {
            var g = I.zero();
            g.addCombine(1, r, 1, f), g.subCombine(1, t, 1, d), p = g.length(), m = 0;
            var _ = I.neg(h.solve22(g));
            t.subMul(s, _), n -= l * I.crossVec2Vec2(d, _), r.addMul(c, _), i += u * I.crossVec2Vec2(f, _);
        }
        else {
            var g = I.zero();
            g.addCombine(1, r, 1, f), g.subCombine(1, t, 1, d);
            var v = i - n - this.m_referenceAngle;
            p = g.length(), m = Di(v);
            var y = new K(g.x, g.y, v), b = new K;
            if (h.ez.z > 0)
                b = K.neg(h.solve33(y));
            else {
                var x = I.neg(h.solve22(g));
                b.set(x.x, x.y, 0);
            }
            var _ = I.neo(b.x, b.y);
            t.subMul(s, _), n -= l * (I.crossVec2Vec2(d, _) + b.z), r.addMul(c, _), i += u * (I.crossVec2Vec2(f, _) + b.z);
        } return this.m_bodyA.c_position.c = t, this.m_bodyA.c_position.a = n, this.m_bodyB.c_position.c = r, this.m_bodyB.c_position.a = i, p <= R.linearSlop && m <= R.angularSlop; }, n.TYPE = "weld-joint", n; })(wt), ji = Math.abs, Mi = Math.PI, Ni = { enableMotor: !1, maxMotorTorque: 0, motorSpeed: 0, frequencyHz: 2, dampingRatio: .7 }, Pi = (function (e) { t(n, e); function n(t, r, i, a, o) { var s = this; return s instanceof n ? (t = Ce(t, Ni), s = e.call(this, t, r, i) || this, r = s.m_bodyA, i = s.m_bodyB, s.m_ax = I.zero(), s.m_ay = I.zero(), s.m_type = n.TYPE, s.m_localAnchorA = I.clone(a ? r.getLocalPoint(a) : t.localAnchorA || I.zero()), s.m_localAnchorB = I.clone(a ? i.getLocalPoint(a) : t.localAnchorB || I.zero()), I.isValid(o) ? s.m_localXAxisA = r.getLocalVector(o) : I.isValid(t.localAxisA) ? s.m_localXAxisA = I.clone(t.localAxisA) : I.isValid(t.localAxis) ? s.m_localXAxisA = I.clone(t.localAxis) : s.m_localXAxisA = I.neo(1, 0), s.m_localYAxisA = I.crossNumVec2(1, s.m_localXAxisA), s.m_mass = 0, s.m_impulse = 0, s.m_motorMass = 0, s.m_motorImpulse = 0, s.m_springMass = 0, s.m_springImpulse = 0, s.m_maxMotorTorque = t.maxMotorTorque, s.m_motorSpeed = t.motorSpeed, s.m_enableMotor = t.enableMotor, s.m_frequencyHz = t.frequencyHz, s.m_dampingRatio = t.dampingRatio, s.m_bias = 0, s.m_gamma = 0, s) : new n(t, r, i, a, o); } return n.prototype._serialize = function () { return { type: this.m_type, bodyA: this.m_bodyA, bodyB: this.m_bodyB, collideConnected: this.m_collideConnected, enableMotor: this.m_enableMotor, maxMotorTorque: this.m_maxMotorTorque, motorSpeed: this.m_motorSpeed, frequencyHz: this.m_frequencyHz, dampingRatio: this.m_dampingRatio, localAnchorA: this.m_localAnchorA, localAnchorB: this.m_localAnchorB, localAxisA: this.m_localXAxisA }; }, n._deserialize = function (e, t, r) { return e = Se({}, e), e.bodyA = r(B, e.bodyA, t), e.bodyB = r(B, e.bodyB, t), new n(e); }, n.prototype._reset = function (e) { e.anchorA ? this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(e.anchorA)) : e.localAnchorA && this.m_localAnchorA.setVec2(e.localAnchorA), e.anchorB ? this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(e.anchorB)) : e.localAnchorB && this.m_localAnchorB.setVec2(e.localAnchorB), e.localAxisA && (this.m_localXAxisA.setVec2(e.localAxisA), this.m_localYAxisA.setVec2(I.crossNumVec2(1, e.localAxisA))), e.enableMotor !== void 0 && (this.m_enableMotor = e.enableMotor), Number.isFinite(e.maxMotorTorque) && (this.m_maxMotorTorque = e.maxMotorTorque), Number.isFinite(e.motorSpeed) && (this.m_motorSpeed = e.motorSpeed), Number.isFinite(e.frequencyHz) && (this.m_frequencyHz = e.frequencyHz), Number.isFinite(e.dampingRatio) && (this.m_dampingRatio = e.dampingRatio); }, n.prototype.getLocalAnchorA = function () { return this.m_localAnchorA; }, n.prototype.getLocalAnchorB = function () { return this.m_localAnchorB; }, n.prototype.getLocalAxisA = function () { return this.m_localXAxisA; }, n.prototype.getJointTranslation = function () { var e = this.m_bodyA, t = this.m_bodyB, n = e.getWorldPoint(this.m_localAnchorA), r = t.getWorldPoint(this.m_localAnchorB), i = I.sub(r, n), a = e.getWorldVector(this.m_localXAxisA); return I.dot(i, a); }, n.prototype.getJointSpeed = function () { var e = this.m_bodyA.m_angularVelocity; return this.m_bodyB.m_angularVelocity - e; }, n.prototype.isMotorEnabled = function () { return this.m_enableMotor; }, n.prototype.enableMotor = function (e) { e != this.m_enableMotor && (this.m_bodyA.setAwake(!0), this.m_bodyB.setAwake(!0), this.m_enableMotor = e); }, n.prototype.setMotorSpeed = function (e) { e != this.m_motorSpeed && (this.m_bodyA.setAwake(!0), this.m_bodyB.setAwake(!0), this.m_motorSpeed = e); }, n.prototype.getMotorSpeed = function () { return this.m_motorSpeed; }, n.prototype.setMaxMotorTorque = function (e) { e != this.m_maxMotorTorque && (this.m_bodyA.setAwake(!0), this.m_bodyB.setAwake(!0), this.m_maxMotorTorque = e); }, n.prototype.getMaxMotorTorque = function () { return this.m_maxMotorTorque; }, n.prototype.getMotorTorque = function (e) { return e * this.m_motorImpulse; }, n.prototype.setSpringFrequencyHz = function (e) { this.m_frequencyHz = e; }, n.prototype.getSpringFrequencyHz = function () { return this.m_frequencyHz; }, n.prototype.setSpringDampingRatio = function (e) { this.m_dampingRatio = e; }, n.prototype.getSpringDampingRatio = function () { return this.m_dampingRatio; }, n.prototype.getAnchorA = function () { return this.m_bodyA.getWorldPoint(this.m_localAnchorA); }, n.prototype.getAnchorB = function () { return this.m_bodyB.getWorldPoint(this.m_localAnchorB); }, n.prototype.getReactionForce = function (e) { return I.combine(this.m_impulse, this.m_ay, this.m_springImpulse, this.m_ax).mul(e); }, n.prototype.getReactionTorque = function (e) { return e * this.m_motorImpulse; }, n.prototype.initVelocityConstraints = function (e) { this.m_localCenterA = this.m_bodyA.m_sweep.localCenter, this.m_localCenterB = this.m_bodyB.m_sweep.localCenter, this.m_invMassA = this.m_bodyA.m_invMass, this.m_invMassB = this.m_bodyB.m_invMass, this.m_invIA = this.m_bodyA.m_invI, this.m_invIB = this.m_bodyB.m_invI; var t = this.m_invMassA, n = this.m_invMassB, r = this.m_invIA, i = this.m_invIB, a = this.m_bodyA.c_position.c, o = this.m_bodyA.c_position.a, s = this.m_bodyA.c_velocity.v, c = this.m_bodyA.c_velocity.w, l = this.m_bodyB.c_position.c, u = this.m_bodyB.c_position.a, d = this.m_bodyB.c_velocity.v, f = this.m_bodyB.c_velocity.w, p = z.neo(o), m = z.neo(u), h = z.mulVec2(p, I.sub(this.m_localAnchorA, this.m_localCenterA)), g = z.mulVec2(m, I.sub(this.m_localAnchorB, this.m_localCenterB)), _ = I.zero(); if (_.addCombine(1, l, 1, g), _.subCombine(1, a, 1, h), this.m_ay = z.mulVec2(p, this.m_localYAxisA), this.m_sAy = I.crossVec2Vec2(I.add(_, h), this.m_ay), this.m_sBy = I.crossVec2Vec2(g, this.m_ay), this.m_mass = t + n + r * this.m_sAy * this.m_sAy + i * this.m_sBy * this.m_sBy, this.m_mass > 0 && (this.m_mass = 1 / this.m_mass), this.m_springMass = 0, this.m_bias = 0, this.m_gamma = 0, this.m_frequencyHz > 0) {
            this.m_ax = z.mulVec2(p, this.m_localXAxisA), this.m_sAx = I.crossVec2Vec2(I.add(_, h), this.m_ax), this.m_sBx = I.crossVec2Vec2(g, this.m_ax);
            var v = t + n + r * this.m_sAx * this.m_sAx + i * this.m_sBx * this.m_sBx;
            if (v > 0) {
                this.m_springMass = 1 / v;
                var y = I.dot(_, this.m_ax), b = 2 * Mi * this.m_frequencyHz, x = 2 * this.m_springMass * this.m_dampingRatio * b, S = this.m_springMass * b * b, C = e.dt;
                this.m_gamma = C * (x + C * S), this.m_gamma > 0 && (this.m_gamma = 1 / this.m_gamma), this.m_bias = y * C * S * this.m_gamma, this.m_springMass = v + this.m_gamma, this.m_springMass > 0 && (this.m_springMass = 1 / this.m_springMass);
            }
        }
        else
            this.m_springImpulse = 0; if (this.m_enableMotor ? (this.m_motorMass = r + i, this.m_motorMass > 0 && (this.m_motorMass = 1 / this.m_motorMass)) : (this.m_motorMass = 0, this.m_motorImpulse = 0), e.warmStarting) {
            this.m_impulse *= e.dtRatio, this.m_springImpulse *= e.dtRatio, this.m_motorImpulse *= e.dtRatio;
            var w = I.combine(this.m_impulse, this.m_ay, this.m_springImpulse, this.m_ax), T = this.m_impulse * this.m_sAy + this.m_springImpulse * this.m_sAx + this.m_motorImpulse, E = this.m_impulse * this.m_sBy + this.m_springImpulse * this.m_sBx + this.m_motorImpulse;
            s.subMul(this.m_invMassA, w), c -= this.m_invIA * T, d.addMul(this.m_invMassB, w), f += this.m_invIB * E;
        }
        else
            this.m_impulse = 0, this.m_springImpulse = 0, this.m_motorImpulse = 0; this.m_bodyA.c_velocity.v.setVec2(s), this.m_bodyA.c_velocity.w = c, this.m_bodyB.c_velocity.v.setVec2(d), this.m_bodyB.c_velocity.w = f; }, n.prototype.solveVelocityConstraints = function (e) { var t = this.m_invMassA, n = this.m_invMassB, r = this.m_invIA, i = this.m_invIB, o = this.m_bodyA.c_velocity.v, s = this.m_bodyA.c_velocity.w, c = this.m_bodyB.c_velocity.v, l = this.m_bodyB.c_velocity.w, u = I.dot(this.m_ax, c) - I.dot(this.m_ax, o) + this.m_sBx * l - this.m_sAx * s, d = -this.m_springMass * (u + this.m_bias + this.m_gamma * this.m_springImpulse); this.m_springImpulse += d; var f = I.mulNumVec2(d, this.m_ax), p = d * this.m_sAx, m = d * this.m_sBx; o.subMul(t, f), s -= r * p, c.addMul(n, f), l += i * m; var u = l - s - this.m_motorSpeed, d = -this.m_motorMass * u, h = this.m_motorImpulse, g = e.dt * this.m_maxMotorTorque; this.m_motorImpulse = a(this.m_motorImpulse + d, -g, g), d = this.m_motorImpulse - h, s -= r * d, l += i * d; var u = I.dot(this.m_ay, c) - I.dot(this.m_ay, o) + this.m_sBy * l - this.m_sAy * s, d = -this.m_mass * u; this.m_impulse += d; var f = I.mulNumVec2(d, this.m_ay), p = d * this.m_sAy, m = d * this.m_sBy; o.subMul(t, f), s -= r * p, c.addMul(n, f), l += i * m, this.m_bodyA.c_velocity.v.setVec2(o), this.m_bodyA.c_velocity.w = s, this.m_bodyB.c_velocity.v.setVec2(c), this.m_bodyB.c_velocity.w = l; }, n.prototype.solvePositionConstraints = function (e) { var t = this.m_bodyA.c_position.c, n = this.m_bodyA.c_position.a, r = this.m_bodyB.c_position.c, i = this.m_bodyB.c_position.a, a = z.neo(n), o = z.neo(i), s = z.mulVec2(a, I.sub(this.m_localAnchorA, this.m_localCenterA)), c = z.mulVec2(o, I.sub(this.m_localAnchorB, this.m_localCenterB)), l = I.zero(); l.addCombine(1, r, 1, c), l.subCombine(1, t, 1, s); var u = z.mulVec2(a, this.m_localYAxisA), d = I.crossVec2Vec2(I.add(l, s), u), f = I.crossVec2Vec2(c, u), p = I.dot(l, u), m = this.m_invMassA + this.m_invMassB + this.m_invIA * this.m_sAy * this.m_sAy + this.m_invIB * this.m_sBy * this.m_sBy, h = m == 0 ? 0 : -p / m, g = I.mulNumVec2(h, u), _ = h * d, v = h * f; return t.subMul(this.m_invMassA, g), n -= this.m_invIA * _, r.addMul(this.m_invMassB, g), i += this.m_invIB * v, this.m_bodyA.c_position.c.setVec2(t), this.m_bodyA.c_position.a = n, this.m_bodyB.c_position.c.setVec2(r), this.m_bodyB.c_position.a = i, ji(p) <= R.linearSlop; }, n.TYPE = "wheel-joint", n; })(wt), Fi = 0, Ii = { World: Ar, Body: B, Joint: wt, Fixture: pt, Shape: st }, Li = { Vec2: I, Vec3: K, World: Ar, Body: B, Joint: wt, Fixture: pt, Shape: st }, Ri = (q = {}, q[B.STATIC] = B, q[B.DYNAMIC] = B, q[B.KINEMATIC] = B, q[Ir.TYPE] = Ir, q[Gr.TYPE] = Gr, q[Nr.TYPE] = Nr, q[Yr.TYPE] = Yr, q[$r.TYPE] = $r, q[ti.TYPE] = ti, q[mi.TYPE] = mi, q[gi.TYPE] = gi, q[yi.TYPE] = yi, q[fi.TYPE] = fi, q[Si.TYPE] = Si, q[oi.TYPE] = oi, q[Ei.TYPE] = Ei, q[Ai.TYPE] = Ai, q[Pi.TYPE] = Pi, q), zi = { rootClass: Ar, preSerialize: function (e) { return e; }, postSerialize: function (e, t) { return e; }, preDeserialize: function (e) { return e; }, postDeserialize: function (e, t) { return e; } }, Bi = (function () { function e(e) { var t = this; this.toJson = function (e) { var n = t.options.preSerialize, r = t.options.postSerialize, i = [], a = [e], o = {}; function s(e, t) { if (e.__sid = e.__sid || ++Fi, !o[e.__sid]) {
            a.push(e);
            var n = { refIndex: i.length + a.length, refType: t };
            o[e.__sid] = n;
        } return o[e.__sid]; } function c(e) { e = n(e); var t = e._serialize(); return t = r(t, e), t; } function l(e, t) { if (t === void 0 && (t = !1), typeof e != "object" || !e)
            return e; if (typeof e._serialize == "function") {
            if (!t) {
                for (var n in Ii)
                    if (e instanceof Ii[n])
                        return s(e, n);
            }
            e = c(e);
        } if (Array.isArray(e)) {
            for (var r = [], i = 0; i < e.length; i++)
                r[i] = l(e[i]);
            e = r;
        }
        else {
            var r = {};
            for (var i in e)
                e.hasOwnProperty(i) && (r[i] = l(e[i]));
            e = r;
        } return e; } for (; a.length;) {
            var u = l(a.shift(), !0);
            i.push(u);
        } return i; }, this.fromJson = function (e) { var n = t.options.preDeserialize, r = t.options.postDeserialize, i = t.options.rootClass, a = {}; function o(e, t, i) { if (e && e._deserialize || (e = Ri[t.type]), e && e._deserialize) {
            t = n(t);
            var a = e._deserialize, o = a(t, i, s);
            return o = r(o, t), o;
        } } function s(t, n, r) { if (!(n.refIndex && n.refType))
            return o(t, n, r); var i = n; Li[i.refType] && (t = Li[i.refType]); var s = i.refIndex; if (!a[s]) {
            var c = e[s];
            a[s] = o(t, c, r);
        } return a[s]; } return o(i, e[0], null); }, this.options = Se(Se({}, zi), e); } return e; })(), Vi = new Bi({ rootClass: Ar }), Bi.fromJson = Vi.fromJson, Bi.toJson = Vi.toJson, (function () { function e() { } return e.mount = function (e) { throw Error("Not implemented"); }, e.start = function (t) { var n = e.mount(); return n.start(t), n; }, e; })(), Hi = (function (e) { t(n, e); function n(t, r, i, a) { var o = this; return o instanceof n ? (o = e.call(this) || this, o._setAsBox(t, r, i, a), o) : new n(t, r, i, a); } return n.TYPE = "polygon", n; })(Gr), Or.addType(Yr.TYPE, Yr.TYPE, fe), Ui = s(0, 0), Wi = s(0, 0), Gi = function (e, t, n, r, i) { e.pointCount = 0, F(Ui, n, t.m_p), F(Wi, i, r.m_p); var a = j(Wi, Ui), o = t.m_radius + r.m_radius; a > o * o || (e.type = H.e_circles, u(e.localPoint, t.m_p), d(e.localNormal), e.pointCount = 1, u(e.points[0].localPoint, r.m_p), e.points[0].id.setFeatures(0, U.e_vertex, 0, U.e_vertex)); }, Or.addType(Nr.TYPE, Yr.TYPE, pe), Or.addType(Ir.TYPE, Yr.TYPE, me), Ki = s(0, 0), qi = s(0, 0), Ji = s(0, 0), Yi = s(0, 0), Xi = s(0, 0), Zi = s(0, 0), Qi = function (e, t, n, r, i) { e.pointCount = 0, ie(Yi, i, n, r.m_p); var a = t.m_vertex1, o = t.m_vertex2; g(Ki, o, a); var s = O(Ki, o) - O(Ki, Yi), c = O(Ki, Yi) - O(Ki, a), l = t.m_radius + r.m_radius; if (c <= 0) {
            if (u(Xi, a), j(Yi, a) > l * l)
                return;
            if (t.m_hasVertex0) {
                var p = t.m_vertex0, m = a;
                if (g(qi, m, p), O(qi, m) - O(qi, Yi) > 0)
                    return;
            }
            e.type = H.e_circles, d(e.localNormal), u(e.localPoint, Xi), e.pointCount = 1, u(e.points[0].localPoint, r.m_p), e.points[0].id.setFeatures(0, U.e_vertex, 0, U.e_vertex);
        }
        else if (s <= 0) {
            if (u(Xi, o), j(Yi, Xi) > l * l)
                return;
            if (t.m_hasVertex3) {
                var h = t.m_vertex3, _ = o;
                if (g(Ji, h, _), O(Ji, Yi) - O(Ji, _) > 0)
                    return;
            }
            e.type = H.e_circles, d(e.localNormal), u(e.localPoint, Xi), e.pointCount = 1, u(e.points[0].localPoint, r.m_p), e.points[0].id.setFeatures(1, U.e_vertex, 0, U.e_vertex);
        }
        else {
            var v = k(Ki);
            x(Xi, s / v, a, c / v, o), j(Yi, Xi) > l * l || (E(Zi, 1, Ki), O(Zi, Yi) - O(Zi, a) < 0 && f(Zi), w(Zi), e.type = H.e_faceA, u(e.localNormal, Zi), u(e.localPoint, a), e.pointCount = 1, u(e.points[0].localPoint, r.m_p), e.points[0].id.setFeatures(0, U.e_face, 0, U.e_vertex));
        } }, $i = [new Wn, new Wn], ea = [new Wn, new Wn], ta = [new Wn, new Wn], na = s(0, 0), ra = s(0, 0), ia = s(0, 0), aa = N(0, 0, 0), oa = s(0, 0), sa = s(0, 0), ca = s(0, 0), la = s(0, 0), ua = s(0, 0), da = s(0, 0), fa = s(0, 0), pa = s(0, 0), Or.addType(Gr.TYPE, Gr.TYPE, he), ma = { maxSeparation: 0, bestIndex: 0 }, ha = function (e, t, n, r, i) { e.pointCount = 0; var a = t.m_radius + r.m_radius; ge(t, n, r, i, ma); var o = ma.bestIndex, s = ma.maxSeparation; if (!(s > a)) {
            ge(r, i, t, n, ma);
            var c = ma.bestIndex, d = ma.maxSeparation;
            if (!(d > a)) {
                var f, p, m, h, _, v;
                d > s + .1 * R.linearSlop ? (f = r, p = t, m = i, h = n, _ = c, e.type = H.e_faceB, v = !0) : (f = t, p = r, m = n, h = i, _ = o, e.type = H.e_faceA, v = !1), $i[0].recycle(), $i[1].recycle(), _e($i, f, m, _, p, h);
                var y = f.m_count, b = f.m_vertices, S = _, C = _ + 1 < y ? _ + 1 : 0;
                u(oa, b[S]), u(sa, b[C]), g(ca, sa, oa), w(ca), T(la, ca, 1), x(ua, .5, oa, .5, sa), M(da, m.q, ca), T(fa, da, 1), F(oa, m, oa), F(sa, m, sa);
                var E = O(fa, oa), D = -O(da, oa) + a, k = O(da, sa) + a;
                if (ea[0].recycle(), ea[1].recycle(), ta[0].recycle(), ta[1].recycle(), l(na, -da.x, -da.y), !(ce(ea, $i, na, D, S) < 2) && (l(na, da.x, da.y), !(ce(ta, ea, na, k, C) < 2))) {
                    u(e.localNormal, la), u(e.localPoint, ua);
                    for (var A = 0, j = 0; j < ta.length; ++j)
                        if (O(fa, ta[j].v) - E <= a) {
                            var ee = e.points[A];
                            re(ee.localPoint, h, ta[j].v), ee.id.set(ta[j].id), v && ee.id.swapFeatures(), ++A;
                        }
                    e.pointCount = A;
                }
            }
        } }, Or.addType(Gr.TYPE, Yr.TYPE, ve), ga = s(0, 0), _a = s(0, 0), va = function (e, t, n, r, i) { e.pointCount = 0, ie(ga, i, n, r.m_p); for (var a = 0, o = -1 / 0, s = t.m_radius + r.m_radius, c = t.m_count, l = t.m_vertices, d = t.m_normals, f = 0; f < c; ++f) {
            var p = O(d[f], ga) - O(d[f], l[f]);
            if (p > s)
                return;
            p > o && (o = p, a = f);
        } var m = a, h = m + 1 < c ? m + 1 : 0, _ = l[m], v = l[h]; if (o < Te)
            e.pointCount = 1, e.type = H.e_faceA, u(e.localNormal, d[a]), x(e.localPoint, .5, _, .5, v), u(e.points[0].localPoint, r.m_p), e.points[0].id.setFeatures(0, U.e_vertex, 0, U.e_vertex);
        else {
            var y = O(ga, v) - O(ga, _) - O(_, v) + O(_, _), b = O(ga, _) - O(ga, v) - O(v, _) + O(v, v);
            if (y <= 0) {
                if (j(ga, _) > s * s)
                    return;
                e.pointCount = 1, e.type = H.e_faceA, g(e.localNormal, ga, _), w(e.localNormal), u(e.localPoint, _), u(e.points[0].localPoint, r.m_p), e.points[0].id.setFeatures(0, U.e_vertex, 0, U.e_vertex);
            }
            else if (b <= 0) {
                if (j(ga, v) > s * s)
                    return;
                e.pointCount = 1, e.type = H.e_faceA, g(e.localNormal, ga, v), w(e.localNormal), u(e.localPoint, v), u(e.points[0].localPoint, r.m_p), e.points[0].id.setFeatures(0, U.e_vertex, 0, U.e_vertex);
            }
            else {
                if (x(_a, .5, _, .5, v), O(ga, d[m]) - O(_a, d[m]) > s)
                    return;
                e.pointCount = 1, e.type = H.e_faceA, u(e.localNormal, d[m]), u(e.localPoint, _a), u(e.points[0].localPoint, r.m_p), e.points[0].id.setFeatures(0, U.e_vertex, 0, U.e_vertex);
            }
        } }, ya = Math.min, Or.addType(Nr.TYPE, Gr.TYPE, ye), Or.addType(Ir.TYPE, Gr.TYPE, be), ba = new Nr, (function (e) { e[e.e_unknown = -1] = "e_unknown", e[e.e_edgeA = 1] = "e_edgeA", e[e.e_edgeB = 2] = "e_edgeB"; })(xa || (xa = {})), (function (e) { e[e.e_isolated = 0] = "e_isolated", e[e.e_concave = 1] = "e_concave", e[e.e_convex = 2] = "e_convex"; })(Sa || (Sa = {})), Ca = (function () { function e() { } return e; })(), wa = (function () { function e() { this.vertices = [], this.normals = [], this.count = 0; for (var e = 0; e < R.maxPolygonVertices; e++)
            this.vertices.push(s(0, 0)), this.normals.push(s(0, 0)); } return e; })(), Ta = (function () { function e() { this.v1 = s(0, 0), this.v2 = s(0, 0), this.normal = s(0, 0), this.sideNormal1 = s(0, 0), this.sideNormal2 = s(0, 0); } return e.prototype.recycle = function () { d(this.v1), d(this.v2), d(this.normal), d(this.sideNormal1), d(this.sideNormal2); }, e; })(), Ea = [new Wn, new Wn], Da = [new Wn, new Wn], Oa = [new Wn, new Wn], ka = new Ca, Aa = new Ca, J = new wa, Y = new Ta, ja = s(0, 0), Ma = s(0, 0), Na = s(0, 0), Pa = s(0, 0), Fa = N(0, 0, 0), X = s(0, 0), Ia = s(0, 0), Z = s(0, 0), La = s(0, 0), Q = s(0, 0), $ = s(0, 0), Ra = s(0, 0), za = s(0, 0), Ba = function (e, t, n, r, i) { ae(Fa, n, i), F(ja, Fa, r.m_centroid); var a = t.m_vertex0, o = t.m_vertex1, s = t.m_vertex2, c = t.m_vertex3, f = t.m_hasVertex0, p = t.m_hasVertex3; g(Na, s, o), w(Na), l(Z, Na.y, -Na.x); var m = O(Z, ja) - O(Z, o), h = 0, _ = 0, y = !1, b = !1; d(Ia), d(La), f && (g(Ma, o, a), w(Ma), l(Ia, Ma.y, -Ma.x), y = D(Ma, Na) >= 0, h = I.dot(Ia, ja) - I.dot(Ia, a)), p && (g(Pa, c, s), w(Pa), l(La, Pa.y, -Pa.x), b = I.crossVec2Vec2(Na, Pa) > 0, _ = I.dot(La, ja) - I.dot(La, s)); var x; d(X), d(Q), d($), f && p ? y && b ? (x = h >= 0 || m >= 0 || _ >= 0, x ? (u(X, Z), u(Q, Ia), u($, La)) : (v(X, -1, Z), v(Q, -1, Z), v($, -1, Z))) : y ? (x = h >= 0 || m >= 0 && _ >= 0, x ? (u(X, Z), u(Q, Ia), u($, Z)) : (v(X, -1, Z), v(Q, -1, La), v($, -1, Z))) : b ? (x = _ >= 0 || h >= 0 && m >= 0, x ? (u(X, Z), u(Q, Z), u($, La)) : (v(X, -1, Z), v(Q, -1, Z), v($, -1, Ia))) : (x = h >= 0 && m >= 0 && _ >= 0, x ? (u(X, Z), u(Q, Z), u($, Z)) : (v(X, -1, Z), v(Q, -1, La), v($, -1, Ia))) : f ? y ? (x = h >= 0 || m >= 0, x ? (u(X, Z), u(Q, Ia), v($, -1, Z)) : (v(X, -1, Z), u(Q, Z), v($, -1, Z))) : (x = h >= 0 && m >= 0, x ? (u(X, Z), u(Q, Z), v($, -1, Z)) : (v(X, -1, Z), u(Q, Z), v($, -1, Ia))) : p ? b ? (x = m >= 0 || _ >= 0, x ? (u(X, Z), v(Q, -1, Z), u($, La)) : (v(X, -1, Z), v(Q, -1, Z), u($, Z))) : (x = m >= 0 && _ >= 0, x ? (u(X, Z), v(Q, -1, Z), u($, Z)) : (v(X, -1, Z), v(Q, -1, La), u($, Z))) : (x = m >= 0, x ? (u(X, Z), v(Q, -1, Z), v($, -1, Z)) : (v(X, -1, Z), u(Q, Z), u($, Z))), J.count = r.m_count; for (var S = 0; S < r.m_count; ++S)
            F(J.vertices[S], Fa, r.m_vertices[S]), M(J.normals[S], Fa.q, r.m_normals[S]); var C = r.m_radius + t.m_radius; e.pointCount = 0, ka.type = xa.e_edgeA, ka.index = +!x, ka.separation = 1 / 0; for (var S = 0; S < J.count; ++S) {
            var T = J.vertices[S], E = O(X, T) - O(X, o);
            E < ka.separation && (ka.separation = E);
        } if (ka.type != xa.e_unknown && !(ka.separation > C)) {
            Aa.type = xa.e_unknown, Aa.index = -1, Aa.separation = -1 / 0, l(Ra, -X.y, X.x);
            for (var S = 0; S < J.count; ++S) {
                v(za, -1, J.normals[S]);
                var E = ya(O(za, J.vertices[S]) - O(za, o), O(za, J.vertices[S]) - O(za, s));
                if (E > C) {
                    Aa.type = xa.e_edgeB, Aa.index = S, Aa.separation = E;
                    break;
                }
                if (O(za, Ra) >= 0) {
                    if (O(za, X) - O($, X) < -R.angularSlop)
                        continue;
                }
                else if (O(za, X) - O(Q, X) < -R.angularSlop)
                    continue;
                E > Aa.separation && (Aa.type = xa.e_edgeB, Aa.index = S, Aa.separation = E);
            }
            if (!(Aa.type != xa.e_unknown && Aa.separation > C)) {
                var k = Aa.type == xa.e_unknown ? ka : Aa.separation > .98 * ka.separation + .001 ? Aa : ka;
                if (Oa[0].recycle(), Oa[1].recycle(), k.type == xa.e_edgeA) {
                    e.type = H.e_faceA;
                    for (var A = 0, j = O(X, J.normals[0]), S = 1; S < J.count; ++S) {
                        var ee = O(X, J.normals[S]);
                        ee < j && (j = ee, A = S);
                    }
                    var te = A, ne = te + 1 < J.count ? te + 1 : 0;
                    u(Oa[0].v, J.vertices[te]), Oa[0].id.setFeatures(0, U.e_face, te, U.e_vertex), u(Oa[1].v, J.vertices[ne]), Oa[1].id.setFeatures(0, U.e_face, ne, U.e_vertex), x ? (Y.i1 = 0, Y.i2 = 1, u(Y.v1, o), u(Y.v2, s), u(Y.normal, Z)) : (Y.i1 = 1, Y.i2 = 0, u(Y.v1, s), u(Y.v2, o), v(Y.normal, -1, Z));
                }
                else
                    e.type = H.e_faceB, u(Oa[0].v, o), Oa[0].id.setFeatures(k.index, U.e_face, 0, U.e_vertex), u(Oa[1].v, s), Oa[1].id.setFeatures(k.index, U.e_face, 1, U.e_vertex), Y.i1 = k.index, Y.i2 = Y.i1 + 1 < J.count ? Y.i1 + 1 : 0, u(Y.v1, J.vertices[Y.i1]), u(Y.v2, J.vertices[Y.i2]), u(Y.normal, J.normals[Y.i1]);
                if (l(Y.sideNormal1, Y.normal.y, -Y.normal.x), l(Y.sideNormal2, -Y.sideNormal1.x, -Y.sideNormal1.y), Y.sideOffset1 = O(Y.sideNormal1, Y.v1), Y.sideOffset2 = O(Y.sideNormal2, Y.v2), Ea[0].recycle(), Ea[1].recycle(), Da[0].recycle(), Da[1].recycle(), !(ce(Ea, Oa, Y.sideNormal1, Y.sideOffset1, Y.i1) < R.maxManifoldPoints) && !(ce(Da, Ea, Y.sideNormal2, Y.sideOffset2, Y.i2) < R.maxManifoldPoints)) {
                    k.type == xa.e_edgeA ? (u(e.localNormal, Y.normal), u(e.localPoint, Y.v1)) : (u(e.localNormal, r.m_normals[Y.i1]), u(e.localPoint, r.m_vertices[Y.i1]));
                    for (var N = 0, S = 0; S < R.maxManifoldPoints; ++S)
                        if (O(Y.normal, Da[S].v) - O(Y.normal, Y.v1) <= C) {
                            var P = e.points[N];
                            k.type == xa.e_edgeA ? (re(P.localPoint, Fa, Da[S].v), P.id.set(Da[S].id)) : (u(P.localPoint, Da[S].v), P.id.set(Da[S].id), P.id.swapFeatures()), ++N;
                        }
                    e.pointCount = N;
                }
            }
        } }, (function () { function e(e, t) { this._refMap = {}, this._map = {}, this._xmap = {}, this._data = [], this._entered = [], this._exited = [], this._key = e, this._listener = t; } return e.prototype.update = function (e) { if (!Array.isArray(e))
            throw "Invalid data: " + e; this._entered.length = 0, this._exited.length = 0, this._data.length = e.length; for (var t = 0; t < e.length; t++)
            if (typeof e[t] == "object" && e[t] !== null) {
                var n = e[t], r = this._key(n);
                this._map[r] ? delete this._map[r] : this._entered.push(n), this._data[t] = n, this._xmap[r] = n;
            } for (var r in this._map)
            this._exited.push(this._map[r]), delete this._map[r]; var i = this._map; this._map = this._xmap, this._xmap = i; for (var t = 0; t < this._exited.length; t++) {
            var n = this._exited[t], a = this._key(n), o = this._refMap[a];
            this._listener.exit(n, o), delete this._refMap[a];
        } for (var t = 0; t < this._entered.length; t++) {
            var n = this._entered[t], a = this._key(n), o = this._listener.enter(n);
            o && (this._refMap[a] = o);
        } for (var t = 0; t < this._data.length; t++)
            if (typeof e[t] == "object" && e[t] !== null) {
                var n = this._data[t], a = this._key(n), o = this._refMap[a];
                this._listener.update(n, o);
            } this._entered.length = 0, this._exited.length = 0, this._data.length = 0; }, e.prototype.ref = function (e) { return this._refMap[this._key(e)]; }, e; })();
    })))();
}
Object.defineProperty(exports, "a", { enumerable: !0, get: function () { return Ar; } }), Object.defineProperty(exports, "i", { enumerable: !0, get: function () { return Gr; } }), Object.defineProperty(exports, "n", { enumerable: !0, get: function () { return Hi; } }), Object.defineProperty(exports, "o", { enumerable: !0, get: function () { return Va; } }), Object.defineProperty(exports, "r", { enumerable: !0, get: function () { return Yr; } }), Object.defineProperty(exports, "t", { enumerable: !0, get: function () { return Pe; } });
