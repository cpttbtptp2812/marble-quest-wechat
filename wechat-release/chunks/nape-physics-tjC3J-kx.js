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
var e = require("./rolldown-runtime-8PkXcCTM.js");
function t(e) {
    "@babel/helpers - typeof";
    return t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) { return typeof e; } : function (e) { return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e; }, t(e);
}
function n(e, n) { if (t(e) != "object" || !e)
    return e; var r = e[Symbol.toPrimitive]; if (r !== void 0) {
    var i = r.call(e, n || "default");
    if (t(i) != "object")
        return i;
    throw TypeError("@@toPrimitive must return a primitive value.");
} return (n === "string" ? String : Number)(e); }
function r() { return (r = e.n((function () { })))(); }
function i(e) { var r = n(e, "string"); return t(r) == "symbol" ? r : r + ""; }
function a() { return (a = e.n((function () { r(); })))(); }
function o(e, t, n) { return (t = i(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e; }
function s() { return (s = e.n((function () { a(); })))(); }
function c(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable; })), n.push.apply(n, r);
} return n; }
function l(e) { for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2 ? c(Object(n), !0).forEach(function (t) { o(e, t, n[t]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)); });
} return e; }
function u() { return (u = e.n((function () { s(); })))(); }
function d() { return De || (De = { callbacks: {}, constraint: {}, dynamics: {}, geom: {}, phys: {}, shape: {}, space: {}, util: {}, __zpp: { callbacks: {}, constraint: {}, dynamics: {}, geom: {}, phys: {}, shape: {}, space: {}, util: {} } }), De; }
function f(e) { e.util || (e.util = {}); var t = e.util; t.ZNPNode_ZPP_CbType = ke, t.ZNPNode_ZPP_CallbackSet = Ae, t.ZNPNode_ZPP_Shape = je, t.ZNPNode_ZPP_Body = Me, t.ZNPNode_ZPP_Constraint = Ne, t.ZNPNode_ZPP_Compound = Pe, t.ZNPNode_ZPP_Arbiter = Fe, t.ZNPNode_ZPP_InteractionListener = Ie, t.ZNPNode_ZPP_CbSet = Le, t.ZNPNode_ZPP_Interactor = Re, t.ZNPNode_ZPP_BodyListener = ze, t.ZNPNode_ZPP_CbSetPair = Be, t.ZNPNode_ZPP_ConstraintListener = Ve, t.ZNPNode_ZPP_CutInt = He, t.ZNPNode_ZPP_CutVert = Ue, t.ZNPNode_ZPP_PartitionVertex = We, t.ZNPNode_ZPP_SimplifyP = Ge, t.ZNPNode_ZPP_PartitionedPoly = Ke, t.ZNPNode_ZPP_GeomVert = qe, t.ZNPNode_ZPP_SimpleVert = Je, t.ZNPNode_ZPP_SimpleEvent = Ye, t.ZNPNode_ZPP_Vec2 = Xe, t.ZNPNode_ZPP_AABBPair = Ze, t.ZNPNode_ZPP_Edge = Qe, t.ZNPNode_ZPP_AABBNode = $e, t.ZNPNode_ZPP_Component = et, t.ZNPNode_ZPP_FluidArbiter = tt, t.ZNPNode_ZPP_SensorArbiter = nt, t.ZNPNode_ZPP_Listener = rt, t.ZNPNode_ZPP_ColArbiter = it, t.ZNPNode_ZPP_InteractionGroup = at, t.ZNPNode_ZPP_ToiEvent = ot, t.ZNPNode_ConvexResult = st, t.ZNPNode_ZPP_GeomPoly = ct, t.ZNPNode_RayResult = lt, t.ZNPList_ZPP_CbType = ut, t.ZNPList_ZPP_CallbackSet = dt, t.ZNPList_ZPP_Shape = ft, t.ZNPList_ZPP_Body = pt, t.ZNPList_ZPP_Constraint = mt, t.ZNPList_ZPP_Compound = ht, t.ZNPList_ZPP_Arbiter = gt, t.ZNPList_ZPP_InteractionListener = _t, t.ZNPList_ZPP_CbSet = vt, t.ZNPList_ZPP_Interactor = yt, t.ZNPList_ZPP_BodyListener = bt, t.ZNPList_ZPP_CbSetPair = xt, t.ZNPList_ZPP_ConstraintListener = St, t.ZNPList_ZPP_CutInt = Ct, t.ZNPList_ZPP_CutVert = wt, t.ZNPList_ZPP_PartitionVertex = Tt, t.ZNPList_ZPP_SimplifyP = Et, t.ZNPList_ZPP_PartitionedPoly = Dt, t.ZNPList_ZPP_GeomVert = Ot, t.ZNPList_ZPP_SimpleVert = kt, t.ZNPList_ZPP_SimpleEvent = At, t.ZNPList_ZPP_Vec2 = jt, t.ZNPList_ZPP_AABBPair = Mt, t.ZNPList_ZPP_Edge = Nt, t.ZNPList_ZPP_AABBNode = Pt, t.ZNPList_ZPP_Component = Ft, t.ZNPList_ZPP_FluidArbiter = It, t.ZNPList_ZPP_SensorArbiter = Lt, t.ZNPList_ZPP_Listener = Rt, t.ZNPList_ZPP_ColArbiter = zt, t.ZNPList_ZPP_InteractionGroup = Bt, t.ZNPList_ZPP_ToiEvent = Vt, t.ZNPList_ConvexResult = Ht, t.ZNPList_ZPP_GeomPoly = Ut, t.ZNPList_RayResult = Wt, t.ZPP_Set_ZPP_Body = Gt, t.ZPP_Set_ZPP_CbSetPair = Kt, t.ZPP_Set_ZPP_PartitionVertex = qt, t.ZPP_Set_ZPP_PartitionPair = Jt, t.ZPP_Set_ZPP_SimpleVert = Yt, t.ZPP_Set_ZPP_SimpleSeg = Xt, t.ZPP_Set_ZPP_SimpleEvent = Zt, t.ZPP_Set_ZPP_CbSet = Qt; }
function p(e, t) { e[Symbol.iterator] = function () {
    var _b;
    var e = t(this);
    return _b = { next: function () { return e != null && e.hasNext() ? { value: e.next(), done: !1 } : (e = null, { value: void 0, done: !0 }); } }, _b[Symbol.iterator] = function () { return this; }, _b;
}; }
function m(e) { if (e.outer == null) {
    e.outer = new (d()).geom.Vec2;
    var t_1 = e.outer.zpp_inner;
    t_1.free(), t_1.next = V.zpp_pool, V.zpp_pool = t_1, e.outer.zpp_inner = e;
} return e.outer; }
function h() { if (this.zpp_next = null, this.zpp_critical = !1, this.zpp_i = 0, this.zpp_inner = null, !$t.internal)
    throw Error("Cannot instantiate Vec2Iterator derp!"); }
function g() { this.zpp_inner = null, this.zpp_inner = new $t, this.zpp_inner.outer = this; }
function _(e) { var t = e.typeName, n = e.namespaceParts, r = e.zppListClass, i = e.wrapElement, a = e.unwrapElement, o = e.admit, s = d(), c = s.__zpp, l = function () { return c.util[r]; }, u = function () { var e = s; for (var t_2 = 1; t_2 < n.length; t_2++)
    e = e[n[t_2]]; return e; }; function f() { if (this.zpp_next = null, this.zpp_critical = !1, this.zpp_i = 0, this.zpp_inner = null, !l().internal)
    throw Error("Cannot instantiate " + t + "Iterator derp!"); } f.zpp_pool = null, f.get = function (e) { var t, n = l(); return f.zpp_pool == null ? (n.internal = !0, t = new f, n.internal = !1) : (t = f.zpp_pool, f.zpp_pool = t.zpp_next), t.zpp_i = 0, t.zpp_inner = e, t.zpp_critical = !1, t; }, f.prototype.zpp_inner = null, f.prototype.zpp_i = null, f.prototype.zpp_critical = null, f.prototype.zpp_next = null, f.prototype.hasNext = function () { var e = h(this.zpp_inner); return this.zpp_critical = !0, this.zpp_i < e || (this.zpp_next = f.zpp_pool, f.zpp_pool = this, this.zpp_inner = null, !1); }, f.prototype.next = function () { return this.zpp_critical = !1, this.zpp_inner.at(this.zpp_i++); }; function m() { this.zpp_inner = null, this.zpp_inner = new (l()), this.zpp_inner.outer = this; } m.fromArray = function (e) { if (e == null)
    throw Error("Cannot convert null Array to Nape list"); var t = new m; for (var n_1 = 0; n_1 < e.length; n_1++)
    t.push(e[n_1]); return t; }, m.prototype.zpp_inner = null, m.prototype.zpp_gl = function () { return h(this); }; function h(e) { if (e.zpp_inner.valmod(), o != null) {
    var t_3 = 0;
    for (var n_2 = e.zpp_inner.inner.head; n_2 != null; n_2 = n_2.next)
        o(n_2.elt) && t_3++;
    return t_3;
} return e.zpp_inner.zip_length && (e.zpp_inner.zip_length = !1, e.zpp_inner.user_length = e.zpp_inner.inner.length), e.zpp_inner.user_length; } Object.defineProperty(m.prototype, "length", { get: function () { return h(this); } }), m.prototype.has = function (e) { return this.zpp_inner.valmod(), this.zpp_inner.inner.has(a(e)); }, m.prototype.at = function (e) { if (this.zpp_inner.valmod(), e < 0 || e >= h(this))
    throw Error("Index out of bounds"); if (this.zpp_inner.reverse_flag && (e = h(this) - 1 - e), o != null) {
    var t_4 = this.zpp_inner.inner.head;
    for (var n_3 = 0;; t_4 = t_4.next)
        if (o(t_4.elt) && n_3++ === e)
            return i(t_4.elt);
} if (e < this.zpp_inner.at_index || this.zpp_inner.at_ite == null)
    this.zpp_inner.at_index = e, this.zpp_inner.at_ite = this.zpp_inner.inner.iterator_at(e);
else
    for (; this.zpp_inner.at_index != e;)
        this.zpp_inner.at_index++, this.zpp_inner.at_ite = this.zpp_inner.at_ite.next; return i(this.zpp_inner.at_ite.elt); }, m.prototype.push = function (e) { if (this.zpp_inner.immutable)
    throw Error("".concat(t, "List is immutable")); this.zpp_inner.modify_test(), this.zpp_inner.valmod(); var n = this.zpp_inner.adder == null || this.zpp_inner.adder(e); return n && (this.zpp_inner.reverse_flag ? this.zpp_inner.inner.add(a(e)) : (this.zpp_inner.push_ite == null && (this.zpp_inner.push_ite = this.zpp_inner.inner.head == null ? null : this.zpp_inner.inner.iterator_at(h(this) - 1)), this.zpp_inner.push_ite = this.zpp_inner.inner.insert(this.zpp_inner.push_ite, a(e))), this.zpp_inner.invalidate(), this.zpp_inner.post_adder != null && this.zpp_inner.post_adder(e)), n; }, m.prototype.unshift = function (e) { if (this.zpp_inner.immutable)
    throw Error("".concat(t, "List is immutable")); this.zpp_inner.modify_test(), this.zpp_inner.valmod(); var n = this.zpp_inner.adder == null || this.zpp_inner.adder(e); return n && (this.zpp_inner.reverse_flag ? (this.zpp_inner.push_ite == null && (this.zpp_inner.push_ite = this.zpp_inner.inner.head == null ? null : this.zpp_inner.inner.iterator_at(h(this) - 1)), this.zpp_inner.push_ite = this.zpp_inner.inner.insert(this.zpp_inner.push_ite, a(e))) : this.zpp_inner.inner.add(a(e)), this.zpp_inner.invalidate(), this.zpp_inner.post_adder != null && this.zpp_inner.post_adder(e)), n; }, m.prototype.pop = function () { if (this.zpp_inner.immutable)
    throw Error("".concat(t, "List is immutable")); if (this.zpp_inner.modify_test(), this.zpp_inner.inner.head == null)
    throw Error("Cannot remove from empty list"); this.zpp_inner.valmod(); var e; if (this.zpp_inner.reverse_flag) {
    e = this.zpp_inner.inner.head.elt;
    var t_5 = i(e);
    this.zpp_inner.subber != null && this.zpp_inner.subber(t_5), this.zpp_inner.dontremove || this.zpp_inner.inner.pop();
}
else {
    this.zpp_inner.at_ite != null && this.zpp_inner.at_ite.next == null && (this.zpp_inner.at_ite = null);
    var t_6;
    t_6 = h(this) == 1 ? null : this.zpp_inner.inner.iterator_at(h(this) - 2), e = t_6 == null ? this.zpp_inner.inner.head.elt : t_6.next.elt;
    var n_4 = i(e);
    this.zpp_inner.subber != null && this.zpp_inner.subber(n_4), this.zpp_inner.dontremove || this.zpp_inner.inner.erase(t_6);
} return this.zpp_inner.invalidate(), i(e); }, m.prototype.shift = function () { if (this.zpp_inner.immutable)
    throw Error("".concat(t, "List is immutable")); if (this.zpp_inner.modify_test(), this.zpp_inner.inner.head == null)
    throw Error("Cannot remove from empty list"); this.zpp_inner.valmod(); var e; if (this.zpp_inner.reverse_flag) {
    this.zpp_inner.at_ite != null && this.zpp_inner.at_ite.next == null && (this.zpp_inner.at_ite = null);
    var t_7;
    t_7 = h(this) == 1 ? null : this.zpp_inner.inner.iterator_at(h(this) - 2), e = t_7 == null ? this.zpp_inner.inner.head.elt : t_7.next.elt;
    var n_5 = i(e);
    this.zpp_inner.subber != null && this.zpp_inner.subber(n_5), this.zpp_inner.dontremove || this.zpp_inner.inner.erase(t_7);
}
else {
    e = this.zpp_inner.inner.head.elt;
    var t_8 = i(e);
    this.zpp_inner.subber != null && this.zpp_inner.subber(t_8), this.zpp_inner.dontremove || this.zpp_inner.inner.pop();
} return this.zpp_inner.invalidate(), i(e); }, m.prototype.add = function (e) { return this.zpp_inner.reverse_flag ? this.push(e) : this.unshift(e); }, m.prototype.remove = function (e) { if (this.zpp_inner.immutable)
    throw Error("".concat(t, "List is immutable")); this.zpp_inner.modify_test(), this.zpp_inner.valmod(); var n = !1, r = this.zpp_inner.inner.head, i = a(e); for (; r != null;) {
    if (r.elt == i) {
        n = !0;
        break;
    }
    r = r.next;
} return n && (this.zpp_inner.subber != null && this.zpp_inner.subber(e), this.zpp_inner.dontremove || this.zpp_inner.inner.remove(i), this.zpp_inner.invalidate()), n; }, m.prototype.clear = function () { if (this.zpp_inner.immutable)
    throw Error("".concat(t, "List is immutable")); if (this.zpp_inner.reverse_flag)
    for (; this.zpp_inner.inner.head != null;)
        this.pop();
else
    for (; this.zpp_inner.inner.head != null;)
        this.shift(); }, m.prototype.empty = function () { return this.zpp_inner.inner.head == null; }, m.prototype.iterator = function () { return this.zpp_inner.valmod(), f.get(this); }, m.prototype.copy = function (e) { e == null && (e = !1); var n = new m, r = f.get(this); for (; r.hasNext();) {
    var i_1 = r.next();
    if (e)
        throw Error("".concat(t, " is not a copyable type"));
    n.push(i_1);
} return n; }, m.prototype.merge = function (e) { if (e == null)
    throw Error("Cannot merge with null list"); var t = f.get(e); for (; t.hasNext();) {
    var e_1 = t.next();
    this.has(e_1) || (this.zpp_inner.reverse_flag ? this.push(e_1) : this.unshift(e_1));
} }, m.prototype.toString = function () { var e = "[", t = !0, n = f.get(this); for (; n.hasNext();) {
    var r_1 = n.next();
    t || (e += ","), e += r_1 == null ? "NULL" : r_1.toString(), t = !1;
} return e + "]"; }, m.prototype.foreach = function (e) { if (e == null)
    throw Error("Cannot execute null on list elements"); this.zpp_inner.valmod(); var t = f.get(this); for (; t.hasNext();)
    try {
        e(t.next());
    }
    catch (e) {
        t.zpp_next = f.zpp_pool, f.zpp_pool = t, t.zpp_inner = null;
        break;
    } return this; }, m.prototype.filter = function (e) { if (e == null)
    throw Error("Cannot select elements of list with null"); var t = 0; for (; t < h(this);) {
    var n_6 = this.at(t);
    try {
        e(n_6) ? ++t : this.remove(n_6);
    }
    catch (e) {
        break;
    }
} return this; }, m.prototype.toArray = function () { var e = [], t = f.get(this); for (; t.hasNext();)
    e.push(t.next()); return e; }, p(m.prototype, function (e) { return f.get(e); }); var g = u(), _ = t + "Iterator", v = t + "List"; return g[_] = f, g[v] = m, { Iterator: f, List: m }; }
function v(e, t) { var n; if (!e)
    return null; var r = xn.get(e); return r || (r = (n = e.outer) == null ? t(e) : n, xn.set(e, r)), r; }
function y(e) { e.zpp_inner.weak && e.dispose(); }
function b(e) { if (e != null && e.zpp_disp)
    throw Error("Vec2 has been disposed and cannot be used!"); }
function x(e) { if (e.wrap != null) {
    e.wrap.zpp_inner._inuse = !1;
    var t_9 = e.wrap;
    if (t_9 != null && t_9.zpp_disp)
        throw Error("Vec2 has been disposed and cannot be used!");
    var n_7 = t_9.zpp_inner;
    if (n_7._immutable)
        throw Error("Vec2 is immutable");
    if (n_7._isimmutable != null && n_7._isimmutable(), t_9.zpp_inner._inuse)
        throw Error("This Vec2 is not disposable");
    var r_2 = t_9.zpp_inner;
    t_9.zpp_inner.outer = null, t_9.zpp_inner = null, t_9.zpp_pool = null, H.nextVec2 == null ? H.poolVec2 = t_9 : H.nextVec2.zpp_pool = t_9, H.nextVec2 = t_9, t_9.zpp_disp = !0, r_2.free(), r_2.next = V.zpp_pool, V.zpp_pool = r_2, e.wrap = null;
} }
function S(e, t, n, r, i) { var a = t.next; if (a.value != 0)
    return n; var o = (t.posx + a.posx) * .5, s = (t.posy + a.posy) * .5, c = n ? -1e-8 : 1e-8; return E(e, o + r * c, s + i * c) ? !n : n; }
function C(e) { var t = 0, n = e; do {
    var e_2 = n.next;
    t += n.x * e_2.y - e_2.x * n.y, n = e_2;
} while (n != e); return Math.abs(t) * .5; }
function w(e, t) { return W.get(e, t); }
function T(e, t) { var n = e; do {
    if (!t(n.x, n.y)) {
        n = n.next;
        continue;
    }
    var e_3 = n.next;
    for (; e_3 != n.prev;) {
        var t_10 = e_3.next;
        if (e_3.x == n.x && e_3.y == n.y)
            return [e_3, n];
        var r_3 = t_10.x - e_3.x, i_2 = t_10.y - e_3.y, a_1 = r_3 * r_3 + i_2 * i_2, o_1 = n.x - e_3.x, s_1 = n.y - e_3.y, c_1 = o_1 * r_3 + s_1 * i_2;
        if (c_1 > 0 && c_1 < a_1 && Math.abs(o_1 * i_2 - s_1 * r_3) <= R.epsilon * Math.sqrt(a_1) && (t_10.x != n.x || t_10.y != n.y)) {
            var r_4 = w(n.x, n.y);
            return r_4.prev = e_3, r_4.next = t_10, e_3.next = r_4, t_10.prev = r_4, [r_4, n];
        }
        e_3 = t_10;
    }
    n = n.next;
} while (n != e); return null; }
function ee(e, t) { var n = [e], r = []; for (; n.length > 0;) {
    var e_4 = n.pop();
    if (e_4.next == e_4 || e_4.next.next == e_4) {
        r.push(e_4);
        continue;
    }
    var i_3 = T(e_4, t);
    if (i_3 == null) {
        r.push(e_4);
        continue;
    }
    var a_2 = i_3[0], o_2 = i_3[1], s_2 = a_2.next, c_2 = o_2.next;
    a_2.next = c_2, c_2.prev = a_2, o_2.next = s_2, s_2.prev = o_2, n.push(a_2, o_2);
} return r; }
function E(e, t, n) { var r = !1; if (e == null)
    return r; var i = e; do {
    var e_5 = i.prev;
    (i.y < n && e_5.y >= n || e_5.y < n && i.y >= n) && (i.x <= t || e_5.x <= t) && i.x + (n - i.y) / (e_5.y - i.y) * (e_5.x - i.x) < t && (r = !r), i = i.next;
} while (i != e); return r; }
function D(e) { var t = null; return e.prev != e && (t = e.prev, e.prev.next = e.next, e.next.prev = e.prev), e.free(), e.next = W.zpp_pool, W.zpp_pool = e, t; }
function O(e) { _r = e; }
function k(e) { vr = e; }
function te(e) { yr = e; }
function A(e, t, n, r) { var i = d(), a = i.__zpp;
    var o = (function (_super) {
        __extends(o, _super);
        function o() {
            var _this = this;
            _this = _super.call(this) || this, _this.inner = new a.util[e];
            return _this;
        }
        o.get = function (e, r) {
            if (r === void 0) { r = !1; }
            var a = new i[t][n];
            return a.zpp_inner.inner = e, r && (a.zpp_inner.immutable = !0), a.zpp_inner.zip_length = !0, a;
        };
        return o;
    }(Mr)); return o.internal = !1, a.util[r] = o, o; }
function j(e) { return e === 1 ? Cr.STATIC : e === 2 ? Cr.DYNAMIC : e === 3 ? Cr.KINEMATIC : null; }
function M(e) { if (e.zpp_disp)
    throw Error("Vec2 has been disposed and cannot be used!"); var t = e.zpp_inner; return t._validate != null && t._validate(), t.x; }
function N(e) { if (e.zpp_disp)
    throw Error("Vec2 has been disposed and cannot be used!"); var t = e.zpp_inner; return t._validate != null && t._validate(), t.y; }
function P(e, t, n) { return Sn.get(e, t, n); }
function F(e, t) { return U[e] == null && (U.internal = !0, U[e] = t(), U.internal = !1), U[e]; }
function ne(e, t) { return e === F("BodyType_DYNAMIC", function () { return new t.phys.BodyType; }) ? 2 : e === F("BodyType_KINEMATIC", function () { return new t.phys.BodyType; }) ? 3 : 1; }
function I(e) { var t = e.shapes.head; for (; t != null;) {
    var e_6 = t.elt;
    e_6.type === 1 && (e_6.polygon.invalidate_gverts(), e_6.polygon.invalidate_gaxi()), e_6.invalidate_worldCOM(), t = t.next;
} }
function L(e) { return e.type === 0; }
function re(e) { return e.circle.radius; }
function ie(e) { var t = pi.length; for (; t < e;)
    t <<= 1; pi = new Float64Array(t), mi = new Float64Array(t), hi = new Uint8Array(t), gi = new Int32Array(t), _i = new Int32Array(t); }
function ae(e, t) { return t == 4 ? e.FLUIDstamp : t == 2 ? e.SENSORstamp : e.COLLISIONstamp; }
function oe(e, t) { return t == 4 ? e.FLUIDstate : t == 2 ? e.SENSORstate : e.COLLISIONstate; }
function se(e, t, n) { t == 4 ? e.FLUIDstamp = n : t == 2 ? e.SENSORstamp = n : e.COLLISIONstamp = n; }
function ce(e, t, n) { t == 4 ? e.FLUIDstate = n : t == 2 ? e.SENSORstate = n : e.COLLISIONstate = n; }
function le(e) { Ii = e; }
function ue(e) { Li = e; }
function de(e) { Ri = e; }
function fe(e) { if (e.outer == null) {
    e.outer = new (d()).geom.Vec2;
    var t_11 = e.outer.zpp_inner;
    t_11.free(), t_11.next = V.zpp_pool, V.zpp_pool = t_11, e.outer.zpp_inner = e;
} return e.outer; }
function pe() { this.at_index = 0, this.at_ite = null, this.zip_length = !1, this._length = 0, this.inner = null, g.call(this), this.at_ite = null, this.at_index = 0, this.zip_length = !0, this._length = 0; }
function me(e, t, n) {
    if (n === void 0) { n = ea; }
    var r = [];
    for (var i_4 = 0; i_4 <= n; i_4++) {
        var a_3 = -Math.PI / 2 + Math.PI * i_4 / n;
        r.push({ x: e + t * Math.cos(a_3), y: t * Math.sin(a_3) });
    }
    for (var i_5 = 0; i_5 <= n; i_5++) {
        var a_4 = Math.PI / 2 + Math.PI * i_5 / n;
        r.push({ x: -e + t * Math.cos(a_4), y: t * Math.sin(a_4) });
    }
    return r;
}
function he(e) { if (e.zpp_disp)
    throw Error("Vec2 has been disposed and cannot be used!"); var t = e.zpp_inner; return t._validate != null && t._validate(), t.x; }
function ge(e) { if (e.zpp_disp)
    throw Error("Vec2 has been disposed and cannot be used!"); var t = e.zpp_inner; return t._validate != null && t._validate(), t.y; }
function _e(e) { if (e.zpp_disp)
    throw Error("Vec2 has been disposed and cannot be used!"); var t = e.zpp_inner; return t._validate != null && t._validate(), t.x; }
function ve(e) { if (e.zpp_disp)
    throw Error("Vec2 has been disposed and cannot be used!"); var t = e.zpp_inner; return t._validate != null && t._validate(), t.y; }
function ye(e) { if (e.zpp_disp)
    throw Error("Vec2 has been disposed and cannot be used!"); var t = e.zpp_inner; return t._validate != null && t._validate(), t.x; }
function be(e) { if (e.zpp_disp)
    throw Error("Vec2 has been disposed and cannot be used!"); var t = e.zpp_inner; return t._validate != null && t._validate(), t.y; }
function xe(e) { if (e.zpp_disp)
    throw Error("Vec2 has been disposed and cannot be used!"); var t = e.zpp_inner; return t._validate != null && t._validate(), t.x; }
function Se(e) { if (e.zpp_disp)
    throw Error("Vec2 has been disposed and cannot be used!"); var t = e.zpp_inner; return t._validate != null && t._validate(), t.y; }
function Ce(e) { if (e.zpp_disp)
    throw Error("Vec2 has been disposed and cannot be used!"); var t = e.zpp_inner; return t._validate != null && t._validate(), t.x; }
function we(e) { if (e.zpp_disp)
    throw Error("Vec2 has been disposed and cannot be used!"); var t = e.zpp_inner; return t._validate != null && t._validate(), t.y; }
function Te(e) { if (e.zpp_disp)
    throw Error("Vec2 has been disposed and cannot be used!"); var t = e.zpp_inner; return t._validate != null && t._validate(), t.x; }
function Ee(e) { if (e.zpp_disp)
    throw Error("Vec2 has been disposed and cannot be used!"); var t = e.zpp_inner; return t._validate != null && t._validate(), t.y; }
var R, De, z, B, Oe, ke, Ae, je, Me, Ne, Pe, Fe, Ie, Le, Re, ze, Be, Ve, He, Ue, We, Ge, Ke, qe, Je, Ye, Xe, Ze, Qe, $e, et, tt, nt, rt, it, at, ot, st, ct, lt, ut, dt, ft, pt, mt, ht, gt, _t, vt, yt, bt, xt, St, Ct, wt, Tt, Et, Dt, Ot, kt, At, jt, Mt, Nt, Pt, Ft, It, Lt, Rt, zt, Bt, Vt, Ht, Ut, Wt, Gt, Kt, qt, Jt, Yt, Xt, Zt, Qt, $t, en, V, tn, nn, rn, an, on, sn, cn, ln, un, dn, fn, pn, mn, hn, gn, _n, vn, yn, bn, xn, H, Sn, Cn, wn, Tn, En, Dn, On, kn, An, jn, U, Mn, Nn, Pn, W, Fn, In, Ln, Rn, zn, Bn, Vn, Hn, Un, Wn, Gn, Kn, qn, Jn, Yn, Xn, G, Zn, K, Qn, $n, er, tr, nr, rr, ir, ar, or, q, sr, cr, lr, ur, dr, fr, pr, mr, hr, gr, _r, vr, yr, br, xr, Sr, Cr, wr, Tr, Er, J, Dr, Or, kr, Ar, jr, Y, Mr, Nr, Pr, Fr, Ir, Lr, Rr, zr, Br, Vr, Hr, Ur, Wr, Gr, Kr, qr, Jr, Yr, Xr, Zr, Qr, $r, ei, ti, ni, ri, ii, ai, oi, si, X, ci, li, ui, di, fi, pi, mi, hi, gi, _i, vi, yi, bi, xi, Si, Ci, wi, Ti, Ei, Di, Oi, ki, Z, Ai, ji, Mi, Ni, Pi, Fi, Ii, Li, Ri, zi, Bi, Vi, Hi, Ui, Wi, Gi, Ki, qi, Ji, Yi, Xi, Zi, Qi, $i, ea, ta, na, ra, ia, aa, oa, Q, sa, ca, $, la, ua, da, fa, pa, ma, ha, ga, _a, va, ya, ba, xa, Sa, Ca, wa, Ta, Ea, Da, Oa, ka, Aa;
function ja() { return (ja = e.n((function () {
    var _b, _c;
    u(), R = { epsilon: 1e-8, fluidAngularDragFriction: 2.5, fluidAngularDrag: 100, fluidVacuumDrag: .5, fluidLinearDrag: .5, collisionSlop: .2, collisionSlopCCD: .5, distanceThresholdCCD: .05, staticCCDLinearThreshold: .05, staticCCDAngularThreshold: .005, bulletCCDLinearThreshold: .125, bulletCCDAngularThreshold: .0125, dynamicSweepLinearThreshold: 17, dynamicSweepAngularThreshold: .6, angularCCDSlipScale: .75, arbiterExpirationDelay: 6, staticFrictionThreshold: 2, elasticThreshold: 20, sleepDelay: 60, linearSleepThreshold: .2, angularSleepThreshold: .4, contactBiasCoef: .3, contactStaticBiasCoef: .6, contactContinuousBiasCoef: .4, contactContinuousStaticBiasCoef: .5, constraintLinearSlop: .1, constraintAngularSlop: .001, illConditionedThreshold: 2e8 }, z = (function () {
        function z() {
            this.elt = null, this.next = null;
        }
        z.prototype.free = function () { this.elt = null; };
        return z;
    }()), z.zpp_pool = null, B = (function () {
        function B() {
            this.head = null, this.length = 0, this.modified = !1, this.pushmod = !1;
        }
        B.prototype._allocNode = function () { var e; return z.zpp_pool == null ? e = new z : (e = z.zpp_pool, z.zpp_pool = e.next, e.next = null), e; };
        B.prototype._freeNode = function (e) { e.elt = null, e.next = z.zpp_pool, z.zpp_pool = e; };
        B.prototype.add = function (e) { var t = this._allocNode(); return t.elt = e, t.next = this.head, this.head = t, this.modified = !0, this.length++, e; };
        B.prototype.insert = function (e, t) { var n = this._allocNode(); return n.elt = t, e == null ? (n.next = this.head, this.head = n) : (n.next = e.next, e.next = n), this.pushmod = this.modified = !0, this.length++, n; };
        B.prototype.pop = function () { var e = this.head; this.head = e.next, this._freeNode(e), this.head == null && (this.pushmod = !0), this.modified = !0, this.length--; };
        B.prototype.pop_unsafe = function () { var e = this.head.elt; return this.pop(), e; };
        B.prototype.erase = function (e) { var t, n; return e == null ? (t = this.head, n = t.next, this.head = n, this.head == null && (this.pushmod = !0)) : (t = e.next, n = t.next, e.next = n, n == null && (this.pushmod = !0)), this._freeNode(t), this.modified = !0, this.length--, this.pushmod = !0, n; };
        B.prototype.remove = function (e) { var t = null, n = this.head; for (; n != null;) {
            if (n.elt == e) {
                this.erase(t);
                break;
            }
            t = n, n = n.next;
        } };
        B.prototype.clear = function () { for (; this.head != null;) {
            var e_7 = this.head;
            this.head = e_7.next, this._freeNode(e_7), this.head == null && (this.pushmod = !0), this.modified = !0, this.length--;
        } this.pushmod = !0; };
        B.prototype.reverse = function () { var e = this.head, t = null; for (; e != null;) {
            var n_8 = e.next;
            e.next = t, this.head = e, t = e, e = n_8;
        } this.modified = !0, this.pushmod = !0; };
        B.prototype.empty = function () { return this.head == null; };
        B.prototype.has = function (e) { var t = this.head; for (; t != null;) {
            if (t.elt == e)
                return !0;
            t = t.next;
        } return !1; };
        B.prototype.iterator_at = function (e) { var t = this.head; for (; e-- > 0 && t != null;)
            t = t.next; return t; };
        B.prototype.at = function (e) { var t = this.iterator_at(e); return t == null ? null : t.elt; };
        return B;
    }()), Oe = (function () {
        function Oe() {
            this.colour = 0, this.parent = null, this.next = null, this.prev = null, this.data = null, this.swapped = null, this.lt = null;
        }
        Oe.prototype._allocNode = function () { var e = this.constructor, t; return e.zpp_pool == null ? t = new e : (t = e.zpp_pool, e.zpp_pool = t.next, t.next = null), t; };
        Oe.prototype._freeNode = function (e) { var t = this.constructor; e.data = null, e.lt = null, e.swapped = null, e.next = t.zpp_pool, t.zpp_pool = e; };
        Oe.prototype.free = function () { this.data = null, this.lt = null, this.swapped = null; };
        Oe.prototype.empty = function () { return this.parent == null; };
        Oe.prototype.singular = function () { return this.parent != null && this.parent.prev == null && this.parent.next == null; };
        Oe.prototype.has = function (e) { return this.find(e) != null; };
        Oe.prototype.find = function (e) { var t = this.parent; for (; t != null && t.data != e;)
            t = this.lt(e, t.data) ? t.prev : t.next; return t; };
        Oe.prototype.find_weak = function (e) { var t = this.parent; for (; t != null;)
            if (this.lt(e, t.data))
                t = t.prev;
            else if (this.lt(t.data, e))
                t = t.next;
            else
                break; return t; };
        Oe.prototype.first = function () { var e = this.parent; for (; e.prev != null;)
            e = e.prev; return e.data; };
        Oe.prototype.pop_front = function () { var e = this.parent; for (; e.prev != null;)
            e = e.prev; var t = e.data; return this.remove_node(e), t; };
        Oe.prototype.remove = function (e) { this.remove_node(this.find(e)); };
        Oe.prototype.successor_node = function (e) { if (e.next != null)
            for (e = e.next; e.prev != null;)
                e = e.prev;
        else {
            var t_12 = e;
            for (e = e.parent; e != null && e.prev != t_12;)
                t_12 = e, e = e.parent;
        } return e; };
        Oe.prototype.predecessor_node = function (e) { if (e.prev != null)
            for (e = e.prev; e.next != null;)
                e = e.next;
        else {
            var t_13 = e;
            for (e = e.parent; e != null && e.next != t_13;)
                t_13 = e, e = e.parent;
        } return e; };
        Oe.prototype.remove_node = function (e) { if (e.next != null && e.prev != null) {
            var t_14 = e.next;
            for (; t_14.prev != null;)
                t_14 = t_14.prev;
            var n_9 = e.data;
            e.data = t_14.data, t_14.data = n_9, this.swapped != null && this.swapped(e.data, t_14.data), e = t_14;
        } var t = e.prev == null ? e.next : e.prev; if (e.colour == 1) {
            if (e.prev != null || e.next != null)
                t.colour = 1;
            else if (e.parent != null) {
                var t_15 = e.parent;
                for (;;) {
                    t_15.colour++, t_15.prev.colour--, t_15.next.colour--;
                    var e_8 = t_15.prev;
                    if (e_8.colour == -1) {
                        this.__fix_neg_red(e_8);
                        break;
                    }
                    if (e_8.colour == 0) {
                        if (e_8.prev != null && e_8.prev.colour == 0) {
                            this.__fix_dbl_red(e_8.prev);
                            break;
                        }
                        if (e_8.next != null && e_8.next.colour == 0) {
                            this.__fix_dbl_red(e_8.next);
                            break;
                        }
                    }
                    var n_10 = t_15.next;
                    if (n_10.colour == -1) {
                        this.__fix_neg_red(n_10);
                        break;
                    }
                    if (n_10.colour == 0) {
                        if (n_10.prev != null && n_10.prev.colour == 0) {
                            this.__fix_dbl_red(n_10.prev);
                            break;
                        }
                        if (n_10.next != null && n_10.next.colour == 0) {
                            this.__fix_dbl_red(n_10.next);
                            break;
                        }
                    }
                    if (t_15.colour == 2) {
                        if (t_15.parent == null)
                            t_15.colour = 1;
                        else {
                            t_15 = t_15.parent;
                            continue;
                        }
                    }
                    break;
                }
            }
        } var n = e.parent; n == null ? this.parent = t : n.prev == e ? n.prev = t : n.next = t, t != null && (t.parent = n), e.parent = e.prev = e.next = null, this._freeNode(e); };
        Oe.prototype.clear = function () { if (this.parent != null) {
            var e_9 = this.parent;
            for (; e_9 != null;)
                if (e_9.prev != null)
                    e_9 = e_9.prev;
                else if (e_9.next != null)
                    e_9 = e_9.next;
                else {
                    var t_16 = e_9.parent;
                    t_16 != null && (e_9 == t_16.prev ? t_16.prev = null : t_16.next = null, e_9.parent = null), this._freeNode(e_9), e_9 = t_16;
                }
            this.parent = null;
        } };
        Oe.prototype.__fix_neg_red = function (e) { var t = e.parent, n; if (t.prev == e) {
            var r_5 = e.prev, i_6 = e.next, a_5 = i_6.prev, o_3 = i_6.next;
            r_5.colour = 0, e.colour = t.colour = 1, e.next = a_5, a_5 != null && (a_5.parent = e);
            var s_3 = t.data;
            t.data = i_6.data, i_6.data = s_3, this.swapped != null && this.swapped(t.data, i_6.data), i_6.prev = o_3, o_3 != null && (o_3.parent = i_6), i_6.next = t.next, t.next != null && (t.next.parent = i_6), t.next = i_6, i_6 != null && (i_6.parent = t), n = r_5;
        }
        else {
            var r_6 = e.next, i_7 = e.prev, a_6 = i_7.next, o_4 = i_7.prev;
            r_6.colour = 0, e.colour = t.colour = 1, e.prev = a_6, a_6 != null && (a_6.parent = e);
            var s_4 = t.data;
            t.data = i_7.data, i_7.data = s_4, this.swapped != null && this.swapped(t.data, i_7.data), i_7.next = o_4, o_4 != null && (o_4.parent = i_7), i_7.prev = t.prev, t.prev != null && (t.prev.parent = i_7), t.prev = i_7, i_7 != null && (i_7.parent = t), n = r_6;
        } n.prev != null && n.prev.colour == 0 ? this.__fix_dbl_red(n.prev) : n.next != null && n.next.colour == 0 && this.__fix_dbl_red(n.next); };
        Oe.prototype.__fix_dbl_red = function (e) { for (;;) {
            var t_17 = e.parent, n_11 = t_17.parent;
            if (n_11 == null) {
                t_17.colour = 1;
                break;
            }
            var r_7 = void 0, i_8 = void 0, a_7 = void 0, o_5 = void 0, s_5 = void 0, c_3 = void 0, l_1 = void 0;
            t_17 == n_11.prev ? (a_7 = n_11, l_1 = n_11.next, e == t_17.prev ? (r_7 = e, i_8 = t_17, o_5 = e.prev, s_5 = e.next, c_3 = t_17.next) : (r_7 = t_17, i_8 = e, o_5 = t_17.prev, s_5 = e.prev, c_3 = e.next)) : (r_7 = n_11, o_5 = n_11.prev, e == t_17.prev ? (i_8 = e, a_7 = t_17, s_5 = e.prev, c_3 = e.next, l_1 = t_17.next) : (i_8 = t_17, a_7 = e, s_5 = t_17.prev, c_3 = e.prev, l_1 = e.next));
            var u_1 = n_11.parent;
            if (u_1 == null ? this.parent = i_8 : u_1.prev == n_11 ? u_1.prev = i_8 : u_1.next = i_8, i_8 != null && (i_8.parent = u_1), r_7.prev = o_5, o_5 != null && (o_5.parent = r_7), r_7.next = s_5, s_5 != null && (s_5.parent = r_7), i_8.prev = r_7, r_7 != null && (r_7.parent = i_8), i_8.next = a_7, a_7 != null && (a_7.parent = i_8), a_7.prev = c_3, c_3 != null && (c_3.parent = a_7), a_7.next = l_1, l_1 != null && (l_1.parent = a_7), i_8.colour = n_11.colour - 1, r_7.colour = 1, a_7.colour = 1, i_8 == this.parent)
                this.parent.colour = 1;
            else if (i_8.colour == 0 && i_8.parent.colour == 0) {
                e = i_8;
                continue;
            }
            break;
        } };
        Oe.prototype.try_insert_bool = function (e) { var t = null; if (this.parent == null)
            t = this._allocNode(), t.data = e, this.parent = t;
        else {
            var n_12 = this.parent;
            for (;;)
                if (this.lt(e, n_12.data)) {
                    if (n_12.prev == null) {
                        t = this._allocNode(), t.data = e, n_12.prev = t, t.parent = n_12;
                        break;
                    }
                    n_12 = n_12.prev;
                }
                else if (this.lt(n_12.data, e)) {
                    if (n_12.next == null) {
                        t = this._allocNode(), t.data = e, n_12.next = t, t.parent = n_12;
                        break;
                    }
                    n_12 = n_12.next;
                }
                else
                    break;
        } return t != null && (t.parent == null ? t.colour = 1 : (t.colour = 0, t.parent.colour == 0 && this.__fix_dbl_red(t)), !0); };
        Oe.prototype.try_insert = function (e) { var t = null, n = null; if (this.parent == null)
            t = this._allocNode(), t.data = e, this.parent = t;
        else
            for (n = this.parent;;)
                if (this.lt(e, n.data)) {
                    if (n.prev == null) {
                        t = this._allocNode(), t.data = e, n.prev = t, t.parent = n;
                        break;
                    }
                    n = n.prev;
                }
                else if (this.lt(n.data, e)) {
                    if (n.next == null) {
                        t = this._allocNode(), t.data = e, n.next = t, t.parent = n;
                        break;
                    }
                    n = n.next;
                }
                else
                    break; return t == null ? n : (t.parent == null ? t.colour = 1 : (t.colour = 0, t.parent.colour == 0 && this.__fix_dbl_red(t)), t); };
        Oe.prototype.insert = function (e) { var t = this._allocNode(); if (t.data = e, this.parent == null)
            this.parent = t;
        else {
            var e_10 = this.parent;
            for (;;)
                if (this.lt(t.data, e_10.data)) {
                    if (e_10.prev == null) {
                        e_10.prev = t, t.parent = e_10;
                        break;
                    }
                    e_10 = e_10.prev;
                }
                else if (e_10.next == null) {
                    e_10.next = t, t.parent = e_10;
                    break;
                }
                else
                    e_10 = e_10.next;
        } return t.parent == null ? t.colour = 1 : (t.colour = 0, t.parent.colour == 0 && this.__fix_dbl_red(t)), t; };
        return Oe;
    }()), Oe.zpp_pool = null, ke = z, Ae = z, je = z, Me = z, Ne = z, Pe = z, Fe = z, Ie = z, Le = z, Re = z, ze = z, Be = z, Ve = z, He = z, Ue = z, We = z, Ge = z, Ke = z, qe = z, Je = z, Ye = z, Xe = z, Ze = z, Qe = z, $e = z, et = z, tt = z, nt = z, rt = z, it = z, at = z, ot = z, st = z, ct = z, lt = z, ut = B, dt = B, ft = B, pt = B, mt = B, ht = B, gt = B, _t = B, vt = B, yt = B, bt = B, xt = B, St = B, Ct = B, wt = B, Tt = B, Et = B, Dt = B, Ot = B, kt = B, At = B, jt = B, Mt = B, Nt = B, Pt = B, Ft = B, It = B, Lt = B, Rt = B, zt = B, Bt = B, Vt = B, Ht = B, Ut = B, Wt = B, Gt = (function (_super) {
        __extends(Gt, _super);
        function Gt() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Gt;
    }(Oe)), Gt.zpp_pool = null, Kt = (function (_super) {
        __extends(Kt, _super);
        function Kt() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Kt;
    }(Oe)), Kt.zpp_pool = null, qt = (function (_super) {
        __extends(qt, _super);
        function qt() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return qt;
    }(Oe)), qt.zpp_pool = null, Jt = (function (_super) {
        __extends(Jt, _super);
        function Jt() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Jt;
    }(Oe)), Jt.zpp_pool = null, Yt = (function (_super) {
        __extends(Yt, _super);
        function Yt() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Yt;
    }(Oe)), Yt.zpp_pool = null, Xt = (function (_super) {
        __extends(Xt, _super);
        function Xt() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Xt;
    }(Oe)), Xt.zpp_pool = null, Zt = (function (_super) {
        __extends(Zt, _super);
        function Zt() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Zt;
    }(Oe)), Zt.zpp_pool = null, Qt = (function (_super) {
        __extends(Qt, _super);
        function Qt() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Qt;
    }(Oe)), Qt.zpp_pool = null, $t = (function () {
        function $t() {
            this.outer = null, this.inner = null, this.immutable = !1, this._invalidated = !1, this._invalidate = null, this._validate = null, this._modifiable = null, this.adder = null, this.post_adder = null, this.subber = null, this.dontremove = !1, this.reverse_flag = !1, this.at_index = 0, this.at_ite = null, this.push_ite = null, this.zip_length = !1, this.user_length = 0, this.inner = new jt, this._invalidated = !0;
        }
        $t.get = function (e, t) { t == null && (t = !1); var n = new (d()).geom.Vec2List; return n.zpp_inner.inner = e, t && (n.zpp_inner.immutable = !0), n.zpp_inner.zip_length = !0, n; };
        $t.prototype.valmod = function () { this.validate(), this.inner.modified && (this.inner.pushmod && (this.push_ite = null), this.at_ite = null, this.inner.modified = !1, this.inner.pushmod = !1, this.zip_length = !0); };
        $t.prototype.modified = function () { this.zip_length = !0, this.at_ite = null, this.push_ite = null; };
        $t.prototype.modify_test = function () { this._modifiable != null && this._modifiable(); };
        $t.prototype.validate = function () { this._invalidated && (this._invalidated = !1, this._validate != null && this._validate()); };
        $t.prototype.invalidate = function () { this._invalidated = !0, this._invalidate != null && this._invalidate(this); };
        return $t;
    }()), $t.internal = !1, en = (function () {
        function e() {
            this.x = 0, this.y = 0, this.next = null, this.length = 0, this.modified = !1, this.pushmod = !1, this._inuse = !1, this.weak = !1, this.outer = null, this._immutable = !1, this._isimmutable = null, this._validate = null, this._invalidate = null;
        }
        e.get = function (t, n, r) { r == null && (r = !1); var i; return e.zpp_pool == null ? i = new e : (i = e.zpp_pool, e.zpp_pool = i.next, i.next = null), i.weak = !1, i._immutable = r, i.x = t, i.y = n, i; };
        e.prototype.validate = function () { this._validate != null && this._validate(); };
        e.prototype.invalidate = function () { this._invalidate != null && this._invalidate(this); };
        e.prototype.immutable = function () { if (this._immutable)
            throw Error("Vec2 is immutable"); this._isimmutable != null && this._isimmutable(); };
        e.prototype.wrapper = function () { return this.outer == null && (this.outer = e._wrapFn(this)), this.outer; };
        e.prototype.free = function () { this.outer != null && (this.outer.zpp_inner = null, this.outer = null), this._isimmutable = null, this._validate = null, this._invalidate = null; };
        e.prototype.add = function (e) { return e._inuse = !0, e.next = this.next, this.next = e, this.modified = !0, this.length++, e; };
        e.prototype.insert = function (e, t) { return t._inuse = !0, e == null ? (t.next = this.next, this.next = t) : (t.next = e.next, e.next = t), this.pushmod = this.modified = !0, this.length++, t; };
        e.prototype.pop = function () { var e = this.next; this.next = e.next, e._inuse = !1, this.next == null && (this.pushmod = !0), this.modified = !0, this.length--; };
        e.prototype.pop_unsafe = function () { var e = this.next; return this.pop(), e; };
        e.prototype.remove = function (e) { var t = null, n = this.next; for (; n != null;) {
            if (n === e) {
                var e_11 = void 0;
                t == null ? (e_11 = this.next, this.next = e_11.next, this.next == null && (this.pushmod = !0)) : (e_11 = t.next, t.next = e_11.next, e_11.next == null && (this.pushmod = !0)), e_11._inuse = !1, this.modified = !0, this.length--, this.pushmod = !0;
                break;
            }
            t = n, n = n.next;
        } };
        e.prototype.erase = function (e) { var t, n; return e == null ? (t = this.next, n = t.next, this.next = n, this.next == null && (this.pushmod = !0)) : (t = e.next, n = t.next, e.next = n, n == null && (this.pushmod = !0)), t._inuse = !1, this.modified = !0, this.length--, this.pushmod = !0, n; };
        e.prototype.clear = function () { };
        e.prototype.reverse = function () { var e = this.next, t = null; for (; e != null;) {
            var n_13 = e.next;
            e.next = t, this.next = e, t = e, e = n_13;
        } this.modified = !0, this.pushmod = !0; };
        e.prototype.empty = function () { return this.next == null; };
        e.prototype.has = function (e) { var t = this.next; for (; t != null;) {
            if (t === e)
                return !0;
            t = t.next;
        } return !1; };
        e.prototype.iterator_at = function (e) { var t = this.next; for (; e-- > 0 && t != null;)
            t = t.next; return t; };
        e.prototype.at = function (e) { var t = this.iterator_at(e); return t == null ? null : t; };
        e.prototype.copy = function () { var t = this.x, n = this.y; return e.get(t, n, !1); };
        e.prototype.toString = function () { return "{ x: " + this.x + " y: " + this.y + " }"; };
        return e;
    }()), en.zpp_pool = null, en._wrapFn = null, V = en, h.zpp_pool = null, h.get = function (e) { var t; return h.zpp_pool == null ? ($t.internal = !0, t = new h, $t.internal = !1) : (t = h.zpp_pool, h.zpp_pool = t.zpp_next), t.zpp_i = 0, t.zpp_inner = e, t.zpp_critical = !1, t; }, h.prototype.zpp_inner = null, h.prototype.zpp_i = null, h.prototype.zpp_critical = null, h.prototype.zpp_next = null, h.prototype.hasNext = function () { this.zpp_inner.zpp_inner.valmod(); var e = this.zpp_inner.zpp_gl(); return this.zpp_critical = !0, this.zpp_i < e || (this.zpp_next = h.zpp_pool, h.zpp_pool = this, this.zpp_inner = null, !1); }, h.prototype.next = function () { return this.zpp_critical = !1, this.zpp_inner.at(this.zpp_i++); }, g.fromArray = function (e) { if (e == null)
        throw Error("Cannot convert null Array to Nape list"); var t = new (d()).geom.Vec2List; for (var n_14 = 0; n_14 < e.length; n_14++)
        t.push(e[n_14]); return t; }, g.prototype.zpp_inner = null, Object.defineProperty(g.prototype, "length", { get: function () { return this.zpp_gl(); } }), g.prototype.zpp_gl = function () { return this.zpp_inner.valmod(), this.zpp_inner.zip_length && (this.zpp_inner.zip_length = !1, this.zpp_inner.user_length = this.zpp_inner.inner.length), this.zpp_inner.user_length; }, g.prototype.zpp_vm = function () { this.zpp_inner.valmod(); }, g.prototype.has = function (e) { return this.zpp_vm(), this.zpp_inner.inner.has(e.zpp_inner); }, g.prototype.at = function (e) { if (this.zpp_vm(), e < 0 || e >= this.zpp_gl())
        throw Error("Index out of bounds"); if (this.zpp_inner.reverse_flag && (e = this.zpp_gl() - 1 - e), e < this.zpp_inner.at_index || this.zpp_inner.at_ite == null)
        this.zpp_inner.at_index = e, this.zpp_inner.at_ite = this.zpp_inner.inner.iterator_at(e);
    else
        for (; this.zpp_inner.at_index != e;)
            this.zpp_inner.at_index++, this.zpp_inner.at_ite = this.zpp_inner.at_ite.next; return m(this.zpp_inner.at_ite.elt); }, g.prototype.push = function (e) { if (this.zpp_inner.immutable)
        throw Error("Vec2List is immutable"); this.zpp_inner.modify_test(), this.zpp_vm(); var t = this.zpp_inner.adder == null || this.zpp_inner.adder(e); return t && (this.zpp_inner.reverse_flag ? this.zpp_inner.inner.add(e.zpp_inner) : (this.zpp_inner.push_ite == null && (this.zpp_inner.push_ite = this.empty() ? null : this.zpp_inner.inner.iterator_at(this.zpp_gl() - 1)), this.zpp_inner.push_ite = this.zpp_inner.inner.insert(this.zpp_inner.push_ite, e.zpp_inner)), this.zpp_inner.invalidate(), this.zpp_inner.post_adder != null && this.zpp_inner.post_adder(e)), t; }, g.prototype.unshift = function (e) { if (this.zpp_inner.immutable)
        throw Error("Vec2List is immutable"); this.zpp_inner.modify_test(), this.zpp_vm(); var t = this.zpp_inner.adder == null || this.zpp_inner.adder(e); return t && (this.zpp_inner.reverse_flag ? (this.zpp_inner.push_ite == null && (this.zpp_inner.push_ite = this.empty() ? null : this.zpp_inner.inner.iterator_at(this.zpp_gl() - 1)), this.zpp_inner.push_ite = this.zpp_inner.inner.insert(this.zpp_inner.push_ite, e.zpp_inner)) : this.zpp_inner.inner.add(e.zpp_inner), this.zpp_inner.invalidate(), this.zpp_inner.post_adder != null && this.zpp_inner.post_adder(e)), t; }, g.prototype.pop = function () { if (this.zpp_inner.immutable)
        throw Error("Vec2List is immutable"); if (this.zpp_inner.modify_test(), this.empty())
        throw Error("Cannot remove from empty list"); this.zpp_vm(); var e; if (this.zpp_inner.reverse_flag) {
        e = this.zpp_inner.inner.head.elt;
        var t_18 = m(e);
        this.zpp_inner.subber != null && this.zpp_inner.subber(t_18), this.zpp_inner.dontremove || this.zpp_inner.inner.pop();
    }
    else {
        this.zpp_inner.at_ite != null && this.zpp_inner.at_ite.next == null && (this.zpp_inner.at_ite = null);
        var t_19 = this.zpp_gl() == 1 ? null : this.zpp_inner.inner.iterator_at(this.zpp_gl() - 2);
        e = t_19 == null ? this.zpp_inner.inner.head.elt : t_19.next.elt;
        var n_15 = m(e);
        this.zpp_inner.subber != null && this.zpp_inner.subber(n_15), this.zpp_inner.dontremove || this.zpp_inner.inner.erase(t_19);
    } return this.zpp_inner.invalidate(), m(e); }, g.prototype.shift = function () { if (this.zpp_inner.immutable)
        throw Error("Vec2List is immutable"); if (this.zpp_inner.modify_test(), this.empty())
        throw Error("Cannot remove from empty list"); this.zpp_vm(); var e; if (this.zpp_inner.reverse_flag) {
        this.zpp_inner.at_ite != null && this.zpp_inner.at_ite.next == null && (this.zpp_inner.at_ite = null);
        var t_20 = this.zpp_gl() == 1 ? null : this.zpp_inner.inner.iterator_at(this.zpp_gl() - 2);
        e = t_20 == null ? this.zpp_inner.inner.head.elt : t_20.next.elt;
        var n_16 = m(e);
        this.zpp_inner.subber != null && this.zpp_inner.subber(n_16), this.zpp_inner.dontremove || this.zpp_inner.inner.erase(t_20);
    }
    else {
        e = this.zpp_inner.inner.head.elt;
        var t_21 = m(e);
        this.zpp_inner.subber != null && this.zpp_inner.subber(t_21), this.zpp_inner.dontremove || this.zpp_inner.inner.pop();
    } return this.zpp_inner.invalidate(), m(e); }, g.prototype.add = function (e) { return this.zpp_inner.reverse_flag ? this.push(e) : this.unshift(e); }, g.prototype.remove = function (e) { if (this.zpp_inner.immutable)
        throw Error("Vec2List is immutable"); this.zpp_inner.modify_test(), this.zpp_vm(); var t = !1, n = this.zpp_inner.inner.head; for (; n != null;) {
        if (n.elt == e.zpp_inner) {
            t = !0;
            break;
        }
        n = n.next;
    } return t && (this.zpp_inner.subber != null && this.zpp_inner.subber(e), this.zpp_inner.dontremove || this.zpp_inner.inner.remove(e.zpp_inner), this.zpp_inner.invalidate()), t; }, g.prototype.clear = function () { if (this.zpp_inner.immutable)
        throw Error("Vec2List is immutable"); if (this.zpp_inner.reverse_flag)
        for (; !this.empty();)
            this.pop();
    else
        for (; !this.empty();)
            this.shift(); }, g.prototype.empty = function () { return this.zpp_gl() == 0; }, g.prototype.iterator = function () { return this.zpp_vm(), h.get(this); }, g.prototype.copy = function (e) { e == null && (e = !1); var t = d(), n = new t.geom.Vec2List, r = h.get(this); for (; r.hasNext();) {
        var i_9 = r.next(), a_8 = void 0;
        if (e) {
            if (i_9 != null && i_9.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!");
            var e_12 = i_9.zpp_inner;
            e_12._validate != null && e_12._validate();
            var n_17 = i_9.zpp_inner.x, r_8 = i_9.zpp_inner;
            r_8._validate != null && r_8._validate();
            var o_6 = i_9.zpp_inner.y;
            a_8 = t.geom.Vec2.get(n_17, o_6);
        }
        else
            a_8 = i_9;
        n.push(a_8);
    } return n; }, g.prototype.merge = function (e) { if (e == null)
        throw Error("Cannot merge with null list"); var t = e.iterator(); for (; t.hasNext();) {
        var e_13 = t.next();
        this.has(e_13) || this.add(e_13);
    } }, g.prototype.toString = function () { var e = "[", t = !0, n = h.get(this); for (; n.hasNext();) {
        var r_9 = n.next();
        t || (e += ","), e += r_9 == null ? "NULL" : r_9.toString(), t = !1;
    } return e + "]"; }, g.prototype.foreach = function (e) { if (e == null)
        throw Error("Cannot execute null on list elements"); var t = this.iterator(); for (; t.hasNext();)
        try {
            e(t.next());
        }
        catch (e) {
            t.zpp_next = h.zpp_pool, h.zpp_pool = t, t.zpp_inner = null;
            break;
        } return this; }, p(g.prototype, function (e) { return h.get(e); }), g.prototype.filter = function (e) { if (e == null)
        throw Error("Cannot select elements of list with null"); var t = 0; for (; t < this.zpp_gl();) {
        var n_18 = this.at(t);
        try {
            e(n_18) ? ++t : this.remove(n_18);
        }
        catch (e) {
            break;
        }
    } return this; }, tn = (function () {
        function e() {
            this.ptr = null, this.start = null, this.first = !1, this.forward = !1, this.outer = null, this.next = null, e.internal = !0;
            var t = d();
            this.outer = new t.geom.GeomVertexIterator, e.internal = !1;
        }
        e.get = function (t, n) { var r; return e.zpp_pool == null ? r = new e : (r = e.zpp_pool, e.zpp_pool = r.next, r.next = null), r.outer.zpp_inner = r, r.ptr = t, r.forward = n, r.start = t, r.first = t != null, r.outer; };
        e.prototype.free = function () { this.outer.zpp_inner = null, this.ptr = this.start = null; };
        return e;
    }()), tn.zpp_pool = null, tn.internal = !1, nn = tn, rn = function (e) { return e.outer; }, an = function (e) { var t; return (t = e.zpp_inner) == null ? e : t; }, on = _({ typeName: "CbType", namespaceParts: ["nape", "callbacks"], zppListClass: "ZPP_CbTypeList", wrapElement: rn, unwrapElement: an }).Iterator, sn = _({ typeName: "Listener", namespaceParts: ["nape", "callbacks"], zppListClass: "ZPP_ListenerList", wrapElement: rn, unwrapElement: an }).Iterator, cn = _({ typeName: "Constraint", namespaceParts: ["nape", "constraint"], zppListClass: "ZPP_ConstraintList", wrapElement: rn, unwrapElement: an }).Iterator, ln = _({ typeName: "InteractionGroup", namespaceParts: ["nape", "dynamics"], zppListClass: "ZPP_InteractionGroupList", wrapElement: rn, unwrapElement: an }).Iterator, un = _({ typeName: "GeomPoly", namespaceParts: ["nape", "geom"], zppListClass: "ZPP_GeomPolyList", wrapElement: rn, unwrapElement: an }).Iterator, _b = _({ typeName: "Body", namespaceParts: ["nape", "phys"], zppListClass: "ZPP_BodyList", wrapElement: rn, unwrapElement: an }), dn = _b.List, fn = _b.Iterator, pn = _({ typeName: "Compound", namespaceParts: ["nape", "phys"], zppListClass: "ZPP_CompoundList", wrapElement: rn, unwrapElement: an }).Iterator, _c = _({ typeName: "Shape", namespaceParts: ["nape", "shape"], zppListClass: "ZPP_ShapeList", wrapElement: rn, unwrapElement: an }), mn = _c.List, hn = _c.Iterator, gn = _({ typeName: "Arbiter", namespaceParts: ["nape", "dynamics"], zppListClass: "ZPP_ArbiterList", wrapElement: function (e) { return e.wrapper(); }, unwrapElement: an, admit: function (e) { return e.active; } }).Iterator, _n = _({ typeName: "Edge", namespaceParts: ["nape", "shape"], zppListClass: "ZPP_EdgeList", wrapElement: function (e) { return e.wrapper(); }, unwrapElement: an }).Iterator, vn = _({ typeName: "ConvexResult", namespaceParts: ["nape", "geom"], zppListClass: "ZPP_ConvexResultList", wrapElement: function (e) { return e; }, unwrapElement: function (e) { return e; } }).Iterator, yn = _({ typeName: "RayResult", namespaceParts: ["nape", "geom"], zppListClass: "ZPP_RayResultList", wrapElement: function (e) { return e; }, unwrapElement: function (e) { return e; } }).Iterator, bn = _({ typeName: "Interactor", namespaceParts: ["nape", "phys"], zppListClass: "ZPP_InteractorList", wrapElement: function (e) { return e.outer_i; }, unwrapElement: function (e) { return e.zpp_inner_i; } }).Iterator, xn = new WeakMap, H = (function () {
        function H() {
        }
        return H;
    }()), H.poolGeomPoly = null, H.nextGeomPoly = null, H.poolVec2 = null, H.nextVec2 = null, H.poolVec3 = null, H.nextVec3 = null, Sn = (function () {
        function e(e, t) {
            if (e === void 0) { e = 0; }
            if (t === void 0) { t = 0; }
            if (this.zpp_pool = null, this.zpp_disp = !1, e !== e || t !== t)
                throw Error("Vec2 components cannot be NaN");
            var n;
            V.zpp_pool == null ? n = new V : (n = V.zpp_pool, V.zpp_pool = n.next, n.next = null), n.weak = !1, n._immutable = !1, n.x = e, n.y = t, this.zpp_inner = n, n.outer = this;
        }
        e.prototype._checkDisposed = function () { if (this.zpp_disp)
            throw Error("Vec2 has been disposed and cannot be used!"); };
        e.prototype._checkImmutable = function () { this.zpp_inner.immutable(); };
        e.prototype._validate = function () { this.zpp_inner.validate(); };
        e.prototype._invalidate = function () { this.zpp_inner.invalidate(); };
        e.prototype._setXY = function (e, t) { if (this._checkDisposed(), this._checkImmutable(), e !== e || t !== t)
            throw Error("Vec2 components cannot be NaN"); this._validate(), (this.zpp_inner.x !== e || this.zpp_inner.y !== t) && (this.zpp_inner.x = e, this.zpp_inner.y = t, this._invalidate()); };
        e._poolGet = function (t, n, r) { if (H.poolVec2 == null) {
            var i_10 = new e(t, n);
            return i_10.zpp_inner.weak = r, i_10;
        } var i = H.poolVec2; H.poolVec2 = i.zpp_pool, i.zpp_pool = null, i.zpp_disp = !1, i === H.nextVec2 && (H.nextVec2 = null); var a; return V.zpp_pool == null ? a = new V : (a = V.zpp_pool, V.zpp_pool = a.next, a.next = null), a._immutable = !1, a.x = t, a.y = n, i.zpp_inner = a, a.outer = i, i.zpp_inner.weak = r, i; };
        e._wrap = function (t) { return t instanceof e ? t : t && t instanceof V ? v(t, function (t) { var n = Object.create(e.prototype); return n.zpp_inner = t, n.zpp_pool = null, n.zpp_disp = !1, t.outer = n, n; }) : null; };
        e.get = function (t, n, r) {
            if (t === void 0) { t = 0; }
            if (n === void 0) { n = 0; }
            if (r === void 0) { r = !1; }
            if (t !== t || n !== n)
                throw Error("Vec2 components cannot be NaN");
            return e._poolGet(t, n, r);
        };
        e.weak = function (t, n) {
            if (t === void 0) { t = 0; }
            if (n === void 0) { n = 0; }
            if (t !== t || n !== n)
                throw Error("Vec2 components cannot be NaN");
            return e._poolGet(t, n, !0);
        };
        e.fromPolar = function (t, n, r) {
            if (r === void 0) { r = !1; }
            if (t !== t)
                throw Error("Vec2::length cannot be NaN");
            if (n !== n)
                throw Error("Vec2::angle cannot be NaN");
            var i = t * Math.cos(n), a = t * Math.sin(n);
            return e._poolGet(i, a, r);
        };
        e.fromAngle = function (t, n) {
            if (n === void 0) { n = !1; }
            return e.fromPolar(1, t, n);
        };
        e.lerp = function (t, n, r, i) {
            if (i === void 0) { i = !1; }
            if (t != null && t.zpp_disp || n != null && n.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!");
            if (t == null || n == null)
                throw Error("Cannot lerp with null Vec2");
            if (r !== r)
                throw Error("Cannot lerp with NaN t");
            t.zpp_inner.validate(), n.zpp_inner.validate();
            var a = t.zpp_inner.x + r * (n.zpp_inner.x - t.zpp_inner.x), o = t.zpp_inner.y + r * (n.zpp_inner.y - t.zpp_inner.y), s = e._poolGet(a, o, i);
            return y(t), y(n), s;
        };
        e.eq = function (e, t, n) {
            if (n === void 0) { n = 0; }
            if (e != null && e.zpp_disp || t != null && t.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!");
            if (e == null || t == null) {
                var n_19 = e == null && t == null;
                return e != null && y(e), t != null && y(t), n_19;
            }
            e.zpp_inner.validate(), t.zpp_inner.validate();
            var r = e.zpp_inner.x - t.zpp_inner.x, i = e.zpp_inner.y - t.zpp_inner.y, a = (r < 0 ? -r : r) <= n && (i < 0 ? -i : i) <= n;
            return y(e), y(t), a;
        };
        e.dsq = function (e, t) { if (e != null && e.zpp_disp || t != null && t.zpp_disp)
            throw Error("Vec2 has been disposed and cannot be used!"); if (e == null || t == null)
            throw Error("Cannot compute squared distance between null Vec2"); e.zpp_inner.validate(); var n = e.zpp_inner.x, r = e.zpp_inner.y; t.zpp_inner.validate(); var i = t.zpp_inner.x, a = t.zpp_inner.y, o = n - i, s = r - a, c = o * o + s * s; return y(e), y(t), c; };
        e.distance = function (e, t) { if (e != null && e.zpp_disp || t != null && t.zpp_disp)
            throw Error("Vec2 has been disposed and cannot be used!"); if (e == null || t == null)
            throw Error("Cannot compute squared distance between null Vec2"); e.zpp_inner.validate(); var n = e.zpp_inner.x, r = e.zpp_inner.y; t.zpp_inner.validate(); var i = t.zpp_inner.x, a = t.zpp_inner.y, o = n - i, s = r - a, c = Math.sqrt(o * o + s * s); return y(e), y(t), c; };
        Object.defineProperty(e.prototype, "x", {
            get: function () { return this._checkDisposed(), this._validate(), this.zpp_inner.x; },
            set: function (e) { if (this._checkDisposed(), this._checkImmutable(), this._validate(), this.zpp_inner.x !== e) {
                if (e !== e)
                    throw Error("Vec2::x cannot be NaN");
                this.zpp_inner.x = e, this._invalidate();
            } },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "y", {
            get: function () { return this._checkDisposed(), this._validate(), this.zpp_inner.y; },
            set: function (e) { if (this._checkDisposed(), this._checkImmutable(), this._validate(), this.zpp_inner.y !== e) {
                if (e !== e)
                    throw Error("Vec2::y cannot be NaN");
                this.zpp_inner.y = e, this._invalidate();
            } },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "length", {
            get: function () { this._checkDisposed(), this._validate(); var e = this.zpp_inner.x, t = this.zpp_inner.y; return Math.sqrt(e * e + t * t); },
            set: function (e) { if (this._checkDisposed(), this._checkImmutable(), e !== e)
                throw Error("Vec2::length cannot be NaN"); this._validate(); var t = this.zpp_inner.x, n = this.zpp_inner.y, r = t * t + n * n; if (r === 0)
                throw Error("Cannot set length of a zero vector"); var i = e / Math.sqrt(r); this._setXY(t * i, n * i), this._invalidate(); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "angle", {
            get: function () { this._checkDisposed(), this._validate(); var e = this.zpp_inner.x, t = this.zpp_inner.y; return e === t && e === 0 ? 0 : Math.atan2(t, e); },
            set: function (e) { if (this._checkDisposed(), this._checkImmutable(), e !== e)
                throw Error("Vec2::angle cannot be NaN"); this._validate(); var t = this.zpp_inner.x, n = this.zpp_inner.y, r = Math.sqrt(t * t + n * n), i = r * Math.cos(e), a = r * Math.sin(e); this._setXY(i, a); },
            enumerable: false,
            configurable: true
        });
        e.prototype.lsq = function () { this._checkDisposed(), this._validate(); var e = this.zpp_inner.x, t = this.zpp_inner.y; return e * e + t * t; };
        e.prototype.set = function (e) { if (this._checkDisposed(), e != null && e.zpp_disp)
            throw Error("Vec2 has been disposed and cannot be used!"); if (this._checkImmutable(), e == null)
            throw Error("Cannot assign null Vec2"); e.zpp_inner.validate(); var t = e.zpp_inner.x, n = e.zpp_inner.y; return this._setXY(t, n), y(e), this; };
        e.prototype.setxy = function (e, t) { return this._checkDisposed(), this._checkImmutable(), this._setXY(e, t), this; };
        e.prototype.clone = function () { return this.copy(); };
        e.prototype.equals = function (e, t) {
            if (t === void 0) { t = 0; }
            if (this._checkDisposed(), e != null && e.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!");
            if (e == null)
                return !1;
            this._validate(), e.zpp_inner.validate();
            var n = this.zpp_inner.x - e.zpp_inner.x, r = this.zpp_inner.y - e.zpp_inner.y;
            return (n < 0 ? -n : n) <= t && (r < 0 ? -r : r) <= t;
        };
        e.prototype.copy = function (t) {
            if (t === void 0) { t = !1; }
            this._checkDisposed(), this._validate();
            var n = this.zpp_inner.x, r = this.zpp_inner.y;
            return e._poolGet(n, r, t);
        };
        e.prototype.rotate = function (e) { if (this._checkDisposed(), this._checkImmutable(), e !== e)
            throw Error("Cannot rotate Vec2 by NaN"); if (e % (Math.PI * 2) != 0) {
            var t_22 = Math.sin(e), n_20 = Math.cos(e), r_10 = n_20 * this.zpp_inner.x - t_22 * this.zpp_inner.y;
            this.zpp_inner.y = this.zpp_inner.x * t_22 + this.zpp_inner.y * n_20, this.zpp_inner.x = r_10, this._invalidate();
        } return this; };
        e.prototype.reflect = function (t, n) {
            if (n === void 0) { n = !1; }
            if (this._checkDisposed(), t != null && t.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!");
            this._validate();
            var r = this.zpp_inner.x, i = this.zpp_inner.y;
            if (Math.sqrt(r * r + i * i) === 0)
                throw Error("Cannot reflect in zero vector");
            var a = e._poolGet(r, i, !0);
            a.normalise();
            var o = t.sub(a.muleq(2 * a.dot(t)), n);
            return y(t), o;
        };
        e.prototype.normalise = function () { this._checkDisposed(), this._checkImmutable(), this._validate(); var e = this.zpp_inner.x, t = this.zpp_inner.y, n = e * e + t * t; if (Math.sqrt(n) === 0)
            throw Error("Cannot normalise vector of length 0"); var r = 1 / Math.sqrt(n); return this._setXY(e * r, t * r), this._invalidate(), this; };
        e.prototype.unit = function (t) {
            if (t === void 0) { t = !1; }
            this._checkDisposed(), this._validate();
            var n = this.zpp_inner.x, r = this.zpp_inner.y, i = n * n + r * r;
            if (Math.sqrt(i) === 0)
                throw Error("Cannot normalise vector of length 0");
            var a = 1 / Math.sqrt(i);
            return e._poolGet(n * a, r * a, t);
        };
        e.prototype.add = function (t, n) {
            if (n === void 0) { n = !1; }
            if (this._checkDisposed(), t != null && t.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!");
            if (t == null)
                throw Error("Cannot add null vectors");
            this._validate(), t.zpp_inner.validate();
            var r = this.zpp_inner.x + t.zpp_inner.x, i = this.zpp_inner.y + t.zpp_inner.y, a = e._poolGet(r, i, n);
            return y(t), a;
        };
        e.prototype.addMul = function (t, n, r) {
            if (r === void 0) { r = !1; }
            if (this._checkDisposed(), t != null && t.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!");
            if (t == null)
                throw Error("Cannot add null vectors");
            this._validate(), t.zpp_inner.validate();
            var i = this.zpp_inner.x + t.zpp_inner.x * n, a = this.zpp_inner.y + t.zpp_inner.y * n, o = e._poolGet(i, a, r);
            return y(t), o;
        };
        e.prototype.sub = function (t, n) {
            if (n === void 0) { n = !1; }
            if (this._checkDisposed(), t != null && t.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!");
            if (t == null)
                throw Error("Cannot subtract null vectors");
            this._validate(), t.zpp_inner.validate();
            var r = this.zpp_inner.x - t.zpp_inner.x, i = this.zpp_inner.y - t.zpp_inner.y, a = e._poolGet(r, i, n);
            return y(t), a;
        };
        e.prototype.mul = function (t, n) {
            if (n === void 0) { n = !1; }
            if (this._checkDisposed(), t !== t)
                throw Error("Cannot multiply with NaN");
            this._validate();
            var r = this.zpp_inner.x * t, i = this.zpp_inner.y * t;
            return e._poolGet(r, i, n);
        };
        e.prototype.addeq = function (e) { if (this._checkDisposed(), e != null && e.zpp_disp)
            throw Error("Vec2 has been disposed and cannot be used!"); if (this._checkImmutable(), e == null)
            throw Error("Cannot add null vectors"); this._validate(), e.zpp_inner.validate(); var t = this.zpp_inner.x + e.zpp_inner.x, n = this.zpp_inner.y + e.zpp_inner.y; return this._setXY(t, n), y(e), this; };
        e.prototype.subeq = function (e) { if (this._checkDisposed(), e != null && e.zpp_disp)
            throw Error("Vec2 has been disposed and cannot be used!"); if (this._checkImmutable(), e == null)
            throw Error("Cannot subtract null vectors"); this._validate(), e.zpp_inner.validate(); var t = this.zpp_inner.x - e.zpp_inner.x, n = this.zpp_inner.y - e.zpp_inner.y; return this._setXY(t, n), y(e), this; };
        e.prototype.muleq = function (e) { if (this._checkDisposed(), this._checkImmutable(), e !== e)
            throw Error("Cannot multiply with NaN"); this._validate(); var t = this.zpp_inner.x * e, n = this.zpp_inner.y * e; return this._setXY(t, n), this; };
        e.prototype.dot = function (e) { if (this._checkDisposed(), e != null && e.zpp_disp)
            throw Error("Vec2 has been disposed and cannot be used!"); if (e == null)
            throw Error("Cannot take dot product with null vector"); this._validate(), e.zpp_inner.validate(); var t = this.zpp_inner.x * e.zpp_inner.x + this.zpp_inner.y * e.zpp_inner.y; return y(e), t; };
        e.prototype.cross = function (e) { if (this._checkDisposed(), e != null && e.zpp_disp)
            throw Error("Vec2 has been disposed and cannot be used!"); if (e == null)
            throw Error("Cannot take cross product with null vector"); this._validate(), e.zpp_inner.validate(); var t = this.zpp_inner.x * e.zpp_inner.y - this.zpp_inner.y * e.zpp_inner.x; return y(e), t; };
        e.prototype.perp = function (t) {
            if (t === void 0) { t = !1; }
            this._checkDisposed(), this._validate();
            var n = -this.zpp_inner.y, r = this.zpp_inner.x;
            return e._poolGet(n, r, t);
        };
        e.prototype.dispose = function () { if (this.zpp_disp)
            throw Error("Vec2 has been disposed and cannot be used!"); if (this._checkImmutable(), this.zpp_inner._inuse)
            throw Error("This Vec2 is not disposable"); var e = this.zpp_inner; e.outer = null, this.zpp_inner = null, this.zpp_pool = null, H.nextVec2 == null ? H.poolVec2 = this : H.nextVec2.zpp_pool = this, H.nextVec2 = this, this.zpp_disp = !0, e.free(), e.next = V.zpp_pool, V.zpp_pool = e; };
        e.prototype.toString = function () { return this._checkDisposed(), this._validate(), this.zpp_inner.toString(); };
        return e;
    }()), V._wrapFn = function (e) { return v(e, function (e) { var t = Object.create(Sn.prototype); return t.zpp_inner = e, t.zpp_pool = null, t.zpp_disp = !1, e.outer = t, t; }); }, Cn = d(), Cn.geom.Vec2 = Sn, wn = (function () {
        function e() {
            this.outer = null, this.x = 0, this.y = 0, this.z = 0, this.immutable = !1, this._validate = null;
        }
        e.prototype.validate = function () { this._validate != null && this._validate(); };
        e.prototype.wrapper = function () { return this.outer == null && e._wrapFn && (this.outer = e._wrapFn(this)), this.outer; };
        return e;
    }()), wn._wrapFn = null, Tn = wn, En = (function () {
        function e(e, t, n) {
            if (e === void 0) { e = 0; }
            if (t === void 0) { t = 0; }
            if (n === void 0) { n = 0; }
            this.zpp_pool = null, this.zpp_disp = !1;
            var r = new Tn;
            this.zpp_inner = r, r.outer = this, r.x = e, r.y = t, r.z = n;
        }
        e.prototype._checkDisposed = function () { if (this.zpp_disp)
            throw Error("Vec3 has been disposed and cannot be used!"); };
        e.prototype._checkImmutable = function () { if (this.zpp_inner.immutable)
            throw Error("Vec3 is immutable"); };
        e._wrap = function (t) { return t instanceof e ? t : t && t instanceof Tn ? v(t, function (t) { var n = Object.create(e.prototype); return n.zpp_inner = t, n.zpp_pool = null, n.zpp_disp = !1, t.outer = n, n; }) : null; };
        e.get = function (t, n, r) {
            if (t === void 0) { t = 0; }
            if (n === void 0) { n = 0; }
            if (r === void 0) { r = 0; }
            var i;
            return H.poolVec3 == null ? i = new e : (i = H.poolVec3, H.poolVec3 = i.zpp_pool, i.zpp_pool = null, i.zpp_disp = !1, i === H.nextVec3 && (H.nextVec3 = null)), i.setxyz(t, n, r), i.zpp_inner.immutable = !1, i.zpp_inner._validate = null, i;
        };
        Object.defineProperty(e.prototype, "x", {
            get: function () { return this._checkDisposed(), this.zpp_inner.validate(), this.zpp_inner.x; },
            set: function (e) { this._checkDisposed(), this._checkImmutable(), this.zpp_inner.x = e; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "y", {
            get: function () { return this._checkDisposed(), this.zpp_inner.validate(), this.zpp_inner.y; },
            set: function (e) { this._checkDisposed(), this._checkImmutable(), this.zpp_inner.y = e; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "z", {
            get: function () { return this._checkDisposed(), this.zpp_inner.validate(), this.zpp_inner.z; },
            set: function (e) { this._checkDisposed(), this._checkImmutable(), this.zpp_inner.z = e; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "length", {
            get: function () { this._checkDisposed(), this.zpp_inner.validate(); var _b = this.zpp_inner, e = _b.x, t = _b.y, n = _b.z; return Math.sqrt(e * e + t * t + n * n); },
            set: function (e) { if (this._checkDisposed(), e !== e)
                throw Error("Vec3::length cannot be NaN"); this.zpp_inner.validate(); var _b = this.zpp_inner, t = _b.x, n = _b.y, r = _b.z, i = t * t + n * n + r * r; if (i === 0)
                throw Error("Cannot set length of a zero vector"); var a = e / Math.sqrt(i); this._checkImmutable(), this.zpp_inner.x = t * a, this.zpp_inner.y = n * a, this.zpp_inner.z = r * a; },
            enumerable: false,
            configurable: true
        });
        e.prototype.lsq = function () { this._checkDisposed(), this.zpp_inner.validate(); var _b = this.zpp_inner, e = _b.x, t = _b.y, n = _b.z; return e * e + t * t + n * n; };
        e.prototype.set = function (e) { if (this._checkDisposed(), e != null && e.zpp_disp)
            throw Error("Vec3 has been disposed and cannot be used!"); if (e == null)
            throw Error("Cannot assign null Vec3"); return e.zpp_inner.validate(), this.setxyz(e.zpp_inner.x, e.zpp_inner.y, e.zpp_inner.z); };
        e.prototype.setxyz = function (e, t, n) { return this._checkDisposed(), this._checkImmutable(), this.zpp_inner.x = e, this._checkImmutable(), this.zpp_inner.y = t, this._checkImmutable(), this.zpp_inner.z = n, this; };
        e.prototype.equals = function (e, t) {
            if (t === void 0) { t = 0; }
            if (this._checkDisposed(), e != null && e.zpp_disp)
                throw Error("Vec3 has been disposed and cannot be used!");
            if (e == null)
                return !1;
            this.zpp_inner.validate(), e.zpp_inner.validate();
            var n = this.zpp_inner.x - e.zpp_inner.x, r = this.zpp_inner.y - e.zpp_inner.y, i = this.zpp_inner.z - e.zpp_inner.z;
            return (n < 0 ? -n : n) <= t && (r < 0 ? -r : r) <= t && (i < 0 ? -i : i) <= t;
        };
        e.prototype.clone = function () { return this._checkDisposed(), this.zpp_inner.validate(), e.get(this.zpp_inner.x, this.zpp_inner.y, this.zpp_inner.z); };
        e.prototype.xy = function (e) {
            if (e === void 0) { e = !1; }
            return this._checkDisposed(), this.zpp_inner.validate(), Sn.get(this.zpp_inner.x, this.zpp_inner.y, e);
        };
        e.prototype.dispose = function () { if (this.zpp_disp)
            throw Error("Vec3 has been disposed and cannot be used!"); if (this.zpp_inner.immutable)
            throw Error("This Vec3 is not disposable"); this.zpp_pool = null, H.nextVec3 == null ? H.poolVec3 = this : H.nextVec3.zpp_pool = this, H.nextVec3 = this, this.zpp_disp = !0; };
        e.prototype.toString = function () { return this._checkDisposed(), this.zpp_inner.validate(), "{ x: " + this.zpp_inner.x + " y: " + this.zpp_inner.y + " z: " + this.zpp_inner.z + " }"; };
        return e;
    }()), Tn._wrapFn = function (e) { return v(e, function (e) { var t = Object.create(En.prototype); return t.zpp_inner = e, t.zpp_pool = null, t.zpp_disp = !1, e.outer = t, t; }); }, Dn = (function () {
        function Dn(e, t) {
            this.outer = null, this.m = 0, this.n = 0, this.m = e, this.n = t, this.x = [];
            var n = 0, r = e * t;
            for (; n < r;)
                n++, this.x.push(0);
        }
        return Dn;
    }()), On = (function () {
        function e(e, t) {
            if (e <= 0 || t <= 0)
                throw Error("MatMN::dimensions cannot be < 1");
            this.zpp_inner = new Dn(e, t), this.zpp_inner.outer = this;
        }
        e._wrap = function (t) { return t instanceof e ? t : t ? t instanceof Dn ? v(t, function (t) { var n = Object.create(e.prototype); return n.zpp_inner = t, t.outer = n, n; }) : t.zpp_inner ? e._wrap(t.zpp_inner) : null : null; };
        Object.defineProperty(e.prototype, "rows", {
            get: function () { return this.zpp_inner.m; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "cols", {
            get: function () { return this.zpp_inner.n; },
            enumerable: false,
            configurable: true
        });
        e.prototype.x = function (e, t) { if (e < 0 || t < 0 || e >= this.zpp_inner.m || t >= this.zpp_inner.n)
            throw Error("MatMN indices out of range"); return this.zpp_inner.x[e * this.zpp_inner.n + t]; };
        e.prototype.setx = function (e, t, n) { if (e < 0 || t < 0 || e >= this.zpp_inner.m || t >= this.zpp_inner.n)
            throw Error("MatMN indices out of range"); return this.zpp_inner.x[e * this.zpp_inner.n + t] = n; };
        e.prototype.equals = function (e, t) {
            if (t === void 0) { t = 0; }
            if (e == null || this.zpp_inner.m !== e.zpp_inner.m || this.zpp_inner.n !== e.zpp_inner.n)
                return !1;
            for (var n_21 = 0; n_21 < this.zpp_inner.x.length; n_21++) {
                var r_11 = this.zpp_inner.x[n_21] - e.zpp_inner.x[n_21];
                if ((r_11 < 0 ? -r_11 : r_11) > t)
                    return !1;
            }
            return !0;
        };
        e.prototype.clone = function () { var t = new e(this.zpp_inner.m, this.zpp_inner.n); for (var e_14 = 0; e_14 < this.zpp_inner.x.length; e_14++)
            t.zpp_inner.x[e_14] = this.zpp_inner.x[e_14]; return t; };
        e.prototype.toString = function () { var e = "{ ", t = !0; for (var n_22 = 0; n_22 < this.zpp_inner.m; n_22++) {
            t || (e += "; "), t = !1;
            for (var t_23 = 0; t_23 < this.zpp_inner.n; t_23++) {
                if (n_22 < 0 || t_23 < 0 || n_22 >= this.zpp_inner.m || t_23 >= this.zpp_inner.n)
                    throw Error("MatMN indices out of range");
                e += this.zpp_inner.x[n_22 * this.zpp_inner.n + t_23] + " ";
            }
        } return e += "}", e; };
        e.prototype.transpose = function () { var t = new e(this.zpp_inner.n, this.zpp_inner.m); for (var e_15 = 0; e_15 < this.zpp_inner.m; e_15++)
            for (var n_23 = 0; n_23 < this.zpp_inner.n; n_23++)
                t.zpp_inner.x[n_23 * t.zpp_inner.n + e_15] = this.zpp_inner.x[e_15 * this.zpp_inner.n + n_23]; return t; };
        e.prototype.mul = function (t) { var n = t; if (this.zpp_inner.n !== n.zpp_inner.m)
            throw Error("Matrix dimensions aren't compatible"); var r = new e(this.zpp_inner.m, n.zpp_inner.n); for (var e_16 = 0; e_16 < this.zpp_inner.m; e_16++)
            for (var t_24 = 0; t_24 < n.zpp_inner.n; t_24++) {
                var i_11 = 0;
                for (var r_12 = 0; r_12 < this.zpp_inner.n; r_12++)
                    i_11 += this.zpp_inner.x[e_16 * this.zpp_inner.n + r_12] * n.zpp_inner.x[r_12 * n.zpp_inner.n + t_24];
                r.zpp_inner.x[e_16 * r.zpp_inner.n + t_24] = i_11;
            } return r; };
        return e;
    }()), kn = (function () {
        function e() {
            this._invalidate = null, this._validate = null, this._immutable = !1, this.outer = null, this.next = null, this.minx = 0, this.miny = 0, this.maxx = 0, this.maxy = 0, this.wrap_min = null, this.wrap_max = null;
        }
        e.get = function (t, n, r, i) { var a; return e.zpp_pool == null ? a = new e : (a = e.zpp_pool, e.zpp_pool = a.next, a.next = null), a.minx = t, a.miny = n, a.maxx = r, a.maxy = i, a; };
        e.prototype.validate = function () { this._validate != null && this._validate(); };
        e.prototype.invalidate = function () { this._invalidate != null && this._invalidate(this); };
        e.prototype.wrapper = function () { if (this.outer == null) {
            if (e._wrapFn)
                this.outer = e._wrapFn(this);
            else {
                this.outer = new e._nape.geom.AABB;
                var t_25 = this.outer.zpp_inner;
                t_25.outer != null && (t_25.outer.zpp_inner = null, t_25.outer = null), t_25.wrap_min = t_25.wrap_max = null, t_25._invalidate = null, t_25._validate = null, t_25.next = e.zpp_pool, e.zpp_pool = t_25, this.outer.zpp_inner = this;
            }
        } return this.outer; };
        e.prototype.free = function () { this.outer != null && (this.outer.zpp_inner = null, this.outer = null), this.wrap_min = this.wrap_max = null, this._invalidate = null, this._validate = null; };
        e.prototype.copy = function () { return e.get(this.minx, this.miny, this.maxx, this.maxy); };
        e.prototype.width = function () { return this.maxx - this.minx; };
        e.prototype.height = function () { return this.maxy - this.miny; };
        e._makeVec2Wrapper = function (t, n) { var r = e._nape; if (t !== t || n !== n)
            throw Error("Vec2 components cannot be NaN"); return r.geom.Vec2.get(t, n); };
        e.prototype.getmin = function () { this.wrap_min == null && (this.wrap_min = e._makeVec2Wrapper(this.minx, this.miny), this.wrap_min.zpp_inner._inuse = !0, this._immutable ? this.wrap_min.zpp_inner._immutable = !0 : this.wrap_min.zpp_inner._invalidate = this.mod_min.bind(this), this.wrap_min.zpp_inner._validate = this.dom_min.bind(this)); };
        e.prototype.dom_min = function () { this._validate != null && this._validate(), this.wrap_min.zpp_inner.x = this.minx, this.wrap_min.zpp_inner.y = this.miny; };
        e.prototype.mod_min = function (e) { (e.x !== this.minx || e.y !== this.miny) && (this.minx = e.x, this.miny = e.y, this._invalidate != null && this._invalidate(this)); };
        e.prototype.getmax = function () { this.wrap_max == null && (this.wrap_max = e._makeVec2Wrapper(this.maxx, this.maxy), this.wrap_max.zpp_inner._inuse = !0, this._immutable ? this.wrap_max.zpp_inner._immutable = !0 : this.wrap_max.zpp_inner._invalidate = this.mod_max.bind(this), this.wrap_max.zpp_inner._validate = this.dom_max.bind(this)); };
        e.prototype.dom_max = function () { this._validate != null && this._validate(), this.wrap_max.zpp_inner.x = this.maxx, this.wrap_max.zpp_inner.y = this.maxy; };
        e.prototype.mod_max = function (e) { (e.x !== this.maxx || e.y !== this.maxy) && (this.maxx = e.x, this.maxy = e.y, this._invalidate != null && this._invalidate(this)); };
        e.prototype.intersect = function (e) { return e.miny <= this.maxy && this.miny <= e.maxy && e.minx <= this.maxx && this.minx <= e.maxx; };
        e.prototype.combine = function (e) { e.minx < this.minx && (this.minx = e.minx), e.maxx > this.maxx && (this.maxx = e.maxx), e.miny < this.miny && (this.miny = e.miny), e.maxy > this.maxy && (this.maxy = e.maxy); };
        e.prototype.contains = function (e) { return e.minx >= this.minx && e.miny >= this.miny && e.maxx <= this.maxx && e.maxy <= this.maxy; };
        e.prototype.toString = function () { return "{ x: " + this.minx + " y: " + this.miny + " w: " + (this.maxx - this.minx) + " h: " + (this.maxy - this.miny) + " }"; };
        return e;
    }()), kn.zpp_pool = null, kn._nape = null, kn._wrapFn = null, An = kn, jn = (function () {
        function e(e, t, n, r) {
            if (e === void 0) { e = 0; }
            if (t === void 0) { t = 0; }
            if (n === void 0) { n = 0; }
            if (r === void 0) { r = 0; }
            if (e !== e || t !== t)
                throw Error("AABB position cannot be NaN");
            if (n !== n || r !== r)
                throw Error("AABB dimensions cannot be NaN");
            var i;
            An.zpp_pool == null ? i = new An : (i = An.zpp_pool, An.zpp_pool = i.next, i.next = null), i.minx = e, i.miny = t, i.maxx = e + n, i.maxy = t + r, this.zpp_inner = i, i.outer = this;
        }
        e.fromPoints = function (t) { if (t == null || t.length === 0)
            throw Error("AABB::fromPoints requires at least one point"); var n = t[0]; if (n != null && n.zpp_disp)
            throw Error("Vec2 has been disposed and cannot be used!"); if (n == null)
            throw Error("AABB::fromPoints cannot contain null Vec2"); n.zpp_inner.validate(); var r = n.zpp_inner.x, i = n.zpp_inner.y, a = r, o = i; for (var e_17 = 1; e_17 < t.length; e_17++) {
            var n_24 = t[e_17];
            if (n_24 != null && n_24.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!");
            if (n_24 == null)
                throw Error("AABB::fromPoints cannot contain null Vec2");
            n_24.zpp_inner.validate();
            var s_6 = n_24.zpp_inner.x, c_4 = n_24.zpp_inner.y;
            s_6 < r && (r = s_6), c_4 < i && (i = c_4), s_6 > a && (a = s_6), c_4 > o && (o = c_4);
        } return new e(r, i, a - r, o - i); };
        e._wrap = function (t) { return t instanceof e ? t : t && t instanceof An ? v(t, function (t) { var n = Object.create(e.prototype); return n.zpp_inner = t, t.outer = n, n; }) : null; };
        Object.defineProperty(e.prototype, "x", {
            get: function () { return this.zpp_inner.validate(), this.zpp_inner.minx; },
            set: function (e) { if (this.zpp_inner._immutable)
                throw Error("AABB is immutable"); if (this.zpp_inner.validate(), this.zpp_inner.minx != e) {
                if (e !== e)
                    throw Error("AABB::x cannot be NaN");
                this.zpp_inner.maxx += e - this.zpp_inner.minx, this.zpp_inner.minx = e, this.zpp_inner.invalidate();
            } },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "y", {
            get: function () { return this.zpp_inner.validate(), this.zpp_inner.miny; },
            set: function (e) { if (this.zpp_inner._immutable)
                throw Error("AABB is immutable"); if (this.zpp_inner.validate(), this.zpp_inner.miny != e) {
                if (e !== e)
                    throw Error("AABB::y cannot be NaN");
                this.zpp_inner.maxy += e - this.zpp_inner.miny, this.zpp_inner.miny = e, this.zpp_inner.invalidate();
            } },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "width", {
            get: function () { return this.zpp_inner.validate(), this.zpp_inner.maxx - this.zpp_inner.minx; },
            set: function (e) { if (this.zpp_inner._immutable)
                throw Error("AABB is immutable"); if (this.zpp_inner.validate(), this.zpp_inner.maxx - this.zpp_inner.minx != e) {
                if (e !== e)
                    throw Error("AABB::width cannot be NaN");
                if (e < 0)
                    throw Error("AABB::width (" + e + ") must be >= 0");
                this.zpp_inner.validate(), this.zpp_inner.maxx = this.zpp_inner.minx + e, this.zpp_inner.invalidate();
            } },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "height", {
            get: function () { return this.zpp_inner.validate(), this.zpp_inner.maxy - this.zpp_inner.miny; },
            set: function (e) { if (this.zpp_inner._immutable)
                throw Error("AABB is immutable"); if (this.zpp_inner.validate(), this.zpp_inner.maxy - this.zpp_inner.miny != e) {
                if (e !== e)
                    throw Error("AABB::height cannot be NaN");
                if (e < 0)
                    throw Error("AABB::height (" + e + ") must be >= 0");
                this.zpp_inner.validate(), this.zpp_inner.maxy = this.zpp_inner.miny + e, this.zpp_inner.invalidate();
            } },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "min", {
            get: function () { return this.zpp_inner.getmin(), this.zpp_inner.wrap_min; },
            set: function (e) { if (e != null && e.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!"); if (this.zpp_inner._immutable)
                throw Error("AABB is immutable"); if (e == null)
                throw Error("Cannot assign null to AABB::min"); this.zpp_inner.validate(); var t = this.zpp_inner.minx; if (this.zpp_inner.validate(), t != this.zpp_inner.minx)
                throw Error("AABB::min components cannot be NaN"); this.zpp_inner.validate(); var n = this.zpp_inner.miny; if (this.zpp_inner.validate(), n != this.zpp_inner.miny)
                throw Error("AABB::min components cannot be NaN"); if (e != null && e.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!"); e.zpp_inner._validate != null && e.zpp_inner._validate(); var r = e.zpp_inner.x; this.zpp_inner.getmax(); var i = this.zpp_inner.wrap_max; if (i != null && i.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!"); if (i.zpp_inner._validate != null && i.zpp_inner._validate(), r > i.zpp_inner.x)
                throw Error("Assignment would cause negative width"); if (e != null && e.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!"); e.zpp_inner._validate != null && e.zpp_inner._validate(); var a = e.zpp_inner.y; this.zpp_inner.getmin(); var o = this.zpp_inner.wrap_max; if (o != null && o.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!"); if (o.zpp_inner._validate != null && o.zpp_inner._validate(), a > o.zpp_inner.y)
                throw Error("Assignment would cause negative height"); var s = this.zpp_inner.wrap_min; this._assignVec2(s, e), e.zpp_inner.weak && this._disposeVec2(e); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "max", {
            get: function () { return this.zpp_inner.getmax(), this.zpp_inner.wrap_max; },
            set: function (e) { if (e != null && e.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!"); if (this.zpp_inner._immutable)
                throw Error("AABB is immutable"); if (e == null)
                throw Error("Cannot assign null to AABB::max"); this.zpp_inner.validate(); var t = this.zpp_inner.minx; if (this.zpp_inner.validate(), t != this.zpp_inner.minx)
                throw Error("AABB::max components cannot be NaN"); this.zpp_inner.validate(); var n = this.zpp_inner.miny; if (this.zpp_inner.validate(), n != this.zpp_inner.miny)
                throw Error("AABB::max components cannot be NaN"); if (e != null && e.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!"); e.zpp_inner._validate != null && e.zpp_inner._validate(); var r = e.zpp_inner.x; this.zpp_inner.getmin(); var i = this.zpp_inner.wrap_min; if (i != null && i.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!"); if (i.zpp_inner._validate != null && i.zpp_inner._validate(), r < i.zpp_inner.x)
                throw Error("Assignment would cause negative width"); if (e != null && e.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!"); e.zpp_inner._validate != null && e.zpp_inner._validate(); var a = e.zpp_inner.y; this.zpp_inner.getmin(); var o = this.zpp_inner.wrap_min; if (o != null && o.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!"); if (o.zpp_inner._validate != null && o.zpp_inner._validate(), a < o.zpp_inner.y)
                throw Error("Assignment would cause negative height"); this.zpp_inner.getmax(); var s = this.zpp_inner.wrap_max; this._assignVec2(s, e), e.zpp_inner.weak && this._disposeVec2(e); },
            enumerable: false,
            configurable: true
        });
        e.prototype._assignVec2 = function (e, t) { if (e != null && e.zpp_disp || t != null && t.zpp_disp)
            throw Error("Vec2 has been disposed and cannot be used!"); var n = e.zpp_inner; if (n._immutable)
            throw Error("Vec2 is immutable"); if (n._isimmutable != null && n._isimmutable(), t == null)
            throw Error("Cannot assign null Vec2"); if (t != null && t.zpp_disp)
            throw Error("Vec2 has been disposed and cannot be used!"); t.zpp_inner._validate != null && t.zpp_inner._validate(); var r = t.zpp_inner.x; if (t != null && t.zpp_disp)
            throw Error("Vec2 has been disposed and cannot be used!"); t.zpp_inner._validate != null && t.zpp_inner._validate(); var i = t.zpp_inner.y; if (e != null && e.zpp_disp)
            throw Error("Vec2 has been disposed and cannot be used!"); var a = e.zpp_inner; if (a._immutable)
            throw Error("Vec2 is immutable"); if (a._isimmutable != null && a._isimmutable(), r != r || i != i)
            throw Error("Vec2 components cannot be NaN"); var o; if (e != null && e.zpp_disp)
            throw Error("Vec2 has been disposed and cannot be used!"); if (e.zpp_inner._validate != null && e.zpp_inner._validate(), e.zpp_inner.x == r) {
            if (e != null && e.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!");
            e.zpp_inner._validate != null && e.zpp_inner._validate(), o = e.zpp_inner.y == i;
        }
        else
            o = !1; o || (e.zpp_inner.x = r, e.zpp_inner.y = i, e.zpp_inner._invalidate != null && e.zpp_inner._invalidate(e.zpp_inner)); };
        e.prototype._disposeVec2 = function (e) { var t = d().__zpp; if (e != null && e.zpp_disp)
            throw Error("Vec2 has been disposed and cannot be used!"); var n = e.zpp_inner; if (n._immutable)
            throw Error("Vec2 is immutable"); if (n._isimmutable != null && n._isimmutable(), e.zpp_inner._inuse)
            throw Error("This Vec2 is not disposable"); var r = e.zpp_inner; e.zpp_inner.outer = null, e.zpp_inner = null; var i = e; i.zpp_pool = null, t.util.ZPP_PubPool.nextVec2 == null ? t.util.ZPP_PubPool.poolVec2 = i : t.util.ZPP_PubPool.nextVec2.zpp_pool = i, t.util.ZPP_PubPool.nextVec2 = i, i.zpp_disp = !0; var a = r; a.free(), a.next = t.geom.ZPP_Vec2.zpp_pool, t.geom.ZPP_Vec2.zpp_pool = a; };
        e.prototype.clone = function () { return this.copy(); };
        e.prototype.equals = function (e, t) {
            if (t === void 0) { t = 0; }
            if (e == null)
                return !1;
            this.zpp_inner.validate(), e.zpp_inner.validate();
            var n = this.zpp_inner.minx - e.zpp_inner.minx, r = this.zpp_inner.miny - e.zpp_inner.miny, i = this.zpp_inner.maxx - e.zpp_inner.maxx, a = this.zpp_inner.maxy - e.zpp_inner.maxy;
            return (n < 0 ? -n : n) <= t && (r < 0 ? -r : r) <= t && (i < 0 ? -i : i) <= t && (a < 0 ? -a : a) <= t;
        };
        e.prototype.copy = function () { this.zpp_inner.validate(); var e = this.zpp_inner; return An.get(e.minx, e.miny, e.maxx, e.maxy).wrapper(); };
        e.prototype.toString = function () { return this.zpp_inner.validate(), this.zpp_inner.toString(); };
        return e;
    }()), An._wrapFn = function (e) { return v(e, function (e) { var t = Object.create(jn.prototype); return t.zpp_inner = e, e.outer = t, t; }); }, U = (function () {
        function U() {
        }
        return U;
    }()), U.GravMassMode_DEFAULT = null, U.GravMassMode_FIXED = null, U.GravMassMode_SCALED = null, U.InertiaMode_DEFAULT = null, U.InertiaMode_FIXED = null, U.MassMode_DEFAULT = null, U.MassMode_FIXED = null, U.BodyType_STATIC = null, U.BodyType_DYNAMIC = null, U.BodyType_KINEMATIC = null, U.ListenerType_BODY = null, U.ListenerType_CONSTRAINT = null, U.ListenerType_INTERACTION = null, U.ListenerType_PRE = null, U.PreFlag_ACCEPT = null, U.PreFlag_IGNORE = null, U.PreFlag_ACCEPT_ONCE = null, U.PreFlag_IGNORE_ONCE = null, U.CbEvent_BEGIN = null, U.CbEvent_ONGOING = null, U.CbEvent_END = null, U.CbEvent_WAKE = null, U.CbEvent_SLEEP = null, U.CbEvent_BREAK = null, U.CbEvent_PRE = null, U.InteractionType_COLLISION = null, U.InteractionType_SENSOR = null, U.InteractionType_FLUID = null, U.InteractionType_ANY = null, U.Winding_UNDEFINED = null, U.Winding_CLOCKWISE = null, U.Winding_ANTICLOCKWISE = null, U.ValidationResult_VALID = null, U.ValidationResult_DEGENERATE = null, U.ValidationResult_CONCAVE = null, U.ValidationResult_SELF_INTERSECTING = null, U.ShapeType_CIRCLE = null, U.ShapeType_POLYGON = null, U.ShapeType_CAPSULE = null, U.Broadphase_DYNAMIC_AABB_TREE = null, U.Broadphase_SWEEP_AND_PRUNE = null, U.Broadphase_SPATIAL_HASH = null, U.ArbiterType_COLLISION = null, U.ArbiterType_SENSOR = null, U.ArbiterType_FLUID = null, U.internal = !1, Mn = (function () {
        function e() {
            if (!U.internal)
                throw Error("Cannot instantiate Winding derp!");
        }
        Object.defineProperty(e, "UNDEFINED", {
            get: function () { return U.Winding_UNDEFINED == null && (U.internal = !0, U.Winding_UNDEFINED = new e, U.internal = !1), U.Winding_UNDEFINED; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e, "CLOCKWISE", {
            get: function () { return U.Winding_CLOCKWISE == null && (U.internal = !0, U.Winding_CLOCKWISE = new e, U.internal = !1), U.Winding_CLOCKWISE; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e, "ANTICLOCKWISE", {
            get: function () { return U.Winding_ANTICLOCKWISE == null && (U.internal = !0, U.Winding_ANTICLOCKWISE = new e, U.internal = !1), U.Winding_ANTICLOCKWISE; },
            enumerable: false,
            configurable: true
        });
        e.prototype.toString = function () { return this === U.Winding_UNDEFINED ? "UNDEFINED" : this === U.Winding_CLOCKWISE ? "CLOCKWISE" : this === U.Winding_ANTICLOCKWISE ? "ANTICLOCKWISE" : ""; };
        return e;
    }()), Nn = (function () {
        function Nn(e) {
            if (e === void 0) { e = null; }
            this.outer = null, this.vertices = null, this.outer = e;
        }
        return Nn;
    }()), Pn = (function () {
        function e() {
            this.x = 0, this.y = 0, this.prev = null, this.next = null, this.wrap = null, this.forced = !1;
        }
        e.get = function (t, n) { var r; return e.zpp_pool == null ? r = new e : (r = e.zpp_pool, e.zpp_pool = r.next, r.next = null), r.forced = !1, r.x = t, r.y = n, r; };
        e.prototype.free = function () { x(this), this.prev = this.next = null; };
        e.prototype.wrapper = function () {
            var _this = this;
            if (this.wrap == null) {
                var e_18 = d().geom.Vec2.get(this.x, this.y);
                this.wrap = e_18, this.wrap.zpp_inner._inuse = !0, this.wrap.zpp_inner._invalidate = function (e) { return _this.modwrap(e); }, this.wrap.zpp_inner._validate = function () { return _this.getwrap(); };
            }
            return this.wrap;
        };
        e.prototype.modwrap = function (e) { this.x = e.x, this.y = e.y; };
        e.prototype.getwrap = function () { this.wrap.zpp_inner.x = this.x, this.wrap.zpp_inner.y = this.y; };
        return e;
    }()), Pn.zpp_pool = null, W = Pn, Fn = (function () {
        function e() {
        }
        e.Constraint = function () { return e._Constraint++; };
        e.Interactor = function () { return e._Interactor++; };
        e.CbType = function () { return e._CbType++; };
        e.CbSet = function () { return e._CbSet++; };
        e.Listener = function () { return e._Listener++; };
        e.ZPP_SimpleVert = function () { return e._ZPP_SimpleVert++; };
        e.ZPP_SimpleSeg = function () { return e._ZPP_SimpleSeg++; };
        return e;
    }()), Fn._Constraint = 0, Fn._Interactor = 0, Fn._CbType = 0, Fn._CbSet = 0, Fn._Listener = 0, Fn._ZPP_SimpleVert = 0, Fn._ZPP_SimpleSeg = 0, In = Fn, Ln = (function () {
        function e() {
            this.forced = !1, this.x = 0, this.y = 0, this.links = null, this.id = 0, this.next = null, this.node = null, this.id = In.ZPP_SimpleVert(), Yt.zpp_pool == null ? this.links = new Yt : (this.links = Yt.zpp_pool, Yt.zpp_pool = this.links.next, this.links.next = null), this.links.lt = e.less_xy;
        }
        e.less_xy = function (e, t) { return e.y < t.y || e.y == t.y && e.x < t.x; };
        e.swap_nodes = function (e, t) { var n = e.node; e.node = t.node, t.node = n; };
        e.get = function (t, n) { var r; return e.zpp_pool == null ? r = new e : (r = e.zpp_pool, e.zpp_pool = r.next, r.next = null), r.x = t, r.y = n, r; };
        e.prototype.free = function () { this.links.clear(), this.node = null, this.forced = !1; };
        e.prototype.release = function () { this.free(), this.next = e.zpp_pool, e.zpp_pool = this; };
        return e;
    }()), Ln.zpp_pool = null, Rn = Ln, zn = (function () {
        function e() {
            var _this = this;
            this.left = null, this.right = null, this.vertices = null, this.id = 0, this.next = null, this.prev = null, this.node = null, this.id = In.ZPP_SimpleSeg(), Yt.zpp_pool == null ? this.vertices = new Yt : (this.vertices = Yt.zpp_pool, Yt.zpp_pool = this.vertices.next, this.vertices.next = null), this.vertices.lt = function (e, t) { return _this.less_xy(e, t); };
        }
        e.get = function (t, n) { var r; return e.zpp_pool == null ? r = new e : (r = e.zpp_pool, e.zpp_pool = r.next, r.next = null), r.left = t, r.right = n, r.vertices.insert(t), r.vertices.insert(n), r; };
        e.prototype.free = function () { this.left = this.right = null, this.prev = null, this.node = null, this.vertices.clear(); };
        e.prototype.less_xy = function (e, t) { return e.x < t.x || e.x == t.x && e.y < t.y; };
        return e;
    }()), zn.zpp_pool = null, Bn = zn, Vn = (function () {
        function e() {
            this.type = 0, this.vertex = null, this.segment = null, this.segment2 = null, this.node = null, this.next = null;
        }
        e.swap_nodes = function (e, t) { var n = e.node; e.node = t.node, t.node = n; };
        e.less_xy = function (e, t) { return e.vertex.x < t.vertex.x ? !0 : e.vertex.x > t.vertex.x ? !1 : e.vertex.y < t.vertex.y ? !0 : e.vertex.y > t.vertex.y ? !1 : e.type < t.type; };
        e.get = function (t) { var n; return e.zpp_pool == null ? n = new e : (n = e.zpp_pool, e.zpp_pool = n.next, n.next = null), n.vertex = t, n; };
        e.prototype.free = function () { this.vertex = null, this.segment = this.segment2 = null, this.node = null; };
        e.prototype.release = function () { this.free(), this.next = e.zpp_pool, e.zpp_pool = this; };
        return e;
    }()), Vn.zpp_pool = null, Hn = Vn, Un = (function () {
        function Un() {
            var _this = this;
            this.sweepx = 0, this.tree = null, Xt.zpp_pool == null ? this.tree = new Xt : (this.tree = Xt.zpp_pool, Xt.zpp_pool = this.tree.next, this.tree.next = null), this.tree.lt = function (e, t) { return _this.edge_lt(e, t); }, this.tree.swapped = function (e, t) { return _this.swap_nodes(e, t); };
        }
        Un.prototype.swap_nodes = function (e, t) { var n = e.node; e.node = t.node, t.node = n; };
        Un.prototype.edge_lt = function (e, t) { var n = e.left, r = e.right, i = t.left, a = t.right, o, s, c, l, u; if (e.left == t.left && e.right == t.right)
            return !1; if (e.left == t.right)
            return n.x == r.x ? n.y < r.y ? n.y > i.y : r.y > i.y : (u = r.x < n.x, o = r.x - n.x, s = r.y - n.y, c = i.x - n.x, l = i.y - n.y, (u ? s * c - o * l : l * o - c * s) < 0); if (e.right == t.left) {
            var e_19;
            return i.x == a.x ? e_19 = i.y < a.y ? i.y > n.y : a.y > n.y : (u = a.x < i.x, o = a.x - i.x, s = a.y - i.y, c = n.x - i.x, l = n.y - i.y, e_19 = (u ? s * c - o * l : l * o - c * s) < 0), !e_19;
        } if (e.left == t.left)
            return n.x == r.x ? n.y < r.y ? n.y > a.y : r.y > a.y : (u = r.x < n.x, o = r.x - n.x, s = r.y - n.y, c = a.x - n.x, l = a.y - n.y, (u ? s * c - o * l : l * o - c * s) < 0); if (e.right == t.right)
            return n.x == r.x ? n.y < r.y ? n.y > i.y : r.y > i.y : (u = r.x < n.x, o = r.x - n.x, s = r.y - n.y, c = i.x - n.x, l = i.y - n.y, (u ? s * c - o * l : l * o - c * s) < 0); if (n.x == r.x) {
            if (i.x == a.x) {
                var e_20 = n.y < r.y ? r : n, t_26 = i.y < a.y ? a : i;
                return e_20.y > t_26.y;
            }
            {
                u = a.x < i.x, o = a.x - i.x, s = a.y - i.y, c = n.x - i.x, l = n.y - i.y;
                var e_21 = u ? s * c - o * l : l * o - c * s;
                return u = a.x < i.x, o = a.x - i.x, s = a.y - i.y, c = r.x - i.x, l = r.y - i.y, e_21 * (u ? s * c - o * l : l * o - c * s) >= 0 ? e_21 >= 0 : this.sweepx >= n.x;
            }
        } if (i.x == a.x) {
            u = r.x < n.x, o = r.x - n.x, s = r.y - n.y, c = i.x - n.x, l = i.y - n.y;
            var e_22 = u ? s * c - o * l : l * o - c * s;
            return u = r.x < n.x, o = r.x - n.x, s = r.y - n.y, c = a.x - n.x, l = a.y - n.y, e_22 * (u ? s * c - o * l : l * o - c * s) >= 0 ? e_22 < 0 : this.sweepx < i.x;
        } {
            u = r.x < n.x, o = r.x - n.x, s = r.y - n.y, c = i.x - n.x, l = i.y - n.y;
            var e_23 = (u ? s * c - o * l : l * o - c * s) < 0;
            if (u = r.x < n.x, o = r.x - n.x, s = r.y - n.y, c = a.x - n.x, l = a.y - n.y, e_23 == (u ? s * c - o * l : l * o - c * s) < 0)
                return e_23;
            {
                u = a.x < i.x, o = a.x - i.x, s = a.y - i.y, c = n.x - i.x, l = n.y - i.y;
                var e_24 = (u ? s * c - o * l : l * o - c * s) >= 0;
                return u = a.x < i.x, o = a.x - i.x, s = a.y - i.y, c = r.x - i.x, l = r.y - i.y, e_24 == (u ? s * c - o * l : l * o - c * s) >= 0 ? e_24 : (this.sweepx - n.x) / (r.x - n.x) * (r.y - n.y) + n.y > (this.sweepx - i.x) / (a.x - i.x) * (a.y - i.y) + i.y;
            }
        } };
        Un.prototype.clear = function () { this.tree.clear(); };
        Un.prototype.add = function (e) { e.node = this.tree.insert(e); var t = this.tree.successor_node(e.node), n = this.tree.predecessor_node(e.node); return t != null && (e.next = t.data, t.data.prev = e), n != null && (e.prev = n.data, n.data.next = e), e; };
        Un.prototype.remove = function (e) { var t = this.tree.successor_node(e.node), n = this.tree.predecessor_node(e.node); t != null && (t.data.prev = e.prev), n != null && (n.data.next = e.next), this.tree.remove_node(e.node), e.node = null; };
        Un.prototype.intersect = function (e, t) { if (e == null || t == null || e.left == t.left || e.left == t.right || e.right == t.left || e.right == t.right)
            return !1; {
            var n_25 = e.left, r_13 = e.right, i_12 = t.left, a_9 = t.right;
            return ((i_12.x - n_25.x) * (r_13.y - n_25.y) - (r_13.x - n_25.x) * (i_12.y - n_25.y)) * ((a_9.x - n_25.x) * (r_13.y - n_25.y) - (r_13.x - n_25.x) * (a_9.y - n_25.y)) > 0 ? !1 : !(((n_25.x - i_12.x) * (a_9.y - i_12.y) - (a_9.x - i_12.x) * (n_25.y - i_12.y)) * ((r_13.x - i_12.x) * (a_9.y - i_12.y) - (a_9.x - i_12.x) * (r_13.y - i_12.y)) > 0);
        } };
        Un.prototype.intersection = function (e, t) { if (e == null || t == null || e.left == t.left || e.left == t.right || e.right == t.left || e.right == t.right)
            return null; {
            var n_26 = e.left, r_14 = e.right, i_13 = t.left, a_10 = t.right, o_7 = r_14.x - n_26.x, s_7 = r_14.y - n_26.y, c_5 = a_10.x - i_13.x, l_2 = a_10.y - i_13.y, u_2 = l_2 * o_7 - c_5 * s_7;
            if (u_2 == 0)
                return null;
            u_2 = 1 / u_2;
            var d_1 = i_13.x - n_26.x, f_1 = i_13.y - n_26.y, p_1 = (l_2 * d_1 - c_5 * f_1) * u_2;
            if (p_1 < 0 || p_1 > 1)
                return null;
            var m_1 = (s_7 * d_1 - o_7 * f_1) * u_2;
            if (m_1 < 0 || m_1 > 1)
                return null;
            var h_1;
            if (m_1 == 0 || m_1 == 1 || p_1 == 0 || p_1 == 1) {
                var e_25 = m_1 == 0;
                if (m_1 == 1 && e_25)
                    throw Error("corner case 1a");
                if (m_1 == 1 && (e_25 = !0), p_1 == 0 && e_25)
                    throw Error("corner case 1b");
                if (p_1 == 0 && (e_25 = !0), p_1 == 1 && e_25)
                    throw Error("corner case 1c");
                h_1 = m_1 == 0 ? i_13 : m_1 == 1 ? a_10 : p_1 == 0 ? n_26 : r_14;
            }
            else {
                var e_26 = .5 * (n_26.x + o_7 * p_1 + i_13.x + c_5 * m_1), t_27 = .5 * (n_26.y + s_7 * p_1 + i_13.y + l_2 * m_1);
                h_1 = Rn.get(e_26, t_27);
            }
            var g_1 = Hn.get(h_1);
            return g_1.type = 0, g_1.segment = e, g_1.segment2 = t, g_1;
        } };
        return Un;
    }()), Wn = (function () {
        function e() {
            this.value = !1, this.next = null, this.hnext = null, this.id = 0, this.di = 0;
        }
        e._alloc = function () { if (e.zpp_pool == null)
            return new e; var t = e.zpp_pool; return e.zpp_pool = t.next, t.next = null, t; };
        e.get = function (t, n, r) { var i = e._alloc(); return i.id = t, i.di = n, i.value = r, i; };
        e.getpersist = function (t, n) { var r = e._alloc(); return r.id = t, r.di = n, r; };
        e.ordered_get = function (t, n, r) { if (t <= n) {
            var i_14 = e._alloc();
            return i_14.id = t, i_14.di = n, i_14.value = r, i_14;
        } {
            var i_15 = e._alloc();
            return i_15.id = n, i_15.di = t, i_15.value = r, i_15;
        } };
        e.ordered_get_persist = function (t, n) { if (t <= n) {
            var r_15 = e._alloc();
            return r_15.id = t, r_15.di = n, r_15;
        } {
            var r_16 = e._alloc();
            return r_16.id = n, r_16.di = t, r_16;
        } };
        return e;
    }()), Wn.zpp_pool = null, Gn = Wn, Kn = 4294967296, qn = (function () {
        function qn() {
            this.map = new Map, this.cnt = 0;
        }
        qn.prototype.key = function (e, t) { return e * Kn + t; };
        qn.prototype.empty = function () { return this.cnt == 0; };
        qn.prototype.clear = function (e) { for (var _b = 0, _c = this.map.values(); _b < _c.length; _b++) {
            var t_28 = _c[_b];
            var n_27 = t_28;
            for (; n_27 != null;) {
                var t_29 = n_27.hnext;
                n_27.hnext = null, e && e(n_27), n_27 = t_29;
            }
        } this.map.clear(), this.cnt = 0; };
        qn.prototype.get = function (e, t) { var n; var r = (n = this.map.get(this.key(e, t))) == null ? null : n; for (; r != null && (r.id != e || r.di != t);)
            r = r.hnext; return r; };
        qn.prototype.has = function (e, t) { return this.get(e, t) != null; };
        qn.prototype.add = function (e) { var t = this.key(e.id, e.di), n = this.map.get(t); n == null ? (e.hnext = null, this.map.set(t, e)) : (e.hnext = n.hnext, n.hnext = e), this.cnt++; };
        qn.prototype.remove = function (e) { var t; var n = this.key(e.id, e.di), r = (t = this.map.get(n)) == null ? null : t; if (r == e)
            r.hnext == null ? this.map.delete(n) : this.map.set(n, r.hnext);
        else if (r != null) {
            var t_30;
            for (; t_30 = r, r = r.hnext, r != null && r != e;)
                ;
            r != null && (t_30.hnext = r.hnext);
        } e.hnext = null, this.cnt--; };
        return qn;
    }()), Jn = (function () {
        function e() {
        }
        e.decompose = function (t, n) { e.sweep == null && (e.sweep = new Un, e.inthash = new qn), e.vertices == null && (Yt.zpp_pool == null ? e.vertices = new Yt : (e.vertices = Yt.zpp_pool, Yt.zpp_pool = e.vertices.next, e.vertices.next = null), e.vertices.lt = Rn.less_xy, e.vertices.swapped = Rn.swap_nodes), e.queue == null && (Zt.zpp_pool == null ? e.queue = new Zt : (e.queue = Zt.zpp_pool, Zt.zpp_pool = e.queue.next, e.queue.next = null), e.queue.lt = Hn.less_xy, e.queue.swapped = Hn.swap_nodes); var r = null, i = null, a = t, o = t; if (a != null) {
            var t_31 = a;
            for (;;) {
                var n_28 = t_31, a_11 = n_28.x, s_8 = n_28.y, c_6 = Rn.get(a_11, s_8), l_3 = e.vertices.parent;
                for (; l_3 != null;)
                    if (e.vertices.lt(c_6, l_3.data))
                        l_3 = l_3.prev;
                    else if (e.vertices.lt(l_3.data, c_6))
                        l_3 = l_3.next;
                    else
                        break;
                var u_3 = l_3;
                if (u_3 == null ? c_6.node = e.vertices.insert(c_6) : (c_6.release(), c_6 = u_3.data), i != null && i != c_6) {
                    var t_32 = Hn.get(i), n_29 = Hn.get(c_6), r_17 = void 0;
                    Hn.less_xy(t_32, n_29) ? (t_32.type = 1, n_29.type = 2, r_17 = Bn.get(i, c_6)) : (t_32.type = 2, n_29.type = 1, r_17 = Bn.get(c_6, i)), t_32.segment = n_29.segment = r_17, e.queue.insert(t_32), e.queue.insert(n_29), i.links.insert(c_6), c_6.links.insert(i);
                }
                if (i = c_6, r == null && (r = c_6), t_31 = t_31.next, t_31 == o)
                    break;
            }
        } if (i != r) {
            var t_33 = Hn.get(i), n_30 = Hn.get(r), a_12;
            Hn.less_xy(t_33, n_30) ? (t_33.type = 1, n_30.type = 2, a_12 = Bn.get(i, r)) : (t_33.type = 2, n_30.type = 1, a_12 = Bn.get(r, i)), t_33.segment = n_30.segment = a_12, e.queue.insert(t_33), e.queue.insert(n_30), i.links.insert(r), r.links.insert(i);
        } for (e.ints == null && (Zt.zpp_pool == null ? e.ints = new Zt : (e.ints = Zt.zpp_pool, Zt.zpp_pool = e.ints.next, e.ints.next = null), e.ints.lt = Hn.less_xy); !e.queue.empty();) {
            var t_34 = e.queue.pop_front();
            if (e.sweep.sweepx = t_34.vertex.x, t_34.type == 1) {
                var n_31 = t_34.segment;
                e.sweep.add(n_31), e._queueIntersection(n_31.next, n_31), e._queueIntersection(n_31, n_31.prev);
            }
            else if (t_34.type == 2) {
                var n_32 = t_34.segment;
                if (n_32.node != null) {
                    var t_35 = n_32.next, r_18 = n_32.prev;
                    e.sweep.remove(n_32);
                    var i_16 = n_32;
                    i_16.left = i_16.right = null, i_16.prev = null, i_16.node = null, i_16.vertices.clear(), i_16.next = Bn.zpp_pool, Bn.zpp_pool = i_16, e._queueIntersection(t_35, r_18);
                }
            }
            else {
                var n_33 = t_34.vertex, r_19 = n_33.node == null, i_17 = t_34.segment, a_13 = t_34.segment2;
                if (a_13.next != i_17) {
                    var e_27 = i_17;
                    i_17 = a_13, a_13 = e_27;
                }
                var o_8 = i_17.vertices.parent;
                for (; o_8 != null;)
                    if (i_17.vertices.lt(n_33, o_8.data))
                        o_8 = o_8.prev;
                    else if (i_17.vertices.lt(o_8.data, n_33))
                        o_8 = o_8.next;
                    else
                        break;
                var s_9 = o_8 == null, c_7 = a_13.vertices.parent;
                for (; c_7 != null;)
                    if (a_13.vertices.lt(n_33, c_7.data))
                        c_7 = c_7.prev;
                    else if (a_13.vertices.lt(c_7.data, n_33))
                        c_7 = c_7.next;
                    else
                        break;
                var l_4 = c_7 == null;
                if (s_9) {
                    var e_28 = i_17.vertices.insert(n_33), t_36 = n_33 == i_17.left ? n_33 : i_17.vertices.predecessor_node(e_28).data, r_20 = n_33 == i_17.right ? n_33 : i_17.vertices.successor_node(e_28).data;
                    t_36.links.remove(r_20), n_33 != t_36 && t_36.links.insert(n_33), r_20.links.remove(t_36), n_33 != r_20 && r_20.links.insert(n_33), n_33 != t_36 && n_33.links.insert(t_36), n_33 != r_20 && n_33.links.insert(r_20);
                }
                if (l_4) {
                    var e_29 = a_13.vertices.insert(n_33), t_37 = n_33 == a_13.left ? n_33 : a_13.vertices.predecessor_node(e_29).data, r_21 = n_33 == a_13.right ? n_33 : a_13.vertices.successor_node(e_29).data;
                    t_37.links.remove(r_21), n_33 != t_37 && t_37.links.insert(n_33), r_21.links.remove(t_37), n_33 != r_21 && r_21.links.insert(n_33), n_33 != t_37 && n_33.links.insert(t_37), n_33 != r_21 && n_33.links.insert(r_21);
                }
                if (r_19 && (n_33.node = e.vertices.insert(n_33)), n_33.forced = !0, r_19) {
                    var e_30 = i_17.node, t_38 = a_13.node;
                    e_30.data = a_13, t_38.data = i_17, i_17.node = t_38, a_13.node = e_30, a_13.next = i_17.next, i_17.next = a_13, i_17.prev = a_13.prev, a_13.prev = i_17, i_17.prev != null && (i_17.prev.next = i_17), a_13.next != null && (a_13.next.prev = a_13);
                }
                e._queueIntersection(a_13.next, a_13), e._queueIntersection(i_17, i_17.prev), e.ints.remove(t_34);
            }
            t_34.release();
        } for (e.inthash.clear(function (e) { e.next = Gn.zpp_pool, Gn.zpp_pool = e; }), n == null && (n = new Ot); !e.vertices.empty();)
            e.clip_polygon(e.vertices, n); return n; };
        e._queueIntersection = function (t, n) { if (t != null && n != null && !(t.id < n.id ? e.inthash.has(t.id, n.id) : e.inthash.has(n.id, t.id))) {
            var r_22 = e.sweep.intersection(t, n);
            if (r_22 != null) {
                if (r_22.vertex.x >= e.sweep.sweepx) {
                    var i_18 = e.queue.parent;
                    for (; i_18 != null;)
                        if (e.queue.lt(r_22, i_18.data))
                            i_18 = i_18.prev;
                        else if (e.queue.lt(i_18.data, r_22))
                            i_18 = i_18.next;
                        else
                            break;
                    var a_14 = i_18;
                    if (a_14 == null) {
                        var i_19 = e.ints.parent;
                        for (; i_19 != null;)
                            if (e.ints.lt(r_22, i_19.data))
                                i_19 = i_19.prev;
                            else if (e.ints.lt(i_19.data, r_22))
                                i_19 = i_19.next;
                            else
                                break;
                        var a_15 = i_19;
                        a_15 == null ? (e.queue.insert(r_22), e.ints.insert(r_22)) : (r_22.vertex.release(), r_22.vertex = a_15.data.vertex, a_15.data = r_22, e.queue.insert(r_22)), e.inthash.add(Gn.ordered_get(t.id, n.id, !0));
                    }
                    else {
                        var e_31 = a_14.data;
                        if (e_31.segment != r_22.segment || r_22.segment2 != e_31.segment2)
                            throw Error("corner case 2, shiiiit.");
                        r_22.vertex.release(), r_22.release();
                    }
                }
                else
                    r_22.vertex.release(), r_22.release();
            }
        } };
        e.clip_polygon = function (e, t) { var n = null, r = e.first(), i = r, a = r.links.parent, o = a.prev == null ? a.next : a.prev, s = a.data, c = o.data, l = r.x - s.x, u = r.y - s.y, d = c.x - r.x; (c.y - r.y) * l - d * u < 0 && (c = s); var f = r.x, p = r.y, m = W.get(f, p); if (n == null)
            m.prev = m.next = m;
        else {
            var e_32 = n, t_39 = e_32.next;
            m.prev = e_32, m.next = t_39, t_39.prev = m, e_32.next = m;
        } for (n = m, n.forced = r.forced;;) {
            if (r.links.remove(c), c.links.remove(r), c == i) {
                r.links.empty() && (e.remove(r), r.release());
                break;
            }
            var t_40 = c.x, a_16 = c.y, o_9 = W.get(t_40, a_16);
            if (n == null)
                o_9.prev = o_9.next = o_9;
            else {
                var e_33 = n, t_41 = e_33.next;
                o_9.prev = e_33, o_9.next = t_41, t_41.prev = o_9, e_33.next = o_9;
            }
            if (n = o_9, n.forced = c.forced, c.links.singular())
                r.links.empty() && (e.remove(r), r.release()), r = c, c = c.links.parent.data;
            else {
                var t_42 = null, n_34 = 0;
                if (!c.links.empty()) {
                    var e_34 = c.links.parent;
                    for (; e_34.prev != null;)
                        e_34 = e_34.prev;
                    for (; e_34 != null;) {
                        var i_20 = e_34.data;
                        if (t_42 == null) {
                            t_42 = i_20;
                            var e_35 = c.x - r.x, a_17 = c.y - r.y, o_10 = i_20.x - c.x;
                            n_34 = (i_20.y - c.y) * e_35 - o_10 * a_17;
                        }
                        else {
                            var e_36 = c.x - r.x, a_18 = c.y - r.y, o_11 = i_20.x - c.x, s_10 = (i_20.y - c.y) * e_36 - o_11 * a_18;
                            if (s_10 > 0 && n_34 <= 0)
                                t_42 = i_20, n_34 = s_10;
                            else if (n_34 * s_10 >= 0) {
                                var e_37 = c.x - i_20.x, r_23 = c.y - i_20.y, a_19 = t_42.x - c.x;
                                (t_42.y - c.y) * e_37 - a_19 * r_23 > 0 && (t_42 = i_20, n_34 = s_10);
                            }
                        }
                        if (e_34.next != null)
                            for (e_34 = e_34.next; e_34.prev != null;)
                                e_34 = e_34.prev;
                        else {
                            for (; e_34.parent != null && e_34 == e_34.parent.next;)
                                e_34 = e_34.parent;
                            e_34 = e_34.parent;
                        }
                    }
                }
                r.links.empty() && (e.remove(r), r.release()), r = c, c = t_42;
            }
        } if (e.remove(i), i.release(), n.next == n || n.next.next == n) {
            var e_38 = n, t_43 = n.prev;
            for (; e_38 != null;) {
                var n_35 = e_38 == t_43 ? null : e_38.next;
                e_38.free(), e_38.next = W.zpp_pool, W.zpp_pool = e_38, e_38 = n_35;
            }
        }
        else
            t.add(n); };
        e.isSimple = function (t) { e.sweep == null && (e.sweep = new Un, e.inthash = new qn); var n = e.list_vertices; n == null && (n = e.list_vertices = new kt); var r = t, i = t; if (r != null) {
            var e_39 = r;
            for (;;) {
                var t_44 = e_39, r_24 = t_44.x, a_20 = t_44.y;
                if (n.add(Rn.get(r_24, a_20)), e_39 = e_39.next, e_39 == i)
                    break;
            }
        } var a = e.list_queue; a == null && (a = e.list_queue = new At); var o = n.head, s = o.elt; for (o = o.next; o != null;) {
            var e_40 = o.elt, t_45 = a.add(Hn.get(s)), n_36 = a.add(Hn.get(e_40)), r_25 = void 0;
            Hn.less_xy(t_45, n_36) ? (t_45.type = 1, n_36.type = 2, r_25 = Bn.get(s, e_40)) : (t_45.type = 2, n_36.type = 1, r_25 = Bn.get(e_40, s)), t_45.segment = n_36.segment = r_25, s = e_40, o = o.next;
        } var c = n.head.elt, l = a.add(Hn.get(s)), u = a.add(Hn.get(c)), d; Hn.less_xy(l, u) ? (l.type = 1, u.type = 2, d = Bn.get(s, c)) : (l.type = 2, u.type = 1, d = Bn.get(c, s)), l.segment = u.segment = d; var f = a; if (f.head != null && f.head.next != null) {
            var e_41 = f.head, t_46, n_37, r_26, i_21, a_21 = 1, o_12, s_11, c_8;
            for (;;) {
                for (o_12 = 0, n_37 = e_41, e_41 = null, t_46 = null; n_37 != null;) {
                    for (++o_12, r_26 = n_37, s_11 = 0, c_8 = a_21; r_26 != null && s_11 < a_21;)
                        ++s_11, r_26 = r_26.next;
                    for (; s_11 > 0 || c_8 > 0 && r_26 != null;)
                        s_11 == 0 ? (i_21 = r_26, r_26 = r_26.next, --c_8) : c_8 == 0 || r_26 == null || Hn.less_xy(n_37.elt, r_26.elt) ? (i_21 = n_37, n_37 = n_37.next, --s_11) : (i_21 = r_26, r_26 = r_26.next, --c_8), t_46 == null ? e_41 = i_21 : t_46.next = i_21, t_46 = i_21;
                    n_37 = r_26;
                }
                if (t_46.next = null, a_21 <<= 1, !(o_12 > 1))
                    break;
            }
            f.head = e_41, f.modified = !0, f.pushmod = !0;
        } var p = !0; for (; a.head != null;) {
            var t_47 = a.pop_unsafe(), n_38 = t_47.segment;
            if (t_47.type == 1) {
                if (e.sweep.add(n_38), e.sweep.intersect(n_38, n_38.next) || e.sweep.intersect(n_38, n_38.prev)) {
                    p = !1;
                    break;
                }
            }
            else if (t_47.type == 2) {
                if (e.sweep.intersect(n_38.prev, n_38.next)) {
                    p = !1;
                    break;
                }
                e.sweep.remove(n_38);
                var t_48 = n_38;
                t_48.left = t_48.right = null, t_48.prev = null, t_48.node = null, t_48.vertices.clear(), t_48.next = Bn.zpp_pool, Bn.zpp_pool = t_48;
            }
            t_47.release();
        } for (; a.head != null;) {
            var e_42 = a.pop_unsafe();
            if (e_42.type == 2) {
                var t_49 = e_42.segment;
                t_49.left = t_49.right = null, t_49.prev = null, t_49.node = null, t_49.vertices.clear(), t_49.next = Bn.zpp_pool, Bn.zpp_pool = t_49;
            }
            e_42.release();
        } for (e.sweep.clear(); n.head != null;)
            n.pop_unsafe().release(); return p; };
        return e;
    }()), Jn.sweep = null, Jn.inthash = null, Jn.vertices = null, Jn.queue = null, Jn.ints = null, Jn.list_vertices = null, Jn.list_queue = null, Yn = Jn, Xn = (function () {
        function e() {
            this.node = null, this.prev = null, this.next = null, this.rightchain = !1, this.helper = null, this.type = 0, this.diagonals = null, this.forced = !1, this.y = 0, this.x = 0, this.mag = 0, this.id = 0, this.id = e.nextId++, this.diagonals = new Tt;
        }
        e.get = function (t) { var n; return e.zpp_pool == null ? n = new e : (n = e.zpp_pool, e.zpp_pool = n.next, n.next = null), n.x = t.x, n.y = t.y, n; };
        e.rightdistance = function (e, t) { var n = e.next.y > e.y, r = e.next.x - e.x, i = e.next.y - e.y, a = t.x - e.x, o = t.y - e.y; return (n ? -1 : 1) * (o * r - a * i); };
        e.vert_lt = function (t, n) { if (n == t || n == t.next)
            return !0; if (t.y == t.next.y) {
            var e_43 = t.x, r_27 = t.next.x;
            return (e_43 < r_27 ? e_43 : r_27) <= n.x;
        } return e.rightdistance(t, n) <= 0; };
        e.edge_swap = function (e, t) { var n = e.node; e.node = t.node, t.node = n; };
        e.edge_lt = function (t, n) { if (t == n && t.next == n.next)
            return !1; if (t == n.next)
            return !e.vert_lt(t, n); if (n == t.next)
            return e.vert_lt(n, t); if (t.y == t.next.y) {
            if (n.y == n.next.y) {
                var e_44 = t.x, r_28 = t.next.x, i_22 = n.x, a_22 = n.next.x;
                return (e_44 > r_28 ? e_44 : r_28) > (i_22 > a_22 ? i_22 : a_22);
            }
            return e.rightdistance(n, t) > 0 || e.rightdistance(n, t.next) > 0;
        } {
            var r_29 = e.rightdistance(t, n), i_23 = e.rightdistance(t, n.next);
            if (r_29 == 0 && i_23 == 0) {
                var e_45 = t.x, r_30 = t.next.x, i_24 = n.x, a_23 = n.next.x;
                return (e_45 > r_30 ? e_45 : r_30) > (i_24 > a_23 ? i_24 : a_23);
            }
            if (r_29 * i_23 >= 0)
                return r_29 < 0 || i_23 < 0;
            var a_24 = e.rightdistance(n, t), o_13 = e.rightdistance(n, t.next);
            return a_24 * o_13 >= 0 ? a_24 > 0 || o_13 > 0 : !1;
        } };
        e.prototype.free = function () { this.helper = null; };
        e.prototype.copy = function () { var t = e.get(this); return t.forced = this.forced, t; };
        e.prototype.sort = function () { var e = this.prev.x - this.x, t = this.prev.y - this.y, n = this.next.x - this.x, r = this.next.y - this.y, i = r * e - n * t, a = i > 0 ? -1 : i == 0 ? 0 : 1, o = this.diagonals; if (o.head != null && o.head.next != null) {
            var i_25 = o.head, s_12, c_9, l_5, u_4, d_2 = 1, f_2, p_2, m_2;
            for (;;) {
                for (f_2 = 0, c_9 = i_25, i_25 = null, s_12 = i_25; c_9 != null;) {
                    for (++f_2, l_5 = c_9, p_2 = 0, m_2 = d_2; l_5 != null && p_2 < d_2;)
                        ++p_2, l_5 = l_5.next;
                    for (; p_2 > 0 || m_2 > 0 && l_5 != null;) {
                        if (p_2 == 0)
                            u_4 = l_5, l_5 = l_5.next, --m_2;
                        else if (m_2 == 0 || l_5 == null)
                            u_4 = c_9, c_9 = c_9.next, --p_2;
                        else {
                            var i_26 = void 0;
                            if (a == 1) {
                                e = c_9.elt.x - this.x, t = c_9.elt.y - this.y, n = l_5.elt.x - this.x, r = l_5.elt.y - this.y;
                                var a_25 = r * e - n * t;
                                i_26 = (a_25 > 0 ? -1 : a_25 == 0 ? 0 : 1) == 1;
                            }
                            else {
                                e = this.prev.x - this.x, t = this.prev.y - this.y, n = c_9.elt.x - this.x, r = c_9.elt.y - this.y;
                                var a_26 = r * e - n * t, o_14 = a_26 > 0 ? -1 : a_26 == 0 ? 0 : 1;
                                e = this.prev.x - this.x, t = this.prev.y - this.y, n = l_5.elt.x - this.x, r = l_5.elt.y - this.y;
                                var s_13 = r * e - n * t, u_5 = s_13 > 0 ? -1 : s_13 == 0 ? 0 : 1;
                                if (o_14 * u_5 == 1 || o_14 * u_5 == 0 && (o_14 == 1 || u_5 == 1)) {
                                    e = c_9.elt.x - this.x, t = c_9.elt.y - this.y, n = l_5.elt.x - this.x, r = l_5.elt.y - this.y;
                                    var a_27 = r * e - n * t;
                                    i_26 = (a_27 > 0 ? -1 : a_27 == 0 ? 0 : 1) == 1;
                                }
                                else if (o_14 == -1 || u_5 == -1)
                                    i_26 = u_5 == -1;
                                else if (o_14 == 0 && u_5 == 0) {
                                    e = this.x - this.prev.x, t = this.y - this.prev.y, n = c_9.elt.x - this.x, r = c_9.elt.y - this.y;
                                    var a_28 = e * n + t * r;
                                    n = l_5.elt.x - this.x, r = l_5.elt.y - this.y;
                                    var o_15 = e * n + t * r;
                                    i_26 = a_28 < 0 && o_15 > 0 || !(o_15 < 0 && a_28 > 0);
                                }
                                else
                                    i_26 = !0;
                            }
                            i_26 ? (u_4 = c_9, c_9 = c_9.next, --p_2) : (u_4 = l_5, l_5 = l_5.next, --m_2);
                        }
                        s_12 == null ? i_25 = u_4 : s_12.next = u_4, s_12 = u_4;
                    }
                    c_9 = l_5;
                }
                if (s_12.next = null, d_2 <<= 1, !(f_2 > 1))
                    break;
            }
            o.head = i_25, o.modified = !0, o.pushmod = !0;
        } };
        return e;
    }()), Xn.zpp_pool = null, Xn.nextId = 0, G = Xn, Zn = (function () {
        function e(e) {
            this.next = null, this.vertices = null, this.init(e);
        }
        e.getShared = function () { return e.sharedGVList == null && (e.sharedGVList = new Ot), e.sharedGVList; };
        e.prototype.eq = function (e, t) { var n = e.x - t.x, r = e.y - t.y; return n * n + r * r < R.epsilon * R.epsilon; };
        e.prototype.init = function (e) { if (e == null)
            return; var t = 0, n = e, r = e; if (n != null) {
            var e_46 = n;
            for (;;) {
                var n_39 = e_46;
                if (t += n_39.x * (n_39.next.y - n_39.prev.y), e_46 = e_46.next, e_46 == r)
                    break;
            }
        } var i = t * .5 > 0, a = e; for (;;) {
            var t_50 = void 0;
            if (i) {
                var e_47 = G.get(a);
                this.vertices == null ? this.vertices = e_47.prev = e_47.next = e_47 : (e_47.prev = this.vertices, e_47.next = this.vertices.next, this.vertices.next.prev = e_47, this.vertices.next = e_47), t_50 = e_47;
            }
            else {
                var e_48 = G.get(a);
                this.vertices == null ? this.vertices = e_48.prev = e_48.next = e_48 : (e_48.next = this.vertices, e_48.prev = this.vertices.prev, this.vertices.prev.next = e_48, this.vertices.prev = e_48), t_50 = e_48;
            }
            if (this.vertices = t_50, this.vertices.forced = a.forced, a = a.next, a == e)
                break;
        } this.remove_collinear_vertices(); };
        e.prototype.remove_collinear_vertices = function () { var e = this.vertices, t = !0; for (; t || e != this.vertices;)
            if (t = !1, this.eq(e, e.next)) {
                if (e == this.vertices && (this.vertices = e.next, t = !0), e.forced && (e.next.forced = !0), e != null && e.prev == e) {
                    e.next = e.prev = null;
                    var t_51 = e;
                    t_51.helper = null, t_51.next = G.zpp_pool, G.zpp_pool = t_51, e = null, e = null;
                }
                else {
                    var t_52 = e.next;
                    e.prev.next = e.next, e.next.prev = e.prev, e.next = e.prev = null;
                    var n_40 = e;
                    n_40.helper = null, n_40.next = G.zpp_pool, G.zpp_pool = n_40, e = t_52;
                }
                if (e == null) {
                    this.vertices = null;
                    break;
                }
            }
            else
                e = e.next; if (this.vertices == null)
            return !0; var n; for (;;) {
            for (n = !1, e = this.vertices, t = !0; t || e != this.vertices;) {
                t = !1;
                var r_31 = e.prev, i_27 = e.x - r_31.x, a_29 = e.y - r_31.y, o_16 = e.next.x - e.x, s_14 = (e.next.y - e.y) * i_27 - o_16 * a_29;
                if (s_14 * s_14 >= R.epsilon * R.epsilon)
                    e = e.next;
                else {
                    if (e == this.vertices && (this.vertices = e.next, t = !0), e != null && e.prev == e) {
                        e.next = e.prev = null;
                        var t_53 = e;
                        t_53.helper = null, t_53.next = G.zpp_pool, G.zpp_pool = t_53, e = null, e = null;
                    }
                    else {
                        var t_54 = e.next;
                        e.prev.next = e.next, e.next.prev = e.prev, e.next = e.prev = null;
                        var n_41 = e;
                        n_41.helper = null, n_41.next = G.zpp_pool, G.zpp_pool = n_41, e = t_54;
                    }
                    if (n = !0, e == null) {
                        n = !1, this.vertices = null;
                        break;
                    }
                }
            }
            if (!n)
                break;
        } return this.vertices == null; };
        e.prototype.add_diagonal = function (e, t) { e.diagonals.add(t), t.diagonals.add(e), e.forced = t.forced = !0; };
        e.prototype.extract_partitions = function (e) { if (e == null && (e = new Dt), this.vertices != null) {
            var t_55 = this.vertices, n_42 = this.vertices;
            if (t_55 != null) {
                var e_49 = t_55;
                for (; e_49.sort(), e_49 = e_49.next, e_49 != n_42;)
                    ;
            }
            for (this.pull_partitions(this.vertices, e); this.vertices != null;) {
                var e_50 = void 0;
                if (this.vertices != null && this.vertices.prev == this.vertices) {
                    this.vertices.next = this.vertices.prev = null;
                    var t_56 = this.vertices;
                    t_56.helper = null, t_56.next = G.zpp_pool, G.zpp_pool = t_56, e_50 = this.vertices = null;
                }
                else {
                    var t_57 = this.vertices.next;
                    this.vertices.prev.next = this.vertices.next, this.vertices.next.prev = this.vertices.prev, this.vertices.next = this.vertices.prev = null;
                    var n_43 = this.vertices;
                    n_43.helper = null, n_43.next = G.zpp_pool, G.zpp_pool = n_43, this.vertices = null, e_50 = t_57;
                }
                this.vertices = e_50;
            }
            var r_32 = null, i_28 = e.head;
            for (; i_28 != null;)
                i_28.elt.remove_collinear_vertices() ? e.erase(r_32) : (r_32 = i_28, i_28 = i_28.next);
        } return e; };
        e.prototype.pull_partitions = function (t, n) { var r; e.zpp_pool == null ? r = new e : (r = e.zpp_pool, e.zpp_pool = r.next, r.next = null); var i = t; for (;;) {
            var e_51 = G.get(i);
            e_51.forced = i.forced;
            var a_30 = e_51;
            if (r.vertices == null ? r.vertices = a_30.prev = a_30.next = a_30 : (a_30.prev = r.vertices, a_30.next = r.vertices.next, r.vertices.next.prev = a_30, r.vertices.next = a_30), r.vertices = a_30, r.vertices.forced = i.forced, i.diagonals.head != null) {
                var e_52 = i.diagonals, r_33 = e_52.head.elt;
                if (e_52.pop(), r_33 == t)
                    break;
                i = this.pull_partitions(i, n);
            }
            else
                i = i.next;
            if (i == t)
                break;
        } var a = 0, o = r.vertices, s = r.vertices; if (o != null) {
            var e_53 = o;
            for (;;) {
                var t_58 = e_53;
                if (a += t_58.x * (t_58.next.y - t_58.prev.y), e_53 = e_53.next, e_53 == s)
                    break;
            }
        } return a * .5 != 0 && n.add(r), i; };
        e.prototype.extract = function (e) { if (e == null && (e = new Ot), this.vertices != null) {
            var t_59 = this.vertices, n_44 = this.vertices;
            if (t_59 != null) {
                var e_54 = t_59;
                for (; e_54.sort(), e_54 = e_54.next, e_54 != n_44;)
                    ;
            }
            for (this.pull(this.vertices, e); this.vertices != null;) {
                var e_55 = void 0;
                if (this.vertices != null && this.vertices.prev == this.vertices) {
                    this.vertices.next = this.vertices.prev = null;
                    var t_60 = this.vertices;
                    t_60.helper = null, t_60.next = G.zpp_pool, G.zpp_pool = t_60, e_55 = this.vertices = null;
                }
                else {
                    var t_61 = this.vertices.next;
                    this.vertices.prev.next = this.vertices.next, this.vertices.next.prev = this.vertices.prev, this.vertices.next = this.vertices.prev = null;
                    var n_45 = this.vertices;
                    n_45.helper = null, n_45.next = G.zpp_pool, G.zpp_pool = n_45, this.vertices = null, e_55 = t_61;
                }
                this.vertices = e_55;
            }
        } return e; };
        e.prototype.pull = function (e, t) { var n = null, r = e; for (;;) {
            var i_29 = r.x, a_31 = r.y, o_17 = W.get(i_29, a_31);
            if (n == null ? o_17.prev = o_17.next = o_17 : (o_17.prev = n, o_17.next = n.next, n.next.prev = o_17, n.next = o_17), n = o_17, n.forced = r.forced, r.diagonals.head != null) {
                var n_46 = r.diagonals, i_30 = n_46.head.elt;
                if (n_46.pop(), i_30 == e)
                    break;
                r = this.pull(r, t);
            }
            else
                r = r.next;
            if (r == e)
                break;
        } var i = 0, a = n, o = n; if (a != null) {
            var e_56 = a;
            for (;;) {
                var t_62 = e_56;
                if (i += t_62.x * (t_62.next.y - t_62.prev.y), e_56 = e_56.next, e_56 == o)
                    break;
            }
        } var s = i * .5; if (s * s >= R.epsilon * R.epsilon) {
            var e_57 = n, r_34 = !0;
            for (; r_34 || e_57 != n;) {
                r_34 = !1;
                var t_63 = e_57.x - e_57.next.x, i_31 = e_57.y - e_57.next.y;
                if (t_63 * t_63 + i_31 * i_31 < R.epsilon * R.epsilon) {
                    if (e_57 == n && (n = e_57.next, r_34 = !0), e_57.forced && (e_57.next.forced = !0), e_57 != null && e_57.prev == e_57)
                        e_57.next = e_57.prev = null, e_57 = null;
                    else {
                        var t_64 = e_57.next;
                        e_57.prev.next = e_57.next, e_57.next.prev = e_57.prev, e_57.next = e_57.prev = null, e_57 = t_64;
                    }
                    if (e_57 == null) {
                        n = null;
                        break;
                    }
                }
                else
                    e_57 = e_57.next;
            }
            if (n != null) {
                var t_65;
                for (;;) {
                    for (t_65 = !1, e_57 = n, r_34 = !0; r_34 || e_57 != n;) {
                        r_34 = !1;
                        var i_32 = e_57.prev, a_32 = e_57.x - i_32.x, o_18 = e_57.y - i_32.y, s_15 = e_57.next.x - e_57.x, c_10 = (e_57.next.y - e_57.y) * a_32 - s_15 * o_18;
                        if (c_10 * c_10 >= R.epsilon * R.epsilon)
                            e_57 = e_57.next;
                        else {
                            if (e_57 == n && (n = e_57.next, r_34 = !0), e_57 != null && e_57.prev == e_57)
                                e_57.next = e_57.prev = null, e_57 = null;
                            else {
                                var t_66 = e_57.next;
                                e_57.prev.next = e_57.next, e_57.next.prev = e_57.prev, e_57.next = e_57.prev = null, e_57 = t_66;
                            }
                            if (t_65 = !0, e_57 == null) {
                                t_65 = !1, n = null;
                                break;
                            }
                        }
                    }
                    if (!t_65)
                        break;
                }
            }
            n != null && t.add(n);
        } return r; };
        return e;
    }()), Zn.zpp_pool = null, Zn.sharedPPList = null, Zn.sharedGVList = null, K = Zn, Qn = (function () {
        function e() {
        }
        e.bisector = function (e) { var t = e.prev, n = e.next, r = e.x - t.x, i = e.y - t.y, a = n.x - e.x, o = n.y - e.y, s = V.get(-i - o, r + a, !1), c = s.x * s.x + s.y * s.y, l = 1 / Math.sqrt(c); return s.x *= l, s.y *= l, o * r - a * i < 0 && (s.x = -s.x, s.y = -s.y), s; };
        e.below = function (t, n) { if (t.y < n.y)
            return !0; if (t.y > n.y)
            return !1; if (t.x < n.x)
            return !0; if (t.x > n.x)
            return !1; {
            var r_35 = e.bisector(t), i_33 = e.bisector(n);
            r_35.x += t.x * 1, r_35.y += t.y * 1, i_33.x += n.x * 1, i_33.y += n.y * 1;
            var a_33 = r_35.x < i_33.x || r_35.x == i_33.x && r_35.y < i_33.y;
            return r_35.outer != null && (r_35.outer.zpp_inner = null, r_35.outer = null), r_35._isimmutable = null, r_35._validate = null, r_35._invalidate = null, r_35.next = V.zpp_pool, V.zpp_pool = r_35, i_33.outer != null && (i_33.outer.zpp_inner = null, i_33.outer = null), i_33._isimmutable = null, i_33._validate = null, i_33._invalidate = null, i_33.next = V.zpp_pool, V.zpp_pool = i_33, a_33;
        } };
        e.above = function (t, n) { return e.below(n, t); };
        e.left_vertex = function (e) { var t = e.prev; return t.y > e.y || t.y == e.y && e.next.y < e.y; };
        e.isMonotone = function (e) { var t = e, n = e, r = e.next, i = e; if (r != null) {
            var e_58 = r;
            for (;;) {
                var r_36 = e_58;
                if (r_36.y < t.y && (t = r_36), r_36.y > n.y && (n = r_36), e_58 = e_58.next, e_58 == i)
                    break;
            }
        } var a = !0, o = t; if (n != t.next) {
            var e_59 = t.next, r_37 = n;
            if (e_59 != null) {
                var t_67 = e_59;
                for (;;) {
                    var e_60 = t_67;
                    if (e_60.y < o.y) {
                        a = !1;
                        break;
                    }
                    if (o = e_60, t_67 = t_67.next, t_67 == r_37)
                        break;
                }
            }
        } if (!a)
            return !1; if (o = t, n != t.prev) {
            var e_61 = t.prev, r_38 = n;
            if (e_61 != null) {
                var t_68 = e_61;
                for (;;) {
                    var e_62 = t_68;
                    if (e_62.y < o.y) {
                        a = !1;
                        break;
                    }
                    if (o = e_62, t_68 = t_68.prev, t_68 == r_38)
                        break;
                }
            }
        } return a; };
        e.getShared = function () { return e.sharedPPoly == null && (e.sharedPPoly = new K), e.sharedPPoly; };
        e.decompose = function (t, n) { if (n == null ? n = new K(t) : n.init(t), n.vertices == null)
            return n; e.queue == null && (e.queue = new Tt); var r = n.vertices, i = n.vertices; if (r != null) {
            var t_69 = r;
            for (;;) {
                var n_47 = t_69;
                e.queue.add(n_47);
                var r_39 = n_47.next.x - n_47.x, a_34 = n_47.next.y - n_47.y, o_19 = n_47.prev.x - n_47.x, s_16 = (n_47.prev.y - n_47.y) * r_39 - o_19 * a_34 > 0;
                if (n_47.type = e.below(n_47.prev, n_47) ? e.below(n_47.next, n_47) ? s_16 ? 0 : 3 : 4 : e.below(n_47, n_47.next) ? s_16 ? 1 : 2 : 4, t_69 = t_69.next, t_69 == i)
                    break;
            }
        } var a = e.queue; if (a.head != null && a.head.next != null) {
            var t_70 = a.head, n_48, r_40, i_34, o_20, s_17 = 1, c_11, l_6, u_6;
            for (;;) {
                for (c_11 = 0, r_40 = t_70, t_70 = null, n_48 = t_70; r_40 != null;) {
                    for (++c_11, i_34 = r_40, l_6 = 0, u_6 = s_17; i_34 != null && l_6 < s_17;)
                        ++l_6, i_34 = i_34.next;
                    for (; l_6 > 0 || u_6 > 0 && i_34 != null;)
                        l_6 == 0 ? (o_20 = i_34, i_34 = i_34.next, --u_6) : u_6 == 0 || i_34 == null || e.above(r_40.elt, i_34.elt) ? (o_20 = r_40, r_40 = r_40.next, --l_6) : (o_20 = i_34, i_34 = i_34.next, --u_6), n_48 == null ? t_70 = o_20 : n_48.next = o_20, n_48 = o_20;
                    r_40 = i_34;
                }
                if (n_48.next = null, s_17 <<= 1, !(c_11 > 1))
                    break;
            }
            a.head = t_70, a.modified = !0, a.pushmod = !0;
        } for (e.edges == null && (qt.zpp_pool == null ? e.edges = new qt : (e.edges = qt.zpp_pool, qt.zpp_pool = e.edges.next, e.edges.next = null), e.edges.lt = G.edge_lt, e.edges.swapped = G.edge_swap); e.queue.head != null;) {
            var t_71 = e.queue.pop_unsafe();
            switch (t_71.type) {
                case 0:
                    t_71.helper = t_71, t_71.node = e.edges.insert(t_71);
                    break;
                case 1: {
                    var r_41 = t_71.prev;
                    if (r_41.helper == null)
                        throw Error("Fatal error (1): Polygon is not weakly-simple and clockwise");
                    r_41.helper.type == 2 && n.add_diagonal(t_71, r_41.helper), e.edges.remove_node(r_41.node), r_41.helper = null;
                    break;
                }
                case 2: {
                    var r_42 = t_71.prev;
                    if (r_42.helper == null)
                        throw Error("Fatal error (3): Polygon is not weakly-simple and clockwise");
                    r_42.helper.type == 2 && n.add_diagonal(t_71, r_42.helper), e.edges.remove_node(r_42.node), r_42.helper = null;
                    var i_35 = null;
                    if (!e.edges.empty()) {
                        var n_49 = e.edges.parent;
                        for (; n_49.prev != null;)
                            n_49 = n_49.prev;
                        for (; n_49 != null;) {
                            var e_63 = n_49.data;
                            if (!G.vert_lt(e_63, t_71)) {
                                i_35 = e_63;
                                break;
                            }
                            if (n_49.next != null)
                                for (n_49 = n_49.next; n_49.prev != null;)
                                    n_49 = n_49.prev;
                            else {
                                for (; n_49.parent != null && n_49 == n_49.parent.next;)
                                    n_49 = n_49.parent;
                                n_49 = n_49.parent;
                            }
                        }
                    }
                    var a_35 = i_35;
                    if (a_35 != null) {
                        if (a_35.helper == null)
                            throw Error("Fatal error (4): Polygon is not weakly-simple and clockwise");
                        a_35.helper.type == 2 && n.add_diagonal(t_71, a_35.helper), a_35.helper = t_71;
                    }
                    break;
                }
                case 3: {
                    var r_43 = null;
                    if (!e.edges.empty()) {
                        var n_50 = e.edges.parent;
                        for (; n_50.prev != null;)
                            n_50 = n_50.prev;
                        for (; n_50 != null;) {
                            var e_64 = n_50.data;
                            if (!G.vert_lt(e_64, t_71)) {
                                r_43 = e_64;
                                break;
                            }
                            if (n_50.next != null)
                                for (n_50 = n_50.next; n_50.prev != null;)
                                    n_50 = n_50.prev;
                            else {
                                for (; n_50.parent != null && n_50 == n_50.parent.next;)
                                    n_50 = n_50.parent;
                                n_50 = n_50.parent;
                            }
                        }
                    }
                    var i_36 = r_43;
                    if (i_36 != null) {
                        if (i_36.helper == null)
                            throw Error("Fatal error (2): Polygon is not weakly-simple and clockwise");
                        n.add_diagonal(t_71, i_36.helper), i_36.helper = t_71;
                    }
                    t_71.node = e.edges.insert(t_71), t_71.helper = t_71;
                    break;
                }
                case 4: {
                    var r_44 = t_71.prev;
                    if (e.left_vertex(t_71)) {
                        if (r_44.helper == null)
                            throw Error("Fatal error (5): Polygon is not weakly-simple and clockwise");
                        r_44.helper.type == 2 && n.add_diagonal(t_71, r_44.helper), e.edges.remove_node(r_44.node), r_44.helper = null, t_71.node = e.edges.insert(t_71), t_71.helper = t_71;
                    }
                    else {
                        var r_45 = null;
                        if (!e.edges.empty()) {
                            var n_51 = e.edges.parent;
                            for (; n_51.prev != null;)
                                n_51 = n_51.prev;
                            for (; n_51 != null;) {
                                var e_65 = n_51.data;
                                if (!G.vert_lt(e_65, t_71)) {
                                    r_45 = e_65;
                                    break;
                                }
                                if (n_51.next != null)
                                    for (n_51 = n_51.next; n_51.prev != null;)
                                        n_51 = n_51.prev;
                                else {
                                    for (; n_51.parent != null && n_51 == n_51.parent.next;)
                                        n_51 = n_51.parent;
                                    n_51 = n_51.parent;
                                }
                            }
                        }
                        var i_37 = r_45;
                        if (i_37 == null || i_37.helper == null)
                            throw Error("Fatal error (6): Polygon is not weakly-simple and clockwise");
                        i_37.helper.type == 2 && n.add_diagonal(t_71, i_37.helper), i_37.helper = t_71;
                    }
                    break;
                }
            }
        } return n; };
        return e;
    }()), Qn.queue = null, Qn.edges = null, Qn.sharedPPoly = null, $n = Qn, er = (function () {
        function e() {
            this.x = 0, this.y = 0, this.next = null, this.prev = null, this.flag = !1, this.forced = !1;
        }
        e.get = function (t) { var n; return e.zpp_pool == null ? n = new e : (n = e.zpp_pool, e.zpp_pool = n.next, n.next = null), n.x = t.x, n.y = t.y, n.flag = !1, n; };
        return e;
    }()), er.zpp_pool = null, tr = er, nr = (function () {
        function e() {
            this.next = null, this.min = null, this.max = null;
        }
        e.get = function (t, n) { var r; return e.zpp_pool == null ? r = new e : (r = e.zpp_pool, e.zpp_pool = r.next, r.next = null), r.min = t, r.max = n, r; };
        e.prototype.free = function () { this.min = null, this.max = null; };
        return e;
    }()), nr.zpp_pool = null, rr = nr, ir = (function () {
        function e() {
        }
        e.less = function (e, t) { return e.x - t.x + (e.y - t.y) < 0; };
        e.distance = function (e, t, n) { var r = n.x - t.x, i = n.y - t.y, a = e.x - t.x, o = e.y - t.y; if (r * r + i * i == 0)
            return a * a + o * o; {
            var t_72 = (a * r + o * i) / (r * r + i * i);
            if (t_72 <= 0)
                return a * a + o * o;
            if (t_72 >= 1) {
                var t_73 = e.x - n.x, r_46 = e.y - n.y;
                return t_73 * t_73 + r_46 * r_46;
            }
            {
                var e_66 = t_72;
                return a -= r * e_66, o -= i * e_66, a * a + o * o;
            }
        } };
        e.simplify = function (t, n) { var r = null, i = null, a = null; n *= n, e.stack == null && (e.stack = new Et); var o = null, s = null, c = t; for (;;) {
            var n_52 = tr.get(c);
            if (n_52.forced = c.forced, n_52.forced) {
                if (n_52.flag = !0, o != null) {
                    var t_74 = e.stack, r_47 = rr.get(o, n_52);
                    t_74.add(r_47);
                }
                else
                    s = n_52;
                o = n_52;
            }
            var l_7 = n_52;
            if (r == null ? l_7.prev = l_7.next = l_7 : (l_7.prev = r, l_7.next = r.next, r.next.prev = l_7, r.next = l_7), r = l_7, i == null ? (i = r, a = r) : (r.x - i.x + (r.y - i.y) < 0 && (i = r), a.x - r.x + (a.y - r.y) < 0 && (a = r)), c = c.next, c == t)
                break;
        } if (e.stack.head == null) {
            if (s == null) {
                i.flag = a.flag = !0;
                var t_75 = e.stack, n_53 = rr.get(i, a);
                t_75.add(n_53);
                var r_48 = e.stack, o_21 = rr.get(a, i);
                r_48.add(o_21);
            }
            else {
                var t_76 = i.x - s.x + (i.y - s.y);
                t_76 < 0 && (t_76 = -t_76);
                var n_54 = a.x - s.x + (a.y - s.y);
                if (n_54 < 0 && (n_54 = -n_54), t_76 > n_54) {
                    i.flag = s.flag = !0;
                    var t_77 = e.stack, n_55 = rr.get(i, s);
                    t_77.add(n_55);
                    var r_49 = e.stack, a_36 = rr.get(s, i);
                    r_49.add(a_36);
                }
                else {
                    a.flag = s.flag = !0;
                    var t_78 = e.stack, n_56 = rr.get(a, s);
                    t_78.add(n_56);
                    var r_50 = e.stack, i_38 = rr.get(s, a);
                    r_50.add(i_38);
                }
            }
        }
        else {
            var t_79 = e.stack, n_57 = rr.get(o, s);
            t_79.add(n_57);
        } for (; e.stack.head != null;) {
            var t_80 = e.stack.pop_unsafe(), r_51 = t_80.min, i_39 = t_80.max, a_37 = t_80;
            a_37.min = a_37.max = null, a_37.next = rr.zpp_pool, rr.zpp_pool = a_37;
            var o_22 = n, s_18 = null, c_12 = r_51.next;
            for (; c_12 != i_39;) {
                var t_81 = e.distance(c_12, r_51, i_39);
                t_81 > o_22 && (o_22 = t_81, s_18 = c_12), c_12 = c_12.next;
            }
            if (s_18 != null) {
                s_18.flag = !0;
                var t_82 = e.stack, n_58 = rr.get(r_51, s_18);
                t_82.add(n_58);
                var a_38 = e.stack, o_23 = rr.get(s_18, i_39);
                a_38.add(o_23);
            }
        } var l = null; for (; r != null;) {
            if (r.flag) {
                var e_67 = r.x, t_83 = r.y, n_59 = W.get(e_67, t_83);
                l == null ? n_59.prev = n_59.next = n_59 : (n_59.prev = l, n_59.next = l.next, l.next.prev = n_59, l.next = n_59), l = n_59, l.forced = r.forced;
            }
            if (r != null && r.prev == r)
                r.next = r.prev = null, r.next = tr.zpp_pool, tr.zpp_pool = r, r = null;
            else {
                var e_68 = r.next;
                r.prev.next = r.next, r.next.prev = r.prev, r.next = r.prev = null, r.next = tr.zpp_pool, tr.zpp_pool = r, r = e_68;
            }
        } return l; };
        return e;
    }()), ir.stack = null, ar = ir, or = (function () {
        function e() {
            this.prev = null, this.next = null, this.posx = 0, this.posy = 0, this.vert = null, this.value = 0, this.positive = !1, this.parent = null, this.rank = 0, this.used = !1;
        }
        e.path = function (t) { var n; return e.zpp_pool == null ? n = new e : (n = e.zpp_pool, e.zpp_pool = n.next, n.next = null), n.vert = t, n.parent = n, n.rank = 0, n.used = !1, n; };
        e.prototype.free = function () { this.vert = null, this.parent = null; };
        e.find = function (e) { if (e == e.parent)
            return e; var t = e, n = null; for (; t != t.parent;) {
            var e_69 = t.parent;
            t.parent = n, n = t, t = e_69;
        } for (; n != null;) {
            var e_70 = n.parent;
            n.parent = t, n = e_70;
        } return t; };
        e.union = function (t, n) { var r = e.find(t), i = e.find(n); r != i && (r.rank < i.rank ? r.parent = i : r.rank > i.rank ? i.parent = r : (i.parent = r, r.rank++)); };
        return e;
    }()), or.zpp_pool = null, q = or, sr = (function () {
        function e() {
            this.next = null, this.time = 0, this.virtualint = !1, this.vertex = !1, this.path0 = null, this.end = null, this.start = null, this.path1 = null;
        }
        e.get = function (t, n, r, i, a, o, s) {
            if (o === void 0) { o = !1; }
            if (s === void 0) { s = !1; }
            var c;
            return e.zpp_pool == null ? c = new e : (c = e.zpp_pool, e.zpp_pool = c.next, c.next = null), c.virtualint = o, c.end = n, c.start = r, c.path0 = i, c.path1 = a, c.time = t, c.vertex = s, c;
        };
        e.prototype.free = function () { this.end = this.start = null, this.path0 = this.path1 = null; };
        return e;
    }()), sr.zpp_pool = null, cr = sr, lr = (function () {
        function e() {
        }
        e.run = function (t, n, r, i, a, o) { var s = d(), c = s.__zpp; if (n != null && n.zpp_disp)
            throw Error("Vec2 has been disposed and cannot be used!"); var l = n.zpp_inner; l._validate != null && l._validate(); var u = n.zpp_inner.x; if (n != null && n.zpp_disp)
            throw Error("Vec2 has been disposed and cannot be used!"); var f = n.zpp_inner; f._validate != null && f._validate(); var p = n.zpp_inner.y; if (r != null && r.zpp_disp)
            throw Error("Vec2 has been disposed and cannot be used!"); var m = r.zpp_inner; m._validate != null && m._validate(); var h = r.zpp_inner.x - u; if (r != null && r.zpp_disp)
            throw Error("Vec2 has been disposed and cannot be used!"); var g = r.zpp_inner; g._validate != null && g._validate(); var _ = r.zpp_inner.y - p, v = i ? 0 : -1 / 0, y = a ? 1 : 1 / 0, b = -(p * h - u * _), w = null, T = !1, E = t; for (;;) {
            var e_71 = void 0;
            q.zpp_pool == null ? e_71 = new q : (e_71 = q.zpp_pool, q.zpp_pool = e_71.next, e_71.next = null), e_71.vert = E, e_71.posx = E.x, e_71.posy = E.y, e_71.value = e_71.posy * h - e_71.posx * _ + b, e_71.positive = e_71.value > 0, e_71.value == 0 && (T = !0);
            var n_60 = e_71;
            if (w == null ? n_60.prev = n_60.next = n_60 : (n_60.prev = w, n_60.next = w.next, w.next.prev = n_60, w.next = n_60), w = n_60, E = E.next, E == t)
                break;
        } if (T) {
            var e_72 = null, n_61 = w, r_52 = w;
            if (n_61 != null) {
                var t_84 = n_61;
                for (;;) {
                    var n_62 = t_84;
                    if (n_62.value != 0) {
                        e_72 = n_62;
                        break;
                    }
                    if (t_84 = t_84.next, t_84 == r_52)
                        break;
                }
            }
            var i_41, a_39;
            i_41 = h, a_39 = _;
            var o_24 = i_41 * i_41 + a_39 * a_39, s_19 = 1 / Math.sqrt(o_24);
            i_41 *= s_19, a_39 *= s_19;
            var c_13 = i_41;
            i_41 = -a_39, a_39 = c_13;
            var l_8 = null, u_7 = e_72;
            for (;;) {
                if (u_7.value != 0 && (l_8 == null || u_7 == l_8.next)) {
                    if (l_8 = u_7, u_7 = u_7.next, u_7 == e_72)
                        break;
                    continue;
                }
                var n_63 = l_8.value * u_7.value;
                if (n_63 == 0) {
                    if (u_7 = u_7.next, u_7 == e_72)
                        break;
                    continue;
                }
                var r_53 = l_8.next, o_25 = void 0;
                if (n_63 > 0)
                    o_25 = S(t, r_53, l_8.positive, i_41, a_39);
                else {
                    var e_73 = r_53.next, n_64 = void 0, s_20 = void 0;
                    n_64 = r_53.posx + e_73.posx, s_20 = r_53.posy + e_73.posy;
                    var c_14 = .5;
                    n_64 *= c_14, s_20 *= c_14;
                    var l_9 = n_64 + i_41 * 1e-8, u_8 = s_20 + a_39 * 1e-8, d_3 = !1, f_3 = t, p_3 = t;
                    if (f_3 != null) {
                        var e_74 = f_3;
                        for (;;) {
                            var t_85 = e_74, n_65 = t_85.prev;
                            if ((t_85.y < u_8 && n_65.y >= u_8 || n_65.y < u_8 && t_85.y >= u_8) && (t_85.x <= l_9 || n_65.x <= l_9) && t_85.x + (u_8 - t_85.y) / (n_65.y - t_85.y) * (n_65.x - t_85.x) < l_9 && (d_3 = !d_3), e_74 = e_74.next, e_74 == p_3)
                                break;
                        }
                    }
                    o_25 = d_3;
                }
                var s_21 = r_53, c_15 = u_7;
                if (s_21 != null) {
                    var e_75 = s_21;
                    for (;;) {
                        var t_86 = e_75;
                        if (t_86.positive = o_25, e_75 = e_75.next, e_75 == c_15)
                            break;
                    }
                }
                if (l_8 = u_7, u_7 = u_7.next, u_7 == e_72)
                    break;
            }
            for (; u_7.value == 0 || l_8 != null && u_7 != l_8.next;) {
                var e_76 = l_8.value * u_7.value;
                if (e_76 == 0)
                    break;
                var n_66 = l_8.next, r_54 = void 0;
                if (e_76 > 0)
                    r_54 = S(t, n_66, l_8.positive, i_41, a_39);
                else {
                    var e_77 = n_66.next, o_26 = void 0, s_22 = void 0;
                    o_26 = n_66.posx + e_77.posx, s_22 = n_66.posy + e_77.posy;
                    var c_16 = .5;
                    o_26 *= c_16, s_22 *= c_16;
                    var l_10 = o_26 + i_41 * 1e-8, u_9 = s_22 + a_39 * 1e-8, d_4 = !1, f_4 = t, p_4 = t;
                    if (f_4 != null) {
                        var e_78 = f_4;
                        for (;;) {
                            var t_87 = e_78, n_67 = t_87.prev;
                            if ((t_87.y < u_9 && n_67.y >= u_9 || n_67.y < u_9 && t_87.y >= u_9) && (t_87.x <= l_10 || n_67.x <= l_10) && t_87.x + (u_9 - t_87.y) / (n_67.y - t_87.y) * (n_67.x - t_87.x) < l_10 && (d_4 = !d_4), e_78 = e_78.next, e_78 == p_4)
                                break;
                        }
                    }
                    r_54 = d_4;
                }
                var o_27 = n_66, s_23 = u_7;
                if (o_27 != null) {
                    var e_79 = o_27;
                    for (;;) {
                        var t_88 = e_79;
                        if (t_88.positive = r_54, e_79 = e_79.next, e_79 == s_23)
                            break;
                    }
                }
                break;
            }
        } e.ints == null && (e.ints = new c.util.ZNPList_ZPP_CutInt), e.paths == null && (e.paths = new c.util.ZNPList_ZPP_CutVert); var O = null, k = w.posx, te = w.posy, A = W.get(k, te); A.prev = A.next = A, O = A; var j = O, M; q.zpp_pool == null ? M = new q : (M = q.zpp_pool, q.zpp_pool = M.next, M.next = null), M.vert = O, M.parent = M, M.rank = 0, M.used = !1; var N = M; e.paths.add(N); var P = w; for (;;) {
            var t_89 = P.next, n_68 = t_89.posx, r_55 = t_89.posy, i_42 = W.get(n_68, r_55);
            if (P.positive == t_89.positive) {
                var e_80 = i_42;
                O == null ? (e_80.prev = e_80.next = e_80, O = e_80) : (e_80.next = O, e_80.prev = O.prev, O.prev.next = e_80, O.prev = e_80);
            }
            else {
                var n_69 = t_89.posx - P.posx, r_56 = t_89.posy - P.posy, a_40 = _ * n_69 - h * r_56;
                a_40 = 1 / a_40;
                var o_28 = u - P.posx, s_24 = p - P.posy, c_17 = (r_56 * o_28 - n_69 * s_24) * a_40;
                if (c_17 < v || c_17 > y) {
                    var t_90 = e.ints, n_70 = cr.get(c_17, null, null, null, null, !0, !1);
                    t_90.add(n_70);
                    var r_57 = i_42;
                    O == null ? (r_57.prev = r_57.next = r_57, O = r_57) : (r_57.next = O, r_57.prev = O.prev, O.prev.next = r_57, O.prev = r_57);
                }
                else if (P.value == 0) {
                    var t_91 = O.prev;
                    O = null;
                    var n_71 = t_91.x, r_58 = t_91.y, a_41 = W.get(n_71, r_58);
                    a_41.prev = a_41.next = a_41, O = a_41;
                    var o_29 = i_42;
                    O == null ? (o_29.prev = o_29.next = o_29, O = o_29) : (o_29.next = O, o_29.prev = O.prev, O.prev.next = o_29, O.prev = o_29);
                    var s_25 = e.paths.head.elt, l_11 = e.paths, u_10 = void 0;
                    q.zpp_pool == null ? u_10 = new q : (u_10 = q.zpp_pool, q.zpp_pool = u_10.next, u_10.next = null), u_10.vert = O, u_10.parent = u_10, u_10.rank = 0, u_10.used = !1, l_11.add(u_10);
                    var d_5 = e.paths.head.elt, f_5 = e.ints, p_5 = cr.get(c_17, t_91, O, s_25, d_5, !0, !1);
                    f_5.add(p_5);
                }
                else if (t_89.value == 0) {
                    var n_72 = i_42;
                    O == null ? (n_72.prev = n_72.next = n_72, O = n_72) : (n_72.next = O, n_72.prev = O.prev, O.prev.next = n_72, O.prev = n_72);
                    var r_59 = O.prev;
                    O = null;
                    var a_42 = t_89.posx, o_30 = t_89.posy, s_26 = W.get(a_42, o_30);
                    s_26.prev = s_26.next = s_26, O = s_26;
                    var l_12 = e.paths.head.elt, u_11 = e.paths, d_6 = void 0;
                    q.zpp_pool == null ? d_6 = new q : (d_6 = q.zpp_pool, q.zpp_pool = d_6.next, d_6.next = null), d_6.vert = O, d_6.parent = d_6, d_6.rank = 0, d_6.used = !1, u_11.add(d_6);
                    var f_6 = e.paths.head.elt, p_6 = e.ints, m_3 = cr.get(c_17, r_59, O, l_12, f_6, !0, !1);
                    p_6.add(m_3);
                }
                else {
                    var t_92 = (_ * o_28 - h * s_24) * a_40, l_13 = void 0, u_12 = void 0;
                    l_13 = P.posx, u_12 = P.posy;
                    var d_7 = t_92;
                    l_13 += n_69 * d_7, u_12 += r_56 * d_7;
                    var f_7 = W.get(l_13, u_12);
                    O == null ? (f_7.prev = f_7.next = f_7, O = f_7) : (f_7.next = O, f_7.prev = O.prev, O.prev.next = f_7, O.prev = f_7);
                    var p_7 = O.prev;
                    O = null;
                    var m_4 = W.get(l_13, u_12);
                    m_4.prev = m_4.next = m_4, O = m_4;
                    var g_2 = i_42;
                    O == null ? (g_2.prev = g_2.next = g_2, O = g_2) : (g_2.next = O, g_2.prev = O.prev, O.prev.next = g_2, O.prev = g_2);
                    var v_1 = e.paths.head.elt, y_1 = e.paths, b_1 = void 0;
                    q.zpp_pool == null ? b_1 = new q : (b_1 = q.zpp_pool, q.zpp_pool = b_1.next, b_1.next = null), b_1.vert = O, b_1.parent = b_1, b_1.rank = 0, b_1.used = !1, y_1.add(b_1);
                    var x_1 = e.paths.head.elt, S_1 = e.ints, C_1 = cr.get(c_17, p_7, O, v_1, x_1, !1, !1);
                    S_1.add(C_1);
                }
            }
            if (P = P.next, P == w)
                break;
        } var F = O.prev; F.next.prev = j.prev, j.prev.next = F.next, F.next = j, j.prev = F; var ne = e.paths.head.elt; q.union(N, ne); var I = e.ints; if (I.head != null && I.head.next != null) {
            var e_81 = I.head, t_93, n_73, r_60, i_43, a_43 = 1, o_31, s_27, c_18;
            for (;;) {
                for (o_31 = 0, n_73 = e_81, e_81 = null, t_93 = e_81; n_73 != null;) {
                    for (++o_31, r_60 = n_73, s_27 = 0, c_18 = a_43; r_60 != null && s_27 < a_43;)
                        ++s_27, r_60 = r_60.next;
                    for (; s_27 > 0 || c_18 > 0 && r_60 != null;)
                        s_27 == 0 ? (i_43 = r_60, r_60 = r_60.next, --c_18) : c_18 == 0 || r_60 == null || n_73.elt.time < r_60.elt.time ? (i_43 = n_73, n_73 = n_73.next, --s_27) : (i_43 = r_60, r_60 = r_60.next, --c_18), t_93 == null ? e_81 = i_43 : t_93.next = i_43, t_93 = i_43;
                    n_73 = r_60;
                }
                if (t_93.next = null, a_43 <<= 1, !(o_31 > 1))
                    break;
            }
            I.head = e_81, I.modified = !0, I.pushmod = !0;
        } for (; e.ints.head != null;) {
            var t_94 = e.ints.pop_unsafe(), n_74 = e.ints.pop_unsafe();
            if (t_94.virtualint != n_74.virtualint) {
                var e_82 = t_94.virtualint ? t_94 : n_74;
                e_82.start != null && (e_82.virtualint = !1);
            }
            if (!t_94.virtualint && !n_74.virtualint)
                t_94.end.next.prev = n_74.start.prev, n_74.start.prev.next = t_94.end.next, t_94.end.next = n_74.start, n_74.start.prev = t_94.end, n_74.end.next.prev = t_94.start.prev, t_94.start.prev.next = n_74.end.next, n_74.end.next = t_94.start, t_94.start.prev = n_74.end, q.union(t_94.path0, n_74.path1), q.union(t_94.path1, n_74.path0);
            else if (t_94.virtualint && !n_74.virtualint) {
                if (n_74.end = D(n_74.end), !n_74.vertex) {
                    if (n_74.end != n_74.path0.vert)
                        n_74.start.x = n_74.end.x, n_74.start.y = n_74.end.y, n_74.end = D(n_74.end);
                    else {
                        var e_83 = n_74.start.next;
                        n_74.start.x = e_83.x, n_74.start.y = e_83.y, D(e_83);
                    }
                }
                n_74.end.next.prev = n_74.start.prev, n_74.start.prev.next = n_74.end.next, n_74.end.next = n_74.start, n_74.start.prev = n_74.end, q.union(n_74.path0, n_74.path1);
            }
            else if (n_74.virtualint && !t_94.virtualint) {
                if (t_94.end = D(t_94.end), !t_94.vertex) {
                    if (t_94.end != t_94.path0.vert)
                        t_94.start.x = t_94.end.x, t_94.start.y = t_94.end.y, t_94.end = D(t_94.end);
                    else {
                        var e_84 = t_94.start.next;
                        t_94.start.x = e_84.x, t_94.start.y = e_84.y, D(e_84);
                    }
                }
                t_94.end.next.prev = t_94.start.prev, t_94.start.prev.next = t_94.end.next, t_94.end.next = t_94.start, t_94.start.prev = t_94.end, q.union(t_94.path0, t_94.path1);
            }
            var r_61 = t_94;
            r_61.end = r_61.start = null, r_61.path0 = r_61.path1 = null, r_61.next = cr.zpp_pool, cr.zpp_pool = r_61;
            var i_44 = n_74;
            i_44.end = i_44.start = null, i_44.path0 = i_44.path1 = null, i_44.next = cr.zpp_pool, cr.zpp_pool = i_44;
        } var L = o == null ? new s.geom.GeomPolyList : o, re = R.epsilon * Math.sqrt(h * h + _ * _), ie = function (e, t) { return Math.abs(t * h - e * _ + b) <= re; }, ae = e.paths.head; for (; ae != null;) {
            var e_85 = ae.elt, t_95 = q.find(e_85);
            if (t_95.used) {
                ae = ae.next;
                continue;
            }
            t_95.used = !0;
            var n_75 = t_95.vert, r_62 = !0;
            for (; t_95.vert != null && (r_62 || n_75 != t_95.vert);)
                if (r_62 = !1, n_75.x == n_75.next.x && n_75.y == n_75.next.y) {
                    if (n_75 == t_95.vert && (t_95.vert = n_75.next == n_75 ? null : n_75.next, r_62 = !0), n_75 != null && n_75.prev == n_75)
                        n_75.next = n_75.prev = null, n_75 = null;
                    else {
                        var e_86 = n_75.next;
                        n_75.prev.next = n_75.next, n_75.next.prev = n_75.prev, n_75.next = n_75.prev = null, n_75 = e_86;
                    }
                }
                else
                    n_75 = n_75.next;
            var i_45 = t_95.vert == null ? [] : ee(t_95.vert, ie);
            for (var _b = 0, i_40 = i_45; _b < i_40.length; _b++) {
                var e_87 = i_40[_b];
                if (C(e_87) < R.epsilon) {
                    var t_96 = e_87;
                    do {
                        var e_88 = t_96.next;
                        t_96.next = t_96.prev = null, x(t_96), t_96.next = W.zpp_pool, W.zpp_pool = t_96, t_96 = e_88;
                    } while (t_96 != e_87 && t_96 != null);
                    continue;
                }
                var t_97 = s.geom.GeomPoly.get();
                t_97.zpp_inner.vertices = e_87, L.zpp_inner.reverse_flag ? L.push(t_97) : L.unshift(t_97);
            }
            t_95.vert = null, ae = ae.next;
        } for (; e.paths.head != null;) {
            var t_98 = e.paths.pop_unsafe();
            t_98.vert = null, t_98.parent = null, t_98.next = q.zpp_pool, q.zpp_pool = t_98;
        } for (; w != null;)
            if (w != null && w.prev == w) {
                w.next = w.prev = null;
                var e_89 = w;
                e_89.vert = null, e_89.parent = null, e_89.next = q.zpp_pool, q.zpp_pool = e_89, w = null;
            }
            else {
                var e_90 = w.next;
                w.prev.next = w.next, w.next.prev = w.prev, w.next = w.prev = null;
                var t_99 = w;
                t_99.vert = null, t_99.parent = null, t_99.next = q.zpp_pool, q.zpp_pool = t_99, w = e_90;
            } return L; };
        return e;
    }()), lr.ints = null, lr.paths = null, ur = lr, dr = (function () {
        function e() {
            this.node = null, this.di = 0, this.id = 0, this.b = null, this.a = null, this.length = 0, this.pushmod = !1, this.modified = !1, this._inuse = !1, this.next = null;
        }
        e.get = function (t, n) { var r; return e.zpp_pool == null ? r = new e : (r = e.zpp_pool, e.zpp_pool = r.next, r.next = null), r.a = t, r.b = n, t.id < n.id ? (r.id = t.id, r.di = n.id) : (r.id = n.id, r.di = t.id), r; };
        e.edge_swap = function (e, t) { var n = e.node; e.node = t.node, t.node = n; };
        e.edge_lt = function (e, t) { return e.id >= t.id ? e.id == t.id && e.di < t.di : !0; };
        e.prototype.add = function (e) { e._inuse = !0; var t = e; return t.next = this.next, this.next = t, this.modified = !0, this.length++, e; };
        e.prototype.insert = function (e, t) { t._inuse = !0; var n = t; return e == null ? (n.next = this.next, this.next = n) : (n.next = e.next, e.next = n), this.pushmod = this.modified = !0, this.length++, n; };
        e.prototype.pop = function () { var e = this.next; this.next = e.next, e._inuse = !1, this.next == null && (this.pushmod = !0), this.modified = !0, this.length--; };
        e.prototype.pop_unsafe = function () { var e = this.next; return this.pop(), e; };
        e.prototype.remove = function (e) { var t = null, n = this.next; for (; n != null;) {
            if (n == e) {
                var e_91 = void 0, n_76 = void 0;
                t == null ? (e_91 = this.next, n_76 = e_91.next, this.next = n_76, this.next == null && (this.pushmod = !0)) : (e_91 = t.next, n_76 = e_91.next, t.next = n_76, n_76 == null && (this.pushmod = !0)), e_91._inuse = !1, this.modified = !0, this.length--, this.pushmod = !0;
                break;
            }
            t = n, n = n.next;
        } };
        e.prototype.erase = function (e) { var t, n; return e == null ? (t = this.next, n = t.next, this.next = n, this.next == null && (this.pushmod = !0)) : (t = e.next, n = t.next, e.next = n, n == null && (this.pushmod = !0)), t._inuse = !1, this.modified = !0, this.length--, this.pushmod = !0, n; };
        e.prototype.clear = function () { };
        e.prototype.reverse = function () { var e = this.next, t = null; for (; e != null;) {
            var n_77 = e.next;
            e.next = t, this.next = e, t = e, e = n_77;
        } this.modified = !0, this.pushmod = !0; };
        e.prototype.empty = function () { return this.next == null; };
        e.prototype.has = function (e) { var t = !1, n = this.next; for (; n != null;) {
            if (n == e) {
                t = !0;
                break;
            }
            n = n.next;
        } return t; };
        e.prototype.iterator_at = function (e) { var t = this.next; for (; e-- > 0 && t != null;)
            t = t.next; return t; };
        e.prototype.at = function (e) { var t = this.iterator_at(e); return t == null ? null : t; };
        e.prototype.free = function () { this.a = this.b = null, this.node = null; };
        return e;
    }()), dr.zpp_pool = null, fr = dr, pr = (function () {
        function e() {
        }
        e.lt = function (e, t) { return e.y < t.y || e.y == t.y && e.x < t.x; };
        e.delaunay = function (e, t, n, r) { var i = n.x - t.x, a = n.y - t.y, o = t.x - e.x, s = t.y - e.y, c, l, u; return s * i - o * a >= 0 ? u = !0 : (i = r.x - n.x, a = r.y - n.y, o = n.x - t.x, s = n.y - t.y, u = s * i - o * a >= 0), u ? l = !0 : (i = e.x - r.x, a = e.y - r.y, o = r.x - n.x, s = r.y - n.y, l = s * i - o * a >= 0), l ? c = !0 : (i = t.x - e.x, a = t.y - e.y, o = e.x - r.x, s = e.y - r.y, c = s * i - o * a >= 0), c ? !0 : t.x * (n.y * r.mag - n.mag * r.y) - n.x * (t.y * r.mag - t.mag * r.y) + r.x * (t.y * n.mag - t.mag * n.y) - (e.x * (n.y * r.mag - n.mag * r.y) - n.x * (e.y * r.mag - e.mag * r.y) + r.x * (e.y * n.mag - e.mag * n.y)) + (e.x * (t.y * r.mag - t.mag * r.y) - t.x * (e.y * r.mag - e.mag * r.y) + r.x * (e.y * t.mag - e.mag * t.y)) - (e.x * (t.y * n.mag - t.mag * n.y) - t.x * (e.y * n.mag - e.mag * n.y) + n.x * (e.y * t.mag - e.mag * t.y)) > 0; };
        e.optimise = function (t) { var n = t.vertices, r = t.vertices; if (n != null) {
            var e_92 = n;
            for (;;) {
                var t_100 = e_92;
                if (t_100.sort(), t_100.mag = t_100.x * t_100.x + t_100.y * t_100.y, e_92 = e_92.next, e_92 == r)
                    break;
            }
        } e.edgeSet == null && (Jt.zpp_pool == null ? e.edgeSet = new Jt : (e.edgeSet = Jt.zpp_pool, Jt.zpp_pool = e.edgeSet.next, e.edgeSet.next = null), e.edgeSet.lt = fr.edge_lt, e.edgeSet.swapped = fr.edge_swap); var i; fr.zpp_pool == null ? i = new fr : (i = fr.zpp_pool, fr.zpp_pool = i.next, i.next = null); var a = t.vertices, o = t.vertices; if (a != null) {
            var t_101 = a;
            for (;;) {
                var n_78 = t_101, r_63 = n_78.next;
                n_78.diagonals.reverse();
                var a_44 = n_78.diagonals.head;
                for (; a_44 != null;) {
                    var t_102 = a_44.elt;
                    if (t_102.id < n_78.id) {
                        r_63 = t_102, a_44 = a_44.next;
                        continue;
                    }
                    var o_32 = a_44.next == null ? n_78.prev : a_44.next.elt;
                    if (!e.delaunay(n_78, r_63, t_102, o_32)) {
                        var r_64 = void 0;
                        fr.zpp_pool == null ? r_64 = new fr : (r_64 = fr.zpp_pool, fr.zpp_pool = r_64.next, r_64.next = null), r_64.a = n_78, r_64.b = t_102, n_78.id < t_102.id ? (r_64.id = n_78.id, r_64.di = t_102.id) : (r_64.id = t_102.id, r_64.di = n_78.id);
                        var a_45 = r_64;
                        i.add(a_45), a_45.node = e.edgeSet.insert(a_45);
                    }
                    r_63 = t_102, a_44 = a_44.next;
                }
                if (t_101 = t_101.next, t_101 == o)
                    break;
            }
        } for (; i.next != null;) {
            var t_103 = i.pop_unsafe(), n_79 = t_103.a, r_65 = t_103.b, a_46 = n_79.next, o_33 = null, s_28 = n_79.diagonals.head;
            for (; s_28 != null;) {
                var e_93 = s_28.elt;
                if (e_93 == r_65) {
                    s_28 = s_28.next, o_33 = s_28 == null ? n_79.prev : s_28.elt;
                    break;
                }
                a_46 = e_93, s_28 = s_28.next;
            }
            if (n_79.diagonals.remove(r_65), r_65.diagonals.remove(n_79), r_65 == a_46.next)
                a_46.diagonals.add(o_33);
            else {
                var e_94 = a_46.diagonals.head;
                for (; e_94 != null;) {
                    if (e_94.elt == r_65) {
                        a_46.diagonals.insert(e_94, o_33);
                        break;
                    }
                    e_94 = e_94.next;
                }
            }
            if (n_79 == o_33.next)
                o_33.diagonals.add(a_46);
            else {
                var e_95 = o_33.diagonals.head;
                for (; e_95 != null;) {
                    if (e_95.elt == n_79) {
                        o_33.diagonals.insert(e_95, a_46);
                        break;
                    }
                    e_95 = e_95.next;
                }
            }
            e.edgeSet.remove_node(t_103.node);
            var c_19 = t_103;
            c_19.a = c_19.b = null, c_19.node = null, c_19.next = fr.zpp_pool, fr.zpp_pool = c_19;
        } var s = i; s.a = s.b = null, s.node = null, s.next = fr.zpp_pool, fr.zpp_pool = s; };
        e.triangulate = function (t) { var n = t.vertices, r = t.vertices, i = t.vertices.next, a = t.vertices; if (i != null) {
            var e_96 = i;
            for (;;) {
                var t_104 = e_96;
                if ((t_104.y < n.y || t_104.y == n.y && t_104.x < n.x) && (n = t_104), (r.y < t_104.y || r.y == t_104.y && r.x < t_104.x) && (r = t_104), e_96 = e_96.next, e_96 == a)
                    break;
            }
        } e.queue == null && (e.queue = new Tt); var o = r.prev, s = r.next; for (e.queue.add(r); o != n || s != n;)
            o == n || s != n && (o.y < s.y || o.y == s.y && o.x < s.x) ? (e.queue.add(s), s.rightchain = !1, s = s.next) : (e.queue.add(o), o.rightchain = !0, o = o.prev); e.queue.add(n), e.stack == null && (e.stack = new Tt), e.stack.add(e.queue.pop_unsafe()); var c = e.queue.pop_unsafe(); for (e.stack.add(c);;) {
            var n_80 = e.queue.pop_unsafe();
            if (e.queue.head == null)
                break;
            if (n_80.rightchain != e.stack.head.elt.rightchain) {
                for (;;) {
                    var r_66 = e.stack.pop_unsafe();
                    if (e.stack.head == null)
                        break;
                    t.add_diagonal(r_66, n_80);
                }
                e.stack.add(c);
            }
            else {
                var r_67 = e.stack.pop_unsafe();
                for (; e.stack.head != null;) {
                    var i_46 = e.stack.head.elt, a_47 = n_80.x - r_67.x, o_34 = n_80.y - r_67.y, s_29 = r_67.x - i_46.x, c_20 = r_67.y - i_46.y, l_14 = c_20 * a_47 - s_29 * o_34;
                    if (l_14 * l_14 <= R.epsilon * R.epsilon * (a_47 * a_47 + o_34 * o_34) * (s_29 * s_29 + c_20 * c_20) || n_80.rightchain && l_14 >= 0 || !n_80.rightchain && l_14 <= 0)
                        break;
                    t.add_diagonal(i_46, n_80), r_67 = i_46, e.stack.pop();
                }
                e.stack.add(r_67);
            }
            e.stack.add(n_80), c = n_80;
        } if (e.stack.head != null)
            for (e.stack.pop(); e.stack.head != null;) {
                var n_81 = e.stack.pop_unsafe();
                if (e.stack.head == null)
                    break;
                t.add_diagonal(r, n_81);
            } return t; };
        return e;
    }()), pr.queue = null, pr.stack = null, pr.edgeSet = null, mr = pr, hr = (function () {
        function e() {
        }
        e.isinner = function (e, t, n) { var r = e.x - t.x, i = e.y - t.y, a = n.x - t.x; return (n.y - t.y) * r - a * i >= 0; };
        e.optimise = function (t) { var n = t.vertices, r = t.vertices; if (n != null) {
            var e_97 = n;
            for (; e_97.sort(), e_97 = e_97.next, e_97 != r;)
                ;
        } var i = t.vertices, a = t.vertices; if (i != null) {
            var t_105 = i;
            for (;;) {
                var n_82 = t_105, r_68 = n_82.prev, i_47 = null, o_35 = n_82.diagonals.head;
                for (; o_35 != null;) {
                    var t_106 = o_35.elt, a_48 = o_35.next == null ? n_82.next : o_35.next.elt;
                    if (!e.isinner(a_48, n_82, r_68)) {
                        i_47 = o_35, r_68 = t_106, o_35 = o_35.next;
                        continue;
                    }
                    var s_30 = !0, c_21 = t_106, l_15 = c_21.prev, u_13 = null, d_8 = c_21.diagonals.head;
                    for (; d_8 != null;) {
                        var t_107 = d_8.elt;
                        if (t_107 == n_82) {
                            var t_108 = d_8.next == null ? c_21.next : d_8.next.elt;
                            s_30 = e.isinner(t_108, c_21, l_15);
                            break;
                        }
                        l_15 = t_107, u_13 = d_8, d_8 = d_8.next;
                    }
                    s_30 ? (o_35 = n_82.diagonals.erase(i_47), c_21.diagonals.erase(u_13)) : (r_68 = t_106, i_47 = o_35, o_35 = o_35.next);
                }
                if (t_105 = t_105.next, t_105 == a)
                    break;
            }
        } };
        return e;
    }()), gr = (function () {
        function e(t) {
            this.zpp_pool = null, this.zpp_disp = !1, this.zpp_inner = new Nn(this), t != null && (e._addVertices(this, t), this.skipForward(1), e._disposeWeakInputs(t));
        }
        e.prototype._checkDisposed = function () { if (this.zpp_disp)
            throw Error("GeomPoly has been disposed and cannot be used!"); };
        e._createVert = function (e, t) { var n; return W.zpp_pool == null ? n = new W : (n = W.zpp_pool, W.zpp_pool = n.next, n.next = null), n.forced = !1, n.x = e, n.y = t, n; };
        e._pushVert = function (e, t) { e.zpp_inner.vertices == null ? e.zpp_inner.vertices = t.prev = t.next = t : (t.prev = e.zpp_inner.vertices, t.next = e.zpp_inner.vertices.next, e.zpp_inner.vertices.next.prev = t, e.zpp_inner.vertices.next = t), e.zpp_inner.vertices = t; };
        e._unshiftVert = function (e, t) { e.zpp_inner.vertices == null ? e.zpp_inner.vertices = t.prev = t.next = t : (t.next = e.zpp_inner.vertices, t.prev = e.zpp_inner.vertices.prev, e.zpp_inner.vertices.prev.next = t, e.zpp_inner.vertices.prev = t), e.zpp_inner.vertices = t; };
        e._freeVert = function (e) { e.free(), e.next = W.zpp_pool, W.zpp_pool = e; };
        e.prototype._popHead = function () { var e = this.zpp_inner.vertices; if (e.prev === e)
            e.next = e.prev = null, this.zpp_inner.vertices = null;
        else {
            var t_109 = e.prev;
            e.prev.next = e.next, e.next.prev = e.prev, e.next = e.prev = null, this.zpp_inner.vertices = t_109;
        } return e; };
        e.prototype._shiftHead = function () { var e = this.zpp_inner.vertices; if (e.prev === e)
            e.next = e.prev = null, this.zpp_inner.vertices = null;
        else {
            var t_110 = e.next;
            e.prev.next = e.next, e.next.prev = e.prev, e.next = e.prev = null, this.zpp_inner.vertices = t_110;
        } return e; };
        e.prototype._isDegenRing = function () { var e = this.zpp_inner.vertices; return e == null || e.next == null || e.prev === e.next; };
        e.prototype._forEachVert = function (e) { var t = this.zpp_inner.vertices; if (t != null) {
            var n_83 = t;
            do
                e(n_83), n_83 = n_83.next;
            while (n_83 !== t);
        } };
        e.prototype._extremalVert = function (e, t) { if (this._checkDisposed(), this.zpp_inner.vertices == null)
            throw Error("empty GeomPoly has no defineable " + (t ? e === "y" ? "topmost" : "leftmost" : e === "y" ? "bottommost" : "rightmost") + " vertex"); var n = this.zpp_inner.vertices, r = n.next; for (; r !== this.zpp_inner.vertices;)
            (t ? r[e] < n[e] : r[e] > n[e]) && (n = r), r = r.next; return n.wrapper(); };
        e._addVertices = function (t, n) { var r = d(); if (n instanceof Array)
            for (var r_69 = 0; r_69 < n.length; r_69++) {
                var i_48 = n[r_69];
                if (i_48 == null)
                    throw Error("Array<Vec2> contains null objects");
                if (!(i_48 instanceof Sn))
                    throw Error("Array<Vec2> contains non Vec2 objects");
                var a_49 = i_48;
                if (a_49.zpp_disp)
                    throw Error("Vec2 has been disposed and cannot be used!");
                a_49.zpp_inner.validate();
                var o_36 = a_49.zpp_inner.x;
                a_49.zpp_inner.validate();
                var s_31 = a_49.zpp_inner.y, c_22 = e._createVert(o_36, s_31);
                e._pushVert(t, c_22);
            }
        else if (n instanceof r.geom.Vec2List) {
            var r_70 = n.iterator();
            for (; r_70.hasNext();) {
                var n_84 = r_70.next();
                if (n_84 == null)
                    throw Error("Vec2List contains null objects");
                if (n_84.zpp_disp)
                    throw Error("Vec2 has been disposed and cannot be used!");
                n_84.zpp_inner.validate();
                var i_49 = n_84.zpp_inner.x;
                n_84.zpp_inner.validate();
                var a_50 = n_84.zpp_inner.y, o_37 = e._createVert(i_49, a_50);
                e._pushVert(t, o_37);
            }
        }
        else if (n instanceof e) {
            if (n.zpp_disp)
                throw Error("GeomPoly has been disposed and cannot be used!");
            var r_71 = n.zpp_inner.vertices;
            if (r_71 != null) {
                var n_85 = r_71;
                do {
                    var r_72 = e._createVert(n_85.x, n_85.y);
                    e._pushVert(t, r_72), n_85 = n_85.next;
                } while (n_85 !== r_71);
            }
        }
        else
            throw Error("Error: Invalid type for polygon object, should be Array<Vec2>, Vec2List or GeomPoly"); };
        e._disposeWeakInputs = function (e) { if (e instanceof Array) {
            var t_111 = 0;
            for (; t_111 < e.length;) {
                var n_86 = e[t_111];
                n_86.zpp_inner && n_86.zpp_inner.weak ? (n_86.dispose(), e.splice(t_111, 1)) : t_111++;
            }
        }
        else if (e instanceof d().geom.Vec2List) {
            var t_112 = e;
            t_112.zpp_inner._validate != null && t_112.zpp_inner._validate();
            var n_87 = t_112.zpp_inner.inner, r_73 = null, i_50 = n_87.head;
            for (; i_50 != null;) {
                var e_98 = i_50.elt;
                e_98.outer && e_98.outer.zpp_inner && e_98.outer.zpp_inner.weak ? (i_50 = n_87.erase(r_73), e_98.outer.zpp_inner.weak && e_98.outer.dispose()) : (r_73 = i_50, i_50 = i_50.next);
            }
        } };
        e.get = function (t) { var n; return H.poolGeomPoly == null ? n = new e : (n = H.poolGeomPoly, H.poolGeomPoly = n.zpp_pool, n.zpp_pool = null, n.zpp_disp = !1, n === H.nextGeomPoly && (H.nextGeomPoly = null)), t != null && (e._addVertices(n, t), n.skipForward(1), e._disposeWeakInputs(t)), n; };
        e.prototype.empty = function () { return this._checkDisposed(), this.zpp_inner.vertices == null; };
        e.prototype.size = function () { this._checkDisposed(); var e = 0; return this._forEachVert(function () { return e++; }), e; };
        e.prototype.iterator = function () { return this._checkDisposed(), nn.get(this.zpp_inner.vertices, !0); };
        e.prototype.forwardIterator = function () { return this._checkDisposed(), nn.get(this.zpp_inner.vertices, !0); };
        e.prototype.backwardsIterator = function () { return this._checkDisposed(), nn.get(this.zpp_inner.vertices, !1); };
        e.prototype.current = function () { if (this._checkDisposed(), this.zpp_inner.vertices == null)
            throw Error("GeomPoly is empty"); return this.zpp_inner.vertices.wrapper(); };
        e.prototype.push = function (t) { if (this._checkDisposed(), t != null && t.zpp_disp)
            throw Error("Vec2 has been disposed and cannot be used!"); if (t == null)
            throw Error("Cannot push null vertex"); t.zpp_inner.validate(); var n = t.zpp_inner.x; t.zpp_inner.validate(); var r = t.zpp_inner.y, i = e._createVert(n, r); return e._pushVert(this, i), t.zpp_inner.weak && t.dispose(), this; };
        e.prototype.pop = function () { if (this._checkDisposed(), this.zpp_inner.vertices == null)
            throw Error("Cannot pop from empty polygon"); var t = this._popHead(); return e._freeVert(t), this; };
        e.prototype.unshift = function (t) { if (this._checkDisposed(), t != null && t.zpp_disp)
            throw Error("Vec2 has been disposed and cannot be used!"); if (t == null)
            throw Error("Cannot unshift null vertex"); t.zpp_inner.validate(); var n = t.zpp_inner.x; t.zpp_inner.validate(); var r = t.zpp_inner.y, i = e._createVert(n, r); return e._unshiftVert(this, i), t.zpp_inner.weak && t.dispose(), this; };
        e.prototype.shift = function () { if (this._checkDisposed(), this.zpp_inner.vertices == null)
            throw Error("Cannot shift from empty polygon"); var t = this._shiftHead(); return e._freeVert(t), this; };
        e.prototype.skipForward = function (e) { if (this._checkDisposed(), this.zpp_inner.vertices != null) {
            if (e > 0)
                for (; e-- > 0;)
                    this.zpp_inner.vertices = this.zpp_inner.vertices.next;
            else if (e < 0)
                for (; e++ < 0;)
                    this.zpp_inner.vertices = this.zpp_inner.vertices.prev;
        } return this; };
        e.prototype.skipBackwards = function (e) { return this._checkDisposed(), this.skipForward(-e); };
        e.prototype.erase = function (t) { for (this._checkDisposed(); t !== 0 && this.zpp_inner.vertices != null;) {
            var n_88 = void 0;
            t > 0 ? (n_88 = this._shiftHead(), --t) : (n_88 = this._popHead(), ++t), e._freeVert(n_88);
        } return this; };
        e.prototype.clear = function () { for (this._checkDisposed(); this.zpp_inner.vertices != null;) {
            var t_113 = this._shiftHead();
            e._freeVert(t_113);
        } return this; };
        e.prototype.copy = function () { this._checkDisposed(); var t = e.get(); return this._forEachVert(function (n) { var r = e._createVert(n.x, n.y); e._pushVert(t, r); }), t.skipForward(1); };
        e.prototype.dispose = function () { if (this.zpp_disp)
            throw Error("GeomPoly has been disposed and cannot be used!"); this.clear(), this.zpp_pool = null, H.nextGeomPoly == null ? H.poolGeomPoly = this : H.nextGeomPoly.zpp_pool = this, H.nextGeomPoly = this, this.zpp_disp = !0; };
        e.prototype.area = function () { if (this._checkDisposed(), this._isDegenRing())
            return 0; var e = 0; this._forEachVert(function (t) { e += t.x * (t.next.y - t.prev.y); }); var t = e * .5; return t < 0 ? -t : t; };
        e.prototype.winding = function () { if (this._checkDisposed(), this._isDegenRing())
            return U.Winding_UNDEFINED == null && (U.internal = !0, U.Winding_UNDEFINED = new (d()).geom.Winding, U.internal = !1), U.Winding_UNDEFINED; var e = 0; this._forEachVert(function (t) { e += t.x * (t.next.y - t.prev.y); }); var t = e * .5; return t > 0 ? (U.Winding_CLOCKWISE == null && (U.internal = !0, U.Winding_CLOCKWISE = new (d()).geom.Winding, U.internal = !1), U.Winding_CLOCKWISE) : t === 0 ? (U.Winding_UNDEFINED == null && (U.internal = !0, U.Winding_UNDEFINED = new (d()).geom.Winding, U.internal = !1), U.Winding_UNDEFINED) : (U.Winding_ANTICLOCKWISE == null && (U.internal = !0, U.Winding_ANTICLOCKWISE = new (d()).geom.Winding, U.internal = !1), U.Winding_ANTICLOCKWISE); };
        e.prototype.contains = function (e) { if (this._checkDisposed(), e != null && e.zpp_disp)
            throw Error("Vec2 has been disposed and cannot be used!"); if (e == null)
            throw Error("GeomPoly::contains point cannot be null"); e.zpp_inner.validate(); var t = e.zpp_inner.x; e.zpp_inner.validate(); var n = e.zpp_inner.y, r = !1; return this._forEachVert(function (e) { var i = e.prev; (e.y < n && i.y >= n || i.y < n && e.y >= n) && (e.x <= t || i.x <= t) && e.x + (n - e.y) / (i.y - e.y) * (i.x - e.x) < t && (r = !r); }), e.zpp_inner.weak && e.dispose(), r; };
        e.prototype.isClockwise = function () { var e = this.winding(); return U.Winding_CLOCKWISE == null && (U.internal = !0, U.Winding_CLOCKWISE = new (d()).geom.Winding, U.internal = !1), e === U.Winding_CLOCKWISE; };
        e.prototype.isConvex = function () { if (this._checkDisposed(), this._isDegenRing())
            return !0; var e = !1, t = !1, n = !0, r = this.zpp_inner.vertices, i = r; do {
            var r_74 = i, a_51 = r_74.prev, o_38 = r_74.next, s_32 = o_38.x - r_74.x, c_23 = o_38.y - r_74.y, l_16 = r_74.x - a_51.x, u_14 = (r_74.y - a_51.y) * s_32 - l_16 * c_23;
            if (u_14 > 0 ? t = !0 : u_14 < 0 && (e = !0), t && e) {
                n = !1;
                break;
            }
            i = i.next;
        } while (i !== r); return n; };
        e.prototype.isSimple = function () { return this._checkDisposed(), this._isDegenRing() ? !0 : Yn.isSimple(this.zpp_inner.vertices); };
        e.prototype.isMonotone = function () { return this._checkDisposed(), this._isDegenRing() ? !0 : $n.isMonotone(this.zpp_inner.vertices); };
        e.prototype.isDegenerate = function () { return this._checkDisposed(), this._isDegenRing() ? !0 : this.area() < R.epsilon; };
        e.prototype.simplify = function (t) { if (this._checkDisposed(), t <= 0)
            throw Error("Epsilon should be > 0 for simplifying a GeomPoly"); if (this._isDegenRing())
            return this.copy(); var n = ar.simplify(this.zpp_inner.vertices, t), r = e.get(); return r.zpp_inner.vertices = n, r; };
        e.prototype.simpleDecomposition = function (t) { if (this._checkDisposed(), this._isDegenRing())
            throw Error("Cannot decompose a degenerate polygon"); var n = d(), r = this.zpp_inner.vertices; K.sharedGVList == null && (K.sharedGVList = new Ot); var i = Yn.decompose(r, K.sharedGVList), a = t == null ? new n.geom.GeomPolyList : t; for (; i.head != null;) {
            var t_114 = i.pop_unsafe(), n_89 = e.get();
            n_89.zpp_inner.vertices = t_114, a.zpp_inner.reverse_flag ? a.push(n_89) : a.unshift(n_89);
        } return a; };
        e.prototype.monotoneDecomposition = function (t) { if (this._checkDisposed(), this._isDegenRing())
            throw Error("Cannot decompose a degenerate polygon"); var n = d(), r = this.zpp_inner.vertices; $n.sharedPPoly == null && ($n.sharedPPoly = new K); var i = $n.decompose(r, $n.sharedPPoly); K.sharedGVList == null && (K.sharedGVList = new Ot); var a = i.extract(K.sharedGVList), o = t == null ? new n.geom.GeomPolyList : t; for (; a.head != null;) {
            var t_115 = a.pop_unsafe(), n_90 = e.get();
            n_90.zpp_inner.vertices = t_115, o.zpp_inner.reverse_flag ? o.push(n_90) : o.unshift(n_90);
        } return o; };
        e.prototype.convexDecomposition = function (t, n) {
            if (t === void 0) { t = !1; }
            if (this._checkDisposed(), this._isDegenRing())
                throw Error("Cannot decompose a degenerate polygon");
            var r = d(), i = this.zpp_inner.vertices;
            $n.sharedPPoly == null && ($n.sharedPPoly = new K);
            var a = $n.decompose(i, $n.sharedPPoly);
            K.sharedPPList == null && (K.sharedPPList = new Dt);
            var o = a.extract_partitions(K.sharedPPList), s = n == null ? new r.geom.GeomPolyList : n;
            for (; o.head != null;) {
                var n_91 = o.pop_unsafe();
                mr.triangulate(n_91), t && mr.optimise(n_91), hr.optimise(n_91), K.sharedGVList == null && (K.sharedGVList = new Ot);
                var r_75 = n_91.extract(K.sharedGVList), i_51 = n_91;
                for (i_51.next = K.zpp_pool, K.zpp_pool = i_51; r_75.head != null;) {
                    var t_116 = r_75.pop_unsafe(), n_92 = e.get();
                    n_92.zpp_inner.vertices = t_116, s.zpp_inner.reverse_flag ? s.push(n_92) : s.unshift(n_92);
                }
            }
            return s;
        };
        e.prototype.triangularDecomposition = function (t, n) {
            if (t === void 0) { t = !1; }
            if (this._checkDisposed(), this._isDegenRing())
                throw Error("Cannot decompose a degenerate polygon");
            var r = d(), i = this.zpp_inner.vertices;
            $n.sharedPPoly == null && ($n.sharedPPoly = new K);
            var a = $n.decompose(i, $n.sharedPPoly);
            K.sharedPPList == null && (K.sharedPPList = new Dt);
            var o = a.extract_partitions(K.sharedPPList), s = n == null ? new r.geom.GeomPolyList : n;
            for (; o.head != null;) {
                var n_93 = o.pop_unsafe();
                mr.triangulate(n_93), t && mr.optimise(n_93), K.sharedGVList == null && (K.sharedGVList = new Ot);
                var r_76 = n_93.extract(K.sharedGVList), i_52 = n_93;
                for (i_52.next = K.zpp_pool, K.zpp_pool = i_52; r_76.head != null;) {
                    var t_117 = r_76.pop_unsafe(), n_94 = e.get();
                    n_94.zpp_inner.vertices = t_117, s.zpp_inner.reverse_flag ? s.push(n_94) : s.unshift(n_94);
                }
            }
            return s;
        };
        e.prototype.inflate = function (t) { this._checkDisposed(); var n = e.get(); return this.isClockwise() && (t = -t), this._forEachVert(function (e) { var r = e.prev, i = e.next, a = e.x - r.x, o = e.y - r.y, s = i.x - e.x, c = i.y - e.y, l = Math.sqrt(a * a + o * o), u = -o / l * t, d = a / l * t, f = Math.sqrt(s * s + c * c), p = -c / f * t, m = s / f * t, h = p - u, g = m - d, _ = c * h - s * g, v = _ === 0 ? 0 : _ / (c * a - s * o), y = e.x + u + a * v, b = e.y + d + o * v, x = Sn.get(y, b); n.push(x); }), n.skipForward(1); };
        e.prototype.cut = function (e, t, n, r, i) {
            if (n === void 0) { n = !1; }
            if (r === void 0) { r = !1; }
            if (this._checkDisposed(), !(this._isDegenRing() || Yn.isSimple(this.zpp_inner.vertices)))
                throw Error("Cut requires a truly simple polygon");
            if (e == null || t == null)
                throw Error("Cannot cut with null start/end's");
            if (e.zpp_disp || t.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!");
            var a;
            if (e.x == t.x && e.y == t.y) {
                a = i == null ? new (d()).geom.GeomPolyList : i;
                var e_99 = this.copy();
                a.zpp_inner.reverse_flag ? a.push(e_99) : a.unshift(e_99);
            }
            else
                a = ur.run(this.zpp_inner.vertices, e, t, n, r, i);
            return e.zpp_inner.weak && e.dispose(), t.zpp_inner.weak && t.dispose(), a;
        };
        e.prototype.transform = function (e) { if (this._checkDisposed(), e == null)
            throw Error("Cannot transform by null matrix"); return this._forEachVert(function (t) { var n = e.zpp_inner.a * t.x + e.zpp_inner.b * t.y + e.zpp_inner.tx; t.y = e.zpp_inner.c * t.x + e.zpp_inner.d * t.y + e.zpp_inner.ty, t.x = n; }), this; };
        e.prototype.bounds = function () { if (this._checkDisposed(), this.zpp_inner.vertices == null)
            throw Error("empty GeomPoly has no defineable bounds"); var e = 1e100, t = 1e100, n = -1e100, r = -1e100; return this._forEachVert(function (i) { i.x < e && (e = i.x), i.y < t && (t = i.y), i.x > n && (n = i.x), i.y > r && (r = i.y); }), new jn(e, t, n - e, r - t); };
        e.prototype.top = function () { return this._extremalVert("y", !0); };
        e.prototype.bottom = function () { return this._extremalVert("y", !1); };
        e.prototype.left = function () { return this._extremalVert("x", !0); };
        e.prototype.right = function () { return this._extremalVert("x", !1); };
        e.prototype.toString = function () { var e = "GeomPoly[", t = this.zpp_inner.vertices; if (t != null) {
            var n_95 = t;
            do
                n_95 !== t && (e += ","), e += "{" + n_95.x + "," + n_95.y + "}", n_95 = n_95.next;
            while (n_95 !== t);
        } return e + "]"; };
        return e;
    }()), br = (function () {
        function e() {
            this.zpp_inner_i = null;
        }
        e._wrap = function (t) { return t ? t instanceof e ? t : t.isBody && t.isBody() && _r ? _r(t) : t.isShape && t.isShape() && vr ? vr(t) : t.isCompound && t.isCompound() && yr ? yr(t) : v(t, function (t) { var n; var r = Object.create(e.prototype); return r.zpp_inner_i = (n = t.zpp_inner_i) == null ? t : n, r; }) : null; };
        Object.defineProperty(e.prototype, "id", {
            get: function () { return this.zpp_inner_i.id; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "userData", {
            get: function () { return this.zpp_inner_i.userData == null && (this.zpp_inner_i.userData = {}), this.zpp_inner_i.userData; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "group", {
            get: function () { return this.zpp_inner_i.group == null ? null : this.zpp_inner_i.group.outer; },
            set: function (e) { this.zpp_inner_i.immutable_midstep("Interactor::group"), this.zpp_inner_i.setGroup(e == null ? null : e.zpp_inner); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "cbTypes", {
            get: function () { return this.zpp_inner_i.wrap_cbTypes == null && this.zpp_inner_i.setupcbTypes(), this.zpp_inner_i.wrap_cbTypes; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "castBody", {
            get: function () { if (this.zpp_inner_i.ibody != null) {
                var e_100 = this.zpp_inner_i.ibody.outer;
                return _r ? _r(e_100) : e_100;
            } return null; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "castShape", {
            get: function () { if (this.zpp_inner_i.ishape != null) {
                var e_101 = this.zpp_inner_i.ishape.outer;
                return vr ? vr(e_101) : e_101;
            } return null; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "castCompound", {
            get: function () { if (this.zpp_inner_i.icompound != null) {
                var e_102 = this.zpp_inner_i.icompound.outer;
                return yr ? yr(e_102) : e_102;
            } return null; },
            enumerable: false,
            configurable: true
        });
        e.prototype.isShape = function () { return this.zpp_inner_i.ishape != null; };
        e.prototype.isBody = function () { return this.zpp_inner_i.ibody != null; };
        e.prototype.isCompound = function () { return this.zpp_inner_i.icompound != null; };
        e.prototype.toString = function () { return ""; };
        return e;
    }()), br.zpp_internalAlloc = !1, xr = br, Sr = { SHAPES: 1, JOINTS: 2, CONTACTS: 4, AABB: 8, CENTER_OF_MASS: 16, VELOCITIES: 32, ALL: 63 }, Cr = (function () {
        function e() {
            if (!U.internal)
                throw Error("Cannot instantiate BodyType derp!");
        }
        Object.defineProperty(e, "STATIC", {
            get: function () { return U.BodyType_STATIC == null && (U.internal = !0, U.BodyType_STATIC = new e, U.internal = !1), U.BodyType_STATIC; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e, "DYNAMIC", {
            get: function () { return U.BodyType_DYNAMIC == null && (U.internal = !0, U.BodyType_DYNAMIC = new e, U.internal = !1), U.BodyType_DYNAMIC; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e, "KINEMATIC", {
            get: function () { return U.BodyType_KINEMATIC == null && (U.internal = !0, U.BodyType_KINEMATIC = new e, U.internal = !1), U.BodyType_KINEMATIC; },
            enumerable: false,
            configurable: true
        });
        e.prototype.toString = function () { return this === U.BodyType_STATIC ? "STATIC" : this === U.BodyType_DYNAMIC ? "DYNAMIC" : this === U.BodyType_KINEMATIC ? "KINEMATIC" : ""; };
        return e;
    }()), wr = (function () {
        function e() {
            this.a = null, this.b = null, this.next = null, this.zip_listeners = !1, this.listeners = null, this.listeners = new _t;
        }
        e.get = function (t, n) { var r; return e.zpp_pool == null ? r = new e : (r = e.zpp_pool, e.zpp_pool = r.next, r.next = null), r.zip_listeners = !0, J.setlt(t, n) ? (r.a = t, r.b = n) : (r.a = n, r.b = t), r; };
        e.setlt = function (e, t) { return J.setlt(e.a, t.a) ? !0 : e.a == t.a && J.setlt(e.b, t.b); };
        e.prototype.free = function () { this.a = this.b = null, this.listeners.clear(); };
        e.prototype.compatible = function (e) { var t = this.a.cbTypes, n = this.b.cbTypes; return e.options1.compatible(t) && e.options2.compatible(n) || e.options2.compatible(t) && e.options1.compatible(n); };
        e.prototype.invalidate = function () { this.zip_listeners = !0; };
        e.prototype.validate = function () { this.zip_listeners && (this.zip_listeners = !1, this.__validate()); };
        e.prototype.__validate = function () { this.listeners.clear(); var e = this.a.listeners.head, t = this.b.listeners.head; for (; e != null && t != null;) {
            var n_96 = e.elt, r_77 = t.elt;
            n_96 == r_77 ? (this.compatible(n_96) && this.listeners.add(n_96), e = e.next, t = t.next) : n_96.precedence > r_77.precedence || n_96.precedence == r_77.precedence && n_96.id > r_77.id ? e = e.next : t = t.next;
        } };
        e.prototype.empty_intersection = function () { return this.listeners.head == null; };
        e.prototype.single_intersection = function (e) { var t = this.listeners.head; return t != null && t.elt == e && t.next == null; };
        return e;
    }()), wr.zpp_pool = null, Tr = wr, Er = (function () {
        function e() {
            this.count = 0, this.next = null, this.id = 0, this.manager = null, this.cbpairs = null, this.zip_listeners = !1, this.zip_bodylisteners = !1, this.zip_conlisteners = !1, this.interactors = null, this.wrap_interactors = null, this.constraints = null, this.wrap_constraints = null;
            var t = e._zpp;
            this.cbTypes = new ut, this.listeners = new _t, this.zip_listeners = !0, this.bodylisteners = new bt, this.zip_bodylisteners = !0, this.conlisteners = new St, this.zip_conlisteners = !0, this.constraints = new mt, this.interactors = new yt, this.id = t.ZPP_ID.CbSet(), this.cbpairs = new xt;
        }
        e.setlt = function (e, t) { var n = e.cbTypes.head, r = t.cbTypes.head; for (; n != null && r != null;) {
            var e_103 = n.elt, t_118 = r.elt;
            if (e_103.id < t_118.id)
                return !0;
            if (t_118.id < e_103.id)
                return !1;
            n = n.next, r = r.next;
        } return r != null && n == null; };
        e.get = function (t) { var n; e.zpp_pool == null ? n = new e : (n = e.zpp_pool, e.zpp_pool = n.next, n.next = null); var r = null, i = t.head; for (; i != null;) {
            var e_104 = i.elt;
            r = n.cbTypes.insert(r, e_104), e_104.cbsets.add(n), i = i.next;
        } return n; };
        e.findOrCreatePair = function (t, n) { var r = null, i = (t.cbpairs.length < n.cbpairs.length ? t.cbpairs : n.cbpairs).head; for (; i != null;) {
            var e_105 = i.elt;
            if (e_105.a == t && e_105.b == n || e_105.a == n && e_105.b == t) {
                r = e_105;
                break;
            }
            i = i.next;
        } if (r == null) {
            var i_53;
            Tr.zpp_pool == null ? i_53 = new Tr : (i_53 = Tr.zpp_pool, Tr.zpp_pool = i_53.next, i_53.next = null), i_53.zip_listeners = !0, e.setlt(t, n) ? (i_53.a = t, i_53.b = n) : (i_53.a = n, i_53.b = t), r = i_53, t.cbpairs.add(r), n != t && n.cbpairs.add(r);
        } return r.zip_listeners && (r.zip_listeners = !1, r.__validate()), r; };
        e.empty_intersection = function (t, n) { return e.findOrCreatePair(t, n).listeners.head == null; };
        e.single_intersection = function (t, n, r) { var i = e.findOrCreatePair(t, n).listeners.head; return i != null && i.elt == r && i.next == null; };
        e.prototype.invalidate_pairs = function () { var e = this.cbpairs.head; for (; e != null;) {
            var t_119 = e.elt;
            t_119.zip_listeners = !0, e = e.next;
        } };
        e.prototype.invalidate_listeners = function () { this.zip_listeners = !0, this.invalidate_pairs(); };
        e.prototype.validate_listeners = function () { this.zip_listeners && (this.zip_listeners = !1, this.realvalidate_listeners()); };
        e.prototype.realvalidate_listeners = function () { this.listeners.clear(); var e = this.cbTypes.head; for (; e != null;) {
            var t_120 = e.elt, n_97 = null, r_78 = this.listeners.head, i_54 = t_120.listeners.head;
            for (; i_54 != null;) {
                var e_106 = i_54.elt;
                if (r_78 != null && r_78.elt == e_106)
                    i_54 = i_54.next, n_97 = r_78, r_78 = r_78.next;
                else {
                    var t_121 = void 0;
                    if (r_78 != null) {
                        var n_98 = r_78.elt;
                        t_121 = e_106.precedence > n_98.precedence || e_106.precedence == n_98.precedence && e_106.id > n_98.id;
                    }
                    else
                        t_121 = !0;
                    t_121 ? (e_106.space == this.manager.space && (n_97 = this.listeners.insert(n_97, e_106)), i_54 = i_54.next) : (n_97 = r_78, r_78 = r_78.next);
                }
            }
            e = e.next;
        } };
        e.prototype.invalidate_bodylisteners = function () { this.zip_bodylisteners = !0; };
        e.prototype.validate_bodylisteners = function () { this.zip_bodylisteners && (this.zip_bodylisteners = !1, this.realvalidate_bodylisteners()); };
        e.prototype.realvalidate_bodylisteners = function () { this.bodylisteners.clear(); var e = this.cbTypes.head; for (; e != null;) {
            var t_122 = e.elt, n_99 = null, r_79 = this.bodylisteners.head, i_55 = t_122.bodylisteners.head;
            for (; i_55 != null;) {
                var e_107 = i_55.elt;
                if (r_79 != null && r_79.elt == e_107)
                    i_55 = i_55.next, n_99 = r_79, r_79 = r_79.next;
                else {
                    var t_123 = void 0;
                    if (r_79 != null) {
                        var n_100 = r_79.elt;
                        t_123 = e_107.precedence > n_100.precedence || e_107.precedence == n_100.precedence && e_107.id > n_100.id;
                    }
                    else
                        t_123 = !0;
                    t_123 ? (!e_107.options.excluded(this.cbTypes) && e_107.space == this.manager.space && (n_99 = this.bodylisteners.insert(n_99, e_107)), i_55 = i_55.next) : (n_99 = r_79, r_79 = r_79.next);
                }
            }
            e = e.next;
        } };
        e.prototype.invalidate_conlisteners = function () { this.zip_conlisteners = !0; };
        e.prototype.validate_conlisteners = function () { this.zip_conlisteners && (this.zip_conlisteners = !1, this.realvalidate_conlisteners()); };
        e.prototype.realvalidate_conlisteners = function () { this.conlisteners.clear(); var e = this.cbTypes.head; for (; e != null;) {
            var t_124 = e.elt, n_101 = null, r_80 = this.conlisteners.head, i_56 = t_124.conlisteners.head;
            for (; i_56 != null;) {
                var e_108 = i_56.elt;
                if (r_80 != null && r_80.elt == e_108)
                    i_56 = i_56.next, n_101 = r_80, r_80 = r_80.next;
                else {
                    var t_125 = void 0;
                    if (r_80 != null) {
                        var n_102 = r_80.elt;
                        t_125 = e_108.precedence > n_102.precedence || e_108.precedence == n_102.precedence && e_108.id > n_102.id;
                    }
                    else
                        t_125 = !0;
                    t_125 ? (!e_108.options.excluded(this.cbTypes) && e_108.space == this.manager.space && (n_101 = this.conlisteners.insert(n_101, e_108)), i_56 = i_56.next) : (n_101 = r_80, r_80 = r_80.next);
                }
            }
            e = e.next;
        } };
        e.prototype.validate = function () { this.zip_listeners && (this.zip_listeners = !1, this.realvalidate_listeners()), this.zip_bodylisteners && (this.zip_bodylisteners = !1, this.realvalidate_bodylisteners()), this.zip_conlisteners && (this.zip_conlisteners = !1, this.realvalidate_conlisteners()); };
        e.prototype.addConstraint = function (e) { this.constraints.add(e); };
        e.prototype.addInteractor = function (e) { this.interactors.add(e); };
        e.prototype.remConstraint = function (e) { this.constraints.remove(e); };
        e.prototype.remInteractor = function (e) { this.interactors.remove(e); };
        e.prototype.free = function () { for (this.listeners.clear(), this.zip_listeners = !0, this.bodylisteners.clear(), this.zip_bodylisteners = !0, this.conlisteners.clear(), this.zip_conlisteners = !0; this.cbTypes.head != null;)
            this.cbTypes.pop_unsafe().cbsets.remove(this); };
        return e;
    }()), Er._zpp = null, Er.zpp_pool = null, J = Er, Dr = (function () {
        function e() {
            this.outer_i = null, this.id = 0, this.userData = null, this.ishape = null, this.ibody = null, this.icompound = null, this.wrap_cbTypes = null, this.cbSet = null, this.cbTypes = null, this.group = null, this.cbsets = null, e.initFields(this);
        }
        e.initFields = function (e) { e.wrap_cbTypes = null, e.cbSet = null, e.cbTypes = null, e.group = null, e.cbsets = null, e.icompound = null, e.ibody = null, e.ishape = null, e.userData = null, e.id = 0, e.outer_i = null, e.id = In.Interactor(), e.cbsets = new dt, e.cbTypes = new ut; };
        e.get = function (e, t) { var n = e.id < t.id ? e.id : t.id, r = e.id < t.id ? t.id : e.id, i = e.cbsets.length < t.cbsets.length ? e.cbsets : t.cbsets, a = null, o = i.head; for (; o != null;) {
            var e_109 = o.elt;
            if (e_109.id == n && e_109.di == r) {
                a = e_109;
                break;
            }
            o = o.next;
        } return a; };
        e.int_callback = function (e, t, n) { var r = e.int1, i = e.int2; t.options1.compatible(r.cbTypes) && t.options2.compatible(i.cbTypes) ? (n.int1 = r, n.int2 = i) : (n.int1 = i, n.int2 = r); };
        e.prototype.isShape = function () { return this.ishape != null; };
        e.prototype.isBody = function () { return this.ibody != null; };
        e.prototype.isCompound = function () { return this.icompound != null; };
        e.prototype.__iaddedToSpace = function () { this.group != null && this.group.interactors.add(this); var e = this.cbTypes.head; for (; e != null;)
            e.elt.interactors.add(this), e = e.next; this.alloc_cbSet(); };
        e.prototype.__iremovedFromSpace = function () { this.group != null && this.group.interactors.remove(this); var e = this.cbTypes.head; for (; e != null;)
            e.elt.interactors.remove(this), e = e.next; this.dealloc_cbSet(); };
        e.prototype.wake = function () { if (this.ishape != null) {
            var e_110 = this.ishape.body;
            e_110 != null && e_110.space != null && e_110.space.non_inlined_wake(e_110);
        }
        else
            this.ibody == null ? this.icompound.space != null && this.icompound.space.wakeCompound(this.icompound) : this.ibody.space != null && this.ibody.space.non_inlined_wake(this.ibody); };
        e.prototype._getSpace = function () { return this.ishape == null ? this.ibody == null ? this.icompound.space : this.ibody.space : this.ishape.body == null ? null : this.ishape.body.space; };
        e.prototype.getSpace = function () { return this._getSpace(); };
        e.prototype.setupcbTypes = function () { var t = e._zpp; this.wrap_cbTypes = t.util.ZPP_CbTypeList.get(this.cbTypes), this.wrap_cbTypes.zpp_inner.adder = this.wrap_cbTypes_adder.bind(this), this.wrap_cbTypes.zpp_inner.subber = this.wrap_cbTypes_subber.bind(this), this.wrap_cbTypes.zpp_inner.dontremove = !0, this.wrap_cbTypes.zpp_inner._modifiable = this.immutable_cbTypes.bind(this); };
        e.prototype.immutable_cbTypes = function () { this.immutable_midstep("Interactor::cbTypes"); };
        e.prototype.wrap_cbTypes_subber = function (e) { var t = e.zpp_inner; if (this.cbTypes.has(t)) {
            var e_111 = this._getSpace();
            e_111 != null && (this.dealloc_cbSet(), t.interactors.remove(this)), this.cbTypes.remove(t), e_111 != null && (this.alloc_cbSet(), this.wake());
        } };
        e.prototype.wrap_cbTypes_adder = function (e) { return this.insert_cbtype(e.zpp_inner), !1; };
        e.prototype.insert_cbtype = function (e) { if (!this.cbTypes.has(e)) {
            var t_126 = this._getSpace();
            t_126 != null && (this.dealloc_cbSet(), e.interactors.add(this));
            var n_103 = null, r_81 = this.cbTypes.head;
            for (; r_81 != null;) {
                var t_127 = r_81.elt;
                if (e.id < t_127.id)
                    break;
                n_103 = r_81, r_81 = r_81.next;
            }
            this.cbTypes.insert(n_103, e), t_126 != null && (this.alloc_cbSet(), this.wake());
        } };
        e.prototype.alloc_cbSet = function () { var e = this._getSpace(); (this.cbSet = e.cbsets.get(this.cbTypes)) != null && (this.cbSet.count++, this.cbSet.interactors.add(this), this.cbSet.validate(), e.freshInteractorType(this)); };
        e.prototype.dealloc_cbSet = function () { var e = this._getSpace(); if (this.cbSet != null) {
            if (this.cbSet.interactors.remove(this), e.nullInteractorType(this), --this.cbSet.count == 0) {
                e.cbsets.remove(this.cbSet);
                var t_128 = this.cbSet;
                for (t_128.listeners.clear(), t_128.zip_listeners = !0, t_128.bodylisteners.clear(), t_128.zip_bodylisteners = !0, t_128.conlisteners.clear(), t_128.zip_conlisteners = !0; t_128.cbTypes.head != null;)
                    t_128.cbTypes.pop_unsafe().cbsets.remove(t_128);
                t_128.next = J.zpp_pool, J.zpp_pool = t_128;
            }
            this.cbSet = null;
        } };
        e.prototype.setGroup = function (e) { if (this.group != e) {
            var t_129 = this._getSpace() != null;
            t_129 && this.group != null && this.group.interactors.remove(this), this.group = e, t_129 && e != null && e.interactors.add(this), t_129 && (this.ishape == null ? this.ibody == null ? this.icompound.wake() : this.ibody.wake() : this.ishape.body.wake());
        } };
        e.prototype.immutable_midstep = function (e) { if (this.ibody != null) {
            var t_130 = this.ibody;
            if (t_130.space != null && t_130.space.midstep)
                throw Error("".concat(e, " cannot be set during a space step()"));
        }
        else
            this.ishape == null ? this.icompound.__imutable_midstep(e) : this.ishape.__immutable_midstep(e); };
        e.prototype.lookup_group = function () { var e = this; for (; e != null && e.group == null;)
            e = e.ishape == null ? e.icompound == null ? e.ibody.compound : e.icompound.compound : e.ishape.body; return e == null ? null : e.group; };
        e.prototype.copyto = function (t) { var n = e._nape; t.zpp_inner_i.group = this.group; var r = this.outer_i; r.zpp_inner_i.wrap_cbTypes == null && r.zpp_inner_i.setupcbTypes(); var i = r.zpp_inner_i.wrap_cbTypes; i.zpp_inner.valmod(); var a = n.callbacks.CbTypeIterator.get(i); for (;;) {
            a.zpp_inner.zpp_inner.valmod();
            var e_112 = a.zpp_inner;
            e_112.zpp_inner.valmod(), e_112.zpp_inner.zip_length && (e_112.zpp_inner.zip_length = !1, e_112.zpp_inner.user_length = e_112.zpp_inner.inner.length);
            var r_82 = e_112.zpp_inner.user_length;
            a.zpp_critical = !0;
            var i_57 = void 0;
            if (a.zpp_i < r_82 ? i_57 = !0 : (a.zpp_next = n.callbacks.CbTypeIterator.zpp_pool, n.callbacks.CbTypeIterator.zpp_pool = a, a.zpp_inner = null, i_57 = !1), !i_57)
                break;
            a.zpp_critical = !1;
            var o_39 = a.zpp_inner.at(a.zpp_i++);
            t.zpp_inner_i.wrap_cbTypes == null && t.zpp_inner_i.setupcbTypes();
            var s_33 = t.zpp_inner_i.wrap_cbTypes;
            s_33.zpp_inner.reverse_flag ? s_33.push(o_39) : s_33.unshift(o_39);
        } this.userData != null && (t.zpp_inner_i.userData = Object.assign({}, this.userData)); };
        e._init = function (t, n) { e._initialized || (e._initialized = !0, e._zpp = t, e._nape = n); };
        return e;
    }()), Dr._nape = null, Dr._zpp = null, Dr._initialized = !1, Or = Dr, kr = (function () {
        function e() {
            this.outer_i = null, this.id = 0, this.userData = null, this.ishape = null, this.ibody = null, this.icompound = null, this.wrap_cbTypes = null, this.cbSet = null, this.cbTypes = null, this.group = null, this.cbsets = null, this.outer = null, this.world = !1, this.type = 0, this.compound = null, this.shapes = null, this.wrap_shapes = null, this.space = null, this.arbiters = null, this.wrap_arbiters = null, this.constraints = null, this.wrap_constraints = null, this.component = null, this.graph_depth = 0, this.sweepTime = 0, this.sweep_angvel = 0, this.sweepFrozen = !1, this.sweepRadius = 0, this.bullet = !1, this.bulletEnabled = !1, this.disableCCD = !1, this.pre_posx = 0, this.pre_posy = 0, this.posx = 0, this.posy = 0, this.wrap_pos = null, this.velx = 0, this.vely = 0, this.wrap_vel = null, this.forcex = 0, this.forcey = 0, this.wrap_force = null, this.kinvelx = 0, this.kinvely = 0, this.wrap_kinvel = null, this.svelx = 0, this.svely = 0, this.wrap_svel = null, this.wrapcvel = null, this.angvel = 0, this.torque = 0, this.kinangvel = 0, this.pre_rot = 0, this.rot = 0, this.axisx = 0, this.axisy = 0, this.zip_axis = !1, this.kinematicDelaySleep = !1, this.mass = 0, this.zip_mass = !1, this.massMode = 0, this.imass = 0, this.smass = 0, this.cmass = 0, this.nomove = !1, this.gravMass = 0, this.zip_gravMass = !1, this.gravMassMode = 0, this.gravMassScale = 0, this.zip_gravMassScale = !1, this.inertiaMode = 0, this.inertia = 0, this.zip_inertia = !1, this.cinertia = 0, this.iinertia = 0, this.sinertia = 0, this.norotate = !1, this.aabb = null, this.zip_aabb = !1, this.localCOMx = 0, this.localCOMy = 0, this.zip_localCOM = !1, this.worldCOMx = 0, this.worldCOMy = 0, this.zip_worldCOM = !1, this.wrap_localCOM = null, this.wrap_worldCOM = null;
            var t = e._zpp;
            Or.initFields(this), this.ibody = this, this.world = !1, this.bulletEnabled = !1, this.sweepTime = 0, this.sweep_angvel = 0, this.norotate = this.nomove = !1, this.disableCCD = !1, this.posx = 0, this.posy = 0, this.rot = 0, this.axisx = 0, this.axisy = 1, this.svelx = 0, this.svely = 0, this.velx = 0, this.vely = 0, this.kinvelx = 0, this.kinvely = 0, this.forcex = 0, this.forcey = 0, this.torque = this.angvel = this.kinangvel = 0, this.pre_posx = 1 / 0, this.pre_posy = 1 / 0, this.pre_rot = 1 / 0, this.localCOMx = 0, this.localCOMy = 0, this.worldCOMx = 0, this.worldCOMy = 0, this.zip_aabb = !0;
            var n = An.get(0, 0, 0, 0);
            this.aabb = n, this.aabb._immutable = !0, this.aabb._validate = this.aabb_validate.bind(this), this.massMode = 0, this.gravMassMode = 0, this.gravMassScale = 1, this.inertiaMode = 0, this.arbiters = new gt, this.constraints = new mt, this.shapes = new ft, this.wrap_shapes = t.util.ZPP_ShapeList.get(this.shapes), this.wrap_shapes.zpp_inner.adder = this.shapes_adder.bind(this), this.wrap_shapes.zpp_inner.subber = this.shapes_subber.bind(this), this.wrap_shapes.zpp_inner._invalidate = this.shapes_invalidate.bind(this), this.wrap_shapes.zpp_inner._modifiable = this.shapes_modifiable.bind(this), this.kinematicDelaySleep = !1;
        }
        e.bodysetlt = function (e, t) { return e.id < t.id; };
        e.__static = function () { var t = e._nape; U.BodyType_STATIC == null && (U.internal = !0, U.BodyType_STATIC = new t.phys.BodyType, U.internal = !1); var n = new t.phys.Body(U.BodyType_STATIC), r = n.zpp_inner; return r.world = !0, r.wrap_shapes.zpp_inner.immutable = !0, r.smass = r.imass = r.cmass = r.mass = r.gravMass = 0, r.sinertia = r.iinertia = r.cinertia = r.inertia = 0, r.cbTypes.clear(), n; };
        e.prototype.isStatic = function () { return this.type === 1; };
        e.prototype.isDynamic = function () { return this.type === 2; };
        e.prototype.isKinematic = function () { return this.type === 3; };
        e.prototype.invalidate_type = function () { this.invalidate_mass(), this.invalidate_inertia(); };
        e.prototype.invalidate_shapes = function () { this.zip_aabb = !0, this.zip_localCOM = !0, this.zip_worldCOM = !0, this.invalidate_mass(), this.invalidate_inertia(); };
        e.prototype.init_bodysetlist = function () { e.bodyset == null && (e.bodyset = new Gt, e.bodyset.lt = e.bodysetlt, e.bodystack = new pt); };
        e.prototype.connectedBodies_cont = function (t) { e.bodyset.try_insert_bool(t.zpp_inner) && (e.bodystack.add(t.zpp_inner), t.zpp_inner.graph_depth = e.cur_graph_depth + 1); };
        e.prototype.connectedBodies = function (t, n) { var r = e._nape; e.bodyset == null && this.init_bodysetlist(); var i = n == null ? new r.phys.BodyList : n; for (e.bodystack.add(this), e.bodyset.insert(this), this.graph_depth = 0; e.bodystack.head != null;) {
            var n_104 = e.bodystack.pop_unsafe();
            if (n_104.graph_depth === t)
                continue;
            e.cur_graph_depth = n_104.graph_depth;
            var r_83 = n_104.constraints.head;
            for (; r_83 != null;)
                r_83.elt.outer.visitBodies(this.connectedBodies_cont.bind(this)), r_83 = r_83.next;
        } var a = e.bodyset; if (a.parent != null) {
            var e_113 = a.parent;
            for (; e_113 != null;)
                if (e_113.prev != null)
                    e_113 = e_113.prev;
                else if (e_113.next != null)
                    e_113 = e_113.next;
                else {
                    var t_131 = e_113.data;
                    if (t_131 !== this) {
                        var e_114 = t_131.outer;
                        i.zpp_inner.reverse_flag ? i.push(e_114) : i.unshift(e_114);
                    }
                    var n_105 = e_113.parent;
                    n_105 != null && (e_113 === n_105.prev ? n_105.prev = null : n_105.next = null, e_113.parent = null);
                    var r_84 = e_113;
                    r_84.data = null, r_84.lt = null, r_84.next = Gt.zpp_pool, Gt.zpp_pool = r_84, e_113 = n_105;
                }
            a.parent = null;
        } return i; };
        e.prototype.interactingBodies = function (t, n, r) { var i = e._nape; e.bodyset == null && this.init_bodysetlist(); var a = r == null ? new i.phys.BodyList : r; for (e.bodyset.insert(this), e.bodystack.add(this), this.graph_depth = 0; e.bodystack.head != null;) {
            var r_85 = e.bodystack.pop_unsafe();
            if (r_85.graph_depth !== n)
                for (var n_106 = r_85.arbiters.head; n_106 != null; n_106 = n_106.next) {
                    var i_58 = n_106.elt;
                    if ((i_58.type & t) !== 0) {
                        var t_132 = i_58.b1 === r_85 ? i_58.b2 : i_58.b1;
                        e.bodyset.try_insert_bool(t_132) && (e.bodystack.add(t_132), t_132.graph_depth = r_85.graph_depth + 1);
                    }
                }
        } var o = e.bodyset; if (o.parent != null) {
            var e_115 = o.parent;
            for (; e_115 != null;)
                if (e_115.prev != null)
                    e_115 = e_115.prev;
                else if (e_115.next != null)
                    e_115 = e_115.next;
                else {
                    var t_133 = e_115.data;
                    if (t_133 !== this) {
                        var e_116 = t_133.outer;
                        a.zpp_inner.reverse_flag ? a.push(e_116) : a.unshift(e_116);
                    }
                    var n_107 = e_115.parent;
                    n_107 != null && (e_115 === n_107.prev ? n_107.prev = null : n_107.next = null, e_115.parent = null);
                    var r_86 = e_115;
                    r_86.data = null, r_86.lt = null, r_86.next = Gt.zpp_pool, Gt.zpp_pool = r_86, e_115 = n_107;
                }
            o.parent = null;
        } return a; };
        e.prototype.atRest = function (e) { if (this.type !== 2)
            return this.component.sleeping; var t = R.linearSleepThreshold * R.linearSleepThreshold, n; if (this.velx * this.velx + this.vely * this.vely > t)
            n = !1;
        else {
            var r_87 = this.posx - this.pre_posx, i_59 = this.posy - this.pre_posy;
            if (r_87 * r_87 + i_59 * i_59 > .25 * t * e * e)
                n = !1;
            else {
                var t_134 = this.aabb.maxx - this.aabb.minx, r_88 = this.aabb.maxy - this.aabb.miny, i_60 = t_134 * t_134 + r_88 * r_88, a_52 = R.angularSleepThreshold * R.angularSleepThreshold;
                if (4 * this.angvel * this.angvel * i_60 > a_52)
                    n = !1;
                else {
                    var t_135 = this.rot - this.pre_rot;
                    n = !(t_135 * t_135 * i_60 > a_52 * e * e);
                }
            }
        } return n || (this.component.waket = this.space.stamp), this.component.waket + R.sleepDelay < this.space.stamp; };
        e.prototype.refreshArbiters = function () { var e = this.arbiters.head; for (; e != null;) {
            var t_136 = e.elt;
            t_136.invalidated = !0, e = e.next;
        } };
        e.prototype.sweepIntegrate = function (e) { var t = e - this.sweepTime; if (t !== 0 && (this.sweepTime = e, this.posx += this.velx * t, this.posy += this.vely * t, this.angvel !== 0)) {
            var e_117 = this.sweep_angvel * t;
            if (this.rot += e_117, e_117 * e_117 > 1e-4)
                this.axisx = Math.sin(this.rot), this.axisy = Math.cos(this.rot);
            else {
                var t_137 = e_117 * e_117, n_108 = 1 - .5 * t_137, r_89 = 1 - t_137 * t_137 / 8, i_61 = (n_108 * this.axisx + e_117 * this.axisy) * r_89;
                this.axisy = (n_108 * this.axisy - e_117 * this.axisx) * r_89, this.axisx = i_61;
            }
        } };
        e.prototype.invalidate_pos = function () { var e = this.shapes.head; for (; e != null;) {
            var t_138 = e.elt;
            t_138.type === 1 && (t_138.polygon.invalidate_gverts(), t_138.polygon.invalidate_gaxi()), t_138.invalidate_worldCOM(), e = e.next;
        } this.zip_worldCOM = !0; };
        e.prototype.pos_invalidate = function (e) { if (this.immutable_midstep("Body::position"), this.type === 1 && this.space != null)
            throw Error("Cannot move a static object once inside a Space"); this.posx === e.x && this.posy === e.y || (this.posx = e.x, this.posy = e.y, this.invalidate_pos(), this.wake()); };
        e.prototype.pos_validate = function () { this.wrap_pos.zpp_inner.x = this.posx, this.wrap_pos.zpp_inner.y = this.posy; };
        e.prototype.vel_invalidate = function (e) { if (this.type === 1)
            throw Error("Static body cannot have its velocity set."); this.velx = e.x, this.vely = e.y, this.wake(); };
        e.prototype.vel_validate = function () { this.wrap_vel.zpp_inner.x = this.velx, this.wrap_vel.zpp_inner.y = this.vely; };
        e.prototype.kinvel_invalidate = function (e) { this.kinvelx = e.x, this.kinvely = e.y, this.wake(); };
        e.prototype.kinvel_validate = function () { this.wrap_kinvel.zpp_inner.x = this.kinvelx, this.wrap_kinvel.zpp_inner.y = this.kinvely; };
        e.prototype.svel_invalidate = function (e) { this.svelx = e.x, this.svely = e.y, this.wake(); };
        e.prototype.svel_validate = function () { this.wrap_svel.zpp_inner.x = this.svelx, this.wrap_svel.zpp_inner.y = this.svely; };
        e.prototype.force_invalidate = function (e) { if (this.type !== 2)
            throw Error("Non-dynamic body cannot have force applied."); this.forcex = e.x, this.forcey = e.y, this.wake(); };
        e.prototype.force_validate = function () { this.wrap_force.zpp_inner.x = this.forcex, this.wrap_force.zpp_inner.y = this.forcey; };
        e.prototype._setupVec2Wrapper = function (t, n, r, i) { return e._nape.geom.Vec2.get(t, n); };
        e.prototype.setupPosition = function () { this.wrap_pos = this._setupVec2Wrapper(this.posx, this.posy, null, null), this.wrap_pos.zpp_inner._inuse = !0, this.world ? this.wrap_pos.zpp_inner._immutable = !0 : (this.wrap_pos.zpp_inner._invalidate = this.pos_invalidate.bind(this), this.wrap_pos.zpp_inner._validate = this.pos_validate.bind(this)); };
        e.prototype.setupVelocity = function () { this.wrap_vel = this._setupVec2Wrapper(this.velx, this.vely, null, null), this.wrap_vel.zpp_inner._inuse = !0, this.world ? this.wrap_vel.zpp_inner._immutable = !0 : (this.wrap_vel.zpp_inner._invalidate = this.vel_invalidate.bind(this), this.wrap_vel.zpp_inner._validate = this.vel_validate.bind(this)); };
        e.prototype.setupkinvel = function () { this.wrap_kinvel = this._setupVec2Wrapper(this.kinvelx, this.kinvely, null, null), this.wrap_kinvel.zpp_inner._inuse = !0, this.world ? this.wrap_kinvel.zpp_inner._immutable = !0 : (this.wrap_kinvel.zpp_inner._invalidate = this.kinvel_invalidate.bind(this), this.wrap_kinvel.zpp_inner._validate = this.kinvel_validate.bind(this)); };
        e.prototype.setupsvel = function () { this.wrap_svel = this._setupVec2Wrapper(this.svelx, this.svely, null, null), this.wrap_svel.zpp_inner._inuse = !0, this.world ? this.wrap_svel.zpp_inner._immutable = !0 : (this.wrap_svel.zpp_inner._invalidate = this.svel_invalidate.bind(this), this.wrap_svel.zpp_inner._validate = this.svel_validate.bind(this)); };
        e.prototype.setupForce = function () { this.wrap_force = this._setupVec2Wrapper(this.forcex, this.forcey, null, null), this.wrap_force.zpp_inner._inuse = !0, this.world ? this.wrap_force.zpp_inner._immutable = !0 : (this.wrap_force.zpp_inner._invalidate = this.force_invalidate.bind(this), this.wrap_force.zpp_inner._validate = this.force_validate.bind(this)); };
        e.prototype.cvel_validate = function () { this.wrapcvel.zpp_inner.x = this.velx + this.kinvelx, this.wrapcvel.zpp_inner.y = this.vely + this.kinvely; };
        e.prototype.setup_cvel = function () { this.wrapcvel = this._setupVec2Wrapper(this.velx + this.kinvelx, this.vely + this.kinvely, null, null), this.wrapcvel.zpp_inner._inuse = !0, this.wrapcvel.zpp_inner._immutable = !0, this.wrapcvel.zpp_inner._validate = this.cvel_validate.bind(this); };
        e.prototype.invalidate_rot = function () { this.zip_axis = !0; var e = this.shapes.head; for (; e != null;) {
            var t_139 = e.elt;
            t_139.type === 1 && (t_139.polygon.invalidate_gverts(), t_139.polygon.invalidate_gaxi()), t_139.invalidate_worldCOM(), e = e.next;
        } this.zip_worldCOM = !0; };
        e.prototype.validate_axis = function () { this.zip_axis && (this.zip_axis = !1, this.axisx = Math.sin(this.rot), this.axisy = Math.cos(this.rot)); };
        e.prototype.invalidate_mass = function () { this.zip_mass = !0, this.invalidate_gravMass(); };
        e.prototype.validate_mass = function () { if (this.zip_mass || this.massMode === 0 && 0) {
            if (this.zip_mass = !1, this.massMode === 0) {
                this.cmass = 0;
                var e_118 = this.shapes.head;
                for (; e_118 != null;) {
                    var t_140 = e_118.elt;
                    t_140.refmaterial.density = t_140.material.density, t_140.validate_area_inertia(), this.cmass += t_140.area * t_140.material.density, e_118 = e_118.next;
                }
            }
            this.type === 2 && !this.nomove ? (this.mass = this.cmass, this.imass = this.smass = 1 / this.mass) : (this.mass = 1 / 0, this.imass = this.smass = 0);
        } };
        e.prototype.invalidate_gravMass = function () { this.gravMassMode !== 1 && (this.zip_gravMass = !0), this.gravMassMode !== 2 && (this.zip_gravMassScale = !0), this.wake(); };
        e.prototype.validate_gravMass = function () { this.zip_gravMass && (this.zip_gravMass = !1, this.validate_mass(), this.gravMassMode === 0 ? (this.validate_mass(), this.gravMass = this.cmass) : this.gravMassMode === 2 && (this.validate_mass(), this.gravMass = this.cmass * this.gravMassScale)); };
        e.prototype.invalidate_gravMassScale = function () { this.gravMassMode === 2 ? this.invalidate_gravMass() : this.zip_gravMassScale = !0; };
        e.prototype.validate_gravMassScale = function () { this.zip_gravMassScale && (this.zip_gravMassScale = !1, this.gravMassMode === 0 ? this.gravMassScale = 1 : this.gravMassMode === 1 && (this.validate_mass(), this.gravMassScale = this.gravMass / this.cmass)); };
        e.prototype.invalidate_inertia = function () { this.zip_inertia = !0, this.wake(); };
        e.prototype.validate_inertia = function () { if (this.zip_inertia || this.inertiaMode === 0 && 0) {
            if (this.zip_inertia = !1, this.inertiaMode === 0) {
                this.cinertia = 0;
                var e_119 = this.shapes.head;
                for (; e_119 != null;) {
                    var t_141 = e_119.elt;
                    t_141.refmaterial.density = t_141.material.density, t_141.validate_area_inertia(), this.cinertia += t_141.inertia * t_141.area * t_141.material.density, e_119 = e_119.next;
                }
            }
            this.type === 2 && !this.norotate ? (this.inertia = this.cinertia, this.sinertia = this.iinertia = 1 / this.inertia) : (this.inertia = 1 / 0, this.sinertia = this.iinertia = 0);
        } };
        e.prototype.validate_aabb = function () { if (this.shapes.head == null)
            throw Error("Body bounds only makes sense if it contains shapes"); if (this.zip_aabb) {
            this.zip_aabb = !1, this.aabb.minx = 1 / 0, this.aabb.miny = 1 / 0, this.aabb.maxx = -1 / 0, this.aabb.maxy = -1 / 0;
            var e_120 = this.shapes.head;
            for (; e_120 != null;) {
                var t_142 = e_120.elt;
                t_142.validate_aabb(), t_142.aabb.minx < this.aabb.minx && (this.aabb.minx = t_142.aabb.minx), t_142.aabb.maxx > this.aabb.maxx && (this.aabb.maxx = t_142.aabb.maxx), t_142.aabb.miny < this.aabb.miny && (this.aabb.miny = t_142.aabb.miny), t_142.aabb.maxy > this.aabb.maxy && (this.aabb.maxy = t_142.aabb.maxy), e_120 = e_120.next;
            }
        } };
        e.prototype.aabb_validate = function () { if (this.shapes.head == null)
            throw Error("bounds only makes sense when Body has shapes"); this.validate_aabb(); };
        e.prototype.invalidate_localCOM = function () { this.zip_localCOM = !0, this.zip_worldCOM = !0; };
        e.prototype.validate_localCOM = function () { if (this.zip_localCOM) {
            this.zip_localCOM = !1;
            var e_121 = 0, t_143 = 0, n_109 = 0, r_90 = this.shapes.head;
            for (; r_90 != null;) {
                var i_62 = r_90.elt;
                i_62.validate_localCOM(), i_62.validate_area_inertia();
                var a_53 = i_62.area * i_62.material.density;
                e_121 += i_62.localCOMx * a_53, t_143 += i_62.localCOMy * a_53, n_109 += i_62.area * i_62.material.density, r_90 = r_90.next;
            }
            if (n_109 !== 0) {
                var r_91 = 1 / n_109;
                this.localCOMx = e_121 * r_91, this.localCOMy = t_143 * r_91;
            }
            this.wrap_localCOM != null && (this.wrap_localCOM.zpp_inner.x = this.localCOMx, this.wrap_localCOM.zpp_inner.y = this.localCOMy), this.zip_mass && this.massMode === 0 && (this.zip_mass = !1, this.cmass = n_109, this.type === 2 ? (this.mass = this.cmass, this.imass = this.smass = 1 / this.mass) : (this.mass = 1 / 0, this.imass = this.smass = 0));
        } };
        e.prototype.validate_worldCOM = function () { this.zip_worldCOM && (this.zip_worldCOM = !1, this.validate_localCOM(), this.validate_axis(), this.worldCOMx = this.posx + (this.axisy * this.localCOMx - this.axisx * this.localCOMy), this.worldCOMy = this.posy + (this.localCOMx * this.axisx + this.localCOMy * this.axisy)), this.wrap_worldCOM != null && (this.wrap_worldCOM.zpp_inner.x = this.worldCOMx, this.wrap_worldCOM.zpp_inner.y = this.worldCOMy); };
        e.prototype.getlocalCOM = function () { if (this.shapes.head == null)
            throw Error("Body has no shapes so cannot compute its localCOM"); this.validate_localCOM(); };
        e.prototype.getworldCOM = function () { if (this.shapes.head == null)
            throw Error("Body has no shapes so cannot compute its worldCOM"); this.validate_worldCOM(); };
        e.prototype.__immutable_midstep = function () { if (this.world)
            throw Error("Space::world is immutable"); };
        e.prototype.clear = function () { if (this.space != null)
            throw Error("Cannot clear a Body if it is currently being used by a Space!"); if (this.constraints.head != null)
            throw Error("Cannot clear a Body if it is currently being used by a constraint!"); for (; this.shapes.head != null;) {
            var e_122 = this.shapes.pop_unsafe();
            e_122.removedFromBody(), e_122.body = null;
        } this.invalidate_shapes(), this.pre_posx = 0, this.pre_posy = 0, this.posx = 0, this.posy = 0, this.velx = 0, this.vely = 0, this.forcex = 0, this.forcey = 0, this.kinvelx = 0, this.kinvely = 0, this.svelx = 0, this.svely = 0, this.angvel = this.torque = this.kinangvel = this.pre_rot = this.rot = 0, this.zip_worldCOM = !0, this.zip_axis = !0, this.axisx = 0, this.axisy = 1, this.zip_axis = !1, this.massMode = 0, this.gravMassMode = 0, this.gravMassScale = 1, this.inertiaMode = 0, this.norotate = !1, this.nomove = !1; };
        e.prototype.shapes_adder = function (e) { if (e.zpp_inner.body !== this) {
            if (e.zpp_inner.body != null && e.zpp_inner.body.wrap_shapes.remove(e), e.zpp_inner.body = this, e.zpp_inner.addedToBody(), this.space != null) {
                var t_144 = this.space, n_110 = e.zpp_inner, r_92 = n_110.body;
                r_92.world || (r_92.component.waket = t_144.stamp + +!t_144.midstep, r_92.type === 3 && (r_92.kinematicDelaySleep = !0), r_92.component.sleeping && t_144.really_wake(r_92, !1)), t_144.bphase.insert(n_110), n_110.addedToSpace();
            }
            return e.zpp_inner.type === 1 && (e.zpp_inner.polygon.invalidate_gaxi(), e.zpp_inner.polygon.invalidate_gverts()), !0;
        } return !1; };
        e.prototype.shapes_subber = function (e) { this.space != null && this.space.removed_shape(e.zpp_inner), e.zpp_inner.body = null, e.zpp_inner.removedFromBody(); };
        e.prototype.shapes_invalidate = function (e) { this.invalidate_shapes(); };
        e.prototype.shapes_modifiable = function () { if (this.immutable_midstep("Body::shapes"), this.type === 1 && this.space != null)
            throw Error("Cannot modifiy shapes of static object once added to Space"); };
        e.prototype.addedToSpace = function () { var t = e._zpp, n; t.space.ZPP_Component.zpp_pool == null ? n = new t.space.ZPP_Component : (n = t.space.ZPP_Component.zpp_pool, t.space.ZPP_Component.zpp_pool = n.next, n.next = null), n.isBody = !0, n.body = this, this.component = n, this.__iaddedToSpace(); };
        e.prototype.removedFromSpace = function () { var t = e._zpp; for (; this.arbiters.head != null;) {
            var e_123 = this.arbiters.pop_unsafe(), t_145 = this.space;
            e_123.cleared = !0, e_123.b2 === this && this._removeArbiterFromList(e_123.b1.arbiters, e_123), e_123.b1 === this && this._removeArbiterFromList(e_123.b2.arbiters, e_123), e_123.pair != null && (e_123.pair.arb = null, e_123.pair = null), e_123.active = !1, t_145.f_arbiters.modified = !0;
        } var n = this.component; n.body = null, n.constraint = null, n.next = t.space.ZPP_Component.zpp_pool, t.space.ZPP_Component.zpp_pool = n, this.component = null, this.__iremovedFromSpace(); };
        e.prototype._removeArbiterFromList = function (e, t) { var n = null, r = e.head; for (; r != null;) {
            if (r.elt === t) {
                var t_146 = void 0;
                n == null ? (t_146 = e.head, e.head = t_146.next, e.head == null && (e.pushmod = !0)) : (t_146 = n.next, n.next = t_146.next, t_146.next == null && (e.pushmod = !0));
                var r_93 = t_146;
                r_93.elt = null, r_93.next = Fe.zpp_pool, Fe.zpp_pool = r_93, e.modified = !0, e.length--, e.pushmod = !0;
                break;
            }
            n = r, r = r.next;
        } };
        e.prototype.copy = function () { var t = new e._nape.phys.Body().zpp_inner; t.type = this.type, t.bulletEnabled = this.bulletEnabled, t.disableCCD = this.disableCCD; var n = this.shapes.head; for (; n != null;) {
            var e_124 = n.elt, r_94 = t.outer.zpp_inner.wrap_shapes, i_63 = e_124.outer.copy();
            r_94.zpp_inner.reverse_flag ? r_94.push(i_63) : r_94.unshift(i_63), n = n.next;
        } if (t.posx = this.posx, t.posy = this.posy, t.velx = this.velx, t.vely = this.vely, t.forcex = this.forcex, t.forcey = this.forcey, t.rot = this.rot, t.angvel = this.angvel, t.torque = this.torque, t.kinvelx = this.kinvelx, t.kinvely = this.kinvely, t.kinangvel = this.kinangvel, t.svelx = this.svelx, t.svely = this.svely, !this.zip_axis)
            t.axisx = this.axisx, t.axisy = this.axisy;
        else {
            t.zip_axis = !0;
            var e_125 = t.shapes.head;
            for (; e_125 != null;) {
                var t_147 = e_125.elt;
                t_147.type === 1 && (t_147.polygon.invalidate_gverts(), t_147.polygon.invalidate_gaxi()), t_147.invalidate_worldCOM(), e_125 = e_125.next;
            }
            t.zip_worldCOM = !0;
        } return t.rot = this.rot, t.massMode = this.massMode, t.gravMassMode = this.gravMassMode, t.inertiaMode = this.inertiaMode, t.norotate = this.norotate, t.nomove = this.nomove, t.cmass = this.cmass, t.cinertia = this.cinertia, this.zip_mass ? t.invalidate_mass() : t.mass = this.mass, this.zip_gravMass ? t.invalidate_gravMass() : t.gravMass = this.gravMass, this.zip_gravMassScale ? t.invalidate_gravMassScale() : t.gravMassScale = this.gravMassScale, this.zip_inertia ? t.invalidate_inertia() : t.inertia = this.inertia, this.zip_aabb ? t.zip_aabb = !0 : (t.aabb.minx = this.aabb.minx, t.aabb.miny = this.aabb.miny, t.aabb.maxx = this.aabb.maxx, t.aabb.maxy = this.aabb.maxy), this.zip_localCOM ? (t.zip_localCOM = !0, t.zip_worldCOM = !0) : (t.localCOMx = this.localCOMx, t.localCOMy = this.localCOMy), this.zip_worldCOM ? t.zip_worldCOM = !0 : (t.worldCOMx = this.worldCOMx, t.worldCOMy = this.worldCOMy), this.copyto(t.outer), t.outer; };
        e._init = function (t, n) { if (!e._initialized) {
            e._initialized = !0, e._zpp = t, e._nape = n;
            for (var _b = 0, _c = Object.getOwnPropertyNames(Or.prototype); _b < _c.length; _b++) {
                var t_148 = _c[_b];
                t_148 !== "constructor" && !(t_148 in e.prototype) && (e.prototype[t_148] = Or.prototype[t_148]);
            }
        } };
        return e;
    }()), kr._nape = null, kr._zpp = null, kr.bodystack = null, kr.bodyset = null, kr.cur_graph_depth = 0, kr._initialized = !1, Ar = kr, jr = (function () {
        function e() {
            this.outer = null, this.hnext = null, this.id = 0, this.di = 0, this.stamp = 0, this.up_stamp = 0, this.sleep_stamp = 0, this.endGenerated = 0, this.active = !1, this.cleared = !1, this.sleeping = !1, this.present = 0, this.intchange = !1, this.presentable = !1, this.continuous = !1, this.fresh = !1, this.immState = 0, this.invalidated = !1, this.b1 = null, this.b2 = null, this.ws1 = null, this.ws2 = null, this.pair = null, this.type = 0, this.colarb = null, this.fluidarb = null, this.sensorarb = null, this.sensorarb = null, this.fluidarb = null, this.colarb = null, this.type = 0, this.pair = null, this.ws2 = null, this.ws1 = null, this.b2 = null, this.b1 = null, this.invalidated = !1, this.immState = 0, this.fresh = !1, this.continuous = !1, this.presentable = !1, this.intchange = !1, this.present = 0, this.sleeping = !1, this.cleared = !1, this.active = !1, this.endGenerated = 0, this.sleep_stamp = 0, this.up_stamp = 0, this.stamp = 0, this.di = 0, this.id = 0, this.hnext = null, this.outer = null;
        }
        e.prototype.wrapper = function () { if (this.outer == null) {
            var t_149 = e._nape;
            e.internal = !0, this.type == e.COL ? (this.colarb.outer_zn = e._createColArb(), this.outer = this.colarb.outer_zn) : this.type == e.FLUID ? (this.fluidarb.outer_zn = e._createFluidArb(), this.outer = this.fluidarb.outer_zn) : this.outer = new t_149.dynamics.Arbiter, this.outer.zpp_inner = this, e.internal = !1;
        } return this.outer; };
        return e;
    }()), jr._nape = null, jr._zpp = null, jr.internal = !1, jr._createColArb = null, jr._createFluidArb = null, jr.COL = 1, jr.FLUID = 4, jr.SENSOR = 2, Y = jr, Mr = (function () {
        function Mr() {
            this.user_length = 0, this.zip_length = !1, this.push_ite = null, this.at_ite = null, this.at_index = 0, this.reverse_flag = !1, this.dontremove = !1, this.subber = null, this.post_adder = null, this.adder = null, this._modifiable = null, this._validate = null, this._invalidate = null, this._invalidated = !1, this.immutable = !1, this.inner = null, this.outer = null, this._invalidated = !0;
        }
        Mr.prototype.valmod = function () { this.validate(), this.inner.modified && (this.inner.pushmod && (this.push_ite = null), this.at_ite = null, this.inner.modified = !1, this.inner.pushmod = !1, this.zip_length = !0); };
        Mr.prototype.modified = function () { this.zip_length = !0, this.at_ite = null, this.push_ite = null; };
        Mr.prototype.modify_test = function () { this._modifiable != null && this._modifiable(); };
        Mr.prototype.validate = function () { this._invalidated && (this._invalidated = !1, this._validate != null && this._validate()); };
        Mr.prototype.invalidate = function () { this._invalidated = !0, this._invalidate != null && this._invalidate(this); };
        return Mr;
    }()), Nr = A("ZNPList_ZPP_Constraint", "constraint", "ConstraintList", "ZPP_ConstraintList"), A("ZNPList_ZPP_Body", "phys", "BodyList", "ZPP_BodyList"), Pr = A("ZNPList_ZPP_Interactor", "phys", "InteractorList", "ZPP_InteractorList"), A("ZNPList_ZPP_Compound", "phys", "CompoundList", "ZPP_CompoundList"), A("ZNPList_ZPP_Listener", "callbacks", "ListenerList", "ZPP_ListenerList"), A("ZNPList_ZPP_CbType", "callbacks", "CbTypeList", "ZPP_CbTypeList"), A("ZNPList_ZPP_GeomPoly", "geom", "GeomPolyList", "ZPP_GeomPolyList"), A("ZNPList_RayResult", "geom", "RayResultList", "ZPP_RayResultList"), A("ZNPList_ConvexResult", "geom", "ConvexResultList", "ZPP_ConvexResultList"), A("ZNPList_ZPP_Edge", "shape", "EdgeList", "ZPP_EdgeList"), Fr = A("ZNPList_ZPP_Shape", "shape", "ShapeList", "ZPP_ShapeList"), Ir = A("ZNPList_ZPP_InteractionGroup", "dynamics", "InteractionGroupList", "ZPP_InteractionGroupList"), Lr = A("ZNPList_ZPP_Arbiter", "dynamics", "ArbiterList", "ZPP_ArbiterList"), Rr = (function () {
        function e() {
            this.outer = null, this.userData = null, this.id = 0, this.cbsets = null, this.interactors = null, this.wrap_interactors = null, this.constraints = null, this.wrap_constraints = null, this.listeners = null, this.bodylisteners = null, this.conlisteners = null;
            var t = e._zpp;
            this.id = t.ZPP_ID.CbType(), this.listeners = new _t, this.bodylisteners = new bt, this.conlisteners = new St, this.constraints = new mt, this.interactors = new yt, this.cbsets = new vt;
        }
        e.setlt = function (e, t) { return e.id < t.id; };
        e.prototype.addInteractor = function (e) { this.interactors.add(e); };
        e.prototype.remInteractor = function (e) { this.interactors.remove(e); };
        e.prototype.addConstraint = function (e) { this.constraints.add(e); };
        e.prototype.remConstraint = function (e) { this.constraints.remove(e); };
        e.prototype.addint = function (e) { var t = null, n = this.listeners.head; for (; n != null;) {
            var r_95 = n.elt;
            if (e.precedence > r_95.precedence || e.precedence === r_95.precedence && e.id > r_95.id)
                break;
            t = n, n = n.next;
        } this.listeners.insert(t, e); var r = this.cbsets.head; for (; r != null;)
            r.elt.zip_listeners = !0, r.elt.invalidate_pairs(), r = r.next; };
        e.prototype.removeint = function (e) { this.listeners.remove(e); var t = this.cbsets.head; for (; t != null;)
            t.elt.zip_listeners = !0, t.elt.invalidate_pairs(), t = t.next; };
        e.prototype.addbody = function (e) { var t = null, n = this.bodylisteners.head; for (; n != null;) {
            var r_96 = n.elt;
            if (e.precedence > r_96.precedence || e.precedence === r_96.precedence && e.id > r_96.id)
                break;
            t = n, n = n.next;
        } this.bodylisteners.insert(t, e); var r = this.cbsets.head; for (; r != null;)
            r.elt.zip_bodylisteners = !0, r = r.next; };
        e.prototype.removebody = function (e) { this.bodylisteners.remove(e); var t = this.cbsets.head; for (; t != null;)
            t.elt.zip_bodylisteners = !0, t = t.next; };
        e.prototype.addconstraint = function (e) { var t = null, n = this.conlisteners.head; for (; n != null;) {
            var r_97 = n.elt;
            if (e.precedence > r_97.precedence || e.precedence === r_97.precedence && e.id > r_97.id)
                break;
            t = n, n = n.next;
        } this.conlisteners.insert(t, e); var r = this.cbsets.head; for (; r != null;)
            r.elt.zip_conlisteners = !0, r = r.next; };
        e.prototype.removeconstraint = function (e) { this.conlisteners.remove(e); var t = this.cbsets.head; for (; t != null;)
            t.elt.zip_conlisteners = !0, t = t.next; };
        return e;
    }()), Rr._zpp = null, Rr.ANY_SHAPE = null, Rr.ANY_BODY = null, Rr.ANY_COMPOUND = null, Rr.ANY_CONSTRAINT = null, zr = Rr, Br = (function () {
        function e() {
            this.zpp_inner = new zr, this.zpp_inner.outer = this;
        }
        Object.defineProperty(e, "ANY_BODY", {
            get: function () { return zr.ANY_BODY == null && (zr.ANY_BODY = new e), zr.ANY_BODY; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e, "ANY_CONSTRAINT", {
            get: function () { return zr.ANY_CONSTRAINT == null && (zr.ANY_CONSTRAINT = new e), zr.ANY_CONSTRAINT; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e, "ANY_SHAPE", {
            get: function () { return zr.ANY_SHAPE == null && (zr.ANY_SHAPE = new e), zr.ANY_SHAPE; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e, "ANY_COMPOUND", {
            get: function () { return zr.ANY_COMPOUND == null && (zr.ANY_COMPOUND = new e), zr.ANY_COMPOUND; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "id", {
            get: function () { return this.zpp_inner.id; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "userData", {
            get: function () { return this.zpp_inner.userData == null && (this.zpp_inner.userData = {}), this.zpp_inner.userData; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "interactors", {
            get: function () { return this.zpp_inner.wrap_interactors == null && (this.zpp_inner.wrap_interactors = Pr.get(this.zpp_inner.interactors, !0)), this.zpp_inner.wrap_interactors; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "constraints", {
            get: function () { return this.zpp_inner.wrap_constraints == null && (this.zpp_inner.wrap_constraints = Nr.get(this.zpp_inner.constraints, !0)), this.zpp_inner.wrap_constraints; },
            enumerable: false,
            configurable: true
        });
        e.prototype.including = function (e) { return new (d()).callbacks.OptionType(this).including(e); };
        e.prototype.excluding = function (e) { return new (d()).callbacks.OptionType(this).excluding(e); };
        e.prototype.toString = function () { return this === zr.ANY_BODY ? "ANY_BODY" : this === zr.ANY_SHAPE ? "ANY_SHAPE" : this === zr.ANY_COMPOUND ? "ANY_COMPOUND" : this === zr.ANY_CONSTRAINT ? "ANY_CONSTRAINT" : "CbType#" + this.zpp_inner.id; };
        e._wrap = function (t) { return t instanceof e ? t : t ? t instanceof zr ? v(t, function (t) { var n = Object.create(e.prototype); return n.zpp_inner = t, t.outer = n, n; }) : t.zpp_inner ? e._wrap(t.zpp_inner) : null : null; };
        return e;
    }()), Vr = d(), Vr.callbacks.CbType = Br, Hr = (function (_super) {
        __extends(e, _super);
        function e(e, t) {
            var _this = this;
            _this = _super.call(this) || this, _this.debugDraw = !0;
            var n = new Ar;
            _this.zpp_inner = n, n.outer = _this, n.outer_i = _this, _this.zpp_inner_i = n, t == null ? (n.posx = 0, n.posy = 0) : (b(t), n.posx = M(t), n.posy = N(t));
            var r = d(), i;
            if (i = e == null ? F("BodyType_DYNAMIC", function () { return new r.phys.BodyType; }) : e, n.immutable_midstep("Body::type"), n.world)
                throw Error("Space::world is immutable");
            if (j(n.type) !== i) {
                if (i == null)
                    throw Error("Cannot use null BodyType");
                var e_126 = ne(i, r);
                e_126 === 1 && n.space != null && (n.velx = 0, n.vely = 0, n.angvel = 0), n.invalidate_type(), n.space == null ? n.type = e_126 : n.space.transmitType(n, e_126);
            }
            t != null && y(t), n.insert_cbtype(Br.ANY_BODY.zpp_inner);
            return _this;
        }
        e._wrap = function (t) { return t ? t instanceof e ? t : t instanceof Ar ? v(t, function (t) { var n = Object.create(e.prototype); return n.zpp_inner = t, t.outer = n, t.outer_i = n, n.zpp_inner_i = t, n.debugDraw = !0, n; }) : t.zpp_inner ? e._wrap(t.zpp_inner) : v(t, function (t) { return Object.create(e.prototype); }) : null; };
        Object.defineProperty(e.prototype, "type", {
            get: function () { return j(this.zpp_inner.type); },
            set: function (e) { var t = this.zpp_inner; if (t.immutable_midstep("Body::type"), t.world)
                throw Error("Space::world is immutable"); if (j(t.type) !== e) {
                if (e == null)
                    throw Error("Cannot use null BodyType");
                var n_111 = ne(e, d());
                n_111 === 1 && t.space != null && (t.velx = 0, t.vely = 0, t.angvel = 0), t.invalidate_type(), t.space == null ? t.type = n_111 : t.space.transmitType(t, n_111);
            } },
            enumerable: false,
            configurable: true
        });
        e.prototype.isStatic = function () { return this.zpp_inner.type === 1; };
        e.prototype.isDynamic = function () { return this.zpp_inner.type === 2; };
        e.prototype.isKinematic = function () { return this.zpp_inner.type === 3; };
        Object.defineProperty(e.prototype, "position", {
            get: function () { return this.zpp_inner.wrap_pos == null && this.zpp_inner.setupPosition(), this.zpp_inner.wrap_pos; },
            set: function (e) { if (b(e), e == null)
                throw Error("Body::position cannot be null"); this.zpp_inner.wrap_pos == null && this.zpp_inner.setupPosition(), this.zpp_inner.wrap_pos.set(e); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "rotation", {
            get: function () { return this.zpp_inner.rot; },
            set: function (e) { var t = this.zpp_inner; if (t.immutable_midstep("Body::rotation"), t.world)
                throw Error("Space::world is immutable"); if (t.type === 1 && t.space != null)
                throw Error("Static objects cannot be rotated once inside a Space"); if (t.rot !== e) {
                if (e !== e)
                    throw Error("Body::rotation cannot be NaN");
                t.rot = e, t.invalidate_rot(), t.wake();
            } },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "velocity", {
            get: function () { return this.zpp_inner.wrap_vel == null && this.zpp_inner.setupVelocity(), this.zpp_inner.wrap_vel; },
            set: function (e) { if (b(e), e == null)
                throw Error("Body::velocity cannot be null"); this.zpp_inner.wrap_vel == null && this.zpp_inner.setupVelocity(), this.zpp_inner.wrap_vel.set(e); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "angularVel", {
            get: function () { return this.zpp_inner.angvel; },
            set: function (e) { var t = this.zpp_inner; if (t.world)
                throw Error("Space::world is immutable"); if (t.angvel !== e) {
                if (e !== e)
                    throw Error("Body::angularVel cannot be NaN");
                if (t.type === 1)
                    throw Error("A static object cannot be given a velocity");
                t.angvel = e, t.wake();
            } },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "kinematicVel", {
            get: function () { return this.zpp_inner.wrap_kinvel == null && this.zpp_inner.setupkinvel(), this.zpp_inner.wrap_kinvel; },
            set: function (e) { if (b(e), e == null)
                throw Error("Body::kinematicVel cannot be null"); this.zpp_inner.wrap_kinvel == null && this.zpp_inner.setupkinvel(), this.zpp_inner.wrap_kinvel.set(e); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "kinAngVel", {
            get: function () { return this.zpp_inner.kinangvel; },
            set: function (e) { var t = this.zpp_inner; if (t.world)
                throw Error("Space::world is immutable"); if (t.kinangvel !== e) {
                if (e !== e)
                    throw Error("Body::kinAngVel cannot be NaN");
                t.kinangvel = e, t.wake();
            } },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "surfaceVel", {
            get: function () { return this.zpp_inner.wrap_svel == null && this.zpp_inner.setupsvel(), this.zpp_inner.wrap_svel; },
            set: function (e) { if (b(e), e == null)
                throw Error("Body::surfaceVel cannot be null"); this.zpp_inner.wrap_svel == null && this.zpp_inner.setupsvel(), this.zpp_inner.wrap_svel.set(e); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "force", {
            get: function () { return this.zpp_inner.wrap_force == null && this.zpp_inner.setupForce(), this.zpp_inner.wrap_force; },
            set: function (e) { if (b(e), e == null)
                throw Error("Body::force cannot be null"); this.zpp_inner.wrap_force == null && this.zpp_inner.setupForce(), this.zpp_inner.wrap_force.set(e); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "torque", {
            get: function () { return this.zpp_inner.torque; },
            set: function (e) { var t = this.zpp_inner; if (t.world)
                throw Error("Space::world is immutable"); if (t.type !== 2)
                throw Error("Non-dynamic body cannot have torque applied."); if (e !== e)
                throw Error("Body::torque cannot be NaN"); t.torque !== e && (t.torque = e, t.wake()); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "mass", {
            get: function () { if (this.zpp_inner.world)
                throw Error("Space::world has no mass"); if (this.zpp_inner.validate_mass(), this.zpp_inner.massMode === 0 && this.zpp_inner.shapes.head == null)
                throw Error("Error: Given current mass mode, Body::mass only makes sense if it contains shapes"); return this.zpp_inner.cmass; },
            set: function (e) { if (this.zpp_inner.immutable_midstep("Body::mass"), this.zpp_inner.world)
                throw Error("Space::world is immutable"); if (e !== e)
                throw Error("Mass cannot be NaN"); if (e <= 0)
                throw Error("Mass must be strictly positive"); if (e >= 1 / 0)
                throw Error("Mass cannot be infinite, use allowMovement = false instead"); this.zpp_inner.massMode = 1, this.zpp_inner.cmass = e, this.zpp_inner.invalidate_mass(); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "inertia", {
            get: function () { if (this.zpp_inner.world)
                throw Error("Space::world has no inertia"); if (this.zpp_inner.validate_inertia(), this.zpp_inner.inertiaMode === 0 && this.zpp_inner.shapes.head == null)
                throw Error("Error: Given current inertia mode flag, Body::inertia only makes sense if Body contains Shapes"); return this.zpp_inner.cinertia; },
            set: function (e) { if (this.zpp_inner.immutable_midstep("Body::inertia"), this.zpp_inner.world)
                throw Error("Space::world is immutable"); if (e !== e)
                throw Error("Inertia cannot be NaN"); if (e <= 0)
                throw Error("Inertia must be strictly positive"); if (e >= 1 / 0)
                throw Error("Inertia cannot be infinite, use allowRotation = false instead"); this.zpp_inner.inertiaMode = 1, this.zpp_inner.cinertia = e, this.zpp_inner.invalidate_inertia(); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "constraintMass", {
            get: function () { return this.zpp_inner.world || this.zpp_inner.validate_mass(), this.zpp_inner.smass; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "constraintInertia", {
            get: function () { return this.zpp_inner.world || this.zpp_inner.validate_inertia(), this.zpp_inner.sinertia; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "gravMass", {
            get: function () { if (this.zpp_inner.world)
                throw Error("Space::world has no gravMass"); if (this.zpp_inner.validate_gravMass(), this.zpp_inner.shapes.head == null && this.zpp_inner.massMode === 0 && this.zpp_inner.gravMassMode !== 1)
                throw Error("Error: Given current mass/gravMass modes; Body::gravMass only makes sense if it contains Shapes"); return this.zpp_inner.gravMass; },
            set: function (e) { if (this.zpp_inner.immutable_midstep("Body::gravMass"), this.zpp_inner.world)
                throw Error("Space::world is immutable"); if (e !== e)
                throw Error("gravMass cannot be NaN"); this.zpp_inner.gravMassMode = 1, this.zpp_inner.gravMass = e, this.zpp_inner.invalidate_gravMass(); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "gravMassScale", {
            get: function () { if (this.zpp_inner.validate_gravMassScale(), this.zpp_inner.shapes.head == null && this.zpp_inner.massMode === 0 && this.zpp_inner.gravMassMode !== 2)
                throw Error("Error: Given current mass/gravMass modes; Body::gravMassScale only makes sense if it contains Shapes"); return this.zpp_inner.gravMassScale; },
            set: function (e) { if (this.zpp_inner.immutable_midstep("Body::gravMassScale"), this.zpp_inner.world)
                throw Error("Space::world is immutable"); if (e !== e)
                throw Error("gravMassScale cannot be NaN"); this.zpp_inner.gravMassMode = 2, this.zpp_inner.gravMassScale = e, this.zpp_inner.invalidate_gravMassScale(); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "isBullet", {
            get: function () { return this.zpp_inner.bulletEnabled; },
            set: function (e) { this.zpp_inner.bulletEnabled = e; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "disableCCD", {
            get: function () { return this.zpp_inner.disableCCD; },
            set: function (e) { this.zpp_inner.disableCCD = e; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "allowMovement", {
            get: function () { return !this.zpp_inner.nomove; },
            set: function (e) { this.zpp_inner.immutable_midstep("Body::" + (e == null ? "null" : "" + e)), !this.zpp_inner.nomove !== e && (this.zpp_inner.nomove = !e, this.zpp_inner.invalidate_mass()); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "allowRotation", {
            get: function () { return !this.zpp_inner.norotate; },
            set: function (e) { this.zpp_inner.immutable_midstep("Body::" + (e == null ? "null" : "" + e)), !this.zpp_inner.norotate !== e && (this.zpp_inner.norotate = !e, this.zpp_inner.invalidate_inertia()); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "isSleeping", {
            get: function () { if (this.zpp_inner.space == null)
                throw Error("Error: isSleeping makes no sense if the object is not contained within a Space"); return this.zpp_inner.component.sleeping; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "shapes", {
            get: function () { return this.zpp_inner.wrap_shapes; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "constraints", {
            get: function () { return this._getConstraints(); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "arbiters", {
            get: function () { return this._getArbiters(); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "space", {
            get: function () { return this.zpp_inner.space == null ? null : xi._wrap(this.zpp_inner.space.outer); },
            set: function (e) { var t = e == null ? null : e; if (this.zpp_inner.compound != null)
                throw Error("Error: Cannot set the space of a Body belonging to a Compound, only the root Compound space can be set"); if (this.zpp_inner.immutable_midstep("Body::space"), this.zpp_inner.world)
                throw Error("Space::world is immutable"); var n = this.zpp_inner.space == null ? null : this.zpp_inner.space.outer; if (n !== t && (n != null && (this.zpp_inner.component.woken = !1, n.zpp_inner.wrap_bodies.remove(this)), t != null)) {
                var e_127 = t.zpp_inner.wrap_bodies;
                e_127.zpp_inner.reverse_flag ? e_127.push(this) : e_127.unshift(this);
            } },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "compound", {
            get: function () { return this.zpp_inner.compound == null ? null : this.zpp_inner.compound.outer; },
            set: function (e) { var t = this.zpp_inner.compound == null ? null : this.zpp_inner.compound.outer; if (t !== e && (t == null || t.zpp_inner.wrap_bodies.remove(this), e != null)) {
                var t_150 = e.zpp_inner.wrap_bodies;
                t_150.zpp_inner.reverse_flag ? t_150.push(this) : t_150.unshift(this);
            } },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "bounds", {
            get: function () { if (this.zpp_inner.world)
                throw Error("Space::world has no bounds"); return jn._wrap(this.zpp_inner.aabb.wrapper()); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "constraintVelocity", {
            get: function () { return this.zpp_inner.wrapcvel == null && this.zpp_inner.setup_cvel(), this.zpp_inner.wrapcvel; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "localCOM", {
            get: function () {
                var _this = this;
                if (this.zpp_inner.world)
                    throw Error("Space::world has no localCOM");
                if (this.zpp_inner.wrap_localCOM == null) {
                    var e_128 = Sn.get(this.zpp_inner.localCOMx, this.zpp_inner.localCOMy);
                    this.zpp_inner.wrap_localCOM = e_128, e_128.zpp_inner._inuse = !0, e_128.zpp_inner._immutable = !0, e_128.zpp_inner._validate = function () { return _this.zpp_inner.getlocalCOM(); };
                }
                return this.zpp_inner.wrap_localCOM;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "worldCOM", {
            get: function () {
                var _this = this;
                if (this.zpp_inner.world)
                    throw Error("Space::world has no worldCOM");
                if (this.zpp_inner.wrap_worldCOM == null) {
                    var e_129 = Sn.get(this.zpp_inner.worldCOMx, this.zpp_inner.worldCOMy);
                    this.zpp_inner.wrap_worldCOM = e_129, e_129.zpp_inner._inuse = !0, e_129.zpp_inner._immutable = !0, e_129.zpp_inner._validate = function () { return _this.zpp_inner.getworldCOM(); };
                }
                return this.zpp_inner.wrap_worldCOM;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "massMode", {
            get: function () { var e = d(); return [F("MassMode_DEFAULT", function () { return new e.phys.MassMode; }), F("MassMode_FIXED", function () { return new e.phys.MassMode; })][this.zpp_inner.massMode]; },
            set: function (e) { var t = d(); if (this.zpp_inner.immutable_midstep("Body::massMode"), this.zpp_inner.world)
                throw Error("Space::world is immutable"); if (e == null)
                throw Error("cannot use null massMode"); var n = F("MassMode_DEFAULT", function () { return new t.phys.MassMode; }); this.zpp_inner.massMode = e === n ? 0 : 1, this.zpp_inner.invalidate_mass(); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "inertiaMode", {
            get: function () { var e = d(); return [F("InertiaMode_DEFAULT", function () { return new e.phys.InertiaMode; }), F("InertiaMode_FIXED", function () { return new e.phys.InertiaMode; })][this.zpp_inner.inertiaMode]; },
            set: function (e) { var t = d(); if (this.zpp_inner.immutable_midstep("Body::inertiaMode"), this.zpp_inner.world)
                throw Error("Space::world is immutable"); if (e == null)
                throw Error("Cannot use null InertiaMode"); var n = F("InertiaMode_FIXED", function () { return new t.phys.InertiaMode; }); this.zpp_inner.inertiaMode = +(e === n), this.zpp_inner.invalidate_inertia(); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "gravMassMode", {
            get: function () { var e = d(); return [F("GravMassMode_DEFAULT", function () { return new e.phys.GravMassMode; }), F("GravMassMode_FIXED", function () { return new e.phys.GravMassMode; }), F("GravMassMode_SCALED", function () { return new e.phys.GravMassMode; })][this.zpp_inner.gravMassMode]; },
            set: function (e) { var t = d(); if (this.zpp_inner.immutable_midstep("Body::gravMassMode"), this.zpp_inner.world)
                throw Error("Space::world is immutable"); if (e == null)
                throw Error("Cannot use null gravMassMode"); if (e === F("GravMassMode_SCALED", function () { return new t.phys.GravMassMode; }))
                this.zpp_inner.gravMassMode = 2;
            else {
                var n_112 = F("GravMassMode_DEFAULT", function () { return new t.phys.GravMassMode; });
                this.zpp_inner.gravMassMode = e === n_112 ? 0 : 1;
            } this.zpp_inner.invalidate_gravMass(); },
            enumerable: false,
            configurable: true
        });
        e.prototype.copy = function () { if (this.zpp_inner.world)
            throw Error("Space::world cannot be copied"); return this.zpp_inner.copy(); };
        e.prototype.toString = function () { var e = this.zpp_inner; return (e.world ? "(space::world" : "(" + (e.type === 2 ? "dynamic" : e.type === 1 ? "static" : "kinematic")) + ")#" + this.zpp_inner_i.id; };
        e.prototype.integrate = function (e) { if (e !== e)
            throw Error("Cannot integrate by NaN time"); if (this.zpp_inner.immutable_midstep("Body::space"), this.zpp_inner.world)
            throw Error("Space::world is immutable"); if (e === 0)
            return this; var t = this.zpp_inner; t.sweepTime = 0, t.sweep_angvel = t.angvel; var n = e - t.sweepTime; if (n !== 0 && (t.sweepTime = e, t.posx += t.velx * n, t.posy += t.vely * n, t.angvel !== 0)) {
            var e_130 = t.sweep_angvel * n;
            if (t.rot += e_130, e_130 * e_130 > 1e-4)
                t.axisx = Math.sin(t.rot), t.axisy = Math.cos(t.rot);
            else {
                var n_113 = e_130 * e_130, r_98 = 1 - .5 * n_113, i_64 = 1 - n_113 * n_113 / 8, a_54 = (r_98 * t.axisx + e_130 * t.axisy) * i_64;
                t.axisy = (r_98 * t.axisy - e_130 * t.axisx) * i_64, t.axisx = a_54;
            }
        } return I(t), t.zip_worldCOM = !0, t.zip_axis = !0, I(t), t.zip_worldCOM = !0, t.sweepTime = 0, this; };
        e.prototype.localPointToWorld = function (e, t) {
            if (t === void 0) { t = !1; }
            if (b(e), e == null)
                throw Error("Cannot transform null Vec2");
            this.zpp_inner.validate_axis();
            var n = M(e), r = N(e), i = this.zpp_inner.axisy * n - this.zpp_inner.axisx * r, a = n * this.zpp_inner.axisx + r * this.zpp_inner.axisy;
            return y(e), P(i + this.zpp_inner.posx, a + this.zpp_inner.posy, t);
        };
        e.prototype.worldPointToLocal = function (e, t) {
            if (t === void 0) { t = !1; }
            if (b(e), e == null)
                throw Error("Cannot transform null Vec2");
            this.zpp_inner.validate_axis();
            var n = M(e) - this.zpp_inner.posx, r = N(e) - this.zpp_inner.posy, i = n * this.zpp_inner.axisy + r * this.zpp_inner.axisx, a = r * this.zpp_inner.axisy - n * this.zpp_inner.axisx;
            return y(e), P(i, a, t);
        };
        e.prototype.localVectorToWorld = function (e, t) {
            if (t === void 0) { t = !1; }
            if (b(e), e == null)
                throw Error("Cannot transform null Vec2");
            this.zpp_inner.validate_axis();
            var n = M(e), r = N(e), i = this.zpp_inner.axisy * n - this.zpp_inner.axisx * r, a = n * this.zpp_inner.axisx + r * this.zpp_inner.axisy;
            return y(e), P(i, a, t);
        };
        e.prototype.worldVectorToLocal = function (e, t) {
            if (t === void 0) { t = !1; }
            if (b(e), e == null)
                throw Error("Cannot transform null Vec2");
            this.zpp_inner.validate_axis();
            var n = M(e), r = N(e), i = n * this.zpp_inner.axisy + r * this.zpp_inner.axisx, a = r * this.zpp_inner.axisy - n * this.zpp_inner.axisx;
            return y(e), P(i, a, t);
        };
        e.prototype.applyImpulse = function (e, t, n) {
            if (n === void 0) { n = !1; }
            if (b(e), t != null && b(t), this.zpp_inner.world)
                throw Error("Space::world is immutable");
            if (e == null)
                throw Error("Cannot apply null impulse to Body");
            if (n && this.isSleeping)
                return y(e), t != null && y(t), this;
            this.zpp_inner.validate_mass();
            var r = this.zpp_inner.imass, i = M(e), a = N(e);
            if (this.zpp_inner.velx += i * r, this.zpp_inner.vely += a * r, t != null) {
                var e_131 = M(t) - this.zpp_inner.posx, n_114 = N(t) - this.zpp_inner.posy;
                this.zpp_inner.validate_inertia(), this.zpp_inner.angvel += (a * e_131 - i * n_114) * this.zpp_inner.iinertia, y(t);
            }
            return n || this.zpp_inner.type === 2 && this.zpp_inner.wake(), y(e), this;
        };
        e.prototype.applyAngularImpulse = function (e, t) {
            if (t === void 0) { t = !1; }
            if (this.zpp_inner.world)
                throw Error("Space::world is immutable");
            return t && this.isSleeping || (this.zpp_inner.validate_inertia(), this.zpp_inner.angvel += e * this.zpp_inner.iinertia, t || this.zpp_inner.type === 2 && this.zpp_inner.wake()), this;
        };
        e.prototype.setVelocityFromTarget = function (e, t, n) { if (b(e), e == null)
            throw Error("Cannot set velocity for null target position"); if (n === 0)
            throw Error("deltaTime cannot be 0 for setVelocityFromTarget"); var r = 1 / n; this.zpp_inner.wrap_vel == null && this.zpp_inner.setupVelocity(), this.zpp_inner.wrap_pos == null && this.zpp_inner.setupPosition(); var i = e.sub(this.zpp_inner.wrap_pos, !0).muleq(r); this.zpp_inner.wrap_vel.set(i); var a = (t - this.zpp_inner.rot) * r; if (this.zpp_inner.world)
            throw Error("Space::world is immutable"); if (this.zpp_inner.angvel !== a) {
            if (a !== a)
                throw Error("Body::angularVel cannot be NaN");
            if (this.zpp_inner.type === 1)
                throw Error("A static object cannot be given a velocity");
            this.zpp_inner.angvel = a, this.zpp_inner.wake();
        } return y(e), this; };
        e.prototype.translateShapes = function (e) { if (this.zpp_inner.immutable_midstep("Body::translateShapes()"), b(e), this.zpp_inner.world)
            throw Error("Space::world is immutable"); if (e == null)
            throw Error("Cannot displace by null Vec2"); var t = e.zpp_inner.weak; e.zpp_inner.weak = !1; var n = this.zpp_inner.shapes.head; for (; n != null;)
            n.elt.outer.translate(e), n = n.next; return e.zpp_inner.weak = t, y(e), this; };
        e.prototype.rotateShapes = function (e) { if (this.zpp_inner.immutable_midstep("Body::rotateShapes()"), this.zpp_inner.world)
            throw Error("Space::world is immutable"); var t = this.zpp_inner.shapes.head; for (; t != null;)
            t.elt.outer.rotate(e), t = t.next; return this; };
        e.prototype.scaleShapes = function (e, t) { if (this.zpp_inner.immutable_midstep("Body::scaleShapes()"), this.zpp_inner.world)
            throw Error("Space::world is immutable"); var n = this.zpp_inner.shapes.head; for (; n != null;)
            n.elt.outer.scale(e, t), n = n.next; return this; };
        e.prototype.transformShapes = function (e) { if (this.zpp_inner.immutable_midstep("Body::transformShapes()"), this.zpp_inner.world)
            throw Error("Space::world is immutable"); var t = this.zpp_inner.shapes.head; for (; t != null;)
            t.elt.outer.transform(e), t = t.next; return this; };
        e.prototype.align = function () { if (this.zpp_inner.immutable_midstep("Body::align()"), this.zpp_inner.world)
            throw Error("Space::world is immutable"); if (this.zpp_inner.shapes.head == null)
            throw Error("Cannot align empty Body"); this.zpp_inner.validate_localCOM(); var e = Sn.get(-this.zpp_inner.localCOMx, -this.zpp_inner.localCOMy); this.translateShapes(e); var t = this.localVectorToWorld(e); return this.zpp_inner.wrap_pos == null && this.zpp_inner.setupPosition(), this.zpp_inner.wrap_pos.subeq(t), this.zpp_inner.pre_posx < 1 / 0 && (this.zpp_inner.pre_posx -= M(t), this.zpp_inner.pre_posy -= N(t)), e.dispose(), t.dispose(), this; };
        e.prototype.rotate = function (e, t) { if (b(e), e == null)
            throw Error("Cannot rotate about a null Vec2"); if (t !== t)
            throw Error("Cannot rotate by NaN radians"); var n = e.zpp_inner.weak; e.zpp_inner.weak = !1, this.zpp_inner.wrap_pos == null && this.zpp_inner.setupPosition(); var r = this.zpp_inner.wrap_pos.sub(e); r.rotate(t); var i = e.add(r, !0); if (b(i), i == null)
            throw Error("Body::position cannot be null"); this.zpp_inner.wrap_pos == null && this.zpp_inner.setupPosition(), this.zpp_inner.wrap_pos.set(i), r.dispose(); {
            var e_132 = this.zpp_inner.rot + t, n_115 = this.zpp_inner;
            if (n_115.immutable_midstep("Body::rotation"), n_115.world)
                throw Error("Space::world is immutable");
            if (n_115.type === 1 && n_115.space != null)
                throw Error("Static objects cannot be rotated once inside a Space");
            if (n_115.rot !== e_132) {
                if (e_132 !== e_132)
                    throw Error("Body::rotation cannot be NaN");
                n_115.rot = e_132, n_115.invalidate_rot(), n_115.wake();
            }
        } return e.zpp_inner.weak = n, y(e), this; };
        e.prototype.setShapeMaterials = function (e) { if (this.zpp_inner.immutable_midstep("Body::setShapeMaterials()"), this.zpp_inner.world)
            throw Error("Space::world is immutable"); var t = this.zpp_inner.shapes.head; for (; t != null;) {
            var n_116 = t.elt.outer;
            if (n_116.zpp_inner.immutable_midstep("Shape::material"), e == null)
                throw Error("Cannot assign null as Shape material");
            n_116.zpp_inner.setMaterial(e.zpp_inner), n_116.zpp_inner.material.wrapper(), t = t.next;
        } return this; };
        e.prototype.setShapeFilters = function (e) { if (this.zpp_inner.immutable_midstep("Body::setShapeFilters()"), this.zpp_inner.world)
            throw Error("Space::world is immutable"); var t = this.zpp_inner.shapes.head; for (; t != null;) {
            var n_117 = t.elt.outer;
            if (n_117.zpp_inner.immutable_midstep("Shape::filter"), e == null)
                throw Error("Cannot assign null as Shape filter");
            n_117.zpp_inner.setFilter(e.zpp_inner), n_117.zpp_inner.filter.wrapper(), t = t.next;
        } return this; };
        e.prototype.setShapeFluidProperties = function (e) { if (this.zpp_inner.immutable_midstep("Body::setShapeFluidProperties()"), this.zpp_inner.world)
            throw Error("Space::world is immutable"); var t = d(), n = this.zpp_inner.shapes.head; for (; n != null;) {
            var r_99 = n.elt.outer;
            if (e == null)
                throw Error("Error: Cannot assign null as Shape fluidProperties, disable fluids by setting fluidEnabled to false");
            r_99.zpp_inner.setFluid(e.zpp_inner), r_99.zpp_inner.immutable_midstep("Shape::fluidProperties"), r_99.zpp_inner.fluidProperties == null && r_99.zpp_inner.setFluid(new t.phys.FluidProperties().zpp_inner), r_99.zpp_inner.fluidProperties.wrapper(), n = n.next;
        } return this; };
        e.prototype.contains = function (e) { if (b(e), e == null)
            throw Error("Cannot check containment of null point"); var t = e.zpp_inner.weak; e.zpp_inner.weak = !1; var n = !1, r = this.zpp_inner.shapes.head; for (; r != null;) {
            if (r.elt.outer.contains(e)) {
                n = !0;
                break;
            }
            r = r.next;
        } return e.zpp_inner.weak = t, y(e), n; };
        e.prototype.connectedBodies = function (e, t) {
            if (e === void 0) { e = -1; }
            if (t === void 0) { t = null; }
            return this.zpp_inner.connectedBodies(e, t);
        };
        e.prototype.interactingBodies = function (e, t, n) {
            if (e === void 0) { e = null; }
            if (t === void 0) { t = -1; }
            if (n === void 0) { n = null; }
            var r;
            if (e == null)
                r = Y.COL | Y.SENSOR | Y.FLUID;
            else {
                var t_151 = d();
                r = e === F("InteractionType_COLLISION", function () { return new t_151.callbacks.InteractionType; }) ? Y.COL : e === F("InteractionType_SENSOR", function () { return new t_151.callbacks.InteractionType; }) ? Y.SENSOR : Y.FLUID;
            }
            return this.zpp_inner.interactingBodies(r, t, n);
        };
        e.prototype.normalImpulse = function (e, t) {
            var _this = this;
            if (e === void 0) { e = null; }
            if (t === void 0) { t = !1; }
            return this._arbiterImpulseQuery(Y.COL, function (e) { return e.collisionArbiter.normalImpulse(_this, t); }, e);
        };
        e.prototype.tangentImpulse = function (e, t) {
            var _this = this;
            if (e === void 0) { e = null; }
            if (t === void 0) { t = !1; }
            return this._arbiterImpulseQuery(Y.COL, function (e) { return e.collisionArbiter.tangentImpulse(_this, t); }, e);
        };
        e.prototype.totalContactsImpulse = function (e, t) {
            var _this = this;
            if (e === void 0) { e = null; }
            if (t === void 0) { t = !1; }
            return this._arbiterImpulseQuery(Y.COL, function (e) { return e.collisionArbiter.totalImpulse(_this, t); }, e);
        };
        e.prototype.rollingImpulse = function (e, t) {
            if (e === void 0) { e = null; }
            if (t === void 0) { t = !1; }
            var n = 0, r = this._getArbiters().iterator();
            for (;;) {
                r.zpp_inner.zpp_inner.valmod();
                var i_65 = r.zpp_inner.zpp_gl();
                if (r.zpp_critical = !0, r.zpp_i >= i_65) {
                    r.zpp_next = gn.zpp_pool, gn.zpp_pool = r, r.zpp_inner = null;
                    break;
                }
                r.zpp_critical = !1;
                var a_55 = r.zpp_inner.at(r.zpp_i++), o_40 = a_55.zpp_inner;
                o_40.type === Y.COL && (e != null && o_40.b2 !== e.zpp_inner && o_40.b1 !== e.zpp_inner || (n += a_55.collisionArbiter.rollingImpulse(this, t)));
            }
            return n;
        };
        e.prototype.buoyancyImpulse = function (e) {
            var _this = this;
            if (e === void 0) { e = null; }
            return this._arbiterImpulseQuery(Y.FLUID, function (e) { return e.fluidArbiter.buoyancyImpulse(_this); }, e);
        };
        e.prototype.dragImpulse = function (e) {
            var _this = this;
            if (e === void 0) { e = null; }
            return this._arbiterImpulseQuery(Y.FLUID, function (e) { return e.fluidArbiter.dragImpulse(_this); }, e);
        };
        e.prototype.totalFluidImpulse = function (e) {
            var _this = this;
            if (e === void 0) { e = null; }
            return this._arbiterImpulseQuery(Y.FLUID, function (e) { return e.fluidArbiter.totalImpulse(_this); }, e);
        };
        e.prototype.constraintsImpulse = function () { var e = 0, t = 0, n = 0, r = this.zpp_inner.constraints.head; for (; r != null;) {
            var i_66 = r.elt.outer.bodyImpulse(this), a_56 = i_66.zpp_inner;
            a_56._validate != null && a_56._validate(), e += a_56.x, a_56._validate != null && a_56._validate(), t += a_56.y, a_56._validate != null && a_56._validate(), n += a_56.z, i_66.dispose(), r = r.next;
        } return En.get(e, t, n); };
        e.prototype.totalImpulse = function (e, t) {
            if (e === void 0) { e = null; }
            if (t === void 0) { t = !1; }
            var n = 0, r = 0, i = 0, a = this._getArbiters().iterator();
            for (;;) {
                a.zpp_inner.zpp_inner.valmod();
                var o_41 = a.zpp_inner.zpp_gl();
                if (a.zpp_critical = !0, a.zpp_i >= o_41) {
                    a.zpp_next = gn.zpp_pool, gn.zpp_pool = a, a.zpp_inner = null;
                    break;
                }
                a.zpp_critical = !1;
                var s_34 = a.zpp_inner.at(a.zpp_i++).zpp_inner;
                if (s_34.type === Y.SENSOR || e != null && s_34.b2 !== e.zpp_inner && s_34.b1 !== e.zpp_inner)
                    continue;
                var c_24 = s_34.wrapper().totalImpulse(this, t), l_17 = c_24.zpp_inner;
                l_17._validate != null && l_17._validate(), n += l_17.x, l_17._validate != null && l_17._validate(), r += l_17.y, l_17._validate != null && l_17._validate(), i += l_17.z, c_24.dispose();
            }
            var o = this.zpp_inner.constraints.head;
            for (; o != null;) {
                var e_133 = o.elt;
                if (e_133.outer.active) {
                    var t_152 = e_133.outer.bodyImpulse(this), a_57 = t_152.zpp_inner;
                    a_57._validate != null && a_57._validate(), n += a_57.x, a_57._validate != null && a_57._validate(), r += a_57.y, a_57._validate != null && a_57._validate(), i += a_57.z, t_152.dispose();
                }
                o = o.next;
            }
            return En.get(n, r, i);
        };
        e.prototype.crushFactor = function () { if (this.zpp_inner.space == null)
            throw Error("Error: Makes no sense to see how much an object not taking part in a simulation is being crushed"); var e = 0, t = Sn.get(0, 0), n = this._getArbiters().iterator(); for (;;) {
            n.zpp_inner.zpp_inner.valmod();
            var r_100 = n.zpp_inner.zpp_gl();
            if (n.zpp_critical = !0, n.zpp_i >= r_100) {
                n.zpp_next = gn.zpp_pool, gn.zpp_pool = n, n.zpp_inner = null;
                break;
            }
            n.zpp_critical = !1;
            var i_67 = n.zpp_inner.at(n.zpp_i++).totalImpulse(this), a_58 = i_67.xy();
            t.addeq(a_58);
            var o_42 = M(a_58), s_35 = N(a_58);
            e += Math.sqrt(o_42 * o_42 + s_35 * s_35), a_58.dispose(), i_67.dispose();
        } var r = this._getConstraints(); r.zpp_inner.valmod(); var i = cn.get(r); for (;;) {
            i.zpp_inner.zpp_inner.valmod();
            var n_118 = i.zpp_inner;
            n_118.zpp_inner.valmod(), n_118.zpp_inner.zip_length && (n_118.zpp_inner.zip_length = !1, n_118.zpp_inner.user_length = n_118.zpp_inner.inner.length);
            var r_101 = n_118.zpp_inner.user_length;
            if (i.zpp_critical = !0, i.zpp_i >= r_101) {
                i.zpp_next = cn.zpp_pool, cn.zpp_pool = i, i.zpp_inner = null;
                break;
            }
            i.zpp_critical = !1;
            var a_59 = i.zpp_inner.at(i.zpp_i++).bodyImpulse(this), o_43 = a_59.xy();
            t.addeq(o_43);
            var s_36 = M(o_43), c_25 = N(o_43);
            e += Math.sqrt(s_36 * s_36 + c_25 * c_25), o_43.dispose(), a_59.dispose();
        } var a = M(t), o = N(t), s = Math.sqrt(a * a + o * o), c = this.mass, l = (e - s) / (c * this.zpp_inner.space.pre_dt); return t.dispose(), l; };
        e.prototype._getArbiters = function () { return this.zpp_inner.wrap_arbiters == null && (this.zpp_inner.wrap_arbiters = Lr.get(this.zpp_inner.arbiters, !0)), this.zpp_inner.wrap_arbiters; };
        e.prototype._getConstraints = function () { return this.zpp_inner.wrap_constraints == null && (this.zpp_inner.wrap_constraints = Nr.get(this.zpp_inner.constraints, !0)), this.zpp_inner.wrap_constraints; };
        e.prototype._arbiterImpulseQuery = function (e, t, n) { var r = 0, i = 0, a = 0, o = this._getArbiters().iterator(); for (;;) {
            o.zpp_inner.zpp_inner.valmod();
            var s_37 = o.zpp_inner.zpp_gl();
            if (o.zpp_critical = !0, o.zpp_i >= s_37) {
                o.zpp_next = gn.zpp_pool, gn.zpp_pool = o, o.zpp_inner = null;
                break;
            }
            o.zpp_critical = !1;
            var c_26 = o.zpp_inner.at(o.zpp_i++), l_18 = c_26.zpp_inner;
            if (l_18.type !== e || n != null && l_18.b2 !== n.zpp_inner && l_18.b1 !== n.zpp_inner)
                continue;
            var u_15 = t(c_26), d_9 = u_15.zpp_inner;
            d_9._validate != null && d_9._validate(), r += d_9.x, d_9._validate != null && d_9._validate(), i += d_9.y, d_9._validate != null && d_9._validate(), a += d_9.z, u_15.dispose();
        } return En.get(r, i, a); };
        return e;
    }(xr)), Ur = d(), Ur.phys.Body = Hr, O(function (e) { return Hr._wrap(e); }), Wr = (function () {
        function Wr() {
            this.length = 0, this.pushmod = !1, this.modified = !1, this._inuse = !1, this.next = null, this.r1x = 0, this.r1y = 0, this.r2x = 0, this.r2y = 0, this.nMass = 0, this.tMass = 0, this.bounce = 0, this.friction = 0, this.jnAcc = 0, this.jtAcc = 0, this.lr1x = 0, this.lr1y = 0, this.lr2x = 0, this.lr2y = 0;
        }
        Wr.prototype.add = function (e) { e._inuse = !0; var t = e; return t.next = this.next, this.next = t, this.modified = !0, this.length++, e; };
        Wr.prototype.insert = function (e, t) { t._inuse = !0; var n = t; return e == null ? (n.next = this.next, this.next = n) : (n.next = e.next, e.next = n), this.pushmod = this.modified = !0, this.length++, n; };
        Wr.prototype.pop = function () { var e = this.next; this.next = e.next, e._inuse = !1, this.next == null && (this.pushmod = !0), this.modified = !0, this.length--; };
        Wr.prototype.pop_unsafe = function () { var e = this.next; return this.pop(), e; };
        Wr.prototype.remove = function (e) { var t = null, n = this.next; for (; n != null;) {
            if (n == e) {
                var e_134 = void 0, n_119 = void 0;
                t == null ? (e_134 = this.next, n_119 = e_134.next, this.next = n_119, this.next == null && (this.pushmod = !0)) : (e_134 = t.next, n_119 = e_134.next, t.next = n_119, n_119 == null && (this.pushmod = !0)), e_134._inuse = !1, this.modified = !0, this.length--, this.pushmod = !0;
                break;
            }
            t = n, n = n.next;
        } };
        Wr.prototype.erase = function (e) { var t, n; return e == null ? (t = this.next, n = t.next, this.next = n, this.next == null && (this.pushmod = !0)) : (t = e.next, n = t.next, e.next = n, n == null && (this.pushmod = !0)), t._inuse = !1, this.modified = !0, this.length--, this.pushmod = !0, n; };
        Wr.prototype.clear = function () { };
        Wr.prototype.reverse = function () { var e = this.next, t = null; for (; e != null;) {
            var n_120 = e.next;
            e.next = t, this.next = e, t = e, e = n_120;
        } this.modified = !0, this.pushmod = !0; };
        Wr.prototype.empty = function () { return this.next == null; };
        Wr.prototype.has = function (e) { var t = !1, n = this.next; for (; n != null;) {
            if (n == e) {
                t = !0;
                break;
            }
            n = n.next;
        } return t; };
        Wr.prototype.iterator_at = function (e) { var t = this.next; for (; e-- > 0 && t != null;)
            t = t.next; return t; };
        Wr.prototype.at = function (e) { var t = this.iterator_at(e); return t == null ? null : t; };
        return Wr;
    }()), Gr = (function () {
        function e() {
            this.outer = null, this.px = 0, this.py = 0, this.wrap_position = null, this.arbiter = null, this.active = !1, this.posOnly = !1, this.stamp = 0, this.hash = 0, this.fresh = !1, this.dist = 0, this.elasticity = 0, this.length = 0, this.pushmod = !1, this.modified = !1, this._inuse = !1, this.next = null, this.length = 0, this.pushmod = !1, this.modified = !1, this._inuse = !1, this.next = null, this.elasticity = 0, this.dist = 0, this.fresh = !1, this.hash = 0, this.stamp = 0, this.posOnly = !1, this.active = !1, this.inner = null, this.arbiter = null, this.wrap_position = null, this.py = 0, this.px = 0, this.outer = null, this.inner = new Wr;
        }
        e.prototype.wrapper = function () { return this.outer == null && (this.outer = e._wrapFn(this)), this.outer; };
        e.prototype.position_validate = function () { if (this.inactiveme())
            throw Error("Contact not currently in use"); this.wrap_position.zpp_inner.x = this.px, this.wrap_position.zpp_inner.y = this.py; };
        e.prototype.getposition = function () { var t = e._nape.geom.Vec2.get(0, 0); this.wrap_position = t, this.wrap_position.zpp_inner._inuse = !0, this.wrap_position.zpp_inner._immutable = !0, this.wrap_position.zpp_inner._validate = this.position_validate.bind(this); };
        e.prototype.inactiveme = function () { return !(this.active && this.arbiter != null && this.arbiter.active); };
        e.prototype.free = function () { this.arbiter = null; };
        e.prototype.add = function (e) { e._inuse = !0; var t = e; return t.next = this.next, this.next = t, this.modified = !0, this.length++, e; };
        e.prototype.insert = function (e, t) { t._inuse = !0; var n = t; return e == null ? (n.next = this.next, this.next = n) : (n.next = e.next, e.next = n), this.pushmod = this.modified = !0, this.length++, n; };
        e.prototype.pop = function () { var e = this.next; this.next = e.next, e._inuse = !1, this.next == null && (this.pushmod = !0), this.modified = !0, this.length--; };
        e.prototype.pop_unsafe = function () { var e = this.next; return this.pop(), e; };
        e.prototype.remove = function (e) { var t = null, n = this.next; for (; n != null;) {
            if (n == e) {
                var e_135 = void 0, n_121 = void 0;
                t == null ? (e_135 = this.next, n_121 = e_135.next, this.next = n_121, this.next == null && (this.pushmod = !0)) : (e_135 = t.next, n_121 = e_135.next, t.next = n_121, n_121 == null && (this.pushmod = !0)), e_135._inuse = !1, this.modified = !0, this.length--, this.pushmod = !0;
                break;
            }
            t = n, n = n.next;
        } };
        e.prototype.erase = function (e) { var t, n; return e == null ? (t = this.next, n = t.next, this.next = n, this.next == null && (this.pushmod = !0)) : (t = e.next, n = t.next, e.next = n, n == null && (this.pushmod = !0)), t._inuse = !1, this.modified = !0, this.length--, this.pushmod = !0, n; };
        e.prototype.clear = function () { };
        e.prototype.reverse = function () { var e = this.next, t = null; for (; e != null;) {
            var n_122 = e.next;
            e.next = t, this.next = e, t = e, e = n_122;
        } this.modified = !0, this.pushmod = !0; };
        e.prototype.empty = function () { return this.next == null; };
        e.prototype.has = function (e) { var t = !1, n = this.next; for (; n != null;) {
            if (n == e) {
                t = !0;
                break;
            }
            n = n.next;
        } return t; };
        e.prototype.iterator_at = function (e) { var t = this.next; for (; e-- > 0 && t != null;)
            t = t.next; return t; };
        e.prototype.at = function (e) { var t = this.iterator_at(e); return t == null ? null : t; };
        return e;
    }()), Gr._nape = null, Gr.zpp_pool = null, Gr.internal = !1, Gr._wrapFn = null, Kr = Gr, qr = (function () {
        function e() {
        }
        e._getContact = function (e, t) { var n = null, r = e.contacts.next; for (; r != null;) {
            var e_136 = r;
            if (t == e_136.hash) {
                n = e_136;
                break;
            }
            r = r.next;
        } if (n == null) {
            Kr.zpp_pool == null ? n = new Kr : (n = Kr.zpp_pool, Kr.zpp_pool = n.next, n.next = null);
            var r_102 = n.inner;
            r_102.jnAcc = r_102.jtAcc = 0, n.hash = t, n.fresh = !0, n.arbiter = e, e.jrAcc = 0;
            var i_68 = e.contacts;
            n._inuse = !0, n.next = i_68.next, i_68.next = n, i_68.modified = !0, i_68.length++, e.innards.add(r_102);
        }
        else
            n.fresh = !1; return n; };
        e.circleContains = function (e, t) { var n = t.x - e.worldCOMx, r = t.y - e.worldCOMy; return n * n + r * r < e.radius * e.radius; };
        e.polyContains = function (e, t) { var n = !0, r = e.edges.head; for (; r != null;) {
            var e_137 = r.elt;
            if (e_137.gnormx * t.x + e_137.gnormy * t.y <= e_137.gprojection)
                r = r.next;
            else {
                n = !1;
                break;
            }
        } return n; };
        e.shapeContains = function (t, n) { return t.type == 0 ? e.circleContains(t.circle, n) : e.polyContains(t.polygon, n); };
        e.containTest = function (e, t) { var n = e.aabb, r = t.aabb; if (r.minx >= n.minx && r.miny >= n.miny && r.maxx <= n.maxx && r.maxy <= n.maxy) {
            if (e.type == 0) {
                if (t.type == 0) {
                    var n_123 = e.circle.radius + -t.circle.radius, r_103 = t.circle.worldCOMx - e.circle.worldCOMx, i_69 = t.circle.worldCOMy - e.circle.worldCOMy;
                    return r_103 * r_103 + i_69 * i_69 <= n_123 * n_123;
                }
                {
                    var n_124 = !0, r_104 = t.polygon.gverts.next;
                    for (; r_104 != null;) {
                        var t_153 = r_104, i_70 = e.circle.radius, a_60 = t_153.x - e.circle.worldCOMx, o_44 = t_153.y - e.circle.worldCOMy;
                        if (a_60 * a_60 + o_44 * o_44 <= i_70 * i_70)
                            r_104 = r_104.next;
                        else {
                            n_124 = !1;
                            break;
                        }
                    }
                    return n_124;
                }
            }
            if (t.type == 0) {
                var n_125 = !0, r_105 = e.polygon.edges.head;
                for (; r_105 != null;) {
                    var e_138 = r_105.elt;
                    if (e_138.gnormx * t.circle.worldCOMx + e_138.gnormy * t.circle.worldCOMy + t.circle.radius <= e_138.gprojection)
                        r_105 = r_105.next;
                    else {
                        n_125 = !1;
                        break;
                    }
                }
                return n_125;
            }
            {
                var n_126 = !0, r_106 = e.polygon.edges.head;
                for (; r_106 != null;) {
                    var e_139 = r_106.elt, i_71 = -1e100, a_61 = t.polygon.gverts.next;
                    for (; a_61 != null;) {
                        var t_154 = a_61, n_127 = e_139.gnormx * t_154.x + e_139.gnormy * t_154.y;
                        n_127 > i_71 && (i_71 = n_127), a_61 = a_61.next;
                    }
                    if (i_71 <= e_139.gprojection)
                        r_106 = r_106.next;
                    else {
                        n_126 = !1;
                        break;
                    }
                }
                return n_126;
            }
        } return !1; };
        e.contactCollide = function (t, n, r, i) { if (n.type == 1) {
            if (t.type == 1) {
                var a_62 = r.__sep_edge;
                if (a_62 != null) {
                    var e_140 = null;
                    if (r.__sep_owner == t ? e_140 = n.polygon.gverts.next : r.__sep_owner == n && (e_140 = t.polygon.gverts.next), e_140 != null) {
                        var t_155 = 1e100;
                        for (; e_140 != null;) {
                            var n_128 = a_62.gnormx * e_140.x + a_62.gnormy * e_140.y;
                            n_128 < t_155 && (t_155 = n_128), e_140 = e_140.next;
                        }
                        if (t_155 - a_62.gprojection >= 0)
                            return !1;
                    }
                    r.__sep_edge = null, r.__sep_owner = null;
                }
                var o_45 = !0, s_38 = -1e100, c_27 = -1, l_19 = null, u_16 = null, d_10 = t.polygon.edges.head;
                for (; d_10 != null;) {
                    var e_141 = d_10.elt, i_72 = 1e100, a_63 = n.polygon.gverts.next;
                    for (; a_63 != null;) {
                        var t_156 = a_63, n_129 = e_141.gnormx * t_156.x + e_141.gnormy * t_156.y;
                        if (n_129 < i_72 && (i_72 = n_129), i_72 - e_141.gprojection <= s_38)
                            break;
                        a_63 = a_63.next;
                    }
                    if (i_72 -= e_141.gprojection, i_72 >= 0) {
                        r.__sep_edge = e_141, r.__sep_owner = t, o_45 = !1;
                        break;
                    }
                    i_72 > s_38 && (s_38 = i_72, l_19 = e_141, c_27 = 1), d_10 = d_10.next;
                }
                if (o_45) {
                    var a_64 = n.polygon.edges.head;
                    for (; a_64 != null;) {
                        var e_142 = a_64.elt, i_73 = 1e100, l_20 = t.polygon.gverts.next;
                        for (; l_20 != null;) {
                            var t_157 = l_20, n_130 = e_142.gnormx * t_157.x + e_142.gnormy * t_157.y;
                            if (n_130 < i_73 && (i_73 = n_130), i_73 - e_142.gprojection <= s_38)
                                break;
                            l_20 = l_20.next;
                        }
                        if (i_73 -= e_142.gprojection, i_73 >= 0) {
                            r.__sep_edge = e_142, r.__sep_owner = n, o_45 = !1;
                            break;
                        }
                        i_73 > s_38 && (s_38 = i_73, u_16 = e_142, c_27 = 2), a_64 = a_64.next;
                    }
                    if (o_45) {
                        var a_65, o_46, s_39;
                        c_27 == 1 ? (a_65 = n.polygon, o_46 = l_19, s_39 = 1) : (a_65 = t.polygon, o_46 = u_16, s_39 = -1);
                        var d_11 = null, f_8 = 1e100, p_8 = a_65.edges.head;
                        for (; p_8 != null;) {
                            var e_143 = p_8.elt, t_158 = o_46.gnormx * e_143.gnormx + o_46.gnormy * e_143.gnormy;
                            t_158 < f_8 && (f_8 = t_158, d_11 = e_143), p_8 = p_8.next;
                        }
                        var m_5 = d_11.gp0.x, h_2 = d_11.gp0.y, g_3 = d_11.gp1.x, _1 = d_11.gp1.y, v_2 = g_3 - m_5, y_2 = _1 - h_2, b_2 = o_46.gnormy * m_5 - o_46.gnormx * h_2, x_2 = o_46.gnormy * g_3 - o_46.gnormx * _1, S_2 = 1 / (x_2 - b_2), C_2 = (-o_46.tp1 - b_2) * S_2;
                        if (C_2 > R.epsilon) {
                            var e_144 = C_2;
                            m_5 += v_2 * e_144, h_2 += y_2 * e_144;
                        }
                        var w_1 = (-o_46.tp0 - x_2) * S_2;
                        if (w_1 < -R.epsilon) {
                            var e_145 = w_1;
                            g_3 += v_2 * e_145, _1 += y_2 * e_145;
                        }
                        var T_1 = s_39, ee_1 = o_46.gnormx * T_1, E_1 = o_46.gnormy * T_1;
                        r.lnormx = o_46.lnormx, r.lnormy = o_46.lnormy, r.lproj = o_46.lprojection, r.radius = 0, r.rev = i != (s_39 == -1), r.ptype = +!!r.rev;
                        var D_1 = m_5 * o_46.gnormx + h_2 * o_46.gnormy - o_46.gprojection, O_1 = g_3 * o_46.gnormx + _1 * o_46.gnormy - o_46.gprojection;
                        if (D_1 > 0 && O_1 > 0)
                            return !1;
                        {
                            i && (ee_1 = -ee_1, E_1 = -E_1);
                            var t_159 = m_5 - o_46.gnormx * D_1 * .5, n_131 = h_2 - o_46.gnormy * D_1 * .5, s_40 = +!!r.rev, l_21 = D_1 > 0;
                            l_21 == null && (l_21 = !1);
                            var u_17 = e._getContact(r, s_40);
                            u_17.px = t_159, u_17.py = n_131, r.nx = ee_1, r.ny = E_1, u_17.dist = D_1, u_17.stamp = r.stamp, u_17.posOnly = l_21;
                            var f_9 = u_17;
                            m_5 -= a_65.body.posx * 1, h_2 -= a_65.body.posy * 1, f_9.inner.lr1x = m_5 * a_65.body.axisy + h_2 * a_65.body.axisx, f_9.inner.lr1y = h_2 * a_65.body.axisy - m_5 * a_65.body.axisx;
                            var p_9 = g_3 - o_46.gnormx * O_1 * .5, v_3 = _1 - o_46.gnormy * O_1 * .5, y_3 = +!r.rev, b_3 = O_1 > 0;
                            b_3 == null && (b_3 = !1);
                            var x_3 = e._getContact(r, y_3);
                            return x_3.px = p_9, x_3.py = v_3, r.nx = ee_1, r.ny = E_1, x_3.dist = O_1, x_3.stamp = r.stamp, x_3.posOnly = b_3, f_9 = x_3, g_3 -= a_65.body.posx * 1, _1 -= a_65.body.posy * 1, f_9.inner.lr1x = g_3 * a_65.body.axisy + _1 * a_65.body.axisx, f_9.inner.lr1y = _1 * a_65.body.axisy - g_3 * a_65.body.axisx, c_27 == 1 ? (r.__ref_edge1 = o_46, r.__ref_edge2 = d_11) : (r.__ref_edge2 = o_46, r.__ref_edge1 = d_11), !0;
                        }
                    }
                    return !1;
                }
                return !1;
            }
            {
                var a_66 = r.__sep_edge;
                if (a_66 != null) {
                    if (r.__sep_owner == n && a_66.gnormx * t.circle.worldCOMx + a_66.gnormy * t.circle.worldCOMy - a_66.gprojection - t.circle.radius > 0)
                        return !1;
                    r.__sep_edge = null, r.__sep_owner = null;
                }
                var o_47 = -1e100, s_41 = !0, c_28 = null, l_22 = null, u_18 = n.polygon.gverts.next, d_12 = n.polygon.edges.head;
                for (; d_12 != null;) {
                    var e_146 = d_12.elt, i_74 = e_146.gnormx * t.circle.worldCOMx + e_146.gnormy * t.circle.worldCOMy - e_146.gprojection - t.circle.radius;
                    if (i_74 > 0) {
                        r.__sep_edge = e_146, r.__sep_owner = n, s_41 = !1;
                        break;
                    }
                    i_74 > o_47 && (o_47 = i_74, c_28 = e_146, l_22 = u_18), u_18 = u_18.next, d_12 = d_12.next;
                }
                if (s_41) {
                    var a_67 = l_22, s_42 = l_22.next == null ? n.polygon.gverts.next : l_22.next, u_19 = t.circle.worldCOMy * c_28.gnormx - t.circle.worldCOMx * c_28.gnormy;
                    if (u_19 <= a_67.y * c_28.gnormx - a_67.x * c_28.gnormy) {
                        var o_48 = t.circle.radius, s_43 = a_67.x - t.circle.worldCOMx, l_23 = a_67.y - t.circle.worldCOMy, u_20 = s_43 * s_43 + l_23 * l_23, d_13;
                        if (u_20 > o_48 * o_48)
                            d_13 = null;
                        else if (u_20 < R.epsilon * R.epsilon) {
                            var n_132 = t.circle.worldCOMx, i_75 = t.circle.worldCOMy, a_68 = e._getContact(r, 0);
                            a_68.px = n_132, a_68.py = i_75, r.nx = 1, r.ny = 0, a_68.dist = -o_48, a_68.stamp = r.stamp, a_68.posOnly = !1, d_13 = a_68;
                        }
                        else {
                            var n_133 = 1 / Math.sqrt(u_20), a_69 = n_133 < R.epsilon ? 1e100 : 1 / n_133, c_29 = .5 + (t.circle.radius - .5 * o_48) * n_133;
                            if (i) {
                                var i_76 = t.circle.worldCOMx + s_43 * c_29, u_21 = t.circle.worldCOMy + l_23 * c_29, f_10 = e._getContact(r, 0);
                                f_10.px = i_76, f_10.py = u_21, r.nx = -s_43 * n_133, r.ny = -l_23 * n_133, f_10.dist = a_69 - o_48, f_10.stamp = r.stamp, f_10.posOnly = !1, d_13 = f_10;
                            }
                            else {
                                var i_77 = t.circle.worldCOMx + s_43 * c_29, u_22 = t.circle.worldCOMy + l_23 * c_29, f_11 = e._getContact(r, 0);
                                f_11.px = i_77, f_11.py = u_22, r.nx = s_43 * n_133, r.ny = l_23 * n_133, f_11.dist = a_69 - o_48, f_11.stamp = r.stamp, f_11.posOnly = !1, d_13 = f_11;
                            }
                        }
                        if (d_13 != null) {
                            var e_147 = d_13.inner;
                            r.ptype = 2;
                            var o_49 = a_67.x - n.polygon.body.posx, s_44 = a_67.y - n.polygon.body.posy;
                            r.__ref_edge1 = c_28, r.__ref_vertex = -1, i ? (e_147.lr1x = o_49 * n.polygon.body.axisy + s_44 * n.polygon.body.axisx, e_147.lr1y = s_44 * n.polygon.body.axisy - o_49 * n.polygon.body.axisx, e_147.lr2x = t.circle.localCOMx, e_147.lr2y = t.circle.localCOMy) : (e_147.lr2x = o_49 * n.polygon.body.axisy + s_44 * n.polygon.body.axisx, e_147.lr2y = s_44 * n.polygon.body.axisy - o_49 * n.polygon.body.axisx, e_147.lr1x = t.circle.localCOMx, e_147.lr1y = t.circle.localCOMy), r.radius = t.circle.radius;
                        }
                        return d_13 != null;
                    }
                    if (u_19 >= s_42.y * c_28.gnormx - s_42.x * c_28.gnormy) {
                        var a_70 = t.circle.radius, o_50 = s_42.x - t.circle.worldCOMx, l_24 = s_42.y - t.circle.worldCOMy, u_23 = o_50 * o_50 + l_24 * l_24, d_14;
                        if (u_23 > a_70 * a_70)
                            d_14 = null;
                        else if (u_23 < R.epsilon * R.epsilon) {
                            var n_134 = t.circle.worldCOMx, i_78 = t.circle.worldCOMy, o_51 = e._getContact(r, 0);
                            o_51.px = n_134, o_51.py = i_78, r.nx = 1, r.ny = 0, o_51.dist = -a_70, o_51.stamp = r.stamp, o_51.posOnly = !1, d_14 = o_51;
                        }
                        else {
                            var n_135 = 1 / Math.sqrt(u_23), s_45 = n_135 < R.epsilon ? 1e100 : 1 / n_135, c_30 = .5 + (t.circle.radius - .5 * a_70) * n_135;
                            if (i) {
                                var i_79 = t.circle.worldCOMx + o_50 * c_30, u_24 = t.circle.worldCOMy + l_24 * c_30, f_12 = e._getContact(r, 0);
                                f_12.px = i_79, f_12.py = u_24, r.nx = -o_50 * n_135, r.ny = -l_24 * n_135, f_12.dist = s_45 - a_70, f_12.stamp = r.stamp, f_12.posOnly = !1, d_14 = f_12;
                            }
                            else {
                                var i_80 = t.circle.worldCOMx + o_50 * c_30, u_25 = t.circle.worldCOMy + l_24 * c_30, f_13 = e._getContact(r, 0);
                                f_13.px = i_80, f_13.py = u_25, r.nx = o_50 * n_135, r.ny = l_24 * n_135, f_13.dist = s_45 - a_70, f_13.stamp = r.stamp, f_13.posOnly = !1, d_14 = f_13;
                            }
                        }
                        if (d_14 != null) {
                            var e_148 = d_14.inner;
                            r.ptype = 2;
                            var a_71 = s_42.x - n.polygon.body.posx, o_52 = s_42.y - n.polygon.body.posy;
                            r.__ref_edge1 = c_28, r.__ref_vertex = 1, i ? (e_148.lr1x = a_71 * n.polygon.body.axisy + o_52 * n.polygon.body.axisx, e_148.lr1y = o_52 * n.polygon.body.axisy - a_71 * n.polygon.body.axisx, e_148.lr2x = t.circle.localCOMx, e_148.lr2y = t.circle.localCOMy) : (e_148.lr2x = a_71 * n.polygon.body.axisy + o_52 * n.polygon.body.axisx, e_148.lr2y = o_52 * n.polygon.body.axisy - a_71 * n.polygon.body.axisx, e_148.lr1x = t.circle.localCOMx, e_148.lr1y = t.circle.localCOMy), r.radius = t.circle.radius;
                        }
                        return d_14 != null;
                    }
                    {
                        var n_136 = t.circle.radius + o_47 * .5, a_72 = c_28.gnormx * n_136, s_46 = c_28.gnormy * n_136, l_25 = t.circle.worldCOMx - a_72, u_26 = t.circle.worldCOMy - s_46, d_15;
                        if (i) {
                            var t_160 = c_28.gnormx, n_137 = c_28.gnormy, i_81 = e._getContact(r, 0);
                            i_81.px = l_25, i_81.py = u_26, r.nx = t_160, r.ny = n_137, i_81.dist = o_47, i_81.stamp = r.stamp, i_81.posOnly = !1, d_15 = i_81;
                        }
                        else {
                            var t_161 = -c_28.gnormx, n_138 = -c_28.gnormy, i_82 = e._getContact(r, 0);
                            i_82.px = l_25, i_82.py = u_26, r.nx = t_161, r.ny = n_138, i_82.dist = o_47, i_82.stamp = r.stamp, i_82.posOnly = !1, d_15 = i_82;
                        }
                        return r.ptype = +!i, r.lnormx = c_28.lnormx, r.lnormy = c_28.lnormy, r.rev = !i, r.lproj = c_28.lprojection, r.radius = t.circle.radius, d_15.inner.lr1x = t.circle.localCOMx, d_15.inner.lr1y = t.circle.localCOMy, r.__ref_edge1 = c_28, r.__ref_vertex = 0, !0;
                    }
                }
                return !1;
            }
        } {
            var a_73 = t.circle.radius + n.circle.radius, o_53 = n.circle.worldCOMx - t.circle.worldCOMx, s_47 = n.circle.worldCOMy - t.circle.worldCOMy, c_31 = o_53 * o_53 + s_47 * s_47, l_26;
            if (c_31 > a_73 * a_73)
                l_26 = null;
            else if (c_31 < R.epsilon * R.epsilon) {
                var n_139 = t.circle.worldCOMx, i_83 = t.circle.worldCOMy, o_54 = e._getContact(r, 0);
                o_54.px = n_139, o_54.py = i_83, r.nx = 1, r.ny = 0, o_54.dist = -a_73, o_54.stamp = r.stamp, o_54.posOnly = !1, l_26 = o_54;
            }
            else {
                var n_140 = 1 / Math.sqrt(c_31), u_27 = n_140 < R.epsilon ? 1e100 : 1 / n_140, d_16 = .5 + (t.circle.radius - .5 * a_73) * n_140;
                if (i) {
                    var i_84 = t.circle.worldCOMx + o_53 * d_16, c_32 = t.circle.worldCOMy + s_47 * d_16, f_14 = e._getContact(r, 0);
                    f_14.px = i_84, f_14.py = c_32, r.nx = -o_53 * n_140, r.ny = -s_47 * n_140, f_14.dist = u_27 - a_73, f_14.stamp = r.stamp, f_14.posOnly = !1, l_26 = f_14;
                }
                else {
                    var i_85 = t.circle.worldCOMx + o_53 * d_16, c_33 = t.circle.worldCOMy + s_47 * d_16, f_15 = e._getContact(r, 0);
                    f_15.px = i_85, f_15.py = c_33, r.nx = o_53 * n_140, r.ny = s_47 * n_140, f_15.dist = u_27 - a_73, f_15.stamp = r.stamp, f_15.posOnly = !1, l_26 = f_15;
                }
            }
            if (l_26 != null) {
                var e_149 = l_26.inner;
                return i ? (e_149.lr1x = n.circle.localCOMx, e_149.lr1y = n.circle.localCOMy, e_149.lr2x = t.circle.localCOMx, e_149.lr2y = t.circle.localCOMy) : (e_149.lr1x = t.circle.localCOMx, e_149.lr1y = t.circle.localCOMy, e_149.lr2x = n.circle.localCOMx, e_149.lr2y = n.circle.localCOMy), r.radius = t.circle.radius + n.circle.radius, r.ptype = 2, !0;
            }
            return !1;
        } };
        e.testCollide_safe = function (t, n) { if (t.type > n.type) {
            var e_150 = t;
            t = n, n = e_150;
        } return e.testCollide(t, n); };
        e.testCollide = function (e, t) { if (t.type == 1) {
            if (e.type == 1) {
                var n_141 = !0, r_107 = e.polygon.edges.head;
                for (; r_107 != null;) {
                    var e_151 = r_107.elt, i_86 = 1e100, a_74 = t.polygon.gverts.next;
                    for (; a_74 != null;) {
                        var t_162 = a_74, n_142 = e_151.gnormx * t_162.x + e_151.gnormy * t_162.y;
                        n_142 < i_86 && (i_86 = n_142), a_74 = a_74.next;
                    }
                    if (i_86 -= e_151.gprojection, i_86 > 0) {
                        n_141 = !1;
                        break;
                    }
                    r_107 = r_107.next;
                }
                if (n_141) {
                    var r_108 = t.polygon.edges.head;
                    for (; r_108 != null;) {
                        var t_163 = r_108.elt, i_87 = 1e100, a_75 = e.polygon.gverts.next;
                        for (; a_75 != null;) {
                            var e_152 = a_75, n_143 = t_163.gnormx * e_152.x + t_163.gnormy * e_152.y;
                            n_143 < i_87 && (i_87 = n_143), a_75 = a_75.next;
                        }
                        if (i_87 -= t_163.gprojection, i_87 > 0) {
                            n_141 = !1;
                            break;
                        }
                        r_108 = r_108.next;
                    }
                    return n_141;
                }
                return !1;
            }
            {
                var n_144 = null, r_109 = null, i_88 = !0, a_76 = -1e100, o_55 = t.polygon.gverts.next, s_48 = t.polygon.edges.head;
                for (; s_48 != null;) {
                    var t_164 = s_48.elt, c_34 = t_164.gnormx * e.circle.worldCOMx + t_164.gnormy * e.circle.worldCOMy - t_164.gprojection - e.circle.radius;
                    if (c_34 > 0) {
                        i_88 = !1;
                        break;
                    }
                    c_34 > a_76 && (a_76 = c_34, n_144 = t_164, r_109 = o_55), o_55 = o_55.next, s_48 = s_48.next;
                }
                if (i_88) {
                    var i_89 = r_109, a_77 = r_109.next == null ? t.polygon.gverts.next : r_109.next, o_56 = e.circle.worldCOMy * n_144.gnormx - e.circle.worldCOMx * n_144.gnormy;
                    if (o_56 <= i_89.y * n_144.gnormx - i_89.x * n_144.gnormy) {
                        var t_165 = e.circle.radius, n_145 = i_89.x - e.circle.worldCOMx, r_110 = i_89.y - e.circle.worldCOMy;
                        return n_145 * n_145 + r_110 * r_110 <= t_165 * t_165;
                    }
                    if (o_56 >= a_77.y * n_144.gnormx - a_77.x * n_144.gnormy) {
                        var t_166 = e.circle.radius, n_146 = a_77.x - e.circle.worldCOMx, r_111 = a_77.y - e.circle.worldCOMy;
                        return n_146 * n_146 + r_111 * r_111 <= t_166 * t_166;
                    }
                    return !0;
                }
                return !1;
            }
        } {
            var n_147 = e.circle.radius + t.circle.radius, r_112 = t.circle.worldCOMx - e.circle.worldCOMx, i_90 = t.circle.worldCOMy - e.circle.worldCOMy;
            return r_112 * r_112 + i_90 * i_90 <= n_147 * n_147;
        } };
        e._flowPolyPoly = function (t, n, r) { var i = e._clipA, a = e._clipB, o = 0, s = n.gverts.next; for (; s != null;)
            i[o++] = s.x, i[o++] = s.y, s = s.next; var c = t.edges.head; for (; c != null && o >= 6;) {
            var e_153 = c.elt, t_167 = e_153.gnormx, n_148 = e_153.gnormy, r_113 = e_153.gprojection, s_49 = 0, l_27 = i[o - 2], u_28 = i[o - 1], d_17 = t_167 * l_27 + n_148 * u_28 - r_113;
            for (var e_154 = 0; e_154 < o; e_154 += 2) {
                var o_57 = i[e_154], c_35 = i[e_154 + 1], f_16 = t_167 * o_57 + n_148 * c_35 - r_113;
                if (d_17 <= 0 != f_16 <= 0) {
                    var e_155 = d_17 / (d_17 - f_16);
                    a[s_49++] = l_27 + (o_57 - l_27) * e_155, a[s_49++] = u_28 + (c_35 - u_28) * e_155;
                }
                f_16 <= 0 && (a[s_49++] = o_57, a[s_49++] = c_35), l_27 = o_57, u_28 = c_35, d_17 = f_16;
            }
            var f_17 = i;
            i = a, a = f_17, o = s_49, c = c.next;
        } if (o < 6)
            return !1; var l = 0, u = 0, d = 0, f = i[o - 2], p = i[o - 1]; for (var e_156 = 0; e_156 < o; e_156 += 2) {
            var t_168 = i[e_156], n_149 = i[e_156 + 1], r_114 = f * n_149 - t_168 * p;
            l += r_114, u += (f + t_168) * r_114, d += (p + n_149) * r_114, f = t_168, p = n_149;
        } if (l *= .5, !(l * l > R.epsilon * R.epsilon))
            return !1; var m = 1 / (6 * l); return r.overlap = l < 0 ? -l : l, r.centroidx = u * m, r.centroidy = d * m, !0; };
        e._flowCirclePoly = function (e, t, n) { var r = e.worldCOMx, i = e.worldCOMy, a = e.radius, o = a * a, s = o * a / 3, c = 0, l = 0, u = 0, d = t.gverts.next, f = 0, p = 0, m = d; for (; m != null;)
            f = m.x - r, p = m.y - i, m = m.next; for (m = d; m != null;) {
            var e_157 = m.x - r, t_169 = m.y - i, n_150 = e_157 - f, a_78 = t_169 - p, d_18 = n_150 * n_150 + a_78 * a_78, h_3 = f * n_150 + p * a_78, g_4 = h_3 * h_3 - d_18 * (f * f + p * p - o), _2 = 1, v_4 = 1;
            if (d_18 > 0 && g_4 > 0) {
                var e_158 = Math.sqrt(g_4);
                _2 = (-h_3 - e_158) / d_18, v_4 = (-h_3 + e_158) / d_18, _2 = _2 < 0 ? 0 : _2 > 1 ? 1 : _2, v_4 = v_4 < 0 ? 0 : v_4 > 1 ? 1 : v_4;
            }
            var y_4 = f + n_150 * _2, b_4 = p + a_78 * _2, x_4 = f + n_150 * v_4, S_3 = p + a_78 * v_4;
            if (_2 > 0) {
                var e_159 = Math.sqrt(f * f + p * p), t_170 = Math.sqrt(y_4 * y_4 + b_4 * b_4);
                c += .5 * o * Math.atan2(f * b_4 - p * y_4, f * y_4 + p * b_4), l += s * (b_4 / t_170 - p / e_159), u += s * (f / e_159 - y_4 / t_170);
            }
            if (v_4 > _2) {
                var e_160 = y_4 * S_3 - x_4 * b_4;
                c += .5 * e_160, l += e_160 * (y_4 + x_4) / 6, u += e_160 * (b_4 + S_3) / 6;
            }
            if (v_4 < 1) {
                var n_151 = Math.sqrt(x_4 * x_4 + S_3 * S_3), r_115 = Math.sqrt(e_157 * e_157 + t_169 * t_169);
                c += .5 * o * Math.atan2(x_4 * t_169 - S_3 * e_157, x_4 * e_157 + S_3 * t_169), l += s * (t_169 / r_115 - S_3 / n_151), u += s * (x_4 / n_151 - e_157 / r_115);
            }
            f = e_157, p = t_169, m = m.next;
        } return c * c > R.epsilon * R.epsilon && (n.overlap = c < 0 ? -c : c, n.centroidx = r + l / c, n.centroidy = i + u / c, !0); };
        e.flowCollide = function (t, n, r) { if (n.type == 1) {
            if (t.type == 1) {
                var i_91 = !0, a_79 = !0, o_58 = t.polygon.edges.head;
                for (; o_58 != null;) {
                    var e_161 = o_58.elt, t_171 = 1e100, r_116 = n.polygon.gverts.next;
                    for (; r_116 != null;) {
                        var n_152 = r_116, i_92 = e_161.gnormx * n_152.x + e_161.gnormy * n_152.y;
                        i_92 < t_171 && (t_171 = i_92), i_92 >= e_161.gprojection + R.epsilon && (a_79 = !1), r_116 = r_116.next;
                    }
                    if (t_171 -= e_161.gprojection, t_171 > 0) {
                        i_91 = !1;
                        break;
                    }
                    o_58 = o_58.next;
                }
                if (a_79)
                    return n.polygon.validate_worldCOM(), r.overlap = n.polygon.area, r.centroidx = n.polygon.worldCOMx, r.centroidy = n.polygon.worldCOMy, !0;
                if (i_91) {
                    a_79 = !0;
                    var o_59 = n.polygon.edges.head;
                    for (; o_59 != null;) {
                        var e_162 = o_59.elt, n_153 = 1e100, r_117 = t.polygon.gverts.next;
                        for (; r_117 != null;) {
                            var t_172 = r_117, i_93 = e_162.gnormx * t_172.x + e_162.gnormy * t_172.y;
                            i_93 < n_153 && (n_153 = i_93), i_93 >= e_162.gprojection + R.epsilon && (a_79 = !1), r_117 = r_117.next;
                        }
                        if (n_153 -= e_162.gprojection, n_153 > 0) {
                            i_91 = !1;
                            break;
                        }
                        o_59 = o_59.next;
                    }
                    return a_79 ? (t.polygon.validate_worldCOM(), r.overlap = t.polygon.area, r.centroidx = t.polygon.worldCOMx, r.centroidy = t.polygon.worldCOMy, !0) : i_91 ? e._flowPolyPoly(t.polygon, n.polygon, r) : !1;
                }
                return !1;
            }
            {
                var i_94 = !0, a_80 = null, o_60 = null, s_50 = -1e100, c_36 = !0, l_28 = n.polygon.gverts.next, u_29 = n.polygon.edges.head;
                for (; u_29 != null;) {
                    var e_163 = u_29.elt, n_154 = e_163.gnormx * t.circle.worldCOMx + e_163.gnormy * t.circle.worldCOMy;
                    if (n_154 > e_163.gprojection + t.circle.radius) {
                        c_36 = !1;
                        break;
                    }
                    n_154 + t.circle.radius > e_163.gprojection + R.epsilon && (i_94 = !1), n_154 -= e_163.gprojection + t.circle.radius, n_154 > s_50 && (s_50 = n_154, a_80 = e_163, o_60 = l_28), l_28 = l_28.next, u_29 = u_29.next;
                }
                if (c_36) {
                    if (i_94)
                        return r.overlap = t.circle.area, r.centroidx = t.circle.worldCOMx, r.centroidy = t.circle.worldCOMy, !0;
                    {
                        var i_95 = o_60, s_51 = o_60.next == null ? n.polygon.gverts.next : o_60.next, c_37 = t.circle.worldCOMy * a_80.gnormx - t.circle.worldCOMx * a_80.gnormy, l_29;
                        if (c_37 <= i_95.y * a_80.gnormx - i_95.x * a_80.gnormy) {
                            var e_164 = t.circle.radius, n_155 = i_95.x - t.circle.worldCOMx, r_118 = i_95.y - t.circle.worldCOMy;
                            l_29 = n_155 * n_155 + r_118 * r_118 <= e_164 * e_164;
                        }
                        else if (c_37 >= s_51.y * a_80.gnormx - s_51.x * a_80.gnormy) {
                            var e_165 = t.circle.radius, n_156 = s_51.x - t.circle.worldCOMx, r_119 = s_51.y - t.circle.worldCOMy;
                            l_29 = n_156 * n_156 + r_119 * r_119 <= e_165 * e_165;
                        }
                        else
                            l_29 = !0;
                        if (l_29) {
                            var i_96 = !0, a_81 = n.polygon.gverts.next;
                            for (; a_81 != null;) {
                                var e_166 = a_81, n_157 = e_166.x - t.circle.worldCOMx, r_120 = e_166.y - t.circle.worldCOMy;
                                n_157 * n_157 + r_120 * r_120 > t.circle.radius * t.circle.radius && (i_96 = !1), a_81 = a_81.next;
                            }
                            return i_96 ? (n.polygon.validate_worldCOM(), r.overlap = n.polygon.area, r.centroidx = n.polygon.worldCOMx, r.centroidy = n.polygon.worldCOMy, !0) : e._flowCirclePoly(t.circle, n.polygon, r);
                        }
                        return !1;
                    }
                }
                return !1;
            }
        } {
            var e_167 = t.circle, i_97 = n.circle, a_82 = i_97.worldCOMx - e_167.worldCOMx, o_61 = i_97.worldCOMy - e_167.worldCOMy, s_52 = e_167.radius + i_97.radius, c_38 = a_82 * a_82 + o_61 * o_61;
            if (c_38 > s_52 * s_52)
                return !1;
            if (c_38 < R.epsilon * R.epsilon)
                return e_167.radius < i_97.radius ? (r.overlap = e_167.area, r.centroidx = e_167.worldCOMx, r.centroidy = e_167.worldCOMy) : (r.overlap = i_97.area, r.centroidx = i_97.worldCOMx, r.centroidy = i_97.worldCOMy), !0;
            {
                var t_173 = Math.sqrt(c_38), n_158 = 1 / t_173, s_53 = .5 * (t_173 - (i_97.radius * i_97.radius - e_167.radius * e_167.radius) * n_158);
                if (s_53 <= -e_167.radius)
                    r.overlap = e_167.area, r.centroidx = e_167.worldCOMx, r.centroidy = e_167.worldCOMy;
                else {
                    var c_39 = t_173 - s_53;
                    if (c_39 <= -i_97.radius)
                        r.overlap = i_97.area, r.centroidx = i_97.worldCOMx, r.centroidy = i_97.worldCOMy;
                    else {
                        var l_30 = 0, u_30 = 0, d_19 = 0, f_18 = 0, p_10 = s_53, m_6 = p_10 / e_167.radius, h_4 = Math.sqrt(1 - m_6 * m_6), g_5 = Math.acos(m_6);
                        l_30 = e_167.radius * (e_167.radius * g_5 - p_10 * h_4), u_30 = .6666666666666666 * e_167.radius * h_4 * h_4 * h_4 / (g_5 - m_6 * h_4);
                        var _3 = c_39, v_5 = _3 / i_97.radius, y_5 = Math.sqrt(1 - v_5 * v_5), b_5 = Math.acos(v_5);
                        d_19 = i_97.radius * (i_97.radius * b_5 - _3 * y_5), f_18 = .6666666666666666 * i_97.radius * y_5 * y_5 * y_5 / (b_5 - v_5 * y_5);
                        var x_5 = l_30 + d_19, S_4 = (u_30 * l_30 + (t_173 - f_18) * d_19) / x_5 * n_158;
                        r.overlap = x_5, r.centroidx = e_167.worldCOMx + a_82 * S_4, r.centroidy = e_167.worldCOMy + o_61 * S_4;
                    }
                }
                return !0;
            }
        } };
        return e;
    }()), qr._clipA = [], qr._clipB = [], Jr = qr, Yr = (function () {
        function e() {
        }
        e.dynamicSweep = function (t, n, r, i, a) { a == null && (a = !1); var o = t.s1, s = t.s2, c = o.body, l = s.body, u = 0, d = 0; u = l.velx - c.velx, d = l.vely - c.vely; var f = c.angvel; f < 0 && (f = -f); var p = l.angvel; p < 0 && (p = -p); var m = o.sweepCoef * f + s.sweepCoef * p; if (!a && !t.kinematic && u * u + d * d < R.dynamicSweepLinearThreshold * R.dynamicSweepLinearThreshold && m < R.dynamicSweepAngularThreshold) {
            t.toi = -1, t.failed = !0;
            return;
        } var h = t.c1, g = t.c2, _ = t.axis, v = r, y = 0; for (;;) {
            var r_121 = v * n, f_19 = r_121 - c.sweepTime;
            if (f_19 != 0) {
                c.sweepTime = r_121;
                var e_168 = f_19;
                if (c.posx += c.velx * e_168, c.posy += c.vely * e_168, c.angvel != 0) {
                    var e_169 = c.sweep_angvel * f_19;
                    if (c.rot += e_169, e_169 * e_169 > 1e-4)
                        c.axisx = Math.sin(c.rot), c.axisy = Math.cos(c.rot);
                    else {
                        var t_174 = e_169 * e_169, n_159 = 1 - .5 * t_174, r_122 = 1 - t_174 * t_174 / 8, i_98 = (n_159 * c.axisx + e_169 * c.axisy) * r_122;
                        c.axisy = (n_159 * c.axisy - e_169 * c.axisx) * r_122, c.axisx = i_98;
                    }
                }
            }
            if (o.type == 0)
                o.worldCOMx = c.posx + (c.axisy * o.localCOMx - c.axisx * o.localCOMy), o.worldCOMy = c.posy + (o.localCOMx * c.axisx + o.localCOMy * c.axisy);
            else {
                var e_170 = o.polygon, t_175 = e_170.lverts.next, n_160 = e_170.gverts.next;
                for (; n_160 != null;) {
                    var e_171 = n_160, r_123 = t_175;
                    t_175 = t_175.next, e_171.x = c.posx + (c.axisy * r_123.x - c.axisx * r_123.y), e_171.y = c.posy + (r_123.x * c.axisx + r_123.y * c.axisy), n_160 = n_160.next;
                }
                var r_124 = e_170.edges.head, i_99 = e_170.gverts.next, a_83 = i_99;
                for (i_99 = i_99.next; i_99 != null;) {
                    var e_172 = i_99, t_176 = r_124.elt;
                    r_124 = r_124.next, t_176.gnormx = c.axisy * t_176.lnormx - c.axisx * t_176.lnormy, t_176.gnormy = t_176.lnormx * c.axisx + t_176.lnormy * c.axisy, t_176.gprojection = c.posx * t_176.gnormx + c.posy * t_176.gnormy + t_176.lprojection, t_176.tp0 = a_83.y * t_176.gnormx - a_83.x * t_176.gnormy, t_176.tp1 = e_172.y * t_176.gnormx - e_172.x * t_176.gnormy, a_83 = e_172, i_99 = i_99.next;
                }
                var s_54 = e_170.gverts.next, l_31 = r_124.elt;
                r_124 = r_124.next, l_31.gnormx = c.axisy * l_31.lnormx - c.axisx * l_31.lnormy, l_31.gnormy = l_31.lnormx * c.axisx + l_31.lnormy * c.axisy, l_31.gprojection = c.posx * l_31.gnormx + c.posy * l_31.gnormy + l_31.lprojection, l_31.tp0 = a_83.y * l_31.gnormx - a_83.x * l_31.gnormy, l_31.tp1 = s_54.y * l_31.gnormx - s_54.x * l_31.gnormy;
            }
            var p_11 = v * n, b_6 = p_11 - l.sweepTime;
            if (b_6 != 0) {
                l.sweepTime = p_11;
                var e_173 = b_6;
                if (l.posx += l.velx * e_173, l.posy += l.vely * e_173, l.angvel != 0) {
                    var e_174 = l.sweep_angvel * b_6;
                    if (l.rot += e_174, e_174 * e_174 > 1e-4)
                        l.axisx = Math.sin(l.rot), l.axisy = Math.cos(l.rot);
                    else {
                        var t_177 = e_174 * e_174, n_161 = 1 - .5 * t_177, r_125 = 1 - t_177 * t_177 / 8, i_100 = (n_161 * l.axisx + e_174 * l.axisy) * r_125;
                        l.axisy = (n_161 * l.axisy - e_174 * l.axisx) * r_125, l.axisx = i_100;
                    }
                }
            }
            if (s.type == 0)
                s.worldCOMx = l.posx + (l.axisy * s.localCOMx - l.axisx * s.localCOMy), s.worldCOMy = l.posy + (s.localCOMx * l.axisx + s.localCOMy * l.axisy);
            else {
                var e_175 = s.polygon, t_178 = e_175.lverts.next, n_162 = e_175.gverts.next;
                for (; n_162 != null;) {
                    var e_176 = n_162, r_126 = t_178;
                    t_178 = t_178.next, e_176.x = l.posx + (l.axisy * r_126.x - l.axisx * r_126.y), e_176.y = l.posy + (r_126.x * l.axisx + r_126.y * l.axisy), n_162 = n_162.next;
                }
                var r_127 = e_175.edges.head, i_101 = e_175.gverts.next, a_84 = i_101;
                for (i_101 = i_101.next; i_101 != null;) {
                    var e_177 = i_101, t_179 = r_127.elt;
                    r_127 = r_127.next, t_179.gnormx = l.axisy * t_179.lnormx - l.axisx * t_179.lnormy, t_179.gnormy = t_179.lnormx * l.axisx + t_179.lnormy * l.axisy, t_179.gprojection = l.posx * t_179.gnormx + l.posy * t_179.gnormy + t_179.lprojection, t_179.tp0 = a_84.y * t_179.gnormx - a_84.x * t_179.gnormy, t_179.tp1 = e_177.y * t_179.gnormx - e_177.x * t_179.gnormy, a_84 = e_177, i_101 = i_101.next;
                }
                var o_62 = e_175.gverts.next, c_40 = r_127.elt;
                r_127 = r_127.next, c_40.gnormx = l.axisy * c_40.lnormx - l.axisx * c_40.lnormy, c_40.gnormy = c_40.lnormx * l.axisx + c_40.lnormy * l.axisy, c_40.gprojection = l.posx * c_40.gnormx + l.posy * c_40.gnormy + c_40.lprojection, c_40.tp0 = a_84.y * c_40.gnormx - a_84.x * c_40.gnormy, c_40.tp1 = o_62.y * c_40.gnormx - o_62.x * c_40.gnormy;
            }
            var x_6 = e.distance(o, s, h, g, _, null) + i, S_5 = u * _.x + d * _.y;
            if (x_6 < R.distanceThresholdCCD) {
                if (a)
                    break;
                var e_178 = 0, n_163 = 0;
                e_178 = h.x - c.posx, n_163 = h.y - c.posy;
                var r_128 = 0, i_102 = 0;
                r_128 = g.x - l.posx, i_102 = g.y - l.posy;
                var o_63 = S_5 - c.sweep_angvel * (_.y * e_178 - _.x * n_163) + l.sweep_angvel * (_.y * r_128 - _.x * i_102);
                if (o_63 > 0 && (t.slipped = !0), o_63 <= 0 || x_6 < R.distanceThresholdCCD * .5)
                    break;
            }
            var C_3 = (m - S_5) * n;
            if (C_3 <= 0) {
                v = -1;
                break;
            }
            var w_2 = x_6 / C_3;
            if (w_2 < 1e-6 && (w_2 = 1e-6), v += w_2, v >= 1) {
                v = 1;
                var r_129 = v * n, f_20 = r_129 - c.sweepTime;
                if (f_20 != 0) {
                    c.sweepTime = r_129;
                    var e_179 = f_20;
                    if (c.posx += c.velx * e_179, c.posy += c.vely * e_179, c.angvel != 0) {
                        var e_180 = c.sweep_angvel * f_20;
                        if (c.rot += e_180, e_180 * e_180 > 1e-4)
                            c.axisx = Math.sin(c.rot), c.axisy = Math.cos(c.rot);
                        else {
                            var t_180 = e_180 * e_180, n_164 = 1 - .5 * t_180, r_130 = 1 - t_180 * t_180 / 8, i_103 = (n_164 * c.axisx + e_180 * c.axisy) * r_130;
                            c.axisy = (n_164 * c.axisy - e_180 * c.axisx) * r_130, c.axisx = i_103;
                        }
                    }
                }
                if (o.type == 0)
                    o.worldCOMx = c.posx + (c.axisy * o.localCOMx - c.axisx * o.localCOMy), o.worldCOMy = c.posy + (o.localCOMx * c.axisx + o.localCOMy * c.axisy);
                else {
                    var e_181 = o.polygon, t_181 = e_181.lverts.next, n_165 = e_181.gverts.next;
                    for (; n_165 != null;) {
                        var e_182 = n_165, r_131 = t_181;
                        t_181 = t_181.next, e_182.x = c.posx + (c.axisy * r_131.x - c.axisx * r_131.y), e_182.y = c.posy + (r_131.x * c.axisx + r_131.y * c.axisy), n_165 = n_165.next;
                    }
                    var r_132 = e_181.edges.head, i_104 = e_181.gverts.next, a_85 = i_104;
                    for (i_104 = i_104.next; i_104 != null;) {
                        var e_183 = i_104, t_182 = r_132.elt;
                        r_132 = r_132.next, t_182.gnormx = c.axisy * t_182.lnormx - c.axisx * t_182.lnormy, t_182.gnormy = t_182.lnormx * c.axisx + t_182.lnormy * c.axisy, t_182.gprojection = c.posx * t_182.gnormx + c.posy * t_182.gnormy + t_182.lprojection, t_182.tp0 = a_85.y * t_182.gnormx - a_85.x * t_182.gnormy, t_182.tp1 = e_183.y * t_182.gnormx - e_183.x * t_182.gnormy, a_85 = e_183, i_104 = i_104.next;
                    }
                    var s_55 = e_181.gverts.next, l_32 = r_132.elt;
                    r_132 = r_132.next, l_32.gnormx = c.axisy * l_32.lnormx - c.axisx * l_32.lnormy, l_32.gnormy = l_32.lnormx * c.axisx + l_32.lnormy * c.axisy, l_32.gprojection = c.posx * l_32.gnormx + c.posy * l_32.gnormy + l_32.lprojection, l_32.tp0 = a_85.y * l_32.gnormx - a_85.x * l_32.gnormy, l_32.tp1 = s_55.y * l_32.gnormx - s_55.x * l_32.gnormy;
                }
                var p_12 = v * n, m_7 = p_12 - l.sweepTime;
                if (m_7 != 0) {
                    l.sweepTime = p_12;
                    var e_184 = m_7;
                    if (l.posx += l.velx * e_184, l.posy += l.vely * e_184, l.angvel != 0) {
                        var e_185 = l.sweep_angvel * m_7;
                        if (l.rot += e_185, e_185 * e_185 > 1e-4)
                            l.axisx = Math.sin(l.rot), l.axisy = Math.cos(l.rot);
                        else {
                            var t_183 = e_185 * e_185, n_166 = 1 - .5 * t_183, r_133 = 1 - t_183 * t_183 / 8, i_105 = (n_166 * l.axisx + e_185 * l.axisy) * r_133;
                            l.axisy = (n_166 * l.axisy - e_185 * l.axisx) * r_133, l.axisx = i_105;
                        }
                    }
                }
                if (s.type == 0)
                    s.worldCOMx = l.posx + (l.axisy * s.localCOMx - l.axisx * s.localCOMy), s.worldCOMy = l.posy + (s.localCOMx * l.axisx + s.localCOMy * l.axisy);
                else {
                    var e_186 = s.polygon, t_184 = e_186.lverts.next, n_167 = e_186.gverts.next;
                    for (; n_167 != null;) {
                        var e_187 = n_167, r_134 = t_184;
                        t_184 = t_184.next, e_187.x = l.posx + (l.axisy * r_134.x - l.axisx * r_134.y), e_187.y = l.posy + (r_134.x * l.axisx + r_134.y * l.axisy), n_167 = n_167.next;
                    }
                    var r_135 = e_186.edges.head, i_106 = e_186.gverts.next, a_86 = i_106;
                    for (i_106 = i_106.next; i_106 != null;) {
                        var e_188 = i_106, t_185 = r_135.elt;
                        r_135 = r_135.next, t_185.gnormx = l.axisy * t_185.lnormx - l.axisx * t_185.lnormy, t_185.gnormy = t_185.lnormx * l.axisx + t_185.lnormy * l.axisy, t_185.gprojection = l.posx * t_185.gnormx + l.posy * t_185.gnormy + t_185.lprojection, t_185.tp0 = a_86.y * t_185.gnormx - a_86.x * t_185.gnormy, t_185.tp1 = e_188.y * t_185.gnormx - e_188.x * t_185.gnormy, a_86 = e_188, i_106 = i_106.next;
                    }
                    var o_64 = e_186.gverts.next, c_41 = r_135.elt;
                    r_135 = r_135.next, c_41.gnormx = l.axisy * c_41.lnormx - l.axisx * c_41.lnormy, c_41.gnormy = c_41.lnormx * l.axisx + c_41.lnormy * l.axisy, c_41.gprojection = l.posx * c_41.gnormx + l.posy * c_41.gnormy + c_41.lprojection, c_41.tp0 = a_86.y * c_41.gnormx - a_86.x * c_41.gnormy, c_41.tp1 = o_64.y * c_41.gnormx - o_64.x * c_41.gnormy;
                }
                var y_6 = e.distance(o, s, h, g, _, null) + i, b_7 = u * _.x + d * _.y;
                if (y_6 < R.distanceThresholdCCD) {
                    if (a)
                        break;
                    var e_189 = 0, n_168 = 0;
                    e_189 = h.x - c.posx, n_168 = h.y - c.posy;
                    var r_136 = 0, i_107 = 0;
                    r_136 = g.x - l.posx, i_107 = g.y - l.posy;
                    var o_65 = b_7 - c.sweep_angvel * (_.y * e_189 - _.x * n_168) + l.sweep_angvel * (_.y * r_136 - _.x * i_107);
                    if (o_65 > 0 && (t.slipped = !0), o_65 <= 0 || y_6 < R.distanceThresholdCCD * .5)
                        break;
                }
                v = -1;
                break;
            }
            if (++y >= 40) {
                x_6 > i && (t.failed = !0);
                break;
            }
        } t.toi = v; };
        e.staticSweep = function (t, n, r, i) { var a = t.s1, o = t.s2, s = a.body, c = 0, l = 0; c = -s.velx, l = -s.vely; var u = s.sweep_angvel; u < 0 && (u = -u); var d = a.sweepCoef * u, f = t.c1, p = t.c2, m = t.axis, h = r, g = 0; for (;;) {
            var r_137 = h * n, u_31 = r_137 - s.sweepTime;
            if (u_31 != 0) {
                s.sweepTime = r_137;
                var e_190 = u_31;
                if (s.posx += s.velx * e_190, s.posy += s.vely * e_190, s.angvel != 0) {
                    var e_191 = s.sweep_angvel * u_31;
                    if (s.rot += e_191, e_191 * e_191 > 1e-4)
                        s.axisx = Math.sin(s.rot), s.axisy = Math.cos(s.rot);
                    else {
                        var t_186 = e_191 * e_191, n_169 = 1 - .5 * t_186, r_138 = 1 - t_186 * t_186 / 8, i_108 = (n_169 * s.axisx + e_191 * s.axisy) * r_138;
                        s.axisy = (n_169 * s.axisy - e_191 * s.axisx) * r_138, s.axisx = i_108;
                    }
                }
            }
            if (a.type == 0)
                a.worldCOMx = s.posx + (s.axisy * a.localCOMx - s.axisx * a.localCOMy), a.worldCOMy = s.posy + (a.localCOMx * s.axisx + a.localCOMy * s.axisy);
            else {
                var e_192 = a.polygon, t_187 = e_192.lverts.next, n_170 = e_192.gverts.next;
                for (; n_170 != null;) {
                    var e_193 = n_170, r_139 = t_187;
                    t_187 = t_187.next, e_193.x = s.posx + (s.axisy * r_139.x - s.axisx * r_139.y), e_193.y = s.posy + (r_139.x * s.axisx + r_139.y * s.axisy), n_170 = n_170.next;
                }
                var r_140 = e_192.edges.head, i_109 = e_192.gverts.next, o_66 = i_109;
                for (i_109 = i_109.next; i_109 != null;) {
                    var e_194 = i_109, t_188 = r_140.elt;
                    r_140 = r_140.next, t_188.gnormx = s.axisy * t_188.lnormx - s.axisx * t_188.lnormy, t_188.gnormy = t_188.lnormx * s.axisx + t_188.lnormy * s.axisy, t_188.gprojection = s.posx * t_188.gnormx + s.posy * t_188.gnormy + t_188.lprojection, t_188.tp0 = o_66.y * t_188.gnormx - o_66.x * t_188.gnormy, t_188.tp1 = e_194.y * t_188.gnormx - e_194.x * t_188.gnormy, o_66 = e_194, i_109 = i_109.next;
                }
                var c_42 = e_192.gverts.next, l_33 = r_140.elt;
                r_140 = r_140.next, l_33.gnormx = s.axisy * l_33.lnormx - s.axisx * l_33.lnormy, l_33.gnormy = l_33.lnormx * s.axisx + l_33.lnormy * s.axisy, l_33.gprojection = s.posx * l_33.gnormx + s.posy * l_33.gnormy + l_33.lprojection, l_33.tp0 = o_66.y * l_33.gnormx - o_66.x * l_33.gnormy, l_33.tp1 = c_42.y * l_33.gnormx - c_42.x * l_33.gnormy;
            }
            var _4 = e.distance(a, o, f, p, m, null) + i, v_6 = c * m.x + l * m.y;
            if (_4 < R.distanceThresholdCCD) {
                var e_195 = 0, n_171 = 0;
                e_195 = f.x - s.posx, n_171 = f.y - s.posy;
                var r_141 = v_6 - s.sweep_angvel * (m.y * e_195 - m.x * n_171);
                if (r_141 > 0 && (t.slipped = !0), r_141 <= 0 || _4 < R.distanceThresholdCCD * .5)
                    break;
            }
            var y_7 = (d - v_6) * n;
            if (y_7 <= 0) {
                h = -1;
                break;
            }
            var b_8 = _4 / y_7;
            if (b_8 < 1e-6 && (b_8 = 1e-6), h += b_8, h >= 1) {
                h = 1;
                var r_142 = h * n, u_32 = r_142 - s.sweepTime;
                if (u_32 != 0) {
                    s.sweepTime = r_142;
                    var e_196 = u_32;
                    if (s.posx += s.velx * e_196, s.posy += s.vely * e_196, s.angvel != 0) {
                        var e_197 = s.sweep_angvel * u_32;
                        if (s.rot += e_197, e_197 * e_197 > 1e-4)
                            s.axisx = Math.sin(s.rot), s.axisy = Math.cos(s.rot);
                        else {
                            var t_189 = e_197 * e_197, n_172 = 1 - .5 * t_189, r_143 = 1 - t_189 * t_189 / 8, i_110 = (n_172 * s.axisx + e_197 * s.axisy) * r_143;
                            s.axisy = (n_172 * s.axisy - e_197 * s.axisx) * r_143, s.axisx = i_110;
                        }
                    }
                }
                if (a.type == 0)
                    a.worldCOMx = s.posx + (s.axisy * a.localCOMx - s.axisx * a.localCOMy), a.worldCOMy = s.posy + (a.localCOMx * s.axisx + a.localCOMy * s.axisy);
                else {
                    var e_198 = a.polygon, t_190 = e_198.lverts.next, n_173 = e_198.gverts.next;
                    for (; n_173 != null;) {
                        var e_199 = n_173, r_144 = t_190;
                        t_190 = t_190.next, e_199.x = s.posx + (s.axisy * r_144.x - s.axisx * r_144.y), e_199.y = s.posy + (r_144.x * s.axisx + r_144.y * s.axisy), n_173 = n_173.next;
                    }
                    var r_145 = e_198.edges.head, i_111 = e_198.gverts.next, o_67 = i_111;
                    for (i_111 = i_111.next; i_111 != null;) {
                        var e_200 = i_111, t_191 = r_145.elt;
                        r_145 = r_145.next, t_191.gnormx = s.axisy * t_191.lnormx - s.axisx * t_191.lnormy, t_191.gnormy = t_191.lnormx * s.axisx + t_191.lnormy * s.axisy, t_191.gprojection = s.posx * t_191.gnormx + s.posy * t_191.gnormy + t_191.lprojection, t_191.tp0 = o_67.y * t_191.gnormx - o_67.x * t_191.gnormy, t_191.tp1 = e_200.y * t_191.gnormx - e_200.x * t_191.gnormy, o_67 = e_200, i_111 = i_111.next;
                    }
                    var c_43 = e_198.gverts.next, l_34 = r_145.elt;
                    r_145 = r_145.next, l_34.gnormx = s.axisy * l_34.lnormx - s.axisx * l_34.lnormy, l_34.gnormy = l_34.lnormx * s.axisx + l_34.lnormy * s.axisy, l_34.gprojection = s.posx * l_34.gnormx + s.posy * l_34.gnormy + l_34.lprojection, l_34.tp0 = o_67.y * l_34.gnormx - o_67.x * l_34.gnormy, l_34.tp1 = c_43.y * l_34.gnormx - c_43.x * l_34.gnormy;
                }
                var d_20 = e.distance(a, o, f, p, m, null) + i, g_6 = c * m.x + l * m.y;
                if (d_20 < R.distanceThresholdCCD) {
                    var e_201 = 0, n_174 = 0;
                    e_201 = f.x - s.posx, n_174 = f.y - s.posy;
                    var r_146 = g_6 - s.sweep_angvel * (m.y * e_201 - m.x * n_174);
                    if (r_146 > 0 && (t.slipped = !0), r_146 <= 0 || d_20 < R.distanceThresholdCCD * .5)
                        break;
                }
                h = -1;
                break;
            }
            if (++g >= 40) {
                _4 > i && (t.failed = !0);
                break;
            }
        } t.toi = h; };
        e.distanceBody = function (t, n, r, i) { var a = V.get(0, 0), o = V.get(0, 0), s = V.get(0, 0), c = 1e100, l = t.shapes.head; for (; l != null;) {
            var t_192 = l.elt, u_33 = n.shapes.head;
            for (; u_33 != null;) {
                var n_175 = u_33.elt, l_35 = e.distance(t_192, n_175, a, o, s, c);
                l_35 < c && (c = l_35, r.x = a.x, r.y = a.y, i.x = o.x, i.y = o.y), u_33 = u_33.next;
            }
            l = l.next;
        } var u = a; u.free(), u.next = V.zpp_pool, V.zpp_pool = u; var d = o; d.free(), d.next = V.zpp_pool, V.zpp_pool = d; var f = s; return f.free(), f.next = V.zpp_pool, V.zpp_pool = f, c; };
        e.distance = function (e, t, n, r, i, a) { if (a == null && (a = 1e100), L(e) && L(t)) {
            var o_68 = e.circle, s_56 = t.circle, c_44 = re(e), l_36 = re(t), u_34, d_21 = 0, f_21 = 0;
            d_21 = s_56.worldCOMx - o_68.worldCOMx, f_21 = s_56.worldCOMy - o_68.worldCOMy;
            var p_13 = Math.sqrt(d_21 * d_21 + f_21 * f_21);
            if (u_34 = p_13 - (c_44 + l_36), u_34 < a) {
                if (p_13 == 0)
                    d_21 = 1, f_21 = 0;
                else {
                    var e_202 = 1 / p_13;
                    d_21 *= e_202, f_21 *= e_202;
                }
                var e_203 = c_44;
                n.x = o_68.worldCOMx + d_21 * e_203, n.y = o_68.worldCOMy + f_21 * e_203;
                var t_193 = -l_36;
                r.x = s_56.worldCOMx + d_21 * t_193, r.y = s_56.worldCOMy + f_21 * t_193, i.x = d_21, i.y = f_21;
            }
            return u_34;
        } {
            var o_69 = !1;
            if (L(e) && t.type == 1) {
                var i_112 = e;
                e = t, t = i_112;
                var a_87 = n;
                n = r, r = a_87, o_69 = !0;
            }
            if (e.type == 1 && L(t)) {
                var s_57 = e.polygon, c_45 = t.circle, l_37 = re(t), u_35 = -1e100, d_22 = null, f_22 = s_57.edges.head;
                for (; f_22 != null;) {
                    var e_204 = f_22.elt, t_194 = e_204.gnormx * c_45.worldCOMx + e_204.gnormy * c_45.worldCOMy - e_204.gprojection - l_37;
                    if (t_194 > a) {
                        u_35 = t_194;
                        break;
                    }
                    t_194 > 0 ? t_194 > u_35 && (u_35 = t_194, d_22 = e_204) : u_35 < 0 && t_194 > u_35 && (u_35 = t_194, d_22 = e_204), f_22 = f_22.next;
                }
                if (u_35 < a) {
                    var e_205 = d_22.gp0, t_195 = d_22.gp1, o_70 = c_45.worldCOMy * d_22.gnormx - c_45.worldCOMx * d_22.gnormy;
                    if (o_70 <= e_205.y * d_22.gnormx - e_205.x * d_22.gnormy) {
                        var t_196 = 0, o_71 = 0;
                        t_196 = c_45.worldCOMx - e_205.x, o_71 = c_45.worldCOMy - e_205.y;
                        var s_58 = Math.sqrt(t_196 * t_196 + o_71 * o_71);
                        if (u_35 = s_58 - l_37, u_35 < a) {
                            if (s_58 == 0)
                                t_196 = 1, o_71 = 0;
                            else {
                                var e_206 = 1 / s_58;
                                t_196 *= e_206, o_71 *= e_206;
                            }
                            n.x = e_205.x + t_196 * 0, n.y = e_205.y + o_71 * 0;
                            var a_88 = -l_37;
                            r.x = c_45.worldCOMx + t_196 * a_88, r.y = c_45.worldCOMy + o_71 * a_88, i.x = t_196, i.y = o_71;
                        }
                    }
                    else if (o_70 >= t_195.y * d_22.gnormx - t_195.x * d_22.gnormy) {
                        var e_207 = 0, o_72 = 0;
                        e_207 = c_45.worldCOMx - t_195.x, o_72 = c_45.worldCOMy - t_195.y;
                        var s_59 = Math.sqrt(e_207 * e_207 + o_72 * o_72);
                        if (u_35 = s_59 - l_37, u_35 < a) {
                            if (s_59 == 0)
                                e_207 = 1, o_72 = 0;
                            else {
                                var t_197 = 1 / s_59;
                                e_207 *= t_197, o_72 *= t_197;
                            }
                            n.x = t_195.x + e_207 * 0, n.y = t_195.y + o_72 * 0;
                            var a_89 = -l_37;
                            r.x = c_45.worldCOMx + e_207 * a_89, r.y = c_45.worldCOMy + o_72 * a_89, i.x = e_207, i.y = o_72;
                        }
                    }
                    else {
                        var e_208 = -l_37;
                        r.x = c_45.worldCOMx + d_22.gnormx * e_208, r.y = c_45.worldCOMy + d_22.gnormy * e_208;
                        var t_198 = -u_35;
                        n.x = r.x + d_22.gnormx * t_198, n.y = r.y + d_22.gnormy * t_198, i.x = d_22.gnormx, i.y = d_22.gnormy;
                    }
                }
                return o_69 && (i.x = -i.x, i.y = -i.y), u_35;
            }
            {
                var s_60 = e.polygon, c_46 = t.polygon, l_38 = -1e100, u_36 = null, d_23 = null, f_23 = 0, p_14 = s_60.edges.head;
                for (; p_14 != null;) {
                    var e_209 = p_14.elt, t_199 = 1e100, n_176 = c_46.gverts.next;
                    for (; n_176 != null;) {
                        var r_147 = n_176, i_113 = e_209.gnormx * r_147.x + e_209.gnormy * r_147.y;
                        i_113 < t_199 && (t_199 = i_113), n_176 = n_176.next;
                    }
                    if (t_199 -= e_209.gprojection, t_199 > a) {
                        l_38 = t_199;
                        break;
                    }
                    t_199 > 0 ? t_199 > l_38 && (l_38 = t_199, u_36 = e_209, f_23 = 1) : l_38 < 0 && t_199 > l_38 && (l_38 = t_199, u_36 = e_209, f_23 = 1), p_14 = p_14.next;
                }
                if (l_38 < a) {
                    var e_210 = c_46.edges.head;
                    for (; e_210 != null;) {
                        var t_200 = e_210.elt, n_177 = 1e100, r_148 = s_60.gverts.next;
                        for (; r_148 != null;) {
                            var e_211 = r_148, i_114 = t_200.gnormx * e_211.x + t_200.gnormy * e_211.y;
                            i_114 < n_177 && (n_177 = i_114), r_148 = r_148.next;
                        }
                        if (n_177 -= t_200.gprojection, n_177 > a) {
                            l_38 = n_177;
                            break;
                        }
                        n_177 > 0 ? n_177 > l_38 && (l_38 = n_177, d_23 = t_200, f_23 = 2) : l_38 < 0 && n_177 > l_38 && (l_38 = n_177, d_23 = t_200, f_23 = 2), e_210 = e_210.next;
                    }
                    if (l_38 < a) {
                        var e_212, t_201;
                        if (f_23 == 1)
                            e_212 = c_46, t_201 = u_36;
                        else {
                            e_212 = s_60, t_201 = d_23;
                            var i_115 = n;
                            n = r, r = i_115, o_69 = !o_69;
                        }
                        var a_90 = null, p_15 = 1e100, m_8 = e_212.edges.head;
                        for (; m_8 != null;) {
                            var e_213 = m_8.elt, n_178 = t_201.gnormx * e_213.gnormx + t_201.gnormy * e_213.gnormy;
                            n_178 < p_15 && (p_15 = n_178, a_90 = e_213), m_8 = m_8.next;
                        }
                        if (o_69 ? (i.x = -t_201.gnormx, i.y = -t_201.gnormy) : (i.x = t_201.gnormx, i.y = t_201.gnormy), l_38 >= 0) {
                            var e_214 = t_201.gp0, s_61 = t_201.gp1, c_47 = a_90.gp0, u_37 = a_90.gp1, d_24 = 0, f_24 = 0, p_16 = 0, m_9 = 0;
                            d_24 = s_61.x - e_214.x, f_24 = s_61.y - e_214.y, p_16 = u_37.x - c_47.x, m_9 = u_37.y - c_47.y;
                            var h_5 = 1 / (d_24 * d_24 + f_24 * f_24), g_7 = 1 / (p_16 * p_16 + m_9 * m_9), _5 = -(d_24 * (e_214.x - c_47.x) + f_24 * (e_214.y - c_47.y)) * h_5, v_7 = -(d_24 * (e_214.x - u_37.x) + f_24 * (e_214.y - u_37.y)) * h_5, y_8 = -(p_16 * (c_47.x - e_214.x) + m_9 * (c_47.y - e_214.y)) * g_7, b_9 = -(p_16 * (c_47.x - s_61.x) + m_9 * (c_47.y - s_61.y)) * g_7;
                            _5 < 0 ? _5 = 0 : _5 > 1 && (_5 = 1), v_7 < 0 ? v_7 = 0 : v_7 > 1 && (v_7 = 1), y_8 < 0 ? y_8 = 0 : y_8 > 1 && (y_8 = 1), b_9 < 0 ? b_9 = 0 : b_9 > 1 && (b_9 = 1);
                            var x_7 = 0, S_6 = 0, C_4 = _5;
                            x_7 = e_214.x + d_24 * C_4, S_6 = e_214.y + f_24 * C_4;
                            var w_3 = 0, T_2 = 0, ee_2 = v_7;
                            w_3 = e_214.x + d_24 * ee_2, T_2 = e_214.y + f_24 * ee_2;
                            var E_2 = 0, D_2 = 0, O_2 = y_8;
                            E_2 = c_47.x + p_16 * O_2, D_2 = c_47.y + m_9 * O_2;
                            var k_1 = 0, te_1 = 0, A_1 = b_9;
                            k_1 = c_47.x + p_16 * A_1, te_1 = c_47.y + m_9 * A_1;
                            var j_1 = 0, M_1 = 0;
                            j_1 = x_7 - c_47.x, M_1 = S_6 - c_47.y;
                            var N_1 = j_1 * j_1 + M_1 * M_1, P_1 = 0, F_1 = 0;
                            P_1 = w_3 - u_37.x, F_1 = T_2 - u_37.y;
                            var ne_1 = P_1 * P_1 + F_1 * F_1, I_1 = 0, L_1 = 0;
                            I_1 = E_2 - e_214.x, L_1 = D_2 - e_214.y;
                            var re_1 = I_1 * I_1 + L_1 * L_1, ie_1 = 0, ae_1 = 0;
                            ie_1 = k_1 - s_61.x, ae_1 = te_1 - s_61.y;
                            var oe_1 = ie_1 * ie_1 + ae_1 * ae_1, se_1 = 0, ce_1 = 0, le_1 = null;
                            N_1 < ne_1 ? (se_1 = x_7, ce_1 = S_6, le_1 = c_47) : (se_1 = w_3, ce_1 = T_2, le_1 = u_37, N_1 = ne_1);
                            var ue_1 = 0, de_1 = 0, fe_1 = null;
                            if (re_1 < oe_1 ? (ue_1 = E_2, de_1 = D_2, fe_1 = e_214) : (ue_1 = k_1, de_1 = te_1, fe_1 = s_61, re_1 = oe_1), N_1 < re_1 ? (n.x = se_1, n.y = ce_1, r.x = le_1.x, r.y = le_1.y, l_38 = Math.sqrt(N_1)) : (r.x = ue_1, r.y = de_1, n.x = fe_1.x, n.y = fe_1.y, l_38 = Math.sqrt(re_1)), l_38 != 0) {
                                i.x = r.x - n.x, i.y = r.y - n.y;
                                var e_215 = 1 / l_38;
                                i.x *= e_215, i.y *= e_215, o_69 && (i.x = -i.x, i.y = -i.y);
                            }
                            return l_38;
                        }
                        {
                            var e_216 = 0, i_116 = 0;
                            e_216 = a_90.gp0.x, i_116 = a_90.gp0.y;
                            var o_73 = 0, s_62 = 0;
                            o_73 = a_90.gp1.x, s_62 = a_90.gp1.y;
                            var c_48 = 0, l_39 = 0;
                            c_48 = o_73 - e_216, l_39 = s_62 - i_116;
                            var u_38 = t_201.gnormy * e_216 - t_201.gnormx * i_116, d_25 = t_201.gnormy * o_73 - t_201.gnormx * s_62, f_25 = 1 / (d_25 - u_38), p_17 = (-t_201.tp1 - u_38) * f_25;
                            if (p_17 > R.epsilon) {
                                var t_202 = p_17;
                                e_216 += c_48 * t_202, i_116 += l_39 * t_202;
                            }
                            var m_10 = (-t_201.tp0 - d_25) * f_25;
                            if (m_10 < -R.epsilon) {
                                var e_217 = m_10;
                                o_73 += c_48 * e_217, s_62 += l_39 * e_217;
                            }
                            var h_6 = e_216 * t_201.gnormx + i_116 * t_201.gnormy - t_201.gprojection, g_8 = o_73 * t_201.gnormx + s_62 * t_201.gnormy - t_201.gprojection;
                            if (h_6 < g_8) {
                                r.x = e_216, r.y = i_116;
                                var a_91 = -h_6;
                                return n.x = r.x + t_201.gnormx * a_91, n.y = r.y + t_201.gnormy * a_91, h_6;
                            }
                            {
                                r.x = o_73, r.y = s_62;
                                var e_218 = -g_8;
                                return n.x = r.x + t_201.gnormx * e_218, n.y = r.y + t_201.gnormy * e_218, g_8;
                            }
                        }
                    }
                    return a;
                }
                return a;
            }
        } };
        return e;
    }()), Xr = (function (_super) {
        __extends(Xr, _super);
        function Xr() {
            var _this = this;
            _this = _super.call(this) || this, _this.outer_zn = null, _this.dyn_fric = 0, _this.stat_fric = 0, _this.restitution = 0, _this.rfric = 0, _this.userdef_dyn_fric = !1, _this.userdef_stat_fric = !1, _this.userdef_restitution = !1, _this.userdef_rfric = !1, _this.s1 = null, _this.s2 = null, _this.wrap_contacts = null, _this.nx = 0, _this.ny = 0, _this.wrap_normal = null, _this.kMassa = 0, _this.kMassb = 0, _this.kMassc = 0, _this.Ka = 0, _this.Kb = 0, _this.Kc = 0, _this.rMass = 0, _this.jrAcc = 0, _this.rn1a = 0, _this.rt1a = 0, _this.rn1b = 0, _this.rt1b = 0, _this.rn2a = 0, _this.rt2a = 0, _this.rn2b = 0, _this.rt2b = 0, _this.k1x = 0, _this.k1y = 0, _this.k2x = 0, _this.k2y = 0, _this.surfacex = 0, _this.surfacey = 0, _this.ptype = 0, _this.lnormx = 0, _this.lnormy = 0, _this.lproj = 0, _this.radius = 0, _this.rev = !1, _this.biasCoef = 0, _this.__ref_edge1 = null, _this.__ref_edge2 = null, _this.__ref_vertex = 0, _this.__sep_edge = null, _this.__sep_owner = null, _this.c1 = null, _this.oc1 = null, _this.c2 = null, _this.oc2 = null, _this.hc2 = !1, _this.hpc2 = !1, _this.stat = !1, _this.mutable = !1, _this.pre_dt = 0, _this.pre_dt = 0, _this.mutable = !1, _this.stat = !1, _this.next = null, _this.hpc2 = !1, _this.hc2 = !1, _this.oc2 = null, _this.c2 = null, _this.oc1 = null, _this.c1 = null, _this.__ref_vertex = 0, _this.__ref_edge2 = null, _this.__ref_edge1 = null, _this.__sep_edge = null, _this.__sep_owner = null, _this.biasCoef = 0, _this.rev = !1, _this.radius = 0, _this.lproj = 0, _this.lnormy = 0, _this.lnormx = 0, _this.surfacey = 0, _this.surfacex = 0, _this.k2y = 0, _this.k2x = 0, _this.k1y = 0, _this.k1x = 0, _this.rt2b = 0, _this.rn2b = 0, _this.rt2a = 0, _this.rn2a = 0, _this.rt1b = 0, _this.rn1b = 0, _this.rt1a = 0, _this.rn1a = 0, _this.jrAcc = 0, _this.rMass = 0, _this.Kc = 0, _this.Kb = 0, _this.Ka = 0, _this.kMassc = 0, _this.kMassb = 0, _this.kMassa = 0, _this.wrap_normal = null, _this.ny = 0, _this.nx = 0, _this.innards = null, _this.wrap_contacts = null, _this.contacts = null, _this.s2 = null, _this.s1 = null, _this.userdef_rfric = !1, _this.userdef_restitution = !1, _this.userdef_stat_fric = !1, _this.userdef_dyn_fric = !1, _this.rfric = 0, _this.restitution = 0, _this.stat_fric = 0, _this.dyn_fric = 0, _this.outer_zn = null, _this.pre_dt = -1, _this.contacts = new Kr, _this.innards = new Wr, _this.type = Y.COL, _this.colarb = _this;
            return _this;
        }
        Xr.prototype.free = function () { this.userdef_dyn_fric = !1, this.userdef_stat_fric = !1, this.userdef_restitution = !1, this.userdef_rfric = !1, this.__ref_edge1 = this.__ref_edge2 = null, this.__sep_edge = this.__sep_owner = null; };
        Xr.prototype.normal_validate = function () { if (this.cleared)
            throw Error("Arbiter not currently in use"); this.wrap_normal.zpp_inner.x = this.nx, this.wrap_normal.zpp_inner.y = this.ny, this.ws1.id > this.ws2.id && (this.wrap_normal.zpp_inner.x = -this.wrap_normal.zpp_inner.x, this.wrap_normal.zpp_inner.y = -this.wrap_normal.zpp_inner.y); };
        Xr.prototype.getnormal = function () { var e = Y._nape.geom.Vec2.get(0, 0); this.wrap_normal = e, this.wrap_normal.zpp_inner._immutable = !0, this.wrap_normal.zpp_inner._inuse = !0, this.wrap_normal.zpp_inner._validate = this.normal_validate.bind(this); };
        Xr.prototype.validate_props = function () { this.invalidated && (this.invalidated = !1, this._calcFrictionRestitution()); };
        Xr.prototype._calcFrictionRestitution = function () { this.userdef_restitution || (this.restitution = this.s1.material.elasticity <= -1 / 0 || this.s2.material.elasticity <= -1 / 0 ? 0 : this.s1.material.elasticity >= 1 / 0 || this.s2.material.elasticity >= 1 / 0 ? 1 : (this.s1.material.elasticity + this.s2.material.elasticity) / 2, this.restitution < 0 && (this.restitution = 0), this.restitution > 1 && (this.restitution = 1)), this.userdef_dyn_fric || (this.dyn_fric = Math.sqrt(this.s1.material.dynamicFriction * this.s2.material.dynamicFriction)), this.userdef_stat_fric || (this.stat_fric = Math.sqrt(this.s1.material.staticFriction * this.s2.material.staticFriction)), this.userdef_rfric || (this.rfric = Math.sqrt(this.s1.material.rollingFriction * this.s2.material.rollingFriction)); };
        Xr.prototype.contacts_adder = function (e) { throw Error("Error: Cannot add new contacts, information required is far too specific and detailed :)"); };
        Xr.prototype.contacts_subber = function (e) { var t = null, n = null, r = this.innards.next, i = this.contacts.next; for (; i != null;) {
            if (i == e.zpp_inner) {
                this.contacts.erase(t), this.innards.erase(n), i.arbiter = null, i.next = Kr.zpp_pool, Kr.zpp_pool = i;
                break;
            }
            t = i, n = r, r = r.next, i = i.next;
        } };
        Xr.prototype.cleanupContacts = function () { var e = !0, t = null, n = null, r = this.innards.next; this.hc2 = !1; var i = this.contacts.next; for (; i != null;) {
            var a_92 = i;
            if (a_92.stamp + R.arbiterExpirationDelay < this.stamp) {
                var e_219 = this.contacts, o_74 = void 0, s_63 = void 0;
                t == null ? (o_74 = e_219.next, s_63 = o_74.next, e_219.next = s_63, e_219.next == null && (e_219.pushmod = !0)) : (o_74 = t.next, s_63 = o_74.next, t.next = s_63, s_63 == null && (e_219.pushmod = !0)), o_74._inuse = !1, e_219.modified = !0, e_219.length--, e_219.pushmod = !0, i = s_63;
                var c_49 = this.innards, l_40 = void 0, u_39 = void 0;
                n == null ? (l_40 = c_49.next, u_39 = l_40.next, c_49.next = u_39, c_49.next == null && (c_49.pushmod = !0)) : (l_40 = n.next, u_39 = l_40.next, n.next = u_39, u_39 == null && (c_49.pushmod = !0)), l_40._inuse = !1, c_49.modified = !0, c_49.length--, c_49.pushmod = !0, r = u_39;
                var d_26 = a_92;
                d_26.arbiter = null, d_26.next = Kr.zpp_pool, Kr.zpp_pool = d_26;
                continue;
            }
            var o_75 = a_92.inner, s_64 = a_92.active;
            a_92.active = a_92.stamp == this.stamp, a_92.active && (e ? (e = !1, this.c1 = o_75, this.oc1 = a_92) : (this.hc2 = !0, this.c2 = o_75, this.oc2 = a_92)), s_64 != a_92.active && (this.contacts.modified = !0), t = i, n = r, r = r.next, i = i.next;
        } if (this.hc2) {
            if (this.hpc2 = !0, this.oc1.posOnly) {
                var e_220 = this.c1;
                this.c1 = this.c2, this.c2 = e_220;
                var t_203 = this.oc1;
                this.oc1 = this.oc2, this.oc2 = t_203, this.hc2 = !1;
            }
            else
                this.oc2.posOnly && (this.hc2 = !1);
        }
        else
            this.hpc2 = !1; };
        Xr.prototype.setupcontacts = function () { var e = Y._zpp; this.wrap_contacts = e.util.ZPP_ContactList.get(this.contacts, !0), this.wrap_contacts.zpp_inner.immutable = !this.mutable, this.wrap_contacts.zpp_inner.adder = this.contacts_adder.bind(this), this.wrap_contacts.zpp_inner.dontremove = !0, this.wrap_contacts.zpp_inner.subber = this.contacts_subber.bind(this); };
        return Xr;
    }(Y)), Xr.CIRCLE = 2, Xr.zpp_pool = null, Zr = (function (_super) {
        __extends(Zr, _super);
        function Zr() {
            var _this = this;
            _this = _super.call(this) || this, _this.outer_zn = null, _this.centroidx = 0, _this.centroidy = 0, _this.overlap = 0, _this.r1x = 0, _this.r1y = 0, _this.r2x = 0, _this.r2y = 0, _this.nodrag = !1, _this.wMass = 0, _this.adamp = 0, _this.agamma = 0, _this.vMassa = 0, _this.vMassb = 0, _this.vMassc = 0, _this.dampx = 0, _this.dampy = 0, _this.lgamma = 0, _this.nx = 0, _this.ny = 0, _this.buoyx = 0, _this.buoyy = 0, _this.wrap_position = null, _this.mutable = !1, _this.pre_dt = 0, _this.pre_dt = 0, _this.mutable = !1, _this.wrap_position = null, _this.buoyy = 0, _this.buoyx = 0, _this.ny = 0, _this.nx = 0, _this.lgamma = 0, _this.dampy = 0, _this.dampx = 0, _this.vMassc = 0, _this.vMassb = 0, _this.vMassa = 0, _this.agamma = 0, _this.adamp = 0, _this.wMass = 0, _this.nodrag = !1, _this.r2y = 0, _this.r2x = 0, _this.r1y = 0, _this.r1x = 0, _this.overlap = 0, _this.centroidy = 0, _this.centroidx = 0, _this.next = null, _this.outer_zn = null, _this.type = Y.FLUID, _this.fluidarb = _this, _this.buoyx = 0, _this.buoyy = 0, _this.pre_dt = -1;
            return _this;
        }
        Zr.prototype.position_validate = function () { if (!this.active)
            throw Error("Arbiter not currently in use"); this.wrap_position.zpp_inner.x = this.centroidx, this.wrap_position.zpp_inner.y = this.centroidy; };
        Zr.prototype.position_invalidate = function (e) { this.centroidx = e.x, this.centroidy = e.y; };
        Zr.prototype.getposition = function () { var e = Y._nape.geom.Vec2.get(0, 0); this.wrap_position = e, this.wrap_position.zpp_inner._inuse = !0, this.wrap_position.zpp_inner._immutable = !this.mutable, this.wrap_position.zpp_inner._validate = this.position_validate.bind(this), this.wrap_position.zpp_inner._invalidate = this.position_invalidate.bind(this); };
        return Zr;
    }(Y)), Zr.zpp_pool = null, Qr = (function (_super) {
        __extends(Qr, _super);
        function Qr() {
            var _this = this;
            _this = _super.call(this) || this, _this.next = null, _this.type = Y.SENSOR, _this.sensorarb = _this;
            return _this;
        }
        return Qr;
    }(Y)), Qr.zpp_pool = null, $r = (function () {
        function e() {
            this.outer_body = null, this.outer_con = null, this.outer_int = null, this.event = 0, this.listener = null, this.space = null, this.index = 0, this.next = null, this.prev = null, this.length = 0, this.int1 = null, this.int2 = null, this.set = null, this.wrap_arbiters = null, this.pre_arbiter = null, this.pre_swapped = !1, this.body = null, this.constraint = null;
        }
        e.prototype.wrapper_body = function () { return this.outer_body == null && (e.internal = !0, this.outer_body = e._createBodyCb(), e.internal = !1, this.outer_body.zpp_inner = this), this.outer_body; };
        e.prototype.wrapper_con = function () { return this.outer_con == null && (e.internal = !0, this.outer_con = e._createConCb(), e.internal = !1, this.outer_con.zpp_inner = this), this.outer_con; };
        e.prototype.wrapper_int = function () { var t = e._zpp; return this.outer_int == null && (e.internal = !0, this.outer_int = e._createIntCb(), e.internal = !1, this.outer_int.zpp_inner = this), this.wrap_arbiters == null ? this.wrap_arbiters = t.util.ZPP_ArbiterList.get(this.set.arbiters, !0) : this.wrap_arbiters.zpp_inner.inner = this.set.arbiters, this.wrap_arbiters.zpp_inner.zip_length = !0, this.wrap_arbiters.zpp_inner.at_ite = null, this.outer_int; };
        e.prototype.push = function (e) { this.prev == null ? this.next = e : this.prev.next = e, e.prev = this.prev, e.next = null, this.prev = e, this.length++; };
        e.prototype.push_rev = function (e) { this.next == null ? this.prev = e : this.next.prev = e, e.next = this.next, e.prev = null, this.next = e, this.length++; };
        e.prototype.pop = function () { var e = this.next; return this.next = e.next, this.next == null ? this.prev = null : this.next.prev = null, this.length--, e; };
        e.prototype.pop_rev = function () { var e = this.prev; return this.prev = e.prev, this.prev == null ? this.next = null : this.prev.next = null, this.length--, e; };
        e.prototype.empty = function () { return this.next == null; };
        e.prototype.clear = function () { for (; !this.empty();)
            this.pop(); };
        e.prototype.splice = function (e) { var t = e.next; return e.prev == null ? (this.next = e.next, this.next == null ? this.prev = null : this.next.prev = null) : (e.prev.next = e.next, e.next == null ? this.prev = e.prev : e.next.prev = e.prev), this.length--, t; };
        e.prototype.at = function (e) { var t = this.next; for (; e-- != 0;)
            t = t.next; return t; };
        e.prototype.free = function () { this.int1 = this.int2 = null, this.body = null, this.constraint = null, this.listener = null, this.wrap_arbiters != null && (this.wrap_arbiters.zpp_inner.inner = null), this.set = null; };
        return e;
    }()), $r._zpp = null, $r.internal = !1, $r.zpp_pool = null, $r._createBodyCb = null, $r._createConCb = null, $r._createIntCb = null, $r._createPreCb = null, ei = $r, ti = (function () {
        function ti() {
            this.length = 0, this.pushmod = !1, this.modified = !1, this._inuse = !1, this.next = null, this.comps = null, this.sleep = !1, this.waket = 0, this.comps = new Ft;
        }
        ti.prototype.add = function (e) { e._inuse = !0; var t = e; return t.next = this.next, this.next = t, this.modified = !0, this.length++, e; };
        ti.prototype.insert = function (e, t) { t._inuse = !0; var n = t; return e == null ? (n.next = this.next, this.next = n) : (n.next = e.next, e.next = n), this.pushmod = this.modified = !0, this.length++, n; };
        ti.prototype.pop = function () { var e = this.next; this.next = e.next, e._inuse = !1, this.next == null && (this.pushmod = !0), this.modified = !0, this.length--; };
        ti.prototype.pop_unsafe = function () { var e = this.next; return this.pop(), e; };
        ti.prototype.remove = function (e) { var t = null, n = this.next; for (; n != null;) {
            if (n == e) {
                var e_221 = void 0, n_179 = void 0;
                t == null ? (e_221 = this.next, n_179 = e_221.next, this.next = n_179, this.next == null && (this.pushmod = !0)) : (e_221 = t.next, n_179 = e_221.next, t.next = n_179, n_179 == null && (this.pushmod = !0)), e_221._inuse = !1, this.modified = !0, this.length--, this.pushmod = !0;
                break;
            }
            t = n, n = n.next;
        } };
        ti.prototype.erase = function (e) { var t, n; return e == null ? (t = this.next, n = t.next, this.next = n, this.next == null && (this.pushmod = !0)) : (t = e.next, n = t.next, e.next = n, n == null && (this.pushmod = !0)), t._inuse = !1, this.modified = !0, this.length--, this.pushmod = !0, n; };
        ti.prototype.clear = function () { };
        ti.prototype.reverse = function () { var e = this.next, t = null; for (; e != null;) {
            var n_180 = e.next;
            e.next = t, this.next = e, t = e, e = n_180;
        } this.modified = !0, this.pushmod = !0; };
        ti.prototype.empty = function () { return this.next == null; };
        ti.prototype.has = function (e) { var t = !1, n = this.next; for (; n != null;) {
            if (n == e) {
                t = !0;
                break;
            }
            n = n.next;
        } return t; };
        ti.prototype.iterator_at = function (e) { var t = this.next; for (; e-- > 0 && t != null;)
            t = t.next; return t; };
        ti.prototype.at = function (e) { var t = this.iterator_at(e); return t == null ? null : t; };
        return ti;
    }()), ti.zpp_pool = null, ni = (function () {
        function e() {
            this.id = 0, this.di = 0, this.int1 = null, this.int2 = null, this.arbiters = null, this.COLLISIONstate = null, this.COLLISIONstamp = null, this.SENSORstate = null, this.SENSORstamp = null, this.FLUIDstate = null, this.FLUIDstamp = null, this.length = 0, this.pushmod = !1, this.modified = !1, this._inuse = !1, this.next = null, this.freed = !1, this.lazydel = !1, this.arbiters = new gt;
        }
        e.get = function (t, n) { var r; return e.zpp_pool == null ? r = new e : (r = e.zpp_pool, e.zpp_pool = r.next, r.next = null), r.freed = !1, r.lazydel = !1, r.COLLISIONstate = 1, r.COLLISIONstamp = 0, r.SENSORstate = 1, r.SENSORstamp = 0, r.FLUIDstate = 1, r.FLUIDstamp = 0, t.id < n.id ? (r.int1 = t, r.int2 = n) : (r.int1 = n, r.int2 = t), r.id = r.int1.id, r.di = r.int2.id, r; };
        e.prototype.pop = function () { var e = this.next; this.next = e.next, e._inuse = !1, this.next == null && (this.pushmod = !0), this.modified = !0, this.length--; };
        e.prototype.pop_unsafe = function () { var e = this.next; return this.pop(), e; };
        e.prototype.remove_arb = function (e) { var t = this.arbiters, n = null, r = t.head; for (; r != null;) {
            if (r.elt == e) {
                var e_222 = void 0, r_149 = void 0;
                n == null ? (e_222 = t.head, r_149 = e_222.next, t.head = r_149, t.head == null && (t.pushmod = !0)) : (e_222 = n.next, r_149 = e_222.next, n.next = r_149, r_149 == null && (t.pushmod = !0));
                var i_117 = e_222;
                i_117.elt = null;
                var a_93 = Fe;
                i_117.next = a_93.zpp_pool, a_93.zpp_pool = i_117, t.modified = !0, t.length--, t.pushmod = !0;
                break;
            }
            n = r, r = r.next;
        } };
        e.prototype.empty_arb = function (e) { var t = !0, n = this.arbiters.head; for (; n != null;)
            if ((n.elt.type & e) == 0) {
                n = n.next;
                continue;
            }
            else {
                t = !1;
                break;
            } return t; };
        return e;
    }()), ni.zpp_pool = null, ri = ni, ii = (function () {
        function ii(e) {
            this.cbsets = null, this.space = null;
            var t = Qt;
            t.zpp_pool == null ? this.cbsets = new t : (this.cbsets = t.zpp_pool, t.zpp_pool = this.cbsets.next, this.cbsets.next = null), this.cbsets.lt = J.setlt, this.space = e;
        }
        ii.prototype.get = function (e) { if (e.head == null)
            return null; var t; J.zpp_pool == null ? t = new J : (t = J.zpp_pool, J.zpp_pool = t.next, t.next = null); var n = t.cbTypes; t.cbTypes = e; var r = this.cbsets.find_weak(t), i; if (r != null)
            i = r.data;
        else {
            var t_204 = J.get(e);
            this.cbsets.insert(t_204), t_204.manager = this, i = t_204;
        } t.cbTypes = n; var a = t; for (a.listeners.clear(), a.zip_listeners = !0, a.bodylisteners.clear(), a.zip_bodylisteners = !0, a.conlisteners.clear(), a.zip_conlisteners = !0; a.cbTypes.head != null;)
            a.cbTypes.pop_unsafe().cbsets.remove(a); return a.next = J.zpp_pool, J.zpp_pool = a, i; };
        ii.prototype.remove = function (e) { for (this.cbsets.remove(e); e.cbpairs.head != null;) {
            var t_205 = e.cbpairs.pop_unsafe();
            t_205.a != t_205.b && (e == t_205.a ? t_205.b.cbpairs.remove(t_205) : t_205.a.cbpairs.remove(t_205));
            var n_181 = t_205;
            n_181.a = n_181.b = null, n_181.listeners.clear(), n_181.next = Tr.zpp_pool, Tr.zpp_pool = n_181;
        } e.manager = null; };
        ii.prototype.clear = function () { };
        ii.prototype.validate = function () { if (!this.cbsets.empty()) {
            var e_223 = this.cbsets.parent;
            for (; e_223.prev != null;)
                e_223 = e_223.prev;
            for (; e_223 != null;)
                if (e_223.data.validate(), e_223.next != null)
                    for (e_223 = e_223.next; e_223.prev != null;)
                        e_223 = e_223.prev;
                else {
                    for (; e_223.parent != null && e_223 == e_223.parent.next;)
                        e_223 = e_223.parent;
                    e_223 = e_223.parent;
                }
        } };
        ii.prototype.pair = function (e, t) { return J.findOrCreatePair(e, t); };
        return ii;
    }()), ai = (function () {
        function ai() {
            this.totalStepTime = 0, this.broadphaseTime = 0, this.narrowphaseTime = 0, this.velocitySolverTime = 0, this.positionSolverTime = 0, this.ccdTime = 0, this.sleepTime = 0, this.bodyCount = 0, this.dynamicBodyCount = 0, this.staticBodyCount = 0, this.kinematicBodyCount = 0, this.sleepingBodyCount = 0, this.contactCount = 0, this.constraintCount = 0, this.broadphasePairCount = 0;
        }
        ai.prototype.reset = function () { this.totalStepTime = 0, this.broadphaseTime = 0, this.narrowphaseTime = 0, this.velocitySolverTime = 0, this.positionSolverTime = 0, this.ccdTime = 0, this.sleepTime = 0, this.bodyCount = 0, this.dynamicBodyCount = 0, this.staticBodyCount = 0, this.kinematicBodyCount = 0, this.sleepingBodyCount = 0, this.contactCount = 0, this.constraintCount = 0, this.broadphasePairCount = 0; };
        ai.prototype.toJSON = function () { return { totalStepTime: this.totalStepTime, broadphaseTime: this.broadphaseTime, narrowphaseTime: this.narrowphaseTime, velocitySolverTime: this.velocitySolverTime, positionSolverTime: this.positionSolverTime, ccdTime: this.ccdTime, sleepTime: this.sleepTime, bodyCount: this.bodyCount, dynamicBodyCount: this.dynamicBodyCount, staticBodyCount: this.staticBodyCount, kinematicBodyCount: this.kinematicBodyCount, sleepingBodyCount: this.sleepingBodyCount, contactCount: this.contactCount, constraintCount: this.constraintCount, broadphasePairCount: this.broadphasePairCount }; };
        return ai;
    }()), oi = (function () {
        function e() {
            this.normal = null, this.shape = null, this.convex = null, this.position = null, this.ray = null, this.inner = !1, this.next = null, this.toiDistance = 0;
        }
        e.getRay = function (t, n, r, i) { var a; e.rayPool == null ? (e.internal = !0, a = e._createRayResult(), a.zpp_inner = new e, a.zpp_inner.ray = a, e.internal = !1) : (a = e.rayPool.ray, e.rayPool = e.rayPool.next, a.zpp_inner.next = null); var o = a.zpp_inner; return o.normal = t, t.zpp_inner._immutable = !0, o.toiDistance = n, o.inner = r, o.shape = i, a; };
        e.getConvex = function (t, n, r, i) { var a; e.convexPool == null ? (e.internal = !0, a = e._createConvexResult(), a.zpp_inner = new e, a.zpp_inner.convex = a, e.internal = !1) : (a = e.convexPool.convex, e.convexPool = e.convexPool.next, a.zpp_inner.next = null); var o = a.zpp_inner; return o.normal = t, o.position = n, t.zpp_inner._immutable = !0, n.zpp_inner._immutable = !0, o.toiDistance = r, o.shape = i, a; };
        e.prototype.free = function () { e._disposeVec2(this.normal), this.position != null && e._disposeVec2(this.position), this.shape = null, this.toiDistance = 0, this.convex == null ? (this.next = e.rayPool, e.rayPool = this) : (this.next = e.convexPool, e.convexPool = this); };
        e._disposeVec2 = function (e) { if (e.zpp_inner._immutable = !1, e != null && e.zpp_disp)
            throw Error("Vec2 has been disposed and cannot be used!"); var t = e.zpp_inner; if (t._immutable)
            throw Error("Vec2 is immutable"); if (t._isimmutable != null && t._isimmutable(), t._inuse)
            throw Error("This Vec2 is not disposable"); var n = e.zpp_inner; e.zpp_inner.outer = null, e.zpp_inner = null, e.zpp_pool = null, H.nextVec2 == null ? H.poolVec2 = e : H.nextVec2.zpp_pool = e, H.nextVec2 = e, e.zpp_disp = !0, n.free(), n.next = V.zpp_pool, V.zpp_pool = n; };
        return e;
    }()), oi.rayPool = null, oi.convexPool = null, oi.internal = !1, oi._createRayResult = null, oi._createConvexResult = null, si = oi, X = (function () {
        function X() {
            this.next = null, this.toi = 0, this.s1 = null, this.s2 = null, this.arbiter = null, this.frozen1 = !1, this.frozen2 = !1, this.slipped = !1, this.failed = !1, this.kinematic = !1, this.c1 = V.get(0, 0), this.c2 = V.get(0, 0), this.axis = V.get(0, 0);
        }
        return X;
    }()), X.zpp_pool = null, ci = function (e) { return e.id; }, li = function (e) { return e.id; }, ui = function (e) { var t = e.s1 == null ? 0 : e.s1.id, n = e.s2 == null ? 0 : e.s2.id, r = t < n ? t : n, i = t < n ? n : t; return r * 1e6 + i; }, di = function (e) { return e.isBody ? e.body.id : e.constraint.id + 1e9; }, fi = [], pi = new Float64Array(64), mi = new Float64Array(64), hi = new Uint8Array(64), gi = new Int32Array(64), _i = new Int32Array(64), vi = (function () {
        function e(t, n) {
            var _this = this;
            this.outer = null, this.userData = null, this.profilerEnabled = !1, this._metrics = new ai, this.gravityx = 0, this.gravityy = 0, this.wrap_gravity = null, this.bodies = null, this.wrap_bodies = null, this.compounds = null, this.wrap_compounds = null, this.constraints = null, this.wrap_constraints = null, this.kinematics = null, this.bphase = null, this.__static = null, this.global_lin_drag = 0, this.global_ang_drag = 0, this.stamp = 0, this.midstep = !1, this.time = 0, this.sortcontacts = !1, this.deterministic = !1, this.subSteps = 1, this.c_arbiters_true = null, this.c_arbiters_false = null, this.f_arbiters = null, this.s_arbiters = null, this.wrap_arbiters = null, this.live = null, this.wrap_live = null, this.live_constraints = null, this.wrap_livecon = null, this.staticsleep = null, this.islands = null, this.listeners = null, this.wrap_listeners = null, this.callbacks = null, this.callbackset_list = null, this.cbsets = null, this.convexShapeList = null, this.pre_dt = 0, this.toiEvents = null, this.continuous = !1, this.precb = null, this.prelisteners = null, this.mrca1 = null, this.mrca2 = null, this.preListenerCount = 0, this.solveArbs = [], this.solveCount = 0, this.solveDirty = !0, this.prelisteners = null, this.precb = null, this.continuous = !1, this.toiEvents = null, this.pre_dt = 0, this.convexShapeList = null, this.cbsets = null, this.callbackset_list = null, this.callbacks = null, this.wrap_listeners = null, this.listeners = null, this.islands = null, this.staticsleep = null, this.wrap_livecon = null, this.live_constraints = null, this.wrap_live = null, this.live = null, this.wrap_arbiters = null, this.s_arbiters = null, this.f_arbiters = null, this.c_arbiters_false = null, this.c_arbiters_true = null, this.sortcontacts = !1, this.deterministic = !1, this.time = 0, this.midstep = !1, this.stamp = 0, this.global_ang_drag = 0, this.global_lin_drag = 0, this.__static = null, this.bphase = null, this.kinematics = null, this.wrap_constraints = null, this.constraints = null, this.wrap_compounds = null, this.compounds = null, this.wrap_bodies = null, this.bodies = null, this.wrap_gravity = null, this.gravityy = 0, this.gravityx = 0, this.userData = null, this.outer = null, this.toiEvents = new Vt, this.global_lin_drag = .015, this.global_ang_drag = .015, ei.internal = !0, this.precb = ei._createPreCb(), this.precb.zpp_inner = new ei, ei.internal = !1, this.sortcontacts = !0, this.pre_dt = 0;
            var r;
            n == null ? r = !0 : (U.Broadphase_DYNAMIC_AABB_TREE == null && (U.internal = !0, U.Broadphase_DYNAMIC_AABB_TREE = new e._nape.space.Broadphase, U.internal = !1), r = n == U.Broadphase_DYNAMIC_AABB_TREE), r ? this.bphase = new e._zpp.space.ZPP_DynAABBPhase(this) : (U.Broadphase_SPATIAL_HASH == null && (U.internal = !0, U.Broadphase_SPATIAL_HASH = new e._nape.space.Broadphase, U.internal = !1), n == U.Broadphase_SPATIAL_HASH ? this.bphase = new e._zpp.space.ZPP_SpatialHashPhase(this) : (U.Broadphase_SWEEP_AND_PRUNE == null && (U.internal = !0, U.Broadphase_SWEEP_AND_PRUNE = new e._nape.space.Broadphase, U.internal = !1), n == U.Broadphase_SWEEP_AND_PRUNE && (this.bphase = new e._zpp.space.ZPP_SweepPhase(this)))), this.time = 0, t == null ? (this.gravityx = 0, this.gravityy = 0) : (this.gravityx = t.x, this.gravityy = t.y), this.bodies = new pt, this.wrap_bodies = e._zpp.util.ZPP_BodyList.get(this.bodies), this.wrap_bodies.zpp_inner.adder = function (e) { return _this.bodies_adder(e); }, this.wrap_bodies.zpp_inner.subber = function (e) { return _this.bodies_subber(e); }, this.wrap_bodies.zpp_inner._modifiable = function () { return _this.bodies_modifiable(); }, this.compounds = new ht, this.wrap_compounds = e._zpp.util.ZPP_CompoundList.get(this.compounds), this.wrap_compounds.zpp_inner.adder = function (e) { return _this.compounds_adder(e); }, this.wrap_compounds.zpp_inner.subber = function (e) { return _this.compounds_subber(e); }, this.wrap_compounds.zpp_inner._modifiable = function () { return _this.compounds_modifiable(); }, this.kinematics = new pt, this.c_arbiters_true = new zt, this.c_arbiters_false = new zt, this.f_arbiters = new It, this.s_arbiters = new Lt, this.islands = new ti, this.live = new pt, this.wrap_live = e._zpp.util.ZPP_BodyList.get(this.live, !0), this.staticsleep = new pt, this.constraints = new mt, this.wrap_constraints = e._zpp.util.ZPP_ConstraintList.get(this.constraints), this.wrap_constraints.zpp_inner.adder = function (e) { return _this.constraints_adder(e); }, this.wrap_constraints.zpp_inner.subber = function (e) { return _this.constraints_subber(e); }, this.wrap_constraints.zpp_inner._modifiable = function () { return _this.constraints_modifiable(); }, this.live_constraints = new mt, this.wrap_livecon = e._zpp.util.ZPP_ConstraintList.get(this.live_constraints, !0), this.__static = Ar.__static(), this.__static.zpp_inner.space = this, this.callbacks = new ei, this.midstep = !1, this.listeners = new Rt, this.wrap_listeners = e._zpp.util.ZPP_ListenerList.get(this.listeners), this.wrap_listeners.zpp_inner.adder = function (e) { return _this.listeners_adder(e); }, this.wrap_listeners.zpp_inner.subber = function (e) { return _this.listeners_subber(e); }, this.wrap_listeners.zpp_inner._modifiable = function () { return _this.listeners_modifiable(); }, this.callbackset_list = new ri, this.mrca1 = new yt, this.mrca2 = new yt, this.prelisteners = new _t, this.cbsets = new ii(this);
        }
        e.prototype.getgravity = function () {
            var _this = this;
            var t = e._nape.geom.Vec2.get(this.gravityx, this.gravityy);
            this.wrap_gravity = t, this.wrap_gravity.zpp_inner._inuse = !0, this.wrap_gravity.zpp_inner._invalidate = function (e) { return _this.gravity_invalidate(e); }, this.wrap_gravity.zpp_inner._validate = function () { return _this.gravity_validate(); };
        };
        e.prototype.gravity_invalidate = function (e) { if (this.midstep)
            throw Error("Space::gravity cannot be set during space step"); this.gravityx = e.x, this.gravityy = e.y; var t = new ht, n = this.bodies.head; for (; n != null;) {
            var e_224 = n.elt;
            e_224.world || (e_224.component.waket = this.stamp + +!this.midstep, e_224.type == 3 && (e_224.kinematicDelaySleep = !0), e_224.component.sleeping && this.really_wake(e_224, !1)), n = n.next;
        } var r = this.compounds.head; for (; r != null;) {
            var e_225 = r.elt;
            t.add(e_225), r = r.next;
        } for (; t.head != null;) {
            var e_226 = t.pop_unsafe(), n_182 = e_226.bodies.head;
            for (; n_182 != null;) {
                var e_227 = n_182.elt;
                e_227.world || (e_227.component.waket = this.stamp + +!this.midstep, e_227.type == 3 && (e_227.kinematicDelaySleep = !0), e_227.component.sleeping && this.really_wake(e_227, !1)), n_182 = n_182.next;
            }
            var r_150 = e_226.compounds.head;
            for (; r_150 != null;) {
                var e_228 = r_150.elt;
                t.add(e_228), r_150 = r_150.next;
            }
        } };
        e.prototype.gravity_validate = function () { this.wrap_gravity.zpp_inner.x = this.gravityx, this.wrap_gravity.zpp_inner.y = this.gravityy; };
        e.prototype.clear = function () { for (; this.listeners.head != null;) {
            var e_229 = this.listeners.pop_unsafe();
            this.remListener(e_229);
        } for (; this.callbackset_list.next != null;) {
            var e_230 = this.callbackset_list.pop_unsafe();
            e_230.arbiters.clear();
            var t_206 = e_230;
            t_206.int1 = t_206.int2 = null, t_206.id = t_206.di = -1, t_206.freed = !0, t_206.next = ri.zpp_pool, ri.zpp_pool = t_206;
        } for (; this.c_arbiters_true.head != null;) {
            var e_231 = this.c_arbiters_true.pop_unsafe();
            for (e_231.cleared || (e_231.b1.arbiters.remove(e_231), e_231.b2.arbiters.remove(e_231), e_231.pair != null && (e_231.pair.arb = null, e_231.pair = null)), e_231.b1 = e_231.b2 = null, e_231.active = !1, e_231.intchange = !1; e_231.contacts.next != null;) {
                var t_207 = e_231.contacts, n_183 = t_207.next;
                t_207.pop();
                var r_151 = n_183;
                r_151.arbiter = null, r_151.next = Kr.zpp_pool, Kr.zpp_pool = r_151;
                var i_118 = e_231.innards, a_94 = i_118.next;
                i_118.next = a_94.next, a_94._inuse = !1, i_118.next == null && (i_118.pushmod = !0), i_118.modified = !0, i_118.length--;
            }
            var t_208 = e_231;
            t_208.free(), t_208.next = Xr.zpp_pool, Xr.zpp_pool = t_208, e_231.pre_dt = -1;
        } for (; this.c_arbiters_false.head != null;) {
            var e_232 = this.c_arbiters_false.pop_unsafe();
            for (e_232.cleared || (e_232.b1.arbiters.remove(e_232), e_232.b2.arbiters.remove(e_232), e_232.pair != null && (e_232.pair.arb = null, e_232.pair = null)), e_232.b1 = e_232.b2 = null, e_232.active = !1, e_232.intchange = !1; e_232.contacts.next != null;) {
                var t_209 = e_232.contacts, n_184 = t_209.next;
                t_209.pop();
                var r_152 = n_184;
                r_152.arbiter = null, r_152.next = Kr.zpp_pool, Kr.zpp_pool = r_152;
                var i_119 = e_232.innards, a_95 = i_119.next;
                i_119.next = a_95.next, a_95._inuse = !1, i_119.next == null && (i_119.pushmod = !0), i_119.modified = !0, i_119.length--;
            }
            var t_210 = e_232;
            t_210.free(), t_210.next = Xr.zpp_pool, Xr.zpp_pool = t_210, e_232.pre_dt = -1;
        } for (; this.s_arbiters.head != null;) {
            var e_233 = this.s_arbiters.pop_unsafe();
            e_233.cleared || (e_233.b1.arbiters.remove(e_233), e_233.b2.arbiters.remove(e_233), e_233.pair != null && (e_233.pair.arb = null, e_233.pair = null)), e_233.b1 = e_233.b2 = null, e_233.active = !1, e_233.intchange = !1;
            var t_211 = e_233;
            t_211.next = Qr.zpp_pool, Qr.zpp_pool = t_211;
        } for (; this.f_arbiters.head != null;) {
            var e_234 = this.f_arbiters.pop_unsafe();
            e_234.cleared || (e_234.b1.arbiters.remove(e_234), e_234.b2.arbiters.remove(e_234), e_234.pair != null && (e_234.pair.arb = null, e_234.pair = null)), e_234.b1 = e_234.b2 = null, e_234.active = !1, e_234.intchange = !1;
            var t_212 = e_234;
            t_212.next = Zr.zpp_pool, Zr.zpp_pool = t_212, e_234.pre_dt = -1;
        } for (this.bphase.clear(); this.bodies.head != null;) {
            var e_235 = this.bodies.pop_unsafe();
            if (e_235.component != null) {
                var t_213 = e_235.component.island;
                if (t_213 != null) {
                    for (; t_213.comps.head != null;) {
                        var e_236 = t_213.comps.pop_unsafe();
                        e_236.sleeping = !1, e_236.island = null, e_236.parent = e_236, e_236.rank = 0;
                    }
                    var e_237 = t_213;
                    e_237.next = ti.zpp_pool, ti.zpp_pool = e_237;
                }
            }
            e_235.removedFromSpace(), e_235.space = null;
        } for (; this.constraints.head != null;) {
            var e_238 = this.constraints.pop_unsafe();
            if (e_238.component != null) {
                var t_214 = e_238.component.island;
                if (t_214 != null) {
                    for (; t_214.comps.head != null;) {
                        var e_239 = t_214.comps.pop_unsafe();
                        e_239.sleeping = !1, e_239.island = null, e_239.parent = e_239, e_239.rank = 0;
                    }
                    var e_240 = t_214;
                    e_240.next = ti.zpp_pool, ti.zpp_pool = e_240;
                }
            }
            e_238.removedFromSpace(), e_238.space = null;
        } this.kinematics.clear(); var e = new ht; for (; this.compounds.head != null;) {
            var t_215 = this.compounds.pop_unsafe();
            e.add(t_215);
        } for (; e.head != null;) {
            var t_216 = e.pop_unsafe();
            t_216.removedFromSpace(), t_216.space = null;
            var n_185 = t_216.bodies.head;
            for (; n_185 != null;) {
                var e_241 = n_185.elt;
                if (e_241.component != null) {
                    var t_217 = e_241.component.island;
                    if (t_217 != null) {
                        for (; t_217.comps.head != null;) {
                            var e_242 = t_217.comps.pop_unsafe();
                            e_242.sleeping = !1, e_242.island = null, e_242.parent = e_242, e_242.rank = 0;
                        }
                        var e_243 = t_217;
                        e_243.next = ti.zpp_pool, ti.zpp_pool = e_243;
                    }
                }
                e_241.removedFromSpace(), e_241.space = null, n_185 = n_185.next;
            }
            var r_153 = t_216.constraints.head;
            for (; r_153 != null;) {
                var e_244 = r_153.elt;
                if (e_244.component != null) {
                    var t_218 = e_244.component.island;
                    if (t_218 != null) {
                        for (; t_218.comps.head != null;) {
                            var e_245 = t_218.comps.pop_unsafe();
                            e_245.sleeping = !1, e_245.island = null, e_245.parent = e_245, e_245.rank = 0;
                        }
                        var e_246 = t_218;
                        e_246.next = ti.zpp_pool, ti.zpp_pool = e_246;
                    }
                }
                e_244.removedFromSpace(), e_244.space = null, r_153 = r_153.next;
            }
            var i_120 = t_216.compounds.head;
            for (; i_120 != null;) {
                var t_219 = i_120.elt;
                e.add(t_219), i_120 = i_120.next;
            }
        } this.staticsleep.clear(), this.live.clear(), this.live_constraints.clear(), this.stamp = 0, this.time = 0, this.mrca1.clear(), this.mrca2.clear(), this.prelisteners.clear(), this.cbsets.clear(); };
        e.prototype.bodies_adder = function (e) { if (e.zpp_inner.compound != null)
            throw Error("Error: Cannot set the space of a Body belonging to a Compound, only the root Compound space can be set"); return e.zpp_inner.space != this && (e.zpp_inner.space != null && e.zpp_inner.space.outer.zpp_inner.wrap_bodies.remove(e), this.addBody(e.zpp_inner), !0); };
        e.prototype.bodies_subber = function (e) { this.remBody(e.zpp_inner); };
        e.prototype.bodies_modifiable = function () { if (this.midstep)
            throw Error("Space::bodies cannot be set during space step()"); };
        e.prototype.compounds_adder = function (e) { if (e.zpp_inner.compound != null)
            throw Error("Error: Cannot set the space of an inner Compound, only the root Compound space can be set"); return e.zpp_inner.space != this && (e.zpp_inner.space != null && e.zpp_inner.space.wrap_compounds.remove(e), this.addCompound(e.zpp_inner), !0); };
        e.prototype.compounds_subber = function (e) { this.remCompound(e.zpp_inner); };
        e.prototype.compounds_modifiable = function () { if (this.midstep)
            throw Error("Space::compounds cannot be set during space step()"); };
        e.prototype.constraints_adder = function (e) { if (e.zpp_inner.compound != null)
            throw Error("Error: Cannot set the space of a Constraint belonging to a Compound, only the root Compound space can be set"); return e.zpp_inner.space != this && (e.zpp_inner.space != null && e.zpp_inner.space.outer.zpp_inner.wrap_constraints.remove(e), this.addConstraint(e.zpp_inner), !0); };
        e.prototype.constraints_subber = function (e) { this.remConstraint(e.zpp_inner); };
        e.prototype.constraints_modifiable = function () { if (this.midstep)
            throw Error("Space::constraints cannot be set during space step()"); };
        e.prototype.listeners_adder = function (e) { return e.zpp_inner.space != this && (e.zpp_inner.space != null && e.zpp_inner.space.outer.zpp_inner.wrap_listeners.remove(e), this.addListener(e.zpp_inner), !0); };
        e.prototype.listeners_subber = function (e) { this.remListener(e.zpp_inner); };
        e.prototype.listeners_modifiable = function () { if (this.midstep)
            throw Error("Space::listeners cannot be set during space step()"); };
        e.prototype.addListener = function (e) { e.space = this, e.addedToSpace(); };
        e.prototype.remListener = function (e) { e.removedFromSpace(), e.space = null; };
        e.prototype.add_callbackset = function (e) { e.int1.cbsets.add(e), e.int2.cbsets.add(e); var t = this.callbackset_list; e._inuse = !0; var n = e; n.next = t.next, t.next = n, t.modified = !0, t.length++; };
        e.prototype.remove_callbackset = function (e) { e.lazydel = !0, e.int1.cbsets.remove(e), e.int2.cbsets.remove(e); };
        e.prototype.transmitType = function (e, t) { var n = e; n.world || (n.component.waket = this.stamp + +!this.midstep, n.type == 3 && (n.kinematicDelaySleep = !0), n.component.sleeping && this.really_wake(n, !1)), e.type == 2 ? this.live.remove(e) : e.type == 3 ? (this.kinematics.remove(e), this.staticsleep.remove(e)) : e.type == 1 && this.staticsleep.remove(e), e.type = t, e.type == 3 && this.kinematics.add(e), e.type == 1 && this.static_validation(e), e.component.sleeping = !0; var r = e; if (r.world || (r.component.waket = this.stamp + +!this.midstep, r.type == 3 && (r.kinematicDelaySleep = !0), r.component.sleeping && this.really_wake(r, !0)), !this.bphase.is_sweep) {
            var t_220 = e.shapes.head;
            for (; t_220 != null;) {
                var e_247 = t_220.elt;
                e_247.node != null && this.bphase.sync(e_247), t_220 = t_220.next;
            }
        } };
        e.prototype.removed_shape = function (e, t) { t == null && (t = !1); var n = e.body; t || n.wake(); var r = null, i = n.arbiters.head; for (; i != null;) {
            var t_221 = i.elt;
            if (t_221.ws1 == e || t_221.ws2 == e) {
                if (t_221.present != 0) {
                    this.MRCA_chains(t_221.ws1, t_221.ws2);
                    var e_248 = this.mrca1.head;
                    for (; e_248 != null;) {
                        var n_186 = e_248.elt, r_154 = this.mrca2.head;
                        for (; r_154 != null;) {
                            var e_249 = r_154.elt, i_121 = n_186.cbSet, a_96 = e_249.cbSet;
                            if (i_121.validate(), a_96.validate(), J.findOrCreatePair(i_121, a_96).listeners.head == null) {
                                r_154 = r_154.next;
                                continue;
                            }
                            var o_76 = Or.get(n_186, e_249);
                            o_76.remove_arb(t_221), t_221.present--;
                            var s_65 = J.findOrCreatePair(i_121, a_96).listeners.head;
                            for (; s_65 != null;) {
                                var e_250 = s_65.elt;
                                if (e_250.event == 1 && (e_250.itype & t_221.type) != 0 && o_76.empty_arb(e_250.itype)) {
                                    var t_222 = this.push_callback(e_250);
                                    t_222.event = 1, Or.int_callback(o_76, e_250, t_222), t_222.set = o_76;
                                }
                                s_65 = s_65.next;
                            }
                            o_76.arbiters.head == null && this.remove_callbackset(o_76), r_154 = r_154.next;
                        }
                        e_248 = e_248.next;
                    }
                }
                t_221.b1 != n && t_221.b1.type == 2 && this.non_inlined_wake(t_221.b1), t_221.b2 != n && t_221.b2.type == 2 && this.non_inlined_wake(t_221.b2), this.retireArbiter(t_221, n), i = n.arbiters.erase(r);
            }
            else
                r = i, i = i.next;
        } this.bphase.remove(e), e.removedFromSpace(); };
        e.prototype.addConstraint = function (e) { e.space = this, e.addedToSpace(), e.active && (e.component.sleeping = !0, this.wake_constraint(e, !0)); };
        e.prototype.remConstraint = function (e) { e.active && (this.wake_constraint(e, !0), this.live_constraints.remove(e)), e.removedFromSpace(), e.space = null; };
        e.prototype.addCompound = function (e) { e.space = this, e.addedToSpace(); var t = e.bodies.head; for (; t != null;) {
            var e_251 = t.elt;
            this.addBody(e_251), t = t.next;
        } var n = e.constraints.head; for (; n != null;) {
            var e_252 = n.elt;
            this.addConstraint(e_252), n = n.next;
        } var r = e.compounds.head; for (; r != null;) {
            var e_253 = r.elt;
            this.addCompound(e_253), r = r.next;
        } };
        e.prototype.remCompound = function (e) { var t = e.bodies.head; for (; t != null;) {
            var e_254 = t.elt;
            this.remBody(e_254), t = t.next;
        } var n = e.constraints.head; for (; n != null;) {
            var e_255 = n.elt;
            this.remConstraint(e_255), n = n.next;
        } var r = e.compounds.head; for (; r != null;) {
            var e_256 = r.elt;
            this.remCompound(e_256), r = r.next;
        } e.removedFromSpace(), e.space = null; };
        e.prototype.addBody = function (e, t) { t == null && (t = -1), e.space = this, e.addedToSpace(), e.component.sleeping = !0; var n = e; n.world || (n.component.waket = this.stamp + +!this.midstep, n.type == 3 && (n.kinematicDelaySleep = !0), n.component.sleeping && this.really_wake(n, !0)); var r = e.shapes.head; for (; r != null;) {
            var e_257 = r.elt;
            this.bphase.insert(e_257), e_257.addedToSpace(), r = r.next;
        } e.type == 1 ? this.static_validation(e) : e.type != 2 && t != 3 && this.kinematics.add(e); };
        e.prototype.remBody = function (e, t) { if (t == null && (t = -1), e.type == 1) {
            var t_223 = e;
            t_223.world || (t_223.component.waket = this.stamp + +!this.midstep, t_223.component.sleeping && this.really_wake(t_223, !0)), this.staticsleep.remove(e);
        }
        else if (e.type == 2) {
            var t_224 = e;
            t_224.world || (t_224.component.waket = this.stamp + +!this.midstep, t_224.component.sleeping && this.really_wake(t_224, !0)), this.live.remove(e);
        }
        else {
            t != 3 && this.kinematics.remove(e);
            var n_187 = e;
            n_187.world || (n_187.component.waket = this.stamp + +!this.midstep, n_187.type == 3 && (n_187.kinematicDelaySleep = !0), n_187.component.sleeping && this.really_wake(n_187, !0)), this.staticsleep.remove(e);
        } var n = e.shapes.head; for (; n != null;) {
            var e_258 = n.elt;
            this.removed_shape(e_258, !0), n = n.next;
        } e.removedFromSpace(), e.space = null; };
        e.prototype.shapesUnderPoint = function (e, t, n, r) { return this.bphase.shapesUnderPoint(e, t, n, r); };
        e.prototype.bodiesUnderPoint = function (e, t, n, r) { return this.bphase.bodiesUnderPoint(e, t, n, r); };
        e.prototype.shapesInAABB = function (e, t, n, r, i) { return this.bphase.shapesInAABB(e.zpp_inner, t, n, r, i); };
        e.prototype.bodiesInAABB = function (e, t, n, r, i) { return this.bphase.bodiesInAABB(e.zpp_inner, t, n, r, i); };
        e.prototype.shapesInCircle = function (e, t, n, r, i) { return e.zpp_inner.validate(), this.bphase.shapesInCircle(e.zpp_inner.x, e.zpp_inner.y, t, n, r, i); };
        e.prototype.bodiesInCircle = function (e, t, n, r, i) { return e.zpp_inner.validate(), this.bphase.bodiesInCircle(e.zpp_inner.x, e.zpp_inner.y, t, n, r, i); };
        e.prototype.shapesInShape = function (e, t, n, r) { return this.bphase.shapesInShape(e, t, n, r); };
        e.prototype.bodiesInShape = function (e, t, n, r) { return this.bphase.bodiesInShape(e, t, n, r); };
        e.prototype.rayCast = function (e, t, n) { return this.bphase.rayCast(e.zpp_inner, t, n == null ? null : n.zpp_inner); };
        e.prototype.rayMultiCast = function (e, t, n, r) { return this.bphase.rayMultiCast(e.zpp_inner, t, n == null ? null : n.zpp_inner, r); };
        e.prototype.addLiveSweepCandidates = function (e, t, n, r, i) { var a = n == null ? null : n.zpp_inner, o = null; for (var _b = 0, _c = [this.live, this.kinematics]; _b < _c.length; _b++) {
            var n_188 = _c[_b];
            var s_66 = n_188.head;
            for (; s_66 != null;) {
                var n_189 = s_66.elt;
                if (s_66 = s_66.next, n_189 == r || n_189.velx == 0 && n_189.vely == 0 && n_189.angvel == 0)
                    continue;
                var c_50 = n_189.velx * t, l_41 = n_189.vely * t, u_40 = n_189.shapes.head;
                for (; u_40 != null;) {
                    var t_225 = u_40.elt;
                    if (u_40 = u_40.next, a != null && !t_225.filter.shouldCollide(a))
                        continue;
                    var r_155 = void 0, s_67 = void 0, d_27 = void 0, f_26 = void 0;
                    if (n_189.angvel != 0) {
                        t_225.validate_sweepRadius();
                        var e_259 = t_225.sweepRadius;
                        r_155 = Math.min(n_189.posx, n_189.posx + c_50) - e_259, s_67 = Math.min(n_189.posy, n_189.posy + l_41) - e_259, d_27 = Math.max(n_189.posx, n_189.posx + c_50) + e_259, f_26 = Math.max(n_189.posy, n_189.posy + l_41) + e_259;
                    }
                    else {
                        t_225.validate_aabb();
                        var e_260 = t_225.aabb;
                        r_155 = Math.min(e_260.minx, e_260.minx + c_50), s_67 = Math.min(e_260.miny, e_260.miny + l_41), d_27 = Math.max(e_260.maxx, e_260.maxx + c_50), f_26 = Math.max(e_260.maxy, e_260.maxy + l_41);
                    }
                    if (!(r_155 > e.maxx || d_27 < e.minx || s_67 > e.maxy || f_26 < e.miny)) {
                        if (o == null) {
                            o = new Set;
                            var e_261 = i.length;
                            for (var t_226 = 0; t_226 < e_261; t_226++)
                                o.add(i.at(t_226).zpp_inner);
                        }
                        o.has(t_225) || (o.add(t_225), i.push(t_225.outer));
                    }
                }
            }
        } };
        e.prototype.convexCast = function (t, n, r, i) { var a; X.zpp_pool == null ? a = new X : (a = X.zpp_pool, X.zpp_pool = a.next, a.next = null), a.failed = !1, a.slipped = !1, a.s1 = a.s2 = null, a.arbiter = null, t.type == 0 ? t.circle.validate_worldCOM() : t.polygon.validate_gaxi(); var o = t.body, s = o.posx, c = o.posy; o.sweepTime = 0, o.sweep_angvel = o.angvel, o.sweepIntegrate(n); var l = o.posx, u = o.posy; t.validate_sweepRadius(); var d = t.sweepRadius, f; An.zpp_pool == null ? f = new An : (f = An.zpp_pool, An.zpp_pool = f.next, f.next = null); var p = s, m = l; f.minx = (p < m ? p : m) - d; var h = s, g = l; f.maxx = (h > g ? h : g) + d; var _ = c, v = u; f.miny = (_ < v ? _ : v) - d; var y = c, b = u; f.maxy = (y > b ? y : b) + d; var x = this.convexShapeList = this.bphase.shapesInAABB(f, !1, !1, r == null ? null : r.zpp_inner, this.convexShapeList); i && this.addLiveSweepCandidates(f, n, r, o, x), f.free(), f.next = An.zpp_pool, An.zpp_pool = f; var S = 0, C = 0; S = 0, C = 0; var w = 0, T = 0; w = 0, T = 0; var ee = null, E = n + 1; x.zpp_inner.valmod(); var D = e._nape.shape.ShapeIterator.get(x); for (;;) {
            D.zpp_inner.zpp_inner.valmod();
            var r_156 = D.zpp_inner;
            r_156.zpp_inner.valmod(), r_156.zpp_inner.zip_length && (r_156.zpp_inner.zip_length = !1, r_156.zpp_inner.user_length = r_156.zpp_inner.inner.length);
            var s_68 = r_156.zpp_inner.user_length;
            D.zpp_critical = !0;
            var c_51 = void 0;
            if (D.zpp_i < s_68 ? c_51 = !0 : (D.zpp_next = e._nape.shape.ShapeIterator.zpp_pool, e._nape.shape.ShapeIterator.zpp_pool = D, D.zpp_inner = null, c_51 = !1), !c_51)
                break;
            D.zpp_critical = !1;
            var l_42 = D.zpp_inner.at(D.zpp_i++);
            if (l_42 != t.outer && (l_42.zpp_inner.body == null ? null : l_42.zpp_inner.body.outer) != o.outer) {
                if (a.s1 = t, a.s2 = l_42.zpp_inner, i) {
                    l_42.zpp_inner.validate_sweepRadius(), (l_42.zpp_inner.body == null ? null : l_42.zpp_inner.body.outer).zpp_inner.sweep_angvel = (l_42.zpp_inner.body == null ? null : l_42.zpp_inner.body.outer).zpp_inner.angvel, (l_42.zpp_inner.body == null ? null : l_42.zpp_inner.body.outer).zpp_inner.sweepTime = 0, Yr.dynamicSweep(a, n, 0, 0, !0), (l_42.zpp_inner.body == null ? null : l_42.zpp_inner.body.outer).zpp_inner.sweepIntegrate(0);
                    var e_262 = (l_42.zpp_inner.body == null ? null : l_42.zpp_inner.body.outer).zpp_inner, t_227 = l_42.zpp_inner;
                    if (t_227.type == 0)
                        t_227.worldCOMx = e_262.posx + (e_262.axisy * t_227.localCOMx - e_262.axisx * t_227.localCOMy), t_227.worldCOMy = e_262.posy + (t_227.localCOMx * e_262.axisx + t_227.localCOMy * e_262.axisy);
                    else {
                        var n_190 = t_227.polygon, r_157 = n_190.lverts.next, i_122 = n_190.gverts.next;
                        for (; i_122 != null;) {
                            var t_228 = i_122, n_191 = r_157;
                            r_157 = r_157.next, t_228.x = e_262.posx + (e_262.axisy * n_191.x - e_262.axisx * n_191.y), t_228.y = e_262.posy + (n_191.x * e_262.axisx + n_191.y * e_262.axisy), i_122 = i_122.next;
                        }
                        var a_97 = n_190.edges.head, o_77 = n_190.gverts.next, s_69 = o_77;
                        for (o_77 = o_77.next; o_77 != null;) {
                            var t_229 = o_77, n_192 = a_97.elt;
                            a_97 = a_97.next, n_192.gnormx = e_262.axisy * n_192.lnormx - e_262.axisx * n_192.lnormy, n_192.gnormy = n_192.lnormx * e_262.axisx + n_192.lnormy * e_262.axisy, n_192.gprojection = e_262.posx * n_192.gnormx + e_262.posy * n_192.gnormy + n_192.lprojection, n_192.tp0 = s_69.y * n_192.gnormx - s_69.x * n_192.gnormy, n_192.tp1 = t_229.y * n_192.gnormx - t_229.x * n_192.gnormy, s_69 = t_229, o_77 = o_77.next;
                        }
                        var c_52 = n_190.gverts.next, l_43 = a_97.elt;
                        a_97 = a_97.next, l_43.gnormx = e_262.axisy * l_43.lnormx - e_262.axisx * l_43.lnormy, l_43.gnormy = l_43.lnormx * e_262.axisx + l_43.lnormy * e_262.axisy, l_43.gprojection = e_262.posx * l_43.gnormx + e_262.posy * l_43.gnormy + l_43.lprojection, l_43.tp0 = s_69.y * l_43.gnormx - s_69.x * l_43.gnormy, l_43.tp1 = c_52.y * l_43.gnormx - c_52.x * l_43.gnormy;
                    }
                }
                else
                    Yr.staticSweep(a, n, 0, 0);
                a.toi *= n, a.toi > 0 && a.toi < E && (E = a.toi, S = a.axis.x, C = a.axis.y, w = a.c2.x, T = a.c2.y, ee = l_42);
            }
        } x.clear(); var O = a; if (O.next = X.zpp_pool, X.zpp_pool = O, o.sweepIntegrate(0), t.type == 0)
            t.worldCOMx = o.posx + (o.axisy * t.localCOMx - o.axisx * t.localCOMy), t.worldCOMy = o.posy + (t.localCOMx * o.axisx + t.localCOMy * o.axisy);
        else {
            var e_263 = t.polygon, n_193 = e_263.lverts.next, r_158 = e_263.gverts.next;
            for (; r_158 != null;) {
                var e_264 = r_158, t_230 = n_193;
                n_193 = n_193.next, e_264.x = o.posx + (o.axisy * t_230.x - o.axisx * t_230.y), e_264.y = o.posy + (t_230.x * o.axisx + t_230.y * o.axisy), r_158 = r_158.next;
            }
            var i_123 = e_263.edges.head, a_98 = e_263.gverts.next, s_70 = a_98;
            for (a_98 = a_98.next; a_98 != null;) {
                var e_265 = a_98, t_231 = i_123.elt;
                i_123 = i_123.next, t_231.gnormx = o.axisy * t_231.lnormx - o.axisx * t_231.lnormy, t_231.gnormy = t_231.lnormx * o.axisx + t_231.lnormy * o.axisy, t_231.gprojection = o.posx * t_231.gnormx + o.posy * t_231.gnormy + t_231.lprojection, t_231.tp0 = s_70.y * t_231.gnormx - s_70.x * t_231.gnormy, t_231.tp1 = e_265.y * t_231.gnormx - e_265.x * t_231.gnormy, s_70 = e_265, a_98 = a_98.next;
            }
            var c_53 = e_263.gverts.next, l_44 = i_123.elt;
            i_123 = i_123.next, l_44.gnormx = o.axisy * l_44.lnormx - o.axisx * l_44.lnormy, l_44.gnormy = l_44.lnormx * o.axisx + l_44.lnormy * o.axisy, l_44.gprojection = o.posx * l_44.gnormx + o.posy * l_44.gnormy + l_44.lprojection, l_44.tp0 = s_70.y * l_44.gnormx - s_70.x * l_44.gnormy, l_44.tp1 = c_53.y * l_44.gnormx - c_53.x * l_44.gnormy;
        } if (E <= n) {
            var t_232 = e._nape.geom.Vec2.get(-S, -C), n_194 = e._nape.geom.Vec2.get(w, T);
            return si.getConvex(t_232, n_194, E, ee);
        } return null; };
        e.prototype.convexMultiCast = function (t, n, r, i, a) { var o; X.zpp_pool == null ? o = new X : (o = X.zpp_pool, X.zpp_pool = o.next, o.next = null), o.failed = !1, o.slipped = !1, o.s1 = o.s2 = null, o.arbiter = null, t.type == 0 ? t.circle.validate_worldCOM() : t.polygon.validate_gaxi(); var s = t.body, c = s.posx, l = s.posy; s.sweepTime = 0, s.sweep_angvel = s.angvel, s.sweepIntegrate(n); var u = s.posx, d = s.posy; t.validate_sweepRadius(); var f = t.sweepRadius, p; An.zpp_pool == null ? p = new An : (p = An.zpp_pool, An.zpp_pool = p.next, p.next = null); var m = c, h = u; p.minx = (m < h ? m : h) - f; var g = c, _ = u; p.maxx = (g > _ ? g : _) + f; var v = l, y = d; p.miny = (v < y ? v : y) - f; var b = l, x = d; p.maxy = (b > x ? b : x) + f; var S = this.convexShapeList = this.bphase.shapesInAABB(p, !1, !1, r == null ? null : r.zpp_inner, this.convexShapeList); i && this.addLiveSweepCandidates(p, n, r, s, S), p.free(), p.next = An.zpp_pool, An.zpp_pool = p; var C = a == null ? new e._nape.geom.ConvexResultList : a; S.zpp_inner.valmod(); var w = e._nape.shape.ShapeIterator.get(S); for (;;) {
            w.zpp_inner.zpp_inner.valmod();
            var r_159 = w.zpp_inner;
            r_159.zpp_inner.valmod(), r_159.zpp_inner.zip_length && (r_159.zpp_inner.zip_length = !1, r_159.zpp_inner.user_length = r_159.zpp_inner.inner.length);
            var a_99 = r_159.zpp_inner.user_length;
            w.zpp_critical = !0;
            var c_54 = void 0;
            if (w.zpp_i < a_99 ? c_54 = !0 : (w.zpp_next = e._nape.shape.ShapeIterator.zpp_pool, e._nape.shape.ShapeIterator.zpp_pool = w, w.zpp_inner = null, c_54 = !1), !c_54)
                break;
            w.zpp_critical = !1;
            var l_45 = w.zpp_inner.at(w.zpp_i++);
            if (l_45 != t.outer && (l_45.zpp_inner.body == null ? null : l_45.zpp_inner.body.outer) != s.outer) {
                if (o.s1 = t, o.s2 = l_45.zpp_inner, i) {
                    l_45.zpp_inner.validate_sweepRadius(), (l_45.zpp_inner.body == null ? null : l_45.zpp_inner.body.outer).zpp_inner.sweep_angvel = (l_45.zpp_inner.body == null ? null : l_45.zpp_inner.body.outer).zpp_inner.angvel, (l_45.zpp_inner.body == null ? null : l_45.zpp_inner.body.outer).zpp_inner.sweepTime = 0, Yr.dynamicSweep(o, n, 0, 0, !0), (l_45.zpp_inner.body == null ? null : l_45.zpp_inner.body.outer).zpp_inner.sweepIntegrate(0);
                    var e_266 = (l_45.zpp_inner.body == null ? null : l_45.zpp_inner.body.outer).zpp_inner, t_233 = l_45.zpp_inner;
                    if (t_233.type == 0)
                        t_233.worldCOMx = e_266.posx + (e_266.axisy * t_233.localCOMx - e_266.axisx * t_233.localCOMy), t_233.worldCOMy = e_266.posy + (t_233.localCOMx * e_266.axisx + t_233.localCOMy * e_266.axisy);
                    else {
                        var n_195 = t_233.polygon, r_160 = n_195.lverts.next, i_124 = n_195.gverts.next;
                        for (; i_124 != null;) {
                            var t_234 = i_124, n_196 = r_160;
                            r_160 = r_160.next, t_234.x = e_266.posx + (e_266.axisy * n_196.x - e_266.axisx * n_196.y), t_234.y = e_266.posy + (n_196.x * e_266.axisx + n_196.y * e_266.axisy), i_124 = i_124.next;
                        }
                        var a_100 = n_195.edges.head, o_78 = n_195.gverts.next, s_71 = o_78;
                        for (o_78 = o_78.next; o_78 != null;) {
                            var t_235 = o_78, n_197 = a_100.elt;
                            a_100 = a_100.next, n_197.gnormx = e_266.axisy * n_197.lnormx - e_266.axisx * n_197.lnormy, n_197.gnormy = n_197.lnormx * e_266.axisx + n_197.lnormy * e_266.axisy, n_197.gprojection = e_266.posx * n_197.gnormx + e_266.posy * n_197.gnormy + n_197.lprojection, n_197.tp0 = s_71.y * n_197.gnormx - s_71.x * n_197.gnormy, n_197.tp1 = t_235.y * n_197.gnormx - t_235.x * n_197.gnormy, s_71 = t_235, o_78 = o_78.next;
                        }
                        var c_55 = n_195.gverts.next, l_46 = a_100.elt;
                        a_100 = a_100.next, l_46.gnormx = e_266.axisy * l_46.lnormx - e_266.axisx * l_46.lnormy, l_46.gnormy = l_46.lnormx * e_266.axisx + l_46.lnormy * e_266.axisy, l_46.gprojection = e_266.posx * l_46.gnormx + e_266.posy * l_46.gnormy + l_46.lprojection, l_46.tp0 = s_71.y * l_46.gnormx - s_71.x * l_46.gnormy, l_46.tp1 = c_55.y * l_46.gnormx - c_55.x * l_46.gnormy;
                    }
                }
                else
                    Yr.staticSweep(o, n, 0, 0);
                if (o.toi *= n, o.toi > 0) {
                    var t_236 = e._nape.geom.Vec2.get(-o.axis.x, -o.axis.y), n_198 = e._nape.geom.Vec2.get(o.c2.x, o.c2.y), r_161 = si.getConvex(t_236, n_198, o.toi, l_45), i_125 = null, a_101 = C.zpp_inner.inner.head;
                    for (; a_101 != null;) {
                        var e_267 = a_101.elt;
                        if (r_161.zpp_inner.next != null || e_267.zpp_inner.next != null)
                            throw Error("This object has been disposed of and cannot be used");
                        if (r_161.zpp_inner.toiDistance < e_267.zpp_inner.toiDistance)
                            break;
                        i_125 = a_101, a_101 = a_101.next;
                    }
                    C.zpp_inner.inner.insert(i_125, r_161);
                }
            }
        } S.clear(); var T = o; if (T.next = X.zpp_pool, X.zpp_pool = T, s.sweepIntegrate(0), t.type == 0)
            t.worldCOMx = s.posx + (s.axisy * t.localCOMx - s.axisx * t.localCOMy), t.worldCOMy = s.posy + (t.localCOMx * s.axisx + t.localCOMy * s.axisy);
        else {
            var e_268 = t.polygon, n_199 = e_268.lverts.next, r_162 = e_268.gverts.next;
            for (; r_162 != null;) {
                var e_269 = r_162, t_237 = n_199;
                n_199 = n_199.next, e_269.x = s.posx + (s.axisy * t_237.x - s.axisx * t_237.y), e_269.y = s.posy + (t_237.x * s.axisx + t_237.y * s.axisy), r_162 = r_162.next;
            }
            var i_126 = e_268.edges.head, a_102 = e_268.gverts.next, o_79 = a_102;
            for (a_102 = a_102.next; a_102 != null;) {
                var e_270 = a_102, t_238 = i_126.elt;
                i_126 = i_126.next, t_238.gnormx = s.axisy * t_238.lnormx - s.axisx * t_238.lnormy, t_238.gnormy = t_238.lnormx * s.axisx + t_238.lnormy * s.axisy, t_238.gprojection = s.posx * t_238.gnormx + s.posy * t_238.gnormy + t_238.lprojection, t_238.tp0 = o_79.y * t_238.gnormx - o_79.x * t_238.gnormy, t_238.tp1 = e_270.y * t_238.gnormx - e_270.x * t_238.gnormy, o_79 = e_270, a_102 = a_102.next;
            }
            var c_56 = e_268.gverts.next, l_47 = i_126.elt;
            i_126 = i_126.next, l_47.gnormx = s.axisy * l_47.lnormx - s.axisx * l_47.lnormy, l_47.gnormy = l_47.lnormx * s.axisx + l_47.lnormy * s.axisy, l_47.gprojection = s.posx * l_47.gnormx + s.posy * l_47.gnormy + l_47.lprojection, l_47.tp0 = o_79.y * l_47.gnormx - o_79.x * l_47.gnormy, l_47.tp1 = c_56.y * l_47.gnormx - c_56.x * l_47.gnormy;
        } return C; };
        e.prototype.push_callback = function (e) { var t; return ei.zpp_pool == null ? t = new ei : (t = ei.zpp_pool, ei.zpp_pool = t.next, t.next = null), this.callbacks.push(t), t.listener = e, t; };
        e.prototype._invalidateBodyList = function (e) { var t = e.head; for (; t != null;) {
            var e_271 = t.elt, n_200 = e_271.posx != e_271.pre_posx || e_271.posy != e_271.pre_posy, r_163 = e_271.pre_rot != e_271.rot;
            if (n_200 || r_163) {
                r_163 && (e_271.zip_axis = !0);
                var t_239 = e_271.shapes.head;
                for (; t_239 != null;) {
                    var e_272 = t_239.elt;
                    e_272.type == 1 && (e_272.polygon.invalidate_gverts(), e_272.polygon.invalidate_gaxi()), e_272.invalidate_worldCOM(), t_239 = t_239.next;
                }
                e_271.zip_worldCOM = !0;
            }
            t = t.next;
        } };
        e.prototype._sortLinkedList = function (e, t) { if (e.head == null || e.head.next == null)
            return; var n = 0, r = e.head; for (; r != null;)
            fi[n++] = r, r = r.next; pi.length < n && ie(n); var i = pi, a = gi, o = _i; for (var e_273 = 0; e_273 < n; e_273++)
            i[e_273] = t(fi[e_273].elt), a[e_273] = e_273; for (var e_274 = 1; e_274 < n; e_274 <<= 1) {
            for (var t_240 = 0; t_240 < n; t_240 += e_274 << 1) {
                var r_164 = t_240 + e_274 < n ? t_240 + e_274 : n, s_72 = t_240 + (e_274 << 1) < n ? t_240 + (e_274 << 1) : n, c_57 = t_240, l_48 = r_164, u_41 = t_240;
                for (; c_57 < r_164 && l_48 < s_72;)
                    o[u_41++] = i[a[c_57]] <= i[a[l_48]] ? a[c_57++] : a[l_48++];
                for (; c_57 < r_164;)
                    o[u_41++] = a[c_57++];
                for (; l_48 < s_72;)
                    o[u_41++] = a[l_48++];
            }
            var t_241 = a;
            a = o, o = t_241;
        } var s = fi[a[0]]; e.head = s; for (var e_275 = 1; e_275 < n; e_275++) {
            var t_242 = fi[a[e_275]];
            s.next = t_242, s = t_242;
        } s.next = null; for (var e_276 = 0; e_276 < n; e_276++)
            fi[e_276] = null; e.modified = !0, e.pushmod = !0; };
        e.prototype._sortContactArbiters = function (e) { if (e.head == null || e.head.next == null)
            return; var t = 0, n = e.head; for (; n != null;)
            fi[t++] = n, n = n.next; pi.length < t && ie(t); var r = this.deterministic, i = pi, a = mi, o = hi, s = gi, c = _i; for (var e_277 = 0; e_277 < t; e_277++) {
            var t_243 = fi[e_277].elt, n_201 = t_243.active;
            o[e_277] = +!!n_201, a[e_277] = n_201 ? t_243.oc1.dist : 0, r && (i[e_277] = ui(t_243)), s[e_277] = e_277;
        } for (var e_278 = 1; e_278 < t; e_278 <<= 1) {
            for (var n_202 = 0; n_202 < t; n_202 += e_278 << 1) {
                var l_49 = n_202 + e_278 < t ? n_202 + e_278 : t, u_42 = n_202 + (e_278 << 1) < t ? n_202 + (e_278 << 1) : t, d_28 = n_202, f_27 = l_49, p_18 = n_202;
                for (; d_28 < l_49 && f_27 < u_42;) {
                    var e_279 = s[d_28], t_244 = s[f_27];
                    (o[e_279] != 0 && o[t_244] != 0 ? a[e_279] < a[t_244] : !r || i[e_279] <= i[t_244]) ? (c[p_18++] = e_279, d_28++) : (c[p_18++] = t_244, f_27++);
                }
                for (; d_28 < l_49;)
                    c[p_18++] = s[d_28++];
                for (; f_27 < u_42;)
                    c[p_18++] = s[f_27++];
            }
            var n_203 = s;
            s = c, c = n_203;
        } var l = fi[s[0]]; e.head = l; for (var e_280 = 1; e_280 < t; e_280++) {
            var t_245 = fi[s[e_280]];
            l.next = t_245, l = t_245;
        } l.next = null; for (var e_281 = 0; e_281 < t; e_281++)
            fi[e_281] = null; e.modified = !0, e.pushmod = !0; };
        e.prototype._ensureDeterministicOrder = function () { this.deterministic && (this.live.modified && this._sortLinkedList(this.live, ci), this.live_constraints.modified && this._sortLinkedList(this.live_constraints, li), this.c_arbiters_false.modified && this._sortLinkedList(this.c_arbiters_false, ui), this.c_arbiters_true.modified && this._sortLinkedList(this.c_arbiters_true, ui), this.f_arbiters.modified && this._sortLinkedList(this.f_arbiters, ui)); };
        e.prototype.step = function (e, t, n) { if (this.midstep)
            throw Error("Error: ... REALLY?? you're going to call space.step() inside of space.step()? COME ON!!"); this.time += e, this.midstep = !0, this.stamp++; var r = this.subSteps, i = e / r, a = this.profilerEnabled, o = 0, s = 0; a && (this._metrics.reset(), o = performance.now()); try {
            for (var e_282 = 0; e_282 < r; e_282++) {
                this.pre_dt = i, this.validation(), a && (s = performance.now()), this.bphase.broadphase(this, !0), a && (this._metrics.broadphaseTime += performance.now() - s), this._ensureDeterministicOrder(), a && (s = performance.now()), this.prestep(i), a && (this._metrics.narrowphaseTime += performance.now() - s), this.sortcontacts && this._sortContactArbiters(this.c_arbiters_false), a && (s = performance.now()), this.updateVel(i), this.warmStart(), this.iterateVel(t), a && (this._metrics.velocitySolverTime += performance.now() - s);
                var e_283 = this.kinematics.head;
                for (; e_283 != null;) {
                    var t_246 = e_283.elt;
                    t_246.pre_posx = t_246.posx, t_246.pre_posy = t_246.posy, t_246.pre_rot = t_246.rot, e_283 = e_283.next;
                }
                a && (s = performance.now()), this.updatePos(i), a && (this._metrics.positionSolverTime += performance.now() - s), this.continuous = !0, a && (s = performance.now()), this.continuousCollisions(i), a && (this._metrics.ccdTime += performance.now() - s), this.continuous = !1, a && (s = performance.now()), this.iteratePos(n), a && (this._metrics.positionSolverTime += performance.now() - s), this._invalidateBodyList(this.kinematics), this._invalidateBodyList(this.live);
                var r_165 = null, o_80 = this.staticsleep.head;
                for (; o_80 != null;) {
                    var e_284 = o_80.elt;
                    if (e_284.type != 3 || e_284.velx == 0 && e_284.vely == 0 && e_284.angvel == 0) {
                        if (e_284.kinematicDelaySleep) {
                            e_284.kinematicDelaySleep = !1, o_80 = o_80.next;
                            continue;
                        }
                        e_284.component.sleeping = !0, o_80 = this.staticsleep.erase(r_165);
                    }
                    else
                        r_165 = o_80, o_80 = o_80.next;
                }
                a && (s = performance.now()), this.doForests(i), this.sleepArbiters(), a && (this._metrics.sleepTime += performance.now() - s);
            }
        }
        finally {
            this.midstep = !1;
        } a && (this._metrics.totalStepTime = performance.now() - o, this._collectCounters()); var c = null, l = this.callbackset_list.next; for (; l != null;) {
            var e_285 = l;
            if (e_285.arbiters.head == null) {
                var t_247 = this.callbackset_list, n_204 = void 0, r_166 = void 0;
                c == null ? (n_204 = t_247.next, r_166 = n_204.next, t_247.next = r_166, t_247.next == null && (t_247.pushmod = !0)) : (n_204 = c.next, r_166 = n_204.next, c.next = r_166, r_166 == null && (t_247.pushmod = !0)), n_204._inuse = !1, t_247.modified = !0, t_247.length--, t_247.pushmod = !0, l = r_166;
                var i_127 = e_285;
                i_127.int1 = i_127.int2 = null, i_127.id = i_127.di = -1, i_127.freed = !0, i_127.next = ri.zpp_pool, ri.zpp_pool = i_127;
                continue;
            }
            var t_248 = !0, n_205 = e_285.arbiters.head;
            for (; n_205 != null;)
                if (n_205.elt.sleeping) {
                    n_205 = n_205.next;
                    continue;
                }
                else {
                    t_248 = !1;
                    break;
                }
            var r_167 = t_248, i_128 = e_285.int1.cbSet, a_103 = e_285.int2.cbSet, o_81 = J.findOrCreatePair(i_128, a_103).listeners.head;
            for (; o_81 != null;) {
                var t_249 = o_81.elt;
                if (t_249.event == 6 && (!r_167 || t_249.allowSleepingCallbacks) && !e_285.empty_arb(t_249.itype)) {
                    var n_206 = this.push_callback(t_249);
                    n_206.event = 6, Or.int_callback(e_285, t_249, n_206), n_206.set = e_285;
                }
                o_81 = o_81.next;
            }
            c = l, l = l.next;
        } for (; !this.callbacks.empty();) {
            var e_286 = this.callbacks.pop();
            e_286.listener.type == 0 ? e_286.listener.body.handler(e_286.wrapper_body()) : e_286.listener.type == 1 ? e_286.listener.constraint.handler(e_286.wrapper_con()) : e_286.listener.type == 2 && e_286.listener.interaction.handleri(e_286.wrapper_int());
            var t_250 = e_286;
            t_250.int1 = t_250.int2 = null, t_250.body = null, t_250.constraint = null, t_250.listener = null, t_250.wrap_arbiters != null && (t_250.wrap_arbiters.zpp_inner.inner = null), t_250.set = null, t_250.next = ei.zpp_pool, ei.zpp_pool = t_250;
        } };
        e.prototype._collectCounters = function () { var e = this._metrics; e.bodyCount = this.bodies.length, e.dynamicBodyCount = this.live.length, e.kinematicBodyCount = this.kinematics.length, e.contactCount = this.c_arbiters_false.length + this.c_arbiters_true.length, e.constraintCount = this.constraints.length; var t = 0, n = 0, r = this.bodies.head; for (; r != null;) {
            var e_287 = r.elt;
            e_287.type === 1 ? n++ : e_287.type === 2 && e_287.component != null && e_287.component.sleeping && t++, r = r.next;
        } e.staticBodyCount = n, e.sleepingBodyCount = t, e.broadphasePairCount = e.contactCount; };
        e.prototype._ccdCanSkip = function () { var e = this.live.head; for (; e != null;) {
            if (!e.elt.sweepFrozen)
                return !1;
            e = e.next;
        } for (e = this.kinematics.head; e != null;) {
            if (!e.elt.sweepFrozen)
                return !1;
            e = e.next;
        } return !0; };
        e.prototype.continuousCollisions = function (e) { var t = 2 * Math.PI / e; if (this._ccdCanSkip())
            return; this.bphase.broadphase(this, !1); var n = 0; for (; n < 1 && this.toiEvents.head != null;) {
            var r_168 = null, i_129 = 2, a_104 = !1, o_82 = null, s_73 = null, c_58 = this.toiEvents.head;
            for (; c_58 != null;) {
                var t_251 = c_58.elt, n_207 = t_251.s1.body, l_50 = t_251.s2.body;
                if (n_207.sweepFrozen && l_50.sweepFrozen) {
                    if (t_251.toi != 0 && Jr.testCollide_safe(t_251.s1, t_251.s2))
                        t_251.toi = 0;
                    else {
                        c_58 = this.toiEvents.erase(s_73);
                        var e_288 = t_251;
                        e_288.next = X.zpp_pool, X.zpp_pool = e_288;
                        continue;
                    }
                }
                if (t_251.frozen1 != n_207.sweepFrozen || t_251.frozen2 != l_50.sweepFrozen) {
                    if (t_251.kinematic) {
                        c_58 = this.toiEvents.erase(s_73);
                        var e_289 = t_251;
                        e_289.next = X.zpp_pool, X.zpp_pool = e_289;
                        continue;
                    }
                    if (t_251.frozen1 = n_207.sweepFrozen, t_251.frozen2 = l_50.sweepFrozen, t_251.frozen1) {
                        var e_290 = t_251.s1;
                        t_251.s1 = t_251.s2, t_251.s2 = e_290, t_251.frozen1 = !1, t_251.frozen2 = !0;
                    }
                    if (Yr.staticSweep(t_251, e, 0, R.collisionSlopCCD), t_251.toi < 0) {
                        c_58 = this.toiEvents.erase(s_73);
                        var e_291 = t_251;
                        e_291.next = X.zpp_pool, X.zpp_pool = e_291;
                        continue;
                    }
                }
                t_251.toi >= 0 && (t_251.toi < i_129 || !a_104 && t_251.kinematic) && (r_168 = t_251, i_129 = t_251.toi, a_104 = t_251.kinematic, o_82 = s_73), s_73 = c_58, c_58 = c_58.next;
            }
            if (r_168 == null)
                break;
            this.toiEvents.erase(o_82), n = r_168.toi;
            var l_51 = r_168.s1.body, u_43 = r_168.s2.body;
            if (!l_51.sweepFrozen) {
                var t_252 = n * e;
                l_51.sweepIntegrate(t_252);
                var i_130 = r_168.s1;
                if (i_130.type == 0)
                    i_130.worldCOMx = l_51.posx + (l_51.axisy * i_130.localCOMx - l_51.axisx * i_130.localCOMy), i_130.worldCOMy = l_51.posy + (i_130.localCOMx * l_51.axisx + i_130.localCOMy * l_51.axisy);
                else {
                    var e_292 = i_130.polygon, t_253 = e_292.lverts.next, n_208 = e_292.gverts.next;
                    for (; n_208 != null;) {
                        var e_293 = n_208, r_169 = t_253;
                        t_253 = t_253.next, e_293.x = l_51.posx + (l_51.axisy * r_169.x - l_51.axisx * r_169.y), e_293.y = l_51.posy + (r_169.x * l_51.axisx + r_169.y * l_51.axisy), n_208 = n_208.next;
                    }
                    var r_170 = e_292.edges.head, a_105 = e_292.gverts.next, o_83 = a_105;
                    for (a_105 = a_105.next; a_105 != null;) {
                        var e_294 = a_105, t_254 = r_170.elt;
                        r_170 = r_170.next, t_254.gnormx = l_51.axisy * t_254.lnormx - l_51.axisx * t_254.lnormy, t_254.gnormy = t_254.lnormx * l_51.axisx + t_254.lnormy * l_51.axisy, t_254.gprojection = l_51.posx * t_254.gnormx + l_51.posy * t_254.gnormy + t_254.lprojection, t_254.tp0 = o_83.y * t_254.gnormx - o_83.x * t_254.gnormy, t_254.tp1 = e_294.y * t_254.gnormx - e_294.x * t_254.gnormy, o_83 = e_294, a_105 = a_105.next;
                    }
                    var s_74 = e_292.gverts.next, c_59 = r_170.elt;
                    r_170 = r_170.next, c_59.gnormx = l_51.axisy * c_59.lnormx - l_51.axisx * c_59.lnormy, c_59.gnormy = c_59.lnormx * l_51.axisx + c_59.lnormy * l_51.axisy, c_59.gprojection = l_51.posx * c_59.gnormx + l_51.posy * c_59.gnormy + c_59.lprojection, c_59.tp0 = o_83.y * c_59.gnormx - o_83.x * c_59.gnormy, c_59.tp1 = s_74.y * c_59.gnormx - s_74.x * c_59.gnormy;
                }
            }
            if (!u_43.sweepFrozen) {
                var t_255 = n * e;
                u_43.sweepIntegrate(t_255);
                var i_131 = r_168.s2;
                if (i_131.type == 0)
                    i_131.worldCOMx = u_43.posx + (u_43.axisy * i_131.localCOMx - u_43.axisx * i_131.localCOMy), i_131.worldCOMy = u_43.posy + (i_131.localCOMx * u_43.axisx + i_131.localCOMy * u_43.axisy);
                else {
                    var e_295 = i_131.polygon, t_256 = e_295.lverts.next, n_209 = e_295.gverts.next;
                    for (; n_209 != null;) {
                        var e_296 = n_209, r_171 = t_256;
                        t_256 = t_256.next, e_296.x = u_43.posx + (u_43.axisy * r_171.x - u_43.axisx * r_171.y), e_296.y = u_43.posy + (r_171.x * u_43.axisx + r_171.y * u_43.axisy), n_209 = n_209.next;
                    }
                    var r_172 = e_295.edges.head, a_106 = e_295.gverts.next, o_84 = a_106;
                    for (a_106 = a_106.next; a_106 != null;) {
                        var e_297 = a_106, t_257 = r_172.elt;
                        r_172 = r_172.next, t_257.gnormx = u_43.axisy * t_257.lnormx - u_43.axisx * t_257.lnormy, t_257.gnormy = t_257.lnormx * u_43.axisx + t_257.lnormy * u_43.axisy, t_257.gprojection = u_43.posx * t_257.gnormx + u_43.posy * t_257.gnormy + t_257.lprojection, t_257.tp0 = o_84.y * t_257.gnormx - o_84.x * t_257.gnormy, t_257.tp1 = e_297.y * t_257.gnormx - e_297.x * t_257.gnormy, o_84 = e_297, a_106 = a_106.next;
                    }
                    var s_75 = e_295.gverts.next, c_60 = r_172.elt;
                    r_172 = r_172.next, c_60.gnormx = u_43.axisy * c_60.lnormx - u_43.axisx * c_60.lnormy, c_60.gnormy = c_60.lnormx * u_43.axisx + c_60.lnormy * u_43.axisy, c_60.gprojection = u_43.posx * c_60.gnormx + u_43.posy * c_60.gnormy + c_60.lprojection, c_60.tp0 = o_84.y * c_60.gnormx - o_84.x * c_60.gnormy, c_60.tp1 = s_75.y * c_60.gnormx - s_75.x * c_60.gnormy;
                }
            }
            var d_29 = this.narrowPhase(r_168.s1, r_168.s2, !0, r_168.arbiter, !0);
            if (d_29 == null)
                r_168.arbiter != null && r_168.arbiter.pair != null && (r_168.arbiter.pair.arb = null, r_168.arbiter.pair = null);
            else if (!this.presteparb(d_29, e, !0) && d_29.type == Y.COL && d_29.active && d_29.immState & 1) {
                var e_298 = d_29.colarb, n_210 = e_298.nx * e_298.c1.jnAcc - e_298.ny * e_298.c1.jtAcc, r_173 = e_298.ny * e_298.c1.jnAcc + e_298.nx * e_298.c1.jtAcc, i_132 = e_298.b1.imass;
                e_298.b1.velx -= n_210 * i_132, e_298.b1.vely -= r_173 * i_132, e_298.b1.angvel -= e_298.b1.iinertia * (r_173 * e_298.c1.r1x - n_210 * e_298.c1.r1y);
                var a_107 = e_298.b2.imass;
                if (e_298.b2.velx += n_210 * a_107, e_298.b2.vely += r_173 * a_107, e_298.b2.angvel += e_298.b2.iinertia * (r_173 * e_298.c1.r2x - n_210 * e_298.c1.r2y), e_298.hc2) {
                    var t_258 = e_298.nx * e_298.c2.jnAcc - e_298.ny * e_298.c2.jtAcc, n_211 = e_298.ny * e_298.c2.jnAcc + e_298.nx * e_298.c2.jtAcc, r_174 = e_298.b1.imass;
                    e_298.b1.velx -= t_258 * r_174, e_298.b1.vely -= n_211 * r_174, e_298.b1.angvel -= e_298.b1.iinertia * (n_211 * e_298.c2.r1x - t_258 * e_298.c2.r1y);
                    var i_133 = e_298.b2.imass;
                    e_298.b2.velx += t_258 * i_133, e_298.b2.vely += n_211 * i_133, e_298.b2.angvel += e_298.b2.iinertia * (n_211 * e_298.c2.r2x - t_258 * e_298.c2.r2y);
                }
                e_298.b2.angvel += e_298.jrAcc * e_298.b2.iinertia, e_298.b1.angvel -= e_298.jrAcc * e_298.b1.iinertia;
                var o_85 = d_29.colarb, s_76 = o_85.k1x + o_85.b2.velx - o_85.c1.r2y * o_85.b2.angvel - (o_85.b1.velx - o_85.c1.r1y * o_85.b1.angvel), c_61 = o_85.k1y + o_85.b2.vely + o_85.c1.r2x * o_85.b2.angvel - (o_85.b1.vely + o_85.c1.r1x * o_85.b1.angvel), f_28 = (c_61 * o_85.nx - s_76 * o_85.ny + o_85.surfacex) * o_85.c1.tMass, p_19 = o_85.c1.friction * o_85.c1.jnAcc, m_11 = o_85.c1.jtAcc, h_7 = m_11 - f_28;
                h_7 > p_19 ? h_7 = p_19 : h_7 < -p_19 && (h_7 = -p_19), f_28 = h_7 - m_11, o_85.c1.jtAcc = h_7;
                var g_9 = -o_85.ny * f_28, _6 = o_85.nx * f_28;
                if (o_85.b2.velx += g_9 * o_85.b2.imass, o_85.b2.vely += _6 * o_85.b2.imass, o_85.b1.velx -= g_9 * o_85.b1.imass, o_85.b1.vely -= _6 * o_85.b1.imass, o_85.b2.angvel += o_85.rt1b * f_28 * o_85.b2.iinertia, o_85.b1.angvel -= o_85.rt1a * f_28 * o_85.b1.iinertia, o_85.hc2) {
                    var e_299 = o_85.k2x + o_85.b2.velx - o_85.c2.r2y * o_85.b2.angvel - (o_85.b1.velx - o_85.c2.r1y * o_85.b1.angvel), t_259 = o_85.k2y + o_85.b2.vely + o_85.c2.r2x * o_85.b2.angvel - (o_85.b1.vely + o_85.c2.r1x * o_85.b1.angvel);
                    f_28 = (t_259 * o_85.nx - e_299 * o_85.ny + o_85.surfacex) * o_85.c2.tMass, p_19 = o_85.c2.friction * o_85.c2.jnAcc, m_11 = o_85.c2.jtAcc, h_7 = m_11 - f_28, h_7 > p_19 ? h_7 = p_19 : h_7 < -p_19 && (h_7 = -p_19), f_28 = h_7 - m_11, o_85.c2.jtAcc = h_7, g_9 = -o_85.ny * f_28, _6 = o_85.nx * f_28, o_85.b2.velx += g_9 * o_85.b2.imass, o_85.b2.vely += _6 * o_85.b2.imass, o_85.b1.velx -= g_9 * o_85.b1.imass, o_85.b1.vely -= _6 * o_85.b1.imass, o_85.b2.angvel += o_85.rt2b * f_28 * o_85.b2.iinertia, o_85.b1.angvel -= o_85.rt2a * f_28 * o_85.b1.iinertia, s_76 = o_85.k1x + o_85.b2.velx - o_85.c1.r2y * o_85.b2.angvel - (o_85.b1.velx - o_85.c1.r1y * o_85.b1.angvel), c_61 = o_85.k1y + o_85.b2.vely + o_85.c1.r2x * o_85.b2.angvel - (o_85.b1.vely + o_85.c1.r1x * o_85.b1.angvel), e_299 = o_85.k2x + o_85.b2.velx - o_85.c2.r2y * o_85.b2.angvel - (o_85.b1.velx - o_85.c2.r1y * o_85.b1.angvel), t_259 = o_85.k2y + o_85.b2.vely + o_85.c2.r2x * o_85.b2.angvel - (o_85.b1.vely + o_85.c2.r1x * o_85.b1.angvel);
                    var n_212 = o_85.c1.jnAcc, r_175 = o_85.c2.jnAcc, i_134 = s_76 * o_85.nx + c_61 * o_85.ny + o_85.surfacey + o_85.c1.bounce - (o_85.Ka * n_212 + o_85.Kb * r_175), a_108 = e_299 * o_85.nx + t_259 * o_85.ny + o_85.surfacey + o_85.c2.bounce - (o_85.Kb * n_212 + o_85.Kc * r_175), l_52 = -(o_85.kMassa * i_134 + o_85.kMassb * a_108), u_44 = -(o_85.kMassb * i_134 + o_85.kMassc * a_108);
                    l_52 >= 0 && u_44 >= 0 ? (i_134 = l_52 - n_212, a_108 = u_44 - r_175, o_85.c1.jnAcc = l_52, o_85.c2.jnAcc = u_44) : (l_52 = -o_85.c1.nMass * i_134, l_52 >= 0 && o_85.Kb * l_52 + a_108 >= 0 ? (i_134 = l_52 - n_212, a_108 = -r_175, o_85.c1.jnAcc = l_52, o_85.c2.jnAcc = 0) : (u_44 = -o_85.c2.nMass * a_108, u_44 >= 0 && o_85.Kb * u_44 + i_134 >= 0 ? (i_134 = -n_212, a_108 = u_44 - r_175, o_85.c1.jnAcc = 0, o_85.c2.jnAcc = u_44) : i_134 >= 0 && a_108 >= 0 ? (i_134 = -n_212, a_108 = -r_175, o_85.c1.jnAcc = o_85.c2.jnAcc = 0) : (i_134 = 0, a_108 = 0))), f_28 = i_134 + a_108, g_9 = o_85.nx * f_28, _6 = o_85.ny * f_28, o_85.b2.velx += g_9 * o_85.b2.imass, o_85.b2.vely += _6 * o_85.b2.imass, o_85.b1.velx -= g_9 * o_85.b1.imass, o_85.b1.vely -= _6 * o_85.b1.imass, o_85.b2.angvel += (o_85.rn1b * i_134 + o_85.rn2b * a_108) * o_85.b2.iinertia, o_85.b1.angvel -= (o_85.rn1a * i_134 + o_85.rn2a * a_108) * o_85.b1.iinertia;
                }
                else
                    o_85.radius != 0 && (f_28 = (o_85.b2.angvel - o_85.b1.angvel) * o_85.rMass, p_19 = o_85.rfric * o_85.c1.jnAcc, m_11 = o_85.jrAcc, o_85.jrAcc -= f_28, o_85.jrAcc > p_19 ? o_85.jrAcc = p_19 : o_85.jrAcc < -p_19 && (o_85.jrAcc = -p_19), f_28 = o_85.jrAcc - m_11, o_85.b2.angvel += f_28 * o_85.b2.iinertia, o_85.b1.angvel -= f_28 * o_85.b1.iinertia), s_76 = o_85.k1x + o_85.b2.velx - o_85.c1.r2y * o_85.b2.angvel - (o_85.b1.velx - o_85.c1.r1y * o_85.b1.angvel), c_61 = o_85.k1y + o_85.b2.vely + o_85.c1.r2x * o_85.b2.angvel - (o_85.b1.vely + o_85.c1.r1x * o_85.b1.angvel), f_28 = (o_85.c1.bounce + (o_85.nx * s_76 + o_85.ny * c_61) + o_85.surfacey) * o_85.c1.nMass, m_11 = o_85.c1.jnAcc, h_7 = m_11 - f_28, h_7 < 0 && (h_7 = 0), f_28 = h_7 - m_11, o_85.c1.jnAcc = h_7, g_9 = o_85.nx * f_28, _6 = o_85.ny * f_28, o_85.b2.velx += g_9 * o_85.b2.imass, o_85.b2.vely += _6 * o_85.b2.imass, o_85.b1.velx -= g_9 * o_85.b1.imass, o_85.b1.vely -= _6 * o_85.b1.imass, o_85.b2.angvel += o_85.rn1b * f_28 * o_85.b2.iinertia, o_85.b1.angvel -= o_85.rn1a * f_28 * o_85.b1.iinertia;
                var v_8 = d_29.colarb, y_9 = v_8.k1x + v_8.b2.velx - v_8.c1.r2y * v_8.b2.angvel - (v_8.b1.velx - v_8.c1.r1y * v_8.b1.angvel), b_10 = v_8.k1y + v_8.b2.vely + v_8.c1.r2x * v_8.b2.angvel - (v_8.b1.vely + v_8.c1.r1x * v_8.b1.angvel), x_8 = (b_10 * v_8.nx - y_9 * v_8.ny + v_8.surfacex) * v_8.c1.tMass, S_7 = v_8.c1.friction * v_8.c1.jnAcc, C_5 = v_8.c1.jtAcc, w_4 = C_5 - x_8;
                w_4 > S_7 ? w_4 = S_7 : w_4 < -S_7 && (w_4 = -S_7), x_8 = w_4 - C_5, v_8.c1.jtAcc = w_4;
                var T_3 = -v_8.ny * x_8, ee_3 = v_8.nx * x_8;
                if (v_8.b2.velx += T_3 * v_8.b2.imass, v_8.b2.vely += ee_3 * v_8.b2.imass, v_8.b1.velx -= T_3 * v_8.b1.imass, v_8.b1.vely -= ee_3 * v_8.b1.imass, v_8.b2.angvel += v_8.rt1b * x_8 * v_8.b2.iinertia, v_8.b1.angvel -= v_8.rt1a * x_8 * v_8.b1.iinertia, v_8.hc2) {
                    var e_300 = v_8.k2x + v_8.b2.velx - v_8.c2.r2y * v_8.b2.angvel - (v_8.b1.velx - v_8.c2.r1y * v_8.b1.angvel), t_260 = v_8.k2y + v_8.b2.vely + v_8.c2.r2x * v_8.b2.angvel - (v_8.b1.vely + v_8.c2.r1x * v_8.b1.angvel);
                    x_8 = (t_260 * v_8.nx - e_300 * v_8.ny + v_8.surfacex) * v_8.c2.tMass, S_7 = v_8.c2.friction * v_8.c2.jnAcc, C_5 = v_8.c2.jtAcc, w_4 = C_5 - x_8, w_4 > S_7 ? w_4 = S_7 : w_4 < -S_7 && (w_4 = -S_7), x_8 = w_4 - C_5, v_8.c2.jtAcc = w_4, T_3 = -v_8.ny * x_8, ee_3 = v_8.nx * x_8, v_8.b2.velx += T_3 * v_8.b2.imass, v_8.b2.vely += ee_3 * v_8.b2.imass, v_8.b1.velx -= T_3 * v_8.b1.imass, v_8.b1.vely -= ee_3 * v_8.b1.imass, v_8.b2.angvel += v_8.rt2b * x_8 * v_8.b2.iinertia, v_8.b1.angvel -= v_8.rt2a * x_8 * v_8.b1.iinertia, y_9 = v_8.k1x + v_8.b2.velx - v_8.c1.r2y * v_8.b2.angvel - (v_8.b1.velx - v_8.c1.r1y * v_8.b1.angvel), b_10 = v_8.k1y + v_8.b2.vely + v_8.c1.r2x * v_8.b2.angvel - (v_8.b1.vely + v_8.c1.r1x * v_8.b1.angvel), e_300 = v_8.k2x + v_8.b2.velx - v_8.c2.r2y * v_8.b2.angvel - (v_8.b1.velx - v_8.c2.r1y * v_8.b1.angvel), t_260 = v_8.k2y + v_8.b2.vely + v_8.c2.r2x * v_8.b2.angvel - (v_8.b1.vely + v_8.c2.r1x * v_8.b1.angvel);
                    var n_213 = v_8.c1.jnAcc, r_176 = v_8.c2.jnAcc, i_135 = y_9 * v_8.nx + b_10 * v_8.ny + v_8.surfacey + v_8.c1.bounce - (v_8.Ka * n_213 + v_8.Kb * r_176), a_109 = e_300 * v_8.nx + t_260 * v_8.ny + v_8.surfacey + v_8.c2.bounce - (v_8.Kb * n_213 + v_8.Kc * r_176), o_86 = -(v_8.kMassa * i_135 + v_8.kMassb * a_109), s_77 = -(v_8.kMassb * i_135 + v_8.kMassc * a_109);
                    o_86 >= 0 && s_77 >= 0 ? (i_135 = o_86 - n_213, a_109 = s_77 - r_176, v_8.c1.jnAcc = o_86, v_8.c2.jnAcc = s_77) : (o_86 = -v_8.c1.nMass * i_135, o_86 >= 0 && v_8.Kb * o_86 + a_109 >= 0 ? (i_135 = o_86 - n_213, a_109 = -r_176, v_8.c1.jnAcc = o_86, v_8.c2.jnAcc = 0) : (s_77 = -v_8.c2.nMass * a_109, s_77 >= 0 && v_8.Kb * s_77 + i_135 >= 0 ? (i_135 = -n_213, a_109 = s_77 - r_176, v_8.c1.jnAcc = 0, v_8.c2.jnAcc = s_77) : i_135 >= 0 && a_109 >= 0 ? (i_135 = -n_213, a_109 = -r_176, v_8.c1.jnAcc = v_8.c2.jnAcc = 0) : (i_135 = 0, a_109 = 0))), x_8 = i_135 + a_109, T_3 = v_8.nx * x_8, ee_3 = v_8.ny * x_8, v_8.b2.velx += T_3 * v_8.b2.imass, v_8.b2.vely += ee_3 * v_8.b2.imass, v_8.b1.velx -= T_3 * v_8.b1.imass, v_8.b1.vely -= ee_3 * v_8.b1.imass, v_8.b2.angvel += (v_8.rn1b * i_135 + v_8.rn2b * a_109) * v_8.b2.iinertia, v_8.b1.angvel -= (v_8.rn1a * i_135 + v_8.rn2a * a_109) * v_8.b1.iinertia;
                }
                else
                    v_8.radius != 0 && (x_8 = (v_8.b2.angvel - v_8.b1.angvel) * v_8.rMass, S_7 = v_8.rfric * v_8.c1.jnAcc, C_5 = v_8.jrAcc, v_8.jrAcc -= x_8, v_8.jrAcc > S_7 ? v_8.jrAcc = S_7 : v_8.jrAcc < -S_7 && (v_8.jrAcc = -S_7), x_8 = v_8.jrAcc - C_5, v_8.b2.angvel += x_8 * v_8.b2.iinertia, v_8.b1.angvel -= x_8 * v_8.b1.iinertia), y_9 = v_8.k1x + v_8.b2.velx - v_8.c1.r2y * v_8.b2.angvel - (v_8.b1.velx - v_8.c1.r1y * v_8.b1.angvel), b_10 = v_8.k1y + v_8.b2.vely + v_8.c1.r2x * v_8.b2.angvel - (v_8.b1.vely + v_8.c1.r1x * v_8.b1.angvel), x_8 = (v_8.c1.bounce + (v_8.nx * y_9 + v_8.ny * b_10) + v_8.surfacey) * v_8.c1.nMass, C_5 = v_8.c1.jnAcc, w_4 = C_5 - x_8, w_4 < 0 && (w_4 = 0), x_8 = w_4 - C_5, v_8.c1.jnAcc = w_4, T_3 = v_8.nx * x_8, ee_3 = v_8.ny * x_8, v_8.b2.velx += T_3 * v_8.b2.imass, v_8.b2.vely += ee_3 * v_8.b2.imass, v_8.b1.velx -= T_3 * v_8.b1.imass, v_8.b1.vely -= ee_3 * v_8.b1.imass, v_8.b2.angvel += v_8.rn1b * x_8 * v_8.b2.iinertia, v_8.b1.angvel -= v_8.rn1a * x_8 * v_8.b1.iinertia;
                var E_3 = d_29.colarb, D_3 = E_3.k1x + E_3.b2.velx - E_3.c1.r2y * E_3.b2.angvel - (E_3.b1.velx - E_3.c1.r1y * E_3.b1.angvel), O_3 = E_3.k1y + E_3.b2.vely + E_3.c1.r2x * E_3.b2.angvel - (E_3.b1.vely + E_3.c1.r1x * E_3.b1.angvel), k_2 = (O_3 * E_3.nx - D_3 * E_3.ny + E_3.surfacex) * E_3.c1.tMass, te_2 = E_3.c1.friction * E_3.c1.jnAcc, A_2 = E_3.c1.jtAcc, j_2 = A_2 - k_2;
                j_2 > te_2 ? j_2 = te_2 : j_2 < -te_2 && (j_2 = -te_2), k_2 = j_2 - A_2, E_3.c1.jtAcc = j_2;
                var M_2 = -E_3.ny * k_2, N_2 = E_3.nx * k_2;
                if (E_3.b2.velx += M_2 * E_3.b2.imass, E_3.b2.vely += N_2 * E_3.b2.imass, E_3.b1.velx -= M_2 * E_3.b1.imass, E_3.b1.vely -= N_2 * E_3.b1.imass, E_3.b2.angvel += E_3.rt1b * k_2 * E_3.b2.iinertia, E_3.b1.angvel -= E_3.rt1a * k_2 * E_3.b1.iinertia, E_3.hc2) {
                    var e_301 = E_3.k2x + E_3.b2.velx - E_3.c2.r2y * E_3.b2.angvel - (E_3.b1.velx - E_3.c2.r1y * E_3.b1.angvel), t_261 = E_3.k2y + E_3.b2.vely + E_3.c2.r2x * E_3.b2.angvel - (E_3.b1.vely + E_3.c2.r1x * E_3.b1.angvel);
                    k_2 = (t_261 * E_3.nx - e_301 * E_3.ny + E_3.surfacex) * E_3.c2.tMass, te_2 = E_3.c2.friction * E_3.c2.jnAcc, A_2 = E_3.c2.jtAcc, j_2 = A_2 - k_2, j_2 > te_2 ? j_2 = te_2 : j_2 < -te_2 && (j_2 = -te_2), k_2 = j_2 - A_2, E_3.c2.jtAcc = j_2, M_2 = -E_3.ny * k_2, N_2 = E_3.nx * k_2, E_3.b2.velx += M_2 * E_3.b2.imass, E_3.b2.vely += N_2 * E_3.b2.imass, E_3.b1.velx -= M_2 * E_3.b1.imass, E_3.b1.vely -= N_2 * E_3.b1.imass, E_3.b2.angvel += E_3.rt2b * k_2 * E_3.b2.iinertia, E_3.b1.angvel -= E_3.rt2a * k_2 * E_3.b1.iinertia, D_3 = E_3.k1x + E_3.b2.velx - E_3.c1.r2y * E_3.b2.angvel - (E_3.b1.velx - E_3.c1.r1y * E_3.b1.angvel), O_3 = E_3.k1y + E_3.b2.vely + E_3.c1.r2x * E_3.b2.angvel - (E_3.b1.vely + E_3.c1.r1x * E_3.b1.angvel), e_301 = E_3.k2x + E_3.b2.velx - E_3.c2.r2y * E_3.b2.angvel - (E_3.b1.velx - E_3.c2.r1y * E_3.b1.angvel), t_261 = E_3.k2y + E_3.b2.vely + E_3.c2.r2x * E_3.b2.angvel - (E_3.b1.vely + E_3.c2.r1x * E_3.b1.angvel);
                    var n_214 = E_3.c1.jnAcc, r_177 = E_3.c2.jnAcc, i_136 = D_3 * E_3.nx + O_3 * E_3.ny + E_3.surfacey + E_3.c1.bounce - (E_3.Ka * n_214 + E_3.Kb * r_177), a_110 = e_301 * E_3.nx + t_261 * E_3.ny + E_3.surfacey + E_3.c2.bounce - (E_3.Kb * n_214 + E_3.Kc * r_177), o_87 = -(E_3.kMassa * i_136 + E_3.kMassb * a_110), s_78 = -(E_3.kMassb * i_136 + E_3.kMassc * a_110);
                    o_87 >= 0 && s_78 >= 0 ? (i_136 = o_87 - n_214, a_110 = s_78 - r_177, E_3.c1.jnAcc = o_87, E_3.c2.jnAcc = s_78) : (o_87 = -E_3.c1.nMass * i_136, o_87 >= 0 && E_3.Kb * o_87 + a_110 >= 0 ? (i_136 = o_87 - n_214, a_110 = -r_177, E_3.c1.jnAcc = o_87, E_3.c2.jnAcc = 0) : (s_78 = -E_3.c2.nMass * a_110, s_78 >= 0 && E_3.Kb * s_78 + i_136 >= 0 ? (i_136 = -n_214, a_110 = s_78 - r_177, E_3.c1.jnAcc = 0, E_3.c2.jnAcc = s_78) : i_136 >= 0 && a_110 >= 0 ? (i_136 = -n_214, a_110 = -r_177, E_3.c1.jnAcc = E_3.c2.jnAcc = 0) : (i_136 = 0, a_110 = 0))), k_2 = i_136 + a_110, M_2 = E_3.nx * k_2, N_2 = E_3.ny * k_2, E_3.b2.velx += M_2 * E_3.b2.imass, E_3.b2.vely += N_2 * E_3.b2.imass, E_3.b1.velx -= M_2 * E_3.b1.imass, E_3.b1.vely -= N_2 * E_3.b1.imass, E_3.b2.angvel += (E_3.rn1b * i_136 + E_3.rn2b * a_110) * E_3.b2.iinertia, E_3.b1.angvel -= (E_3.rn1a * i_136 + E_3.rn2a * a_110) * E_3.b1.iinertia;
                }
                else
                    E_3.radius != 0 && (k_2 = (E_3.b2.angvel - E_3.b1.angvel) * E_3.rMass, te_2 = E_3.rfric * E_3.c1.jnAcc, A_2 = E_3.jrAcc, E_3.jrAcc -= k_2, E_3.jrAcc > te_2 ? E_3.jrAcc = te_2 : E_3.jrAcc < -te_2 && (E_3.jrAcc = -te_2), k_2 = E_3.jrAcc - A_2, E_3.b2.angvel += k_2 * E_3.b2.iinertia, E_3.b1.angvel -= k_2 * E_3.b1.iinertia), D_3 = E_3.k1x + E_3.b2.velx - E_3.c1.r2y * E_3.b2.angvel - (E_3.b1.velx - E_3.c1.r1y * E_3.b1.angvel), O_3 = E_3.k1y + E_3.b2.vely + E_3.c1.r2x * E_3.b2.angvel - (E_3.b1.vely + E_3.c1.r1x * E_3.b1.angvel), k_2 = (E_3.c1.bounce + (E_3.nx * D_3 + E_3.ny * O_3) + E_3.surfacey) * E_3.c1.nMass, A_2 = E_3.c1.jnAcc, j_2 = A_2 - k_2, j_2 < 0 && (j_2 = 0), k_2 = j_2 - A_2, E_3.c1.jnAcc = j_2, M_2 = E_3.nx * k_2, N_2 = E_3.ny * k_2, E_3.b2.velx += M_2 * E_3.b2.imass, E_3.b2.vely += N_2 * E_3.b2.imass, E_3.b1.velx -= M_2 * E_3.b1.imass, E_3.b1.vely -= N_2 * E_3.b1.imass, E_3.b2.angvel += E_3.rn1b * k_2 * E_3.b2.iinertia, E_3.b1.angvel -= E_3.rn1a * k_2 * E_3.b1.iinertia;
                var P_2 = d_29.colarb, F_2 = P_2.k1x + P_2.b2.velx - P_2.c1.r2y * P_2.b2.angvel - (P_2.b1.velx - P_2.c1.r1y * P_2.b1.angvel), ne_2 = P_2.k1y + P_2.b2.vely + P_2.c1.r2x * P_2.b2.angvel - (P_2.b1.vely + P_2.c1.r1x * P_2.b1.angvel), I_2 = (ne_2 * P_2.nx - F_2 * P_2.ny + P_2.surfacex) * P_2.c1.tMass, L_2 = P_2.c1.friction * P_2.c1.jnAcc, re_2 = P_2.c1.jtAcc, ie_2 = re_2 - I_2;
                ie_2 > L_2 ? ie_2 = L_2 : ie_2 < -L_2 && (ie_2 = -L_2), I_2 = ie_2 - re_2, P_2.c1.jtAcc = ie_2;
                var ae_2 = -P_2.ny * I_2, oe_2 = P_2.nx * I_2;
                if (P_2.b2.velx += ae_2 * P_2.b2.imass, P_2.b2.vely += oe_2 * P_2.b2.imass, P_2.b1.velx -= ae_2 * P_2.b1.imass, P_2.b1.vely -= oe_2 * P_2.b1.imass, P_2.b2.angvel += P_2.rt1b * I_2 * P_2.b2.iinertia, P_2.b1.angvel -= P_2.rt1a * I_2 * P_2.b1.iinertia, P_2.hc2) {
                    var e_302 = P_2.k2x + P_2.b2.velx - P_2.c2.r2y * P_2.b2.angvel - (P_2.b1.velx - P_2.c2.r1y * P_2.b1.angvel), t_262 = P_2.k2y + P_2.b2.vely + P_2.c2.r2x * P_2.b2.angvel - (P_2.b1.vely + P_2.c2.r1x * P_2.b1.angvel);
                    I_2 = (t_262 * P_2.nx - e_302 * P_2.ny + P_2.surfacex) * P_2.c2.tMass, L_2 = P_2.c2.friction * P_2.c2.jnAcc, re_2 = P_2.c2.jtAcc, ie_2 = re_2 - I_2, ie_2 > L_2 ? ie_2 = L_2 : ie_2 < -L_2 && (ie_2 = -L_2), I_2 = ie_2 - re_2, P_2.c2.jtAcc = ie_2, ae_2 = -P_2.ny * I_2, oe_2 = P_2.nx * I_2, P_2.b2.velx += ae_2 * P_2.b2.imass, P_2.b2.vely += oe_2 * P_2.b2.imass, P_2.b1.velx -= ae_2 * P_2.b1.imass, P_2.b1.vely -= oe_2 * P_2.b1.imass, P_2.b2.angvel += P_2.rt2b * I_2 * P_2.b2.iinertia, P_2.b1.angvel -= P_2.rt2a * I_2 * P_2.b1.iinertia, F_2 = P_2.k1x + P_2.b2.velx - P_2.c1.r2y * P_2.b2.angvel - (P_2.b1.velx - P_2.c1.r1y * P_2.b1.angvel), ne_2 = P_2.k1y + P_2.b2.vely + P_2.c1.r2x * P_2.b2.angvel - (P_2.b1.vely + P_2.c1.r1x * P_2.b1.angvel), e_302 = P_2.k2x + P_2.b2.velx - P_2.c2.r2y * P_2.b2.angvel - (P_2.b1.velx - P_2.c2.r1y * P_2.b1.angvel), t_262 = P_2.k2y + P_2.b2.vely + P_2.c2.r2x * P_2.b2.angvel - (P_2.b1.vely + P_2.c2.r1x * P_2.b1.angvel);
                    var n_215 = P_2.c1.jnAcc, r_178 = P_2.c2.jnAcc, i_137 = F_2 * P_2.nx + ne_2 * P_2.ny + P_2.surfacey + P_2.c1.bounce - (P_2.Ka * n_215 + P_2.Kb * r_178), a_111 = e_302 * P_2.nx + t_262 * P_2.ny + P_2.surfacey + P_2.c2.bounce - (P_2.Kb * n_215 + P_2.Kc * r_178), o_88 = -(P_2.kMassa * i_137 + P_2.kMassb * a_111), s_79 = -(P_2.kMassb * i_137 + P_2.kMassc * a_111);
                    o_88 >= 0 && s_79 >= 0 ? (i_137 = o_88 - n_215, a_111 = s_79 - r_178, P_2.c1.jnAcc = o_88, P_2.c2.jnAcc = s_79) : (o_88 = -P_2.c1.nMass * i_137, o_88 >= 0 && P_2.Kb * o_88 + a_111 >= 0 ? (i_137 = o_88 - n_215, a_111 = -r_178, P_2.c1.jnAcc = o_88, P_2.c2.jnAcc = 0) : (s_79 = -P_2.c2.nMass * a_111, s_79 >= 0 && P_2.Kb * s_79 + i_137 >= 0 ? (i_137 = -n_215, a_111 = s_79 - r_178, P_2.c1.jnAcc = 0, P_2.c2.jnAcc = s_79) : i_137 >= 0 && a_111 >= 0 ? (i_137 = -n_215, a_111 = -r_178, P_2.c1.jnAcc = P_2.c2.jnAcc = 0) : (i_137 = 0, a_111 = 0))), I_2 = i_137 + a_111, ae_2 = P_2.nx * I_2, oe_2 = P_2.ny * I_2, P_2.b2.velx += ae_2 * P_2.b2.imass, P_2.b2.vely += oe_2 * P_2.b2.imass, P_2.b1.velx -= ae_2 * P_2.b1.imass, P_2.b1.vely -= oe_2 * P_2.b1.imass, P_2.b2.angvel += (P_2.rn1b * i_137 + P_2.rn2b * a_111) * P_2.b2.iinertia, P_2.b1.angvel -= (P_2.rn1a * i_137 + P_2.rn2a * a_111) * P_2.b1.iinertia;
                }
                else
                    P_2.radius != 0 && (I_2 = (P_2.b2.angvel - P_2.b1.angvel) * P_2.rMass, L_2 = P_2.rfric * P_2.c1.jnAcc, re_2 = P_2.jrAcc, P_2.jrAcc -= I_2, P_2.jrAcc > L_2 ? P_2.jrAcc = L_2 : P_2.jrAcc < -L_2 && (P_2.jrAcc = -L_2), I_2 = P_2.jrAcc - re_2, P_2.b2.angvel += I_2 * P_2.b2.iinertia, P_2.b1.angvel -= I_2 * P_2.b1.iinertia), F_2 = P_2.k1x + P_2.b2.velx - P_2.c1.r2y * P_2.b2.angvel - (P_2.b1.velx - P_2.c1.r1y * P_2.b1.angvel), ne_2 = P_2.k1y + P_2.b2.vely + P_2.c1.r2x * P_2.b2.angvel - (P_2.b1.vely + P_2.c1.r1x * P_2.b1.angvel), I_2 = (P_2.c1.bounce + (P_2.nx * F_2 + P_2.ny * ne_2) + P_2.surfacey) * P_2.c1.nMass, re_2 = P_2.c1.jnAcc, ie_2 = re_2 - I_2, ie_2 < 0 && (ie_2 = 0), I_2 = ie_2 - re_2, P_2.c1.jnAcc = ie_2, ae_2 = P_2.nx * I_2, oe_2 = P_2.ny * I_2, P_2.b2.velx += ae_2 * P_2.b2.imass, P_2.b2.vely += oe_2 * P_2.b2.imass, P_2.b1.velx -= ae_2 * P_2.b1.imass, P_2.b1.vely -= oe_2 * P_2.b1.imass, P_2.b2.angvel += P_2.rn1b * I_2 * P_2.b2.iinertia, P_2.b1.angvel -= P_2.rn1a * I_2 * P_2.b1.iinertia;
                l_51.sweep_angvel = l_51.angvel % t, u_43.sweep_angvel = u_43.angvel % t;
            }
            if (d_29 != null && d_29.active && d_29.immState & 1 && d_29.type == Y.COL) {
                if (!l_51.sweepFrozen && l_51.type != 3) {
                    if (l_51.sweepFrozen = !0, r_168.failed)
                        l_51.angvel = l_51.sweep_angvel = 0;
                    else if (r_168.slipped) {
                        var e_303 = l_51;
                        e_303.sweep_angvel *= R.angularCCDSlipScale, l_51.angvel = e_303.sweep_angvel;
                    }
                    else
                        l_51.angvel = l_51.sweep_angvel;
                }
                if (!u_43.sweepFrozen && u_43.type != 3) {
                    if (u_43.sweepFrozen = !0, r_168.failed)
                        u_43.angvel = u_43.sweep_angvel = 0;
                    else if (r_168.slipped) {
                        var e_304 = u_43;
                        e_304.sweep_angvel *= R.angularCCDSlipScale, u_43.angvel = e_304.sweep_angvel;
                    }
                    else
                        u_43.angvel = u_43.sweep_angvel;
                }
            }
            var f_29 = r_168;
            f_29.next = X.zpp_pool, X.zpp_pool = f_29;
        } for (; this.toiEvents.head != null;) {
            var e_305 = this.toiEvents.pop_unsafe();
            e_305.next = X.zpp_pool, X.zpp_pool = e_305;
        } var r = this.kinematics.head; for (; r != null;) {
            var t_263 = r.elt;
            t_263.sweepIntegrate(e), t_263.sweepTime = 0, r = r.next;
        } var i = this.live.head; for (; i != null;) {
            var t_264 = i.elt;
            t_264.sweepFrozen || t_264.sweepIntegrate(e), t_264.sweepTime = 0, i = i.next;
        } };
        e.prototype.continuousEvent = function (e, t, n, r, i) { if (e.body.sweepFrozen && t.body.sweepFrozen || e.body.disableCCD || t.body.disableCCD)
            return r; var a; if (a = r != null && r.colarb == null || this.interactionType(e, t, e.body, t.body) <= 0, a)
            return r; var o = e.body, s = t.body; if (n || o.bullet || s.bullet) {
            var i_138;
            X.zpp_pool == null ? i_138 = new X : (i_138 = X.zpp_pool, X.zpp_pool = i_138.next, i_138.next = null), i_138.failed = !1, i_138.slipped = !1, i_138.s1 = i_138.s2 = null, i_138.arbiter = null;
            var a_112 = o.type == 3 || s.type == 3;
            if (n && !a_112)
                e.body.type == 2 ? (i_138.s1 = e, i_138.s2 = t) : (i_138.s2 = e, i_138.s1 = t), i_138.kinematic = !1, Yr.staticSweep(i_138, this.pre_dt, 0, R.collisionSlopCCD);
            else if (i_138.s1 = e, i_138.s2 = t, i_138.kinematic = a_112, i_138.s1.body.sweepFrozen || i_138.s2.body.sweepFrozen) {
                if (i_138.s1.body.sweepFrozen) {
                    var e_306 = i_138.s1;
                    i_138.s1 = i_138.s2, i_138.s2 = e_306, i_138.frozen1 = !1, i_138.frozen2 = !0;
                }
                Yr.staticSweep(i_138, this.pre_dt, 0, R.collisionSlopCCD);
            }
            else
                Yr.dynamicSweep(i_138, this.pre_dt, 0, R.collisionSlopCCD, !1);
            if (n && i_138.toi < 0 || i_138.failed) {
                var e_307 = i_138;
                e_307.next = X.zpp_pool, X.zpp_pool = e_307;
            }
            else
                this.toiEvents.add(i_138), i_138.frozen1 = i_138.s1.body.sweepFrozen, i_138.frozen2 = i_138.s2.body.sweepFrozen, i_138.arbiter = r == null ? null : r.colarb;
        } return r; };
        e.prototype.bodyCbWake = function (e) { if (e.type == 2 && e.cbSet != null) {
            if (this.midstep) {
                var t_265 = e.cbSet.bodylisteners.head;
                for (; t_265 != null;) {
                    var n_216 = t_265.elt;
                    if (n_216.event != 2) {
                        t_265 = t_265.next;
                        continue;
                    }
                    var r_179 = this.push_callback(n_216);
                    r_179.event = 2, r_179.body = e, t_265 = t_265.next;
                }
            }
            else
                e.component.woken = !0;
        } };
        e.prototype.bodyCbSleep = function (e) { if (e.type == 2 && e.cbSet != null) {
            var t_266 = e.cbSet.bodylisteners.head;
            for (; t_266 != null;) {
                var n_217 = t_266.elt;
                if (n_217.event != 3) {
                    t_266 = t_266.next;
                    continue;
                }
                var r_180 = this.push_callback(n_217);
                r_180.event = 3, r_180.body = e, t_266 = t_266.next;
            }
        } };
        e.prototype.constraintCbWake = function (e) { if (e.cbSet != null) {
            if (this.midstep) {
                var t_267 = e.cbSet.conlisteners.head;
                for (; t_267 != null;) {
                    var n_218 = t_267.elt;
                    if (n_218.event != 2) {
                        t_267 = t_267.next;
                        continue;
                    }
                    var r_181 = this.push_callback(n_218);
                    r_181.event = 2, r_181.constraint = e, t_267 = t_267.next;
                }
            }
            else
                e.component.woken = !0;
        } };
        e.prototype.constraintCbSleep = function (e) { if (e.cbSet != null) {
            var t_268 = e.cbSet.conlisteners.head;
            for (; t_268 != null;) {
                var n_219 = t_268.elt;
                if (n_219.event != 3) {
                    t_268 = t_268.next;
                    continue;
                }
                var r_182 = this.push_callback(n_219);
                r_182.event = 3, r_182.constraint = e, t_268 = t_268.next;
            }
        } };
        e.prototype.constraintCbBreak = function (e) { if (e.cbSet != null) {
            var t_269 = e.cbSet.conlisteners.head;
            for (; t_269 != null;) {
                var n_220 = t_269.elt;
                if (n_220.event != 4) {
                    t_269 = t_269.next;
                    continue;
                }
                var r_183 = this.push_callback(n_220);
                r_183.event = 4, r_183.constraint = e, t_269 = t_269.next;
            }
        } };
        e.prototype.nullListenerType = function (e, t) { var n = new yt, r = e.interactors.head; for (; r != null;) {
            var e_308 = r.elt;
            n.add(e_308), r = r.next;
        } if (e != t) {
            var e_309 = t.interactors.head;
            for (; e_309 != null;) {
                var t_270 = e_309.elt;
                n.add(t_270), e_309 = e_309.next;
            }
        } for (; n.head != null;) {
            var r_184 = n.pop_unsafe();
            if (r_184.icompound != null) {
                var e_310 = r_184.icompound, t_271 = e_310.bodies.head;
                for (; t_271 != null;) {
                    var e_311 = t_271.elt;
                    n.add(e_311), t_271 = t_271.next;
                }
                var i_139 = e_310.compounds.head;
                for (; i_139 != null;) {
                    var e_312 = i_139.elt;
                    n.add(e_312), i_139 = i_139.next;
                }
            }
            else {
                var n_221 = r_184.ibody == null ? r_184.ishape.body : r_184.ibody, i_140 = r_184.ishape == null ? null : r_184.ishape, a_113 = n_221.arbiters.head;
                for (; a_113 != null;) {
                    var n_222 = a_113.elt;
                    if (n_222.present == 0 || i_140 != null && n_222.ws1 != i_140 && n_222.ws2 != i_140) {
                        a_113 = a_113.next;
                        continue;
                    }
                    this.MRCA_chains(n_222.ws1, n_222.ws2);
                    var r_185 = this.mrca1.head;
                    for (; r_185 != null;) {
                        var n_223 = r_185.elt;
                        if (n_223.cbSet != e && n_223.cbSet != t) {
                            r_185 = r_185.next;
                            continue;
                        }
                        var i_141 = this.mrca2.head;
                        for (; i_141 != null;) {
                            var r_186 = i_141.elt;
                            if (n_223.cbSet == e && r_186.cbSet != t || n_223.cbSet == t && r_186.cbSet != e) {
                                i_141 = i_141.next;
                                continue;
                            }
                            var a_114 = Or.get(n_223, r_186);
                            if (a_114 != null) {
                                for (; a_114.arbiters.head != null;) {
                                    var e_313 = a_114.arbiters.pop_unsafe();
                                    e_313.present--;
                                }
                                this.remove_callbackset(a_114);
                            }
                            i_141 = i_141.next;
                        }
                        r_185 = r_185.next;
                    }
                    a_113 = a_113.next;
                }
            }
        } };
        e.prototype.nullInteractorType = function (e, t) { if (t == null && (t = e), e.icompound != null) {
            var n_224 = e.icompound, r_187 = n_224.bodies.head;
            for (; r_187 != null;) {
                var e_314 = r_187.elt;
                this.nullInteractorType(e_314, t), r_187 = r_187.next;
            }
            var i_142 = n_224.compounds.head;
            for (; i_142 != null;) {
                var e_315 = i_142.elt;
                this.nullInteractorType(e_315, t), i_142 = i_142.next;
            }
        }
        else {
            var n_225 = e.ibody == null ? e.ishape.body : e.ibody, r_188 = e.ishape == null ? null : e.ishape, i_143 = n_225.arbiters.head;
            for (; i_143 != null;) {
                var e_316 = i_143.elt;
                if (e_316.present == 0 || r_188 != null && e_316.ws1 != r_188 && e_316.ws2 != r_188) {
                    i_143 = i_143.next;
                    continue;
                }
                this.MRCA_chains(e_316.ws1, e_316.ws2);
                var n_226 = this.mrca1.head;
                for (; n_226 != null;) {
                    var r_189 = n_226.elt, i_144 = this.mrca2.head;
                    for (; i_144 != null;) {
                        var n_227 = i_144.elt;
                        if (r_189 != t && n_227 != t) {
                            i_144 = i_144.next;
                            continue;
                        }
                        var a_115 = Or.get(r_189, n_227);
                        a_115 != null && (e_316.present--, a_115.remove_arb(e_316), a_115.arbiters.head == null && this.remove_callbackset(a_115)), i_144 = i_144.next;
                    }
                    n_226 = n_226.next;
                }
                i_143 = i_143.next;
            }
        } };
        e.prototype.freshListenerType = function (e, t) { var n = new yt, r = e.interactors.head; for (; r != null;) {
            var e_317 = r.elt;
            n.add(e_317), r = r.next;
        } if (e != t) {
            var e_318 = t.interactors.head;
            for (; e_318 != null;) {
                var t_272 = e_318.elt;
                n.add(t_272), e_318 = e_318.next;
            }
        } for (; n.head != null;) {
            var r_190 = n.pop_unsafe();
            if (r_190.icompound != null) {
                var e_319 = r_190.icompound, t_273 = e_319.bodies.head;
                for (; t_273 != null;) {
                    var e_320 = t_273.elt;
                    n.add(e_320), t_273 = t_273.next;
                }
                var i_145 = e_319.compounds.head;
                for (; i_145 != null;) {
                    var e_321 = i_145.elt;
                    n.add(e_321), i_145 = i_145.next;
                }
            }
            else {
                var n_228 = r_190.ibody == null ? r_190.ishape.body : r_190.ibody, i_146 = r_190.ishape == null ? null : r_190.ishape, a_116 = n_228.arbiters.head;
                for (; a_116 != null;) {
                    var n_229 = a_116.elt;
                    if (!n_229.presentable || i_146 != null && n_229.ws1 != i_146 && n_229.ws2 != i_146) {
                        a_116 = a_116.next;
                        continue;
                    }
                    this.MRCA_chains(n_229.ws1, n_229.ws2);
                    var r_191 = this.mrca1.head;
                    for (; r_191 != null;) {
                        var i_147 = r_191.elt;
                        if (i_147.cbSet != e && i_147.cbSet != t) {
                            r_191 = r_191.next;
                            continue;
                        }
                        var a_117 = this.mrca2.head;
                        for (; a_117 != null;) {
                            var r_192 = a_117.elt;
                            if (i_147.cbSet == e && r_192.cbSet != t || i_147.cbSet == t && r_192.cbSet != e) {
                                a_117 = a_117.next;
                                continue;
                            }
                            var o_89 = Or.get(i_147, r_192);
                            o_89 == null && (o_89 = ri.get(i_147, r_192), this.add_callbackset(o_89));
                            var s_80 = void 0, c_62 = !1, l_53 = o_89.arbiters.head;
                            for (; l_53 != null;) {
                                if (l_53.elt == n_229) {
                                    c_62 = !0;
                                    break;
                                }
                                l_53 = l_53.next;
                            }
                            c_62 ? s_80 = !1 : (o_89.arbiters.add(n_229), s_80 = !0), s_80 && n_229.present++, a_117 = a_117.next;
                        }
                        r_191 = r_191.next;
                    }
                    a_116 = a_116.next;
                }
            }
        } };
        e.prototype.freshInteractorType = function (e, t) { if (t == null && (t = e), e.icompound != null) {
            var n_230 = e.icompound, r_193 = n_230.bodies.head;
            for (; r_193 != null;) {
                var e_322 = r_193.elt;
                this.freshInteractorType(e_322, t), r_193 = r_193.next;
            }
            var i_148 = n_230.compounds.head;
            for (; i_148 != null;) {
                var e_323 = i_148.elt;
                this.freshInteractorType(e_323, t), i_148 = i_148.next;
            }
        }
        else {
            var n_231 = e.ibody == null ? e.ishape.body : e.ibody, r_194 = e.ishape == null ? null : e.ishape, i_149 = n_231.arbiters.head;
            for (; i_149 != null;) {
                var e_324 = i_149.elt;
                if (!e_324.presentable || r_194 != null && e_324.ws1 != r_194 && e_324.ws2 != r_194) {
                    i_149 = i_149.next;
                    continue;
                }
                this.MRCA_chains(e_324.ws1, e_324.ws2);
                var n_232 = this.mrca1.head;
                for (; n_232 != null;) {
                    var r_195 = n_232.elt, i_150 = this.mrca2.head;
                    for (; i_150 != null;) {
                        var n_233 = i_150.elt;
                        if (r_195 != t && n_233 != t) {
                            i_150 = i_150.next;
                            continue;
                        }
                        var a_118 = r_195.cbSet, o_90 = n_233.cbSet;
                        if (a_118.validate(), o_90.validate(), J.findOrCreatePair(a_118, o_90).listeners.head != null) {
                            var t_274 = Or.get(r_195, n_233);
                            t_274 == null && (t_274 = ri.get(r_195, n_233), this.add_callbackset(t_274));
                            var i_151 = void 0, a_119 = !1, o_91 = t_274.arbiters.head;
                            for (; o_91 != null;) {
                                if (o_91.elt == e_324) {
                                    a_119 = !0;
                                    break;
                                }
                                o_91 = o_91.next;
                            }
                            a_119 ? i_151 = !1 : (t_274.arbiters.add(e_324), i_151 = !0), i_151 && e_324.present++;
                        }
                        i_150 = i_150.next;
                    }
                    n_232 = n_232.next;
                }
                i_149 = i_149.next;
            }
        } };
        e.prototype.wakeCompound = function (e) { var t = e.bodies.head; for (; t != null;) {
            var e_325 = t.elt;
            e_325.world || (e_325.component.waket = this.stamp + +!this.midstep, e_325.type == 3 && (e_325.kinematicDelaySleep = !0), e_325.component.sleeping && this.really_wake(e_325, !1)), t = t.next;
        } var n = e.constraints.head; for (; n != null;) {
            var e_326 = n.elt;
            this.wake_constraint(e_326), n = n.next;
        } var r = e.compounds.head; for (; r != null;) {
            var e_327 = r.elt;
            this.wakeCompound(e_327), r = r.next;
        } };
        e.prototype.wakeIsland = function (e) { for (; e.comps.head != null;) {
            var t_275 = e.comps.pop_unsafe();
            if (t_275.waket = this.stamp + +!this.midstep, t_275.isBody) {
                var e_328 = t_275.body;
                this.live.add(e_328);
                var n_234 = e_328.arbiters.head;
                for (; n_234 != null;) {
                    var e_329 = n_234.elt;
                    if (e_329.sleeping) {
                        e_329.sleeping = !1;
                        var t_276 = e_329.endGenerated > e_329.up_stamp;
                        if (e_329.up_stamp += this.stamp - e_329.sleep_stamp, t_276 && e_329.up_stamp--, e_329.type == Y.COL) {
                            var t_277 = e_329.colarb;
                            t_277.stat ? this.c_arbiters_true.add(t_277) : this.c_arbiters_false.add(t_277);
                        }
                        else if (e_329.type == Y.FLUID) {
                            var t_278 = e_329.fluidarb;
                            this.f_arbiters.add(t_278);
                        }
                        else {
                            var t_279 = e_329.sensorarb;
                            this.s_arbiters.add(t_279);
                        }
                    }
                    n_234 = n_234.next;
                }
                if (this.bodyCbWake(e_328), t_275.sleeping = !1, t_275.island = null, t_275.parent = t_275, t_275.rank = 0, e_328.type != 1) {
                    var t_280 = e_328.shapes.head;
                    for (; t_280 != null;) {
                        var e_330 = t_280.elt;
                        e_330.node != null && this.bphase.sync(e_330), t_280 = t_280.next;
                    }
                }
            }
            else {
                var e_331 = t_275.constraint;
                this.live_constraints.add(e_331), this.constraintCbWake(e_331), t_275.sleeping = !1, t_275.island = null, t_275.parent = t_275, t_275.rank = 0;
            }
        } var t = e; t.next = ti.zpp_pool, ti.zpp_pool = t; };
        e.prototype.non_inlined_wake = function (e, t) { t == null && (t = !1); var n = e; n.world || (n.component.waket = this.stamp + +!this.midstep, n.type == 3 && (n.kinematicDelaySleep = !0), n.component.sleeping && this.really_wake(n, t)); };
        e.prototype.retireArbiter = function (e, t) { e.cleared = !0, (t == null || e.b2 == t) && e.b1.arbiters.remove(e), (t == null || e.b1 == t) && e.b2.arbiters.remove(e), e.pair != null && (e.pair.arb = null, e.pair = null), e.active = !1, this.f_arbiters.modified = !0; };
        e.prototype.really_wake = function (e, t) { if (t == null && (t = !1), e.component.island == null) {
            e.component.sleeping = !1, e.type == 3 || e.type == 1 ? this.staticsleep.add(e) : this.live.add(e);
            var n_235 = e.constraints.head;
            for (; n_235 != null;) {
                var e_332 = n_235.elt;
                e_332.space == this && this.wake_constraint(e_332), n_235 = n_235.next;
            }
            var r_196 = e.arbiters.head;
            for (; r_196 != null;) {
                var e_333 = r_196.elt;
                if (e_333.sleeping) {
                    e_333.sleeping = !1;
                    var t_281 = e_333.endGenerated > e_333.up_stamp;
                    if (e_333.up_stamp += this.stamp + +!this.midstep - e_333.sleep_stamp, t_281 && e_333.up_stamp--, e_333.type == Y.COL) {
                        var t_282 = e_333.colarb;
                        t_282.stat ? this.c_arbiters_true.add(t_282) : this.c_arbiters_false.add(t_282);
                    }
                    else if (e_333.type == Y.FLUID) {
                        var t_283 = e_333.fluidarb;
                        this.f_arbiters.add(t_283);
                    }
                    else {
                        var t_284 = e_333.sensorarb;
                        this.s_arbiters.add(t_284);
                    }
                }
                if (e_333.type != Y.SENSOR && !e_333.cleared && e_333.up_stamp >= this.stamp && e_333.immState & 1) {
                    if (e_333.b1.type == 2 && e_333.b1.component.sleeping) {
                        var t_285 = e_333.b1;
                        t_285.world || (t_285.component.waket = this.stamp + +!this.midstep, t_285.component.sleeping && this.really_wake(t_285, !1));
                    }
                    if (e_333.b2.type == 2 && e_333.b2.component.sleeping) {
                        var t_286 = e_333.b2;
                        t_286.world || (t_286.component.waket = this.stamp + +!this.midstep, t_286.component.sleeping && this.really_wake(t_286, !1));
                    }
                }
                r_196 = r_196.next;
            }
            if (!t && e.type == 2 && this.bodyCbWake(e), !t && !this.bphase.is_sweep && e.type != 1) {
                var t_287 = e.shapes.head;
                for (; t_287 != null;) {
                    var e_334 = t_287.elt;
                    e_334.node != null && this.bphase.sync(e_334), t_287 = t_287.next;
                }
            }
        }
        else
            this.wakeIsland(e.component.island); };
        e.prototype.wake_constraint = function (e, t) { return t == null && (t = !1), e.active ? (e.component.waket = this.stamp + +!this.midstep, e.component.sleeping ? (e.component.island == null ? (e.component.sleeping = !1, this.live_constraints.add(e), e.wake_connected(), t || this.constraintCbWake(e)) : this.wakeIsland(e.component.island), !0) : !1) : !1; };
        e.prototype.doForests = function (e) { var t = this.c_arbiters_false.head; for (; t != null;) {
            var e_335 = t.elt;
            if (!e_335.cleared && e_335.up_stamp == this.stamp && e_335.immState & 1 && e_335.b1.type == 2 && e_335.b2.type == 2) {
                var t_288 = void 0;
                if (e_335.b1.component == e_335.b1.component.parent)
                    t_288 = e_335.b1.component;
                else {
                    var n_236 = e_335.b1.component, r_197 = null;
                    for (; n_236 != n_236.parent;) {
                        var e_336 = n_236.parent;
                        n_236.parent = r_197, r_197 = n_236, n_236 = e_336;
                    }
                    for (; r_197 != null;) {
                        var e_337 = r_197.parent;
                        r_197.parent = n_236, r_197 = e_337;
                    }
                    t_288 = n_236;
                }
                var n_237 = void 0;
                if (e_335.b2.component == e_335.b2.component.parent)
                    n_237 = e_335.b2.component;
                else {
                    var t_289 = e_335.b2.component, r_198 = null;
                    for (; t_289 != t_289.parent;) {
                        var e_338 = t_289.parent;
                        t_289.parent = r_198, r_198 = t_289, t_289 = e_338;
                    }
                    for (; r_198 != null;) {
                        var e_339 = r_198.parent;
                        r_198.parent = t_289, r_198 = e_339;
                    }
                    n_237 = t_289;
                }
                t_288 != n_237 && (t_288.rank < n_237.rank ? t_288.parent = n_237 : t_288.rank > n_237.rank ? n_237.parent = t_288 : (n_237.parent = t_288, t_288.rank++));
            }
            t = t.next;
        } var n = this.f_arbiters.head; for (; n != null;) {
            var e_340 = n.elt;
            if (!e_340.cleared && e_340.up_stamp == this.stamp && e_340.immState & 1 && e_340.b1.type == 2 && e_340.b2.type == 2) {
                var t_290 = void 0;
                if (e_340.b1.component == e_340.b1.component.parent)
                    t_290 = e_340.b1.component;
                else {
                    var n_238 = e_340.b1.component, r_199 = null;
                    for (; n_238 != n_238.parent;) {
                        var e_341 = n_238.parent;
                        n_238.parent = r_199, r_199 = n_238, n_238 = e_341;
                    }
                    for (; r_199 != null;) {
                        var e_342 = r_199.parent;
                        r_199.parent = n_238, r_199 = e_342;
                    }
                    t_290 = n_238;
                }
                var n_239 = void 0;
                if (e_340.b2.component == e_340.b2.component.parent)
                    n_239 = e_340.b2.component;
                else {
                    var t_291 = e_340.b2.component, r_200 = null;
                    for (; t_291 != t_291.parent;) {
                        var e_343 = t_291.parent;
                        t_291.parent = r_200, r_200 = t_291, t_291 = e_343;
                    }
                    for (; r_200 != null;) {
                        var e_344 = r_200.parent;
                        r_200.parent = t_291, r_200 = e_344;
                    }
                    n_239 = t_291;
                }
                t_290 != n_239 && (t_290.rank < n_239.rank ? t_290.parent = n_239 : t_290.rank > n_239.rank ? n_239.parent = t_290 : (n_239.parent = t_290, t_290.rank++));
            }
            n = n.next;
        } var r = this.live_constraints.head; for (; r != null;)
            r.elt.forest(), r = r.next; for (; this.live.head != null;) {
            var t_292 = this.live, n_240 = t_292.head.elt;
            t_292.pop();
            var r_201 = n_240, i_152 = r_201.component, a_120 = void 0;
            if (i_152 == i_152.parent)
                a_120 = i_152;
            else {
                var e_345 = i_152, t_293 = null;
                for (; e_345 != e_345.parent;) {
                    var n_241 = e_345.parent;
                    e_345.parent = t_293, t_293 = e_345, e_345 = n_241;
                }
                for (; t_293 != null;) {
                    var n_242 = t_293.parent;
                    t_293.parent = e_345, t_293 = n_242;
                }
                a_120 = e_345;
            }
            if (a_120.island == null) {
                ti.zpp_pool == null ? a_120.island = new ti : (a_120.island = ti.zpp_pool, ti.zpp_pool = a_120.island.next, a_120.island.next = null), a_120.island.waket = 0;
                var e_346 = this.islands, t_294 = a_120.island;
                t_294._inuse = !0;
                var n_243 = t_294;
                n_243.next = e_346.next, e_346.next = n_243, e_346.modified = !0, e_346.length++, a_120.island.sleep = !0;
            }
            i_152.island = a_120.island, i_152.island.comps.add(i_152);
            var o_92 = r_201.atRest(e);
            i_152.island.sleep = i_152.island.sleep && o_92, i_152.waket > i_152.island.waket && (i_152.island.waket = i_152.waket);
        } for (; this.live_constraints.head != null;) {
            var e_347 = this.live_constraints, t_295 = e_347.head.elt;
            e_347.pop();
            var n_244 = t_295.component, r_202 = void 0;
            if (n_244 == n_244.parent)
                r_202 = n_244;
            else {
                var e_348 = n_244, t_296 = null;
                for (; e_348 != e_348.parent;) {
                    var n_245 = e_348.parent;
                    e_348.parent = t_296, t_296 = e_348, e_348 = n_245;
                }
                for (; t_296 != null;) {
                    var n_246 = t_296.parent;
                    t_296.parent = e_348, t_296 = n_246;
                }
                r_202 = e_348;
            }
            n_244.island = r_202.island, n_244.island.comps.add(n_244), n_244.waket > n_244.island.waket && (n_244.island.waket = n_244.waket);
        } for (; this.islands.next != null;) {
            var e_349 = this.islands, t_297 = e_349.next;
            e_349.pop();
            var n_247 = t_297;
            if (this.deterministic && this._sortLinkedList(n_247.comps, di), n_247.sleep) {
                var e_350 = n_247.comps.head;
                for (; e_350 != null;) {
                    var t_298 = e_350.elt;
                    if (t_298.isBody) {
                        var e_351 = t_298.body;
                        e_351.velx = 0, e_351.vely = 0, e_351.angvel = 0, t_298.sleeping = !0;
                        var n_248 = e_351.shapes.head;
                        for (; n_248 != null;) {
                            var e_352 = n_248.elt;
                            this.bphase.sync(e_352), n_248 = n_248.next;
                        }
                        this.bodyCbSleep(e_351);
                    }
                    else {
                        var e_353 = t_298.constraint;
                        this.constraintCbSleep(e_353), t_298.sleeping = !0;
                    }
                    e_350 = e_350.next;
                }
            }
            else {
                for (; n_247.comps.head != null;) {
                    var e_354 = n_247.comps, t_299 = e_354.head.elt;
                    e_354.pop();
                    var r_203 = t_299;
                    if (r_203.waket = n_247.waket, r_203.isBody) {
                        var e_355 = r_203.body;
                        this.live.add(e_355);
                    }
                    else {
                        var e_356 = r_203.constraint;
                        this.live_constraints.add(e_356);
                    }
                    r_203.sleeping = !1, r_203.island = null, r_203.parent = r_203, r_203.rank = 0;
                }
                var e_357 = n_247;
                e_357.next = ti.zpp_pool, ti.zpp_pool = e_357;
            }
        } };
        e.prototype.sleepArbiters = function () { this.sleepArbiterList(this.c_arbiters_true), this.sleepArbiterList(this.c_arbiters_false), this.sleepArbiterList(this.f_arbiters), this.sleepArbiterList(this.s_arbiters); };
        e.prototype.sleepArbiterList = function (e) { var t = null, n = e.head; for (; n != null;) {
            var r_204 = n.elt;
            r_204.b1.component.sleeping && r_204.b2.component.sleeping ? (r_204.sleep_stamp = this.stamp, r_204.sleeping = !0, n = e.erase(t)) : (t = n, n = n.next);
        } };
        e.prototype.static_validation = function (t) { if (t.shapes.head != null && t.validate_aabb(), t.validate_mass(), t.validate_inertia(), t.velx != 0 || t.vely != 0 || t.angvel != 0)
            throw Error("Error: Static body cannot have any real velocity, only kinematic or surface velocities"); var n = t.shapes.head; for (; n != null;) {
            var t_300 = n.elt;
            if (t_300.type == 1) {
                var n_249 = t_300.polygon;
                n_249.zip_sanitation && (n_249.zip_sanitation = !1, n_249.splice_collinear_real());
                var r_205 = t_300.polygon.valid();
                if (U.ValidationResult_VALID == null && (U.internal = !0, U.ValidationResult_VALID = new e._nape.shape.ValidationResult, U.internal = !1), r_205 != U.ValidationResult_VALID)
                    throw Error("Error: Cannot simulate with an invalid Polygon : " + t_300.polygon.outer.toString() + " is invalid : " + r_205.toString());
                t_300.polygon.validate_gaxi();
            }
            n = n.next;
        } t.sweepFrozen = !0; };
        e.prototype.validation = function () { var t = this.cbsets; if (!t.cbsets.empty()) {
            var e_358 = t.cbsets.parent;
            for (; e_358.prev != null;)
                e_358 = e_358.prev;
            for (; e_358 != null;)
                if (e_358.data.validate(), e_358.next != null)
                    for (e_358 = e_358.next; e_358.prev != null;)
                        e_358 = e_358.prev;
                else {
                    for (; e_358.parent != null && e_358 == e_358.parent.next;)
                        e_358 = e_358.parent;
                    e_358 = e_358.parent;
                }
        } var n = this.live.head; for (; n != null;) {
            var t_301 = n.elt;
            t_301.sweepRadius = 0;
            var r_206 = t_301.shapes.head;
            for (; r_206 != null;) {
                var n_250 = r_206.elt;
                if (n_250.type == 1) {
                    var t_302 = n_250.polygon;
                    if (t_302.zip_valid || t_302.zip_sanitation) {
                        t_302.zip_sanitation && (t_302.zip_sanitation = !1, t_302.splice_collinear_real());
                        var r_207 = n_250.polygon.valid();
                        if (U.ValidationResult_VALID == null && (U.internal = !0, U.ValidationResult_VALID = new e._nape.shape.ValidationResult, U.internal = !1), r_207 != U.ValidationResult_VALID)
                            throw Error("Error: Cannot simulate with an invalid Polygon : " + n_250.polygon.outer.toString() + " is invalid : " + r_207.toString());
                    }
                    n_250.polygon.validate_gaxi();
                }
                n_250.validate_sweepRadius(), n_250.sweepRadius > t_301.sweepRadius && (t_301.sweepRadius = n_250.sweepRadius), r_206 = r_206.next;
            }
            if (t_301.validate_mass(), t_301.validate_inertia(), t_301.shapes.head != null && (t_301.validate_aabb(), t_301.validate_worldCOM()), t_301.validate_gravMass(), t_301.validate_axis(), !t_301.nomove && t_301.type == 2 && t_301.mass == 0)
                throw Error("Error: Dynamic Body cannot be simulated with 0 mass unless allowMovement is false");
            if (!t_301.norotate && t_301.type == 2 && t_301.inertia == 0)
                throw Error("Error: Dynamic Body cannot be simulated with 0 inertia unless allowRotation is false");
            if (t_301.component.woken && t_301.cbSet != null) {
                var e_359 = t_301.cbSet.bodylisteners.head;
                for (; e_359 != null;) {
                    var n_251 = e_359.elt;
                    if (n_251.event != 2) {
                        e_359 = e_359.next;
                        continue;
                    }
                    var r_208 = this.push_callback(n_251);
                    r_208.event = 2, r_208.body = t_301, e_359 = e_359.next;
                }
            }
            t_301.component.woken = !1;
            var i_153 = t_301.shapes.head;
            for (; i_153 != null;) {
                var e_360 = i_153.elt;
                this.bphase.sync(e_360), i_153 = i_153.next;
            }
            n = n.next;
        } var r = this.kinematics.head; for (; r != null;) {
            var t_303 = r.elt;
            t_303.sweepRadius = 0;
            var n_252 = t_303.shapes.head;
            for (; n_252 != null;) {
                var r_209 = n_252.elt;
                if (r_209.type == 1) {
                    var t_304 = r_209.polygon;
                    t_304.zip_sanitation && (t_304.zip_sanitation = !1, t_304.splice_collinear_real());
                    var n_253 = r_209.polygon.valid();
                    if (U.ValidationResult_VALID == null && (U.internal = !0, U.ValidationResult_VALID = new e._nape.shape.ValidationResult, U.internal = !1), n_253 != U.ValidationResult_VALID)
                        throw Error("Error: Cannot simulate with an invalid Polygon : " + r_209.polygon.outer.toString() + " is invalid : " + n_253.toString());
                    r_209.polygon.validate_gaxi();
                }
                r_209.validate_sweepRadius(), r_209.sweepRadius > t_303.sweepRadius && (t_303.sweepRadius = r_209.sweepRadius), n_252 = n_252.next;
            }
            if (t_303.validate_mass(), t_303.validate_inertia(), t_303.shapes.head != null && (t_303.validate_aabb(), t_303.validate_worldCOM()), t_303.validate_gravMass(), t_303.validate_axis(), !t_303.nomove && t_303.type == 2 && t_303.mass == 0)
                throw Error("Error: Dynamic Body cannot be simulated with 0 mass unless allowMovement is false");
            if (!t_303.norotate && t_303.type == 2 && t_303.inertia == 0)
                throw Error("Error: Dynamic Body cannot be simulated with 0 inertia unless allowRotation is false");
            var i_154 = t_303.shapes.head;
            for (; i_154 != null;) {
                var e_361 = i_154.elt;
                this.bphase.sync(e_361), i_154 = i_154.next;
            }
            r = r.next;
        } var i = this.live_constraints.head; for (; i != null;) {
            var e_362 = i.elt;
            if (e_362.active) {
                if (e_362.validate(), e_362.component.woken && e_362.cbSet != null) {
                    var t_305 = e_362.cbSet.conlisteners.head;
                    for (; t_305 != null;) {
                        var n_254 = t_305.elt;
                        if (n_254.event != 2) {
                            t_305 = t_305.next;
                            continue;
                        }
                        var r_210 = this.push_callback(n_254);
                        r_210.event = 2, r_210.constraint = e_362, t_305 = t_305.next;
                    }
                }
                e_362.component.woken = !1;
            }
            i = i.next;
        } };
        e.prototype.updateVel = function (e) { var t = 1 - e * this.global_lin_drag, n = 1 - e * this.global_ang_drag, r = this.live.head; for (; r != null;) {
            var i_155 = r.elt;
            if (i_155.smass != 0) {
                var n_255 = e * i_155.imass;
                i_155.velx = t * i_155.velx + (i_155.forcex + this.gravityx * i_155.gravMass) * n_255, i_155.vely = t * i_155.vely + (i_155.forcey + this.gravityy * i_155.gravMass) * n_255;
            }
            if (i_155.sinertia != 0) {
                var t_306 = 0, r_211 = 0;
                t_306 = i_155.worldCOMx - i_155.posx, r_211 = i_155.worldCOMy - i_155.posy;
                var a_121 = i_155.torque + (this.gravityy * t_306 - this.gravityx * r_211) * i_155.gravMass;
                i_155.angvel = n * i_155.angvel + a_121 * e * i_155.iinertia;
            }
            r = r.next;
        } };
        e.prototype.updatePos = function (e) { var t = 2 * Math.PI / e, n = this.live.head; for (; n != null;) {
            var r_212 = n.elt;
            if (r_212.pre_posx = r_212.posx, r_212.pre_posy = r_212.posy, r_212.pre_rot = r_212.rot, r_212.sweepTime = 0, r_212.sweep_angvel = r_212.angvel % t, r_212.sweepIntegrate(e), r_212.disableCCD)
                r_212.sweepFrozen = !0, r_212.bullet = !1;
            else {
                var t_307 = R.staticCCDLinearThreshold * r_212.sweepRadius, n_256 = R.staticCCDAngularThreshold;
                if ((r_212.velx * r_212.velx + r_212.vely * r_212.vely) * e * e > t_307 * t_307 || r_212.angvel * r_212.angvel * e * e > n_256 * n_256 || r_212.type == 3) {
                    var t_308 = r_212.sweep_angvel;
                    t_308 < 0 && (t_308 = -t_308);
                    var n_257 = 1 / t_308, i_156 = r_212.shapes.head;
                    for (; i_156 != null;) {
                        var a_122 = i_156.elt, o_93 = a_122.aabb, s_81 = o_93.minx, c_63 = o_93.miny, l_54 = o_93.maxx, u_45 = o_93.maxy, d_30 = t_308 * e * a_122.sweepCoef * .008333333333333333 | 0;
                        d_30 > 8 && (d_30 = 8);
                        var f_30 = t_308 * e / d_30;
                        if (r_212.sweepIntegrate(e), a_122.type == 0) {
                            var e_363 = a_122.circle;
                            e_363.worldCOMx = e_363.body.posx + (e_363.body.axisy * e_363.localCOMx - e_363.body.axisx * e_363.localCOMy), e_363.worldCOMy = e_363.body.posy + (e_363.localCOMx * e_363.body.axisx + e_363.localCOMy * e_363.body.axisy), e_363.aabb.minx = e_363.worldCOMx - e_363.radius, e_363.aabb.miny = e_363.worldCOMy - e_363.radius, e_363.aabb.maxx = e_363.worldCOMx + e_363.radius, e_363.aabb.maxy = e_363.worldCOMy + e_363.radius;
                        }
                        else {
                            var e_364 = a_122.polygon, t_309 = e_364.lverts.next, n_258 = e_364.gverts.next, r_213 = t_309;
                            t_309 = t_309.next, n_258.x = e_364.body.posx + (e_364.body.axisy * r_213.x - e_364.body.axisx * r_213.y), n_258.y = e_364.body.posy + (r_213.x * e_364.body.axisx + r_213.y * e_364.body.axisy), e_364.aabb.minx = n_258.x, e_364.aabb.miny = n_258.y, e_364.aabb.maxx = n_258.x, e_364.aabb.maxy = n_258.y;
                            var i_157 = e_364.gverts.next.next;
                            for (; i_157 != null;) {
                                var n_259 = i_157, r_214 = t_309;
                                t_309 = t_309.next, n_259.x = e_364.body.posx + (e_364.body.axisy * r_214.x - e_364.body.axisx * r_214.y), n_259.y = e_364.body.posy + (r_214.x * e_364.body.axisx + r_214.y * e_364.body.axisy), n_259.x < e_364.aabb.minx && (e_364.aabb.minx = n_259.x), n_259.x > e_364.aabb.maxx && (e_364.aabb.maxx = n_259.x), n_259.y < e_364.aabb.miny && (e_364.aabb.miny = n_259.y), n_259.y > e_364.aabb.maxy && (e_364.aabb.maxy = n_259.y), i_157 = i_157.next;
                            }
                        }
                        s_81 < o_93.minx ? o_93.minx = s_81 : s_81 = o_93.minx, c_63 < o_93.miny ? o_93.miny = c_63 : c_63 = o_93.miny, l_54 > o_93.maxx ? o_93.maxx = l_54 : l_54 = o_93.maxx, u_45 > o_93.maxy ? o_93.maxy = u_45 : u_45 = o_93.maxy;
                        var p_20 = 1, m_12 = d_30;
                        for (; p_20 < m_12;) {
                            var e_365 = f_30 * p_20++ * n_257;
                            if (r_212.sweepIntegrate(e_365), a_122.type == 0) {
                                var e_366 = a_122.circle;
                                e_366.worldCOMx = e_366.body.posx + (e_366.body.axisy * e_366.localCOMx - e_366.body.axisx * e_366.localCOMy), e_366.worldCOMy = e_366.body.posy + (e_366.localCOMx * e_366.body.axisx + e_366.localCOMy * e_366.body.axisy), e_366.aabb.minx = e_366.worldCOMx - e_366.radius, e_366.aabb.miny = e_366.worldCOMy - e_366.radius, e_366.aabb.maxx = e_366.worldCOMx + e_366.radius, e_366.aabb.maxy = e_366.worldCOMy + e_366.radius;
                            }
                            else {
                                var e_367 = a_122.polygon, t_310 = e_367.lverts.next, n_260 = e_367.gverts.next, r_215 = t_310;
                                t_310 = t_310.next, n_260.x = e_367.body.posx + (e_367.body.axisy * r_215.x - e_367.body.axisx * r_215.y), n_260.y = e_367.body.posy + (r_215.x * e_367.body.axisx + r_215.y * e_367.body.axisy), e_367.aabb.minx = n_260.x, e_367.aabb.miny = n_260.y, e_367.aabb.maxx = n_260.x, e_367.aabb.maxy = n_260.y;
                                var i_158 = e_367.gverts.next.next;
                                for (; i_158 != null;) {
                                    var n_261 = i_158, r_216 = t_310;
                                    t_310 = t_310.next, n_261.x = e_367.body.posx + (e_367.body.axisy * r_216.x - e_367.body.axisx * r_216.y), n_261.y = e_367.body.posy + (r_216.x * e_367.body.axisx + r_216.y * e_367.body.axisy), n_261.x < e_367.aabb.minx && (e_367.aabb.minx = n_261.x), n_261.x > e_367.aabb.maxx && (e_367.aabb.maxx = n_261.x), n_261.y < e_367.aabb.miny && (e_367.aabb.miny = n_261.y), n_261.y > e_367.aabb.maxy && (e_367.aabb.maxy = n_261.y), i_158 = i_158.next;
                                }
                            }
                            s_81 < o_93.minx ? o_93.minx = s_81 : s_81 = o_93.minx, c_63 < o_93.miny ? o_93.miny = c_63 : c_63 = o_93.miny, l_54 > o_93.maxx ? o_93.maxx = l_54 : l_54 = o_93.maxx, u_45 > o_93.maxy ? o_93.maxy = u_45 : u_45 = o_93.maxy;
                        }
                        this.bphase.sync(a_122), i_156 = i_156.next;
                    }
                    if (r_212.sweepFrozen = !1, r_212.type == 2 && r_212.bulletEnabled) {
                        var t_311 = R.bulletCCDLinearThreshold * r_212.sweepRadius, n_262 = R.bulletCCDAngularThreshold;
                        ((r_212.velx * r_212.velx + r_212.vely * r_212.vely) * e * e > t_311 * t_311 || r_212.angvel * r_212.angvel * e * e > n_262 * n_262) && (r_212.bullet = !0);
                    }
                }
                else
                    r_212.sweepFrozen = !0, r_212.bullet = !1;
            }
            n = n.next;
        } var r = this.kinematics.head; for (; r != null;) {
            var n_263 = r.elt;
            if (n_263.pre_posx = n_263.posx, n_263.pre_posy = n_263.posy, n_263.pre_rot = n_263.rot, n_263.sweepTime = 0, n_263.sweep_angvel = n_263.angvel % t, n_263.sweepIntegrate(e), n_263.disableCCD)
                n_263.sweepFrozen = !0, n_263.bullet = !1;
            else {
                var t_312 = R.staticCCDLinearThreshold * n_263.sweepRadius, r_217 = R.staticCCDAngularThreshold;
                if ((n_263.velx * n_263.velx + n_263.vely * n_263.vely) * e * e > t_312 * t_312 || n_263.angvel * n_263.angvel * e * e > r_217 * r_217 || n_263.type == 3) {
                    var t_313 = n_263.sweep_angvel;
                    t_313 < 0 && (t_313 = -t_313);
                    var r_218 = 1 / t_313, i_159 = n_263.shapes.head;
                    for (; i_159 != null;) {
                        var a_123 = i_159.elt, o_94 = a_123.aabb, s_82 = o_94.minx, c_64 = o_94.miny, l_55 = o_94.maxx, u_46 = o_94.maxy, d_31 = t_313 * e * a_123.sweepCoef * .008333333333333333 | 0;
                        d_31 > 8 && (d_31 = 8);
                        var f_31 = t_313 * e / d_31;
                        if (n_263.sweepIntegrate(e), a_123.type == 0) {
                            var e_368 = a_123.circle;
                            e_368.worldCOMx = e_368.body.posx + (e_368.body.axisy * e_368.localCOMx - e_368.body.axisx * e_368.localCOMy), e_368.worldCOMy = e_368.body.posy + (e_368.localCOMx * e_368.body.axisx + e_368.localCOMy * e_368.body.axisy), e_368.aabb.minx = e_368.worldCOMx - e_368.radius, e_368.aabb.miny = e_368.worldCOMy - e_368.radius, e_368.aabb.maxx = e_368.worldCOMx + e_368.radius, e_368.aabb.maxy = e_368.worldCOMy + e_368.radius;
                        }
                        else {
                            var e_369 = a_123.polygon, t_314 = e_369.lverts.next, n_264 = e_369.gverts.next, r_219 = t_314;
                            t_314 = t_314.next, n_264.x = e_369.body.posx + (e_369.body.axisy * r_219.x - e_369.body.axisx * r_219.y), n_264.y = e_369.body.posy + (r_219.x * e_369.body.axisx + r_219.y * e_369.body.axisy), e_369.aabb.minx = n_264.x, e_369.aabb.miny = n_264.y, e_369.aabb.maxx = n_264.x, e_369.aabb.maxy = n_264.y;
                            var i_160 = e_369.gverts.next.next;
                            for (; i_160 != null;) {
                                var n_265 = i_160, r_220 = t_314;
                                t_314 = t_314.next, n_265.x = e_369.body.posx + (e_369.body.axisy * r_220.x - e_369.body.axisx * r_220.y), n_265.y = e_369.body.posy + (r_220.x * e_369.body.axisx + r_220.y * e_369.body.axisy), n_265.x < e_369.aabb.minx && (e_369.aabb.minx = n_265.x), n_265.x > e_369.aabb.maxx && (e_369.aabb.maxx = n_265.x), n_265.y < e_369.aabb.miny && (e_369.aabb.miny = n_265.y), n_265.y > e_369.aabb.maxy && (e_369.aabb.maxy = n_265.y), i_160 = i_160.next;
                            }
                        }
                        s_82 < o_94.minx ? o_94.minx = s_82 : s_82 = o_94.minx, c_64 < o_94.miny ? o_94.miny = c_64 : c_64 = o_94.miny, l_55 > o_94.maxx ? o_94.maxx = l_55 : l_55 = o_94.maxx, u_46 > o_94.maxy ? o_94.maxy = u_46 : u_46 = o_94.maxy;
                        var p_21 = 1, m_13 = d_31;
                        for (; p_21 < m_13;) {
                            var e_370 = f_31 * p_21++ * r_218;
                            if (n_263.sweepIntegrate(e_370), a_123.type == 0) {
                                var e_371 = a_123.circle;
                                e_371.worldCOMx = e_371.body.posx + (e_371.body.axisy * e_371.localCOMx - e_371.body.axisx * e_371.localCOMy), e_371.worldCOMy = e_371.body.posy + (e_371.localCOMx * e_371.body.axisx + e_371.localCOMy * e_371.body.axisy), e_371.aabb.minx = e_371.worldCOMx - e_371.radius, e_371.aabb.miny = e_371.worldCOMy - e_371.radius, e_371.aabb.maxx = e_371.worldCOMx + e_371.radius, e_371.aabb.maxy = e_371.worldCOMy + e_371.radius;
                            }
                            else {
                                var e_372 = a_123.polygon, t_315 = e_372.lverts.next, n_266 = e_372.gverts.next, r_221 = t_315;
                                t_315 = t_315.next, n_266.x = e_372.body.posx + (e_372.body.axisy * r_221.x - e_372.body.axisx * r_221.y), n_266.y = e_372.body.posy + (r_221.x * e_372.body.axisx + r_221.y * e_372.body.axisy), e_372.aabb.minx = n_266.x, e_372.aabb.miny = n_266.y, e_372.aabb.maxx = n_266.x, e_372.aabb.maxy = n_266.y;
                                var i_161 = e_372.gverts.next.next;
                                for (; i_161 != null;) {
                                    var n_267 = i_161, r_222 = t_315;
                                    t_315 = t_315.next, n_267.x = e_372.body.posx + (e_372.body.axisy * r_222.x - e_372.body.axisx * r_222.y), n_267.y = e_372.body.posy + (r_222.x * e_372.body.axisx + r_222.y * e_372.body.axisy), n_267.x < e_372.aabb.minx && (e_372.aabb.minx = n_267.x), n_267.x > e_372.aabb.maxx && (e_372.aabb.maxx = n_267.x), n_267.y < e_372.aabb.miny && (e_372.aabb.miny = n_267.y), n_267.y > e_372.aabb.maxy && (e_372.aabb.maxy = n_267.y), i_161 = i_161.next;
                                }
                            }
                            s_82 < o_94.minx ? o_94.minx = s_82 : s_82 = o_94.minx, c_64 < o_94.miny ? o_94.miny = c_64 : c_64 = o_94.miny, l_55 > o_94.maxx ? o_94.maxx = l_55 : l_55 = o_94.maxx, u_46 > o_94.maxy ? o_94.maxy = u_46 : u_46 = o_94.maxy;
                        }
                        this.bphase.sync(a_123), i_159 = i_159.next;
                    }
                    if (n_263.sweepFrozen = !1, n_263.type == 2 && n_263.bulletEnabled) {
                        var t_316 = R.bulletCCDLinearThreshold * n_263.sweepRadius, r_223 = R.bulletCCDAngularThreshold;
                        ((n_263.velx * n_263.velx + n_263.vely * n_263.vely) * e * e > t_316 * t_316 || n_263.angvel * n_263.angvel * e * e > r_223 * r_223) && (n_263.bullet = !0);
                    }
                }
                else
                    n_263.sweepFrozen = !0, n_263.bullet = !1;
            }
            r = r.next;
        } };
        e.prototype.presteparb = function (e, t, n) { if (n == null && (n = !1), !e.cleared && e.b1.component.sleeping && e.b2.component.sleeping)
            return e.sleep_stamp = this.stamp, e.sleeping = !0, !0; if (!e.cleared || e.present != 0 || e.intchange) {
            var t_317 = !n && e.up_stamp == this.stamp - 1 && e.endGenerated != this.stamp && !e.cleared && !e.intchange, r_224 = e.fresh && !e.cleared && !e.intchange;
            if (t_317 && (e.endGenerated = this.stamp), r_224 || t_317 || e.cleared || e.intchange) {
                this.MRCA_chains(e.ws1, e.ws2);
                var t_318 = this.mrca1.head;
                for (; t_318 != null;) {
                    var n_268 = t_318.elt, i_162 = this.mrca2.head;
                    for (; i_162 != null;) {
                        var t_319 = i_162.elt, a_124 = n_268.cbSet, o_95 = t_319.cbSet;
                        if (J.findOrCreatePair(a_124, o_95).listeners.head == null) {
                            i_162 = i_162.next;
                            continue;
                        }
                        var s_83 = Or.get(n_268, t_319);
                        if (r_224 || e.intchange) {
                            s_83 == null && (s_83 = ri.get(n_268, t_319), this.add_callbackset(s_83));
                            var r_225 = J.findOrCreatePair(a_124, o_95).listeners.head;
                            for (; r_225 != null;) {
                                var t_320 = r_225.elt;
                                if (t_320.event == 0 && (t_320.itype & e.type) != 0 && s_83.empty_arb(t_320.itype)) {
                                    var e_373 = this.push_callback(t_320);
                                    e_373.event = 0, Or.int_callback(s_83, t_320, e_373), e_373.set = s_83;
                                }
                                r_225 = r_225.next;
                            }
                            var i_163 = void 0, c_65 = !1, l_56 = s_83.arbiters.head;
                            for (; l_56 != null;) {
                                if (l_56.elt == e) {
                                    c_65 = !0;
                                    break;
                                }
                                l_56 = l_56.next;
                            }
                            c_65 ? i_163 = !1 : (s_83.arbiters.add(e), i_163 = !0), i_163 && e.present++;
                        }
                        else {
                            e.present--, s_83.remove_arb(e);
                            var t_321 = J.findOrCreatePair(a_124, o_95).listeners.head;
                            for (; t_321 != null;) {
                                var n_269 = t_321.elt;
                                if (n_269.event == 1 && (n_269.itype & e.type) != 0 && s_83.empty_arb(n_269.itype)) {
                                    var e_374 = this.push_callback(n_269);
                                    e_374.event = 1, Or.int_callback(s_83, n_269, e_374), e_374.set = s_83;
                                }
                                t_321 = t_321.next;
                            }
                            s_83.arbiters.head == null && this.remove_callbackset(s_83);
                        }
                        i_162 = i_162.next;
                    }
                    t_318 = t_318.next;
                }
            }
            e.fresh = !1, e.intchange = !1;
        } if (e.cleared || e.up_stamp + (e.type == Y.COL ? R.arbiterExpirationDelay : 0) < this.stamp) {
            if (e.type == Y.SENSOR) {
                var t_322 = e.sensorarb;
                t_322.cleared || (t_322.b1.arbiters.remove(t_322), t_322.b2.arbiters.remove(t_322), t_322.pair != null && (t_322.pair.arb = null, t_322.pair = null)), t_322.b1 = t_322.b2 = null, t_322.active = !1, t_322.intchange = !1;
                var n_270 = t_322;
                n_270.next = Qr.zpp_pool, Qr.zpp_pool = n_270;
            }
            else if (e.type == Y.FLUID) {
                var t_323 = e.fluidarb;
                t_323.cleared || (t_323.b1.arbiters.remove(t_323), t_323.b2.arbiters.remove(t_323), t_323.pair != null && (t_323.pair.arb = null, t_323.pair = null)), t_323.b1 = t_323.b2 = null, t_323.active = !1, t_323.intchange = !1;
                var n_271 = t_323;
                n_271.next = Zr.zpp_pool, Zr.zpp_pool = n_271, t_323.pre_dt = -1;
            }
            else {
                var t_324 = e.colarb;
                for (t_324.cleared || (t_324.b1.arbiters.remove(t_324), t_324.b2.arbiters.remove(t_324), t_324.pair != null && (t_324.pair.arb = null, t_324.pair = null)), t_324.b1 = t_324.b2 = null, t_324.active = !1, t_324.intchange = !1; t_324.contacts.next != null;) {
                    var e_375 = t_324.contacts, n_272 = e_375.next;
                    e_375.pop();
                    var r_226 = n_272;
                    r_226.arbiter = null, r_226.next = Kr.zpp_pool, Kr.zpp_pool = r_226;
                    var i_164 = t_324.innards, a_125 = i_164.next;
                    i_164.next = a_125.next, a_125._inuse = !1, i_164.next == null && (i_164.pushmod = !0), i_164.modified = !0, i_164.length--;
                }
                var n_273 = t_324;
                n_273.free(), n_273.next = Xr.zpp_pool, Xr.zpp_pool = n_273, t_324.pre_dt = -1;
            }
            return !0;
        } var r = e.active; if (e.active = e.presentable = e.up_stamp == this.stamp, e.immState & 1) {
            if (e.active && e.type != Y.SENSOR) {
                if (e.colarb != null) {
                    var n_274 = e.colarb;
                    n_274.validate_props(), n_274.pre_dt == -1 && (n_274.pre_dt = t);
                    var r_227 = t / n_274.pre_dt;
                    n_274.pre_dt = t;
                    var i_165 = n_274.b1.smass + n_274.b2.smass;
                    n_274.hc2 = !1;
                    var a_126 = !0;
                    n_274.biasCoef = n_274.b1.type != 2 || n_274.b2.type != 2 ? n_274.continuous ? R.contactContinuousStaticBiasCoef : R.contactStaticBiasCoef : n_274.continuous ? R.contactContinuousBiasCoef : R.contactBiasCoef, n_274.continuous = !1, n_274.cleanupContacts();
                    var o_96 = n_274.contacts.next;
                    for (; o_96 != null;) {
                        var e_376 = o_96;
                        if (e_376.active) {
                            a_126 = !1;
                            var t_325 = e_376.inner;
                            t_325.r2x = e_376.px - n_274.b2.posx, t_325.r2y = e_376.py - n_274.b2.posy, t_325.r1x = e_376.px - n_274.b1.posx, t_325.r1y = e_376.py - n_274.b1.posy;
                            var o_97 = t_325.r2x * n_274.nx + t_325.r2y * n_274.ny, s_84 = i_165 + n_274.b2.sinertia * (o_97 * o_97), c_66 = t_325.r1x * n_274.nx + t_325.r1y * n_274.ny;
                            s_84 += n_274.b1.sinertia * (c_66 * c_66), t_325.tMass = s_84 < R.epsilon * R.epsilon ? 0 : 1 / s_84;
                            var l_57 = n_274.ny * t_325.r2x - n_274.nx * t_325.r2y, u_47 = i_165 + n_274.b2.sinertia * (l_57 * l_57), d_32 = n_274.ny * t_325.r1x - n_274.nx * t_325.r1y;
                            u_47 += n_274.b1.sinertia * (d_32 * d_32), t_325.nMass = u_47 < R.epsilon * R.epsilon ? 0 : 1 / u_47;
                            var f_32 = 0, p_22 = 0, m_14 = n_274.b2.angvel + n_274.b2.kinangvel;
                            f_32 = n_274.b2.velx + n_274.b2.kinvelx - t_325.r2y * m_14, p_22 = n_274.b2.vely + n_274.b2.kinvely + t_325.r2x * m_14, m_14 = n_274.b1.angvel + n_274.b1.kinangvel, f_32 -= n_274.b1.velx + n_274.b1.kinvelx - t_325.r1y * m_14, p_22 -= n_274.b1.vely + n_274.b1.kinvely + t_325.r1x * m_14;
                            var h_8 = n_274.nx * f_32 + n_274.ny * p_22;
                            e_376.elasticity = n_274.restitution, t_325.bounce = h_8 * e_376.elasticity, t_325.bounce > -R.elasticThreshold && (t_325.bounce = 0), h_8 = p_22 * n_274.nx - f_32 * n_274.ny;
                            var g_10 = R.staticFrictionThreshold;
                            t_325.friction = h_8 * h_8 > g_10 * g_10 ? n_274.dyn_fric : n_274.stat_fric, t_325.jnAcc *= r_227, t_325.jtAcc *= r_227;
                        }
                        o_96 = o_96.next;
                    }
                    if (n_274.hpc2 && n_274.oc1.posOnly && (a_126 = !0), n_274.jrAcc *= r_227, a_126 || (n_274.rn1a = n_274.ny * n_274.c1.r1x - n_274.nx * n_274.c1.r1y, n_274.rt1a = n_274.c1.r1x * n_274.nx + n_274.c1.r1y * n_274.ny, n_274.rn1b = n_274.ny * n_274.c1.r2x - n_274.nx * n_274.c1.r2y, n_274.rt1b = n_274.c1.r2x * n_274.nx + n_274.c1.r2y * n_274.ny, n_274.k1x = n_274.b2.kinvelx - n_274.c1.r2y * n_274.b2.kinangvel - (n_274.b1.kinvelx - n_274.c1.r1y * n_274.b1.kinangvel), n_274.k1y = n_274.b2.kinvely + n_274.c1.r2x * n_274.b2.kinangvel - (n_274.b1.kinvely + n_274.c1.r1x * n_274.b1.kinangvel)), n_274.hc2) {
                        if (n_274.rn2a = n_274.ny * n_274.c2.r1x - n_274.nx * n_274.c2.r1y, n_274.rt2a = n_274.c2.r1x * n_274.nx + n_274.c2.r1y * n_274.ny, n_274.rn2b = n_274.ny * n_274.c2.r2x - n_274.nx * n_274.c2.r2y, n_274.rt2b = n_274.c2.r2x * n_274.nx + n_274.c2.r2y * n_274.ny, n_274.k2x = n_274.b2.kinvelx - n_274.c2.r2y * n_274.b2.kinangvel - (n_274.b1.kinvelx - n_274.c2.r1y * n_274.b1.kinangvel), n_274.k2y = n_274.b2.kinvely + n_274.c2.r2x * n_274.b2.kinangvel - (n_274.b1.kinvely + n_274.c2.r1x * n_274.b1.kinangvel), n_274.kMassa = i_165 + n_274.b1.sinertia * n_274.rn1a * n_274.rn1a + n_274.b2.sinertia * n_274.rn1b * n_274.rn1b, n_274.kMassb = i_165 + n_274.b1.sinertia * n_274.rn1a * n_274.rn2a + n_274.b2.sinertia * n_274.rn1b * n_274.rn2b, n_274.kMassc = i_165 + n_274.b1.sinertia * n_274.rn2a * n_274.rn2a + n_274.b2.sinertia * n_274.rn2b * n_274.rn2b, n_274.kMassa * n_274.kMassa + 2 * n_274.kMassb * n_274.kMassb + n_274.kMassc * n_274.kMassc < R.illConditionedThreshold * (n_274.kMassa * n_274.kMassc - n_274.kMassb * n_274.kMassb)) {
                            n_274.Ka = n_274.kMassa, n_274.Kb = n_274.kMassb, n_274.Kc = n_274.kMassc;
                            var e_377 = 1 / (n_274.kMassa * n_274.kMassc - n_274.kMassb * n_274.kMassb), t_326 = n_274.kMassc * e_377;
                            n_274.kMassc = n_274.kMassa * e_377, n_274.kMassa = t_326, n_274.kMassb *= -e_377;
                        }
                        else {
                            if (n_274.hc2 = !1, n_274.oc2.dist < n_274.oc1.dist) {
                                var e_378 = n_274.c1;
                                n_274.c1 = n_274.c2, n_274.c2 = e_378;
                            }
                            n_274.oc2.active = !1, n_274.contacts.modified = !0;
                        }
                    }
                    n_274.surfacex = n_274.b2.svelx, n_274.surfacey = n_274.b2.svely, n_274.surfacex += n_274.b1.svelx * 1, n_274.surfacey += n_274.b1.svely * 1, n_274.surfacex = -n_274.surfacex, n_274.surfacey = -n_274.surfacey, n_274.rMass = n_274.b1.sinertia + n_274.b2.sinertia, n_274.rMass != 0 && (n_274.rMass = 1 / n_274.rMass), a_126 && (e.active = !1);
                }
                else {
                    var n_275 = e.fluidarb;
                    n_275.pre_dt == -1 && (n_275.pre_dt = t);
                    var r_228 = t / n_275.pre_dt;
                    n_275.pre_dt = t, n_275.r1x = n_275.centroidx - n_275.b1.posx, n_275.r1y = n_275.centroidy - n_275.b1.posy, n_275.r2x = n_275.centroidx - n_275.b2.posx, n_275.r2y = n_275.centroidy - n_275.b2.posy;
                    var i_166 = 0, a_127 = 0;
                    n_275.ws1.fluidEnabled && n_275.ws1.fluidProperties.wrap_gravity != null ? (i_166 = n_275.ws1.fluidProperties.gravityx, a_127 = n_275.ws1.fluidProperties.gravityy) : (i_166 = this.gravityx, a_127 = this.gravityy);
                    var o_98 = 0, s_85 = 0;
                    n_275.ws2.fluidEnabled && n_275.ws2.fluidProperties.wrap_gravity != null ? (o_98 = n_275.ws2.fluidProperties.gravityx, s_85 = n_275.ws2.fluidProperties.gravityy) : (o_98 = this.gravityx, s_85 = this.gravityy);
                    var c_67 = 0, l_58 = 0;
                    if (n_275.ws1.fluidEnabled && n_275.ws2.fluidEnabled) {
                        var e_379 = n_275.overlap * n_275.ws1.fluidProperties.density, t_327 = n_275.overlap * n_275.ws2.fluidProperties.density;
                        if (e_379 > t_327) {
                            var n_276 = e_379 + t_327;
                            c_67 -= i_166 * n_276, l_58 -= a_127 * n_276;
                        }
                        else if (e_379 < t_327) {
                            var n_277 = e_379 + t_327;
                            c_67 += o_98 * n_277, l_58 += s_85 * n_277;
                        }
                        else {
                            var r_229 = 0, u_48 = 0;
                            r_229 = i_166 + o_98, u_48 = a_127 + s_85;
                            var d_33 = .5;
                            if (r_229 *= d_33, u_48 *= d_33, n_275.ws1.worldCOMx * r_229 + n_275.ws1.worldCOMy * u_48 > n_275.ws2.worldCOMx * r_229 + n_275.ws2.worldCOMy * u_48) {
                                var n_278 = e_379 + t_327;
                                c_67 -= r_229 * n_278, l_58 -= u_48 * n_278;
                            }
                            else {
                                var n_279 = e_379 + t_327;
                                c_67 += r_229 * n_279, l_58 += u_48 * n_279;
                            }
                        }
                    }
                    else if (n_275.ws1.fluidEnabled) {
                        var e_380 = n_275.overlap * n_275.ws1.fluidProperties.density;
                        c_67 -= i_166 * e_380, l_58 -= a_127 * e_380;
                    }
                    else if (n_275.ws2.fluidEnabled) {
                        var e_381 = n_275.overlap * n_275.ws2.fluidProperties.density;
                        c_67 += o_98 * e_381, l_58 += s_85 * e_381;
                    }
                    var u_49 = t;
                    if (c_67 *= u_49, l_58 *= u_49, n_275.buoyx = c_67, n_275.buoyy = l_58, n_275.b1.type == 2) {
                        var e_382 = n_275.b1.imass;
                        n_275.b1.velx -= c_67 * e_382, n_275.b1.vely -= l_58 * e_382, n_275.b1.angvel -= (l_58 * n_275.r1x - c_67 * n_275.r1y) * n_275.b1.iinertia;
                    }
                    if (n_275.b2.type == 2) {
                        var e_383 = n_275.b2.imass;
                        n_275.b2.velx += c_67 * e_383, n_275.b2.vely += l_58 * e_383, n_275.b2.angvel += (l_58 * n_275.r2x - c_67 * n_275.r2y) * n_275.b2.iinertia;
                    }
                    if ((!n_275.ws1.fluidEnabled || n_275.ws1.fluidProperties.viscosity == 0) && (!n_275.ws2.fluidEnabled || n_275.ws2.fluidProperties.viscosity == 0))
                        n_275.nodrag = !0, n_275.dampx = 0, n_275.dampy = 0, n_275.adamp = 0;
                    else {
                        n_275.nodrag = !1;
                        var e_384 = 0;
                        if (n_275.ws1.fluidEnabled && (n_275.ws2.validate_angDrag(), e_384 += n_275.ws1.fluidProperties.viscosity * n_275.ws2.angDrag * n_275.overlap / n_275.ws2.area), n_275.ws2.fluidEnabled && (n_275.ws1.validate_angDrag(), e_384 += n_275.ws2.fluidProperties.viscosity * n_275.ws1.angDrag * n_275.overlap / n_275.ws1.area), e_384 != 0) {
                            var r_230 = n_275.b1.sinertia + n_275.b2.sinertia;
                            n_275.wMass = r_230 == 0 ? 0 : 1 / r_230, e_384 *= 4e-4;
                            var i_167 = 2 * Math.PI * e_384;
                            n_275.agamma = 1 / (t * i_167 * (2 + i_167 * t));
                            var a_128 = 1 / (1 + n_275.agamma);
                            n_275.agamma *= a_128, n_275.wMass *= a_128;
                        }
                        else
                            n_275.wMass = 0, n_275.agamma = 0;
                        var r_231 = n_275.b2.velx + n_275.b2.kinvelx - n_275.r2y * (n_275.b2.angvel + n_275.b2.kinangvel) - (n_275.b1.velx + n_275.b1.kinvelx - n_275.r1y * (n_275.b2.angvel + n_275.b2.kinangvel)), i_168 = n_275.b2.vely + n_275.b2.kinvely + n_275.r2x * (n_275.b2.angvel + n_275.b2.kinangvel) - (n_275.b1.vely + n_275.b1.kinvely + n_275.r1x * (n_275.b1.angvel + n_275.b1.kinangvel));
                        if (!(r_231 * r_231 + i_168 * i_168 < R.epsilon * R.epsilon)) {
                            var e_385 = r_231 * r_231 + i_168 * i_168, t_328 = 1 / Math.sqrt(e_385);
                            r_231 *= t_328, i_168 *= t_328, n_275.nx = r_231, n_275.ny = i_168;
                        }
                        var a_129 = 0;
                        if (n_275.ws1.fluidEnabled) {
                            var e_386 = -n_275.ws1.fluidProperties.viscosity * n_275.overlap / n_275.ws2.area;
                            if (n_275.ws2.type == 0)
                                a_129 -= e_386 * n_275.ws2.circle.radius * R.fluidLinearDrag / (2 * n_275.ws2.circle.radius * Math.PI);
                            else {
                                var t_329 = n_275.ws2.polygon, r_232 = 0, i_169 = 0, o_99 = t_329.edges.head;
                                for (; o_99 != null;) {
                                    var t_330 = o_99.elt;
                                    r_232 += t_330.length;
                                    var a_130 = e_386 * t_330.length * (t_330.gnormx * n_275.nx + t_330.gnormy * n_275.ny);
                                    a_130 > 0 && (a_130 *= -R.fluidVacuumDrag, a_130 = a_130), i_169 -= a_130 * .5 * R.fluidLinearDrag, o_99 = o_99.next;
                                }
                                a_129 += i_169 / r_232;
                            }
                        }
                        if (n_275.ws2.fluidEnabled) {
                            var e_387 = -n_275.ws2.fluidProperties.viscosity * n_275.overlap / n_275.ws1.area;
                            if (n_275.ws1.type == 0)
                                a_129 -= e_387 * n_275.ws1.circle.radius * R.fluidLinearDrag / (2 * n_275.ws1.circle.radius * Math.PI);
                            else {
                                var t_331 = n_275.ws1.polygon, r_233 = 0, i_170 = 0, o_100 = t_331.edges.head;
                                for (; o_100 != null;) {
                                    var t_332 = o_100.elt;
                                    r_233 += t_332.length;
                                    var a_131 = e_387 * t_332.length * (t_332.gnormx * n_275.nx + t_332.gnormy * n_275.ny);
                                    a_131 > 0 && (a_131 *= -R.fluidVacuumDrag, a_131 = a_131), i_170 -= a_131 * .5 * R.fluidLinearDrag, o_100 = o_100.next;
                                }
                                a_129 += i_170 / r_233;
                            }
                        }
                        if (a_129 != 0) {
                            var e_388 = n_275.b1.smass + n_275.b2.smass, r_234 = 0, i_171 = 0, o_101 = 0;
                            if (r_234 = e_388, i_171 = 0, o_101 = e_388, n_275.b1.sinertia != 0) {
                                var e_389 = n_275.r1x * n_275.b1.sinertia, t_333 = n_275.r1y * n_275.b1.sinertia;
                                r_234 += t_333 * n_275.r1y, i_171 += -t_333 * n_275.r1x, o_101 += e_389 * n_275.r1x;
                            }
                            if (n_275.b2.sinertia != 0) {
                                var e_390 = n_275.r2x * n_275.b2.sinertia, t_334 = n_275.r2y * n_275.b2.sinertia;
                                r_234 += t_334 * n_275.r2y, i_171 += -t_334 * n_275.r2x, o_101 += e_390 * n_275.r2x;
                            }
                            var s_86 = r_234 * o_101 - i_171 * i_171;
                            if (s_86 != s_86)
                                o_101 = 0, i_171 = o_101, r_234 = i_171;
                            else if (s_86 == 0) {
                                var e_391 = 0;
                                r_234 == 0 ? (r_234 = 0, e_391 |= 1) : r_234 = 1 / r_234, o_101 == 0 ? (o_101 = 0, e_391 |= 2) : o_101 = 1 / o_101, i_171 = 0;
                            }
                            else {
                                s_86 = 1 / s_86;
                                var e_392 = o_101 * s_86;
                                o_101 = r_234 * s_86, r_234 = e_392, i_171 *= -s_86;
                            }
                            n_275.vMassa = r_234, n_275.vMassb = i_171, n_275.vMassc = o_101;
                            var c_68 = 2 * Math.PI * a_129;
                            n_275.lgamma = 1 / (t * c_68 * (2 + c_68 * t));
                            var l_59 = 1 / (1 + n_275.lgamma);
                            n_275.lgamma *= l_59;
                            var u_50 = l_59;
                            n_275.vMassa *= u_50, n_275.vMassb *= u_50, n_275.vMassc *= u_50;
                        }
                        else
                            n_275.vMassa = 0, n_275.vMassb = 0, n_275.vMassc = 0, n_275.lgamma = 0;
                    }
                    var d_34 = r_228;
                    n_275.dampx *= d_34, n_275.dampy *= d_34, n_275.adamp *= r_228;
                }
            }
        }
        else if (e.colarb != null) {
            var t_335 = e.colarb;
            t_335.cleanupContacts();
            var n_280 = !0, r_235 = t_335.contacts.next;
            for (; r_235 != null;) {
                if (r_235.active) {
                    n_280 = !1;
                    break;
                }
                r_235 = r_235.next;
            }
            t_335.hpc2 && t_335.oc1.posOnly && (n_280 = !0), n_280 && (e.active = !1);
        } return r != e.active && (e.b1.arbiters.modified = !0, e.b2.arbiters.modified = !0, this.c_arbiters_true.modified = this.c_arbiters_false.modified = !0, this.s_arbiters.modified = this.f_arbiters.modified = !0), !1; };
        e.prototype._prestepArbiterList = function (e, t, n) { var r = null, i = e.head; for (; i != null;) {
            var a_132 = i.elt;
            if (this.presteparb(a_132, n)) {
                var n_281 = void 0, a_133 = void 0;
                r == null ? (n_281 = e.head, a_133 = n_281.next, e.head = a_133, e.head == null && (e.pushmod = !0)) : (n_281 = r.next, a_133 = n_281.next, r.next = a_133, a_133 == null && (e.pushmod = !0)), n_281.elt = null, n_281.next = t.zpp_pool, t.zpp_pool = n_281, e.modified = !0, e.length--, e.pushmod = !0, i = a_133;
            }
            else
                r = i, i = i.next;
        } };
        e.prototype.prestep = function (e) { var t = null, n = this.live_constraints.head; for (; n != null;) {
            var r_236 = n.elt;
            r_236.preStep(e) ? (n = this.live_constraints.erase(t), r_236.broken(), this.constraintCbBreak(r_236), r_236.removeOnBreak ? (r_236.component.sleeping = !0, this.midstep = !1, r_236.compound == null ? this.wrap_constraints.remove(r_236.outer) : r_236.compound.wrap_constraints.remove(r_236.outer), this.midstep = !0) : r_236.active = !1, r_236.clearcache()) : (t = n, n = n.next);
        } var r = null, i = this.c_arbiters_true, a = i.head, o = this.c_arbiters_false != null; for (o && a == null && (o = !1, a = this.c_arbiters_false.head, i = this.c_arbiters_false, r = null); a != null;) {
            var t_336 = a.elt;
            this.presteparb(t_336, e) ? (a = i.erase(r), o && a == null && (o = !1, a = this.c_arbiters_false.head, i = this.c_arbiters_false, r = null)) : (r = a, a = a.next, o && a == null && (o = !1, a = this.c_arbiters_false.head, i = this.c_arbiters_false, r = null));
        } this._prestepArbiterList(this.f_arbiters, tt, e), this._prestepArbiterList(this.s_arbiters, nt, e); };
        e.prototype.warmStart = function () { var e = this.f_arbiters.head; for (; e != null;) {
            var t_337 = e.elt;
            if (t_337.active && t_337.immState & 1) {
                var e_393 = t_337.b1.imass;
                t_337.b1.velx -= t_337.dampx * e_393, t_337.b1.vely -= t_337.dampy * e_393;
                var n_282 = t_337.b2.imass;
                t_337.b2.velx += t_337.dampx * n_282, t_337.b2.vely += t_337.dampy * n_282, t_337.b1.angvel -= t_337.b1.iinertia * (t_337.dampy * t_337.r1x - t_337.dampx * t_337.r1y), t_337.b2.angvel += t_337.b2.iinertia * (t_337.dampy * t_337.r2x - t_337.dampx * t_337.r2y), t_337.b1.angvel -= t_337.adamp * t_337.b1.iinertia, t_337.b2.angvel += t_337.adamp * t_337.b2.iinertia;
            }
            e = e.next;
        } var t = this.c_arbiters_false.head, n = !0; for (t == null && (t = this.c_arbiters_true.head, n = !1); t != null;) {
            var e_394 = t.elt;
            if (e_394.active && e_394.immState & 1) {
                var t_338 = e_394.nx * e_394.c1.jnAcc - e_394.ny * e_394.c1.jtAcc, n_283 = e_394.ny * e_394.c1.jnAcc + e_394.nx * e_394.c1.jtAcc, r_237 = e_394.b1.imass;
                e_394.b1.velx -= t_338 * r_237, e_394.b1.vely -= n_283 * r_237, e_394.b1.angvel -= e_394.b1.iinertia * (n_283 * e_394.c1.r1x - t_338 * e_394.c1.r1y);
                var i_172 = e_394.b2.imass;
                if (e_394.b2.velx += t_338 * i_172, e_394.b2.vely += n_283 * i_172, e_394.b2.angvel += e_394.b2.iinertia * (n_283 * e_394.c1.r2x - t_338 * e_394.c1.r2y), e_394.hc2) {
                    var t_339 = e_394.nx * e_394.c2.jnAcc - e_394.ny * e_394.c2.jtAcc, n_284 = e_394.ny * e_394.c2.jnAcc + e_394.nx * e_394.c2.jtAcc, r_238 = e_394.b1.imass;
                    e_394.b1.velx -= t_339 * r_238, e_394.b1.vely -= n_284 * r_238, e_394.b1.angvel -= e_394.b1.iinertia * (n_284 * e_394.c2.r1x - t_339 * e_394.c2.r1y);
                    var i_173 = e_394.b2.imass;
                    e_394.b2.velx += t_339 * i_173, e_394.b2.vely += n_284 * i_173, e_394.b2.angvel += e_394.b2.iinertia * (n_284 * e_394.c2.r2x - t_339 * e_394.c2.r2y);
                }
                e_394.b2.angvel += e_394.jrAcc * e_394.b2.iinertia, e_394.b1.angvel -= e_394.jrAcc * e_394.b1.iinertia;
            }
            t = t.next, n && t == null && (t = this.c_arbiters_true.head, n = !1);
        } var r = this.live_constraints.head; for (; r != null;)
            r.elt.warmStart(), r = r.next; };
        e.prototype.buildSolveArbs = function () { this.solveDirty = !1; var e = this.solveArbs, t = 0, n = this.c_arbiters_false.head, r = !1; for (; n != null || !r;) {
            if (n == null) {
                n = this.c_arbiters_true.head, r = !0;
                continue;
            }
            var i_174 = n.elt;
            i_174.active && i_174.immState & 1 && (e[t++] = i_174), n = n.next;
        } for (var n_285 = t; n_285 < this.solveCount; n_285++)
            e[n_285] = null; this.solveCount = t; };
        e.prototype.iterateVel = function (e) { this.solveDirty = !0; var t = 0, n = e; for (; t < n;) {
            t++;
            var e_395 = this.f_arbiters.head;
            for (; e_395 != null;) {
                var t_340 = e_395.elt;
                if (t_340.active && t_340.immState & 1 && !t_340.nodrag) {
                    var e_396 = t_340.b1.angvel + t_340.b1.kinangvel, n_286 = t_340.b2.angvel + t_340.b2.kinangvel, r_239 = t_340.b1.velx + t_340.b1.kinvelx - t_340.r1y * e_396 - (t_340.b2.velx + t_340.b2.kinvelx - t_340.r2y * n_286), i_175 = t_340.b1.vely + t_340.b1.kinvely + t_340.r1x * e_396 - (t_340.b2.vely + t_340.b2.kinvely + t_340.r2x * n_286), a_134 = t_340.vMassa * r_239 + t_340.vMassb * i_175;
                    i_175 = t_340.vMassb * r_239 + t_340.vMassc * i_175, r_239 = a_134;
                    var o_102 = t_340.lgamma;
                    r_239 -= t_340.dampx * o_102, i_175 -= t_340.dampy * o_102, t_340.dampx += r_239 * 1, t_340.dampy += i_175 * 1;
                    var s_87 = t_340.b1.imass;
                    t_340.b1.velx -= r_239 * s_87, t_340.b1.vely -= i_175 * s_87;
                    var c_69 = t_340.b2.imass;
                    t_340.b2.velx += r_239 * c_69, t_340.b2.vely += i_175 * c_69, t_340.b1.angvel -= t_340.b1.iinertia * (i_175 * t_340.r1x - r_239 * t_340.r1y), t_340.b2.angvel += t_340.b2.iinertia * (i_175 * t_340.r2x - r_239 * t_340.r2y);
                    var l_60 = (e_396 - n_286) * t_340.wMass - t_340.adamp * t_340.agamma;
                    t_340.adamp += l_60, t_340.b1.angvel -= l_60 * t_340.b1.iinertia, t_340.b2.angvel += l_60 * t_340.b2.iinertia;
                }
                e_395 = e_395.next;
            }
            var n_287 = null, r_240 = this.live_constraints.head;
            for (; r_240 != null;) {
                var e_397 = r_240.elt;
                e_397.applyImpulseVel() ? (r_240 = this.live_constraints.erase(n_287), this.solveDirty = !0, e_397.broken(), this.constraintCbBreak(e_397), e_397.removeOnBreak ? (e_397.component.sleeping = !0, this.midstep = !1, e_397.compound == null ? this.wrap_constraints.remove(e_397.outer) : e_397.compound.wrap_constraints.remove(e_397.outer), this.midstep = !0) : e_397.active = !1, e_397.clearcache()) : (n_287 = r_240, r_240 = r_240.next);
            }
            this.solveDirty && this.buildSolveArbs();
            var i_176 = this.solveArbs, a_135 = this.solveCount;
            for (var e_398 = 0; e_398 < a_135; e_398++) {
                var t_341 = i_176[e_398];
                {
                    var e_399 = t_341.k1x + t_341.b2.velx - t_341.c1.r2y * t_341.b2.angvel - (t_341.b1.velx - t_341.c1.r1y * t_341.b1.angvel), n_288 = t_341.k1y + t_341.b2.vely + t_341.c1.r2x * t_341.b2.angvel - (t_341.b1.vely + t_341.c1.r1x * t_341.b1.angvel), r_241 = (n_288 * t_341.nx - e_399 * t_341.ny + t_341.surfacex) * t_341.c1.tMass, i_177 = t_341.c1.friction * t_341.c1.jnAcc, a_136 = t_341.c1.jtAcc, o_103 = a_136 - r_241;
                    o_103 > i_177 ? o_103 = i_177 : o_103 < -i_177 && (o_103 = -i_177), r_241 = o_103 - a_136, t_341.c1.jtAcc = o_103;
                    var s_88 = -t_341.ny * r_241, c_70 = t_341.nx * r_241;
                    if (t_341.b2.velx += s_88 * t_341.b2.imass, t_341.b2.vely += c_70 * t_341.b2.imass, t_341.b1.velx -= s_88 * t_341.b1.imass, t_341.b1.vely -= c_70 * t_341.b1.imass, t_341.b2.angvel += t_341.rt1b * r_241 * t_341.b2.iinertia, t_341.b1.angvel -= t_341.rt1a * r_241 * t_341.b1.iinertia, t_341.hc2) {
                        var l_61 = t_341.k2x + t_341.b2.velx - t_341.c2.r2y * t_341.b2.angvel - (t_341.b1.velx - t_341.c2.r1y * t_341.b1.angvel), u_51 = t_341.k2y + t_341.b2.vely + t_341.c2.r2x * t_341.b2.angvel - (t_341.b1.vely + t_341.c2.r1x * t_341.b1.angvel);
                        r_241 = (u_51 * t_341.nx - l_61 * t_341.ny + t_341.surfacex) * t_341.c2.tMass, i_177 = t_341.c2.friction * t_341.c2.jnAcc, a_136 = t_341.c2.jtAcc, o_103 = a_136 - r_241, o_103 > i_177 ? o_103 = i_177 : o_103 < -i_177 && (o_103 = -i_177), r_241 = o_103 - a_136, t_341.c2.jtAcc = o_103, s_88 = -t_341.ny * r_241, c_70 = t_341.nx * r_241, t_341.b2.velx += s_88 * t_341.b2.imass, t_341.b2.vely += c_70 * t_341.b2.imass, t_341.b1.velx -= s_88 * t_341.b1.imass, t_341.b1.vely -= c_70 * t_341.b1.imass, t_341.b2.angvel += t_341.rt2b * r_241 * t_341.b2.iinertia, t_341.b1.angvel -= t_341.rt2a * r_241 * t_341.b1.iinertia, e_399 = t_341.k1x + t_341.b2.velx - t_341.c1.r2y * t_341.b2.angvel - (t_341.b1.velx - t_341.c1.r1y * t_341.b1.angvel), n_288 = t_341.k1y + t_341.b2.vely + t_341.c1.r2x * t_341.b2.angvel - (t_341.b1.vely + t_341.c1.r1x * t_341.b1.angvel), l_61 = t_341.k2x + t_341.b2.velx - t_341.c2.r2y * t_341.b2.angvel - (t_341.b1.velx - t_341.c2.r1y * t_341.b1.angvel), u_51 = t_341.k2y + t_341.b2.vely + t_341.c2.r2x * t_341.b2.angvel - (t_341.b1.vely + t_341.c2.r1x * t_341.b1.angvel);
                        var d_35 = t_341.c1.jnAcc, f_33 = t_341.c2.jnAcc, p_23 = e_399 * t_341.nx + n_288 * t_341.ny + t_341.surfacey + t_341.c1.bounce - (t_341.Ka * d_35 + t_341.Kb * f_33), m_15 = l_61 * t_341.nx + u_51 * t_341.ny + t_341.surfacey + t_341.c2.bounce - (t_341.Kb * d_35 + t_341.Kc * f_33), h_9 = -(t_341.kMassa * p_23 + t_341.kMassb * m_15), g_11 = -(t_341.kMassb * p_23 + t_341.kMassc * m_15);
                        h_9 >= 0 && g_11 >= 0 ? (p_23 = h_9 - d_35, m_15 = g_11 - f_33, t_341.c1.jnAcc = h_9, t_341.c2.jnAcc = g_11) : (h_9 = -t_341.c1.nMass * p_23, h_9 >= 0 && t_341.Kb * h_9 + m_15 >= 0 ? (p_23 = h_9 - d_35, m_15 = -f_33, t_341.c1.jnAcc = h_9, t_341.c2.jnAcc = 0) : (g_11 = -t_341.c2.nMass * m_15, g_11 >= 0 && t_341.Kb * g_11 + p_23 >= 0 ? (p_23 = -d_35, m_15 = g_11 - f_33, t_341.c1.jnAcc = 0, t_341.c2.jnAcc = g_11) : p_23 >= 0 && m_15 >= 0 ? (p_23 = -d_35, m_15 = -f_33, t_341.c1.jnAcc = t_341.c2.jnAcc = 0) : (p_23 = 0, m_15 = 0))), r_241 = p_23 + m_15, s_88 = t_341.nx * r_241, c_70 = t_341.ny * r_241, t_341.b2.velx += s_88 * t_341.b2.imass, t_341.b2.vely += c_70 * t_341.b2.imass, t_341.b1.velx -= s_88 * t_341.b1.imass, t_341.b1.vely -= c_70 * t_341.b1.imass, t_341.b2.angvel += (t_341.rn1b * p_23 + t_341.rn2b * m_15) * t_341.b2.iinertia, t_341.b1.angvel -= (t_341.rn1a * p_23 + t_341.rn2a * m_15) * t_341.b1.iinertia;
                    }
                    else
                        t_341.radius != 0 && (r_241 = (t_341.b2.angvel - t_341.b1.angvel) * t_341.rMass, i_177 = t_341.rfric * t_341.c1.jnAcc, a_136 = t_341.jrAcc, t_341.jrAcc -= r_241, t_341.jrAcc > i_177 ? t_341.jrAcc = i_177 : t_341.jrAcc < -i_177 && (t_341.jrAcc = -i_177), r_241 = t_341.jrAcc - a_136, t_341.b2.angvel += r_241 * t_341.b2.iinertia, t_341.b1.angvel -= r_241 * t_341.b1.iinertia), e_399 = t_341.k1x + t_341.b2.velx - t_341.c1.r2y * t_341.b2.angvel - (t_341.b1.velx - t_341.c1.r1y * t_341.b1.angvel), n_288 = t_341.k1y + t_341.b2.vely + t_341.c1.r2x * t_341.b2.angvel - (t_341.b1.vely + t_341.c1.r1x * t_341.b1.angvel), r_241 = (t_341.c1.bounce + (t_341.nx * e_399 + t_341.ny * n_288) + t_341.surfacey) * t_341.c1.nMass, a_136 = t_341.c1.jnAcc, o_103 = a_136 - r_241, o_103 < 0 && (o_103 = 0), r_241 = o_103 - a_136, t_341.c1.jnAcc = o_103, s_88 = t_341.nx * r_241, c_70 = t_341.ny * r_241, t_341.b2.velx += s_88 * t_341.b2.imass, t_341.b2.vely += c_70 * t_341.b2.imass, t_341.b1.velx -= s_88 * t_341.b1.imass, t_341.b1.vely -= c_70 * t_341.b1.imass, t_341.b2.angvel += t_341.rn1b * r_241 * t_341.b2.iinertia, t_341.b1.angvel -= t_341.rn1a * r_241 * t_341.b1.iinertia;
                }
            }
        } };
        e.prototype.iteratePos = function (e) { this.solveDirty = !0; var t = 0, n = e; for (; t < n;) {
            t++;
            var e_400 = null, n_289 = this.live_constraints.head;
            for (; n_289 != null;) {
                var t_342 = n_289.elt;
                !t_342.__velocity && t_342.stiff && t_342.applyImpulsePos() ? (n_289 = this.live_constraints.erase(e_400), this.solveDirty = !0, t_342.broken(), this.constraintCbBreak(t_342), t_342.removeOnBreak ? (t_342.component.sleeping = !0, this.midstep = !1, t_342.compound == null ? this.wrap_constraints.remove(t_342.outer) : t_342.compound.wrap_constraints.remove(t_342.outer), this.midstep = !0) : t_342.active = !1, t_342.clearcache()) : (e_400 = n_289, n_289 = n_289.next);
            }
            this.solveDirty && this.buildSolveArbs();
            var r_242 = this.solveArbs, i_178 = this.solveCount;
            for (var e_401 = 0; e_401 < i_178; e_401++) {
                var t_343 = r_242[e_401];
                if (t_343.ptype == 2) {
                    var e_402 = t_343.c1, n_290 = 0, r_243 = 0;
                    n_290 = t_343.b2.axisy * e_402.lr2x - t_343.b2.axisx * e_402.lr2y, r_243 = e_402.lr2x * t_343.b2.axisx + e_402.lr2y * t_343.b2.axisy, n_290 += t_343.b2.posx * 1, r_243 += t_343.b2.posy * 1;
                    var i_179 = 0, a_137 = 0;
                    i_179 = t_343.b1.axisy * e_402.lr1x - t_343.b1.axisx * e_402.lr1y, a_137 = e_402.lr1x * t_343.b1.axisx + e_402.lr1y * t_343.b1.axisy, i_179 += t_343.b1.posx * 1, a_137 += t_343.b1.posy * 1;
                    var o_104 = 0, s_89 = 0;
                    o_104 = n_290 - i_179, s_89 = r_243 - a_137;
                    var c_71 = Math.sqrt(o_104 * o_104 + s_89 * s_89), l_62 = t_343.radius - R.collisionSlop, u_52 = c_71 - l_62;
                    if (o_104 * t_343.nx + s_89 * t_343.ny < 0 && (o_104 = -o_104, s_89 = -s_89, u_52 -= t_343.radius), u_52 < 0) {
                        if (c_71 < R.epsilon)
                            t_343.b1.smass == 0 ? t_343.b2.posx += R.epsilon * 10 : t_343.b1.posx += R.epsilon * 10;
                        else {
                            var e_403 = 1 / c_71;
                            o_104 *= e_403, s_89 *= e_403;
                            var u_53 = .5 * (i_179 + n_290), d_36 = .5 * (a_137 + r_243), f_34 = c_71 - l_62;
                            i_179 = u_53 - t_343.b1.posx, a_137 = d_36 - t_343.b1.posy, n_290 = u_53 - t_343.b2.posx, r_243 = d_36 - t_343.b2.posy;
                            var p_24 = s_89 * i_179 - o_104 * a_137, m_16 = s_89 * n_290 - o_104 * r_243, h_10 = t_343.b2.smass + m_16 * m_16 * t_343.b2.sinertia + t_343.b1.smass + p_24 * p_24 * t_343.b1.sinertia;
                            if (h_10 != 0) {
                                var e_404 = -t_343.biasCoef * f_34 / h_10, n_291 = 0, r_244 = 0, i_180 = e_404;
                                n_291 = o_104 * i_180, r_244 = s_89 * i_180;
                                var a_138 = t_343.b1.imass;
                                t_343.b1.posx -= n_291 * a_138, t_343.b1.posy -= r_244 * a_138;
                                var c_72 = t_343.b1, l_63 = -p_24 * t_343.b1.iinertia * e_404;
                                if (c_72.rot += l_63, l_63 * l_63 > 1e-4)
                                    c_72.axisx = Math.sin(c_72.rot), c_72.axisy = Math.cos(c_72.rot);
                                else {
                                    var e_405 = l_63 * l_63, t_344 = 1 - .5 * e_405, n_292 = 1 - e_405 * e_405 / 8, r_245 = (t_344 * c_72.axisx + l_63 * c_72.axisy) * n_292;
                                    c_72.axisy = (t_344 * c_72.axisy - l_63 * c_72.axisx) * n_292, c_72.axisx = r_245;
                                }
                                var u_54 = t_343.b2.imass;
                                t_343.b2.posx += n_291 * u_54, t_343.b2.posy += r_244 * u_54;
                                var d_37 = t_343.b2, g_12 = m_16 * t_343.b2.iinertia * e_404;
                                if (d_37.rot += g_12, g_12 * g_12 > 1e-4)
                                    d_37.axisx = Math.sin(d_37.rot), d_37.axisy = Math.cos(d_37.rot);
                                else {
                                    var e_406 = g_12 * g_12, t_345 = 1 - .5 * e_406, n_293 = 1 - e_406 * e_406 / 8, r_246 = (t_345 * d_37.axisx + g_12 * d_37.axisy) * n_293;
                                    d_37.axisy = (t_345 * d_37.axisy - g_12 * d_37.axisx) * n_293, d_37.axisx = r_246;
                                }
                            }
                        }
                    }
                }
                else {
                    var e_407 = 0, n_294 = 0, r_247 = void 0, i_181 = 0, a_139 = 0, o_105 = 0, s_90 = 0;
                    t_343.ptype == 0 ? (e_407 = t_343.b1.axisy * t_343.lnormx - t_343.b1.axisx * t_343.lnormy, n_294 = t_343.lnormx * t_343.b1.axisx + t_343.lnormy * t_343.b1.axisy, r_247 = t_343.lproj + (e_407 * t_343.b1.posx + n_294 * t_343.b1.posy), i_181 = t_343.b2.axisy * t_343.c1.lr1x - t_343.b2.axisx * t_343.c1.lr1y, a_139 = t_343.c1.lr1x * t_343.b2.axisx + t_343.c1.lr1y * t_343.b2.axisy, i_181 += t_343.b2.posx * 1, a_139 += t_343.b2.posy * 1, t_343.hpc2 && (o_105 = t_343.b2.axisy * t_343.c2.lr1x - t_343.b2.axisx * t_343.c2.lr1y, s_90 = t_343.c2.lr1x * t_343.b2.axisx + t_343.c2.lr1y * t_343.b2.axisy, o_105 += t_343.b2.posx * 1, s_90 += t_343.b2.posy * 1)) : (e_407 = t_343.b2.axisy * t_343.lnormx - t_343.b2.axisx * t_343.lnormy, n_294 = t_343.lnormx * t_343.b2.axisx + t_343.lnormy * t_343.b2.axisy, r_247 = t_343.lproj + (e_407 * t_343.b2.posx + n_294 * t_343.b2.posy), i_181 = t_343.b1.axisy * t_343.c1.lr1x - t_343.b1.axisx * t_343.c1.lr1y, a_139 = t_343.c1.lr1x * t_343.b1.axisx + t_343.c1.lr1y * t_343.b1.axisy, i_181 += t_343.b1.posx * 1, a_139 += t_343.b1.posy * 1, t_343.hpc2 && (o_105 = t_343.b1.axisy * t_343.c2.lr1x - t_343.b1.axisx * t_343.c2.lr1y, s_90 = t_343.c2.lr1x * t_343.b1.axisx + t_343.c2.lr1y * t_343.b1.axisy, o_105 += t_343.b1.posx * 1, s_90 += t_343.b1.posy * 1));
                    var c_73 = i_181 * e_407 + a_139 * n_294 - r_247 - t_343.radius;
                    c_73 += R.collisionSlop;
                    var l_64 = 0;
                    if (t_343.hpc2 && (l_64 = o_105 * e_407 + s_90 * n_294 - r_247 - t_343.radius, l_64 += R.collisionSlop), c_73 < 0 || l_64 < 0) {
                        t_343.rev && (e_407 = -e_407, n_294 = -n_294);
                        var r_248 = 0, u_55 = 0;
                        r_248 = i_181 - t_343.b1.posx, u_55 = a_139 - t_343.b1.posy;
                        var d_38 = 0, f_35 = 0;
                        d_38 = i_181 - t_343.b2.posx, f_35 = a_139 - t_343.b2.posy;
                        var p_25 = 0, m_17 = 0, h_11 = 0, g_13 = 0;
                        if (t_343.hpc2) {
                            p_25 = o_105 - t_343.b1.posx, m_17 = s_90 - t_343.b1.posy, h_11 = o_105 - t_343.b2.posx, g_13 = s_90 - t_343.b2.posy;
                            var i_182 = n_294 * r_248 - e_407 * u_55, a_140 = n_294 * d_38 - e_407 * f_35, _7 = n_294 * p_25 - e_407 * m_17, v_9 = n_294 * h_11 - e_407 * g_13, y_10 = t_343.b1.smass + t_343.b2.smass;
                            t_343.kMassa = y_10 + t_343.b1.sinertia * i_182 * i_182 + t_343.b2.sinertia * a_140 * a_140, t_343.kMassb = y_10 + t_343.b1.sinertia * i_182 * _7 + t_343.b2.sinertia * a_140 * v_9, t_343.kMassc = y_10 + t_343.b1.sinertia * _7 * _7 + t_343.b2.sinertia * v_9 * v_9;
                            var b_11 = 0, x_9 = 0, S_8 = 0;
                            b_11 = t_343.kMassa, x_9 = t_343.kMassb, S_8 = t_343.kMassc;
                            var C_6 = c_73 * t_343.biasCoef, w_5 = l_64 * t_343.biasCoef;
                            for (;;) {
                                var r_249 = 0, o_106 = 0;
                                r_249 = C_6, o_106 = w_5, r_249 = -r_249, o_106 = -o_106;
                                var s_91 = t_343.kMassa * t_343.kMassc - t_343.kMassb * t_343.kMassb;
                                if (s_91 != s_91)
                                    o_106 = 0, r_249 = o_106;
                                else if (s_91 == 0)
                                    t_343.kMassa == 0 ? r_249 = 0 : r_249 /= t_343.kMassa, t_343.kMassc == 0 ? o_106 = 0 : o_106 /= t_343.kMassc;
                                else {
                                    s_91 = 1 / s_91;
                                    var e_408 = s_91 * (t_343.kMassc * r_249 - t_343.kMassb * o_106);
                                    o_106 = s_91 * (t_343.kMassa * o_106 - t_343.kMassb * r_249), r_249 = e_408;
                                }
                                if (r_249 >= 0 && o_106 >= 0) {
                                    var s_92 = (r_249 + o_106) * t_343.b1.imass;
                                    t_343.b1.posx -= e_407 * s_92, t_343.b1.posy -= n_294 * s_92;
                                    var c_74 = t_343.b1, l_65 = -t_343.b1.iinertia * (i_182 * r_249 + _7 * o_106);
                                    if (c_74.rot += l_65, l_65 * l_65 > 1e-4)
                                        c_74.axisx = Math.sin(c_74.rot), c_74.axisy = Math.cos(c_74.rot);
                                    else {
                                        var e_409 = l_65 * l_65, t_346 = 1 - .5 * e_409, n_295 = 1 - e_409 * e_409 / 8, r_250 = (t_346 * c_74.axisx + l_65 * c_74.axisy) * n_295;
                                        c_74.axisy = (t_346 * c_74.axisy - l_65 * c_74.axisx) * n_295, c_74.axisx = r_250;
                                    }
                                    var u_56 = (r_249 + o_106) * t_343.b2.imass;
                                    t_343.b2.posx += e_407 * u_56, t_343.b2.posy += n_294 * u_56;
                                    var d_39 = t_343.b2, f_36 = t_343.b2.iinertia * (a_140 * r_249 + v_9 * o_106);
                                    if (d_39.rot += f_36, f_36 * f_36 > 1e-4)
                                        d_39.axisx = Math.sin(d_39.rot), d_39.axisy = Math.cos(d_39.rot);
                                    else {
                                        var e_410 = f_36 * f_36, t_347 = 1 - .5 * e_410, n_296 = 1 - e_410 * e_410 / 8, r_251 = (t_347 * d_39.axisx + f_36 * d_39.axisy) * n_296;
                                        d_39.axisy = (t_347 * d_39.axisy - f_36 * d_39.axisx) * n_296, d_39.axisx = r_251;
                                    }
                                    break;
                                }
                                r_249 = -C_6 / b_11, o_106 = 0;
                                var c_75 = x_9 * r_249 + w_5;
                                if (r_249 >= 0 && c_75 >= 0) {
                                    var s_93 = (r_249 + o_106) * t_343.b1.imass;
                                    t_343.b1.posx -= e_407 * s_93, t_343.b1.posy -= n_294 * s_93;
                                    var c_76 = t_343.b1, l_66 = -t_343.b1.iinertia * (i_182 * r_249 + _7 * o_106);
                                    if (c_76.rot += l_66, l_66 * l_66 > 1e-4)
                                        c_76.axisx = Math.sin(c_76.rot), c_76.axisy = Math.cos(c_76.rot);
                                    else {
                                        var e_411 = l_66 * l_66, t_348 = 1 - .5 * e_411, n_297 = 1 - e_411 * e_411 / 8, r_252 = (t_348 * c_76.axisx + l_66 * c_76.axisy) * n_297;
                                        c_76.axisy = (t_348 * c_76.axisy - l_66 * c_76.axisx) * n_297, c_76.axisx = r_252;
                                    }
                                    var u_57 = (r_249 + o_106) * t_343.b2.imass;
                                    t_343.b2.posx += e_407 * u_57, t_343.b2.posy += n_294 * u_57;
                                    var d_40 = t_343.b2, f_37 = t_343.b2.iinertia * (a_140 * r_249 + v_9 * o_106);
                                    if (d_40.rot += f_37, f_37 * f_37 > 1e-4)
                                        d_40.axisx = Math.sin(d_40.rot), d_40.axisy = Math.cos(d_40.rot);
                                    else {
                                        var e_412 = f_37 * f_37, t_349 = 1 - .5 * e_412, n_298 = 1 - e_412 * e_412 / 8, r_253 = (t_349 * d_40.axisx + f_37 * d_40.axisy) * n_298;
                                        d_40.axisy = (t_349 * d_40.axisy - f_37 * d_40.axisx) * n_298, d_40.axisx = r_253;
                                    }
                                    break;
                                }
                                r_249 = 0, o_106 = -w_5 / S_8;
                                var l_67 = x_9 * o_106 + C_6;
                                if (o_106 >= 0 && l_67 >= 0) {
                                    var s_94 = (r_249 + o_106) * t_343.b1.imass;
                                    t_343.b1.posx -= e_407 * s_94, t_343.b1.posy -= n_294 * s_94;
                                    var c_77 = t_343.b1, l_68 = -t_343.b1.iinertia * (i_182 * r_249 + _7 * o_106);
                                    if (c_77.rot += l_68, l_68 * l_68 > 1e-4)
                                        c_77.axisx = Math.sin(c_77.rot), c_77.axisy = Math.cos(c_77.rot);
                                    else {
                                        var e_413 = l_68 * l_68, t_350 = 1 - .5 * e_413, n_299 = 1 - e_413 * e_413 / 8, r_254 = (t_350 * c_77.axisx + l_68 * c_77.axisy) * n_299;
                                        c_77.axisy = (t_350 * c_77.axisy - l_68 * c_77.axisx) * n_299, c_77.axisx = r_254;
                                    }
                                    var u_58 = (r_249 + o_106) * t_343.b2.imass;
                                    t_343.b2.posx += e_407 * u_58, t_343.b2.posy += n_294 * u_58;
                                    var d_41 = t_343.b2, f_38 = t_343.b2.iinertia * (a_140 * r_249 + v_9 * o_106);
                                    if (d_41.rot += f_38, f_38 * f_38 > 1e-4)
                                        d_41.axisx = Math.sin(d_41.rot), d_41.axisy = Math.cos(d_41.rot);
                                    else {
                                        var e_414 = f_38 * f_38, t_351 = 1 - .5 * e_414, n_300 = 1 - e_414 * e_414 / 8, r_255 = (t_351 * d_41.axisx + f_38 * d_41.axisy) * n_300;
                                        d_41.axisy = (t_351 * d_41.axisy - f_38 * d_41.axisx) * n_300, d_41.axisx = r_255;
                                    }
                                    break;
                                }
                                break;
                            }
                        }
                        else {
                            var i_183 = n_294 * r_248 - e_407 * u_55, a_141 = n_294 * d_38 - e_407 * f_35, o_107 = t_343.b2.smass + a_141 * a_141 * t_343.b2.sinertia + t_343.b1.smass + i_183 * i_183 * t_343.b1.sinertia;
                            if (o_107 != 0) {
                                var r_256 = -t_343.biasCoef * c_73 / o_107, s_95 = 0, l_69 = 0, u_59 = r_256;
                                s_95 = e_407 * u_59, l_69 = n_294 * u_59;
                                var d_42 = t_343.b1.imass;
                                t_343.b1.posx -= s_95 * d_42, t_343.b1.posy -= l_69 * d_42;
                                var f_39 = t_343.b1, p_26 = -i_183 * t_343.b1.iinertia * r_256;
                                if (f_39.rot += p_26, p_26 * p_26 > 1e-4)
                                    f_39.axisx = Math.sin(f_39.rot), f_39.axisy = Math.cos(f_39.rot);
                                else {
                                    var e_415 = p_26 * p_26, t_352 = 1 - .5 * e_415, n_301 = 1 - e_415 * e_415 / 8, r_257 = (t_352 * f_39.axisx + p_26 * f_39.axisy) * n_301;
                                    f_39.axisy = (t_352 * f_39.axisy - p_26 * f_39.axisx) * n_301, f_39.axisx = r_257;
                                }
                                var m_18 = t_343.b2.imass;
                                t_343.b2.posx += s_95 * m_18, t_343.b2.posy += l_69 * m_18;
                                var h_12 = t_343.b2, g_14 = a_141 * t_343.b2.iinertia * r_256;
                                if (h_12.rot += g_14, g_14 * g_14 > 1e-4)
                                    h_12.axisx = Math.sin(h_12.rot), h_12.axisy = Math.cos(h_12.rot);
                                else {
                                    var e_416 = g_14 * g_14, t_353 = 1 - .5 * e_416, n_302 = 1 - e_416 * e_416 / 8, r_258 = (t_353 * h_12.axisx + g_14 * h_12.axisy) * n_302;
                                    h_12.axisy = (t_353 * h_12.axisy - g_14 * h_12.axisx) * n_302, h_12.axisx = r_258;
                                }
                            }
                        }
                    }
                }
            }
        } };
        e.prototype.interactionType = function (e, t, n, r) { var i = !1, a = n.constraints.head; for (; a != null;) {
            var e_417 = a.elt;
            if (e_417.ignore && e_417.pair_exists(n.id, r.id)) {
                i = !0;
                break;
            }
            a = a.next;
        } var o; if (i)
            o = !1;
        else {
            var n_303 = e;
            for (; n_303 != null && n_303.group == null;)
                n_303 = n_303.ishape == null ? n_303.icompound == null ? n_303.ibody.compound : n_303.icompound.compound : n_303.ishape.body;
            var r_259 = n_303 == null ? null : n_303.group, i_184;
            if (r_259 == null)
                i_184 = !1;
            else {
                var e_418 = t;
                for (; e_418 != null && e_418.group == null;)
                    e_418 = e_418.ishape == null ? e_418.icompound == null ? e_418.ibody.compound : e_418.icompound.compound : e_418.ishape.body;
                var n_304 = e_418 == null ? null : e_418.group;
                if (n_304 == null)
                    i_184 = !1;
                else {
                    var e_419 = !1;
                    for (; r_259 != null && n_304 != null;) {
                        if (r_259 == n_304) {
                            e_419 = r_259.ignore;
                            break;
                        }
                        r_259.depth < n_304.depth ? n_304 = n_304.group : r_259 = r_259.group;
                    }
                    i_184 = e_419;
                }
            }
            o = !i_184;
        } if (o) {
            var i_185;
            if (e.sensorEnabled || t.sensorEnabled) {
                var n_305 = e.filter, r_260 = t.filter;
                i_185 = (n_305.sensorMask & r_260.sensorGroup) != 0 && (r_260.sensorMask & n_305.sensorGroup) != 0;
            }
            else
                i_185 = !1;
            if (i_185)
                return 2;
            {
                var i_186;
                if (e.fluidEnabled || t.fluidEnabled) {
                    var n_306 = e.filter, r_261 = t.filter;
                    i_186 = (n_306.fluidMask & r_261.fluidGroup) != 0 && (r_261.fluidMask & n_306.fluidGroup) != 0;
                }
                else
                    i_186 = !1;
                if (i_186 && (n.imass != 0 || r.imass != 0 || n.iinertia != 0 || r.iinertia != 0))
                    return 0;
                {
                    var i_187 = e.filter, a_142 = t.filter;
                    return (i_187.collisionMask & a_142.collisionGroup) != 0 && (a_142.collisionMask & i_187.collisionGroup) != 0 && (n.imass != 0 || r.imass != 0 || n.iinertia != 0 || r.iinertia != 0) ? 1 : -1;
                }
            }
        } return -1; };
        e.findArbiter = function (e, t, n, r) { var i = (e.arbiters.length < t.arbiters.length ? e : t).arbiters.head; for (; i != null;) {
            var e_420 = i.elt;
            if (e_420.id == n.id && e_420.di == r.id)
                return e_420;
            i = i.next;
        } return null; };
        e.prototype.narrowPhase = function (t, n, r, i, a) { var o = null, s = t.body, c = n.body, l = this.interactionType(t, n, s, c); if (l != -1) {
            var u_60, d_43;
            t.type > n.type ? (u_60 = n, d_43 = t) : t.type == n.type ? t.id < n.id ? (u_60 = t, d_43 = n) : (d_43 = t, u_60 = n) : (u_60 = t, d_43 = n);
            var f_40 = u_60 == n;
            if (l == 0) {
                var r_262 = i == null ? e.findArbiter(s, c, u_60, d_43) : i, l_70 = r_262 == null, f_41, p_27 = !1;
                if (l_70 ? Zr.zpp_pool == null ? f_41 = new Zr : (f_41 = Zr.zpp_pool, Zr.zpp_pool = f_41.next, f_41.next = null) : r_262.fluidarb == null ? (this.retireArbiter(r_262, null), Zr.zpp_pool == null ? f_41 = new Zr : (f_41 = Zr.zpp_pool, Zr.zpp_pool = f_41.next, f_41.next = null), f_41.intchange = !0, l_70 = !0, p_27 = !0) : f_41 = r_262.fluidarb, l_70 || f_41.stamp != this.stamp || a) {
                    if (f_41.stamp = this.stamp, Jr.flowCollide(u_60, d_43, f_41)) {
                        if (l_70) {
                            var e_421 = d_43.id;
                            f_41.b1 = t.body, f_41.ws1 = t, f_41.b2 = n.body, f_41.ws2 = n, f_41.id = u_60.id, f_41.di = e_421, f_41.b1.arbiters.add(f_41), f_41.b2.arbiters.add(f_41), f_41.active = !0, f_41.present = 0, f_41.endGenerated = 0, f_41.cleared = !1, f_41.sleeping = !1, f_41.fresh = !1, f_41.presentable = !1, f_41.nx = 0, f_41.ny = 1, f_41.dampx = 0, f_41.dampy = 0, f_41.adamp = 0, this.f_arbiters.add(f_41), f_41.fresh = !p_27;
                        }
                        else
                            f_41.fresh = f_41.up_stamp < this.stamp - 1 || f_41.endGenerated == this.stamp && a;
                        f_41.up_stamp = f_41.stamp, (f_41.fresh || !(f_41.immState & 4)) && (f_41.immState = 1, this.runPreListeners(f_41, 4, a) && !(f_41.immState & 4) && (f_41.b1.type == 2 && this.non_inlined_wake(f_41.b1), f_41.b2.type == 2 && this.non_inlined_wake(f_41.b2))), f_41.immState & 1 && (f_41.b1.type == 2 && f_41.b1.component.sleeping && this.non_inlined_wake(f_41.b1), f_41.b2.type == 2 && f_41.b2.component.sleeping && this.non_inlined_wake(f_41.b2)), f_41.sleeping && (f_41.sleeping = !1, this.f_arbiters.add(f_41)), o = f_41;
                    }
                    else if (l_70) {
                        var e_422 = f_41;
                        e_422.next = Zr.zpp_pool, Zr.zpp_pool = e_422, o = null;
                    }
                    else
                        o = f_41;
                }
                else
                    o = f_41;
            }
            else if (l == 1) {
                var l_71 = r ? this.c_arbiters_true : this.c_arbiters_false, p_28 = i == null ? e.findArbiter(s, c, u_60, d_43) : i, m_19 = p_28 == null, h_13, g_15 = !1;
                if (m_19 ? (Xr.zpp_pool == null ? h_13 = new Xr : (h_13 = Xr.zpp_pool, Xr.zpp_pool = h_13.next, h_13.next = null), h_13.stat = r) : p_28.colarb == null ? (this.retireArbiter(p_28, null), Xr.zpp_pool == null ? h_13 = new Xr : (h_13 = Xr.zpp_pool, Xr.zpp_pool = h_13.next, h_13.next = null), h_13.intchange = !0, h_13.stat = r, m_19 = !0, g_15 = !0) : (h_13 = p_28.colarb, f_40 = u_60 != h_13.s1, h_13.stat != r && (h_13.stat = r, h_13.sleeping || ((r ? this.c_arbiters_false : this.c_arbiters_true).remove(h_13), l_71.add(h_13)))), m_19 || h_13.stamp != this.stamp || a) {
                    if (h_13.stamp = this.stamp, Jr.contactCollide(u_60, d_43, h_13, f_40)) {
                        if (m_19) {
                            var e_423 = d_43.id;
                            h_13.b1 = t.body, h_13.ws1 = t, h_13.b2 = n.body, h_13.ws2 = n, h_13.id = u_60.id, h_13.di = e_423, h_13.b1.arbiters.add(h_13), h_13.b2.arbiters.add(h_13), h_13.active = !0, h_13.present = 0, h_13.endGenerated = 0, h_13.cleared = !1, h_13.sleeping = !1, h_13.fresh = !1, h_13.presentable = !1, h_13.s1 = t, h_13.s2 = n, h_13._calcFrictionRestitution(), l_71.add(h_13), h_13.fresh = !g_15;
                        }
                        else
                            h_13.fresh = h_13.up_stamp < this.stamp - 1 || h_13.endGenerated == this.stamp && a;
                        h_13.up_stamp = h_13.stamp, (h_13.fresh || !(h_13.immState & 4)) && (h_13.immState = 1, this.runPreListeners(h_13, 1, a) && !(h_13.immState & 4) && (h_13.b1.type == 2 && this.non_inlined_wake(h_13.b1), h_13.b2.type == 2 && this.non_inlined_wake(h_13.b2))), h_13.immState & 1 && (h_13.b1.type == 2 && h_13.b1.component.sleeping && this.non_inlined_wake(h_13.b1), h_13.b2.type == 2 && h_13.b2.component.sleeping && this.non_inlined_wake(h_13.b2)), h_13.sleeping && (h_13.sleeping = !1, l_71.add(h_13)), o = h_13;
                    }
                    else if (m_19) {
                        var e_424 = h_13;
                        e_424.free(), e_424.next = Xr.zpp_pool, Xr.zpp_pool = e_424, o = null;
                    }
                    else
                        o = h_13;
                }
                else
                    o = h_13;
            }
            else {
                var r_263 = i == null ? e.findArbiter(s, c, u_60, d_43) : i, l_72 = r_263 == null, f_42, p_29 = !1;
                if (l_72 ? Qr.zpp_pool == null ? f_42 = new Qr : (f_42 = Qr.zpp_pool, Qr.zpp_pool = f_42.next, f_42.next = null) : r_263.sensorarb == null ? (this.retireArbiter(r_263, null), Qr.zpp_pool == null ? f_42 = new Qr : (f_42 = Qr.zpp_pool, Qr.zpp_pool = f_42.next, f_42.next = null), f_42.intchange = !0, l_72 = !0, p_29 = !0) : f_42 = r_263.sensorarb, l_72 || f_42.stamp != this.stamp || a) {
                    if (f_42.stamp = this.stamp, Jr.testCollide(u_60, d_43)) {
                        if (l_72) {
                            var e_425 = d_43.id;
                            f_42.b1 = t.body, f_42.ws1 = t, f_42.b2 = n.body, f_42.ws2 = n, f_42.id = u_60.id, f_42.di = e_425, f_42.b1.arbiters.add(f_42), f_42.b2.arbiters.add(f_42), f_42.active = !0, f_42.present = 0, f_42.endGenerated = 0, f_42.cleared = !1, f_42.sleeping = !1, f_42.fresh = !1, f_42.presentable = !1, this.s_arbiters.add(f_42), f_42.fresh = !p_29;
                        }
                        else
                            f_42.fresh = f_42.up_stamp < this.stamp - 1 || f_42.endGenerated == this.stamp && a;
                        f_42.up_stamp = f_42.stamp, (f_42.fresh || !(f_42.immState & 4)) && (f_42.immState = 1, this.runPreListeners(f_42, 2, a) && !(f_42.immState & 4) && (f_42.b1.type != 1 && this.non_inlined_wake(f_42.b1), f_42.b2.type != 1 && this.non_inlined_wake(f_42.b2))), f_42.sleeping && (f_42.sleeping = !1, this.s_arbiters.add(f_42)), o = f_42;
                    }
                    else if (l_72) {
                        var e_426 = f_42;
                        e_426.next = Qr.zpp_pool, Qr.zpp_pool = e_426, o = null;
                    }
                    else
                        o = f_42;
                }
                else
                    o = f_42;
            }
        } return o; };
        e.prototype.runPreListeners = function (t, n, r) { if (this.preListenerCount === 0)
            return !1; var i = !1, a = t.ws1.id > t.ws2.id ? t.ws2 : t.ws1, o = t.ws1.id > t.ws2.id ? t.ws1 : t.ws2; this.MRCA_chains(a, o); var s = this.mrca1.head; for (; s != null;) {
            var a_143 = s.elt, o_108 = this.mrca2.head;
            for (; o_108 != null;) {
                var s_96 = o_108.elt, c_78 = a_143.cbSet, l_73 = s_96.cbSet;
                if (J.findOrCreatePair(c_78, l_73).listeners.head == null) {
                    o_108 = o_108.next;
                    continue;
                }
                var u_61 = null, d_44 = null;
                this.prelisteners.clear();
                var f_43 = null, p_30 = J.findOrCreatePair(c_78, l_73).listeners.head;
                for (; p_30 != null;) {
                    var e_427 = p_30.elt;
                    e_427.event == 5 && (e_427.itype & n) != 0 && (f_43 = this.prelisteners.insert(f_43, e_427), i = i || !e_427.pure), p_30 = p_30.next;
                }
                if (this.prelisteners.head == null)
                    o_108 = o_108.next;
                else {
                    if (u_61 = Or.get(a_143, s_96), u_61 == null && (d_44 = ri.get(a_143, s_96), this.add_callbackset(d_44)), u_61 == null || (ae(u_61, n) != this.stamp || r) && !(oe(u_61, n) & 4)) {
                        if (d_44 != null && (u_61 = d_44), u_61 != null) {
                            var e_428 = this.prelisteners.head;
                            for (; e_428 != null;)
                                e_428.elt.itype == 7 ? (u_61.COLLISIONstamp = this.stamp, u_61.SENSORstamp = this.stamp, u_61.FLUIDstamp = this.stamp) : se(u_61, n, this.stamp), e_428 = e_428.next;
                        }
                        e.setPreMutable(t, n, !0);
                        var r_264 = t.active;
                        t.active = !0, n == 1 && t.cleanupContacts(), this.precb.zpp_inner.pre_arbiter = t, this.precb.zpp_inner.set = u_61;
                        var i_188 = this.prelisteners.head;
                        for (; i_188 != null;) {
                            var n_307 = i_188.elt;
                            this.precb.zpp_inner.listener = n_307;
                            var r_265 = this.precb.zpp_inner;
                            Or.int_callback(u_61, n_307, r_265), this.precb.zpp_inner.pre_swapped = a_143 != this.precb.zpp_inner.int1;
                            var o_109 = n_307.handlerp(this.precb);
                            if (o_109 != null) {
                                var n_308 = void 0;
                                U.PreFlag_ACCEPT == null && (U.internal = !0, U.PreFlag_ACCEPT = new e._nape.callbacks.PreFlag, U.internal = !1), o_109 == U.PreFlag_ACCEPT ? n_308 = 5 : (U.PreFlag_ACCEPT_ONCE == null && (U.internal = !0, U.PreFlag_ACCEPT_ONCE = new e._nape.callbacks.PreFlag, U.internal = !1), o_109 == U.PreFlag_ACCEPT_ONCE ? n_308 = 1 : (U.PreFlag_IGNORE == null && (U.internal = !0, U.PreFlag_IGNORE = new e._nape.callbacks.PreFlag, U.internal = !1), n_308 = o_109 == U.PreFlag_IGNORE ? 6 : 2)), t.immState = n_308;
                            }
                            i_188 = i_188.next;
                        }
                        if (e.setPreMutable(t, n, !1), t.active = r_264, u_61 != null) {
                            var e_429 = this.prelisteners.head;
                            for (; e_429 != null;)
                                e_429.elt.itype == 7 ? (u_61.COLLISIONstate = t.immState, u_61.SENSORstate = t.immState, u_61.FLUIDstate = t.immState) : ce(u_61, n, t.immState), e_429 = e_429.next;
                        }
                    }
                    else
                        u_61 == null ? !(t.immState & 4) && (t.immState = 1) : t.immState = oe(u_61, n);
                    o_108 = o_108.next;
                }
            }
            s = s.next;
        } return i; };
        e.setPreMutable = function (e, t, n) { t == 4 ? (e.mutable = n, e.wrap_position != null && (e.wrap_position.zpp_inner._immutable = !n)) : t == 1 && (e.mutable = n, e.wrap_normal != null && (e.wrap_normal.zpp_inner._immutable = !n), e.wrap_contacts != null && (e.wrap_contacts.zpp_inner.immutable = !n)); };
        e.prototype.MRCA_chains = function (e, t) { this.mrca1.clear(), this.mrca2.clear(), e.cbSet != null && this.mrca1.add(e), e.body.cbSet != null && this.mrca1.add(e.body), t.cbSet != null && this.mrca2.add(t), t.body.cbSet != null && this.mrca2.add(t.body); var n = e.body.compound, r = t.body.compound; for (; n != r;)
            (n == null ? 0 : n.depth) < (r == null ? 0 : r.depth) ? (r.cbSet != null && this.mrca2.add(r), r = r.compound) : (n.cbSet != null && this.mrca1.add(n), n = n.compound); };
        return e;
    }()), vi._zpp = null, vi._nape = null, yi = vi, bi = (function () {
        function bi() {
            this.zpp_inner = null, this.space = null, this._length = 0, this.zip_length = !1, this.lengths = [], this.ite_0 = null, this.ite_1 = null, this.ite_2 = null, this.ite_3 = null, this.at_index_0 = 0, this.at_index_1 = 0, this.at_index_2 = 0, this.at_index_3 = 0, this.at_index_0 = 0, this.at_index_1 = 0, this.at_index_2 = 0, this.at_index_3 = 0, this.zip_length = !0, this._length = 0, this.lengths = [], this.lengths.push(0), this.lengths.push(0), this.lengths.push(0), this.lengths.push(0);
        }
        bi.prototype.zpp_gl = function () { if (this.zpp_vm(), this.zip_length) {
            this._length = 0;
            var e_430 = 0, t_354 = 0, n_309 = this.space.c_arbiters_true.head;
            for (; n_309 != null;)
                n_309.elt.active && ++t_354, n_309 = n_309.next;
            this.lengths[e_430++] = t_354, this._length += t_354;
            var r_266 = 0, i_189 = this.space.c_arbiters_false.head;
            for (; i_189 != null;)
                i_189.elt.active && ++r_266, i_189 = i_189.next;
            this.lengths[e_430++] = r_266, this._length += r_266;
            var a_144 = 0, o_110 = this.space.f_arbiters.head;
            for (; o_110 != null;)
                o_110.elt.active && ++a_144, o_110 = o_110.next;
            this.lengths[e_430++] = a_144, this._length += a_144;
            var s_97 = 0, c_79 = this.space.s_arbiters.head;
            for (; c_79 != null;)
                c_79.elt.active && ++s_97, c_79 = c_79.next;
            this.lengths[e_430++] = s_97, this._length += s_97, this.zip_length = !1;
        } return this._length; };
        bi.prototype.zpp_vm = function () { var e = !1; this.space.c_arbiters_true.modified && (e = !0, this.space.c_arbiters_true.modified = !1), this.space.c_arbiters_false.modified && (e = !0, this.space.c_arbiters_false.modified = !1), this.space.f_arbiters.modified && (e = !0, this.space.f_arbiters.modified = !1), this.space.s_arbiters.modified && (e = !0, this.space.s_arbiters.modified = !1), e && (this.zip_length = !0, this._length = 0, this.ite_0 = null, this.ite_1 = null, this.ite_2 = null, this.ite_3 = null); };
        bi.prototype.push = function (e) { throw Error("ArbiterList is immutable"); };
        bi.prototype.pop = function () { throw Error("ArbiterList is immutable"); };
        bi.prototype.unshift = function (e) { throw Error("ArbiterList is immutable"); };
        bi.prototype.shift = function () { throw Error("ArbiterList is immutable"); };
        bi.prototype.remove = function (e) { throw Error("ArbiterList is immutable"); };
        bi.prototype.clear = function () { throw Error("ArbiterList is immutable"); };
        bi.prototype.at = function (e) { if (this.zpp_vm(), e < 0 || e >= this.zpp_gl())
            throw Error("Index out of bounds"); var t = null, n = 0; if (t == null) {
            if (e < n + this.lengths[0]) {
                var r_267 = e - n;
                if (r_267 < this.at_index_0 || this.ite_0 == null)
                    for (this.at_index_0 = 0, this.ite_0 = this.space.c_arbiters_true.head; !this.ite_0.elt.active;)
                        this.ite_0 = this.ite_0.next;
                for (; this.at_index_0 != r_267;)
                    for (this.at_index_0++, this.ite_0 = this.ite_0.next; !this.ite_0.elt.active;)
                        this.ite_0 = this.ite_0.next;
                t = this.ite_0.elt.wrapper();
            }
            else
                n += this.lengths[0];
        } if (t == null) {
            if (e < n + this.lengths[1]) {
                var r_268 = e - n;
                if (r_268 < this.at_index_1 || this.ite_1 == null)
                    for (this.at_index_1 = 0, this.ite_1 = this.space.c_arbiters_false.head; !this.ite_1.elt.active;)
                        this.ite_1 = this.ite_1.next;
                for (; this.at_index_1 != r_268;)
                    for (this.at_index_1++, this.ite_1 = this.ite_1.next; !this.ite_1.elt.active;)
                        this.ite_1 = this.ite_1.next;
                t = this.ite_1.elt.wrapper();
            }
            else
                n += this.lengths[1];
        } if (t == null) {
            if (e < n + this.lengths[2]) {
                var r_269 = e - n;
                if (r_269 < this.at_index_2 || this.ite_2 == null)
                    for (this.at_index_2 = 0, this.ite_2 = this.space.f_arbiters.head; !this.ite_2.elt.active;)
                        this.ite_2 = this.ite_2.next;
                for (; this.at_index_2 != r_269;)
                    for (this.at_index_2++, this.ite_2 = this.ite_2.next; !this.ite_2.elt.active;)
                        this.ite_2 = this.ite_2.next;
                t = this.ite_2.elt.wrapper();
            }
            else
                n += this.lengths[2];
        } if (t == null) {
            if (e < n + this.lengths[3]) {
                var r_270 = e - n;
                if (r_270 < this.at_index_3 || this.ite_3 == null)
                    for (this.at_index_3 = 0, this.ite_3 = this.space.s_arbiters.head; !this.ite_3.elt.active;)
                        this.ite_3 = this.ite_3.next;
                for (; this.at_index_3 != r_270;)
                    for (this.at_index_3++, this.ite_3 = this.ite_3.next; !this.ite_3.elt.active;)
                        this.ite_3 = this.ite_3.next;
                t = this.ite_3.elt.wrapper();
            }
            else
                n += this.lengths[3];
        } return t; };
        return bi;
    }()), Object.defineProperty(bi.prototype, "length", { get: function () { return this.zpp_gl(); }, configurable: !0 }), xi = (function () {
        function e(e, t) {
            var n;
            if (e != null && e.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!");
            var r = e == null ? null : e.zpp_inner;
            this.zpp_inner = new yi(r, t), this.zpp_inner.outer = this, e != null && (n = e.zpp_inner) != null && n.weak && e.dispose();
        }
        e._wrap = function (t) { var n; return t ? t instanceof e ? t : t instanceof yi ? t.outer ? t.outer : v(t, function (t) { var n = Object.create(e.prototype); return n.zpp_inner = t, t.outer = n, n; }) : (n = t.zpp_inner) != null && n.outer ? t.zpp_inner.outer : v(t, function (t) { var n; var r = Object.create(e.prototype); return r.zpp_inner = (n = t.zpp_inner) == null ? t : n, r.zpp_inner.outer = r, r; }) : null; };
        Object.defineProperty(e.prototype, "userData", {
            get: function () { return this.zpp_inner.userData == null && (this.zpp_inner.userData = {}), this.zpp_inner.userData; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "gravity", {
            get: function () { return this.zpp_inner.wrap_gravity == null && this.zpp_inner.getgravity(), this.zpp_inner.wrap_gravity; },
            set: function (e) { var t; if (e != null && e.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!"); if (e == null)
                throw Error("Space::gravity cannot be null"); this.zpp_inner.wrap_gravity == null && this.zpp_inner.getgravity(), this.zpp_inner.wrap_gravity.set(e), (t = e.zpp_inner) != null && t.weak && e.dispose(); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "broadphase", {
            get: function () { return this.zpp_inner.bphase.is_spatial_hash ? (U.Broadphase_SPATIAL_HASH == null && (U.internal = !0, U.Broadphase_SPATIAL_HASH = new (d()).space.Broadphase, U.internal = !1), U.Broadphase_SPATIAL_HASH) : this.zpp_inner.bphase.is_sweep ? (U.Broadphase_SWEEP_AND_PRUNE == null && (U.internal = !0, U.Broadphase_SWEEP_AND_PRUNE = new (d()).space.Broadphase, U.internal = !1), U.Broadphase_SWEEP_AND_PRUNE) : (U.Broadphase_DYNAMIC_AABB_TREE == null && (U.internal = !0, U.Broadphase_DYNAMIC_AABB_TREE = new (d()).space.Broadphase, U.internal = !1), U.Broadphase_DYNAMIC_AABB_TREE); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "sortContacts", {
            get: function () { return this.zpp_inner.sortcontacts; },
            set: function (e) { this.zpp_inner.sortcontacts = e; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "deterministic", {
            get: function () { return this.zpp_inner.deterministic; },
            set: function (e) { this.zpp_inner.deterministic = e, e && (this.zpp_inner.sortcontacts = !0); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "profilerEnabled", {
            get: function () { return this.zpp_inner.profilerEnabled; },
            set: function (e) { this.zpp_inner.profilerEnabled = e; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "metrics", {
            get: function () { return this.zpp_inner._metrics; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "subSteps", {
            get: function () { return this.zpp_inner.subSteps; },
            set: function (e) { if (e !== e)
                throw Error("Space::subSteps cannot be NaN"); if (e < 1)
                throw Error("Space::subSteps must be at least 1"); this.zpp_inner.subSteps = Math.floor(e); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "worldAngularDrag", {
            get: function () { return this.zpp_inner.global_ang_drag; },
            set: function (e) { if (e !== e)
                throw Error("Space::worldAngularDrag cannot be NaN"); this.zpp_inner.global_ang_drag = e; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "worldLinearDrag", {
            get: function () { return this.zpp_inner.global_lin_drag; },
            set: function (e) { if (e !== e)
                throw Error("Space::worldLinearDrag cannot be NaN"); this.zpp_inner.global_lin_drag = e; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "compounds", {
            get: function () { return this.zpp_inner.wrap_compounds; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "bodies", {
            get: function () { return this.zpp_inner.wrap_bodies; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "liveBodies", {
            get: function () { return this.zpp_inner.wrap_live; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "constraints", {
            get: function () { return this.zpp_inner.wrap_constraints; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "liveConstraints", {
            get: function () { return this.zpp_inner.wrap_livecon; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "world", {
            get: function () { return Hr._wrap(this.zpp_inner.__static); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "arbiters", {
            get: function () { if (this.zpp_inner.wrap_arbiters == null) {
                var e_431 = new bi;
                e_431.space = this.zpp_inner, this.zpp_inner.wrap_arbiters = e_431;
            } return this.zpp_inner.wrap_arbiters; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "listeners", {
            get: function () { return this.zpp_inner.wrap_listeners; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "timeStamp", {
            get: function () { return this.zpp_inner.stamp; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "elapsedTime", {
            get: function () { return this.zpp_inner.time; },
            enumerable: false,
            configurable: true
        });
        e.prototype.step = function (e, t, n) {
            if (t === void 0) { t = 10; }
            if (n === void 0) { n = 10; }
            if (e !== e)
                throw Error("deltaTime cannot be NaN");
            if (e <= 0)
                throw Error("deltaTime must be strictly positive");
            if (t <= 0)
                throw Error("must use atleast one velocity iteration");
            if (n <= 0)
                throw Error("must use atleast one position iteration");
            this.zpp_inner.step(e, t, n);
        };
        e.prototype.clear = function () { if (this.zpp_inner.midstep)
            throw Error("Space::clear() cannot be called during space step()"); this.zpp_inner.clear(); };
        e.prototype.visitBodies = function (e) { if (e == null)
            throw Error("lambda cannot be null for Space::visitBodies"); var t = this.zpp_inner.wrap_bodies; t.zpp_inner.valmod(); var n = fn.get(t); for (;;) {
            n.zpp_inner.zpp_inner.valmod();
            var t_355 = n.zpp_inner;
            t_355.zpp_inner.valmod(), t_355.zpp_inner.zip_length && (t_355.zpp_inner.zip_length = !1, t_355.zpp_inner.user_length = t_355.zpp_inner.inner.length);
            var r_271 = t_355.zpp_inner.user_length;
            if (n.zpp_critical = !0, n.zpp_i >= r_271) {
                n.zpp_next = fn.zpp_pool, fn.zpp_pool = n, n.zpp_inner = null;
                break;
            }
            n.zpp_critical = !1, e(n.zpp_inner.at(n.zpp_i++));
        } var r = this.zpp_inner.wrap_compounds; r.zpp_inner.valmod(); var i = pn.get(r); for (;;) {
            i.zpp_inner.zpp_inner.valmod();
            var t_356 = i.zpp_inner;
            t_356.zpp_inner.valmod(), t_356.zpp_inner.zip_length && (t_356.zpp_inner.zip_length = !1, t_356.zpp_inner.user_length = t_356.zpp_inner.inner.length);
            var n_310 = t_356.zpp_inner.user_length;
            if (i.zpp_critical = !0, i.zpp_i >= n_310) {
                i.zpp_next = pn.zpp_pool, pn.zpp_pool = i, i.zpp_inner = null;
                break;
            }
            i.zpp_critical = !1, i.zpp_inner.at(i.zpp_i++).visitBodies(e);
        } };
        e.prototype.visitConstraints = function (e) { if (e == null)
            throw Error("lambda cannot be null for Space::visitConstraints"); var t = this.zpp_inner.wrap_constraints; t.zpp_inner.valmod(); var n = cn.get(t); for (;;) {
            n.zpp_inner.zpp_inner.valmod();
            var t_357 = n.zpp_inner;
            t_357.zpp_inner.valmod(), t_357.zpp_inner.zip_length && (t_357.zpp_inner.zip_length = !1, t_357.zpp_inner.user_length = t_357.zpp_inner.inner.length);
            var r_272 = t_357.zpp_inner.user_length;
            if (n.zpp_critical = !0, n.zpp_i >= r_272) {
                n.zpp_next = cn.zpp_pool, cn.zpp_pool = n, n.zpp_inner = null;
                break;
            }
            n.zpp_critical = !1, e(n.zpp_inner.at(n.zpp_i++));
        } var r = this.zpp_inner.wrap_compounds; r.zpp_inner.valmod(); var i = pn.get(r); for (;;) {
            i.zpp_inner.zpp_inner.valmod();
            var t_358 = i.zpp_inner;
            t_358.zpp_inner.valmod(), t_358.zpp_inner.zip_length && (t_358.zpp_inner.zip_length = !1, t_358.zpp_inner.user_length = t_358.zpp_inner.inner.length);
            var n_311 = t_358.zpp_inner.user_length;
            if (i.zpp_critical = !0, i.zpp_i >= n_311) {
                i.zpp_next = pn.zpp_pool, pn.zpp_pool = i, i.zpp_inner = null;
                break;
            }
            i.zpp_critical = !1, i.zpp_inner.at(i.zpp_i++).visitConstraints(e);
        } };
        e.prototype.visitCompounds = function (e) { if (e == null)
            throw Error("lambda cannot be null for Space::visitCompounds"); var t = this.zpp_inner.wrap_compounds; t.zpp_inner.valmod(); var n = pn.get(t); for (;;) {
            n.zpp_inner.zpp_inner.valmod();
            var t_359 = n.zpp_inner;
            t_359.zpp_inner.valmod(), t_359.zpp_inner.zip_length && (t_359.zpp_inner.zip_length = !1, t_359.zpp_inner.user_length = t_359.zpp_inner.inner.length);
            var r_273 = t_359.zpp_inner.user_length;
            if (n.zpp_critical = !0, n.zpp_i >= r_273) {
                n.zpp_next = pn.zpp_pool, pn.zpp_pool = n, n.zpp_inner = null;
                break;
            }
            n.zpp_critical = !1;
            var i_190 = n.zpp_inner.at(n.zpp_i++);
            e(i_190), i_190.visitCompounds(e);
        } };
        e.prototype.interactionType = function (e, t) { if (e == null || t == null)
            throw Error("Cannot evaluate interaction type for null shapes"); var n = e.zpp_inner, r = t.zpp_inner; if ((n.body == null ? null : n.body.outer) == null || (r.body == null ? null : r.body.outer) == null)
            throw Error("Cannot evaluate interaction type for shapes not part of a Body"); var i = n.body, a = r.body; if (i.type == 1 && a.type == 1 || i.outer == a.outer)
            return null; var o = !1, s = i.constraints.head; for (; s != null;) {
            var e_432 = s.elt;
            if (e_432.ignore && e_432.pair_exists(i.id, a.id)) {
                o = !0;
                break;
            }
            s = s.next;
        } var c; if (o)
            c = !1;
        else {
            var e_433 = n;
            for (; e_433 != null && e_433.group == null;)
                e_433 = e_433.ishape == null ? e_433.icompound == null ? e_433.ibody.compound : e_433.icompound.compound : e_433.ishape.body;
            var t_360 = e_433 == null ? null : e_433.group, i_191;
            if (t_360 == null)
                i_191 = !1;
            else {
                var e_434 = r;
                for (; e_434 != null && e_434.group == null;)
                    e_434 = e_434.ishape == null ? e_434.icompound == null ? e_434.ibody.compound : e_434.icompound.compound : e_434.ishape.body;
                var n_312 = e_434 == null ? null : e_434.group;
                if (n_312 == null)
                    i_191 = !1;
                else {
                    var e_435 = !1;
                    for (; t_360 != null && n_312 != null;) {
                        if (t_360 == n_312) {
                            e_435 = t_360.ignore;
                            break;
                        }
                        t_360.depth < n_312.depth ? n_312 = n_312.group : t_360 = t_360.group;
                    }
                    i_191 = e_435;
                }
            }
            c = !i_191;
        } if (!c)
            return null; var l = n.filter, u = r.filter, f = i.imass == 0 && a.imass == 0 && i.iinertia == 0 && a.iinertia == 0; return (n.sensorEnabled || r.sensorEnabled) && (l.sensorMask & u.sensorGroup) != 0 && (u.sensorMask & l.sensorGroup) != 0 ? (U.InteractionType_SENSOR == null && (U.internal = !0, U.InteractionType_SENSOR = new (d()).callbacks.InteractionType, U.internal = !1), U.InteractionType_SENSOR) : (n.fluidEnabled || r.fluidEnabled) && (l.fluidMask & u.fluidGroup) != 0 && (u.fluidMask & l.fluidGroup) != 0 && !f ? (U.InteractionType_FLUID == null && (U.internal = !0, U.InteractionType_FLUID = new (d()).callbacks.InteractionType, U.internal = !1), U.InteractionType_FLUID) : (l.collisionMask & u.collisionGroup) != 0 && (u.collisionMask & l.collisionGroup) != 0 && !f ? (U.InteractionType_COLLISION == null && (U.internal = !0, U.InteractionType_COLLISION = new (d()).callbacks.InteractionType, U.internal = !1), U.InteractionType_COLLISION) : null; };
        e.prototype.shapesUnderPoint = function (e, t, n) { var r; if (e != null && e.zpp_disp)
            throw Error("Vec2 has been disposed and cannot be used!"); if (e == null)
            throw Error("Cannot evaluate shapes under a null point :)"); var i = e.zpp_inner; i._validate != null && i._validate(); var a = i.x; i._validate != null && i._validate(); var o = i.y, s = t == null ? null : (r = t.zpp_inner) == null ? t : r, c = this.zpp_inner.shapesUnderPoint(a, o, s, n); return i.weak && e.dispose(), c; };
        e.prototype.bodiesUnderPoint = function (e, t, n) { var r; if (e != null && e.zpp_disp)
            throw Error("Vec2 has been disposed and cannot be used!"); if (e == null)
            throw Error("Cannot evaluate objects under a null point :)"); var i = e.zpp_inner; i._validate != null && i._validate(); var a = i.x; i._validate != null && i._validate(); var o = i.y, s = t == null ? null : (r = t.zpp_inner) == null ? t : r, c = this.zpp_inner.bodiesUnderPoint(a, o, s, n); return i.weak && e.dispose(), c; };
        e.prototype.shapesInAABB = function (e, t, n, r, i) {
            if (t === void 0) { t = !1; }
            if (n === void 0) { n = !0; }
            var a;
            if (e == null)
                throw Error("Cannot evaluate shapes in a null AABB :)");
            var o = e.zpp_inner;
            if (o._validate != null && o._validate(), o.maxx - o.minx == 0 || o.maxy - o.miny == 0)
                throw Error("Cannot evaluate shapes in degenerate AABB :/");
            var s = r == null ? null : (a = r.zpp_inner) == null ? r : a;
            return this.zpp_inner.shapesInAABB(e, n, t, s, i);
        };
        e.prototype.bodiesInAABB = function (e, t, n, r, i) {
            if (t === void 0) { t = !1; }
            if (n === void 0) { n = !0; }
            var a;
            if (e == null)
                throw Error("Cannot evaluate objects in a null AABB :)");
            var o = e.zpp_inner;
            if (o._validate != null && o._validate(), o.maxx - o.minx == 0 || o.maxy - o.miny == 0)
                throw Error("Cannot evaluate objects in degenerate AABB :/");
            var s = r == null ? null : (a = r.zpp_inner) == null ? r : a;
            return this.zpp_inner.bodiesInAABB(e, n, t, s, i);
        };
        e.prototype.shapesInCircle = function (e, t, n, r, i) {
            if (n === void 0) { n = !1; }
            var a, o;
            if (e != null && e.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!");
            if (e == null)
                throw Error("Cannot evaluate shapes at null circle :)");
            if (t !== t)
                throw Error("Circle radius cannot be NaN");
            if (t <= 0)
                throw Error("Circle radius must be strictly positive");
            var s = r == null ? null : (a = r.zpp_inner) == null ? r : a, c = this.zpp_inner.shapesInCircle(e, t, n, s, i);
            return (o = e.zpp_inner) != null && o.weak && e.dispose(), c;
        };
        e.prototype.bodiesInCircle = function (e, t, n, r, i) {
            if (n === void 0) { n = !1; }
            var a, o;
            if (e != null && e.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!");
            if (e == null)
                throw Error("Cannot evaluate objects at null circle :)");
            if (t !== t)
                throw Error("Circle radius cannot be NaN");
            if (t <= 0)
                throw Error("Circle radius must be strictly positive");
            var s = r == null ? null : (a = r.zpp_inner) == null ? r : a, c = this.zpp_inner.bodiesInCircle(e, t, n, s, i);
            return (o = e.zpp_inner) != null && o.weak && e.dispose(), c;
        };
        e.prototype.shapesInShape = function (e, t, n, r) {
            if (t === void 0) { t = !1; }
            var i;
            if (e == null)
                throw Error("Cannot evaluate shapes in a null shapes :)");
            var a = e.zpp_inner;
            if ((a.body == null ? null : a.body.outer) == null)
                throw Error("Query shape needs to be inside a Body to be well defined :)");
            if (a.type == 1) {
                var e_436 = a.polygon.valid();
                if (U.ValidationResult_VALID == null && (U.internal = !0, U.ValidationResult_VALID = new (d()).shape.ValidationResult, U.internal = !1), e_436 != U.ValidationResult_VALID)
                    throw Error("Polygon query shape is invalid : " + e_436.toString());
            }
            var o = n == null ? null : (i = n.zpp_inner) == null ? n : i;
            return this.zpp_inner.shapesInShape(a, t, o, r);
        };
        e.prototype.bodiesInShape = function (e, t, n, r) {
            if (t === void 0) { t = !1; }
            var i;
            if (e == null)
                throw Error("Cannot evaluate bodies in a null shapes :)");
            var a = e.zpp_inner;
            if ((a.body == null ? null : a.body.outer) == null)
                throw Error("Query shape needs to be inside a Body to be well defined :)");
            if (a.type == 1) {
                var e_437 = a.polygon.valid();
                if (U.ValidationResult_VALID == null && (U.internal = !0, U.ValidationResult_VALID = new (d()).shape.ValidationResult, U.internal = !1), e_437 != U.ValidationResult_VALID)
                    throw Error("Polygon query shape is invalid : " + e_437.toString());
            }
            var o = n == null ? null : (i = n.zpp_inner) == null ? n : i;
            return this.zpp_inner.bodiesInShape(a, t, o, r);
        };
        e.prototype.shapesInBody = function (e, t, n) { if (e == null)
            throw Error("Cannot evaluate shapes in null body"); var r = n == null ? new mn : n, i = e.zpp_inner.wrap_shapes; i.zpp_inner.valmod(); var a = hn.get(i); for (;;) {
            a.zpp_inner.zpp_inner.valmod();
            var e_438 = a.zpp_inner;
            e_438.zpp_inner.valmod(), e_438.zpp_inner.zip_length && (e_438.zpp_inner.zip_length = !1, e_438.zpp_inner.user_length = e_438.zpp_inner.inner.length);
            var n_313 = e_438.zpp_inner.user_length;
            if (a.zpp_critical = !0, a.zpp_i >= n_313) {
                a.zpp_next = hn.zpp_pool, hn.zpp_pool = a, a.zpp_inner = null;
                break;
            }
            a.zpp_critical = !1;
            var i_192 = a.zpp_inner.at(a.zpp_i++);
            this.shapesInShape(i_192, !1, t, r);
        } return r; };
        e.prototype.bodiesInBody = function (e, t, n) { if (e == null)
            throw Error("Cannot evaluate shapes in null body"); var r = n == null ? new dn : n, i = e.zpp_inner.wrap_shapes; i.zpp_inner.valmod(); var a = hn.get(i); for (;;) {
            a.zpp_inner.zpp_inner.valmod();
            var e_439 = a.zpp_inner;
            e_439.zpp_inner.valmod(), e_439.zpp_inner.zip_length && (e_439.zpp_inner.zip_length = !1, e_439.zpp_inner.user_length = e_439.zpp_inner.inner.length);
            var n_314 = e_439.zpp_inner.user_length;
            if (a.zpp_critical = !0, a.zpp_i >= n_314) {
                a.zpp_next = hn.zpp_pool, hn.zpp_pool = a, a.zpp_inner = null;
                break;
            }
            a.zpp_critical = !1;
            var i_193 = a.zpp_inner.at(a.zpp_i++);
            this.bodiesInShape(i_193, !1, t, r);
        } return r; };
        e.prototype.convexCast = function (e, t, n, r) {
            if (n === void 0) { n = !1; }
            if (e == null)
                throw Error("Cannot cast null shape :)");
            var i = e.zpp_inner;
            if ((i.body == null ? null : i.body.outer) == null)
                throw Error("Shape must belong to a body to be cast.");
            if (t < 0 || t !== t)
                throw Error("deltaTime must be positive");
            return this.zpp_inner.convexCast(i, t, r, n);
        };
        e.prototype.convexMultiCast = function (e, t, n, r, i) {
            if (n === void 0) { n = !1; }
            if (e == null)
                throw Error("Cannot cast null shape :)");
            var a = e.zpp_inner;
            if ((a.body == null ? null : a.body.outer) == null)
                throw Error("Shape must belong to a body to be cast.");
            if (t < 0 || t !== t)
                throw Error("deltaTime must be positive");
            return this.zpp_inner.convexMultiCast(a, t, r, n, i);
        };
        e.prototype.rayCast = function (e, t, n) {
            if (t === void 0) { t = !1; }
            if (e == null)
                throw Error("Cannot cast null ray :)");
            return this.zpp_inner.rayCast(e, t, n);
        };
        e.prototype.rayMultiCast = function (e, t, n, r) {
            if (t === void 0) { t = !1; }
            if (e == null)
                throw Error("Cannot cast null ray :)");
            return this.zpp_inner.rayMultiCast(e, t, n, r);
        };
        e.prototype.debugDraw = function (e, t) {
            if (t === void 0) { t = Sr.ALL; }
            if (e == null)
                throw Error("drawer cannot be null for Space::debugDraw");
            var n = (t & Sr.SHAPES) !== 0, r = (t & Sr.JOINTS) !== 0, i = (t & Sr.CONTACTS) !== 0, a = (t & Sr.AABB) !== 0, o = (t & Sr.CENTER_OF_MASS) !== 0, s = (t & Sr.VELOCITIES) !== 0, c = 4289058471, l = 4293874512, u = 1157627903;
            if (this.visitBodies(function (t) { var r = t.zpp_inner, i = r.type === 2, c = r.type === 1 ? 4287669422 : i ? 4283417591 : 4294948685; if (n) {
                var t_361 = r.shapes.head;
                for (; t_361 != null;) {
                    var n_315 = t_361.elt;
                    if (n_315.type === 0) {
                        var t_362 = n_315.circle;
                        n_315.zip_worldCOM && n_315.validate_worldCOM();
                        var a_145 = n_315.worldCOMx, o_111 = n_315.worldCOMy, s_98 = t_362.radius, l_74 = r.rot, u_62 = a_145 + Math.cos(l_74) * s_98, d_45 = o_111 + Math.sin(l_74) * s_98, f_44 = { x: a_145, y: o_111 }, p_31 = { x: u_62, y: d_45 };
                        i ? e.drawSolidCircle(f_44, s_98, p_31, c) : e.drawCircle(f_44, s_98, c);
                    }
                    else if (n_315.type === 1) {
                        var t_363 = n_315.polygon;
                        t_363.zip_gverts && t_363.validate_gverts();
                        var r_274 = [], a_146 = t_363.gverts.next;
                        for (; a_146 != null;)
                            r_274.push({ x: a_146.x, y: a_146.y }), a_146 = a_146.next;
                        r_274.length >= 3 && (i ? e.drawSolidPolygon(r_274, c) : e.drawPolygon(r_274, c));
                    }
                    t_361 = t_361.next;
                }
            } if (a && !r.world) {
                var t_364 = r.aabb, n_316 = t_364.minx, i_194 = t_364.miny, a_147 = t_364.maxx, o_112 = t_364.maxy;
                e.drawSegment({ x: n_316, y: i_194 }, { x: a_147, y: i_194 }, u), e.drawSegment({ x: a_147, y: i_194 }, { x: a_147, y: o_112 }, u), e.drawSegment({ x: a_147, y: o_112 }, { x: n_316, y: o_112 }, u), e.drawSegment({ x: n_316, y: o_112 }, { x: n_316, y: i_194 }, u);
            } if (o && !r.world && (r.validate_worldCOM(), e.drawPoint({ x: r.worldCOMx, y: r.worldCOMy }, 4294961979)), s && !r.world && i) {
                var t_365 = r.posx, n_317 = r.posy;
                e.drawSegment({ x: t_365, y: n_317 }, { x: t_365 + r.velx, y: n_317 + r.vely }, 4291728344);
            } }), r && this.visitConstraints(function (t) { var n, r, i, a; if (!t.debugDraw)
                return; var o = t.zpp_inner, s = o.b1, l = o.b2, u = (n = o.a1worldx) == null ? s == null ? 0 : s.posx : n, d = (r = o.a1worldy) == null ? s == null ? 0 : s.posy : r, f = (i = o.a2worldx) == null ? l == null ? 0 : l.posx : i, p = (a = o.a2worldy) == null ? l == null ? 0 : l.posy : a; e.drawSegment({ x: u, y: d }, { x: f, y: p }, c), e.drawPoint({ x: u, y: d }, c), e.drawPoint({ x: f, y: p }, c); }), i) {
                var t_366 = function (t) { if (t == null)
                    return; var n = t.head; for (; n != null;) {
                    var t_367 = n.elt;
                    if (t_367 != null) {
                        var r;
                        var n_318 = t_367.nx, i_195 = t_367.ny, a_148 = (r = t_367.contacts) == null ? void 0 : r.next;
                        for (; a_148 != null;) {
                            var t_368 = a_148.px, r_275 = a_148.py;
                            e.drawPoint({ x: t_368, y: r_275 }, l), e.drawSegment({ x: t_368, y: r_275 }, { x: t_368 + n_318 * 8, y: r_275 + i_195 * 8 }, l), a_148 = a_148.next;
                        }
                    }
                    n = n.next;
                } };
                t_366(this.zpp_inner.c_arbiters_true), t_366(this.zpp_inner.c_arbiters_false);
            }
        };
        e.prototype.toString = function () { return "Space(bodies=".concat(this.bodies.length, ")"); };
        return e;
    }()), Si = (function () {
        function e() {
            this.outer_i = null, this.id = 0, this.userData = null, this.ishape = null, this.ibody = null, this.icompound = null, this.wrap_cbTypes = null, this.cbSet = null, this.cbTypes = null, this.group = null, this.cbsets = null, this.outer = null, this.bodies = null, this.constraints = null, this.compounds = null, this.wrap_bodies = null, this.wrap_constraints = null, this.wrap_compounds = null, this.depth = 0, this.compound = null, this.space = null;
            var t = e._zpp;
            Or.initFields(this), this.icompound = this, this.depth = 1, this.bodies = new pt, this.wrap_bodies = t.util.ZPP_BodyList.get(this.bodies), this.wrap_bodies.zpp_inner.adder = this.bodies_adder.bind(this), this.wrap_bodies.zpp_inner.subber = this.bodies_subber.bind(this), this.wrap_bodies.zpp_inner._modifiable = this.bodies_modifiable.bind(this), this.constraints = new mt, this.wrap_constraints = t.util.ZPP_ConstraintList.get(this.constraints), this.wrap_constraints.zpp_inner.adder = this.constraints_adder.bind(this), this.wrap_constraints.zpp_inner.subber = this.constraints_subber.bind(this), this.wrap_constraints.zpp_inner._modifiable = this.constraints_modifiable.bind(this), this.compounds = new ht, this.wrap_compounds = t.util.ZPP_CompoundList.get(this.compounds), this.wrap_compounds.zpp_inner.adder = this.compounds_adder.bind(this), this.wrap_compounds.zpp_inner.subber = this.compounds_subber.bind(this), this.wrap_compounds.zpp_inner._modifiable = this.compounds_modifiable.bind(this);
        }
        e.prototype.__imutable_midstep = function (e) { if (this.space != null && this.space.midstep)
            throw Error("".concat(e, " cannot be set during space step()")); };
        e.prototype.addedToSpace = function () { this.__iaddedToSpace(); };
        e.prototype.removedFromSpace = function () { this.__iremovedFromSpace(); };
        e.prototype.breakApart = function () { for (this.space != null && (this.__iremovedFromSpace(), this.space.nullInteractorType(this)), this.compound == null ? this.space != null && this.space.compounds.remove(this) : this.compound.compounds.remove(this); this.bodies.head != null;) {
            var e_440 = this.bodies.pop_unsafe();
            (e_440.compound = this.compound) == null ? this.space != null && this.space.bodies.add(e_440) : this.compound.bodies.add(e_440), this.space != null && this.space.freshInteractorType(e_440);
        } for (; this.constraints.head != null;) {
            var e_441 = this.constraints.pop_unsafe();
            (e_441.compound = this.compound) == null ? this.space != null && this.space.constraints.add(e_441) : this.compound.constraints.add(e_441);
        } for (; this.compounds.head != null;) {
            var e_442 = this.compounds.pop_unsafe();
            (e_442.compound = this.compound) == null ? this.space != null && this.space.compounds.add(e_442) : this.compound.compounds.add(e_442), this.space != null && this.space.freshInteractorType(e_442);
        } this.compound = null, this.space = null; };
        e._zppOf = function (e) { var t; return (t = e.zpp_inner) == null ? e : t; };
        e.prototype.bodies_adder = function (t) { var n = e._zppOf(t); return n.compound !== this && (n.compound == null ? n.space != null && n.space.wrap_bodies.remove(t) : n.compound.wrap_bodies.remove(t), n.compound = this, this.space != null && this.space.addBody(n), !0); };
        e.prototype.bodies_subber = function (t) { var n = e._zppOf(t); n.compound = null, this.space != null && this.space.remBody(n); };
        e.prototype.bodies_modifiable = function () { this.immutable_midstep("Compound::bodies"); };
        e.prototype.constraints_adder = function (t) { var n = e._zppOf(t); return n.compound !== this && (n.compound == null ? n.space != null && n.space.wrap_constraints.remove(t) : n.compound.wrap_constraints.remove(t), n.compound = this, this.space != null && this.space.addConstraint(n), !0); };
        e.prototype.constraints_subber = function (t) { var n = e._zppOf(t); n.compound = null, this.space != null && this.space.remConstraint(n); };
        e.prototype.constraints_modifiable = function () { this.immutable_midstep("Compound::constraints"); };
        e.prototype.compounds_adder = function (t) { var n = e._zppOf(t), r = this; for (; r != null && r !== n;)
            r = r.compound; if (r === n)
            throw Error("Error: Assignment would cause a cycle in the Compound tree: assigning " + t.toString() + ".compound = " + this.outer.toString()); return n.compound !== this && (n.compound == null ? n.space != null && n.space.wrap_compounds.remove(t) : n.compound.wrap_compounds.remove(t), n.compound = this, n.depth = this.depth + 1, this.space != null && this.space.addCompound(n), !0); };
        e.prototype.compounds_subber = function (t) { var n = e._zppOf(t); n.compound = null, n.depth = 1, this.space != null && this.space.remCompound(n); };
        e.prototype.compounds_modifiable = function () { this.immutable_midstep("Compound::compounds"); };
        e.prototype.copy = function (t, n) { var r = e._nape, i = e._zpp, a = t == null; t == null && (t = []), n == null && (n = []); var o = new r.phys.Compound, s = this.compounds.head; for (; s != null;) {
            var e_443 = s.elt.copy(t, n);
            e_443.zpp_inner.immutable_midstep("Compound::compound"), o.zpp_inner.wrap_compounds.add(e_443), s = s.next;
        } var c = this.bodies.head; for (; c != null;) {
            var e_444 = c.elt, n_319 = e_444.outer.copy();
            t.push(i.constraint.ZPP_CopyHelper.dict(e_444.id, n_319)), o.zpp_inner.wrap_bodies.add(n_319), c = c.next;
        } var l = this.constraints.head; for (; l != null;) {
            var e_445 = l.elt.copy(t, n);
            o.zpp_inner.wrap_constraints.add(e_445), l = l.next;
        } if (a)
            for (; n.length > 0;) {
                var e_446 = n.pop();
                for (var n_320 = 0; n_320 < t.length; n_320++) {
                    var r_276 = t[n_320];
                    if (r_276.id === e_446.id) {
                        e_446.cb(r_276.bc);
                        break;
                    }
                }
            } return this.copyto(o), o; };
        e._init = function () { for (var _b = 0, _c = Object.getOwnPropertyNames(Or.prototype); _b < _c.length; _b++) {
            var t_369 = _c[_b];
            t_369 !== "constructor" && !Object.prototype.hasOwnProperty.call(e.prototype, t_369) && (e.prototype[t_369] = Or.prototype[t_369]);
        } };
        return e;
    }()), Si._nape = null, Si._zpp = null, Si._wrapFn = null, Ci = Si, wi = (function (_super) {
        __extends(e, _super);
        function e() {
            var _this = _super.call(this) || this;
            var e = new Ci;
            _this.zpp_inner = e, e.outer = _this, e.outer_i = _this, _this.zpp_inner_i = e, e.insert_cbtype(Br.ANY_COMPOUND.zpp_inner);
            return _this;
        }
        e._wrap = function (t) { return t ? t instanceof e ? t : t instanceof Ci ? v(t, function (t) { var n = Object.create(e.prototype); return n.zpp_inner = t, t.outer = n, t.outer_i = n, n.zpp_inner_i = t, n; }) : t.zpp_inner ? e._wrap(t.zpp_inner) : v(t, function (t) { return Object.create(e.prototype); }) : null; };
        Object.defineProperty(e.prototype, "bodies", {
            get: function () { return this.zpp_inner.wrap_bodies; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "constraints", {
            get: function () { return this.zpp_inner.wrap_constraints; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "compounds", {
            get: function () { return this.zpp_inner.wrap_compounds; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "compound", {
            get: function () { return this.zpp_inner.compound == null ? null : this.zpp_inner.compound.outer; },
            set: function (e) { this.zpp_inner.immutable_midstep("Compound::compound"); var t = this.zpp_inner.compound == null ? null : this.zpp_inner.compound.outer; if (t !== e && (t == null || t.zpp_inner.wrap_compounds.remove(this), e != null)) {
                var t_370 = e.zpp_inner.wrap_compounds;
                t_370.zpp_inner.reverse_flag ? t_370.push(this) : t_370.unshift(this);
            } },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "space", {
            get: function () { return this.zpp_inner.space == null ? null : xi._wrap(this.zpp_inner.space.outer); },
            set: function (e) { if (this.zpp_inner.compound != null)
                throw Error("Error: Cannot set the space of an inner Compound, only the root Compound space can be set"); this.zpp_inner.immutable_midstep("Compound::space"); var t = this.zpp_inner.space == null ? null : this.zpp_inner.space.outer; if (t !== (e == null ? null : e) && (t == null || t.zpp_inner.wrap_compounds.remove(this), e != null)) {
                var t_371 = e.zpp_inner.wrap_compounds;
                t_371.zpp_inner.reverse_flag ? t_371.push(this) : t_371.unshift(this);
            } },
            enumerable: false,
            configurable: true
        });
        e.prototype.copy = function () { return this.zpp_inner.copy(); };
        e.prototype.breakApart = function () { this.zpp_inner.breakApart(); };
        e.prototype.visitBodies = function (e) { if (e == null)
            throw Error("lambda cannot be null for Compound::visitBodies"); var t = this.zpp_inner.wrap_bodies, n = t.length; for (var r_277 = 0; r_277 < n; r_277++)
            e(t.at(r_277)); var r = this.zpp_inner.wrap_compounds, i = r.length; for (var t_372 = 0; t_372 < i; t_372++)
            r.at(t_372).visitBodies(e); };
        e.prototype.visitConstraints = function (e) { if (e == null)
            throw Error("lambda cannot be null for Compound::visitConstraints"); var t = this.zpp_inner.wrap_constraints, n = t.length; for (var r_278 = 0; r_278 < n; r_278++)
            e(t.at(r_278)); var r = this.zpp_inner.wrap_compounds, i = r.length; for (var t_373 = 0; t_373 < i; t_373++)
            r.at(t_373).visitConstraints(e); };
        e.prototype.visitCompounds = function (e) { if (e == null)
            throw Error("lambda cannot be null for Compound::visitConstraints"); var t = this.zpp_inner.wrap_compounds, n = t.length; for (var r_279 = 0; r_279 < n; r_279++) {
            var n_321 = t.at(r_279);
            e(n_321), n_321.visitCompounds(e);
        } };
        e.prototype.COM = function (e) {
            if (e === void 0) { e = !1; }
            var t = new Sn(0, 0), n = 0;
            if (this.visitBodies(function (e) { if (e.zpp_inner.shapes.head == null)
                return; var r = e.mass; t.addeq(e.worldCOM.mul(r, !0)), n += r; }), n === 0)
                throw Error("COM of an empty Compound is undefined silly");
            return t.muleq(1 / n), e && (t.zpp_inner.weak = !0), t;
        };
        e.prototype.translate = function (e) { if (e != null && e.zpp_disp)
            throw Error("Vec2 has been disposed and cannot be used!"); if (e == null)
            throw Error("Cannot translate by null Vec2"); var t = e.zpp_inner.weak; return e.zpp_inner.weak = !1, this.visitBodies(function (t) { t.zpp_inner.wrap_pos == null && t.zpp_inner.setupPosition(), t.zpp_inner.wrap_pos.addeq(e); }), e.zpp_inner.weak = t, e.zpp_inner.weak && e.dispose(), this; };
        e.prototype.rotate = function (e, t) { if (e != null && e.zpp_disp)
            throw Error("Vec2 has been disposed and cannot be used!"); if (e == null)
            throw Error("Cannot rotate about a null Vec2"); if (t !== t)
            throw Error("Cannot rotate by NaN radians"); var n = e.zpp_inner.weak; return e.zpp_inner.weak = !1, this.visitBodies(function (n) { n.rotate(e, t); }), e.zpp_inner.weak = n, e.zpp_inner.weak && e.dispose(), this; };
        e.prototype.toString = function () { return "Compound" + this.zpp_inner.id; };
        return e;
    }(xr)), Ci._wrapFn = function (e) { return v(e, function (e) { var t = Object.create(wi.prototype); return t.zpp_inner = e, e.outer = t, e.outer_i = t, t.zpp_inner_i = e, t; }); }, Ti = (function () {
        function e() {
            this.viscosity = 1, this.density = 1, this.gravityx = 0, this.gravityy = 0, this.wrap_gravity = null, this.shapes = null, this.wrap_shapes = null, this.outer = null, this.userData = null, this.next = null, this.shapes = new ft;
        }
        e.prototype.wrapper = function () { if (this.outer == null) {
            if (e._wrapFn)
                this.outer = e._wrapFn(this);
            else {
                this.outer = new e._nape.phys.FluidProperties;
                var t_374 = this.outer.zpp_inner;
                t_374.outer = null, t_374.next = e.zpp_pool, e.zpp_pool = t_374, this.outer.zpp_inner = this;
            }
        } return this.outer; };
        e.prototype.free = function () { this.outer = null; };
        e.prototype.feature_cons = function () { this.shapes = new ft; };
        e.prototype.addShape = function (e) { this.shapes.add(e); };
        e.prototype.remShape = function (e) { this.shapes.remove(e); };
        e.prototype.copy = function () { var t; return e.zpp_pool == null ? t = new e : (t = e.zpp_pool, e.zpp_pool = t.next, t.next = null), t.viscosity = this.viscosity, t.density = this.density, t; };
        e.prototype.gravity_invalidate = function (e) { this.gravityx = e.x, this.gravityy = e.y, this.invalidate(); };
        e.prototype.gravity_validate = function () { this.wrap_gravity.zpp_inner.x = this.gravityx, this.wrap_gravity.zpp_inner.y = this.gravityy; };
        e.prototype.getgravity = function () { var t, n; var r = e._nape, i = (t = this.gravityx) == null ? 0 : t, a = (n = this.gravityy) == null ? 0 : n; if (i !== i || a !== a)
            throw Error("Vec2 components cannot be NaN"); var o = r.geom.Vec2.get(i, a); this.wrap_gravity = o, this.wrap_gravity.zpp_inner._inuse = !0, this.wrap_gravity.zpp_inner._invalidate = this.gravity_invalidate.bind(this), this.wrap_gravity.zpp_inner._validate = this.gravity_validate.bind(this); };
        e.prototype.invalidate = function () { var e = this.shapes.head; for (; e != null;)
            e.elt.invalidate_fluidprops(), e = e.next; };
        return e;
    }()), Ti.zpp_pool = null, Ti._nape = null, Ti._wrapFn = null, Ei = Ti, Di = (function () {
        function e(e, t) {
            if (e === void 0) { e = 1; }
            if (t === void 0) { t = 1; }
            var n;
            if (Ei.zpp_pool == null ? n = new Ei : (n = Ei.zpp_pool, Ei.zpp_pool = n.next, n.next = null), this.zpp_inner = n, n.outer = this, e != n.density * 1e3) {
                if (e !== e)
                    throw Error("FluidProperties::density cannot be NaN");
                n.density = e / 1e3, n.invalidate();
            }
            if (t != n.viscosity) {
                if (t !== t)
                    throw Error("FluidProperties::viscosity cannot be NaN");
                if (t < 0)
                    throw Error("FluidProperties::viscosity (" + t + ") must be >= 0");
                n.viscosity = t / 1, n.invalidate();
            }
        }
        e._wrap = function (t) { return t instanceof e ? t : t && t instanceof Ei ? v(t, function (t) { var n = Object.create(e.prototype); return n.zpp_inner = t, t.outer = n, n; }) : null; };
        Object.defineProperty(e.prototype, "density", {
            get: function () { return this.zpp_inner.density * 1e3; },
            set: function (e) { if (e != this.zpp_inner.density * 1e3) {
                if (e !== e)
                    throw Error("FluidProperties::density cannot be NaN");
                this.zpp_inner.density = e / 1e3, this.zpp_inner.invalidate();
            } },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "viscosity", {
            get: function () { return this.zpp_inner.viscosity; },
            set: function (e) { if (e != this.zpp_inner.viscosity) {
                if (e !== e)
                    throw Error("FluidProperties::viscosity cannot be NaN");
                if (e < 0)
                    throw Error("FluidProperties::viscosity (" + e + ") must be >= 0");
                this.zpp_inner.viscosity = e / 1, this.zpp_inner.invalidate();
            } },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "gravity", {
            get: function () { return this.zpp_inner.wrap_gravity; },
            set: function (e) { if (e == null) {
                var e_447 = this.zpp_inner.wrap_gravity;
                e_447 != null && (e_447.zpp_inner._inuse = !1, e_447.dispose(), this.zpp_inner.wrap_gravity = null);
            }
            else {
                if (e.zpp_disp)
                    throw Error("Vec2 has been disposed and cannot be used!");
                this.zpp_inner.wrap_gravity == null && this.zpp_inner.getgravity(), this.zpp_inner.wrap_gravity.set(e);
            } },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "userData", {
            get: function () { return this.zpp_inner.userData == null && (this.zpp_inner.userData = {}), this.zpp_inner.userData; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "shapes", {
            get: function () { return this.zpp_inner.wrap_shapes == null && (this.zpp_inner.wrap_shapes = Fr.get(this.zpp_inner.shapes, !0)), this.zpp_inner.wrap_shapes; },
            enumerable: false,
            configurable: true
        });
        e.prototype.copy = function () { var t = new e(this.zpp_inner.density * 1e3, this.zpp_inner.viscosity); return this.zpp_inner.userData != null && (t.zpp_inner.userData = l({}, this.zpp_inner.userData)), t.gravity = this.zpp_inner.wrap_gravity, t; };
        e.prototype.toString = function () { return "{ density: " + this.zpp_inner.density * 1e3 + " viscosity: " + this.zpp_inner.viscosity + " gravity: " + String(this.zpp_inner.wrap_gravity) + " }"; };
        return e;
    }()), Ei._wrapFn = function (e) { return v(e, function (e) { var t = Object.create(Di.prototype); return t.zpp_inner = e, e.outer = t, t; }); }, Oi = d(), Oi.phys.FluidProperties = Di, ki = (function () {
        function e() {
            this.elasticity = 0, this.dynamicFriction = 1, this.staticFriction = 2, this.density = .001, this.rollingFriction = .01, this.shapes = null, this.wrap_shapes = null, this.outer = null, this.userData = null, this.next = null, this.shapes = new ft;
        }
        e.prototype.wrapper = function () { if (this.outer == null) {
            if (e._wrapFn)
                this.outer = e._wrapFn(this);
            else {
                this.outer = new e._nape.phys.Material;
                var t_375 = this.outer.zpp_inner;
                t_375.outer = null, t_375.next = e.zpp_pool, e.zpp_pool = t_375, this.outer.zpp_inner = this;
            }
        } return this.outer; };
        e.prototype.free = function () { this.outer = null; };
        e.prototype.feature_cons = function () { this.shapes = new ft; };
        e.prototype.addShape = function (e) { this.shapes.add(e); };
        e.prototype.remShape = function (e) { this.shapes.remove(e); };
        e.prototype.copy = function () { var t = new e; return t.dynamicFriction = this.dynamicFriction, t.staticFriction = this.staticFriction, t.density = this.density, t.elasticity = this.elasticity, t.rollingFriction = this.rollingFriction, t; };
        e.prototype.set = function (e) { this.dynamicFriction = e.dynamicFriction, this.staticFriction = e.staticFriction, this.density = e.density, this.elasticity = e.elasticity, this.rollingFriction = e.rollingFriction; };
        e.prototype.invalidate = function (e) { var t = this.shapes.head; for (; t != null;)
            t.elt.invalidate_material(e), t = t.next; };
        return e;
    }()), ki.zpp_pool = null, ki.WAKE = 1, ki.PROPS = 2, ki.ANGDRAG = 4, ki.ARBITERS = 8, ki._nape = null, ki._wrapFn = null, Z = ki, Ai = (function () {
        function e(e, t, n, r, i) {
            if (e === void 0) { e = 0; }
            if (t === void 0) { t = 1; }
            if (n === void 0) { n = 2; }
            if (r === void 0) { r = 1; }
            if (i === void 0) { i = .001; }
            var a;
            if (Z.zpp_pool == null ? a = new Z : (a = Z.zpp_pool, Z.zpp_pool = a.next, a.next = null), this.zpp_inner = a, a.outer = this, e !== a.elasticity) {
                if (e !== e)
                    throw Error("Material::elasticity cannot be NaN");
                a.elasticity = e, a.invalidate(Z.WAKE | Z.ARBITERS);
            }
            if (t !== a.dynamicFriction) {
                if (t !== t)
                    throw Error("Material::dynamicFriction cannot be NaN");
                if (t < 0)
                    throw Error("Material::dynamicFriction cannot be negative");
                a.dynamicFriction = t, a.invalidate(Z.WAKE | Z.ANGDRAG | Z.ARBITERS);
            }
            if (n !== a.staticFriction) {
                if (n !== n)
                    throw Error("Material::staticFriction cannot be NaN");
                if (n < 0)
                    throw Error("Material::staticFriction cannot be negative");
                a.staticFriction = n, a.invalidate(Z.WAKE | Z.ARBITERS);
            }
            if (r !== a.density * 1e3) {
                if (r !== r)
                    throw Error("Material::density cannot be NaN");
                if (r < 0)
                    throw Error("Material::density must be positive");
                a.density = r / 1e3, a.invalidate(Z.WAKE | Z.PROPS);
            }
            if (i !== a.rollingFriction) {
                if (i !== i)
                    throw Error("Material::rollingFriction cannot be NaN");
                if (i < 0)
                    throw Error("Material::rollingFriction cannot be negative");
                a.rollingFriction = i, a.invalidate(Z.WAKE | Z.ARBITERS);
            }
        }
        e._wrap = function (t) { return t instanceof e ? t : t && t instanceof Z ? v(t, function (t) { var n = Object.create(e.prototype); return n.zpp_inner = t, t.outer = n, n; }) : null; };
        Object.defineProperty(e.prototype, "elasticity", {
            get: function () { return this.zpp_inner.elasticity; },
            set: function (e) { if (e !== this.zpp_inner.elasticity) {
                if (e !== e)
                    throw Error("Material::elasticity cannot be NaN");
                this.zpp_inner.elasticity = e, this.zpp_inner.invalidate(Z.WAKE | Z.ARBITERS);
            } },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "dynamicFriction", {
            get: function () { return this.zpp_inner.dynamicFriction; },
            set: function (e) { if (e !== this.zpp_inner.dynamicFriction) {
                if (e !== e)
                    throw Error("Material::dynamicFriction cannot be NaN");
                if (e < 0)
                    throw Error("Material::dynamicFriction cannot be negative");
                this.zpp_inner.dynamicFriction = e, this.zpp_inner.invalidate(Z.WAKE | Z.ANGDRAG | Z.ARBITERS);
            } },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "staticFriction", {
            get: function () { return this.zpp_inner.staticFriction; },
            set: function (e) { if (e !== this.zpp_inner.staticFriction) {
                if (e !== e)
                    throw Error("Material::staticFriction cannot be NaN");
                if (e < 0)
                    throw Error("Material::staticFriction cannot be negative");
                this.zpp_inner.staticFriction = e, this.zpp_inner.invalidate(Z.WAKE | Z.ARBITERS);
            } },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "density", {
            get: function () { return this.zpp_inner.density * 1e3; },
            set: function (e) { if (e !== this.zpp_inner.density * 1e3) {
                if (e !== e)
                    throw Error("Material::density cannot be NaN");
                if (e < 0)
                    throw Error("Material::density must be positive");
                this.zpp_inner.density = e / 1e3, this.zpp_inner.invalidate(Z.WAKE | Z.PROPS);
            } },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "rollingFriction", {
            get: function () { return this.zpp_inner.rollingFriction; },
            set: function (e) { if (e !== this.zpp_inner.rollingFriction) {
                if (e !== e)
                    throw Error("Material::rollingFriction cannot be NaN");
                if (e < 0)
                    throw Error("Material::rollingFriction cannot be negative");
                this.zpp_inner.rollingFriction = e, this.zpp_inner.invalidate(Z.WAKE | Z.ARBITERS);
            } },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "userData", {
            get: function () { return this.zpp_inner.userData == null && (this.zpp_inner.userData = {}), this.zpp_inner.userData; },
            enumerable: false,
            configurable: true
        });
        e.prototype.copy = function () { var t = new e(this.zpp_inner.elasticity, this.zpp_inner.dynamicFriction, this.zpp_inner.staticFriction, this.zpp_inner.density * 1e3, this.zpp_inner.rollingFriction); return this.zpp_inner.userData != null && (t.zpp_inner.userData = l({}, this.zpp_inner.userData)), t; };
        e.prototype.toString = function () { return "{ elasticity: " + this.zpp_inner.elasticity + " dynamicFriction: " + this.zpp_inner.dynamicFriction + " staticFriction: " + this.zpp_inner.staticFriction + " density: " + this.zpp_inner.density * 1e3 + " rollingFriction: " + this.zpp_inner.rollingFriction + " }"; };
        e.wood = function () { return new e(.4, .2, .38, .7, .005); };
        e.steel = function () { return new e(.2, .57, .74, 7.8, .001); };
        e.ice = function () { return new e(.3, .03, .1, .9, 1e-4); };
        e.rubber = function () { return new e(.8, 1, 1.4, 1.5, .01); };
        e.glass = function () { return new e(.4, .4, .94, 2.6, .002); };
        e.sand = function () { return new e(-1, .45, .6, 1.6, 16); };
        return e;
    }()), Z._wrapFn = function (e) { return v(e, function (e) { var t = Object.create(Ai.prototype); return t.zpp_inner = e, e.outer = t, t; }); }, ji = (function () {
        function e() {
            if (!U.internal)
                throw Error("Cannot instantiate GravMassMode derp!");
        }
        Object.defineProperty(e, "DEFAULT", {
            get: function () { return U.GravMassMode_DEFAULT == null && (U.internal = !0, U.GravMassMode_DEFAULT = new e, U.internal = !1), U.GravMassMode_DEFAULT; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e, "FIXED", {
            get: function () { return U.GravMassMode_FIXED == null && (U.internal = !0, U.GravMassMode_FIXED = new e, U.internal = !1), U.GravMassMode_FIXED; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e, "SCALED", {
            get: function () { return U.GravMassMode_SCALED == null && (U.internal = !0, U.GravMassMode_SCALED = new e, U.internal = !1), U.GravMassMode_SCALED; },
            enumerable: false,
            configurable: true
        });
        e.prototype.toString = function () { return this === U.GravMassMode_DEFAULT ? "DEFAULT" : this === U.GravMassMode_FIXED ? "FIXED" : this === U.GravMassMode_SCALED ? "SCALED" : ""; };
        return e;
    }()), Mi = (function () {
        function e() {
            if (!U.internal)
                throw Error("Cannot instantiate InertiaMode derp!");
        }
        Object.defineProperty(e, "DEFAULT", {
            get: function () { return U.InertiaMode_DEFAULT == null && (U.internal = !0, U.InertiaMode_DEFAULT = new e, U.internal = !1), U.InertiaMode_DEFAULT; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e, "FIXED", {
            get: function () { return U.InertiaMode_FIXED == null && (U.internal = !0, U.InertiaMode_FIXED = new e, U.internal = !1), U.InertiaMode_FIXED; },
            enumerable: false,
            configurable: true
        });
        e.prototype.toString = function () { return this === U.InertiaMode_DEFAULT ? "DEFAULT" : this === U.InertiaMode_FIXED ? "FIXED" : ""; };
        return e;
    }()), Ni = (function () {
        function e() {
            if (!U.internal)
                throw Error("Cannot instantiate MassMode derp!");
        }
        Object.defineProperty(e, "DEFAULT", {
            get: function () { return U.MassMode_DEFAULT == null && (U.internal = !0, U.MassMode_DEFAULT = new e, U.internal = !1), U.MassMode_DEFAULT; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e, "FIXED", {
            get: function () { return U.MassMode_FIXED == null && (U.internal = !0, U.MassMode_FIXED = new e, U.internal = !1), U.MassMode_FIXED; },
            enumerable: false,
            configurable: true
        });
        e.prototype.toString = function () { return this === U.MassMode_DEFAULT ? "DEFAULT" : this === U.MassMode_FIXED ? "FIXED" : ""; };
        return e;
    }()), Pi = (function () {
        function e() {
            if (!U.internal)
                throw Error("Cannot instantiate ShapeType derp!");
        }
        Object.defineProperty(e, "CIRCLE", {
            get: function () { return U.ShapeType_CIRCLE == null && (U.internal = !0, U.ShapeType_CIRCLE = new e, U.internal = !1), U.ShapeType_CIRCLE; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e, "POLYGON", {
            get: function () { return U.ShapeType_POLYGON == null && (U.internal = !0, U.ShapeType_POLYGON = new e, U.internal = !1), U.ShapeType_POLYGON; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e, "CAPSULE", {
            get: function () { return U.ShapeType_CAPSULE == null && (U.internal = !0, U.ShapeType_CAPSULE = new e, U.internal = !1), U.ShapeType_CAPSULE; },
            enumerable: false,
            configurable: true
        });
        e.prototype.toString = function () { return this === U.ShapeType_CIRCLE ? "CIRCLE" : this === U.ShapeType_POLYGON ? "POLYGON" : this === U.ShapeType_CAPSULE ? "CAPSULE" : ""; };
        return e;
    }()), Fi = (function () {
        function Fi() {
        }
        Fi.validateShape = function (e) { e.type == 1 && e.polygon.validate_gaxi(), e.validate_aabb(), e.validate_worldCOM(); };
        return Fi;
    }()), zi = (function (_super) {
        __extends(e, _super);
        function e() {
            return _super.call(this) || this;
        }
        e._wrap = function (t) { var n, r, i, a; if (!t)
            return null; if (t instanceof e)
            return t; var o = (n = t.zpp_inner) == null ? t : n; if (o._isCapsule && Ri)
            return Ri(t); var s = t.isCircle ? t.isCircle() ? 0 : (r = t.isPolygon) != null && r.call(t) ? 1 : (i = o.type) == null ? -1 : i : (a = o.type) == null ? -1 : a; return s === 0 && Ii ? Ii(t) : s === 1 && Li ? Li(t) : t.outer ? t.outer : v(t, function (t) { var n, r; var i = Object.create(e.prototype); return i.zpp_inner = (n = t.zpp_inner) == null ? t : n, i.zpp_inner_i = (r = t.zpp_inner_i) == null ? t : r, i; }); };
        Object.defineProperty(e.prototype, "type", {
            get: function () { var e = this.zpp_inner.type; return e === 0 ? Pi.CIRCLE : e === 1 ? Pi.POLYGON : Pi.CAPSULE; },
            enumerable: false,
            configurable: true
        });
        e.prototype.isCircle = function () { return this.zpp_inner.type === 0; };
        e.prototype.isPolygon = function () { return this.zpp_inner.type === 1; };
        e.prototype.isCapsule = function () { return !!this.zpp_inner._isCapsule; };
        Object.defineProperty(e.prototype, "body", {
            get: function () { var e = this.zpp_inner; return e.body == null ? null : e.body.outer; },
            set: function (e) { var t = this.zpp_inner; t.immutable_midstep("Shape::body"); var n = t.body == null ? null : t.body.outer; if (n !== e && (t.body != null && n.zpp_inner.wrap_shapes.remove(this), e != null)) {
                var t_376 = e.zpp_inner.wrap_shapes;
                t_376.zpp_inner.reverse_flag ? t_376.push(this) : t_376.unshift(this);
            } },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "castCircle", {
            get: function () { var e = this.zpp_inner; if (e.type === 0) {
                var t_377 = e.circle.outer_zn;
                return Ii ? Ii(t_377) : t_377;
            } return null; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "castPolygon", {
            get: function () { var e = this.zpp_inner; if (e.type === 1) {
                var t_378 = e.polygon.outer_zn;
                return Li ? Li(t_378) : t_378;
            } return null; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "castCapsule", {
            get: function () { var e = this.zpp_inner; if (e._isCapsule) {
                var t_379 = e.outer;
                return Ri ? Ri(t_379) : t_379;
            } return null; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "worldCOM", {
            get: function () { var e = this.zpp_inner; return e.wrap_worldCOM == null && this._setupWorldCOM(), e.wrap_worldCOM; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "localCOM", {
            get: function () { var e = this.zpp_inner; return e.wrap_localCOM == null && (e.type === 0 ? e.circle.setupLocalCOM() : e.polygon.setupLocalCOM()), e.wrap_localCOM; },
            set: function (e) { var t = this.zpp_inner; if (t.immutable_midstep("Body::localCOM"), e != null && e.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!"); if (t.body != null && t.body.space != null && t.body.type === 1)
                throw Error("Error: Cannot modify Shape belonging to a static Object once inside a Space"); if (e == null)
                throw Error("Shape::localCOM cannot be null"); t.wrap_localCOM == null && (t.type === 0 ? t.circle.setupLocalCOM() : t.polygon.setupLocalCOM()), t.wrap_localCOM.set(e), !e.zpp_disp && e.zpp_inner.weak && e.dispose(); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "area", {
            get: function () { var e = this.zpp_inner; return e.validate_area_inertia(), e.area; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "inertia", {
            get: function () { var e = this.zpp_inner; return e.validate_area_inertia(), e.inertia; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "angDrag", {
            get: function () { var e = this.zpp_inner; return e.validate_angDrag(), e.angDrag; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "material", {
            get: function () { return this.zpp_inner.material.wrapper(); },
            set: function (e) { var t = this.zpp_inner; if (t.immutable_midstep("Shape::material"), e == null)
                throw Error("Cannot assign null as Shape material"); t.setMaterial(e.zpp_inner); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "filter", {
            get: function () { return this.zpp_inner.filter.wrapper(); },
            set: function (e) { var t = this.zpp_inner; if (t.immutable_midstep("Shape::filter"), e == null)
                throw Error("Cannot assign null as Shape filter"); t.setFilter(e.zpp_inner); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "fluidProperties", {
            get: function () { var e = this.zpp_inner; return e.immutable_midstep("Shape::fluidProperties"), e.fluidProperties == null && e.setFluid(new Di().zpp_inner), e.fluidProperties.wrapper(); },
            set: function (e) { var t = this.zpp_inner; if (e == null)
                throw Error("Error: Cannot assign null as Shape fluidProperties, disable fluids by setting fluidEnabled to false"); t.setFluid(e.zpp_inner), t.immutable_midstep("Shape::fluidProperties"), t.fluidProperties == null && t.setFluid(new Di().zpp_inner); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "cbTypes", {
            get: function () { this.zpp_inner_i.wrap_cbTypes == null && this.zpp_inner_i.setupcbTypes(); var e = this.zpp_inner_i.wrap_cbTypes; return { add: function (t) { e.add(t); }, remove: function (t) { e.remove(t); }, has: function (t) { return e.has(t); }, clear: function () { e.clear(); }, get length() { return e.length; } }; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "fluidEnabled", {
            get: function () { return this.zpp_inner.fluidEnabled; },
            set: function (e) { var t = this.zpp_inner; if (t.immutable_midstep("Shape::fluidEnabled"), t.fluidEnabled = e, e && t.fluidProperties == null) {
                var e_448 = new Di;
                t.setFluid(e_448.zpp_inner), t.immutable_midstep("Shape::fluidProperties"), t.fluidProperties == null && t.setFluid(new Di().zpp_inner), t.fluidProperties.wrapper();
            } t.wake(); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "sensorEnabled", {
            get: function () { return this.zpp_inner.sensorEnabled; },
            set: function (e) { var t = this.zpp_inner; t.immutable_midstep("Shape::sensorEnabled"), t.sensorEnabled = e, t.wake(); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "bounds", {
            get: function () { return this.zpp_inner.aabb.wrapper(); },
            enumerable: false,
            configurable: true
        });
        e.prototype.translate = function (e) { var t = this.zpp_inner; if (t.immutable_midstep("Shape::translate()"), e != null && e.zpp_disp)
            throw Error("Vec2 has been disposed and cannot be used!"); if (t.body != null && t.body.space != null && t.body.type === 1)
            throw Error("Error: Cannot modify Shape belonging to a static Object once inside a Space"); if (e == null)
            throw Error("Cannot displace Shape by null Vec2"); if (e.lsq() > 0) {
            var n_322 = e.zpp_inner;
            n_322._validate != null && n_322._validate();
            var r_280 = n_322.x;
            n_322._validate != null && n_322._validate();
            var i_196 = n_322.y;
            (t.type === 0 ? t.circle : t.type === 1 ? t.polygon : t.capsule).__translate(r_280, i_196);
        } return e.zpp_inner.weak && e.dispose(), this; };
        e.prototype.scale = function (e, t) { var n = this.zpp_inner; if (n.immutable_midstep("Shape::scale()"), n.body != null && n.body.space != null && n.body.type === 1)
            throw Error("Error: Cannot modify Shape belonging to a static Object once inside a Space"); if (e !== e || t !== t)
            throw Error("Cannot scale Shape by NaN"); if (e === 0 || t === 0)
            throw Error("Cannot Scale shape by a factor of 0"); if (n.type === 0) {
            var r_281 = e * e - t * t;
            if (r_281 * r_281 < R.epsilon * R.epsilon)
                n.circle.__scale(e, t);
            else
                throw Error("Cannot perform a non equal scaling on a Circle");
        }
        else
            n.type === 1 ? n.polygon.__scale(e, t) : n.capsule.__scale(e, t); return this; };
        e.prototype.rotate = function (e) { var t = this.zpp_inner; if (t.immutable_midstep("Shape::rotate()"), t.body != null && t.body.space != null && t.body.type === 1)
            throw Error("Error: Cannot modify Shape belonging to a static Object once inside a Space"); if (e !== e)
            throw Error("Cannot rotate Shape by NaN"); if (e % (2 * Math.PI) != 0) {
            var n_323 = Math.cos(e), r_282 = Math.sin(e);
            t.type === 0 ? t.circle.__rotate(r_282, n_323) : t.type === 1 ? t.polygon.__rotate(r_282, n_323) : t.capsule.__rotate(r_282, n_323);
        } return this; };
        e.prototype.transform = function (e) { var t = this.zpp_inner; if (t.immutable_midstep("Shape::transform()"), t.body != null && t.body.space != null && t.body.type === 1)
            throw Error("Error: Cannot modify Shape belonging to a static Object once inside a Space"); if (e == null)
            throw Error("Cannot transform Shape by null matrix"); var n = e; if (n.singular())
            throw Error("Cannot transform Shape by a singular matrix"); if (t.type === 0) {
            if (n.equiorthogonal())
                t.circle.__transform(n);
            else
                throw Error("Cannot transform Circle by a non equiorthogonal matrix");
        }
        else
            t.type === 1 ? t.polygon.__transform(n) : t.capsule.__transform(n); return this; };
        e.prototype.contains = function (e) { var t = this.zpp_inner; if (e != null && e.zpp_disp)
            throw Error("Vec2 has been disposed and cannot be used!"); if (e == null)
            throw Error("Cannot check null point for containment"); if ((t.body == null ? null : t.body.outer) == null)
            throw Error("Shape is not well defined without a Body"); Fi.validateShape(t); var n = e.zpp_inner; n._validate != null && n._validate(); var r = Jr.shapeContains(t, n); return n.weak && e.dispose(), r; };
        e.prototype.copy = function () { var t = this.zpp_inner.copy(); return t instanceof e ? t : e._wrap(t); };
        e.prototype.toString = function () { var e = this.zpp_inner; return (e.type === 0 ? "Circle" : e.type === 1 ? "Polygon" : "Capsule") + "#" + this.zpp_inner_i.id; };
        e.prototype._setupWorldCOM = function () { var e = d(), t = this.zpp_inner, n = t.worldCOMx, r = t.worldCOMy; if (n !== n || r !== r)
            throw Error("Vec2 components cannot be NaN"); t.wrap_worldCOM = e.geom.Vec2.get(n, r), t.wrap_worldCOM.zpp_inner._inuse = !0, t.wrap_worldCOM.zpp_inner._immutable = !0, t.wrap_worldCOM.zpp_inner._validate = t.getworldCOM.bind(t); };
        return e;
    }(xr)), Bi = (function () {
        function e() {
            this.collisionGroup = 1, this.collisionMask = -1, this.sensorGroup = 1, this.sensorMask = -1, this.fluidGroup = 1, this.fluidMask = -1, this.shapes = null, this.wrap_shapes = null, this.outer = null, this.userData = null, this.next = null, this.shapes = new ft;
        }
        e.prototype.wrapper = function () { if (this.outer == null) {
            if (e._wrapFn)
                this.outer = e._wrapFn(this);
            else {
                this.outer = new e._nape.dynamics.InteractionFilter;
                var t_380 = this.outer.zpp_inner;
                t_380.outer = null, t_380.next = e.zpp_pool, e.zpp_pool = t_380, this.outer.zpp_inner = this;
            }
        } return this.outer; };
        e.prototype.free = function () { this.outer = null; };
        e.prototype.feature_cons = function () { this.shapes = new ft; };
        e.prototype.addShape = function (e) { this.shapes.add(e); };
        e.prototype.remShape = function (e) { this.shapes.remove(e); };
        e.prototype.copy = function () { var t; return e.zpp_pool == null ? t = new e : (t = e.zpp_pool, e.zpp_pool = t.next, t.next = null), t.collisionGroup = this.collisionGroup, t.collisionMask = this.collisionMask, t.sensorGroup = this.sensorGroup, t.sensorMask = this.sensorMask, t.fluidGroup = this.fluidGroup, t.fluidMask = this.fluidMask, t; };
        e.prototype.shouldCollide = function (e) { return (this.collisionMask & e.collisionGroup) !== 0 && (e.collisionMask & this.collisionGroup) !== 0; };
        e.prototype.shouldSense = function (e) { return (this.sensorMask & e.sensorGroup) !== 0 && (e.sensorMask & this.sensorGroup) !== 0; };
        e.prototype.shouldFlow = function (e) { return (this.fluidMask & e.fluidGroup) !== 0 && (e.fluidMask & this.fluidGroup) !== 0; };
        e.prototype.invalidate = function () { var e = this.shapes.head; for (; e != null;)
            e.elt.invalidate_filter(), e = e.next; };
        return e;
    }()), Bi.zpp_pool = null, Bi._nape = null, Bi._wrapFn = null, Vi = Bi, Hi = (function () {
        function e() {
        }
        e.prototype._initShape = function (e) { Or.initFields(this), this.pairs = new Mt, this.ishape = this, this.type = e; var t = An.get(0, 0, 0, 0); this.aabb = t, this.aabb._immutable = !0, this.aabb._validate = this.aabb_validate.bind(this), this.zip_area_inertia = this.zip_angDrag = this.zip_localCOM = this.zip_sweepRadius = !0, this.localCOMx = 0, this.localCOMy = 0, this.worldCOMx = 0, this.worldCOMy = 0, this.fluidEnabled = !1, this.sensorEnabled = !1, this.fluidProperties = null, this.body = null, this.refmaterial = new Z, this.sweepRadius = this.sweepCoef = 0; };
        e._init = function () { if (!e._initialized) {
            e._initialized = !0;
            for (var _b = 0, _c = Object.getOwnPropertyNames(Or.prototype); _b < _c.length; _b++) {
                var t_381 = _c[_b];
                t_381 !== "constructor" && !Object.prototype.hasOwnProperty.call(e.prototype, t_381) && (e.prototype[t_381] = Or.prototype[t_381]);
            }
        } };
        e.prototype.isCircle = function () { return this.type === 0; };
        e.prototype.isPolygon = function () { return this.type === 1; };
        e.prototype.validate_sweepRadius = function () { this.zip_sweepRadius && (this.zip_sweepRadius = !1, this.type === 0 ? this.circle.__validate_sweepRadius() : this.polygon.__validate_sweepRadius()); };
        e.prototype.validate_aabb = function () { this.zip_aabb && this.body != null && (this.zip_aabb = !1, this.type === 0 ? this.circle.__validate_aabb() : this.polygon.__validate_aabb()); };
        e.prototype.validate_area_inertia = function () { this.zip_area_inertia && (this.zip_area_inertia = !1, this.type === 0 ? this.circle.__validate_area_inertia() : this.polygon.__validate_area_inertia()); };
        e.prototype.validate_angDrag = function () { (this.zip_angDrag || this.refmaterial.dynamicFriction !== this.material.dynamicFriction) && (this.zip_angDrag = !1, this.refmaterial.dynamicFriction = this.material.dynamicFriction, this.type === 0 ? this.circle.__validate_angDrag() : this.polygon.__validate_angDrag()); };
        e.prototype.validate_localCOM = function () { this.zip_localCOM && (this.zip_localCOM = !1, this.type === 1 && this.polygon.__validate_localCOM(), this.wrap_localCOM != null && (this.wrap_localCOM.zpp_inner.x = this.localCOMx, this.wrap_localCOM.zpp_inner.y = this.localCOMy)); };
        e.prototype.validate_worldCOM = function () { if (this.zip_worldCOM && this.body != null) {
            this.zip_worldCOM = !1, this.validate_localCOM();
            var e_449 = this.body;
            e_449.zip_axis && (e_449.zip_axis = !1, e_449.axisx = Math.sin(e_449.rot), e_449.axisy = Math.cos(e_449.rot)), this.worldCOMx = e_449.posx + (e_449.axisy * this.localCOMx - e_449.axisx * this.localCOMy), this.worldCOMy = e_449.posy + (this.localCOMx * e_449.axisx + this.localCOMy * e_449.axisy);
        } };
        e.prototype.getworldCOM = function () { if (this.body == null)
            throw Error("worldCOM only makes sense when Shape belongs to a Body"); this.validate_worldCOM(), this.wrap_worldCOM.zpp_inner.x = this.worldCOMx, this.wrap_worldCOM.zpp_inner.y = this.worldCOMy; };
        e.prototype.invalidate_area_inertia = function () { this.zip_area_inertia = !0, this.body != null && (this.body.zip_localCOM = !0, this.body.zip_worldCOM = !0, this.body.invalidate_mass(), this.body.invalidate_inertia()); };
        e.prototype.invalidate_angDrag = function () { this.zip_angDrag = !0; };
        e.prototype.invalidate_localCOM = function () { this.zip_localCOM = !0, this.invalidate_area_inertia(), this.type === 0 && (this.zip_sweepRadius = !0), this.invalidate_angDrag(), this.invalidate_worldCOM(), this.body != null && (this.body.zip_localCOM = !0, this.body.zip_worldCOM = !0); };
        e.prototype.invalidate_worldCOM = function () { this.zip_worldCOM = !0, this.zip_aabb = !0, this.body != null && (this.body.zip_aabb = !0); };
        e.prototype.invalidate_material = function (e) { (e & Z.WAKE) !== 0 && this.wake(), (e & Z.ARBITERS) !== 0 && this.body != null && this.body.refreshArbiters(), (e & Z.PROPS) !== 0 && this.body != null && (this.body.zip_localCOM = !0, this.body.zip_worldCOM = !0, this.body.invalidate_mass(), this.body.invalidate_inertia()), (e & Z.ANGDRAG) !== 0 && this.invalidate_angDrag(), this.refmaterial.set(this.material); };
        e.prototype.invalidate_filter = function () { this.wake(); };
        e.prototype.invalidate_fluidprops = function () { this.fluidEnabled && this.wake(); };
        e.prototype.aabb_validate = function () { if (this.body == null)
            throw Error("bounds only makes sense when Shape belongs to a Body"); this.validate_aabb(); };
        e.prototype.setMaterial = function (e) { this.material !== e && (this.body != null && this.body.space != null && this.material != null && this.material.shapes.remove(this), this.material = e, this.body != null && this.body.space != null && e.shapes.add(this), this.wake(), this.body != null && this.body.refreshArbiters()); };
        e.prototype.setFilter = function (e) { this.filter !== e && (this.body != null && this.body.space != null && this.filter != null && this.filter.shapes.remove(this), this.filter = e, this.body != null && this.body.space != null && e.shapes.add(this), this.wake()); };
        e.prototype.setFluid = function (e) { this.fluidProperties !== e && (this.body != null && this.body.space != null && this.fluidProperties != null && this.fluidProperties.shapes.remove(this), this.fluidProperties = e, this.body != null && this.body.space != null && e.shapes.add(this), this.fluidEnabled && this.wake()); };
        e.prototype.__immutable_midstep = function (e) { if (this.body != null && this.body.space != null && this.body.space.midstep)
            throw Error("".concat(e, " cannot be set during a space step() (e.g. from a PreListener). Record the change there and apply it after step() returns.")); };
        e.prototype.addedToBody = function () { this.invalidate_worldCOM(), this.zip_aabb = !0, this.body != null && (this.body.zip_aabb = !0); };
        e.prototype.removedFromBody = function () { };
        e.prototype.addedToSpace = function () { this.__iaddedToSpace(), this.material.shapes.add(this), this.filter.shapes.add(this), this.fluidProperties != null && this.fluidProperties.shapes.add(this); };
        e.prototype.removedFromSpace = function () { this.__iremovedFromSpace(), this.material.shapes.remove(this), this.filter.shapes.remove(this), this.fluidProperties != null && this.fluidProperties.shapes.remove(this); };
        e.prototype.copy = function () { var e = this.type === 0 ? this.circle.__copy() : this.polygon.__copy(); this.zip_area_inertia ? e.invalidate_area_inertia() : (e.area = this.area, e.inertia = this.inertia), this.zip_sweepRadius ? e.zip_sweepRadius = !0 : (e.sweepRadius = this.sweepRadius, e.sweepCoef = this.sweepCoef), this.zip_angDrag ? e.invalidate_angDrag() : e.angDrag = this.angDrag, this.zip_aabb ? (e.zip_aabb = !0, e.body != null && (e.body.zip_aabb = !0)) : (e.aabb.minx = this.aabb.minx, e.aabb.miny = this.aabb.miny, e.aabb.maxx = this.aabb.maxx, e.aabb.maxy = this.aabb.maxy); var t = e.material; t.outer = null, t.next = Z.zpp_pool, Z.zpp_pool = t; var n = e.filter; return n.outer = null, n.next = Vi.zpp_pool, Vi.zpp_pool = n, e.material = this.material, e.filter = this.filter, this.fluidProperties != null && (e.fluidProperties = this.fluidProperties), e.fluidEnabled = this.fluidEnabled, e.sensorEnabled = this.sensorEnabled, this.userData != null && (e.userData = Object.assign({}, this.userData)), this.copyto(e.outer), e.outer; };
        return e;
    }()), Hi._initialized = !1, Ui = Hi, Wi = (function () {
        function e() {
            this.radius = 0, this.outer_zn = null, this.radius = 0, this.outer_zn = null, this._initShape(0), this.circle = this, this.zip_localCOM = !1;
        }
        e._init = function () { if (e._initialized)
            return; e._initialized = !0; var t = Ui.prototype, n = e.prototype; for (var e_450 in t)
            Object.prototype.hasOwnProperty.call(n, e_450) || (n[e_450] = t[e_450]); for (var _b = 0, _c = Object.getOwnPropertyNames(t); _b < _c.length; _b++) {
            var e_451 = _c[_b];
            e_451 !== "constructor" && !Object.prototype.hasOwnProperty.call(n, e_451) && (n[e_451] = t[e_451]);
        } };
        e.prototype.invalidate_radius = function () { this.invalidate_area_inertia(), this.invalidate_angDrag(), this.zip_aabb = !0, this.body != null && (this.body.zip_aabb = !0), this.body != null && this.body.wake(); };
        e.prototype.localCOM_validate = function () { this.wrap_localCOM.zpp_inner.x = this.localCOMx, this.wrap_localCOM.zpp_inner.y = this.localCOMy; };
        e.prototype.localCOM_invalidate = function (e) { this.localCOMx = e.x, this.localCOMy = e.y, this.invalidate_localCOM(), this.body != null && this.body.wake(); };
        e.prototype.localCOM_immutable = function () { if (this.body != null && this.body.type === 1 && this.body.space != null)
            throw Error("Error: Cannot modify localCOM of Circle added to a static Body whilst within a Space"); };
        e.prototype.setupLocalCOM = function () { var t = e._nape, n = this.localCOMx, r = this.localCOMy, i = t.geom.Vec2.get(n, r); this.wrap_localCOM = i, this.wrap_localCOM.zpp_inner._inuse = !0, this.wrap_localCOM.zpp_inner._validate = this.localCOM_validate.bind(this), this.wrap_localCOM.zpp_inner._invalidate = this.localCOM_invalidate.bind(this), this.wrap_localCOM.zpp_inner._isimmutable = this.localCOM_immutable.bind(this); };
        e.prototype.__validate_aabb = function () { this.validate_worldCOM(); var e = this.radius, t = this.radius; this.aabb.minx = this.worldCOMx - e, this.aabb.miny = this.worldCOMy - t, this.aabb.maxx = this.worldCOMx + e, this.aabb.maxy = this.worldCOMy + t; };
        e.prototype.__validate_sweepRadius = function () { this.sweepCoef = Math.sqrt(this.localCOMx * this.localCOMx + this.localCOMy * this.localCOMy), this.sweepRadius = this.sweepCoef + this.radius; };
        e.prototype.__validate_area_inertia = function () { var e = this.radius * this.radius; this.area = e * Math.PI, this.inertia = e * .5 + (this.localCOMx * this.localCOMx + this.localCOMy * this.localCOMy); };
        e.prototype.__validate_angDrag = function () { var e = this.localCOMx * this.localCOMx + this.localCOMy * this.localCOMy, t = this.radius * this.radius, n = this.material.dynamicFriction * R.fluidAngularDragFriction; this.angDrag = (e + 2 * t) * n + .5 * R.fluidAngularDrag * (1 + R.fluidVacuumDrag) * e, this.angDrag /= 2 * (e + .5 * t); };
        e.prototype.__scale = function (e, t) { var n = ((e < 0 ? -e : e) + (t < 0 ? -t : t)) / 2; this.radius *= n < 0 ? -n : n, this.invalidate_radius(), this.localCOMx * this.localCOMx + this.localCOMy * this.localCOMy > 0 && (this.localCOMx *= e, this.localCOMy *= t, this.invalidate_localCOM()); };
        e.prototype.__translate = function (e, t) { this.localCOMx += e, this.localCOMy += t, this.invalidate_localCOM(); };
        e.prototype.__rotate = function (e, t) { if (this.localCOMx * this.localCOMx + this.localCOMy * this.localCOMy > 0) {
            var n_324 = t * this.localCOMx - e * this.localCOMy, r_283 = this.localCOMx * e + this.localCOMy * t;
            this.localCOMx = n_324, this.localCOMy = r_283, this.invalidate_localCOM();
        } };
        e.prototype.__transform = function (e) { var t = e.zpp_inner.a * e.zpp_inner.d - e.zpp_inner.b * e.zpp_inner.c; t < 0 && (t = -t), this.radius *= Math.sqrt(t); var n = e.zpp_inner.a * this.localCOMx + e.zpp_inner.b * this.localCOMy + e.zpp_inner.tx; this.localCOMy = e.zpp_inner.c * this.localCOMx + e.zpp_inner.d * this.localCOMy + e.zpp_inner.ty, this.localCOMx = n, this.invalidate_radius(), this.invalidate_localCOM(); };
        e.prototype.__copy = function () { var t = new e._nape.shape.Circle(this.radius).zpp_inner_zn; return t.localCOMx = this.localCOMx, t.localCOMy = this.localCOMy, t.zip_localCOM = !1, t; };
        return e;
    }()), Wi._nape = null, Wi._initialized = !1, Gi = Wi, Ki = (function () {
        function Ki() {
        }
        return Ki;
    }()), Ki.FMAX = 1e100, qi = (function (_super) {
        __extends(e, _super);
        function e(e, t, n, r) {
            if (e === void 0) { e = 50; }
            var _this = _super.call(this) || this;
            var i = new Gi;
            if (_this.zpp_inner_zn = i, _this.zpp_inner = i, _this.zpp_inner_i = i, i.outer = _this, i.outer_zn = _this, i.outer_i = _this, e !== i.radius) {
                if (e !== e)
                    throw Error("Circle::radius cannot be NaN");
                if (e < R.epsilon)
                    throw Error("Circle::radius (" + e + ") must be > Config.epsilon");
                if (e > Ki.FMAX)
                    throw Error("Circle::radius (" + e + ") must be < PR(Const).FMAX");
                i.radius = e, i.invalidate_radius();
            }
            if (t != null) {
                if (t.zpp_disp)
                    throw Error("Vec2 has been disposed and cannot be used!");
                var e_452 = t.zpp_inner;
                e_452._validate != null && e_452._validate(), i.localCOMx = e_452.x, e_452._validate != null && e_452._validate(), i.localCOMy = e_452.y, e_452.weak && t.dispose();
            }
            else
                i.localCOMx = 0, i.localCOMy = 0;
            n == null ? Z.zpp_pool == null ? i.material = new Z : (i.material = Z.zpp_pool, Z.zpp_pool = i.material.next, i.material.next = null) : (i.immutable_midstep("Shape::material"), i.setMaterial(n.zpp_inner), i.material.wrapper()), r == null ? Vi.zpp_pool == null ? i.filter = new Vi : (i.filter = Vi.zpp_pool, Vi.zpp_pool = i.filter.next, i.filter.next = null) : (i.immutable_midstep("Shape::filter"), i.setFilter(r.zpp_inner), i.filter.wrapper()), i.insert_cbtype(Br.ANY_SHAPE.zpp_inner);
            return _this;
        }
        e._wrap = function (t) { return t ? t instanceof e ? t : t instanceof Gi ? v(t, function (t) { var n = Object.create(e.prototype); return n.zpp_inner_zn = t, n.zpp_inner = t, n.zpp_inner_i = t, t.outer = n, t.outer_zn = n, t.outer_i = n, n; }) : t.zpp_inner_zn ? e._wrap(t.zpp_inner_zn) : v(t, function (t) { var n = Object.create(e.prototype); return n.zpp_inner_i = t.zpp_inner_i, n; }) : null; };
        Object.defineProperty(e.prototype, "radius", {
            get: function () { return this.zpp_inner_zn.radius; },
            set: function (e) { var t = this.zpp_inner_zn; if (this.zpp_inner.immutable_midstep("Circle::radius"), t.body != null && t.body.type === 1 && t.body.space != null)
                throw Error("Error: Cannot modifiy radius of Circle contained in static object once added to space"); if (e !== t.radius) {
                if (e !== e)
                    throw Error("Circle::radius cannot be NaN");
                if (e < R.epsilon)
                    throw Error("Circle::radius (" + e + ") must be > Config.epsilon");
                if (e > Ki.FMAX)
                    throw Error("Circle::radius (" + e + ") must be < PR(Const).FMAX");
                t.radius = e, t.invalidate_radius();
            } },
            enumerable: false,
            configurable: true
        });
        return e;
    }(zi)), le(function (e) { return qi._wrap(e); }), Ji = (function () {
        function e(e, t, n, r, i, a) {
            if (e === void 0) { e = 1; }
            if (t === void 0) { t = -1; }
            if (n === void 0) { n = 1; }
            if (r === void 0) { r = -1; }
            if (i === void 0) { i = 1; }
            if (a === void 0) { a = -1; }
            var o;
            Vi.zpp_pool == null ? o = new Vi : (o = Vi.zpp_pool, Vi.zpp_pool = o.next, o.next = null), this.zpp_inner = o, o.outer = this, o.collisionGroup != e && (o.collisionGroup = e, o.invalidate()), o.collisionMask != t && (o.collisionMask = t, o.invalidate()), o.sensorGroup != n && (o.sensorGroup = n, o.invalidate()), o.sensorMask != r && (o.sensorMask = r, o.invalidate()), o.fluidGroup != i && (o.fluidGroup = i, o.invalidate()), o.fluidMask != a && (o.fluidMask = a, o.invalidate());
        }
        e._wrap = function (t) { return t instanceof e ? t : t && t instanceof Vi ? v(t, function (t) { var n = Object.create(e.prototype); return n.zpp_inner = t, t.outer = n, n; }) : null; };
        Object.defineProperty(e.prototype, "collisionGroup", {
            get: function () { return this.zpp_inner.collisionGroup; },
            set: function (e) { this.zpp_inner.collisionGroup != e && (this.zpp_inner.collisionGroup = e, this.zpp_inner.invalidate()); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "collisionMask", {
            get: function () { return this.zpp_inner.collisionMask; },
            set: function (e) { this.zpp_inner.collisionMask != e && (this.zpp_inner.collisionMask = e, this.zpp_inner.invalidate()); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "sensorGroup", {
            get: function () { return this.zpp_inner.sensorGroup; },
            set: function (e) { this.zpp_inner.sensorGroup != e && (this.zpp_inner.sensorGroup = e, this.zpp_inner.invalidate()); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "sensorMask", {
            get: function () { return this.zpp_inner.sensorMask; },
            set: function (e) { this.zpp_inner.sensorMask != e && (this.zpp_inner.sensorMask = e, this.zpp_inner.invalidate()); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "fluidGroup", {
            get: function () { return this.zpp_inner.fluidGroup; },
            set: function (e) { this.zpp_inner.fluidGroup != e && (this.zpp_inner.fluidGroup = e, this.zpp_inner.invalidate()); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "fluidMask", {
            get: function () { return this.zpp_inner.fluidMask; },
            set: function (e) { this.zpp_inner.fluidMask != e && (this.zpp_inner.fluidMask = e, this.zpp_inner.invalidate()); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "userData", {
            get: function () { return this.zpp_inner.userData == null && (this.zpp_inner.userData = {}), this.zpp_inner.userData; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "shapes", {
            get: function () { return this.zpp_inner.wrap_shapes == null && (this.zpp_inner.wrap_shapes = Fr.get(this.zpp_inner.shapes, !0)), this.zpp_inner.wrap_shapes; },
            enumerable: false,
            configurable: true
        });
        e.prototype.shouldCollide = function (e) { if (e == null)
            throw Error("filter argument cannot be null for shouldCollide"); return this.zpp_inner.shouldCollide(e.zpp_inner); };
        e.prototype.shouldSense = function (e) { if (e == null)
            throw Error("filter argument cannot be null for shouldSense"); return this.zpp_inner.shouldSense(e.zpp_inner); };
        e.prototype.shouldFlow = function (e) { if (e == null)
            throw Error("filter argument cannot be null for shouldFlow"); return this.zpp_inner.shouldFlow(e.zpp_inner); };
        e.prototype.copy = function () { return new e(this.zpp_inner.collisionGroup, this.zpp_inner.collisionMask, this.zpp_inner.sensorGroup, this.zpp_inner.sensorMask, this.zpp_inner.fluidGroup, this.zpp_inner.fluidMask); };
        e.prototype.toString = function () { var e = function (e, t) { var n = "", r = e; do
            n = "0123456789ABCDEF".charAt(r & 15) + n, r >>>= 4;
        while (r > 0); for (; n.length < t;)
            n = "0" + n; return n; }; return "{ collision: " + e(this.zpp_inner.collisionGroup, 8) + "~" + e(this.zpp_inner.collisionMask, 8) + " sensor: " + e(this.zpp_inner.sensorGroup, 8) + "~" + e(this.zpp_inner.sensorMask, 8) + " fluid: " + e(this.zpp_inner.fluidGroup, 8) + "~" + e(this.zpp_inner.fluidMask, 8) + " }"; };
        return e;
    }()), Vi._wrapFn = function (e) { return v(e, function (e) { var t = Object.create(Ji.prototype); return t.zpp_inner = e, e.outer = t, t; }); }, Yi = (function () {
        function e() {
            this.next = null, this.polygon = null, this.outer = null, this.lnormx = 0, this.lnormy = 0, this.wrap_lnorm = null, this.gnormx = 0, this.gnormy = 0, this.wrap_gnorm = null, this.length = 0, this.lprojection = 0, this.gprojection = 0, this.lp0 = null, this.gp0 = null, this.lp1 = null, this.gp1 = null, this.tp0 = 0, this.tp1 = 0, this.lnormx = 0, this.lnormy = 0, this.gnormx = 0, this.gnormy = 0, this.length = 0, this.lprojection = 0, this.gprojection = 0;
        }
        e.prototype.free = function () { this.polygon = null; };
        e.prototype.wrapper = function () { return this.outer == null && (e._wrapFn ? this.outer = e._wrapFn(this) : (e.internal = !0, this.outer = new e._nape.shape.Edge, e.internal = !1, this.outer.zpp_inner = this)), this.outer; };
        e.prototype.lnorm_validate = function () { if (this.polygon == null)
            throw Error("Edge not currently in use"); this.polygon.validate_laxi(), this.wrap_lnorm.zpp_inner.x = this.lnormx, this.wrap_lnorm.zpp_inner.y = this.lnormy; };
        e.prototype.gnorm_validate = function () { if (this.polygon == null)
            throw Error("Edge not currently in use"); if (this.polygon.body == null)
            throw Error("Error: Edge worldNormal only makes sense if the parent Polygon is contained within a rigid body"); this.polygon.validate_gaxi(), this.wrap_gnorm.zpp_inner.x = this.gnormx, this.wrap_gnorm.zpp_inner.y = this.gnormy; };
        e.prototype.getlnorm = function () { var t = e._nape, n = this.lnormx, r = this.lnormy, i = t.geom.Vec2.get(n, r); this.wrap_lnorm = i, this.wrap_lnorm.zpp_inner._immutable = !0, this.wrap_lnorm.zpp_inner._validate = this.lnorm_validate.bind(this); };
        e.prototype.getgnorm = function () { var t = e._nape, n = this.gnormx, r = this.gnormy, i = t.geom.Vec2.get(n, r); this.wrap_gnorm = i, this.wrap_gnorm.zpp_inner._immutable = !0, this.wrap_gnorm.zpp_inner._validate = this.gnorm_validate.bind(this); };
        return e;
    }()), Yi.zpp_pool = null, Yi.internal = !1, Yi._nape = null, Yi._wrapFn = null, Xi = Yi, pe.prototype = Object.create(g.prototype, { constructor: { value: pe, writable: !0, configurable: !0 } }), pe.prototype.inner = null, pe.prototype._length = 0, pe.prototype.zip_length = !1, pe.prototype.at_ite = null, pe.prototype.at_index = 0, pe.get = function (e, t) { t == null && (t = !1); var n = new pe; return n.inner = e, n.zpp_inner.immutable = t, n; }, pe.prototype.zpp_gl = function () { if (this.zpp_vm(), this.zip_length) {
        this._length = 0;
        var e_453 = this.inner.next;
        for (; e_453 != null;)
            this._length++, e_453 = e_453.next;
        this.zip_length = !1;
    } return this._length; }, pe.prototype.zpp_vm = function () { this.zpp_inner.validate(), this.inner.modified && (this.zip_length = !0, this._length = 0, this.at_ite = null); }, pe.prototype.at = function (e) { if (this.zpp_vm(), e < 0 || e >= this.zpp_gl())
        throw Error("Index out of bounds"); for (this.zpp_inner.reverse_flag && (e = this.zpp_gl() - 1 - e), (e < this.at_index || this.at_ite == null) && (this.at_index = 0, this.at_ite = this.inner.next); this.at_index !== e;)
        this.at_index++, this.at_ite = this.at_ite.next; return fe(this.at_ite); }, pe.prototype.push = function (e) { if (this.zpp_inner.immutable)
        throw Error("Vec2List is immutable"); if (this.zpp_inner.modify_test(), this.zpp_vm(), e.zpp_inner._inuse)
        throw Error("Vec2 is already in use"); var t = this.zpp_inner.adder == null || this.zpp_inner.adder(e); if (t) {
        if (this.zpp_inner.reverse_flag)
            this.inner.add(e.zpp_inner);
        else {
            var t_382 = this.inner.iterator_at(this.zpp_gl() - 1);
            this.inner.insert(t_382, e.zpp_inner);
        }
        this.zpp_inner.invalidate(), this.zpp_inner.post_adder != null && this.zpp_inner.post_adder(e);
    } return t; }, pe.prototype.unshift = function (e) { if (this.zpp_inner.immutable)
        throw Error("Vec2List is immutable"); if (this.zpp_inner.modify_test(), this.zpp_vm(), e.zpp_inner._inuse)
        throw Error("Vec2 is already in use"); var t = this.zpp_inner.adder == null || this.zpp_inner.adder(e); if (t) {
        if (this.zpp_inner.reverse_flag) {
            var t_383 = this.inner.iterator_at(this.zpp_gl() - 1);
            this.inner.insert(t_383, e.zpp_inner);
        }
        else
            this.inner.add(e.zpp_inner);
        this.zpp_inner.invalidate(), this.zpp_inner.post_adder != null && this.zpp_inner.post_adder(e);
    } return t; }, pe.prototype.pop = function () { if (this.zpp_inner.immutable)
        throw Error("Vec2List is immutable"); if (this.zpp_inner.modify_test(), this.empty())
        throw Error("Cannot remove from empty list"); this.zpp_vm(); var e; if (this.zpp_inner.reverse_flag) {
        e = this.inner.next;
        var t_384 = fe(e);
        this.zpp_inner.subber != null && this.zpp_inner.subber(t_384), this.zpp_inner.dontremove || this.inner.pop();
    }
    else {
        this.at_ite != null && this.at_ite.next == null && (this.at_ite = null);
        var t_385 = this.zpp_gl() === 1 ? null : this.inner.iterator_at(this.zpp_gl() - 2);
        e = t_385 == null ? this.inner.next : t_385.next;
        var n_325 = fe(e);
        this.zpp_inner.subber != null && this.zpp_inner.subber(n_325), this.zpp_inner.dontremove || this.inner.erase(t_385);
    } return this.zpp_inner.invalidate(), fe(e); }, pe.prototype.shift = function () { if (this.zpp_inner.immutable)
        throw Error("Vec2List is immutable"); if (this.zpp_inner.modify_test(), this.empty())
        throw Error("Cannot remove from empty list"); this.zpp_vm(); var e; if (this.zpp_inner.reverse_flag) {
        this.at_ite != null && this.at_ite.next == null && (this.at_ite = null);
        var t_386 = this.zpp_gl() === 1 ? null : this.inner.iterator_at(this.zpp_gl() - 2);
        e = t_386 == null ? this.inner.next : t_386.next;
        var n_326 = fe(e);
        this.zpp_inner.subber != null && this.zpp_inner.subber(n_326), this.zpp_inner.dontremove || this.inner.erase(t_386);
    }
    else {
        e = this.inner.next;
        var t_387 = fe(e);
        this.zpp_inner.subber != null && this.zpp_inner.subber(t_387), this.zpp_inner.dontremove || this.inner.pop();
    } return this.zpp_inner.invalidate(), fe(e); }, pe.prototype.remove = function (e) { if (this.zpp_inner.immutable)
        throw Error("Vec2List is immutable"); this.zpp_inner.modify_test(), this.zpp_vm(); var t = !1, n = this.inner.next; for (; n != null;) {
        if (e.zpp_inner === n) {
            t = !0;
            break;
        }
        n = n.next;
    } return t && (this.zpp_inner.subber != null && this.zpp_inner.subber(e), this.zpp_inner.dontremove || this.inner.remove(e.zpp_inner), this.zpp_inner.invalidate()), t; }, pe.prototype.clear = function () { if (this.zpp_inner.immutable)
        throw Error("Vec2List is immutable"); if (this.zpp_inner.reverse_flag)
        for (; !this.empty();)
            this.pop();
    else
        for (; !this.empty();)
            this.shift(); }, Zi = (function () {
        function e() {
            this.outer_zn = null, this.lverts = null, this.wrap_lverts = null, this.gverts = null, this.wrap_gverts = null, this.edges = null, this.wrap_edges = null, this.edgeCnt = 0, this.reverse_flag = !1, this.zip_lverts = !1, this.zip_laxi = !1, this.zip_gverts = !1, this.zip_gaxi = !1, this.zip_valid = !1, this.zip_sanitation = !1, this.validation = null, this.zip_sanitation = !1, this.zip_valid = !1, this.zip_gaxi = !1, this.zip_gverts = !1, this.zip_laxi = !1, this.zip_lverts = !1, this.reverse_flag = !1, this.edgeCnt = 0, this.wrap_edges = null, this.edges = null, this.wrap_gverts = null, this.gverts = null, this.wrap_lverts = null, this.lverts = null, this.outer_zn = null, this._initShape(1), this.polygon = this, this.lverts = new V, this.gverts = new V, this.edges = new Nt, this.edgeCnt = 0;
        }
        e._init = function () { if (e._initialized)
            return; e._initialized = !0; var t = Ui.prototype, n = e.prototype; for (var e_454 in t)
            Object.prototype.hasOwnProperty.call(n, e_454) || (n[e_454] = t[e_454]); for (var _b = 0, _c = Object.getOwnPropertyNames(t); _b < _c.length; _b++) {
            var e_455 = _c[_b];
            e_455 !== "constructor" && !Object.prototype.hasOwnProperty.call(n, e_455) && (n[e_455] = t[e_455]);
        } };
        e.prototype.lverts_pa_invalidate = function (e) { this.invalidate_lverts(); };
        e.prototype.lverts_pa_immutable = function () { if (this.body != null && this.body.type === 1 && this.body.space != null)
            throw Error("Error: Cannot modify local vertex of Polygon added to a static body whilst within a Space"); };
        e.prototype.gverts_pa_validate = function () { if (this.body == null)
            throw Error("Error: World vertex only makes sense when Polygon is contained in a rigid body"); this._validateGverts(); };
        e.prototype.lverts_post_adder = function (e) { e.zpp_inner._invalidate = this.lverts_pa_invalidate.bind(this), e.zpp_inner._isimmutable = this.lverts_pa_immutable.bind(this); var t = null, n = null, r = this.lverts.next; for (; r != null && r !== e.zpp_inner;)
            t = t == null ? this.gverts.next : t.next, n = n == null ? this.edges.head : n.next, r = r.next; var i = V.get(0, 0, !0); if (this.gverts.insert(t, i), this.lverts.next.next != null) {
            if (this.lverts.next.next.next == null) {
                var e_456;
                Xi.zpp_pool == null ? e_456 = new Xi : (e_456 = Xi.zpp_pool, Xi.zpp_pool = e_456.next, e_456.next = null), e_456.polygon = this, this.edges.add(e_456);
                var t_388;
                Xi.zpp_pool == null ? t_388 = new Xi : (t_388 = Xi.zpp_pool, Xi.zpp_pool = t_388.next, t_388.next = null), t_388.polygon = this, this.edges.add(t_388), this.edgeCnt += 2;
            }
            else {
                var e_457;
                Xi.zpp_pool == null ? e_457 = new Xi : (e_457 = Xi.zpp_pool, Xi.zpp_pool = e_457.next, e_457.next = null), e_457.polygon = this, this.edges.insert(n, e_457), this.edgeCnt++;
            }
        } i._validate = this.gverts_pa_validate.bind(this); };
        e.prototype.lverts_subber = function (e) { this.cleanup_lvert(e.zpp_inner); };
        e.prototype.lverts_invalidate = function (e) { this.invalidate_lverts(); };
        e.prototype.lverts_validate = function () { this.validate_lverts(); };
        e.prototype.lverts_modifiable = function () { if (this.immutable_midstep("Polygon::localVerts"), this.body != null && this.body.type === 1 && this.body.space != null)
            throw Error("Cannot modifiy shapes of static object once added to Space"); };
        e.prototype.gverts_validate = function () { this._validateGverts(); };
        e.prototype.edges_validate = function () { this.validate_lverts(); };
        e.prototype.getlverts = function () { this.wrap_lverts = pe.get(this.lverts), this.wrap_lverts.zpp_inner.post_adder = this.lverts_post_adder.bind(this), this.wrap_lverts.zpp_inner.subber = this.lverts_subber.bind(this), this.wrap_lverts.zpp_inner._invalidate = this.lverts_invalidate.bind(this), this.wrap_lverts.zpp_inner._validate = this.lverts_validate.bind(this), this.wrap_lverts.zpp_inner._modifiable = this.lverts_modifiable.bind(this), this.wrap_lverts.zpp_inner.reverse_flag = this.reverse_flag; };
        e.prototype.getgverts = function () { this.wrap_gverts = pe.get(this.gverts, !0), this.wrap_gverts.zpp_inner.reverse_flag = this.reverse_flag, this.wrap_gverts.zpp_inner._validate = this.gverts_validate.bind(this); };
        e.prototype.getedges = function () { var t = e._zpp; this.wrap_edges = t.util.ZPP_EdgeList.get(this.edges, !0), this.wrap_edges.zpp_inner.reverse_flag = this.reverse_flag, this.wrap_edges.zpp_inner._validate = this.edges_validate.bind(this); };
        e.prototype.invalidate_lverts = function () { this.invalidate_laxi(), this.invalidate_area_inertia(), this.invalidate_angDrag(), this.invalidate_localCOM(), this.invalidate_gverts(), this.zip_lverts = !0, this.zip_valid = !0, this.zip_sanitation = !0, this.body != null && this.body.wake(); };
        e.prototype.invalidate_laxi = function () { this.invalidate_gaxi(), this.zip_sweepRadius = !0, this.zip_laxi = !0; };
        e.prototype.invalidate_gverts = function () { this.zip_aabb = !0, this.body != null && (this.body.zip_aabb = !0), this.zip_gverts = !0; };
        e.prototype.invalidate_gaxi = function () { this.zip_gaxi = !0; };
        e.prototype.validate_lverts = function () { this.zip_lverts && (this.zip_lverts = !1, this.lverts.length > 2 && (this.validate_area_inertia(), this.area < 0 && (this.reverse_vertices(), this.area = -this.area))); };
        e.prototype.validate_laxi = function () { if (this.zip_laxi) {
            this.zip_laxi = !1, this.validate_lverts();
            var e_458 = this.edges.head, t_389 = this.lverts.next, n_327 = t_389;
            for (t_389 = t_389.next; t_389 != null;) {
                var r_284 = t_389, i_197 = e_458.elt;
                e_458 = e_458.next, i_197.lp0 = n_327, i_197.lp1 = r_284;
                var a_149 = n_327.x - r_284.x, o_113 = n_327.y - r_284.y, s_99 = Math.sqrt(a_149 * a_149 + o_113 * o_113);
                i_197.length = s_99;
                var c_80 = 1 / s_99;
                a_149 *= c_80, o_113 *= c_80;
                var l_75 = a_149;
                a_149 = -o_113, o_113 = l_75, i_197.lprojection = a_149 * n_327.x + o_113 * n_327.y, i_197.lnormx = a_149, i_197.lnormy = o_113, i_197.wrap_lnorm != null && (i_197.wrap_lnorm.zpp_inner.x = a_149, i_197.wrap_lnorm.zpp_inner.y = o_113), n_327 = r_284, t_389 = t_389.next;
            }
            var r_285 = this.lverts.next, i_198 = e_458.elt;
            i_198.lp0 = n_327, i_198.lp1 = r_285;
            var a_150 = n_327.x - r_285.x, o_114 = n_327.y - r_285.y, s_100 = Math.sqrt(a_150 * a_150 + o_114 * o_114);
            i_198.length = s_100;
            var c_81 = 1 / s_100;
            a_150 *= c_81, o_114 *= c_81;
            var l_76 = a_150;
            a_150 = -o_114, o_114 = l_76, i_198.lprojection = a_150 * n_327.x + o_114 * n_327.y, i_198.lnormx = a_150, i_198.lnormy = o_114, i_198.wrap_lnorm != null && (i_198.wrap_lnorm.zpp_inner.x = a_150, i_198.wrap_lnorm.zpp_inner.y = o_114);
        } };
        e.prototype.validate_gverts = function () { this._validateGverts(); };
        e.prototype.validate_gaxi = function () { if (this.zip_gaxi && this.body != null) {
            this.zip_gaxi = !1, this.validate_laxi();
            var e_459 = this.body;
            e_459.zip_axis && (e_459.zip_axis = !1, e_459.axisx = Math.sin(e_459.rot), e_459.axisy = Math.cos(e_459.rot)), this._validateGverts();
            var t_390 = this.edges.head, n_328 = this.gverts.next, r_286 = n_328;
            for (n_328 = n_328.next; n_328 != null;) {
                var i_199 = n_328, a_151 = t_390.elt;
                t_390 = t_390.next, a_151.gp0 = r_286, a_151.gp1 = i_199, a_151.gnormx = e_459.axisy * a_151.lnormx - e_459.axisx * a_151.lnormy, a_151.gnormy = a_151.lnormx * e_459.axisx + a_151.lnormy * e_459.axisy, a_151.gprojection = e_459.posx * a_151.gnormx + e_459.posy * a_151.gnormy + a_151.lprojection, a_151.wrap_gnorm != null && (a_151.wrap_gnorm.zpp_inner.x = a_151.gnormx, a_151.wrap_gnorm.zpp_inner.y = a_151.gnormy), a_151.tp0 = a_151.gp0.y * a_151.gnormx - a_151.gp0.x * a_151.gnormy, a_151.tp1 = a_151.gp1.y * a_151.gnormx - a_151.gp1.x * a_151.gnormy, r_286 = i_199, n_328 = n_328.next;
            }
            var i_200 = this.gverts.next, a_152 = t_390.elt;
            a_152.gp0 = r_286, a_152.gp1 = i_200, a_152.gnormx = e_459.axisy * a_152.lnormx - e_459.axisx * a_152.lnormy, a_152.gnormy = a_152.lnormx * e_459.axisx + a_152.lnormy * e_459.axisy, a_152.gprojection = e_459.posx * a_152.gnormx + e_459.posy * a_152.gnormy + a_152.lprojection, a_152.wrap_gnorm != null && (a_152.wrap_gnorm.zpp_inner.x = a_152.gnormx, a_152.wrap_gnorm.zpp_inner.y = a_152.gnormy), a_152.tp0 = a_152.gp0.y * a_152.gnormx - a_152.gp0.x * a_152.gnormy, a_152.tp1 = a_152.gp1.y * a_152.gnormx - a_152.gp1.x * a_152.gnormy;
        } };
        e.prototype._validateGverts = function () { if (this.zip_gverts && this.body != null) {
            this.zip_gverts = !1, this.validate_lverts();
            var e_460 = this.body;
            e_460.zip_axis && (e_460.zip_axis = !1, e_460.axisx = Math.sin(e_460.rot), e_460.axisy = Math.cos(e_460.rot));
            var t_391 = this.lverts.next, n_329 = this.gverts.next;
            for (; n_329 != null;) {
                var r_287 = n_329, i_201 = t_391;
                t_391 = t_391.next, r_287.x = e_460.posx + (e_460.axisy * i_201.x - e_460.axisx * i_201.y), r_287.y = e_460.posy + (i_201.x * e_460.axisx + i_201.y * e_460.axisy), n_329 = n_329.next;
            }
        } };
        e.prototype.cleanup_lvert = function (e) { var t = null, n = null, r = this.lverts.next; for (; r != null && r !== e;)
            t = t == null ? this.gverts.next : t.next, n = n == null ? this.edges.head : n.next, r = r.next; var i = t == null ? this.gverts.next : t.next; this.gverts.erase(t); var a = i; if (a.free(), a.next = V.zpp_pool, V.zpp_pool = a, this.edgeCnt === 2) {
            var e_461 = this.edges.pop_unsafe();
            e_461.polygon = null, e_461.next = Xi.zpp_pool, Xi.zpp_pool = e_461, e_461 = this.edges.pop_unsafe(), e_461.polygon = null, e_461.next = Xi.zpp_pool, Xi.zpp_pool = e_461, this.edgeCnt = 0;
        }
        else if (this.edgeCnt !== 0) {
            var e_462 = n == null ? this.edges.head.elt : n.next.elt;
            this.edges.erase(n), e_462.polygon = null, e_462.next = Xi.zpp_pool, Xi.zpp_pool = e_462, this.edgeCnt--;
        } };
        e.prototype.splice_collinear_real = function () { if (this.lverts.next == null || this.lverts.next.next == null || this.lverts.next.next.next == null)
            return; var e = null, t = this.lverts.next; for (; t != null;) {
            var n_330 = t.next == null ? this.lverts.next : t.next, r_288 = t.x - n_330.x, i_202 = t.y - n_330.y;
            r_288 * r_288 + i_202 * i_202 < R.epsilon * R.epsilon ? (this.cleanup_lvert(t), t = this.lverts.erase(e)) : (e = t, t = t.next);
        } if (this.lverts.next == null)
            return; var n; for (;;) {
            n = !1;
            var e_463 = this.lverts.next;
            for (; e_463 != null;) {
                var t_392 = e_463.next == null ? this.lverts.next : e_463.next, r_289 = t_392.next == null ? this.lverts.next : t_392.next, i_203 = t_392.x - e_463.x, a_153 = t_392.y - e_463.y, o_115 = r_289.x - t_392.x, s_101 = (r_289.y - t_392.y) * i_203 - o_115 * a_153;
                s_101 * s_101 >= R.epsilon * R.epsilon || (this.cleanup_lvert(t_392), this.lverts.erase(e_463.next == null ? null : e_463), n = !0), e_463 = e_463.next;
            }
            if (!n)
                break;
        } };
        e.prototype.reverse_vertices = function () { this.lverts.reverse(), this.gverts.reverse(), this.edges.reverse(); var e = this.edges.iterator_at(this.edgeCnt - 1), t = this.edges.pop_unsafe(); this.edges.insert(e, t), this.reverse_flag = !this.reverse_flag, this.wrap_lverts != null && (this.wrap_lverts.zpp_inner.reverse_flag = this.reverse_flag), this.wrap_gverts != null && (this.wrap_gverts.zpp_inner.reverse_flag = this.reverse_flag), this.wrap_edges != null && (this.wrap_edges.zpp_inner.reverse_flag = this.reverse_flag); };
        e.prototype.valid = function () { var t = e._nape; if (this.zip_valid) {
            if (this.zip_valid = !1, this.zip_sanitation && (this.zip_sanitation = !1, this.splice_collinear_real()), this.lverts.length < 3 || (this.validate_lverts(), this.validate_area_inertia(), this.area < R.epsilon))
                return U.ValidationResult_DEGENERATE == null && (U.internal = !0, U.ValidationResult_DEGENERATE = new t.shape.ValidationResult, U.internal = !1), this.validation = U.ValidationResult_DEGENERATE;
            {
                var e_464 = !1, n_331 = !1, r_290 = !0, i_204 = this.lverts.next, a_154 = i_204;
                i_204 = i_204.next;
                var o_116 = i_204;
                for (i_204 = i_204.next; i_204 != null;) {
                    var t_393 = i_204, s_102 = t_393.x - o_116.x, c_82 = t_393.y - o_116.y, l_77 = o_116.x - a_154.x, u_63 = (o_116.y - a_154.y) * s_102 - l_77 * c_82;
                    if (u_63 > R.epsilon ? n_331 = !0 : u_63 < -R.epsilon && (e_464 = !0), n_331 && e_464) {
                        r_290 = !1;
                        break;
                    }
                    a_154 = o_116, o_116 = t_393, i_204 = i_204.next;
                }
                if (r_290) {
                    i_204 = this.lverts.next;
                    var t_394 = i_204, r_291 = t_394.x - o_116.x, s_103 = t_394.y - o_116.y, c_83 = o_116.x - a_154.x, l_78 = (o_116.y - a_154.y) * r_291 - c_83 * s_103;
                    if (l_78 > R.epsilon ? n_331 = !0 : l_78 < -R.epsilon && (e_464 = !0), !(n_331 && e_464)) {
                        a_154 = o_116, o_116 = t_394, i_204 = i_204.next;
                        var r_292 = i_204, s_104 = r_292.x - o_116.x, c_84 = r_292.y - o_116.y, l_79 = o_116.x - a_154.x, u_64 = (o_116.y - a_154.y) * s_104 - l_79 * c_84;
                        u_64 > R.epsilon ? n_331 = !0 : u_64 < -R.epsilon && (e_464 = !0);
                    }
                }
                if (n_331 && e_464)
                    return U.ValidationResult_CONCAVE == null && (U.internal = !0, U.ValidationResult_CONCAVE = new t.shape.ValidationResult, U.internal = !1), this.validation = U.ValidationResult_CONCAVE;
                {
                    var e_465 = !0, n_332 = this.lverts.next, r_293 = n_332;
                    for (n_332 = n_332.next; n_332 != null && e_465;) {
                        var t_395 = n_332, i_205 = this.lverts.next, a_155 = i_205.next;
                        for (; a_155 != null && e_465;) {
                            var n_333 = a_155;
                            r_293 !== i_205 && r_293 !== n_333 && t_395 !== i_205 && t_395 !== n_333 && (e_465 = this._checkNoIntersection(r_293, t_395, i_205, n_333)), i_205 = n_333, a_155 = a_155.next;
                        }
                        if (e_465) {
                            var n_334 = this.lverts.next;
                            r_293 !== i_205 && r_293 !== n_334 && t_395 !== i_205 && t_395 !== n_334 && (e_465 = this._checkNoIntersection(r_293, t_395, i_205, n_334));
                        }
                        r_293 = t_395, n_332 = n_332.next;
                    }
                    if (e_465) {
                        var t_396 = this.lverts.next, n_335 = this.lverts.next, i_206 = n_335.next;
                        for (; i_206 != null && e_465;) {
                            var a_156 = i_206;
                            r_293 !== n_335 && r_293 !== a_156 && t_396 !== n_335 && t_396 !== a_156 && (e_465 = this._checkNoIntersection(r_293, t_396, n_335, a_156)), n_335 = a_156, i_206 = i_206.next;
                        }
                        if (e_465) {
                            var i_207 = this.lverts.next;
                            r_293 !== n_335 && r_293 !== i_207 && t_396 !== n_335 && t_396 !== i_207 && (e_465 = this._checkNoIntersection(r_293, t_396, n_335, i_207));
                        }
                    }
                    return e_465 ? (U.ValidationResult_VALID == null && (U.internal = !0, U.ValidationResult_VALID = new t.shape.ValidationResult, U.internal = !1), this.validation = U.ValidationResult_VALID) : (U.ValidationResult_SELF_INTERSECTING == null && (U.internal = !0, U.ValidationResult_SELF_INTERSECTING = new t.shape.ValidationResult, U.internal = !1), this.validation = U.ValidationResult_SELF_INTERSECTING);
                }
            }
        } return this.validation; };
        e.prototype._checkNoIntersection = function (e, t, n, r) { var i = e.x - n.x, a = e.y - n.y, o = t.x - e.x, s = t.y - e.y, c = r.x - n.x, l = r.y - n.y, u = s * c - o * l; if (u * u > R.epsilon) {
            u = 1 / u;
            var e_466 = (l * i - c * a) * u;
            if (e_466 > R.epsilon && e_466 < 1 - R.epsilon) {
                var e_467 = (s * i - o * a) * u;
                if (e_467 > R.epsilon && e_467 < 1 - R.epsilon)
                    return !1;
            }
        } return !0; };
        e.prototype.__validate_aabb = function () { if (this._validateGverts(), this.lverts.next == null)
            throw Error("An empty polygon has no meaningful bounds"); var e = this.gverts.next; this.aabb.minx = e.x, this.aabb.miny = e.y, this.aabb.maxx = e.x, this.aabb.maxy = e.y; var t = this.gverts.next.next; for (; t != null;) {
            var e_468 = t;
            e_468.x < this.aabb.minx && (this.aabb.minx = e_468.x), e_468.x > this.aabb.maxx && (this.aabb.maxx = e_468.x), e_468.y < this.aabb.miny && (this.aabb.miny = e_468.y), e_468.y > this.aabb.maxy && (this.aabb.maxy = e_468.y), t = t.next;
        } };
        e.prototype.__validate_sweepRadius = function () { var e = 0, t = 0; this.validate_laxi(); var n = this.lverts.next; for (; n != null;) {
            var t_397 = n, r_294 = t_397.x * t_397.x + t_397.y * t_397.y;
            r_294 > e && (e = r_294), n = n.next;
        } var r = this.edges.head; for (; r != null;) {
            var e_469 = r.elt;
            if (e_469.lprojection < t && (t = e_469.lprojection, t < 0))
                break;
            r = r.next;
        } t < 0 && (t = 0), this.sweepRadius = Math.sqrt(e), this.sweepCoef = this.sweepRadius - t; };
        e.prototype.__validate_area_inertia = function () { if (this.lverts.next == null || this.lverts.next.next == null || this.lverts.next.next.next == null)
            this.area = 0, this.inertia = 0;
        else {
            this.area = 0;
            var e_470 = 0, t_398 = 0, n_336 = this.lverts.next, r_295 = n_336;
            n_336 = n_336.next;
            var i_208 = n_336;
            for (n_336 = n_336.next; n_336 != null;) {
                var a_157 = n_336, o_117 = i_208.y * r_295.x - i_208.x * r_295.y, s_105 = i_208.x * i_208.x + i_208.y * i_208.y + (i_208.x * r_295.x + i_208.y * r_295.y) + (r_295.x * r_295.x + r_295.y * r_295.y);
                e_470 += o_117 * s_105, t_398 += o_117, this.area += i_208.x * (a_157.y - r_295.y), r_295 = i_208, i_208 = a_157, n_336 = n_336.next;
            }
            n_336 = this.lverts.next;
            var a_158 = n_336, o_118 = i_208.y * r_295.x - i_208.x * r_295.y, s_106 = i_208.x * i_208.x + i_208.y * i_208.y + (i_208.x * r_295.x + i_208.y * r_295.y) + (r_295.x * r_295.x + r_295.y * r_295.y);
            e_470 += o_118 * s_106, t_398 += o_118, this.area += i_208.x * (a_158.y - r_295.y), r_295 = i_208, i_208 = a_158, n_336 = n_336.next;
            var c_85 = n_336;
            o_118 = i_208.y * r_295.x - i_208.x * r_295.y, s_106 = i_208.x * i_208.x + i_208.y * i_208.y + (i_208.x * r_295.x + i_208.y * r_295.y) + (r_295.x * r_295.x + r_295.y * r_295.y), e_470 += o_118 * s_106, t_398 += o_118, this.area += i_208.x * (c_85.y - r_295.y), this.inertia = e_470 / (6 * t_398), this.area *= .5, this.area < 0 && (this.area = -this.area, this.reverse_vertices());
        } };
        e.prototype.__validate_angDrag = function () { if (this.lverts.length < 3)
            throw Error("Polygon's with less than 3 vertices have no meaningful angDrag"); this.validate_area_inertia(), this.validate_laxi(); var e = 0, t = this.edges.head, n = 0, r = this.lverts.next, i = r, a = r.next; for (; a != null;) {
            var r_296 = a, o_119 = t.elt;
            t = t.next, n += o_119.length;
            var s_107 = r_296.x - i.x, c_86 = r_296.y - i.y;
            e += o_119.length * R.fluidAngularDragFriction * this.material.dynamicFriction * o_119.lprojection * o_119.lprojection;
            var l_80 = -(i.y * o_119.lnormx - i.x * o_119.lnormy) / (c_86 * o_119.lnormx - s_107 * o_119.lnormy);
            if (l_80 > 0) {
                var t_399 = l_80 > 1 ? 1 : l_80, n_337 = i.x, r_297 = i.y;
                n_337 += s_107 * t_399, r_297 += c_86 * t_399;
                var a_159 = o_119.lnormy * i.x - o_119.lnormx * i.y, u_65 = o_119.lnormy * n_337 - o_119.lnormx * r_297, d_46 = (u_65 * u_65 * u_65 - a_159 * a_159 * a_159) / (3 * (u_65 - a_159));
                e += d_46 * t_399 * o_119.length * R.fluidAngularDrag;
            }
            if (l_80 < 1) {
                var t_400 = l_80 < 0 ? 0 : l_80, n_338 = i.x, a_160 = i.y;
                n_338 += s_107 * t_400, a_160 += c_86 * t_400;
                var u_66 = o_119.lnormy * n_338 - o_119.lnormx * a_160, d_47 = o_119.lnormy * r_296.x - o_119.lnormx * r_296.y, f_45 = (d_47 * d_47 * d_47 - u_66 * u_66 * u_66) / (3 * (d_47 - u_66));
                e += f_45 * R.fluidVacuumDrag * (1 - t_400) * o_119.length * R.fluidAngularDrag;
            }
            i = r_296, a = a.next;
        } {
            var r_298 = this.lverts.next, a_161 = t.elt;
            n += a_161.length;
            var o_120 = r_298.x - i.x, s_108 = r_298.y - i.y;
            e += a_161.length * R.fluidAngularDragFriction * this.material.dynamicFriction * a_161.lprojection * a_161.lprojection;
            var c_87 = -(i.y * a_161.lnormx - i.x * a_161.lnormy) / (s_108 * a_161.lnormx - o_120 * a_161.lnormy);
            if (c_87 > 0) {
                var t_401 = c_87 > 1 ? 1 : c_87, n_339 = i.x, r_299 = i.y;
                n_339 += o_120 * t_401, r_299 += s_108 * t_401;
                var l_81 = a_161.lnormy * i.x - a_161.lnormx * i.y, u_67 = a_161.lnormy * n_339 - a_161.lnormx * r_299, d_48 = (u_67 * u_67 * u_67 - l_81 * l_81 * l_81) / (3 * (u_67 - l_81));
                e += d_48 * t_401 * a_161.length * R.fluidAngularDrag;
            }
            if (c_87 < 1) {
                var t_402 = c_87 < 0 ? 0 : c_87, n_340 = i.x, l_82 = i.y;
                n_340 += o_120 * t_402, l_82 += s_108 * t_402;
                var u_68 = a_161.lnormy * n_340 - a_161.lnormx * l_82, d_49 = a_161.lnormy * r_298.x - a_161.lnormx * r_298.y, f_46 = (d_49 * d_49 * d_49 - u_68 * u_68 * u_68) / (3 * (d_49 - u_68));
                e += f_46 * R.fluidVacuumDrag * (1 - t_402) * a_161.length * R.fluidAngularDrag;
            }
        } this.angDrag = e / (this.inertia * n); };
        e.prototype.__validate_localCOM = function () { if (this.lverts.next == null)
            throw Error("An empty polygon has no meaningful localCOM"); if (this.lverts.next.next == null)
            this.localCOMx = this.lverts.next.x, this.localCOMy = this.lverts.next.y;
        else if (this.lverts.next.next.next == null)
            this.localCOMx = this.lverts.next.x, this.localCOMy = this.lverts.next.y, this.localCOMx += this.lverts.next.next.x, this.localCOMy += this.lverts.next.next.y, this.localCOMx *= .5, this.localCOMy *= .5;
        else {
            this.localCOMx = 0, this.localCOMy = 0;
            var e_471 = 0, t_403 = this.lverts.next, n_341 = t_403;
            t_403 = t_403.next;
            var r_300 = t_403;
            for (t_403 = t_403.next; t_403 != null;) {
                var i_209 = t_403;
                e_471 += r_300.x * (i_209.y - n_341.y);
                var a_162 = i_209.y * r_300.x - i_209.x * r_300.y;
                this.localCOMx += (r_300.x + i_209.x) * a_162, this.localCOMy += (r_300.y + i_209.y) * a_162, n_341 = r_300, r_300 = i_209, t_403 = t_403.next;
            }
            t_403 = this.lverts.next;
            var i_210 = t_403;
            e_471 += r_300.x * (i_210.y - n_341.y);
            var a_163 = i_210.y * r_300.x - i_210.x * r_300.y;
            this.localCOMx += (r_300.x + i_210.x) * a_163, this.localCOMy += (r_300.y + i_210.y) * a_163, n_341 = r_300, r_300 = i_210, t_403 = t_403.next;
            var o_121 = t_403;
            e_471 += r_300.x * (o_121.y - n_341.y), a_163 = o_121.y * r_300.x - o_121.x * r_300.y, this.localCOMx += (r_300.x + o_121.x) * a_163, this.localCOMy += (r_300.y + o_121.y) * a_163, e_471 = 1 / (3 * e_471), this.localCOMx *= e_471, this.localCOMy *= e_471;
        } };
        e.prototype.localCOM_validate = function () { if (this.lverts.next == null)
            throw Error("An empty polygon does not have any meaningful localCOM"); this.validate_localCOM(); };
        e.prototype.localCOM_invalidate = function (e) { this.validate_localCOM(); var t = e.x - this.localCOMx, n = e.y - this.localCOMy, r = this.lverts.next; for (; r != null;)
            r.x += t, r.y += n, r = r.next; this.invalidate_lverts(); };
        e.prototype.setupLocalCOM = function () { var t = e._nape, n = this.localCOMx, r = this.localCOMy, i = t.geom.Vec2.get(n, r); this.wrap_localCOM = i, this.wrap_localCOM.zpp_inner._inuse = !0, this.wrap_localCOM.zpp_inner._validate = this.localCOM_validate.bind(this), this.wrap_localCOM.zpp_inner._invalidate = this.localCOM_invalidate.bind(this); };
        e.prototype.__translate = function (e, t) { var n = this.lverts.next; for (; n != null;)
            n.x += e, n.y += t, n = n.next; this.invalidate_lverts(); };
        e.prototype.__scale = function (e, t) { var n = this.lverts.next; for (; n != null;)
            n.x *= e, n.y *= t, n = n.next; this.invalidate_lverts(); var r = this; if (r._isCapsule) {
            var n_342 = ((e < 0 ? -e : e) + (t < 0 ? -t : t)) / 2;
            r._capsuleRadius *= n_342, r._capsuleHalfLength *= n_342;
        } };
        e.prototype.__rotate = function (e, t) { var n = this.lverts.next; for (; n != null;) {
            var r_301 = t * n.x - e * n.y, i_211 = n.x * e + n.y * t;
            n.x = r_301, n.y = i_211, n = n.next;
        } this.invalidate_lverts(); };
        e.prototype.__transform = function (e) { var t = this.lverts.next; for (; t != null;) {
            var n_343 = e.zpp_inner.a * t.x + e.zpp_inner.b * t.y + e.zpp_inner.tx;
            t.y = e.zpp_inner.c * t.x + e.zpp_inner.d * t.y + e.zpp_inner.ty, t.x = n_343, t = t.next;
        } this.invalidate_lverts(); };
        e.prototype.__copy = function () { var t = e._nape, n = this; if (n._isCapsule) {
            var e_472 = 2 * (n._capsuleHalfLength + n._capsuleRadius), r_302 = 2 * n._capsuleRadius;
            this.validate_localCOM();
            var i_212 = this.localCOMx, a_164 = this.localCOMy, o_122;
            return (i_212 !== 0 || a_164 !== 0) && (o_122 = new t.geom.Vec2(i_212, a_164), o_122.zpp_inner.weak = !0), new t.shape.Capsule(e_472, r_302, o_122).zpp_inner_zn;
        } this.outer_zn.zpp_inner_zn.wrap_lverts == null && this.outer_zn.zpp_inner_zn.getlverts(); var r = this.outer_zn.zpp_inner_zn.wrap_lverts, i = [], a = r.iterator(); for (; a.hasNext();)
            i.push(a.next()); return new t.shape.Polygon(i).zpp_inner_zn; };
        return e;
    }()), Zi._nape = null, Zi._zpp = null, Zi._initialized = !1, Qi = Zi, $i = (function (_super) {
        __extends(e, _super);
        function e(e, t, n, r) {
            var _this = _super.call(this) || this;
            var i = d();
            if (e == null)
                throw Error("localVerts cannot be null");
            var a;
            t instanceof Ai ? (r = n, n = t, a = void 0) : (a = t, n != null && n instanceof Ji && (r = n, n = void 0));
            var o = new Qi;
            if (_this.zpp_inner_zn = o, _this.zpp_inner = o, _this.zpp_inner_i = o, o.outer = _this, o.outer_zn = _this, o.outer_i = _this, Array.isArray(e)) {
                var s;
                for (var _b = 0, e_473 = e; _b < e_473.length; _b++) {
                    var t_404 = e_473[_b];
                    if (t_404 == null)
                        throw Error("Array<Vec2> contains null objects");
                    if (!(t_404 instanceof Sn))
                        throw Error("Array<Vec2> contains non Vec2 objects");
                    if (t_404.zpp_disp)
                        throw Error("Vec2 has been disposed and cannot be used!");
                    o.wrap_lverts == null && o.getlverts();
                    var e_474 = t_404.zpp_inner;
                    e_474._validate != null && e_474._validate();
                    var n_344 = e_474.x;
                    e_474._validate != null && e_474._validate();
                    var r_303 = e_474.y, i_213 = new Sn(n_344, r_303);
                    o.wrap_lverts.push(i_213);
                }
                for (var t_405 = e.length - 1; t_405 >= 0; t_405--)
                    (s = e[t_405].zpp_inner) != null && s.weak && (e[t_405].dispose(), e.splice(t_405, 1));
            }
            else if (e instanceof i.geom.Vec2List) {
                var t_406 = e, n_345 = t_406.iterator();
                for (;;) {
                    n_345.zpp_inner.zpp_inner.valmod();
                    var e_475 = n_345.zpp_inner.zpp_gl();
                    if (n_345.zpp_critical = !0, n_345.zpp_i >= e_475) {
                        n_345.zpp_next = i.geom.Vec2Iterator.zpp_pool, i.geom.Vec2Iterator.zpp_pool = n_345, n_345.zpp_inner = null;
                        break;
                    }
                    n_345.zpp_critical = !1;
                    var t_407 = n_345.zpp_inner.at(n_345.zpp_i++);
                    if (t_407 == null)
                        throw Error("Vec2List contains null objects");
                    if (t_407.zpp_disp)
                        throw Error("Vec2 has been disposed and cannot be used!");
                    o.wrap_lverts == null && o.getlverts();
                    var r_304 = t_407.zpp_inner;
                    r_304._validate != null && r_304._validate();
                    var a_165 = r_304.x;
                    r_304._validate != null && r_304._validate();
                    var s_109 = r_304.y, c_88 = new Sn(a_165, s_109);
                    o.wrap_lverts.push(c_88);
                }
                t_406.zpp_inner._validate != null && t_406.zpp_inner._validate();
                var r_305 = t_406.zpp_inner.inner, a_166 = null, s_110 = r_305.head;
                for (; s_110 != null;) {
                    var c;
                    var e_476 = s_110.elt;
                    (c = e_476.outer) != null && (c = c.zpp_inner) != null && c.weak ? (s_110 = r_305.erase(a_166), e_476.outer.zpp_inner.weak && e_476.outer.dispose()) : (a_166 = s_110, s_110 = s_110.next);
                }
            }
            else if (e instanceof i.geom.GeomPoly) {
                var t_408 = e.zpp_inner.vertices;
                if (t_408 != null) {
                    var e_477 = t_408;
                    do {
                        o.wrap_lverts == null && o.getlverts();
                        var t_409 = new Sn(e_477.x, e_477.y);
                        o.wrap_lverts.push(t_409), e_477 = e_477.next;
                    } while (e_477 !== t_408);
                }
            }
            else
                throw Error("Error: Invalid type for polygon object, should be Array<Vec2>, Vec2List or GeomPoly");
            if (a != null) {
                if (a.zpp_disp)
                    throw Error("Vec2 has been disposed and cannot be used!");
                var e_478 = a.zpp_inner;
                e_478._validate != null && e_478._validate(), o.localCOMx = e_478.x, e_478._validate != null && e_478._validate(), o.localCOMy = e_478.y, e_478.weak && a.dispose();
            }
            n == null ? Z.zpp_pool == null ? o.material = new Z : (o.material = Z.zpp_pool, Z.zpp_pool = o.material.next, o.material.next = null) : (o.immutable_midstep("Shape::material"), o.setMaterial(n.zpp_inner), o.material.wrapper()), r == null ? Vi.zpp_pool == null ? o.filter = new Vi : (o.filter = Vi.zpp_pool, Vi.zpp_pool = o.filter.next, o.filter.next = null) : (o.immutable_midstep("Shape::filter"), o.setFilter(r.zpp_inner), o.filter.wrapper()), o.insert_cbtype(Br.ANY_SHAPE.zpp_inner);
            return _this;
        }
        e._wrap = function (t) { return t ? t instanceof e ? t : t instanceof Qi ? v(t, function (t) { var n = Object.create(e.prototype); return n.zpp_inner_zn = t, n.zpp_inner = t, n.zpp_inner_i = t, t.outer = n, t.outer_zn = n, t.outer_i = n, n; }) : t.zpp_inner_zn ? e._wrap(t.zpp_inner_zn) : v(t, function (t) { var n = Object.create(e.prototype); return n.zpp_inner_i = t.zpp_inner_i, n; }) : null; };
        e.rect = function (e, t, n, r, i) {
            if (i === void 0) { i = !1; }
            if (e !== e || t !== t || n !== n || r !== r)
                throw Error("Polygon.rect cannot accept NaN arguments");
            var a = new Sn(e, t);
            a.zpp_inner.weak = i;
            var o = new Sn(e + n, t);
            o.zpp_inner.weak = i;
            var s = new Sn(e + n, t + r);
            s.zpp_inner.weak = i;
            var c = new Sn(e, t + r);
            return c.zpp_inner.weak = i, [a, o, s, c];
        };
        e.box = function (t, n, r) {
            if (n === void 0) { n = t; }
            if (r === void 0) { r = !1; }
            if (t !== t || n !== n)
                throw Error("Polygon.box cannot accept NaN arguments");
            return e.rect(-t / 2, -n / 2, t, n, r);
        };
        e.regular = function (e, t, n, r, i) {
            if (r === void 0) { r = 0; }
            if (i === void 0) { i = !1; }
            if (e !== e || t !== t || r !== r)
                throw Error("Polygon.regular cannot accept NaN arguments");
            var a = [], o = Math.PI * 2 / n;
            for (var s_111 = 0; s_111 < n; s_111++) {
                var n_346 = s_111 * o + r, c_89 = new Sn(Math.cos(n_346) * e, Math.sin(n_346) * t);
                c_89.zpp_inner.weak = i, a.push(c_89);
            }
            return a;
        };
        Object.defineProperty(e.prototype, "localVerts", {
            get: function () { return this.zpp_inner_zn.wrap_lverts == null && this.zpp_inner_zn.getlverts(), this.zpp_inner_zn.wrap_lverts; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "worldVerts", {
            get: function () { return this.zpp_inner_zn.wrap_gverts == null && this.zpp_inner_zn.getgverts(), this.zpp_inner_zn.wrap_gverts; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "edges", {
            get: function () { return this.zpp_inner_zn.wrap_edges == null && this.zpp_inner_zn.getedges(), this.zpp_inner_zn.wrap_edges; },
            enumerable: false,
            configurable: true
        });
        e.prototype.validity = function () { return this.zpp_inner_zn.valid(); };
        return e;
    }(zi)), ue(function (e) { return $i._wrap(e); }), ea = 8, ta = (function (_super) {
        __extends(e, _super);
        function e(e, t, n, r, i) {
            if (e === void 0) { e = 100; }
            if (t === void 0) { t = 40; }
            var _this = this;
            if (_this = _super.call(this) || this, e !== e || t !== t)
                throw Error("Capsule dimensions cannot be NaN");
            if (t <= 0)
                throw Error("Capsule height (" + t + ") must be > 0");
            if (e < t)
                throw Error("Capsule width (" + e + ") must be >= height (" + t + ")");
            var a = t / 2, o = (e - t) / 2, s = new Qi;
            _this.zpp_inner_zn = s, _this.zpp_inner = s, _this.zpp_inner_i = s, s.outer = _this, s.outer_zn = _this, s.outer_i = _this, s._isCapsule = !0, s._capsuleRadius = a, s._capsuleHalfLength = o;
            var c = 0, l = 0;
            if (n != null) {
                if (n.zpp_disp)
                    throw Error("Vec2 has been disposed and cannot be used!");
                var e_479 = n.zpp_inner;
                e_479._validate != null && e_479._validate(), c = e_479.x, e_479._validate != null && e_479._validate(), l = e_479.y, e_479.weak && n.dispose();
            }
            var u = me(o, a);
            s.wrap_lverts == null && s.getlverts();
            for (var _b = 0, u_69 = u; _b < u_69.length; _b++) {
                var e_480 = u_69[_b];
                var t_410 = new Sn(e_480.x + c, e_480.y + l);
                s.wrap_lverts.push(t_410);
            }
            r == null ? Z.zpp_pool == null ? s.material = new Z : (s.material = Z.zpp_pool, Z.zpp_pool = s.material.next, s.material.next = null) : (s.immutable_midstep("Shape::material"), s.setMaterial(r.zpp_inner), s.material.wrapper()), i == null ? Vi.zpp_pool == null ? s.filter = new Vi : (s.filter = Vi.zpp_pool, Vi.zpp_pool = s.filter.next, s.filter.next = null) : (s.immutable_midstep("Shape::filter"), s.setFilter(i.zpp_inner), s.filter.wrapper()), s.insert_cbtype(Br.ANY_SHAPE.zpp_inner);
            return _this;
        }
        e._wrap = function (t) { if (!t)
            return null; if (t instanceof e)
            return t; var n = t instanceof Qi ? t : t.zpp_inner_zn, r = n != null && n._isCapsule ? n.outer : null; return r instanceof e ? r : null; };
        Object.defineProperty(e.prototype, "type", {
            get: function () { return Pi.CAPSULE; },
            enumerable: false,
            configurable: true
        });
        e.prototype.isPolygon = function () { return !1; };
        e.prototype.isCapsule = function () { return !0; };
        Object.defineProperty(e.prototype, "radius", {
            get: function () { return this.zpp_inner_zn._capsuleRadius; },
            set: function (e) { var t = this.zpp_inner_zn; if (this.zpp_inner.immutable_midstep("Capsule::radius"), t.body != null && t.body.type === 1 && t.body.space != null)
                throw Error("Error: Cannot modify radius of Capsule contained in static object once added to space"); if (e !== this.radius) {
                if (e !== e)
                    throw Error("Capsule::radius cannot be NaN");
                if (e < R.epsilon)
                    throw Error("Capsule::radius (" + e + ") must be > Config.epsilon");
                t._capsuleRadius = e, this._regenerateVertices();
            } },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "halfLength", {
            get: function () { return this.zpp_inner_zn._capsuleHalfLength; },
            set: function (e) { var t = this.zpp_inner_zn; if (this.zpp_inner.immutable_midstep("Capsule::halfLength"), t.body != null && t.body.type === 1 && t.body.space != null)
                throw Error("Error: Cannot modify halfLength of Capsule contained in static object once added to space"); if (e !== this.halfLength) {
                if (e !== e)
                    throw Error("Capsule::halfLength cannot be NaN");
                if (e < 0)
                    throw Error("Capsule::halfLength (" + e + ") must be >= 0");
                t._capsuleHalfLength = e, this._regenerateVertices();
            } },
            enumerable: false,
            configurable: true
        });
        e.prototype._regenerateVertices = function () { var e = this.zpp_inner_zn; e.validate_localCOM(); var t = e.localCOMx, n = e.localCOMy; for (e.wrap_lverts == null && e.getlverts(); e.wrap_lverts.length > 0;)
            e.wrap_lverts.pop(); var r = me(this.halfLength, this.radius); for (var _b = 0, r_306 = r; _b < r_306.length; _b++) {
            var i_214 = r_306[_b];
            var r_307 = new Sn(i_214.x + t, i_214.y + n);
            e.wrap_lverts.push(r_307);
        } };
        Object.defineProperty(e.prototype, "width", {
            get: function () { return 2 * (this.halfLength + this.radius); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "height", {
            get: function () { return 2 * this.radius; },
            enumerable: false,
            configurable: true
        });
        return e;
    }(zi)), de(function (e) { return ta._wrap(e); }), na = (function () {
        function e() {
            if (!U.internal)
                throw Error("Cannot instantiate Broadphase derp!");
        }
        Object.defineProperty(e, "DYNAMIC_AABB_TREE", {
            get: function () { return U.Broadphase_DYNAMIC_AABB_TREE == null && (U.internal = !0, U.Broadphase_DYNAMIC_AABB_TREE = new e, U.internal = !1), U.Broadphase_DYNAMIC_AABB_TREE; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e, "SWEEP_AND_PRUNE", {
            get: function () { return U.Broadphase_SWEEP_AND_PRUNE == null && (U.internal = !0, U.Broadphase_SWEEP_AND_PRUNE = new e, U.internal = !1), U.Broadphase_SWEEP_AND_PRUNE; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e, "SPATIAL_HASH", {
            get: function () { return U.Broadphase_SPATIAL_HASH == null && (U.internal = !0, U.Broadphase_SPATIAL_HASH = new e, U.internal = !1), U.Broadphase_SPATIAL_HASH; },
            enumerable: false,
            configurable: true
        });
        e.prototype.toString = function () { return this === U.Broadphase_DYNAMIC_AABB_TREE ? "DYNAMIC_AABB_TREE" : this === U.Broadphase_SWEEP_AND_PRUNE ? "SWEEP_AND_PRUNE" : this === U.Broadphase_SPATIAL_HASH ? "SPATIAL_HASH" : ""; };
        return e;
    }()), ra = "Cannot evaluate impulse on null body", ia = (function () {
        function e() {
            this.debugDraw = !0;
        }
        e.prototype._tagAnyConstraint = function () { this.zpp_inner.insert_cbtype(Br.ANY_CONSTRAINT.zpp_inner); };
        e._wrap = function (t) { var n; return t == null ? null : t instanceof e ? t : ((n = t.zpp_inner) == null ? void 0 : n.outer) instanceof e ? t.zpp_inner.outer : v(t, function (t) { var n, r; var i = Object.create(e.prototype); return i.zpp_inner = (n = t.zpp_inner) == null ? t : n, i.zpp_inner.outer = i, i.debugDraw = (r = t.debugDraw) == null || r, i; }); };
        Object.defineProperty(e.prototype, "space", {
            get: function () { return this.zpp_inner.space == null ? null : this.zpp_inner.space.outer; },
            set: function (e) { if (this.zpp_inner.compound != null)
                throw Error("Error: Cannot set the space of a Constraint belonging to a Compound, only the root Compound space can be set"); if ((this.zpp_inner.space == null ? null : this.zpp_inner.space.outer) != e) {
                if (this.zpp_inner.component != null && (this.zpp_inner.component.woken = !1), this.zpp_inner.clearcache(), this.zpp_inner.space != null && this.zpp_inner.space.wrap_constraints.remove(this), e != null) {
                    var t_411 = e.zpp_inner.wrap_constraints;
                    t_411.zpp_inner.reverse_flag ? t_411.push(this) : t_411.unshift(this);
                }
                else
                    this.zpp_inner.space = null;
            } },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "compound", {
            get: function () { return this.zpp_inner.compound == null ? null : this.zpp_inner.compound.outer; },
            set: function (e) { var t = this.zpp_inner.compound == null ? null : this.zpp_inner.compound.outer; if (t != e && (t == null || t.zpp_inner.wrap_constraints.remove(this), e != null)) {
                var t_412 = e.zpp_inner.wrap_constraints;
                t_412.zpp_inner.reverse_flag ? t_412.push(this) : t_412.unshift(this);
            } },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "active", {
            get: function () { return this.zpp_inner.active; },
            set: function (e) { this.zpp_inner.active != e && (this.zpp_inner.component != null && (this.zpp_inner.component.woken = !1), this.zpp_inner.clearcache(), e ? (this.zpp_inner.active = e, this.zpp_inner.activate(), this.zpp_inner.space != null && (this.zpp_inner.component != null && (this.zpp_inner.component.sleeping = !0), this.zpp_inner.space.wake_constraint(this.zpp_inner, !0))) : (this.zpp_inner.space != null && (this.zpp_inner.wake(), this.zpp_inner.space.live_constraints.remove(this.zpp_inner)), this.zpp_inner.active = e, this.zpp_inner.deactivate())); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "ignore", {
            get: function () { return this.zpp_inner.ignore; },
            set: function (e) { this.zpp_inner.ignore != e && (this.zpp_inner.ignore = e, this.zpp_inner.wake()); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "stiff", {
            get: function () { return this.zpp_inner.stiff; },
            set: function (e) { this.zpp_inner.stiff != e && (this.zpp_inner.stiff = e, this.zpp_inner.wake()); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "frequency", {
            get: function () { return this.zpp_inner.frequency; },
            set: function (e) { if (e !== e)
                throw Error("Constraint::Frequency cannot be NaN"); if (e <= 0)
                throw Error("Constraint::Frequency must be >0"); this.zpp_inner.frequency != e && (this.zpp_inner.frequency = e, this.zpp_inner.stiff || this.zpp_inner.wake()); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "damping", {
            get: function () { return this.zpp_inner.damping; },
            set: function (e) { if (e !== e)
                throw Error("Constraint::Damping cannot be Nan"); if (e < 0)
                throw Error("Constraint::Damping must be >=0"); this.zpp_inner.damping != e && (this.zpp_inner.damping = e, this.zpp_inner.stiff || this.zpp_inner.wake()); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "maxForce", {
            get: function () { return this.zpp_inner.maxForce; },
            set: function (e) { if (e !== e)
                throw Error("Constraint::maxForce cannot be NaN"); if (e < 0)
                throw Error("Constraint::maxForce must be >=0"); this.zpp_inner.maxForce != e && (this.zpp_inner.maxForce = e, this.zpp_inner.wake()); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "maxError", {
            get: function () { return this.zpp_inner.maxError; },
            set: function (e) { if (e !== e)
                throw Error("Constraint::maxError cannot be NaN"); if (e < 0)
                throw Error("Constraint::maxError must be >=0"); this.zpp_inner.maxError != e && (this.zpp_inner.maxError = e, this.zpp_inner.wake()); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "breakUnderForce", {
            get: function () { return this.zpp_inner.breakUnderForce; },
            set: function (e) { this.zpp_inner.breakUnderForce != e && (this.zpp_inner.breakUnderForce = e, this.zpp_inner.wake()); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "breakUnderError", {
            get: function () { return this.zpp_inner.breakUnderError; },
            set: function (e) { this.zpp_inner.breakUnderError != e && (this.zpp_inner.breakUnderError = e, this.zpp_inner.wake()); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "removeOnBreak", {
            get: function () { return this.zpp_inner.removeOnBreak; },
            set: function (e) { this.zpp_inner.removeOnBreak = e; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "isSleeping", {
            get: function () { if (this.zpp_inner.space == null || !this.zpp_inner.active)
                throw Error("Error: isSleeping only makes sense if constraint is active and inside a space"); return this.zpp_inner.component.sleeping; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "userData", {
            get: function () { return this.zpp_inner.userData == null && (this.zpp_inner.userData = {}), this.zpp_inner.userData; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "cbTypes", {
            get: function () { return this.zpp_inner.wrap_cbTypes == null && this.zpp_inner.setupcbTypes(), this.zpp_inner.wrap_cbTypes; },
            enumerable: false,
            configurable: true
        });
        e.prototype.impulse = function () { return null; };
        e.prototype.bodyImpulse = function (e) { return null; };
        e.prototype.visitBodies = function (e) { };
        e.prototype.copy = function () { return e._wrap(this.zpp_inner.copy()); };
        e.prototype.toString = function () { return "{Constraint}"; };
        return e;
    }()), ia.zpp_internalAlloc = !1, aa = ia, oa = (function () {
        function e() {
            this.outer = null, this.id = 0, this.userData = null, this.compound = null, this.space = null, this.active = !1, this.stiff = !1, this.frequency = 0, this.damping = 0, this.maxForce = 0, this.maxError = 0, this.breakUnderForce = !1, this.breakUnderError = !1, this.removeOnBreak = !1, this.component = null, this.ignore = !1, this.__velocity = !1, this.cbTypes = null, this.cbSet = null, this.wrap_cbTypes = null, this.pre_dt = -1, this._initBase();
        }
        e.prototype._initBase = function () { this.id = In.Constraint(), this.stiff = !0, this.active = !0, this.ignore = !1, this.frequency = 10, this.damping = 1, this.maxForce = 1 / 0, this.maxError = 1 / 0, this.breakUnderForce = !1, this.removeOnBreak = !0, this.pre_dt = -1, this.cbTypes = new ut; };
        e.prototype.clear = function () { };
        e.prototype.activeBodies = function () { };
        e.prototype.inactiveBodies = function () { };
        e.prototype.clearcache = function () { };
        e.prototype.validate = function () { };
        e.prototype.wake_connected = function () { };
        e.prototype.forest = function () { };
        e.prototype.broken = function () { };
        e.prototype.warmStart = function () { };
        e.prototype.draw = function (e) { };
        e.prototype.pair_exists = function (e, t) { return !1; };
        e.prototype.preStep = function (e) { return !1; };
        e.prototype.applyImpulseVel = function () { return !1; };
        e.prototype.applyImpulsePos = function () { return !1; };
        e.prototype.copy = function (e, t) { return null; };
        e.prototype.immutable_midstep = function (e) { if (this.space != null && this.space.midstep)
            throw Error("Constraint::" + e + " cannot be set during space step()"); };
        e.prototype.setupcbTypes = function () { var t = e._zpp; this.wrap_cbTypes = t.util.ZPP_CbTypeList.get(this.cbTypes), this.wrap_cbTypes.zpp_inner.adder = this.wrap_cbTypes_adder.bind(this), this.wrap_cbTypes.zpp_inner.subber = this.wrap_cbTypes_subber.bind(this), this.wrap_cbTypes.zpp_inner.dontremove = !0, this.wrap_cbTypes.zpp_inner._modifiable = this.immutable_cbTypes.bind(this); };
        e.prototype.immutable_cbTypes = function () { this.immutable_midstep("Constraint::cbTypes"); };
        e.prototype.wrap_cbTypes_subber = function (e) { var t = e.zpp_inner; this.cbTypes.has(t) && (this.space != null && (this.dealloc_cbSet(), t.constraints.remove(this)), this.cbTypes.remove(t), this.space != null && (this.alloc_cbSet(), this.wake())); };
        e.prototype.wrap_cbTypes_adder = function (e) { return this.insert_cbtype(e.zpp_inner), !1; };
        e.prototype.insert_cbtype = function (e) { if (!this.cbTypes.has(e)) {
            this.space != null && (this.dealloc_cbSet(), e.constraints.add(this));
            var t_413 = null, n_347 = this.cbTypes.head;
            for (; n_347 != null;) {
                var r_308 = n_347.elt;
                if (e.id < r_308.id)
                    break;
                t_413 = n_347, n_347 = n_347.next;
            }
            this.cbTypes.insert(t_413, e), this.space != null && (this.alloc_cbSet(), this.wake());
        } };
        e.prototype.alloc_cbSet = function () { (this.cbSet = this.space.cbsets.get(this.cbTypes)) != null && (this.cbSet.count++, this.cbSet.constraints.add(this)); };
        e.prototype.dealloc_cbSet = function () { if (this.cbSet != null) {
            if (this.cbSet.constraints.remove(this), --this.cbSet.count == 0) {
                this.space.cbsets.remove(this.cbSet);
                var e_481 = this.cbSet;
                for (e_481.listeners.clear(), e_481.zip_listeners = !0, e_481.bodylisteners.clear(), e_481.zip_bodylisteners = !0, e_481.conlisteners.clear(), e_481.zip_conlisteners = !0; e_481.cbTypes.head != null;)
                    e_481.cbTypes.pop_unsafe().cbsets.remove(e_481);
                e_481.next = J.zpp_pool, J.zpp_pool = e_481;
            }
            this.cbSet = null;
        } };
        e.prototype.activate = function () { this.space != null && this.activeInSpace(); };
        e.prototype.deactivate = function () { this.space != null && this.inactiveOrOutSpace(); };
        e.prototype.addedToSpace = function () { this.active && this.activeInSpace(), this.activeBodies(); var e = this.cbTypes.head; for (; e != null;)
            e.elt.constraints.add(this), e = e.next; };
        e.prototype.removedFromSpace = function () { this.active && this.inactiveOrOutSpace(), this.inactiveBodies(); var e = this.cbTypes.head; for (; e != null;)
            e.elt.constraints.remove(this), e = e.next; };
        e.prototype.activeInSpace = function () { var t = e._zpp; this.alloc_cbSet(), t.space.ZPP_Component.zpp_pool == null ? this.component = new t.space.ZPP_Component : (this.component = t.space.ZPP_Component.zpp_pool, t.space.ZPP_Component.zpp_pool = this.component.next, this.component.next = null), this.component.isBody = !1, this.component.constraint = this; };
        e.prototype.inactiveOrOutSpace = function () { var t = e._zpp; this.dealloc_cbSet(); var n = this.component; n.body = null, n.constraint = null, n.next = t.space.ZPP_Component.zpp_pool, t.space.ZPP_Component.zpp_pool = n, this.component = null; };
        e.prototype.wake = function () { this.space != null && this.space.wake_constraint(this); };
        e.prototype.copyto = function (t) { var n = e._nape, r = this.outer; r.zpp_inner.wrap_cbTypes == null && r.zpp_inner.setupcbTypes(); var i = r.zpp_inner.wrap_cbTypes; i.zpp_inner.valmod(); var a = n.callbacks.CbTypeIterator.get(i); for (;;) {
            a.zpp_inner.zpp_inner.valmod();
            var e_482 = a.zpp_inner;
            e_482.zpp_inner.valmod(), e_482.zpp_inner.zip_length && (e_482.zpp_inner.zip_length = !1, e_482.zpp_inner.user_length = e_482.zpp_inner.inner.length);
            var r_309 = e_482.zpp_inner.user_length;
            a.zpp_critical = !0;
            var i_215 = void 0;
            if (a.zpp_i < r_309 ? i_215 = !0 : (a.zpp_next = n.callbacks.CbTypeIterator.zpp_pool, n.callbacks.CbTypeIterator.zpp_pool = a, a.zpp_inner = null, i_215 = !1), !i_215)
                break;
            a.zpp_critical = !1;
            var o_123 = a.zpp_inner.at(a.zpp_i++);
            t.zpp_inner.wrap_cbTypes == null && t.zpp_inner.setupcbTypes();
            var s_112 = t.zpp_inner.wrap_cbTypes;
            s_112.zpp_inner.reverse_flag ? s_112.push(o_123) : s_112.unshift(o_123);
        } t.zpp_inner.removeOnBreak = r.zpp_inner.removeOnBreak; var o = r.zpp_inner.breakUnderError; t.zpp_inner.breakUnderError != o && (t.zpp_inner.breakUnderError = o, t.zpp_inner.wake()); var s = r.zpp_inner.breakUnderForce; t.zpp_inner.breakUnderForce != s && (t.zpp_inner.breakUnderForce = s, t.zpp_inner.wake()); var c = r.zpp_inner.maxError; if (c !== c)
            throw Error("Constraint::maxError cannot be NaN"); if (c < 0)
            throw Error("Constraint::maxError must be >=0"); t.zpp_inner.maxError != c && (t.zpp_inner.maxError = c, t.zpp_inner.wake()); var l = r.zpp_inner.maxForce; if (l !== l)
            throw Error("Constraint::maxForce cannot be NaN"); if (l < 0)
            throw Error("Constraint::maxForce must be >=0"); t.zpp_inner.maxForce != l && (t.zpp_inner.maxForce = l, t.zpp_inner.wake()); var u = r.zpp_inner.damping; if (u !== u)
            throw Error("Constraint::Damping cannot be Nan"); if (u < 0)
            throw Error("Constraint::Damping must be >=0"); t.zpp_inner.damping != u && (t.zpp_inner.damping = u, t.zpp_inner.stiff || t.zpp_inner.wake()); var d = r.zpp_inner.frequency; if (d !== d)
            throw Error("Constraint::Frequency cannot be NaN"); if (d <= 0)
            throw Error("Constraint::Frequency must be >0"); t.zpp_inner.frequency != d && (t.zpp_inner.frequency = d, t.zpp_inner.stiff || t.zpp_inner.wake()); var f = r.zpp_inner.stiff; t.zpp_inner.stiff != f && (t.zpp_inner.stiff = f, t.zpp_inner.wake()); var p = r.zpp_inner.ignore; t.zpp_inner.ignore != p && (t.zpp_inner.ignore = p, t.zpp_inner.wake()); var m = r.zpp_inner.active; t.zpp_inner.active != m && (t.zpp_inner.component != null && (t.zpp_inner.component.woken = !1), t.zpp_inner.clearcache(), m ? (t.zpp_inner.active = m, t.zpp_inner.activate(), t.zpp_inner.space != null && (t.zpp_inner.component != null && (t.zpp_inner.component.sleeping = !0), t.zpp_inner.space.wake_constraint(t.zpp_inner, !0))) : (t.zpp_inner.space != null && (t.zpp_inner.wake(), t.zpp_inner.space.live_constraints.remove(t.zpp_inner)), t.zpp_inner.active = m, t.zpp_inner.deactivate())); };
        e._findRoot = function (e) { if (e == e.parent)
            return e; var t = e, n = null; for (; t != t.parent;) {
            var e_483 = t.parent;
            t.parent = n, n = t, t = e_483;
        } for (; n != null;) {
            var e_484 = n.parent;
            n.parent = t, n = e_484;
        } return t; };
        e._unionComponents = function (t, n) { var r = e._findRoot(t), i = e._findRoot(n); r != i && (r.rank < i.rank ? r.parent = i : r.rank > i.rank ? i.parent = r : (i.parent = r, r.rank++)); };
        return e;
    }()), oa._nape = null, oa._zpp = null, Q = oa, sa = (function () {
        function e() {
            this.id = 0, this.bc = null, this.cb = null;
        }
        e.dict = function (t, n) { var r = new e; return r.id = t, r.bc = n, r; };
        e.todo = function (t, n) { var r = new e; return r.id = t, r.cb = n, r; };
        return e;
    }()), ca = (function (_super) {
        __extends(e, _super);
        function e() {
            var _this = this;
            _this = _super.call(this) || this, _this.outer_zn = null, _this.ratio = 0, _this.jointMin = 0, _this.jointMax = 0, _this.slack = !1, _this.equal = !1, _this.scale = 0, _this.b1 = null, _this.b2 = null, _this.kMass = 0, _this.jAcc = 0, _this.jMax = 0, _this.gamma = 0, _this.bias = 0, _this.stepped = !1, _this.ratio = 1, _this.jAcc = 0, _this.slack = !1, _this.jMax = 1 / 0, _this.stepped = !1;
            return _this;
        }
        e.prototype.is_slack = function () { var e = this.ratio * this.b2.rot - this.b1.rot; return this.equal ? (this.scale = 1, !1) : e < this.jointMin ? (this.scale = -1, !1) : e > this.jointMax ? (this.scale = 1, !1) : (this.scale = 0, !0); };
        e.prototype.bodyImpulse = function (e) { var t = d(); return this.stepped ? e == this.b1 ? t.geom.Vec3.get(0, 0, -this.scale * this.jAcc) : t.geom.Vec3.get(0, 0, this.ratio * this.scale * this.jAcc) : t.geom.Vec3.get(0, 0, 0); };
        e.prototype.activeBodies = function () { this.b1 != null && this.b1.constraints.add(this), this.b2 != this.b1 && this.b2 != null && this.b2.constraints.add(this); };
        e.prototype.inactiveBodies = function () { this.b1 != null && this.b1.constraints.remove(this), this.b2 != this.b1 && this.b2 != null && this.b2.constraints.remove(this); };
        e.prototype.copy = function (t, n) { var r = e._createFn(null, null, this.jointMin, this.jointMax, this.ratio); if (this.copyto(r), t != null && this.b1 != null) {
            var e_485 = null, i_216 = 0;
            for (; i_216 < t.length;) {
                var n_348 = t[i_216];
                if (++i_216, n_348.id == this.b1.id) {
                    e_485 = n_348.bc;
                    break;
                }
            }
            e_485 == null ? n.push(sa.todo(this.b1.id, function (e) { r.zpp_inner.b1 = e.zpp_inner; })) : r.zpp_inner.b1 = e_485.zpp_inner;
        } if (t != null && this.b2 != null) {
            var e_486 = null, i_217 = 0;
            for (; i_217 < t.length;) {
                var n_349 = t[i_217];
                if (++i_217, n_349.id == this.b2.id) {
                    e_486 = n_349.bc;
                    break;
                }
            }
            e_486 == null ? n.push(sa.todo(this.b2.id, function (e) { r.zpp_inner.b2 = e.zpp_inner; })) : r.zpp_inner.b2 = e_486.zpp_inner;
        } return r; };
        e.prototype.validate = function () { if (this.b1 == null || this.b2 == null)
            throw Error("AngleJoint cannot be simulated null bodies"); if (this.b1 == this.b2)
            throw Error("AngleJoint cannot be simulated with body1 == body2"); if (this.b1.space != this.space || this.b2.space != this.space)
            throw Error("Error: Constraints must have each body within the same space to which the constraint has been assigned"); if (this.jointMin > this.jointMax)
            throw Error("AngleJoint must have jointMin <= jointMax"); if (this.b1.type != 2 && this.b2.type != 2)
            throw Error("Constraints cannot have both bodies non-dynamic"); };
        e.prototype.wake_connected = function () { this.b1 != null && this.b1.type == 2 && this.b1.wake(), this.b2 != null && this.b2.type == 2 && this.b2.wake(); };
        e.prototype.forest = function () { this.b1.type == 2 && Q._unionComponents(this.b1.component, this.component), this.b2.type == 2 && Q._unionComponents(this.b2.component, this.component); };
        e.prototype.pair_exists = function (e, t) { return this.b1.id == e && this.b2.id == t || this.b1.id == t && this.b2.id == e; };
        e.prototype.clearcache = function () { this.jAcc = 0, this.pre_dt = -1, this.slack = !1; };
        e.prototype.preStep = function (e) { this.pre_dt == -1 && (this.pre_dt = e); var t = e / this.pre_dt; this.pre_dt = e, this.stepped = !0, this.equal = this.jointMin == this.jointMax; var n = this.ratio * this.b2.rot - this.b1.rot; this.equal ? (n -= this.jointMax, this.slack = !1, this.scale = 1) : n < this.jointMin ? (n = this.jointMin - n, this.scale = -1, this.slack = !1) : n > this.jointMax ? (n -= this.jointMax, this.scale = 1, this.slack = !1) : (this.scale = 0, n = 0, this.slack = !0); var r = n; if (!this.slack) {
            if (this.kMass = this.b1.sinertia + this.ratio * this.ratio * this.b2.sinertia, this.kMass == 0 ? this.jAcc = 0 : this.kMass = 1 / this.kMass, this.stiff)
                this.bias = 0, this.gamma = 0;
            else {
                if (this.breakUnderError && r * r > this.maxError * this.maxError)
                    return !0;
                var t_414 = 2 * Math.PI * this.frequency;
                this.gamma = 1 / (e * t_414 * (2 * this.damping + t_414 * e));
                var n_350 = 1 / (1 + this.gamma), i_218 = e * t_414 * t_414 * this.gamma;
                this.gamma *= n_350, this.kMass *= n_350, this.bias = -r * i_218, this.bias < -this.maxError ? this.bias = -this.maxError : this.bias > this.maxError && (this.bias = this.maxError);
            }
            this.jAcc *= t, this.jMax = this.maxForce * e;
        } return !1; };
        e.prototype.warmStart = function () { this.slack || (this.b1.angvel -= this.scale * this.b1.iinertia * this.jAcc, this.b2.angvel += this.ratio * this.scale * this.b2.iinertia * this.jAcc); };
        e.prototype.applyImpulseVel = function () { if (this.slack)
            return !1; var e = this.scale * (this.ratio * (this.b2.angvel + this.b2.kinangvel) - this.b1.angvel - this.b1.kinangvel), t = this.kMass * (this.bias - e) - this.jAcc * this.gamma, n = this.jAcc; return this.jAcc += t, !this.equal && this.jAcc > 0 && (this.jAcc = 0), this.breakUnderForce && (this.jAcc > this.jMax || this.jAcc < -this.jMax) ? !0 : (this.stiff || (this.jAcc > this.jMax ? this.jAcc = this.jMax : this.jAcc < -this.jMax && (this.jAcc = -this.jMax)), t = this.jAcc - n, this.b1.angvel -= this.scale * this.b1.iinertia * t, this.b2.angvel += this.ratio * this.scale * this.b2.iinertia * t, !1); };
        e.prototype.applyImpulsePos = function () { var e = this.ratio * this.b2.rot - this.b1.rot, t; this.equal ? (e -= this.jointMax, t = !1, this.scale = 1) : e < this.jointMin ? (e = this.jointMin - e, this.scale = -1, t = !1) : e > this.jointMax ? (e -= this.jointMax, this.scale = 1, t = !1) : (this.scale = 0, e = 0, t = !0); var n = e; if (!t) {
            if (this.breakUnderError && n * n > this.maxError * this.maxError)
                return !0;
            var e_487 = -(n * .5) * this.kMass;
            if (this.equal || e_487 < 0) {
                var t_415 = this.b1, n_351 = -this.scale * e_487 * this.b1.iinertia;
                if (t_415.rot += n_351, n_351 * n_351 > 1e-4)
                    t_415.axisx = Math.sin(t_415.rot), t_415.axisy = Math.cos(t_415.rot);
                else {
                    var e_488 = n_351 * n_351, r_310 = 1 - .5 * e_488, i_219 = 1 - e_488 * e_488 / 8, a_167 = (r_310 * t_415.axisx + n_351 * t_415.axisy) * i_219;
                    t_415.axisy = (r_310 * t_415.axisy - n_351 * t_415.axisx) * i_219, t_415.axisx = a_167;
                }
                var r_311 = this.b2, i_220 = this.ratio * this.scale * e_487 * this.b2.iinertia;
                if (r_311.rot += i_220, i_220 * i_220 > 1e-4)
                    r_311.axisx = Math.sin(r_311.rot), r_311.axisy = Math.cos(r_311.rot);
                else {
                    var e_489 = i_220 * i_220, t_416 = 1 - .5 * e_489, n_352 = 1 - e_489 * e_489 / 8, a_168 = (t_416 * r_311.axisx + i_220 * r_311.axisy) * n_352;
                    r_311.axisy = (t_416 * r_311.axisy - i_220 * r_311.axisx) * n_352, r_311.axisx = a_168;
                }
            }
        } return !1; };
        e._rotateBody = function (e, t) { if (e.rot += t, t * t > 1e-4)
            e.axisx = Math.sin(e.rot), e.axisy = Math.cos(e.rot);
        else {
            var n_353 = t * t, r_312 = 1 - .5 * n_353, i_221 = 1 - n_353 * n_353 / 8, a_169 = (r_312 * e.axisx + t * e.axisy) * i_221;
            e.axisy = (r_312 * e.axisy - t * e.axisx) * i_221, e.axisx = a_169;
        } };
        e._copyBody = function (e, t, n, r, i) { if (e != null && n != null) {
            var a_170 = null;
            for (var t_417 = 0; t_417 < e.length; t_417++) {
                var r_313 = e[t_417];
                if (r_313.id == n.id) {
                    a_170 = r_313.bc;
                    break;
                }
            }
            a_170 == null ? t.push(sa.todo(n.id, function (e) { r.zpp_inner[i] = e.zpp_inner; })) : r.zpp_inner[i] = a_170.zpp_inner;
        } };
        return e;
    }(Q)), ca._wrapFn = null, ca._createFn = null, $ = ca, la = (function (_super) {
        __extends(e, _super);
        function e(e, t, n, r, i) {
            if (i === void 0) { i = 1; }
            var _this = _super.call(this) || this;
            var a = new $;
            if (_this.zpp_inner = a, a.outer = _this, a.outer_zn = _this, _this._tagAnyConstraint(), _this._setBody1(e), _this._setBody2(t), _this.zpp_inner.immutable_midstep("AngleJoint::jointMin"), n !== n)
                throw Error("AngleJoint::jointMin cannot be NaN");
            if (a.jointMin != n && (a.jointMin = n, a.wake()), _this.zpp_inner.immutable_midstep("AngleJoint::jointMax"), r !== r)
                throw Error("AngleJoint::jointMax cannot be NaN");
            if (a.jointMax != r && (a.jointMax = r, a.wake()), _this.zpp_inner.immutable_midstep("AngleJoint::ratio"), i !== i)
                throw Error("AngleJoint::ratio cannot be NaN");
            a.ratio != i && (a.ratio = i, a.wake());
            return _this;
        }
        e._wrap = function (t) { var n; return t == null ? null : t instanceof e ? t : ((n = t.zpp_inner) == null ? void 0 : n.outer) instanceof e ? t.zpp_inner.outer : t instanceof $ ? v(t, function (t) { var n = Object.create(e.prototype); return n.zpp_inner = t, t.outer = n, t.outer_zn = n, n.debugDraw = !0, n; }) : v(t, function (t) { var n; var r = Object.create(e.prototype); return r.zpp_inner = (n = t.zpp_inner) == null ? t : n, r.zpp_inner.outer = r, r.zpp_inner.outer_zn = r, r; }); };
        Object.defineProperty(e.prototype, "body1", {
            get: function () { return this.zpp_inner.b1 == null ? null : Hr._wrap(this.zpp_inner.b1); },
            set: function (e) { this._setBody1(e); },
            enumerable: false,
            configurable: true
        });
        e.prototype._setBody1 = function (e) { this.zpp_inner.immutable_midstep("Constraint::body1"); var t = e == null ? null : e.zpp_inner; t != this.zpp_inner.b1 && (this.zpp_inner.b1 != null && (this.zpp_inner.space != null && this.zpp_inner.b2 != this.zpp_inner.b1 && this.zpp_inner.b1.constraints.remove(this.zpp_inner), this.zpp_inner.active && this.zpp_inner.space != null && this.zpp_inner.b1.wake()), this.zpp_inner.b1 = t, this.zpp_inner.space != null && t != null && this.zpp_inner.b2 != t && t.constraints.add(this.zpp_inner), this.zpp_inner.active && this.zpp_inner.space != null && (this.zpp_inner.wake(), t == null || t.wake())); };
        Object.defineProperty(e.prototype, "body2", {
            get: function () { return this.zpp_inner.b2 == null ? null : Hr._wrap(this.zpp_inner.b2); },
            set: function (e) { this._setBody2(e); },
            enumerable: false,
            configurable: true
        });
        e.prototype._setBody2 = function (e) { this.zpp_inner.immutable_midstep("Constraint::body2"); var t = e == null ? null : e.zpp_inner; t != this.zpp_inner.b2 && (this.zpp_inner.b2 != null && (this.zpp_inner.space != null && this.zpp_inner.b1 != this.zpp_inner.b2 && this.zpp_inner.b2.constraints.remove(this.zpp_inner), this.zpp_inner.active && this.zpp_inner.space != null && this.zpp_inner.b2.wake()), this.zpp_inner.b2 = t, this.zpp_inner.space != null && t != null && this.zpp_inner.b1 != t && t.constraints.add(this.zpp_inner), this.zpp_inner.active && this.zpp_inner.space != null && (this.zpp_inner.wake(), t == null || t.wake())); };
        Object.defineProperty(e.prototype, "jointMin", {
            get: function () { return this.zpp_inner.jointMin; },
            set: function (e) { if (this.zpp_inner.immutable_midstep("AngleJoint::jointMin"), e !== e)
                throw Error("AngleJoint::jointMin cannot be NaN"); this.zpp_inner.jointMin != e && (this.zpp_inner.jointMin = e, this.zpp_inner.wake()); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "jointMax", {
            get: function () { return this.zpp_inner.jointMax; },
            set: function (e) { if (this.zpp_inner.immutable_midstep("AngleJoint::jointMax"), e !== e)
                throw Error("AngleJoint::jointMax cannot be NaN"); this.zpp_inner.jointMax != e && (this.zpp_inner.jointMax = e, this.zpp_inner.wake()); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "ratio", {
            get: function () { return this.zpp_inner.ratio; },
            set: function (e) { if (this.zpp_inner.immutable_midstep("AngleJoint::ratio"), e !== e)
                throw Error("AngleJoint::ratio cannot be NaN"); this.zpp_inner.ratio != e && (this.zpp_inner.ratio = e, this.zpp_inner.wake()); },
            enumerable: false,
            configurable: true
        });
        e.prototype.isSlack = function () { if (this.zpp_inner.b1 == null || this.zpp_inner.b2 == null)
            throw Error("Cannot compute slack for AngleJoint if either body is null."); return this.zpp_inner.is_slack(); };
        e.prototype.impulse = function () { var e = new (d()).geom.MatMN(1, 1); if (0 >= e.zpp_inner.m || 0 >= e.zpp_inner.n)
            throw Error("MatMN indices out of range"); return e.zpp_inner.x[0 * e.zpp_inner.n] = this.zpp_inner.jAcc, e; };
        e.prototype.bodyImpulse = function (e) { var t = d(); if (e == null)
            throw Error(ra); var n = this.zpp_inner.b1 == null ? null : this.zpp_inner.b1.outer, r = this.zpp_inner.b2 == null ? null : this.zpp_inner.b2.outer; if (e != n && e != r)
            throw Error("Body is not linked to this constraint"); return this.zpp_inner.active ? this.zpp_inner.bodyImpulse(e.zpp_inner) : t.geom.Vec3.get(0, 0, 0); };
        e.prototype.visitBodies = function (e) { if (e == null)
            throw Error("Cannot apply null lambda to bodies"); var t = this.zpp_inner.b1 == null ? null : this.zpp_inner.b1.outer; t != null && e(t); var n = this.zpp_inner.b2 == null ? null : this.zpp_inner.b2.outer; n != null && n != t && e(n); };
        return e;
    }(aa)), $._wrapFn = function (e) { return v(e, function (e) { var t = Object.create(la.prototype); return t.zpp_inner = e, e.outer = t, e.outer_zn = t, t.debugDraw = !0, t; }); }, ua = (function (_super) {
        __extends(e, _super);
        function e() {
            var _this = this;
            _this = _super.call(this) || this, _this.outer_zn = null, _this.jointMin = 0, _this.jointMax = 0, _this.slack = !1, _this.equal = !1, _this.nx = 0, _this.ny = 0, _this.cx1 = 0, _this.cx2 = 0, _this.b1 = null, _this.b2 = null, _this.a1localx = 0, _this.a1localy = 0, _this.a1relx = 0, _this.a1rely = 0, _this.a2localx = 0, _this.a2localy = 0, _this.a2relx = 0, _this.a2rely = 0, _this.wrap_a1 = null, _this.wrap_a2 = null, _this.kMass = 0, _this.jAcc = 0, _this.jMax = 1 / 0, _this.gamma = 0, _this.bias = 0, _this.stepped = !1, _this.a1localx = 0, _this.a1localy = 0, _this.a1relx = 0, _this.a1rely = 0, _this.a2localx = 0, _this.a2localy = 0, _this.a2relx = 0, _this.a2rely = 0, _this.jAcc = 0, _this.jMax = 1 / 0, _this.stepped = !1, _this.cx1 = _this.cx2 = 0;
            return _this;
        }
        e.prototype.is_slack = function () { var e; this.a1relx = this.b1.axisy * this.a1localx - this.b1.axisx * this.a1localy, this.a1rely = this.a1localx * this.b1.axisx + this.a1localy * this.b1.axisy, this.a2relx = this.b2.axisy * this.a2localx - this.b2.axisx * this.a2localy, this.a2rely = this.a2localx * this.b2.axisx + this.a2localy * this.b2.axisy; var t = this.b2.posx + this.a2relx - (this.b1.posx + this.a1relx), n = this.b2.posy + this.a2rely - (this.b1.posy + this.a1rely), r = t * t + n * n; return r < R.epsilon ? e = !0 : (r = Math.sqrt(r), e = !(this.equal || r < this.jointMin || r > this.jointMax)), e; };
        e.prototype.bodyImpulse = function (e) { var t = Q._nape; return this.stepped ? e == this.b1 ? t.geom.Vec3.get(-this.jAcc * this.nx, -this.jAcc * this.ny, -this.cx1 * this.jAcc) : t.geom.Vec3.get(this.jAcc * this.nx, this.jAcc * this.ny, this.cx2 * this.jAcc) : t.geom.Vec3.get(0, 0, 0); };
        e.prototype.activeBodies = function () { this.b1 != null && this.b1.constraints.add(this), this.b2 != this.b1 && this.b2 != null && this.b2.constraints.add(this); };
        e.prototype.inactiveBodies = function () { this.b1 != null && this.b1.constraints.remove(this), this.b2 != this.b1 && this.b2 != null && this.b2.constraints.remove(this); };
        e.prototype.validate_a1 = function () { this.wrap_a1.zpp_inner.x = this.a1localx, this.wrap_a1.zpp_inner.y = this.a1localy; };
        e.prototype.invalidate_a1 = function (e) { this.immutable_midstep("Constraint::a1"), this.a1localx = e.x, this.a1localy = e.y, this.wake(); };
        e.prototype.setup_a1 = function () { this.wrap_a1 = e._setupAnchorVec2(this.a1localx, this.a1localy, this.validate_a1.bind(this), this.invalidate_a1.bind(this)); };
        e.prototype.validate_a2 = function () { this.wrap_a2.zpp_inner.x = this.a2localx, this.wrap_a2.zpp_inner.y = this.a2localy; };
        e.prototype.invalidate_a2 = function (e) { this.immutable_midstep("Constraint::a2"), this.a2localx = e.x, this.a2localy = e.y, this.wake(); };
        e.prototype.setup_a2 = function () { this.wrap_a2 = e._setupAnchorVec2(this.a2localx, this.a2localy, this.validate_a2.bind(this), this.invalidate_a2.bind(this)); };
        e.prototype.copy = function (t, n) { this.wrap_a1 == null && this.setup_a1(); var r = this.wrap_a1; this.wrap_a2 == null && this.setup_a2(); var i = e._createFn(null, null, r, this.wrap_a2, this.jointMin, this.jointMax); return this.copyto(i), $._copyBody(t, n, this.b1, i, "b1"), $._copyBody(t, n, this.b2, i, "b2"), i; };
        e.prototype.validate = function () { if (this.b1 == null || this.b2 == null)
            throw Error("DistanceJoint cannot be simulated null bodies"); if (this.b1 == this.b2)
            throw Error("DistanceJoint cannot be simulated with body1 == body2"); if (this.b1.space != this.space || this.b2.space != this.space)
            throw Error("Error: Constraints must have each body within the same space to which the constraint has been assigned"); if (this.jointMin > this.jointMax)
            throw Error("DistanceJoint must have jointMin <= jointMax"); if (this.b1.type != 2 && this.b2.type != 2)
            throw Error("Constraints cannot have both bodies non-dynamic"); };
        e.prototype.wake_connected = function () { this.b1 != null && this.b1.type == 2 && this.b1.wake(), this.b2 != null && this.b2.type == 2 && this.b2.wake(); };
        e.prototype.forest = function () { this.b1.type == 2 && Q._unionComponents(this.b1.component, this.component), this.b2.type == 2 && Q._unionComponents(this.b2.component, this.component); };
        e.prototype.pair_exists = function (e, t) { return this.b1.id == e && this.b2.id == t || this.b1.id == t && this.b2.id == e; };
        e.prototype.clearcache = function () { this.jAcc = 0, this.pre_dt = -1; };
        e.prototype.preStep = function (e) { this.pre_dt == -1 && (this.pre_dt = e); var t = e / this.pre_dt; this.pre_dt = e, this.stepped = !0, this.equal = this.jointMin == this.jointMax, this.a1relx = this.b1.axisy * this.a1localx - this.b1.axisx * this.a1localy, this.a1rely = this.a1localx * this.b1.axisx + this.a1localy * this.b1.axisy, this.a2relx = this.b2.axisy * this.a2localx - this.b2.axisx * this.a2localy, this.a2rely = this.a2localx * this.b2.axisx + this.a2localy * this.b2.axisy, this.nx = this.b2.posx + this.a2relx - (this.b1.posx + this.a1relx), this.ny = this.b2.posy + this.a2rely - (this.b1.posy + this.a1rely); var n = this.nx * this.nx + this.ny * this.ny; if (n < R.epsilon)
            this.nx = 0, this.ny = 0, n = 0, this.slack = !0;
        else {
            n = Math.sqrt(n);
            var e_490 = 1 / n;
            this.nx *= e_490, this.ny *= e_490, this.equal ? (n -= this.jointMax, this.slack = !1) : n < this.jointMin ? (n = this.jointMin - n, this.nx = -this.nx, this.ny = -this.ny, this.slack = !1) : n > this.jointMax ? (n -= this.jointMax, this.slack = !1) : (this.nx = 0, this.ny = 0, n = 0, this.slack = !0);
        } var r = n; if (!this.slack) {
            if (this.cx1 = this.ny * this.a1relx - this.nx * this.a1rely, this.cx2 = this.ny * this.a2relx - this.nx * this.a2rely, this.kMass = this.b1.smass + this.b2.smass + this.cx1 * this.cx1 * this.b1.sinertia + this.cx2 * this.cx2 * this.b2.sinertia, this.kMass == 0 ? this.jAcc = 0 : this.kMass = 1 / this.kMass, this.stiff)
                this.bias = 0, this.gamma = 0;
            else {
                if (this.breakUnderError && r * r > this.maxError * this.maxError)
                    return !0;
                var t_418 = 2 * Math.PI * this.frequency;
                this.gamma = 1 / (e * t_418 * (2 * this.damping + t_418 * e));
                var n_354 = 1 / (1 + this.gamma), i_222 = e * t_418 * t_418 * this.gamma;
                this.gamma *= n_354, this.kMass *= n_354, this.bias = -r * i_222, this.bias < -this.maxError ? this.bias = -this.maxError : this.bias > this.maxError && (this.bias = this.maxError);
            }
            this.jAcc *= t, this.jMax = this.maxForce * e;
        } return !1; };
        e.prototype.warmStart = function () { if (!this.slack) {
            var e_491 = this.b1.imass * this.jAcc;
            this.b1.velx -= this.nx * e_491, this.b1.vely -= this.ny * e_491;
            var t_419 = this.b2.imass * this.jAcc;
            this.b2.velx += this.nx * t_419, this.b2.vely += this.ny * t_419, this.b1.angvel -= this.cx1 * this.b1.iinertia * this.jAcc, this.b2.angvel += this.cx2 * this.b2.iinertia * this.jAcc;
        } };
        e.prototype.applyImpulseVel = function () { if (this.slack)
            return !1; var e = this.nx * (this.b2.velx + this.b2.kinvelx - this.b1.velx - this.b1.kinvelx) + this.ny * (this.b2.vely + this.b2.kinvely - this.b1.vely - this.b1.kinvely) + (this.b2.angvel + this.b2.kinangvel) * this.cx2 - (this.b1.angvel + this.b1.kinangvel) * this.cx1, t = this.kMass * (this.bias - e) - this.jAcc * this.gamma, n = this.jAcc; if (this.jAcc += t, !this.equal && this.jAcc > 0 && (this.jAcc = 0), this.breakUnderForce && this.jAcc < -this.jMax)
            return !0; this.stiff || this.jAcc < -this.jMax && (this.jAcc = -this.jMax), t = this.jAcc - n; var r = this.b1.imass * t; this.b1.velx -= this.nx * r, this.b1.vely -= this.ny * r; var i = this.b2.imass * t; return this.b2.velx += this.nx * i, this.b2.vely += this.ny * i, this.b1.angvel -= this.cx1 * this.b1.iinertia * t, this.b2.angvel += this.cx2 * this.b2.iinertia * t, !1; };
        e.prototype.applyImpulsePos = function () { var e, t = this.b1.axisy * this.a1localx - this.b1.axisx * this.a1localy, n = this.a1localx * this.b1.axisx + this.a1localy * this.b1.axisy, r = this.b2.axisy * this.a2localx - this.b2.axisx * this.a2localy, i = this.a2localx * this.b2.axisx + this.a2localy * this.b2.axisy, a, o = this.b2.posx + r - (this.b1.posx + t), s = this.b2.posy + i - (this.b1.posy + n), c = o * o + s * s; if (c < R.epsilon)
            o = 0, s = 0, c = 0, a = !0;
        else {
            c = Math.sqrt(c);
            var e_492 = 1 / c;
            o *= e_492, s *= e_492, this.equal ? (c -= this.jointMax, a = !1) : c < this.jointMin ? (c = this.jointMin - c, o = -o, s = -s, a = !1) : c > this.jointMax ? (c -= this.jointMax, a = !1) : (o = 0, s = 0, c = 0, a = !0);
        } var l = c; if (!a) {
            if (this.breakUnderError && l * l > this.maxError * this.maxError)
                return !0;
            if (l * l < R.constraintLinearSlop * R.constraintLinearSlop)
                return !1;
            if (l *= .5, l * l > 6) {
                var a_171 = this.b1.smass + this.b2.smass;
                if (a_171 > R.epsilon) {
                    var c_90 = .75 / a_171;
                    if (e = -l * c_90, this.equal || e < 0) {
                        var a_172 = e * this.b1.imass;
                        this.b1.posx -= o * a_172, this.b1.posy -= s * a_172;
                        var c_91 = e * this.b2.imass;
                        this.b2.posx += o * c_91, this.b2.posy += s * c_91, o = this.b2.posx + r - (this.b1.posx + t), s = this.b2.posy + i - (this.b1.posy + n);
                        var u_70 = o * o + s * s;
                        if (u_70 < R.epsilon)
                            o = 0, s = 0, u_70 = 0;
                        else {
                            u_70 = Math.sqrt(u_70);
                            var e_493 = 1 / u_70;
                            o *= e_493, s *= e_493, this.equal ? u_70 -= this.jointMax : u_70 < this.jointMin ? (u_70 = this.jointMin - u_70, o = -o, s = -s) : u_70 > this.jointMax ? u_70 -= this.jointMax : (o = 0, s = 0, u_70 = 0);
                        }
                        l = u_70, l *= .5;
                    }
                }
            }
            var a_173 = s * t - o * n, c_92 = s * r - o * i, u_71 = this.b1.smass + this.b2.smass + a_173 * a_173 * this.b1.sinertia + c_92 * c_92 * this.b2.sinertia;
            if (u_71 != 0 && (u_71 = 1 / u_71), e = -l * u_71, this.equal || e < 0) {
                var t_420 = this.b1.imass * e;
                this.b1.posx -= o * t_420, this.b1.posy -= s * t_420;
                var n_355 = this.b2.imass * e;
                this.b2.posx += o * n_355, this.b2.posy += s * n_355, $._rotateBody(this.b1, -a_173 * this.b1.iinertia * e), $._rotateBody(this.b2, c_92 * this.b2.iinertia * e);
            }
        } return !1; };
        e._setupAnchorVec2 = function (e, t, n, r) { var i = Q._nape.geom.Vec2.get(e, t); return i.zpp_inner._inuse = !0, i.zpp_inner._validate = n, i.zpp_inner._invalidate = r, i; };
        return e;
    }(Q)), ua._wrapFn = null, ua._createFn = null, da = ua, fa = (function (_super) {
        __extends(e, _super);
        function e(e, t, n, r, i, a) {
            var _this = _super.call(this) || this;
            var o = new da;
            if (_this.zpp_inner = o, o.outer = _this, o.outer_zn = _this, _this._tagAnyConstraint(), _this._setBody1(e), _this._setBody2(t), n != null && n.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!");
            if (n == null)
                throw Error("Constraint::anchor1 cannot be null");
            var s = he(n), c = ge(n);
            if (o.a1localx = s, o.a1localy = c, y(n), r != null && r.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!");
            if (r == null)
                throw Error("Constraint::anchor2 cannot be null");
            var l = he(r), u = ge(r);
            if (o.a2localx = l, o.a2localy = u, y(r), _this.zpp_inner.immutable_midstep("DistanceJoint::jointMin"), i !== i)
                throw Error("DistanceJoint::jointMin cannot be NaN");
            if (i < 0)
                throw Error("DistanceJoint::jointMin must be >= 0");
            if (o.jointMin != i && (o.jointMin = i, o.wake()), _this.zpp_inner.immutable_midstep("DistanceJoint::jointMax"), a !== a)
                throw Error("DistanceJoint::jointMax cannot be NaN");
            if (a < 0)
                throw Error("DistanceJoint::jointMax must be >= 0");
            o.jointMax != a && (o.jointMax = a, o.wake());
            return _this;
        }
        e._wrap = function (t) { var n; return t == null ? null : t instanceof e ? t : ((n = t.zpp_inner) == null ? void 0 : n.outer) instanceof e ? t.zpp_inner.outer : t instanceof da ? v(t, function (t) { var n = Object.create(e.prototype); return n.zpp_inner = t, t.outer = n, t.outer_zn = n, n.debugDraw = !0, n; }) : v(t, function (t) { var n; var r = Object.create(e.prototype); return r.zpp_inner = (n = t.zpp_inner) == null ? t : n, r.zpp_inner.outer = r, r.zpp_inner.outer_zn = r, r; }); };
        Object.defineProperty(e.prototype, "body1", {
            get: function () { return this.zpp_inner.b1 == null ? null : Hr._wrap(this.zpp_inner.b1); },
            set: function (e) { this._setBody1(e); },
            enumerable: false,
            configurable: true
        });
        e.prototype._setBody1 = function (e) { this.zpp_inner.immutable_midstep("Constraint::body1"); var t = e == null ? null : e.zpp_inner; t != this.zpp_inner.b1 && (this.zpp_inner.b1 != null && (this.zpp_inner.space != null && this.zpp_inner.b2 != this.zpp_inner.b1 && this.zpp_inner.b1.constraints.remove(this.zpp_inner), this.zpp_inner.active && this.zpp_inner.space != null && this.zpp_inner.b1.wake()), this.zpp_inner.b1 = t, this.zpp_inner.space != null && t != null && this.zpp_inner.b2 != t && t.constraints.add(this.zpp_inner), this.zpp_inner.active && this.zpp_inner.space != null && (this.zpp_inner.wake(), t == null || t.wake())); };
        Object.defineProperty(e.prototype, "body2", {
            get: function () { return this.zpp_inner.b2 == null ? null : Hr._wrap(this.zpp_inner.b2); },
            set: function (e) { this._setBody2(e); },
            enumerable: false,
            configurable: true
        });
        e.prototype._setBody2 = function (e) { this.zpp_inner.immutable_midstep("Constraint::body2"); var t = e == null ? null : e.zpp_inner; t != this.zpp_inner.b2 && (this.zpp_inner.b2 != null && (this.zpp_inner.space != null && this.zpp_inner.b1 != this.zpp_inner.b2 && this.zpp_inner.b2.constraints.remove(this.zpp_inner), this.zpp_inner.active && this.zpp_inner.space != null && this.zpp_inner.b2.wake()), this.zpp_inner.b2 = t, this.zpp_inner.space != null && t != null && this.zpp_inner.b1 != t && t.constraints.add(this.zpp_inner), this.zpp_inner.active && this.zpp_inner.space != null && (this.zpp_inner.wake(), t == null || t.wake())); };
        Object.defineProperty(e.prototype, "anchor1", {
            get: function () { return this.zpp_inner.wrap_a1 == null && this.zpp_inner.setup_a1(), this.zpp_inner.wrap_a1; },
            set: function (e) { if (e != null && e.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!"); if (e == null)
                throw Error("Constraint::anchor1 cannot be null"); this.zpp_inner.wrap_a1 == null && this.zpp_inner.setup_a1(), this.zpp_inner.wrap_a1.set(e), y(e); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "anchor2", {
            get: function () { return this.zpp_inner.wrap_a2 == null && this.zpp_inner.setup_a2(), this.zpp_inner.wrap_a2; },
            set: function (e) { if (e != null && e.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!"); if (e == null)
                throw Error("Constraint::anchor2 cannot be null"); this.zpp_inner.wrap_a2 == null && this.zpp_inner.setup_a2(), this.zpp_inner.wrap_a2.set(e), y(e); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "jointMin", {
            get: function () { return this.zpp_inner.jointMin; },
            set: function (e) { if (this.zpp_inner.immutable_midstep("DistanceJoint::jointMin"), e !== e)
                throw Error("DistanceJoint::jointMin cannot be NaN"); if (e < 0)
                throw Error("DistanceJoint::jointMin must be >= 0"); this.zpp_inner.jointMin != e && (this.zpp_inner.jointMin = e, this.zpp_inner.wake()); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "jointMax", {
            get: function () { return this.zpp_inner.jointMax; },
            set: function (e) { if (this.zpp_inner.immutable_midstep("DistanceJoint::jointMax"), e !== e)
                throw Error("DistanceJoint::jointMax cannot be NaN"); if (e < 0)
                throw Error("DistanceJoint::jointMax must be >= 0"); this.zpp_inner.jointMax != e && (this.zpp_inner.jointMax = e, this.zpp_inner.wake()); },
            enumerable: false,
            configurable: true
        });
        e.prototype.isSlack = function () { if (this.zpp_inner.b1 == null || this.zpp_inner.b2 == null)
            throw Error("Cannot compute slack for DistanceJoint if either body is null."); return this.zpp_inner.is_slack(); };
        e.prototype.impulse = function () { var e = new (d()).geom.MatMN(1, 1); if (0 >= e.zpp_inner.m || 0 >= e.zpp_inner.n)
            throw Error("MatMN indices out of range"); return e.zpp_inner.x[0 * e.zpp_inner.n] = this.zpp_inner.jAcc, e; };
        e.prototype.bodyImpulse = function (e) { var t = d(); if (e == null)
            throw Error(ra); var n = this.zpp_inner.b1 == null ? null : this.zpp_inner.b1.outer, r = this.zpp_inner.b2 == null ? null : this.zpp_inner.b2.outer; if (e != n && e != r)
            throw Error("Body is not linked to this constraint"); return this.zpp_inner.active ? this.zpp_inner.bodyImpulse(e.zpp_inner) : t.geom.Vec3.get(0, 0, 0); };
        e.prototype.visitBodies = function (e) { if (e == null)
            throw Error("Cannot apply null lambda to bodies"); var t = this.zpp_inner.b1 == null ? null : this.zpp_inner.b1.outer; t != null && e(t); var n = this.zpp_inner.b2 == null ? null : this.zpp_inner.b2.outer; n != null && n != t && e(n); };
        return e;
    }(aa)), da._wrapFn = function (e) { return v(e, function (e) { var t = Object.create(fa.prototype); return t.zpp_inner = e, e.outer = t, e.outer_zn = t, t.debugDraw = !0, t; }); }, pa = (function (_super) {
        __extends(e, _super);
        function e() {
            var _this = this;
            _this = _super.call(this) || this, _this.outer_zn = null, _this.scale = 0, _this.jointMin = 0, _this.jointMax = 0, _this.equal = !1, _this.dot1 = 0, _this.dot2 = 0, _this.cx1 = 0, _this.cx2 = 0, _this.b1 = null, _this.a1localx = 0, _this.a1localy = 0, _this.a1relx = 0, _this.a1rely = 0, _this.wrap_a1 = null, _this.b2 = null, _this.a2localx = 0, _this.a2localy = 0, _this.a2relx = 0, _this.a2rely = 0, _this.wrap_a2 = null, _this.zip_n = null, _this.nlocalx = 0, _this.nlocaly = 0, _this.nrelx = 0, _this.nrely = 0, _this.wrap_n = null, _this.kMassa = 0, _this.kMassb = 0, _this.kMassc = 0, _this.jAccx = 0, _this.jAccy = 0, _this.jMax = null, _this.gamma = null, _this.biasx = 0, _this.biasy = 0, _this.stepped = !1, _this.a1localx = 0, _this.a1localy = 0, _this.a1relx = 0, _this.a1rely = 0, _this.a2localx = 0, _this.a2localy = 0, _this.a2relx = 0, _this.a2rely = 0, _this.nlocalx = 0, _this.nlocaly = 0, _this.nrelx = 0, _this.nrely = 0, _this.jAccx = 0, _this.jAccy = 0, _this.jMax = 1 / 0, _this.jointMin = -1 / 0, _this.jointMax = 1 / 0, _this.stepped = !1;
            return _this;
        }
        e.prototype._setupVec2 = function (e, t, n, r) { var i = Q._nape.geom.Vec2.get(e, t); return i.zpp_inner._inuse = !0, i.zpp_inner._validate = n, i.zpp_inner._invalidate = r, i; };
        e.prototype.validate_a1 = function () { this.wrap_a1.zpp_inner.x = this.a1localx, this.wrap_a1.zpp_inner.y = this.a1localy; };
        e.prototype.invalidate_a1 = function (e) { this.immutable_midstep("Constraint::a1"), this.a1localx = e.x, this.a1localy = e.y, this.wake(); };
        e.prototype.setup_a1 = function () { this.wrap_a1 = this._setupVec2(this.a1localx, this.a1localy, this.validate_a1.bind(this), this.invalidate_a1.bind(this)); };
        e.prototype.validate_a2 = function () { this.wrap_a2.zpp_inner.x = this.a2localx, this.wrap_a2.zpp_inner.y = this.a2localy; };
        e.prototype.invalidate_a2 = function (e) { this.immutable_midstep("Constraint::a2"), this.a2localx = e.x, this.a2localy = e.y, this.wake(); };
        e.prototype.setup_a2 = function () { this.wrap_a2 = this._setupVec2(this.a2localx, this.a2localy, this.validate_a2.bind(this), this.invalidate_a2.bind(this)); };
        e.prototype.validate_n = function () { this.wrap_n.zpp_inner.x = this.nlocalx, this.wrap_n.zpp_inner.y = this.nlocaly; };
        e.prototype.invalidate_n = function (e) { this.immutable_midstep("Constraint::n"), this.nlocalx = e.x, this.nlocaly = e.y, this.zip_n = !0, this.wake(); };
        e.prototype.setup_n = function () { this.wrap_n = this._setupVec2(this.nlocalx, this.nlocaly, this.validate_n.bind(this), this.invalidate_n.bind(this)); };
        e.prototype.validate_norm = function () { if (this.zip_n) {
            this.zip_n = !1;
            var e_494 = this.nlocalx * this.nlocalx + this.nlocaly * this.nlocaly, t_421 = 1 / Math.sqrt(e_494);
            this.nlocalx *= t_421, this.nlocaly *= t_421;
        } };
        e.prototype.bodyImpulse = function (e) { var t = Q._nape; if (this.stepped) {
            var n_356 = this.scale * this.nrelx * this.jAccy - this.nrely * this.jAccx, r_314 = this.nrelx * this.jAccx + this.scale * this.nrely * this.jAccy;
            return e == this.b1 ? t.geom.Vec3.get(-n_356, -r_314, this.scale * this.cx1 * r_314 - this.dot1 * n_356) : t.geom.Vec3.get(n_356, r_314, this.scale * this.cx1 * r_314 - this.dot1 * n_356);
        } return t.geom.Vec3.get(0, 0, 0); };
        e.prototype.activeBodies = function () { this.b1 != null && this.b1.constraints.add(this), this.b2 != this.b1 && this.b2 != null && this.b2.constraints.add(this); };
        e.prototype.inactiveBodies = function () { this.b1 != null && this.b1.constraints.remove(this), this.b2 != this.b1 && this.b2 != null && this.b2.constraints.remove(this); };
        e.prototype.copy = function (t, n) { this.wrap_a1 == null && this.setup_a1(); var r = this.wrap_a1; this.wrap_a2 == null && this.setup_a2(); var i = this.wrap_a2; this.wrap_n == null && this.setup_n(); var a = e._createFn(null, null, r, i, this.wrap_n, this.jointMin, this.jointMax); return this.copyto(a), $._copyBody(t, n, this.b1, a, "b1"), $._copyBody(t, n, this.b2, a, "b2"), a; };
        e.prototype.validate = function () { if (this.b1 == null || this.b2 == null)
            throw Error("AngleJoint cannot be simulated null bodies"); if (this.b1 == this.b2)
            throw Error("DistanceJoint cannot be simulated with body1 == body2"); if (this.b1.space != this.space || this.b2.space != this.space)
            throw Error("Error: Constraints must have each body within the same space to which the constraint has been assigned"); if (this.jointMin > this.jointMax)
            throw Error("DistanceJoint must have jointMin <= jointMax"); if (this.nlocalx * this.nlocalx + this.nlocaly * this.nlocaly < R.epsilon)
            throw Error("DistanceJoint direction must be non-degenerate"); if (this.b1.type != 2 && this.b2.type != 2)
            throw Error("Constraints cannot have both bodies non-dynamic"); };
        e.prototype.wake_connected = function () { this.b1 != null && this.b1.type == 2 && this.b1.wake(), this.b2 != null && this.b2.type == 2 && this.b2.wake(); };
        e.prototype.forest = function () { this.b1.type == 2 && Q._unionComponents(this.b1.component, this.component), this.b2.type == 2 && Q._unionComponents(this.b2.component, this.component); };
        e.prototype.pair_exists = function (e, t) { return this.b1.id == e && this.b2.id == t || this.b1.id == t && this.b2.id == e; };
        e.prototype.clearcache = function () { this.jAccx = 0, this.jAccy = 0, this.pre_dt = -1; };
        e.prototype.preStep = function (e) { this.pre_dt == -1 && (this.pre_dt = e); var t = e / this.pre_dt; this.pre_dt = e, this.equal = this.jointMin == this.jointMax, this.stepped = !0, this.validate_norm(), this.a1relx = this.b1.axisy * this.a1localx - this.b1.axisx * this.a1localy, this.a1rely = this.a1localx * this.b1.axisx + this.a1localy * this.b1.axisy, this.nrelx = this.b1.axisy * this.nlocalx - this.b1.axisx * this.nlocaly, this.nrely = this.nlocalx * this.b1.axisx + this.nlocaly * this.b1.axisy, this.a2relx = this.b2.axisy * this.a2localx - this.b2.axisx * this.a2localy, this.a2rely = this.a2localx * this.b2.axisx + this.a2localy * this.b2.axisy; var n = this.b2.posx + this.a2relx - this.b1.posx - this.a1relx, r = this.b2.posy + this.a2rely - this.b1.posy - this.a1rely, i = r * this.nrelx - n * this.nrely, a = this.nrelx * n + this.nrely * r; this.equal ? (a -= this.jointMin, this.scale = 1) : a > this.jointMax ? (a -= this.jointMax, this.scale = 1) : a < this.jointMin ? (a = this.jointMin - a, this.scale = -1) : (a = 0, this.scale = 0); var o = n + this.a1relx, s = r + this.a1rely; this.dot1 = this.nrelx * o + this.nrely * s, this.cx1 = s * this.nrelx - o * this.nrely, this.dot2 = this.nrelx * this.a2relx + this.nrely * this.a2rely, this.cx2 = this.a2rely * this.nrelx - this.a2relx * this.nrely, this.kMassa = this.b1.smass + this.b2.smass + this.dot1 * this.dot1 * this.b1.sinertia + this.dot2 * this.dot2 * this.b2.sinertia, this.kMassb = -this.scale * (this.dot1 * this.cx1 * this.b1.sinertia + this.dot2 * this.cx2 * this.b2.sinertia), this.kMassc = this.scale * this.scale * (this.b1.smass + this.b2.smass + this.cx1 * this.cx1 * this.b1.sinertia + this.cx2 * this.cx2 * this.b2.sinertia); var c = this.kMassa * this.kMassc - this.kMassb * this.kMassb, l; if (c !== c)
            this.kMassa = this.kMassb = this.kMassc = 0, l = 3;
        else if (c == 0) {
            var e_495 = 0;
            this.kMassa == 0 ? (this.kMassa = 0, e_495 |= 1) : this.kMassa = 1 / this.kMassa, this.kMassc == 0 ? (this.kMassc = 0, e_495 |= 2) : this.kMassc = 1 / this.kMassc, this.kMassb = 0, l = e_495;
        }
        else {
            var e_496 = 1 / c, t_422 = this.kMassc * e_496;
            this.kMassc = this.kMassa * e_496, this.kMassa = t_422, this.kMassb *= -e_496, l = 0;
        } if (l & 1 && (this.jAccx = 0), l & 2 && (this.jAccy = 0), this.stiff)
            this.gamma = 0, this.biasx = 0, this.biasy = 0;
        else {
            if (this.breakUnderError && i * i + a * a > this.maxError * this.maxError)
                return !0;
            var t_423 = 2 * Math.PI * this.frequency;
            this.gamma = 1 / (e * t_423 * (2 * this.damping + t_423 * e));
            var n_357 = 1 / (1 + this.gamma), r_315 = e * t_423 * t_423 * this.gamma;
            this.gamma *= n_357;
            var o_124 = n_357;
            this.kMassa *= o_124, this.kMassb *= o_124, this.kMassc *= o_124, this.biasx = i, this.biasy = a;
            var s_113 = -r_315;
            this.biasx *= s_113, this.biasy *= s_113;
            var c_93 = this.maxError, l_83 = this.biasx * this.biasx + this.biasy * this.biasy;
            if (l_83 > c_93 * c_93) {
                var e_497 = 1 / Math.sqrt(l_83) * c_93;
                this.biasx *= e_497, this.biasy *= e_497;
            }
        } var u = t; return this.jAccx *= u, this.jAccy *= u, this.jMax = this.maxForce * e, !1; };
        e.prototype.warmStart = function () { var e = this.scale * this.nrelx * this.jAccy - this.nrely * this.jAccx, t = this.nrelx * this.jAccx + this.scale * this.nrely * this.jAccy, n = this.b1.imass; this.b1.velx -= e * n, this.b1.vely -= t * n; var r = this.b2.imass; this.b2.velx += e * r, this.b2.vely += t * r, this.b1.angvel += (this.scale * this.cx1 * this.jAccy - this.dot1 * this.jAccx) * this.b1.iinertia, this.b2.angvel += (this.dot2 * this.jAccx - this.scale * this.cx2 * this.jAccy) * this.b2.iinertia; };
        e.prototype.applyImpulseVel = function () { var e = this.b2.velx - this.b1.velx, t = this.b2.vely - this.b1.vely; e += this.b2.kinvelx - this.b1.kinvelx, t += this.b2.kinvely - this.b1.kinvely; var n = t * this.nrelx - e * this.nrely + (this.b2.angvel + this.b2.kinangvel) * this.dot2 - (this.b1.angvel + this.b1.kinangvel) * this.dot1, r = this.scale * (this.nrelx * e + this.nrely * t - (this.b2.angvel + this.b2.kinangvel) * this.cx2 + (this.b1.angvel + this.b1.kinangvel) * this.cx1), i = this.biasx - n, a = this.biasy - r, o = this.kMassa * i + this.kMassb * a; a = this.kMassb * i + this.kMassc * a, i = o; var s = this.gamma; i -= this.jAccx * s, a -= this.jAccy * s; var c = this.jAccx, l = this.jAccy; if (this.jAccx += i, this.jAccy += a, this.jAccy > 0 && (this.jAccy = 0), this.breakUnderForce) {
            if (this.jAccx * this.jAccx + this.jAccy * this.jAccy > this.jMax * this.jMax)
                return !0;
        }
        else if (!this.stiff) {
            var e_498 = this.jMax, t_424 = this.jAccx * this.jAccx + this.jAccy * this.jAccy;
            if (t_424 > e_498 * e_498) {
                var n_358 = 1 / Math.sqrt(t_424) * e_498;
                this.jAccx *= n_358, this.jAccy *= n_358;
            }
        } var u = this.jAccx - c, d = this.jAccy - l, f = this.scale * this.nrelx * d - this.nrely * u, p = this.nrelx * u + this.scale * this.nrely * d, m = this.b1.imass; this.b1.velx -= f * m, this.b1.vely -= p * m; var h = this.b2.imass; return this.b2.velx += f * h, this.b2.vely += p * h, this.b1.angvel += (this.scale * this.cx1 * d - this.dot1 * u) * this.b1.iinertia, this.b2.angvel += (this.dot2 * u - this.scale * this.cx2 * d) * this.b2.iinertia, !1; };
        e.prototype.applyImpulsePos = function () { var e = this.b1.axisy * this.nlocalx - this.b1.axisx * this.nlocaly, t = this.nlocalx * this.b1.axisx + this.nlocaly * this.b1.axisy, n = this.b1.axisy * this.a1localx - this.b1.axisx * this.a1localy, r = this.a1localx * this.b1.axisx + this.a1localy * this.b1.axisy, i = this.b2.axisy * this.a2localx - this.b2.axisx * this.a2localy, a = this.a2localx * this.b2.axisx + this.a2localy * this.b2.axisy, o = this.b2.posx + i - this.b1.posx - n, s = this.b2.posy + a - this.b1.posy - r, c, l = s * e - o * t, u = e * o + t * s; if (this.equal ? (u -= this.jointMin, c = 1) : u > this.jointMax ? (u -= this.jointMax, c = 1) : u < this.jointMin ? (u = this.jointMin - u, c = -1) : (u = 0, c = 0), this.breakUnderError && l * l + u * u > this.maxError * this.maxError)
            return !0; if (l * l + u * u < R.constraintLinearSlop * R.constraintLinearSlop)
            return !1; var d, f, p = .5; if (l *= p, u *= p, l * l + u * u > 6) {
            var d_50 = this.b1.smass + this.b2.smass;
            if (d_50 > R.epsilon) {
                var f_47 = .8 / d_50, p_32 = f_47 * (t * l - c * e * u), m_20 = f_47 * (e * l * c - t * l), h_14 = this.b1.imass;
                this.b1.posx -= p_32 * h_14, this.b1.posy -= m_20 * h_14;
                var g_16 = this.b2.imass;
                this.b2.posx += p_32 * g_16, this.b2.posy += m_20 * g_16, o = this.b2.posx + i - this.b1.posx - n, s = this.b2.posy + a - this.b1.posy - r, l = s * e - o * t, u = e * o + t * s, this.equal ? (u -= this.jointMin, c = 1) : u > this.jointMax ? (u -= this.jointMax, c = 1) : u < this.jointMin ? (u = this.jointMin - u, c = -1) : (u = 0, c = 0);
                var _8 = .5;
                l *= _8, u *= _8;
            }
        } var m = o + n, h = s + r, g = e * m + t * h, _ = h * e - m * t, v = e * i + t * a, y = a * e - i * t, b = this.b1.smass + this.b2.smass + g * g * this.b1.sinertia + v * v * this.b2.sinertia, x = -c * (g * _ * this.b1.sinertia + v * y * this.b2.sinertia), S = c * c * (this.b1.smass + this.b2.smass + _ * _ * this.b1.sinertia + y * y * this.b2.sinertia); d = -l, f = -u; var C = b * S - x * x; if (C !== C)
            f = 0, d = f;
        else if (C == 0)
            b == 0 ? d = 0 : d /= b, S == 0 ? f = 0 : f /= S;
        else {
            var e_499 = 1 / C, t_425 = e_499 * (S * d - x * f);
            f = e_499 * (b * f - x * d), d = t_425;
        } f > 0 && (f = 0); var w = c * e * f - t * d, T = e * d + c * t * f, ee = this.b1.imass; this.b1.posx -= w * ee, this.b1.posy -= T * ee; var E = this.b2.imass; return this.b2.posx += w * E, this.b2.posy += T * E, $._rotateBody(this.b1, (c * _ * f - g * d) * this.b1.iinertia), $._rotateBody(this.b2, (v * d - c * y * f) * this.b2.iinertia), !1; };
        return e;
    }(Q)), pa._wrapFn = null, pa._createFn = null, ma = pa, ha = (function (_super) {
        __extends(e, _super);
        function e(e, t, n, r, i, a, o) {
            var _this = _super.call(this) || this;
            var s = new ma;
            if (_this.zpp_inner = s, s.outer = _this, s.outer_zn = _this, _this._tagAnyConstraint(), _this._setBody1(e), _this._setBody2(t), n != null && n.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!");
            if (n == null)
                throw Error("Constraint::anchor1 cannot be null");
            if (s.a1localx = _e(n), s.a1localy = ve(n), y(n), r != null && r.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!");
            if (r == null)
                throw Error("Constraint::anchor2 cannot be null");
            if (s.a2localx = _e(r), s.a2localy = ve(r), y(r), i != null && i.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!");
            if (i == null)
                throw Error("Constraint::direction cannot be null");
            if (s.nlocalx = _e(i), s.nlocaly = ve(i), s.zip_n = !0, y(i), _this.zpp_inner.immutable_midstep("LineJoint::jointMin"), a !== a)
                throw Error("AngleJoint::jointMin cannot be NaN");
            if (s.jointMin != a && (s.jointMin = a, s.wake()), _this.zpp_inner.immutable_midstep("LineJoint::jointMax"), o !== o)
                throw Error("AngleJoint::jointMax cannot be NaN");
            s.jointMax != o && (s.jointMax = o, s.wake());
            return _this;
        }
        e._wrap = function (t) { var n; return t == null ? null : t instanceof e ? t : ((n = t.zpp_inner) == null ? void 0 : n.outer) instanceof e ? t.zpp_inner.outer : t instanceof ma ? v(t, function (t) { var n = Object.create(e.prototype); return n.zpp_inner = t, t.outer = n, t.outer_zn = n, n.debugDraw = !0, n; }) : v(t, function (t) { var n; var r = Object.create(e.prototype); return r.zpp_inner = (n = t.zpp_inner) == null ? t : n, r.zpp_inner.outer = r, r.zpp_inner.outer_zn = r, r; }); };
        Object.defineProperty(e.prototype, "body1", {
            get: function () { return this.zpp_inner.b1 == null ? null : Hr._wrap(this.zpp_inner.b1); },
            set: function (e) { this._setBody1(e); },
            enumerable: false,
            configurable: true
        });
        e.prototype._setBody1 = function (e) { this.zpp_inner.immutable_midstep("Constraint::body1"); var t = e == null ? null : e.zpp_inner; t != this.zpp_inner.b1 && (this.zpp_inner.b1 != null && (this.zpp_inner.space != null && this.zpp_inner.b2 != this.zpp_inner.b1 && this.zpp_inner.b1.constraints.remove(this.zpp_inner), this.zpp_inner.active && this.zpp_inner.space != null && this.zpp_inner.b1.wake()), this.zpp_inner.b1 = t, this.zpp_inner.space != null && t != null && this.zpp_inner.b2 != t && t.constraints.add(this.zpp_inner), this.zpp_inner.active && this.zpp_inner.space != null && (this.zpp_inner.wake(), t == null || t.wake())); };
        Object.defineProperty(e.prototype, "body2", {
            get: function () { return this.zpp_inner.b2 == null ? null : Hr._wrap(this.zpp_inner.b2); },
            set: function (e) { this._setBody2(e); },
            enumerable: false,
            configurable: true
        });
        e.prototype._setBody2 = function (e) { this.zpp_inner.immutable_midstep("Constraint::body2"); var t = e == null ? null : e.zpp_inner; t != this.zpp_inner.b2 && (this.zpp_inner.b2 != null && (this.zpp_inner.space != null && this.zpp_inner.b1 != this.zpp_inner.b2 && this.zpp_inner.b2.constraints.remove(this.zpp_inner), this.zpp_inner.active && this.zpp_inner.space != null && this.zpp_inner.b2.wake()), this.zpp_inner.b2 = t, this.zpp_inner.space != null && t != null && this.zpp_inner.b1 != t && t.constraints.add(this.zpp_inner), this.zpp_inner.active && this.zpp_inner.space != null && (this.zpp_inner.wake(), t == null || t.wake())); };
        Object.defineProperty(e.prototype, "anchor1", {
            get: function () { return this.zpp_inner.wrap_a1 == null && this.zpp_inner.setup_a1(), this.zpp_inner.wrap_a1; },
            set: function (e) { if (e != null && e.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!"); if (e == null)
                throw Error("Constraint::anchor1 cannot be null"); this.zpp_inner.wrap_a1 == null && this.zpp_inner.setup_a1(), this.zpp_inner.wrap_a1.set(e), y(e); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "anchor2", {
            get: function () { return this.zpp_inner.wrap_a2 == null && this.zpp_inner.setup_a2(), this.zpp_inner.wrap_a2; },
            set: function (e) { if (e != null && e.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!"); if (e == null)
                throw Error("Constraint::anchor2 cannot be null"); this.zpp_inner.wrap_a2 == null && this.zpp_inner.setup_a2(), this.zpp_inner.wrap_a2.set(e), y(e); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "direction", {
            get: function () { return this.zpp_inner.wrap_n == null && this.zpp_inner.setup_n(), this.zpp_inner.wrap_n; },
            set: function (e) { if (e != null && e.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!"); if (e == null)
                throw Error("Constraint::direction cannot be null"); this.zpp_inner.wrap_n == null && this.zpp_inner.setup_n(), this.zpp_inner.wrap_n.set(e), y(e); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "jointMin", {
            get: function () { return this.zpp_inner.jointMin; },
            set: function (e) { if (this.zpp_inner.immutable_midstep("LineJoint::jointMin"), e !== e)
                throw Error("AngleJoint::jointMin cannot be NaN"); this.zpp_inner.jointMin != e && (this.zpp_inner.jointMin = e, this.zpp_inner.wake()); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "jointMax", {
            get: function () { return this.zpp_inner.jointMax; },
            set: function (e) { if (this.zpp_inner.immutable_midstep("LineJoint::jointMax"), e !== e)
                throw Error("AngleJoint::jointMax cannot be NaN"); this.zpp_inner.jointMax != e && (this.zpp_inner.jointMax = e, this.zpp_inner.wake()); },
            enumerable: false,
            configurable: true
        });
        e.prototype.impulse = function () { var e = new (d()).geom.MatMN(2, 1); return e.zpp_inner.x[0] = this.zpp_inner.jAccx, e.zpp_inner.x[1] = this.zpp_inner.jAccy, e; };
        e.prototype.bodyImpulse = function (e) { var t = d(); if (e == null)
            throw Error(ra); var n = this.zpp_inner.b1 == null ? null : this.zpp_inner.b1.outer, r = this.zpp_inner.b2 == null ? null : this.zpp_inner.b2.outer; if (e != n && e != r)
            throw Error("Body is not linked to this constraint"); return this.zpp_inner.active ? this.zpp_inner.bodyImpulse(e.zpp_inner) : t.geom.Vec3.get(); };
        e.prototype.visitBodies = function (e) { if (e == null)
            throw Error("Cannot apply null lambda to bodies"); var t = this.zpp_inner.b1 == null ? null : this.zpp_inner.b1.outer; t != null && e(t); var n = this.zpp_inner.b2 == null ? null : this.zpp_inner.b2.outer; n != null && n != t && e(n); };
        return e;
    }(aa)), ma._wrapFn = function (e) { return v(e, function (e) { var t = Object.create(ha.prototype); return t.zpp_inner = e, e.outer = t, e.outer_zn = t, t.debugDraw = !0, t; }); }, ga = (function (_super) {
        __extends(e, _super);
        function e() {
            var _this = this;
            _this = _super.call(this) || this, _this.outer_zn = null, _this.ratio = 0, _this.rate = 0, _this.b1 = null, _this.b2 = null, _this.kMass = 0, _this.jAcc = 0, _this.jMax = 0, _this.stepped = !1, _this.jAcc = 0, _this.stepped = !1, _this.__velocity = !0;
            return _this;
        }
        e.prototype.bodyImpulse = function (e) { var t = d(); return this.stepped ? e == this.b1 ? t.geom.Vec3.get(0, 0, -this.jAcc) : t.geom.Vec3.get(0, 0, this.ratio * this.jAcc) : t.geom.Vec3.get(0, 0, 0); };
        e.prototype.activeBodies = function () { this.b1 != null && this.b1.constraints.add(this), this.b2 != this.b1 && this.b2 != null && this.b2.constraints.add(this); };
        e.prototype.inactiveBodies = function () { this.b1 != null && this.b1.constraints.remove(this), this.b2 != this.b1 && this.b2 != null && this.b2.constraints.remove(this); };
        e.prototype.copy = function (t, n) { var r = e._createFn(null, null, this.rate, this.ratio); if (this.copyto(r), t != null && this.b1 != null) {
            var e_500 = null, i_223 = 0;
            for (; i_223 < t.length;) {
                var n_359 = t[i_223];
                if (++i_223, n_359.id == this.b1.id) {
                    e_500 = n_359.bc;
                    break;
                }
            }
            e_500 == null ? n.push(sa.todo(this.b1.id, function (e) { r.zpp_inner.b1 = e.zpp_inner; })) : r.zpp_inner.b1 = e_500.zpp_inner;
        } if (t != null && this.b2 != null) {
            var e_501 = null, i_224 = 0;
            for (; i_224 < t.length;) {
                var n_360 = t[i_224];
                if (++i_224, n_360.id == this.b2.id) {
                    e_501 = n_360.bc;
                    break;
                }
            }
            e_501 == null ? n.push(sa.todo(this.b2.id, function (e) { r.zpp_inner.b2 = e.zpp_inner; })) : r.zpp_inner.b2 = e_501.zpp_inner;
        } return r; };
        e.prototype.validate = function () { if (this.b1 == null || this.b2 == null)
            throw Error("AngleJoint cannot be simulated null bodies"); if (this.b1 == this.b2)
            throw Error("MotorJoint cannot be simulated with body1 == body2"); if (this.b1.space != this.space || this.b2.space != this.space)
            throw Error("Error: Constraints must have each body within the same space to which the constraint has been assigned"); if (this.b1.type != 2 && this.b2.type != 2)
            throw Error("Constraints cannot have both bodies non-dynamic"); };
        e.prototype.wake_connected = function () { this.b1 != null && this.b1.type == 2 && this.b1.wake(), this.b2 != null && this.b2.type == 2 && this.b2.wake(); };
        e.prototype.forest = function () { this.b1.type == 2 && Q._unionComponents(this.b1.component, this.component), this.b2.type == 2 && Q._unionComponents(this.b2.component, this.component); };
        e.prototype.pair_exists = function (e, t) { return this.b1.id == e && this.b2.id == t || this.b1.id == t && this.b2.id == e; };
        e.prototype.clearcache = function () { this.jAcc = 0, this.pre_dt = -1; };
        e.prototype.preStep = function (e) { this.pre_dt == -1 && (this.pre_dt = e); var t = e / this.pre_dt; return this.pre_dt = e, this.stepped = !0, this.kMass = this.b1.sinertia + this.ratio * this.ratio * this.b2.sinertia, this.kMass == 0 ? this.jAcc = 0 : this.kMass = 1 / this.kMass, this.jAcc *= t, this.jMax = this.maxForce * e, !1; };
        e.prototype.warmStart = function () { this.b1.angvel -= this.b1.iinertia * this.jAcc, this.b2.angvel += this.ratio * this.b2.iinertia * this.jAcc; };
        e.prototype.applyImpulseVel = function () { var e = this.ratio * (this.b2.angvel + this.b2.kinangvel) - this.b1.angvel - this.b1.kinangvel - this.rate, t = -this.kMass * e, n = this.jAcc; if (this.jAcc += t, this.breakUnderForce) {
            if (this.jAcc > this.jMax || this.jAcc < -this.jMax)
                return !0;
        }
        else
            this.jAcc < -this.jMax ? this.jAcc = -this.jMax : this.jAcc > this.jMax && (this.jAcc = this.jMax); return t = this.jAcc - n, this.b1.angvel -= this.b1.iinertia * t, this.b2.angvel += this.ratio * this.b2.iinertia * t, !1; };
        e.prototype.applyImpulsePos = function () { return !1; };
        return e;
    }(Q)), ga._wrapFn = null, ga._createFn = null, _a = ga, va = (function (_super) {
        __extends(e, _super);
        function e(e, t, n, r) {
            if (n === void 0) { n = 0; }
            if (r === void 0) { r = 1; }
            var _this = _super.call(this) || this;
            var i = new _a;
            if (_this.zpp_inner = i, i.outer = _this, i.outer_zn = _this, _this._tagAnyConstraint(), _this._setBody1(e), _this._setBody2(t), _this.zpp_inner.immutable_midstep("MotorJoint::rate"), n !== n)
                throw Error("MotorJoint::rate cannot be NaN");
            if (i.rate != n && (i.rate = n, i.wake()), _this.zpp_inner.immutable_midstep("MotorJoint::ratio"), r !== r)
                throw Error("MotorJoint::ratio cannot be NaN");
            i.ratio != r && (i.ratio = r, i.wake());
            return _this;
        }
        e._wrap = function (t) { var n; return t == null ? null : t instanceof e ? t : ((n = t.zpp_inner) == null ? void 0 : n.outer) instanceof e ? t.zpp_inner.outer : t instanceof _a ? v(t, function (t) { var n = Object.create(e.prototype); return n.zpp_inner = t, t.outer = n, t.outer_zn = n, n.debugDraw = !0, n; }) : v(t, function (t) { var n; var r = Object.create(e.prototype); return r.zpp_inner = (n = t.zpp_inner) == null ? t : n, r.zpp_inner.outer = r, r.zpp_inner.outer_zn = r, r; }); };
        Object.defineProperty(e.prototype, "body1", {
            get: function () { return this.zpp_inner.b1 == null ? null : Hr._wrap(this.zpp_inner.b1); },
            set: function (e) { this._setBody1(e); },
            enumerable: false,
            configurable: true
        });
        e.prototype._setBody1 = function (e) { this.zpp_inner.immutable_midstep("Constraint::body1"); var t = e == null ? null : e.zpp_inner; t != this.zpp_inner.b1 && (this.zpp_inner.b1 != null && (this.zpp_inner.space != null && this.zpp_inner.b2 != this.zpp_inner.b1 && this.zpp_inner.b1.constraints.remove(this.zpp_inner), this.zpp_inner.active && this.zpp_inner.space != null && this.zpp_inner.b1.wake()), this.zpp_inner.b1 = t, this.zpp_inner.space != null && t != null && this.zpp_inner.b2 != t && t.constraints.add(this.zpp_inner), this.zpp_inner.active && this.zpp_inner.space != null && (this.zpp_inner.wake(), t == null || t.wake())); };
        Object.defineProperty(e.prototype, "body2", {
            get: function () { return this.zpp_inner.b2 == null ? null : Hr._wrap(this.zpp_inner.b2); },
            set: function (e) { this._setBody2(e); },
            enumerable: false,
            configurable: true
        });
        e.prototype._setBody2 = function (e) { this.zpp_inner.immutable_midstep("Constraint::body2"); var t = e == null ? null : e.zpp_inner; t != this.zpp_inner.b2 && (this.zpp_inner.b2 != null && (this.zpp_inner.space != null && this.zpp_inner.b1 != this.zpp_inner.b2 && this.zpp_inner.b2.constraints.remove(this.zpp_inner), this.zpp_inner.active && this.zpp_inner.space != null && this.zpp_inner.b2.wake()), this.zpp_inner.b2 = t, this.zpp_inner.space != null && t != null && this.zpp_inner.b1 != t && t.constraints.add(this.zpp_inner), this.zpp_inner.active && this.zpp_inner.space != null && (this.zpp_inner.wake(), t == null || t.wake())); };
        Object.defineProperty(e.prototype, "rate", {
            get: function () { return this.zpp_inner.rate; },
            set: function (e) { if (this.zpp_inner.immutable_midstep("MotorJoint::rate"), e !== e)
                throw Error("MotorJoint::rate cannot be NaN"); this.zpp_inner.rate != e && (this.zpp_inner.rate = e, this.zpp_inner.wake()); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "ratio", {
            get: function () { return this.zpp_inner.ratio; },
            set: function (e) { if (this.zpp_inner.immutable_midstep("MotorJoint::ratio"), e !== e)
                throw Error("MotorJoint::ratio cannot be NaN"); this.zpp_inner.ratio != e && (this.zpp_inner.ratio = e, this.zpp_inner.wake()); },
            enumerable: false,
            configurable: true
        });
        e.prototype.impulse = function () { var e = new (d()).geom.MatMN(1, 1); if (0 >= e.zpp_inner.m || 0 >= e.zpp_inner.n)
            throw Error("MatMN indices out of range"); return e.zpp_inner.x[0 * e.zpp_inner.n] = this.zpp_inner.jAcc, e; };
        e.prototype.bodyImpulse = function (e) { var t = d(); if (e == null)
            throw Error(ra); var n = this.zpp_inner.b1 == null ? null : this.zpp_inner.b1.outer, r = this.zpp_inner.b2 == null ? null : this.zpp_inner.b2.outer; if (e != n && e != r)
            throw Error("Body is not linked to this constraint"); return this.zpp_inner.active ? this.zpp_inner.bodyImpulse(e.zpp_inner) : t.geom.Vec3.get(); };
        e.prototype.visitBodies = function (e) { var t = this.zpp_inner.b1 == null ? null : this.zpp_inner.b1.outer; t != null && e(t); var n = this.zpp_inner.b2 == null ? null : this.zpp_inner.b2.outer; n != null && n != t && e(n); };
        return e;
    }(aa)), _a._wrapFn = function (e) { return v(e, function (e) { var t = Object.create(va.prototype); return t.zpp_inner = e, e.outer = t, e.outer_zn = t, t.debugDraw = !0, t; }); }, ya = (function (_super) {
        __extends(e, _super);
        function e() {
            var _this = this;
            _this = _super.call(this) || this, _this.outer_zn = null, _this.b1 = null, _this.b2 = null, _this.a1localx = 0, _this.a1localy = 0, _this.a1relx = 0, _this.a1rely = 0, _this.wrap_a1 = null, _this.a2localx = 0, _this.a2localy = 0, _this.a2relx = 0, _this.a2rely = 0, _this.wrap_a2 = null, _this.kMassa = 0, _this.kMassb = 0, _this.kMassc = 0, _this.jAccx = 0, _this.jAccy = 0, _this.jMax = 1 / 0, _this.gamma = 0, _this.biasx = 0, _this.biasy = 0, _this.stepped = !1, _this.stepped = !1, _this.jAccx = 0, _this.jAccy = 0, _this.jMax = 1 / 0, _this.a1localx = 0, _this.a1localy = 0, _this.a1relx = 0, _this.a1rely = 0, _this.a2localx = 0, _this.a2localy = 0, _this.a2relx = 0, _this.a2rely = 0;
            return _this;
        }
        e.prototype.bodyImpulse = function (e) { var t = Q._nape; return this.stepped ? e == this.b1 ? t.geom.Vec3.get(-this.jAccx, -this.jAccy, -(this.jAccy * this.a1relx - this.jAccx * this.a1rely)) : t.geom.Vec3.get(this.jAccx, this.jAccy, this.jAccy * this.a2relx - this.jAccx * this.a2rely) : t.geom.Vec3.get(0, 0, 0); };
        e.prototype.activeBodies = function () { this.b1 != null && this.b1.constraints.add(this), this.b2 != this.b1 && this.b2 != null && this.b2.constraints.add(this); };
        e.prototype.inactiveBodies = function () { this.b1 != null && this.b1.constraints.remove(this), this.b2 != this.b1 && this.b2 != null && this.b2.constraints.remove(this); };
        e.prototype.validate_a1 = function () { this.wrap_a1.zpp_inner.x = this.a1localx, this.wrap_a1.zpp_inner.y = this.a1localy; };
        e.prototype.invalidate_a1 = function (e) { this.immutable_midstep("Constraint::a1"), this.a1localx = e.x, this.a1localy = e.y, this.wake(); };
        e.prototype.setup_a1 = function () { var e = Q._nape.geom.Vec2.get(this.a1localx, this.a1localy); this.wrap_a1 = e, this.wrap_a1.zpp_inner._inuse = !0, this.wrap_a1.zpp_inner._validate = this.validate_a1.bind(this), this.wrap_a1.zpp_inner._invalidate = this.invalidate_a1.bind(this); };
        e.prototype.validate_a2 = function () { this.wrap_a2.zpp_inner.x = this.a2localx, this.wrap_a2.zpp_inner.y = this.a2localy; };
        e.prototype.invalidate_a2 = function (e) { this.immutable_midstep("Constraint::a2"), this.a2localx = e.x, this.a2localy = e.y, this.wake(); };
        e.prototype.setup_a2 = function () { var e = Q._nape.geom.Vec2.get(this.a2localx, this.a2localy); this.wrap_a2 = e, this.wrap_a2.zpp_inner._inuse = !0, this.wrap_a2.zpp_inner._validate = this.validate_a2.bind(this), this.wrap_a2.zpp_inner._invalidate = this.invalidate_a2.bind(this); };
        e.prototype.copy = function (t, n) { this.wrap_a1 == null && this.setup_a1(); var r = this.wrap_a1; this.wrap_a2 == null && this.setup_a2(); var i = e._createFn(null, null, r, this.wrap_a2); return this.copyto(i), $._copyBody(t, n, this.b1, i, "b1"), $._copyBody(t, n, this.b2, i, "b2"), i; };
        e.prototype.validate = function () { if (this.b1 == null || this.b2 == null)
            throw Error("PivotJoint cannot be simulated null bodies"); if (this.b1 == this.b2)
            throw Error("Error: PivotJoint cannot be simulated with body1 == body2 (body1=body2=" + this.b1.outer.toString() + ")"); if (this.b1.space != this.space || this.b2.space != this.space)
            throw Error("Error: Constraints must have each body within the same space to which the constraint has been assigned (body1=" + this.b1.outer.toString() + ", body2=" + this.b2.outer.toString() + ")"); if (this.b1.type != 2 && this.b2.type != 2)
            throw Error("Error: Constraints cannot have both bodies non-dynamic (body1=" + this.b1.outer.toString() + ", body2=" + this.b2.outer.toString() + ")"); };
        e.prototype.wake_connected = function () { this.b1 != null && this.b1.type == 2 && this.b1.wake(), this.b2 != null && this.b2.type == 2 && this.b2.wake(); };
        e.prototype.forest = function () { this.b1.type == 2 && Q._unionComponents(this.b1.component, this.component), this.b2.type == 2 && Q._unionComponents(this.b2.component, this.component); };
        e.prototype.pair_exists = function (e, t) { return this.b1.id == e && this.b2.id == t || this.b1.id == t && this.b2.id == e; };
        e.prototype.clearcache = function () { this.jAccx = 0, this.jAccy = 0, this.pre_dt = -1; };
        e.prototype.preStep = function (e) { this.pre_dt == -1 && (this.pre_dt = e); var t = e / this.pre_dt; this.pre_dt = e, this.stepped = !0, this.a1relx = this.b1.axisy * this.a1localx - this.b1.axisx * this.a1localy, this.a1rely = this.a1localx * this.b1.axisx + this.a1localy * this.b1.axisy, this.a2relx = this.b2.axisy * this.a2localx - this.b2.axisx * this.a2localy, this.a2rely = this.a2localx * this.b2.axisx + this.a2localy * this.b2.axisy; var n = this.b1.smass + this.b2.smass; if (this.kMassa = n, this.kMassb = 0, this.kMassc = n, this.b1.sinertia != 0) {
            var e_502 = this.a1relx * this.b1.sinertia, t_426 = this.a1rely * this.b1.sinertia;
            this.kMassa += t_426 * this.a1rely, this.kMassb += -t_426 * this.a1relx, this.kMassc += e_502 * this.a1relx;
        } if (this.b2.sinertia != 0) {
            var e_503 = this.a2relx * this.b2.sinertia, t_427 = this.a2rely * this.b2.sinertia;
            this.kMassa += t_427 * this.a2rely, this.kMassb += -t_427 * this.a2relx, this.kMassc += e_503 * this.a2relx;
        } var r = this.kMassa * this.kMassc - this.kMassb * this.kMassb, i; if (r != r)
            this.kMassa = this.kMassb = this.kMassc = 0, i = 3;
        else if (r == 0) {
            var e_504 = 0;
            this.kMassa == 0 ? (this.kMassa = 0, e_504 |= 1) : this.kMassa = 1 / this.kMassa, this.kMassc == 0 ? (this.kMassc = 0, e_504 |= 2) : this.kMassc = 1 / this.kMassc, this.kMassb = 0, i = e_504;
        }
        else {
            var e_505 = 1 / r, t_428 = this.kMassc * e_505;
            this.kMassc = this.kMassa * e_505, this.kMassa = t_428, this.kMassb *= -e_505, i = 0;
        } if (i & 1 && (this.jAccx = 0), i & 2 && (this.jAccy = 0), this.stiff)
            this.biasx = 0, this.biasy = 0, this.gamma = 0;
        else {
            var t_429 = 2 * Math.PI * this.frequency;
            this.gamma = 1 / (e * t_429 * (2 * this.damping + t_429 * e));
            var n_361 = 1 / (1 + this.gamma), r_316 = e * t_429 * t_429 * this.gamma;
            this.gamma *= n_361;
            var i_225 = n_361;
            if (this.kMassa *= i_225, this.kMassb *= i_225, this.kMassc *= i_225, this.biasx = this.b2.posx + this.a2relx - (this.b1.posx + this.a1relx), this.biasy = this.b2.posy + this.a2rely - (this.b1.posy + this.a1rely), this.breakUnderError && this.biasx * this.biasx + this.biasy * this.biasy > this.maxError * this.maxError)
                return !0;
            var a_174 = -r_316;
            this.biasx *= a_174, this.biasy *= a_174;
            var o_125 = this.maxError, s_114 = this.biasx * this.biasx + this.biasy * this.biasy;
            if (s_114 > o_125 * o_125) {
                var e_506 = 1 / Math.sqrt(s_114) * o_125;
                this.biasx *= e_506, this.biasy *= e_506;
            }
        } var a = t; return this.jAccx *= a, this.jAccy *= a, this.jMax = this.maxForce * e, !1; };
        e.prototype.warmStart = function () { var e = this.b1.imass; this.b1.velx -= this.jAccx * e, this.b1.vely -= this.jAccy * e; var t = this.b2.imass; this.b2.velx += this.jAccx * t, this.b2.vely += this.jAccy * t, this.b1.angvel -= (this.jAccy * this.a1relx - this.jAccx * this.a1rely) * this.b1.iinertia, this.b2.angvel += (this.jAccy * this.a2relx - this.jAccx * this.a2rely) * this.b2.iinertia; };
        e.prototype.applyImpulseVel = function () { var e = this.b2.velx + this.b2.kinvelx - this.a2rely * (this.b2.angvel + this.b2.kinangvel) - (this.b1.velx + this.b1.kinvelx - this.a1rely * (this.b1.angvel + this.b1.kinangvel)), t = this.b2.vely + this.b2.kinvely + this.a2relx * (this.b2.angvel + this.b2.kinangvel) - (this.b1.vely + this.b1.kinvely + this.a1relx * (this.b1.angvel + this.b1.kinangvel)), n = this.biasx - e, r = this.biasy - t, i = this.kMassa * n + this.kMassb * r; r = this.kMassb * n + this.kMassc * r, n = i; var a = this.gamma; n -= this.jAccx * a, r -= this.jAccy * a; var o = this.jAccx, s = this.jAccy; if (this.jAccx += n * 1, this.jAccy += r * 1, this.breakUnderForce) {
            if (this.jAccx * this.jAccx + this.jAccy * this.jAccy > this.jMax * this.jMax)
                return !0;
        }
        else if (!this.stiff) {
            var e_507 = this.jMax, t_430 = this.jAccx * this.jAccx + this.jAccy * this.jAccy;
            if (t_430 > e_507 * e_507) {
                var n_362 = 1 / Math.sqrt(t_430) * e_507;
                this.jAccx *= n_362, this.jAccy *= n_362;
            }
        } n = this.jAccx - o, r = this.jAccy - s; var c = this.b1.imass; this.b1.velx -= n * c, this.b1.vely -= r * c; var l = this.b2.imass; return this.b2.velx += n * l, this.b2.vely += r * l, this.b1.angvel -= (r * this.a1relx - n * this.a1rely) * this.b1.iinertia, this.b2.angvel += (r * this.a2relx - n * this.a2rely) * this.b2.iinertia, !1; };
        e.prototype.applyImpulsePos = function () { var e = this.b1.axisy * this.a1localx - this.b1.axisx * this.a1localy, t = this.a1localx * this.b1.axisx + this.a1localy * this.b1.axisy, n = this.b2.axisy * this.a2localx - this.b2.axisx * this.a2localy, r = this.a2localx * this.b2.axisx + this.a2localy * this.b2.axisy, i = this.b2.posx + n - (this.b1.posx + e), a = this.b2.posy + r - (this.b1.posy + t); if (this.breakUnderError && i * i + a * a > this.maxError * this.maxError)
            return !0; if (i * i + a * a < R.constraintLinearSlop * R.constraintLinearSlop)
            return !1; var o = .5; i *= o, a *= o; var s, c; if (i * i + a * a > 6) {
            var o_126 = this.b1.smass + this.b2.smass;
            if (o_126 > R.epsilon) {
                var l_84 = .75 / o_126;
                s = -i * l_84, c = -a * l_84;
                var u_72 = s * s + c * c;
                if (u_72 > 400) {
                    var e_508 = 1 / Math.sqrt(u_72) * 20;
                    s *= e_508, c *= e_508;
                }
                var d_51 = this.b1.imass;
                this.b1.posx -= s * d_51, this.b1.posy -= c * d_51;
                var f_48 = this.b2.imass;
                this.b2.posx += s * f_48, this.b2.posy += c * f_48, i = this.b2.posx + n - (this.b1.posx + e), a = this.b2.posy + r - (this.b1.posy + t);
                var p_33 = .5;
                i *= p_33, a *= p_33;
            }
        } var l = this.b1.smass + this.b2.smass, u = l, d = 0, f = l; if (this.b1.sinertia != 0) {
            var n_363 = e * this.b1.sinertia, r_317 = t * this.b1.sinertia;
            u += r_317 * t, d += -r_317 * e, f += n_363 * e;
        } if (this.b2.sinertia != 0) {
            var e_509 = n * this.b2.sinertia, t_431 = r * this.b2.sinertia;
            u += t_431 * r, d += -t_431 * n, f += e_509 * n;
        } s = -i, c = -a; var p = s * s + c * c; if (p > 36) {
            var e_510 = 1 / Math.sqrt(p) * 6;
            s *= e_510, c *= e_510;
        } var m = u * f - d * d; if (m != m)
            c = 0, s = 0;
        else if (m == 0)
            u == 0 ? s = 0 : s /= u, f == 0 ? c = 0 : c /= f;
        else {
            var e_511 = 1 / m, t_432 = e_511 * (f * s - d * c);
            c = e_511 * (u * c - d * s), s = t_432;
        } var h = this.b1.imass; this.b1.posx -= s * h, this.b1.posy -= c * h; var g = this.b2.imass; this.b2.posx += s * g, this.b2.posy += c * g; var _ = -(c * e - s * t) * this.b1.iinertia; $._rotateBody(this.b1, _); var v = (c * n - s * r) * this.b2.iinertia; return $._rotateBody(this.b2, v), !1; };
        return e;
    }(Q)), ya._wrapFn = null, ya._createFn = null, ba = ya, xa = (function (_super) {
        __extends(e, _super);
        function e(e, t, n, r) {
            var _this = _super.call(this) || this;
            var i = new ba;
            if (_this.zpp_inner = i, i.outer = _this, i.outer_zn = _this, _this._tagAnyConstraint(), _this._setBody1(e), _this._setBody2(t), n != null && n.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!");
            if (n == null)
                throw Error("Constraint::anchor1 cannot be null");
            if (i.a1localx = ye(n), i.a1localy = be(n), y(n), r != null && r.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!");
            if (r == null)
                throw Error("Constraint::anchor2 cannot be null");
            i.a2localx = ye(r), i.a2localy = be(r), y(r);
            return _this;
        }
        e._wrap = function (t) { var n; return t == null ? null : t instanceof e ? t : ((n = t.zpp_inner) == null ? void 0 : n.outer) instanceof e ? t.zpp_inner.outer : t instanceof ba ? v(t, function (t) { var n = Object.create(e.prototype); return n.zpp_inner = t, t.outer = n, t.outer_zn = n, n.debugDraw = !0, n; }) : v(t, function (t) { var n; var r = Object.create(e.prototype); return r.zpp_inner = (n = t.zpp_inner) == null ? t : n, r.zpp_inner.outer = r, r.zpp_inner.outer_zn = r, r; }); };
        Object.defineProperty(e.prototype, "body1", {
            get: function () { return this.zpp_inner.b1 == null ? null : Hr._wrap(this.zpp_inner.b1); },
            set: function (e) { this._setBody1(e); },
            enumerable: false,
            configurable: true
        });
        e.prototype._setBody1 = function (e) { this.zpp_inner.immutable_midstep("Constraint::body1"); var t = e == null ? null : e.zpp_inner; t != this.zpp_inner.b1 && (this.zpp_inner.b1 != null && (this.zpp_inner.space != null && this.zpp_inner.b2 != this.zpp_inner.b1 && this.zpp_inner.b1.constraints.remove(this.zpp_inner), this.zpp_inner.active && this.zpp_inner.space != null && this.zpp_inner.b1.wake()), this.zpp_inner.b1 = t, this.zpp_inner.space != null && t != null && this.zpp_inner.b2 != t && t.constraints.add(this.zpp_inner), this.zpp_inner.active && this.zpp_inner.space != null && (this.zpp_inner.wake(), t == null || t.wake())); };
        Object.defineProperty(e.prototype, "body2", {
            get: function () { return this.zpp_inner.b2 == null ? null : Hr._wrap(this.zpp_inner.b2); },
            set: function (e) { this._setBody2(e); },
            enumerable: false,
            configurable: true
        });
        e.prototype._setBody2 = function (e) { this.zpp_inner.immutable_midstep("Constraint::body2"); var t = e == null ? null : e.zpp_inner; t != this.zpp_inner.b2 && (this.zpp_inner.b2 != null && (this.zpp_inner.space != null && this.zpp_inner.b1 != this.zpp_inner.b2 && this.zpp_inner.b2.constraints.remove(this.zpp_inner), this.zpp_inner.active && this.zpp_inner.space != null && this.zpp_inner.b2.wake()), this.zpp_inner.b2 = t, this.zpp_inner.space != null && t != null && this.zpp_inner.b1 != t && t.constraints.add(this.zpp_inner), this.zpp_inner.active && this.zpp_inner.space != null && (this.zpp_inner.wake(), t == null || t.wake())); };
        Object.defineProperty(e.prototype, "anchor1", {
            get: function () { return this.zpp_inner.wrap_a1 == null && this.zpp_inner.setup_a1(), this.zpp_inner.wrap_a1; },
            set: function (e) { if (e != null && e.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!"); if (e == null)
                throw Error("Constraint::anchor1 cannot be null"); this.zpp_inner.wrap_a1 == null && this.zpp_inner.setup_a1(), this.zpp_inner.wrap_a1.set(e), y(e); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "anchor2", {
            get: function () { return this.zpp_inner.wrap_a2 == null && this.zpp_inner.setup_a2(), this.zpp_inner.wrap_a2; },
            set: function (e) { if (e != null && e.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!"); if (e == null)
                throw Error("Constraint::anchor2 cannot be null"); this.zpp_inner.wrap_a2 == null && this.zpp_inner.setup_a2(), this.zpp_inner.wrap_a2.set(e), y(e); },
            enumerable: false,
            configurable: true
        });
        e.prototype.impulse = function () { var e = new (d()).geom.MatMN(2, 1); return e.zpp_inner.x[0] = this.zpp_inner.jAccx, e.zpp_inner.x[1] = this.zpp_inner.jAccy, e; };
        e.prototype.bodyImpulse = function (e) { var t = d(); if (e == null)
            throw Error(ra); var n = this.zpp_inner.b1 == null ? null : this.zpp_inner.b1.outer, r = this.zpp_inner.b2 == null ? null : this.zpp_inner.b2.outer; if (e != n && e != r)
            throw Error("Body is not linked to this constraint"); return this.zpp_inner.active ? this.zpp_inner.bodyImpulse(e.zpp_inner) : t.geom.Vec3.get(); };
        e.prototype.visitBodies = function (e) { if (e == null)
            throw Error("Cannot apply null lambda to bodies"); var t = this.zpp_inner.b1 == null ? null : this.zpp_inner.b1.outer; t != null && e(t); var n = this.zpp_inner.b2 == null ? null : this.zpp_inner.b2.outer; n != null && n != t && e(n); };
        return e;
    }(aa)), ba._wrapFn = function (e) { return v(e, function (e) { var t = Object.create(xa.prototype); return t.zpp_inner = e, e.outer = t, e.outer_zn = t, t.debugDraw = !0, t; }); }, Sa = (function (_super) {
        __extends(e, _super);
        function e() {
            var _this = this;
            _this = _super.call(this) || this, _this.outer_zn = null, _this.ratio = 1, _this.jointMin = 0, _this.jointMax = 0, _this.slack = !1, _this.equal = !1, _this.n12x = 0, _this.n12y = 0, _this.n34x = 0, _this.n34y = 0, _this.cx1 = 0, _this.cx2 = 0, _this.cx3 = 0, _this.cx4 = 0, _this.b1 = null, _this.a1localx = 0, _this.a1localy = 0, _this.a1relx = 0, _this.a1rely = 0, _this.wrap_a1 = null, _this.b2 = null, _this.a2localx = 0, _this.a2localy = 0, _this.a2relx = 0, _this.a2rely = 0, _this.wrap_a2 = null, _this.b3 = null, _this.a3localx = 0, _this.a3localy = 0, _this.a3relx = 0, _this.a3rely = 0, _this.wrap_a3 = null, _this.b4 = null, _this.a4localx = 0, _this.a4localy = 0, _this.a4relx = 0, _this.a4rely = 0, _this.wrap_a4 = null, _this.kMass = 0, _this.jAcc = 0, _this.jMax = 1 / 0, _this.gamma = 0, _this.bias = 0, _this.stepped = !1, _this.a1localx = 0, _this.a1localy = 0, _this.a1relx = 0, _this.a1rely = 0, _this.a2localx = 0, _this.a2localy = 0, _this.a2relx = 0, _this.a2rely = 0, _this.a3localx = 0, _this.a3localy = 0, _this.a3relx = 0, _this.a3rely = 0, _this.a4localx = 0, _this.a4localy = 0, _this.a4relx = 0, _this.a4rely = 0, _this.n12x = 1, _this.n12y = 0, _this.n34x = 1, _this.n34y = 0, _this.jAcc = 0, _this.jMax = 1 / 0, _this.stepped = !1, _this.cx1 = _this.cx2 = _this.cx3 = _this.cx4 = 0;
            return _this;
        }
        e.prototype.is_slack = function () { var e; this.a1relx = this.b1.axisy * this.a1localx - this.b1.axisx * this.a1localy, this.a1rely = this.a1localx * this.b1.axisx + this.a1localy * this.b1.axisy, this.a2relx = this.b2.axisy * this.a2localx - this.b2.axisx * this.a2localy, this.a2rely = this.a2localx * this.b2.axisx + this.a2localy * this.b2.axisy, this.a3relx = this.b3.axisy * this.a3localx - this.b3.axisx * this.a3localy, this.a3rely = this.a3localx * this.b3.axisx + this.a3localy * this.b3.axisy, this.a4relx = this.b4.axisy * this.a4localx - this.b4.axisx * this.a4localy, this.a4rely = this.a4localx * this.b4.axisx + this.a4localy * this.b4.axisy; var t = this.b2.posx + this.a2relx - (this.b1.posx + this.a1relx), n = this.b2.posy + this.a2rely - (this.b1.posy + this.a1rely), r = this.b4.posx + this.a4relx - (this.b3.posx + this.a3relx), i = this.b4.posy + this.a4rely - (this.b3.posy + this.a3rely), a = Math.sqrt(t * t + n * n), o = Math.sqrt(r * r + i * i), s = a + this.ratio * o; return e = !(this.equal || s < this.jointMin || s > this.jointMax), e; };
        e.prototype.bodyImpulse = function (e) { var t = Q._nape; if (this.stepped) {
            var n_364 = t.geom.Vec3.get();
            return e == this.b1 && (n_364.zpp_inner.x = n_364.zpp_inner.x - this.jAcc * this.n12x, n_364.zpp_inner.y = n_364.zpp_inner.y - this.jAcc * this.n12y, n_364.zpp_inner.z = n_364.zpp_inner.z - this.cx1 * this.jAcc), e == this.b2 && (n_364.zpp_inner.x = n_364.zpp_inner.x + this.jAcc * this.n12x, n_364.zpp_inner.y = n_364.zpp_inner.y + this.jAcc * this.n12y, n_364.zpp_inner.z = n_364.zpp_inner.z + this.cx2 * this.jAcc), e == this.b3 && (n_364.zpp_inner.x = n_364.zpp_inner.x - this.jAcc * this.n34x, n_364.zpp_inner.y = n_364.zpp_inner.y - this.jAcc * this.n34y, n_364.zpp_inner.z = n_364.zpp_inner.z - this.cx3 * this.jAcc), e == this.b4 && (n_364.zpp_inner.x = n_364.zpp_inner.x + this.jAcc * this.n34x, n_364.zpp_inner.y = n_364.zpp_inner.y + this.jAcc * this.n34y, n_364.zpp_inner.z = n_364.zpp_inner.z + this.cx4 * this.jAcc), n_364;
        } return t.geom.Vec3.get(0, 0, 0); };
        e.prototype.activeBodies = function () { this.b1 != null && this.b1.constraints.add(this), this.b2 != this.b1 && this.b2 != null && this.b2.constraints.add(this), this.b3 != this.b1 && this.b3 != this.b2 && this.b3 != null && this.b3.constraints.add(this), this.b4 != this.b1 && this.b4 != this.b2 && this.b4 != this.b3 && this.b4 != null && this.b4.constraints.add(this); };
        e.prototype.inactiveBodies = function () { this.b1 != null && this.b1.constraints.remove(this), this.b2 != this.b1 && this.b2 != null && this.b2.constraints.remove(this), this.b3 != this.b1 && this.b3 != this.b2 && this.b3 != null && this.b3.constraints.remove(this), this.b4 != this.b1 && this.b4 != this.b2 && this.b4 != this.b3 && this.b4 != null && this.b4.constraints.remove(this); };
        e.prototype.validate_a1 = function () { this.wrap_a1.zpp_inner.x = this.a1localx, this.wrap_a1.zpp_inner.y = this.a1localy; };
        e.prototype.invalidate_a1 = function (e) { this.immutable_midstep("Constraint::a1"), this.a1localx = e.x, this.a1localy = e.y, this.wake(); };
        e.prototype.setup_a1 = function () { var e = Q._nape.geom.Vec2.get(this.a1localx, this.a1localy); this.wrap_a1 = e, this.wrap_a1.zpp_inner._inuse = !0, this.wrap_a1.zpp_inner._validate = this.validate_a1.bind(this), this.wrap_a1.zpp_inner._invalidate = this.invalidate_a1.bind(this); };
        e.prototype.validate_a2 = function () { this.wrap_a2.zpp_inner.x = this.a2localx, this.wrap_a2.zpp_inner.y = this.a2localy; };
        e.prototype.invalidate_a2 = function (e) { this.immutable_midstep("Constraint::a2"), this.a2localx = e.x, this.a2localy = e.y, this.wake(); };
        e.prototype.setup_a2 = function () { var e = Q._nape.geom.Vec2.get(this.a2localx, this.a2localy); this.wrap_a2 = e, this.wrap_a2.zpp_inner._inuse = !0, this.wrap_a2.zpp_inner._validate = this.validate_a2.bind(this), this.wrap_a2.zpp_inner._invalidate = this.invalidate_a2.bind(this); };
        e.prototype.validate_a3 = function () { this.wrap_a3.zpp_inner.x = this.a3localx, this.wrap_a3.zpp_inner.y = this.a3localy; };
        e.prototype.invalidate_a3 = function (e) { this.immutable_midstep("Constraint::a3"), this.a3localx = e.x, this.a3localy = e.y, this.wake(); };
        e.prototype.setup_a3 = function () { var e = Q._nape.geom.Vec2.get(this.a3localx, this.a3localy); this.wrap_a3 = e, this.wrap_a3.zpp_inner._inuse = !0, this.wrap_a3.zpp_inner._validate = this.validate_a3.bind(this), this.wrap_a3.zpp_inner._invalidate = this.invalidate_a3.bind(this); };
        e.prototype.validate_a4 = function () { this.wrap_a4.zpp_inner.x = this.a4localx, this.wrap_a4.zpp_inner.y = this.a4localy; };
        e.prototype.invalidate_a4 = function (e) { this.immutable_midstep("Constraint::a4"), this.a4localx = e.x, this.a4localy = e.y, this.wake(); };
        e.prototype.setup_a4 = function () { var e = Q._nape.geom.Vec2.get(this.a4localx, this.a4localy); this.wrap_a4 = e, this.wrap_a4.zpp_inner._inuse = !0, this.wrap_a4.zpp_inner._validate = this.validate_a4.bind(this), this.wrap_a4.zpp_inner._invalidate = this.invalidate_a4.bind(this); };
        e.prototype.copy = function (t, n) { this.wrap_a1 == null && this.setup_a1(); var r = this.wrap_a1; this.wrap_a2 == null && this.setup_a2(); var i = this.wrap_a2; this.wrap_a3 == null && this.setup_a3(); var a = this.wrap_a3; this.wrap_a4 == null && this.setup_a4(); var o = e._createFn(null, null, null, null, r, i, a, this.wrap_a4, this.jointMin, this.jointMax, this.ratio); return this.copyto(o), $._copyBody(t, n, this.b1, o, "b1"), $._copyBody(t, n, this.b2, o, "b2"), $._copyBody(t, n, this.b3, o, "b3"), $._copyBody(t, n, this.b4, o, "b4"), o; };
        e.prototype.validate = function () { if (this.b1 == null || this.b2 == null || this.b3 == null || this.b4 == null)
            throw Error("PulleyJoint cannot be simulated with null bodies"); if (this.b1 == this.b2 || this.b3 == this.b4)
            throw Error("PulleyJoint cannot have body1==body2 or body3==body4"); if (this.b1.space != this.space || this.b2.space != this.space || this.b3.space != this.space || this.b4.space != this.space)
            throw Error("Error: Constraints must have each body within the same space to which the constraint has been assigned"); if (this.jointMin > this.jointMax)
            throw Error("PulleyJoint must have jointMin <= jointMax"); if (this.b1.type != 2 && this.b2.type != 2 || this.b3.type != 2 && this.b4.type != 2)
            throw Error("PulleyJoint cannot have both bodies in a linked pair non-dynamic"); };
        e.prototype.wake_connected = function () { this.b1 != null && this.b1.type == 2 && this.b1.wake(), this.b2 != null && this.b2.type == 2 && this.b2.wake(), this.b3 != null && this.b3.type == 2 && this.b3.wake(), this.b4 != null && this.b4.type == 2 && this.b4.wake(); };
        e.prototype.forest = function () { this.b1.type == 2 && Q._unionComponents(this.b1.component, this.component), this.b2.type == 2 && Q._unionComponents(this.b2.component, this.component), this.b3.type == 2 && Q._unionComponents(this.b3.component, this.component), this.b4.type == 2 && Q._unionComponents(this.b4.component, this.component); };
        e.prototype.pair_exists = function (e, t) { return this.b1.id == e && (this.b2.id == t || this.b3.id == t || this.b4.id == t) || this.b2.id == e && (this.b3.id == t || this.b4.id == t || this.b1.id == t) || this.b3.id == e && (this.b4.id == t || this.b1.id == t || this.b2.id == t) ? !0 : this.b4.id == e ? this.b1.id == t || this.b2.id == t || this.b3.id == t : !1; };
        e.prototype.clearcache = function () { this.jAcc = 0, this.pre_dt = -1; };
        e.prototype.preStep = function (e) { this.pre_dt == -1 && (this.pre_dt = e); var t = e / this.pre_dt; this.pre_dt = e, this.stepped = !0, this.equal = this.jointMin == this.jointMax, this.a1relx = this.b1.axisy * this.a1localx - this.b1.axisx * this.a1localy, this.a1rely = this.a1localx * this.b1.axisx + this.a1localy * this.b1.axisy, this.a2relx = this.b2.axisy * this.a2localx - this.b2.axisx * this.a2localy, this.a2rely = this.a2localx * this.b2.axisx + this.a2localy * this.b2.axisy, this.a3relx = this.b3.axisy * this.a3localx - this.b3.axisx * this.a3localy, this.a3rely = this.a3localx * this.b3.axisx + this.a3localy * this.b3.axisy, this.a4relx = this.b4.axisy * this.a4localx - this.b4.axisx * this.a4localy, this.a4rely = this.a4localx * this.b4.axisx + this.a4localy * this.b4.axisy; var n = this.b2.posx + this.a2relx - (this.b1.posx + this.a1relx), r = this.b2.posy + this.a2rely - (this.b1.posy + this.a1rely), i = this.b4.posx + this.a4relx - (this.b3.posx + this.a3relx), a = this.b4.posy + this.a4rely - (this.b3.posy + this.a3rely), o = Math.sqrt(n * n + r * r), s = Math.sqrt(i * i + a * a); if (o != 0) {
            var e_512 = 1 / o;
            this.n12x = n * e_512, this.n12y = r * e_512;
        } if (s != 0) {
            var e_513 = 1 / s;
            this.n34x = i * e_513, this.n34y = a * e_513;
            var t_433 = this.ratio;
            this.n34x *= t_433, this.n34y *= t_433;
        }
        else {
            var e_514 = this.ratio / Math.sqrt(this.n34x * this.n34x + this.n34y * this.n34y);
            this.n34x *= e_514, this.n34y *= e_514;
        } var c = o + this.ratio * s; this.equal ? (c -= this.jointMax, this.slack = !1) : c < this.jointMin ? (c = this.jointMin - c, this.n12x = -this.n12x, this.n12y = -this.n12y, this.n34x = -this.n34x, this.n34y = -this.n34y, this.slack = !1) : c > this.jointMax ? (c -= this.jointMax, this.slack = !1) : (this.n12x = 0, this.n12y = 0, this.n34x = 0, this.n34y = 0, c = 0, this.slack = !0); var l = c; if (!this.slack) {
            this.cx1 = this.n12y * this.a1relx - this.n12x * this.a1rely, this.cx2 = this.n12y * this.a2relx - this.n12x * this.a2rely, this.cx3 = this.n34y * this.a3relx - this.n34x * this.a3rely, this.cx4 = this.n34y * this.a4relx - this.n34x * this.a4rely;
            var n_365 = this.ratio * this.ratio, r_318 = this.b1.smass + this.b2.smass + n_365 * (this.b3.smass + this.b4.smass) + this.b1.sinertia * this.cx1 * this.cx1 + this.b2.sinertia * this.cx2 * this.cx2 + this.b3.sinertia * this.cx3 * this.cx3 + this.b4.sinertia * this.cx4 * this.cx4;
            if (this.b1 == this.b4 && (r_318 -= 2 * ((this.n12x * this.n34x + this.n12y * this.n34y) * this.b1.smass + this.cx1 * this.cx4 * this.b1.sinertia)), this.b1 == this.b3 && (r_318 += 2 * ((this.n12x * this.n34x + this.n12y * this.n34y) * this.b1.smass + this.cx1 * this.cx3 * this.b1.sinertia)), this.b2 == this.b3 && (r_318 -= 2 * ((this.n12x * this.n34x + this.n12y * this.n34y) * this.b2.smass + this.cx2 * this.cx3 * this.b2.sinertia)), this.b2 == this.b4 && (r_318 += 2 * ((this.n12x * this.n34x + this.n12y * this.n34y) * this.b2.smass + this.cx2 * this.cx4 * this.b2.sinertia)), this.kMass = r_318, this.kMass == 0 ? this.jAcc = 0 : this.kMass = 1 / this.kMass, this.stiff)
                this.bias = 0, this.gamma = 0;
            else {
                if (this.breakUnderError && l * l > this.maxError * this.maxError)
                    return !0;
                var t_434 = 2 * Math.PI * this.frequency;
                this.gamma = 1 / (e * t_434 * (2 * this.damping + t_434 * e));
                var n_366 = 1 / (1 + this.gamma), r_319 = e * t_434 * t_434 * this.gamma;
                this.gamma *= n_366, this.kMass *= n_366, this.bias = -l * r_319, this.bias < -this.maxError ? this.bias = -this.maxError : this.bias > this.maxError && (this.bias = this.maxError);
            }
            this.jAcc *= t, this.jMax = this.maxForce * e;
        } return !1; };
        e.prototype.warmStart = function () { if (!this.slack) {
            var e_515 = this.b1.imass * this.jAcc;
            this.b1.velx -= this.n12x * e_515, this.b1.vely -= this.n12y * e_515;
            var t_435 = this.b2.imass * this.jAcc;
            this.b2.velx += this.n12x * t_435, this.b2.vely += this.n12y * t_435;
            var n_367 = this.b3.imass * this.jAcc;
            this.b3.velx -= this.n34x * n_367, this.b3.vely -= this.n34y * n_367;
            var r_320 = this.b4.imass * this.jAcc;
            this.b4.velx += this.n34x * r_320, this.b4.vely += this.n34y * r_320, this.b1.angvel -= this.cx1 * this.b1.iinertia * this.jAcc, this.b2.angvel += this.cx2 * this.b2.iinertia * this.jAcc, this.b3.angvel -= this.cx3 * this.b3.iinertia * this.jAcc, this.b4.angvel += this.cx4 * this.b4.iinertia * this.jAcc;
        } };
        e.prototype.applyImpulseVel = function () { if (this.slack)
            return !1; var e = this.n12x * (this.b2.velx + this.b2.kinvelx - this.b1.velx - this.b1.kinvelx) + this.n12y * (this.b2.vely + this.b2.kinvely - this.b1.vely - this.b1.kinvely) + this.n34x * (this.b4.velx + this.b4.kinvelx - this.b3.velx - this.b3.kinvelx) + this.n34y * (this.b4.vely + this.b4.kinvely - this.b3.vely - this.b3.kinvely) + (this.b2.angvel + this.b2.kinangvel) * this.cx2 - (this.b1.angvel + this.b1.kinangvel) * this.cx1 + (this.b4.angvel + this.b4.kinangvel) * this.cx4 - (this.b3.angvel + this.b3.kinangvel) * this.cx3, t = this.kMass * (this.bias - e) - this.jAcc * this.gamma, n = this.jAcc; if (this.jAcc += t, !this.equal && this.jAcc > 0 && (this.jAcc = 0), this.breakUnderForce && this.jAcc < -this.jMax)
            return !0; this.stiff || this.jAcc < -this.jMax && (this.jAcc = -this.jMax), t = this.jAcc - n; var r = this.b1.imass * t; this.b1.velx -= this.n12x * r, this.b1.vely -= this.n12y * r; var i = this.b2.imass * t; this.b2.velx += this.n12x * i, this.b2.vely += this.n12y * i; var a = this.b3.imass * t; this.b3.velx -= this.n34x * a, this.b3.vely -= this.n34y * a; var o = this.b4.imass * t; return this.b4.velx += this.n34x * o, this.b4.vely += this.n34y * o, this.b1.angvel -= this.cx1 * this.b1.iinertia * t, this.b2.angvel += this.cx2 * this.b2.iinertia * t, this.b3.angvel -= this.cx3 * this.b3.iinertia * t, this.b4.angvel += this.cx4 * this.b4.iinertia * t, !1; };
        e.prototype.applyImpulsePos = function () { var e, t = this.b1.axisy * this.a1localx - this.b1.axisx * this.a1localy, n = this.a1localx * this.b1.axisx + this.a1localy * this.b1.axisy, r = this.b2.axisy * this.a2localx - this.b2.axisx * this.a2localy, i = this.a2localx * this.b2.axisx + this.a2localy * this.b2.axisy, a = this.b3.axisy * this.a3localx - this.b3.axisx * this.a3localy, o = this.a3localx * this.b3.axisx + this.a3localy * this.b3.axisy, s = this.b4.axisy * this.a4localx - this.b4.axisx * this.a4localy, c = this.a4localx * this.b4.axisx + this.a4localy * this.b4.axisy, l, u = this.n12x, d = this.n12y, f = this.n34x, p = this.n34y, m = this.b2.posx + r - (this.b1.posx + t), h = this.b2.posy + i - (this.b1.posy + n), g = this.b4.posx + s - (this.b3.posx + a), _ = this.b4.posy + c - (this.b3.posy + o), v = Math.sqrt(m * m + h * h), y = Math.sqrt(g * g + _ * _); if (v != 0) {
            var e_516 = 1 / v;
            u = m * e_516, d = h * e_516;
        } if (y != 0) {
            var e_517 = 1 / y;
            f = g * e_517, p = _ * e_517;
            var t_436 = this.ratio;
            f *= t_436, p *= t_436;
        }
        else {
            var e_518 = this.ratio / Math.sqrt(f * f + p * p);
            f *= e_518, p *= e_518;
        } var b = v + this.ratio * y; this.equal ? (b -= this.jointMax, l = !1) : b < this.jointMin ? (b = this.jointMin - b, u = -u, d = -d, f = -f, p = -p, l = !1) : b > this.jointMax ? (b -= this.jointMax, l = !1) : (u = 0, d = 0, f = 0, p = 0, b = 0, l = !0); var x = b; if (!l) {
            if (this.breakUnderError && x * x > this.maxError * this.maxError)
                return !0;
            if (x * x < R.constraintLinearSlop * R.constraintLinearSlop)
                return !1;
            if (x *= .5, x * x > 6) {
                var l_85 = this.b1.smass + this.b2.smass;
                if (l_85 > R.epsilon) {
                    var m_21 = .75 / l_85;
                    if (e = -x * m_21, this.equal || e < 0) {
                        var l_86 = e * this.b1.imass;
                        this.b1.posx -= u * l_86, this.b1.posy -= d * l_86;
                        var m_22 = e * this.b2.imass;
                        this.b2.posx += u * m_22, this.b2.posy += d * m_22;
                        var h_15 = e * this.b3.imass;
                        this.b3.posx -= f * h_15, this.b3.posy -= p * h_15;
                        var g_17 = e * this.b4.imass;
                        this.b4.posx += f * g_17, this.b4.posy += p * g_17;
                        var _9 = this.b2.posx + r - (this.b1.posx + t), v_10 = this.b2.posy + i - (this.b1.posy + n), y_11 = this.b4.posx + s - (this.b3.posx + a), b_12 = this.b4.posy + c - (this.b3.posy + o), S_9 = Math.sqrt(_9 * _9 + v_10 * v_10), C_7 = Math.sqrt(y_11 * y_11 + b_12 * b_12);
                        if (S_9 != 0) {
                            var e_519 = 1 / S_9;
                            u = _9 * e_519, d = v_10 * e_519;
                        }
                        if (C_7 != 0) {
                            var e_520 = 1 / C_7;
                            f = y_11 * e_520, p = b_12 * e_520;
                            var t_437 = this.ratio;
                            f *= t_437, p *= t_437;
                        }
                        else {
                            var e_521 = this.ratio / Math.sqrt(f * f + p * p);
                            f *= e_521, p *= e_521;
                        }
                        var w_6 = S_9 + this.ratio * C_7;
                        this.equal ? w_6 -= this.jointMax : w_6 < this.jointMin ? (w_6 = this.jointMin - w_6, u = -u, d = -d, f = -f, p = -p) : w_6 > this.jointMax ? w_6 -= this.jointMax : (u = 0, d = 0, f = 0, p = 0, w_6 = 0), x = w_6, x *= .5;
                    }
                }
            }
            var l_87 = d * t - u * n, m_23 = d * r - u * i, h_16 = p * a - f * o, g_18 = p * s - f * c, _10 = this.ratio * this.ratio, v_11 = this.b1.smass + this.b2.smass + _10 * (this.b3.smass + this.b4.smass) + this.b1.sinertia * l_87 * l_87 + this.b2.sinertia * m_23 * m_23 + this.b3.sinertia * h_16 * h_16 + this.b4.sinertia * g_18 * g_18;
            this.b1 == this.b4 && (v_11 -= 2 * ((u * f + d * p) * this.b1.smass + l_87 * g_18 * this.b1.sinertia)), this.b1 == this.b3 && (v_11 += 2 * ((u * f + d * p) * this.b1.smass + l_87 * h_16 * this.b1.sinertia)), this.b2 == this.b3 && (v_11 -= 2 * ((u * f + d * p) * this.b2.smass + m_23 * h_16 * this.b2.sinertia)), this.b2 == this.b4 && (v_11 += 2 * ((u * f + d * p) * this.b2.smass + m_23 * g_18 * this.b2.sinertia));
            var y_12 = v_11;
            if (y_12 != 0 && (y_12 = 1 / y_12), e = -x * y_12, this.equal || e < 0) {
                var t_438 = this.b1.imass * e;
                this.b1.posx -= u * t_438, this.b1.posy -= d * t_438;
                var n_368 = this.b2.imass * e;
                this.b2.posx += u * n_368, this.b2.posy += d * n_368;
                var r_321 = this.b3.imass * e;
                this.b3.posx -= f * r_321, this.b3.posy -= p * r_321;
                var i_226 = this.b4.imass * e;
                this.b4.posx += f * i_226, this.b4.posy += p * i_226, $._rotateBody(this.b1, -l_87 * this.b1.iinertia * e), $._rotateBody(this.b2, m_23 * this.b2.iinertia * e), $._rotateBody(this.b3, -h_16 * this.b3.iinertia * e), $._rotateBody(this.b4, g_18 * this.b4.iinertia * e);
            }
        } return !1; };
        return e;
    }(Q)), Sa._wrapFn = null, Sa._createFn = null, Ca = Sa, wa = (function (_super) {
        __extends(e, _super);
        function e(e, t, n, r, i, a, o, s, c, l, u) {
            if (u === void 0) { u = 1; }
            var _this = _super.call(this) || this;
            var d = new Ca;
            if (_this.zpp_inner = d, d.outer = _this, d.outer_zn = _this, _this._tagAnyConstraint(), _this._setBody1(e), _this._setBody2(t), _this._setBody3(n), _this._setBody4(r), _this._setAnchorInit(i, "anchor1", function (e, t) { d.a1localx = e, d.a1localy = t; }), _this._setAnchorInit(a, "anchor2", function (e, t) { d.a2localx = e, d.a2localy = t; }), _this._setAnchorInit(o, "anchor3", function (e, t) { d.a3localx = e, d.a3localy = t; }), _this._setAnchorInit(s, "anchor4", function (e, t) { d.a4localx = e, d.a4localy = t; }), d.immutable_midstep("PulleyJoint::jointMin"), c !== c)
                throw Error("PulleyJoint::jointMin cannot be NaN");
            if (c < 0)
                throw Error("PulleyJoint::jointMin must be >= 0");
            if (d.jointMin != c && (d.jointMin = c, d.wake()), d.immutable_midstep("PulleyJoint::jointMax"), l !== l)
                throw Error("PulleyJoint::jointMax cannot be NaN");
            if (l < 0)
                throw Error("PulleyJoint::jointMax must be >= 0");
            if (d.jointMax != l && (d.jointMax = l, d.wake()), d.immutable_midstep("PulleyJoint::ratio"), u !== u)
                throw Error("PulleyJoint::ratio cannot be NaN");
            d.ratio != u && (d.ratio = u, d.wake());
            return _this;
        }
        e.prototype._setAnchorInit = function (e, t, n) { if (e != null && e.zpp_disp)
            throw Error("Vec2 has been disposed and cannot be used!"); if (e == null)
            throw Error("Constraint::" + t + " cannot be null"); n(xe(e), Se(e)), y(e); };
        e._wrap = function (t) { var n; return t == null ? null : t instanceof e ? t : ((n = t.zpp_inner) == null ? void 0 : n.outer) instanceof e ? t.zpp_inner.outer : t instanceof Ca ? v(t, function (t) { var n = Object.create(e.prototype); return n.zpp_inner = t, t.outer = n, t.outer_zn = n, n.debugDraw = !0, n; }) : v(t, function (t) { var n; var r = Object.create(e.prototype); return r.zpp_inner = (n = t.zpp_inner) == null ? t : n, r.zpp_inner.outer = r, r.zpp_inner.outer_zn = r, r; }); };
        Object.defineProperty(e.prototype, "body1", {
            get: function () { return this.zpp_inner.b1 == null ? null : Hr._wrap(this.zpp_inner.b1); },
            set: function (e) { this._setBody1(e); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "body2", {
            get: function () { return this.zpp_inner.b2 == null ? null : Hr._wrap(this.zpp_inner.b2); },
            set: function (e) { this._setBody2(e); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "body3", {
            get: function () { return this.zpp_inner.b3 == null ? null : Hr._wrap(this.zpp_inner.b3); },
            set: function (e) { this._setBody3(e); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "body4", {
            get: function () { return this.zpp_inner.b4 == null ? null : Hr._wrap(this.zpp_inner.b4); },
            set: function (e) { this._setBody4(e); },
            enumerable: false,
            configurable: true
        });
        e.prototype._setBody1 = function (e) { this.zpp_inner.immutable_midstep("Constraint::body1"); var t = e == null ? null : e.zpp_inner; t != this.zpp_inner.b1 && (this.zpp_inner.b1 != null && (this.zpp_inner.space != null && this.zpp_inner.b2 != this.zpp_inner.b1 && this.zpp_inner.b3 != this.zpp_inner.b1 && this.zpp_inner.b4 != this.zpp_inner.b1 && this.zpp_inner.b1.constraints.remove(this.zpp_inner), this.zpp_inner.active && this.zpp_inner.space != null && this.zpp_inner.b1.wake()), this.zpp_inner.b1 = t, this.zpp_inner.space != null && t != null && this.zpp_inner.b2 != t && this.zpp_inner.b3 != t && this.zpp_inner.b4 != t && t.constraints.add(this.zpp_inner), this.zpp_inner.active && this.zpp_inner.space != null && (this.zpp_inner.wake(), t == null || t.wake())); };
        e.prototype._setBody2 = function (e) { this.zpp_inner.immutable_midstep("Constraint::body2"); var t = e == null ? null : e.zpp_inner; t != this.zpp_inner.b2 && (this.zpp_inner.b2 != null && (this.zpp_inner.space != null && this.zpp_inner.b1 != this.zpp_inner.b2 && this.zpp_inner.b3 != this.zpp_inner.b2 && this.zpp_inner.b4 != this.zpp_inner.b2 && this.zpp_inner.b2.constraints.remove(this.zpp_inner), this.zpp_inner.active && this.zpp_inner.space != null && this.zpp_inner.b2.wake()), this.zpp_inner.b2 = t, this.zpp_inner.space != null && t != null && this.zpp_inner.b1 != t && this.zpp_inner.b3 != t && this.zpp_inner.b4 != t && t.constraints.add(this.zpp_inner), this.zpp_inner.active && this.zpp_inner.space != null && (this.zpp_inner.wake(), t == null || t.wake())); };
        e.prototype._setBody3 = function (e) { this.zpp_inner.immutable_midstep("Constraint::body3"); var t = e == null ? null : e.zpp_inner; t != this.zpp_inner.b3 && (this.zpp_inner.b3 != null && (this.zpp_inner.space != null && this.zpp_inner.b1 != this.zpp_inner.b3 && this.zpp_inner.b2 != this.zpp_inner.b3 && this.zpp_inner.b4 != this.zpp_inner.b3 && this.zpp_inner.b3.constraints.remove(this.zpp_inner), this.zpp_inner.active && this.zpp_inner.space != null && this.zpp_inner.b3.wake()), this.zpp_inner.b3 = t, this.zpp_inner.space != null && t != null && this.zpp_inner.b1 != t && this.zpp_inner.b2 != t && this.zpp_inner.b4 != t && t.constraints.add(this.zpp_inner), this.zpp_inner.active && this.zpp_inner.space != null && (this.zpp_inner.wake(), t == null || t.wake())); };
        e.prototype._setBody4 = function (e) { this.zpp_inner.immutable_midstep("Constraint::body4"); var t = e == null ? null : e.zpp_inner; t != this.zpp_inner.b4 && (this.zpp_inner.b4 != null && (this.zpp_inner.space != null && this.zpp_inner.b1 != this.zpp_inner.b4 && this.zpp_inner.b2 != this.zpp_inner.b4 && this.zpp_inner.b3 != this.zpp_inner.b4 && this.zpp_inner.b4.constraints.remove(this.zpp_inner), this.zpp_inner.active && this.zpp_inner.space != null && this.zpp_inner.b4.wake()), this.zpp_inner.b4 = t, this.zpp_inner.space != null && t != null && this.zpp_inner.b1 != t && this.zpp_inner.b2 != t && this.zpp_inner.b3 != t && t.constraints.add(this.zpp_inner), this.zpp_inner.active && this.zpp_inner.space != null && (this.zpp_inner.wake(), t == null || t.wake())); };
        Object.defineProperty(e.prototype, "anchor1", {
            get: function () { return this.zpp_inner.wrap_a1 == null && this.zpp_inner.setup_a1(), this.zpp_inner.wrap_a1; },
            set: function (e) { if (e != null && e.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!"); if (e == null)
                throw Error("Constraint::anchor1 cannot be null"); this.zpp_inner.wrap_a1 == null && this.zpp_inner.setup_a1(), xe(e), Se(e), this.zpp_inner.wrap_a1.set(e), y(e); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "anchor2", {
            get: function () { return this.zpp_inner.wrap_a2 == null && this.zpp_inner.setup_a2(), this.zpp_inner.wrap_a2; },
            set: function (e) { if (e != null && e.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!"); if (e == null)
                throw Error("Constraint::anchor2 cannot be null"); this.zpp_inner.wrap_a2 == null && this.zpp_inner.setup_a2(), xe(e), Se(e), this.zpp_inner.wrap_a2.set(e), y(e); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "anchor3", {
            get: function () { return this.zpp_inner.wrap_a3 == null && this.zpp_inner.setup_a3(), this.zpp_inner.wrap_a3; },
            set: function (e) { if (e != null && e.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!"); if (e == null)
                throw Error("Constraint::anchor3 cannot be null"); this.zpp_inner.wrap_a3 == null && this.zpp_inner.setup_a3(), xe(e), Se(e), this.zpp_inner.wrap_a3.set(e), y(e); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "anchor4", {
            get: function () { return this.zpp_inner.wrap_a4 == null && this.zpp_inner.setup_a4(), this.zpp_inner.wrap_a4; },
            set: function (e) { if (e != null && e.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!"); if (e == null)
                throw Error("Constraint::anchor4 cannot be null"); this.zpp_inner.wrap_a4 == null && this.zpp_inner.setup_a4(), xe(e), Se(e), this.zpp_inner.wrap_a4.set(e), y(e); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "jointMin", {
            get: function () { return this.zpp_inner.jointMin; },
            set: function (e) { if (this.zpp_inner.immutable_midstep("PulleyJoint::jointMin"), e !== e)
                throw Error("PulleyJoint::jointMin cannot be NaN"); if (e < 0)
                throw Error("PulleyJoint::jointMin must be >= 0"); this.zpp_inner.jointMin != e && (this.zpp_inner.jointMin = e, this.zpp_inner.wake()); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "jointMax", {
            get: function () { return this.zpp_inner.jointMax; },
            set: function (e) { if (this.zpp_inner.immutable_midstep("PulleyJoint::jointMax"), e !== e)
                throw Error("PulleyJoint::jointMax cannot be NaN"); if (e < 0)
                throw Error("PulleyJoint::jointMax must be >= 0"); this.zpp_inner.jointMax != e && (this.zpp_inner.jointMax = e, this.zpp_inner.wake()); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "ratio", {
            get: function () { return this.zpp_inner.ratio; },
            set: function (e) { if (this.zpp_inner.immutable_midstep("PulleyJoint::ratio"), e !== e)
                throw Error("PulleyJoint::ratio cannot be NaN"); this.zpp_inner.ratio != e && (this.zpp_inner.ratio = e, this.zpp_inner.wake()); },
            enumerable: false,
            configurable: true
        });
        e.prototype.isSlack = function () { if (this.zpp_inner.b1 == null || this.zpp_inner.b2 == null || this.zpp_inner.b3 == null || this.zpp_inner.b4 == null)
            throw Error("Cannot compute slack for PulleyJoint if either body is null."); return this.zpp_inner.slack; };
        e.prototype.impulse = function () { var e = new On(1, 1); if (0 >= e.zpp_inner.m || 0 >= e.zpp_inner.n)
            throw Error("MatMN indices out of range"); return e.zpp_inner.x[0 * e.zpp_inner.n] = this.zpp_inner.jAcc, e; };
        e.prototype.bodyImpulse = function (e) { var t, n, r, i, a, o, s, c; if (e == null)
            throw Error(ra); var l = (t = (n = this.zpp_inner.b1) == null ? void 0 : n.outer) == null ? null : t, u = (r = (i = this.zpp_inner.b2) == null ? void 0 : i.outer) == null ? null : r, d = (a = (o = this.zpp_inner.b3) == null ? void 0 : o.outer) == null ? null : a, f = (s = (c = this.zpp_inner.b4) == null ? void 0 : c.outer) == null ? null : s; if (e != l && e != u && e != d && e != f)
            throw Error("Body is not linked to this constraint"); return this.zpp_inner.active ? this.zpp_inner.bodyImpulse(e.zpp_inner) : En.get(0, 0, 0); };
        e.prototype.visitBodies = function (e) { var t, n, r, i, a, o, s, c; if (e == null)
            throw Error("Cannot apply null lambda to bodies"); var l = (t = (n = this.zpp_inner.b1) == null ? void 0 : n.outer) == null ? null : t, u = (r = (i = this.zpp_inner.b2) == null ? void 0 : i.outer) == null ? null : r, d = (a = (o = this.zpp_inner.b3) == null ? void 0 : o.outer) == null ? null : a, f = (s = (c = this.zpp_inner.b4) == null ? void 0 : c.outer) == null ? null : s; l != null && e(l), u != null && u != l && e(u), d != null && d != l && d != u && e(d), f != null && f != l && f != u && f != d && e(f); };
        return e;
    }(aa)), Ca._wrapFn = function (e) { return v(e, function (e) { var t = Object.create(wa.prototype); return t.zpp_inner = e, e.outer = t, e.outer_zn = t, t.debugDraw = !0, t; }); }, Ta = (function (_super) {
        __extends(e, _super);
        function e() {
            var _this = this;
            _this = _super.call(this) || this, _this.outer_zn = null, _this.b1 = null, _this.b2 = null, _this.a1localx = 0, _this.a1localy = 0, _this.a1relx = 0, _this.a1rely = 0, _this.wrap_a1 = null, _this.a2localx = 0, _this.a2localy = 0, _this.a2relx = 0, _this.a2rely = 0, _this.wrap_a2 = null, _this.phase = 0, _this.kMassa = 0, _this.kMassb = 0, _this.kMassc = 0, _this.kMassd = 0, _this.kMasse = 0, _this.kMassf = 0, _this.jAccx = 0, _this.jAccy = 0, _this.jAccz = 0, _this.jMax = 1 / 0, _this.gamma = 0, _this.biasx = 0, _this.biasy = 0, _this.biasz = 0, _this.stepped = !1, _this.phase = 0, _this.jAccx = 0, _this.jAccy = 0, _this.jAccz = 0, _this.jMax = 1 / 0, _this.stepped = !1, _this.a1localx = 0, _this.a1localy = 0, _this.a1relx = 0, _this.a1rely = 0, _this.a2localx = 0, _this.a2localy = 0, _this.a2relx = 0, _this.a2rely = 0;
            return _this;
        }
        e.prototype.bodyImpulse = function (e) { var t = Q._nape; return this.stepped ? e == this.b1 ? t.geom.Vec3.get(-this.jAccx, -this.jAccy, -(this.jAccy * this.a1relx - this.jAccx * this.a1rely + this.jAccz)) : t.geom.Vec3.get(this.jAccx, this.jAccy, this.jAccy * this.a2relx - this.jAccx * this.a2rely + this.jAccz) : t.geom.Vec3.get(0, 0, 0); };
        e.prototype.activeBodies = function () { this.b1 != null && this.b1.constraints.add(this), this.b2 != this.b1 && this.b2 != null && this.b2.constraints.add(this); };
        e.prototype.inactiveBodies = function () { this.b1 != null && this.b1.constraints.remove(this), this.b2 != this.b1 && this.b2 != null && this.b2.constraints.remove(this); };
        e.prototype.validate_a1 = function () { this.wrap_a1.zpp_inner.x = this.a1localx, this.wrap_a1.zpp_inner.y = this.a1localy; };
        e.prototype.invalidate_a1 = function (e) { this.immutable_midstep("Constraint::a1"), this.a1localx = e.x, this.a1localy = e.y, this.wake(); };
        e.prototype.setup_a1 = function () { var e = Q._nape.geom.Vec2.get(this.a1localx, this.a1localy); this.wrap_a1 = e, this.wrap_a1.zpp_inner._inuse = !0, this.wrap_a1.zpp_inner._validate = this.validate_a1.bind(this), this.wrap_a1.zpp_inner._invalidate = this.invalidate_a1.bind(this); };
        e.prototype.validate_a2 = function () { this.wrap_a2.zpp_inner.x = this.a2localx, this.wrap_a2.zpp_inner.y = this.a2localy; };
        e.prototype.invalidate_a2 = function (e) { this.immutable_midstep("Constraint::a2"), this.a2localx = e.x, this.a2localy = e.y, this.wake(); };
        e.prototype.setup_a2 = function () { var e = Q._nape.geom.Vec2.get(this.a2localx, this.a2localy); this.wrap_a2 = e, this.wrap_a2.zpp_inner._inuse = !0, this.wrap_a2.zpp_inner._validate = this.validate_a2.bind(this), this.wrap_a2.zpp_inner._invalidate = this.invalidate_a2.bind(this); };
        e.prototype.copy = function (t, n) { this.wrap_a1 == null && this.setup_a1(); var r = this.wrap_a1; this.wrap_a2 == null && this.setup_a2(); var i = e._createFn(null, null, r, this.wrap_a2); return this.copyto(i), $._copyBody(t, n, this.b1, i, "b1"), $._copyBody(t, n, this.b2, i, "b2"), i; };
        e.prototype.validate = function () { if (this.b1 == null || this.b2 == null)
            throw Error("AngleJoint cannot be simulated null bodies"); if (this.b1 == this.b2)
            throw Error("WeldJoint cannot be simulated with body1 == body2"); if (this.b1.space != this.space || this.b2.space != this.space)
            throw Error("Error: Constraints must have each body within the same space to which the constraint has been assigned"); if (this.b1.type != 2 && this.b2.type != 2)
            throw Error("Constraints cannot have both bodies non-dynamic"); };
        e.prototype.wake_connected = function () { this.b1 != null && this.b1.type == 2 && this.b1.wake(), this.b2 != null && this.b2.type == 2 && this.b2.wake(); };
        e.prototype.forest = function () { this.b1.type == 2 && Q._unionComponents(this.b1.component, this.component), this.b2.type == 2 && Q._unionComponents(this.b2.component, this.component); };
        e.prototype.pair_exists = function (e, t) { return this.b1.id == e && this.b2.id == t || this.b1.id == t && this.b2.id == e; };
        e.prototype.clearcache = function () { this.jAccx = 0, this.jAccy = 0, this.jAccz = 0, this.pre_dt = -1; };
        e.prototype.preStep = function (e) { this.pre_dt == -1 && (this.pre_dt = e); var t = e / this.pre_dt; this.pre_dt = e, this.stepped = !0, this.a1relx = this.b1.axisy * this.a1localx - this.b1.axisx * this.a1localy, this.a1rely = this.a1localx * this.b1.axisx + this.a1localy * this.b1.axisy, this.a2relx = this.b2.axisy * this.a2localx - this.b2.axisx * this.a2localy, this.a2rely = this.a2localx * this.b2.axisx + this.a2localy * this.b2.axisy; var n = this.b1.smass + this.b2.smass; if (this.kMassa = n, this.kMassb = 0, this.kMassd = n, this.kMassc = 0, this.kMasse = 0, this.kMassf = 0, this.b1.sinertia != 0) {
            var e_522 = this.a1relx * this.b1.sinertia, t_439 = this.a1rely * this.b1.sinertia;
            this.kMassa += t_439 * this.a1rely, this.kMassb += -t_439 * this.a1relx, this.kMassd += e_522 * this.a1relx, this.kMassc += -t_439, this.kMasse += e_522, this.kMassf += this.b1.sinertia;
        } if (this.b2.sinertia != 0) {
            var e_523 = this.a2relx * this.b2.sinertia, t_440 = this.a2rely * this.b2.sinertia;
            this.kMassa += t_440 * this.a2rely, this.kMassb += -t_440 * this.a2relx, this.kMassd += e_523 * this.a2relx, this.kMassc += -t_440, this.kMasse += e_523, this.kMassf += this.b2.sinertia;
        } var r = this.kMassa * (this.kMassd * this.kMassf - this.kMasse * this.kMasse) + this.kMassb * (this.kMassc * this.kMasse - this.kMassb * this.kMassf) + this.kMassc * (this.kMassb * this.kMasse - this.kMassc * this.kMassd), i; if (n == 0) {
            var e_524 = this.kMassf;
            this.kMassa = this.kMassb = this.kMassc = this.kMassd = this.kMasse = 0, this.kMassf = e_524 == 0 ? 0 : 1 / e_524, i = 3 | (e_524 == 0 ? 4 : 0);
        }
        else if (r != r)
            this.kMassa = 0, this.kMassb = 0, this.kMassd = 0, this.kMassc = 0, this.kMasse = 0, this.kMassf = 0, i = 7;
        else if (r == 0) {
            var e_525 = 0;
            this.kMassa == 0 ? (this.kMassa = 0, e_525 |= 1) : this.kMassa = 1 / this.kMassa, this.kMassd == 0 ? (this.kMassd = 0, e_525 |= 2) : this.kMassd = 1 / this.kMassd, this.kMassf == 0 ? (this.kMassf = 0, e_525 |= 4) : this.kMassf = 1 / this.kMassf, this.kMassb = this.kMassc = this.kMasse = 0, i = e_525;
        }
        else {
            var e_526 = 1 / r, t_441 = e_526 * (this.kMassd * this.kMassf - this.kMasse * this.kMasse), n_369 = e_526 * (this.kMasse * this.kMassc - this.kMassb * this.kMassf), a_175 = e_526 * (this.kMassa * this.kMassf - this.kMassc * this.kMassc), o_127 = e_526 * (this.kMassb * this.kMasse - this.kMassc * this.kMassd), s_115 = e_526 * (this.kMassb * this.kMassc - this.kMassa * this.kMasse), c_94 = e_526 * (this.kMassa * this.kMassd - this.kMassb * this.kMassb);
            this.kMassa = t_441, this.kMassb = n_369, this.kMassd = a_175, this.kMassc = o_127, this.kMasse = s_115, this.kMassf = c_94, i = 0;
        } if (i & 1 && (this.jAccx = 0), i & 2 && (this.jAccy = 0), i & 4 && (this.jAccz = 0), this.stiff)
            this.biasx = 0, this.biasy = 0, this.biasz = 0, this.gamma = 0;
        else {
            var t_442 = 2 * Math.PI * this.frequency;
            this.gamma = 1 / (e * t_442 * (2 * this.damping + t_442 * e));
            var n_370 = 1 / (1 + this.gamma), r_322 = e * t_442 * t_442 * this.gamma;
            this.gamma *= n_370;
            var i_227 = n_370;
            if (this.kMassa *= i_227, this.kMassb *= i_227, this.kMassd *= i_227, this.kMassc *= i_227, this.kMasse *= i_227, this.kMassf *= i_227, this.biasx = this.b2.posx + this.a2relx - (this.b1.posx + this.a1relx), this.biasy = this.b2.posy + this.a2rely - (this.b1.posy + this.a1rely), this.biasz = this.b2.rot - this.b1.rot - this.phase, this.breakUnderError && this.biasx * this.biasx + this.biasy * this.biasy + this.biasz * this.biasz > this.maxError * this.maxError)
                return !0;
            var a_176 = -r_322;
            this.biasx *= a_176, this.biasy *= a_176, this.biasz *= a_176;
            var o_128 = this.maxError, s_116 = this.biasx * this.biasx + this.biasy * this.biasy + this.biasz * this.biasz;
            if (s_116 > o_128 * o_128) {
                var e_527 = 1 / Math.sqrt(s_116) * o_128;
                this.biasx *= e_527, this.biasy *= e_527, this.biasz *= e_527;
            }
        } return this.jAccx *= t, this.jAccy *= t, this.jAccz *= t, this.jMax = this.maxForce * e, !1; };
        e.prototype.warmStart = function () { var e = this.b1.imass; this.b1.velx -= this.jAccx * e, this.b1.vely -= this.jAccy * e; var t = this.b2.imass; this.b2.velx += this.jAccx * t, this.b2.vely += this.jAccy * t, this.b1.angvel -= (this.jAccy * this.a1relx - this.jAccx * this.a1rely + this.jAccz) * this.b1.iinertia, this.b2.angvel += (this.jAccy * this.a2relx - this.jAccx * this.a2rely + this.jAccz) * this.b2.iinertia; };
        e.prototype.applyImpulseVel = function () { var e = this.b2.velx + this.b2.kinvelx - this.a2rely * (this.b2.angvel + this.b2.kinangvel) - (this.b1.velx + this.b1.kinvelx - this.a1rely * (this.b1.angvel + this.b1.kinangvel)), t = this.b2.vely + this.b2.kinvely + this.a2relx * (this.b2.angvel + this.b2.kinangvel) - (this.b1.vely + this.b1.kinvely + this.a1relx * (this.b1.angvel + this.b1.kinangvel)), n = this.b2.angvel + this.b2.kinangvel - this.b1.angvel - this.b1.kinangvel, r = this.biasx - e, i = this.biasy - t, a = this.biasz - n, o = this.kMassa * r + this.kMassb * i + this.kMassc * a, s = this.kMassb * r + this.kMassd * i + this.kMasse * a; a = this.kMassc * r + this.kMasse * i + this.kMassf * a, r = o, i = s, r -= this.jAccx * this.gamma, i -= this.jAccy * this.gamma, a -= this.jAccz * this.gamma; var c = this.jAccx, l = this.jAccy, u = this.jAccz; if (this.jAccx += r, this.jAccy += i, this.jAccz += a, this.breakUnderForce) {
            if (this.jAccx * this.jAccx + this.jAccy * this.jAccy + this.jAccz * this.jAccz > this.jMax * this.jMax)
                return !0;
        }
        else if (!this.stiff) {
            var e_528 = this.jMax, t_443 = this.jAccx * this.jAccx + this.jAccy * this.jAccy + this.jAccz * this.jAccz;
            if (t_443 > e_528 * e_528) {
                var n_371 = 1 / Math.sqrt(t_443) * e_528;
                this.jAccx *= n_371, this.jAccy *= n_371, this.jAccz *= n_371;
            }
        } r = this.jAccx - c, i = this.jAccy - l, a = this.jAccz - u; var d = this.b1.imass; this.b1.velx -= r * d, this.b1.vely -= i * d; var f = this.b2.imass; return this.b2.velx += r * f, this.b2.vely += i * f, this.b1.angvel -= (i * this.a1relx - r * this.a1rely + a) * this.b1.iinertia, this.b2.angvel += (i * this.a2relx - r * this.a2rely + a) * this.b2.iinertia, !1; };
        e.prototype.applyImpulsePos = function () { var e = this.b1.axisy * this.a1localx - this.b1.axisx * this.a1localy, t = this.a1localx * this.b1.axisx + this.a1localy * this.b1.axisy, n = this.b2.axisy * this.a2localx - this.b2.axisx * this.a2localy, r = this.a2localx * this.b2.axisx + this.a2localy * this.b2.axisy, i = this.b2.posx + n - (this.b1.posx + e), a = this.b2.posy + r - (this.b1.posy + t), o = this.b2.rot - this.b1.rot - this.phase, s, c, l; if (this.breakUnderError && i * i + a * a + o * o > this.maxError * this.maxError)
            return !0; var u = !0; i * i + a * a < R.constraintLinearSlop * R.constraintLinearSlop && (u = !1, i = 0, a = 0); var d = R.constraintAngularSlop; if (o * o < d * d) {
            if (u)
                o = 0;
            else
                return !1;
        } if (i *= .5, a *= .5, o *= .5, i * i + a * a > 6) {
            var l_88 = this.b1.smass + this.b2.smass;
            if (l_88 > R.epsilon) {
                var u_73 = .75 / l_88;
                s = -i * u_73, c = -a * u_73;
                var d_52 = s * s + c * c;
                if (d_52 > 400) {
                    var e_529 = 1 / Math.sqrt(d_52) * 20;
                    s *= e_529, c *= e_529;
                }
                var f_49 = this.b1.imass;
                this.b1.posx -= s * f_49, this.b1.posy -= c * f_49;
                var p_34 = this.b2.imass;
                this.b2.posx += s * p_34, this.b2.posy += c * p_34, i = this.b2.posx + n - (this.b1.posx + e), a = this.b2.posy + r - (this.b1.posy + t), o = this.b2.rot - this.b1.rot - this.phase, i *= .5, a *= .5, o *= .5;
            }
        } var f = this.b1.smass + this.b2.smass, p = f, m = 0, h = f, g = 0, _ = 0, v = 0; if (this.b1.sinertia != 0) {
            var n_372 = e * this.b1.sinertia, r_323 = t * this.b1.sinertia;
            p += r_323 * t, m += -r_323 * e, h += n_372 * e, g += -r_323, _ += n_372, v += this.b1.sinertia;
        } if (this.b2.sinertia != 0) {
            var e_530 = n * this.b2.sinertia, t_444 = r * this.b2.sinertia;
            p += t_444 * r, m += -t_444 * n, h += e_530 * n, g += -t_444, _ += e_530, v += this.b2.sinertia;
        } s = -i, c = -a, l = -o; var y = s * s + c * c; if (y > 36) {
            var e_531 = 1 / Math.sqrt(y) * 6;
            s *= e_531, c *= e_531;
        } var b = p * (h * v - _ * _) + m * (g * _ - m * v) + g * (m * _ - g * h); if (f == 0)
            s = 0, c = 0, l = v == 0 ? 0 : l / v;
        else if (b != b)
            l = 0, c = l, s = c;
        else if (b == 0)
            p == 0 ? s = 0 : s /= p, h == 0 ? c = 0 : c /= h, v == 0 ? l = 0 : l /= v;
        else {
            var e_532 = 1 / b, t_445 = _ * g - m * v, n_373 = m * _ - g * h, r_324 = m * g - p * _, i_228 = e_532 * (s * (h * v - _ * _) + c * t_445 + l * n_373), a_177 = e_532 * (s * t_445 + c * (p * v - g * g) + l * r_324);
            l = e_532 * (s * n_373 + c * r_324 + l * (p * h - m * m)), s = i_228, c = a_177;
        } var x = this.b1.imass; this.b1.posx -= s * x, this.b1.posy -= c * x; var S = this.b2.imass; this.b2.posx += s * S, this.b2.posy += c * S; var C = this.b1, w = -(c * e - s * t + l) * this.b1.iinertia; $._rotateBody(C, w); var T = this.b2, ee = (c * n - s * r + l) * this.b2.iinertia; return $._rotateBody(T, ee), !1; };
        return e;
    }(Q)), Ta._wrapFn = null, Ta._createFn = null, Ea = Ta, Da = (function (_super) {
        __extends(e, _super);
        function e(e, t, n, r, i) {
            if (i === void 0) { i = 0; }
            var _this = _super.call(this) || this;
            var a = new Ea;
            if (_this.zpp_inner = a, a.outer = _this, a.outer_zn = _this, _this._tagAnyConstraint(), _this._setBody1(e), _this._setBody2(t), n != null && n.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!");
            if (n == null)
                throw Error("Constraint::anchor1 cannot be null");
            if (a.a1localx = Ce(n), a.a1localy = we(n), y(n), r != null && r.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!");
            if (r == null)
                throw Error("Constraint::anchor2 cannot be null");
            if (a.a2localx = Ce(r), a.a2localy = we(r), y(r), _this.zpp_inner.immutable_midstep("WeldJoint::phase"), i !== i)
                throw Error("WeldJoint::phase cannot be NaN");
            a.phase != i && (a.phase = i, a.wake());
            return _this;
        }
        e._wrap = function (t) { var n; return t == null ? null : t instanceof e ? t : ((n = t.zpp_inner) == null ? void 0 : n.outer) instanceof e ? t.zpp_inner.outer : t instanceof Ea ? v(t, function (t) { var n = Object.create(e.prototype); return n.zpp_inner = t, t.outer = n, t.outer_zn = n, n.debugDraw = !0, n; }) : v(t, function (t) { var n; var r = Object.create(e.prototype); return r.zpp_inner = (n = t.zpp_inner) == null ? t : n, r.zpp_inner.outer = r, r.zpp_inner.outer_zn = r, r; }); };
        Object.defineProperty(e.prototype, "body1", {
            get: function () { return this.zpp_inner.b1 == null ? null : Hr._wrap(this.zpp_inner.b1); },
            set: function (e) { this._setBody1(e); },
            enumerable: false,
            configurable: true
        });
        e.prototype._setBody1 = function (e) { this.zpp_inner.immutable_midstep("Constraint::body1"); var t = e == null ? null : e.zpp_inner; t != this.zpp_inner.b1 && (this.zpp_inner.b1 != null && (this.zpp_inner.space != null && this.zpp_inner.b2 != this.zpp_inner.b1 && this.zpp_inner.b1.constraints.remove(this.zpp_inner), this.zpp_inner.active && this.zpp_inner.space != null && this.zpp_inner.b1.wake()), this.zpp_inner.b1 = t, this.zpp_inner.space != null && t != null && this.zpp_inner.b2 != t && t.constraints.add(this.zpp_inner), this.zpp_inner.active && this.zpp_inner.space != null && (this.zpp_inner.wake(), t == null || t.wake())); };
        Object.defineProperty(e.prototype, "body2", {
            get: function () { return this.zpp_inner.b2 == null ? null : Hr._wrap(this.zpp_inner.b2); },
            set: function (e) { this._setBody2(e); },
            enumerable: false,
            configurable: true
        });
        e.prototype._setBody2 = function (e) { this.zpp_inner.immutable_midstep("Constraint::body2"); var t = e == null ? null : e.zpp_inner; t != this.zpp_inner.b2 && (this.zpp_inner.b2 != null && (this.zpp_inner.space != null && this.zpp_inner.b1 != this.zpp_inner.b2 && this.zpp_inner.b2.constraints.remove(this.zpp_inner), this.zpp_inner.active && this.zpp_inner.space != null && this.zpp_inner.b2.wake()), this.zpp_inner.b2 = t, this.zpp_inner.space != null && t != null && this.zpp_inner.b1 != t && t.constraints.add(this.zpp_inner), this.zpp_inner.active && this.zpp_inner.space != null && (this.zpp_inner.wake(), t == null || t.wake())); };
        Object.defineProperty(e.prototype, "anchor1", {
            get: function () { return this.zpp_inner.wrap_a1 == null && this.zpp_inner.setup_a1(), this.zpp_inner.wrap_a1; },
            set: function (e) { if (e != null && e.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!"); if (e == null)
                throw Error("Constraint::anchor1 cannot be null"); this.zpp_inner.wrap_a1 == null && this.zpp_inner.setup_a1(), this.zpp_inner.wrap_a1.set(e), y(e); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "anchor2", {
            get: function () { return this.zpp_inner.wrap_a2 == null && this.zpp_inner.setup_a2(), this.zpp_inner.wrap_a2; },
            set: function (e) { if (e != null && e.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!"); if (e == null)
                throw Error("Constraint::anchor2 cannot be null"); this.zpp_inner.wrap_a2 == null && this.zpp_inner.setup_a2(), this.zpp_inner.wrap_a2.set(e), y(e); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "phase", {
            get: function () { return this.zpp_inner.phase; },
            set: function (e) { if (this.zpp_inner.immutable_midstep("WeldJoint::phase"), e !== e)
                throw Error("WeldJoint::phase cannot be NaN"); this.zpp_inner.phase != e && (this.zpp_inner.phase = e, this.zpp_inner.wake()); },
            enumerable: false,
            configurable: true
        });
        e.prototype.impulse = function () { var e = new (d()).geom.MatMN(3, 1); return e.zpp_inner.x[0] = this.zpp_inner.jAccx, e.zpp_inner.x[1] = this.zpp_inner.jAccy, e.zpp_inner.x[2] = this.zpp_inner.jAccz, e; };
        e.prototype.bodyImpulse = function (e) { var t = d(); if (e == null)
            throw Error(ra); var n = this.zpp_inner.b1 == null ? null : this.zpp_inner.b1.outer, r = this.zpp_inner.b2 == null ? null : this.zpp_inner.b2.outer; if (e != n && e != r)
            throw Error("Body is not linked to this constraint"); return this.zpp_inner.active ? this.zpp_inner.bodyImpulse(e.zpp_inner) : t.geom.Vec3.get(); };
        e.prototype.visitBodies = function (e) { if (e == null)
            throw Error("Cannot apply null lambda to bodies"); var t = this.zpp_inner.b1 == null ? null : this.zpp_inner.b1.outer; t != null && e(t); var n = this.zpp_inner.b2 == null ? null : this.zpp_inner.b2.outer; n != null && n != t && e(n); };
        return e;
    }(aa)), Ea._wrapFn = function (e) { return v(e, function (e) { var t = Object.create(Da.prototype); return t.zpp_inner = e, e.outer = t, e.outer_zn = t, t.debugDraw = !0, t; }); }, Oa = (function (_super) {
        __extends(e, _super);
        function e() {
            var _this = this;
            _this = _super.call(this) || this, _this.outer_zn = null, _this.restLength = 0, _this.nx = 0, _this.ny = 0, _this.cx1 = 0, _this.cx2 = 0, _this.b1 = null, _this.b2 = null, _this.a1localx = 0, _this.a1localy = 0, _this.a1relx = 0, _this.a1rely = 0, _this.a2localx = 0, _this.a2localy = 0, _this.a2relx = 0, _this.a2rely = 0, _this.wrap_a1 = null, _this.wrap_a2 = null, _this.kMass = 0, _this.jAcc = 0, _this.jMax = 1 / 0, _this.gamma = 0, _this.bias = 0, _this.stepped = !1, _this.a1localx = 0, _this.a1localy = 0, _this.a1relx = 0, _this.a1rely = 0, _this.a2localx = 0, _this.a2localy = 0, _this.a2relx = 0, _this.a2rely = 0, _this.jAcc = 0, _this.jMax = 1 / 0, _this.stepped = !1, _this.cx1 = _this.cx2 = 0, _this.stiff = !1, _this.frequency = 8, _this.damping = 1;
            return _this;
        }
        e.prototype.bodyImpulse = function (e) { var t = Q._nape; return this.stepped ? e == this.b1 ? t.geom.Vec3.get(-this.jAcc * this.nx, -this.jAcc * this.ny, -this.cx1 * this.jAcc) : t.geom.Vec3.get(this.jAcc * this.nx, this.jAcc * this.ny, this.cx2 * this.jAcc) : t.geom.Vec3.get(0, 0, 0); };
        e.prototype.activeBodies = function () { this.b1 != null && this.b1.constraints.add(this), this.b2 != this.b1 && this.b2 != null && this.b2.constraints.add(this); };
        e.prototype.inactiveBodies = function () { this.b1 != null && this.b1.constraints.remove(this), this.b2 != this.b1 && this.b2 != null && this.b2.constraints.remove(this); };
        e.prototype.validate_a1 = function () { this.wrap_a1.zpp_inner.x = this.a1localx, this.wrap_a1.zpp_inner.y = this.a1localy; };
        e.prototype.invalidate_a1 = function (e) { this.immutable_midstep("Constraint::a1"), this.a1localx = e.x, this.a1localy = e.y, this.wake(); };
        e.prototype.setup_a1 = function () { this.wrap_a1 = e._setupAnchorVec2(this.a1localx, this.a1localy, this.validate_a1.bind(this), this.invalidate_a1.bind(this)); };
        e.prototype.validate_a2 = function () { this.wrap_a2.zpp_inner.x = this.a2localx, this.wrap_a2.zpp_inner.y = this.a2localy; };
        e.prototype.invalidate_a2 = function (e) { this.immutable_midstep("Constraint::a2"), this.a2localx = e.x, this.a2localy = e.y, this.wake(); };
        e.prototype.setup_a2 = function () { this.wrap_a2 = e._setupAnchorVec2(this.a2localx, this.a2localy, this.validate_a2.bind(this), this.invalidate_a2.bind(this)); };
        e.prototype.copy = function (t, n) { this.wrap_a1 == null && this.setup_a1(); var r = this.wrap_a1; this.wrap_a2 == null && this.setup_a2(); var i = e._createFn(null, null, r, this.wrap_a2, this.restLength); return this.copyto(i), $._copyBody(t, n, this.b1, i, "b1"), $._copyBody(t, n, this.b2, i, "b2"), i; };
        e.prototype.validate = function () { if (this.b1 == null || this.b2 == null)
            throw Error("SpringJoint cannot be simulated null bodies"); if (this.b1 == this.b2)
            throw Error("SpringJoint cannot be simulated with body1 == body2"); if (this.b1.space != this.space || this.b2.space != this.space)
            throw Error("Error: Constraints must have each body within the same space to which the constraint has been assigned"); if (this.b1.type != 2 && this.b2.type != 2)
            throw Error("Constraints cannot have both bodies non-dynamic"); };
        e.prototype.wake_connected = function () { this.b1 != null && this.b1.type == 2 && this.b1.wake(), this.b2 != null && this.b2.type == 2 && this.b2.wake(); };
        e.prototype.forest = function () { this.b1.type == 2 && Q._unionComponents(this.b1.component, this.component), this.b2.type == 2 && Q._unionComponents(this.b2.component, this.component); };
        e.prototype.pair_exists = function (e, t) { return this.b1.id == e && this.b2.id == t || this.b1.id == t && this.b2.id == e; };
        e.prototype.clearcache = function () { this.jAcc = 0, this.pre_dt = -1; };
        e.prototype.preStep = function (e) { this.pre_dt == -1 && (this.pre_dt = e); var t = e / this.pre_dt; this.pre_dt = e, this.stepped = !0, this.a1relx = this.b1.axisy * this.a1localx - this.b1.axisx * this.a1localy, this.a1rely = this.a1localx * this.b1.axisx + this.a1localy * this.b1.axisy, this.a2relx = this.b2.axisy * this.a2localx - this.b2.axisx * this.a2localy, this.a2rely = this.a2localx * this.b2.axisx + this.a2localy * this.b2.axisy, this.nx = this.b2.posx + this.a2relx - (this.b1.posx + this.a1relx), this.ny = this.b2.posy + this.a2rely - (this.b1.posy + this.a1rely); var n = this.nx * this.nx + this.ny * this.ny; if (n < R.epsilon)
            this.nx = 1, this.ny = 0, n = 0;
        else {
            n = Math.sqrt(n);
            var e_533 = 1 / n;
            this.nx *= e_533, this.ny *= e_533;
        } var r = n - this.restLength; if (this.cx1 = this.ny * this.a1relx - this.nx * this.a1rely, this.cx2 = this.ny * this.a2relx - this.nx * this.a2rely, this.kMass = this.b1.smass + this.b2.smass + this.cx1 * this.cx1 * this.b1.sinertia + this.cx2 * this.cx2 * this.b2.sinertia, this.kMass == 0 ? this.jAcc = 0 : this.kMass = 1 / this.kMass, this.breakUnderError && r * r > this.maxError * this.maxError)
            return !0; var i = 2 * Math.PI * this.frequency; this.gamma = 1 / (e * i * (2 * this.damping + i * e)); var a = 1 / (1 + this.gamma), o = e * i * i * this.gamma; return this.gamma *= a, this.kMass *= a, this.bias = -r * o, this.bias < -this.maxError ? this.bias = -this.maxError : this.bias > this.maxError && (this.bias = this.maxError), this.jAcc *= t, this.jMax = this.maxForce * e, !1; };
        e.prototype.warmStart = function () { var e = this.b1.imass * this.jAcc; this.b1.velx -= this.nx * e, this.b1.vely -= this.ny * e; var t = this.b2.imass * this.jAcc; this.b2.velx += this.nx * t, this.b2.vely += this.ny * t, this.b1.angvel -= this.cx1 * this.b1.iinertia * this.jAcc, this.b2.angvel += this.cx2 * this.b2.iinertia * this.jAcc; };
        e.prototype.applyImpulseVel = function () { var e = this.nx * (this.b2.velx + this.b2.kinvelx - this.b1.velx - this.b1.kinvelx) + this.ny * (this.b2.vely + this.b2.kinvely - this.b1.vely - this.b1.kinvely) + (this.b2.angvel + this.b2.kinangvel) * this.cx2 - (this.b1.angvel + this.b1.kinangvel) * this.cx1, t = this.kMass * (this.bias - e) - this.jAcc * this.gamma, n = this.jAcc; if (this.jAcc += t, this.breakUnderForce && Math.abs(this.jAcc) > this.jMax)
            return !0; this.jAcc < -this.jMax ? this.jAcc = -this.jMax : this.jAcc > this.jMax && (this.jAcc = this.jMax), t = this.jAcc - n; var r = this.b1.imass * t; this.b1.velx -= this.nx * r, this.b1.vely -= this.ny * r; var i = this.b2.imass * t; return this.b2.velx += this.nx * i, this.b2.vely += this.ny * i, this.b1.angvel -= this.cx1 * this.b1.iinertia * t, this.b2.angvel += this.cx2 * this.b2.iinertia * t, !1; };
        e.prototype.applyImpulsePos = function () { return !1; };
        e._setupAnchorVec2 = function (e, t, n, r) { var i = Q._nape.geom.Vec2.get(e, t); return i.zpp_inner._inuse = !0, i.zpp_inner._validate = n, i.zpp_inner._invalidate = r, i; };
        return e;
    }(Q)), Oa._wrapFn = null, Oa._createFn = null, ka = Oa, Aa = (function (_super) {
        __extends(e, _super);
        function e(e, t, n, r, i) {
            var _this = _super.call(this) || this;
            var a = new ka;
            if (_this.zpp_inner = a, a.outer = _this, a.outer_zn = _this, _this._tagAnyConstraint(), _this._setBody1(e), _this._setBody2(t), n != null && n.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!");
            if (n == null)
                throw Error("Constraint::anchor1 cannot be null");
            var o = Te(n), s = Ee(n);
            if (a.a1localx = o, a.a1localy = s, y(n), r != null && r.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!");
            if (r == null)
                throw Error("Constraint::anchor2 cannot be null");
            var c = Te(r), l = Ee(r);
            if (a.a2localx = c, a.a2localy = l, y(r), _this.zpp_inner.immutable_midstep("SpringJoint::restLength"), i !== i)
                throw Error("SpringJoint::restLength cannot be NaN");
            if (i < 0)
                throw Error("SpringJoint::restLength must be >= 0");
            a.restLength = i;
            return _this;
        }
        e._wrap = function (t) { var n; return t == null ? null : t instanceof e ? t : ((n = t.zpp_inner) == null ? void 0 : n.outer) instanceof e ? t.zpp_inner.outer : t instanceof ka ? v(t, function (t) { var n = Object.create(e.prototype); return n.zpp_inner = t, t.outer = n, t.outer_zn = n, n.debugDraw = !0, n; }) : v(t, function (t) { var n; var r = Object.create(e.prototype); return r.zpp_inner = (n = t.zpp_inner) == null ? t : n, r.zpp_inner.outer = r, r.zpp_inner.outer_zn = r, r; }); };
        Object.defineProperty(e.prototype, "body1", {
            get: function () { return this.zpp_inner.b1 == null ? null : Hr._wrap(this.zpp_inner.b1); },
            set: function (e) { this._setBody1(e); },
            enumerable: false,
            configurable: true
        });
        e.prototype._setBody1 = function (e) { this.zpp_inner.immutable_midstep("Constraint::body1"); var t = e == null ? null : e.zpp_inner; t != this.zpp_inner.b1 && (this.zpp_inner.b1 != null && (this.zpp_inner.space != null && this.zpp_inner.b2 != this.zpp_inner.b1 && this.zpp_inner.b1.constraints.remove(this.zpp_inner), this.zpp_inner.active && this.zpp_inner.space != null && this.zpp_inner.b1.wake()), this.zpp_inner.b1 = t, this.zpp_inner.space != null && t != null && this.zpp_inner.b2 != t && t.constraints.add(this.zpp_inner), this.zpp_inner.active && this.zpp_inner.space != null && (this.zpp_inner.wake(), t == null || t.wake())); };
        Object.defineProperty(e.prototype, "body2", {
            get: function () { return this.zpp_inner.b2 == null ? null : Hr._wrap(this.zpp_inner.b2); },
            set: function (e) { this._setBody2(e); },
            enumerable: false,
            configurable: true
        });
        e.prototype._setBody2 = function (e) { this.zpp_inner.immutable_midstep("Constraint::body2"); var t = e == null ? null : e.zpp_inner; t != this.zpp_inner.b2 && (this.zpp_inner.b2 != null && (this.zpp_inner.space != null && this.zpp_inner.b1 != this.zpp_inner.b2 && this.zpp_inner.b2.constraints.remove(this.zpp_inner), this.zpp_inner.active && this.zpp_inner.space != null && this.zpp_inner.b2.wake()), this.zpp_inner.b2 = t, this.zpp_inner.space != null && t != null && this.zpp_inner.b1 != t && t.constraints.add(this.zpp_inner), this.zpp_inner.active && this.zpp_inner.space != null && (this.zpp_inner.wake(), t == null || t.wake())); };
        Object.defineProperty(e.prototype, "anchor1", {
            get: function () { return this.zpp_inner.wrap_a1 == null && this.zpp_inner.setup_a1(), this.zpp_inner.wrap_a1; },
            set: function (e) { if (e != null && e.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!"); if (e == null)
                throw Error("Constraint::anchor1 cannot be null"); this.zpp_inner.wrap_a1 == null && this.zpp_inner.setup_a1(), this.zpp_inner.wrap_a1.set(e), y(e); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "anchor2", {
            get: function () { return this.zpp_inner.wrap_a2 == null && this.zpp_inner.setup_a2(), this.zpp_inner.wrap_a2; },
            set: function (e) { if (e != null && e.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!"); if (e == null)
                throw Error("Constraint::anchor2 cannot be null"); this.zpp_inner.wrap_a2 == null && this.zpp_inner.setup_a2(), this.zpp_inner.wrap_a2.set(e), y(e); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "restLength", {
            get: function () { return this.zpp_inner.restLength; },
            set: function (e) { if (this.zpp_inner.immutable_midstep("SpringJoint::restLength"), e !== e)
                throw Error("SpringJoint::restLength cannot be NaN"); if (e < 0)
                throw Error("SpringJoint::restLength must be >= 0"); this.zpp_inner.restLength != e && (this.zpp_inner.restLength = e, this.zpp_inner.wake()); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(e.prototype, "stiff", {
            get: function () { return !1; },
            set: function (e) { },
            enumerable: false,
            configurable: true
        });
        e.prototype.impulse = function () { var e = new (d()).geom.MatMN(1, 1); if (0 >= e.zpp_inner.m || 0 >= e.zpp_inner.n)
            throw Error("MatMN indices out of range"); return e.zpp_inner.x[0 * e.zpp_inner.n] = this.zpp_inner.jAcc, e; };
        e.prototype.bodyImpulse = function (e) { var t = d(); if (e == null)
            throw Error(ra); var n = this.zpp_inner.b1 == null ? null : this.zpp_inner.b1.outer, r = this.zpp_inner.b2 == null ? null : this.zpp_inner.b2.outer; if (e != n && e != r)
            throw Error("Body is not linked to this constraint"); return this.zpp_inner.active ? this.zpp_inner.bodyImpulse(e.zpp_inner) : t.geom.Vec3.get(0, 0, 0); };
        e.prototype.visitBodies = function (e) { if (e == null)
            throw Error("Cannot apply null lambda to bodies"); var t = this.zpp_inner.b1 == null ? null : this.zpp_inner.b1.outer; t != null && e(t); var n = this.zpp_inner.b2 == null ? null : this.zpp_inner.b2.outer; n != null && n != t && e(n); };
        return e;
    }(aa)), ka._wrapFn = function (e) { return v(e, function (e) { var t = Object.create(Aa.prototype); return t.zpp_inner = e, e.outer = t, e.outer_zn = t, t.debugDraw = !0, t; }); };
})))(); }
Object.defineProperty(exports, "$", { enumerable: !0, get: function () { return Le; } }), Object.defineProperty(exports, "$n", { enumerable: !0, get: function () { return Zr; } }), Object.defineProperty(exports, "$t", { enumerable: !0, get: function () { return da; } }), Object.defineProperty(exports, "A", { enumerable: !0, get: function () { return lt; } }), Object.defineProperty(exports, "An", { enumerable: !0, get: function () { return _n; } }), Object.defineProperty(exports, "At", { enumerable: !0, get: function () { return pn; } }), Object.defineProperty(exports, "B", { enumerable: !0, get: function () { return Mn; } }), Object.defineProperty(exports, "Bn", { enumerable: !0, get: function () { return Wr; } }), Object.defineProperty(exports, "Bt", { enumerable: !0, get: function () { return sn; } }), Object.defineProperty(exports, "C", { enumerable: !0, get: function () { return Gt; } }), Object.defineProperty(exports, "Cn", { enumerable: !0, get: function () { return ja; } }), Object.defineProperty(exports, "Ct", { enumerable: !0, get: function () { return Xe; } }), Object.defineProperty(exports, "D", { enumerable: !0, get: function () { return pe; } }), Object.defineProperty(exports, "Dn", { enumerable: !0, get: function () { return q; } }), Object.defineProperty(exports, "Dt", { enumerable: !0, get: function () { return Fe; } }), Object.defineProperty(exports, "E", { enumerable: !0, get: function () { return d; } }), Object.defineProperty(exports, "En", { enumerable: !0, get: function () { return Ke; } }), Object.defineProperty(exports, "Et", { enumerable: !0, get: function () { return Nn; } }), Object.defineProperty(exports, "F", { enumerable: !0, get: function () { return cr; } }), Object.defineProperty(exports, "Fn", { enumerable: !0, get: function () { return Un; } }), Object.defineProperty(exports, "Ft", { enumerable: !0, get: function () { return zr; } }), Object.defineProperty(exports, "G", { enumerable: !0, get: function () { return ct; } }), Object.defineProperty(exports, "Gn", { enumerable: !0, get: function () { return _a; } }), Object.defineProperty(exports, "Gt", { enumerable: !0, get: function () { return O; } }), Object.defineProperty(exports, "H", { enumerable: !0, get: function () { return ur; } }), Object.defineProperty(exports, "Hn", { enumerable: !0, get: function () { return ma; } }), Object.defineProperty(exports, "Ht", { enumerable: !0, get: function () { return ti; } }), Object.defineProperty(exports, "I", { enumerable: !0, get: function () { return Hn; } }), Object.defineProperty(exports, "In", { enumerable: !0, get: function () { return xr; } }), Object.defineProperty(exports, "It", { enumerable: !0, get: function () { return On; } }), Object.defineProperty(exports, "J", { enumerable: !0, get: function () { return Sn; } }), Object.defineProperty(exports, "Jn", { enumerable: !0, get: function () { return p; } }), Object.defineProperty(exports, "Jt", { enumerable: !0, get: function () { return ze; } }), Object.defineProperty(exports, "K", { enumerable: !0, get: function () { return Pr; } }), Object.defineProperty(exports, "Kn", { enumerable: !0, get: function () { return Jr; } }), Object.defineProperty(exports, "Kt", { enumerable: !0, get: function () { return In; } }), Object.defineProperty(exports, "L", { enumerable: !0, get: function () { return fn; } }), Object.defineProperty(exports, "Ln", { enumerable: !0, get: function () { return ke; } }), Object.defineProperty(exports, "Lt", { enumerable: !0, get: function () { return Qt; } }), Object.defineProperty(exports, "M", { enumerable: !0, get: function () { return mr; } }), Object.defineProperty(exports, "Mn", { enumerable: !0, get: function () { return Rn; } }), Object.defineProperty(exports, "Mt", { enumerable: !0, get: function () { return Ji; } }), Object.defineProperty(exports, "N", { enumerable: !0, get: function () { return Je; } }), Object.defineProperty(exports, "Nn", { enumerable: !0, get: function () { return tt; } }), Object.defineProperty(exports, "Nt", { enumerable: !0, get: function () { return We; } }), Object.defineProperty(exports, "O", { enumerable: !0, get: function () { return hr; } }), Object.defineProperty(exports, "On", { enumerable: !0, get: function () { return bi; } }), Object.defineProperty(exports, "Ot", { enumerable: !0, get: function () { return ot; } }), Object.defineProperty(exports, "P", { enumerable: !0, get: function () { return va; } }), Object.defineProperty(exports, "Pn", { enumerable: !0, get: function () { return Qr; } }), Object.defineProperty(exports, "Pt", { enumerable: !0, get: function () { return fa; } }), Object.defineProperty(exports, "Q", { enumerable: !0, get: function () { return ut; } }), Object.defineProperty(exports, "Qn", { enumerable: !0, get: function () { return Ni; } }), Object.defineProperty(exports, "Qt", { enumerable: !0, get: function () { return k; } }), Object.defineProperty(exports, "R", { enumerable: !0, get: function () { return Ir; } }), Object.defineProperty(exports, "Rn", { enumerable: !0, get: function () { return un; } }), Object.defineProperty(exports, "Rt", { enumerable: !0, get: function () { return at; } }), Object.defineProperty(exports, "S", { enumerable: !0, get: function () { return Aa; } }), Object.defineProperty(exports, "Sn", { enumerable: !0, get: function () { return Di; } }), Object.defineProperty(exports, "Sr", { enumerable: !0, get: function () { return s; } }), Object.defineProperty(exports, "St", { enumerable: !0, get: function () { return Ar; } }), Object.defineProperty(exports, "T", { enumerable: !0, get: function () { return yt; } }), Object.defineProperty(exports, "Tn", { enumerable: !0, get: function () { return W; } }), Object.defineProperty(exports, "Tt", { enumerable: !0, get: function () { return Xr; } }), Object.defineProperty(exports, "U", { enumerable: !0, get: function () { return on; } }), Object.defineProperty(exports, "Un", { enumerable: !0, get: function () { return Bn; } }), Object.defineProperty(exports, "Ut", { enumerable: !0, get: function () { return ar; } }), Object.defineProperty(exports, "V", { enumerable: !0, get: function () { return Xi; } }), Object.defineProperty(exports, "Vn", { enumerable: !0, get: function () { return vn; } }), Object.defineProperty(exports, "Vt", { enumerable: !0, get: function () { return Gn; } }), Object.defineProperty(exports, "W", { enumerable: !0, get: function () { return nn; } }), Object.defineProperty(exports, "Wn", { enumerable: !0, get: function () { return Z; } }), Object.defineProperty(exports, "Wt", { enumerable: !0, get: function () { return st; } }), Object.defineProperty(exports, "X", { enumerable: !0, get: function () { return ri; } }), Object.defineProperty(exports, "Xn", { enumerable: !0, get: function () { return Ui; } }), Object.defineProperty(exports, "Xt", { enumerable: !0, get: function () { return ka; } }), Object.defineProperty(exports, "Y", { enumerable: !0, get: function () { return Ge; } }), Object.defineProperty(exports, "Yn", { enumerable: !0, get: function () { return rt; } }), Object.defineProperty(exports, "Yt", { enumerable: !0, get: function () { return wi; } }), Object.defineProperty(exports, "Z", { enumerable: !0, get: function () { return yi; } }), Object.defineProperty(exports, "Zn", { enumerable: !0, get: function () { return En; } }), Object.defineProperty(exports, "Zt", { enumerable: !0, get: function () { return sa; } }), Object.defineProperty(exports, "_", { enumerable: !0, get: function () { return hn; } }), Object.defineProperty(exports, "_n", { enumerable: !0, get: function () { return tr; } }), Object.defineProperty(exports, "_r", { enumerable: !0, get: function () { return qn; } }), Object.defineProperty(exports, "_t", { enumerable: !0, get: function () { return X; } }), Object.defineProperty(exports, "a", { enumerable: !0, get: function () { return He; } }), Object.defineProperty(exports, "an", { enumerable: !0, get: function () { return V; } }), Object.defineProperty(exports, "ar", { enumerable: !0, get: function () { return Xt; } }), Object.defineProperty(exports, "at", { enumerable: !0, get: function () { return qe; } }), Object.defineProperty(exports, "b", { enumerable: !0, get: function () { return Vi; } }), Object.defineProperty(exports, "bn", { enumerable: !0, get: function () { return Q; } }), Object.defineProperty(exports, "br", { enumerable: !0, get: function () { return u; } }), Object.defineProperty(exports, "bt", { enumerable: !0, get: function () { return la; } }), Object.defineProperty(exports, "c", { enumerable: !0, get: function () { return Ye; } }), Object.defineProperty(exports, "cn", { enumerable: !0, get: function () { return na; } }), Object.defineProperty(exports, "cr", { enumerable: !0, get: function () { return Ea; } }), Object.defineProperty(exports, "ct", { enumerable: !0, get: function () { return $; } }), Object.defineProperty(exports, "d", { enumerable: !0, get: function () { return Qi; } }), Object.defineProperty(exports, "dn", { enumerable: !0, get: function () { return ln; } }), Object.defineProperty(exports, "dr", { enumerable: !0, get: function () { return je; } }), Object.defineProperty(exports, "dt", { enumerable: !0, get: function () { return Zt; } }), Object.defineProperty(exports, "en", { enumerable: !0, get: function () { return nt; } }), Object.defineProperty(exports, "er", { enumerable: !0, get: function () { return Ci; } }), Object.defineProperty(exports, "et", { enumerable: !0, get: function () { return J; } }), Object.defineProperty(exports, "f", { enumerable: !0, get: function () { return Ie; } }), Object.defineProperty(exports, "fn", { enumerable: !0, get: function () { return v; } }), Object.defineProperty(exports, "fr", { enumerable: !0, get: function () { return ei; } }), Object.defineProperty(exports, "ft", { enumerable: !0, get: function () { return Kr; } }), Object.defineProperty(exports, "g", { enumerable: !0, get: function () { return Yr; } }), Object.defineProperty(exports, "gn", { enumerable: !0, get: function () { return Dn; } }), Object.defineProperty(exports, "gr", { enumerable: !0, get: function () { return ra; } }), Object.defineProperty(exports, "gt", { enumerable: !0, get: function () { return $e; } }), Object.defineProperty(exports, "h", { enumerable: !0, get: function () { return Da; } }), Object.defineProperty(exports, "hn", { enumerable: !0, get: function () { return Jt; } }), Object.defineProperty(exports, "hr", { enumerable: !0, get: function () { return rr; } }), Object.defineProperty(exports, "ht", { enumerable: !0, get: function () { return Kt; } }), Object.defineProperty(exports, "i", { enumerable: !0, get: function () { return Hr; } }), Object.defineProperty(exports, "in", { enumerable: !0, get: function () { return yn; } }), Object.defineProperty(exports, "ir", { enumerable: !0, get: function () { return xi; } }), Object.defineProperty(exports, "it", { enumerable: !0, get: function () { return $i; } }), Object.defineProperty(exports, "j", { enumerable: !0, get: function () { return Tr; } }), Object.defineProperty(exports, "jn", { enumerable: !0, get: function () { return Ki; } }), Object.defineProperty(exports, "jt", { enumerable: !0, get: function () { return K; } }), Object.defineProperty(exports, "k", { enumerable: !0, get: function () { return Tn; } }), Object.defineProperty(exports, "kn", { enumerable: !0, get: function () { return Re; } }), Object.defineProperty(exports, "kt", { enumerable: !0, get: function () { return gr; } }), Object.defineProperty(exports, "l", { enumerable: !0, get: function () { return xa; } }), Object.defineProperty(exports, "ln", { enumerable: !0, get: function () { return H; } }), Object.defineProperty(exports, "lr", { enumerable: !0, get: function () { return $n; } }), Object.defineProperty(exports, "lt", { enumerable: !0, get: function () { return zi; } }), Object.defineProperty(exports, "m", { enumerable: !0, get: function () { return Ze; } }), Object.defineProperty(exports, "mn", { enumerable: !0, get: function () { return Bt; } }), Object.defineProperty(exports, "mr", { enumerable: !0, get: function () { return x; } }), Object.defineProperty(exports, "mt", { enumerable: !0, get: function () { return g; } }), Object.defineProperty(exports, "n", { enumerable: !0, get: function () { return Pt; } }), Object.defineProperty(exports, "nn", { enumerable: !0, get: function () { return cn; } }), Object.defineProperty(exports, "nr", { enumerable: !0, get: function () { return Mi; } }), Object.defineProperty(exports, "nt", { enumerable: !0, get: function () { return jn; } }), Object.defineProperty(exports, "o", { enumerable: !0, get: function () { return ta; } }), Object.defineProperty(exports, "on", { enumerable: !0, get: function () { return ba; } }), Object.defineProperty(exports, "or", { enumerable: !0, get: function () { return ii; } }), Object.defineProperty(exports, "ot", { enumerable: !0, get: function () { return ha; } }), Object.defineProperty(exports, "p", { enumerable: !0, get: function () { return Or; } }), Object.defineProperty(exports, "pn", { enumerable: !0, get: function () { return Cr; } }), Object.defineProperty(exports, "pr", { enumerable: !0, get: function () { return Me; } }), Object.defineProperty(exports, "pt", { enumerable: !0, get: function () { return Yn; } }), Object.defineProperty(exports, "q", { enumerable: !0, get: function () { return R; } }), Object.defineProperty(exports, "qn", { enumerable: !0, get: function () { return fr; } }), Object.defineProperty(exports, "qt", { enumerable: !0, get: function () { return Ai; } }), Object.defineProperty(exports, "r", { enumerable: !0, get: function () { return qt; } }), Object.defineProperty(exports, "rn", { enumerable: !0, get: function () { return Br; } }), Object.defineProperty(exports, "rr", { enumerable: !0, get: function () { return Fi; } }), Object.defineProperty(exports, "rt", { enumerable: !0, get: function () { return Ve; } }), Object.defineProperty(exports, "s", { enumerable: !0, get: function () { return G; } }), Object.defineProperty(exports, "sn", { enumerable: !0, get: function () { return Ei; } }), Object.defineProperty(exports, "sr", { enumerable: !0, get: function () { return bn; } }), Object.defineProperty(exports, "st", { enumerable: !0, get: function () { return U; } }), Object.defineProperty(exports, "t", { enumerable: !0, get: function () { return Yt; } }), Object.defineProperty(exports, "tn", { enumerable: !0, get: function () { return aa; } }), Object.defineProperty(exports, "tr", { enumerable: !0, get: function () { return gn; } }), Object.defineProperty(exports, "tt", { enumerable: !0, get: function () { return f; } }), Object.defineProperty(exports, "u", { enumerable: !0, get: function () { return si; } }), Object.defineProperty(exports, "un", { enumerable: !0, get: function () { return te; } }), Object.defineProperty(exports, "ur", { enumerable: !0, get: function () { return Y; } }), Object.defineProperty(exports, "ut", { enumerable: !0, get: function () { return Pe; } }), Object.defineProperty(exports, "v", { enumerable: !0, get: function () { return Be; } }), Object.defineProperty(exports, "vn", { enumerable: !0, get: function () { return Pi; } }), Object.defineProperty(exports, "vr", { enumerable: !0, get: function () { return Ae; } }), Object.defineProperty(exports, "vt", { enumerable: !0, get: function () { return Gi; } }), Object.defineProperty(exports, "w", { enumerable: !0, get: function () { return et; } }), Object.defineProperty(exports, "wn", { enumerable: !0, get: function () { return ji; } }), Object.defineProperty(exports, "wt", { enumerable: !0, get: function () { return wa; } }), Object.defineProperty(exports, "x", { enumerable: !0, get: function () { return Qe; } }), Object.defineProperty(exports, "xn", { enumerable: !0, get: function () { return Ca; } }), Object.defineProperty(exports, "xr", { enumerable: !0, get: function () { return o; } }), Object.defineProperty(exports, "xt", { enumerable: !0, get: function () { return An; } }), Object.defineProperty(exports, "y", { enumerable: !0, get: function () { return qi; } }), Object.defineProperty(exports, "yn", { enumerable: !0, get: function () { return Ne; } }), Object.defineProperty(exports, "yr", { enumerable: !0, get: function () { return l; } }), Object.defineProperty(exports, "yt", { enumerable: !0, get: function () { return Ue; } }), Object.defineProperty(exports, "z", { enumerable: !0, get: function () { return it; } }), Object.defineProperty(exports, "zn", { enumerable: !0, get: function () { return y; } }), Object.defineProperty(exports, "zt", { enumerable: !0, get: function () { return h; } });
