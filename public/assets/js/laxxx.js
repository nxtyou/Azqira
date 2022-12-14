"use strict";
var laxxx = {};
window.laxxx = laxxx;
for (
    var parallaxObjects = [],
        transforms = {
            "laxxx-opacity": function (t, a) {
                t.opacity = a;
            },
            "laxxx-translate": function (t, a) {
                t.transform += " translate(".concat(a, "px, ").concat(a, "px)");
            },
            "laxxx-translate-x": function (t, a) {
                t.transform += " translateX(".concat(a, "px)");
            },
            "laxxx-translate-y": function (t, a) {
                t.transform += " translateY(".concat(a, "px)");
            },
            "laxxx-scale": function (t, a) {
                t.transform += " scale(".concat(a, ")");
            },
            "laxxx-scale-x": function (t, a) {
                t.transform += " scaleX(".concat(a, ")");
            },
            "laxxx-scale-y": function (t, a) {
                t.transform += " scaleY(".concat(a, ")");
            },
            "laxxx-skew": function (t, a) {
                t.transform += " skew(".concat(a, "deg, ").concat(a, "deg)");
            },
            "laxxx-skew-x": function (t, a) {
                t.transform += " skewX(".concat(a, "deg)");
            },
            "laxxx-skew-y": function (t, a) {
                t.transform += " skewY(".concat(a, "deg)");
            },
            "laxxx-rotate": function (t, a) {
                t.transform += " rotate(".concat(a, "deg)");
            },
            "laxxx-brightness": function (t, a) {
                t.filter += " brightness(".concat(a, "%)");
            },
            "laxxx-contrast": function (t, a) {
                t.filter += " contrast(".concat(a, "%)");
            },
            "laxxx-hue-rotate": function (t, a) {
                t.filter += " hue-rotate(".concat(a, "deg)");
            },
            "laxxx-blur": function (t, a) {
                t.filter += " blur(".concat(a, "px)");
            },
            "laxxx-invert": function (t, a) {
                t.filter += "  invert(".concat(a, "%)");
            },
            "laxxx-saturate": function (t, a) {
                t.filter += "  saturate(".concat(a, "%)");
            },
            "laxxx-grayscale": function (t, a) {
                t.filter += "  grayscale(".concat(a, "%)");
            },
        },
        _crazy = "",
        i = 0;
    i < 100;
    i++
)
    _crazy += " " + window.innerHeight * (i / 100) + " " + 360 * Math.random() + ", ";

console.log(laxxx)

