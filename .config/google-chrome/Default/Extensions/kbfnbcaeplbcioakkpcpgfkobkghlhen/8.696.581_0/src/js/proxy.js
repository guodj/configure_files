!function e(t, n, r) {
    function o(s, a) {
        if (!n[s]) {
            if (!t[s]) {
                var u = "function" == typeof require && require;
                if (!a && u) return u(s, !0);
                if (i) return i(s, !0);
                var c = new Error("Cannot find module '" + s + "'");
                throw c.code = "MODULE_NOT_FOUND", c;
            }
            var f = n[s] = {
                exports: {}
            };
            t[s][0].call(f.exports, function(e) {
                var n = t[s][1][e];
                return o(n ? n : e);
            }, f, f.exports, e, t, n, r);
        }
        return n[s].exports;
    }
    for (var i = "function" == typeof require && require, s = 0; s < r.length; s++) o(r[s]);
    return o;
}({
    1: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/json/stringify"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/json/stringify": 6
    } ],
    2: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/object/assign"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/object/assign": 7
    } ],
    3: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/object/define-property"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/object/define-property": 8
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
            return t in e ? i["default"](e, t, {
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
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        n.__esModule = !0;
        var o = e("../core-js/object/assign"), i = r(o);
        n["default"] = i["default"] || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        };
    }, {
        "../core-js/object/assign": 2
    } ],
    6: [ function(e, t, n) {
        var r = e("../../modules/$.core");
        t.exports = function(e) {
            return (r.JSON && r.JSON.stringify || JSON.stringify).apply(JSON, arguments);
        };
    }, {
        "../../modules/$.core": 11
    } ],
    7: [ function(e, t, n) {
        e("../../modules/es6.object.assign"), t.exports = e("../../modules/$.core").Object.assign;
    }, {
        "../../modules/$.core": 11,
        "../../modules/es6.object.assign": 21
    } ],
    8: [ function(e, t, n) {
        var r = e("../../modules/$");
        t.exports = function(e, t, n) {
            return r.setDesc(e, t, n);
        };
    }, {
        "../../modules/$": 18
    } ],
    9: [ function(e, t, n) {
        t.exports = function(e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e;
        };
    }, {} ],
    10: [ function(e, t, n) {
        var r = {}.toString;
        t.exports = function(e) {
            return r.call(e).slice(8, -1);
        };
    }, {} ],
    11: [ function(e, t, n) {
        var r = t.exports = {
            version: "1.2.6"
        };
        "number" == typeof __e && (__e = r);
    }, {} ],
    12: [ function(e, t, n) {
        var r = e("./$.a-function");
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
        "./$.a-function": 9
    } ],
    13: [ function(e, t, n) {
        t.exports = function(e) {
            if (void 0 == e) throw TypeError("Can't call method on  " + e);
            return e;
        };
    }, {} ],
    14: [ function(e, t, n) {
        var r = e("./$.global"), o = e("./$.core"), i = e("./$.ctx"), s = "prototype", a = function(e, t, n) {
            var u, c, f, l = e & a.F, d = e & a.G, m = e & a.S, p = e & a.P, g = e & a.B, y = e & a.W, v = d ? o : o[t] || (o[t] = {}), b = d ? r : m ? r[t] : (r[t] || {})[s];
            d && (n = t);
            for (u in n) c = !l && b && u in b, c && u in v || (f = c ? b[u] : n[u], v[u] = d && "function" != typeof b[u] ? n[u] : g && c ? i(f, r) : y && b[u] == f ? function(e) {
                var t = function(t) {
                    return this instanceof e ? new e(t) : e(t);
                };
                return t[s] = e[s], t;
            }(f) : p && "function" == typeof f ? i(Function.call, f) : f, p && ((v[s] || (v[s] = {}))[u] = f));
        };
        a.F = 1, a.G = 2, a.S = 4, a.P = 8, a.B = 16, a.W = 32, t.exports = a;
    }, {
        "./$.core": 11,
        "./$.ctx": 12,
        "./$.global": 16
    } ],
    15: [ function(e, t, n) {
        t.exports = function(e) {
            try {
                return !!e();
            } catch (t) {
                return !0;
            }
        };
    }, {} ],
    16: [ function(e, t, n) {
        var r = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = r);
    }, {} ],
    17: [ function(e, t, n) {
        var r = e("./$.cof");
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
            return "String" == r(e) ? e.split("") : Object(e);
        };
    }, {
        "./$.cof": 10
    } ],
    18: [ function(e, t, n) {
        var r = Object;
        t.exports = {
            create: r.create,
            getProto: r.getPrototypeOf,
            isEnum: {}.propertyIsEnumerable,
            getDesc: r.getOwnPropertyDescriptor,
            setDesc: r.defineProperty,
            setDescs: r.defineProperties,
            getKeys: r.keys,
            getNames: r.getOwnPropertyNames,
            getSymbols: r.getOwnPropertySymbols,
            each: [].forEach
        };
    }, {} ],
    19: [ function(e, t, n) {
        var r = e("./$"), o = e("./$.to-object"), i = e("./$.iobject");
        t.exports = e("./$.fails")(function() {
            var e = Object.assign, t = {}, n = {}, r = Symbol(), o = "abcdefghijklmnopqrst";
            return t[r] = 7, o.split("").forEach(function(e) {
                n[e] = e;
            }), 7 != e({}, t)[r] || Object.keys(e({}, n)).join("") != o;
        }) ? function(e, t) {
            for (var n = o(e), s = arguments, a = s.length, u = 1, c = r.getKeys, f = r.getSymbols, l = r.isEnum; a > u; ) for (var d, m = i(s[u++]), p = f ? c(m).concat(f(m)) : c(m), g = p.length, y = 0; g > y; ) l.call(m, d = p[y++]) && (n[d] = m[d]);
            return n;
        } : Object.assign;
    }, {
        "./$": 18,
        "./$.fails": 15,
        "./$.iobject": 17,
        "./$.to-object": 20
    } ],
    20: [ function(e, t, n) {
        var r = e("./$.defined");
        t.exports = function(e) {
            return Object(r(e));
        };
    }, {
        "./$.defined": 13
    } ],
    21: [ function(e, t, n) {
        var r = e("./$.export");
        r(r.S + r.F, "Object", {
            assign: e("./$.object-assign")
        });
    }, {
        "./$.export": 14,
        "./$.object-assign": 19
    } ],
    22: [ function(e, t, n) {
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
                var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                return document.dispatchEvent(new CustomEvent("grammarly:message", {
                    detail: d["default"]({
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
                    console.warn("port malfunction " + e, t), s("proxy.port_malfunction", {
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
            var i = m.reduce(function(e, t) {
                return d["default"]({}, e, f["default"]({}, t, o(t)));
            }, {});
            s("proxy.init"), document.addEventListener("grammarly:action", e), document.addEventListener("grammarly:ping", t), 
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
        function s(e, t) {
            var n = {};
            try {
                u["default"](t), n = t;
            } catch (r) {
                console.error(r);
            }
            var o = document.createElement("img"), s = {
                logger: "javascript",
                platform: "javascript",
                tags: {
                    application: "browserplugin"
                },
                request: i(),
                message: e,
                extra: n
            }, a = "https://" + p.url + "/api/" + p.project + "/store/\n?sentry_version=4\n&sentry_client=raven-js/1.1.16\n&sentry_key=" + p.key + "\n&sentry_data=" + encodeURIComponent(u["default"](s));
            return o.src = a, o;
        }
        var a = e("babel-runtime/core-js/json/stringify"), u = r(a), c = e("babel-runtime/helpers/defineProperty"), f = r(c), l = e("babel-runtime/helpers/extends"), d = r(l), m = [ "bridge", "message:to-priv", "message:to-non-priv" ], p = {
            url: "felog.grammarly.io",
            key: "b37252e300204b00ad697fe1d3b979e1",
            project: "15"
        };
        "loading" == document.readyState ? document.addEventListener("DOMContentLoaded", o, !1) : o();
    }, {
        "babel-runtime/core-js/json/stringify": 1,
        "babel-runtime/helpers/defineProperty": 4,
        "babel-runtime/helpers/extends": 5
    } ]
}, {}, [ 22 ]);