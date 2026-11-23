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
var e = require("./rolldown-runtime-8PkXcCTM.js"), t = require("./nape-physics-tjC3J-kx.js"), n = require("./sapling-engine-BaQMQODF.js"), r = require("./sapling-engine-E6YpPtHn.js"), i = require("./sapling-engine-BXH-PsI2.js"), a = require("./sapling-engine-DbC_V8gI.js"), o = require("./sapling-engine-lHNhdQUz.js"), s = require("./sapling-engine-Dihp4nr7.js"), c = require("./sapling-engine-D7PD7dB2.js"), l = require("./sapling-engine-D-hh5wFy.js"), u = require("./sapling-engine-DEUdDAgy.js");
function d(e) { var t = {}; for (var n_1 in e)
    e[n_1] !== void 0 && (t[n_1] = e[n_1]); return t; }
function f() { return (f = e.n((function () { })))(); }
var p, m;
function h() { return (h = e.n((function () { i.x(), i._(), p = new i.b, m = (function () {
    function e(e, t, n, r) {
        if (e === void 0) { e = 1 / 0; }
        if (t === void 0) { t = 1 / 0; }
        if (n === void 0) { n = -1 / 0; }
        if (r === void 0) { r = -1 / 0; }
        this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0, this.matrix = p, this.minX = e, this.minY = t, this.maxX = n, this.maxY = r;
    }
    e.prototype.isEmpty = function () { return this.minX > this.maxX || this.minY > this.maxY; };
    Object.defineProperty(e.prototype, "rectangle", {
        get: function () { this._rectangle || (this._rectangle = new i.g); var e = this._rectangle; return this.minX > this.maxX || this.minY > this.maxY ? (e.x = 0, e.y = 0, e.width = 0, e.height = 0) : e.copyFromBounds(this), e; },
        enumerable: false,
        configurable: true
    });
    e.prototype.clear = function () { return this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0, this.matrix = p, this; };
    e.prototype.set = function (e, t, n, r) { this.minX = e, this.minY = t, this.maxX = n, this.maxY = r; };
    e.prototype.addFrame = function (e, t, n, r, i) { i || (i = this.matrix); var a = i.a, o = i.b, s = i.c, c = i.d, l = i.tx, u = i.ty, d = this.minX, f = this.minY, p = this.maxX, m = this.maxY, h = a * e + s * t + l, g = o * e + c * t + u; h < d && (d = h), g < f && (f = g), h > p && (p = h), g > m && (m = g), h = a * n + s * t + l, g = o * n + c * t + u, h < d && (d = h), g < f && (f = g), h > p && (p = h), g > m && (m = g), h = a * e + s * r + l, g = o * e + c * r + u, h < d && (d = h), g < f && (f = g), h > p && (p = h), g > m && (m = g), h = a * n + s * r + l, g = o * n + c * r + u, h < d && (d = h), g < f && (f = g), h > p && (p = h), g > m && (m = g), this.minX = d, this.minY = f, this.maxX = p, this.maxY = m; };
    e.prototype.addRect = function (e, t) { this.addFrame(e.x, e.y, e.x + e.width, e.y + e.height, t); };
    e.prototype.addBounds = function (e, t) { this.addFrame(e.minX, e.minY, e.maxX, e.maxY, t); };
    e.prototype.addBoundsMask = function (e) { this.minX = this.minX > e.minX ? this.minX : e.minX, this.minY = this.minY > e.minY ? this.minY : e.minY, this.maxX = this.maxX < e.maxX ? this.maxX : e.maxX, this.maxY = this.maxY < e.maxY ? this.maxY : e.maxY; };
    e.prototype.applyMatrix = function (e) { var t = this.minX, n = this.minY, r = this.maxX, i = this.maxY, a = e.a, o = e.b, s = e.c, c = e.d, l = e.tx, u = e.ty, d = a * t + s * n + l, f = o * t + c * n + u; this.minX = d, this.minY = f, this.maxX = d, this.maxY = f, d = a * r + s * n + l, f = o * r + c * n + u, this.minX = d < this.minX ? d : this.minX, this.minY = f < this.minY ? f : this.minY, this.maxX = d > this.maxX ? d : this.maxX, this.maxY = f > this.maxY ? f : this.maxY, d = a * t + s * i + l, f = o * t + c * i + u, this.minX = d < this.minX ? d : this.minX, this.minY = f < this.minY ? f : this.minY, this.maxX = d > this.maxX ? d : this.maxX, this.maxY = f > this.maxY ? f : this.maxY, d = a * r + s * i + l, f = o * r + c * i + u, this.minX = d < this.minX ? d : this.minX, this.minY = f < this.minY ? f : this.minY, this.maxX = d > this.maxX ? d : this.maxX, this.maxY = f > this.maxY ? f : this.maxY; };
    e.prototype.fit = function (e) { return this.minX < e.left && (this.minX = e.left), this.maxX > e.right && (this.maxX = e.right), this.minY < e.top && (this.minY = e.top), this.maxY > e.bottom && (this.maxY = e.bottom), this; };
    e.prototype.fitBounds = function (e, t, n, r) { return this.minX < e && (this.minX = e), this.maxX > t && (this.maxX = t), this.minY < n && (this.minY = n), this.maxY > r && (this.maxY = r), this; };
    e.prototype.pad = function (e, t) {
        if (t === void 0) { t = e; }
        return this.minX -= e, this.maxX += e, this.minY -= t, this.maxY += t, this;
    };
    e.prototype.ceil = function () { return this.minX = Math.floor(this.minX), this.minY = Math.floor(this.minY), this.maxX = Math.ceil(this.maxX), this.maxY = Math.ceil(this.maxY), this; };
    e.prototype.clone = function () { return new e(this.minX, this.minY, this.maxX, this.maxY); };
    e.prototype.scale = function (e, t) {
        if (t === void 0) { t = e; }
        return this.minX *= e, this.minY *= t, this.maxX *= e, this.maxY *= t, this;
    };
    Object.defineProperty(e.prototype, "x", {
        get: function () { return this.minX; },
        set: function (e) { var t = this.maxX - this.minX; this.minX = e, this.maxX = e + t; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "y", {
        get: function () { return this.minY; },
        set: function (e) { var t = this.maxY - this.minY; this.minY = e, this.maxY = e + t; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "width", {
        get: function () { return this.maxX - this.minX; },
        set: function (e) { this.maxX = this.minX + e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "height", {
        get: function () { return this.maxY - this.minY; },
        set: function (e) { this.maxY = this.minY + e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "left", {
        get: function () { return this.minX; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "right", {
        get: function () { return this.maxX; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "top", {
        get: function () { return this.minY; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "bottom", {
        get: function () { return this.maxY; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "isPositive", {
        get: function () { return this.maxX - this.minX > 0 && this.maxY - this.minY > 0; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "isValid", {
        get: function () { return this.minX + this.minY !== 1 / 0; },
        enumerable: false,
        configurable: true
    });
    e.prototype.addVertexData = function (e, t, n, r) { var i = this.minX, a = this.minY, o = this.maxX, s = this.maxY; r || (r = this.matrix); var c = r.a, l = r.b, u = r.c, d = r.d, f = r.tx, p = r.ty; for (var r_1 = t; r_1 < n; r_1 += 2) {
        var t_1 = e[r_1], n_2 = e[r_1 + 1], m_1 = c * t_1 + u * n_2 + f, h_1 = l * t_1 + d * n_2 + p;
        i = m_1 < i ? m_1 : i, a = h_1 < a ? h_1 : a, o = m_1 > o ? m_1 : o, s = h_1 > s ? h_1 : s;
    } this.minX = i, this.minY = a, this.maxX = o, this.maxY = s; };
    e.prototype.containsPoint = function (e, t) { return this.minX <= e && this.minY <= t && this.maxX >= e && this.maxY >= t; };
    e.prototype.toString = function () { return "[pixi.js:Bounds minX=".concat(this.minX, " minY=").concat(this.minY, " maxX=").concat(this.maxX, " maxY=").concat(this.maxY, " width=").concat(this.width, " height=").concat(this.height, "]"); };
    e.prototype.copyFrom = function (e) { return this.minX = e.minX, this.minY = e.minY, this.maxX = e.maxX, this.maxY = e.maxY, this; };
    return e;
}()); })))(); }
var g;
function ee() { return (ee = e.n((function () { a.W(), g = { get isCachedAsTexture() { var e; return !!((e = this.renderGroup) != null && e.isCachedAsTexture); }, cacheAsTexture: function (e) { typeof e == "boolean" && e === !1 ? this.disableRenderGroup() : (this.enableRenderGroup(), this.renderGroup.enableCacheAsTexture(e === !0 ? {} : e)); }, updateCacheTexture: function () { var e; (e = this.renderGroup) == null || e.updateCacheTexture(); }, get cacheAsBitmap() { return this.isCachedAsTexture; }, set cacheAsBitmap(e) { a.U("v8.6.0", "cacheAsBitmap is deprecated, use cacheAsTexture instead."), this.cacheAsTexture(e); } }; })))(); }
var te;
function ne() { return (ne = e.n((function () { a.W(), te = { allowChildren: !0, removeChildren: function (e, t) {
        if (e === void 0) { e = 0; }
        var n = t == null ? this.children.length : t, r = n - e, i = [];
        if (r > 0 && r <= n) {
            for (var t_2 = n - 1; t_2 >= e; t_2--) {
                var e_1 = this.children[t_2];
                e_1 && (i.push(e_1), e_1.parent = null);
            }
            a.M(this.children, e, n);
            var t_3 = this.renderGroup || this.parentRenderGroup;
            t_3 && t_3.removeChildren(i);
            for (var e_2 = 0; e_2 < i.length; ++e_2) {
                var o;
                var t_4 = i[e_2];
                (o = t_4.parentRenderLayer) == null || o.detach(t_4), this.emit("childRemoved", t_4, this, e_2), i[e_2].emit("removed", this);
            }
            return i.length > 0 && this._didViewChangeTick++, i;
        }
        if (r === 0 && this.children.length === 0)
            return i;
        throw RangeError("removeChildren: numeric values are outside the acceptable range.");
    }, removeChildAt: function (e) { var t = this.getChildAt(e); return this.removeChild(t); }, getChildAt: function (e) { if (e < 0 || e >= this.children.length)
        throw Error("getChildAt: Index (".concat(e, ") does not exist.")); return this.children[e]; }, setChildIndex: function (e, t) { if (t < 0 || t >= this.children.length)
        throw Error("The index ".concat(t, " supplied is out of bounds ").concat(this.children.length)); this.getChildIndex(e), this.addChildAt(e, t); }, getChildIndex: function (e) { var t = this.children.indexOf(e); if (t === -1)
        throw Error("The supplied Container must be a child of the caller"); return t; }, addChildAt: function (e, t) { this.allowChildren || a.U(a.G, "addChildAt: Only Containers will be allowed to add children in v8.0.0"); var n = this.children; if (t < 0 || t > n.length)
        throw Error("".concat(e, "addChildAt: The index ").concat(t, " supplied is out of bounds ").concat(n.length)); var r = e.parent === this; if (e.parent) {
        var n_3 = e.parent.children.indexOf(e);
        if (r) {
            if (n_3 === t)
                return e;
            e.parent.children.splice(n_3, 1);
        }
        else
            e.removeFromParent();
    } t === n.length ? n.push(e) : n.splice(t, 0, e); var i = this.renderGroup || this.parentRenderGroup; return this.sortableChildren && (this.sortDirty = !0), r ? (i && (i.structureDidChange = !0), e) : (e.parent = this, e.didChange = !0, e._updateFlags = 15, i && i.addChild(e), this.emit("childAdded", e, this, t), e.emit("added", this), e); }, swapChildren: function (e, t) { if (e === t)
        return; var n = this.getChildIndex(e), r = this.getChildIndex(t); this.children[n] = t, this.children[r] = e; var i = this.renderGroup || this.parentRenderGroup; i && (i.structureDidChange = !0), this._didContainerChangeTick++; }, removeFromParent: function () { var e; (e = this.parent) == null || e.removeChild(this); }, reparentChild: function () {
        var _this = this;
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        return e.length === 1 ? this.reparentChildAt(e[0], this.children.length) : (e.forEach(function (e) { return _this.reparentChildAt(e, _this.children.length); }), e[0]);
    }, reparentChildAt: function (e, t) { if (e.parent === this)
        return this.setChildIndex(e, t), e; var n = e.worldTransform.clone(); e.removeFromParent(), this.addChildAt(e, t); var r = this.worldTransform.clone(); return r.invert(), n.prepend(r), e.setFromMatrix(n), e; }, replaceChild: function (e, t) { e.updateLocalTransform(), this.addChildAt(t, this.getChildIndex(e)), t.setFromMatrix(e.localTransform), t.updateLocalTransform(), this.removeChild(e); } }; })))(); }
var re;
function ie() { return (ie = e.n((function () { re = { collectRenderables: function (e, t, n) { this.parentRenderLayer && this.parentRenderLayer !== n || this.globalDisplayStatus < 7 || !this.includeInBuild || (this.sortableChildren && this.sortChildren(), this.isSimple ? this.collectRenderablesSimple(e, t, n) : this.renderGroup ? t.renderPipes.renderGroup.addRenderGroup(this.renderGroup, e) : this.collectRenderablesWithEffects(e, t, n)); }, collectRenderablesSimple: function (e, t, n) { var r = this.children, i = r.length; for (var a_1 = 0; a_1 < i; a_1++)
        r[a_1].collectRenderables(e, t, n); }, collectRenderablesWithEffects: function (e, t, n) { var r = t.renderPipes; for (var t_5 = 0; t_5 < this.effects.length; t_5++) {
        var n_4 = this.effects[t_5];
        r[n_4.pipe].push(n_4, this, e);
    } this.collectRenderablesSimple(e, t, n); for (var t_6 = this.effects.length - 1; t_6 >= 0; t_6--) {
        var n_5 = this.effects[t_6];
        r[n_5.pipe].pop(n_5, this, e);
    } } }; })))(); }
var ae;
function oe() { return (oe = e.n((function () { r.I(), s.W(), t.br(), ae = { _maskEffect: null, _maskOptions: { inverse: !1, channel: "red" }, _filterEffect: null, effects: [], _markStructureAsChanged: function () { var e = this.renderGroup || this.parentRenderGroup; e && (e.structureDidChange = !0); }, addEffect: function (e) { this.effects.indexOf(e) === -1 && (this.effects.push(e), this.effects.sort(function (e, t) { return e.priority - t.priority; }), this._markStructureAsChanged(), this._updateIsSimple()); }, removeEffect: function (e) { var t = this.effects.indexOf(e); t !== -1 && (this.effects.splice(t, 1), this._markStructureAsChanged(), this._updateIsSimple()); }, set mask(e) { var t = this._maskEffect; (t == null ? void 0 : t.mask) !== e && (t && (this.removeEffect(t), s.U.returnMaskEffect(t), this._maskEffect = null), e != null && (this._maskEffect = s.U.getMaskEffect(e), this.addEffect(this._maskEffect))); }, get mask() { var e; return (e = this._maskEffect) == null ? void 0 : e.mask; }, setMask: function (e) { this._maskOptions = t.yr(t.yr({}, this._maskOptions), e), e.mask && (this.mask = e.mask), this._markStructureAsChanged(); }, set filters(e) { var t; !Array.isArray(e) && e && (e = [e]); var n = this._filterEffect || (this._filterEffect = new r.F); e = e; var i = (e == null ? void 0 : e.length) > 0, a = i !== ((t = n.filters) == null ? void 0 : t.length) > 0; if (e = Array.isArray(e) ? e.slice(0) : e, n.filters = Object.freeze(e), a) {
        if (i)
            this.addEffect(n);
        else {
            var o;
            this.removeEffect(n), n.filters = (o = e) == null ? null : o;
        }
    } }, get filters() { var e; return (e = this._filterEffect) == null ? void 0 : e.filters; }, set filterArea(e) { this._filterEffect || (this._filterEffect = new r.F), this._filterEffect.filterArea = e; }, get filterArea() { var e; return (e = this._filterEffect) == null ? void 0 : e.filterArea; } }; })))(); }
var se;
function ce() { return (ce = e.n((function () { a.W(), se = { label: null, get name() { return a.U(a.G, "Container.name property has been removed, use Container.label instead"), this.label; }, set name(e) { a.U(a.G, "Container.name property has been removed, use Container.label instead"), this.label = e; }, getChildByName: function (e, t) {
        if (t === void 0) { t = !1; }
        return this.getChildByLabel(e, t);
    }, getChildByLabel: function (e, t) {
        if (t === void 0) { t = !1; }
        var n = this.children;
        for (var t_7 = 0; t_7 < n.length; t_7++) {
            var r_2 = n[t_7];
            if (r_2.label === e || e instanceof RegExp && e.test(r_2.label))
                return r_2;
        }
        if (t)
            for (var t_8 = 0; t_8 < n.length; t_8++) {
                var r_3 = n[t_8].getChildByLabel(e, !0);
                if (r_3)
                    return r_3;
            }
        return null;
    }, getChildrenByLabel: function (e, t, n) {
        if (t === void 0) { t = !1; }
        if (n === void 0) { n = []; }
        var r = this.children;
        for (var t_9 = 0; t_9 < r.length; t_9++) {
            var i_1 = r[t_9];
            (i_1.label === e || e instanceof RegExp && e.test(i_1.label)) && n.push(i_1);
        }
        if (t)
            for (var t_10 = 0; t_10 < r.length; t_10++)
                r[t_10].getChildrenByLabel(e, !0, n);
        return n;
    } }; })))(); }
var _, v;
function y() { return (y = e.n((function () { i.x(), a.P(), h(), _ = a.N.getPool(i.b), v = a.N.getPool(m); })))(); }
var le, ue;
function de() { return (de = e.n((function () { i.x(), h(), y(), le = new i.b, ue = { getFastGlobalBounds: function (e, t) { t || (t = new m), t.clear(), this._getGlobalBoundsRecursive(!!e, t, this.parentRenderLayer), t.isValid || t.set(0, 0, 0, 0); var n = this.renderGroup || this.parentRenderGroup; return t.applyMatrix(n.worldTransform), t; }, _getGlobalBoundsRecursive: function (e, t, n) { var r = t; if (e && this.parentRenderLayer && this.parentRenderLayer !== n || this.localDisplayStatus !== 7 || !this.measurable)
        return; var i = !!this.effects.length; if ((this.renderGroup || i) && (r = v.get().clear()), this.boundsArea)
        t.addRect(this.boundsArea, this.worldTransform);
    else {
        if (this.renderPipeId) {
            var e_3 = this.bounds;
            r.addFrame(e_3.minX, e_3.minY, e_3.maxX, e_3.maxY, this.groupTransform);
        }
        var t_11 = this.children;
        for (var i_2 = 0; i_2 < t_11.length; i_2++)
            t_11[i_2]._getGlobalBoundsRecursive(e, r, n);
    } if (i) {
        var e_4 = !1, n_6 = this.renderGroup || this.parentRenderGroup;
        for (var t_12 = 0; t_12 < this.effects.length; t_12++)
            this.effects[t_12].addBounds && (e_4 || (e_4 = !0, r.applyMatrix(n_6.worldTransform)), this.effects[t_12].addBounds(r, !0));
        e_4 && r.applyMatrix(n_6.worldTransform.copyTo(le).invert()), t.addBounds(r), v.return(r);
    }
    else
        this.renderGroup && (t.addBounds(r, this.relativeGroupTransform), v.return(r)); } }; })))(); }
function fe(e, t, n) { n.clear(); var r, a; return e.parent ? t ? r = e.parent.worldTransform : (a = _.get().identity(), r = b(e, a)) : r = i.b.IDENTITY, pe(e, n, r, t), a && _.return(a), n.isValid || n.set(0, 0, 0, 0), n; }
function pe(e, t, n, r) { if (!e.visible || !e.measurable)
    return; var a; r ? a = e.worldTransform : (e.updateLocalTransform(), a = _.get(), a.appendFrom(e.localTransform, n)); var o = t, s = !!e.effects.length; if (s && (t = v.get().clear()), e.boundsArea)
    t.addRect(e.boundsArea, a);
else {
    var n_7 = e.bounds;
    n_7 && !n_7.isEmpty() && (t.matrix = a, t.addBounds(n_7));
    for (var n_8 = 0; n_8 < e.children.length; n_8++)
        pe(e.children[n_8], t, a, r);
} if (s) {
    for (var n_9 = 0; n_9 < e.effects.length; n_9++) {
        var c, l;
        (c = (l = e.effects[n_9]).addBounds) == null || c.call(l, t);
    }
    o.addBounds(t, i.b.IDENTITY), v.return(t);
} r || _.return(a); }
function b(e, t) { var n = e.parent; return n && (b(n, t), n.updateLocalTransform(), t.append(n.localTransform)), t; }
function x() { return (x = e.n((function () { i.x(), y(); })))(); }
function me(e, t) { if (e === 16777215 || !t)
    return t; if (t === 16777215 || !e)
    return e; var n = e >> 16 & 255, r = e >> 8 & 255, i = e & 255, a = t >> 16 & 255, o = t >> 8 & 255, s = t & 255, c = n * a / 255 | 0, l = r * o / 255 | 0, u = i * s / 255 | 0; return (c << 16) + (l << 8) + u; }
function he() { return (he = e.n((function () { })))(); }
function S(e, t) { return e === C ? t : t === C ? e : me(e, t); }
var C;
function w() { return (w = e.n((function () { C = 16777215; })))(); }
function T(e) { return ((e & 255) << 16) + (e & 65280) + (e >> 16 & 255); }
var ge;
function E() { return (E = e.n((function () { i.x(), x(), y(), w(), ge = { getGlobalAlpha: function (e) { if (e)
        return this.renderGroup ? this.renderGroup.worldAlpha : this.parentRenderGroup ? this.parentRenderGroup.worldAlpha * this.alpha : this.alpha; var t = this.alpha, n = this.parent; for (; n;)
        t *= n.alpha, n = n.parent; return t; }, getGlobalTransform: function (e, t) {
        if (e === void 0) { e = new i.b; }
        if (t)
            return e.copyFrom(this.worldTransform);
        this.updateLocalTransform();
        var n = b(this, _.get().identity());
        return e.appendFrom(this.localTransform, n), _.return(n), e;
    }, getGlobalTint: function (e) { if (e)
        return this.renderGroup ? T(this.renderGroup.worldColor) : this.parentRenderGroup ? T(S(this.localColor, this.parentRenderGroup.worldColor)) : this.tint; var t = this.localColor, n = this.parent; for (; n;)
        t = S(t, n.localColor), n = n.parent; return T(t); } }; })))(); }
function _e(e, t, n) { return t.clear(), n || (n = i.b.IDENTITY), ve(e, t, n, e, !0), t.isValid || t.set(0, 0, 0, 0), t; }
function ve(e, t, n, r, a) { var o; if (a)
    o = _.get(), o = n.copyTo(o);
else {
    if (!e.visible || !e.measurable)
        return;
    e.updateLocalTransform();
    var t_13 = e.localTransform;
    o = _.get(), o.appendFrom(t_13, n);
} var s = t, c = !!e.effects.length; if (c && (t = v.get().clear()), e.boundsArea)
    t.addRect(e.boundsArea, o);
else {
    e.renderPipeId && (t.matrix = o, t.addBounds(e.bounds));
    var n_10 = e.children;
    for (var e_5 = 0; e_5 < n_10.length; e_5++)
        ve(n_10[e_5], t, o, r, !1);
} if (c) {
    for (var n_11 = 0; n_11 < e.effects.length; n_11++) {
        var l, u;
        (l = (u = e.effects[n_11]).addLocalBounds) == null || l.call(u, t, r);
    }
    s.addBounds(t, i.b.IDENTITY), v.return(t);
} _.return(o); }
function D() { return (D = e.n((function () { i.x(), y(); })))(); }
function ye(e, t) { var n = e.children; for (var e_6 = 0; e_6 < n.length; e_6++) {
    var r_4 = n[e_6], i_3 = r_4.uid, a_2 = (r_4._didViewChangeTick & 65535) << 16 | r_4._didContainerChangeTick & 65535, o_1 = t.index;
    (t.data[o_1] !== i_3 || t.data[o_1 + 1] !== a_2) && (t.data[t.index] = i_3, t.data[t.index + 1] = a_2, t.didChange = !0), t.index = o_1 + 2, r_4.children.length && ye(r_4, t);
} return t.didChange; }
var O, k;
function A() { return (A = e.n((function () { i.x(), h(), x(), D(), O = new i.b, k = { _localBoundsCacheId: -1, _localBoundsCacheData: null, _setWidth: function (e, t) { var n = Math.sign(this.scale.x) || 1; t === 0 ? this.scale.x = n : this.scale.x = e / t * n; }, _setHeight: function (e, t) { var n = Math.sign(this.scale.y) || 1; t === 0 ? this.scale.y = n : this.scale.y = e / t * n; }, getLocalBounds: function () { this._localBoundsCacheData || (this._localBoundsCacheData = { data: [], index: 1, didChange: !1, localBounds: new m }); var e = this._localBoundsCacheData; return e.index = 1, e.didChange = !1, e.data[0] !== this._didViewChangeTick && (e.didChange = !0, e.data[0] = this._didViewChangeTick), ye(this, e), e.didChange && _e(this, e.localBounds, O), e.localBounds; }, getBounds: function (e, t) { return fe(this, e, t || new m); } }; })))(); }
var j;
function M() { return (M = e.n((function () { j = { _onRender: null, set onRender(e) { var t = this.renderGroup || this.parentRenderGroup; e ? (this._onRender || t == null || t.addOnRender(this), this._onRender = e) : (this._onRender && (t == null || t.removeOnRender(this)), this._onRender = null); }, get onRender() { return this._onRender; } }; })))(); }
function be(e, t) { return e._zIndex - t._zIndex; }
var N;
function P() { return (P = e.n((function () { N = { _zIndex: 0, sortDirty: !1, sortableChildren: !1, get zIndex() { return this._zIndex; }, set zIndex(e) { this._zIndex !== e && (this._zIndex = e, this.depthOfChildModified()); }, depthOfChildModified: function () { this.parent && (this.parent.sortableChildren = !0, this.parent.sortDirty = !0), this.parentRenderGroup && (this.parentRenderGroup.structureDidChange = !0); }, sortChildren: function () { this.sortDirty && (this.sortDirty = !1, this.children.sort(be)); } }; })))(); }
var xe;
function Se() { return (Se = e.n((function () { i.C(), y(), xe = { getGlobalPosition: function (e, t) {
        if (e === void 0) { e = new i.S; }
        if (t === void 0) { t = !1; }
        return this.parent ? this.parent.toGlobal(this._position, e, t) : (e.x = this._position.x, e.y = this._position.y), e;
    }, toGlobal: function (e, t, n) {
        if (n === void 0) { n = !1; }
        var r = this.getGlobalTransform(_.get(), n);
        return t = r.apply(e, t), _.return(r), t;
    }, toLocal: function (e, t, n, r) { t && (e = t.toGlobal(e, n, r)); var i = this.getGlobalTransform(_.get(), r); return n = i.applyInverse(e, n), _.return(i), n; } }; })))(); }
var F;
function I() { return (I = e.n((function () { i.x(), o.ht(), o.pt(), F = (function () {
    function F() {
        this.renderPipeId = "renderGroup", this.root = null, this.canBundle = !1, this.renderGroupParent = null, this.renderGroupChildren = [], this.worldTransform = new i.b, this.worldColorAlpha = 4294967295, this.worldColor = 16777215, this.worldAlpha = 1, this.childrenToUpdate = Object.create(null), this.updateTick = 0, this.gcTick = 0, this.childrenRenderablesToUpdate = { list: [], index: 0 }, this.structureDidChange = !0, this.instructionSet = new o.mt, this._onRenderContainers = [], this.textureNeedsUpdate = !0, this.isCachedAsTexture = !1, this._matrixDirty = 7;
    }
    F.prototype.init = function (e) { this.root = e, e._onRender && this.addOnRender(e), e.didChange = !0; var t = e.children; for (var e_7 = 0; e_7 < t.length; e_7++) {
        var n_12 = t[e_7];
        n_12._updateFlags = 15, this.addChild(n_12);
    } };
    F.prototype.enableCacheAsTexture = function (e) {
        if (e === void 0) { e = {}; }
        this.textureOptions = e, this.isCachedAsTexture = !0, this.textureNeedsUpdate = !0;
    };
    F.prototype.disableCacheAsTexture = function () { this.isCachedAsTexture = !1, this.texture && (o.ft.returnTexture(this.texture), this.texture = null); };
    F.prototype.updateCacheTexture = function () { this.textureNeedsUpdate = !0; var e = this._parentCacheAsTextureRenderGroup; e && !e.textureNeedsUpdate && e.updateCacheTexture(); };
    F.prototype.reset = function () { this.renderGroupChildren.length = 0; for (var e_8 in this.childrenToUpdate) {
        var t_14 = this.childrenToUpdate[e_8];
        t_14.list.fill(null), t_14.index = 0;
    } this.childrenRenderablesToUpdate.index = 0, this.childrenRenderablesToUpdate.list.fill(null), this.root = null, this.updateTick = 0, this.structureDidChange = !0, this._onRenderContainers.length = 0, this.renderGroupParent = null, this.disableCacheAsTexture(); };
    Object.defineProperty(F.prototype, "localTransform", {
        get: function () { return this.root.localTransform; },
        enumerable: false,
        configurable: true
    });
    F.prototype.addRenderGroupChild = function (e) { e.renderGroupParent && e.renderGroupParent._removeRenderGroupChild(e), e.renderGroupParent = this, this.renderGroupChildren.push(e); };
    F.prototype._removeRenderGroupChild = function (e) { var t = this.renderGroupChildren.indexOf(e); t > -1 && this.renderGroupChildren.splice(t, 1), e.renderGroupParent = null; };
    F.prototype.addChild = function (e) { if (this.structureDidChange = !0, e.parentRenderGroup = this, e.updateTick = -1, e.relativeRenderGroupDepth = e.parent === this.root ? 1 : e.parent.relativeRenderGroupDepth + 1, e.didChange = !0, this.onChildUpdate(e), e.renderGroup) {
        this.addRenderGroupChild(e.renderGroup);
        return;
    } e._onRender && this.addOnRender(e); var t = e.children; for (var e_9 = 0; e_9 < t.length; e_9++)
        this.addChild(t[e_9]); };
    F.prototype.removeChild = function (e) { if (this.structureDidChange = !0, e._onRender && (e.renderGroup || this.removeOnRender(e)), e.parentRenderGroup = null, e.renderGroup) {
        this._removeRenderGroupChild(e.renderGroup);
        return;
    } var t = e.children; for (var e_10 = 0; e_10 < t.length; e_10++)
        this.removeChild(t[e_10]); };
    F.prototype.removeChildren = function (e) { for (var t_15 = 0; t_15 < e.length; t_15++)
        this.removeChild(e[t_15]); };
    F.prototype.onChildUpdate = function (e) { var t = this.childrenToUpdate[e.relativeRenderGroupDepth]; t || (t = this.childrenToUpdate[e.relativeRenderGroupDepth] = { index: 0, list: [] }), t.list[t.index++] = e; };
    F.prototype.updateRenderable = function (e) { e.globalDisplayStatus < 7 || (this.instructionSet.renderPipes[e.renderPipeId].updateRenderable(e), e.didViewUpdate = !1); };
    F.prototype.onChildViewUpdate = function (e) { this.childrenRenderablesToUpdate.list[this.childrenRenderablesToUpdate.index++] = e; };
    Object.defineProperty(F.prototype, "isRenderable", {
        get: function () { return this.root.localDisplayStatus === 7 && this.worldAlpha > 0; },
        enumerable: false,
        configurable: true
    });
    F.prototype.addOnRender = function (e) { this._onRenderContainers.indexOf(e) === -1 && this._onRenderContainers.push(e); };
    F.prototype.removeOnRender = function (e) { var t = this._onRenderContainers.indexOf(e); t !== -1 && this._onRenderContainers.splice(t, 1); };
    F.prototype.runOnRender = function (e) { for (var t_16 = 0; t_16 < this._onRenderContainers.length; t_16++)
        this._onRenderContainers[t_16]._onRender(e); };
    F.prototype.destroy = function () { var e; this.disableCacheAsTexture(), this.renderGroupParent = null, this.root = null, this.childrenRenderablesToUpdate = null, this.childrenToUpdate = null, this.renderGroupChildren = null, this._onRenderContainers = null, (e = this.instructionSet) == null || e.destroy(), this.instructionSet = null; };
    F.prototype.getChildren = function (e) {
        if (e === void 0) { e = []; }
        var t = this.root.children;
        for (var n_13 = 0; n_13 < t.length; n_13++)
            this._getChildren(t[n_13], e);
        return e;
    };
    F.prototype._getChildren = function (e, t) {
        if (t === void 0) { t = []; }
        if (t.push(e), e.renderGroup)
            return t;
        var n = e.children;
        for (var e_11 = 0; e_11 < n.length; e_11++)
            this._getChildren(n[e_11], t);
        return t;
    };
    F.prototype.invalidateMatrices = function () { this._matrixDirty = 7; };
    Object.defineProperty(F.prototype, "inverseWorldTransform", {
        get: function () { return this._matrixDirty & 1 ? (this._matrixDirty &= -2, this._inverseWorldTransform || (this._inverseWorldTransform = new i.b), this._inverseWorldTransform.copyFrom(this.worldTransform).invert()) : this._inverseWorldTransform; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(F.prototype, "textureOffsetInverseTransform", {
        get: function () { return this._matrixDirty & 2 ? (this._matrixDirty &= -3, this._textureOffsetInverseTransform || (this._textureOffsetInverseTransform = new i.b), this._textureOffsetInverseTransform.copyFrom(this.inverseWorldTransform).translate(-this._textureBounds.x, -this._textureBounds.y)) : this._textureOffsetInverseTransform; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(F.prototype, "inverseParentTextureTransform", {
        get: function () { if (!(this._matrixDirty & 4))
            return this._inverseParentTextureTransform; this._matrixDirty &= -5; var e = this._parentCacheAsTextureRenderGroup; return e ? (this._inverseParentTextureTransform || (this._inverseParentTextureTransform = new i.b), this._inverseParentTextureTransform.copyFrom(this.worldTransform).prepend(e.inverseWorldTransform).translate(-e._textureBounds.x, -e._textureBounds.y)) : this.worldTransform; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(F.prototype, "cacheToLocalTransform", {
        get: function () { return this.isCachedAsTexture ? this.textureOffsetInverseTransform : this._parentCacheAsTextureRenderGroup ? this._parentCacheAsTextureRenderGroup.textureOffsetInverseTransform : null; },
        enumerable: false,
        configurable: true
    });
    return F;
}()); })))(); }
function Ce(e, t, n) {
    if (n === void 0) { n = {}; }
    for (var r_5 in t)
        !n[r_5] && t[r_5] !== void 0 && (e[r_5] = t[r_5]);
}
function we() { return (we = e.n((function () { })))(); }
var L, R, z, B, V;
function H() { return (H = e.n((function () { n.i(), r.B(), r.R(), r.q(), i.x(), i.E(), i.O(), a.Y(), a.W(), a.L(), a.P(), ee(), ne(), ie(), oe(), ce(), de(), E(), A(), M(), P(), Se(), I(), L = new i.D(null), R = new i.D(null), z = new i.D(null, 1, 1), B = new i.D(null), V = (function (_super) {
    __extends(e, _super);
    function e(e) {
        if (e === void 0) { e = {}; }
        var _this = this;
        var t, n;
        _this = _super.call(this) || this, _this.uid = a.X("renderable"), _this._updateFlags = 15, _this.renderGroup = null, _this.parentRenderGroup = null, _this.parentRenderGroupIndex = 0, _this.didChange = !1, _this.didViewUpdate = !1, _this.relativeRenderGroupDepth = 0, _this.children = [], _this.parent = null, _this.includeInBuild = !0, _this.measurable = !0, _this.isSimple = !0, _this.parentRenderLayer = null, _this.updateTick = -1, _this.localTransform = new i.b, _this.relativeGroupTransform = new i.b, _this.groupTransform = _this.relativeGroupTransform, _this.destroyed = !1, _this._position = new i.D(_this, 0, 0), _this._scale = z, _this._pivot = R, _this._origin = B, _this._skew = L, _this._cx = 1, _this._sx = 0, _this._cy = 0, _this._sy = 1, _this._rotation = 0, _this.localColor = 16777215, _this.localAlpha = 1, _this.groupAlpha = 1, _this.groupColor = 16777215, _this.groupColorAlpha = 4294967295, _this.localBlendMode = "inherit", _this.groupBlendMode = "normal", _this.localDisplayStatus = 7, _this.globalDisplayStatus = 7, _this._didContainerChangeTick = 0, _this._didViewChangeTick = 0, _this._didLocalTransformChangeId = -1, _this.effects = [], Ce(_this, e, { children: !0, parent: !0, effects: !0 }), (t = e.children) == null || t.forEach(function (e) { return _this.addChild(e); }), (n = e.parent) == null || n.addChild(_this);
        return _this;
    }
    e.mixin = function (t) { a.U("8.8.0", "Container.mixin is deprecated, please use extensions.mixin instead."), r.K.mixin(e, t); };
    Object.defineProperty(e.prototype, "_didChangeId", {
        get: function () { return this._didContainerChangeTick & 4095 | (this._didViewChangeTick & 4095) << 12; },
        set: function (e) { this._didViewChangeTick = e >> 12 & 4095, this._didContainerChangeTick = e & 4095; },
        enumerable: false,
        configurable: true
    });
    e.prototype.addChild = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        if (this.allowChildren || a.U(a.G, "addChild: Only Containers will be allowed to add children in v8.0.0"), e.length > 1) {
            for (var t_17 = 0; t_17 < e.length; t_17++)
                this.addChild(e[t_17]);
            return e[0];
        }
        var t = e[0], n = this.renderGroup || this.parentRenderGroup;
        return t.parent === this ? (this.children.splice(this.children.indexOf(t), 1), this.children.push(t), n && (n.structureDidChange = !0), t) : (t.parent && t.parent.removeChild(t), this.children.push(t), this.sortableChildren && (this.sortDirty = !0), t.parent = this, t.didChange = !0, t._updateFlags = 15, n && n.addChild(t), this.emit("childAdded", t, this, this.children.length - 1), t.emit("added", this), this._didViewChangeTick++, t._zIndex !== 0 && t.depthOfChildModified(), t);
    };
    e.prototype.removeChild = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        if (e.length > 1) {
            for (var t_18 = 0; t_18 < e.length; t_18++)
                this.removeChild(e[t_18]);
            return e[0];
        }
        var t = e[0], n = this.children.indexOf(t);
        return n > -1 && (this._didViewChangeTick++, this.children.splice(n, 1), this.renderGroup ? this.renderGroup.removeChild(t) : this.parentRenderGroup && this.parentRenderGroup.removeChild(t), t.parentRenderLayer && t.parentRenderLayer.detach(t), t.parent = null, this.emit("childRemoved", t, this, n), t.emit("removed", this)), t;
    };
    e.prototype._onUpdate = function (e) { e && e === this._skew && this._updateSkew(), this._didContainerChangeTick++, this.didChange || (this.didChange = !0, this.parentRenderGroup && this.parentRenderGroup.onChildUpdate(this)); };
    Object.defineProperty(e.prototype, "isRenderGroup", {
        get: function () { return !!this.renderGroup; },
        set: function (e) { !!this.renderGroup !== e && (e ? this.enableRenderGroup() : this.disableRenderGroup()); },
        enumerable: false,
        configurable: true
    });
    e.prototype.enableRenderGroup = function () { if (this.renderGroup)
        return; var e = this.parentRenderGroup; e == null || e.removeChild(this), this.renderGroup = a.N.get(F, this), this.groupTransform = i.b.IDENTITY, e == null || e.addChild(this), this._updateIsSimple(); };
    e.prototype.disableRenderGroup = function () { if (!this.renderGroup)
        return; var e = this.parentRenderGroup; e == null || e.removeChild(this), a.N.return(this.renderGroup), this.renderGroup = null, this.groupTransform = this.relativeGroupTransform, e == null || e.addChild(this), this._updateIsSimple(); };
    e.prototype._updateIsSimple = function () { this.isSimple = !this.renderGroup && this.effects.length === 0; };
    Object.defineProperty(e.prototype, "worldTransform", {
        get: function () { return this._worldTransform || (this._worldTransform = new i.b), this.renderGroup ? this._worldTransform.copyFrom(this.renderGroup.worldTransform) : this.parentRenderGroup && this._worldTransform.appendFrom(this.relativeGroupTransform, this.parentRenderGroup.worldTransform), this._worldTransform; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "x", {
        get: function () { return this._position.x; },
        set: function (e) { this._position.x = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "y", {
        get: function () { return this._position.y; },
        set: function (e) { this._position.y = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "position", {
        get: function () { return this._position; },
        set: function (e) { this._position.copyFrom(e); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "rotation", {
        get: function () { return this._rotation; },
        set: function (e) { this._rotation !== e && (this._rotation = e, this._onUpdate(this._skew)); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "angle", {
        get: function () { return this.rotation * i.T; },
        set: function (e) { this.rotation = e * i.w; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "pivot", {
        get: function () { return this._pivot === R && (this._pivot = new i.D(this, 0, 0)), this._pivot; },
        set: function (e) { this._pivot === R && (this._pivot = new i.D(this, 0, 0), this._origin !== B && a.R("Setting both a pivot and origin on a Container is not recommended. This can lead to unexpected behavior if not handled carefully.")), typeof e == "number" ? this._pivot.set(e) : this._pivot.copyFrom(e); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "skew", {
        get: function () { return this._skew === L && (this._skew = new i.D(this, 0, 0)), this._skew; },
        set: function (e) { this._skew === L && (this._skew = new i.D(this, 0, 0)), this._skew.copyFrom(e); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "scale", {
        get: function () { return this._scale === z && (this._scale = new i.D(this, 1, 1)), this._scale; },
        set: function (e) { this._scale === z && (this._scale = new i.D(this, 0, 0)), typeof e == "string" && (e = parseFloat(e)), typeof e == "number" ? this._scale.set(e) : this._scale.copyFrom(e); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "origin", {
        get: function () { return this._origin === B && (this._origin = new i.D(this, 0, 0)), this._origin; },
        set: function (e) { this._origin === B && (this._origin = new i.D(this, 0, 0), this._pivot !== R && a.R("Setting both a pivot and origin on a Container is not recommended. This can lead to unexpected behavior if not handled carefully.")), typeof e == "number" ? this._origin.set(e) : this._origin.copyFrom(e); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "width", {
        get: function () { return Math.abs(this.scale.x * this.getLocalBounds().width); },
        set: function (e) { var t = this.getLocalBounds().width; this._setWidth(e, t); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "height", {
        get: function () { return Math.abs(this.scale.y * this.getLocalBounds().height); },
        set: function (e) { var t = this.getLocalBounds().height; this._setHeight(e, t); },
        enumerable: false,
        configurable: true
    });
    e.prototype.getSize = function (e) { e || (e = {}); var t = this.getLocalBounds(); return e.width = Math.abs(this.scale.x * t.width), e.height = Math.abs(this.scale.y * t.height), e; };
    e.prototype.setSize = function (e, t) { var n = this.getLocalBounds(); if (typeof e == "object") {
        var r;
        t = (r = e.height) == null ? e.width : r, e = e.width;
    }
    else
        t != null || (t = e); e !== void 0 && this._setWidth(e, n.width), t !== void 0 && this._setHeight(t, n.height); };
    e.prototype._updateSkew = function () { var e = this._rotation, t = this._skew; this._cx = Math.cos(e + t._y), this._sx = Math.sin(e + t._y), this._cy = -Math.sin(e - t._x), this._sy = Math.cos(e - t._x); };
    e.prototype.updateTransform = function (e) { return this.position.set(typeof e.x == "number" ? e.x : this.position.x, typeof e.y == "number" ? e.y : this.position.y), this.scale.set(typeof e.scaleX == "number" ? e.scaleX : this.scale.x, typeof e.scaleY == "number" ? e.scaleY : this.scale.y), this.rotation = typeof e.rotation == "number" ? e.rotation : this.rotation, this.skew.set(typeof e.skewX == "number" ? e.skewX : this.skew.x, typeof e.skewY == "number" ? e.skewY : this.skew.y), this.pivot.set(typeof e.pivotX == "number" ? e.pivotX : this.pivot.x, typeof e.pivotY == "number" ? e.pivotY : this.pivot.y), this.origin.set(typeof e.originX == "number" ? e.originX : this.origin.x, typeof e.originY == "number" ? e.originY : this.origin.y), this; };
    e.prototype.setFromMatrix = function (e) { e.decompose(this); };
    e.prototype.updateLocalTransform = function () { var e = this._didContainerChangeTick; if (this._didLocalTransformChangeId === e)
        return; this._didLocalTransformChangeId = e; var t = this.localTransform, n = this._scale, r = this._pivot, i = this._origin, a = this._position, o = n._x, s = n._y, c = r._x, l = r._y, u = -i._x, d = -i._y; t.a = this._cx * o, t.b = this._sx * o, t.c = this._cy * s, t.d = this._sy * s, t.tx = a._x - (c * t.a + l * t.c) + (u * t.a + d * t.c) - u, t.ty = a._y - (c * t.b + l * t.d) + (u * t.b + d * t.d) - d; };
    Object.defineProperty(e.prototype, "alpha", {
        get: function () { return this.localAlpha; },
        set: function (e) { e !== this.localAlpha && (this.localAlpha = e, this._updateFlags |= 1, this._onUpdate()); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "tint", {
        get: function () { return T(this.localColor); },
        set: function (e) { var t = r.z.shared.setValue(e == null ? 16777215 : e).toBgrNumber(); t !== this.localColor && (this.localColor = t, this._updateFlags |= 1, this._onUpdate()); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "blendMode", {
        get: function () { return this.localBlendMode; },
        set: function (e) { this.localBlendMode !== e && (this.parentRenderGroup && (this.parentRenderGroup.structureDidChange = !0), this._updateFlags |= 2, this.localBlendMode = e, this._onUpdate()); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "visible", {
        get: function () { return !!(this.localDisplayStatus & 2); },
        set: function (e) { var t = e ? 2 : 0; (this.localDisplayStatus & 2) !== t && (this.parentRenderGroup && (this.parentRenderGroup.structureDidChange = !0), this._updateFlags |= 4, this.localDisplayStatus ^= 2, this._onUpdate(), this.emit("visibleChanged", e)); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "culled", {
        get: function () { return !(this.localDisplayStatus & 4); },
        set: function (e) { var t = e ? 0 : 4; (this.localDisplayStatus & 4) !== t && (this.parentRenderGroup && (this.parentRenderGroup.structureDidChange = !0), this._updateFlags |= 4, this.localDisplayStatus ^= 4, this._onUpdate()); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "renderable", {
        get: function () { return !!(this.localDisplayStatus & 1); },
        set: function (e) { var t = +!!e; (this.localDisplayStatus & 1) !== t && (this._updateFlags |= 4, this.localDisplayStatus ^= 1, this.parentRenderGroup && (this.parentRenderGroup.structureDidChange = !0), this._onUpdate()); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(e.prototype, "isRenderable", {
        get: function () { return this.localDisplayStatus === 7 && this.groupAlpha > 0; },
        enumerable: false,
        configurable: true
    });
    e.prototype.destroy = function (e) {
        if (e === void 0) { e = !1; }
        var t;
        if (this.destroyed)
            return;
        this.destroyed = !0;
        var n;
        if (this.children.length && (n = this.removeChildren(0, this.children.length)), this.removeFromParent(), this.parent = null, this._maskEffect = null, this._filterEffect = null, this.effects = null, this._position = null, this._scale = null, this._pivot = null, this._origin = null, this._skew = null, this.emit("destroyed", this), this.removeAllListeners(), (typeof e == "boolean" ? e : e != null && e.children) && n)
            for (var t_19 = 0; t_19 < n.length; ++t_19)
                n[t_19].destroy(e);
        (t = this.renderGroup) == null || t.destroy(), this.renderGroup = null;
    };
    return e;
}(n.r)), r.K.mixin(V, te, ue, xe, j, k, ae, se, N, r.L, g, ge, re); })))(); }
function Te(e, t) { t.clear(); var n = t.matrix; for (var n_14 = 0; n_14 < e.length; n_14++) {
    var r;
    var i_4 = e[n_14];
    if (i_4.globalDisplayStatus < 7)
        continue;
    var a_3 = (r = i_4.renderGroup) == null ? i_4.parentRenderGroup : r;
    t.matrix = a_3 != null && a_3.isCachedAsTexture ? U.copyFrom(a_3.textureOffsetInverseTransform).append(i_4.worldTransform) : a_3 != null && a_3._parentCacheAsTextureRenderGroup ? U.copyFrom(a_3._parentCacheAsTextureRenderGroup.inverseWorldTransform).append(i_4.groupTransform) : i_4.worldTransform, t.addBounds(i_4.bounds);
} return t.matrix = n, t; }
var U;
function Ee() { return (Ee = e.n((function () { i.x(), U = new i.b; })))(); }
var De, Oe, W, ke;
function Ae() { return (Ae = e.n((function () { r.q(), o.ht(), a.f(), De = (function () {
    function De() {
        this.isBatchable = !1;
    }
    De.prototype.reset = function () { this.isBatchable = !1, this.context = null, this.graphicsData && (this.graphicsData.destroy(), this.graphicsData = null); };
    De.prototype.destroy = function () { this.reset(); };
    return De;
}()), Oe = (function () {
    function Oe() {
        this.instructions = new o.mt;
    }
    Oe.prototype.init = function () { this.instructions.reset(); };
    Oe.prototype.destroy = function () { this.instructions.destroy(), this.instructions = null; };
    return Oe;
}()), W = (function () {
    function e(e) {
        this._renderer = e, this._managedContexts = new a.d({ renderer: e, type: "resource", name: "graphicsContext" });
    }
    e.prototype.init = function (t) { var n; e.defaultOptions.bezierSmoothness = (n = t == null ? void 0 : t.bezierSmoothness) == null ? e.defaultOptions.bezierSmoothness : n; };
    e.prototype.getContextRenderData = function (e) { return this.getGpuContext(e).graphicsData || this._initContextRenderData(e); };
    e.prototype.updateGpuContext = function (e) { var t = e._gpuData, n = !!t[this._renderer.uid], r = t[this._renderer.uid] || this._initContext(e); return (e.dirty || !n) && (n && r.reset(), r.isBatchable = !1, e.dirty = !1), r; };
    e.prototype.getGpuContext = function (e) { return e._gpuData[this._renderer.uid] || this._initContext(e); };
    e.prototype._initContextRenderData = function (e) { var t = new Oe, n = this.getGpuContext(e); return n.graphicsData = t, t.init(), t; };
    e.prototype._initContext = function (e) { var t = new De; return t.context = e, e._gpuData[this._renderer.uid] = t, this._managedContexts.add(e), t; };
    e.prototype.destroy = function () { this._managedContexts.destroy(), this._renderer = null; };
    return e;
}()), W.extension = { type: [r.G.CanvasSystem], name: "graphicsContext" }, W.defaultOptions = { bezierSmoothness: .5 }, ke = W; })))(); }
var G;
function je() { return (je = e.n((function () { r.q(), o.K(), a.f(), G = (function () {
    function G(e, t) {
        this.state = o.G.for2d(), this.renderer = e, this._adaptor = t, this.renderer.runners.contextChange.add(this), this._managedGraphics = new a.d({ renderer: e, type: "renderable", priority: -1, name: "graphics" });
    }
    G.prototype.contextChange = function () { this._adaptor.contextChange(this.renderer); };
    G.prototype.validateRenderable = function (e) { return !1; };
    G.prototype.addRenderable = function (e, t) { this._managedGraphics.add(e), this.renderer.renderPipes.batch.break(t), t.add(e); };
    G.prototype.updateRenderable = function (e) { };
    G.prototype.execute = function (e) { e.isRenderable && this._adaptor.execute(this, e); };
    G.prototype.destroy = function () { this._managedGraphics.destroy(), this.renderer = null, this._adaptor.destroy(), this._adaptor = null; };
    return G;
}()), G.extension = { type: [r.G.CanvasPipes], name: "graphics" }; })))(); }
function Me(e, t, n) { var r = (e >> 24 & 255) / 255; t[n++] = (e & 255) / 255 * r, t[n++] = (e >> 8 & 255) / 255 * r, t[n++] = (e >> 16 & 255) / 255 * r, t[n++] = r; }
function Ne() { return (Ne = e.n((function () { })))(); }
function Pe() { return (Pe = e.n((function () { r.q(), Ae(), je(), u.p(), u.i(), r.K.add(G), r.K.add(u.r), r.K.add(ke), r.K.add(u.f); })))(); }
var K;
function Fe() { return (Fe = e.n((function () { r.q(), K = (function () {
    function K(e) {
        this._renderer = e;
    }
    K.prototype.updateRenderable = function () { };
    K.prototype.destroyRenderable = function () { };
    K.prototype.validateRenderable = function () { return !1; };
    K.prototype.addRenderable = function (e, t) { this._renderer.renderPipes.batch.break(t), t.add(e); };
    K.prototype.execute = function (e) { e.isRenderable && e.render(this._renderer); };
    K.prototype.destroy = function () { this._renderer = null; };
    return K;
}()), K.extension = { type: [r.G.WebGLPipes, r.G.WebGPUPipes, r.G.CanvasPipes], name: "customRender" }; })))(); }
function q(e, t) { var n = e.instructionSet, r = n.instructions; for (var e_12 = 0; e_12 < n.instructionSize; e_12++) {
    var n_15 = r[e_12];
    t[n_15.renderPipeId].execute(n_15);
} }
var J;
function Ie() { return (Ie = e.n((function () { r.q(), i.x(), a.P(), c.v(), J = (function () {
    function J(e) {
        this._renderer = e;
    }
    J.prototype.addRenderGroup = function (e, t) { e.isCachedAsTexture ? this._addRenderableCacheAsTexture(e, t) : this._addRenderableDirect(e, t); };
    J.prototype.execute = function (e) { e.isRenderable && (e.isCachedAsTexture ? this._executeCacheAsTexture(e) : this._executeDirect(e)); };
    J.prototype.destroy = function () { this._renderer = null; };
    J.prototype._addRenderableDirect = function (e, t) { this._renderer.renderPipes.batch.break(t), e._batchableRenderGroup && (a.N.return(e._batchableRenderGroup), e._batchableRenderGroup = null), t.add(e); };
    J.prototype._addRenderableCacheAsTexture = function (e, t) { var n; var r = (n = e._batchableRenderGroup) == null ? e._batchableRenderGroup = a.N.get(c._) : n; r.renderable = e.root, r.transform = e.root.relativeGroupTransform, r.texture = e.texture, r.bounds = e._textureBounds, t.add(e), this._renderer.renderPipes.blendMode.pushBlendMode(e, e.root.groupBlendMode, t), this._renderer.renderPipes.batch.addToBatch(r, t), this._renderer.renderPipes.blendMode.popBlendMode(t); };
    J.prototype._executeCacheAsTexture = function (e) { if (e.textureNeedsUpdate) {
        e.textureNeedsUpdate = !1;
        var t_20 = new i.b().translate(-e._textureBounds.x, -e._textureBounds.y);
        this._renderer.renderTarget.push({ target: e.texture, clear: !0, frame: e.texture.frame }), this._renderer.globalUniforms.push({ worldTransformMatrix: t_20, worldColor: 4294967295, offset: { x: 0, y: 0 } }), q(e, this._renderer.renderPipes), this._renderer.renderTarget.finishRenderPass(), this._renderer.renderTarget.pop(), this._renderer.globalUniforms.pop();
    } e._batchableRenderGroup._batcher.updateElement(e._batchableRenderGroup), e._batchableRenderGroup._batcher.geometry.buffers[0].update(); };
    J.prototype._executeDirect = function (e) { this._renderer.globalUniforms.push({ worldTransformMatrix: e.inverseParentTextureTransform, worldColor: e.worldColorAlpha }), q(e, this._renderer.renderPipes), this._renderer.globalUniforms.pop(); };
    return J;
}()), J.extension = { type: [r.G.WebGLPipes, r.G.WebGPUPipes, r.G.CanvasPipes], name: "renderGroup" }; })))(); }
function Y(e, t) { t || (t = 0); for (var n_16 = t; n_16 < e.length && e[n_16]; n_16++)
    e[n_16] = null; }
function Le(e, t) {
    if (t === void 0) { t = !1; }
    Re(e);
    var n = e.childrenToUpdate, r = e.updateTick++;
    for (var t_21 in n) {
        var i_5 = Number(t_21), a_4 = n[t_21], o_2 = a_4.list, s_1 = a_4.index;
        for (var t_22 = 0; t_22 < s_1; t_22++) {
            var n_17 = o_2[t_22];
            n_17.parentRenderGroup === e && n_17.relativeRenderGroupDepth === i_5 && ze(n_17, r, 0);
        }
        Y(o_2, s_1), a_4.index = 0;
    }
    if (t)
        for (var n_18 = 0; n_18 < e.renderGroupChildren.length; n_18++)
            Le(e.renderGroupChildren[n_18], t);
}
function Re(e) { var t = e.root, n; if (e.renderGroupParent) {
    var r_6 = e.renderGroupParent;
    e.worldTransform.appendFrom(t.relativeGroupTransform, r_6.worldTransform), e.worldColor = S(t.groupColor, r_6.worldColor), n = t.groupAlpha * r_6.worldAlpha;
}
else
    e.worldTransform.copyFrom(t.localTransform), e.worldColor = t.localColor, n = t.localAlpha; n = n < 0 ? 0 : n > 1 ? 1 : n, e.worldAlpha = n, e.worldColorAlpha = e.worldColor + ((n * 255 | 0) << 24); }
function ze(e, t, n) { if (t === e.updateTick)
    return; e.updateTick = t, e.didChange = !1; var r = e.localTransform; e.updateLocalTransform(); var i = e.parent; if (i && !i.renderGroup ? (n |= e._updateFlags, e.relativeGroupTransform.appendFrom(r, i.relativeGroupTransform), n & Z && Be(e, i, n)) : (n = e._updateFlags, e.relativeGroupTransform.copyFrom(r), n & Z && Be(e, X, n)), !e.renderGroup) {
    var r_7 = e.children, i_6 = r_7.length;
    for (var e_13 = 0; e_13 < i_6; e_13++)
        ze(r_7[e_13], t, n);
    var a_5 = e.parentRenderGroup, o_3 = e;
    o_3.renderPipeId && !a_5.structureDidChange && a_5.updateRenderable(o_3);
} }
function Be(e, t, n) { if (n & 1) {
    e.groupColor = S(e.localColor, t.groupColor);
    var n_19 = e.localAlpha * t.groupAlpha;
    n_19 = n_19 < 0 ? 0 : n_19 > 1 ? 1 : n_19, e.groupAlpha = n_19, e.groupColorAlpha = e.groupColor + ((n_19 * 255 | 0) << 24);
} n & 2 && (e.groupBlendMode = e.localBlendMode === "inherit" ? t.groupBlendMode : e.localBlendMode), n & 4 && (e.globalDisplayStatus = e.localDisplayStatus & t.globalDisplayStatus), e._updateFlags = 0; }
var X, Z;
function Ve() { return (Ve = e.n((function () { H(), w(), X = new V, Z = 7; })))(); }
function He(e, t) { var n = e.childrenRenderablesToUpdate.list, r = !1; for (var i_7 = 0; i_7 < e.childrenRenderablesToUpdate.index; i_7++) {
    var e_14 = n[i_7];
    if (r = t[e_14.renderPipeId].validateRenderable(e_14), r)
        break;
} return e.structureDidChange = r, r; }
var Ue, Q;
function We() { return (We = e.n((function () { r.q(), i.x(), o.pt(), h(), Ve(), Ue = new i.b, Q = (function () {
    function Q(e) {
        this._renderer = e;
    }
    Q.prototype.render = function (_a) {
        var e = _a.container, t = _a.transform;
        var n = e.parent, r = e.renderGroup.renderGroupParent;
        e.parent = null, e.renderGroup.renderGroupParent = null;
        var i = this._renderer, a = Ue;
        t && (a.copyFrom(e.renderGroup.localTransform), e.renderGroup.localTransform.copyFrom(t));
        var o = i.renderPipes;
        this._updateCachedRenderGroups(e.renderGroup, null), this._updateRenderGroups(e.renderGroup), i.globalUniforms.start({ worldTransformMatrix: t ? e.renderGroup.localTransform : e.renderGroup.worldTransform, worldColor: e.renderGroup.worldColorAlpha }), q(e.renderGroup, o), o.uniformBatch && o.uniformBatch.renderEnd(), t && e.renderGroup.localTransform.copyFrom(a), e.parent = n, e.renderGroup.renderGroupParent = r;
    };
    Q.prototype.destroy = function () { this._renderer = null; };
    Q.prototype._updateCachedRenderGroups = function (e, t) { if (e._parentCacheAsTextureRenderGroup = t, e.isCachedAsTexture) {
        if (!e.textureNeedsUpdate)
            return;
        t = e;
    } for (var n_20 = e.renderGroupChildren.length - 1; n_20 >= 0; n_20--)
        this._updateCachedRenderGroups(e.renderGroupChildren[n_20], t); if (e.invalidateMatrices(), e.isCachedAsTexture) {
        if (e.textureNeedsUpdate) {
            var n, r;
            var t_23 = e.root.getLocalBounds(), i_8 = this._renderer, a_6 = e.textureOptions.resolution || i_8.view.resolution, s_2 = (n = e.textureOptions.antialias) == null ? i_8.view.antialias : n, c_1 = (r = e.textureOptions.scaleMode) == null ? "linear" : r, l_1 = e.texture;
            t_23.ceil(), e.texture && o.ft.returnTexture(e.texture), e.texture = o.ft.getOptimalTexture({ width: t_23.width, height: t_23.height, resolution: a_6, antialias: s_2, scaleMode: c_1 }), e._textureBounds || (e._textureBounds = new m), e._textureBounds.copyFrom(t_23), l_1 !== e.texture && e.renderGroupParent && (e.renderGroupParent.structureDidChange = !0);
        }
    }
    else
        e.texture && (o.ft.returnTexture(e.texture), e.texture = null); };
    Q.prototype._updateRenderGroups = function (e) { var t = this._renderer, n = t.renderPipes; if (e.runOnRender(t), e.instructionSet.renderPipes = n, e.structureDidChange ? Y(e.childrenRenderablesToUpdate.list, 0) : He(e, n), Le(e), e.structureDidChange ? (e.structureDidChange = !1, this._buildInstructions(e, t)) : this._updateRenderables(e), e.childrenRenderablesToUpdate.index = 0, t.renderPipes.batch.upload(e.instructionSet), !e.isCachedAsTexture || e.textureNeedsUpdate)
        for (var t_24 = 0; t_24 < e.renderGroupChildren.length; t_24++)
            this._updateRenderGroups(e.renderGroupChildren[t_24]); };
    Q.prototype._updateRenderables = function (e) { var _a = e.childrenRenderablesToUpdate, t = _a.list, n = _a.index; for (var r_8 = 0; r_8 < n; r_8++) {
        var n_21 = t[r_8];
        n_21.didViewUpdate && e.updateRenderable(n_21);
    } Y(t, n); };
    Q.prototype._buildInstructions = function (e, t) { var n = e.root, r = e.instructionSet; r.reset(); var i = t.renderPipes ? t : t.batch.renderer, a = i.renderPipes; a.batch.buildStart(r), a.blendMode.buildStart(), a.colorMask.buildStart(), n.sortableChildren && n.sortChildren(), n.collectRenderablesWithEffects(r, i, null), a.batch.buildEnd(r), a.blendMode.buildEnd(r); };
    return Q;
}()), Q.extension = { type: [r.G.WebGLSystem, r.G.WebGPUSystem, r.G.CanvasSystem], name: "renderGroup" }; })))(); }
var $;
function Ge() { return (Ge = e.n((function () { r.q(), i.x(), l.v(), l.g(), l.m(), l.s(), l.d(), s.E(), o.J(), o.Q(), $ = (function () {
    function $() {
    }
    $.prototype.contextChange = function (e) { var t = new o.Z({ uColor: { value: new Float32Array([1, 1, 1, 1]), type: "vec4<f32>" }, uTransformMatrix: { value: new i.b, type: "mat3x3<f32>" }, uRound: { value: 0, type: "f32" } }), n = e.limits.maxBatchableTextures, r = l._({ name: "graphics", bits: [l.h, l.p(n), l.c, l.f] }); this.shader = new o.q({ glProgram: r, resources: { localUniforms: t, batchSamplers: s.T(n) } }); };
    $.prototype.execute = function (e, t) { var n = t.context, r = n.customShader || this.shader, i = e.renderer, _a = i.graphicsContext.getContextRenderData(n), a = _a.batcher, o = _a.instructions; r.groups[0] = i.globalUniforms.bindGroup, i.state.set(e.state), i.shader.bind(r), i.geometry.bind(a.geometry, r.glProgram); var s = o.instructions; for (var e_15 = 0; e_15 < o.instructionSize; e_15++) {
        var t_25 = s[e_15];
        if (t_25.size) {
            for (var e_16 = 0; e_16 < t_25.textures.count; e_16++)
                i.texture.bind(t_25.textures.textures[e_16], e_16);
            i.texture.unbindIntegerTextures(t_25.textures.count), i.geometry.draw(t_25.topology, t_25.size, t_25.start);
        }
    } };
    $.prototype.destroy = function () { this.shader.destroy(!0), this.shader = null; };
    return $;
}()), $.extension = { type: [r.G.WebGLPipesAdaptor], name: "graphics" }; })))(); }
Object.defineProperty(exports, "A", { enumerable: !0, get: function () { return _; } }), Object.defineProperty(exports, "C", { enumerable: !0, get: function () { return E; } }), Object.defineProperty(exports, "D", { enumerable: !0, get: function () { return x; } }), Object.defineProperty(exports, "E", { enumerable: !0, get: function () { return fe; } }), Object.defineProperty(exports, "M", { enumerable: !0, get: function () { return h; } }), Object.defineProperty(exports, "N", { enumerable: !0, get: function () { return d; } }), Object.defineProperty(exports, "O", { enumerable: !0, get: function () { return v; } }), Object.defineProperty(exports, "P", { enumerable: !0, get: function () { return f; } }), Object.defineProperty(exports, "S", { enumerable: !0, get: function () { return T; } }), Object.defineProperty(exports, "T", { enumerable: !0, get: function () { return me; } }), Object.defineProperty(exports, "_", { enumerable: !0, get: function () { return we; } }), Object.defineProperty(exports, "a", { enumerable: !0, get: function () { return J; } }), Object.defineProperty(exports, "b", { enumerable: !0, get: function () { return _e; } }), Object.defineProperty(exports, "c", { enumerable: !0, get: function () { return Fe; } }), Object.defineProperty(exports, "d", { enumerable: !0, get: function () { return Ne; } }), Object.defineProperty(exports, "f", { enumerable: !0, get: function () { return Te; } }), Object.defineProperty(exports, "g", { enumerable: !0, get: function () { return Ce; } }), Object.defineProperty(exports, "h", { enumerable: !0, get: function () { return H; } }), Object.defineProperty(exports, "i", { enumerable: !0, get: function () { return We; } }), Object.defineProperty(exports, "j", { enumerable: !0, get: function () { return m; } }), Object.defineProperty(exports, "k", { enumerable: !0, get: function () { return y; } }), Object.defineProperty(exports, "l", { enumerable: !0, get: function () { return Pe; } }), Object.defineProperty(exports, "m", { enumerable: !0, get: function () { return V; } }), Object.defineProperty(exports, "n", { enumerable: !0, get: function () { return Ge; } }), Object.defineProperty(exports, "o", { enumerable: !0, get: function () { return Ie; } }), Object.defineProperty(exports, "p", { enumerable: !0, get: function () { return Ee; } }), Object.defineProperty(exports, "r", { enumerable: !0, get: function () { return Q; } }), Object.defineProperty(exports, "s", { enumerable: !0, get: function () { return K; } }), Object.defineProperty(exports, "t", { enumerable: !0, get: function () { return $; } }), Object.defineProperty(exports, "u", { enumerable: !0, get: function () { return Me; } }), Object.defineProperty(exports, "v", { enumerable: !0, get: function () { return F; } }), Object.defineProperty(exports, "w", { enumerable: !0, get: function () { return he; } }), Object.defineProperty(exports, "x", { enumerable: !0, get: function () { return D; } }), Object.defineProperty(exports, "y", { enumerable: !0, get: function () { return I; } });
