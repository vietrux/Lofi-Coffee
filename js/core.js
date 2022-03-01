/*! For license information please see 2.8ace6be4.chunk.js.LICENSE.txt */
(this["webpackJsonplofi-app"] = this["webpackJsonplofi-app"] || []).push([[2], [function(e, t, n) {
    "use strict";
    e.exports = n(41)
}
, function(e, t, n) {
    "use strict";
    e.exports = n(40)
}
, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return o
    }
    )),
    n.d(t, "a", (function() {
        return a
    }
    )),
    n.d(t, "d", (function() {
        return i
    }
    )),
    n.d(t, "c", (function() {
        return u
    }
    )),
    n.d(t, "e", (function() {
        return l
    }
    ));
    var r = function(e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        )(e, t)
    };
    function o(e, t) {
        if ("function" !== typeof t && null !== t)
            throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
        function n() {
            this.constructor = e
        }
        r(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    var a = function() {
        return (a = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    };
    function i(e, t) {
        var n = {};
        for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
        }
        return n
    }
    Object.create;
    function u(e, t) {
        var n = "function" === typeof Symbol && e[Symbol.iterator];
        if (!n)
            return e;
        var r, o, a = n.call(e), i = [];
        try {
            for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; )
                i.push(r.value)
        } catch (u) {
            o = {
                error: u
            }
        } finally {
            try {
                r && !r.done && (n = a.return) && n.call(a)
            } finally {
                if (o)
                    throw o.error
            }
        }
        return i
    }
    function l(e, t) {
        for (var n = 0, r = t.length, o = e.length; n < r; n++,
        o++)
            e[o] = t[n];
        return e
    }
    Object.create
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return i
    }
    ));
    var r = n(22);
    var o = n(15)
      , a = n(23);
    function i(e, t) {
        return Object(r.a)(e) || function(e, t) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) {
                var n = []
                  , r = !0
                  , o = !1
                  , a = void 0;
                try {
                    for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value),
                    !t || n.length !== t); r = !0)
                        ;
                } catch (l) {
                    o = !0,
                    a = l
                } finally {
                    try {
                        r || null == u.return || u.return()
                    } finally {
                        if (o)
                            throw a
                    }
                }
                return n
            }
        }(e, t) || Object(o.a)(e, t) || Object(a.a)()
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return Ya
    }
    )),
    n.d(t, "b", (function() {
        return Xa
    }
    )),
    n.d(t, "c", (function() {
        return Qa
    }
    )),
    n.d(t, "d", (function() {
        return Ga
    }
    )),
    n.d(t, "e", (function() {
        return Ja
    }
    )),
    n.d(t, "f", (function() {
        return Za
    }
    )),
    n.d(t, "g", (function() {
        return ei
    }
    ));
    var r = n(21)
      , o = n(17)
      , a = n(22);
    function i(e) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e))
            return Array.from(e)
    }
    var u = n(15)
      , l = n(23);
    function c(e) {
        return Object(a.a)(e) || i(e) || Object(u.a)(e) || Object(l.a)()
    }
    var s = n(20);
    function f(e) {
        return function(e) {
            if (Array.isArray(e))
                return Object(s.a)(e)
        }(e) || i(e) || Object(u.a)(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function p(e) {
        if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    var d = n(24);
    function y(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    function v(e, t, n) {
        return t && y(e.prototype, t),
        n && y(e, n),
        e
    }
    var h = n(3)
      , m = n(5);
    function g(e) {
        return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        )(e)
    }
    function b(e, t) {
        return (b = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t,
            e
        }
        )(e, t)
    }
    function w() {
        if ("undefined" === typeof Reflect || !Reflect.construct)
            return !1;
        if (Reflect.construct.sham)
            return !1;
        if ("function" === typeof Proxy)
            return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
            ))),
            !0
        } catch (e) {
            return !1
        }
    }
    function O(e, t, n) {
        return (O = w() ? Reflect.construct : function(e, t, n) {
            var r = [null];
            r.push.apply(r, t);
            var o = new (Function.bind.apply(e, r));
            return n && b(o, n.prototype),
            o
        }
        ).apply(null, arguments)
    }
    function k(e) {
        var t = "function" === typeof Map ? new Map : void 0;
        return (k = function(e) {
            if (null === e || (n = e,
            -1 === Function.toString.call(n).indexOf("[native code]")))
                return e;
            var n;
            if ("function" !== typeof e)
                throw new TypeError("Super expression must either be null or a function");
            if ("undefined" !== typeof t) {
                if (t.has(e))
                    return t.get(e);
                t.set(e, r)
            }
            function r() {
                return O(e, arguments, g(this).constructor)
            }
            return r.prototype = Object.create(e.prototype, {
                constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            b(r, e)
        }
        )(e)
    }
    function S(e, t) {
        if ("function" !== typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        t && b(e, t)
    }
    function E(e) {
        return (E = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function P(e, t) {
        return !t || "object" !== E(t) && "function" !== typeof t ? p(e) : t
    }
    function _(e) {
        var t = w();
        return function() {
            var n, r = g(e);
            if (t) {
                var o = g(this).constructor;
                n = Reflect.construct(r, arguments, o)
            } else
                n = r.apply(this, arguments);
            return P(this, n)
        }
    }
    function x(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    var j = n(10)
      , T = n.n(j);
    function A(e, t) {
        var n;
        if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (n = Object(u.a)(e)) || t && e && "number" === typeof e.length) {
                n && (e = n);
                var r = 0
                  , o = function() {};
                return {
                    s: o,
                    n: function() {
                        return r >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[r++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: o
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, i = !0, l = !1;
        return {
            s: function() {
                n = e[Symbol.iterator]()
            },
            n: function() {
                var e = n.next();
                return i = e.done,
                e
            },
            e: function(e) {
                l = !0,
                a = e
            },
            f: function() {
                try {
                    i || null == n.return || n.return()
                } finally {
                    if (l)
                        throw a
                }
            }
        }
    }
    var C = n(18)
      , L = n.n(C)
      , R = n(0)
      , M = n.n(R)
      , D = T.a.mark(F)
      , N = T.a.mark(Nt);
    var V = function(e, t) {
        if (null != e)
            return e;
        throw new Error(null !== t && void 0 !== t ? t : "Got unexpected null or undefined")
    };
    var I = function(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return n.error,
        null
    };
    var U = function(e, t) {
        var n = new Set(e);
        return n.add(t),
        n
    };
    function F(e, t) {
        var n, r, o, a;
        return T.a.wrap((function(i) {
            for (; ; )
                switch (i.prev = i.next) {
                case 0:
                    n = 0,
                    r = A(e),
                    i.prev = 2,
                    r.s();
                case 4:
                    if ((o = r.n()).done) {
                        i.next = 11;
                        break
                    }
                    if (a = o.value,
                    !t(a, n++)) {
                        i.next = 9;
                        break
                    }
                    return i.next = 9,
                    a;
                case 9:
                    i.next = 4;
                    break;
                case 11:
                    i.next = 16;
                    break;
                case 13:
                    i.prev = 13,
                    i.t0 = i.catch(2),
                    r.e(i.t0);
                case 16:
                    return i.prev = 16,
                    r.f(),
                    i.finish(16);
                case 19:
                case "end":
                    return i.stop()
                }
        }
        ), D, null, [[2, 13, 16, 19]])
    }
    var z = F
      , B = (new Map).set("recoil_hamt_2020", !0);
    function H(e) {
        var t;
        return null !== (t = B.get(e)) && void 0 !== t && t
    }
    H.setPass = function(e) {
        B.set(e, !0)
    }
    ,
    H.setFail = function(e) {
        B.set(e, !1)
    }
    ;
    var W = H;
    var q = function(e, t) {
        return T.a.mark((function n() {
            var r, o, a, i;
            return T.a.wrap((function(n) {
                for (; ; )
                    switch (n.prev = n.next) {
                    case 0:
                        r = 0,
                        o = A(e),
                        n.prev = 2,
                        o.s();
                    case 4:
                        if ((a = o.n()).done) {
                            n.next = 10;
                            break
                        }
                        return i = a.value,
                        n.next = 8,
                        t(i, r++);
                    case 8:
                        n.next = 4;
                        break;
                    case 10:
                        n.next = 15;
                        break;
                    case 12:
                        n.prev = 12,
                        n.t0 = n.catch(2),
                        o.e(n.t0);
                    case 15:
                        return n.prev = 15,
                        o.f(),
                        n.finish(15);
                    case 18:
                    case "end":
                        return n.stop()
                    }
            }
            ), n, null, [[2, 12, 15, 18]])
        }
        ))()
    };
    var $ = function(e) {};
    function K(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    var Y = function e(t) {
        x(this, e),
        K(this, "key", void 0),
        this.key = t
    }
      , X = function(e) {
        S(n, e);
        var t = _(n);
        function n() {
            return x(this, n),
            t.apply(this, arguments)
        }
        return n
    }(Y)
      , Q = function(e) {
        S(n, e);
        var t = _(n);
        function n() {
            return x(this, n),
            t.apply(this, arguments)
        }
        return n
    }(Y);
    var G = {
        AbstractRecoilValue: Y,
        RecoilState: X,
        RecoilValueReadOnly: Q,
        isRecoilValue: function(e) {
            return e instanceof X || e instanceof Q
        }
    }
      , Z = G.AbstractRecoilValue
      , J = G.RecoilState
      , ee = G.RecoilValueReadOnly
      , te = G.isRecoilValue
      , ne = Object.freeze({
        __proto__: null,
        AbstractRecoilValue: Z,
        RecoilState: J,
        RecoilValueReadOnly: ee,
        isRecoilValue: te
    })
      , re = function e() {
        x(this, e)
    }
      , oe = new re
      , ae = function(e) {
        S(n, e);
        var t = _(n);
        function n(e) {
            return x(this, n),
            t.call(this, "Tried to set the value of Recoil selector ".concat(e, " using an updater function, but it is an async selector in a pending or error state; this is not supported."))
        }
        return n
    }(k(Error))
      , ie = new Map
      , ue = new Map;
    var le = function(e) {
        S(n, e);
        var t = _(n);
        function n() {
            return x(this, n),
            t.apply(this, arguments)
        }
        return n
    }(k(Error));
    var ce = new Map;
    function se(e) {
        return ce.get(e)
    }
    var fe = {
        nodes: ie,
        recoilValues: ue,
        registerNode: function(e) {
            if (ie.has(e.key)) {
                var t = 'Duplicate atom key "'.concat(e.key, '". This is a FATAL ERROR in\n      production. But it is safe to ignore this warning if it occurred because of\n      hot module replacement.');
                console.warn(t)
            }
            ie.set(e.key, e);
            var n = null == e.set ? new ne.RecoilValueReadOnly(e.key) : new ne.RecoilState(e.key);
            return ue.set(e.key, n),
            n
        },
        getNode: function(e) {
            var t = ie.get(e);
            if (null == t)
                throw new le('Missing definition for RecoilValue: "'.concat(e, '""'));
            return t
        },
        getNodeMaybe: function(e) {
            return ie.get(e)
        },
        deleteNodeConfigIfPossible: function(e) {
            var t;
            if (W("recoil_memory_managament_2020")) {
                var n, r = ie.get(e);
                if (null === r || void 0 === r || null === (t = r.shouldDeleteConfigOnRelease) || void 0 === t ? void 0 : t.call(r))
                    ie.delete(e),
                    null === (n = se(e)) || void 0 === n || n(),
                    ce.delete(e)
            }
        },
        setConfigDeletionHandler: function(e, t) {
            W("recoil_memory_managament_2020") && (void 0 === t ? ce.delete(e) : ce.set(e, t))
        },
        getConfigDeletionHandler: se,
        recoilValuesForKeys: function(e) {
            return q(e, (function(e) {
                return V(ue.get(e))
            }
            ))
        },
        NodeMissingError: le,
        DefaultValue: re,
        DEFAULT_VALUE: oe,
        RecoilValueNotReady: ae
    }
      , pe = function e() {
        x(this, e)
    };
    var de = pe
      , ye = function() {
        return new pe
    }
      , ve = U
      , he = fe.getNode
      , me = fe.getNodeMaybe
      , ge = fe.recoilValuesForKeys
      , be = de
      , we = Object.freeze(new Set)
      , Oe = function(e) {
        S(n, e);
        var t = _(n);
        function n() {
            return x(this, n),
            t.apply(this, arguments)
        }
        return n
    }(k(Error));
    function ke(e, t, n, r) {
        var o = e.getState();
        if (!o.nodeCleanupFunctions.has(n)) {
            var a = he(n)
              , i = function(e, t, n) {
                if (!W("recoil_memory_managament_2020"))
                    return function() {}
                    ;
                var r = e.getState().retention.nodesRetainedByZone;
                function o(e) {
                    var n = r.get(e);
                    n || r.set(e, n = new Set),
                    n.add(t)
                }
                if (n instanceof be)
                    o(n);
                else if (Array.isArray(n)) {
                    var a, i = A(n);
                    try {
                        for (i.s(); !(a = i.n()).done; )
                            o(a.value)
                    } catch (u) {
                        i.e(u)
                    } finally {
                        i.f()
                    }
                }
                return function() {
                    if (W("recoil_memory_managament_2020")) {
                        var r = e.getState().retention.nodesRetainedByZone;
                        if (n instanceof be)
                            i(n);
                        else if (Array.isArray(n)) {
                            var o, a = A(n);
                            try {
                                for (a.s(); !(o = a.n()).done; )
                                    i(o.value)
                            } catch (u) {
                                a.e(u)
                            } finally {
                                a.f()
                            }
                        }
                    }
                    function i(e) {
                        var n = r.get(e);
                        n && n.delete(t),
                        n && 0 === n.size && r.delete(e)
                    }
                }
            }(e, n, a.retainedBy)
              , u = a.init(e, t, r);
            o.nodeCleanupFunctions.set(n, (function() {
                u(),
                i()
            }
            ))
        }
    }
    function Se(e, t, n) {
        return he(n).peek(e, t)
    }
    function Ee(e, t, n) {
        for (var r = new Set, o = Array.from(n), a = e.getGraph(t.version), i = o.pop(); i; i = o.pop()) {
            var u;
            r.add(i);
            var l, c = A(null !== (u = a.nodeToNodeSubscriptions.get(i)) && void 0 !== u ? u : we);
            try {
                for (c.s(); !(l = c.n()).done; ) {
                    var s = l.value;
                    r.has(s) || o.push(s)
                }
            } catch (f) {
                c.e(f)
            } finally {
                c.f()
            }
        }
        return r
    }
    var Pe = function(e, t, n) {
        return ke(e, t, n, "get"),
        he(n).get(e, t)
    }
      , _e = Se
      , xe = function(e, t, n, r) {
        var o = he(n);
        if (null == o.set)
            throw new Oe("Attempt to set read-only RecoilValue: ".concat(n));
        var a = o.set;
        return ke(e, t, n, "set"),
        a(e, t, r)
    }
      , je = function(e, t) {
        var n, r = e.getState();
        null === (n = r.nodeCleanupFunctions.get(t)) || void 0 === n || n(),
        r.nodeCleanupFunctions.delete(t)
    }
      , Te = function(e, t, n) {
        var r, o = me(t);
        return null === o || void 0 === o || null === (r = o.invalidate) || void 0 === r || r.call(o, e),
        Object(m.a)(Object(m.a)({}, e), {}, {
            atomValues: e.atomValues.clone().delete(t),
            nonvalidatedAtoms: e.nonvalidatedAtoms.clone().set(t, n),
            dirtyAtoms: ve(e.dirtyAtoms, t)
        })
    }
      , Ae = function(e, t, n) {
        var r, o, a, i = e.getState(), u = e.getGraph(t.version), l = i.knownAtoms.has(n) ? "atom" : i.knownSelectors.has(n) ? "selector" : void 0, c = z(Ee(e, t, new Set([n])), (function(e) {
            return e !== n
        }
        ));
        return {
            loadable: Se(e, t, n),
            isActive: i.knownAtoms.has(n) || i.knownSelectors.has(n),
            isSet: "selector" !== l && t.atomValues.has(n),
            isModified: t.dirtyAtoms.has(n),
            type: l,
            deps: ge(null !== (r = u.nodeDeps.get(n)) && void 0 !== r ? r : []),
            subscribers: {
                nodes: ge(c),
                components: q(null !== (o = null === (a = i.nodeToComponentSubscriptions.get(n)) || void 0 === a ? void 0 : a.values()) && void 0 !== o ? o : [], (function(e) {
                    return {
                        name: Object(h.a)(e, 1)[0]
                    }
                }
                ))
            }
        }
    }
      , Ce = Ee
      , Le = ke
      , Re = Ce
      , Me = Pe
      , De = xe
      , Ne = fe.getNodeMaybe
      , Ve = fe.DefaultValue
      , Ie = fe.RecoilValueNotReady
      , Ue = ne.AbstractRecoilValue
      , Fe = ne.RecoilState
      , ze = ne.RecoilValueReadOnly
      , Be = ne.isRecoilValue;
    function He(e, t, n) {
        if ("set" === n.type) {
            var r, o = n.recoilValue, a = function(e, t, n, r) {
                var o = n.key;
                if ("function" === typeof r) {
                    var a = Me(e, t, o);
                    if ("loading" === a.state)
                        throw new Ie(o);
                    if ("hasError" === a.state)
                        throw a.contents;
                    return r(a.contents)
                }
                return r
            }(e, t, o, n.valueOrUpdater), i = A(De(e, t, o.key, a).entries());
            try {
                for (i.s(); !(r = i.n()).done; ) {
                    var u = Object(h.a)(r.value, 2);
                    We(t, u[0], u[1])
                }
            } catch (d) {
                i.e(d)
            } finally {
                i.f()
            }
        } else if ("setLoadable" === n.type) {
            We(t, n.recoilValue.key, n.loadable)
        } else if ("markModified" === n.type) {
            var l = n.recoilValue.key;
            t.dirtyAtoms.add(l)
        } else if ("setUnvalidated" === n.type) {
            var c, s = n.recoilValue.key, f = n.unvalidatedValue, p = Ne(s);
            null === p || void 0 === p || null === (c = p.invalidate) || void 0 === c || c.call(p, t),
            t.atomValues.delete(s),
            t.nonvalidatedAtoms.set(s, f),
            t.dirtyAtoms.add(s)
        } else
            I("Unknown action ".concat(n.type))
    }
    function We(e, t, n) {
        "hasValue" === n.state && n.contents instanceof Ve ? e.atomValues.delete(t) : e.atomValues.set(t, n),
        e.dirtyAtoms.add(t),
        e.nonvalidatedAtoms.delete(t)
    }
    function qe(e, t) {
        e.replaceState((function(n) {
            var r, o = function(e) {
                return Object(m.a)(Object(m.a)({}, e), {}, {
                    atomValues: e.atomValues.clone(),
                    nonvalidatedAtoms: e.nonvalidatedAtoms.clone(),
                    dirtyAtoms: new Set(e.dirtyAtoms)
                })
            }(n), a = A(t);
            try {
                for (a.s(); !(r = a.n()).done; ) {
                    var i = r.value;
                    He(e, o, i)
                }
            } catch (u) {
                a.e(u)
            } finally {
                a.f()
            }
            return Ye(e, o),
            o
        }
        ))
    }
    function $e(e, t) {
        if (Ke.length) {
            var n = Ke[Ke.length - 1]
              , r = n.get(e);
            r || n.set(e, r = []),
            r.push(t)
        } else
            qe(e, [t])
    }
    var Ke = [];
    function Ye(e, t) {
        var n, r = A(Re(e, t, t.dirtyAtoms));
        try {
            for (r.s(); !(n = r.n()).done; ) {
                var o, a, i = n.value;
                null === (o = Ne(i)) || void 0 === o || null === (a = o.invalidate) || void 0 === a || a.call(o, t)
            }
        } catch (u) {
            r.e(u)
        } finally {
            r.f()
        }
    }
    function Xe(e, t, n) {
        $e(e, {
            type: "set",
            recoilValue: t,
            valueOrUpdater: n
        })
    }
    var Qe = 0;
    var Ge = {
        RecoilValueReadOnly: ze,
        AbstractRecoilValue: Ue,
        RecoilState: Fe,
        getRecoilValueAsLoadable: function(e, t) {
            var n, r, o = t.key, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.getState().currentTree, i = e.getState();
            a.version !== i.currentTree.version && a.version !== (null === (n = i.nextTree) || void 0 === n ? void 0 : n.version) && a.version !== (null === (r = i.previousTree) || void 0 === r ? void 0 : r.version) && I("Tried to read from a discarded tree");
            var u = Me(e, a, o);
            return u
        },
        setRecoilValue: Xe,
        setRecoilValueLoadable: function(e, t, n) {
            if (n instanceof Ve)
                return Xe(e, t, n);
            $e(e, {
                type: "setLoadable",
                recoilValue: t,
                loadable: n
            })
        },
        markRecoilValueModified: function(e, t) {
            $e(e, {
                type: "markModified",
                recoilValue: t
            })
        },
        setUnvalidatedRecoilValue: function(e, t, n) {
            $e(e, {
                type: "setUnvalidated",
                recoilValue: t,
                unvalidatedValue: n
            })
        },
        subscribeToRecoilValue: function(e, t, n) {
            var r = t.key
              , o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null
              , a = Qe++
              , i = e.getState();
            return i.nodeToComponentSubscriptions.has(r) || i.nodeToComponentSubscriptions.set(r, new Map),
            V(i.nodeToComponentSubscriptions.get(r)).set(a, [null !== o && void 0 !== o ? o : "<not captured>", n]),
            {
                release: function() {
                    var t = e.getState()
                      , n = t.nodeToComponentSubscriptions.get(r);
                    void 0 !== n && n.has(a) ? (n.delete(a),
                    0 === n.size && t.nodeToComponentSubscriptions.delete(r)) : I("Subscription missing at release time for atom ".concat(r, ". This is a bug in Recoil."))
                }
            }
        },
        isRecoilValue: Be,
        applyAtomValueWrites: function(e, t) {
            var n = e.clone();
            return t.forEach((function(e, t) {
                "hasValue" === e.state && e.contents instanceof Ve ? n.delete(t) : n.set(t, e)
            }
            )),
            n
        },
        batchStart: function() {
            var e = new Map;
            return Ke.push(e),
            function() {
                var t, n = A(e);
                try {
                    for (n.s(); !(t = n.n()).done; ) {
                        var r = Object(h.a)(t.value, 2);
                        qe(r[0], r[1])
                    }
                } catch (o) {
                    n.e(o)
                } finally {
                    n.f()
                }
                Ke.pop() !== e && I("Incorrect order of batch popping")
            }
        },
        invalidateDownstreams_FOR_TESTING: Ye
    }
      , Ze = L.a.unstable_batchedUpdates
      , Je = Ge.batchStart
      , et = {
        unstable_batchedUpdates: {
            unstable_batchedUpdates: Ze
        }.unstable_batchedUpdates
    }.unstable_batchedUpdates
      , tt = function(e) {
        et = e
    }
      , nt = function(e) {
        et((function() {
            var t = function() {};
            try {
                t = Je(),
                e()
            } finally {
                t()
            }
        }
        ))
    };
    var rt = {
        enqueueExecution: function(e, t) {
            t()
        }
    };
    var ot = function(e) {
        for (var t = new Set, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
            r[o - 1] = arguments[o];
        var a, i = A(e);
        try {
            e: for (i.s(); !(a = i.n()).done; ) {
                var u, l = a.value, c = A(r);
                try {
                    for (c.s(); !(u = c.n()).done; ) {
                        var s = u.value;
                        if (s.has(l))
                            continue e
                    }
                } catch (f) {
                    c.e(f)
                } finally {
                    c.f()
                }
                t.add(l)
            }
        } catch (f) {
            i.e(f)
        } finally {
            i.f()
        }
        return t
    };
    var at = function(e, t) {
        var n = new Map;
        return e.forEach((function(e, r) {
            n.set(r, t(e, r))
        }
        )),
        n
    };
    function it(e, t, n) {
        var r = t.nodeDeps
          , o = t.nodeToNodeSubscriptions;
        e.forEach((function(e, t) {
            var a = r.get(t);
            a && n && a !== n.nodeDeps.get(t) || (r.set(t, new Set(e)),
            (null == a ? e : ot(e, a)).forEach((function(e) {
                o.has(e) || o.set(e, new Set),
                V(o.get(e)).add(t)
            }
            )),
            a && ot(a, e).forEach((function(e) {
                if (o.has(e)) {
                    var n = V(o.get(e));
                    n.delete(t),
                    0 === n.size && o.delete(e)
                }
            }
            )))
        }
        ))
    }
    var ut = function(e) {
        return {
            nodeDeps: at(e.nodeDeps, (function(e) {
                return new Set(e)
            }
            )),
            nodeToNodeSubscriptions: at(e.nodeToNodeSubscriptions, (function(e) {
                return new Set(e)
            }
            ))
        }
    }
      , lt = function() {
        return {
            nodeDeps: new Map,
            nodeToNodeSubscriptions: new Map
        }
    }
      , ct = function(e, t, n) {
        var r, o, a, i, u = t.getState();
        n !== u.currentTree.version && n !== (null === (r = u.nextTree) || void 0 === r ? void 0 : r.version) && n !== (null === (o = u.previousTree) || void 0 === o ? void 0 : o.version) && I("Tried to save dependencies to a discarded tree");
        var l = t.getGraph(n);
        if (it(e, l),
        n === (null === (a = u.previousTree) || void 0 === a ? void 0 : a.version) && it(e, t.getGraph(u.currentTree.version), l),
        n === (null === (i = u.previousTree) || void 0 === i ? void 0 : i.version) || n === u.currentTree.version) {
            var c, s = null === (c = u.nextTree) || void 0 === c ? void 0 : c.version;
            if (void 0 !== s)
                it(e, t.getGraph(s), l)
        }
    };
    var st = function(e, t) {
        return e(t = {
            exports: {}
        }, t.exports),
        t.exports
    }((function(e) {
        var t = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , n = {}
          , r = Math.pow(2, 5)
          , o = r - 1
          , a = r / 2
          , i = r / 4
          , u = {}
          , l = function(e) {
            return function() {
                return e
            }
        }
          , c = n.hash = function(e) {
            var n = "undefined" === typeof e ? "undefined" : t(e);
            if ("number" === n)
                return e;
            "string" !== n && (e += "");
            for (var r = 0, o = 0, a = e.length; o < a; ++o) {
                r = (r << 5) - r + e.charCodeAt(o) | 0
            }
            return r
        }
          , s = function(e, t) {
            return t >>> e & o
        }
          , f = function(e) {
            return 1 << e
        }
          , p = function(e, t) {
            return n = e & t - 1,
            n = (n = (858993459 & (n -= n >> 1 & 1431655765)) + (n >> 2 & 858993459)) + (n >> 4) & 252645135,
            127 & (n += n >> 8) + (n >> 16);
            var n
        }
          , d = function(e, t, n, r) {
            var o = r;
            if (!e) {
                var a = r.length;
                o = new Array(a);
                for (var i = 0; i < a; ++i)
                    o[i] = r[i]
            }
            return o[t] = n,
            o
        }
          , y = function(e, t, n) {
            var r = n.length - 1
              , o = 0
              , a = 0
              , i = n;
            if (e)
                o = a = t;
            else
                for (i = new Array(r); o < t; )
                    i[a++] = n[o++];
            for (++o; o <= r; )
                i[a++] = n[o++];
            return e && (i.length = r),
            i
        }
          , v = {
            __hamt_isEmpty: !0
        }
          , h = function(e) {
            return e === v || e && e.__hamt_isEmpty
        }
          , m = function(e, t, n, r) {
            return {
                type: 1,
                edit: e,
                hash: t,
                key: n,
                value: r,
                _modify: S
            }
        }
          , g = function(e, t, n) {
            return {
                type: 2,
                edit: e,
                hash: t,
                children: n,
                _modify: E
            }
        }
          , b = function(e, t, n) {
            return {
                type: 3,
                edit: e,
                mask: t,
                children: n,
                _modify: P
            }
        }
          , w = function(e, t, n) {
            return {
                type: 4,
                edit: e,
                size: t,
                children: n,
                _modify: _
            }
        }
          , O = function e(t, n, r, o, a, i) {
            if (r === a)
                return g(t, r, [i, o]);
            var u = s(n, r)
              , l = s(n, a);
            return b(t, f(u) | f(l), u === l ? [e(t, n + 5, r, o, a, i)] : u < l ? [o, i] : [i, o])
        }
          , k = function(e, t) {
            return e === t.edit
        }
          , S = function(e, t, n, r, o, a, i) {
            if (t(a, this.key)) {
                var l = r(this.value);
                return l === this.value ? this : l === u ? (--i.value,
                v) : k(e, this) ? (this.value = l,
                this) : m(e, o, a, l)
            }
            var c = r();
            return c === u ? this : (++i.value,
            O(e, n, this.hash, this, o, m(e, o, a, c)))
        }
          , E = function(e, t, n, r, o, a, i) {
            if (o === this.hash) {
                var l = function(e, t, n, r, o, a, i, l) {
                    for (var c = o.length, s = 0; s < c; ++s) {
                        var f = o[s];
                        if (n(i, f.key)) {
                            var p = f.value
                              , v = a(p);
                            return v === p ? o : v === u ? (--l.value,
                            y(e, s, o)) : d(e, s, m(t, r, i, v), o)
                        }
                    }
                    var h = a();
                    return h === u ? o : (++l.value,
                    d(e, c, m(t, r, i, h), o))
                }(k(e, this), e, t, this.hash, this.children, r, a, i);
                return l === this.children ? this : l.length > 1 ? g(e, this.hash, l) : l[0]
            }
            var c = r();
            return c === u ? this : (++i.value,
            O(e, n, this.hash, this, o, m(e, o, a, c)))
        }
          , P = function(e, t, n, r, o, i, u) {
            var l = this.mask
              , c = this.children
              , m = s(n, o)
              , g = f(m)
              , O = p(l, g)
              , S = l & g
              , E = S ? c[O] : v
              , P = E._modify(e, t, n + 5, r, o, i, u);
            if (E === P)
                return this;
            var _, x = k(e, this), j = l, T = void 0;
            if (S && h(P)) {
                if (!(j &= ~g))
                    return v;
                if (c.length <= 2 && ((_ = c[1 ^ O]) === v || 1 === _.type || 2 === _.type))
                    return c[1 ^ O];
                T = y(x, O, c)
            } else if (S || h(P))
                T = d(x, O, P, c);
            else {
                if (c.length >= a)
                    return function(e, t, n, r, o) {
                        for (var a = [], i = r, u = 0, l = 0; i; ++l)
                            1 & i && (a[l] = o[u++]),
                            i >>>= 1;
                        return a[t] = n,
                        w(e, u + 1, a)
                    }(e, m, P, l, c);
                j |= g,
                T = function(e, t, n, r) {
                    var o = r.length;
                    if (e) {
                        for (var a = o; a >= t; )
                            r[a--] = r[a];
                        return r[t] = n,
                        r
                    }
                    for (var i = 0, u = 0, l = new Array(o + 1); i < t; )
                        l[u++] = r[i++];
                    for (l[t] = n; i < o; )
                        l[++u] = r[i++];
                    return l
                }(x, O, P, c)
            }
            return x ? (this.mask = j,
            this.children = T,
            this) : b(e, j, T)
        }
          , _ = function(e, t, n, r, o, a, u) {
            var l = this.size
              , c = this.children
              , f = s(n, o)
              , p = c[f]
              , y = (p || v)._modify(e, t, n + 5, r, o, a, u);
            if (p === y)
                return this;
            var m = k(e, this)
              , g = void 0;
            if (h(p) && !h(y))
                ++l,
                g = d(m, f, y, c);
            else if (!h(p) && h(y)) {
                if (--l <= i)
                    return function(e, t, n, r) {
                        for (var o = new Array(t - 1), a = 0, i = 0, u = 0, l = r.length; u < l; ++u)
                            if (u !== n) {
                                var c = r[u];
                                c && !h(c) && (o[a++] = c,
                                i |= 1 << u)
                            }
                        return b(e, i, o)
                    }(e, l, f, c);
                g = d(m, f, v, c)
            } else
                g = d(m, f, y, c);
            return m ? (this.size = l,
            this.children = g,
            this) : w(e, l, g)
        };
        function x(e, t, n, r, o) {
            this._editable = e,
            this._edit = t,
            this._config = n,
            this._root = r,
            this._size = o
        }
        v._modify = function(e, t, n, r, o, a, i) {
            var l = r();
            return l === u ? v : (++i.value,
            m(e, o, a, l))
        }
        ,
        x.prototype.setTree = function(e, t) {
            return this._editable ? (this._root = e,
            this._size = t,
            this) : e === this._root ? this : new x(this._editable,this._edit,this._config,e,t)
        }
        ;
        var j = n.tryGetHash = function(e, t, n, r) {
            for (var o = r._root, a = 0, i = r._config.keyEq; ; )
                switch (o.type) {
                case 1:
                    return i(n, o.key) ? o.value : e;
                case 2:
                    if (t === o.hash)
                        for (var u = o.children, l = 0, c = u.length; l < c; ++l) {
                            var d = u[l];
                            if (i(n, d.key))
                                return d.value
                        }
                    return e;
                case 3:
                    var y = s(a, t)
                      , v = f(y);
                    if (o.mask & v) {
                        o = o.children[p(o.mask, v)],
                        a += 5;
                        break
                    }
                    return e;
                case 4:
                    if (o = o.children[s(a, t)]) {
                        a += 5;
                        break
                    }
                    return e;
                default:
                    return e
                }
        }
        ;
        x.prototype.tryGetHash = function(e, t, n) {
            return j(e, t, n, this)
        }
        ;
        var T = n.tryGet = function(e, t, n) {
            return j(e, n._config.hash(t), t, n)
        }
        ;
        x.prototype.tryGet = function(e, t) {
            return T(e, t, this)
        }
        ;
        var A = n.getHash = function(e, t, n) {
            return j(void 0, e, t, n)
        }
        ;
        x.prototype.getHash = function(e, t) {
            return A(e, t, this)
        }
        ;
        n.get = function(e, t) {
            return j(void 0, t._config.hash(e), e, t)
        }
        ;
        x.prototype.get = function(e, t) {
            return T(t, e, this)
        }
        ;
        var C = n.has = function(e, t, n) {
            return j(u, e, t, n) !== u
        }
        ;
        x.prototype.hasHash = function(e, t) {
            return C(e, t, this)
        }
        ;
        var L = n.has = function(e, t) {
            return C(t._config.hash(e), e, t)
        }
        ;
        x.prototype.has = function(e) {
            return L(e, this)
        }
        ;
        var R = function(e, t) {
            return e === t
        };
        n.make = function(e) {
            return new x(0,0,{
                keyEq: e && e.keyEq || R,
                hash: e && e.hash || c
            },v,0)
        }
        ,
        n.empty = n.make();
        var M = n.isEmpty = function(e) {
            return e && !!h(e._root)
        }
        ;
        x.prototype.isEmpty = function() {
            return M(this)
        }
        ;
        var D = n.modifyHash = function(e, t, n, r) {
            var o = {
                value: r._size
            }
              , a = r._root._modify(r._editable ? r._edit : NaN, r._config.keyEq, 0, e, t, n, o);
            return r.setTree(a, o.value)
        }
        ;
        x.prototype.modifyHash = function(e, t, n) {
            return D(n, e, t, this)
        }
        ;
        var N = n.modify = function(e, t, n) {
            return D(e, n._config.hash(t), t, n)
        }
        ;
        x.prototype.modify = function(e, t) {
            return N(t, e, this)
        }
        ;
        var V = n.setHash = function(e, t, n, r) {
            return D(l(n), e, t, r)
        }
        ;
        x.prototype.setHash = function(e, t, n) {
            return V(e, t, n, this)
        }
        ;
        var I = n.set = function(e, t, n) {
            return V(n._config.hash(e), e, t, n)
        }
        ;
        x.prototype.set = function(e, t) {
            return I(e, t, this)
        }
        ;
        var U = l(u)
          , F = n.removeHash = function(e, t, n) {
            return D(U, e, t, n)
        }
        ;
        x.prototype.removeHash = x.prototype.deleteHash = function(e, t) {
            return F(e, t, this)
        }
        ;
        var z = n.remove = function(e, t) {
            return F(t._config.hash(e), e, t)
        }
        ;
        x.prototype.remove = x.prototype.delete = function(e) {
            return z(e, this)
        }
        ;
        var B = n.beginMutation = function(e) {
            return new x(e._editable + 1,e._edit + 1,e._config,e._root,e._size)
        }
        ;
        x.prototype.beginMutation = function() {
            return B(this)
        }
        ;
        var H = n.endMutation = function(e) {
            return e._editable = e._editable && e._editable - 1,
            e
        }
        ;
        x.prototype.endMutation = function() {
            return H(this)
        }
        ;
        var W = n.mutate = function(e, t) {
            var n = B(t);
            return e(n),
            H(n)
        }
        ;
        x.prototype.mutate = function(e) {
            return W(e, this)
        }
        ;
        var q = function(e) {
            return e && $(e[0], e[1], e[2], e[3], e[4])
        }
          , $ = function(e, t, n, r, o) {
            for (; n < e; ) {
                var a = t[n++];
                if (a && !h(a))
                    return K(a, r, [e, t, n, r, o])
            }
            return q(o)
        }
          , K = function(e, t, n) {
            switch (e.type) {
            case 1:
                return {
                    value: t(e),
                    rest: n
                };
            case 2:
            case 4:
            case 3:
                var r = e.children;
                return $(r.length, r, 0, t, n);
            default:
                return q(n)
            }
        }
          , Y = {
            done: !0
        };
        function X(e) {
            this.v = e
        }
        X.prototype.next = function() {
            if (!this.v)
                return Y;
            var e = this.v;
            return this.v = q(e.rest),
            e
        }
        ,
        X.prototype[Symbol.iterator] = function() {
            return this
        }
        ;
        var Q = function(e, t) {
            return new X(K(e._root, t))
        }
          , G = function(e) {
            return [e.key, e.value]
        }
          , Z = n.entries = function(e) {
            return Q(e, G)
        }
        ;
        x.prototype.entries = x.prototype[Symbol.iterator] = function() {
            return Z(this)
        }
        ;
        var J = function(e) {
            return e.key
        }
          , ee = n.keys = function(e) {
            return Q(e, J)
        }
        ;
        x.prototype.keys = function() {
            return ee(this)
        }
        ;
        var te = function(e) {
            return e.value
        }
          , ne = n.values = x.prototype.values = function(e) {
            return Q(e, te)
        }
        ;
        x.prototype.values = function() {
            return ne(this)
        }
        ;
        var re = n.fold = function(e, t, n) {
            var r = n._root;
            if (1 === r.type)
                return e(t, r.value, r.key);
            for (var o = [r.children], a = void 0; a = o.pop(); )
                for (var i = 0, u = a.length; i < u; ) {
                    var l = a[i++];
                    l && l.type && (1 === l.type ? t = e(t, l.value, l.key) : o.push(l.children))
                }
            return t
        }
        ;
        x.prototype.fold = function(e, t) {
            return re(e, t, this)
        }
        ;
        var oe = n.forEach = function(e, t) {
            return re((function(n, r, o) {
                return e(r, o, t)
            }
            ), null, t)
        }
        ;
        x.prototype.forEach = function(e) {
            return oe(e, this)
        }
        ;
        var ae = n.count = function(e) {
            return e._size
        }
        ;
        x.prototype.count = function() {
            return ae(this)
        }
        ,
        Object.defineProperty(x.prototype, "size", {
            get: x.prototype.count
        }),
        e.exports ? e.exports = n : (void 0).hamt = n
    }
    ))
      , ft = function() {
        function e(t) {
            x(this, e),
            K(this, "_map", void 0),
            this._map = new Map(null === t || void 0 === t ? void 0 : t.entries())
        }
        return v(e, [{
            key: "keys",
            value: function() {
                return this._map.keys()
            }
        }, {
            key: "entries",
            value: function() {
                return this._map.entries()
            }
        }, {
            key: "get",
            value: function(e) {
                return this._map.get(e)
            }
        }, {
            key: "has",
            value: function(e) {
                return this._map.has(e)
            }
        }, {
            key: "set",
            value: function(e, t) {
                return this._map.set(e, t),
                this
            }
        }, {
            key: "delete",
            value: function(e) {
                return this._map.delete(e),
                this
            }
        }, {
            key: "clone",
            value: function() {
                return dt(this)
            }
        }, {
            key: "toMap",
            value: function() {
                return new Map(this._map)
            }
        }]),
        e
    }()
      , pt = function() {
        function e(t) {
            if (x(this, e),
            K(this, "_hamt", st.empty.beginMutation()),
            t instanceof e) {
                var n = t._hamt.endMutation();
                t._hamt = n.beginMutation(),
                this._hamt = n.beginMutation()
            } else if (t) {
                var r, o = A(t.entries());
                try {
                    for (o.s(); !(r = o.n()).done; ) {
                        var a = Object(h.a)(r.value, 2)
                          , i = a[0]
                          , u = a[1];
                        this._hamt.set(i, u)
                    }
                } catch (l) {
                    o.e(l)
                } finally {
                    o.f()
                }
            }
        }
        return v(e, [{
            key: "keys",
            value: function() {
                return this._hamt.keys()
            }
        }, {
            key: "entries",
            value: function() {
                return this._hamt.entries()
            }
        }, {
            key: "get",
            value: function(e) {
                return this._hamt.get(e)
            }
        }, {
            key: "has",
            value: function(e) {
                return this._hamt.has(e)
            }
        }, {
            key: "set",
            value: function(e, t) {
                return this._hamt.set(e, t),
                this
            }
        }, {
            key: "delete",
            value: function(e) {
                return this._hamt.delete(e),
                this
            }
        }, {
            key: "clone",
            value: function() {
                return dt(this)
            }
        }, {
            key: "toMap",
            value: function() {
                return new Map(this._hamt)
            }
        }]),
        e
    }();
    function dt(e) {
        return W("recoil_hamt_2020") ? new pt(e) : new ft(e)
    }
    var yt = dt
      , vt = lt
      , ht = Object.freeze({
        __proto__: null,
        persistentMap: yt
    }).persistentMap
      , mt = 0
      , gt = function() {
        return mt++
    };
    function bt() {
        var e = gt();
        return {
            version: e,
            stateID: e,
            transactionMetadata: {},
            dirtyAtoms: new Set,
            atomValues: ht(),
            nonvalidatedAtoms: ht()
        }
    }
    var wt = function() {
        var e = bt();
        return {
            currentTree: e,
            nextTree: null,
            previousTree: null,
            knownAtoms: new Set,
            knownSelectors: new Set,
            transactionSubscriptions: new Map,
            nodeTransactionSubscriptions: new Map,
            nodeToComponentSubscriptions: new Map,
            queuedComponentCallbacks_DEPRECATED: [],
            suspendedComponentResolvers: new Set,
            graphsByVersion: (new Map).set(e.version, vt()),
            versionsUsedByComponent: new Map,
            retention: {
                referenceCounts: new Map,
                nodesRetainedByZone: new Map,
                retainablesToCheckForRelease: new Set
            },
            nodeCleanupFunctions: new Map
        }
    }
      , Ot = gt;
    var kt = function() {
        for (var e = new Set, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
        for (var o = 0, a = n; o < a.length; o++) {
            var i, u = a[o], l = A(u);
            try {
                for (l.s(); !(i = l.n()).done; ) {
                    var c = i.value;
                    e.add(c)
                }
            } catch (s) {
                l.e(s)
            } finally {
                l.f()
            }
        }
        return e
    };
    var St = function(e, t, n) {
        for (var r = e.entries(), o = r.next(); !o.done; ) {
            var a = o.value;
            if (t.call(n, a[1], a[0], e))
                return !0;
            o = r.next()
        }
        return !1
    }
      , Et = je
      , Pt = fe.deleteNodeConfigIfPossible
      , _t = fe.getNode
      , xt = de
      , jt = new Set;
    function Tt(e, t) {
        var n = e.getState()
          , r = n.currentTree;
        if (n.nextTree)
            I("releaseNodesNowOnCurrentTree should only be called at the end of a batch");
        else {
            var o, a = new Set, i = A(t);
            try {
                for (i.s(); !(o = i.n()).done; ) {
                    var u = o.value;
                    if (u instanceof xt) {
                        var l, c = A(Ct(n, u));
                        try {
                            for (c.s(); !(l = c.n()).done; ) {
                                var s = l.value;
                                a.add(s)
                            }
                        } catch (y) {
                            c.e(y)
                        } finally {
                            c.f()
                        }
                    } else
                        a.add(u)
                }
            } catch (y) {
                i.e(y)
            } finally {
                i.f()
            }
            var f, p = function(e, t) {
                var n = e.getState()
                  , r = n.currentTree
                  , o = e.getGraph(r.version)
                  , a = new Set
                  , i = new Set;
                return u(t),
                a;
                function u(t) {
                    var l, c = new Set, s = function(e, t, n, r, o) {
                        var a = e.getGraph(t.version)
                          , i = []
                          , u = new Set;
                        for (; n.size > 0; )
                            l(V(n.values().next().value));
                        return i;
                        function l(e) {
                            if (r.has(e) || o.has(e))
                                n.delete(e);
                            else if (!u.has(e)) {
                                var t = a.nodeToNodeSubscriptions.get(e);
                                if (t) {
                                    var c, s = A(t);
                                    try {
                                        for (s.s(); !(c = s.n()).done; ) {
                                            l(c.value)
                                        }
                                    } catch (y) {
                                        s.e(y)
                                    } finally {
                                        s.f()
                                    }
                                }
                                u.add(e),
                                n.delete(e),
                                i.push(e)
                            }
                        }
                    }(e, r, t, a, i), f = A(s);
                    try {
                        for (f.s(); !(l = f.n()).done; ) {
                            var p, d = l.value;
                            if ("recoilRoot" !== _t(d).retainedBy)
                                if ((null !== (p = n.retention.referenceCounts.get(d)) && void 0 !== p ? p : 0) > 0)
                                    i.add(d);
                                else if (Lt(d).some((function(e) {
                                    return n.retention.referenceCounts.get(e)
                                }
                                )))
                                    i.add(d);
                                else {
                                    var v = o.nodeToNodeSubscriptions.get(d);
                                    v && St(v, (function(e) {
                                        return i.has(e)
                                    }
                                    )) ? i.add(d) : (a.add(d),
                                    c.add(d))
                                }
                            else
                                i.add(d)
                        }
                    } catch (y) {
                        f.e(y)
                    } finally {
                        f.f()
                    }
                    var h, m = new Set, g = A(c);
                    try {
                        for (g.s(); !(h = g.n()).done; ) {
                            var b, w = h.value, O = A(null !== (k = o.nodeDeps.get(w)) && void 0 !== k ? k : jt);
                            try {
                                for (O.s(); !(b = O.n()).done; ) {
                                    var k, S = b.value;
                                    a.has(S) || m.add(S)
                                }
                            } catch (y) {
                                O.e(y)
                            } finally {
                                O.f()
                            }
                        }
                    } catch (y) {
                        g.e(y)
                    } finally {
                        g.f()
                    }
                    m.size && u(m)
                }
            }(e, a), d = A(p);
            try {
                for (d.s(); !(f = d.n()).done; ) {
                    At(e, r, f.value)
                }
            } catch (y) {
                d.e(y)
            } finally {
                d.f()
            }
        }
    }
    function At(e, t, n) {
        if (W("recoil_memory_managament_2020")) {
            Et(e, n);
            var r = e.getState();
            r.knownAtoms.delete(n),
            r.knownSelectors.delete(n),
            r.nodeTransactionSubscriptions.delete(n),
            r.retention.referenceCounts.delete(n);
            var o, a = A(Lt(n));
            try {
                for (a.s(); !(o = a.n()).done; ) {
                    var i, u = o.value;
                    null === (i = r.retention.nodesRetainedByZone.get(u)) || void 0 === i || i.delete(n)
                }
            } catch (y) {
                a.e(y)
            } finally {
                a.f()
            }
            t.atomValues.delete(n),
            t.dirtyAtoms.delete(n),
            t.nonvalidatedAtoms.delete(n);
            var l = r.graphsByVersion.get(t.version);
            if (l) {
                var c = l.nodeDeps.get(n);
                if (void 0 !== c) {
                    l.nodeDeps.delete(n);
                    var s, f = A(c);
                    try {
                        for (f.s(); !(s = f.n()).done; ) {
                            var p, d = s.value;
                            null === (p = l.nodeToNodeSubscriptions.get(d)) || void 0 === p || p.delete(n)
                        }
                    } catch (y) {
                        f.e(y)
                    } finally {
                        f.f()
                    }
                }
                l.nodeToNodeSubscriptions.delete(n)
            }
            Pt(n)
        }
    }
    function Ct(e, t) {
        var n;
        return null !== (n = e.retention.nodesRetainedByZone.get(t)) && void 0 !== n ? n : jt
    }
    function Lt(e) {
        var t = _t(e).retainedBy;
        return void 0 === t || "components" === t || "recoilRoot" === t ? [] : t instanceof xt ? [t] : t
    }
    var Rt = function(e, t, n) {
        var r;
        if (W("recoil_memory_managament_2020")) {
            var o = e.getState().retention.referenceCounts
              , a = (null !== (r = o.get(t)) && void 0 !== r ? r : 0) + n;
            0 === a ? (o.delete(t),
            function(e, t) {
                var n = e.getState();
                n.nextTree ? n.retention.retainablesToCheckForRelease.add(t) : Tt(e, new Set([t]))
            }(e, t)) : o.set(t, a)
        }
    }
      , Mt = function(e) {
        if (W("recoil_memory_managament_2020")) {
            var t = e.getState();
            Tt(e, t.retention.retainablesToCheckForRelease),
            t.retention.retainablesToCheckForRelease.clear()
        }
    }
      , Dt = function(e) {
        return void 0 === e ? "recoilRoot" : e
    };
    function Nt(e) {
        var t, n, r, o, a, i;
        return T.a.wrap((function(u) {
            for (; ; )
                switch (u.prev = u.next) {
                case 0:
                    t = A(e),
                    u.prev = 1,
                    t.s();
                case 3:
                    if ((n = t.n()).done) {
                        u.next = 24;
                        break
                    }
                    r = n.value,
                    o = A(r),
                    u.prev = 6,
                    o.s();
                case 8:
                    if ((a = o.n()).done) {
                        u.next = 14;
                        break
                    }
                    return i = a.value,
                    u.next = 12,
                    i;
                case 12:
                    u.next = 8;
                    break;
                case 14:
                    u.next = 19;
                    break;
                case 16:
                    u.prev = 16,
                    u.t0 = u.catch(6),
                    o.e(u.t0);
                case 19:
                    return u.prev = 19,
                    o.f(),
                    u.finish(19);
                case 22:
                    u.next = 3;
                    break;
                case 24:
                    u.next = 29;
                    break;
                case 26:
                    u.prev = 26,
                    u.t1 = u.catch(1),
                    t.e(u.t1);
                case 29:
                    return u.prev = 29,
                    t.f(),
                    u.finish(29);
                case 32:
                case "end":
                    return u.stop()
                }
        }
        ), N, null, [[1, 26, 29, 32], [6, 16, 19, 22]])
    }
    var Vt = Nt
      , It = {
        isSSR: "undefined" === typeof window,
        isReactNative: "undefined" !== typeof navigator && "ReactNative" === navigator.product
    }
      , Ut = It.isSSR
      , Ft = nt
      , zt = Le
      , Bt = Ae
      , Ht = lt
      , Wt = fe.DEFAULT_VALUE
      , qt = fe.recoilValues
      , $t = fe.recoilValuesForKeys
      , Kt = Ge.AbstractRecoilValue
      , Yt = Ge.getRecoilValueAsLoadable
      , Xt = Ge.setRecoilValue
      , Qt = Ge.setUnvalidatedRecoilValue
      , Gt = Ot
      , Zt = wt
      , Jt = function() {
        function e(t) {
            var n = this;
            x(this, e),
            K(this, "_store", void 0),
            K(this, "_refCount", 0),
            K(this, "getLoadable", (function(e) {
                return n.checkRefCount_INTERNAL(),
                Yt(n._store, e)
            }
            )),
            K(this, "getPromise", (function(e) {
                return n.checkRefCount_INTERNAL(),
                n.getLoadable(e).toPromise()
            }
            )),
            K(this, "getNodes_UNSTABLE", (function(e) {
                if (n.checkRefCount_INTERNAL(),
                !0 === (null === e || void 0 === e ? void 0 : e.isModified)) {
                    if (!1 === (null === e || void 0 === e ? void 0 : e.isInitialized))
                        return [];
                    var t = n._store.getState().currentTree;
                    return $t(t.dirtyAtoms)
                }
                var r = n._store.getState().knownAtoms
                  , o = n._store.getState().knownSelectors;
                return null == (null === e || void 0 === e ? void 0 : e.isInitialized) ? qt.values() : !0 === e.isInitialized ? $t(Vt([n._store.getState().knownAtoms, n._store.getState().knownSelectors])) : z(qt.values(), (function(e) {
                    var t = e.key;
                    return !r.has(t) && !o.has(t)
                }
                ))
            }
            )),
            K(this, "getInfo_UNSTABLE", (function(e) {
                var t = e.key;
                return n.checkRefCount_INTERNAL(),
                Bt(n._store, n._store.getState().currentTree, t)
            }
            )),
            K(this, "map", (function(e) {
                n.checkRefCount_INTERNAL();
                var t = new nn(n);
                return e(t),
                tn(t.getStore_INTERNAL())
            }
            )),
            K(this, "asyncMap", function() {
                var e = Object(d.a)(T.a.mark((function e(t) {
                    var r;
                    return T.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return n.checkRefCount_INTERNAL(),
                                r = new nn(n),
                                e.next = 4,
                                t(r);
                            case 4:
                                return e.abrupt("return", tn(r.getStore_INTERNAL()));
                            case 5:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()),
            this._store = {
                getState: function() {
                    return t
                },
                replaceState: function(e) {
                    t.currentTree = e(t.currentTree)
                },
                getGraph: function(e) {
                    var n = t.graphsByVersion;
                    if (n.has(e))
                        return V(n.get(e));
                    var r = Ht();
                    return n.set(e, r),
                    r
                },
                subscribeToTransactions: function() {
                    return {
                        release: function() {}
                    }
                },
                addTransactionMetadata: function() {
                    throw new Error("Cannot subscribe to Snapshots")
                }
            };
            var r, o = A(this._store.getState().nodeCleanupFunctions.keys());
            try {
                for (o.s(); !(r = o.n()).done; ) {
                    var a = r.value;
                    zt(this._store, t.currentTree, a, "get")
                }
            } catch (i) {
                o.e(i)
            } finally {
                o.f()
            }
            this.retain(),
            this.autorelease()
        }
        return v(e, [{
            key: "retain",
            value: function() {
                var e = this;
                if (!W("recoil_memory_managament_2020"))
                    return function() {}
                    ;
                this._refCount++;
                var t = !1;
                return function() {
                    t || (t = !0,
                    e.release())
                }
            }
        }, {
            key: "autorelease",
            value: function() {
                var e = this;
                W("recoil_memory_managament_2020") && (Ut || window.setTimeout((function() {
                    return e.release()
                }
                ), 0))
            }
        }, {
            key: "release",
            value: function() {
                W("recoil_memory_managament_2020") && (this._refCount--,
                this._refCount)
            }
        }, {
            key: "checkRefCount_INTERNAL",
            value: function() {
                W("recoil_memory_managament_2020") && this._refCount
            }
        }, {
            key: "getStore_INTERNAL",
            value: function() {
                return this.checkRefCount_INTERNAL(),
                this._store
            }
        }, {
            key: "getID",
            value: function() {
                return this.checkRefCount_INTERNAL(),
                this.getID_INTERNAL()
            }
        }, {
            key: "getID_INTERNAL",
            value: function() {
                return this.checkRefCount_INTERNAL(),
                this._store.getState().currentTree.stateID
            }
        }]),
        e
    }();
    function en(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
          , r = e.getState()
          , o = n ? Gt() : t.version;
        return {
            currentTree: n ? {
                version: o,
                stateID: o,
                transactionMetadata: Object(m.a)({}, t.transactionMetadata),
                dirtyAtoms: new Set(t.dirtyAtoms),
                atomValues: t.atomValues.clone(),
                nonvalidatedAtoms: t.nonvalidatedAtoms.clone()
            } : t,
            nextTree: null,
            previousTree: null,
            knownAtoms: new Set(r.knownAtoms),
            knownSelectors: new Set(r.knownSelectors),
            transactionSubscriptions: new Map,
            nodeTransactionSubscriptions: new Map,
            nodeToComponentSubscriptions: new Map,
            queuedComponentCallbacks_DEPRECATED: [],
            suspendedComponentResolvers: new Set,
            graphsByVersion: (new Map).set(o, e.getGraph(t.version)),
            versionsUsedByComponent: new Map,
            retention: {
                referenceCounts: new Map,
                nodesRetainedByZone: new Map,
                retainablesToCheckForRelease: new Set
            },
            nodeCleanupFunctions: new Map
        }
    }
    function tn(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "current"
          , n = e.getState()
          , r = "current" === t ? n.currentTree : V(n.previousTree);
        return new Jt(en(e, r))
    }
    var nn = function(e) {
        S(n, e);
        var t = _(n);
        function n(e) {
            var r;
            return x(this, n),
            K(p(r = t.call(this, en(e.getStore_INTERNAL(), e.getStore_INTERNAL().getState().currentTree, !0))), "set", (function(e, t) {
                r.checkRefCount_INTERNAL(),
                Ft((function() {
                    Xt(r.getStore_INTERNAL(), e, t)
                }
                ))
            }
            )),
            K(p(r), "reset", (function(e) {
                r.checkRefCount_INTERNAL(),
                Ft((function() {
                    return Xt(r.getStore_INTERNAL(), e, Wt)
                }
                ))
            }
            )),
            K(p(r), "setUnvalidatedAtomValues_DEPRECATED", (function(e) {
                r.checkRefCount_INTERNAL();
                var t = r.getStore_INTERNAL();
                Ft((function() {
                    var n, r = A(e.entries());
                    try {
                        for (r.s(); !(n = r.n()).done; ) {
                            var o = Object(h.a)(n.value, 2)
                              , a = o[0]
                              , i = o[1];
                            Qt(t, new Kt(a), i)
                        }
                    } catch (u) {
                        r.e(u)
                    } finally {
                        r.f()
                    }
                }
                ))
            }
            )),
            r
        }
        return n
    }(Jt)
      , rn = {
        Snapshot: Jt,
        MutableSnapshot: nn,
        freshSnapshot: function(e) {
            var t = new Jt(Zt());
            return null != e ? t.map(e) : t
        },
        cloneSnapshot: tn
    }
      , on = rn.Snapshot
      , an = rn.MutableSnapshot
      , un = rn.freshSnapshot
      , ln = rn.cloneSnapshot
      , cn = Object.freeze({
        __proto__: null,
        Snapshot: on,
        MutableSnapshot: an,
        freshSnapshot: un,
        cloneSnapshot: ln
    })
      , sn = Ot
      , fn = wt
      , pn = je
      , dn = Ce
      , yn = xe
      , vn = Te
      , hn = lt
      , mn = ut
      , gn = Ge.applyAtomValueWrites
      , bn = Mt
      , wn = cn.freshSnapshot
      , On = M.a.useCallback
      , kn = M.a.useContext
      , Sn = M.a.useEffect
      , En = M.a.useMemo
      , Pn = M.a.useRef
      , _n = M.a.useState;
    function xn() {
        throw new Error("This component must be used inside a <RecoilRoot> component.")
    }
    var jn = Object.freeze({
        getState: xn,
        replaceState: xn,
        getGraph: xn,
        subscribeToTransactions: xn,
        addTransactionMetadata: xn
    })
      , Tn = !1;
    function An(e) {
        if (Tn)
            throw new Error("An atom update was triggered within the execution of a state updater function. State updater functions provided to Recoil must be pure functions.");
        if (null === e.nextTree) {
            var t = e.currentTree.version
              , n = sn();
            e.nextTree = Object(m.a)(Object(m.a)({}, e.currentTree), {}, {
                version: n,
                stateID: n,
                dirtyAtoms: new Set,
                transactionMetadata: {}
            }),
            e.graphsByVersion.set(n, mn(V(e.graphsByVersion.get(t))))
        }
    }
    var Cn = M.a.createContext({
        current: jn
    })
      , Ln = function() {
        return kn(Cn)
    }
      , Rn = M.a.createContext(null);
    function Mn(e) {
        var t = e.getState()
          , n = t.currentTree
          , r = n.dirtyAtoms;
        if (r.size) {
            var o, a = A(t.nodeTransactionSubscriptions);
            try {
                for (a.s(); !(o = a.n()).done; ) {
                    var i = Object(h.a)(o.value, 2)
                      , u = i[0]
                      , l = i[1];
                    if (r.has(u)) {
                        var c, s = A(l);
                        try {
                            for (s.s(); !(c = s.n()).done; ) {
                                var f = Object(h.a)(c.value, 2);
                                f[0];
                                (0,
                                f[1])(e)
                            }
                        } catch (E) {
                            s.e(E)
                        } finally {
                            s.f()
                        }
                    }
                }
            } catch (E) {
                a.e(E)
            } finally {
                a.f()
            }
            var p, d = A(t.transactionSubscriptions);
            try {
                for (d.s(); !(p = d.n()).done; ) {
                    var y = Object(h.a)(p.value, 2);
                    y[0];
                    (0,
                    y[1])(e)
                }
            } catch (E) {
                d.e(E)
            } finally {
                d.f()
            }
            var v, m = A(dn(e, n, r));
            try {
                for (m.s(); !(v = m.n()).done; ) {
                    var g = v.value
                      , b = t.nodeToComponentSubscriptions.get(g);
                    if (b) {
                        var w, O = A(b);
                        try {
                            for (O.s(); !(w = O.n()).done; ) {
                                var k = Object(h.a)(w.value, 2)
                                  , S = (k[0],
                                Object(h.a)(k[1], 2));
                                S[0];
                                (0,
                                S[1])(n)
                            }
                        } catch (E) {
                            O.e(E)
                        } finally {
                            O.f()
                        }
                    }
                }
            } catch (E) {
                m.e(E)
            } finally {
                m.f()
            }
            t.suspendedComponentResolvers.forEach((function(e) {
                return e()
            }
            ))
        }
        t.queuedComponentCallbacks_DEPRECATED.forEach((function(e) {
            return e(n)
        }
        )),
        t.queuedComponentCallbacks_DEPRECATED.splice(0, t.queuedComponentCallbacks_DEPRECATED.length)
    }
    function Dn(e) {
        var t = e.setNotifyBatcherOfChange
          , n = Ln()
          , r = _n([])
          , o = Object(h.a)(r, 2)
          , a = (o[0],
        o[1]);
        return t((function() {
            return a({})
        }
        )),
        Sn((function() {
            rt.enqueueExecution("Batcher", (function() {
                var e = n.current.getState()
                  , t = e.nextTree;
                if (null !== t) {
                    e.previousTree = e.currentTree,
                    e.currentTree = t,
                    e.nextTree = null,
                    Mn(n.current);
                    var r = V(e.previousTree).version;
                    e.graphsByVersion.delete(r),
                    e.previousTree = null,
                    W("recoil_memory_managament_2020") && bn(n.current)
                }
            }
            ))
        }
        )),
        Sn((function() {
            return function() {
                t((function() {}
                ))
            }
        }
        ), [t]),
        null
    }
    var Nn = 0;
    var Vn = Ln
      , In = function() {
        var e = kn(Rn);
        return null == e && $("Attempted to use a Recoil hook outside of a <RecoilRoot>. <RecoilRoot> must be an ancestor of any component that uses Recoil hooks."),
        e
    }
      , Un = function(e) {
        var t, n, r = e.initializeState_DEPRECATED, o = e.initializeState, a = e.store_INTERNAL, i = e.children, u = Pn(null), l = On((function(e) {
            u.current = e
        }
        ), [u]), c = null !== (t = M.a.createMutableSource) && void 0 !== t ? t : M.a.unstable_createMutableSource, s = null !== a && void 0 !== a ? a : {
            getState: function() {
                return n.current
            },
            replaceState: function(e) {
                var t = f.current.getState();
                An(t);
                var n, r = V(t.nextTree);
                try {
                    Tn = !0,
                    n = e(r)
                } finally {
                    Tn = !1
                }
                n !== r && (t.nextTree = n,
                V(u.current)())
            },
            getGraph: function(e) {
                var t = n.current.graphsByVersion;
                if (t.has(e))
                    return V(t.get(e));
                var r = hn();
                return t.set(e, r),
                r
            },
            subscribeToTransactions: function(e, t) {
                if (null == t) {
                    var n = f.current.getState().transactionSubscriptions
                      , r = Nn++;
                    return n.set(r, e),
                    {
                        release: function() {
                            n.delete(r)
                        }
                    }
                }
                var o = f.current.getState().nodeTransactionSubscriptions;
                o.has(t) || o.set(t, new Map);
                var a = Nn++;
                return V(o.get(t)).set(a, e),
                {
                    release: function() {
                        var e = o.get(t);
                        e && (e.delete(a),
                        0 === e.size && o.delete(t))
                    }
                }
            },
            addTransactionMetadata: function(e) {
                An(f.current.getState());
                for (var t = 0, n = Object.keys(e); t < n.length; t++) {
                    var r = n[t];
                    V(f.current.getState().nextTree).transactionMetadata[r] = e[r]
                }
            }
        }, f = Pn(s);
        n = Pn(null != r ? function(e, t) {
            var n = fn();
            return t({
                set: function(t, r) {
                    var o, a = n.currentTree, i = yn(e, a, t.key, r), u = new Set(i.keys()), l = a.nonvalidatedAtoms.clone(), c = A(u);
                    try {
                        for (c.s(); !(o = c.n()).done; ) {
                            var s = o.value;
                            l.delete(s)
                        }
                    } catch (f) {
                        c.e(f)
                    } finally {
                        c.f()
                    }
                    n.currentTree = Object(m.a)(Object(m.a)({}, a), {}, {
                        dirtyAtoms: kt(a.dirtyAtoms, u),
                        atomValues: gn(a.atomValues, i),
                        nonvalidatedAtoms: l
                    })
                },
                setUnvalidatedAtomValues: function(e) {
                    e.forEach((function(e, t) {
                        n.currentTree = vn(n.currentTree, t, e)
                    }
                    ))
                }
            }),
            n
        }(s, r) : null != o ? function(e) {
            return wn().map(e).getStore_INTERNAL().getState()
        }(o) : fn());
        var p = En((function() {
            return c ? c(n, (function() {
                return n.current.currentTree.version
            }
            )) : null
        }
        ), [c, n]);
        return Sn((function() {
            return function() {
                var e, t = A(f.current.getState().knownAtoms);
                try {
                    for (t.s(); !(e = t.n()).done; ) {
                        var n = e.value;
                        pn(f.current, n)
                    }
                } catch (r) {
                    t.e(r)
                } finally {
                    t.f()
                }
            }
        }
        ), []),
        M.a.createElement(Cn.Provider, {
            value: f
        }, M.a.createElement(Rn.Provider, {
            value: p
        }, M.a.createElement(Dn, {
            setNotifyBatcherOfChange: l
        }), i))
    };
    var Fn = function(e, t) {
        var n, r = new Map, o = A(e);
        try {
            for (o.s(); !(n = o.n()).done; ) {
                var a = Object(h.a)(n.value, 2)
                  , i = a[0]
                  , u = a[1];
                t(u, i) && r.set(i, u)
            }
        } catch (l) {
            o.e(l)
        } finally {
            o.f()
        }
        return r
    };
    var zn = function(e, t) {
        var n, r = new Set, o = A(e);
        try {
            for (o.s(); !(n = o.n()).done; ) {
                var a = n.value;
                t(a) && r.add(a)
            }
        } catch (i) {
            o.e(i)
        } finally {
            o.f()
        }
        return r
    };
    var Bn = function(e, t) {
        if (!e)
            throw new Error(t)
    };
    var Hn, Wn = function() {
        for (var e = new Map, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
        for (var o = 0; o < n.length; o++)
            for (var a = n[o].keys(), i = void 0; !(i = a.next()).done; )
                e.set(i.value, n[o].get(i.value));
        return e
    }, qn = null !== (Hn = M.a.useMutableSource) && void 0 !== Hn ? Hn : M.a.unstable_useMutableSource;
    var $n = {
        mutableSourceExists: function() {
            return qn && !("undefined" !== typeof window && window.$disableRecoilValueMutableSource_TEMP_HACK_DO_NOT_USE)
        },
        useMutableSource: qn
    };
    var Kn = function(e, t) {
        if (e === t)
            return !0;
        if (e.length !== t.length)
            return !1;
        for (var n = 0, r = e.length; n < r; n++)
            if (e[n] !== t[n])
                return !1;
        return !0
    };
    var Yn = M.a.useRef;
    var Xn = function() {
        return Yn(),
        "<component name not available>"
    }
      , Qn = nt
      , Gn = fe.DEFAULT_VALUE
      , Zn = fe.getNode
      , Jn = fe.nodes
      , er = In
      , tr = Vn
      , nr = (ne.isRecoilValue,
    Ge.AbstractRecoilValue)
      , rr = Ge.getRecoilValueAsLoadable
      , or = Ge.setRecoilValue
      , ar = Ge.setRecoilValueLoadable
      , ir = Ge.setUnvalidatedRecoilValue
      , ur = Ge.subscribeToRecoilValue
      , lr = Rt
      , cr = de
      , sr = (cn.Snapshot,
    cn.cloneSnapshot)
      , fr = It.isSSR
      , pr = $n.mutableSourceExists
      , dr = $n.useMutableSource
      , yr = M.a.useCallback
      , vr = M.a.useEffect
      , hr = (M.a.useMemo,
    M.a.useRef)
      , mr = M.a.useState
      , gr = 12e4;
    function br(e, t, n) {
        if ("hasValue" === e.state)
            return e.contents;
        if ("loading" === e.state)
            throw new Promise((function(e) {
                n.current.getState().suspendedComponentResolvers.add(e)
            }
            ));
        throw "hasError" === e.state ? e.contents : new Error('Invalid value of loadable atom "'.concat(t.key, '"'))
    }
    function wr(e) {
        return W("recoil_memory_managament_2020") && Tr(e),
        pr() ? function(e) {
            var t = tr()
              , n = yr((function() {
                var n = t.current
                  , r = n.getState().currentTree;
                return rr(n, e, r)
            }
            ), [t, e])
              , r = yr((function() {
                return n()
            }
            ), [n])
              , o = Xn()
              , a = yr((function(r, a) {
                var i = t.current;
                return ur(i, e, (function() {
                    if (!W("recoil_suppress_rerender_in_callback"))
                        return a();
                    var e = n();
                    l.current.is(e) || a()
                }
                ), o).release
            }
            ), [t, e, o, n])
              , i = er()
              , u = dr(i, r, a)
              , l = hr(u);
            return vr((function() {
                l.current = u
            }
            )),
            u
        }(e) : function(e) {
            var t = tr()
              , n = mr([])
              , r = Object(h.a)(n, 2)
              , o = (r[0],
            r[1])
              , a = Xn();
            vr((function() {
                var n = t.current
                  , r = n.getState()
                  , i = ur(n, e, (function(t) {
                    var r;
                    if (!W("recoil_suppress_rerender_in_callback"))
                        return o([]);
                    var a = rr(n, e, n.getState().currentTree);
                    (null === (r = u.current) || void 0 === r ? void 0 : r.is(a)) || o(a)
                }
                ), a);
                if (r.nextTree)
                    n.getState().queuedComponentCallbacks_DEPRECATED.push((function() {
                        u.current = null,
                        o([])
                    }
                    ));
                else {
                    var l;
                    if (!W("recoil_suppress_rerender_in_callback"))
                        return o([]);
                    var c = rr(n, e, n.getState().currentTree);
                    (null === (l = u.current) || void 0 === l ? void 0 : l.is(c)) || o(c)
                }
                return i.release
            }
            ), [a, e, t]);
            var i = rr(t.current, e)
              , u = hr(i);
            return vr((function() {
                u.current = i
            }
            )),
            i
        }(e)
    }
    function Or(e) {
        var t = tr();
        return br(wr(e), e, t)
    }
    function kr(e) {
        var t = tr();
        return yr((function(n) {
            or(t.current, e, n)
        }
        ), [t, e])
    }
    function Sr(e) {
        var t = tr();
        vr((function() {
            return t.current.subscribeToTransactions(e).release
        }
        ), [e, t])
    }
    function Er(e) {
        var t = e.atomValues.toMap()
          , n = at(Fn(t, (function(e, t) {
            var n = Zn(t).persistence_UNSTABLE;
            return null != n && "none" !== n.type && "hasValue" === e.state
        }
        )), (function(e) {
            return e.contents
        }
        ));
        return Wn(e.nonvalidatedAtoms.toMap(), n)
    }
    function Pr(e) {
        var t = hr();
        return vr((function() {
            t.current = e
        }
        )),
        t.current
    }
    function _r() {
        var e = tr();
        return yr((function(t) {
            var n, r = e.current.getState(), o = null !== (n = r.nextTree) && void 0 !== n ? n : r.currentTree, a = t.getStore_INTERNAL().getState().currentTree;
            Qn((function() {
                for (var n = new Set, r = 0, i = [o.atomValues.keys(), a.atomValues.keys()]; r < i.length; r++) {
                    var u, l = A(i[r]);
                    try {
                        for (l.s(); !(u = l.n()).done; ) {
                            var c, s, f = u.value;
                            (null === (c = o.atomValues.get(f)) || void 0 === c ? void 0 : c.contents) !== (null === (s = a.atomValues.get(f)) || void 0 === s ? void 0 : s.contents) && Zn(f).shouldRestoreFromSnapshots && n.add(f)
                        }
                    } catch (p) {
                        l.e(p)
                    } finally {
                        l.f()
                    }
                }
                n.forEach((function(t) {
                    ar(e.current, new nr(t), a.atomValues.has(t) ? V(a.atomValues.get(t)) : Gn)
                }
                )),
                e.current.replaceState((function(e) {
                    return Object(m.a)(Object(m.a)({}, e), {}, {
                        stateID: t.getID_INTERNAL()
                    })
                }
                ))
            }
            ))
        }
        ), [e])
    }
    var xr = function e() {
        x(this, e)
    }
      , jr = new xr;
    function Tr(e) {
        if (W("recoil_memory_managament_2020"))
            return function(e) {
                var t = (Array.isArray(e) ? e : [e]).map((function(e) {
                    return e instanceof cr ? e : e.key
                }
                ))
                  , n = tr();
                vr((function() {
                    if (W("recoil_memory_managament_2020")) {
                        var e = n.current;
                        if (r.current && !fr)
                            window.clearTimeout(r.current),
                            r.current = null;
                        else {
                            I("Did not retain recoil value on render, or committed after timeout elapsed. This is fine, but odd.");
                            var o, a = A(t);
                            try {
                                for (a.s(); !(o = a.n()).done; ) {
                                    var i = o.value;
                                    lr(e, i, 1)
                                }
                            } catch (u) {
                                a.e(u)
                            } finally {
                                a.f()
                            }
                        }
                        return function() {
                            var n, r = A(t);
                            try {
                                for (r.s(); !(n = r.n()).done; ) {
                                    var o = n.value;
                                    lr(e, o, -1)
                                }
                            } catch (u) {
                                r.e(u)
                            } finally {
                                r.f()
                            }
                        }
                    }
                }
                ), [n].concat(f(t)));
                var r = hr()
                  , o = Pr(t);
                if (!fr && (void 0 === o || !Kn(o, t))) {
                    var a, i = n.current, u = A(t);
                    try {
                        for (u.s(); !(a = u.n()).done; ) {
                            var l = a.value;
                            lr(i, l, 1)
                        }
                    } catch (d) {
                        u.e(d)
                    } finally {
                        u.f()
                    }
                    if (o) {
                        var c, s = A(o);
                        try {
                            for (s.s(); !(c = s.n()).done; ) {
                                var p = c.value;
                                lr(i, p, -1)
                            }
                        } catch (d) {
                            s.e(d)
                        } finally {
                            s.f()
                        }
                    }
                    r.current && window.clearTimeout(r.current),
                    r.current = window.setTimeout((function() {
                        r.current = null;
                        var e, n = A(t);
                        try {
                            for (n.s(); !(e = n.n()).done; ) {
                                var o = e.value;
                                lr(i, o, -1)
                            }
                        } catch (d) {
                            n.e(d)
                        } finally {
                            n.f()
                        }
                    }
                    ), gr)
                }
            }(e)
    }
    var Ar = _r
      , Cr = function(e, t) {
        var n = tr()
          , r = _r();
        return yr((function() {
            for (var t = arguments.length, o = new Array(t), a = 0; a < t; a++)
                o[a] = arguments[a];
            function i(e, t) {
                or(n.current, e, t)
            }
            function u(e) {
                or(n.current, e, Gn)
            }
            var l = sr(n.current)
              , c = jr;
            return Qn((function() {
                var t = "useRecoilCallback expects a function that returns a function: it accepts a function of the type (RecoilInterface) => T = R and returns a callback function T => R, where RecoilInterface is an object {snapshot, set, ...} and T and R are the argument and return types of the callback you want to create.  Please see the docs at recoiljs.org for details.";
                if ("function" !== typeof e)
                    throw new Error(t);
                var n = e({
                    set: i,
                    reset: u,
                    snapshot: l,
                    gotoSnapshot: r
                });
                if ("function" !== typeof n)
                    throw new Error(t);
                c = n.apply(void 0, o)
            }
            )),
            c instanceof xr && Bn(!1),
            c
        }
        ), null != t ? [].concat(f(t), [n]) : void 0)
    }
      , Lr = function() {
        var e = tr()
          , t = mr((function() {
            return sr(e.current)
        }
        ))
          , n = Object(h.a)(t, 2)
          , r = n[0]
          , o = n[1]
          , a = Pr(r)
          , i = hr();
        return vr((function() {
            return i.current && !fr && window.clearTimeout(i.current),
            r.retain()
        }
        ), [r]),
        Sr(yr((function(e) {
            return o(sr(e))
        }
        ), [])),
        a === r || fr || (i.current && (null === a || void 0 === a || a.release(),
        window.clearTimeout(i.current)),
        r.retain(),
        i.current = window.setTimeout((function() {
            r.release(),
            i.current = null
        }
        ), gr)),
        r
    }
      , Rr = function(e) {
        return [Or(e), kr(e)]
    }
      , Mr = function(e) {
        return [wr(e), kr(e)]
    }
      , Dr = function(e) {
        Sr(yr((function(t) {
            var n = sr(t, "current")
              , r = sr(t, "previous");
            e({
                snapshot: n,
                previousSnapshot: r
            })
        }
        ), [e]))
    }
      , Nr = Or
      , Vr = wr
      , Ir = Tr
      , Ur = function(e) {
        var t = tr();
        return yr((function() {
            or(t.current, e, Gn)
        }
        ), [t, e])
    }
      , Fr = kr
      , zr = function() {
        var e = tr();
        return function(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            Qn((function() {
                e.current.addTransactionMetadata(n),
                t.forEach((function(t, n) {
                    return ir(e.current, new nr(n), t)
                }
                ))
            }
            ))
        }
    }
      , Br = function(e) {
        Sr(yr((function(t) {
            var n = t.getState().previousTree
              , r = t.getState().currentTree;
            n || (I("Transaction subscribers notified without a previous tree being present -- this is a bug in Recoil"),
            n = t.getState().currentTree);
            var o = Er(r)
              , a = Er(n)
              , i = at(Jn, (function(e) {
                var t, n, r, o;
                return {
                    persistence_UNSTABLE: {
                        type: null !== (t = null === (n = e.persistence_UNSTABLE) || void 0 === n ? void 0 : n.type) && void 0 !== t ? t : "none",
                        backButton: null !== (r = null === (o = e.persistence_UNSTABLE) || void 0 === o ? void 0 : o.backButton) && void 0 !== r && r
                    }
                }
            }
            ))
              , u = zn(r.dirtyAtoms, (function(e) {
                return o.has(e) || a.has(e)
            }
            ));
            e({
                atomValues: o,
                previousAtomValues: a,
                atomInfo: i,
                modifiedAtoms: u,
                transactionMetadata: Object(m.a)({}, r.transactionMetadata)
            })
        }
        ), [e]))
    }
      , Hr = Ae
      , Wr = Vn;
    var qr = function() {
        var e = Wr();
        return function(t) {
            var n = t.key;
            return Hr(e.current, e.current.getState().currentTree, n)
        }
    }
      , $r = Un
      , Kr = Vn
      , Yr = M.a.useMemo;
    var Xr = function() {
        var e = Kr().current;
        return Yr((function() {
            return function(t) {
                var n = t.children;
                return M.a.createElement($r, {
                    store_INTERNAL: e
                }, n)
            }
        }
        ), [e])
    };
    var Qr = function(e) {
        return !!e && "function" === typeof e.then
    }
      , Gr = function e() {
        x(this, e)
    }
      , Zr = new Gr
      , Jr = {
        getValue: function() {
            if ("loading" === this.state)
                throw this.contents.then((function(e) {
                    return e.__value
                }
                ));
            if ("hasValue" !== this.state)
                throw this.contents;
            return this.contents
        },
        toPromise: function() {
            return "hasValue" === this.state ? Promise.resolve(this.contents) : "hasError" === this.state ? Promise.reject(this.contents) : this.contents.then((function(e) {
                return e.__value
            }
            ))
        },
        valueMaybe: function() {
            return "hasValue" === this.state ? this.contents : void 0
        },
        valueOrThrow: function() {
            if ("hasValue" !== this.state)
                throw new Error('Loadable expected value, but in "'.concat(this.state, '" state'));
            return this.contents
        },
        errorMaybe: function() {
            return "hasError" === this.state ? this.contents : void 0
        },
        errorOrThrow: function() {
            if ("hasError" !== this.state)
                throw new Error('Loadable expected error, but in "'.concat(this.state, '" state'));
            return this.contents
        },
        promiseMaybe: function() {
            return "loading" === this.state ? this.contents.then((function(e) {
                return e.__value
            }
            )) : void 0
        },
        promiseOrThrow: function() {
            if ("loading" !== this.state)
                throw new Error('Loadable expected promise, but in "'.concat(this.state, '" state'));
            return this.contents.then((function(e) {
                return e.__value
            }
            ))
        },
        is: function(e) {
            return e.state === this.state && e.contents === this.contents
        },
        map: function(e) {
            var t = this;
            if ("hasError" === this.state)
                return this;
            if ("hasValue" === this.state)
                try {
                    var n = e(this.contents);
                    return Qr(n) ? no(n) : eo(n)
                } catch (r) {
                    return Qr(r) ? no(r.next((function() {
                        return e(t.contents)
                    }
                    ))) : to(r)
                }
            if ("loading" === this.state)
                return no(this.contents.then(e).catch((function(n) {
                    if (Qr(n))
                        return n.then((function() {
                            return e(t.contents)
                        }
                        ));
                    throw n
                }
                )));
            throw new Error("Invalid Loadable state")
        }
    };
    function eo(e) {
        return Object.freeze(Object(m.a)({
            state: "hasValue",
            contents: e
        }, Jr))
    }
    function to(e) {
        return Object.freeze(Object(m.a)({
            state: "hasError",
            contents: e
        }, Jr))
    }
    function no(e) {
        return Object.freeze(Object(m.a)({
            state: "loading",
            contents: e
        }, Jr))
    }
    var ro = {
        loadableWithValue: eo,
        loadableWithError: to,
        loadableWithPromise: no,
        loadableLoading: function() {
            return no(new Promise((function() {}
            )))
        },
        loadableAll: function(e) {
            return e.every((function(e) {
                return "hasValue" === e.state
            }
            )) ? eo(e.map((function(e) {
                return e.contents
            }
            ))) : e.some((function(e) {
                return "hasError" === e.state
            }
            )) ? to(V(e.find((function(e) {
                return "hasError" === e.state
            }
            )), "Invalid loadable passed to loadableAll").contents) : no(Promise.all(e.map((function(e) {
                return e.contents
            }
            ))).then((function(e) {
                return {
                    __value: e
                }
            }
            )))
        },
        Canceled: Gr,
        CANCELED: Zr
    };
    function oo(e, t, n) {
        if ("string" === typeof e && !e.includes('"') && !e.includes("\\"))
            return '"'.concat(e, '"');
        switch (typeof e) {
        case "undefined":
            return "";
        case "boolean":
            return e ? "true" : "false";
        case "number":
        case "symbol":
            return String(e);
        case "string":
            return JSON.stringify(e);
        case "function":
            if (!0 !== (null === t || void 0 === t ? void 0 : t.allowFunctions))
                throw new Error("Attempt to serialize function in a Recoil cache key");
            return "__FUNCTION(".concat(e.name, ")__")
        }
        if (null === e)
            return "null";
        var r;
        if ("object" !== typeof e)
            return null !== (r = JSON.stringify(e)) && void 0 !== r ? r : "";
        if (Qr(e))
            return "__PROMISE__";
        if (Array.isArray(e))
            return "[".concat(e.map((function(e, n) {
                return oo(e, t, n.toString())
            }
            )), "]");
        if ("function" === typeof e.toJSON)
            return oo(e.toJSON(n), t, n);
        if (e instanceof Map) {
            var o, a = {}, i = A(e);
            try {
                for (i.s(); !(o = i.n()).done; ) {
                    var u = Object(h.a)(o.value, 2)
                      , l = u[0]
                      , c = u[1];
                    a["string" === typeof l ? l : oo(l, t)] = c
                }
            } catch (s) {
                i.e(s)
            } finally {
                i.f()
            }
            return oo(a, t, n)
        }
        return e instanceof Set ? oo(Array.from(e).sort((function(e, n) {
            return oo(e, t).localeCompare(oo(n, t))
        }
        )), t, n) : void 0 !== Symbol && null != e[Symbol.iterator] && "function" === typeof e[Symbol.iterator] ? oo(Array.from(e), t, n) : "{".concat(Object.keys(e).filter((function(t) {
            return void 0 !== e[t]
        }
        )).sort().map((function(n) {
            return "".concat(oo(n, t), ":").concat(oo(e[n], t, n))
        }
        )).join(","), "}")
    }
    var ao = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            allowFunctions: !1
        };
        return oo(e, t)
    }
      , io = function() {
        function e(t) {
            var n, r, o;
            x(this, e),
            K(this, "_numLeafs", void 0),
            K(this, "_root", void 0),
            K(this, "_onHit", void 0),
            K(this, "_onSet", void 0),
            K(this, "_mapNodeValue", void 0),
            this._numLeafs = 0,
            this._root = null,
            this._onHit = null !== (n = null === t || void 0 === t ? void 0 : t.onHit) && void 0 !== n ? n : function() {}
            ,
            this._onSet = null !== (r = null === t || void 0 === t ? void 0 : t.onSet) && void 0 !== r ? r : function() {}
            ,
            this._mapNodeValue = null !== (o = null === t || void 0 === t ? void 0 : t.mapNodeValue) && void 0 !== o ? o : function(e) {
                return e
            }
        }
        return v(e, [{
            key: "size",
            value: function() {
                return this._numLeafs
            }
        }, {
            key: "root",
            value: function() {
                return this._root
            }
        }, {
            key: "get",
            value: function(e, t) {
                var n;
                return null === (n = this.getLeafNode(e, t)) || void 0 === n ? void 0 : n.value
            }
        }, {
            key: "getLeafNode",
            value: function(e, t) {
                var n = this;
                return uo(this.root(), (function(t) {
                    return n._mapNodeValue(e(t))
                }
                ), {
                    onNodeVisit: function(e) {
                        null === t || void 0 === t || t.onNodeVisit(e),
                        "leaf" === e.type && n._onHit(e)
                    }
                })
            }
        }, {
            key: "set",
            value: function(e, t, n) {
                var r, o = this, a = lo(this.root(), e.map((function(e) {
                    var t = Object(h.a)(e, 2)
                      , n = t[0]
                      , r = t[1];
                    return [n, o._mapNodeValue(r)]
                }
                )), null, t, null, {
                    onNodeVisit: function(e) {
                        null === n || void 0 === n || n.onNodeVisit(e),
                        "leaf" === e.type && (r = e)
                    }
                });
                this.root() || (this._root = a),
                this._numLeafs++,
                this._onSet(V(r))
            }
        }, {
            key: "delete",
            value: function(e) {
                if (!this.root())
                    return !1;
                var t = V(this.root());
                return !!co(t, e, e.parent) && (e === t || "branch" === t.type && !t.branches.size ? (this._root = null,
                this._numLeafs = 0,
                !0) : (this._numLeafs -= fo(e),
                !0))
            }
        }, {
            key: "clear",
            value: function() {
                this._numLeafs = 0,
                this._root = null
            }
        }]),
        e
    }()
      , uo = function e(t, n, r) {
        var o;
        if (null != t) {
            if (null === r || void 0 === r || null === (o = r.onNodeVisit) || void 0 === o || o.call(r, t),
            "leaf" === t.type)
                return t;
            var a = n(t.nodeKey);
            return e(t.branches.get(a), n, r)
        }
    }
      , lo = function e(t, n, r, o, a, i) {
        var u, l;
        if (null == t)
            if (0 === n.length)
                l = {
                    type: "leaf",
                    value: o,
                    parent: r,
                    branchKey: a
                };
            else {
                var s = c(n)
                  , f = s[0]
                  , p = s.slice(1)
                  , d = Object(h.a)(f, 2)
                  , y = d[0]
                  , v = d[1];
                (l = {
                    type: "branch",
                    nodeKey: y,
                    parent: r,
                    branches: new Map,
                    branchKey: a
                }).branches.set(v, e(null, p, l, o, v, i))
            }
        else if (l = t,
        n.length) {
            var m = c(n)
              , g = m[0]
              , b = m.slice(1)
              , w = Object(h.a)(g, 2)
              , O = w[0]
              , k = w[1];
            ("branch" !== t.type || t.nodeKey !== O) && Bn(!1),
            t.branches.set(k, e(t.branches.get(k), b, t, o, k, i))
        }
        return null === i || void 0 === i || null === (u = i.onNodeVisit) || void 0 === u || u.call(i, l),
        l
    }
      , co = function(e, t, n) {
        return n ? (n.branches.delete(t.branchKey),
        so(e, n, n.parent)) : e === t
    }
      , so = function e(t, n, r) {
        return r ? (0 === n.branches.size && r.branches.delete(n.branchKey),
        e(t, r, r.parent)) : t === n
    }
      , fo = function e(t) {
        return "leaf" === t.type ? 1 : Array.from(t.branches.values()).reduce((function(t, n) {
            return t + e(n)
        }
        ), 0)
    }
      , po = {
        TreeCache: io
    }.TreeCache
      , yo = Object.freeze({
        __proto__: null,
        TreeCache: po
    })
      , vo = {
        LRUCache: function() {
            function e(t) {
                var n;
                x(this, e),
                K(this, "_maxSize", void 0),
                K(this, "_size", void 0),
                K(this, "_head", void 0),
                K(this, "_tail", void 0),
                K(this, "_map", void 0),
                K(this, "_keyMapper", void 0),
                this._maxSize = t.maxSize,
                this._size = 0,
                this._head = null,
                this._tail = null,
                this._map = new Map,
                this._keyMapper = null !== (n = t.mapKey) && void 0 !== n ? n : function(e) {
                    return e
                }
            }
            return v(e, [{
                key: "head",
                value: function() {
                    return this._head
                }
            }, {
                key: "tail",
                value: function() {
                    return this._tail
                }
            }, {
                key: "size",
                value: function() {
                    return this._size
                }
            }, {
                key: "maxSize",
                value: function() {
                    return this._maxSize
                }
            }, {
                key: "has",
                value: function(e) {
                    return this._map.has(this._keyMapper(e))
                }
            }, {
                key: "get",
                value: function(e) {
                    var t = this._keyMapper(e)
                      , n = this._map.get(t);
                    if (n)
                        return this.set(e, n.value),
                        n.value
                }
            }, {
                key: "set",
                value: function(e, t) {
                    var n = this._keyMapper(e);
                    this._map.get(n) && this.delete(e);
                    var r = this.head()
                      , o = {
                        key: e,
                        right: r,
                        left: null,
                        value: t
                    };
                    r ? r.left = o : this._tail = o,
                    this._map.set(n, o),
                    this._head = o,
                    this._size++,
                    this._maybeDeleteLRU()
                }
            }, {
                key: "_maybeDeleteLRU",
                value: function() {
                    this.size() > this.maxSize() && this.deleteLru()
                }
            }, {
                key: "deleteLru",
                value: function() {
                    var e = this.tail();
                    e && this.delete(e.key)
                }
            }, {
                key: "delete",
                value: function(e) {
                    var t = this._keyMapper(e);
                    if (this._size && this._map.has(t)) {
                        var n = V(this._map.get(t))
                          , r = n.right
                          , o = n.left;
                        r && (r.left = n.left),
                        o && (o.right = n.right),
                        n === this.head() && (this._head = r),
                        n === this.tail() && (this._tail = o),
                        this._map.delete(t),
                        this._size--
                    }
                }
            }, {
                key: "clear",
                value: function() {
                    this._size = 0,
                    this._head = null,
                    this._tail = null,
                    this._map = new Map
                }
            }]),
            e
        }()
    }.LRUCache
      , ho = Object.freeze({
        __proto__: null,
        LRUCache: vo
    })
      , mo = ho.LRUCache
      , go = yo.TreeCache;
    var bo = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
            return e
        }
          , n = new mo({
            maxSize: e
        })
          , r = new go({
            mapNodeValue: t,
            onHit: function(e) {
                n.set(e, !0)
            },
            onSet: function(t) {
                var o = n.tail();
                n.set(t, !0),
                o && r.size() > e && r.delete(o.key)
            }
        });
        return r
    }
      , wo = yo.TreeCache
      , Oo = {
        equality: "reference",
        eviction: "none",
        maxSize: 1 / 0
    };
    function ko(e) {
        switch (e) {
        case "reference":
            return function(e) {
                return e
            }
            ;
        case "value":
            return function(e) {
                return ao(e)
            }
        }
        throw new Error("Unrecognized equality policy ".concat(e))
    }
    function So(e, t, n) {
        switch (e) {
        case "none":
            return new wo({
                mapNodeValue: n
            });
        case "lru":
            return bo(V(t), n)
        }
        throw new Error("Unrecognized eviction policy ".concat(e))
    }
    var Eo = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oo
          , t = e.equality
          , n = void 0 === t ? Oo.equality : t
          , r = e.eviction
          , o = void 0 === r ? Oo.eviction : r
          , a = e.maxSize
          , i = void 0 === a ? Oo.maxSize : a
          , u = ko(n)
          , l = So(o, i, u);
        return l
    };
    var Po = function(e) {
        return function() {
            return null
        }
    }
      , _o = ro.CANCELED
      , xo = ro.Canceled
      , jo = ro.loadableWithError
      , To = ro.loadableWithPromise
      , Ao = ro.loadableWithValue
      , Co = Pe
      , Lo = _e
      , Ro = xe
      , Mo = ct
      , Do = fe.DEFAULT_VALUE
      , No = fe.RecoilValueNotReady
      , Vo = fe.getConfigDeletionHandler
      , Io = fe.registerNode
      , Uo = ne.isRecoilValue
      , Fo = ne.AbstractRecoilValue
      , zo = Ge.setRecoilValueLoadable
      , Bo = Dt
      , Ho = Po
      , Wo = []
      , qo = new Map
      , $o = function() {
        var e = 0;
        return function() {
            return e++
        }
    }();
    var Ko = function(e) {
        var t = e.key
          , n = e.get
          , r = e.cachePolicy_UNSTABLE
          , o = null != e.set ? e.set : void 0
          , a = Eo(null !== r && void 0 !== r ? r : {
            equality: "reference",
            eviction: "none"
        })
          , i = Bo(e.retainedBy_UNSTABLE)
          , u = new Map
          , l = 0;
        function c() {
            return !W("recoil_memory_managament_2020") || l > 0
        }
        function s(e) {
            return u.has(e) || u.set(e, {
                depValuesDiscoveredSoFarDuringAsyncWork: null,
                latestLoadable: null,
                latestExecutionId: null,
                stateVersion: null
            }),
            V(u.get(e))
        }
        function f(e) {
            return l++,
            e.getState().knownSelectors.add(t),
            function() {
                l--,
                e.getState().knownSelectors.delete(t),
                u.delete(e)
            }
        }
        function p() {
            return void 0 !== Vo(t) && !c()
        }
        function d(e, t, n) {
            if ("loading" === t.state) {
                var r = qo.get(n);
                null == r && qo.set(n, r = new Set),
                r.add(e)
            }
        }
        function y(e, t, n) {
            if (t.atomValues.has(n))
                return V(t.atomValues.get(n));
            var r = Co(e, t, n)
              , o = e.getState().knownSelectors.has(n);
            return "loading" !== r.state && o && t.atomValues.set(n, r),
            r
        }
        function v(e, n, r, o, a) {
            return n.then((function(n) {
                if (!c())
                    return j(e, a),
                    _o;
                var i = Ao(n);
                return L(n),
                R(r, k(o), i),
                b(e, r, new Set(o.keys()), a),
                g(e, i, a),
                {
                    __value: n,
                    __key: t
                }
            }
            )).catch((function(t) {
                if (!c())
                    return j(e, a),
                    _o;
                if (T(e, a) && x(o, e, a),
                Qr(t))
                    return m(e, t, r, o, a);
                var n = jo(t);
                throw L(t),
                R(r, k(o), n),
                b(e, r, new Set(o.keys()), a),
                g(e, n, a),
                t
            }
            ))
        }
        function m(e, n, r, o, a) {
            return n.then((function(n) {
                if (!c())
                    return j(e, a),
                    _o;
                if (n instanceof xo)
                    return I("Selector was released while it had dependencies"),
                    _o;
                var o = null !== n && void 0 !== n ? n : {}
                  , i = o.__key
                  , u = o.__value
                  , l = !0;
                null != i && (r.atomValues.set(i, Ao(u)),
                l = !1);
                var s = O(e, r, a, l)
                  , f = Object(h.a)(s, 2)
                  , p = f[0]
                  , d = f[1];
                if (T(e, a) && x(d, e, a),
                C(p),
                "loading" !== p.state && (R(r, k(d), p),
                b(e, r, new Set(d.keys()), a),
                g(e, p, a)),
                "hasError" === p.state)
                    throw p.contents;
                return "hasValue" === p.state ? {
                    __value: p.contents,
                    __key: t
                } : p.contents
            }
            )).catch((function(t) {
                if (!c())
                    return j(e, a),
                    _o;
                var n = jo(t);
                throw L(t),
                R(r, k(o), jo(t)),
                b(e, r, new Set(o.keys()), a),
                g(e, n, a),
                t
            }
            ))
        }
        function g(e, n, r) {
            T(e, r) && (_(n, e),
            function(e, n) {
                var r = qo.get(n);
                if (void 0 !== r) {
                    var o, a = A(r);
                    try {
                        for (a.s(); !(o = a.n()).done; ) {
                            var i = o.value;
                            zo(i, new Fo(t), e)
                        }
                    } catch (u) {
                        a.e(u)
                    } finally {
                        a.f()
                    }
                    qo.delete(n)
                }
            }(n, r))
        }
        function b(e, n, r, o) {
            var a, i, u, l, c, s, f;
            (T(e, o) || n.version === (null === (a = e.getState()) || void 0 === a || null === (i = a.currentTree) || void 0 === i ? void 0 : i.version) || n.version === (null === (u = e.getState()) || void 0 === u || null === (l = u.nextTree) || void 0 === l ? void 0 : l.version)) && Mo(new Map([[t, r]]), e, null !== (c = null === (s = e.getState()) || void 0 === s || null === (f = s.nextTree) || void 0 === f ? void 0 : f.version) && void 0 !== c ? c : e.getState().currentTree.version)
        }
        function w(e, t, n, r, o) {
            n.add(r),
            b(e, t, n, o)
        }
        function O(e, r, o) {
            var a, i, u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], l = Ho(t), c = !1, s = new Map, f = new Set;
            function p(t) {
                var n = t.key;
                w(e, r, f, n, o);
                var a = u ? Co(e, r, n) : y(e, r, n);
                if (s.set(n, a),
                "hasValue" === a.state)
                    return a.contents;
                throw a.contents
            }
            b(e, r, f, o);
            try {
                a = n({
                    get: p
                }),
                a = Uo(a) ? p(a) : a,
                Qr(a) ? a = v(e, a, r, s, o).finally(l) : l()
            } catch (d) {
                Qr(a = d) ? a = m(e, a, r, s, o).finally(l) : (c = !0,
                l())
            }
            return C(i = c ? jo(a) : Qr(a) ? To(a) : Ao(a)),
            [i, s]
        }
        function k(e) {
            return Array.from(e.entries()).map((function(e) {
                var t = Object(h.a)(e, 2);
                return [t[0], t[1].contents]
            }
            ))
        }
        function S(e, t) {
            var n = $o()
              , r = O(e, t, n)
              , o = Object(h.a)(r, 2)
              , a = o[0]
              , i = o[1];
            return _(a, e, i, n, t),
            function(e, t, n) {
                "loading" !== n.state && R(e, t, n)
            }(t, k(i), a),
            d(e, a, n),
            a
        }
        function E(e, n) {
            var r = function(e, n) {
                var r = new Set
                  , o = s(e)
                  , i = a.get((function(t) {
                    return "string" !== typeof t && Bn(!1),
                    y(e, n, t).contents
                }
                ), {
                    onNodeVisit: function(e) {
                        "branch" === e.type && e.nodeKey !== t && "string" === typeof e.nodeKey && r.add(e.nodeKey)
                    }
                });
                return i && b(e, n, r, o.latestExecutionId),
                i
            }(e, n);
            if (null != r)
                return _(r, e),
                r;
            var o = function(e, t) {
                var n, r = null !== (n = Array.from(u.entries()).find((function(n) {
                    var r = Object(h.a)(n, 2)[1];
                    return null != r.latestLoadable && null != r.latestExecutionId && !function(e, t) {
                        var n, r, o = s(e), a = null !== (n = o.depValuesDiscoveredSoFarDuringAsyncWork) && void 0 !== n ? n : new Map, i = Array((null !== (r = P.get(t.version)) && void 0 !== r ? r : new Map).entries()), u = P.has(t.version) && i.length === a.size && i.every((function(e) {
                            var t = Object(h.a)(e, 2)
                              , n = t[0]
                              , r = t[1];
                            return a.get(n) === r
                        }
                        ));
                        if (null == a || t.version === o.stateVersion || u)
                            return !1;
                        return P.set(t.version, new Map(a)),
                        Array.from(a).some((function(n) {
                            var r = Object(h.a)(n, 2)
                              , o = r[0]
                              , a = r[1]
                              , i = y(e, t, o);
                            return i.contents !== a.contents && !("loading" === a.state && "loading" !== i.state)
                        }
                        ))
                    }(e, t)
                }
                ))) && void 0 !== n ? n : [];
                return Object(h.a)(r, 2)[1]
            }(e, n);
            if (o) {
                var i = o;
                return d(e, V(i.latestLoadable), V(i.latestExecutionId)),
                V(i.latestLoadable)
            }
            return S(e, n)
        }
        var P = new Map;
        function _(e, t, n, r, o) {
            var a = s(t);
            "loading" === e.state ? (a.depValuesDiscoveredSoFarDuringAsyncWork = n,
            a.latestExecutionId = r,
            a.latestLoadable = e,
            a.stateVersion = null === o || void 0 === o ? void 0 : o.version) : (a.depValuesDiscoveredSoFarDuringAsyncWork = null,
            a.latestExecutionId = null,
            a.latestLoadable = null,
            a.stateVersion = null)
        }
        function x(e, t, n) {
            var r = s(t);
            T(t, n) && (r.depValuesDiscoveredSoFarDuringAsyncWork = e)
        }
        function j(e, t) {
            T(e, t) && u.delete(e)
        }
        function T(e, t) {
            return t === s(e).latestExecutionId
        }
        function C(e) {
            "loading" !== e.state && L(e.contents)
        }
        function L(e) {
            0
        }
        function R(e, n, r) {
            e.atomValues.set(t, r),
            a.set(n, r)
        }
        function M(e, t) {
            return a.get((function(n) {
                "string" !== typeof n && Bn(!1);
                var r = Lo(e, t, n);
                return null === r || void 0 === r ? void 0 : r.contents
            }
            ))
        }
        function D(e, n) {
            return function(e) {
                if (Wo.includes(t)) {
                    var n = "Recoil selector has circular dependencies: ".concat(Wo.slice(Wo.indexOf(t)).join(" \u2192 "));
                    return jo(new Error(n))
                }
                Wo.push(t);
                try {
                    return e()
                } finally {
                    Wo.pop()
                }
            }((function() {
                return E(e, n)
            }
            ))
        }
        function N(e) {
            e.atomValues.delete(t)
        }
        if (null != o) {
            return Io({
                key: t,
                peek: M,
                get: D,
                set: function(e, t, n) {
                    var r = !1
                      , a = new Map;
                    function i(n) {
                        var o = n.key;
                        if (r)
                            throw new Error("Recoil: Async selector sets are not currently supported.");
                        var a = y(e, t, o);
                        if ("hasValue" === a.state)
                            return a.contents;
                        throw "loading" === a.state ? new No(o) : a.contents
                    }
                    function u(n, o) {
                        if (r)
                            throw new Error("Recoil: Async selector sets are not currently supported.");
                        var u = "function" === typeof o ? o(i(n)) : o;
                        Ro(e, t, n.key, u).forEach((function(e, t) {
                            return a.set(t, e)
                        }
                        ))
                    }
                    var l = o({
                        set: u,
                        get: i,
                        reset: function(e) {
                            u(e, Do)
                        }
                    }, n);
                    if (void 0 !== l)
                        throw Qr(l) ? new Error("Recoil: Async selector sets are not currently supported.") : new Error("Recoil: selector set should be a void function.");
                    return r = !0,
                    a
                },
                init: f,
                invalidate: N,
                shouldDeleteConfigOnRelease: p,
                dangerouslyAllowMutability: e.dangerouslyAllowMutability,
                shouldRestoreFromSnapshots: !1,
                retainedBy: i
            })
        }
        return Io({
            key: t,
            peek: M,
            get: D,
            init: f,
            invalidate: N,
            shouldDeleteConfigOnRelease: p,
            dangerouslyAllowMutability: e.dangerouslyAllowMutability,
            shouldRestoreFromSnapshots: !1,
            retainedBy: i
        })
    }
      , Yo = ro.loadableWithError
      , Xo = ro.loadableWithPromise
      , Qo = ro.loadableWithValue
      , Go = fe.DEFAULT_VALUE
      , Zo = fe.DefaultValue
      , Jo = fe.getConfigDeletionHandler
      , ea = fe.registerNode
      , ta = fe.setConfigDeletionHandler
      , na = ne.isRecoilValue
      , ra = Ge.markRecoilValueModified
      , oa = Ge.setRecoilValue
      , aa = Ge.setRecoilValueLoadable
      , ia = Dt;
    function ua(e) {
        var t = e.key
          , n = e.persistence_UNSTABLE
          , r = ia(e.retainedBy_UNSTABLE)
          , o = 0
          , a = Qr(e.default) ? Xo(e.default.then((function(e) {
            return a = Qo(e),
            {
                __key: t,
                __value: e
            }
        }
        )).catch((function(e) {
            throw a = Yo(e),
            e
        }
        ))) : Qo(e.default)
          , i = void 0
          , u = new Map;
        var l = ea({
            key: t,
            peek: function(e, n) {
                var r, o, u;
                return null !== (r = null !== (o = n.atomValues.get(t)) && void 0 !== o ? o : null === (u = i) || void 0 === u ? void 0 : u[1]) && void 0 !== r ? r : a
            },
            get: function(e, r) {
                if (r.atomValues.has(t))
                    return V(r.atomValues.get(t));
                if (r.nonvalidatedAtoms.has(t)) {
                    if (null != i)
                        return i;
                    if (null == n)
                        return $("Tried to restore a persisted value for atom ".concat(t, " but it has no persistence settings.")),
                        a;
                    var o = r.nonvalidatedAtoms.get(t)
                      , u = n.validator(o, Go)
                      , l = u instanceof Zo ? a : Qo(u);
                    return i = l
                }
                return a
            },
            set: function(e, n, r) {
                if (n.atomValues.has(t)) {
                    var o = V(n.atomValues.get(t));
                    if ("hasValue" === o.state && r === o.contents)
                        return new Map
                } else if (!n.nonvalidatedAtoms.has(t) && r instanceof Zo)
                    return new Map;
                return i = void 0,
                (new Map).set(t, Qo(r))
            },
            init: function(n, r, i) {
                o++;
                var c = n.getState().knownAtoms.has(t);
                if (n.getState().knownAtoms.add(t),
                "loading" === a.state) {
                    var s = function() {
                        var e;
                        (null !== (e = n.getState().nextTree) && void 0 !== e ? e : n.getState().currentTree).atomValues.has(t) || ra(n, l)
                    };
                    a.contents.then(s).catch(s)
                }
                var f = Go
                  , p = null;
                if (null != e.effects_UNSTABLE && !c) {
                    var d, y = !0, v = function(e) {
                        return function(t) {
                            if (y) {
                                var r = f instanceof Zo || Qr(f) ? "hasValue" === a.state ? a.contents : Go : f;
                                f = "function" === typeof t ? t(r) : t
                            } else {
                                if (Qr(t))
                                    throw new Error("Setting atoms to async values is not implemented.");
                                "function" !== typeof t && (p = {
                                    effect: e,
                                    value: t
                                }),
                                oa(n, l, "function" === typeof t ? function(n) {
                                    var r = t(n);
                                    return p = {
                                        effect: e,
                                        value: r
                                    },
                                    r
                                }
                                : t)
                            }
                        }
                    }, h = function(e) {
                        return function() {
                            return v(e)(Go)
                        }
                    }, m = function(e) {
                        return function(r) {
                            n.subscribeToTransactions((function(n) {
                                var o, i = n.getState(), u = i.currentTree, l = i.previousTree;
                                l || (I("Transaction subscribers notified without a next tree being present -- this is a bug in Recoil"),
                                l = u);
                                var c = u.atomValues.get(t);
                                if (null == c || "hasValue" === c.state) {
                                    var s, f, d, y = null != c ? c.contents : Go, v = null !== (s = l.atomValues.get(t)) && void 0 !== s ? s : a, h = "hasValue" === v.state ? v.contents : Go;
                                    (null === (f = p) || void 0 === f ? void 0 : f.effect) === e && (null === (d = p) || void 0 === d ? void 0 : d.value) === y || r(y, h)
                                }
                                (null === (o = p) || void 0 === o ? void 0 : o.effect) === e && (p = null)
                            }
                            ), t)
                        }
                    }, g = A(null !== (b = e.effects_UNSTABLE) && void 0 !== b ? b : []);
                    try {
                        for (g.s(); !(d = g.n()).done; ) {
                            var b, w = d.value, O = w({
                                node: l,
                                trigger: i,
                                setSelf: v(w),
                                resetSelf: h(w),
                                onSet: m(w)
                            });
                            null != O && u.set(n, O)
                        }
                    } catch (E) {
                        g.e(E)
                    } finally {
                        g.f()
                    }
                    y = !1
                }
                if (!(f instanceof Zo)) {
                    var k, S = Qr(f) ? Xo(function(e, n) {
                        var r = n.then((function(n) {
                            var o, a;
                            return (null === (a = (null !== (o = e.getState().nextTree) && void 0 !== o ? o : e.getState().currentTree).atomValues.get(t)) || void 0 === a ? void 0 : a.contents) === r && oa(e, l, n),
                            {
                                __key: t,
                                __value: n
                            }
                        }
                        )).catch((function(n) {
                            var o, a;
                            throw (null === (a = (null !== (o = e.getState().nextTree) && void 0 !== o ? o : e.getState().currentTree).atomValues.get(t)) || void 0 === a ? void 0 : a.contents) === r && aa(e, l, Yo(n)),
                            n
                        }
                        ));
                        return r
                    }(n, f)) : Qo(f);
                    r.atomValues.set(t, S),
                    null === (k = n.getState().nextTree) || void 0 === k || k.atomValues.set(t, S)
                }
                return function() {
                    var e;
                    o--,
                    null === (e = u.get(n)) || void 0 === e || e(),
                    u.delete(n),
                    n.getState().knownAtoms.delete(t)
                }
            },
            invalidate: function() {
                i = void 0
            },
            shouldDeleteConfigOnRelease: function() {
                return void 0 !== Jo(t) && o <= 0
            },
            dangerouslyAllowMutability: e.dangerouslyAllowMutability,
            persistence_UNSTABLE: e.persistence_UNSTABLE ? {
                type: e.persistence_UNSTABLE.type,
                backButton: e.persistence_UNSTABLE.backButton
            } : void 0,
            shouldRestoreFromSnapshots: !0,
            retainedBy: r
        });
        return l
    }
    function la(e) {
        var t = e.default
          , n = Object(o.a)(e, ["default"]);
        return na(t) ? function(e) {
            var t = la(Object(m.a)(Object(m.a)({}, e), {}, {
                default: Go,
                persistence_UNSTABLE: void 0 === e.persistence_UNSTABLE ? void 0 : Object(m.a)(Object(m.a)({}, e.persistence_UNSTABLE), {}, {
                    validator: function(t) {
                        return t instanceof Zo ? t : V(e.persistence_UNSTABLE).validator(t, Go)
                    }
                }),
                effects_UNSTABLE: e.effects_UNSTABLE
            }))
              , n = Ko({
                key: "".concat(e.key, "__withFallback"),
                get: function(n) {
                    var r = (0,
                    n.get)(t);
                    return r instanceof Zo ? e.default : r
                },
                set: function(e, n) {
                    return (0,
                    e.set)(t, n)
                },
                dangerouslyAllowMutability: e.dangerouslyAllowMutability
            });
            return ta(n.key, Jo(e.key)),
            n
        }(Object(m.a)(Object(m.a)({}, n), {}, {
            default: t
        })) : ua(Object(m.a)(Object(m.a)({}, n), {}, {
            default: t
        }))
    }
    var ca = la
      , sa = {
        MapCache: function() {
            function e(t) {
                var n;
                x(this, e),
                K(this, "_map", void 0),
                K(this, "_keyMapper", void 0),
                this._map = new Map,
                this._keyMapper = null !== (n = null === t || void 0 === t ? void 0 : t.mapKey) && void 0 !== n ? n : function(e) {
                    return e
                }
            }
            return v(e, [{
                key: "size",
                value: function() {
                    return this._map.size
                }
            }, {
                key: "has",
                value: function(e) {
                    return this._map.has(this._keyMapper(e))
                }
            }, {
                key: "get",
                value: function(e) {
                    return this._map.get(this._keyMapper(e))
                }
            }, {
                key: "set",
                value: function(e, t) {
                    this._map.set(this._keyMapper(e), t)
                }
            }, {
                key: "delete",
                value: function(e) {
                    this._map.delete(this._keyMapper(e))
                }
            }, {
                key: "clear",
                value: function() {
                    this._map.clear()
                }
            }]),
            e
        }()
    }.MapCache
      , fa = Object.freeze({
        __proto__: null,
        MapCache: sa
    })
      , pa = ho.LRUCache
      , da = fa.MapCache
      , ya = {
        equality: "reference",
        eviction: "none",
        maxSize: 1 / 0
    };
    function va(e) {
        switch (e) {
        case "reference":
            return function(e) {
                return e
            }
            ;
        case "value":
            return function(e) {
                return ao(e)
            }
        }
        throw new Error("Unrecognized equality policy ".concat(e))
    }
    function ha(e, t, n) {
        switch (e) {
        case "none":
            return new da({
                mapKey: n
            });
        case "lru":
            return new pa({
                mapKey: n,
                maxSize: V(t)
            })
        }
        throw new Error("Unrecognized eviction policy ".concat(e))
    }
    var ma = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ya
          , t = e.equality
          , n = void 0 === t ? ya.equality : t
          , r = e.eviction
          , o = void 0 === r ? ya.eviction : r
          , a = e.maxSize
          , i = void 0 === a ? ya.maxSize : a
          , u = va(n)
          , l = ha(o, i, u);
        return l
    }
      , ga = fe.setConfigDeletionHandler
      , ba = 0;
    var wa = function(e) {
        var t, n = ma(null !== (t = e.cachePolicyForParams_UNSTABLE) && void 0 !== t ? t : {
            equality: "value",
            eviction: "none"
        });
        return function(t) {
            var r, o = n.get(t);
            if (null != o)
                return o;
            var a, i = "".concat(e.key, "__selectorFamily/").concat(null !== (r = ao(t, {
                allowFunctions: !0
            })) && void 0 !== r ? r : "void", "/").concat(ba++), u = function(n) {
                return e.get(t)(n)
            }, l = e.cachePolicy_UNSTABLE, c = "function" === typeof e.retainedBy_UNSTABLE ? e.retainedBy_UNSTABLE(t) : e.retainedBy_UNSTABLE;
            if (null != e.set) {
                var s = e.set;
                a = Ko({
                    key: i,
                    get: u,
                    set: function(e, n) {
                        return s(t)(e, n)
                    },
                    cachePolicy_UNSTABLE: l,
                    dangerouslyAllowMutability: e.dangerouslyAllowMutability,
                    retainedBy_UNSTABLE: c
                })
            } else
                a = Ko({
                    key: i,
                    get: u,
                    cachePolicy_UNSTABLE: l,
                    dangerouslyAllowMutability: e.dangerouslyAllowMutability,
                    retainedBy_UNSTABLE: c
                });
            return n.set(t, a),
            ga(a.key, (function() {
                n.delete(t)
            }
            )),
            a
        }
    }
      , Oa = fe.DEFAULT_VALUE
      , ka = fe.DefaultValue
      , Sa = fe.setConfigDeletionHandler;
    var Ea = function(e) {
        var t, n, r = ma(null !== (t = e.cachePolicyForParams_UNSTABLE) && void 0 !== t ? t : {
            equality: "value",
            eviction: "none"
        }), a = {
            key: e.key,
            default: Oa,
            persistence_UNSTABLE: e.persistence_UNSTABLE
        };
        n = ca(a);
        var i = wa({
            key: "".concat(e.key, "__atomFamily/Default"),
            get: function(t) {
                return function(r) {
                    var o = (0,
                    r.get)("function" === typeof n ? n(t) : n);
                    return o instanceof ka ? "function" === typeof e.default ? e.default(t) : e.default : o
                }
            },
            dangerouslyAllowMutability: e.dangerouslyAllowMutability,
            retainedBy_UNSTABLE: e.retainedBy_UNSTABLE
        });
        return function(t) {
            var n, a = r.get(t);
            if (null != a)
                return a;
            e.cachePolicyForParams_UNSTABLE;
            var u = Object(o.a)(e, ["cachePolicyForParams_UNSTABLE"])
              , l = ca(Object(m.a)(Object(m.a)({}, u), {}, {
                key: "".concat(e.key, "__").concat(null !== (n = ao(t)) && void 0 !== n ? n : "void"),
                default: i(t),
                retainedBy_UNSTABLE: "function" === typeof e.retainedBy_UNSTABLE ? e.retainedBy_UNSTABLE(t) : e.retainedBy_UNSTABLE,
                effects_UNSTABLE: "function" === typeof e.effects_UNSTABLE ? e.effects_UNSTABLE(t) : e.effects_UNSTABLE
            }));
            return r.set(t, l),
            Sa(l.key, (function() {
                r.delete(t)
            }
            )),
            l
        }
    }
      , Pa = wa({
        key: "__constant",
        get: function(e) {
            return function() {
                return e
            }
        },
        cachePolicyForParams_UNSTABLE: {
            equality: "reference"
        }
    });
    var _a = function(e) {
        return Pa(e)
    }
      , xa = wa({
        key: "__error",
        get: function(e) {
            return function() {
                throw new Error(e)
            }
        },
        cachePolicyForParams_UNSTABLE: {
            equality: "reference"
        }
    });
    var ja = function(e) {
        return xa(e)
    };
    var Ta = function(e) {
        return e
    }
      , Aa = ro.loadableWithError
      , Ca = ro.loadableWithPromise
      , La = ro.loadableWithValue;
    function Ra(e, t) {
        var n, r = Array(t.length).fill(void 0), o = Array(t.length).fill(void 0), a = A(t.entries());
        try {
            for (a.s(); !(n = a.n()).done; ) {
                var i = Object(h.a)(n.value, 2)
                  , u = i[0]
                  , l = i[1];
                try {
                    r[u] = e(l)
                } catch (c) {
                    o[u] = c
                }
            }
        } catch (s) {
            a.e(s)
        } finally {
            a.f()
        }
        return [r, o]
    }
    function Ma(e) {
        return null != e && !Qr(e)
    }
    function Da(e) {
        return Array.isArray(e) ? e : Object.getOwnPropertyNames(e).map((function(t) {
            return e[t]
        }
        ))
    }
    function Na(e) {
        return null != e && "object" === typeof e && e.hasOwnProperty("__value") ? e.__value : e
    }
    function Va(e, t) {
        return Array.isArray(e) ? t : Object.getOwnPropertyNames(e).reduce((function(e, n, o) {
            return Object(m.a)(Object(m.a)({}, e), {}, Object(r.a)({}, n, t[o]))
        }
        ), {})
    }
    function Ia(e, t, n) {
        return Va(e, n.map((function(e, n) {
            return null == e ? La(t[n]) : Qr(e) ? Ca(e) : Aa(e)
        }
        )))
    }
    var Ua = {
        waitForNone: wa({
            key: "__waitForNone",
            get: function(e) {
                return function(t) {
                    var n = Ra(t.get, Da(e))
                      , r = Object(h.a)(n, 2)
                      , o = r[0]
                      , a = r[1];
                    return Ia(e, o, a)
                }
            }
        }),
        waitForAny: wa({
            key: "__waitForAny",
            get: function(e) {
                return function(t) {
                    var n = Ra(t.get, Da(e))
                      , r = Object(h.a)(n, 2)
                      , o = r[0]
                      , a = r[1];
                    return a.some((function(e) {
                        return !Qr(e)
                    }
                    )) ? Ia(e, o, a) : new Promise((function(t) {
                        var n, r = A(a.entries());
                        try {
                            var i = function() {
                                var r = Object(h.a)(n.value, 2)
                                  , i = r[0]
                                  , u = r[1];
                                Qr(u) && u.then((function(n) {
                                    o[i] = Na(n),
                                    a[i] = void 0,
                                    t(Ia(e, o, a))
                                }
                                )).catch((function(n) {
                                    a[i] = n,
                                    t(Ia(e, o, a))
                                }
                                ))
                            };
                            for (r.s(); !(n = r.n()).done; )
                                i()
                        } catch (u) {
                            r.e(u)
                        } finally {
                            r.f()
                        }
                    }
                    ))
                }
            }
        }),
        waitForAll: wa({
            key: "__waitForAll",
            get: function(e) {
                return function(t) {
                    var n = Ra(t.get, Da(e))
                      , r = Object(h.a)(n, 2)
                      , o = r[0]
                      , a = r[1];
                    if (a.every((function(e) {
                        return null == e
                    }
                    )))
                        return Va(e, o);
                    var i = a.find(Ma);
                    if (null != i)
                        throw i;
                    return Promise.all(a).then((function(t) {
                        return Va(e, (n = o,
                        r = t,
                        r.map((function(e, t) {
                            return void 0 === e ? n[t] : e
                        }
                        ))).map(Na));
                        var n, r
                    }
                    ))
                }
            }
        }),
        waitForAllSettled: wa({
            key: "__waitForAllSettled",
            get: function(e) {
                return function(t) {
                    var n = Ra(t.get, Da(e))
                      , r = Object(h.a)(n, 2)
                      , o = r[0]
                      , a = r[1];
                    return a.every((function(e) {
                        return !Qr(e)
                    }
                    )) ? Ia(e, o, a) : Promise.all(a.map((function(e, t) {
                        return Qr(e) ? e.then((function(e) {
                            o[t] = Na(e),
                            a[t] = void 0
                        }
                        )).catch((function(e) {
                            o[t] = void 0,
                            a[t] = e
                        }
                        )) : null
                    }
                    ))).then((function() {
                        return Ia(e, o, a)
                    }
                    ))
                }
            }
        }),
        noWait: wa({
            key: "__noWait",
            get: function(e) {
                return function(t) {
                    var n = t.get;
                    try {
                        return La(n(e))
                    } catch (r) {
                        return Qr(r) ? Ca(r) : Aa(r)
                    }
                }
            }
        })
    }
      , Fa = nt
      , za = tt
      , Ba = fe.DefaultValue
      , Ha = Un
      , Wa = ne.isRecoilValue
      , qa = ye
      , $a = cn.freshSnapshot
      , Ka = {
        DefaultValue: Ba,
        RecoilRoot: Ha,
        useRecoilBridgeAcrossReactRoots_UNSTABLE: Xr,
        atom: ca,
        selector: Ko,
        retentionZone: qa,
        atomFamily: Ea,
        selectorFamily: wa,
        constSelector: _a,
        errorSelector: ja,
        readOnlySelector: Ta,
        useRecoilValue: Nr,
        useRecoilValueLoadable: Vr,
        useRecoilState: Rr,
        useRecoilStateLoadable: Mr,
        useSetRecoilState: Fr,
        useResetRecoilState: Ur,
        useGetRecoilValueInfo_UNSTABLE: qr,
        useRetain: Ir,
        useRecoilCallback: Cr,
        useGotoRecoilSnapshot: Ar,
        useRecoilSnapshot: Lr,
        useRecoilTransactionObserver_UNSTABLE: Dr,
        useTransactionObservation_UNSTABLE: Br,
        useSetUnvalidatedAtomValues_UNSTABLE: zr,
        noWait: Ua.noWait,
        waitForNone: Ua.waitForNone,
        waitForAny: Ua.waitForAny,
        waitForAll: Ua.waitForAll,
        waitForAllSettled: Ua.waitForAllSettled,
        isRecoilValue: Wa,
        batchUpdates: Fa,
        setBatcher: za,
        snapshot_UNSTABLE: $a
    }
      , Ya = Ka.DefaultValue
      , Xa = Ka.RecoilRoot
      , Qa = Ka.atom
      , Ga = Ka.selector
      , Za = Ka.useRecoilValue
      , Ja = Ka.useRecoilState
      , ei = Ka.useSetRecoilState
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return a
    }
    ));
    var r = n(21);
    function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function a(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? o(Object(n), !0).forEach((function(t) {
                Object(r.a)(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return d
    }
    )),
    n.d(t, "c", (function() {
        return y
    }
    )),
    n.d(t, "d", (function() {
        return g
    }
    ));
    var r = 1 / 60 * 1e3
      , o = "undefined" !== typeof performance ? function() {
        return performance.now()
    }
    : function() {
        return Date.now()
    }
      , a = "undefined" !== typeof window ? function(e) {
        return window.requestAnimationFrame(e)
    }
    : function(e) {
        return setTimeout((function() {
            return e(o())
        }
        ), r)
    }
    ;
    var i = !0
      , u = !1
      , l = !1
      , c = {
        delta: 0,
        timestamp: 0
    }
      , s = ["read", "update", "preRender", "render", "postRender"]
      , f = s.reduce((function(e, t) {
        return e[t] = function(e) {
            var t = []
              , n = []
              , r = 0
              , o = !1
              , a = new WeakSet
              , i = {
                schedule: function(e, i, u) {
                    void 0 === i && (i = !1),
                    void 0 === u && (u = !1);
                    var l = u && o
                      , c = l ? t : n;
                    return i && a.add(e),
                    -1 === c.indexOf(e) && (c.push(e),
                    l && o && (r = t.length)),
                    e
                },
                cancel: function(e) {
                    var t = n.indexOf(e);
                    -1 !== t && n.splice(t, 1),
                    a.delete(e)
                },
                process: function(u) {
                    var l;
                    if (o = !0,
                    t = (l = [n, t])[0],
                    (n = l[1]).length = 0,
                    r = t.length)
                        for (var c = 0; c < r; c++) {
                            var s = t[c];
                            s(u),
                            a.has(s) && (i.schedule(s),
                            e())
                        }
                    o = !1
                }
            };
            return i
        }((function() {
            return u = !0
        }
        )),
        e
    }
    ), {})
      , p = s.reduce((function(e, t) {
        var n = f[t];
        return e[t] = function(e, t, r) {
            return void 0 === t && (t = !1),
            void 0 === r && (r = !1),
            u || m(),
            n.schedule(e, t, r)
        }
        ,
        e
    }
    ), {})
      , d = s.reduce((function(e, t) {
        return e[t] = f[t].cancel,
        e
    }
    ), {})
      , y = s.reduce((function(e, t) {
        return e[t] = function() {
            return f[t].process(c)
        }
        ,
        e
    }
    ), {})
      , v = function(e) {
        return f[e].process(c)
    }
      , h = function e(t) {
        u = !1,
        c.delta = i ? r : Math.max(Math.min(t - c.timestamp, 40), 1),
        c.timestamp = t,
        l = !0,
        s.forEach(v),
        l = !1,
        u && (i = !1,
        a(e))
    }
      , m = function() {
        u = !0,
        i = !0,
        l || a(h)
    }
      , g = function() {
        return c
    };
    t.b = p
}
, , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.parseStartTime = function(e) {
        return p(e, l)
    }
    ,
    t.parseEndTime = function(e) {
        return p(e, c)
    }
    ,
    t.randomString = function() {
        return Math.random().toString(36).substr(2, 5)
    }
    ,
    t.queryString = function(e) {
        return Object.keys(e).map((function(t) {
            return "".concat(t, "=").concat(e[t])
        }
        )).join("&")
    }
    ,
    t.getSDK = function(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
          , o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {
            return !0
        }
          , a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : r.default
          , i = d(t);
        if (i && o(i))
            return Promise.resolve(i);
        return new Promise((function(r, o) {
            if (y[e])
                y[e].push({
                    resolve: r,
                    reject: o
                });
            else {
                y[e] = [{
                    resolve: r,
                    reject: o
                }];
                var i = function(t) {
                    y[e].forEach((function(e) {
                        return e.resolve(t)
                    }
                    ))
                };
                if (n) {
                    var u = window[n];
                    window[n] = function() {
                        u && u(),
                        i(d(t))
                    }
                }
                a(e, (function(r) {
                    r ? (y[e].forEach((function(e) {
                        return e.reject(r)
                    }
                    )),
                    y[e] = null) : n || i(d(t))
                }
                ))
            }
        }
        ))
    }
    ,
    t.getConfig = function(e, t) {
        return (0,
        o.default)(t.config, e.config)
    }
    ,
    t.omit = function(e) {
        for (var t, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
            r[o - 1] = arguments[o];
        for (var a = (t = []).concat.apply(t, r), i = {}, u = Object.keys(e), l = 0, c = u; l < c.length; l++) {
            var s = c[l];
            -1 === a.indexOf(s) && (i[s] = e[s])
        }
        return i
    }
    ,
    t.callPlayer = function(e) {
        var t;
        if (!this.player || !this.player[e]) {
            var n = "ReactPlayer: ".concat(this.constructor.displayName, " player could not call %c").concat(e, "%c \u2013 ");
            return this.player ? this.player[e] || (n += "The method was not available") : n += "The player was not available",
            console.warn(n, "font-weight: bold", ""),
            null
        }
        for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
            o[a - 1] = arguments[a];
        return (t = this.player)[e].apply(t, o)
    }
    ,
    t.isMediaStream = function(e) {
        return "undefined" !== typeof window && "undefined" !== typeof window.MediaStream && e instanceof window.MediaStream
    }
    ,
    t.isBlobUrl = function(e) {
        return /^blob:/.test(e)
    }
    ,
    t.supportsWebKitPresentationMode = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.createElement("video")
          , t = !1 === /iPhone|iPod/.test(navigator.userAgent);
        return e.webkitSupportsPresentationMode && "function" === typeof e.webkitSetPresentationMode && t
    }
    ;
    var r = a(n(48))
      , o = a(n(29));
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function i(e, t) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, t) {
            if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(e)))
                return;
            var n = []
              , r = !0
              , o = !1
              , a = void 0;
            try {
                for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value),
                !t || n.length !== t); r = !0)
                    ;
            } catch (l) {
                o = !0,
                a = l
            } finally {
                try {
                    r || null == u.return || u.return()
                } finally {
                    if (o)
                        throw a
                }
            }
            return n
        }(e, t) || function(e, t) {
            if (!e)
                return;
            if ("string" === typeof e)
                return u(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n)
                return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                return u(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    var l = /[?&#](?:start|t)=([0-9hms]+)/
      , c = /[?&#]end=([0-9hms]+)/
      , s = /(\d+)(h|m|s)/g
      , f = /^\d+$/;
    function p(e, t) {
        if (!(e instanceof Array)) {
            var n = e.match(t);
            if (n) {
                var r = n[1];
                if (r.match(s))
                    return function(e) {
                        var t = 0
                          , n = s.exec(e);
                        for (; null !== n; ) {
                            var r = i(n, 3)
                              , o = r[1]
                              , a = r[2];
                            "h" === a && (t += 60 * parseInt(o, 10) * 60),
                            "m" === a && (t += 60 * parseInt(o, 10)),
                            "s" === a && (t += parseInt(o, 10)),
                            n = s.exec(e)
                        }
                        return t
                    }(r);
                if (f.test(r))
                    return parseInt(r)
            }
        }
    }
    function d(e) {
        return window[e] ? window[e] : window.exports && window.exports[e] ? window.exports[e] : window.module && window.module.exports && window.module.exports[e] ? window.module.exports[e] : null
    }
    var y = {}
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.canPlay = t.FLV_EXTENSIONS = t.DASH_EXTENSIONS = t.HLS_EXTENSIONS = t.VIDEO_EXTENSIONS = t.AUDIO_EXTENSIONS = t.MATCH_URL_VIDYARD = t.MATCH_URL_MIXCLOUD = t.MATCH_URL_DAILYMOTION = t.MATCH_URL_TWITCH_CHANNEL = t.MATCH_URL_TWITCH_VIDEO = t.MATCH_URL_WISTIA = t.MATCH_URL_STREAMABLE = t.MATCH_URL_FACEBOOK_WATCH = t.MATCH_URL_FACEBOOK = t.MATCH_URL_VIMEO = t.MATCH_URL_SOUNDCLOUD = t.MATCH_URL_YOUTUBE = void 0;
    var r = n(8);
    function o(e, t) {
        var n;
        if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (n = function(e, t) {
                if (!e)
                    return;
                if ("string" === typeof e)
                    return a(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return a(e, t)
            }(e)) || t && e && "number" === typeof e.length) {
                n && (e = n);
                var r = 0
                  , o = function() {};
                return {
                    s: o,
                    n: function() {
                        return r >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[r++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: o
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var i, u = !0, l = !1;
        return {
            s: function() {
                n = e[Symbol.iterator]()
            },
            n: function() {
                var e = n.next();
                return u = e.done,
                e
            },
            e: function(e) {
                l = !0,
                i = e
            },
            f: function() {
                try {
                    u || null == n.return || n.return()
                } finally {
                    if (l)
                        throw i
                }
            }
        }
    }
    function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    var i = /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//;
    t.MATCH_URL_YOUTUBE = i;
    var u = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/;
    t.MATCH_URL_SOUNDCLOUD = u;
    var l = /vimeo\.com\/.+/;
    t.MATCH_URL_VIMEO = l;
    var c = /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/;
    t.MATCH_URL_FACEBOOK = c;
    var s = /^https?:\/\/fb\.watch\/.+$/;
    t.MATCH_URL_FACEBOOK_WATCH = s;
    var f = /streamable\.com\/([a-z0-9]+)$/;
    t.MATCH_URL_STREAMABLE = f;
    var p = /(?:wistia\.com|wi\.st)\/(?:medias|embed)\/(.*)$/;
    t.MATCH_URL_WISTIA = p;
    var d = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/;
    t.MATCH_URL_TWITCH_VIDEO = d;
    var y = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/;
    t.MATCH_URL_TWITCH_CHANNEL = y;
    var v = /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?$/;
    t.MATCH_URL_DAILYMOTION = v;
    var h = /mixcloud\.com\/([^/]+\/[^/]+)/;
    t.MATCH_URL_MIXCLOUD = h;
    var m = /vidyard.com\/(?:watch\/)?([a-zA-Z0-9-]+)/;
    t.MATCH_URL_VIDYARD = m;
    var g = /\.(m4a|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i;
    t.AUDIO_EXTENSIONS = g;
    var b = /\.(mp4|og[gv]|webm|mov|m4v)($|\?)/i;
    t.VIDEO_EXTENSIONS = b;
    var w = /\.(m3u8)($|\?)/i;
    t.HLS_EXTENSIONS = w;
    var O = /\.(mpd)($|\?)/i;
    t.DASH_EXTENSIONS = O;
    var k = /\.(flv)($|\?)/i;
    t.FLV_EXTENSIONS = k;
    var S = {
        youtube: function(e) {
            return e instanceof Array ? e.every((function(e) {
                return i.test(e)
            }
            )) : i.test(e)
        },
        soundcloud: function(e) {
            return u.test(e) && !g.test(e)
        },
        vimeo: function(e) {
            return l.test(e) && !b.test(e) && !w.test(e)
        },
        facebook: function(e) {
            return c.test(e) || s.test(e)
        },
        streamable: function(e) {
            return f.test(e)
        },
        wistia: function(e) {
            return p.test(e)
        },
        twitch: function(e) {
            return d.test(e) || y.test(e)
        },
        dailymotion: function(e) {
            return v.test(e)
        },
        mixcloud: function(e) {
            return h.test(e)
        },
        vidyard: function(e) {
            return m.test(e)
        },
        file: function e(t) {
            if (t instanceof Array) {
                var n, a = o(t);
                try {
                    for (a.s(); !(n = a.n()).done; ) {
                        var i = n.value;
                        if ("string" === typeof i && e(i))
                            return !0;
                        if (e(i.src))
                            return !0
                    }
                } catch (u) {
                    a.e(u)
                } finally {
                    a.f()
                }
                return !1
            }
            return !(!(0,
            r.isMediaStream)(t) && !(0,
            r.isBlobUrl)(t)) || (g.test(t) || b.test(t) || w.test(t) || O.test(t) || k.test(t))
        }
    };
    t.canPlay = S
}
, function(e, t, n) {
    e.exports = n(45)
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return s
    }
    )),
    n.d(t, "b", (function() {
        return c
    }
    )),
    n.d(t, "c", (function() {
        return f
    }
    ));
    var r = n(0)
      , o = n(6)
      , a = n(25)
      , i = n(16)
      , u = {
        measureLayout: function(e) {
            return e.updateLayoutMeasurement()
        },
        layoutReady: function(e) {
            return e.notifyLayoutReady()
        }
    };
    function l() {
        var e = new Set;
        return {
            add: function(t) {
                return e.add(t)
            },
            flush: function(t) {
                var n = void 0 === t ? u : t
                  , r = n.measureLayout
                  , l = n.layoutReady
                  , c = n.parent
                  , s = Array.from(e).sort(a.a)
                  , f = function() {
                    s.forEach((function(e) {
                        return e.resetTransform()
                    }
                    )),
                    s.forEach(r)
                };
                c ? c.withoutTransform(f) : f(),
                s.forEach(l),
                s.forEach((function(e) {
                    e.isPresent && (e.presence = i.a.Present)
                }
                )),
                o.c.preRender(),
                o.c.render(),
                e.clear()
            }
        }
    }
    var c = Object(r.createContext)(l())
      , s = Object(r.createContext)(l());
    function f(e) {
        return !!e.forceUpdate
    }
}
, , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return o
    }
    ));
    var r = n(0)
      , o = Object(r.createContext)(null)
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return o
    }
    ));
    var r = n(0);
    function o(e) {
        var t = Object(r.useRef)(null);
        return null === t.current && (t.current = e()),
        t.current
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return o
    }
    ));
    var r = n(20);
    function o(e, t) {
        if (e) {
            if ("string" === typeof e)
                return Object(r.a)(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Object(r.a)(e, t) : void 0
        }
    }
}
, function(e, t, n) {
    "use strict";
    var r, o;
    n.d(t, "a", (function() {
        return r
    }
    )),
    n.d(t, "b", (function() {
        return o
    }
    )),
    function(e) {
        e[e.Entering = 0] = "Entering",
        e[e.Present = 1] = "Present",
        e[e.Exiting = 2] = "Exiting"
    }(r || (r = {})),
    function(e) {
        e[e.Hide = 0] = "Hide",
        e[e.Show = 1] = "Show"
    }(o || (o = {}))
}
, function(e, t, n) {
    "use strict";
    function r(e, t) {
        if (null == e)
            return {};
        var n, r, o = function(e, t) {
            if (null == e)
                return {};
            var n, r, o = {}, a = Object.keys(e);
            for (r = 0; r < a.length; r++)
                n = a[r],
                t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (r = 0; r < a.length; r++)
                n = a[r],
                t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }
    n.d(t, "a", (function() {
        return r
    }
    ))
}
, function(e, t, n) {
    "use strict";
    !function e() {
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
            } catch (t) {
                console.error(t)
            }
    }(),
    e.exports = n(42)
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return o
    }
    ));
    var r = n(0);
    function o(e) {
        return Object(r.useEffect)((function() {
            return function() {
                return e()
            }
        }
        ), [])
    }
}
, function(e, t, n) {
    "use strict";
    function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    n.d(t, "a", (function() {
        return r
    }
    ))
}
, function(e, t, n) {
    "use strict";
    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    n.d(t, "a", (function() {
        return r
    }
    ))
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        if (Array.isArray(e))
            return e
    }
    n.d(t, "a", (function() {
        return r
    }
    ))
}
, function(e, t, n) {
    "use strict";
    function r() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    n.d(t, "a", (function() {
        return r
    }
    ))
}
, function(e, t, n) {
    "use strict";
    function r(e, t, n, r, o, a, i) {
        try {
            var u = e[a](i)
              , l = u.value
        } catch (c) {
            return void n(c)
        }
        u.done ? t(l) : Promise.resolve(l).then(r, o)
    }
    function o(e) {
        return function() {
            var t = this
              , n = arguments;
            return new Promise((function(o, a) {
                var i = e.apply(t, n);
                function u(e) {
                    r(i, o, a, u, l, "next", e)
                }
                function l(e) {
                    r(i, o, a, u, l, "throw", e)
                }
                u(void 0)
            }
            ))
        }
    }
    n.d(t, "a", (function() {
        return o
    }
    ))
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return r
    }
    ));
    var r = function(e, t) {
        return e.depth - t.depth
    }
}
, function(e, t, n) {
    "use strict";
    var r = Object.getOwnPropertySymbols
      , o = Object.prototype.hasOwnProperty
      , a = Object.prototype.propertyIsEnumerable;
    function i(e) {
        if (null === e || void 0 === e)
            throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(e)
    }
    e.exports = function() {
        try {
            if (!Object.assign)
                return !1;
            var e = new String("abc");
            if (e[5] = "de",
            "5" === Object.getOwnPropertyNames(e)[0])
                return !1;
            for (var t = {}, n = 0; n < 10; n++)
                t["_" + String.fromCharCode(n)] = n;
            if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
                return t[e]
            }
            )).join(""))
                return !1;
            var r = {};
            return "abcdefghijklmnopqrst".split("").forEach((function(e) {
                r[e] = e
            }
            )),
            "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
        } catch (o) {
            return !1
        }
    }() ? Object.assign : function(e, t) {
        for (var n, u, l = i(e), c = 1; c < arguments.length; c++) {
            for (var s in n = Object(arguments[c]))
                o.call(n, s) && (l[s] = n[s]);
            if (r) {
                u = r(n);
                for (var f = 0; f < u.length; f++)
                    a.call(n, u[f]) && (l[u[f]] = n[u[f]])
            }
        }
        return l
    }
}
, function(e, t, n) {
    var r = n(32);
    e.exports = function(e, t) {
        if (e) {
            if ("string" === typeof e)
                return r(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
        }
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return d
    }
    )),
    n.d(t, "b", (function() {
        return p
    }
    ));
    var r = n(0)
      , o = n.n(r)
      , a = {
        fullscreenEnabled: 0,
        fullscreenElement: 1,
        requestFullscreen: 2,
        exitFullscreen: 3,
        fullscreenchange: 4,
        fullscreenerror: 5,
        fullscreen: 6
    }
      , i = ["webkitFullscreenEnabled", "webkitFullscreenElement", "webkitRequestFullscreen", "webkitExitFullscreen", "webkitfullscreenchange", "webkitfullscreenerror", "-webkit-full-screen"]
      , u = ["mozFullScreenEnabled", "mozFullScreenElement", "mozRequestFullScreen", "mozCancelFullScreen", "mozfullscreenchange", "mozfullscreenerror", "-moz-full-screen"]
      , l = ["msFullscreenEnabled", "msFullscreenElement", "msRequestFullscreen", "msExitFullscreen", "MSFullscreenChange", "MSFullscreenError", "-ms-fullscreen"]
      , c = "undefined" !== typeof window && "undefined" !== typeof window.document ? window.document : {}
      , s = "fullscreenEnabled"in c && Object.keys(a) || i[0]in c && i || u[0]in c && u || l[0]in c && l || []
      , f = {
        requestFullscreen: function(e) {
            return e[s[a.requestFullscreen]]()
        },
        requestFullscreenFunction: function(e) {
            return e[s[a.requestFullscreen]]
        },
        get exitFullscreen() {
            return c[s[a.exitFullscreen]].bind(c)
        },
        get fullscreenPseudoClass() {
            return ":" + s[a.fullscreen]
        },
        addEventListener: function(e, t, n) {
            return c.addEventListener(s[a[e]], t, n)
        },
        removeEventListener: function(e, t, n) {
            return c.removeEventListener(s[a[e]], t, n)
        },
        get fullscreenEnabled() {
            return Boolean(c[s[a.fullscreenEnabled]])
        },
        set fullscreenEnabled(e) {},
        get fullscreenElement() {
            return c[s[a.fullscreenElement]]
        },
        set fullscreenElement(e) {},
        get onfullscreenchange() {
            return c[("on" + s[a.fullscreenchange]).toLowerCase()]
        },
        set onfullscreenchange(e) {
            return c[("on" + s[a.fullscreenchange]).toLowerCase()] = e
        },
        get onfullscreenerror() {
            return c[("on" + s[a.fullscreenerror]).toLowerCase()]
        },
        set onfullscreenerror(e) {
            return c[("on" + s[a.fullscreenerror]).toLowerCase()] = e
        }
    };
    function p() {
        var e = Object(r.useState)(!1)
          , t = e[0]
          , n = e[1]
          , o = Object(r.useRef)(null);
        return Object(r.useEffect)((function() {
            var e = function() {
                n(f.fullscreenElement === o.current)
            };
            return f.addEventListener("fullscreenchange", e),
            function() {
                return f.removeEventListener("fullscreenchange", e)
            }
        }
        ), []),
        {
            active: t,
            enter: Object(r.useCallback)((function() {
                return f.fullscreenElement ? f.exitFullscreen().then((function() {
                    return f.requestFullscreen(o.current)
                }
                )) : o.current ? f.requestFullscreen(o.current) : void 0
            }
            ), []),
            exit: Object(r.useCallback)((function() {
                return f.fullscreenElement === o.current ? f.exitFullscreen() : Promise.resolve()
            }
            ), []),
            node: o
        }
    }
    var d = function(e) {
        var t = e.handle
          , n = e.onChange
          , a = e.children
          , i = e.className
          , u = [];
        return i && u.push(i),
        u.push("fullscreen"),
        t.active && u.push("fullscreen-enabled"),
        Object(r.useEffect)((function() {
            n && n(t.active, t)
        }
        ), [t.active]),
        o.a.createElement("div", {
            className: u.join(" "),
            ref: t.node,
            style: t.active ? {
                height: "100%",
                width: "100%"
            } : void 0
        }, a)
    }
}
, function(e, t, n) {
    "use strict";
    var r = function(e) {
        return function(e) {
            return !!e && "object" === typeof e
        }(e) && !function(e) {
            var t = Object.prototype.toString.call(e);
            return "[object RegExp]" === t || "[object Date]" === t || function(e) {
                return e.$$typeof === o
            }(e)
        }(e)
    };
    var o = "function" === typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;
    function a(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e) ? s((n = e,
        Array.isArray(n) ? [] : {}), e, t) : e;
        var n
    }
    function i(e, t, n) {
        return e.concat(t).map((function(e) {
            return a(e, n)
        }
        ))
    }
    function u(e) {
        return Object.keys(e).concat(function(e) {
            return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter((function(t) {
                return e.propertyIsEnumerable(t)
            }
            )) : []
        }(e))
    }
    function l(e, t) {
        try {
            return t in e
        } catch (n) {
            return !1
        }
    }
    function c(e, t, n) {
        var r = {};
        return n.isMergeableObject(e) && u(e).forEach((function(t) {
            r[t] = a(e[t], n)
        }
        )),
        u(t).forEach((function(o) {
            (function(e, t) {
                return l(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
            }
            )(e, o) || (l(e, o) && n.isMergeableObject(t[o]) ? r[o] = function(e, t) {
                if (!t.customMerge)
                    return s;
                var n = t.customMerge(e);
                return "function" === typeof n ? n : s
            }(o, n)(e[o], t[o], n) : r[o] = a(t[o], n))
        }
        )),
        r
    }
    function s(e, t, n) {
        (n = n || {}).arrayMerge = n.arrayMerge || i,
        n.isMergeableObject = n.isMergeableObject || r,
        n.cloneUnlessOtherwiseSpecified = a;
        var o = Array.isArray(t);
        return o === Array.isArray(e) ? o ? n.arrayMerge(e, t, n) : c(e, t, n) : a(t, n)
    }
    s.all = function(e, t) {
        if (!Array.isArray(e))
            throw new Error("first argument should be an array");
        return e.reduce((function(e, n) {
            return s(e, n, t)
        }
        ), {})
    }
    ;
    var f = s;
    e.exports = f
}
, function(e, t) {
    var n = "undefined" !== typeof Element
      , r = "function" === typeof Map
      , o = "function" === typeof Set
      , a = "function" === typeof ArrayBuffer && !!ArrayBuffer.isView;
    function i(e, t) {
        if (e === t)
            return !0;
        if (e && t && "object" == typeof e && "object" == typeof t) {
            if (e.constructor !== t.constructor)
                return !1;
            var u, l, c, s;
            if (Array.isArray(e)) {
                if ((u = e.length) != t.length)
                    return !1;
                for (l = u; 0 !== l--; )
                    if (!i(e[l], t[l]))
                        return !1;
                return !0
            }
            if (r && e instanceof Map && t instanceof Map) {
                if (e.size !== t.size)
                    return !1;
                for (s = e.entries(); !(l = s.next()).done; )
                    if (!t.has(l.value[0]))
                        return !1;
                for (s = e.entries(); !(l = s.next()).done; )
                    if (!i(l.value[1], t.get(l.value[0])))
                        return !1;
                return !0
            }
            if (o && e instanceof Set && t instanceof Set) {
                if (e.size !== t.size)
                    return !1;
                for (s = e.entries(); !(l = s.next()).done; )
                    if (!t.has(l.value[0]))
                        return !1;
                return !0
            }
            if (a && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
                if ((u = e.length) != t.length)
                    return !1;
                for (l = u; 0 !== l--; )
                    if (e[l] !== t[l])
                        return !1;
                return !0
            }
            if (e.constructor === RegExp)
                return e.source === t.source && e.flags === t.flags;
            if (e.valueOf !== Object.prototype.valueOf)
                return e.valueOf() === t.valueOf();
            if (e.toString !== Object.prototype.toString)
                return e.toString() === t.toString();
            if ((u = (c = Object.keys(e)).length) !== Object.keys(t).length)
                return !1;
            for (l = u; 0 !== l--; )
                if (!Object.prototype.hasOwnProperty.call(t, c[l]))
                    return !1;
            if (n && e instanceof Element)
                return !1;
            for (l = u; 0 !== l--; )
                if (("_owner" !== c[l] && "__v" !== c[l] && "__o" !== c[l] || !e.$$typeof) && !i(e[c[l]], t[c[l]]))
                    return !1;
            return !0
        }
        return e !== e && t !== t
    }
    e.exports = function(e, t) {
        try {
            return i(e, t)
        } catch (n) {
            if ((n.message || "").match(/stack|recursion/i))
                return console.warn("react-fast-compare cannot handle circular refs"),
                !1;
            throw n
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.defaultProps = t.propTypes = void 0;
    var r, o = (r = n(62)) && r.__esModule ? r : {
        default: r
    };
    var a = o.default.string
      , i = o.default.bool
      , u = o.default.number
      , l = o.default.array
      , c = o.default.oneOfType
      , s = o.default.shape
      , f = o.default.object
      , p = o.default.func
      , d = o.default.node
      , y = {
        url: c([a, l, f]),
        playing: i,
        loop: i,
        controls: i,
        volume: u,
        muted: i,
        playbackRate: u,
        width: c([a, u]),
        height: c([a, u]),
        style: f,
        progressInterval: u,
        playsinline: i,
        pip: i,
        stopOnUnmount: i,
        light: c([i, a]),
        playIcon: d,
        wrapper: c([a, p, s({
            render: p.isRequired
        })]),
        config: s({
            soundcloud: s({
                options: f
            }),
            youtube: s({
                playerVars: f,
                embedOptions: f,
                onUnstarted: p
            }),
            facebook: s({
                appId: a,
                version: a,
                playerId: a,
                attributes: f
            }),
            dailymotion: s({
                params: f
            }),
            vimeo: s({
                playerOptions: f
            }),
            file: s({
                attributes: f,
                tracks: l,
                forceVideo: i,
                forceAudio: i,
                forceHLS: i,
                forceDASH: i,
                forceFLV: i,
                hlsOptions: f,
                hlsVersion: a,
                dashVersion: a,
                flvVersion: a
            }),
            wistia: s({
                options: f,
                playerId: a
            }),
            mixcloud: s({
                options: f
            }),
            twitch: s({
                options: f,
                playerId: a
            }),
            vidyard: s({
                options: f
            })
        }),
        onReady: p,
        onStart: p,
        onPlay: p,
        onPause: p,
        onBuffer: p,
        onBufferEnd: p,
        onEnded: p,
        onError: p,
        onDuration: p,
        onSeek: p,
        onProgress: p,
        onEnablePIP: p,
        onDisablePIP: p
    };
    t.propTypes = y;
    var v = function() {}
      , h = {
        playing: !1,
        loop: !1,
        controls: !1,
        volume: null,
        muted: !1,
        playbackRate: 1,
        width: "640px",
        height: "360px",
        style: {},
        progressInterval: 1e3,
        playsinline: !1,
        pip: !1,
        stopOnUnmount: !0,
        light: !1,
        wrapper: "div",
        config: {
            soundcloud: {
                options: {
                    visual: !0,
                    buying: !1,
                    liking: !1,
                    download: !1,
                    sharing: !1,
                    show_comments: !1,
                    show_playcount: !1
                }
            },
            youtube: {
                playerVars: {
                    playsinline: 1,
                    showinfo: 0,
                    rel: 0,
                    iv_load_policy: 3,
                    modestbranding: 1
                },
                embedOptions: {},
                onUnstarted: v
            },
            facebook: {
                appId: "1309697205772819",
                version: "v3.3",
                playerId: null,
                attributes: {}
            },
            dailymotion: {
                params: {
                    api: 1,
                    "endscreen-enable": !1
                }
            },
            vimeo: {
                playerOptions: {
                    autopause: !1,
                    byline: !1,
                    portrait: !1,
                    title: !1
                }
            },
            file: {
                attributes: {},
                tracks: [],
                forceVideo: !1,
                forceAudio: !1,
                forceHLS: !1,
                forceDASH: !1,
                forceFLV: !1,
                hlsOptions: {},
                hlsVersion: "0.14.16",
                dashVersion: "3.1.3",
                flvVersion: "1.5.0"
            },
            wistia: {
                options: {},
                playerId: null
            },
            mixcloud: {
                options: {
                    hide_cover: 1
                }
            },
            twitch: {
                options: {},
                playerId: null
            },
            vidyard: {
                options: {}
            }
        },
        onReady: v,
        onStart: v,
        onPlay: v,
        onPause: v,
        onBuffer: v,
        onBufferEnd: v,
        onEnded: v,
        onError: v,
        onDuration: v,
        onSeek: v,
        onProgress: v,
        onEnablePIP: v,
        onDisablePIP: v
    };
    t.defaultProps = h
}
, function(e, t) {
    e.exports = function(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r, o = (r = n(47)) && r.__esModule ? r : {
        default: r
    }, a = n(60);
    var i = o.default[o.default.length - 1]
      , u = (0,
    a.createReactPlayer)(o.default, i);
    t.default = u
}
, function(e, t, n) {
    "use strict";
    var r = n(67)
      , o = n(71)
      , a = n(72)
      , i = n(76)
      , u = n(77)
      , l = n(78)
      , c = n(79);
    function s(e) {
        if ("string" !== typeof e || 1 !== e.length)
            throw new TypeError("arrayFormatSeparator must be single character string")
    }
    function f(e, t) {
        return t.encode ? t.strict ? i(e) : encodeURIComponent(e) : e
    }
    function p(e, t) {
        return t.decode ? u(e) : e
    }
    function d(e) {
        return Array.isArray(e) ? e.sort() : "object" === typeof e ? d(Object.keys(e)).sort((function(e, t) {
            return Number(e) - Number(t)
        }
        )).map((function(t) {
            return e[t]
        }
        )) : e
    }
    function y(e) {
        var t = e.indexOf("#");
        return -1 !== t && (e = e.slice(0, t)),
        e
    }
    function v(e) {
        var t = (e = y(e)).indexOf("?");
        return -1 === t ? "" : e.slice(t + 1)
    }
    function h(e, t) {
        return t.parseNumbers && !Number.isNaN(Number(e)) && "string" === typeof e && "" !== e.trim() ? e = Number(e) : !t.parseBooleans || null === e || "true" !== e.toLowerCase() && "false" !== e.toLowerCase() || (e = "true" === e.toLowerCase()),
        e
    }
    function m(e, t) {
        s((t = Object.assign({
            decode: !0,
            sort: !0,
            arrayFormat: "none",
            arrayFormatSeparator: ",",
            parseNumbers: !1,
            parseBooleans: !1
        }, t)).arrayFormatSeparator);
        var n = function(e) {
            var t;
            switch (e.arrayFormat) {
            case "index":
                return function(e, n, r) {
                    t = /\[(\d*)\]$/.exec(e),
                    e = e.replace(/\[\d*\]$/, ""),
                    t ? (void 0 === r[e] && (r[e] = {}),
                    r[e][t[1]] = n) : r[e] = n
                }
                ;
            case "bracket":
                return function(e, n, r) {
                    t = /(\[\])$/.exec(e),
                    e = e.replace(/\[\]$/, ""),
                    t ? void 0 !== r[e] ? r[e] = [].concat(r[e], n) : r[e] = [n] : r[e] = n
                }
                ;
            case "comma":
            case "separator":
                return function(t, n, r) {
                    var o = "string" === typeof n && n.includes(e.arrayFormatSeparator)
                      , a = "string" === typeof n && !o && p(n, e).includes(e.arrayFormatSeparator);
                    n = a ? p(n, e) : n;
                    var i = o || a ? n.split(e.arrayFormatSeparator).map((function(t) {
                        return p(t, e)
                    }
                    )) : null === n ? n : p(n, e);
                    r[t] = i
                }
                ;
            case "bracket-separator":
                return function(t, n, r) {
                    var o = /(\[\])$/.test(t);
                    if (t = t.replace(/\[\]$/, ""),
                    o) {
                        var a = null === n ? [] : n.split(e.arrayFormatSeparator).map((function(t) {
                            return p(t, e)
                        }
                        ));
                        void 0 !== r[t] ? r[t] = [].concat(r[t], a) : r[t] = a
                    } else
                        r[t] = n ? p(n, e) : n
                }
                ;
            default:
                return function(e, t, n) {
                    void 0 !== n[e] ? n[e] = [].concat(n[e], t) : n[e] = t
                }
            }
        }(t)
          , a = Object.create(null);
        if ("string" !== typeof e)
            return a;
        if (!(e = e.trim().replace(/^[?#&]/, "")))
            return a;
        var i, u = o(e.split("&"));
        try {
            for (u.s(); !(i = u.n()).done; ) {
                var c = i.value;
                if ("" !== c) {
                    var f = l(t.decode ? c.replace(/\+/g, " ") : c, "=")
                      , y = r(f, 2)
                      , v = y[0]
                      , m = y[1];
                    m = void 0 === m ? null : ["comma", "separator", "bracket-separator"].includes(t.arrayFormat) ? m : p(m, t),
                    n(p(v, t), m, a)
                }
            }
        } catch (P) {
            u.e(P)
        } finally {
            u.f()
        }
        for (var g = 0, b = Object.keys(a); g < b.length; g++) {
            var w = b[g]
              , O = a[w];
            if ("object" === typeof O && null !== O)
                for (var k = 0, S = Object.keys(O); k < S.length; k++) {
                    var E = S[k];
                    O[E] = h(O[E], t)
                }
            else
                a[w] = h(O, t)
        }
        return !1 === t.sort ? a : (!0 === t.sort ? Object.keys(a).sort() : Object.keys(a).sort(t.sort)).reduce((function(e, t) {
            var n = a[t];
            return Boolean(n) && "object" === typeof n && !Array.isArray(n) ? e[t] = d(n) : e[t] = n,
            e
        }
        ), Object.create(null))
    }
    t.extract = v,
    t.parse = m,
    t.stringify = function(e, t) {
        if (!e)
            return "";
        s((t = Object.assign({
            encode: !0,
            strict: !0,
            arrayFormat: "none",
            arrayFormatSeparator: ","
        }, t)).arrayFormatSeparator);
        for (var n = function(n) {
            return t.skipNull && (null === (r = e[n]) || void 0 === r) || t.skipEmptyString && "" === e[n];
            var r
        }, r = function(e) {
            switch (e.arrayFormat) {
            case "index":
                return function(t) {
                    return function(n, r) {
                        var o = n.length;
                        return void 0 === r || e.skipNull && null === r || e.skipEmptyString && "" === r ? n : [].concat(a(n), null === r ? [[f(t, e), "[", o, "]"].join("")] : [[f(t, e), "[", f(o, e), "]=", f(r, e)].join("")])
                    }
                }
                ;
            case "bracket":
                return function(t) {
                    return function(n, r) {
                        return void 0 === r || e.skipNull && null === r || e.skipEmptyString && "" === r ? n : [].concat(a(n), null === r ? [[f(t, e), "[]"].join("")] : [[f(t, e), "[]=", f(r, e)].join("")])
                    }
                }
                ;
            case "comma":
            case "separator":
            case "bracket-separator":
                var t = "bracket-separator" === e.arrayFormat ? "[]=" : "=";
                return function(n) {
                    return function(r, o) {
                        return void 0 === o || e.skipNull && null === o || e.skipEmptyString && "" === o ? r : (o = null === o ? "" : o,
                        0 === r.length ? [[f(n, e), t, f(o, e)].join("")] : [[r, f(o, e)].join(e.arrayFormatSeparator)])
                    }
                }
                ;
            default:
                return function(t) {
                    return function(n, r) {
                        return void 0 === r || e.skipNull && null === r || e.skipEmptyString && "" === r ? n : [].concat(a(n), null === r ? [f(t, e)] : [[f(t, e), "=", f(r, e)].join("")])
                    }
                }
            }
        }(t), o = {}, i = 0, u = Object.keys(e); i < u.length; i++) {
            var l = u[i];
            n(l) || (o[l] = e[l])
        }
        var c = Object.keys(o);
        return !1 !== t.sort && c.sort(t.sort),
        c.map((function(n) {
            var o = e[n];
            return void 0 === o ? "" : null === o ? f(n, t) : Array.isArray(o) ? 0 === o.length && "bracket-separator" === t.arrayFormat ? f(n, t) + "[]" : o.reduce(r(n), []).join("&") : f(n, t) + "=" + f(o, t)
        }
        )).filter((function(e) {
            return e.length > 0
        }
        )).join("&")
    }
    ,
    t.parseUrl = function(e, t) {
        t = Object.assign({
            decode: !0
        }, t);
        var n = l(e, "#")
          , o = r(n, 2)
          , a = o[0]
          , i = o[1];
        return Object.assign({
            url: a.split("?")[0] || "",
            query: m(v(e), t)
        }, t && t.parseFragmentIdentifier && i ? {
            fragmentIdentifier: p(i, t)
        } : {})
    }
    ,
    t.stringifyUrl = function(e, n) {
        n = Object.assign({
            encode: !0,
            strict: !0
        }, n);
        var r = y(e.url).split("?")[0] || ""
          , o = t.extract(e.url)
          , a = t.parse(o, {
            sort: !1
        })
          , i = Object.assign(a, e.query)
          , u = t.stringify(i, n);
        u && (u = "?".concat(u));
        var l = function(e) {
            var t = ""
              , n = e.indexOf("#");
            return -1 !== n && (t = e.slice(n)),
            t
        }(e.url);
        return e.fragmentIdentifier && (l = "#".concat(f(e.fragmentIdentifier, n))),
        "".concat(r).concat(u).concat(l)
    }
    ,
    t.pick = function(e, n, r) {
        r = Object.assign({
            parseFragmentIdentifier: !0
        }, r);
        var o = t.parseUrl(e, r)
          , a = o.url
          , i = o.query
          , u = o.fragmentIdentifier;
        return t.stringifyUrl({
            url: a,
            query: c(i, n),
            fragmentIdentifier: u
        }, r)
    }
    ,
    t.exclude = function(e, n, r) {
        var o = Array.isArray(n) ? function(e) {
            return !n.includes(e)
        }
        : function(e, t) {
            return !n(e, t)
        }
        ;
        return t.pick(e, o, r)
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
      , o = i(n(0))
      , a = i(n(80));
    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var u = /(\{[\d|\w]+\})/;
    a.default.prototype.formatString = function(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
            n[a - 1] = arguments[a];
        var i = !1
          , l = (e || "").split(u).filter((function(e) {
            return !!e
        }
        )).map((function(e, t) {
            if (e.match(u)) {
                var a = e.slice(1, -1)
                  , l = n[a];
                if (void 0 == l) {
                    var c = n[0][a];
                    if (void 0 === c)
                        return l;
                    l = c
                }
                return o.default.isValidElement(l) ? (i = !0,
                o.default.Children.toArray(l).map((function(e) {
                    return r({}, e, {
                        key: t.toString()
                    })
                }
                ))) : l
            }
            return e
        }
        ));
        return i ? l : l.join("")
    }
    ,
    t.default = a.default
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        var t = e.getBoundingClientRect();
        return {
            width: t.width,
            height: t.height,
            top: t.top,
            right: t.right,
            bottom: t.bottom,
            left: t.left,
            x: t.left,
            y: t.top
        }
    }
    function o(e) {
        if (null == e)
            return window;
        if ("[object Window]" !== e.toString()) {
            var t = e.ownerDocument;
            return t && t.defaultView || window
        }
        return e
    }
    function a(e) {
        var t = o(e);
        return {
            scrollLeft: t.pageXOffset,
            scrollTop: t.pageYOffset
        }
    }
    function i(e) {
        return e instanceof o(e).Element || e instanceof Element
    }
    function u(e) {
        return e instanceof o(e).HTMLElement || e instanceof HTMLElement
    }
    function l(e) {
        return "undefined" !== typeof ShadowRoot && (e instanceof o(e).ShadowRoot || e instanceof ShadowRoot)
    }
    function c(e) {
        return e ? (e.nodeName || "").toLowerCase() : null
    }
    function s(e) {
        return ((i(e) ? e.ownerDocument : e.document) || window.document).documentElement
    }
    function f(e) {
        return r(s(e)).left + a(e).scrollLeft
    }
    function p(e) {
        return o(e).getComputedStyle(e)
    }
    function d(e) {
        var t = p(e)
          , n = t.overflow
          , r = t.overflowX
          , o = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + o + r)
    }
    function y(e, t, n) {
        void 0 === n && (n = !1);
        var i = s(t)
          , l = r(e)
          , p = u(t)
          , y = {
            scrollLeft: 0,
            scrollTop: 0
        }
          , v = {
            x: 0,
            y: 0
        };
        return (p || !p && !n) && (("body" !== c(t) || d(i)) && (y = function(e) {
            return e !== o(e) && u(e) ? {
                scrollLeft: (t = e).scrollLeft,
                scrollTop: t.scrollTop
            } : a(e);
            var t
        }(t)),
        u(t) ? ((v = r(t)).x += t.clientLeft,
        v.y += t.clientTop) : i && (v.x = f(i))),
        {
            x: l.left + y.scrollLeft - v.x,
            y: l.top + y.scrollTop - v.y,
            width: l.width,
            height: l.height
        }
    }
    function v(e) {
        var t = r(e)
          , n = e.offsetWidth
          , o = e.offsetHeight;
        return Math.abs(t.width - n) <= 1 && (n = t.width),
        Math.abs(t.height - o) <= 1 && (o = t.height),
        {
            x: e.offsetLeft,
            y: e.offsetTop,
            width: n,
            height: o
        }
    }
    function h(e) {
        return "html" === c(e) ? e : e.assignedSlot || e.parentNode || (l(e) ? e.host : null) || s(e)
    }
    function m(e) {
        return ["html", "body", "#document"].indexOf(c(e)) >= 0 ? e.ownerDocument.body : u(e) && d(e) ? e : m(h(e))
    }
    function g(e, t) {
        var n;
        void 0 === t && (t = []);
        var r = m(e)
          , a = r === (null == (n = e.ownerDocument) ? void 0 : n.body)
          , i = o(r)
          , u = a ? [i].concat(i.visualViewport || [], d(r) ? r : []) : r
          , l = t.concat(u);
        return a ? l : l.concat(g(h(u)))
    }
    function b(e) {
        return ["table", "td", "th"].indexOf(c(e)) >= 0
    }
    function w(e) {
        return u(e) && "fixed" !== p(e).position ? e.offsetParent : null
    }
    function O(e) {
        for (var t = o(e), n = w(e); n && b(n) && "static" === p(n).position; )
            n = w(n);
        return n && ("html" === c(n) || "body" === c(n) && "static" === p(n).position) ? t : n || function(e) {
            var t = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
            if (-1 !== navigator.userAgent.indexOf("Trident") && u(e) && "fixed" === p(e).position)
                return null;
            for (var n = h(e); u(n) && ["html", "body"].indexOf(c(n)) < 0; ) {
                var r = p(n);
                if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || -1 !== ["transform", "perspective"].indexOf(r.willChange) || t && "filter" === r.willChange || t && r.filter && "none" !== r.filter)
                    return n;
                n = n.parentNode
            }
            return null
        }(e) || t
    }
    var k = "top"
      , S = "bottom"
      , E = "right"
      , P = "left"
      , _ = "auto"
      , x = [k, S, E, P]
      , j = "start"
      , T = "end"
      , A = "viewport"
      , C = "popper"
      , L = x.reduce((function(e, t) {
        return e.concat([t + "-" + j, t + "-" + T])
    }
    ), [])
      , R = [].concat(x, [_]).reduce((function(e, t) {
        return e.concat([t, t + "-" + j, t + "-" + T])
    }
    ), [])
      , M = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
    function D(e) {
        var t = new Map
          , n = new Set
          , r = [];
        function o(e) {
            n.add(e.name),
            [].concat(e.requires || [], e.requiresIfExists || []).forEach((function(e) {
                if (!n.has(e)) {
                    var r = t.get(e);
                    r && o(r)
                }
            }
            )),
            r.push(e)
        }
        return e.forEach((function(e) {
            t.set(e.name, e)
        }
        )),
        e.forEach((function(e) {
            n.has(e.name) || o(e)
        }
        )),
        r
    }
    function N(e) {
        var t;
        return function() {
            return t || (t = new Promise((function(n) {
                Promise.resolve().then((function() {
                    t = void 0,
                    n(e())
                }
                ))
            }
            ))),
            t
        }
    }
    var V = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };
    function I() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
        return !t.some((function(e) {
            return !(e && "function" === typeof e.getBoundingClientRect)
        }
        ))
    }
    function U(e) {
        void 0 === e && (e = {});
        var t = e
          , n = t.defaultModifiers
          , r = void 0 === n ? [] : n
          , o = t.defaultOptions
          , a = void 0 === o ? V : o;
        return function(e, t, n) {
            void 0 === n && (n = a);
            var o = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, V, a),
                modifiersData: {},
                elements: {
                    reference: e,
                    popper: t
                },
                attributes: {},
                styles: {}
            }
              , u = []
              , l = !1
              , c = {
                state: o,
                setOptions: function(n) {
                    s(),
                    o.options = Object.assign({}, a, o.options, n),
                    o.scrollParents = {
                        reference: i(e) ? g(e) : e.contextElement ? g(e.contextElement) : [],
                        popper: g(t)
                    };
                    var l = function(e) {
                        var t = D(e);
                        return M.reduce((function(e, n) {
                            return e.concat(t.filter((function(e) {
                                return e.phase === n
                            }
                            )))
                        }
                        ), [])
                    }(function(e) {
                        var t = e.reduce((function(e, t) {
                            var n = e[t.name];
                            return e[t.name] = n ? Object.assign({}, n, t, {
                                options: Object.assign({}, n.options, t.options),
                                data: Object.assign({}, n.data, t.data)
                            }) : t,
                            e
                        }
                        ), {});
                        return Object.keys(t).map((function(e) {
                            return t[e]
                        }
                        ))
                    }([].concat(r, o.options.modifiers)));
                    return o.orderedModifiers = l.filter((function(e) {
                        return e.enabled
                    }
                    )),
                    o.orderedModifiers.forEach((function(e) {
                        var t = e.name
                          , n = e.options
                          , r = void 0 === n ? {} : n
                          , a = e.effect;
                        if ("function" === typeof a) {
                            var i = a({
                                state: o,
                                name: t,
                                instance: c,
                                options: r
                            })
                              , l = function() {};
                            u.push(i || l)
                        }
                    }
                    )),
                    c.update()
                },
                forceUpdate: function() {
                    if (!l) {
                        var e = o.elements
                          , t = e.reference
                          , n = e.popper;
                        if (I(t, n)) {
                            o.rects = {
                                reference: y(t, O(n), "fixed" === o.options.strategy),
                                popper: v(n)
                            },
                            o.reset = !1,
                            o.placement = o.options.placement,
                            o.orderedModifiers.forEach((function(e) {
                                return o.modifiersData[e.name] = Object.assign({}, e.data)
                            }
                            ));
                            for (var r = 0; r < o.orderedModifiers.length; r++)
                                if (!0 !== o.reset) {
                                    var a = o.orderedModifiers[r]
                                      , i = a.fn
                                      , u = a.options
                                      , s = void 0 === u ? {} : u
                                      , f = a.name;
                                    "function" === typeof i && (o = i({
                                        state: o,
                                        options: s,
                                        name: f,
                                        instance: c
                                    }) || o)
                                } else
                                    o.reset = !1,
                                    r = -1
                        }
                    }
                },
                update: N((function() {
                    return new Promise((function(e) {
                        c.forceUpdate(),
                        e(o)
                    }
                    ))
                }
                )),
                destroy: function() {
                    s(),
                    l = !0
                }
            };
            if (!I(e, t))
                return c;
            function s() {
                u.forEach((function(e) {
                    return e()
                }
                )),
                u = []
            }
            return c.setOptions(n).then((function(e) {
                !l && n.onFirstUpdate && n.onFirstUpdate(e)
            }
            )),
            c
        }
    }
    var F = {
        passive: !0
    };
    var z = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {},
        effect: function(e) {
            var t = e.state
              , n = e.instance
              , r = e.options
              , a = r.scroll
              , i = void 0 === a || a
              , u = r.resize
              , l = void 0 === u || u
              , c = o(t.elements.popper)
              , s = [].concat(t.scrollParents.reference, t.scrollParents.popper);
            return i && s.forEach((function(e) {
                e.addEventListener("scroll", n.update, F)
            }
            )),
            l && c.addEventListener("resize", n.update, F),
            function() {
                i && s.forEach((function(e) {
                    e.removeEventListener("scroll", n.update, F)
                }
                )),
                l && c.removeEventListener("resize", n.update, F)
            }
        },
        data: {}
    };
    function B(e) {
        return e.split("-")[0]
    }
    function H(e) {
        return e.split("-")[1]
    }
    function W(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
    }
    function q(e) {
        var t, n = e.reference, r = e.element, o = e.placement, a = o ? B(o) : null, i = o ? H(o) : null, u = n.x + n.width / 2 - r.width / 2, l = n.y + n.height / 2 - r.height / 2;
        switch (a) {
        case k:
            t = {
                x: u,
                y: n.y - r.height
            };
            break;
        case S:
            t = {
                x: u,
                y: n.y + n.height
            };
            break;
        case E:
            t = {
                x: n.x + n.width,
                y: l
            };
            break;
        case P:
            t = {
                x: n.x - r.width,
                y: l
            };
            break;
        default:
            t = {
                x: n.x,
                y: n.y
            }
        }
        var c = a ? W(a) : null;
        if (null != c) {
            var s = "y" === c ? "height" : "width";
            switch (i) {
            case j:
                t[c] = t[c] - (n[s] / 2 - r[s] / 2);
                break;
            case T:
                t[c] = t[c] + (n[s] / 2 - r[s] / 2)
            }
        }
        return t
    }
    var $ = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function(e) {
            var t = e.state
              , n = e.name;
            t.modifiersData[n] = q({
                reference: t.rects.reference,
                element: t.rects.popper,
                strategy: "absolute",
                placement: t.placement
            })
        },
        data: {}
    }
      , K = Math.max
      , Y = Math.min
      , X = Math.round
      , Q = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    };
    function G(e) {
        var t, n = e.popper, r = e.popperRect, a = e.placement, i = e.offsets, u = e.position, l = e.gpuAcceleration, c = e.adaptive, f = e.roundOffsets, d = !0 === f ? function(e) {
            var t = e.x
              , n = e.y
              , r = window.devicePixelRatio || 1;
            return {
                x: X(X(t * r) / r) || 0,
                y: X(X(n * r) / r) || 0
            }
        }(i) : "function" === typeof f ? f(i) : i, y = d.x, v = void 0 === y ? 0 : y, h = d.y, m = void 0 === h ? 0 : h, g = i.hasOwnProperty("x"), b = i.hasOwnProperty("y"), w = P, _ = k, x = window;
        if (c) {
            var j = O(n)
              , T = "clientHeight"
              , A = "clientWidth";
            j === o(n) && "static" !== p(j = s(n)).position && (T = "scrollHeight",
            A = "scrollWidth"),
            j = j,
            a === k && (_ = S,
            m -= j[T] - r.height,
            m *= l ? 1 : -1),
            a === P && (w = E,
            v -= j[A] - r.width,
            v *= l ? 1 : -1)
        }
        var C, L = Object.assign({
            position: u
        }, c && Q);
        return l ? Object.assign({}, L, ((C = {})[_] = b ? "0" : "",
        C[w] = g ? "0" : "",
        C.transform = (x.devicePixelRatio || 1) < 2 ? "translate(" + v + "px, " + m + "px)" : "translate3d(" + v + "px, " + m + "px, 0)",
        C)) : Object.assign({}, L, ((t = {})[_] = b ? m + "px" : "",
        t[w] = g ? v + "px" : "",
        t.transform = "",
        t))
    }
    var Z = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function(e) {
            var t = e.state;
            Object.keys(t.elements).forEach((function(e) {
                var n = t.styles[e] || {}
                  , r = t.attributes[e] || {}
                  , o = t.elements[e];
                u(o) && c(o) && (Object.assign(o.style, n),
                Object.keys(r).forEach((function(e) {
                    var t = r[e];
                    !1 === t ? o.removeAttribute(e) : o.setAttribute(e, !0 === t ? "" : t)
                }
                )))
            }
            ))
        },
        effect: function(e) {
            var t = e.state
              , n = {
                popper: {
                    position: t.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                },
                arrow: {
                    position: "absolute"
                },
                reference: {}
            };
            return Object.assign(t.elements.popper.style, n.popper),
            t.styles = n,
            t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
            function() {
                Object.keys(t.elements).forEach((function(e) {
                    var r = t.elements[e]
                      , o = t.attributes[e] || {}
                      , a = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
                        return e[t] = "",
                        e
                    }
                    ), {});
                    u(r) && c(r) && (Object.assign(r.style, a),
                    Object.keys(o).forEach((function(e) {
                        r.removeAttribute(e)
                    }
                    )))
                }
                ))
            }
        },
        requires: ["computeStyles"]
    };
    var J = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };
    function ee(e) {
        return e.replace(/left|right|bottom|top/g, (function(e) {
            return J[e]
        }
        ))
    }
    var te = {
        start: "end",
        end: "start"
    };
    function ne(e) {
        return e.replace(/start|end/g, (function(e) {
            return te[e]
        }
        ))
    }
    function re(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t))
            return !0;
        if (n && l(n)) {
            var r = t;
            do {
                if (r && e.isSameNode(r))
                    return !0;
                r = r.parentNode || r.host
            } while (r)
        }
        return !1
    }
    function oe(e) {
        return Object.assign({}, e, {
            left: e.x,
            top: e.y,
            right: e.x + e.width,
            bottom: e.y + e.height
        })
    }
    function ae(e, t) {
        return t === A ? oe(function(e) {
            var t = o(e)
              , n = s(e)
              , r = t.visualViewport
              , a = n.clientWidth
              , i = n.clientHeight
              , u = 0
              , l = 0;
            return r && (a = r.width,
            i = r.height,
            /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (u = r.offsetLeft,
            l = r.offsetTop)),
            {
                width: a,
                height: i,
                x: u + f(e),
                y: l
            }
        }(e)) : u(t) ? function(e) {
            var t = r(e);
            return t.top = t.top + e.clientTop,
            t.left = t.left + e.clientLeft,
            t.bottom = t.top + e.clientHeight,
            t.right = t.left + e.clientWidth,
            t.width = e.clientWidth,
            t.height = e.clientHeight,
            t.x = t.left,
            t.y = t.top,
            t
        }(t) : oe(function(e) {
            var t, n = s(e), r = a(e), o = null == (t = e.ownerDocument) ? void 0 : t.body, i = K(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), u = K(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), l = -r.scrollLeft + f(e), c = -r.scrollTop;
            return "rtl" === p(o || n).direction && (l += K(n.clientWidth, o ? o.clientWidth : 0) - i),
            {
                width: i,
                height: u,
                x: l,
                y: c
            }
        }(s(e)))
    }
    function ie(e, t, n) {
        var r = "clippingParents" === t ? function(e) {
            var t = g(h(e))
              , n = ["absolute", "fixed"].indexOf(p(e).position) >= 0 && u(e) ? O(e) : e;
            return i(n) ? t.filter((function(e) {
                return i(e) && re(e, n) && "body" !== c(e)
            }
            )) : []
        }(e) : [].concat(t)
          , o = [].concat(r, [n])
          , a = o[0]
          , l = o.reduce((function(t, n) {
            var r = ae(e, n);
            return t.top = K(r.top, t.top),
            t.right = Y(r.right, t.right),
            t.bottom = Y(r.bottom, t.bottom),
            t.left = K(r.left, t.left),
            t
        }
        ), ae(e, a));
        return l.width = l.right - l.left,
        l.height = l.bottom - l.top,
        l.x = l.left,
        l.y = l.top,
        l
    }
    function ue(e) {
        return Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, e)
    }
    function le(e, t) {
        return t.reduce((function(t, n) {
            return t[n] = e,
            t
        }
        ), {})
    }
    function ce(e, t) {
        void 0 === t && (t = {});
        var n = t
          , o = n.placement
          , a = void 0 === o ? e.placement : o
          , u = n.boundary
          , l = void 0 === u ? "clippingParents" : u
          , c = n.rootBoundary
          , f = void 0 === c ? A : c
          , p = n.elementContext
          , d = void 0 === p ? C : p
          , y = n.altBoundary
          , v = void 0 !== y && y
          , h = n.padding
          , m = void 0 === h ? 0 : h
          , g = ue("number" !== typeof m ? m : le(m, x))
          , b = d === C ? "reference" : C
          , w = e.elements.reference
          , O = e.rects.popper
          , P = e.elements[v ? b : d]
          , _ = ie(i(P) ? P : P.contextElement || s(e.elements.popper), l, f)
          , j = r(w)
          , T = q({
            reference: j,
            element: O,
            strategy: "absolute",
            placement: a
        })
          , L = oe(Object.assign({}, O, T))
          , R = d === C ? L : j
          , M = {
            top: _.top - R.top + g.top,
            bottom: R.bottom - _.bottom + g.bottom,
            left: _.left - R.left + g.left,
            right: R.right - _.right + g.right
        }
          , D = e.modifiersData.offset;
        if (d === C && D) {
            var N = D[a];
            Object.keys(M).forEach((function(e) {
                var t = [E, S].indexOf(e) >= 0 ? 1 : -1
                  , n = [k, S].indexOf(e) >= 0 ? "y" : "x";
                M[e] += N[n] * t
            }
            ))
        }
        return M
    }
    function se(e, t, n) {
        return K(e, Y(t, n))
    }
    function fe(e, t, n) {
        return void 0 === n && (n = {
            x: 0,
            y: 0
        }),
        {
            top: e.top - t.height - n.y,
            right: e.right - t.width + n.x,
            bottom: e.bottom - t.height + n.y,
            left: e.left - t.width - n.x
        }
    }
    function pe(e) {
        return [k, E, S, P].some((function(t) {
            return e[t] >= 0
        }
        ))
    }
    var de = U({
        defaultModifiers: [z, $, {
            name: "computeStyles",
            enabled: !0,
            phase: "beforeWrite",
            fn: function(e) {
                var t = e.state
                  , n = e.options
                  , r = n.gpuAcceleration
                  , o = void 0 === r || r
                  , a = n.adaptive
                  , i = void 0 === a || a
                  , u = n.roundOffsets
                  , l = void 0 === u || u
                  , c = {
                    placement: B(t.placement),
                    popper: t.elements.popper,
                    popperRect: t.rects.popper,
                    gpuAcceleration: o
                };
                null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, G(Object.assign({}, c, {
                    offsets: t.modifiersData.popperOffsets,
                    position: t.options.strategy,
                    adaptive: i,
                    roundOffsets: l
                })))),
                null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, G(Object.assign({}, c, {
                    offsets: t.modifiersData.arrow,
                    position: "absolute",
                    adaptive: !1,
                    roundOffsets: l
                })))),
                t.attributes.popper = Object.assign({}, t.attributes.popper, {
                    "data-popper-placement": t.placement
                })
            },
            data: {}
        }, Z, {
            name: "offset",
            enabled: !0,
            phase: "main",
            requires: ["popperOffsets"],
            fn: function(e) {
                var t = e.state
                  , n = e.options
                  , r = e.name
                  , o = n.offset
                  , a = void 0 === o ? [0, 0] : o
                  , i = R.reduce((function(e, n) {
                    return e[n] = function(e, t, n) {
                        var r = B(e)
                          , o = [P, k].indexOf(r) >= 0 ? -1 : 1
                          , a = "function" === typeof n ? n(Object.assign({}, t, {
                            placement: e
                        })) : n
                          , i = a[0]
                          , u = a[1];
                        return i = i || 0,
                        u = (u || 0) * o,
                        [P, E].indexOf(r) >= 0 ? {
                            x: u,
                            y: i
                        } : {
                            x: i,
                            y: u
                        }
                    }(n, t.rects, a),
                    e
                }
                ), {})
                  , u = i[t.placement]
                  , l = u.x
                  , c = u.y;
                null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += l,
                t.modifiersData.popperOffsets.y += c),
                t.modifiersData[r] = i
            }
        }, {
            name: "flip",
            enabled: !0,
            phase: "main",
            fn: function(e) {
                var t = e.state
                  , n = e.options
                  , r = e.name;
                if (!t.modifiersData[r]._skip) {
                    for (var o = n.mainAxis, a = void 0 === o || o, i = n.altAxis, u = void 0 === i || i, l = n.fallbackPlacements, c = n.padding, s = n.boundary, f = n.rootBoundary, p = n.altBoundary, d = n.flipVariations, y = void 0 === d || d, v = n.allowedAutoPlacements, h = t.options.placement, m = B(h), g = l || (m === h || !y ? [ee(h)] : function(e) {
                        if (B(e) === _)
                            return [];
                        var t = ee(e);
                        return [ne(e), t, ne(t)]
                    }(h)), b = [h].concat(g).reduce((function(e, n) {
                        return e.concat(B(n) === _ ? function(e, t) {
                            void 0 === t && (t = {});
                            var n = t
                              , r = n.placement
                              , o = n.boundary
                              , a = n.rootBoundary
                              , i = n.padding
                              , u = n.flipVariations
                              , l = n.allowedAutoPlacements
                              , c = void 0 === l ? R : l
                              , s = H(r)
                              , f = s ? u ? L : L.filter((function(e) {
                                return H(e) === s
                            }
                            )) : x
                              , p = f.filter((function(e) {
                                return c.indexOf(e) >= 0
                            }
                            ));
                            0 === p.length && (p = f);
                            var d = p.reduce((function(t, n) {
                                return t[n] = ce(e, {
                                    placement: n,
                                    boundary: o,
                                    rootBoundary: a,
                                    padding: i
                                })[B(n)],
                                t
                            }
                            ), {});
                            return Object.keys(d).sort((function(e, t) {
                                return d[e] - d[t]
                            }
                            ))
                        }(t, {
                            placement: n,
                            boundary: s,
                            rootBoundary: f,
                            padding: c,
                            flipVariations: y,
                            allowedAutoPlacements: v
                        }) : n)
                    }
                    ), []), w = t.rects.reference, O = t.rects.popper, T = new Map, A = !0, C = b[0], M = 0; M < b.length; M++) {
                        var D = b[M]
                          , N = B(D)
                          , V = H(D) === j
                          , I = [k, S].indexOf(N) >= 0
                          , U = I ? "width" : "height"
                          , F = ce(t, {
                            placement: D,
                            boundary: s,
                            rootBoundary: f,
                            altBoundary: p,
                            padding: c
                        })
                          , z = I ? V ? E : P : V ? S : k;
                        w[U] > O[U] && (z = ee(z));
                        var W = ee(z)
                          , q = [];
                        if (a && q.push(F[N] <= 0),
                        u && q.push(F[z] <= 0, F[W] <= 0),
                        q.every((function(e) {
                            return e
                        }
                        ))) {
                            C = D,
                            A = !1;
                            break
                        }
                        T.set(D, q)
                    }
                    if (A)
                        for (var $ = function(e) {
                            var t = b.find((function(t) {
                                var n = T.get(t);
                                if (n)
                                    return n.slice(0, e).every((function(e) {
                                        return e
                                    }
                                    ))
                            }
                            ));
                            if (t)
                                return C = t,
                                "break"
                        }, K = y ? 3 : 1; K > 0; K--) {
                            if ("break" === $(K))
                                break
                        }
                    t.placement !== C && (t.modifiersData[r]._skip = !0,
                    t.placement = C,
                    t.reset = !0)
                }
            },
            requiresIfExists: ["offset"],
            data: {
                _skip: !1
            }
        }, {
            name: "preventOverflow",
            enabled: !0,
            phase: "main",
            fn: function(e) {
                var t = e.state
                  , n = e.options
                  , r = e.name
                  , o = n.mainAxis
                  , a = void 0 === o || o
                  , i = n.altAxis
                  , u = void 0 !== i && i
                  , l = n.boundary
                  , c = n.rootBoundary
                  , s = n.altBoundary
                  , f = n.padding
                  , p = n.tether
                  , d = void 0 === p || p
                  , y = n.tetherOffset
                  , h = void 0 === y ? 0 : y
                  , m = ce(t, {
                    boundary: l,
                    rootBoundary: c,
                    padding: f,
                    altBoundary: s
                })
                  , g = B(t.placement)
                  , b = H(t.placement)
                  , w = !b
                  , _ = W(g)
                  , x = "x" === _ ? "y" : "x"
                  , T = t.modifiersData.popperOffsets
                  , A = t.rects.reference
                  , C = t.rects.popper
                  , L = "function" === typeof h ? h(Object.assign({}, t.rects, {
                    placement: t.placement
                })) : h
                  , R = {
                    x: 0,
                    y: 0
                };
                if (T) {
                    if (a || u) {
                        var M = "y" === _ ? k : P
                          , D = "y" === _ ? S : E
                          , N = "y" === _ ? "height" : "width"
                          , V = T[_]
                          , I = T[_] + m[M]
                          , U = T[_] - m[D]
                          , F = d ? -C[N] / 2 : 0
                          , z = b === j ? A[N] : C[N]
                          , q = b === j ? -C[N] : -A[N]
                          , $ = t.elements.arrow
                          , X = d && $ ? v($) : {
                            width: 0,
                            height: 0
                        }
                          , Q = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        }
                          , G = Q[M]
                          , Z = Q[D]
                          , J = se(0, A[N], X[N])
                          , ee = w ? A[N] / 2 - F - J - G - L : z - J - G - L
                          , te = w ? -A[N] / 2 + F + J + Z + L : q + J + Z + L
                          , ne = t.elements.arrow && O(t.elements.arrow)
                          , re = ne ? "y" === _ ? ne.clientTop || 0 : ne.clientLeft || 0 : 0
                          , oe = t.modifiersData.offset ? t.modifiersData.offset[t.placement][_] : 0
                          , ae = T[_] + ee - oe - re
                          , ie = T[_] + te - oe;
                        if (a) {
                            var ue = se(d ? Y(I, ae) : I, V, d ? K(U, ie) : U);
                            T[_] = ue,
                            R[_] = ue - V
                        }
                        if (u) {
                            var le = "x" === _ ? k : P
                              , fe = "x" === _ ? S : E
                              , pe = T[x]
                              , de = pe + m[le]
                              , ye = pe - m[fe]
                              , ve = se(d ? Y(de, ae) : de, pe, d ? K(ye, ie) : ye);
                            T[x] = ve,
                            R[x] = ve - pe
                        }
                    }
                    t.modifiersData[r] = R
                }
            },
            requiresIfExists: ["offset"]
        }, {
            name: "arrow",
            enabled: !0,
            phase: "main",
            fn: function(e) {
                var t, n = e.state, r = e.name, o = e.options, a = n.elements.arrow, i = n.modifiersData.popperOffsets, u = B(n.placement), l = W(u), c = [P, E].indexOf(u) >= 0 ? "height" : "width";
                if (a && i) {
                    var s = function(e, t) {
                        return ue("number" !== typeof (e = "function" === typeof e ? e(Object.assign({}, t.rects, {
                            placement: t.placement
                        })) : e) ? e : le(e, x))
                    }(o.padding, n)
                      , f = v(a)
                      , p = "y" === l ? k : P
                      , d = "y" === l ? S : E
                      , y = n.rects.reference[c] + n.rects.reference[l] - i[l] - n.rects.popper[c]
                      , h = i[l] - n.rects.reference[l]
                      , m = O(a)
                      , g = m ? "y" === l ? m.clientHeight || 0 : m.clientWidth || 0 : 0
                      , b = y / 2 - h / 2
                      , w = s[p]
                      , _ = g - f[c] - s[d]
                      , j = g / 2 - f[c] / 2 + b
                      , T = se(w, j, _)
                      , A = l;
                    n.modifiersData[r] = ((t = {})[A] = T,
                    t.centerOffset = T - j,
                    t)
                }
            },
            effect: function(e) {
                var t = e.state
                  , n = e.options.element
                  , r = void 0 === n ? "[data-popper-arrow]" : n;
                null != r && ("string" !== typeof r || (r = t.elements.popper.querySelector(r))) && re(t.elements.popper, r) && (t.elements.arrow = r)
            },
            requires: ["popperOffsets"],
            requiresIfExists: ["preventOverflow"]
        }, {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function(e) {
                var t = e.state
                  , n = e.name
                  , r = t.rects.reference
                  , o = t.rects.popper
                  , a = t.modifiersData.preventOverflow
                  , i = ce(t, {
                    elementContext: "reference"
                })
                  , u = ce(t, {
                    altBoundary: !0
                })
                  , l = fe(i, r)
                  , c = fe(u, o, a)
                  , s = pe(l)
                  , f = pe(c);
                t.modifiersData[n] = {
                    referenceClippingOffsets: l,
                    popperEscapeOffsets: c,
                    isReferenceHidden: s,
                    hasPopperEscaped: f
                },
                t.attributes.popper = Object.assign({}, t.attributes.popper, {
                    "data-popper-reference-hidden": s,
                    "data-popper-escaped": f
                })
            }
        }]
    })
      , ye = "tippy-content"
      , ve = "tippy-backdrop"
      , he = "tippy-arrow"
      , me = "tippy-svg-arrow"
      , ge = {
        passive: !0,
        capture: !0
    };
    function be(e, t, n) {
        if (Array.isArray(e)) {
            var r = e[t];
            return null == r ? Array.isArray(n) ? n[t] : n : r
        }
        return e
    }
    function we(e, t) {
        var n = {}.toString.call(e);
        return 0 === n.indexOf("[object") && n.indexOf(t + "]") > -1
    }
    function Oe(e, t) {
        return "function" === typeof e ? e.apply(void 0, t) : e
    }
    function ke(e, t) {
        return 0 === t ? e : function(r) {
            clearTimeout(n),
            n = setTimeout((function() {
                e(r)
            }
            ), t)
        }
        ;
        var n
    }
    function Se(e) {
        return [].concat(e)
    }
    function Ee(e, t) {
        -1 === e.indexOf(t) && e.push(t)
    }
    function Pe(e) {
        return e.split("-")[0]
    }
    function _e(e) {
        return [].slice.call(e)
    }
    function xe() {
        return document.createElement("div")
    }
    function je(e) {
        return ["Element", "Fragment"].some((function(t) {
            return we(e, t)
        }
        ))
    }
    function Te(e) {
        return we(e, "MouseEvent")
    }
    function Ae(e) {
        return !(!e || !e._tippy || e._tippy.reference !== e)
    }
    function Ce(e) {
        return je(e) ? [e] : function(e) {
            return we(e, "NodeList")
        }(e) ? _e(e) : Array.isArray(e) ? e : _e(document.querySelectorAll(e))
    }
    function Le(e, t) {
        e.forEach((function(e) {
            e && (e.style.transitionDuration = t + "ms")
        }
        ))
    }
    function Re(e, t) {
        e.forEach((function(e) {
            e && e.setAttribute("data-state", t)
        }
        ))
    }
    function Me(e) {
        var t, n = Se(e)[0];
        return (null == n || null == (t = n.ownerDocument) ? void 0 : t.body) ? n.ownerDocument : document
    }
    function De(e, t, n) {
        var r = t + "EventListener";
        ["transitionend", "webkitTransitionEnd"].forEach((function(t) {
            e[r](t, n)
        }
        ))
    }
    var Ne = {
        isTouch: !1
    }
      , Ve = 0;
    function Ie() {
        Ne.isTouch || (Ne.isTouch = !0,
        window.performance && document.addEventListener("mousemove", Ue))
    }
    function Ue() {
        var e = performance.now();
        e - Ve < 20 && (Ne.isTouch = !1,
        document.removeEventListener("mousemove", Ue)),
        Ve = e
    }
    function Fe() {
        var e = document.activeElement;
        if (Ae(e)) {
            var t = e._tippy;
            e.blur && !t.state.isVisible && e.blur()
        }
    }
    var ze = "undefined" !== typeof window && "undefined" !== typeof document ? navigator.userAgent : ""
      , Be = /MSIE |Trident\//.test(ze);
    var He = {
        animateFill: !1,
        followCursor: !1,
        inlinePositioning: !1,
        sticky: !1
    }
      , We = Object.assign({
        appendTo: function() {
            return document.body
        },
        aria: {
            content: "auto",
            expanded: "auto"
        },
        delay: 0,
        duration: [300, 250],
        getReferenceClientRect: null,
        hideOnClick: !0,
        ignoreAttributes: !1,
        interactive: !1,
        interactiveBorder: 2,
        interactiveDebounce: 0,
        moveTransition: "",
        offset: [0, 10],
        onAfterUpdate: function() {},
        onBeforeUpdate: function() {},
        onCreate: function() {},
        onDestroy: function() {},
        onHidden: function() {},
        onHide: function() {},
        onMount: function() {},
        onShow: function() {},
        onShown: function() {},
        onTrigger: function() {},
        onUntrigger: function() {},
        onClickOutside: function() {},
        placement: "top",
        plugins: [],
        popperOptions: {},
        render: null,
        showOnCreate: !1,
        touch: !0,
        trigger: "mouseenter focus",
        triggerTarget: null
    }, He, {}, {
        allowHTML: !1,
        animation: "fade",
        arrow: !0,
        content: "",
        inertia: !1,
        maxWidth: 350,
        role: "tooltip",
        theme: "",
        zIndex: 9999
    })
      , qe = Object.keys(We);
    function $e(e) {
        var t = (e.plugins || []).reduce((function(t, n) {
            var r = n.name
              , o = n.defaultValue;
            return r && (t[r] = void 0 !== e[r] ? e[r] : o),
            t
        }
        ), {});
        return Object.assign({}, e, {}, t)
    }
    function Ke(e, t) {
        var n = Object.assign({}, t, {
            content: Oe(t.content, [e])
        }, t.ignoreAttributes ? {} : function(e, t) {
            return (t ? Object.keys($e(Object.assign({}, We, {
                plugins: t
            }))) : qe).reduce((function(t, n) {
                var r = (e.getAttribute("data-tippy-" + n) || "").trim();
                if (!r)
                    return t;
                if ("content" === n)
                    t[n] = r;
                else
                    try {
                        t[n] = JSON.parse(r)
                    } catch (o) {
                        t[n] = r
                    }
                return t
            }
            ), {})
        }(e, t.plugins));
        return n.aria = Object.assign({}, We.aria, {}, n.aria),
        n.aria = {
            expanded: "auto" === n.aria.expanded ? t.interactive : n.aria.expanded,
            content: "auto" === n.aria.content ? t.interactive ? null : "describedby" : n.aria.content
        },
        n
    }
    function Ye(e, t) {
        e.innerHTML = t
    }
    function Xe(e) {
        var t = xe();
        return !0 === e ? t.className = he : (t.className = me,
        je(e) ? t.appendChild(e) : Ye(t, e)),
        t
    }
    function Qe(e, t) {
        je(t.content) ? (Ye(e, ""),
        e.appendChild(t.content)) : "function" !== typeof t.content && (t.allowHTML ? Ye(e, t.content) : e.textContent = t.content)
    }
    function Ge(e) {
        var t = e.firstElementChild
          , n = _e(t.children);
        return {
            box: t,
            content: n.find((function(e) {
                return e.classList.contains(ye)
            }
            )),
            arrow: n.find((function(e) {
                return e.classList.contains(he) || e.classList.contains(me)
            }
            )),
            backdrop: n.find((function(e) {
                return e.classList.contains(ve)
            }
            ))
        }
    }
    function Ze(e) {
        var t = xe()
          , n = xe();
        n.className = "tippy-box",
        n.setAttribute("data-state", "hidden"),
        n.setAttribute("tabindex", "-1");
        var r = xe();
        function o(n, r) {
            var o = Ge(t)
              , a = o.box
              , i = o.content
              , u = o.arrow;
            r.theme ? a.setAttribute("data-theme", r.theme) : a.removeAttribute("data-theme"),
            "string" === typeof r.animation ? a.setAttribute("data-animation", r.animation) : a.removeAttribute("data-animation"),
            r.inertia ? a.setAttribute("data-inertia", "") : a.removeAttribute("data-inertia"),
            a.style.maxWidth = "number" === typeof r.maxWidth ? r.maxWidth + "px" : r.maxWidth,
            r.role ? a.setAttribute("role", r.role) : a.removeAttribute("role"),
            n.content === r.content && n.allowHTML === r.allowHTML || Qe(i, e.props),
            r.arrow ? u ? n.arrow !== r.arrow && (a.removeChild(u),
            a.appendChild(Xe(r.arrow))) : a.appendChild(Xe(r.arrow)) : u && a.removeChild(u)
        }
        return r.className = ye,
        r.setAttribute("data-state", "hidden"),
        Qe(r, e.props),
        t.appendChild(n),
        n.appendChild(r),
        o(e.props, e.props),
        {
            popper: t,
            onUpdate: o
        }
    }
    Ze.$$tippy = !0;
    var Je = 1
      , et = []
      , tt = [];
    function nt(e, t) {
        var n, r, o, a, i, u, l, c, s, f = Ke(e, Object.assign({}, We, {}, $e((n = t,
        Object.keys(n).reduce((function(e, t) {
            return void 0 !== n[t] && (e[t] = n[t]),
            e
        }
        ), {}))))), p = !1, d = !1, y = !1, v = !1, h = [], m = ke(Y, f.interactiveDebounce), g = Je++, b = (s = f.plugins).filter((function(e, t) {
            return s.indexOf(e) === t
        }
        )), w = {
            id: g,
            reference: e,
            popper: xe(),
            popperInstance: null,
            props: f,
            state: {
                isEnabled: !0,
                isVisible: !1,
                isDestroyed: !1,
                isMounted: !1,
                isShown: !1
            },
            plugins: b,
            clearDelayTimeouts: function() {
                clearTimeout(r),
                clearTimeout(o),
                cancelAnimationFrame(a)
            },
            setProps: function(t) {
                0;
                if (w.state.isDestroyed)
                    return;
                M("onBeforeUpdate", [w, t]),
                $();
                var n = w.props
                  , r = Ke(e, Object.assign({}, w.props, {}, t, {
                    ignoreAttributes: !0
                }));
                w.props = r,
                q(),
                n.interactiveDebounce !== r.interactiveDebounce && (V(),
                m = ke(Y, r.interactiveDebounce));
                n.triggerTarget && !r.triggerTarget ? Se(n.triggerTarget).forEach((function(e) {
                    e.removeAttribute("aria-expanded")
                }
                )) : r.triggerTarget && e.removeAttribute("aria-expanded");
                N(),
                R(),
                S && S(n, r);
                w.popperInstance && (Z(),
                ee().forEach((function(e) {
                    requestAnimationFrame(e._tippy.popperInstance.forceUpdate)
                }
                )));
                M("onAfterUpdate", [w, t])
            },
            setContent: function(e) {
                w.setProps({
                    content: e
                })
            },
            show: function() {
                0;
                var e = w.state.isVisible
                  , t = w.state.isDestroyed
                  , n = !w.state.isEnabled
                  , r = Ne.isTouch && !w.props.touch
                  , o = be(w.props.duration, 0, We.duration);
                if (e || t || n || r)
                    return;
                if (T().hasAttribute("disabled"))
                    return;
                if (M("onShow", [w], !1),
                !1 === w.props.onShow(w))
                    return;
                w.state.isVisible = !0,
                j() && (k.style.visibility = "visible");
                R(),
                z(),
                w.state.isMounted || (k.style.transition = "none");
                if (j()) {
                    var a = C()
                      , i = a.box
                      , u = a.content;
                    Le([i, u], 0)
                }
                l = function() {
                    var e;
                    if (w.state.isVisible && !v) {
                        if (v = !0,
                        k.offsetHeight,
                        k.style.transition = w.props.moveTransition,
                        j() && w.props.animation) {
                            var t = C()
                              , n = t.box
                              , r = t.content;
                            Le([n, r], o),
                            Re([n, r], "visible")
                        }
                        D(),
                        N(),
                        Ee(tt, w),
                        null == (e = w.popperInstance) || e.forceUpdate(),
                        w.state.isMounted = !0,
                        M("onMount", [w]),
                        w.props.animation && j() && function(e, t) {
                            H(e, t)
                        }(o, (function() {
                            w.state.isShown = !0,
                            M("onShown", [w])
                        }
                        ))
                    }
                }
                ,
                function() {
                    var e, t = w.props.appendTo, n = T();
                    e = w.props.interactive && t === We.appendTo || "parent" === t ? n.parentNode : Oe(t, [n]);
                    e.contains(k) || e.appendChild(k);
                    Z(),
                    !1
                }()
            },
            hide: function() {
                0;
                var e = !w.state.isVisible
                  , t = w.state.isDestroyed
                  , n = !w.state.isEnabled
                  , r = be(w.props.duration, 1, We.duration);
                if (e || t || n)
                    return;
                if (M("onHide", [w], !1),
                !1 === w.props.onHide(w))
                    return;
                w.state.isVisible = !1,
                w.state.isShown = !1,
                v = !1,
                p = !1,
                j() && (k.style.visibility = "hidden");
                if (V(),
                B(),
                R(),
                j()) {
                    var o = C()
                      , a = o.box
                      , i = o.content;
                    w.props.animation && (Le([a, i], r),
                    Re([a, i], "hidden"))
                }
                D(),
                N(),
                w.props.animation ? j() && function(e, t) {
                    H(e, (function() {
                        !w.state.isVisible && k.parentNode && k.parentNode.contains(k) && t()
                    }
                    ))
                }(r, w.unmount) : w.unmount()
            },
            hideWithInteractivity: function(e) {
                0;
                A().addEventListener("mousemove", m),
                Ee(et, m),
                m(e)
            },
            enable: function() {
                w.state.isEnabled = !0
            },
            disable: function() {
                w.hide(),
                w.state.isEnabled = !1
            },
            unmount: function() {
                0;
                w.state.isVisible && w.hide();
                if (!w.state.isMounted)
                    return;
                J(),
                ee().forEach((function(e) {
                    e._tippy.unmount()
                }
                )),
                k.parentNode && k.parentNode.removeChild(k);
                tt = tt.filter((function(e) {
                    return e !== w
                }
                )),
                w.state.isMounted = !1,
                M("onHidden", [w])
            },
            destroy: function() {
                0;
                if (w.state.isDestroyed)
                    return;
                w.clearDelayTimeouts(),
                w.unmount(),
                $(),
                delete e._tippy,
                w.state.isDestroyed = !0,
                M("onDestroy", [w])
            }
        };
        if (!f.render)
            return w;
        var O = f.render(w)
          , k = O.popper
          , S = O.onUpdate;
        k.setAttribute("data-tippy-root", ""),
        k.id = "tippy-" + w.id,
        w.popper = k,
        e._tippy = w,
        k._tippy = w;
        var E = b.map((function(e) {
            return e.fn(w)
        }
        ))
          , P = e.hasAttribute("aria-expanded");
        return q(),
        N(),
        R(),
        M("onCreate", [w]),
        f.showOnCreate && te(),
        k.addEventListener("mouseenter", (function() {
            w.props.interactive && w.state.isVisible && w.clearDelayTimeouts()
        }
        )),
        k.addEventListener("mouseleave", (function(e) {
            w.props.interactive && w.props.trigger.indexOf("mouseenter") >= 0 && (A().addEventListener("mousemove", m),
            m(e))
        }
        )),
        w;
        function _() {
            var e = w.props.touch;
            return Array.isArray(e) ? e : [e, 0]
        }
        function x() {
            return "hold" === _()[0]
        }
        function j() {
            var e;
            return !!(null == (e = w.props.render) ? void 0 : e.$$tippy)
        }
        function T() {
            return c || e
        }
        function A() {
            var e = T().parentNode;
            return e ? Me(e) : document
        }
        function C() {
            return Ge(k)
        }
        function L(e) {
            return w.state.isMounted && !w.state.isVisible || Ne.isTouch || i && "focus" === i.type ? 0 : be(w.props.delay, e ? 0 : 1, We.delay)
        }
        function R() {
            k.style.pointerEvents = w.props.interactive && w.state.isVisible ? "" : "none",
            k.style.zIndex = "" + w.props.zIndex
        }
        function M(e, t, n) {
            var r;
            (void 0 === n && (n = !0),
            E.forEach((function(n) {
                n[e] && n[e].apply(void 0, t)
            }
            )),
            n) && (r = w.props)[e].apply(r, t)
        }
        function D() {
            var t = w.props.aria;
            if (t.content) {
                var n = "aria-" + t.content
                  , r = k.id;
                Se(w.props.triggerTarget || e).forEach((function(e) {
                    var t = e.getAttribute(n);
                    if (w.state.isVisible)
                        e.setAttribute(n, t ? t + " " + r : r);
                    else {
                        var o = t && t.replace(r, "").trim();
                        o ? e.setAttribute(n, o) : e.removeAttribute(n)
                    }
                }
                ))
            }
        }
        function N() {
            !P && w.props.aria.expanded && Se(w.props.triggerTarget || e).forEach((function(e) {
                w.props.interactive ? e.setAttribute("aria-expanded", w.state.isVisible && e === T() ? "true" : "false") : e.removeAttribute("aria-expanded")
            }
            ))
        }
        function V() {
            A().removeEventListener("mousemove", m),
            et = et.filter((function(e) {
                return e !== m
            }
            ))
        }
        function I(e) {
            if ((!Ne.isTouch || !y && "mousedown" !== e.type) && (!w.props.interactive || !k.contains(e.target))) {
                if (T().contains(e.target)) {
                    if (Ne.isTouch)
                        return;
                    if (w.state.isVisible && w.props.trigger.indexOf("click") >= 0)
                        return
                } else
                    M("onClickOutside", [w, e]);
                !0 === w.props.hideOnClick && (w.clearDelayTimeouts(),
                w.hide(),
                d = !0,
                setTimeout((function() {
                    d = !1
                }
                )),
                w.state.isMounted || B())
            }
        }
        function U() {
            y = !0
        }
        function F() {
            y = !1
        }
        function z() {
            var e = A();
            e.addEventListener("mousedown", I, !0),
            e.addEventListener("touchend", I, ge),
            e.addEventListener("touchstart", F, ge),
            e.addEventListener("touchmove", U, ge)
        }
        function B() {
            var e = A();
            e.removeEventListener("mousedown", I, !0),
            e.removeEventListener("touchend", I, ge),
            e.removeEventListener("touchstart", F, ge),
            e.removeEventListener("touchmove", U, ge)
        }
        function H(e, t) {
            var n = C().box;
            function r(e) {
                e.target === n && (De(n, "remove", r),
                t())
            }
            if (0 === e)
                return t();
            De(n, "remove", u),
            De(n, "add", r),
            u = r
        }
        function W(t, n, r) {
            void 0 === r && (r = !1),
            Se(w.props.triggerTarget || e).forEach((function(e) {
                e.addEventListener(t, n, r),
                h.push({
                    node: e,
                    eventType: t,
                    handler: n,
                    options: r
                })
            }
            ))
        }
        function q() {
            var e;
            x() && (W("touchstart", K, {
                passive: !0
            }),
            W("touchend", X, {
                passive: !0
            })),
            (e = w.props.trigger,
            e.split(/\s+/).filter(Boolean)).forEach((function(e) {
                if ("manual" !== e)
                    switch (W(e, K),
                    e) {
                    case "mouseenter":
                        W("mouseleave", X);
                        break;
                    case "focus":
                        W(Be ? "focusout" : "blur", Q);
                        break;
                    case "focusin":
                        W("focusout", Q)
                    }
            }
            ))
        }
        function $() {
            h.forEach((function(e) {
                var t = e.node
                  , n = e.eventType
                  , r = e.handler
                  , o = e.options;
                t.removeEventListener(n, r, o)
            }
            )),
            h = []
        }
        function K(e) {
            var t, n = !1;
            if (w.state.isEnabled && !G(e) && !d) {
                var r = "focus" === (null == (t = i) ? void 0 : t.type);
                i = e,
                c = e.currentTarget,
                N(),
                !w.state.isVisible && Te(e) && et.forEach((function(t) {
                    return t(e)
                }
                )),
                "click" === e.type && (w.props.trigger.indexOf("mouseenter") < 0 || p) && !1 !== w.props.hideOnClick && w.state.isVisible ? n = !0 : te(e),
                "click" === e.type && (p = !n),
                n && !r && ne(e)
            }
        }
        function Y(e) {
            var t = e.target
              , n = T().contains(t) || k.contains(t);
            "mousemove" === e.type && n || function(e, t) {
                var n = t.clientX
                  , r = t.clientY;
                return e.every((function(e) {
                    var t = e.popperRect
                      , o = e.popperState
                      , a = e.props.interactiveBorder
                      , i = Pe(o.placement)
                      , u = o.modifiersData.offset;
                    if (!u)
                        return !0;
                    var l = "bottom" === i ? u.top.y : 0
                      , c = "top" === i ? u.bottom.y : 0
                      , s = "right" === i ? u.left.x : 0
                      , f = "left" === i ? u.right.x : 0
                      , p = t.top - r + l > a
                      , d = r - t.bottom - c > a
                      , y = t.left - n + s > a
                      , v = n - t.right - f > a;
                    return p || d || y || v
                }
                ))
            }(ee().concat(k).map((function(e) {
                var t, n = null == (t = e._tippy.popperInstance) ? void 0 : t.state;
                return n ? {
                    popperRect: e.getBoundingClientRect(),
                    popperState: n,
                    props: f
                } : null
            }
            )).filter(Boolean), e) && (V(),
            ne(e))
        }
        function X(e) {
            G(e) || w.props.trigger.indexOf("click") >= 0 && p || (w.props.interactive ? w.hideWithInteractivity(e) : ne(e))
        }
        function Q(e) {
            w.props.trigger.indexOf("focusin") < 0 && e.target !== T() || w.props.interactive && e.relatedTarget && k.contains(e.relatedTarget) || ne(e)
        }
        function G(e) {
            return !!Ne.isTouch && x() !== e.type.indexOf("touch") >= 0
        }
        function Z() {
            J();
            var t = w.props
              , n = t.popperOptions
              , r = t.placement
              , o = t.offset
              , a = t.getReferenceClientRect
              , i = t.moveTransition
              , u = j() ? Ge(k).arrow : null
              , c = a ? {
                getBoundingClientRect: a,
                contextElement: a.contextElement || T()
            } : e
              , s = [{
                name: "offset",
                options: {
                    offset: o
                }
            }, {
                name: "preventOverflow",
                options: {
                    padding: {
                        top: 2,
                        bottom: 2,
                        left: 5,
                        right: 5
                    }
                }
            }, {
                name: "flip",
                options: {
                    padding: 5
                }
            }, {
                name: "computeStyles",
                options: {
                    adaptive: !i
                }
            }, {
                name: "$$tippy",
                enabled: !0,
                phase: "beforeWrite",
                requires: ["computeStyles"],
                fn: function(e) {
                    var t = e.state;
                    if (j()) {
                        var n = C().box;
                        ["placement", "reference-hidden", "escaped"].forEach((function(e) {
                            "placement" === e ? n.setAttribute("data-placement", t.placement) : t.attributes.popper["data-popper-" + e] ? n.setAttribute("data-" + e, "") : n.removeAttribute("data-" + e)
                        }
                        )),
                        t.attributes.popper = {}
                    }
                }
            }];
            j() && u && s.push({
                name: "arrow",
                options: {
                    element: u,
                    padding: 3
                }
            }),
            s.push.apply(s, (null == n ? void 0 : n.modifiers) || []),
            w.popperInstance = de(c, k, Object.assign({}, n, {
                placement: r,
                onFirstUpdate: l,
                modifiers: s
            }))
        }
        function J() {
            w.popperInstance && (w.popperInstance.destroy(),
            w.popperInstance = null)
        }
        function ee() {
            return _e(k.querySelectorAll("[data-tippy-root]"))
        }
        function te(e) {
            w.clearDelayTimeouts(),
            e && M("onTrigger", [w, e]),
            z();
            var t = L(!0)
              , n = _()
              , o = n[0]
              , a = n[1];
            Ne.isTouch && "hold" === o && a && (t = a),
            t ? r = setTimeout((function() {
                w.show()
            }
            ), t) : w.show()
        }
        function ne(e) {
            if (w.clearDelayTimeouts(),
            M("onUntrigger", [w, e]),
            w.state.isVisible) {
                if (!(w.props.trigger.indexOf("mouseenter") >= 0 && w.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(e.type) >= 0 && p)) {
                    var t = L(!1);
                    t ? o = setTimeout((function() {
                        w.state.isVisible && w.hide()
                    }
                    ), t) : a = requestAnimationFrame((function() {
                        w.hide()
                    }
                    ))
                }
            } else
                B()
        }
    }
    function rt(e, t) {
        void 0 === t && (t = {});
        var n = We.plugins.concat(t.plugins || []);
        document.addEventListener("touchstart", Ie, ge),
        window.addEventListener("blur", Fe);
        var r = Object.assign({}, t, {
            plugins: n
        })
          , o = Ce(e).reduce((function(e, t) {
            var n = t && nt(t, r);
            return n && e.push(n),
            e
        }
        ), []);
        return je(e) ? o[0] : o
    }
    rt.defaultProps = We,
    rt.setDefaultProps = function(e) {
        Object.keys(e).forEach((function(t) {
            We[t] = e[t]
        }
        ))
    }
    ,
    rt.currentInput = Ne;
    Object.assign({}, Z, {
        effect: function(e) {
            var t = e.state
              , n = {
                popper: {
                    position: t.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                },
                arrow: {
                    position: "absolute"
                },
                reference: {}
            };
            Object.assign(t.elements.popper.style, n.popper),
            t.styles = n,
            t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow)
        }
    });
    rt.setDefaultProps({
        render: Ze
    });
    var ot = rt
      , at = n(0)
      , it = n.n(at)
      , ut = n(18);
    function lt(e, t) {
        if (null == e)
            return {};
        var n, r, o = {}, a = Object.keys(e);
        for (r = 0; r < a.length; r++)
            n = a[r],
            t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
    }
    var ct = "undefined" !== typeof window && "undefined" !== typeof document;
    function st(e, t) {
        e && ("function" === typeof e && e(t),
        {}.hasOwnProperty.call(e, "current") && (e.current = t))
    }
    function ft() {
        return ct && document.createElement("div")
    }
    function pt(e, t) {
        if (e === t)
            return !0;
        if ("object" === typeof e && null != e && "object" === typeof t && null != t) {
            if (Object.keys(e).length !== Object.keys(t).length)
                return !1;
            for (var n in e) {
                if (!t.hasOwnProperty(n))
                    return !1;
                if (!pt(e[n], t[n]))
                    return !1
            }
            return !0
        }
        return !1
    }
    function dt(e) {
        var t = [];
        return e.forEach((function(e) {
            t.find((function(t) {
                return pt(e, t)
            }
            )) || t.push(e)
        }
        )),
        t
    }
    function yt(e, t) {
        var n, r;
        return Object.assign({}, t, {
            popperOptions: Object.assign({}, e.popperOptions, t.popperOptions, {
                modifiers: dt([].concat((null == (n = e.popperOptions) ? void 0 : n.modifiers) || [], (null == (r = t.popperOptions) ? void 0 : r.modifiers) || []))
            })
        })
    }
    var vt = ct ? at.useLayoutEffect : at.useEffect;
    function ht(e) {
        var t = Object(at.useRef)();
        return t.current || (t.current = "function" === typeof e ? e() : e),
        t.current
    }
    function mt(e, t, n) {
        n.split(/\s+/).forEach((function(n) {
            n && e.classList[t](n)
        }
        ))
    }
    var gt = {
        name: "className",
        defaultValue: "",
        fn: function(e) {
            var t = e.popper.firstElementChild
              , n = function() {
                var t;
                return !!(null == (t = e.props.render) ? void 0 : t.$$tippy)
            };
            function r() {
                e.props.className && !n() || mt(t, "add", e.props.className)
            }
            return {
                onCreate: r,
                onBeforeUpdate: function() {
                    n() && mt(t, "remove", e.props.className)
                },
                onAfterUpdate: r
            }
        }
    };
    function bt(e) {
        return function(t) {
            var n = t.children
              , r = t.content
              , o = t.visible
              , a = t.singleton
              , i = t.render
              , u = t.reference
              , l = t.disabled
              , c = void 0 !== l && l
              , s = t.ignoreAttributes
              , f = void 0 === s || s
              , p = (t.__source,
            t.__self,
            lt(t, ["children", "content", "visible", "singleton", "render", "reference", "disabled", "ignoreAttributes", "__source", "__self"]))
              , d = void 0 !== o
              , y = void 0 !== a
              , v = Object(at.useState)(!1)
              , h = v[0]
              , m = v[1]
              , g = Object(at.useState)({})
              , b = g[0]
              , w = g[1]
              , O = Object(at.useState)()
              , k = O[0]
              , S = O[1]
              , E = ht((function() {
                return {
                    container: ft(),
                    renders: 1
                }
            }
            ))
              , P = Object.assign({
                ignoreAttributes: f
            }, p, {
                content: E.container
            });
            d && (P.trigger = "manual",
            P.hideOnClick = !1),
            y && (c = !0);
            var _ = P
              , x = P.plugins || [];
            i && (_ = Object.assign({}, P, {
                plugins: y ? [].concat(x, [{
                    fn: function() {
                        return {
                            onTrigger: function(e, t) {
                                var n = a.data.children.find((function(e) {
                                    return e.instance.reference === t.currentTarget
                                }
                                )).content;
                                S(n)
                            }
                        }
                    }
                }]) : x,
                render: function() {
                    return {
                        popper: E.container
                    }
                }
            }));
            var j = [u].concat(n ? [n.type] : []);
            return vt((function() {
                var t = u;
                u && u.hasOwnProperty("current") && (t = u.current);
                var n = e(t || E.ref || ft(), Object.assign({}, _, {
                    plugins: [gt].concat(P.plugins || [])
                }));
                return E.instance = n,
                c && n.disable(),
                o && n.show(),
                y && a.hook({
                    instance: n,
                    content: r,
                    props: _
                }),
                m(!0),
                function() {
                    n.destroy(),
                    null == a || a.cleanup(n)
                }
            }
            ), j),
            vt((function() {
                var e;
                if (1 !== E.renders) {
                    var t = E.instance;
                    t.setProps(yt(t.props, _)),
                    null == (e = t.popperInstance) || e.forceUpdate(),
                    c ? t.disable() : t.enable(),
                    d && (o ? t.show() : t.hide()),
                    y && a.hook({
                        instance: t,
                        content: r,
                        props: _
                    })
                } else
                    E.renders++
            }
            )),
            vt((function() {
                var e;
                if (i) {
                    var t = E.instance;
                    t.setProps({
                        popperOptions: Object.assign({}, t.props.popperOptions, {
                            modifiers: [].concat(((null == (e = t.props.popperOptions) ? void 0 : e.modifiers) || []).filter((function(e) {
                                return "$$tippyReact" !== e.name
                            }
                            )), [{
                                name: "$$tippyReact",
                                enabled: !0,
                                phase: "beforeWrite",
                                requires: ["computeStyles"],
                                fn: function(e) {
                                    var t, n = e.state, r = null == (t = n.modifiersData) ? void 0 : t.hide;
                                    b.placement === n.placement && b.referenceHidden === (null == r ? void 0 : r.isReferenceHidden) && b.escaped === (null == r ? void 0 : r.hasPopperEscaped) || w({
                                        placement: n.placement,
                                        referenceHidden: null == r ? void 0 : r.isReferenceHidden,
                                        escaped: null == r ? void 0 : r.hasPopperEscaped
                                    }),
                                    n.attributes.popper = {}
                                }
                            }])
                        })
                    })
                }
            }
            ), [b.placement, b.referenceHidden, b.escaped].concat(j)),
            it.a.createElement(it.a.Fragment, null, n ? Object(at.cloneElement)(n, {
                ref: function(e) {
                    E.ref = e,
                    st(n.ref, e)
                }
            }) : null, h && Object(ut.createPortal)(i ? i(function(e) {
                var t = {
                    "data-placement": e.placement
                };
                return e.referenceHidden && (t["data-reference-hidden"] = ""),
                e.escaped && (t["data-escaped"] = ""),
                t
            }(b), k, E.instance) : r, E.container))
        }
    }
    var wt = function(e, t) {
        return Object(at.forwardRef)((function(n, r) {
            var o = n.children
              , a = lt(n, ["children"]);
            return it.a.createElement(e, Object.assign({}, t, a), o ? Object(at.cloneElement)(o, {
                ref: function(e) {
                    st(r, e),
                    st(o.ref, e)
                }
            }) : null)
        }
        ))
    }
      , Ot = wt(bt(ot));
    t.a = Ot
}
, , , , function(e, t, n) {
    "use strict";
    n(26);
    var r = n(0)
      , o = 60103;
    if (t.Fragment = 60107,
    "function" === typeof Symbol && Symbol.for) {
        var a = Symbol.for;
        o = a("react.element"),
        t.Fragment = a("react.fragment")
    }
    var i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
      , u = Object.prototype.hasOwnProperty
      , l = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function c(e, t, n) {
        var r, a = {}, c = null, s = null;
        for (r in void 0 !== n && (c = "" + n),
        void 0 !== t.key && (c = "" + t.key),
        void 0 !== t.ref && (s = t.ref),
        t)
            u.call(t, r) && !l.hasOwnProperty(r) && (a[r] = t[r]);
        if (e && e.defaultProps)
            for (r in t = e.defaultProps)
                void 0 === a[r] && (a[r] = t[r]);
        return {
            $$typeof: o,
            type: e,
            key: c,
            ref: s,
            props: a,
            _owner: i.current
        }
    }
    t.jsx = c,
    t.jsxs = c
}
, function(e, t, n) {
    "use strict";
    var r = n(26)
      , o = 60103
      , a = 60106;
    t.Fragment = 60107,
    t.StrictMode = 60108,
    t.Profiler = 60114;
    var i = 60109
      , u = 60110
      , l = 60112;
    t.Suspense = 60113;
    var c = 60115
      , s = 60116;
    if ("function" === typeof Symbol && Symbol.for) {
        var f = Symbol.for;
        o = f("react.element"),
        a = f("react.portal"),
        t.Fragment = f("react.fragment"),
        t.StrictMode = f("react.strict_mode"),
        t.Profiler = f("react.profiler"),
        i = f("react.provider"),
        u = f("react.context"),
        l = f("react.forward_ref"),
        t.Suspense = f("react.suspense"),
        c = f("react.memo"),
        s = f("react.lazy")
    }
    var p = "function" === typeof Symbol && Symbol.iterator;
    function d(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
            t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var y = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , v = {};
    function h(e, t, n) {
        this.props = e,
        this.context = t,
        this.refs = v,
        this.updater = n || y
    }
    function m() {}
    function g(e, t, n) {
        this.props = e,
        this.context = t,
        this.refs = v,
        this.updater = n || y
    }
    h.prototype.isReactComponent = {},
    h.prototype.setState = function(e, t) {
        if ("object" !== typeof e && "function" !== typeof e && null != e)
            throw Error(d(85));
        this.updater.enqueueSetState(this, e, t, "setState")
    }
    ,
    h.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate")
    }
    ,
    m.prototype = h.prototype;
    var b = g.prototype = new m;
    b.constructor = g,
    r(b, h.prototype),
    b.isPureReactComponent = !0;
    var w = {
        current: null
    }
      , O = Object.prototype.hasOwnProperty
      , k = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function S(e, t, n) {
        var r, a = {}, i = null, u = null;
        if (null != t)
            for (r in void 0 !== t.ref && (u = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t)
                O.call(t, r) && !k.hasOwnProperty(r) && (a[r] = t[r]);
        var l = arguments.length - 2;
        if (1 === l)
            a.children = n;
        else if (1 < l) {
            for (var c = Array(l), s = 0; s < l; s++)
                c[s] = arguments[s + 2];
            a.children = c
        }
        if (e && e.defaultProps)
            for (r in l = e.defaultProps)
                void 0 === a[r] && (a[r] = l[r]);
        return {
            $$typeof: o,
            type: e,
            key: i,
            ref: u,
            props: a,
            _owner: w.current
        }
    }
    function E(e) {
        return "object" === typeof e && null !== e && e.$$typeof === o
    }
    var P = /\/+/g;
    function _(e, t) {
        return "object" === typeof e && null !== e && null != e.key ? function(e) {
            var t = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + e.replace(/[=:]/g, (function(e) {
                return t[e]
            }
            ))
        }("" + e.key) : t.toString(36)
    }
    function x(e, t, n, r, i) {
        var u = typeof e;
        "undefined" !== u && "boolean" !== u || (e = null);
        var l = !1;
        if (null === e)
            l = !0;
        else
            switch (u) {
            case "string":
            case "number":
                l = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                case o:
                case a:
                    l = !0
                }
            }
        if (l)
            return i = i(l = e),
            e = "" === r ? "." + _(l, 0) : r,
            Array.isArray(i) ? (n = "",
            null != e && (n = e.replace(P, "$&/") + "/"),
            x(i, t, n, "", (function(e) {
                return e
            }
            ))) : null != i && (E(i) && (i = function(e, t) {
                return {
                    $$typeof: o,
                    type: e.type,
                    key: t,
                    ref: e.ref,
                    props: e.props,
                    _owner: e._owner
                }
            }(i, n + (!i.key || l && l.key === i.key ? "" : ("" + i.key).replace(P, "$&/") + "/") + e)),
            t.push(i)),
            1;
        if (l = 0,
        r = "" === r ? "." : r + ":",
        Array.isArray(e))
            for (var c = 0; c < e.length; c++) {
                var s = r + _(u = e[c], c);
                l += x(u, t, n, s, i)
            }
        else if ("function" === typeof (s = function(e) {
            return null === e || "object" !== typeof e ? null : "function" === typeof (e = p && e[p] || e["@@iterator"]) ? e : null
        }(e)))
            for (e = s.call(e),
            c = 0; !(u = e.next()).done; )
                l += x(u = u.value, t, n, s = r + _(u, c++), i);
        else if ("object" === u)
            throw t = "" + e,
            Error(d(31, "[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t));
        return l
    }
    function j(e, t, n) {
        if (null == e)
            return e;
        var r = []
          , o = 0;
        return x(e, r, "", "", (function(e) {
            return t.call(n, e, o++)
        }
        )),
        r
    }
    function T(e) {
        if (-1 === e._status) {
            var t = e._result;
            t = t(),
            e._status = 0,
            e._result = t,
            t.then((function(t) {
                0 === e._status && (t = t.default,
                e._status = 1,
                e._result = t)
            }
            ), (function(t) {
                0 === e._status && (e._status = 2,
                e._result = t)
            }
            ))
        }
        if (1 === e._status)
            return e._result;
        throw e._result
    }
    var A = {
        current: null
    };
    function C() {
        var e = A.current;
        if (null === e)
            throw Error(d(321));
        return e
    }
    var L = {
        ReactCurrentDispatcher: A,
        ReactCurrentBatchConfig: {
            transition: 0
        },
        ReactCurrentOwner: w,
        IsSomeRendererActing: {
            current: !1
        },
        assign: r
    };
    t.Children = {
        map: j,
        forEach: function(e, t, n) {
            j(e, (function() {
                t.apply(this, arguments)
            }
            ), n)
        },
        count: function(e) {
            var t = 0;
            return j(e, (function() {
                t++
            }
            )),
            t
        },
        toArray: function(e) {
            return j(e, (function(e) {
                return e
            }
            )) || []
        },
        only: function(e) {
            if (!E(e))
                throw Error(d(143));
            return e
        }
    },
    t.Component = h,
    t.PureComponent = g,
    t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L,
    t.cloneElement = function(e, t, n) {
        if (null === e || void 0 === e)
            throw Error(d(267, e));
        var a = r({}, e.props)
          , i = e.key
          , u = e.ref
          , l = e._owner;
        if (null != t) {
            if (void 0 !== t.ref && (u = t.ref,
            l = w.current),
            void 0 !== t.key && (i = "" + t.key),
            e.type && e.type.defaultProps)
                var c = e.type.defaultProps;
            for (s in t)
                O.call(t, s) && !k.hasOwnProperty(s) && (a[s] = void 0 === t[s] && void 0 !== c ? c[s] : t[s])
        }
        var s = arguments.length - 2;
        if (1 === s)
            a.children = n;
        else if (1 < s) {
            c = Array(s);
            for (var f = 0; f < s; f++)
                c[f] = arguments[f + 2];
            a.children = c
        }
        return {
            $$typeof: o,
            type: e.type,
            key: i,
            ref: u,
            props: a,
            _owner: l
        }
    }
    ,
    t.createContext = function(e, t) {
        return void 0 === t && (t = null),
        (e = {
            $$typeof: u,
            _calculateChangedBits: t,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }).Provider = {
            $$typeof: i,
            _context: e
        },
        e.Consumer = e
    }
    ,
    t.createElement = S,
    t.createFactory = function(e) {
        var t = S.bind(null, e);
        return t.type = e,
        t
    }
    ,
    t.createRef = function() {
        return {
            current: null
        }
    }
    ,
    t.forwardRef = function(e) {
        return {
            $$typeof: l,
            render: e
        }
    }
    ,
    t.isValidElement = E,
    t.lazy = function(e) {
        return {
            $$typeof: s,
            _payload: {
                _status: -1,
                _result: e
            },
            _init: T
        }
    }
    ,
    t.memo = function(e, t) {
        return {
            $$typeof: c,
            type: e,
            compare: void 0 === t ? null : t
        }
    }
    ,
    t.useCallback = function(e, t) {
        return C().useCallback(e, t)
    }
    ,
    t.useContext = function(e, t) {
        return C().useContext(e, t)
    }
    ,
    t.useDebugValue = function() {}
    ,
    t.useEffect = function(e, t) {
        return C().useEffect(e, t)
    }
    ,
    t.useImperativeHandle = function(e, t, n) {
        return C().useImperativeHandle(e, t, n)
    }
    ,
    t.useLayoutEffect = function(e, t) {
        return C().useLayoutEffect(e, t)
    }
    ,
    t.useMemo = function(e, t) {
        return C().useMemo(e, t)
    }
    ,
    t.useReducer = function(e, t, n) {
        return C().useReducer(e, t, n)
    }
    ,
    t.useRef = function(e) {
        return C().useRef(e)
    }
    ,
    t.useState = function(e) {
        return C().useState(e)
    }
    ,
    t.version = "17.0.1"
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(26)
      , a = n(43);
    function i(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
            t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    if (!r)
        throw Error(i(227));
    var u = new Set
      , l = {};
    function c(e, t) {
        s(e, t),
        s(e + "Capture", t)
    }
    function s(e, t) {
        for (l[e] = t,
        e = 0; e < t.length; e++)
            u.add(t[e])
    }
    var f = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement)
      , p = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
      , d = Object.prototype.hasOwnProperty
      , y = {}
      , v = {};
    function h(e, t, n, r, o, a, i) {
        this.acceptsBooleans = 2 === t || 3 === t || 4 === t,
        this.attributeName = r,
        this.attributeNamespace = o,
        this.mustUseProperty = n,
        this.propertyName = e,
        this.type = t,
        this.sanitizeURL = a,
        this.removeEmptyString = i
    }
    var m = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
        m[e] = new h(e,0,!1,e,null,!1,!1)
    }
    )),
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach((function(e) {
        var t = e[0];
        m[t] = new h(t,1,!1,e[1],null,!1,!1)
    }
    )),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
        m[e] = new h(e,2,!1,e.toLowerCase(),null,!1,!1)
    }
    )),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
        m[e] = new h(e,2,!1,e,null,!1,!1)
    }
    )),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
        m[e] = new h(e,3,!1,e.toLowerCase(),null,!1,!1)
    }
    )),
    ["checked", "multiple", "muted", "selected"].forEach((function(e) {
        m[e] = new h(e,3,!0,e,null,!1,!1)
    }
    )),
    ["capture", "download"].forEach((function(e) {
        m[e] = new h(e,4,!1,e,null,!1,!1)
    }
    )),
    ["cols", "rows", "size", "span"].forEach((function(e) {
        m[e] = new h(e,6,!1,e,null,!1,!1)
    }
    )),
    ["rowSpan", "start"].forEach((function(e) {
        m[e] = new h(e,5,!1,e.toLowerCase(),null,!1,!1)
    }
    ));
    var g = /[\-:]([a-z])/g;
    function b(e) {
        return e[1].toUpperCase()
    }
    function w(e, t, n, r) {
        var o = m.hasOwnProperty(t) ? m[t] : null;
        (null !== o ? 0 === o.type : !r && (2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1]))) || (function(e, t, n, r) {
            if (null === t || "undefined" === typeof t || function(e, t, n, r) {
                if (null !== n && 0 === n.type)
                    return !1;
                switch (typeof t) {
                case "function":
                case "symbol":
                    return !0;
                case "boolean":
                    return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                default:
                    return !1
                }
            }(e, t, n, r))
                return !0;
            if (r)
                return !1;
            if (null !== n)
                switch (n.type) {
                case 3:
                    return !t;
                case 4:
                    return !1 === t;
                case 5:
                    return isNaN(t);
                case 6:
                    return isNaN(t) || 1 > t
                }
            return !1
        }(t, n, o, r) && (n = null),
        r || null === o ? function(e) {
            return !!d.call(v, e) || !d.call(y, e) && (p.test(e) ? v[e] = !0 : (y[e] = !0,
            !1))
        }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = null === n ? 3 !== o.type && "" : n : (t = o.attributeName,
        r = o.attributeNamespace,
        null === n ? e.removeAttribute(t) : (n = 3 === (o = o.type) || 4 === o && !0 === n ? "" : "" + n,
        r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
        var t = e.replace(g, b);
        m[t] = new h(t,1,!1,e,null,!1,!1)
    }
    )),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
        var t = e.replace(g, b);
        m[t] = new h(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
    }
    )),
    ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
        var t = e.replace(g, b);
        m[t] = new h(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
    }
    )),
    ["tabIndex", "crossOrigin"].forEach((function(e) {
        m[e] = new h(e,1,!1,e.toLowerCase(),null,!1,!1)
    }
    )),
    m.xlinkHref = new h("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),
    ["src", "href", "action", "formAction"].forEach((function(e) {
        m[e] = new h(e,1,!1,e.toLowerCase(),null,!0,!0)
    }
    ));
    var O = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
      , k = 60103
      , S = 60106
      , E = 60107
      , P = 60108
      , _ = 60114
      , x = 60109
      , j = 60110
      , T = 60112
      , A = 60113
      , C = 60120
      , L = 60115
      , R = 60116
      , M = 60121
      , D = 60128
      , N = 60129
      , V = 60130
      , I = 60131;
    if ("function" === typeof Symbol && Symbol.for) {
        var U = Symbol.for;
        k = U("react.element"),
        S = U("react.portal"),
        E = U("react.fragment"),
        P = U("react.strict_mode"),
        _ = U("react.profiler"),
        x = U("react.provider"),
        j = U("react.context"),
        T = U("react.forward_ref"),
        A = U("react.suspense"),
        C = U("react.suspense_list"),
        L = U("react.memo"),
        R = U("react.lazy"),
        M = U("react.block"),
        U("react.scope"),
        D = U("react.opaque.id"),
        N = U("react.debug_trace_mode"),
        V = U("react.offscreen"),
        I = U("react.legacy_hidden")
    }
    var F, z = "function" === typeof Symbol && Symbol.iterator;
    function B(e) {
        return null === e || "object" !== typeof e ? null : "function" === typeof (e = z && e[z] || e["@@iterator"]) ? e : null
    }
    function H(e) {
        if (void 0 === F)
            try {
                throw Error()
            } catch (n) {
                var t = n.stack.trim().match(/\n( *(at )?)/);
                F = t && t[1] || ""
            }
        return "\n" + F + e
    }
    var W = !1;
    function q(e, t) {
        if (!e || W)
            return "";
        W = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (t)
                if (t = function() {
                    throw Error()
                }
                ,
                Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }),
                "object" === typeof Reflect && Reflect.construct) {
                    try {
                        Reflect.construct(t, [])
                    } catch (l) {
                        var r = l
                    }
                    Reflect.construct(e, [], t)
                } else {
                    try {
                        t.call()
                    } catch (l) {
                        r = l
                    }
                    e.call(t.prototype)
                }
            else {
                try {
                    throw Error()
                } catch (l) {
                    r = l
                }
                e()
            }
        } catch (l) {
            if (l && r && "string" === typeof l.stack) {
                for (var o = l.stack.split("\n"), a = r.stack.split("\n"), i = o.length - 1, u = a.length - 1; 1 <= i && 0 <= u && o[i] !== a[u]; )
                    u--;
                for (; 1 <= i && 0 <= u; i--,
                u--)
                    if (o[i] !== a[u]) {
                        if (1 !== i || 1 !== u)
                            do {
                                if (i--,
                                0 > --u || o[i] !== a[u])
                                    return "\n" + o[i].replace(" at new ", " at ")
                            } while (1 <= i && 0 <= u);
                        break
                    }
            }
        } finally {
            W = !1,
            Error.prepareStackTrace = n
        }
        return (e = e ? e.displayName || e.name : "") ? H(e) : ""
    }
    function $(e) {
        switch (e.tag) {
        case 5:
            return H(e.type);
        case 16:
            return H("Lazy");
        case 13:
            return H("Suspense");
        case 19:
            return H("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = q(e.type, !1);
        case 11:
            return e = q(e.type.render, !1);
        case 22:
            return e = q(e.type._render, !1);
        case 1:
            return e = q(e.type, !0);
        default:
            return ""
        }
    }
    function K(e) {
        if (null == e)
            return null;
        if ("function" === typeof e)
            return e.displayName || e.name || null;
        if ("string" === typeof e)
            return e;
        switch (e) {
        case E:
            return "Fragment";
        case S:
            return "Portal";
        case _:
            return "Profiler";
        case P:
            return "StrictMode";
        case A:
            return "Suspense";
        case C:
            return "SuspenseList"
        }
        if ("object" === typeof e)
            switch (e.$$typeof) {
            case j:
                return (e.displayName || "Context") + ".Consumer";
            case x:
                return (e._context.displayName || "Context") + ".Provider";
            case T:
                var t = e.render;
                return t = t.displayName || t.name || "",
                e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
            case L:
                return K(e.type);
            case M:
                return K(e._render);
            case R:
                t = e._payload,
                e = e._init;
                try {
                    return K(e(t))
                } catch (n) {}
            }
        return null
    }
    function Y(e) {
        switch (typeof e) {
        case "boolean":
        case "number":
        case "object":
        case "string":
        case "undefined":
            return e;
        default:
            return ""
        }
    }
    function X(e) {
        var t = e.type;
        return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
    }
    function Q(e) {
        e._valueTracker || (e._valueTracker = function(e) {
            var t = X(e) ? "checked" : "value"
              , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
              , r = "" + e[t];
            if (!e.hasOwnProperty(t) && "undefined" !== typeof n && "function" === typeof n.get && "function" === typeof n.set) {
                var o = n.get
                  , a = n.set;
                return Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function() {
                        return o.call(this)
                    },
                    set: function(e) {
                        r = "" + e,
                        a.call(this, e)
                    }
                }),
                Object.defineProperty(e, t, {
                    enumerable: n.enumerable
                }),
                {
                    getValue: function() {
                        return r
                    },
                    setValue: function(e) {
                        r = "" + e
                    },
                    stopTracking: function() {
                        e._valueTracker = null,
                        delete e[t]
                    }
                }
            }
        }(e))
    }
    function G(e) {
        if (!e)
            return !1;
        var t = e._valueTracker;
        if (!t)
            return !0;
        var n = t.getValue()
          , r = "";
        return e && (r = X(e) ? e.checked ? "true" : "false" : e.value),
        (e = r) !== n && (t.setValue(e),
        !0)
    }
    function Z(e) {
        if ("undefined" === typeof (e = e || ("undefined" !== typeof document ? document : void 0)))
            return null;
        try {
            return e.activeElement || e.body
        } catch (t) {
            return e.body
        }
    }
    function J(e, t) {
        var n = t.checked;
        return o({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked
        })
    }
    function ee(e, t) {
        var n = null == t.defaultValue ? "" : t.defaultValue
          , r = null != t.checked ? t.checked : t.defaultChecked;
        n = Y(null != t.value ? t.value : n),
        e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
        }
    }
    function te(e, t) {
        null != (t = t.checked) && w(e, "checked", t, !1)
    }
    function ne(e, t) {
        te(e, t);
        var n = Y(t.value)
          , r = t.type;
        if (null != n)
            "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
        t.hasOwnProperty("value") ? oe(e, t.type, n) : t.hasOwnProperty("defaultValue") && oe(e, t.type, Y(t.defaultValue)),
        null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
    }
    function re(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value))
                return;
            t = "" + e._wrapperState.initialValue,
            n || t === e.value || (e.value = t),
            e.defaultValue = t
        }
        "" !== (n = e.name) && (e.name = ""),
        e.defaultChecked = !!e._wrapperState.initialChecked,
        "" !== n && (e.name = n)
    }
    function oe(e, t, n) {
        "number" === t && Z(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
    }
    function ae(e, t) {
        return e = o({
            children: void 0
        }, t),
        (t = function(e) {
            var t = "";
            return r.Children.forEach(e, (function(e) {
                null != e && (t += e)
            }
            )),
            t
        }(t.children)) && (e.children = t),
        e
    }
    function ie(e, t, n, r) {
        if (e = e.options,
        t) {
            t = {};
            for (var o = 0; o < n.length; o++)
                t["$" + n[o]] = !0;
            for (n = 0; n < e.length; n++)
                o = t.hasOwnProperty("$" + e[n].value),
                e[n].selected !== o && (e[n].selected = o),
                o && r && (e[n].defaultSelected = !0)
        } else {
            for (n = "" + Y(n),
            t = null,
            o = 0; o < e.length; o++) {
                if (e[o].value === n)
                    return e[o].selected = !0,
                    void (r && (e[o].defaultSelected = !0));
                null !== t || e[o].disabled || (t = e[o])
            }
            null !== t && (t.selected = !0)
        }
    }
    function ue(e, t) {
        if (null != t.dangerouslySetInnerHTML)
            throw Error(i(91));
        return o({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        })
    }
    function le(e, t) {
        var n = t.value;
        if (null == n) {
            if (n = t.children,
            t = t.defaultValue,
            null != n) {
                if (null != t)
                    throw Error(i(92));
                if (Array.isArray(n)) {
                    if (!(1 >= n.length))
                        throw Error(i(93));
                    n = n[0]
                }
                t = n
            }
            null == t && (t = ""),
            n = t
        }
        e._wrapperState = {
            initialValue: Y(n)
        }
    }
    function ce(e, t) {
        var n = Y(t.value)
          , r = Y(t.defaultValue);
        null != n && ((n = "" + n) !== e.value && (e.value = n),
        null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
        null != r && (e.defaultValue = "" + r)
    }
    function se(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
    }
    var fe = "http://www.w3.org/1999/xhtml"
      , pe = "http://www.w3.org/2000/svg";
    function de(e) {
        switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
        }
    }
    function ye(e, t) {
        return null == e || "http://www.w3.org/1999/xhtml" === e ? de(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
    }
    var ve, he, me = (he = function(e, t) {
        if (e.namespaceURI !== pe || "innerHTML"in e)
            e.innerHTML = t;
        else {
            for ((ve = ve || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = ve.firstChild; e.firstChild; )
                e.removeChild(e.firstChild);
            for (; t.firstChild; )
                e.appendChild(t.firstChild)
        }
    }
    ,
    "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, t, n, r) {
        MSApp.execUnsafeLocalFunction((function() {
            return he(e, t)
        }
        ))
    }
    : he);
    function ge(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
                return void (n.nodeValue = t)
        }
        e.textContent = t
    }
    var be = {
        animationIterationCount: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    }
      , we = ["Webkit", "ms", "Moz", "O"];
    function Oe(e, t, n) {
        return null == t || "boolean" === typeof t || "" === t ? "" : n || "number" !== typeof t || 0 === t || be.hasOwnProperty(e) && be[e] ? ("" + t).trim() : t + "px"
    }
    function ke(e, t) {
        for (var n in e = e.style,
        t)
            if (t.hasOwnProperty(n)) {
                var r = 0 === n.indexOf("--")
                  , o = Oe(n, t[n], r);
                "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, o) : e[n] = o
            }
    }
    Object.keys(be).forEach((function(e) {
        we.forEach((function(t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1),
            be[t] = be[e]
        }
        ))
    }
    ));
    var Se = o({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });
    function Ee(e, t) {
        if (t) {
            if (Se[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
                throw Error(i(137, e));
            if (null != t.dangerouslySetInnerHTML) {
                if (null != t.children)
                    throw Error(i(60));
                if ("object" !== typeof t.dangerouslySetInnerHTML || !("__html"in t.dangerouslySetInnerHTML))
                    throw Error(i(61))
            }
            if (null != t.style && "object" !== typeof t.style)
                throw Error(i(62))
        }
    }
    function Pe(e, t) {
        if (-1 === e.indexOf("-"))
            return "string" === typeof t.is;
        switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    function _e(e) {
        return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
        3 === e.nodeType ? e.parentNode : e
    }
    var xe = null
      , je = null
      , Te = null;
    function Ae(e) {
        if (e = eo(e)) {
            if ("function" !== typeof xe)
                throw Error(i(280));
            var t = e.stateNode;
            t && (t = no(t),
            xe(e.stateNode, e.type, t))
        }
    }
    function Ce(e) {
        je ? Te ? Te.push(e) : Te = [e] : je = e
    }
    function Le() {
        if (je) {
            var e = je
              , t = Te;
            if (Te = je = null,
            Ae(e),
            t)
                for (e = 0; e < t.length; e++)
                    Ae(t[e])
        }
    }
    function Re(e, t) {
        return e(t)
    }
    function Me(e, t, n, r, o) {
        return e(t, n, r, o)
    }
    function De() {}
    var Ne = Re
      , Ve = !1
      , Ie = !1;
    function Ue() {
        null === je && null === Te || (De(),
        Le())
    }
    function Fe(e, t) {
        var n = e.stateNode;
        if (null === n)
            return null;
        var r = no(n);
        if (null === r)
            return null;
        n = r[t];
        e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)),
            e = !r;
            break e;
        default:
            e = !1
        }
        if (e)
            return null;
        if (n && "function" !== typeof n)
            throw Error(i(231, t, typeof n));
        return n
    }
    var ze = !1;
    if (f)
        try {
            var Be = {};
            Object.defineProperty(Be, "passive", {
                get: function() {
                    ze = !0
                }
            }),
            window.addEventListener("test", Be, Be),
            window.removeEventListener("test", Be, Be)
        } catch (he) {
            ze = !1
        }
    function He(e, t, n, r, o, a, i, u, l) {
        var c = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(n, c)
        } catch (s) {
            this.onError(s)
        }
    }
    var We = !1
      , qe = null
      , $e = !1
      , Ke = null
      , Ye = {
        onError: function(e) {
            We = !0,
            qe = e
        }
    };
    function Xe(e, t, n, r, o, a, i, u, l) {
        We = !1,
        qe = null,
        He.apply(Ye, arguments)
    }
    function Qe(e) {
        var t = e
          , n = e;
        if (e.alternate)
            for (; t.return; )
                t = t.return;
        else {
            e = t;
            do {
                0 !== (1026 & (t = e).flags) && (n = t.return),
                e = t.return
            } while (e)
        }
        return 3 === t.tag ? n : null
    }
    function Ge(e) {
        if (13 === e.tag) {
            var t = e.memoizedState;
            if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)),
            null !== t)
                return t.dehydrated
        }
        return null
    }
    function Ze(e) {
        if (Qe(e) !== e)
            throw Error(i(188))
    }
    function Je(e) {
        if (!(e = function(e) {
            var t = e.alternate;
            if (!t) {
                if (null === (t = Qe(e)))
                    throw Error(i(188));
                return t !== e ? null : e
            }
            for (var n = e, r = t; ; ) {
                var o = n.return;
                if (null === o)
                    break;
                var a = o.alternate;
                if (null === a) {
                    if (null !== (r = o.return)) {
                        n = r;
                        continue
                    }
                    break
                }
                if (o.child === a.child) {
                    for (a = o.child; a; ) {
                        if (a === n)
                            return Ze(o),
                            e;
                        if (a === r)
                            return Ze(o),
                            t;
                        a = a.sibling
                    }
                    throw Error(i(188))
                }
                if (n.return !== r.return)
                    n = o,
                    r = a;
                else {
                    for (var u = !1, l = o.child; l; ) {
                        if (l === n) {
                            u = !0,
                            n = o,
                            r = a;
                            break
                        }
                        if (l === r) {
                            u = !0,
                            r = o,
                            n = a;
                            break
                        }
                        l = l.sibling
                    }
                    if (!u) {
                        for (l = a.child; l; ) {
                            if (l === n) {
                                u = !0,
                                n = a,
                                r = o;
                                break
                            }
                            if (l === r) {
                                u = !0,
                                r = a,
                                n = o;
                                break
                            }
                            l = l.sibling
                        }
                        if (!u)
                            throw Error(i(189))
                    }
                }
                if (n.alternate !== r)
                    throw Error(i(190))
            }
            if (3 !== n.tag)
                throw Error(i(188));
            return n.stateNode.current === n ? e : t
        }(e)))
            return null;
        for (var t = e; ; ) {
            if (5 === t.tag || 6 === t.tag)
                return t;
            if (t.child)
                t.child.return = t,
                t = t.child;
            else {
                if (t === e)
                    break;
                for (; !t.sibling; ) {
                    if (!t.return || t.return === e)
                        return null;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        }
        return null
    }
    function et(e, t) {
        for (var n = e.alternate; null !== t; ) {
            if (t === e || t === n)
                return !0;
            t = t.return
        }
        return !1
    }
    var tt, nt, rt, ot, at = !1, it = [], ut = null, lt = null, ct = null, st = new Map, ft = new Map, pt = [], dt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function yt(e, t, n, r, o) {
        return {
            blockedOn: e,
            domEventName: t,
            eventSystemFlags: 16 | n,
            nativeEvent: o,
            targetContainers: [r]
        }
    }
    function vt(e, t) {
        switch (e) {
        case "focusin":
        case "focusout":
            ut = null;
            break;
        case "dragenter":
        case "dragleave":
            lt = null;
            break;
        case "mouseover":
        case "mouseout":
            ct = null;
            break;
        case "pointerover":
        case "pointerout":
            st.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            ft.delete(t.pointerId)
        }
    }
    function ht(e, t, n, r, o, a) {
        return null === e || e.nativeEvent !== a ? (e = yt(t, n, r, o, a),
        null !== t && (null !== (t = eo(t)) && nt(t)),
        e) : (e.eventSystemFlags |= r,
        t = e.targetContainers,
        null !== o && -1 === t.indexOf(o) && t.push(o),
        e)
    }
    function mt(e) {
        var t = Jr(e.target);
        if (null !== t) {
            var n = Qe(t);
            if (null !== n)
                if (13 === (t = n.tag)) {
                    if (null !== (t = Ge(n)))
                        return e.blockedOn = t,
                        void ot(e.lanePriority, (function() {
                            a.unstable_runWithPriority(e.priority, (function() {
                                rt(n)
                            }
                            ))
                        }
                        ))
                } else if (3 === t && n.stateNode.hydrate)
                    return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
        }
        e.blockedOn = null
    }
    function gt(e) {
        if (null !== e.blockedOn)
            return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Jt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
                return null !== (t = eo(n)) && nt(t),
                e.blockedOn = n,
                !1;
            t.shift()
        }
        return !0
    }
    function bt(e, t, n) {
        gt(e) && n.delete(t)
    }
    function wt() {
        for (at = !1; 0 < it.length; ) {
            var e = it[0];
            if (null !== e.blockedOn) {
                null !== (e = eo(e.blockedOn)) && tt(e);
                break
            }
            for (var t = e.targetContainers; 0 < t.length; ) {
                var n = Jt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                if (null !== n) {
                    e.blockedOn = n;
                    break
                }
                t.shift()
            }
            null === e.blockedOn && it.shift()
        }
        null !== ut && gt(ut) && (ut = null),
        null !== lt && gt(lt) && (lt = null),
        null !== ct && gt(ct) && (ct = null),
        st.forEach(bt),
        ft.forEach(bt)
    }
    function Ot(e, t) {
        e.blockedOn === t && (e.blockedOn = null,
        at || (at = !0,
        a.unstable_scheduleCallback(a.unstable_NormalPriority, wt)))
    }
    function kt(e) {
        function t(t) {
            return Ot(t, e)
        }
        if (0 < it.length) {
            Ot(it[0], e);
            for (var n = 1; n < it.length; n++) {
                var r = it[n];
                r.blockedOn === e && (r.blockedOn = null)
            }
        }
        for (null !== ut && Ot(ut, e),
        null !== lt && Ot(lt, e),
        null !== ct && Ot(ct, e),
        st.forEach(t),
        ft.forEach(t),
        n = 0; n < pt.length; n++)
            (r = pt[n]).blockedOn === e && (r.blockedOn = null);
        for (; 0 < pt.length && null === (n = pt[0]).blockedOn; )
            mt(n),
            null === n.blockedOn && pt.shift()
    }
    function St(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(),
        n["Webkit" + e] = "webkit" + t,
        n["Moz" + e] = "moz" + t,
        n
    }
    var Et = {
        animationend: St("Animation", "AnimationEnd"),
        animationiteration: St("Animation", "AnimationIteration"),
        animationstart: St("Animation", "AnimationStart"),
        transitionend: St("Transition", "TransitionEnd")
    }
      , Pt = {}
      , _t = {};
    function xt(e) {
        if (Pt[e])
            return Pt[e];
        if (!Et[e])
            return e;
        var t, n = Et[e];
        for (t in n)
            if (n.hasOwnProperty(t) && t in _t)
                return Pt[e] = n[t];
        return e
    }
    f && (_t = document.createElement("div").style,
    "AnimationEvent"in window || (delete Et.animationend.animation,
    delete Et.animationiteration.animation,
    delete Et.animationstart.animation),
    "TransitionEvent"in window || delete Et.transitionend.transition);
    var jt = xt("animationend")
      , Tt = xt("animationiteration")
      , At = xt("animationstart")
      , Ct = xt("transitionend")
      , Lt = new Map
      , Rt = new Map
      , Mt = ["abort", "abort", jt, "animationEnd", Tt, "animationIteration", At, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", Ct, "transitionEnd", "waiting", "waiting"];
    function Dt(e, t) {
        for (var n = 0; n < e.length; n += 2) {
            var r = e[n]
              , o = e[n + 1];
            o = "on" + (o[0].toUpperCase() + o.slice(1)),
            Rt.set(r, t),
            Lt.set(r, o),
            c(o, [r])
        }
    }
    (0,
    a.unstable_now)();
    var Nt = 8;
    function Vt(e) {
        if (0 !== (1 & e))
            return Nt = 15,
            1;
        if (0 !== (2 & e))
            return Nt = 14,
            2;
        if (0 !== (4 & e))
            return Nt = 13,
            4;
        var t = 24 & e;
        return 0 !== t ? (Nt = 12,
        t) : 0 !== (32 & e) ? (Nt = 11,
        32) : 0 !== (t = 192 & e) ? (Nt = 10,
        t) : 0 !== (256 & e) ? (Nt = 9,
        256) : 0 !== (t = 3584 & e) ? (Nt = 8,
        t) : 0 !== (4096 & e) ? (Nt = 7,
        4096) : 0 !== (t = 4186112 & e) ? (Nt = 6,
        t) : 0 !== (t = 62914560 & e) ? (Nt = 5,
        t) : 67108864 & e ? (Nt = 4,
        67108864) : 0 !== (134217728 & e) ? (Nt = 3,
        134217728) : 0 !== (t = 805306368 & e) ? (Nt = 2,
        t) : 0 !== (1073741824 & e) ? (Nt = 1,
        1073741824) : (Nt = 8,
        e)
    }
    function It(e, t) {
        var n = e.pendingLanes;
        if (0 === n)
            return Nt = 0;
        var r = 0
          , o = 0
          , a = e.expiredLanes
          , i = e.suspendedLanes
          , u = e.pingedLanes;
        if (0 !== a)
            r = a,
            o = Nt = 15;
        else if (0 !== (a = 134217727 & n)) {
            var l = a & ~i;
            0 !== l ? (r = Vt(l),
            o = Nt) : 0 !== (u &= a) && (r = Vt(u),
            o = Nt)
        } else
            0 !== (a = n & ~i) ? (r = Vt(a),
            o = Nt) : 0 !== u && (r = Vt(u),
            o = Nt);
        if (0 === r)
            return 0;
        if (r = n & ((0 > (r = 31 - Wt(r)) ? 0 : 1 << r) << 1) - 1,
        0 !== t && t !== r && 0 === (t & i)) {
            if (Vt(t),
            o <= Nt)
                return t;
            Nt = o
        }
        if (0 !== (t = e.entangledLanes))
            for (e = e.entanglements,
            t &= r; 0 < t; )
                o = 1 << (n = 31 - Wt(t)),
                r |= e[n],
                t &= ~o;
        return r
    }
    function Ut(e) {
        return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
    }
    function Ft(e, t) {
        switch (e) {
        case 15:
            return 1;
        case 14:
            return 2;
        case 12:
            return 0 === (e = zt(24 & ~t)) ? Ft(10, t) : e;
        case 10:
            return 0 === (e = zt(192 & ~t)) ? Ft(8, t) : e;
        case 8:
            return 0 === (e = zt(3584 & ~t)) && (0 === (e = zt(4186112 & ~t)) && (e = 512)),
            e;
        case 2:
            return 0 === (t = zt(805306368 & ~t)) && (t = 268435456),
            t
        }
        throw Error(i(358, e))
    }
    function zt(e) {
        return e & -e
    }
    function Bt(e) {
        for (var t = [], n = 0; 31 > n; n++)
            t.push(e);
        return t
    }
    function Ht(e, t, n) {
        e.pendingLanes |= t;
        var r = t - 1;
        e.suspendedLanes &= r,
        e.pingedLanes &= r,
        (e = e.eventTimes)[t = 31 - Wt(t)] = n
    }
    var Wt = Math.clz32 ? Math.clz32 : function(e) {
        return 0 === e ? 32 : 31 - (qt(e) / $t | 0) | 0
    }
      , qt = Math.log
      , $t = Math.LN2;
    var Kt = a.unstable_UserBlockingPriority
      , Yt = a.unstable_runWithPriority
      , Xt = !0;
    function Qt(e, t, n, r) {
        Ve || De();
        var o = Zt
          , a = Ve;
        Ve = !0;
        try {
            Me(o, e, t, n, r)
        } finally {
            (Ve = a) || Ue()
        }
    }
    function Gt(e, t, n, r) {
        Yt(Kt, Zt.bind(null, e, t, n, r))
    }
    function Zt(e, t, n, r) {
        var o;
        if (Xt)
            if ((o = 0 === (4 & t)) && 0 < it.length && -1 < dt.indexOf(e))
                e = yt(null, e, t, n, r),
                it.push(e);
            else {
                var a = Jt(e, t, n, r);
                if (null === a)
                    o && vt(e, r);
                else {
                    if (o) {
                        if (-1 < dt.indexOf(e))
                            return e = yt(a, e, t, n, r),
                            void it.push(e);
                        if (function(e, t, n, r, o) {
                            switch (t) {
                            case "focusin":
                                return ut = ht(ut, e, t, n, r, o),
                                !0;
                            case "dragenter":
                                return lt = ht(lt, e, t, n, r, o),
                                !0;
                            case "mouseover":
                                return ct = ht(ct, e, t, n, r, o),
                                !0;
                            case "pointerover":
                                var a = o.pointerId;
                                return st.set(a, ht(st.get(a) || null, e, t, n, r, o)),
                                !0;
                            case "gotpointercapture":
                                return a = o.pointerId,
                                ft.set(a, ht(ft.get(a) || null, e, t, n, r, o)),
                                !0
                            }
                            return !1
                        }(a, e, t, n, r))
                            return;
                        vt(e, r)
                    }
                    Lr(e, t, r, null, n)
                }
            }
    }
    function Jt(e, t, n, r) {
        var o = _e(r);
        if (null !== (o = Jr(o))) {
            var a = Qe(o);
            if (null === a)
                o = null;
            else {
                var i = a.tag;
                if (13 === i) {
                    if (null !== (o = Ge(a)))
                        return o;
                    o = null
                } else if (3 === i) {
                    if (a.stateNode.hydrate)
                        return 3 === a.tag ? a.stateNode.containerInfo : null;
                    o = null
                } else
                    a !== o && (o = null)
            }
        }
        return Lr(e, t, r, o, n),
        null
    }
    var en = null
      , tn = null
      , nn = null;
    function rn() {
        if (nn)
            return nn;
        var e, t, n = tn, r = n.length, o = "value"in en ? en.value : en.textContent, a = o.length;
        for (e = 0; e < r && n[e] === o[e]; e++)
            ;
        var i = r - e;
        for (t = 1; t <= i && n[r - t] === o[a - t]; t++)
            ;
        return nn = o.slice(e, 1 < t ? 1 - t : void 0)
    }
    function on(e) {
        var t = e.keyCode;
        return "charCode"in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t,
        10 === e && (e = 13),
        32 <= e || 13 === e ? e : 0
    }
    function an() {
        return !0
    }
    function un() {
        return !1
    }
    function ln(e) {
        function t(t, n, r, o, a) {
            for (var i in this._reactName = t,
            this._targetInst = r,
            this.type = n,
            this.nativeEvent = o,
            this.target = a,
            this.currentTarget = null,
            e)
                e.hasOwnProperty(i) && (t = e[i],
                this[i] = t ? t(o) : o[i]);
            return this.isDefaultPrevented = (null != o.defaultPrevented ? o.defaultPrevented : !1 === o.returnValue) ? an : un,
            this.isPropagationStopped = un,
            this
        }
        return o(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1),
                this.isDefaultPrevented = an)
            },
            stopPropagation: function() {
                var e = this.nativeEvent;
                e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0),
                this.isPropagationStopped = an)
            },
            persist: function() {},
            isPersistent: an
        }),
        t
    }
    var cn, sn, fn, pn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, dn = ln(pn), yn = o({}, pn, {
        view: 0,
        detail: 0
    }), vn = ln(yn), hn = o({}, yn, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: xn,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX"in e ? e.movementX : (e !== fn && (fn && "mousemove" === e.type ? (cn = e.screenX - fn.screenX,
            sn = e.screenY - fn.screenY) : sn = cn = 0,
            fn = e),
            cn)
        },
        movementY: function(e) {
            return "movementY"in e ? e.movementY : sn
        }
    }), mn = ln(hn), gn = ln(o({}, hn, {
        dataTransfer: 0
    })), bn = ln(o({}, yn, {
        relatedTarget: 0
    })), wn = ln(o({}, pn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })), On = ln(o({}, pn, {
        clipboardData: function(e) {
            return "clipboardData"in e ? e.clipboardData : window.clipboardData
        }
    })), kn = ln(o({}, pn, {
        data: 0
    })), Sn = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, En = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, Pn = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function _n(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : !!(e = Pn[e]) && !!t[e]
    }
    function xn() {
        return _n
    }
    var jn = ln(o({}, yn, {
        key: function(e) {
            if (e.key) {
                var t = Sn[e.key] || e.key;
                if ("Unidentified" !== t)
                    return t
            }
            return "keypress" === e.type ? 13 === (e = on(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? En[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: xn,
        charCode: function(e) {
            return "keypress" === e.type ? on(e) : 0
        },
        keyCode: function(e) {
            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
        },
        which: function(e) {
            return "keypress" === e.type ? on(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
        }
    }))
      , Tn = ln(o({}, hn, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }))
      , An = ln(o({}, yn, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: xn
    }))
      , Cn = ln(o({}, pn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }))
      , Ln = ln(o({}, hn, {
        deltaX: function(e) {
            return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }))
      , Rn = [9, 13, 27, 32]
      , Mn = f && "CompositionEvent"in window
      , Dn = null;
    f && "documentMode"in document && (Dn = document.documentMode);
    var Nn = f && "TextEvent"in window && !Dn
      , Vn = f && (!Mn || Dn && 8 < Dn && 11 >= Dn)
      , In = String.fromCharCode(32)
      , Un = !1;
    function Fn(e, t) {
        switch (e) {
        case "keyup":
            return -1 !== Rn.indexOf(t.keyCode);
        case "keydown":
            return 229 !== t.keyCode;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function zn(e) {
        return "object" === typeof (e = e.detail) && "data"in e ? e.data : null
    }
    var Bn = !1;
    var Hn = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function Wn(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return "input" === t ? !!Hn[e.type] : "textarea" === t
    }
    function qn(e, t, n, r) {
        Ce(r),
        0 < (t = Mr(t, "onChange")).length && (n = new dn("onChange","change",null,n,r),
        e.push({
            event: n,
            listeners: t
        }))
    }
    var $n = null
      , Kn = null;
    function Yn(e) {
        _r(e, 0)
    }
    function Xn(e) {
        if (G(to(e)))
            return e
    }
    function Qn(e, t) {
        if ("change" === e)
            return t
    }
    var Gn = !1;
    if (f) {
        var Zn;
        if (f) {
            var Jn = "oninput"in document;
            if (!Jn) {
                var er = document.createElement("div");
                er.setAttribute("oninput", "return;"),
                Jn = "function" === typeof er.oninput
            }
            Zn = Jn
        } else
            Zn = !1;
        Gn = Zn && (!document.documentMode || 9 < document.documentMode)
    }
    function tr() {
        $n && ($n.detachEvent("onpropertychange", nr),
        Kn = $n = null)
    }
    function nr(e) {
        if ("value" === e.propertyName && Xn(Kn)) {
            var t = [];
            if (qn(t, Kn, e, _e(e)),
            e = Yn,
            Ve)
                e(t);
            else {
                Ve = !0;
                try {
                    Re(e, t)
                } finally {
                    Ve = !1,
                    Ue()
                }
            }
        }
    }
    function rr(e, t, n) {
        "focusin" === e ? (tr(),
        Kn = n,
        ($n = t).attachEvent("onpropertychange", nr)) : "focusout" === e && tr()
    }
    function or(e) {
        if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Xn(Kn)
    }
    function ar(e, t) {
        if ("click" === e)
            return Xn(t)
    }
    function ir(e, t) {
        if ("input" === e || "change" === e)
            return Xn(t)
    }
    var ur = "function" === typeof Object.is ? Object.is : function(e, t) {
        return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
    }
      , lr = Object.prototype.hasOwnProperty;
    function cr(e, t) {
        if (ur(e, t))
            return !0;
        if ("object" !== typeof e || null === e || "object" !== typeof t || null === t)
            return !1;
        var n = Object.keys(e)
          , r = Object.keys(t);
        if (n.length !== r.length)
            return !1;
        for (r = 0; r < n.length; r++)
            if (!lr.call(t, n[r]) || !ur(e[n[r]], t[n[r]]))
                return !1;
        return !0
    }
    function sr(e) {
        for (; e && e.firstChild; )
            e = e.firstChild;
        return e
    }
    function fr(e, t) {
        var n, r = sr(e);
        for (e = 0; r; ) {
            if (3 === r.nodeType) {
                if (n = e + r.textContent.length,
                e <= t && n >= t)
                    return {
                        node: r,
                        offset: t - e
                    };
                e = n
            }
            e: {
                for (; r; ) {
                    if (r.nextSibling) {
                        r = r.nextSibling;
                        break e
                    }
                    r = r.parentNode
                }
                r = void 0
            }
            r = sr(r)
        }
    }
    function pr(e, t) {
        return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? pr(e, t.parentNode) : "contains"in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
    }
    function dr() {
        for (var e = window, t = Z(); t instanceof e.HTMLIFrameElement; ) {
            try {
                var n = "string" === typeof t.contentWindow.location.href
            } catch (r) {
                n = !1
            }
            if (!n)
                break;
            t = Z((e = t.contentWindow).document)
        }
        return t
    }
    function yr(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
    }
    var vr = f && "documentMode"in document && 11 >= document.documentMode
      , hr = null
      , mr = null
      , gr = null
      , br = !1;
    function wr(e, t, n) {
        var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
        br || null == hr || hr !== Z(r) || ("selectionStart"in (r = hr) && yr(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : r = {
            anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset
        },
        gr && cr(gr, r) || (gr = r,
        0 < (r = Mr(mr, "onSelect")).length && (t = new dn("onSelect","select",null,t,n),
        e.push({
            event: t,
            listeners: r
        }),
        t.target = hr)))
    }
    Dt("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0),
    Dt("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1),
    Dt(Mt, 2);
    for (var Or = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), kr = 0; kr < Or.length; kr++)
        Rt.set(Or[kr], 0);
    s("onMouseEnter", ["mouseout", "mouseover"]),
    s("onMouseLeave", ["mouseout", "mouseover"]),
    s("onPointerEnter", ["pointerout", "pointerover"]),
    s("onPointerLeave", ["pointerout", "pointerover"]),
    c("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    c("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    c("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    c("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    c("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    c("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Sr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , Er = new Set("cancel close invalid load scroll toggle".split(" ").concat(Sr));
    function Pr(e, t, n) {
        var r = e.type || "unknown-event";
        e.currentTarget = n,
        function(e, t, n, r, o, a, u, l, c) {
            if (Xe.apply(this, arguments),
            We) {
                if (!We)
                    throw Error(i(198));
                var s = qe;
                We = !1,
                qe = null,
                $e || ($e = !0,
                Ke = s)
            }
        }(r, t, void 0, e),
        e.currentTarget = null
    }
    function _r(e, t) {
        t = 0 !== (4 & t);
        for (var n = 0; n < e.length; n++) {
            var r = e[n]
              , o = r.event;
            r = r.listeners;
            e: {
                var a = void 0;
                if (t)
                    for (var i = r.length - 1; 0 <= i; i--) {
                        var u = r[i]
                          , l = u.instance
                          , c = u.currentTarget;
                        if (u = u.listener,
                        l !== a && o.isPropagationStopped())
                            break e;
                        Pr(o, u, c),
                        a = l
                    }
                else
                    for (i = 0; i < r.length; i++) {
                        if (l = (u = r[i]).instance,
                        c = u.currentTarget,
                        u = u.listener,
                        l !== a && o.isPropagationStopped())
                            break e;
                        Pr(o, u, c),
                        a = l
                    }
            }
        }
        if ($e)
            throw e = Ke,
            $e = !1,
            Ke = null,
            e
    }
    function xr(e, t) {
        var n = ro(t)
          , r = e + "__bubble";
        n.has(r) || (Cr(t, e, 2, !1),
        n.add(r))
    }
    var jr = "_reactListening" + Math.random().toString(36).slice(2);
    function Tr(e) {
        e[jr] || (e[jr] = !0,
        u.forEach((function(t) {
            Er.has(t) || Ar(t, !1, e, null),
            Ar(t, !0, e, null)
        }
        )))
    }
    function Ar(e, t, n, r) {
        var o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0
          , a = n;
        if ("selectionchange" === e && 9 !== n.nodeType && (a = n.ownerDocument),
        null !== r && !t && Er.has(e)) {
            if ("scroll" !== e)
                return;
            o |= 2,
            a = r
        }
        var i = ro(a)
          , u = e + "__" + (t ? "capture" : "bubble");
        i.has(u) || (t && (o |= 4),
        Cr(a, e, o, t),
        i.add(u))
    }
    function Cr(e, t, n, r) {
        var o = Rt.get(t);
        switch (void 0 === o ? 2 : o) {
        case 0:
            o = Qt;
            break;
        case 1:
            o = Gt;
            break;
        default:
            o = Zt
        }
        n = o.bind(null, t, n, e),
        o = void 0,
        !ze || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (o = !0),
        r ? void 0 !== o ? e.addEventListener(t, n, {
            capture: !0,
            passive: o
        }) : e.addEventListener(t, n, !0) : void 0 !== o ? e.addEventListener(t, n, {
            passive: o
        }) : e.addEventListener(t, n, !1)
    }
    function Lr(e, t, n, r, o) {
        var a = r;
        if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (; ; ) {
                if (null === r)
                    return;
                var i = r.tag;
                if (3 === i || 4 === i) {
                    var u = r.stateNode.containerInfo;
                    if (u === o || 8 === u.nodeType && u.parentNode === o)
                        break;
                    if (4 === i)
                        for (i = r.return; null !== i; ) {
                            var l = i.tag;
                            if ((3 === l || 4 === l) && ((l = i.stateNode.containerInfo) === o || 8 === l.nodeType && l.parentNode === o))
                                return;
                            i = i.return
                        }
                    for (; null !== u; ) {
                        if (null === (i = Jr(u)))
                            return;
                        if (5 === (l = i.tag) || 6 === l) {
                            r = a = i;
                            continue e
                        }
                        u = u.parentNode
                    }
                }
                r = r.return
            }
        !function(e, t, n) {
            if (Ie)
                return e(t, n);
            Ie = !0;
            try {
                Ne(e, t, n)
            } finally {
                Ie = !1,
                Ue()
            }
        }((function() {
            var r = a
              , o = _e(n)
              , i = [];
            e: {
                var u = Lt.get(e);
                if (void 0 !== u) {
                    var l = dn
                      , c = e;
                    switch (e) {
                    case "keypress":
                        if (0 === on(n))
                            break e;
                    case "keydown":
                    case "keyup":
                        l = jn;
                        break;
                    case "focusin":
                        c = "focus",
                        l = bn;
                        break;
                    case "focusout":
                        c = "blur",
                        l = bn;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        l = bn;
                        break;
                    case "click":
                        if (2 === n.button)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        l = mn;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        l = gn;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        l = An;
                        break;
                    case jt:
                    case Tt:
                    case At:
                        l = wn;
                        break;
                    case Ct:
                        l = Cn;
                        break;
                    case "scroll":
                        l = vn;
                        break;
                    case "wheel":
                        l = Ln;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        l = On;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        l = Tn
                    }
                    var s = 0 !== (4 & t)
                      , f = !s && "scroll" === e
                      , p = s ? null !== u ? u + "Capture" : null : u;
                    s = [];
                    for (var d, y = r; null !== y; ) {
                        var v = (d = y).stateNode;
                        if (5 === d.tag && null !== v && (d = v,
                        null !== p && (null != (v = Fe(y, p)) && s.push(Rr(y, v, d)))),
                        f)
                            break;
                        y = y.return
                    }
                    0 < s.length && (u = new l(u,c,null,n,o),
                    i.push({
                        event: u,
                        listeners: s
                    }))
                }
            }
            if (0 === (7 & t)) {
                if (l = "mouseout" === e || "pointerout" === e,
                (!(u = "mouseover" === e || "pointerover" === e) || 0 !== (16 & t) || !(c = n.relatedTarget || n.fromElement) || !Jr(c) && !c[Gr]) && (l || u) && (u = o.window === o ? o : (u = o.ownerDocument) ? u.defaultView || u.parentWindow : window,
                l ? (l = r,
                null !== (c = (c = n.relatedTarget || n.toElement) ? Jr(c) : null) && (c !== (f = Qe(c)) || 5 !== c.tag && 6 !== c.tag) && (c = null)) : (l = null,
                c = r),
                l !== c)) {
                    if (s = mn,
                    v = "onMouseLeave",
                    p = "onMouseEnter",
                    y = "mouse",
                    "pointerout" !== e && "pointerover" !== e || (s = Tn,
                    v = "onPointerLeave",
                    p = "onPointerEnter",
                    y = "pointer"),
                    f = null == l ? u : to(l),
                    d = null == c ? u : to(c),
                    (u = new s(v,y + "leave",l,n,o)).target = f,
                    u.relatedTarget = d,
                    v = null,
                    Jr(o) === r && ((s = new s(p,y + "enter",c,n,o)).target = d,
                    s.relatedTarget = f,
                    v = s),
                    f = v,
                    l && c)
                        e: {
                            for (p = c,
                            y = 0,
                            d = s = l; d; d = Dr(d))
                                y++;
                            for (d = 0,
                            v = p; v; v = Dr(v))
                                d++;
                            for (; 0 < y - d; )
                                s = Dr(s),
                                y--;
                            for (; 0 < d - y; )
                                p = Dr(p),
                                d--;
                            for (; y--; ) {
                                if (s === p || null !== p && s === p.alternate)
                                    break e;
                                s = Dr(s),
                                p = Dr(p)
                            }
                            s = null
                        }
                    else
                        s = null;
                    null !== l && Nr(i, u, l, s, !1),
                    null !== c && null !== f && Nr(i, f, c, s, !0)
                }
                if ("select" === (l = (u = r ? to(r) : window).nodeName && u.nodeName.toLowerCase()) || "input" === l && "file" === u.type)
                    var h = Qn;
                else if (Wn(u))
                    if (Gn)
                        h = ir;
                    else {
                        h = or;
                        var m = rr
                    }
                else
                    (l = u.nodeName) && "input" === l.toLowerCase() && ("checkbox" === u.type || "radio" === u.type) && (h = ar);
                switch (h && (h = h(e, r)) ? qn(i, h, n, o) : (m && m(e, u, r),
                "focusout" === e && (m = u._wrapperState) && m.controlled && "number" === u.type && oe(u, "number", u.value)),
                m = r ? to(r) : window,
                e) {
                case "focusin":
                    (Wn(m) || "true" === m.contentEditable) && (hr = m,
                    mr = r,
                    gr = null);
                    break;
                case "focusout":
                    gr = mr = hr = null;
                    break;
                case "mousedown":
                    br = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    br = !1,
                    wr(i, n, o);
                    break;
                case "selectionchange":
                    if (vr)
                        break;
                case "keydown":
                case "keyup":
                    wr(i, n, o)
                }
                var g;
                if (Mn)
                    e: {
                        switch (e) {
                        case "compositionstart":
                            var b = "onCompositionStart";
                            break e;
                        case "compositionend":
                            b = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            b = "onCompositionUpdate";
                            break e
                        }
                        b = void 0
                    }
                else
                    Bn ? Fn(e, n) && (b = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
                b && (Vn && "ko" !== n.locale && (Bn || "onCompositionStart" !== b ? "onCompositionEnd" === b && Bn && (g = rn()) : (tn = "value"in (en = o) ? en.value : en.textContent,
                Bn = !0)),
                0 < (m = Mr(r, b)).length && (b = new kn(b,e,null,n,o),
                i.push({
                    event: b,
                    listeners: m
                }),
                g ? b.data = g : null !== (g = zn(n)) && (b.data = g))),
                (g = Nn ? function(e, t) {
                    switch (e) {
                    case "compositionend":
                        return zn(t);
                    case "keypress":
                        return 32 !== t.which ? null : (Un = !0,
                        In);
                    case "textInput":
                        return (e = t.data) === In && Un ? null : e;
                    default:
                        return null
                    }
                }(e, n) : function(e, t) {
                    if (Bn)
                        return "compositionend" === e || !Mn && Fn(e, t) ? (e = rn(),
                        nn = tn = en = null,
                        Bn = !1,
                        e) : null;
                    switch (e) {
                    case "paste":
                        return null;
                    case "keypress":
                        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                            if (t.char && 1 < t.char.length)
                                return t.char;
                            if (t.which)
                                return String.fromCharCode(t.which)
                        }
                        return null;
                    case "compositionend":
                        return Vn && "ko" !== t.locale ? null : t.data;
                    default:
                        return null
                    }
                }(e, n)) && (0 < (r = Mr(r, "onBeforeInput")).length && (o = new kn("onBeforeInput","beforeinput",null,n,o),
                i.push({
                    event: o,
                    listeners: r
                }),
                o.data = g))
            }
            _r(i, t)
        }
        ))
    }
    function Rr(e, t, n) {
        return {
            instance: e,
            listener: t,
            currentTarget: n
        }
    }
    function Mr(e, t) {
        for (var n = t + "Capture", r = []; null !== e; ) {
            var o = e
              , a = o.stateNode;
            5 === o.tag && null !== a && (o = a,
            null != (a = Fe(e, n)) && r.unshift(Rr(e, a, o)),
            null != (a = Fe(e, t)) && r.push(Rr(e, a, o))),
            e = e.return
        }
        return r
    }
    function Dr(e) {
        if (null === e)
            return null;
        do {
            e = e.return
        } while (e && 5 !== e.tag);
        return e || null
    }
    function Nr(e, t, n, r, o) {
        for (var a = t._reactName, i = []; null !== n && n !== r; ) {
            var u = n
              , l = u.alternate
              , c = u.stateNode;
            if (null !== l && l === r)
                break;
            5 === u.tag && null !== c && (u = c,
            o ? null != (l = Fe(n, a)) && i.unshift(Rr(n, l, u)) : o || null != (l = Fe(n, a)) && i.push(Rr(n, l, u))),
            n = n.return
        }
        0 !== i.length && e.push({
            event: t,
            listeners: i
        })
    }
    function Vr() {}
    var Ir = null
      , Ur = null;
    function Fr(e, t) {
        switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
            return !!t.autoFocus
        }
        return !1
    }
    function zr(e, t) {
        return "textarea" === e || "option" === e || "noscript" === e || "string" === typeof t.children || "number" === typeof t.children || "object" === typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
    }
    var Br = "function" === typeof setTimeout ? setTimeout : void 0
      , Hr = "function" === typeof clearTimeout ? clearTimeout : void 0;
    function Wr(e) {
        1 === e.nodeType ? e.textContent = "" : 9 === e.nodeType && (null != (e = e.body) && (e.textContent = ""))
    }
    function qr(e) {
        for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t)
                break
        }
        return e
    }
    function $r(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
            if (8 === e.nodeType) {
                var n = e.data;
                if ("$" === n || "$!" === n || "$?" === n) {
                    if (0 === t)
                        return e;
                    t--
                } else
                    "/$" === n && t++
            }
            e = e.previousSibling
        }
        return null
    }
    var Kr = 0;
    var Yr = Math.random().toString(36).slice(2)
      , Xr = "__reactFiber$" + Yr
      , Qr = "__reactProps$" + Yr
      , Gr = "__reactContainer$" + Yr
      , Zr = "__reactEvents$" + Yr;
    function Jr(e) {
        var t = e[Xr];
        if (t)
            return t;
        for (var n = e.parentNode; n; ) {
            if (t = n[Gr] || n[Xr]) {
                if (n = t.alternate,
                null !== t.child || null !== n && null !== n.child)
                    for (e = $r(e); null !== e; ) {
                        if (n = e[Xr])
                            return n;
                        e = $r(e)
                    }
                return t
            }
            n = (e = n).parentNode
        }
        return null
    }
    function eo(e) {
        return !(e = e[Xr] || e[Gr]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
    }
    function to(e) {
        if (5 === e.tag || 6 === e.tag)
            return e.stateNode;
        throw Error(i(33))
    }
    function no(e) {
        return e[Qr] || null
    }
    function ro(e) {
        var t = e[Zr];
        return void 0 === t && (t = e[Zr] = new Set),
        t
    }
    var oo = []
      , ao = -1;
    function io(e) {
        return {
            current: e
        }
    }
    function uo(e) {
        0 > ao || (e.current = oo[ao],
        oo[ao] = null,
        ao--)
    }
    function lo(e, t) {
        ao++,
        oo[ao] = e.current,
        e.current = t
    }
    var co = {}
      , so = io(co)
      , fo = io(!1)
      , po = co;
    function yo(e, t) {
        var n = e.type.contextTypes;
        if (!n)
            return co;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
        var o, a = {};
        for (o in n)
            a[o] = t[o];
        return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t,
        e.__reactInternalMemoizedMaskedChildContext = a),
        a
    }
    function vo(e) {
        return null !== (e = e.childContextTypes) && void 0 !== e
    }
    function ho() {
        uo(fo),
        uo(so)
    }
    function mo(e, t, n) {
        if (so.current !== co)
            throw Error(i(168));
        lo(so, t),
        lo(fo, n)
    }
    function go(e, t, n) {
        var r = e.stateNode;
        if (e = t.childContextTypes,
        "function" !== typeof r.getChildContext)
            return n;
        for (var a in r = r.getChildContext())
            if (!(a in e))
                throw Error(i(108, K(t) || "Unknown", a));
        return o({}, n, r)
    }
    function bo(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || co,
        po = so.current,
        lo(so, e),
        lo(fo, fo.current),
        !0
    }
    function wo(e, t, n) {
        var r = e.stateNode;
        if (!r)
            throw Error(i(169));
        n ? (e = go(e, t, po),
        r.__reactInternalMemoizedMergedChildContext = e,
        uo(fo),
        uo(so),
        lo(so, e)) : uo(fo),
        lo(fo, n)
    }
    var Oo = null
      , ko = null
      , So = a.unstable_runWithPriority
      , Eo = a.unstable_scheduleCallback
      , Po = a.unstable_cancelCallback
      , _o = a.unstable_shouldYield
      , xo = a.unstable_requestPaint
      , jo = a.unstable_now
      , To = a.unstable_getCurrentPriorityLevel
      , Ao = a.unstable_ImmediatePriority
      , Co = a.unstable_UserBlockingPriority
      , Lo = a.unstable_NormalPriority
      , Ro = a.unstable_LowPriority
      , Mo = a.unstable_IdlePriority
      , Do = {}
      , No = void 0 !== xo ? xo : function() {}
      , Vo = null
      , Io = null
      , Uo = !1
      , Fo = jo()
      , zo = 1e4 > Fo ? jo : function() {
        return jo() - Fo
    }
    ;
    function Bo() {
        switch (To()) {
        case Ao:
            return 99;
        case Co:
            return 98;
        case Lo:
            return 97;
        case Ro:
            return 96;
        case Mo:
            return 95;
        default:
            throw Error(i(332))
        }
    }
    function Ho(e) {
        switch (e) {
        case 99:
            return Ao;
        case 98:
            return Co;
        case 97:
            return Lo;
        case 96:
            return Ro;
        case 95:
            return Mo;
        default:
            throw Error(i(332))
        }
    }
    function Wo(e, t) {
        return e = Ho(e),
        So(e, t)
    }
    function qo(e, t, n) {
        return e = Ho(e),
        Eo(e, t, n)
    }
    function $o() {
        if (null !== Io) {
            var e = Io;
            Io = null,
            Po(e)
        }
        Ko()
    }
    function Ko() {
        if (!Uo && null !== Vo) {
            Uo = !0;
            var e = 0;
            try {
                var t = Vo;
                Wo(99, (function() {
                    for (; e < t.length; e++) {
                        var n = t[e];
                        do {
                            n = n(!0)
                        } while (null !== n)
                    }
                }
                )),
                Vo = null
            } catch (n) {
                throw null !== Vo && (Vo = Vo.slice(e + 1)),
                Eo(Ao, $o),
                n
            } finally {
                Uo = !1
            }
        }
    }
    var Yo = O.ReactCurrentBatchConfig;
    function Xo(e, t) {
        if (e && e.defaultProps) {
            for (var n in t = o({}, t),
            e = e.defaultProps)
                void 0 === t[n] && (t[n] = e[n]);
            return t
        }
        return t
    }
    var Qo = io(null)
      , Go = null
      , Zo = null
      , Jo = null;
    function ea() {
        Jo = Zo = Go = null
    }
    function ta(e) {
        var t = Qo.current;
        uo(Qo),
        e.type._context._currentValue = t
    }
    function na(e, t) {
        for (; null !== e; ) {
            var n = e.alternate;
            if ((e.childLanes & t) === t) {
                if (null === n || (n.childLanes & t) === t)
                    break;
                n.childLanes |= t
            } else
                e.childLanes |= t,
                null !== n && (n.childLanes |= t);
            e = e.return
        }
    }
    function ra(e, t) {
        Go = e,
        Jo = Zo = null,
        null !== (e = e.dependencies) && null !== e.firstContext && (0 !== (e.lanes & t) && (Mi = !0),
        e.firstContext = null)
    }
    function oa(e, t) {
        if (Jo !== e && !1 !== t && 0 !== t)
            if ("number" === typeof t && 1073741823 !== t || (Jo = e,
            t = 1073741823),
            t = {
                context: e,
                observedBits: t,
                next: null
            },
            null === Zo) {
                if (null === Go)
                    throw Error(i(308));
                Zo = t,
                Go.dependencies = {
                    lanes: 0,
                    firstContext: t,
                    responders: null
                }
            } else
                Zo = Zo.next = t;
        return e._currentValue
    }
    var aa = !1;
    function ia(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null
            },
            effects: null
        }
    }
    function ua(e, t) {
        e = e.updateQueue,
        t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        })
    }
    function la(e, t) {
        return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function ca(e, t) {
        if (null !== (e = e.updateQueue)) {
            var n = (e = e.shared).pending;
            null === n ? t.next = t : (t.next = n.next,
            n.next = t),
            e.pending = t
        }
    }
    function sa(e, t) {
        var n = e.updateQueue
          , r = e.alternate;
        if (null !== r && n === (r = r.updateQueue)) {
            var o = null
              , a = null;
            if (null !== (n = n.firstBaseUpdate)) {
                do {
                    var i = {
                        eventTime: n.eventTime,
                        lane: n.lane,
                        tag: n.tag,
                        payload: n.payload,
                        callback: n.callback,
                        next: null
                    };
                    null === a ? o = a = i : a = a.next = i,
                    n = n.next
                } while (null !== n);
                null === a ? o = a = t : a = a.next = t
            } else
                o = a = t;
            return n = {
                baseState: r.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: a,
                shared: r.shared,
                effects: r.effects
            },
            void (e.updateQueue = n)
        }
        null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t,
        n.lastBaseUpdate = t
    }
    function fa(e, t, n, r) {
        var a = e.updateQueue;
        aa = !1;
        var i = a.firstBaseUpdate
          , u = a.lastBaseUpdate
          , l = a.shared.pending;
        if (null !== l) {
            a.shared.pending = null;
            var c = l
              , s = c.next;
            c.next = null,
            null === u ? i = s : u.next = s,
            u = c;
            var f = e.alternate;
            if (null !== f) {
                var p = (f = f.updateQueue).lastBaseUpdate;
                p !== u && (null === p ? f.firstBaseUpdate = s : p.next = s,
                f.lastBaseUpdate = c)
            }
        }
        if (null !== i) {
            for (p = a.baseState,
            u = 0,
            f = s = c = null; ; ) {
                l = i.lane;
                var d = i.eventTime;
                if ((r & l) === l) {
                    null !== f && (f = f.next = {
                        eventTime: d,
                        lane: 0,
                        tag: i.tag,
                        payload: i.payload,
                        callback: i.callback,
                        next: null
                    });
                    e: {
                        var y = e
                          , v = i;
                        switch (l = t,
                        d = n,
                        v.tag) {
                        case 1:
                            if ("function" === typeof (y = v.payload)) {
                                p = y.call(d, p, l);
                                break e
                            }
                            p = y;
                            break e;
                        case 3:
                            y.flags = -4097 & y.flags | 64;
                        case 0:
                            if (null === (l = "function" === typeof (y = v.payload) ? y.call(d, p, l) : y) || void 0 === l)
                                break e;
                            p = o({}, p, l);
                            break e;
                        case 2:
                            aa = !0
                        }
                    }
                    null !== i.callback && (e.flags |= 32,
                    null === (l = a.effects) ? a.effects = [i] : l.push(i))
                } else
                    d = {
                        eventTime: d,
                        lane: l,
                        tag: i.tag,
                        payload: i.payload,
                        callback: i.callback,
                        next: null
                    },
                    null === f ? (s = f = d,
                    c = p) : f = f.next = d,
                    u |= l;
                if (null === (i = i.next)) {
                    if (null === (l = a.shared.pending))
                        break;
                    i = l.next,
                    l.next = null,
                    a.lastBaseUpdate = l,
                    a.shared.pending = null
                }
            }
            null === f && (c = p),
            a.baseState = c,
            a.firstBaseUpdate = s,
            a.lastBaseUpdate = f,
            Iu |= u,
            e.lanes = u,
            e.memoizedState = p
        }
    }
    function pa(e, t, n) {
        if (e = t.effects,
        t.effects = null,
        null !== e)
            for (t = 0; t < e.length; t++) {
                var r = e[t]
                  , o = r.callback;
                if (null !== o) {
                    if (r.callback = null,
                    r = n,
                    "function" !== typeof o)
                        throw Error(i(191, o));
                    o.call(r)
                }
            }
    }
    var da = (new r.Component).refs;
    function ya(e, t, n, r) {
        n = null === (n = n(r, t = e.memoizedState)) || void 0 === n ? t : o({}, t, n),
        e.memoizedState = n,
        0 === e.lanes && (e.updateQueue.baseState = n)
    }
    var va = {
        isMounted: function(e) {
            return !!(e = e._reactInternals) && Qe(e) === e
        },
        enqueueSetState: function(e, t, n) {
            e = e._reactInternals;
            var r = cl()
              , o = sl(e)
              , a = la(r, o);
            a.payload = t,
            void 0 !== n && null !== n && (a.callback = n),
            ca(e, a),
            fl(e, o, r)
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternals;
            var r = cl()
              , o = sl(e)
              , a = la(r, o);
            a.tag = 1,
            a.payload = t,
            void 0 !== n && null !== n && (a.callback = n),
            ca(e, a),
            fl(e, o, r)
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var n = cl()
              , r = sl(e)
              , o = la(n, r);
            o.tag = 2,
            void 0 !== t && null !== t && (o.callback = t),
            ca(e, o),
            fl(e, r, n)
        }
    };
    function ha(e, t, n, r, o, a, i) {
        return "function" === typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, a, i) : !t.prototype || !t.prototype.isPureReactComponent || (!cr(n, r) || !cr(o, a))
    }
    function ma(e, t, n) {
        var r = !1
          , o = co
          , a = t.contextType;
        return "object" === typeof a && null !== a ? a = oa(a) : (o = vo(t) ? po : so.current,
        a = (r = null !== (r = t.contextTypes) && void 0 !== r) ? yo(e, o) : co),
        t = new t(n,a),
        e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null,
        t.updater = va,
        e.stateNode = t,
        t._reactInternals = e,
        r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o,
        e.__reactInternalMemoizedMaskedChildContext = a),
        t
    }
    function ga(e, t, n, r) {
        e = t.state,
        "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
        "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && va.enqueueReplaceState(t, t.state, null)
    }
    function ba(e, t, n, r) {
        var o = e.stateNode;
        o.props = n,
        o.state = e.memoizedState,
        o.refs = da,
        ia(e);
        var a = t.contextType;
        "object" === typeof a && null !== a ? o.context = oa(a) : (a = vo(t) ? po : so.current,
        o.context = yo(e, a)),
        fa(e, n, o, r),
        o.state = e.memoizedState,
        "function" === typeof (a = t.getDerivedStateFromProps) && (ya(e, t, a, n),
        o.state = e.memoizedState),
        "function" === typeof t.getDerivedStateFromProps || "function" === typeof o.getSnapshotBeforeUpdate || "function" !== typeof o.UNSAFE_componentWillMount && "function" !== typeof o.componentWillMount || (t = o.state,
        "function" === typeof o.componentWillMount && o.componentWillMount(),
        "function" === typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(),
        t !== o.state && va.enqueueReplaceState(o, o.state, null),
        fa(e, n, o, r),
        o.state = e.memoizedState),
        "function" === typeof o.componentDidMount && (e.flags |= 4)
    }
    var wa = Array.isArray;
    function Oa(e, t, n) {
        if (null !== (e = n.ref) && "function" !== typeof e && "object" !== typeof e) {
            if (n._owner) {
                if (n = n._owner) {
                    if (1 !== n.tag)
                        throw Error(i(309));
                    var r = n.stateNode
                }
                if (!r)
                    throw Error(i(147, e));
                var o = "" + e;
                return null !== t && null !== t.ref && "function" === typeof t.ref && t.ref._stringRef === o ? t.ref : ((t = function(e) {
                    var t = r.refs;
                    t === da && (t = r.refs = {}),
                    null === e ? delete t[o] : t[o] = e
                }
                )._stringRef = o,
                t)
            }
            if ("string" !== typeof e)
                throw Error(i(284));
            if (!n._owner)
                throw Error(i(290, e))
        }
        return e
    }
    function ka(e, t) {
        if ("textarea" !== e.type)
            throw Error(i(31, "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t))
    }
    function Sa(e) {
        function t(t, n) {
            if (e) {
                var r = t.lastEffect;
                null !== r ? (r.nextEffect = n,
                t.lastEffect = n) : t.firstEffect = t.lastEffect = n,
                n.nextEffect = null,
                n.flags = 8
            }
        }
        function n(n, r) {
            if (!e)
                return null;
            for (; null !== r; )
                t(n, r),
                r = r.sibling;
            return null
        }
        function r(e, t) {
            for (e = new Map; null !== t; )
                null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                t = t.sibling;
            return e
        }
        function o(e, t) {
            return (e = Hl(e, t)).index = 0,
            e.sibling = null,
            e
        }
        function a(t, n, r) {
            return t.index = r,
            e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags = 2,
            n) : r : (t.flags = 2,
            n) : n
        }
        function u(t) {
            return e && null === t.alternate && (t.flags = 2),
            t
        }
        function l(e, t, n, r) {
            return null === t || 6 !== t.tag ? ((t = Kl(n, e.mode, r)).return = e,
            t) : ((t = o(t, n)).return = e,
            t)
        }
        function c(e, t, n, r) {
            return null !== t && t.elementType === n.type ? ((r = o(t, n.props)).ref = Oa(e, t, n),
            r.return = e,
            r) : ((r = Wl(n.type, n.key, n.props, null, e.mode, r)).ref = Oa(e, t, n),
            r.return = e,
            r)
        }
        function s(e, t, n, r) {
            return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Yl(n, e.mode, r)).return = e,
            t) : ((t = o(t, n.children || [])).return = e,
            t)
        }
        function f(e, t, n, r, a) {
            return null === t || 7 !== t.tag ? ((t = ql(n, e.mode, r, a)).return = e,
            t) : ((t = o(t, n)).return = e,
            t)
        }
        function p(e, t, n) {
            if ("string" === typeof t || "number" === typeof t)
                return (t = Kl("" + t, e.mode, n)).return = e,
                t;
            if ("object" === typeof t && null !== t) {
                switch (t.$$typeof) {
                case k:
                    return (n = Wl(t.type, t.key, t.props, null, e.mode, n)).ref = Oa(e, null, t),
                    n.return = e,
                    n;
                case S:
                    return (t = Yl(t, e.mode, n)).return = e,
                    t
                }
                if (wa(t) || B(t))
                    return (t = ql(t, e.mode, n, null)).return = e,
                    t;
                ka(e, t)
            }
            return null
        }
        function d(e, t, n, r) {
            var o = null !== t ? t.key : null;
            if ("string" === typeof n || "number" === typeof n)
                return null !== o ? null : l(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
                switch (n.$$typeof) {
                case k:
                    return n.key === o ? n.type === E ? f(e, t, n.props.children, r, o) : c(e, t, n, r) : null;
                case S:
                    return n.key === o ? s(e, t, n, r) : null
                }
                if (wa(n) || B(n))
                    return null !== o ? null : f(e, t, n, r, null);
                ka(e, n)
            }
            return null
        }
        function y(e, t, n, r, o) {
            if ("string" === typeof r || "number" === typeof r)
                return l(t, e = e.get(n) || null, "" + r, o);
            if ("object" === typeof r && null !== r) {
                switch (r.$$typeof) {
                case k:
                    return e = e.get(null === r.key ? n : r.key) || null,
                    r.type === E ? f(t, e, r.props.children, o, r.key) : c(t, e, r, o);
                case S:
                    return s(t, e = e.get(null === r.key ? n : r.key) || null, r, o)
                }
                if (wa(r) || B(r))
                    return f(t, e = e.get(n) || null, r, o, null);
                ka(t, r)
            }
            return null
        }
        function v(o, i, u, l) {
            for (var c = null, s = null, f = i, v = i = 0, h = null; null !== f && v < u.length; v++) {
                f.index > v ? (h = f,
                f = null) : h = f.sibling;
                var m = d(o, f, u[v], l);
                if (null === m) {
                    null === f && (f = h);
                    break
                }
                e && f && null === m.alternate && t(o, f),
                i = a(m, i, v),
                null === s ? c = m : s.sibling = m,
                s = m,
                f = h
            }
            if (v === u.length)
                return n(o, f),
                c;
            if (null === f) {
                for (; v < u.length; v++)
                    null !== (f = p(o, u[v], l)) && (i = a(f, i, v),
                    null === s ? c = f : s.sibling = f,
                    s = f);
                return c
            }
            for (f = r(o, f); v < u.length; v++)
                null !== (h = y(f, o, v, u[v], l)) && (e && null !== h.alternate && f.delete(null === h.key ? v : h.key),
                i = a(h, i, v),
                null === s ? c = h : s.sibling = h,
                s = h);
            return e && f.forEach((function(e) {
                return t(o, e)
            }
            )),
            c
        }
        function h(o, u, l, c) {
            var s = B(l);
            if ("function" !== typeof s)
                throw Error(i(150));
            if (null == (l = s.call(l)))
                throw Error(i(151));
            for (var f = s = null, v = u, h = u = 0, m = null, g = l.next(); null !== v && !g.done; h++,
            g = l.next()) {
                v.index > h ? (m = v,
                v = null) : m = v.sibling;
                var b = d(o, v, g.value, c);
                if (null === b) {
                    null === v && (v = m);
                    break
                }
                e && v && null === b.alternate && t(o, v),
                u = a(b, u, h),
                null === f ? s = b : f.sibling = b,
                f = b,
                v = m
            }
            if (g.done)
                return n(o, v),
                s;
            if (null === v) {
                for (; !g.done; h++,
                g = l.next())
                    null !== (g = p(o, g.value, c)) && (u = a(g, u, h),
                    null === f ? s = g : f.sibling = g,
                    f = g);
                return s
            }
            for (v = r(o, v); !g.done; h++,
            g = l.next())
                null !== (g = y(v, o, h, g.value, c)) && (e && null !== g.alternate && v.delete(null === g.key ? h : g.key),
                u = a(g, u, h),
                null === f ? s = g : f.sibling = g,
                f = g);
            return e && v.forEach((function(e) {
                return t(o, e)
            }
            )),
            s
        }
        return function(e, r, a, l) {
            var c = "object" === typeof a && null !== a && a.type === E && null === a.key;
            c && (a = a.props.children);
            var s = "object" === typeof a && null !== a;
            if (s)
                switch (a.$$typeof) {
                case k:
                    e: {
                        for (s = a.key,
                        c = r; null !== c; ) {
                            if (c.key === s) {
                                switch (c.tag) {
                                case 7:
                                    if (a.type === E) {
                                        n(e, c.sibling),
                                        (r = o(c, a.props.children)).return = e,
                                        e = r;
                                        break e
                                    }
                                    break;
                                default:
                                    if (c.elementType === a.type) {
                                        n(e, c.sibling),
                                        (r = o(c, a.props)).ref = Oa(e, c, a),
                                        r.return = e,
                                        e = r;
                                        break e
                                    }
                                }
                                n(e, c);
                                break
                            }
                            t(e, c),
                            c = c.sibling
                        }
                        a.type === E ? ((r = ql(a.props.children, e.mode, l, a.key)).return = e,
                        e = r) : ((l = Wl(a.type, a.key, a.props, null, e.mode, l)).ref = Oa(e, r, a),
                        l.return = e,
                        e = l)
                    }
                    return u(e);
                case S:
                    e: {
                        for (c = a.key; null !== r; ) {
                            if (r.key === c) {
                                if (4 === r.tag && r.stateNode.containerInfo === a.containerInfo && r.stateNode.implementation === a.implementation) {
                                    n(e, r.sibling),
                                    (r = o(r, a.children || [])).return = e,
                                    e = r;
                                    break e
                                }
                                n(e, r);
                                break
                            }
                            t(e, r),
                            r = r.sibling
                        }
                        (r = Yl(a, e.mode, l)).return = e,
                        e = r
                    }
                    return u(e)
                }
            if ("string" === typeof a || "number" === typeof a)
                return a = "" + a,
                null !== r && 6 === r.tag ? (n(e, r.sibling),
                (r = o(r, a)).return = e,
                e = r) : (n(e, r),
                (r = Kl(a, e.mode, l)).return = e,
                e = r),
                u(e);
            if (wa(a))
                return v(e, r, a, l);
            if (B(a))
                return h(e, r, a, l);
            if (s && ka(e, a),
            "undefined" === typeof a && !c)
                switch (e.tag) {
                case 1:
                case 22:
                case 0:
                case 11:
                case 15:
                    throw Error(i(152, K(e.type) || "Component"))
                }
            return n(e, r)
        }
    }
    var Ea = Sa(!0)
      , Pa = Sa(!1)
      , _a = {}
      , xa = io(_a)
      , ja = io(_a)
      , Ta = io(_a);
    function Aa(e) {
        if (e === _a)
            throw Error(i(174));
        return e
    }
    function Ca(e, t) {
        switch (lo(Ta, t),
        lo(ja, e),
        lo(xa, _a),
        e = t.nodeType) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : ye(null, "");
            break;
        default:
            t = ye(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
        }
        uo(xa),
        lo(xa, t)
    }
    function La() {
        uo(xa),
        uo(ja),
        uo(Ta)
    }
    function Ra(e) {
        Aa(Ta.current);
        var t = Aa(xa.current)
          , n = ye(t, e.type);
        t !== n && (lo(ja, e),
        lo(xa, n))
    }
    function Ma(e) {
        ja.current === e && (uo(xa),
        uo(ja))
    }
    var Da = io(0);
    function Na(e) {
        for (var t = e; null !== t; ) {
            if (13 === t.tag) {
                var n = t.memoizedState;
                if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data))
                    return t
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                if (0 !== (64 & t.flags))
                    return t
            } else if (null !== t.child) {
                t.child.return = t,
                t = t.child;
                continue
            }
            if (t === e)
                break;
            for (; null === t.sibling; ) {
                if (null === t.return || t.return === e)
                    return null;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
        return null
    }
    var Va = null
      , Ia = null
      , Ua = !1;
    function Fa(e, t) {
        var n = zl(5, null, null, 0);
        n.elementType = "DELETED",
        n.type = "DELETED",
        n.stateNode = t,
        n.return = e,
        n.flags = 8,
        null !== e.lastEffect ? (e.lastEffect.nextEffect = n,
        e.lastEffect = n) : e.firstEffect = e.lastEffect = n
    }
    function za(e, t) {
        switch (e.tag) {
        case 5:
            var n = e.type;
            return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t,
            !0);
        case 6:
            return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t,
            !0);
        case 13:
        default:
            return !1
        }
    }
    function Ba(e) {
        if (Ua) {
            var t = Ia;
            if (t) {
                var n = t;
                if (!za(e, t)) {
                    if (!(t = qr(n.nextSibling)) || !za(e, t))
                        return e.flags = -1025 & e.flags | 2,
                        Ua = !1,
                        void (Va = e);
                    Fa(Va, n)
                }
                Va = e,
                Ia = qr(t.firstChild)
            } else
                e.flags = -1025 & e.flags | 2,
                Ua = !1,
                Va = e
        }
    }
    function Ha(e) {
        for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; )
            e = e.return;
        Va = e
    }
    function Wa(e) {
        if (e !== Va)
            return !1;
        if (!Ua)
            return Ha(e),
            Ua = !0,
            !1;
        var t = e.type;
        if (5 !== e.tag || "head" !== t && "body" !== t && !zr(t, e.memoizedProps))
            for (t = Ia; t; )
                Fa(e, t),
                t = qr(t.nextSibling);
        if (Ha(e),
        13 === e.tag) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
                throw Error(i(317));
            e: {
                for (e = e.nextSibling,
                t = 0; e; ) {
                    if (8 === e.nodeType) {
                        var n = e.data;
                        if ("/$" === n) {
                            if (0 === t) {
                                Ia = qr(e.nextSibling);
                                break e
                            }
                            t--
                        } else
                            "$" !== n && "$!" !== n && "$?" !== n || t++
                    }
                    e = e.nextSibling
                }
                Ia = null
            }
        } else
            Ia = Va ? qr(e.stateNode.nextSibling) : null;
        return !0
    }
    function qa() {
        Ia = Va = null,
        Ua = !1
    }
    var $a = [];
    function Ka() {
        for (var e = 0; e < $a.length; e++)
            $a[e]._workInProgressVersionPrimary = null;
        $a.length = 0
    }
    var Ya = O.ReactCurrentDispatcher
      , Xa = O.ReactCurrentBatchConfig
      , Qa = 0
      , Ga = null
      , Za = null
      , Ja = null
      , ei = !1
      , ti = !1;
    function ni() {
        throw Error(i(321))
    }
    function ri(e, t) {
        if (null === t)
            return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
            if (!ur(e[n], t[n]))
                return !1;
        return !0
    }
    function oi(e, t, n, r, o, a) {
        if (Qa = a,
        Ga = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        Ya.current = null === e || null === e.memoizedState ? Ai : Ci,
        e = n(r, o),
        ti) {
            a = 0;
            do {
                if (ti = !1,
                !(25 > a))
                    throw Error(i(301));
                a += 1,
                Ja = Za = null,
                t.updateQueue = null,
                Ya.current = Li,
                e = n(r, o)
            } while (ti)
        }
        if (Ya.current = Ti,
        t = null !== Za && null !== Za.next,
        Qa = 0,
        Ja = Za = Ga = null,
        ei = !1,
        t)
            throw Error(i(300));
        return e
    }
    function ai() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return null === Ja ? Ga.memoizedState = Ja = e : Ja = Ja.next = e,
        Ja
    }
    function ii() {
        if (null === Za) {
            var e = Ga.alternate;
            e = null !== e ? e.memoizedState : null
        } else
            e = Za.next;
        var t = null === Ja ? Ga.memoizedState : Ja.next;
        if (null !== t)
            Ja = t,
            Za = e;
        else {
            if (null === e)
                throw Error(i(310));
            e = {
                memoizedState: (Za = e).memoizedState,
                baseState: Za.baseState,
                baseQueue: Za.baseQueue,
                queue: Za.queue,
                next: null
            },
            null === Ja ? Ga.memoizedState = Ja = e : Ja = Ja.next = e
        }
        return Ja
    }
    function ui(e, t) {
        return "function" === typeof t ? t(e) : t
    }
    function li(e) {
        var t = ii()
          , n = t.queue;
        if (null === n)
            throw Error(i(311));
        n.lastRenderedReducer = e;
        var r = Za
          , o = r.baseQueue
          , a = n.pending;
        if (null !== a) {
            if (null !== o) {
                var u = o.next;
                o.next = a.next,
                a.next = u
            }
            r.baseQueue = o = a,
            n.pending = null
        }
        if (null !== o) {
            o = o.next,
            r = r.baseState;
            var l = u = a = null
              , c = o;
            do {
                var s = c.lane;
                if ((Qa & s) === s)
                    null !== l && (l = l.next = {
                        lane: 0,
                        action: c.action,
                        eagerReducer: c.eagerReducer,
                        eagerState: c.eagerState,
                        next: null
                    }),
                    r = c.eagerReducer === e ? c.eagerState : e(r, c.action);
                else {
                    var f = {
                        lane: s,
                        action: c.action,
                        eagerReducer: c.eagerReducer,
                        eagerState: c.eagerState,
                        next: null
                    };
                    null === l ? (u = l = f,
                    a = r) : l = l.next = f,
                    Ga.lanes |= s,
                    Iu |= s
                }
                c = c.next
            } while (null !== c && c !== o);
            null === l ? a = r : l.next = u,
            ur(r, t.memoizedState) || (Mi = !0),
            t.memoizedState = r,
            t.baseState = a,
            t.baseQueue = l,
            n.lastRenderedState = r
        }
        return [t.memoizedState, n.dispatch]
    }
    function ci(e) {
        var t = ii()
          , n = t.queue;
        if (null === n)
            throw Error(i(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch
          , o = n.pending
          , a = t.memoizedState;
        if (null !== o) {
            n.pending = null;
            var u = o = o.next;
            do {
                a = e(a, u.action),
                u = u.next
            } while (u !== o);
            ur(a, t.memoizedState) || (Mi = !0),
            t.memoizedState = a,
            null === t.baseQueue && (t.baseState = a),
            n.lastRenderedState = a
        }
        return [a, r]
    }
    function si(e, t, n) {
        var r = t._getVersion;
        r = r(t._source);
        var o = t._workInProgressVersionPrimary;
        if (null !== o ? e = o === r : (e = e.mutableReadLanes,
        (e = (Qa & e) === e) && (t._workInProgressVersionPrimary = r,
        $a.push(t))),
        e)
            return n(t._source);
        throw $a.push(t),
        Error(i(350))
    }
    function fi(e, t, n, r) {
        var o = Au;
        if (null === o)
            throw Error(i(349));
        var a = t._getVersion
          , u = a(t._source)
          , l = Ya.current
          , c = l.useState((function() {
            return si(o, t, n)
        }
        ))
          , s = c[1]
          , f = c[0];
        c = Ja;
        var p = e.memoizedState
          , d = p.refs
          , y = d.getSnapshot
          , v = p.source;
        p = p.subscribe;
        var h = Ga;
        return e.memoizedState = {
            refs: d,
            source: t,
            subscribe: r
        },
        l.useEffect((function() {
            d.getSnapshot = n,
            d.setSnapshot = s;
            var e = a(t._source);
            if (!ur(u, e)) {
                e = n(t._source),
                ur(f, e) || (s(e),
                e = sl(h),
                o.mutableReadLanes |= e & o.pendingLanes),
                e = o.mutableReadLanes,
                o.entangledLanes |= e;
                for (var r = o.entanglements, i = e; 0 < i; ) {
                    var l = 31 - Wt(i)
                      , c = 1 << l;
                    r[l] |= e,
                    i &= ~c
                }
            }
        }
        ), [n, t, r]),
        l.useEffect((function() {
            return r(t._source, (function() {
                var e = d.getSnapshot
                  , n = d.setSnapshot;
                try {
                    n(e(t._source));
                    var r = sl(h);
                    o.mutableReadLanes |= r & o.pendingLanes
                } catch (a) {
                    n((function() {
                        throw a
                    }
                    ))
                }
            }
            ))
        }
        ), [t, r]),
        ur(y, n) && ur(v, t) && ur(p, r) || ((e = {
            pending: null,
            dispatch: null,
            lastRenderedReducer: ui,
            lastRenderedState: f
        }).dispatch = s = ji.bind(null, Ga, e),
        c.queue = e,
        c.baseQueue = null,
        f = si(o, t, n),
        c.memoizedState = c.baseState = f),
        f
    }
    function pi(e, t, n) {
        return fi(ii(), e, t, n)
    }
    function di(e) {
        var t = ai();
        return "function" === typeof e && (e = e()),
        t.memoizedState = t.baseState = e,
        e = (e = t.queue = {
            pending: null,
            dispatch: null,
            lastRenderedReducer: ui,
            lastRenderedState: e
        }).dispatch = ji.bind(null, Ga, e),
        [t.memoizedState, e]
    }
    function yi(e, t, n, r) {
        return e = {
            tag: e,
            create: t,
            destroy: n,
            deps: r,
            next: null
        },
        null === (t = Ga.updateQueue) ? (t = {
            lastEffect: null
        },
        Ga.updateQueue = t,
        t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next,
        n.next = e,
        e.next = r,
        t.lastEffect = e),
        e
    }
    function vi(e) {
        return e = {
            current: e
        },
        ai().memoizedState = e
    }
    function hi() {
        return ii().memoizedState
    }
    function mi(e, t, n, r) {
        var o = ai();
        Ga.flags |= e,
        o.memoizedState = yi(1 | t, n, void 0, void 0 === r ? null : r)
    }
    function gi(e, t, n, r) {
        var o = ii();
        r = void 0 === r ? null : r;
        var a = void 0;
        if (null !== Za) {
            var i = Za.memoizedState;
            if (a = i.destroy,
            null !== r && ri(r, i.deps))
                return void yi(t, n, a, r)
        }
        Ga.flags |= e,
        o.memoizedState = yi(1 | t, n, a, r)
    }
    function bi(e, t) {
        return mi(516, 4, e, t)
    }
    function wi(e, t) {
        return gi(516, 4, e, t)
    }
    function Oi(e, t) {
        return gi(4, 2, e, t)
    }
    function ki(e, t) {
        return "function" === typeof t ? (e = e(),
        t(e),
        function() {
            t(null)
        }
        ) : null !== t && void 0 !== t ? (e = e(),
        t.current = e,
        function() {
            t.current = null
        }
        ) : void 0
    }
    function Si(e, t, n) {
        return n = null !== n && void 0 !== n ? n.concat([e]) : null,
        gi(4, 2, ki.bind(null, t, e), n)
    }
    function Ei() {}
    function Pi(e, t) {
        var n = ii();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && ri(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
        e)
    }
    function _i(e, t) {
        var n = ii();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && ri(t, r[1]) ? r[0] : (e = e(),
        n.memoizedState = [e, t],
        e)
    }
    function xi(e, t) {
        var n = Bo();
        Wo(98 > n ? 98 : n, (function() {
            e(!0)
        }
        )),
        Wo(97 < n ? 97 : n, (function() {
            var n = Xa.transition;
            Xa.transition = 1;
            try {
                e(!1),
                t()
            } finally {
                Xa.transition = n
            }
        }
        ))
    }
    function ji(e, t, n) {
        var r = cl()
          , o = sl(e)
          , a = {
            lane: o,
            action: n,
            eagerReducer: null,
            eagerState: null,
            next: null
        }
          , i = t.pending;
        if (null === i ? a.next = a : (a.next = i.next,
        i.next = a),
        t.pending = a,
        i = e.alternate,
        e === Ga || null !== i && i === Ga)
            ti = ei = !0;
        else {
            if (0 === e.lanes && (null === i || 0 === i.lanes) && null !== (i = t.lastRenderedReducer))
                try {
                    var u = t.lastRenderedState
                      , l = i(u, n);
                    if (a.eagerReducer = i,
                    a.eagerState = l,
                    ur(l, u))
                        return
                } catch (c) {}
            fl(e, o, r)
        }
    }
    var Ti = {
        readContext: oa,
        useCallback: ni,
        useContext: ni,
        useEffect: ni,
        useImperativeHandle: ni,
        useLayoutEffect: ni,
        useMemo: ni,
        useReducer: ni,
        useRef: ni,
        useState: ni,
        useDebugValue: ni,
        useDeferredValue: ni,
        useTransition: ni,
        useMutableSource: ni,
        useOpaqueIdentifier: ni,
        unstable_isNewReconciler: !1
    }
      , Ai = {
        readContext: oa,
        useCallback: function(e, t) {
            return ai().memoizedState = [e, void 0 === t ? null : t],
            e
        },
        useContext: oa,
        useEffect: bi,
        useImperativeHandle: function(e, t, n) {
            return n = null !== n && void 0 !== n ? n.concat([e]) : null,
            mi(4, 2, ki.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return mi(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = ai();
            return t = void 0 === t ? null : t,
            e = e(),
            n.memoizedState = [e, t],
            e
        },
        useReducer: function(e, t, n) {
            var r = ai();
            return t = void 0 !== n ? n(t) : t,
            r.memoizedState = r.baseState = t,
            e = (e = r.queue = {
                pending: null,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }).dispatch = ji.bind(null, Ga, e),
            [r.memoizedState, e]
        },
        useRef: vi,
        useState: di,
        useDebugValue: Ei,
        useDeferredValue: function(e) {
            var t = di(e)
              , n = t[0]
              , r = t[1];
            return bi((function() {
                var t = Xa.transition;
                Xa.transition = 1;
                try {
                    r(e)
                } finally {
                    Xa.transition = t
                }
            }
            ), [e]),
            n
        },
        useTransition: function() {
            var e = di(!1)
              , t = e[0];
            return vi(e = xi.bind(null, e[1])),
            [e, t]
        },
        useMutableSource: function(e, t, n) {
            var r = ai();
            return r.memoizedState = {
                refs: {
                    getSnapshot: t,
                    setSnapshot: null
                },
                source: e,
                subscribe: n
            },
            fi(r, e, t, n)
        },
        useOpaqueIdentifier: function() {
            if (Ua) {
                var e = !1
                  , t = function(e) {
                    return {
                        $$typeof: D,
                        toString: e,
                        valueOf: e
                    }
                }((function() {
                    throw e || (e = !0,
                    n("r:" + (Kr++).toString(36))),
                    Error(i(355))
                }
                ))
                  , n = di(t)[1];
                return 0 === (2 & Ga.mode) && (Ga.flags |= 516,
                yi(5, (function() {
                    n("r:" + (Kr++).toString(36))
                }
                ), void 0, null)),
                t
            }
            return di(t = "r:" + (Kr++).toString(36)),
            t
        },
        unstable_isNewReconciler: !1
    }
      , Ci = {
        readContext: oa,
        useCallback: Pi,
        useContext: oa,
        useEffect: wi,
        useImperativeHandle: Si,
        useLayoutEffect: Oi,
        useMemo: _i,
        useReducer: li,
        useRef: hi,
        useState: function() {
            return li(ui)
        },
        useDebugValue: Ei,
        useDeferredValue: function(e) {
            var t = li(ui)
              , n = t[0]
              , r = t[1];
            return wi((function() {
                var t = Xa.transition;
                Xa.transition = 1;
                try {
                    r(e)
                } finally {
                    Xa.transition = t
                }
            }
            ), [e]),
            n
        },
        useTransition: function() {
            var e = li(ui)[0];
            return [hi().current, e]
        },
        useMutableSource: pi,
        useOpaqueIdentifier: function() {
            return li(ui)[0]
        },
        unstable_isNewReconciler: !1
    }
      , Li = {
        readContext: oa,
        useCallback: Pi,
        useContext: oa,
        useEffect: wi,
        useImperativeHandle: Si,
        useLayoutEffect: Oi,
        useMemo: _i,
        useReducer: ci,
        useRef: hi,
        useState: function() {
            return ci(ui)
        },
        useDebugValue: Ei,
        useDeferredValue: function(e) {
            var t = ci(ui)
              , n = t[0]
              , r = t[1];
            return wi((function() {
                var t = Xa.transition;
                Xa.transition = 1;
                try {
                    r(e)
                } finally {
                    Xa.transition = t
                }
            }
            ), [e]),
            n
        },
        useTransition: function() {
            var e = ci(ui)[0];
            return [hi().current, e]
        },
        useMutableSource: pi,
        useOpaqueIdentifier: function() {
            return ci(ui)[0]
        },
        unstable_isNewReconciler: !1
    }
      , Ri = O.ReactCurrentOwner
      , Mi = !1;
    function Di(e, t, n, r) {
        t.child = null === e ? Pa(t, null, n, r) : Ea(t, e.child, n, r)
    }
    function Ni(e, t, n, r, o) {
        n = n.render;
        var a = t.ref;
        return ra(t, o),
        r = oi(e, t, n, r, a, o),
        null === e || Mi ? (t.flags |= 1,
        Di(e, t, r, o),
        t.child) : (t.updateQueue = e.updateQueue,
        t.flags &= -517,
        e.lanes &= ~o,
        nu(e, t, o))
    }
    function Vi(e, t, n, r, o, a) {
        if (null === e) {
            var i = n.type;
            return "function" !== typeof i || Bl(i) || void 0 !== i.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Wl(n.type, null, r, t, t.mode, a)).ref = t.ref,
            e.return = t,
            t.child = e) : (t.tag = 15,
            t.type = i,
            Ii(e, t, i, r, o, a))
        }
        return i = e.child,
        0 === (o & a) && (o = i.memoizedProps,
        (n = null !== (n = n.compare) ? n : cr)(o, r) && e.ref === t.ref) ? nu(e, t, a) : (t.flags |= 1,
        (e = Hl(i, r)).ref = t.ref,
        e.return = t,
        t.child = e)
    }
    function Ii(e, t, n, r, o, a) {
        if (null !== e && cr(e.memoizedProps, r) && e.ref === t.ref) {
            if (Mi = !1,
            0 === (a & o))
                return t.lanes = e.lanes,
                nu(e, t, a);
            0 !== (16384 & e.flags) && (Mi = !0)
        }
        return zi(e, t, n, r, a)
    }
    function Ui(e, t, n) {
        var r = t.pendingProps
          , o = r.children
          , a = null !== e ? e.memoizedState : null;
        if ("hidden" === r.mode || "unstable-defer-without-hiding" === r.mode)
            if (0 === (4 & t.mode))
                t.memoizedState = {
                    baseLanes: 0
                },
                bl(t, n);
            else {
                if (0 === (1073741824 & n))
                    return e = null !== a ? a.baseLanes | n : n,
                    t.lanes = t.childLanes = 1073741824,
                    t.memoizedState = {
                        baseLanes: e
                    },
                    bl(t, e),
                    null;
                t.memoizedState = {
                    baseLanes: 0
                },
                bl(t, null !== a ? a.baseLanes : n)
            }
        else
            null !== a ? (r = a.baseLanes | n,
            t.memoizedState = null) : r = n,
            bl(t, r);
        return Di(e, t, o, n),
        t.child
    }
    function Fi(e, t) {
        var n = t.ref;
        (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 128)
    }
    function zi(e, t, n, r, o) {
        var a = vo(n) ? po : so.current;
        return a = yo(t, a),
        ra(t, o),
        n = oi(e, t, n, r, a, o),
        null === e || Mi ? (t.flags |= 1,
        Di(e, t, n, o),
        t.child) : (t.updateQueue = e.updateQueue,
        t.flags &= -517,
        e.lanes &= ~o,
        nu(e, t, o))
    }
    function Bi(e, t, n, r, o) {
        if (vo(n)) {
            var a = !0;
            bo(t)
        } else
            a = !1;
        if (ra(t, o),
        null === t.stateNode)
            null !== e && (e.alternate = null,
            t.alternate = null,
            t.flags |= 2),
            ma(t, n, r),
            ba(t, n, r, o),
            r = !0;
        else if (null === e) {
            var i = t.stateNode
              , u = t.memoizedProps;
            i.props = u;
            var l = i.context
              , c = n.contextType;
            "object" === typeof c && null !== c ? c = oa(c) : c = yo(t, c = vo(n) ? po : so.current);
            var s = n.getDerivedStateFromProps
              , f = "function" === typeof s || "function" === typeof i.getSnapshotBeforeUpdate;
            f || "function" !== typeof i.UNSAFE_componentWillReceiveProps && "function" !== typeof i.componentWillReceiveProps || (u !== r || l !== c) && ga(t, i, r, c),
            aa = !1;
            var p = t.memoizedState;
            i.state = p,
            fa(t, r, i, o),
            l = t.memoizedState,
            u !== r || p !== l || fo.current || aa ? ("function" === typeof s && (ya(t, n, s, r),
            l = t.memoizedState),
            (u = aa || ha(t, n, u, r, p, l, c)) ? (f || "function" !== typeof i.UNSAFE_componentWillMount && "function" !== typeof i.componentWillMount || ("function" === typeof i.componentWillMount && i.componentWillMount(),
            "function" === typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()),
            "function" === typeof i.componentDidMount && (t.flags |= 4)) : ("function" === typeof i.componentDidMount && (t.flags |= 4),
            t.memoizedProps = r,
            t.memoizedState = l),
            i.props = r,
            i.state = l,
            i.context = c,
            r = u) : ("function" === typeof i.componentDidMount && (t.flags |= 4),
            r = !1)
        } else {
            i = t.stateNode,
            ua(e, t),
            u = t.memoizedProps,
            c = t.type === t.elementType ? u : Xo(t.type, u),
            i.props = c,
            f = t.pendingProps,
            p = i.context,
            "object" === typeof (l = n.contextType) && null !== l ? l = oa(l) : l = yo(t, l = vo(n) ? po : so.current);
            var d = n.getDerivedStateFromProps;
            (s = "function" === typeof d || "function" === typeof i.getSnapshotBeforeUpdate) || "function" !== typeof i.UNSAFE_componentWillReceiveProps && "function" !== typeof i.componentWillReceiveProps || (u !== f || p !== l) && ga(t, i, r, l),
            aa = !1,
            p = t.memoizedState,
            i.state = p,
            fa(t, r, i, o);
            var y = t.memoizedState;
            u !== f || p !== y || fo.current || aa ? ("function" === typeof d && (ya(t, n, d, r),
            y = t.memoizedState),
            (c = aa || ha(t, n, c, r, p, y, l)) ? (s || "function" !== typeof i.UNSAFE_componentWillUpdate && "function" !== typeof i.componentWillUpdate || ("function" === typeof i.componentWillUpdate && i.componentWillUpdate(r, y, l),
            "function" === typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(r, y, l)),
            "function" === typeof i.componentDidUpdate && (t.flags |= 4),
            "function" === typeof i.getSnapshotBeforeUpdate && (t.flags |= 256)) : ("function" !== typeof i.componentDidUpdate || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4),
            "function" !== typeof i.getSnapshotBeforeUpdate || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 256),
            t.memoizedProps = r,
            t.memoizedState = y),
            i.props = r,
            i.state = y,
            i.context = l,
            r = c) : ("function" !== typeof i.componentDidUpdate || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4),
            "function" !== typeof i.getSnapshotBeforeUpdate || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 256),
            r = !1)
        }
        return Hi(e, t, n, r, a, o)
    }
    function Hi(e, t, n, r, o, a) {
        Fi(e, t);
        var i = 0 !== (64 & t.flags);
        if (!r && !i)
            return o && wo(t, n, !1),
            nu(e, t, a);
        r = t.stateNode,
        Ri.current = t;
        var u = i && "function" !== typeof n.getDerivedStateFromError ? null : r.render();
        return t.flags |= 1,
        null !== e && i ? (t.child = Ea(t, e.child, null, a),
        t.child = Ea(t, null, u, a)) : Di(e, t, u, a),
        t.memoizedState = r.state,
        o && wo(t, n, !0),
        t.child
    }
    function Wi(e) {
        var t = e.stateNode;
        t.pendingContext ? mo(0, t.pendingContext, t.pendingContext !== t.context) : t.context && mo(0, t.context, !1),
        Ca(e, t.containerInfo)
    }
    var qi, $i, Ki, Yi = {
        dehydrated: null,
        retryLane: 0
    };
    function Xi(e, t, n) {
        var r, o = t.pendingProps, a = Da.current, i = !1;
        return (r = 0 !== (64 & t.flags)) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & a)),
        r ? (i = !0,
        t.flags &= -65) : null !== e && null === e.memoizedState || void 0 === o.fallback || !0 === o.unstable_avoidThisFallback || (a |= 1),
        lo(Da, 1 & a),
        null === e ? (void 0 !== o.fallback && Ba(t),
        e = o.children,
        a = o.fallback,
        i ? (e = Qi(t, e, a, n),
        t.child.memoizedState = {
            baseLanes: n
        },
        t.memoizedState = Yi,
        e) : "number" === typeof o.unstable_expectedLoadTime ? (e = Qi(t, e, a, n),
        t.child.memoizedState = {
            baseLanes: n
        },
        t.memoizedState = Yi,
        t.lanes = 33554432,
        e) : ((n = $l({
            mode: "visible",
            children: e
        }, t.mode, n, null)).return = t,
        t.child = n)) : (e.memoizedState,
        i ? (o = Zi(e, t, o.children, o.fallback, n),
        i = t.child,
        a = e.child.memoizedState,
        i.memoizedState = null === a ? {
            baseLanes: n
        } : {
            baseLanes: a.baseLanes | n
        },
        i.childLanes = e.childLanes & ~n,
        t.memoizedState = Yi,
        o) : (n = Gi(e, t, o.children, n),
        t.memoizedState = null,
        n))
    }
    function Qi(e, t, n, r) {
        var o = e.mode
          , a = e.child;
        return t = {
            mode: "hidden",
            children: t
        },
        0 === (2 & o) && null !== a ? (a.childLanes = 0,
        a.pendingProps = t) : a = $l(t, o, 0, null),
        n = ql(n, o, r, null),
        a.return = e,
        n.return = e,
        a.sibling = n,
        e.child = a,
        n
    }
    function Gi(e, t, n, r) {
        var o = e.child;
        return e = o.sibling,
        n = Hl(o, {
            mode: "visible",
            children: n
        }),
        0 === (2 & t.mode) && (n.lanes = r),
        n.return = t,
        n.sibling = null,
        null !== e && (e.nextEffect = null,
        e.flags = 8,
        t.firstEffect = t.lastEffect = e),
        t.child = n
    }
    function Zi(e, t, n, r, o) {
        var a = t.mode
          , i = e.child;
        e = i.sibling;
        var u = {
            mode: "hidden",
            children: n
        };
        return 0 === (2 & a) && t.child !== i ? ((n = t.child).childLanes = 0,
        n.pendingProps = u,
        null !== (i = n.lastEffect) ? (t.firstEffect = n.firstEffect,
        t.lastEffect = i,
        i.nextEffect = null) : t.firstEffect = t.lastEffect = null) : n = Hl(i, u),
        null !== e ? r = Hl(e, r) : (r = ql(r, a, o, null)).flags |= 2,
        r.return = t,
        n.return = t,
        n.sibling = r,
        t.child = n,
        r
    }
    function Ji(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        null !== n && (n.lanes |= t),
        na(e.return, t)
    }
    function eu(e, t, n, r, o, a) {
        var i = e.memoizedState;
        null === i ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: o,
            lastEffect: a
        } : (i.isBackwards = t,
        i.rendering = null,
        i.renderingStartTime = 0,
        i.last = r,
        i.tail = n,
        i.tailMode = o,
        i.lastEffect = a)
    }
    function tu(e, t, n) {
        var r = t.pendingProps
          , o = r.revealOrder
          , a = r.tail;
        if (Di(e, t, r.children, n),
        0 !== (2 & (r = Da.current)))
            r = 1 & r | 2,
            t.flags |= 64;
        else {
            if (null !== e && 0 !== (64 & e.flags))
                e: for (e = t.child; null !== e; ) {
                    if (13 === e.tag)
                        null !== e.memoizedState && Ji(e, n);
                    else if (19 === e.tag)
                        Ji(e, n);
                    else if (null !== e.child) {
                        e.child.return = e,
                        e = e.child;
                        continue
                    }
                    if (e === t)
                        break e;
                    for (; null === e.sibling; ) {
                        if (null === e.return || e.return === t)
                            break e;
                        e = e.return
                    }
                    e.sibling.return = e.return,
                    e = e.sibling
                }
            r &= 1
        }
        if (lo(Da, r),
        0 === (2 & t.mode))
            t.memoizedState = null;
        else
            switch (o) {
            case "forwards":
                for (n = t.child,
                o = null; null !== n; )
                    null !== (e = n.alternate) && null === Na(e) && (o = n),
                    n = n.sibling;
                null === (n = o) ? (o = t.child,
                t.child = null) : (o = n.sibling,
                n.sibling = null),
                eu(t, !1, o, n, a, t.lastEffect);
                break;
            case "backwards":
                for (n = null,
                o = t.child,
                t.child = null; null !== o; ) {
                    if (null !== (e = o.alternate) && null === Na(e)) {
                        t.child = o;
                        break
                    }
                    e = o.sibling,
                    o.sibling = n,
                    n = o,
                    o = e
                }
                eu(t, !0, n, null, a, t.lastEffect);
                break;
            case "together":
                eu(t, !1, null, null, void 0, t.lastEffect);
                break;
            default:
                t.memoizedState = null
            }
        return t.child
    }
    function nu(e, t, n) {
        if (null !== e && (t.dependencies = e.dependencies),
        Iu |= t.lanes,
        0 !== (n & t.childLanes)) {
            if (null !== e && t.child !== e.child)
                throw Error(i(153));
            if (null !== t.child) {
                for (n = Hl(e = t.child, e.pendingProps),
                t.child = n,
                n.return = t; null !== e.sibling; )
                    e = e.sibling,
                    (n = n.sibling = Hl(e, e.pendingProps)).return = t;
                n.sibling = null
            }
            return t.child
        }
        return null
    }
    function ru(e, t) {
        if (!Ua)
            switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                    null !== t.alternate && (n = t),
                    t = t.sibling;
                null === n ? e.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                    null !== n.alternate && (r = n),
                    n = n.sibling;
                null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
            }
    }
    function ou(e, t, n) {
        var r = t.pendingProps;
        switch (t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return null;
        case 1:
            return vo(t.type) && ho(),
            null;
        case 3:
            return La(),
            uo(fo),
            uo(so),
            Ka(),
            (r = t.stateNode).pendingContext && (r.context = r.pendingContext,
            r.pendingContext = null),
            null !== e && null !== e.child || (Wa(t) ? t.flags |= 4 : r.hydrate || (t.flags |= 256)),
            null;
        case 5:
            Ma(t);
            var a = Aa(Ta.current);
            if (n = t.type,
            null !== e && null != t.stateNode)
                $i(e, t, n, r),
                e.ref !== t.ref && (t.flags |= 128);
            else {
                if (!r) {
                    if (null === t.stateNode)
                        throw Error(i(166));
                    return null
                }
                if (e = Aa(xa.current),
                Wa(t)) {
                    r = t.stateNode,
                    n = t.type;
                    var u = t.memoizedProps;
                    switch (r[Xr] = t,
                    r[Qr] = u,
                    n) {
                    case "dialog":
                        xr("cancel", r),
                        xr("close", r);
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        xr("load", r);
                        break;
                    case "video":
                    case "audio":
                        for (e = 0; e < Sr.length; e++)
                            xr(Sr[e], r);
                        break;
                    case "source":
                        xr("error", r);
                        break;
                    case "img":
                    case "image":
                    case "link":
                        xr("error", r),
                        xr("load", r);
                        break;
                    case "details":
                        xr("toggle", r);
                        break;
                    case "input":
                        ee(r, u),
                        xr("invalid", r);
                        break;
                    case "select":
                        r._wrapperState = {
                            wasMultiple: !!u.multiple
                        },
                        xr("invalid", r);
                        break;
                    case "textarea":
                        le(r, u),
                        xr("invalid", r)
                    }
                    for (var c in Ee(n, u),
                    e = null,
                    u)
                        u.hasOwnProperty(c) && (a = u[c],
                        "children" === c ? "string" === typeof a ? r.textContent !== a && (e = ["children", a]) : "number" === typeof a && r.textContent !== "" + a && (e = ["children", "" + a]) : l.hasOwnProperty(c) && null != a && "onScroll" === c && xr("scroll", r));
                    switch (n) {
                    case "input":
                        Q(r),
                        re(r, u, !0);
                        break;
                    case "textarea":
                        Q(r),
                        se(r);
                        break;
                    case "select":
                    case "option":
                        break;
                    default:
                        "function" === typeof u.onClick && (r.onclick = Vr)
                    }
                    r = e,
                    t.updateQueue = r,
                    null !== r && (t.flags |= 4)
                } else {
                    switch (c = 9 === a.nodeType ? a : a.ownerDocument,
                    e === fe && (e = de(n)),
                    e === fe ? "script" === n ? ((e = c.createElement("div")).innerHTML = "<script><\/script>",
                    e = e.removeChild(e.firstChild)) : "string" === typeof r.is ? e = c.createElement(n, {
                        is: r.is
                    }) : (e = c.createElement(n),
                    "select" === n && (c = e,
                    r.multiple ? c.multiple = !0 : r.size && (c.size = r.size))) : e = c.createElementNS(e, n),
                    e[Xr] = t,
                    e[Qr] = r,
                    qi(e, t),
                    t.stateNode = e,
                    c = Pe(n, r),
                    n) {
                    case "dialog":
                        xr("cancel", e),
                        xr("close", e),
                        a = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        xr("load", e),
                        a = r;
                        break;
                    case "video":
                    case "audio":
                        for (a = 0; a < Sr.length; a++)
                            xr(Sr[a], e);
                        a = r;
                        break;
                    case "source":
                        xr("error", e),
                        a = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        xr("error", e),
                        xr("load", e),
                        a = r;
                        break;
                    case "details":
                        xr("toggle", e),
                        a = r;
                        break;
                    case "input":
                        ee(e, r),
                        a = J(e, r),
                        xr("invalid", e);
                        break;
                    case "option":
                        a = ae(e, r);
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        a = o({}, r, {
                            value: void 0
                        }),
                        xr("invalid", e);
                        break;
                    case "textarea":
                        le(e, r),
                        a = ue(e, r),
                        xr("invalid", e);
                        break;
                    default:
                        a = r
                    }
                    Ee(n, a);
                    var s = a;
                    for (u in s)
                        if (s.hasOwnProperty(u)) {
                            var f = s[u];
                            "style" === u ? ke(e, f) : "dangerouslySetInnerHTML" === u ? null != (f = f ? f.__html : void 0) && me(e, f) : "children" === u ? "string" === typeof f ? ("textarea" !== n || "" !== f) && ge(e, f) : "number" === typeof f && ge(e, "" + f) : "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && "autoFocus" !== u && (l.hasOwnProperty(u) ? null != f && "onScroll" === u && xr("scroll", e) : null != f && w(e, u, f, c))
                        }
                    switch (n) {
                    case "input":
                        Q(e),
                        re(e, r, !1);
                        break;
                    case "textarea":
                        Q(e),
                        se(e);
                        break;
                    case "option":
                        null != r.value && e.setAttribute("value", "" + Y(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        null != (u = r.value) ? ie(e, !!r.multiple, u, !1) : null != r.defaultValue && ie(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        "function" === typeof a.onClick && (e.onclick = Vr)
                    }
                    Fr(n, r) && (t.flags |= 4)
                }
                null !== t.ref && (t.flags |= 128)
            }
            return null;
        case 6:
            if (e && null != t.stateNode)
                Ki(0, t, e.memoizedProps, r);
            else {
                if ("string" !== typeof r && null === t.stateNode)
                    throw Error(i(166));
                n = Aa(Ta.current),
                Aa(xa.current),
                Wa(t) ? (r = t.stateNode,
                n = t.memoizedProps,
                r[Xr] = t,
                r.nodeValue !== n && (t.flags |= 4)) : ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[Xr] = t,
                t.stateNode = r)
            }
            return null;
        case 13:
            return uo(Da),
            r = t.memoizedState,
            0 !== (64 & t.flags) ? (t.lanes = n,
            t) : (r = null !== r,
            n = !1,
            null === e ? void 0 !== t.memoizedProps.fallback && Wa(t) : n = null !== e.memoizedState,
            r && !n && 0 !== (2 & t.mode) && (null === e && !0 !== t.memoizedProps.unstable_avoidThisFallback || 0 !== (1 & Da.current) ? 0 === Du && (Du = 3) : (0 !== Du && 3 !== Du || (Du = 4),
            null === Au || 0 === (134217727 & Iu) && 0 === (134217727 & Uu) || vl(Au, Lu))),
            (r || n) && (t.flags |= 4),
            null);
        case 4:
            return La(),
            null === e && Tr(t.stateNode.containerInfo),
            null;
        case 10:
            return ta(t),
            null;
        case 17:
            return vo(t.type) && ho(),
            null;
        case 19:
            if (uo(Da),
            null === (r = t.memoizedState))
                return null;
            if (u = 0 !== (64 & t.flags),
            null === (c = r.rendering))
                if (u)
                    ru(r, !1);
                else {
                    if (0 !== Du || null !== e && 0 !== (64 & e.flags))
                        for (e = t.child; null !== e; ) {
                            if (null !== (c = Na(e))) {
                                for (t.flags |= 64,
                                ru(r, !1),
                                null !== (u = c.updateQueue) && (t.updateQueue = u,
                                t.flags |= 4),
                                null === r.lastEffect && (t.firstEffect = null),
                                t.lastEffect = r.lastEffect,
                                r = n,
                                n = t.child; null !== n; )
                                    e = r,
                                    (u = n).flags &= 2,
                                    u.nextEffect = null,
                                    u.firstEffect = null,
                                    u.lastEffect = null,
                                    null === (c = u.alternate) ? (u.childLanes = 0,
                                    u.lanes = e,
                                    u.child = null,
                                    u.memoizedProps = null,
                                    u.memoizedState = null,
                                    u.updateQueue = null,
                                    u.dependencies = null,
                                    u.stateNode = null) : (u.childLanes = c.childLanes,
                                    u.lanes = c.lanes,
                                    u.child = c.child,
                                    u.memoizedProps = c.memoizedProps,
                                    u.memoizedState = c.memoizedState,
                                    u.updateQueue = c.updateQueue,
                                    u.type = c.type,
                                    e = c.dependencies,
                                    u.dependencies = null === e ? null : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext
                                    }),
                                    n = n.sibling;
                                return lo(Da, 1 & Da.current | 2),
                                t.child
                            }
                            e = e.sibling
                        }
                    null !== r.tail && zo() > Hu && (t.flags |= 64,
                    u = !0,
                    ru(r, !1),
                    t.lanes = 33554432)
                }
            else {
                if (!u)
                    if (null !== (e = Na(c))) {
                        if (t.flags |= 64,
                        u = !0,
                        null !== (n = e.updateQueue) && (t.updateQueue = n,
                        t.flags |= 4),
                        ru(r, !0),
                        null === r.tail && "hidden" === r.tailMode && !c.alternate && !Ua)
                            return null !== (t = t.lastEffect = r.lastEffect) && (t.nextEffect = null),
                            null
                    } else
                        2 * zo() - r.renderingStartTime > Hu && 1073741824 !== n && (t.flags |= 64,
                        u = !0,
                        ru(r, !1),
                        t.lanes = 33554432);
                r.isBackwards ? (c.sibling = t.child,
                t.child = c) : (null !== (n = r.last) ? n.sibling = c : t.child = c,
                r.last = c)
            }
            return null !== r.tail ? (n = r.tail,
            r.rendering = n,
            r.tail = n.sibling,
            r.lastEffect = t.lastEffect,
            r.renderingStartTime = zo(),
            n.sibling = null,
            t = Da.current,
            lo(Da, u ? 1 & t | 2 : 1 & t),
            n) : null;
        case 23:
        case 24:
            return wl(),
            null !== e && null !== e.memoizedState !== (null !== t.memoizedState) && "unstable-defer-without-hiding" !== r.mode && (t.flags |= 4),
            null
        }
        throw Error(i(156, t.tag))
    }
    function au(e) {
        switch (e.tag) {
        case 1:
            vo(e.type) && ho();
            var t = e.flags;
            return 4096 & t ? (e.flags = -4097 & t | 64,
            e) : null;
        case 3:
            if (La(),
            uo(fo),
            uo(so),
            Ka(),
            0 !== (64 & (t = e.flags)))
                throw Error(i(285));
            return e.flags = -4097 & t | 64,
            e;
        case 5:
            return Ma(e),
            null;
        case 13:
            return uo(Da),
            4096 & (t = e.flags) ? (e.flags = -4097 & t | 64,
            e) : null;
        case 19:
            return uo(Da),
            null;
        case 4:
            return La(),
            null;
        case 10:
            return ta(e),
            null;
        case 23:
        case 24:
            return wl(),
            null;
        default:
            return null
        }
    }
    function iu(e, t) {
        try {
            var n = ""
              , r = t;
            do {
                n += $(r),
                r = r.return
            } while (r);
            var o = n
        } catch (a) {
            o = "\nError generating stack: " + a.message + "\n" + a.stack
        }
        return {
            value: e,
            source: t,
            stack: o
        }
    }
    function uu(e, t) {
        try {
            console.error(t.value)
        } catch (n) {
            setTimeout((function() {
                throw n
            }
            ))
        }
    }
    qi = function(e, t) {
        for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag)
                e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
                n.child.return = n,
                n = n.child;
                continue
            }
            if (n === t)
                break;
            for (; null === n.sibling; ) {
                if (null === n.return || n.return === t)
                    return;
                n = n.return
            }
            n.sibling.return = n.return,
            n = n.sibling
        }
    }
    ,
    $i = function(e, t, n, r) {
        var a = e.memoizedProps;
        if (a !== r) {
            e = t.stateNode,
            Aa(xa.current);
            var i, u = null;
            switch (n) {
            case "input":
                a = J(e, a),
                r = J(e, r),
                u = [];
                break;
            case "option":
                a = ae(e, a),
                r = ae(e, r),
                u = [];
                break;
            case "select":
                a = o({}, a, {
                    value: void 0
                }),
                r = o({}, r, {
                    value: void 0
                }),
                u = [];
                break;
            case "textarea":
                a = ue(e, a),
                r = ue(e, r),
                u = [];
                break;
            default:
                "function" !== typeof a.onClick && "function" === typeof r.onClick && (e.onclick = Vr)
            }
            for (f in Ee(n, r),
            n = null,
            a)
                if (!r.hasOwnProperty(f) && a.hasOwnProperty(f) && null != a[f])
                    if ("style" === f) {
                        var c = a[f];
                        for (i in c)
                            c.hasOwnProperty(i) && (n || (n = {}),
                            n[i] = "")
                    } else
                        "dangerouslySetInnerHTML" !== f && "children" !== f && "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (l.hasOwnProperty(f) ? u || (u = []) : (u = u || []).push(f, null));
            for (f in r) {
                var s = r[f];
                if (c = null != a ? a[f] : void 0,
                r.hasOwnProperty(f) && s !== c && (null != s || null != c))
                    if ("style" === f)
                        if (c) {
                            for (i in c)
                                !c.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}),
                                n[i] = "");
                            for (i in s)
                                s.hasOwnProperty(i) && c[i] !== s[i] && (n || (n = {}),
                                n[i] = s[i])
                        } else
                            n || (u || (u = []),
                            u.push(f, n)),
                            n = s;
                    else
                        "dangerouslySetInnerHTML" === f ? (s = s ? s.__html : void 0,
                        c = c ? c.__html : void 0,
                        null != s && c !== s && (u = u || []).push(f, s)) : "children" === f ? "string" !== typeof s && "number" !== typeof s || (u = u || []).push(f, "" + s) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && (l.hasOwnProperty(f) ? (null != s && "onScroll" === f && xr("scroll", e),
                        u || c === s || (u = [])) : "object" === typeof s && null !== s && s.$$typeof === D ? s.toString() : (u = u || []).push(f, s))
            }
            n && (u = u || []).push("style", n);
            var f = u;
            (t.updateQueue = f) && (t.flags |= 4)
        }
    }
    ,
    Ki = function(e, t, n, r) {
        n !== r && (t.flags |= 4)
    }
    ;
    var lu = "function" === typeof WeakMap ? WeakMap : Map;
    function cu(e, t, n) {
        (n = la(-1, n)).tag = 3,
        n.payload = {
            element: null
        };
        var r = t.value;
        return n.callback = function() {
            Ku || (Ku = !0,
            Yu = r),
            uu(0, t)
        }
        ,
        n
    }
    function su(e, t, n) {
        (n = la(-1, n)).tag = 3;
        var r = e.type.getDerivedStateFromError;
        if ("function" === typeof r) {
            var o = t.value;
            n.payload = function() {
                return uu(0, t),
                r(o)
            }
        }
        var a = e.stateNode;
        return null !== a && "function" === typeof a.componentDidCatch && (n.callback = function() {
            "function" !== typeof r && (null === Xu ? Xu = new Set([this]) : Xu.add(this),
            uu(0, t));
            var e = t.stack;
            this.componentDidCatch(t.value, {
                componentStack: null !== e ? e : ""
            })
        }
        ),
        n
    }
    var fu = "function" === typeof WeakSet ? WeakSet : Set;
    function pu(e) {
        var t = e.ref;
        if (null !== t)
            if ("function" === typeof t)
                try {
                    t(null)
                } catch (n) {
                    Vl(e, n)
                }
            else
                t.current = null
    }
    function du(e, t) {
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
        case 22:
            return;
        case 1:
            if (256 & t.flags && null !== e) {
                var n = e.memoizedProps
                  , r = e.memoizedState;
                t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? n : Xo(t.type, n), r),
                e.__reactInternalSnapshotBeforeUpdate = t
            }
            return;
        case 3:
            return void (256 & t.flags && Wr(t.stateNode.containerInfo));
        case 5:
        case 6:
        case 4:
        case 17:
            return
        }
        throw Error(i(163))
    }
    function yu(e, t, n) {
        switch (n.tag) {
        case 0:
        case 11:
        case 15:
        case 22:
            if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
                e = t = t.next;
                do {
                    if (3 === (3 & e.tag)) {
                        var r = e.create;
                        e.destroy = r()
                    }
                    e = e.next
                } while (e !== t)
            }
            if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
                e = t = t.next;
                do {
                    var o = e;
                    r = o.next,
                    0 !== (4 & (o = o.tag)) && 0 !== (1 & o) && (Ml(n, e),
                    Rl(n, e)),
                    e = r
                } while (e !== t)
            }
            return;
        case 1:
            return e = n.stateNode,
            4 & n.flags && (null === t ? e.componentDidMount() : (r = n.elementType === n.type ? t.memoizedProps : Xo(n.type, t.memoizedProps),
            e.componentDidUpdate(r, t.memoizedState, e.__reactInternalSnapshotBeforeUpdate))),
            void (null !== (t = n.updateQueue) && pa(n, t, e));
        case 3:
            if (null !== (t = n.updateQueue)) {
                if (e = null,
                null !== n.child)
                    switch (n.child.tag) {
                    case 5:
                        e = n.child.stateNode;
                        break;
                    case 1:
                        e = n.child.stateNode
                    }
                pa(n, t, e)
            }
            return;
        case 5:
            return e = n.stateNode,
            void (null === t && 4 & n.flags && Fr(n.type, n.memoizedProps) && e.focus());
        case 6:
        case 4:
        case 12:
            return;
        case 13:
            return void (null === n.memoizedState && (n = n.alternate,
            null !== n && (n = n.memoizedState,
            null !== n && (n = n.dehydrated,
            null !== n && kt(n)))));
        case 19:
        case 17:
        case 20:
        case 21:
        case 23:
        case 24:
            return
        }
        throw Error(i(163))
    }
    function vu(e, t) {
        for (var n = e; ; ) {
            if (5 === n.tag) {
                var r = n.stateNode;
                if (t)
                    "function" === typeof (r = r.style).setProperty ? r.setProperty("display", "none", "important") : r.display = "none";
                else {
                    r = n.stateNode;
                    var o = n.memoizedProps.style;
                    o = void 0 !== o && null !== o && o.hasOwnProperty("display") ? o.display : null,
                    r.style.display = Oe("display", o)
                }
            } else if (6 === n.tag)
                n.stateNode.nodeValue = t ? "" : n.memoizedProps;
            else if ((23 !== n.tag && 24 !== n.tag || null === n.memoizedState || n === e) && null !== n.child) {
                n.child.return = n,
                n = n.child;
                continue
            }
            if (n === e)
                break;
            for (; null === n.sibling; ) {
                if (null === n.return || n.return === e)
                    return;
                n = n.return
            }
            n.sibling.return = n.return,
            n = n.sibling
        }
    }
    function hu(e, t) {
        if (ko && "function" === typeof ko.onCommitFiberUnmount)
            try {
                ko.onCommitFiberUnmount(Oo, t)
            } catch (a) {}
        switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
            if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                var n = e = e.next;
                do {
                    var r = n
                      , o = r.destroy;
                    if (r = r.tag,
                    void 0 !== o)
                        if (0 !== (4 & r))
                            Ml(t, n);
                        else {
                            r = t;
                            try {
                                o()
                            } catch (a) {
                                Vl(r, a)
                            }
                        }
                    n = n.next
                } while (n !== e)
            }
            break;
        case 1:
            if (pu(t),
            "function" === typeof (e = t.stateNode).componentWillUnmount)
                try {
                    e.props = t.memoizedProps,
                    e.state = t.memoizedState,
                    e.componentWillUnmount()
                } catch (a) {
                    Vl(t, a)
                }
            break;
        case 5:
            pu(t);
            break;
        case 4:
            ku(e, t)
        }
    }
    function mu(e) {
        e.alternate = null,
        e.child = null,
        e.dependencies = null,
        e.firstEffect = null,
        e.lastEffect = null,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.pendingProps = null,
        e.return = null,
        e.updateQueue = null
    }
    function gu(e) {
        return 5 === e.tag || 3 === e.tag || 4 === e.tag
    }
    function bu(e) {
        e: {
            for (var t = e.return; null !== t; ) {
                if (gu(t))
                    break e;
                t = t.return
            }
            throw Error(i(160))
        }
        var n = t;
        switch (t = n.stateNode,
        n.tag) {
        case 5:
            var r = !1;
            break;
        case 3:
        case 4:
            t = t.containerInfo,
            r = !0;
            break;
        default:
            throw Error(i(161))
        }
        16 & n.flags && (ge(t, ""),
        n.flags &= -17);
        e: t: for (n = e; ; ) {
            for (; null === n.sibling; ) {
                if (null === n.return || gu(n.return)) {
                    n = null;
                    break e
                }
                n = n.return
            }
            for (n.sibling.return = n.return,
            n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag; ) {
                if (2 & n.flags)
                    continue t;
                if (null === n.child || 4 === n.tag)
                    continue t;
                n.child.return = n,
                n = n.child
            }
            if (!(2 & n.flags)) {
                n = n.stateNode;
                break e
            }
        }
        r ? wu(e, n, t) : Ou(e, n, t)
    }
    function wu(e, t, n) {
        var r = e.tag
          , o = 5 === r || 6 === r;
        if (o)
            e = o ? e.stateNode : e.stateNode.instance,
            t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e),
            null !== (n = n._reactRootContainer) && void 0 !== n || null !== t.onclick || (t.onclick = Vr));
        else if (4 !== r && null !== (e = e.child))
            for (wu(e, t, n),
            e = e.sibling; null !== e; )
                wu(e, t, n),
                e = e.sibling
    }
    function Ou(e, t, n) {
        var r = e.tag
          , o = 5 === r || 6 === r;
        if (o)
            e = o ? e.stateNode : e.stateNode.instance,
            t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (4 !== r && null !== (e = e.child))
            for (Ou(e, t, n),
            e = e.sibling; null !== e; )
                Ou(e, t, n),
                e = e.sibling
    }
    function ku(e, t) {
        for (var n, r, o = t, a = !1; ; ) {
            if (!a) {
                a = o.return;
                e: for (; ; ) {
                    if (null === a)
                        throw Error(i(160));
                    switch (n = a.stateNode,
                    a.tag) {
                    case 5:
                        r = !1;
                        break e;
                    case 3:
                    case 4:
                        n = n.containerInfo,
                        r = !0;
                        break e
                    }
                    a = a.return
                }
                a = !0
            }
            if (5 === o.tag || 6 === o.tag) {
                e: for (var u = e, l = o, c = l; ; )
                    if (hu(u, c),
                    null !== c.child && 4 !== c.tag)
                        c.child.return = c,
                        c = c.child;
                    else {
                        if (c === l)
                            break e;
                        for (; null === c.sibling; ) {
                            if (null === c.return || c.return === l)
                                break e;
                            c = c.return
                        }
                        c.sibling.return = c.return,
                        c = c.sibling
                    }
                r ? (u = n,
                l = o.stateNode,
                8 === u.nodeType ? u.parentNode.removeChild(l) : u.removeChild(l)) : n.removeChild(o.stateNode)
            } else if (4 === o.tag) {
                if (null !== o.child) {
                    n = o.stateNode.containerInfo,
                    r = !0,
                    o.child.return = o,
                    o = o.child;
                    continue
                }
            } else if (hu(e, o),
            null !== o.child) {
                o.child.return = o,
                o = o.child;
                continue
            }
            if (o === t)
                break;
            for (; null === o.sibling; ) {
                if (null === o.return || o.return === t)
                    return;
                4 === (o = o.return).tag && (a = !1)
            }
            o.sibling.return = o.return,
            o = o.sibling
        }
    }
    function Su(e, t) {
        switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
            var n = t.updateQueue;
            if (null !== (n = null !== n ? n.lastEffect : null)) {
                var r = n = n.next;
                do {
                    3 === (3 & r.tag) && (e = r.destroy,
                    r.destroy = void 0,
                    void 0 !== e && e()),
                    r = r.next
                } while (r !== n)
            }
            return;
        case 1:
            return;
        case 5:
            if (null != (n = t.stateNode)) {
                r = t.memoizedProps;
                var o = null !== e ? e.memoizedProps : r;
                e = t.type;
                var a = t.updateQueue;
                if (t.updateQueue = null,
                null !== a) {
                    for (n[Qr] = r,
                    "input" === e && "radio" === r.type && null != r.name && te(n, r),
                    Pe(e, o),
                    t = Pe(e, r),
                    o = 0; o < a.length; o += 2) {
                        var u = a[o]
                          , l = a[o + 1];
                        "style" === u ? ke(n, l) : "dangerouslySetInnerHTML" === u ? me(n, l) : "children" === u ? ge(n, l) : w(n, u, l, t)
                    }
                    switch (e) {
                    case "input":
                        ne(n, r);
                        break;
                    case "textarea":
                        ce(n, r);
                        break;
                    case "select":
                        e = n._wrapperState.wasMultiple,
                        n._wrapperState.wasMultiple = !!r.multiple,
                        null != (a = r.value) ? ie(n, !!r.multiple, a, !1) : e !== !!r.multiple && (null != r.defaultValue ? ie(n, !!r.multiple, r.defaultValue, !0) : ie(n, !!r.multiple, r.multiple ? [] : "", !1))
                    }
                }
            }
            return;
        case 6:
            if (null === t.stateNode)
                throw Error(i(162));
            return void (t.stateNode.nodeValue = t.memoizedProps);
        case 3:
            return void ((n = t.stateNode).hydrate && (n.hydrate = !1,
            kt(n.containerInfo)));
        case 12:
            return;
        case 13:
            return null !== t.memoizedState && (Bu = zo(),
            vu(t.child, !0)),
            void Eu(t);
        case 19:
            return void Eu(t);
        case 17:
            return;
        case 23:
        case 24:
            return void vu(t, null !== t.memoizedState)
        }
        throw Error(i(163))
    }
    function Eu(e) {
        var t = e.updateQueue;
        if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new fu),
            t.forEach((function(t) {
                var r = Ul.bind(null, e, t);
                n.has(t) || (n.add(t),
                t.then(r, r))
            }
            ))
        }
    }
    function Pu(e, t) {
        return null !== e && (null === (e = e.memoizedState) || null !== e.dehydrated) && (null !== (t = t.memoizedState) && null === t.dehydrated)
    }
    var _u = Math.ceil
      , xu = O.ReactCurrentDispatcher
      , ju = O.ReactCurrentOwner
      , Tu = 0
      , Au = null
      , Cu = null
      , Lu = 0
      , Ru = 0
      , Mu = io(0)
      , Du = 0
      , Nu = null
      , Vu = 0
      , Iu = 0
      , Uu = 0
      , Fu = 0
      , zu = null
      , Bu = 0
      , Hu = 1 / 0;
    function Wu() {
        Hu = zo() + 500
    }
    var qu, $u = null, Ku = !1, Yu = null, Xu = null, Qu = !1, Gu = null, Zu = 90, Ju = [], el = [], tl = null, nl = 0, rl = null, ol = -1, al = 0, il = 0, ul = null, ll = !1;
    function cl() {
        return 0 !== (48 & Tu) ? zo() : -1 !== ol ? ol : ol = zo()
    }
    function sl(e) {
        if (0 === (2 & (e = e.mode)))
            return 1;
        if (0 === (4 & e))
            return 99 === Bo() ? 1 : 2;
        if (0 === al && (al = Vu),
        0 !== Yo.transition) {
            0 !== il && (il = null !== zu ? zu.pendingLanes : 0),
            e = al;
            var t = 4186112 & ~il;
            return 0 === (t &= -t) && (0 === (t = (e = 4186112 & ~e) & -e) && (t = 8192)),
            t
        }
        return e = Bo(),
        0 !== (4 & Tu) && 98 === e ? e = Ft(12, al) : e = Ft(e = function(e) {
            switch (e) {
            case 99:
                return 15;
            case 98:
                return 10;
            case 97:
            case 96:
                return 8;
            case 95:
                return 2;
            default:
                return 0
            }
        }(e), al),
        e
    }
    function fl(e, t, n) {
        if (50 < nl)
            throw nl = 0,
            rl = null,
            Error(i(185));
        if (null === (e = pl(e, t)))
            return null;
        Ht(e, t, n),
        e === Au && (Uu |= t,
        4 === Du && vl(e, Lu));
        var r = Bo();
        1 === t ? 0 !== (8 & Tu) && 0 === (48 & Tu) ? hl(e) : (dl(e, n),
        0 === Tu && (Wu(),
        $o())) : (0 === (4 & Tu) || 98 !== r && 99 !== r || (null === tl ? tl = new Set([e]) : tl.add(e)),
        dl(e, n)),
        zu = e
    }
    function pl(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for (null !== n && (n.lanes |= t),
        n = e,
        e = e.return; null !== e; )
            e.childLanes |= t,
            null !== (n = e.alternate) && (n.childLanes |= t),
            n = e,
            e = e.return;
        return 3 === n.tag ? n.stateNode : null
    }
    function dl(e, t) {
        for (var n = e.callbackNode, r = e.suspendedLanes, o = e.pingedLanes, a = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
            var l = 31 - Wt(u)
              , c = 1 << l
              , s = a[l];
            if (-1 === s) {
                if (0 === (c & r) || 0 !== (c & o)) {
                    s = t,
                    Vt(c);
                    var f = Nt;
                    a[l] = 10 <= f ? s + 250 : 6 <= f ? s + 5e3 : -1
                }
            } else
                s <= t && (e.expiredLanes |= c);
            u &= ~c
        }
        if (r = It(e, e === Au ? Lu : 0),
        t = Nt,
        0 === r)
            null !== n && (n !== Do && Po(n),
            e.callbackNode = null,
            e.callbackPriority = 0);
        else {
            if (null !== n) {
                if (e.callbackPriority === t)
                    return;
                n !== Do && Po(n)
            }
            15 === t ? (n = hl.bind(null, e),
            null === Vo ? (Vo = [n],
            Io = Eo(Ao, Ko)) : Vo.push(n),
            n = Do) : 14 === t ? n = qo(99, hl.bind(null, e)) : n = qo(n = function(e) {
                switch (e) {
                case 15:
                case 14:
                    return 99;
                case 13:
                case 12:
                case 11:
                case 10:
                    return 98;
                case 9:
                case 8:
                case 7:
                case 6:
                case 4:
                case 5:
                    return 97;
                case 3:
                case 2:
                case 1:
                    return 95;
                case 0:
                    return 90;
                default:
                    throw Error(i(358, e))
                }
            }(t), yl.bind(null, e)),
            e.callbackPriority = t,
            e.callbackNode = n
        }
    }
    function yl(e) {
        if (ol = -1,
        il = al = 0,
        0 !== (48 & Tu))
            throw Error(i(327));
        var t = e.callbackNode;
        if (Ll() && e.callbackNode !== t)
            return null;
        var n = It(e, e === Au ? Lu : 0);
        if (0 === n)
            return null;
        var r = n
          , o = Tu;
        Tu |= 16;
        var a = Sl();
        for (Au === e && Lu === r || (Wu(),
        Ol(e, r)); ; )
            try {
                _l();
                break
            } catch (l) {
                kl(e, l)
            }
        if (ea(),
        xu.current = a,
        Tu = o,
        null !== Cu ? r = 0 : (Au = null,
        Lu = 0,
        r = Du),
        0 !== (Vu & Uu))
            Ol(e, 0);
        else if (0 !== r) {
            if (2 === r && (Tu |= 64,
            e.hydrate && (e.hydrate = !1,
            Wr(e.containerInfo)),
            0 !== (n = Ut(e)) && (r = El(e, n))),
            1 === r)
                throw t = Nu,
                Ol(e, 0),
                vl(e, n),
                dl(e, zo()),
                t;
            switch (e.finishedWork = e.current.alternate,
            e.finishedLanes = n,
            r) {
            case 0:
            case 1:
                throw Error(i(345));
            case 2:
                Tl(e);
                break;
            case 3:
                if (vl(e, n),
                (62914560 & n) === n && 10 < (r = Bu + 500 - zo())) {
                    if (0 !== It(e, 0))
                        break;
                    if (((o = e.suspendedLanes) & n) !== n) {
                        cl(),
                        e.pingedLanes |= e.suspendedLanes & o;
                        break
                    }
                    e.timeoutHandle = Br(Tl.bind(null, e), r);
                    break
                }
                Tl(e);
                break;
            case 4:
                if (vl(e, n),
                (4186112 & n) === n)
                    break;
                for (r = e.eventTimes,
                o = -1; 0 < n; ) {
                    var u = 31 - Wt(n);
                    a = 1 << u,
                    (u = r[u]) > o && (o = u),
                    n &= ~a
                }
                if (n = o,
                10 < (n = (120 > (n = zo() - n) ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * _u(n / 1960)) - n)) {
                    e.timeoutHandle = Br(Tl.bind(null, e), n);
                    break
                }
                Tl(e);
                break;
            case 5:
                Tl(e);
                break;
            default:
                throw Error(i(329))
            }
        }
        return dl(e, zo()),
        e.callbackNode === t ? yl.bind(null, e) : null
    }
    function vl(e, t) {
        for (t &= ~Fu,
        t &= ~Uu,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes; 0 < t; ) {
            var n = 31 - Wt(t)
              , r = 1 << n;
            e[n] = -1,
            t &= ~r
        }
    }
    function hl(e) {
        if (0 !== (48 & Tu))
            throw Error(i(327));
        if (Ll(),
        e === Au && 0 !== (e.expiredLanes & Lu)) {
            var t = Lu
              , n = El(e, t);
            0 !== (Vu & Uu) && (n = El(e, t = It(e, t)))
        } else
            n = El(e, t = It(e, 0));
        if (0 !== e.tag && 2 === n && (Tu |= 64,
        e.hydrate && (e.hydrate = !1,
        Wr(e.containerInfo)),
        0 !== (t = Ut(e)) && (n = El(e, t))),
        1 === n)
            throw n = Nu,
            Ol(e, 0),
            vl(e, t),
            dl(e, zo()),
            n;
        return e.finishedWork = e.current.alternate,
        e.finishedLanes = t,
        Tl(e),
        dl(e, zo()),
        null
    }
    function ml(e, t) {
        var n = Tu;
        Tu |= 1;
        try {
            return e(t)
        } finally {
            0 === (Tu = n) && (Wu(),
            $o())
        }
    }
    function gl(e, t) {
        var n = Tu;
        Tu &= -2,
        Tu |= 8;
        try {
            return e(t)
        } finally {
            0 === (Tu = n) && (Wu(),
            $o())
        }
    }
    function bl(e, t) {
        lo(Mu, Ru),
        Ru |= t,
        Vu |= t
    }
    function wl() {
        Ru = Mu.current,
        uo(Mu)
    }
    function Ol(e, t) {
        e.finishedWork = null,
        e.finishedLanes = 0;
        var n = e.timeoutHandle;
        if (-1 !== n && (e.timeoutHandle = -1,
        Hr(n)),
        null !== Cu)
            for (n = Cu.return; null !== n; ) {
                var r = n;
                switch (r.tag) {
                case 1:
                    null !== (r = r.type.childContextTypes) && void 0 !== r && ho();
                    break;
                case 3:
                    La(),
                    uo(fo),
                    uo(so),
                    Ka();
                    break;
                case 5:
                    Ma(r);
                    break;
                case 4:
                    La();
                    break;
                case 13:
                case 19:
                    uo(Da);
                    break;
                case 10:
                    ta(r);
                    break;
                case 23:
                case 24:
                    wl()
                }
                n = n.return
            }
        Au = e,
        Cu = Hl(e.current, null),
        Lu = Ru = Vu = t,
        Du = 0,
        Nu = null,
        Fu = Uu = Iu = 0
    }
    function kl(e, t) {
        for (; ; ) {
            var n = Cu;
            try {
                if (ea(),
                Ya.current = Ti,
                ei) {
                    for (var r = Ga.memoizedState; null !== r; ) {
                        var o = r.queue;
                        null !== o && (o.pending = null),
                        r = r.next
                    }
                    ei = !1
                }
                if (Qa = 0,
                Ja = Za = Ga = null,
                ti = !1,
                ju.current = null,
                null === n || null === n.return) {
                    Du = 1,
                    Nu = t,
                    Cu = null;
                    break
                }
                e: {
                    var a = e
                      , i = n.return
                      , u = n
                      , l = t;
                    if (t = Lu,
                    u.flags |= 2048,
                    u.firstEffect = u.lastEffect = null,
                    null !== l && "object" === typeof l && "function" === typeof l.then) {
                        var c = l;
                        if (0 === (2 & u.mode)) {
                            var s = u.alternate;
                            s ? (u.updateQueue = s.updateQueue,
                            u.memoizedState = s.memoizedState,
                            u.lanes = s.lanes) : (u.updateQueue = null,
                            u.memoizedState = null)
                        }
                        var f = 0 !== (1 & Da.current)
                          , p = i;
                        do {
                            var d;
                            if (d = 13 === p.tag) {
                                var y = p.memoizedState;
                                if (null !== y)
                                    d = null !== y.dehydrated;
                                else {
                                    var v = p.memoizedProps;
                                    d = void 0 !== v.fallback && (!0 !== v.unstable_avoidThisFallback || !f)
                                }
                            }
                            if (d) {
                                var h = p.updateQueue;
                                if (null === h) {
                                    var m = new Set;
                                    m.add(c),
                                    p.updateQueue = m
                                } else
                                    h.add(c);
                                if (0 === (2 & p.mode)) {
                                    if (p.flags |= 64,
                                    u.flags |= 16384,
                                    u.flags &= -2981,
                                    1 === u.tag)
                                        if (null === u.alternate)
                                            u.tag = 17;
                                        else {
                                            var g = la(-1, 1);
                                            g.tag = 2,
                                            ca(u, g)
                                        }
                                    u.lanes |= 1;
                                    break e
                                }
                                l = void 0,
                                u = t;
                                var b = a.pingCache;
                                if (null === b ? (b = a.pingCache = new lu,
                                l = new Set,
                                b.set(c, l)) : void 0 === (l = b.get(c)) && (l = new Set,
                                b.set(c, l)),
                                !l.has(u)) {
                                    l.add(u);
                                    var w = Il.bind(null, a, c, u);
                                    c.then(w, w)
                                }
                                p.flags |= 4096,
                                p.lanes = t;
                                break e
                            }
                            p = p.return
                        } while (null !== p);
                        l = Error((K(u.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")
                    }
                    5 !== Du && (Du = 2),
                    l = iu(l, u),
                    p = i;
                    do {
                        switch (p.tag) {
                        case 3:
                            a = l,
                            p.flags |= 4096,
                            t &= -t,
                            p.lanes |= t,
                            sa(p, cu(0, a, t));
                            break e;
                        case 1:
                            a = l;
                            var O = p.type
                              , k = p.stateNode;
                            if (0 === (64 & p.flags) && ("function" === typeof O.getDerivedStateFromError || null !== k && "function" === typeof k.componentDidCatch && (null === Xu || !Xu.has(k)))) {
                                p.flags |= 4096,
                                t &= -t,
                                p.lanes |= t,
                                sa(p, su(p, a, t));
                                break e
                            }
                        }
                        p = p.return
                    } while (null !== p)
                }
                jl(n)
            } catch (S) {
                t = S,
                Cu === n && null !== n && (Cu = n = n.return);
                continue
            }
            break
        }
    }
    function Sl() {
        var e = xu.current;
        return xu.current = Ti,
        null === e ? Ti : e
    }
    function El(e, t) {
        var n = Tu;
        Tu |= 16;
        var r = Sl();
        for (Au === e && Lu === t || Ol(e, t); ; )
            try {
                Pl();
                break
            } catch (o) {
                kl(e, o)
            }
        if (ea(),
        Tu = n,
        xu.current = r,
        null !== Cu)
            throw Error(i(261));
        return Au = null,
        Lu = 0,
        Du
    }
    function Pl() {
        for (; null !== Cu; )
            xl(Cu)
    }
    function _l() {
        for (; null !== Cu && !_o(); )
            xl(Cu)
    }
    function xl(e) {
        var t = qu(e.alternate, e, Ru);
        e.memoizedProps = e.pendingProps,
        null === t ? jl(e) : Cu = t,
        ju.current = null
    }
    function jl(e) {
        var t = e;
        do {
            var n = t.alternate;
            if (e = t.return,
            0 === (2048 & t.flags)) {
                if (null !== (n = ou(n, t, Ru)))
                    return void (Cu = n);
                if (24 !== (n = t).tag && 23 !== n.tag || null === n.memoizedState || 0 !== (1073741824 & Ru) || 0 === (4 & n.mode)) {
                    for (var r = 0, o = n.child; null !== o; )
                        r |= o.lanes | o.childLanes,
                        o = o.sibling;
                    n.childLanes = r
                }
                null !== e && 0 === (2048 & e.flags) && (null === e.firstEffect && (e.firstEffect = t.firstEffect),
                null !== t.lastEffect && (null !== e.lastEffect && (e.lastEffect.nextEffect = t.firstEffect),
                e.lastEffect = t.lastEffect),
                1 < t.flags && (null !== e.lastEffect ? e.lastEffect.nextEffect = t : e.firstEffect = t,
                e.lastEffect = t))
            } else {
                if (null !== (n = au(t)))
                    return n.flags &= 2047,
                    void (Cu = n);
                null !== e && (e.firstEffect = e.lastEffect = null,
                e.flags |= 2048)
            }
            if (null !== (t = t.sibling))
                return void (Cu = t);
            Cu = t = e
        } while (null !== t);
        0 === Du && (Du = 5)
    }
    function Tl(e) {
        var t = Bo();
        return Wo(99, Al.bind(null, e, t)),
        null
    }
    function Al(e, t) {
        do {
            Ll()
        } while (null !== Gu);
        if (0 !== (48 & Tu))
            throw Error(i(327));
        var n = e.finishedWork;
        if (null === n)
            return null;
        if (e.finishedWork = null,
        e.finishedLanes = 0,
        n === e.current)
            throw Error(i(177));
        e.callbackNode = null;
        var r = n.lanes | n.childLanes
          , o = r
          , a = e.pendingLanes & ~o;
        e.pendingLanes = o,
        e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.expiredLanes &= o,
        e.mutableReadLanes &= o,
        e.entangledLanes &= o,
        o = e.entanglements;
        for (var u = e.eventTimes, l = e.expirationTimes; 0 < a; ) {
            var c = 31 - Wt(a)
              , s = 1 << c;
            o[c] = 0,
            u[c] = -1,
            l[c] = -1,
            a &= ~s
        }
        if (null !== tl && 0 === (24 & r) && tl.has(e) && tl.delete(e),
        e === Au && (Cu = Au = null,
        Lu = 0),
        1 < n.flags ? null !== n.lastEffect ? (n.lastEffect.nextEffect = n,
        r = n.firstEffect) : r = n : r = n.firstEffect,
        null !== r) {
            if (o = Tu,
            Tu |= 32,
            ju.current = null,
            Ir = Xt,
            yr(u = dr())) {
                if ("selectionStart"in u)
                    l = {
                        start: u.selectionStart,
                        end: u.selectionEnd
                    };
                else
                    e: if (l = (l = u.ownerDocument) && l.defaultView || window,
                    (s = l.getSelection && l.getSelection()) && 0 !== s.rangeCount) {
                        l = s.anchorNode,
                        a = s.anchorOffset,
                        c = s.focusNode,
                        s = s.focusOffset;
                        try {
                            l.nodeType,
                            c.nodeType
                        } catch (_) {
                            l = null;
                            break e
                        }
                        var f = 0
                          , p = -1
                          , d = -1
                          , y = 0
                          , v = 0
                          , h = u
                          , m = null;
                        t: for (; ; ) {
                            for (var g; h !== l || 0 !== a && 3 !== h.nodeType || (p = f + a),
                            h !== c || 0 !== s && 3 !== h.nodeType || (d = f + s),
                            3 === h.nodeType && (f += h.nodeValue.length),
                            null !== (g = h.firstChild); )
                                m = h,
                                h = g;
                            for (; ; ) {
                                if (h === u)
                                    break t;
                                if (m === l && ++y === a && (p = f),
                                m === c && ++v === s && (d = f),
                                null !== (g = h.nextSibling))
                                    break;
                                m = (h = m).parentNode
                            }
                            h = g
                        }
                        l = -1 === p || -1 === d ? null : {
                            start: p,
                            end: d
                        }
                    } else
                        l = null;
                l = l || {
                    start: 0,
                    end: 0
                }
            } else
                l = null;
            Ur = {
                focusedElem: u,
                selectionRange: l
            },
            Xt = !1,
            ul = null,
            ll = !1,
            $u = r;
            do {
                try {
                    Cl()
                } catch (_) {
                    if (null === $u)
                        throw Error(i(330));
                    Vl($u, _),
                    $u = $u.nextEffect
                }
            } while (null !== $u);
            ul = null,
            $u = r;
            do {
                try {
                    for (u = e; null !== $u; ) {
                        var b = $u.flags;
                        if (16 & b && ge($u.stateNode, ""),
                        128 & b) {
                            var w = $u.alternate;
                            if (null !== w) {
                                var O = w.ref;
                                null !== O && ("function" === typeof O ? O(null) : O.current = null)
                            }
                        }
                        switch (1038 & b) {
                        case 2:
                            bu($u),
                            $u.flags &= -3;
                            break;
                        case 6:
                            bu($u),
                            $u.flags &= -3,
                            Su($u.alternate, $u);
                            break;
                        case 1024:
                            $u.flags &= -1025;
                            break;
                        case 1028:
                            $u.flags &= -1025,
                            Su($u.alternate, $u);
                            break;
                        case 4:
                            Su($u.alternate, $u);
                            break;
                        case 8:
                            ku(u, l = $u);
                            var k = l.alternate;
                            mu(l),
                            null !== k && mu(k)
                        }
                        $u = $u.nextEffect
                    }
                } catch (_) {
                    if (null === $u)
                        throw Error(i(330));
                    Vl($u, _),
                    $u = $u.nextEffect
                }
            } while (null !== $u);
            if (O = Ur,
            w = dr(),
            b = O.focusedElem,
            u = O.selectionRange,
            w !== b && b && b.ownerDocument && pr(b.ownerDocument.documentElement, b)) {
                null !== u && yr(b) && (w = u.start,
                void 0 === (O = u.end) && (O = w),
                "selectionStart"in b ? (b.selectionStart = w,
                b.selectionEnd = Math.min(O, b.value.length)) : (O = (w = b.ownerDocument || document) && w.defaultView || window).getSelection && (O = O.getSelection(),
                l = b.textContent.length,
                k = Math.min(u.start, l),
                u = void 0 === u.end ? k : Math.min(u.end, l),
                !O.extend && k > u && (l = u,
                u = k,
                k = l),
                l = fr(b, k),
                a = fr(b, u),
                l && a && (1 !== O.rangeCount || O.anchorNode !== l.node || O.anchorOffset !== l.offset || O.focusNode !== a.node || O.focusOffset !== a.offset) && ((w = w.createRange()).setStart(l.node, l.offset),
                O.removeAllRanges(),
                k > u ? (O.addRange(w),
                O.extend(a.node, a.offset)) : (w.setEnd(a.node, a.offset),
                O.addRange(w))))),
                w = [];
                for (O = b; O = O.parentNode; )
                    1 === O.nodeType && w.push({
                        element: O,
                        left: O.scrollLeft,
                        top: O.scrollTop
                    });
                for ("function" === typeof b.focus && b.focus(),
                b = 0; b < w.length; b++)
                    (O = w[b]).element.scrollLeft = O.left,
                    O.element.scrollTop = O.top
            }
            Xt = !!Ir,
            Ur = Ir = null,
            e.current = n,
            $u = r;
            do {
                try {
                    for (b = e; null !== $u; ) {
                        var S = $u.flags;
                        if (36 & S && yu(b, $u.alternate, $u),
                        128 & S) {
                            w = void 0;
                            var E = $u.ref;
                            if (null !== E) {
                                var P = $u.stateNode;
                                switch ($u.tag) {
                                case 5:
                                    w = P;
                                    break;
                                default:
                                    w = P
                                }
                                "function" === typeof E ? E(w) : E.current = w
                            }
                        }
                        $u = $u.nextEffect
                    }
                } catch (_) {
                    if (null === $u)
                        throw Error(i(330));
                    Vl($u, _),
                    $u = $u.nextEffect
                }
            } while (null !== $u);
            $u = null,
            No(),
            Tu = o
        } else
            e.current = n;
        if (Qu)
            Qu = !1,
            Gu = e,
            Zu = t;
        else
            for ($u = r; null !== $u; )
                t = $u.nextEffect,
                $u.nextEffect = null,
                8 & $u.flags && ((S = $u).sibling = null,
                S.stateNode = null),
                $u = t;
        if (0 === (r = e.pendingLanes) && (Xu = null),
        1 === r ? e === rl ? nl++ : (nl = 0,
        rl = e) : nl = 0,
        n = n.stateNode,
        ko && "function" === typeof ko.onCommitFiberRoot)
            try {
                ko.onCommitFiberRoot(Oo, n, void 0, 64 === (64 & n.current.flags))
            } catch (_) {}
        if (dl(e, zo()),
        Ku)
            throw Ku = !1,
            e = Yu,
            Yu = null,
            e;
        return 0 !== (8 & Tu) || $o(),
        null
    }
    function Cl() {
        for (; null !== $u; ) {
            var e = $u.alternate;
            ll || null === ul || (0 !== (8 & $u.flags) ? et($u, ul) && (ll = !0) : 13 === $u.tag && Pu(e, $u) && et($u, ul) && (ll = !0));
            var t = $u.flags;
            0 !== (256 & t) && du(e, $u),
            0 === (512 & t) || Qu || (Qu = !0,
            qo(97, (function() {
                return Ll(),
                null
            }
            ))),
            $u = $u.nextEffect
        }
    }
    function Ll() {
        if (90 !== Zu) {
            var e = 97 < Zu ? 97 : Zu;
            return Zu = 90,
            Wo(e, Dl)
        }
        return !1
    }
    function Rl(e, t) {
        Ju.push(t, e),
        Qu || (Qu = !0,
        qo(97, (function() {
            return Ll(),
            null
        }
        )))
    }
    function Ml(e, t) {
        el.push(t, e),
        Qu || (Qu = !0,
        qo(97, (function() {
            return Ll(),
            null
        }
        )))
    }
    function Dl() {
        if (null === Gu)
            return !1;
        var e = Gu;
        if (Gu = null,
        0 !== (48 & Tu))
            throw Error(i(331));
        var t = Tu;
        Tu |= 32;
        var n = el;
        el = [];
        for (var r = 0; r < n.length; r += 2) {
            var o = n[r]
              , a = n[r + 1]
              , u = o.destroy;
            if (o.destroy = void 0,
            "function" === typeof u)
                try {
                    u()
                } catch (c) {
                    if (null === a)
                        throw Error(i(330));
                    Vl(a, c)
                }
        }
        for (n = Ju,
        Ju = [],
        r = 0; r < n.length; r += 2) {
            o = n[r],
            a = n[r + 1];
            try {
                var l = o.create;
                o.destroy = l()
            } catch (c) {
                if (null === a)
                    throw Error(i(330));
                Vl(a, c)
            }
        }
        for (l = e.current.firstEffect; null !== l; )
            e = l.nextEffect,
            l.nextEffect = null,
            8 & l.flags && (l.sibling = null,
            l.stateNode = null),
            l = e;
        return Tu = t,
        $o(),
        !0
    }
    function Nl(e, t, n) {
        ca(e, t = cu(0, t = iu(n, t), 1)),
        t = cl(),
        null !== (e = pl(e, 1)) && (Ht(e, 1, t),
        dl(e, t))
    }
    function Vl(e, t) {
        if (3 === e.tag)
            Nl(e, e, t);
        else
            for (var n = e.return; null !== n; ) {
                if (3 === n.tag) {
                    Nl(n, e, t);
                    break
                }
                if (1 === n.tag) {
                    var r = n.stateNode;
                    if ("function" === typeof n.type.getDerivedStateFromError || "function" === typeof r.componentDidCatch && (null === Xu || !Xu.has(r))) {
                        var o = su(n, e = iu(t, e), 1);
                        if (ca(n, o),
                        o = cl(),
                        null !== (n = pl(n, 1)))
                            Ht(n, 1, o),
                            dl(n, o);
                        else if ("function" === typeof r.componentDidCatch && (null === Xu || !Xu.has(r)))
                            try {
                                r.componentDidCatch(t, e)
                            } catch (a) {}
                        break
                    }
                }
                n = n.return
            }
    }
    function Il(e, t, n) {
        var r = e.pingCache;
        null !== r && r.delete(t),
        t = cl(),
        e.pingedLanes |= e.suspendedLanes & n,
        Au === e && (Lu & n) === n && (4 === Du || 3 === Du && (62914560 & Lu) === Lu && 500 > zo() - Bu ? Ol(e, 0) : Fu |= n),
        dl(e, t)
    }
    function Ul(e, t) {
        var n = e.stateNode;
        null !== n && n.delete(t),
        0 === (t = 0) && (0 === (2 & (t = e.mode)) ? t = 1 : 0 === (4 & t) ? t = 99 === Bo() ? 1 : 2 : (0 === al && (al = Vu),
        0 === (t = zt(62914560 & ~al)) && (t = 4194304))),
        n = cl(),
        null !== (e = pl(e, t)) && (Ht(e, t, n),
        dl(e, n))
    }
    function Fl(e, t, n, r) {
        this.tag = e,
        this.key = n,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = r,
        this.flags = 0,
        this.lastEffect = this.firstEffect = this.nextEffect = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function zl(e, t, n, r) {
        return new Fl(e,t,n,r)
    }
    function Bl(e) {
        return !(!(e = e.prototype) || !e.isReactComponent)
    }
    function Hl(e, t) {
        var n = e.alternate;
        return null === n ? ((n = zl(e.tag, t, e.key, e.mode)).elementType = e.elementType,
        n.type = e.type,
        n.stateNode = e.stateNode,
        n.alternate = e,
        e.alternate = n) : (n.pendingProps = t,
        n.type = e.type,
        n.flags = 0,
        n.nextEffect = null,
        n.firstEffect = null,
        n.lastEffect = null),
        n.childLanes = e.childLanes,
        n.lanes = e.lanes,
        n.child = e.child,
        n.memoizedProps = e.memoizedProps,
        n.memoizedState = e.memoizedState,
        n.updateQueue = e.updateQueue,
        t = e.dependencies,
        n.dependencies = null === t ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        },
        n.sibling = e.sibling,
        n.index = e.index,
        n.ref = e.ref,
        n
    }
    function Wl(e, t, n, r, o, a) {
        var u = 2;
        if (r = e,
        "function" === typeof e)
            Bl(e) && (u = 1);
        else if ("string" === typeof e)
            u = 5;
        else
            e: switch (e) {
            case E:
                return ql(n.children, o, a, t);
            case N:
                u = 8,
                o |= 16;
                break;
            case P:
                u = 8,
                o |= 1;
                break;
            case _:
                return (e = zl(12, n, t, 8 | o)).elementType = _,
                e.type = _,
                e.lanes = a,
                e;
            case A:
                return (e = zl(13, n, t, o)).type = A,
                e.elementType = A,
                e.lanes = a,
                e;
            case C:
                return (e = zl(19, n, t, o)).elementType = C,
                e.lanes = a,
                e;
            case V:
                return $l(n, o, a, t);
            case I:
                return (e = zl(24, n, t, o)).elementType = I,
                e.lanes = a,
                e;
            default:
                if ("object" === typeof e && null !== e)
                    switch (e.$$typeof) {
                    case x:
                        u = 10;
                        break e;
                    case j:
                        u = 9;
                        break e;
                    case T:
                        u = 11;
                        break e;
                    case L:
                        u = 14;
                        break e;
                    case R:
                        u = 16,
                        r = null;
                        break e;
                    case M:
                        u = 22;
                        break e
                    }
                throw Error(i(130, null == e ? e : typeof e, ""))
            }
        return (t = zl(u, n, t, o)).elementType = e,
        t.type = r,
        t.lanes = a,
        t
    }
    function ql(e, t, n, r) {
        return (e = zl(7, e, r, t)).lanes = n,
        e
    }
    function $l(e, t, n, r) {
        return (e = zl(23, e, r, t)).elementType = V,
        e.lanes = n,
        e
    }
    function Kl(e, t, n) {
        return (e = zl(6, e, null, t)).lanes = n,
        e
    }
    function Yl(e, t, n) {
        return (t = zl(4, null !== e.children ? e.children : [], e.key, t)).lanes = n,
        t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        },
        t
    }
    function Xl(e, t, n) {
        this.tag = t,
        this.containerInfo = e,
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.pendingContext = this.context = null,
        this.hydrate = n,
        this.callbackNode = null,
        this.callbackPriority = 0,
        this.eventTimes = Bt(0),
        this.expirationTimes = Bt(-1),
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = Bt(0),
        this.mutableSourceEagerHydrationData = null
    }
    function Ql(e, t, n) {
        var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return {
            $$typeof: S,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n
        }
    }
    function Gl(e, t, n, r) {
        var o = t.current
          , a = cl()
          , u = sl(o);
        e: if (n) {
            t: {
                if (Qe(n = n._reactInternals) !== n || 1 !== n.tag)
                    throw Error(i(170));
                var l = n;
                do {
                    switch (l.tag) {
                    case 3:
                        l = l.stateNode.context;
                        break t;
                    case 1:
                        if (vo(l.type)) {
                            l = l.stateNode.__reactInternalMemoizedMergedChildContext;
                            break t
                        }
                    }
                    l = l.return
                } while (null !== l);
                throw Error(i(171))
            }
            if (1 === n.tag) {
                var c = n.type;
                if (vo(c)) {
                    n = go(n, c, l);
                    break e
                }
            }
            n = l
        } else
            n = co;
        return null === t.context ? t.context = n : t.pendingContext = n,
        (t = la(a, u)).payload = {
            element: e
        },
        null !== (r = void 0 === r ? null : r) && (t.callback = r),
        ca(o, t),
        fl(o, u, a),
        u
    }
    function Zl(e) {
        if (!(e = e.current).child)
            return null;
        switch (e.child.tag) {
        case 5:
        default:
            return e.child.stateNode
        }
    }
    function Jl(e, t) {
        if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t
        }
    }
    function ec(e, t) {
        Jl(e, t),
        (e = e.alternate) && Jl(e, t)
    }
    function tc(e, t, n) {
        var r = null != n && null != n.hydrationOptions && n.hydrationOptions.mutableSources || null;
        if (n = new Xl(e,t,null != n && !0 === n.hydrate),
        t = zl(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0),
        n.current = t,
        t.stateNode = n,
        ia(t),
        e[Gr] = n.current,
        Tr(8 === e.nodeType ? e.parentNode : e),
        r)
            for (e = 0; e < r.length; e++) {
                var o = (t = r[e])._getVersion;
                o = o(t._source),
                null == n.mutableSourceEagerHydrationData ? n.mutableSourceEagerHydrationData = [t, o] : n.mutableSourceEagerHydrationData.push(t, o)
            }
        this._internalRoot = n
    }
    function nc(e) {
        return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
    }
    function rc(e, t, n, r, o) {
        var a = n._reactRootContainer;
        if (a) {
            var i = a._internalRoot;
            if ("function" === typeof o) {
                var u = o;
                o = function() {
                    var e = Zl(i);
                    u.call(e)
                }
            }
            Gl(t, i, e, o)
        } else {
            if (a = n._reactRootContainer = function(e, t) {
                if (t || (t = !(!(t = e ? 9 === e.nodeType ? e.documentElement : e.firstChild : null) || 1 !== t.nodeType || !t.hasAttribute("data-reactroot"))),
                !t)
                    for (var n; n = e.lastChild; )
                        e.removeChild(n);
                return new tc(e,0,t ? {
                    hydrate: !0
                } : void 0)
            }(n, r),
            i = a._internalRoot,
            "function" === typeof o) {
                var l = o;
                o = function() {
                    var e = Zl(i);
                    l.call(e)
                }
            }
            gl((function() {
                Gl(t, i, e, o)
            }
            ))
        }
        return Zl(i)
    }
    function oc(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!nc(t))
            throw Error(i(200));
        return Ql(e, t, null, n)
    }
    qu = function(e, t, n) {
        var r = t.lanes;
        if (null !== e)
            if (e.memoizedProps !== t.pendingProps || fo.current)
                Mi = !0;
            else {
                if (0 === (n & r)) {
                    switch (Mi = !1,
                    t.tag) {
                    case 3:
                        Wi(t),
                        qa();
                        break;
                    case 5:
                        Ra(t);
                        break;
                    case 1:
                        vo(t.type) && bo(t);
                        break;
                    case 4:
                        Ca(t, t.stateNode.containerInfo);
                        break;
                    case 10:
                        r = t.memoizedProps.value;
                        var o = t.type._context;
                        lo(Qo, o._currentValue),
                        o._currentValue = r;
                        break;
                    case 13:
                        if (null !== t.memoizedState)
                            return 0 !== (n & t.child.childLanes) ? Xi(e, t, n) : (lo(Da, 1 & Da.current),
                            null !== (t = nu(e, t, n)) ? t.sibling : null);
                        lo(Da, 1 & Da.current);
                        break;
                    case 19:
                        if (r = 0 !== (n & t.childLanes),
                        0 !== (64 & e.flags)) {
                            if (r)
                                return tu(e, t, n);
                            t.flags |= 64
                        }
                        if (null !== (o = t.memoizedState) && (o.rendering = null,
                        o.tail = null,
                        o.lastEffect = null),
                        lo(Da, Da.current),
                        r)
                            break;
                        return null;
                    case 23:
                    case 24:
                        return t.lanes = 0,
                        Ui(e, t, n)
                    }
                    return nu(e, t, n)
                }
                Mi = 0 !== (16384 & e.flags)
            }
        else
            Mi = !1;
        switch (t.lanes = 0,
        t.tag) {
        case 2:
            if (r = t.type,
            null !== e && (e.alternate = null,
            t.alternate = null,
            t.flags |= 2),
            e = t.pendingProps,
            o = yo(t, so.current),
            ra(t, n),
            o = oi(null, t, r, e, o, n),
            t.flags |= 1,
            "object" === typeof o && null !== o && "function" === typeof o.render && void 0 === o.$$typeof) {
                if (t.tag = 1,
                t.memoizedState = null,
                t.updateQueue = null,
                vo(r)) {
                    var a = !0;
                    bo(t)
                } else
                    a = !1;
                t.memoizedState = null !== o.state && void 0 !== o.state ? o.state : null,
                ia(t);
                var u = r.getDerivedStateFromProps;
                "function" === typeof u && ya(t, r, u, e),
                o.updater = va,
                t.stateNode = o,
                o._reactInternals = t,
                ba(t, r, e, n),
                t = Hi(null, t, r, !0, a, n)
            } else
                t.tag = 0,
                Di(null, t, o, n),
                t = t.child;
            return t;
        case 16:
            o = t.elementType;
            e: {
                switch (null !== e && (e.alternate = null,
                t.alternate = null,
                t.flags |= 2),
                e = t.pendingProps,
                o = (a = o._init)(o._payload),
                t.type = o,
                a = t.tag = function(e) {
                    if ("function" === typeof e)
                        return Bl(e) ? 1 : 0;
                    if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === T)
                            return 11;
                        if (e === L)
                            return 14
                    }
                    return 2
                }(o),
                e = Xo(o, e),
                a) {
                case 0:
                    t = zi(null, t, o, e, n);
                    break e;
                case 1:
                    t = Bi(null, t, o, e, n);
                    break e;
                case 11:
                    t = Ni(null, t, o, e, n);
                    break e;
                case 14:
                    t = Vi(null, t, o, Xo(o.type, e), r, n);
                    break e
                }
                throw Error(i(306, o, ""))
            }
            return t;
        case 0:
            return r = t.type,
            o = t.pendingProps,
            zi(e, t, r, o = t.elementType === r ? o : Xo(r, o), n);
        case 1:
            return r = t.type,
            o = t.pendingProps,
            Bi(e, t, r, o = t.elementType === r ? o : Xo(r, o), n);
        case 3:
            if (Wi(t),
            r = t.updateQueue,
            null === e || null === r)
                throw Error(i(282));
            if (r = t.pendingProps,
            o = null !== (o = t.memoizedState) ? o.element : null,
            ua(e, t),
            fa(t, r, null, n),
            (r = t.memoizedState.element) === o)
                qa(),
                t = nu(e, t, n);
            else {
                if ((a = (o = t.stateNode).hydrate) && (Ia = qr(t.stateNode.containerInfo.firstChild),
                Va = t,
                a = Ua = !0),
                a) {
                    if (null != (e = o.mutableSourceEagerHydrationData))
                        for (o = 0; o < e.length; o += 2)
                            (a = e[o])._workInProgressVersionPrimary = e[o + 1],
                            $a.push(a);
                    for (n = Pa(t, null, r, n),
                    t.child = n; n; )
                        n.flags = -3 & n.flags | 1024,
                        n = n.sibling
                } else
                    Di(e, t, r, n),
                    qa();
                t = t.child
            }
            return t;
        case 5:
            return Ra(t),
            null === e && Ba(t),
            r = t.type,
            o = t.pendingProps,
            a = null !== e ? e.memoizedProps : null,
            u = o.children,
            zr(r, o) ? u = null : null !== a && zr(r, a) && (t.flags |= 16),
            Fi(e, t),
            Di(e, t, u, n),
            t.child;
        case 6:
            return null === e && Ba(t),
            null;
        case 13:
            return Xi(e, t, n);
        case 4:
            return Ca(t, t.stateNode.containerInfo),
            r = t.pendingProps,
            null === e ? t.child = Ea(t, null, r, n) : Di(e, t, r, n),
            t.child;
        case 11:
            return r = t.type,
            o = t.pendingProps,
            Ni(e, t, r, o = t.elementType === r ? o : Xo(r, o), n);
        case 7:
            return Di(e, t, t.pendingProps, n),
            t.child;
        case 8:
        case 12:
            return Di(e, t, t.pendingProps.children, n),
            t.child;
        case 10:
            e: {
                r = t.type._context,
                o = t.pendingProps,
                u = t.memoizedProps,
                a = o.value;
                var l = t.type._context;
                if (lo(Qo, l._currentValue),
                l._currentValue = a,
                null !== u)
                    if (l = u.value,
                    0 === (a = ur(l, a) ? 0 : 0 | ("function" === typeof r._calculateChangedBits ? r._calculateChangedBits(l, a) : 1073741823))) {
                        if (u.children === o.children && !fo.current) {
                            t = nu(e, t, n);
                            break e
                        }
                    } else
                        for (null !== (l = t.child) && (l.return = t); null !== l; ) {
                            var c = l.dependencies;
                            if (null !== c) {
                                u = l.child;
                                for (var s = c.firstContext; null !== s; ) {
                                    if (s.context === r && 0 !== (s.observedBits & a)) {
                                        1 === l.tag && ((s = la(-1, n & -n)).tag = 2,
                                        ca(l, s)),
                                        l.lanes |= n,
                                        null !== (s = l.alternate) && (s.lanes |= n),
                                        na(l.return, n),
                                        c.lanes |= n;
                                        break
                                    }
                                    s = s.next
                                }
                            } else
                                u = 10 === l.tag && l.type === t.type ? null : l.child;
                            if (null !== u)
                                u.return = l;
                            else
                                for (u = l; null !== u; ) {
                                    if (u === t) {
                                        u = null;
                                        break
                                    }
                                    if (null !== (l = u.sibling)) {
                                        l.return = u.return,
                                        u = l;
                                        break
                                    }
                                    u = u.return
                                }
                            l = u
                        }
                Di(e, t, o.children, n),
                t = t.child
            }
            return t;
        case 9:
            return o = t.type,
            r = (a = t.pendingProps).children,
            ra(t, n),
            r = r(o = oa(o, a.unstable_observedBits)),
            t.flags |= 1,
            Di(e, t, r, n),
            t.child;
        case 14:
            return a = Xo(o = t.type, t.pendingProps),
            Vi(e, t, o, a = Xo(o.type, a), r, n);
        case 15:
            return Ii(e, t, t.type, t.pendingProps, r, n);
        case 17:
            return r = t.type,
            o = t.pendingProps,
            o = t.elementType === r ? o : Xo(r, o),
            null !== e && (e.alternate = null,
            t.alternate = null,
            t.flags |= 2),
            t.tag = 1,
            vo(r) ? (e = !0,
            bo(t)) : e = !1,
            ra(t, n),
            ma(t, r, o),
            ba(t, r, o, n),
            Hi(null, t, r, !0, e, n);
        case 19:
            return tu(e, t, n);
        case 23:
        case 24:
            return Ui(e, t, n)
        }
        throw Error(i(156, t.tag))
    }
    ,
    tc.prototype.render = function(e) {
        Gl(e, this._internalRoot, null, null)
    }
    ,
    tc.prototype.unmount = function() {
        var e = this._internalRoot
          , t = e.containerInfo;
        Gl(null, e, null, (function() {
            t[Gr] = null
        }
        ))
    }
    ,
    tt = function(e) {
        13 === e.tag && (fl(e, 4, cl()),
        ec(e, 4))
    }
    ,
    nt = function(e) {
        13 === e.tag && (fl(e, 67108864, cl()),
        ec(e, 67108864))
    }
    ,
    rt = function(e) {
        if (13 === e.tag) {
            var t = cl()
              , n = sl(e);
            fl(e, n, t),
            ec(e, n)
        }
    }
    ,
    ot = function(e, t) {
        return t()
    }
    ,
    xe = function(e, t, n) {
        switch (t) {
        case "input":
            if (ne(e, n),
            t = n.name,
            "radio" === n.type && null != t) {
                for (n = e; n.parentNode; )
                    n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var o = no(r);
                        if (!o)
                            throw Error(i(90));
                        G(r),
                        ne(r, o)
                    }
                }
            }
            break;
        case "textarea":
            ce(e, n);
            break;
        case "select":
            null != (t = n.value) && ie(e, !!n.multiple, t, !1)
        }
    }
    ,
    Re = ml,
    Me = function(e, t, n, r, o) {
        var a = Tu;
        Tu |= 4;
        try {
            return Wo(98, e.bind(null, t, n, r, o))
        } finally {
            0 === (Tu = a) && (Wu(),
            $o())
        }
    }
    ,
    De = function() {
        0 === (49 & Tu) && (function() {
            if (null !== tl) {
                var e = tl;
                tl = null,
                e.forEach((function(e) {
                    e.expiredLanes |= 24 & e.pendingLanes,
                    dl(e, zo())
                }
                ))
            }
            $o()
        }(),
        Ll())
    }
    ,
    Ne = function(e, t) {
        var n = Tu;
        Tu |= 2;
        try {
            return e(t)
        } finally {
            0 === (Tu = n) && (Wu(),
            $o())
        }
    }
    ;
    var ac = {
        Events: [eo, to, no, Ce, Le, Ll, {
            current: !1
        }]
    }
      , ic = {
        findFiberByHostInstance: Jr,
        bundleType: 0,
        version: "17.0.1",
        rendererPackageName: "react-dom"
    }
      , uc = {
        bundleType: ic.bundleType,
        version: ic.version,
        rendererPackageName: ic.rendererPackageName,
        rendererConfig: ic.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: O.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return null === (e = Je(e)) ? null : e.stateNode
        },
        findFiberByHostInstance: ic.findFiberByHostInstance || function() {
            return null
        }
        ,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null
    };
    if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        var lc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!lc.isDisabled && lc.supportsFiber)
            try {
                Oo = lc.inject(uc),
                ko = lc
            } catch (he) {}
    }
    t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ac,
    t.createPortal = oc,
    t.findDOMNode = function(e) {
        if (null == e)
            return null;
        if (1 === e.nodeType)
            return e;
        var t = e._reactInternals;
        if (void 0 === t) {
            if ("function" === typeof e.render)
                throw Error(i(188));
            throw Error(i(268, Object.keys(e)))
        }
        return e = null === (e = Je(t)) ? null : e.stateNode
    }
    ,
    t.flushSync = function(e, t) {
        var n = Tu;
        if (0 !== (48 & n))
            return e(t);
        Tu |= 1;
        try {
            if (e)
                return Wo(99, e.bind(null, t))
        } finally {
            Tu = n,
            $o()
        }
    }
    ,
    t.hydrate = function(e, t, n) {
        if (!nc(t))
            throw Error(i(200));
        return rc(null, e, t, !0, n)
    }
    ,
    t.render = function(e, t, n) {
        if (!nc(t))
            throw Error(i(200));
        return rc(null, e, t, !1, n)
    }
    ,
    t.unmountComponentAtNode = function(e) {
        if (!nc(e))
            throw Error(i(40));
        return !!e._reactRootContainer && (gl((function() {
            rc(null, null, e, !1, (function() {
                e._reactRootContainer = null,
                e[Gr] = null
            }
            ))
        }
        )),
        !0)
    }
    ,
    t.unstable_batchedUpdates = ml,
    t.unstable_createPortal = function(e, t) {
        return oc(e, t, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null)
    }
    ,
    t.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
        if (!nc(n))
            throw Error(i(200));
        if (null == e || void 0 === e._reactInternals)
            throw Error(i(38));
        return rc(e, t, n, !1, r)
    }
    ,
    t.version = "17.0.1"
}
, function(e, t, n) {
    "use strict";
    e.exports = n(44)
}
, function(e, t, n) {
    "use strict";
    var r, o, a, i;
    if ("object" === typeof performance && "function" === typeof performance.now) {
        var u = performance;
        t.unstable_now = function() {
            return u.now()
        }
    } else {
        var l = Date
          , c = l.now();
        t.unstable_now = function() {
            return l.now() - c
        }
    }
    if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
        var s = null
          , f = null
          , p = function e() {
            if (null !== s)
                try {
                    var n = t.unstable_now();
                    s(!0, n),
                    s = null
                } catch (r) {
                    throw setTimeout(e, 0),
                    r
                }
        };
        r = function(e) {
            null !== s ? setTimeout(r, 0, e) : (s = e,
            setTimeout(p, 0))
        }
        ,
        o = function(e, t) {
            f = setTimeout(e, t)
        }
        ,
        a = function() {
            clearTimeout(f)
        }
        ,
        t.unstable_shouldYield = function() {
            return !1
        }
        ,
        i = t.unstable_forceFrameRate = function() {}
    } else {
        var d = window.setTimeout
          , y = window.clearTimeout;
        if ("undefined" !== typeof console) {
            var v = window.cancelAnimationFrame;
            "function" !== typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),
            "function" !== typeof v && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")
        }
        var h = !1
          , m = null
          , g = -1
          , b = 5
          , w = 0;
        t.unstable_shouldYield = function() {
            return t.unstable_now() >= w
        }
        ,
        i = function() {}
        ,
        t.unstable_forceFrameRate = function(e) {
            0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : b = 0 < e ? Math.floor(1e3 / e) : 5
        }
        ;
        var O = new MessageChannel
          , k = O.port2;
        O.port1.onmessage = function() {
            if (null !== m) {
                var e = t.unstable_now();
                w = e + b;
                try {
                    m(!0, e) ? k.postMessage(null) : (h = !1,
                    m = null)
                } catch (n) {
                    throw k.postMessage(null),
                    n
                }
            } else
                h = !1
        }
        ,
        r = function(e) {
            m = e,
            h || (h = !0,
            k.postMessage(null))
        }
        ,
        o = function(e, n) {
            g = d((function() {
                e(t.unstable_now())
            }
            ), n)
        }
        ,
        a = function() {
            y(g),
            g = -1
        }
    }
    function S(e, t) {
        var n = e.length;
        e.push(t);
        e: for (; ; ) {
            var r = n - 1 >>> 1
              , o = e[r];
            if (!(void 0 !== o && 0 < _(o, t)))
                break e;
            e[r] = t,
            e[n] = o,
            n = r
        }
    }
    function E(e) {
        return void 0 === (e = e[0]) ? null : e
    }
    function P(e) {
        var t = e[0];
        if (void 0 !== t) {
            var n = e.pop();
            if (n !== t) {
                e[0] = n;
                e: for (var r = 0, o = e.length; r < o; ) {
                    var a = 2 * (r + 1) - 1
                      , i = e[a]
                      , u = a + 1
                      , l = e[u];
                    if (void 0 !== i && 0 > _(i, n))
                        void 0 !== l && 0 > _(l, i) ? (e[r] = l,
                        e[u] = n,
                        r = u) : (e[r] = i,
                        e[a] = n,
                        r = a);
                    else {
                        if (!(void 0 !== l && 0 > _(l, n)))
                            break e;
                        e[r] = l,
                        e[u] = n,
                        r = u
                    }
                }
            }
            return t
        }
        return null
    }
    function _(e, t) {
        var n = e.sortIndex - t.sortIndex;
        return 0 !== n ? n : e.id - t.id
    }
    var x = []
      , j = []
      , T = 1
      , A = null
      , C = 3
      , L = !1
      , R = !1
      , M = !1;
    function D(e) {
        for (var t = E(j); null !== t; ) {
            if (null === t.callback)
                P(j);
            else {
                if (!(t.startTime <= e))
                    break;
                P(j),
                t.sortIndex = t.expirationTime,
                S(x, t)
            }
            t = E(j)
        }
    }
    function N(e) {
        if (M = !1,
        D(e),
        !R)
            if (null !== E(x))
                R = !0,
                r(V);
            else {
                var t = E(j);
                null !== t && o(N, t.startTime - e)
            }
    }
    function V(e, n) {
        R = !1,
        M && (M = !1,
        a()),
        L = !0;
        var r = C;
        try {
            for (D(n),
            A = E(x); null !== A && (!(A.expirationTime > n) || e && !t.unstable_shouldYield()); ) {
                var i = A.callback;
                if ("function" === typeof i) {
                    A.callback = null,
                    C = A.priorityLevel;
                    var u = i(A.expirationTime <= n);
                    n = t.unstable_now(),
                    "function" === typeof u ? A.callback = u : A === E(x) && P(x),
                    D(n)
                } else
                    P(x);
                A = E(x)
            }
            if (null !== A)
                var l = !0;
            else {
                var c = E(j);
                null !== c && o(N, c.startTime - n),
                l = !1
            }
            return l
        } finally {
            A = null,
            C = r,
            L = !1
        }
    }
    var I = i;
    t.unstable_IdlePriority = 5,
    t.unstable_ImmediatePriority = 1,
    t.unstable_LowPriority = 4,
    t.unstable_NormalPriority = 3,
    t.unstable_Profiling = null,
    t.unstable_UserBlockingPriority = 2,
    t.unstable_cancelCallback = function(e) {
        e.callback = null
    }
    ,
    t.unstable_continueExecution = function() {
        R || L || (R = !0,
        r(V))
    }
    ,
    t.unstable_getCurrentPriorityLevel = function() {
        return C
    }
    ,
    t.unstable_getFirstCallbackNode = function() {
        return E(x)
    }
    ,
    t.unstable_next = function(e) {
        switch (C) {
        case 1:
        case 2:
        case 3:
            var t = 3;
            break;
        default:
            t = C
        }
        var n = C;
        C = t;
        try {
            return e()
        } finally {
            C = n
        }
    }
    ,
    t.unstable_pauseExecution = function() {}
    ,
    t.unstable_requestPaint = I,
    t.unstable_runWithPriority = function(e, t) {
        switch (e) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            e = 3
        }
        var n = C;
        C = e;
        try {
            return t()
        } finally {
            C = n
        }
    }
    ,
    t.unstable_scheduleCallback = function(e, n, i) {
        var u = t.unstable_now();
        switch ("object" === typeof i && null !== i ? i = "number" === typeof (i = i.delay) && 0 < i ? u + i : u : i = u,
        e) {
        case 1:
            var l = -1;
            break;
        case 2:
            l = 250;
            break;
        case 5:
            l = 1073741823;
            break;
        case 4:
            l = 1e4;
            break;
        default:
            l = 5e3
        }
        return e = {
            id: T++,
            callback: n,
            priorityLevel: e,
            startTime: i,
            expirationTime: l = i + l,
            sortIndex: -1
        },
        i > u ? (e.sortIndex = i,
        S(j, e),
        null === E(x) && e === E(j) && (M ? a() : M = !0,
        o(N, i - u))) : (e.sortIndex = l,
        S(x, e),
        R || L || (R = !0,
        r(V))),
        e
    }
    ,
    t.unstable_wrapCallback = function(e) {
        var t = C;
        return function() {
            var n = C;
            C = t;
            try {
                return e.apply(this, arguments)
            } finally {
                C = n
            }
        }
    }
}
, function(e, t, n) {
    var r = function(e) {
        "use strict";
        var t, n = Object.prototype, r = n.hasOwnProperty, o = "function" === typeof Symbol ? Symbol : {}, a = o.iterator || "@@iterator", i = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag";
        function l(e, t, n) {
            return Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }),
            e[t]
        }
        try {
            l({}, "")
        } catch (C) {
            l = function(e, t, n) {
                return e[t] = n
            }
        }
        function c(e, t, n, r) {
            var o = t && t.prototype instanceof h ? t : h
              , a = Object.create(o.prototype)
              , i = new j(r || []);
            return a._invoke = function(e, t, n) {
                var r = f;
                return function(o, a) {
                    if (r === d)
                        throw new Error("Generator is already running");
                    if (r === y) {
                        if ("throw" === o)
                            throw a;
                        return A()
                    }
                    for (n.method = o,
                    n.arg = a; ; ) {
                        var i = n.delegate;
                        if (i) {
                            var u = P(i, n);
                            if (u) {
                                if (u === v)
                                    continue;
                                return u
                            }
                        }
                        if ("next" === n.method)
                            n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if (r === f)
                                throw r = y,
                                n.arg;
                            n.dispatchException(n.arg)
                        } else
                            "return" === n.method && n.abrupt("return", n.arg);
                        r = d;
                        var l = s(e, t, n);
                        if ("normal" === l.type) {
                            if (r = n.done ? y : p,
                            l.arg === v)
                                continue;
                            return {
                                value: l.arg,
                                done: n.done
                            }
                        }
                        "throw" === l.type && (r = y,
                        n.method = "throw",
                        n.arg = l.arg)
                    }
                }
            }(e, n, i),
            a
        }
        function s(e, t, n) {
            try {
                return {
                    type: "normal",
                    arg: e.call(t, n)
                }
            } catch (C) {
                return {
                    type: "throw",
                    arg: C
                }
            }
        }
        e.wrap = c;
        var f = "suspendedStart"
          , p = "suspendedYield"
          , d = "executing"
          , y = "completed"
          , v = {};
        function h() {}
        function m() {}
        function g() {}
        var b = {};
        b[a] = function() {
            return this
        }
        ;
        var w = Object.getPrototypeOf
          , O = w && w(w(T([])));
        O && O !== n && r.call(O, a) && (b = O);
        var k = g.prototype = h.prototype = Object.create(b);
        function S(e) {
            ["next", "throw", "return"].forEach((function(t) {
                l(e, t, (function(e) {
                    return this._invoke(t, e)
                }
                ))
            }
            ))
        }
        function E(e, t) {
            function n(o, a, i, u) {
                var l = s(e[o], e, a);
                if ("throw" !== l.type) {
                    var c = l.arg
                      , f = c.value;
                    return f && "object" === typeof f && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                        n("next", e, i, u)
                    }
                    ), (function(e) {
                        n("throw", e, i, u)
                    }
                    )) : t.resolve(f).then((function(e) {
                        c.value = e,
                        i(c)
                    }
                    ), (function(e) {
                        return n("throw", e, i, u)
                    }
                    ))
                }
                u(l.arg)
            }
            var o;
            this._invoke = function(e, r) {
                function a() {
                    return new t((function(t, o) {
                        n(e, r, t, o)
                    }
                    ))
                }
                return o = o ? o.then(a, a) : a()
            }
        }
        function P(e, n) {
            var r = e.iterator[n.method];
            if (r === t) {
                if (n.delegate = null,
                "throw" === n.method) {
                    if (e.iterator.return && (n.method = "return",
                    n.arg = t,
                    P(e, n),
                    "throw" === n.method))
                        return v;
                    n.method = "throw",
                    n.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return v
            }
            var o = s(r, e.iterator, n.arg);
            if ("throw" === o.type)
                return n.method = "throw",
                n.arg = o.arg,
                n.delegate = null,
                v;
            var a = o.arg;
            return a ? a.done ? (n[e.resultName] = a.value,
            n.next = e.nextLoc,
            "return" !== n.method && (n.method = "next",
            n.arg = t),
            n.delegate = null,
            v) : a : (n.method = "throw",
            n.arg = new TypeError("iterator result is not an object"),
            n.delegate = null,
            v)
        }
        function _(e) {
            var t = {
                tryLoc: e[0]
            };
            1 in e && (t.catchLoc = e[1]),
            2 in e && (t.finallyLoc = e[2],
            t.afterLoc = e[3]),
            this.tryEntries.push(t)
        }
        function x(e) {
            var t = e.completion || {};
            t.type = "normal",
            delete t.arg,
            e.completion = t
        }
        function j(e) {
            this.tryEntries = [{
                tryLoc: "root"
            }],
            e.forEach(_, this),
            this.reset(!0)
        }
        function T(e) {
            if (e) {
                var n = e[a];
                if (n)
                    return n.call(e);
                if ("function" === typeof e.next)
                    return e;
                if (!isNaN(e.length)) {
                    var o = -1
                      , i = function n() {
                        for (; ++o < e.length; )
                            if (r.call(e, o))
                                return n.value = e[o],
                                n.done = !1,
                                n;
                        return n.value = t,
                        n.done = !0,
                        n
                    };
                    return i.next = i
                }
            }
            return {
                next: A
            }
        }
        function A() {
            return {
                value: t,
                done: !0
            }
        }
        return m.prototype = k.constructor = g,
        g.constructor = m,
        m.displayName = l(g, u, "GeneratorFunction"),
        e.isGeneratorFunction = function(e) {
            var t = "function" === typeof e && e.constructor;
            return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name))
        }
        ,
        e.mark = function(e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, g) : (e.__proto__ = g,
            l(e, u, "GeneratorFunction")),
            e.prototype = Object.create(k),
            e
        }
        ,
        e.awrap = function(e) {
            return {
                __await: e
            }
        }
        ,
        S(E.prototype),
        E.prototype[i] = function() {
            return this
        }
        ,
        e.AsyncIterator = E,
        e.async = function(t, n, r, o, a) {
            void 0 === a && (a = Promise);
            var i = new E(c(t, n, r, o),a);
            return e.isGeneratorFunction(n) ? i : i.next().then((function(e) {
                return e.done ? e.value : i.next()
            }
            ))
        }
        ,
        S(k),
        l(k, u, "Generator"),
        k[a] = function() {
            return this
        }
        ,
        k.toString = function() {
            return "[object Generator]"
        }
        ,
        e.keys = function(e) {
            var t = [];
            for (var n in e)
                t.push(n);
            return t.reverse(),
            function n() {
                for (; t.length; ) {
                    var r = t.pop();
                    if (r in e)
                        return n.value = r,
                        n.done = !1,
                        n
                }
                return n.done = !0,
                n
            }
        }
        ,
        e.values = T,
        j.prototype = {
            constructor: j,
            reset: function(e) {
                if (this.prev = 0,
                this.next = 0,
                this.sent = this._sent = t,
                this.done = !1,
                this.delegate = null,
                this.method = "next",
                this.arg = t,
                this.tryEntries.forEach(x),
                !e)
                    for (var n in this)
                        "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
            },
            stop: function() {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type)
                    throw e.arg;
                return this.rval
            },
            dispatchException: function(e) {
                if (this.done)
                    throw e;
                var n = this;
                function o(r, o) {
                    return u.type = "throw",
                    u.arg = e,
                    n.next = r,
                    o && (n.method = "next",
                    n.arg = t),
                    !!o
                }
                for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                    var i = this.tryEntries[a]
                      , u = i.completion;
                    if ("root" === i.tryLoc)
                        return o("end");
                    if (i.tryLoc <= this.prev) {
                        var l = r.call(i, "catchLoc")
                          , c = r.call(i, "finallyLoc");
                        if (l && c) {
                            if (this.prev < i.catchLoc)
                                return o(i.catchLoc, !0);
                            if (this.prev < i.finallyLoc)
                                return o(i.finallyLoc)
                        } else if (l) {
                            if (this.prev < i.catchLoc)
                                return o(i.catchLoc, !0)
                        } else {
                            if (!c)
                                throw new Error("try statement without catch or finally");
                            if (this.prev < i.finallyLoc)
                                return o(i.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var o = this.tryEntries[n];
                    if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                        var a = o;
                        break
                    }
                }
                a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                var i = a ? a.completion : {};
                return i.type = e,
                i.arg = t,
                a ? (this.method = "next",
                this.next = a.finallyLoc,
                v) : this.complete(i)
            },
            complete: function(e, t) {
                if ("throw" === e.type)
                    throw e.arg;
                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                this.method = "return",
                this.next = "end") : "normal" === e.type && t && (this.next = t),
                v
            },
            finish: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.finallyLoc === e)
                        return this.complete(n.completion, n.afterLoc),
                        x(n),
                        v
                }
            },
            catch: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.tryLoc === e) {
                        var r = n.completion;
                        if ("throw" === r.type) {
                            var o = r.arg;
                            x(n)
                        }
                        return o
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(e, n, r) {
                return this.delegate = {
                    iterator: T(e),
                    resultName: n,
                    nextLoc: r
                },
                "next" === this.method && (this.arg = t),
                v
            }
        },
        e
    }(e.exports);
    try {
        regeneratorRuntime = r
    } catch (o) {
        Function("r", "regeneratorRuntime = r")(r)
    }
}
, , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = n(0)
      , o = n(8)
      , a = n(9);
    function i(e) {
        return (i = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function u() {
        if ("function" !== typeof WeakMap)
            return null;
        var e = new WeakMap;
        return u = function() {
            return e
        }
        ,
        e
    }
    function l(e) {
        if (e && e.__esModule)
            return e;
        if (null === e || "object" !== i(e) && "function" !== typeof e)
            return {
                default: e
            };
        var t = u();
        if (t && t.has(e))
            return t.get(e);
        var n = {}
          , r = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
                var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
            }
        return n.default = e,
        t && t.set(e, n),
        n
    }
    var c = [{
        key: "youtube",
        name: "YouTube",
        canPlay: a.canPlay.youtube,
        lazyPlayer: (0,
        r.lazy)((function() {
            return Promise.resolve().then((function() {
                return l(n(49))
            }
            ))
        }
        ))
    }, {
        key: "soundcloud",
        name: "SoundCloud",
        canPlay: a.canPlay.soundcloud,
        lazyPlayer: (0,
        r.lazy)((function() {
            return Promise.resolve().then((function() {
                return l(n(50))
            }
            ))
        }
        ))
    }, {
        key: "vimeo",
        name: "Vimeo",
        canPlay: a.canPlay.vimeo,
        lazyPlayer: (0,
        r.lazy)((function() {
            return Promise.resolve().then((function() {
                return l(n(51))
            }
            ))
        }
        ))
    }, {
        key: "facebook",
        name: "Facebook",
        canPlay: a.canPlay.facebook,
        lazyPlayer: (0,
        r.lazy)((function() {
            return Promise.resolve().then((function() {
                return l(n(52))
            }
            ))
        }
        ))
    }, {
        key: "streamable",
        name: "Streamable",
        canPlay: a.canPlay.streamable,
        lazyPlayer: (0,
        r.lazy)((function() {
            return Promise.resolve().then((function() {
                return l(n(53))
            }
            ))
        }
        ))
    }, {
        key: "wistia",
        name: "Wistia",
        canPlay: a.canPlay.wistia,
        lazyPlayer: (0,
        r.lazy)((function() {
            return Promise.resolve().then((function() {
                return l(n(54))
            }
            ))
        }
        ))
    }, {
        key: "twitch",
        name: "Twitch",
        canPlay: a.canPlay.twitch,
        lazyPlayer: (0,
        r.lazy)((function() {
            return Promise.resolve().then((function() {
                return l(n(55))
            }
            ))
        }
        ))
    }, {
        key: "dailymotion",
        name: "DailyMotion",
        canPlay: a.canPlay.dailymotion,
        lazyPlayer: (0,
        r.lazy)((function() {
            return Promise.resolve().then((function() {
                return l(n(56))
            }
            ))
        }
        ))
    }, {
        key: "mixcloud",
        name: "Mixcloud",
        canPlay: a.canPlay.mixcloud,
        lazyPlayer: (0,
        r.lazy)((function() {
            return Promise.resolve().then((function() {
                return l(n(57))
            }
            ))
        }
        ))
    }, {
        key: "vidyard",
        name: "Vidyard",
        canPlay: a.canPlay.vidyard,
        lazyPlayer: (0,
        r.lazy)((function() {
            return Promise.resolve().then((function() {
                return l(n(58))
            }
            ))
        }
        ))
    }, {
        key: "file",
        name: "FilePlayer",
        canPlay: a.canPlay.file,
        canEnablePIP: function(e) {
            return a.canPlay.file(e) && (document.pictureInPictureEnabled || (0,
            o.supportsWebKitPresentationMode)()) && !a.AUDIO_EXTENSIONS.test(e)
        },
        lazyPlayer: (0,
        r.lazy)((function() {
            return Promise.resolve().then((function() {
                return l(n(59))
            }
            ))
        }
        ))
    }];
    t.default = c
}
, function(e, t) {
    function n(e, t) {
        e.onload = function() {
            this.onerror = this.onload = null,
            t(null, e)
        }
        ,
        e.onerror = function() {
            this.onerror = this.onload = null,
            t(new Error("Failed to load " + this.src), e)
        }
    }
    function r(e, t) {
        e.onreadystatechange = function() {
            "complete" != this.readyState && "loaded" != this.readyState || (this.onreadystatechange = null,
            t(null, e))
        }
    }
    e.exports = function(e, t, o) {
        var a = document.head || document.getElementsByTagName("head")[0]
          , i = document.createElement("script");
        "function" === typeof t && (o = t,
        t = {}),
        t = t || {},
        o = o || function() {}
        ,
        i.type = t.type || "text/javascript",
        i.charset = t.charset || "utf8",
        i.async = !("async"in t) || !!t.async,
        i.src = e,
        t.attrs && function(e, t) {
            for (var n in t)
                e.setAttribute(n, t[n])
        }(i, t.attrs),
        t.text && (i.text = "" + t.text),
        ("onload"in i ? n : r)(i, o),
        i.onload || n(i, o),
        a.appendChild(i)
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = function(e) {
        if (e && e.__esModule)
            return e;
        if (null === e || "object" !== u(e) && "function" !== typeof e)
            return {
                default: e
            };
        var t = i();
        if (t && t.has(e))
            return t.get(e);
        var n = {}
          , r = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
                var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
            }
        n.default = e,
        t && t.set(e, n);
        return n
    }(n(0))
      , o = n(8)
      , a = n(9);
    function i() {
        if ("function" !== typeof WeakMap)
            return null;
        var e = new WeakMap;
        return i = function() {
            return e
        }
        ,
        e
    }
    function u(e) {
        return (u = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function c(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? l(Object(n), !0).forEach((function(t) {
                b(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function s(e, t) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, t) {
            if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(e)))
                return;
            var n = []
              , r = !0
              , o = !1
              , a = void 0;
            try {
                for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value),
                !t || n.length !== t); r = !0)
                    ;
            } catch (l) {
                o = !0,
                a = l
            } finally {
                try {
                    r || null == u.return || u.return()
                } finally {
                    if (o)
                        throw a
                }
            }
            return n
        }(e, t) || function(e, t) {
            if (!e)
                return;
            if ("string" === typeof e)
                return f(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n)
                return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                return f(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function f(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    function p(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function d(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    function y(e, t) {
        return (y = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t,
            e
        }
        )(e, t)
    }
    function v(e) {
        var t = function() {
            if ("undefined" === typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" === typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var n, r = g(e);
            if (t) {
                var o = g(this).constructor;
                n = Reflect.construct(r, arguments, o)
            } else
                n = r.apply(this, arguments);
            return h(this, n)
        }
    }
    function h(e, t) {
        return !t || "object" !== u(t) && "function" !== typeof t ? m(e) : t
    }
    function m(e) {
        if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function g(e) {
        return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        )(e)
    }
    function b(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    var w = "YT"
      , O = /(?:list|channel)=([a-zA-Z0-9_-]+)/
      , k = /user\/([a-zA-Z0-9_-]+)\/?/
      , S = /youtube-nocookie\.com/
      , E = function(e) {
        !function(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && y(e, t)
        }(l, e);
        var t, n, i, u = v(l);
        function l() {
            var e;
            p(this, l);
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                n[r] = arguments[r];
            return b(m(e = u.call.apply(u, [this].concat(n))), "callPlayer", o.callPlayer),
            b(m(e), "parsePlaylist", (function(t) {
                return t instanceof Array ? {
                    listType: "playlist",
                    playlist: t.map(e.getID).join(",")
                } : O.test(t) ? {
                    listType: "playlist",
                    list: s(t.match(O), 2)[1].replace(/^UC/, "UU")
                } : k.test(t) ? {
                    listType: "user_uploads",
                    list: s(t.match(k), 2)[1]
                } : {}
            }
            )),
            b(m(e), "onStateChange", (function(t) {
                var n = t.data
                  , r = e.props
                  , o = r.onPlay
                  , a = r.onPause
                  , i = r.onBuffer
                  , u = r.onBufferEnd
                  , l = r.onEnded
                  , c = r.onReady
                  , s = r.loop
                  , f = r.config
                  , p = f.playerVars
                  , d = f.onUnstarted
                  , y = window.YT.PlayerState
                  , v = y.UNSTARTED
                  , h = y.PLAYING
                  , m = y.PAUSED
                  , g = y.BUFFERING
                  , b = y.ENDED
                  , w = y.CUED;
                if (n === v && d(),
                n === h && (o(),
                u()),
                n === m && a(),
                n === g && i(),
                n === b) {
                    var O = !!e.callPlayer("getPlaylist");
                    s && !O && (p.start ? e.seekTo(p.start) : e.play()),
                    l()
                }
                n === w && c()
            }
            )),
            b(m(e), "mute", (function() {
                e.callPlayer("mute")
            }
            )),
            b(m(e), "unmute", (function() {
                e.callPlayer("unMute")
            }
            )),
            b(m(e), "ref", (function(t) {
                e.container = t
            }
            )),
            e
        }
        return t = l,
        (n = [{
            key: "componentDidMount",
            value: function() {
                this.props.onMount && this.props.onMount(this)
            }
        }, {
            key: "getID",
            value: function(e) {
                return !e || e instanceof Array || O.test(e) ? null : e.match(a.MATCH_URL_YOUTUBE)[1]
            }
        }, {
            key: "load",
            value: function(e, t) {
                var n = this
                  , r = this.props
                  , a = r.playing
                  , i = r.muted
                  , u = r.playsinline
                  , l = r.controls
                  , s = r.loop
                  , f = r.config
                  , p = r.onError
                  , d = f.playerVars
                  , y = f.embedOptions
                  , v = this.getID(e);
                if (t)
                    return O.test(e) || k.test(e) || e instanceof Array ? void this.player.loadPlaylist(this.parsePlaylist(e)) : void this.player.cueVideoById({
                        videoId: v,
                        startSeconds: (0,
                        o.parseStartTime)(e) || d.start,
                        endSeconds: (0,
                        o.parseEndTime)(e) || d.end
                    });
                (0,
                o.getSDK)("https://www.youtube.com/iframe_api", w, "onYouTubeIframeAPIReady", (function(e) {
                    return e.loaded
                }
                )).then((function(t) {
                    n.container && (n.player = new t.Player(n.container,c({
                        width: "100%",
                        height: "100%",
                        videoId: v,
                        playerVars: c(c({
                            autoplay: a ? 1 : 0,
                            mute: i ? 1 : 0,
                            controls: l ? 1 : 0,
                            start: (0,
                            o.parseStartTime)(e),
                            end: (0,
                            o.parseEndTime)(e),
                            origin: window.location.origin,
                            playsinline: u ? 1 : 0
                        }, n.parsePlaylist(e)), d),
                        events: {
                            onReady: function() {
                                s && n.player.setLoop(!0),
                                n.props.onReady()
                            },
                            onStateChange: n.onStateChange,
                            onError: function(e) {
                                return p(e.data)
                            }
                        },
                        host: S.test(e) ? "https://www.youtube-nocookie.com" : void 0
                    }, y)))
                }
                ), p),
                y.events && console.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer\u2019s callback props instead, eg onReady, onPlay, onPause")
            }
        }, {
            key: "play",
            value: function() {
                this.callPlayer("playVideo")
            }
        }, {
            key: "pause",
            value: function() {
                this.callPlayer("pauseVideo")
            }
        }, {
            key: "stop",
            value: function() {
                document.body.contains(this.callPlayer("getIframe")) && this.callPlayer("stopVideo")
            }
        }, {
            key: "seekTo",
            value: function(e) {
                this.callPlayer("seekTo", e),
                this.props.playing || this.pause()
            }
        }, {
            key: "setVolume",
            value: function(e) {
                this.callPlayer("setVolume", 100 * e)
            }
        }, {
            key: "setPlaybackRate",
            value: function(e) {
                this.callPlayer("setPlaybackRate", e)
            }
        }, {
            key: "setLoop",
            value: function(e) {
                this.callPlayer("setLoop", e)
            }
        }, {
            key: "getDuration",
            value: function() {
                return this.callPlayer("getDuration")
            }
        }, {
            key: "getCurrentTime",
            value: function() {
                return this.callPlayer("getCurrentTime")
            }
        }, {
            key: "getSecondsLoaded",
            value: function() {
                return this.callPlayer("getVideoLoadedFraction") * this.getDuration()
            }
        }, {
            key: "render",
            value: function() {
                var e = {
                    width: "100%",
                    height: "100%",
                    display: this.props.display
                };
                return r.default.createElement("div", {
                    style: e
                }, r.default.createElement("div", {
                    ref: this.ref
                }))
            }
        }]) && d(t.prototype, n),
        i && d(t, i),
        l
    }(r.Component);
    t.default = E,
    b(E, "displayName", "YouTube"),
    b(E, "canPlay", a.canPlay.youtube)
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = function(e) {
        if (e && e.__esModule)
            return e;
        if (null === e || "object" !== u(e) && "function" !== typeof e)
            return {
                default: e
            };
        var t = i();
        if (t && t.has(e))
            return t.get(e);
        var n = {}
          , r = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
                var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
            }
        n.default = e,
        t && t.set(e, n);
        return n
    }(n(0))
      , o = n(8)
      , a = n(9);
    function i() {
        if ("function" !== typeof WeakMap)
            return null;
        var e = new WeakMap;
        return i = function() {
            return e
        }
        ,
        e
    }
    function u(e) {
        return (u = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function c(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? l(Object(n), !0).forEach((function(t) {
                m(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function s(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function f(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    function p(e, t) {
        return (p = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t,
            e
        }
        )(e, t)
    }
    function d(e) {
        var t = function() {
            if ("undefined" === typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" === typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var n, r = h(e);
            if (t) {
                var o = h(this).constructor;
                n = Reflect.construct(r, arguments, o)
            } else
                n = r.apply(this, arguments);
            return y(this, n)
        }
    }
    function y(e, t) {
        return !t || "object" !== u(t) && "function" !== typeof t ? v(e) : t
    }
    function v(e) {
        if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function h(e) {
        return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        )(e)
    }
    function m(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    var g = function(e) {
        !function(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && p(e, t)
        }(u, e);
        var t, n, a, i = d(u);
        function u() {
            var e;
            s(this, u);
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                n[r] = arguments[r];
            return m(v(e = i.call.apply(i, [this].concat(n))), "callPlayer", o.callPlayer),
            m(v(e), "duration", null),
            m(v(e), "currentTime", null),
            m(v(e), "fractionLoaded", null),
            m(v(e), "mute", (function() {
                e.setVolume(0)
            }
            )),
            m(v(e), "unmute", (function() {
                null !== e.props.volume && e.setVolume(e.props.volume)
            }
            )),
            m(v(e), "ref", (function(t) {
                e.iframe = t
            }
            )),
            e
        }
        return t = u,
        (n = [{
            key: "componentDidMount",
            value: function() {
                this.props.onMount && this.props.onMount(this)
            }
        }, {
            key: "load",
            value: function(e, t) {
                var n = this;
                (0,
                o.getSDK)("https://w.soundcloud.com/player/api.js", "SC").then((function(r) {
                    if (n.iframe) {
                        var o = r.Widget.Events
                          , a = o.PLAY
                          , i = o.PLAY_PROGRESS
                          , u = o.PAUSE
                          , l = o.FINISH
                          , s = o.ERROR;
                        t || (n.player = r.Widget(n.iframe),
                        n.player.bind(a, n.props.onPlay),
                        n.player.bind(u, (function() {
                            n.duration - n.currentTime < .05 || n.props.onPause()
                        }
                        )),
                        n.player.bind(i, (function(e) {
                            n.currentTime = e.currentPosition / 1e3,
                            n.fractionLoaded = e.loadedProgress
                        }
                        )),
                        n.player.bind(l, (function() {
                            return n.props.onEnded()
                        }
                        )),
                        n.player.bind(s, (function(e) {
                            return n.props.onError(e)
                        }
                        ))),
                        n.player.load(e, c(c({}, n.props.config.options), {}, {
                            callback: function() {
                                n.player.getDuration((function(e) {
                                    n.duration = e / 1e3,
                                    n.props.onReady()
                                }
                                ))
                            }
                        }))
                    }
                }
                ))
            }
        }, {
            key: "play",
            value: function() {
                this.callPlayer("play")
            }
        }, {
            key: "pause",
            value: function() {
                this.callPlayer("pause")
            }
        }, {
            key: "stop",
            value: function() {}
        }, {
            key: "seekTo",
            value: function(e) {
                this.callPlayer("seekTo", 1e3 * e)
            }
        }, {
            key: "setVolume",
            value: function(e) {
                this.callPlayer("setVolume", 100 * e)
            }
        }, {
            key: "getDuration",
            value: function() {
                return this.duration
            }
        }, {
            key: "getCurrentTime",
            value: function() {
                return this.currentTime
            }
        }, {
            key: "getSecondsLoaded",
            value: function() {
                return this.fractionLoaded * this.duration
            }
        }, {
            key: "render",
            value: function() {
                var e = {
                    width: "100%",
                    height: "100%",
                    display: this.props.display
                };
                return r.default.createElement("iframe", {
                    ref: this.ref,
                    src: "https://w.soundcloud.com/player/?url=".concat(encodeURIComponent(this.props.url)),
                    style: e,
                    frameBorder: 0,
                    allow: "autoplay"
                })
            }
        }]) && f(t.prototype, n),
        a && f(t, a),
        u
    }(r.Component);
    t.default = g,
    m(g, "displayName", "SoundCloud"),
    m(g, "canPlay", a.canPlay.soundcloud),
    m(g, "loopOnEnded", !0)
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = function(e) {
        if (e && e.__esModule)
            return e;
        if (null === e || "object" !== u(e) && "function" !== typeof e)
            return {
                default: e
            };
        var t = i();
        if (t && t.has(e))
            return t.get(e);
        var n = {}
          , r = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
                var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
            }
        n.default = e,
        t && t.set(e, n);
        return n
    }(n(0))
      , o = n(8)
      , a = n(9);
    function i() {
        if ("function" !== typeof WeakMap)
            return null;
        var e = new WeakMap;
        return i = function() {
            return e
        }
        ,
        e
    }
    function u(e) {
        return (u = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function c(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    function f(e, t) {
        return (f = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t,
            e
        }
        )(e, t)
    }
    function p(e) {
        var t = function() {
            if ("undefined" === typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" === typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var n, r = v(e);
            if (t) {
                var o = v(this).constructor;
                n = Reflect.construct(r, arguments, o)
            } else
                n = r.apply(this, arguments);
            return d(this, n)
        }
    }
    function d(e, t) {
        return !t || "object" !== u(t) && "function" !== typeof t ? y(e) : t
    }
    function y(e) {
        if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function v(e) {
        return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        )(e)
    }
    function h(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    var m = function(e) {
        !function(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && f(e, t)
        }(u, e);
        var t, n, a, i = p(u);
        function u() {
            var e;
            c(this, u);
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                n[r] = arguments[r];
            return h(y(e = i.call.apply(i, [this].concat(n))), "callPlayer", o.callPlayer),
            h(y(e), "duration", null),
            h(y(e), "currentTime", null),
            h(y(e), "secondsLoaded", null),
            h(y(e), "mute", (function() {
                e.setVolume(0)
            }
            )),
            h(y(e), "unmute", (function() {
                null !== e.props.volume && e.setVolume(e.props.volume)
            }
            )),
            h(y(e), "ref", (function(t) {
                e.container = t
            }
            )),
            e
        }
        return t = u,
        (n = [{
            key: "componentDidMount",
            value: function() {
                this.props.onMount && this.props.onMount(this)
            }
        }, {
            key: "load",
            value: function(e) {
                var t = this;
                this.duration = null,
                (0,
                o.getSDK)("https://player.vimeo.com/api/player.js", "Vimeo").then((function(n) {
                    t.container && (t.player = new n.Player(t.container,function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? l(Object(n), !0).forEach((function(t) {
                                h(e, t, n[t])
                            }
                            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }
                            ))
                        }
                        return e
                    }({
                        url: e,
                        autoplay: t.props.playing,
                        muted: t.props.muted,
                        loop: t.props.loop,
                        playsinline: t.props.playsinline,
                        controls: t.props.controls
                    }, t.props.config.playerOptions)),
                    t.player.ready().then((function() {
                        var e = t.container.querySelector("iframe");
                        e.style.width = "100%",
                        e.style.height = "100%"
                    }
                    )).catch(t.props.onError),
                    t.player.on("loaded", (function() {
                        t.props.onReady(),
                        t.refreshDuration()
                    }
                    )),
                    t.player.on("play", (function() {
                        t.props.onPlay(),
                        t.refreshDuration()
                    }
                    )),
                    t.player.on("pause", t.props.onPause),
                    t.player.on("seeked", (function(e) {
                        return t.props.onSeek(e.seconds)
                    }
                    )),
                    t.player.on("ended", t.props.onEnded),
                    t.player.on("error", t.props.onError),
                    t.player.on("timeupdate", (function(e) {
                        var n = e.seconds;
                        t.currentTime = n
                    }
                    )),
                    t.player.on("progress", (function(e) {
                        var n = e.seconds;
                        t.secondsLoaded = n
                    }
                    )),
                    t.player.on("bufferstart", t.props.onBuffer),
                    t.player.on("bufferend", t.props.onBufferEnd))
                }
                ), this.props.onError)
            }
        }, {
            key: "refreshDuration",
            value: function() {
                var e = this;
                this.player.getDuration().then((function(t) {
                    e.duration = t
                }
                ))
            }
        }, {
            key: "play",
            value: function() {
                var e = this.callPlayer("play");
                e && e.catch(this.props.onError)
            }
        }, {
            key: "pause",
            value: function() {
                this.callPlayer("pause")
            }
        }, {
            key: "stop",
            value: function() {
                this.callPlayer("unload")
            }
        }, {
            key: "seekTo",
            value: function(e) {
                this.callPlayer("setCurrentTime", e)
            }
        }, {
            key: "setVolume",
            value: function(e) {
                this.callPlayer("setVolume", e)
            }
        }, {
            key: "setLoop",
            value: function(e) {
                this.callPlayer("setLoop", e)
            }
        }, {
            key: "setPlaybackRate",
            value: function(e) {
                this.callPlayer("setPlaybackRate", e)
            }
        }, {
            key: "getDuration",
            value: function() {
                return this.duration
            }
        }, {
            key: "getCurrentTime",
            value: function() {
                return this.currentTime
            }
        }, {
            key: "getSecondsLoaded",
            value: function() {
                return this.secondsLoaded
            }
        }, {
            key: "render",
            value: function() {
                var e = {
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    display: this.props.display
                };
                return r.default.createElement("div", {
                    key: this.props.url,
                    ref: this.ref,
                    style: e
                })
            }
        }]) && s(t.prototype, n),
        a && s(t, a),
        u
    }(r.Component);
    t.default = m,
    h(m, "displayName", "Vimeo"),
    h(m, "canPlay", a.canPlay.vimeo),
    h(m, "forceLoad", !0)
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = function(e) {
        if (e && e.__esModule)
            return e;
        if (null === e || "object" !== u(e) && "function" !== typeof e)
            return {
                default: e
            };
        var t = i();
        if (t && t.has(e))
            return t.get(e);
        var n = {}
          , r = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
                var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
            }
        n.default = e,
        t && t.set(e, n);
        return n
    }(n(0))
      , o = n(8)
      , a = n(9);
    function i() {
        if ("function" !== typeof WeakMap)
            return null;
        var e = new WeakMap;
        return i = function() {
            return e
        }
        ,
        e
    }
    function u(e) {
        return (u = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function l() {
        return (l = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        ).apply(this, arguments)
    }
    function c(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    function f(e, t) {
        return (f = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t,
            e
        }
        )(e, t)
    }
    function p(e) {
        var t = function() {
            if ("undefined" === typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" === typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var n, r = v(e);
            if (t) {
                var o = v(this).constructor;
                n = Reflect.construct(r, arguments, o)
            } else
                n = r.apply(this, arguments);
            return d(this, n)
        }
    }
    function d(e, t) {
        return !t || "object" !== u(t) && "function" !== typeof t ? y(e) : t
    }
    function y(e) {
        if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function v(e) {
        return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        )(e)
    }
    function h(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    var m = "https://connect.facebook.net/en_US/sdk.js"
      , g = "fbAsyncInit"
      , b = "facebook-player-"
      , w = function(e) {
        !function(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && f(e, t)
        }(u, e);
        var t, n, a, i = p(u);
        function u() {
            var e;
            c(this, u);
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                n[r] = arguments[r];
            return h(y(e = i.call.apply(i, [this].concat(n))), "callPlayer", o.callPlayer),
            h(y(e), "playerID", e.props.config.playerId || "".concat(b).concat((0,
            o.randomString)())),
            h(y(e), "mute", (function() {
                e.callPlayer("mute")
            }
            )),
            h(y(e), "unmute", (function() {
                e.callPlayer("unmute")
            }
            )),
            e
        }
        return t = u,
        (n = [{
            key: "componentDidMount",
            value: function() {
                this.props.onMount && this.props.onMount(this)
            }
        }, {
            key: "load",
            value: function(e, t) {
                var n = this;
                t ? (0,
                o.getSDK)(m, "FB", g).then((function(e) {
                    return e.XFBML.parse()
                }
                )) : (0,
                o.getSDK)(m, "FB", g).then((function(e) {
                    e.init({
                        appId: n.props.config.appId,
                        xfbml: !0,
                        version: n.props.config.version
                    }),
                    e.Event.subscribe("xfbml.render", (function(e) {
                        n.props.onLoaded()
                    }
                    )),
                    e.Event.subscribe("xfbml.ready", (function(e) {
                        "video" === e.type && e.id === n.playerID && (n.player = e.instance,
                        n.player.subscribe("startedPlaying", n.props.onPlay),
                        n.player.subscribe("paused", n.props.onPause),
                        n.player.subscribe("finishedPlaying", n.props.onEnded),
                        n.player.subscribe("startedBuffering", n.props.onBuffer),
                        n.player.subscribe("finishedBuffering", n.props.onBufferEnd),
                        n.player.subscribe("error", n.props.onError),
                        n.props.muted || n.callPlayer("unmute"),
                        n.props.onReady(),
                        document.getElementById(n.playerID).querySelector("iframe").style.visibility = "visible")
                    }
                    ))
                }
                ))
            }
        }, {
            key: "play",
            value: function() {
                this.callPlayer("play")
            }
        }, {
            key: "pause",
            value: function() {
                this.callPlayer("pause")
            }
        }, {
            key: "stop",
            value: function() {}
        }, {
            key: "seekTo",
            value: function(e) {
                this.callPlayer("seek", e)
            }
        }, {
            key: "setVolume",
            value: function(e) {
                this.callPlayer("setVolume", e)
            }
        }, {
            key: "getDuration",
            value: function() {
                return this.callPlayer("getDuration")
            }
        }, {
            key: "getCurrentTime",
            value: function() {
                return this.callPlayer("getCurrentPosition")
            }
        }, {
            key: "getSecondsLoaded",
            value: function() {
                return null
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props.config.attributes;
                return r.default.createElement("div", l({
                    style: {
                        width: "100%",
                        height: "100%"
                    },
                    id: this.playerID,
                    className: "fb-video",
                    "data-href": this.props.url,
                    "data-autoplay": this.props.playing ? "true" : "false",
                    "data-allowfullscreen": "true",
                    "data-controls": this.props.controls ? "true" : "false"
                }, e))
            }
        }]) && s(t.prototype, n),
        a && s(t, a),
        u
    }(r.Component);
    t.default = w,
    h(w, "displayName", "Facebook"),
    h(w, "canPlay", a.canPlay.facebook),
    h(w, "loopOnEnded", !0)
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = function(e) {
        if (e && e.__esModule)
            return e;
        if (null === e || "object" !== u(e) && "function" !== typeof e)
            return {
                default: e
            };
        var t = i();
        if (t && t.has(e))
            return t.get(e);
        var n = {}
          , r = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
                var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
            }
        n.default = e,
        t && t.set(e, n);
        return n
    }(n(0))
      , o = n(8)
      , a = n(9);
    function i() {
        if ("function" !== typeof WeakMap)
            return null;
        var e = new WeakMap;
        return i = function() {
            return e
        }
        ,
        e
    }
    function u(e) {
        return (u = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function l(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function c(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    function s(e, t) {
        return (s = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t,
            e
        }
        )(e, t)
    }
    function f(e) {
        var t = function() {
            if ("undefined" === typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" === typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var n, r = y(e);
            if (t) {
                var o = y(this).constructor;
                n = Reflect.construct(r, arguments, o)
            } else
                n = r.apply(this, arguments);
            return p(this, n)
        }
    }
    function p(e, t) {
        return !t || "object" !== u(t) && "function" !== typeof t ? d(e) : t
    }
    function d(e) {
        if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function y(e) {
        return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        )(e)
    }
    function v(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    var h = function(e) {
        !function(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && s(e, t)
        }(p, e);
        var t, n, i, u = f(p);
        function p() {
            var e;
            l(this, p);
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                n[r] = arguments[r];
            return v(d(e = u.call.apply(u, [this].concat(n))), "callPlayer", o.callPlayer),
            v(d(e), "duration", null),
            v(d(e), "currentTime", null),
            v(d(e), "secondsLoaded", null),
            v(d(e), "mute", (function() {
                e.callPlayer("mute")
            }
            )),
            v(d(e), "unmute", (function() {
                e.callPlayer("unmute")
            }
            )),
            v(d(e), "ref", (function(t) {
                e.iframe = t
            }
            )),
            e
        }
        return t = p,
        (n = [{
            key: "componentDidMount",
            value: function() {
                this.props.onMount && this.props.onMount(this)
            }
        }, {
            key: "load",
            value: function(e) {
                var t = this;
                (0,
                o.getSDK)("https://cdn.embed.ly/player-0.1.0.min.js", "playerjs").then((function(e) {
                    t.iframe && (t.player = new e.Player(t.iframe),
                    t.player.setLoop(t.props.loop),
                    t.player.on("ready", t.props.onReady),
                    t.player.on("play", t.props.onPlay),
                    t.player.on("pause", t.props.onPause),
                    t.player.on("seeked", t.props.onSeek),
                    t.player.on("ended", t.props.onEnded),
                    t.player.on("error", t.props.onError),
                    t.player.on("timeupdate", (function(e) {
                        var n = e.duration
                          , r = e.seconds;
                        t.duration = n,
                        t.currentTime = r
                    }
                    )),
                    t.player.on("buffered", (function(e) {
                        var n = e.percent;
                        t.duration && (t.secondsLoaded = t.duration * n)
                    }
                    )),
                    t.props.muted && t.player.mute())
                }
                ), this.props.onError)
            }
        }, {
            key: "play",
            value: function() {
                this.callPlayer("play")
            }
        }, {
            key: "pause",
            value: function() {
                this.callPlayer("pause")
            }
        }, {
            key: "stop",
            value: function() {}
        }, {
            key: "seekTo",
            value: function(e) {
                this.callPlayer("setCurrentTime", e)
            }
        }, {
            key: "setVolume",
            value: function(e) {
                this.callPlayer("setVolume", 100 * e)
            }
        }, {
            key: "setLoop",
            value: function(e) {
                this.callPlayer("setLoop", e)
            }
        }, {
            key: "getDuration",
            value: function() {
                return this.duration
            }
        }, {
            key: "getCurrentTime",
            value: function() {
                return this.currentTime
            }
        }, {
            key: "getSecondsLoaded",
            value: function() {
                return this.secondsLoaded
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props.url.match(a.MATCH_URL_STREAMABLE)[1];
                return r.default.createElement("iframe", {
                    ref: this.ref,
                    src: "https://streamable.com/o/".concat(e),
                    frameBorder: "0",
                    scrolling: "no",
                    style: {
                        width: "100%",
                        height: "100%"
                    },
                    allowFullScreen: !0
                })
            }
        }]) && c(t.prototype, n),
        i && c(t, i),
        p
    }(r.Component);
    t.default = h,
    v(h, "displayName", "Streamable"),
    v(h, "canPlay", a.canPlay.streamable)
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = function(e) {
        if (e && e.__esModule)
            return e;
        if (null === e || "object" !== u(e) && "function" !== typeof e)
            return {
                default: e
            };
        var t = i();
        if (t && t.has(e))
            return t.get(e);
        var n = {}
          , r = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
                var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
            }
        n.default = e,
        t && t.set(e, n);
        return n
    }(n(0))
      , o = n(8)
      , a = n(9);
    function i() {
        if ("function" !== typeof WeakMap)
            return null;
        var e = new WeakMap;
        return i = function() {
            return e
        }
        ,
        e
    }
    function u(e) {
        return (u = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function c(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? l(Object(n), !0).forEach((function(t) {
                m(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function s(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function f(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    function p(e, t) {
        return (p = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t,
            e
        }
        )(e, t)
    }
    function d(e) {
        var t = function() {
            if ("undefined" === typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" === typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var n, r = h(e);
            if (t) {
                var o = h(this).constructor;
                n = Reflect.construct(r, arguments, o)
            } else
                n = r.apply(this, arguments);
            return y(this, n)
        }
    }
    function y(e, t) {
        return !t || "object" !== u(t) && "function" !== typeof t ? v(e) : t
    }
    function v(e) {
        if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function h(e) {
        return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        )(e)
    }
    function m(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    var g = "wistia-player-"
      , b = function(e) {
        !function(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && p(e, t)
        }(l, e);
        var t, n, i, u = d(l);
        function l() {
            var e;
            s(this, l);
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                n[r] = arguments[r];
            return m(v(e = u.call.apply(u, [this].concat(n))), "callPlayer", o.callPlayer),
            m(v(e), "playerID", e.props.config.playerId || "".concat(g).concat((0,
            o.randomString)())),
            m(v(e), "onPlay", (function() {
                var t;
                return (t = e.props).onPlay.apply(t, arguments)
            }
            )),
            m(v(e), "onPause", (function() {
                var t;
                return (t = e.props).onPause.apply(t, arguments)
            }
            )),
            m(v(e), "onSeek", (function() {
                var t;
                return (t = e.props).onSeek.apply(t, arguments)
            }
            )),
            m(v(e), "onEnded", (function() {
                var t;
                return (t = e.props).onEnded.apply(t, arguments)
            }
            )),
            m(v(e), "mute", (function() {
                e.callPlayer("mute")
            }
            )),
            m(v(e), "unmute", (function() {
                e.callPlayer("unmute")
            }
            )),
            e
        }
        return t = l,
        (n = [{
            key: "componentDidMount",
            value: function() {
                this.props.onMount && this.props.onMount(this)
            }
        }, {
            key: "load",
            value: function(e) {
                var t = this
                  , n = this.props
                  , r = n.playing
                  , a = n.muted
                  , i = n.controls
                  , u = n.onReady
                  , l = n.config
                  , s = n.onError;
                (0,
                o.getSDK)("https://fast.wistia.com/assets/external/E-v1.js", "Wistia").then((function() {
                    window._wq = window._wq || [],
                    window._wq.push({
                        id: t.playerID,
                        options: c({
                            autoPlay: r,
                            silentAutoPlay: "allow",
                            muted: a,
                            controlsVisibleOnLoad: i,
                            fullscreenButton: i,
                            playbar: i,
                            playbackRateControl: i,
                            qualityControl: i,
                            volumeControl: i,
                            settingsControl: i,
                            smallPlayButton: i
                        }, l.options),
                        onReady: function(e) {
                            t.player = e,
                            t.unbind(),
                            t.player.bind("play", t.onPlay),
                            t.player.bind("pause", t.onPause),
                            t.player.bind("seek", t.onSeek),
                            t.player.bind("end", t.onEnded),
                            u()
                        }
                    })
                }
                ), s)
            }
        }, {
            key: "unbind",
            value: function() {
                this.player.unbind("play", this.onPlay),
                this.player.unbind("pause", this.onPause),
                this.player.unbind("seek", this.onSeek),
                this.player.unbind("end", this.onEnded)
            }
        }, {
            key: "play",
            value: function() {
                this.callPlayer("play")
            }
        }, {
            key: "pause",
            value: function() {
                this.callPlayer("pause")
            }
        }, {
            key: "stop",
            value: function() {
                this.unbind(),
                this.callPlayer("remove")
            }
        }, {
            key: "seekTo",
            value: function(e) {
                this.callPlayer("time", e)
            }
        }, {
            key: "setVolume",
            value: function(e) {
                this.callPlayer("volume", e)
            }
        }, {
            key: "setPlaybackRate",
            value: function(e) {
                this.callPlayer("playbackRate", e)
            }
        }, {
            key: "getDuration",
            value: function() {
                return this.callPlayer("duration")
            }
        }, {
            key: "getCurrentTime",
            value: function() {
                return this.callPlayer("time")
            }
        }, {
            key: "getSecondsLoaded",
            value: function() {
                return null
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props.url
                  , t = e && e.match(a.MATCH_URL_WISTIA)[1]
                  , n = "wistia_embed wistia_async_".concat(t);
                return r.default.createElement("div", {
                    id: this.playerID,
                    key: t,
                    className: n,
                    style: {
                        width: "100%",
                        height: "100%"
                    }
                })
            }
        }]) && f(t.prototype, n),
        i && f(t, i),
        l
    }(r.Component);
    t.default = b,
    m(b, "displayName", "Wistia"),
    m(b, "canPlay", a.canPlay.wistia),
    m(b, "loopOnEnded", !0)
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = function(e) {
        if (e && e.__esModule)
            return e;
        if (null === e || "object" !== u(e) && "function" !== typeof e)
            return {
                default: e
            };
        var t = i();
        if (t && t.has(e))
            return t.get(e);
        var n = {}
          , r = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
                var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
            }
        n.default = e,
        t && t.set(e, n);
        return n
    }(n(0))
      , o = n(8)
      , a = n(9);
    function i() {
        if ("function" !== typeof WeakMap)
            return null;
        var e = new WeakMap;
        return i = function() {
            return e
        }
        ,
        e
    }
    function u(e) {
        return (u = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function c(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    function f(e, t) {
        return (f = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t,
            e
        }
        )(e, t)
    }
    function p(e) {
        var t = function() {
            if ("undefined" === typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" === typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var n, r = v(e);
            if (t) {
                var o = v(this).constructor;
                n = Reflect.construct(r, arguments, o)
            } else
                n = r.apply(this, arguments);
            return d(this, n)
        }
    }
    function d(e, t) {
        return !t || "object" !== u(t) && "function" !== typeof t ? y(e) : t
    }
    function y(e) {
        if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function v(e) {
        return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        )(e)
    }
    function h(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    var m = "twitch-player-"
      , g = function(e) {
        !function(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && f(e, t)
        }(d, e);
        var t, n, i, u = p(d);
        function d() {
            var e;
            c(this, d);
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                n[r] = arguments[r];
            return h(y(e = u.call.apply(u, [this].concat(n))), "callPlayer", o.callPlayer),
            h(y(e), "playerID", e.props.config.playerId || "".concat(m).concat((0,
            o.randomString)())),
            h(y(e), "mute", (function() {
                e.callPlayer("setMuted", !0)
            }
            )),
            h(y(e), "unmute", (function() {
                e.callPlayer("setMuted", !1)
            }
            )),
            e
        }
        return t = d,
        (n = [{
            key: "componentDidMount",
            value: function() {
                this.props.onMount && this.props.onMount(this)
            }
        }, {
            key: "load",
            value: function(e, t) {
                var n = this
                  , r = this.props
                  , i = r.playsinline
                  , u = r.onError
                  , c = r.config
                  , s = r.controls
                  , f = a.MATCH_URL_TWITCH_CHANNEL.test(e)
                  , p = f ? e.match(a.MATCH_URL_TWITCH_CHANNEL)[1] : e.match(a.MATCH_URL_TWITCH_VIDEO)[1];
                t ? f ? this.player.setChannel(p) : this.player.setVideo("v" + p) : (0,
                o.getSDK)("https://player.twitch.tv/js/embed/v1.js", "Twitch").then((function(t) {
                    n.player = new t.Player(n.playerID,function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? l(Object(n), !0).forEach((function(t) {
                                h(e, t, n[t])
                            }
                            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }
                            ))
                        }
                        return e
                    }({
                        video: f ? "" : p,
                        channel: f ? p : "",
                        height: "100%",
                        width: "100%",
                        playsinline: i,
                        autoplay: n.props.playing,
                        muted: n.props.muted,
                        controls: !!f || s,
                        time: (0,
                        o.parseStartTime)(e)
                    }, c.options));
                    var r = t.Player
                      , a = r.READY
                      , u = r.PLAYING
                      , d = r.PAUSE
                      , y = r.ENDED
                      , v = r.ONLINE
                      , m = r.OFFLINE;
                    n.player.addEventListener(a, n.props.onReady),
                    n.player.addEventListener(u, n.props.onPlay),
                    n.player.addEventListener(d, n.props.onPause),
                    n.player.addEventListener(y, n.props.onEnded),
                    n.player.addEventListener(v, n.props.onLoaded),
                    n.player.addEventListener(m, n.props.onLoaded)
                }
                ), u)
            }
        }, {
            key: "play",
            value: function() {
                this.callPlayer("play")
            }
        }, {
            key: "pause",
            value: function() {
                this.callPlayer("pause")
            }
        }, {
            key: "stop",
            value: function() {
                this.callPlayer("pause")
            }
        }, {
            key: "seekTo",
            value: function(e) {
                this.callPlayer("seek", e)
            }
        }, {
            key: "setVolume",
            value: function(e) {
                this.callPlayer("setVolume", e)
            }
        }, {
            key: "getDuration",
            value: function() {
                return this.callPlayer("getDuration")
            }
        }, {
            key: "getCurrentTime",
            value: function() {
                return this.callPlayer("getCurrentTime")
            }
        }, {
            key: "getSecondsLoaded",
            value: function() {
                return null
            }
        }, {
            key: "render",
            value: function() {
                return r.default.createElement("div", {
                    style: {
                        width: "100%",
                        height: "100%"
                    },
                    id: this.playerID
                })
            }
        }]) && s(t.prototype, n),
        i && s(t, i),
        d
    }(r.Component);
    t.default = g,
    h(g, "displayName", "Twitch"),
    h(g, "canPlay", a.canPlay.twitch),
    h(g, "loopOnEnded", !0)
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = function(e) {
        if (e && e.__esModule)
            return e;
        if (null === e || "object" !== u(e) && "function" !== typeof e)
            return {
                default: e
            };
        var t = i();
        if (t && t.has(e))
            return t.get(e);
        var n = {}
          , r = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
                var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
            }
        n.default = e,
        t && t.set(e, n);
        return n
    }(n(0))
      , o = n(8)
      , a = n(9);
    function i() {
        if ("function" !== typeof WeakMap)
            return null;
        var e = new WeakMap;
        return i = function() {
            return e
        }
        ,
        e
    }
    function u(e) {
        return (u = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function c(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? l(Object(n), !0).forEach((function(t) {
                b(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function s(e, t) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, t) {
            if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(e)))
                return;
            var n = []
              , r = !0
              , o = !1
              , a = void 0;
            try {
                for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value),
                !t || n.length !== t); r = !0)
                    ;
            } catch (l) {
                o = !0,
                a = l
            } finally {
                try {
                    r || null == u.return || u.return()
                } finally {
                    if (o)
                        throw a
                }
            }
            return n
        }(e, t) || function(e, t) {
            if (!e)
                return;
            if ("string" === typeof e)
                return f(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n)
                return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                return f(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function f(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    function p(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function d(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    function y(e, t) {
        return (y = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t,
            e
        }
        )(e, t)
    }
    function v(e) {
        var t = function() {
            if ("undefined" === typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" === typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var n, r = g(e);
            if (t) {
                var o = g(this).constructor;
                n = Reflect.construct(r, arguments, o)
            } else
                n = r.apply(this, arguments);
            return h(this, n)
        }
    }
    function h(e, t) {
        return !t || "object" !== u(t) && "function" !== typeof t ? m(e) : t
    }
    function m(e) {
        if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function g(e) {
        return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        )(e)
    }
    function b(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    var w = function(e) {
        !function(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && y(e, t)
        }(l, e);
        var t, n, i, u = v(l);
        function l() {
            var e;
            p(this, l);
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                n[r] = arguments[r];
            return b(m(e = u.call.apply(u, [this].concat(n))), "callPlayer", o.callPlayer),
            b(m(e), "onDurationChange", (function() {
                var t = e.getDuration();
                e.props.onDuration(t)
            }
            )),
            b(m(e), "mute", (function() {
                e.callPlayer("setMuted", !0)
            }
            )),
            b(m(e), "unmute", (function() {
                e.callPlayer("setMuted", !1)
            }
            )),
            b(m(e), "ref", (function(t) {
                e.container = t
            }
            )),
            e
        }
        return t = l,
        (n = [{
            key: "componentDidMount",
            value: function() {
                this.props.onMount && this.props.onMount(this)
            }
        }, {
            key: "load",
            value: function(e) {
                var t = this
                  , n = this.props
                  , r = n.controls
                  , i = n.config
                  , u = n.onError
                  , l = n.playing
                  , f = s(e.match(a.MATCH_URL_DAILYMOTION), 2)[1];
                this.player ? this.player.load(f, {
                    start: (0,
                    o.parseStartTime)(e),
                    autoplay: l
                }) : (0,
                o.getSDK)("https://api.dmcdn.net/all.js", "DM", "dmAsyncInit", (function(e) {
                    return e.player
                }
                )).then((function(n) {
                    if (t.container) {
                        var a = n.player;
                        t.player = new a(t.container,{
                            width: "100%",
                            height: "100%",
                            video: f,
                            params: c({
                                controls: r,
                                autoplay: t.props.playing,
                                mute: t.props.muted,
                                start: (0,
                                o.parseStartTime)(e),
                                origin: window.location.origin
                            }, i.params),
                            events: {
                                apiready: t.props.onReady,
                                seeked: function() {
                                    return t.props.onSeek(t.player.currentTime)
                                },
                                video_end: t.props.onEnded,
                                durationchange: t.onDurationChange,
                                pause: t.props.onPause,
                                playing: t.props.onPlay,
                                waiting: t.props.onBuffer,
                                error: function(e) {
                                    return u(e)
                                }
                            }
                        })
                    }
                }
                ), u)
            }
        }, {
            key: "play",
            value: function() {
                this.callPlayer("play")
            }
        }, {
            key: "pause",
            value: function() {
                this.callPlayer("pause")
            }
        }, {
            key: "stop",
            value: function() {}
        }, {
            key: "seekTo",
            value: function(e) {
                this.callPlayer("seek", e)
            }
        }, {
            key: "setVolume",
            value: function(e) {
                this.callPlayer("setVolume", e)
            }
        }, {
            key: "getDuration",
            value: function() {
                return this.player.duration || null
            }
        }, {
            key: "getCurrentTime",
            value: function() {
                return this.player.currentTime
            }
        }, {
            key: "getSecondsLoaded",
            value: function() {
                return this.player.bufferedTime
            }
        }, {
            key: "render",
            value: function() {
                var e = {
                    width: "100%",
                    height: "100%",
                    display: this.props.display
                };
                return r.default.createElement("div", {
                    style: e
                }, r.default.createElement("div", {
                    ref: this.ref
                }))
            }
        }]) && d(t.prototype, n),
        i && d(t, i),
        l
    }(r.Component);
    t.default = w,
    b(w, "displayName", "DailyMotion"),
    b(w, "canPlay", a.canPlay.dailymotion),
    b(w, "loopOnEnded", !0)
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = function(e) {
        if (e && e.__esModule)
            return e;
        if (null === e || "object" !== u(e) && "function" !== typeof e)
            return {
                default: e
            };
        var t = i();
        if (t && t.has(e))
            return t.get(e);
        var n = {}
          , r = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
                var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
            }
        n.default = e,
        t && t.set(e, n);
        return n
    }(n(0))
      , o = n(8)
      , a = n(9);
    function i() {
        if ("function" !== typeof WeakMap)
            return null;
        var e = new WeakMap;
        return i = function() {
            return e
        }
        ,
        e
    }
    function u(e) {
        return (u = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function c(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? l(Object(n), !0).forEach((function(t) {
                m(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function s(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function f(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    function p(e, t) {
        return (p = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t,
            e
        }
        )(e, t)
    }
    function d(e) {
        var t = function() {
            if ("undefined" === typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" === typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var n, r = h(e);
            if (t) {
                var o = h(this).constructor;
                n = Reflect.construct(r, arguments, o)
            } else
                n = r.apply(this, arguments);
            return y(this, n)
        }
    }
    function y(e, t) {
        return !t || "object" !== u(t) && "function" !== typeof t ? v(e) : t
    }
    function v(e) {
        if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function h(e) {
        return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        )(e)
    }
    function m(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    var g = function(e) {
        !function(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && p(e, t)
        }(l, e);
        var t, n, i, u = d(l);
        function l() {
            var e;
            s(this, l);
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                n[r] = arguments[r];
            return m(v(e = u.call.apply(u, [this].concat(n))), "callPlayer", o.callPlayer),
            m(v(e), "duration", null),
            m(v(e), "currentTime", null),
            m(v(e), "secondsLoaded", null),
            m(v(e), "mute", (function() {}
            )),
            m(v(e), "unmute", (function() {}
            )),
            m(v(e), "ref", (function(t) {
                e.iframe = t
            }
            )),
            e
        }
        return t = l,
        (n = [{
            key: "componentDidMount",
            value: function() {
                this.props.onMount && this.props.onMount(this)
            }
        }, {
            key: "load",
            value: function(e) {
                var t = this;
                (0,
                o.getSDK)("https://widget.mixcloud.com/media/js/widgetApi.js", "Mixcloud").then((function(e) {
                    t.player = e.PlayerWidget(t.iframe),
                    t.player.ready.then((function() {
                        t.player.events.play.on(t.props.onPlay),
                        t.player.events.pause.on(t.props.onPause),
                        t.player.events.ended.on(t.props.onEnded),
                        t.player.events.error.on(t.props.error),
                        t.player.events.progress.on((function(e, n) {
                            t.currentTime = e,
                            t.duration = n
                        }
                        )),
                        t.props.onReady()
                    }
                    ))
                }
                ), this.props.onError)
            }
        }, {
            key: "play",
            value: function() {
                this.callPlayer("play")
            }
        }, {
            key: "pause",
            value: function() {
                this.callPlayer("pause")
            }
        }, {
            key: "stop",
            value: function() {}
        }, {
            key: "seekTo",
            value: function(e) {
                this.callPlayer("seek", e)
            }
        }, {
            key: "setVolume",
            value: function(e) {}
        }, {
            key: "getDuration",
            value: function() {
                return this.duration
            }
        }, {
            key: "getCurrentTime",
            value: function() {
                return this.currentTime
            }
        }, {
            key: "getSecondsLoaded",
            value: function() {
                return null
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props
                  , t = e.url
                  , n = e.config
                  , i = t.match(a.MATCH_URL_MIXCLOUD)[1]
                  , u = (0,
                o.queryString)(c(c({}, n.options), {}, {
                    feed: "/".concat(i, "/")
                }));
                return r.default.createElement("iframe", {
                    key: i,
                    ref: this.ref,
                    style: {
                        width: "100%",
                        height: "100%"
                    },
                    src: "https://www.mixcloud.com/widget/iframe/?".concat(u),
                    frameBorder: "0"
                })
            }
        }]) && f(t.prototype, n),
        i && f(t, i),
        l
    }(r.Component);
    t.default = g,
    m(g, "displayName", "Mixcloud"),
    m(g, "canPlay", a.canPlay.mixcloud),
    m(g, "loopOnEnded", !0)
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = function(e) {
        if (e && e.__esModule)
            return e;
        if (null === e || "object" !== u(e) && "function" !== typeof e)
            return {
                default: e
            };
        var t = i();
        if (t && t.has(e))
            return t.get(e);
        var n = {}
          , r = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
                var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
            }
        n.default = e,
        t && t.set(e, n);
        return n
    }(n(0))
      , o = n(8)
      , a = n(9);
    function i() {
        if ("function" !== typeof WeakMap)
            return null;
        var e = new WeakMap;
        return i = function() {
            return e
        }
        ,
        e
    }
    function u(e) {
        return (u = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function c(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    function f(e, t) {
        return (f = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t,
            e
        }
        )(e, t)
    }
    function p(e) {
        var t = function() {
            if ("undefined" === typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" === typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var n, r = v(e);
            if (t) {
                var o = v(this).constructor;
                n = Reflect.construct(r, arguments, o)
            } else
                n = r.apply(this, arguments);
            return d(this, n)
        }
    }
    function d(e, t) {
        return !t || "object" !== u(t) && "function" !== typeof t ? y(e) : t
    }
    function y(e) {
        if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function v(e) {
        return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        )(e)
    }
    function h(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    var m = function(e) {
        !function(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && f(e, t)
        }(d, e);
        var t, n, i, u = p(d);
        function d() {
            var e;
            c(this, d);
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                n[r] = arguments[r];
            return h(y(e = u.call.apply(u, [this].concat(n))), "callPlayer", o.callPlayer),
            h(y(e), "mute", (function() {
                e.setVolume(0)
            }
            )),
            h(y(e), "unmute", (function() {
                null !== e.props.volume && e.setVolume(e.props.volume)
            }
            )),
            h(y(e), "ref", (function(t) {
                e.container = t
            }
            )),
            e
        }
        return t = d,
        (n = [{
            key: "componentDidMount",
            value: function() {
                this.props.onMount && this.props.onMount(this)
            }
        }, {
            key: "load",
            value: function(e) {
                var t = this
                  , n = this.props
                  , r = n.playing
                  , i = n.config
                  , u = n.onError
                  , c = n.onDuration
                  , s = e && e.match(a.MATCH_URL_VIDYARD)[1];
                this.player && this.stop(),
                (0,
                o.getSDK)("https://play.vidyard.com/embed/v4.js", "VidyardV4", "onVidyardAPI").then((function(e) {
                    t.container && (e.api.addReadyListener((function(e, n) {
                        t.player = n,
                        t.player.on("ready", t.props.onReady),
                        t.player.on("play", t.props.onPlay),
                        t.player.on("pause", t.props.onPause),
                        t.player.on("seek", t.props.onSeek),
                        t.player.on("playerComplete", t.props.onEnded)
                    }
                    ), s),
                    e.api.renderPlayer(function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? l(Object(n), !0).forEach((function(t) {
                                h(e, t, n[t])
                            }
                            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }
                            ))
                        }
                        return e
                    }({
                        uuid: s,
                        container: t.container,
                        autoplay: r ? 1 : 0
                    }, i.options)),
                    e.api.getPlayerMetadata(s).then((function(e) {
                        t.duration = e.length_in_seconds,
                        c(e.length_in_seconds)
                    }
                    )))
                }
                ), u)
            }
        }, {
            key: "play",
            value: function() {
                this.callPlayer("play")
            }
        }, {
            key: "pause",
            value: function() {
                this.callPlayer("pause")
            }
        }, {
            key: "stop",
            value: function() {
                window.VidyardV4.api.destroyPlayer(this.player)
            }
        }, {
            key: "seekTo",
            value: function(e) {
                this.callPlayer("seek", e)
            }
        }, {
            key: "setVolume",
            value: function(e) {
                this.callPlayer("setVolume", e)
            }
        }, {
            key: "setPlaybackRate",
            value: function(e) {
                this.callPlayer("setPlaybackSpeed", e)
            }
        }, {
            key: "getDuration",
            value: function() {
                return this.duration
            }
        }, {
            key: "getCurrentTime",
            value: function() {
                return this.callPlayer("currentTime")
            }
        }, {
            key: "getSecondsLoaded",
            value: function() {
                return null
            }
        }, {
            key: "render",
            value: function() {
                var e = {
                    width: "100%",
                    height: "100%",
                    display: this.props.display
                };
                return r.default.createElement("div", {
                    style: e
                }, r.default.createElement("div", {
                    ref: this.ref
                }))
            }
        }]) && s(t.prototype, n),
        i && s(t, i),
        d
    }(r.Component);
    t.default = m,
    h(m, "displayName", "Vidyard"),
    h(m, "canPlay", a.canPlay.vidyard)
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = function(e) {
        if (e && e.__esModule)
            return e;
        if (null === e || "object" !== u(e) && "function" !== typeof e)
            return {
                default: e
            };
        var t = i();
        if (t && t.has(e))
            return t.get(e);
        var n = {}
          , r = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
                var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
            }
        n.default = e,
        t && t.set(e, n);
        return n
    }(n(0))
      , o = n(8)
      , a = n(9);
    function i() {
        if ("function" !== typeof WeakMap)
            return null;
        var e = new WeakMap;
        return i = function() {
            return e
        }
        ,
        e
    }
    function u(e) {
        return (u = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function l() {
        return (l = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        ).apply(this, arguments)
    }
    function c(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    function f(e, t) {
        return (f = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t,
            e
        }
        )(e, t)
    }
    function p(e) {
        var t = function() {
            if ("undefined" === typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" === typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var n, r = v(e);
            if (t) {
                var o = v(this).constructor;
                n = Reflect.construct(r, arguments, o)
            } else
                n = r.apply(this, arguments);
            return d(this, n)
        }
    }
    function d(e, t) {
        return !t || "object" !== u(t) && "function" !== typeof t ? y(e) : t
    }
    function y(e) {
        if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function v(e) {
        return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        )(e)
    }
    function h(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    var m = "undefined" !== typeof navigator
      , g = m && "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1
      , b = m && (/iPad|iPhone|iPod/.test(navigator.userAgent) || g) && !window.MSStream
      , w = /www\.dropbox\.com\/.+/
      , O = /https:\/\/watch\.cloudflarestream\.com\/([a-z0-9]+)/
      , k = function(e) {
        !function(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && f(e, t)
        }(d, e);
        var t, n, i, u = p(d);
        function d() {
            var e;
            c(this, d);
            for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
                n[a] = arguments[a];
            return h(y(e = u.call.apply(u, [this].concat(n))), "onReady", (function() {
                var t;
                return (t = e.props).onReady.apply(t, arguments)
            }
            )),
            h(y(e), "onPlay", (function() {
                var t;
                return (t = e.props).onPlay.apply(t, arguments)
            }
            )),
            h(y(e), "onBuffer", (function() {
                var t;
                return (t = e.props).onBuffer.apply(t, arguments)
            }
            )),
            h(y(e), "onBufferEnd", (function() {
                var t;
                return (t = e.props).onBufferEnd.apply(t, arguments)
            }
            )),
            h(y(e), "onPause", (function() {
                var t;
                return (t = e.props).onPause.apply(t, arguments)
            }
            )),
            h(y(e), "onEnded", (function() {
                var t;
                return (t = e.props).onEnded.apply(t, arguments)
            }
            )),
            h(y(e), "onError", (function() {
                var t;
                return (t = e.props).onError.apply(t, arguments)
            }
            )),
            h(y(e), "onEnablePIP", (function() {
                var t;
                return (t = e.props).onEnablePIP.apply(t, arguments)
            }
            )),
            h(y(e), "onDisablePIP", (function(t) {
                var n = e.props
                  , r = n.onDisablePIP
                  , o = n.playing;
                r(t),
                o && e.play()
            }
            )),
            h(y(e), "onPresentationModeChange", (function(t) {
                if (e.player && (0,
                o.supportsWebKitPresentationMode)(e.player)) {
                    var n = e.player.webkitPresentationMode;
                    "picture-in-picture" === n ? e.onEnablePIP(t) : "inline" === n && e.onDisablePIP(t)
                }
            }
            )),
            h(y(e), "onSeek", (function(t) {
                e.props.onSeek(t.target.currentTime)
            }
            )),
            h(y(e), "mute", (function() {
                e.player.muted = !0
            }
            )),
            h(y(e), "unmute", (function() {
                e.player.muted = !1
            }
            )),
            h(y(e), "renderSourceElement", (function(e, t) {
                return "string" === typeof e ? r.default.createElement("source", {
                    key: t,
                    src: e
                }) : r.default.createElement("source", l({
                    key: t
                }, e))
            }
            )),
            h(y(e), "renderTrack", (function(e, t) {
                return r.default.createElement("track", l({
                    key: t
                }, e))
            }
            )),
            h(y(e), "ref", (function(t) {
                e.player && (e.prevPlayer = e.player),
                e.player = t
            }
            )),
            e
        }
        return t = d,
        (n = [{
            key: "componentDidMount",
            value: function() {
                this.props.onMount && this.props.onMount(this),
                this.addListeners(this.player),
                b && this.player.load()
            }
        }, {
            key: "componentDidUpdate",
            value: function(e) {
                this.shouldUseAudio(this.props) !== this.shouldUseAudio(e) && (this.removeListeners(this.prevPlayer, e.url),
                this.addListeners(this.player))
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this.removeListeners(this.player),
                this.hls && this.hls.destroy()
            }
        }, {
            key: "addListeners",
            value: function(e) {
                var t = this.props
                  , n = t.url
                  , r = t.playsinline;
                e.addEventListener("play", this.onPlay),
                e.addEventListener("waiting", this.onBuffer),
                e.addEventListener("playing", this.onBufferEnd),
                e.addEventListener("pause", this.onPause),
                e.addEventListener("seeked", this.onSeek),
                e.addEventListener("ended", this.onEnded),
                e.addEventListener("error", this.onError),
                e.addEventListener("enterpictureinpicture", this.onEnablePIP),
                e.addEventListener("leavepictureinpicture", this.onDisablePIP),
                e.addEventListener("webkitpresentationmodechanged", this.onPresentationModeChange),
                this.shouldUseHLS(n) || e.addEventListener("canplay", this.onReady),
                r && (e.setAttribute("playsinline", ""),
                e.setAttribute("webkit-playsinline", ""),
                e.setAttribute("x5-playsinline", ""))
            }
        }, {
            key: "removeListeners",
            value: function(e, t) {
                e.removeEventListener("canplay", this.onReady),
                e.removeEventListener("play", this.onPlay),
                e.removeEventListener("waiting", this.onBuffer),
                e.removeEventListener("playing", this.onBufferEnd),
                e.removeEventListener("pause", this.onPause),
                e.removeEventListener("seeked", this.onSeek),
                e.removeEventListener("ended", this.onEnded),
                e.removeEventListener("error", this.onError),
                e.removeEventListener("enterpictureinpicture", this.onEnablePIP),
                e.removeEventListener("leavepictureinpicture", this.onDisablePIP),
                e.removeEventListener("webkitpresentationmodechanged", this.onPresentationModeChange),
                this.shouldUseHLS(t) || e.removeEventListener("canplay", this.onReady)
            }
        }, {
            key: "shouldUseAudio",
            value: function(e) {
                return !e.config.forceVideo && !e.config.attributes.poster && (a.AUDIO_EXTENSIONS.test(e.url) || e.config.forceAudio)
            }
        }, {
            key: "shouldUseHLS",
            value: function(e) {
                return !!this.props.config.forceHLS || !b && (a.HLS_EXTENSIONS.test(e) || O.test(e))
            }
        }, {
            key: "shouldUseDASH",
            value: function(e) {
                return a.DASH_EXTENSIONS.test(e) || this.props.config.forceDASH
            }
        }, {
            key: "shouldUseFLV",
            value: function(e) {
                return a.FLV_EXTENSIONS.test(e) || this.props.config.forceFLV
            }
        }, {
            key: "load",
            value: function(e) {
                var t = this
                  , n = this.props.config
                  , r = n.hlsVersion
                  , a = n.hlsOptions
                  , i = n.dashVersion
                  , u = n.flvVersion;
                if (this.hls && this.hls.destroy(),
                this.dash && this.dash.reset(),
                this.shouldUseHLS(e) && (0,
                o.getSDK)("https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js".replace("VERSION", r), "Hls").then((function(n) {
                    if (t.hls = new n(a),
                    t.hls.on(n.Events.MANIFEST_PARSED, (function() {
                        t.props.onReady()
                    }
                    )),
                    t.hls.on(n.Events.ERROR, (function(e, r) {
                        t.props.onError(e, r, t.hls, n)
                    }
                    )),
                    O.test(e)) {
                        var r = e.match(O)[1];
                        t.hls.loadSource("https://videodelivery.net/{id}/manifest/video.m3u8".replace("{id}", r))
                    } else
                        t.hls.loadSource(e);
                    t.hls.attachMedia(t.player),
                    t.props.onLoaded()
                }
                )),
                this.shouldUseDASH(e) && (0,
                o.getSDK)("https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js".replace("VERSION", i), "dashjs").then((function(n) {
                    t.dash = n.MediaPlayer().create(),
                    t.dash.initialize(t.player, e, t.props.playing),
                    t.dash.on("error", t.props.onError),
                    parseInt(i) < 3 ? t.dash.getDebug().setLogToBrowserConsole(!1) : t.dash.updateSettings({
                        debug: {
                            logLevel: n.Debug.LOG_LEVEL_NONE
                        }
                    }),
                    t.props.onLoaded()
                }
                )),
                this.shouldUseFLV(e) && (0,
                o.getSDK)("https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js".replace("VERSION", u), "flvjs").then((function(n) {
                    t.flv = n.createPlayer({
                        type: "flv",
                        url: e
                    }),
                    t.flv.attachMediaElement(t.player),
                    t.flv.load(),
                    t.props.onLoaded()
                }
                )),
                e instanceof Array)
                    this.player.load();
                else if ((0,
                o.isMediaStream)(e))
                    try {
                        this.player.srcObject = e
                    } catch (l) {
                        this.player.src = window.URL.createObjectURL(e)
                    }
            }
        }, {
            key: "play",
            value: function() {
                var e = this.player.play();
                e && e.catch(this.props.onError)
            }
        }, {
            key: "pause",
            value: function() {
                this.player.pause()
            }
        }, {
            key: "stop",
            value: function() {
                this.player.removeAttribute("src"),
                this.dash && this.dash.reset()
            }
        }, {
            key: "seekTo",
            value: function(e) {
                this.player.currentTime = e
            }
        }, {
            key: "setVolume",
            value: function(e) {
                this.player.volume = e
            }
        }, {
            key: "enablePIP",
            value: function() {
                this.player.requestPictureInPicture && document.pictureInPictureElement !== this.player ? this.player.requestPictureInPicture() : (0,
                o.supportsWebKitPresentationMode)(this.player) && "picture-in-picture" !== this.player.webkitPresentationMode && this.player.webkitSetPresentationMode("picture-in-picture")
            }
        }, {
            key: "disablePIP",
            value: function() {
                document.exitPictureInPicture && document.pictureInPictureElement === this.player ? document.exitPictureInPicture() : (0,
                o.supportsWebKitPresentationMode)(this.player) && "inline" !== this.player.webkitPresentationMode && this.player.webkitSetPresentationMode("inline")
            }
        }, {
            key: "setPlaybackRate",
            value: function(e) {
                this.player.playbackRate = e
            }
        }, {
            key: "getDuration",
            value: function() {
                if (!this.player)
                    return null;
                var e = this.player
                  , t = e.duration
                  , n = e.seekable;
                return t === 1 / 0 && n.length > 0 ? n.end(n.length - 1) : t
            }
        }, {
            key: "getCurrentTime",
            value: function() {
                return this.player ? this.player.currentTime : null
            }
        }, {
            key: "getSecondsLoaded",
            value: function() {
                if (!this.player)
                    return null;
                var e = this.player.buffered;
                if (0 === e.length)
                    return 0;
                var t = e.end(e.length - 1)
                  , n = this.getDuration();
                return t > n ? n : t
            }
        }, {
            key: "getSource",
            value: function(e) {
                var t = this.shouldUseHLS(e)
                  , n = this.shouldUseDASH(e)
                  , r = this.shouldUseFLV(e);
                if (!(e instanceof Array || (0,
                o.isMediaStream)(e) || t || n || r))
                    return w.test(e) ? e.replace("www.dropbox.com", "dl.dropboxusercontent.com") : e
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props
                  , t = e.url
                  , n = e.playing
                  , o = e.loop
                  , a = e.controls
                  , i = e.muted
                  , u = e.config
                  , c = e.width
                  , s = e.height
                  , f = this.shouldUseAudio(this.props) ? "audio" : "video"
                  , p = {
                    width: "auto" === c ? c : "100%",
                    height: "auto" === s ? s : "100%"
                };
                return r.default.createElement(f, l({
                    ref: this.ref,
                    src: this.getSource(t),
                    style: p,
                    preload: "auto",
                    autoPlay: n || void 0,
                    controls: a,
                    muted: i,
                    loop: o
                }, u.attributes), t instanceof Array && t.map(this.renderSourceElement), u.tracks.map(this.renderTrack))
            }
        }]) && s(t.prototype, n),
        i && s(t, i),
        d
    }(r.Component);
    t.default = k,
    h(k, "displayName", "FilePlayer"),
    h(k, "canPlay", a.canPlay.file)
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.createReactPlayer = void 0;
    var r = _(n(0))
      , o = s(n(29))
      , a = s(n(61))
      , i = s(n(30))
      , u = n(31)
      , l = n(8)
      , c = s(n(65));
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function f(e) {
        return (f = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function p(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function d(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? p(Object(n), !0).forEach((function(t) {
                E(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function y() {
        return (y = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        ).apply(this, arguments)
    }
    function v(e) {
        return function(e) {
            if (Array.isArray(e))
                return h(e)
        }(e) || function(e) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e))
                return Array.from(e)
        }(e) || function(e, t) {
            if (!e)
                return;
            if ("string" === typeof e)
                return h(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n)
                return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                return h(e, t)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function h(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    function m(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function g(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    function b(e, t) {
        return (b = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t,
            e
        }
        )(e, t)
    }
    function w(e) {
        var t = function() {
            if ("undefined" === typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" === typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var n, r = S(e);
            if (t) {
                var o = S(this).constructor;
                n = Reflect.construct(r, arguments, o)
            } else
                n = r.apply(this, arguments);
            return O(this, n)
        }
    }
    function O(e, t) {
        return !t || "object" !== f(t) && "function" !== typeof t ? k(e) : t
    }
    function k(e) {
        if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function S(e) {
        return (S = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        )(e)
    }
    function E(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function P() {
        if ("function" !== typeof WeakMap)
            return null;
        var e = new WeakMap;
        return P = function() {
            return e
        }
        ,
        e
    }
    function _(e) {
        if (e && e.__esModule)
            return e;
        if (null === e || "object" !== f(e) && "function" !== typeof e)
            return {
                default: e
            };
        var t = P();
        if (t && t.has(e))
            return t.get(e);
        var n = {}
          , r = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
                var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
            }
        return n.default = e,
        t && t.set(e, n),
        n
    }
    var x = (0,
    r.lazy)((function() {
        return Promise.resolve().then((function() {
            return _(n(66))
        }
        ))
    }
    ))
      , j = "undefined" !== typeof window && window.document
      , T = Object.keys(u.propTypes)
      , A = j ? r.Suspense : function() {
        return null
    }
      , C = [];
    t.createReactPlayer = function(e, t) {
        var n, s;
        return s = n = function(n) {
            !function(e, t) {
                if ("function" !== typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && b(e, t)
            }(O, n);
            var s, f, p, h = w(O);
            function O() {
                var n;
                m(this, O);
                for (var i = arguments.length, s = new Array(i), f = 0; f < i; f++)
                    s[f] = arguments[f];
                return E(k(n = h.call.apply(h, [this].concat(s))), "state", {
                    showPreview: !!n.props.light
                }),
                E(k(n), "references", {
                    wrapper: function(e) {
                        n.wrapper = e
                    },
                    player: function(e) {
                        n.player = e
                    }
                }),
                E(k(n), "handleClickPreview", (function() {
                    n.setState({
                        showPreview: !1
                    })
                }
                )),
                E(k(n), "showPreview", (function() {
                    n.setState({
                        showPreview: !0
                    })
                }
                )),
                E(k(n), "getDuration", (function() {
                    return n.player ? n.player.getDuration() : null
                }
                )),
                E(k(n), "getCurrentTime", (function() {
                    return n.player ? n.player.getCurrentTime() : null
                }
                )),
                E(k(n), "getSecondsLoaded", (function() {
                    return n.player ? n.player.getSecondsLoaded() : null
                }
                )),
                E(k(n), "getInternalPlayer", (function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "player";
                    return n.player ? n.player.getInternalPlayer(e) : null
                }
                )),
                E(k(n), "seekTo", (function(e, t) {
                    if (!n.player)
                        return null;
                    n.player.seekTo(e, t)
                }
                )),
                E(k(n), "handleReady", (function() {
                    n.props.onReady(k(n))
                }
                )),
                E(k(n), "getActivePlayer", (0,
                a.default)((function(n) {
                    for (var r = 0, o = [].concat(C, v(e)); r < o.length; r++) {
                        var a = o[r];
                        if (a.canPlay(n))
                            return a
                    }
                    return t || null
                }
                ))),
                E(k(n), "getConfig", (0,
                a.default)((function(e, t) {
                    var r = n.props.config;
                    return o.default.all([u.defaultProps.config, u.defaultProps.config[t] || {}, r, r[t] || {}])
                }
                ))),
                E(k(n), "getAttributes", (0,
                a.default)((function(e) {
                    return (0,
                    l.omit)(n.props, T)
                }
                ))),
                E(k(n), "renderActivePlayer", (function(e) {
                    if (!e)
                        return null;
                    var t = n.getActivePlayer(e);
                    if (!t)
                        return null;
                    var o = n.getConfig(e, t.key);
                    return r.default.createElement(c.default, y({}, n.props, {
                        key: t.key,
                        ref: n.references.player,
                        config: o,
                        activePlayer: t.lazyPlayer || t,
                        onReady: n.handleReady
                    }))
                }
                )),
                n
            }
            return s = O,
            (f = [{
                key: "shouldComponentUpdate",
                value: function(e, t) {
                    return !(0,
                    i.default)(this.props, e) || !(0,
                    i.default)(this.state, t)
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    var t = this.props.light;
                    !e.light && t && this.setState({
                        showPreview: !0
                    }),
                    e.light && !t && this.setState({
                        showPreview: !1
                    })
                }
            }, {
                key: "renderPreview",
                value: function(e) {
                    if (!e)
                        return null;
                    var t = this.props
                      , n = t.light
                      , o = t.playIcon;
                    return r.default.createElement(x, {
                        url: e,
                        light: n,
                        playIcon: o,
                        onClick: this.handleClickPreview
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.url
                      , n = e.style
                      , o = e.width
                      , a = e.height
                      , i = e.wrapper
                      , u = this.state.showPreview
                      , l = this.getAttributes(t);
                    return r.default.createElement(i, y({
                        ref: this.references.wrapper,
                        style: d(d({}, n), {}, {
                            width: o,
                            height: a
                        })
                    }, l), r.default.createElement(A, {
                        fallback: null
                    }, u ? this.renderPreview(t) : this.renderActivePlayer(t)))
                }
            }]) && g(s.prototype, f),
            p && g(s, p),
            O
        }(r.Component),
        E(n, "displayName", "ReactPlayer"),
        E(n, "propTypes", u.propTypes),
        E(n, "defaultProps", u.defaultProps),
        E(n, "addCustomPlayer", (function(e) {
            C.push(e)
        }
        )),
        E(n, "removeCustomPlayers", (function() {
            C.length = 0
        }
        )),
        E(n, "canPlay", (function(t) {
            for (var n = 0, r = [].concat(C, v(e)); n < r.length; n++) {
                if (r[n].canPlay(t))
                    return !0
            }
            return !1
        }
        )),
        E(n, "canEnablePIP", (function(t) {
            for (var n = 0, r = [].concat(C, v(e)); n < r.length; n++) {
                var o = r[n];
                if (o.canEnablePIP && o.canEnablePIP(t))
                    return !0
            }
            return !1
        }
        )),
        s
    }
}
, function(e, t, n) {
    "use strict";
    function r(e, t) {
        if (e.length !== t.length)
            return !1;
        for (var n = 0; n < e.length; n++)
            if (e[n] !== t[n])
                return !1;
        return !0
    }
    n.r(t),
    t.default = function(e, t) {
        var n;
        void 0 === t && (t = r);
        var o, a = [], i = !1;
        return function() {
            for (var r = [], u = 0; u < arguments.length; u++)
                r[u] = arguments[u];
            return i && n === this && t(r, a) || (o = e.apply(this, r),
            i = !0,
            n = this,
            a = r),
            o
        }
    }
}
, function(e, t, n) {
    e.exports = n(63)()
}
, function(e, t, n) {
    "use strict";
    var r = n(64);
    function o() {}
    function a() {}
    a.resetWarningCache = o,
    e.exports = function() {
        function e(e, t, n, o, a, i) {
            if (i !== r) {
                var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                throw u.name = "Invariant Violation",
                u
            }
        }
        function t() {
            return e
        }
        e.isRequired = e;
        var n = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: a,
            resetWarningCache: o
        };
        return n.PropTypes = n,
        n
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r, o = function(e) {
        if (e && e.__esModule)
            return e;
        if (null === e || "object" !== l(e) && "function" !== typeof e)
            return {
                default: e
            };
        var t = u();
        if (t && t.has(e))
            return t.get(e);
        var n = {}
          , r = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
                var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
            }
        n.default = e,
        t && t.set(e, n);
        return n
    }(n(0)), a = (r = n(30)) && r.__esModule ? r : {
        default: r
    }, i = n(31);
    function u() {
        if ("function" !== typeof WeakMap)
            return null;
        var e = new WeakMap;
        return u = function() {
            return e
        }
        ,
        e
    }
    function l(e) {
        return (l = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function c() {
        return (c = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        ).apply(this, arguments)
    }
    function s(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function f(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    function p(e, t) {
        return (p = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t,
            e
        }
        )(e, t)
    }
    function d(e) {
        var t = function() {
            if ("undefined" === typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" === typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var n, r = h(e);
            if (t) {
                var o = h(this).constructor;
                n = Reflect.construct(r, arguments, o)
            } else
                n = r.apply(this, arguments);
            return y(this, n)
        }
    }
    function y(e, t) {
        return !t || "object" !== l(t) && "function" !== typeof t ? v(e) : t
    }
    function v(e) {
        if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function h(e) {
        return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        )(e)
    }
    function m(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    var g = function(e) {
        !function(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && p(e, t)
        }(u, e);
        var t, n, r, i = d(u);
        function u() {
            var e;
            s(this, u);
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                n[r] = arguments[r];
            return m(v(e = i.call.apply(i, [this].concat(n))), "mounted", !1),
            m(v(e), "isReady", !1),
            m(v(e), "isPlaying", !1),
            m(v(e), "isLoading", !0),
            m(v(e), "loadOnReady", null),
            m(v(e), "startOnPlay", !0),
            m(v(e), "seekOnPlay", null),
            m(v(e), "onDurationCalled", !1),
            m(v(e), "handlePlayerMount", (function(t) {
                e.player = t,
                e.player.load(e.props.url),
                e.progress()
            }
            )),
            m(v(e), "getInternalPlayer", (function(t) {
                return e.player ? e.player[t] : null
            }
            )),
            m(v(e), "progress", (function() {
                if (e.props.url && e.player && e.isReady) {
                    var t = e.getCurrentTime() || 0
                      , n = e.getSecondsLoaded()
                      , r = e.getDuration();
                    if (r) {
                        var o = {
                            playedSeconds: t,
                            played: t / r
                        };
                        null !== n && (o.loadedSeconds = n,
                        o.loaded = n / r),
                        o.playedSeconds === e.prevPlayed && o.loadedSeconds === e.prevLoaded || e.props.onProgress(o),
                        e.prevPlayed = o.playedSeconds,
                        e.prevLoaded = o.loadedSeconds
                    }
                }
                e.progressTimeout = setTimeout(e.progress, e.props.progressFrequency || e.props.progressInterval)
            }
            )),
            m(v(e), "handleReady", (function() {
                if (e.mounted) {
                    e.isReady = !0,
                    e.isLoading = !1;
                    var t = e.props
                      , n = t.onReady
                      , r = t.playing
                      , o = t.volume
                      , a = t.muted;
                    n(),
                    a || null === o || e.player.setVolume(o),
                    e.loadOnReady ? (e.player.load(e.loadOnReady, !0),
                    e.loadOnReady = null) : r && e.player.play(),
                    e.handleDurationCheck()
                }
            }
            )),
            m(v(e), "handlePlay", (function() {
                e.isPlaying = !0,
                e.isLoading = !1;
                var t = e.props
                  , n = t.onStart
                  , r = t.onPlay
                  , o = t.playbackRate;
                e.startOnPlay && (e.player.setPlaybackRate && 1 !== o && e.player.setPlaybackRate(o),
                n(),
                e.startOnPlay = !1),
                r(),
                e.seekOnPlay && (e.seekTo(e.seekOnPlay),
                e.seekOnPlay = null),
                e.handleDurationCheck()
            }
            )),
            m(v(e), "handlePause", (function(t) {
                e.isPlaying = !1,
                e.isLoading || e.props.onPause(t)
            }
            )),
            m(v(e), "handleEnded", (function() {
                var t = e.props
                  , n = t.activePlayer
                  , r = t.loop
                  , o = t.onEnded;
                n.loopOnEnded && r && e.seekTo(0),
                r || (e.isPlaying = !1,
                o())
            }
            )),
            m(v(e), "handleError", (function() {
                var t;
                e.isLoading = !1,
                (t = e.props).onError.apply(t, arguments)
            }
            )),
            m(v(e), "handleDurationCheck", (function() {
                clearTimeout(e.durationCheckTimeout);
                var t = e.getDuration();
                t ? e.onDurationCalled || (e.props.onDuration(t),
                e.onDurationCalled = !0) : e.durationCheckTimeout = setTimeout(e.handleDurationCheck, 100)
            }
            )),
            m(v(e), "handleLoaded", (function() {
                e.isLoading = !1
            }
            )),
            e
        }
        return t = u,
        (n = [{
            key: "componentDidMount",
            value: function() {
                this.mounted = !0
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                clearTimeout(this.progressTimeout),
                clearTimeout(this.durationCheckTimeout),
                this.isReady && this.props.stopOnUnmount && (this.player.stop(),
                this.player.disablePIP && this.player.disablePIP()),
                this.mounted = !1
            }
        }, {
            key: "componentDidUpdate",
            value: function(e) {
                var t = this;
                if (this.player) {
                    var n = this.props
                      , r = n.url
                      , o = n.playing
                      , i = n.volume
                      , u = n.muted
                      , l = n.playbackRate
                      , c = n.pip
                      , s = n.loop
                      , f = n.activePlayer;
                    if (!(0,
                    a.default)(e.url, r)) {
                        if (this.isLoading && !f.forceLoad)
                            return console.warn("ReactPlayer: the attempt to load ".concat(r, " is being deferred until the player has loaded")),
                            void (this.loadOnReady = r);
                        this.isLoading = !0,
                        this.startOnPlay = !0,
                        this.onDurationCalled = !1,
                        this.player.load(r, this.isReady)
                    }
                    e.playing || !o || this.isPlaying || this.player.play(),
                    e.playing && !o && this.isPlaying && this.player.pause(),
                    !e.pip && c && this.player.enablePIP && this.player.enablePIP(),
                    e.pip && !c && this.player.disablePIP && this.player.disablePIP(),
                    e.volume !== i && null !== i && this.player.setVolume(i),
                    e.muted !== u && (u ? this.player.mute() : (this.player.unmute(),
                    null !== i && setTimeout((function() {
                        return t.player.setVolume(i)
                    }
                    )))),
                    e.playbackRate !== l && this.player.setPlaybackRate && this.player.setPlaybackRate(l),
                    e.loop !== s && this.player.setLoop && this.player.setLoop(s)
                }
            }
        }, {
            key: "getDuration",
            value: function() {
                return this.isReady ? this.player.getDuration() : null
            }
        }, {
            key: "getCurrentTime",
            value: function() {
                return this.isReady ? this.player.getCurrentTime() : null
            }
        }, {
            key: "getSecondsLoaded",
            value: function() {
                return this.isReady ? this.player.getSecondsLoaded() : null
            }
        }, {
            key: "seekTo",
            value: function(e, t) {
                var n = this;
                if (!this.isReady && 0 !== e)
                    return this.seekOnPlay = e,
                    void setTimeout((function() {
                        n.seekOnPlay = null
                    }
                    ), 5e3);
                if (t ? "fraction" === t : e > 0 && e < 1) {
                    var r = this.player.getDuration();
                    return r ? void this.player.seekTo(r * e) : void console.warn("ReactPlayer: could not seek using fraction \u2013\xa0duration not yet available")
                }
                this.player.seekTo(e)
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props.activePlayer;
                return e ? o.default.createElement(e, c({}, this.props, {
                    onMount: this.handlePlayerMount,
                    onReady: this.handleReady,
                    onPlay: this.handlePlay,
                    onPause: this.handlePause,
                    onEnded: this.handleEnded,
                    onLoaded: this.handleLoaded,
                    onError: this.handleError
                })) : null
            }
        }]) && f(t.prototype, n),
        r && f(t, r),
        u
    }(o.Component);
    t.default = g,
    m(g, "displayName", "Player"),
    m(g, "propTypes", i.propTypes),
    m(g, "defaultProps", i.defaultProps)
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = function(e) {
        if (e && e.__esModule)
            return e;
        if (null === e || "object" !== a(e) && "function" !== typeof e)
            return {
                default: e
            };
        var t = o();
        if (t && t.has(e))
            return t.get(e);
        var n = {}
          , r = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i)) {
                var u = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                u && (u.get || u.set) ? Object.defineProperty(n, i, u) : n[i] = e[i]
            }
        n.default = e,
        t && t.set(e, n);
        return n
    }(n(0));
    function o() {
        if ("function" !== typeof WeakMap)
            return null;
        var e = new WeakMap;
        return o = function() {
            return e
        }
        ,
        e
    }
    function a(e) {
        return (a = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function u(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? i(Object(n), !0).forEach((function(t) {
                v(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function l(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function c(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    function s(e, t) {
        return (s = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t,
            e
        }
        )(e, t)
    }
    function f(e) {
        var t = function() {
            if ("undefined" === typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" === typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var n, r = y(e);
            if (t) {
                var o = y(this).constructor;
                n = Reflect.construct(r, arguments, o)
            } else
                n = r.apply(this, arguments);
            return p(this, n)
        }
    }
    function p(e, t) {
        return !t || "object" !== a(t) && "function" !== typeof t ? d(e) : t
    }
    function d(e) {
        if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function y(e) {
        return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        )(e)
    }
    function v(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    var h = "64px"
      , m = {}
      , g = function(e) {
        !function(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && s(e, t)
        }(i, e);
        var t, n, o, a = f(i);
        function i() {
            var e;
            l(this, i);
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                n[r] = arguments[r];
            return v(d(e = a.call.apply(a, [this].concat(n))), "mounted", !1),
            v(d(e), "state", {
                image: null
            }),
            v(d(e), "handleKeyPress", (function(t) {
                "Enter" !== t.key && " " !== t.key || e.props.onClick()
            }
            )),
            e
        }
        return t = i,
        (n = [{
            key: "componentDidMount",
            value: function() {
                this.mounted = !0,
                this.fetchImage(this.props)
            }
        }, {
            key: "componentDidUpdate",
            value: function(e) {
                var t = this.props
                  , n = t.url
                  , r = t.light;
                e.url === n && e.light === r || this.fetchImage(this.props)
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this.mounted = !1
            }
        }, {
            key: "fetchImage",
            value: function(e) {
                var t = this
                  , n = e.url
                  , r = e.light;
                if ("string" !== typeof r) {
                    if (!m[n])
                        return this.setState({
                            image: null
                        }),
                        window.fetch("https://noembed.com/embed?url=".concat(n)).then((function(e) {
                            return e.json()
                        }
                        )).then((function(e) {
                            if (e.thumbnail_url && t.mounted) {
                                var r = e.thumbnail_url.replace("height=100", "height=480");
                                t.setState({
                                    image: r
                                }),
                                m[n] = r
                            }
                        }
                        ));
                    this.setState({
                        image: m[n]
                    })
                } else
                    this.setState({
                        image: r
                    })
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props
                  , t = e.onClick
                  , n = e.playIcon
                  , o = this.state.image
                  , a = {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }
                  , i = {
                    preview: u({
                        width: "100%",
                        height: "100%",
                        backgroundImage: o ? "url(".concat(o, ")") : void 0,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        cursor: "pointer"
                    }, a),
                    shadow: u({
                        background: "radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",
                        borderRadius: h,
                        width: h,
                        height: h
                    }, a),
                    playIcon: {
                        borderStyle: "solid",
                        borderWidth: "16px 0 16px 26px",
                        borderColor: "transparent transparent transparent white",
                        marginLeft: "7px"
                    }
                }
                  , l = r.default.createElement("div", {
                    style: i.shadow,
                    className: "react-player__shadow"
                }, r.default.createElement("div", {
                    style: i.playIcon,
                    className: "react-player__play-icon"
                }));
                return r.default.createElement("div", {
                    style: i.preview,
                    className: "react-player__preview",
                    onClick: t,
                    tabIndex: 0,
                    onKeyPress: this.handleKeyPress
                }, n || l)
            }
        }]) && c(t.prototype, n),
        o && c(t, o),
        i
    }(r.Component);
    t.default = g
}
, function(e, t, n) {
    var r = n(68)
      , o = n(69)
      , a = n(27)
      , i = n(70);
    e.exports = function(e, t) {
        return r(e) || o(e, t) || a(e, t) || i()
    }
}
, function(e, t) {
    e.exports = function(e) {
        if (Array.isArray(e))
            return e
    }
}
, function(e, t) {
    e.exports = function(e, t) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) {
            var n = []
              , r = !0
              , o = !1
              , a = void 0;
            try {
                for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value),
                !t || n.length !== t); r = !0)
                    ;
            } catch (l) {
                o = !0,
                a = l
            } finally {
                try {
                    r || null == u.return || u.return()
                } finally {
                    if (o)
                        throw a
                }
            }
            return n
        }
    }
}
, function(e, t) {
    e.exports = function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
}
, function(e, t, n) {
    var r = n(27);
    e.exports = function(e, t) {
        var n;
        if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (n = r(e)) || t && e && "number" === typeof e.length) {
                n && (e = n);
                var o = 0
                  , a = function() {};
                return {
                    s: a,
                    n: function() {
                        return o >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[o++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: a
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var i, u = !0, l = !1;
        return {
            s: function() {
                n = e[Symbol.iterator]()
            },
            n: function() {
                var e = n.next();
                return u = e.done,
                e
            },
            e: function(e) {
                l = !0,
                i = e
            },
            f: function() {
                try {
                    u || null == n.return || n.return()
                } finally {
                    if (l)
                        throw i
                }
            }
        }
    }
}
, function(e, t, n) {
    var r = n(73)
      , o = n(74)
      , a = n(27)
      , i = n(75);
    e.exports = function(e) {
        return r(e) || o(e) || a(e) || i()
    }
}
, function(e, t, n) {
    var r = n(32);
    e.exports = function(e) {
        if (Array.isArray(e))
            return r(e)
    }
}
, function(e, t) {
    e.exports = function(e) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e))
            return Array.from(e)
    }
}
, function(e, t) {
    e.exports = function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return encodeURIComponent(e).replace(/[!'()*]/g, (function(e) {
            return "%".concat(e.charCodeAt(0).toString(16).toUpperCase())
        }
        ))
    }
}
, function(e, t, n) {
    "use strict";
    var r = "%[a-f0-9]{2}"
      , o = new RegExp(r,"gi")
      , a = new RegExp("(" + r + ")+","gi");
    function i(e, t) {
        try {
            return decodeURIComponent(e.join(""))
        } catch (o) {}
        if (1 === e.length)
            return e;
        t = t || 1;
        var n = e.slice(0, t)
          , r = e.slice(t);
        return Array.prototype.concat.call([], i(n), i(r))
    }
    function u(e) {
        try {
            return decodeURIComponent(e)
        } catch (r) {
            for (var t = e.match(o), n = 1; n < t.length; n++)
                t = (e = i(t, n).join("")).match(o);
            return e
        }
    }
    e.exports = function(e) {
        if ("string" !== typeof e)
            throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
        try {
            return e = e.replace(/\+/g, " "),
            decodeURIComponent(e)
        } catch (t) {
            return function(e) {
                for (var n = {
                    "%FE%FF": "\ufffd\ufffd",
                    "%FF%FE": "\ufffd\ufffd"
                }, r = a.exec(e); r; ) {
                    try {
                        n[r[0]] = decodeURIComponent(r[0])
                    } catch (t) {
                        var o = u(r[0]);
                        o !== r[0] && (n[r[0]] = o)
                    }
                    r = a.exec(e)
                }
                n["%C2"] = "\ufffd";
                for (var i = Object.keys(n), l = 0; l < i.length; l++) {
                    var c = i[l];
                    e = e.replace(new RegExp(c,"g"), n[c])
                }
                return e
            }(e)
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e, t) {
        if ("string" !== typeof e || "string" !== typeof t)
            throw new TypeError("Expected the arguments to be of type `string`");
        if ("" === t)
            return [e];
        var n = e.indexOf(t);
        return -1 === n ? [e] : [e.slice(0, n), e.slice(n + t.length)]
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e, t) {
        for (var n = {}, r = Object.keys(e), o = Array.isArray(t), a = 0; a < r.length; a++) {
            var i = r[a]
              , u = e[i];
            (o ? -1 !== t.indexOf(i) : t(i, u, e)) && (n[i] = u)
        }
        return n
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
      , o = function(e, t) {
        if (Array.isArray(e))
            return e;
        if (Symbol.iterator in Object(e))
            return function(e, t) {
                var n = []
                  , r = !0
                  , o = !1
                  , a = void 0;
                try {
                    for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value),
                    !t || n.length !== t); r = !0)
                        ;
                } catch (l) {
                    o = !0,
                    a = l
                } finally {
                    try {
                        !r && u.return && u.return()
                    } finally {
                        if (o)
                            throw a
                    }
                }
                return n
            }(e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
      , a = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
      , i = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }()
      , u = function(e) {
        if (e && e.__esModule)
            return e;
        var t = {};
        if (null != e)
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e,
        t
    }(n(81));
    var l = /(\{[\d|\w]+\})/
      , c = /(\$ref\{[\w|.]+\})/
      , s = function() {
        function e(t, n) {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            "function" === typeof n && (n = {
                customLanguageInterface: n
            }),
            this._opts = a({}, {
                customLanguageInterface: u.getInterfaceLanguage,
                pseudo: !1,
                pseudoMultipleLanguages: !1,
                logsEnabled: !0
            }, n),
            this._interfaceLanguage = this._opts.customLanguageInterface(),
            this._language = this._interfaceLanguage,
            this.setContent(t)
        }
        return i(e, [{
            key: "setContent",
            value: function(e) {
                var t = this
                  , n = Object.keys(e)
                  , r = o(n, 1)[0];
                this._defaultLanguage = r,
                this._defaultLanguageFirstLevelKeys = [],
                this._props = e,
                u.validateTranslationKeys(Object.keys(e[this._defaultLanguage])),
                Object.keys(this._props[this._defaultLanguage]).forEach((function(e) {
                    "string" === typeof t._props[t._defaultLanguage][e] && t._defaultLanguageFirstLevelKeys.push(e)
                }
                )),
                this.setLanguage(this._interfaceLanguage),
                this._opts.pseudo && this._pseudoAllValues(this._props)
            }
        }, {
            key: "_pseudoAllValues",
            value: function(e) {
                var t = this;
                Object.keys(e).forEach((function(n) {
                    if ("object" === r(e[n]))
                        t._pseudoAllValues(e[n]);
                    else if ("string" === typeof e[n]) {
                        if (0 === e[n].indexOf("[") && e[n].lastIndexOf("]") === e[n].length - 1)
                            return;
                        for (var o = e[n].split(" "), a = 0; a < o.length; a += 1)
                            if (o[a].match(l))
                                ;
                            else if (o[a].match(c))
                                ;
                            else {
                                var i = o[a].length;
                                t._opts.pseudoMultipleLanguages && (i = parseInt(1.4 * i, 10)),
                                o[a] = u.randomPseudo(i)
                            }
                        e[n] = "[" + o.join(" ") + "]"
                    }
                }
                ))
            }
        }, {
            key: "setLanguage",
            value: function(e) {
                var t = this
                  , n = u.getBestMatchingLanguage(e, this._props)
                  , r = Object.keys(this._props)[0];
                if (this._language = n,
                this._props[n]) {
                    for (var o = 0; o < this._defaultLanguageFirstLevelKeys.length; o += 1)
                        delete this[this._defaultLanguageFirstLevelKeys[o]];
                    var i = a({}, this._props[this._language]);
                    Object.keys(i).forEach((function(e) {
                        t[e] = i[e]
                    }
                    )),
                    r !== this._language && (i = this._props[r],
                    this._fallbackValues(i, this))
                }
            }
        }, {
            key: "_fallbackValues",
            value: function(e, t) {
                var n = this;
                Object.keys(e).forEach((function(r) {
                    Object.prototype.hasOwnProperty.call(e, r) && !t[r] && "" !== t[r] ? (t[r] = e[r],
                    n._opts.logsEnabled && console.log("\ud83d\udea7 \ud83d\udc77 key '" + r + "' not found in localizedStrings for language " + n._language + " \ud83d\udea7")) : "string" !== typeof t[r] && n._fallbackValues(e[r], t[r])
                }
                ))
            }
        }, {
            key: "getLanguage",
            value: function() {
                return this._language
            }
        }, {
            key: "getInterfaceLanguage",
            value: function() {
                return this._interfaceLanguage
            }
        }, {
            key: "getAvailableLanguages",
            value: function() {
                var e = this;
                return this._availableLanguages || (this._availableLanguages = [],
                Object.keys(this._props).forEach((function(t) {
                    e._availableLanguages.push(t)
                }
                ))),
                this._availableLanguages
            }
        }, {
            key: "formatString",
            value: function(e) {
                for (var t = this, n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
                    r[o - 1] = arguments[o];
                var a = e || "";
                "string" === typeof a && (a = this.getString(e, null, !0) || a);
                var i = a.split(c).filter((function(e) {
                    return !!e
                }
                )).map((function(n) {
                    if (n.match(c)) {
                        var r = n.slice(5, -1)
                          , o = t.getString(r);
                        return o || (t._opts.logsEnabled && console.log("No Localization ref found for '" + n + "' in string '" + e + "'"),
                        "$ref(id:" + r + ")")
                    }
                    return n
                }
                )).join("");
                return i.split(l).filter((function(e) {
                    return !!e
                }
                )).map((function(e) {
                    if (e.match(l)) {
                        var t = e.slice(1, -1)
                          , n = r[t];
                        if (void 0 === n) {
                            var o = r[0][t];
                            if (void 0 === o)
                                return n;
                            n = o
                        }
                        return n
                    }
                    return e
                }
                )).join("")
            }
        }, {
            key: "getString",
            value: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                try {
                    for (var r = this._props[t || this._language], o = e.split("."), a = 0; a < o.length; a += 1) {
                        if (void 0 === r[o[a]])
                            throw Error(o[a]);
                        r = r[o[a]]
                    }
                    return r
                } catch (i) {
                    !n && this._opts.logsEnabled && console.log("No localization found for key '" + e + "' and language '" + t + "', failed on " + i.message)
                }
                return null
            }
        }, {
            key: "getContent",
            value: function() {
                return this._props
            }
        }]),
        e
    }();
    t.default = s
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.getInterfaceLanguage = function() {
        var e = "en-US";
        if ("undefined" === typeof navigator)
            return e;
        var t = navigator;
        if (t) {
            if (t.language)
                return t.language;
            if (t.languages && t.languages[0])
                return t.languages[0];
            if (t.userLanguage)
                return t.userLanguage;
            if (t.browserLanguage)
                return t.browserLanguage
        }
        return e
    }
    ,
    t.getBestMatchingLanguage = function(e, t) {
        if (t[e])
            return e;
        var n = e.indexOf("-")
          , r = n >= 0 ? e.substring(0, n) : e;
        return t[r] ? r : Object.keys(t)[0]
    }
    ,
    t.validateTranslationKeys = function(e) {
        var t = ["_interfaceLanguage", "_language", "_defaultLanguage", "_defaultLanguageFirstLevelKeys", "_props"];
        e.forEach((function(e) {
            if (-1 !== t.indexOf(e))
                throw new Error(e + " cannot be used as a key. It is a reserved word.")
        }
        ))
    }
    ,
    t.randomPseudo = function(e) {
        for (var t = "", n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", r = 0; r < e; r += 1)
            t += n.charAt(Math.floor(Math.random() * n.length));
        return t
    }
}
, , function(e, t, n) {
    "use strict";
    n.r(t);
    var r = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/
      , o = function(e) {
        var t = {};
        return function(n) {
            return void 0 === t[n] && (t[n] = e(n)),
            t[n]
        }
    }((function(e) {
        return r.test(e) || 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) < 91
    }
    ));
    t.default = o
}
, , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return Pa
    }
    ));
    var r = n(2)
      , o = n(0)
      , a = n.n(o)
      , i = function(e) {
        return {
            isEnabled: function(t) {
                return e.some((function(e) {
                    return !!t[e]
                }
                ))
            }
        }
    }
      , u = {
        measureLayout: i(["layout", "layoutId", "drag"]),
        animation: i(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag"]),
        exit: i(["exit"]),
        drag: i(["drag", "dragControls"]),
        focus: i(["whileFocus"]),
        hover: i(["whileHover", "onHoverStart", "onHoverEnd"]),
        tap: i(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
        pan: i(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
        layoutAnimation: i(["layout", "layoutId"])
    };
    var l = Object(o.createContext)({
        strict: !1
    })
      , c = Object.keys(u)
      , s = c.length;
    var f = Object(o.createContext)({
        transformPagePoint: function(e) {
            return e
        },
        isStatic: !1
    })
      , p = Object(o.createContext)({});
    var d = n(13)
      , y = n(14);
    function v() {
        var e = Object(o.useContext)(d.a);
        if (null === e)
            return [!0, null];
        var t = e.isPresent
          , n = e.onExitComplete
          , r = e.register
          , a = b();
        Object(o.useEffect)((function() {
            return r(a)
        }
        ), []);
        return !t && n ? [!1, function() {
            return null === n || void 0 === n ? void 0 : n(a)
        }
        ] : [!0]
    }
    function h(e) {
        return null === e || e.isPresent
    }
    var m = 0
      , g = function() {
        return m++
    }
      , b = function() {
        return Object(y.a)(g)
    }
      , w = Object(o.createContext)(null)
      , O = "undefined" !== typeof window
      , k = O ? o.useLayoutEffect : o.useEffect;
    function S(e, t, n, a) {
        var i = Object(o.useContext)(f)
          , u = Object(o.useContext)(l)
          , c = Object(o.useContext)(p).visualElement
          , s = Object(o.useContext)(d.a)
          , y = function(e) {
            var t = e.layoutId
              , n = Object(o.useContext)(w);
            return n && void 0 !== t ? n + "-" + t : t
        }(n)
          , v = Object(o.useRef)(void 0);
        a || (a = u.renderer),
        !v.current && a && (v.current = a(e, {
            visualState: t,
            parent: c,
            props: Object(r.a)(Object(r.a)({}, n), {
                layoutId: y
            }),
            presenceId: null === s || void 0 === s ? void 0 : s.id,
            blockInitialAnimation: !1 === (null === s || void 0 === s ? void 0 : s.initial)
        }));
        var m = v.current;
        return k((function() {
            m && (m.setProps(Object(r.a)(Object(r.a)(Object(r.a)({}, i), n), {
                layoutId: y
            })),
            m.isPresent = h(s),
            m.isPresenceRoot = !c || c.presenceId !== (null === s || void 0 === s ? void 0 : s.id),
            m.syncRender())
        }
        )),
        Object(o.useEffect)((function() {
            var e;
            m && (null === (e = m.animationState) || void 0 === e || e.animateChanges())
        }
        )),
        k((function() {
            return function() {
                return null === m || void 0 === m ? void 0 : m.notifyUnmount()
            }
        }
        ), []),
        m
    }
    function E(e) {
        return "object" === typeof e && Object.prototype.hasOwnProperty.call(e, "current")
    }
    function P(e) {
        return Array.isArray(e)
    }
    function _(e) {
        return "string" === typeof e || P(e)
    }
    function x(e, t, n, r, o) {
        var a;
        return void 0 === r && (r = {}),
        void 0 === o && (o = {}),
        "string" === typeof t && (t = null === (a = e.variants) || void 0 === a ? void 0 : a[t]),
        "function" === typeof t ? t(null !== n && void 0 !== n ? n : e.custom, r, o) : t
    }
    function j(e, t, n) {
        var r = e.getProps();
        return x(r, t, null !== n && void 0 !== n ? n : r.custom, function(e) {
            var t = {};
            return e.forEachValue((function(e, n) {
                return t[n] = e.get()
            }
            )),
            t
        }(e), function(e) {
            var t = {};
            return e.forEachValue((function(e, n) {
                return t[n] = e.getVelocity()
            }
            )),
            t
        }(e))
    }
    function T(e) {
        var t;
        return "function" === typeof (null === (t = e.animate) || void 0 === t ? void 0 : t.start) || _(e.initial) || _(e.animate) || _(e.whileHover) || _(e.whileDrag) || _(e.whileTap) || _(e.whileFocus) || _(e.exit)
    }
    function A(e) {
        return Boolean(T(e) || e.variants)
    }
    function C(e, t) {
        var n = function(e, t) {
            if (T(e)) {
                var n = e.initial
                  , r = e.animate;
                return {
                    initial: !1 === n || _(n) ? n : void 0,
                    animate: _(r) ? r : void 0
                }
            }
            return !1 !== e.inherit ? t : {}
        }(e, Object(o.useContext)(p))
          , r = n.initial
          , a = n.animate;
        return Object(o.useMemo)((function() {
            return {
                initial: r,
                animate: a
            }
        }
        ), t ? [L(r), L(a)] : [])
    }
    function L(e) {
        return Array.isArray(e) ? e.join(" ") : e
    }
    function R(e) {
        var t = e.preloadedFeatures
          , n = e.createVisualElement
          , a = e.useRender
          , i = e.useVisualState
          , d = e.Component;
        return t && function(e) {
            for (var t in e) {
                var n = e[t];
                null !== n && (u[t].Component = n)
            }
        }(t),
        Object(o.forwardRef)((function(e, t) {
            var y = Object(o.useContext)(f).isStatic
              , v = null
              , h = C(e, y)
              , m = i(e, y);
            return !y && O && (h.visualElement = S(d, m, e, n),
            v = function(e, t, n) {
                var a = [];
                if (Object(o.useContext)(l),
                !t)
                    return null;
                for (var i = 0; i < s; i++) {
                    var f = c[i]
                      , p = u[f]
                      , d = p.isEnabled
                      , y = p.Component;
                    d(e) && y && a.push(o.createElement(y, Object(r.a)({
                        key: f
                    }, e, {
                        visualElement: t
                    })))
                }
                return a
            }(e, h.visualElement)),
            o.createElement(o.Fragment, null, o.createElement(p.Provider, {
                value: h
            }, a(d, e, function(e, t, n) {
                return Object(o.useCallback)((function(r) {
                    var o;
                    r && (null === (o = e.mount) || void 0 === o || o.call(e, r)),
                    t && (r ? t.mount(r) : t.unmount()),
                    n && ("function" === typeof n ? n(r) : E(n) && (n.current = r))
                }
                ), [t])
            }(m, h.visualElement, t), m, y)), v)
        }
        ))
    }
    function M(e) {
        function t(t, n) {
            return void 0 === n && (n = {}),
            R(e(t, n))
        }
        var n = new Map;
        return new Proxy(t,{
            get: function(e, r) {
                return n.has(r) || n.set(r, t(r)),
                n.get(r)
            }
        })
    }
    var D = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "svg", "switch", "symbol", "text", "tspan", "use", "view"];
    function N(e) {
        return "string" === typeof e && !e.includes("-") && !!(D.indexOf(e) > -1 || /[A-Z]/.test(e))
    }
    var V = {};
    var I = ["", "X", "Y", "Z"]
      , U = ["transformPerspective", "x", "y", "z"];
    function F(e, t) {
        return U.indexOf(e) - U.indexOf(t)
    }
    ["translate", "scale", "rotate", "skew"].forEach((function(e) {
        return I.forEach((function(t) {
            return U.push(e + t)
        }
        ))
    }
    ));
    var z = new Set(U);
    function B(e) {
        return z.has(e)
    }
    var H = new Set(["originX", "originY", "originZ"]);
    function W(e) {
        return H.has(e)
    }
    function q(e, t) {
        var n = t.layout
          , r = t.layoutId;
        return B(e) || W(e) || (n || void 0 !== r) && (!!V[e] || "opacity" === e)
    }
    var $ = function(e) {
        return null !== e && "object" === typeof e && e.getVelocity
    }
      , K = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    };
    function Y(e) {
        return e.startsWith("--")
    }
    var X = function(e, t) {
        return t && "number" === typeof e ? t.transform(e) : e
    };
    var Q = function() {
        return (Q = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    };
    Object.create;
    Object.create;
    var G = function(e, t) {
        return function(n) {
            return Math.max(Math.min(n, t), e)
        }
    }
      , Z = function(e) {
        return e % 1 ? Number(e.toFixed(5)) : e
    }
      , J = /(-)?([\d]*\.?[\d])+/g
      , ee = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi
      , te = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
    function ne(e) {
        return "string" === typeof e
    }
    var re = function(e) {
        return {
            test: function(t) {
                return ne(t) && t.endsWith(e) && 1 === t.split(" ").length
            },
            parse: parseFloat,
            transform: function(t) {
                return "" + t + e
            }
        }
    }
      , oe = re("deg")
      , ae = re("%")
      , ie = re("px")
      , ue = re("vh")
      , le = re("vw")
      , ce = Q(Q({}, ae), {
        parse: function(e) {
            return ae.parse(e) / 100
        },
        transform: function(e) {
            return ae.transform(100 * e)
        }
    })
      , se = {
        test: function(e) {
            return "number" === typeof e
        },
        parse: parseFloat,
        transform: function(e) {
            return e
        }
    }
      , fe = Q(Q({}, se), {
        transform: G(0, 1)
    })
      , pe = Q(Q({}, se), {
        default: 1
    })
      , de = Object(r.a)(Object(r.a)({}, se), {
        transform: Math.round
    })
      , ye = {
        borderWidth: ie,
        borderTopWidth: ie,
        borderRightWidth: ie,
        borderBottomWidth: ie,
        borderLeftWidth: ie,
        borderRadius: ie,
        radius: ie,
        borderTopLeftRadius: ie,
        borderTopRightRadius: ie,
        borderBottomRightRadius: ie,
        borderBottomLeftRadius: ie,
        width: ie,
        maxWidth: ie,
        height: ie,
        maxHeight: ie,
        size: ie,
        top: ie,
        right: ie,
        bottom: ie,
        left: ie,
        padding: ie,
        paddingTop: ie,
        paddingRight: ie,
        paddingBottom: ie,
        paddingLeft: ie,
        margin: ie,
        marginTop: ie,
        marginRight: ie,
        marginBottom: ie,
        marginLeft: ie,
        rotate: oe,
        rotateX: oe,
        rotateY: oe,
        rotateZ: oe,
        scale: pe,
        scaleX: pe,
        scaleY: pe,
        scaleZ: pe,
        skew: oe,
        skewX: oe,
        skewY: oe,
        distance: ie,
        translateX: ie,
        translateY: ie,
        translateZ: ie,
        x: ie,
        y: ie,
        z: ie,
        perspective: ie,
        transformPerspective: ie,
        opacity: fe,
        originX: ce,
        originY: ce,
        originZ: ie,
        zIndex: de,
        fillOpacity: fe,
        strokeOpacity: fe,
        numOctaves: de
    };
    function ve(e, t, n, r, o, a, i, u) {
        var l, c = e.style, s = e.vars, f = e.transform, p = e.transformKeys, d = e.transformOrigin;
        p.length = 0;
        var y = !1
          , v = !1
          , h = !0;
        for (var m in t) {
            var g = t[m];
            if (Y(m))
                s[m] = g;
            else {
                var b = ye[m]
                  , w = X(g, b);
                if (B(m)) {
                    if (y = !0,
                    f[m] = w,
                    p.push(m),
                    !h)
                        continue;
                    g !== (null !== (l = b.default) && void 0 !== l ? l : 0) && (h = !1)
                } else if (W(m))
                    d[m] = w,
                    v = !0;
                else if (r && n && r.isHydrated && V[m]) {
                    var O = V[m].process(g, r, n)
                      , k = V[m].applyTo;
                    if (k)
                        for (var S = k.length, E = 0; E < S; E++)
                            c[k[E]] = O;
                    else
                        c[m] = O
                } else
                    c[m] = w
            }
        }
        r && n && i && u ? (c.transform = i(r.deltaFinal, r.treeScale, y ? f : void 0),
        a && (c.transform = a(f, c.transform)),
        c.transformOrigin = u(r)) : (y && (c.transform = function(e, t, n, r) {
            var o = e.transform
              , a = e.transformKeys
              , i = t.enableHardwareAcceleration
              , u = void 0 === i || i
              , l = t.allowTransformNone
              , c = void 0 === l || l
              , s = "";
            a.sort(F);
            for (var f = !1, p = a.length, d = 0; d < p; d++) {
                var y = a[d];
                s += (K[y] || y) + "(" + o[y] + ") ",
                "z" === y && (f = !0)
            }
            return !f && u ? s += "translateZ(0)" : s = s.trim(),
            r ? s = r(o, n ? "" : s) : c && n && (s = "none"),
            s
        }(e, o, h, a)),
        v && (c.transformOrigin = function(e) {
            var t = e.originX
              , n = void 0 === t ? "50%" : t
              , r = e.originY
              , o = void 0 === r ? "50%" : r
              , a = e.originZ;
            return n + " " + o + " " + (void 0 === a ? 0 : a)
        }(d)))
    }
    var he = function() {
        return {
            style: {},
            transform: {},
            transformKeys: [],
            transformOrigin: {},
            vars: {}
        }
    };
    function me(e, t, n) {
        for (var r in t)
            $(t[r]) || q(r, n) || (e[r] = t[r])
    }
    function ge(e, t, n) {
        var a = {};
        return me(a, e.style || {}, e),
        Object.assign(a, function(e, t, n) {
            var a = e.transformTemplate;
            return Object(o.useMemo)((function() {
                var e = {
                    style: {},
                    transform: {},
                    transformKeys: [],
                    transformOrigin: {},
                    vars: {}
                };
                ve(e, t, void 0, void 0, {
                    enableHardwareAcceleration: !n
                }, a);
                var o = e.vars
                  , i = e.style;
                return Object(r.a)(Object(r.a)({}, o), i)
            }
            ), [t])
        }(e, t, n)),
        e.transformValues && (a = e.transformValues(a)),
        a
    }
    function be(e, t, n) {
        var r = {}
          , o = ge(e, t, n);
        return Boolean(e.drag) && (r.draggable = !1,
        o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none",
        o.touchAction = !0 === e.drag ? "none" : "pan-" + ("x" === e.drag ? "y" : "x")),
        r.style = o,
        r
    }
    var we = new Set(["initial", "animate", "exit", "style", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "onLayoutAnimationComplete", "onViewportBoxUpdate", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "whileDrag", "onPan", "onPanStart", "onPanEnd", "onPanSessionStart", "onTap", "onTapStart", "onTapCancel", "onHoverStart", "onHoverEnd", "whileFocus", "whileTap", "whileHover"]);
    function Oe(e) {
        return we.has(e)
    }
    var ke = function(e) {
        return !Oe(e)
    };
    try {
        var Se = n(83).default;
        ke = function(e) {
            return e.startsWith("on") ? !Oe(e) : Se(e)
        }
    } catch (_a) {}
    function Ee(e, t, n) {
        return "string" === typeof e ? e : ie.transform(t + n * e)
    }
    var Pe = function(e, t) {
        return ie.transform(e * t)
    }
      , _e = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    }
      , xe = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };
    function je(e, t, n, o, a, i, u, l) {
        var c = t.attrX
          , s = t.attrY
          , f = t.originX
          , p = t.originY
          , d = t.pathLength
          , y = t.pathSpacing
          , v = void 0 === y ? 1 : y
          , h = t.pathOffset
          , m = void 0 === h ? 0 : h;
        ve(e, Object(r.d)(t, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]), n, o, a, i, u, l),
        e.attrs = e.style,
        e.style = {};
        var g = e.attrs
          , b = e.style
          , w = e.dimensions
          , O = e.totalPathLength;
        g.transform && (w && (b.transform = g.transform),
        delete g.transform),
        w && (void 0 !== f || void 0 !== p || b.transform) && (b.transformOrigin = function(e, t, n) {
            return Ee(t, e.x, e.width) + " " + Ee(n, e.y, e.height)
        }(w, void 0 !== f ? f : .5, void 0 !== p ? p : .5)),
        void 0 !== c && (g.x = c),
        void 0 !== s && (g.y = s),
        void 0 !== O && void 0 !== d && function(e, t, n, r, o, a) {
            void 0 === r && (r = 1),
            void 0 === o && (o = 0),
            void 0 === a && (a = !0);
            var i = a ? _e : xe;
            e[i.offset] = Pe(-o, t);
            var u = Pe(n, t)
              , l = Pe(r, t);
            e[i.array] = u + " " + l
        }(g, O, d, v, m, !1)
    }
    var Te = function() {
        return Object(r.a)(Object(r.a)({}, {
            style: {},
            transform: {},
            transformKeys: [],
            transformOrigin: {},
            vars: {}
        }), {
            attrs: {}
        })
    };
    function Ae(e, t) {
        var n = Object(o.useMemo)((function() {
            var n = Te();
            return je(n, t, void 0, void 0, {
                enableHardwareAcceleration: !1
            }, e.transformTemplate),
            Object(r.a)(Object(r.a)({}, n.attrs), {
                style: Object(r.a)({}, n.style)
            })
        }
        ), [t]);
        if (e.style) {
            var a = {};
            me(a, e.style, e),
            n.style = Object(r.a)(Object(r.a)({}, a), n.style)
        }
        return n
    }
    function Ce(e) {
        void 0 === e && (e = !1);
        return function(t, n, a, i, u) {
            var l = i.latestValues
              , c = (N(t) ? Ae : be)(n, l, u)
              , s = function(e, t, n) {
                var r = {};
                for (var o in e)
                    (ke(o) || !0 === n && Oe(o) || !t && !Oe(o)) && (r[o] = e[o]);
                return r
            }(n, "string" === typeof t, e)
              , f = Object(r.a)(Object(r.a)(Object(r.a)({}, s), c), {
                ref: a
            });
            return Object(o.createElement)(t, f)
        }
    }
    var Le = /([a-z])([A-Z])/g
      , Re = function(e) {
        return e.replace(Le, "$1-$2").toLowerCase()
    };
    function Me(e, t) {
        var n = t.style
          , r = t.vars;
        for (var o in Object.assign(e.style, n),
        r)
            e.style.setProperty(o, r[o])
    }
    var De = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox"]);
    function Ne(e, t) {
        for (var n in Me(e, t),
        t.attrs)
            e.setAttribute(De.has(n) ? n : Re(n), t.attrs[n])
    }
    function Ve(e) {
        var t = e.style
          , n = {};
        for (var r in t)
            ($(t[r]) || q(r, e)) && (n[r] = t[r]);
        return n
    }
    function Ie(e) {
        var t = Ve(e);
        for (var n in e) {
            if ($(e[n]))
                t["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = e[n]
        }
        return t
    }
    function Ue(e) {
        return "object" === typeof e && "function" === typeof e.start
    }
    var Fe = function(e) {
        return Array.isArray(e)
    };
    function ze(e) {
        var t, n = $(e) ? e.get() : e;
        return t = n,
        Boolean(t && "object" === typeof t && t.mix && t.toValue) ? n.toValue() : n
    }
    function Be(e, t, n, r) {
        var o = e.scrapeMotionValuesFromProps
          , a = e.createRenderState
          , i = e.onMount
          , u = {
            latestValues: We(t, n, r, o),
            renderState: a()
        };
        return i && (u.mount = function(e) {
            return i(t, e, u)
        }
        ),
        u
    }
    var He = function(e) {
        return function(t, n) {
            var r = Object(o.useContext)(p)
              , a = Object(o.useContext)(d.a);
            return n ? Be(e, t, r, a) : Object(y.a)((function() {
                return Be(e, t, r, a)
            }
            ))
        }
    };
    function We(e, t, n, o) {
        var a = {}
          , i = !1 === (null === n || void 0 === n ? void 0 : n.initial)
          , u = o(e);
        for (var l in u)
            a[l] = ze(u[l]);
        var c = e.initial
          , s = e.animate
          , f = T(e)
          , p = A(e);
        t && p && !f && !1 !== e.inherit && (null !== c && void 0 !== c || (c = t.initial),
        null !== s && void 0 !== s || (s = t.animate));
        var d = i || !1 === c ? s : c;
        d && "boolean" !== typeof d && !Ue(d) && (Array.isArray(d) ? d : [d]).forEach((function(t) {
            var n = x(e, t);
            if (n) {
                var o = n.transitionEnd;
                n.transition;
                var i = Object(r.d)(n, ["transitionEnd", "transition"]);
                for (var u in i)
                    a[u] = i[u];
                for (var u in o)
                    a[u] = o[u]
            }
        }
        ));
        return a
    }
    var qe = {
        useVisualState: He({
            scrapeMotionValuesFromProps: Ie,
            createRenderState: Te,
            onMount: function(e, t, n) {
                var r = n.renderState
                  , o = n.latestValues;
                try {
                    r.dimensions = "function" === typeof t.getBBox ? t.getBBox() : t.getBoundingClientRect()
                } catch (a) {
                    r.dimensions = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }
                }
                "path" === t.tagName && (r.totalPathLength = t.getTotalLength()),
                je(r, o, void 0, void 0, {
                    enableHardwareAcceleration: !1
                }, e.transformTemplate),
                Ne(t, r)
            }
        })
    };
    var $e, Ke = {
        useVisualState: He({
            scrapeMotionValuesFromProps: Ve,
            createRenderState: he
        })
    };
    function Ye(e, t, n, o) {
        var a = t.forwardMotionProps
          , i = void 0 !== a && a
          , u = N(e) ? qe : Ke;
        return Object(r.a)(Object(r.a)({}, u), {
            preloadedFeatures: n,
            useRender: Ce(i),
            createVisualElement: o,
            Component: e
        })
    }
    function Xe(e, t, n, r) {
        return e.addEventListener(t, n, r),
        function() {
            return e.removeEventListener(t, n, r)
        }
    }
    function Qe(e, t, n, r) {
        Object(o.useEffect)((function() {
            var o = e.current;
            if (n && o)
                return Xe(o, t, n, r)
        }
        ), [e, t, n, r])
    }
    function Ge(e) {
        return "undefined" !== typeof PointerEvent && e instanceof PointerEvent ? !("mouse" !== e.pointerType) : e instanceof MouseEvent
    }
    function Ze(e) {
        return !!e.touches
    }
    !function(e) {
        e.Animate = "animate",
        e.Hover = "whileHover",
        e.Tap = "whileTap",
        e.Drag = "whileDrag",
        e.Focus = "whileFocus",
        e.Exit = "exit"
    }($e || ($e = {}));
    var Je = {
        pageX: 0,
        pageY: 0
    };
    function et(e, t) {
        void 0 === t && (t = "page");
        var n = e.touches[0] || e.changedTouches[0] || Je;
        return {
            x: n[t + "X"],
            y: n[t + "Y"]
        }
    }
    function tt(e, t) {
        return void 0 === t && (t = "page"),
        {
            x: e[t + "X"],
            y: e[t + "Y"]
        }
    }
    function nt(e, t) {
        return void 0 === t && (t = "page"),
        {
            point: Ze(e) ? et(e, t) : tt(e, t)
        }
    }
    function rt(e) {
        return nt(e, "client")
    }
    var ot = function(e, t) {
        void 0 === t && (t = !1);
        var n, r = function(t) {
            return e(t, nt(t))
        };
        return t ? (n = r,
        function(e) {
            var t = e instanceof MouseEvent;
            (!t || t && 0 === e.button) && n(e)
        }
        ) : r
    }
      , at = {
        pointerdown: "mousedown",
        pointermove: "mousemove",
        pointerup: "mouseup",
        pointercancel: "mousecancel",
        pointerover: "mouseover",
        pointerout: "mouseout",
        pointerenter: "mouseenter",
        pointerleave: "mouseleave"
    }
      , it = {
        pointerdown: "touchstart",
        pointermove: "touchmove",
        pointerup: "touchend",
        pointercancel: "touchcancel"
    };
    function ut(e) {
        return O && null === window.onpointerdown ? e : O && null === window.ontouchstart ? it[e] : O && null === window.onmousedown ? at[e] : e
    }
    function lt(e, t, n, r) {
        return Xe(e, ut(t), ot(n, "pointerdown" === t), r)
    }
    function ct(e, t, n, r) {
        return Qe(e, ut(t), n && ot(n, "pointerdown" === t), r)
    }
    function st(e, t, n) {
        return function(r, o) {
            var a;
            Ge(r) && e.isHoverEventsEnabled && (null === n || void 0 === n || n(r, o),
            null === (a = e.animationState) || void 0 === a || a.setActive($e.Hover, t))
        }
    }
    var ft = function e(t, n) {
        return !!n && (t === n || e(t, n.parentElement))
    }
      , pt = n(19)
      , dt = function(e, t) {
        return function(n) {
            return t(e(n))
        }
    }
      , yt = function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        return e.reduce(dt)
    };
    function vt(e) {
        var t = null;
        return function() {
            return null === t && (t = e,
            function() {
                t = null
            }
            )
        }
    }
    var ht = vt("dragHorizontal")
      , mt = vt("dragVertical");
    function gt(e) {
        var t = !1;
        if ("y" === e)
            t = mt();
        else if ("x" === e)
            t = ht();
        else {
            var n = ht()
              , r = mt();
            n && r ? t = function() {
                n(),
                r()
            }
            : (n && n(),
            r && r())
        }
        return t
    }
    var bt = function(e) {
        return function(t) {
            return e(t),
            null
        }
    }
      , wt = {
        tap: bt((function(e) {
            var t = e.onTap
              , n = e.onTapStart
              , r = e.onTapCancel
              , a = e.whileTap
              , i = e.visualElement
              , u = t || n || r || a
              , l = Object(o.useRef)(!1)
              , c = Object(o.useRef)(null);
            function s() {
                var e;
                null === (e = c.current) || void 0 === e || e.call(c),
                c.current = null
            }
            function f() {
                var e;
                return s(),
                l.current = !1,
                null === (e = i.animationState) || void 0 === e || e.setActive($e.Tap, !1),
                !function() {
                    var e = gt(!0);
                    return !e || (e(),
                    !1)
                }()
            }
            function p(e, n) {
                f() && (ft(i.getInstance(), e.target) ? null === t || void 0 === t || t(e, n) : null === r || void 0 === r || r(e, n))
            }
            function d(e, t) {
                f() && (null === r || void 0 === r || r(e, t))
            }
            ct(i, "pointerdown", u ? function(e, t) {
                var r;
                s(),
                l.current || (l.current = !0,
                c.current = yt(lt(window, "pointerup", p), lt(window, "pointercancel", d)),
                null === n || void 0 === n || n(e, t),
                null === (r = i.animationState) || void 0 === r || r.setActive($e.Tap, !0))
            }
            : void 0),
            Object(pt.a)(s)
        }
        )),
        focus: bt((function(e) {
            var t = e.whileFocus
              , n = e.visualElement;
            Qe(n, "focus", t ? function() {
                var e;
                null === (e = n.animationState) || void 0 === e || e.setActive($e.Focus, !0)
            }
            : void 0),
            Qe(n, "blur", t ? function() {
                var e;
                null === (e = n.animationState) || void 0 === e || e.setActive($e.Focus, !1)
            }
            : void 0)
        }
        )),
        hover: bt((function(e) {
            var t = e.onHoverStart
              , n = e.onHoverEnd
              , r = e.whileHover
              , o = e.visualElement;
            ct(o, "pointerenter", t || r ? st(o, !0, t) : void 0),
            ct(o, "pointerleave", n || r ? st(o, !1, n) : void 0)
        }
        ))
    };
    function Ot(e, t) {
        if (!Array.isArray(t))
            return !1;
        var n = t.length;
        if (n !== e.length)
            return !1;
        for (var r = 0; r < n; r++)
            if (t[r] !== e[r])
                return !1;
        return !0
    }
    var kt = function() {
        return (kt = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    };
    function St(e, t) {
        var n = {};
        for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
        }
        return n
    }
    Object.create;
    Object.create;
    var Et = function(e, t, n) {
        return Math.min(Math.max(n, e), t)
    }
      , Pt = .001;
    function _t(e) {
        var t, n, r = e.duration, o = void 0 === r ? 800 : r, a = e.bounce, i = void 0 === a ? .25 : a, u = e.velocity, l = void 0 === u ? 0 : u, c = e.mass, s = void 0 === c ? 1 : c, f = 1 - i;
        f = Et(.05, 1, f),
        o = Et(.01, 10, o / 1e3),
        f < 1 ? (t = function(e) {
            var t = e * f
              , n = t * o
              , r = t - l
              , a = xt(e, f)
              , i = Math.exp(-n);
            return Pt - r / a * i
        }
        ,
        n = function(e) {
            var n = e * f * o
              , r = n * l + l
              , a = Math.pow(f, 2) * Math.pow(e, 2) * o
              , i = Math.exp(-n)
              , u = xt(Math.pow(e, 2), f);
            return (-t(e) + Pt > 0 ? -1 : 1) * ((r - a) * i) / u
        }
        ) : (t = function(e) {
            return Math.exp(-e * o) * ((e - l) * o + 1) - .001
        }
        ,
        n = function(e) {
            return Math.exp(-e * o) * (o * o * (l - e))
        }
        );
        var p = function(e, t, n) {
            for (var r = n, o = 1; o < 12; o++)
                r -= e(r) / t(r);
            return r
        }(t, n, 5 / o);
        if (isNaN(p))
            return {
                stiffness: 100,
                damping: 10
            };
        var d = Math.pow(p, 2) * s;
        return {
            stiffness: d,
            damping: 2 * f * Math.sqrt(s * d)
        }
    }
    function xt(e, t) {
        return e * Math.sqrt(1 - t * t)
    }
    var jt = ["duration", "bounce"]
      , Tt = ["stiffness", "damping", "mass"];
    function At(e, t) {
        return t.some((function(t) {
            return void 0 !== e[t]
        }
        ))
    }
    function Ct(e) {
        var t = e.from
          , n = void 0 === t ? 0 : t
          , r = e.to
          , o = void 0 === r ? 1 : r
          , a = e.restSpeed
          , i = void 0 === a ? 2 : a
          , u = e.restDelta
          , l = St(e, ["from", "to", "restSpeed", "restDelta"])
          , c = {
            done: !1,
            value: n
        }
          , s = function(e) {
            var t = kt({
                velocity: 0,
                stiffness: 100,
                damping: 10,
                mass: 1,
                isResolvedFromDuration: !1
            }, e);
            if (!At(e, Tt) && At(e, jt)) {
                var n = _t(e);
                (t = kt(kt(kt({}, t), n), {
                    velocity: 0,
                    mass: 1
                })).isResolvedFromDuration = !0
            }
            return t
        }(l)
          , f = s.stiffness
          , p = s.damping
          , d = s.mass
          , y = s.velocity
          , v = s.isResolvedFromDuration
          , h = Lt
          , m = Lt;
        function g() {
            var e = y ? -y / 1e3 : 0
              , t = o - n
              , r = p / (2 * Math.sqrt(f * d))
              , a = Math.sqrt(f / d) / 1e3;
            if (null !== u && void 0 !== u || (u = Math.abs(o - n) <= 1 ? .01 : .4),
            r < 1) {
                var i = xt(a, r);
                h = function(n) {
                    var u = Math.exp(-r * a * n);
                    return o - u * ((e + r * a * t) / i * Math.sin(i * n) + t * Math.cos(i * n))
                }
                ,
                m = function(n) {
                    var o = Math.exp(-r * a * n);
                    return r * a * o * (Math.sin(i * n) * (e + r * a * t) / i + t * Math.cos(i * n)) - o * (Math.cos(i * n) * (e + r * a * t) - i * t * Math.sin(i * n))
                }
            } else if (1 === r)
                h = function(n) {
                    return o - Math.exp(-a * n) * (t + (e + a * t) * n)
                }
                ;
            else {
                var l = a * Math.sqrt(r * r - 1);
                h = function(n) {
                    var i = Math.exp(-r * a * n)
                      , u = Math.min(l * n, 300);
                    return o - i * ((e + r * a * t) * Math.sinh(u) + l * t * Math.cosh(u)) / l
                }
            }
        }
        return g(),
        {
            next: function(e) {
                var t = h(e);
                if (v)
                    c.done = e >= l.duration;
                else {
                    var n = 1e3 * m(e)
                      , r = Math.abs(n) <= i
                      , a = Math.abs(o - t) <= u;
                    c.done = r && a
                }
                return c.value = c.done ? o : t,
                c
            },
            flipTarget: function() {
                var e;
                y = -y,
                n = (e = [o, n])[0],
                o = e[1],
                g()
            }
        }
    }
    Ct.needsInterpolation = function(e, t) {
        return "string" === typeof e || "string" === typeof t
    }
    ;
    var Lt = function(e) {
        return 0
    }
      , Rt = function(e, t, n) {
        var r = t - e;
        return 0 === r ? 1 : (n - e) / r
    }
      , Mt = function(e, t, n) {
        return -n * e + n * t + e
    }
      , Dt = function(e, t) {
        return function(n) {
            return Boolean(ne(n) && te.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t))
        }
    }
      , Nt = function(e, t, n) {
        return function(r) {
            var o;
            if (!ne(r))
                return r;
            var a = r.match(J)
              , i = a[0]
              , u = a[1]
              , l = a[2]
              , c = a[3];
            return (o = {})[e] = parseFloat(i),
            o[t] = parseFloat(u),
            o[n] = parseFloat(l),
            o.alpha = void 0 !== c ? parseFloat(c) : 1,
            o
        }
    }
      , Vt = G(0, 255)
      , It = Q(Q({}, se), {
        transform: function(e) {
            return Math.round(Vt(e))
        }
    })
      , Ut = {
        test: Dt("rgb", "red"),
        parse: Nt("red", "green", "blue"),
        transform: function(e) {
            var t = e.red
              , n = e.green
              , r = e.blue
              , o = e.alpha
              , a = void 0 === o ? 1 : o;
            return "rgba(" + It.transform(t) + ", " + It.transform(n) + ", " + It.transform(r) + ", " + Z(fe.transform(a)) + ")"
        }
    };
    var Ft = {
        test: Dt("#"),
        parse: function(e) {
            var t = ""
              , n = ""
              , r = ""
              , o = "";
            return e.length > 5 ? (t = e.substr(1, 2),
            n = e.substr(3, 2),
            r = e.substr(5, 2),
            o = e.substr(7, 2)) : (t = e.substr(1, 1),
            n = e.substr(2, 1),
            r = e.substr(3, 1),
            o = e.substr(4, 1),
            t += t,
            n += n,
            r += r,
            o += o),
            {
                red: parseInt(t, 16),
                green: parseInt(n, 16),
                blue: parseInt(r, 16),
                alpha: o ? parseInt(o, 16) / 255 : 1
            }
        },
        transform: Ut.transform
    }
      , zt = {
        test: Dt("hsl", "hue"),
        parse: Nt("hue", "saturation", "lightness"),
        transform: function(e) {
            var t = e.hue
              , n = e.saturation
              , r = e.lightness
              , o = e.alpha
              , a = void 0 === o ? 1 : o;
            return "hsla(" + Math.round(t) + ", " + ae.transform(Z(n)) + ", " + ae.transform(Z(r)) + ", " + Z(fe.transform(a)) + ")"
        }
    }
      , Bt = function(e, t, n) {
        var r = e * e
          , o = t * t;
        return Math.sqrt(Math.max(0, n * (o - r) + r))
    }
      , Ht = [Ft, Ut, zt]
      , Wt = function(e) {
        return Ht.find((function(t) {
            return t.test(e)
        }
        ))
    }
      , qt = function(e) {
        return "'" + e + "' is not an animatable color. Use the equivalent color code instead."
    }
      , $t = function(e, t) {
        var n = Wt(e)
          , r = Wt(t);
        qt(e),
        qt(t),
        n.transform,
        r.transform;
        var o = n.parse(e)
          , a = r.parse(t)
          , i = kt({}, o)
          , u = n === zt ? Mt : Bt;
        return function(e) {
            for (var t in i)
                "alpha" !== t && (i[t] = u(o[t], a[t], e));
            return i.alpha = Mt(o.alpha, a.alpha, e),
            n.transform(i)
        }
    }
      , Kt = {
        test: function(e) {
            return Ut.test(e) || Ft.test(e) || zt.test(e)
        },
        parse: function(e) {
            return Ut.test(e) ? Ut.parse(e) : zt.test(e) ? zt.parse(e) : Ft.parse(e)
        },
        transform: function(e) {
            return ne(e) ? e : e.hasOwnProperty("red") ? Ut.transform(e) : zt.transform(e)
        }
    }
      , Yt = "${c}"
      , Xt = "${n}";
    function Qt(e) {
        var t = []
          , n = 0
          , r = e.match(ee);
        r && (n = r.length,
        e = e.replace(ee, Yt),
        t.push.apply(t, r.map(Kt.parse)));
        var o = e.match(J);
        return o && (e = e.replace(J, Xt),
        t.push.apply(t, o.map(se.parse))),
        {
            values: t,
            numColors: n,
            tokenised: e
        }
    }
    function Gt(e) {
        return Qt(e).values
    }
    function Zt(e) {
        var t = Qt(e)
          , n = t.values
          , r = t.numColors
          , o = t.tokenised
          , a = n.length;
        return function(e) {
            for (var t = o, n = 0; n < a; n++)
                t = t.replace(n < r ? Yt : Xt, n < r ? Kt.transform(e[n]) : Z(e[n]));
            return t
        }
    }
    var Jt = function(e) {
        return "number" === typeof e ? 0 : e
    };
    var en = {
        test: function(e) {
            var t, n, r, o;
            return isNaN(e) && ne(e) && (null !== (n = null === (t = e.match(J)) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0) + (null !== (o = null === (r = e.match(ee)) || void 0 === r ? void 0 : r.length) && void 0 !== o ? o : 0) > 0
        },
        parse: Gt,
        createTransformer: Zt,
        getAnimatableNone: function(e) {
            var t = Gt(e);
            return Zt(e)(t.map(Jt))
        }
    }
      , tn = function(e) {
        return "number" === typeof e
    };
    function nn(e, t) {
        return tn(e) ? function(n) {
            return Mt(e, t, n)
        }
        : Kt.test(e) ? $t(e, t) : un(e, t)
    }
    var rn = function(e, t) {
        var n = function(e, t) {
            for (var n = 0, r = t.length, o = e.length; n < r; n++,
            o++)
                e[o] = t[n];
            return e
        }([], e)
          , r = n.length
          , o = e.map((function(e, n) {
            return nn(e, t[n])
        }
        ));
        return function(e) {
            for (var t = 0; t < r; t++)
                n[t] = o[t](e);
            return n
        }
    }
      , on = function(e, t) {
        var n = kt(kt({}, e), t)
          , r = {};
        for (var o in n)
            void 0 !== e[o] && void 0 !== t[o] && (r[o] = nn(e[o], t[o]));
        return function(e) {
            for (var t in r)
                n[t] = r[t](e);
            return n
        }
    };
    function an(e) {
        for (var t = en.parse(e), n = t.length, r = 0, o = 0, a = 0, i = 0; i < n; i++)
            r || "number" === typeof t[i] ? r++ : void 0 !== t[i].hue ? a++ : o++;
        return {
            parsed: t,
            numNumbers: r,
            numRGB: o,
            numHSL: a
        }
    }
    var un = function(e, t) {
        var n = en.createTransformer(t)
          , r = an(e)
          , o = an(t);
        return r.numHSL === o.numHSL && r.numRGB === o.numRGB && (r.numNumbers,
        o.numNumbers),
        yt(rn(r.parsed, o.parsed), n)
    }
      , ln = function(e, t) {
        return function(n) {
            return Mt(e, t, n)
        }
    };
    function cn(e, t, n) {
        for (var r, o = [], a = n || ("number" === typeof (r = e[0]) ? ln : "string" === typeof r ? Kt.test(r) ? $t : un : Array.isArray(r) ? rn : "object" === typeof r ? on : void 0), i = e.length - 1, u = 0; u < i; u++) {
            var l = a(e[u], e[u + 1]);
            if (t) {
                var c = Array.isArray(t) ? t[u] : t;
                l = yt(c, l)
            }
            o.push(l)
        }
        return o
    }
    function sn(e, t, n) {
        var r = void 0 === n ? {} : n
          , o = r.clamp
          , a = void 0 === o || o
          , i = r.ease
          , u = r.mixer
          , l = e.length;
        t.length,
        !i || !Array.isArray(i) || i.length,
        e[0] > e[l - 1] && (e = [].concat(e),
        t = [].concat(t),
        e.reverse(),
        t.reverse());
        var c = cn(t, i, u)
          , s = 2 === l ? function(e, t) {
            var n = e[0]
              , r = e[1]
              , o = t[0];
            return function(e) {
                return o(Rt(n, r, e))
            }
        }(e, c) : function(e, t) {
            var n = e.length
              , r = n - 1;
            return function(o) {
                var a = 0
                  , i = !1;
                if (o <= e[0] ? i = !0 : o >= e[r] && (a = r - 1,
                i = !0),
                !i) {
                    for (var u = 1; u < n && !(e[u] > o || u === r); u++)
                        ;
                    a = u - 1
                }
                var l = Rt(e[a], e[a + 1], o);
                return t[a](l)
            }
        }(e, c);
        return a ? function(t) {
            return s(Et(e[0], e[l - 1], t))
        }
        : s
    }
    var fn, pn = function(e) {
        return function(t) {
            return 1 - e(1 - t)
        }
    }, dn = function(e) {
        return function(t) {
            return t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
        }
    }, yn = function(e) {
        return function(t) {
            return t * t * ((e + 1) * t - e)
        }
    }, vn = function(e) {
        return e
    }, hn = (fn = 2,
    function(e) {
        return Math.pow(e, fn)
    }
    ), mn = pn(hn), gn = dn(hn), bn = function(e) {
        return 1 - Math.sin(Math.acos(e))
    }, wn = pn(bn), On = dn(wn), kn = yn(1.525), Sn = pn(kn), En = dn(kn), Pn = function(e) {
        var t = yn(e);
        return function(e) {
            return (e *= 2) < 1 ? .5 * t(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
        }
    }(1.525), _n = function(e) {
        if (1 === e || 0 === e)
            return e;
        var t = e * e;
        return e < .36363636363636365 ? 7.5625 * t : e < .7272727272727273 ? 9.075 * t - 9.9 * e + 3.4 : e < .9 ? 12.066481994459833 * t - 19.63545706371191 * e + 8.898060941828255 : 10.8 * e * e - 20.52 * e + 10.72
    }, xn = pn(_n);
    function jn(e, t) {
        return e.map((function() {
            return t || gn
        }
        )).splice(0, e.length - 1)
    }
    function Tn(e) {
        var t = e.from
          , n = void 0 === t ? 0 : t
          , r = e.to
          , o = void 0 === r ? 1 : r
          , a = e.ease
          , i = e.offset
          , u = e.duration
          , l = void 0 === u ? 300 : u
          , c = {
            done: !1,
            value: n
        }
          , s = Array.isArray(o) ? o : [n, o]
          , f = function(e, t) {
            return e.map((function(e) {
                return e * t
            }
            ))
        }(i && i.length === s.length ? i : function(e) {
            var t = e.length;
            return e.map((function(e, n) {
                return 0 !== n ? n / (t - 1) : 0
            }
            ))
        }(s), l);
        function p() {
            return sn(f, s, {
                ease: Array.isArray(a) ? a : jn(s, a)
            })
        }
        var d = p();
        return {
            next: function(e) {
                return c.value = d(e),
                c.done = e >= l,
                c
            },
            flipTarget: function() {
                s.reverse(),
                d = p()
            }
        }
    }
    var An = {
        keyframes: Tn,
        spring: Ct,
        decay: function(e) {
            var t = e.velocity
              , n = void 0 === t ? 0 : t
              , r = e.from
              , o = void 0 === r ? 0 : r
              , a = e.power
              , i = void 0 === a ? .8 : a
              , u = e.timeConstant
              , l = void 0 === u ? 350 : u
              , c = e.restDelta
              , s = void 0 === c ? .5 : c
              , f = e.modifyTarget
              , p = {
                done: !1,
                value: o
            }
              , d = i * n
              , y = o + d
              , v = void 0 === f ? y : f(y);
            return v !== y && (d = v - o),
            {
                next: function(e) {
                    var t = -d * Math.exp(-e / l);
                    return p.done = !(t > s || t < -s),
                    p.value = p.done ? v : v + t,
                    p
                },
                flipTarget: function() {}
            }
        }
    };
    var Cn = n(6);
    function Ln(e, t, n) {
        return void 0 === n && (n = 0),
        e - t - n
    }
    var Rn = function(e) {
        var t = function(t) {
            var n = t.delta;
            return e(n)
        };
        return {
            start: function() {
                return Cn.b.update(t, !0)
            },
            stop: function() {
                return Cn.a.update(t)
            }
        }
    };
    function Mn(e) {
        var t, n, r, o, a, i = e.from, u = e.autoplay, l = void 0 === u || u, c = e.driver, s = void 0 === c ? Rn : c, f = e.elapsed, p = void 0 === f ? 0 : f, d = e.repeat, y = void 0 === d ? 0 : d, v = e.repeatType, h = void 0 === v ? "loop" : v, m = e.repeatDelay, g = void 0 === m ? 0 : m, b = e.onPlay, w = e.onStop, O = e.onComplete, k = e.onRepeat, S = e.onUpdate, E = St(e, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]), P = E.to, _ = 0, x = E.duration, j = !1, T = !0, A = function(e) {
            if (Array.isArray(e.to))
                return Tn;
            if (An[e.type])
                return An[e.type];
            var t = new Set(Object.keys(e));
            return t.has("ease") || t.has("duration") && !t.has("dampingRatio") ? Tn : t.has("dampingRatio") || t.has("stiffness") || t.has("mass") || t.has("damping") || t.has("restSpeed") || t.has("restDelta") ? Ct : Tn
        }(E);
        (null === (n = (t = A).needsInterpolation) || void 0 === n ? void 0 : n.call(t, i, P)) && (a = sn([0, 100], [i, P], {
            clamp: !1
        }),
        i = 0,
        P = 100);
        var C = A(kt(kt({}, E), {
            from: i,
            to: P
        }));
        function L() {
            _++,
            "reverse" === h ? p = function(e, t, n, r) {
                return void 0 === n && (n = 0),
                void 0 === r && (r = !0),
                r ? Ln(t + -e, t, n) : t - (e - t) + n
            }(p, x, g, T = _ % 2 === 0) : (p = Ln(p, x, g),
            "mirror" === h && C.flipTarget()),
            j = !1,
            k && k()
        }
        function R(e) {
            if (T || (e = -e),
            p += e,
            !j) {
                var t = C.next(Math.max(0, p));
                o = t.value,
                a && (o = a(o)),
                j = T ? t.done : p <= 0
            }
            null === S || void 0 === S || S(o),
            j && (0 === _ && (null !== x && void 0 !== x || (x = p)),
            _ < y ? function(e, t, n, r) {
                return r ? e >= t + n : e <= -n
            }(p, x, g, T) && L() : (r.stop(),
            O && O()))
        }
        return l && (null === b || void 0 === b || b(),
        (r = s(R)).start()),
        {
            stop: function() {
                null === w || void 0 === w || w(),
                r.stop()
            }
        }
    }
    function Dn(e, t) {
        return t ? e * (1e3 / t) : 0
    }
    var Nn = function(e) {
        return 1e3 * e
    }
      , Vn = function(e, t) {
        return 1 - 3 * t + 3 * e
    }
      , In = function(e, t) {
        return 3 * t - 6 * e
    }
      , Un = function(e) {
        return 3 * e
    }
      , Fn = function(e, t, n) {
        return ((Vn(t, n) * e + In(t, n)) * e + Un(t)) * e
    }
      , zn = function(e, t, n) {
        return 3 * Vn(t, n) * e * e + 2 * In(t, n) * e + Un(t)
    };
    var Bn = .1;
    function Hn(e, t, n, r) {
        if (e === t && n === r)
            return vn;
        for (var o = new Float32Array(11), a = 0; a < 11; ++a)
            o[a] = Fn(a * Bn, e, n);
        function i(t) {
            for (var r = 0, a = 1; 10 !== a && o[a] <= t; ++a)
                r += Bn;
            --a;
            var i = r + (t - o[a]) / (o[a + 1] - o[a]) * Bn
              , u = zn(i, e, n);
            return u >= .001 ? function(e, t, n, r) {
                for (var o = 0; o < 8; ++o) {
                    var a = zn(t, n, r);
                    if (0 === a)
                        return t;
                    t -= (Fn(t, n, r) - e) / a
                }
                return t
            }(t, i, e, n) : 0 === u ? i : function(e, t, n, r, o) {
                var a, i, u = 0;
                do {
                    (a = Fn(i = t + (n - t) / 2, r, o) - e) > 0 ? n = i : t = i
                } while (Math.abs(a) > 1e-7 && ++u < 10);
                return i
            }(t, r, r + Bn, e, n)
        }
        return function(e) {
            return 0 === e || 1 === e ? e : Fn(i(e), t, r)
        }
    }
    var Wn = {
        linear: vn,
        easeIn: hn,
        easeInOut: gn,
        easeOut: mn,
        circIn: bn,
        circInOut: On,
        circOut: wn,
        backIn: kn,
        backInOut: En,
        backOut: Sn,
        anticipate: Pn,
        bounceIn: xn,
        bounceInOut: function(e) {
            return e < .5 ? .5 * (1 - _n(1 - 2 * e)) : .5 * _n(2 * e - 1) + .5
        },
        bounceOut: _n
    }
      , qn = function(e) {
        if (Array.isArray(e)) {
            e.length;
            var t = Object(r.c)(e, 4);
            return Hn(t[0], t[1], t[2], t[3])
        }
        return "string" === typeof e ? Wn[e] : e
    }
      , $n = function(e, t) {
        return "zIndex" !== e && (!("number" !== typeof t && !Array.isArray(t)) || !("string" !== typeof t || !en.test(t) || t.startsWith("url(")))
    }
      , Kn = function() {
        return {
            type: "spring",
            stiffness: 500,
            damping: 25,
            restDelta: .5,
            restSpeed: 10
        }
    }
      , Yn = function(e) {
        return {
            type: "spring",
            stiffness: 550,
            damping: 0 === e ? 2 * Math.sqrt(550) : 30,
            restDelta: .01,
            restSpeed: 10
        }
    }
      , Xn = function() {
        return {
            type: "keyframes",
            ease: "linear",
            duration: .3
        }
    }
      , Qn = function(e) {
        return {
            type: "keyframes",
            duration: .8,
            values: e
        }
    }
      , Gn = {
        x: Kn,
        y: Kn,
        z: Kn,
        rotate: Kn,
        rotateX: Kn,
        rotateY: Kn,
        rotateZ: Kn,
        scaleX: Yn,
        scaleY: Yn,
        scale: Yn,
        opacity: Xn,
        backgroundColor: Xn,
        color: Xn,
        default: Yn
    }
      , Zn = new Set(["brightness", "contrast", "saturate", "opacity"]);
    function Jn(e) {
        var t = e.slice(0, -1).split("(")
          , n = t[0]
          , r = t[1];
        if ("drop-shadow" === n)
            return e;
        var o = (r.match(J) || [])[0];
        if (!o)
            return e;
        var a = r.replace(o, "")
          , i = Zn.has(n) ? 1 : 0;
        return o !== r && (i *= 100),
        n + "(" + i + a + ")"
    }
    var er = /([a-z-]*)\(.*?\)/g
      , tr = Q(Q({}, en), {
        getAnimatableNone: function(e) {
            var t = e.match(er);
            return t ? t.map(Jn).join(" ") : e
        }
    })
      , nr = Object(r.a)(Object(r.a)({}, ye), {
        color: Kt,
        backgroundColor: Kt,
        outlineColor: Kt,
        fill: Kt,
        stroke: Kt,
        borderColor: Kt,
        borderTopColor: Kt,
        borderRightColor: Kt,
        borderBottomColor: Kt,
        borderLeftColor: Kt,
        filter: tr,
        WebkitFilter: tr
    })
      , rr = function(e) {
        return nr[e]
    };
    function or(e, t) {
        var n, r = rr(e);
        return r !== tr && (r = en),
        null === (n = r.getAnimatableNone) || void 0 === n ? void 0 : n.call(r, t)
    }
    function ar(e) {
        var t = e.ease
          , n = e.times
          , o = e.yoyo
          , a = e.flip
          , i = e.loop
          , u = Object(r.d)(e, ["ease", "times", "yoyo", "flip", "loop"])
          , l = Object(r.a)({}, u);
        return n && (l.offset = n),
        u.duration && (l.duration = Nn(u.duration)),
        u.repeatDelay && (l.repeatDelay = Nn(u.repeatDelay)),
        t && (l.ease = function(e) {
            return Array.isArray(e) && "number" !== typeof e[0]
        }(t) ? t.map(qn) : qn(t)),
        "tween" === u.type && (l.type = "keyframes"),
        (o || i || a) && (!0,
        o ? l.repeatType = "reverse" : i ? l.repeatType = "loop" : a && (l.repeatType = "mirror"),
        l.repeat = i || o || a || u.repeat),
        "spring" !== u.type && (l.type = "keyframes"),
        l
    }
    function ir(e, t, n) {
        var o;
        return Array.isArray(t.to) && (null !== (o = e.duration) && void 0 !== o || (e.duration = .8)),
        function(e) {
            Array.isArray(e.to) && null === e.to[0] && (e.to = Object(r.e)([], Object(r.c)(e.to)),
            e.to[0] = e.from)
        }(t),
        function(e) {
            e.when,
            e.delay,
            e.delayChildren,
            e.staggerChildren,
            e.staggerDirection,
            e.repeat,
            e.repeatType,
            e.repeatDelay,
            e.from;
            var t = Object(r.d)(e, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"]);
            return !!Object.keys(t).length
        }(e) || (e = Object(r.a)(Object(r.a)({}, e), function(e, t) {
            var n;
            return n = Fe(t) ? Qn : Gn[e] || Gn.default,
            Object(r.a)({
                to: t
            }, n(t))
        }(n, t.to))),
        Object(r.a)(Object(r.a)({}, t), ar(e))
    }
    function ur(e, t, n, o, a) {
        var i, u = sr(o, e), l = null !== (i = u.from) && void 0 !== i ? i : t.get(), c = $n(e, n);
        "none" === l && c && "string" === typeof n ? l = or(e, n) : lr(l) && "string" === typeof n ? l = cr(n) : !Array.isArray(n) && lr(n) && "string" === typeof l && (n = cr(l));
        var s = $n(e, l);
        return s && c && !1 !== u.type ? function() {
            var o = {
                from: l,
                to: n,
                velocity: t.getVelocity(),
                onComplete: a,
                onUpdate: function(e) {
                    return t.set(e)
                }
            };
            return "inertia" === u.type || "decay" === u.type ? function(e) {
                var t, n = e.from, r = void 0 === n ? 0 : n, o = e.velocity, a = void 0 === o ? 0 : o, i = e.min, u = e.max, l = e.power, c = void 0 === l ? .8 : l, s = e.timeConstant, f = void 0 === s ? 750 : s, p = e.bounceStiffness, d = void 0 === p ? 500 : p, y = e.bounceDamping, v = void 0 === y ? 10 : y, h = e.restDelta, m = void 0 === h ? 1 : h, g = e.modifyTarget, b = e.driver, w = e.onUpdate, O = e.onComplete;
                function k(e) {
                    return void 0 !== i && e < i || void 0 !== u && e > u
                }
                function S(e) {
                    return void 0 === i ? u : void 0 === u || Math.abs(i - e) < Math.abs(u - e) ? i : u
                }
                function E(e) {
                    null === t || void 0 === t || t.stop(),
                    t = Mn(kt(kt({}, e), {
                        driver: b,
                        onUpdate: function(t) {
                            var n;
                            null === w || void 0 === w || w(t),
                            null === (n = e.onUpdate) || void 0 === n || n.call(e, t)
                        },
                        onComplete: O
                    }))
                }
                function P(e) {
                    E(kt({
                        type: "spring",
                        stiffness: d,
                        damping: v,
                        restDelta: m
                    }, e))
                }
                if (k(r))
                    P({
                        from: r,
                        velocity: a,
                        to: S(r)
                    });
                else {
                    var _ = c * a + r;
                    "undefined" !== typeof g && (_ = g(_));
                    var x, j, T = S(_), A = T === i ? -1 : 1;
                    E({
                        type: "decay",
                        from: r,
                        velocity: a,
                        timeConstant: f,
                        power: c,
                        restDelta: m,
                        modifyTarget: g,
                        onUpdate: k(_) ? function(e) {
                            x = j,
                            j = e,
                            a = Dn(e - x, Object(Cn.d)().delta),
                            (1 === A && e > T || -1 === A && e < T) && P({
                                from: e,
                                to: T,
                                velocity: a
                            })
                        }
                        : void 0
                    })
                }
                return {
                    stop: function() {
                        return null === t || void 0 === t ? void 0 : t.stop()
                    }
                }
            }(Object(r.a)(Object(r.a)({}, o), u)) : Mn(Object(r.a)(Object(r.a)({}, ir(u, o, e)), {
                onUpdate: function(e) {
                    var t;
                    o.onUpdate(e),
                    null === (t = u.onUpdate) || void 0 === t || t.call(u, e)
                },
                onComplete: function() {
                    var e;
                    o.onComplete(),
                    null === (e = u.onComplete) || void 0 === e || e.call(u)
                }
            }))
        }
        : function() {
            var e;
            return t.set(n),
            a(),
            null === (e = null === u || void 0 === u ? void 0 : u.onComplete) || void 0 === e || e.call(u),
            {
                stop: function() {}
            }
        }
    }
    function lr(e) {
        return 0 === e || "string" === typeof e && 0 === parseFloat(e) && -1 === e.indexOf(" ")
    }
    function cr(e) {
        return "number" === typeof e ? 0 : or("", e)
    }
    function sr(e, t) {
        return e[t] || e.default || e
    }
    function fr(e, t, n, r) {
        return void 0 === r && (r = {}),
        t.start((function(o) {
            var a, i, u = ur(e, t, n, r, o), l = function(e, t) {
                var n;
                return null !== (n = (sr(e, t) || {}).delay) && void 0 !== n ? n : 0
            }(r, e), c = function() {
                return i = u()
            };
            return l ? a = setTimeout(c, Nn(l)) : c(),
            function() {
                clearTimeout(a),
                null === i || void 0 === i || i.stop()
            }
        }
        ))
    }
    function pr(e, t) {
        -1 === e.indexOf(t) && e.push(t)
    }
    function dr(e, t) {
        var n = e.indexOf(t);
        n > -1 && e.splice(n, 1)
    }
    var yr = function() {
        function e() {
            this.subscriptions = []
        }
        return e.prototype.add = function(e) {
            var t = this;
            return pr(this.subscriptions, e),
            function() {
                return dr(t.subscriptions, e)
            }
        }
        ,
        e.prototype.notify = function(e, t, n) {
            var r = this.subscriptions.length;
            if (r)
                if (1 === r)
                    this.subscriptions[0](e, t, n);
                else
                    for (var o = 0; o < r; o++) {
                        var a = this.subscriptions[o];
                        a && a(e, t, n)
                    }
        }
        ,
        e.prototype.getSize = function() {
            return this.subscriptions.length
        }
        ,
        e.prototype.clear = function() {
            this.subscriptions.length = 0
        }
        ,
        e
    }()
      , vr = function() {
        function e(e) {
            var t, n = this;
            this.timeDelta = 0,
            this.lastUpdated = 0,
            this.updateSubscribers = new yr,
            this.velocityUpdateSubscribers = new yr,
            this.renderSubscribers = new yr,
            this.canTrackVelocity = !1,
            this.updateAndNotify = function(e, t) {
                void 0 === t && (t = !0),
                n.prev = n.current,
                n.current = e;
                var r = Object(Cn.d)()
                  , o = r.delta
                  , a = r.timestamp;
                n.lastUpdated !== a && (n.timeDelta = o,
                n.lastUpdated = a,
                Cn.b.postRender(n.scheduleVelocityCheck)),
                n.prev !== n.current && n.updateSubscribers.notify(n.current),
                n.velocityUpdateSubscribers.getSize() && n.velocityUpdateSubscribers.notify(n.getVelocity()),
                t && n.renderSubscribers.notify(n.current)
            }
            ,
            this.scheduleVelocityCheck = function() {
                return Cn.b.postRender(n.velocityCheck)
            }
            ,
            this.velocityCheck = function(e) {
                e.timestamp !== n.lastUpdated && (n.prev = n.current,
                n.velocityUpdateSubscribers.notify(n.getVelocity()))
            }
            ,
            this.hasAnimated = !1,
            this.prev = this.current = e,
            this.canTrackVelocity = (t = this.current,
            !isNaN(parseFloat(t)))
        }
        return e.prototype.onChange = function(e) {
            return this.updateSubscribers.add(e)
        }
        ,
        e.prototype.clearListeners = function() {
            this.updateSubscribers.clear()
        }
        ,
        e.prototype.onRenderRequest = function(e) {
            return e(this.get()),
            this.renderSubscribers.add(e)
        }
        ,
        e.prototype.attach = function(e) {
            this.passiveEffect = e
        }
        ,
        e.prototype.set = function(e, t) {
            void 0 === t && (t = !0),
            t && this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e, t)
        }
        ,
        e.prototype.get = function() {
            return this.current
        }
        ,
        e.prototype.getPrevious = function() {
            return this.prev
        }
        ,
        e.prototype.getVelocity = function() {
            return this.canTrackVelocity ? Dn(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
        }
        ,
        e.prototype.start = function(e) {
            var t = this;
            return this.stop(),
            new Promise((function(n) {
                t.hasAnimated = !0,
                t.stopAnimation = e(n)
            }
            )).then((function() {
                return t.clearAnimation()
            }
            ))
        }
        ,
        e.prototype.stop = function() {
            this.stopAnimation && this.stopAnimation(),
            this.clearAnimation()
        }
        ,
        e.prototype.isAnimating = function() {
            return !!this.stopAnimation
        }
        ,
        e.prototype.clearAnimation = function() {
            this.stopAnimation = null
        }
        ,
        e.prototype.destroy = function() {
            this.updateSubscribers.clear(),
            this.renderSubscribers.clear(),
            this.stop()
        }
        ,
        e
    }();
    function hr(e) {
        return new vr(e)
    }
    var mr = function(e) {
        return function(t) {
            return t.test(e)
        }
    }
      , gr = [se, ie, ae, oe, le, ue, {
        test: function(e) {
            return "auto" === e
        },
        parse: function(e) {
            return e
        }
    }]
      , br = function(e) {
        return gr.find(mr(e))
    }
      , wr = Object(r.e)(Object(r.e)([], Object(r.c)(gr)), [Kt, en])
      , Or = function(e) {
        return wr.find(mr(e))
    };
    function kr(e, t, n) {
        e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, hr(n))
    }
    function Sr(e, t) {
        var n = j(e, t)
          , o = n ? e.makeTargetAnimatable(n, !1) : {}
          , a = o.transitionEnd
          , i = void 0 === a ? {} : a;
        o.transition;
        var u, l = Object(r.d)(o, ["transitionEnd", "transition"]);
        for (var c in l = Object(r.a)(Object(r.a)({}, l), i)) {
            kr(e, c, (u = l[c],
            Fe(u) ? u[u.length - 1] || 0 : u))
        }
    }
    function Er(e, t) {
        if (t)
            return (t[e] || t.default || t).from
    }
    function Pr(e, t, n) {
        var o;
        void 0 === n && (n = {});
        var a = j(e, t, n.custom)
          , i = (a || {}).transition
          , u = void 0 === i ? e.getDefaultTransition() || {} : i;
        n.transitionOverride && (u = n.transitionOverride);
        var l = a ? function() {
            return _r(e, a, n)
        }
        : function() {
            return Promise.resolve()
        }
          , c = (null === (o = e.variantChildren) || void 0 === o ? void 0 : o.size) ? function(o) {
            void 0 === o && (o = 0);
            var a = u.delayChildren
              , i = void 0 === a ? 0 : a
              , l = u.staggerChildren
              , c = u.staggerDirection;
            return function(e, t, n, o, a, i) {
                void 0 === n && (n = 0);
                void 0 === o && (o = 0);
                void 0 === a && (a = 1);
                var u = []
                  , l = (e.variantChildren.size - 1) * o
                  , c = 1 === a ? function(e) {
                    return void 0 === e && (e = 0),
                    e * o
                }
                : function(e) {
                    return void 0 === e && (e = 0),
                    l - e * o
                }
                ;
                return Array.from(e.variantChildren).sort(xr).forEach((function(e, o) {
                    u.push(Pr(e, t, Object(r.a)(Object(r.a)({}, i), {
                        delay: n + c(o)
                    })).then((function() {
                        return e.notifyAnimationComplete(t)
                    }
                    )))
                }
                )),
                Promise.all(u)
            }(e, t, i + o, l, c, n)
        }
        : function() {
            return Promise.resolve()
        }
          , s = u.when;
        if (s) {
            var f = Object(r.c)("beforeChildren" === s ? [l, c] : [c, l], 2)
              , p = f[0]
              , d = f[1];
            return p().then(d)
        }
        return Promise.all([l(), c(n.delay)])
    }
    function _r(e, t, n) {
        var o, a = void 0 === n ? {} : n, i = a.delay, u = void 0 === i ? 0 : i, l = a.transitionOverride, c = a.type, s = e.makeTargetAnimatable(t), f = s.transition, p = void 0 === f ? e.getDefaultTransition() : f, d = s.transitionEnd, y = Object(r.d)(s, ["transition", "transitionEnd"]);
        l && (p = l);
        var v = []
          , h = c && (null === (o = e.animationState) || void 0 === o ? void 0 : o.getState()[c]);
        for (var m in y) {
            var g = e.getValue(m)
              , b = y[m];
            if (!(!g || void 0 === b || h && jr(h, m))) {
                var w = fr(m, g, b, Object(r.a)({
                    delay: u
                }, p));
                v.push(w)
            }
        }
        return Promise.all(v).then((function() {
            d && Sr(e, d)
        }
        ))
    }
    function xr(e, t) {
        return e.sortNodePosition(t)
    }
    function jr(e, t) {
        var n = e.protectedKeys
          , r = e.needsAnimating
          , o = n.hasOwnProperty(t) && !0 !== r[t];
        return r[t] = !1,
        o
    }
    var Tr = [$e.Animate, $e.Hover, $e.Tap, $e.Drag, $e.Focus, $e.Exit]
      , Ar = Object(r.e)([], Object(r.c)(Tr)).reverse()
      , Cr = Tr.length;
    function Lr(e) {
        return function(t) {
            return Promise.all(t.map((function(t) {
                var n = t.animation
                  , r = t.options;
                return function(e, t, n) {
                    var r;
                    if (void 0 === n && (n = {}),
                    e.notifyAnimationStart(),
                    Array.isArray(t)) {
                        var o = t.map((function(t) {
                            return Pr(e, t, n)
                        }
                        ));
                        r = Promise.all(o)
                    } else if ("string" === typeof t)
                        r = Pr(e, t, n);
                    else {
                        var a = "function" === typeof t ? j(e, t, n.custom) : t;
                        r = _r(e, a, n)
                    }
                    return r.then((function() {
                        return e.notifyAnimationComplete(t)
                    }
                    ))
                }(e, n, r)
            }
            )))
        }
    }
    function Rr(e) {
        var t = Lr(e)
          , n = function() {
            var e;
            return (e = {})[$e.Animate] = Mr(!0),
            e[$e.Hover] = Mr(),
            e[$e.Tap] = Mr(),
            e[$e.Drag] = Mr(),
            e[$e.Focus] = Mr(),
            e[$e.Exit] = Mr(),
            e
        }()
          , o = {}
          , a = !0
          , i = function(t, n) {
            var o = j(e, n);
            if (o) {
                o.transition;
                var a = o.transitionEnd
                  , i = Object(r.d)(o, ["transition", "transitionEnd"]);
                t = Object(r.a)(Object(r.a)(Object(r.a)({}, t), i), a)
            }
            return t
        };
        function u(u, l) {
            for (var c, s = e.getProps(), f = e.getVariantContext(!0) || {}, p = [], d = new Set, y = {}, v = 1 / 0, h = function(t) {
                var o = Ar[t]
                  , h = n[o]
                  , m = null !== (c = s[o]) && void 0 !== c ? c : f[o]
                  , g = _(m)
                  , b = o === l ? h.isActive : null;
                !1 === b && (v = t);
                var w = m === f[o] && m !== s[o] && g;
                if (w && a && e.manuallyAnimateOnMount && (w = !1),
                h.protectedKeys = Object(r.a)({}, y),
                !h.isActive && null === b || !m && !h.prevProp || Ue(m) || "boolean" === typeof m)
                    return "continue";
                var O = function(e, t) {
                    if ("string" === typeof t)
                        return t !== e;
                    if (P(t))
                        return !Ot(t, e);
                    return !1
                }(h.prevProp, m) || o === l && h.isActive && !w && g || t > v && g
                  , k = Array.isArray(m) ? m : [m]
                  , S = k.reduce(i, {});
                !1 === b && (S = {});
                var E = h.prevResolvedValues
                  , x = void 0 === E ? {} : E
                  , j = Object(r.a)(Object(r.a)({}, x), S)
                  , T = function(e) {
                    O = !0,
                    d.delete(e),
                    h.needsAnimating[e] = !0
                };
                for (var A in j) {
                    var C = S[A]
                      , L = x[A];
                    y.hasOwnProperty(A) || (C !== L ? Fe(C) && Fe(L) ? Ot(C, L) ? h.protectedKeys[A] = !0 : T(A) : void 0 !== C ? T(A) : d.add(A) : void 0 !== C && d.has(A) ? T(A) : h.protectedKeys[A] = !0)
                }
                h.prevProp = m,
                h.prevResolvedValues = S,
                h.isActive && (y = Object(r.a)(Object(r.a)({}, y), S)),
                a && e.blockInitialAnimation && (O = !1),
                O && !w && p.push.apply(p, Object(r.e)([], Object(r.c)(k.map((function(e) {
                    return {
                        animation: e,
                        options: Object(r.a)({
                            type: o
                        }, u)
                    }
                }
                )))))
            }, m = 0; m < Cr; m++)
                h(m);
            if (o = Object(r.a)({}, y),
            d.size) {
                var g = {};
                d.forEach((function(t) {
                    var n = e.getBaseTarget(t);
                    void 0 !== n && (g[t] = n)
                }
                )),
                p.push({
                    animation: g
                })
            }
            var b = Boolean(p.length);
            return a && !1 === s.initial && !e.manuallyAnimateOnMount && (b = !1),
            a = !1,
            b ? t(p) : Promise.resolve()
        }
        return {
            isAnimated: function(e) {
                return void 0 !== o[e]
            },
            animateChanges: u,
            setActive: function(t, r, o) {
                var a;
                return n[t].isActive === r ? Promise.resolve() : (null === (a = e.variantChildren) || void 0 === a || a.forEach((function(e) {
                    var n;
                    return null === (n = e.animationState) || void 0 === n ? void 0 : n.setActive(t, r)
                }
                )),
                n[t].isActive = r,
                u(o, t))
            },
            setAnimateFunction: function(n) {
                t = n(e)
            },
            getState: function() {
                return n
            }
        }
    }
    function Mr(e) {
        return void 0 === e && (e = !1),
        {
            isActive: e,
            protectedKeys: {},
            needsAnimating: {},
            prevResolvedValues: {}
        }
    }
    var Dr = {
        animation: bt((function(e) {
            var t = e.visualElement
              , n = e.animate;
            t.animationState || (t.animationState = Rr(t)),
            Ue(n) && Object(o.useEffect)((function() {
                return n.subscribe(t)
            }
            ), [n])
        }
        )),
        exit: bt((function(e) {
            var t = e.custom
              , n = e.visualElement
              , a = Object(r.c)(v(), 2)
              , i = a[0]
              , u = a[1]
              , l = Object(o.useContext)(d.a);
            Object(o.useEffect)((function() {
                var e, r, o = null === (e = n.animationState) || void 0 === e ? void 0 : e.setActive($e.Exit, !i, {
                    custom: null !== (r = null === l || void 0 === l ? void 0 : l.custom) && void 0 !== r ? r : t
                });
                !i && (null === o || void 0 === o || o.then(u))
            }
            ), [i])
        }
        ))
    }
      , Nr = function(e) {
        return e.hasOwnProperty("x") && e.hasOwnProperty("y")
    }
      , Vr = function(e) {
        return Nr(e) && e.hasOwnProperty("z")
    }
      , Ir = function(e, t) {
        return Math.abs(e - t)
    };
    function Ur(e, t) {
        if (tn(e) && tn(t))
            return Ir(e, t);
        if (Nr(e) && Nr(t)) {
            var n = Ir(e.x, t.x)
              , r = Ir(e.y, t.y)
              , o = Vr(e) && Vr(t) ? Ir(e.z, t.z) : 0;
            return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2) + Math.pow(o, 2))
        }
    }
    var Fr = function() {
        function e(e, t, n) {
            var o = this
              , a = (void 0 === n ? {} : n).transformPagePoint;
            if (this.startEvent = null,
            this.lastMoveEvent = null,
            this.lastMoveEventInfo = null,
            this.handlers = {},
            this.updatePoint = function() {
                if (o.lastMoveEvent && o.lastMoveEventInfo) {
                    var e = Hr(o.lastMoveEventInfo, o.history)
                      , t = null !== o.startEvent
                      , n = Ur(e.offset, {
                        x: 0,
                        y: 0
                    }) >= 3;
                    if (t || n) {
                        var a = e.point
                          , i = Object(Cn.d)().timestamp;
                        o.history.push(Object(r.a)(Object(r.a)({}, a), {
                            timestamp: i
                        }));
                        var u = o.handlers
                          , l = u.onStart
                          , c = u.onMove;
                        t || (l && l(o.lastMoveEvent, e),
                        o.startEvent = o.lastMoveEvent),
                        c && c(o.lastMoveEvent, e)
                    }
                }
            }
            ,
            this.handlePointerMove = function(e, t) {
                o.lastMoveEvent = e,
                o.lastMoveEventInfo = zr(t, o.transformPagePoint),
                Ge(e) && 0 === e.buttons ? o.handlePointerUp(e, t) : Cn.b.update(o.updatePoint, !0)
            }
            ,
            this.handlePointerUp = function(e, t) {
                o.end();
                var n = o.handlers.onEnd;
                if (n && o.startEvent) {
                    var r = Hr(zr(t, o.transformPagePoint), o.history);
                    n && n(e, r)
                }
            }
            ,
            !(Ze(e) && e.touches.length > 1)) {
                this.handlers = t,
                this.transformPagePoint = a;
                var i = zr(nt(e), this.transformPagePoint)
                  , u = i.point
                  , l = Object(Cn.d)().timestamp;
                this.history = [Object(r.a)(Object(r.a)({}, u), {
                    timestamp: l
                })];
                var c = t.onSessionStart;
                c && c(e, Hr(i, this.history)),
                this.removeListeners = yt(lt(window, "pointermove", this.handlePointerMove), lt(window, "pointerup", this.handlePointerUp), lt(window, "pointercancel", this.handlePointerUp))
            }
        }
        return e.prototype.updateHandlers = function(e) {
            this.handlers = e
        }
        ,
        e.prototype.end = function() {
            this.removeListeners && this.removeListeners(),
            Cn.a.update(this.updatePoint)
        }
        ,
        e
    }();
    function zr(e, t) {
        return t ? {
            point: t(e.point)
        } : e
    }
    function Br(e, t) {
        return {
            x: e.x - t.x,
            y: e.y - t.y
        }
    }
    function Hr(e, t) {
        var n = e.point;
        return {
            point: n,
            delta: Br(n, qr(t)),
            offset: Br(n, Wr(t)),
            velocity: $r(t, .1)
        }
    }
    function Wr(e) {
        return e[0]
    }
    function qr(e) {
        return e[e.length - 1]
    }
    function $r(e, t) {
        if (e.length < 2)
            return {
                x: 0,
                y: 0
            };
        for (var n = e.length - 1, r = null, o = qr(e); n >= 0 && (r = e[n],
        !(o.timestamp - r.timestamp > Nn(t))); )
            n--;
        if (!r)
            return {
                x: 0,
                y: 0
            };
        var a = (o.timestamp - r.timestamp) / 1e3;
        if (0 === a)
            return {
                x: 0,
                y: 0
            };
        var i = {
            x: (o.x - r.x) / a,
            y: (o.y - r.y) / a
        };
        return i.x === 1 / 0 && (i.x = 0),
        i.y === 1 / 0 && (i.y = 0),
        i
    }
    function Kr(e) {
        return e
    }
    function Yr(e) {
        var t = e.top;
        return {
            x: {
                min: e.left,
                max: e.right
            },
            y: {
                min: t,
                max: e.bottom
            }
        }
    }
    var Xr = {
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    };
    function Qr() {
        return {
            x: Object(r.a)({}, Xr),
            y: Object(r.a)({}, Xr)
        }
    }
    function Gr(e) {
        return [e("x"), e("y")]
    }
    function Zr(e, t, n) {
        var r = t.min
          , o = t.max;
        return void 0 !== r && e < r ? e = n ? Mt(r, e, n.min) : Math.max(e, r) : void 0 !== o && e > o && (e = n ? Mt(o, e, n.max) : Math.min(e, o)),
        e
    }
    function Jr(e, t, n) {
        return {
            min: void 0 !== t ? e.min + t : void 0,
            max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0
        }
    }
    function eo(e, t) {
        var n, o = t.min - e.min, a = t.max - e.max;
        return t.max - t.min < e.max - e.min && (o = (n = Object(r.c)([a, o], 2))[0],
        a = n[1]),
        {
            min: e.min + o,
            max: e.min + a
        }
    }
    function to(e, t, n) {
        return {
            min: no(e, t),
            max: no(e, n)
        }
    }
    function no(e, t) {
        var n;
        return "number" === typeof e ? e : null !== (n = e[t]) && void 0 !== n ? n : 0
    }
    function ro(e, t) {
        return Yr(function(e, t) {
            var n = e.top
              , r = e.left
              , o = e.bottom
              , a = e.right;
            void 0 === t && (t = Kr);
            var i = t({
                x: r,
                y: n
            })
              , u = t({
                x: a,
                y: o
            });
            return {
                top: i.y,
                left: i.x,
                bottom: u.y,
                right: u.x
            }
        }(e.getBoundingClientRect(), t))
    }
    function oo(e, t, n) {
        return void 0 === t && (t = 0),
        void 0 === n && (n = .01),
        Ur(e, t) < n
    }
    function ao(e) {
        return e.max - e.min
    }
    function io(e, t) {
        var n = .5
          , r = ao(e)
          , o = ao(t);
        return o > r ? n = Rt(t.min, t.max - r, e.min) : r > o && (n = Rt(e.min, e.max - o, t.min)),
        Et(0, 1, n)
    }
    function uo(e, t, n, r) {
        void 0 === r && (r = .5),
        e.origin = r,
        e.originPoint = Mt(t.min, t.max, e.origin),
        e.scale = ao(n) / ao(t),
        oo(e.scale, 1, 1e-4) && (e.scale = 1),
        e.translate = Mt(n.min, n.max, e.origin) - e.originPoint,
        oo(e.translate) && (e.translate = 0)
    }
    function lo(e, t, n, r) {
        uo(e.x, t.x, n.x, co(r.originX)),
        uo(e.y, t.y, n.y, co(r.originY))
    }
    function co(e) {
        return "number" === typeof e ? e : .5
    }
    function so(e, t, n) {
        e.min = n.min + t.min,
        e.max = e.min + ao(t)
    }
    var fo, po = new WeakMap, yo = function() {
        function e(e) {
            var t = e.visualElement;
            this.isDragging = !1,
            this.currentDirection = null,
            this.constraints = !1,
            this.elastic = {
                x: {
                    min: 0,
                    max: 1
                },
                y: {
                    min: 0,
                    max: 1
                }
            },
            this.props = {},
            this.hasMutatedConstraints = !1,
            this.cursorProgress = {
                x: .5,
                y: .5
            },
            this.originPoint = {},
            this.openGlobalLock = null,
            this.panSession = null,
            this.visualElement = t,
            this.visualElement.enableLayoutProjection(),
            po.set(t, this)
        }
        return e.prototype.start = function(e, t) {
            var n = this
              , r = void 0 === t ? {} : t
              , o = r.snapToCursor
              , a = void 0 !== o && o
              , i = r.cursorProgress;
            a && this.snapToCursor(e);
            var u = this.props.transformPagePoint;
            this.panSession = new Fr(e,{
                onSessionStart: function() {
                    n.stopMotion()
                },
                onStart: function(e, t) {
                    var r, o, a, u = n.props, l = u.drag, c = u.dragPropagation;
                    if (!l || c || (n.openGlobalLock && n.openGlobalLock(),
                    n.openGlobalLock = gt(l),
                    n.openGlobalLock)) {
                        n.prepareBoundingBox(),
                        n.visualElement.lockProjectionTarget(),
                        n.resolveDragConstraints();
                        var s = rt(e).point;
                        Gr((function(e) {
                            var t = n.visualElement.projection.target[e]
                              , r = t.min
                              , o = t.max;
                            n.cursorProgress[e] = i ? i[e] : Rt(r, o, s[e]);
                            var a = n.getAxisMotionValue(e);
                            a && (n.originPoint[e] = a.get())
                        }
                        )),
                        n.isDragging = !0,
                        n.currentDirection = null,
                        null === (o = (r = n.props).onDragStart) || void 0 === o || o.call(r, e, t),
                        null === (a = n.visualElement.animationState) || void 0 === a || a.setActive($e.Drag, !0)
                    }
                },
                onMove: function(e, t) {
                    var r, o, a, i, u = n.props, l = u.dragPropagation, c = u.dragDirectionLock;
                    if (l || n.openGlobalLock) {
                        var s = t.offset;
                        if (c && null === n.currentDirection)
                            return n.currentDirection = function(e, t) {
                                void 0 === t && (t = 10);
                                var n = null;
                                Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x");
                                return n
                            }(s),
                            void (null !== n.currentDirection && (null === (o = (r = n.props).onDirectionLock) || void 0 === o || o.call(r, n.currentDirection)));
                        n.updateAxis("x", e, s),
                        n.updateAxis("y", e, s),
                        null === (i = (a = n.props).onDrag) || void 0 === i || i.call(a, e, t),
                        fo = e
                    }
                },
                onEnd: function(e, t) {
                    return n.stop(e, t)
                }
            },{
                transformPagePoint: u
            })
        }
        ,
        e.prototype.prepareBoundingBox = function() {
            var e = this.visualElement;
            e.withoutTransform((function() {
                e.updateLayoutMeasurement()
            }
            )),
            e.rebaseProjectionTarget(!0, e.measureViewportBox(!1))
        }
        ,
        e.prototype.resolveDragConstraints = function() {
            var e = this
              , t = this.props
              , n = t.dragConstraints
              , r = t.dragElastic;
            this.constraints = !!n && (E(n) ? this.resolveRefConstraints(this.visualElement.getLayoutState().layout, n) : function(e, t) {
                var n = t.top
                  , r = t.left
                  , o = t.bottom
                  , a = t.right;
                return {
                    x: Jr(e.x, r, a),
                    y: Jr(e.y, n, o)
                }
            }(this.visualElement.getLayoutState().layout, n)),
            this.elastic = function(e) {
                return !1 === e ? e = 0 : !0 === e && (e = .35),
                {
                    x: to(e, "left", "right"),
                    y: to(e, "top", "bottom")
                }
            }(r),
            this.constraints && !this.hasMutatedConstraints && Gr((function(t) {
                e.getAxisMotionValue(t) && (e.constraints[t] = function(e, t) {
                    var n = {};
                    return void 0 !== t.min && (n.min = t.min - e.min),
                    void 0 !== t.max && (n.max = t.max - e.min),
                    n
                }(e.visualElement.getLayoutState().layout[t], e.constraints[t]))
            }
            ))
        }
        ,
        e.prototype.resolveRefConstraints = function(e, t) {
            var n = this.props
              , r = n.onMeasureDragConstraints
              , o = n.transformPagePoint
              , a = t.current;
            this.constraintsBox = ro(a, o);
            var i = function(e, t) {
                return {
                    x: eo(e.x, t.x),
                    y: eo(e.y, t.y)
                }
            }(e, this.constraintsBox);
            if (r) {
                var u = r(function(e) {
                    var t = e.x
                      , n = e.y;
                    return {
                        top: n.min,
                        bottom: n.max,
                        left: t.min,
                        right: t.max
                    }
                }(i));
                this.hasMutatedConstraints = !!u,
                u && (i = Yr(u))
            }
            return i
        }
        ,
        e.prototype.cancelDrag = function() {
            var e;
            this.isDragging = !1,
            this.panSession && this.panSession.end(),
            this.panSession = null,
            !this.props.dragPropagation && this.openGlobalLock && (this.openGlobalLock(),
            this.openGlobalLock = null),
            null === (e = this.visualElement.animationState) || void 0 === e || e.setActive($e.Drag, !1)
        }
        ,
        e.prototype.stop = function(e, t) {
            var n;
            this.visualElement.unlockProjectionTarget(),
            null === (n = this.panSession) || void 0 === n || n.end(),
            this.panSession = null;
            var r = this.isDragging;
            if (this.cancelDrag(),
            r) {
                var o = this.props
                  , a = o.dragMomentum
                  , i = o.onDragEnd;
                if (a || this.elastic) {
                    var u = t.velocity;
                    this.animateDragEnd(u)
                }
                null === i || void 0 === i || i(e, t)
            }
        }
        ,
        e.prototype.snapToCursor = function(e) {
            var t = this;
            this.prepareBoundingBox(),
            Gr((function(n) {
                if (vo(n, t.props.drag, t.currentDirection)) {
                    var r = t.getAxisMotionValue(n);
                    if (r) {
                        var o = rt(e).point
                          , a = t.visualElement.getLayoutState().layout
                          , i = a[n].max - a[n].min
                          , u = a[n].min + i / 2
                          , l = o[n] - u;
                        t.originPoint[n] = o[n],
                        r.set(l)
                    } else
                        t.cursorProgress[n] = .5,
                        t.updateVisualElementAxis(n, e)
                }
            }
            ))
        }
        ,
        e.prototype.updateAxis = function(e, t, n) {
            if (vo(e, this.props.drag, this.currentDirection))
                return this.getAxisMotionValue(e) ? this.updateAxisMotionValue(e, n) : this.updateVisualElementAxis(e, t)
        }
        ,
        e.prototype.updateAxisMotionValue = function(e, t) {
            var n = this.getAxisMotionValue(e);
            if (t && n) {
                var r = this.originPoint[e] + t[e]
                  , o = this.constraints ? Zr(r, this.constraints[e], this.elastic[e]) : r;
                n.set(o)
            }
        }
        ,
        e.prototype.updateVisualElementAxis = function(e, t) {
            var n, r = this.visualElement.getLayoutState().layout[e], o = r.max - r.min, a = this.cursorProgress[e], i = function(e, t, n, r, o) {
                var a = e - t * n;
                return r ? Zr(a, r, o) : a
            }(rt(t).point[e], o, a, null === (n = this.constraints) || void 0 === n ? void 0 : n[e], this.elastic[e]);
            this.visualElement.setProjectionTargetAxis(e, i, i + o)
        }
        ,
        e.prototype.setProps = function(e) {
            var t = e.drag
              , n = void 0 !== t && t
              , o = e.dragDirectionLock
              , a = void 0 !== o && o
              , i = e.dragPropagation
              , u = void 0 !== i && i
              , l = e.dragConstraints
              , c = void 0 !== l && l
              , s = e.dragElastic
              , f = void 0 === s ? .35 : s
              , p = e.dragMomentum
              , d = void 0 === p || p
              , y = Object(r.d)(e, ["drag", "dragDirectionLock", "dragPropagation", "dragConstraints", "dragElastic", "dragMomentum"]);
            this.props = Object(r.a)({
                drag: n,
                dragDirectionLock: a,
                dragPropagation: u,
                dragConstraints: c,
                dragElastic: f,
                dragMomentum: d
            }, y)
        }
        ,
        e.prototype.getAxisMotionValue = function(e) {
            var t = this.props
              , n = t.layout
              , r = t.layoutId
              , o = "_drag" + e.toUpperCase();
            return this.props[o] ? this.props[o] : n || void 0 !== r ? void 0 : this.visualElement.getValue(e, 0)
        }
        ,
        e.prototype.animateDragEnd = function(e) {
            var t = this
              , n = this.props
              , o = n.drag
              , a = n.dragMomentum
              , i = n.dragElastic
              , u = n.dragTransition
              , l = Gr((function(n) {
                if (vo(n, o, t.currentDirection)) {
                    var l = t.constraints ? t.constraints[n] : {}
                      , c = i ? 200 : 1e6
                      , s = i ? 40 : 1e7
                      , f = Object(r.a)(Object(r.a)({
                        type: "inertia",
                        velocity: a ? e[n] : 0,
                        bounceStiffness: c,
                        bounceDamping: s,
                        timeConstant: 750,
                        restDelta: 1,
                        restSpeed: 10
                    }, u), l);
                    return t.getAxisMotionValue(n) ? t.startAxisValueAnimation(n, f) : t.visualElement.startLayoutAnimation(n, f)
                }
            }
            ));
            return Promise.all(l).then((function() {
                var e, n;
                null === (n = (e = t.props).onDragTransitionEnd) || void 0 === n || n.call(e)
            }
            ))
        }
        ,
        e.prototype.stopMotion = function() {
            var e = this;
            Gr((function(t) {
                var n = e.getAxisMotionValue(t);
                n ? n.stop() : e.visualElement.stopLayoutAnimation()
            }
            ))
        }
        ,
        e.prototype.startAxisValueAnimation = function(e, t) {
            var n = this.getAxisMotionValue(e);
            if (n) {
                var r = n.get();
                return n.set(r),
                n.set(r),
                fr(e, n, 0, t)
            }
        }
        ,
        e.prototype.scalePoint = function() {
            var e = this
              , t = this.props
              , n = t.drag;
            if (E(t.dragConstraints) && this.constraintsBox) {
                this.stopMotion();
                var r = {
                    x: 0,
                    y: 0
                };
                Gr((function(t) {
                    r[t] = io(e.visualElement.projection.target[t], e.constraintsBox[t])
                }
                )),
                this.prepareBoundingBox(),
                this.resolveDragConstraints(),
                Gr((function(t) {
                    if (vo(t, n, null)) {
                        var o = function(e, t, n) {
                            var r = e.max - e.min
                              , o = Mt(t.min, t.max - r, n);
                            return {
                                min: o,
                                max: o + r
                            }
                        }(e.visualElement.projection.target[t], e.constraintsBox[t], r[t])
                          , a = o.min
                          , i = o.max;
                        e.visualElement.setProjectionTargetAxis(t, a, i)
                    }
                }
                ))
            }
        }
        ,
        e.prototype.mount = function(e) {
            var t = this
              , n = lt(e.getInstance(), "pointerdown", (function(e) {
                var n = t.props
                  , r = n.drag
                  , o = n.dragListener;
                r && (void 0 === o || o) && t.start(e)
            }
            ))
              , r = Xe(window, "resize", (function() {
                t.scalePoint()
            }
            ))
              , o = e.onLayoutUpdate((function() {
                t.isDragging && t.resolveDragConstraints()
            }
            ))
              , a = e.prevDragCursor;
            return a && this.start(fo, {
                cursorProgress: a
            }),
            function() {
                null === n || void 0 === n || n(),
                null === r || void 0 === r || r(),
                null === o || void 0 === o || o(),
                t.cancelDrag()
            }
        }
        ,
        e
    }();
    function vo(e, t, n) {
        return (!0 === t || t === e) && (null === n || n === e)
    }
    var ho = {
        pan: bt((function(e) {
            var t = e.onPan
              , n = e.onPanStart
              , r = e.onPanEnd
              , a = e.onPanSessionStart
              , i = e.visualElement
              , u = t || n || r || a
              , l = Object(o.useRef)(null)
              , c = Object(o.useContext)(f).transformPagePoint
              , s = {
                onSessionStart: a,
                onStart: n,
                onMove: t,
                onEnd: function(e, t) {
                    l.current = null,
                    r && r(e, t)
                }
            };
            Object(o.useEffect)((function() {
                null !== l.current && l.current.updateHandlers(s)
            }
            )),
            ct(i, "pointerdown", u && function(e) {
                l.current = new Fr(e,s,{
                    transformPagePoint: c
                })
            }
            ),
            Object(pt.a)((function() {
                return l.current && l.current.end()
            }
            ))
        }
        )),
        drag: bt((function(e) {
            var t = e.dragControls
              , n = e.visualElement
              , a = Object(o.useContext)(f).transformPagePoint
              , i = Object(y.a)((function() {
                return new yo({
                    visualElement: n
                })
            }
            ));
            i.setProps(Object(r.a)(Object(r.a)({}, e), {
                transformPagePoint: a
            })),
            Object(o.useEffect)((function() {
                return t && t.subscribe(i)
            }
            ), [i]),
            Object(o.useEffect)((function() {
                return i.mount(n)
            }
            ), [])
        }
        ))
    };
    function mo(e, t) {
        return {
            min: t.min - e.min,
            max: t.max - e.min
        }
    }
    function go(e, t) {
        return {
            x: mo(e.x, t.x),
            y: mo(e.y, t.y)
        }
    }
    function bo(e, t) {
        var n = e.getLayoutId()
          , r = t.getLayoutId();
        return n !== r || void 0 === r && e !== t
    }
    var wo = n(16);
    function Oo(e) {
        return "string" === typeof e && e.startsWith("var(--")
    }
    var ko = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
    function So(e, t, n) {
        void 0 === n && (n = 1);
        var o = Object(r.c)(function(e) {
            var t = ko.exec(e);
            if (!t)
                return [, ];
            var n = Object(r.c)(t, 3);
            return [n[1], n[2]]
        }(e), 2)
          , a = o[0]
          , i = o[1];
        if (a) {
            var u = window.getComputedStyle(t).getPropertyValue(a);
            return u ? u.trim() : Oo(i) ? So(i, t, n + 1) : i
        }
    }
    function Eo(e, t) {
        return e / (t.max - t.min) * 100
    }
    var Po = "_$css";
    var _o = {
        process: function(e, t, n) {
            var r = n.target;
            if ("string" === typeof e) {
                if (!ie.test(e))
                    return e;
                e = parseFloat(e)
            }
            return Eo(e, r.x) + "% " + Eo(e, r.y) + "%"
        }
    }
      , xo = {
        borderRadius: Object(r.a)(Object(r.a)({}, _o), {
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
        }),
        borderTopLeftRadius: _o,
        borderTopRightRadius: _o,
        borderBottomLeftRadius: _o,
        borderBottomRightRadius: _o,
        boxShadow: {
            process: function(e, t) {
                var n = t.delta
                  , r = t.treeScale
                  , o = e
                  , a = e.includes("var(")
                  , i = [];
                a && (e = e.replace(ko, (function(e) {
                    return i.push(e),
                    Po
                }
                )));
                var u = en.parse(e);
                if (u.length > 5)
                    return o;
                var l = en.createTransformer(e)
                  , c = "number" !== typeof u[0] ? 1 : 0
                  , s = n.x.scale * r.x
                  , f = n.y.scale * r.y;
                u[0 + c] /= s,
                u[1 + c] /= f;
                var p = Mt(s, f, .5);
                "number" === typeof u[2 + c] && (u[2 + c] /= p),
                "number" === typeof u[3 + c] && (u[3 + c] /= p);
                var d = l(u);
                if (a) {
                    var y = 0;
                    d = d.replace(Po, (function() {
                        var e = i[y];
                        return y++,
                        e
                    }
                    ))
                }
                return d
            }
        }
    }
      , jo = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.frameTarget = {
                x: {
                    min: 0,
                    max: 1
                },
                y: {
                    min: 0,
                    max: 1
                }
            },
            t.currentAnimationTarget = {
                x: {
                    min: 0,
                    max: 1
                },
                y: {
                    min: 0,
                    max: 1
                }
            },
            t.isAnimating = {
                x: !1,
                y: !1
            },
            t.stopAxisAnimation = {
                x: void 0,
                y: void 0
            },
            t.isAnimatingTree = !1,
            t.animate = function(e, n, o) {
                void 0 === o && (o = {});
                var a = o.originBox
                  , i = o.targetBox
                  , u = o.visibilityAction
                  , l = o.shouldStackAnimate
                  , c = o.onComplete
                  , s = o.prevParent
                  , f = Object(r.d)(o, ["originBox", "targetBox", "visibilityAction", "shouldStackAnimate", "onComplete", "prevParent"])
                  , p = t.props
                  , d = p.visualElement
                  , y = p.layout;
                if (!1 === l)
                    return t.isAnimatingTree = !1,
                    t.safeToRemove();
                if (!t.isAnimatingTree || !0 === l) {
                    l && (t.isAnimatingTree = !0),
                    n = a || n,
                    e = i || e;
                    var v = !1
                      , h = d.getProjectionParent();
                    if (h) {
                        var m = h.prevViewportBox
                          , g = h.getLayoutState().layout;
                        s && (i && (g = s.getLayoutState().layout),
                        a && !bo(s, h) && s.prevViewportBox && (m = s.prevViewportBox)),
                        m && (v = !0,
                        n = go(m, n),
                        e = go(g, e))
                    }
                    var b = To(n, e)
                      , w = Gr((function(o) {
                        if ("position" === y) {
                            var a = e[o].max - e[o].min;
                            n[o].max = n[o].min + a
                        }
                        if (!d.projection.isTargetLocked)
                            return void 0 === u ? b ? t.animateAxis(o, e[o], n[o], Object(r.a)(Object(r.a)({}, f), {
                                isRelative: v
                            })) : d.setProjectionTargetAxis(o, e[o].min, e[o].max, v) : void d.setVisibility(u === wo.b.Show)
                    }
                    ));
                    return d.syncRender(),
                    Promise.all(w).then((function() {
                        t.isAnimatingTree = !1,
                        c && c(),
                        d.notifyLayoutAnimationComplete()
                    }
                    ))
                }
            }
            ,
            t
        }
        return Object(r.b)(t, e),
        t.prototype.componentDidMount = function() {
            var e = this
              , t = this.props.visualElement;
            t.animateMotionValue = fr,
            t.enableLayoutProjection(),
            this.unsubLayoutReady = t.onLayoutUpdate(this.animate),
            t.layoutSafeToRemove = function() {
                return e.safeToRemove()
            }
            ,
            function(e) {
                for (var t in e)
                    V[t] = e[t]
            }(xo)
        }
        ,
        t.prototype.componentWillUnmount = function() {
            var e = this;
            this.unsubLayoutReady(),
            Gr((function(t) {
                var n, r;
                return null === (r = (n = e.stopAxisAnimation)[t]) || void 0 === r ? void 0 : r.call(n)
            }
            ))
        }
        ,
        t.prototype.animateAxis = function(e, t, n, r) {
            var o, a, i = this, u = void 0 === r ? {} : r, l = u.transition, c = u.isRelative;
            if (!this.isAnimating[e] || !Lo(t, this.currentAnimationTarget[e])) {
                null === (a = (o = this.stopAxisAnimation)[e]) || void 0 === a || a.call(o),
                this.isAnimating[e] = !0;
                var s = this.props.visualElement
                  , f = this.frameTarget[e]
                  , p = s.getProjectionAnimationProgress()[e];
                p.clearListeners(),
                p.set(0),
                p.set(0);
                var d = function() {
                    var r = p.get() / 1e3;
                    !function(e, t, n, r) {
                        e.min = Mt(t.min, n.min, r),
                        e.max = Mt(t.max, n.max, r)
                    }(f, n, t, r),
                    s.setProjectionTargetAxis(e, f.min, f.max, c)
                };
                d();
                var y = p.onChange(d);
                this.stopAxisAnimation[e] = function() {
                    i.isAnimating[e] = !1,
                    p.stop(),
                    y()
                }
                ,
                this.currentAnimationTarget[e] = t;
                var v = l || s.getDefaultTransition() || Ro;
                return fr("x" === e ? "layoutX" : "layoutY", p, 1e3, v && sr(v, "layout")).then(this.stopAxisAnimation[e])
            }
        }
        ,
        t.prototype.safeToRemove = function() {
            var e, t;
            null === (t = (e = this.props).safeToRemove) || void 0 === t || t.call(e)
        }
        ,
        t.prototype.render = function() {
            return null
        }
        ,
        t
    }(o.Component);
    function To(e, t) {
        return !Co(e) && !Co(t) && (!Lo(e.x, t.x) || !Lo(e.y, t.y))
    }
    var Ao = {
        min: 0,
        max: 0
    };
    function Co(e) {
        return Lo(e.x, Ao) && Lo(e.y, Ao)
    }
    function Lo(e, t) {
        return e.min === t.min && e.max === t.max
    }
    var Ro = {
        duration: .45,
        ease: [.4, 0, .1, 1]
    }
      , Mo = n(11)
      , Do = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return Object(r.b)(t, e),
        t.prototype.componentDidMount = function() {
            var e = this.props
              , t = e.syncLayout
              , n = e.framerSyncLayout
              , r = e.visualElement;
            Object(Mo.c)(t) && t.register(r),
            Object(Mo.c)(n) && n.register(r),
            r.onUnmount((function() {
                Object(Mo.c)(t) && t.remove(r),
                Object(Mo.c)(n) && n.remove(r)
            }
            ))
        }
        ,
        t.prototype.getSnapshotBeforeUpdate = function() {
            var e = this.props
              , t = e.syncLayout
              , n = e.visualElement;
            return Object(Mo.c)(t) ? t.syncUpdate() : (n.snapshotViewportBox(),
            t.add(n)),
            null
        }
        ,
        t.prototype.componentDidUpdate = function() {
            var e = this.props
              , t = e.syncLayout
              , n = e.visualElement;
            Object(Mo.c)(t) || t.flush(),
            n.rebaseProjectionTarget()
        }
        ,
        t.prototype.render = function() {
            return null
        }
        ,
        t
    }(a.a.Component);
    var No = {
        measureLayout: function(e) {
            var t = Object(o.useContext)(Mo.b)
              , n = Object(o.useContext)(Mo.a);
            return a.a.createElement(Do, Object(r.a)({}, e, {
                syncLayout: t,
                framerSyncLayout: n
            }))
        },
        layoutAnimation: function(e) {
            var t = Object(r.c)(v(), 2)[1];
            return o.createElement(jo, Object(r.a)({}, e, {
                safeToRemove: t
            }))
        }
    };
    function Vo(e, t) {
        e.min = t.min,
        e.max = t.max
    }
    function Io(e, t, n) {
        return n + t * (e - n)
    }
    function Uo(e, t, n, r, o) {
        return void 0 !== o && (e = Io(e, o, r)),
        Io(e, n, r) + t
    }
    function Fo(e, t, n, r, o) {
        void 0 === t && (t = 0),
        void 0 === n && (n = 1),
        e.min = Uo(e.min, t, n, r, o),
        e.max = Uo(e.max, t, n, r, o)
    }
    function zo(e, t) {
        var n = t.x
          , r = t.y;
        Fo(e.x, n.translate, n.scale, n.originPoint),
        Fo(e.y, r.translate, r.scale, r.originPoint)
    }
    function Bo(e, t, n, o) {
        var a = Object(r.c)(o, 3)
          , i = a[0]
          , u = a[1]
          , l = a[2];
        e.min = t.min,
        e.max = t.max;
        var c = void 0 !== n[l] ? n[l] : .5
          , s = Mt(t.min, t.max, c);
        Fo(e, n[i], n[u], s, n.scale)
    }
    var Ho = ["x", "scaleX", "originX"]
      , Wo = ["y", "scaleY", "originY"];
    function qo(e, t, n, r, o) {
        return e = Io(e -= t, 1 / n, r),
        void 0 !== o && (e = Io(e, 1 / o, r)),
        e
    }
    function $o(e, t, n) {
        var o = Object(r.c)(n, 3)
          , a = o[0]
          , i = o[1]
          , u = o[2];
        !function(e, t, n, r, o) {
            void 0 === t && (t = 0),
            void 0 === n && (n = 1),
            void 0 === r && (r = .5);
            var a = Mt(e.min, e.max, r) - t;
            e.min = qo(e.min, t, n, a, o),
            e.max = qo(e.max, t, n, a, o)
        }(e, t[a], t[i], t[u], t.scale)
    }
    function Ko() {
        return {
            isHydrated: !1,
            layout: {
                x: {
                    min: 0,
                    max: 1
                },
                y: {
                    min: 0,
                    max: 1
                }
            },
            layoutCorrected: {
                x: {
                    min: 0,
                    max: 1
                },
                y: {
                    min: 0,
                    max: 1
                }
            },
            treeScale: {
                x: 1,
                y: 1
            },
            delta: Qr(),
            deltaFinal: Qr(),
            deltaTransform: ""
        }
    }
    var Yo = Ko();
    function Xo(e, t, n) {
        var r = e.x
          , o = e.y
          , a = "translate3d(" + r.translate / t.x + "px, " + o.translate / t.y + "px, 0) ";
        if (n) {
            var i = n.rotate
              , u = n.rotateX
              , l = n.rotateY;
            i && (a += "rotate(" + i + ") "),
            u && (a += "rotateX(" + u + ") "),
            l && (a += "rotateY(" + l + ") ")
        }
        return a += "scale(" + r.scale + ", " + o.scale + ")",
        n || a !== Go ? a : ""
    }
    function Qo(e) {
        var t = e.deltaFinal;
        return 100 * t.x.origin + "% " + 100 * t.y.origin + "% 0"
    }
    var Go = Xo(Yo.delta, Yo.treeScale, {
        x: 1,
        y: 1
    })
      , Zo = ["LayoutMeasure", "BeforeLayoutMeasure", "LayoutUpdate", "ViewportBoxUpdate", "Update", "Render", "AnimationComplete", "LayoutAnimationComplete", "AnimationStart", "SetAxisTarget", "Unmount"];
    function Jo(e, t, n, r) {
        var o, a, i = e.delta, u = e.layout, l = e.layoutCorrected, c = e.treeScale, s = t.target;
        a = u,
        Vo((o = l).x, a.x),
        Vo(o.y, a.y),
        function(e, t, n) {
            var r = n.length;
            if (r) {
                t.x = t.y = 1;
                for (var o = 0; o < r; o++) {
                    var a = n[o].getLayoutState().delta;
                    t.x *= a.x.scale,
                    t.y *= a.y.scale,
                    zo(e, a)
                }
            }
        }(l, c, n),
        lo(i, l, s, r)
    }
    var ea = n(25)
      , ta = function() {
        function e() {
            this.children = [],
            this.isDirty = !1
        }
        return e.prototype.add = function(e) {
            pr(this.children, e),
            this.isDirty = !0
        }
        ,
        e.prototype.remove = function(e) {
            dr(this.children, e),
            this.isDirty = !0
        }
        ,
        e.prototype.forEach = function(e) {
            this.isDirty && this.children.sort(ea.a);
            for (var t = this.children.length, n = 0; n < t; n++)
                e(this.children[n])
        }
        ,
        e
    }()
      , na = function(e) {
        var t = e.treeType
          , n = void 0 === t ? "" : t
          , o = e.build
          , a = e.getBaseTarget
          , i = e.makeTargetAnimatable
          , u = e.measureViewportBox
          , l = e.render
          , c = e.readValueFromInstance
          , s = e.resetTransform
          , f = e.restoreTransform
          , p = e.removeValueFromRenderState
          , d = e.sortNodePosition
          , y = e.scrapeMotionValuesFromProps;
        return function(e, t) {
            var v = e.parent
              , h = e.props
              , m = e.presenceId
              , g = e.blockInitialAnimation
              , b = e.visualState;
            void 0 === t && (t = {});
            var w, O, k, S, E, P, x = b.latestValues, j = b.renderState, C = function() {
                var e = Zo.map((function() {
                    return new yr
                }
                ))
                  , t = {}
                  , n = {
                    clearAllListeners: function() {
                        return e.forEach((function(e) {
                            return e.clear()
                        }
                        ))
                    },
                    updatePropListeners: function(e) {
                        return Zo.forEach((function(r) {
                            var o;
                            null === (o = t[r]) || void 0 === o || o.call(t);
                            var a = "on" + r
                              , i = e[a];
                            i && (t[r] = n[a](i))
                        }
                        ))
                    }
                };
                return e.forEach((function(e, t) {
                    n["on" + Zo[t]] = function(t) {
                        return e.add(t)
                    }
                    ,
                    n["notify" + Zo[t]] = function() {
                        for (var t = [], n = 0; n < arguments.length; n++)
                            t[n] = arguments[n];
                        return e.notify.apply(e, Object(r.e)([], Object(r.c)(t)))
                    }
                }
                )),
                n
            }(), L = {
                isEnabled: !1,
                isTargetLocked: !1,
                target: {
                    x: {
                        min: 0,
                        max: 1
                    },
                    y: {
                        min: 0,
                        max: 1
                    }
                },
                targetFinal: {
                    x: {
                        min: 0,
                        max: 1
                    },
                    y: {
                        min: 0,
                        max: 1
                    }
                }
            }, R = L, M = x, D = Ko(), N = !1, V = new Map, I = new Map, U = {}, F = Object(r.a)({}, x);
            function z() {
                var e, t, n;
                w && (L.isEnabled && D.isHydrated && (e = R.targetFinal,
                t = R.target,
                n = M,
                Bo(e.x, t.x, n, Ho),
                Bo(e.y, t.y, n, Wo),
                lo(D.deltaFinal, D.layoutCorrected, R.targetFinal, x)),
                B(),
                l(w, j))
            }
            function B() {
                var e = x;
                if (S && S.isActive()) {
                    var n = S.getCrossfadeState(G);
                    n && (e = n)
                }
                o(G, j, e, R, D, t, h)
            }
            function H() {
                C.notifyUpdate(x)
            }
            function W() {
                G.layoutTree.forEach(oa)
            }
            var q = y(h);
            for (var K in q) {
                var Y = q[K];
                void 0 !== x[K] && $(Y) && Y.set(x[K], !1)
            }
            var X = T(h)
              , Q = A(h)
              , G = Object(r.a)(Object(r.a)({
                treeType: n,
                current: null,
                depth: v ? v.depth + 1 : 0,
                path: v ? Object(r.e)(Object(r.e)([], Object(r.c)(v.path)), [v]) : [],
                layoutTree: v ? v.layoutTree : new ta,
                presenceId: m,
                projection: L,
                variantChildren: Q ? new Set : void 0,
                isVisible: void 0,
                manuallyAnimateOnMount: Boolean(null === v || void 0 === v ? void 0 : v.isMounted()),
                blockInitialAnimation: g,
                isHoverEventsEnabled: !0,
                isMounted: function() {
                    return Boolean(w)
                },
                mount: function(e) {
                    w = G.current = e,
                    G.pointTo(G),
                    Q && v && !X && (P = null === v || void 0 === v ? void 0 : v.addVariantChild(G))
                },
                unmount: function() {
                    Cn.a.update(H),
                    Cn.a.render(z),
                    Cn.a.preRender(G.updateLayoutProjection),
                    I.forEach((function(e) {
                        return e()
                    }
                    )),
                    G.stopLayoutAnimation(),
                    G.layoutTree.remove(G),
                    null === P || void 0 === P || P(),
                    null === k || void 0 === k || k(),
                    C.clearAllListeners()
                },
                addVariantChild: function(e) {
                    var t, n = G.getClosestVariantNode();
                    if (n)
                        return null === (t = n.variantChildren) || void 0 === t || t.add(e),
                        function() {
                            return n.variantChildren.delete(e)
                        }
                },
                sortNodePosition: function(e) {
                    return d && n === e.treeType ? d(G.getInstance(), e.getInstance()) : 0
                },
                getClosestVariantNode: function() {
                    return Q ? G : null === v || void 0 === v ? void 0 : v.getClosestVariantNode()
                },
                scheduleUpdateLayoutProjection: v ? v.scheduleUpdateLayoutProjection : function() {
                    return Cn.b.preRender(G.updateTreeLayoutProjection, !1, !0)
                }
                ,
                getLayoutId: function() {
                    return h.layoutId
                },
                getInstance: function() {
                    return w
                },
                getStaticValue: function(e) {
                    return x[e]
                },
                setStaticValue: function(e, t) {
                    return x[e] = t
                },
                getLatestValues: function() {
                    return x
                },
                setVisibility: function(e) {
                    G.isVisible !== e && (G.isVisible = e,
                    G.scheduleRender())
                },
                makeTargetAnimatable: function(e, t) {
                    return void 0 === t && (t = !0),
                    i(G, e, h, t)
                },
                suspendHoverEvents: function() {
                    G.isHoverEventsEnabled = !1,
                    Cn.b.postRender((function() {
                        return setTimeout((function() {
                            return G.isHoverEventsEnabled = !0
                        }
                        ), 10)
                    }
                    ))
                },
                addValue: function(e, t) {
                    G.hasValue(e) && G.removeValue(e),
                    V.set(e, t),
                    x[e] = t.get(),
                    function(e, t) {
                        var n = t.onChange((function(t) {
                            x[e] = t,
                            h.onUpdate && Cn.b.update(H, !1, !0)
                        }
                        ))
                          , r = t.onRenderRequest(G.scheduleRender);
                        I.set(e, (function() {
                            n(),
                            r()
                        }
                        ))
                    }(e, t)
                },
                removeValue: function(e) {
                    var t;
                    V.delete(e),
                    null === (t = I.get(e)) || void 0 === t || t(),
                    I.delete(e),
                    delete x[e],
                    p(e, j)
                },
                hasValue: function(e) {
                    return V.has(e)
                },
                getValue: function(e, t) {
                    var n = V.get(e);
                    return void 0 === n && void 0 !== t && (n = hr(t),
                    G.addValue(e, n)),
                    n
                },
                forEachValue: function(e) {
                    return V.forEach(e)
                },
                readValue: function(e) {
                    var n;
                    return null !== (n = x[e]) && void 0 !== n ? n : c(w, e, t)
                },
                setBaseTarget: function(e, t) {
                    F[e] = t
                },
                getBaseTarget: function(e) {
                    if (a) {
                        var t = a(h, e);
                        if (void 0 !== t && !$(t))
                            return t
                    }
                    return F[e]
                }
            }, C), {
                build: function() {
                    return B(),
                    j
                },
                scheduleRender: function() {
                    Cn.b.render(z, !1, !0)
                },
                syncRender: z,
                setProps: function(e) {
                    h = e,
                    C.updatePropListeners(e),
                    U = function(e, t, n) {
                        var r;
                        for (var o in t) {
                            var a = t[o]
                              , i = n[o];
                            if ($(a))
                                e.addValue(o, a);
                            else if ($(i))
                                e.addValue(o, hr(a));
                            else if (i !== a)
                                if (e.hasValue(o)) {
                                    var u = e.getValue(o);
                                    !u.hasAnimated && u.set(a)
                                } else
                                    e.addValue(o, hr(null !== (r = e.getStaticValue(o)) && void 0 !== r ? r : a))
                        }
                        for (var o in n)
                            void 0 === t[o] && e.removeValue(o);
                        return t
                    }(G, y(h), U)
                },
                getProps: function() {
                    return h
                },
                getVariant: function(e) {
                    var t;
                    return null === (t = h.variants) || void 0 === t ? void 0 : t[e]
                },
                getDefaultTransition: function() {
                    return h.transition
                },
                getVariantContext: function(e) {
                    if (void 0 === e && (e = !1),
                    e)
                        return null === v || void 0 === v ? void 0 : v.getVariantContext();
                    if (!X) {
                        var t = (null === v || void 0 === v ? void 0 : v.getVariantContext()) || {};
                        return void 0 !== h.initial && (t.initial = h.initial),
                        t
                    }
                    for (var n = {}, r = 0; r < ua; r++) {
                        var o = ia[r]
                          , a = h[o];
                        (_(a) || !1 === a) && (n[o] = a)
                    }
                    return n
                },
                enableLayoutProjection: function() {
                    L.isEnabled = !0,
                    G.layoutTree.add(G)
                },
                lockProjectionTarget: function() {
                    L.isTargetLocked = !0
                },
                unlockProjectionTarget: function() {
                    G.stopLayoutAnimation(),
                    L.isTargetLocked = !1
                },
                snapshotViewportBox: function() {
                    G.prevViewportBox = G.measureViewportBox(!1),
                    G.rebaseProjectionTarget(!1, G.prevViewportBox)
                },
                getLayoutState: function() {
                    return D
                },
                setCrossfader: function(e) {
                    S = e
                },
                startLayoutAnimation: function(e, t) {
                    var n = G.getProjectionAnimationProgress()[e]
                      , r = L.target[e]
                      , o = r.min
                      , a = r.max - o;
                    return n.clearListeners(),
                    n.set(o),
                    n.set(o),
                    n.onChange((function(t) {
                        return G.setProjectionTargetAxis(e, t, t + a)
                    }
                    )),
                    G.animateMotionValue(e, n, 0, t)
                },
                stopLayoutAnimation: function() {
                    Gr((function(e) {
                        return G.getProjectionAnimationProgress()[e].stop()
                    }
                    ))
                },
                measureViewportBox: function(e) {
                    void 0 === e && (e = !0);
                    var n, r, o = u(w, t);
                    return e || (r = x,
                    $o((n = o).x, r, Ho),
                    $o(n.y, r, Wo)),
                    o
                },
                updateLayoutMeasurement: function() {
                    var e;
                    G.notifyBeforeLayoutMeasure(D.layout),
                    D.isHydrated = !0,
                    D.layout = G.measureViewportBox(),
                    D.layoutCorrected = (e = D.layout,
                    {
                        x: Object(r.a)({}, e.x),
                        y: Object(r.a)({}, e.y)
                    }),
                    G.notifyLayoutMeasure(D.layout, G.prevViewportBox || D.layout),
                    Cn.b.update((function() {
                        return G.rebaseProjectionTarget()
                    }
                    ))
                },
                getProjectionAnimationProgress: function() {
                    return E || (E = {
                        x: hr(0),
                        y: hr(0)
                    }),
                    E
                },
                setProjectionTargetAxis: function(e, t, n, r) {
                    var o;
                    void 0 === r && (r = !1),
                    r ? (L.relativeTarget || (L.relativeTarget = {
                        x: {
                            min: 0,
                            max: 1
                        },
                        y: {
                            min: 0,
                            max: 1
                        }
                    }),
                    o = L.relativeTarget[e]) : (L.relativeTarget = void 0,
                    o = L.target[e]),
                    o.min = t,
                    o.max = n,
                    N = !0,
                    C.notifySetAxisTarget()
                },
                rebaseProjectionTarget: function(e, t) {
                    void 0 === t && (t = D.layout);
                    var n = G.getProjectionAnimationProgress()
                      , r = n.x
                      , o = n.y
                      , a = !L.relativeTarget && !L.isTargetLocked && !r.isAnimating() && !o.isAnimating();
                    (e || a) && Gr((function(e) {
                        var n = t[e]
                          , r = n.min
                          , o = n.max;
                        G.setProjectionTargetAxis(e, r, o)
                    }
                    ))
                },
                notifyLayoutReady: function(e) {
                    G.notifyLayoutUpdate(D.layout, G.prevViewportBox || D.layout, e)
                },
                resetTransform: function() {
                    return s(G, w, h)
                },
                withoutTransform: function(e) {
                    var t = L.isEnabled;
                    t && G.resetTransform(),
                    v ? v.withoutTransform(e) : e(),
                    t && f(w, j)
                },
                updateLayoutProjection: function() {
                    var e = D.delta
                      , t = D.treeScale
                      , n = t.x
                      , r = t.x
                      , o = D.deltaTransform;
                    Jo(D, R, G.path, x),
                    N && G.notifyViewportBoxUpdate(R.target, e),
                    N = !1;
                    var a = Xo(e, t);
                    a === o && n === t.x && r === t.y || G.scheduleRender(),
                    D.deltaTransform = a
                },
                updateTreeLayoutProjection: function() {
                    G.layoutTree.forEach(ra),
                    Cn.b.preRender(W, !1, !0)
                },
                getProjectionParent: function() {
                    if (void 0 === O) {
                        for (var e = !1, t = G.path.length - 1; t >= 0; t--) {
                            var n = G.path[t];
                            if (n.projection.isEnabled) {
                                e = n;
                                break
                            }
                        }
                        O = e
                    }
                    return O
                },
                resolveRelativeTargetBox: function() {
                    if (L.relativeTarget) {
                        var e = G.getProjectionParent();
                        e && function(e, t) {
                            so(e.target.x, e.relativeTarget.x, t.target.x),
                            so(e.target.y, e.relativeTarget.y, t.target.y)
                        }(L, e.projection)
                    }
                },
                pointTo: function(e) {
                    R = e.projection,
                    M = e.getLatestValues(),
                    null === k || void 0 === k || k(),
                    k = yt(e.onSetAxisTarget(G.scheduleUpdateLayoutProjection), e.onLayoutAnimationComplete((function() {
                        var e;
                        G.isPresent ? G.presence = wo.a.Present : null === (e = G.layoutSafeToRemove) || void 0 === e || e.call(G)
                    }
                    )))
                },
                isPresent: !0,
                presence: wo.a.Entering
            });
            return G
        }
    };
    function ra(e) {
        e.resolveRelativeTargetBox()
    }
    function oa(e) {
        e.updateLayoutProjection()
    }
    var aa, ia = Object(r.e)(["initial"], Object(r.c)(Tr)), ua = ia.length, la = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]), ca = function(e) {
        return la.has(e)
    }, sa = function(e, t) {
        e.set(t, !1),
        e.set(t)
    }, fa = function(e) {
        return e === se || e === ie
    };
    !function(e) {
        e.width = "width",
        e.height = "height",
        e.left = "left",
        e.right = "right",
        e.top = "top",
        e.bottom = "bottom"
    }(aa || (aa = {}));
    var pa = function(e, t) {
        return parseFloat(e.split(", ")[t])
    }
      , da = function(e, t) {
        return function(n, r) {
            var o = r.transform;
            if ("none" === o || !o)
                return 0;
            var a = o.match(/^matrix3d\((.+)\)$/);
            if (a)
                return pa(a[1], t);
            var i = o.match(/^matrix\((.+)\)$/);
            return i ? pa(i[1], e) : 0
        }
    }
      , ya = new Set(["x", "y", "z"])
      , va = U.filter((function(e) {
        return !ya.has(e)
    }
    ));
    var ha = {
        width: function(e) {
            var t = e.x;
            return t.max - t.min
        },
        height: function(e) {
            var t = e.y;
            return t.max - t.min
        },
        top: function(e, t) {
            var n = t.top;
            return parseFloat(n)
        },
        left: function(e, t) {
            var n = t.left;
            return parseFloat(n)
        },
        bottom: function(e, t) {
            var n = e.y
              , r = t.top;
            return parseFloat(r) + (n.max - n.min)
        },
        right: function(e, t) {
            var n = e.x
              , r = t.left;
            return parseFloat(r) + (n.max - n.min)
        },
        x: da(4, 13),
        y: da(5, 14)
    }
      , ma = function(e, t, n, o) {
        void 0 === n && (n = {}),
        void 0 === o && (o = {}),
        t = Object(r.a)({}, t),
        o = Object(r.a)({}, o);
        var a = Object.keys(t).filter(ca)
          , i = []
          , u = !1
          , l = [];
        if (a.forEach((function(r) {
            var a = e.getValue(r);
            if (e.hasValue(r)) {
                var c, s = n[r], f = t[r], p = br(s);
                if (Fe(f))
                    for (var d = f.length, y = null === f[0] ? 1 : 0; y < d; y++)
                        c ? br(f[y]) : (c = br(f[y])) === p || fa(p) && fa(c);
                else
                    c = br(f);
                if (p !== c)
                    if (fa(p) && fa(c)) {
                        var v = a.get();
                        "string" === typeof v && a.set(parseFloat(v)),
                        "string" === typeof f ? t[r] = parseFloat(f) : Array.isArray(f) && c === ie && (t[r] = f.map(parseFloat))
                    } else
                        (null === p || void 0 === p ? void 0 : p.transform) && (null === c || void 0 === c ? void 0 : c.transform) && (0 === s || 0 === f) ? 0 === s ? a.set(c.transform(s)) : t[r] = p.transform(f) : (u || (i = function(e) {
                            var t = [];
                            return va.forEach((function(n) {
                                var r = e.getValue(n);
                                void 0 !== r && (t.push([n, r.get()]),
                                r.set(n.startsWith("scale") ? 1 : 0))
                            }
                            )),
                            t.length && e.syncRender(),
                            t
                        }(e),
                        u = !0),
                        l.push(r),
                        o[r] = void 0 !== o[r] ? o[r] : t[r],
                        sa(a, f))
            }
        }
        )),
        l.length) {
            var c = function(e, t, n) {
                var r = t.measureViewportBox()
                  , o = t.getInstance()
                  , a = getComputedStyle(o)
                  , i = a.display
                  , u = {
                    top: a.top,
                    left: a.left,
                    bottom: a.bottom,
                    right: a.right,
                    transform: a.transform
                };
                "none" === i && t.setStaticValue("display", e.display || "block"),
                t.syncRender();
                var l = t.measureViewportBox();
                return n.forEach((function(n) {
                    var o = t.getValue(n);
                    sa(o, ha[n](r, u)),
                    e[n] = ha[n](l, a)
                }
                )),
                e
            }(t, e, l);
            return i.length && i.forEach((function(t) {
                var n = Object(r.c)(t, 2)
                  , o = n[0]
                  , a = n[1];
                e.getValue(o).set(a)
            }
            )),
            e.syncRender(),
            {
                target: c,
                transitionEnd: o
            }
        }
        return {
            target: t,
            transitionEnd: o
        }
    };
    function ga(e, t, n, r) {
        return function(e) {
            return Object.keys(e).some(ca)
        }(t) ? ma(e, t, n, r) : {
            target: t,
            transitionEnd: r
        }
    }
    var ba = function(e, t, n, o) {
        var a = function(e, t, n) {
            var o, a = Object(r.d)(t, []), i = e.getInstance();
            if (!(i instanceof HTMLElement))
                return {
                    target: a,
                    transitionEnd: n
                };
            for (var u in n && (n = Object(r.a)({}, n)),
            e.forEachValue((function(e) {
                var t = e.get();
                if (Oo(t)) {
                    var n = So(t, i);
                    n && e.set(n)
                }
            }
            )),
            a) {
                var l = a[u];
                if (Oo(l)) {
                    var c = So(l, i);
                    c && (a[u] = c,
                    n && (null !== (o = n[u]) && void 0 !== o || (n[u] = l)))
                }
            }
            return {
                target: a,
                transitionEnd: n
            }
        }(e, t, o);
        return ga(e, t = a.target, n, o = a.transitionEnd)
    };
    var wa = {
        treeType: "dom",
        readValueFromInstance: function(e, t) {
            if (B(t)) {
                var n = rr(t);
                return n && n.default || 0
            }
            var r, o = (r = e,
            window.getComputedStyle(r));
            return (Y(t) ? o.getPropertyValue(t) : o[t]) || 0
        },
        sortNodePosition: function(e, t) {
            return 2 & e.compareDocumentPosition(t) ? 1 : -1
        },
        getBaseTarget: function(e, t) {
            var n;
            return null === (n = e.style) || void 0 === n ? void 0 : n[t]
        },
        measureViewportBox: function(e, t) {
            return ro(e, t.transformPagePoint)
        },
        resetTransform: function(e, t, n) {
            e.suspendHoverEvents();
            var r = n.transformTemplate;
            t.style.transform = r ? r({}, "") : "none",
            e.scheduleRender()
        },
        restoreTransform: function(e, t) {
            e.style.transform = t.style.transform
        },
        removeValueFromRenderState: function(e, t) {
            var n = t.vars
              , r = t.style;
            delete n[e],
            delete r[e]
        },
        makeTargetAnimatable: function(e, t, n, o) {
            var a = n.transformValues;
            void 0 === o && (o = !0);
            var i = t.transition
              , u = t.transitionEnd
              , l = Object(r.d)(t, ["transition", "transitionEnd"])
              , c = function(e, t, n) {
                var r, o, a = {};
                for (var i in e)
                    a[i] = null !== (r = Er(i, t)) && void 0 !== r ? r : null === (o = n.getValue(i)) || void 0 === o ? void 0 : o.get();
                return a
            }(l, i || {}, e);
            if (a && (u && (u = a(u)),
            l && (l = a(l)),
            c && (c = a(c))),
            o) {
                !function(e, t, n) {
                    var r, o, a, i, u = Object.keys(t).filter((function(t) {
                        return !e.hasValue(t)
                    }
                    )), l = u.length;
                    if (l)
                        for (var c = 0; c < l; c++) {
                            var s = u[c]
                              , f = t[s]
                              , p = null;
                            Array.isArray(f) && (p = f[0]),
                            null === p && (p = null !== (o = null !== (r = n[s]) && void 0 !== r ? r : e.readValue(s)) && void 0 !== o ? o : t[s]),
                            void 0 !== p && null !== p && ("string" === typeof p && /^\-?\d*\.?\d+$/.test(p) ? p = parseFloat(p) : !Or(p) && en.test(f) && (p = or(s, f)),
                            e.addValue(s, hr(p)),
                            null !== (a = (i = n)[s]) && void 0 !== a || (i[s] = p),
                            e.setBaseTarget(s, p))
                        }
                }(e, l, c);
                var s = ba(e, l, c, u);
                u = s.transitionEnd,
                l = s.target
            }
            return Object(r.a)({
                transition: i,
                transitionEnd: u
            }, l)
        },
        scrapeMotionValuesFromProps: Ve,
        build: function(e, t, n, r, o, a, i) {
            void 0 !== e.isVisible && (t.style.visibility = e.isVisible ? "visible" : "hidden");
            var u = r.isEnabled && o.isHydrated;
            ve(t, n, r, o, a, i.transformTemplate, u ? Xo : void 0, u ? Qo : void 0)
        },
        render: Me
    }
      , Oa = na(wa)
      , ka = na(Object(r.a)(Object(r.a)({}, wa), {
        getBaseTarget: function(e, t) {
            return e[t]
        },
        readValueFromInstance: function(e, t) {
            var n;
            return B(t) ? (null === (n = rr(t)) || void 0 === n ? void 0 : n.default) || 0 : (t = De.has(t) ? t : Re(t),
            e.getAttribute(t))
        },
        scrapeMotionValuesFromProps: Ie,
        build: function(e, t, n, r, o, a, i) {
            var u = r.isEnabled && o.isHydrated;
            je(t, n, r, o, a, i.transformTemplate, u ? Xo : void 0, u ? Qo : void 0)
        },
        render: Ne
    }))
      , Sa = function(e, t) {
        return N(e) ? ka(t, {
            enableHardwareAcceleration: !1
        }) : Oa(t, {
            enableHardwareAcceleration: !0
        })
    }
      , Ea = Object(r.a)(Object(r.a)(Object(r.a)(Object(r.a)({}, Dr), wt), ho), No)
      , Pa = M((function(e, t) {
        return Ye(e, t, Ea, Sa)
    }
    ))
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return y
    }
    ));
    var r = n(2)
      , o = n(0)
      , a = n(19);
    var i = n(13)
      , u = n(14)
      , l = 0;
    function c() {
        var e = l;
        return l++,
        e
    }
    var s = function(e) {
        var t = e.children
          , n = e.initial
          , r = e.isPresent
          , a = e.onExitComplete
          , l = e.custom
          , s = e.presenceAffectsLayout
          , p = Object(u.a)(f)
          , d = Object(u.a)(c)
          , y = Object(o.useMemo)((function() {
            return {
                id: d,
                initial: n,
                isPresent: r,
                custom: l,
                onExitComplete: function(e) {
                    p.set(e, !0);
                    var t = !0;
                    p.forEach((function(e) {
                        e || (t = !1)
                    }
                    )),
                    t && (null === a || void 0 === a || a())
                },
                register: function(e) {
                    return p.set(e, !1),
                    function() {
                        return p.delete(e)
                    }
                }
            }
        }
        ), s ? void 0 : [r]);
        return Object(o.useMemo)((function() {
            p.forEach((function(e, t) {
                return p.set(t, !1)
            }
            ))
        }
        ), [r]),
        o.useEffect((function() {
            !r && !p.size && (null === a || void 0 === a || a())
        }
        ), [r]),
        o.createElement(i.a.Provider, {
            value: y
        }, t)
    };
    function f() {
        return new Map
    }
    var p = n(11);
    function d(e) {
        return e.key || ""
    }
    var y = function(e) {
        var t = e.children
          , n = e.custom
          , i = e.initial
          , u = void 0 === i || i
          , l = e.onExitComplete
          , c = e.exitBeforeEnter
          , f = e.presenceAffectsLayout
          , y = void 0 === f || f
          , v = function() {
            var e = Object(o.useRef)(!1)
              , t = Object(r.c)(Object(o.useState)(0), 2)
              , n = t[0]
              , i = t[1];
            return Object(a.a)((function() {
                return e.current = !0
            }
            )),
            Object(o.useCallback)((function() {
                !e.current && i(n + 1)
            }
            ), [n])
        }()
          , h = Object(o.useContext)(p.b);
        Object(p.c)(h) && (v = h.forceUpdate);
        var m = Object(o.useRef)(!0)
          , g = function(e) {
            var t = [];
            return o.Children.forEach(e, (function(e) {
                Object(o.isValidElement)(e) && t.push(e)
            }
            )),
            t
        }(t)
          , b = Object(o.useRef)(g)
          , w = Object(o.useRef)(new Map).current
          , O = Object(o.useRef)(new Set).current;
        if (function(e, t) {
            e.forEach((function(e) {
                var n = d(e);
                t.set(n, e)
            }
            ))
        }(g, w),
        m.current)
            return m.current = !1,
            o.createElement(o.Fragment, null, g.map((function(e) {
                return o.createElement(s, {
                    key: d(e),
                    isPresent: !0,
                    initial: !!u && void 0,
                    presenceAffectsLayout: y
                }, e)
            }
            )));
        for (var k = Object(r.e)([], Object(r.c)(g)), S = b.current.map(d), E = g.map(d), P = S.length, _ = 0; _ < P; _++) {
            var x = S[_];
            -1 === E.indexOf(x) ? O.add(x) : O.delete(x)
        }
        return c && O.size && (k = []),
        O.forEach((function(e) {
            if (-1 === E.indexOf(e)) {
                var t = w.get(e);
                if (t) {
                    var r = S.indexOf(e);
                    k.splice(r, 0, o.createElement(s, {
                        key: d(t),
                        isPresent: !1,
                        onExitComplete: function() {
                            w.delete(e),
                            O.delete(e);
                            var t = b.current.findIndex((function(t) {
                                return t.key === e
                            }
                            ));
                            b.current.splice(t, 1),
                            O.size || (b.current = g,
                            v(),
                            l && l())
                        },
                        custom: n,
                        presenceAffectsLayout: y
                    }, t))
                }
            }
        }
        )),
        k = k.map((function(e) {
            var t = e.key;
            return O.has(t) ? e : o.createElement(s, {
                key: d(e),
                isPresent: !0,
                presenceAffectsLayout: y
            }, e)
        }
        )),
        b.current = k,
        o.createElement(o.Fragment, null, O.size ? k : k.map((function(e) {
            return Object(o.cloneElement)(e)
        }
        )))
    }
}
]]);
//# sourceMappingURL=2.8ace6be4.chunk.js.map
