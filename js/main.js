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
                    image: " data:image/png;base64,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"
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
