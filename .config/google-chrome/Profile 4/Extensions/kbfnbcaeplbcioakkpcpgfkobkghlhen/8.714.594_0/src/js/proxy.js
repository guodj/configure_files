!function e(t, n, r) {
    function o(c, u) {
        if (!n[c]) {
            if (!t[c]) {
                var a = "function" == typeof require && require;
                if (!u && a) return a(c, !0);
                if (i) return i(c, !0);
                var s = new Error("Cannot find module '" + c + "'");
                throw s.code = "MODULE_NOT_FOUND", s;
            }
            var f = n[c] = {
                exports: {}
            };
            t[c][0].call(f.exports, function(e) {
                var n = t[c][1][e];
                return o(n ? n : e);
            }, f, f.exports, e, t, n, r);
        }
        return n[c].exports;
    }
    for (var i = "function" == typeof require && require, c = 0; c < r.length; c++) o(r[c]);
    return o;
}({
    1: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/json/stringify"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/json/stringify": 5
    } ],
    2: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/object/assign"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/object/assign": 6
    } ],
    3: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/object/define-property"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/object/define-property": 7
    } ],
    4: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        n.__esModule = !0;
        var o = e("../core-js/object/define-property"), i = r(o);
        n["default"] = function(e, t, n) {
            return t in e ? (0, i["default"])(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        };
    }, {
        "../core-js/object/define-property": 3
    } ],
    5: [ function(e, t, n) {
        var r = e("../../modules/_core"), o = r.JSON || (r.JSON = {
            stringify: JSON.stringify
        });
        t.exports = function(e) {
            return o.stringify.apply(o, arguments);
        };
    }, {
        "../../modules/_core": 12
    } ],
    6: [ function(e, t, n) {
        e("../../modules/es6.object.assign"), t.exports = e("../../modules/_core").Object.assign;
    }, {
        "../../modules/_core": 12,
        "../../modules/es6.object.assign": 42
    } ],
    7: [ function(e, t, n) {
        e("../../modules/es6.object.define-property");
        var r = e("../../modules/_core").Object;
        t.exports = function(e, t, n) {
            return r.defineProperty(e, t, n);
        };
    }, {
        "../../modules/_core": 12,
        "../../modules/es6.object.define-property": 43
    } ],
    8: [ function(e, t, n) {
        t.exports = function(e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e;
        };
    }, {} ],
    9: [ function(e, t, n) {
        var r = e("./_is-object");
        t.exports = function(e) {
            if (!r(e)) throw TypeError(e + " is not an object!");
            return e;
        };
    }, {
        "./_is-object": 25
    } ],
    10: [ function(e, t, n) {
        var r = e("./_to-iobject"), o = e("./_to-length"), i = e("./_to-index");
        t.exports = function(e) {
            return function(t, n, c) {
                var u, a = r(t), s = o(a.length), f = i(c, s);
                if (e && n != n) {
                    for (;s > f; ) if (u = a[f++], u != u) return !0;
                } else for (;s > f; f++) if ((e || f in a) && a[f] === n) return e || f || 0;
                return !e && -1;
            };
        };
    }, {
        "./_to-index": 35,
        "./_to-iobject": 37,
        "./_to-length": 38
    } ],
    11: [ function(e, t, n) {
        var r = {}.toString;
        t.exports = function(e) {
            return r.call(e).slice(8, -1);
        };
    }, {} ],
    12: [ function(e, t, n) {
        var r = t.exports = {
            version: "2.4.0"
        };
        "number" == typeof __e && (__e = r);
    }, {} ],
    13: [ function(e, t, n) {
        var r = e("./_a-function");
        t.exports = function(e, t, n) {
            if (r(e), void 0 === t) return e;
            switch (n) {
              case 1:
                return function(n) {
                    return e.call(t, n);
                };

              case 2:
                return function(n, r) {
                    return e.call(t, n, r);
                };

              case 3:
                return function(n, r, o) {
                    return e.call(t, n, r, o);
                };
            }
            return function() {
                return e.apply(t, arguments);
            };
        };
    }, {
        "./_a-function": 8
    } ],
    14: [ function(e, t, n) {
        t.exports = function(e) {
            if (void 0 == e) throw TypeError("Can't call method on  " + e);
            return e;
        };
    }, {} ],
    15: [ function(e, t, n) {
        t.exports = !e("./_fails")(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7;
                }
            }).a;
        });
    }, {
        "./_fails": 19
    } ],
    16: [ function(e, t, n) {
        var r = e("./_is-object"), o = e("./_global").document, i = r(o) && r(o.createElement);
        t.exports = function(e) {
            return i ? o.createElement(e) : {};
        };
    }, {
        "./_global": 20,
        "./_is-object": 25
    } ],
    17: [ function(e, t, n) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    }, {} ],
    18: [ function(e, t, n) {
        var r = e("./_global"), o = e("./_core"), i = e("./_ctx"), c = e("./_hide"), u = "prototype", a = function(e, t, n) {
            var s, f, l, p = e & a.F, d = e & a.G, _ = e & a.S, m = e & a.P, b = e & a.B, y = e & a.W, v = d ? o : o[t] || (o[t] = {}), g = v[u], j = d ? r : _ ? r[t] : (r[t] || {})[u];
            d && (n = t);
            for (s in n) f = !p && j && void 0 !== j[s], f && s in v || (l = f ? j[s] : n[s], 
            v[s] = d && "function" != typeof j[s] ? n[s] : b && f ? i(l, r) : y && j[s] == l ? function(e) {
                var t = function(t, n, r) {
                    if (this instanceof e) {
                        switch (arguments.length) {
                          case 0:
                            return new e();

                          case 1:
                            return new e(t);

                          case 2:
                            return new e(t, n);
                        }
                        return new e(t, n, r);
                    }
                    return e.apply(this, arguments);
                };
                return t[u] = e[u], t;
            }(l) : m && "function" == typeof l ? i(Function.call, l) : l, m && ((v.virtual || (v.virtual = {}))[s] = l, 
            e & a.R && g && !g[s] && c(g, s, l)));
        };
        a.F = 1, a.G = 2, a.S = 4, a.P = 8, a.B = 16, a.W = 32, a.U = 64, a.R = 128, t.exports = a;
    }, {
        "./_core": 12,
        "./_ctx": 13,
        "./_global": 20,
        "./_hide": 22
    } ],
    19: [ function(e, t, n) {
        t.exports = function(e) {
            try {
                return !!e();
            } catch (t) {
                return !0;
            }
        };
    }, {} ],
    20: [ function(e, t, n) {
        var r = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = r);
    }, {} ],
    21: [ function(e, t, n) {
        var r = {}.hasOwnProperty;
        t.exports = function(e, t) {
            return r.call(e, t);
        };
    }, {} ],
    22: [ function(e, t, n) {
        var r = e("./_object-dp"), o = e("./_property-desc");
        t.exports = e("./_descriptors") ? function(e, t, n) {
            return r.f(e, t, o(1, n));
        } : function(e, t, n) {
            return e[t] = n, e;
        };
    }, {
        "./_descriptors": 15,
        "./_object-dp": 27,
        "./_property-desc": 32
    } ],
    23: [ function(e, t, n) {
        t.exports = !e("./_descriptors") && !e("./_fails")(function() {
            return 7 != Object.defineProperty(e("./_dom-create")("div"), "a", {
                get: function() {
                    return 7;
                }
            }).a;
        });
    }, {
        "./_descriptors": 15,
        "./_dom-create": 16,
        "./_fails": 19
    } ],
    24: [ function(e, t, n) {
        var r = e("./_cof");
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
            return "String" == r(e) ? e.split("") : Object(e);
        };
    }, {
        "./_cof": 11
    } ],
    25: [ function(e, t, n) {
        t.exports = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e;
        };
    }, {} ],
    26: [ function(e, t, n) {
        "use strict";
        var r = e("./_object-keys"), o = e("./_object-gops"), i = e("./_object-pie"), c = e("./_to-object"), u = e("./_iobject"), a = Object.assign;
        t.exports = !a || e("./_fails")(function() {
            var e = {}, t = {}, n = Symbol(), r = "abcdefghijklmnopqrst";
            return e[n] = 7, r.split("").forEach(function(e) {
                t[e] = e;
            }), 7 != a({}, e)[n] || Object.keys(a({}, t)).join("") != r;
        }) ? function(e, t) {
            for (var n = c(e), a = arguments.length, s = 1, f = o.f, l = i.f; a > s; ) for (var p, d = u(arguments[s++]), _ = f ? r(d).concat(f(d)) : r(d), m = _.length, b = 0; m > b; ) l.call(d, p = _[b++]) && (n[p] = d[p]);
            return n;
        } : a;
    }, {
        "./_fails": 19,
        "./_iobject": 24,
        "./_object-gops": 28,
        "./_object-keys": 30,
        "./_object-pie": 31,
        "./_to-object": 39
    } ],
    27: [ function(e, t, n) {
        var r = e("./_an-object"), o = e("./_ie8-dom-define"), i = e("./_to-primitive"), c = Object.defineProperty;
        n.f = e("./_descriptors") ? Object.defineProperty : function(e, t, n) {
            if (r(e), t = i(t, !0), r(n), o) try {
                return c(e, t, n);
            } catch (u) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (e[t] = n.value), e;
        };
    }, {
        "./_an-object": 9,
        "./_descriptors": 15,
        "./_ie8-dom-define": 23,
        "./_to-primitive": 40
    } ],
    28: [ function(e, t, n) {
        n.f = Object.getOwnPropertySymbols;
    }, {} ],
    29: [ function(e, t, n) {
        var r = e("./_has"), o = e("./_to-iobject"), i = e("./_array-includes")(!1), c = e("./_shared-key")("IE_PROTO");
        t.exports = function(e, t) {
            var n, u = o(e), a = 0, s = [];
            for (n in u) n != c && r(u, n) && s.push(n);
            for (;t.length > a; ) r(u, n = t[a++]) && (~i(s, n) || s.push(n));
            return s;
        };
    }, {
        "./_array-includes": 10,
        "./_has": 21,
        "./_shared-key": 33,
        "./_to-iobject": 37
    } ],
    30: [ function(e, t, n) {
        var r = e("./_object-keys-internal"), o = e("./_enum-bug-keys");
        t.exports = Object.keys || function(e) {
            return r(e, o);
        };
    }, {
        "./_enum-bug-keys": 17,
        "./_object-keys-internal": 29
    } ],
    31: [ function(e, t, n) {
        n.f = {}.propertyIsEnumerable;
    }, {} ],
    32: [ function(e, t, n) {
        t.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            };
        };
    }, {} ],
    33: [ function(e, t, n) {
        var r = e("./_shared")("keys"), o = e("./_uid");
        t.exports = function(e) {
            return r[e] || (r[e] = o(e));
        };
    }, {
        "./_shared": 34,
        "./_uid": 41
    } ],
    34: [ function(e, t, n) {
        var r = e("./_global"), o = "__core-js_shared__", i = r[o] || (r[o] = {});
        t.exports = function(e) {
            return i[e] || (i[e] = {});
        };
    }, {
        "./_global": 20
    } ],
    35: [ function(e, t, n) {
        var r = e("./_to-integer"), o = Math.max, i = Math.min;
        t.exports = function(e, t) {
            return e = r(e), e < 0 ? o(e + t, 0) : i(e, t);
        };
    }, {
        "./_to-integer": 36
    } ],
    36: [ function(e, t, n) {
        var r = Math.ceil, o = Math.floor;
        t.exports = function(e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? o : r)(e);
        };
    }, {} ],
    37: [ function(e, t, n) {
        var r = e("./_iobject"), o = e("./_defined");
        t.exports = function(e) {
            return r(o(e));
        };
    }, {
        "./_defined": 14,
        "./_iobject": 24
    } ],
    38: [ function(e, t, n) {
        var r = e("./_to-integer"), o = Math.min;
        t.exports = function(e) {
            return e > 0 ? o(r(e), 9007199254740991) : 0;
        };
    }, {
        "./_to-integer": 36
    } ],
    39: [ function(e, t, n) {
        var r = e("./_defined");
        t.exports = function(e) {
            return Object(r(e));
        };
    }, {
        "./_defined": 14
    } ],
    40: [ function(e, t, n) {
        var r = e("./_is-object");
        t.exports = function(e, t) {
            if (!r(e)) return e;
            var n, o;
            if (t && "function" == typeof (n = e.toString) && !r(o = n.call(e))) return o;
            if ("function" == typeof (n = e.valueOf) && !r(o = n.call(e))) return o;
            if (!t && "function" == typeof (n = e.toString) && !r(o = n.call(e))) return o;
            throw TypeError("Can't convert object to primitive value");
        };
    }, {
        "./_is-object": 25
    } ],
    41: [ function(e, t, n) {
        var r = 0, o = Math.random();
        t.exports = function(e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++r + o).toString(36));
        };
    }, {} ],
    42: [ function(e, t, n) {
        var r = e("./_export");
        r(r.S + r.F, "Object", {
            assign: e("./_object-assign")
        });
    }, {
        "./_export": 18,
        "./_object-assign": 26
    } ],
    43: [ function(e, t, n) {
        var r = e("./_export");
        r(r.S + r.F * !e("./_descriptors"), "Object", {
            defineProperty: e("./_object-dp").f
        });
    }, {
        "./_descriptors": 15,
        "./_export": 18,
        "./_object-dp": 27
    } ],
    44: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o() {
            function e(e) {
                var t = e.detail, n = t.name, r = t.data;
                i && i[n].postMessage(r);
            }
            function t() {
                document.dispatchEvent(new CustomEvent("grammarly:pong")), document.dispatchEvent(new CustomEvent("grammarly:reset"));
            }
            function n(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return document.dispatchEvent(new CustomEvent("grammarly:message", {
                    detail: (0, p["default"])({
                        event: e
                    }, t)
                }));
            }
            function r() {
                document.removeEventListener("grammarly:action", e), document.removeEventListener("grammarly:ping", t), 
                document.removeEventListener("grammarly:reset", r), i = null;
            }
            function o(e) {
                var t = window.chrome.runtime.connect({
                    name: e
                });
                return t.onMessage.addListener(function(t) {
                    return n("message", {
                        msg: t,
                        name: e
                    });
                }), t.onDisconnect.addListener(function(t) {
                    console.warn("port malfunction " + e, t), c("proxy.port_malfunction", {
                        name: e,
                        msg: window.chrome.runtime.lastError
                    }), r(), document.dispatchEvent(new CustomEvent("grammarly:error", {
                        detail: {
                            event: "disconnect",
                            name: e
                        }
                    }));
                }), t;
            }
            var i = d.reduce(function(e, t) {
                return (0, p["default"])({}, e, (0, f["default"])({}, t, o(t)));
            }, {});
            c("proxy.init"), document.addEventListener("grammarly:action", e), document.addEventListener("grammarly:ping", t), 
            document.dispatchEvent(new CustomEvent("grammarly:proxyports")), document.addEventListener("grammarly:proxyports", r);
        }
        function i() {
            var e = {
                url: document.location.href,
                headers: {
                    "User-Agent": navigator.userAgent
                }
            };
            return document.referrer && (e.headers.Referer = document.referrer), e;
        }
        function c(e, t) {
            var n = {};
            try {
                (0, a["default"])(t), n = t;
            } catch (r) {
                console.error(r);
            }
            var o = document.createElement("img"), c = {
                logger: "javascript",
                platform: "javascript",
                tags: {
                    application: "browserplugin"
                },
                request: i(),
                message: e,
                extra: n
            }, u = "https://" + _.url + "/api/" + _.project + "/store/\n?sentry_version=4\n&sentry_client=raven-js/1.1.16\n&sentry_key=" + _.key + "\n&sentry_data=" + encodeURIComponent((0, 
            a["default"])(c));
            return o.src = u, o;
        }
        var u = e("babel-runtime/core-js/json/stringify"), a = r(u), s = e("babel-runtime/helpers/defineProperty"), f = r(s), l = e("babel-runtime/core-js/object/assign"), p = r(l), d = [ "bridge", "message:to-priv", "message:to-non-priv" ], _ = {
            url: "felog.grammarly.io",
            key: "b37252e300204b00ad697fe1d3b979e1",
            project: "15"
        };
        "loading" == document.readyState ? document.addEventListener("DOMContentLoaded", o, !1) : o();
    }, {
        "babel-runtime/core-js/json/stringify": 1,
        "babel-runtime/core-js/object/assign": 2,
        "babel-runtime/helpers/defineProperty": 4
    } ]
}, {}, [ 44 ]);