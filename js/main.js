(this["webpackJsonplofi-app"] = this["webpackJsonplofi-app"] || []).push([[0], {
    46: function(e, t, n) {},
    82: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n(1)
          , c = n(0)
          , a = n.n(c)
          , o = n(18)
          , r = n.n(o)
          , s = n(4)
          , l = (n(46),
        n(3))
          , u = n(28);
        function b(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window
              , i = Object(c.useRef)();
            Object(c.useEffect)((function() {
                i.current = t
            }
            ), [t]),
            Object(c.useEffect)((function() {
                if (n && n.addEventListener) {
                    var t = function(e) {
                        return i.current(e)
                    };
                    return n.addEventListener(e, t),
                    function() {
                        n.removeEventListener(e, t)
                    }
                }
            }
            ), [e, n])
        }
        function d() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
              , t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            function n(n) {
                t && e.forEach((function(e) {
                    var t = (e[2] || {}).withShift;
                    ("any" === e[0] || n.key === e[0] && (!0 !== t || n.shiftKey)) && (n.preventDefault(),
                    e[1] && e[1]())
                }
                ))
            }
            return b("keyup", (function(e) {
                var t;
                j.includes(null === (t = e.target) || void 0 === t ? void 0 : t.tagName) || n(e)
            }
            )),
            null
        }
        var j = ["INPUT", "TEXTAREA"]
          , m = n(5)
          , f = n(33)
          , O = n.n(f)
          , h = n(0)
          , p = h.useEffect
          , v = h.useState;
        var x = function() {
            var e = v(!1)
              , t = Object(l.a)(e, 2)
              , n = t[0]
              , i = t[1];
            return p((function() {
                i(["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend"in document)
            }
            ), []),
            n
        }
          , g = [{
            id: "5qap5aO4i9A",
            name: "lofi hip hop radio - beats to relax/study to"
        }, {
            id: "DWcJFNfaw9c",
            name: "lofi hip hop radio - beats to sleep/chill to"
        }, {
            id: "5yx6BWlEVcY",
            name: "Chillhop Radio - jazzy & lofi hip hop beats"
        }, {
            id: "WBfbkPTqUtU",
            name: "Tokyo LosT Tracks -\u30b5\u30af\u30e9\u30c1\u30eb- ,chill,relax,study to,radio,"
        }, {
            id: "-9gEgshJUuY",
            name: "Japanese Lofi Radio 24/7 \ud83d\udd34 Aesthetic Lofi Hip Hop Music \ud83d\udd34"
        }, {
            id: "-5KAN9_CzSA",
            name: "coffee shop radio // 24/7 lofi hip-hop beats"
        }, {
            id: "l7TxwBhtTUY",
            name: "lofi hip hop radio - sad & sleepy beats"
        }, {
            id: "o33l32ZrIy8",
            name: "star wars ~ lofi beats to relax/study to"
        }, {
            id: "7NOSDKb0HlU",
            name: "lofi hip hop radio - beats to study/relax to \ud83d\udc3e"
        }, {
            id: "L9Q1HUdUMp0",
            name: "r&b / hip-hop radio [ chill live stream \uff0d 24/7 rnb ]"
        }, {
            id: "tNkZsRW7h2c",
            name: "Space Ambient Music LIVE 24/7: Space Traveling Background Music, Music for Stress Relief, Dreaming"
        }, {
            id: "qt_urUz42vI",
            name: "Ambient Music For Reality Escape \u2014 Infinity Radio"
        }]
          , y = {
            track: function(e, t) {}
        }
          , I = function() {
            var e = Object(c.useState)("")
              , t = Object(l.a)(e, 2)
              , n = t[0]
              , i = t[1];
            return Object(c.useEffect)((function() {
                setTimeout((function() {
                    "" === n && i("."),
                    "." === n && i(".."),
                    ".." === n && i("..."),
                    "..." === n && i("")
                }
                ), 300)
            }
            ), [n]),
            n
        }
          , w = n.p + "./media/beats1.bb5eeeaf.svg"
          , N = n.p + "./media/beats2.6d67e4f1.svg"
          , M = n.p + "./media/beats3.b7b47b9b.svg"
          , Z = n.p + "./media/beats4.ad915208.svg"
          , z = n.p + "./media/beatsMute.70cdfd3c.svg"
          , T = n.p + "./media/buffering1.27886777.svg"
          , A = n.p + "./media/buffering2.97cf3daf.svg"
          , G = n.p + "./media/buffering3.34a0de3c.svg"
          , D = n.p + "./media/buffering4.e55cf19d.svg"
          , P = n.p + "./media/checkmark.27630148.svg"
          , S = n.p + "./media/facebook.3fe0a515.svg"
          , H = n.p + "./media/forward.64c7a860.svg"
          , L = n.p + "./media/fullscreen-enter.47fab6db.svg"
          , E = n.p + "./media/fullscreen-exit.93379b1e.svg"
          , Y = n.p + "./media/heart.0513072e.svg"
          , k = n.p + "./media/mail.7a7748f6.svg"
          , W = n.p + "./media/mailbrew.3d6186a7.svg"
          , R = n.p + "./media/open.b33a26e7.svg"
          , B = n.p + "./media/pause.69ddfc29.svg"
          , F = n.p + "./media/play.1055bee6.svg"
          , V = n.p + "./media/previous.17bb0c57.svg";
        function X(e) {
            var t = e.name
              , n = e.style;
            return Object(i.jsx)("img", {
                className: "shadow",
                src: Q[t],
                alt: "",
                style: Object(m.a)({
                    width: 20,
                    height: 20,
                    flex: "0 0 20px"
                }, n)
            })
        }
        var Q = {
            shuffle: n.p + "./media/shuffle.53b14e6b.svg",
            play: F,
            pause: B,
            forward: H,
            previous: V,
            open: R,
            timer: n.p + "./media/timer.1427f4b2.svg",
            mail: k,
            heart: Y,
            twitter: n.p + "./media/twitter.26696d4a.svg",
            facebook: S,
            checkmark: P,
            fullscreenEnter: L,
            fullscreenExit: E,
            beats1: w,
            beats2: N,
            beats3: M,
            beats4: Z,
            buffering1: T,
            buffering2: A,
            buffering3: G,
            buffering4: D,
            beatsMute: z,
            mailbrew: W
        }
          , C = n(36);
        function U(e) {
            return Object(i.jsx)(C.a, Object(m.a)({
                touch: !1,
                arrow: !1
            }, e))
        }
        var J = function(e) {
            var t = e.onClick
              , n = e.text
              , c = e.style
              , a = e.icon
              , o = e.tooltip
              , r = e.type
              , s = e.value
              , l = e.className;
            return Object(i.jsx)(U, {
                content: o,
                disabled: !o,
                children: Object(i.jsxs)("button", {
                    onClick: t,
                    type: null !== r && void 0 !== r ? r : "button",
                    value: s,
                    style: Object(m.a)(Object(m.a)({
                        display: "flex",
                        alignItems: "center"
                    }, c), n ? {} : {
                        lineHeight: 0
                    }),
                    className: l,
                    title: o,
                    children: [a && Object(i.jsx)(X, {
                        name: a,
                        style: {
                            marginRight: n ? 8 : 0
                        }
                    }), n && Object(i.jsx)("span", {
                        children: n
                    })]
                })
            })
        }
          , K = n(88)
          , q = n(87);
        function _(e) {
            return "https://dc85enhu9zukf.cloudfront.net/gifs/" + e + ".gif"
        }
        var $ = "ontouchend"in document;
        var ee = function(e) {
            var t = e.isPlaying
              , n = Object(c.useState)(1)
              , a = Object(l.a)(n, 2)
              , o = a[0]
              , r = a[1]
              , u = Object(s.f)(pe)
              , b = Object(s.f)(ve)
              , d = u < .1 || !t;
            return Object(c.useEffect)((function() {
                var e = setInterval((function() {
                    r((function(e) {
                        return 4 === e ? 1 : e + 1
                    }
                    ))
                }
                ), 250);
                return function() {
                    return clearInterval(e)
                }
            }
            ), []),
            Object(i.jsx)(X, {
                name: d ? "beatsMute" : (b ? "buffering" : "beats") + o,
                style: {
                    marginRight: "8px"
                }
            })
        }
          , te = function(e) {
            var t = e.currentStationId
              , n = e.setCurrentStationId
              , c = e.isPlaying
              , a = Object(s.e)(Ne)
              , o = Object(l.a)(a, 2)
              , r = o[0]
              , u = o[1]
              , b = Object(s.g)(we)
              , d = Object(s.g)(Ie);
            if (!t)
                return null;
            var j = g.find((function(e) {
                return e.id === t
            }
            ));
            if (!j)
                return null;
            var m = localStorage.stationClicked || $ ? Object(i.jsx)("span", {
                children: j.name
            }) : Object(i.jsxs)("span", {
                children: [Object(i.jsxs)("span", {
                    className: "red",
                    style: {
                        display: "inline"
                    },
                    children: ["click to change >", " "]
                }), j.name]
            });
            return Object(i.jsxs)("div", {
                onChange: function(e) {
                    n(e.target.value)
                },
                value: t,
                name: "stations",
                id: "stations-selector",
                children: [Object(i.jsx)(K.a, {
                    children: r && Object(i.jsx)(q.a.div, {
                        initial: {
                            y: 60,
                            opacity: 0
                        },
                        animate: {
                            y: 0,
                            opacity: 1
                        },
                        exit: {
                            y: 60,
                            opacity: 0
                        },
                        transition: {
                            type: "spring",
                            duration: .3,
                            bounce: .1
                        },
                        id: "stations-list",
                        onClick: function() {
                            return u(!1)
                        },
                        children: g.map((function(e) {
                            var c = e.id === t;
                            return Object(i.jsxs)("div", {
                                className: "station-wrapper pointer",
                                onClick: function() {
                                    c || n(e.id)
                                },
                                children: [Object(i.jsxs)("div", {
                                    className: "station-thumbnail " + (c ? "green-box-small" : ""),
                                    style: {
                                        position: "relative",
                                        backgroundImage: "url(".concat(_("station_thumb_" + e.id), ")")
                                    },
                                    children: [Object(i.jsx)("a", {
                                        onClick: function(e) {
                                            e.stopPropagation()
                                        },
                                        href: "https://www.youtube.com/watch?v=".concat(e.id),
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        style: {
                                            position: "absolute",
                                            top: 8,
                                            right: 8
                                        },
                                        children: Object(i.jsx)(X, {
                                            name: "open"
                                        })
                                    }), " "]
                                }), Object(i.jsx)("span", {
                                    className: "option",
                                    children: e.name
                                }, e.id)]
                            })
                        }
                        ))
                    })
                }), Object(i.jsxs)("div", {
                    id: "stations-button",
                    className: "pointer",
                    onClick: function() {
                        localStorage.setItem("stationClicked", "true"),
                        r || y.track("Open Selector"),
                        b(!1),
                        d(!1),
                        u(!r)
                    },
                    style: {
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "nowrap"
                    },
                    children: [Object(i.jsx)(ee, {
                        isPlaying: c
                    }), " ", m]
                })]
            })
        }
          , ne = function(e) {
            var t = e.size
              , n = void 0 === t ? 10 : t;
            return Object(i.jsx)("div", {
                style: {
                    width: n,
                    height: n
                }
            })
        };
        var ie = function(e) {
            var t = e.on
              , n = e.volume;
            return Object(i.jsx)("div", {
                className: n > .02 ? "green-box" : "red-box",
                style: {
                    width: 6,
                    height: 14,
                    marginRight: 5,
                    background: "white",
                    display: "inline-block",
                    pointerEvents: "none",
                    opacity: t ? 1 : .5
                }
            })
        };
        var ce = function(e) {
            var t = e.volume
              , n = e.setVolume
              , a = e.style
              , o = Object(c.useRef)(null)
              , r = Object(c.useState)(!1)
              , s = Object(l.a)(r, 2)
              , u = s[0]
              , b = s[1]
              , d = Object(c.useState)({
                x: 0,
                w: 0
            })
              , j = Object(l.a)(d, 2)
              , f = j[0]
              , O = j[1];
            function h(e) {
                b(!1)
            }
            function p(e) {
                u && v(e)
            }
            function v(e) {
                var t, i = e.clientX;
                n(Math.min(Math.max((t = (i - f.x) / f.w,
                Math.round(100 * (t + Number.EPSILON)) / 100), 0), 1))
            }
            return Object(c.useEffect)((function() {
                var e = o.current.getBoundingClientRect();
                O({
                    x: e.x,
                    w: e.width
                })
            }
            ), [t]),
            Object(i.jsx)("div", {
                style: Object(m.a)({
                    userSelect: "none"
                }, a),
                children: Object(i.jsxs)("div", {
                    onMouseDown: function(e) {
                        b(!0),
                        v(e)
                    },
                    onMouseOut: h,
                    onMouseUp: h,
                    onMouseMove: p,
                    onTouchMove: p,
                    onTouchEnd: h,
                    ref: o,
                    style: {
                        width: "auto",
                        display: "inline-block"
                    },
                    className: "pointer",
                    children: [Object(i.jsx)(ie, {
                        volume: t,
                        on: t > .02
                    }), Object(i.jsx)(ie, {
                        volume: t,
                        on: t > .1
                    }), Object(i.jsx)(ie, {
                        volume: t,
                        on: t > .2
                    }), Object(i.jsx)(ie, {
                        volume: t,
                        on: t > .3
                    }), Object(i.jsx)(ie, {
                        volume: t,
                        on: t > .4
                    }), Object(i.jsx)(ie, {
                        volume: t,
                        on: t > .5
                    }), Object(i.jsx)(ie, {
                        volume: t,
                        on: t > .6
                    }), Object(i.jsx)(ie, {
                        volume: t,
                        on: t > .7
                    }), Object(i.jsx)(ie, {
                        volume: t,
                        on: t > .8
                    }), Object(i.jsx)(ie, {
                        volume: t,
                        on: t > .9
                    })]
                })
            })
        };
        function ae(e, t) {
            var n = Math.floor(Math.random() * e.length);
            return n === t ? ae(e, t) : n
        }
        var oe = {
            width: "100%",
            zIndex: 6
        }
          , re = {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center"
        }
          , se = {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
            background: "black"
        }
          , le = {
            pointerEvents: "none",
            userSelect: "none",
            position: "fixed",
            top: "100%",
            left: "100%"
        }
          , ue = {
            width: "100%",
            height: "100%",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "8px"
        }
          , be = {
            pointerEvents: "none",
            userSelect: "none",
            zIndex: -1,
            borderRadius: "8px"
        }
          , de = function() {
            var e = Object(c.useState)("")
              , t = Object(l.a)(e, 2)
              , n = t[0]
              , a = t[1];
            return Object(c.useEffect)((function() {
                setTimeout((function() {
                    "" === n && a("."),
                    "." === n && a(".."),
                    ".." === n && a("..."),
                    "..." === n && a("")
                }
                ), 300)
            }
            ), [n]),
            Object(i.jsxs)("span", {
                children: ["Loading", n]
            })
        }
          , je = function(e) {
            var t = e.onStationChanged
              , n = e.isPlaying
              , a = e.setIsPlaying
              , o = Object(s.f)(he)
              , r = Object(s.e)(Ne)
              , u = Object(l.a)(r, 2)
              , b = u[0]
              , j = u[1]
              , f = Object(s.e)(xe)
              , h = Object(l.a)(f, 2)
              , p = h[0]
              , v = h[1]
              , w = Object(s.f)(ge)
              , N = Object(s.f)(ye)
              , M = Object(c.useState)(!0)
              , Z = Object(l.a)(M, 2)
              , z = Z[0]
              , T = Z[1]
              , A = Object(s.e)(ve)
              , G = Object(l.a)(A, 2)
              , D = G[0]
              , P = G[1]
              , S = Object(c.useState)(null)
              , H = Object(l.a)(S, 2)
              , L = H[0]
              , E = H[1]
              , Y = Object(s.e)(pe)
              , k = Object(l.a)(Y, 2)
              , W = k[0]
              , R = k[1]
              , B = Object(c.useState)(null)
              , F = Object(l.a)(B, 2)
              , V = F[0]
              , X = F[1]
              , Q = Object(c.useState)("")
              , C = Object(l.a)(Q, 2)
              , U = C[0]
              , K = C[1]
              , q = Object(s.f)(he)
              , _ = Object(s.e)(Ze)
              , $ = Object(l.a)(_, 2)
              , ee = $[0]
              , ie = $[1]
              , je = !V && q && ee
              , me = x();
            function fe() {
                X(null),
                K("")
            }
            function Oe(e) {
                e ? y.track("Player - Play") : y.track("Player - Pause"),
                a(e)
            }
            var Ie = Object(c.useCallback)((function() {
                fe(),
                j(!1);
                var e = ae(g, N);
                v(g[e].id),
                t(),
                y.track("Player - Shuffle")
            }
            ), [N, t]);
            function we() {
                fe(),
                j(!1);
                var e = function(e, t) {
                    var n = t - 1;
                    return n < 0 ? e.length - 1 : n
                }(g, N);
                v(g[e].id),
                t(),
                y.track("Player - Back")
            }
            function Me() {
                fe(),
                j(!1);
                var e = function(e, t) {
                    var n = t + 1;
                    return n > e.length - 1 ? 0 : n
                }(g, N);
                v(g[e].id),
                t(),
                y.track("Player - Forward")
            }
            return d([["ArrowRight", Me], ["ArrowLeft", we], ["ArrowUp", function() {
                R(Math.round(10 * Math.min(W + .1, 1)) / 10)
            }
            ], ["ArrowDown", function() {
                R(Math.round(10 * Math.max(W - .1, 0)) / 10)
            }
            ], ["v", function() {
                je || y.track("Xem video chính thức"),
                ie(!je)
            }
            ], ["Escape", function() {
                return j(!1)
            }
            ], [" ", function() {
                return Oe(!n)
            }
            ]], o),
            Object(c.useEffect)((function() {
                var e;
                if (D)
                    return e = setTimeout((function() {
                        E(!0)
                    }
                    ), 3e3),
                    function() {
                        return clearTimeout(e)
                    }
                    ;
                clearTimeout(e),
                E(!1)
            }
            ), [D, w]),
            Object(c.useEffect)((function() {
                if (150 === V) {
                    K("Ops, this station is not working. Skipping it");
                    var e = setTimeout((function() {
                        fe(),
                        Ie()
                    }
                    ), 4e3);
                    return function() {
                        return clearTimeout(e)
                    }
                }
            }
            ), [V, Ie]),
            Object(i.jsxs)(i.Fragment, {
                children: [Object(i.jsxs)("div", {
                    style: Object(m.a)(Object(m.a)({}, oe), {}, {
                        display: o ? "block" : "none"
                    }),
                    children: [!b && U && Object(i.jsxs)("span", {
                        className: "red",
                        children: [U, Object(i.jsx)(I, {})]
                    }), !b && !U && D && L && Object(i.jsxs)("span", {
                        className: "red",
                        children: ["Buffering", Object(i.jsx)(I, {})]
                    }), Object(i.jsx)(ne, {
                        size: 14
                    }), !z && Object(i.jsx)("div", {
                        id: "buttons-ui",
                        children: Object(i.jsxs)("div", {
                            style: re,
                            children: [!n && Object(i.jsx)(J, {
                                icon: "play",
                                onClick: function() {
                                    return Oe(!0)
                                }
                            }), n && Object(i.jsx)(J, {
                                icon: "pause",
                                onClick: function() {
                                    return Oe(!1)
                                }
                            }), Object(i.jsx)(J, {
                                icon: "shuffle",
                                onClick: Ie
                            }), Object(i.jsx)(J, {
                                icon: "previous",
                                onClick: we
                            }), Object(i.jsx)(J, {
                                icon: "forward",
                                onClick: Me
                            }), !me && Object(i.jsx)(ce, {
                                volume: W,
                                setVolume: R,
                                style: {
                                    marginLeft: "4px"
                                }
                            })]
                        })
                    }), Object(i.jsx)(ne, {
                        size: 12
                    }), !z && Object(i.jsx)(te, {
                        isPlaying: n,
                        currentStationId: p,
                        setCurrentStationId: function(e) {
                            v(e),
                            t(),
                            Oe(!0)
                        }
                    }), z && Object(i.jsx)("div", {
                        id: "buttons-ui",
                        children: Object(i.jsx)(de, {})
                    })]
                }), Object(i.jsx)("div", {
                    style: je ? se : le,
                    className: "yt-wrapper",
                    children: Object(i.jsx)("div", {
                        style: ue,
                        children: Object(i.jsx)(O.a, {
                            controls: !1,
                            playing: n,
                            url: "https://www.youtube.com/watch?v=" + w.id,
                            style: be,
                            width: "100vw",
                            height: "200vw",
                            volume: W,
                            config: {
                                youtube: {
                                    playerVars: {
                                        modestbranding: !0,
                                        color: "black"
                                    }
                                }
                            },
                            playsinline: !0,
                            onReady: function() {
                                return T(!1)
                            },
                            onError: function(e) {
                                return X(e)
                            },
                            onPlay: function() {
                                return a(!0)
                            },
                            onPause: function() {
                                return a(!1)
                            },
                            onBuffer: function() {
                                return P(!0)
                            },
                            onBufferEnd: function() {
                                return P(!1)
                            },
                            onStart: function() {
                                return P(!1)
                            },
                            onEnded: function() {
                                return Ie()
                            }
                        })
                    })
                })]
            })
        }
          , me = ["fqtxCwUd2t6dCzILMq", "3dhmyq6EKw2x7eFt4X", "MU56lYT1Ov07fVTsnM", "3oEjHGokRZdOBbcZuo", "wKnqovL33x9in9ci6X", "KETTXY34XNgWZBxvqx", "NKEt9elQ5cR68", "Basrh159dGwKY", "XbJYBCi69nyVOffLIU", "mJhkYA1gnvY7r481qL", "dvreHY4p06lzVSDrvj", "8vRvucL4OhyjyM4A8T", "gfld3S4CsRXRZjqEj3", "7bEpr3NIPNY0E", "QLgtN0msAekg3x7YTm", "dsd7XbYg0e6hG0A7i8", "YRK6HL1CEMUxZHLvjl", "YRQfWgn1De4nYLLQBa", "NnMH7LDpZTPZS", "xUOwGcu6wd0cXBj5n2", "3o6nV7ygKBVCmLPpJu", "p71BYIPogqBPy", "2seKKLp1n0sEeJLYTK", "PXj1J0eMONGOA", "5torEEM8QnR95Cqg11", "He1ppTVuaVSCs", "97e6IX0kayYTK", "3gTmgzy7wYJfyaGRHQ", "3nbxypT20Ulmo", "v2WuhMBzb3h5e", "ZyFCksxxD9tmLYfGJo", "j5zqQSABpeHCU8EpO3", "TNTyFBi6r9R6g", "7FvaPVEKXuB3O", "Wci9oW5MbO6PK", "qvkaMMMqyGFjO", "4oHyOIBIt57ag", "lkceXNDw4Agryfrwz8", "SJhhRPXjaTGe5MKz5N", "4YZNYcTybcYTnROykG", "RcRYrpC1pBvIB0icDm", "9LZTcawH3mc8V2oUqk", "pVGsAWjzvXcZW4ZBTE", "2SYqgPxMm2kbVe3y02", "tvU9iTev6uBIQ", "H62NM1ab7wzMXURdoi", "l1BgQOc1Jj7L86BA4", "gH1jGsCnQBiFHWMFzh", "11fHSR7hmRLbkA", "ckr4W2ppxPBeIF8dx4", "vMSXa7KFGx49aeeXhe", "ZCZ7FHlu3sPek3h0zP", "2yzgWbRc97QOIUpklz", "9jwuxt5bXKadi", "6705G9I9sUcNCaJF10"]
          , fe = ["static1", "static2", "static3", "static4", "static5", "static6", "static7", "static8"]
          , Oe = function(e) {
            return function(t) {
                var n = t.setSelf
                  , i = t.onSet
                  , c = localStorage.getItem(e);
                null != c && n(JSON.parse(c)),
                i((function(t) {
                    t instanceof s.a ? localStorage.removeItem(e) : localStorage.setItem(e, JSON.stringify(t))
                }
                ))
            }
        }
          , he = Object(s.c)({
            key: "playerShown",
            default: !1
        })
          , pe = Object(s.c)({
            key: "playerVolume",
            default: .7,
            effects_UNSTABLE: [Oe("playerVolume")]
        })
          , ve = Object(s.c)({
            key: "isBuffering",
            default: null
        })
          , xe = Object(s.c)({
            key: "currentStationId",
            default: g[0].id,
            effects_UNSTABLE: [Oe("currentStationId")]
        })
          , ge = Object(s.d)({
            key: "currentStation",
            get: function(e) {
                var t = (0,
                e.get)(xe)
                  , n = g.find((function(e) {
                    return e.id === t
                }
                ));
                return n || (localStorage.removeItem("currentStationId"),
                g[0])
            }
        })
          , ye = Object(s.d)({
            key: "currentStationIndex",
            get: function(e) {
                var t = (0,
                e.get)(ge);
                return g.findIndex((function(e) {
                    return e === t
                }
                ))
            }
        })
          , Ie = Object(s.c)({
            key: "pomodoroShown",
            default: !1
        })
          , we = Object(s.c)({
            key: "aboutShown",
            default: !1
        })
          , Ne = Object(s.c)({
            key: "stationsSelectorOpen",
            default: !1
        })
          , Me = Object(s.c)({
            key: "lowEnergyMode",
            default: !1,
            effects_UNSTABLE: [Oe("lowEnergyMode")]
        })
          , Ze = Object(s.c)({
            key: "embedShown",
            default: !1,
            effects_UNSTABLE: [Oe("embedShown")]
        })
          , ze = Object(s.c)({
            key: "currentGifIndex",
            default: 0,
            effects_UNSTABLE: [Oe("currentGifIndex")]
        })
          , Te = Object(s.c)({
            key: "nextGifIndex",
            default: ae(me)
        })
          , Ae = Object(s.c)({
            key: "staticShown",
            default: !1
        })
          , Ge = Object(s.c)({
            key: "staticIndex",
            default: ae(fe)
        });
        function De() {
            return "ontouchend"in document
        }
        function Pe(e) {
            var t = function(e, t) {
                var n = function(e) {
                    var t = window.localStorage.getItem(e);
                    if (t)
                        return JSON.parse(t)
                }
                  , i = Object(c.useState)((function() {
                    if ("undefined" !== typeof window)
                        return n(e) || t
                }
                ))
                  , a = Object(l.a)(i, 2)
                  , o = a[0]
                  , r = a[1];
                Object(c.useEffect)((function() {
                    try {
                        r(n(e))
                    } catch (t) {
                        console.log("error reading local storage!", t)
                    }
                }
                ), [e]);
                var s = Object(c.useCallback)((function(t) {
                    try {
                        var n = t instanceof Function ? t(o) : t;
                        r(n),
                        window.localStorage.setItem(e, JSON.stringify(n))
                    } catch (i) {
                        console.log("error writing local storage", i)
                    }
                }
                ), [o])
                  , u = Object(c.useCallback)((function() {
                    window.localStorage.removeItem(e),
                    r(t)
                }
                ), []);
                return [o, s, u]
            }("aboutShown", !1)
              , n = Object(l.a)(t, 2)
              , i = n[0]
              , a = n[1]
              , o = De()
              , r = Object(s.g)(we);
            Object(c.useEffect)((function() {
                var t = window.innerWidth;
                if (!(o || t < 600) && !i && e) {
                    var n = setTimeout((function() {
                        r(!0),
                        a(!0)
                    }
                    ), 1e3);
                    return function() {
                        return clearTimeout(n)
                    }
                }
            }
            ), [e])
        }
        var Se = n(34)
          , He = n.n(Se);
        function Le() {
            var e = Object(s.g)(xe);
            Object(c.useEffect)((function() {
                var t = function() {
                    var e = He.a.parse(location.search).station;
                    return e && g.find((function(t) {
                        return t.id === e
                    }
                    ))
                }();
                t && e(t.id)
            }
            ), [])
        }
        function Ee() {
            var e = Object(s.f)(ge);
            return function() {
                e && (y.track("Tweet Station", {
                    stationName: e.name,
                    stationId: e.id
                })
                )
            }
        }
        var Ye = n.p + "./media/boot.47b60944.mp3"
          , ke = n.p + "./media/static.c9617a7e.mp3"
          , We = n.p + "./media/endWork.05b9f5ea.mp3"
          , Re = n.p + "./media/endPause.d5eb5059.mp3"
          , Be = {
            static: new Audio(ke),
            boot: new Audio(Ye),
            endWork: new Audio(We),
            endPause: new Audio(Re)
        }
          , Fe = n(35)
          , Ve = new (n.n(Fe).a)({
            en: {
                listeningNow: "listening now",
                tapToStart: "Tap to start",
                pressToStart: "Press any key to start",
                changeStation: "Change station",
                playPause: "Play/Pause",
                changeGif: "Change gif",
                showVideo: "Show original video",
                lowPowerMode: "Low power mode",
                closeThis: "Close",
                gitHub: "Github",
                arrows: "Arrows",
                spacebar: "Spacebar",
            }
        });
        var Xe = n(17);
        function Qe(e) {
            var t = e.show
              , n = e.children
              , c = Object(Xe.a)(e, ["show", "children"]);
            return Object(i.jsx)(K.a, {
                children: t && Object(i.jsx)(q.a.div, Object(m.a)(Object(m.a)({
                    initial: {
                        y: -20,
                        opacity: 0
                    },
                    animate: {
                        y: 0,
                        opacity: 1
                    },
                    exit: {
                        y: -20,
                        opacity: 0
                    },
                    transition: {
                        type: "spring",
                        duration: .25,
                        bounce: .05
                    },
                    className: "about-container"
                }, c), {}, {
                    children: n
                }))
            })
        }
        var Ce = function() {
            return Object(i.jsxs)("span", {
                style: {
                    display: "flex",
                    marginBottom: "10px"
                },
                children: [Object(i.jsx)(Ue, {
                    name: "Việt Trung",
                    username: "vietrux",
                    image: "data:image/jpeg;base64,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"
                })
                 , Object(i.jsx)(Ue, {
                     name: "Fabrizio Rinaldi",
                     username: "linuz90",
                     image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAIAAAAErfB6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAGo2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuMTY0NzUzLCAyMDIxLzAyLzE1LTExOjUyOjEzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMC0wNC0yNVQxNzowNDozNyswMjowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjEtMDQtMTVUMTM6MzI6MjQrMDI6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjEtMDQtMTVUMTM6MzI6MjQrMDI6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Y2ViODc0MmQtNjYzNy00YTQ3LWEzZTEtMWQ3MGZkZjhlNjI5IiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MzMzN2MwM2MtYTQyMC00MTRhLTk4ZDItODAyODY4Yzg1MmNkIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6M2M5ZmJlZjEtMzE1OS00YTljLWE5MWEtOGQwMGJkMzk4NDI5IiB0aWZmOk9yaWVudGF0aW9uPSIxIiB0aWZmOlJlc29sdXRpb25Vbml0PSIyIiBleGlmOkNvbG9yU3BhY2U9IjEiIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSIxMDI0IiBleGlmOlBpeGVsWURpbWVuc2lvbj0iMTAyNCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjNjOWZiZWYxLTMxNTktNGE5Yy1hOTFhLThkMDBiZDM5ODQyOSIgc3RFdnQ6d2hlbj0iMjAyMS0wNC0xNVQxMzoyNjo0MiswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjMgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmNlYjg3NDJkLTY2MzctNGE0Ny1hM2UxLTFkNzBmZGY4ZTYyOSIgc3RFdnQ6d2hlbj0iMjAyMS0wNC0xNVQxMzozMjoyNCswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjMgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+dRa6bQAAED1JREFUeJztXXtwVOUV33v33n1k89i8CAESDAkgENQg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"
                 })
                 , Object(i.jsx)(Ue, {
                    name: "Marianna",
                    username: "maridivi89",
                    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAIAAAAErfB6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAM22lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuMTY0NzUzLCAyMDIxLzAyLzE1LTExOjUyOjEzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmIxZDdjMmIwLTgyMjYtOGE0Zi1hOGI1LWNjZThhMDA0OGY1NCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5MjcwZGYzZi01MGU3LTRlOGUtOTk3ZC1mYTU3YTI2N2ExMTgiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0iMEQ4QkQzRUQzNDQ2OTUxNUYxRkE1RkJBQUZEMjQ3QjEiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTA0LTE1VDEzOjE4OjM4KzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wNC0xNVQxMzoyOTo1MiswMjowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wNC0xNVQxMzoyOTo1MiswMjowMCIgdGlmZjpJbWFnZVdpZHRoPSI2NDAiIHRpZmY6SW1hZ2VMZW5ndGg9IjY0MCIgdGlmZjpQaG90b21ldHJpY0ludGVycHJldGF0aW9uPSIyIiB0aWZmOlNhbXBsZXNQZXJQaXhlbD0iMyIgdGlmZjpYUmVzb2x1dGlvbj0iNzIvMSIgdGlmZjpZUmVzb2x1dGlvbj0iNzIvMSIgdGlmZjpSZXNvbHV0aW9uVW5pdD0iMiIgZXhpZjpFeGlmVmVyc2lvbj0iMDIzMSIgZXhpZjpDb2xvclNwYWNlPSI2NTUzNSIgZXhpZjpQaXhlbFhEaW1lbnNpb249IjY0MCIgZXhpZjpQaXhlbFlEaW1lbnNpb249IjY0MCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmJmMWUxOTY5LTViYjQtNDFkYi1hMTU4LTU1Yzk1NTA2NGJiMyIgc3RFdnQ6d2hlbj0iMjAyMS0wNC0xNVQxMzoyMzozNSswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjMgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNvbnZlcnRlZCIgc3RFdnQ6cGFyYW1ldGVycz0iZnJvbSBpbWFnZS9qcGVnIHRvIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGltYWdlL2pwZWcgdG8gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MGJjM2I0ZmMtNDc2Yi00NDU0LTg5MDctYTcyODdmM2ViMmI0IiBzdEV2dDp3aGVuPSIyMDIxLTA0LTE1VDEzOjIzOjM1KzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMyAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YTZiODMyYmQtOGEyYi00ZDhhLWI5ODUtZjVjMzRmMjFiOGY0IiBzdEV2dDp3aGVuPSIyMDIxLTA0LTE1VDEzOjIzOjQyKzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMyAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MmY5NzIzZjgtNjljYy00ODZiLWFiNDctYTgxZTBjMGNhMWE3IiBzdEV2dDp3aGVuPSIyMDIxLTA0LTE1VDEzOjIzOjQyKzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMyAoTWFjaW50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"
                })
            ]
            })
        }
          , Ue = function(e) {
            var t = e.name
              , n = e.username
              , c = e.image;
            return Object(i.jsxs)("a", {
                href: "https://twitter.com/" + n,
                target: "_blank",
                rel: "noopener noreferrer",
                style: {
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    marginLeft: "16px"
                },
                className: "team-member pointer",
                children: [Object(i.jsx)("img", {
                    style: {
                        width: "80px",
                        height: "80px",
                        marginBottom: "3px"
                    },
                    src: c,
                    alt: t,
                    className: "green-box-small"
                }), Object(i.jsxs)("span", {
                    style: {
                        display: "block",
                        textDecoration: "none",
                        fontSize: "20px"
                    },
                    children: ["@", n]
                })]
            })
        }
          , Je = function() {
            return Object(i.jsxs)("form", {
                action: "",
                method: "post",
                target: "popupwindow",
                onSubmit: "window.open('', 'popupwindow')",
                className: "embeddable-buttondown-form",
                style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    marginBottom: "4px"
                },
            })
        }
          , Ke = function() {
            var e = Object(s.f)(we);
            return Object(i.jsxs)(Qe, {
                show: e,
                className: "about-container",
                children: [
                    Object(i.jsxs)("span", {
                    style: {
                        marginBottom: "4px"
                    },
                    children: [Object(i.jsx)("span", {
                        className: "red",
                        children: "61N!"
                    })]
                }), Object(i.jsx)(Ce, {}), Object(i.jsxs)("span", {
                    style: {
                        marginBottom: "4px"
                    },
                    children: [Object(i.jsx)("span", {
                        className: "red",
                        children: Ve.arrows
                    }), " ", Ve.changeStation]
                }), Object(i.jsxs)("span", {
                    style: {
                        marginBottom: "16px"
                    },
                    children: [Object(i.jsx)("span", {
                        className: "red",
                        children: Ve.spacebar
                    }), " ", Ve.playPause]
                }), Object(i.jsxs)("span", {
                    style: {
                        marginBottom: "4px"
                    },
                    children: [Object(i.jsx)("span", {
                        className: "red",
                        children: "G"
                    }), " ", Ve.changeGif]
                }), Object(i.jsxs)("span", {
                    style: {
                        marginBottom: "12px"
                    },
                    children: [Object(i.jsx)("span", {
                        className: "red",
                        children: "V"
                    }), " ", Ve.showVideo]
                }), Object(i.jsxs)("span", {
                    style: {
                        marginBottom: "4px"
                    },
                    children: [Object(i.jsx)("span", {
                        className: "red",
                        children: "L"
                    }), " ", Ve.lowPowerMode]
                }), Object(i.jsxs)("span", {
                    style: {
                        marginBottom: "12px"
                    },
                    children: [Object(i.jsx)("span", {
                        className: "red",
                        children: "ESC"
                    }), " ", Ve.closeThis]
                }), Object(i.jsx)(Je, {}), Object(i.jsx)("a", {
                    href: "https://github.com/vietrux/Lofi-Coffee",
                    target: "_blank",
                    children: Object(i.jsx)(J, {
                        text: Ve.gitHub
                    })
                })]
            })
        };
        var qe = function(e) {
            var t = e.src
              , n = e.zIndex
              , c = void 0 === n ? 0 : n
              , a = e.show;
            return void 0 === a || a ? Object(i.jsx)("img", {
                style: {
                    position: "absolute",
                    width: "100vw",
                    height: "100vh",
                    top: "0",
                    left: "0",
                    objectFit: "cover",
                    zIndex: c
                },
                src: t,
                alt: ""
            }) : null
        };
        function _e() {
            var e = Object(s.f)(ze)
              , t = Object(s.f)(Ae)
              , n = Object(s.f)(Ge)
              , c = Object(s.f)(Te);
            return Object(i.jsxs)(i.Fragment, {
                children: [Object(i.jsx)(qe, {
                    src: _(fe[n]),
                    show: t,
                    zIndex: 1
                }), Object(i.jsx)(qe, {
                    src: _(me[e])
                }), Object(i.jsx)($e, {
                    src: _(fe[n])
                }), Object(i.jsx)($e, {
                    src: _(me[c])
                })]
            })
        }
        var $e = function(e) {
            var t = e.src;
            return Object(i.jsx)("img", {
                src: t,
                alt: "preload",
                style: {
                    position: "absolute",
                    top: "100%",
                    left: "100%"
                }
            })
        };
        function et(e) {
            var t = e.isPlaying
              , n = e.setIsPlaying
              , a = Object(c.useState)(!1)
              , o = Object(l.a)(a, 2)
              , r = o[0]
              , u = o[1];
            Object(c.useEffect)((function() {
                if (r) {
                    var e = setTimeout((function() {
                        u(!1)
                    }
                    ), 1e3);
                    return function() {
                        return clearTimeout(e)
                    }
                }
            }
            ), [r]);
            var b = Object(s.f)(we)
              , d = Object(s.f)(Ie)
              , j = Object(s.f)(Ne);
            return b || d || j ? null : Object(i.jsx)("div", {
                style: {
                    position: "absolute",
                    top: "25%",
                    right: "25%",
                    bottom: "25%",
                    left: "25%",
                    cursor: "pointer",
                    zIndex: 99,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                },
                onMouseEnter: function() {
                    return u(!0)
                },
                onMouseLeave: function() {
                    return u(!1)
                },
                onClick: function() {
                    n(!t)
                },
                children: Object(i.jsx)(X, {
                    name: t ? "pause" : "play",
                    style: {
                        transform: "scale(".concat(r ? .98 : .3, ")"),
                        opacity: r ? 1 : 0,
                        transition: "0.1s"
                    }
                })
            })
        }
        var tt = 1500;
        var nt = function() {
            var e = Object(s.f)(Ie)
              , t = Object(c.useState)(tt)
              , n = Object(l.a)(t, 2)
              , a = n[0]
              , o = n[1]
              , r = Object(c.useState)(!1)
              , u = Object(l.a)(r, 2)
              , b = u[0]
              , d = u[1]
              , j = Object(c.useState)(!1)
              , m = Object(l.a)(j, 2)
              , f = m[0]
              , O = m[1]
              , h = Object(c.useRef)(4)
              , p = Math.floor(a / 60).toString()
              , v = (a - 60 * p).toString()
              , x = !0 === f ? "blue" : !0 === b ? "red" : void 0;
            function g() {
                b || y.track("Pomodoro"),
                d(!b)
            }
            return Object(c.useEffect)((function() {
                var e;
                return b ? e = setInterval((function() {
                    o((function(e) {
                        return e - 1
                    }
                    ))
                }
                ), 1e3) : clearInterval(e),
                function() {
                    return clearInterval(e)
                }
            }
            ), [b]),
            Object(c.useEffect)((function() {
                0 === a && (d(!1),
                f ? (o(tt),
                O(!1),
                Be.endPause.play()) : (O(!0),
                h.current++,
                h.current % 4 === 0 ? (o(900),
                Be.endWork.play()) : (o(300),
                Be.endWork.play())))
            }
            ), [a, f]),
            Object(i.jsxs)(Qe, {
                show: e,
                style: {
                    textAlign: "right",
                    marginTop: 15
                },
                className: "vertical",
                children: [Object(i.jsxs)("span", {
                    className: x,
                    children: [2 === p.length ? p : "0" + p, ":", 2 === v.length ? v : "0" + v]
                }), b || a === tt || 300 === a || 900 === a ? Object(i.jsx)(J, {
                    text: b ? "Pause" : "Start",
                    onClick: g
                }) : Object(i.jsxs)("div", {
                    style: {
                        display: "flex"
                    },
                    children: [Object(i.jsx)(J, {
                        text: "Continue",
                        onClick: g,
                        style: {
                            marginRight: "8px"
                        }
                    }), " ", Object(i.jsx)(J, {
                        text: "Stop",
                        onClick: function() {
                            d(!1),
                            o(tt)
                        }
                    })]
                }), (!f || f && !b) && Object(i.jsx)(J, {
                    text: "+5:00",
                    onClick: function() {
                        o((function(e) {
                            return e + 300
                        }
                        )),
                        b || (O(!1),
                        d(!0),
                        Be.endWork.play())
                    }
                })]
            })
        }
          , it = function(e) {
            var t = e.blinking
              , n = e.style
              , a = Object(c.useState)("\u2588")
              , o = Object(l.a)(a, 2)
              , r = o[0]
              , s = o[1];
            return Object(c.useEffect)((function() {
                t ? setTimeout((function() {
                    "" === r && s("\u2588"),
                    "\u2588" === r && s("")
                }
                ), 600) : s("\u2588")
            }
            ), [t, r]),
            Object(i.jsx)("span", {
                style: Object(m.a)({
                    marginLeft: "4px",
                    fontSize: "100%"
                }, n),
                children: r
            })
        }
          , ct = function(e) {
            var t = e.children
              , n = e.delay
              , a = void 0 === n ? 0 : n
              , o = e.show
              , r = void 0 === o || o
              , s = e.onFinished
              , u = e.style
              , b = e.className
              , d = Object(c.useState)("")
              , j = Object(l.a)(d, 2)
              , m = j[0]
              , f = j[1]
              , O = Object(c.useRef)(0)
              , h = t.length;
            return Object(c.useEffect)((function() {
                if (r) {
                    var e = setTimeout((function() {
                        var e = setInterval((function() {
                            return O.current++,
                            f(t.toString().slice(0, O.current)),
                            O.current > h - 1 && (clearInterval(e),
                            s && s()),
                            function() {
                                return clearInterval(e)
                            }
                        }
                        ), 40)
                    }
                    ), a);
                    return function() {
                        return clearTimeout(e)
                    }
                }
            }
            ), [t, a, h, s, r, m]),
            Object(i.jsx)("span", {
                style: u,
                className: b,
                children: m
            })
        }
          , at = De();
        function ot() {
            var e = Object(c.useState)(!1)
              , t = Object(l.a)(e, 2)
              , n = t[0]
              , a = t[1]
              , o = at ? Ve.tapToStart : Ve.pressToStart;
            return Object(i.jsxs)("button", {
                style: oe,
                children: [Object(i.jsx)(ct, {
                    delay: 1500,
                    onFinished: function() {
                        return a(!0)
                    },
                    children: o
                }), Object(i.jsx)(it, {
                    blinking: n
                })]
            })
        }
        function rt() {
            y.track("Share on Facebook"),
            window.open("blank_")
        }
        var st = De();
        function lt(e) {
            var t = e.fullscreen
              , n = e.fullscreenAvailable
              , c = Object(s.e)(Ie)
              , a = Object(l.a)(c, 2)
              , o = a[0]
              , r = a[1]
              , u = Object(s.e)(we)
              , b = Object(l.a)(u, 2)
              , d = b[0]
              , j = b[1]
              , m = Ee();
            return Object(i.jsxs)("div", {
                id: "horizontal",
                children: [n && Object(i.jsx)(J, {
                    className: "hide-small-screen",
                    tooltip: "Fullscreen",
                    icon: t.active ? "fullscreenExit" : "fullscreenEnter",
                    onClick: function() {
                        return t.active ? t.exit() : t.enter()
                    },
                    style: {
                        marginRight: "14px"
                    }
                }), 
                Object(i.jsx)(J, {
                    tooltip: "Pomodoro Timer",
                    icon: "timer",
                    onClick: function() {
                        o || y.track("Start Pomodoro"),
                        r(!o),
                        j(!1)
                    },
                    style: {
                        marginRight: "14px"
                    }
                }), Object(i.jsx)(J, {
                    tooltip: "About",
                    icon: "heart",
                    onClick: function() {
                        d || y.track("Open About"),
                        j(!d),
                        r(!1)
                    }
                })]
            })
        }
        var ut = n(10)
          , bt = n.n(ut)
          , dt = n(24)
          , jt = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
              , n = Object(c.useState)(null)
              , i = Object(l.a)(n, 2)
              , a = i[0]
              , o = i[1]
              , r = Object(c.useState)(null)
              , s = Object(l.a)(r, 2)
              , u = s[0]
              , b = s[1];
            return Object(c.useEffect)((function() {
                (function() {
                    var t = Object(dt.a)(bt.a.mark((function t() {
                        var n, i;
                        return bt.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0,
                                    t.next = 3,
                                    fetch(e);
                                case 3:
                                    return n = t.sent,
                                    t.next = 6,
                                    n.json();
                                case 6:
                                    i = t.sent,
                                    o(i),
                                    t.next = 13;
                                    break;
                                case 10:
                                    t.prev = 10,
                                    t.t0 = t.catch(0),
                                    b(t.t0);
                                case 13:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[0, 10]])
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }
                )()()
            }
            ), t),
            {
                response: a,
                error: u
            }
        }
          , mt = function(e) {
            var t = e.blinking
              , n = Object(Xe.a)(e, ["blinking"])
              , a = Object(c.useState)("\u2022")
              , o = Object(l.a)(a, 2)
              , r = o[0]
              , s = o[1];
            return Object(c.useEffect)((function() {
                t ? setTimeout((function() {
                    " " === r && s("\u2022"),
                    "\u2022" === r && s(" ")
                }
                ), 600) : s("\u2022")
            }
            ), [t, r]),
            Object(i.jsx)("span", Object(m.a)(Object(m.a)({}, n), {}, {
                children: r
            }))
        }
          , ft = function() {
            var e, t = Object(c.useState)(!1), n = Object(l.a)(t, 2), a = n[0], o = n[1], r = Object(c.useState)(0), s = Object(l.a)(r, 2), u = s[0], d = s[1];
            b("focus", (function() {
                d(u + 1)
            }
            ));
            var j = jt("", [u])
              , m = null !== (e = null === j || void 0 === j ? void 0 : j.response) && void 0 !== e ? e : 0
              , f = m && m.toLocaleString("en")
              , O = Object(c.useMemo)((function() {
                return Ve.listeningNow + " " + f.toString()
            }
            ), [f]);
            return !f || (null === j || void 0 === j ? void 0 : j.response) < 3 ? null : Object(i.jsxs)("span", {
                className: "red",
                id: "visitors-counter",
                children: [Object(i.jsx)(ct, {
                    delay: 1e3,
                    className: "red",
                    onFinished: function() {
                        return o(!0)
                    },
                    children: O
                }), a && Object(i.jsx)(mt, {
                    style: {
                        display: "inline-block",
                        width: "10px",
                        marginLeft: "4px"
                    },
                    blinking: !0,
                    className: "red"
                })]
            })
        };
        var Ot = function() {
            var e = Object(s.e)(he)
              , t = Object(l.a)(e, 2)
              , n = t[0]
              , a = t[1]
              , o = Object(s.e)(Me)
              , r = Object(l.a)(o, 2)
              , b = r[0]
              , j = r[1]
              , m = Object(c.useState)(!1)
              , f = Object(l.a)(m, 2)
              , O = f[0]
              , h = f[1]
              , p = Object(s.g)(Ie)
              , v = Object(s.g)(we)
              , x = function() {
                var e = Object(s.g)(Ae)
                  , t = Object(s.e)(Ge)
                  , n = Object(l.a)(t, 2)
                  , i = n[0]
                  , c = n[1];
                return function(t) {
                    e(!0),
                    setTimeout((function() {
                        e(!1);
                        var t = ae(fe, i);
                        c(t)
                    }
                    ), t)
                }
            }()
              , g = function() {
                var e = Object(s.g)(ze)
                  , t = Object(s.e)(Te)
                  , n = Object(l.a)(t, 2)
                  , i = n[0]
                  , c = n[1];
                return function() {
                    e(i);
                    var t = ae(me, i);
                    c(t)
                }
            }()
              , I = Ee();
            Pe(O),
            Le();
            var w = "ja" === Ve.getLanguage()
              , N = Object(u.b)()
              , M = document.fullscreenEnabled || document.mozFullscreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled;
            function Z() {
                n || (a(!0),
                h(!0))
            }
            return d([["Escape", function() {
                v(!1),
                p(!1)
            }
            ], ["d", I], ["l", function() {
                return j(!b)
            }
            ], ["g", g], ["any", Z]]),
            Object(i.jsx)(u.a, {
                handle: N,
                children: Object(i.jsxs)("div", {
                    id: "container",
                    className: [b ? "low-energy" : "", n ? "" : "pointer", w ? "ja" : ""].join(" ").trim(),
                    onClick: Z,
                    children: [n && Object(i.jsx)(et, {
                        isPlaying: O,
                        setIsPlaying: h
                    }), Object(i.jsx)(_e, {}), Object(i.jsx)("div", {
                        id: "crt-lines"
                    }), Object(i.jsx)("div", {
                        id: "darken"
                    }), Object(i.jsx)("div", {
                        id: "vignette"
                    }), Object(i.jsxs)("div", {
                        id: "top-ui",
                        children: [Object(i.jsx)("div", {
                            children: Object(i.jsx)(ft, {})
                        }), Object(i.jsxs)("div", {
                            className: "vertical",
                            children: [n && Object(i.jsx)(lt, {
                                fullscreen: N,
                                fullscreenAvailable: M
                            }), Object(i.jsx)(Ke, {}), Object(i.jsx)(nt, {})]
                        })]
                    }), !n && Object(i.jsx)(ot, {}), Object(i.jsx)(je, {
                        isPlaying: O,
                        setIsPlaying: h,
                        onStationChanged: function() {
                            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                            y.track("Thay đổi kênh"),
                            x(300),
                            e && Be.static.play(),
                            g()
                        }
                    })]
                })
            })
        };
        var ht = function() {
            return Object(i.jsx)(s.b, {
                children: Object(i.jsx)(Ot, {})
            })
        }
          , pt = function(e) {
            e && e instanceof Function && n.e(3).then(n.bind(null, 89)).then((function(t) {
                var n = t.getCLS
                  , i = t.getFID
                  , c = t.getFCP
                  , a = t.getLCP
                  , o = t.getTTFB;
                n(e),
                i(e),
                c(e),
                a(e),
                o(e)
            }
            ))
        };
        r.a.render(Object(i.jsx)(a.a.StrictMode, {
            children: Object(i.jsx)(ht, {})
        }), document.getElementById("root")),
        pt()
    }
}, [[82, 1, 2]]]);
//# sourceMappingURL=main.4a5edcbf.chunk.js.map
