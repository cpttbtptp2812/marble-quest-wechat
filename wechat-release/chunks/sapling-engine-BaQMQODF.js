(function () { var e = typeof wx < "u"; function t(e, t) { } typeof GameGlobal < "u" && (GameGlobal.__saplingLog = t), e && wx.onError && wx.onError(function (e) { e && e.message, e && e.stack; }); })();
var e = require("./rolldown-runtime-8PkXcCTM.js");
function t(e, t) { if (e == null)
    return {}; var n = {}; for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
        if (t.includes(r))
            continue;
        n[r] = e[r];
    } return n; }
function n(e, n) { if (e == null)
    return {}; var r, i, a = t(e, n); if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
        r = o[i], n.includes(r) || {}.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
} return a; }
function r() { return (r = e.n((function () { })))(); }
var i = e.t((function (e, t) { var n = Object.prototype.hasOwnProperty, r = "~"; function i() { } Object.create && (i.prototype = Object.create(null), new i().__proto__ || (r = !1)); function a(e, t, n) { this.fn = e, this.context = t, this.once = n || !1; } function o(e, t, n, i, o) { if (typeof n != "function")
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
} return this; }, c.prototype.removeAllListeners = function (e) { var t; return e ? (t = r ? r + e : e, this._events[t] && s(this, t)) : (this._events = new i, this._eventsCount = 0), this; }, c.prototype.off = c.prototype.removeListener, c.prototype.addListener = c.prototype.on, c.prefixed = r, c.EventEmitter = c, t !== void 0 && (t.exports = c); })), a, o;
function s() { return (s = e.n((function () { a = e.i(i(), 1), o = a.default; })))(); }
function c(e, t, n) {
    if (n === void 0) { n = 2; }
    var r = t && t.length, i = r ? t[0] * n : e.length;
    B.size && B.clear();
    var a = l(e, 0, i, n, !0), o = [];
    if (!a || a.next === a.prev)
        return o;
    var s = 0, c = 0, u = 0;
    if (r && (a = g(e, t, a, n)), e.length > 80 * n) {
        s = e[0], c = e[1];
        var t_1 = s, r_1 = c;
        for (var a_1 = n; a_1 < i; a_1 += n) {
            var n_1 = e[a_1], i_1 = e[a_1 + 1];
            n_1 < s && (s = n_1), i_1 < c && (c = i_1), n_1 > t_1 && (t_1 = n_1), i_1 > r_1 && (r_1 = i_1);
        }
        u = Math.max(t_1 - s, r_1 - c), u = u === 0 ? 0 : 32767 / u;
    }
    return d(a, o, s, c, u), o;
}
function l(e, t, n, r, i) { var a = null; if (i === z(e, t, n, r) > 0)
    for (var i_2 = t; i_2 < n; i_2 += r)
        a = I(i_2 / r | 0, e[i_2], e[i_2 + 1], a);
else
    for (var i_3 = n - r; i_3 >= t; i_3 -= r)
        a = I(i_3 / r | 0, e[i_3], e[i_3 + 1], a); return a && k(a, a.next) && (L(a), a = a.next), a; }
