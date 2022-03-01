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
            id: "EWWVb2UnsiY",
            name: "Lofi Space Station \ud83d\ude80 Aesthetic Lofi Beats to Chill / Study to \ud83c\udf0c Lofi Radio 24/7"
        }, {
            id: "Qt0-9mO-ZXY",
            name: "Space Lofi Hip Hop Radio 24/7 \ud83d\ude80 Chill Lofi Beats To Study, Lofi Sleep Music \ud83d\ude80 No Copyright Lofi"
        }, {
            id: "gP6NUGr5onQ",
            name: "Tokyo Lofi Hip Hop 24/7 \ud83c\udfef Japanese Lofi Playlist 2021 \ud83c\udfef No Copyright Lofi & Chillhop Beats"
        }, {
            id: "r1GJeu7S_SY",
            name: "Japanese Lofi Radio 24/7 \ud83d\udd34The Japanese Garden \ud83d\udd34 No Copyright Lofi Hip Hop Beats To Study/Relax To"
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
                    image: " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABewAAAXsCAYAAABUvMnxAAAgAElEQVR4XuzcPcsu2ZUmaCVymwQxMoaUkGgQZSUUY+ijDLWRMNQvKE92eTPzA8oY2ugfUDOebFnTdg+IgnTa0EeP05CWkCNBJmVIFBTlFjn5QmedfM7J95wd8e57xV47rnJrx/641op4Iu7zKt/7/vvf/fwb/o8AAQIECBAgQIAAAQIECBAgQIAAgSUFvv8/fWfJfdnUuMAf/vzp+OCDI1P9kdzzwSPeavh7Avtb1dthCRAgQIAAAQIECBAgQIAAAQIEmgmkAtlmDK23mwy/U/2R3HPrYoY3L7APA5ueAAECBAgQIECAAAECBAgQIECAwEsEUoHsS/bk2mMCyfA71R/JPR/Tu9dogf296u20BAgQIECAAAECBAgQIECAAAECzQRSgWwzhtbbTYbfqf5I7rl1McObF9iHgU1PgAABAgQIECBAgAABAgQIECBA4CUCqUD2JXty7TGBZPid6o/kno/p3Wu0wP5e9XZaAgQIECBAgAABAgQIECBAgACBZgKpQLYZQ+vtJsPvVH8k99y6mOHNC+zDwKYnQIAAAQIECBAgQIAAAQIECBAg8BKBVCD7kj259phAMvxO9Udyz8f07jVaYH+vejstAQIECBAgQIAAAQIECBAgQIBAM4FUINuMofV2k+F3qj+Se25dzPDmBfZhYNMTIECAAAECBAgQIECAAAECBAgQeIlAKpB9yZ5ce0wgGX6n+iO552N69xotsL9XvZ2WAAECBAgQIECAAAECBAgQIECgmUAqkG3G0Hq7yfA71R/JPbcuZnjzAvswsOkJECBAgAABAgQIECBAgAABAgQIvEQgFci+ZE+uPSaQDL9T/ZHc8zG9e40W2N+r3k5LgAABAgQIECBAgAABAgQIECDQTCAVyDZjaL3dZPid6o/knlsXM7x5gX0Y2PQECBAgQIAAAQIECBAgQIAAAQIEXiKQCmRfsifXHhNIht+p/kju+ZjevUYL7O9Vb6clQIAAAQIECBAgQIAAAQIECBBoJpAKZJsxtN5uMvxO9Udyz62LGd68wD4MbHoCBAgQIECAAAECBAgQIECAAAECLxFIBbIv2ZNrjwkkw+9UfyT3fEzvXqMF9veqt9MSIECAAAECBAgQIECAAAECBAg0E0gFss0YWm83GX6n+iO559bFDG9eYB8GNj0BAgQIECBAgAABAgQIECBAgACBlwikAtmX7Mm1xwSS4XeqP5J7PqZ3r9EC+3vV22kJECBAgAABAgQIECBAgAABAgSaCaQC2WYMrbebDL9T/ZHcc+tihjcvsA8Dm54AAQIECBAgQIAAAQIECBAgQIDASwRSgexL9uTaYwLJ8DvVH8k9H9O712iB/b3q7bQECBAgQIAAAQIECBAgQIAAAQLNBFKBbDOG1ttNht+p/kjuuXUxw5sX2IeBTU+AAAECBAgQIECAAAECBAgQIEDgJQKpQPYle3LtMYFk+J3qj+Sej+nda7TA/l71dloCBAgQIECAAAECBAgQIECAAIFmAqlAthlD6+0mw+9UfyT33LqY4c0L7MPApidAgAABAgQIECBAgAABAgQIECDwEoFUIPuSPbn2mEAy/E71R3LPx/TuNVpgf696Oy0BAgQIECBAgAABAgQIECBAYHmBVAD5dHAh5GP5U9YdnVMW+m75R85SGxTYL1UOmyFAgAABAgQIECBAgAABAgQIEBCc1vVAylpg/1jDjh51XWilrwoI7PUDAQIECBAgQIAAAQIECBAgQIDAUgKpEPnpkILTx1KnrDs6pyz03VKPl+U3I7BfvkQ2SIAAAQIECBAgQIAAAQIECBC4l4DgtK7eKWuB/WMNO3rUdaGVviogsNcPBAgQIECAAAECBAgQIECAAAECSwmkQuSnQwpOH0udsu7onLLQd0s9XpbfjMB++RLZIAECBAgQIECAAAECBAgQIEDgXgKC07p6p6wF9o817OhR14VW+qqAwF4/ECBAgAABAgQIECBAgAABAgQILCWQCpGfDik4fSx1yrqjc8pC3y31eFl+MwL75UtkgwQIECBAgAABAgQIECBAgACBewkITuvqnbIW2D/WsKNHXRda6asCAnv9QIAAAQIECBAgQIAAAQIECBAgsJRAKkR+OqTg9LHUKeuOzikLfbfU42X5zQjsly+RDRIgQIAAAQIECBAgQIAAAQIE7iUgOK2rd8paYP9Yw44edV1opa8KCOz1AwECBAgQIECAAAECBAgQIECAwFICqRD56ZCC08dSp6w7Oqcs9N1Sj5flNyOwX75ENkiAAAECBAgQIECAAAECBAgQuJeA4LSu3ilrgf1jDTt61HWhlb4qILDXDwQIECBAgAABAgQIECBAgAABAksJpELkp0MK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ECBAgAABAgQIECBAgAABAlsICOy3KGP7Qwjs25fQAQgQIECAAAECBAgQIECAAAECBAgQeKmAwP6lgq6fISCwn6FoDgIECBAgQIAAAQIECBAgQIAAAQIEWgsI7FuXb5vNC+y3KaWDECBAgAABAgQIECBAgAABAgQIECBwVkBgf1bOdTMFBPYzNc1FgAABAgQIECBAgAABAgQIECBAgEBLAYF9y7Jtt2mB/XYldSACBAgQIECAAAECBAgQIECAAAECBI4KCOyPihmfEBDYJ1TNSYAAAQIECBAgQIAAAQIECBAgQIBAKwGBfatybbtZgf22pXUwAgQIECBAgAABAgQIECBAgAABAgRGBQT2o1LGJQUE9kldcxMgQIAAAQIECBAgQIAAAQIECBAg0EJAYN+iTNtvUmC/fYkdkAABAgQIECBAgAABAgQIECBAgACBdwkI7N8l5P9fISCwr1C2BgECBAgQIECAAAECBAgQIECAAAECSwsI7Jcuz202J7C/TakdlAABAgQIECBAgAABAgQIECBAgACB5wQE9npjBQGB/QpVsAcCBAgQIECAAAECBAgQIECAAAECBC4VENhfym/x/yEgsNcKBAgQIECAAAECBAgQIECAAAECBAjcXkBgf/sWWAJAYL9EGWyCAAECBAgQIECAAAECBAgQIECAAIErBQT2V+pb+0sBgb1eIECAAAECBAgQIECAAAECBAgQIEDg9gIC+9u3wBIAAvslymATBAgQIECAAAECBAgQIECAAAECBAhcKSCwv1Lf2l8KCOz1AgECBAgQIECAAAECBAgQIECAAAECUwU6ht8d9zy1aCZbQkBgv0QZbIIAAQIECBAgQIAAAQIECBAgQIDAPgIdw++Oe96nY5zkSwGBvV4gQIAAAQIECBAgQIAAAQIECBAgQGCqQMfwu+OepxbNZEsICOyXKINNECBAgAABAgQIECBAgAABAgQIENhHoGP43XHP+3SMk3wpILDXCwQIECBAgAABAgQIECBAgAABAgQITBXoGH533PPUoplsCQGB/RJlsAkCBAgQIECAAAECBAgQIECAAAEC+wh0DL877nmfjnGSLwUE9nqBAAECBAgQIECAAAECBAgQIECAAIGpAh3D7457nlo0ky0hILBfogw2QYAAAQIECBAgQIAAAQIECBAgQGAfgY7hd8c979MxTvKlgMBeLxAgQIAAAQIECBAgQIAAAQIECBAgMFWgY/jdcc9Ti2ayJQQE9kuUwSYIECBAgAABAgQIECBAgAABAgQI7CPQMfzuuOd9OsZJvhQQ2OsFAgQIECBAgAABAgQIECBAgAABAgSmCnQMvzvueWrRTLaEgMB+iTLYBAECBAgQIECAAAECBAgQIECAAIF9BDqG3x33vE/HOMmXAgJ7vUCAAAECBAgQIECAAAECBAgQIECAwFSBjuF3xz1PLZrJlhAQ2C9RBpsgQIAAAQIECBAgQIAAAQIECBAgsI9Ax/C745736Rgn+VJAYK8XCBAgQIAAAQIECBAgQIAAAQIECBCYKtAx/O6456lFM9kSAgL7JcpgEwQIECBAgAABAgQIECBAgAABAgT2EegYfnfc8z4d4yRfCgjs9QIBAgQIECBAgAABAgQIECBAgAABAlMFOobfHfc8tWgmW0JAYL9EGWyCAAECBAgQIECAAAECBAgQIECAwD4CHcPvjnvep2Oc5EsBgb1eIECAAAECBAgQIECAAAECBAgQIEBgqkDH8LvjnqcWzWRLCAjslyiDTRAgQIAAAQIECBAgQIAAAQIECBDYR6Bj+N1xz/t0jJN8KSCw1wsECBAgQIAAAQIECBAgQIAAAQIECEwV6Bh+d9zz1KKZbAkBgf0SZbAJAgQIECBAgAABAgQIECBAgAABAvsIdAy/O+55n45xki8FBPZ6gQABAgQIECBAgMBiAsmPxcWOOrSdP/z506FxBhEgQIAAAQLHBTq+d3g3OF5nV6wr8Po9KLBft1Z2RoAAAQIECBAgcFOBjh/OyVL5KE/qmpsAAQIE7i7Q8b3Du8Hdu3av8wvs96qn0xAgQIAAAQIECGwo0PHDOVkGH+VJXXMTIECAwN0FOr53eDe4e9fudX6B/V71dBoCBAgQIECAAIENBTp+OCfL4KM8qWtuAgQIELi7QMf3Du8Gd+/avc4vsN+rnk5DgAABAgQIECCwoUDHD+dkGXyUJ3XNTYAAAQJ3F+j43uHd4O5du9f5BfZ71dNpCBAgQIAAAQIENhTo+OGcLIOP8qSuuQkQIEDg7gId3zu8G9y9a/c6v8B+r3o6DQECBAgQIECAwIYCHT+ck2XwUZ7UNTcBAgQI3F2g43uHd4O7d+1e5xfY71VPpyFAgAABAgQIENhQoOOHc7IMPsqTuuYmQIAAgbsLdHzv8G5w967d6/wC+73q6TQECBAgQIAAAQIbCnT8cE6WwUd5UtfcBAgQIHB3gY7vHd4N7t61e51fYL9XPZ2GAAECBAgQIEBgQ4GOH87JMvgoT+qamwABAgTuLtDxvcO7wd27dq/zC+z3qqfTECBAgAABAgQIbCjQ8cM5WQYf5UldcxMgQIDA3QU6vnd4N7h71+51foH9XvV0GgIECBAgQIAAgQ0FOn44J8vgozypa24CBAgQuLtAx/cO7wZ379q9zi+w36ueTkOAAAECBAgQILChQMcP52QZfJQndc1NgAABAncX6Pje4d3g7l271/kF9nvV02kIECBAgAABAgQ2FOj44Zwsg4/ypK65CRAgQODuAh3fO7wb3L1r9zq/wH6vejoNAQIECBAgQIDAhgIdP5yTZfBRntQ1NwECBAjcXaDje4d3g7t37V7nF9jvVU+nIUCAAAECBAgQ2FCg44dzsgw+ypO65iZAgACBuwt0fO/wbnD3rt3r/AL7verpNAQIECBAgAABAhsKdPxwTpbBR3lS19wECBAgcHeBju8d3g3u3rV7nV9gv1c9nYYAAQIECBAgQGBDgY4fzsky+ChP6pqbAAECBO4u0PG9w7vB3bt2r/ML7Peqp9MQIECAAAECBAhsKNDxwzlZBh/lSV1zEyBAgMDdBTq+d3g3uHvX7nV+gf1e9XQaAgQIECBAgACBDQU6fjgny+CjPKlrbgIECBC4u0DH9w7vBnfv2r3OL7Dfq55OQ4AAAQIECBAgsKFAxw/nZBl8lCd1zU2AAAECdxfo+N7h3eDuXbvX+QX2e9XTaQgQIECAAAECBDYU6PjhnCyDj/KkrrkJECBA4O4CHd87vBvcvWv3Or/Afq96Og0BAgQIECBAgMCGAh0/nJNl8FGe1DU3AQIECNxdoON7h3eDu3ftXucX2O9VT6chQIAAAQIECBB4h0DqI/SDH3wYs/93P/nvsbn/5dd/GZn7s99/Epk3OamP/aSuuQkQIECAAAECBM4IvPf997/7+ZkLXUOAAAECBAgQIECgg4DA/rFKAvtXHgL7DnewPRIgQIAAAQIE7iUgsL9XvZ2WAAECBAgQIHA7AYG9wP65phfY3+5x4MAECBAgQIAAgeUFBPbLl8gGCRAgQIAAAQIEXiIgsBfYC+xfcge5lgABAgQIECBAoFJAYF+pbS0CBAgQIECAAIFyAYG9wF5gX37bWZAAAQIECBAgQOCkgMD+JJzLCBAgQIAAAQIEeggI7AX2Avse96pdEiBAgAABAgQIfOMbAntdQIAAAQIECBAgsLWAwF5gL7Df+hZ3OAIECBAgQIDAVgIC+63K6TAECBAgQIAAAQKvCwjsBfYCe88FAgQIECBAgACBLgIC+y6Vsk8CBAgQIECAAIFTAgJ7gb3A/tSt4yICBAgQIECAAIELBAT2F6BbkgABAgQIECBAoE5AYC+wF9jX3W9WIkCAAAECBAgQeJmAwP5lfq4mQIAAAQIECBBYXEBgL7AX2C9+k9oeAQIECBAgQIDAvwkI7DUDAQIECBAgQIDA1gICe4G9wH7rW9zhCBAgQIAAAQJbCQjstyqnwxAgQIAAAQIECLwuILAX2AvsPRcIECBAgAABAgS6CAjsu1TKPgkQIECAAAECBE4JCOwF9gL7U7eOiwgQIECAAAECBC4QENhfgG5JAgQIECBAgACBOgGBvcBeYF93v1mJAAECBAgQIEDgZQIC+5f5uZoAAQIECBAgQGBxAYG9wF5gv/hNansECBAgQIAAAQL/JiCw1wwECBAgQIAAAQJbCwjsBfYC+61vcYcjQIAAAQIECGwlILDfqpwOQ4AAAQIECBAg8LqAwF5gL7D3XCBAgAABAgQIEOgiILDvUin7JECAAAECBAgQOCUgsBfYC+xP3TouIkCAAAECBAgQuEBAYH8BuiUJECBAgAABAgTqBAT2AnuBfd39ZiUCBAgQIECAAIGXCQjsX+bnagIECBAgQIAAgcUFBPYCe4H94jep7REgQIAAAQIECPybgMBeMxAgQIAAAQIECGwtILAX2Avst77FHY4AAQIECBAgsJWAwH6rcjoMAQIECBAgQIDA6wICe4G9wN5zgQABAgQIECBAoIuAwL5LpeyTAAECBAgQILCxQCpU70r2s4++Fdv6bz/4U2zu1MQ/+uzbkal/8fE/ReZ9mvQPf/40NreJCRAgQGBdgdQ7jd+VdWtuZ2sJpO7BylMK7Cu1rUWAAAECBAgQIPC1Aju8WM8srcD+UVNgP7O7zEWAAAECSYHUO43APlk1c+8kkLoHK40E9pXa1iJAgAABAgQIEBDYD/SAwF5gP9AmhhAgQIDAggKpsFBgv2CxbWlJgdQ9WHlYgX2ltrUIECBAgAABAgQE9gM9ILAX2A+0iSEECBAgsKBAKiwU2C9YbFtaUiB1D1YeVmBfqW0tAgQIECBAgAABgf1ADwjsBfYDbWIIAQIECCwokAoLBfYLFtuWlhRI3YOVhxXYV2pbiwABAgQIECBAQGA/0AMCe4H9QJsYQoAAAQILCqTCQoH9gsW2pSUFUvdg5WEF9pXa1iJAgAABAgQIEBDYD/SAwF5gP0VEF8wAACAASURBVNAmhhAgQIDAggKpsFBgv2CxbWlJgdQ9WHlYgX2ltrUIECBAgAABAgQE9gM9ILAX2A+0iSEECBAgsKBAKiwU2C9YbFtaUiB1D1YeVmBfqW0tAgQIECBAgAABgf1ADwjsBfYDbWIIAQIECCwokAoLBfYLFtuWlhRI3YOVhxXYV2pbiwABAgQIECBAQGA/0AMCe4H9QJsYQoAAAQILCqTCQoH9gsW2pSUFUvdg5WEF9pXa1iJAgAABAgQIEBDYD/SAwF5gP9AmhhAgQIDAggKpsFBgv2CxbWlJgdQ9WHlYgX2ltrUIECBAgAABAgQE9gM9ILAX2A+0iSEECBAgsKBAKiwU2C9YbFtaUiB1D1YeVmBfqW0tAgQIECBAgAABgf1ADwjsBfYDbWIIAQIECCwokAoLBfYLFtuWlhRI3YOVhxXYV2pbiwABAgQIECBAQGA/0AMCe4H9QJsYQoAAAQILCqTCQoH9gsW2pSUFUvdg5WEF9pXa1iJAgAABAgQIEBDYD/SAwF5gP9AmhhAgQIDAggKpsFBgv2CxbWlJgdQ9WHlYgX2ltrUIECBAgAABAgQE9gM9ILAX2A+0iSEECBAgsKBAKiwU2C9YbFtaUiB1D1YeVmBfqW0tAgQIECBAgAABgf1ADwjsBfYDbWIIAQIECCwokAoLBfYLFtuWlhRI3YOVhxXYV2pbiwABAgQIECBAQGA/0AMCe4H9QJsYQoAAAQILCqTCQoH9gsW2pSUFUvdg5WEF9pXa1iJAgAABAgQIEBDYD/SAwF5gP9AmhhAgQIDAggKpsFBgv2CxbWlJgdQ9WHlYgX2ltrUIECBAgAABAgQE9gM9ILAX2A+0iSEECBAgsKBAKiwU2C9YbFtaUiB1D1YeVmBfqW0tAgQIECBAgAABgf1ADwjsBfYDbWIIAQIECCwokAoLBfYLFtuWlhRI3YOVhxXYV2pbiwABAgQIECBAQGA/0AMCe4H9QJsYQoAAAQILCqTCQoH9gsW2pSUFUvdg5WEF9pXa1iJAgAABAgQINBfo+AKcDL9T5fztB39KTR2b90effTs2d2rij//4ndTU3/js959E5hbYRFhNSoAAAQIECBBYRkBgv0wpbIQAAQIECBAgsL6AwL6mRgL7GmeBfY2zVQgQIECAAAECBMYFBPbjVkYSIECAAAECBG4vILCvaQGBfY2zwL7G2SoECBAgQIAAAQLjAgL7cSsjCRAgQIAAAQK3FxDY17SAwL7GWWBf42wVAgQIECBAgACBcQGB/biVkQQIECBAgACB2wsI7GtaQGBf4yywr3G2CgECBAgQIECAwLiAwH7cykgCBAgQIECAwO0FBPY1LSCwr3EW2Nc4W4UAAQIECBAgQGBcQGA/bmUkAQIECBAgQOD2AgL7mhYQ2Nc4C+xrnK1CgAABAgQIECAwLiCwH7cykgABAgQIECBwewGBfU0LCOxrnAX2Nc5WIUCAAAECBAgQGBcQ2I9bGUmAAAECBAgQuL2AwL6mBQT2Nc4C+xpnqxAgQIAAAQIECIwLCOzHrYwkQIAAAQIECNxeQGBf0wIC+xpngX2Ns1UIECBAgAABAgTGBQT241ZGEiBAgAABAgRuLyCwr2kBgX2Ns8C+xtkqBAgQIECAAAEC4wIC+3ErIwkQIECAAAECtxcQ2Ne0gMC+xllgX+NsFQIECBAgQIAAgXEBgf24lZEECBAgQIAAgdsLCOxrWkBgX+MssK9xtgoBAgQIECBAgMC4gMB+3MpIAgQIECBAgMDtBQT2NS0gsK9xFtjXOFuFAAECBAgQIEBgXEBgP25lJAECBAgQIEDg9gIC+5oWENjXOAvsa5ytQoAAAQIECBAgMC4gsB+3MpIAAQIECBAgcHsBgX1NCwjsa5wF9jXOViFAgAABAgQIEBgXENiPWxlJgAABAgQIELi9gMC+pgUE9jXOAvsaZ6sQIECAAAECBAiMCwjsx62MJECAAAECBAjcXkBgX9MCAvsaZ4F9jbNVCBAgQIAAAQIExgUE9uNWRhIgQIAAAQIEbi8gsK9pAYF9jbPAvsbZKgQIECBAgAABAuMCAvtxKyMJECBAgAABArcXENjXtIDAvsZZYF/jbBUCBAgQIECAAIFxAYH9uJWRBAgQIECAAIHbCwjsa1pAYF/jLLCvcbYKAQIECBAgQIDAuIDAftzKSAIECBAgQIDA7QUE9jUtILCvcRbY1zhbhQABAgQIECBAYFxAYD9uZSQBAgQIECBA4PYCAvuaFhDY1zgL7GucrUKAAAECBAgQIDAuILAftzKSAAECBAgQINBCoGOo/sEPPozZfvS9TyNzJ0P1f/n1X0b2nJz03/3kvyenj8z9o8++HZn3adLUPwZ89vtPYnv+w58z90pswyYmQIAAAQIECGwg8Pr3m8B+g6I6AgECBAgQIEDgqwIC+8d+ENjX3B8C+0dngX1N31mFAAECBAgQINBdQGDfvYL2T4AAAQIECBB4h4DAXmB/xU0isBfYX9F31iRAgAABAgQIdBcQ2HevoP0TIECAAAECBAT2h3rAX9gf4jo9WGAvsD/dPC4kQIAAAQIECNxYQGB/4+I7OgECBAgQIHAPAX9h/1hngX1N3wvsBfY1nWYVAgQIECBAgMBeAgL7verpNAQIECBAgACBNwQE9gL7K24Lgb3A/oq+syYBAgQIECBAoLuAwL57Be2fAAECBAgQIPAOAYG9wP6Km0RgL7C/ou+sSYAAAQIECBDoLiCw715B+ydAgAABAgQICOwP9YD/JM4hrtODBfYC+9PN40ICBAgQIECAwI0FBPY3Lr6jEyBAgAABAvcQ8Bf2j3UW2Nf0vcBeYF/TaVYhQIAAAQIECOwlILDfq55OQ4AAAQIECBB4Q0BgL7C/4rYQ2Avsr+g7axIgQIAAAQIEugsI7LtX0P4JECBAgAABAu8QENgL7K+4SQT2Avsr+s6aBAgQIECAAIHuAgL77hW0fwIECBAgQICAwP5QD/hP4hziOj1YYC+wP908LiRAgAABAgQI3FhAYH/j4js6AQIECBAgcA8Bf2H/WGeBfU3fC+wF9jWdZhUCBAgQIECAwF4CAvu96uk0BAgQIECAAIE3BAT2AvsrbguBvcD+ir6zJgECBAgQIECgu4DAvnsF7Z8AAQIECBAg8A4Bgb3A/oqbRGAvsL+i76xJgAABAgQIEOguILDvXkH7J0CAAAECBAgI7A/1gP8kziGu04MF9gL7083jQgIECBAgQIDAjQUE9jcuvqMTIECAAAEC9xDwF/aPdRbY1/S9wF5gX9NpViFAgAABAgQI7CUgsN+rnk5DgAABAgQIEHhDQGAvsL/ithDYC+yv6DtrEiBAgAABAgS6Cwjsu1fQ/gkQIECAAAEC7xAQ2Avsr7hJBPYC+yv6zpoECBAgQIAAge4CAvvuFbR/AgQIECBAgIDA/lAP+E/iHOI6PVhgL7A/3TwuJECAAAECBAjcWEBgf+PiOzoBAgQIECBwDwF/Yf9YZ4F9Td8L7AX2NZ1mFQIECBAgQIDAXgIC+73q6TQECBAgQIAAgTcEBPYC+ytuC4G9wP6KvrMmAQIECBAgQKC7wBaBffIj9A9//rR7je2fAAECBAgQmCiQfO+YuE1TbSbwwQ8+bHeijoF9O+Twhn/3i2+GV5g/ve+3+aZmJECAAAECBK4VeO/773/382u3cHz15IezF77j9XAFAQIECBDYWSD53rGzm7O9TEBg/zI/V58TENifc3MVAQIECBAgQGCmgMD+NU2B/cz2MhcBAgQIEOgvILDvX8OOJxDYd6xa/z0L7PvX0AkIECBAgACB/gICe4F9/y52AgIECBAgEBQQ2AdxTf2sgMBec1whILC/Qt2aBAgQIECAAIFHAYG9wN49QYAAAQIECLxFQGCvPa4QENhfoW5Ngb0eIECAAAECBAhcLyCwF9hf34V2QIAAAQIEFhYQ2C9cnI23JrDfuLgLH01gv3BxbI0AAQIECBC4jYDAXmB/m2Z3UAIECBAgcEZAYH9GzTUvFRDYv1TQ9WcEBPZn1FxDgAABAgQIEJgrILAX2M/tKLMRIECAAIHNBAT2mxW0yXEE9k0Ktdk2BfabFdRxCBAgQIAAgZYCAnuBfcvGtWkCBAgQIFAlILCvkrbOVwUE9vrhCgGB/RXq1iRAgAABAgQIPAoI7AX27gkCBAgQIEDgLQICe+1xhYDA/gp1awrs9QABAgQIECBA4HoBgb3A/voutAMCBAgQILCwgMB+4eJsvDWB/cbFXfhoAvuFi2NrBAgQIECAwG0EBPYC+9s0u4MSIECAAIEzAgL7M2queamAwP6lgq4/IyCwP6PmGgIECBAgQIDAXAGBvcB+bkeZjQABAgQIbCYgsN+soE2OI7BvUqjNtimw36ygjkOAAAECBAi0FBDYC+xbNq5NEyBAgACBKgGBfZW0db4qILDXD1cICOyvULcmAQIECBAgQOBRQGAvsHdPECBAgAABAm8RENhrjysEBPZXqFtTYK8HCBAgQIAAAQLXCwjsBfbXd6EdECBAgACBhQUE9gsXZ+OtCew3Lu7CRxPYL1wcWyNAgAABAgRuIyCwF9jfptkdlAABAgQInBEQ2J9Rc81LBQT2LxV0/RkBgf0ZNdcQIECAAAECBOYKCOwF9nM7ymwECBAgQGAzAYH9ZgVtchyBfZNCbbZNgf1mBXUcAgQIECBAoKWAwF5g37JxbZoAAQIECFQJCOyrpK3zVQGBvX64QkBgf4W6NQkQIECAAAECjwICe4G9e4IAAQIECBB4i4DAXntcISCwv0LdmgJ7PUCAAAECBAgQuF5AYC+wv74L7YAAAQIECCwsILBfuDgbb01gv3FxFz6awH7h4tgaAQIECBAgcBsBgb3A/jbN7qAECBAgQOCMgMD+jJprXiogsH+poOvPCAjsz6i5hgABAgQIECAwV0BgL7Cf21FmI0CAAAECmwkI7DcraJPjCOybFGqzbQrsNyuo4xAgQIAAAQItBVoG9h2lO37s/+HPn3aktmcCBAgQWFig4+/hwpyXbC31ftCxN5Kh+kff8x52SYNPXPS3H/xp4myvpvrRZ9+OzJue9OM/fie9xPT5P/v9J9Pn7Dph6tnf1cO+CRAgQOCeAqlvltd/ZwX2Rf2VKmhy+17KkrrmJkCAwD0FOv4e3rNSz5869X7QsTcE9u6OtwkI7B91BPa975fUs7+3it0TIECAwN0EUt8sAvuLOilV0ORxvJQldc1NgACBewp0/D28Z6UE9iN1F9iPKN13jMBeYL9T9/s23KmazkKAAAECZwVS37MC+7MVeeF1qYK+cFtvvdxLWVLX3AQIELinQMffw3tWSmA/UneB/YjSfccI7AX2O3W/b8OdquksBAgQIHBWIPU9K7A/W5EXXpcq6Au3JbBPApqbAAECBN4Q6Ph7qIyPAqnQpmNvCOzdHW8TENgL7He6Q1LP/p2MnIUAAQIE9hdIfbMI7C/qnVRBk8fxUpbUNTcBAgTuKdDx9/CelXr+1Kn3g469IbB3dwjsx3vAf8N+3GrFkaln/4pntScCBAgQIPCcQOqbRWB/Uc+lCpo8jpeypK65CRAgcE+Bjr+H96yUwH6k7gL7EaX7jvEX9o+1F9j3vhd8G/aun90TIECAwByB1PeswH5OfQ7Pkiro4Y0cuMBL2QEsQwkQIEBgSKDj7+HQwW40KPV+0LE3BPY3avwTRxXYC+xPtM2yl6Se/cse2MYIECBAgMDXCKS+WQT2F7VbqqDJ43gpS+qamwABAvcU6Ph7eM9KPX/q1PtBx94Q2Ls73iYgsBfY73SHpJ79Oxk5CwECBAjsL5D6ZhHYX9Q7qYImj+OlLKlrbgIECNxToOPv4T0rJbAfqbvAfkTpvmME9gL7nbrft+FO1XQWAgQIEDgrkPqeFdifrcgLr0sV9IXbeuvlXsqSuuYmQIDAPQU6/h7es1IC+5G6C+xHlO47RmAvsN+p+30b7lRNZyFAgACBswKp71mB/dmKvPC6VEFfuC2BfRLQ3AQIECDwhkDH30NlfBRIhTYde0Ng7+54m4DAXmC/0x2SevbvZOQsBAgQILC/QOqbRWB/Ue+kCpo8jpeypK65CRAgcE+Bjr+H96zU86dOvR907A2BvbtDYD/eAx//8TvjgxcZ+dnvP1lkJ9dvI/Xsv/5kdkCAAAECBMYFUt8sAvvxGkwdmSro1E2+NpmXsqSuuQkQIHBPgY6/h/eslMB+pO4C+xGl+47xF/aPtRfY974XfBv2rp/dEyBAgMAcgdT3rMB+Tn0Oz5Iq6OGNHLjAS9kBLEMJECBAYEig4+/h0MFuNCj1ftCxNwT2N2r8E0cV2AvsT7TNspeknv3LHtjGCBAgQIDA1wikvlkE9he1W6qgyeN4KUvqmpsAAQL3FOj4e3jPSj1/6tT7QcfeENi7O94mILAX2O90h6Se/TsZOQsBAgQI7C+Q+mYR2F/UO6mCJo/jpSypa24CBAjcU6Dj7+E9KyWwH6m7wH5E6b5jBPYC+52637fhTtV0FgIECBA4K5D6nhXYn63IC69LFfSF23rr5V7KkrrmJkCAwD0FOv4e3rNSAvuRugvsR5TuO0ZgL7Dfqft9G+5UTWchQIAAgbMCqe9Zgf3ZirzwulRBX7gtgX0S0NwECBAg8IZAx99DZXwUSIU2HXtDYO/ueJuAwF5gv9Mdknr272TkLAQIECCwv0Dqm0Vgf1HvpAqaPI6XsqSuuQkQIHBPgY6/h/es1POnTr0fdOwNgb27Q2A/3gMf//E744MXGfnZ7z9ZZCfXbyP17L/+ZHZAgAABAgTGBVLfLAL78RpMHZkq6NRNvjaZl7KkrrkJECBwT4GOv4f3rJTAfqTuAvsRpfuO8Rf2j7UX2Pe+F3wb9q6f3RMgQIDAHIHU96zAfk59Ds+SKujhjRy4wEvZASxDCRAgQGBIoOPv4dDBbjQo9X7QsTcE9jdq/BNHFdgL7E+0zbKXpJ79yx7YxggQIECAwNcIpL5ZBPbajQABAgQIELhMIPWCkzyQkCKp+2rujr2RlPGPAUldcxMgcFSg4/9C4umMv/rNL48e1XgCBAgQIHC5wHvff/+7n1++CxsgQIAAAQIEbiHQMZQV2Ne0ZsfeSMoI7JO65iZA4KiAwP6omPEECBAgQOC8gMD+vJ0rCRAgQIAAgYMCHUNZgf3BIp8c3rE3Th516DKB/RCTQQQIFAkI7IugLUOAAAECBL4QENhrAwIECBAgQKBMoGMoK7CvaY+OvZGUEdgndc1NgMBRAYH9UTHjCRAgQIDAeQGB/Xk7VxIgQIAAAQIHBTqGsgL7g0U+Obxjb5w86tBlAvshJoMIECgSENgXQVuGAAECBAh8ISCw1wYECBAgQIBAmUDHUFZgX9MeHXsjKSOwT+qamwCBowIC+6NixhMgQIAAgfMCAvvzdq4kQIAAAQIEDgp0DGUF9geLfHJ4x944edShywT2Q0wGESBQJCCwL4K2DAECBAgQ+EJAYK8NCBAgQIAAgTKBjqGswL6mPTr2RlJGYJ/UNTcBAkcFBPZHxYwnQIAAAQLnBQT25+1cSYAAAQIECBwU6BjKCuwPFvnk8I69cfKoQ5cJ7IeYDCJAoEhAYF8EbRkCBAgQIPCFgMBeGxAgQIAAAQJlAh1DWYF9TXt07I2kjMA+qWtuAgSOCgjsj4oZT4AAAQIEzgsI7M/buZIAAQIECBA4KNAxlBXYHyzyyeEde+PkUYcuE9gPMRlEgECRgMC+CNoyBAgQIEDgCwGBvTYgQIAAAQIEygQ6hrIC+5r26NgbSRmBfVLX3AQIHBUQ2B8VM54AAQIECJwXENift3MlAQIECBAgcFCgYygrsD9Y5JPDO/bGyaMOXSawH2IyiACBIgGBfRG0ZQgQIECAwBcCAnttQIAAAQIECJQJdAxlBfY17dGxN5IyAvukrrkJEDgqILA/KmY8AQIECBA4LyCwP2/nSgIECBAgQOCgQMdQVmB/sMgnh3fsjZNHHbpMYD/EZBABAkUCAvsiaMsQIECAAIEvBAT22oAAAQIECBAoE+gYygrsa9qjY28kZQT2SV1zEyBwVEBgf1TMeAIECBAgcF5AYH/ezpUECBAgQIDAQYGOoazA/mCRTw7v2Bsnjzp0mcB+iMkgAgSKBAT2RdCWIUCAAAECXwgI7LUBAQIECBAgUCbQMZQV2Ne0R8feSMoI7JO65iZA4KiAwP6omPEECBAgQOC8gMD+vJ0rCRAgQIAAgYMCHUNZgf3BIp8c3rE3Th516DKB/RCTQQQIFAkI7IugLUOAAAECBL4QENhrAwIECBAgQKBMoGMoK7CvaY+OvZGUEdgndc1NgMBRAYH9UTHjCRAgQIDAeQGB/Xk7VxIgQIAAAQIHBTqGsgL7g0U+Obxjb5w86tBlAvshJoMIECgSENgXQVuGAAECBAh8ISCw1wYECBAgQIBAmUDHUFZgX9MeHXsjKSOwT+qamwCBowIC+6NixhMgQIAAgfMCAvvzdq4kQIAAAQIEDgp0DGUF9geLfHJ4x944edShywT2Q0wGESBQJCCwL4K2DAECBAgQ+EJAYK8NCGwskAw/BFgbN46jEQgKpJ5LnknBor02daqGdSeYt1IyVJ+3yzdn+uz3n0SmT3p89L1PI3s2KQEC1wv89oM/xTbxu198MzK3944Iq0kJECBA4H8ICOy1AoGNBZKhipfUjRvH0QgEBVLPJc+kYNEE9s/iJgPqZEUF9kldcxMgcFRAYH9UzHgCBAgQ2F1AYL97hZ3v1gKpYOwJVTh269ZyeAKnBVLPJc+k0yU5fGGqhoc3ssAFAvvHIiQ9/IX9Ag1vCwRCAgL7EKxpCRAgQKCtgMC+belsnMC7BZKhinDs3f5GECDwpkDqueSZVNdtqRrWnWDeSsmAet4u35zJX9gndc1NgMBRAYH9UTHjCRAgQGB3AYH97hV2vlsLJEMV4ditW8vhCZwWSD2XPJNOl+TwhakaHt7IAhcI7B+LkPTwF/YLNLwtEAgJCOxDsKYlQIAAgbYCAvu2pbNxAu8WSIYqwrF3+xtBgMCbAqnnkmdSXbelalh3gnkrJQPqebt8cyZ/YZ/UNTcBAkcFBPZHxYwnQIAAgd0FBPa7V9j5bi2QDFWEY7duLYcncFog9VzyTDpdksMXpmp4eCMLXCCwfyxC0sNf2C/Q8LZAICQgsA/BmpYAAQIE2goI7NuWzsYJvFsgGaoIx97tbwQBAm8KpJ5Lnkl13ZaqYd0J5q2UDKjn7fLNmfyFfVLX3AQIHBUQ2B8VM54AAQIEdhcQ2O9eYee7tUAyVBGO3bq1HJ7AaYHUc8kz6XRJDl+YquHhjSxwgcD+sQhJD39hv0DD2wKBkIDAPgRrWgIECBBoKyCwb1s6GyfwboFkqCIce7e/EQQIvCmQei55JtV1W6qGdSeYt1IyoJ63yzdn8hf2SV1zEyBwVEBgf1TMeAIECBDYXUBgv3uFne/WAslQRTh269ZyeAKnBVLPJc+k0yU5fGGqhoc3ssAFAvvHIiQ9/IX9Ag1vCwRCAgL7EKxpCRAgQKCtgMC+belsnMC7BZKhinDs3f5GECDwpkDqueSZVNdtqRrWnWDeSsmAet4u35zJX9gndc1NgMBRAYH9UTHjCRAgQGB3AYH97hV2vlsLJEMV4ditW8vhCZwWSD2XPJNOl+TwhakaHt7IAhcI7B+LkPTwF/YLNLwtEAgJCOxDsKYlQIAAgbYCAvu2pbNxAu8WSIYqwrF3+xtBgMCbAqnnkmdSXbelalh3gnkrJQPqebt8cyZ/YZ/UNTcBAkcFBPZHxYwnQIAAgd0FBPa7V9j5bi2QDFWEY7duLYcncFog9VzyTDpdksMXpmp4eCMLXCCwfyxC0sNf2C/Q8LZAICQgsA/BmpYAAQIE2goI7NuWzsYJvFsgGaoIx97tbwQBAm8KpJ5Lnkl13ZaqYd0J5q2UDKjn7fLNmfyFfVLX3AQIHBUQ2B8VM54AAQIEdhcQ2O9eYee7tUAyVBGO3bq1HJ7AaYHUc8kz6XRJDl+YquHhjSxwgcD+sQhJD39hv0DD2wKBkIDAPgRrWgIECBBoKyCwb1s6GyfwboFkqCIce7e/EQQIvCmQei55JtV1W6qGdSeYt1IyoJ63yzdn8hf2SV1zEyBwVEBgf1TMeAIECBDYXUBgv3uFne/WAslQRTh269ZyeAKnBVLPJc+k0yU5fGGqhoc3ssAFAvvHIiQ9/IX9Ag1vCwRCAgL7EKxpCRAgQKCtgMC+belsnMC7BZKhinDs3f5GECDwpkDqueSZVNdtqRrWnWDeSsmAet4u35zJX9gndc1NgMBRAYH9UTHjCRAgQGB3AYH97hV2vlsLJEMV4ditW8vhCZwWSD2XPJNOl+TwhakaHt7IAhcI7B+LkPTwF/YLNLwtEAgJCOxDsKYlQIAAgbYCAvu2pbNxAu8WSIYqwrF3+xtBgMCbAqnnkmdSXbelalh3gnkrJQPqebt8cyZ/YZ/UNTcBAkcFBPZHxYwnQIAAgd0FBPa7V9j5bi2QDFWEY7duLYcncFog9VzyTDpdksMXpmp4eCMLXCCwfyxC0sNf2C/Q8LZAICQgsA/BmpYAAQIE2goI7NuWzsYJECBAgEA/gY5hr38MeOyzVA2TYW/HvyhP7fmpminr5J5/9tG32j3wfvqTH7bbsw33F/ivv/5v/Q8x8QSpfwz40WffnrjLx6l+8fE/Reb+i5/9a2Tep0n/4e//MTa3iXsLpN4bn1S8o/fuDbt/u4DAXocQIECAAAECZQLJl/bUIXwMCOyf661U8P20XjL8Tu07uWeBfeoJZ97dBAT2jxUV2L/yENjvdrf3OE/y3d87eo8esMtzAgL7c26uIkCAAAECBE4IJF/aT2xn6BIfAwJ7gf3QrRL9RwaB/VgNjCIgsBfYP3cXCOw9H64QSL77e0e/oqLWrBIQ2FdJW4cAAQIECBD4RvKlPcXr3YlLMAAAIABJREFUY0BgL7Afu7v8hf2jk/8kzljfGDVXQGAvsBfYz72nzPYygeS7v3f0l9XG1WsLCOzXro/dESBAgACBrQSSL+0pKB8DAnuB/djdJbAX2I91ilFJAYG9wF5gn7zDzH1UIPnu7x39aDWM7yQgsO9ULXslQIAAAQLNBZIv7SkaHwMCe4H92N0lsBfYj3WKUUkBgb3AXmCfvMPMfVQg+e7vHf1oNYzvJCCw71QteyVAgAABAs0Fki/tKRofAwJ7gf3Y3SWwF9iPdYpRSQGBvcBeYJ+8w8x9VCD57u8d/Wg1jO8kILDvVC17JUCAAAECzQWSL+0pGh8DAnuB/djdJbAX2I91ilFJAYG9wF5gn7zDzH1UIPnu7x39aDWM7yQgsO9ULXslQIAAAQLNBZIv7SkaHwMCe4H92N0lsBfYj3WKUUkBgb3AXmCfvMPMfVQg+e7vHf1oNYzvJCCw71QteyVAgAABAs0Fki/tKRofAwJ7gf3Y3SWwF9iPdYpRSQGBvcBeYJ+8w8x9VCD57u8d/Wg1jO8kILDvVC17JUCAAAECzQWSL+0pGh8DAnuB/djdJbAX2I91ilFJAYG9wF5gn7zDzH1UIPnu7x39aDWM7yQgsO9ULXslQIAAAQLNBZIv7SkaHwMCe4H92N0lsBfYj3WKUUkBgb3AXmCfvMPMfVQg+e7vHf1oNYzvJCCw71QteyVAgAABAs0Fki/tKRofAwJ7gf3Y3SWwF9iPdYpRSQGBvcBeYJ+8w8x9VCD57u8d/Wg1jO8kILDvVC17JUCAAAECzQWSL+0pGh8DAnuB/djdJbAX2I91ilFJAYG9wF5gn7zDzH1UIPnu7x39aDWM7yQgsO9ULXslQIAAAQLNBZIv7SkaHwMCe4H92N0lsBfYj3WKUUkBgb3AXmCfvMPMfVQg+e7vHf1oNYzvJCCw71QteyVAgAABAs0Fki/tKRofAwJ7gf3Y3SWwF9iPdYpRSQGBvcBeYJ+8w8x9VCD57u8d/Wg1jO8kILDvVC17JUCAAAECzQWSL+0pGh8DAnuB/djdJbAX2I91ilFJAYG9wF5gn7zDzH1UIPnu7x39aDWM7yQgsO9ULXslQIAAAQLNBZIv7SkaHwMCe4H92N0lsBfYj3WKUUkBgb3AXmCfvMPMfVQg+e7vHf1oNYzvJCCw71QteyVAgAABAs0Fki/tKRofAwJ7gf3Y3SWwF9iPdYpRSQGBvcBeYJ+8w8x9VCD57u8d/Wg1jO8kILDvVC17JUCAAAECzQWSL+0pGh8DAnuB/djdJbAX2I91ilFJAYG9wF5gn7zDzH1UIPnu7x39aDWM7yQgsO9ULXslQIAAAQLNBZIv7SkaHwMCe4H92N0lsBfYj3WKUUkBgb3AXmCfvMPMfVQg+e7vHf1oNYzvJCCw71QteyVAgAABAs0Fki/tKRofAwJ7gf3Y3SWwF9iPdYpRSQGBvcBeYJ+8w8x9VCD57u8d/Wg1jO8kILDvVC17JUCAAAECBQLJF+uC7bdZ4mcffavNXr+60d9+8KfIvv/l138Zmfdp0l/95peRuf/qx38dmfdp0o++92ls7tTEH//xO6mpYx4//ckPY3s2MYHnBITqeuMKgdTv99NZ/uHv//GKI1mzgUDH7wr/ENCgsTbc4uv3isB+wyI7EgECBAgQeIlAxxfrl5z3qmsF9o/yAvtHD4F9jYfA/qon4L3XFdjfu/5XnV5gf5X8vdft+F0hsL93z151eoH9VfLWJUCAAAECTQQ6vlg3oX3YpsBeYP+2vhXYC+w7PtfseUxAYD/mZNRcAYH9XE+zjQl0/K4Q2I/V1qi5AgL7uZ5mI0CAAAEC2wl0fLHuWASBvcBeYD9+56b+AcNf2I/XwMh5AgL7eZZmGhcQ2I9bGTlPoON3hcB+Xv3NNC4gsB+3MpIAAQIECNxSoOOLdcdCCewF9gL78TtXYD9uZeT6AgL79Wu04w4F9jtWdf0zdfyuENiv31c77lBgv2NVnYkAAQIECEwU6PhiPfH4ZVMJ7AX2Avvx201gP25l5PoCAvv1a7TjDgX2O1Z1/TN1/K4Q2K/fVzvuUGC/Y1WdiQABAgQITBTo+GI98fhlUwnsBfYC+/HbTWA/bmXk+gIC+/VrtOMOBfY7VnX9M3X8rhDYr99XO+5QYL9jVZ2JAAECBAhMFOj4Yj3x+GVTCewF9gL78dtNYD9uZeT6AgL79Wu04w4F9jtWdf0zdfyuENiv31c77lBgv2NVnYkAAQIECEwU6PhiPfH4ZVMJ7AX2Avvx201gP25l5PoCAvv1a7TjDgX2O1Z1/TN1/K4Q2K/fVzvuUGC/Y1WdiQABAgQITBTo+GI98fhlUwnsBfYC+/HbTWA/bmXk+gIC+/VrtOMOBfY7VnX9M3X8rhDYr99XO+5QYL9jVZ2JAAECBAhMFOj4Yj3x+GVTCewF9gL78dtNYD9uZeT6AgL79Wu04w4F9jtWdf0zdfyuENiv31c77lBgv2NVnYkAAQIECEwU6PhiPfH4ZVMJ7AX2Avvx201gP25l5PoCAvv1a7TjDgX2O1Z1/TN1/K4Q2K/fVzvuUGC/Y1WdiQABAgQITBTo+GI98fhlUwnsBfYC+/HbTWA/bmXk+gIC+/VrtOMOBfY7VnX9M3X8rhDYr99XO+5QYL9jVZ2JAAECBAhMFOj4Yj3x+GVTCewF9gL78dtNYD9uZeT6AgL79Wu04w4F9jtWdf0zdfyuENiv31c77lBgv2NVnYkAAQIECEwU6PhiPfH4ZVMJ7AX2Avvx201gP25l5PoCAvv1a7TjDgX2O1Z1/TN1/K4Q2K/fVzvuUGC/Y1WdiQABAgQITBTo+GI98fhlUwnsBfYC+/HbTWA/bmXk+gIC+/VrtOMOBfY7VnX9M3X8rhDYr99XO+5QYL9jVZ2JAAECBAhMFOj4Yj3x+GVTCewF9gL78dtNYD9uZeT6AgL79Wu04w4F9jtWdf0zdfyuENiv31c77lBgv2NVnYkAAQIECEwU6PhiPfH4ZVMJ7AX2Avvx201gP25l5PoCAvv1a7TjDgX2O1Z1/TN1/K4Q2K/fVzvuUGC/Y1WdiQABAgQITBTo+GI98fhlUwnsBfYC+/HbTWA/bmXk+gIC+/VrtOMOBfY7VnX9M3X8rhDYr99XO+5QYL9jVZ2JAAECBAhMFOj4Yj3x+GVTCewF9gL78dtNYD9uZeT6AgL79Wu04w4F9jtWdf0zdfyuENiv31c77lBgv2NVnYkAAQIECEwU6PhiPfH4ZVMJ7AX2Avvx201gP25l5PoCAvv1a7TjDgX2O1Z1/TN1/K4Q2K/fVzvuUGC/Y1WdiQABAgQITBTo+GI98fhlUwnsBfYC+/HbTWA/bmXk+gIC+/VrtOMOBfY7VnX9M3X8rhDYr99XO+5QYL9jVZ2JAAECBAhMFOj4Yj3x+GVTCewF9gL78dtNYD9uZeT6AgL79Wu04w4F9jtWdf0zdfyuENiv31c77lBgv2NVG54p+dD2cG3YELZMYGOB5PMuFfj+p//8SawiKY8PfvBhbM+poDC2YRMTeIdA6h7/u7/J3Ycdi/rTn/yw47bt+SsC/+Vf/peIx/uf/Dwy79OkH//xO7G5UxP7nU3JPs6bDOx/94tvRg7h2z7CalIChwRS329Pm3CPP1+K977//nc/P1QpgwlMEHDDT0A0BQECLQSSzzuB/asWENi3uB1schEBgX1NIQT2Nc7JVQT2Sd1Xcwvsa5wF9jXOViGwm0Dye1ZgL7Df7X5pfx43fPsSOgABAoMCyeedwF5gP9iGhhF4EBDY1zSEwL7GObmKwD6pK7Cv0X21isC+Wtx6BPYQSH7PCuwF9nvcJRudwg2/UTEdhQCBtwokn3cCe4G924/AGQGB/Rm149cI7I+brXaFwL6mIv7CvsZZYF/jbBUCuwkkv2cF9gL73e6X9udxw7cvoQMQIDAokHzeCewF9oNtaBiBBwGBfU1DCOxrnJOrCOyTuq/mFtjXOAvsa5ytQmA3geT3rMBeYL/b/dL+PG749iV0AAIEBgWSzzuBvcB+sA0NIyCwv6AHBPYXoE9eUmA/GfSZ6QT2Nc4C+xpnqxDYTSD5PSuwF9jvdr+0P48bvn0JHYAAgUGB5PNOYC+wH2xDwwgI7C/oAYH9BeiTlxTYTwYV2NeAPrOKwP5SfosTaCuQ/J4V2Avs294Yu27cDb9rZZ2LAIHXBZLPO4G9wN4dR+CMgP8kzhm149cI7I+brXaFwL6mIv7CvsZZYF/jbBUCuwkkv2cF9gL73e6X9udxw7cvoQMQIDAokHzeCewF9oNtaBiBBwGBfU1DCOxrnJOrCOyTuq/mFtjXOAvsa5ytQmA3geT3rMBeYL/b/dL+PG749iV0AAIEBgWSzzuBvcB+sA0NIyCwv6AHBPYXoE9eUmA/GfSZ6QT2Nc4C+xpnqxDYTSD5PSuwF9jvdr+0P48bvn0JHYAAgUGB5PNOYC+wH2xDwwgI7C/oAYH9BeiTlxTYTwYV2NeAPrOKwP5SfosTaCuQ/J4V2Avs294Yu27cDb9rZZ2LAIHXBZLPO4G9wN4dR+CMgP8kzhm149cI7I+brXaFwL6mIv7CvsZZYF/jbBUCuwkkv2cF9gL73e6X9udxw7cvoQMQIDAokHzeCewF9oNtaBiBBwGBfU1DCOxrnJOrCOyTuq/mFtjXOAvsa5ytQmA3geT3rMBeYL/b/dL+PG749iV0AAIEBgWSzzuBvcB+sA0NIyCwv6AHBPYXoE9eUmA/GfSZ6QT2Nc4C+xpnqxDYTSD5PSuwF9jvdr+0P48bvn0JHYAAgUGB5PNOYC+wH2xDwwgI7C/oAYH9BeiTlxTYTwYV2NeAPrOKwP5SfosTaCuQ/J4V2Avs294Yu27cDb9rZZ2LAIHXBZLPO4G9wN4dR+CMgP8kzhm149cI7I+brXaFwL6mIv7CvsZZYF/jbBUCuwkkv2cF9gL73e6X9udxw7cvoQMQIDAokHzeCewF9oNtaBiBBwGBfU1DCOxrnJOrCOyTuq/mFtjXOAvsa5ytQmA3geT3rMBeYL/b/dL+PG749iV0AAIEBgWSzzuBvcB+sA0NIyCwv6AHBPYXoE9eUmA/GfSZ6QT2Nc4C+xpnqxDYTSD5PSuwF9jvdr+0P48bvn0JHYAAgUGB5PNOYC+wH2xDwwgI7C/oAYH9BeiTlxTYTwYV2NeAPrOKwP5SfosTaCuQ/J4V2Avs294Yu27cDb9rZZ2LAIHXBZLPO4G9wN4dR+CMgP8kzhm149cI7I+brXaFwL6mIv7CvsZZYF/jbBUCuwkkv2cF9gL73e6X9udxw7cvoQMQIDAokHzeCewF9oNtaBiBBwGBfU1DCOxrnJOrCOyTuq/mFtjXOAvsa5ytQmA3geT3rMBeYL/b/dL+PG749iV0AAIEBgWSzzuBvcB+sA0NIyCwv6AHBPYXoE9eUmA/GfSZ6QT2Nc4C+xpnqxDYTSD5PSuwvyiwTxU1WdCOe97tYeA8BAgQ2Ekg9bvyZJT6PUzuOVXb1D9epPZrXgIEjgmk/lcBf/Xjvz62kQOjO4aQHf+RIRWqHyj14aHvf/Lzw9eMXvCLj/9pdKhxLxD44AcfvuDqay5NPpNS/xjwD3//j9dgWfXWAslvodT3260LtsnhX++7977//nc/T50t1eTJBu+451T9zEuAAAECLxdI/a4I7B9rI7B/ea+agcDKAgL7muoI7GucBfY1zslVBPaPugL7ZLeZu1qg4/dbtZH15gsI7N9hmroxk//IML9NzEiAAAECswRSvysCe4H9rB41D4EOAgL7mioJ7GucBfY1zslVBPYC+2R/mftagY7fb9eKWX2GgMBeYD+jj8xBgAABAoMCHV/4knseZDs8zF/YHyZzAYFWAgL7mnIJ7GucBfY1zslVBPYC+2R/mftageS3kD/mvba2K68usBfYr9yf9kaAAIHtBDq+8CX3nCqwwD4la14CawgI7GvqILCvcRbY1zgnVxHYC+yT/WXuawWS30IC+2tru/LqAnuB/cr9aW8ECBDYTqDjC19yz6kCC+xTsuYlsIaAwL6mDgL7GmeBfY1zchWBvcA+2V/mvlYg+S0ksL+2tiuvLrAX2K/cn/ZGgACB7QQ6vvAl95wqsMA+JWteAmsICOxr6iCwr3EW2Nc4J1cR2Avsk/1l7msFkt9CAvtra7vy6gJ7gf3K/WlvBAgQ2E6g4wtfcs+pAgvsU7LmJbCGgMC+pg4C+xpngX2Nc3IVgb3APtlf5r5WIPktJLC/trYrry6wF9iv3J/2RoAAge0EOr7wJfecKrDAPiVrXgJrCAjsa+ogsK9xFtjXOCdXEdgL7JP9Ze5rBZLfQgL7a2u78uoCe4H9yv1pbwQIENhOoOMLX3LPqQIL7FOy5iWwhoDAvqYOAvsaZ4F9jXNyFYG9wD7ZX+a+ViD5LSSwv7a2K68usBfYr9yf9kaAAIHtBDq+8CX3nCqwwD4la14CawgI7GvqILCvcRbY1zgnVxHYC+yT/WXuawWS30IC+2tru/LqAnuB/cr9aW8ECBDYTqDjC19yz6kCC+xTsuYlsIaAwL6mDgL7GmeBfY1zchWBvcA+2V/mvlYg+S0ksL+2tiuvLrAX2K/cn/ZGgACB7QQ6vvAl95wqsMA+JWteAmsICOxr6iCwr3EW2Nc4J1cR2Avsk/1l7msFkt9CAvtra7vy6gJ7gf3K/WlvBAgQ2E6g4wtfcs+pAgvsU7LmJbCGgMC+pg4C+xpngX2Nc3IVgb3APtlf5r5WIPktJLC/trYrry6wF9iv3J/2RoAAge0EOr7wJfecKrDAPiVrXgJrCAjsa+ogsK9xFtjXOCdXEdgL7JP9Ze5rBZLfQgL7a2u78uoCe4H9yv1pbwQIENhOoOMLX3LPqQIL7FOy5iWwhoDAvqYOAvsaZ4F9jXNyFYG9wD7ZX+a+ViD5LSSwv7a2K68usBfYr9yf9kaAAIHtBDq+8CX3nCqwwD4la14CawgI7GvqILCvcRbY1zgnVxHYC+yT/WXuawWS30IC+2tru/LqAnuB/cr9aW8ECBDYTqDjC19yz6kCC+xTsuYlsIaAwL6mDgL7GmeBfY1zchWBvcA+2V/mvlYg+S0ksL+2tiuvLrAX2K/cn/ZGgACB7QQ6vvAl95wqsMA+JWteAmsICOxr6iCwr3EW2Nc4J1cR2Avsk/1l7msFkt9CAvtra7vy6gJ7gf3K/WlvBAgQ2E6g4wtfcs+pAgvsU7LmJbCGgMC+pg4C+xpngX2Nc3IVgb3APtlf5r5WIPktJLC/trYrry6wF9iv3J/2RoAAge0EOr7wJfecKrDAPiVrXgJrCAjsa+ogsK9xFtjXOCdXEdgL7JP9Ze5rBZLfQgL7a2u78uoCe4H9yv1pbwQIENhOoOMLX3LPqQIL7FOy5iWwhoDAvqYOAvsaZ4F9jXNyFYG9wD7ZX+a+ViD5LSSwv7a2K68usBfYr9yf9kaAAIHtBDq+8CX3nCqwwD4la14CawgI7GvqILCvcRbY1zgnVxHYC+yT/WXuawWS30IC+2tru/LqpYH9yhDVe3PDV4tbjwABAgTOCiR/s87u6V3XdQzsf/vBn951rCX//z/67NtL7sumCJwRSP1DwJm9rHDNX/34r2Pb+Oh7n8bmNnFe4OM/fie2yGe//yQ2t4lfCfzFz/41xpF6N/CMjpXMxG8RSH4LCez7t16yP76q89733//u5/251j9BsqBu+PXrb4cECBDoJJD8zUo5COxTsm/Om/oorzuBlQi8EhAGPXaDwN7d8ZyAwL5/bwjs+9fQCWoEkt9C8ruaGiZXSfaHwD5ZuWfmThbUDX9BQS1JgACBjQWSv1kpNoF9SlZgXydrpSsEBPYC+yv6ruOaAvuOVXvcs8C+fw2doEYg+S0kv6upYXKVZH8I7JOVE9hfoGtJAgQIEJgpUPUSMnPPAvuZmm+fy1/Y11lbKS8gsBfY57tsjxUE9v3rKLDvX0MnqBFIfgsJ7GtqmFwl2R8C+2TlBPYX6FqSAAECBGYKVL2EzNyzwH6mpsC+TtNKVwsI7AX2V/dgl/UF9l0q9fw+Bfb9a+gENQLJbyGBfU0Nk6sk+0Ngn6ycwP4CXUsSIECAwEyBqpeQmXsW2M/UFNjXaVrpagGBvcD+6h7ssr7AvkulBPb9K+UEVwskv4UE9ldX9+XrJ/tDYP/y+hyeIVlQN/zhcriAAAECBN4ikPzNSsEL7FOyb87rP4lTZ22lvIDAXmCf77I9VhDY96+jv7DvX0MnqBFIfgvJ72pqmFwl2R8C+2Tlnpk7WVA3/AUFtSQBAgQ2Fkj+ZqXYBPYpWYF9nayVrhAQ2Avsr+i7jmsK7DtW7XHPAvv+NXSCGoHkt5D8rqaGyVWS/SGwT1ZOYH+BriUJECBAYKZA1UvIzD0L7Gdqvn0uf2FfZ22lvIDAXmCf77I9VhDY96+jwL5/DZ2gRiD5LSSwr6lhcpVkfwjsk5UT2F+ga0kCBAgQmClQ9RIyc88C+5maAvs6TStdLSCwF9hf3YNd1hfYd6nU8/sU2PevoRPUCCS/hQT2NTVMrpLsD4F9snIC+wt0LUmAAAECMwWqXkJm7llgP1NTYF+naaWrBQT2Avure7DL+gL7LpUS2PevlBNcLZD8FhLYX13dl6+f7A+B/cvrc3iGZEHd8IfL4QICBAgQeItA8jcrBS+wT8m+Oa//JE6dtZXyAgJ7gX2+y/ZYQWDfv47+wr5/DZ2gRiD5LSS/q6lhcpVkfwjsk5V7Zu5kQd3wFxTUkgQIENhYIPmblWIT2KdkBfZ1sla6QkBgL7C/ou86rimw71i1xz0L7PvX0AlqBJLfQvK7mhomV0n2h8A+WTmB/QW6liRAgACBmQJVLyEz9yywn6n59rn8hX2dtZXyAgJ7gX2+y/ZYQWDfv44C+/41dIIageS3kMC+pobJVZL9IbBPVk5gf4GuJQkQIEBgpkDVS8jMPQvsZ2oK7Os0rXS1gMBeYH91D3ZZX2DfpVLP71Ng37+GTlAjkPwWEtjX1DC5SrI/BPbJygnsL9C1JAECBAjMFKh6CZm5Z4H9TE2BfZ2mla4WENgL7K/uwS7rC+y7VEpg379STnC1QPJbSGB/dXVfvn6yPwT2L6/P4RmSBXXDHy6HCwgQIEDgLQLJ36wUvMA+JfvmvP6TOHXWVsoLCOwF9vku22MFgX3/OvoL+/41dIIageS3kPyupobJVZL9IbBPVu6ZuZMFdcNfUFBLEiBAYGOB5G9Wik1gn5IV2NfJWukKAYG9wP6Kvuu4psC+Y9Ue9yyw719DJ6gRSH4Lye9qaphcJdkfAvtk5QT2F+hakgABAgRmClS9hMzcs8B+pubb5/IX9nXWVsoLCOwF9vku22MFgX3/Ogrs+9fQCWoEkt9CAvuaGiZXSfaHwD5ZOYH9BbqWJECAAIGZAlUvITP3LLCfqSmwr9O00tUCAnuB/dU92GV9gX2XSj2/T4F9/xo6QY1A8ltIYF9Tw+Qqyf4Q2CcrJ7C/QNeSBAgQIDBToOolZOaeBfYzNQX2dZpWulpAYC+wv7oHu6wvsO9SKYF9/0o5wdUCyW8hgf3V1X35+sn+ENi/vD6HZ0gW1A1/uBwuIECAAIG3CCR/s1LwAvuU7Jvz+k/i1FlbKS8gsBfY57tsjxUE9v3r6C/s+9fQCWoEkt9C8ruaGiZXSfaHwD5ZOXNfLpC6eTxYLy+tDRAgUCSQeo4mt5/8CP3dL76Z3Hpkbr9ZNSHkR9/7NFI/k9YJdAzsk8/ojs+Ov/ubD+sa5sYrJQP7X/3mlzHZ1P3ywQ/69V3S+X/9P/7nSA3/4e//MTKvSQm8TSD13HhaM/k7m9p3cs+pTkxZpGsosE91hHmXEEjdmB0fUksUxCYIEGgnkHqOJiEE9o+6frME9sn7bae5Bfb9nx0C+5o7UmD/6Cywf/QQ2Nfch1apEUh+CyXf0VP7Tu45VdGUhcA+VTHz3kIgdWN2fEjdouAOSYDAdIHUc3T6Rr8yocC+f+iW7I+/+vFfR6b3F/YR1tJJBfb9nx0C+5pbRmAvsH9bpwnsa+5Dq9QIJL+FkrlSat/JPacqmrIQ2KcqZt5bCKRuzI4PqVsU3CEJEJgukHqOTt+owP5ZUr9ZjzQC++Td13tugb3AvncH1+1eYC+wF9jX3W9WulYg+S2UfEdP7Tu551SlUxYC+1TFzHsLgdSN2fEhdYuCOyQBAtMFUs/R6RsV2AvsB5tKYD8IdcNhAnuB/Q3b/tSRBfYCe4H9qVvHRQ0Fkt9CyVwpte/knlPtkbIQ2KcqZt5bCKRuzI4PqVsU3CEJEJgukHqOTt+owF5gP9hUAvtBqBsOE9gL7G/Y9qeOLLAX2AvsT906LmookPwWSuZKqX0n95xqj5SFwD5VMfPeQiB1Y3Z8SN2i4A5JgMB0gdRzdPpGBfYC+8GmEtgPQt1wmMBeYH/Dtj91ZIG9wF5gf+rWcVFDgeS3UDJXSu07uedUe6QsBPapipn3FgKpG7PjQ+oWBXdIAgSmC6Seo9M3KrAX2A82lcB+EOqGwwT2Avsbtv2pIwvsBfYC+1O3josaCiS/hZK5UmrfyT2n2iNlIbBPVcy8txBI3ZgdH1K3KLhDEiAwXSD1HJ2+UYG9wH6wqQT2g1A3HCawF9jfsO1PHVlgL7AX2J+6dVzUUCD5LZTMlVL7Tu451R4pC4F9qmLmvYVA6sbs+JC6RcEdkgCB6QKp5+j0jQrsBfaDTSWwH4S64TCBvcD+hm1/6sgCe4G9wP7UreOihgLJb6FkrpTad3LPqfZIWQjsUxUz7y0EUjdmx4fULQrukAQITBdIPUenb1RgL7AfbCqB/SDUDYcJ7AX2N2z7U0cW2AvsBfanbh0XNRRIfgslc6XUvpN7TrVHykJgn6qYeW8hkLoxOz6kblFwhyRAYLpA6jk6faMCe4H9YFMJ7AehbjhMYC+wv2HbnzqywF5gL7Adoj/PAAAgAElEQVQ/deu4qKFA8lsomSul9p3cc6o9UhYC+1TFzHsLgdSN2fEhdYuCOyQBAtMFUs/R6RsV2AvsB5tKYD8IdcNhAnuB/Q3b/tSRBfYCe4H9qVvHRQ0Fkt9CyVwpte/knlPtkbIQ2KcqZt5bCKRuzI4PqVsU3CEJEJgukHqOTt+owF5gP9hUAvtBqBsOE9gL7G/Y9qeOLLAX2AvsT906LmookPwWSuZKqX0n95xqj5SFwD5VMfPeQiB1Y3Z8SN2i4A5JgMB0gdRzdPpGBfYC+8GmEtgPQt1wmMBeYH/Dtj91ZIG9wF5gf+rWcVFDgeS3UDJXSu07uedUe6QsBPapipn3FgKpG7PjQ+oWBXdIAgSmC6Seo9M3KrAX2A82lcB+EOqGwwT2Avsbtv2pIwvsBfYC+1O3josaCiS/hZK5UmrfyT2n2iNlIbBPVcy8txBI3ZgdH1K3KLhDEiAwXSD1HJ2+UYG9wH6wqQT2g1A3HCawF9jfsO1PHVlgL7AX2J+6dVzUUCD5LZTMlVL7Tu451R4pC4F9qmLmvYVA6sbs+JC6RcEdkgCB6QKp5+j0jQrsBfaDTSWwH4S64TCBvcD+hm1/6sgCe4G9wP7UreOihgLJb6FkrpTad3LPqfZIWQjsUxUz7y0EUjdmx4fULQrukAQITBdIPUenb1RgL7AfbCqB/SDUDYcJ7AX2N2z7U0cW2AvsBfanbh0XNRRIfgslc6XUvpN7TrVHykJgn6qYeW8hkLoxOz6kblFwhyRAYLpA6jk6faMCe4H9YFMJ7AehbjhMYC+wv2HbnzqywF5gL7A/deu4qKFA8lsomSul9p3cc6o9UhYC+1TFzHsLgdSN2fEhdYuCOyQBAtMFUs/R6RsV2AvsB5tKYD8IdcNhAnuB/Q3b/tSRBfYCe4H9qVvHRQ0Fkt9CyVwpte/knlPtkbIQ2KcqZt5bCKRuzI4PqVsU3CEJEJgukHqOTt+owF5gP9hUAvtBqBsOE9gL7G/Y9qeOLLAX2AvsT906LmookPwWSuZKqX0n95xqj5SFwD5VMfPeQiB1Y3Z8SN2i4A5JgMB0gdRzdPpGBfYC+8GmEtgPQt1wmMBeYH/Dtj91ZIG9wF5gf+rWcVFDgeS3UDJXSu07uedUe6QstgnsU0DJZum4544Nntpz5c2TPIO5CRAgMCKQ+s0aWXu1MX/xs39dbUvv3M/vfvHNd45ZcUDyPSx13o6B/S8+/qcUxzc++MGHsblTE//qN7+MTJ3qjafNfvS9TyN7/u0Hf4rM+zRp8rn0s4++Fdn3T3/yw8i8yUn/66//W2z6jh4xjC8mTln/84d/G9v2+5/8PDJ38h8oU8/S1LM/AmzScoGO30Id36PLCzthwWRvVNXwve+//93PJ1h87RQpoCROxz13q19qv1/Om+yP9N7NT4AAgSMCqd+sI3tYZazAvq4SHX9nU0FCKpB9qqbA/rGnU6FNqjeedp/qD4H9Y290DKhTIfKTTEeP5C9Yylpg/1i11LM09exP9py56wQ6fgt1fI+uq+i8lZK9UVVDgf1r/ZAqalVB57X3N76Rspi5x6+bq6N12sT8BAjsKdD1OZ2ohsA+ofr1c3b8nU0FCalAVmD/Zu+lQptUbwjs36yhv7B/ZZIKkQX2b/ZdylpgL7Cve/Oy0nMCHb+FOr5Hd+zAZG9U1VBgL7B/9t5LNnjyhq+6eZJnMDcBAgRGBLo+p0fOdnSMwP6o2PnxHX9nU6GswP58Hx29UmD/Ssxf2D92T8e/KE+FyAJ7gf3bnq3+kzhHf3mMX12g47dQx/fo1fvg6/aX7I2qGgrsBfYC+45PH3smQIDAFwLJF5FuwAL7uopVvaTOPJHA/lHTf8P+lUeqN55WSP2DjsBeYP+252PHf8CY+bx/fa7UP474C/tH6dSzNPWPtcmeM3edQMdvoY7v0XUVnbdSsjeqaiiwF9gL7Oc9E8xEgACBUoHki0jpQSYsJrCfgDg4RdVL6uB2hoalgoRUIPt0KP8N+8fSpkKbVG8I7N+8Nf0ncV6ZpELkpxUE9o+9l7IW2Avsh15ADIoKdPwW6vgeHS1iaPJkb1TVUGAvsBfYhx4QpiVAgEBaIPkikt777PkF9rNFn5+v6iV15olSoazAfmaV3j6XwP6Vj7+wf+yVjgF1KkQW2L/5HElZC+wF9nW/gFZ6TqDjt1DH9+iOHZjsjaoaCuwF9gL7jk8feyZAgMAXAskXkW7AAvu6ilW9pM48kcD+UdN/EueVR6o3nlZI/YOOwF5g/7bnY8d/wJj5vH99LoH9KxH/Dftkp5n7CoGO30Id36OvqO1L10z2RlUNBfYCe4H9S58EridAgMBFAskXkYuOdHpZgf1pusMXVr2kHt7YWy5IhbKpQPbpKP6TOI8F9Rf2rzwE9gJ7gf34L4TAXmA/3i1GdhPo+C3U8T26W1887TfZG1U1FNgL7AX2HZ8+9kyAAIHwi0g3YIF9XcWqXlJnnkhg/6jpL+xfeaR642mF1D/oCOwF9gL78V8Igb3AfrxbjOwmkAxlUxYd36NTFsl5k71RVUOBvcBeYJ98SpibAAECQYHki0hw25GpBfYR1q+dtOoldeaJUqFsKpB9Oru/sH/sAH9h/8pDYC+wF9iP/0II7AX2491iZDeBjt9CHd+ju/XF036TvVFVQ4G9wF5g3/HpY88ECBAIv4h0AxbY11Ws6iV15okE9o+a/sL+lUeqN55WSP2DjsBeYC+wH/+FENgL7Me7xchuAslQNmXR8T06ZZGcN9kbVTUU2AvsBfbJp4S5CRAgEBRIvogEtx2ZWmAfYf3aSateUmeeKBXKpgLZp7P7C/vHDvAX9q88BPYCe4H9+C+EwF5gP94tRnYT6Pgt1PE9ultfPO032RtVNRTYC+wF9h2fPvZMgACB8ItIN2CBfV3Fql5SZ55IYP+o6S/sX3mkeuNphdQ/6AjsBfYC+/FfCIG9wH68W4zsJpAMZVMWHd+jUxbJeZO9UVVDgb3AXmCffEqYmwABAkGB5ItIcNuRqQX2EdavnbTqJXXmiVKhbCqQfTq7v7B/7AB/Yf/KQ2AvsBfYj/9CCOwF9uPdYmQ3gY7fQh3fo7v1xdN+k71RVUOBvcBeYN/x6WPPBAgQCL+IdAMW2NdVrOoldeaJBPaPmv7C/pVHqjeeVkj9g47AXmAvsB//hRDYC+zHu8XIbgLJUDZl0fE9OmWRnDfZG1U1FNgL7AX2yaeEuQkQIBAUSL6IBLcdmVpgH2H92kmrXlJnnigVyqYC2aez+wv7xw7wF/avPAT2AnuB/fgvhMBeYD/eLUZ2E+j4LdTxPbpbXzztN9kbVTUU2AvsBfYdnz72TIAAgfCLSDdggX1dxapeUmeeSGD/qOkv7F95pHrjaYXUP+gI7AX2AvvxXwiBvcB+vFuM7CaQDGVTFh3fo1MWyXmTvVFVQ4G9wF5gn3xKmJsAAQJBgeSLSHDbkakF9hHWr5206iV15olSoWwqkH06u7+wf+wAf2H/ykNgL7AX2I//QgjsBfbj3WJkN4GO30Id36O79cXTfpO9UVVDgb3AXmDf8eljzwQIEAi/iHQDFtjXVazqJXXmiQT2j5r+wv6VR6o3nlZI/YOOwF5gL7Af/4UQ2Avsx7vFyG4CyVA2ZdHxPTplkZw32RtVNRTYC+wF9smnhLkJECAQFEi+iAS3HZlaYB9h/dpJq15SZ54oFcqmAtmns/sL+8cO8Bf2rzwE9gJ7gf34L4TAXmA/3i1GdhPo+C3U8T26W1887TfZG1U1FNgL7AX2HZ8+9kyAAIHwi0g3YIF9XcWqXlJnnkhg/6jpL+xfeaR642mF1D/oCOwF9gL78V8Igb3AfrxbjOwmkAxlUxYd36NTFsl5k71RVUOBvcBeYJ98SpibAAECQYHki0hw25GpBfYR1q+dtOoldeaJUqFsKpB9Oru/sH/sAH9h/8pDYC+wF9iP/0II7AX2491iZDeBjt9CHd+ju/XF036TvVFVw/f+w7//8ecd8VN7roJP7d+8uRtTb+guAgTOCCRfFs7sZ9drfvbRt3Y92qlz/fOHf3vqul0vev+Tn7c72sd//E5sz5/9/pPY3KmJU+9hyWd06n/JkPyHolT9nub96U9+mJw+Mncq7I1sNjxpx/qFSWLTp/rOPwQ/liz1D8Gxxmg6cfJ3tiNJ6n2mo4U9v11AYP+aj5un/y2T+kHQG/17wwkIXCGQeiZdcZaV1xTYP1ZHYP/oIbB/9BDYv/JIPqMF9o991zHwTQWnK/+ePre3jvXr6Py051TfCewF9lfcE8nf2SvO89I15UovFbzP9QJ7gf123Z76QfBg3a5VHIhAiUDqmVSy+UaLCOwF9m9rV4G9wP65/kg+owX2AvtGP6Pv3KrA/p1E0wYI7KdRvnUif2Ff45z8na05wdxV5EpzPXeeTWAvsN+uv1M/CB6s27WKAxEoEUg9k0o232gRgb3AXmA/fsP6C/tXVslntMBeYD9+V64/UmBfVyOBfY21wL7GOfk7W3OCuavIleZ67jybwF5gv11/p34QPFi3axUHIlAikHomlWy+0SICe4G9wH78hhXYC+zHu2XeyI6Bbyo4nadaN1PH+tXpzF0p1Xf+kziPdRLYz+3b52bzLfQoI1eq6bsdVhHYC+x36OOHM6R+EDxYt2sVByJQIpB6JpVsvtEiAnuBvcB+/IYV2Avsx7tl3siOgW8qOJ2nWjdTx/rV6cxdKdV3AnuB/dxOHZvNt5DAfqxTjHpdQGAvsN/urkj9IAjst2sVByJQIpB6JpVsvtEiAnuBvcB+/IYV2Avsx7tl3siOgW8qOJ2nWjdTx/rV6cxdKdV3AnuB/dxOHZvNt5DAfqxTjBLYv6MHhLL9b5LUD4Le6N8bTkDgCoHUM+mKs6y8psBeYC+wH79DBfYC+/FumTeyY+CbCk7nqdbN1LF+dTpzV0r1ncBeYD+3U8dm8y0ksB/rFKME9gL77e+C1A+CwH771nFAAhGB1DMpstnGkwrsBfYC+/EbWGAvsB/vlnkjOwa+qeB0nmrdTB3rV6czd6VU3wnsBfZzO3VsNt9CAvuxTjFKYC+w3/4uSP0gCOy3bx0HJBARSD2TIpttPKnAXmAvsB+/gQX2Avvxbpk3smPgmwpO56nWzdSxfnU6c1dK9Z3AXmA/t1PHZvMtJLAf6xSjBPYC++3vgtQPgsB++9ZxQAIRgdQzKbLZxpMK7AX2AvvxG1hgL7Af75Z5IzsGvqngdJ5q3Uwd61enM3elVN8J7AX2czt1bDbfQgL7sU4xSmAvsN/+Lkj9IAjst28dByQQEUg9kyKbbTypwF5gL7Afv4EF9gL78W6ZN7Jj4JsKTuep1s3UsX51OnNXSvWdwF5gP7dTx2bzLSSwH+sUowT2Avvt74LUD4LAfvvWcUACEYHUMymy2caTCuwF9gL78RtYYC+wH++WeSM7Br6p4HSeat1MHetXpzN3pVTfCewF9nM7dWw230IC+7FOMUpgL7Df/i5I/SAI7LdvHQckEBFIPZMim208qcBeYC+wH7+BBfYC+/FumTeyY+CbCk7nqdbN1LF+dTpzV0r1ncBeYD+3U8dm8y0ksB/rFKME9gL77e+C1A+CwH771nFAAhGB1DMpstnGkwrsBfYC+/EbWGAvsB/vlnkjOwa+qeB0nmrdTB3rV6czd6VU3wnsBfZzO3VsNt9CAvuxTjFKYC+w3/4uSP0gCOy3bx0HJBARSD2TIpttPKnAXmAvsB+/gQX2Avvxbpk3smPgmwpO56nWzdSxfnU6c1dK9Z3AXmA/t1PHZvMtJLAf6xSjBPYC++3vgtQPgsB++9ZxQAIRgdQzKbLZxpMK7AX2AvvxG1hgL7Af75Z5IzsGvqngdJ5q3Uwd61enM3elVN8J7AX2czt1bDbfQgL7sU4xSmAvsN/+Lkj9IAjst28dByQQEUg9kyKbbTypwF5gL7Afv4EF9gL78W6ZN7Jj4JsKTuep1s3UsX51OnNXSvWdwF5gP7dTx2bzLSSwH+sUowT2Avvt74LUD4LAfvvWcUACEYHUMymy2caTCuwF9gL78RtYYC+wH++WeSM7Br6p4HSeat1MHetXpzN3pVTfCewF9nM7dWw230IC+7FOMUpgL7Df/i5I/SAI7LdvHQckEBFIPZMim208qcBeYC+wH7+BBfYC+/FumTeyY+CbCk7nqdbN1LF+dTpzV0r1ncBeYD+3U8dm8y0ksB/rFKME9gL77e+C1A+CwH771nFAAhGB1DMpstnGkwrsBfYC+/EbWGAvsB/vlnkjOwa+qeB0nmrdTB3rV6czd6VU3wnsBfZzO3VsNt9CAvuxTjFKYC+w3/4uSP0gCOy3bx0HJBARSD2TIpttPKnAXmAvsB+/gQX2Avvxbpk3smPgmwpO56nWzdSxfnU6c1dK9Z3AXmA/t1PHZvMtJLAf6xSjSgN7AWfNxwBnNzYBAgReJtD1RTL1/E96fPCDD19WrGeu/uh7n0bm7TrpP3/4t123Htn3+5/8PDJvV+f/7//9LxGP5KS/+s0vI9N73j2y/qf//EnE+WnSv/ubzPM/tmETPwgI7Ps3xH/8fz6LHSL1jI5t+IuJ/7f/+H/Fpv+//8//PTZ3t4mTv7PdLJ72m/p+62hhz28XeO8//Psff55C0oivZJMPKc6pDjYvAQJ3EUg+o5OGqed/0kNgn+yIV3N3DZJTOgL7R1mBfc07esfnncA+9RTqP6/Avn8NBfaPNRTY1/R08rui5gRzV0l9v83dpdlWEBDYF1Uh+ZBywxcV0TIECGwrkHxGJ9FSz/+kR8cAK1nD1NwC+0dZgb3A/rl7zfPuUUZgn3oq959XYN+/hgJ7gf0VXZz8nb3iPC9dM/X99tJ9uX49AYH9/8/eHYPst113ftdlMGk0AmFXlpBwGAwO6mbkKxVycRsZuzN4mhGGSWHhIiliSGPIIIIFCcwUSTEwjYlRGhvUzWSk4ja3kIQ8pBEMBDdzQeqMQOMuGOX+Y43e+/x13/+7nuec39577fOpvc/aa3/XWvs553tf/zWoJslLysAPKqJtEEBgWwLJOzoJLXX/J3kQ9smOeIpN2BP2b+o0f2H/RMd9R9iPuZX770LY968hYU/Yz+ji5O/sjPMc3TP1/XY0L8+vR4CwH1ST5CVl4AcV0TYIILAtgeQdnYSWuv+TPAj7ZEcQ9s/R9Rf2t2QIe8L+uVnxF/Zj7uiOuxD2Hat2mzNhT9jP6OLkd8WM8xzdM/X9djQvz69HgLAfVJPkJWXgBxXRNgggsC2B5B2dhJa6/5M8CPtkRxD2hH2tvwh7wp6wr82KVU8ECPv+3UDYE/Yzujj5XTHjPEf3TH2/Hc3L8+sRIOwH1SR5SRn4QUW0DQIIbEsgeUcnoaXu/yQPwj7ZEYQ9YV/rL8KesCfsa7NiFWG/Uw8Q9oT9jH5OflfMOM/RPVPfb0fz8vx6BAj7QTVJXlIGflARbYMAAtsSSN7RSWip+z/Jg7BPdgRhT9jX+ouwJ+wJ+9qsWEXY79QDhD1hP6Ofk98VM85zdM/U99vRvDy/HgHCflBNkpeUgR9URNsggMC2BJJ3dBJa6v5P8iDskx1B2BP2tf4i7Al7wr42K1YR9jv1AGFP2M/o5+R3xYzzHN0z9f12NC/Pr0eAsB9Uk+QlZeAHFdE2CCCwLYHkHZ2Elrr/kzwI+2RHEPaEfa2/CHvCnrCvzYpVhP1OPUDYE/Yz+jn5XTHjPEf3TH2/Hc3L8+sRIOwH1SR5SRn4QUW0DQIIbEsgeUcnoaXu/yQPwj7ZEYQ9YV/rL8KesCfsa7NiFWG/Uw8Q9oT9jH5OflfMOM/RPVPfb0fz8vx6BAj7QTVJXlIGflARbYMAAtsSSN7RSWip+z/Jg7BPdgRhT9jX+ouwJ+wJ+9qsWEXY79QDhD1hP6Ofk98VM85zdM/U99vRvDy/HgHCflBNkpeUgR9URNsggMC2BJJ3dBJa6v5P8iDskx1B2BP2tf4i7Al7wr42K1YR9jv1AGFP2M/o5+R3xYzzHN0z9f12NC/Pr0eAsB9Uk+QlZeAHFdE2CCCwLYHkHZ2Elrr/kzwI+2RHEPaEfa2/CHvCnrCvzYpVhP1OPUDYE/Yz+jn5XTHjPEf3TH2/Hc3L8+sRIOwH1SR5SRn4QUW0DQIIbEsgeUcnoaXu/yQPwj7ZEYQ9YV/rL8KesCfsa7NiFWG/Uw8Q9oT9jH5OflfMOM/RPVPfb0fz8vx6BAj7QTVJXlIGflARbYMAAtsSSN7RSWip+z/Jg7BPdgRhT9jX+ouwJ+wJ+9qsWEXY79QDhD1hP6Ofk98VM85zdM/U99vRvDy/HgHCflBNkpeUgR9URNsggMC2BJJ3dBJa6v5P8iDskx1B2BP2tf4i7Al7wr42K1YR9jv1AGFP2M/o5+R3xYzzHN0z9f12NC/Pr0eAsB9Uk+QlZeAHFdE2CCCwLYHkHZ2Elrr/kzwI+2RHEPaEfa2/CHvCnrCvzYpVhP1OPUDYE/Yz+jn5XTHjPEf3TH2/Hc3L8+sRIOwH1SR5SRn4QUW0DQIIbEsgeUcnoaXu/yQPwj7ZEYQ9YV/rL8KesCfsa7NiFWG/Uw8Q9oT9jH5OflfMOM/RPVPfb0fz8vx6BAj7QTVJXlIGflARbYMAAtsSSN7RSWip+z/Jg7BPdgRhT9jX+ouwJ+wJ+9qsWEXY79QDhD1hP6Ofk98VM85zdM/U99vRvDy/HgHCflBNkpeUgR9URNsggMC2BJJ3dBJa6v5P8iDskx1B2BP2tf4i7Al7wr42K1YR9jv1AGFP2M/o5+R3xYzzHN0z9f12NC/Pr0eAsB9Uk+QlZeAHFdE2CCCwLYHkHZ2Elrr/kzwI+2RHEPaEfa2/CHvCnrCvzYpVhP1OPUDYE/Yz+jn5XTHjPEf3TH2/Hc3L8+sRIOwH1SR5SRn4QUW0DQIIbEsgeUcnoaXu/yQPwj7ZEYQ9YV/rL8KesCfsa7NiFWG/Uw8Q9oT9jH5OflfMOM/RPVPfb0fz8vx6BN767Cc+/dP10tovo46XlItkvz68+onM4dU74Pnzd+yNZDVTUv1Vzt/53reSqUdi/8nvfy4SNxn0J5/7w2R4sQcQ+KM/+Hhsl//lP/5Xkdj/x+/8s0jcZNDk/f+Vdz6ZTD0S+xvv/jgS91XQ5G9LLOlQ4I6/hV98+8shGh/72Duf+WEsdirwl77w+VToWNz3vvv9WOw//csfxGJ3DJx6d+zIOfk727E3eLaOVRuT8+uzQtiP4f6xjpeUi2RQc9hmGAFzOAx1u4069kYSclKqdJQUqY+uZA0J+yTdMbEJ+zGck/c/YX9bw+Rvy5huOW+Xjr+FhP1t/Qn7Wx4dRfJ5E/2LkVLvjh05J39nkzVMxebZUmT7xyXsJ9Ww4yXlIpnULLaNETCHMbTtA3fsjST0pFTpKClSH13JGhL2SbpjYhP2Yzgn73/CnrB/ros7/hYS9oT9m27ljiI5+SuTenfsyDn5O5usYSo2z5Yi2z8uYT+phh0vKRfJpGaxbYyAOYyhbR+4Y28koRP2t3RTH13JGhL2SbpjYhP2Yzgn73/CnrAn7Gtz7J/EqXE6uso/iXOUYP351LsjYV+vwaorebZVKzM/L8J+Ug2SHwOpI7lIUmTFnUXAHM4iv/6+HXsjSZWwJ+yT/SV2jQBhX+N0dFXy/ifsCXvCvjahhH2N09FVhP1RgvXnCfsnVsnf2XpF1lnJs61Ti9UyIewnVaTjJeUimdQsto0RMIcxtO0Dd+yNJHTCnrBP9pfYNQKEfY3T0VXJ+5+wJ+wJ+9qEEvY1TkdXEfZHCdafJ+wJ++e6hWerz9HVVhL2kyqe/BhIHclFkiIr7iwC5nAW+fX37dgbSaqEPWGf7C+xawQI+xqno6uS9z9hT9gT9rUJJexrnI6uIuyPEqw/T9gT9oR9fV6s/HsChP2kTkh+DKSORNinyIo7i4A5nEV+/X079kaSKmFP2Cf7S+waAcK+xunoquT9T9gT9oR9bUIJ+xqno6sI+6ME688T9oQ9YV+fFysJ+6k9kPwYSB2MsE+RFXcWAXM4i/z6+3bsjSRVwp6wT/aX2DUChH2N09FVyfufsCfsCfvahBL2NU5HVxH2RwnWnyfsCXvCvj4vVhL2U3sg+TGQOhhhnyIr7iwC5nAW+fX37dgbSaqEPWGf7C+xawQI+xqno6uS9z9hT9gT9rUJJexrnI6uIuyPEqw/T9gT9oR9fV6sJOyn9kDyYyB1MMI+RVbcWQTM4Szy6+/bsTeSVAl7wj7ZX2LXCBD2NU5HVyXvf8KesCfsaxNK2Nc4HV1F2B8lWH+esCfsCfv6vFhJ2E/tgeTHQOpghH2KrLizCJjDWeTX37djbySpEvaEfbK/xK4RIOxrnI6uSt7/hD1hT9jXJpSwr3E6uoqwP0qw/jxhT9gT9vV5sZKwn9oDyY+B1MEI+xRZcWcRMIezyK+/b8feSFIl7An7ZH+JXSNA2Nc4HV2VvP8Je8KesK9NKGFf43R0FWF/lGD9ecKesCfs6/NiJWE/tQeSHwOpgxH2KbLiziJgDmeRX3/fjr2RpErYE/bJ/hK7RoCwr3E6uip5/xP2hD1hX5tQwr7G6egqwv4owfrzhD1hT9jX58VKwn5qDyQ/BlIHI+xTZMWdRcAcziK//r4deyNJlbAn7JP9JXaNAGFf43R0VfL+J+wJe8K+NqGEfY3T0VWE/VGC9ecJe8KesK/Pi5WE/dQeSH4MpA5G2KfIijuLgDmcRX79fTv2RpIqYU/YJ/tL7BoBwr7G6eiq5P1P2BP2hH1tQgn7Gqejqwj7owTrzxP2hD1hX58XKwn7qT2Q/BhIHYywT5EVdxYBcziL/Pr7duyNJFXCnrBP9pfYNQKEfY3T0VXJ+5+wJ+wJ+9qEEvY1TkdXEfZHCdafJ+wJe8K+Pi9WEvZTeyD5MZA6GGGfIivuLALmcBb59fft2BtJqoQ9YZ/sL6CFTMAAACAASURBVLFrBAj7Gqejq5L3P2FP2BP2tQkl7Gucjq4i7I8SrD9P2BP2hH19Xqwk7Kf2QPJjIHUwwj5FVtxZBMzhLPLr79uxN5JUCXvCPtlfYtcIEPY1TkdXJe9/wp6wJ+xrE0rY1zgdXUXYHyVYf56wJ+wJ+/q8WEnYT+2B5MdA6mCEfYqsuLMImMNZ5Nfft2NvJKkS9oR9sr/ErhEg7Gucjq5K3v+EPWFP2NcmlLCvcTq6irA/SrD+PGFP2BP29XmxkrCf2gPJj4HUwQj7FFlxZxEwh7PIr79vx95IUiXsCftkf4ldI0DY1zgdXZW8/wl7wp6wr00oYV/jdHQVYX+UYP15wp6wJ+zr82IlYT+1B5IfA6mDEfYpsuLOImAOZ5Fff9+OvZGkStgT9sn+ErtGgLCvcTq6Knn/E/aEPWFfm1DCvsbp6CrC/ijB+vOEPWFP2NfnxcoJwj71ApwUyamckw2Y4pFkkco5yVns/gRSL05JMt9498ex8B3nMHkvxUAHA3eUQV/6wueDRDKhUx+4777/qUzCH0T9zve+FYv9xbe/HIn9T37ndyNxk0F/8vlfjoX/f77257HYyf5IJd3x/u94R6fq9ypu6p0myfknn/vDCJK/+nf/NhI3GTR5R3/iB/8mmXoktveZW6x/+pc/iHDuGjT13YnzbUd0fDfo+A3ecQ479sbrnN/67Cc+/dMU/BSgZIOnck4xfhU3xSPJIpVzkrPY/QmkXpySZFIft8m7I8kjeS8l807FTkqKVM4+cJ/IEva3XZaUQal+JuxTZH8xbsf7v+Mdnaxo6p0myZmwf+qI5B1N2Ccn7yl26g8QXu1AJN/WMPXdiTNhP+a26L9Lx/dGwv6FvutY1JT8TrJI5dz/WnGCJIHUi1My59THLWGfrNq42ElJkToFYU/YP9dbSRmU6mfCPkWWsB9HdtxOqXea5G8hYU/YPzch3mduyRDJhP24X5OnnZLOKnUeLixFtv9/zCHsCfvydCQvP5dUuQwWnkiAsL+F2XEOk/fSia02LFRSUqQO4QOXsCfsa9Pln8Tp/+HV8Y6udedjqwj7J27+SZzbHvIX9o/N1L1P+Qv7e4k9vj713ek/jPR/N+j4Df74JMx7cgdv4J/Eea1/OhY1NfBJFqmc510Hdu5AIPXilDx76uP2Vc4d5zB5LyXrmIrdUQYR9oQ9YV+7EQj7/h/lHe/oWnc+tir1TpPk7C/sn2qd/P+CIuwfm6l7nyLs7yX2+PrUdydh3//doOM3+OOTMO/JHbwBYU/YPztByQZ3Sc27uK68c+rFKck09XFL2CerNi52UlKkTkHYE/aEfW26CPv+H+Ud7+hadz62KvVOk+RM2BP2z3W795lbMkTyLY/UdyfO/d8NuLDH3iHufSrpM+/N5dH1hD1hT9g/Oj2ea0cg9eKUBJH6uCXsk1UbFzspKVKn8IFL2BP2teki7Pt/lHe8o2vd+diq1DtNkjNhT9gT9rV5J5IJ+1qnnLuqo5Ql7M/tgeeideyN189C2BP2hP2Y+8IuCxAg7G+L0PFlYYcf3jNHISkpzszzw7EIe8KesK9NF2FP2Nc6pc8qwv6pVv4N+9u+9U/ijJlj/yTOGM6vdkl9d/oPI/3fDTp+g4+bnPN22sEbEPaEPWF/3p0g0uIEUi9OyWOnPm5f5dzxZWGHH94z+4WwP5Pm87FSH7jvvv+p2AG+871vxWJ/8e0vR2In/33kSMIfBP3J5385FfpjhH3/j/KOd3SsoT8InHqnSXL2F/ZPHZG8own75OQ9xU69z7zagUi+rWHquxPn/u8GHb/Bx9xQ5+6ygzcg7Al7wv7ce0G0hQmkXpySR0593BL2yaqNi52UFKlT+Av7J7KE/W2XJWVQqp8J+xTZX4zb8cOr4x2drGjqnSbJmbAn7J+bCe8zt2SIZMI++fvxXOyO7waE/ZhO6dgbr5Mh7Al7wn7MfWGXBQgQ9rdF6PiysMMP75mjkJQUZ+b54Vg+cAn753qLsL8l4y/sb3l0vP873tGpu/9VXML+ia5/Eue20/yFfXLynmL7C/sxnF/tkvru9B9G+r8bdPwGHzc55+3U8b2RsH+h/h2Lmhr4JItUzueNt0g7Eki9OCVZpT5uX+XccQ6T91KyjqnYHWUQYU/YE/a1G4Gw7/9R3vGOrnXnY6tS7zRJzv7C/qnWyf+oStg/NlP3PkXY30vs8fWp707Cvv+7Qcdv8McnYd6TO3gDf2H/Wv90LGpq4JMsUjnPuw7s3IFA6sUpefbUxy1hn6zauNhJSZE6BWFP2BP2teki7Pt/lHe8o2vd+diq1DtNkjNhT9g/1+3eZ27JEMm3PFLfnTj3fzfgwh57h7j3qaTPvDeXR9cT9oT9s72TbHCX1KMj67kjBFIvTkdyeunZ1MctYf8S+R7/96SkSBHwgUvYE/a16SLs+3+Ud7yja9352KrUO02SM2FP2BP2tXknkgn7WqecuyrprM7N9CkaF5Yi2/+98XUyhD1hT9iPuS/ssgABwv62CB1fFjq+lCVbPykpUnkT9oQ9YV+bLsK+/4dXxzu61p2PrSLsn7j5N+xve8g/ifPYTN37lH8S515ij69PfXf6DyP93w06foM/PgnzntzBGxD2hD1hP+8OsfNgAqkXp+QxUh+3r3Lu+LKwww/vmf3SUQYR9oQ9YV+7BQj7/h/lHe/oWnc+tir1TpPk7C/sn2rt37C/7XvvM7c8iORbHqnvTpz7vxt0/AZ/7Fd/7lM7eAPCnrAn7OfeI3YfSCD14pQ8QurjlrBPVm1c7KSkSJ3CBy5hT9jXpouw7/9R3vGOrnXnY6tS7zRJzoQ9Yf9ct3ufIezfdBOmvjsJ+/7vBoT9Y+8Q9z5F2L9ALAUo2eCpnO9trnvWp3gkWaRyvoebtdcjkHpxSpJMfdwS9smqjYudlBSpU/jAJewJ+9p0Efb9P8o73tG17nxsVeqdJsmZsCfsCfvavBPJt5xS350493834MJqd8rRVUmfeTS36vP+wv41Uh2Lmhr4JItUztXGt+6aBFIvTkmaqY9bwj5ZtXGxk5IidQrCnrAn7GvTRdj3/yjveEfXuvOxVal3miRnwp6wJ+xr804kE/a1Tjl3VdJZnZvpUzQuLEW2/3vj62QIe8L+2WlJXn4uqTGXlF3GvDglOac+bgn7ZNXGxU5KitQpCHvCnrCvTRdh3//Dq+MdXevOx1al3mmSnAl7wp6wr807YT/muxPn/u8GXFjtTjm6Kukzj+ZWfZ6wJ+wJ++q0WNeegL+wvy1hx5eFHX54zxykpKQ4M88PxyLsCXvCvjZdhH3/j/KOd3StOx9bRdg/cfurf/dvH4M48Sn/o7O38L3P3PIgkgn7GddTx2/Djt/gM2p7dM+OvfH6mQl7wp6wP3oTeL4NAcKesG/TrMVEO8ogH7iEPWFfG3DCnrCvdUqfVYQ9Yf9ct37iB/+mTyP/LFPvM4T9m5o29d3pP4z0fzcg7Mdc94T9C5xTgJINnso52ZIpHkkWqZyTnMXuTyD14pQkk/q4fZVzxzlM3kvJOqZiE/Ypsrdx3/vu9yMbvfv+pyJxXwX9zve+FYv9xbe/HImd/OvNSMIfBP3J5385FfpjhH3/j/KOd3SsoT8InHqnSXL2T+I8dUTyjibsk5P3FDv1PvNqByL5toap706c+78bdPwGH3NDnbvLDt4g+hf25+IeEy1V1I5DmWLRVRSO6UC7pETQK7LvfOaHMcD/4D/850jsv/vH/zASt+uLdfJeSoH+1X/0uVToaE+nku74F2kpFuLeEkiKhBTr5H90+dFf/yCVduw/2Cbv6NRdmnw3iBWwaWDCvmnhfpZ28j9QfuL7fxODk/rnh5J3R+pd6Wt/8aMY5+RvVizpYOCU/0n+znbMOVjClqFTNWwJY4OkCfvXipi6ADsOTooFYb/BzRE8AmF/C5ewv+WRvJdSbZ2STK/yTX4spnikPkJT+Yo7jgBhf8s6KT9S76XJOzp1l3a8R8dN5bk7Efbn8hwdjbC/JZ68O1LvSoT9uKnp+DvbMedxFe2xU6qGPU6/X5aEPWH/bFcnP7pcJPtdJmediLAn7N/US8l76awefj1OSjIR9qmKiTuLAGFP2L+p91J3aVK6zZqlVfcl7FetTC0vwp6wf1OnJP8jc61D11qV8h3Jb6GOOa9V9fnZpGo4/2TXzICwJ+wJ+2vO/rKnJuwJe8K+Pp4dRVPqr8bq1KxclQBhT9gT9qtO5zl5EfbncJwVhbAn7An7+vSlxClhX6/BFVem+u6KLFc4M2FP2BP2K0yiHH5OgLAn7An7+oVA2NdZWbk+AcKesCfs15/TIxkS9kfozX+WsCfsCfv6HKbEKWFfr8EVV6b67oosVzgzYU/YE/YrTKIcCPtnesC/YX8LJvmSmhrD1D/j8Cpfwj5VNXFnECDsCXvCfsbkjduTsB/HOrETYU/YE/b1yUqJ0+S3UMec6xW5xspUDa9Bb71TEvaEPWG/3lxeOiN/YX9bfsKesH/ThUDYX/q63O7whD1hT9hvN9Y3ByLse9eXsCfsCfv6DKfEKWFfr8EVV6b67oosVzgzYU/YE/YrTKIcfk6AsCfs3zQOyZfU1Bj6C/tbsv4N+1Sn9Y9L2BP2hH3/OX7TCQj73vUl7Al7wr4+wylxmvwW6phzvSLXWJmq4TXorXdKwp6wJ+zXm8tLZ0TYE/aEff0K8Bf2dVZWrk+AsCfsCfv15/RIhoT9EXrznyXsCXvCvj6HKXFK2NdrcMWVqb67IssVzkzYE/aE/QqTKIefEyDsCXvCvn4hEPZ1VlauT4CwJ+wJ+/Xn9EiGhP0RevOfJewJe8K+PocpcUrY12twxZWpvrsiyxXOTNgT9oT9CpMoB8L+mR7wb9jfgkm+pKbG0D+Jc0vWP4mT6rT+cQl7wp6w7z/HbzoBYd+7voQ9YU/Y12c4JU6T30Idc65X5BorUzW8Br31TknYE/aE/XpzeemM/IX9bfkJe8L+TReCv7C/9HW53eEJe8KesN9urG8ORNj3ri9hT9gT9vUZTolTwr5egyuuTPXdFVmucGbCnrAn7FeYRDn8nABhT9i/aRySL6mpMfQX9rdk/YV9qtP6xyXsCXvCvv8cv+kEhH3v+hL2hD1hX5/hlDhNfgt1zLlekWusTNXwGvTWOyVhT9gT9uvN5aUzIuwJe8K+fgX4C/s6KyvXJ0DYE/aE/fpzeiRDwv4IvfnPEvaEPWFfn8OUOCXs6zW44spU312R5QpnJuwJe8J+hUmUw88JEPaEPWFfvxAI+zorK9cnQNgT9oT9+nN6JEPC/gi9+c8S9oQ9YV+fw5Q4JezrNbjiylTfXZHlCmcm7Al7wn6FSZQDYf9MD/g37G/BJF9SU2Pon8S5JeufxEl1Wv+4hD1hT9j3n+M3nYCw711fwp6wJ+zrM5wSp8lvoY451ytyjZWpGl6D3nqnJOwJe8J+vbm8dEb+wv62/IQ9Yf+mC8Ff2F/6utzu8IQ9YU/YbzfWNwci7HvXl7An7An7+gynxClhX6/BFVem+u6KLFc4M2FP2BP2K0yiHH5OgLAn7N80DsmX1NQY+gv7W7L+wj7Vaf3jEvaEPWHff47fdALCvnd9CXvCnrCvz3BKnCa/hTrmXK/INVamangNeuudkrAn7An79eby0hkR9oQ9YV+/AvyFfZ2VlesTIOwJe8J+/Tk9kiFhf4Te/GcJe8KesK/PYUqcEvb1GlxxZarvrshyhTMT9oQ9Yb/CJMrh5wQIe8KesK9fCIR9nZWV6xMg7Al7wn79OT2SIWF/hN78Zwl7wp6wr89hSpwS9vUaXHFlqu+uyHKFMxP2hD1hv8IkyoGwf6YH/Bv2t2CSL6mpMfRP4tyS9U/ipDqtf1zCnrAn7PvP8ZtOQNj3ri9hT9gT9vUZTonT5LdQx5zrFbnGylQNr0FvvVMS9oQ9Yb/eXF46I39hf1t+wp6wf9OF4C/sL31dbnd4wp6wJ+y3G+ubAxH2vetL2BP2hH19hlPilLCv1+CKK1N9d0WWK5y5pbBPXlIrFGWVHAz7KpW4Vh5/8vufix34H/yH/xyLnRLrqY/bVyA6znjH+/8r73wy1ncdA/sL+45V659z6j8GdL2jU/9xPPkfEb/w1m9EGvGX3v54JG7XoKlZecXj3fc/FcHyT37ndyNxBb0l8Ed/kJuVf/3nfxvDncr7//wf/1Us59S70le//u1YzgLfEvCdpSN2IqCfx8z3666DsN9pik4+S8ehPBmBcBMIEPa30LvKoFTrEPYpsuPipj5Cx53ATh0JpCRk1zuasH/qYsL+dqJTs0LYd7w5Cfs3VY2w79/TyRN0dCkdv7OSNRT7iYB+JuzL8+AiKaM6tLDjUB46sIeXIEDYE/ZvasSO97+/sL+tKGG/xFV7uSRSEpKwv20lf2Hff7RSs0LY9++N1F+qvyLjL+zHvCv5C/txc9jRpXT8zhpX0WvvpJ8J+/IEuEjKqA4t7DiUhw7s4SUIEPaEPWG/xCjGkiDsY2gFfgOBlIQk7An73QYvNSuEff9OIexva+gv7Pv3dPIEHV0Kz5bsiN6x9TNhX+5gF0kZ1aGFHYfy0IE9vAQBwp6wJ+yXGMVYEoR9DK3AhH25B/yTOE+o/JM4t21D2JfH6HILCXvC/nJNf+DAHV0Kz3ag4Js/qp8J+3KLu0jKqA4t7DiUhw7s4SUIEPaEPWG/xCjGkiDsY2gFJuzLPUDYE/bPNQthXx6jyy0k7An7yzX9gQN3dCk824GCb/6ofibsyy3uIimjOrSw41AeOrCHlyBA2BP2hP0SoxhLgrCPoRWYsC/3AGFP2BP25XGx8GcECHvC3jDUCXR0KTxbvb5XW6mfCftyz7tIyqgOLew4lIcO7OElCBD2hD1hv8QoxpIg7GNoBSbsyz1A2BP2hH15XCwk7D+yB/wb9kbjTQQ6uhSeTU8/R0A/E/bl6XCRlFEdWthxKA8d2MNLECDsCXvCfolRjCVB2MfQCkzYl3uAsCfsCfvyuFhI2BP2puBuAh1dCs92d5kv84B+JuzLze4iKaM6tLDjUB46sIeXIEDYE/aE/RKjGEuCsI+hFZiwL/cAYU/YE/blcbGQsCfsTcHdBDq6FJ7t7jJf5gH9TNiXm91FUkZ1aGHHoTx0YA8vQYCwJ+wJ+yVGMZYEYR9DKzBhX+4Bwp6wJ+zL42IhYU/Ym4K7CXR0KTzb3WW+zAP6mbAvN7uLpIzq0MKOQ3nowB5eggBhT9gT9kuMYiwJwj6GVmDCvtwDhD1hT9iXx8VCwp6wNwV3E+joUni2u8t8mQf0M2FfbnYXSRnVoYUdh/LQgT28BAHCnrAn7JcYxVgShH0MrcCEfbkHCHvCnrAvj4uFhD1hbwruJtDRpfBsd5f5Mg/oZ8K+3OwukjKqQws7DuWhA3t4CQKEPWFP2C8xirEkCPsYWoEJ+3IPEPaEPWFfHhcLCXvC3hTcTaCjS+HZ7i7zZR7Qz4R9udldJGVUhxZ2HMpDB/bwEgQIe8KesF9iFGNJEPYxtAIT9uUeIOwJe8K+PC4WEvaEvSm4m0BHl8Kz3V3myzygnwn7crO7SMqoDi3sOJSHDuzhJQgQ9oQ9Yb/EKMaSIOxjaAUm7Ms9QNgT9oR9eVwsJOwJe1NwN4GOLoVnu7vMl3lAPxP25WZ3kZRRHVrYcSgPHdjDSxAg7Al7wn6JUYwlQdjH0ApM2Jd7gLAn7An78rhYSNgT9qbgbgIdXQrPdneZL/OAfibsy83uIimjOrSw41AeOrCHlyBA2BP2hP0SoxhLgrCPoRWYsC/3AGFP2BP25XGxkLAn7E3B3QQ6uhSe7e4yX+YB/UzYl5vdRVJGdWhhx6E8dGAPL0GAsCfsCfslRjGWBGEfQyswYV/uAcKesCfsy+NiIWFP2JuCuwl0dCk8291lvswD+pmwLze7i6SM6tDCjkN56MAeXoIAYU/YE/ZLjGIsCcI+hlZgwr7cA4Q9YU/Yl8fFQsKesDcFdxPo6FJ4trvLfJkH9DNhX252F0kZ1aGFHYfy0IE9vAQBwp6wJ+yXGMVYEoR9DK3AhH25Bwh7wp6wL4+LhYQ9YW8K7ibQ0aXwbHeX+TIP6GfCvtzsLpIyqkMLOw7loQN7eAkChD1hT9gvMYqxJAj7GFqBCftyDxD2hD1hXx4XCwl7wt4U3E2go0vh2e4u82Ue0M+EfbnZXSRlVIcWdhzKQwf28BIECHvCnrBfYhRjSRD2MbQCE/blHiDsCXvCvjwuFhL2hL0puJtAR5fCs91d5ss8oJ8nCfvf+rW3f5rqslRRXSRjmiXVF6/iJmuY6rskD7GfCCSFPc63BP70L3/QDknq7vj1r/xdjMVv/uhXYrFTgUn1FFlxZxF477vfj2z9jXd/HIn7KuhX3vlkLLYZj6EV+A0EUnOYfJ/57772v0Vq+rsf/78jcZNBP/N7X0qGbxf7X//538ZyTvXHb//xn8VyTr2jxxIO/84m76UUk441TLHoGpcL61q5v8/79Rl8i7DvXdBX2XccyuSPQUce/bvwvBMQ9uexfCmSF8knQoT9bbeQeS9Nj/97NwIpUUjYd+sE+c4kkJrD5PsMYf/UMYT97fQQ9rc8kt/3qXsr+R/Gk/dSikfHGqZYdI3LhXWtHGHfu3JvyL7jUCZ/DDry2LY5HzgYYf8AtAcf8SJJ2D/XOoT9g0PlsWUJpEQhYb9sySW2IIHUHCbfZwh7wv65USLsCfs3XbPJeyl1vScdTSpncW8JcGG9O8Jf2Peu30dm33Eokz8GHXls2JYPH4mwfxjd3Q96kSTsCfu7x8YDTQmkRCFh37QhpD2FQGoOk+8zhD1hT9jXrovk930tg/tX+Qv7/v/R5f6q7/0EF9a7voR97/oR9oX6uaQKkBZeQtiPK07yAzd1itTHgH8S57Zi/sI+1cHiziKQEoWE/ayK2rcjgdQcJt9nCHvCnrCv3Tapd/Ta7o+tIuwJ+8c6Z92nuLB1a1PJjLCvUGq2puNQJn/QO/Jo1nLRdAn7KN6b4MkP3NQpUncHYU/Yp3pW3DUIpEQhYb9GfWXRg0BqDpPvM4Q9YU/Y1+6X1Dt6bffHVhH2hP1jnbPuU1zYurWpZEbYVyg1W9NxKJM/6B15NGu5aLqEfRQvYf8MXsKesB83eXaaQSAlCgn7GdW0Z1cCqTkk7Md0hP/R2VvO/g37/rKXsO9fwzG3X59duLA+tfqoTAn73vX7yOw7DiVhv2EjnnQkwv4kkIUwyQ/cwvYPLUndHYQ9Yf9QQ3qoDYGUKCTs27SARBcgkJrD5PuMv7B/ahzCnrB/0zWSekdPXl2EPWGf7K8ZsTu6wRmcVt2TsF+1Mgfy6jiUyR/0jjwOlH+7Rwn7cSVNfuCmTpG6Owh7wj7Vs+KuQSAlCgn7Neorix4EUnOYfJ8h7An756bLX9j3l72Eff8a9vj1G5clFzaOdWInwj5BdXLMjkOZkm6vStGRx+QWWmp7wn5cOZIfuKlTpO4Owp6wT/WsuGsQSIlCwn6N+sqiB4HUHCbfZwh7wp6wr90vqXf02u6PrSLsCfvHOmfdp7iwdWtTyYywr1BqtqbjUCZ/0DvyaNZy0XQJ+yjem+DJD9zUKVJ3B2FP2Kd6Vtw1CKREIWG/Rn1l0YNAag6T7zOEPWFP2Nful9Q7em33x1YR9oT9Y52z7lNc2Lq1qWRG2FcoNVvTcSiTP+gdeTRruWi6hH0UL2H/DF7CnrAfN3l2mkEgJQoJ+xnVtGdXAqk5JOzHdIR/w/6Ws38Sp7/sJez713DM7ddnFy6sT60+KlPCvnf9PjL7jkNJ2G/YiCcdibA/CWQhTPIDt7D9Q0tSdwdhT9g/1JAeakMgJQoJ+zYtINEFCKTmMPk+4y/snxqHsCfs33SNpN7Rk1cXYU/YJ/trRuyObnAGp1X3JOxXrcyBvDoOZfIHvSOPA+Xf7lHCflxJkx+4qVOk7g7CnrBP9ay4axBIiULCfo36yqIHgdQcJt9nCHvC/rnp8hf2/WUvYd+/hj1+/cZlyYWNY53YibBPUJ0cs+NQpqTbq1J05DG5hZbanrAfV47kB27qFKm7g7An7FM9K+4aBFKikLBfo76y6EEgNYfJ9xnCnrAn7Gv3S+odvbb7Y6sIe8L+sc5Z9ykubN3aVDIj7CuUmq3pOJTJH/SOPJq1XDRdwj6K9yZ48gM3dYrU3UHYE/apnhV3DQIpUUjYr1FfWfQgkJrD5PsMYU/YE/a1+yX1jl7b/bFVhD1h/1jnrPsUF7ZubSqZEfYVSs3WdBzK5A96Rx7NWi6aLmEfxUvYP4OXsCfsx02enWYQSIlCwn5GNe3ZlUBqDgn7MR3h37C/5eyfxOkvewn7/jUcc/v12YUL61Orj8qUsO9dv4/MvuNQEvYbNuJJRyLsTwJZCJP8wC1s/9CS1N1B2BP2DzWkh9oQSIlCwr5NC0h0AQKpOUy+z/gL+6fGIewJ+zddI6l39OTVRdgT9sn+mhG7oxucwWnVPQn7VStzIK+OQ5n8Qe/I40D5t3uUsB9X0uQHbuoUqbuDsCfsUz0r7hoEUqKQsF+jvrLoQSA1h8n3GcKesH9uuvyFfX/ZS9j3r2GPX79xWXJh41gndiLsE1Qnx+w4lCnp9qoUHXlMbqGltifsx5Uj+YGbOkXq7iDsCftUz4q7BoGUKCTs16ivLHoQSM1h8n2GsCfsCfva/ZJ6R6/t/tgqwp6wf6xz1n2KC1u3NpXMCPsKpWZrOg5l8ge9I49mLRdNl7CP4r0JnvzATZ0idXcQ9oR9qmfFXYNAShQS9mvUVxY9CKTmMPk+Q9gT9oR97X5JvaPXdn9sFWFP2D/WOes+xYWtW5tKZoR9hVKzNR2HMvmD3pFHs5aLpkvYR/ES9s/gJewJ+3GTZ6cZBFKikLCfUU17diWQmkPCfkxH+Dfsbzn7J3H6y17Cvn8Nx9x+fXbhwvrU6qMyJex71+8js+84lIT9ho140pEIYBitBgAAIABJREFU+5NAFsIkP3AL2z+0JHV3EPaE/UMN6aE2BFKikLBv0wISXYBAag6T7zP+wv6pcQh7wv5N10jqHT15dRH2hH2yv2bE7ugGZ3Badc9fEPaf/cSnf5pKtuOlnWpwLMb9GKRqmJoTcW8J/E//9WdjSP7uH//DWOxU4KQMSuXcMS5hT9h37Fs51wl89evfri++Y2XyY/9LX/j8HZlY+igBEvKW3PvffO9RlJ67g8DX/uJHd6y+b+k7n/nhfQ8UV/+z//V/KK68xrLkX9j/0R98PALxv/m1/zYSNxn0i29/ORb+O9/7Vix2yv8kXUcq5xhkgX+BQLI/4H4iMGpW3iLsb9su1eCjCnrmEKVYvMoxySOZ95l8xfpoAoT9LRfCfsykEPa3nInCMX1nl3EECPtxrLvtRNjfVoywH9PBhP0YzsldCPsk3afYhP0YX5V2NGO6xS5c2JgeSPrMD5+AsH+tnqkGH1XQM9szxSL9Y5DM+0y+YhH2lR4g7CuUjq8h7An7410kwsoECPuVqzM3N8KesJ/RgYT9DOrn7knYn8vzuWiEPWE/ptP22IULG1PHUX6XsCfsn+3o5LAnGzyZ95jxv/Yu/sL+tv6E/Zh5IOwJ+zGdZpdZBAj7WeTX35ewJ+xndClhP4P6uXsS9ufyJOxrPJOuI+loaqez6iiBZH8czW2n50fNCmFP2BP2O90cG5yFsCfsZ7QxYU/Yz+g7e44jQNiPY91tJ8KesJ/Rs4T9DOrn7knYn8uTsK/xTArZURKydlKrHiGQ7I9H8tn1mVGzQtgT9oT9rrdI03MR9oT9jNYl7An7GX1nz3EECPtxrLvtRNgT9jN6lrCfQf3cPQn7c3kS9jWeSSE7SkLWTmrVIwSS/fFIPrs+M2pWCHvCnrDf9RZpei7CnrCf0bqEPWE/o+/sOY4AYT+OdbedCHvCfkbPEvYzqJ+7J2F/Lk/CvsYzKWRHScjaSa16hECyPx7JZ9dnRs0KYU/YE/a73iJNz0XYE/YzWpewJ+xn9J09xxEg7Mex7rYTYU/Yz+hZwn4G9XP3JOzP5UnY13gmhewoCVk7qVWPEEj2xyP57PrMqFkh7Al7wn7XW6TpuQh7wn5G6xL2hP2MvrPnOAKE/TjW3XYi7An7GT1L2M+gfu6ehP25PAn7Gs+kkB0lIWsnteoRAsn+eCSfXZ8ZNSuEPWFP2O96izQ9F2FP2M9oXcKesJ/Rd/YcR4CwH8e6206EPWE/o2cJ+xnUz92TsD+XJ2Ff45kUsqMkZO2kVj1CINkfj+Sz6zOjZoWwJ+wJ+11vkabnIuwJ+xmtS9gT9jP6zp7jCBD241h324mwJ+xn9CxhP4P6uXsS9ufyJOxrPJNCdpSErJ3UqkcIJPvjkXx2fWbUrBD2hD1hv+st0vRchD1hP6N1CXvCfkbf2XMcAcJ+HOtuOxH2hP2MniXsZ1A/d0/C/lyehH2NZ1LIjpKQtZNa9QiBZH88ks+uz4yaFcKesCfsd71Fmp6LsCfsZ7QuYU/Yz+g7e44jQNiPY91tJ8KesJ/Rs4T9DOrn7knYn8uTsK/xTArZURKydlKrHiGQ7I9H8tn1mVGzQtgT9oT9rrdI03MR9oT9jNYl7An7GX1nz3EECPtxrLvtRNgT9jN6lrCfQf3cPQn7c3kS9jWeSSE7SkLWTmrVIwSS/fFIPrs+M2pWCHvCnrDf9RZpei7CnrCf0bqEPWE/o+/sOY4AYT+OdbedCHvCfkbPEvYzqJ+7J2F/Lk/CvsYzKWRHScjaSa16hECyPx7JZ9dnRs0KYU/YE/a73iJNz0XYE/YzWpewJ+xn9J09xxEg7Mex7rYTYU/Yz+hZwn4G9XP3JOzP5UnY13gmhewoCVk7qVWPEEj2xyP57PrMqFkh7Al7wn7XW6TpuQh7wn5G6xL2hP2MvrPnOAKE/TjW3XYi7An7GT1L2M+gfu6ehP25PAn7Gs+kkB0lIWsnteoRAsn+eCSfXZ8ZNSuEPWFP2O96izQ9F2FP2M9oXcKesJ/Rd/YcR4CwH8e6206EPWE/o2cJ+xnUz92TsD+XJ2Ff45kUsqMkZO2kVj1CINkfj+Sz6zOjZoWwJ+wJ+11vkabnIuwJ+xmtS9gT9jP6zp7jCBD241h324mwJ+xn9CxhP4P6uXsS9ufyJOxrPJNCdpSErJ3UqkcIJPvjkXx2fWbUrBD2hD1hv+st0vRchD1hP6N1CXvCfkbf2XMcAcJ+HOtuOxH2hP2MniXsZ1A/d0/C/lyehH2NZ1LIjpKQtZNa9QiBZH88ks+uz4yaFcKesCfsd71Fmp6LsCfsZ7QuYU/Yz+g7e44jQNiPY91tJ8KesJ/Rs4T9DOrn7knYn8uTsK/xTArZURKydlKrHiGQ7I9H8tn1mVGzQtgT9oT9rrdI03MR9oT9jNYl7An7GX1nz3EECPtxrLvtRNgT9jN6lrCfQf3cPQn7c3kS9jWeSSE7SkLWTmrVIwSS/fFIPrs+M2pWosI+VZwknI4NnuSRqmFHzikW4t4SSPbzr/6jz8H9IQI/+usftOORquE7n/lhOxbJhL/0hc8nw4uNwHACKTn2L/7prw4/yxkb/vYf/9kZYYbG+Pf/8p9H9iPsI1g/Muj733xv3GZ2akXgve9+P5bvTz73h7HY3QL/7//iv4+lnPqG4w3GfSvHmkPgYQQ6zkvq7khCT3F+nQVh/1oVU+CTzaLBk3TFHk0g2c8p2Tua0Vn7EfZPJAn7264i7M+aMnFWIUDY31aCsH/iQdiPm1LCfhzrbjsR9mMqRtiP4ZzcJfmtnMxb7DEE+MzenAn7F+qnwXs3+Jjs7ZIkkHwJIexvK0fYE/bPzTJhn7zlxJ5BgLAn7J/rO8J+3EQS9uNYd9uJsB9TMcJ+DOfkLslv5WTeYo8hwGf25kzYE/ZjOnhDzkuAu0ASyZcQwp6wf26E/IX9LRnC/gKX7cWOSNgT9oT9/KEn7OfXYNUMCPsxlSHsx3BO7pL8Vk7mLfYYAoR9b86E/YYiueOl3fEiGTP6dkn2M2FP2BP2tTuGsK9xsqoPAcKesCfs588rYT+/BqtmQNiPqQxhP4Zzcpfkt3Iyb7HHEOjo2Tr2dIozYU/Yj7kpNuS8BLgLJJG8sAl7wp6wr10ihH2Nk1V9CBD2hD1hP39eCfv5NVg1A8J+TGUI+zGck7skv5WTeYs9hkBKJCez79jTKc6E/YYiWYMnrw+xRxNI9jNhT9gT9rWJJuxrnKzqQ4CwJ+wJ+/nzStjPr8GqGRD2YypD2I/hnNwl+a2czFvsMQRSIjmZfceeTnEm7An75KyVY6cavJyAhcsSSF7YhD1hT9jXRp+wr3Gyqg8Bwp6wJ+znzythP78Gq2ZA2I+pDGE/hnNyl+S3cjJvsccQ6OjZOvZ0ijNhT9iPuSk25LwEuAskkbywCXvCnrCvXSKEfY2TVX0IEPaEPWE/f14J+/k1WDUDwn5MZQj7MZyTuyS/lZN5iz2GQEokJ7Pv2NMpzoT9hiJZgyevD7FHE0j2M2FP2BP2tYkm7GucrOpDgLAn7An7+fNK2M+vwaoZEPZjKkPYj+Gc3CX5rZzMW+wxBFIiOZl9x55OcSbsCfvkrJVjpxq8nICFyxJIXtiEPWFP2NdGn7CvcbKqDwHCnrAn7OfPK2E/vwarZkDYj6kMYT+Gc3KX5LdyMm+xxxDo6Nk69nSKM2FP2I+5KTbkvAS4CySRvLAJe8KesK9dIoR9jZNVfQgQ9oQ9YT9/Xgn7+TVYNQPCfkxlCPsxnJO7JL+Vk3mLPYZASiQns+/Y0ynOhP2GIlmDJ68PsUcTSPYzYU/YE/a1iSbsa5ys6kOAsCfsCfv580rYz6/BqhkQ9mMqQ9iP4ZzcJfmtnMxb7DEEUiI5mX3Hnk5xJuwJ++SslWOnGrycgIXLEkhe2IQ9YU/Y10afsK9xsqoPAcKesCfs588rYT+/BqtmQNiPqQxhP4Zzcpfkt3Iyb7HHEOjo2Tr2dIozYU/Yj7kpNuS8BLgLJJG8sAl7wp6wr10ihH2Nk1V9CBD2hD1hP39eCfv5NVg1A8J+TGUI+zGck7skv5WTeYs9hkBKJCez79jTKc6E/YYiWYMnrw+xRxNI9jNhT9gT9rWJJuxrnKzqQ4CwJ+wJ+/nzStjPr8GqGRD2YypD2I/hnNwl+a2czFvsMQRSIjmZfceeTnEm7An75KyVY6cavJyAhcsSSF7YhD1hT9jXRp+wr3Gyqg8Bwp6wJ+znzythP78Gq2ZA2I+pDGE/hnNyl+S3cjJvsccQ6OjZOvZ0ijNhT9iPuSk25LwEuAskkbywCXvCnrCvXSKEfY2TVX0IEPaEPWE/f14J+/k1WDUDwn5MZQj7MZyTuyS/lZN5iz2GQEokJ7Pv2NMpzoT9hiJZgyevD7FHE0j2M2FP2BP2tYkm7GucrOpDgLAn7An7+fNK2M+vwaoZEPZjKkPYj+Gc3CX5rZzMW+wxBFIiOZl9x55OcSbsCfvkrJVjpxq8nICFyxJIXtiEPWFP2NdGn7CvcbKqDwHCnrAn7OfPK2E/vwarZkDYj6kMYT+Gc3KX5LdyMm+xxxDo6Nk69nSKM2FP2I+5KTbkvAS4CySRvLAJe8KesK9dIoR9jZNVfQgQ9oQ9YT9/Xgn7+TVYNQPCfkxlCPsxnJO7JL+Vk3mLPYZASiQns+/Y0ynOhP2GIlmDJ68PsUcTSPYzYU/YE/a1iSbsa5ys6kOAsCfsCfv580rYz6/BqhkQ9mMqQ9iP4ZzcJfmtnMxb7DEEUiI5mX3Hnk5xJuwJ++SslWOnGrycgIXLEkhe2IQ9YU/Y10afsK9xsqoPAcKesCfs588rYT+/BqtmQNiPqQxhP4Zzcpfkt3Iyb7HHEOjo2Tr2dIrzFsI+2eqa5YlukkWqwZO9IfYYAsm+G3MCuyQJ/PpX/i4S/jd/9CuRuOmgxHqasPi7EEjJoK4z+NWvfztS2uR/GH/nMz+M5Nyxhr/9x38WYfEq6L//l/88Fvszv/elSGz/ISCCVdANCaR+C1+h+tO//MGGxB4/km/ax9l58loEUm4wOYOjcn7rs5/49E+v1Q5vPm2yqCnOo5rlzPxTOZ+Zo1hzCHScwTmkrrkrYX9b946i6Zqd69SzCaQkRdcZJOyfOrJjDQn72xuFsJ99w9q/C4HUbyFh/4sd4Ju2y1TIczaBlBtMzuConAn717ozWdTUIIxqljPzT+V8Zo5izSHQcQbnkLrmroQ9YX/NznfqowRSkqKj7H3FkrAn7J+bKX9hf/S28TwC6xJI/RYS9oT9ul0vs9UJpNxg0iuNypmwJ+yfnd+ODb76ZSS/lwkk++7l3a1YnQBhT9iv3qPyW5NASlIQ9rf19k/ijOl/f2F/y9lf2I/pO7v0J5D6LSTsCfv+0+EEswiMkt9nnm9UzoQ9YU/Ynzm5Yh0mQNgfRrh1AMKesN+6wR0uRiAlKQh7wj7WtG8ITNgT9jP6zp79CaR+Cwl7wr7/dDjBLAKj5PeZ5xuVM2FP2BP2Z06uWIcJEPaHEW4dgLAn7LducIeLEUhJCsKesI81LWFfRusv7MuoLLw4gdRvIWFP2F98tBz/AIFR8vtAir/w6KicCXvCnrA/c3LFOkyAsD+McOsAhD1hv3WDO1yMQEpSEPaEfaxpCfsyWsK+jMrCixNI/RYS9oT9xUfL8Q8QGCW/D6RI2J8J70isjrJQgx+puGdXI9BxBldjuHM+hD1hv3N/O1uOQEpSEPaEfa5rn4/sn8S5ZUPYz+hCe3YkkPotJOwJ+47zIOc1CPCZT3V43YX5C/vXerSjLNTga1w0sjiHQMcZPOfkolQIEPaEfaVPrEHgdQIpSUHYE/Yzpo2wJ+xn9J09+xNI/RYS9oR9/+lwglkE+EzCvtx7HWWhBi+X18IGBDrOYAOs26RI2BP22zSzgwwlkJIUhD1hP7SRf7YZYU/Yz+g7e/YnkPotJOwJ+/7T4QSzCPCZhH259zrKQg1eLq+FDQh0nMEGWLdJkbAn7LdpZgcZSiAlKQh7wn5oIxP2H4nbP4kzowvt2ZFA6reQsCfsO86DnNcgwGcS9uVO7CgLNXi5vBY2INBxBhtg3SZFwp6w36aZHWQogZSkIOwJ+6GNTNgT9jMazp7bEEj9FhL2hP02Q+IgwwnwmYR9uek6ykINXi6vhQ0IdJzBBli3SZGwJ+y3aWYHGUogJSkIe8J+aCMT9oT9jIaz5zYEUr+FhD1hv82QOMhwAnwmYV9uuo6yUIOXy2thAwIdZ7AB1m1SJOwJ+22a2UGGEkhJCsKesB/ayIQ9YT+j4ey5DYHUbyFhT9hvMyQOMpwAn0nYl5uuoyzU4OXyWtiAQMcZbIB1mxQJe8J+m2Z2kKEEUpKCsCfshzYyYU/Yz2g4e25DIPVbSNgT9tsMiYMMJ8BnEvblpusoCzV4ubwWNiDQcQYbYN0mRcKesN+mmR1kKIGUpCDsCfuhjUzYE/YzGs6e2xBI/RYS9oT9NkPiIMMJ8JmEfbnpOspCDV4ur4UNCHScwQZYt0mRsCfst2lmBxlKICUpCHvCfmgjE/aE/YyGs+c2BFK/hYQ9Yb/NkDjIcAJ8JmFfbrqOslCDl8trYQMCHWewAdZtUiTsCfttmtlBhhJISQrCnrAf2siEPWE/o+HsuQ2B1G8hYU/YbzMkDjKcAJ9J2JebrqMs1ODl8lrYgEDHGWyAdZsUCXvCfptmdpChBFKSgrAn7Ic2MmFP2M9oOHtuQyD1W0jYE/bbDImDDCfAZxL25abrKAs1eLm8FjYg0HEGG2DdJkXCnrDfppkdZCiBlKQg7An7oY1M2BP2MxrOntsQSP0WEvaE/TZD4iDDCfCZhH256TrKQg1eLq+FDQh0nMEGWLdJkbAn7LdpZgcZSiAlKQh7wn5oIxP2hP2MhrPnNgRSv4WEPWG/zZA4yHACfCZhX266jrJQg5fLa2EDAh1nsAHWbVIk7An7bZrZQYYSSEkKwp6wH9rIhD1hP6Ph7LkNgdRvIWFP2G8zJA4ynACfOUnYp8RbqqCvMKVyHt71i2+YrOHiR5feCwSSM/iVdz4Z4//u+5+KxP7RX/8gErdrUMKesO/au6PzTn6Ujz6L/foQ6PofMPoQ/vtMf/uP/yyWcvI97P/6q/85kvf733wvEldQBHYjkHw3+NO/9M3y4X5J3qW79aXzrE+Av7utUWq+X+f81mc/8emfptpj1CHOzD+V85k57hDLwO9QxcwZkjNI2GdqNjIqYU/Yj+y3znslP8o7c5F7lgBhn+X7X6IT9recCfsxfWeX/gSS7waE/Rih178LnaAjAf5uzHwT9i9MR1IWdhzMVM4GPkW2f9zkDBL2/fuDsCfs+3fxmBMkP8rHnMAuHQkQ9mOqRtgT9mM6zS67EUi+GxD2Y4Tebj3pPD0I8Hdj5puwJ+yXuBEM/BJlWDIJwv62LP5JnFsehD1hv+TFtWBSyY/yBY8rpUUIEPZjCkHYE/ZjOs0uuxFIvhsQ9mOE3m496Tw9CPB3Y+absCfsl7gRDPwSZVgyCcKesH9TYxL2hP2SF9eCSSU/yhc8rpQWIUDYjykEYU/Yj+k0u+xGIPluQNiPEXq79aTz9CDA342Zb8KesF/iRjDwS5RhySQIe8KesK+PJjlWZ3W1lcmP8quxdN46AXdSndWRlYQ9YX+kfzx7XQLJdwPCfozQu273OvlMAvzdmPkm7An7mXP+870N/BJlWDIJwp6wJ+zro0mO1VldbWXyo/xqLJ23TsCdVGd1ZCVhT9gf6R/PXpdA8t2AsB8j9K7bvU4+kwB/N2a+CXvCfuacE/ZL0F87CcKesCfs6zNKjtVZXW1l8qP8aiydt07AnVRndWQlYU/YH+kfz16XQPLdgLAfI/Su271OPpMAYT9mvgl7wn7mnBP2S9BfOwnCnrAn7OszSo7VWV1tZfKj/GosnbdOwJ1UZ3VkJWFP2B/pH89el0Dy3YCwHyP0rtu9Tj6TAGE/Zr4Je8J+5pwT9kvQXzsJwp6wJ+zrM0qO1VldbWXyo/xqLJ23TsCdVGd1ZCVhT9gf6R/PXpdA8t2AsB8j9K7bvU4+kwBhP2a+CXvCfuacE/ZL0F87CcKesCfs6zNKjtVZXW1l8qP8aiydt07AnVRndWQlYU/YH+kfz16XQPLdgLAfI/Su271OPpMAYT9mvgl7wn7mnBP2S9BfOwnCnrAn7OszSo7VWV1tZfKj/GosnbdOwJ1UZ3VkJWFP2B/pH89el0Dy3YCwHyP0rtu9Tj6TAGE/Zr4Je8J+5pwT9kvQXzsJwp6wJ+zrM0qO1VldbWXyo/xqLJ23TsCdVGd1ZCVhT9gf6R/PXpdA8t2AsB8j9K7bvU4+kwBhP2a+CXvCfuacE/ZL0F87CcKesCfs6zNKjtVZXW1l8qP8aiydt07AnVRndWQlYU/YH+kfz16XQPLdgLAfI/Su271OPpMAYT9mvgl7wn7mnBP2S9BfOwnCnrAn7OszSo7VWV1tZfKj/GosnbdOwJ1UZ3VkJWFP2B/pH89el0Dy3YCwHyP0rtu9Tj6TAGE/Zr4Je8J+5pwT9kvQXzsJwp6wJ+zrM0qO1VldbWXyo/xqLJ23TsCdVGd1ZCVhT9gf6R/PXpdA8t2AsB8j9K7bvU4+kwBhP2a+CXvCfuacE/ZL0F87CcKesCfs6zNKjtVZXW1l8qP8aiydt07AnVRndWQlYU/YH+kfz16XQPLdgLAfI/Su271OPpMAYT9mvgl7wn7mnBP2S9BfOwnCnrAn7OszSo7VWV1tZfKj/GosnbdOwJ1UZ3VkJWFP2B/pH89el0Dy3YCwHyP0rtu9Tj6TAGE/Zr4Je8J+5pwT9kvQXzsJwp6wJ+zrM0qO1VldbWXyo/xqLJ23TsCdVGd1ZCVhT9gf6R/PXpdA8t2AsB8j9K7bvU4+kwBhP2a+CXvCfuacE/ZL0F87CcKesCfs6zNKjtVZXW1l8qP8aiydt07AnVRndWQlYU/YH+kfz16XQPLdgLAfI/Su271OPpMAYT9mvgl7wn7mnBP2S9BfOwnCnrAn7OszSo7VWV1tZfKj/GosnbdOwJ1UZ3VkJWFP2B/pH89el0Dy3YCwHyP0rtu9Tj6TAGE/Zr4Je8J+5pwT9kvQXzsJwp6wJ+zrM0qO1VldbWXyo/xqLJ23TsCdVGd1ZCVhT9gf6R/PXpdA8t2AsB8j9K7bvU4+kwBhP2a+CXvCfuacE/ZL0F87CcKesCfs6zNKjtVZXW1l8qP8aiydt07AnVRndWQlYU/YH+kfz16XQPLdgLAfI/Su271OPpMAYT9mvn9B2P/Wr73905mFt/e6BAzlurXZObOksN+Z21XO9pV3PnmVozonAgggECNArMfQCozAdAKf+b0vTc9hpQTe/+Z7K6UzNZeOwv5Pfv9zMWYd/yNDx2/lpFfqyCPW0B8ETrJO5i323xN4vZ/fIuy1xnMEDLvemEHAj+4M6n32JOz71EqmCCCwLgHCft3ayAyBowQI+1uChP0TD8L+tjcI+6O3Te35pFfiDm5rkGRdq7ZVRwgQ9kfoXexZw36xgi9yXD+6ixRi0TQI+0ULIy0EEGhFgLBvVS7JInAXAcKesH+uYQh7wv6uy+SkxUmvxB0Q9ie16RJhCPslytAjieTF2oOALGcQ8KM7g3qfPQn7PrWSKQIIrEuAsF+3NjJD4CgBwp6wJ+xrU+Qv7Gucjq5KeiXugLA/2p8rPU/Yr1SNxXNJXqyLH116Ewn40Z0Iv8HWhH2DIkkRAQSWJ0DYL18iCSLwMAHCnrAn7GvjQ9jXOB1dlfRK3AFhf7Q/V3qesF+pGovnkrxYFz+69CYS8KM7EX6DrQn7BkWSIgIILE+AsF++RBJE4GEChD1hT9jXxoewr3E6uirplbgDwv5of670PGG/UjUWzyV5sS5+dOlNJOBHdyL8BlsT9g2KJEUEEFieAGG/fIkkiMDDBAh7wp6wr40PYV/jdHRV0itxB4T90f5c6XnCfqVqLJ5L8mJd/OjSm0jAj+5E+A22JuwbFEmKCCCwPAHCfvkSSRCBhwkQ9oQ9YV8bH8K+xunoqqRX4g4I+6P9udLzhP1K1Vg8l+TFuvjRpTeRgB/difAbbE3YNyiSFBFAYHkChP3yJZIgAg8TIOwJe8K+Nj6EfY3T0VVJr8QdEPZH+3Ol5wn7laqxeC7Ji3Xxo0tvIgE/uhPhN9iasG9QJCkigMDyBAj75UskQQQeJkDYE/aEfW18CPsap6Orkl6JOyDsj/bnSs8T9itVY/Fckhfr4keX3kQCfnQnwm+wNWHfoEhSRACB5QkQ9suXSIIIPEyAsCfsCfva+BD2NU5HVyW9EndA2B/tz5WeJ+xXqsbiuSQv1sWPLr2JBPzoToTfYGvCvkGRpIgAAssTIOyXL5EEEXiYAGFP2BP2tfEh7Gucjq5KeiXugLA/2p8rPU/Yr1SNxXNJXqyLH116Ewn40Z0Iv8HWhH2DIkkRAQSWJ0DYL18iCSLwMAHCnrAn7GvjQ9jXOB1dlfRK3AFhf7Q/V3qesF+pGovnkrxYFz+69CYS8KM7EX6DrQn7BkWSIgIILE+AsF++RBJE4GEChD1hT9jXxoewr3E6uirplbgDwv5of670PGG/UjUWzyV5sS5+dOlNJOBHdyL8BlsT9g2KJEUEEFieAGG/fIkkiMDDBAh7wp6wr40PYV/jdHRV0itxB4T90f5c6XnCfqVqLJ5L8mJd/OjSm0jAj+5E+A22JuwbFEmKCCCwPAHCfvkSSRCBhwkQ9oQ9YV8bH8K+xunoqqRX4g4I+6P9udLzhP1K1Vg8l+TFuvjRpTeRgB/difAbbE3YNyiSFBFAYHkChP3yJZIgAg8TIOwJe8K+Nj6EfY3T0VVJr8QdEPZH+3Ol5wn7laqxeC7Ji3Xxo0tvIgE/uhPhN9iasG9QJCkigMDyBAj75UskQQQeJkDYE/aEfW18CPsap6Orkl6JOyDsj/bnSs8T9ivDo3e1AAAgAElEQVRVY/Fckhfr4keX3kQCfnQnwm+wNWHfoEhSRACB5QkQ9suXSIIIPEyAsCfsCfva+BD2NU5HVyW9EndA2B/tz5WeJ+xXqsbiuSQv1sWPLr2JBPzoToTfYGvCvkGRpIgAAssTIOyXL5EEEXiYAGFP2BP2tfEh7Gucjq5KeiXugLA/2p8rPU/Yr1SNxXNJXqyLH116Ewn40Z0Iv8HWhH2DIkkRAQSWJ0DYL18iCSLwMAHCnrAn7GvjQ9jXOB1dlfRK3AFhf7Q/V3qesF+pGovnkrxYFz+69CYS8KM7EX6DrQn7BkWSIgIILE+AsF++RBJE4GEChD1hT9jXxoewr3E6uirplbgDwv5of670PGG/UjUWzyV5sS5+dOlNJOBHdyL8BlsT9g2KJEUEEFieAGG/fIkkiMDDBAh7wp6wr40PYV/jdHRV0itxB4T90f5c6fkthH1y4FPFcpGkyP5i3I79MY7O+jt98e0vx5J85zM/jMVOBX73/U+lQn/sR3/9g1jsVGDCPkVW3BkEukrT9777/Rm47Hkiga69dyICoRDYlgBhT9g/19xf/fq3Y32fekdP/l4leaRAJ11Hyll1zDlVv3TcJOt07uL/IoG3fuvX3v5pNzAdmzB1+XWr3Yh8O/bHCC5d9iDsbytF2N/ySH0MdJkPee5FIPkRmiRF2CfpjondtffG0LELAr0JEPaEPWFfm2HC/pZTylkl/Uwq51oHrbcqyXq90+6fEWE/qMYukkGgP9jGJTWOdWInwp6wf1NfEfaJqRNzFoGu0pSwn9Ux5+3btffOIyASAvsSIOwJe8K+Nt+EPWFf65Q+q7iwPrWqZErYVyidsIawPwFiMYRLqghq0WWEPWFP2C86nNI6nUBXaUrYn94KwwN27b3hoGyIQEMChD1hT9jXBpewJ+xrndJnFRfWp1aVTAn7CqUT1hD2J0AshnBJFUEtuoywJ+wJ+0WHU1qnE+gqTQn701theMCuvTcclA0RaEiAsCfsCfva4BL2hH2tU/qs4sL61KqSKWFfoXTCGsL+BIjFEC6pIqhFlxH2hD1hv+hwSut0Al2lKWF/eisMD9i194aDsiECDQkQ9oQ9YV8bXMKesK91Sp9VXFifWlUyJewrlE5YQ9ifALEYwiVVBLXoMsKesCfsFx1OaZ1OoKs0JexPb4XhAbv23nBQNkSgIQHCnrAn7GuDS9gT9rVO6bOKC+tTq0qmhH2F0glrCPsTIBZDuKSKoBZdRtgT9oT9osMprdMJdJWmhP3prTA8YNfeGw7Khgg0JEDYE/aEfW1wCXvCvtYpfVZxYX1qVcmUsK9QOmENYX8CxGIIl1QR1KLLCHvCnrBfdDildTqBrtKUsD+9FYYH7Np7w0HZEIGGBAh7wp6wrw0uYU/Y1zqlzyourE+tKpkS9hVKJ6wh7E+AWAzhkiqCWnQZYU/YE/aLDqe0TifQVZoS9qe3wvCAXXtvOCgbItCQAGFP2BP2tcEl7An7Wqf0WcWF9alVJVPCvkLphDWE/QkQiyFcUkVQiy4j7Al7wn7R4ZTW6QS6SlPC/vRWGB6wa+8NB2VDBBoSIOwJe8K+NriEPWFf65Q+q7iwPrWqZErYVyidsIawPwFiMYRLqghq0WWEPWFP2C86nNI6nUBXaUrYn94KwwN27b3hoGyIQEMChD1hT9jXBpewJ+xrndJnFRfWp1aVTAn7CqUT1hD2J0AshnBJFUEtuoywJ+wJ+0WHU1qnE+gqTQn701theMCuvTcclA0RaEiAsCfsCfva4BL2hH2tU/qs4sL61KqSKWFfoXTCGsL+BIjFEC6pIqhFlxH2hD1hv+hwSut0Al2lKWF/eisMD9i194aDsiECDQkQ9oQ9YV8bXMKesK91Sp9VXFifWlUyJewrlE5YQ9ifALEYwiVVBLXoMsKesCfsFx1OaZ1OoKs0JexPb4XhAbv23nBQNkSgIQHCnrAn7GuDS9gT9rVO6bOKC+tTq0qmhH2F0glrCPsTIBZDuKSKoBZdRtgT9oT9osMprdMJdJWmhP3prTA8YNfeGw7Khgg0JEDYE/aEfW1wCXvCvtYpfVZxYX1qVcmUsK9QOmENYX8CxGIIl1QR1KLLCHvCnrBfdDildTqBrtKUsD+9FYYH7Np7w0HZEIGGBAh7wp6wrw0uYU/Y1zqlzyourE+tKpkS9hVKJ6wh7E+AWAzhkiqCWnQZYU/YE/aLDqe0TifQVZoS9qe3wvCAXXtvOCgbItCQAGFP2BP2tcEl7An7Wqf0WcWF9alVJVPCvkLphDWE/QkQiyFcUkVQiy4j7Al7wn7R4ZTW6QS6SlPC/vRWGB6wa+8NB2VDBBoSIOwJe8K+NriEPWFf65Q+q7iwPrWqZErYVyidsIawPwFiMYRLqghq0WWEPWFP2C86nNI6nUBXaUrYn94KwwN27b3hoGyIQEMChD1hT9jXBpewJ+xrndJnFRfWp1aVTAn7CqUT1hD2J0AshnBJFUEtuoywJ+wJ+0WHU1qnE+gqTQn701theMCuvTcclA0RaEiAsCfsCfva4BL2hH2tU/qs4sL61KqSKWFfoXTCGsL+BIjFEC6pIqhFlxH2hD1hv+hwSut0Al2lKWF/eisMD9i194aDsiECDQkQ9oQ9YV8bXMKesK91Sp9VXFifWlUyjQp7zfJUgqSwT3HumHOl6a25LoE/+f3PXffwH3Hyb7z74wiPX//K30Xivgr6mz/6lVhsgRF4jgC5OaY3/IeAMZxf7ZLq6Y41TLEYV007IXBLgLAn7J+bieQd3fEu7Sjs3XcIvIlAyg2iPocAYT+Ie0f53THnQeW0TVMChP1t4Qj7po0s7eEEOn6EDod0woZJkXBCeluFSPV0xxqmWGzVMA7TigBhT9gT9rWRJexrnKzqQ4Cw71OrSqaEfYXSCWs6yu+OOZ9QKiE2JkDYE/Ybt7ejBQkQekG4HwrdUfaOIXP+Lqme7ljDFIvzqyYiAjUChD1hT9jXZoWwr3Gyqg8Bwr5PrSqZEvYVSies6Si/O+Z8QqmE2JgAYU/Yb9zejhYkQOgF4RL2Y+C+tkuqpwn7KeW0KQI3BAh7wp6wr10KhH2Nk1V9CBD2fWpVyZSwr1A6YU1H+d0x5xNKJcTGBAh7wn7j9na0IIGU3Aym3DJ0R9nbEvQHSad6umMNUyy69oa8+xMg7Al7wr42x4R9jZNVfQgQ9n1qVcmUsK9QOmFNR/ndMecTSiXExgQIe8J+4/Z2tCABQi8I90OhO8reMWTO3yXV0x1rmGJxftVERKBGgLAn7An72qwQ9jVOVvUhQNj3qVUlU8K+QumENR3ld8ecTyiVEBsTIOwJ+43b29GCBAi9IFzCfgzc13ZJ9TRhP6WcNkXghgBhT9gT9rVLgbCvcbKqDwHCvk+tKpkS9hVKJ6zpKL875nxCqYTYmABhT9hv3N6OFiSQkpvBlFuG7ih7W4L+IOlUT3esYYpF196Qd38ChD1hT9jX5piwr3Gyqg8Bwr5PrSqZEvYVSies6Si/O+Z8QqmE2JgAYU/Yb9zejhYkQOgF4X4odEfZO4bM+bukerpjDVMszq+aiAjUCBD2hD1hX5sVwr7Gyao+BAj7PrWqZErYVyidsKaj/O6Y8wmlEmJjAoQ9Yb9xeztakAChF4RL2I+B+9ouqZ4m7KeU06YI3BAg7Al7wr52KRD2NU5W9SFA2PepVSVTwr5C6YQ1HeV3x5xPKJUQGxMg7An7jdvb0YIEUnIzmHLL0B1lb0vQHySd6umONUyx6Nob8u5PgLAn7An72hwT9jVOVvUhQNj3qVUlU8K+QumENR3ld8ecTyiVEBsTIOwJ+43b29GCBAi9INwPhe4oe8eQOX+XVE93rGGKxflVExGBGgHCnrAn7GuzQtjXOFnVhwBh36dWlUwJ+wqlE9Z0lN8dcz6hVEJsTICwJ+w3bm9HCxIg9IJwCfsxcF/bJdXThP2UctoUgRsChD1hT9jXLgXCvsbJqj4ECPs+tapkSthXKJ2wpqP87pjzCaUSYmMChD1hv3F7O1qQQEpuBlNuGbqj7G0J+oOkUz3dsYYpFl17Q979CRD2hD1hX5tjwr7Gyao+BAj7PrWqZErYVyidsKaj/O6Y8wmlEmJjAoQ9Yb9xeztakAChF4T7odAdZe8YMufvkurpjjVMsTi/aiIiUCNA2BP2hH1tVgj7Gier+hAg7PvUqpIpYV+hdMKajvK7Y84nlEqIjQkQ9oT9xu3taEEChF4QLmE/Bu5ru6R6mrCfUk6bInBDgLAn7An72qVA2Nc4WdWHAGHfp1aVTAn7CqUT1nSU3x1zPqFUQmxMgLAn7Ddub0cLEkjJzWDKLUN3lL0tQX+QdKqnO9YwxaJrb8i7PwHCnrAn7GtzTNjXOFnVhwBh36dWlUwJ+wqlE9Z0lN8dcz6hVEJsTICwJ+w3bm9HCxIg9IJwPxS6o+wdQ+b8XVI93bGGKRbnV01EBGoECHvCnrCvzQphX+NkVR8ChH2fWlUyJewrlE5Y01F+d8z5hFIJsTEBwp6w37i9HS1IgNALwiXsx8B9bZdUTxP2U8ppUwRuCBD2hD1hX7sUCPsaJ6v6ECDs+9SqkilhX6F0wpqO8rtjzieUSoiNCRD2hP3G7e1oQQIpuRlMuWXojrK3JegPkk71dMcaplh07Q159ydA2BP2hH1tjgn7Gier+hAg7PvUqpIpYV+hdMKajvK7Y84nlEqIjQkQ9oT9xu3taEEChF4Q7odCd5S9Y8icv0uqpzvWMMXi/KqJiECNAGFP2BP2tVkh7GucrOpDgLDvU6tKpoR9hdIJazrK7445n1AqITYmQNgT9hu3t6MFCRB6QbiE/Ri4r+2S6mnCfko5bYrADQHCnrAn7GuXAmFf42RVHwKEfZ9aVTIl7CuUTljTUX53zPmEUgmxMQHCnrDfuL0dLUggJTeDKbcM3VH2tgT9QdKpnu5YwxSLrr0h7/4ECHvCnrCvzTFhX+NkVR8ChH2fWlUyfeuzn/j0TysLH1mTFL6P5FN5JtXgWNzS78ij0j+Prkn13aP5eO4aBFJz+JV3PnkNgE55GQKE3m2pSdnLtL6DIoBAQwKEPWHfsG2npEzYT8F+6qYdPUrqG/wV2I48Tm2IzYIR9q8VNNXgyaFM9WSKxat8O/JIcXaxJsmK/SYCqTkk7PXdbgQIe8J+t552HgQQ2JcAYU/Y79vd556MsD+X54xoSWeVOk/qG5xXSlVsXlzCnrB/tvuSl1/ykpo3To/vnGT9eFae3J1Aag4J+90753rnI+wJ++t1vRMjgEBXAoQ9Yd+1d0fnTdiPJn7+fh09SuobnLA/v79mRyTsCXvCfvYUfrB/xx+aBbBJ4SCB1MsCYX+wMB5fjgBhT9gv15QSQgABBJ4hQNgT9oajRoCwr3FaeVVHj5L6BifsV+7Ux3Ij7Al7wv6x2Tn1qY4/NKcCEGwKgdTLAmE/pZw2DRIg7An7YHsJjQACCJxKgLAn7E9tqI2DEfb9i9vRo6S+wQn7/v38+gkIe8KesF9grjv+0CyATQoHCaReFgj7g4Xx+HIECHvCfrmmlBACCCDwDAHCnrA3HDUChH2N08qrOnqU1Dc4Yb9ypz6WG2FP2BP2j83OqU91/KE5FYBgUwikXhYI+ynltGmQAGFP2AfbS2gEEEDgVAKEPWF/akNtHIyw71/cjh4l9Q1O2Pfv59dPQNgT9oT9AnPd8YdmAWxSOEgg9bJA2B8sjMeXI0DYE/bLNaWEEEAAgWcIEPaEveGoESDsa5xWXtXRo6S+wQn7lTv1sdwIe8KesH9sdk59quMPzakABJtCIPWyQNhPKadNgwQIe8I+2F5CI4AAAqcSIOwJ+1MbauNghH3/4nb0KKlvcMK+fz+/fgLCnrAn7BeY644/NAtgk8JBAqmXBcL+YGE8vhwBwp6wX64pJYQAAgg8Q4CwJ+wNR40AYV/jtPKqjh4l9Q1O2K/cqY/lRtgT9oT9Y7Nz6lMdf2hOBSDYFAKplwXCfko5bRokQNgT9sH2EhoBBBA4lQBhT9if2lAbByPs+xe3o0dJfYMT9v37+fUTEPaEPWG/wFx3/KFZAJsUDhJIvSwQ9gcL4/HlCBD2hP1yTSkhBBBA4BkChD1hbzhqBAj7GqeVV3X0KKlvcMJ+5U59LDfCnrAn7B+bnVOf6vhDcyoAwaYQSL0sEPZTymnTIAHCnrAPtpfQCCCAwKkECHvC/tSG2jgYYd+/uB09SuobnLDv38+vn4CwJ+wJ+wXmuuMPzQLYpHCQQOplgbA/WBiPL0eAsCfsl2tKCSGAAALPECDsCXvDUSNA2Nc4rbyqo0dJfYMT9it36mO5EfaEPWH/2Oyc+lTHH5pTAQg2hUDqZYGwn1JOmwYJEPaEfbC9hEYAAQROJUDYE/anNtTGwQj7/sXt6FFS3+CEff9+fv0EhD1hT9gvMNcdf2gWwCaFgwRSLwuE/cHCeHw5AoQ9Yb9cU0oIAQQQeIYAYU/YG44aAcK+xmnlVR09SuobnLBfuVMfy42wJ+wJ+8dm59SnOv7QnApAsCkEUi8LhP2Ucto0SICwJ+yD7SU0AgggcCoBwp6wP7WhNg5G2PcvbkePkvoGJ+z79/PrJyDsCXvCfoG57vhDswA2KRwkkHpZIOwPFsbjyxEg7An75ZpSQggggMAzBAh7wt5w1AgQ9jVOK6/q6FFS3+CE/cqd+lhuhD1hT9g/NjunPtXxh+ZUAIJNIZB6WSDsp5TTpkEChD1hH2wvoRFAAIFTCRD2hP2pDbVxMMK+f3E7epTUNzhh37+fXz8BYU/YE/YLzHXHH5oFsEnhIIHUywJhf7AwHl+OAGFP2C/XlBJCAAEEniFA2BP2hqNGgLCvcVp5VUePkvoGJ+xX7tTHciPsCXvC/rHZOfWpjj80pwIQbAqB1MsCYT+lnDYNEiDsCftgewmNAAIInEqAsCfsT22ojYMR9v2L29GjpL7BCfv+/fz6CQh7wp6wX2CuO/7QLIBNCgcJpF4WCPuDhfH4cgQIe8J+uaaUEAIIIPAMAcKesDccNQKEfY3Tyqs6epTUNzhhv3KnPpZbVNg/ltLLTyUb/OXdr7Oi4+V3neo4KQLHCaTuUsL+eG1EuJ8Aqd5fqt9f9flPfOGt34gl8UtvfzwWW2AEEEDgXgJd/0PA+998796jTl//3ne/H8nBu9ItVsI+0ma/EDTplVLfs8mcx1C3yw4ECPsdqhg6g0sqBFZYBBYhkHrBIewXKfDF0vARStjPaHnCfgZ1eyKAwAwChP046oT9GNaE/RjOSa+U+p5N5jyGul12IEDY71DF0BlcUiGwwiKwCIHUCw5hv0iBL5YGYU/Yz2h5wn4GdXsigMAMAoT9OOqE/RjWhP0YzkmvlPqeTeY8hrpddiBA2O9QxdAZXFIhsMIisAiB1AsOYb9IgS+WBmFP2M9oecJ+BnV7IoDADAKE/TjqhP0Y1oT9GM5Jr5T6nk3mPIa6XXYgQNjvUMXQGVxSIbDCIrAIgdQLDmG/SIEvlgZhT9jPaHnCfgZ1eyKAwAwChP046oT9GNaE/RjOSa+U+p5N5jyGul12IEDY71DF0BlcUiGwwiKwCIHUCw5hv0iBL5YGYU/Yz2h5wn4GdXsigMAMAoT9OOqE/RjWhP0YzkmvlPqeTeY8hrpddiBA2O9QxdAZXFIhsMIisAiB1AsOYb9IgS+WBmFP2M9oecJ+BnV7IoDADAKE/TjqhP0Y1oT9GM5Jr5T6nk3mPIa6XXYgQNjvUMXQGVxSIbDCIrAIgdQLDmG/SIEvlgZhT9jPaHnCfgZ1eyKAwAwChP046oT9GNaE/RjOSa+U+p5N5jyGul12IEDY71DF0BlcUiGwwiKwCIHUCw5hv0iBL5YGYU/Yz2h5wn4GdXsigMAMAoT9OOqE/RjWhP0YzkmvlPqeTeY8hrpddiBA2O9QxdAZXFIhsMIisAiB1AsOYb9IgS+WBmFP2M9oecJ+BnV7IoDADAKE/TjqhP0Y1oT9GM5Jr5T6nk3mPIa6XXYgQNjvUMXQGVxSIbDCIrAIgdQLDmG/SIEvlgZhT9jPaHnCfgZ1eyKAwAwChP046oT9GNaE/RjOSa+U+p5N5jyGul12IEDY71DF0BlcUiGwwiKwCIHUCw5hv0iBL5YGYU/Yz2h5wn4GdXsigMAMAoT9OOqE/RjWhP0YzkmvlPqeTeY8hrpddiBA2O9QxdAZXFIhsMIisAiB1AsOYb9IgS+WBmFP2M9oecJ+BnV7IoDADAKE/TjqhP0Y1oT9GM5Jr5T6nk3mPIa6XXYgQNjvUMXQGVxSIbDCIrAIgdQLDmG/SIEvlgZhT9jPaHnCfgZ1eyKAwAwChP046oT9GNaE/RjOSa+U+p5N5jyGul12IEDY71DF0BlcUiGwwiKwCIHUCw5hv0iBL5YGYU/Yz2h5wn4GdXsigMAMAoT9OOqE/RjWhP0YzkmvlPqeTeY8hrpddiBA2O9QxdAZXFIhsMIisAiB1AsOYb9IgS+WBmFP2M9oecJ+BnV7IoDADAKE/TjqhP0Y1oT9GM5Jr5T6nk3mPIa6XXYgQNjvUMXQGVxSIbDCIrAIgdQLDmG/SIEvlgZhT9jPaHnCfgZ1eyKAwAwChP046oT9GNaE/RjOSa+U+p5N5jyGul12IEDY71DF0BlcUiGwwiKwCIHUCw5hv0iBL5YGYU/Yz2h5wn4GdXsigMAMAoT9OOqE/RjWhP0YzkmvlPqeTeY8hrpddiBA2O9QxdAZXFIhsMIisAiB1AsOYb9IgS+WBmFP2M9oecJ+BnV7IoDADAKE/TjqhP0Y1oT9GM5Jr5T6nk3mPIa6XXYgQNjvUMXQGVxSIbDCIrAIgdQLDmG/SIEvlgZhT9jPaHnCfgZ1eyKAwAwChP046oT9GNaE/RjOSa+U+p5N5jyGul12IEDY71DF0BlcUiGwwiKwCIHUCw5hv0iBL5YGYU/Yz2h5wn4GdXsigMAMAoT9OOqE/RjWhP0YzkmvlPqeTeY8hrpddiBA2O9QxdAZXFIhsMIisAiB1AsOYb9IgS+WBmFP2M9oecJ+BnV7IoDADAKE/TjqhP0Y1oT9GM5Jr5T6nk3mPIa6XXYgQNjvUMXQGVxSIbDCIrAIgdQLDmG/SIEvlgZhT9jPaHnCfgZ1eyKAwAwChP046oT9GNaE/RjOSa+U+p5N5jyGul12IBAV9qnhSYLvOJgpzh1ZJHtD7FsC+q5/R6RqSNj3743kCYj1JN2n2KmP/Vc7vPv+pyKHeOczP4zEFfQXCZhDXYEAAvcSIOzvJWb9GQSS7zPfePfHZ6QoxkQCnNVE+LaOEyDsX0PcceBT0q0ji/jE2ODnBPRd/2ZI1ZCw798byRMQhUm6hP0Yuv13MYf9a+gECIwmQNiPJm6/VwQIe33wJgKclf7YmQBhT9g/298uv51H//jZUrJX3x2vTTVCqoaEfbUC11xHFI6pe/ID11/Yj6lhchdzmKQrNgJ7EiDs96zr6qdKvs/4C/vVq/9yftzBy4ys6EuAsCfsCfu+8zs185Ts9aM7rqypGhL242rYcSeicEzVkh+4hP2YGiZ3MYdJumIjsCcBwn7Puq5+quT7DGG/evVfzo87eJmRFX0JEPaEPWHfd36nZp6SvX50x5U1VUPCflwNO+5EFI6pWvIDl7AfU8PkLuYwSVdsBPYkQNjvWdfVT5V8nyHsV6/+y/lxBy8zsqIvAcKesCfs+87v1MxTsteP7riypmpI2I+rYcediMIxVUt+4BL2Y2qY3MUcJumKjcCeBAj7Peu6+qmS7zOE/erVfzk/7uBlRlb0JUDYE/aEfd/5nZp5Svb60R1X1lQNCftxNey4E1E4pmrJD1zCfkwNk7uYwyRdsRHYkwBhv2ddVz9V8n2GsF+9+i/nxx28zMiKvgQIe8KesO87v1MzT8leP7rjypqqIWE/roYddyIKx1Qt+YFL2I+pYXIXc5ikKzYCexIg7Pes6+qnSr7PEParV//l/LiDlxlZ0ZcAYU/YE/Z953dq5inZ60d3XFlTNSTsx9Ww405E4ZiqJT9wCfsxNUzuYg6TdMVGYE8ChP2edV39VMn3GcJ+9eq/nB938DIjK/oSIOwJe8K+7/xOzTwle/3ojitrqoaE/bgadtyJKBxTteQHLmE/pobJXcxhkq7YCOxJgLDfs66rnyr5PkPYr179l/PjDl5mZEVfAoQ9YU/Y953fqZmnZK8f3XFlTdWQsB9Xw447EYVjqpb8wCXsx9QwuYs5TNIVG4E9CRD2e9Z19VMl32cI+9Wr/3J+3MHLjKzoS4CwJ+wJ+77zOzXzlOz1ozuurKkaEvbjathxJ6JwTNWSH7iE/ZgaJncxh0m6YiOwJwHCfs+6rn6q5PsMYb969V/Ojzt4mZEVfQkQ9oQ9Yd93fqdmnpK9fnTHlTVVQ8J+XA077kQUjqla8gOXsB9Tw+Qu5jBJV2wE9iRA2O9Z19VPlXyfIexXr/7L+XEHLzOyoi8Bwp6wJ+z7zu/UzFOy14/uuLKmakjYj6thx52IwjFVS37gEvZjapjcxRwm6YqNwJ4ECPs967r6qZLvM4T96tV/OT/u4GVGVvQlQNgT9oR93/mdmnlK9vrRHVfWVA0J+3E17LgTUTimaskPXMJ+TA2Tu5jDJF2xEdiTAGG/Z11XP1XyfYawX736L+fHHbzMyIq+BAh7wp6w7zu/UzNPyV4/uuPKmqohYT+uhh13IgrHVC35gUvYj6lhchdzmKQrNgJ7EiDs96zr6qdKvs8Q9qtX/+X8uIOXGVnRlwBhT9gT9n3nd2rmKdnrR3dcWVM1JOzH1bDjTkThmKolP3AJ+zE1TO5iDpN0xUZgTwKE/Z51Xf1UyfcZwn716r+cH3fwMiMr+hIg7Al7wr7v/E7NPCV7/eiOK2uqhoT9uBp23IkoHFO15AcuYT+mhsldzGGSrtgI7EmAsN+zrqufKvk+Q9ivXv2X8+MOXmZkRV8ChHrd+VEAACAASURBVD1hT9j3nd+pmadkrx/dcWVN1ZCwH1fDjjsRhWOqlvzAJezH1DC5izlM0hUbgT0JEPZ71nX1UyXfZwj71av/cn7cwcuMrOhLgLAn7An7vvM7NfOU7PWjO66sqRoS9uNq2HEnonBM1ZIfuIT9mBomdzGHSbpiI7AnAcJ+z7qufqrk+wxhv3r1X86PO3iZkRV9CRD2hD1h33d+p2aekr1+dMeVNVVDwn5cDTvuRBSOqVryA5ewH1PD5C7mMElXbAT2JEDY71nX1U+VfJ8h7Fev/sv5cQcvM7KiLwHCnrAn7PvO79TMU7LXj+64sqZqSNiPq2HHnYjCMVVLfuAS9mNqmNzFHCbpio3AngQI+z3ruvqpku8zhP3q1X85P+7gZUZW9CUQFfZ9sZyfeUqMnZ9p/4gu7f41dIIxBFL3EmE/pn5ddyEKx1Qu+YHbUdjru9u++3+/97djGvHEXb770/94YrSnUHojglXQDQkkhf3733xvQ2KOdAaBr37922eEEWMiAX5mInxbtyZA2A8qX0qMDUq/1TZ+EFqVS7ITCaTuJcJ+YlEbbE2OjSkSYX/LWd8R9s9Nnt4YcyfZpT8Bwr5/DTuegLDvWLXbnPmZ/jV0gjkECPtB3FNibFD6rbbxg9CqXJKdSCB1LxH2E4vaYGtybEyRCHvC/k2d5i/sn+i4k8bcSXbpT4Cw71/Djicg7DtWjbDvXzUnWIEAYT+oCikxNij9VtsQ9q3KJdmJBFL3EmE/sagNtibHxhSJsCfsCfvarLmTapysQoCw1wMzCBD2M6ifuyc/cy5P0a5DgLAfVOuUGBuUfqtt/CC0KpdkJxJI3UuE/cSiNtiaHBtTJMKesCfsa7PmTqpxsgoBwl4PzCBA2M+gfu6e/My5PEW7DgHCflCtU2JsUPqttvGD0Kpckp1IIHUvEfYTi9pga3JsTJEIe8KesK/NmjupxskqBAh7PTCDAGE/g/q5e/Iz5/IU7ToECPtBtU6JsUHpt9rGD0Krckl2IoHUvUTYTyxqg63JsTFFIuwJe8K+NmvupBonqxAg7PXADAKE/Qzq5+7Jz5zLU7TrECDsB9U6JcYGpd9qGz8Ircol2YkEUvcSYT+xqA22JsfGFImwJ+wJ+9qsuZNqnKxCgLDXAzMIEPYzqJ+7Jz9zLk/RrkOAsB9U65QYG5R+q238ILQql2QnEkjdS4T9xKI22JocG1Mkwp6wJ+xrs+ZOqnGyCgHCXg/MIEDYz6B+7p78zLk8RbsOAcJ+UK1TYmxQ+q228YPQqlySnUggdS8R9hOL2mBrcmxMkQh7wp6wr82aO6nGySoECHs9MIMAYT+D+rl78jPn8hTtOgQI+0G1TomxQem32sYPQqtySXYigdS9RNhPLGqDrcmxMUUi7Al7wr42a+6kGierECDs9cAMAoT9DOrn7snPnMtTtOsQIOwH1Tolxgal32obPwityiXZiQRS9xJhP7GoDbYmx8YUibAn7An72qy5k2qcrEKAsNcDMwgQ9jOon7snP3MuT9GuQ4CwH1TrlBgblH6rbfwgtCqXZCcSSN1LhP3EojbYmhwbUyTCnrAn7Guz5k6qcbIKAcJeD8wgQNjPoH7unvzMuTxFuw4Bwn5QrVNibFD6rbbxg9CqXJKdSCB1LxH2E4vaYGtybEyRCHvCnrCvzZo7qcbJKgQIez0wgwBhP4P6uXvyM+fyFO06BAj7QbVOibFB6bfaxg9Cq3JJdiKB1L1E2E8saoOtybExRSLsCXvCvjZr7qQaJ6sQIOz1wAwChP0M6ufuyc+cy1O06xAg7AfVOiXGBqXfahs/CK3KJdmJBFL3EmE/sagNtibHxhSJsCfsCfvarLmTapysQoCw1wMzCBD2M6ifuyc/cy5P0a5DgLAfVOuUGBuUfqtt/CC0KpdkJxJI3UuE/cSiNtiaHBtTJMKesCfsa7PmTqpxsgoBwl4PzCBA2M+gfu6e/My5PEW7DgHCflCtU2JsUPqttvGD0Kpckp1IIHUvEfYTi9pga3JsTJEIe8KesK/NmjupxskqBAh7PTCDAGE/g/q5e/Iz5/IU7ToECPtBtU6JsUHpt9rGD0Krckl2IoHUvUTYTyxqg63JsTFFIuwJe8K+NmvupBonqxAg7PXADAKE/Qzq5+7Jz5zLU7TrECDsB9U6JcYGpd9qGz8Ircol2YkEUvcSYT+xqA22JsfGFImwJ+wJ+9qsuZNqnKxCgLDXAzMIEPYzqJ+7Jz9zLk/RrkOAsB9U65QYG5R+q238ILQql2QnEkjdS4T9xKI22JocG1Mkwp6wJ+xrs+ZOqnGyCgHCXg/MIEDYz6B+7p78zLk8RbsOAcJ+UK1TYmxQ+q228YPQqlySnUggdS8R9hOL2mBrcmxMkQh7wp6wr82aO6nGySoECHs9MIMAYT+D+rl78jPn8hTtOgQI+0G1TomxQem32sYPQqtySXYigdS9RNhPLGqDrcmxMUUi7Al7wr42a+6kGierECDs9cAMAoT9DOrn7snPnMtTtOsQIOyvU+u7T5qSea8ScWnfXQ4PIHA6gS++/eXTY74K+M5nfhiJK+geBMixMXVMCvsxJzh3ly+89RvnBvxZtF96++ORuIIigAACCKxNIPk72/Fd6Wt/8aNIwb7zvW9F4r4KmvQdqaR5lBRZcRFYjwBhv15Nlsko+QPmh2aZMkvkwgQI+wsXf+LRO36ETsT18NZJkfBwUhMfJOwnwrc1AgggsCGB5O9sx3clwn5Mk/MoYzjbBYEVCBD2K1Rh0RwI+0ULIy0ETiJA2J8EUpi7CHT8CL3rgIssToqERY54VxqE/V24LEYAAQQQeIFA8ne247sSYT9mZAj7MZztgsAKBAj7FaqwaA6E/aKFkRYCJxEg7E8CKcxdBDp+hN51wEUWJ0XCIke8Kw3C/i5cFiOAAAIIEPZ39QBhfxeuhxcT9g+j8yAC7QgQ9u1KNi5hwn4cazshMIMAYT+Duj0J+zE9QNjfcibsx/SdXRBAAIGrEEj+znZ8VyLsx3Q+YT+Gs10QWIEAYb9CFRbNgbBftDDSQuAkAoT9SSCFuYtAx4/Quw64yOKkSFjkiHelQdjfhctiBBBAAIEXCCR/Zzu+KxH2Y0aGsB/D2S4IrECAsF+hCovmQNgvWhhpIXASAcL+JJDC3EWg40foXQdcZHFSJCxyxLvSIOzvwmUxAggggABhf1cPEPZ34Xp4MWH/MDoPItCOAGHfrmTjEibsx7G2EwIzCBD2M6jbk7Af0wOE/S1nwn5M39kFAQQQuAqB5O9sx3clwn5M5xP2YzjbBYEVCBD2K1Rh0RwI+0ULIy0ETiJA2J8EUpi7CHT8CL3rgIssToqERY54VxqE/V24LEYAAQQQeIFA8ne247sSYT9mZAj7MZztgsAKBAj7FaqwaA6E/aKFkRYCJxEg7E8CKcxdBDp+hN51wEUWJ0XCIke8Kw3C/i5cFiOAAAIIEPZ39QBhfxeuhxcT9g+j8yAC7QgQ9u1KNi5hwn4cazshMIMAYT+Duj0J+zE9QNjfcibsx/SdXRBAAIGrEEj+znZ8VyLsx3Q+YT+Gs10QWIEAYb9CFRbNgbBftDDSQuAkAoT9SSCFuYtAx4/Quw64yOKkSFjkiHelQdjfhctiBBBAAIEXCCR/Zzu+KxH2Y0aGsB/D2S4IrECAsF+hCovmQNgvWhhpIXASAcL+JJDC3EWg40foXQdcZHFSJCxyxLvSIOzvwmUxAggggABhf1cPEPZ34Xp4MWH/MDoPItCOAGHfrmTjEibsx7G2EwIzCBD2M6jbk7Af0wOE/S1nwn5M39kFAQQQuAqB5O9sx3clwn5M5xP2YzjbBYEVCBD2K1Rh0RwI+0ULIy0ETiJA2J8EUpi7CHT8CL3rgIssToqERY54VxqE/V24LEYAAQQQeIFA8ne247sSYT9mZAj7MZztgsAKBAj7FaqwaA6E/aKFkRYCJxEg7E8CKcxdBDp+hN51wEUWJ0XCIke8Kw3C/i5cFiOAAAIIEPZ39QBhfxeuhxcT9g+j8yAC7QgQ9u1KNi5hwn4cazshMIMAYT+Duj0J+zE9QNjfcibsx/SdXRBAAIGrEEj+znZ8VyLsx3Q+YT+Gs10QWIEAYb9CFRbNgbBftDDSQuAkAoT9SSCFuYtAx4/Quw64yOKkSFjkiHelQdjfhctiBBBAAIEXCCR/Zzu+KxH2Y0aGsB/D2S4IrECAsF+hCovmQNgvWhhpIXASAcL+JJDC3EWg40foXQdcZHFSJCxyxLvSIOzvwmUxAggggABhf1cPEPZ34Xp4MWH/MDoPItCOAGHfrmTjEibsx7G2EwIzCBD2M6jbk7Af0wOE/S1nwn5M39kFAQQQuAqB5O9sx3clwn5M5xP2YzjbBYEVCBD2K1Rh0RwI+0ULIy0ETiJA2J8EUpi7CHT8CL3rgIssToqERY54VxqE/V24LEYAAQQQeIFA8ne247sSYT9mZAj7MZztgsAKBAj7FaqwaA6E/aKFkRYCJxEg7E8CKcxdBDp+hN51wEUWJ0XCIke8Kw3C/i5cFiOAAAIIEPZ39QBhfxeuhxcT9g+j8yAC7QgQ9u1KNi5hwn4cazshMIMAYT+Duj0J+zE9QNjfcibsx/SdXRBAAIGrEEj+znZ8VyLsx3Q+YT+Gs10QWIEAYf9aFZKSeoWC35ODH4N7aFmLAAL/hcCf/P7nwGhOoOOHYnPk0kcAAQSWIEBCLlEGSVycQHIOU2i/8e6PU6Fbxk25lKSvSuXcsoCSRmABAoQ9Yf9sG7qwF5hQKSDQkABh37Bor6VM2PevoRMggAACjxBIikK/LY9UxDNXJJCcwxRPwv6WbMqlEPapDhYXgfUIEPaEPWG/3lzKCIHWBAj71uX7/5MnVfrX0AkQQACBRwgkRaHflkcq4pkrEkjOYYonYU/Yp3pLXASuSoCwJ+wJ+6tOv3MjECJA2IfADgxLqgyEbSsEEEBgIQJJUei3ZaFCS2VpAsk5TB2csCfsU70lLgJXJUDYE/aE/VWn37kRCBEg7ENgB4YlVQbCthUCCCCwEIGkKPTbslChpbI0geQcpg5O2BP2qd4SF4GrEiDsCXvC/qrT79wIhAgQ9iGwA8OSKgNh2woBBBBYiEBSFPptWajQUlmaQHIOUwcn7An7VG+Ji8BVCRD2hD1hf9Xpd24EQgQI+xDYgWFJlYGwbYUAAggsRCApCv22LFRoqSxNIDmHqYMT9oR9qrfEReCqBAh7wp6wv+r0OzcCIQKEfQjswLCkykDYtkIAAQQWIpAUhX5bFiq0VJYmkJzD1MEJe8I+1VviInBVAoQ9YU/YX3X6nRuBEAHCPgR2YFhSZSBsWyGAAAILEUiKQr8tCxVaKksTSM5h6uCEPWGf6i1xEbgqAcKesCfsrzr9zo1AiABhHwI7MCypMhC2rRBAAIGFCCRFod+WhQotlaUJJOcwdXDCnrBP9Za4CFyVAGFP2BP2V51+50YgRICwD4EdGJZUGQjbVggggMBCBJKi0G/LQoWWytIEknOYOjhhT9inektcBK5KgLAn7An7q06/cyMQIkDYh8AODEuqDIRtKwQQQGAhAklR6LdloUJLZWkCyTlMHZywJ+xTvSUuAlclQNgT9oT9VaffuREIESDsQ2AHhiVVBsK2FQIIILAQgaQo9NuyUKGlsjSB5BymDk7YE/ap3hIXgasSIOwJe8L+qtPv3AiECBD2IbADw5IqA2HbCgEEEFiIQFIU+m1ZqNBSWZpAcg5TByfsCftUb4mLwFUJEPaEPWF/1el3bgRCBAj7ENiBYUmVgbBthQACCCxEICkK/bYsVGipLE0gOYepgxP2hH2qt8RF4KoECHvCnrC/6vQ7NwIhAoR9COzAsKTKQNi2QgABBBYikBSFflsWKrRUliaQnMPUwQl7wj7VW+IicFUChD1hT9hfdfqdG4EQAcI+BHZgWFJlIGxbIYAAAgsRSIpCvy0LFVoqSxNIzmHq4IQ9YZ/qLXERuCoBwp6wJ+yvOv3OjUCIAGEfAjswLKkyELatEEAAgYUIJEWh35aFCi2VpQkk5zB1cMKesE/1lrgIXJUAYU/YE/ZXnX7nRiBEgLAPgR0YllQZCNtWCCCAwEIEkqLQb8tChZbK0gSSc5g6OGFP2Kd6S1wErkqAsCfsCfurTr9zIxAiQNiHwA4MS6oMhG0rBBBAYCECSVHot2WhQktlaQLJOUwdnLAn7FO9JS4CVyVA2BP2hP1Vp9+5EQgRIOxDYAeGJVUGwrYVAgggsBCBpCj027JQoaWyNIHkHKYOTtgT9qneEheBqxIg7Al7wv6q0+/cCIQIEPYhsAPDkioDYdsKAQQQWIhAUhT6bVmo0FJZmkByDlMHJ+wJ+1RviYvAVQkQ9oOE/X/6mx9etcecGwEELkaAsO9fcFKlfw2dYAyBz/zel2Ibvf/N92KxU4GTPFI5d+ScYiEuAgjsTSD5HwJSwj7pUT77y5+KFTyZdyxpgRFAYCkChD1hv1RDSgYBBPoTIOz715Cw719DJxhDICmoO4rkJI9URTtyTrEQFwEE9iZA2N/Wl7Dfu9+dDoHuBAh7wr57D8sfAQQWI0DYL1aQB9Ih7B+A5pFLEkgK6o4iOckj1WAdOadYiIsAAnsTIOwJ+7073OkQ2IsAYU/Y79XRToMAAtMJEPbTS3A4AcL+MEIBLkIgKag7iuQkj1RLdeScYiEuAgjsTYCwJ+z37nCnQ2AvAoQ9Yb9XRzsNAghMJ0DYTy/B4QQI+8MIBbgIgaSg7iiSkzxSLdWRc4qFuAggsDcBwp6w37vDnQ6BvQgQ9oT9Xh3tNAggMJ0AYT+9BIcTIOwPIxTgIgSSgrqjSE7ySLVUR84pFuIigMDeBAh7wn7vDnc6BPYiQNgT9nt1tNMggMB0AoT99BIcToCwP4xQgIsQSArqjiI5ySPVUh05p1iIiwACexMg7An7vTvc6RDYiwBhT9jv1dFOgwAC0wkQ9tNLcDgBwv4wQgEuQiApqDuK5CSPVEt15JxiIS4CCOxNgLAn7PfucKdDYC8ChD1hv1dHOw0CCEwnQNhPL8HhBAj7wwgFuAiBpKDuKJKTPFIt1ZFzioW4CCCwNwHCnrDfu8OdDoG9CBD2hP1eHe00CCAwnQBhP70EhxMg7A8jFOAiBJKCuqNITvJItVRHzikW4iKAwN4ECHvCfu8OdzoE9iJA2BP2e3W00yCAwHQChP30EhxOgLA/jFCAixBICuqOIjnJI9VSHTmnWIiLAAJ7EyDsCfu9O9zpENiLAGFP2O/V0U6DAALTCRD200twOAHC/jBCAS5CICmoO4rkJI9US3XknGIhLgII7E2AsCfs9+5wp0NgLwKEPWG/V0c7DQIITCdA2E8vweEECPvDCAW4CIGkoO4okpM8Ui3VkXOKhbgIILA3AcKesN+7w50Ogb0IEPaE/V4d7TQIIDCdAGE/vQSHEyDsDyMU4CIEkoK6o0hO8ki1VEfOKRbiIoDA3gQIe8J+7w53OgT2IkDYE/Z7dbTTIIDAdAKE/fQSHE6AsD+MUICLEEgK6o4iOckj1VIdOadYiIsAAnsTIOwJ+7073OkQ2IsAYU/Y79XRToMAAtMJEPbTS3A4AcL+MEIBLkIgKag7iuQkj1RLdeScYiEuAgjsTYCwJ+z37nCnQ2AvAoQ9Yb9XRzsNAghMJ0DYTy/B4QQI+8MIBbgIgaSg7iiSkzxSLdWRc4qFuAggsDcBwp6w37vDnQ6BvQgQ9oT9Xh3tNAggMJ0AYT+9BIcTIOwPIxTgIgSSgrqjSE7ySLVUR84pFuIigMDeBAh7wn7vDnc6BPYiQNgT9nt1tNMggMB0AoT99BIcToCwP4xQgIsQSArqjiI5ySPVUh05p1iIiwACexMg7An7vTvc6RDYiwBhT9jv1dFOgwAC0wkQ9tNLcDgBwv4wQgEuQiApqDuK5CSPVEt15JxiIS4CCOxNgLAn7PfucKdDYC8ChD1hv1dHOw0CCEwnQNhPL8HhBAj7wwgFuAiBpKDuKJKTPFIt1ZFzioW4CCCwNwHCnrDfu8OdDoG9CBD2hP1eHe00CCAwnQBhP70EhxMg7A8jFOAiBJKCuqNITvJItVRHzikW4iKAwN4ECHvCfu8OdzoE9iJA2BP2e3W00yCAwHQChP30EhxOgLA/jFCAixBICuqOIjnJI9VSHTmnWIiLAAJ7EyDsCfu9O9zpENiLAGE/SNgn2+Y//c0Pk+HFRgABBJYh4D8GjCkFYT+Gs10Q2I1AR2GfrIH/GJCkOyZ2qqf1xpj6vdrla3/xo8hm/+Kf/mokbjLoV7/+7WT4drF5lHYlkzAClyJA2BP2l2p4h0UAgd4ECPsx9SPsx3C2CwK7EUjJza6cSNmulXvKO9XTemNcbxD2T6wJ+9u+I+zHzaGdEEDgfgKEPWF/f9d4AgEEEJhEgLAfA56wH8PZLgjsRiAlN7tyImW7Vo6w71+5pxMQ9oT9c/1M2O806c6CwH4ECHvCfr+udiIEENiWAGE/prSE/RjOdkFgNwKE/W1FCfv+HZ7qab0xrjcIe8KesB83b3ZCAIHzCBD2hP153SQSAgggECZA2IcB/yw8YT+Gs10Q2I1ASm525UTKdq3cU96pntYb43qDsCfsCftx82YnBBA4jwBhT9if100iIYAAAmEChH0YMGE/BrBdENiUQEpudsVFynatHGHfv3JPJyDsCXvCfqeJdhYErkOAsCfsr9Pt/197dwxy+3be+V2q1AwCIVdysDCYAQ9uAr4epVAKNVFsSJF2xBTTDFOMB0YQQSAzTJEBhZAET+FSxMxUARUBCaIiMGggTq5Kgxo3MkhVLgFjFy4G5dx7z9Xxueee8653/9fvWetZ/0+/91rr/3nW3u853/tyriclQKC9gGBfM0K/YV/jbBcCpwkI9q9PVLDvf8NTd9rdqLsbgr1gL9jXfd7sRIDAPAHBXrCfd5usRIAAgbCAYB8Gfrm8YF/jbBcCpwmk4mZXJ1G26+RenTt1p92Nursh2Av2gn3d581OBAjMExDsBft5t8lKBAgQCAsI9mFgwb4G2C4EDhVIxc2uXKJs18kJ9v0n9+oJBHvBXrA/6RPtWQjcR0CwF+zvc9s9KQEC7QUE+5oR+g37Gme7EDhNQLB/faKCff8bnrrT7kbd3RDsBXvBvu7zZicCBOYJCPaC/bzbZCUCBAiEBQT7MPDL5QX7Gme7EDhNIBU3uzqJsl0n9+rcqTvtbtTdDcFesBfs6z5vdiJAYJ6AYC/Yz7tNViJAgEBYQLAPAwv2NcB2IXCoQCpuduUSZbtOTrDvP7lXTyDYC/aC/UmfaM9C4D4Cgr1gf5/b7kkJEGgvINjXjNBv2Nc424XAaQKC/esTFez73/DUnXY36u6GYC/YC/Z1nzc7ESAwT0CwF+zn3SYrESBAICwg2IeBXy4v2Nc424XAaQKpuNnVSZTtOrlX507daXej7m4I9oK9YF/3ebMTAQLzBAR7wX7ebbISAQIEwgKCfRhYsK8BtguBQwVScbMrlyjbdXKCff/JvXoCwV6wF+xP+kR7FgL3ERDsBfv73HZPSoBAewHBvmaEfsO+xtkuBE4TEOxfn6hg3/+Gp+60u1F3NwR7wV6wr/u82YkAgXkCgr1gP+82WYkAAQJhAcE+DPxyecG+xtkuBE4TSMXNrk6ibNfJvTp36k67G3V3Q7AX7AX7us+bnQgQmCcg2Av2826TlQgQIBAWEOzDwIJ9DbBdCBwqkIqbXblE2a6TE+z7T+7VEwj2gr1gf9In2rMQuI+AYC/Y3+e2e1ICBNoLCPY1I/Qb9jXOdiFwmoBg//pEBfv+Nzx1p92Nursh2Av2gn3d581OBAjMExDsBft5t8lKBAgQCAsI9mHgl8sL9jXOdiFwmkAqbnZ1EmW7Tu7VuVN32t2ouxuCvWAv2Nd93uxEgMA8AcFesJ93m6xEgACBsIBgHwYW7GuA7ULgUIFU3OzKJcp2nZxg339yr55AsBfsBfuTPtGehcB9BAR7wf4+t92TEiDQXkCwrxmh37CvcbYLgdMEBPvXJyrY97/hqTvtbtTdDcFesBfs6z5vdiJAYJ6AYD/PctlKX/3yr0f2/tkHP4+sa1ECBAg8KpD6vvvWN7706JGOfJ9gf+RYPRSBuEAqbsYPboMSgY6ROnWnO1qUXJLAJv/4X/8osOrnPpf8u3Lqz7sRiPCiSefw0S1PgACBSwKC/SW+Pd6c+oHuh+Me83UKAgReCaS+7wT712+ZYO9TR4DAIwKpuPnIWbxnP4GOkTp1pzta7Hejxk4k2I857foqTWLXyTgXAQJpAcE+LVywfipg+eFYMDxbECDwLIHU951gL9g/6yJ6MQECnymQipu4zxDoGKlTd7qjRddbKNh3ndzH59Ykes/P6QkQeFxAsH/cbpt3pgKWH47bjNhBCBB4KZD6vhPsBXsfMgIErguk4ub1k1lhB4GOkTp1pzta7HCHHjmDYP+I2j7v0ST2mYWTECBQKyDY13pHdksFLD8cI+OyKAECFwRS33eCvWB/4Vp6KwECLwVScRPwGQIdI3XqTne06HoLBfuuk/v43JpE7/k5PQECjwsI9o/bbfPOVMDyw3GbETsIAQIvBVLfd4K9YO9DRoDAdYFU3Lx+MivsINAxUqfudEeLHe7QI2cQ7B9R2+c9msQ+s3ASAgRqBQT7Wu/IbqmA5YdjZFwWJUDggkDq+06wF+wvXEtvJUDgpUAqbgI+Q6BjpE7d6Y4WXW+hYN91ch+fW5PoPT+nJ0DgcQHB/nG7bd6ZClh+OG4zYgchQOClQOr7TrAX7H3ICBC4LpCKm9dPZoUdBDpG6tSd7mixwx165AyC/SNq+7xHk9hnFk5CgECtgGBf6x3ZLRWw/HCMjMuiBAhcEEh93wn2gv2Fa+mtBAi8FEjFTcBnCHSM1Kk73dGi6y0U7LtO7uNzaxK95+f0BAg8LiDYP263zTtTAcsPn+3NfQAAIABJREFUx21G7CAECLwUSH3fCfaCvQ8ZAQLXBVJx8/rJrLCDQMdInbrTHS12uEOPnEGwf0Rtn/doEvvMwkkIEKgVEOxrvSO7pQKWH46RcVmUAIELAqnvO8FesL9wLb2VAIGXAqm4CfgMgY6ROnWnO1p0vYWCfdfJfXxuTaL3/JyeAIHHBQT7x+22eWcqYPnhuM2IHYQAgZcCqe87wV6w9yEjQOC6QCpuXj+ZFXYQ6BipU3e6o8UOd+iRMwj2j6jt8x5NYp9ZOAkBArUCgn2td2S3VMDywzEyLosSIHBBIPV9J9gL9heupbcSIPBSIBU3AZ8h0DFSp+50R4uut1Cw7zq5j8+tSfSen9MTIPC4gGD/uN0270wFLD8ctxmxgxAg8FIg9X0n2Av2PmQECFwXSMXN6yezwg4CHSN16k53tNjhDj1yBsH+EbV93qNJ7DMLJyFAoFZAsK/1juyWClh+OEbGZVECBC4IpL7vBHvB/sK19FYCBF4KpOIm4DMEOkbq1J3uaNH1Fgr2XSf38bk1id7zc3oCBB4XEOwft9vmnamA5YfjNiN2EAIEXgqkvu8Ee8Heh4wAgesCqbh5/WRW2EGgY6RO3emOFjvcoUfOINg/orbPezSJfWbhJAQI1AoI9rXekd1SAcsPx8i4LEqAwAWB1PedYC/YX7iW3kqAwEuBVNwEfIZAx0idutMdLbreQsG+6+Q+Prcm0Xt+Tk+AwOMCgv3jdtu8MxWw/HDcZsQOQoDAS4HU951gL9j7kBEgcF0gFTevn8wKOwh0jNSpO93RYoc79MgZBPtH1PZ5jyaxzyychACBWgHBvtY7slsqYPnhGBmXRQkQuCCQ+r4T7AX7C9fSWwkQeCmQipuAzxDoGKlTd7qjRddbKNh3ndzH59Ykes/P6QkQeFxAsH/cbpt3pgKWH47bjNhBCBB4KZD6vhPsBXsfMgIErguk4ub1k1lhB4GOkTp1pzta7HCHHjmDYP+I2j7v0ST2mYWTECBQKyDY13pHdksFLD8cI+OyKAECFwRS33eCvWB/4Vp6KwECLwVScRPwGQIdI3XqTne06HoLBfuuk/v43JpE7/k5PQECjwsI9o/bbfPOVMDyw3GbETsIAQIvBVLfd4K9YO9DRoDAdYFU3Lx+MivsINAxUqfudEeLHe7QI2cQ7B9R2+c9msQ+s3ASAgRqBQT7Wu/IbqmA5YdjZFwWJUDggkDq+06wF+wvXEtvJUDgpUAqbgI+Q6BjpE7d6Y4WXW+hYN91ch+fW5PoPT+nJ0DgcQHB/nG7Z70zFZn8EHvWGLyYAIHmAqnvUsFesG/+0XB8AlsIpOLmFg/nELcUENZrxp6K6sm/K6f+TFoj3mcXwb7PrJyUAIG5AoL9XM+3rpb8ge6HWNEQbUOAwHKB1HepYC/YL7/cDkDgAAHB/oAheoTXBAT7mgsh2Nc4d9xF6+g4NWcmQGCGgGA/Q3FgjVRk+nBrP8QGBuAlBAgcIZD6LhXsBfsjPiAegsBiAcF+8QBsP11AsJ9O+pkLCvY1zh130To6Ts2ZCRCYISDYz1AcWCMVmQT7AXwvIUDgGIHUd6lgL9gf8yHxIAQWCgj2C/FtHREQ7COsbywq2Nc4d9xFsO84NWcmQGCGgGA/Q3FgjVRkEuwH8L2EAIFjBFLfpYK9YH/Mh8SDEFgoINgvxLd1RECwj7AK9jWsR+wi2B8xRg9BgMADAoL9A2iPvCUVmQT7R6bhPQQIdBVIfZcK9oJ918+EcxPYSUCw32kazjJDQLCfofj0Gn7D/mmju75CsL/r5D03AQKCfdEdSEUmwb5ogLYhQGALgdR3qWAv2G9xwR2CQHMBwb75AB3/DQHBvuZSCPY1zh13Eew7Ts2ZCRCYISDYz1AcWCMVmQT7AXwvIUDgGIHUd6lgL9gf8yHxIAQWCgj2C/FtHREQ7COsbywq2Nc4d9xFsO84NWcmQGCGgGA/Q3FgjVRkEuwH8L2EAIFjBFLfpYK9YH/Mh8SDEFgoINgvxLd1RECwj7AK9jWsR+wi2B8xRg9BgMADAoL9A2iPvCUVmQT7R6bhPQQIdBVIfZcK9oJ918+EcxPYSUCw32kazjJDQLCfofj0Gn7D/mmju75CsL/r5D03AQKCfdEdSEUmwb5ogLYhQGALgdR3qWAv2G9xwR2CQHMBwb75AB3/DQHBvuZSCPY1zh13Eew7Ts2ZCRCYISDYz1AcWCMVmQT7AXwvIUDgGIHUd6lgL9gf8yHxIAQWCgj2C/FtHREQ7COsbywq2Nc4d9xFsO84NWcmQGCGgGA/Q3FgjVRkEuwH8L2EAIFjBFLfpYK9YH/Mh8SDEFgoINgvxLd1RECwj7AK9jWsR+wi2B8xRg9BgMADAoL9A2iPvCUVmQT7R6bhPQQIdBVIfZcK9oJ918+EcxPYSUCw32kazjJDQLCfofj0Gn7D/mmju75CsL/r5D03AQKCfdEdSEUmwb5ogLYhQGALgdR3qWAv2G9xwR2CQHMBwb75AB3/DQHBvuZSCPY1zh13Eew7Ts2ZCRCYISDYz1AcWCMVmQT7AXwvIUDgGIHUd6lgL9gf8yHxIAQWCgj2C/FtHREQ7COsbywq2Nc4d9xFsO84NWcmQGCGgGA/Q3FgjVRkEuwH8L2EAIFjBFLfpYK9YH/Mh8SDEFgoINgvxLd1RECwj7AK9jWsR+wi2B8xRg9BgMADAoL9A2iPvCUVmQT7R6bhPQQIdBVIfZcK9oJ918+EcxPYSUCw32kazjJDQLCfofj0Gn7D/mmju75CsL/r5D03AQKCfdEdSEUmwb5ogLYhQGALgdR3qWAv2G9xwR2CQHMBwb75AB3/DQHBvuZSCPY1zh13Eew7Ts2ZCRCYISDYz1AcWCMVmQT7AXwvIUDgGIHUd6lgL9gf8yHxIAQWCgj2C/FtHREQ7COsbywq2Nc4d9xFsO84NWcmQGCGgGA/Q3FgjVRkEuwH8L2EAIFjBFLfpYK9YH/Mh8SDEFgoINgvxLd1RECwj7AK9jWsR+wi2B8xRg9BgMADAoL9A2iPvCUVmQT7R6bhPQQIdBVIfZcK9oJ918+EcxPYSUCw32kazjJDQLCfofj0Gn7D/mmju75CsL/r5D03AQKCfdEdSEUmwb5ogLYhQGBYIPl9N3yIjV7oPwb4jwEbXUdHaSSQjN+pCJk8c6PROepBAqnPykFEUx5FsJ/CeOQigv2RY/VQBAgMCAj2A0gzXpIMWH6IzZiQNQgQmCWQ/L6bdcbKdQR7wb7yvtnrHIFk/E5FyOSZz5msJ+kkkPqsdDKoOKtgX6Hccw+to+fcnJoAgesCgv11w6EVkgHLD7GhEXgRAQJFAsnvu6JHmLqNYC/YT71QFruNQDJ+pyJk8sy3GbwH3Uog9VnZ6iE3OIxgv8EQNj2C1rHpYByLAIG4gGAfJ/54g2TA8kOsaIi2IUBgSCD5fTd0gM1eJNgL9ptdScdpIpCM36kImTxzk7E55mECqc/KYUyXH0ewv0x47AJax7Gj9WAECDwhINgXXZFkwPJDrGiItiFAYEgg+X03dIDNXiTYC/abXUnHaSKQjN+pCJk8c5OxOeZhAqnPymFMlx9HsL9MeOwCWsexo/VgBAgI9nvcgWTA8kNsjxk7BQECHwskv+86Ggv2gn3He+vM6wWS8TsVIZNnXj8RJ7ijQOqzckfLdz2zYO9GvE1A63A3CBC4q4DfsC+afDJg+SFWNETbECAwJJD8vhs6wGYvEuwF+82upOM0EUjG71SETJ65ydgc8zCB1GflMKbLjyPYXyY8dgGt49jRejACBJ4QEOyLrkgyYPkhVjRE2xAgMCSQ/L4bOsBmLxLsBfvNrqTjNBFIxu9UhEyeucnYHPMwgdRn5TCmy48j2F8mPHYBrePY0XowAgQE+z3uQDJg+SG2x4ydggCBjwWS33cdjQV7wb7jvXXm9QLJ+J2KkMkzr5+IE9xRIPVZuaPlu55ZsHcj3iagdbgbBAjcVcBv2BdNPhmw/BArGqJtCBAYEkh+3w0dYLMXCfaC/WZX0nGaCCTjdypCJs/cZGyOeZhA6rNyGNPlxxHsLxMeu4DWcexoPRgBAk8ICPZFVyQZsPwQKxqibQgQGBJIft8NHWCzFwn2gv1mV9Jxmggk43cqQibP3GRsjnmYQOqzchjT5ccR7C8THruA1nHsaD0YAQKC/R53IBmw/BDbY8ZOQYDAxwLJ77uOxoK9YN/x3jrzeoFk/E5FyOSZ10/ECe4okPqs3NHyXc8s2LsRbxPQOtwNAgTuKuA37IsmnwxYfogVDdE2BAgMCSS/74YOsNmLBHvBfrMr6ThNBJLxOxUhk2duMjbHPEwg9Vk5jOny4wj2lwmPXUDrOHa0HowAgScEBPuiK5IMWH6IFQ3RNgQIDAkkv++GDrDZiwR7wX6zK+k4TQSS8TsVIZNnbjI2xzxMIPVZOYzp8uMI9pcJj11A6zh2tB6MAAHBfo87kAxYfojtMWOnIEDgY4Hk911HY8FesO94b515vUAyfqciZPLM6yfiBHcUSH1W7mj5rmcW7N2ItwloHe4GAQJ3FfAb9kWTTwYsP8SKhmgbAgSGBJLfd0MH2OxFgr1gv9mVdJwmAsn4nYqQyTM3GZtjHiaQ+qwcxnT5cQT7y4THLqB1HDtaD0aAwBMCgn3RFUkGLD/EioZoGwIEhgSS33dDB9jsRYK9YL/ZlXScJgLJ+J2KkMkzNxmbYx4mkPqsHMZ0+XEE+8uExy6gdRw7Wg9GgIBgv8cdSAYsP8T2mLFTECDwsUDy+66jsWAv2He8t868XiAZv1MRMnnm9RNxgjsKpD4rd7R81zML9m7E2wS0DneDAIG7CvgN+6LJJwOWH2JFQ7QNAQJDAsnvu6EDbPYiwV6w3+xKOk4TgWT8TkXI5JmbjM0xDxNIfVYOY7r8OIL9ZcJjF9A6jh2tByNA4AkBwb7oiiQDlh9iRUO0DQECQwLJ77uhA2z2IsFesN/sSjpOE4Fk/E5FyOSZm4zNMQ8TSH1WDmO6/DiC/WXCYxfQOo4drQcjQECw3+MOJAOWH2J7zNgpCBD4WCD5fdfRWLAX7DveW2deL5CM36kImTzz+ok4wR0FUp+VO1q+65kFezfibQJah7tBgMBdBfyGfdHkkwHLD7GiIdqGAIEhgeT33dABNnuRYC/Yb3YlHaeJQDJ+pyJk8sxNxuaYhwmkPiuHMV1+HMH+MuGxC2gdx47WgxEg8ISAYF90RZIByw+xoiHahgCBIYHk993QATZ7kWAv2G92JR2niUAyfqciZPLMTcbmmIcJpD4rhzFdfhzB/jLhsQtoHceO1oMRICDYuwMECBAgUCkg2L+u/ZXf+p0Y/zd+4+extVMLf/1r76WWti6BcgGBupzchgTeEBDVay7FN7/9vdhG/uwYoy1bWFgvo7YRAQI3EfAb9jcZtMckQIBAlYC/dAn277prgn3VJ9E+FQKCfYWyPQi8W0Cwr7khgn2Nc9ddBPuuk3NuAgR2FRDsd52McxEgQKCpgGAv2Av2TT+8jv1sAcH+2WTeQGC6gGA/nfQzFxTsa5y77iLYd52ccxMgsKuAYL/rZJyLAAECTQUEe8FesG/64XXsZwsI9s8m8wYC0wUE++mkgn0N6VG7CPZHjdPDECCwgYBgv8EQHIEAAQInCQj2gr1gf9In2rO8S0Cwdz8IrBcQ7Gtm4Dfsa5y77iLYd52ccxMgsKuAYL/rZJyLAAECTQUEe8FesG/64XXsZwsI9s8m8wYC0wUE++mkn7mgYF/j3HUXwb7r5JybAIFdBQT7XSfjXAQIEGgqINgL9oJ90w+vYz9bQLB/Npk3EJguINhPJxXsa0iP2kWwP2qcHoYAgQ0EBPsNhuAIBAgQOElAsBfsBfuTPtGe5V0Cgr37QWC9gGBfMwO/YV/j3HUXwb7r5JybAIFdBQT7XSfjXAQIEGgqINgL9oJ90w+vYz9bQLB/Npk3EJguINhPJ/3MBQX7Gueuuwj2XSfn3AQI7Cog2O86GeciQIBAUwHBXrAX7Jt+eB372QKC/bPJvIHAdAHBfjqpYF9DetQugv1R4/QwBAhsICDYbzAERyBAgMBJAoK9YC/Yn/SJ9izvEhDs3Q8C6wUE+5oZ+A37Gueuuwj2XSfn3AQI7Cog2O86GeciQIBAUwHBXrAX7Jt+eB372QKC/bPJvIHAdAHBfjrpZy4o2Nc4d91FsO86OecmQGBXAcF+18k4FwECBJoKCPaCvWDf9MPr2M8WEOyfTeYNBKYLCPbTSQX7GtKjdhHsjxqnhyFAYAMBwX6DITgCAQIEThIQ7AV7wf6kT7RneZeAYO9+EFgvINjXzMBv2Nc4d91FsO86OecmQGBXAcF+18k4FwECBJoKCPaCvWDf9MPr2M8WEOyfTeYNBKYLCPbTST9zQcG+xrnrLoJ918k5NwECuwoI9rtOxrkIECDQVECwF+wF+6YfXsd+toBg/2wybyAwXUCwn04q2NeQHrWLYH/UOD0MAQIbCAj2GwzBEQgQIHCSgGAv2Av2J32iPcu7BAR794PAegHBvmYGfsO+xrnrLoJ918k5NwECuwoI9rtOxrkIECDQVECwF+wF+6YfXsd+toBg/2wybyAwXUCwn076mQsK9jXOXXcR7LtOzrkJENhVQLDfdTLORYAAgaYCgr1gL9g3/fA69rMFBPtnk3kDgekCgv10UsG+hvSoXQT7o8bpYQgQ2EBAsN9gCI5AgACBkwQEe8FesD/pE+1Z3iUg2LsfBNYLCPY1M/Ab9jXOXXcR7LtOzrkJENhVQLDfdTLORYAAgaYCgr1gL9g3/fA69rMFBPtnk3kDgekCgv100s9cULCvce66i2DfdXLOTYDArgKC/a6TcS4CBAg0FRDsBXvBvumH17GfLSDYP5vMGwhMFxDsp5MK9jWkR+0i2B81Tg9DgMAGAoL9BkNwBAIECJwkINgL9oL9SZ9oz/IuAcHe/SCwXkCwr5mB37Cvce66i2DfdXLOTYDArgKC/a6TcS4CBAg0FUgG+6/81u9EVH7x538WWffDRVNn/nDtb/zGz2PnTi389a+9l1raugTeKiCs11yOZDg1w/4zrHkCu/zjf/2jCELXIJv8c2kEOrho1xkGSSxNgACBbQUE+21H42AECBDoKZD8i1Eqfgv2dXdNsK+zttMrAbG35jYI9jXOyV2SM0ye29qvBAT7129D8s+l3e6dYN9tYs5LgMCdBQT7O0/fsxMgQCAgkPyLkWD/+sD8hn3gAlvySAHBvmasydhrhv1nWPMEdhHsBfu3fQoEe98PBAgQ6CMg2PeZlZMSIECghYBg//qYUv+R4cNdBPsWHwmH3EBA7K0ZgmBf45zcJTnD5Lmt/UpAsBfsBXvfCAQIEOgvINj3n6EnIECAwFYCgr1g/64L6Z/E2erjepvDCPY1o07GXjPsP8OaJ7CLYC/YC/a+BwgQINBfQLDvP0NPQIAAga0EBHvBXrDf6iPpMC8ExN6aayDY1zgnd0nOMHlua78SEOwFe8HeNwIBAgT6Cwj2/WfoCQgQILCVgGAv2Av2W30kHUawL7sDydjrP7rUjDE5w5onsItgL9gL9r4HCBAg0F9AsO8/Q09AgACBrQQEe8FesN/qI+kwgn3ZHUjGXsG+ZozJGdY8gV0Ee8FesPc9QIAAgf4Cgn3/GXoCAgQIbCUg2Av2gv1WH0mHEezL7kAy9gr2NWNMzrDmCewi2Av2gr3vAQIECPQXEOz7z9ATECBAYCsBwV6wF+y3+kg6jGBfdgeSsVewrxljcoY1T2AXwV6wF+x9DxAgQKC/gGDff4aegAABAlsJCPaCvWC/1UfSYQT7sjuQjL2Cfc0YkzOseQK7CPaCvWDve4AAAQL9BQT7/jP0BAQIENhKQLAX7AX7rT6SDiPYl92BZOwV7GvGmJxhzRPYRbAX7AV73wMECBDoLyDY95+hJyBAgMBWAoK9YC/Yb/WRdBjBvuwOJGOvYF8zxuQMa57ALoK9YC/Y+x4gQIBAfwHBvv8MPQEBAgS2EhDsBXvBfquPpMMI9mV3IBl7BfuaMSZnWPMEdhHsBXvB3vcAAQIE+gsI9v1n6AkIECCwlYBgL9gL9lt9JB1GsC+7A8nYK9jXjDE5w5onsItgL9gL9r4HCBAg0F9AsO8/Q09AgACBrQQEe8FesN/qI+kwgn3ZHUjGXsG+ZozJGdY8gV0Ee8FesPc9QIAAgf4Cgn3/GXoCAgQIbCUg2Av2gv1WH0mHEezL7kAy9gr2NWNMzrDmCewi2Av2gr3vAQIECPQXEOz7z9ATECBAYCsBwV6wF+y3+kg6jGBfdgeSsVewrxljcoY1T2AXwV6wF+x9DxAgQKC/gGDff4aegAABAlsJCPaCvWC/1UfSYQT7sjuQjL2Cfc0YkzOseQK7CPaCvWDve4AAAQL9BQT7/jP0BAQIENhKQLAX7AX7rT6SDiPYl92BZOwV7GvGmJxhzRPYRbAX7AV73wMECBDoLyDY95+hJyBAgMBWAoK9YC/Yb/WRdBjBvuwOJGOvYF8zxuQMa57ALoK9YC/Y+x4gQIBAfwHBvv8MPQEBAgS2EhDsBXvBfquPpMMI9mV3IBl7BfuaMSZnWPMEdhHsBXvB3vcAAQIE+gsI9v1n6AkIECCwlUAy2P/db/3HyLP+3i9+LbLuh4v+P1/5f2NrpxZOenz9a++ljm3d5gKCbPMBvjh+Mva6HzX3IznDmifoscs3v/29HgctOmXyz44/++DnkadInjly4BeLpixS57UuAQIE7iwg2N95+p6dAAECAYHkX2AE+8DAPmNJwb7G2S6vCwiy/W9EMva6HzX3IznDmifosYtg//qckn92TEXq5JlTtzhlkTqvdQkQIHBnAcH+ztP37AQIEAgIJP8CI9gHBibY16Da5UkBQfZJou1fkIy97kfN+JMzrHmCHrsI9oL9ipsq2K9QtycBAgQeExDsH3PzLgIECBB4i4Bg/zqMfxLndQ//JI6vjrcJCLL970Yy9rofNfcjOcOaJ+ixi2Av2K+4qYL9CnV7EiBA4DEBwf4xN+8iQIAAAcF+6A4I9oL90EXxos8Jsv0vQTL2uh819yM5w5on6LGLYC/Yr7ipgv0KdXsSIEDgMQHB/jE37yJAgAABwX7oDgj2gv3QRfEiwf6AO5CMvYJ9zQVJzrDmCXrsItgL9ituqmC/Qt2eBAgQeExAsH/MzbsIECBAQLAfugOCvWA/dFG8SLA/4A4kY69gX3NBkjOseYIeuwj2gv2KmyrYr1C3JwECBB4TEOwfc/MuAgQIEBDsh+6AYC/YD10ULxLsD7gDydgr2NdckOQMa56gxy6CvWC/4qYK9ivU7UmAAIHHBAT7x9y8iwABAgQE+6E7INgL9kMXxYsE+wPuQDL2CvY1FyQ5w5on6LGLYC/Yr7ipgv0KdXsSIEDgMQHB/jE37yJAgAABwX7oDgj2gv3QRfEiwf6AO5CMvYJ9zQVJzrDmCXrsItgL9ituqmC/Qt2eBAgQeExAsH/MzbsIECBAQLAfugOCvWA/dFG8SLA/4A4kY69gX3NBkjOseYIeuwj2gv2KmyrYr1C3JwECBB4TEOwfc/MuAgQIEBDsh+6AYC/YD10ULxLsD7gDydgr2NdckOQMa56gxy6CvWC/4qYK9ivU7UmAAIHHBAT7x9y8iwABAgQE+6E7INgL9kMXxYsE+wPuQDL2CvY1FyQ5w5on6LGLYC/Yr7ipgv0KdXsSIEDgMQHB/jE37yJAgAABwX7oDgj2gv3QRfEiwf6AO5CMvYJ9zQVJzrDmCXrsItgL9ituqmC/Qt2eBAgQeExAsH/MzbsIECBAQLAfugOCvWA/dFG8SLA/4A4kY69gX3NBkjOseYIeuwj2gv2KmyrYr1C3JwECBB4TEOwfc/MuAgQIEBDsh+6AYC/YD10ULxLsD7gDydgr2NdckOQMa56gxy6CvWC/4qYK9ivU7UmAAIHHBAT7x9y8iwABAgQE+6E7INgL9kMXxYsE+wPuQDL2CvY1FyQ5w5on6LGLYC/Yr7ipgv0KdXsSIEDgMQHB/jE37yJAgAABwX7oDgj2gv3QRfEiwf6AO5CMvYJ9zQVJzrDmCXrsItgL9ituqmC/Qt2eBAgQeExAsH/MzbsIECBAQLAfugOCvWA/dFG8SLA/4A4kY69gX3NBkjOseYIeuwj2gv2KmyrYr1C3JwECBB4TEOwfc/MuAgQIEBDsh+6AYC/YD10ULxLsD7gDydgr2NdckOQMa56gxy6CvWC/4qYK9ivU7UmAAIHHBAT7x9y8iwABAgQE+6E7INgL9kMXxYsE+wPuQDL2CvY1FyQ5w5on6LGLYC/Yr7ipgv0KdXsSIEDgMQHB/jE37yJAgAABwX7oDgj2gv3QRfEiwf6AO5CMvYJ9zQVJzrDmCXrsItgL9ituqmC/Qt2eBAgQeExAsH/MzbsIECBAQLAfugOCvWA/dFG8SLA/4A4kY69gX3NBkjOseYIeuwj2gv2KmyrYr1C3JwECBB4TEOwfc/MuAgQIEFgQ7L/1jS9xJ/CZAl//2ntkCLxVQOx1OU4SENXrpims11mndvrql389srT4HWG1KAECBAi8FBDsXQUCBAgQmCqQ+ovRh4cU7KeO6qjFBPujxjn9YQT76aQWXCgg2NfhC/Z11qmdUn8uFexTE7MuAQIECHwoINi7BwQIECAwVSD1FyPBfuqYjltMsD9upFMfSLCfymmxxQKCfd0ABPs669ROqT+XCvapiVmXAAECBAR7d4AAAQIEpguk/mIk2E8f1VELCvZHjXP6wwj200ktuFBAsK/DF+zrrFM7pf5cKtinJmZdAgQIEBDs3QECBAgQmC6Q+ouRYD99VEctKNgfNc7pDyPYTye14EIBwb4OX7Cvs07tlPpzqWCfmph1CRAgQECwdwcIECBAYLpA6i9Ggv30UR21oGB/1DinP4xgP53UggsFBPs6fMG+zjq1U+ruuywpAAAgAElEQVTPpYJ9amLWJUCAAAHB3h0gQIAAgekCqb8YCfbTR3XUgoL9UeOc/jCC/XRSCy4UEOzr8AX7OuvUTqk/lwr2qYlZlwABAgQEe3eAAAECBKYLpP5iJNhPH9VRCwr2R41z+sMI9tNJLbhQQLCvwxfs66xTO6X+XCrYpyZmXQIECBAQ7N0BAgQIEJgukPqLkWA/fVRHLSjYHzXO6Q8j2E8nteBCAcG+Dl+wr7NO7ZT6c6lgn5qYdQkQIEBAsHcHCBAgQGC6QOovRoL99FEdtaBgf9Q4pz+MYD+d1IILBQT7OnzBvs46tVPqz6WCfWpi1iVAgAABwd4dIECAAIHpAqm/GAn200d11IKC/VHjnP4wgv10UgsuFBDs6/AF+zrr1E6pP5cK9qmJWZcAAQIEBHt3gAABAgSmC6T+YiTYTx/VUQsK9keNc/rDCPbTSS24UECwr8MX7OusUzul/lwq2KcmZl0CBAgQEOzdAQIECBCYLpD6i5FgP31URy0o2B81zukPI9hPJ7XgQgHBvg5fsK+zTu2U+nOpYJ+amHUJECBAQLB3BwgQIEBgukDqL0aC/fRRHbWgYH/UOKc/jGA/ndSCCwUE+zp8wb7OOrVT6s+lgn1qYtYlQIAAAcHeHSBAgACB6QKpvxgJ9tNHddSCgv1R45z+MIL9dFILLhQQ7OvwBfs669ROqT+XCvapiVmXAAECBAR7d4AAAQIEpguk/mIk2E8f1VELCvZHjXP6wwj200ktuFBAsK/DF+zrrFM7pf5cKtinJmZdAgQIEBDs3QECBAgQmC6Q+ouRYD99VEctKNgfNc7pDyPYTye14EIBwb4OX7Cvs07tlPpzqWCfmph1CRAgQECwdwcIECBAYLpA6i9Ggv30UR21oGB/1DinP4xgP53UggsFBPs6fMG+zjq1U+rPpYJ9amLWJUCAAAHB3h0gQIAAgekCqb8YCfbTR3XUgoL9UeOc/jCC/XRSCy4UEOzr8AX7OuvUTqk/lwr2qYlZlwABAgQEe3eAAAECBKYLpP5iJNhPH9VRCwr2R41z+sMI9tNJLbhQQLCvwxfs66xTO6X+XCrYpyZmXQIECBAQ7N0BAgQIEJgukPqLkWA/fVRHLSjYHzXO6Q8j2E8nteBCAcG+Dl+wr7NO7ZT6c6lgn5qYdQkQIEBAsHcHCBAgQGC6QOovRoL99FEdtaBgf9Q4pz+MYD+d1IILBQT7OnzBvs46tVPqz6WCfWpi1iVAgAABwd4dIECAAIHpAqm/GAn200dlwUEB/zFgEOriy0T1i4Devp2AsF4zkh//6fuxjf77/+3PYmtbmAABAgQIECDwNoHPf/WL/8kv8RAgQIAAgVkCgv0sSevsIiDY10xCsK9xtkudgGBfYy3Y1zjbhQABAgQIEKgTEOzrrO1EgACBWwgI9rcY860eUrCvGbdgX+NslzoBwb7GWrCvcbYLAQIECBAgUCcg2NdZ24kAAQK3EBDsbzHmWz2kYF8zbsG+xtkudQKCfY21YF/jbBcCBAgQIECgTkCwr7O2EwECBG4hINjfYsy3ekjBvmbcgn2Ns13qBAT7GmvBvsbZLgQIECBAgECdgGBfZ20nAgQI3EJAsL/FmG/1kIJ9zbgF+xpnu9QJCPY11oJ9jbNdCBAgQIAAgToBwb7O2k4ECBC4hYBgf4sx3+ohBfuacQv2Nc52qRMQ7GusBfsaZ7sQIECAAAECdQKCfZ21nQgQIHALAcH+FmO+1UMK9jXjFuxrnO1SJyDY11gL9jXOdiFAgAABAgTqBAT7Oms7ESBA4BYCgv0txnyrhxTsa8Yt2Nc426VOQLCvsRbsa5ztQoAAAQIECNQJCPZ11nYiQIDALQQE+1uM+VYPKdjXjFuwr3G2S52AYF9jLdjXONuFAAECBAgQqBMQ7Ous7USAAIFbCAj2txjzrR5SsK8Zt2Bf42yXOgHBvsZasK9xtgsBAgQIECBQJyDY11nbiQABArcQEOxvMeZbPaRgXzNuwb7G2S51AoJ9jbVgX+NsFwIECBAgQKBOQLCvs7YTAQIEbiEg2N9izLd6SMG+ZtyCfY2zXeoEBPsaa8G+xtkuBAgQIECAQJ2AYF9nbScCBAjcQkCwv8WYb/WQgn3NuAX7Gme71AkI9jXWgn2Ns10IECBAgACBOgHBvs7aTgQIELiFgGB/izHf6iEF+5pxC/Y1znapExDsa6wF+xpnuxAgQIAAAQJ1AoJ9nbWdCBAgcAsBwf4WY77VQwr2NeMW7Guc7VInINjXWAv2Nc52IUCAAAECBOoEBPs6azsRIEDgFgKC/S3GfKuHFOxrxi3Y1zjbpU5AsK+xFuxrnO1CgAABAgQI1AkI9nXWdiJAgMAtBAT7W4z5Vg8p2NeMW7CvcbZLnYBgX2Mt2Nc424UAAQIECBCoExDs66ztRIAAgVsICPa3GPOtHlKwrxm3YF/jbJc6AcG+xlqwr3G2CwECBAgQIFAnINjXWduJAAECtxAQ7G8x5ls9pGBfM27BvsbZLnUCgn2NtWBf42wXAgQIECBAoE5AsK+zthMBAgRuISDY32LMt3pIwb5m3IJ9jbNd6gQE+xprwb7G2S4ECBAgQIBAnYBgX2dtJwIECNxCQLC/xZhv9ZCCfc24BfsaZ7vUCQj2NdaCfY2zXQgQIECAAIE6AcG+ztpOBAgQuIWAYH+LMd/qIQX7mnEL9jXOdqkTEOxrrAX7Gme7ECBAgAABAnUCgn2dtZ0IlAv803/1R7E9f/LDH8TW7rjwL/78zyLH/tkHP4+s++GiqbD+ld/6ndiZv/EbOY/YoS1MYIGA/8hQg+4/MtQ4J3cR1ZO6NWsL9jXOdiFAgAABAgTqBAT7Oms7ESgXEOzryAX7V9aCfd29sxOBtwkI9jV3Q7CvcU7uItgndWvWFuxrnO1CgAABAgQI1AkI9nXWdiJQLiDY15EL9oJ93W2zE4GnBQT7p41mvEKwn6G4dg3Bfq3/jN0F+xmK1iBAgAABAgR2EhDsd5qGsxCYLCDYTwZ9x3KCvWBfd9vsROBpAcH+aaMZrxDsZyiuXUOwX+s/Y3fBfoaiNQgQIECAAIGdBAT7nabhLAQmCwj2k0EF+yFQ/yTOEJMXEYgKCPZR3l8tLtjXOCd3EeyTujVrC/Y1znYhQIAAAQIE6gQE+zprOxEoFxDs68j9hv0ra8G+7t7ZicDbBAT7mrsh2Nc4J3cR7JO6NWsL9jXOdiFAgAABAgTqBAT7Oms7ESgXEOzryAV7wb7uttmJwNMCgv3TRjNeIdjPUFy7hmC/1n/G7oL9DEVrECBAgAABAjsJCPY7TcNZCEwWEOwng75jOcFesK+7bXYi8LSAYP+00YxXCPYzFNeuIdiv9Z+xu2A/Q9EaBAgQIECAwE4Cgv1O03AWApMFBPvJoIL9EKh/EmeIyYsIRAUE+yjvrxYX7Guck7sI9kndmrUF+xpnuxAgQIAAAQJ1AoJ9nbWdCJQLCPZ15H7D/pW1YF937+xE4G0Cgn3N3RDsa5yTuwj2Sd2atQX7Gme7ECBAgAABAnUCgn2dtZ0IlAsI9nXkgr1gX3fb7ETgaQHB/mmjGa8Q7Gcorl1DsF/rP2N3wX6GojUIECBAgACBnQQE+52m4SwEJgsI9pNB37GcYC/Y1902OxF4WkCwf9poxisE+xmKa9cQ7Nf6z9hdsJ+haA0CBAgQIEBgJwHBfqdpOAuByQKC/WRQwX4I1D+JM8TkRQSiAoJ9lPdXiwv2Nc7JXQT7pG7N2oJ9jbNdCBAgQIAAgToBwb7O2k4EygUE+zpyv2H/ylqwr7t3diLwNgHBvuZuCPY1zsldBPukbs3agn2Ns10IECBAgACBOgHBvs7aTgTKBQT7OnLBXrCvu212IvC0gGD/tNGMVwj2MxTXriHYr/WfsbtgP0PRGgQIECBAgMBOAoL9TtNwFgKTBQT7yaDvWE6wF+zrbpudCDwtINg/bTTjFYL9DMW1awj2a/1n7C7Yz1C0BgECBAgQILCTgGC/0zSchcBkAcF+MqhgPwTqn8QZYvIiAlEBwT7K+6vFBfsa5+Qugn1St2Ztwb7G2S4ECBAgQIBAnYBgX2dtJwLlAoJ9HbnfsH9lLdjX3Ts7EXibgGBfczcE+xrn5C6CfVK3Zm3BvsbZLgQIECBAgECdgGBfZ20nAuUCgn0duWAv2NfdNjsReFpAsH/aaMYrBPsZimvXEOzX+s/YXbCfoWgNAgQIECBAYCcBwX6naTgLgckCgv1k0HcsJ9gL9nW3zU4EnhYQ7J82mvEKwX6G4to1BPu1/jN2F+xnKFqDAAECBAgQ2ElAsN9pGs5CYLKAYD8ZVLAfAvVP4gwxeRGBqIBgH+X91eKCfY1zchfBPqlbs7ZgX+NsFwIECBAgQKBOQLCvs7YTgXIBwb6O3G/Yv7IW7OvunZ0IvE1AsK+5G4J9jXNyF8E+qVuztmBf42wXAgQIECBAoE5AsK+zthOBtwr8Z3//v4jo/O7v/0Fk3a6L/uSHP4gd/f/6v/+P2Nqphb/65V+PLP2tb3wpsq5FCZwmIKqfNlHPQ4DACoFvfvt7K7a1JwECBAgQIEAgJiDYx2gtTGBcQLAft7rySsH+dT3B/spt8l4C1wUE++uGViBAgIBg7w4QIECAAAECpwkI9qdN1PO0FBDsa8Ym2Av2NTfNLgTGBAT7MSevIkCAwLsEBHv3gwABAgQIEDhNQLA/baKep6WAYF8zNsFesK+5aXYhMCYg2I85eRUBAgQEe3eAAAECBAgQuJOAYH+naXvWbQUE+5rRCPaCfc1NswuBMQHBfszJqwgQICDYuwMECBAgQIDAnQQE+ztN27NuKyDY14xGsBfsa26aXQiMCQj2Y05eRYAAAcHeHSBAgAABAgTuJCDY32nannVbAcG+ZjSCvWBfc9PsQmBMQLAfc/IqAgQICPbuAAECBAgQIHAnAcH+TtP2rNsKCPY1oxHsBfuam2YXAmMCgv2Yk1cRIEBAsHcHCBAgQIAAgTsJCPZ3mrZn3VZAsK8ZjWAv2NfcNLsQGBMQ7MecvIoAAQKCvTtAgAABAgQI3ElAsL/TtD3rtgKCfc1oBHvBvuam2YXAmIBgP+bkVQQIEBDs3QECBAgQIEDgTgKC/Z2m7Vm3FRDsa0Yj2Av2NTfNLgTGBAT7MSevIkCAgGDvDhAgQIAAAQJ3EhDs7zRtz7qtgGBfMxrBXrCvuWl2ITAmINiPOXkVAQIEBHt3gAABAgQIELiTgGB/p2l71m0FBPua0Qj2gn3NTbMLgTEBwX7MyasIECAg2LsDBAgQIECAwJ0EBPs7Tduzbisg2NeMRrAX7Gtuml0IjAkI9mNOXkWAAAHB3h0gQIAAAQIE7iQg2N9p2p51WwHBvmY0gr1gX3PT7EJgTECwH3PyKgIECAj27gABAgQIECBwJwHB/k7T9qzbCgj2NaMR7AX7mptmFwJjAoL9mJNXESBAQLB3BwgQIECAAIE7CQj2d5q2Z91WQLCvGY1gL9jX3DS7EBgTEOzHnLyKAAECgr07QIAAAQIECNxJQLC/07Q967YCgn3NaAR7wb7mptmFwJiAYD/m5FUECBAQ7N0BAgQIECBA4E4Cgv2dpu1ZtxUQ7GtGI9gL9jU3zS4ExgQE+zEnryJAgIBg7w4QIECAAAECdxIQ7O80bc+6rYBgXzMawV6wr7lpdiEwJiDYjzl5FQECBAR7d4AAAQIECBC4k4Bgf6dpe9ZtBQT7mtEI9oJ9zU2zC4ExAcF+zMmrCBAgINi7AwQIECBAgMCdBAT7O03bs24rINjXjEawF+xrbppdCIwJCPZjTl5FgAABwd4dIECAAAECBO4kINjfadqedVsBwb5mNIK9YF9z0+xCYExAsB9z8ioCBAgI9u4AAQIECBAgcCcBwf5O0/as2wr803/1R9uerfpgonqd+Fe//OuRzb71jS9F1k0uKpwmdV9f+8d/+n5kMzOMsJYu+hv/9ddj+/3F938cW9vCBAisFfjmt7+39gB2J0CAAAECBAhMFhDsJ4NajsAjAoL9KzXB/pEb9Nh7BPtXbmLvY3fokXcJ9o+o3eM9gv095uwpCcwWEOxni1qPAAECBAgQWC0g2K+egP0JvBAQ7AX7FR8EwV6wX3HvBPsV6j32FOx7zMkpCewmINjvNhHnIUCAAAECBK4KCPZXBb2fwAQBwV6wn3CNnr2EYC/YP/vSTHiDYD8B8dAlBPtDB+uxCIQFBPswsOUJECBAgACBcgHBvpzchgTeFBDsBfsVnwvBXrBfce8E+xXqPfYU7HvMySkJ7CYg2O82EechQIAAAQIErgoI9lcFvZ/ABAHBXrCfcI2evYRgL9g/+9JMeINgPwHx0CUE+0MH67EIhAUE+zCw5QkQIECAAIFyAcG+nNyGBN4UEOwF+xWfC8FesF9x7wT7Feo99hTse8zJKQnsJiDY7zYR5yFAgAABAgSuCgj2VwW9n8AEAcFesJ9wjZ69hGAv2D/70kx4g2A/AfHQJQT7QwfrsQiEBQT7MLDlCRAgQIAAgXIBwb6c3IYE3hQQ7AX7FZ8LwV6wX3HvBPsV6j32FOx7zMkpCewmINjvNhHnIUCAAAECBK4KCPZXBb2fwAQBwV6wn3CNnr2EYC/YP/vSTHiDYD8B8dAlBPtDB+uxCIQFBPswsOUJECBAgACBcgHBvpzchgTeFBDsBfsVnwvBXrBfce8E+xXqPfYU7HvMySkJ7CYg2O82EechQIAAAQIErgoI9lcFvZ/ABAHBXrCfcI2evYRgL9g/+9JMeINgPwHx0CUE+0MH67EIhAUE+zCw5QkQIECAAIFyAcG+nNyGBN4UEOwF+xWfC8FesF9x7wT7Feo99hTse8zJKQnsJiDY7zYR5yFAgAABAgSuCgj2VwW9n8AEAcFesJ9wjZ69hGAv2D/70kx4g2A/AfHQJQT7QwfrsQiEBQT7MLDlCRAgQIAAgXIBwb6c3IYE3hQQ7AX7FZ8LwV6wX3HvBPsV6j32FOx7zMkpCewmINjvNhHnIUCAAAECBK4KCPZXBb2fwAQBwV6wn3CNnr2EYC/YP/vSTHiDYD8B8dAlBPtDB+uxCIQFBPswsOUJECBAgACBcgHBvpzchgTeFBDsBfsVnwvBXrBfce8E+xXqPfYU7HvMySkJ7CYg2O82EechQIAAAQIErgoI9lcFvZ/ABAHBXrCfcI2evYRgL9g/+9JMeINgPwHx0CUE+0MH67EIhAUE+zCw5QkQIECAAIFyAcG+nNyGBN4UEOwF+xWfC8FesF9x7wT7Feo99hTse8zJKQnsJiDY7zYR5yFAgAABAgSuCgj2VwW9n8AEAcFesJ9wjZ69hGAv2D/70kx4g2A/AfHQJQT7QwfrsQiEBQT7MLDlCRAgQIAAgXIBwb6c3IYE3hQQ7AX7FZ8LwV6wX3HvBPsV6j32FOx7zMkpCewmINjvNhHnIUCAAAECBK4KCPZXBb2fwAQBwV6wn3CNnr2EYC/YP/vSTHiDYD8B8dAlBPtDB+uxCIQFBPswsOUJECBAgACBcgHBvpzchgTeFBDsBfsVnwvBXrBfce8E+xXqPfYU7HvMySkJ7CYg2O82EechQIAAAQIErgq0DPapyPQh5s8++PlVU+8n8GwBwf4V2T/5h3/n2X6jb/h7v/mPRl/67Nclv5eefZjBN/zdb/3HwVc+72W/94tfe94bNnj117/23gancAQCPQSSYb2HgFOuEPiL7/94xbb2bCAg2DcYkiMSIECAAAECzxIQ7D/FJdg/6/548SQBwf4VpGA/6VINLCPYv0IS7AcujJcQeCkg2LsKKwQE+xXqPfYU7HvMySkJECBAgACBcQHBXrAfvy1eGRMQ7AX72OV6x8KCvWC/4t7Zs7+AYN9/hh2fQLDvOLWaMwv2Nc52IUCAAAECBOoEBHvBvu622emtAoK9YL/i4yHYC/Yr7p09+wsI9v1n2PEJBPuOU6s5s2Bf42wXAgQIECBAoE5AsBfs626bnQT7gTvgn8QZQJr0EsFesJ90lSxzMwHB/mYD3+RxBftNBrHhMQT7DYfiSAQIECBAgMAlAcFesL90gbx5joDfsH/lKNjPuVMjqwj2gv3IPfEaAp8WEOzdiRUCgv0K9R57CvY95uSUBAgQIECAwLiAYC/Yj98Wr4wJCPaCfexyvWNhwV6wX3Hv7NlfQLDvP8OOTyDYd5xazZkF+xpnuxAgQIAAAQJ1AoK9YF932+z0VgHBXrBf8fEQ7AX7FffOnv0FBPv+M+z4BIJ9x6nVnFmwr3G2CwECBAgQIFAnINgL9nW3zU6C/cAd8E/iDCBNeolgL9hPukqWuZmAYH+zgW/yuIL9JoPY8BiC/YZDcSQCBAgQIEDgkoBgL9hfukDePEfAb9i/chTs59ypkVUEe8F+5J54DYFPCwj27sQKAcF+hXqPPQX7HnNySgIECBAgQGBcQLAX7Mdvi1fGBAR7wT52ud6xsGAv2K+4d/bsLyDY959hxycQ7DtOrebMgn2Ns10IECBAgACBOgHBXrCvu212equAYC/Yr/h4CPaC/Yp7Z8/+AoJ9/xl2fALBvuPUas4s2Nc424UAAQIECBCoExDsBfu622YnwX7gDvgncQaQJr1EsBfsJ10ly9xMQLC/2cA3eVzBfpNBbHgMwX7DoTgSAQIECBAgcElAsBfsL10gb54j4DfsXzkK9nPu1Mgqgr1gP3JPvIbApwUEe3dihYBgv0K9x56CfY85OSUBAgQIECAwLiDYC/bjt8UrYwKCvWAfu1zvWFiwF+xX3Dt79hcQ7PvPsOMTCPYdp1ZzZsG+xtkuBAgQIECAQJ2AYC/Y1902O71VQLAX7Fd8PAR7wX7FvbNnfwHBvv8MOz6BYN9xajVnFuxrnO1CgAABAgQI1AkI9oJ93W2zk2A/cAf8kzgDSJNeItgL9pOukmVuJiDY32zgmzyuYL/JIDY8hmC/4VAciQABAgQIELgkINgL9pcukDfPEfAb9q8cBfs5d2pkFcFesB+5J15D4NMCgr07sUJAsF+h3mNPwb7HnJySAAECBAgQGBcQ7AX78dvilTEBwV6wj12udyws2Av2K+6dPfsLCPb9Z9jxCQT7jlOrObNgX+NsFwIECBAgQKBOQLAX7Otum53eKiDYC/YrPh6CvWC/4t7Zs7+AYN9/hh2fQLDvOLWaMwv2Nc52IUCAAAECBOoEBHvBvu622UmwH7gD/kmcAaRJLxHsBftJV8kyNxMQ7G828E0eV7DfZBAbHkOw33AojkSAAAECBAhcEhDsBftLF8ib5wj4DftXjoL9nDs1sopgL9iP3BOvIfBpAcHenVghINivUO+xp2DfY05OSYAAAQIECIwLfP4//82//8vxlz/vlT/74OfPe4NXE7ipgGD/avB/+d6XY7fgO7/9N7G1/8vf/e9ia6cW/tY3vpRaOrbu17/2XmxtCxMgMCYg2I853fFVovodp77+mQX79TNwAgIECBAgQGCugGA/19NqBB4SEOwF+4cuzsU3CfYXAb2dwE0FBPubDn7gsQX7ASQvmS4g2E8ntSABAgQIECCwWECwXzwA2xP4UECwF+xXfBIE+xXq9iTQX0Cw7z/D1BMI9ilZ675LQLB3PwgQIECAAIHTBAT70ybqeVoKCPaC/YqLK9ivULcngf4Cgn3/GaaeQLBPyVpXsHcHCBAgQIAAgTsJCPZ3mrZn3VZAsBfsV1xOwX6Fuj0J9BcQ7PvPMPUEgn1K1rqCvTtAgAABAgQI3ElAsL/TtD3rtgKCvWC/4nIK9ivU7Umgv4Bg33+GqScQ7FOy1hXs3QECBAgQIEDgTgKC/Z2m7Vm3FRDsBfsVl1OwX6FuTwL9BQT7/jNMPYFgn5K1rmDvDhAgQIAAAQJ3EhDs7zRtz7qtgGAv2K+4nIL9CnV7EugvINj3n2HqCQT7lKx1BXt3gAABAgQIELiTgGB/p2l71m0FBHvBfsXlFOxXqNuTQH8Bwb7/DFNPINinZK0r2LsDBAgQIECAwJ0EBPs7Tduzbisg2Av2Ky6nYL9C3Z4E+gsI9v1nmHoCwT4la13B3h0gQIAAAQIE7iQg2N9p2p51WwHBXrBfcTkF+xXq9iTQX0Cw7z/D1BMI9ilZ6wr27gABAgQIECBwJwHB/k7T9qzbCgj2gv2KyynYr1C3J4H+AoJ9/xmmnkCwT8laV7B3BwgQIECAAIE7CQj2d5q2Z91WQLAX7FdcTsF+hbo9CfQXEOz7zzD1BIJ9Sta6gr07QIAAAQIECNxJQLC/07Q967YCgr1gv+JyCvYr1O1JoL+AYN9/hqknEOxTstYV7N0BAgQIECBA4E4Cgv2dpu1ZtxUQ7AX7FZdTsF+hbk8C/QUE+/4zTD2BYJ+Sta5g7w4QIECAAAECdxIQ7O80bc+6rYBgL9ivuJyC/Qp1exLoLyDY959h6gkE+5SsdQV7d4AAAQIECBC4k4Bgf6dpe9ZtBQR7wX7F5RTsV6jbk0B/AcG+/wxTTyDYp2StK9i7AwQIECBAgMCdBAT7O03bs24rINgL9isup2C/Qt2eBPoLCPb9Z5h6AsE+JWtdwd4dIECAAAECBO4kINjfadqedVsBwV6wX3E5BfsV6vYk0F9AsO8/w9QTCPYpWesK9u4AAQIECBAgcCcBwf5O0/as2woI9oL9issp2K9QtyeB/gKCff8Zpp5AsE/JWlewdwcIECBAgACBOwkI9neatmfdVkCwF+xXXE7BfoW6PQn0FxDs+88w9QSCfUrWuoK9O0CAAAECBAjcSUCwv9O0Peu2AoK9YL/icgr2K9TtSaC/gGDff4apJxDsU7LWFezdAQIECBAgQOBOAoL9nabtWbcVEOwF+xWXU7BfoW5PAv0FBPv+M0w9gWCfkrWuYO8OECBAgAABAncS+Pz/+D9//5fdHvgnP/xB7Mi/+PM/i6z9X/3hdyLrJhft6Pyhx1d+63eSLJG1f/f3/yCy7l++9+XIuhZ9U8wRHD0AACAASURBVOA7v/03EZZ/9r/8t5F1P1z0937xa7G1Uwt//WvvpZa2LoGjBET1o8bZ5mEE+zajWnLQb377e0v2tSkBAgQIECBAoJuAYP+piQn2r0AE+7qPs2BfZ53aSbBPyb6+rmBf42yX/gKCff8ZdnwCwb7j1OrOLNjXWduJAAECBAgQ6C0g2Av2b73Bgn3dh1uwr7NO7STYp2QF+xpZu5wmINifNtEezyPY95jTqlMK9qvk7UuAAAECBAh0ExDsBXvBfoNPrWC/wRAuHkGwvwg4+Ha/YT8I5WW3FxDsb38FlgAI9kvY22wq2LcZlYMSIECAAAECiwUEe8FesF/8Ifxwe8F+gyFcPIJgfxFw8O2C/SCUl91eQLC//RVYAiDYL2Fvs6lg32ZUDkqAAAECBAgsFhDsBXvBfvGHULDfYAATjiDYT0AcWEKwH0DyEgIvBAR712CFgGC/Qr3PnoJ9n1k5KQECBAgQILBWQLAX7AX7tZ/Bj3b3G/YbDOHiEQT7i4CDbxfsB6G87PYCgv3tr8ASAMF+CXubTQX7NqNyUAIECBAgQGCxgGAv2Av2iz+Egv0GA5hwBMF+AuLAEoL9AJKXEHghINi7BisEBPsV6n32FOz7zMpJCRAgQIAAgbUCgr1gL9iv/Qx+tLvfsN9gCBePINhfBBx8u2A/COVltxcQ7G9/BZYACPZL2NtsKti3GZWDEiBAgAABAosFBHvBXrBf/CEU7DcYwIQjCPYTEAeWEOwHkLyEwAsBwd41WCEg2K9Q77OnYN9nVk5KgAABAgQIrBUQ7AV7wX7tZ/Cj3f2G/QZDuHgEwf4i4ODbBftBKC+7vYBgf/srsARAsF/C3mZTwb7NqByUAAECBAgQWCwg2Av2gv3iD6Fgv8EAJhxBsJ+AOLCEYD+A5CUEXggI9q7BCgHBfoV6nz0F+z6zclICBAgQIEBgrYBgL9gL9ms/gx/t7jfsNxjCxSMI9hcBB98u2A9CedntBQT721+BJQCC/RL2NpsK9m1G5aAECBAgQIDAYgHBXrAX7Bd/CAX7DQYw4QiC/QTEgSUE+wEkLyHwQkCwdw1WCAj2K9T77CnY95mVkxIgQIAAAQJrBQR7wV6wX/sZ/Gh3v2G/wRAuHkGwvwg4+HbBfhDKy24vINjf/gosARDsl7C32VSwbzMqByVAgAABAgQWCwj2gr1gv/hDKNhvMIAJRxDsJyAOLCHYDyB5CYEXAoK9a7BCQLBfod5nT8G+z6yclAABAgQIEFgrINgL9oL92s/gR7v7DfsNhnDxCIL9RcDBtwv2g1BednsBwf72V2AJgGC/hL3NpoJ9m1E5KAECBAgQILBYQLAX7AX7xR9CwX6DAUw4gmA/AXFgCcF+AMlLCLwQEOxdgxUCgv0K9T57CvZ9ZuWkBAgQIECAwFoBwV6wF+zXfgY/2t1v2G8whItHEOwvAg6+XbAfhPKy2wsI9re/AksABPsl7G02FezbjMpBCRAgQIAAgcUCgr1gL9gv/hAK9hsMYMIRBPsJiANLCPYDSF5C4IWAYO8arBAQ7Feo99lTsO8zKyclQIAAAQIE1goI9oK9YL/2M/jR7n7DfoMhXDyCYH8RcPDtgv0glJfdXkCwv/0VWAIg2C9hb7OpYN9mVA5KgAABAgQILBYQ7AV7wX7xh1Cw32AAE44g2E9AHFhCsB9A8hICLwQEe9dghYBgv0K9z56CfZ9ZOSkBAgQIECCwVuDz/+I//Ptfpo6QCljf/ekXUke27t8S+OL7H7T0+MkPf9Du3H7DvmZkqe+kmtPP3+Xf/Tf/0/xFwysK9mFgy5cKiOql3DZrLuA/BjQf4IvjC/b9Z+gJCBAgQIAAgRoBwb7GueUugn3d2AT7GmvB/nVnwb7m3tmFwNsEBHt3g8C4gGA/brXrKwX7XSfjXAQIECBAgMBuAoL9bhPZ6DyCfd0wBPsaa8FesK+5aXYhMCYg2I85eRWBDwUE+/73QLDvP0NPQIAAAQIECNQICPY1zi13EezrxibY11gL9oJ9zU2zC4ExAcF+zMmrCAj2Z9wBwf6MOXoKAgQIECBAIC8g2OeN2+4g2NeNTrCvsRbsBfuam2YXAmMCgv2Yk1cREOzPuAOC/Rlz9BQECBAgQIBAXkCwzxu33UGwrxudYF9jLdgL9jU3zS4ExgQE+zEnryIg2J9xBwT7M+boKQgQIECAAIG8gGCfN267g2BfNzrBvsZasBfsa26aXQiMCQj2Y05eRUCwP+MOCPZnzNFTECBAgAABAnkBwT5v3HYHwb5udIJ9jbVgL9jX3DS7EBgTEOzHnLyKgGB/xh0Q7M+Yo6cgQIAAAQIE8gKCfd647Q6Cfd3oBPsaa8FesK+5aXYhMCYg2I85eRUBwf6MOyDYnzFHT0GAAAECBAjkBQT7vHHbHQT7utEJ9jXWgr1gX3PT7EJgTECwH3PyKgKC/Rl3QLA/Y46eggABAgQIEMgLCPZ547Y7CPZ1oxPsa6wFe8G+5qbZhcCYgGA/5uRVBAT7M+6AYH/GHD0FAQIECBAgkBcQ7PPGbXcQ7OtGJ9jXWAv2gn3NTbMLgTEBwX7MyasICPZn3AHB/ow5egoCBAgQIEAgLyDY543b7iDY141OsK+xFuwF+5qbZhcCYwKC/ZiTVxEQ7M+4A4L9GXP0FAQIECBAgEBeQLDPG7fdQbCvG51gX2Mt2Av2NTfNLgTGBAT7MSevIiDYn3EHBPsz5ugpCBAgQIAAgbyAYJ83bruDYF83OsG+xlqwF+xrbppdCIwJCPZjTl5FQLA/4w4I9mfM0VMQIECAAAECeQHBPm/cdgfBvm50gn2NtWAv2NfcNLsQGBMQ7MecvIqAYH/GHRDsz5ijpyBAgAABAgTyAoJ93rjtDoJ93egE+xprwV6wr7lpdiEwJiDYjzl5FQHB/ow7INifMUdPQYAAAQIECOQFBPu8cdsdBPu60Qn2NdaCvWBfc9PsQmBMQLAfc/IqAoL9GXdAsD9jjp6CAAECBAgQyAsI9nnjtjsI9nWjE+xrrAV7wb7mptmFwJiAYD/m5FUEBPsz7oBgf8YcPQUBAgQIECCQFxDs88ZtdxDs60Yn2NdYC/aCfc1NswuBMQHBfszJqwgI9mfcAcH+jDl6CgIECBAgQCAvINjnjdvuINjXjU6wr7EW7AX7mptmFwJjAoL9mJNXERDsz7gDgv0Zc/QUBAgQIECAQF5AsM8bt91BsK8bnWBfYy3YC/Y1N80uBMYEBPsxJ68iINifcQcE+zPm6CkIECBAgACBvIBgnzduu4NgXzc6wb7GWrAX7Gtuml0IjAkI9mNOXkVAsD/jDgj2Z8zRUxAgQIAAAQJ5gc//9Qc/+mV+m7k7/PGf/NXcBf/Wan/53pdja3dbOBk3kzPs5pw8r/v8um7yTifn2G3tv/j+j7sd2XkJvFNAWHdBCBB4RMDPw9fVBPtHbpH3ECBAgAABAncUEOw/NXWB8xVIMm4K9jVfN+6zYF9z017fRaBYoW7PpIBgn9S1NoFzBfw8FOzPvd2ejAABAgQIEEgKCPaC/Vvvl2Cf/OjVrC3YC/Y1N02wX+FszzoBwb7O2k4EThIQ7AX7k+6zZyFAgAABAgTqBAR7wV6wr/u8le8k2Av25ZfuxYYCxQp1eyYFBPukrrUJnCvg56Fgf+7t9mQECBAgQIBAUkCwF+wF++QnbPHagr1gv+IKChQr1O2ZFBDsk7rWJnCugJ+Hgv25t9uTESBAgAABAkkBwV6wF+yTn7DFawv2gv2KKyhQrFC3Z1JAsE/qWpvAuQJ+Hgr2595uT0aAAAECBAgkBQR7wV6wT37CFq8t2Av2K66gQLFC3Z5JAcE+qWttAucK+Hko2J97uz0ZAQIECBAgkBQQ7AV7wT75CVu8tmAv2K+4ggLFCnV7JgUE+6SutQmcK+DnoWB/7u32ZAQIECBAgEBSQLAX7AX75Cds8dqCvWC/4goKFCvU7ZkUEOyTutYmcK6An4eC/bm325MRIECAAAECSQHBXrAX7JOfsMVrC/aC/YorKFCsULdnUkCwT+pam8C5An4eCvbn3m5PRoAAAQIECCQFBHvBXrBPfsIWry3YC/YrrqBAsULdnkkBwT6pa20C5wr4eSjYn3u7PRkBAgQIECCQFBDsBXvBPvkJW7y2YC/Yr7iCAsUKdXsmBQT7pK61CZwr4OehYH/u7fZkBAgQIECAQFJAsBfsBfvkJ2zx2oK9YL/iCgoUK9TtmRQQ7JO61iZwroCfh4L9ubfbkxEgQIAAAQJJAcFesBfsk5+wxWsL9oL9iisoUKxQt2dSQLBP6lqbwLkCfh4K9ufebk9GgAABAgQIJAUEe8FesE9+whavLdgL9iuuoECxQt2eSQHBPqlrbQLnCvh5KNife7s9GQECBAgQIJAUEOwFe8E++QlbvLZgL9ivuIICxQp1eyYFBPukrrUJnCvg56Fgf+7t9mQECBAgQIBAUkCwF+wF++QnbPHagr1gv+IKChQr1O2ZFBDsk7rWJnCugJ+Hgv25t9uTESBAgAABAkkBwV6wF+yTn7DFawv2gv2KKyhQrFC3Z1JAsE/qWpvAuQJ+Hgr2595uT0aAAAECBAgkBQR7wV6wT37CFq8t2Av2K66gQLFC3Z5JAcE+qWttAucK+Hko2J97uz0ZAQIECBAgkBQQ7AV7wT75CVu8tmAv2K+4ggLFCnV7JgUE+6SutQmcK+DnoWB/7u32ZAQIECBAgEBSQLAX7AX75Cds8dqCvWC/4goKFCvU7ZkUEOyTutYmcK6An4eC/bm325MRIECAAAECSQHBXrAX7JOfsMVrC/aC/YorKFCsULdnUkCwT+pam8C5An4eCvbn3m5PRoAAAQIECCQFPv8v/sO//2Vyg25rf/H9DyJH7hhOv/PbfxOx+HDR7/70C7G1UzOMHTi4cPLeJe9HkMTSBD5TQFRxMd4lINi7HwQI7CTQ9WfWN7/9vZ0YnYUAAQIECBAgsK2AYP+p0aRibzKcpm5XMsgK9qmpvb5u8t4l70eNjl0IvBLoGj/MsEZAsK9xtgsBAmMCXX9mCfZj8/UqAgQIECBAgIBgL9i/9VOQDLKCfc2Xj2Bf42yX/gJd40d/+R5PINj3mJNTEriLQNefWYL9XW6o5yRAgAABAgSuCgj2gr1gf/VTtPH7BfuNh+NoWwl0jR9bIR58GMH+4OF6NAINBbr+zBLsG142RyZAgAABAgSWCAj2gr1gv+SjV7OpYF/jbJf+Al3jR3/5Hk8g2PeYk1MSuItA159Zgv1dbqjnJECAAAECBK4KCPaCvWB/9VO08fsF+42H42hbCXSNH1shHnwYwf7g4Xo0Ag0Fuv7MEuwbXjZHJkCAAAECBJYICPaCvWC/5KNXs6lgX+Nsl/4CXeNHf/keTyDY95iTUxK4i0DXn1mC/V1uqOckQIAAAQIErgoI9oK9YH/1U7Tx+wX7jYfjaFsJdI0fWyEefBjB/uDhejQCDQW6/swS7BteNkcmQIAAAQIElggI9oK9YL/ko1ezqWBf42yX/gJd40d/+R5PINj3mJNTEriLQNefWYL9XW6o5yRAgAABAgSuCgj2gr1gf/VTtPH7BfuNh+NoWwl0jR9bIR58GMH+4OF6NAINBbr+zBLsG142RyZAgAABAgSWCAj2gr1gv+SjV7OpYF/jbJf+Al3jR3/5Hk8g2PeYk1MSuItA159Zgv1dbqjnJECAAAECBK4KCPaCvWB/9VO08fsF+42H42hbCXSNH1shHnwYwf7g4Xo0Ag0Fuv7MEuwbXjZHJkCAAAECBJYICPaCvWC/5KNXs6lgX+Nsl/4CXeNHf/keTyDY95iTUxK4i0DXn1mC/V1uqOckQIAAAQIErgoI9oK9YH/1U7Tx+wX7jYfjaFsJdI0fWyEefBjB/uDhejQCDQW6/swS7BteNkcmQIAAAQIElggI9oK9YL/ko1ezqWBf42yX/gJd40d/+R5PINj3mJNTEriLQNefWYL9XW6o5yRAgAABAgSuCgj2gr1gf/VTtPH7BfuNh+NoWwl0jR9bIR58GMH+4OF6NAINBbr+zBLsG142RyZAgAABAgSWCAj2gr1gv+SjV7OpYF/jbJf+Al3jR3/5Hk8g2PeYk1MSuItA159Zgv1dbqjnJECAAAECBK4KCPaCvWB/9VO08fsF+42H42hbCXSNH1shHnwYwf7g4Xo0Ag0Fuv7MEuwbXjZHJkCAAAECBJYICPaCvWC/5KNXs6lgX+Nsl/4CXeNHf/keTyDY95iTUxK4i0DXn1mC/V1uqOckQIAAAQIErgoI9oK9YH/1U7Tx+wX7jYfjaFsJdI0fWyEefBjB/uDhejQCDQW6/swS7BteNkcmQIAAAQIElggI9oK9YL/ko1ezqWBf42yX/gJd40d/+R5PINj3mJNTEriLQNefWYL9XW6o5yRAgAABAgSuCgj2gr1gf/VTtPH7BfuNh+NoWwl0jR9bIR58GMH+4OF6NAINBbr+zBLsG142RyZAgAABAgSWCAj2gr1gv+SjV7OpYF/jbJf+Al3jR3/5Hk8g2PeYk1MSuItA159Zgv1dbqjnJECAAAECBK4KfP6vP/jRL68u8rb3f/enX0gtHVv3i+9/EFk7GU4jB36x6Hd++29SS0fX7XjvUiBdZ5jysC6B0wS6RptucxDsu03MeQnsIdDxO/rHf/p+DO/f/p//X2Ttn33w88i6FiVAgAABAgQIrBIQ7D8lL9i/AukaewX7/jNc9YVoXwLdBDrGoG7GH55XsO84NWcmsF6g43e0YL/+3jgBAQIECBAgQECwF+zf+ikQ7Pt/QXSdYX95T0CgRqBjDKqRmbuLYD/X02oE7iLQ8TtasL/L7fScBAgQIECAwM4Cgr1gL9jv/Am9eDbB/iKgtxPYXKBjDNqc9DOPJ9h3nJozE1gv0PE7WrBff2+cgAABAgQIECAg2Av2gv3B3wOC/cHD9WgEXgh0jEEdByfYd5yaMxNYL9DxO1qwX39vnIAAAQIECBAgINgL9oL9wd8Dgv3Bw/VoBAT7sjsg2JdR24jAUQKC/evj9D+dPep6exgCBAgQIEAgKCDYC/aCffADtnppwX71BOxPICvQMQZlRTKrC/YZV6sSOF2g43e037A//VZ6PgIECBAgQKCDgGAv2Av2HT6pD55RsH8QztsINBHoGIOa0L52TMG+49ScmcB6gY7f0YL9+nvjBAQIECBAgAABwV6wF+wP/h4Q7A8erkcj8EKgYwzqODjBvuPUnJnAeoGO39GC/fp74wQECBAgQIAAAcFesBfsD/4eEOwPHq5HIyDYl90Bwb6M2kYEjhIQ7F8fp3/D/qjr7WEIECBAgACBoIBgL9gL9sEP2OqlBfvVE7A/gaxAxxiUFcmsLthnXK1K4HSBjt/RfsP+9Fvp+QgQIECAAIEOAoK9YC/Yd/ikPnhGwf5BOG8j0ESgYwxqQvvaMQX7jlNzZgLrBTp+Rwv26++NExAgQIAAAQIEBHvBXrA/+HtAsD94uB6NwAuBjjGo4+AE+45Tc2YC6wU6fkcL9uvvjRMQIECAAAECBAR7wV6wP/h7QLA/eLgejYBgX3YHBPsyahsROEpAsH99nP4N+6Out4chQIAAAQIEggKCvWAv2Ac/YKuXFuxXT8D+BLICHWNQViSzumCfcbUqgdMFOn5H+w3702+l5yNAgAABAgQ6CAj2gr1g3+GT+uAZBfsH4byNQBOBjjGoCe1rxxTsO07NmQmsF+j4HS3Yr783TkCAAAECBAgQEOwFe8H+4O8Bwf7g4Xo0Ai8EOsagjoMT7DtOzZkJrBfo+B0t2K+/N05AgAABAgQIEBDsBXvB/uDvAcH+4OF6NAKCfdkdEOzLqG1E4CgBwf71cfo37I+63h6GAAECBAgQCAoI9oK9YB/8gK1eWrBfPQH7E8gKdIxBWZHM6oJ9xtWqBE4X6Pgd7TfsT7+Vno8AAQIECBDoICDYC/aCfYdP6oNnFOwfhPM2Ak0EOsagJrSvHVOw7zg1ZyawXqDjd7Rgv/7eOAEBAgQIECBAQLAX7AX7g78HBPuDh+vRCLwQ6BiDOg5OsO84NWcmsF6g43e0YL/+3jgBAQIECBAgQECwF+wF+4O/BwT7g4fr0QgI9mV3QLAvo7YRgaMEBPvXx+nfsD/qensYAgQIECBAICgg2Av2gn3wA7Z6acF+9QTsTyAr0DEGZUUyqwv2GVerEjhdoON3tN+wP/1Wej4CBAgQIECgg0A02KcAvvvTL6SWtu7fEkjG3uQMk+d2QQgQIEDgmkDHgCXYX5u5dxO4q4Dvu9cn//d+8x/d9Sp4bgIECBAgQIDAswQE+2dx3evFyfAt2N/rLnlaAgQIfCIgYLkLBAjcRcD3nWB/l7vuOQkQIECAAIG5AoL9XM+jVhPsjxqnhyFAgMAWAgLWFmNwCAIECgR83wn2BdfMFgQIECBAgMCBAoL9gUOd9UiC/SxJ6xAgQIDAJwIClrtAgMBdBHzfCfZ3ueuekwABAgQIEJgrINjP9TxqNcH+qHF6GAIECGwhIGBtMQaHIECgQMD3nWBfcM1sQYAAAQIECBwoINgfONRZjyTYz5K0DgECBAh8IiBguQsECNxFwPedYH+Xu+45CRAgQIAAgbkCgv1cz6NWE+yPGqeHIUCAwBYCAtYWY3AIAgQKBHzfCfYF18wWBAgQIECAwIECgv2BQ531SIL9LEnrECBAgMAnAgKWu0CAwF0EfN8J9ne5656TAAECBAgQmCsg2M/1PGo1wf6ocXoYAgQIbCEgYG0xBocgQKBAwPedYF9wzWxBgAABAgQIHCgg2B841FmPJNjPkrQOAQIECHwiIGC5CwQI3EXA951gf5e77jkJECBAgACBuQKC/VzPo1YT7I8ap4chQIDAFgIC1hZjcAgCBAoEfN8J9gXXzBYECBAgQIDAgQKC/YFDnfVIgv0sSesQIECAwCcCApa7QIDAXQR83wn2d7nrnpMAAQIECBCYKyDYz/U8ajXB/qhxehgCBAhsISBgbTEGhyBAoEDA951gX3DNbEGAAAECBAgcKCDYHzjUWY8k2M+StA4BAgQIfCIgYLkLBAjcRcD3nWB/l7vuOQkQIECAAIG5AoL9XM+jVhPsjxqnhyFAgMAWAgLWFmNwCAIECgR83wn2BdfMFgQIECBAgMCBAoL9gUOd9UiC/SxJ6xAgQIDAJwIClrtAgMBdBHzfCfZ3ueuekwABAgQIEJgrINjP9TxqNcH+qHF6GAIECGwhIGBtMQaHIECgQMD3nWBfcM1sQYAAAQIECBwoINgfONRZjyTYz5K0DgECBAh8IiBguQsECNxFwPedYH+Xu+45CRAgQIAAgbkCgv1cz6NWE+yPGqeHIUCAwBYCAtYWY3AIAgQKBHzfCfYF18wWBAgQIECAwIECgv2BQ531SIL9LEnrECBAgMAnAgKWu0CAwF0EfN8J9ne5656TAAECBAgQmCsg2M/1PGo1wf6ocXoYAgQIbCEgYG0xBocgQKBAwPedYF9wzWxBgAABAgQIHCgg2B841FmPJNjPkrQOAQIECHwiIGC5CwQI3EXA951gf5e77jkJECBAgACBuQItg/1cgprVvvvTL8Q2SoX15JljGC8WTnkkz2xtAgQIECBAgACBtwt0jN8//tP3IyP9B//DP4+s++GiyT///6+//w9i57YwAQIECBAgQOAkAcG+aJrJP/ymAnXyzEn2lEfyzNYmQIAAAQIECBAQ7EfugGA/ouQ1BAgQIECAAIG+AoJ90eyS8TsVqJNnTrKnPJJntjYBAgQIECBAgIBgP3IHBPsRJa8hQIAAAQIECPQVEOyLZpeM36lAnTxzkj3lkTyztQkQIECAAAECBAT7kTsg2I8oeQ0BAgQIECBAoK+AYF80u2T8TgXq5JmT7CmP5JmtTYAAAQIECBAgINiP3AHBfkTJawgQIECAAAECfQUE+6LZJeN3KlAnz5xkT3kkz2xtAgQIECBAgAABwX7kDgj2I0peQ4AAAQIECBDoKyDYF80uGb9TgTp55iR7yiN5ZmsTIECAAAECBAgI9iN3QLAfUfIaAgQIECBAgEBfAcG+aHbJ+J0K1MkzJ9lTHskzW5sAAQIECBAgQECwH7kDgv2IktcQIECAAAECBPoKCPZFs0vG71SgTp45yZ7ySJ7Z2gQIECBAgAABAoL9yB0Q7EeUvIYAAQIECBAg0FdAsC+aXTJ+pwJ18sxJ9pRH8szWJkCAAAECBAgQEOxH7oBgP6LkNQQIECBAgACBvgKCfdHskvE7FaiTZ06ypzySZ7Y2AQIECBAgQICAYD9yBwT7ESWvIUCAAAECBAj0FRDsi2aXjN+pQJ08c5I95ZE8s7UJECBAgAABAgQE+5E7INiPKHkNAQIECBAgQKCvgGBfNLtk/E4F6uSZk+wpj+SZrU2AAAECBAgQICDYj9wBwX5EyWsIECBAgAABAn0FBPui2SXjdypQJ8+cZE95JM9sbQIECBAgQIAAAcF+5A4I9iNKXkOAAAECBAgQ6Csg2BfNLhm/U4E6eeYke8ojeWZrEyBAgAABAgQICPYjd0CwH1HyGgIECBAgQIBAXwHBvmh2yfidCtTJMyfZUx7JM1ubAAECBAgQIEBAsB+5A4L9iJLXECBAgAABAgT6Cgj2RbNLxu9UoE6eOcme8kie2doECBAgQIAAAQKC/cgdEOxHlLyGAAECBAgQINBXQLAvml0yfqcCdfLMSfaUR/LM1iZAgAABAgQIEBDsR+6AYD+i5DUECBAgQIAAgb4Cgn3R7JLxOxWok2dOsqc8kme2NgECBAgQIECAgGA/cgcE+xElryFAgAABAgQI9BUQ7Itml4zfqUCdPHOSPeWRPLO1CRAgQIAAAQIEBPuROyDYjyh5DQECBAgQIECgr4BgXzS7ZPxOBerkmZPsKY/kma1NgAABAgQIECAg2I/cAcF+RMlrCBAgQIAAAQJ9BQT7otkl43cqvI3MoAAACtRJREFUUCfPnGRPeSTPbG0CBAgQIECAAAHBfuQOCPYjSl5DgAABAgQIEOgrINgXzS4Zv1OBOnnmJHvKI3lmaxMgQIAAAQIECAj2I3dAsB9R8hoCBAgQIECAQF8Bwb7v7JycAAECBAgQIEBgQOAvvv/jgVd5yc4CP/ir/zRyvH/yD/9OZN2ui/7xn/xV7Oj/5l/+YWxtCxMgQIAAAQIEThIQ7E+apmchQIAAAQIECBB4Q0Cw738pBPuaGQr2Nc52IUCAAAECBAi8S0Cwdz8IECBAgAABAgSOFhDs+49XsK+ZoWBf42wXAgQIECBAgIBg7w4QIECAAAECBAjcVkCw7z96wb5mhoJ9jbNdCBAgQIAAAQKCvTtAgAABAgQIECBwWwHBvv/oBfuaGQr2Nc52IUCAAAECBAgI9u4AAQIECBAgQIDAbQUE+/6jF+xrZijY1zjbhQABAgQIECAg2LsDBAgQIECAAAECtxUQ7PuPXrCvmaFgX+NsFwIECBAgQICAYO8OECBAgAABAgQI3FZAsO8/esG+ZoaCfY2zXQgQIECAAAECgr07QIAAAQIECBAgcFsBwb7/6AX7mhkK9jXOdiFAgAABAgQICPbuAAECBAgQIECAwG0FBPv+oxfsa2Yo2Nc424UAAQIECBAgINi7AwQIECBAgAABArcVEOz7j16wr5mhYF/jbBcCBAgQIECAgGDvDhAgQIAAAQIECNxWQLDvP3rBvmaGgn2Ns10IECBAgAABAoK9O0CAAAECBAgQIHBbAcG+/+gF+5oZCvY1znYhQIAAAQIECAj27gABAgQIECBAgMBtBQT7/qMX7GtmKNjXONuFAAECBAgQICDYuwMECBAgQIAAAQK3FRDs+49esK+ZoWBf42wXAgQIECBAgIBg7w4QIECAAAECBAjcVkCw7z96wb5mhoJ9jbNdCBAgQIAAAQKCvTtAgAABAgQIECBwWwHBvv/oBfuaGQr2Nc52IUCAAAECBAgI9u4AAQIECBAgQIDAbQUE+/6jF+xrZijY1zjbhQABAgQIECAg2LsDBAgQIECAAAECtxUQ7PuPXrCvmaFgX+NsFwIECBAgQICAYO8OECBAgAABAgQI3FZAsO8/esG+ZoaCfY2zXQgQIECAAAECgr07QIAAAQIECBAgcFsBwb7/6AX7mhkK9jXOdiFAgAABAgQICPbuAAECBAgQIECAwG0FBPv+oxfsa2Yo2Nc424UAAQIECBAgINi7AwQIECBAgAABAgQIECDwToHv/vQLMaEvvv9BZO1/8y//MLKuRQkQIECAAAECqwQ+/9cf/OiXqza3LwECBAgQIECAAAECBAjsISDY7zEHpyBAgAABAgTuLSDY33v+np4AAQIECBAgQIAAAQIfCQj2LgIBAgQIECBAYL2AYL9+Bk5AgAABAgQIECBAgACB5QKC/fIROAABAgQIECBA4HOCvUtAgAABAgQIECBAgAABAn7D3h0gQIAAAQIECGwgINhvMARHIECAAAECBAgQIECAwGoBv2G/egL2J0CAAAECBAh8zm/YuwQECBAgQIAAAQIECBAg4N+wdwcIECBAgAABAjsI+A37HabgDAQIECBAgAABAgQIEFgs4DfsFw/A9gQIECBAgACBFwKCvWtAgAABAgQIECBAgAABAv4Ne3eAAAECBAgQILCBgGC/wRAcgQABAgQIECBAgAABAqsF/Ib96gnYnwABAgQIECDgN+zdAQIECBAgQIAAAQIECBB4ISDYuwYECBAgQIAAgfUCfsN+/QycgAABAgQIECBAgAABAssFBPvlI3AAAgQIECBAgIB/w94dIECAAAECBAgQIECAAAG/Ye8OECBAgAABAgR2EPAb9jtMwRkIECBAgAABAgQIECCwWMBv2C8egO0JECBAgAABAi8EBHvXgAABAgQIECBAgAABAgT8G/buAAECBAgQIEBgAwHBfoMhOAIBAgQIECBAgAABAgRWC/gN+9UTsD8BAgQIECBAwG/YuwMECBAgQIAAAQIECBAg8EJAsHcNCBAgQIAAAQLrBfyG/foZOAEBAgQIECBAgAABAgSWCwj2y0fgAAQIECBAgAAB/4a9O0CAAAECBAgQIECAAAECfsPeHSBAgAABAgQI7CDgN+x3mIIzECBAgAABAgQIECBAYLGA37BfPADbEyBAgAABAgReCAj2rgEBAgQIECBAgAABAgQI+Dfs3QECBAgQIECAwAYCgv0GQ3AEAgQIECBAgAABAgQIrBbwG/arJ2B/AgQIECBAgIDfsHcHCBAgQIAAAQIECBAgQOCFgGDvGhAgQIAAAQIE1gv4Dfv1M3ACAgQIECBAgAABAgQIHC3wx3/yV5Hn+8v3vhxZ98NFv/j+B7G1Uwv/73/03cjSP/vg55F1LUqAAAECBAi8KSDYuxUECBAgQIAAAQIECBAgEBUQ7KO8v1pcsK9xtgsBAgQIEEgKCPZJXWsTIECAAAECBAgQIECAwOcE+5pLINjXONuFAAECBAgkBQT7pK61CRAgQIAAAQIECBAgQECwL7oDgn0RtG0IECBAgEBQQLAP4lqaAAECBAgQIECAAAECBD4n2BddAsG+CNo2BAgQIEAgKCDYB3EtTYAAAQIECBAgQIAAAQKCfdUdEOyrpO1DgAABAgRyAoJ9ztbKBAgQIECAAAECBAgQIPBCwL9hX3MNBPsaZ7sQIECAAIGkgGCf1LU2AQIECBAgQIAAAQIECAj2RXdAsC+Ctg0BAgQIEAgKCPZBXEsTIECAAAECBAgQIECAgN+wr7oDgn2VtH0IECBAgEBOQLDP2VqZAAECBAgQIECAAAECBF4I+Cdxaq6BYF/jbBcCBAgQIJAUEOyTutYmQIAAAQIECBAgQIAAAcG+6A4I9kXQtiFAgAABAkEBwT6Ia2kCBAgQIECAAAECBAgQ8Bv2VXdAsK+Stg8BAgQIEMgJCPY5WysTIECAAAECBAgQIECAwAsB/yROzTUQ7Guc7UKAAAECBJICgn1S19oECBAgQIAAAQIECBAgINgX3QHBvgjaNgQIECBAICgg2AdxLU2AAAECBAgQIECAAAECfsO+6g4I9lXS9iFAgAABAjkBwT5na2UCBAgQIECAAAECBAgQeCHgn8SpuQaCfY2zXQgQIECAQFJAsE/qWpsAAQIECBAgQIAAAQIEBPuiOyDYF0HbhgABAgQIBAUE+yCupQkQIECAAAECBAgQIEDAb9hX3QHBvkraPgQIECBAICcg2OdsrUyAAAECBAgQIECAAAECLwT8kzg110Cwr3G2CwECBAgQSAoI9kldaxMgQIAAAQIECBAgQICAYF90BwT7ImjbECBAgACBoIBgH8S1NAECBAgQIECAAAECBAj4DfuqOyDYV0nbhwABAgQI5AQE+5ytlQkQIECAAAECBAgQIEDghYB/EqfmGgj2Nc52IUCAAAECSQHBPqlrbQIECBAgQIAAAQIECBD43Hd/+gUKLwW++P4HLJoL/OSHP2j+BHOP/7u//wdzF2y+mv9w1nyAjk9gAwHBfoMhOAIBAgQIECBAgAABAgROFhDsX01XsO9/0wX712co2L/uIdj3/4x7AgKrBQT71ROwPwECBAgQIECAAAECBA4XEOwF+5OuuGAv2L/rPgv2J33aPQuBNQKC/Rp3uxIgQIAAAQIECBAgQOA2AoK9YH/SZRfsBXvB/qRPtGchsJ/A/w+ZJU8V+90DjwAAAABJRU5ErkJggg=="
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
