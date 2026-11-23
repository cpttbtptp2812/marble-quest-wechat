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
var e = require("./rolldown-runtime-8PkXcCTM.js"), t = require("./nape-physics-tjC3J-kx.js");
function n(e) { e.length = 0, this.push(e); }
function r(e) { var n = e.__zpp; return me || (me = !0, n.ZPP_Const = t.jn, n.ZPP_ID = t.Kt, n.callbacks || (n.callbacks = {}), t.fr._zpp = n, n.callbacks.ZPP_Callback = t.fr, t.et._zpp = n, n.callbacks.ZPP_CbSet = t.et, n.callbacks.ZPP_CbSetPair = t.j, n.util || (n.util = {}), t.tt(n), t.Ft._zpp = n, n.callbacks.ZPP_CbType = t.Ft, n.util.ZPP_Flags = t.st, n.callbacks.ZPP_Listener = w, n.callbacks.ZPP_BodyListener = ne, n.callbacks.ZPP_ConstraintListener = re, n.callbacks.ZPP_InteractionListener = E, O._nape = e, O._zpp = n, n.callbacks.ZPP_OptionType = O, n.constraint || (n.constraint = {}), t.bn._nape = e, t.bn._zpp = n, n.constraint.ZPP_Constraint = t.bn, n.constraint.ZPP_AngleJoint = t.ct, n.constraint.ZPP_CopyHelper = t.Zt, n.constraint.ZPP_DistanceJoint = t.$t, n.constraint.ZPP_LineJoint = t.Hn, n.constraint.ZPP_MotorJoint = t.Gn, n.constraint.ZPP_PivotJoint = t.on, n.constraint.ZPP_PulleyJoint = t.xn, n.constraint.ZPP_UserConstraint = ae, n.constraint.ZPP_UserBody = ie, n.constraint.ZPP_WeldJoint = t.cr, n.dynamics || (n.dynamics = {}), t.ur._nape = e, t.ur._zpp = n, n.dynamics.ZPP_Arbiter = t.ur, n.dynamics.ZPP_SensorArbiter = t.Pn, t.$n._nape = e, t.$n._zpp = n, n.dynamics.ZPP_FluidArbiter = t.$n, t.Tt._nape = e, t.Tt._zpp = n, n.dynamics.ZPP_ColArbiter = t.Tt, n.dynamics.ZPP_IContact = t.Bn, t.ft._nape = e, n.dynamics.ZPP_Contact = t.ft, t.b._nape = e, n.dynamics.ZPP_InteractionFilter = t.b, n.dynamics.ZPP_InteractionGroup = k, n.dynamics.ZPP_SpaceArbiterList = t.On, n.geom || (n.geom = {}), t.xt._nape = e, n.geom.ZPP_AABB = t.xt, n.geom.ZPP_Collide = t.Kn, n.geom.ZPP_Convex = t.O, n.geom.ZPP_ConvexRayResult = t.u, n.geom.ZPP_CutVert = t.Dn, n.geom.ZPP_CutInt = t.F, n.geom.ZPP_Cutter = t.H, n.geom.ZPP_Geom = t.rr, n.geom.ZPP_GeomVert = t.Tn, n.geom.ZPP_GeomPoly = t.Et, n.geom.ZPP_MarchSpan = A, n.geom.ZPP_MarchPair = j, N._init(e), n.geom.ZPP_MarchingSquares = N, F._nape = e, n.geom.ZPP_Mat23 = F, n.geom.ZPP_MatMN = t.gn, n.geom.ZPP_Monotone = t.lr, n.geom.ZPP_PartitionVertex = t.s, n.geom.ZPP_PartitionedPoly = t.jt, n.geom.ZPP_Ray = se, n.geom.ZPP_SimpleVert = t.Mn, n.geom.ZPP_SimpleSeg = t.Un, n.geom.ZPP_SimpleEvent = t.I, n.geom.ZPP_SimpleSweep = t.Fn, n.geom.ZPP_Simple = t.pt, n.geom.ZPP_SimplifyV = t._n, n.geom.ZPP_SimplifyP = t.hr, n.geom.ZPP_Simplify = t.Ut, n.geom.ZPP_ToiEvent = t._t, n.geom.ZPP_SweepDistance = t.g, n.geom.ZPP_PartitionPair = t.qn, n.geom.ZPP_Triangular = t.M, n.geom.ZPP_Vec2 = t.an, n.geom.ZPP_Vec3 = t.k, n.phys || (n.phys = {}), n.phys.ZPP_Interactor = t.p, t.p._init(n, e), t.St._init(n, e), n.phys.ZPP_Body = t.St, t.er._nape = e, t.er._zpp = n, t.er._init(), n.phys.ZPP_Compound = t.er, t.sn._nape = e, n.phys.ZPP_FluidProperties = t.sn, t.Wn._nape = e, n.phys.ZPP_Material = t.Wn, n.shape || (n.shape = {}), t.Xn._init(), n.shape.ZPP_Shape = t.Xn, t.vt._nape = e, t.vt._init(), n.shape.ZPP_Circle = t.vt, t.V._nape = e, n.shape.ZPP_Edge = t.V, t.d._nape = e, t.d._zpp = n, t.d._init(), n.shape.ZPP_Polygon = t.d, n.space || (n.space = {}), L._zpp = n, L._nape = e, n.space.ZPP_Broadphase = L, n.space.ZPP_AABBNode = R, n.space.ZPP_AABBPair = z, n.space.ZPP_AABBTree = B, le._nape = e, n.space.ZPP_DynAABBPhase = le, n.space.ZPP_Island = t.Ht, n.space.ZPP_Component = H, n.space.ZPP_CallbackSet = t.X, n.space.ZPP_CbSetManager = t.or, t.Z._zpp = n, t.Z._nape = e, n.space.ZPP_Space = t.Z, n.space.ZPP_SweepData = U, de._nape = e, n.space.ZPP_SweepPhase = de, pe._nape = e, n.space.ZPP_SpatialHashPhase = pe, n.util.ZNPArray2_Float = C, n.util.ZNPArray2_ZPP_GeomVert = ee, n.util.ZNPArray2_ZPP_MarchPair = te, n.util.Hashable2_Boolfalse = t.Vt, n.util.FastHash2_Hashable2_Boolfalse = t._r, n.util.ZPP_PubPool = t.ln, n.callbacks.ZPP_InteractionListener._initStatics(n), n.space.ZPP_AABBTree._initStatics()), e; }
function i(e) { var t = 0, n = e.inner.next; for (; n != null;)
    n.active && n.arbiter.active && t++, n = n.next; return t; }
function a(e) { return e.valmod(), e.zip_length && (e.zip_length = !1, e.user_length = i(e)), e.user_length; }
function o() { if (this.zpp_next = null, this.zpp_critical = !1, this.zpp_i = 0, this.zpp_inner = null, !W.internal)
    throw Error("Cannot instantiate ContactIterator derp!"); }
function s() { this.zpp_inner = null, this.zpp_inner = new W, this.zpp_inner.outer = this; }
function c(e, t, n) { for (; e[t] != null;) {
    var r_1 = e[t][n];
    e[t][n] = null, e[t] = r_1;
} }
function l(e) { if (e.zpp_disp)
    throw Error("Vec2 has been disposed and cannot be used!"); var t = e.zpp_inner; return t._validate != null && t._validate(), t.x; }
function u(e) { if (e.zpp_disp)
    throw Error("Vec2 has been disposed and cannot be used!"); var t = e.zpp_inner; return t._validate != null && t._validate(), t.y; }
function d(e) { return e == null ? void 0 : e.zpp_inner; }
function f(e) { return e == null ? void 0 : e.zpp_inner; }
function p(e, t) { if (e != null && e.zpp_disp)
    throw Error("Vec2 has been disposed and cannot be used!"); var n = e.zpp_inner; if (n._immutable)
    throw Error("Vec2 is immutable"); n._isimmutable != null && n._isimmutable(); }
function m(e, t) { var n; if (((n = d(e)) == null || (n = n.body) == null ? void 0 : n.outer) == null)
    throw Error("Shape must be part of a Body to calculate ".concat(t)); }
function h() { if (!t.W.internal)
    throw Error("Cannot instantiate GeomVertexIterator"); }