function u(e, t) {
    if (t === void 0) { t = e; }
    var n = t === e, r = e, i;
    do
        i = !1, r !== r.next && (B.size === 0 || !B.has(r)) && (k(r, r.next) || O(r.prev, r, r.next) === 0) ? ((n || r === t) && (t = r.prev), V = !0, L(r), r = r.prev, i = !0) : (n || r !== t) && (r = r.next, i = !n);
    while (i || r !== t);
    return t;
}
function d(e, t, n, r, i) { i && re(e, n, r, i); var a = e, o = !1; for (; e.prev !== e.next;) {
    var s_1 = e.prev, c_1 = e.next;
    if (O(s_1, e, c_1) < 0 && (i ? p(e, n, r, i) : f(e)))
        t.push(s_1.i, e.i, c_1.i), L(e), e = c_1, a = c_1;
    else if (e = c_1, e === a) {
        if (V = !1, e = u(e), V) {
            a = e;
            continue;
        }
        if (!o) {
            e = m(e, t), a = e, o = !0;
            continue;
        }
        h(e, t, n, r, i);
        break;
    }
} }
function f(e) { var t = e.prev, n = e, r = e.next, i = t.x, a = n.x, o = r.x, s = t.y, c = n.y, l = r.y, u = Math.min(i, a, o), d = Math.min(s, c, l), f = Math.max(i, a, o), p = Math.max(s, c, l), m = r.next; for (; m !== t;) {
    if (m.x >= u && m.x <= f && m.y >= d && m.y <= p && (i !== m.x || s !== m.y) && E(i, s, a, c, o, l, m.x, m.y) && O(m.prev, m, m.next) >= 0)
        return !1;
    m = m.next;
} return !0; }
function p(e, t, n, r) { var i = e.prev, a = e, o = e.next, s = i.x, c = a.x, l = o.x, u = i.y, d = a.y, f = o.y, p = Math.min(s, c, l), m = Math.min(u, d, f), h = Math.max(s, c, l), g = Math.max(u, d, f), _ = w(p, m, t, n, r), v = w(h, g, t, n, r), y = e.prevZ; for (; y && y.z >= _;) {
    if (y.x >= p && y.x <= h && y.y >= m && y.y <= g && y !== o && (s !== y.x || u !== y.y) && E(s, u, c, d, l, f, y.x, y.y) && O(y.prev, y, y.next) >= 0)
        return !1;
    y = y.prevZ;
} var b = e.nextZ; for (; b && b.z <= v;) {
    if (b.x >= p && b.x <= h && b.y >= m && b.y <= g && b !== o && (s !== b.x || u !== b.y) && E(s, u, c, d, l, f, b.x, b.y) && O(b.prev, b, b.next) >= 0)
        return !1;
    b = b.nextZ;
} return !0; }
function m(e, t) { var n = e, r = !1; do {
    var i_4 = n.prev, a_2 = n.next.next;
    A(i_4, n, n.next, a_2, !1) && N(i_4, a_2) && N(a_2, i_4) && (t.push(i_4.i, n.i, a_2.i), L(n), L(n.next), n = e = a_2, r = !0), n = n.next;
} while (n !== e); return r ? u(n) : n; }
function h(e, t, n, r, i) { var a = e; do {
    var e_1 = a.next.next;
    for (; e_1 !== a.prev;) {
        if (a.i !== e_1.i && D(a, e_1)) {
            var o_1 = F(a, e_1);
            a = u(a, a.next), o_1 = u(o_1, o_1.next), d(a, t, n, r, i), d(o_1, t, n, r, i);
            return;
        }
        e_1 = e_1.next;
    }
    a = a.next;
} while (a !== e); }
function g(e, t, n, r) { var i = []; for (var n_2 = 0, a_3 = t.length; n_2 < a_3; n_2++) {
    var o_2 = l(e, t[n_2] * r, n_2 < a_3 - 1 ? t[n_2 + 1] * r : e.length, r, !1);
    o_2 === o_2.next && B.add(o_2), i.push(T(o_2));
} i.sort(_), y(e.length / r, t.length), b(n, n), H = !0; for (var e_2 = 0; e_2 < i.length; e_2++)
    n = v(i[e_2], n); return H = !1, u(n); }
function _(e, t) { return e.x - t.x || e.y - t.y || (e.next.y - e.y) / (e.next.x - e.x) - (t.next.y - t.y) / (t.next.x - t.x); }
function v(e, t) { var n = te(e, t); if (!n)
    return t; var r = F(n, e), i = r.next; return b(n, i.next), u(r, r.next), u(n, n.next); }
function y(e, t) { var n = Math.ceil((e + 2 * t) / U) + t + 2; W.length < n * 4 && (W = new Float64Array(n * 4)), G = 0; }
function b(e, t) { var n = e; do {
    var e_3 = G++;
    K[e_3] = n;
    var r_2 = n.x, i_5 = n.y, a_4 = n.x, o_3 = n.y, s_2 = 0;
    do {
        var t_2 = n.next;
        n.z = e_3, t_2.x < r_2 && (r_2 = t_2.x), t_2.x > a_4 && (a_4 = t_2.x), t_2.y < i_5 && (i_5 = t_2.y), t_2.y > o_3 && (o_3 = t_2.y), n = t_2;
    } while (++s_2 < U && n !== t);
    q[e_3] = n;
    var c_2 = e_3 * 4;
    W[c_2] = r_2, W[c_2 + 1] = i_5, W[c_2 + 2] = a_4, W[c_2 + 3] = o_3;
} while (n !== t); }
function ee(e, t) { var n = e.z * 4; t.x < W[n] && (W[n] = t.x), t.y < W[n + 1] && (W[n + 1] = t.y), t.x > W[n + 2] && (W[n + 2] = t.x), t.y > W[n + 3] && (W[n + 3] = t.y); }
function x(e) { var t = q[e]; for (; t.prev.next !== t;)
    t = t.next; return q[e] = t, t; }