function intrp(t, a) {
    for (var e = 0; t[e][0] <= a && void 0 !== t[e + 1]; ) e += 1;
    var n = t[e][0],
        r = void 0 === t[e - 1] ? n : t[e - 1][0],
        l = t[e][1],
        o = void 0 === t[e - 1] ? l : t[e - 1][1];
    return Math.min(Math.max((a - r) / (n - r), 0), 1) * (l - o) + o;
}
(laxxx.presets = {
    linger: function (t) {
        return {
            "laxxx-translate-y": "(vh*.5) 0, 0 100, -500 0",
        };
    },
    lazy: function () {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 150;
        return {
            "laxxx-translate-y": "(vh) 0, (-elh) ".concat(t),
        };
    },
    eager: function () {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 150;
        return {
            "laxxx-translate-y": "(vh) 0, (-elh) -".concat(t),
        };
    },
    slalom: function () {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 50;
        return {
            "laxxx-translate-x": "vh ".concat(t, ", (vh*0.8) ").concat(-t, ", (vh*0.6) ").concat(t, ", (vh*0.4) ").concat(-t, ", (vh*0.2) ").concat(t, ", (vh*0) ").concat(-t, ", (-elh) ").concat(t),
        };
    },
    crazy: function (t) {
        return {
            "laxxx-hue-rotate": _crazy,
        };
    },
    spin: function () {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 360;
        return {
            "laxxx-rotate": "(vh) 0, (-elh) ".concat(t),
        };
    },
    spinRev: function () {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 360;
        return {
            "laxxx-rotate": "(vh) 0, (-elh) ".concat(-t),
        };
    },
    spinRevSlow: function () {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 10;
        return {
            "laxxx-rotate": "(vh) 0, (-elh) ".concat(-t),
        };
    },
    spinSlow: function () {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 5;
        return {
            "laxxx-rotate": "(vh) 0, (-elh) ".concat(-t),
        };
    },
    spinIn: function () {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 360;
        return {
            "laxxx-rotate": "vh ".concat(t, ", (vh*0.5) 0"),
        };
    },
    spinOut: function () {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 360;
        return {
            "laxxx-rotate": "(vh*0.5) 0, -elh ".concat(t),
        };
    },
    blurInOut: function () {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 40;
        return {
            "laxxx-blur": "(vh) ".concat(t, ", (vh*0.8) 0, (vh*0.2) 0, 0 ").concat(t),
        };
    },
    blurIn: function () {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 40;
        return {
            "laxxx-blur": "(vh) ".concat(t, ", (vh*0.7) 0"),
        };
    },
    blurOut: function () {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 40;
        return {
            "laxxx-blur": "(vh*0.3) 0, 0 ".concat(t),
        };
    },
    fadeInOut: function () {
        return {
            "laxxx-opacity": "(vh) 0, (vh*0.8) 1, (vh*0.2) 1, 0 0",
        };
    },
    fadeIn: function () {
        return {
            "laxxx-opacity": "(vh) 0, (vh*0.7) 1",
        };
    },
    fadeOut: function () {
        return {
            "laxxx-opacity": "(vh*0.3) 1, 0 0",
        };
    },
    driftLeft: function () {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 100;
        return {
            "laxxx-translate-x": "vh ".concat(t, ", -elh ").concat(-t),
        };
    },
    driftRight: function () {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 100;
        return {
            "laxxx-translate-x": "vh ".concat(-t, ", -elh ").concat(t),
        };
    },
    leftToRight: function () {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1;
        return {
            "laxxx-translate-x": "vh 0, -elh (vw*".concat(t, ")"),
        };
    },
    rightToLeft: function () {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1;
        return {
            "laxxx-translate-x": "vh 0, -elh (vw*".concat(-t, ")"),
        };
    },
    zoomInOut: function () {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0.2;
        return {
            "laxxx-scale": "(vh) ".concat(t, ", (vh*0.8) 1, (vh*0.2) 1, -elh ").concat(t),
        };
    },
    zoomIn: function () {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0.2;
        return {
            "laxxx-scale": "(vh) ".concat(t, ", (vh*0) 1"),
        };
    },
    zoomOut: function () {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0.2;
        return {
            "laxxx-scale": "(vh*0.3) 1, -elh ".concat(t),
        };
    },
}),
    (laxxx.addPreset = function (t, a) {
        laxxx.presets[t] = a;
    }),
    (laxxx.setup = function (t) {
        laxxx.populateParallaxObjects();
    }),
    (laxxx.populateParallaxObjects = function () {
        var selector = Object.keys(transforms)
            .map(function (t) {
                return "[".concat(t, "]");
            })
            .join(",");
        (selector += ",[laxxx-preset]"),
            document.querySelectorAll(selector).forEach(function (el) {
                var o = {
                        el: el,
                        transforms: [],
                    },
                    presetNames = el.attributes["laxxx-preset"] && el.attributes["laxxx-preset"].value;
                presetNames &&
                    (presetNames.split(" ").forEach(function (t) {
                        var a = t.split("-"),
                            e = laxxx.presets[a[0]];
                        if (e) {
                            var n = e(a[1]);
                            for (var r in n) el.setAttribute(r, n[r]);
                        } else console.error("preset #{bits[0]} is not defined");
                    }),
                    el.setAttribute("laxxx-anchor", "self"),
                    el.attributes.removeNamedItem("laxxx-preset"));
                var optimise = !(el.attributes["laxxx-optimize"] && "false" == el.attributes["laxxx-optimize"].value);
                optimise && (el.style["-webkit-backface-visibility"] = "hidden"), el.attributes["laxxx-optimize"] && el.attributes.removeNamedItem("laxxx-optimize");
                for (var i = 0; i < el.attributes.length; i++) {
                    var a = el.attributes[i],
                        bits = a.name.split("-");
                    if ("laxxx" === bits[0])
                        if ("laxxx-anchor" === a.name) {
                            o["laxxx-anchor"] = "self" === a.value ? el : document.querySelector(a.value);
                            var rect = o["laxxx-anchor"].getBoundingClientRect();
                            o["laxxx-anchor-top"] = Math.floor(rect.top) + window.scrollY;
                        } else
                            o.transforms[a.name] = a.value
                                .replace(new RegExp("vw", "g"), window.innerWidth)
                                .replace(new RegExp("vh", "g"), window.innerHeight)
                                .replace(new RegExp("elh", "g"), el.clientHeight)
                                .replace(new RegExp("elw", "g"), el.clientWidth)
                                .replace(new RegExp("-vw", "g"), -window.innerWidth)
                                .replace(new RegExp("-vh", "g"), -window.innerHeight)
                                .replace(new RegExp("-elh", "g"), -el.clientHeight)
                                .replace(new RegExp("-elw", "g"), -el.clientWidth)
                                .replace(/\s+/g, " ")
                                .split(",")
                                .map(function (x) {
                                    return x
                                        .trim()
                                        .split(" ")
                                        .map(function (y) {
                                            return "(" === y[0] ? eval(y) : parseFloat(y);
                                        });
                                })
                                .sort(function (t, a) {
                                    return t[0] - a[0];
                                });
                }
                parallaxObjects.push(o);
            });
    });
var lastScroll = 0;
laxxx.update = function (c) {
    (lastScroll = c),
        parallaxObjects.forEach(function (t) {
            var a = t["laxxx-anchor-top"] ? t["laxxx-anchor-top"] - c : c,
                e = {
                    transform: "",
                    filter: "",
                };
            for (var n in t.transforms) {
                var r = t.transforms[n],
                    l = transforms[n],
                    o = intrp(r, a);
                if (!l) return void console.error("laxxx: " + n + " is not supported");
                l(e, o);
            }
            for (var x in e) 0 === e.opacity ? (t.el.style.opacity = 0) : (t.el.style[x] = e[x]);
        });
};