function g(e) { return e === 0 ? Y.BODY : e === 1 ? Y.CONSTRAINT : e === 2 ? Y.INTERACTION : Y.PRE; }
function _(e) { switch (e) {
    case 0: return q.BEGIN;
    case 1: return q.END;
    case 2: return q.WAKE;
    case 3: return q.SLEEP;
    case 4: return q.BREAK;
    case 5: return q.PRE;
    default: return q.ONGOING;
} }
function v(e) { return e === q.BEGIN ? 0 : e === q.END ? 1 : e === q.WAKE ? 2 : e === q.SLEEP ? 3 : e === q.BREAK ? 4 : e === q.PRE ? 5 : e === q.ONGOING ? 6 : -1; }
function y(e) { return e === J.COLLISION ? 1 : e === J.SENSOR ? 2 : e === J.FLUID ? 4 : 7; }
function b(e) { return e == 1 ? J.COLLISION : e == 2 ? J.SENSOR : e == 4 ? J.FLUID : e == 7 ? J.ANY : null; }
var x, S, C, ee, te, w, ne, re, T, E, D, O, ie, ae, k, A, j, M, N, P, F, oe, se, I, L, R, z, ce, B, V, le, H, U, ue, de, fe, pe, me, W, he, ge, _e, ve, ye, be, xe, Se, Ce, we, Te, G, K, Ee, De, Oe, ke, q, J, Ae, je, Y, X, Z, Me, Ne, Pe, Fe, Ie, Le, Re, ze, Be, Q, Ve, $;
function He() { return (He = e.n((function () { t.Cn(), S = (function () {
    function S(e, t) {
        this.list = [], this.width = 0, this.width = e, this.list = [];
    }
    S.prototype.resize = function (e, t, n) { this.width = e; var r = e * t; for (var e_1 = 0; e_1 < r; e_1++)
        this.list[e_1] = n; };
    S.prototype.get = function (e, t) { return this.list[t * this.width + e]; };
    S.prototype.set = function (e, t, n) { return this.list[t * this.width + e] = n; };
    return S;
}()), C = (function (_super) {
    __extends(C, _super);
    function C() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return C;
}(S)), ee = (function (_super) {
    __extends(ee, _super);
    function ee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ee;
}(S)), te = (function (_super) {
    __extends(te, _super);
    function te() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return te;
}(S)), w = (function () {
    function w() {
        this.space = null, this.interaction = null, this.constraint = null, this.body = null, this.precedence = 0, this.event = 0, this.type = 0, this.id = 0, this.outer = null, this.id = t.Kt.Listener();
    }
    w.setlt = function (e, t) { return e.precedence <= t.precedence ? e.precedence == t.precedence && e.id > t.id : !0; };
    w.prototype.swapEvent = function (e) { };
    w.prototype.invalidate_precedence = function () { };
    w.prototype.addedToSpace = function () { };
    w.prototype.removedFromSpace = function () { };
    return w;
}()), w.internal = !1, ne = (function (_super) {
    __extends(ne, _super);
    function ne(e, t, n) {
        var _this = this;
        _this = _super.call(this) || this, _this.handler = null, _this.options = null, _this.outer_zn = null, _this.event = t, _this.handler = n, _this.body = _this, _this.type = 0, _this.options = e.zpp_inner;
        return _this;
    }
    ne.prototype.addedToSpace = function () {
        var _this = this;
        this.options.handler = function (e, t, n) { return _this.cbtype_change(e, t, n); };
        var e = this.options.includes.head;
        for (; e != null;)
            e.elt.addbody(this), e = e.next;
    };
    ne.prototype.removedFromSpace = function () { var e = this.options.includes.head; for (; e != null;)
        e.elt.removebody(this), e = e.next; this.options.handler = null; };
    ne.prototype.cbtype_change = function (e, t, n) { this.removedFromSpace(); var r = this.options; t ? n ? r.effect_change(e, !0, !0) : r.includes.remove(e) : n ? r.effect_change(e, !1, !0) : r.excludes.remove(e), this.addedToSpace(); };
    ne.prototype.invalidate_precedence = function () { this.space != null && (this.removedFromSpace(), this.addedToSpace()); };
    ne.prototype.swapEvent = function (e) { if (e != 2 && e != 3)
        throw Error("BodyListener event must be either WAKE or SLEEP only"); this.removedFromSpace(), this.event = e, this.addedToSpace(); };
    return ne;
}(w)), re = (function (_super) {
    __extends(re, _super);
    function re(e, t, n) {
        var _this = this;
        _this = _super.call(this) || this, _this.handler = null, _this.options = null, _this.outer_zn = null, _this.event = t, _this.handler = n, _this.constraint = _this, _this.type = 1, _this.options = e.zpp_inner;
        return _this;
    }
    re.prototype.addedToSpace = function () {
        var _this = this;
        this.options.handler = function (e, t, n) { return _this.cbtype_change(e, t, n); };
        var e = this.options.includes.head;
        for (; e != null;)
            e.elt.addconstraint(this), e = e.next;
    };
    re.prototype.removedFromSpace = function () { var e = this.options.includes.head; for (; e != null;)
        e.elt.removeconstraint(this), e = e.next; this.options.handler = null; };
    re.prototype.cbtype_change = function (e, t, n) { this.removedFromSpace(); var r = this.options; t ? n ? r.effect_change(e, !0, !0) : r.includes.remove(e) : n ? r.effect_change(e, !1, !0) : r.excludes.remove(e), this.addedToSpace(); };
    re.prototype.invalidate_precedence = function () { this.space != null && (this.removedFromSpace(), this.addedToSpace()); };
    re.prototype.swapEvent = function (e) { if (e != 2 && e != 3 && e != 4)
        throw Error("ConstraintListener event must be either WAKE or SLEEP only"); this.removedFromSpace(), this.event = e, this.addedToSpace(); };
    return re;
}(w)), T = (function (_super) {
    __extends(e, _super);
    function e(e, t, n, r) {
        var _this = this;
        _this = _super.call(this) || this, _this.outer_zni = null, _this.outer_znp = null, _this.itype = 0, _this.handleri = null, _this.allowSleepingCallbacks = !1, _this.pure = !1, _this.handlerp = null, _this.type = r, _this.interaction = _this, _this.event = n, _this.options1 = e.zpp_inner, _this.options2 = t.zpp_inner, _this.allowSleepingCallbacks = !1;
        return _this;
    }
    e.prototype.wake = function () { var e = this.options1.includes.head, t = this.options2.includes.head; for (; e != null && t != null;) {
        var n_1 = e.elt, r_2 = t.elt;
        if (n_1 == r_2) {
            var r_3 = n_1.interactors.head;
            for (; r_3 != null;)
                r_3.elt.wake(), r_3 = r_3.next;
            e = e.next, t = t.next;
        }
        else if (n_1.id < r_2.id) {
            var t_1 = n_1.interactors.head;
            for (; t_1 != null;)
                t_1.elt.wake(), t_1 = t_1.next;
            e = e.next;
        }
        else {
            var e_2 = r_2.interactors.head;
            for (; e_2 != null;)
                e_2.elt.wake(), e_2 = e_2.next;
            t = t.next;
        }
    } for (; e != null;) {
        var t_2 = e.elt.interactors.head;
        for (; t_2 != null;)
            t_2.elt.wake(), t_2 = t_2.next;
        e = e.next;
    } for (; t != null;) {
        var e_3 = t.elt.interactors.head;
        for (; e_3 != null;)
            e_3.elt.wake(), e_3 = e_3.next;
        t = t.next;
    } };
    e.prototype.CbSetset = function (n, r, i) { var a = e.UCbSet, o = e.VCbSet, s = e.WCbSet, c = n.head, l = r.head; for (; c != null && l != null;) {
        var e_4 = c.elt, n_2 = l.elt;
        if (e_4 == n_2) {
            var t_3 = this._allocCbSetNode();
            t_3.elt = e_4, t_3.next = s.head, s.head = t_3, s.modified = !0, s.length++, c = c.next, l = l.next;
        }
        else if (t.et.setlt(e_4, n_2)) {
            var t_4 = this._allocCbSetNode();
            t_4.elt = e_4, t_4.next = a.head, a.head = t_4, a.modified = !0, a.length++, c = c.next;
        }
        else {
            var e_5 = this._allocCbSetNode();
            e_5.elt = n_2, e_5.next = o.head, o.head = e_5, o.modified = !0, o.length++, l = l.next;
        }
    } for (; c != null;) {
        var e_6 = this._allocCbSetNode();
        e_6.elt = c.elt, e_6.next = a.head, a.head = e_6, a.modified = !0, a.length++, c = c.next;
    } for (; l != null;) {
        var e_7 = this._allocCbSetNode();
        e_7.elt = l.elt, e_7.next = o.head, o.head = e_7, o.modified = !0, o.length++, l = l.next;
    } for (; a.head != null;) {
        var e_8 = a.pop_unsafe(), t_5 = r.head;
        for (; t_5 != null;)
            i(e_8, t_5.elt), t_5 = t_5.next;
    } for (; o.head != null;) {
        var e_9 = o.pop_unsafe(), t_6 = s.head;
        for (; t_6 != null;)
            i(e_9, t_6.elt), t_6 = t_6.next;
    } for (; s.head != null;) {
        var e_10 = s.pop_unsafe();
        i(e_10, e_10);
        var t_7 = s.head;
        for (; t_7 != null;)
            i(e_10, t_7.elt), t_7 = t_7.next;
    } };
    e.prototype.CbTypeset = function (t, n, r) { var i = e.UCbType, a = e.VCbType, o = e.WCbType, s = t.head, c = n.head; for (; s != null && c != null;) {
        var e_11 = s.elt, t_8 = c.elt;
        if (e_11 == t_8) {
            var t_9 = this._allocCbTypeNode();
            t_9.elt = e_11, t_9.next = o.head, o.head = t_9, o.modified = !0, o.length++, s = s.next, c = c.next;
        }
        else if (e_11.id < t_8.id) {
            var t_10 = this._allocCbTypeNode();
            t_10.elt = e_11, t_10.next = i.head, i.head = t_10, i.modified = !0, i.length++, s = s.next;
        }
        else {
            var e_12 = this._allocCbTypeNode();
            e_12.elt = t_8, e_12.next = a.head, a.head = e_12, a.modified = !0, a.length++, c = c.next;
        }
    } for (; s != null;) {
        var e_13 = this._allocCbTypeNode();
        e_13.elt = s.elt, e_13.next = i.head, i.head = e_13, i.modified = !0, i.length++, s = s.next;
    } for (; c != null;) {
        var e_14 = this._allocCbTypeNode();
        e_14.elt = c.elt, e_14.next = a.head, a.head = e_14, a.modified = !0, a.length++, c = c.next;
    } for (; i.head != null;) {
        var e_15 = i.pop_unsafe(), t_11 = n.head;
        for (; t_11 != null;)
            r(e_15, t_11.elt), t_11 = t_11.next;
    } for (; a.head != null;) {
        var e_16 = a.pop_unsafe(), t_12 = o.head;
        for (; t_12 != null;)
            r(e_16, t_12.elt), t_12 = t_12.next;
    } for (; o.head != null;) {
        var e_17 = o.pop_unsafe();
        r(e_17, e_17);
        var t_13 = o.head;
        for (; t_13 != null;)
            r(e_17, t_13.elt), t_13 = t_13.next;
    } };
    e.prototype.with_uniquesets = function (e) {
        var _this = this;
        var n;
        if (t.ht.zpp_pool == null ? n = new t.ht : (n = t.ht.zpp_pool, t.ht.zpp_pool = n.next, n.next = null), n.lt = t.j.setlt, this.CbTypeset(this.options1.includes, this.options2.includes, function (e, r) { _this.CbSetset(e.cbsets, r.cbsets, function (e, r) { if (e.validate(), r.validate(), t.et.single_intersection(e, r, _this)) {
            var i_1;
            t.j.zpp_pool == null ? i_1 = new t.j : (i_1 = t.j.zpp_pool, t.j.zpp_pool = i_1.next, i_1.next = null), i_1.zip_listeners = !0, t.et.setlt(e, r) ? (i_1.a = e, i_1.b = r) : (i_1.a = r, i_1.b = e), n.try_insert(i_1);
        } }); }), n.parent != null) {
            var r_4 = n.parent;
            for (; r_4 != null;)
                if (r_4.prev != null)
                    r_4 = r_4.prev;
                else if (r_4.next != null)
                    r_4 = r_4.next;
                else {
                    var n_3 = r_4.data;
                    e ? this.space.freshListenerType(n_3.a, n_3.b) : this.space.nullListenerType(n_3.a, n_3.b);
                    var i_2 = n_3;
                    i_2.a = i_2.b = null, i_2.listeners.clear(), i_2.next = t.j.zpp_pool, t.j.zpp_pool = i_2;
                    var a_1 = r_4.parent;
                    a_1 != null && (r_4 == a_1.prev ? a_1.prev = null : a_1.next = null, r_4.parent = null);
                    var o_1 = r_4;
                    o_1.data = null, o_1.lt = null, o_1.swapped = null, o_1.next = t.ht.zpp_pool, t.ht.zpp_pool = o_1, r_4 = a_1;
                }
            n.parent = null;
        }
        var r = n;
        r.data = null, r.lt = null, r.swapped = null, r.next = t.ht.zpp_pool, t.ht.zpp_pool = r;
    };
    e.prototype.with_union = function (e) { var t = this.options1.includes.head, n = this.options2.includes.head; for (; t != null && n != null;) {
        var r_5 = t.elt, i_3 = n.elt;
        r_5 == i_3 ? (e(r_5), t = t.next, n = n.next) : r_5.id < i_3.id ? (e(r_5), t = t.next) : (e(i_3), n = n.next);
    } for (; t != null;)
        e(t.elt), t = t.next; for (; n != null;)
        e(n.elt), n = n.next; };
    e.prototype.addedToSpace = function () {
        var _this = this;
        var e = this.type == 3;
        e && this.space != null && this.space.preListenerCount++, this.with_union(function (t) { if (t.addint(_this), e) {
            var e_18 = t.interactors.head;
            for (; e_18 != null;)
                e_18.elt.wake(), e_18 = e_18.next;
        } }), this.options1.handler = function (e, t, n) { return _this.cbtype_change1(e, t, n); }, this.options2.handler = function (e, t, n) { return _this.cbtype_change2(e, t, n); }, this.with_uniquesets(!0);
    };
    e.prototype.removedFromSpace = function () {
        var _this = this;
        this.with_uniquesets(!1);
        var e = this.type == 3;
        e && this.space != null && this.space.preListenerCount--, this.with_union(function (t) { if (t.removeint(_this), e) {
            var e_19 = t.interactors.head;
            for (; e_19 != null;)
                e_19.elt.wake(), e_19 = e_19.next;
        } }), this.options1.handler = null, this.options2.handler = null;
    };
    e.prototype.invalidate_precedence = function () { this.space != null && (this.removedFromSpace(), this.addedToSpace()); };
    e.prototype.cbtype_change1 = function (e, t, n) { this.cbtype_change(this.options1, e, t, n); };
    e.prototype.cbtype_change2 = function (e, t, n) { this.cbtype_change(this.options2, e, t, n); };
    e.prototype.cbtype_change = function (e, t, n, r) { this.removedFromSpace(), n ? r ? e.effect_change(t, !0, !0) : e.includes.remove(t) : r ? e.effect_change(t, !1, !0) : e.excludes.remove(t), this.addedToSpace(); };
    e.prototype.swapEvent = function (e) { if (this.type == 3)
        throw Error("PreListener event can only be PRE"); if (e != 0 && e != 1 && e != 6)
        throw Error("InteractionListener event must be either BEGIN, END, ONGOING"); this.removedFromSpace(), this.event = e, this.addedToSpace(); };
    e.prototype._allocCbSetNode = function () { var e; return t.$.zpp_pool == null ? e = new t.$ : (e = t.$.zpp_pool, t.$.zpp_pool = e.next, e.next = null), e; };
    e.prototype._allocCbTypeNode = function () { var e; return t.Ln.zpp_pool == null ? e = new t.Ln : (e = t.Ln.zpp_pool, t.Ln.zpp_pool = e.next, e.next = null), e; };
    e._initStatics = function (t) { e.UCbSet = new t.util.ZNPList_ZPP_CbSet, e.VCbSet = new t.util.ZNPList_ZPP_CbSet, e.WCbSet = new t.util.ZNPList_ZPP_CbSet, e.UCbType = new t.util.ZNPList_ZPP_CbType, e.VCbType = new t.util.ZNPList_ZPP_CbType, e.WCbType = new t.util.ZNPList_ZPP_CbType; };
    return e;
}(w)), T.UCbSet = null, T.VCbSet = null, T.WCbSet = null, T.UCbType = null, T.VCbType = null, T.WCbType = null, E = T, D = (function () {
    function e() {
        this.outer = null, this.handler = null, this.includes = null, this.excludes = null, this.wrap_includes = null, this.wrap_excludes = null, this.includes = new t.Q, this.excludes = new t.Q;
    }
    e.argument = function (t) { var n = e._nape; return t == null ? new n.callbacks.OptionType : (t == null ? void 0 : t.zpp_inner) instanceof e || t instanceof n.callbacks.OptionType ? t : new n.callbacks.OptionType().including(t); };
    e.prototype.setup_includes = function () { var t = e._zpp; this.wrap_includes = t.util.ZPP_CbTypeList.get(this.includes, !0); };
    e.prototype.setup_excludes = function () { var t = e._zpp; this.wrap_excludes = t.util.ZPP_CbTypeList.get(this.excludes, !0); };
    e.prototype.excluded = function (e) { return this.nonemptyintersection(e, this.excludes); };
    e.prototype.compatible = function (e) { return this.nonemptyintersection(e, this.includes) ? !this.nonemptyintersection(e, this.excludes) : !1; };
    e.prototype.nonemptyintersection = function (e, t) { var n = !1, r = e.head, i = t.head; for (; i != null && r != null;) {
        var e_20 = i.elt, t_14 = r.elt;
        if (e_20 === t_14) {
            n = !0;
            break;
        }
        e_20.id < t_14.id ? i = i.next : r = r.next;
    } return n; };
    e.prototype.insertOrdered = function (e, t) { var n = null, r = e.head; for (; r != null;) {
        var e_21 = r.elt;
        if (t.id < e_21.id)
            break;
        n = r, r = r.next;
    } e.insert(n, t); };
    e.prototype.effect_change = function (e, t, n) { t ? n ? this.insertOrdered(this.includes, e) : this.includes.remove(e) : n ? this.insertOrdered(this.excludes, e) : this.excludes.remove(e); };
    e.prototype.append_type = function (e, t) { e === this.includes ? this.includes.has(t) || (this.excludes.has(t) ? this.handler == null ? this.excludes.remove(t) : this.handler(t, !1, !1) : this.handler == null ? this.insertOrdered(this.includes, t) : this.handler(t, !0, !0)) : this.excludes.has(t) || (this.includes.has(t) ? this.handler == null ? this.includes.remove(t) : this.handler(t, !0, !1) : this.handler == null ? this.insertOrdered(this.excludes, t) : this.handler(t, !1, !0)); };
    e.prototype.set = function (e) { if (e !== this) {
        for (; this.includes.head != null;)
            this.append_type(this.excludes, this.includes.head.elt);
        for (; this.excludes.head != null;)
            this.append_type(this.includes, this.excludes.head.elt);
        var t_15 = e.excludes.head;
        for (; t_15 != null;) {
            var e_22 = t_15.elt;
            this.append_type(this.excludes, e_22), t_15 = t_15.next;
        }
        var n_4 = e.includes.head;
        for (; n_4 != null;) {
            var e_23 = n_4.elt;
            this.append_type(this.includes, e_23), n_4 = n_4.next;
        }
    } return this; };
    e.prototype.append = function (n, r) { var i = e._nape; if (r == null)
        throw Error("Cannot append null, only CbType and CbType list values"); if ((r == null ? void 0 : r.zpp_inner) instanceof t.Ft || r instanceof i.callbacks.CbType) {
        var e_24 = r;
        this.append_type(n, e_24.zpp_inner);
    }
    else if (r instanceof i.callbacks.CbTypeList) {
        var e_25 = r;
        e_25.zpp_inner.valmod();
        var t_16 = i.callbacks.CbTypeIterator.get(e_25);
        for (;;) {
            t_16.zpp_inner.zpp_inner.valmod();
            var e_26 = t_16.zpp_inner;
            e_26.zpp_inner.valmod(), e_26.zpp_inner.zip_length && (e_26.zpp_inner.zip_length = !1, e_26.zpp_inner.user_length = e_26.zpp_inner.inner.length);
            var r_6 = e_26.zpp_inner.user_length;
            t_16.zpp_critical = !0;
            var a_2 = void 0;
            if (t_16.zpp_i < r_6 ? a_2 = !0 : (t_16.zpp_next = i.callbacks.CbTypeIterator.zpp_pool, i.callbacks.CbTypeIterator.zpp_pool = t_16, t_16.zpp_inner = null, a_2 = !1), !a_2)
                break;
            t_16.zpp_critical = !1;
            var o_2 = t_16.zpp_inner.at(t_16.zpp_i++);
            this.append_type(n, o_2.zpp_inner);
        }
    }
    else if (r instanceof Array) {
        var e_27 = r, a_3 = 0;
        for (; a_3 < e_27.length;) {
            var r_7 = e_27[a_3];
            if (++a_3, !((r_7 == null ? void 0 : r_7.zpp_inner) instanceof t.Ft) && !(r_7 instanceof i.callbacks.CbType))
                throw Error("Cannot append non-CbType or CbType list value");
            var o_3 = r_7;
            this.append_type(n, o_3.zpp_inner);
        }
    }
    else
        throw Error("Cannot append non-CbType or CbType list value"); };
    return e;
}()), D._nape = null, D._zpp = null, O = D, ie = (function () {
    function ie(e, t) {
        this.cnt = 0, this.body = null, this.cnt = e, this.body = t;
    }
    return ie;
}()), ae = (function (_super) {
    __extends(ae, _super);
    function ae(e, n) {
        var _this = this;
        _this = _super.call(this) || this, _this.outer_zn = null, _this.bodies = null, _this.dim = 0, _this.jAcc = null, _this.bias = null, _this.stepped = !1, _this.L = null, _this.y = null, _this.soft = 0, _this.gamma = 0, _this.velonly = !1, _this.jMax = 0, _this.Keff = null, _this.vec3 = null, _this.J = null, _this.jOld = null, _this.bodies = [], _this.dim = e, _this.velonly = n, _this.jAcc = [], _this.bias = [], _this.L = [], _this.J = [], _this.jOld = [], _this.y = [], _this.Keff = [], _this.vec3 = t.bn._nape.geom.Vec3.get(0, 0, 0);
        for (var t_17 = 0; t_17 < e; t_17++) {
            var n_5 = _this.bias[t_17] = _this.J[t_17] = _this.jOld[t_17] = _this.y[t_17] = 0;
            _this.jAcc[t_17] = n_5;
            for (var n_6 = 0; n_6 < e; n_6++)
                _this.L[t_17 * e + n_6] = 0;
        }
        _this.stepped = !1;
        return _this;
    }
    ae.prototype.bindVec2_invalidate = function (e) { this.outer_zn.__invalidate(); };
    ae.prototype.addBody = function (e) { var t = null; for (var _i = 0, _a = this.bodies; _i < _a.length; _i++) {
        var n_7 = _a[_i];
        if (n_7.body === e) {
            t = n_7;
            break;
        }
    } t === null ? (this.bodies.push(new ie(1, e)), this.active && this.space != null && (e == null || e.constraints.add(this))) : t.cnt++; };
    ae.prototype.remBody = function (e) { var t = null, n = this.bodies.length | 0, r = 0; for (; r < n;) {
        var i_4 = this.bodies[r];
        if (i_4.body === e) {
            i_4.cnt--, i_4.cnt === 0 && (n > 0 && (this.bodies[r] = this.bodies[n - 1]), this.bodies.pop(), this.active && this.space != null && (e == null || e.constraints.remove(this))), t = i_4;
            break;
        }
        ++r;
    } return t != null; };
    ae.prototype.bodyImpulse = function (e) { for (var e_28 = 0; e_28 < this.dim; e_28++)
        this.J[e_28] = this.jAcc[e_28]; var n = t.bn._nape.geom.Vec3.get(0, 0, 0); return this.stepped && this.outer_zn.__impulse(this.J, e.outer, n), n; };
    ae.prototype.activeBodies = function () { for (var _i = 0, _a = this.bodies; _i < _a.length; _i++) {
        var e_29 = _a[_i];
        e_29.body != null && e_29.body.constraints.add(this);
    } };
    ae.prototype.inactiveBodies = function () { for (var _i = 0, _a = this.bodies; _i < _a.length; _i++) {
        var e_30 = _a[_i];
        e_30.body != null && e_30.body.constraints.remove(this);
    } };
    ae.prototype.copy = function (e, t) { var n = this.outer_zn.__copy(); throw this.copyto(n), Error("not done yet"); };
    ae.prototype.validate = function () { for (var _i = 0, _a = this.bodies; _i < _a.length; _i++) {
        var e_31 = _a[_i];
        if (e_31.body.space !== this.space)
            throw Error("Error: Constraints must have each body within the same sapce to which the constraint has been assigned");
    } this.outer_zn.__validate(); };
    ae.prototype.wake_connected = function () { for (var _i = 0, _a = this.bodies; _i < _a.length; _i++) {
        var e_32 = _a[_i];
        e_32.body.type === 2 && e_32.body.wake();
    } };
    ae.prototype.forest = function () { for (var _i = 0, _a = this.bodies; _i < _a.length; _i++) {
        var e_33 = _a[_i];
        if (e_33.body.type === 2) {
            var t_18 = void 0;
            if (e_33.body.component === e_33.body.component.parent)
                t_18 = e_33.body.component;
            else {
                var n_8 = e_33.body.component, r_8 = null;
                for (; n_8 !== n_8.parent;) {
                    var e_34 = n_8.parent;
                    n_8.parent = r_8, r_8 = n_8, n_8 = e_34;
                }
                for (; r_8 != null;) {
                    var e_35 = r_8.parent;
                    r_8.parent = n_8, r_8 = e_35;
                }
                t_18 = n_8;
            }
            var n_9 = void 0;
            if (this.component === this.component.parent)
                n_9 = this.component;
            else {
                var e_36 = this.component, t_19 = null;
                for (; e_36 !== e_36.parent;) {
                    var n_10 = e_36.parent;
                    e_36.parent = t_19, t_19 = e_36, e_36 = n_10;
                }
                for (; t_19 != null;) {
                    var n_11 = t_19.parent;
                    t_19.parent = e_36, t_19 = n_11;
                }
                n_9 = e_36;
            }
            t_18 !== n_9 && (t_18.rank < n_9.rank ? t_18.parent = n_9 : t_18.rank > n_9.rank ? n_9.parent = t_18 : (n_9.parent = t_18, t_18.rank++));
        }
    } };
    ae.prototype.pair_exists = function (e, t) { var n = !1, r = this.bodies.length | 0; for (var i_5 = 0; i_5 < r; i_5++) {
        var a_4 = this.bodies[i_5].body;
        for (var o_4 = i_5 + 1; o_4 < r; o_4++) {
            var r_9 = this.bodies[o_4].body;
            if (a_4.id === e && r_9.id === t || a_4.id === t && r_9.id === e) {
                n = !0;
                break;
            }
        }
        if (n)
            break;
    } return n; };
    ae.prototype.broken = function () { this.outer_zn.__broken(); };
    ae.prototype.clearcache = function () { for (var e_37 = 0; e_37 < this.dim; e_37++)
        this.jAcc[e_37] = 0; this.pre_dt = -1; };
    ae.prototype.lsq = function (e) { var t = 0; for (var n_12 = 0; n_12 < this.dim; n_12++)
        t += e[n_12] * e[n_12]; return t; };
    ae.prototype._clamp = function (e, t) { var n = this.lsq(e); if (n > t * t) {
        var r_10 = t / Math.sqrt(n);
        for (var t_20 = 0; t_20 < this.dim; t_20++)
            e[t_20] *= r_10;
    } };
    ae.prototype.solve = function (e) { var t = 0; for (var n_13 = 0; n_13 < this.dim; n_13++) {
        var r_11 = 0;
        for (var e_38 = 0; e_38 < n_13; e_38++)
            r_11 += this.L[n_13 * this.dim + e_38] * this.L[n_13 * this.dim + e_38];
        var i_6 = Math.sqrt(e[t++] - r_11);
        if (this.L[n_13 * this.dim + n_13] = i_6, i_6 !== 0) {
            i_6 = 1 / i_6;
            for (var r_12 = n_13 + 1; r_12 < this.dim; r_12++) {
                var a_5 = 0;
                for (var e_39 = 0; e_39 < n_13; e_39++)
                    a_5 += this.L[r_12 * this.dim + e_39] * this.L[n_13 * this.dim + e_39];
                this.L[r_12 * this.dim + n_13] = i_6 * (e[t++] - a_5);
            }
        }
        else {
            for (var e_40 = n_13 + 1; e_40 < this.dim; e_40++)
                this.L[e_40 * this.dim + n_13] = 0;
            t += this.dim - n_13 - 1;
        }
    } return this.L; };
    ae.prototype.transform = function (e, t) { for (var n_14 = 0; n_14 < this.dim; n_14++) {
        var r_13 = t[n_14], i_7 = e[n_14 * this.dim + n_14];
        if (i_7 !== 0) {
            for (var t_21 = 0; t_21 < n_14; t_21++)
                r_13 -= e[n_14 * this.dim + t_21] * this.y[t_21];
            this.y[n_14] = r_13 / i_7;
        }
        else
            this.y[n_14] = 0;
    } for (var n_15 = 0; n_15 < this.dim; n_15++) {
        var r_14 = this.dim - 1 - n_15, i_8 = e[r_14 * this.dim + r_14];
        if (i_8 !== 0) {
            var n_16 = this.y[r_14];
            for (var i_9 = r_14 + 1; i_9 < this.dim; i_9++)
                n_16 -= e[i_9 * this.dim + r_14] * t[i_9];
            t[r_14] = n_16 / i_8;
        }
        else
            t[r_14] = 0;
    } };
    ae.prototype.preStep = function (e) { this.pre_dt === -1 && (this.pre_dt = e); var t = e / this.pre_dt; if (this.pre_dt = e, this.stepped = !0, this.outer_zn.__prepare(), this.outer_zn.__eff_mass(this.Keff), this.L = this.solve(this.Keff), !this.stiff && !this.velonly) {
        var t_22 = 2 * Math.PI * this.frequency;
        this.gamma = 1 / (e * t_22 * (2 * this.damping + t_22 * e));
        var n_17 = 1 / (1 + this.gamma), r_15 = e * t_22 * t_22 * this.gamma;
        if (this.gamma *= n_17, this.soft = n_17, this.outer_zn.__position(this.bias), this.breakUnderError && this.lsq(this.bias) > this.maxError * this.maxError)
            return !0;
        for (var e_41 = 0; e_41 < this.dim; e_41++)
            this.bias[e_41] *= -r_15;
        this._clamp(this.bias, this.maxError);
    }
    else {
        for (var e_42 = 0; e_42 < this.dim; e_42++)
            this.bias[e_42] = 0;
        this.gamma = 0, this.soft = 1;
    } for (var e_43 = 0; e_43 < this.dim; e_43++)
        this.jAcc[e_43] *= t; return this.jMax = this.maxForce * e, !1; };
    ae.prototype.warmStart = function () { for (var _i = 0, _a = this.bodies; _i < _a.length; _i++) {
        var e_44 = _a[_i];
        var t_23 = e_44.body;
        this.outer_zn.__impulse(this.jAcc, t_23.outer, this.vec3);
        var n_18 = t_23.imass, r_16 = t_23, i_10 = r_16.velx, a_6 = this.vec3;
        if (a_6 != null && a_6.zpp_disp)
            throw Error("Vec3 has been disposed and cannot be used!");
        var o_5 = a_6.zpp_inner;
        o_5._validate != null && o_5._validate(), r_16.velx = i_10 + a_6.zpp_inner.x * n_18;
        var s_1 = t_23, c_1 = s_1.vely, l_1 = this.vec3;
        if (l_1 != null && l_1.zpp_disp)
            throw Error("Vec3 has been disposed and cannot be used!");
        var u_1 = l_1.zpp_inner;
        u_1._validate != null && u_1._validate(), s_1.vely = c_1 + l_1.zpp_inner.y * n_18;
        var d_1 = t_23, f_1 = d_1.angvel, p_1 = this.vec3;
        if (p_1 != null && p_1.zpp_disp)
            throw Error("Vec3 has been disposed and cannot be used!");
        var m_1 = p_1.zpp_inner;
        m_1._validate != null && m_1._validate(), d_1.angvel = f_1 + p_1.zpp_inner.z * t_23.iinertia;
    } };
    ae.prototype.applyImpulseVel = function () { this.outer_zn.__velocity(this.J); for (var e_45 = 0; e_45 < this.dim; e_45++)
        this.J[e_45] = this.bias[e_45] - this.J[e_45]; this.transform(this.L, this.J); for (var e_46 = 0; e_46 < this.dim; e_46++)
        this.jOld[e_46] = this.jAcc[e_46], this.jAcc[e_46] += this.J[e_46] = this.J[e_46] * this.soft - this.jAcc[e_46] * this.gamma; if (this.outer_zn.__clamp(this.jAcc), (this.breakUnderForce || !this.stiff) && this.lsq(this.jAcc) > this.jMax * this.jMax) {
        if (this.breakUnderForce)
            return !0;
        this.stiff || this._clamp(this.jAcc, this.jMax);
    } for (var e_47 = 0; e_47 < this.dim; e_47++)
        this.J[e_47] = this.jAcc[e_47] - this.jOld[e_47]; for (var _i = 0, _a = this.bodies; _i < _a.length; _i++) {
        var e_48 = _a[_i];
        var t_24 = e_48.body;
        this.outer_zn.__impulse(this.J, t_24.outer, this.vec3);
        var n_19 = t_24.imass, r_17 = t_24, i_11 = r_17.velx, a_7 = this.vec3;
        if (a_7 != null && a_7.zpp_disp)
            throw Error("Vec3 has been disposed and cannot be used!");
        var o_6 = a_7.zpp_inner;
        o_6._validate != null && o_6._validate(), r_17.velx = i_11 + a_7.zpp_inner.x * n_19;
        var s_2 = t_24, c_2 = s_2.vely, l_2 = this.vec3;
        if (l_2 != null && l_2.zpp_disp)
            throw Error("Vec3 has been disposed and cannot be used!");
        var u_2 = l_2.zpp_inner;
        u_2._validate != null && u_2._validate(), s_2.vely = c_2 + l_2.zpp_inner.y * n_19;
        var d_2 = t_24, f_2 = d_2.angvel, p_2 = this.vec3;
        if (p_2 != null && p_2.zpp_disp)
            throw Error("Vec3 has been disposed and cannot be used!");
        var m_2 = p_2.zpp_inner;
        m_2._validate != null && m_2._validate(), d_2.angvel = f_2 + p_2.zpp_inner.z * t_24.iinertia;
    } return !1; };
    ae.prototype.applyImpulsePos = function () { if (this.velonly)
        return !1; this.outer_zn.__prepare(), this.outer_zn.__position(this.J); var e = this.lsq(this.J); if (this.breakUnderError && e > this.maxError * this.maxError)
        return !0; if (e < t.q.constraintLinearSlop * t.q.constraintLinearSlop)
        return !1; for (var e_49 = 0; e_49 < this.dim; e_49++)
        this.J[e_49] *= -1; this.outer_zn.__eff_mass(this.Keff), this.transform(this.solve(this.Keff), this.J), this.outer_zn.__clamp(this.J); for (var _i = 0, _a = this.bodies; _i < _a.length; _i++) {
        var e_50 = _a[_i];
        var t_25 = e_50.body;
        this.outer_zn.__impulse(this.J, t_25.outer, this.vec3);
        var n_20 = t_25.imass, r_18 = t_25, i_12 = r_18.posx, a_8 = this.vec3;
        if (a_8 != null && a_8.zpp_disp)
            throw Error("Vec3 has been disposed and cannot be used!");
        var o_7 = a_8.zpp_inner;
        o_7._validate != null && o_7._validate(), r_18.posx = i_12 + a_8.zpp_inner.x * n_20;
        var s_3 = t_25, c_3 = s_3.posy, l_3 = this.vec3;
        if (l_3 != null && l_3.zpp_disp)
            throw Error("Vec3 has been disposed and cannot be used!");
        var u_3 = l_3.zpp_inner;
        u_3._validate != null && u_3._validate(), s_3.posy = c_3 + l_3.zpp_inner.y * n_20;
        var d_3 = this.vec3;
        if (d_3 != null && d_3.zpp_disp)
            throw Error("Vec3 has been disposed and cannot be used!");
        var f_3 = d_3.zpp_inner;
        f_3._validate != null && f_3._validate();
        var p_3 = d_3.zpp_inner.z * t_25.iinertia;
        if (t_25.rot += p_3, p_3 * p_3 > 1e-4)
            t_25.axisx = Math.sin(t_25.rot), t_25.axisy = Math.cos(t_25.rot);
        else {
            var e_51 = p_3 * p_3, n_21 = 1 - .5 * e_51, r_19 = 1 - e_51 * e_51 / 8, i_13 = (n_21 * t_25.axisx + p_3 * t_25.axisy) * r_19;
            t_25.axisy = (n_21 * t_25.axisy - p_3 * t_25.axisx) * r_19, t_25.axisx = i_13;
        }
    } return !1; };
    ae.prototype.draw = function (e) { this.outer_zn.__draw(e); };
    return ae;
}(t.bn)), k = (function () {
    function k() {
        this.outer = null, this.ignore = !1, this.group = null, this.groups = null, this.wrap_groups = null, this.interactors = null, this.wrap_interactors = null, this.depth = 0, this.groups = new t.mn, this.interactors = new t.T;
    }
    k.prototype.setGroup = function (e) { this.group !== e && (this.group != null && (this.group.groups.remove(this), this.depth = 0, this.group.invalidate(!0)), this.group = e, e == null ? this.invalidate(!0) : (e.groups.add(this), this.depth = e.depth + 1, e.invalidate(!0))); };
    k.prototype.invalidate = function (e) { if (e == null && (e = !1), !(e || this.ignore))
        return; var t = this.interactors.head; for (; t != null;) {
        var e_52 = t.elt;
        e_52.ibody == null ? e_52.ishape == null ? e_52.icompound.wake() : e_52.ishape.body.wake() : e_52.ibody.wake(), t = t.next;
    } var n = this.groups.head; for (; n != null;)
        n.elt.invalidate(e), n = n.next; };
    k.prototype.addInteractor = function (e) { this.interactors.add(e); };
    k.prototype.remInteractor = function (e, t) { this.interactors.remove(e); };
    return k;
}()), k._wrapFn = null, A = (function () {
    function A() {
        this.rank = 0, this.out = !1, this.next = null, this.parent = this;
    }
    A.prototype.free = function () { this.parent = this; };
    return A;
}()), A.zpp_pool = null, j = (function () {
    function j() {
        this.p1 = null, this.key1 = 0, this.okey1 = 0, this.p2 = null, this.key2 = 0, this.okey2 = 0, this.pr = null, this.keyr = 0, this.okeyr = 0, this.pd = null, this.span1 = null, this.span2 = null, this.spanr = null, this.next = null;
    }
    j.prototype.free = function () { this.p1 = this.p2 = this.pr = this.pd = null, this.span1 = this.span2 = this.spanr = null; };
    return j;
}()), j.zpp_pool = null, M = (function () {
    function e() {
    }
    e._init = function (t) { e._nape = t, e.me = new e, e.look_march = [-1, 224, 56, 216, 14, -1, 54, 214, 131, 99, -1, 91, 141, 109, 181, 85]; };
    e._allocVert = function (e, n) { return t.Tn.get(e, n); };
    e._freeVert = function (e) { t.mr(e), e.prev = e.next = null, e.next = t.Tn.zpp_pool, t.Tn.zpp_pool = e; };
    e._allocSpan = function () { var e; return A.zpp_pool == null ? e = new A : (e = A.zpp_pool, A.zpp_pool = e.next, e.next = null), e.out = !1, e.rank = 0, e; };
    e._allocPair = function () { var e; return j.zpp_pool == null ? e = new j : (e = j.zpp_pool, j.zpp_pool = e.next, e.next = null), e; };
    e._freePair = function (e) { e.p1 = e.p2 = e.pr = e.pd = null, e.span1 = e.span2 = e.spanr = null, e.next = j.zpp_pool, j.zpp_pool = e; };
    e._findRoot = function (e) { if (e == e.parent)
        return e; var t = e, n = null; for (; t != t.parent;) {
        var e_53 = t.parent;
        t.parent = n, n = t, t = e_53;
    } for (; n != null;) {
        var e_54 = n.parent;
        n.parent = t, n = e_54;
    } return t; };
    e._union = function (t, n) { var r = e._findRoot(t), i = e._findRoot(n); r != i && (r.rank < i.rank ? r.parent = i : r.rank > i.rank ? i.parent = r : (i.parent = r, r.rank++)); };
    e._pushVert = function (e, t) { return e == null ? t.prev = t.next = t : (t.prev = e, t.next = e.next, e.next.prev = t, e.next = t), t; };
    e._isDegenKey = function (e) { return e == 1 || e == 4 || e == 16 || e == 64 || e == 3 || e == 12 || e == 48 || e == 192 || e == 129 || e == 6 || e == 24 || e == 96 || e == 5 || e == 20 || e == 80 || e == 65 || e == 17 || e == 68; };
    e.ISO = function (e, t, n) { return e(t, n); };
    e.run = function (t, n, r, i, a, o, s, c, l) { if (o != null && o.zpp_disp)
        throw Error("Vec2 has been disposed and cannot be used!"); var u = o.zpp_inner; u._validate != null && u._validate(); var d = (i - n) / o.zpp_inner.x, f = d | 0; if (o != null && o.zpp_disp)
        throw Error("Vec2 has been disposed and cannot be used!"); u = o.zpp_inner, u._validate != null && u._validate(); var p = (a - r) / o.zpp_inner.y, m = p | 0; d != f && ++f, p != m && ++m, c && (e.map == null ? e.map = new te(f, m) : e.map.resize(f, m, null)), e.isos == null ? e.isos = new C(f + 1, m + 1) : e.isos.resize(f + 1, m + 1, 0); for (var s_4 = 0; s_4 < m + 1; s_4++) {
        var c_4 = void 0;
        if (s_4 == 0)
            c_4 = r;
        else if (s_4 <= m) {
            if (o != null && o.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!");
            var e_55 = o.zpp_inner;
            e_55._validate != null && e_55._validate(), c_4 = r + o.zpp_inner.y * s_4;
        }
        else
            c_4 = a;
        for (var r_20 = 0; r_20 < f + 1; r_20++) {
            var a_9 = void 0;
            if (r_20 == 0)
                a_9 = n;
            else if (r_20 <= f) {
                if (o != null && o.zpp_disp)
                    throw Error("Vec2 has been disposed and cannot be used!");
                var e_56 = o.zpp_inner;
                e_56._validate != null && e_56._validate(), a_9 = n + o.zpp_inner.x * r_20;
            }
            else
                a_9 = i;
            var l_4 = e.isos, u_4 = t(a_9, c_4);
            l_4.list[s_4 * l_4.width + r_20] = u_4;
        }
    } e.ints == null ? e.ints = new ee(f + 1, (m << 1) + 1) : e.ints.resize(f + 1, (m << 1) + 1, null); var h = null; c && (h = e._allocSpan(), h.next = null); var g = r; for (var u_5 = 0; u_5 < m; u_5++) {
        var d_4 = g, p_4 = void 0;
        if (u_5 == m - 1)
            p_4 = a;
        else {
            if (o != null && o.zpp_disp)
                throw Error("Vec2 has been disposed and cannot be used!");
            var e_57 = o.zpp_inner;
            e_57._validate != null && e_57._validate(), p_4 = r + o.zpp_inner.y * (u_5 + 1);
        }
        g = p_4;
        var _1 = n, v_1 = null;
        for (var r_21 = 0; r_21 < f; r_21++) {
            var a_10 = _1, g_1 = void 0;
            if (r_21 == f - 1)
                g_1 = i;
            else {
                if (o != null && o.zpp_disp)
                    throw Error("Vec2 has been disposed and cannot be used!");
                var e_58 = o.zpp_inner;
                e_58._validate != null && e_58._validate(), g_1 = n + o.zpp_inner.x * (r_21 + 1);
            }
            _1 = g_1;
            var y_1 = r_21 == 0 || !c, b_1 = u_5 == 0 || !c, x_1 = r_21 == f - 1 || !c, S_1 = u_5 == m - 1 || !c, C_1 = e.me.marchSquare(t, e.isos, e.ints, a_10, d_4, g_1, p_4, r_21, u_5, y_1, b_1, x_1, S_1, s);
            if (C_1 == null)
                v_1 = null;
            else if (c) {
                var t_26 = C_1.p2 != null && C_1.okey2 != 14 ? C_1.p2 : C_1.p1;
                C_1.pd = (t_26 == C_1.p2 ? C_1.okey2 : C_1.okey1) & 128 ? t_26.prev.prev : t_26.prev;
                var n_22 = e.map;
                n_22.list[u_5 * n_22.width + r_21] = C_1;
                var i_14 = void 0;
                if (v_1 != null) {
                    var e_59 = C_1.key1, t_27 = e_59 & 1 | (e_59 & 192) >> 5, n_23 = 0;
                    t_27 & 1 && ++n_23, t_27 & 2 && ++n_23, t_27 & 4 && ++n_23, i_14 = n_23 >= 2;
                }
                else
                    i_14 = !1;
                i_14 ? (e.me.combLR(v_1, C_1), C_1.span1 = v_1.spanr) : (C_1.span1 = e._allocSpan(), C_1.span1.next = h, h = C_1.span1), C_1.p2 == null ? C_1.spanr = C_1.span1 : (C_1.span2 = e._allocSpan(), C_1.span2.next = h, h = C_1.span2, C_1.spanr = C_1.span2);
                var a_11 = (C_1.keyr & 28) >> 2, o_8 = 0;
                a_11 & 1 && ++o_8, a_11 & 2 && ++o_8, a_11 & 4 && ++o_8, v_1 = o_8 >= 2 ? C_1 : null;
            }
            else
                e.me.output(l, C_1.p1), C_1.p2 != null && e.me.output(l, C_1.p2), e._freePair(C_1);
        }
    } if (c) {
        for (var t_28 = 1; t_28 < m; t_28++) {
            var n_24 = null;
            for (var r_22 = 0; r_22 < f; r_22++) {
                var i_15 = e.map, a_12 = i_15.list[t_28 * i_15.width + r_22];
                if (a_12 == null) {
                    n_24 = null;
                    continue;
                }
                var o_9 = (a_12.p2 != null && a_12.okey2 == 14 ? a_12.okey2 : a_12.okey1) & 7, s_5 = 0;
                if (o_9 & 1 && ++s_5, o_9 & 2 && ++s_5, o_9 & 4 && ++s_5, s_5 < 2) {
                    n_24 = null;
                    continue;
                }
                var c_5 = e.map, l_5 = c_5.list[(t_28 - 1) * c_5.width + r_22];
                if (l_5 == null) {
                    n_24 = null;
                    continue;
                }
                var u_6 = ((l_5.p2 != null && l_5.okey2 == 56 ? l_5.okey2 : l_5.okey1) & 112) >> 4, d_5 = 0;
                if (u_6 & 1 && ++d_5, u_6 & 2 && ++d_5, u_6 & 4 && ++d_5, d_5 < 2) {
                    n_24 = null;
                    continue;
                }
                var f_4 = l_5.p2 != null && l_5.okey2 == 56 ? l_5.span2 : l_5.span1, p_5 = a_12.p2 != null && a_12.okey2 == 14 ? a_12.span2 : a_12.span1;
                e._findRoot(f_4) == e._findRoot(p_5) ? n_24 != p_5 && e.me.combUD_virtual(l_5, a_12) : (e._union(f_4, p_5), e.me.combUD(l_5, a_12)), n_24 = (p_5 == a_12.span2 ? a_12.okey2 : a_12.okey1) & 4 ? p_5 : null;
            }
        }
        for (var t_29 = 0; t_29 < m; t_29++)
            for (var n_25 = 0; n_25 < f; n_25++) {
                var r_23 = e.map, i_16 = r_23.list[t_29 * r_23.width + n_25];
                if (i_16 == null)
                    continue;
                var a_13 = e._findRoot(i_16.span1);
                a_13.out || (a_13.out = !0, e.me.output(l, i_16.p1)), i_16.p2 != null && (a_13 = e._findRoot(i_16.span2), a_13.out || (a_13.out = !0, e.me.output(l, i_16.p2))), e._freePair(i_16), r_23.list[t_29 * r_23.width + n_25] = null;
            }
        for (; h != null;) {
            var e_60 = h;
            h = e_60.next;
            var t_30 = e_60;
            t_30.parent = t_30, t_30.next = A.zpp_pool, A.zpp_pool = t_30;
        }
    } };
    e._dropRepeatedVertices = function (e) { if (e == null)
        return null; var n = e; for (; n.next != n;) {
        var r_24 = n.next, i_17 = r_24.x - n.x, a_14 = r_24.y - n.y;
        if (i_17 * i_17 + a_14 * a_14 < t.q.epsilon * t.q.epsilon)
            r_24.forced && (n.forced = !0), n.next = r_24.next, r_24.next.prev = n, r_24.next = r_24.prev = null, r_24 == e && (e = n);
        else if (n = r_24, n == e)
            break;
    } return e; };
    e.prototype.output = function (n, r) { var i = e._nape; r = e._dropRepeatedVertices(r); var a; if (r == null || r.next == r || r.next == r.prev)
        a = !0;
    else {
        var e_61 = 0, n_26 = r, i_18 = r;
        if (n_26 != null) {
            var t_31 = n_26;
            for (;;) {
                var n_27 = t_31;
                if (e_61 += n_27.x * (n_27.next.y - n_27.prev.y), t_31 = t_31.next, t_31 == i_18)
                    break;
            }
        }
        var o_10 = e_61 * .5;
        a = o_10 * o_10 < t.q.epsilon * t.q.epsilon;
    } if (a) {
        for (; r != null;)
            if (r != null && r.prev == r)
                r.next = r.prev = null, r = null;
            else {
                var e_62 = r.next;
                r.prev.next = r.next, r.next.prev = r.prev, r.next = r.prev = null, r = e_62;
            }
        return;
    } var o = i.geom.GeomPoly.get(); o.zpp_inner.vertices = r; var s = n; s.zpp_inner.reverse_flag ? s.push(o) : s.unshift(o); };
    e.prototype.combLR = function (t, n) { var r = t.pr, i = t.okeyr & 7, a = i == 0 ? r : i == 3 ? r.next.next : r.next, o = n.p1, s = n.okey1 & 1 ? o : o.prev, c = a.next, l = s.prev; t.keyr & 4 ? (n.pr == n.p1 && (n.pr = a.prev), n.p1 = a.prev, a.prev.next = s.next, s.next.prev = a.prev, e._freeVert(a)) : (a.next = s.next, s.next.prev = a), e._freeVert(s), t.keyr & 16 ? (n.pd = c.next, c.next.prev = l.prev, l.prev.next = c.next, e._freeVert(c)) : (c.prev = l.prev, l.prev.next = c), e._freeVert(l); };
    e.prototype.combUD = function (t, n) { var r = t.pd, i = n.p2 != null && n.key2 == 14 ? n.p2 : n.p1, a = r.prev, o = i.next; i.next = r.next, r.next.prev = i, e._freeVert(r), o.prev = a.prev, a.prev.next = o, a == t.p1 && (t.p1 = o), e._freeVert(a); };
    e.prototype.combUD_virtual = function (e, t) { var n = e.pd, r = t.p2 != null && t.key2 == 14 ? t.p2 : t.p1, i = n.prev, a = r.next; n.forced = r.forced = i.forced = a.forced = !0; };
    e.prototype._buildPoly = function (t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v, y) { var b = null; for (var n_28 = 0; n_28 < 8; n_28++)
        if (t & 1 << n_28) {
            var x_2 = void 0;
            if (n_28 == 0)
                x_2 = e._allocVert(i, a), (m || h) && (x_2.forced = !0);
            else if (n_28 == 2)
                x_2 = e._allocVert(o, a), (g || h) && (x_2.forced = !0);
            else if (n_28 == 4)
                x_2 = e._allocVert(o, s), (g || _) && (x_2.forced = !0);
            else if (n_28 == 6)
                x_2 = e._allocVert(i, s), (m || _) && (x_2.forced = !0);
            else if (n_28 == 1) {
                if (x_2 = r.list[(l << 1) * r.width + c], x_2 == null) {
                    var t_32 = this.xlerp(i, o, a, u, d, v, y);
                    x_2 = e._allocVert(t_32, a), r.list[(l << 1) * r.width + c] = x_2;
                }
                else
                    x_2 = e._allocVert(x_2.x, x_2.y);
                h && (x_2.forced = !0), (x_2.x == i || x_2.x == o) && (x_2.x == i && t & 1 || x_2.x == o && t & 4) && (t ^= 2);
            }
            else if (n_28 == 5) {
                if (x_2 = r.list[((l << 1) + 2) * r.width + c], x_2 == null) {
                    var t_33 = this.xlerp(i, o, s, p, f, v, y);
                    x_2 = e._allocVert(t_33, s), r.list[((l << 1) + 2) * r.width + c] = x_2;
                }
                else
                    x_2 = e._allocVert(x_2.x, x_2.y);
                _ && (x_2.forced = !0), (x_2.x == i || x_2.x == o) && (x_2.x == i && t & 64 || x_2.x == o && t & 16) && (t ^= 32);
            }
            else if (n_28 == 3) {
                if (x_2 = r.list[((l << 1) + 1) * r.width + (c + 1)], x_2 == null) {
                    var t_34 = this.ylerp(a, s, o, d, f, v, y);
                    x_2 = e._allocVert(o, t_34), r.list[((l << 1) + 1) * r.width + (c + 1)] = x_2;
                }
                else
                    x_2 = e._allocVert(x_2.x, x_2.y);
                g && (x_2.forced = !0), (x_2.y == a || x_2.y == s) && (x_2.y == a && t & 4 || x_2.y == s && t & 16) && (t ^= 8);
            }
            else {
                if (x_2 = r.list[((l << 1) + 1) * r.width + c], x_2 == null) {
                    var t_35 = this.ylerp(a, s, i, u, p, v, y);
                    x_2 = e._allocVert(i, t_35), r.list[((l << 1) + 1) * r.width + c] = x_2;
                }
                else
                    x_2 = e._allocVert(x_2.x, x_2.y);
                m && (x_2.forced = !0), (x_2.y == a || x_2.y == s) && (x_2.y == a && t & 1 || x_2.y == s && t & 64) && (t ^= 128);
            }
            b = e._pushVert(b, x_2);
        } return b != null && (b = b.next), { head: b, val: t }; };
    e.prototype.marchSquare = function (t, n, r, i, a, o, s, c, l, u, d, f, p, m) { var h = 0, g = n.list[l * n.width + c]; g < 0 && (h |= 8); var _ = n.list[l * n.width + (c + 1)]; _ < 0 && (h |= 4); var v = n.list[(l + 1) * n.width + (c + 1)]; v < 0 && (h |= 2); var y = n.list[(l + 1) * n.width + c]; if (y < 0 && (h |= 1), h == 0)
        return null; var b = e._allocPair(); if (h != 10 && h != 5) {
        var x_3 = e.look_march[h];
        b.okey1 = x_3;
        var S_2 = this._buildPoly(x_3, n, r, i, a, o, s, c, l, g, _, v, y, u, d, f, p, t, m);
        b.p1 = S_2.head, x_3 = S_2.val, b.key1 = x_3, e._isDegenKey(x_3) && (x_3 = 0, b.key1 = 0, b.p1 = null), x_3 == 0 ? b = null : (b.pr = b.p1, b.okeyr = b.okey1, b.keyr = b.key1);
    }
    else {
        var x_4 = t(.5 * (i + o), .5 * (a + s)) < 0;
        if (h == 10) {
            if (x_4) {
                var h_1 = 187;
                b.okey1 = h_1;
                var x_5 = this._buildPoly(h_1, n, r, i, a, o, s, c, l, g, _, v, y, u, d, f, p, t, m);
                b.p1 = x_5.head, h_1 = x_5.val, b.key1 = h_1, e._isDegenKey(h_1) && (h_1 = 0, b.key1 = 0, b.p1 = null), h_1 == 0 ? b = null : (b.pr = b.p1, b.okeyr = b.okey1, b.keyr = b.key1);
            }
            else {
                var h_2 = 131;
                b.okey1 = h_2;
                var x_6 = this._buildPoly(h_2, n, r, i, a, o, s, c, l, g, _, v, y, u, d, f, p, t, m);
                if (b.p1 = x_6.head, h_2 = x_6.val, b.key1 = h_2, e._isDegenKey(h_2) && (h_2 = 0, b.key1 = 0, b.p1 = null), h_2 != 0) {
                    var h_3 = 56;
                    b.okey2 = h_3, h_3 = this._buildPoly2(h_3, n, r, i, a, o, s, c, l, g, _, v, y, u, d, f, p, t, m, b).val, b.key2 = h_3, e._isDegenKey(h_3) && (h_3 = 0, b.key2 = 0, b.p2 = null), h_3 == 0 ? (b.pr = b.p1, b.okeyr = b.okey1, b.keyr = b.key1) : (b.pr = b.p2, b.okeyr = b.okey2, b.keyr = b.key2);
                }
                else {
                    var h_4 = 56;
                    b.okey1 = h_4;
                    var x_7 = this._buildPoly(h_4, n, r, i, a, o, s, c, l, g, _, v, y, u, d, f, p, t, m);
                    b.p1 = x_7.head, h_4 = x_7.val, b.key1 = h_4, e._isDegenKey(h_4) && (h_4 = 0, b.key1 = 0, b.p1 = null), h_4 == 0 ? b = null : (b.pr = b.p1, b.okeyr = b.okey1, b.keyr = b.key1);
                }
            }
        }
        else if (x_4) {
            var h_5 = 238;
            b.okey1 = h_5;
            var x_8 = this._buildPoly(h_5, n, r, i, a, o, s, c, l, g, _, v, y, u, d, f, p, t, m);
            b.p1 = x_8.head, h_5 = x_8.val, b.key1 = h_5, e._isDegenKey(h_5) && (h_5 = 0, b.key1 = 0, b.p1 = null), h_5 == 0 ? b = null : (b.pr = b.p1, b.okeyr = b.okey1, b.keyr = b.key1);
        }
        else {
            var h_6 = 224;
            b.okey1 = h_6;
            var x_9 = this._buildPoly(h_6, n, r, i, a, o, s, c, l, g, _, v, y, u, d, f, p, t, m);
            if (b.p1 = x_9.head, h_6 = x_9.val, b.key1 = h_6, e._isDegenKey(h_6) && (h_6 = 0, b.key1 = 0, b.p1 = null), h_6 != 0) {
                var h_7 = 14;
                b.okey2 = h_7, h_7 = this._buildPoly2(h_7, n, r, i, a, o, s, c, l, g, _, v, y, u, d, f, p, t, m, b).val, b.key2 = h_7, e._isDegenKey(h_7) && (h_7 = 0, b.key2 = 0, b.p2 = null), h_7 == 0 ? (b.pr = b.p1, b.okeyr = b.okey1, b.keyr = b.key1) : (b.pr = b.p2, b.okeyr = b.okey2, b.keyr = b.key2);
            }
            else {
                var h_8 = 14;
                b.okey1 = h_8;
                var x_10 = this._buildPoly(h_8, n, r, i, a, o, s, c, l, g, _, v, y, u, d, f, p, t, m);
                b.p1 = x_10.head, h_8 = x_10.val, b.key1 = h_8, e._isDegenKey(h_8) && (h_8 = 0, b.key1 = 0, b.p1 = null), h_8 == 0 ? b = null : (b.pr = b.p1, b.okeyr = b.okey1, b.keyr = b.key1);
            }
        }
    } return b; };
    e.prototype._buildPoly2 = function (t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v, y, b) { for (var n_29 = 0; n_29 < 8; n_29++)
        if (t & 1 << n_29) {
            var x_11 = void 0;
            if (n_29 == 0)
                x_11 = e._allocVert(i, a), (m || h) && (x_11.forced = !0);
            else if (n_29 == 2)
                x_11 = e._allocVert(o, a), (g || h) && (x_11.forced = !0);
            else if (n_29 == 4)
                x_11 = e._allocVert(o, s), (g || _) && (x_11.forced = !0);
            else if (n_29 == 6)
                x_11 = e._allocVert(i, s), (m || _) && (x_11.forced = !0);
            else if (n_29 == 1) {
                if (x_11 = r.list[(l << 1) * r.width + c], x_11 == null) {
                    var t_36 = this.xlerp(i, o, a, u, d, v, y);
                    x_11 = e._allocVert(t_36, a), r.list[(l << 1) * r.width + c] = x_11;
                }
                else
                    x_11 = e._allocVert(x_11.x, x_11.y);
                h && (x_11.forced = !0), (x_11.x == i || x_11.x == o) && (x_11.x == i && t & 1 || x_11.x == o && t & 4) && (t ^= 2);
            }
            else if (n_29 == 5) {
                if (x_11 = r.list[((l << 1) + 2) * r.width + c], x_11 == null) {
                    var t_37 = this.xlerp(i, o, s, p, f, v, y);
                    x_11 = e._allocVert(t_37, s), r.list[((l << 1) + 2) * r.width + c] = x_11;
                }
                else
                    x_11 = e._allocVert(x_11.x, x_11.y);
                _ && (x_11.forced = !0), (x_11.x == i || x_11.x == o) && (x_11.x == i && t & 64 || x_11.x == o && t & 16) && (t ^= 32);
            }
            else if (n_29 == 3) {
                if (x_11 = r.list[((l << 1) + 1) * r.width + (c + 1)], x_11 == null) {
                    var t_38 = this.ylerp(a, s, o, d, f, v, y);
                    x_11 = e._allocVert(o, t_38), r.list[((l << 1) + 1) * r.width + (c + 1)] = x_11;
                }
                else
                    x_11 = e._allocVert(x_11.x, x_11.y);
                g && (x_11.forced = !0), (x_11.y == a || x_11.y == s) && (x_11.y == a && t & 4 || x_11.y == s && t & 16) && (t ^= 8);
            }
            else {
                if (x_11 = r.list[((l << 1) + 1) * r.width + c], x_11 == null) {
                    var t_39 = this.ylerp(a, s, i, u, p, v, y);
                    x_11 = e._allocVert(i, t_39), r.list[((l << 1) + 1) * r.width + c] = x_11;
                }
                else
                    x_11 = e._allocVert(x_11.x, x_11.y);
                m && (x_11.forced = !0), (x_11.y == a || x_11.y == s) && (x_11.y == a && t & 1 || x_11.y == s && t & 64) && (t ^= 128);
            }
            var S_3 = x_11;
            b.p2 == null ? b.p2 = S_3.prev = S_3.next = S_3 : (S_3.prev = b.p2, S_3.next = b.p2.next, b.p2.next.prev = S_3, b.p2.next = S_3), b.p2 = S_3;
        } return b.p2 != null && (b.p2 = b.p2.next), { val: t }; };
    e.prototype.xlerp = function (e, n, r, i, a, o, s) { var c; if (i == 0)
        c = e;
    else if (a == 0)
        c = n;
    else {
        var r_25 = i - a, o_11 = r_25 * r_25 < t.q.epsilon * t.q.epsilon ? .5 : i / r_25;
        o_11 < 0 ? o_11 = 0 : o_11 > 1 && (o_11 = 1), c = e + o_11 * (n - e);
    } for (; s-- != 0 && e < c && c < n;) {
        var s_6 = o(c, r);
        if (s_6 == 0)
            break;
        if (i * s_6 < 0 ? (n = c, a = s_6) : (e = c, i = s_6), i == 0)
            c = e;
        else if (a == 0)
            c = n;
        else {
            var r_26 = i - a, o_12 = r_26 * r_26 < t.q.epsilon * t.q.epsilon ? .5 : i / r_26;
            o_12 < 0 ? o_12 = 0 : o_12 > 1 && (o_12 = 1), c = e + o_12 * (n - e);
        }
    } return c; };
    e.prototype.ylerp = function (e, n, r, i, a, o, s) { var c; if (i == 0)
        c = e;
    else if (a == 0)
        c = n;
    else {
        var r_27 = i - a, o_13 = r_27 * r_27 < t.q.epsilon * t.q.epsilon ? .5 : i / r_27;
        o_13 < 0 ? o_13 = 0 : o_13 > 1 && (o_13 = 1), c = e + o_13 * (n - e);
    } for (; s-- != 0 && e < c && c < n;) {
        var s_7 = o(r, c);
        if (s_7 == 0)
            break;
        if (i * s_7 < 0 ? (n = c, a = s_7) : (e = c, i = s_7), i == 0)
            c = e;
        else if (a == 0)
            c = n;
        else {
            var r_28 = i - a, o_14 = r_28 * r_28 < t.q.epsilon * t.q.epsilon ? .5 : i / r_28;
            o_14 < 0 ? o_14 = 0 : o_14 > 1 && (o_14 = 1), c = e + o_14 * (n - e);
        }
    } return c; };
    return e;
}()), M.isos = null, M.ints = null, M.map = null, M._nape = null, N = M, P = (function () {
    function e() {
        this.outer = null, this.a = 0, this.b = 0, this.c = 0, this.d = 0, this.tx = 0, this.ty = 0, this._invalidate = null, this.next = null;
    }
    e.get = function () { var t; return e.zpp_pool == null ? t = new e : (t = e.zpp_pool, e.zpp_pool = t.next, t.next = null), t; };
    e.identity = function () { var t = e.get(); return t.setas(1, 0, 0, 1, 0, 0), t; };
    e.prototype.wrapper = function () { if (this.outer == null) {
        if (e._wrapFn)
            this.outer = e._wrapFn(this);
        else {
            this.outer = new e._nape.geom.Mat23;
            var t_40 = this.outer.zpp_inner;
            t_40.next = e.zpp_pool, e.zpp_pool = t_40, this.outer.zpp_inner = this;
        }
    } return this.outer; };
    e.prototype.invalidate = function () { this._invalidate != null && this._invalidate(); };
    e.prototype.set = function (e) { this.setas(e.a, e.b, e.c, e.d, e.tx, e.ty); };
    e.prototype.setas = function (e, t, n, r, i, a) { this.tx = i, this.ty = a, this.a = e, this.b = t, this.c = n, this.d = r; };
    return e;
}()), P._nape = null, P._wrapFn = null, P.zpp_pool = null, F = P, oe = (function () {
    function e() {
        var _this = this;
        this.zip_dir = !1, this.absnormaly = 0, this.absnormalx = 0, this.normaly = 0, this.normalx = 0, this.idiry = 0, this.idirx = 0, this.diry = 0, this.dirx = 0, this.originy = 0, this.originx = 0, this.userData = null, this.maxdist = 0, this.direction = null, this.origin = null;
        var e = t.E(), n = e.geom.Vec2.get(0, 0);
        this.origin = n, this.origin.zpp_inner._invalidate = function (e) { return _this.origin_invalidate(e); };
        var r = e.geom.Vec2.get(0, 0);
        this.direction = r, this.direction.zpp_inner._invalidate = function (e) { return _this.direction_invalidate(e); }, this.originx = 0, this.originy = 0, this.dirx = 0, this.diry = 0, this.zip_dir = !1;
    }
    e.prototype.origin_invalidate = function (e) { this.originx = e.x, this.originy = e.y; };
    e.prototype.direction_invalidate = function (e) { this.dirx = e.x, this.diry = e.y, this.zip_dir = !0; };
    e.prototype.validate_dir = function () { if (this.zip_dir) {
        if (this.zip_dir = !1, this.dirx * this.dirx + this.diry * this.diry < t.q.epsilon)
            throw Error("Ray::direction is degenerate");
        var e_63 = this.dirx * this.dirx + this.diry * this.diry, n_30 = 1 / Math.sqrt(e_63);
        this.dirx *= n_30, this.diry *= n_30, this.idirx = 1 / this.dirx, this.idiry = 1 / this.diry, this.normalx = -this.diry, this.normaly = this.dirx;
        var r_29 = this.normalx;
        this.absnormalx = r_29 < 0 ? -r_29 : r_29;
        var i_19 = this.normaly;
        this.absnormaly = i_19 < 0 ? -i_19 : i_19;
    } };
    e.prototype.rayAABB = function () { var e = this.originx, n = e, r = this.originy, i = r; if (this.maxdist >= 1 / 0 ? (this.dirx > 0 ? n = 1 / 0 : this.dirx < 0 && (n = -1 / 0), this.diry > 0 ? i = 1 / 0 : this.diry < 0 && (i = -1 / 0)) : (n += this.maxdist * this.dirx, i += this.maxdist * this.diry), n < e) {
        var t_41 = e;
        e = n, n = t_41;
    } if (i < r) {
        var e_64 = r;
        r = i, i = e_64;
    } return t.xt.get(e, r, n, i); };
    e.prototype.aabbtest = function (e) { var t = this.normalx * (this.originx - .5 * (e.minx + e.maxx)) + this.normaly * (this.originy - .5 * (e.miny + e.maxy)), n = this.absnormalx * .5 * (e.maxx - e.minx) + this.absnormaly * .5 * (e.maxy - e.miny), r = t; return (r < 0 ? -r : r) < n; };
    e.prototype.aabbsect = function (e) { var t = this.originx >= e.minx && this.originx <= e.maxx, n = this.originy >= e.miny && this.originy <= e.maxy; if (t && n)
        return 0; {
        var t_42 = -1;
        for (; !(this.dirx >= 0 && this.originx >= e.maxx) && !(this.dirx <= 0 && this.originx <= e.minx || this.diry >= 0 && this.originy >= e.maxy || this.diry <= 0 && this.originy <= e.miny);) {
            if (this.dirx > 0) {
                var n_31 = (e.minx - this.originx) * this.idirx;
                if (n_31 >= 0 && n_31 <= this.maxdist) {
                    var r_30 = this.originy + n_31 * this.diry;
                    if (r_30 >= e.miny && r_30 <= e.maxy) {
                        t_42 = n_31;
                        break;
                    }
                }
            }
            else if (this.dirx < 0) {
                var n_32 = (e.maxx - this.originx) * this.idirx;
                if (n_32 >= 0 && n_32 <= this.maxdist) {
                    var r_31 = this.originy + n_32 * this.diry;
                    if (r_31 >= e.miny && r_31 <= e.maxy) {
                        t_42 = n_32;
                        break;
                    }
                }
            }
            if (this.diry > 0) {
                var n_33 = (e.miny - this.originy) * this.idiry;
                if (n_33 >= 0 && n_33 <= this.maxdist) {
                    var r_32 = this.originx + n_33 * this.dirx;
                    if (r_32 >= e.minx && r_32 <= e.maxx) {
                        t_42 = n_33;
                        break;
                    }
                }
            }
            else if (this.diry < 0) {
                var n_34 = (e.maxy - this.originy) * this.idiry;
                if (n_34 >= 0 && n_34 <= this.maxdist) {
                    var r_33 = this.originx + n_34 * this.dirx;
                    if (r_33 >= e.minx && r_33 <= e.maxx) {
                        t_42 = n_34;
                        break;
                    }
                }
            }
            break;
        }
        return t_42;
    } };
    e._allocVec2 = function (e, n) { return t.E().geom.Vec2.get(e, n); };
    e.prototype._circleNormal = function (e, t, n) { var r = this.originx + this.dirx * e, i = this.originy + this.diry * e; r -= t.worldCOMx, i -= t.worldCOMy; var a = r * r + i * i, o = 1 / Math.sqrt(a); return r *= o, i *= o, n && (r = -r, i = -i), { nx: r, ny: i }; };
    e._insertSorted = function (e, t) { var n = null, r = e.zpp_inner.inner.head; for (; r != null;) {
        var e_65 = r.elt;
        if (t.zpp_inner.next != null || e_65.zpp_inner.next != null)
            throw Error("This object has been disposed of and cannot be used");
        if (t.zpp_inner.toiDistance < e_65.zpp_inner.toiDistance)
            break;
        n = r, r = r.next;
    } e.zpp_inner.inner.insert(n, t); };
    e.prototype.circlesect = function (n, r, i) { n.validate_worldCOM(); var a = this.originx - n.worldCOMx, o = this.originy - n.worldCOMy, s = this.dirx * this.dirx + this.diry * this.diry, c = 2 * (a * this.dirx + o * this.diry), l = a * a + o * o - n.radius * n.radius, u = c * c - 4 * s * l; if (u == 0) {
        var a_15 = -c / 2 * s;
        if ((!r || l > 0) && a_15 > 0 && a_15 < i && a_15 <= this.maxdist) {
            var r_34 = this._circleNormal(a_15, n, l <= 0), i_20 = e._allocVec2(r_34.nx, r_34.ny);
            return t.u.getRay(i_20, a_15, l <= 0, n.outer);
        }
        return null;
    } {
        u = Math.sqrt(u), s = 1 / (2 * s);
        var a_16 = (-c - u) * s, o_15 = (-c + u) * s;
        if (a_16 > 0) {
            if (a_16 < i && a_16 <= this.maxdist) {
                var r_35 = this._circleNormal(a_16, n, !1), i_21 = e._allocVec2(r_35.nx, r_35.ny);
                return t.u.getRay(i_21, a_16, !1, n.outer);
            }
            return null;
        }
        if (o_15 > 0 && r) {
            if (o_15 < i && o_15 <= this.maxdist) {
                var r_36 = this._circleNormal(o_15, n, !0), i_22 = e._allocVec2(r_36.nx, r_36.ny);
                return t.u.getRay(i_22, o_15, !0, n.outer);
            }
            return null;
        }
        return null;
    } };
    e.prototype.circlesect2 = function (n, r, i) { n.validate_worldCOM(); var a = this.originx - n.worldCOMx, o = this.originy - n.worldCOMy, s = this.dirx * this.dirx + this.diry * this.diry, c = 2 * (a * this.dirx + o * this.diry), l = a * a + o * o - n.radius * n.radius, u = c * c - 4 * s * l; if (u == 0) {
        var a_17 = -c / 2 * s;
        if ((!r || l > 0) && a_17 > 0 && a_17 <= this.maxdist) {
            var r_37 = this._circleNormal(a_17, n, l <= 0), o_16 = e._allocVec2(r_37.nx, r_37.ny), s_8 = t.u.getRay(o_16, a_17, l <= 0, n.outer);
            e._insertSorted(i, s_8);
        }
    }
    else {
        u = Math.sqrt(u), s = 1 / (2 * s);
        var a_18 = (-c - u) * s, o_17 = (-c + u) * s;
        if (a_18 > 0 && a_18 <= this.maxdist) {
            var r_38 = this._circleNormal(a_18, n, !1), o_18 = e._allocVec2(r_38.nx, r_38.ny), s_9 = t.u.getRay(o_18, a_18, !1, n.outer);
            e._insertSorted(i, s_9);
        }
        if (o_17 > 0 && o_17 <= this.maxdist && r) {
            var r_39 = this._circleNormal(o_17, n, !0), a_19 = e._allocVec2(r_39.nx, r_39.ny), s_10 = t.u.getRay(a_19, o_17, !0, n.outer);
            e._insertSorted(i, s_10);
        }
    } };
    e.prototype.polysect = function (n, r, i) { var a = i, o = null, s = n.edges.head, c = n.gverts.next, l = c, u = c.next; for (; u != null;) {
        var e_66 = u, n_35 = s.elt;
        if (r || n_35.gnormx * this.dirx + n_35.gnormy * this.diry < 0) {
            var n_36 = e_66.x - l.x, r_40 = e_66.y - l.y, i_23 = l.x - this.originx, c_6 = l.y - this.originy, u_7 = r_40 * this.dirx - n_36 * this.diry;
            if (u_7 * u_7 > t.q.epsilon) {
                u_7 = 1 / u_7;
                var e_67 = (r_40 * i_23 - n_36 * c_6) * u_7;
                if (e_67 > 0 && e_67 < a && e_67 <= this.maxdist) {
                    var n_37 = (this.diry * i_23 - this.dirx * c_6) * u_7;
                    n_37 > -t.q.epsilon && n_37 < 1 + t.q.epsilon && (a = e_67, o = s.elt);
                }
            }
        }
        s = s.next, l = e_66, u = u.next;
    } {
        u = n.gverts.next;
        var e_68 = u, i_24 = s.elt;
        if (r || i_24.gnormx * this.dirx + i_24.gnormy * this.diry < 0) {
            var n_38 = e_68.x - l.x, r_41 = e_68.y - l.y, i_25 = l.x - this.originx, c_7 = l.y - this.originy, u_8 = r_41 * this.dirx - n_38 * this.diry;
            if (u_8 * u_8 > t.q.epsilon) {
                u_8 = 1 / u_8;
                var e_69 = (r_41 * i_25 - n_38 * c_7) * u_8;
                if (e_69 > 0 && e_69 < a && e_69 <= this.maxdist) {
                    var n_39 = (this.diry * i_25 - this.dirx * c_7) * u_8;
                    n_39 > -t.q.epsilon && n_39 < 1 + t.q.epsilon && (a = e_69, o = s.elt);
                }
            }
        }
    } if (o != null) {
        var r_42 = o.gnormx, i_26 = o.gnormy, s_11 = r_42 * this.dirx + i_26 * this.diry > 0;
        s_11 && (r_42 = -r_42, i_26 = -i_26);
        var c_8 = e._allocVec2(r_42, i_26);
        return t.u.getRay(c_8, a, s_11, n.outer);
    } return null; };
    e.prototype.polysect2 = function (n, r, i) { var a = 1 / 0, o = -1, s = null, c = null, l = n.edges.head, u = n.gverts.next, d = u, f = u.next; for (; f != null;) {
        var e_70 = f, n_40 = l.elt;
        if (r || n_40.gnormx * this.dirx + n_40.gnormy * this.diry < 0) {
            var n_41 = e_70.x - d.x, r_43 = e_70.y - d.y, i_27 = d.x - this.originx, u_9 = d.y - this.originy, f_5 = r_43 * this.dirx - n_41 * this.diry;
            if (f_5 * f_5 > t.q.epsilon) {
                f_5 = 1 / f_5;
                var e_71 = (r_43 * i_27 - n_41 * u_9) * f_5;
                if (e_71 > 0 && e_71 <= this.maxdist && (e_71 < a || e_71 > o)) {
                    var n_42 = (this.diry * i_27 - this.dirx * u_9) * f_5;
                    n_42 > -t.q.epsilon && n_42 < 1 + t.q.epsilon && (e_71 < a && (a = e_71, s = l.elt), e_71 > o && (o = e_71, c = l.elt));
                }
            }
        }
        l = l.next, d = e_70, f = f.next;
    } {
        f = n.gverts.next;
        var e_72 = f, i_28 = l.elt;
        if (r || i_28.gnormx * this.dirx + i_28.gnormy * this.diry < 0) {
            var n_43 = e_72.x - d.x, r_44 = e_72.y - d.y, i_29 = d.x - this.originx, u_10 = d.y - this.originy, f_6 = r_44 * this.dirx - n_43 * this.diry;
            if (f_6 * f_6 > t.q.epsilon) {
                f_6 = 1 / f_6;
                var e_73 = (r_44 * i_29 - n_43 * u_10) * f_6;
                if (e_73 > 0 && e_73 <= this.maxdist && (e_73 < a || e_73 > o)) {
                    var n_44 = (this.diry * i_29 - this.dirx * u_10) * f_6;
                    n_44 > -t.q.epsilon && n_44 < 1 + t.q.epsilon && (e_73 < a && (a = e_73, s = l.elt), e_73 > o && (o = e_73, c = l.elt));
                }
            }
        }
    } if (s != null) {
        var r_45 = s.gnormx, o_19 = s.gnormy, c_9 = r_45 * this.dirx + o_19 * this.diry > 0;
        c_9 && (r_45 = -r_45, o_19 = -o_19);
        var l_6 = e._allocVec2(r_45, o_19), u_11 = t.u.getRay(l_6, a, c_9, n.outer);
        e._insertSorted(i, u_11);
    } if (c != null && s != c) {
        var r_46 = c.gnormx, a_20 = c.gnormy, s_12 = r_46 * this.dirx + a_20 * this.diry > 0;
        s_12 && (r_46 = -r_46, a_20 = -a_20);
        var l_7 = e._allocVec2(r_46, a_20), u_12 = t.u.getRay(l_7, o, s_12, n.outer);
        e._insertSorted(i, u_12);
    } };
    return e;
}()), oe.internal = !1, se = oe, I = (function () {
    function e() {
        this.space = null, this.is_sweep = !1, this.is_spatial_hash = !1, this.sweep = null, this.dynab = null, this.aabbShape = null, this.matrix = null, this.circShape = null;
    }
    e.prototype.insert = function (e) { this.is_sweep ? this.sweep.__insert(e) : this.dynab.__insert(e); };
    e.prototype.remove = function (e) { this.is_sweep ? this.sweep.__remove(e) : this.dynab.__remove(e); };
    e.prototype.sync = function (e) { this.is_sweep ? this.sweep.__sync(e) : this.dynab.__sync(e); };
    e.prototype.broadphase = function (e, t) { };
    e.prototype.clear = function () { };
    e.prototype.shapesUnderPoint = function (e, t, n, r) { return null; };
    e.prototype.bodiesUnderPoint = function (e, t, n, r) { return null; };
    e.prototype.updateAABBShape = function (n) { var r = e._nape; if (this.aabbShape == null) {
        t.st.BodyType_STATIC == null && (t.st.internal = !0, t.st.BodyType_STATIC = new r.phys.BodyType, t.st.internal = !1);
        var e_74 = new r.phys.Body(t.st.BodyType_STATIC).zpp_inner.wrap_shapes, i_30 = this.aabbShape = new r.shape.Polygon(r.shape.Polygon.rect(n.minx, n.miny, n.maxx - n.minx, n.maxy - n.miny));
        e_74.zpp_inner.reverse_flag ? e_74.push(i_30) : e_74.unshift(i_30);
    }
    else {
        var e_75 = this.aabbShape.localVerts;
        e_75.at(0).setxy(n.minx, n.miny), e_75.at(1).setxy(n.maxx, n.miny), e_75.at(2).setxy(n.maxx, n.maxy), e_75.at(3).setxy(n.minx, n.maxy);
    } this.aabbShape.zpp_inner.validate_aabb(), this.aabbShape.zpp_inner.polygon.validate_gaxi(); };
    e.prototype.shapesInAABB = function (e, t, n, r, i) { return null; };
    e.prototype.bodiesInAABB = function (e, t, n, r, i) { return null; };
    e.prototype.updateCircShape = function (n, r, i) { var a = e._nape; if (this.circShape == null) {
        t.st.BodyType_STATIC == null && (t.st.internal = !0, t.st.BodyType_STATIC = new a.phys.BodyType, t.st.internal = !1);
        var e_76 = new a.phys.Body(t.st.BodyType_STATIC).zpp_inner.wrap_shapes, o_20 = n, s_13 = r;
        s_13 == null && (s_13 = 0), o_20 == null && (o_20 = 0);
        var c_10 = a.geom.Vec2.get(o_20, s_13), l_8 = this.circShape = new a.shape.Circle(i, c_10);
        e_76.zpp_inner.reverse_flag ? e_76.push(l_8) : e_76.unshift(l_8);
    }
    else {
        var e_77 = this.circShape.zpp_inner.circle, t_43 = i / e_77.radius;
        this.matrix == null && (this.matrix = new a.geom.Mat23);
        var o_21 = this.matrix, s_14 = this.matrix;
        if (t_43 !== t_43)
            throw Error("Mat23::d cannot be NaN");
        s_14.zpp_inner.d = t_43;
        var c_11 = s_14.zpp_inner;
        c_11._invalidate != null && c_11._invalidate();
        var l_9 = s_14.zpp_inner.d;
        if (l_9 !== l_9)
            throw Error("Mat23::a cannot be NaN");
        o_21.zpp_inner.a = l_9;
        var u_13 = o_21.zpp_inner;
        u_13._invalidate != null && u_13._invalidate();
        var d_6 = this.matrix, f_7 = this.matrix;
        f_7.zpp_inner.c = 0;
        var p_6 = f_7.zpp_inner;
        p_6._invalidate != null && p_6._invalidate();
        var m_3 = f_7.zpp_inner.c;
        if (m_3 !== m_3)
            throw Error("Mat23::b cannot be NaN");
        d_6.zpp_inner.b = m_3;
        var h_9 = d_6.zpp_inner;
        h_9._invalidate != null && h_9._invalidate();
        var g_2 = this.matrix, _2 = n - t_43 * e_77.localCOMx;
        if (_2 !== _2)
            throw Error("Mat23::tx cannot be NaN");
        g_2.zpp_inner.tx = _2;
        var v_2 = g_2.zpp_inner;
        v_2._invalidate != null && v_2._invalidate();
        var y_2 = this.matrix, b_2 = r - t_43 * e_77.localCOMy;
        if (b_2 !== b_2)
            throw Error("Mat23::ty cannot be NaN");
        y_2.zpp_inner.ty = b_2;
        var x_12 = y_2.zpp_inner;
        x_12._invalidate != null && x_12._invalidate(), this.circShape.transform(this.matrix);
    } this.circShape.zpp_inner.validate_aabb(); };
    e.prototype.shapesInCircle = function (e, t, n, r, i, a) { return null; };
    e.prototype.bodiesInCircle = function (e, t, n, r, i, a) { return null; };
    e.prototype.validateShape = function (e) { e.type == 1 && e.polygon.validate_gaxi(), e.validate_aabb(), e.validate_worldCOM(); };
    e.prototype.shapesInShape = function (e, t, n, r) { return null; };
    e.prototype.bodiesInShape = function (e, t, n, r) { return null; };
    e.prototype.rayCast = function (e, t, n) { return null; };
    e.prototype.rayMultiCast = function (e, t, n, r) { return null; };
    return e;
}()), I._zpp = null, I._nape = null, L = I, R = (function () {
    function R() {
        this.aabb = null, this.shape = null, this.dyn = !1, this.parent = null, this.child1 = null, this.child2 = null, this.height = -1, this.rayt = 0, this.next = null, this.mnext = null, this.moved = !1, this.snext = null, this.synced = !1, this.first_sync = !1;
    }
    R.prototype.free = function () { this.height = -1; var e = this.aabb; e.free(), e.next = t.xt.zpp_pool, t.xt.zpp_pool = e, this.child1 = this.child2 = this.parent = null, this.next = null, this.snext = null, this.mnext = null; };
    return R;
}()), R.zpp_pool = null, z = (function () {
    function z() {
        this.n1 = null, this.n2 = null, this.first = !1, this.sleeping = !1, this.id = 0, this.di = 0, this.arb = null, this.next = null, this.gprev = null;
    }
    z.prototype.free = function () { this.n1 = this.n2 = null, this.sleeping = !1, this.gprev = null; };
    return z;
}()), z.zpp_pool = null, ce = (function () {
    function e() {
        this.root = null;
    }
    e._initStatics = function () { e.tmpaabb = new t.xt; };
    e.prototype.clear = function () { if (this.root == null)
        return; var e = null; for (this.root.next = e, e = this.root; e != null;) {
        var n_45 = e;
        e = n_45.next, n_45.next = null;
        var r_47 = n_45;
        r_47.child1 == null ? (r_47.shape.node = null, r_47.shape.removedFromSpace(), r_47.shape = null) : (r_47.child1 != null && (r_47.child1.next = e, e = r_47.child1), r_47.child2 != null && (r_47.child2.next = e, e = r_47.child2));
        var i_31 = r_47;
        i_31.height = -1;
        var a_21 = i_31.aabb;
        a_21.free(), a_21.next = t.xt.zpp_pool, t.xt.zpp_pool = a_21, i_31.child1 = i_31.child2 = i_31.parent = null, i_31.next = null, i_31.snext = null, i_31.mnext = null, i_31.next = R.zpp_pool, R.zpp_pool = i_31;
    } this.root = null; };
    e.prototype.insertLeaf = function (n) { if (this.root == null)
        this.root = n, this.root.parent = null;
    else {
        var r_48 = n.aabb, i_32 = this.root;
        for (; i_32.child1 != null;) {
            var t_44 = i_32.child1, n_46 = i_32.child2, a_22 = i_32.aabb, o_22 = (a_22.maxx - a_22.minx + (a_22.maxy - a_22.miny)) * 2, s_15 = e.tmpaabb, c_12 = i_32.aabb;
            s_15.minx = c_12.minx < r_48.minx ? c_12.minx : r_48.minx, s_15.miny = c_12.miny < r_48.miny ? c_12.miny : r_48.miny, s_15.maxx = c_12.maxx > r_48.maxx ? c_12.maxx : r_48.maxx, s_15.maxy = c_12.maxy > r_48.maxy ? c_12.maxy : r_48.maxy;
            var l_10 = e.tmpaabb, u_14 = (l_10.maxx - l_10.minx + (l_10.maxy - l_10.miny)) * 2, d_7 = 2 * u_14, f_8 = 2 * (u_14 - o_22), p_7 = e.tmpaabb, m_4 = t_44.aabb;
            p_7.minx = r_48.minx < m_4.minx ? r_48.minx : m_4.minx, p_7.miny = r_48.miny < m_4.miny ? r_48.miny : m_4.miny, p_7.maxx = r_48.maxx > m_4.maxx ? r_48.maxx : m_4.maxx, p_7.maxy = r_48.maxy > m_4.maxy ? r_48.maxy : m_4.maxy;
            var h_10 = void 0;
            if (t_44.child1 == null) {
                var t_45 = e.tmpaabb;
                h_10 = (t_45.maxx - t_45.minx + (t_45.maxy - t_45.miny)) * 2 + f_8;
            }
            else {
                var n_47 = t_44.aabb, r_49 = (n_47.maxx - n_47.minx + (n_47.maxy - n_47.miny)) * 2, i_33 = e.tmpaabb;
                h_10 = (i_33.maxx - i_33.minx + (i_33.maxy - i_33.miny)) * 2 - r_49 + f_8;
            }
            var g_3 = e.tmpaabb, _3 = n_46.aabb;
            g_3.minx = r_48.minx < _3.minx ? r_48.minx : _3.minx, g_3.miny = r_48.miny < _3.miny ? r_48.miny : _3.miny, g_3.maxx = r_48.maxx > _3.maxx ? r_48.maxx : _3.maxx, g_3.maxy = r_48.maxy > _3.maxy ? r_48.maxy : _3.maxy;
            var v_3 = void 0;
            if (n_46.child1 == null) {
                var t_46 = e.tmpaabb;
                v_3 = (t_46.maxx - t_46.minx + (t_46.maxy - t_46.miny)) * 2 + f_8;
            }
            else {
                var t_47 = n_46.aabb, r_50 = (t_47.maxx - t_47.minx + (t_47.maxy - t_47.miny)) * 2, i_34 = e.tmpaabb;
                v_3 = (i_34.maxx - i_34.minx + (i_34.maxy - i_34.miny)) * 2 - r_50 + f_8;
            }
            if (d_7 < h_10 && d_7 < v_3)
                break;
            i_32 = h_10 < v_3 ? t_44 : n_46;
        }
        var a_23 = i_32, o_23 = a_23.parent, s_16;
        R.zpp_pool == null ? s_16 = new R : (s_16 = R.zpp_pool, R.zpp_pool = s_16.next, s_16.next = null), t.xt.zpp_pool == null ? s_16.aabb = new t.xt : (s_16.aabb = t.xt.zpp_pool, t.xt.zpp_pool = s_16.aabb.next, s_16.aabb.next = null), s_16.moved = !1, s_16.synced = !1, s_16.first_sync = !1, s_16.parent = o_23;
        var c_13 = s_16.aabb, l_11 = a_23.aabb;
        for (c_13.minx = r_48.minx < l_11.minx ? r_48.minx : l_11.minx, c_13.miny = r_48.miny < l_11.miny ? r_48.miny : l_11.miny, c_13.maxx = r_48.maxx > l_11.maxx ? r_48.maxx : l_11.maxx, c_13.maxy = r_48.maxy > l_11.maxy ? r_48.maxy : l_11.maxy, s_16.height = a_23.height + 1, o_23 == null ? (s_16.child1 = a_23, s_16.child2 = n, a_23.parent = s_16, n.parent = s_16, this.root = s_16) : (o_23.child1 == a_23 ? o_23.child1 = s_16 : o_23.child2 = s_16, s_16.child1 = a_23, s_16.child2 = n, a_23.parent = s_16, n.parent = s_16), i_32 = n.parent; i_32 != null;) {
            if (i_32.child1 == null || i_32.height < 2)
                i_32 = i_32;
            else {
                var e_78 = i_32.child1, t_48 = i_32.child2, n_48 = t_48.height - e_78.height;
                if (n_48 > 1) {
                    var n_49 = t_48.child1, r_51 = t_48.child2;
                    if (t_48.child1 = i_32, t_48.parent = i_32.parent, i_32.parent = t_48, t_48.parent == null ? this.root = t_48 : t_48.parent.child1 == i_32 ? t_48.parent.child1 = t_48 : t_48.parent.child2 = t_48, n_49.height > r_51.height) {
                        t_48.child2 = n_49, i_32.child2 = r_51, r_51.parent = i_32;
                        var a_24 = i_32.aabb, o_24 = e_78.aabb, s_17 = r_51.aabb;
                        a_24.minx = o_24.minx < s_17.minx ? o_24.minx : s_17.minx, a_24.miny = o_24.miny < s_17.miny ? o_24.miny : s_17.miny, a_24.maxx = o_24.maxx > s_17.maxx ? o_24.maxx : s_17.maxx, a_24.maxy = o_24.maxy > s_17.maxy ? o_24.maxy : s_17.maxy;
                        var c_14 = t_48.aabb, l_12 = i_32.aabb, u_15 = n_49.aabb;
                        c_14.minx = l_12.minx < u_15.minx ? l_12.minx : u_15.minx, c_14.miny = l_12.miny < u_15.miny ? l_12.miny : u_15.miny, c_14.maxx = l_12.maxx > u_15.maxx ? l_12.maxx : u_15.maxx, c_14.maxy = l_12.maxy > u_15.maxy ? l_12.maxy : u_15.maxy;
                        var d_8 = e_78.height, f_9 = r_51.height;
                        i_32.height = 1 + (d_8 > f_9 ? d_8 : f_9);
                        var p_8 = i_32.height, m_5 = n_49.height;
                        t_48.height = 1 + (p_8 > m_5 ? p_8 : m_5);
                    }
                    else {
                        t_48.child2 = r_51, i_32.child2 = n_49, n_49.parent = i_32;
                        var a_25 = i_32.aabb, o_25 = e_78.aabb, s_18 = n_49.aabb;
                        a_25.minx = o_25.minx < s_18.minx ? o_25.minx : s_18.minx, a_25.miny = o_25.miny < s_18.miny ? o_25.miny : s_18.miny, a_25.maxx = o_25.maxx > s_18.maxx ? o_25.maxx : s_18.maxx, a_25.maxy = o_25.maxy > s_18.maxy ? o_25.maxy : s_18.maxy;
                        var c_15 = t_48.aabb, l_13 = i_32.aabb, u_16 = r_51.aabb;
                        c_15.minx = l_13.minx < u_16.minx ? l_13.minx : u_16.minx, c_15.miny = l_13.miny < u_16.miny ? l_13.miny : u_16.miny, c_15.maxx = l_13.maxx > u_16.maxx ? l_13.maxx : u_16.maxx, c_15.maxy = l_13.maxy > u_16.maxy ? l_13.maxy : u_16.maxy;
                        var d_9 = e_78.height, f_10 = n_49.height;
                        i_32.height = 1 + (d_9 > f_10 ? d_9 : f_10);
                        var p_9 = i_32.height, m_6 = r_51.height;
                        t_48.height = 1 + (p_9 > m_6 ? p_9 : m_6);
                    }
                    i_32 = t_48;
                }
                else if (n_48 < -1) {
                    var n_50 = e_78.child1, r_52 = e_78.child2;
                    if (e_78.child1 = i_32, e_78.parent = i_32.parent, i_32.parent = e_78, e_78.parent == null ? this.root = e_78 : e_78.parent.child1 == i_32 ? e_78.parent.child1 = e_78 : e_78.parent.child2 = e_78, n_50.height > r_52.height) {
                        e_78.child2 = n_50, i_32.child1 = r_52, r_52.parent = i_32;
                        var a_26 = i_32.aabb, o_26 = t_48.aabb, s_19 = r_52.aabb;
                        a_26.minx = o_26.minx < s_19.minx ? o_26.minx : s_19.minx, a_26.miny = o_26.miny < s_19.miny ? o_26.miny : s_19.miny, a_26.maxx = o_26.maxx > s_19.maxx ? o_26.maxx : s_19.maxx, a_26.maxy = o_26.maxy > s_19.maxy ? o_26.maxy : s_19.maxy;
                        var c_16 = e_78.aabb, l_14 = i_32.aabb, u_17 = n_50.aabb;
                        c_16.minx = l_14.minx < u_17.minx ? l_14.minx : u_17.minx, c_16.miny = l_14.miny < u_17.miny ? l_14.miny : u_17.miny, c_16.maxx = l_14.maxx > u_17.maxx ? l_14.maxx : u_17.maxx, c_16.maxy = l_14.maxy > u_17.maxy ? l_14.maxy : u_17.maxy;
                        var d_10 = t_48.height, f_11 = r_52.height;
                        i_32.height = 1 + (d_10 > f_11 ? d_10 : f_11);
                        var p_10 = i_32.height, m_7 = n_50.height;
                        e_78.height = 1 + (p_10 > m_7 ? p_10 : m_7);
                    }
                    else {
                        e_78.child2 = r_52, i_32.child1 = n_50, n_50.parent = i_32;
                        var a_27 = i_32.aabb, o_27 = t_48.aabb, s_20 = n_50.aabb;
                        a_27.minx = o_27.minx < s_20.minx ? o_27.minx : s_20.minx, a_27.miny = o_27.miny < s_20.miny ? o_27.miny : s_20.miny, a_27.maxx = o_27.maxx > s_20.maxx ? o_27.maxx : s_20.maxx, a_27.maxy = o_27.maxy > s_20.maxy ? o_27.maxy : s_20.maxy;
                        var c_17 = e_78.aabb, l_15 = i_32.aabb, u_18 = r_52.aabb;
                        c_17.minx = l_15.minx < u_18.minx ? l_15.minx : u_18.minx, c_17.miny = l_15.miny < u_18.miny ? l_15.miny : u_18.miny, c_17.maxx = l_15.maxx > u_18.maxx ? l_15.maxx : u_18.maxx, c_17.maxy = l_15.maxy > u_18.maxy ? l_15.maxy : u_18.maxy;
                        var d_11 = t_48.height, f_12 = n_50.height;
                        i_32.height = 1 + (d_11 > f_12 ? d_11 : f_12);
                        var p_11 = i_32.height, m_8 = r_52.height;
                        e_78.height = 1 + (p_11 > m_8 ? p_11 : m_8);
                    }
                    i_32 = e_78;
                }
                else
                    i_32 = i_32;
            }
            var e_79 = i_32.child1, t_49 = i_32.child2, n_51 = e_79.height, r_53 = t_49.height;
            i_32.height = 1 + (n_51 > r_53 ? n_51 : r_53);
            var a_28 = i_32.aabb, o_28 = e_79.aabb, s_21 = t_49.aabb;
            a_28.minx = o_28.minx < s_21.minx ? o_28.minx : s_21.minx, a_28.miny = o_28.miny < s_21.miny ? o_28.miny : s_21.miny, a_28.maxx = o_28.maxx > s_21.maxx ? o_28.maxx : s_21.maxx, a_28.maxy = o_28.maxy > s_21.maxy ? o_28.maxy : s_21.maxy, i_32 = i_32.parent;
        }
    } };
    e.prototype.removeLeaf = function (e) { if (e == this.root)
        this.root = null;
    else {
        var n_52 = e.parent, r_54 = n_52.parent, i_35 = n_52.child1 == e ? n_52.child2 : n_52.child1;
        if (r_54 != null) {
            r_54.child1 == n_52 ? r_54.child1 = i_35 : r_54.child2 = i_35, i_35.parent = r_54;
            var e_80 = n_52;
            e_80.height = -1;
            var a_29 = e_80.aabb;
            a_29.free(), a_29.next = t.xt.zpp_pool, t.xt.zpp_pool = a_29, e_80.child1 = e_80.child2 = e_80.parent = null, e_80.next = null, e_80.snext = null, e_80.mnext = null, e_80.next = R.zpp_pool, R.zpp_pool = e_80;
            var o_29 = r_54;
            for (; o_29 != null;) {
                if (o_29.child1 == null || o_29.height < 2)
                    o_29 = o_29;
                else {
                    var e_81 = o_29.child1, t_50 = o_29.child2, n_53 = t_50.height - e_81.height;
                    if (n_53 > 1) {
                        var n_54 = t_50.child1, r_55 = t_50.child2;
                        if (t_50.child1 = o_29, t_50.parent = o_29.parent, o_29.parent = t_50, t_50.parent == null ? this.root = t_50 : t_50.parent.child1 == o_29 ? t_50.parent.child1 = t_50 : t_50.parent.child2 = t_50, n_54.height > r_55.height) {
                            t_50.child2 = n_54, o_29.child2 = r_55, r_55.parent = o_29;
                            var i_36 = o_29.aabb, a_30 = e_81.aabb, s_22 = r_55.aabb;
                            i_36.minx = a_30.minx < s_22.minx ? a_30.minx : s_22.minx, i_36.miny = a_30.miny < s_22.miny ? a_30.miny : s_22.miny, i_36.maxx = a_30.maxx > s_22.maxx ? a_30.maxx : s_22.maxx, i_36.maxy = a_30.maxy > s_22.maxy ? a_30.maxy : s_22.maxy;
                            var c_18 = t_50.aabb, l_16 = o_29.aabb, u_19 = n_54.aabb;
                            c_18.minx = l_16.minx < u_19.minx ? l_16.minx : u_19.minx, c_18.miny = l_16.miny < u_19.miny ? l_16.miny : u_19.miny, c_18.maxx = l_16.maxx > u_19.maxx ? l_16.maxx : u_19.maxx, c_18.maxy = l_16.maxy > u_19.maxy ? l_16.maxy : u_19.maxy;
                            var d_12 = e_81.height, f_13 = r_55.height;
                            o_29.height = 1 + (d_12 > f_13 ? d_12 : f_13);
                            var p_12 = o_29.height, m_9 = n_54.height;
                            t_50.height = 1 + (p_12 > m_9 ? p_12 : m_9);
                        }
                        else {
                            t_50.child2 = r_55, o_29.child2 = n_54, n_54.parent = o_29;
                            var i_37 = o_29.aabb, a_31 = e_81.aabb, s_23 = n_54.aabb;
                            i_37.minx = a_31.minx < s_23.minx ? a_31.minx : s_23.minx, i_37.miny = a_31.miny < s_23.miny ? a_31.miny : s_23.miny, i_37.maxx = a_31.maxx > s_23.maxx ? a_31.maxx : s_23.maxx, i_37.maxy = a_31.maxy > s_23.maxy ? a_31.maxy : s_23.maxy;
                            var c_19 = t_50.aabb, l_17 = o_29.aabb, u_20 = r_55.aabb;
                            c_19.minx = l_17.minx < u_20.minx ? l_17.minx : u_20.minx, c_19.miny = l_17.miny < u_20.miny ? l_17.miny : u_20.miny, c_19.maxx = l_17.maxx > u_20.maxx ? l_17.maxx : u_20.maxx, c_19.maxy = l_17.maxy > u_20.maxy ? l_17.maxy : u_20.maxy;
                            var d_13 = e_81.height, f_14 = n_54.height;
                            o_29.height = 1 + (d_13 > f_14 ? d_13 : f_14);
                            var p_13 = o_29.height, m_10 = r_55.height;
                            t_50.height = 1 + (p_13 > m_10 ? p_13 : m_10);
                        }
                        o_29 = t_50;
                    }
                    else if (n_53 < -1) {
                        var n_55 = e_81.child1, r_56 = e_81.child2;
                        if (e_81.child1 = o_29, e_81.parent = o_29.parent, o_29.parent = e_81, e_81.parent == null ? this.root = e_81 : e_81.parent.child1 == o_29 ? e_81.parent.child1 = e_81 : e_81.parent.child2 = e_81, n_55.height > r_56.height) {
                            e_81.child2 = n_55, o_29.child1 = r_56, r_56.parent = o_29;
                            var i_38 = o_29.aabb, a_32 = t_50.aabb, s_24 = r_56.aabb;
                            i_38.minx = a_32.minx < s_24.minx ? a_32.minx : s_24.minx, i_38.miny = a_32.miny < s_24.miny ? a_32.miny : s_24.miny, i_38.maxx = a_32.maxx > s_24.maxx ? a_32.maxx : s_24.maxx, i_38.maxy = a_32.maxy > s_24.maxy ? a_32.maxy : s_24.maxy;
                            var c_20 = e_81.aabb, l_18 = o_29.aabb, u_21 = n_55.aabb;
                            c_20.minx = l_18.minx < u_21.minx ? l_18.minx : u_21.minx, c_20.miny = l_18.miny < u_21.miny ? l_18.miny : u_21.miny, c_20.maxx = l_18.maxx > u_21.maxx ? l_18.maxx : u_21.maxx, c_20.maxy = l_18.maxy > u_21.maxy ? l_18.maxy : u_21.maxy;
                            var d_14 = t_50.height, f_15 = r_56.height;
                            o_29.height = 1 + (d_14 > f_15 ? d_14 : f_15);
                            var p_14 = o_29.height, m_11 = n_55.height;
                            e_81.height = 1 + (p_14 > m_11 ? p_14 : m_11);
                        }
                        else {
                            e_81.child2 = r_56, o_29.child1 = n_55, n_55.parent = o_29;
                            var i_39 = o_29.aabb, a_33 = t_50.aabb, s_25 = n_55.aabb;
                            i_39.minx = a_33.minx < s_25.minx ? a_33.minx : s_25.minx, i_39.miny = a_33.miny < s_25.miny ? a_33.miny : s_25.miny, i_39.maxx = a_33.maxx > s_25.maxx ? a_33.maxx : s_25.maxx, i_39.maxy = a_33.maxy > s_25.maxy ? a_33.maxy : s_25.maxy;
                            var c_21 = e_81.aabb, l_19 = o_29.aabb, u_22 = r_56.aabb;
                            c_21.minx = l_19.minx < u_22.minx ? l_19.minx : u_22.minx, c_21.miny = l_19.miny < u_22.miny ? l_19.miny : u_22.miny, c_21.maxx = l_19.maxx > u_22.maxx ? l_19.maxx : u_22.maxx, c_21.maxy = l_19.maxy > u_22.maxy ? l_19.maxy : u_22.maxy;
                            var d_15 = t_50.height, f_16 = n_55.height;
                            o_29.height = 1 + (d_15 > f_16 ? d_15 : f_16);
                            var p_15 = o_29.height, m_12 = r_56.height;
                            e_81.height = 1 + (p_15 > m_12 ? p_15 : m_12);
                        }
                        o_29 = e_81;
                    }
                    else
                        o_29 = o_29;
                }
                var e_82 = o_29, t_51 = e_82.child1, n_56 = e_82.child2, r_57 = e_82.aabb, i_40 = t_51.aabb, a_34 = n_56.aabb;
                r_57.minx = i_40.minx < a_34.minx ? i_40.minx : a_34.minx, r_57.miny = i_40.miny < a_34.miny ? i_40.miny : a_34.miny, r_57.maxx = i_40.maxx > a_34.maxx ? i_40.maxx : a_34.maxx, r_57.maxy = i_40.maxy > a_34.maxy ? i_40.maxy : a_34.maxy;
                var s_26 = t_51.height, c_22 = n_56.height;
                e_82.height = 1 + (s_26 > c_22 ? s_26 : c_22), o_29 = e_82.parent;
            }
        }
        else {
            this.root = i_35, i_35.parent = null;
            var e_83 = n_52;
            e_83.height = -1;
            var r_58 = e_83.aabb;
            r_58.free(), r_58.next = t.xt.zpp_pool, t.xt.zpp_pool = r_58, e_83.child1 = e_83.child2 = e_83.parent = null, e_83.next = null, e_83.snext = null, e_83.mnext = null, e_83.next = R.zpp_pool, R.zpp_pool = e_83;
        }
    } };
    e.prototype.balance = function (e) { if (e.child1 == null || e.height < 2)
        return e; {
        var t_52 = e.child1, n_57 = e.child2, r_59 = n_57.height - t_52.height;
        if (r_59 > 1) {
            var r_60 = n_57.child1, i_41 = n_57.child2;
            if (n_57.child1 = e, n_57.parent = e.parent, e.parent = n_57, n_57.parent == null ? this.root = n_57 : n_57.parent.child1 == e ? n_57.parent.child1 = n_57 : n_57.parent.child2 = n_57, r_60.height > i_41.height) {
                n_57.child2 = r_60, e.child2 = i_41, i_41.parent = e;
                var a_35 = e.aabb, o_30 = t_52.aabb, s_27 = i_41.aabb;
                a_35.minx = o_30.minx < s_27.minx ? o_30.minx : s_27.minx, a_35.miny = o_30.miny < s_27.miny ? o_30.miny : s_27.miny, a_35.maxx = o_30.maxx > s_27.maxx ? o_30.maxx : s_27.maxx, a_35.maxy = o_30.maxy > s_27.maxy ? o_30.maxy : s_27.maxy;
                var c_23 = n_57.aabb, l_20 = e.aabb, u_23 = r_60.aabb;
                c_23.minx = l_20.minx < u_23.minx ? l_20.minx : u_23.minx, c_23.miny = l_20.miny < u_23.miny ? l_20.miny : u_23.miny, c_23.maxx = l_20.maxx > u_23.maxx ? l_20.maxx : u_23.maxx, c_23.maxy = l_20.maxy > u_23.maxy ? l_20.maxy : u_23.maxy;
                var d_16 = t_52.height, f_17 = i_41.height;
                e.height = 1 + (d_16 > f_17 ? d_16 : f_17);
                var p_16 = e.height, m_13 = r_60.height;
                n_57.height = 1 + (p_16 > m_13 ? p_16 : m_13);
            }
            else {
                n_57.child2 = i_41, e.child2 = r_60, r_60.parent = e;
                var a_36 = e.aabb, o_31 = t_52.aabb, s_28 = r_60.aabb;
                a_36.minx = o_31.minx < s_28.minx ? o_31.minx : s_28.minx, a_36.miny = o_31.miny < s_28.miny ? o_31.miny : s_28.miny, a_36.maxx = o_31.maxx > s_28.maxx ? o_31.maxx : s_28.maxx, a_36.maxy = o_31.maxy > s_28.maxy ? o_31.maxy : s_28.maxy;
                var c_24 = n_57.aabb, l_21 = e.aabb, u_24 = i_41.aabb;
                c_24.minx = l_21.minx < u_24.minx ? l_21.minx : u_24.minx, c_24.miny = l_21.miny < u_24.miny ? l_21.miny : u_24.miny, c_24.maxx = l_21.maxx > u_24.maxx ? l_21.maxx : u_24.maxx, c_24.maxy = l_21.maxy > u_24.maxy ? l_21.maxy : u_24.maxy;
                var d_17 = t_52.height, f_18 = r_60.height;
                e.height = 1 + (d_17 > f_18 ? d_17 : f_18);
                var p_17 = e.height, m_14 = i_41.height;
                n_57.height = 1 + (p_17 > m_14 ? p_17 : m_14);
            }
            return n_57;
        }
        if (r_59 < -1) {
            var r_61 = t_52.child1, i_42 = t_52.child2;
            if (t_52.child1 = e, t_52.parent = e.parent, e.parent = t_52, t_52.parent == null ? this.root = t_52 : t_52.parent.child1 == e ? t_52.parent.child1 = t_52 : t_52.parent.child2 = t_52, r_61.height > i_42.height) {
                t_52.child2 = r_61, e.child1 = i_42, i_42.parent = e;
                var a_37 = e.aabb, o_32 = n_57.aabb, s_29 = i_42.aabb;
                a_37.minx = o_32.minx < s_29.minx ? o_32.minx : s_29.minx, a_37.miny = o_32.miny < s_29.miny ? o_32.miny : s_29.miny, a_37.maxx = o_32.maxx > s_29.maxx ? o_32.maxx : s_29.maxx, a_37.maxy = o_32.maxy > s_29.maxy ? o_32.maxy : s_29.maxy;
                var c_25 = t_52.aabb, l_22 = e.aabb, u_25 = r_61.aabb;
                c_25.minx = l_22.minx < u_25.minx ? l_22.minx : u_25.minx, c_25.miny = l_22.miny < u_25.miny ? l_22.miny : u_25.miny, c_25.maxx = l_22.maxx > u_25.maxx ? l_22.maxx : u_25.maxx, c_25.maxy = l_22.maxy > u_25.maxy ? l_22.maxy : u_25.maxy;
                var d_18 = n_57.height, f_19 = i_42.height;
                e.height = 1 + (d_18 > f_19 ? d_18 : f_19);
                var p_18 = e.height, m_15 = r_61.height;
                t_52.height = 1 + (p_18 > m_15 ? p_18 : m_15);
            }
            else {
                t_52.child2 = i_42, e.child1 = r_61, r_61.parent = e;
                var a_38 = e.aabb, o_33 = n_57.aabb, s_30 = r_61.aabb;
                a_38.minx = o_33.minx < s_30.minx ? o_33.minx : s_30.minx, a_38.miny = o_33.miny < s_30.miny ? o_33.miny : s_30.miny, a_38.maxx = o_33.maxx > s_30.maxx ? o_33.maxx : s_30.maxx, a_38.maxy = o_33.maxy > s_30.maxy ? o_33.maxy : s_30.maxy;
                var c_26 = t_52.aabb, l_23 = e.aabb, u_26 = i_42.aabb;
                c_26.minx = l_23.minx < u_26.minx ? l_23.minx : u_26.minx, c_26.miny = l_23.miny < u_26.miny ? l_23.miny : u_26.miny, c_26.maxx = l_23.maxx > u_26.maxx ? l_23.maxx : u_26.maxx, c_26.maxy = l_23.maxy > u_26.maxy ? l_23.maxy : u_26.maxy;
                var d_19 = n_57.height, f_20 = r_61.height;
                e.height = 1 + (d_19 > f_20 ? d_19 : f_20);
                var p_19 = e.height, m_16 = i_42.height;
                t_52.height = 1 + (p_19 > m_16 ? p_19 : m_16);
            }
            return t_52;
        }
        return e;
    } };
    return e;
}()), ce.tmpaabb = null, B = ce, V = (function (_super) {
    __extends(e, _super);
    function e(e) {
        var _this = this;
        _this = _super.call(this) || this, _this.pairs = null, _this.pairMap = new Map, _this.syncs = null, _this.moves = null, _this.treeStack = null, _this.treeStack2 = null, _this.failed = null, _this.openlist = null, _this.space = e, _this.is_sweep = !1, _this.dynab = _this, _this.stree = new B, _this.dtree = new B;
        return _this;
    }
    e.prototype._linkPair = function (e) { e.gprev = null, e.next = this.pairs, this.pairs != null && (this.pairs.gprev = e), this.pairs = e; };
    e._pairKey = function (e, t) { return t * t + e; };
    e.prototype._unlinkPair = function (e) { e.gprev == null ? this.pairs = e.next : e.gprev.next = e.next, e.next != null && (e.next.gprev = e.gprev), e.gprev = null, e.next = null; };
    e.prototype.dyn = function (e) { return e.body.type != 1 && !e.body.component.sleeping; };
    e.prototype.__insert = function (e) { var n; R.zpp_pool == null ? n = new R : (n = R.zpp_pool, R.zpp_pool = n.next, n.next = null), t.xt.zpp_pool == null ? n.aabb = new t.xt : (n.aabb = t.xt.zpp_pool, t.xt.zpp_pool = n.aabb.next, n.aabb.next = null), n.moved = !1, n.synced = !1, n.first_sync = !1, n.shape = e, e.node = n, n.synced = !0, n.first_sync = !0, n.snext = this.syncs, this.syncs = n; };
    e.prototype.__remove = function (n) { var r = n.node; if (r.first_sync || (r.dyn ? this.dtree.removeLeaf(r) : this.stree.removeLeaf(r)), n.node = null, r.synced) {
        var e_84 = null, t_53 = this.syncs;
        for (; t_53 != null && t_53 != r;)
            e_84 = t_53, t_53 = t_53.snext;
        e_84 == null ? this.syncs = t_53.snext : e_84.snext = t_53.snext, t_53.snext = null, r.synced = !1;
    } if (r.moved) {
        var e_85 = null, t_54 = this.moves;
        for (; t_54 != null && t_54 != r;)
            e_85 = t_54, t_54 = t_54.mnext;
        e_85 == null ? this.moves = t_54.mnext : e_85.mnext = t_54.mnext, t_54.mnext = null, r.moved = !1;
    } for (; n.pairs.head != null;) {
        var t_55 = n.pairs.pop_unsafe();
        t_55.sleeping || this._unlinkPair(t_55), t_55.n1 == r ? t_55.n2.shape.pairs.remove(t_55) : t_55.n1.shape.pairs.remove(t_55), this.pairMap.delete(e._pairKey(t_55.id, t_55.di)), t_55.arb != null && (t_55.arb.pair = null), t_55.arb = null, t_55.n1 = t_55.n2 = null, t_55.sleeping = !1, t_55.gprev = null, t_55.next = z.zpp_pool, z.zpp_pool = t_55;
    } var i = r; i.height = -1; var a = i.aabb; a.free(), a.next = t.xt.zpp_pool, t.xt.zpp_pool = a, i.child1 = i.child2 = i.parent = null, i.next = null, i.snext = null, i.mnext = null, i.next = R.zpp_pool, R.zpp_pool = i; };
    e.prototype.__sync = function (e) { var t = e.node; if (!t.synced) {
        this.space.continuous || e.validate_aabb();
        var n_58;
        if (t.dyn == this.dyn(e)) {
            var r_62 = t.aabb, i_43 = e.aabb;
            n_58 = !(i_43.minx >= r_62.minx && i_43.miny >= r_62.miny && i_43.maxx <= r_62.maxx && i_43.maxy <= r_62.maxy);
        }
        else
            n_58 = !0;
        n_58 && (t.synced = !0, t.snext = this.syncs, this.syncs = t);
    } };
    e.prototype.sync_broadphase = function () { if (this.space.validation(), this.syncs != null) {
        if (this.moves == null) {
            var e_86 = this.syncs;
            for (; e_86 != null;)
                this._syncLeaf(e_86), e_86.synced = !1, e_86.moved = !0, e_86.mnext = e_86.snext, e_86.snext = null, e_86 = e_86.mnext;
            this.moves = this.syncs, this.syncs = null;
        }
        else
            for (; this.syncs != null;) {
                var e_87 = this.syncs;
                this.syncs = e_87.snext, e_87.snext = null, this._syncLeaf(e_87), e_87.synced = !1, e_87.moved || (e_87.moved = !0, e_87.mnext = this.moves, this.moves = e_87);
            }
    } };
    e.prototype._syncLeaf = function (t) { var n = t.shape; t.first_sync ? t.first_sync = !1 : (t.dyn ? this.dtree : this.stree).removeLeaf(t); var r = t.aabb; this.space.continuous || n.validate_aabb(); var i = n.aabb; r.minx = i.minx - e.FATTEN, r.miny = i.miny - e.FATTEN, r.maxx = i.maxx + e.FATTEN, r.maxy = i.maxy + e.FATTEN, ((t.dyn = this.dyn(n)) ? this.dtree : this.stree).insertLeaf(t); };
    e.prototype._pairFound = function (t, n, r, i) { var a; var o, s; r.id < i.id ? (o = r.id, s = i.id) : (o = i.id, s = r.id); var c = e._pairKey(o, s), l = (a = this.pairMap.get(c)) == null ? null : a; l == null ? (z.zpp_pool == null ? l = new z : (l = z.zpp_pool, z.zpp_pool = l.next, l.next = null), l.n1 = t, l.n2 = n, l.id = o, l.di = s, this.pairMap.set(c, l), this._linkPair(l), l.first = !0, this._pushPairNode(r.pairs, l), this._pushPairNode(i.pairs, l)) : l.sleeping && (l.sleeping = !1, this._linkPair(l), l.first = !0); };
    e.prototype._pushPairNode = function (e, t) { e.add(t); };
    e.prototype._queryTreePairs = function (e, t) { var n = e.shape, r = e.aabb, i = null; for (t != null && (t.next = i, i = t); i != null;) {
        var t_56 = i;
        if (i = t_56.next, t_56.next = null, t_56 != e) {
            if (t_56.child1 == null) {
                var i_44 = t_56.shape;
                if (i_44.body != n.body && (i_44.body.type != 1 || n.body.type != 1)) {
                    var a_39 = t_56.aabb;
                    a_39.miny <= r.maxy && r.miny <= a_39.maxy && a_39.minx <= r.maxx && r.minx <= a_39.maxx && this._pairFound(e, t_56, n, i_44);
                }
            }
            else {
                var e_88 = t_56.aabb;
                e_88.miny <= r.maxy && r.miny <= e_88.maxy && e_88.minx <= r.maxx && r.minx <= e_88.maxx && (t_56.child1 != null && (t_56.child1.next = i, i = t_56.child1), t_56.child2 != null && (t_56.child2.next = i, i = t_56.child2));
            }
        }
    } };
    e.prototype.broadphase = function (t, n) { var r = this.syncs; for (; r != null;)
        this._syncLeaf(r), r.synced = !1, r = r.snext; for (; this.syncs != null;) {
        var e_89 = this.syncs;
        this.syncs = e_89.snext, e_89.snext = null, !e_89.moved && (e_89.moved = !1, !e_89.shape.body.component.sleeping && (this._queryTreePairs(e_89, this.dtree.root), this._queryTreePairs(e_89, this.stree.root)));
    } for (; this.moves != null;) {
        var e_90 = this.moves;
        this.moves = e_90.mnext, e_90.mnext = null, e_90.moved = !1, !e_90.shape.body.component.sleeping && (this._queryTreePairs(e_90, this.dtree.root), this._queryTreePairs(e_90, this.stree.root));
    } var i = this.pairs; for (; i != null;) {
        var r_63 = void 0;
        if (i.first)
            r_63 = !1;
        else {
            var e_91 = i.n1.aabb, t_57 = i.n2.aabb;
            r_63 = !(t_57.miny <= e_91.maxy && e_91.miny <= t_57.maxy && t_57.minx <= e_91.maxx && e_91.minx <= t_57.maxx);
        }
        if (r_63) {
            var t_58 = i.next;
            this._unlinkPair(i), i.n1.shape.pairs.remove(i), i.n2.shape.pairs.remove(i), this.pairMap.delete(e._pairKey(i.id, i.di)), i.arb != null && (i.arb.pair = null), i.arb = null, i.n1 = i.n2 = null, i.sleeping = !1, i.gprev = null, i.next = z.zpp_pool, z.zpp_pool = i, i = t_58;
            continue;
        }
        var a_40 = i.n1.shape, o_34 = a_40.body, s_31 = i.n2.shape, c_27 = s_31.body;
        if (!i.first && (o_34.component.sleeping || o_34.type == 1) && (c_27.component.sleeping || c_27.type == 1)) {
            i.sleeping = !0;
            var e_92 = i.next;
            this._unlinkPair(i), i = e_92;
            continue;
        }
        var l_24 = i.first;
        i.first = !1;
        var u_27 = a_40.aabb, d_20 = s_31.aabb;
        if (l_24 || d_20.miny <= u_27.maxy && u_27.miny <= d_20.maxy && d_20.minx <= u_27.maxx && u_27.minx <= d_20.maxx) {
            var e_93 = i.arb;
            n ? i.arb = t.narrowPhase(a_40, s_31, o_34.type != 2 || c_27.type != 2, i.arb, !1) : i.arb = t.continuousEvent(a_40, s_31, o_34.type != 2 || c_27.type != 2, i.arb, !1), i.arb == null ? e_93 != null && (e_93.pair = null) : i.arb.pair = i;
        }
        i = i.next;
    } };
    e.prototype.clear = function () { for (; this.syncs != null;) {
        var e_94 = this.syncs.snext;
        this.syncs.snext = null, this.syncs.first_sync && (this.syncs.shape.node = null, this.syncs.shape.removedFromSpace(), this.syncs.shape = null), this.syncs = e_94;
    } for (; this.moves != null;) {
        var e_95 = this.moves.mnext;
        this.moves.mnext = null, this.moves.first_sync && (this.moves.shape.node = null, this.moves.shape.removedFromSpace(), this.moves.shape = null), this.moves = e_95;
    } for (; this.pairs != null;) {
        var e_96 = this.pairs.next, t_59 = this.pairs;
        t_59.arb != null && (t_59.arb.pair = null), t_59.arb = null, t_59.n1.shape.pairs.remove(t_59), t_59.n2.shape.pairs.remove(t_59), t_59.n1 = t_59.n2 = null, t_59.sleeping = !1, t_59.gprev = null, t_59.next = z.zpp_pool, z.zpp_pool = t_59, this.pairs = e_96;
    } this.pairMap.clear(), this.dtree.clear(), this.stree.clear(); };
    e.prototype.shapesUnderPoint = function (n, r, i, a) { this.sync_broadphase(); var o = t.an.get(n, r, !1), s = a == null ? new e._nape.shape.ShapeList : a; if (this.stree.root != null)
        for (this.treeStack == null && (this.treeStack = new t.n), this.treeStack.add(this.stree.root); this.treeStack.head != null;) {
            var e_97 = this.treeStack.pop_unsafe(), n_59 = e_97.aabb;
            o.x >= n_59.minx && o.x <= n_59.maxx && o.y >= n_59.miny && o.y <= n_59.maxy && (e_97.child1 == null ? (i == null || e_97.shape.filter.shouldCollide(i)) && (e_97.shape.type == 0 ? t.Kn.circleContains(e_97.shape.circle, o) && s.push(e_97.shape.outer) : t.Kn.polyContains(e_97.shape.polygon, o) && s.push(e_97.shape.outer)) : (e_97.child1 != null && this.treeStack.add(e_97.child1), e_97.child2 != null && this.treeStack.add(e_97.child2)));
        } if (this.dtree.root != null)
        for (this.treeStack == null && (this.treeStack = new t.n), this.treeStack.add(this.dtree.root); this.treeStack.head != null;) {
            var e_98 = this.treeStack.pop_unsafe(), n_60 = e_98.aabb;
            o.x >= n_60.minx && o.x <= n_60.maxx && o.y >= n_60.miny && o.y <= n_60.maxy && (e_98.child1 == null ? (i == null || e_98.shape.filter.shouldCollide(i)) && (e_98.shape.type == 0 ? t.Kn.circleContains(e_98.shape.circle, o) && s.push(e_98.shape.outer) : t.Kn.polyContains(e_98.shape.polygon, o) && s.push(e_98.shape.outer)) : (e_98.child1 != null && this.treeStack.add(e_98.child1), e_98.child2 != null && this.treeStack.add(e_98.child2)));
        } var c = o; return c.free(), c.next = t.an.zpp_pool, t.an.zpp_pool = c, s; };
    e.prototype.bodiesUnderPoint = function (n, r, i, a) { this.sync_broadphase(); var o = t.an.get(n, r, !1), s = a == null ? new e._nape.phys.BodyList : a; if (this.stree.root != null)
        for (this.treeStack == null && (this.treeStack = new t.n), this.treeStack.add(this.stree.root); this.treeStack.head != null;) {
            var e_99 = this.treeStack.pop_unsafe(), n_61 = e_99.aabb;
            if (o.x >= n_61.minx && o.x <= n_61.maxx && o.y >= n_61.miny && o.y <= n_61.maxy) {
                if (e_99.child1 == null) {
                    var n_62 = e_99.shape.body.outer;
                    s.has(n_62) || (i == null || e_99.shape.filter.shouldCollide(i)) && (e_99.shape.type == 0 ? t.Kn.circleContains(e_99.shape.circle, o) && s.push(n_62) : t.Kn.polyContains(e_99.shape.polygon, o) && s.push(n_62));
                }
                else
                    e_99.child1 != null && this.treeStack.add(e_99.child1), e_99.child2 != null && this.treeStack.add(e_99.child2);
            }
        } if (this.dtree.root != null)
        for (this.treeStack == null && (this.treeStack = new t.n), this.treeStack.add(this.dtree.root); this.treeStack.head != null;) {
            var e_100 = this.treeStack.pop_unsafe(), n_63 = e_100.aabb;
            if (o.x >= n_63.minx && o.x <= n_63.maxx && o.y >= n_63.miny && o.y <= n_63.maxy) {
                if (e_100.child1 == null) {
                    var n_64 = e_100.shape.body.outer;
                    s.has(n_64) || (i == null || e_100.shape.filter.shouldCollide(i)) && (e_100.shape.type == 0 ? t.Kn.circleContains(e_100.shape.circle, o) && s.push(n_64) : t.Kn.polyContains(e_100.shape.polygon, o) && s.push(n_64));
                }
                else
                    e_100.child1 != null && this.treeStack.add(e_100.child1), e_100.child2 != null && this.treeStack.add(e_100.child2);
            }
        } var c = o; return c.free(), c.next = t.an.zpp_pool, t.an.zpp_pool = c, s; };
    e.prototype.shapesInAABB = function (n, r, i, a, o) { this.sync_broadphase(), this.updateAABBShape(n); var s = this.aabbShape.zpp_inner.aabb, c = o == null ? new e._nape.shape.ShapeList : o; if (this.stree.root != null)
        for (this.treeStack == null && (this.treeStack = new t.n), this.treeStack.add(this.stree.root); this.treeStack.head != null;) {
            var e_101 = this.treeStack.pop_unsafe(), n_65 = e_101.aabb;
            if (n_65.minx >= s.minx && n_65.miny >= s.miny && n_65.maxx <= s.maxx && n_65.maxy <= s.maxy) {
                if (e_101.child1 == null)
                    (a == null || e_101.shape.filter.shouldCollide(a)) && c.push(e_101.shape.outer);
                else
                    for (this.treeStack2 == null && (this.treeStack2 = new t.n), this.treeStack2.add(e_101); this.treeStack2.head != null;) {
                        var e_102 = this.treeStack2.pop_unsafe();
                        e_102.child1 == null ? (a == null || e_102.shape.filter.shouldCollide(a)) && c.push(e_102.shape.outer) : (e_102.child1 != null && this.treeStack2.add(e_102.child1), e_102.child2 != null && this.treeStack2.add(e_102.child2));
                    }
            }
            else {
                var n_66 = e_101.aabb;
                if (s.miny <= n_66.maxy && n_66.miny <= s.maxy && s.minx <= n_66.maxx && n_66.minx <= s.maxx) {
                    if (e_101.child1 == null) {
                        if (a == null || e_101.shape.filter.shouldCollide(a)) {
                            if (r) {
                                if (i)
                                    t.Kn.containTest(this.aabbShape.zpp_inner, e_101.shape) && c.push(e_101.shape.outer);
                                else {
                                    var n_67 = e_101.shape.aabb;
                                    (n_67.minx >= s.minx && n_67.miny >= s.miny && n_67.maxx <= s.maxx && n_67.maxy <= s.maxy || t.Kn.testCollide_safe(e_101.shape, this.aabbShape.zpp_inner)) && c.push(e_101.shape.outer);
                                }
                            }
                            else {
                                var t_60 = void 0;
                                if (i) {
                                    var n_68 = e_101.shape.aabb;
                                    t_60 = n_68.minx >= s.minx && n_68.miny >= s.miny && n_68.maxx <= s.maxx && n_68.maxy <= s.maxy;
                                }
                                else
                                    t_60 = !0;
                                t_60 && c.push(e_101.shape.outer);
                            }
                        }
                    }
                    else
                        e_101.child1 != null && this.treeStack.add(e_101.child1), e_101.child2 != null && this.treeStack.add(e_101.child2);
                }
            }
        } if (this.dtree.root != null)
        for (this.treeStack == null && (this.treeStack = new t.n), this.treeStack.add(this.dtree.root); this.treeStack.head != null;) {
            var e_103 = this.treeStack.pop_unsafe(), n_69 = e_103.aabb;
            if (n_69.minx >= s.minx && n_69.miny >= s.miny && n_69.maxx <= s.maxx && n_69.maxy <= s.maxy) {
                if (e_103.child1 == null)
                    (a == null || e_103.shape.filter.shouldCollide(a)) && c.push(e_103.shape.outer);
                else
                    for (this.treeStack2 == null && (this.treeStack2 = new t.n), this.treeStack2.add(e_103); this.treeStack2.head != null;) {
                        var e_104 = this.treeStack2.pop_unsafe();
                        e_104.child1 == null ? (a == null || e_104.shape.filter.shouldCollide(a)) && c.push(e_104.shape.outer) : (e_104.child1 != null && this.treeStack2.add(e_104.child1), e_104.child2 != null && this.treeStack2.add(e_104.child2));
                    }
            }
            else {
                var n_70 = e_103.aabb;
                if (s.miny <= n_70.maxy && n_70.miny <= s.maxy && s.minx <= n_70.maxx && n_70.minx <= s.maxx) {
                    if (e_103.child1 == null) {
                        if (a == null || e_103.shape.filter.shouldCollide(a)) {
                            if (r) {
                                if (i)
                                    t.Kn.containTest(this.aabbShape.zpp_inner, e_103.shape) && c.push(e_103.shape.outer);
                                else {
                                    var n_71 = e_103.shape.aabb;
                                    (n_71.minx >= s.minx && n_71.miny >= s.miny && n_71.maxx <= s.maxx && n_71.maxy <= s.maxy || t.Kn.testCollide_safe(e_103.shape, this.aabbShape.zpp_inner)) && c.push(e_103.shape.outer);
                                }
                            }
                            else {
                                var t_61 = void 0;
                                if (i) {
                                    var n_72 = e_103.shape.aabb;
                                    t_61 = n_72.minx >= s.minx && n_72.miny >= s.miny && n_72.maxx <= s.maxx && n_72.maxy <= s.maxy;
                                }
                                else
                                    t_61 = !0;
                                t_61 && c.push(e_103.shape.outer);
                            }
                        }
                    }
                    else
                        e_103.child1 != null && this.treeStack.add(e_103.child1), e_103.child2 != null && this.treeStack.add(e_103.child2);
                }
            }
        } return c; };
    e.prototype.bodiesInAABB = function (n, r, i, a, o) { this.sync_broadphase(), this.updateAABBShape(n); var s = this.aabbShape.zpp_inner.aabb, c = o == null ? new e._nape.phys.BodyList : o; if (this.failed == null && (this.failed = new e._nape.phys.BodyList), this.stree.root != null)
        for (this.treeStack == null && (this.treeStack = new t.n), this.treeStack.add(this.stree.root); this.treeStack.head != null;) {
            var e_105 = this.treeStack.pop_unsafe(), n_73 = e_105.aabb;
            if (n_73.minx >= s.minx && n_73.miny >= s.miny && n_73.maxx <= s.maxx && n_73.maxy <= s.maxy) {
                if (e_105.child1 == null) {
                    if (a == null || e_105.shape.filter.shouldCollide(a)) {
                        var t_62 = e_105.shape.body.outer;
                        !c.has(t_62) && !(i && this.failed.has(t_62)) && c.push(t_62);
                    }
                }
                else
                    for (this.treeStack2 == null && (this.treeStack2 = new t.n), this.treeStack2.add(e_105); this.treeStack2.head != null;) {
                        var e_106 = this.treeStack2.pop_unsafe();
                        if (e_106.child1 == null) {
                            if (a == null || e_106.shape.filter.shouldCollide(a)) {
                                var t_63 = e_106.shape.body.outer;
                                !c.has(t_63) && !(i && this.failed.has(t_63)) && c.push(t_63);
                            }
                        }
                        else
                            e_106.child1 != null && this.treeStack2.add(e_106.child1), e_106.child2 != null && this.treeStack2.add(e_106.child2);
                    }
            }
            else {
                var n_74 = e_105.aabb;
                if (s.miny <= n_74.maxy && n_74.miny <= s.maxy && s.minx <= n_74.maxx && n_74.minx <= s.maxx) {
                    if (e_105.child1 == null) {
                        var n_75 = e_105.shape.body.outer;
                        if (a == null || e_105.shape.filter.shouldCollide(a)) {
                            if (r) {
                                if (i) {
                                    if (!this.failed.has(n_75)) {
                                        var r_64 = t.Kn.containTest(this.aabbShape.zpp_inner, e_105.shape);
                                        !c.has(n_75) && r_64 ? c.push(n_75) : r_64 || (c.remove(n_75), this.failed.push(n_75));
                                    }
                                }
                                else
                                    !c.has(n_75) && t.Kn.testCollide_safe(e_105.shape, this.aabbShape.zpp_inner) && c.push(n_75);
                            }
                            else if (i) {
                                if (!this.failed.has(n_75)) {
                                    var t_64 = e_105.shape.aabb, r_65 = t_64.minx >= s.minx && t_64.miny >= s.miny && t_64.maxx <= s.maxx && t_64.maxy <= s.maxy;
                                    !c.has(n_75) && r_65 ? c.push(n_75) : r_65 || (c.remove(n_75), this.failed.push(n_75));
                                }
                            }
                            else {
                                var t_65 = void 0;
                                if (c.has(n_75))
                                    t_65 = !1;
                                else {
                                    var n_76 = e_105.shape.aabb;
                                    t_65 = n_76.minx >= s.minx && n_76.miny >= s.miny && n_76.maxx <= s.maxx && n_76.maxy <= s.maxy;
                                }
                                t_65 && c.push(n_75);
                            }
                        }
                    }
                    else
                        e_105.child1 != null && this.treeStack.add(e_105.child1), e_105.child2 != null && this.treeStack.add(e_105.child2);
                }
            }
        } if (this.dtree.root != null)
        for (this.treeStack == null && (this.treeStack = new t.n), this.treeStack.add(this.dtree.root); this.treeStack.head != null;) {
            var e_107 = this.treeStack.pop_unsafe(), n_77 = e_107.aabb;
            if (n_77.minx >= s.minx && n_77.miny >= s.miny && n_77.maxx <= s.maxx && n_77.maxy <= s.maxy) {
                if (e_107.child1 == null) {
                    if (a == null || e_107.shape.filter.shouldCollide(a)) {
                        var t_66 = e_107.shape.body.outer;
                        !c.has(t_66) && !(i && this.failed.has(t_66)) && c.push(t_66);
                    }
                }
                else
                    for (this.treeStack2 == null && (this.treeStack2 = new t.n), this.treeStack2.add(e_107); this.treeStack2.head != null;) {
                        var e_108 = this.treeStack2.pop_unsafe();
                        if (e_108.child1 == null) {
                            if (a == null || e_108.shape.filter.shouldCollide(a)) {
                                var t_67 = e_108.shape.body.outer;
                                !c.has(t_67) && !(i && this.failed.has(t_67)) && c.push(t_67);
                            }
                        }
                        else
                            e_108.child1 != null && this.treeStack2.add(e_108.child1), e_108.child2 != null && this.treeStack2.add(e_108.child2);
                    }
            }
            else {
                var n_78 = e_107.aabb;
                if (s.miny <= n_78.maxy && n_78.miny <= s.maxy && s.minx <= n_78.maxx && n_78.minx <= s.maxx) {
                    if (e_107.child1 == null) {
                        var n_79 = e_107.shape.body.outer;
                        if (a == null || e_107.shape.filter.shouldCollide(a)) {
                            if (r) {
                                if (i) {
                                    if (!this.failed.has(n_79)) {
                                        var r_66 = t.Kn.containTest(this.aabbShape.zpp_inner, e_107.shape);
                                        !c.has(n_79) && r_66 ? c.push(n_79) : r_66 || (c.remove(n_79), this.failed.push(n_79));
                                    }
                                }
                                else
                                    !c.has(n_79) && t.Kn.testCollide_safe(e_107.shape, this.aabbShape.zpp_inner) && c.push(n_79);
                            }
                            else if (i) {
                                if (!this.failed.has(n_79)) {
                                    var t_68 = e_107.shape.aabb, r_67 = t_68.minx >= s.minx && t_68.miny >= s.miny && t_68.maxx <= s.maxx && t_68.maxy <= s.maxy;
                                    !c.has(n_79) && r_67 ? c.push(n_79) : r_67 || (c.remove(n_79), this.failed.push(n_79));
                                }
                            }
                            else {
                                var t_69 = void 0;
                                if (c.has(n_79))
                                    t_69 = !1;
                                else {
                                    var n_80 = e_107.shape.aabb;
                                    t_69 = n_80.minx >= s.minx && n_80.miny >= s.miny && n_80.maxx <= s.maxx && n_80.maxy <= s.maxy;
                                }
                                t_69 && c.push(n_79);
                            }
                        }
                    }
                    else
                        e_107.child1 != null && this.treeStack.add(e_107.child1), e_107.child2 != null && this.treeStack.add(e_107.child2);
                }
            }
        } return this.failed.clear(), c; };
    e.prototype.shapesInCircle = function (n, r, i, a, o, s) { this.sync_broadphase(), this.updateCircShape(n, r, i); var c = this.circShape.zpp_inner.aabb, l = s == null ? new e._nape.shape.ShapeList : s; if (this.stree.root != null)
        for (this.treeStack == null && (this.treeStack = new t.n), this.treeStack.add(this.stree.root); this.treeStack.head != null;) {
            var e_109 = this.treeStack.pop_unsafe(), n_81 = e_109.aabb;
            c.miny <= n_81.maxy && n_81.miny <= c.maxy && c.minx <= n_81.maxx && n_81.minx <= c.maxx && (e_109.child1 == null ? (o == null || e_109.shape.filter.shouldCollide(o)) && (a ? t.Kn.containTest(this.circShape.zpp_inner, e_109.shape) && l.push(e_109.shape.outer) : t.Kn.testCollide_safe(e_109.shape, this.circShape.zpp_inner) && l.push(e_109.shape.outer)) : (e_109.child1 != null && this.treeStack.add(e_109.child1), e_109.child2 != null && this.treeStack.add(e_109.child2)));
        } if (this.dtree.root != null)
        for (this.treeStack == null && (this.treeStack = new t.n), this.treeStack.add(this.dtree.root); this.treeStack.head != null;) {
            var e_110 = this.treeStack.pop_unsafe(), n_82 = e_110.aabb;
            c.miny <= n_82.maxy && n_82.miny <= c.maxy && c.minx <= n_82.maxx && n_82.minx <= c.maxx && (e_110.child1 == null ? (o == null || e_110.shape.filter.shouldCollide(o)) && (a ? t.Kn.containTest(this.circShape.zpp_inner, e_110.shape) && l.push(e_110.shape.outer) : t.Kn.testCollide_safe(e_110.shape, this.circShape.zpp_inner) && l.push(e_110.shape.outer)) : (e_110.child1 != null && this.treeStack.add(e_110.child1), e_110.child2 != null && this.treeStack.add(e_110.child2)));
        } return l; };
    e.prototype.bodiesInCircle = function (n, r, i, a, o, s) { this.sync_broadphase(), this.updateCircShape(n, r, i); var c = this.circShape.zpp_inner.aabb, l = s == null ? new e._nape.phys.BodyList : s; if (this.failed == null && (this.failed = new e._nape.phys.BodyList), this.stree.root != null)
        for (this.treeStack == null && (this.treeStack = new t.n), this.treeStack.add(this.stree.root); this.treeStack.head != null;) {
            var e_111 = this.treeStack.pop_unsafe(), n_83 = e_111.aabb;
            if (c.miny <= n_83.maxy && n_83.miny <= c.maxy && c.minx <= n_83.maxx && n_83.minx <= c.maxx) {
                if (e_111.child1 == null) {
                    var n_84 = e_111.shape.body.outer;
                    if (o == null || e_111.shape.filter.shouldCollide(o)) {
                        if (a) {
                            if (!this.failed.has(n_84)) {
                                var r_68 = t.Kn.containTest(this.circShape.zpp_inner, e_111.shape);
                                !l.has(n_84) && r_68 ? l.push(n_84) : r_68 || (l.remove(n_84), this.failed.push(n_84));
                            }
                        }
                        else
                            !l.has(n_84) && t.Kn.testCollide_safe(e_111.shape, this.circShape.zpp_inner) && l.push(n_84);
                    }
                }
                else
                    e_111.child1 != null && this.treeStack.add(e_111.child1), e_111.child2 != null && this.treeStack.add(e_111.child2);
            }
        } if (this.dtree.root != null)
        for (this.treeStack == null && (this.treeStack = new t.n), this.treeStack.add(this.dtree.root); this.treeStack.head != null;) {
            var e_112 = this.treeStack.pop_unsafe(), n_85 = e_112.aabb;
            if (c.miny <= n_85.maxy && n_85.miny <= c.maxy && c.minx <= n_85.maxx && n_85.minx <= c.maxx) {
                if (e_112.child1 == null) {
                    var n_86 = e_112.shape.body.outer;
                    if (o == null || e_112.shape.filter.shouldCollide(o)) {
                        if (a) {
                            if (!this.failed.has(n_86)) {
                                var r_69 = t.Kn.containTest(this.circShape.zpp_inner, e_112.shape);
                                !l.has(n_86) && r_69 ? l.push(n_86) : r_69 || (l.remove(n_86), this.failed.push(n_86));
                            }
                        }
                        else
                            !l.has(n_86) && t.Kn.testCollide_safe(e_112.shape, this.circShape.zpp_inner) && l.push(n_86);
                    }
                }
                else
                    e_112.child1 != null && this.treeStack.add(e_112.child1), e_112.child2 != null && this.treeStack.add(e_112.child2);
            }
        } return this.failed.clear(), l; };
    e.prototype.shapesInShape = function (n, r, i, a) { this.sync_broadphase(), this.validateShape(n); var o = n.aabb, s = a == null ? new e._nape.shape.ShapeList : a; if (this.stree.root != null)
        for (this.treeStack == null && (this.treeStack = new t.n), this.treeStack.add(this.stree.root); this.treeStack.head != null;) {
            var e_113 = this.treeStack.pop_unsafe(), a_41 = e_113.aabb;
            o.miny <= a_41.maxy && a_41.miny <= o.maxy && o.minx <= a_41.maxx && a_41.minx <= o.maxx && (e_113.child1 == null ? (i == null || e_113.shape.filter.shouldCollide(i)) && (r ? t.Kn.containTest(n, e_113.shape) && s.push(e_113.shape.outer) : t.Kn.testCollide_safe(e_113.shape, n) && s.push(e_113.shape.outer)) : (e_113.child1 != null && this.treeStack.add(e_113.child1), e_113.child2 != null && this.treeStack.add(e_113.child2)));
        } if (this.dtree.root != null)
        for (this.treeStack == null && (this.treeStack = new t.n), this.treeStack.add(this.dtree.root); this.treeStack.head != null;) {
            var e_114 = this.treeStack.pop_unsafe(), a_42 = e_114.aabb;
            o.miny <= a_42.maxy && a_42.miny <= o.maxy && o.minx <= a_42.maxx && a_42.minx <= o.maxx && (e_114.child1 == null ? (i == null || e_114.shape.filter.shouldCollide(i)) && (r ? t.Kn.containTest(n, e_114.shape) && s.push(e_114.shape.outer) : t.Kn.testCollide_safe(e_114.shape, n) && s.push(e_114.shape.outer)) : (e_114.child1 != null && this.treeStack.add(e_114.child1), e_114.child2 != null && this.treeStack.add(e_114.child2)));
        } return s; };
    e.prototype.bodiesInShape = function (n, r, i, a) { this.sync_broadphase(), this.validateShape(n); var o = n.aabb, s = a == null ? new e._nape.phys.BodyList : a; if (this.failed == null && (this.failed = new e._nape.phys.BodyList), this.stree.root != null)
        for (this.treeStack == null && (this.treeStack = new t.n), this.treeStack.add(this.stree.root); this.treeStack.head != null;) {
            var e_115 = this.treeStack.pop_unsafe(), a_43 = e_115.aabb;
            if (o.miny <= a_43.maxy && a_43.miny <= o.maxy && o.minx <= a_43.maxx && a_43.minx <= o.maxx) {
                if (e_115.child1 == null) {
                    var a_44 = e_115.shape.body.outer;
                    if (i == null || e_115.shape.filter.shouldCollide(i)) {
                        if (r) {
                            if (!this.failed.has(a_44)) {
                                var r_70 = t.Kn.containTest(n, e_115.shape);
                                !s.has(a_44) && r_70 ? s.push(a_44) : r_70 || (s.remove(a_44), this.failed.push(a_44));
                            }
                        }
                        else
                            !s.has(a_44) && t.Kn.testCollide_safe(e_115.shape, n) && s.push(a_44);
                    }
                }
                else
                    e_115.child1 != null && this.treeStack.add(e_115.child1), e_115.child2 != null && this.treeStack.add(e_115.child2);
            }
        } if (this.dtree.root != null)
        for (this.treeStack == null && (this.treeStack = new t.n), this.treeStack.add(this.dtree.root); this.treeStack.head != null;) {
            var e_116 = this.treeStack.pop_unsafe(), a_45 = e_116.aabb;
            if (o.miny <= a_45.maxy && a_45.miny <= o.maxy && o.minx <= a_45.maxx && a_45.minx <= o.maxx) {
                if (e_116.child1 == null) {
                    var a_46 = e_116.shape.body.outer;
                    if (i == null || e_116.shape.filter.shouldCollide(i)) {
                        if (r) {
                            if (!this.failed.has(a_46)) {
                                var r_71 = t.Kn.containTest(n, e_116.shape);
                                !s.has(a_46) && r_71 ? s.push(a_46) : r_71 || (s.remove(a_46), this.failed.push(a_46));
                            }
                        }
                        else
                            !s.has(a_46) && t.Kn.testCollide_safe(e_116.shape, n) && s.push(a_46);
                    }
                }
                else
                    e_116.child1 != null && this.treeStack.add(e_116.child1), e_116.child2 != null && this.treeStack.add(e_116.child2);
            }
        } return this.failed.clear(), s; };
    e.prototype.rayCast = function (e, n, r) { this.openlist == null && (this.openlist = new t.n), this.sync_broadphase(), e.validate_dir(); var i = e.maxdist; if (this.dtree.root != null && e.aabbtest(this.dtree.root.aabb)) {
        var t_70 = e.aabbsect(this.dtree.root.aabb);
        if (t_70 >= 0 && t_70 < i) {
            this.dtree.root.rayt = t_70;
            var e_117 = null, n_87 = this.openlist.head;
            for (; n_87 != null;) {
                var t_71 = n_87.elt;
                if (this.dtree.root.rayt < t_71.rayt)
                    break;
                e_117 = n_87, n_87 = n_87.next;
            }
            var r_72 = this.dtree.root;
            this.openlist.insert(e_117, r_72);
        }
    } if (this.stree.root != null && e.aabbtest(this.stree.root.aabb)) {
        var t_72 = e.aabbsect(this.stree.root.aabb);
        if (t_72 >= 0 && t_72 < i) {
            this.stree.root.rayt = t_72;
            var e_118 = null, n_88 = this.openlist.head;
            for (; n_88 != null;) {
                var t_73 = n_88.elt;
                if (this.stree.root.rayt < t_73.rayt)
                    break;
                e_118 = n_88, n_88 = n_88.next;
            }
            var r_73 = this.stree.root;
            this.openlist.insert(e_118, r_73);
        }
    } var a = null; for (; this.openlist.head != null;) {
        var t_74 = this.openlist.pop_unsafe();
        if (t_74.rayt >= i)
            break;
        if (t_74.child1 == null) {
            var o_35 = t_74.shape;
            if (r == null || o_35.filter.shouldCollide(r)) {
                var t_75 = o_35.type == 0 ? e.circlesect(o_35.circle, n, i) : e.aabbtest(o_35.aabb) ? e.polysect(o_35.polygon, n, i) : null;
                if (t_75 != null) {
                    if (t_75.zpp_inner.next != null)
                        throw Error("This object has been disposed of and cannot be used");
                    if (i = t_75.zpp_inner.toiDistance, a != null) {
                        if (a.zpp_inner.next != null)
                            throw Error("This object has been disposed of and cannot be used");
                        a.zpp_inner.free();
                    }
                    a = t_75;
                }
            }
        }
        else {
            if (t_74.child1 != null && e.aabbtest(t_74.child1.aabb)) {
                var n_89 = e.aabbsect(t_74.child1.aabb);
                if (n_89 >= 0 && n_89 < i) {
                    t_74.child1.rayt = n_89;
                    var e_119 = null, r_74 = this.openlist.head;
                    for (; r_74 != null;) {
                        var n_90 = r_74.elt;
                        if (t_74.child1.rayt < n_90.rayt)
                            break;
                        e_119 = r_74, r_74 = r_74.next;
                    }
                    var i_45 = t_74.child1;
                    this.openlist.insert(e_119, i_45);
                }
            }
            if (t_74.child2 != null && e.aabbtest(t_74.child2.aabb)) {
                var n_91 = e.aabbsect(t_74.child2.aabb);
                if (n_91 >= 0 && n_91 < i) {
                    t_74.child2.rayt = n_91;
                    var e_120 = null, r_75 = this.openlist.head;
                    for (; r_75 != null;) {
                        var n_92 = r_75.elt;
                        if (t_74.child2.rayt < n_92.rayt)
                            break;
                        e_120 = r_75, r_75 = r_75.next;
                    }
                    var i_46 = t_74.child2;
                    this.openlist.insert(e_120, i_46);
                }
            }
        }
    } return this.openlist.clear(), a; };
    e.prototype.rayMultiCast = function (n, r, i, a) { this.openlist == null && (this.openlist = new t.n), this.sync_broadphase(), n.validate_dir(); var o = n.maxdist >= 1 / 0, s = a == null ? new e._nape.geom.RayResultList : a; if (this.dtree.root != null && n.aabbtest(this.dtree.root.aabb)) {
        if (o)
            this.openlist.add(this.dtree.root);
        else {
            var e_121 = n.aabbsect(this.dtree.root.aabb);
            e_121 >= 0 && e_121 < n.maxdist && this.openlist.add(this.dtree.root);
        }
    } if (this.stree.root != null && n.aabbtest(this.stree.root.aabb)) {
        if (o)
            this.openlist.add(this.stree.root);
        else {
            var e_122 = n.aabbsect(this.stree.root.aabb);
            e_122 >= 0 && e_122 < n.maxdist && this.openlist.add(this.stree.root);
        }
    } for (; this.openlist.head != null;) {
        var e_123 = this.openlist.pop_unsafe();
        if (e_123.child1 == null) {
            var t_76 = e_123.shape;
            (i == null || t_76.filter.shouldCollide(i)) && (t_76.type == 0 ? n.circlesect2(t_76.circle, r, s) : n.aabbtest(t_76.aabb) && n.polysect2(t_76.polygon, r, s));
        }
        else {
            if (e_123.child1 != null && n.aabbtest(e_123.child1.aabb)) {
                if (o)
                    this.openlist.add(e_123.child1);
                else {
                    var t_77 = n.aabbsect(e_123.child1.aabb);
                    t_77 >= 0 && t_77 < n.maxdist && this.openlist.add(e_123.child1);
                }
            }
            if (e_123.child2 != null && n.aabbtest(e_123.child2.aabb)) {
                if (o)
                    this.openlist.add(e_123.child2);
                else {
                    var t_78 = n.aabbsect(e_123.child2.aabb);
                    t_78 >= 0 && t_78 < n.maxdist && this.openlist.add(e_123.child2);
                }
            }
        }
    } return this.openlist.clear(), s; };
    return e;
}(L)), V._nape = null, V.FATTEN = 3, le = V, H = (function () {
    function H() {
        this.next = null, this.parent = this, this.rank = 0, this.isBody = !1, this.body = null, this.constraint = null, this.island = null, this.sleeping = !1, this.waket = 0, this.woken = !1, this._inuse = !1;
    }
    H.prototype.free = function () { this.body = null, this.constraint = null; };
    H.prototype.reset = function () { this.sleeping = !1, this.island = null, this.parent = this, this.rank = 0; };
    return H;
}()), H.zpp_pool = null, U = (function () {
    function U() {
        this.aabb = null, this.shape = null, this.prev = null, this.next = null;
    }
    U.prototype.free = function () { this.prev = null, this.shape = null, this.aabb = null; };
    return U;
}()), U.zpp_pool = null, ue = (function (_super) {
    __extends(e, _super);
    function e(e) {
        var _this = this;
        _this = _super.call(this) || this, _this.failed = null, _this.list = null, _this.space = e, _this.is_sweep = !0, _this.sweep = _this;
        return _this;
    }
    e.prototype.__insert = function (e) { var t; U.zpp_pool == null ? t = new U : (t = U.zpp_pool, U.zpp_pool = t.next, t.next = null), e.sweep = t, t.shape = e, t.aabb = e.aabb, t.next = this.list, this.list != null && (this.list.prev = t), this.list = t; };
    e.prototype.__remove = function (e) { var t = e.sweep; t.prev == null ? this.list = t.next : t.prev.next = t.next, t.next != null && (t.next.prev = t.prev), e.sweep = null; var n = t; n.prev = null, n.shape = null, n.aabb = null, n.next = U.zpp_pool, U.zpp_pool = n; };
    e.prototype.__sync = function (e) { this.space.continuous || e.validate_aabb(); };
    e.prototype.sync_broadphase = function () { if (this.space.validation(), this.list != null) {
        var e_124 = this.list.next;
        for (; e_124 != null;) {
            var t_79 = e_124.next, n_93 = e_124.prev;
            if (n_93 != null && e_124.aabb.minx > n_93.aabb.minx) {
                e_124 = t_79;
                continue;
            }
            for (; n_93.prev != null && n_93.prev.aabb.minx > e_124.aabb.minx;)
                n_93 = n_93.prev;
            var r_76 = e_124.prev;
            r_76.next = e_124.next, e_124.next != null && (e_124.next.prev = r_76), n_93.prev == null ? (e_124.prev = null, this.list = e_124, e_124.next = n_93, n_93.prev = e_124) : (e_124.prev = n_93.prev, n_93.prev = e_124, e_124.prev.next = e_124, e_124.next = n_93), e_124 = t_79;
        }
    } };
    e.prototype.broadphase = function (e, t) { if (this.list != null) {
        var n_94 = this.list.next;
        for (; n_94 != null;) {
            var e_125 = n_94.next, t_80 = n_94.prev;
            if (t_80 != null && n_94.aabb.minx > t_80.aabb.minx) {
                n_94 = e_125;
                continue;
            }
            for (; t_80.prev != null && t_80.prev.aabb.minx > n_94.aabb.minx;)
                t_80 = t_80.prev;
            var r_77 = n_94.prev;
            r_77.next = n_94.next, n_94.next != null && (n_94.next.prev = r_77), t_80.prev == null ? (n_94.prev = null, this.list = n_94, n_94.next = t_80, t_80.prev = n_94) : (n_94.prev = t_80.prev, t_80.prev = n_94, n_94.prev.next = n_94, n_94.next = t_80), n_94 = e_125;
        }
        var r_78 = this.list;
        for (; r_78 != null;) {
            var n_95 = r_78.next, i_47 = r_78.shape, a_47 = i_47.body, o_36 = r_78.aabb.maxx;
            for (; n_95 != null && !(n_95.aabb.minx > o_36);) {
                var r_79 = n_95.shape, o_37 = r_79.body;
                if (o_37 == a_47 || a_47.type == 1 && o_37.type == 1 || a_47.component.sleeping && o_37.component.sleeping) {
                    n_95 = n_95.next;
                    continue;
                }
                var s_32 = i_47.aabb, c_28 = r_79.aabb;
                c_28.miny > s_32.maxy || s_32.miny > c_28.maxy || (t ? e.narrowPhase(i_47, r_79, a_47.type != 2 || o_37.type != 2, null, !1) : e.continuousEvent(i_47, r_79, a_47.type != 2 || o_37.type != 2, null, !1)), n_95 = n_95.next;
            }
            r_78 = r_78.next;
        }
    } };
    e.prototype.clear = function () { for (; this.list != null;)
        this.list.shape.removedFromSpace(), this.__remove(this.list.shape); };
    e.prototype.shapesUnderPoint = function (n, r, i, a) { this.sync_broadphase(); var o = t.an.get(n, r), s = a == null ? new e._nape.shape.ShapeList : a, c = this.list; for (; c != null && c.aabb.minx > n;)
        c = c.next; for (; c != null && c.aabb.minx <= n;) {
        if (c.aabb.maxx >= n && c.aabb.miny <= r && c.aabb.maxy >= r) {
            var e_126 = c.shape;
            (i == null || e_126.filter.shouldCollide(i)) && (e_126.type == 0 ? t.Kn.circleContains(e_126.circle, o) && s.push(e_126.outer) : t.Kn.polyContains(e_126.polygon, o) && s.push(e_126.outer));
        }
        c = c.next;
    } var l = o; return l.free(), l.next = t.an.zpp_pool, t.an.zpp_pool = l, s; };
    e.prototype.bodiesUnderPoint = function (n, r, i, a) { this.sync_broadphase(); var o = t.an.get(n, r), s = a == null ? new e._nape.phys.BodyList : a, c = this.list; for (; c != null && c.aabb.minx > n;)
        c = c.next; for (; c != null && c.aabb.minx <= n;) {
        if (c.aabb.maxx >= n && c.aabb.miny <= r && c.aabb.maxy >= r) {
            var e_127 = c.shape, n_96 = e_127.body.outer;
            s.has(n_96) || (i == null || e_127.filter.shouldCollide(i)) && (e_127.type == 0 ? t.Kn.circleContains(e_127.circle, o) && s.push(n_96) : t.Kn.polyContains(e_127.polygon, o) && s.push(n_96));
        }
        c = c.next;
    } var l = o; return l.free(), l.next = t.an.zpp_pool, t.an.zpp_pool = l, s; };
    e.prototype.shapesInAABB = function (n, r, i, a, o) { this.sync_broadphase(), this.updateAABBShape(n); var s = this.aabbShape.zpp_inner.aabb, c = o == null ? new e._nape.shape.ShapeList : o, l = this.list; for (; l != null && l.aabb.maxx < s.minx;)
        l = l.next; for (; l != null && l.aabb.minx <= s.maxx;) {
        var e_128 = l.shape;
        if (a == null || e_128.filter.shouldCollide(a)) {
            if (r) {
                if (i)
                    t.Kn.containTest(this.aabbShape.zpp_inner, e_128) && c.push(e_128.outer);
                else {
                    var n_97 = l.aabb;
                    if (n_97.minx >= s.minx && n_97.miny >= s.miny && n_97.maxx <= s.maxx && n_97.maxy <= s.maxy)
                        c.push(e_128.outer);
                    else {
                        var n_98 = l.aabb;
                        s.miny <= n_98.maxy && n_98.miny <= s.maxy && s.minx <= n_98.maxx && n_98.minx <= s.maxx && t.Kn.testCollide_safe(e_128, this.aabbShape.zpp_inner) && c.push(e_128.outer);
                    }
                }
            }
            else {
                var t_81 = void 0;
                if (i) {
                    var e_129 = l.aabb;
                    t_81 = e_129.minx >= s.minx && e_129.miny >= s.miny && e_129.maxx <= s.maxx && e_129.maxy <= s.maxy;
                }
                else {
                    var e_130 = l.aabb;
                    t_81 = s.miny <= e_130.maxy && e_130.miny <= s.maxy && s.minx <= e_130.maxx && e_130.minx <= s.maxx;
                }
                t_81 && c.push(e_128.outer);
            }
        }
        l = l.next;
    } return c; };
    e.prototype.bodiesInAABB = function (n, r, i, a, o) { this.sync_broadphase(), this.updateAABBShape(n); var s = this.aabbShape.zpp_inner.aabb, c = o == null ? new e._nape.phys.BodyList : o; this.failed == null && (this.failed = new e._nape.phys.BodyList); var l = this.list; for (; l != null && l.aabb.maxx < s.minx;)
        l = l.next; for (; l != null && l.aabb.minx <= s.maxx;) {
        var e_131 = l.shape, n_99 = e_131.body.outer, o_38 = l.aabb;
        if (s.miny <= o_38.maxy && o_38.miny <= s.maxy && s.minx <= o_38.maxx && o_38.minx <= s.maxx && (a == null || e_131.filter.shouldCollide(a))) {
            if (r) {
                if (i) {
                    if (!this.failed.has(n_99)) {
                        var r_80 = t.Kn.containTest(this.aabbShape.zpp_inner, e_131);
                        !c.has(n_99) && r_80 ? c.push(n_99) : r_80 || (c.remove(n_99), this.failed.push(n_99));
                    }
                }
                else
                    !c.has(n_99) && t.Kn.testCollide_safe(e_131, this.aabbShape.zpp_inner) && c.push(n_99);
            }
            else if (i) {
                if (!this.failed.has(n_99)) {
                    var t_82 = e_131.aabb, r_81 = t_82.minx >= s.minx && t_82.miny >= s.miny && t_82.maxx <= s.maxx && t_82.maxy <= s.maxy;
                    !c.has(n_99) && r_81 ? c.push(n_99) : r_81 || (c.remove(n_99), this.failed.push(n_99));
                }
            }
            else {
                var t_83 = void 0;
                if (c.has(n_99))
                    t_83 = !1;
                else {
                    var n_100 = e_131.aabb;
                    t_83 = n_100.minx >= s.minx && n_100.miny >= s.miny && n_100.maxx <= s.maxx && n_100.maxy <= s.maxy;
                }
                t_83 && c.push(n_99);
            }
        }
        l = l.next;
    } return this.failed.clear(), c; };
    e.prototype.shapesInCircle = function (n, r, i, a, o, s) { this.sync_broadphase(), this.updateCircShape(n, r, i); var c = this.circShape.zpp_inner.aabb, l = s == null ? new e._nape.shape.ShapeList : s, u = this.list; for (; u != null && u.aabb.maxx < c.minx;)
        u = u.next; for (; u != null && u.aabb.minx <= c.maxx;) {
        var e_132 = u.aabb;
        if (c.miny <= e_132.maxy && e_132.miny <= c.maxy && c.minx <= e_132.maxx && e_132.minx <= c.maxx) {
            var e_133 = u.shape;
            (o == null || e_133.filter.shouldCollide(o)) && (a ? t.Kn.containTest(this.circShape.zpp_inner, e_133) && l.push(e_133.outer) : t.Kn.testCollide_safe(e_133, this.circShape.zpp_inner) && l.push(e_133.outer));
        }
        u = u.next;
    } return l; };
    e.prototype.bodiesInCircle = function (n, r, i, a, o, s) { this.sync_broadphase(), this.updateCircShape(n, r, i); var c = this.circShape.zpp_inner.aabb, l = s == null ? new e._nape.phys.BodyList : s; this.failed == null && (this.failed = new e._nape.phys.BodyList); var u = this.list; for (; u != null && u.aabb.maxx < c.minx;)
        u = u.next; for (; u != null && u.aabb.minx <= c.maxx;) {
        var e_134 = u.aabb;
        if (c.miny <= e_134.maxy && e_134.miny <= c.maxy && c.minx <= e_134.maxx && e_134.minx <= c.maxx) {
            var e_135 = u.shape, n_101 = e_135.body.outer;
            if (o == null || e_135.filter.shouldCollide(o)) {
                if (a) {
                    if (!this.failed.has(n_101)) {
                        var r_82 = t.Kn.containTest(this.circShape.zpp_inner, e_135);
                        !l.has(n_101) && r_82 ? l.push(n_101) : r_82 || (l.remove(n_101), this.failed.push(n_101));
                    }
                }
                else
                    !l.has(n_101) && t.Kn.testCollide_safe(e_135, this.circShape.zpp_inner) && l.push(n_101);
            }
        }
        u = u.next;
    } return this.failed.clear(), l; };
    e.prototype.shapesInShape = function (n, r, i, a) { this.sync_broadphase(), this.validateShape(n); var o = n.aabb, s = a == null ? new e._nape.shape.ShapeList : a, c = this.list; for (; c != null && c.aabb.maxx < o.minx;)
        c = c.next; for (; c != null && c.aabb.minx <= o.maxx;) {
        var e_136 = c.aabb;
        if (o.miny <= e_136.maxy && e_136.miny <= o.maxy && o.minx <= e_136.maxx && e_136.minx <= o.maxx) {
            var e_137 = c.shape;
            (i == null || e_137.filter.shouldCollide(i)) && (r ? t.Kn.containTest(n, e_137) && s.push(e_137.outer) : t.Kn.testCollide_safe(e_137, n) && s.push(e_137.outer));
        }
        c = c.next;
    } return s; };
    e.prototype.bodiesInShape = function (n, r, i, a) { this.sync_broadphase(), this.validateShape(n); var o = n.aabb, s = a == null ? new e._nape.phys.BodyList : a; this.failed == null && (this.failed = new e._nape.phys.BodyList); var c = this.list; for (; c != null && c.aabb.maxx < o.minx;)
        c = c.next; for (; c != null && c.aabb.minx <= o.maxx;) {
        var e_138 = c.aabb;
        if (o.miny <= e_138.maxy && e_138.miny <= o.maxy && o.minx <= e_138.maxx && e_138.minx <= o.maxx) {
            var e_139 = c.shape, a_48 = e_139.body.outer;
            if (i == null || e_139.filter.shouldCollide(i)) {
                if (r) {
                    if (!this.failed.has(a_48)) {
                        var r_83 = t.Kn.containTest(n, e_139);
                        !s.has(a_48) && r_83 ? s.push(a_48) : r_83 || (s.remove(a_48), this.failed.push(a_48));
                    }
                }
                else
                    !s.has(a_48) && t.Kn.testCollide_safe(n, e_139) && s.push(a_48);
            }
        }
        c = c.next;
    } return this.failed.clear(), s; };
    e.prototype.rayCast = function (e, n, r) { this.sync_broadphase(), e.validate_dir(); var i = e.rayAABB(), a = e.maxdist, o = null; if (e.dirx == 0) {
        var t_84 = this.list;
        for (; t_84 != null && t_84.aabb.minx <= i.minx;) {
            var s_33 = void 0, c_29 = t_84.aabb;
            if (i.miny <= c_29.maxy && c_29.miny <= i.maxy && i.minx <= c_29.maxx && c_29.minx <= i.maxx) {
                if (r != null) {
                    var e_140 = t_84.shape.filter;
                    s_33 = (e_140.collisionMask & r.collisionGroup) != 0 && (r.collisionMask & e_140.collisionGroup) != 0;
                }
                else
                    s_33 = !0;
            }
            else
                s_33 = !1;
            if (s_33) {
                var r_84 = e.aabbsect(t_84.aabb);
                if (r_84 >= 0 && r_84 < a) {
                    var r_85 = t_84.shape.type == 0 ? e.circlesect(t_84.shape.circle, n, a) : e.polysect(t_84.shape.polygon, n, a);
                    if (r_85 != null) {
                        if (r_85.zpp_inner.next != null)
                            throw Error("This object has been disposed of and cannot be used");
                        if (a = r_85.zpp_inner.toiDistance, o != null) {
                            if (o.zpp_inner.next != null)
                                throw Error("This object has been disposed of and cannot be used");
                            o.zpp_inner.free();
                        }
                        o = r_85;
                    }
                }
            }
            t_84 = t_84.next;
        }
    }
    else if (e.dirx < 0) {
        var t_85 = this.list, s_34 = null;
        for (; t_85 != null && t_85.aabb.minx <= i.maxx;)
            s_34 = t_85, t_85 = t_85.next;
        for (t_85 = s_34; t_85 != null;) {
            var s_35 = void 0, c_30 = t_85.aabb;
            if (i.miny <= c_30.maxy && c_30.miny <= i.maxy && i.minx <= c_30.maxx && c_30.minx <= i.maxx) {
                if (r != null) {
                    var e_141 = t_85.shape.filter;
                    s_35 = (e_141.collisionMask & r.collisionGroup) != 0 && (r.collisionMask & e_141.collisionGroup) != 0;
                }
                else
                    s_35 = !0;
            }
            else
                s_35 = !1;
            if (s_35) {
                var r_86 = e.aabbsect(t_85.aabb);
                if (r_86 >= 0 && r_86 < a) {
                    var r_87 = t_85.shape.type == 0 ? e.circlesect(t_85.shape.circle, n, a) : e.polysect(t_85.shape.polygon, n, a);
                    if (r_87 != null) {
                        if (r_87.zpp_inner.next != null)
                            throw Error("This object has been disposed of and cannot be used");
                        if (a = r_87.zpp_inner.toiDistance, o != null) {
                            if (o.zpp_inner.next != null)
                                throw Error("This object has been disposed of and cannot be used");
                            o.zpp_inner.free();
                        }
                        o = r_87;
                    }
                }
            }
            t_85 = t_85.prev;
        }
    }
    else {
        var t_86 = this.list;
        for (; t_86 != null && t_86.aabb.minx <= i.maxx && t_86.aabb.minx < e.originx + e.dirx * a;) {
            var s_36 = void 0, c_31 = t_86.aabb;
            if (i.miny <= c_31.maxy && c_31.miny <= i.maxy && i.minx <= c_31.maxx && c_31.minx <= i.maxx) {
                if (r != null) {
                    var e_142 = t_86.shape.filter;
                    s_36 = (e_142.collisionMask & r.collisionGroup) != 0 && (r.collisionMask & e_142.collisionGroup) != 0;
                }
                else
                    s_36 = !0;
            }
            else
                s_36 = !1;
            if (s_36) {
                var r_88 = e.aabbsect(t_86.aabb);
                if (r_88 >= 0 && r_88 < a) {
                    var r_89 = t_86.shape.type == 0 ? e.circlesect(t_86.shape.circle, n, a) : e.polysect(t_86.shape.polygon, n, a);
                    if (r_89 != null) {
                        if (r_89.zpp_inner.next != null)
                            throw Error("This object has been disposed of and cannot be used");
                        if (a = r_89.zpp_inner.toiDistance, o != null) {
                            if (o.zpp_inner.next != null)
                                throw Error("This object has been disposed of and cannot be used");
                            o.zpp_inner.free();
                        }
                        o = r_89;
                    }
                }
            }
            t_86 = t_86.next;
        }
    } var s = i; return s.free(), s.next = t.xt.zpp_pool, t.xt.zpp_pool = s, o; };
    e.prototype.rayMultiCast = function (n, r, i, a) { this.sync_broadphase(), n.validate_dir(); var o = n.rayAABB(), s = a == null ? new e._nape.geom.RayResultList : a; if (n.dirx == 0) {
        var e_143 = this.list;
        for (; e_143 != null && e_143.aabb.minx <= o.minx;) {
            var t_87 = void 0, a_49 = e_143.aabb;
            if (o.miny <= a_49.maxy && a_49.miny <= o.maxy && o.minx <= a_49.maxx && a_49.minx <= o.maxx) {
                if (i != null) {
                    var n_102 = e_143.shape.filter;
                    t_87 = (n_102.collisionMask & i.collisionGroup) != 0 && (i.collisionMask & n_102.collisionGroup) != 0;
                }
                else
                    t_87 = !0;
            }
            else
                t_87 = !1;
            t_87 && n.aabbsect(e_143.aabb) >= 0 && (e_143.shape.type == 0 ? n.circlesect2(e_143.shape.circle, r, s) : n.polysect2(e_143.shape.polygon, r, s)), e_143 = e_143.next;
        }
    }
    else if (n.dirx < 0) {
        var e_144 = this.list, t_88 = null;
        for (; e_144 != null && e_144.aabb.minx <= o.maxx;)
            t_88 = e_144, e_144 = e_144.next;
        for (e_144 = t_88; e_144 != null;) {
            var t_89 = void 0, a_50 = e_144.aabb;
            if (o.miny <= a_50.maxy && a_50.miny <= o.maxy && o.minx <= a_50.maxx && a_50.minx <= o.maxx) {
                if (i != null) {
                    var n_103 = e_144.shape.filter;
                    t_89 = (n_103.collisionMask & i.collisionGroup) != 0 && (i.collisionMask & n_103.collisionGroup) != 0;
                }
                else
                    t_89 = !0;
            }
            else
                t_89 = !1;
            t_89 && n.aabbsect(e_144.aabb) >= 0 && (e_144.shape.type == 0 ? n.circlesect2(e_144.shape.circle, r, s) : n.polysect2(e_144.shape.polygon, r, s)), e_144 = e_144.prev;
        }
    }
    else {
        var e_145 = this.list;
        for (; e_145 != null && e_145.aabb.minx <= o.maxx;) {
            var t_90 = void 0, a_51 = e_145.aabb;
            if (o.miny <= a_51.maxy && a_51.miny <= o.maxy && o.minx <= a_51.maxx && a_51.minx <= o.maxx) {
                if (i != null) {
                    var n_104 = e_145.shape.filter;
                    t_90 = (n_104.collisionMask & i.collisionGroup) != 0 && (i.collisionMask & n_104.collisionGroup) != 0;
                }
                else
                    t_90 = !0;
            }
            else
                t_90 = !1;
            t_90 && n.aabbsect(e_145.aabb) >= 0 && (e_145.shape.type == 0 ? n.circlesect2(e_145.shape.circle, r, s) : n.polysect2(e_145.shape.polygon, r, s)), e_145 = e_145.next;
        }
    } var c = o; return c.free(), c.next = t.xt.zpp_pool, t.xt.zpp_pool = c, s; };
    return e;
}(L)), ue._nape = null, de = ue, fe = (function (_super) {
    __extends(e, _super);
    function e(e, t) {
        var _this = this;
        _this = _super.call(this) || this, _this.shapes = [], _this.grid = new Map, _this.cellPool = [], _this.testedPairs = new Set, _this.frameCount = 0, _this.space = e, _this.is_sweep = !0, _this.is_spatial_hash = !0, _this.sweep = _this, t != null && t > 0 ? (_this.cellSize = t, _this.fixedCellSize = !0) : (_this.cellSize = 64, _this.fixedCellSize = !1), _this.invCellSize = 1 / _this.cellSize;
        return _this;
    }
    e.prototype.__insert = function (e) { this.shapes.push(e), e.__shIdx = this.shapes.length - 1; };
    e.prototype.__remove = function (e) { var t = e.__shIdx, n = this.shapes.length - 1; if (t !== n) {
        var e_146 = this.shapes[n];
        this.shapes[t] = e_146, e_146.__shIdx = t;
    } this.shapes.pop(), e.__shIdx = void 0; };
    e.prototype.__sync = function (e) { this.space.continuous || e.validate_aabb(); };
    e.prototype.autoTuneCellSize = function () { if (this.fixedCellSize || this.shapes.length === 0)
        return; var e = 0, t = 0, n = 0; for (var r_90 = 0; r_90 < this.shapes.length; r_90++) {
        var i_48 = this.shapes[r_90].aabb;
        i_48 != null && (e += i_48.maxx - i_48.minx, t += i_48.maxy - i_48.miny, n++);
    } if (n === 0)
        return; var r = (e + t) / (2 * n), i = Math.max(r * 2, 8); this.cellSize = i, this.invCellSize = 1 / i; };
    e.prototype.broadphase = function (t, r) { var i = this.shapes.length; if (i === 0)
        return; this.frameCount++, (this.frameCount === 1 || !this.fixedCellSize && this.frameCount % e.TUNE_INTERVAL === 0) && this.autoTuneCellSize(); var a = this.invCellSize, o = this.grid, s = this.cellPool; o.forEach(n, s), o.clear(); var c = this.testedPairs; c.clear(); for (var e_147 = 0; e_147 < i; e_147++) {
        var n_105 = this.shapes[e_147], i_49 = n_105.aabb, l_25 = n_105.__shIdx, u_28 = i_49.minx * a | 0, d_21 = i_49.miny * a | 0, f_21 = i_49.maxx * a | 0, p_20 = i_49.maxy * a | 0;
        if (u_28 === f_21 && d_21 === p_20) {
            var e_148 = u_28 * 73856093 ^ d_21 * 19349663, a_52 = o.get(e_148);
            a_52 === void 0 && (a_52 = s.length > 0 ? s.pop() : [], o.set(e_148, a_52));
            var c_32 = a_52.length, l_26 = n_105.body, f_22 = l_26.type, p_21 = l_26.component.sleeping;
            for (var e_149 = 0; e_149 < c_32; e_149++) {
                var o_39 = a_52[e_149], s_37 = o_39.body;
                if (s_37 === l_26 || f_22 === 1 && s_37.type === 1 || p_21 && s_37.component.sleeping)
                    continue;
                var c_33 = o_39.aabb;
                c_33.miny > i_49.maxy || i_49.miny > c_33.maxy || c_33.minx > i_49.maxx || i_49.minx > c_33.maxx || (r ? t.narrowPhase(n_105, o_39, f_22 !== 2 || s_37.type !== 2, null, !1) : t.continuousEvent(n_105, o_39, f_22 !== 2 || s_37.type !== 2, null, !1));
            }
            a_52.push(n_105);
        }
        else
            for (var e_150 = u_28; e_150 <= f_21; e_150++)
                for (var a_53 = d_21; a_53 <= p_20; a_53++) {
                    var u_29 = e_150 * 73856093 ^ a_53 * 19349663, d_22 = o.get(u_29);
                    d_22 === void 0 && (d_22 = s.length > 0 ? s.pop() : [], o.set(u_29, d_22));
                    var f_23 = d_22.length, p_22 = n_105.body, m_17 = p_22.type, h_11 = p_22.component.sleeping;
                    for (var e_151 = 0; e_151 < f_23; e_151++) {
                        var a_54 = d_22[e_151], o_40 = a_54.body;
                        if (o_40 === p_22 || m_17 === 1 && o_40.type === 1 || h_11 && o_40.component.sleeping)
                            continue;
                        var s_38 = a_54.__shIdx, u_30 = l_25 < s_38 ? l_25 : s_38, f_24 = l_25 < s_38 ? s_38 : l_25, g_4 = f_24 * f_24 + u_30;
                        if (c.has(g_4))
                            continue;
                        c.add(g_4);
                        var _4 = a_54.aabb;
                        _4.miny > i_49.maxy || i_49.miny > _4.maxy || _4.minx > i_49.maxx || i_49.minx > _4.maxx || (r ? t.narrowPhase(n_105, a_54, m_17 !== 2 || o_40.type !== 2, null, !1) : t.continuousEvent(n_105, a_54, m_17 !== 2 || o_40.type !== 2, null, !1));
                    }
                    d_22.push(n_105);
                }
    } };
    e.prototype.clear = function () { for (; this.shapes.length > 0;) {
        var e_152 = this.shapes[this.shapes.length - 1];
        e_152.removedFromSpace(), this.__remove(e_152);
    } this.grid.clear(), this.cellPool.length = 0, this.testedPairs.clear(); };
    e.prototype.shapesUnderPoint = function (n, r, i, a) { this.space.validation(); var o = t.an.get(n, r), s = a == null ? new e._nape.shape.ShapeList : a; for (var e_153 = 0; e_153 < this.shapes.length; e_153++) {
        var a_55 = this.shapes[e_153], c_34 = a_55.aabb;
        c_34.minx <= n && c_34.maxx >= n && c_34.miny <= r && c_34.maxy >= r && (i == null || a_55.filter.shouldCollide(i)) && (a_55.type == 0 ? t.Kn.circleContains(a_55.circle, o) && s.push(a_55.outer) : t.Kn.polyContains(a_55.polygon, o) && s.push(a_55.outer));
    } var c = o; return c.free(), c.next = t.an.zpp_pool, t.an.zpp_pool = c, s; };
    e.prototype.bodiesUnderPoint = function (n, r, i, a) { this.space.validation(); var o = t.an.get(n, r), s = a == null ? new e._nape.phys.BodyList : a, c = new Set; for (var e_154 = 0; e_154 < s.length; e_154++)
        c.add(s.at(e_154)); for (var e_155 = 0; e_155 < this.shapes.length; e_155++) {
        var a_56 = this.shapes[e_155], l_27 = a_56.aabb;
        if (l_27.minx <= n && l_27.maxx >= n && l_27.miny <= r && l_27.maxy >= r) {
            var e_156 = a_56.body.outer;
            c.has(e_156) || (i == null || a_56.filter.shouldCollide(i)) && (a_56.type == 0 ? t.Kn.circleContains(a_56.circle, o) && (c.add(e_156), s.push(e_156)) : t.Kn.polyContains(a_56.polygon, o) && (c.add(e_156), s.push(e_156)));
        }
    } var l = o; return l.free(), l.next = t.an.zpp_pool, t.an.zpp_pool = l, s; };
    e.prototype.shapesInAABB = function (n, r, i, a, o) { this.space.validation(), this.updateAABBShape(n); var s = this.aabbShape.zpp_inner.aabb, c = o == null ? new e._nape.shape.ShapeList : o; for (var e_157 = 0; e_157 < this.shapes.length; e_157++) {
        var n_106 = this.shapes[e_157];
        if (a == null || n_106.filter.shouldCollide(a)) {
            if (r) {
                if (i)
                    t.Kn.containTest(this.aabbShape.zpp_inner, n_106) && c.push(n_106.outer);
                else {
                    var e_158 = n_106.aabb;
                    if (e_158.minx >= s.minx && e_158.miny >= s.miny && e_158.maxx <= s.maxx && e_158.maxy <= s.maxy)
                        c.push(n_106.outer);
                    else {
                        var e_159 = n_106.aabb;
                        s.miny <= e_159.maxy && e_159.miny <= s.maxy && s.minx <= e_159.maxx && e_159.minx <= s.maxx && t.Kn.testCollide_safe(n_106, this.aabbShape.zpp_inner) && c.push(n_106.outer);
                    }
                }
            }
            else {
                var e_160 = void 0;
                if (i) {
                    var t_91 = n_106.aabb;
                    e_160 = t_91.minx >= s.minx && t_91.miny >= s.miny && t_91.maxx <= s.maxx && t_91.maxy <= s.maxy;
                }
                else {
                    var t_92 = n_106.aabb;
                    e_160 = s.miny <= t_92.maxy && t_92.miny <= s.maxy && s.minx <= t_92.maxx && t_92.minx <= s.maxx;
                }
                e_160 && c.push(n_106.outer);
            }
        }
    } return c; };
    e.prototype.bodiesInAABB = function (n, r, i, a, o) { this.space.validation(), this.updateAABBShape(n); var s = this.aabbShape.zpp_inner.aabb, c = o == null ? new e._nape.phys.BodyList : o, l = new Set; for (var e_161 = 0; e_161 < c.length; e_161++)
        l.add(c.at(e_161)); var u = new Set; for (var e_162 = 0; e_162 < this.shapes.length; e_162++) {
        var n_107 = this.shapes[e_162], o_41 = n_107.body.outer, d_23 = n_107.aabb;
        if (s.miny <= d_23.maxy && d_23.miny <= s.maxy && s.minx <= d_23.maxx && d_23.minx <= s.maxx && (a == null || n_107.filter.shouldCollide(a))) {
            if (r) {
                if (i) {
                    if (!u.has(o_41)) {
                        var e_163 = t.Kn.containTest(this.aabbShape.zpp_inner, n_107);
                        !l.has(o_41) && e_163 ? (l.add(o_41), c.push(o_41)) : e_163 || (l.delete(o_41), c.remove(o_41), u.add(o_41));
                    }
                }
                else
                    !l.has(o_41) && t.Kn.testCollide_safe(n_107, this.aabbShape.zpp_inner) && (l.add(o_41), c.push(o_41));
            }
            else if (i) {
                if (!u.has(o_41)) {
                    var e_164 = n_107.aabb, t_93 = e_164.minx >= s.minx && e_164.miny >= s.miny && e_164.maxx <= s.maxx && e_164.maxy <= s.maxy;
                    !l.has(o_41) && t_93 ? (l.add(o_41), c.push(o_41)) : t_93 || (l.delete(o_41), c.remove(o_41), u.add(o_41));
                }
            }
            else {
                var e_165 = void 0;
                if (l.has(o_41))
                    e_165 = !1;
                else {
                    var t_94 = n_107.aabb;
                    e_165 = t_94.minx >= s.minx && t_94.miny >= s.miny && t_94.maxx <= s.maxx && t_94.maxy <= s.maxy;
                }
                e_165 && (l.add(o_41), c.push(o_41));
            }
        }
    } return c; };
    e.prototype.shapesInCircle = function (n, r, i, a, o, s) { this.space.validation(), this.updateCircShape(n, r, i); var c = this.circShape.zpp_inner.aabb, l = s == null ? new e._nape.shape.ShapeList : s; for (var e_166 = 0; e_166 < this.shapes.length; e_166++) {
        var n_108 = this.shapes[e_166], r_91 = n_108.aabb;
        c.miny <= r_91.maxy && r_91.miny <= c.maxy && c.minx <= r_91.maxx && r_91.minx <= c.maxx && (o == null || n_108.filter.shouldCollide(o)) && (a ? t.Kn.containTest(this.circShape.zpp_inner, n_108) && l.push(n_108.outer) : t.Kn.testCollide_safe(n_108, this.circShape.zpp_inner) && l.push(n_108.outer));
    } return l; };
    e.prototype.bodiesInCircle = function (n, r, i, a, o, s) { this.space.validation(), this.updateCircShape(n, r, i); var c = this.circShape.zpp_inner.aabb, l = s == null ? new e._nape.phys.BodyList : s, u = new Set; for (var e_167 = 0; e_167 < l.length; e_167++)
        u.add(l.at(e_167)); var d = new Set; for (var e_168 = 0; e_168 < this.shapes.length; e_168++) {
        var n_109 = this.shapes[e_168], r_92 = n_109.aabb;
        if (c.miny <= r_92.maxy && r_92.miny <= c.maxy && c.minx <= r_92.maxx && r_92.minx <= c.maxx) {
            var e_169 = n_109.body.outer;
            if (o == null || n_109.filter.shouldCollide(o)) {
                if (a) {
                    if (!d.has(e_169)) {
                        var r_93 = t.Kn.containTest(this.circShape.zpp_inner, n_109);
                        !u.has(e_169) && r_93 ? (u.add(e_169), l.push(e_169)) : r_93 || (u.delete(e_169), l.remove(e_169), d.add(e_169));
                    }
                }
                else
                    !u.has(e_169) && t.Kn.testCollide_safe(n_109, this.circShape.zpp_inner) && (u.add(e_169), l.push(e_169));
            }
        }
    } return l; };
    e.prototype.shapesInShape = function (n, r, i, a) { this.space.validation(), this.validateShape(n); var o = n.aabb, s = a == null ? new e._nape.shape.ShapeList : a; for (var e_170 = 0; e_170 < this.shapes.length; e_170++) {
        var a_57 = this.shapes[e_170], c_35 = a_57.aabb;
        o.miny <= c_35.maxy && c_35.miny <= o.maxy && o.minx <= c_35.maxx && c_35.minx <= o.maxx && (i == null || a_57.filter.shouldCollide(i)) && (r ? t.Kn.containTest(n, a_57) && s.push(a_57.outer) : t.Kn.testCollide_safe(a_57, n) && s.push(a_57.outer));
    } return s; };
    e.prototype.bodiesInShape = function (n, r, i, a) { this.space.validation(), this.validateShape(n); var o = n.aabb, s = a == null ? new e._nape.phys.BodyList : a, c = new Set; for (var e_171 = 0; e_171 < s.length; e_171++)
        c.add(s.at(e_171)); var l = new Set; for (var e_172 = 0; e_172 < this.shapes.length; e_172++) {
        var a_58 = this.shapes[e_172], u_31 = a_58.aabb;
        if (o.miny <= u_31.maxy && u_31.miny <= o.maxy && o.minx <= u_31.maxx && u_31.minx <= o.maxx) {
            var e_173 = a_58.body.outer;
            if (i == null || a_58.filter.shouldCollide(i)) {
                if (r) {
                    if (!l.has(e_173)) {
                        var r_94 = t.Kn.containTest(n, a_58);
                        !c.has(e_173) && r_94 ? (c.add(e_173), s.push(e_173)) : r_94 || (c.delete(e_173), s.remove(e_173), l.add(e_173));
                    }
                }
                else
                    !c.has(e_173) && t.Kn.testCollide_safe(n, a_58) && (c.add(e_173), s.push(e_173));
            }
        }
    } return s; };
    e.prototype.rayCast = function (e, n, r) { this.space.validation(), e.validate_dir(); var i = e.rayAABB(), a = e.maxdist, o = null; for (var t_95 = 0; t_95 < this.shapes.length; t_95++) {
        var s_39 = this.shapes[t_95], c_36 = s_39.aabb, l_28 = void 0;
        if (i.miny <= c_36.maxy && c_36.miny <= i.maxy && i.minx <= c_36.maxx && c_36.minx <= i.maxx) {
            if (r != null) {
                var e_174 = s_39.filter;
                l_28 = (e_174.collisionMask & r.collisionGroup) != 0 && (r.collisionMask & e_174.collisionGroup) != 0;
            }
            else
                l_28 = !0;
        }
        else
            l_28 = !1;
        if (l_28) {
            var t_96 = e.aabbsect(c_36);
            if (t_96 >= 0 && t_96 < a) {
                var t_97 = s_39.type == 0 ? e.circlesect(s_39.circle, n, a) : e.polysect(s_39.polygon, n, a);
                if (t_97 != null) {
                    if (t_97.zpp_inner.next != null)
                        throw Error("This object has been disposed of and cannot be used");
                    if (a = t_97.zpp_inner.toiDistance, o != null) {
                        if (o.zpp_inner.next != null)
                            throw Error("This object has been disposed of and cannot be used");
                        o.zpp_inner.free();
                    }
                    o = t_97;
                }
            }
        }
    } var s = i; return s.free(), s.next = t.xt.zpp_pool, t.xt.zpp_pool = s, o; };
    e.prototype.rayMultiCast = function (n, r, i, a) { this.space.validation(), n.validate_dir(); var o = n.rayAABB(), s = a == null ? new e._nape.geom.RayResultList : a; for (var e_175 = 0; e_175 < this.shapes.length; e_175++) {
        var t_98 = this.shapes[e_175], a_59 = t_98.aabb, c_37 = void 0;
        if (o.miny <= a_59.maxy && a_59.miny <= o.maxy && o.minx <= a_59.maxx && a_59.minx <= o.maxx) {
            if (i != null) {
                var e_176 = t_98.filter;
                c_37 = (e_176.collisionMask & i.collisionGroup) != 0 && (i.collisionMask & e_176.collisionGroup) != 0;
            }
            else
                c_37 = !0;
        }
        else
            c_37 = !1;
        c_37 && n.aabbsect(a_59) >= 0 && (t_98.type == 0 ? n.circlesect2(t_98.circle, r, s) : n.polysect2(t_98.polygon, r, s));
    } var c = o; return c.free(), c.next = t.xt.zpp_pool, t.xt.zpp_pool = c, s; };
    return e;
}(L)), fe._nape = null, fe.TUNE_INTERVAL = 120, pe = fe, me = !1, W = (function () {
    function W() {
        this.outer = null, this.inner = null, this.immutable = !1, this._invalidated = !1, this._invalidate = null, this._validate = null, this._modifiable = null, this.adder = null, this.post_adder = null, this.subber = null, this.dontremove = !1, this.reverse_flag = !1, this.at_index = 0, this.at_ite = null, this.push_ite = null, this.zip_length = !1, this.user_length = 0, this.inner = new t.ft, this._invalidated = !0;
    }
    W.get = function (e, n) { n == null && (n = !1); var r = new (t.E()).dynamics.ContactList; return r.zpp_inner.inner = e, n && (r.zpp_inner.immutable = !0), r.zpp_inner.zip_length = !0, r; };
    W.prototype.valmod = function () { this.validate(), this.inner.modified && (this.inner.pushmod && (this.push_ite = null), this.at_ite = null, this.inner.modified = !1, this.inner.pushmod = !1, this.zip_length = !0); };
    W.prototype.modified = function () { this.zip_length = !0, this.at_ite = null, this.push_ite = null; };
    W.prototype.modify_test = function () { this._modifiable != null && this._modifiable(); };
    W.prototype.validate = function () { this._invalidated && (this._invalidated = !1, this._validate != null && this._validate()); };
    W.prototype.invalidate = function () { this._invalidated = !0, this._invalidate != null && this._invalidate(this); };
    return W;
}()), W.internal = !1, o.zpp_pool = null, o.get = function (e) { var t; return o.zpp_pool == null ? (W.internal = !0, t = new o, W.internal = !1) : (t = o.zpp_pool, o.zpp_pool = t.zpp_next), t.zpp_i = 0, t.zpp_inner = e, t.zpp_critical = !1, t; }, o.prototype.zpp_inner = null, o.prototype.zpp_i = null, o.prototype.zpp_critical = null, o.prototype.zpp_next = null, o.prototype.hasNext = function () { this.zpp_inner.zpp_inner.valmod(); var e = a(this.zpp_inner.zpp_inner); return this.zpp_critical = !0, this.zpp_i < e || (this.zpp_next = o.zpp_pool, o.zpp_pool = this, this.zpp_inner = null, !1); }, o.prototype.next = function () { return this.zpp_critical = !1, this.zpp_inner.at(this.zpp_i++); }, s.fromArray = function (e) { if (e == null)
    throw Error("Cannot convert null Array to Nape list"); var n = new (t.E()).dynamics.ContactList; for (var t_99 = 0; t_99 < e.length; t_99++)
    n.push(e[t_99]); return n; }, s.prototype.zpp_inner = null, Object.defineProperty(s.prototype, "length", { get: function () { return a(this.zpp_inner); } }), s.prototype.has = function (e) { return this.zpp_inner.valmod(), this.zpp_inner.inner.has(e.zpp_inner); }, s.prototype.at = function (e) { this.zpp_inner.valmod(); var t = a(this.zpp_inner); if (e < 0 || e >= t)
    throw Error("Index out of bounds"); if (this.zpp_inner.reverse_flag && (e = a(this.zpp_inner) - 1 - e), e < this.zpp_inner.at_index || this.zpp_inner.at_ite == null)
    for (this.zpp_inner.at_index = 0, this.zpp_inner.at_ite = this.zpp_inner.inner.next;;) {
        var e_177 = this.zpp_inner.at_ite;
        if (e_177.active && e_177.arbiter.active)
            break;
        this.zpp_inner.at_ite = this.zpp_inner.at_ite.next;
    } for (; this.zpp_inner.at_index != e;)
    for (this.zpp_inner.at_index++, this.zpp_inner.at_ite = this.zpp_inner.at_ite.next;;) {
        var e_178 = this.zpp_inner.at_ite;
        if (e_178.active && e_178.arbiter.active)
            break;
        this.zpp_inner.at_ite = this.zpp_inner.at_ite.next;
    } return this.zpp_inner.at_ite.wrapper(); }, s.prototype.push = function (e) { if (this.zpp_inner.immutable)
    throw Error("ContactList is immutable"); this.zpp_inner.modify_test(), this.zpp_inner.valmod(); var t = this.zpp_inner.adder == null || this.zpp_inner.adder(e); if (t) {
    if (this.zpp_inner.reverse_flag)
        this.zpp_inner.inner.add(e.zpp_inner);
    else {
        if (this.zpp_inner.push_ite == null) {
            var e_179 = a(this.zpp_inner);
            e_179 == 0 ? this.zpp_inner.push_ite = null : this.zpp_inner.push_ite = this.zpp_inner.inner.iterator_at(e_179 - 1);
        }
        this.zpp_inner.push_ite = this.zpp_inner.inner.insert(this.zpp_inner.push_ite, e.zpp_inner);
    }
    this.zpp_inner.invalidate(), this.zpp_inner.post_adder != null && this.zpp_inner.post_adder(e);
} return t; }, s.prototype.unshift = function (e) { if (this.zpp_inner.immutable)
    throw Error("ContactList is immutable"); this.zpp_inner.modify_test(), this.zpp_inner.valmod(); var t = this.zpp_inner.adder == null || this.zpp_inner.adder(e); if (t) {
    if (this.zpp_inner.reverse_flag) {
        if (this.zpp_inner.push_ite == null) {
            var e_180 = a(this.zpp_inner);
            e_180 == 0 ? this.zpp_inner.push_ite = null : this.zpp_inner.push_ite = this.zpp_inner.inner.iterator_at(e_180 - 1);
        }
        this.zpp_inner.push_ite = this.zpp_inner.inner.insert(this.zpp_inner.push_ite, e.zpp_inner);
    }
    else
        this.zpp_inner.inner.add(e.zpp_inner);
    this.zpp_inner.invalidate(), this.zpp_inner.post_adder != null && this.zpp_inner.post_adder(e);
} return t; }, s.prototype.pop = function () { if (this.zpp_inner.immutable)
    throw Error("ContactList is immutable"); if (this.zpp_inner.modify_test(), a(this.zpp_inner) == 0)
    throw Error("Cannot remove from empty list"); this.zpp_inner.valmod(); var e; if (this.zpp_inner.reverse_flag) {
    e = this.zpp_inner.inner.next;
    var t_100 = e.wrapper();
    this.zpp_inner.subber != null && this.zpp_inner.subber(t_100), this.zpp_inner.dontremove || this.zpp_inner.inner.pop();
}
else {
    this.zpp_inner.at_ite != null && this.zpp_inner.at_ite.next == null && (this.zpp_inner.at_ite = null);
    var t_101 = a(this.zpp_inner), n_110;
    n_110 = t_101 == 1 ? null : this.zpp_inner.inner.iterator_at(t_101 - 2), e = n_110 == null ? this.zpp_inner.inner.next : n_110.next;
    var r_95 = e.wrapper();
    this.zpp_inner.subber != null && this.zpp_inner.subber(r_95), this.zpp_inner.dontremove || this.zpp_inner.inner.erase(n_110);
} return this.zpp_inner.invalidate(), e.wrapper(); }, s.prototype.shift = function () { if (this.zpp_inner.immutable)
    throw Error("ContactList is immutable"); if (this.zpp_inner.modify_test(), a(this.zpp_inner) == 0)
    throw Error("Cannot remove from empty list"); this.zpp_inner.valmod(); var e; if (this.zpp_inner.reverse_flag) {
    this.zpp_inner.at_ite != null && this.zpp_inner.at_ite.next == null && (this.zpp_inner.at_ite = null);
    var t_102 = a(this.zpp_inner), n_111;
    n_111 = t_102 == 1 ? null : this.zpp_inner.inner.iterator_at(t_102 - 2), e = n_111 == null ? this.zpp_inner.inner.next : n_111.next;
    var r_96 = e.wrapper();
    this.zpp_inner.subber != null && this.zpp_inner.subber(r_96), this.zpp_inner.dontremove || this.zpp_inner.inner.erase(n_111);
}
else {
    e = this.zpp_inner.inner.next;
    var t_103 = e.wrapper();
    this.zpp_inner.subber != null && this.zpp_inner.subber(t_103), this.zpp_inner.dontremove || this.zpp_inner.inner.pop();
} return this.zpp_inner.invalidate(), e.wrapper(); }, s.prototype.add = function (e) { return this.zpp_inner.reverse_flag ? this.push(e) : this.unshift(e); }, s.prototype.remove = function (e) { if (this.zpp_inner.immutable)
    throw Error("ContactList is immutable"); this.zpp_inner.modify_test(), this.zpp_inner.valmod(); var t = !1, n = this.zpp_inner.inner.next; for (; n != null;) {
    if (n == e.zpp_inner) {
        t = !0;
        break;
    }
    n = n.next;
} return t && (this.zpp_inner.subber != null && this.zpp_inner.subber(e), this.zpp_inner.dontremove || this.zpp_inner.inner.remove(e.zpp_inner), this.zpp_inner.invalidate()), t; }, s.prototype.clear = function () { if (this.zpp_inner.immutable)
    throw Error("ContactList is immutable"); if (this.zpp_inner.reverse_flag)
    for (; a(this.zpp_inner) != 0;)
        this.pop();
else
    for (; a(this.zpp_inner) != 0;)
        this.shift(); }, s.prototype.empty = function () { return a(this.zpp_inner) == 0; }, s.prototype.iterator = function () { return this.zpp_inner.valmod(), o.get(this); }, s.prototype.copy = function (e) { e == null && (e = !1); var n = new (t.E()).dynamics.ContactList; this.zpp_inner.valmod(); var r = o.get(this); for (; r.hasNext();) {
    var t_104 = r.next();
    if (e)
        throw Error("Contact is not a copyable type");
    n.push(t_104);
} return n; }, s.prototype.merge = function (e) { if (e == null)
    throw Error("Cannot merge with null list"); e.zpp_inner.valmod(); var t = o.get(e); for (; t.hasNext();) {
    var e_181 = t.next();
    this.has(e_181) || (this.zpp_inner.reverse_flag ? this.push(e_181) : this.unshift(e_181));
} }, s.prototype.toString = function () { var e = "[", t = !0; this.zpp_inner.valmod(); var n = o.get(this); for (; n.hasNext();) {
    var r_97 = n.next();
    t || (e += ","), e += r_97 == null ? "NULL" : r_97.toString(), t = !1;
} return e + "]"; }, s.prototype.foreach = function (e) { if (e == null)
    throw Error("Cannot execute null on list elements"); this.zpp_inner.valmod(); var t = o.get(this); for (; t.hasNext();)
    try {
        e(t.next());
    }
    catch (e) {
        t.zpp_next = o.zpp_pool, o.zpp_pool = t, t.zpp_inner = null;
        break;
    } return this; }, t.Jn(s.prototype, function (e) { return o.get(e); }), s.prototype.filter = function (e) { if (e == null)
    throw Error("Cannot select elements of list with null"); var t = 0; for (;;) {
    var n_112 = a(this.zpp_inner);
    if (!(t < n_112))
        break;
    var r_98 = this.at(t);
    try {
        e(r_98) ? ++t : this.remove(r_98);
    }
    catch (e) {
        break;
    }
} return this; }, he = (function () {
    function he() {
    }
    he.version = function () { return "nape-js 3.43.5"; };
    he.clearObjectPools = function () { c(t.nn, "zpp_pool", "zpp_next"), c(t.sr, "zpp_pool", "zpp_next"), c(t.L, "zpp_pool", "zpp_next"), c(t.At, "zpp_pool", "zpp_next"), c(t.Bt, "zpp_pool", "zpp_next"), c(t.U, "zpp_pool", "zpp_next"), c(t.Vn, "zpp_pool", "zpp_next"), c(t.Rn, "zpp_pool", "zpp_next"), c(t.zt, "zpp_pool", "zpp_next"), c(t.in, "zpp_pool", "zpp_next"), c(t._, "zpp_pool", "zpp_next"), c(t.An, "zpp_pool", "zpp_next"), c(o, "zpp_pool", "zpp_next"), c(t.tr, "zpp_pool", "zpp_next"), c(t.dn, "zpp_pool", "zpp_next"), c(t.Ln, "zpp_pool", "next"), c(t.vr, "zpp_pool", "next"), c(t.dr, "zpp_pool", "next"), c(t.pr, "zpp_pool", "next"), c(t.yn, "zpp_pool", "next"), c(t.ut, "zpp_pool", "next"), c(t.Dt, "zpp_pool", "next"), c(t.f, "zpp_pool", "next"), c(t.$, "zpp_pool", "next"), c(t.kn, "zpp_pool", "next"), c(t.Jt, "zpp_pool", "next"), c(t.v, "zpp_pool", "next"), c(t.rt, "zpp_pool", "next"), c(t.a, "zpp_pool", "next"), c(t.yt, "zpp_pool", "next"), c(t.Nt, "zpp_pool", "next"), c(t.Y, "zpp_pool", "next"), c(t.En, "zpp_pool", "next"), c(t.at, "zpp_pool", "next"), c(t.N, "zpp_pool", "next"), c(t.c, "zpp_pool", "next"), c(t.Ct, "zpp_pool", "next"), c(t.m, "zpp_pool", "next"), c(t.x, "zpp_pool", "next"), c(t.gt, "zpp_pool", "next"), c(t.w, "zpp_pool", "next"), c(t.Nn, "zpp_pool", "next"), c(t.en, "zpp_pool", "next"), c(t.Yn, "zpp_pool", "next"), c(t.z, "zpp_pool", "next"), c(t.Rt, "zpp_pool", "next"), c(t.Ot, "zpp_pool", "next"), c(t.Wt, "zpp_pool", "next"), c(t.G, "zpp_pool", "next"), c(t.A, "zpp_pool", "next"), c(t.Wn, "zpp_pool", "next"), c(t.sn, "zpp_pool", "next"), c(t.j, "zpp_pool", "next"), c(t.fr, "zpp_pool", "next"), c(t.et, "zpp_pool", "next"), c(t.Tn, "zpp_pool", "next"), c(t.W, "zpp_pool", "next"), c(F, "zpp_pool", "next"), c(t.Dn, "zpp_pool", "next"), c(t.F, "zpp_pool", "next"), c(t.an, "zpp_pool", "next"), c(t.s, "zpp_pool", "next"), c(t._n, "zpp_pool", "next"), c(t.hr, "zpp_pool", "next"), c(t.jt, "zpp_pool", "next"), c(t.qn, "zpp_pool", "next"), c(t.xt, "zpp_pool", "next"), c(t.Mn, "zpp_pool", "next"), c(t.Un, "zpp_pool", "next"), c(t.I, "zpp_pool", "next"), c(t.Vt, "zpp_pool", "next"), c(t._t, "zpp_pool", "next"), c(A, "zpp_pool", "next"), c(j, "zpp_pool", "next"), c(t.V, "zpp_pool", "next"), c(U, "zpp_pool", "next"), c(R, "zpp_pool", "next"), c(z, "zpp_pool", "next"), c(t.ft, "zpp_pool", "next"), c(t.Ht, "zpp_pool", "next"), c(H, "zpp_pool", "next"), c(t.X, "zpp_pool", "next"), c(t.Pn, "zpp_pool", "next"), c(t.$n, "zpp_pool", "next"), c(t.Tt, "zpp_pool", "next"), c(t.b, "zpp_pool", "next"), c(t.C, "zpp_pool", "next"), c(t.ht, "zpp_pool", "next"), c(t.r, "zpp_pool", "next"), c(t.hn, "zpp_pool", "next"), c(t.t, "zpp_pool", "next"), c(t.ar, "zpp_pool", "next"), c(t.dt, "zpp_pool", "next"), c(t.Lt, "zpp_pool", "next"), c(t.ln, "poolGeomPoly", "zpp_pool"), c(t.ln, "poolVec2", "zpp_pool"), c(t.ln, "poolVec3", "zpp_pool"); };
    return he;
}()), ge = (function () {
    function e(e, t, n, r, i, a) {
        if (e === void 0) { e = 1; }
        if (t === void 0) { t = 0; }
        if (n === void 0) { n = 0; }
        if (r === void 0) { r = 1; }
        if (i === void 0) { i = 0; }
        if (a === void 0) { a = 0; }
        var o = F.get();
        this.zpp_inner = o, o.outer = this;
        var s = ["a", "b", "tx", "c", "d", "ty"], c = [e, t, i, n, r, a];
        for (var e_182 = 0; e_182 < c.length; e_182++)
            if (c[e_182] !== c[e_182])
                throw Error("Mat23::" + s[e_182] + " cannot be NaN");
        o.setas(e, t, n, r, i, a);
    }
    e.rotation = function (t) { if (t !== t)
        throw Error("Cannot create rotation matrix with NaN angle"); var n = Math.cos(t), r = Math.sin(t); return new e(n, -r, r, n, 0, 0); };
    e.translation = function (t, n) { return new e(1, 0, 0, 1, t, n); };
    e.scale = function (t, n) { return new e(t, 0, 0, n, 0, 0); };
    e._wrap = function (n) { return n instanceof e ? n : n ? n instanceof F ? t.fn(n, function (t) { var n = Object.create(e.prototype); return n.zpp_inner = t, t.outer = n, n; }) : n.zpp_inner ? e._wrap(n.zpp_inner) : null : null; };
    e.prototype._setProp = function (e, t) { if (t !== t)
        throw Error("Mat23::" + e + " cannot be NaN"); this.zpp_inner[e] = t, this.zpp_inner.invalidate(); };
    Object.defineProperty(e.prototype, "a", {
        get: function () { return this.zpp_inner.a; },
        set: function (e) { this._setProp("a", e); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "b", {
        get: function () { return this.zpp_inner.b; },
        set: function (e) { this._setProp("b", e); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "c", {
        get: function () { return this.zpp_inner.c; },
        set: function (e) { this._setProp("c", e); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "d", {
        get: function () { return this.zpp_inner.d; },
        set: function (e) { this._setProp("d", e); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "tx", {
        get: function () { return this.zpp_inner.tx; },
        set: function (e) { this._setProp("tx", e); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "ty", {
        get: function () { return this.zpp_inner.ty; },
        set: function (e) { this._setProp("ty", e); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "determinant", {
        get: function () { return this.zpp_inner.a * this.zpp_inner.d - this.zpp_inner.b * this.zpp_inner.c; },
        enumerable: false,
        configurable: true
    });
    e.prototype.clone = function () { return this.copy(); };
    e.prototype.equals = function (e, t) {
        if (t === void 0) { t = 0; }
        if (e == null)
            return !1;
        var n = this.zpp_inner, r = e.zpp_inner, i = n.a - r.a, a = n.b - r.b, o = n.c - r.c, s = n.d - r.d, c = n.tx - r.tx, l = n.ty - r.ty;
        return (i < 0 ? -i : i) <= t && (a < 0 ? -a : a) <= t && (o < 0 ? -o : o) <= t && (s < 0 ? -s : s) <= t && (c < 0 ? -c : c) <= t && (l < 0 ? -l : l) <= t;
    };
    e.prototype.copy = function () { return new e(this.zpp_inner.a, this.zpp_inner.b, this.zpp_inner.c, this.zpp_inner.d, this.zpp_inner.tx, this.zpp_inner.ty); };
    e.prototype.set = function (e) { if (e == null)
        throw Error("Cannot set form null matrix"); var t = e.zpp_inner; return this.zpp_inner.setas(t.a, t.b, t.c, t.d, t.tx, t.ty), this.zpp_inner.invalidate(), this; };
    e.prototype.setAs = function (e, t, n, r, i, a) {
        if (e === void 0) { e = 1; }
        if (t === void 0) { t = 0; }
        if (n === void 0) { n = 0; }
        if (r === void 0) { r = 1; }
        if (i === void 0) { i = 0; }
        if (a === void 0) { a = 0; }
        return this.zpp_inner.setas(e, t, n, r, i, a), this.zpp_inner.invalidate(), this;
    };
    e.prototype.reset = function () { return this.setAs(); };
    e.prototype.singular = function () { var _a = this.zpp_inner, e = _a.a, n = _a.b, r = _a.c, i = _a.d, a = e * e + n * n + r * r + i * i, o = e * i - n * r; return o < 0 && (o = -o), a > t.q.illConditionedThreshold * o; };
    e.prototype.inverse = function () { if (this.singular())
        throw Error("Matrix is singular and cannot be inverted"); var _a = this.zpp_inner, t = _a.a, n = _a.b, r = _a.c, i = _a.d, a = _a.tx, o = _a.ty, s = 1 / (t * i - n * r); return new e(i * s, -n * s, -r * s, t * s, (n * o - i * a) * s, (r * a - t * o) * s); };
    e.prototype.transpose = function () { var _a = this.zpp_inner, t = _a.a, n = _a.b, r = _a.c, i = _a.d, a = _a.tx, o = _a.ty; return new e(t, r, n, i, -t * a - r * o, -n * a - i * o); };
    e.prototype.concat = function (t) { if (t == null)
        throw Error("Cannot concatenate with null Mat23"); var n = t.zpp_inner, r = this.zpp_inner; return new e(n.a * r.a + n.b * r.c, n.a * r.b + n.b * r.d, n.c * r.a + n.d * r.c, n.c * r.b + n.d * r.d, n.a * r.tx + n.b * r.ty + n.tx, n.c * r.tx + n.d * r.ty + n.ty); };
    e.prototype.transform = function (e, n, r) {
        if (n === void 0) { n = !1; }
        if (r === void 0) { r = !1; }
        if (e != null && e.zpp_disp)
            throw Error("Vec2 has been disposed and cannot be used!");
        if (e == null)
            throw Error("Cannot transform null Vec2");
        e.zpp_inner.validate();
        var i = e.zpp_inner.x, a = e.zpp_inner.y, _a = this.zpp_inner, o = _a.a, s = _a.b, c = _a.c, l = _a.d, u = _a.tx, d = _a.ty, f, p;
        n ? (f = i * o + a * s, p = i * c + a * l) : (f = i * o + a * s + u, p = i * c + a * l + d);
        var m = t.J.get(f, p, r);
        return e.zpp_inner.weak && e.dispose(), m;
    };
    e.prototype.inverseTransform = function (e, n, r) {
        if (n === void 0) { n = !1; }
        if (r === void 0) { r = !1; }
        if (e != null && e.zpp_disp)
            throw Error("Vec2 has been disposed and cannot be used!");
        if (e == null)
            throw Error("Cannot transform null Vec2");
        if (this.singular())
            throw Error("Matrix is singular and inverse transformation cannot be performed");
        var _a = this.zpp_inner, i = _a.a, a = _a.b, o = _a.c, s = _a.d, c = _a.tx, l = _a.ty, u = 1 / (i * s - a * o);
        e.zpp_inner.validate();
        var d = e.zpp_inner.x, f = e.zpp_inner.y, p, m;
        if (n)
            p = (d * s - f * a) * u, m = (f * i - d * o) * u;
        else {
            var e_183 = d - c, t_105 = f - l;
            p = (e_183 * s - t_105 * a) * u, m = (t_105 * i - e_183 * o) * u;
        }
        var h = t.J.get(p, m, r);
        return e.zpp_inner.weak && e.dispose(), h;
    };
    e.prototype.equiorthogonal = function () { if (this.singular())
        return !1; var _a = this.zpp_inner, e = _a.a, n = _a.b, r = _a.c, i = _a.d, a = e * n + r * i; if (a * a >= t.q.epsilon)
        return !1; var o = e * e + n * n - r * r - i * i; return o * o < t.q.epsilon; };
    e.prototype.orthogonal = function () { var _a = this.zpp_inner, e = _a.a, n = _a.b, r = _a.c, i = _a.d, a = e * n + r * i; if (a * a >= t.q.epsilon)
        return !1; var o = e * e + n * n - 1, s = r * r + i * i - 1; return o * o < t.q.epsilon && s * s < t.q.epsilon; };
    e.prototype._orthogonaliseImpl = function (e) { var _a = this.zpp_inner, n = _a.a, r = _a.b, i = _a.c, a = _a.d, o = Math.sqrt(n * n + i * i), s = Math.sqrt(r * r + a * a); if (o * o < t.q.epsilon || s * s < t.q.epsilon)
        throw Error("Error: Matrix is singular and cannot be " + (e ? "equiorthogonal" : "orthogonal") + "ised"); var c = e ? (o + s) / 2 : 1; o = c / o, s = c / s, this.a = this.zpp_inner.a * o, this.c = this.zpp_inner.c * o, this.b = this.zpp_inner.b * s, this.d = this.zpp_inner.d * s; var l = this.zpp_inner.a * this.zpp_inner.b + this.zpp_inner.c * this.zpp_inner.d, u = .25 * Math.PI - .5 * Math.acos(l / (c * c)); this.zpp_inner.a * this.zpp_inner.d - this.zpp_inner.b * this.zpp_inner.c > 0 && (u = -u); var d = Math.sin(u), f = Math.cos(u), p = this.zpp_inner.a * f - this.zpp_inner.c * d, m = this.zpp_inner.b * f + this.zpp_inner.d * d, h = this.zpp_inner.c * f + this.zpp_inner.a * d, g = this.zpp_inner.d * f - this.zpp_inner.b * d; return this.c = h, this.a = p, this.d = g, this.b = m, this.zpp_inner.invalidate(), this; };
    e.prototype.equiorthogonalise = function () { return this.equiorthogonal() ? this : this._orthogonaliseImpl(!0); };
    e.prototype.orthogonalise = function () { return this.orthogonal() ? this : this._orthogonaliseImpl(!1); };
    e.prototype.toString = function () { var _a = this.zpp_inner, e = _a.a, t = _a.b, n = _a.c, r = _a.d, i = _a.tx, a = _a.ty; return "{ a: " + e + " b: " + t + " c: " + n + " d: " + r + " tx: " + i + " ty: " + a + " }"; };
    return e;
}()), F._wrapFn = function (e) { return t.fn(e, function (e) { var t = Object.create(ge.prototype); return t.zpp_inner = e, e.outer = t, t; }); }, _e = (function () {
    function e(e, n) {
        if (e != null && e.zpp_disp)
            throw Error("Vec2 has been disposed and cannot be used!");
        if (e == null)
            throw Error("Ray::origin cannot be null");
        if (n != null && n.zpp_disp)
            throw Error("Vec2 has been disposed and cannot be used!");
        if (n == null)
            throw Error("Ray::direction cannot be null");
        var r = new se;
        this.zpp_inner = r;
        var i = l(e), a = u(e);
        r.origin.zpp_inner.x = i, r.origin.zpp_inner.y = a, r.origin.zpp_inner._invalidate != null && r.origin.zpp_inner._invalidate(r.origin.zpp_inner), t.zn(e);
        var o = l(n), s = u(n);
        r.direction.zpp_inner.x = o, r.direction.zpp_inner.y = s, r.direction.zpp_inner._invalidate != null && r.direction.zpp_inner._invalidate(r.direction.zpp_inner), t.zn(n), r.zip_dir = !0, r.maxdist = 1 / 0;
    }
    e._wrap = function (n) { return n == null ? null : n instanceof e ? n : t.fn(n, function (t) { var n; var r = Object.create(e.prototype); return r.zpp_inner = (n = t.zpp_inner) == null ? t : n, r; }); };
    e.fromSegment = function (n, r) { if (n != null && n.zpp_disp)
        throw Error("Vec2 has been disposed and cannot be used!"); if (n == null)
        throw Error("Ray::fromSegment::start is null"); if (r != null && r.zpp_disp)
        throw Error("Vec2 has been disposed and cannot be used!"); if (r == null)
        throw Error("Ray::fromSegment::end is null"); var i = r.sub(n, !0), a = new e(n, i), o = l(n), s = u(n), c = l(r), d = u(r), f = c - o, p = d - s, m = Math.sqrt(f * f + p * p); if (m !== m)
        throw Error("maxDistance cannot be NaN"); return a.zpp_inner.maxdist = m, t.zn(n), t.zn(r), a; };
    Object.defineProperty(e.prototype, "origin", {
        get: function () { return this.zpp_inner.origin; },
        set: function (e) { if (e != null && e.zpp_disp)
            throw Error("Vec2 has been disposed and cannot be used!"); if (e == null)
            throw Error("Ray::origin cannot be null"); this.zpp_inner.origin.set(e), t.zn(e); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "direction", {
        get: function () { return this.zpp_inner.direction; },
        set: function (e) { if (e != null && e.zpp_disp)
            throw Error("Vec2 has been disposed and cannot be used!"); if (e == null)
            throw Error("Ray::direction cannot be null"); this.zpp_inner.direction.set(e), this.zpp_inner.zip_dir = !0, t.zn(e); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "maxDistance", {
        get: function () { return this.zpp_inner.maxdist; },
        set: function (e) { if (e !== e)
            throw Error("maxDistance cannot be NaN"); this.zpp_inner.maxdist = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "userData", {
        get: function () { return this.zpp_inner.userData == null && (this.zpp_inner.userData = {}), this.zpp_inner.userData; },
        enumerable: false,
        configurable: true
    });
    e.prototype.aabb = function () { return t.nt._wrap(this.zpp_inner.rayAABB()); };
    e.prototype.at = function (e, n) {
        if (n === void 0) { n = !1; }
        this.zpp_inner.validate_dir();
        var r = this.zpp_inner.origin.zpp_inner;
        r._validate != null && r._validate();
        var i = r.x, a = r.y, o = i + e * this.zpp_inner.dirx, s = a + e * this.zpp_inner.diry;
        return t.J.get(o, s, n);
    };
    e.prototype.clone = function () { return this.copy(); };
    e.prototype.copy = function () { var t = new e(this.zpp_inner.origin, this.zpp_inner.direction), n = this.zpp_inner.maxdist; if (n !== n)
        throw Error("maxDistance cannot be NaN"); return t.zpp_inner.maxdist = n, t; };
    return e;
}()), ve = (function () {
    function e() {
        if (this.zpp_inner = null, !t.u.internal)
            throw Error("ConvexResult cannot be instantiated derp!");
    }
    e._wrap = function (n) { var r; if (!n)
        return null; if (n instanceof e)
        return n; var i = (r = n.zpp_inner) == null ? n : r; return t.fn(i, function (t) { var n = Object.create(e.prototype); return n.zpp_inner = t, n; }); };
    Object.defineProperty(e.prototype, "normal", {
        get: function () { return this._disposed(), t.J._wrap(this.zpp_inner.normal); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "position", {
        get: function () { return this._disposed(), t.J._wrap(this.zpp_inner.position); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "toi", {
        get: function () { return this._disposed(), this.zpp_inner.toiDistance; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "shape", {
        get: function () { return this._disposed(), this.zpp_inner.shape; },
        enumerable: false,
        configurable: true
    });
    e.prototype.dispose = function () { this._disposed(), this.zpp_inner.free(); };
    e.prototype.toString = function () { return this._disposed(), "{ shape: " + String(this.zpp_inner.shape) + " toi: " + this.zpp_inner.toiDistance + " }"; };
    e.prototype._disposed = function () { if (this.zpp_inner.next != null)
        throw Error("This object has been disposed of and cannot be used"); };
    return e;
}()), t.u._createConvexResult = function () { return new ve; }, ye = (function () {
    function e() {
        if (this.zpp_inner = null, !t.u.internal)
            throw Error("RayResult cannot be instantiated derp!");
    }
    e._wrap = function (n) { var r; if (!n)
        return null; if (n instanceof e)
        return n; var i = (r = n.zpp_inner) == null ? n : r; return t.fn(i, function (t) { var n = Object.create(e.prototype); return n.zpp_inner = t, n; }); };
    Object.defineProperty(e.prototype, "normal", {
        get: function () { return this._disposed(), t.J._wrap(this.zpp_inner.normal); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "distance", {
        get: function () { return this._disposed(), this.zpp_inner.toiDistance; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "inner", {
        get: function () { return this._disposed(), this.zpp_inner.inner; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "shape", {
        get: function () { return this._disposed(), this.zpp_inner.shape; },
        enumerable: false,
        configurable: true
    });
    e.prototype.dispose = function () { this._disposed(), this.zpp_inner.free(); };
    e.prototype.toString = function () { return this._disposed(), "{ shape: " + String(this.zpp_inner.shape) + " distance: " + this.zpp_inner.toiDistance + " ?inner: " + String(this.zpp_inner.inner) + " }"; };
    e.prototype._disposed = function () { if (this.zpp_inner.next != null)
        throw Error("This object has been disposed of and cannot be used"); };
    return e;
}()), t.u._createRayResult = function () { return new ye; }, be = (function () {
    function be() {
    }
    be.distanceBody = function (e, n, r, i) { p(r), p(i); var a = f(e), o = f(n); if (a.shapes.head == null || o.shapes.head == null)
        throw Error("Bodies cannot be empty in calculating distances"); var s = a.shapes.head; for (; s != null;)
        t.rr.validateShape(s.elt), s = s.next; for (s = o.shapes.head; s != null;)
        t.rr.validateShape(s.elt), s = s.next; return t.g.distanceBody(a, o, r.zpp_inner, i.zpp_inner); };
    be.distance = function (e, n, r, i) { p(r), p(i), m(e, "distances"), m(n, "distances"); var a = d(e), o = d(n); t.rr.validateShape(a), t.rr.validateShape(o); var s; t.an.zpp_pool == null ? s = new t.an : (s = t.an.zpp_pool, t.an.zpp_pool = s.next, s.next = null), s.weak = !1; var c = t.g.distance(a, o, r.zpp_inner, i.zpp_inner, s, 1e100); return s.next = t.an.zpp_pool, t.an.zpp_pool = s, c; };
    be.intersectsBody = function (e, n) { var r = f(e), i = f(n); if (r.shapes.head == null || i.shapes.head == null)
        throw Error("Bodies must have shapes to test for intersection."); var a = r.shapes.head; for (; a != null;)
        t.rr.validateShape(a.elt), a = a.next; for (a = i.shapes.head; a != null;)
        t.rr.validateShape(a.elt), a = a.next; var o = r.aabb, s = i.aabb; if (o.minx > s.maxx || o.maxx < s.minx || o.miny > s.maxy || o.maxy < s.miny)
        return !1; var c = r.shapes.head; for (; c != null;) {
        var e_184 = i.shapes.head;
        for (; e_184 != null;) {
            if (t.Kn.testCollide_safe(c.elt, e_184.elt))
                return !0;
            e_184 = e_184.next;
        }
        c = c.next;
    } return !1; };
    be.intersects = function (e, n) { m(e, "intersection"), m(n, "intersection"); var r = d(e), i = d(n); t.rr.validateShape(r), t.rr.validateShape(i); var a = r.aabb, o = i.aabb; return a.minx > o.maxx || a.maxx < o.minx || a.miny > o.maxy || a.maxy < o.miny ? !1 : t.Kn.testCollide_safe(r, i); };
    be.contains = function (e, n) { m(e, "containment"), m(n, "containment"); var r = d(e), i = d(n); return t.rr.validateShape(r), t.rr.validateShape(i), t.Kn.containTest(r, i); };
    return be;
}()), xe = (function () {
    function xe() {
    }
    xe.run = function (e, n, r, i, a, o, s) {
        if (i === void 0) { i = 2; }
        if (a === void 0) { a = null; }
        if (o === void 0) { o = !0; }
        if (s === void 0) { s = null; }
        if (r != null && r.zpp_disp || a != null && a.zpp_disp)
            throw Error("Vec2 has been disposed and cannot be used!");
        if (e == null)
            throw Error("MarchingSquares requires an iso function to operate");
        if (n == null)
            throw Error("Error: MarchingSquares requires an AABB to define bounds of surface extraction");
        if (r == null)
            throw Error("Error: MarchingSquares requires a Vec2 to define cell size for surface extraction");
        var c = r.zpp_inner;
        if (c._validate != null && c._validate(), c.x <= 0 || c.y <= 0)
            throw Error("MarchingSquares cannot operate with non-positive cell dimensions");
        if (i < 0)
            throw Error("Error: MarchingSquares cannot use a negative quality value for interpolation");
        if (a != null) {
            var e_185 = a.zpp_inner;
            if (e_185._validate != null && e_185._validate(), e_185.x <= 0 || e_185.y <= 0)
                throw Error("MarchingSquares cannot with non-positive sub-grid dimensions");
        }
        var l = t.E(), u = s == null ? new l.geom.GeomPolyList : s, d = N, f = n.zpp_inner;
        if (f._validate != null && f._validate(), a == null) {
            var t_106 = f.minx, n_113 = f.miny, a_60 = f.maxx, s_40 = f.maxy;
            d.run(e, t_106, n_113, a_60, s_40, r, i, o, u);
        }
        else {
            var t_107 = a.zpp_inner;
            t_107._validate != null && t_107._validate();
            var n_114 = f.maxx - f.minx, s_41 = f.maxy - f.miny, c_38 = n_114 / t_107.x, l_29 = s_41 / t_107.y, p_23 = c_38 | 0, m_18 = l_29 | 0;
            p_23 !== c_38 && ++p_23, m_18 !== l_29 && ++m_18;
            for (var n_115 = 0; n_115 < p_23; n_115++) {
                var a_61 = f.minx + t_107.x * n_115, s_42 = n_115 === p_23 - 1 ? f.maxx : a_61 + t_107.x;
                for (var n_116 = 0; n_116 < m_18; n_116++) {
                    var c_39 = f.miny + t_107.y * n_116, l_30 = n_116 === m_18 - 1 ? f.maxy : c_39 + t_107.y;
                    d.run(e, a_61, c_39, s_42, l_30, r, i, o, u);
                }
            }
        }
        return c.weak && r.dispose(), a != null && a.zpp_inner.weak && a.dispose(), u;
    };
    return xe;
}()), h.prototype.zpp_inner = null, h.prototype.hasNext = function () { if (this.zpp_inner == null)
    throw Error("Iterator has been disposed"); var e = this.zpp_inner.ptr != this.zpp_inner.start || this.zpp_inner.first; if (this.zpp_inner.first = !1, !e) {
    var e_186 = this.zpp_inner;
    e_186.outer.zpp_inner = null, e_186.ptr = e_186.start = null, e_186.next = t.W.zpp_pool, t.W.zpp_pool = e_186;
} return e; }, h.prototype.next = function () { if (this.zpp_inner == null)
    throw Error("Iterator has been disposed"); var e = this.zpp_inner.ptr; if (e.wrap == null) {
    var n_117 = e.x, r_99 = e.y;
    if (n_117 !== n_117 || r_99 !== r_99)
        throw Error("Vec2 components cannot be NaN");
    e.wrap = t.E().geom.Vec2.get(n_117, r_99), e.wrap.zpp_inner._inuse = !0, e.wrap.zpp_inner._invalidate = function (t) { return e.modwrap(t); }, e.wrap.zpp_inner._validate = function () { return e.getwrap(); };
} var n = e.wrap; return this.zpp_inner.ptr = this.zpp_inner.forward ? this.zpp_inner.ptr.next : this.zpp_inner.ptr.prev, n; }, t.Jn(h.prototype, function (e) { return e; }), Se = t.E(), Se.geom.GeomVertexIterator = h, Ce = (function () {
    function e() {
        if (!t.V.internal)
            throw Error("Cannot instantiate an Edge derp!");
    }
    e._wrap = function (n) { return n ? n instanceof e ? n : n instanceof t.V ? t.fn(n, function (n) { t.V.internal = !0; var r = new e; return t.V.internal = !1, r.zpp_inner = n, n.outer = r, r; }) : null : null; };
    Object.defineProperty(e.prototype, "polygon", {
        get: function () { var e = this.zpp_inner; if (e.polygon == null)
            throw Error("Edge not current in use"); return e.polygon.outer_zn; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "localNormal", {
        get: function () { var e = this.zpp_inner; if (e.polygon == null)
            throw Error("Edge not current in use"); return e.wrap_lnorm == null && e.getlnorm(), e.wrap_lnorm; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "worldNormal", {
        get: function () { var e = this.zpp_inner; if (e.polygon == null)
            throw Error("Edge not current in use"); return e.wrap_gnorm == null && e.getgnorm(), e.wrap_gnorm; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "length", {
        get: function () { var e = this.zpp_inner; if (e.polygon == null)
            throw Error("Edge not current in use"); return e.polygon.validate_laxi(), e.length; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "localProjection", {
        get: function () { var e = this.zpp_inner; if (e.polygon == null)
            throw Error("Edge not current in use"); return e.polygon.validate_laxi(), e.lprojection; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "worldProjection", {
        get: function () { var e = this.zpp_inner; if (e.polygon == null)
            throw Error("Edge not current in use"); if (e.polygon.body == null)
            throw Error("Error: Edge world projection only makes sense for Polygons contained within a rigid body"); return e.polygon.validate_gaxi(), e.gprojection; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "localVertex1", {
        get: function () { var e = this.zpp_inner; if (e.polygon == null)
            throw Error("Edge not current in use"); return e.polygon.validate_laxi(), this._wrapVert(e.lp0); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "localVertex2", {
        get: function () { var e = this.zpp_inner; if (e.polygon == null)
            throw Error("Edge not current in use"); return e.polygon.validate_laxi(), this._wrapVert(e.lp1); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "worldVertex1", {
        get: function () { var e = this.zpp_inner; if (e.polygon == null)
            throw Error("Edge not current in use"); return e.polygon.validate_gaxi(), this._wrapVert(e.gp0); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "worldVertex2", {
        get: function () { var e = this.zpp_inner; if (e.polygon == null)
            throw Error("Edge not current in use"); return e.polygon.validate_gaxi(), this._wrapVert(e.gp1); },
        enumerable: false,
        configurable: true
    });
    e.prototype.toString = function () { var e = this.zpp_inner; return e.polygon == null ? "Edge(object-pooled)" : e.polygon.body == null ? (e.polygon.validate_laxi(), "{ localNormal : { x: " + e.lnormx + " y: " + e.lnormy + " } }") : (e.polygon.validate_gaxi(), "{ localNormal : { x: " + e.lnormx + " y: " + e.lnormy + " } worldNormal : { x: " + e.gnormx + " y: " + e.gnormy + " } }"); };
    e.prototype._wrapVert = function (e) { var n = t.E(); if (e.outer == null) {
        e.outer = new n.geom.Vec2;
        var r_100 = e.outer.zpp_inner;
        r_100.free(), r_100.next = t.an.zpp_pool, t.an.zpp_pool = r_100, e.outer.zpp_inner = e;
    } return e.outer; };
    return e;
}()), t.V._wrapFn = function (e) { return t.fn(e, function (e) { t.V.internal = !0; var n = new Ce; return t.V.internal = !1, n.zpp_inner = e, e.outer = n, n; }); }, we = (function () {
    function e() {
        if (!t.st.internal)
            throw Error("Cannot instantiate ValidationResult derp!");
    }
    Object.defineProperty(e, "VALID", {
        get: function () { return t.st.ValidationResult_VALID == null && (t.st.internal = !0, t.st.ValidationResult_VALID = new e, t.st.internal = !1), t.st.ValidationResult_VALID; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e, "DEGENERATE", {
        get: function () { return t.st.ValidationResult_DEGENERATE == null && (t.st.internal = !0, t.st.ValidationResult_DEGENERATE = new e, t.st.internal = !1), t.st.ValidationResult_DEGENERATE; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e, "CONCAVE", {
        get: function () { return t.st.ValidationResult_CONCAVE == null && (t.st.internal = !0, t.st.ValidationResult_CONCAVE = new e, t.st.internal = !1), t.st.ValidationResult_CONCAVE; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e, "SELF_INTERSECTING", {
        get: function () { return t.st.ValidationResult_SELF_INTERSECTING == null && (t.st.internal = !0, t.st.ValidationResult_SELF_INTERSECTING = new e, t.st.internal = !1), t.st.ValidationResult_SELF_INTERSECTING; },
        enumerable: false,
        configurable: true
    });
    e.prototype.toString = function () { return this === t.st.ValidationResult_VALID ? "VALID" : this === t.st.ValidationResult_DEGENERATE ? "DEGENERATE" : this === t.st.ValidationResult_CONCAVE ? "CONCAVE" : this === t.st.ValidationResult_SELF_INTERSECTING ? "SELF_INTERSECTING" : ""; };
    return e;
}()), Te = (function () {
    function e(e) {
        if (e === void 0) { e = !1; }
        var t = new k;
        this.zpp_inner = t, t.outer = this, t.ignore != e && (t.invalidate(!0), t.ignore = e);
    }
    e._wrap = function (n) { return n instanceof e ? n : n && n instanceof k ? t.fn(n, function (t) { var n = Object.create(e.prototype); return n.zpp_inner = t, t.outer = n, n; }) : null; };
    Object.defineProperty(e.prototype, "group", {
        get: function () { return this.zpp_inner.group == null ? null : this.zpp_inner.group.outer; },
        set: function (e) { if (e === this)
            throw Error("Cannot assign InteractionGroup to itself"); this.zpp_inner.setGroup(e == null ? null : e.zpp_inner); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "ignore", {
        get: function () { return this.zpp_inner.ignore; },
        set: function (e) { this.zpp_inner.ignore != e && (this.zpp_inner.invalidate(!0), this.zpp_inner.ignore = e); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "interactors", {
        get: function () { return this.zpp_inner.wrap_interactors == null && (this.zpp_inner.wrap_interactors = t.K.get(this.zpp_inner.interactors, !0)), this.zpp_inner.wrap_interactors; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "groups", {
        get: function () { return this.zpp_inner.wrap_groups == null && (this.zpp_inner.wrap_groups = t.R.get(this.zpp_inner.groups, !0)), this.zpp_inner.wrap_groups; },
        enumerable: false,
        configurable: true
    });
    e.prototype.toString = function () { var e = "InteractionGroup"; return this.zpp_inner.ignore && (e += ":ignore"), e; };
    return e;
}()), k._wrapFn = function (e) { return t.fn(e, function (e) { var t = Object.create(Te.prototype); return t.zpp_inner = e, e.outer = t, t; }); }, G = (function () {
    function e() {
        if (!t.st.internal)
            throw Error("Cannot instantiate ArbiterType derp!");
    }
    Object.defineProperty(e, "COLLISION", {
        get: function () { return t.st.ArbiterType_COLLISION == null && (t.st.internal = !0, t.st.ArbiterType_COLLISION = new e, t.st.internal = !1), t.st.ArbiterType_COLLISION; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e, "SENSOR", {
        get: function () { return t.st.ArbiterType_SENSOR == null && (t.st.internal = !0, t.st.ArbiterType_SENSOR = new e, t.st.internal = !1), t.st.ArbiterType_SENSOR; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e, "FLUID", {
        get: function () { return t.st.ArbiterType_FLUID == null && (t.st.internal = !0, t.st.ArbiterType_FLUID = new e, t.st.internal = !1), t.st.ArbiterType_FLUID; },
        enumerable: false,
        configurable: true
    });
    e.prototype.toString = function () { return this === t.st.ArbiterType_COLLISION ? "COLLISION" : this === t.st.ArbiterType_SENSOR ? "SENSOR" : this === t.st.ArbiterType_FLUID ? "FLUID" : ""; };
    return e;
}()), K = (function () {
    function K() {
        if (this.zpp_inner = null, !t.ur.internal)
            throw Error("Cannot instantiate Arbiter derp!");
    }
    Object.defineProperty(K.prototype, "isSleeping", {
        get: function () { return this._activeCheck(), this.zpp_inner.sleeping; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(K.prototype, "type", {
        get: function () { var e = this.zpp_inner.type; return e === 1 ? G.COLLISION : e === 2 ? G.SENSOR : e === 4 ? G.FLUID : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(K.prototype, "collisionArbiter", {
        get: function () { return this.zpp_inner.type == t.ur.COL ? this.zpp_inner.colarb.outer_zn : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(K.prototype, "fluidArbiter", {
        get: function () { return this.zpp_inner.type == t.ur.FLUID ? this.zpp_inner.fluidarb.outer_zn : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(K.prototype, "shape1", {
        get: function () { return this._activeCheck(), this.zpp_inner.ws1.id > this.zpp_inner.ws2.id ? this.zpp_inner.ws2.outer : this.zpp_inner.ws1.outer; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(K.prototype, "shape2", {
        get: function () { return this._activeCheck(), this.zpp_inner.ws1.id > this.zpp_inner.ws2.id ? this.zpp_inner.ws1.outer : this.zpp_inner.ws2.outer; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(K.prototype, "body1", {
        get: function () { return this._activeCheck(), this.zpp_inner.ws1.id > this.zpp_inner.ws2.id ? this.zpp_inner.b2.outer : this.zpp_inner.b1.outer; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(K.prototype, "body2", {
        get: function () { return this._activeCheck(), this.zpp_inner.ws1.id > this.zpp_inner.ws2.id ? this.zpp_inner.b1.outer : this.zpp_inner.b2.outer; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(K.prototype, "state", {
        get: function () { this._activeCheck(); var e = t.E(), n = this.zpp_inner.immState; return n == 5 ? (t.st.PreFlag_ACCEPT == null && (t.st.internal = !0, t.st.PreFlag_ACCEPT = new e.callbacks.PreFlag, t.st.internal = !1), t.st.PreFlag_ACCEPT) : n == 1 ? (t.st.PreFlag_ACCEPT_ONCE == null && (t.st.internal = !0, t.st.PreFlag_ACCEPT_ONCE = new e.callbacks.PreFlag, t.st.internal = !1), t.st.PreFlag_ACCEPT_ONCE) : n == 6 ? (t.st.PreFlag_IGNORE == null && (t.st.internal = !0, t.st.PreFlag_IGNORE = new e.callbacks.PreFlag, t.st.internal = !1), t.st.PreFlag_IGNORE) : (t.st.PreFlag_IGNORE_ONCE == null && (t.st.internal = !0, t.st.PreFlag_IGNORE_ONCE = new e.callbacks.PreFlag, t.st.internal = !1), t.st.PreFlag_IGNORE_ONCE); },
        enumerable: false,
        configurable: true
    });
    K.prototype.isCollisionArbiter = function () { return this.zpp_inner.type == t.ur.COL; };
    K.prototype.isFluidArbiter = function () { return this.zpp_inner.type == t.ur.FLUID; };
    K.prototype.isSensorArbiter = function () { return this.zpp_inner.type == t.ur.SENSOR; };
    K.prototype.totalImpulse = function (e, n) {
        if (e === void 0) { e = null; }
        if (n === void 0) { n = !1; }
        return this._activeCheck(), e != null && this._checkBody(e), t.Zn.get(0, 0, 0);
    };
    K.prototype.toString = function () { var e = this.zpp_inner.type == t.ur.COL ? "CollisionArbiter" : this.zpp_inner.type == t.ur.FLUID ? "FluidArbiter" : "SensorArbiter"; if (this.zpp_inner.cleared)
        return e + "(object-pooled)"; this._activeCheck(); var n = this.zpp_inner.ws1.id > this.zpp_inner.ws2.id ? this.zpp_inner.ws2.outer : this.zpp_inner.ws1.outer, r = this.zpp_inner.ws1.id > this.zpp_inner.ws2.id ? this.zpp_inner.ws1.outer : this.zpp_inner.ws2.outer, i = e + "(" + n.toString() + "|" + r.toString() + ")"; return this.zpp_inner.type == t.ur.COL && (i += "[" + ["SD", "DD"][+!this.zpp_inner.colarb.stat] + "]"), i += "<-" + this.state.toString(), i; };
    K.prototype._activeCheck = function () { if (!this.zpp_inner.active)
        throw Error("Arbiter not currently in use"); };
    K.prototype._checkBody = function (e) { var t = this.zpp_inner, n = t.ws1.id > t.ws2.id ? t.b2.outer : t.b1.outer, r = t.ws1.id > t.ws2.id ? t.b1.outer : t.b2.outer; if (e != n && e != r)
        throw Error("Arbiter does not relate to body"); };
    return K;
}()), Ee = t.E(), Ee.dynamics.Arbiter = K, De = (function (_super) {
    __extends(De, _super);
    function De() {
        return _super.call(this) || this;
    }
    Object.defineProperty(De.prototype, "contacts", {
        get: function () { return this._activeCheck(), this.zpp_inner.colarb.wrap_contacts == null && this.zpp_inner.colarb.setupcontacts(), this.zpp_inner.colarb.wrap_contacts; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(De.prototype, "normal", {
        get: function () { return this._activeCheck(), this.zpp_inner.colarb.wrap_normal == null && this.zpp_inner.colarb.getnormal(), this.zpp_inner.colarb.wrap_normal; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(De.prototype, "radius", {
        get: function () { return this._activeCheck(), this.zpp_inner.colarb.radius; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(De.prototype, "referenceEdge1", {
        get: function () { this._activeCheck(); var e = this.zpp_inner.colarb.__ref_edge1; if (e != null) {
            var t_108 = this.zpp_inner.ws1.id > this.zpp_inner.ws2.id ? this.zpp_inner.ws2.outer : this.zpp_inner.ws1.outer;
            t_108.zpp_inner.type == 1 ? t_108.zpp_inner != e.polygon && (e = this.zpp_inner.colarb.__ref_edge2) : e = this.zpp_inner.colarb.__ref_edge2;
        } return e == null ? null : e.wrapper(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(De.prototype, "referenceEdge2", {
        get: function () { this._activeCheck(); var e = this.zpp_inner.colarb.__ref_edge1; if (e != null) {
            var t_109 = this.zpp_inner.ws1.id > this.zpp_inner.ws2.id ? this.zpp_inner.ws1.outer : this.zpp_inner.ws2.outer;
            t_109.zpp_inner.type == 1 ? t_109.zpp_inner != e.polygon && (e = this.zpp_inner.colarb.__ref_edge2) : e = this.zpp_inner.colarb.__ref_edge2;
        } return e == null ? null : e.wrapper(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(De.prototype, "elasticity", {
        get: function () { return this._activeCheck(), this.zpp_inner.colarb.validate_props(), this.zpp_inner.colarb.restitution; },
        set: function (e) { if (this._mutableCheck("elasticity"), e !== e)
            throw Error("CollisionArbiter::elasticity cannot be NaN"); if (e < 0)
            throw Error("CollisionArbiter::elasticity cannot be negative"); this.zpp_inner.colarb.restitution = e, this.zpp_inner.colarb.userdef_restitution = !0, this._activeCheck(), this.zpp_inner.colarb.validate_props(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(De.prototype, "dynamicFriction", {
        get: function () { return this._activeCheck(), this.zpp_inner.colarb.validate_props(), this.zpp_inner.colarb.dyn_fric; },
        set: function (e) { if (this._mutableCheck("dynamicFriction"), e !== e)
            throw Error("CollisionArbiter::dynamicFriction cannot be NaN"); if (e < 0)
            throw Error("CollisionArbiter::dynamicFriction cannot be negative"); this.zpp_inner.colarb.dyn_fric = e, this.zpp_inner.colarb.userdef_dyn_fric = !0, this._activeCheck(), this.zpp_inner.colarb.validate_props(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(De.prototype, "staticFriction", {
        get: function () { return this._activeCheck(), this.zpp_inner.colarb.validate_props(), this.zpp_inner.colarb.stat_fric; },
        set: function (e) { if (this._mutableCheck("staticFriction"), e !== e)
            throw Error("CollisionArbiter::staticFriction cannot be NaN"); if (e < 0)
            throw Error("CollisionArbiter::staticFriction cannot be negative"); this.zpp_inner.colarb.stat_fric = e, this.zpp_inner.colarb.userdef_stat_fric = !0, this._activeCheck(), this.zpp_inner.colarb.validate_props(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(De.prototype, "rollingFriction", {
        get: function () { return this._activeCheck(), this.zpp_inner.colarb.validate_props(), this.zpp_inner.colarb.rfric; },
        set: function (e) { if (this._mutableCheck("rollingFriction"), e !== e)
            throw Error("CollisionArbiter::rollingFriction cannot be NaN"); if (e < 0)
            throw Error("CollisionArbiter::rollingFriction cannot be negative"); this.zpp_inner.colarb.rfric = e, this.zpp_inner.colarb.userdef_rfric = !0, this._activeCheck(), this.zpp_inner.colarb.validate_props(); },
        enumerable: false,
        configurable: true
    });
    De.prototype.firstVertex = function () { return this._activeCheck(), this.zpp_inner.colarb.__ref_edge1 != null != (this.zpp_inner.colarb.__ref_edge2 != null) && this.zpp_inner.colarb.__ref_vertex == -1; };
    De.prototype.secondVertex = function () { return this._activeCheck(), this.zpp_inner.colarb.__ref_edge1 != null != (this.zpp_inner.colarb.__ref_edge2 != null) && this.zpp_inner.colarb.__ref_vertex == 1; };
    De.prototype.normalImpulse = function (e, t) {
        if (e === void 0) { e = null; }
        if (t === void 0) { t = !1; }
        return this._activeCheck(), e != null && this._checkBody(e), this._accumulateImpulse("normalImpulse", e, t);
    };
    De.prototype.tangentImpulse = function (e, t) {
        if (e === void 0) { e = null; }
        if (t === void 0) { t = !1; }
        return this._activeCheck(), e != null && this._checkBody(e), this._accumulateImpulse("tangentImpulse", e, t);
    };
    De.prototype.totalImpulse = function (e, t) {
        if (e === void 0) { e = null; }
        if (t === void 0) { t = !1; }
        return this._activeCheck(), e != null && this._checkBody(e), this._accumulateImpulse("totalImpulse", e, t);
    };
    De.prototype.rollingImpulse = function (e, t) {
        if (e === void 0) { e = null; }
        if (t === void 0) { t = !1; }
        this._activeCheck(), e != null && this._checkBody(e);
        var n = this.zpp_inner.colarb;
        return !t || n.oc1.fresh ? n.oc1.wrapper().rollingImpulse(e) : 0;
    };
    De.prototype._mutableCheck = function (e) { if (!this.zpp_inner.colarb.mutable)
        throw Error("CollisionArbiter::" + e + " is only mutable during a pre-handler"); };
    De.prototype._accumulateImpulse = function (e, n, r) { var i = 0, a = 0, o = 0, s = this.zpp_inner.colarb; if (!r || s.oc1.fresh) {
        var t_110 = s.oc1.wrapper()[e](n), r_101 = t_110.zpp_inner;
        r_101._validate != null && r_101._validate(), i += r_101.x, r_101._validate != null && r_101._validate(), a += r_101.y, r_101._validate != null && r_101._validate(), o += r_101.z, t_110.dispose();
    } if (s.hc2 && (!r || s.oc2.fresh)) {
        var t_111 = s.oc2.wrapper()[e](n), r_102 = t_111.zpp_inner;
        r_102._validate != null && r_102._validate(), i += r_102.x, r_102._validate != null && r_102._validate(), a += r_102.y, r_102._validate != null && r_102._validate(), o += r_102.z, t_111.dispose();
    } return t.Zn.get(i, a, o); };
    return De;
}(K)), Oe = (function (_super) {
    __extends(Oe, _super);
    function Oe() {
        return _super.call(this) || this;
    }
    Object.defineProperty(Oe.prototype, "position", {
        get: function () { return this._activeCheck(), this.zpp_inner.fluidarb.wrap_position == null && this.zpp_inner.fluidarb.getposition(), t.J._wrap(this.zpp_inner.fluidarb.wrap_position); },
        set: function (e) { if (!this.zpp_inner.fluidarb.mutable)
            throw Error("Arbiter is mutable only within a pre-handler"); if (e == null)
            throw Error("FluidArbiter::position cannot be null"); this._activeCheck(), this.zpp_inner.fluidarb.wrap_position == null && this.zpp_inner.fluidarb.getposition(), this.zpp_inner.fluidarb.wrap_position.set(e); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Oe.prototype, "overlap", {
        get: function () { return this._activeCheck(), this.zpp_inner.fluidarb.overlap; },
        set: function (e) { if (!this.zpp_inner.fluidarb.mutable)
            throw Error("Arbiter is mutable only within a pre-handler"); if (e !== e)
            throw Error("FluidArbiter::overlap cannot be NaN"); if (e <= 0 || e == 1 / 0)
            throw Error("FluidArbiter::overlap must be strictly positive and non infinite"); this.zpp_inner.fluidarb.overlap = e; },
        enumerable: false,
        configurable: true
    });
    Oe.prototype.buoyancyImpulse = function (e) {
        if (e === void 0) { e = null; }
        this._activeCheck(), e != null && this._checkBody(e);
        var n = this.zpp_inner.fluidarb;
        return e == null ? t.Zn.get(n.buoyx, n.buoyy, 0) : e.zpp_inner == this.zpp_inner.b2 ? t.Zn.get(n.buoyx, n.buoyy, n.buoyy * n.r2x - n.buoyx * n.r2y) : t.Zn.get(-n.buoyx, -n.buoyy, -(n.buoyy * n.r1x - n.buoyx * n.r1y));
    };
    Oe.prototype.dragImpulse = function (e) {
        if (e === void 0) { e = null; }
        this._activeCheck(), e != null && this._checkBody(e);
        var n = this.zpp_inner.fluidarb, r = e == null || e.zpp_inner == this.zpp_inner.b2 ? 1 : -1;
        return t.Zn.get(n.dampx * r, n.dampy * r, n.adamp * r);
    };
    Oe.prototype.totalImpulse = function (e, t) {
        if (e === void 0) { e = null; }
        if (t === void 0) { t = !1; }
        this._activeCheck(), e != null && this._checkBody(e);
        var n = this.buoyancyImpulse(e), r = this.dragImpulse(e), i = n.zpp_inner, a = r.zpp_inner;
        return i._validate != null && i._validate(), a._validate != null && a._validate(), a.x += i.x, i._validate != null && i._validate(), a._validate != null && a._validate(), a.y += i.y, i._validate != null && i._validate(), a._validate != null && a._validate(), a.z += i.z, n.dispose(), r;
    };
    return Oe;
}(K)), ke = (function () {
    function ke() {
        if (this.zpp_inner = null, !t.ft.internal)
            throw Error("Cannot instantiate Contact derp!");
    }
    Object.defineProperty(ke.prototype, "arbiter", {
        get: function () { if (this.zpp_inner.arbiter == null)
            return null; var e = this.zpp_inner.arbiter.outer; return e.zpp_inner.type == t.ur.COL ? e.zpp_inner.colarb.outer_zn : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ke.prototype, "penetration", {
        get: function () { return this._inactiveCheck(), -this.zpp_inner.dist; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ke.prototype, "position", {
        get: function () { return this._inactiveCheck(), this.zpp_inner.wrap_position == null && this.zpp_inner.getposition(), this.zpp_inner.wrap_position; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ke.prototype, "fresh", {
        get: function () { return this._inactiveCheck(), this.zpp_inner.fresh; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ke.prototype, "friction", {
        get: function () { return this._inactiveCheck(), this.zpp_inner.inner.friction; },
        enumerable: false,
        configurable: true
    });
    ke.prototype.normalImpulse = function (e) {
        if (e === void 0) { e = null; }
        this._inactiveCheck();
        var n = this.zpp_inner.arbiter.colarb, r = this.zpp_inner.inner, i = r.jnAcc;
        return e == null ? t.Zn.get(n.nx * i, n.ny * i) : (this._checkBody(e, n), e == n.b1.outer ? t.Zn.get(n.nx * -i, n.ny * -i, -(n.ny * r.r1x - n.nx * r.r1y) * i) : t.Zn.get(n.nx * i, n.ny * i, (n.ny * r.r2x - n.nx * r.r2y) * i));
    };
    ke.prototype.tangentImpulse = function (e) {
        if (e === void 0) { e = null; }
        this._inactiveCheck();
        var n = this.zpp_inner.arbiter.colarb, r = this.zpp_inner.inner, i = r.jtAcc;
        return e == null ? t.Zn.get(-n.ny * i, n.nx * i) : (this._checkBody(e, n), e == n.b1.outer ? t.Zn.get(n.ny * i, -n.nx * i, -(r.r1x * n.nx + r.r1y * n.ny) * i) : t.Zn.get(-n.ny * i, n.nx * i, (r.r2x * n.nx + r.r2y * n.ny) * i));
    };
    ke.prototype.rollingImpulse = function (e) {
        if (e === void 0) { e = null; }
        this._inactiveCheck();
        var t = this.zpp_inner.arbiter.colarb, n = t.jrAcc;
        return e == null ? n : (this._checkBody(e, t), e == t.b1.outer ? -n : n);
    };
    ke.prototype.totalImpulse = function (e) {
        if (e === void 0) { e = null; }
        this._inactiveCheck();
        var n = this.zpp_inner.arbiter.colarb, r = this.zpp_inner.inner, i = r.jnAcc, a = r.jtAcc, o = n.jrAcc;
        if (e == null)
            return t.Zn.get(n.nx * i - n.ny * a, n.ny * i + n.nx * a, o);
        this._checkBody(e, n);
        var s = n.nx * i - n.ny * a, c = n.ny * i + n.nx * a;
        return e == n.b1.outer ? t.Zn.get(-s, -c, -(c * r.r1x - s * r.r1y) - o) : t.Zn.get(s, c, c * r.r2x - s * r.r2y + o);
    };
    ke.prototype.toString = function () { return this.zpp_inner.arbiter == null || this.zpp_inner.arbiter.cleared ? "{object-pooled}" : "{Contact}"; };
    ke.prototype._inactiveCheck = function () { if (this.zpp_inner.inactiveme())
        throw Error("Contact not currently in use"); };
    ke.prototype._checkBody = function (e, t) { if (e != t.b1.outer && e != t.b2.outer)
        throw Error("Contact does not relate to the given body"); };
    return ke;
}()), t.ft._wrapFn = function (e) { t.ft.internal = !0; var n = new ke; return t.ft.internal = !1, n.zpp_inner = e, e.outer = n, n; }, q = (function () {
    function e() {
        if (!t.st.internal)
            throw Error("Cannot instantiate CbEvent derp!");
    }
    Object.defineProperty(e, "BEGIN", {
        get: function () { return t.st.CbEvent_BEGIN == null && (t.st.internal = !0, t.st.CbEvent_BEGIN = new e, t.st.internal = !1), t.st.CbEvent_BEGIN; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e, "ONGOING", {
        get: function () { return t.st.CbEvent_ONGOING == null && (t.st.internal = !0, t.st.CbEvent_ONGOING = new e, t.st.internal = !1), t.st.CbEvent_ONGOING; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e, "END", {
        get: function () { return t.st.CbEvent_END == null && (t.st.internal = !0, t.st.CbEvent_END = new e, t.st.internal = !1), t.st.CbEvent_END; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e, "WAKE", {
        get: function () { return t.st.CbEvent_WAKE == null && (t.st.internal = !0, t.st.CbEvent_WAKE = new e, t.st.internal = !1), t.st.CbEvent_WAKE; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e, "SLEEP", {
        get: function () { return t.st.CbEvent_SLEEP == null && (t.st.internal = !0, t.st.CbEvent_SLEEP = new e, t.st.internal = !1), t.st.CbEvent_SLEEP; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e, "BREAK", {
        get: function () { return t.st.CbEvent_BREAK == null && (t.st.internal = !0, t.st.CbEvent_BREAK = new e, t.st.internal = !1), t.st.CbEvent_BREAK; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e, "PRE", {
        get: function () { return t.st.CbEvent_PRE == null && (t.st.internal = !0, t.st.CbEvent_PRE = new e, t.st.internal = !1), t.st.CbEvent_PRE; },
        enumerable: false,
        configurable: true
    });
    e.prototype.toString = function () { return this === t.st.CbEvent_BEGIN ? "BEGIN" : this === t.st.CbEvent_ONGOING ? "ONGOING" : this === t.st.CbEvent_END ? "END" : this === t.st.CbEvent_WAKE ? "WAKE" : this === t.st.CbEvent_SLEEP ? "SLEEP" : this === t.st.CbEvent_BREAK ? "BREAK" : this === t.st.CbEvent_PRE ? "PRE" : ""; };
    return e;
}()), J = (function () {
    function e() {
        if (!t.st.internal)
            throw Error("Cannot instantiate InteractionType derp!");
    }
    Object.defineProperty(e, "COLLISION", {
        get: function () { return t.st.InteractionType_COLLISION == null && (t.st.internal = !0, t.st.InteractionType_COLLISION = new e, t.st.internal = !1), t.st.InteractionType_COLLISION; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e, "SENSOR", {
        get: function () { return t.st.InteractionType_SENSOR == null && (t.st.internal = !0, t.st.InteractionType_SENSOR = new e, t.st.internal = !1), t.st.InteractionType_SENSOR; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e, "FLUID", {
        get: function () { return t.st.InteractionType_FLUID == null && (t.st.internal = !0, t.st.InteractionType_FLUID = new e, t.st.internal = !1), t.st.InteractionType_FLUID; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e, "ANY", {
        get: function () { return t.st.InteractionType_ANY == null && (t.st.internal = !0, t.st.InteractionType_ANY = new e, t.st.internal = !1), t.st.InteractionType_ANY; },
        enumerable: false,
        configurable: true
    });
    e.prototype.toString = function () { return this === t.st.InteractionType_COLLISION ? "COLLISION" : this === t.st.InteractionType_SENSOR ? "SENSOR" : this === t.st.InteractionType_FLUID ? "FLUID" : this === t.st.InteractionType_ANY ? "ANY" : ""; };
    return e;
}()), Ae = (function () {
    function e() {
        if (!t.st.internal)
            throw Error("Cannot instantiate PreFlag derp!");
    }
    Object.defineProperty(e, "ACCEPT", {
        get: function () { return t.st.PreFlag_ACCEPT == null && (t.st.internal = !0, t.st.PreFlag_ACCEPT = new e, t.st.internal = !1), t.st.PreFlag_ACCEPT; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e, "IGNORE", {
        get: function () { return t.st.PreFlag_IGNORE == null && (t.st.internal = !0, t.st.PreFlag_IGNORE = new e, t.st.internal = !1), t.st.PreFlag_IGNORE; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e, "ACCEPT_ONCE", {
        get: function () { return t.st.PreFlag_ACCEPT_ONCE == null && (t.st.internal = !0, t.st.PreFlag_ACCEPT_ONCE = new e, t.st.internal = !1), t.st.PreFlag_ACCEPT_ONCE; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e, "IGNORE_ONCE", {
        get: function () { return t.st.PreFlag_IGNORE_ONCE == null && (t.st.internal = !0, t.st.PreFlag_IGNORE_ONCE = new e, t.st.internal = !1), t.st.PreFlag_IGNORE_ONCE; },
        enumerable: false,
        configurable: true
    });
    e.prototype.toString = function () { return this === t.st.PreFlag_ACCEPT ? "ACCEPT" : this === t.st.PreFlag_IGNORE ? "IGNORE" : this === t.st.PreFlag_ACCEPT_ONCE ? "ACCEPT_ONCE" : this === t.st.PreFlag_IGNORE_ONCE ? "IGNORE_ONCE" : ""; };
    return e;
}()), je = (function () {
    function e(e, t) {
        this.zpp_inner = new O, this.zpp_inner.outer = this, e != null && this.including(e), t != null && this.excluding(t);
    }
    Object.defineProperty(e.prototype, "includes", {
        get: function () { return this.zpp_inner.wrap_includes == null && this.zpp_inner.setup_includes(), this.zpp_inner.wrap_includes; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "excludes", {
        get: function () { return this.zpp_inner.wrap_excludes == null && this.zpp_inner.setup_excludes(), this.zpp_inner.wrap_excludes; },
        enumerable: false,
        configurable: true
    });
    e.prototype.including = function (e) { return this.zpp_inner.append(this.zpp_inner.includes, e), this; };
    e.prototype.excluding = function (e) { return this.zpp_inner.append(this.zpp_inner.excludes, e), this; };
    e.prototype.toString = function () { this.zpp_inner.wrap_includes == null && this.zpp_inner.setup_includes(); var e = this.zpp_inner.wrap_includes.toString(); this.zpp_inner.wrap_excludes == null && this.zpp_inner.setup_excludes(); var t = this.zpp_inner.wrap_excludes.toString(); return "@{" + e + " excluding " + t + "}"; };
    e._wrap = function (n) { return n instanceof e ? n : n ? n instanceof O ? t.fn(n, function (t) { var n = Object.create(e.prototype); return n.zpp_inner = t, t.outer = n, n; }) : n.zpp_inner ? e._wrap(n.zpp_inner) : null : null; };
    return e;
}()), Y = (function () {
    function e() {
        if (!t.st.internal)
            throw Error("Cannot instantiate ListenerType derp!");
    }
    Object.defineProperty(e, "BODY", {
        get: function () { return t.st.ListenerType_BODY == null && (t.st.internal = !0, t.st.ListenerType_BODY = new e, t.st.internal = !1), t.st.ListenerType_BODY; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e, "CONSTRAINT", {
        get: function () { return t.st.ListenerType_CONSTRAINT == null && (t.st.internal = !0, t.st.ListenerType_CONSTRAINT = new e, t.st.internal = !1), t.st.ListenerType_CONSTRAINT; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e, "INTERACTION", {
        get: function () { return t.st.ListenerType_INTERACTION == null && (t.st.internal = !0, t.st.ListenerType_INTERACTION = new e, t.st.internal = !1), t.st.ListenerType_INTERACTION; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e, "PRE", {
        get: function () { return t.st.ListenerType_PRE == null && (t.st.internal = !0, t.st.ListenerType_PRE = new e, t.st.internal = !1), t.st.ListenerType_PRE; },
        enumerable: false,
        configurable: true
    });
    e.prototype.toString = function () { return this === t.st.ListenerType_BODY ? "BODY" : this === t.st.ListenerType_CONSTRAINT ? "CONSTRAINT" : this === t.st.ListenerType_INTERACTION ? "INTERACTION" : this === t.st.ListenerType_PRE ? "PRE" : ""; };
    return e;
}()), X = (function () {
    function e() {
        if (!w.internal)
            throw Error("Cannot instantiate Listener derp!");
        this.zpp_inner = null;
    }
    e._wrap = function (n) { return n instanceof e ? n : n && n instanceof w ? t.fn(n, function (t) { if (t.outer)
        return t.outer; var n = Object.create(e.prototype); return n.zpp_inner = t, t.outer = n, n; }) : null; };
    Object.defineProperty(e.prototype, "type", {
        get: function () { return g(this.zpp_inner.type); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "event", {
        get: function () { return _(this.zpp_inner.event); },
        set: function (e) { if (e == null)
            throw Error("Cannot set listener event type to null"); if (_(this.zpp_inner.event) != e) {
            var t_112 = v(e);
            this.zpp_inner.swapEvent(t_112);
        } },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "precedence", {
        get: function () { return this.zpp_inner.precedence; },
        set: function (e) { this.zpp_inner.precedence != e && (this.zpp_inner.precedence = e, this.zpp_inner.invalidate_precedence()); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "space", {
        get: function () { return this.zpp_inner.space == null ? null : t.ir._wrap(this.zpp_inner.space.outer); },
        set: function (e) { var t = e == null ? null : e; if ((this.zpp_inner.space == null ? null : this.zpp_inner.space.outer) != t) {
            if (this.zpp_inner.space != null && this.zpp_inner.space.wrap_listeners.remove(this), t != null) {
                var e_187 = t.zpp_inner.wrap_listeners;
                e_187.zpp_inner.reverse_flag ? e_187.push(this) : e_187.unshift(this);
            }
            else
                this.zpp_inner.space = null;
        } },
        enumerable: false,
        configurable: true
    });
    e.prototype.toString = function () { var e = ["BEGIN", "END", "WAKE", "SLEEP", "BREAK", "PRE", "ONGOING"][this.zpp_inner.event]; if (this.zpp_inner.type == 0) {
        var t_113 = this.zpp_inner.body;
        return "BodyListener{" + e + "::" + String(t_113.outer_zn.zpp_inner_zn.options.outer) + "}";
    } if (this.zpp_inner.type == 1) {
        var t_114 = this.zpp_inner.constraint;
        return "ConstraintListener{" + e + "::" + String(t_114.outer_zn.zpp_inner_zn.options.outer) + "}";
    } {
        var t_115 = this.zpp_inner.interaction, n_118;
        switch (t_115.itype) {
            case 1:
                n_118 = "COLLISION";
                break;
            case 2:
                n_118 = "SENSOR";
                break;
            case 4:
                n_118 = "FLUID";
                break;
            default: n_118 = "ALL";
        }
        return this.zpp_inner.type == 2 ? "InteractionListener{" + e + "#" + n_118 + "::" + String(t_115.outer_zni.zpp_inner_zn.options1.outer) + ":" + String(t_115.outer_zni.zpp_inner_zn.options2.outer) + "} precedence=" + this.zpp_inner.precedence : "PreListener{" + n_118 + "::" + String(t_115.outer_znp.zpp_inner_zn.options1.outer) + ":" + String(t_115.outer_znp.zpp_inner_zn.options2.outer) + "} precedence=" + this.zpp_inner.precedence;
    } };
    return e;
}()), Z = (function () {
    function Z() {
        if (this.zpp_inner = null, !t.fr.internal)
            throw Error("Callback cannot be instantiated derp!");
    }
    Object.defineProperty(Z.prototype, "event", {
        get: function () { return _(this.zpp_inner.event); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Z.prototype, "listener", {
        get: function () { return this.zpp_inner.listener.outer; },
        enumerable: false,
        configurable: true
    });
    Z.prototype.toString = function () { return ""; };
    return Z;
}()), Me = (function (_super) {
    __extends(Me, _super);
    function Me() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Me.prototype, "body", {
        get: function () { return this.zpp_inner.body.outer; },
        enumerable: false,
        configurable: true
    });
    Me.prototype.toString = function () { return "Cb:" + ["WAKE", "SLEEP"][this.zpp_inner.event - 2] + ":" + this.zpp_inner.body.outer.toString() + " : listener: " + String(this.zpp_inner.listener.outer); };
    return Me;
}(Z)), Ne = (function (_super) {
    __extends(Ne, _super);
    function Ne() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Ne.prototype, "constraint", {
        get: function () { return this.zpp_inner.constraint.outer; },
        enumerable: false,
        configurable: true
    });
    Ne.prototype.toString = function () { return "Cb:" + ["WAKE", "SLEEP", "BREAK"][this.zpp_inner.event - 2] + ":" + this.zpp_inner.constraint.outer.toString() + " : listener: " + String(this.zpp_inner.listener.outer); };
    return Ne;
}(Z)), Pe = (function (_super) {
    __extends(Pe, _super);
    function Pe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Pe.prototype, "int1", {
        get: function () { return this.zpp_inner.int1.outer_i; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pe.prototype, "int2", {
        get: function () { return this.zpp_inner.int2.outer_i; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pe.prototype, "arbiters", {
        get: function () { return this.zpp_inner.wrap_arbiters; },
        enumerable: false,
        configurable: true
    });
    Pe.prototype.toString = function () { return "Cb:" + ["BEGIN", "END", "", "", "", "", "ONGOING"][this.zpp_inner.event] + ":" + this.zpp_inner.int1.outer_i.toString() + "/" + this.zpp_inner.int2.outer_i.toString() + " : " + this.zpp_inner.wrap_arbiters.toString() + " : listener: " + String(this.zpp_inner.listener.outer); };
    return Pe;
}(Z)), Fe = (function (_super) {
    __extends(Fe, _super);
    function Fe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Fe.prototype, "arbiter", {
        get: function () { return this.zpp_inner.pre_arbiter.wrapper(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fe.prototype, "int1", {
        get: function () { return this.zpp_inner.int1.outer_i; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fe.prototype, "int2", {
        get: function () { return this.zpp_inner.int2.outer_i; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fe.prototype, "swapped", {
        get: function () { return this.zpp_inner.pre_swapped; },
        enumerable: false,
        configurable: true
    });
    Fe.prototype.toString = function () { return "Cb:PRE::" + this.zpp_inner.int1.outer_i.toString() + "/" + this.zpp_inner.int2.outer_i.toString() + " : " + this.zpp_inner.pre_arbiter.wrapper().toString() + " : listnener: " + String(this.zpp_inner.listener.outer); };
    return Fe;
}(Z)), Ie = (function (_super) {
    __extends(Ie, _super);
    function Ie(e, t, n, r) {
        if (r === void 0) { r = 0; }
        var _this = this;
        if (w.internal = !0, _this = _super.call(this) || this, w.internal = !1, n == null)
            throw Error("BodyListener::handler cannot be null");
        var i;
        if (e === q.WAKE)
            i = 2;
        else if (e === q.SLEEP)
            i = 3;
        else
            throw Error("Error: cbEvent '" + e.toString() + "' is not a valid event type for a BodyListener");
        _this.zpp_inner_zn = new ne(O.argument(t), i, n), _this.zpp_inner = _this.zpp_inner_zn, _this.zpp_inner.outer = _this, _this.zpp_inner_zn.outer_zn = _this, _this.zpp_inner.precedence = r;
        return _this;
    }
    Object.defineProperty(Ie.prototype, "options", {
        get: function () { return this.zpp_inner_zn.options.outer; },
        set: function (e) { this.zpp_inner_zn.options.set(O.argument(e).zpp_inner); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ie.prototype, "handler", {
        get: function () { return this.zpp_inner_zn.handler; },
        set: function (e) { if (e == null)
            throw Error("BodyListener::handler cannot be null"); this.zpp_inner_zn.handler = e; },
        enumerable: false,
        configurable: true
    });
    return Ie;
}(X)), Le = (function (_super) {
    __extends(Le, _super);
    function Le(e, t, n, r) {
        if (r === void 0) { r = 0; }
        var _this = this;
        if (w.internal = !0, _this = _super.call(this) || this, w.internal = !1, n == null)
            throw Error("ConstraintListener::handler cannot be null");
        var i;
        if (e === q.WAKE)
            i = 2;
        else if (e === q.SLEEP)
            i = 3;
        else if (e === q.BREAK)
            i = 4;
        else
            throw Error("Error: cbEvent '" + e.toString() + "' is not a valid event type for a ConstraintListener");
        _this.zpp_inner_zn = new re(O.argument(t), i, n), _this.zpp_inner = _this.zpp_inner_zn, _this.zpp_inner.outer = _this, _this.zpp_inner_zn.outer_zn = _this, _this.zpp_inner.precedence = r;
        return _this;
    }
    Object.defineProperty(Le.prototype, "options", {
        get: function () { return this.zpp_inner_zn.options.outer; },
        set: function (e) { this.zpp_inner_zn.options.set(O.argument(e).zpp_inner); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Le.prototype, "handler", {
        get: function () { return this.zpp_inner_zn.handler; },
        set: function (e) { if (e == null)
            throw Error("ConstraintListener::handler cannot be null"); this.zpp_inner_zn.handler = e; },
        enumerable: false,
        configurable: true
    });
    return Le;
}(X)), Re = (function (_super) {
    __extends(Re, _super);
    function Re(e, t, n, r, i, a) {
        if (a === void 0) { a = 0; }
        var _this = this;
        if (w.internal = !0, _this = _super.call(this) || this, w.internal = !1, i == null)
            throw Error("InteractionListener::handler cannot be null");
        if (e == null)
            throw Error("CbEvent cannot be null for InteractionListener");
        var o;
        if (e === q.BEGIN)
            o = 0;
        else if (e === q.END)
            o = 1;
        else if (e === q.ONGOING)
            o = 6;
        else
            throw Error("Error: CbEvent '" + e.toString() + "' is not a valid event type for InteractionListener");
        if (_this.zpp_inner_zn = new E(O.argument(n), O.argument(r), o, 2), _this.zpp_inner = _this.zpp_inner_zn, _this.zpp_inner.outer = _this, _this.zpp_inner_zn.outer_zni = _this, _this.zpp_inner.precedence = a, _this.zpp_inner_zn.handleri = i, t == null)
            throw Error("Cannot set listener interaction type to null");
        b(_this.zpp_inner_zn.itype) != t && (_this.zpp_inner_zn.itype = y(t));
        return _this;
    }
    Object.defineProperty(Re.prototype, "options1", {
        get: function () { return this.zpp_inner_zn.options1.outer; },
        set: function (e) { this.zpp_inner_zn.options1.set(O.argument(e).zpp_inner); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Re.prototype, "options2", {
        get: function () { return this.zpp_inner_zn.options2.outer; },
        set: function (e) { this.zpp_inner_zn.options2.set(O.argument(e).zpp_inner); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Re.prototype, "handler", {
        get: function () { return this.zpp_inner_zn.handleri; },
        set: function (e) { if (e == null)
            throw Error("InteractionListener::handler cannot be null"); this.zpp_inner_zn.handleri = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Re.prototype, "interactionType", {
        get: function () { return b(this.zpp_inner_zn.itype); },
        set: function (e) { if (e == null)
            throw Error("Cannot set listener interaction type to null"); b(this.zpp_inner_zn.itype) != e && (this.zpp_inner_zn.itype = y(e)); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Re.prototype, "allowSleepingCallbacks", {
        get: function () { return this.zpp_inner_zn.allowSleepingCallbacks; },
        set: function (e) { this.zpp_inner_zn.allowSleepingCallbacks = e; },
        enumerable: false,
        configurable: true
    });
    return Re;
}(X)), ze = (function (_super) {
    __extends(ze, _super);
    function ze(e, t, n, r, i, a) {
        if (i === void 0) { i = 0; }
        if (a === void 0) { a = !1; }
        var _this = this;
        if (w.internal = !0, _this = _super.call(this) || this, w.internal = !1, r == null)
            throw Error("PreListener must take a handler!");
        if (_this.zpp_inner_zn = new E(O.argument(t), O.argument(n), 5, 3), _this.zpp_inner = _this.zpp_inner_zn, _this.zpp_inner.outer = _this, _this.zpp_inner_zn.outer_znp = _this, _this.zpp_inner.precedence = i, _this.zpp_inner_zn.pure = a, _this.zpp_inner_zn.handlerp = r, e == null)
            throw Error("Cannot set listener interaction type to null");
        b(_this.zpp_inner_zn.itype) != e && (_this.zpp_inner_zn.itype = y(e));
        return _this;
    }
    Object.defineProperty(ze.prototype, "options1", {
        get: function () { return this.zpp_inner_zn.options1.outer; },
        set: function (e) { this.zpp_inner_zn.options1.set(O.argument(e).zpp_inner); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ze.prototype, "options2", {
        get: function () { return this.zpp_inner_zn.options2.outer; },
        set: function (e) { this.zpp_inner_zn.options2.set(O.argument(e).zpp_inner); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ze.prototype, "handler", {
        get: function () { return this.zpp_inner_zn.handlerp; },
        set: function (e) { if (e == null)
            throw Error("PreListener must take a non-null handler!"); this.zpp_inner_zn.handlerp = e, this.zpp_inner_zn.wake(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ze.prototype, "pure", {
        get: function () { return this.zpp_inner_zn.pure; },
        set: function (e) { e || this.zpp_inner_zn.wake(), this.zpp_inner_zn.pure = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ze.prototype, "interactionType", {
        get: function () { return b(this.zpp_inner_zn.itype); },
        set: function (e) { if (e == null)
            throw Error("Cannot set listener interaction type to null"); b(this.zpp_inner_zn.itype) != e && (this.zpp_inner_zn.itype = y(e)); },
        enumerable: false,
        configurable: true
    });
    return ze;
}(X)), Be = (function (_super) {
    __extends(e, _super);
    function e(e, t) {
        if (t === void 0) { t = !1; }
        var _this = this;
        if (_this = _super.call(this) || this, e < 1)
            throw Error("Constraint dimension must be at least 1");
        var n = new ae(e, t);
        _this.zpp_inner = n, n.outer = _this, n.outer_zn = _this, _this._tagAnyConstraint();
        return _this;
    }
    e._wrap = function (n) { var r; return n == null ? null : n instanceof e ? n : ((r = n.zpp_inner) == null ? void 0 : r.outer) instanceof e ? n.zpp_inner.outer : t.fn(n, function (t) { var n; var r = Object.create(e.prototype); return r.zpp_inner = (n = t.zpp_inner) == null ? t : n, r.zpp_inner.outer = r, r.zpp_inner.outer_zn = r, r; }); };
    e.prototype.__bindVec2 = function () { var e = new t.J; return e.zpp_inner._inuse = !0, e.zpp_inner._invalidate = this.zpp_inner.bindVec2_invalidate.bind(this.zpp_inner), e; };
    e.prototype.__copy = function () { throw Error("UserConstraint::__copy must be overriden"); };
    e.prototype.__broken = function () { };
    e.prototype.__validate = function () { };
    e.prototype.__draw = function (e) { };
    e.prototype.__prepare = function () { };
    e.prototype.__position = function (e) { throw Error("UserConstraint::__position must be overriden"); };
    e.prototype.__velocity = function (e) { throw Error("Userconstraint::__velocity must be overriden"); };
    e.prototype.__eff_mass = function (e) { throw Error("UserConstraint::__eff_mass must be overriden"); };
    e.prototype.__clamp = function (e) { };
    e.prototype.__impulse = function (e, t, n) { throw Error("UserConstraint::__impulse must be overriden"); };
    e.prototype.impulse = function () { var e = this.zpp_inner.dim, n = new t.It(e, 1); for (var t_116 = 0; t_116 < e; t_116++) {
        if (t_116 < 0 || t_116 >= n.zpp_inner.m || 0 >= n.zpp_inner.n)
            throw Error("MatMN indices out of range");
        n.zpp_inner.x[t_116 * n.zpp_inner.n] = this.zpp_inner.jAcc[t_116];
    } return n; };
    e.prototype.bodyImpulse = function (e) { if (e == null)
        throw Error(t.gr); var n = !1; for (var _i = 0, _a = this.zpp_inner.bodies; _i < _a.length; _i++) {
        var t_117 = _a[_i];
        if (t_117.body == e.zpp_inner) {
            n = !0;
            break;
        }
    } if (!n)
        throw Error("Body is not linked to this constraint"); return this.zpp_inner.active ? this.zpp_inner.bodyImpulse(e.zpp_inner) : t.Zn.get(); };
    e.prototype.visitBodies = function (e) { var t = this.zpp_inner.bodies.length, n = 0; for (; n < t;) {
        var r_103 = this.zpp_inner.bodies[n];
        if (r_103.body != null) {
            var i_50 = !1;
            for (var e_188 = n + 1; e_188 < t; e_188++)
                if (this.zpp_inner.bodies[e_188].body == r_103.body) {
                    i_50 = !0;
                    break;
                }
            i_50 || e(r_103.body.outer);
        }
        ++n;
    } };
    e.prototype.__invalidate = function () { this.zpp_inner.immutable_midstep("UserConstraint::invalidate()"), this.zpp_inner.active && (this.zpp_inner.space == null ? null : this.zpp_inner.space.outer) != null && this.zpp_inner.wake(); };
    e.prototype.__registerBody = function (e, t) { if (this.zpp_inner.immutable_midstep("UserConstraint::registerBody(..)"), e != t) {
        if (e != null) {
            if (!this.zpp_inner.remBody(e.zpp_inner))
                throw Error("oldBody is not registered to the cosntraint");
            this.zpp_inner.active && (this.zpp_inner.space == null ? null : this.zpp_inner.space.outer) != null && e.zpp_inner.wake();
        }
        t != null && this.zpp_inner.addBody(t.zpp_inner), this.zpp_inner.wake(), t == null || t.zpp_inner.wake();
    } return t; };
    return e;
}(t.tn)), Q = t.E(), r(Q), Q.Config = t.q, Q.util.Debug = he, Q.geom.Vec2 = t.J, Q.geom.Vec3 = t.Zn, Q.geom.Mat23 = ge, Q.geom.MatMN = t.It, Q.geom.AABB = t.nt, Q.geom.Winding = t.B, Q.geom.Ray = _e, Q.geom.ConvexResult = ve, Q.geom.RayResult = ye, Q.geom.Geom = be, Q.geom.GeomPoly = t.kt, Q.geom.MarchingSquares = xe, Q.geom.Vec2Iterator = t.zt, Q.geom.Vec2List = t.mt, Q.geom.GeomVertexIterator = h, Q.__zpp.geom.ZPP_GeomVertexIterator = t.W, Q.__zpp.util.ZPP_ContactList = W, Q.__zpp.util.ZPP_MixVec2List = t.D, Q.phys.Interactor = t.In, Q.phys.Body = t.i, t.Gt(function (e) { return t.i._wrap(e); }), Q.phys.BodyType = t.pn, Q.phys.Compound = t.Yt, t.un(function (e) { return t.Yt._wrap(e); }), Q.phys.FluidProperties = t.Sn, Q.phys.Material = t.qt, Q.phys.GravMassMode = t.wn, Q.phys.InertiaMode = t.nr, Q.phys.MassMode = t.Qn, Q.shape.Shape = t.lt, t.Qt(function (e) { return t.lt._wrap(e); }), Q.shape.Circle = t.y, Q.shape.Polygon = t.it, Q.shape.Capsule = t.o, Q.shape.Edge = Ce, Q.shape.ShapeType = t.vn, Q.shape.ValidationResult = we, Q.space.Space = t.ir, Q.space.Broadphase = t.cn, Q.dynamics.InteractionFilter = t.Mt, Q.dynamics.InteractionGroup = Te, Q.dynamics.ArbiterType = G, Q.dynamics.Arbiter = K, t.ur._createColArb = function () { return new De; }, t.ur._createFluidArb = function () { return new Oe; }, Q.dynamics.Contact = ke, Q.dynamics.ContactIterator = o, Q.dynamics.ContactList = s, Q.callbacks.CbEvent = q, Q.callbacks.CbType = t.rn, Q.callbacks.InteractionType = J, Q.callbacks.PreFlag = Ae, Q.callbacks.OptionType = je, Q.callbacks.Listener = X, Q.callbacks.ListenerType = Y, Q.callbacks.Callback = Z, t.fr._createBodyCb = function () { return new Me; }, t.fr._createConCb = function () { return new Ne; }, t.fr._createIntCb = function () { return new Pe; }, t.fr._createPreCb = function () { return new Fe; }, Q.callbacks.BodyListener = Ie, Q.callbacks.ConstraintListener = Le, Q.callbacks.InteractionListener = Re, Q.callbacks.PreListener = ze, Q.constraint.Constraint = t.tn, t.ct._createFn = function () {
    var _a;
    var e = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        e[_i] = arguments[_i];
    }
    return new ((_a = t.bt).bind.apply(_a, __spreadArray([void 0], e, false)))();
}, t.$t._createFn = function () {
    var _a;
    var e = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        e[_i] = arguments[_i];
    }
    return new ((_a = t.Pt).bind.apply(_a, __spreadArray([void 0], e, false)))();
}, t.Hn._createFn = function () {
    var _a;
    var e = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        e[_i] = arguments[_i];
    }
    return new ((_a = t.ot).bind.apply(_a, __spreadArray([void 0], e, false)))();
}, t.Gn._createFn = function () {
    var _a;
    var e = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        e[_i] = arguments[_i];
    }
    return new ((_a = t.P).bind.apply(_a, __spreadArray([void 0], e, false)))();
}, t.on._createFn = function () {
    var _a;
    var e = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        e[_i] = arguments[_i];
    }
    return new ((_a = t.l).bind.apply(_a, __spreadArray([void 0], e, false)))();
}, t.xn._createFn = function () {
    var _a;
    var e = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        e[_i] = arguments[_i];
    }
    return new ((_a = t.wt).bind.apply(_a, __spreadArray([void 0], e, false)))();
}, t.cr._createFn = function () {
    var _a;
    var e = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        e[_i] = arguments[_i];
    }
    return new ((_a = t.h).bind.apply(_a, __spreadArray([void 0], e, false)))();
}, t.Xt._createFn = function () {
    var _a;
    var e = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        e[_i] = arguments[_i];
    }
    return new ((_a = t.S).bind.apply(_a, __spreadArray([void 0], e, false)))();
}, Q.constraint.UserConstraint = Be, Ve = "3.43.5", $ = globalThis, typeof $.__NAPE_JS__ < "u" ? $.__NAPE_JS__ !== "3.43.5" && ((x = $.console) == null || x.warn("WARNING: Multiple instances of @newkrok/nape-js being imported (".concat($.__NAPE_JS__, " and 3.43.5)."))) : $.__NAPE_JS__ = Ve; })))(); }
Object.defineProperty(exports, "i", { enumerable: !0, get: function () { return He; } }), Object.defineProperty(exports, "n", { enumerable: !0, get: function () { return Re; } }), Object.defineProperty(exports, "r", { enumerable: !0, get: function () { return q; } }), Object.defineProperty(exports, "t", { enumerable: !0, get: function () { return J; } });