function S(e) { var t = K[e]; for (; t.prev.next !== t;)
    t = t.next; return K[e] = t, t; }
function te(e, t) { var n = t, r = e.x, i = e.y, a = -1 / 0, o; if (k(e, n))
    return n; for (var t_3 = 0, s_3 = 0; t_3 < G; t_3++, s_3 += 4) {
    if (i < W[s_3 + 1] || i > W[s_3 + 3] || W[s_3] > r || W[s_3 + 2] <= a)
        continue;
    var c_3 = x(t_3);
    n = S(t_3);
    do {
        if (n.prev.next === n) {
            if (k(e, n.next))
                return n.next;
            if (i <= n.y && i >= n.next.y && n.next.y !== n.y) {
                var e_4 = n.x + (i - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
                if (e_4 <= r && e_4 > a && (a = e_4, o = n.x < n.next.x ? n : n.next, e_4 === r))
                    return o;
            }
        }
        n = n.next;
    } while (n !== c_3);
} if (!o)
    return null; var s = o.x, c = o.y, l = Math.min(i, c), u = Math.max(i, c), d = 1 / 0; for (var t_4 = 0, f_1 = 0; t_4 < G; t_4++, f_1 += 4) {
    if (W[f_1 + 2] < s || W[f_1] > r || W[f_1 + 3] < l || W[f_1 + 1] > u)
        continue;
    var p_1 = x(t_4);
    n = S(t_4);
    do {
        if (n.prev.next === n && r >= n.x && n.x >= s && r !== n.x && E(i < c ? r : a, i, s, c, i < c ? a : r, i, n.x, n.y)) {
            var t_5 = Math.abs(i - n.y) / (r - n.x);
            (N(n, e) || n.y === i && n.next.y === i && n.next.x > r) && (t_5 < d || t_5 === d && (n.x > o.x || n.x === o.x && ne(o, n))) && (o = n, d = t_5);
        }
        n = n.next;
    } while (n !== p_1);
} return o; }
function ne(e, t) { return O(e.prev, e, t.prev) < 0 && O(t.next, e, e.next) < 0; }
function re(e, t, n, r) { var i = e, a = 0; do
    i.z = w(i.x, i.y, t, n, r), J[a++] = i, i = i.next;
while (i !== e); ie(a); var o = null; for (var e_5 = 0; e_5 < a; e_5++) {
    var t_6 = J[e_5];
    t_6.prevZ = o, o && (o.nextZ = t_6), o = t_6;
} o.nextZ = null, J.fill(null, 0, a), Y.fill(null, 0, a); }
function ie(e) { if (e <= 32)
    for (var t_7 = 1; t_7 < e; t_7++) {
        var e_6 = J[t_7], n_3 = e_6.z, r_3 = t_7 - 1;
        for (; r_3 >= 0 && J[r_3].z > n_3;)
            J[r_3 + 1] = J[r_3], r_3--;
        J[r_3 + 1] = e_6;
    }
else {
    X.length < e && (X = new Uint32Array(e), Z = new Uint32Array(e), Y = Array(e));
    for (var t_8 = 0; t_8 < e; t_8++)
        X[t_8] = J[t_8].z;
    C(e, J, X, Y, Z, 0), C(e, Y, Z, J, X, 8), C(e, J, X, Y, Z, 16), C(e, Y, Z, J, X, 24);
} }
function C(e, t, n, r, i, a) { Q.fill(0); for (var t_9 = 0; t_9 < e; t_9++)
    Q[n[t_9] >>> a & 255]++; var o = 0; for (var e_7 = 0; e_7 < 256; e_7++) {
    var t_10 = Q[e_7];
    Q[e_7] = o, o += t_10;
} for (var o_4 = 0; o_4 < e; o_4++) {
    var e_8 = n[o_4], s_4 = Q[e_8 >>> a & 255]++;
    r[s_4] = t[o_4], i[s_4] = e_8;
} }
function w(e, t, n, r, i) { return e = (e - n) * i | 0, t = (t - r) * i | 0, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, t = (t | t << 8) & 16711935, t = (t | t << 4) & 252645135, t = (t | t << 2) & 858993459, t = (t | t << 1) & 1431655765, e | t << 1; }
function T(e) { var t = e, n = e; do
    (t.x < n.x || t.x === n.x && t.y < n.y) && (n = t), t = t.next;
while (t !== e); return n; }
function E(e, t, n, r, i, a, o, s) { return (i - o) * (t - s) >= (e - o) * (a - s) && (e - o) * (r - s) >= (n - o) * (t - s) && (n - o) * (a - s) >= (i - o) * (r - s); }
function D(e, t) { var n = k(e, t) && O(e.prev, e, e.next) > 0 && O(t.prev, t, t.next) > 0; return e.next.i !== t.i && (n || N(e, t) && N(t, e) && (O(e.prev, e, t.prev) !== 0 || O(e, t.prev, t) !== 0)) && !M(e, t) && (n || P(e, t)); }
function O(e, t, n) { return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y); }
function k(e, t) { return e.x === t.x && e.y === t.y; }
function A(e, t, n, r, i) {
    if (i === void 0) { i = !0; }
    var a = O(e, t, n), o = O(e, t, r), s = O(n, r, e), c = O(n, r, t);
    return (a > 0 && o < 0 || a < 0 && o > 0) && (s > 0 && c < 0 || s < 0 && c > 0) ? !0 : i ? !!(a === 0 && j(e, n, t) || o === 0 && j(e, r, t) || s === 0 && j(n, e, r) || c === 0 && j(n, t, r)) : !1;
}
function j(e, t, n) { return t.x <= Math.max(e.x, n.x) && t.x >= Math.min(e.x, n.x) && t.y <= Math.max(e.y, n.y) && t.y >= Math.min(e.y, n.y); }
function M(e, t) { var n = Math.min(e.x, t.x), r = Math.max(e.x, t.x), i = Math.min(e.y, t.y), a = Math.max(e.y, t.y), o = e; do {
    var s_5 = o.next;
    if (o.x > r && s_5.x > r || o.x < n && s_5.x < n || o.y > a && s_5.y > a || o.y < i && s_5.y < i)
        o = s_5;
    else {
        if (o.i !== e.i && s_5.i !== e.i && o.i !== t.i && s_5.i !== t.i && A(o, s_5, e, t))
            return !0;
        o = s_5;
    }
} while (o !== e); return !1; }
function N(e, t) { return O(e.prev, e, e.next) < 0 ? O(e, t, e.next) >= 0 && O(e, e.prev, t) >= 0 : O(e, t, e.prev) < 0 || O(e, e.next, t) < 0; }
function P(e, t) { var n = e, r = !1, i = (e.x + t.x) / 2, a = (e.y + t.y) / 2; do {
    var e_9 = n.next;
    n.y > a != e_9.y > a && i < (e_9.x - n.x) * (a - n.y) / (e_9.y - n.y) + n.x && (r = !r), n = e_9;
} while (n !== e); return r; }
function F(e, t) { var n = R(e.i, e.x, e.y), r = R(t.i, t.x, t.y), i = e.next, a = t.prev; return e.next = t, t.prev = e, n.next = i, i.prev = n, r.next = n, n.prev = r, a.next = r, r.prev = a, r; }
function I(e, t, n, r) { var i = R(e, t, n); return r ? (i.next = r.next, i.prev = r, r.next.prev = i, r.next = i) : (i.prev = i, i.next = i), i; }
function L(e) { e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ), H && ee(e.prev, e.next); }
function R(e, t, n) { return { i: e, x: t, y: n, prev: null, next: null, z: 0, prevZ: null, nextZ: null }; }
function z(e, t, n, r) { var i = 0; for (var a_5 = t, o_5 = n - r; a_5 < n; a_5 += r)
    i += (e[o_5] - e[a_5]) * (e[a_5 + 1] + e[o_5 + 1]), o_5 = a_5; return i; }
var B, V, H, U, W, G, K, q, J, Y, X, Z, Q;
function $() { return ($ = e.n((function () { B = new Set, V = !1, H = !1, U = 16, W = new Float64Array, G = 0, K = [], q = [], J = [], Y = [], X = new Uint32Array, Z = new Uint32Array, Q = new Uint32Array(256); })))(); }
Object.defineProperty(exports, "a", { enumerable: !0, get: function () { return n; } }), Object.defineProperty(exports, "i", { enumerable: !0, get: function () { return s; } }), Object.defineProperty(exports, "n", { enumerable: !0, get: function () { return $; } }), Object.defineProperty(exports, "o", { enumerable: !0, get: function () { return r; } }), Object.defineProperty(exports, "r", { enumerable: !0, get: function () { return o; } }), Object.defineProperty(exports, "t", { enumerable: !0, get: function () { return c; } });
