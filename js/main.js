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
                    children: ["nhấn để thay đổi >", " "]
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
                    image: " data:image/jpeg;base64,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"
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
                children: [Object(i.jsx)(Ce, {}), Object(i.jsxs)("span", {
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
