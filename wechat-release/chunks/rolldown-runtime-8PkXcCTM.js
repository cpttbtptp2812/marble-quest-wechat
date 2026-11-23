(function () { var e = typeof wx < "u"; function t(e, t) { } typeof GameGlobal < "u" && (GameGlobal.__saplingLog = t), e && wx.onError && wx.onError(function (e) { e && e.message, e && e.stack; }); })();
var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = function (e, t, n) { return function () { if (n)
    throw n[0]; try {
    return e && (t = e(e = 0)), t;
}
catch (e) {
    throw n = [e], e;
} }; }, s = function (e, t) { return function () { return (t || (e((t = { exports: {} }).exports, t, t.exports), e = null), t.exports); }; }, c = function (e, n) { var r = {}; for (var i in e)
    t(r, i, { get: e[i], enumerable: !0 }); return n || t(r, Symbol.toStringTag, { value: "Module" }), r; }, l = function (e, i, o, s) { if (i && typeof i == "object" || typeof i == "function")
    for (var c = r(i), l = 0, u = c.length, d; l < u; l++)
        d = c[l], !a.call(e, d) && d !== o && t(e, d, { get: (function (e) { return i[e]; }).bind(null, d), enumerable: !(s = n(i, d)) || s.enumerable }); return e; }, u = function (n, r, o) { return (o = n == null ? {} : e(i(n)), l(r || !n || !n.__esModule || !a.call(n, "default") ? t(o, "default", { value: n, enumerable: !0 }) : o, n)); };
Object.defineProperty(exports, "i", { enumerable: !0, get: function () { return u; } }), Object.defineProperty(exports, "n", { enumerable: !0, get: function () { return o; } }), Object.defineProperty(exports, "r", { enumerable: !0, get: function () { return c; } }), Object.defineProperty(exports, "t", { enumerable: !0, get: function () { return s; } });
