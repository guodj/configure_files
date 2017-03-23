!function e(t, n, r) {
    function i(a, s) {
        if (!n[a]) {
            if (!t[a]) {
                var l = "function" == typeof require && require;
                if (!s && l) return l(a, !0);
                if (o) return o(a, !0);
                var c = new Error("Cannot find module '" + a + "'");
                throw c.code = "MODULE_NOT_FOUND", c;
            }
            var u = n[a] = {
                exports: {}
            };
            t[a][0].call(u.exports, function(e) {
                var n = t[a][1][e];
                return i(n ? n : e);
            }, u, u.exports, e, t, n, r);
        }
        return n[a].exports;
    }
    for (var o = "function" == typeof require && require, a = 0; a < r.length; a++) i(r[a]);
    return i;
}({
    1: [ function(e, t, n) {
        "use strict";
        function r(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? "" : arguments[1];
            if (!e) return t;
            var n = (Math.random() * (i.length - 1)).toFixed();
            return r(e - 1, t + i[n]);
        }
        n.__esModule = !0, n["default"] = r;
        var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    }, {} ],
    2: [ function(e, t, n) {
        "use strict";
        var r = e("./log4ts");
        n.Logging = r;
        var i = e("./log4ts_impl");
        n.LoggingImpl = i;
        var o = e("./timeseries");
        n.TimeSeries = o;
        var a = e("./timeseries_impl");
        n.TimeSeriesImpl = a;
    }, {
        "./log4ts": 3,
        "./log4ts_impl": 4,
        "./timeseries": 5,
        "./timeseries_impl": 6
    } ],
    3: [ function(e, t, n) {
        "use strict";
        !function(e) {
            e[e.TRACE = 0] = "TRACE", e[e.DEBUG = 1] = "DEBUG", e[e.INFO = 2] = "INFO", e[e.WARN = 3] = "WARN", 
            e[e.ERROR = 4] = "ERROR", e[e.FATAL = 5] = "FATAL", e[e.OFF = 6] = "OFF";
        }(n.LogLevel || (n.LogLevel = {}));
        n.LogLevel;
    }, {} ],
    4: [ function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        function i(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }
        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        var a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
            };
        }(), s = e("./log4ts"), l = function() {
            function e(t, n) {
                o(this, e), this.name = t, this.level = n;
            }
            return a(e, [ {
                key: "isEnabled",
                value: function(e) {
                    return e >= this.level;
                }
            }, {
                key: "trace",
                value: function(e, t, n) {
                    this.log(s.LogLevel.TRACE, e, t, n);
                }
            }, {
                key: "debug",
                value: function(e, t, n) {
                    this.log(s.LogLevel.DEBUG, e, t, n);
                }
            }, {
                key: "info",
                value: function(e, t, n) {
                    this.log(s.LogLevel.INFO, e, t, n);
                }
            }, {
                key: "warn",
                value: function(e, t, n) {
                    this.log(s.LogLevel.WARN, e, t, n);
                }
            }, {
                key: "error",
                value: function(e, t, n) {
                    this.log(s.LogLevel.ERROR, e, t, n);
                }
            }, {
                key: "fatal",
                value: function(e, t, n) {
                    this.log(s.LogLevel.FATAL, e, t, n);
                }
            }, {
                key: "log",
                value: function(e, t, n, r) {
                    this.isEnabled(e) && (n instanceof Error ? this.logImpl(e, t, n, r) : this.logImpl(e, t, void 0, n || r));
                }
            } ]), e;
        }();
        n.AbstractLogger = l;
        var c = function f(e, t, n, r, i, a) {
            o(this, f), this.level = e, this.message = t, this.logger = n, this.timestamp = r, 
            this.exception = i, this.extra = a;
        };
        n.LogEvent = c;
        var u = function(e) {
            function t(e, n, i) {
                o(this, t);
                var a = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
                return a.appender = i, a;
            }
            return i(t, e), a(t, [ {
                key: "getLogger",
                value: function(e, n) {
                    return new t("<root>" === this.name ? e : this.name + "." + e, n || this.level, this.appender);
                }
            }, {
                key: "logImpl",
                value: function(e, t, n, r) {
                    this.appender(new c(e, t, this.name, Date.now(), n, r));
                }
            } ]), t;
        }(l);
        n.SimpleLogger = u;
        var d = function(e) {
            function t(e, n) {
                return o(this, t), r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, t._printToConsole));
            }
            return i(t, e), a(t, null, [ {
                key: "_printToConsole",
                value: function(e) {
                    var t = console.log;
                    t = e.level < s.LogLevel.WARN ? console.log : e.level < s.LogLevel.ERROR ? console.warn : console.error, 
                    t.apply(console, [ "[" + e.logger + "]: " + s.LogLevel[e.level] + " : " + e.message, e.exception, e.extra ].filter(function(e) {
                        return !!e;
                    }));
                }
            } ]), t;
        }(u);
        n.ConsoleLogger = d;
    }, {
        "./log4ts": 3
    } ],
    5: [ function(e, t, n) {
        "use strict";
    }, {} ],
    6: [ function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        function i(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }
        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        var a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
            };
        }(), s = function() {
            function e(t, n, r) {
                o(this, e), this.name = t, this.timersSink = n, this.countersSink = r;
            }
            return a(e, [ {
                key: "getTimer",
                value: function(t) {
                    return new e(this._createName(t), this.timersSink, this.countersSink);
                }
            }, {
                key: "getCounter",
                value: function(t) {
                    return new e(this._createName(t), this.timersSink, this.countersSink);
                }
            }, {
                key: "_createName",
                value: function(e) {
                    if ("" === e) throw new Error("name is empty");
                    return "" === this.name ? e : this.name + "." + e;
                }
            }, {
                key: "start",
                value: function t() {
                    var t = Date.now(), e = this;
                    return {
                        stop: function() {
                            e.recordTime(Date.now() - t);
                        }
                    };
                }
            }, {
                key: "recordTime",
                value: function(e) {
                    this.timersSink(this.name, e);
                }
            }, {
                key: "timing",
                value: function(e) {
                    var t = this.start();
                    try {
                        return e();
                    } finally {
                        try {
                            t.stop();
                        } catch (n) {}
                    }
                }
            }, {
                key: "increment",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                    this.countersSink(this.name, e);
                }
            }, {
                key: "decrement",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                    this.increment(-e);
                }
            }, {
                key: "parent",
                get: function() {
                    var t = this.name.lastIndexOf("."), n = "" === this.name ? this.name : this.name.substring(0, t === -1 ? 0 : t);
                    return new e(n, this.timersSink, this.countersSink);
                }
            }, {
                key: "root",
                get: function() {
                    return "" === this.name ? this : new e("", this.timersSink, this.countersSink);
                }
            } ]), e;
        }();
        n.AbstractMetricsStorage = s;
        var l = function(e) {
            function t(e) {
                return o(this, t), r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "", function(t, n) {
                    return e("TIMER: " + t + " = " + n);
                }, function(t, n) {
                    return e("COUNTER: " + t + " = " + n);
                }));
            }
            return i(t, e), t;
        }(s);
        n.MetricsPrinter = l;
    }, {} ],
    7: [ function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        function i(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }
        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function a(e) {
            return {
                type: "success",
                value: e
            };
        }
        function s(e) {
            return {
                type: "failure",
                error: e
            };
        }
        function l(e) {
            return e.then(a, s);
        }
        function c(e, t, n) {
            var r = n();
            return e > 0 ? r["catch"](function(r) {
                return new Promise(function(e, n) {
                    return setTimeout(e, t);
                }).then(function(r) {
                    return c(e - 1, t, n);
                });
            }) : r;
        }
        var u = e("@grammarly-npm/cookie"), d = e("./util"), f = "gnar_containerId", m = "gnar_containerId_test", p = 12, h = function() {
            return new Date().setFullYear(new Date().getFullYear() + 10);
        }, g = function() {
            return new Date().setMinutes(new Date().getMinutes() + 10);
        }, b = /^\.\w+\.\w+/, _ = function() {
            function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], r = arguments[2], i = arguments[3], a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e5, s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0, l = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : function() {
                    return Date.now();
                };
                o(this, e), this.primaryStorage = t, this.secondaryStorages = n, this._logger = r, 
                this._metric = i, this._cacheSuccessTimeoutMillis = a, this._cacheFailureTimeoutMillis = s, 
                this._getTime = l, this._allStorages = [ t ].concat(n);
            }
            return e.prototype._expireCache = function(e) {
                0 === e ? this._cacheExpireTimestamp = 0 : e > 0 && (this._cacheExpireTimestamp = this._getTime() + e);
            }, e.prototype.getContainerId = function() {
                var e = this;
                if (void 0 !== this._cache && (void 0 === this._cacheExpireTimestamp || this._getTime() < this._cacheExpireTimestamp)) return this._cache;
                var t = this._metric.getTimer("doGetContainerId.timer").start(), n = this._doGetContainerId();
                return this._cache = n, this._cacheExpireTimestamp = void 0, n.then(function(t) {
                    return e._expireCache(e._cacheSuccessTimeoutMillis);
                }, function(t) {
                    return e._expireCache(e._cacheFailureTimeoutMillis);
                }), n.then(function(n) {
                    t.stop(), e._metric.getCounter("doGetContainerId.success").increment();
                }, function(n) {
                    t.stop(), e._metric.getCounter("doGetContainerId.failure").increment(), e._logger.warn("doGetContainerId.failed", {
                        description: n
                    });
                }), n;
            }, e._generateContainerId = function() {
                return d.alphanumeric(p);
            }, e.prototype._doGetContainerId = function() {
                var t = this;
                return Promise.all(this._allStorages.map(function(e) {
                    return l(e.safeGetContainerId());
                })).then(function(n) {
                    var r = n[0];
                    if ("failure" === r.type) return Promise.reject("getting containerId from primary storage " + ("'" + t.primaryStorage.name + "' has failed: " + r.error));
                    var i = n.find(function(e) {
                        return "success" === e.type && void 0 !== e.value;
                    }), o = "success" === r.type && void 0 === r.value && void 0 !== i, s = void 0, c = !1;
                    void 0 === i ? (s = e._generateContainerId(), c = !0) : s = i.value;
                    var u = n.map(function(e, n) {
                        return "success" === e.type && e.value !== s ? l(t._allStorages[n].safeSetContainerId(s)) : Promise.resolve(a(void 0));
                    }), d = Promise.all(u).then(function(e) {
                        if (o || c) {
                            var t = e[0];
                            if ("success" !== t.type) return Promise.reject("setting containerId to primary storage has failed: " + t.error);
                        }
                        return Promise.resolve(s);
                    });
                    return d.then(function(e) {
                        o ? t._metric.getCounter("recovered").increment() : c && t._metric.getCounter("generated").increment();
                    }), d;
                });
            }, e;
        }();
        n.ContainerIdManager = _;
        var v = function() {
            function e(t) {
                o(this, e), this.name = t;
            }
            return e.prototype.safeSetContainerId = function(e) {
                var t = this;
                return this.ensureAvailable().then(function() {
                    return t.setContainerId(e);
                });
            }, e.prototype.safeGetContainerId = function() {
                var e = this;
                return this.ensureAvailable().then(function() {
                    return e.getContainerId();
                }).then(function(e) {
                    return "" === e ? void 0 : e;
                });
            }, e;
        }();
        n.BaseStorage = v;
        var y = function(e) {
            function t(n, i) {
                o(this, t);
                var a = r(this, e.call(this, "chromeCookie"));
                if (a._url = n, a._domain = i, !b.test(i)) throw new Error('Incorrect cookie domain provided.\n        Use top-level domain, starting from "."');
                return a;
            }
            return i(t, e), t.prototype._hasRuntimeError = function() {
                return window.chrome && window.chrome.runtime && window.chrome.runtime.lastError;
            }, t.prototype.ensureAvailable = function() {
                var e = this;
                return c(2, 1e3, function() {
                    return new Promise(function(t, n) {
                        var r = d.alphanumeric(10);
                        try {
                            window.chrome.cookies.set({
                                name: m,
                                value: r,
                                url: e._url,
                                domain: e._domain,
                                expirationDate: g() / 1e3
                            }, function(i) {
                                var o = e._hasRuntimeError();
                                !i && o && n("chrome.cookie.set failed with an error: " + o.message), i && i.value === r ? t() : n(new Error("ChromeCookieStorage is unavailable.\n              Availability test failed.\n              Tried to set " + r + ", the result is " + (i ? i.value : i) + "."));
                            });
                        } catch (i) {
                            n(i);
                        }
                    });
                });
            }, t.prototype.getContainerId = function() {
                var e = this;
                return new Promise(function(t, n) {
                    try {
                        window.chrome.cookies.get({
                            url: e._url,
                            name: f
                        }, function(r) {
                            var i = e._hasRuntimeError();
                            !r && i && n("chrome.cookie.get failed with an error: " + i.message), t(r ? r.value : void 0);
                        });
                    } catch (r) {
                        n(r);
                    }
                });
            }, t.prototype.setContainerId = function(e) {
                var t = this;
                return new Promise(function(n, r) {
                    try {
                        window.chrome.cookies.set({
                            name: f,
                            value: e,
                            url: t._url,
                            domain: t._domain,
                            expirationDate: h() / 1e3
                        }, function(i) {
                            var o = t._hasRuntimeError();
                            !i && o && r("chrome.cookie.set failed with an error: " + o.message), i && i.value === e || r(new Error("setContainerId failed.\n            Tried to set " + e + ", the result is " + (i ? i.value : i) + ".")), 
                            n();
                        });
                    } catch (i) {
                        r(i);
                    }
                });
            }, t;
        }(v);
        n.ChromeCookieStorage = y;
        var w = function(e) {
            function t() {
                return o(this, t), r(this, e.call(this, "localStorage"));
            }
            return i(t, e), t.prototype.ensureAvailable = function() {
                var e = d.alphanumeric(10);
                return new Promise(function(t, n) {
                    localStorage.setItem(m, e), localStorage.getItem(m) !== e ? n(new Error("LocalStorage is unavailable.\n          Availability test failed.\n          Tried to set " + e + ", the result is " + localStorage.getItem(m) + ".")) : t(), 
                    localStorage.removeItem(m);
                });
            }, t.prototype.getContainerId = function() {
                var e = localStorage.getItem(f);
                return new Promise(function(t, n) {
                    return t(null === e ? void 0 : e);
                });
            }, t.prototype.setContainerId = function(e) {
                return new Promise(function(t, n) {
                    localStorage.setItem(f, e), t();
                });
            }, t;
        }(v);
        n.LocalStorage = w;
        var E = function(e) {
            function t(n) {
                o(this, t);
                var i = r(this, e.call(this, "cookie"));
                if (i._domain = n, !b.test(n)) throw new Error('Incorrect cookie domain provided.\n        Use top-level domain, starting from "."');
                return i;
            }
            return i(t, e), t.prototype._getCookieOptions = function() {
                return {
                    path: "/",
                    domain: this._domain,
                    expires: new Date(h())
                };
            }, t.prototype.ensureAvailable = function() {
                var e = d.alphanumeric(10);
                return new Promise(function(t, n) {
                    u["default"](m, e), u["default"](m) !== e ? n(new Error("CookieStorage is unavailable.\n          Availability test failed.\n          Tried to set " + e + ", the result is " + u["default"](m) + ".")) : t(), 
                    u["default"](m, null);
                });
            }, t.prototype.getContainerId = function() {
                return new Promise(function(e, t) {
                    return e(u["default"](f));
                });
            }, t.prototype.setContainerId = function(e) {
                var t = this;
                return new Promise(function(n, r) {
                    u["default"](f, e, t._getCookieOptions()), n();
                });
            }, t;
        }(v);
        n.CookieStorage = E;
        var k = function(e) {
            function t(n, i) {
                o(this, t);
                var a = r(this, e.call(this, "backend"));
                return a._fetch = n, a._url = i, a._keyName = f, a._testKeyName = m, a._baseUrl = i + "/cookies", 
                a;
            }
            return i(t, e), t.prototype.ensureAvailable = function() {
                var e = this, t = d.alphanumeric(10), n = (g() - Date.now()) / 1e3, r = this._baseUrl + "?name=" + this._testKeyName, i = r + "&value=" + t + "&maxAge=" + n;
                return this._doSend(i, "post").then(function(e) {
                    if (!e.ok) throw new Error("BackendStorage is unavailable.\n          Availability test failed.\n          Tried to set " + t + ". Request failed.\n        ");
                }).then(function() {
                    return e._doSend(r, "get").then(function(n) {
                        if (n.ok) return n.json().then(function(n) {
                            if (n.value !== t) throw new Error("BackendStorage is unavailable.\n                Availability test failed.\n                Tried to get " + e._testKeyName + " from server.\n                Got " + n.value + " instead of " + t + ".");
                        });
                        throw new Error("BackendStorage is unavailable.\n            Availability test failed.\n            Tried to get " + e._testKeyName + " from server. Request failed.");
                    });
                });
            }, t.prototype._doSend = function(e, t) {
                return this._fetch(e, {
                    credentials: "include",
                    method: t
                });
            }, t.prototype.getContainerId = function() {
                var e = this._baseUrl + "?name=" + this._keyName;
                return this._doSend(e, "get").then(function(e) {
                    return e.json();
                }).then(function(e) {
                    return e.value;
                });
            }, t.prototype.setContainerId = function(e) {
                var t = (h() - Date.now()) / 1e3, n = this._baseUrl + "?name=" + this._keyName + "&value=" + e + "&maxAge=" + t;
                return this._doSend(n, "post");
            }, t;
        }(v);
        n.BackendStorage = k;
        var C = function(e) {
            function t() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
                o(this, t);
                var i = r(this, e.call(this, "memory"));
                return i._value = n, i;
            }
            return i(t, e), t.prototype.ensureAvailable = function() {
                return Promise.resolve();
            }, t.prototype.getContainerId = function() {
                return Promise.resolve(this._value);
            }, t.prototype.setContainerId = function(e) {
                return this._value = e, Promise.resolve();
            }, t;
        }(v);
        n.MemoryStorage = C;
    }, {
        "./util": 9,
        "@grammarly-npm/cookie": 10
    } ],
    8: [ function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        var i = e("./util"), o = e("./container_id_manager");
        n.ContainerIdManager = o.ContainerIdManager, n.BaseStorage = o.BaseStorage, n.MemoryStorage = o.MemoryStorage, 
        n.LocalStorage = o.LocalStorage, n.CookieStorage = o.CookieStorage, n.ChromeCookieStorage = o.ChromeCookieStorage, 
        n.BackendStorage = o.BackendStorage;
        var a = /^[a-z][a-zA-Z0-9]*$/, s = [ "batchId", "batchSeq", "cip", "containerId", "cts", "eventName", "events", "instanceId", "isTest", "sts", "userId" ], l = "gnar_nextPingTimestamp", c = function() {
            function e(t, n, o, s, l, c, u) {
                var d = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
                if (r(this, e), this._appName = n, this._appVersion = o, this._fetch = s, this._containerIdManager = l, 
                this._logger = c, this._metric = u, this._storePingTimestamp = d, this._batchId = 0, 
                this._instanceId = i.alphanumeric(8), this._isReady = !1, this._queue = [], !t) throw new Error("Invalid gnar url");
                if (!a.test(n)) throw new Error("Invalid appName " + n);
                if (!o) throw new Error("Invalid appVersion");
                this._eventsUrl = t + "/events", this._pingMaybe();
            }
            return e.prototype.track = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (0 === e.indexOf(this._appName + "/")) throw new Error("Bad event name " + e + " - must not be prefixed with app name,\n        it will be appended automatically");
                Object.keys(t).forEach(function(e) {
                    if (s.indexOf(e) !== -1) throw new Error("Reserved field name '" + e + "' in event data");
                }), this._isReady ? ("ping" !== e && this._pingMaybe(), this._send(e, t)) : this._enqueue(e, t);
            }, e.prototype.page = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                this.track("pageVisited/" + e, Object.assign({
                    url: document.location.href
                }, t));
            }, e.prototype.setUser = function(e, t) {
                if (null === e || "" === e) throw new Error("Invalid userId: " + e);
                var n = this._userId && this._userId !== e && !(/^-/.test(e) && /^-/.test(this._userId));
                this._isTest = t, this._userId = e, n && this._pingMaybe(!0), this._isReady || (this._execQueue(), 
                this._isReady = !0);
            }, e.prototype.getContainerId = function() {
                return this._containerIdManager.getContainerId();
            }, e.prototype._setNextPingTimestamp = function() {
                var e = i.getNextPingDate();
                if (this._nextPingTimestamp = e, this._storePingTimestamp) try {
                    localStorage.setItem(l, e.toString());
                } catch (t) {
                    this._metric.getCounter("nextPingDate.write.failure").increment(), this._logger.warn("nextPingDate.write.failed", {
                        description: t.message
                    });
                }
            }, e.prototype._getNextPingTimestamp = function() {
                var e = this._nextPingTimestamp;
                if (void 0 !== e || !this._storePingTimestamp) return e;
                try {
                    var t = localStorage.getItem(l);
                    e = null === t ? void 0 : parseInt(t, 10);
                } catch (n) {
                    e = void 0, this._metric.getCounter("nextPingDate.read.failure").increment(), this._logger.warn("nextPingDate.read.failed", {
                        description: n.message
                    });
                }
                return e;
            }, e.prototype._shouldPing = function(e) {
                return !!e || (void 0 === this._getNextPingTimestamp() || this._getNextPingTimestamp() < Date.now());
            }, e.prototype._pingMaybe = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (this._shouldPing(e)) {
                    this._setNextPingTimestamp();
                    var t = {
                        app: this._appName,
                        appVersion: this._appVersion,
                        referrer: document.referrer,
                        url: document.location.href,
                        userAgent: navigator.userAgent,
                        navigatorAppName: navigator.appName,
                        navigatorAppCodeName: navigator.appCodeName,
                        navigatorAppVersion: navigator.appVersion,
                        navigatorVendor: navigator.vendor,
                        screenWidth: screen.width,
                        screenHeight: screen.height
                    };
                    this.track("ping", t);
                }
            }, e.prototype.pingMaybe = function() {
                this._pingMaybe();
            }, e.prototype._enqueue = function(e, t) {
                this._queue.push([ e, t, Date.now() ]);
            }, e.prototype._execQueue = function() {
                var e = this;
                this._queue.forEach(function(t) {
                    var n = t[0], r = t[1], i = t[2];
                    return e._send(n, r, i);
                }), this._queue = [];
            }, e.prototype._send = function(e, t) {
                var n = this, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now(), i = this._batchId++;
                this.getContainerId().then(function(o) {
                    var a = {
                        eventName: n._appName + "/" + e,
                        userId: n._userId,
                        isTest: n._isTest,
                        cts: r,
                        containerId: o,
                        instanceId: n._instanceId,
                        batchId: i
                    };
                    return n._doSend(a, t);
                })["catch"](function(e) {
                    n._metric.getCounter("send.failure").increment(), n._logger.warn("send.failed", {
                        description: e
                    });
                });
            }, e.prototype._doSend = function(e, t) {
                return this._fetch(this._eventsUrl, {
                    mode: "cors",
                    credentials: "include",
                    method: "post",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        events: [ Object.assign(e, t) ]
                    })
                });
            }, e;
        }();
        n.GnarClientImpl = c;
    }, {
        "./container_id_manager": 7,
        "./util": 9
    } ],
    9: [ function(e, t, n) {
        "use strict";
        function r(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            if (e <= 0) return t;
            var n = Math.floor(Math.random() * (o.length - 1));
            return r(e - 1, t + o.charAt(n));
        }
        function i() {
            var e = new Date();
            return e.getHours() > 2 && e.setDate(e.getDate() + 1), e.setHours(3), e.setMinutes(Math.floor(60 * Math.random())), 
            e.getTime();
        }
        var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        n.alphanumeric = r, n.getNextPingDate = i;
    }, {} ],
    10: [ function(e, t, n) {
        "use strict";
        function r(e, t, n) {
            return arguments.length < 2 ? o(e) : void i(e, t, n);
        }
        function i(e, t) {
            var n = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2], r = s(e) + "=" + s(t);
            null == t && (n.maxage = -1), n.maxage && (n.expires = new Date(+new Date() + n.maxage)), 
            n.path && (r += "; path=" + n.path), n.domain && (r += "; domain=" + n.domain), 
            n.expires && (r += "; expires=" + n.expires.toUTCString()), n.secure && (r += "; secure"), 
            document.cookie = r;
        }
        function o(e) {
            var t = a(document.cookie);
            return e ? t[e] : t;
        }
        function a(e) {
            var t = {}, n = e.split(/ *; */);
            if (!n[0]) return t;
            for (var r = n, i = Array.isArray(r), o = 0, r = i ? r : r[Symbol.iterator](); ;) {
                var a;
                if (i) {
                    if (o >= r.length) break;
                    a = r[o++];
                } else {
                    if (o = r.next(), o.done) break;
                    a = o.value;
                }
                var s = a;
                s = s.split("="), t[l(s[0])] = l(s[1]);
            }
            return t;
        }
        function s(e) {
            try {
                return encodeURIComponent(e);
            } catch (t) {
                return null;
            }
        }
        function l(e) {
            try {
                return decodeURIComponent(e);
            } catch (t) {
                return null;
            }
        }
        n.__esModule = !0, n["default"] = r;
    }, {} ],
    11: [ function(e, t, n) {
        !function() {
            function e(e, t) {
                var r = n(e, t);
                return void 0 == r.from ? {
                    s: -1,
                    delta: 0
                } : {
                    s: r.from,
                    delta: r.newFragment.length - r.oldFragment.length
                };
            }
            function n(e, t) {
                if (e === t) return {};
                var n = e.length, a = t.length;
                if (o("oldLength: " + n + ". newLength: " + a), a > n) {
                    if (t.substr(0, n) === e) return o("some characters was added to the end"), {
                        from: n,
                        to: n,
                        oldFragment: "",
                        newFragment: t.substr(n)
                    };
                    if (t.substr(a - n) === e) return o("some characters was added to the start"), {
                        from: 0,
                        to: 0,
                        oldFragment: "",
                        newFragment: t.substr(0, a - n)
                    };
                }
                if (a < n) {
                    if (e.substr(n - a) === t) return o("some characters was removed from the end"), 
                    {
                        from: 0,
                        to: n - a,
                        oldFragment: e.substr(0, n - a),
                        newFragment: ""
                    };
                    if (e.substr(0, a) === t) return o("some characters was removed from the start"), 
                    {
                        from: a,
                        to: n,
                        oldFragment: e.substr(a),
                        newFragment: ""
                    };
                }
                var s = a < n ? a : n, l = r(e, t, s), c = i(e, t, n, a, s);
                return o("front: " + l), o("back: " + c), l + c > n && (c -= l + c - n), l + c > a && (c -= l + c - a), 
                {
                    from: l,
                    to: n - c,
                    oldFragment: e.substr(l, n - c - l),
                    newFragment: t.substr(l, a - c - l)
                };
            }
            function r(e, t, n) {
                for (var r = 0; e[r] === t[r] && r < n; ) r += 1;
                return r;
            }
            function i(e, t, n, r, i) {
                for (var o = 0; e[n - o - 1] === t[r - o - 1] && i - o >= 0; ) o += 1;
                return o;
            }
            function o() {}
            "undefined" == typeof t && (window.diffPos = e, window.textdiff = n);
            try {
                t.exports = {
                    diffPos: e,
                    textdiff: n
                };
            } catch (a) {}
        }();
    }, {} ],
    12: [ function(e, t, n) {
        "undefined" != typeof t && (t.exports = e("./lib/textdiff"));
    }, {
        "./lib/textdiff": 11
    } ],
    13: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/array/from"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/array/from": 37
    } ],
    14: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/get-iterator"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/get-iterator": 38
    } ],
    15: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/is-iterable"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/is-iterable": 39
    } ],
    16: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/json/stringify"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/json/stringify": 40
    } ],
    17: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/map"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/map": 41
    } ],
    18: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/object/assign"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/object/assign": 42
    } ],
    19: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/object/create"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/object/create": 43
    } ],
    20: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/object/define-property"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/object/define-property": 44
    } ],
    21: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/object/get-prototype-of"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/object/get-prototype-of": 45
    } ],
    22: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/object/keys"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/object/keys": 46
    } ],
    23: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/object/set-prototype-of"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/object/set-prototype-of": 47
    } ],
    24: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/object/values"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/object/values": 48
    } ],
    25: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/promise"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/promise": 49
    } ],
    26: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/symbol"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/symbol": 50
    } ],
    27: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/symbol/iterator"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/symbol/iterator": 51
    } ],
    28: [ function(e, t, n) {
        "use strict";
        n.__esModule = !0, n["default"] = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        };
    }, {} ],
    29: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        n.__esModule = !0;
        var i = e("../core-js/object/define-property"), o = r(i);
        n["default"] = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    (0, o["default"])(e, r.key, r);
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
            };
        }();
    }, {
        "../core-js/object/define-property": 20
    } ],
    30: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        n.__esModule = !0;
        var i = e("../core-js/object/define-property"), o = r(i);
        n["default"] = function(e, t, n) {
            return t in e ? (0, o["default"])(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        };
    }, {
        "../core-js/object/define-property": 20
    } ],
    31: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        n.__esModule = !0;
        var i = e("../core-js/object/assign"), o = r(i);
        n["default"] = o["default"] || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        };
    }, {
        "../core-js/object/assign": 18
    } ],
    32: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        n.__esModule = !0;
        var i = e("../core-js/object/set-prototype-of"), o = r(i), a = e("../core-js/object/create"), s = r(a), l = e("../helpers/typeof"), c = r(l);
        n["default"] = function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof t ? "undefined" : (0, 
            c["default"])(t)));
            e.prototype = (0, s["default"])(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (o["default"] ? (0, o["default"])(e, t) : e.__proto__ = t);
        };
    }, {
        "../core-js/object/create": 19,
        "../core-js/object/set-prototype-of": 23,
        "../helpers/typeof": 36
    } ],
    33: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        n.__esModule = !0;
        var i = e("../helpers/typeof"), o = r(i);
        n["default"] = function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== ("undefined" == typeof t ? "undefined" : (0, o["default"])(t)) && "function" != typeof t ? e : t;
        };
    }, {
        "../helpers/typeof": 36
    } ],
    34: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        n.__esModule = !0;
        var i = e("../core-js/is-iterable"), o = r(i), a = e("../core-js/get-iterator"), s = r(a);
        n["default"] = function() {
            function e(e, t) {
                var n = [], r = !0, i = !1, o = void 0;
                try {
                    for (var a, l = (0, s["default"])(e); !(r = (a = l.next()).done) && (n.push(a.value), 
                    !t || n.length !== t); r = !0) ;
                } catch (c) {
                    i = !0, o = c;
                } finally {
                    try {
                        !r && l["return"] && l["return"]();
                    } finally {
                        if (i) throw o;
                    }
                }
                return n;
            }
            return function(t, n) {
                if (Array.isArray(t)) return t;
                if ((0, o["default"])(Object(t))) return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
        }();
    }, {
        "../core-js/get-iterator": 14,
        "../core-js/is-iterable": 15
    } ],
    35: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        n.__esModule = !0;
        var i = e("../core-js/array/from"), o = r(i);
        n["default"] = function(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n;
            }
            return (0, o["default"])(e);
        };
    }, {
        "../core-js/array/from": 13
    } ],
    36: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        n.__esModule = !0;
        var i = e("../core-js/symbol/iterator"), o = r(i), a = e("../core-js/symbol"), s = r(a), l = "function" == typeof s["default"] && "symbol" == typeof o["default"] ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof s["default"] && e.constructor === s["default"] && e !== s["default"].prototype ? "symbol" : typeof e;
        };
        n["default"] = "function" == typeof s["default"] && "symbol" === l(o["default"]) ? function(e) {
            return "undefined" == typeof e ? "undefined" : l(e);
        } : function(e) {
            return e && "function" == typeof s["default"] && e.constructor === s["default"] && e !== s["default"].prototype ? "symbol" : "undefined" == typeof e ? "undefined" : l(e);
        };
    }, {
        "../core-js/symbol": 26,
        "../core-js/symbol/iterator": 27
    } ],
    37: [ function(e, t, n) {
        e("../../modules/es6.string.iterator"), e("../../modules/es6.array.from"), t.exports = e("../../modules/_core").Array.from;
    }, {
        "../../modules/_core": 66,
        "../../modules/es6.array.from": 135,
        "../../modules/es6.string.iterator": 146
    } ],
    38: [ function(e, t, n) {
        e("../modules/web.dom.iterable"), e("../modules/es6.string.iterator"), t.exports = e("../modules/core.get-iterator");
    }, {
        "../modules/core.get-iterator": 133,
        "../modules/es6.string.iterator": 146,
        "../modules/web.dom.iterable": 152
    } ],
    39: [ function(e, t, n) {
        e("../modules/web.dom.iterable"), e("../modules/es6.string.iterator"), t.exports = e("../modules/core.is-iterable");
    }, {
        "../modules/core.is-iterable": 134,
        "../modules/es6.string.iterator": 146,
        "../modules/web.dom.iterable": 152
    } ],
    40: [ function(e, t, n) {
        var r = e("../../modules/_core"), i = r.JSON || (r.JSON = {
            stringify: JSON.stringify
        });
        t.exports = function(e) {
            return i.stringify.apply(i, arguments);
        };
    }, {
        "../../modules/_core": 66
    } ],
    41: [ function(e, t, n) {
        e("../modules/es6.object.to-string"), e("../modules/es6.string.iterator"), e("../modules/web.dom.iterable"), 
        e("../modules/es6.map"), e("../modules/es7.map.to-json"), t.exports = e("../modules/_core").Map;
    }, {
        "../modules/_core": 66,
        "../modules/es6.map": 137,
        "../modules/es6.object.to-string": 144,
        "../modules/es6.string.iterator": 146,
        "../modules/es7.map.to-json": 148,
        "../modules/web.dom.iterable": 152
    } ],
    42: [ function(e, t, n) {
        e("../../modules/es6.object.assign"), t.exports = e("../../modules/_core").Object.assign;
    }, {
        "../../modules/_core": 66,
        "../../modules/es6.object.assign": 138
    } ],
    43: [ function(e, t, n) {
        e("../../modules/es6.object.create");
        var r = e("../../modules/_core").Object;
        t.exports = function(e, t) {
            return r.create(e, t);
        };
    }, {
        "../../modules/_core": 66,
        "../../modules/es6.object.create": 139
    } ],
    44: [ function(e, t, n) {
        e("../../modules/es6.object.define-property");
        var r = e("../../modules/_core").Object;
        t.exports = function(e, t, n) {
            return r.defineProperty(e, t, n);
        };
    }, {
        "../../modules/_core": 66,
        "../../modules/es6.object.define-property": 140
    } ],
    45: [ function(e, t, n) {
        e("../../modules/es6.object.get-prototype-of"), t.exports = e("../../modules/_core").Object.getPrototypeOf;
    }, {
        "../../modules/_core": 66,
        "../../modules/es6.object.get-prototype-of": 141
    } ],
    46: [ function(e, t, n) {
        e("../../modules/es6.object.keys"), t.exports = e("../../modules/_core").Object.keys;
    }, {
        "../../modules/_core": 66,
        "../../modules/es6.object.keys": 142
    } ],
    47: [ function(e, t, n) {
        e("../../modules/es6.object.set-prototype-of"), t.exports = e("../../modules/_core").Object.setPrototypeOf;
    }, {
        "../../modules/_core": 66,
        "../../modules/es6.object.set-prototype-of": 143
    } ],
    48: [ function(e, t, n) {
        e("../../modules/es7.object.values"), t.exports = e("../../modules/_core").Object.values;
    }, {
        "../../modules/_core": 66,
        "../../modules/es7.object.values": 149
    } ],
    49: [ function(e, t, n) {
        e("../modules/es6.object.to-string"), e("../modules/es6.string.iterator"), e("../modules/web.dom.iterable"), 
        e("../modules/es6.promise"), t.exports = e("../modules/_core").Promise;
    }, {
        "../modules/_core": 66,
        "../modules/es6.object.to-string": 144,
        "../modules/es6.promise": 145,
        "../modules/es6.string.iterator": 146,
        "../modules/web.dom.iterable": 152
    } ],
    50: [ function(e, t, n) {
        e("../../modules/es6.symbol"), e("../../modules/es6.object.to-string"), e("../../modules/es7.symbol.async-iterator"), 
        e("../../modules/es7.symbol.observable"), t.exports = e("../../modules/_core").Symbol;
    }, {
        "../../modules/_core": 66,
        "../../modules/es6.object.to-string": 144,
        "../../modules/es6.symbol": 147,
        "../../modules/es7.symbol.async-iterator": 150,
        "../../modules/es7.symbol.observable": 151
    } ],
    51: [ function(e, t, n) {
        e("../../modules/es6.string.iterator"), e("../../modules/web.dom.iterable"), t.exports = e("../../modules/_wks-ext").f("iterator");
    }, {
        "../../modules/_wks-ext": 130,
        "../../modules/es6.string.iterator": 146,
        "../../modules/web.dom.iterable": 152
    } ],
    52: [ function(e, t, n) {
        t.exports = function(e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e;
        };
    }, {} ],
    53: [ function(e, t, n) {
        t.exports = function() {};
    }, {} ],
    54: [ function(e, t, n) {
        t.exports = function(e, t, n, r) {
            if (!(e instanceof t) || void 0 !== r && r in e) throw TypeError(n + ": incorrect invocation!");
            return e;
        };
    }, {} ],
    55: [ function(e, t, n) {
        var r = e("./_is-object");
        t.exports = function(e) {
            if (!r(e)) throw TypeError(e + " is not an object!");
            return e;
        };
    }, {
        "./_is-object": 86
    } ],
    56: [ function(e, t, n) {
        var r = e("./_for-of");
        t.exports = function(e, t) {
            var n = [];
            return r(e, !1, n.push, n, t), n;
        };
    }, {
        "./_for-of": 76
    } ],
    57: [ function(e, t, n) {
        var r = e("./_to-iobject"), i = e("./_to-length"), o = e("./_to-index");
        t.exports = function(e) {
            return function(t, n, a) {
                var s, l = r(t), c = i(l.length), u = o(a, c);
                if (e && n != n) {
                    for (;c > u; ) if (s = l[u++], s != s) return !0;
                } else for (;c > u; u++) if ((e || u in l) && l[u] === n) return e || u || 0;
                return !e && -1;
            };
        };
    }, {
        "./_to-index": 122,
        "./_to-iobject": 124,
        "./_to-length": 125
    } ],
    58: [ function(e, t, n) {
        var r = e("./_ctx"), i = e("./_iobject"), o = e("./_to-object"), a = e("./_to-length"), s = e("./_array-species-create");
        t.exports = function(e, t) {
            var n = 1 == e, l = 2 == e, c = 3 == e, u = 4 == e, d = 6 == e, f = 5 == e || d, m = t || s;
            return function(t, s, p) {
                for (var h, g, b = o(t), _ = i(b), v = r(s, p, 3), y = a(_.length), w = 0, E = n ? m(t, y) : l ? m(t, 0) : void 0; y > w; w++) if ((f || w in _) && (h = _[w], 
                g = v(h, w, b), e)) if (n) E[w] = g; else if (g) switch (e) {
                  case 3:
                    return !0;

                  case 5:
                    return h;

                  case 6:
                    return w;

                  case 2:
                    E.push(h);
                } else if (u) return !1;
                return d ? -1 : c || u ? u : E;
            };
        };
    }, {
        "./_array-species-create": 60,
        "./_ctx": 68,
        "./_iobject": 83,
        "./_to-length": 125,
        "./_to-object": 126
    } ],
    59: [ function(e, t, n) {
        var r = e("./_is-object"), i = e("./_is-array"), o = e("./_wks")("species");
        t.exports = function(e) {
            var t;
            return i(e) && (t = e.constructor, "function" != typeof t || t !== Array && !i(t.prototype) || (t = void 0), 
            r(t) && (t = t[o], null === t && (t = void 0))), void 0 === t ? Array : t;
        };
    }, {
        "./_is-array": 85,
        "./_is-object": 86,
        "./_wks": 131
    } ],
    60: [ function(e, t, n) {
        var r = e("./_array-species-constructor");
        t.exports = function(e, t) {
            return new (r(e))(t);
        };
    }, {
        "./_array-species-constructor": 59
    } ],
    61: [ function(e, t, n) {
        var r = e("./_cof"), i = e("./_wks")("toStringTag"), o = "Arguments" == r(function() {
            return arguments;
        }()), a = function(e, t) {
            try {
                return e[t];
            } catch (n) {}
        };
        t.exports = function(e) {
            var t, n, s;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = a(t = Object(e), i)) ? n : o ? r(t) : "Object" == (s = r(t)) && "function" == typeof t.callee ? "Arguments" : s;
        };
    }, {
        "./_cof": 62,
        "./_wks": 131
    } ],
    62: [ function(e, t, n) {
        var r = {}.toString;
        t.exports = function(e) {
            return r.call(e).slice(8, -1);
        };
    }, {} ],
    63: [ function(e, t, n) {
        "use strict";
        var r = e("./_object-dp").f, i = e("./_object-create"), o = e("./_redefine-all"), a = e("./_ctx"), s = e("./_an-instance"), l = e("./_defined"), c = e("./_for-of"), u = e("./_iter-define"), d = e("./_iter-step"), f = e("./_set-species"), m = e("./_descriptors"), p = e("./_meta").fastKey, h = m ? "_s" : "size", g = function(e, t) {
            var n, r = p(t);
            if ("F" !== r) return e._i[r];
            for (n = e._f; n; n = n.n) if (n.k == t) return n;
        };
        t.exports = {
            getConstructor: function(e, t, n, u) {
                var d = e(function(e, r) {
                    s(e, d, t, "_i"), e._i = i(null), e._f = void 0, e._l = void 0, e[h] = 0, void 0 != r && c(r, n, e[u], e);
                });
                return o(d.prototype, {
                    clear: function() {
                        for (var e = this, t = e._i, n = e._f; n; n = n.n) n.r = !0, n.p && (n.p = n.p.n = void 0), 
                        delete t[n.i];
                        e._f = e._l = void 0, e[h] = 0;
                    },
                    "delete": function(e) {
                        var t = this, n = g(t, e);
                        if (n) {
                            var r = n.n, i = n.p;
                            delete t._i[n.i], n.r = !0, i && (i.n = r), r && (r.p = i), t._f == n && (t._f = r), 
                            t._l == n && (t._l = i), t[h]--;
                        }
                        return !!n;
                    },
                    forEach: function(e) {
                        s(this, d, "forEach");
                        for (var t, n = a(e, arguments.length > 1 ? arguments[1] : void 0, 3); t = t ? t.n : this._f; ) for (n(t.v, t.k, this); t && t.r; ) t = t.p;
                    },
                    has: function(e) {
                        return !!g(this, e);
                    }
                }), m && r(d.prototype, "size", {
                    get: function() {
                        return l(this[h]);
                    }
                }), d;
            },
            def: function(e, t, n) {
                var r, i, o = g(e, t);
                return o ? o.v = n : (e._l = o = {
                    i: i = p(t, !0),
                    k: t,
                    v: n,
                    p: r = e._l,
                    n: void 0,
                    r: !1
                }, e._f || (e._f = o), r && (r.n = o), e[h]++, "F" !== i && (e._i[i] = o)), e;
            },
            getEntry: g,
            setStrong: function(e, t, n) {
                u(e, t, function(e, t) {
                    this._t = e, this._k = t, this._l = void 0;
                }, function() {
                    for (var e = this, t = e._k, n = e._l; n && n.r; ) n = n.p;
                    return e._t && (e._l = n = n ? n.n : e._t._f) ? "keys" == t ? d(0, n.k) : "values" == t ? d(0, n.v) : d(0, [ n.k, n.v ]) : (e._t = void 0, 
                    d(1));
                }, n ? "entries" : "values", !n, !0), f(t);
            }
        };
    }, {
        "./_an-instance": 54,
        "./_ctx": 68,
        "./_defined": 69,
        "./_descriptors": 70,
        "./_for-of": 76,
        "./_iter-define": 89,
        "./_iter-step": 91,
        "./_meta": 95,
        "./_object-create": 98,
        "./_object-dp": 99,
        "./_redefine-all": 112,
        "./_set-species": 115
    } ],
    64: [ function(e, t, n) {
        var r = e("./_classof"), i = e("./_array-from-iterable");
        t.exports = function(e) {
            return function() {
                if (r(this) != e) throw TypeError(e + "#toJSON isn't generic");
                return i(this);
            };
        };
    }, {
        "./_array-from-iterable": 56,
        "./_classof": 61
    } ],
    65: [ function(e, t, n) {
        "use strict";
        var r = e("./_global"), i = e("./_export"), o = e("./_meta"), a = e("./_fails"), s = e("./_hide"), l = e("./_redefine-all"), c = e("./_for-of"), u = e("./_an-instance"), d = e("./_is-object"), f = e("./_set-to-string-tag"), m = e("./_object-dp").f, p = e("./_array-methods")(0), h = e("./_descriptors");
        t.exports = function(e, t, n, g, b, _) {
            var v = r[e], y = v, w = b ? "set" : "add", E = y && y.prototype, k = {};
            return h && "function" == typeof y && (_ || E.forEach && !a(function() {
                new y().entries().next();
            })) ? (y = t(function(t, n) {
                u(t, y, e, "_c"), t._c = new v(), void 0 != n && c(n, b, t[w], t);
            }), p("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), function(e) {
                var t = "add" == e || "set" == e;
                e in E && (!_ || "clear" != e) && s(y.prototype, e, function(n, r) {
                    if (u(this, y, e), !t && _ && !d(n)) return "get" == e && void 0;
                    var i = this._c[e](0 === n ? 0 : n, r);
                    return t ? this : i;
                });
            }), "size" in E && m(y.prototype, "size", {
                get: function() {
                    return this._c.size;
                }
            })) : (y = g.getConstructor(t, e, b, w), l(y.prototype, n), o.NEED = !0), f(y, e), 
            k[e] = y, i(i.G + i.W + i.F, k), _ || g.setStrong(y, e, b), y;
        };
    }, {
        "./_an-instance": 54,
        "./_array-methods": 58,
        "./_descriptors": 70,
        "./_export": 74,
        "./_fails": 75,
        "./_for-of": 76,
        "./_global": 77,
        "./_hide": 79,
        "./_is-object": 86,
        "./_meta": 95,
        "./_object-dp": 99,
        "./_redefine-all": 112,
        "./_set-to-string-tag": 116
    } ],
    66: [ function(e, t, n) {
        var r = t.exports = {
            version: "2.4.0"
        };
        "number" == typeof __e && (__e = r);
    }, {} ],
    67: [ function(e, t, n) {
        "use strict";
        var r = e("./_object-dp"), i = e("./_property-desc");
        t.exports = function(e, t, n) {
            t in e ? r.f(e, t, i(0, n)) : e[t] = n;
        };
    }, {
        "./_object-dp": 99,
        "./_property-desc": 111
    } ],
    68: [ function(e, t, n) {
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
                return function(n, r, i) {
                    return e.call(t, n, r, i);
                };
            }
            return function() {
                return e.apply(t, arguments);
            };
        };
    }, {
        "./_a-function": 52
    } ],
    69: [ function(e, t, n) {
        t.exports = function(e) {
            if (void 0 == e) throw TypeError("Can't call method on  " + e);
            return e;
        };
    }, {} ],
    70: [ function(e, t, n) {
        t.exports = !e("./_fails")(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7;
                }
            }).a;
        });
    }, {
        "./_fails": 75
    } ],
    71: [ function(e, t, n) {
        var r = e("./_is-object"), i = e("./_global").document, o = r(i) && r(i.createElement);
        t.exports = function(e) {
            return o ? i.createElement(e) : {};
        };
    }, {
        "./_global": 77,
        "./_is-object": 86
    } ],
    72: [ function(e, t, n) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    }, {} ],
    73: [ function(e, t, n) {
        var r = e("./_object-keys"), i = e("./_object-gops"), o = e("./_object-pie");
        t.exports = function(e) {
            var t = r(e), n = i.f;
            if (n) for (var a, s = n(e), l = o.f, c = 0; s.length > c; ) l.call(e, a = s[c++]) && t.push(a);
            return t;
        };
    }, {
        "./_object-gops": 104,
        "./_object-keys": 107,
        "./_object-pie": 108
    } ],
    74: [ function(e, t, n) {
        var r = e("./_global"), i = e("./_core"), o = e("./_ctx"), a = e("./_hide"), s = "prototype", l = function(e, t, n) {
            var c, u, d, f = e & l.F, m = e & l.G, p = e & l.S, h = e & l.P, g = e & l.B, b = e & l.W, _ = m ? i : i[t] || (i[t] = {}), v = _[s], y = m ? r : p ? r[t] : (r[t] || {})[s];
            m && (n = t);
            for (c in n) u = !f && y && void 0 !== y[c], u && c in _ || (d = u ? y[c] : n[c], 
            _[c] = m && "function" != typeof y[c] ? n[c] : g && u ? o(d, r) : b && y[c] == d ? function(e) {
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
                return t[s] = e[s], t;
            }(d) : h && "function" == typeof d ? o(Function.call, d) : d, h && ((_.virtual || (_.virtual = {}))[c] = d, 
            e & l.R && v && !v[c] && a(v, c, d)));
        };
        l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, t.exports = l;
    }, {
        "./_core": 66,
        "./_ctx": 68,
        "./_global": 77,
        "./_hide": 79
    } ],
    75: [ function(e, t, n) {
        t.exports = function(e) {
            try {
                return !!e();
            } catch (t) {
                return !0;
            }
        };
    }, {} ],
    76: [ function(e, t, n) {
        var r = e("./_ctx"), i = e("./_iter-call"), o = e("./_is-array-iter"), a = e("./_an-object"), s = e("./_to-length"), l = e("./core.get-iterator-method"), c = {}, u = {}, n = t.exports = function(e, t, n, d, f) {
            var m, p, h, g, b = f ? function() {
                return e;
            } : l(e), _ = r(n, d, t ? 2 : 1), v = 0;
            if ("function" != typeof b) throw TypeError(e + " is not iterable!");
            if (o(b)) {
                for (m = s(e.length); m > v; v++) if (g = t ? _(a(p = e[v])[0], p[1]) : _(e[v]), 
                g === c || g === u) return g;
            } else for (h = b.call(e); !(p = h.next()).done; ) if (g = i(h, _, p.value, t), 
            g === c || g === u) return g;
        };
        n.BREAK = c, n.RETURN = u;
    }, {
        "./_an-object": 55,
        "./_ctx": 68,
        "./_is-array-iter": 84,
        "./_iter-call": 87,
        "./_to-length": 125,
        "./core.get-iterator-method": 132
    } ],
    77: [ function(e, t, n) {
        var r = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = r);
    }, {} ],
    78: [ function(e, t, n) {
        var r = {}.hasOwnProperty;
        t.exports = function(e, t) {
            return r.call(e, t);
        };
    }, {} ],
    79: [ function(e, t, n) {
        var r = e("./_object-dp"), i = e("./_property-desc");
        t.exports = e("./_descriptors") ? function(e, t, n) {
            return r.f(e, t, i(1, n));
        } : function(e, t, n) {
            return e[t] = n, e;
        };
    }, {
        "./_descriptors": 70,
        "./_object-dp": 99,
        "./_property-desc": 111
    } ],
    80: [ function(e, t, n) {
        t.exports = e("./_global").document && document.documentElement;
    }, {
        "./_global": 77
    } ],
    81: [ function(e, t, n) {
        t.exports = !e("./_descriptors") && !e("./_fails")(function() {
            return 7 != Object.defineProperty(e("./_dom-create")("div"), "a", {
                get: function() {
                    return 7;
                }
            }).a;
        });
    }, {
        "./_descriptors": 70,
        "./_dom-create": 71,
        "./_fails": 75
    } ],
    82: [ function(e, t, n) {
        t.exports = function(e, t, n) {
            var r = void 0 === n;
            switch (t.length) {
              case 0:
                return r ? e() : e.call(n);

              case 1:
                return r ? e(t[0]) : e.call(n, t[0]);

              case 2:
                return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);

              case 3:
                return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);

              case 4:
                return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3]);
            }
            return e.apply(n, t);
        };
    }, {} ],
    83: [ function(e, t, n) {
        var r = e("./_cof");
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
            return "String" == r(e) ? e.split("") : Object(e);
        };
    }, {
        "./_cof": 62
    } ],
    84: [ function(e, t, n) {
        var r = e("./_iterators"), i = e("./_wks")("iterator"), o = Array.prototype;
        t.exports = function(e) {
            return void 0 !== e && (r.Array === e || o[i] === e);
        };
    }, {
        "./_iterators": 92,
        "./_wks": 131
    } ],
    85: [ function(e, t, n) {
        var r = e("./_cof");
        t.exports = Array.isArray || function(e) {
            return "Array" == r(e);
        };
    }, {
        "./_cof": 62
    } ],
    86: [ function(e, t, n) {
        t.exports = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e;
        };
    }, {} ],
    87: [ function(e, t, n) {
        var r = e("./_an-object");
        t.exports = function(e, t, n, i) {
            try {
                return i ? t(r(n)[0], n[1]) : t(n);
            } catch (o) {
                var a = e["return"];
                throw void 0 !== a && r(a.call(e)), o;
            }
        };
    }, {
        "./_an-object": 55
    } ],
    88: [ function(e, t, n) {
        "use strict";
        var r = e("./_object-create"), i = e("./_property-desc"), o = e("./_set-to-string-tag"), a = {};
        e("./_hide")(a, e("./_wks")("iterator"), function() {
            return this;
        }), t.exports = function(e, t, n) {
            e.prototype = r(a, {
                next: i(1, n)
            }), o(e, t + " Iterator");
        };
    }, {
        "./_hide": 79,
        "./_object-create": 98,
        "./_property-desc": 111,
        "./_set-to-string-tag": 116,
        "./_wks": 131
    } ],
    89: [ function(e, t, n) {
        "use strict";
        var r = e("./_library"), i = e("./_export"), o = e("./_redefine"), a = e("./_hide"), s = e("./_has"), l = e("./_iterators"), c = e("./_iter-create"), u = e("./_set-to-string-tag"), d = e("./_object-gpo"), f = e("./_wks")("iterator"), m = !([].keys && "next" in [].keys()), p = "@@iterator", h = "keys", g = "values", b = function() {
            return this;
        };
        t.exports = function(e, t, n, _, v, y, w) {
            c(n, t, _);
            var E, k, C, x = function(e) {
                if (!m && e in N) return N[e];
                switch (e) {
                  case h:
                    return function() {
                        return new n(this, e);
                    };

                  case g:
                    return function() {
                        return new n(this, e);
                    };
                }
                return function() {
                    return new n(this, e);
                };
            }, T = t + " Iterator", S = v == g, j = !1, N = e.prototype, I = N[f] || N[p] || v && N[v], A = I || x(v), D = v ? S ? x("entries") : A : void 0, P = "Array" == t ? N.entries || I : I;
            if (P && (C = d(P.call(new e())), C !== Object.prototype && (u(C, T, !0), r || s(C, f) || a(C, f, b))), 
            S && I && I.name !== g && (j = !0, A = function() {
                return I.call(this);
            }), r && !w || !m && !j && N[f] || a(N, f, A), l[t] = A, l[T] = b, v) if (E = {
                values: S ? A : x(g),
                keys: y ? A : x(h),
                entries: D
            }, w) for (k in E) k in N || o(N, k, E[k]); else i(i.P + i.F * (m || j), t, E);
            return E;
        };
    }, {
        "./_export": 74,
        "./_has": 78,
        "./_hide": 79,
        "./_iter-create": 88,
        "./_iterators": 92,
        "./_library": 94,
        "./_object-gpo": 105,
        "./_redefine": 113,
        "./_set-to-string-tag": 116,
        "./_wks": 131
    } ],
    90: [ function(e, t, n) {
        var r = e("./_wks")("iterator"), i = !1;
        try {
            var o = [ 7 ][r]();
            o["return"] = function() {
                i = !0;
            }, Array.from(o, function() {
                throw 2;
            });
        } catch (a) {}
        t.exports = function(e, t) {
            if (!t && !i) return !1;
            var n = !1;
            try {
                var o = [ 7 ], a = o[r]();
                a.next = function() {
                    return {
                        done: n = !0
                    };
                }, o[r] = function() {
                    return a;
                }, e(o);
            } catch (s) {}
            return n;
        };
    }, {
        "./_wks": 131
    } ],
    91: [ function(e, t, n) {
        t.exports = function(e, t) {
            return {
                value: t,
                done: !!e
            };
        };
    }, {} ],
    92: [ function(e, t, n) {
        t.exports = {};
    }, {} ],
    93: [ function(e, t, n) {
        var r = e("./_object-keys"), i = e("./_to-iobject");
        t.exports = function(e, t) {
            for (var n, o = i(e), a = r(o), s = a.length, l = 0; s > l; ) if (o[n = a[l++]] === t) return n;
        };
    }, {
        "./_object-keys": 107,
        "./_to-iobject": 124
    } ],
    94: [ function(e, t, n) {
        t.exports = !0;
    }, {} ],
    95: [ function(e, t, n) {
        var r = e("./_uid")("meta"), i = e("./_is-object"), o = e("./_has"), a = e("./_object-dp").f, s = 0, l = Object.isExtensible || function() {
            return !0;
        }, c = !e("./_fails")(function() {
            return l(Object.preventExtensions({}));
        }), u = function(e) {
            a(e, r, {
                value: {
                    i: "O" + ++s,
                    w: {}
                }
            });
        }, d = function(e, t) {
            if (!i(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
            if (!o(e, r)) {
                if (!l(e)) return "F";
                if (!t) return "E";
                u(e);
            }
            return e[r].i;
        }, f = function(e, t) {
            if (!o(e, r)) {
                if (!l(e)) return !0;
                if (!t) return !1;
                u(e);
            }
            return e[r].w;
        }, m = function(e) {
            return c && p.NEED && l(e) && !o(e, r) && u(e), e;
        }, p = t.exports = {
            KEY: r,
            NEED: !1,
            fastKey: d,
            getWeak: f,
            onFreeze: m
        };
    }, {
        "./_fails": 75,
        "./_has": 78,
        "./_is-object": 86,
        "./_object-dp": 99,
        "./_uid": 128
    } ],
    96: [ function(e, t, n) {
        var r = e("./_global"), i = e("./_task").set, o = r.MutationObserver || r.WebKitMutationObserver, a = r.process, s = r.Promise, l = "process" == e("./_cof")(a);
        t.exports = function() {
            var e, t, n, c = function() {
                var r, i;
                for (l && (r = a.domain) && r.exit(); e; ) {
                    i = e.fn, e = e.next;
                    try {
                        i();
                    } catch (o) {
                        throw e ? n() : t = void 0, o;
                    }
                }
                t = void 0, r && r.enter();
            };
            if (l) n = function() {
                a.nextTick(c);
            }; else if (o) {
                var u = !0, d = document.createTextNode("");
                new o(c).observe(d, {
                    characterData: !0
                }), n = function() {
                    d.data = u = !u;
                };
            } else if (s && s.resolve) {
                var f = s.resolve();
                n = function() {
                    f.then(c);
                };
            } else n = function() {
                i.call(r, c);
            };
            return function(r) {
                var i = {
                    fn: r,
                    next: void 0
                };
                t && (t.next = i), e || (e = i, n()), t = i;
            };
        };
    }, {
        "./_cof": 62,
        "./_global": 77,
        "./_task": 121
    } ],
    97: [ function(e, t, n) {
        "use strict";
        var r = e("./_object-keys"), i = e("./_object-gops"), o = e("./_object-pie"), a = e("./_to-object"), s = e("./_iobject"), l = Object.assign;
        t.exports = !l || e("./_fails")(function() {
            var e = {}, t = {}, n = Symbol(), r = "abcdefghijklmnopqrst";
            return e[n] = 7, r.split("").forEach(function(e) {
                t[e] = e;
            }), 7 != l({}, e)[n] || Object.keys(l({}, t)).join("") != r;
        }) ? function(e, t) {
            for (var n = a(e), l = arguments.length, c = 1, u = i.f, d = o.f; l > c; ) for (var f, m = s(arguments[c++]), p = u ? r(m).concat(u(m)) : r(m), h = p.length, g = 0; h > g; ) d.call(m, f = p[g++]) && (n[f] = m[f]);
            return n;
        } : l;
    }, {
        "./_fails": 75,
        "./_iobject": 83,
        "./_object-gops": 104,
        "./_object-keys": 107,
        "./_object-pie": 108,
        "./_to-object": 126
    } ],
    98: [ function(e, t, n) {
        var r = e("./_an-object"), i = e("./_object-dps"), o = e("./_enum-bug-keys"), a = e("./_shared-key")("IE_PROTO"), s = function() {}, l = "prototype", c = function() {
            var t, n = e("./_dom-create")("iframe"), r = o.length, i = "<", a = ">";
            for (n.style.display = "none", e("./_html").appendChild(n), n.src = "javascript:", 
            t = n.contentWindow.document, t.open(), t.write(i + "script" + a + "document.F=Object" + i + "/script" + a), 
            t.close(), c = t.F; r--; ) delete c[l][o[r]];
            return c();
        };
        t.exports = Object.create || function(e, t) {
            var n;
            return null !== e ? (s[l] = r(e), n = new s(), s[l] = null, n[a] = e) : n = c(), 
            void 0 === t ? n : i(n, t);
        };
    }, {
        "./_an-object": 55,
        "./_dom-create": 71,
        "./_enum-bug-keys": 72,
        "./_html": 80,
        "./_object-dps": 100,
        "./_shared-key": 117
    } ],
    99: [ function(e, t, n) {
        var r = e("./_an-object"), i = e("./_ie8-dom-define"), o = e("./_to-primitive"), a = Object.defineProperty;
        n.f = e("./_descriptors") ? Object.defineProperty : function(e, t, n) {
            if (r(e), t = o(t, !0), r(n), i) try {
                return a(e, t, n);
            } catch (s) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (e[t] = n.value), e;
        };
    }, {
        "./_an-object": 55,
        "./_descriptors": 70,
        "./_ie8-dom-define": 81,
        "./_to-primitive": 127
    } ],
    100: [ function(e, t, n) {
        var r = e("./_object-dp"), i = e("./_an-object"), o = e("./_object-keys");
        t.exports = e("./_descriptors") ? Object.defineProperties : function(e, t) {
            i(e);
            for (var n, a = o(t), s = a.length, l = 0; s > l; ) r.f(e, n = a[l++], t[n]);
            return e;
        };
    }, {
        "./_an-object": 55,
        "./_descriptors": 70,
        "./_object-dp": 99,
        "./_object-keys": 107
    } ],
    101: [ function(e, t, n) {
        var r = e("./_object-pie"), i = e("./_property-desc"), o = e("./_to-iobject"), a = e("./_to-primitive"), s = e("./_has"), l = e("./_ie8-dom-define"), c = Object.getOwnPropertyDescriptor;
        n.f = e("./_descriptors") ? c : function(e, t) {
            if (e = o(e), t = a(t, !0), l) try {
                return c(e, t);
            } catch (n) {}
            if (s(e, t)) return i(!r.f.call(e, t), e[t]);
        };
    }, {
        "./_descriptors": 70,
        "./_has": 78,
        "./_ie8-dom-define": 81,
        "./_object-pie": 108,
        "./_property-desc": 111,
        "./_to-iobject": 124,
        "./_to-primitive": 127
    } ],
    102: [ function(e, t, n) {
        var r = e("./_to-iobject"), i = e("./_object-gopn").f, o = {}.toString, a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], s = function(e) {
            try {
                return i(e);
            } catch (t) {
                return a.slice();
            }
        };
        t.exports.f = function(e) {
            return a && "[object Window]" == o.call(e) ? s(e) : i(r(e));
        };
    }, {
        "./_object-gopn": 103,
        "./_to-iobject": 124
    } ],
    103: [ function(e, t, n) {
        var r = e("./_object-keys-internal"), i = e("./_enum-bug-keys").concat("length", "prototype");
        n.f = Object.getOwnPropertyNames || function(e) {
            return r(e, i);
        };
    }, {
        "./_enum-bug-keys": 72,
        "./_object-keys-internal": 106
    } ],
    104: [ function(e, t, n) {
        n.f = Object.getOwnPropertySymbols;
    }, {} ],
    105: [ function(e, t, n) {
        var r = e("./_has"), i = e("./_to-object"), o = e("./_shared-key")("IE_PROTO"), a = Object.prototype;
        t.exports = Object.getPrototypeOf || function(e) {
            return e = i(e), r(e, o) ? e[o] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null;
        };
    }, {
        "./_has": 78,
        "./_shared-key": 117,
        "./_to-object": 126
    } ],
    106: [ function(e, t, n) {
        var r = e("./_has"), i = e("./_to-iobject"), o = e("./_array-includes")(!1), a = e("./_shared-key")("IE_PROTO");
        t.exports = function(e, t) {
            var n, s = i(e), l = 0, c = [];
            for (n in s) n != a && r(s, n) && c.push(n);
            for (;t.length > l; ) r(s, n = t[l++]) && (~o(c, n) || c.push(n));
            return c;
        };
    }, {
        "./_array-includes": 57,
        "./_has": 78,
        "./_shared-key": 117,
        "./_to-iobject": 124
    } ],
    107: [ function(e, t, n) {
        var r = e("./_object-keys-internal"), i = e("./_enum-bug-keys");
        t.exports = Object.keys || function(e) {
            return r(e, i);
        };
    }, {
        "./_enum-bug-keys": 72,
        "./_object-keys-internal": 106
    } ],
    108: [ function(e, t, n) {
        n.f = {}.propertyIsEnumerable;
    }, {} ],
    109: [ function(e, t, n) {
        var r = e("./_export"), i = e("./_core"), o = e("./_fails");
        t.exports = function(e, t) {
            var n = (i.Object || {})[e] || Object[e], a = {};
            a[e] = t(n), r(r.S + r.F * o(function() {
                n(1);
            }), "Object", a);
        };
    }, {
        "./_core": 66,
        "./_export": 74,
        "./_fails": 75
    } ],
    110: [ function(e, t, n) {
        var r = e("./_object-keys"), i = e("./_to-iobject"), o = e("./_object-pie").f;
        t.exports = function(e) {
            return function(t) {
                for (var n, a = i(t), s = r(a), l = s.length, c = 0, u = []; l > c; ) o.call(a, n = s[c++]) && u.push(e ? [ n, a[n] ] : a[n]);
                return u;
            };
        };
    }, {
        "./_object-keys": 107,
        "./_object-pie": 108,
        "./_to-iobject": 124
    } ],
    111: [ function(e, t, n) {
        t.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            };
        };
    }, {} ],
    112: [ function(e, t, n) {
        var r = e("./_hide");
        t.exports = function(e, t, n) {
            for (var i in t) n && e[i] ? e[i] = t[i] : r(e, i, t[i]);
            return e;
        };
    }, {
        "./_hide": 79
    } ],
    113: [ function(e, t, n) {
        t.exports = e("./_hide");
    }, {
        "./_hide": 79
    } ],
    114: [ function(e, t, n) {
        var r = e("./_is-object"), i = e("./_an-object"), o = function(e, t) {
            if (i(e), !r(t) && null !== t) throw TypeError(t + ": can't set as prototype!");
        };
        t.exports = {
            set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, n, r) {
                try {
                    r = e("./_ctx")(Function.call, e("./_object-gopd").f(Object.prototype, "__proto__").set, 2), 
                    r(t, []), n = !(t instanceof Array);
                } catch (i) {
                    n = !0;
                }
                return function(e, t) {
                    return o(e, t), n ? e.__proto__ = t : r(e, t), e;
                };
            }({}, !1) : void 0),
            check: o
        };
    }, {
        "./_an-object": 55,
        "./_ctx": 68,
        "./_is-object": 86,
        "./_object-gopd": 101
    } ],
    115: [ function(e, t, n) {
        "use strict";
        var r = e("./_global"), i = e("./_core"), o = e("./_object-dp"), a = e("./_descriptors"), s = e("./_wks")("species");
        t.exports = function(e) {
            var t = "function" == typeof i[e] ? i[e] : r[e];
            a && t && !t[s] && o.f(t, s, {
                configurable: !0,
                get: function() {
                    return this;
                }
            });
        };
    }, {
        "./_core": 66,
        "./_descriptors": 70,
        "./_global": 77,
        "./_object-dp": 99,
        "./_wks": 131
    } ],
    116: [ function(e, t, n) {
        var r = e("./_object-dp").f, i = e("./_has"), o = e("./_wks")("toStringTag");
        t.exports = function(e, t, n) {
            e && !i(e = n ? e : e.prototype, o) && r(e, o, {
                configurable: !0,
                value: t
            });
        };
    }, {
        "./_has": 78,
        "./_object-dp": 99,
        "./_wks": 131
    } ],
    117: [ function(e, t, n) {
        var r = e("./_shared")("keys"), i = e("./_uid");
        t.exports = function(e) {
            return r[e] || (r[e] = i(e));
        };
    }, {
        "./_shared": 118,
        "./_uid": 128
    } ],
    118: [ function(e, t, n) {
        var r = e("./_global"), i = "__core-js_shared__", o = r[i] || (r[i] = {});
        t.exports = function(e) {
            return o[e] || (o[e] = {});
        };
    }, {
        "./_global": 77
    } ],
    119: [ function(e, t, n) {
        var r = e("./_an-object"), i = e("./_a-function"), o = e("./_wks")("species");
        t.exports = function(e, t) {
            var n, a = r(e).constructor;
            return void 0 === a || void 0 == (n = r(a)[o]) ? t : i(n);
        };
    }, {
        "./_a-function": 52,
        "./_an-object": 55,
        "./_wks": 131
    } ],
    120: [ function(e, t, n) {
        var r = e("./_to-integer"), i = e("./_defined");
        t.exports = function(e) {
            return function(t, n) {
                var o, a, s = String(i(t)), l = r(n), c = s.length;
                return l < 0 || l >= c ? e ? "" : void 0 : (o = s.charCodeAt(l), o < 55296 || o > 56319 || l + 1 === c || (a = s.charCodeAt(l + 1)) < 56320 || a > 57343 ? e ? s.charAt(l) : o : e ? s.slice(l, l + 2) : (o - 55296 << 10) + (a - 56320) + 65536);
            };
        };
    }, {
        "./_defined": 69,
        "./_to-integer": 123
    } ],
    121: [ function(e, t, n) {
        var r, i, o, a = e("./_ctx"), s = e("./_invoke"), l = e("./_html"), c = e("./_dom-create"), u = e("./_global"), d = u.process, f = u.setImmediate, m = u.clearImmediate, p = u.MessageChannel, h = 0, g = {}, b = "onreadystatechange", _ = function() {
            var e = +this;
            if (g.hasOwnProperty(e)) {
                var t = g[e];
                delete g[e], t();
            }
        }, v = function(e) {
            _.call(e.data);
        };
        f && m || (f = function(e) {
            for (var t = [], n = 1; arguments.length > n; ) t.push(arguments[n++]);
            return g[++h] = function() {
                s("function" == typeof e ? e : Function(e), t);
            }, r(h), h;
        }, m = function(e) {
            delete g[e];
        }, "process" == e("./_cof")(d) ? r = function(e) {
            d.nextTick(a(_, e, 1));
        } : p ? (i = new p(), o = i.port2, i.port1.onmessage = v, r = a(o.postMessage, o, 1)) : u.addEventListener && "function" == typeof postMessage && !u.importScripts ? (r = function(e) {
            u.postMessage(e + "", "*");
        }, u.addEventListener("message", v, !1)) : r = b in c("script") ? function(e) {
            l.appendChild(c("script"))[b] = function() {
                l.removeChild(this), _.call(e);
            };
        } : function(e) {
            setTimeout(a(_, e, 1), 0);
        }), t.exports = {
            set: f,
            clear: m
        };
    }, {
        "./_cof": 62,
        "./_ctx": 68,
        "./_dom-create": 71,
        "./_global": 77,
        "./_html": 80,
        "./_invoke": 82
    } ],
    122: [ function(e, t, n) {
        var r = e("./_to-integer"), i = Math.max, o = Math.min;
        t.exports = function(e, t) {
            return e = r(e), e < 0 ? i(e + t, 0) : o(e, t);
        };
    }, {
        "./_to-integer": 123
    } ],
    123: [ function(e, t, n) {
        var r = Math.ceil, i = Math.floor;
        t.exports = function(e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? i : r)(e);
        };
    }, {} ],
    124: [ function(e, t, n) {
        var r = e("./_iobject"), i = e("./_defined");
        t.exports = function(e) {
            return r(i(e));
        };
    }, {
        "./_defined": 69,
        "./_iobject": 83
    } ],
    125: [ function(e, t, n) {
        var r = e("./_to-integer"), i = Math.min;
        t.exports = function(e) {
            return e > 0 ? i(r(e), 9007199254740991) : 0;
        };
    }, {
        "./_to-integer": 123
    } ],
    126: [ function(e, t, n) {
        var r = e("./_defined");
        t.exports = function(e) {
            return Object(r(e));
        };
    }, {
        "./_defined": 69
    } ],
    127: [ function(e, t, n) {
        var r = e("./_is-object");
        t.exports = function(e, t) {
            if (!r(e)) return e;
            var n, i;
            if (t && "function" == typeof (n = e.toString) && !r(i = n.call(e))) return i;
            if ("function" == typeof (n = e.valueOf) && !r(i = n.call(e))) return i;
            if (!t && "function" == typeof (n = e.toString) && !r(i = n.call(e))) return i;
            throw TypeError("Can't convert object to primitive value");
        };
    }, {
        "./_is-object": 86
    } ],
    128: [ function(e, t, n) {
        var r = 0, i = Math.random();
        t.exports = function(e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++r + i).toString(36));
        };
    }, {} ],
    129: [ function(e, t, n) {
        var r = e("./_global"), i = e("./_core"), o = e("./_library"), a = e("./_wks-ext"), s = e("./_object-dp").f;
        t.exports = function(e) {
            var t = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {});
            "_" == e.charAt(0) || e in t || s(t, e, {
                value: a.f(e)
            });
        };
    }, {
        "./_core": 66,
        "./_global": 77,
        "./_library": 94,
        "./_object-dp": 99,
        "./_wks-ext": 130
    } ],
    130: [ function(e, t, n) {
        n.f = e("./_wks");
    }, {
        "./_wks": 131
    } ],
    131: [ function(e, t, n) {
        var r = e("./_shared")("wks"), i = e("./_uid"), o = e("./_global").Symbol, a = "function" == typeof o, s = t.exports = function(e) {
            return r[e] || (r[e] = a && o[e] || (a ? o : i)("Symbol." + e));
        };
        s.store = r;
    }, {
        "./_global": 77,
        "./_shared": 118,
        "./_uid": 128
    } ],
    132: [ function(e, t, n) {
        var r = e("./_classof"), i = e("./_wks")("iterator"), o = e("./_iterators");
        t.exports = e("./_core").getIteratorMethod = function(e) {
            if (void 0 != e) return e[i] || e["@@iterator"] || o[r(e)];
        };
    }, {
        "./_classof": 61,
        "./_core": 66,
        "./_iterators": 92,
        "./_wks": 131
    } ],
    133: [ function(e, t, n) {
        var r = e("./_an-object"), i = e("./core.get-iterator-method");
        t.exports = e("./_core").getIterator = function(e) {
            var t = i(e);
            if ("function" != typeof t) throw TypeError(e + " is not iterable!");
            return r(t.call(e));
        };
    }, {
        "./_an-object": 55,
        "./_core": 66,
        "./core.get-iterator-method": 132
    } ],
    134: [ function(e, t, n) {
        var r = e("./_classof"), i = e("./_wks")("iterator"), o = e("./_iterators");
        t.exports = e("./_core").isIterable = function(e) {
            var t = Object(e);
            return void 0 !== t[i] || "@@iterator" in t || o.hasOwnProperty(r(t));
        };
    }, {
        "./_classof": 61,
        "./_core": 66,
        "./_iterators": 92,
        "./_wks": 131
    } ],
    135: [ function(e, t, n) {
        "use strict";
        var r = e("./_ctx"), i = e("./_export"), o = e("./_to-object"), a = e("./_iter-call"), s = e("./_is-array-iter"), l = e("./_to-length"), c = e("./_create-property"), u = e("./core.get-iterator-method");
        i(i.S + i.F * !e("./_iter-detect")(function(e) {
            Array.from(e);
        }), "Array", {
            from: function(e) {
                var t, n, i, d, f = o(e), m = "function" == typeof this ? this : Array, p = arguments.length, h = p > 1 ? arguments[1] : void 0, g = void 0 !== h, b = 0, _ = u(f);
                if (g && (h = r(h, p > 2 ? arguments[2] : void 0, 2)), void 0 == _ || m == Array && s(_)) for (t = l(f.length), 
                n = new m(t); t > b; b++) c(n, b, g ? h(f[b], b) : f[b]); else for (d = _.call(f), 
                n = new m(); !(i = d.next()).done; b++) c(n, b, g ? a(d, h, [ i.value, b ], !0) : i.value);
                return n.length = b, n;
            }
        });
    }, {
        "./_create-property": 67,
        "./_ctx": 68,
        "./_export": 74,
        "./_is-array-iter": 84,
        "./_iter-call": 87,
        "./_iter-detect": 90,
        "./_to-length": 125,
        "./_to-object": 126,
        "./core.get-iterator-method": 132
    } ],
    136: [ function(e, t, n) {
        "use strict";
        var r = e("./_add-to-unscopables"), i = e("./_iter-step"), o = e("./_iterators"), a = e("./_to-iobject");
        t.exports = e("./_iter-define")(Array, "Array", function(e, t) {
            this._t = a(e), this._i = 0, this._k = t;
        }, function() {
            var e = this._t, t = this._k, n = this._i++;
            return !e || n >= e.length ? (this._t = void 0, i(1)) : "keys" == t ? i(0, n) : "values" == t ? i(0, e[n]) : i(0, [ n, e[n] ]);
        }, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries");
    }, {
        "./_add-to-unscopables": 53,
        "./_iter-define": 89,
        "./_iter-step": 91,
        "./_iterators": 92,
        "./_to-iobject": 124
    } ],
    137: [ function(e, t, n) {
        "use strict";
        var r = e("./_collection-strong");
        t.exports = e("./_collection")("Map", function(e) {
            return function() {
                return e(this, arguments.length > 0 ? arguments[0] : void 0);
            };
        }, {
            get: function(e) {
                var t = r.getEntry(this, e);
                return t && t.v;
            },
            set: function(e, t) {
                return r.def(this, 0 === e ? 0 : e, t);
            }
        }, r, !0);
    }, {
        "./_collection": 65,
        "./_collection-strong": 63
    } ],
    138: [ function(e, t, n) {
        var r = e("./_export");
        r(r.S + r.F, "Object", {
            assign: e("./_object-assign")
        });
    }, {
        "./_export": 74,
        "./_object-assign": 97
    } ],
    139: [ function(e, t, n) {
        var r = e("./_export");
        r(r.S, "Object", {
            create: e("./_object-create")
        });
    }, {
        "./_export": 74,
        "./_object-create": 98
    } ],
    140: [ function(e, t, n) {
        var r = e("./_export");
        r(r.S + r.F * !e("./_descriptors"), "Object", {
            defineProperty: e("./_object-dp").f
        });
    }, {
        "./_descriptors": 70,
        "./_export": 74,
        "./_object-dp": 99
    } ],
    141: [ function(e, t, n) {
        var r = e("./_to-object"), i = e("./_object-gpo");
        e("./_object-sap")("getPrototypeOf", function() {
            return function(e) {
                return i(r(e));
            };
        });
    }, {
        "./_object-gpo": 105,
        "./_object-sap": 109,
        "./_to-object": 126
    } ],
    142: [ function(e, t, n) {
        var r = e("./_to-object"), i = e("./_object-keys");
        e("./_object-sap")("keys", function() {
            return function(e) {
                return i(r(e));
            };
        });
    }, {
        "./_object-keys": 107,
        "./_object-sap": 109,
        "./_to-object": 126
    } ],
    143: [ function(e, t, n) {
        var r = e("./_export");
        r(r.S, "Object", {
            setPrototypeOf: e("./_set-proto").set
        });
    }, {
        "./_export": 74,
        "./_set-proto": 114
    } ],
    144: [ function(e, t, n) {}, {} ],
    145: [ function(e, t, n) {
        "use strict";
        var r, i, o, a = e("./_library"), s = e("./_global"), l = e("./_ctx"), c = e("./_classof"), u = e("./_export"), d = e("./_is-object"), f = e("./_a-function"), m = e("./_an-instance"), p = e("./_for-of"), h = e("./_species-constructor"), g = e("./_task").set, b = e("./_microtask")(), _ = "Promise", v = s.TypeError, y = s.process, w = s[_], y = s.process, E = "process" == c(y), k = function() {}, C = !!function() {
            try {
                var t = w.resolve(1), n = (t.constructor = {})[e("./_wks")("species")] = function(e) {
                    e(k, k);
                };
                return (E || "function" == typeof PromiseRejectionEvent) && t.then(k) instanceof n;
            } catch (r) {}
        }(), x = function(e, t) {
            return e === t || e === w && t === o;
        }, T = function(e) {
            var t;
            return !(!d(e) || "function" != typeof (t = e.then)) && t;
        }, S = function(e) {
            return x(w, e) ? new j(e) : new i(e);
        }, j = i = function(e) {
            var t, n;
            this.promise = new e(function(e, r) {
                if (void 0 !== t || void 0 !== n) throw v("Bad Promise constructor");
                t = e, n = r;
            }), this.resolve = f(t), this.reject = f(n);
        }, N = function(e) {
            try {
                e();
            } catch (t) {
                return {
                    error: t
                };
            }
        }, I = function(e, t) {
            if (!e._n) {
                e._n = !0;
                var n = e._c;
                b(function() {
                    for (var r = e._v, i = 1 == e._s, o = 0, a = function(t) {
                        var n, o, a = i ? t.ok : t.fail, s = t.resolve, l = t.reject, c = t.domain;
                        try {
                            a ? (i || (2 == e._h && P(e), e._h = 1), a === !0 ? n = r : (c && c.enter(), n = a(r), 
                            c && c.exit()), n === t.promise ? l(v("Promise-chain cycle")) : (o = T(n)) ? o.call(n, s, l) : s(n)) : l(r);
                        } catch (u) {
                            l(u);
                        }
                    }; n.length > o; ) a(n[o++]);
                    e._c = [], e._n = !1, t && !e._h && A(e);
                });
            }
        }, A = function(e) {
            g.call(s, function() {
                var t, n, r, i = e._v;
                if (D(e) && (t = N(function() {
                    E ? y.emit("unhandledRejection", i, e) : (n = s.onunhandledrejection) ? n({
                        promise: e,
                        reason: i
                    }) : (r = s.console) && r.error && r.error("Unhandled promise rejection", i);
                }), e._h = E || D(e) ? 2 : 1), e._a = void 0, t) throw t.error;
            });
        }, D = function(e) {
            if (1 == e._h) return !1;
            for (var t, n = e._a || e._c, r = 0; n.length > r; ) if (t = n[r++], t.fail || !D(t.promise)) return !1;
            return !0;
        }, P = function(e) {
            g.call(s, function() {
                var t;
                E ? y.emit("rejectionHandled", e) : (t = s.onrejectionhandled) && t({
                    promise: e,
                    reason: e._v
                });
            });
        }, L = function(e) {
            var t = this;
            t._d || (t._d = !0, t = t._w || t, t._v = e, t._s = 2, t._a || (t._a = t._c.slice()), 
            I(t, !0));
        }, M = function(e) {
            var t, n = this;
            if (!n._d) {
                n._d = !0, n = n._w || n;
                try {
                    if (n === e) throw v("Promise can't be resolved itself");
                    (t = T(e)) ? b(function() {
                        var r = {
                            _w: n,
                            _d: !1
                        };
                        try {
                            t.call(e, l(M, r, 1), l(L, r, 1));
                        } catch (i) {
                            L.call(r, i);
                        }
                    }) : (n._v = e, n._s = 1, I(n, !1));
                } catch (r) {
                    L.call({
                        _w: n,
                        _d: !1
                    }, r);
                }
            }
        };
        C || (w = function(e) {
            m(this, w, _, "_h"), f(e), r.call(this);
            try {
                e(l(M, this, 1), l(L, this, 1));
            } catch (t) {
                L.call(this, t);
            }
        }, r = function(e) {
            this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, 
            this._n = !1;
        }, r.prototype = e("./_redefine-all")(w.prototype, {
            then: function(e, t) {
                var n = S(h(this, w));
                return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, 
                n.domain = E ? y.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && I(this, !1), 
                n.promise;
            },
            "catch": function(e) {
                return this.then(void 0, e);
            }
        }), j = function() {
            var e = new r();
            this.promise = e, this.resolve = l(M, e, 1), this.reject = l(L, e, 1);
        }), u(u.G + u.W + u.F * !C, {
            Promise: w
        }), e("./_set-to-string-tag")(w, _), e("./_set-species")(_), o = e("./_core")[_], 
        u(u.S + u.F * !C, _, {
            reject: function(e) {
                var t = S(this), n = t.reject;
                return n(e), t.promise;
            }
        }), u(u.S + u.F * (a || !C), _, {
            resolve: function(e) {
                if (e instanceof w && x(e.constructor, this)) return e;
                var t = S(this), n = t.resolve;
                return n(e), t.promise;
            }
        }), u(u.S + u.F * !(C && e("./_iter-detect")(function(e) {
            w.all(e)["catch"](k);
        })), _, {
            all: function(e) {
                var t = this, n = S(t), r = n.resolve, i = n.reject, o = N(function() {
                    var n = [], o = 0, a = 1;
                    p(e, !1, function(e) {
                        var s = o++, l = !1;
                        n.push(void 0), a++, t.resolve(e).then(function(e) {
                            l || (l = !0, n[s] = e, --a || r(n));
                        }, i);
                    }), --a || r(n);
                });
                return o && i(o.error), n.promise;
            },
            race: function(e) {
                var t = this, n = S(t), r = n.reject, i = N(function() {
                    p(e, !1, function(e) {
                        t.resolve(e).then(n.resolve, r);
                    });
                });
                return i && r(i.error), n.promise;
            }
        });
    }, {
        "./_a-function": 52,
        "./_an-instance": 54,
        "./_classof": 61,
        "./_core": 66,
        "./_ctx": 68,
        "./_export": 74,
        "./_for-of": 76,
        "./_global": 77,
        "./_is-object": 86,
        "./_iter-detect": 90,
        "./_library": 94,
        "./_microtask": 96,
        "./_redefine-all": 112,
        "./_set-species": 115,
        "./_set-to-string-tag": 116,
        "./_species-constructor": 119,
        "./_task": 121,
        "./_wks": 131
    } ],
    146: [ function(e, t, n) {
        "use strict";
        var r = e("./_string-at")(!0);
        e("./_iter-define")(String, "String", function(e) {
            this._t = String(e), this._i = 0;
        }, function() {
            var e, t = this._t, n = this._i;
            return n >= t.length ? {
                value: void 0,
                done: !0
            } : (e = r(t, n), this._i += e.length, {
                value: e,
                done: !1
            });
        });
    }, {
        "./_iter-define": 89,
        "./_string-at": 120
    } ],
    147: [ function(e, t, n) {
        "use strict";
        var r = e("./_global"), i = e("./_has"), o = e("./_descriptors"), a = e("./_export"), s = e("./_redefine"), l = e("./_meta").KEY, c = e("./_fails"), u = e("./_shared"), d = e("./_set-to-string-tag"), f = e("./_uid"), m = e("./_wks"), p = e("./_wks-ext"), h = e("./_wks-define"), g = e("./_keyof"), b = e("./_enum-keys"), _ = e("./_is-array"), v = e("./_an-object"), y = e("./_to-iobject"), w = e("./_to-primitive"), E = e("./_property-desc"), k = e("./_object-create"), C = e("./_object-gopn-ext"), x = e("./_object-gopd"), T = e("./_object-dp"), S = e("./_object-keys"), j = x.f, N = T.f, I = C.f, A = r.Symbol, D = r.JSON, P = D && D.stringify, L = "prototype", M = m("_hidden"), R = m("toPrimitive"), F = {}.propertyIsEnumerable, O = u("symbol-registry"), G = u("symbols"), z = u("op-symbols"), B = Object[L], W = "function" == typeof A, H = r.QObject, U = !H || !H[L] || !H[L].findChild, V = o && c(function() {
            return 7 != k(N({}, "a", {
                get: function() {
                    return N(this, "a", {
                        value: 7
                    }).a;
                }
            })).a;
        }) ? function(e, t, n) {
            var r = j(B, t);
            r && delete B[t], N(e, t, n), r && e !== B && N(B, t, r);
        } : N, q = function(e) {
            var t = G[e] = k(A[L]);
            return t._k = e, t;
        }, Y = W && "symbol" == typeof A.iterator ? function(e) {
            return "symbol" == typeof e;
        } : function(e) {
            return e instanceof A;
        }, K = function(e, t, n) {
            return e === B && K(z, t, n), v(e), t = w(t, !0), v(n), i(G, t) ? (n.enumerable ? (i(e, M) && e[M][t] && (e[M][t] = !1), 
            n = k(n, {
                enumerable: E(0, !1)
            })) : (i(e, M) || N(e, M, E(1, {})), e[M][t] = !0), V(e, t, n)) : N(e, t, n);
        }, X = function(e, t) {
            v(e);
            for (var n, r = b(t = y(t)), i = 0, o = r.length; o > i; ) K(e, n = r[i++], t[n]);
            return e;
        }, Q = function(e, t) {
            return void 0 === t ? k(e) : X(k(e), t);
        }, J = function(e) {
            var t = F.call(this, e = w(e, !0));
            return !(this === B && i(G, e) && !i(z, e)) && (!(t || !i(this, e) || !i(G, e) || i(this, M) && this[M][e]) || t);
        }, $ = function(e, t) {
            if (e = y(e), t = w(t, !0), e !== B || !i(G, t) || i(z, t)) {
                var n = j(e, t);
                return !n || !i(G, t) || i(e, M) && e[M][t] || (n.enumerable = !0), n;
            }
        }, Z = function(e) {
            for (var t, n = I(y(e)), r = [], o = 0; n.length > o; ) i(G, t = n[o++]) || t == M || t == l || r.push(t);
            return r;
        }, ee = function(e) {
            for (var t, n = e === B, r = I(n ? z : y(e)), o = [], a = 0; r.length > a; ) !i(G, t = r[a++]) || n && !i(B, t) || o.push(G[t]);
            return o;
        };
        W || (A = function() {
            if (this instanceof A) throw TypeError("Symbol is not a constructor!");
            var e = f(arguments.length > 0 ? arguments[0] : void 0), t = function(n) {
                this === B && t.call(z, n), i(this, M) && i(this[M], e) && (this[M][e] = !1), V(this, e, E(1, n));
            };
            return o && U && V(B, e, {
                configurable: !0,
                set: t
            }), q(e);
        }, s(A[L], "toString", function() {
            return this._k;
        }), x.f = $, T.f = K, e("./_object-gopn").f = C.f = Z, e("./_object-pie").f = J, 
        e("./_object-gops").f = ee, o && !e("./_library") && s(B, "propertyIsEnumerable", J, !0), 
        p.f = function(e) {
            return q(m(e));
        }), a(a.G + a.W + a.F * !W, {
            Symbol: A
        });
        for (var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ne = 0; te.length > ne; ) m(te[ne++]);
        for (var te = S(m.store), ne = 0; te.length > ne; ) h(te[ne++]);
        a(a.S + a.F * !W, "Symbol", {
            "for": function(e) {
                return i(O, e += "") ? O[e] : O[e] = A(e);
            },
            keyFor: function(e) {
                if (Y(e)) return g(O, e);
                throw TypeError(e + " is not a symbol!");
            },
            useSetter: function() {
                U = !0;
            },
            useSimple: function() {
                U = !1;
            }
        }), a(a.S + a.F * !W, "Object", {
            create: Q,
            defineProperty: K,
            defineProperties: X,
            getOwnPropertyDescriptor: $,
            getOwnPropertyNames: Z,
            getOwnPropertySymbols: ee
        }), D && a(a.S + a.F * (!W || c(function() {
            var e = A();
            return "[null]" != P([ e ]) || "{}" != P({
                a: e
            }) || "{}" != P(Object(e));
        })), "JSON", {
            stringify: function(e) {
                if (void 0 !== e && !Y(e)) {
                    for (var t, n, r = [ e ], i = 1; arguments.length > i; ) r.push(arguments[i++]);
                    return t = r[1], "function" == typeof t && (n = t), !n && _(t) || (t = function(e, t) {
                        if (n && (t = n.call(this, e, t)), !Y(t)) return t;
                    }), r[1] = t, P.apply(D, r);
                }
            }
        }), A[L][R] || e("./_hide")(A[L], R, A[L].valueOf), d(A, "Symbol"), d(Math, "Math", !0), 
        d(r.JSON, "JSON", !0);
    }, {
        "./_an-object": 55,
        "./_descriptors": 70,
        "./_enum-keys": 73,
        "./_export": 74,
        "./_fails": 75,
        "./_global": 77,
        "./_has": 78,
        "./_hide": 79,
        "./_is-array": 85,
        "./_keyof": 93,
        "./_library": 94,
        "./_meta": 95,
        "./_object-create": 98,
        "./_object-dp": 99,
        "./_object-gopd": 101,
        "./_object-gopn": 103,
        "./_object-gopn-ext": 102,
        "./_object-gops": 104,
        "./_object-keys": 107,
        "./_object-pie": 108,
        "./_property-desc": 111,
        "./_redefine": 113,
        "./_set-to-string-tag": 116,
        "./_shared": 118,
        "./_to-iobject": 124,
        "./_to-primitive": 127,
        "./_uid": 128,
        "./_wks": 131,
        "./_wks-define": 129,
        "./_wks-ext": 130
    } ],
    148: [ function(e, t, n) {
        var r = e("./_export");
        r(r.P + r.R, "Map", {
            toJSON: e("./_collection-to-json")("Map")
        });
    }, {
        "./_collection-to-json": 64,
        "./_export": 74
    } ],
    149: [ function(e, t, n) {
        var r = e("./_export"), i = e("./_object-to-array")(!1);
        r(r.S, "Object", {
            values: function(e) {
                return i(e);
            }
        });
    }, {
        "./_export": 74,
        "./_object-to-array": 110
    } ],
    150: [ function(e, t, n) {
        e("./_wks-define")("asyncIterator");
    }, {
        "./_wks-define": 129
    } ],
    151: [ function(e, t, n) {
        e("./_wks-define")("observable");
    }, {
        "./_wks-define": 129
    } ],
    152: [ function(e, t, n) {
        e("./es6.array.iterator");
        for (var r = e("./_global"), i = e("./_hide"), o = e("./_iterators"), a = e("./_wks")("toStringTag"), s = [ "NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList" ], l = 0; l < 5; l++) {
            var c = s[l], u = r[c], d = u && u.prototype;
            d && !d[a] && i(d, a, c), o[c] = o.Array;
        }
    }, {
        "./_global": 77,
        "./_hide": 79,
        "./_iterators": 92,
        "./_wks": 131,
        "./es6.array.iterator": 136
    } ],
    153: [ function(e, t, n) {
        (function(n) {
            var r = "object" == typeof n ? n : "object" == typeof window ? window : "object" == typeof self ? self : this, i = r.regeneratorRuntime && Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime") >= 0, o = i && r.regeneratorRuntime;
            if (r.regeneratorRuntime = void 0, t.exports = e("./runtime"), i) r.regeneratorRuntime = o; else try {
                delete r.regeneratorRuntime;
            } catch (a) {
                r.regeneratorRuntime = void 0;
            }
        }).call(this, "undefined" != typeof window ? window : {});
    }, {
        "./runtime": 154
    } ],
    154: [ function(e, t, n) {
        (function(e, n) {
            !function(n) {
                "use strict";
                function r(e, t, n, r) {
                    var i = t && t.prototype instanceof o ? t : o, a = Object.create(i.prototype), s = new p(r || []);
                    return a._invoke = d(e, n, s), a;
                }
                function i(e, t, n) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, n)
                        };
                    } catch (r) {
                        return {
                            type: "throw",
                            arg: r
                        };
                    }
                }
                function o() {}
                function a() {}
                function s() {}
                function l(e) {
                    [ "next", "throw", "return" ].forEach(function(t) {
                        e[t] = function(e) {
                            return this._invoke(t, e);
                        };
                    });
                }
                function c(e) {
                    this.arg = e;
                }
                function u(t) {
                    function n(e, r, o, a) {
                        var s = i(t[e], t, r);
                        if ("throw" !== s.type) {
                            var l = s.arg, u = l.value;
                            return u instanceof c ? Promise.resolve(u.arg).then(function(e) {
                                n("next", e, o, a);
                            }, function(e) {
                                n("throw", e, o, a);
                            }) : Promise.resolve(u).then(function(e) {
                                l.value = e, o(l);
                            }, a);
                        }
                        a(s.arg);
                    }
                    function r(e, t) {
                        function r() {
                            return new Promise(function(r, i) {
                                n(e, t, r, i);
                            });
                        }
                        return o = o ? o.then(r, r) : r();
                    }
                    "object" == typeof e && e.domain && (n = e.domain.bind(n));
                    var o;
                    this._invoke = r;
                }
                function d(e, t, n) {
                    var r = C;
                    return function(o, a) {
                        if (r === T) throw new Error("Generator is already running");
                        if (r === S) {
                            if ("throw" === o) throw a;
                            return g();
                        }
                        for (;;) {
                            var s = n.delegate;
                            if (s) {
                                if ("return" === o || "throw" === o && s.iterator[o] === b) {
                                    n.delegate = null;
                                    var l = s.iterator["return"];
                                    if (l) {
                                        var c = i(l, s.iterator, a);
                                        if ("throw" === c.type) {
                                            o = "throw", a = c.arg;
                                            continue;
                                        }
                                    }
                                    if ("return" === o) continue;
                                }
                                var c = i(s.iterator[o], s.iterator, a);
                                if ("throw" === c.type) {
                                    n.delegate = null, o = "throw", a = c.arg;
                                    continue;
                                }
                                o = "next", a = b;
                                var u = c.arg;
                                if (!u.done) return r = x, u;
                                n[s.resultName] = u.value, n.next = s.nextLoc, n.delegate = null;
                            }
                            if ("next" === o) n.sent = n._sent = a; else if ("throw" === o) {
                                if (r === C) throw r = S, a;
                                n.dispatchException(a) && (o = "next", a = b);
                            } else "return" === o && n.abrupt("return", a);
                            r = T;
                            var c = i(e, t, n);
                            if ("normal" === c.type) {
                                r = n.done ? S : x;
                                var u = {
                                    value: c.arg,
                                    done: n.done
                                };
                                if (c.arg !== j) return u;
                                n.delegate && "next" === o && (a = b);
                            } else "throw" === c.type && (r = S, o = "throw", a = c.arg);
                        }
                    };
                }
                function f(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), 
                    this.tryEntries.push(t);
                }
                function m(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t;
                }
                function p(e) {
                    this.tryEntries = [ {
                        tryLoc: "root"
                    } ], e.forEach(f, this), this.reset(!0);
                }
                function h(e) {
                    if (e) {
                        var t = e[y];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1, r = function i() {
                                for (;++n < e.length; ) if (_.call(e, n)) return i.value = e[n], i.done = !1, i;
                                return i.value = b, i.done = !0, i;
                            };
                            return r.next = r;
                        }
                    }
                    return {
                        next: g
                    };
                }
                function g() {
                    return {
                        value: b,
                        done: !0
                    };
                }
                var b, _ = Object.prototype.hasOwnProperty, v = "function" == typeof Symbol ? Symbol : {}, y = v.iterator || "@@iterator", w = v.toStringTag || "@@toStringTag", E = "object" == typeof t, k = n.regeneratorRuntime;
                if (k) return void (E && (t.exports = k));
                k = n.regeneratorRuntime = E ? t.exports : {}, k.wrap = r;
                var C = "suspendedStart", x = "suspendedYield", T = "executing", S = "completed", j = {}, N = s.prototype = o.prototype;
                a.prototype = N.constructor = s, s.constructor = a, s[w] = a.displayName = "GeneratorFunction", 
                k.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === a || "GeneratorFunction" === (t.displayName || t.name));
                }, k.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, s) : (e.__proto__ = s, w in e || (e[w] = "GeneratorFunction")), 
                    e.prototype = Object.create(N), e;
                }, k.awrap = function(e) {
                    return new c(e);
                }, l(u.prototype), k.async = function(e, t, n, i) {
                    var o = new u(r(e, t, n, i));
                    return k.isGeneratorFunction(t) ? o : o.next().then(function(e) {
                        return e.done ? e.value : o.next();
                    });
                }, l(N), N[y] = function() {
                    return this;
                }, N[w] = "Generator", N.toString = function() {
                    return "[object Generator]";
                }, k.keys = function(e) {
                    var t = [];
                    for (var n in e) t.push(n);
                    return t.reverse(), function r() {
                        for (;t.length; ) {
                            var n = t.pop();
                            if (n in e) return r.value = n, r.done = !1, r;
                        }
                        return r.done = !0, r;
                    };
                }, k.values = h, p.prototype = {
                    constructor: p,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = b, this.done = !1, this.delegate = null, 
                        this.tryEntries.forEach(m), !e) for (var t in this) "t" === t.charAt(0) && _.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = b);
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0], t = e.completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval;
                    },
                    dispatchException: function(e) {
                        function t(t, r) {
                            return o.type = "throw", o.arg = e, n.next = t, !!r;
                        }
                        if (this.done) throw e;
                        for (var n = this, r = this.tryEntries.length - 1; r >= 0; --r) {
                            var i = this.tryEntries[r], o = i.completion;
                            if ("root" === i.tryLoc) return t("end");
                            if (i.tryLoc <= this.prev) {
                                var a = _.call(i, "catchLoc"), s = _.call(i, "finallyLoc");
                                if (a && s) {
                                    if (this.prev < i.catchLoc) return t(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return t(i.finallyLoc);
                                } else if (a) {
                                    if (this.prev < i.catchLoc) return t(i.catchLoc, !0);
                                } else {
                                    if (!s) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return t(i.finallyLoc);
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var r = this.tryEntries[n];
                            if (r.tryLoc <= this.prev && _.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var i = r;
                                break;
                            }
                        }
                        i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                        var o = i ? i.completion : {};
                        return o.type = e, o.arg = t, i ? this.next = i.finallyLoc : this.complete(o), j;
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = e.arg, 
                        this.next = "end") : "normal" === e.type && t && (this.next = t);
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), m(n), j;
                        }
                    },
                    "catch": function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var i = r.arg;
                                    m(n);
                                }
                                return i;
                            }
                        }
                        throw new Error("illegal catch attempt");
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: h(e),
                            resultName: t,
                            nextLoc: n
                        }, j;
                    }
                };
            }("object" == typeof n ? n : "object" == typeof window ? window : "object" == typeof self ? self : this);
        }).call(this, e("_process"), "undefined" != typeof window ? window : {});
    }, {
        _process: 156
    } ],
    155: [ function(e, t, n) {
        t.exports = e("regenerator-runtime");
    }, {
        "regenerator-runtime": 153
    } ],
    156: [ function(e, t, n) {
        function r() {
            throw new Error("setTimeout has not been defined");
        }
        function i() {
            throw new Error("clearTimeout has not been defined");
        }
        function o(e) {
            if (d === setTimeout) return setTimeout(e, 0);
            if ((d === r || !d) && setTimeout) return d = setTimeout, setTimeout(e, 0);
            try {
                return d(e, 0);
            } catch (t) {
                try {
                    return d.call(null, e, 0);
                } catch (t) {
                    return d.call(this, e, 0);
                }
            }
        }
        function a(e) {
            if (f === clearTimeout) return clearTimeout(e);
            if ((f === i || !f) && clearTimeout) return f = clearTimeout, clearTimeout(e);
            try {
                return f(e);
            } catch (t) {
                try {
                    return f.call(null, e);
                } catch (t) {
                    return f.call(this, e);
                }
            }
        }
        function s() {
            g && p && (g = !1, p.length ? h = p.concat(h) : b = -1, h.length && l());
        }
        function l() {
            if (!g) {
                var e = o(s);
                g = !0;
                for (var t = h.length; t; ) {
                    for (p = h, h = []; ++b < t; ) p && p[b].run();
                    b = -1, t = h.length;
                }
                p = null, g = !1, a(e);
            }
        }
        function c(e, t) {
            this.fun = e, this.array = t;
        }
        function u() {}
        var d, f, m = t.exports = {};
        !function() {
            try {
                d = "function" == typeof setTimeout ? setTimeout : r;
            } catch (e) {
                d = r;
            }
            try {
                f = "function" == typeof clearTimeout ? clearTimeout : i;
            } catch (e) {
                f = i;
            }
        }();
        var p, h = [], g = !1, b = -1;
        m.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            h.push(new c(e, t)), 1 !== h.length || g || o(l);
        }, c.prototype.run = function() {
            this.fun.apply(null, this.array);
        }, m.title = "browser", m.browser = !0, m.env = {}, m.argv = [], m.version = "", 
        m.versions = {}, m.on = u, m.addListener = u, m.once = u, m.off = u, m.removeListener = u, 
        m.removeAllListeners = u, m.emit = u, m.binding = function(e) {
            throw new Error("process.binding is not supported");
        }, m.cwd = function() {
            return "/";
        }, m.chdir = function(e) {
            throw new Error("process.chdir is not supported");
        }, m.umask = function() {
            return 0;
        };
    }, {} ],
    157: [ function(e, t, n) {
        "use strict";
        function r() {
            return "about:" == document.location.protocol ? i.failover.success("index_load") : (document.body.dataset.grCSLoaded = !0, 
            i.failover.startAppLoadTimer(), void e("./lib/app"));
        }
        var i = e("./lib/failover"), o = e("./lib/ghost/html-ghost-locator"), a = e("./lib/client-script"), s = o.getClientScriptFunction();
        if (s) {
            a.ClientScript.addScript(document, s);
            var l = o.getGhostListener();
            l && l();
        }
        i.failover.startPageLoadTimer(), "loading" == document.readyState ? document.addEventListener("DOMContentLoaded", r, !1) : r();
    }, {
        "./lib/app": 158,
        "./lib/client-script": 179,
        "./lib/failover": 211,
        "./lib/ghost/html-ghost-locator": 216
    } ],
    158: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function i() {
            var e = {
                connection: {
                    networkOffline: !window.navigator.onLine,
                    online: !1,
                    bgNotConnected: !0,
                    cookiesDisabled: 0 == navigator.cookieEnabled
                },
                user: {
                    anonymous: !0,
                    premium: !1,
                    settings: {}
                },
                page: {
                    enabled: !0,
                    enabledDefs: !1,
                    domain: A
                }
            };
            o(e);
        }
        function o(e) {
            if (e.page.domain != A) return void k.call("felog.warn", "state_invariant", {
                locationHash: h.hash(A)
            });
            var t = 0 == navigator.cookieEnabled;
            e.connection.cookiesDisabled != t && O.updateConnection({
                cookiesDisabled: t
            });
            var n = T.timers.stop(I);
            n && !e.connection.bgNotConnected && (k.call("felog.warn", "restored_bg_connection", {
                active_time: n
            }), k.call("statsc.ui.timing", "stability:restored_bg_connection", n)), R && (clearTimeout(R), 
            R = null), !M && s(e.page.domain, e.connection), e.page.enabled ? a(e) : f(), !M && E.failover.success("app_load"), 
            M = !0;
        }
        function a(e) {
            return u(e.page, e.user), P ? P.updateState(e) : void (P = v.Buttons((0, p["default"])({}, e, {
                app: D,
                doc: j,
                actions: O
            })));
        }
        function s(e, t) {
            var n = t.bgNotConnected;
            l(e), _.isSafari() && d();
            var r = y.pageStyles(j);
            r.customizeElements(), r.addDomainClass(), E.failover.success("index_load"), n && (T.timers.start(I), 
            k.call("felog.warn", "init_without_bg_connection"), k.call("statsc.ui.increment", "stability:init_without_bg_connection"));
        }
        function l(e) {
            e.includes(S.GRAMMARLY_DOMAIN) && w.External();
        }
        function c() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            g.GlobalDebug(e);
        }
        function u(e) {
            var t = e.enabledDefs, n = e.cardInspection, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            t && !L ? L = x.Dictionary({
                doc: j,
                cardInspection: n
            }, r) : (L && L.clear(), L = null);
        }
        function d() {
            function e() {
                var n = window.getComputedStyle(t), r = n.getPropertyValue("opacity");
                "0.5" != r ? f() : setTimeout(e, 200);
            }
            var t = j.createElement("div");
            j.body.appendChild(t), t.classList.add("grammarly-disable-indicator"), setTimeout(e, 1e3);
        }
        function f() {
            P && (console.log("cleanup page from extension"), P.clear(), P = null);
        }
        var m = e("babel-runtime/core-js/object/assign"), p = r(m), h = e("spark-md5"), g = e("./console"), b = e("./state"), _ = e("./util"), v = e("./buttons"), y = e("./sites"), w = e("./external"), E = e("./failover"), k = e("./tracking"), C = e("./location"), x = e("./dictionary"), T = e("./timers"), S = e("lib/config"), j = document, N = 3e4, I = "init_without_bg_connection", A = C.getDomain(), D = {}, P = void 0, L = void 0, M = void 0, R = setTimeout(i, N), F = b.createAndObserve(o), O = F.actions;
        c(), n.update = o;
    }, {
        "./buttons": 167,
        "./console": 181,
        "./dictionary": 183,
        "./external": 210,
        "./failover": 211,
        "./location": 232,
        "./sites": 240,
        "./state": 246,
        "./test-api": 250,
        "./timers": 251,
        "./tracking": 255,
        "./util": 259,
        "babel-runtime/core-js/object/assign": 18,
        "lib/config": 180,
        "spark-md5": "spark-md5"
    } ],
    159: [ function(e, t, n) {
        "use strict";
        function r(e) {
        }
        n.benchmark = r;
    }, {} ],
    160: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function i() {
            return l.isChrome() ? new a["default"](function(e, t) {
                try {
                    window.chrome.cookies.getAll({
                        domain: c.GRAMMARLY_DOMAIN,
                        path: u
                    }, function(t) {
                        return e(Array.isArray(t) ? t : []);
                    });
                } catch (n) {
                    t(n);
                }
            }) : [];
        }
        var o = e("babel-runtime/core-js/promise"), a = r(o), s = e("lib/forge"), l = e("lib/util"), c = e("lib/config"), u = "/";
        n.getCookie = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.GRAMMARLY_DOMAIN;
            return new a["default"](function(n, r) {
                return s.forge.cookies.get(t, u, e, n, r);
            });
        }, n.watch = function(e, t) {
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.GRAMMARLY_DOMAIN;
            if (!e) throw new Error("cookies.watch: callback required");
            s.forge.cookies.watch(c.GRAMMARLY_DOMAIN, u, t, e);
        }, n.getToken = function() {
            return n.getCookie("grauth");
        }, n.watchToken = function(e) {
            return n.watch(e, "grauth");
        }, n.setCookie = function(e) {
            return new a["default"](function(t, n) {
                return s.forge.cookies.set(e, t, n);
            });
        }, n.getAllGrammarlyCookies = i;
    }, {
        "babel-runtime/core-js/promise": 25,
        "lib/config": 180,
        "lib/forge": 212,
        "lib/util": 259
    } ],
    161: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        var i = e("babel-runtime/core-js/object/assign"), o = r(i), a = e("./user/actions"), s = e("./settings/actions"), l = e("./connection/actions");
        n.pureActions = (0, o["default"])({}, a, l, s);
    }, {
        "./connection/actions": 162,
        "./settings/actions": 163,
        "./user/actions": 164,
        "babel-runtime/core-js/object/assign": 18
    } ],
    162: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return {
                type: n.t.UPDATE_CONNECTION,
                data: e
            };
        }
        function i(e) {
            return {
                type: n.t.ONLINE_STATE,
                online: e
            };
        }
        n.t = {
            UPDATE_CONNECTION: "connection/UPDATE_CONNECTION",
            ONLINE_STATE: "connection/ONLINE_STATE"
        }, n.updateConnection = r, n.onlineConnection = i;
    }, {} ],
    163: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return {
                type: n.t.SET_WEAK_DIALECT,
                data: e
            };
        }
        function i(e) {
            return {
                type: n.t.CHANGE_WEAK_DIALECT,
                data: e
            };
        }
        function o(e) {
            return {
                type: n.t.SETTINGS_INITIAL,
                data: e
            };
        }
        function a(e) {
            return {
                type: n.t.TOGGLE_DEFS,
                enabledDefs: e
            };
        }
        function s(e, t) {
            return {
                type: n.t.TOGGLE_SITE,
                domain: t,
                enabled: e
            };
        }
        function l(e, t) {
            return {
                type: n.t.TOGGLE_FIELD,
                domain: t,
                data: e
            };
        }
        function c() {
            return {
                type: n.t.SEEN_NEWS
            };
        }
        function u(e) {
            return {
                type: n.t.SHOW_NEWS,
                showNews: e
            };
        }
        function d() {
            return {
                type: n.t.SEEN_REFERRALS
            };
        }
        function f() {
            return {
                type: n.t.CLICK_REFERRALS
            };
        }
        n.t = {
            SETTINGS_INITIAL: "settings/SETTINGS_INITIAL",
            TOGGLE_DEFS: "settings/TOGGLE_DEFS",
            TOGGLE_SITE: "settings/TOGGLE_SITE",
            TOGGLE_FIELD: "settings/TOGGLE_FIELD",
            SHOW_NEWS: "settings/SHOW_NEWS",
            SEEN_NEWS: "settings/SEEN_NEWS",
            SEEN_REFERRALS: "settings/SEEN_REFERRALS",
            CLICK_REFERRALS: "settings/CLICK_REFERRALS",
            SET_WEAK_DIALECT: "settings/SET_WEAK_DIALECT",
            CHANGE_WEAK_DIALECT: "settings/CHANGE_WEAK_DIALECT"
        }, n.DAPI_ACTIONS = [ n.t.CHANGE_WEAK_DIALECT ], n.CACHED_ACTIONS = [ n.t.TOGGLE_DEFS, n.t.TOGGLE_SITE, n.t.TOGGLE_FIELD, n.t.SEEN_NEWS, n.t.SEEN_REFERRALS, n.t.CLICK_REFERRALS ], 
        n.setWeakDialect = r, n.changeWeakDialect = i, n.initialSettings = o, n.toggleDefs = a, 
        n.toggleSite = s, n.toggleField = l, n.seenNews = c, n.showNews = u, n.seenReferrals = d, 
        n.clickReferrals = f;
    }, {} ],
    164: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return {
                type: n.t.SET_USER,
                data: e
            };
        }
        function i(e) {
            return {
                type: n.t.UPDATE_SETTINGS,
                data: e
            };
        }
        function o(e) {
            return {
                type: n.t.SET_SETTINGS,
                data: e
            };
        }
        function a(e) {
            return {
                type: n.t.SESSION_INVALIDATE,
                reason: e
            };
        }
        function s() {
            return {
                type: n.t.INC_FIXED
            };
        }
        n.t = {
            SET_USER: "user/SET_USER",
            SET_SETTINGS: "user/SET_SETTINGS",
            UPDATE_SETTINGS: "user/UPDATE_SETTINGS",
            SESSION_INVALIDATE: "user/SESSION_INVALIDATE",
            INC_FIXED: "user/INC_FIXED"
        }, n.setUser = r, n.updateSettings = i, n.setSettings = o, n.sessionInvalidate = a, 
        n.incFixed = s;
    }, {} ],
    165: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        var i = e("babel-runtime/core-js/object/keys"), o = r(i), a = e("babel-runtime/helpers/typeof"), s = r(a), l = e("babel-runtime/regenerator"), c = r(l), u = e("babel-runtime/helpers/defineProperty"), d = r(u), f = e("babel-runtime/core-js/object/assign"), m = r(f), p = e("babel-runtime/core-js/promise"), h = r(p), g = function(e, t, n, r) {
            return new (n || (n = h["default"]))(function(i, o) {
                function a(e) {
                    try {
                        l(r.next(e));
                    } catch (t) {
                        o(t);
                    }
                }
                function s(e) {
                    try {
                        l(r["throw"](e));
                    } catch (t) {
                        o(t);
                    }
                }
                function l(e) {
                    e.done ? i(e.value) : new n(function(t) {
                        t(e.value);
                    }).then(a, s);
                }
                l((r = r.apply(e, t)).next());
            });
        }, b = e("emitter"), _ = e("lib/forge"), v = function(e) {
            return new h["default"](function(t, n) {
                try {
                    _.forge.prefs.get(e, t, function(t) {
                        return t && t.message && t.message.includes("SyntaxError") ? (_.forge.prefs.clear(e), 
                        n("Prop:" + e + " has corrupted value, cleanup")) : void n(t);
                    });
                } catch (r) {
                    n(r);
                }
            });
        };
        n.prefs = b({
            get: function(e) {
                return g(void 0, void 0, void 0, c["default"].mark(function t() {
                    var n, r, i = this;
                    return c["default"].wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (n = Array.isArray(e), r = void 0, t.prev = 2, !n) {
                                t.next = 7;
                                break;
                            }
                            return t.delegateYield(c["default"].mark(function o() {
                                var t;
                                return c["default"].wrap(function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                      case 0:
                                        return n.next = 2, h["default"].all(e.map(v));

                                      case 2:
                                        t = n.sent, r = e.reduce(function(e, n, r) {
                                            return (0, m["default"])(e, (0, d["default"])({}, n, t[r]));
                                        }, {});

                                      case 4:
                                      case "end":
                                        return n.stop();
                                    }
                                }, o, i);
                            })(), "t0", 5);

                          case 5:
                            t.next = 10;
                            break;

                          case 7:
                            return t.next = 9, v(e);

                          case 9:
                            r = t.sent;

                          case 10:
                            t.next = 16;
                            break;

                          case 12:
                            t.prev = 12, t.t1 = t["catch"](2), n && (r = {}), console.warn("prefs get error:", t.t1);

                          case 16:
                            return t.abrupt("return", r);

                          case 17:
                          case "end":
                            return t.stop();
                        }
                    }, t, this, [ [ 2, 12 ] ]);
                }));
            },
            set: function(e, t) {
                return g(void 0, void 0, void 0, c["default"].mark(function r() {
                    return c["default"].wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            if (null === e || "object" !== ("undefined" == typeof e ? "undefined" : (0, s["default"])(e))) {
                                r.next = 2;
                                break;
                            }
                            return r.abrupt("return", (0, o["default"])(e).forEach(function(t) {
                                return n.prefs.set(t, e[t]);
                            }));

                          case 2:
                            try {
                                _.forge.prefs.set(e, t);
                            } catch (i) {
                                console.warn("prefs set error", i);
                            }

                          case 3:
                          case "end":
                            return r.stop();
                        }
                    }, r, this);
                }));
            },
            all: function() {
                return new h["default"](function(e, t) {
                    try {
                        _.forge.prefs.all(e, t);
                    } catch (n) {
                        t(n);
                    }
                });
            },
            clearAll: function() {
                try {
                    _.forge.prefs.clearAll();
                } catch (e) {
                    console.warn("prefs clearAll error", e);
                }
            }
        });
    }, {
        "babel-runtime/core-js/object/assign": 18,
        "babel-runtime/core-js/object/keys": 22,
        "babel-runtime/core-js/promise": 25,
        "babel-runtime/helpers/defineProperty": 30,
        "babel-runtime/helpers/typeof": 36,
        "babel-runtime/regenerator": 155,
        emitter: "emitter",
        "lib/forge": 212
    } ],
    166: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function i(e, t, n) {
            return h.isFocused(n) || e == n || h.isParent(e, n) || e == t || h.isParent(e, t);
        }
        function o(e) {
            return 0 == e.className.indexOf("gr-") || h.resolveEl(e, S.textarea_btn) || h.resolveEl(e, "gr__tooltip");
        }
        function a(e) {
            var t = w.guid(), n = e;
            h.setGRAttributes(n, t), n.setAttribute("gramm-ifr", !0);
            var r = n.contentDocument;
            return h.addIframeCss(r), h.setGRAttributes(r.body, t), n.style.height = n.style.height || getComputedStyle(n).height, 
            r.body;
        }
        function s(e, t) {
            function n() {
                ne = ue.createElement("grammarly-btn"), re = p.findDOMNode(L()), r(), ie = new E.Pos({
                    btnEl: re,
                    fieldEl: Z,
                    custom: be,
                    sourceEl: Le,
                    isTextarea: "textarea" == ee,
                    initCondition: _e
                }), ie.on("update", I), ie.on("change-state", A), De = k.BtnPath({
                    editorEl: Z,
                    btnEl: re,
                    padding: 15
                }), oe = C.Menu({
                    el: re,
                    editor: ae,
                    posSourceEl: de && Z,
                    enabled: _e,
                    referral: Ne,
                    referralWasClicked: Ie,
                    onReferralClick: te.clickReferrals,
                    user: Te,
                    btn: He,
                    app: X
                }), se = y.ErrorTooltip({
                    el: re,
                    doc: ue,
                    win: window
                }), oe.bind(), oe.on("change-state", function(e) {
                    ve = e, P();
                }), h.listen(re, "click", j), t.on("hover", M), h.listen(fe, "focus", s), h.listen(fe, "blur", N), 
                h.isFocused(fe) && (M({
                    target: fe
                }), s()), Me.fieldParentCustomStyle && (Fe = h.setCustomCss(Z.parentNode, Me.fieldParentCustomStyle(Z))), 
                !$.online && He.offline();
            }
            function r() {
                var e = {
                    "z-index": (parseInt(h.css(Z, "z-index")) || 1) + 1
                }, t = Me.btnCustomContainer && Me.btnCustomContainer(Z);
                if (t) {
                    be = !0, Le = t;
                    var n = Me.btnCustomStyles && Me.btnCustomStyles(!0, Z);
                    n && (0, c["default"])(e, n);
                }
                h.insertAfter(ne, Le), I(e);
            }
            function s() {
                if (xe = !0, he = !0, we = !0, t.off("hover", M), !_e) return void q();
                if (!Ce) {
                    Ce = !0;
                    try {
                        ae = b.CreateEditor({
                            app: X,
                            doc: ue,
                            connection: $,
                            page: J,
                            user: Q,
                            type: ee,
                            field: Z,
                            actions: te
                        }), le = v.InfinityChecker(ae.reset, He.offline), l("on"), ae.run(), oe.updateEditor(ae), 
                        ie.set("minimize", !pe), ie.set("editor", ae);
                    } catch (e) {
                        console.error(e), He.offline();
                    }
                    q();
                }
            }
            function l() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "on";
                ae[e]("finish", u), ae[e]("rendered", q), ae[e]("sending", G), ae[e]("show-dialog", B);
            }
            function u() {
                B(), q();
            }
            function j() {
                ae && ae.isOffline() && se.fastShow();
            }
            function N(e) {
                ye && h.isFocused(fe) && M(e);
            }
            function I(e) {
                (0, c["default"])(ce, e), P();
            }
            function A() {
                Ee = !Y(), ke = !0, _.fire("button-change-state", Ee), oe && oe.hide();
            }
            function D(e) {
                pe || (fe.focus(), h.hasClass(e.target, S.status) && oe.show(!0));
            }
            function P() {
                ne || n(), L();
            }
            function L() {
                return p.render(m.createElement(T.ButtonComponent, {
                    state: K(),
                    inlineStyle: ce,
                    onViewClick: D
                }), ne);
            }
            function M(e) {
                if (!h.isFocused(fe) && he) {
                    if (De.within(e)) return void F();
                    he = !1;
                }
                if (e.target != fe) return O();
                if (i(e.target, re, fe)) he = !0, F(); else {
                    if (o(e.target)) return;
                    O();
                }
            }
            function R() {
                ye = !0, we = !0, 0 == re.style.opacity && (re.style.opacity = 1), q(), Oe();
            }
            function F() {
                ye || (_e ? R() : Pe = setTimeout(R, 150));
            }
            function O() {
                if (ye) {
                    if (clearTimeout(Pe), oe.isOpened()) return void (re.style.opacity = 0);
                    ye = !1, we = !1, q();
                }
            }
            function G() {
                pe || (clearTimeout(Ae), z());
            }
            function z() {
                clearTimeout(Ae), ae && !ae.getText().trim() || me || (me = !0, le && le.start(), 
                !ye && M({
                    target: fe
                }), q());
            }
            function B() {
                clearTimeout(Ae), le && le.finish(), Ae = setTimeout(W, 200);
            }
            function W() {
                me = !1, q();
            }
            function H() {
                ae && (le && le.finish(), Ce = !1, ae.remove(), l("off"));
            }
            function U() {
                H(), ie && ie.remove(), oe && oe.remove(), oe && oe.unbind(), h.unlisten(re, "click", j), 
                t.off("hover", M), h.unlisten(fe, "focus", s), h.unlisten(fe, "blur", N), se.remove(), 
                Fe && Fe(), ne.parentNode && ne.parentNode.removeChild(ne);
            }
            function V(e) {
                var t = e.user, n = e.connection, r = e.page;
                Se = t.anonymous, je = t.premium, Ne = t.referral, Ie = r.referralWasClicked, Te = t, 
                Ge(n.online), ae && ae.updateState({
                    user: t,
                    connection: n,
                    page: r
                }), q();
            }
            function q() {
                var e = ae && ae.errorData() || {};
                e.enabled = _e, e.checking = me, e.anonymous = Se, e.premium = je, e.referral = Ne, 
                e.referralWasClicked = Ie, e.user = Te, e.fieldWasFocused = xe, oe && oe.update(e), 
                ie && ie.set("show", we), P();
            }
            function Y() {
                return ie.max;
            }
            function K() {
                var e = ae && ae.errorData() || {};
                return {
                    offline: pe,
                    checking: me,
                    enabled: _e,
                    anonymous: Se,
                    premium: je,
                    experiments: Te.experiments,
                    show: we,
                    visible: ye,
                    wasMinimized: ke,
                    minimized: Ee,
                    hovered: ve,
                    isFieldEmpty: ge,
                    isFieldHovered: he,
                    fieldWasFocused: xe,
                    isEditorInited: Ce,
                    referralWasClicked: Ie,
                    errors: e
                };
            }
            var X = e.app, Q = e.user, J = e.page, $ = e.connection, Z = e.field, ee = e.type, te = e.actions, ne = (e.disableIntersectionCheck, 
            void 0), re = void 0, ie = void 0, oe = void 0, ae = void 0, se = void 0, le = void 0, ce = {
                visibility: "hidden"
            }, ue = Z.ownerDocument, de = "iframe" == ee, fe = de ? a(Z) : Z, me = !1, pe = !$.online, he = void 0, ge = 0 == (Z.value || Z.textContent || "").trim().length, be = !1, _e = !0, ve = !1, ye = !1, we = !1, Ee = !1, ke = !1, Ce = !1, xe = !1, Te = Q, Se = Q.anonymous, je = Q.premium, Ne = Q.referral, Ie = J.referralWasClicked, Ae = void 0, De = void 0, Pe = void 0, Le = Z, Me = g.pageStyles(ue).getFixesForCurrentDomain(), Re = x.State(J.disabledFields, te.toggleField), Fe = void 0, Oe = f.throttle(function() {
                var e, t = (e = {
                    "true": "freemium"
                }, (0, d["default"])(e, Se, "anonymous"), (0, d["default"])(e, je, "premium"), e), n = t["true"];
                _.call("statsc.ui.increment", "stability:g_button_shown_to." + n);
            }, 2e3), Ge = function(e) {
                pe != !e && (pe = !e, ie && ie.set("minimize", e), q(), ae && ae[pe ? "offline" : "online"](), 
                _e && se[pe ? "enable" : "disable"]());
            }, ze = function(e) {
                if (_e != e) {
                    var t = e && !_e, n = w.isSafari() && t;
                    _e = e, Re.changeFieldState(Z, Le, !e), ie && ie.set("maximize", e), e ? (oe.hide(), 
                    s()) : H(), q(), n && (re.style.display = "none", w.asyncCall(function() {
                        return re.style.display = "";
                    }));
                }
            }, Be = function() {
                _e = !Re.isFieldDisabled(Z), Ee = !_e, !_e && ze(!1), P();
            }, We = function() {
                return re;
            }, He = {
                online: function() {
                    return Ge(!0);
                },
                offline: function() {
                    return Ge(!1);
                },
                enable: function() {
                    return ze(!0);
                },
                disable: function() {
                    return ze(!1);
                },
                remove: U,
                getEl: We,
                getState: K,
                updateState: V,
                getPosState: Y,
                onViewClick: D,
                onChangeState: A,
                show: F,
                hide: O,
                checking: G,
                cancelChecking: B
            };
            return Be(), He;
        }
        var l = e("babel-runtime/core-js/object/assign"), c = r(l), u = e("babel-runtime/helpers/defineProperty"), d = r(u), f = e("lodash"), m = e("react"), p = e("react-dom"), h = e("../dom"), g = e("../sites"), b = e("../editor"), _ = e("../tracking"), v = e("../infinity-checker"), y = e("../elements/error-tooltip"), w = e("../util"), E = e("./pos"), k = e("./path"), C = e("./menu"), x = e("./state"), T = e("./view"), S = {
            textarea_btn: "_9b5ef6-textarea_btn",
            status: "_9b5ef6-status",
            field_hovered: "_9b5ef6-field_hovered",
            btn_text: "_9b5ef6-btn_text",
            not_focused: "_9b5ef6-not_focused",
            errors_100: "_9b5ef6-errors_100",
            anonymous: "_9b5ef6-anonymous",
            show: "_9b5ef6-show",
            errors: "_9b5ef6-errors",
            checking: "_9b5ef6-checking",
            has_errors: "_9b5ef6-has_errors",
            disabled: "_9b5ef6-disabled",
            transform_wrap: "_9b5ef6-transform_wrap",
            offline: "_9b5ef6-offline",
            plus_only: "_9b5ef6-plus_only",
            minimized: "_9b5ef6-minimized",
            hovered: "_9b5ef6-hovered",
            minimize_transition: "_9b5ef6-minimize_transition"
        };
        n.Button = s;
    }, {
        "../dom": 184,
        "../editor": 186,
        "../elements/error-tooltip": 191,
        "../infinity-checker": 219,
        "../sites": 240,
        "../tracking": 255,
        "../util": 259,
        "./menu": 169,
        "./path": 172,
        "./pos": 174,
        "./state": 177,
        "./view": 178,
        "babel-runtime/core-js/object/assign": 18,
        "babel-runtime/helpers/defineProperty": 30,
        lodash: "lodash",
        react: "react",
        "react-dom": "react-dom"
    } ],
    167: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function i(e) {
            function t(e) {
                function t(e, t) {
                    s.call("statsc.ui.increment", "activity:" + t + ".button_created"), w.set(e, u.Button({
                        field: e,
                        app: p,
                        user: b,
                        page: _,
                        connection: g,
                        type: t,
                        actions: v
                    }, y));
                }
                m(e), e.textareas.forEach(function(e) {
                    return t(e, "textarea");
                }), e.contenteditables.forEach(function(e) {
                    return t(e, "contenteditable");
                }), e.iframes.forEach(function(e) {
                    return t(e, "iframe");
                }), e.htmlghosts.forEach(function(e) {
                    return t(e, "htmlghost");
                });
            }
            function n(e) {
                console.log("remove", e), w.get(e) && w.get(e).remove(), w["delete"](e);
            }
            function r() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "on";
                y[e]("add", t), y[e]("remove", n);
            }
            function i(e) {
                o(e.connection.bgNotConnected), p.elements && p.elements.updateState(e), w.forEach(function(t) {
                    return t.updateState(e);
                });
            }
            function o(e) {
                if (e && E) l.timers.start(d), s.call("statsc.ui.increment", "stability:lost_connection_to_bg_page"), 
                s.call("felog.error", "lost_connection_to_bg_page"); else if (!e && !E) {
                    var t = l.timers.stop(d);
                    s.call("statsc.ui.timing", "stability:restore_connection_to_bg_page", t), s.call("felog.info", "restore_connection_to_bg_page", {
                        active_time: t
                    });
                }
                E = !e;
            }
            function f() {
                r("off"), w.forEach(function(e) {
                    return e.remove();
                }), w.clear(), w = null, p.elements && p.elements.clear(), p.elements = null, y.reset(), 
                y.stop(), y = null;
            }
            function m(e) {
                try {
                    console.log("add", e);
                } catch (t) {
                    console.log("fields added");
                }
            }
            var p = e.app, h = e.doc, g = e.connection, b = e.user, _ = e.page, v = e.actions, y = c.PageFields({
                doc: h,
                page: _
            }), w = new a["default"](), E = !0;
            return o(g.bgNotConnected), r("on"), t(y.get()), {
                add: t,
                updateState: i,
                remove: n,
                clear: f
            };
        }
        var o = e("babel-runtime/core-js/map"), a = r(o), s = e("../tracking"), l = e("../timers"), c = e("../page-fields"), u = e("./button"), d = "life_without_bg_connection";
        n.Buttons = i;
    }, {
        "../page-fields": 235,
        "../timers": 251,
        "../tracking": 255,
        "./button": 166,
        "babel-runtime/core-js/map": 17
    } ],
    168: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        var i = e("babel-runtime/helpers/defineProperty"), o = r(i), a = e("babel-runtime/core-js/object/get-prototype-of"), s = r(a), l = e("babel-runtime/helpers/classCallCheck"), c = r(l), u = e("babel-runtime/helpers/createClass"), d = r(u), f = e("babel-runtime/helpers/possibleConstructorReturn"), m = r(f), p = e("babel-runtime/helpers/inherits"), h = r(p), g = e("react"), b = e("react-dom"), _ = e("../../dom"), v = {
            hoverMenu: "_44eb54-hoverMenu",
            opened: "_44eb54-opened",
            btn: "_44eb54-btn",
            line: "_44eb54-line",
            panel: "_44eb54-panel",
            premium: "_44eb54-premium",
            btn_premium: "_44eb54-btn_premium",
            btn_grammarly: "_44eb54-btn_grammarly",
            anonymous: "_44eb54-anonymous",
            panelText: "_44eb54-panelText",
            critical: "_44eb54-critical",
            disabled: "_44eb54-disabled",
            referralArea: "_44eb54-referralArea",
            btn_referral: "_44eb54-btn_referral",
            btn_disable: "_44eb54-btn_disable",
            initial: "_44eb54-initial",
            checking: "_44eb54-checking",
            counter: "_44eb54-counter",
            counter100: "_44eb54-counter100",
            buttonArea: "_44eb54-buttonArea",
            referralText: "_44eb54-referralText",
            tooltip: "_44eb54-tooltip",
            tooltip_grammarly: "_44eb54-tooltip_grammarly",
            tooltip_premium: "_44eb54-tooltip_premium",
            tooltip_disable: "_44eb54-tooltip_disable",
            plus: "_44eb54-plus",
            tooltip_referral: "_44eb54-tooltip_referral",
            referral: "_44eb54-referral",
            tooltip_visible: "_44eb54-tooltip_visible",
            tooltip_hidden: "_44eb54-tooltip_hidden"
        }, y = function(e) {
            function t() {
                (0, c["default"])(this, t);
                var e = (0, m["default"])(this, (t.__proto__ || (0, s["default"])(t)).call(this));
                return e.onMouseEnterHandler = e.onMouseEnterHandler.bind(e), e.onMouseLeaveHandler = e.onMouseLeaveHandler.bind(e), 
                e.onMouseClick = e.onMouseClick.bind(e), e;
            }
            return (0, h["default"])(t, e), (0, d["default"])(t, [ {
                key: "onMouseEnterHandler",
                value: function() {
                    var e = this, t = this.props.data.type.includes("referral"), n = t ? 150 : 1350;
                    this.tooltipTimeout = setTimeout(function() {
                        e.props.data.onTooltip({
                            active: !0,
                            el: b.findDOMNode(e),
                            text: e.props.data.text,
                            cls: t ? "referral" : e.props.data.type
                        });
                    }, n);
                }
            }, {
                key: "onMouseLeaveHandler",
                value: function() {
                    clearTimeout(this.tooltipTimeout), this.props.data.onTooltip({
                        active: !1,
                        text: this.props.data.text,
                        cls: this.props.data.type
                    });
                }
            }, {
                key: "onMouseClick",
                value: function(e) {
                    this.props.data.click && this.props.data.click(e), "disable" == this.props.data.type && this.onMouseLeaveHandler();
                }
            }, {
                key: "isShowInviteFriends",
                value: function(e) {
                    return !e.referralWasClicked;
                }
            }, {
                key: "render",
                value: function() {
                    var e, t = this.props.data, n = _.cs((e = {}, (0, o["default"])(e, v.btn, !0), (0, 
                    o["default"])(e, v["btn_" + t.type], !0), (0, o["default"])(e, v.counter, t.count > 0), 
                    (0, o["default"])(e, v.counter100, t.count > 99), e));
                    return g.createElement("div", {
                        className: v.buttonArea
                    }, t.type.includes("referral") ? g.createElement("div", {
                        className: v.referralArea,
                        onClick: this.onMouseClick,
                        onMouseEnter: this.onMouseEnterHandler,
                        onMouseLeave: this.onMouseLeaveHandler,
                        "data-action": t.actionType,
                        tabIndex: "-1"
                    }, g.createElement("div", {
                        className: n
                    }), this.isShowInviteFriends(t) && g.createElement("span", {
                        className: v.referralText
                    }, "Invite Friends")) : g.createElement("div", {
                        className: n,
                        onClick: this.onMouseClick,
                        onMouseEnter: this.onMouseEnterHandler,
                        onMouseLeave: this.onMouseLeaveHandler,
                        "data-action": t.actionType,
                        tabIndex: "-1"
                    }, t.count > 0 ? t.count : null));
                }
            } ]), t;
        }(g.Component);
        n.MenuBtn = y;
    }, {
        "../../dom": 184,
        "babel-runtime/core-js/object/get-prototype-of": 21,
        "babel-runtime/helpers/classCallCheck": 28,
        "babel-runtime/helpers/createClass": 29,
        "babel-runtime/helpers/defineProperty": 30,
        "babel-runtime/helpers/inherits": 32,
        "babel-runtime/helpers/possibleConstructorReturn": 33,
        react: "react",
        "react-dom": "react-dom"
    } ],
    169: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function i(e) {
            function t(e) {
                function t() {
                    L.showDialog({
                        caller: "button_hover"
                    }), y.fire("correct-btn-clicked"), b.timers.start("open_editor");
                }
                function n() {
                    y.fire("hook-clicked", "button_hover");
                    var e = F, t = e.experiments;
                    return t.inlineCardsPimple || t.referralPremiumPopup ? void new v.PremiumDialog({
                        doc: z,
                        plus: G.plus,
                        editor: L
                    }) : r();
                }
                function r() {
                    var e = f.getUpgradeUrlFromMatches({
                        baseUrl: h.URLS.upgrade,
                        returnUrl: "",
                        appType: "popup",
                        matches: L.getMatches()
                    });
                    g.emitBackground("open-url", e);
                }
                if (!L.isOffline()) {
                    var i = e.target;
                    m.hasClass(i, E.btn_premium) ? G.premium ? t() : n() : m.hasClass(i, E.btn_grammarly) && t(), 
                    setTimeout(A, 200);
                }
            }
            function n() {
                R(), y.fire("referral-clicked", "gButton"), g.emitBackground("open-url", h.URLS.referral), 
                A();
            }
            function r() {
                y.fire("referral-shown", "gButton");
            }
            function i() {
                G.enabled ? (G.enabled = !1, M.disable(), A()) : (M.enable(), G.enabled = !0), y.fire("btn-disable-in-field", G.enabled), 
                x();
            }
            function o(e) {
                G = e, F = e.user, x();
            }
            function s(e) {
                L = e;
            }
            function C(e) {
                var t = p.getAbsRect(P), n = {}, r = !M.getPosState() && G.enabled, i = t.top, o = t.left;
                return e && (o -= e.clientWidth, i -= e.clientHeight / 2), i += r ? J : X, o -= r ? Q : K, 
                !r && O.menuPosLeft && (o = O.menuPosLeft(L, o, G)), (0, l["default"])(n, (0, a["default"])({}, H, "translate(" + o + "px, " + i + "px)")), 
                n;
            }
            function x() {
                var e = T(G, C(), W);
                return Y = u.findDOMNode(e), T(G, C(Y), B);
            }
            function T(e, r, o) {
                return u.render(c.createElement(_.HoverMenuView, {
                    style: r,
                    click: t,
                    disableClick: i,
                    referralClick: n,
                    state: e,
                    opened: V
                }), o);
            }
            function S() {
                m.listen(z.documentElement, "mousemove", N), L && L.on("iframe-mousemove", N);
            }
            function j(e) {
                V && !e || (m.unlisten(z.documentElement, "mousemove", N), L && L.off("iframe-mousemove", N));
            }
            function N(e) {
                var t = m.resolveEl(e.target, k.textarea_btn);
                if (t && t != P) return A();
                if (m.hasClass(P, k.offline)) return A();
                var n = m.resolveEl(e.target, E.hoverMenu);
                return t || n == U ? e.target.classList.contains(k.btn_text) ? A() : void I() : A();
            }
            function I(e) {
                (q && !G.offline && G.fieldWasFocused || e) && (V || (V = !0, $.emit("change-state", !0), 
                x(), G.referral && r()));
            }
            function A() {
                V && (V = !1, $.emit("change-state", !1), x());
            }
            function D() {
                j(), B.parentNode && B.parentNode.removeChild(B), W.parentNode && W.parentNode.removeChild(W);
            }
            var P = e.el, L = e.editor, M = e.btn, R = e.onReferralClick, F = e.user, O = w.pageStyles(z).getFixesForCurrentDomain(), G = {
                critical: 0,
                plus: 0,
                offline: !1,
                referral: e.referral,
                referralWasClicked: e.referralWasClicked,
                enabled: e.enabled,
                initial: e.initial,
                checking: e.checking,
                fieldWasFocused: e.fieldWasFocused
            }, z = P.ownerDocument, B = z.createElement("div"), W = z.createElement("div"), H = m.transformProp(z), U = u.findDOMNode(x()), V = !1, q = !0, Y = void 0, K = -26, X = 11, Q = -13, J = 2;
            m.addClass(B, "gr-top-z-index"), m.addClass(B, "gr-top-zero"), B.setAttribute("tabindex", -1), 
            W.style.cssText = "visibility: hidden;top: -9999px;position: absolute;opacity: 0", 
            z.documentElement.insertBefore(B, z.body), z.documentElement.insertBefore(W, z.body);
            var $ = d({
                show: I,
                hide: A,
                bind: S,
                unbind: j,
                remove: D,
                render: x,
                menuEl: U,
                update: o,
                onclick: t,
                updateEditor: s,
                isOpened: function() {
                    return V;
                },
                isEnabled: function() {
                    return q;
                },
                disable: function() {
                    return q = !1;
                },
                enable: function() {
                    return q = !0;
                },
                getState: function() {
                    return G;
                }
            });
            return $;
        }
        var o = e("babel-runtime/helpers/defineProperty"), a = r(o), s = e("babel-runtime/core-js/object/assign"), l = r(s), c = e("react"), u = e("react-dom"), d = e("emitter"), f = e("grammarly-editor"), m = e("../../dom"), p = e("../../position"), h = e("../../config"), g = e("../../message"), b = e("../../timers"), _ = e("./view"), v = e("../../elements/premium-dialog"), y = e("../../tracking"), w = e("../../sites"), E = {
            hoverMenu: "_44eb54-hoverMenu",
            opened: "_44eb54-opened",
            btn: "_44eb54-btn",
            line: "_44eb54-line",
            panel: "_44eb54-panel",
            premium: "_44eb54-premium",
            btn_premium: "_44eb54-btn_premium",
            btn_grammarly: "_44eb54-btn_grammarly",
            anonymous: "_44eb54-anonymous",
            panelText: "_44eb54-panelText",
            critical: "_44eb54-critical",
            disabled: "_44eb54-disabled",
            referralArea: "_44eb54-referralArea",
            btn_referral: "_44eb54-btn_referral",
            btn_disable: "_44eb54-btn_disable",
            initial: "_44eb54-initial",
            checking: "_44eb54-checking",
            counter: "_44eb54-counter",
            counter100: "_44eb54-counter100",
            buttonArea: "_44eb54-buttonArea",
            referralText: "_44eb54-referralText",
            tooltip: "_44eb54-tooltip",
            tooltip_grammarly: "_44eb54-tooltip_grammarly",
            tooltip_premium: "_44eb54-tooltip_premium",
            tooltip_disable: "_44eb54-tooltip_disable",
            plus: "_44eb54-plus",
            tooltip_referral: "_44eb54-tooltip_referral",
            referral: "_44eb54-referral",
            tooltip_visible: "_44eb54-tooltip_visible",
            tooltip_hidden: "_44eb54-tooltip_hidden"
        }, k = {
            textarea_btn: "_9b5ef6-textarea_btn",
            status: "_9b5ef6-status",
            field_hovered: "_9b5ef6-field_hovered",
            btn_text: "_9b5ef6-btn_text",
            not_focused: "_9b5ef6-not_focused",
            errors_100: "_9b5ef6-errors_100",
            anonymous: "_9b5ef6-anonymous",
            show: "_9b5ef6-show",
            errors: "_9b5ef6-errors",
            checking: "_9b5ef6-checking",
            has_errors: "_9b5ef6-has_errors",
            disabled: "_9b5ef6-disabled",
            transform_wrap: "_9b5ef6-transform_wrap",
            offline: "_9b5ef6-offline",
            plus_only: "_9b5ef6-plus_only",
            minimized: "_9b5ef6-minimized",
            hovered: "_9b5ef6-hovered",
            minimize_transition: "_9b5ef6-minimize_transition"
        };
        n.Menu = i;
    }, {
        "../../config": 180,
        "../../dom": 184,
        "../../elements/premium-dialog": 197,
        "../../message": 233,
        "../../position": 236,
        "../../sites": 240,
        "../../timers": 251,
        "../../tracking": 255,
        "./view": 171,
        "babel-runtime/core-js/object/assign": 18,
        "babel-runtime/helpers/defineProperty": 30,
        emitter: "emitter",
        "grammarly-editor": "grammarly-editor",
        react: "react",
        "react-dom": "react-dom"
    } ],
    170: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        var i = e("babel-runtime/helpers/defineProperty"), o = r(i), a = e("babel-runtime/core-js/object/get-prototype-of"), s = r(a), l = e("babel-runtime/helpers/classCallCheck"), c = r(l), u = e("babel-runtime/helpers/createClass"), d = r(u), f = e("babel-runtime/helpers/possibleConstructorReturn"), m = r(f), p = e("babel-runtime/helpers/inherits"), h = r(p), g = e("react"), b = e("../../dom"), _ = {
            hoverMenu: "_44eb54-hoverMenu",
            opened: "_44eb54-opened",
            btn: "_44eb54-btn",
            line: "_44eb54-line",
            panel: "_44eb54-panel",
            premium: "_44eb54-premium",
            btn_premium: "_44eb54-btn_premium",
            btn_grammarly: "_44eb54-btn_grammarly",
            anonymous: "_44eb54-anonymous",
            panelText: "_44eb54-panelText",
            critical: "_44eb54-critical",
            disabled: "_44eb54-disabled",
            referralArea: "_44eb54-referralArea",
            btn_referral: "_44eb54-btn_referral",
            btn_disable: "_44eb54-btn_disable",
            initial: "_44eb54-initial",
            checking: "_44eb54-checking",
            counter: "_44eb54-counter",
            counter100: "_44eb54-counter100",
            buttonArea: "_44eb54-buttonArea",
            referralText: "_44eb54-referralText",
            tooltip: "_44eb54-tooltip",
            tooltip_grammarly: "_44eb54-tooltip_grammarly",
            tooltip_premium: "_44eb54-tooltip_premium",
            tooltip_disable: "_44eb54-tooltip_disable",
            plus: "_44eb54-plus",
            tooltip_referral: "_44eb54-tooltip_referral",
            referral: "_44eb54-referral",
            tooltip_visible: "_44eb54-tooltip_visible",
            tooltip_hidden: "_44eb54-tooltip_hidden"
        }, v = function(e) {
            function t() {
                return (0, c["default"])(this, t), (0, m["default"])(this, (t.__proto__ || (0, s["default"])(t)).apply(this, arguments));
            }
            return (0, h["default"])(t, e), (0, d["default"])(t, [ {
                key: "render",
                value: function() {
                    var e, t = this.props.data || {}, n = this.props.measure, r = b.cs((e = {}, (0, 
                    o["default"])(e, _.tooltip, !0), (0, o["default"])(e, _.tooltip_visible, t.active && !n), 
                    (0, o["default"])(e, _.tooltip_hidden, !t.active && !n), (0, o["default"])(e, _["tooltip_" + t.cls], !0), 
                    e)), i = void 0;
                    return t.active && !n && (i = {
                        right: 0
                    }), g.createElement("div", {
                        style: i,
                        className: r,
                        refs: "tooltip",
                        dangerouslySetInnerHTML: {
                            __html: t.text
                        }
                    });
                }
            } ]), t;
        }(g.Component);
        n.Tooltip = v;
    }, {
        "../../dom": 184,
        "babel-runtime/core-js/object/get-prototype-of": 21,
        "babel-runtime/helpers/classCallCheck": 28,
        "babel-runtime/helpers/createClass": 29,
        "babel-runtime/helpers/defineProperty": 30,
        "babel-runtime/helpers/inherits": 32,
        "babel-runtime/helpers/possibleConstructorReturn": 33,
        react: "react"
    } ],
    171: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        var i = e("babel-runtime/helpers/defineProperty"), o = r(i), a = e("babel-runtime/core-js/object/get-prototype-of"), s = r(a), l = e("babel-runtime/helpers/classCallCheck"), c = r(l), u = e("babel-runtime/helpers/createClass"), d = r(u), f = e("babel-runtime/helpers/possibleConstructorReturn"), m = r(f), p = e("babel-runtime/helpers/inherits"), h = r(p), g = e("react"), b = e("react-dom"), _ = e("./action"), v = e("./tooltip"), y = e("../../dom"), w = {
            hoverMenu: "_44eb54-hoverMenu",
            opened: "_44eb54-opened",
            btn: "_44eb54-btn",
            line: "_44eb54-line",
            panel: "_44eb54-panel",
            premium: "_44eb54-premium",
            btn_premium: "_44eb54-btn_premium",
            btn_grammarly: "_44eb54-btn_grammarly",
            anonymous: "_44eb54-anonymous",
            panelText: "_44eb54-panelText",
            critical: "_44eb54-critical",
            disabled: "_44eb54-disabled",
            referralArea: "_44eb54-referralArea",
            btn_referral: "_44eb54-btn_referral",
            btn_disable: "_44eb54-btn_disable",
            initial: "_44eb54-initial",
            checking: "_44eb54-checking",
            counter: "_44eb54-counter",
            counter100: "_44eb54-counter100",
            buttonArea: "_44eb54-buttonArea",
            referralText: "_44eb54-referralText",
            tooltip: "_44eb54-tooltip",
            tooltip_grammarly: "_44eb54-tooltip_grammarly",
            tooltip_premium: "_44eb54-tooltip_premium",
            tooltip_disable: "_44eb54-tooltip_disable",
            plus: "_44eb54-plus",
            tooltip_referral: "_44eb54-tooltip_referral",
            referral: "_44eb54-referral",
            tooltip_visible: "_44eb54-tooltip_visible",
            tooltip_hidden: "_44eb54-tooltip_hidden"
        }, E = function(e) {
            function t() {
                (0, c["default"])(this, t);
                var e = (0, m["default"])(this, (t.__proto__ || (0, s["default"])(t)).apply(this, arguments));
                return e.state = {
                    tooltip: {
                        active: !1,
                        text: "",
                        cls: ""
                    }
                }, e.onTooltip = function(t) {
                    var n = b.render(g.createElement(v.Tooltip, {
                        data: t,
                        measure: !0
                    }), e.tooltipMeasure);
                    setTimeout(function() {
                        t.width = b.findDOMNode(n).clientWidth, e.setState({
                            tooltip: t
                        });
                    }, 10);
                }, e;
            }
            return (0, h["default"])(t, e), (0, d["default"])(t, [ {
                key: "componentDidMount",
                value: function() {
                    this.tooltipMeasure = document.createElement("div"), this.tooltipMeasure.style.cssText = "visibility: hidden;top: -9999px;position: absolute;opacity: 0", 
                    document.documentElement.appendChild(this.tooltipMeasure);
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    document.documentElement.removeChild(this.tooltipMeasure);
                }
            }, {
                key: "getTooltipText",
                value: function(e) {
                    return e.enabled ? "Disable in this text field" : "Enable Grammarly here";
                }
            }, {
                key: "render",
                value: function() {
                    var e, t = this.props, n = t.state, r = n.critical, i = n.plus, a = y.cs((e = {}, 
                    (0, o["default"])(e, w.hoverMenu, !0), (0, o["default"])(e, w.initial, n.initial), 
                    (0, o["default"])(e, w.premium, n.premium), (0, o["default"])(e, w.anonymous, n.anonymous), 
                    (0, o["default"])(e, w.checking, n.checking), (0, o["default"])(e, w.disabled, 0 == n.enabled), 
                    (0, o["default"])(e, w.critical, r), (0, o["default"])(e, w.plus, i), (0, o["default"])(e, w.opened, t.opened), 
                    (0, o["default"])(e, w.referral, n.referral), e)), s = n.anonymous ? "Log in to enable personalized<br/>checks and other features" : "Edit in Grammarly", l = n.premium ? "See advanced corrections" : "Upgrade to make advanced corrections", c = this.getTooltipText(n), u = "Invite friends. Get Premium for free.";
                    return g.createElement("div", {
                        className: a,
                        style: t.style
                    }, g.createElement("div", {
                        className: w.panel
                    }, g.createElement(v.Tooltip, {
                        data: this.state.tooltip
                    }), g.createElement(_.MenuBtn, {
                        data: {
                            type: "disable",
                            size: "small",
                            text: c,
                            click: t.disableClick,
                            onTooltip: this.onTooltip
                        }
                    }), n.referral && g.createElement(_.MenuBtn, {
                        data: {
                            type: "referral",
                            size: "small",
                            text: u,
                            click: t.referralClick,
                            onTooltip: this.onTooltip,
                            referralWasClicked: n.referralWasClicked
                        }
                    }), g.createElement("div", {
                        className: w.line
                    }), i ? g.createElement(_.MenuBtn, {
                        data: {
                            type: "premium",
                            size: "small",
                            text: l,
                            count: i,
                            click: t.click,
                            onTooltip: this.onTooltip
                        }
                    }) : null, g.createElement(_.MenuBtn, {
                        data: {
                            type: "grammarly",
                            actionType: "editor",
                            size: "small",
                            text: s,
                            click: t.click,
                            count: r,
                            onTooltip: this.onTooltip
                        }
                    })));
                }
            } ]), t;
        }(g.Component);
        n.HoverMenuView = E;
    }, {
        "../../dom": 184,
        "./action": 168,
        "./tooltip": 170,
        "babel-runtime/core-js/object/get-prototype-of": 21,
        "babel-runtime/helpers/classCallCheck": 28,
        "babel-runtime/helpers/createClass": 29,
        "babel-runtime/helpers/defineProperty": 30,
        "babel-runtime/helpers/inherits": 32,
        "babel-runtime/helpers/possibleConstructorReturn": 33,
        react: "react",
        "react-dom": "react-dom"
    } ],
    172: [ function(e, t, n) {
        "use strict";
        function r(e) {
            function t(e, t) {
                return t.left >= e.left && t.top >= e.top ? "se" : t.left >= e.left && t.top <= e.top ? "ne" : t.left <= e.left && t.top <= e.top ? "nw" : t.left <= e.left && t.top >= e.top ? "sw" : void 0;
            }
            function n(e, t, n, r) {
                var i = r.left + r.width + s, o = r.left - s, a = r.top + r.height + s, l = r.top - s, c = n.left - s, u = n.left + n.width + s, d = n.top - s, f = n.top + n.height + s, m = u > i ? u : i;
                return "se" == e && t.x >= c && t.x <= m && t.y >= d && t.y <= a || ("ne" == e && t.x >= c && t.x <= m && t.y >= l && t.y <= f || ("nw" == e && t.x >= o && t.x <= u && t.y >= l && t.y <= f || "sw" == e && t.x >= o && t.x <= u && t.y >= d && t.y <= a));
            }
            function r(e) {
                var t = e.getBoundingClientRect();
                return {
                    height: t.height,
                    width: t.width,
                    top: t.top,
                    left: t.left
                };
            }
            function i(e) {
                var i = r(o), s = r(a), l = t(i, s);
                return n(l, e, i, s);
            }
            var o = e.editorEl, a = e.btnEl, s = e.padding, l = void 0;
            return l = {
                within: i
            };
        }
        n.BtnPath = r;
    }, {} ],
    173: [ function(e, t, n) {
        "use strict";
        function r(e) {
            function t(e) {
                return e.ghostarea ? e.ghostarea.gh.clone.firstChild : l;
            }
            function n(e) {
                var n = d(t(e)), r = e && e.getText().trim().length;
                if (n && r > 0) return m = r, "minimize";
                var i = m - r > c, o = !m || i || 0 == r;
                return o && "maximize";
            }
            function r(e, t) {
                if (t && e != t) return t;
            }
            function a(e, t) {
                var i = e.minimize, o = e.maximize, a = e.editor, s = t ? "maximize" : "minimize";
                if (i || o) {
                    var c = f.forceMinimize && f.forceMinimize(l);
                    if (c || i && !o) return r(s, "minimize");
                    if (!a || !i && o) return r(s, "maximize");
                    var u = n(a);
                    return r(s, u);
                }
            }
            var s = e.btnEl, l = e.fieldEl, c = 200, u = s.ownerDocument, d = o.Intersect({
                btnEl: s
            }), f = i.pageStyles(u).getFixesForCurrentDomain(), m = void 0;
            return {
                get: a
            };
        }
        var i = e("lib/sites"), o = e("./intersect");
        n.Condition = r;
    }, {
        "./intersect": 175,
        "lib/sites": 240
    } ],
    174: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        var i = e("babel-runtime/helpers/toConsumableArray"), o = r(i), a = e("babel-runtime/core-js/object/assign"), s = r(a), l = e("babel-runtime/helpers/classCallCheck"), c = r(l), u = e("babel-runtime/helpers/createClass"), d = r(u), f = e("lodash"), m = e("emitter"), p = e("lib/window-events"), h = e("lib/util"), g = e("lib/dom"), b = e("./position"), _ = e("./condition"), v = function() {
            function e(t) {
                var n = this, r = t.btnEl, i = t.fieldEl, o = t.sourceEl, a = t.custom, l = t.isTextarea, u = t.initCondition;
                (0, c["default"])(this, e), this.state = {
                    minimize: !1,
                    maximize: !0,
                    editor: null,
                    show: !1
                }, this.max = !0, this.windowEvents = [ {
                    paste: function() {
                        return n.debouncedUpdate();
                    },
                    resize: function() {
                        return n.update();
                    },
                    keyup: function() {
                        g.isFocused(n.fieldEl) && n.debouncedUpdate();
                    }
                }, !0 ], this.checkResize = function() {
                    try {
                        n.position && n.position.resize() && n.debouncedUpdate();
                    } catch (e) {
                        console.error(e), h.cancelInterval(n.checkResize);
                    }
                }, this.debouncedUpdate = f.debounce(function() {
                    return n.update();
                }, 50), this.update = function() {
                    if (n.state.show && n.position && (n.emit("update", {
                        visibility: "hidden"
                    }), n.emit("update", n.position.get(n.max)), n.state.editor)) {
                        var e = n.condition.get(n.state, n.max);
                        "undefined" != typeof e && (n.max = "maximize" == e, n.emit("change-state"), n.update());
                    }
                }, this.remove = function() {
                    n.listeners("off"), n.condition = null, n.position && n.position.remove(), n.position = null;
                }, this.max = u, this.state.minimize = !u, this.state.maximize = u, (0, s["default"])(this, m({
                    fieldEl: i
                })), this.position = b.Position({
                    btnEl: r,
                    sourceEl: o,
                    custom: a,
                    isTextarea: l
                }), this.condition = _.Condition({
                    btnEl: r,
                    fieldEl: i,
                    custom: a
                }), this.listeners();
            }
            return (0, d["default"])(e, [ {
                key: "set",
                value: function(e, t) {
                    this.state[e] = t, this.update();
                }
            }, {
                key: "listeners",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "on";
                    p[e].apply(p, (0, o["default"])(this.windowEvents));
                    var t = "on" == e ? g.on : g.off;
                    t.call(this.fieldEl, "scroll", this.debouncedUpdate);
                    var n = "on" == e ? h.interval : h.cancelInterval;
                    n(this.checkResize, 200);
                }
            } ]), e;
        }();
        n.Pos = v;
    }, {
        "./condition": 173,
        "./position": 176,
        "babel-runtime/core-js/object/assign": 18,
        "babel-runtime/helpers/classCallCheck": 28,
        "babel-runtime/helpers/createClass": 29,
        "babel-runtime/helpers/toConsumableArray": 35,
        emitter: "emitter",
        "lib/dom": 184,
        "lib/util": 259,
        "lib/window-events": 260,
        lodash: "lodash"
    } ],
    175: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function i(e) {
            function t(e, t, n) {
                var r = document.createElement("div");
                r.className = t, r.style.top = e.top + "px", r.style.left = e.left + "px", r.style.height = e.height + "px", 
                r.style.width = e.width + "px", r.style.position = "absolute", r.style.border = "1px dashed red", 
                r.style.zIndex = "1000000", r.style.pointerEvents = "none", n && (r.style.borderColor = n), 
                document.body.appendChild(r);
            }
            function n(e, t) {
                return e.left + e.width > t.left && (e.bottom > t.top && e.bottom < t.bottom || e.top < t.bottom && e.top > t.top);
            }
            function r(e, r) {
                var i = document.body.scrollTop;
                return o && (0, a["default"])(document.querySelectorAll(".gr-evade")).forEach(function(e) {
                    return e.parentElement.removeChild(e);
                }), e.map(function(e) {
                    return {
                        top: e.top + i,
                        bottom: e.bottom + i,
                        left: e.left,
                        width: e.width,
                        height: e.height
                    };
                }).some(function(e) {
                    return o && t(e, "gr-evade"), n(e, r);
                });
            }
            var i = e.btnEl, o = !1, s = 2;
            return function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = i.getBoundingClientRect();
                if (n) {
                    n = {
                        top: n.top + document.body.scrollTop - s + t,
                        bottom: n.bottom + document.body.scrollTop + s + t,
                        left: n.left - s + t,
                        width: n.width,
                        height: n.height
                    };
                    var o = document.createRange();
                    o.selectNodeContents(e);
                    var l = e.clientWidth, c = (0, a["default"])(o.getClientRects()).filter(function(e) {
                        var t = e.width;
                        return t < l;
                    });
                    return r(c, n);
                }
            };
        }
        var o = e("babel-runtime/core-js/array/from"), a = r(o);
        n.Intersect = i;
    }, {
        "babel-runtime/core-js/array/from": 13
    } ],
    176: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function i(e) {
            function t() {
                var e = f.getPos(p), t = e.x != T.x || e.y != T.y;
                if (x.clientWidth != p.clientWidth || x.clientHeight != p.clientHeight || t) return T = e, 
                !0;
            }
            function n() {
                if (!N) {
                    x = (0, u["default"])({
                        offsetHeight: p.offsetHeight,
                        clientWidth: p.clientWidth,
                        clientHeight: p.clientHeight
                    }, m.compStyle(p, "border-bottom-width", "border-right-width", "resize", "padding-top", "padding-bottom", "overflowX", "overflow", "padding-right"), f.getAbsRect(p)), 
                    x.resize = [ "both", "horizontal", "vertical" ].includes(x.resize);
                    var e = f.getAbsRect(c), t = e.left, n = e.top;
                    x.left += S - t, x.top += j - n, _ || "scroll" == x.overflowX || "scroll" == x.overflow || (x.height = Math.max(parseInt(x.height), x.offsetHeight));
                }
            }
            function r(e) {
                if (e) return 0;
                var t = parseInt(x["padding-right"]);
                return t > 0 ? -t / 2 + 2 : -5;
            }
            function i(e, t) {
                var n = e ? w : E;
                return e ? t ? (n - x.height) / 2 : -8 : 0;
            }
            function o() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], t = {
                    visibility: ""
                };
                if (g) return (0, u["default"])(t, I.btnCustomStyles ? I.btnCustomStyles(e, p) : {});
                n();
                var o = !e && x.resize ? -10 : 0, s = x.clientHeight < v, c = i(e, s) + r(e), d = e || s ? 0 : -7, f = e ? w : E, m = I.btnDiff && I.btnDiff(p, e) || [ 0, 0 ], h = (0, 
                l["default"])(m, 2), b = h[0], _ = h[1], y = x.left + x.width - parseInt(x["border-right-width"]) - f + c + b, k = x.top + x.height - parseInt(x["border-bottom-width"]) - f + c + d + _ + o;
                return y == S && k == j ? t : ((0, u["default"])(t, (0, a["default"])({}, C, "translate(" + y + "px, " + k + "px)")), 
                N = !0, S = y, j = k, t);
            }
            function s() {
                m.off.call(c, y, A);
            }
            var c = e.btnEl, p = e.sourceEl, h = e.custom, g = void 0 !== h && h, b = e.isTextarea, _ = void 0 !== b && b, v = 25, y = m.transitionEndEventName(), w = 22, E = 8, k = c.ownerDocument, C = m.transformProp(k), x = void 0, T = f.getPos(p), S = 0, j = 0, N = !1, I = d.pageStyles(k).getFixesForCurrentDomain(), A = function() {
                N = !1, n();
            };
            return m.on.call(c, y, A), n(), {
                get: o,
                resize: t,
                remove: s
            };
        }
        var o = e("babel-runtime/helpers/defineProperty"), a = r(o), s = e("babel-runtime/helpers/slicedToArray"), l = r(s), c = e("babel-runtime/core-js/object/assign"), u = r(c), d = e("lib/sites"), f = e("lib/position"), m = e("lib/dom");
        n.Position = i;
    }, {
        "babel-runtime/core-js/object/assign": 18,
        "babel-runtime/helpers/defineProperty": 30,
        "babel-runtime/helpers/slicedToArray": 34,
        "lib/dom": 184,
        "lib/position": 236,
        "lib/sites": 240
    } ],
    177: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function i() {
            function e(e, n) {
                var r = s.pageStyles(e.ownerDocument).getFixesForCurrentDomain(), i = r.fieldStateForDomain && r.fieldStateForDomain(e);
                if (i) return i;
                var o = n && "IFRAME" == n.tagName, a = o ? n : e, l = [ a.getAttribute("id") || "", a.getAttribute("name") || "" ].filter(Boolean);
                return l.length || l.push(t(a)), o && l.push(n.ownerDocument.location.host || ""), 
                l.join(":");
            }
            function t(e, t) {
                return e && e.id && !t ? '//*[@id="' + e.id + '"]' : n(e);
            }
            function n(e) {
                for (var t = []; e && 1 == e.nodeType; e = e.parentNode) {
                    for (var n = 0, r = e.previousSibling; r; r = r.previousSibling) r.nodeType != Node.DOCUMENT_TYPE_NODE && r.nodeName == e.nodeName && ++n;
                    var i = e.nodeName.toLowerCase(), o = n ? "[" + (n + 1) + "]" : "";
                    t.splice(0, 0, i + o);
                }
                return t.length ? "/" + t.join("/") : null;
            }
            function r(t, n) {
                var r = e(t, n);
                return o[r];
            }
            function i(t, n, r) {
                var i = e(t, n);
                o[i] != r && l((0, a["default"])({}, i, r));
            }
            var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, l = arguments[1];
            return {
                getSelector: e,
                isFieldDisabled: r,
                changeFieldState: i
            };
        }
        var o = e("babel-runtime/helpers/defineProperty"), a = r(o), s = e("../sites");
        n.State = i;
    }, {
        "../sites": 240,
        "babel-runtime/helpers/defineProperty": 30
    } ],
    178: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        var i = e("babel-runtime/helpers/defineProperty"), o = r(i), a = e("babel-runtime/core-js/object/get-prototype-of"), s = r(a), l = e("babel-runtime/helpers/classCallCheck"), c = r(l), u = e("babel-runtime/helpers/createClass"), d = r(u), f = e("babel-runtime/helpers/possibleConstructorReturn"), m = r(f), p = e("babel-runtime/helpers/inherits"), h = r(p), g = e("lodash"), b = e("react"), _ = e("../dom"), v = e("../util"), y = {
            textarea_btn: "_9b5ef6-textarea_btn",
            status: "_9b5ef6-status",
            field_hovered: "_9b5ef6-field_hovered",
            btn_text: "_9b5ef6-btn_text",
            not_focused: "_9b5ef6-not_focused",
            errors_100: "_9b5ef6-errors_100",
            anonymous: "_9b5ef6-anonymous",
            show: "_9b5ef6-show",
            errors: "_9b5ef6-errors",
            checking: "_9b5ef6-checking",
            has_errors: "_9b5ef6-has_errors",
            disabled: "_9b5ef6-disabled",
            transform_wrap: "_9b5ef6-transform_wrap",
            offline: "_9b5ef6-offline",
            plus_only: "_9b5ef6-plus_only",
            minimized: "_9b5ef6-minimized",
            hovered: "_9b5ef6-hovered",
            minimize_transition: "_9b5ef6-minimize_transition"
        }, w = function(e) {
            function t() {
                return (0, c["default"])(this, t), (0, m["default"])(this, (t.__proto__ || (0, s["default"])(t)).apply(this, arguments));
            }
            return (0, h["default"])(t, e), (0, d["default"])(t, [ {
                key: "render",
                value: function() {
                    var e, t = this.props.state, n = t.anonymous, r = t.premium, i = t.experiments || {}, a = this.props.onViewClick, s = t.errors.critical, l = s > 0 && !t.checking, c = !t.enabled, u = t.offline, d = !c && !u && t.isFieldEmpty && n, f = g([ y.textarea_btn ]).push(_.cs((e = {}, 
                    (0, o["default"])(e, y.show, t.show), (0, o["default"])(e, y.minimized, t.minimized), 
                    (0, o["default"])(e, y.minimize_transition, t.wasMinimized), (0, o["default"])(e, y.errors, l), 
                    (0, o["default"])(e, y.has_errors, s > 0), (0, o["default"])(e, y.errors_100, s > 99), 
                    (0, o["default"])(e, y.offline, u), (0, o["default"])(e, y.checking, t.checking && !u && !c), 
                    (0, o["default"])(e, y.disabled, c), (0, o["default"])(e, y.plus_only, (i.inlineCardsPimple || r && !l) && t.errors.plus > 0), 
                    (0, o["default"])(e, y.anonymous, n), (0, o["default"])(e, y.hovered, t.hovered), 
                    (0, o["default"])(e, y.field_hovered, t.isFieldHovered), (0, o["default"])(e, y.not_focused, !t.fieldWasFocused), 
                    e))).join(" "), m = _.camelizeAttrs(this.props.inlineStyle), p = l && s ? s : " ", h = "Found " + s + " " + v.declension(s, [ "error", "errors" ]) + " in text", w = "Not signed in";
                    return s || (h = "Protected by Grammarly"), b.createElement("div", {
                        onClick: a,
                        style: m,
                        className: f
                    }, b.createElement("div", {
                        className: y.transform_wrap
                    }, b.createElement("div", {
                        title: h,
                        className: y.status
                    }, p)), d ? b.createElement("span", {
                        className: y.btn_text
                    }, w) : null);
                }
            } ]), t;
        }(b.Component);
        n.ButtonComponent = w;
    }, {
        "../dom": 184,
        "../util": 259,
        "babel-runtime/core-js/object/get-prototype-of": 21,
        "babel-runtime/helpers/classCallCheck": 28,
        "babel-runtime/helpers/createClass": 29,
        "babel-runtime/helpers/defineProperty": 30,
        "babel-runtime/helpers/inherits": 32,
        "babel-runtime/helpers/possibleConstructorReturn": 33,
        lodash: "lodash",
        react: "react"
    } ],
    179: [ function(e, t, n) {
        "use strict";
        var r = e("dompurify");
        n.ClientScript = function() {
            function e(e) {
                function n(e) {
                    function t(e) {
                        if (e.parentNode) if (e.childNodes.length > 1) {
                            for (var t = document.createDocumentFragment(); e.childNodes.length > 0; ) {
                                var n = e.childNodes[0];
                                t.appendChild(n);
                            }
                            e.parentNode.replaceChild(t, e);
                        } else e.firstChild ? e.parentNode.replaceChild(e.firstChild, e) : e.parentNode.removeChild(e);
                    }
                    function n(e) {
                        if (e) try {
                            for (var n = e.querySelectorAll(".gr_"), r = n.length, i = 0; i < r; i++) t(n[i]);
                        } catch (o) {}
                    }
                    function r(e) {
                        try {
                            Object.defineProperty(e, "innerHTML", {
                                get: function() {
                                    try {
                                        var t = e.ownerDocument.createRange();
                                        t.selectNodeContents(e);
                                        var r = t.cloneContents(), i = document.createElement("div");
                                        return i.appendChild(r), n(i), i.innerHTML;
                                    } catch (o) {}
                                },
                                set: function(t) {
                                    try {
                                        var n = e.ownerDocument.createRange();
                                        n.selectNodeContents(e), n.deleteContents();
                                        var r = n.createContextualFragment(t);
                                        e.appendChild(r);
                                    } catch (i) {}
                                }
                            });
                        } catch (t) {}
                    }
                    if (e) {
                        var i = e.cloneNode;
                        e.cloneNode = function(t) {
                            var o = i.call(e, t);
                            if (e.classList.contains("mceContentBody")) o.innerHTML = e.innerHTML, n(o); else try {
                                r(o);
                            } catch (a) {}
                            return o;
                        }, r(e);
                    }
                }
                if ("TEXTAREA" != e.tagName) try {
                    var i = e.ownerDocument, o = r.sanitize(e.getAttribute("data-gramm_id")), a = "document.querySelector(\"[data-gramm_id='" + o + "']\")";
                    t(i, n, [ a ]);
                } catch (s) {
                    console.log("error rewrite " + s);
                }
            }
            function t(e, t, n) {
                var r = e.createElement("script");
                n = n || [], Array.isArray(t) || (t = [ t ]);
                var i = t.join(" "), o = (t[t.length - 1].name, n.join(","));
                r.innerHTML = "(function(){(" + i + ")(" + o + ") })()", e.documentElement.appendChild(r);
            }
            return {
                rewriteInnerHTML: e,
                addScript: t
            };
        }();
    }, {
        dompurify: "dompurify"
    } ],
    180: [ function(e, t, n) {
        (function(t) {
            "use strict";
            function r(e) {
                return e && e.__esModule ? e : {
                    "default": e
                };
            }
            function i() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, u["default"])(n.URLS, e);
            }
            function o() {
                if (d) return d.config.modules.parameters.version;
            }
            function a() {
                if (d) return d.config.modules.parameters.updateTime;
            }
            function s() {
                if (d) return d.config.uuid;
            }
            function l(e, t, n) {
                var r = v[e][n] || [];
                return r && t && t.some(function(e) {
                    return r.includes(e);
                });
            }
            var c = e("babel-runtime/core-js/object/assign"), u = r(c), d = "undefined" != typeof window ? window.forge : "undefined" != typeof t ? t.forge : null, f = e("spark-md5");
            n.FELOG = {
                key: "b37252e300204b00ad697fe1d3b979e1",
                project: "15",
                pingTimeout: 6e5
            }, n.GNAR = {
                url: "https://gnar.grammarly.com",
                domain: ".grammarly.com"
            };
            var m = "c10dd64c87f70ef5563a63c368797e8c";
            n.MIXPANEL = {
                qaKey: "7a5c95b5cba1b225d00cc3ba1c410c78",
                key: m,
                cookie: "mp_" + m + "_mixpanel"
            }, n.STATSC = {
                URL: "https://stats-public.grammarly.io/",
                PREFIX: "grammarly.ui"
            }, n.GRAMMARLY_DOMAIN = "grammarly.com";
            var p = "https://www." + n.GRAMMARLY_DOMAIN;
            n.DAPI = "https://data." + n.GRAMMARLY_DOMAIN;
            var h = "https://app." + n.GRAMMARLY_DOMAIN, g = "https://auth." + n.GRAMMARLY_DOMAIN + "/v3", b = g + "/user", _ = p + "/after_install_page";
            n.URLS = {
                app: h,
                appPersonalDictionary: h + "/profile/dictionary",
                capi: "wss://capi." + n.GRAMMARLY_DOMAIN + "/freews",
                dapiMimic: n.DAPI + "/api/mimic",
                dapiProps: n.DAPI + "/api/props",
                editorDictionary: h + "/profile/dictionary",
                dictionary: "https://capi." + n.GRAMMARLY_DOMAIN + "/api/defs",
                docs: h + "/docs",
                docsApi: "https://dox." + n.GRAMMARLY_DOMAIN + "/documents",
                authSettings: b + "/settings",
                authCreatePage: g + "/redirect-anonymous?location=" + _,
                userOrAnonymous: b + "/oranonymous",
                authSignin: g + "/login",
                authSignup: g + "/signup",
                signin: p + "/signin",
                signup: p + "/signup",
                resetPassword: p + "/resetpassword",
                raven: "felog.grammarly.io",
                referral: p + "/referral?page=extension",
                welcomeC: p + "/extension-success",
                upgrade: p + "/upgrade",
                uninstall: p + "/extension-uninstall",
                terms: p + "/terms",
                policy: p + "/privacy-policy",
                pageConfigUrl: "https://d3cv4a9a9wh0bt.cloudfront.net/browserplugin/config.json"
            };
            n.updateUrls = i, n.getVersion = o, n.getUpdateTime = a, n.getUuid = s, n.news = [ "The G logo gets out of the way when you're typing", "Switch between American and British English", "Quickly disable checking in certain types of text fields", "A fully redesigned and improved interface" ], 
            n.newsId = n.news.length && f.hash(n.news.join("\n")), n.userFields = [ "id", "email", "firstName", "anonymous", "type", "subscriptionFree", "experiments", "premium", "settings", "registrationDate", "mimic", "groups", "extensionInstallDate", "fixed_errors", "referral" ], 
            n.userFields.push("token"), n.FEATURES = {
                EXAMPLE_FEATURE: "example_feature"
            };
            var v = {
                example_feature: {
                    Free: [],
                    Premium: []
                }
            };
            n.isFeatureDisabled = l, n.isTest = !d, n.nextVerClass = "gr_ver_2", n.restrictedAttrs = [ "data-gramm_editor", "data-gramm", "data-gramm_id", "gramm_editor", "readonly", "pm-container", "data-synchrony", [ "class", "redactor-editor" ], [ "class", "redactor_box" ], [ "aria-label", "Search Facebook" ] ], 
            n.restrictedParentAttrs = "[data-reactid]", n.externalEvents = [ "changed-user", "changed-plan", "changed-dialect", "cleanup", "editor-fix" ], 
            n.development = "127.0.0.1:3117" == document.location.host;
        }).call(this, "undefined" != typeof window ? window : {});
    }, {
        "babel-runtime/core-js/object/assign": 18,
        "spark-md5": "spark-md5"
    } ],
    181: [ function(e, t, n) {
        "use strict";
        var r = e("./util"), i = void 0, o = [ "info", "warn", "error", "time", "timeEnd", "debug" ];
        i = r.isBgOrPopup() ? window.console : window.gdebug = function() {
            var e = console;
            return function(t) {
                var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                t === !1 ? (window.console = {}, window.console.log = r._f, o.forEach(function(t) {
                    window.console[t] = n ? r._f : e[t];
                })) : window.console = e;
            };
        }(), n.GlobalDebug = i;
    }, {
        "./util": 259
    } ],
    182: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function i() {
            function e(e) {
                I.innerHTML = b.sanitize(e);
                var t = I.querySelector("span.qualifier");
                return t ? (t.innerHTML = t.innerHTML.replace("(", "").replace(")", ""), N && (t.className = k.qualifier), 
                I.innerHTML) : e;
            }
            function t(e) {
                return e.replace(/&lt;(sup|sub)&gt;(.*?)&lt;(\/sup|\/sub)&gt;/, "<$1>$2<$3>").replace(/&amp;(?=\w{1,8};)/, "&");
            }
            function r(n, r) {
                var o = {
                    ownerDocument: E,
                    getBoundingClientRect: function() {
                        return r.pos;
                    },
                    getClientRects: function() {
                        return [ r.pos ];
                    }
                };
                if (M = n, M.defs && M.defs.length) {
                    var a = m.getAbsRect(o);
                    M.title = r.el.toString(), M.defs = M.defs.splice(0, 3).map(e).map(t), P = i(!1), 
                    L = g.findDOMNode(P.component), R = m.posToRect(L, a), i();
                } else D.enable(), D.show({
                    posEl: r.el,
                    text: "No definition found"
                });
                _.on(F, !0), v.timers.start(A), y.call("statsc.ui.increment", "activity:defs.open");
            }
            function i() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                return d.renderReactWithParent(h.createElement(n.DictionaryCard, {
                    inlineCardsExperiment: N,
                    pos: R,
                    data: M,
                    visible: e,
                    className: S
                }), E.documentElement, A, "grammarly-card");
            }
            function o() {
                P && P.remove(), _.off(F, !0), O.emit("hide"), D.disable(), D.hide(), P = null, 
                y.call("statsc.ui.timing", "activity:defs.close", v.timers.stop(A));
            }
            function a(e) {
                27 == f.keyCode(e) && o();
            }
            function s(e) {
                if ("dictionary-card" !== document.body.className) {
                    var t = d.inEl(e.target, L);
                    (!t || t && d.hasClass(e.target, x("btn-close"))) && o();
                }
            }
            var l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, c = l.doc, E = void 0 === c ? document : c, T = l.domCls, S = void 0 === T ? "" : T, j = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, N = j.experiments && (j.experiments.inlineCards || j.experiments.inlineCardsPimple);
            C = N ? k.card : C, x = function(e) {
                return N ? k[e] : C + "_" + e;
            };
            var I = E.createElement("div"), A = (0, u["default"])("DictionaryCard"), D = w.Tooltip({
                cls: d.cs("gr-notfound-tooltip", N && k.gr__tooltip_empty),
                enabled: !1,
                doc: E
            }), P = void 0, L = void 0, M = void 0, R = void 0, F = {
                click: s,
                keydown: a,
                scroll: o,
                resize: o
            }, O = p({
                show: r,
                hide: o,
                unescapeSuperscript: t
            });
            return O;
        }
        var o = e("babel-runtime/helpers/typeof"), a = r(o), s = e("babel-runtime/helpers/defineProperty"), l = r(s), c = e("babel-runtime/core-js/symbol"), u = r(c), d = e("./dom"), f = e("./util"), m = e("./position"), p = e("emitter"), h = e("react"), g = e("react-dom"), b = e("dompurify"), _ = e("./window-events"), v = e("./timers"), y = e("./tracking"), w = e("./elements/tooltip"), E = e("./inline-cards/icons"), k = {
            container: "_3f5535-container",
            flip: "_3f5535-flip",
            flipSyn: "_3f5535-flipSyn",
            card: "_3f5535-card",
            bigTitle: "_3f5535-bigTitle",
            unknownWordTitle: "_3f5535-unknownWordTitle",
            btnDictLabelWithIcon: "_3f5535-btnDictLabelWithIcon",
            explanation: "_3f5535-explanation",
            replacement: "_3f5535-replacement",
            maxWidthReached: "_3f5535-maxWidthReached",
            item: "_3f5535-item",
            logoIcon: "_3f5535-logoIcon",
            ignoreIcon: "_3f5535-ignoreIcon",
            undoIcon: "_3f5535-undoIcon",
            dictionaryIcon: "_3f5535-dictionaryIcon",
            wikiIcon: "_3f5535-wikiIcon",
            footer: "_3f5535-footer",
            footerButton: "_3f5535-footerButton",
            btnIgnore: "_3f5535-btnIgnore",
            icon: "_3f5535-icon",
            btnLogo: "_3f5535-btnLogo",
            btnPersonalize: "_3f5535-btnPersonalize",
            personalizeMessage: "_3f5535-personalizeMessage",
            attn: "_3f5535-attn",
            cardAddedToDict: "_3f5535-cardAddedToDict",
            addedToDictTitle: "_3f5535-addedToDictTitle",
            dictionaryDescription: "_3f5535-dictionaryDescription",
            undo: "_3f5535-undo",
            dictLink: "_3f5535-dictLink",
            dictionaryAddedIcon: "_3f5535-dictionaryAddedIcon",
            synTitle: "_3f5535-synTitle",
            synList: "_3f5535-synList",
            synListSingle: "_3f5535-synListSingle",
            synListTitle: "_3f5535-synListTitle",
            synListNumber: "_3f5535-synListNumber",
            synSubitems: "_3f5535-synSubitems",
            synItem: "_3f5535-synItem",
            dict: "_3f5535-dict",
            dictContent: "_3f5535-dictContent",
            dictItemCounter: "_3f5535-dictItemCounter",
            dictItem: "_3f5535-dictItem",
            qualifier: "_3f5535-qualifier",
            dictFooterItem: "_3f5535-dictFooterItem",
            wiki: "_3f5535-wiki",
            gr__tooltip_empty: "gr__tooltip_empty",
            gr__tooltip: "gr__tooltip",
            "gr-notfound-tooltip": "gr-notfound-tooltip",
            "gr__tooltip-content": "gr__tooltip-content",
            "gr__tooltip-logo": "gr__tooltip-logo",
            gr__flipped: "gr__flipped"
        }, C = "gr-dictionary-card", x = function(e) {
            return C + "_" + e;
        };
        n.DictionaryCard = h.createClass({
            displayName: "DictionaryCard",
            getDefaultProps: function() {
                return {
                    inlineCardsExperiment: !1,
                    pos: {
                        rect: {
                            top: 0,
                            left: 0,
                            width: 0
                        },
                        sourceRect: {
                            width: 0
                        },
                        delta: {
                            right: 0
                        },
                        className: "",
                        visible: !1
                    }
                };
            },
            getTriangleMargin: function() {
                var e = this.props.pos.sourceRect.width / 2;
                return this.props.pos.delta.right > 0 ? e : -this.props.pos.delta.right + e;
            },
            renderContent: function() {
                var e = this.props.data;
                return e.defs.map(function(t, n) {
                    var r, i = t.replace(/^([:,]\s)/, "");
                    i = i[0].toUpperCase() + i.substring(1, i.length);
                    var o = d.cs((r = {}, (0, l["default"])(r, x("item-single"), 1 == e.defs.length), 
                    (0, l["default"])(r, x("item"), !0), r));
                    return h.createElement("div", {
                        key: n,
                        className: o,
                        dangerouslySetInnerHTML: {
                            __html: b.sanitize(i)
                        }
                    });
                });
            },
            renderFooterLink: function() {
                var e = this.props.data;
                if (e.url && "wiki" === e.origin) {
                    var t = function() {
                        var t = "More on Wikipedia";
                        return {
                            v: h.createElement("a", {
                                className: x("link"),
                                href: encodeURI(e.url),
                                onClick: function() {
                                    return y.call("felog.info", "dictionary_goto", {
                                        type: t
                                    });
                                },
                                target: "_blank"
                            }, t)
                        };
                    }();
                    if ("object" === ("undefined" == typeof t ? "undefined" : (0, a["default"])(t))) return t.v;
                }
            },
            render: function() {
                return this.props.inlineCardsExperiment ? this.renderNew() : this.renderOld();
            },
            renderOld: function() {
                var e, t = {}, n = this.props.pos, r = d.cs((e = {}, (0, l["default"])(e, C, !0), 
                (0, l["default"])(e, x("empty"), 0 == this.props.data.defs.length), (0, l["default"])(e, x("flip"), n.rect.flip), 
                (0, l["default"])(e, this.props.className, this.props.className), e)), i = {
                    marginLeft: this.getTriangleMargin()
                };
                return t.top = n.rect.top, t.left = n.rect.left, t.visibility = this.props.visible ? "" : "hidden", 
                h.createElement("div", {
                    tabIndex: "-1",
                    style: t,
                    className: r
                }, h.createElement("span", {
                    style: i,
                    className: x("triangle")
                }), h.createElement("div", {
                    className: x("title")
                }, this.props.data.title), h.createElement("div", {
                    className: x("content")
                }, this.renderContent()), h.createElement("div", {
                    className: x("footer")
                }, this.renderFooterLink(), h.createElement("div", {
                    className: x("btn-close")
                }, "Close")));
            },
            renderNew: function() {
                var e = {}, t = this.props.pos;
                e.top = t.rect.top, e.left = t.rect.left, e.visibility = this.props.visible ? "" : "hidden";
                var n = this.props.data;
                return h.createElement("div", {
                    className: k.container,
                    style: e
                }, h.createElement("div", {
                    tabIndex: "-1",
                    className: d.cs(k.card, k.dict, t.rect.flip && k.flip)
                }, h.createElement("div", {
                    className: k.dictContent
                }, n.defs.map(function(e, t) {
                    var r = e.replace(/^([:,]\s)/, "");
                    return r = r[0].toUpperCase() + r.substring(1, r.length), h.createElement("div", {
                        key: t,
                        className: d.cs(1 == n.defs.length ? k.dictSingle : k.dictItem)
                    }, n.defs.length > 1 && h.createElement("span", {
                        className: k.dictItemCounter
                    }, t + 1, ". "), h.createElement("span", {
                        dangerouslySetInnerHTML: {
                            __html: b.sanitize(r)
                        }
                    }));
                })), h.createElement("div", {
                    className: k.footer
                }, h.createElement("div", {
                    className: d.cs(k.item, k.wiki)
                }, n.url && "wiki" === n.origin && h.createElement("a", {
                    href: encodeURI(n.url),
                    onClick: function() {
                        return y.call("felog.info", "dictionary_goto", {
                            type: lbl
                        });
                    },
                    target: "_blank"
                }, h.createElement(E.WikiIcon, {
                    className: d.cs(k.icon, k.wikiIcon)
                }), " More on Wikipedia")), h.createElement("div", {
                    className: d.cs(k.item, k.dictFooterItem)
                }, h.createElement(E.LogoIcon, {
                    className: d.cs(k.icon, k.logoIcon)
                }), " Definitions by Grammarly"))));
            }
        }), i.component = n.DictionaryCard, n.Card = i;
    }, {
        "./dom": 184,
        "./elements/tooltip": 209,
        "./inline-cards/icons": 220,
        "./position": 236,
        "./timers": 251,
        "./tracking": 255,
        "./util": 259,
        "./window-events": 260,
        "babel-runtime/core-js/symbol": 26,
        "babel-runtime/helpers/defineProperty": 30,
        "babel-runtime/helpers/typeof": 36,
        dompurify: "dompurify",
        emitter: "emitter",
        react: "react",
        "react-dom": "react-dom"
    } ],
    183: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function i(e, t) {
            function n() {
                c.release(), c = null, u = null, s = null;
            }
            function r(e) {
                return d(this, void 0, void 0, a["default"].mark(function t() {
                    var n, r, c;
                    return a["default"].wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (n = e.el.startContainer ? e.el.startContainer.parentNode : e.el, r = g.matchesSelector(n, ".gr-grammar-card, .gr-grammar-card *, .gr-dictionary-card, .gr-dictionary-card *"), 
                            !r || o) {
                                t.next = 3;
                                break;
                            }
                            return t.abrupt("return");

                          case 3:
                            return y = "gr-selection-anim-dict " + b.nextVerClass, v.selectionAnimator.animate(e.el, i, y), 
                            s = e, c = {}, t.prev = 7, t.next = 10, p.fetch(b.URLS.dictionary, {
                                data: (0, l["default"])({}, e.data)
                            });

                          case 10:
                            if (c = t.sent, s == e) {
                                t.next = 13;
                                break;
                            }
                            return t.abrupt("return");

                          case 13:
                            t.next = 18;
                            break;

                          case 15:
                            t.prev = 15, t.t0 = t["catch"](7), m.call("felog.warn", "fetch_definitions_fail", {
                                error: t.t0
                            });

                          case 18:
                            v.selectionAnimator.complete(), u.show(c, e), r && v.selectionAnimator.remove();

                          case 21:
                          case "end":
                            return t.stop();
                        }
                    }, t, this, [ [ 7, 15 ] ]);
                }));
            }
            var i = e.doc, o = e.cardInspection, s = void 0, c = h.Selection(i), u = _.Card({
                doc: i
            }, t), y = void 0;
            return c.on("select", r), c.on("unselect", v.selectionAnimator.remove), u.on("hide", v.selectionAnimator.remove), 
            f({
                clear: n
            });
        }
        var o = e("babel-runtime/regenerator"), a = r(o), s = e("babel-runtime/core-js/object/assign"), l = r(s), c = e("babel-runtime/core-js/promise"), u = r(c), d = function(e, t, n, r) {
            return new (n || (n = u["default"]))(function(i, o) {
                function a(e) {
                    try {
                        l(r.next(e));
                    } catch (t) {
                        o(t);
                    }
                }
                function s(e) {
                    try {
                        l(r["throw"](e));
                    } catch (t) {
                        o(t);
                    }
                }
                function l(e) {
                    e.done ? i(e.value) : new n(function(t) {
                        t(e.value);
                    }).then(a, s);
                }
                l((r = r.apply(e, t)).next());
            });
        }, f = e("emitter"), m = e("./tracking"), p = e("./request"), h = e("./selection"), g = e("./dom"), b = e("./config"), _ = e("./dictionary-card"), v = e("./selection-animator");
        n.Dictionary = i;
    }, {
        "./config": 180,
        "./dictionary-card": 182,
        "./dom": 184,
        "./request": 237,
        "./selection": 239,
        "./selection-animator": 238,
        "./tracking": 255,
        "babel-runtime/core-js/object/assign": 18,
        "babel-runtime/core-js/promise": 25,
        "babel-runtime/regenerator": 155,
        emitter: "emitter"
    } ],
    184: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function i(e, t) {
            var n = (t || document).createElement("div");
            return n.innerHTML = e.trim(), n.firstElementChild;
        }
        function o(e, t, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "div", i = t[n] || {};
            t[n] = i, i.el || (i.el = t.ownerDocument.createElement(r), t.appendChild(i.el));
            var o = de.render(e, i.el);
            return i.remove || (i.remove = function() {
                delete t[n], t.removeChild(i.el), de.unmountComponentAtNode(i.el);
            }), {
                component: o,
                remove: i.remove,
                el: i.el
            };
        }
        function a(e, t) {
            for (var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3, r = 0; e.parentNode && r < n; ) {
                if ("string" != typeof t && t == e) return !0;
                if (e.id == t || e == t) return !0;
                e = e.parentNode;
            }
            return !1;
        }
        function s(e, t) {
            return !(!e || void 0 == e.className) && e.classList.contains(t);
        }
        function l(e, t) {
            if (e && e.classList) return e.classList.remove(t);
        }
        function c(e, t) {
            if (e) {
                if (t.indexOf(" ") == -1) return e.classList.add(t);
                t = t.split(" ");
                for (var n = 0; n < t.length; n++) e.classList.add(t[n]);
            }
        }
        function u(e, t, n) {
            t ? c(e, n) : l(e, n);
        }
        function d(e, t) {
            for (;e = e.parentNode; ) if (p(e, t)) return e;
            return !1;
        }
        function f(e) {
            for (;e = e.parentNode; ) if (m(e)) return e;
            return !1;
        }
        function m(e) {
            return "true" == e.contentEditable || "plaintext-only" == e.contentEditable;
        }
        function p(e, t) {
            return !!e && (e.matches ? e.matches(t) : e.matchesSelector ? e.matchesSelector(t) : e.webkitMatchesSelector ? e.webkitMatchesSelector(t) : e.mozMatchesSelector ? e.mozMatchesSelector(t) : window.$ && window.$.is ? window.$(e).is(t) : void 0);
        }
        function h(e) {
            return document.activeElement && "IFRAME" == document.activeElement.tagName ? e === e.ownerDocument.activeElement : document.activeElement && "BODY" == document.activeElement.tagName ? e === document.activeElement : e === document.activeElement;
        }
        function g(e, t, n, r) {
            var i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            if (e) {
                if (ue.isObject(t)) return ue.each(t, function(t, n) {
                    g(e, n, t, r);
                });
                var o = r ? "removeEventListener" : "addEventListener", a = e[me] || [];
                return e[me] = a, r ? e[me] = a.filter(function(e) {
                    return !(e.event == t && e.cb == n);
                }) : a.push({
                    event: t,
                    cb: n
                }), e[o](t, n, i), {
                    el: e,
                    event: t,
                    cb: n,
                    bubble: i
                };
            }
        }
        function b(e, t, n, r) {
            return !t && e[me] ? e[me].each(function(t) {
                return b(e, t.event, t.cb, t.bubble);
            }) : void g(e, t, n, !0, r);
        }
        function _() {
            for (var e = this, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            return this.addEventListener.apply(this, n), {
                off: function() {
                    return v.apply(e, n);
                }
            };
        }
        function v() {
            this.removeEventListener.apply(this, arguments);
        }
        function y(e, t) {
            var n = this, r = function i(r) {
                t(r), v.call(n, e, i);
            };
            _.call(this, e, r);
        }
        function w(e, t) {
            var n = document.createEvent("CustomEvent");
            n.initCustomEvent(e, !0, !0, t), this.dispatchEvent(n);
        }
        function E(e) {
            var t = getComputedStyle(e, null), n = "none" != t.getPropertyValue("display") && "hidden" != t.getPropertyValue("visibility") && e.clientHeight > 0;
            return n;
        }
        function k() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return t.reduce(function(e, t) {
                return e.concat(ue.isObject(t) ? (0, ce["default"])(t).filter(function(e) {
                    return t[e];
                }) : t);
            }, []).filter(function(e) {
                return Boolean(e);
            }).join(" ");
        }
        function C(e, t) {
            return "number" != typeof t || pe[S(e)] ? t : t + "px";
        }
        function x(e) {
            return e.replace(/-+(.)?/g, function(e, t) {
                return t ? t.toUpperCase() : "";
            });
        }
        function T(e) {
            return ue.transform(e, function(e, t, n) {
                return e[x(n)] = t;
            });
        }
        function S(e) {
            return e.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase();
        }
        function j(e, t, n) {
            if (arguments.length < 3) {
                var r = function() {
                    var n = e;
                    if (!n) return {
                        v: void 0
                    };
                    var r = getComputedStyle(n, "");
                    if ("string" == typeof t) return {
                        v: n.style[x(t)] || r.getPropertyValue(t)
                    };
                    if (ue.isArray(t)) {
                        var i = function() {
                            var e = {};
                            return ue.each(t, function(t, i) {
                                e[x(t)] = n.style[x(t)] || r.getPropertyValue(t);
                            }), {
                                v: {
                                    v: e
                                }
                            };
                        }();
                        if ("object" === ("undefined" == typeof i ? "undefined" : (0, se["default"])(i))) return i.v;
                    }
                }();
                if ("object" === ("undefined" == typeof r ? "undefined" : (0, se["default"])(r))) return r.v;
            }
            var i = "";
            if (ue.isString(t)) n || 0 === n ? i = S(t) + ":" + C(t, n) : e.style.removeProperty(S(t)); else for (var o in t) t[o] || 0 === t[o] ? i += S(o) + ":" + C(o, t[o]) + ";" : e.style.removeProperty(S(o));
            return e.style.cssText += ";" + i;
        }
        function N(e, t) {
            if (t && e) {
                var n = j(e, (0, ce["default"])(t));
                return j(e, t), function() {
                    return j(e, n);
                };
            }
        }
        function I(e, t) {
            for (;e = e.parentNode; ) if (e.tagName == t) return e;
            return !1;
        }
        function A(e, t, n) {
            for (;e = e.parentNode; ) if (e.dataset && e.dataset[t] && e.dataset[t] == n) return e;
        }
        function D(e, t) {
            return s(e, t) ? e : P(e, t);
        }
        function P(e, t) {
            for (;e = e.parentNode; ) if (s(e, t)) return e;
            return !1;
        }
        function L(e, t) {
            if (!e) return !1;
            for (;e.parentNode; ) {
                if (s(e, t)) return e;
                e = e.parentNode;
            }
            return !1;
        }
        function M() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            return e ? M.call(this.parentNode, --e) : this;
        }
        function R(e, t) {
            if (!e) return !1;
            for (;e.parentNode; ) {
                if (t == e.parentNode) return e;
                e = e.parentNode;
            }
            return !1;
        }
        function F(e, t) {
            var n = t.parentNode;
            n.lastChild == t ? n.appendChild(e) : n.insertBefore(e, t.nextSibling);
        }
        function O(e, t) {
            t.parentNode.insertBefore(e, t);
        }
        function G(e, t) {
            for (t = t || document; e; ) {
                if (e == t) return !0;
                e = e.parentNode;
            }
            return !1;
        }
        function z(e) {
            var t = void 0, n = void 0, r = void 0, i = {
                ctrl: !1,
                meta: !1,
                shift: !1,
                alt: !1
            };
            e = ue.extend(i, e);
            try {
                t = e.el.ownerDocument.createEvent("KeyEvents"), n = e.el.ownerDocument.defaultView, 
                r = fe.keyCode(e), t.initKeyEvent(e.type, !0, !0, n, e.ctrl, e.alt, e.shift, e.meta, r, r);
            } catch (o) {
                t = e.el.ownerDocument.createEvent("UIEvents"), t.initUIEvent(e.name, !0, !0, window, 1), 
                t.keyCode = r, t.which = r, t.charCode = r, t.ctrlKey = e.ctrl, t.altKey = e.alt, 
                t.shiftKey = e.shift, t.metaKey = e.metaKey;
            }
            e.el.dispatchEvent(t);
        }
        function B(e) {
            return "undefined" != typeof e.hidden ? e.hidden : "undefined" != typeof e.mozHidden ? e.mozHidden : "undefined" != typeof e.webkitHidden ? e.webkitHidden : "undefined" != typeof e.msHidden && e.msHidden;
        }
        function W(e) {
            return "undefined" != typeof e.hidden ? "visibilitychange" : "undefined" != typeof e.mozHidden ? "mozvisibilitychange" : "undefined" != typeof e.webkitHidden ? "webkitvisibilitychange" : "undefined" != typeof e.msHidden && "msvisibilitychange";
        }
        function H() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
            return "undefined" != typeof e.body.style.transform ? "transform" : "undefined" != typeof e.body.style.WebkitTransform ? "WebkitTransform" : "undefined" != typeof e.body.style.MozTransform ? "MozTransform" : void 0;
        }
        function U(e) {
            if (e) {
                var t = e.ownerDocument;
                if (t) {
                    var n = t.defaultView || window;
                    if (n) {
                        var r = n.getComputedStyle(e, null);
                        if (r) {
                            for (var i = arguments.length, o = Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) o[a - 1] = arguments[a];
                            return 1 == o.length ? r.getPropertyValue(o[0]) : o.reduce(function(e, t) {
                                return (0, oe["default"])({}, e, (0, re["default"])({}, t, r.getPropertyValue(t)));
                            }, {});
                        }
                    }
                }
            }
        }
        function V(e) {
            return e.split(" ").map(function(e) {
                return "." != e[0] ? "." + e : e;
            }).join("").trim();
        }
        function q(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            if (n.length > 0) {
                var i = function() {
                    var t = [];
                    return t.push(q(e)), n.forEach(function(e) {
                        return t.push(q(e));
                    }), {
                        v: t.join(", ")
                    };
                }();
                if ("object" === ("undefined" == typeof i ? "undefined" : (0, se["default"])(i))) return i.v;
            }
            return e = e.split(", ").map(function(e) {
                return "." != e[0] ? "." + e : e;
            }).join(", ").trim(), e + ", " + e + " *";
        }
        function Y(e, t) {
            if (t == e) return !0;
            if (!e.children) return !1;
            for (var n = 0; n < e.children.length; n++) if (Y(e.children[n], t)) return !0;
            return !1;
        }
        function K(e, t) {
            var n = function(n) {
                n.map(function(n) {
                    if (0 != n.removedNodes.length) for (var i = n.removedNodes, o = i.length, a = 0; a < o; a++) {
                        var s = i[a];
                        (s.contains && s.contains(e) || Y(s, e)) && (r.disconnect(), t());
                    }
                });
            }, r = new MutationObserver(n);
            r.observe(e.ownerDocument.body, {
                childList: !0,
                subtree: !0
            });
        }
        function X() {
            var e = void 0, t = document.createElement("fakeelement"), n = {
                animation: "animationend",
                MozAnimation: "animationend",
                WebkitAnimation: "webkitAnimationEnd"
            };
            for (e in n) if (void 0 != t.style[e]) return n[e];
        }
        function Q() {
            var e = void 0, t = document.createElement("fakeelement"), n = {
                transition: "transitionend",
                MozTransition: "transitionend",
                WebkitTransition: "webkitTransitionEnd"
            };
            for (e in n) if (n.hasOwnProperty(e) && void 0 !== t.style[e]) return n[e];
        }
        function J(e) {
            if ("undefined" != typeof GR_INLINE_STYLES) {
                var t = e.createElement("style");
                t.innerHTML = GR_INLINE_STYLES;
                try {
                    e.querySelector("head").appendChild(t);
                } catch (n) {
                    console.log("can't append style", n);
                }
            }
        }
        function $(e, t) {
            e.setAttribute("data-gramm_id", t), e.setAttribute("data-gramm", !0);
        }
        function Z(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = document.createEvent("CustomEvent");
            n.initCustomEvent(e + "-gr", !0, !0, t), document.dispatchEvent(n);
        }
        function ee(e, t) {
            var n = e.getSelection();
            n.removeAllRanges(), n.addRange(t);
        }
        function te(e, t) {
            var n = e.createRange();
            n.setStart(t.anchorNode, t.anchorOffset), n.setEnd(t.focusNode, t.focusOffset), 
            ee(e, n);
        }
        var ne = e("babel-runtime/helpers/defineProperty"), re = r(ne), ie = e("babel-runtime/core-js/object/assign"), oe = r(ie), ae = e("babel-runtime/helpers/typeof"), se = r(ae), le = e("babel-runtime/core-js/object/keys"), ce = r(le), ue = e("lodash"), de = e("react-dom"), fe = e("./util");
        n.createEl = i, n.renderReactWithParent = o, n.inEl = a, n.hasClass = s, n.removeClass = l, 
        n.addClass = c, n.toggleClass = u, n.getParentBySel = d, n.parentIsContentEditable = f, 
        n.isContentEditable = m, n.matchesSelector = p, n.isFocused = h;
        var me = fe.guid();
        n.listen = g, n.unlisten = b, n.on = _, n.off = v, n.once = y, n.emit = w, n.isVisible = E, 
        n.cs = k, n.maybeAddPx = C, n.camelize = x, n.camelizeAttrs = T, n.dasherize = S;
        var pe = {
            "column-count": 1,
            columns: 1,
            "font-weight": 1,
            "line-height": 1,
            opacity: 1,
            "z-index": 1,
            zoom: 1
        };
        n.css = j, n.setCustomCss = N, n.getParentByTag = I, n.getParentByData = A, n.resolveEl = D, 
        n.getParent = P, n.parentHasClass = L, n.getParentByDepth = M, n.isParent = R, n.insertAfter = F, 
        n.insertBefore = O, n.elementInDocument = G, n.runKeyEvent = z, n.docHidden = B, 
        n.visibilityEvent = W, n.transformProp = H, n.compStyle = U, n.classSelector = V, 
        n.selectorAll = q, n.nodeInTree = Y, n.watchNodeRemove = K, n.whichAnimationEndEvent = X, 
        n.transitionEndEventName = Q, n.addIframeCss = J, n.setGRAttributes = $, n.emitDomEvent = Z, 
        n.addRange = ee, n.setDomRange = te;
    }, {
        "./util": 259,
        "babel-runtime/core-js/object/assign": 18,
        "babel-runtime/core-js/object/keys": 22,
        "babel-runtime/helpers/defineProperty": 30,
        "babel-runtime/helpers/typeof": 36,
        lodash: "lodash",
        "react-dom": "react-dom"
    } ],
    185: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function i(e) {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "on";
                g[e]("beforeunload", $), u[e]("editor-set-state", L, onerror), u[e]("dialog-closed", M), 
                u[e]("focus-editor", R), u[e]("after-refresh-dialog", G), me[e]("track", y.track), 
                me[e]("fix", ie), me[e]("serviceState", P), me[e]("addedSynonym", I), me[e]("afterReplace", E), 
                me.dom[e]("badCursorPositionRetryFail", i), me.dom[e]("badCursorPosition", r), me[e]("iframe-mousemove", A), 
                w(!0);
                var t = "on" == e ? _.listen : _.unlisten;
                t(ve, _.visibilityEvent(ve), V), t(ve, "grammarly:reset", D), he && t(ve.documentElement, "mousemove", k), 
                ee.card && (ee.card[e]("show", T), ee.card[e]("hide", S), ee.card[e]("toeditor", j), 
                ee.card[e]("addtodict", N));
            }
            function n() {
                c.timers.start(Z + "run"), t("on"), ye(), h.ClientScript.rewriteInnerHTML(pe), me.getText() && me.emit("sending"), 
                J(re.enabledDefs), be && z();
            }
            function r() {
                f.call("felog.info", "bad_cursor_position");
            }
            function i() {
                f.call("felog.error", "cursor_jump");
            }
            function o(e) {
                var t = e.user, n = e.page;
                se = t.settings.dialectStrong || n.dialectWeak, w(), le = t.anonymous, J(n.enabledDefs);
            }
            function w(e) {
                se || ce ? ce && (se || e) && me.off("finished", C) : (ce = !0, me.on("finished", C));
            }
            function E(e) {
                Array.isArray(re.afterReplaceEvents) && re.afterReplaceEvents.forEach(function(e) {
                    return _.emit.call(pe, e);
                });
                try {
                    var t = document.createEvent("HTMLEvents");
                    t.initEvent("input", !1, !0), me.el.dispatchEvent(t);
                } catch (t) {}
                return e && e.remove();
            }
            function k(e) {
                me.emit("iframe-mousemove", e);
            }
            function C(e) {
                var t = e.dialect;
                t && "undefined" !== t && (oe(t), se = t, w());
            }
            function x(e) {
                e && me.setState(e), me.api.ws.reconnect();
            }
            function T(e) {
                var t = me.matches.byId(e);
                t && (me.emit("context"), t.editorId = me.id, t.select(), ee.card.setData(t));
            }
            function S() {
                O();
            }
            function j(e) {
                e == me.id && (me.showDialog({
                    caller: "card"
                }), c.timers.start("open_editor"), f.call("statsc.ui.increment", "stability:editor.open_from_card"));
            }
            function N(e) {
                e.match.editorId == me.id && (le ? (e.hide(), me.showDialog({
                    caller: "card"
                })) : e.match.addToDict());
            }
            function I(e) {
                e.editorId = me.id, ee.card.showSynonyms(e);
            }
            function A(e) {
                ee.card.setOuterIframe(_e);
            }
            function D() {
                console.log("reseting capi session..."), x();
            }
            function P(e) {
                if ("capi" == e.type) return e.available ? void (be && W()) : z("Error checking is temporarily unavailable");
            }
            function L(e) {
                e.editorId == me.id && (me.setState(e), we && (we = !1, $()));
            }
            function M(e) {
                e == me.id && (O(), me.isHtmlGhost || F());
            }
            function R(e) {
                e == me.id && F();
            }
            function F() {
                me.srcEl.focus();
            }
            function O() {
                me.selectedMatch && (ee.card.removeLoading(me.selectedMatch.getEl()), me.selectedMatch.deselect());
            }
            function G(e) {
                e.editorId == me.id && x(e);
            }
            function z() {
                be = !0, me.clearData(), me.api.close(), me.render();
            }
            function B() {
                return be;
            }
            function W() {
                be = !1, x();
            }
            function H() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.caller, n = {
                    data: me.getState(),
                    caller: t
                };
                me.emit("show-dialog"), _.emitDomEvent("show-dialog"), u.emitFocusedTab("show-dialog", n);
            }
            function U() {
                var e = pe.ownerDocument.createRange();
                e.selectNodeContents(pe);
                var t = e.cloneContents(), n = document.createElement("div");
                n.appendChild(t);
                for (var r = n.querySelectorAll("img"), i = r.length, o = 0; o < i; o++) r[o].src = r[o].src;
                return n.innerHTML;
            }
            function V() {
                return _.docHidden(ve) ? K() : void X();
            }
            function q(e) {
                return be ? [] : e.filter(function(e) {
                    return e.free && !e.hidden;
                });
            }
            function Y(e) {
                return !!_.matchesSelector(e, ".b-card.Synonyms .btn-close") || !_.matchesSelector(e, ".b-card.Synonyms, .b-card.Synonyms *");
            }
            function K() {}
            function X() {}
            function Q() {
                var e = me.getMatches();
                return {
                    critical: e.filter(function(e) {
                        return e.free && e.inDom;
                    }).length,
                    plus: e.filter(function(e) {
                        return !e.free;
                    }).length
                };
            }
            function J(e) {
                me.enabledSynonyms != e && (me.enabledSynonyms = e, me.synonyms[e ? "fieldEnable" : "disable"]());
            }
            function $(e) {
                if (!ge || e) {
                    ge = !0;
                    var n = me.dom.getCleanHtml && me.dom.getCleanHtml();
                    if (n && (me.el.innerHTML = n), t("off"), me.exit(), console.log("exit"), pe.removeAttribute && b.restrictedAttrs.forEach(pe.removeAttribute.bind(pe)), 
                    he && b.restrictedAttrs.forEach(me.srcEl.removeAttribute.bind(me.srcEl)), pe.setAttribute("spellcheck", !0), 
                    m.isHtmlGhostSite()) {
                        var r = pe.parentElement && pe.parentElement.parentElement;
                        r && r.removeAttribute("spellcheck");
                    }
                    me.emit("exit");
                }
            }
            var Z = (e.el || e.srcEl).getAttribute("gramm_id") || d.guid(), ee = e.app, te = e.user, ne = e.actions, re = e.page, ie = ne.incFixed, oe = ne.changeWeakDialect, ae = e.editorType.htmlghost, se = te.settings.dialectStrong || re.dialectWeak, le = te.anonymous, ce = void 0, ue = te && te.experiments && (te.experiments.inlineCards || te.experiments.inlineCardsPimple);
            (0, a["default"])(e, {
                capiUrl: b.URLS.capi,
                createWs: l.Socket,
                docid: Z,
                textareaWrapSelector: '[gramm_id="' + Z + '"]',
                animatorContainer: e.el.ownerDocument.documentElement,
                getAnimatorElPos: p.getAbsRect,
                updateTextareaHeight: d._f,
                dialect: se,
                exposeRawMatch: !0,
                canRemoveSynonym: Y,
                filter: q
            });
            var de = d.getBrowser(), fe = "other" === de ? "extension" : "extension_" + de;
            (0, a["default"])(s.Capi, {
                CLIENT_NAME: fe,
                clientVersion: b.getVersion(),
                extDomain: re.domain
            }), ae && (e.dom = v.HtmlGhostDom), s.MatchPositions = function() {
                return {
                    generateMatchPositions: d._f
                };
            }, e.matchPrefix = b.nextVerClass;
            var me = s(e), pe = me.el, he = e.posSourceEl && "IFRAME" == e.posSourceEl.tagName, ge = !1, be = !e.connection.online, _e = e.srcEl || pe, ve = pe.ownerDocument, ye = me.run, we = !1;
            (0, a["default"])(me, {
                id: Z,
                srcEl: _e,
                camouflage: d._f,
                isHtmlGhost: ae,
                run: n,
                errorData: Q,
                showDialog: H,
                isOffline: B,
                offline: z,
                online: W,
                updateState: o,
                outerIframe: e.outerIframe,
                cleanupText: d._f,
                activate: d._f,
                toggleBtn: d._f,
                remove: $,
                reset: x
            });
            var Ee = me.getMatchClass;
            return me.getMatchClass = function(e, t) {
                var n = Ee(e, t);
                return n += e.renderedOnce || d.isSafari() ? " gr_disable_anim_appear" : " gr_run_anim", 
                ue && (n += " gr_inline_cards"), e.renderedOnce = !0, n;
            }, me.dom.changeSelection = d._f, me.matches.fromReplaced = me.matches.fromReplace = me.matches.byId, 
            me.current = me.getFiltered, me.started = !1, me.el.setAttribute("data-gramm_editor", !0), 
            me.getHtml && (me.getHtml = U), me;
        }
        var o = e("babel-runtime/core-js/object/assign"), a = r(o), s = e("grammarly-editor"), l = e("../socket"), c = e("../timers"), u = e("../message"), d = e("../util"), f = e("../tracking"), m = (e("../benchmark"), 
        e("lib/ghost/html-ghost-locator")), p = e("../position"), h = e("../client-script"), g = e("../window-events"), b = e("../config"), _ = e("../dom"), v = e("../ghost/html-ghost"), y = e("./track");
        n.Editor = i;
    }, {
        "../benchmark": 159,
        "../client-script": 179,
        "../config": 180,
        "../dom": 184,
        "../ghost/html-ghost": 217,
        "../message": 233,
        "../position": 236,
        "../socket": 243,
        "../timers": 251,
        "../tracking": 255,
        "../util": 259,
        "../window-events": 260,
        "./track": 187,
        "babel-runtime/core-js/object/assign": 18,
        "grammarly-editor": "grammarly-editor",
        "lib/ghost/html-ghost-locator": 216
    } ],
    186: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function i(e) {
            var t, n = e.app, r = e.doc, i = e.type, o = e.field, l = e.connection, c = e.page, u = e.user, f = e.actions;
            return m.call("statsc.ui.increment", "activity:" + i + ".editor_init"), n.elements = n.elements || p.initElements({
                app: n,
                doc: r,
                user: u,
                actions: f
            }), "iframe" == i ? s(n, o, l, c, u, f) : a(n, o, (t = {}, (0, d["default"])(t, i, !0), 
            (0, d["default"])(t, "value", i), t), l, c, u, f);
        }
        function o(e, t) {
            if (h.setGRAttributes(e, t), e.setAttribute("spellcheck", !1), g.isHtmlGhostSite()) {
                var n = e.parentElement && e.parentElement.parentElement;
                n && n.setAttribute("spellcheck", !1);
            }
        }
        function a(e, t, n, r, i, a, s) {
            function l(t) {
                var l = t.el, c = t.id;
                return o(l, c), b.Editor({
                    id: c,
                    el: l,
                    app: e,
                    connection: r,
                    page: i,
                    user: a,
                    actions: s,
                    editorType: n
                });
            }
            var u = {
                el: t,
                id: f.guid()
            };
            return "contenteditable" == n.value ? l((0, c["default"])({}, u)) : _.GhostArea((0, 
            c["default"])({}, u, {
                createEditor: l
            }));
        }
        function s(e, t, n, r, i, a) {
            var s = f.guid(), l = t.contentDocument, c = l.body;
            return o(t, s), t.setAttribute("gramm-ifr", !0), h.addIframeCss(l), o(c, s), t.style.height = t.style.height || getComputedStyle(t).height, 
            b.Editor({
                el: c,
                app: e,
                connection: n,
                page: r,
                user: i,
                actions: a,
                srcEl: t,
                posSourceEl: t,
                editorType: {
                    contenteditable: !0,
                    value: "contenteditable"
                }
            });
        }
        var l = e("babel-runtime/core-js/object/assign"), c = r(l), u = e("babel-runtime/helpers/defineProperty"), d = r(u), f = e("../util"), m = e("../tracking"), p = e("../elements"), h = e("../dom"), g = e("lib/ghost/html-ghost-locator"), b = e("./editor"), _ = e("../ghost/ghostarea");
        n.CreateEditor = i;
    }, {
        "../dom": 184,
        "../elements": 194,
        "../ghost/ghostarea": 215,
        "../tracking": 255,
        "../util": 259,
        "./editor": 185,
        "babel-runtime/core-js/object/assign": 18,
        "babel-runtime/helpers/defineProperty": 30,
        "lib/ghost/html-ghost-locator": 216
    } ],
    187: [ function(e, t, n) {
        "use strict";
        function r(e) {
            var t = e.type, n = e.key, r = e.value, o = e.data;
            (n || o) && (n ? i.call("statsc.ui." + t, n, r) : i.call("statsc.ui." + t, o));
        }
        var i = e("../tracking");
        n.track = r;
    }, {
        "../tracking": 255
    } ],
    188: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function i(e) {
            var t = /class=["']([^'"]+)['"]/g;
            return u.sanitize(e).replace(t, function(e, t) {
                return 'class="' + h(t.trim()) + '"';
            });
        }
        function o(e) {
            if (e) return e.showAddToDictionary;
        }
        var a = e("babel-runtime/helpers/defineProperty"), s = r(a), l = e("react"), c = e("react-dom"), u = e("dompurify"), d = e("../dom"), f = e("../tracking"), m = e("../config"), p = "gr-grammar-card", h = function(e) {
            return e.split(" ").map(function(e) {
                return p + "_" + e;
            }).join(" ");
        };
        n.CardComponent = l.createClass({
            displayName: "CardComponent",
            getInitialState: function() {
                return {
                    pos: {
                        rect: {
                            top: 0,
                            left: 0,
                            width: 0
                        },
                        sourceRect: {
                            width: 0
                        },
                        delta: {
                            right: 0
                        },
                        className: "",
                        visible: !1
                    },
                    addedToDict: !1,
                    match: {},
                    visible: !1
                };
            },
            renderHeader: function() {
                var e = this.state.match, t = "title";
                if (e.syn && e.synonyms.meanings.length) return l.createElement("div", {
                    className: h(t)
                }, "Synonyms suggested by Grammarly");
                if (e.title) {
                    if (e.spell && "Unknown" != e.category || (t += " title-link"), !e.spell || e.showTitle || e.didYouMean) return l.createElement("div", {
                        className: h(t),
                        dangerouslySetInnerHTML: {
                            __html: u.sanitize(e.title)
                        },
                        "data-action": "editor"
                    });
                    if (!e.rFirst || !e.rFirst.trim()) return l.createElement("div", {
                        className: h(t)
                    }, l.createElement("div", {
                        className: h("replacement-block")
                    }, l.createElement("span", {
                        className: h("replacement"),
                        "data-action": "replace",
                        "data-replace": e.rFirst,
                        dangerouslySetInnerHTML: {
                            __html: i(e.header)
                        }
                    })));
                    var n = e.origReplacements || [];
                    return l.createElement("div", {
                        className: h(t)
                    }, n.map(function(t, n) {
                        return l.createElement("div", {
                            className: h("replacement-block"),
                            key: n
                        }, l.createElement("span", {
                            className: h("replacement"),
                            "data-replace": t
                        }, l.createElement("span", {
                            className: h("del")
                        }, e.oldVal), l.createElement("span", {
                            className: h("arr")
                        }, " → "), l.createElement("span", {
                            className: h("ins")
                        }, t)));
                    }, this));
                }
            },
            renderFooter: function(e) {
                var t = this.props.isAnonymous();
                return t ? l.createElement("div", {
                    className: h("footer anonymous")
                }, l.createElement("a", {
                    className: h("link"),
                    tabIndex: "-1",
                    "data-action": "login",
                    target: "__blank"
                }, "Log in"), " to enable personalized grammar and spelling checks,", l.createElement("br", null), "a custom dictionary, and additional features. It's free!") : l.createElement("div", {
                    className: h("footer")
                }, l.createElement("div", {
                    className: h("link"),
                    tabIndex: "-1",
                    "data-action": "editor"
                }, "Correct with Grammarly"), this.renderAddToDict(), e.syn ? l.createElement("div", {
                    className: h("btn-close"),
                    "data-action": "close"
                }, "Close") : l.createElement("div", {
                    className: h("btn-close ignore"),
                    "data-action": "ignore"
                }, "Ignore"));
            },
            getTriangleMargin: function() {
                var e = this.state.pos.sourceRect.width / 2, t = this.state.pos.delta.right;
                return t > 0 ? e : -t + e;
            },
            renderConfused: function() {
                var e = this.state.match;
                return l.createElement("div", {
                    className: h("replacement-block sub-title")
                }, l.createElement("span", {
                    className: h("replacement")
                }, "Did you mean ", l.createElement("span", {
                    className: h("ins"),
                    "data-replace": e.rFirst
                }, e.rFirst), "?"));
            },
            renderSynonyms: function() {
                var e, t = this, n = this.state.match, r = n.synonyms.meanings;
                if (0 == r.length) return l.createElement("div", {
                    className: h("content")
                }, l.createElement("div", {
                    className: h("nothing")
                }, "No synonyms found"));
                var i = d.cs((e = {}, (0, s["default"])(e, h("item-single"), 1 == r.length), (0, 
                s["default"])(e, h("item"), !0), e));
                return l.createElement("div", {
                    className: h("content")
                }, r.map(function(e, n) {
                    return l.createElement("div", {
                        className: i,
                        key: n
                    }, l.createElement("div", {
                        className: h("meaning")
                    }, e.meaning), l.createElement("div", {
                        className: h("replacements")
                    }, e.synonyms.map(function(e, t) {
                        return l.createElement("span", {
                            className: h("ins"),
                            key: t,
                            "data-replace": e.base
                        }, e.base);
                    }, t)));
                }, this));
            },
            renderAddToDict: function() {
                if (o(this.state.match)) return l.createElement("div", {
                    className: h("link add-to-dict"),
                    "data-action": "add"
                }, "Add to dictionary");
            },
            renderAddedToDict: function() {
                var e = this.state.pos.width, t = this.state.pos.height;
                return l.createElement("div", {
                    className: h("added-to-dict-message")
                }, l.createElement("div", {
                    className: h("added-to-dict-message-content")
                }, l.createElement("div", {
                    className: h("added-to-dict-word")
                }, this.state.match.value), " is now in your ", l.createElement("a", {
                    target: "__blank",
                    href: m.URLS.editorDictionary
                }, "personal dictionary")), l.createElement("div", {
                    style: {
                        width: e,
                        height: t
                    },
                    "data-action": "hide",
                    className: h("added-to-dict-sizer")
                }));
            },
            componentWillMount: function() {
                var e = this;
                this.cardEvents = function(t) {
                    var n = t.target, r = n.dataset, i = r.action, o = r.replace, a = e.state.match, s = e.props;
                    if (e.state.addedToDict && "A" == n.tagName) return void f.fire("show-dictionary");
                    if (t.stopPropagation(), t.preventDefault(), i || o || (i = n.parentNode.dataset.action, 
                    o = n.parentNode.dataset.replace), o && (i = "replace"), i) switch (i) {
                      case "replace":
                        a.replace(o), s.hide(), f.call("statsc.ui.increment", "activity:" + (a.syn ? "synonyms" : "replacement") + ".click");
                        break;

                      case "ignore":
                        a.ignore(), s.hide();
                        break;

                      case "hide":
                        s.hide();
                        break;

                      case "anim-hide":
                        s.animHide();
                        break;

                      case "editor":
                        s.openEditor();
                        break;

                      case "login":
                        s.openEditor();
                        break;

                      case "add":
                        s.addToDict();
                    }
                };
            },
            componentDidMount: function() {
                d.on.call(c.findDOMNode(this), "click", this.cardEvents);
            },
            componentWillUnmount: function() {
                d.off.call(c.findDOMNode(this), "click", this.cardEvents);
            },
            render: function() {
                var e, t = {}, n = this.state.pos, r = this.state.match, i = this.state.addedToDict, a = d.cs((e = {}, 
                (0, s["default"])(e, p, !0), (0, s["default"])(e, h("syn"), r.syn), (0, s["default"])(e, h("flip"), n.rect.flip), 
                (0, s["default"])(e, h("animate"), this.state.animate), (0, s["default"])(e, this.state.className, this.state.className), 
                (0, s["default"])(e, h("wide-footer"), o(this.state.match)), (0, s["default"])(e, h("anonymous"), this.props.isAnonymous()), 
                (0, s["default"])(e, h("added-to-dict"), i), e)), c = {
                    marginLeft: this.getTriangleMargin()
                };
                return t.top = n.rect.top, t.left = n.rect.left, 0 == n.rect.top && 0 == n.rect.left && this.state.visible && f.call("statsc.ui.increment", "stability:card.top_left_0"), 
                n.rect.top > 0 && n.rect.top < 10 && n.rect.left > 0 && n.rect.left < 10 && this.state.visible && f.call("statsc.ui.increment", "stability:card.top_left_10"), 
                t.visibility = this.state.visible ? "" : "hidden", l.createElement("div", {
                    tabIndex: "-1",
                    style: t,
                    className: a
                }, l.createElement("span", {
                    style: c,
                    className: h("triangle")
                }), this.renderHeader(), i && this.renderAddedToDict(), r.syn && this.renderSynonyms(), r.didYouMean && this.renderConfused(), this.renderFooter(r));
            }
        });
    }, {
        "../config": 180,
        "../dom": 184,
        "../tracking": 255,
        "babel-runtime/helpers/defineProperty": 30,
        dompurify: "dompurify",
        react: "react",
        "react-dom": "react-dom"
    } ],
    189: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function i(e, t) {
            if (e) {
                if (!e.length) return e;
                if (1 == e.length || !t) return e[0];
                var n = t.pageX || t.clientX, r = t.pageY || t.clientY, i = void 0;
                return e.forEach(function(e) {
                    var t = e.top, o = e.left, a = e.width, s = e.height;
                    r >= t && r <= t + s && n >= o && n <= o + a && (i = e);
                }), i || e[0];
            }
        }
        var o = e("babel-runtime/core-js/symbol"), a = r(o), s = e("babel-runtime/core-js/object/get-prototype-of"), l = r(s), c = e("babel-runtime/helpers/classCallCheck"), u = r(c), d = e("babel-runtime/helpers/createClass"), f = r(d), m = e("babel-runtime/helpers/possibleConstructorReturn"), p = r(m), h = e("babel-runtime/helpers/inherits"), g = r(h), b = e("react"), _ = e("react-dom"), v = e("emitter"), y = e("../timers"), w = e("../util"), E = e("../window-events"), k = e("../tracking"), C = e("../position"), x = e("../dom"), T = e("./hint"), S = e("./tooltip"), j = e("./card-component"), N = e("../inline-cards"), I = {
            container: "_3f5535-container",
            flip: "_3f5535-flip",
            flipSyn: "_3f5535-flipSyn",
            card: "_3f5535-card",
            bigTitle: "_3f5535-bigTitle",
            unknownWordTitle: "_3f5535-unknownWordTitle",
            btnDictLabelWithIcon: "_3f5535-btnDictLabelWithIcon",
            explanation: "_3f5535-explanation",
            replacement: "_3f5535-replacement",
            maxWidthReached: "_3f5535-maxWidthReached",
            item: "_3f5535-item",
            logoIcon: "_3f5535-logoIcon",
            ignoreIcon: "_3f5535-ignoreIcon",
            undoIcon: "_3f5535-undoIcon",
            dictionaryIcon: "_3f5535-dictionaryIcon",
            wikiIcon: "_3f5535-wikiIcon",
            footer: "_3f5535-footer",
            footerButton: "_3f5535-footerButton",
            btnIgnore: "_3f5535-btnIgnore",
            icon: "_3f5535-icon",
            btnLogo: "_3f5535-btnLogo",
            btnPersonalize: "_3f5535-btnPersonalize",
            personalizeMessage: "_3f5535-personalizeMessage",
            attn: "_3f5535-attn",
            cardAddedToDict: "_3f5535-cardAddedToDict",
            addedToDictTitle: "_3f5535-addedToDictTitle",
            dictionaryDescription: "_3f5535-dictionaryDescription",
            undo: "_3f5535-undo",
            dictLink: "_3f5535-dictLink",
            dictionaryAddedIcon: "_3f5535-dictionaryAddedIcon",
            synTitle: "_3f5535-synTitle",
            synList: "_3f5535-synList",
            synListSingle: "_3f5535-synListSingle",
            synListTitle: "_3f5535-synListTitle",
            synListNumber: "_3f5535-synListNumber",
            synSubitems: "_3f5535-synSubitems",
            synItem: "_3f5535-synItem",
            dict: "_3f5535-dict",
            dictContent: "_3f5535-dictContent",
            dictItemCounter: "_3f5535-dictItemCounter",
            dictItem: "_3f5535-dictItem",
            qualifier: "_3f5535-qualifier",
            dictFooterItem: "_3f5535-dictFooterItem",
            wiki: "_3f5535-wiki",
            gr__tooltip_empty: "gr__tooltip_empty",
            gr__tooltip: "gr__tooltip",
            "gr-notfound-tooltip": "gr-notfound-tooltip",
            "gr__tooltip-content": "gr__tooltip-content",
            "gr__tooltip-logo": "gr__tooltip-logo",
            gr__flipped: "gr__flipped"
        }, A = {}, D = function(e) {
            return e.inlineCards || e.inlineCardsPimple;
        }, P = function(e) {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = e.doc, r = void 0 === n ? document : n, i = e.domCls, o = void 0 === i ? "" : i, s = e.experiments, c = void 0 === s ? {} : s, d = e.isAnonymous, f = void 0 !== d && d;
                (0, u["default"])(this, t);
                var m = (0, p["default"])(this, (t.__proto__ || (0, l["default"])(t)).call(this));
                return m.show = function(e, t) {
                    return m.emit("show", e.id), m.updatePos(e, t), y.timers.start(A.id), k.call("statsc.ui.increment", "stability:card.open"), 
                    m;
                }, m.hide = function() {
                    if (A.hint.visible) {
                        A.container.el.style.display = "none", m.setState({
                            animate: !1,
                            visible: !1,
                            match: {}
                        });
                        var e = A.notfound && A.notfound.isEnabled();
                        A.notfound.disable(), A.notfound.hide(), m.emit("hide", m.match), m.removeLoading(A.hint.currentEl);
                        var t = y.timers.stop(A.id);
                        if (m.match) {
                            var n = m.match.syn;
                            k.call("statsc.ui.timing", "stability:" + (n ? "syn" : "card") + ".close", t);
                        }
                        return e && k.call("statsc.ui.timing", "stability:syn.close", t), m.match = null, 
                        A.container.el.style.display = "", m;
                    }
                }, m.animHide = function() {
                    return m.setState({
                        animate: !0
                    }), x.once.call(A.el, x.whichAnimationEndEvent(), m.hide), m;
                }, m.openEditor = function() {
                    m.removeLoading(A.hint.currentEl), m.emit("toeditor", m.match.editorId), m.hide();
                }, m.animateReplacement = function(e, t, n) {
                    m.emit("animateReplacement", {
                        matchId: e,
                        replacement: t,
                        visibleReplacement: n
                    });
                }, m.addToDict = function() {
                    m.setState({
                        addedToDict: !0
                    }), m.emit("addtodict", {
                        match: m.match,
                        hide: m.hide,
                        animHide: m.animHide
                    });
                }, m.inTarget = function(e) {
                    var t = e.target, n = e.clientX, r = e.clientY, i = e.detail, o = A.hint.currentEl, a = (x.parentHasClass(t, A.cls) || x.hasClass(t, A.cls)) && !x.hasClass(o, "g-selection-anim"), s = m.elementsFromPoint(n, r).some(function(e) {
                        return x.hasClass(e, A.cls);
                    });
                    return !(!s || !A.hint.visible || 1 != i) || (a ? o && o != t ? (A.hint.fastHide(), 
                    void m.removeLoading(o)) : (m.addLoading(t), !0) : void (!A.hint.visible && o && m.removeLoading(o)));
                }, m.addLoading = function(e) {
                    return !x.hasClass(e, A.pCls) && x.addClass(e, A.pCls);
                }, m.removeLoading = function(e) {
                    x.hasClass(e, A.pCls) && x.removeClass(e, A.pCls), x.hasClass(e, "g-selection-anim") && e.parentNode && e.parentNode.removeChild(e);
                }, m.showSynonyms = function(e) {
                    return e.animEl && 0 != e.animEl.getClientRects().length ? (A.hint.currentEl && m.hide(), 
                    A.hint.currentEl = e.animEl, 0 == e.synonyms.meanings.length ? (A.notfound.enable(), 
                    A.notfound.show({
                        posEl: e.animEl,
                        text: "No synonyms found",
                        outerIframe: A.iframe
                    })) : (m.setData(e), m.updatePos(e.animEl), m.setState({
                        visible: !0
                    })), A.hint.setVisible(!0), y.timers.start(A.id), k.call("statsc.ui.increment", "stability:syn.open"), 
                    m) : m;
                }, m.setOuterIframe = function(e) {
                    var t = e.contentDocument;
                    !e || t && e == A.iframe || (A.iframe = e, A.hint.setDocs(A.doc, t));
                }, m.experiments = c, m.isAnonymous = f, A = {
                    id: (0, a["default"])("GrammarCard"),
                    notfound: S.Tooltip({
                        cls: x.cs("gr-notfound-tooltip", D(m.experiments) && I.gr__tooltip_empty),
                        enabled: !1,
                        doc: r
                    }),
                    windowEvents: {
                        keydown: m.hide,
                        scroll: m.hide,
                        resize: m.hide
                    },
                    doc: r,
                    domCls: o,
                    cls: "gr_",
                    pCls: "gr-progress"
                }, A.container = m.render(A), A.el = _.findDOMNode(A.container.component), A.hint = new T.Hint({
                    doc: A.doc,
                    hint: A.el,
                    hideDelay: 500,
                    inTarget: m.inTarget,
                    cls: A.cls,
                    delay: 400,
                    onshow: m.show,
                    onhide: m.hide
                }).bind(), m.hint = A.hint, E.on(A.windowEvents, !0), m;
            }
            return (0, g["default"])(t, e), (0, f["default"])(t, [ {
                key: "updateState",
                value: function(e) {
                    var t = e.experiments, n = void 0 === t ? {} : t, r = e.isAnonymous, i = void 0 !== r && r;
                    this.experiments = n, this.isAnonymous = i;
                }
            }, {
                key: "elementsFromPoint",
                value: function(e, t) {
                    return e && t ? A.doc.elementsFromPoint ? A.doc.elementsFromPoint(e, t) : [ A.doc.elementFromPoint(e, t) ] : [];
                }
            }, {
                key: "setState",
                value: function(e) {
                    A.container.component.setState(e);
                }
            }, {
                key: "setData",
                value: function(e) {
                    return e ? (this.setState({
                        match: e,
                        visible: !0,
                        addedToDict: !1
                    }), this.match = e, this) : this;
                }
            }, {
                key: "updatePos",
                value: function(e, t) {
                    if (null == e.parentNode) {
                        if (!e.id) return this.hide();
                        var n = A.doc.querySelector(".gr_" + e.id);
                        if (!n) return this.hide();
                        A.hint.currentEl = e = n;
                    }
                    var r = C.getAbsRect(e, A.iframe, !0), o = C.posToRect(A.el, i(r, t));
                    o.rect.flip && (o.rect.top = o.rect.top + A.el.clientHeight), o.width = A.el.clientWidth, 
                    o.height = A.el.clientHeight, D(this.experiments) && k.call("gnar.track", "cardOpened", {
                        direction: o.rect.flip ? "top" : "bottom",
                        pixelsToBottom: Math.round(o.height + o.delta.bottom),
                        cardHeight: o.height,
                        ratio: 1 + Math.round(10 * o.delta.bottom / o.height) / 10
                    }), this.setState({
                        pos: o
                    });
                }
            }, {
                key: "render",
                value: function() {
                    var e = this, t = {
                        className: A.domCls,
                        isAnonymous: function() {
                            return e.isAnonymous;
                        },
                        hide: this.hide,
                        animHide: this.animHide,
                        openEditor: this.openEditor,
                        animateReplacement: this.animateReplacement,
                        addToDict: this.addToDict
                    }, n = D(this.experiments) ? N.PositionedCard : j.CardComponent;
                    return x.renderReactWithParent(b.createElement(n, t), A.doc.documentElement, A.id, "grammarly-card");
                }
            }, {
                key: "remove",
                value: function() {
                    A.hint.unbind(), E.off(A.windowEvents, !0), A.container.remove();
                }
            } ]), t;
        }(w.createClass(v));
        n.Card = P;
    }, {
        "../dom": 184,
        "../inline-cards": 221,
        "../position": 236,
        "../timers": 251,
        "../tracking": 255,
        "../util": 259,
        "../window-events": 260,
        "./card-component": 188,
        "./hint": 192,
        "./tooltip": 209,
        "babel-runtime/core-js/object/get-prototype-of": 21,
        "babel-runtime/core-js/symbol": 26,
        "babel-runtime/helpers/classCallCheck": 28,
        "babel-runtime/helpers/createClass": 29,
        "babel-runtime/helpers/inherits": 32,
        "babel-runtime/helpers/possibleConstructorReturn": 33,
        emitter: "emitter",
        react: "react",
        "react-dom": "react-dom"
    } ],
    190: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function i(e) {
            function t(e) {
                G = e, X && X.updateUser(e);
            }
            function n(e) {
                var t = "off" == e;
                S.toggleClass(F.body, t, "gr-disable-scroll"), S.toggleClass(F.documentElement, t, "gr-disable-scroll");
            }
            function r() {
                K && !G.anonymous && d();
            }
            function i(e) {
                return new w.SigninDialog({
                    doc: F,
                    user: e
                });
            }
            function o(e, t) {
                n("off"), X = i(t), X.on("hide", function() {
                    n("on"), k.emitFocusedTab("focus-editor", K.editorId), x.call("felog.info", "signin_close", {
                        active_time: C.timers.stop(H)
                    });
                }), x.call("felog.info", "signin_open"), x.fire("login-attempt", e);
            }
            function a() {
                Y = !0, V = F.querySelector(N), V || (V = v.findDOMNode(S.renderReactWithParent(_.createElement(D, null), F.documentElement, E.guid()).component)), 
                q = V.querySelector(I("back"));
            }
            function s() {
                var e = {
                    "mail.google.com": "Gmail",
                    "facebook.com": "Facebook",
                    "twitter.com": "Twitter"
                };
                return "Back to " + (e[T.getDomain()] || document.title);
            }
            function l(e) {
                e.stopPropagation(e), L();
            }
            function c(e) {
                k.emitFocusedTab("editor-set-state", e);
            }
            function u() {
                k.emitFocusedTab("dialog-closed", K.editorId);
            }
            function d() {
                if (U) {
                    var e = function() {
                        O.el.style.background = "";
                        var e = c;
                        return c = function(t) {
                            c = e, O.refresh(), k.emitFocusedTab("after-refresh-dialog", t);
                        }, L(), {
                            v: void 0
                        };
                    }();
                    if ("object" === ("undefined" == typeof e ? "undefined" : (0, p["default"])(e))) return e.v;
                }
                O.refresh();
            }
            function f(e) {
                k.emitBackground("iframe-mode", {
                    iframeMode: e,
                    id: K.socketId
                });
            }
            function m() {
                G.anonymous || O.activate();
            }
            function h(e) {
                var t = e.data, n = e.caller;
                return C.timers.start(H), K = t, G.anonymous ? o(n, G) : (O.activate(), void y(t));
            }
            function y(e) {
                Y || a(), V.style.opacity = 0, S.addClass(V, "gr-_show");
                var t = b.extend({
                    favicon: T.getFavicon(),
                    page: s()
                }, e);
                O.send(t), f(!0), setTimeout(function() {
                    return V.style.opacity = 1;
                }, 10), n("off"), S.listen(F.body, "keydown", R), S.listen(q, "click", l), S.listen(V, "click", l), 
                U = !0;
            }
            function j(e) {
                var t = e.action;
                "edit" == t && c(e), "close" == t && L(), "initialized" == t && (P(e), setTimeout(function() {
                    return O.el.style.background = "transparent";
                }, 300)), "socket" == t && k.emitBackground("socket-client", e), "setSettings" == t && B(e.data), 
                "tracking" == t && x.call(e.method, e.param, e.props), "popup-editor-fix" == t && W(), 
                "open-url" == t && (x.fire("hook-clicked", e.placement), k.emitBackground("open-url", e.url));
            }
            function A(e, t) {
                K && e.socketId == K.socketId && (t("ok"), e.action = "socket", O.send(e));
            }
            function P(e) {
                var t = "Premium" == e.userType ? "freemium-plus" : "freemium";
                F.documentElement.setAttribute("data-type", t);
            }
            function L() {
                U && (U = !1, n("on"), V.style.opacity = 0, S.removeClass(V, "gr-_show"), S.unlisten(F.body, "keydown", R), 
                S.unlisten(q, "click", l), S.unlisten(V, "click", l), O.send({
                    action: "hide"
                }), f(!1), u(), x.call("statsc.ui.timing", "stability:editor.close", C.timers.stop(H)));
            }
            function M() {
                window == window.top && (k.off("show-dialog", h), k.off("hide-dialog", L), k.off("reset", r), 
                k.off("socket-server-iframe", A)), O.deactivate(), O.off("message", j), V.parentNode.removeChild(V);
            }
            function R(e) {
                if (27 == E.keyCode(e) && U) return e.stopPropagation(), e.preventDefault(), L();
            }
            var F = e.doc, O = e.iframe, G = e.user, z = e.actions, B = z.updateSettings, W = z.incFixed, H = (0, 
            g["default"])("Dialog"), U = !1, V = void 0, q = void 0, Y = void 0, K = void 0, X = void 0, Q = {
                show: h,
                hide: L,
                updateState: t,
                preActivate: m,
                render: a,
                getSignin: i,
                remove: M,
                refresh: d
            };
            return O.on("message", j), window == window.top && (k.on("show-dialog", h), k.on("hide-dialog", L), 
            k.on("reset", r), k.on("socket-server-iframe", A)), Q;
        }
        var o = e("babel-runtime/core-js/object/get-prototype-of"), a = r(o), s = e("babel-runtime/helpers/classCallCheck"), l = r(s), c = e("babel-runtime/helpers/possibleConstructorReturn"), u = r(c), d = e("babel-runtime/helpers/inherits"), f = r(d), m = e("babel-runtime/helpers/typeof"), p = r(m), h = e("babel-runtime/core-js/symbol"), g = r(h), b = e("lodash"), _ = e("react"), v = e("react-dom"), y = e("./iframe"), w = e("./signin-dialog"), E = e("../util"), k = e("../message"), C = e("../timers"), x = e("../tracking"), T = e("../location"), S = e("../dom"), j = "gr_-editor", N = "." + j, I = function(e) {
            return "." + j + "_" + e;
        }, A = function(e) {
            return j + "_" + e;
        };
        n.Dialog = i;
        var D = function(e) {
            function t() {
                (0, l["default"])(this, t);
                var e = (0, u["default"])(this, (t.__proto__ || (0, a["default"])(t)).apply(this, arguments));
                return e.render = function() {
                    return _.createElement("div", {
                        className: j,
                        style: {
                            display: "none"
                        }
                    }, _.createElement("div", {
                        className: A("back")
                    }), _.createElement(y.Iframe.IframeComponent, null));
                }, e;
            }
            return (0, f["default"])(t, e), t;
        }(_.Component);
    }, {
        "../dom": 184,
        "../location": 232,
        "../message": 233,
        "../timers": 251,
        "../tracking": 255,
        "../util": 259,
        "./iframe": 193,
        "./signin-dialog": 202,
        "babel-runtime/core-js/object/get-prototype-of": 21,
        "babel-runtime/core-js/symbol": 26,
        "babel-runtime/helpers/classCallCheck": 28,
        "babel-runtime/helpers/inherits": 32,
        "babel-runtime/helpers/possibleConstructorReturn": 33,
        "babel-runtime/helpers/typeof": 36,
        lodash: "lodash",
        react: "react",
        "react-dom": "react-dom"
    } ],
    191: [ function(e, t, n) {
        "use strict";
        function r(e) {
            function t(e) {
                o.hasClass(e.target, "fr-reload-tab") && (a.call("felog.info", "g_button_hover_reload_click"), 
                setTimeout(function() {
                    return window.location.reload(!0);
                }, 200));
            }
            var n = e.el, r = e.win, s = e.outerIframe, l = i.Tooltip({
                posEl: n,
                html: "<span class='fr-tooltip-title'>Cannot connect to Grammarly.</span> Please <span class='fr-reload-tab'>reload</span> the browser tab and check your internet connection. <span class='fr-dialog-br'></span>Don't lose your work! Copy any unsaved text before you reload the tab.",
                doc: n.ownerDocument,
                cls: "fr-btn-offline-tooltip",
                outerIframe: s,
                enabled: !1
            });
            o.listen(r, "click", t);
            var c = l.remove;
            return l.remove = function() {
                c(), o.unlisten(r, "click", t);
            }, l;
        }
        var i = e("./tooltip"), o = e("../dom"), a = e("../tracking");
        n.ErrorTooltip = r;
    }, {
        "../dom": 184,
        "../tracking": 255,
        "./tooltip": 209
    } ],
    192: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        var i = e("babel-runtime/helpers/classCallCheck"), o = r(i), a = e("lodash"), s = e("../util"), l = e("../dom"), c = {
            hideDelay: 10,
            onshow: s._f,
            onhide: s._f,
            onmousemove: s._f,
            onInnerMouseMove: s._f,
            inTarget: function(e) {
                var t = e.target, n = l.parentHasClass(t, this.cls) || l.hasClass(t, this.cls);
                if (n) return !this.currentEl || this.currentEl == t || void this.fastHide();
            }
        }, u = function d(e) {
            var t = this;
            (0, o["default"])(this, d), a.extend(this, c, e, {
                bind: function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.doc;
                    return t.doc2 && t.doc2 != n && t.bind(e, t.doc2), l.listen(n.body, "resize", t.fastHide, e), 
                    l.listen(n, {
                        gramMouse: t.mousemove,
                        mousemove: t.mousemove,
                        scroll: t.fastHide
                    }, s._f, e), l.listen(n, "click", t.click, e, !0), l.listen(t.hint, "mousemove", t.innerMouseMove, e), 
                    t;
                },
                setDocs: function(e, n) {
                    t.unbind(), a.extend(t, {
                        doc: e,
                        doc2: n
                    }), t.bind();
                },
                unbind: function(e) {
                    return t.bind(!0, e);
                },
                fastHide: function() {
                    t.onhide(), t.cancelTimeout("show").cancelTimeout("hide"), t.visible = !1, t.currentEl = null;
                },
                innerMouseMove: function(e) {
                    t.onInnerMouseMove(e), e.preventDefault(), e.stopPropagation(), t.cancelTimeout("hide");
                },
                click: function(e) {
                    return !t.elInHint(e.target) && !t.inTarget(e) && t.fastHide();
                },
                elInHint: function(e) {
                    return e && (l.inEl(e, t.hint) || e == t.hint);
                },
                mousemove: function(e) {
                    var n = e.target;
                    if ("IFRAME" != n.tagName) {
                        if (e.detail && e.detail.el && (n = e.detail.el, e = {
                            target: n,
                            clientX: e.detail.e.clientX,
                            clientY: e.detail.e.clientY
                        }), s.isSafari() && "mousemove" == e.type) {
                            if (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) return t.mouseMoveCoordinates = e.x + "-" + e.y;
                            if (t.mouseMoveCoordinates == e.x + "-" + e.y) return;
                        }
                        if (t.elInHint(n)) return t.onmousemove(e, !0), void t.cancelTimeout("show").cancelTimeout("hide");
                        if (!t.inTarget(e)) return t.onmousemove(e, !1), void (t.visible ? t.hide() : t.cancelTimeout("show"));
                        t.onmousemove(e, !0), t.visible || (t.show(e, n).cancelTimeout("hide"), t.currentEl = n);
                    }
                },
                show: function(e, n) {
                    return t.showTimeout ? t : (t.cancelTimeout("hide"), t.showTimeout = setTimeout(function() {
                        this.cancelTimeout("show"), (this.elInHint(n) || this.inTarget(e)) && (this.visible = !0, 
                        this.onshow(n, {
                            pageX: e.pageX,
                            pageY: e.pageY,
                            clientX: e.clientX,
                            clientY: e.clientY
                        }));
                    }.bind(t), t.delay), t);
                },
                hide: function() {
                    return t.hideTimeout ? t : (t.hideTimeout = setTimeout(function() {
                        this.onhide(), this.visible = !1, this.currentEl = null;
                    }.bind(t), t.hideDelay), t);
                },
                cancelTimeout: function(e) {
                    var n = e + "Timeout";
                    return t[n] ? (clearTimeout(t[n]), t[n] = null, t) : t;
                },
                setVisible: function(e) {
                    t.visible = e, t.cancelTimeout("hide");
                }
            });
        };
        n.Hint = u;
    }, {
        "../dom": 184,
        "../util": 259,
        "babel-runtime/helpers/classCallCheck": 28,
        lodash: "lodash"
    } ],
    193: [ function(e, t, n) {
        "use strict";
        function r(e) {
            function t(e) {
                v = e;
            }
            function n() {
                function e() {
                    (y || (y = _.querySelector(f), C.el = y, y)) && (u.listen(window.top, "message", h), 
                    y.srcdoc || r(t), u.addClass(y, "gr-freemium-ifr"), w = !0, C.activated = w);
                }
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s._f;
                w || e();
            }
            function r() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s._f;
                y.setAttribute("srcdoc", window.GR_INLINE_POPUP), u.once.call(y, "load", function() {
                    try {
                        window.ACTIVATE_GR_POPUP(y.contentWindow, y.contentDocument, a), e();
                    } catch (t) {
                        console.error("Cannot activate popup", t), c.call("felog.error", "editor_popup_activation_error", {
                            error: t
                        });
                    }
                });
            }
            function i() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s._f;
                y ? b() : n(e);
            }
            function m(e, t) {
                return k || t ? void p(e) : E.push(e);
            }
            function p(e) {
                e.grammarly = !0;
                try {
                    y.contentWindow.postMessage(e, "*");
                } catch (t) {
                    console.error("wtf", t);
                }
            }
            function h(e) {
                var t = e.data;
                e.origin;
                if (t && t.grammarly) {
                    var n = t.action;
                    if ("user" == n) return b();
                    if (k = !0, "initialized" == n && E) {
                        var r = l.timers.stop("open_editor");
                        r && c.call("statsc.ui.timing", "performance:popup.first.load_time", r), E.forEach(C.send);
                    }
                    var i = l.timers.stop("open_editor");
                    i && c.call("statsc.ui.timing", "performance:popup.load_time", i), "accepted" == n && (E = []), 
                    C.emit("message", t);
                }
            }
            function g() {
                u.unlisten(window.top, "message", h);
            }
            function b() {
                p({
                    action: "user",
                    user: v
                });
            }
            var _ = e.doc, v = e.user, y = void 0, w = void 0, E = [], k = !1, C = o({
                activate: n,
                refresh: i,
                send: m,
                selector: f,
                baseCls: d,
                updateState: t,
                deactivate: g
            });
            return C;
        }
        var i = e("react"), o = e("emitter"), a = e("dompurify"), s = e("../util"), l = e("../timers"), c = e("../tracking"), u = e("../dom"), d = "gr_-ifr", f = "." + d, m = i.createClass({
            displayName: "IframeComponent",
            render: function() {
                return i.createElement("iframe", {
                    className: d + " gr-_dialog-content"
                });
            }
        });
        r.IframeComponent = m, r.baseCls = d, r.selector = f, n.Iframe = r;
    }, {
        "../dom": 184,
        "../timers": 251,
        "../tracking": 255,
        "../util": 259,
        dompurify: "dompurify",
        emitter: "emitter",
        react: "react"
    } ],
    194: [ function(e, t, n) {
        "use strict";
        function r(e) {
            function t(e) {
                var t = e.user;
                r.card && r.card.updateState(t), r.iframe && r.iframe.updateState(t), r.dialog && r.dialog.updateState(t);
            }
            function n() {
                r.iframe && r.iframe.deactivate(), r.dialog && r.dialog.remove(), r.card && r.card.remove(), 
                r.iframe = null, r.dialog = null, r.card = null;
            }
            var r = e.app, s = e.doc, l = void 0 === s ? document : s, c = e.user, u = e.actions, d = r.iframe = i.Iframe({
                doc: l,
                user: c
            });
            return r.dialog = o.Dialog({
                doc: l,
                iframe: d,
                user: c,
                actions: u
            }), r.dialog.render(), r.dialog.preActivate(), r.card = new a.Card({
                doc: l,
                experiments: c.experiments,
                isAnonymous: c.anonymous
            }), {
                clear: n,
                updateState: t
            };
        }
        var i = e("./iframe"), o = e("./dialog"), a = e("./card");
        n.initElements = r;
    }, {
        "./card": 189,
        "./dialog": 190,
        "./iframe": 193
    } ],
    195: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        var i = e("babel-runtime/helpers/defineProperty"), o = r(i), a = e("babel-runtime/core-js/object/get-prototype-of"), s = r(a), l = e("babel-runtime/helpers/classCallCheck"), c = r(l), u = e("babel-runtime/helpers/createClass"), d = r(u), f = e("babel-runtime/helpers/possibleConstructorReturn"), m = r(f), p = e("babel-runtime/helpers/inherits"), h = r(p), g = e("react"), b = e("react"), _ = e("./features"), v = e("./quotes"), y = {
            wrapper: "_2ba6ba-wrapper",
            hide: "_2ba6ba-hide",
            content: "_2ba6ba-content",
            features: "_2ba6ba-features",
            quotes: "_2ba6ba-quotes"
        }, w = e("lib/dom"), E = function(e) {
            function t() {
                (0, c["default"])(this, t);
                var e = (0, m["default"])(this, (t.__proto__ || (0, s["default"])(t)).apply(this, arguments));
                return e.state = {
                    hide: !1
                }, e.onClick = function(t) {
                    return !w.matchesSelector(t.target, "." + y.content + ", ." + y.content + " *") && e.handleClose(t);
                }, e.handleClose = function(t) {
                    t && t.stopPropagation(), e.setState({
                        hide: !0
                    }), setTimeout(function() {
                        return e.props.onClose(t);
                    }, 400);
                }, e;
            }
            return (0, h["default"])(t, e), (0, d["default"])(t, [ {
                key: "render",
                value: function() {
                    return g.createElement("div", {
                        className: w.cs(y.wrapper, (0, o["default"])({}, y.hide, this.state.hide)),
                        onClick: this.onClick
                    }, g.createElement("div", {
                        className: y.content
                    }, g.createElement("div", {
                        className: y.features
                    }, g.createElement(_.Features, {
                        plus: this.props.plus,
                        editor: this.props.editor
                    })), g.createElement("div", {
                        className: y.quotes
                    }, g.createElement(v.Quotes, {
                        onClose: this.handleClose
                    }))));
                }
            } ]), t;
        }(b.Component);
        n.PremiumDialog = E;
    }, {
        "./features": 196,
        "./quotes": 198,
        "babel-runtime/core-js/object/get-prototype-of": 21,
        "babel-runtime/helpers/classCallCheck": 28,
        "babel-runtime/helpers/createClass": 29,
        "babel-runtime/helpers/defineProperty": 30,
        "babel-runtime/helpers/inherits": 32,
        "babel-runtime/helpers/possibleConstructorReturn": 33,
        "lib/dom": 184,
        react: "react"
    } ],
    196: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        var i = e("babel-runtime/core-js/object/get-prototype-of"), o = r(i), a = e("babel-runtime/helpers/classCallCheck"), s = r(a), l = e("babel-runtime/helpers/createClass"), c = r(l), u = e("babel-runtime/helpers/possibleConstructorReturn"), d = r(u), f = e("babel-runtime/helpers/inherits"), m = r(f), p = e("react"), h = e("react"), g = e("grammarly-editor"), b = e("../../config"), _ = e("../../message"), v = e("../../tracking"), y = {
            wrapper: "_7d2e3f-wrapper",
            titleWrapper: "_7d2e3f-titleWrapper",
            plus: "_7d2e3f-plus",
            plusCount: "_7d2e3f-plusCount",
            title: "_7d2e3f-title",
            subtitle: "_7d2e3f-subtitle",
            featuresWrapper: "_7d2e3f-featuresWrapper",
            featureRow: "_7d2e3f-featureRow",
            featureRowContent: "_7d2e3f-featureRowContent",
            featureTypeCol: "_7d2e3f-featureTypeCol",
            featureFreeLabel: "_7d2e3f-featureFreeLabel",
            featureTypeLabel: "_7d2e3f-featureTypeLabel",
            featurePremiumLabel: "_7d2e3f-featurePremiumLabel",
            featureFreeCol: "_7d2e3f-featureFreeCol",
            featurePremiumCol: "_7d2e3f-featurePremiumCol",
            premium: "_7d2e3f-premium",
            freeNope: "_7d2e3f-freeNope",
            freeCheckMark: "_7d2e3f-freeCheckMark",
            premiumCheckMark: "_7d2e3f-premiumCheckMark",
            premiumGift: "_7d2e3f-premiumGift",
            premiumArrow: "_7d2e3f-premiumArrow",
            premiumHover: "_7d2e3f-premiumHover",
            premiumInfo: "_7d2e3f-premiumInfo",
            premiumInfoWrapper: "_7d2e3f-premiumInfoWrapper",
            premiumInfoFeatures: "_7d2e3f-premiumInfoFeatures",
            premiumInfoTitle: "_7d2e3f-premiumInfoTitle",
            btnWrapper: "_7d2e3f-btnWrapper",
            premiumButton: "_7d2e3f-premiumButton",
            inviteWrapper: "_7d2e3f-inviteWrapper",
            inviteTextLabel: "_7d2e3f-inviteTextLabel",
            inviteText: "_7d2e3f-inviteText"
        }, w = p.createElement("span", null, "100+ additional advanced checks", p.createElement("span", {
            className: y.premiumHover
        }, p.createElement("span", {
            className: y.premiumInfo
        }), p.createElement("div", {
            className: y.premiumInfoWrapper
        }, p.createElement("span", {
            className: y.premiumInfoTitle
        }, "Premium comes with these checks:"), p.createElement("span", {
            className: y.premiumInfoFeatures
        }, "Repetitive Words", p.createElement("br", null), "Overused Words", p.createElement("br", null), "No Comma with Coordinate Clauses", p.createElement("br", null), "Better Word Pair", p.createElement("br", null), "Wordiness", p.createElement("br", null), "No Comma with Introductory Clauses", p.createElement("br", null), "Comma Splice", p.createElement("br", null), "Fragment", p.createElement("br", null), "Slang", p.createElement("br", null), "Closing Punctuation", p.createElement("br", null), "Squinting Modifier", p.createElement("br", null), "Adjective Order", p.createElement("br", null), "Sequence of Tenses", p.createElement("br", null), "Lonely Gerund", p.createElement("br", null), "Brevity", p.createElement("br", null), "and many more…")))), E = function(e) {
            function t() {
                (0, s["default"])(this, t);
                var e = (0, d["default"])(this, (t.__proto__ || (0, o["default"])(t)).apply(this, arguments));
                return e.features = [ {
                    text: "150 critical grammar and spelling checks",
                    free: !0,
                    id: 1
                }, {
                    text: w,
                    id: 2
                }, {
                    text: "Vocabulary enhancement suggestions",
                    id: 3
                }, {
                    text: "Genre-specific writing style checks",
                    id: 4
                }, {
                    text: "Sophisticated plagiarism detector",
                    id: 5
                } ], e.goPremium = function() {
                    var t = g.getUpgradeUrlFromMatches({
                        baseUrl: b.URLS.upgrade,
                        returnUrl: "",
                        appType: "popup",
                        matches: e.props.editor.getMatches()
                    });
                    _.emitBackground("open-url", t), v.fire("premium-popup-upgrade-click");
                }, e.goReferral = function() {
                    _.emitBackground("open-url", b.URLS.referral), v.fire("premium-popup-referral-click");
                }, e;
            }
            return (0, m["default"])(t, e), (0, c["default"])(t, [ {
                key: "render",
                value: function() {
                    return p.createElement("div", {
                        className: y.wrapper
                    }, p.createElement("div", {
                        className: y.titleWrapper
                    }, p.createElement("span", {
                        className: y.plus
                    }, "FIX ", p.createElement("span", {
                        className: y.plusCount
                    }, p.createElement("span", null, this.props.plus)), " ADVANCED ISSUE", this.props.plus > 1 && "S", " WITH GRAMMARLY PREMIUM"), p.createElement("span", {
                        className: y.title
                    }, "Take Your Writing to the Next Level"), p.createElement("span", {
                        className: y.subtitle
                    }, "Built by linguists, Grammarly Premium finds and corrects hundreds of", p.createElement("br", null), "complex writing errors — so you don’t have to.")), p.createElement("div", {
                        className: y.featuresWrapper
                    }, p.createElement("div", {
                        className: y.featureRow
                    }, p.createElement("div", {
                        className: y.featureTypeLabel
                    }, "Product features"), p.createElement("div", {
                        className: y.featureFreeLabel
                    }, "Free"), p.createElement("div", {
                        className: y.featurePremiumLabel
                    }, p.createElement("span", {
                        className: y.premium
                    }, "Premium"))), this.features.map(function(e) {
                        var t = e.text, n = e.free, r = e.id;
                        return p.createElement("div", {
                            key: r,
                            className: y.featureRowContent
                        }, p.createElement("div", {
                            className: y.featureTypeCol
                        }, t), p.createElement("div", {
                            className: y.featureFreeCol
                        }, p.createElement("span", {
                            className: n ? y.freeCheckMark : y.freeNope
                        })), p.createElement("div", {
                            className: y.featurePremiumCol
                        }, p.createElement("span", {
                            className: y.premiumCheckMark
                        })));
                    })), p.createElement("div", {
                        className: y.btnWrapper
                    }, p.createElement("div", {
                        className: y.premiumButton,
                        onClick: this.goPremium
                    }, "View Plans"), p.createElement("div", {
                        className: y.inviteWrapper,
                        onClick: this.goReferral
                    }, p.createElement("span", {
                        className: y.premiumGift
                    }), p.createElement("span", {
                        className: y.inviteText
                    }, "Prefer a Test Drive? ", p.createElement("span", {
                        className: y.inviteTextLabel
                    }, "Give Premium, Get Premium")))));
                }
            } ]), t;
        }(h.Component);
        n.Features = E;
    }, {
        "../../config": 180,
        "../../message": 233,
        "../../tracking": 255,
        "babel-runtime/core-js/object/get-prototype-of": 21,
        "babel-runtime/helpers/classCallCheck": 28,
        "babel-runtime/helpers/createClass": 29,
        "babel-runtime/helpers/inherits": 32,
        "babel-runtime/helpers/possibleConstructorReturn": 33,
        "grammarly-editor": "grammarly-editor",
        react: "react"
    } ],
    197: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        var i = e("babel-runtime/core-js/object/get-prototype-of"), o = r(i), a = e("babel-runtime/helpers/classCallCheck"), s = r(a), l = e("babel-runtime/helpers/createClass"), c = r(l), u = e("babel-runtime/helpers/possibleConstructorReturn"), d = r(u), f = e("babel-runtime/helpers/inherits"), m = r(f), p = e("react"), h = e("react-dom"), g = e("emitter"), b = e("lib/util"), _ = e("./dialog"), v = function(e) {
            function t(e) {
                var n = e.container, r = e.doc, i = e.plus, a = e.editor;
                (0, s["default"])(this, t);
                var l = (0, d["default"])(this, (t.__proto__ || (0, o["default"])(t)).call(this));
                return l.dialogComponent = null, l.onClose = function() {
                    l.emit("hide"), l.remove();
                }, l.remove = function() {
                    return l.container.parentNode.removeChild(l.container);
                }, l.container = n, l.doc = r, l.editor = a, l.plus = i, l.render(), l;
            }
            return (0, m["default"])(t, e), (0, c["default"])(t, [ {
                key: "checkContainer",
                value: function() {
                    this.container || (this.container = this.doc.createElement("premium_dialog"), this.doc.documentElement.appendChild(this.container));
                }
            }, {
                key: "render",
                value: function() {
                    this.checkContainer(), this.dialogComponent = h.render(p.createElement(_.PremiumDialog, {
                        onClose: this.onClose,
                        plus: this.plus,
                        editor: this.editor
                    }), this.container);
                }
            } ]), t;
        }(b.createClass(g));
        n.PremiumDialog = v;
    }, {
        "./dialog": 195,
        "babel-runtime/core-js/object/get-prototype-of": 21,
        "babel-runtime/helpers/classCallCheck": 28,
        "babel-runtime/helpers/createClass": 29,
        "babel-runtime/helpers/inherits": 32,
        "babel-runtime/helpers/possibleConstructorReturn": 33,
        emitter: "emitter",
        "lib/util": 259,
        react: "react",
        "react-dom": "react-dom"
    } ],
    198: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        var i = e("babel-runtime/core-js/object/get-prototype-of"), o = r(i), a = e("babel-runtime/helpers/classCallCheck"), s = r(a), l = e("babel-runtime/helpers/createClass"), c = r(l), u = e("babel-runtime/helpers/possibleConstructorReturn"), d = r(u), f = e("babel-runtime/helpers/inherits"), m = r(f), p = e("react"), h = e("react"), g = {
            wrapper: "_884a1d-wrapper",
            crossWrapper: "_884a1d-crossWrapper",
            cross: "_884a1d-cross",
            quote: "_884a1d-quote",
            text: "_884a1d-text",
            firstAuthor: "_884a1d-firstAuthor",
            secondAuthor: "_884a1d-secondAuthor",
            firstAuthorAvatar: "_884a1d-firstAuthorAvatar",
            secondAuthorAvatar: "_884a1d-secondAuthorAvatar"
        }, b = function(e) {
            function t() {
                return (0, s["default"])(this, t), (0, d["default"])(this, (t.__proto__ || (0, o["default"])(t)).apply(this, arguments));
            }
            return (0, m["default"])(t, e), (0, c["default"])(t, [ {
                key: "render",
                value: function() {
                    return p.createElement("div", {
                        className: g.wrapper
                    }, p.createElement("div", {
                        className: g.crossWrapper,
                        onClick: this.props.onClose
                    }, p.createElement("div", {
                        className: g.cross
                    })), p.createElement("div", {
                        className: g.quotesWrapper
                    }, p.createElement("div", {
                        className: g.quote
                    }, p.createElement("span", {
                        className: g.text
                    }, "“Thinking about getting #grammarly? DO IT. I'm 100% sold. I bought a month of their premium service, about to extend for a year.”"), p.createElement("span", {
                        className: g.firstAuthorAvatar
                    }), p.createElement("span", {
                        className: g.firstAuthor
                    }, "J. M. Bush, Author")), p.createElement("div", null, p.createElement("span", {
                        className: g.text
                    }, "“Immediately purchased \u2028the premium version of @grammarly after using it \u2028for a single piece of text. Highly recommended.”"), p.createElement("span", {
                        className: g.secondAuthorAvatar
                    }), p.createElement("span", {
                        className: g.secondAuthor
                    }, "Lara Littlefield, Software Engineer"))));
                }
            } ]), t;
        }(h.Component);
        n.Quotes = b;
    }, {
        "babel-runtime/core-js/object/get-prototype-of": 21,
        "babel-runtime/helpers/classCallCheck": 28,
        "babel-runtime/helpers/createClass": 29,
        "babel-runtime/helpers/inherits": 32,
        "babel-runtime/helpers/possibleConstructorReturn": 33,
        react: "react"
    } ],
    199: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        var i = e("babel-runtime/helpers/defineProperty"), o = r(i), a = e("babel-runtime/core-js/object/get-prototype-of"), s = r(a), l = e("babel-runtime/helpers/classCallCheck"), c = r(l), u = e("babel-runtime/helpers/createClass"), d = r(u), f = e("babel-runtime/helpers/possibleConstructorReturn"), m = r(f), p = e("babel-runtime/helpers/inherits"), h = r(p), g = e("react"), b = e("lib/dom"), _ = e("lib/spinner"), v = {
            button_container: "_578484-button_container",
            button_spinner: "_578484-button_spinner",
            button: "_578484-button",
            loading: "_578484-loading"
        }, y = function(e) {
            function t() {
                (0, c["default"])(this, t);
                var e = (0, m["default"])(this, (t.__proto__ || (0, s["default"])(t)).apply(this, arguments));
                return e.onClick = function(t) {
                    t.preventDefault(), e.props.loading || e.props.onClick(t);
                }, e;
            }
            return (0, h["default"])(t, e), (0, d["default"])(t, [ {
                key: "render",
                value: function() {
                    var e, t = this.props.loading, n = t ? "" : this.props.text, r = b.cs((e = {}, (0, 
                    o["default"])(e, v.button_container, !0), (0, o["default"])(e, v.loading, t), e));
                    return g.createElement("div", {
                        className: r
                    }, t && g.createElement(_.SpinnerComponent, {
                        className: v.button_spinner
                    }), g.createElement("button", {
                        type: "button",
                        onClick: this.onClick,
                        className: v.button
                    }, n));
                }
            } ]), t;
        }(g.Component);
        n.Button = y;
    }, {
        "babel-runtime/core-js/object/get-prototype-of": 21,
        "babel-runtime/helpers/classCallCheck": 28,
        "babel-runtime/helpers/createClass": 29,
        "babel-runtime/helpers/defineProperty": 30,
        "babel-runtime/helpers/inherits": 32,
        "babel-runtime/helpers/possibleConstructorReturn": 33,
        "lib/dom": 184,
        "lib/spinner": 244,
        react: "react"
    } ],
    200: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        var i = e("babel-runtime/helpers/extends"), o = r(i), a = e("babel-runtime/core-js/object/get-prototype-of"), s = r(a), l = e("babel-runtime/helpers/classCallCheck"), c = r(l), u = e("babel-runtime/helpers/createClass"), d = r(u), f = e("babel-runtime/helpers/possibleConstructorReturn"), m = r(f), p = e("babel-runtime/helpers/inherits"), h = r(p), g = e("react"), b = {
            signin_dialog: "_074fdf-signin_dialog",
            view_container: "_074fdf-view_container",
            view: "_074fdf-view",
            view_register: "_074fdf-view_register",
            personalized: "_074fdf-personalized",
            register: "_074fdf-register",
            view_welcome: "_074fdf-view_welcome",
            welcome: "_074fdf-welcome",
            view_login: "_074fdf-view_login",
            login: "_074fdf-login",
            view_keep_register: "_074fdf-view_keep_register",
            view_login_success: "_074fdf-view_login_success",
            login_success: "_074fdf-login_success",
            login_name: "_074fdf-login_name",
            login_success_label: "_074fdf-login_success_label",
            windows: "_074fdf-windows",
            footer: "_074fdf-footer",
            navigation: "_074fdf-navigation",
            loading: "_074fdf-loading",
            navigation_item: "_074fdf-navigation_item",
            validation: "_074fdf-validation",
            hide: "_074fdf-hide",
            content: "_074fdf-content",
            inputs: "_074fdf-inputs",
            title: "_074fdf-title",
            personalizedTitle: "_074fdf-personalizedTitle",
            personalizedTitleSub: "_074fdf-personalizedTitleSub",
            btn_close: "_074fdf-btn_close",
            navigation_split: "_074fdf-navigation_split",
            hidden: "_074fdf-hidden",
            fakefield: "_074fdf-fakefield"
        }, _ = e("./input"), v = [ {
            label: "Name",
            name: "name",
            type: "text"
        }, {
            label: "Email",
            name: "email",
            type: "text"
        }, {
            label: "Password",
            name: "password",
            type: "password"
        } ], y = function(e) {
            function t() {
                (0, c["default"])(this, t);
                var e = (0, m["default"])(this, (t.__proto__ || (0, s["default"])(t)).apply(this, arguments));
                return e.render = function() {
                    return g.createElement("fieldset", {
                        className: b.inputs
                    }, g.createElement("input", {
                        className: b.hidden,
                        type: "text",
                        name: "fakeusernameremembered"
                    }), g.createElement("input", {
                        className: b.hidden,
                        type: "password",
                        name: "fakepasswordremembered"
                    }), v.filter(function(t) {
                        var n = t.name;
                        return e.props.fields.includes(n);
                    }).map(function(t, n) {
                        return g.createElement(_.Input, (0, o["default"])({}, t, {
                            ref: t.name,
                            onSet: e.props.onSet(t.name),
                            value: e.props.formData[t.name],
                            validation: e.props.validation[t.name],
                            onValidate: e.props.onValidate(t.name),
                            forceValidation: e.props.forceValidation,
                            key: n
                        }));
                    }));
                }, e;
            }
            return (0, h["default"])(t, e), (0, d["default"])(t, [ {
                key: "setFocus",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props.fields[0];
                    this.refs[e].refs.input.focus();
                }
            } ]), t;
        }(g.Component);
        n.Fieldset = y;
    }, {
        "./input": 203,
        "babel-runtime/core-js/object/get-prototype-of": 21,
        "babel-runtime/helpers/classCallCheck": 28,
        "babel-runtime/helpers/createClass": 29,
        "babel-runtime/helpers/extends": 31,
        "babel-runtime/helpers/inherits": 32,
        "babel-runtime/helpers/possibleConstructorReturn": 33,
        react: "react"
    } ],
    201: [ function(e, t, n) {
        "use strict";
        var r = e("react"), i = {
            signin_dialog: "_074fdf-signin_dialog",
            view_container: "_074fdf-view_container",
            view: "_074fdf-view",
            view_register: "_074fdf-view_register",
            personalized: "_074fdf-personalized",
            register: "_074fdf-register",
            view_welcome: "_074fdf-view_welcome",
            welcome: "_074fdf-welcome",
            view_login: "_074fdf-view_login",
            login: "_074fdf-login",
            view_keep_register: "_074fdf-view_keep_register",
            view_login_success: "_074fdf-view_login_success",
            login_success: "_074fdf-login_success",
            login_name: "_074fdf-login_name",
            login_success_label: "_074fdf-login_success_label",
            windows: "_074fdf-windows",
            footer: "_074fdf-footer",
            navigation: "_074fdf-navigation",
            loading: "_074fdf-loading",
            navigation_item: "_074fdf-navigation_item",
            validation: "_074fdf-validation",
            hide: "_074fdf-hide",
            content: "_074fdf-content",
            inputs: "_074fdf-inputs",
            title: "_074fdf-title",
            personalizedTitle: "_074fdf-personalizedTitle",
            personalizedTitleSub: "_074fdf-personalizedTitleSub",
            btn_close: "_074fdf-btn_close",
            navigation_split: "_074fdf-navigation_split",
            hidden: "_074fdf-hidden",
            fakefield: "_074fdf-fakefield"
        }, o = e("lib/config");
        n.Footer = function() {
            return r.createElement("div", {
                className: i.footer
            }, "By signing up, you agree to our ", r.createElement("a", {
                tabIndex: "-1",
                target: "__blank",
                href: o.URLS.terms
            }, "Terms and Conditions"), " and ", r.createElement("a", {
                tabIndex: "-1",
                target: "__blank",
                href: o.URLS.policy
            }, "Privacy ", r.createElement("br", null), " Policy"), ". You also agree to receive product-related emails from ", r.createElement("br", null), "Grammarly, which you can unsubscribe from at any time.");
        };
    }, {
        "lib/config": 180,
        react: "react"
    } ],
    202: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        var i = e("babel-runtime/regenerator"), o = r(i), a = e("babel-runtime/core-js/object/keys"), s = r(a), l = e("babel-runtime/core-js/object/assign"), c = r(l), u = e("babel-runtime/helpers/defineProperty"), d = r(u), f = e("babel-runtime/core-js/object/get-prototype-of"), m = r(f), p = e("babel-runtime/helpers/classCallCheck"), h = r(p), g = e("babel-runtime/helpers/createClass"), b = r(g), _ = e("babel-runtime/helpers/possibleConstructorReturn"), v = r(_), y = e("babel-runtime/helpers/inherits"), w = r(y), E = e("babel-runtime/core-js/promise"), k = r(E), C = function(e, t, n, r) {
            return new (n || (n = k["default"]))(function(i, o) {
                function a(e) {
                    try {
                        l(r.next(e));
                    } catch (t) {
                        o(t);
                    }
                }
                function s(e) {
                    try {
                        l(r["throw"](e));
                    } catch (t) {
                        o(t);
                    }
                }
                function l(e) {
                    e.done ? i(e.value) : new n(function(t) {
                        t(e.value);
                    }).then(a, s);
                }
                l((r = r.apply(e, t)).next());
            });
        }, x = e("react"), T = e("react-dom"), S = e("lib/config"), j = e("lib/util"), N = e("lib/dom"), I = e("lib/message"), A = e("./signin-dialog"), D = e("lib/tracking"), P = e("emitter"), L = {
            signin_dialog: "_074fdf-signin_dialog",
            view_container: "_074fdf-view_container",
            view: "_074fdf-view",
            view_register: "_074fdf-view_register",
            personalized: "_074fdf-personalized",
            register: "_074fdf-register",
            view_welcome: "_074fdf-view_welcome",
            welcome: "_074fdf-welcome",
            view_login: "_074fdf-view_login",
            login: "_074fdf-login",
            view_keep_register: "_074fdf-view_keep_register",
            view_login_success: "_074fdf-view_login_success",
            login_success: "_074fdf-login_success",
            login_name: "_074fdf-login_name",
            login_success_label: "_074fdf-login_success_label",
            windows: "_074fdf-windows",
            footer: "_074fdf-footer",
            navigation: "_074fdf-navigation",
            loading: "_074fdf-loading",
            navigation_item: "_074fdf-navigation_item",
            validation: "_074fdf-validation",
            hide: "_074fdf-hide",
            content: "_074fdf-content",
            inputs: "_074fdf-inputs",
            title: "_074fdf-title",
            personalizedTitle: "_074fdf-personalizedTitle",
            personalizedTitleSub: "_074fdf-personalizedTitleSub",
            btn_close: "_074fdf-btn_close",
            navigation_split: "_074fdf-navigation_split",
            hidden: "_074fdf-hidden",
            fakefield: "_074fdf-fakefield"
        }, M = function(e) {
            function t(e) {
                var n = e.doc, r = e.container, i = e.view, o = void 0 === i ? "register" : i, a = e.user;
                (0, h["default"])(this, t);
                var s = (0, v["default"])(this, (t.__proto__ || (0, m["default"])(t)).call(this));
                return s.loading = !1, s.dialogComponent = null, s.formData = {
                    name: null,
                    email: null,
                    password: null
                }, s.updateUser = function(e) {
                    s.user = e, s.render();
                }, s.setView = function(e, t) {
                    "login_success" != e && (s.formData = s.getFormData("password")), "login" != e && "register" != e || (s.formData.password = null), 
                    s.forceValidation = !1, s.view = e, s.validation = {}, s.render(), "string" != typeof t && (t = void 0), 
                    s.dialogComponent.setFocus(e, t);
                }, s.validationMessages = {
                    fail: "Something went wrong. Please try again later.",
                    invalidUser: "Invalid email address/password combination.",
                    required: "Required",
                    shortPassword: "Must be >5 characters",
                    incorrectEmail: "Incorrect",
                    emailExists: 'Already in use. Do you need to <a data-view="login">Log in</a>?'
                }, s.onValidate = function(e) {
                    return function(t) {
                        s.validation[e] = s.validate((0, d["default"])({}, e, t))[e], delete s.validation.error, 
                        s.render();
                    };
                }, s.onSet = function(e) {
                    return function(t) {
                        s.formData = (0, c["default"])({}, s.formData, (0, d["default"])({}, e, t)), s.render();
                    };
                }, s.getFormData = function(e) {
                    var t = (0, c["default"])({}, s.formData);
                    return t.hasOwnProperty(e) && delete t[e], t;
                }, s.onClose = function() {
                    s.emit("hide"), s.remove();
                }, s.onGoPremium = function() {
                    D.fire("upgrade-after-register"), I.emitBackground("open-url", S.URLS.upgrade);
                }, s.onLogin = function() {
                    return s.onAuth("signin", s.getFormData("name"));
                }, s.onSignup = function() {
                    return s.onAuth("signup", s.getFormData());
                }, s.onGoLogin = function(e) {
                    return s.setView("login", e);
                }, s.onGoRegister = function() {
                    return s.setView("register");
                }, s.onSubmit = function() {
                    s.loading || ("welcome" == s.view ? s.onClose() : "login" == s.view ? s.onLogin() : "register" == s.view && s.onSignup());
                }, s.onKey = function(e) {
                    if (delete s.validation.error, 27 == j.keyCode(e) && s.onClose(), 13 == j.keyCode(e)) {
                        var t = e.target;
                        if ("A" == t.tagName) return;
                        var n = N.matchesSelector(t, "." + L.navigation_item);
                        n ? "login" == s.view ? s.onGoRegister() : "register" == s.view && s.onGoLogin() : s.onSubmit();
                    }
                }, s.doc = n, s.user = a, s.container = r, s.setView(o), s;
            }
            return (0, w["default"])(t, e), (0, b["default"])(t, [ {
                key: "validate",
                value: function(e) {
                    var t = this, n = (0, s["default"])(e).reduce(function(n, r) {
                        var i = e[r];
                        return i && "" != i ? ("password" == r && "register" == t.view && i.length < 6 && (n[r] = t.validationMessages.shortPassword), 
                        "email" != r || j.isValidEmail(i) || (n[r] = t.validationMessages.incorrectEmail), 
                        n) : (n[r] = t.validationMessages.required, n);
                    }, {});
                    return n._valid = 0 == (0, s["default"])(n).length, n;
                }
            }, {
                key: "extendWithServerValidation",
                value: function(e, t) {
                    return t.error ? (e._valid = !1, "Conflict" == t.error ? (e.email = this.validationMessages.emailExists, 
                    e) : "Unauthorized" == t.error ? (e.error = this.validationMessages.invalidUser, 
                    e) : (e.error = this.validationMessages.fail, e)) : (e._valid = !0, e);
                }
            }, {
                key: "onAuth",
                value: function(e, t) {
                    return C(this, void 0, void 0, o["default"].mark(function n() {
                        var r, i;
                        return o["default"].wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                if (this.validation = this.validate(t), this.forceValidation = !0, !this.validation._valid) {
                                    n.next = 18;
                                    break;
                                }
                                return this.loading = !0, this.render(), r = void 0, n.prev = 6, n.next = 9, I.promiseBackground(e, t);

                              case 9:
                                r = n.sent, n.next = 16;
                                break;

                              case 12:
                                n.prev = 12, n.t0 = n["catch"](6), n.t0.message && n.t0.message.includes("rejected by timeout") && D.call("felog.error", "stability.cant_connect_to_bg_page_during_login"), 
                                r = {
                                    error: !0
                                };

                              case 16:
                                this.validation = this.extendWithServerValidation(this.validation, r), this.validation._valid || D.fire(e + "-error", this.validation);

                              case 18:
                                if (this.loading = !1, !this.validation._valid) {
                                    n.next = 22;
                                    break;
                                }
                                return i = "signup" == e ? "welcome" : "login_success", n.abrupt("return", this.setView(i));

                              case 22:
                                this.render();

                              case 23:
                              case "end":
                                return n.stop();
                            }
                        }, n, this, [ [ 6, 12 ] ]);
                    }));
                }
            }, {
                key: "checkContainer",
                value: function() {
                    this.container || (this.container = this.doc.createElement("signin_dialog"), this.doc.documentElement.appendChild(this.container), 
                    N.listen(this.doc.defaultView, "keydown", this.onKey));
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.user;
                    this.checkContainer(), this.dialogComponent = T.render(x.createElement(A.SigninDialogComponent, {
                        username: e.firstName,
                        isPersonalization: e.experiments && (e.experiments.inlineCards || e.experiments.inlineCardsPimple),
                        formData: this.formData,
                        onSet: this.onSet,
                        onGoPremium: this.onGoPremium,
                        onSubmit: this.onSubmit,
                        onGoLogin: this.onGoLogin,
                        onGoRegister: this.onGoRegister,
                        onClose: this.onClose,
                        view: this.view,
                        validation: this.validation,
                        forceValidation: this.forceValidation,
                        onValidate: this.onValidate,
                        loading: this.loading
                    }), this.container);
                }
            }, {
                key: "remove",
                value: function() {
                    N.unlisten(this.doc.defaultView, "keydown", this.onKey), this.container.parentNode.removeChild(this.container);
                }
            } ]), t;
        }(j.createClass(P));
        n.SigninDialog = M;
    }, {
        "./signin-dialog": 207,
        "babel-runtime/core-js/object/assign": 18,
        "babel-runtime/core-js/object/get-prototype-of": 21,
        "babel-runtime/core-js/object/keys": 22,
        "babel-runtime/core-js/promise": 25,
        "babel-runtime/helpers/classCallCheck": 28,
        "babel-runtime/helpers/createClass": 29,
        "babel-runtime/helpers/defineProperty": 30,
        "babel-runtime/helpers/inherits": 32,
        "babel-runtime/helpers/possibleConstructorReturn": 33,
        "babel-runtime/regenerator": 155,
        emitter: "emitter",
        "lib/config": 180,
        "lib/dom": 184,
        "lib/message": 233,
        "lib/tracking": 255,
        "lib/util": 259,
        react: "react",
        "react-dom": "react-dom"
    } ],
    203: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        var i = e("babel-runtime/core-js/object/get-prototype-of"), o = r(i), a = e("babel-runtime/helpers/classCallCheck"), s = r(a), l = e("babel-runtime/helpers/createClass"), c = r(l), u = e("babel-runtime/helpers/possibleConstructorReturn"), d = r(u), f = e("babel-runtime/helpers/inherits"), m = r(f), p = e("react"), h = e("lib/util"), g = {
            input: "_5517df-input",
            label: "_5517df-label",
            input_element: "_5517df-input_element",
            validation: "_5517df-validation"
        }, b = function(e) {
            function t() {
                (0, s["default"])(this, t);
                var e = (0, d["default"])(this, (t.__proto__ || (0, o["default"])(t)).apply(this, arguments));
                return e.id = h.guid(), e.state = {
                    cancelValidation: !0,
                    dirty: !1
                }, e.onBlur = function() {
                    e.setState({
                        cancelValidation: !1
                    }), e.props.onValidate(e.value);
                }, e.onChange = function() {
                    e.setState({
                        cancelValidation: !0,
                        dirty: !0
                    }), e.props.onSet(e.value);
                }, e;
            }
            return (0, m["default"])(t, e), (0, c["default"])(t, [ {
                key: "getValidation",
                value: function() {
                    return (this.props.validation && !this.state.cancelValidation && this.state.dirty || this.props.forceValidation) && p.createElement("div", {
                        className: g.validation,
                        dangerouslySetInnerHTML: {
                            __html: this.props.validation
                        }
                    });
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props, t = e.name, n = e.type, r = e.label, i = e.value, o = {
                        name: t,
                        type: n,
                        value: i,
                        id: this.id,
                        ref: "input",
                        required: "required",
                        spellCheck: !1,
                        onBlur: this.onBlur,
                        onChange: this.onChange,
                        className: g.input_element
                    };
                    return p.createElement("div", {
                        className: g.input
                    }, this.getValidation(), p.createElement("input", o), p.createElement("label", {
                        htmlFor: this.id,
                        className: g.label
                    }, r));
                }
            }, {
                key: "value",
                get: function() {
                    return this.refs.input.value;
                }
            } ]), t;
        }(p.Component);
        n.Input = b;
    }, {
        "babel-runtime/core-js/object/get-prototype-of": 21,
        "babel-runtime/helpers/classCallCheck": 28,
        "babel-runtime/helpers/createClass": 29,
        "babel-runtime/helpers/inherits": 32,
        "babel-runtime/helpers/possibleConstructorReturn": 33,
        "lib/util": 259,
        react: "react"
    } ],
    204: [ function(e, t, n) {
        "use strict";
        var r = e("react"), i = {
            signin_dialog: "_074fdf-signin_dialog",
            view_container: "_074fdf-view_container",
            view: "_074fdf-view",
            view_register: "_074fdf-view_register",
            personalized: "_074fdf-personalized",
            register: "_074fdf-register",
            view_welcome: "_074fdf-view_welcome",
            welcome: "_074fdf-welcome",
            view_login: "_074fdf-view_login",
            login: "_074fdf-login",
            view_keep_register: "_074fdf-view_keep_register",
            view_login_success: "_074fdf-view_login_success",
            login_success: "_074fdf-login_success",
            login_name: "_074fdf-login_name",
            login_success_label: "_074fdf-login_success_label",
            windows: "_074fdf-windows",
            footer: "_074fdf-footer",
            navigation: "_074fdf-navigation",
            loading: "_074fdf-loading",
            navigation_item: "_074fdf-navigation_item",
            validation: "_074fdf-validation",
            hide: "_074fdf-hide",
            content: "_074fdf-content",
            inputs: "_074fdf-inputs",
            title: "_074fdf-title",
            personalizedTitle: "_074fdf-personalizedTitle",
            personalizedTitleSub: "_074fdf-personalizedTitleSub",
            btn_close: "_074fdf-btn_close",
            navigation_split: "_074fdf-navigation_split",
            hidden: "_074fdf-hidden",
            fakefield: "_074fdf-fakefield"
        };
        n.LoginSuccess = function(e) {
            var t = e.isAutoClose, n = e.onClose, o = e.username;
            return t && n && setTimeout(n, 1500), o ? r.createElement("div", {
                className: i.login_success_label
            }, "Welcome back, ", r.createElement("span", {
                className: i.login_name
            }, o), "!") : r.createElement("div", {
                className: i.login_success_label
            }, "Welcome back!");
        };
    }, {
        react: "react"
    } ],
    205: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        var i = e("babel-runtime/helpers/extends"), o = r(i), a = e("babel-runtime/core-js/object/get-prototype-of"), s = r(a), l = e("babel-runtime/helpers/classCallCheck"), c = r(l), u = e("babel-runtime/helpers/createClass"), d = r(u), f = e("babel-runtime/helpers/possibleConstructorReturn"), m = r(f), p = e("babel-runtime/helpers/inherits"), h = r(p), g = e("react"), b = e("lib/config"), _ = e("./fieldset"), v = e("./button"), y = {
            signin_dialog: "_074fdf-signin_dialog",
            view_container: "_074fdf-view_container",
            view: "_074fdf-view",
            view_register: "_074fdf-view_register",
            personalized: "_074fdf-personalized",
            register: "_074fdf-register",
            view_welcome: "_074fdf-view_welcome",
            welcome: "_074fdf-welcome",
            view_login: "_074fdf-view_login",
            login: "_074fdf-login",
            view_keep_register: "_074fdf-view_keep_register",
            view_login_success: "_074fdf-view_login_success",
            login_success: "_074fdf-login_success",
            login_name: "_074fdf-login_name",
            login_success_label: "_074fdf-login_success_label",
            windows: "_074fdf-windows",
            footer: "_074fdf-footer",
            navigation: "_074fdf-navigation",
            loading: "_074fdf-loading",
            navigation_item: "_074fdf-navigation_item",
            validation: "_074fdf-validation",
            hide: "_074fdf-hide",
            content: "_074fdf-content",
            inputs: "_074fdf-inputs",
            title: "_074fdf-title",
            personalizedTitle: "_074fdf-personalizedTitle",
            personalizedTitleSub: "_074fdf-personalizedTitleSub",
            btn_close: "_074fdf-btn_close",
            navigation_split: "_074fdf-navigation_split",
            hidden: "_074fdf-hidden",
            fakefield: "_074fdf-fakefield"
        }, w = function(e) {
            function t() {
                (0, c["default"])(this, t);
                var e = (0, m["default"])(this, (t.__proto__ || (0, s["default"])(t)).apply(this, arguments));
                return e.fields = [ "email", "password" ], e.focusForm = function(t) {
                    return function(n) {
                        "start" == t && e.setFocus(), "end" == t && e.refs.end.focus();
                    };
                }, e.render = function() {
                    return g.createElement("form", null, g.createElement("div", {
                        className: y.title
                    }, "Member Login"), g.createElement("input", {
                        className: y.fakefield,
                        type: "text",
                        name: "fakeformstart",
                        onFocus: e.focusForm("end")
                    }), g.createElement(_.Fieldset, (0, o["default"])({
                        ref: "fieldset",
                        fields: e.fields
                    }, e.props)), g.createElement(v.Button, {
                        loading: e.props.loading,
                        text: "Log In",
                        onClick: e.props.onSubmit
                    }), g.createElement("div", {
                        className: y.navigation
                    }, g.createElement("span", {
                        tabIndex: "0",
                        onClick: e.props.onGoRegister,
                        className: y.navigation_item
                    }, "Don’t have an account?"), g.createElement("span", {
                        className: y.navigation_split
                    }, "·"), g.createElement("a", {
                        target: "__blank",
                        href: b.URLS.resetPassword,
                        ref: "end",
                        className: y.navigation_item
                    }, "Forgot password?")), g.createElement("input", {
                        className: y.fakefield,
                        type: "text",
                        name: "fakeformend",
                        onFocus: e.focusForm("start")
                    }));
                }, e;
            }
            return (0, h["default"])(t, e), (0, d["default"])(t, [ {
                key: "setFocus",
                value: function(e) {
                    this.refs.fieldset.setFocus(e);
                }
            } ]), t;
        }(g.Component);
        n.Login = w;
    }, {
        "./button": 199,
        "./fieldset": 200,
        "babel-runtime/core-js/object/get-prototype-of": 21,
        "babel-runtime/helpers/classCallCheck": 28,
        "babel-runtime/helpers/createClass": 29,
        "babel-runtime/helpers/extends": 31,
        "babel-runtime/helpers/inherits": 32,
        "babel-runtime/helpers/possibleConstructorReturn": 33,
        "lib/config": 180,
        react: "react"
    } ],
    206: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        var i = e("babel-runtime/helpers/extends"), o = r(i), a = e("babel-runtime/core-js/object/get-prototype-of"), s = r(a), l = e("babel-runtime/helpers/classCallCheck"), c = r(l), u = e("babel-runtime/helpers/createClass"), d = r(u), f = e("babel-runtime/helpers/possibleConstructorReturn"), m = r(f), p = e("babel-runtime/helpers/inherits"), h = r(p), g = e("react"), b = e("./button"), _ = e("./footer"), v = e("./fieldset"), y = {
            signin_dialog: "_074fdf-signin_dialog",
            view_container: "_074fdf-view_container",
            view: "_074fdf-view",
            view_register: "_074fdf-view_register",
            personalized: "_074fdf-personalized",
            register: "_074fdf-register",
            view_welcome: "_074fdf-view_welcome",
            welcome: "_074fdf-welcome",
            view_login: "_074fdf-view_login",
            login: "_074fdf-login",
            view_keep_register: "_074fdf-view_keep_register",
            view_login_success: "_074fdf-view_login_success",
            login_success: "_074fdf-login_success",
            login_name: "_074fdf-login_name",
            login_success_label: "_074fdf-login_success_label",
            windows: "_074fdf-windows",
            footer: "_074fdf-footer",
            navigation: "_074fdf-navigation",
            loading: "_074fdf-loading",
            navigation_item: "_074fdf-navigation_item",
            validation: "_074fdf-validation",
            hide: "_074fdf-hide",
            content: "_074fdf-content",
            inputs: "_074fdf-inputs",
            title: "_074fdf-title",
            personalizedTitle: "_074fdf-personalizedTitle",
            personalizedTitleSub: "_074fdf-personalizedTitleSub",
            btn_close: "_074fdf-btn_close",
            navigation_split: "_074fdf-navigation_split",
            hidden: "_074fdf-hidden",
            fakefield: "_074fdf-fakefield"
        }, w = function(e) {
            function t() {
                (0, c["default"])(this, t);
                var e = (0, m["default"])(this, (t.__proto__ || (0, s["default"])(t)).apply(this, arguments));
                return e.fields = [ "name", "email", "password" ], e.focusForm = function(t) {
                    return function(n) {
                        "start" == t && e.setFocus(), "end" == t && e.refs.end.focus();
                    };
                }, e.render = function() {
                    return g.createElement("form", null, e.props.isPersonalization ? g.createElement("div", {
                        className: y.personalizedTitle
                    }, "Personalize Grammarly", g.createElement("div", {
                        className: y.personalizedTitleSub
                    }, "to your writing needs")) : g.createElement("div", {
                        className: y.title
                    }, "Create an Account"), g.createElement("input", {
                        className: y.fakefield,
                        type: "text",
                        name: "fakeformstart",
                        onFocus: e.focusForm("end")
                    }), g.createElement(v.Fieldset, (0, o["default"])({
                        ref: "fieldset",
                        fields: e.fields
                    }, e.props)), g.createElement(b.Button, {
                        loading: e.props.loading,
                        onClick: e.props.onSubmit,
                        text: "Sign Up"
                    }), g.createElement("div", {
                        className: y.navigation
                    }, g.createElement("span", {
                        tabIndex: "0",
                        ref: "end",
                        onClick: e.props.onGoLogin,
                        className: y.navigation_item
                    }, "Already have an account?")), g.createElement(_.Footer, null), g.createElement("input", {
                        className: y.fakefield,
                        type: "text",
                        name: "fakeformend",
                        onFocus: e.focusForm("start")
                    }));
                }, e;
            }
            return (0, h["default"])(t, e), (0, d["default"])(t, [ {
                key: "setFocus",
                value: function(e) {
                    this.refs.fieldset.setFocus(e);
                }
            } ]), t;
        }(g.Component);
        n.Register = w;
    }, {
        "./button": 199,
        "./fieldset": 200,
        "./footer": 201,
        "babel-runtime/core-js/object/get-prototype-of": 21,
        "babel-runtime/helpers/classCallCheck": 28,
        "babel-runtime/helpers/createClass": 29,
        "babel-runtime/helpers/extends": 31,
        "babel-runtime/helpers/inherits": 32,
        "babel-runtime/helpers/possibleConstructorReturn": 33,
        react: "react"
    } ],
    207: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        var i = e("babel-runtime/helpers/defineProperty"), o = r(i), a = e("babel-runtime/core-js/object/get-prototype-of"), s = r(a), l = e("babel-runtime/helpers/classCallCheck"), c = r(l), u = e("babel-runtime/helpers/createClass"), d = r(u), f = e("babel-runtime/helpers/possibleConstructorReturn"), m = r(f), p = e("babel-runtime/helpers/inherits"), h = r(p), g = e("react"), b = e("lib/util"), _ = e("lib/dom"), v = e("./login"), y = e("./welcome"), w = e("./register"), E = e("./login-success"), k = {
            signin_dialog: "_074fdf-signin_dialog",
            view_container: "_074fdf-view_container",
            view: "_074fdf-view",
            view_register: "_074fdf-view_register",
            personalized: "_074fdf-personalized",
            register: "_074fdf-register",
            view_welcome: "_074fdf-view_welcome",
            welcome: "_074fdf-welcome",
            view_login: "_074fdf-view_login",
            login: "_074fdf-login",
            view_keep_register: "_074fdf-view_keep_register",
            view_login_success: "_074fdf-view_login_success",
            login_success: "_074fdf-login_success",
            login_name: "_074fdf-login_name",
            login_success_label: "_074fdf-login_success_label",
            windows: "_074fdf-windows",
            footer: "_074fdf-footer",
            navigation: "_074fdf-navigation",
            loading: "_074fdf-loading",
            navigation_item: "_074fdf-navigation_item",
            validation: "_074fdf-validation",
            hide: "_074fdf-hide",
            content: "_074fdf-content",
            inputs: "_074fdf-inputs",
            title: "_074fdf-title",
            personalizedTitle: "_074fdf-personalizedTitle",
            personalizedTitleSub: "_074fdf-personalizedTitleSub",
            btn_close: "_074fdf-btn_close",
            navigation_split: "_074fdf-navigation_split",
            hidden: "_074fdf-hidden",
            fakefield: "_074fdf-fakefield"
        }, C = function(e) {
            function t() {
                (0, c["default"])(this, t);
                var e = (0, m["default"])(this, (t.__proto__ || (0, s["default"])(t)).apply(this, arguments));
                return e.state = {
                    hide: !1
                }, e.previousView = "register", e.onClick = function(t) {
                    return "login_success" == e.props.view ? e.onClose(t) : (_.matchesSelector(t.target, "." + k.content + ", ." + k.content + " *") || e.onClose(t), 
                    void ("login" == t.target.dataset.view && e.props.onGoLogin("password")));
                }, e.onClose = function(t) {
                    t && t.stopPropagation(), e.setState({
                        hide: !0
                    }), setTimeout(function() {
                        return e.props.onClose(t);
                    }, 400);
                }, e.viewClass = function(e) {
                    return k["view_" + e];
                }, e;
            }
            return (0, h["default"])(t, e), (0, d["default"])(t, [ {
                key: "setFocus",
                value: function(e, t) {
                    "register" != e && "login" != e || this.refs[e].setFocus(t);
                }
            }, {
                key: "render",
                value: function() {
                    var e, t = this.previousView, n = this.props.view, r = _.cs((e = {}, (0, o["default"])(e, this.viewClass(n), !0), 
                    (0, o["default"])(e, "keep_" + this.viewClass(t), !0), (0, o["default"])(e, k.signin_dialog, !0), 
                    (0, o["default"])(e, k.loading, this.props.loading), (0, o["default"])(e, k.hide, this.state.hide), 
                    (0, o["default"])(e, k.windows, b.isWindows()), e)), i = "login_success" == n && this.previousView != n;
                    return this.previousView = n, g.createElement("div", {
                        ref: "dialogEl",
                        onClick: this.onClick,
                        className: r
                    }, g.createElement("div", {
                        className: k.content
                    }, g.createElement("div", {
                        className: k.validation
                    }, this.props.validation.error), g.createElement("div", {
                        className: k.btn_close,
                        onClick: this.onClose
                    }), g.createElement("div", {
                        className: _.cs(k.view_container, this.props.isPersonalization && k.personalized)
                    }, g.createElement("div", {
                        className: k.view + " " + k.register
                    }, g.createElement(w.Register, {
                        ref: "register",
                        isPersonalization: this.props.isPersonalization,
                        formData: this.props.formData,
                        onSet: this.props.onSet,
                        validation: this.props.validation,
                        onValidate: this.props.onValidate,
                        forceValidation: this.props.forceValidation,
                        loading: this.props.loading,
                        onSubmit: this.props.onSubmit,
                        onGoLogin: this.props.onGoLogin
                    })), g.createElement("div", {
                        className: k.view + " " + k.login
                    }, g.createElement(v.Login, {
                        ref: "login",
                        formData: this.props.formData,
                        onSet: this.props.onSet,
                        validation: this.props.validation,
                        onValidate: this.props.onValidate,
                        forceValidation: this.props.forceValidation,
                        loading: this.props.loading,
                        onSubmit: this.props.onSubmit,
                        onGoRegister: this.props.onGoRegister
                    })), g.createElement("div", {
                        className: k.view + " " + k.welcome
                    }, g.createElement(y.Welcome, {
                        isShow: "welcome" == n,
                        onGoPremium: this.props.onGoPremium,
                        onClose: this.props.onClose
                    })), g.createElement("div", {
                        className: k.view + " " + k.login_success
                    }, g.createElement(E.LoginSuccess, {
                        username: this.props.username,
                        isAutoClose: i,
                        onClose: this.onClose
                    })))));
                }
            } ]), t;
        }(g.Component);
        n.SigninDialogComponent = C;
    }, {
        "./login": 205,
        "./login-success": 204,
        "./register": 206,
        "./welcome": 208,
        "babel-runtime/core-js/object/get-prototype-of": 21,
        "babel-runtime/helpers/classCallCheck": 28,
        "babel-runtime/helpers/createClass": 29,
        "babel-runtime/helpers/defineProperty": 30,
        "babel-runtime/helpers/inherits": 32,
        "babel-runtime/helpers/possibleConstructorReturn": 33,
        "lib/dom": 184,
        "lib/util": 259,
        react: "react"
    } ],
    208: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        var i = e("babel-runtime/helpers/defineProperty"), o = r(i), a = e("babel-runtime/core-js/object/get-prototype-of"), s = r(a), l = e("babel-runtime/helpers/classCallCheck"), c = r(l), u = e("babel-runtime/helpers/possibleConstructorReturn"), d = r(u), f = e("babel-runtime/helpers/inherits"), m = r(f), p = e("react"), h = {
            welcome: "_4e742d-welcome",
            windows: "_4e742d-windows",
            image: "_4e742d-image",
            content: "_4e742d-content",
            show: "_4e742d-show",
            title: "_4e742d-title",
            text: "_4e742d-text",
            close: "_4e742d-close",
            learn_more: "_4e742d-learn_more",
            go_premium: "_4e742d-go_premium"
        }, g = e("lib/dom"), b = e("lib/util"), _ = e("./button"), v = function(e) {
            function t() {
                (0, c["default"])(this, t);
                var e = (0, d["default"])(this, (t.__proto__ || (0, s["default"])(t)).apply(this, arguments));
                return e.render = function() {
                    var t, n = g.cs((t = {}, (0, o["default"])(t, h.welcome, !0), (0, o["default"])(t, h.show, e.props.isShow), 
                    (0, o["default"])(t, h.windows, b.isWindows()), t));
                    return p.createElement("div", {
                        className: n
                    }, p.createElement("div", {
                        className: h.image
                    }), p.createElement("div", {
                        className: h.content
                    }, p.createElement("div", {
                        className: h.title
                    }, "Welcome to Grammarly"), p.createElement("div", {
                        className: h.text
                    }, "Wave good-bye to the most frequent and pesky ", p.createElement("br", null), "writing mistakes."), p.createElement("div", {
                        className: h.go_premium
                    }, p.createElement("span", {
                        className: h.checks
                    }, "Go Premium and get 150+ additional", p.createElement("br", null), "advanced checks."), " ", p.createElement("a", {
                        onClick: e.props.onGoPremium,
                        className: h.learn_more
                    }, "Learn more")), p.createElement("div", {
                        className: h.close
                    }, p.createElement(_.Button, {
                        onClick: e.props.onClose,
                        text: "Continue to Your Text"
                    }))));
                }, e;
            }
            return (0, m["default"])(t, e), t;
        }(p.Component);
        n.Welcome = v;
    }, {
        "./button": 199,
        "babel-runtime/core-js/object/get-prototype-of": 21,
        "babel-runtime/helpers/classCallCheck": 28,
        "babel-runtime/helpers/defineProperty": 30,
        "babel-runtime/helpers/inherits": 32,
        "babel-runtime/helpers/possibleConstructorReturn": 33,
        "lib/dom": 184,
        "lib/util": 259,
        react: "react"
    } ],
    209: [ function(e, t, n) {
        "use strict";
        function r() {
            function e() {
                m.fastHide();
            }
            function t(e) {
                var t = e.target;
                return s.inEl(t, u.posEl);
            }
            function n() {
                u.posEl && (d.parentNode && d.parentNode.removeChild(d), s.unlisten(u.doc, "scroll", e), 
                s.unlisten(u.moveListenerDoc, "scroll", e));
            }
            function r() {
                p && (p = !1, d.style.opacity = 0, d.style.top = "-9999px", m && m.setVisible(!1), 
                d.className = d.className.replace(u.cls, ""), console.log("hide tooltip"));
            }
            function l() {
                u.cls += " gr-no-transition", c(), setTimeout(function() {
                    u.cls = u.cls.replace(" gr-no-transition", ""), s.removeClass(d, "gr-no-transition");
                }, 100);
            }
            function c() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u, t = e.posEl, n = void 0 === t ? u.posEl : t, r = e.html, o = void 0 === r ? u.html : r, l = e.text, c = void 0 === l ? u.text : l, g = e.cls, b = void 0 === g ? u.cls : g, _ = e.doc, v = void 0 === _ ? u.doc : _, y = e.outerIframe, w = void 0 === y ? u.outerIframe : y;
                if (i.extend(u, {
                    posEl: n,
                    html: o,
                    text: c,
                    cls: b,
                    doc: v,
                    outerIframe: w
                }), h) {
                    p = !0, m && m.setVisible(!0), c && d.setAttribute("data-content", c), o && (f.innerHTML = o), 
                    d.className = "gr__tooltip", b && s.addClass(d, b), s.removeClass(d, "gr__flipped");
                    var E = a.getAbsRect(n, w), k = a.posToRect(d, E), C = k.rect, x = C.top, T = C.left;
                    s.css(d, {
                        top: x,
                        left: T
                    }), k && k.rect && !k.rect.flip && s.addClass(d, "gr__flipped");
                    var S = d.clientWidth, j = d.querySelector(".gr__triangle"), N = E.width / 2;
                    N > S && (N = 0), k.delta.right <= 0 && (N -= k.delta.right), N -= parseInt(getComputedStyle(d, null).getPropertyValue("margin-left")), 
                    j.style.marginLeft = parseInt(N) + "px", d.style.opacity = 1;
                }
            }
            var u = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, d = document.querySelector(".gr__tooltip"), f = void 0, m = void 0, p = void 0, h = void 0 == u.enabled || u.enabled;
            if (d || (d = s.createEl('<span class="gr__tooltip"><span class="gr__tooltip-content"></span><i class="gr__tooltip-logo"></i><span class="gr__triangle"></span></span>'), 
            document.documentElement.appendChild(d)), f = d.querySelector(".gr__tooltip-content"), 
            u.posEl) {
                var g = u.outerIframe && u.outerIframe.contentDocument || u.doc;
                m = new o.Hint({
                    doc: g,
                    doc2: u.doc,
                    hint: d,
                    hideDelay: 500,
                    delay: 0,
                    onshow: c,
                    onhide: r,
                    inTarget: t
                }), s.listen(u.doc, "scroll", e), s.listen(g, "scroll", e), m.bind();
            }
            var b = {
                show: c,
                fastShow: l,
                hide: r,
                remove: n,
                el: d,
                enable: function() {
                    h = !0;
                },
                disable: function() {
                    h = !1;
                },
                isEnabled: function() {
                    return h;
                }
            };
            return b;
        }
        var i = e("lodash"), o = e("./hint"), a = e("../position"), s = e("../dom");
        n.Tooltip = r;
    }, {
        "../dom": 184,
        "../position": 236,
        "./hint": 192,
        lodash: "lodash"
    } ],
    210: [ function(e, t, n) {
        "use strict";
        function r(e) {
            var t = document.createElement("script");
            t.innerHTML = e, document.head.appendChild(t), t.parentNode.removeChild(t);
        }
        function i() {
            l.initContentScript(), r("window.GR_EXTENSION_ID='" + s.getUuid() + "'"), r("\n    window.GR_EXTENSION_SEND = function(key, data) {\n      if (!key) throw new TypeError('cant be called without message')\n      var e = document.createEvent('CustomEvent')\n      e.initCustomEvent('external:' + key, true, true, data)\n      document.dispatchEvent(e)\n    }\n  "), 
            s.externalEvents.map(function(e) {
                return "external:" + e;
            }).forEach(function(e) {
                return o.on.call(document, e, function(t) {
                    var n = t.detail;
                    console.log("external event", e, n), a.emitBackground(e, n);
                });
            });
        }
        var o = e("./dom"), a = e("./message"), s = e("./config"), l = e("./tracking");
        n.External = i;
    }, {
        "./config": 180,
        "./dom": 184,
        "./message": 233,
        "./tracking": 255
    } ],
    211: [ function(e, t, n) {
        "use strict";
        var r = e("./tracking"), i = {};
        n.failover = function() {
            function e() {
                setTimeout(a, l), i.index_load = !1;
            }
            function t() {
                setTimeout(s, c), i.app_load = !1;
            }
            function n(e) {
                i[e] = !0;
            }
            function o(e, t) {
                i[e] ? r.call("statsc.ui.increment", "stability:" + t + "_success") : (r.call("statsc.ui.increment", "stability:" + t + "_timeout"), 
                r.call("felog.error", "stability." + t + "_timeout"));
            }
            function a() {
                o("index_load", "extension_loading");
            }
            function s() {
                o("app_load", "extension_app_loading");
            }
            var l = 12e4, c = 12e4, u = {
                startPageLoadTimer: e,
                startAppLoadTimer: t,
                success: n,
                setPageLoadTimeout: function(e) {
                    return l = e;
                },
                setAppLoadTimeout: function(e) {
                    return c = e;
                }
            };
            return u;
        }();
    }, {
        "./tracking": 255
    } ],
    212: [ function(e, t, n) {
        (function(e) {
            "use strict";
            n.forge = "undefined" != typeof window ? window.forge : "undefined" != typeof e ? e.forge : null;
        }).call(this, "undefined" != typeof window ? window : {});
    }, {} ],
    213: [ function(e, t, n) {
        "use strict";
        function r(e, t) {
            t.setDomSelection = function(t) {
                var n = o.getNodeByTextPos(e, t.begin), r = o.getNodeByTextPos(e, t.end);
                a.setDomRange(e.ownerDocument, {
                    anchorNode: n.node,
                    anchorOffset: t.begin - n.pos,
                    focusNode: r.node,
                    focusOffset: t.end - r.pos
                });
            }, t.setCursor = function(e) {
                t.cursor = e;
            }, t.fireDomEvent = function(e) {
                s.isFF() && a.emitDomEvent("document-mousedown-mouseup-activeElement");
                var t = " " == e || e.trim() ? "paste" : "backspace";
                a.emitDomEvent("document-" + t + "-activeElement", {
                    value: e
                });
            }, t.doReplace = function(e, n) {
                t.safeFocus(), t.setDomSelection(e), s.asyncCall(function() {
                    return t.fireDomEvent(n);
                });
            }, t.setTextareaValue = function(n) {
                t.safeFocus(), e.ownerDocument.getSelection().selectAllChildren(e), s.asyncCall(function() {
                    t.fireDomEvent(n.trimRight()), s.asyncCall(t._setCursor, 100);
                }, s.isSafari() ? 100 : 10);
            };
        }
        function i() {
            function e(e) {
                var t = {
                    target: document.activeElement,
                    _inherits_from_prototype: !0,
                    defaultPrevented: !1,
                    preventDefault: function() {}
                };
                for (var n in e) t[n] = e[n];
                return t;
            }
            function t(e, t) {
                var r = n[e];
                r && r.forEach(function(e) {
                    e(t);
                });
            }
            var n = {};
            document.addEventListener("document-paste-activeElement-gr", function(n) {
                var r = n.detail ? n.detail.value : "";
                t("paste", e({
                    clipboardData: {
                        getData: function() {
                            return r;
                        },
                        items: [ "text/plain" ]
                    }
                }));
            }), document.addEventListener("document-mousedown-mouseup-activeElement-gr", function(n) {
                t("mousedown", e({
                    type: "mousedown"
                })), t("mouseup", e({
                    type: "mouseup"
                }));
            }), document.addEventListener("document-backspace-activeElement-gr", function(n) {
                t("keydown", e({
                    keyCode: 8,
                    which: 8,
                    charCode: 0,
                    type: "keydown"
                }));
            });
            var r = document.addEventListener.bind(document);
            document.addEventListener = function(e, t, i) {
                var o = n[e] || [];
                o.push(t), n[e] = o, r(e, t, i);
            };
        }
        var o = e("wrap"), a = e("lib/dom"), s = e("lib/util");
        n.extendDom = r, n.facebookRewriteFunction = i;
    }, {
        "lib/dom": 184,
        "lib/util": 259,
        wrap: "wrap"
    } ],
    214: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function i(e) {
            function t() {
                k();
            }
            function n(e) {
                var t = I.getBoundingClientRect(), n = x(e.clientX - t.left, e.clientY - t.top, t.left, t.top);
                if (n) {
                    n.e = e, e.stopPropagation();
                    var r = document.createEvent("CustomEvent");
                    r.initCustomEvent("gramMouse", !0, !0, n), D.dispatchEvent(r);
                }
            }
            function r(e) {
                try {
                    H.child.height = I.scrollHeight, F.scrollTop = I.scrollTop, clearTimeout(q), q = setTimeout(r, 100);
                } catch (e) {
                    console.log(e), r = d._f;
                }
            }
            function i(e) {
                return e ? e.split(" ").map(function(e) {
                    return isNaN(parseFloat(e)) && e.indexOf("px") == -1 ? e : Math.floor(parseFloat(e)) + "px";
                }).join(" ") : e;
            }
            function o() {
                var e = {}, t = P.getComputedStyle(I, null);
                if (!t) return e;
                var n = function(e) {
                    return t.getPropertyValue(e);
                }, r = function(e) {
                    var t = {};
                    return e.map(function(e) {
                        t[e] = n(e), "z-index" == e && "auto" == t[e] && I.style.zIndex && (t[e] = I.style.zIndex);
                    }), t;
                };
                e = {
                    parent: r([ "border", "border-radius", "box-sizing", "height", "width", "margin", "padding", "z-index", "border-top-width", "border-right-width", "border-left-width", "border-bottom-width", "border-top-style", "border-right-style", "border-left-style", "border-bottom-style", "padding-top", "padding-left", "padding-bottom", "padding-right", "margin-top", "margin-left", "margin-bottom", "margin-right" ]),
                    child: r([ "font", "font-size", "font-family", "text-align", "line-height", "letter-spacing", "text-shadow" ]),
                    src: r([ "position", "margin-top", "line-height", "font-size", "font-family", "z-index" ])
                };
                var o = e.parent["z-index"];
                if (e.parent["z-index"] = o && "auto" != o ? parseInt(o) - 1 : 0, e.parent.marginTop = i(e.parent.marginTop), 
                e.src.marginTop = i(e.src.marginTop), e.parent.margin = i(e.parent.margin), e.parent.padding = i(e.parent.padding), 
                (e.parent["border-top-width"] || e.parent["border-left-width"]) && (e.parent["border-style"] = "solid"), 
                e.parent.border) {
                    var a = e.parent.border.split(" ");
                    e.parent["border-width"] = a[0], a.length > 1 && (e.parent["border-style"] = a[1]), 
                    delete e.parent.border;
                }
                if (e.parent["border-color"] = "transparent !important", "absolute" == e.src.position || "relative" == e.src.position ? e.parent = u.extend(e.parent, r([ "top", "left" ])) : e.src.position = "relative", 
                V = K.customDefaultBg && K.customDefaultBg(I) || V || n("background"), d.isFF() && !V && (V = [ "background-color", "background-image", "background-repeat", "background-attachment", "background-position" ].map(n).join(" ")), 
                e.parent.background = V, d.isFF()) {
                    var s = parseInt(n("border-right-width")) - parseInt(n("border-left-width")), l = I.offsetWidth - I.clientWidth - s;
                    e.child["padding-right"] = l - 1 + "px";
                }
                return "start" == n("text-align") && (e.child["text-align"] = "ltr" == n("direction") ? "left" : "right"), 
                e;
            }
            function a(e) {
                B = e, _();
            }
            function g(e) {
                var t = {
                    background: "transparent !important",
                    "z-index": e["z-index"] || 1,
                    position: e.position,
                    "line-height": e["line-height"],
                    "font-size": e["font-size"],
                    "-webkit-transition": "none",
                    transition: "none"
                };
                parseInt(e["margin-top"]) > 0 && p.css(I.parentNode, {
                    width: "auto",
                    overflow: "hidden"
                });
                var n = P.devicePixelRatio > 1;
                if (n) {
                    var r = e["font-family"];
                    0 == r.indexOf("Consolas") && (r = r.replace("Consolas,", "Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New', monospace, serif"), 
                    H.child["font-family"] = r, t["font-family"] = r);
                }
                p.css(I, t);
            }
            function _() {
                var e = o();
                G || (g(e.src), W = I.previousElementSibling && "left" == p.css(I.previousElementSibling, "float"), 
                d.interval(_, 500), z || (z = !0, p.listen(I, Q)), G = !0), H.parent.marginTop = i(H.parent.marginTop), 
                e = u.merge(e, H), e.child.height = I.scrollHeight, K.fieldRestoreInlineStyles && K.fieldRestoreInlineStyles(I, e), 
                K.ghostHeight && (e.child.height = K.ghostHeight(e.child.height));
                var t = u.merge(U, {
                    "data-id": M,
                    "data-gramm_id": M,
                    "data-gramm": "gramm",
                    "data-gramm_editor": !0,
                    dir: I.getAttribute("dir")
                });
                R || (R = D.createElement("grammarly-ghost"), R.setAttribute("spellcheck", !1), 
                p.insertBefore(R, A)), L.matchPrefix && (t.className = L.matchPrefix), K.ghostHeight && (e.parent.height = K.ghostHeight(e.parent.height));
                var n = c.render(l.createElement(b, {
                    style: e,
                    attrs: t,
                    val: B
                }), R);
                F = c.findDOMNode(n), O = F.firstElementChild, F.contentEditable = !0, X.clone = F, 
                X.cloneVal = O, v(), y(), w(), 0 == I.offsetHeight ? S() : j(), X.emit("render");
            }
            function v() {
                if (W) {
                    if (I.getBoundingClientRect().left == F.getBoundingClientRect().left && I.getBoundingClientRect().top == F.getBoundingClientRect().top) return W = !1;
                    var e = I.getBoundingClientRect(), t = I.parentNode.getBoundingClientRect(), n = e.left - t.left, r = e.top - t.top, i = "translate(" + n + "px, " + r + "px)";
                    H.parent["-webkit-transform"] = i, H.parent.transform = i;
                }
            }
            function y() {
                function e(e, r, i) {
                    var o = i ? [ I, F ] : [ t, n ];
                    H.parent[r] = parseInt(parseInt(F.style[r]) + o[0][e] - o[1][e]) + "px";
                }
                var t = m.getAbsRect(I), n = m.getAbsRect(F);
                if (n.left != t.left && e("left", "marginLeft", !1), n.top != t.top && e("top", "marginTop", !1), 
                F.clientWidth == I.clientWidth || d.isFF() ? n.width != t.width && (U.width = t.width) : n.width != t.width ? F.style.width = t.width : e("clientWidth", "width", !0), 
                d.isFF()) {
                    var r = p.css(I.parentNode, [ "margin-left", "margin-top", "position" ]);
                    r && (r.marginLeft || r.marginTop) && "static" == r.position && (I.parentNode.style.position = "relative", 
                    I.parentNode.style.overflow = "");
                }
                n.height != t.height && (H.parent.height = t.height);
            }
            function w() {
                function e(e, t) {
                    return f.isFacebookSite() ? e.nextElementSibling && e.nextElementSibling.childNodes[0] != t : e.nextElementSibling != t;
                }
                var t = function(e) {
                    return D.contains && D.contains(e) || p.elementInDocument(e, D);
                };
                R && t(I) && (!e(R, I) && t(R) || p.insertBefore(R, A));
            }
            function E(e) {
                return F.querySelector(".gr_" + e);
            }
            function k() {
                var e = L.current();
                Y = [];
                for (var t = F.scrollTop, n = function(e) {
                    return {
                        x1: e.left,
                        x2: e.right,
                        y1: e.top + t,
                        y2: e.bottom + t
                    };
                }, r = 0; r < e.length; r++) {
                    var i = e[r], o = E(i.id);
                    if (o) {
                        C(o);
                        var a = m.getPos(o, F), s = {
                            x1: a.x,
                            x2: a.x + o.offsetWidth,
                            y1: a.y,
                            y2: a.y + o.offsetHeight + 5
                        }, l = {
                            match: i,
                            el: o,
                            box: s
                        };
                        Y.push(l);
                        var c = o.textContent.trim().split(" ").length > 1;
                        if (c) {
                            var d = o.getClientRects();
                            d.length < 2 || (l.rects = u.map(d, n));
                        }
                    }
                }
            }
            function C(e) {
                e.setAttribute("style", e.parentNode.getAttribute("style")), !e.classList.contains("gr_disable_anim_appear") && e.addEventListener("animationend", function() {
                    return e.classList.add("gr_disable_anim_appear");
                }), p.css(e, {
                    display: "",
                    padding: "",
                    margin: "",
                    width: ""
                });
            }
            function x(e, t, n, r) {
                for (var i = F.scrollTop, o = 0; o < Y.length; o++) {
                    var a = Y[o], s = a.box;
                    if (e >= s.x1 && e <= s.x2 && t >= s.y1 - i && t <= s.y2 - i) return a;
                    if (a.rects) for (var l = 0; l < a.rects.length; l++) {
                        var c = a.rects[l], u = e + n, d = t + r;
                        if (u >= c.x1 && u <= c.x2 && d >= c.y1 - i && d <= c.y2 - i) return a;
                    }
                }
            }
            function T() {
                clearTimeout(q), d.cancelInterval(_);
            }
            function S() {
                R.style.display = "none", d.isSafari() && (I.style.background = "", I.style.backgroundColor = ""), 
                I.style.background = V, d.cancelInterval(_), setTimeout(function() {
                    return X.emit("render");
                }, 300), G = !1, R.parentNode && R.parentNode.removeChild(R);
            }
            function j() {
                G || (R.style.display = "", R.parentNode || p.insertBefore(R, A), _(), r());
            }
            function N() {
                T(), p.unlisten(I, Q), S();
            }
            var I = e.el, A = f.isFacebookSite() ? I.parentNode : I, D = I.ownerDocument, P = D.defaultView, L = e.editor || {
                current: function() {
                    return [];
                }
            }, M = e.id, R = void 0, F = void 0, O = void 0, G = !1, z = void 0, B = "", W = !1, H = {
                parent: {},
                child: {}
            }, U = {}, V = void 0, q = void 0, Y = [], K = h.pageStyles(D).getFixesForCurrentDomain(), X = s({
                render: _,
                getStyle: o,
                setText: a,
                generateAlertPositions: k,
                remove: N,
                hide: S,
                show: j
            }), Q = {
                mousemove: n,
                mouseenter: t,
                keyup: r,
                scroll: r
            };
            return X;
        }
        var o = e("babel-runtime/helpers/extends"), a = r(o), s = e("emitter"), l = e("react"), c = e("react-dom"), u = e("lodash"), d = e("../util"), f = e("lib/location"), m = e("../position"), p = e("../dom"), h = e("../sites");
        n.Ghost = i;
        var g = {
            style: {
                child: {
                    display: "inline-block",
                    "line-height": "initial",
                    color: "transparent",
                    overflow: "hidden",
                    "text-align": "left",
                    "float": "initial",
                    clear: "none",
                    "box-sizing": "border-box",
                    "vertical-align": "baseline",
                    "white-space": "pre-wrap",
                    width: "100%",
                    margin: 0,
                    padding: 0,
                    border: 0
                },
                parent: {
                    position: "absolute",
                    color: "transparent",
                    "border-color": "transparent !important",
                    overflow: "hidden",
                    "white-space": "pre-wrap"
                },
                src: {}
            },
            attrs: {},
            val: ""
        }, b = l.createClass({
            displayName: "GhostComponent",
            getDefaultProps: function() {
                return g;
            },
            render: function() {
                var e = u.merge(g.style, this.props.style), t = this.props.attrs, n = p.camelizeAttrs(e.parent), r = p.camelizeAttrs(e.child), i = this.props.val;
                return l.createElement("div", (0, a["default"])({
                    style: n
                }, t, {
                    gramm: !0
                }), l.createElement("span", {
                    style: r,
                    dangerouslySetInnerHTML: {
                        __html: i
                    }
                }), l.createElement("br", null));
            }
        });
    }, {
        "../dom": 184,
        "../position": 236,
        "../sites": 240,
        "../util": 259,
        "babel-runtime/helpers/extends": 31,
        emitter: "emitter",
        "lib/location": 232,
        lodash: "lodash",
        react: "react",
        "react-dom": "react-dom"
    } ],
    215: [ function(e, t, n) {
        "use strict";
        function r(e) {
            function t() {
                return G = F(B), G.on("exit", T), G.dom.insertGhost = w, O = s.Ghost({
                    id: I,
                    el: S,
                    editor: G
                }), B.gh = O, G.ghostarea = B, G._run = G.run, G.run = n, G;
            }
            function n() {
                r("on"), M = !0, A = d(), G._run(), O.show();
            }
            function r() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "on", t = "on" == e ? i.listen : i.unlisten;
                t(S, "input", m), t(S, "keyup", v), t(S, "keydown", y), t(N, "click", h, null, !0), 
                O[e]("render", b), G[e]("rendered", k), G.isHtmlGhost || (G[e]("beforeReplace", p), 
                G[e]("afterReplace", E));
            }
            function d() {
                return "TEXTAREA" == S.tagName ? S.value : S.parentNode ? u.getText(S) : "";
            }
            function f(e) {
                S.value = e;
            }
            function m() {
                M && (A = d());
            }
            function p() {
                L = S.scrollTop;
            }
            function h(e) {
                if (a.isFacebookSite() && i.matchesSelector(e.target, z)) return _();
            }
            function g() {
                var e = j.createEvent("TextEvent");
                e.initTextEvent ? G.latestCursor.s == G.latestCursor.e && (e.initTextEvent("textInput", !0, !0, null, String.fromCharCode(8203), 1, "en-US"), 
                setTimeout(function() {
                    G.saveCursor(), G.skipInputEvents(), S.dispatchEvent(e), setTimeout(function() {
                        f(d().replace(String.fromCharCode(8203), "")), G.restoreCursor(), G.skipInputEvents(!1);
                    }, 50);
                }, 50)) : (i.runKeyEvent({
                    el: S,
                    type: "keydown"
                }), i.runKeyEvent({
                    el: S,
                    type: "keyup"
                })), S.scrollTop = L, A = d();
            }
            function b() {
                if ((0 == A.length && d().length > 0 || R) && (A = d(), R = !1), M) {
                    A = A.replace(new RegExp(String.fromCharCode(8203), "g"), "");
                    var e = l.diffPos(A, d()), t = 1 != A.indexOf("@") && d().indexOf("@") == -1;
                    e.delta >= 2 && 0 == e.s && (D || P) && !t && _();
                }
            }
            function _() {
                M && (C(), G.clearData());
            }
            function v(e) {
                G.camouflage();
            }
            function y(e) {
                P = 13 == o.keyCode(e);
            }
            function w() {
                return O.render(), {
                    clone: O.clone,
                    cloneVal: O.cloneVal
                };
            }
            function E() {
                setTimeout(g, 50);
            }
            function k() {
                O.generateAlertPositions();
            }
            function C() {
                M && O.hide();
            }
            function x() {
                M = !0, O.show();
            }
            function T() {
                r("off"), G && (G.off("exit", T), G.remove(), G = null), B.emit("exit"), S.removeAttribute("data-gramm"), 
                S.removeAttribute("data-txt_gramm_id"), O && (O.remove(), O = null);
            }
            var S = e.el, j = S.ownerDocument, N = j.defaultView, I = e.id, A = d(), D = !1, P = !1, L = void 0, M = !1, R = void 0, F = e.createEditor, O = void 0, G = void 0;
            S.setAttribute("data-gramm", ""), S.setAttribute("data-txt_gramm_id", I);
            var z = "div[role=navigation] li[role=listitem] *", B = c({
                el: S,
                id: I,
                hideClone: C,
                showClone: x,
                insertGhost: w,
                remove: T,
                run: n
            });
            return t();
        }
        var i = e("../dom"), o = e("../util"), a = e("lib/location"), s = e("./ghost"), l = e("textdiff"), c = e("emitter"), u = e("wrap");
        n.GhostArea = r;
    }, {
        "../dom": 184,
        "../util": 259,
        "./ghost": 214,
        emitter: "emitter",
        "lib/location": 232,
        textdiff: "textdiff",
        wrap: "wrap"
    } ],
    216: [ function(e, t, n) {
        "use strict";
        function r() {
            return l.HTML_GHOST_SITES.includes(f);
        }
        function i() {
            return "[contenteditable]";
        }
        function o() {
            return s.isFacebookSite() ? c.facebookRewriteFunction : s.isJiraSite() ? (d.call("felog.info", "init_on_jira"), 
            u.jiraRewriteFunction) : void 0;
        }
        function a() {
            if (s.isJiraSite()) return u.jiraGhostListener;
        }
        var s = e("lib/location"), l = e("../page-config/defaults"), c = e("./facebook-ghost"), u = e("./jira-ghost"), d = e("lib/tracking"), f = s.getDomain();
        n.isHtmlGhostSite = r, n.getHtmlGhostSelector = i, n.getClientScriptFunction = o, 
        n.getGhostListener = a;
    }, {
        "../page-config/defaults": 234,
        "./facebook-ghost": 213,
        "./jira-ghost": 218,
        "lib/location": 232,
        "lib/tracking": 255
    } ],
    217: [ function(e, t, n) {
        "use strict";
        var r = e("under"), i = e("wrap"), o = e("lib/util"), a = e("./facebook-ghost"), s = e("lib/location");
        n.HtmlGhostDom = function(e) {
            var t = e.editor, n = e.el, l = n.ownerDocument, c = r.HtmlDom(e), u = r.TextareaDom(e);
            return u.safeFocus = function() {
                var e = l.body.scrollTop;
                n.focus(), l.body.scrollTop = e;
            }, u.getCursor = function() {
                return c.getCursor();
            }, u.setCursor = function(e) {
                u.cursor = e, u._setCursor();
            }, u._setCursor = function() {
                i.invalidateNode(n), c.setCursor(u.cursor);
            }, u.getText = function() {
                return n.parentNode ? (i.invalidateNode(n), delete n.__getText, i.getText(n)) : "";
            }, u.replace = function(e, n, r) {
                t.inputListener.ignorePaste = !0, u.doReplace(e, n), e.replaced = !r, e.inDom = !r, 
                t.inputListener.ignorePaste = !1;
            }, u.doReplace = function(e, t) {
                var n = u.getText();
                n = n.substring(0, e.s) + t + n.substr(e.e), u.setTextareaValueSync(n), o.asyncCall(u._setCursor);
            }, u.setTextareaValueSync = function(e) {
                n.innerText = e, i.invalidateNode(n), u.safeFocus();
            }, u.setTextareaValue = function(e) {
                u.safeFocus(), o.asyncCall(function() {
                    n.innerText = e, i.invalidateNode(n);
                });
            }, s.isFacebookSite() && a.extendDom(n, u), u;
        };
    }, {
        "./facebook-ghost": 213,
        "lib/location": 232,
        "lib/util": 259,
        under: "under",
        wrap: "wrap"
    } ],
    218: [ function(e, t, n) {
        "use strict";
        function r() {
            o.listen(document, "jira-inline-support", function(e) {
                var t = e.activated, n = t ? "jira-inline-support-activated" : "jira-inline-support-deactivated";
                a.call("felog.info", n);
            });
        }
        function i() {
            function e(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = document.createEvent("CustomEvent");
                n.initCustomEvent(e + "-gr", !0, !0, t), document.dispatchEvent(n);
            }
            function t(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
                if (e) {
                    for (;e && e != document.body && !t(e) && n > 0; ) e = e.parentElement, n--;
                    return e && t(e);
                }
            }
            function n(e) {
                return t(e, function(e) {
                    return e.classList && e.classList.contains("inline-edit-fields");
                });
            }
            function r(e) {
                return t(e, function(e) {
                    return "function" == typeof e.matches && e.matches("grammarly-card, .gr-top-zero");
                });
            }
            function i(e, t) {
                var n = t && t.getAttribute("data-action");
                "editor" != n && "login" != n && e.focus();
            }
            function o(e) {
                var t = e.target, o = e.relatedTarget || e.explicitOriginalTarget;
                o && t && n(t) && r(o) && (e.stopImmediatePropagation(), i(t, o));
            }
            document.addEventListener("blur", o, !0), document.addEventListener("DOMContentLoaded", function() {
                function t() {
                    return "jira" === document.body.id && document.body.getAttribute("data-version") || document.querySelector("input[type=hidden][title=JiraVersion]");
                }
                t() ? e("jira-inline-support", {
                    activated: !0
                }) : (e("jira-inline-support", {
                    activated: !1
                }), document.removeEventListener("blur", o, !0));
            });
        }
        var o = e("lib/dom"), a = e("lib/tracking");
        n.jiraGhostListener = r, n.jiraRewriteFunction = i;
    }, {
        "lib/dom": 184,
        "lib/tracking": 255
    } ],
    219: [ function(e, t, n) {
        "use strict";
        function r(e, t) {
            function n() {
                r(), u = setTimeout(p, s), d = setTimeout(p, 1e3 * l[0]), f = setTimeout(p, 1e3 * l[1]), 
                m = setTimeout(p, 1e3 * l[2]);
            }
            function r() {
                c = 0, clearTimeout(u), clearTimeout(d), clearTimeout(f), clearTimeout(m);
            }
            var s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o, l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [ 30, 60, 120 ], c = 0, u = void 0, d = void 0, f = void 0, m = void 0, p = function h() {
                return c < a ? (s == o && e(), u = setTimeout(h, s), void c++) : (i.call("felog.error", "infinity_check_reset_fail", {
                    delay: s
                }), void console.error("Infinity check reset fails, change to the offline state."));
            };
            return {
                start: n,
                finish: r
            };
        }
        var i = e("./tracking"), o = 2e4, a = 3;
        n.InfinityChecker = r;
    }, {
        "./tracking": 255
    } ],
    220: [ function(e, t, n) {
        "use strict";
        var r = e("react");
        n.LogoIcon = function(e) {
            var t = e.className;
            return r.createElement("svg", {
                className: t,
                width: "18",
                height: "18",
                viewBox: "0 0 18 18"
            }, r.createElement("g", {
                transform: "translate(-7 -7)",
                fill: "none",
                "fill-rule": "evenodd"
            }, r.createElement("circle", {
                fill: "#00AE84",
                cx: "16",
                cy: "16",
                r: "9.008"
            }), r.createElement("path", {
                d: "M17.318 17.843c.052.297.335.504.64.504h.963l.56-.074c-.895 1.297-2.438 1.897-4.13 1.638-1.38-.214-2.566-1.14-3.065-2.437-1.134-2.942 1.03-5.75 3.84-5.75 1.468 0 2.75.852 3.49 1.882.193.304.58.385.864.185.267-.185.342-.533.178-.815-1.014-1.578-2.84-2.593-4.906-2.46-2.677.193-4.854 2.37-5.003 5.04-.18 3.103 2.295 5.637 5.382 5.637 1.618 0 3.065-.703 4.056-1.837l-.12.652v.585c0 .304.21.586.508.637.395.074.738-.23.738-.608v-3.52H17.93c-.38.008-.687.35-.612.74z",
                fill: "#FFF"
            })));
        }, n.IgnoreIcon = function(e) {
            var t = e.className;
            return r.createElement("span", {
                className: t,
                dangerouslySetInnerHTML: {
                    __html: '\n            <svg width="32" height="32" viewBox="0 0 32 32">\n              <defs>\n                <path d="M21 12.5v7.6308289C21 21.7154283 19.6513555 23 17.9996703 23h-3.9993406C12.3432934 23 11 21.7124939 11 20.1308289V12.5" id="a___________________"/>\n                <mask id="b___________________" x="0" y="0" width="10" height="10.5" fill="#fff">\n                  <use data-fix="use_a___" xlink:href="#a___________________"/>\n                </mask>\n              </defs>\n              <g stroke="#D2D4DD" fill="none" fill-rule="evenodd">\n                <path d="M9 10.6h14" stroke-width="1.2"/>\n                <g stroke-width="1.2">\n                  <path d="M14.6 14v6M17.4 14v6"/>\n                </g>\n                <use mask="url(#b___________________)" stroke-width="2.4" xlink:href="#a___________________"/>\n                <path d="M18.5 11V9c0-1.1045695-.8982606-2-1.9979131-2h-1.0041738C14.3944962 7 13.5 7.8877296 13.5 9v2" stroke-width="1.2"/>\n              </g>\n            </svg>\n      '
                }
            });
        }, n.DictionaryIcon = function(e) {
            var t = e.className;
            return r.createElement("span", {
                className: t,
                dangerouslySetInnerHTML: {
                    __html: '\n        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n          <defs>\n            <mask id="b_DictionaryIcon" x="0" y="0" width="10" height="15" fill="#fff">\n              <path id="a_DictionaryIcon" d="M11 9h10v15l-4.8857422-4L11 24z"/>\n            </mask>\n          </defs>\n          <use mask="url(#b_DictionaryIcon)" xlink:href="#a_DictionaryIcon" stroke-width="2.4" stroke="#D2D4DD" fill="none"/>\n        </svg>\n      '
                }
            });
        }, n.DictionaryAddedIcon = function(e) {
            var t = e.className;
            return r.createElement("svg", {
                className: t,
                width: "15",
                height: "23",
                viewBox: "0 0 15 23"
            }, r.createElement("path", {
                d: "M14.773 22.573V.39h-14v22.183l7-5.326",
                fill: "#15C49A",
                "fill-rule": "evenodd"
            }));
        }, n.WikiIcon = function(e) {
            var t = e.className;
            return r.createElement("svg", {
                className: t,
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            }, r.createElement("path", {
                d: "M13.633 21l2.198-4.264L17.64 21h.633l3.756-8.643c.21-.485.62-.776 1.057-.842V11H20.05v.515c.402.09.83.24 1.02.666l-2.758 6.363c-.5-1.06-1.01-2.22-1.498-3.375.504-1.07.915-2.064 1.533-3.04.36-.576.948-.59 1.25-.618V11h-3.23v.51c.404 0 1.242.037.868.822l-.936 1.97-.993-2.19c-.155-.342.145-.57.635-.596L15.938 11h-3.633v.51c.433.015 1.043.013 1.268.38.694 1.274 1.158 2.598 1.79 3.898l-1.636 3.06-2.75-6.323c-.31-.713.425-.943.903-1.002L11.874 11H8v.51c.535.178 1.225.974 1.418 1.376 1.447 3.027 2.176 5.057 3.557 8.114h.658z",
                fill: "#D2D4DD",
                "fill-rule": "evenodd"
            }));
        }, n.UndoIcon = function(e) {
            var t = e.className;
            return r.createElement("svg", {
                className: t,
                width: "32",
                height: "32",
                viewBox: "0 0 32 32"
            }, r.createElement("g", {
                stroke: "#D2D4DD",
                fill: "none",
                "fill-rule": "evenodd",
                strokeLinecap: "round"
            }, r.createElement("path", {
                d: "M11.518 8.412l-4.26 4.224L11.5 16.88"
            }), r.createElement("path", {
                d: "M16.192 22.236h4.23c2.642 0 4.784-2.147 4.784-4.783 0-2.642-2.15-4.784-4.787-4.784H8.1"
            })));
        };
    }, {
        react: "react"
    } ],
    221: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function i(e, t, r, i, o, a) {
            switch (e.kind) {
              case "common":
                return y.createElement(A, {
                    model: e,
                    onIgnore: t,
                    onAddToDictionary: r,
                    onEditor: i,
                    onLogin: o,
                    isAddedToDictionary: a
                });

              case "synonyms":
                return y.createElement(n.CardSynonyms, {
                    model: e,
                    onEditor: i,
                    onLogin: o
                });

              default:
                ;
                return null;
            }
        }
        var o = e("babel-runtime/core-js/object/get-prototype-of"), a = r(o), s = e("babel-runtime/helpers/classCallCheck"), l = r(s), c = e("babel-runtime/helpers/createClass"), u = r(c), d = e("babel-runtime/helpers/possibleConstructorReturn"), f = r(d), m = e("babel-runtime/helpers/inherits"), p = r(m), h = e("babel-runtime/helpers/extends"), g = r(h), b = e("lib/config"), _ = e("lib/message"), v = e("lib/inline-cards/model/grammarly_editor_alert"), y = e("react"), w = e("./utils/react"), E = e("../dom"), k = e("../tracking"), C = e("./model/card"), x = e("./replacement"), T = e("./icons"), S = {
            container: "_3f5535-container",
            flip: "_3f5535-flip",
            flipSyn: "_3f5535-flipSyn",
            card: "_3f5535-card",
            bigTitle: "_3f5535-bigTitle",
            unknownWordTitle: "_3f5535-unknownWordTitle",
            btnDictLabelWithIcon: "_3f5535-btnDictLabelWithIcon",
            explanation: "_3f5535-explanation",
            replacement: "_3f5535-replacement",
            maxWidthReached: "_3f5535-maxWidthReached",
            item: "_3f5535-item",
            logoIcon: "_3f5535-logoIcon",
            ignoreIcon: "_3f5535-ignoreIcon",
            undoIcon: "_3f5535-undoIcon",
            dictionaryIcon: "_3f5535-dictionaryIcon",
            wikiIcon: "_3f5535-wikiIcon",
            footer: "_3f5535-footer",
            footerButton: "_3f5535-footerButton",
            btnIgnore: "_3f5535-btnIgnore",
            icon: "_3f5535-icon",
            btnLogo: "_3f5535-btnLogo",
            btnPersonalize: "_3f5535-btnPersonalize",
            personalizeMessage: "_3f5535-personalizeMessage",
            attn: "_3f5535-attn",
            cardAddedToDict: "_3f5535-cardAddedToDict",
            addedToDictTitle: "_3f5535-addedToDictTitle",
            dictionaryDescription: "_3f5535-dictionaryDescription",
            undo: "_3f5535-undo",
            dictLink: "_3f5535-dictLink",
            dictionaryAddedIcon: "_3f5535-dictionaryAddedIcon",
            synTitle: "_3f5535-synTitle",
            synList: "_3f5535-synList",
            synListSingle: "_3f5535-synListSingle",
            synListTitle: "_3f5535-synListTitle",
            synListNumber: "_3f5535-synListNumber",
            synSubitems: "_3f5535-synSubitems",
            synItem: "_3f5535-synItem",
            dict: "_3f5535-dict",
            dictContent: "_3f5535-dictContent",
            dictItemCounter: "_3f5535-dictItemCounter",
            dictItem: "_3f5535-dictItem",
            qualifier: "_3f5535-qualifier",
            dictFooterItem: "_3f5535-dictFooterItem",
            wiki: "_3f5535-wiki",
            gr__tooltip_empty: "gr__tooltip_empty",
            gr__tooltip: "gr__tooltip",
            "gr-notfound-tooltip": "gr-notfound-tooltip",
            "gr__tooltip-content": "gr__tooltip-content",
            "gr__tooltip-logo": "gr__tooltip-logo",
            gr__flipped: "gr__flipped"
        }, j = function(e) {
            var t = e.title, n = e.className;
            return y.createElement("div", (0, g["default"])({
                className: n
            }, w.setInnerHTML(t.toLowerCase(), [ "i", "b" ])));
        }, N = function(e) {
            var t = e.title, n = e.explanation;
            return y.createElement("div", null, y.createElement(j, {
                className: S.bigTitle,
                title: t
            }), y.createElement("div", (0, g["default"])({
                className: S.explanation
            }, w.setInnerHTML(n, [ "i", "b" ]))));
        };
        n.FooterButton = function(e) {
            var t = e.className, n = e.onClick, r = e.children;
            return y.createElement("div", {
                className: E.cs(S.footerButton, t),
                role: "button",
                onClick: function(e) {
                    e.stopPropagation(), n();
                }
            }, r);
        }, n.GrammarlyFooter = function(e) {
            var t = e.isUserAuthenticated, r = e.onEditor, i = e.onLogin;
            return t ? y.createElement(n.FooterButton, {
                className: E.cs(S.item, S.btnLogo),
                onClick: r
            }, y.createElement(T.LogoIcon, {
                className: E.cs(S.icon, S.logoIcon)
            }), " See more in Grammarly") : y.createElement(n.FooterButton, {
                className: E.cs(S.btnPersonalize, S.item),
                onClick: i
            }, y.createElement("div", {
                className: S.personalizeMessage
            }, y.createElement("span", {
                className: S.attn
            }, "ATTN:"), " You’re missing many ", y.createElement("br", null), " key Grammarly features."), y.createElement(T.LogoIcon, {
                className: E.cs(S.icon, S.logoIcon)
            }), " Personalize for free");
        }, n.CardCommonContent = function(e) {
            var t = e.model, r = e.onAddToDictionary, i = e.onIgnore, o = e.onEditor, a = e.onLogin, s = t.getFooterProps();
            return y.createElement("div", {
                className: E.cs(S.card)
            }, t.isTextCard ? !t.isUnknowWord && y.createElement(N, {
                title: t.title,
                explanation: t.explanation
            }) : y.createElement("div", {
                className: S.replacement
            }, y.createElement(x.Replacement, {
                itemClassName: S.item,
                replacement: t.getReplacements()
            })), y.createElement("div", {
                className: S.footer
            }, s.hasAddToDictionary && y.createElement(n.FooterButton, {
                className: E.cs(S.btnDict, S.item),
                onClick: function() {
                    return r();
                }
            }, t.isUnknowWord && y.createElement(j, {
                className: S.unknownWordTitle,
                title: t.title
            }), y.createElement("span", {
                className: E.cs(S.btnDictLabelWithIcon)
            }, y.createElement(T.DictionaryIcon, {
                className: E.cs(S.icon, S.dictionaryIcon)
            }), " Add to dictionary")), y.createElement(n.FooterButton, {
                className: E.cs(S.btnIgnore, S.item),
                onClick: function() {
                    return i();
                }
            }, y.createElement(T.IgnoreIcon, {
                className: E.cs(S.icon, S.ignoreIcon)
            }), " Ignore"), y.createElement(n.GrammarlyFooter, {
                onEditor: o,
                onLogin: a,
                isUserAuthenticated: t.isUserAuthenticated
            })));
        };
        var I = function(e) {
            var t = e.word;
            return y.createElement("div", {
                className: E.cs(S.card, S.cardAddedToDict)
            }, y.createElement("div", {
                className: S.addedToDictTitle
            }, y.createElement(T.DictionaryAddedIcon, {
                className: S.dictionaryAddedIcon
            }), " ", t), y.createElement("div", {
                className: S.dictionaryDescription
            }, "is now in your ", y.createElement("div", {
                onClick: function() {
                    _.emitBackground("open-url", b.URLS.appPersonalDictionary);
                },
                className: S.dictLink
            }, "personal dictionary")));
        }, A = function(e) {
            function t() {
                (0, l["default"])(this, t);
                var e = (0, f["default"])(this, (t.__proto__ || (0, a["default"])(t)).apply(this, arguments));
                return e.state = {
                    isAddedToDictionary: e.props.isAddedToDictionary
                }, e;
            }
            return (0, p["default"])(t, e), (0, u["default"])(t, [ {
                key: "render",
                value: function() {
                    var e = this, t = this.props.model;
                    return this.state.isAddedToDictionary ? y.createElement(I, {
                        word: t.highlightText
                    }) : y.createElement(n.CardCommonContent, {
                        onAddToDictionary: function() {
                            e.setState({
                                isAddedToDictionary: !0
                            }), e.props.onAddToDictionary();
                        },
                        onIgnore: this.props.onIgnore,
                        onEditor: this.props.onEditor,
                        onLogin: this.props.onLogin,
                        model: t
                    });
                }
            } ]), t;
        }(y.Component);
        n.CardCommon = A;
        var D = function(e) {
            var t = e.meanings;
            switch (t.length) {
              case 0:
                return y.createElement("span", null);

              case 1:
                return y.createElement("div", {
                    className: E.cs(S.synList, S.synListSingle)
                }, y.createElement("div", {
                    className: S.synSubitems
                }, y.createElement(x.Replacement, {
                    replacement: t[0].list,
                    itemClassName: S.synItem
                })));

              default:
                return y.createElement("div", {
                    className: S.synList
                }, t.map(function(e, t) {
                    return y.createElement("div", {
                        key: t,
                        className: S.synListItem
                    }, y.createElement("div", {
                        className: S.synListTitle
                    }, y.createElement("span", {
                        className: S.synListNumber
                    }, t + 1, "."), e.title), y.createElement("div", {
                        className: S.synSubitems
                    }, y.createElement(x.Replacement, {
                        replacement: e.list,
                        itemClassName: S.synItem
                    })));
                }));
            }
        };
        n.CardSynonyms = function(e) {
            var t = e.model, r = e.onEditor, i = e.onLogin;
            return y.createElement("div", {
                className: E.cs(S.card, S.synCard)
            }, y.createElement("div", {
                className: S.synTitle
            }, "Synonyms:"), y.createElement(D, {
                meanings: t.meanings
            }), y.createElement("div", {
                className: S.footer
            }, y.createElement(n.GrammarlyFooter, {
                onEditor: r,
                onLogin: i,
                isUserAuthenticated: t.isUserAuthenticated
            })));
        };
        var P = 288, L = function(e) {
            function t() {
                (0, l["default"])(this, t);
                var e = (0, f["default"])(this, (t.__proto__ || (0, a["default"])(t)).apply(this, arguments));
                return e.state = {
                    isMaxWidth: !1
                }, e;
            }
            return (0, p["default"])(t, e), (0, u["default"])(t, [ {
                key: "componentDidMount",
                value: function() {
                    this.el && this.el.firstElementChild.clientWidth === P && this.setState({
                        isMaxWidth: !0
                    });
                }
            }, {
                key: "render",
                value: function() {
                    var e = this, t = this.props, n = t.model, r = t.onIgnore, o = t.onAddToDictionary, a = t.onEditor, s = t.onLogin, l = t.isAddedToDictionary;
                    return y.createElement("div", {
                        onClick: function(e) {
                            return e.stopPropagation();
                        },
                        key: n.id,
                        ref: function(t) {
                            return e.el = t;
                        },
                        className: E.cs(this.state.isMaxWidth && S.maxWidthReached)
                    }, i(n, r, o, a, s, l));
                }
            } ]), t;
        }(y.Component);
        n.Card = L;
        var M = function(e) {
            function t() {
                (0, l["default"])(this, t);
                var e = (0, f["default"])(this, (t.__proto__ || (0, a["default"])(t)).apply(this, arguments));
                return e.state = {
                    pos: {
                        rect: {
                            top: 0,
                            left: 0,
                            width: 0,
                            height: 0,
                            flip: !1
                        },
                        sourceRect: {
                            width: 0
                        },
                        delta: {
                            right: 0,
                            left: 0,
                            bottom: 0,
                            top: 0
                        },
                        className: "",
                        visible: !1
                    },
                    addedToDict: !1,
                    match: {},
                    visible: !1
                }, e.handlers = function(t, n, r) {
                    var i = e.state.match, o = e.props;
                    if (e.state.addedToDict) return void k.fire("show-dictionary");
                    if (t) switch (t) {
                      case "replace":
                        o.animateReplacement(i.id, n, r), i.replace(n, !1), o.hide();
                        break;

                      case "ignore":
                        i.ignore(), o.hide();
                        break;

                      case "hide":
                        o.hide();
                        break;

                      case "anim-hide":
                        o.hide();
                        break;

                      case "editor":
                        o.openEditor();
                        break;

                      case "login":
                        o.openEditor();
                        break;

                      case "add":
                        o.addToDict();
                    }
                }, e;
            }
            return (0, p["default"])(t, e), (0, u["default"])(t, [ {
                key: "createCardModel",
                value: function(e, t) {
                    var n = this;
                    switch (e.kind) {
                      case "common":
                        return new C.CommonCardModelImpl(e, function(e, t) {
                            return n.handlers("replace", e, t);
                        }, t);

                      case "synonym":
                        return new C.SynonymsCardModelImpl(e, function(e) {
                            return n.handlers("replace", e);
                        }, t);

                      default:
                        ;
                        return null;
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var e = this, t = this.state, n = t.pos, r = t.match, i = t.visible, o = t.addedToDict, a = n.rect, s = a.flip, l = {
                        top: a.top,
                        left: a.left,
                        visibility: i ? "" : "hidden"
                    };
                    if (!i) return y.createElement("div", null);
                    var c = v.createAlert(r), u = this.createCardModel(c, !this.props.isAnonymous());
                    return y.createElement("div", {
                        style: l,
                        className: E.cs(S.container, s && S.flip, s && "synonyms" === u.kind && S.flipSyn)
                    }, y.createElement(L, {
                        model: u,
                        onIgnore: function() {
                            return e.handlers("ignore");
                        },
                        onAddToDictionary: function() {
                            return e.handlers("add");
                        },
                        isAddedToDictionary: o,
                        onLogin: function() {
                            return e.handlers("login");
                        },
                        onEditor: function() {
                            return e.handlers("editor");
                        }
                    }));
                }
            } ]), t;
        }(y.Component);
        n.PositionedCard = M;
    }, {
        "../dom": 184,
        "../tracking": 255,
        "./icons": 220,
        "./model/card": 224,
        "./replacement": 227,
        "./utils/react": 230,
        "babel-runtime/core-js/object/get-prototype-of": 21,
        "babel-runtime/helpers/classCallCheck": 28,
        "babel-runtime/helpers/createClass": 29,
        "babel-runtime/helpers/extends": 31,
        "babel-runtime/helpers/inherits": 32,
        "babel-runtime/helpers/possibleConstructorReturn": 33,
        "lib/config": 180,
        "lib/inline-cards/model/grammarly_editor_alert": 226,
        "lib/message": 233,
        react: "react"
    } ],
    222: [ function(e, t, n) {
        "use strict";
        function r(e) {
            var t = {
                Spelling: o.contextualSpelling,
                ContextualSpelling: o.contextualSpelling,
                Grammar: o.grammar,
                SentenceStructure: o.sentenceStructure,
                Punctuation: o.punctuation
            };
            if (void 0 === t[e]) throw new TypeError("Unknown alert group " + e);
            return t[e];
        }
        var i = e("./alert_replacement");
        n.createReplacement = i.createReplacement, n.createSimpleReplacement = i.createSimpleReplacement, 
        function(e) {
            e[e.contextualSpelling = 0] = "contextualSpelling", e[e.grammar = 1] = "grammar", 
            e[e.sentenceStructure = 2] = "sentenceStructure", e[e.punctuation = 3] = "punctuation", 
            e[e.style = 4] = "style", e[e.plagiarism = 5] = "plagiarism", e[e.synonym = 6] = "synonym";
        }(n.AlertGroup || (n.AlertGroup = {}));
        var o = n.AlertGroup;
        n.alertGroupFromString = r;
    }, {
        "./alert_replacement": 223
    } ],
    223: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function i(e, t) {
            return {
                re: new RegExp("^(" + e + ")(.*)$"),
                createResult: t
            };
        }
        function o(e) {
            function t(e) {
                var t = !0, n = !1, r = void 0;
                try {
                    for (var i, o = (0, c["default"])(u); !(t = (i = o.next()).done); t = !0) {
                        var a = i.value, s = e.match(a.re);
                        if (null !== s) return [ a.createResult(s), s[s.length - 1] ];
                    }
                } catch (l) {
                    n = !0, r = l;
                } finally {
                    try {
                        !t && o["return"] && o["return"]();
                    } finally {
                        if (n) throw r;
                    }
                }
            }
            for (var n = e, r = []; n.length > 0; ) {
                var i = t(n);
                if (void 0 === i) throw new Error("Coudln't parse transform");
                if ("insert" === i[0].type) {
                    var o = r[r.length - 1];
                    o && "delete" === o.type && r.push({
                        type: "arrow"
                    });
                }
                r.push(i[0]), n = i[1];
            }
            return r;
        }
        function a(e, t) {
            return {
                newText: t,
                transform: o(e)
            };
        }
        function s(e) {
            var t = [ {
                type: "insert",
                text: e
            } ];
            return {
                newText: e,
                transform: t
            };
        }
        var l = e("babel-runtime/core-js/get-iterator"), c = r(l), u = [ i("(?:\\<span class='gr_grammar_del'\\>([\\S\\s]*?)\\</span\\>)", function(e) {
            return {
                type: "delete",
                text: e[2]
            };
        }), i("(?:\\<span class='gr_grammar_ins'\\>([\\S\\s]*?)\\</span\\>)", function(e) {
            return {
                type: "insert",
                text: e[2]
            };
        }), i("(→)", function(e) {
            return {
                type: "arrow"
            };
        }), i("([^<>→]+)", function(e) {
            return {
                type: "text",
                text: e[1]
            };
        }) ];
        n.parseTransformHtml = o, n.createReplacement = a, n.createSimpleReplacement = s;
    }, {
        "babel-runtime/core-js/get-iterator": 14
    } ],
    224: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        var i = e("babel-runtime/core-js/object/get-prototype-of"), o = r(i), a = e("babel-runtime/helpers/createClass"), s = r(a), l = e("babel-runtime/helpers/possibleConstructorReturn"), c = r(l), u = e("babel-runtime/helpers/inherits"), d = r(u), f = e("babel-runtime/helpers/classCallCheck"), m = r(f), p = e("./alert"), h = e("./card_replacement"), g = function v(e, t) {
            (0, m["default"])(this, v), this.isUserAuthenticated = t, this.id = e.id, this.title = e.title, 
            this.explanation = e.explanation, this.details = e.details;
        };
        n.CardModelBaseImpl = g;
        var b = function(e) {
            function t(e, n, r) {
                (0, m["default"])(this, t);
                var i = (0, c["default"])(this, (t.__proto__ || (0, o["default"])(t)).call(this, e, r));
                return i._alert = e, i._replace = n, i.isUserAuthenticated = r, i.kind = "common", 
                i.details = i._alert.details, i.todo = i._alert.todo, i.isUnknowWord = "Unknown" === i._alert.category, 
                i.highlightText = i._alert.highlightText, i.extraProperties = i._alert.extraProperties, 
                i.hasAcknowledgeButton = 0 === i._alert.replacements.length && i._alert.group !== p.AlertGroup.contextualSpelling, 
                i.hasAddToDictionary = !!i._alert.extraProperties.hasAddToDictionary, i.isTextCard = h.isNoReplacement(i._alert.replacements), 
                i.title = i._getTitle(), i;
            }
            return (0, d["default"])(t, e), (0, s["default"])(t, [ {
                key: "_getTitle",
                value: function() {
                    return this.isUnknowWord ? "Unknown word" : "Misspelled" === this._alert.category ? "" : this._alert.extraProperties.isDidYouMean || this.extraProperties.isShowTitle ? "Check word usage" : this._alert.todo;
                }
            }, {
                key: "getFooterProps",
                value: function() {
                    return {
                        hasAcknowledgeButton: this.hasAcknowledgeButton,
                        hasAddToDictionary: this.hasAddToDictionary
                    };
                }
            }, {
                key: "getReplacements",
                value: function() {
                    var e = this._alert.replacements;
                    return h.isNoReplacement(e) ? new h.EmptyReplacement() : new h.CardReplacementList(this.title, e, this._replace);
                }
            } ]), t;
        }(g);
        n.CommonCardModelImpl = b;
        var _ = function y(e, t, n) {
            var r = this;
            (0, m["default"])(this, y), this._alert = e, this._replace = t, this.isUserAuthenticated = n, 
            this.kind = "synonyms", this.meanings = this._alert.meanings.map(function(e) {
                return {
                    title: e.title,
                    list: new h.CardReplacementFlatList("", e.replacements, function(e) {
                        return r._replace(e);
                    })
                };
            }), this.isActive = !1, this.isAnyMeanings = Boolean(this.meanings.length), this.id = this._alert.id, 
            this.title = this._alert.title, this.explanation = "", this.details = "";
        };
        n.SynonymsCardModelImpl = _;
    }, {
        "./alert": 222,
        "./card_replacement": 225,
        "babel-runtime/core-js/object/get-prototype-of": 21,
        "babel-runtime/helpers/classCallCheck": 28,
        "babel-runtime/helpers/createClass": 29,
        "babel-runtime/helpers/inherits": 32,
        "babel-runtime/helpers/possibleConstructorReturn": 33
    } ],
    225: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function i(e) {
            return !e || 0 === e.length;
        }
        function o(e) {
            return e.slice(e.findIndex(function(e) {
                return "arrow" === e.type;
            }) + 1).filter(function(e) {
                return "delete" !== e.type;
            }).map(function(e) {
                return "insert" === e.type || "text" === e.type ? e.text : "";
            }).join("");
        }
        var a = e("babel-runtime/core-js/object/get-prototype-of"), s = r(a), l = e("babel-runtime/helpers/possibleConstructorReturn"), c = r(l), u = e("babel-runtime/helpers/inherits"), d = r(u), f = e("babel-runtime/helpers/classCallCheck"), m = r(f);
        !function(e) {
            e[e.single = 0] = "single", e[e.list = 1] = "list", e[e.flatList = 2] = "flatList", 
            e[e.empty = 3] = "empty";
        }(n.CardReplacementTemplate || (n.CardReplacementTemplate = {}));
        var p = n.CardReplacementTemplate;
        n.isNoReplacement = i;
        var h = function v() {
            (0, m["default"])(this, v), this.template = p.empty, this.headerText = "";
        };
        n.EmptyReplacement = h;
        var g = function y(e, t, n) {
            var r = this;
            (0, m["default"])(this, y), this.headerText = e, this._replacement = t, this._onReplace = n, 
            this.transform = this._replacement.transform, this.onReplace = function() {
                return r._onReplace(r._replacement.newText);
            }, this.template = p.single;
        };
        n.CardReplacementSingle = g;
        var b = function w(e, t, n) {
            var r = this;
            (0, m["default"])(this, w), this.headerText = e, this.replacements = t, this._onReplace = n, 
            this.template = p.list, this.getOnReplace = function(e) {
                return function() {
                    r._onReplace(e.newText, o(e.transform));
                };
            };
        };
        n.CardReplacementList = b;
        var _ = function(e) {
            function t(e, n, r) {
                (0, m["default"])(this, t);
                var i = (0, c["default"])(this, (t.__proto__ || (0, s["default"])(t)).call(this, e, n, r));
                return i.headerText = e, i.template = p.flatList, i;
            }
            return (0, d["default"])(t, e), t;
        }(b);
        n.CardReplacementFlatList = _;
    }, {
        "babel-runtime/core-js/object/get-prototype-of": 21,
        "babel-runtime/helpers/classCallCheck": 28,
        "babel-runtime/helpers/inherits": 32,
        "babel-runtime/helpers/possibleConstructorReturn": 33
    } ],
    226: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function i(e) {
            var t = e.rawMatch;
            return d.invariant("synonym" !== t.action, "Do not use `getBasicAlertFields` for synonyms."), 
            {
                id: t.id.toString(),
                hidden: t.hidden,
                category: t.category,
                isFree: t.free,
                highlightText: t.highlightText,
                range: {
                    start: t.begin,
                    end: t.end
                },
                group: f.alertGroupFromString(t.group)
            };
        }
        function o(e) {
            var t = e.rawMatch, n = Number(t.synonyms.pos), r = t.synonyms.token, i = n + r.length;
            return {
                id: e.id,
                hidden: !1,
                category: t.category,
                isFree: !0,
                highlightText: r,
                range: {
                    start: n,
                    end: i
                },
                group: f.AlertGroup.synonym
            };
        }
        function a(e) {
            var t = "common", n = e.rawMatch, r = n.extra_properties, o = i(e), a = {
                title: n.title,
                details: n.details,
                explanation: n.explanation
            }, s = (0, u["default"])(o, a), l = {
                kind: t,
                todo: n.todo,
                replacements: (n.transforms || []).map(function(e, t) {
                    return f.createReplacement(e, n.replacements[t]);
                }),
                extraProperties: {
                    hasAddToDictionary: s.group === f.AlertGroup.contextualSpelling && "General" === n.point && ("Misspelled" === n.category || "Unknown" === n.category),
                    isDidYouMean: !!r.did_you_mean,
                    isShowTitle: !!r.show_title,
                    isEnchancement: !!r.enhancement,
                    plagiarismUrl: r.url,
                    sentence: r.sentence,
                    priority: r.priority ? parseInt(r.priority, 10) : 0
                }
            };
            return (0, u["default"])(s, l);
        }
        function s(e) {
            var t = "synonym", n = e.rawMatch, r = o(e), i = {
                title: n.synonyms.token,
                details: "",
                explanation: ""
            }, a = (0, u["default"])(r, i), s = {
                kind: t,
                meanings: n.synonyms.meanings.map(function(e) {
                    return {
                        title: e.meaning,
                        replacements: e.synonyms.map(function(e) {
                            return f.createSimpleReplacement(e.derived);
                        })
                    };
                }),
                replacements: (n.replacements || []).map(f.createSimpleReplacement)
            };
            return (0, u["default"])(a, s);
        }
        function l(e) {
            var t = e.rawMatch;
            if (!t.group && "synonyms" === t.action) return s(e);
            var n = f.alertGroupFromString(e.rawMatch.group);
            switch (n) {
              default:
                return a(e);
            }
        }
        var c = e("babel-runtime/core-js/object/assign"), u = r(c), d = e("../utils"), f = e("./alert");
        n.createAlert = l;
    }, {
        "../utils": 229,
        "./alert": 222,
        "babel-runtime/core-js/object/assign": 18
    } ],
    227: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function i(e) {
            var t = e.filter(function(e) {
                return "insert" === e.type || "delete" === e.type;
            });
            return t.length > 0 ? t[t.length - 1].type + "Replacement" : "";
        }
        function o(e, t) {
            var n = e.slice(t).filter(function(e) {
                return "insert" === e.type;
            });
            return n.length > 0 ? n[0].text : "";
        }
        function a(e, t) {
            var n = e.slice(0, t).filter(function(e) {
                return "delete" === e.type;
            });
            return n.length > 0 ? n[0].text : "";
        }
        function s(e, t) {
            return !!e[t + 1] && "delete" === e[t + 1].type;
        }
        function l(e, t) {
            return !!e[t + 1] && "text" === e[t + 1].type;
        }
        function c(e, t) {
            return !!e[t + 1] && "insert" === e[t + 1].type;
        }
        function u(e) {
            return 0 === e.filter(function(e) {
                return "insert" !== e.type && "text" !== e.type;
            }).length;
        }
        function d(e) {
            return e.slice(e.findIndex(function(e) {
                return "arrow" === e.type;
            }) + 1);
        }
        function f(e, t, n, r, i) {
            return E.createElement("span", {
                className: k.cs(S.insertPart, n && S.insertWithWord, x.isSinglePunctuation(e) && S.insertPunctuation, x.isQuestion(e) && S.insertQuestion, r && S.nextIsWord),
                key: i
            }, x.highlightDiff(t, e));
        }
        function m(e, t, n) {
            return E.createElement("span", {
                className: k.cs(S.deletePart, x.isQuoteWithPunctuation(e) && S.deleteQuoteWithPunctuation, x.isPunctuation(e) && S.deletePunctuation, x.isColonOrSemicolon(e) && S.deleteColonOrSemicolon, x.isComma(e) && S.deleteComma, x.isExclamation(e) && S.deleteExclamation, x.isDash(e) && S.deleteDash, x.isQuestion(e) && S.deleteQuestion, x.isEllipsis(e) && S.deleteEllipsis, x.isQuote(e) && S.deleteQuote, x.isPeriod(e) && S.deletePeriod, x.isParenthesis(e) && S.deleteParenthesis, x.isDoubleComma(e) && S.deleteDoubleComma, x.isAphostrophe(e) && S.deleteAphostrophe, x.isLetter(e) && S.deleteLetter, x.isPunctuationAndLetter(e) && S.deletePunctuationBeforeLetter),
                key: n
            }, x.highlightDiff(t, e));
        }
        function p(e, t, n, r) {
            return E.createElement("span", {
                className: k.cs(S.wordPart, t && S.wordBeforeDelete, n && S.wordBeforeInsert),
                key: r
            }, e);
        }
        function h(e, t, n) {
            return E.createElement("span", {
                key: n,
                className: S[i(e)],
                onClick: T.stopPropagation(t)
            }, d(e).map(function(t, n) {
                switch (t.type) {
                  case "delete":
                    return m(t.text, o(e, n), n);

                  case "insert":
                    return f(t.text, a(e, n), u(e), l(e, n), n);

                  case "text":
                    return p(t.text, s(e, n), c(e, n), n);

                  default:
                    throw new Error("Part " + t + " should not exist");
                }
            }));
        }
        function g(e, t) {
            return E.createElement("div", (0, w["default"])({
                className: S.title,
                onClick: T.stopPropagation(t)
            }, T.setInnerHTML(e)));
        }
        function b(e, t) {
            return E.createElement("div", {
                className: k.cs(S.singleReplacement, t)
            }, E.createElement("div", null, h(e.transform, e.onReplace)));
        }
        function _(e, t, n) {
            return E.createElement("div", {
                className: S.listReplacement
            }, e.replacements.map(function(r, i) {
                return E.createElement("div", {
                    key: i,
                    className: k.cs(S.listItemReplacementWrapper, n, t && S.flattenListItemReplacementWrapper, 0 === i && !e.headerText && S.listItemReplacementNoHeader),
                    onClick: e.getOnReplace(r)
                }, 0 === i && e.headerText && g(e.headerText, e.getOnReplace(r)), E.createElement("span", {
                    className: S.listItemReplacement
                }, h(r.transform, e.getOnReplace(r), i)));
            }));
        }
        function v(e, t) {
            switch (e.template) {
              case C.CardReplacementTemplate.single:
                return b(e, t);

              case C.CardReplacementTemplate.list:
                return _(e, !1, t);

              case C.CardReplacementTemplate.flatList:
                return _(e, !0, t);

              default:
                throw new Error("Replacement template " + C.CardReplacementTemplate[e.template] + " is not supported");
            }
        }
        var y = e("babel-runtime/helpers/extends"), w = r(y), E = e("react"), k = e("../../dom"), C = e("../model/card_replacement"), x = e("./utils"), T = e("../utils/react"), S = {
            title: "_6bffb0-title",
            replacement: "_6bffb0-replacement",
            singleReplacement: "_6bffb0-singleReplacement",
            listItemReplacement: "_6bffb0-listItemReplacement",
            sideCommas: "_6bffb0-sideCommas",
            orReplacement: "_6bffb0-orReplacement",
            insertReplacement: "_6bffb0-insertReplacement",
            longReplacement: "_6bffb0-longReplacement",
            didYouMean: "_6bffb0-didYouMean",
            wordPart: "_6bffb0-wordPart",
            wordBeforeInsert: "_6bffb0-wordBeforeInsert",
            insertPart: "_6bffb0-insertPart",
            insertPunctuation: "_6bffb0-insertPunctuation",
            deleteReplacement: "_6bffb0-deleteReplacement",
            deletePart: "_6bffb0-deletePart",
            wordBeforeDelete: "_6bffb0-wordBeforeDelete",
            deletePunctuation: "_6bffb0-deletePunctuation",
            deleteColonOrSemicolon: "_6bffb0-deleteColonOrSemicolon",
            deleteParenthesis: "_6bffb0-deleteParenthesis",
            deleteQuestion: "_6bffb0-deleteQuestion",
            deleteExclamation: "_6bffb0-deleteExclamation",
            deletePeriod: "_6bffb0-deletePeriod",
            deleteQuote: "_6bffb0-deleteQuote",
            deleteDash: "_6bffb0-deleteDash",
            deleteEllipsis: "_6bffb0-deleteEllipsis",
            deleteQuoteWithPunctuation: "_6bffb0-deleteQuoteWithPunctuation",
            deleteApostrophe: "_6bffb0-deleteApostrophe",
            deletePunctuationBeforeLetter: "_6bffb0-deletePunctuationBeforeLetter",
            deleteLetter: "_6bffb0-deleteLetter",
            deleteDoubleComma: "_6bffb0-deleteDoubleComma",
            insertQuestion: "_6bffb0-insertQuestion",
            nextIsWord: "_6bffb0-nextIsWord",
            listReplacement: "_6bffb0-listReplacement",
            arrowPart: "_6bffb0-arrowPart",
            bold: "_6bffb0-bold",
            orSeparator: "_6bffb0-orSeparator",
            didYouMeanLabel: "_6bffb0-didYouMeanLabel",
            listItemReplacementNoHeader: "_6bffb0-listItemReplacementNoHeader",
            listItemReplacementWrapper: "_6bffb0-listItemReplacementWrapper",
            flattenListItemReplacementWrapper: "_6bffb0-flattenListItemReplacementWrapper"
        };
        n.Replacement = function(e) {
            return E.createElement("div", {
                className: k.cs(S.replacement)
            }, v(e.replacement, e.itemClassName));
        };
    }, {
        "../../dom": 184,
        "../model/card_replacement": 225,
        "../utils/react": 230,
        "./utils": 228,
        "babel-runtime/helpers/extends": 31,
        react: "react"
    } ],
    228: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return null !== e && e.replace(/\s/g, "").length < 3 && null !== e.match(k);
        }
        function i(e) {
            return null !== e && e.replace(/\s/g, "").length < 3 && null !== e.match(/[;:]/);
        }
        function o(e) {
            return null !== e && 1 === e.replace(/\s/g, "").length && r(e);
        }
        function a(e) {
            return null !== e && null !== e.match(/["'”][.,;]/);
        }
        function s(e) {
            return '"' === e || "”" === e || "“" === e;
        }
        function l(e) {
            return null !== e && null !== e.match(/,,/);
        }
        function c(e) {
            return null !== e && e.match(/[.,;:!?\\\/…\-—()]\s*[a-z]/i);
        }
        function u(e) {
            return "’" === e;
        }
        function d(e) {
            return "," === e;
        }
        function f(e) {
            return "!" === e;
        }
        function m(e) {
            return "-" === e || "—" === e;
        }
        function p(e) {
            return "?" === e;
        }
        function h(e) {
            return "." === e;
        }
        function g(e) {
            return "…" === e;
        }
        function b(e) {
            return ")" === e || "(" === e;
        }
        function _(e) {
            return null !== e && 1 === e.length && null !== e.match(/[a-z]/i);
        }
        function v(e, t) {
            if (e.length <= 4) return y.createElement("span", null, t);
            var n = w.textdiff(e, t), r = n.from, i = n.to, o = n.oldFragment, a = n.newFragment, s = 1 === a.length && r > 0 && e[r - 1] === a, l = 1 === o.length && 0 === a.length && t[r - 1] === o, c = r, u = a;
            return (s || l) && (c = r - 1), s && (u = a + a), l && (u = o), u.length > 3 ? y.createElement("span", null, t) : y.createElement("span", null, e.substring(0, c), y.createElement("span", {
                className: E.bold
            }, u), e.substring(i));
        }
        var y = e("react"), w = e("@grammarly-npm/textdiff"), E = {
            title: "_6bffb0-title",
            replacement: "_6bffb0-replacement",
            singleReplacement: "_6bffb0-singleReplacement",
            listItemReplacement: "_6bffb0-listItemReplacement",
            sideCommas: "_6bffb0-sideCommas",
            orReplacement: "_6bffb0-orReplacement",
            insertReplacement: "_6bffb0-insertReplacement",
            longReplacement: "_6bffb0-longReplacement",
            didYouMean: "_6bffb0-didYouMean",
            wordPart: "_6bffb0-wordPart",
            wordBeforeInsert: "_6bffb0-wordBeforeInsert",
            insertPart: "_6bffb0-insertPart",
            insertPunctuation: "_6bffb0-insertPunctuation",
            deleteReplacement: "_6bffb0-deleteReplacement",
            deletePart: "_6bffb0-deletePart",
            wordBeforeDelete: "_6bffb0-wordBeforeDelete",
            deletePunctuation: "_6bffb0-deletePunctuation",
            deleteColonOrSemicolon: "_6bffb0-deleteColonOrSemicolon",
            deleteParenthesis: "_6bffb0-deleteParenthesis",
            deleteQuestion: "_6bffb0-deleteQuestion",
            deleteExclamation: "_6bffb0-deleteExclamation",
            deletePeriod: "_6bffb0-deletePeriod",
            deleteQuote: "_6bffb0-deleteQuote",
            deleteDash: "_6bffb0-deleteDash",
            deleteEllipsis: "_6bffb0-deleteEllipsis",
            deleteQuoteWithPunctuation: "_6bffb0-deleteQuoteWithPunctuation",
            deleteApostrophe: "_6bffb0-deleteApostrophe",
            deletePunctuationBeforeLetter: "_6bffb0-deletePunctuationBeforeLetter",
            deleteLetter: "_6bffb0-deleteLetter",
            deleteDoubleComma: "_6bffb0-deleteDoubleComma",
            insertQuestion: "_6bffb0-insertQuestion",
            nextIsWord: "_6bffb0-nextIsWord",
            listReplacement: "_6bffb0-listReplacement",
            arrowPart: "_6bffb0-arrowPart",
            bold: "_6bffb0-bold",
            orSeparator: "_6bffb0-orSeparator",
            didYouMeanLabel: "_6bffb0-didYouMeanLabel",
            listItemReplacementNoHeader: "_6bffb0-listItemReplacementNoHeader",
            listItemReplacementWrapper: "_6bffb0-listItemReplacementWrapper",
            flattenListItemReplacementWrapper: "_6bffb0-flattenListItemReplacementWrapper"
        }, k = /["'”“.,;:!?\\\/…\-—()]/;
        n.isPunctuation = r, n.isColonOrSemicolon = i, n.isSinglePunctuation = o, n.isQuoteWithPunctuation = a, 
        n.isQuote = s, n.isDoubleComma = l, n.isPunctuationAndLetter = c, n.isAphostrophe = u, 
        n.isComma = d, n.isExclamation = f, n.isDash = m, n.isQuestion = p, n.isPeriod = h, 
        n.isEllipsis = g, n.isParenthesis = b, n.isLetter = _, n.highlightDiff = v;
    }, {
        "@grammarly-npm/textdiff": 12,
        react: "react"
    } ],
    229: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function i(e, t) {
            if (!e) throw new m(t);
        }
        var o = e("babel-runtime/core-js/object/get-prototype-of"), a = r(o), s = e("babel-runtime/helpers/classCallCheck"), l = r(s), c = e("babel-runtime/helpers/possibleConstructorReturn"), u = r(c), d = e("babel-runtime/helpers/inherits"), f = r(d), m = function(e) {
            function t(e) {
                return (0, l["default"])(this, t), (0, u["default"])(this, (t.__proto__ || (0, a["default"])(t)).call(this, "Invariant condition failed: " + (e ? "string" == typeof e ? e : e() : "(unnamed)")));
            }
            return (0, f["default"])(t, e), t;
        }(Error);
        n.InvariantError = m, n.invariant = i;
    }, {
        "babel-runtime/core-js/object/get-prototype-of": 21,
        "babel-runtime/helpers/classCallCheck": 28,
        "babel-runtime/helpers/inherits": 32,
        "babel-runtime/helpers/possibleConstructorReturn": 33
    } ],
    230: [ function(e, t, n) {
        "use strict";
        function r(e, t) {
            return {
                dangerouslySetInnerHTML: {
                    __html: o.sanitize(e, t)
                }
            };
        }
        function i(e) {
            return function(t) {
                t.stopPropagation(), e(t);
            };
        }
        var o = e("./string");
        n.setInnerHTML = r, n.stopPropagation = i;
    }, {
        "./string": 231
    } ],
    231: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e ? e[0].toUpperCase() + e.slice(1) : "";
        }
        function i(e) {
            return e ? e.replace(/(?:^|[-_])(\w)/g, function(e, t) {
                return t ? t.toUpperCase() : "";
            }) : "";
        }
        function o() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments[1];
            return e && "undefined" != typeof window ? t ? c.sanitize(e, {
                ALLOWED_TAGS: t
            }) : c.sanitize(e) : "";
        }
        function a(e, t) {
            var n = e.match(t);
            return n && n[1];
        }
        function s(e) {
            return e.split(/\s+/)[0];
        }
        function l(e, t, n) {
            return 1 === e ? t : n;
        }
        var c = e("dompurify");
        n.nbsp = String.fromCharCode(160), n.capitalize = r, n.camelize = i, n.sanitize = o, 
        n.getFirstMatch = a, n.getFirstWord = s, n.pluralize = l;
    }, {
        dompurify: "dompurify"
    } ],
    232: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function i() {
            return new f["default"](function(e) {
                var t = setTimeout(function() {
                    return p.forge.tabs.getCurrentTabUrl(e);
                }, 2e3);
                p.forge.tabs.getCurrentTabUrl(function(n) {
                    clearTimeout(t), e(n);
                });
            });
        }
        function o(e, t) {
            return h.isFunction(e) && (t = e, e = ""), t ? !h.isBgOrPopup() && p.forge ? void m.emitBackground("get-domain", {}, t) : void (p.forge && p.forge.tabs ? i().then(function(e) {
                return t(l(e));
            }) : t(s(e))) : s(e);
        }
        function a(e) {
            return !h.isBgOrPopup() && p.forge ? m.promiseBackground("get-domain") : p.forge && p.forge.tabs ? f["default"].race([ i().then(l), h.delay(1e4).then(function() {
                throw new Error("Request to forge.tabs.getCurrentTabUrl rejected by timeout");
            }) ]) : s(e);
        }
        function s(e) {
            var t = e && e.ownerDocument || document, n = t.location || t.defaultView.location;
            return n ? b(n.hostname) : "";
        }
        function l(e) {
            if (h.isFF() && /^about:/.test(e)) return e;
            var t = document.createElement("a");
            return t.href = e, b(t.hostname);
        }
        function c(e) {
            var t = e && e.ownerDocument || document, n = t.location || t.defaultView.location;
            return n ? n.pathname + n.search : "";
        }
        function u() {
            for (var e = new RegExp("^(?:[a-z]+:)?//", "i"), t = "", n = document.getElementsByTagName("link"), r = 0; r < n.length; r++) {
                var i = n[r], o = '"' + i.getAttribute("rel") + '"', a = /(\"icon )|( icon\")|(\"icon\")|( icon )/i;
                o.search(a) != -1 && (t = i.getAttribute("href"));
            }
            return t || (t = "favicon.ico"), e.test(t) ? t : "/" != t[0] ? "//" + document.location.host + document.location.pathname + t : "//" + document.location.host + t;
        }
        var d = e("babel-runtime/core-js/promise"), f = r(d), m = e("./message"), p = e("./forge"), h = e("./util"), g = e("./page-config/defaults");
        n.currentUrl = i, n.getDomain = o, n.promiseGetDomain = a, n.domainFromUrl = l, 
        n.isFacebookSite = function() {
            return g.FACEBOOK_SITES.includes(o());
        }, n.isJiraSite = function() {
            return /\.atlassian\.net/.test(o());
        };
        var b = function(e) {
            return e.replace("www.", "");
        };
        n.getUrl = c, n.getFavicon = u;
    }, {
        "./forge": 212,
        "./message": 233,
        "./page-config/defaults": 234,
        "./util": 259,
        "babel-runtime/core-js/promise": 25
    } ],
    233: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function i(e, t) {
            function n() {
                a(e, n);
                for (var r = arguments.length, i = Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                t.apply(this, i);
            }
            o(e, n);
        }
        function o(e, t, r, i) {
            if ("__bgerror" == e) return w.on("__bgerror", t);
            var o = E[e] = E[e] || [];
            if (o.length) o.push(t); else {
                o.push(t);
                try {
                    _.forge.message.listen(e, function() {
                        var e = !0, t = !1, n = void 0;
                        try {
                            for (var r, i = (0, h["default"])(o); !(e = (r = i.next()).done); e = !0) {
                                var a = r.value;
                                a.apply(void 0, arguments);
                            }
                        } catch (s) {
                            t = !0, n = s;
                        } finally {
                            try {
                                !e && i["return"] && i["return"]();
                            } finally {
                                if (t) throw n;
                            }
                        }
                    }, r, i);
                } catch (a) {
                    n.emitError(a);
                }
            }
        }
        function a(e, t) {
            if ("__bgerror" == e) return w.off("__bgerror", t);
            var n = E[e];
            if (n) {
                var r = n.indexOf(t);
                r != -1 && n.splice(r, 1), 0 == n.length && delete E[e];
            }
        }
        function s(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = arguments[2], i = arguments[3];
            try {
                _.forge.message.broadcast(e, t, r, i);
            } catch (o) {
                n.emitError(o);
            }
        }
        function l(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i = arguments[3], o = arguments[4];
            try {
                if (!e) throw TypeError("emitTo can't be used without destination point");
                _.forge.message.sendTo(e, t, r, i, o);
            } catch (a) {
                n.emitError(a);
            }
        }
        function c(e, t, r, i) {
            try {
                _.forge.message.toFocussed(e, t, r, i);
            } catch (o) {
                n.emitError(o);
            }
        }
        function u(e, t, r, i) {
            try {
                _.forge.message.broadcastBackground(e, t, r, i);
            } catch (o) {
                n.emitError(o);
            }
        }
        function d(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e4, i = new m["default"](function(r, i) {
                try {
                    _.forge.message.broadcastBackground(e, t, r, i);
                } catch (o) {
                    i(o), n.emitError(o);
                }
            });
            return m["default"].race([ i, v.delay(r).then(function() {
                throw new Error("Request to bg page (" + e + ") rejected by timeout");
            }) ]);
        }
        var f = e("babel-runtime/core-js/promise"), m = r(f), p = e("babel-runtime/core-js/get-iterator"), h = r(p), g = e("lodash"), b = e("emitter"), _ = e("./forge"), v = e("./util"), y = e("./dom"), w = b({}), E = {};
        n.one = i, n.on = o, n.off = a, n.emitTabs = s, n.emitTo = l, n.emitFocusedTab = c, 
        n.emitBackground = u, n.promiseBackground = d, n.emitError = g.throttle(function(e) {
            return w.emit("__bgerror", e);
        }, 1e3), v.isBg() && y.listen(document, "grammarly:offline", function() {
            return n.emitError("proxy dead");
        });
    }, {
        "./dom": 184,
        "./forge": 212,
        "./util": 259,
        "babel-runtime/core-js/get-iterator": 14,
        "babel-runtime/core-js/promise": 25,
        emitter: "emitter",
        lodash: "lodash"
    } ],
    234: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        var i, o = e("babel-runtime/helpers/defineProperty"), a = r(o), s = e("babel-runtime/helpers/toConsumableArray"), l = r(s), c = e("lodash"), u = e("lib/config");
        n.PROTOCOL_VERSION = "1.0", n.SITES_TO_RELOAD = [ "inbox.google.com", "mail.google.com", "yahoo.com", "mail.live.com", "facebook.com", "tumblr.com", "stackoverflow.com", "wordpress.com", "wordpress.org", "blogspot.com" ], 
        n.FACEBOOK_SITES = [ "facebook.com", "messenger.com", "work.fb.com", "business.facebook.com" ], 
        n.HTML_GHOST_SITES = [ "twitter.com" ].concat((0, l["default"])(n.FACEBOOK_SITES)), 
        n.CUSTOM_UNSUPPORTED_MESSAGES = {
            "drive.google.com": {
                title: "Google Drive",
                message: 'We hope to support Google Drive apps<br/> in the future, but for now please use your</br> <a class="openGrammarly" href="' + u.URLS.app + '">Grammarly Editor</a>.'
            },
            "docs.google.com": {
                title: "Google Drive",
                message: 'We hope to support Google Drive apps<br/> in the future, but for now please use your</br> <a class="openGrammarly" href="' + u.URLS.app + '">Grammarly Editor</a>.'
            },
            "chrome.google.com": {
                title: "Web Store"
            }
        };
        var d = 18e5;
        n.PAGE_CONFIG_DEFAULT_INTERVAL = d, n.PAGE_CONFIG_UPDATE_INTERVALS = [ 6e5, n.PAGE_CONFIG_DEFAULT_INTERVAL, 36e5, 108e5, 432e5, 864e5, 31536e6 ], 
        n.OVERRIDE_PAGE_CONFIG = {}, n.PAGE_CONFIG_INTERNAL = (i = {
            version: {
                enabled: !1,
                servicePage: !0
            },
            extensions: {
                enabled: !1,
                servicePage: !0
            },
            settings: {
                enabled: !1,
                servicePage: !0
            },
            "com.safari.grammarlyspellcheckergrammarchecker": {
                enabled: !1,
                matchInclusions: !0,
                servicePage: !0
            }
        }, (0, a["default"])(i, "app." + u.GRAMMARLY_DOMAIN, {
            enabled: !1,
            grammarlyEditor: !0
        }), (0, a["default"])(i, "linkedin.com", {
            pages: {
                "/messaging": {
                    afterReplaceEvents: [ "input" ]
                }
            }
        }), (0, a["default"])(i, "plus.google.com", {
            afterReplaceEvents: [ "keyup" ],
            minFieldHeight: 0,
            minFieldWidth: 0
        }), (0, a["default"])(i, "facebook.com", {
            minFieldHeight: 0
        }), (0, a["default"])(i, "mail.google.com", {
            fields: [ {
                name: "to"
            }, {
                name: "cc"
            }, {
                name: "bcc"
            }, {
                className: "vO"
            } ],
            subframes: !1
        }), (0, a["default"])(i, "drive.google.com", {
            track: !0
        }), (0, a["default"])(i, "docs.google.com", {
            track: !0
        }), (0, a["default"])(i, "app.asana.com", {
            fields: [ {
                className: "task-row-text-input"
            } ]
        }), (0, a["default"])(i, "tumblr.com", {
            fields: [ {
                attr: [ "aria-label", "Post title" ]
            }, {
                attr: [ "aria-label", "Type or paste a URL" ]
            } ]
        }), (0, a["default"])(i, "chrome.google.com", {
            dontShowDisabledBadge: !0
        }), i);
        var f = {
            "hootsuite.com": {
                enabled: !1
            },
            "chrome.google.com": {
                enabled: !1
            },
            "facebook.com": {
                enabled: !0,
                pages: {
                    ".*/notes": {
                        enabled: !1
                    }
                }
            },
            "onedrive.live.com": {
                enabled: !1
            },
            "docs.com": {
                enabled: !1
            },
            "sp.docs.com": {
                enabled: !1
            },
            "docs.google.com": {
                enabled: !1
            },
            "drive.google.com": {
                enabled: !1
            },
            "texteditor.nsspot.net": {
                enabled: !1
            },
            "jsbin.com": {
                enabled: !1
            },
            "jsfiddle.net": {
                enabled: !1
            },
            "quora.com": {
                enabled: !1
            },
            "paper.dropbox.com": {
                enabled: !1
            },
            "mail.live.com": {
                enabled: !1,
                matchInclusions: !0
            },
            "imperavi.com": {
                enabled: !1
            },
            "usecanvas.com": {
                enabled: !1
            }
        };
        n.PAGE_CONFIG = {
            pageConfig: c.merge({}, f, n.PAGE_CONFIG_INTERNAL)
        };
    }, {
        "babel-runtime/helpers/defineProperty": 30,
        "babel-runtime/helpers/toConsumableArray": 35,
        "lib/config": 180,
        lodash: "lodash"
    } ],
    235: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function i(e) {
            var t = o(e), n = I.isFacebookSite();
            return !t || n || P.draftjs || (P.draftjs = !0, A.call("felog.info", "customFieldValidation.draftjs-disable")), 
            !t || n;
        }
        function o(e) {
            return e.hasAttribute("contenteditable") && e.querySelector('[data-contents="true"] > [data-editor], [data-block]');
        }
        function a(e) {
            function t() {
                T.on("mousemove", a, !0), ye = !0, we = new MutationObserver(c), we.observe(ge.body, {
                    childList: !0,
                    subtree: !0
                }), j.interval(h, 1e3);
            }
            function n(e) {
                var t = e.contentDocument, n = void 0, r = function(e) {
                    me = e.x, pe = e.y;
                    var n = le = t.body;
                    setTimeout(function() {
                        return Ee.emit("hover", {
                            target: n,
                            x: me,
                            y: pe
                        });
                    }, 0);
                }, i = function() {
                    !n && N.listen(t, "mousemove", r), n = !0;
                };
                return i(), {
                    on: i,
                    off: function() {
                        n && N.unlisten(t, "mousemove", r), n = !1;
                    }
                };
            }
            function r() {
                return [].concat((0, _["default"])(he)).find(function(e) {
                    return "IFRAME" != e.tagName && (le == e || N.isParent(le, e));
                });
            }
            function o() {
                var e = r();
                setTimeout(function() {
                    return Ee.emit("hover", {
                        target: e,
                        x: me,
                        y: pe
                    });
                }, 0);
            }
            function a(e) {
                me = e.x, pe = e.y, le = e.target, o();
            }
            function s(e) {
                function t(e) {
                    if (r.indexOf(e) != -1) return n.push(e);
                }
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], r = w.flatten(w.transform(he, function(e, t) {
                    return e.push(t);
                }, []));
                if (t(e) || !e.children) return n;
                for (var i = 0; i < e.children.length; i++) s(e.children[i], n);
                return n;
            }
            function c(e) {
                e.map(function(e) {
                    var t = e.removedNodes;
                    return [].concat((0, _["default"])(t)).map(function(e) {
                        return s(e);
                    });
                }).reduce(function(e, t) {
                    return e.concat.apply(e, (0, _["default"])(t));
                }, []).forEach(v);
            }
            function d() {
                ye && (T.off("mousemove", a, !0), j.cancelInterval(h), we.disconnect(), ye = !1);
            }
            function m() {
                return [].concat((0, _["default"])(he)).filter(function(e) {
                    return fe(e) || !e.offsetHeight;
                });
            }
            function h() {
                m().forEach(v);
                var e = Z();
                L(e) || Ee.emit("add", e);
            }
            function b() {
                w.each(he, function(e) {
                    return e.forEach(B);
                }), he = A(), Ee.emit("add", Z()), t();
            }
            function v(e) {
                ce.has(e) && (ce.get(e).off(), ce["delete"](e)), [ "textareas", "contenteditables", "iframes", "htmlghosts" ].forEach(function(t) {
                    var n = he[t].indexOf(e);
                    n != -1 && he[t].splice(n, 1);
                }), Ee.emit("remove", e);
            }
            function I() {
                return g["default"].wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.delegateYield(this.textareas, "t0", 1);

                      case 1:
                        return e.delegateYield(this.contenteditables, "t1", 2);

                      case 2:
                        return e.delegateYield(this.iframes, "t2", 3);

                      case 3:
                        return e.delegateYield(this.htmlghosts, "t3", 4);

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, te[0], this);
            }
            function A() {
                return (0, f["default"])({
                    textareas: [],
                    contenteditables: [],
                    iframes: [],
                    htmlghosts: []
                }, p["default"], I);
            }
            function P(e) {
                ge = e, _e = ge.location.hostname, ve = new RegExp("://" + _e), be = ge.defaultView, 
                ie && (ae = w.isNumber(ie.minFieldHeight) ? ie.minFieldHeight : ae, se = w.isNumber(ie.minFieldWidth) ? ie.minFieldHeight : se);
            }
            function L(e) {
                return 0 == e.textareas.length && 0 == e.contenteditables.length && 0 == e.iframes.length && 0 == e.htmlghosts.length;
            }
            function M(e) {
                if (!ie) return !0;
                if (ie.enabled === !1) return !1;
                if (!ie.fields && ie.enabled === !0) return !0;
                var t = function(t) {
                    var n = (0, u["default"])(t, 2), r = n[0], i = n[1];
                    return e.getAttribute(r) == i;
                };
                return !ie.fields.some(function(n) {
                    var r = n.name, i = n.id, o = n.className, a = n.attr;
                    return r && r == e.name || i && i == e.id || o && N.hasClass(e, o) || a && Array.isArray(a) && t(a);
                });
            }
            function R() {
                return !ge.location || 0 == ge.location.href.indexOf("about:") || 0 == ge.location.href.indexOf("chrome:") || !ge.body || 0 == ge.body.childNodes.length;
            }
            function F() {
                return "interactive" != ge.readyState && "complete" != ge.readyState;
            }
            function O() {
                var e = ge.documentElement.getBoundingClientRect();
                return e.height < oe && be.innerHeight < oe || e.width < oe;
            }
            function G(e) {
                return e.clientHeight < ae || e.clientWidth < se;
            }
            function z(e) {
                var t = k.restrictedAttrs.some(function(t) {
                    return Array.isArray(t) ? e.hasAttribute(t[0]) && e.getAttribute(t[0]).includes(t[1]) : e.hasAttribute(t);
                });
                return t || "rtl" == e.getAttribute("dir");
            }
            function B(e) {
                if ([].concat((0, _["default"])(k.restrictedAttrs), [ "spellcheck" ]).forEach(function(t) {
                    return e.removeAttribute(t);
                }), x.isHtmlGhostSite()) {
                    var t = e.parentElement && e.parentElement.parentElement;
                    t && t.removeAttribute("spellcheck");
                }
            }
            function W(e) {
                return N.getParentBySel(e, k.restrictedParentAttrs);
            }
            function H(e) {
                return i(e) && !z(e) && !G(e) && (N.isVisible(e) && M(e) || N.hasClass(e, "grammDemo"));
            }
            function U(e) {
                return [].concat((0, _["default"])(ge.querySelectorAll(e))).filter(H);
            }
            function V(e) {
                return U("textarea", e);
            }
            function q(e) {
                return ue ? [] : U('[contenteditable]:not([contenteditable="false"]):not([data-reactid])', e).filter(function(e) {
                    return !W(e);
                });
            }
            function Y(e) {
                return ue ? U(x.getHtmlGhostSelector(), e) : [];
            }
            function K(e) {
                if (D.href = e.src, (0 != e.src.indexOf("http") || ve.test(e.src)) && "about:blank" != e.src && (!e.src || e.src.indexOf("javascript:") != -1 || D.protocol == document.location.protocol && D.hostname == document.location.hostname && D.port == document.location.port) && !N.hasClass(e, S.Iframe.baseCls)) {
                    var t = null;
                    try {
                        t = e.contentDocument;
                    } catch (n) {
                        return;
                    }
                    if ((!t || t.body) && t && !z(e) && !z(t.body) && M(e)) {
                        var r = t.querySelector("html") || {
                            hasAttribute: j._f
                        };
                        if (("on" == t.designMode || t.body.hasAttribute("contenteditable") || "false" == t.body.getAttribute("contenteditable") || r.hasAttribute("contenteditable") || "false" == r.getAttribute("contenteditable")) && !G(e)) return j.isFF() && "on" == t.designMode && (t.designMode = "off", 
                        t.body.setAttribute("contenteditable", !0)), !0;
                    }
                }
            }
            function X(e) {
                return [].concat((0, _["default"])(ge.querySelectorAll("iframe"))).filter(K);
            }
            function Q(e) {
                he = w.mapValues(he, function(t, n) {
                    return [].concat(t, e[n]);
                }), he[p["default"]] = I;
            }
            function J(e, t) {
                return w.difference(e[t], he[t]);
            }
            function $(e, t) {
                var n = J(e, t);
                return de.shouldRemove ? n.filter(function(e) {
                    return !de.shouldRemove(e);
                }) : n;
            }
            function Z() {
                var e = ee(), t = (0, f["default"])({
                    textareas: $(e, "textareas"),
                    contenteditables: $(e, "contenteditables"),
                    iframes: $(e, "iframes"),
                    htmlghosts: $(e, "htmlghosts")
                }, p["default"], I);
                return Q(t), t.iframes.forEach(function(e) {
                    return ce.set(e, n(e));
                }), t;
            }
            function ee() {
                var e = A();
                return R() || F() || O() ? e : (0, l["default"])({}, e, {
                    textareas: V(),
                    contenteditables: q(),
                    iframes: X(),
                    htmlghosts: Y()
                });
            }
            var te = [ I ].map(g["default"].mark), ne = e.doc, re = void 0 === ne ? document : ne, ie = e.page, oe = 150, ae = 35, se = 300, le = void 0, ce = new y["default"](), ue = x.isHtmlGhostSite(), de = C.pageStyles(re).getFixesForCurrentDomain(), fe = de.shouldRemove || j._f, me = void 0, pe = void 0, he = A(), ge = void 0, be = void 0, _e = void 0, ve = void 0, ye = void 0, we = void 0;
            P(re);
            var Ee = E({
                get: Z,
                reset: b,
                remove: v,
                stop: d
            }), ke = Ee.on;
            return Ee.on = function(e, n) {
                ye || t(), ke(e, n), "hover" == e && o();
            }, Ee;
        }
        var s = e("babel-runtime/core-js/object/assign"), l = r(s), c = e("babel-runtime/helpers/slicedToArray"), u = r(c), d = e("babel-runtime/helpers/defineProperty"), f = r(d), m = e("babel-runtime/core-js/symbol/iterator"), p = r(m), h = e("babel-runtime/regenerator"), g = r(h), b = e("babel-runtime/helpers/toConsumableArray"), _ = r(b), v = e("babel-runtime/core-js/map"), y = r(v), w = e("lodash"), E = e("emitter"), k = e("./config"), C = e("./sites"), x = e("./ghost/html-ghost-locator"), T = e("./window-events"), S = e("./elements/iframe"), j = e("./util"), N = e("./dom"), I = e("./location"), A = e("./tracking"), D = document.createElement("a"), P = {
            draftjs: !1
        };
        n.PageFields = a;
    }, {
        "./config": 180,
        "./dom": 184,
        "./elements/iframe": 193,
        "./ghost/html-ghost-locator": 216,
        "./location": 232,
        "./sites": 240,
        "./tracking": 255,
        "./util": 259,
        "./window-events": 260,
        "babel-runtime/core-js/map": 17,
        "babel-runtime/core-js/object/assign": 18,
        "babel-runtime/core-js/symbol/iterator": 27,
        "babel-runtime/helpers/defineProperty": 30,
        "babel-runtime/helpers/slicedToArray": 34,
        "babel-runtime/helpers/toConsumableArray": 35,
        "babel-runtime/regenerator": 155,
        emitter: "emitter",
        lodash: "lodash"
    } ],
    236: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function i(e, t, n) {
            var r = {
                top: 0,
                left: 0,
                height: 0,
                width: 0
            };
            if (!e) return r;
            var o = e.ownerDocument, a = o.documentElement, s = e.getClientRects(), l = a.scrollTop || o.body.scrollTop, c = a.scrollLeft || o.body.scrollLeft, u = t && t.contentDocument;
            if (0 == s.length) return r;
            var f = (0, m["default"])(s).map(function(e) {
                return {
                    top: e.top + l,
                    left: e.left + c,
                    height: e.height,
                    width: e.width
                };
            });
            return u && u.documentElement && u.documentElement == a && !function() {
                var e = i(t);
                f = f.map(function(t) {
                    return (0, d["default"])({}, t, {
                        top: t.top + e.top - l,
                        left: t.left + e.left - c
                    });
                });
            }(), n && f || f[0];
        }
        function o(e, t, n) {
            var r = e.ownerDocument, i = l(r), o = e.clientWidth, a = e.clientHeight, s = {}, c = {
                top: t.top - r.body.scrollTop - a,
                left: t.left - o,
                bottom: r.body.scrollTop + i.height - t.top - t.height - a,
                right: r.body.scrollLeft + i.width - t.left - o
            };
            return c.bottom < 0 && c.bottom < c.top || n ? (s.top = t.top - a + 3, s.flip = !0) : (s.top = t.top + t.height - 3, 
            s.flip = !1), c.right < 0 ? s.left = i.width - o : s.left = t.left, t.forceCoords && (s.left = t.pageX, 
            s.top = s.flip ? t.pageY - a : t.pageY + 5), {
                rect: s,
                delta: c,
                sourceRect: t
            };
        }
        function a(e, t, n) {
            function r(e, t) {
                l[e] += o[t] / 2 - a[t] / 2, i[e] > l[e] && (l[e] = i[e]), i[e] + i[t] < l[e] + a[t] && (l[e] = i[e] + i[t] - a[t]);
            }
            var i = s(), o = t.getBoundingClientRect(), a = e.getBoundingClientRect(), l = {
                flipY: !1,
                flipX: !1
            }, c = {
                top: o.top - i.top,
                left: o.left - i.left,
                bottom: -o.bottom + i.bottom,
                right: -o.right + i.right
            };
            return n = n || "top:center", n = n.split(":"), l.top = o.top, "center" == n[0] ? r("top", "height") : "top" == n[0] ? c.top > a.height ? l.top -= a.height : (l.top += o.height, 
            l.flipY = !0) : "bottom" == n[0] && (c.bottom > a.height ? l.top += o.height : (l.top -= a.height, 
            l.flipY = !0)), l.left = o.left, "center" == n[1] ? r("left", "width") : "left" == n[1] ? (l.left += o.width - a.width, 
            c.left + o.width < a.width && (l.left = i.left)) : "right" == n[1] && c.right + o.width < a.width && (l.left += o.width + c.right - a.width), 
            l;
        }
        function s() {
            var e = document.createElement("div");
            e.style.cssText = "position: fixed;top: 0;left: 0;bottom: 0;right: 0;", document.documentElement.insertBefore(e, document.documentElement.firstChild);
            var t = e.getBoundingClientRect();
            return document.documentElement.removeChild(e), t;
        }
        function l(e) {
            var t = e.documentElement.clientTop || e.body.clientTop || 0, n = e.documentElement.clientLeft || e.body.clientLeft || 0, r = e.documentElement.scrollLeft || e.body.scrollLeft, i = e.documentElement.scrollTop || e.body.scrollTop, o = e.defaultView.innerHeight, a = e.defaultView.innerWidth;
            return {
                width: a,
                height: o,
                scrollTop: i - t,
                scrollLeft: r - n,
                top: t,
                left: n
            };
        }
        function c(e, t) {
            if (!e || e == t) return {
                x: 0,
                y: 0
            };
            var n = {
                x: e.offsetLeft,
                y: e.offsetTop
            }, r = c(e.offsetParent, t);
            for (var i in r) n[i] += r[i];
            return n;
        }
        var u = e("babel-runtime/core-js/object/assign"), d = r(u), f = e("babel-runtime/core-js/array/from"), m = r(f);
        n.getAbsRect = i, n.posToRect = o, n.posToEl = a, n.getPos = c;
    }, {
        "babel-runtime/core-js/array/from": 13,
        "babel-runtime/core-js/object/assign": 18
    } ],
    237: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function i(e) {
            if (e.data && (e.query || "post" != e.method) && (e.url += "?" + s(e.data)), e.data && "post" == e.method && !e.query && !e.body) {
                try {
                    e.body = (0, d["default"])(e.data);
                } catch (t) {
                    e.body = {}, console.warn(t);
                }
                e.headers = e.headers || {}, e.headers["Content-Type"] = e.headers["Content-Type"] || "application/json", 
                delete e.data;
            }
            return e.credentials = "include", e;
        }
        function o(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return t.url = e, i(t), h.isBg() || p.isTest ? a(t) : g.promiseBackground("fetch", t).then(function(e) {
                if (f.isObject(e) && e.error) throw new Error(e.error);
                return e;
            });
        }
        function a(e) {
            function t(t) {
                return t.ok ? t[e.isText ? "text" : "json"]() : t.text().then(function(e) {
                    throw {
                        name: "RequestError",
                        body: e,
                        statusCode: t.status,
                        message: t.statusText
                    };
                });
            }
            var n = e.url;
            return delete e.url, h.isFF() ? new c["default"](function(t, r) {
                m.request.ajax({
                    url: n,
                    data: e.data || e.body,
                    headers: e.headers,
                    type: (e.method || "GET").toUpperCase(),
                    dataType: "json",
                    timeout: e.timeout || b,
                    success: function(e) {
                        var n = void 0;
                        if ("string" == typeof e) if ("" === e) n = {}; else try {
                            n = JSON.parse(e);
                        } catch (i) {
                            return r({
                                name: "RequestError",
                                message: i
                            });
                        } else n = e;
                        return n.error ? r({
                            message: n.error
                        }) : void t(n);
                    },
                    error: function(e) {
                        return r({
                            name: "RequestError",
                            message: e.message,
                            statusCode: e.statusCode,
                            url: "Request timed out" === e.message ? n : ""
                        });
                    }
                });
            }) : c["default"].race([ window.fetch(n, e).then(t).then(function(e) {
                if (e.error) throw new Error(e.error);
                return e;
            }), h.delay(e.timeout || b).then(function() {
                throw new Error("Fetch request to " + n + " rejected by timeout");
            }) ]);
        }
        function s(e) {
            var t = "", n = function(n) {
                Array.isArray(e[n]) ? e[n].length && (t += "" + (t.length ? "&" : "") + e[n].map(function(e) {
                    return n + "=" + e;
                }).join("&")) : t += "" + (t.length ? "&" : "") + n + "=" + encodeURIComponent(e[n]);
            };
            for (var r in e) n(r);
            return t;
        }
        var l = e("babel-runtime/core-js/promise"), c = r(l), u = e("babel-runtime/core-js/json/stringify"), d = r(u), f = e("lodash"), m = e("./forge"), p = e("./config"), h = e("./util"), g = e("./message"), b = 1e4;
        h.isBg() && (e("whatwg-fetch"), g.on("fetch", function(e, t) {
            return a(e).then(t, function(e) {
                return t({
                    error: e.message
                });
            });
        })), n.transformOptions = i, n.fetch = o, n.paramStr = s;
    }, {
        "./config": 180,
        "./forge": 212,
        "./message": 233,
        "./util": 259,
        "babel-runtime/core-js/json/stringify": 16,
        "babel-runtime/core-js/promise": 25,
        lodash: "lodash",
        "whatwg-fetch": "whatwg-fetch"
    } ],
    238: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function i(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            g = n;
            var r = m.getAbsRect(e);
            y = t, h = {
                top: r.top + r.height + 1,
                left: r.left,
                width: 0,
                height: 2
            }, _ = Math.ceil(r.width / 8), b = r.width - _, setTimeout(function() {
                h.width = b, o();
            }, 10), setTimeout(function() {
                s();
            }, 500), o();
        }
        function o() {
            v = p.renderReactWithParent(f.createElement(E, {
                style: (0, c["default"])({}, h),
                className: g
            }), y.documentElement, w);
        }
        function a() {
            v && (v.remove(), v = null);
        }
        function s() {
            h.WebkitTransitionDuration = "0.2s", h.MozTransitionDuration = "0.2s", h.transitionDuration = "0.2s", 
            h.width = b + _, v && o();
        }
        var l = e("babel-runtime/core-js/object/assign"), c = r(l), u = e("babel-runtime/core-js/symbol"), d = r(u), f = e("react"), m = e("./position"), p = e("./dom"), h = void 0, g = void 0, b = 0, _ = 0, v = void 0, y = void 0, w = (0, 
        d["default"])("SelectionAnimator"), E = f.createClass({
            displayName: "AnimationLine",
            render: function() {
                return f.createElement("div", {
                    style: this.props.style,
                    className: "g-selection-anim " + this.props.className
                });
            }
        });
        n.selectionAnimator = {
            animate: i,
            remove: a,
            complete: s
        };
    }, {
        "./dom": 184,
        "./position": 236,
        "babel-runtime/core-js/object/assign": 18,
        "babel-runtime/core-js/symbol": 26,
        react: "react"
    } ],
    239: [ function(e, t, n) {
        "use strict";
        var r = e("emitter"), i = e("./config"), o = e("./dom");
        n.Selection = function(e) {
            function t(e) {
                return e.getRangeAt(0).getBoundingClientRect();
            }
            function n(e, t, n) {
                for (var r = e.split(/[.;!?]/g), i = 0, o = 0, a = 0; a < r.length; a++) {
                    if (o = i + r[a].length, t >= i && n <= o) {
                        var s = {
                            t: r[a],
                            s: t - i,
                            e: n - i
                        };
                        return s;
                    }
                    i = o + 1;
                }
            }
            function a(t) {
                var n = t.anchorNode;
                if (!n) return !1;
                var r = i.restrictedAttrs.map(function(e) {
                    return Array.isArray(e) ? "[" + e[0] + '="' + e[1] + '"]' : "[" + e + "]";
                }).join(","), a = t.toString().trim(), s = "TEXTAREA" != n.tagName && "INPUT" != n.tagName, l = !(e.activeElement && "INPUT" == e.activeElement.tagName || e.activeElement && "TEXTAREA" == e.activeElement.tagName), c = !o.isContentEditable(n), u = !o.getParentBySel(n, r) && !o.matchesSelector(n, r), d = !o.getParentBySel(n, "[contenteditable=true],[contenteditable=plaintext-only]") && !o.parentIsContentEditable(n);
                return !!(a && s && l && c && u && d);
            }
            function s(r) {
                var i = r.detail;
                if (2 != i) return void (c && (l.emit("unselect"), c = !1));
                c = !0;
                var o = e.getSelection(), s = a(o);
                if (s) {
                    var u = o.anchorNode.textContent, d = o.toString();
                    if (!d.match(/[0-9_±!@#$%^&*:"|<>?~().,:}{’=']/)) {
                        var f = {
                            t: d,
                            s: 0,
                            e: d.length
                        }, m = o.getRangeAt(0);
                        if (m.ownerDocument = e, o.anchorNode == o.focusNode) {
                            var p = o.anchorOffset, h = p + d.length;
                            f = n(u, p, h);
                        }
                        var g = {
                            data: {
                                v: f.t,
                                s: f.s,
                                e: f.e,
                                w: d
                            },
                            pos: t(o),
                            el: m
                        };
                        l.emit("select", g);
                    }
                }
            }
            o.listen(e, "click", s);
            var l = r({
                release: function() {
                    o.unlisten(e, "click", s);
                },
                isValidSelection: a
            }), c = !1;
            return l;
        };
    }, {
        "./config": 180,
        "./dom": 184,
        emitter: "emitter"
    } ],
    240: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function i(e, t) {
            return e.find(function(e) {
                return o(t, e.split(":"));
            });
        }
        function o(e, t) {
            var n = (0, f["default"])(t, 2), r = n[0], i = n[1], o = e.getAttribute(r);
            return o && (o == i || o.includes(i) && r + ":" + i);
        }
        function a() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document, t = m.getDomain({
                ownerDocument: e
            }), n = _[t];
            return {
                addDomainClass: function() {
                    e.documentElement.classList.add("gr__" + t.replace(/\./g, "_"));
                },
                customizeElements: function() {
                    n && h(n).each(function(t, n) {
                        return [].concat((0, u["default"])(e.querySelectorAll(n))).forEach(function(e) {
                            h.extend(e.style, t);
                        });
                    });
                },
                getFixesForCurrentDomain: function() {
                    var e = y[t];
                    if (e) return e;
                    var n = (0, l["default"])(y).filter(function(e) {
                        return e.includes("*");
                    }).find(function(e) {
                        return t.indexOf(e.replace("*", "")) > -1;
                    });
                    return n && y[n] || {};
                }
            };
        }
        var s = e("babel-runtime/core-js/object/keys"), l = r(s), c = e("babel-runtime/helpers/toConsumableArray"), u = r(c), d = e("babel-runtime/helpers/slicedToArray"), f = r(d), m = e("./location"), p = e("./util"), h = e("lodash"), g = e("./client-script"), b = e("./dom"), _ = {
            "translate.google.com": {
                "#gt-clear": {
                    zIndex: 2
                }
            },
            "linkedin.com": {
                ".mentions-highlighter": {
                    zIndex: 0
                }
            },
            "us.nakedwines.com": {
                ".postbutton": {
                    display: "inline-block"
                }
            }
        }, v = function() {
            var e = void 0;
            return function() {
                return "undefined" == typeof e && (e = !!document.querySelector("c-wiz")), e;
            };
        }(), y = {
            "twitter.com": {
                btnMargin: function(e, t) {
                    t.clientHeight > 40 || (e["margin-left"] = e["margin-left"] - 30);
                },
                btnDiff: function(e) {
                    if ("tweet-box-dm-conversation" == e.id) return [ -25, 1 ];
                    if (!(e.clientHeight > 40 || "tweet-box-home-timeline" != e.id)) return [ -30, 0 ];
                },
                fieldRestoreInlineStyles: function(e, t) {
                    "tweet-box-dm-conversation" == e.id && e.style["z-index"] != t.src["z-index"] && (e.style["z-index"] = t.src["z-index"], 
                    e.style.position = t.src.position, e.style.transition = "none", e.style.background = "transparent");
                }
            },
            "linkedin.com": {
                fieldStateForDomain: function(e) {
                    if ("IFRAME" == e.tagName && e.id) return e.id.replace(/\d*\d/, "");
                    var t = [ "class:trans" ];
                    return i(t, e);
                },
                menuPosLeft: function(e, t, n) {
                    return !p.isSafari() || n.enabled ? t : t - 7;
                }
            },
            "*.slack.com": {
                forceMinimize: function(e) {
                    return e.clientHeight > 40;
                },
                btnCustomContainer: function(e) {
                    return e;
                },
                btnCustomStyles: function(e, t) {
                    var n = t.clientHeight < 40 ? 25 : 0;
                    return e ? {
                        right: 10 + n,
                        bottom: 10,
                        left: "auto",
                        top: "auto"
                    } : {
                        right: -10,
                        bottom: -2,
                        left: "auto",
                        top: "auto"
                    };
                },
                customDefaultBg: function(e) {
                    return e.parentNode.parentNode.classList.contains("offline") ? "rgb(253, 241, 193)" : "rgb(255, 255, 255)";
                }
            },
            "*.zendesk.com": {
                customDefaultBg: function(e) {
                    return e.classList.contains("ember-text-area") && (e.parentNode.parentNode.parentNode.classList.contains("is-public") ? "#fff" : "#fff6d9") || null;
                }
            },
            "facebook.com": {
                fieldStateForDomain: function(e) {
                    var t = [ "role:textbox", "testid:ufi_comment_composer", "testid:react-composer-root" ], n = function(e, t) {
                        var n = (0, f["default"])(t, 2), r = (n[0], n[1]);
                        return e.dataset && e.dataset.testid == r ? "testid:" + r : b.getParentByData(e, "testid", r) ? "testid:" + r : void 0;
                    };
                    return t.find(function(t) {
                        var r = t.split(":"), i = (0, f["default"])(r, 2), a = i[0], s = i[1];
                        return "testid" == a ? n(e, [ a, s ]) : o(e, [ a, s ]);
                    });
                },
                ghostHeight: function(e) {
                    var t = parseInt(e, 10);
                    return t > 0 ? t + 1 + "px" : t + "px";
                },
                menuPosLeft: function(e, t) {
                    return e && e.el.name && "xhpc_message_text" == e.el.name ? Math.ceil(t) : t;
                },
                forceMinimize: function(e) {
                    return "ufi_reply_composer" == e.dataset.testid;
                },
                btnCustomContainer: function(e) {
                    if (e.dataset && ("ufi_comment_composer" == e.dataset.testid || "ufi_reply_composer" == e.dataset.testid)) return e;
                    if (e.name && "xhpc_message_text" == e.name) return e.parentNode;
                    var t = b.getParentByData(e, "testid", "react-composer-root");
                    if (t) {
                        var n = b.getParentByDepth.call(e, 3);
                        return n.parentNode.style.position = "relative", n;
                    }
                    return "webMessengerRecentMessages" == e.getAttribute("aria-controls") ? e : void 0;
                },
                btnCustomStyles: function(e, t) {
                    if ("webMessengerRecentMessages" == t.getAttribute("aria-controls")) return e ? {
                        right: 10,
                        bottom: 10,
                        left: "auto",
                        top: "auto"
                    } : {
                        right: -5,
                        bottom: 2,
                        left: "auto",
                        top: "auto"
                    };
                    if (t.dataset && "ufi_comment_composer" == t.dataset.testid) {
                        var n = b.getParentByDepth.call(t, 6).querySelector(".UFICommentAttachmentButtons"), r = n ? n.childNodes.length : 2, i = [ 56, 30, 0 ], o = e ? -i[r] : -74, a = e ? -3 : -14;
                        return {
                            right: o,
                            bottom: a,
                            left: "auto",
                            top: "auto"
                        };
                    }
                    if (t.dataset && "ufi_reply_composer" == t.dataset.testid || t.hasAttribute("aria-haspopup") && t.hasAttribute("aria-owns")) {
                        var s = b.getParentByDepth.call(t, 6).querySelector(".UFICommentAttachmentButtons"), l = s ? s.childNodes.length : 2, c = [ 60, 30, 0 ], u = e ? -c[l] : -74, d = e ? -3 : -8;
                        return {
                            right: u,
                            bottom: d,
                            left: "auto",
                            top: "auto"
                        };
                    }
                    return e ? {
                        right: 10,
                        bottom: 10,
                        left: "auto",
                        top: "auto"
                    } : {
                        right: -8,
                        bottom: -5,
                        left: "auto",
                        top: "auto"
                    };
                }
            },
            "mail.google.com": {
                btnCustomContainer: function(e) {
                    var t = b.getParentByTag(e, "TABLE"), n = t && b.getParentByTag(t, "TABLE"), r = n && n.querySelector('[command="Files"]');
                    return n && r && b.getParentByTag(r, "TABLE");
                },
                btnCustomStyles: function(e) {
                    return e ? {
                        right: 10,
                        top: -30,
                        left: "auto"
                    } : {
                        right: -2,
                        top: -25,
                        left: "auto"
                    };
                },
                shouldRemove: function(e) {
                    var t = b.getParentByTag(e, "TABLE");
                    if (t) {
                        var n = b.getParentByTag(t, "TABLE");
                        if (n) {
                            var r = n.querySelector('[role=toolbar][aria-label="Spell Check"]');
                            return r && r.offsetParent;
                        }
                    }
                }
            },
            "inbox.google.com": {
                btnCustomContainer: function(e) {
                    return e.parentNode;
                },
                btnCustomStyles: function(e) {
                    return e ? {
                        right: 12,
                        top: "auto",
                        left: "auto",
                        bottom: 62
                    } : {
                        right: -5,
                        top: "auto",
                        left: "auto",
                        bottom: 60
                    };
                }
            },
            "medium.com": {
                btnDiff: function(e) {
                    if (b.parentHasClass(e, "postArticle--full")) return [ -75, 0, !1 ];
                }
            },
            "plus.google.com": {
                forceMinimize: function(e) {
                    return e.clientHeight < 30;
                },
                btnCustomContainer: function(e) {
                    var t = function(e) {
                        return /comment/i.test(e.getAttribute("aria-label"));
                    };
                    return v() && t(e) ? e.parentNode : e;
                },
                btnCustomStyles: function(e, t) {
                    var n = v() ? -12 : -18, r = v() ? -5 : -10;
                    return e ? {
                        right: 10,
                        bottom: 10,
                        left: "auto",
                        top: "auto"
                    } : {
                        right: n,
                        bottom: r,
                        left: "auto",
                        top: "auto"
                    };
                },
                fieldParentCustomStyle: function(e) {
                    var t = {
                        "padding-bottom": "2px",
                        "overflow-x": "hidden"
                    };
                    return v() ? t : {};
                }
            },
            "app.asana.com": {
                forceMinimize: function(e) {
                    if (e.classList.contains("task-comments-input")) return !e.parentNode.parentNode.parentNode.classList.contains("focused");
                }
            },
            "youtube.com": {
                btnDiff: function(e) {
                    if (b.hasClass(e, "comment-simplebox-text")) return [ 15, 15 ];
                }
            }
        };
        n.pageStyles = a, function() {
            function e() {
                if (window.randomize) {
                    var e = window.randomize;
                    window.randomize = function(t) {
                        try {
                            if (t.data) {
                                var n = JSON.parse(t.data);
                                n[0] && n[0].parentWindowLocation && e(t);
                            }
                        } catch (t) {}
                    };
                }
            }
            (m.getDomain().indexOf("chase.com") > -1 || m.getDomain().indexOf("chaseonline.com") > -1) && g.ClientScript.addScript(document, [ e ]);
        }();
    }, {
        "./client-script": 179,
        "./dom": 184,
        "./location": 232,
        "./util": 259,
        "babel-runtime/core-js/object/keys": 22,
        "babel-runtime/helpers/slicedToArray": 34,
        "babel-runtime/helpers/toConsumableArray": 35,
        lodash: "lodash"
    } ],
    241: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function i(e) {
            if ("disconnected" != e) {
                var t = {};
                "string" == typeof e ? t.msg = e : e.error && (t.readyState = e.error.currentTarget && e.error.currentTarget.readyState, 
                t.returnValue = e.error.returnValue), v.call("felog.error", "socket_fail_bg", t), 
                console.error("capi error", e), window.emit || g(window), window.emit("bgerror", e || "when send message to the socket");
            }
        }
        function o(e) {
            function t(t, r, i) {
                if (t) {
                    var a = t.socketId, s = C[a], l = t.method, c = "close" == l;
                    !s && c || e.get().authToCapiDegradation || (s || (s = I(t, n, i, e), C[a] = s), 
                    t.arg && "start" == t.arg.action && (0, f["default"])(t.arg, o), l && ("connect" == l ? e.refreshUser(!0, "onSessionStart").then(function() {
                        return s[l](t.arg);
                    }) : s[l](t.arg), c && n(a)));
                }
            }
            function n(e) {
                C[e] && (C[e].close(), C[e].emit = function(e, t) {}, delete C[e]);
            }
            var r = {};
            window.socketServer = r, _.on("iframe-mode", function(e) {
                console.log("IFRAME MODE", e.id, C), C[e.id].iframeMode(e.iframeMode);
            }, i, !0), _.on("socket-client", t, i, !0), r.sockets = C, r.toString = function() {
                return "[object SocketServer]";
            };
            var o = {};
            return r.wsReconnect = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, f["default"])(o, e), (0, u["default"])(C).forEach(function(e) {
                    return e.reconnect();
                });
            }, r;
        }
        function a() {
            var e = x.slice(0);
            return x.length = 0, e;
        }
        var s = e("babel-runtime/regenerator"), l = r(s), c = e("babel-runtime/core-js/object/values"), u = r(c), d = e("babel-runtime/core-js/object/assign"), f = r(d), m = e("babel-runtime/core-js/promise"), p = r(m), h = function(e, t, n, r) {
            return new (n || (n = p["default"]))(function(i, o) {
                function a(e) {
                    try {
                        l(r.next(e));
                    } catch (t) {
                        o(t);
                    }
                }
                function s(e) {
                    try {
                        l(r["throw"](e));
                    } catch (t) {
                        o(t);
                    }
                }
                function l(e) {
                    e.done ? i(e.value) : new n(function(t) {
                        t(e.value);
                    }).then(a, s);
                }
                l((r = r.apply(e, t)).next());
            });
        }, g = e("emitter"), b = e("websocket"), _ = e("lib/message"), v = e("lib/tracking"), y = e("lib/timers"), w = e("lib/util"), E = e("lib/config"), k = e("lib/bg/cookie"), C = {}, x = [];
        n.SocketServer = o;
        var T = w.getBrowser(), S = "other" === T ? "extension" : "extension_" + T, j = {
            docid: w.guid(),
            client: S,
            protocolVersion: "1.0",
            action: "start",
            id: 0
        }, N = 12e4, I = function(e, t, n, r) {
            function o(e, t) {
                if (L(e, t), "disconnect" == e && M) return void (M = !1);
                var r = setTimeout(d, 5e3), o = A ? "socket-server-iframe" : "socket-server";
                return console.log("from ws", e, I, t, o), t && t.error && "not_authorized" == t.error ? m(S) : void _.emitTo(n, o, {
                    socketId: I,
                    event: e,
                    msg: t,
                    id: w.guid()
                }, function(e) {
                    return e && clearTimeout(r);
                }, i);
            }
            function a() {
                R || (R = !0, s().then(function() {
                    return R = !1;
                }));
            }
            function s() {
                var e = void 0, t = new p["default"](function(t) {
                    return e = t;
                });
                return S.one("connect", e), S.isConnected() ? (S.one("disconnect", function() {
                    return setTimeout(S.connect.bind(null, !0), 0);
                }), M = !0, S.close()) : S.connect(!0), t;
            }
            function c(e) {
                A = e, console.log("USE EXT SOCKET", e);
            }
            function d() {
                console.log("CLOSE SOCKET"), D++, D > 7 && !P && (v.call("felog.warn", "too_frequent_socket_release", {
                    release_count: D
                }), P = !0);
                var e = c ? "socket_timeout_close_iframe:stability" : "socket_timeout_close:stability";
                v.call("statsc.ui.increment", e), S.close(), S.release(), t();
            }
            function m(e) {
                var t = r.get(), n = t.authToCapiDegradation, i = t.authDegradation, o = t.cookiesDisabled;
                return n ? (v.call("felog.error", "stability.capi_error_not_authorized_loop", {
                    authDegradation: i,
                    cookiesDisabled: o
                }), void console.error("User not authorized... Recovery fail =(")) : (o && (v.call("felog.error", "stability.capi_error_disabled_cookies"), 
                console.error("User disabled cookies... =(")), console.warn("User not authorized... Try to recover"), 
                r.update({
                    authToCapiDegradation: !0
                }), void g());
            }
            function g() {
                return h(this, void 0, void 0, l["default"].mark(function e() {
                    var t, n;
                    return l["default"].wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return (0, u["default"])(C).forEach(function(e) {
                                e.close(), e.release();
                            }), t = "capiConnectionResolver", y.timers.start(t), e.next = 5, new p["default"](function(e) {
                                return T(e);
                            });

                          case 5:
                            n = e.sent, r.update({
                                authToCapiDegradation: !1
                            }), (0, u["default"])(C).forEach(function(e) {
                                return e.reconnect();
                            }), v.call("statsc.ui.timing", "stability:capi_restored_after_auth_degradation", y.timers.stop(t)), 
                            v.call("felog.warn", "stability.capi_restored_after_auth_degradation", {
                                count: n
                            });

                          case 10:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
            }
            function x(e) {
                var t = e.count, n = e.error;
                return h(this, void 0, void 0, l["default"].mark(function r() {
                    var e;
                    return l["default"].wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            return e = "exception", r.prev = 1, r.next = 4, k.getToken();

                          case 4:
                            e = r.sent, r.next = 9;
                            break;

                          case 7:
                            r.prev = 7, r.t0 = r["catch"](1);

                          case 9:
                            console.warn("log failed reconnect", t, n), v.call("felog.info", "stability:capi_error_in_fixer", {
                                token: e,
                                count: t,
                                error: n
                            });

                          case 11:
                          case "end":
                            return r.stop();
                        }
                    }, r, this, [ [ 1, 7 ] ]);
                }));
            }
            function T(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e4, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                return h(this, void 0, void 0, l["default"].mark(function i() {
                    var o, a;
                    return l["default"].wrap(function(i) {
                        for (;;) switch (i.prev = i.next) {
                          case 0:
                            return console.warn("Fixer inited, will try to connect in ", t / 1e3, "s., count:", n), 
                            i.next = 3, w.delay(t);

                          case 3:
                            return i.next = 5, r.refreshUser(!1, "recover_after_capi_error");

                          case 5:
                            o = b({
                                url: E.URLS.capi
                            }), a = function() {
                                o.close(), o.release(), o.emit = w._f, o = null;
                            }, o.emit = function(r) {
                                var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                return "connect" == r ? o.send(j) : i.action && "start" == i.action ? (a(), console.warn("yay, we fixed capi connection!"), 
                                e(n)) : void ((i.error || "error" == r) && (a(), v.call("statsc.ui.increment", "stability:capi_error_in_fixer"), 
                                n % 10 == 0 && x({
                                    count: n,
                                    error: i.error
                                }), console.warn("still on error(", r, i), T(e, Math.min(N, 2 * t), n + 1)));
                            }, o.connect();

                          case 9:
                          case "end":
                            return i.stop();
                        }
                    }, i, this);
                }));
            }
            var S = b(e), I = e.socketId, A = void 0, D = 0, P = !1, L = S.emit, M = !1, R = void 0;
            return (0, f["default"])(S, {
                emit: o,
                reconnect: a,
                iframeMode: c,
                toString: function() {
                    return "[object BackgroundSocket]";
                }
            }), S;
        };
        n.getLog = a;
    }, {
        "babel-runtime/core-js/object/assign": 18,
        "babel-runtime/core-js/object/values": 24,
        "babel-runtime/core-js/promise": 25,
        "babel-runtime/regenerator": 155,
        emitter: "emitter",
        "lib/bg/cookie": 160,
        "lib/config": 180,
        "lib/message": 233,
        "lib/timers": 251,
        "lib/tracking": 255,
        "lib/util": 259,
        websocket: "websocket"
    } ],
    242: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function i(e) {
            if ("disconnected" != e) {
                var t = {};
                "string" == typeof e ? t.msg = e : e.error && (t.readyState = e.error.currentTarget && e.error.currentTarget.readyState, 
                t.returnValue = e.error.returnValue), m.call("felog.error", "socket_fail_cs", t), 
                console.error("capi error", e), window.emit || c(window), window.emit("bgerror", e || "when send message to the socket");
            }
        }
        function o(e) {
            f.emitError(e);
        }
        function a(e) {
            function t(e, t) {
                var i = {
                    socketId: h,
                    method: e,
                    arg: t,
                    url: g,
                    useStandBy: b
                };
                v || r(), f.emitBackground("socket-client", i, null, o), "close" == e && n();
            }
            function n() {
                _.off("disconnect", n), f.off("socket-server", a, o), v = !1, p[h] && (delete p[h], 
                m.call("statsc.ui.timing", "activity:socket.close", d.timers.stop(h)));
            }
            function r() {
                v = !0, f.on("socket-server", a, o);
            }
            function a(e, t) {
                if (e.socketId == h) {
                    var n = e.msg || {};
                    n.action && "error" == n.action.toLowerCase() && (m.call("statsc.ui.increment", "stability:capi_error"), 
                    m.call("felog.error", "stability.capi_error", n)), t("ok"), _.emit(e.event, e.msg);
                }
            }
            var s = e.socketId, h = void 0 === s ? u.guid() : s, g = e.url, b = e.useStandBy, _ = c({}), v = !1, y = [ "connect", "send", "close", "reconnect", "release", "wsPlay", "wsPause" ];
            return y.forEach(function(e) {
                return _[e] = t.bind(null, e);
            }), _.one("connect", function() {
                p[h] = p[h] || h, d.timers.start(h), m.call("statsc.ui.timing", "activity:socket.open", (0, 
                l["default"])(p).length);
            }), _.one("disconnect", n), _.on("error", i), _.socketId = h, _.toString = function() {
                return "[object SocketClient]";
            }, _;
        }
        var s = e("babel-runtime/core-js/object/keys"), l = r(s), c = e("emitter"), u = e("lib/util"), d = e("lib/timers"), f = e("lib/message"), m = e("lib/tracking"), p = {};
        n.SocketClient = a;
    }, {
        "babel-runtime/core-js/object/keys": 22,
        emitter: "emitter",
        "lib/message": 233,
        "lib/timers": 251,
        "lib/tracking": 255,
        "lib/util": 259
    } ],
    243: [ function(e, t, n) {
        (function(t) {
            "use strict";
            function r(t) {
                return (!i && !window.socketServer || window.gr___sandbox) && e("./bg").SocketServer(t), 
                o.isBg() ? e("./bg").SocketServer(t) : e("./cs").SocketClient(t);
            }
            var i = "undefined" != typeof window ? window.forge : "undefined" != typeof t ? t.forge : null, o = e("lib/util");
            n.Socket = r;
        }).call(this, "undefined" != typeof window ? window : {});
    }, {
        "./bg": 241,
        "./cs": 242,
        "lib/util": 259
    } ],
    244: [ function(e, t, n) {
        "use strict";
        function r(e) {
            var t = e.el, n = a.guid(), r = o.renderReactWithParent(i.createElement(l, null), t, n, "spinner");
            return {
                remove: r.remove,
                el: s.findDOMNode(r.component)
            };
        }
        var i = e("react"), o = e("./dom"), a = e("./util"), s = e("react-dom"), l = i.createClass({
            displayName: "_SpinnerComponent",
            render: function() {
                return i.createElement("div", {
                    className: "gr_-spinner " + this.props.className
                }, i.createElement("div", {
                    className: "gr_-bounce1"
                }), i.createElement("div", {
                    className: "gr_-bounce2"
                }), i.createElement("div", {
                    className: "gr_-bounce3"
                }));
            }
        });
        r.SpinnerComponent = l, n.SpinnerComponent = l;
    }, {
        "./dom": 184,
        "./util": 259,
        react: "react",
        "react-dom": "react-dom"
    } ],
    245: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return {
                type: n.UPDATE_CONNECTION,
                data: {
                    bgNotConnected: !0,
                    online: !1
                },
                reason: e,
                sync: !1
            };
        }
        n.UPDATE_CONNECTION = "connection/UPDATE_CONNECTION", n.bgPageDown = r;
    }, {} ],
    246: [ function(e, t, n) {
        "use strict";
        function r(e) {
            var t = o.createMirrorStore(e, {
                bgPageDown: s.bgPageDown
            }, a.reducer), n = t.store, r = t.actions;
            return i.on("__bgerror", r.bgPageDown), {
                store: n,
                actions: r
            };
        }
        var i = e("lib/message"), o = e("lib/store-mirror"), a = e("./reducer"), s = e("./actions");
        n.createAndObserve = r;
    }, {
        "./actions": 245,
        "./reducer": 247,
        "lib/message": 233,
        "lib/store-mirror": 249
    } ],
    247: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function i() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments[1], n = t.type, r = t.data;
            switch (n) {
              case s.UPDATE_CONNECTION:
                return (0, a["default"])({}, e, {
                    connection: (0, a["default"])({}, e.connection, r)
                });

              default:
                return e;
            }
        }
        var o = e("babel-runtime/core-js/object/assign"), a = r(o), s = e("./actions");
        n.reducer = i;
    }, {
        "./actions": 245,
        "babel-runtime/core-js/object/assign": 18
    } ],
    248: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function i(e, t) {
            function n() {
                var n = e.getState();
                d.isEmpty(n) || d.isEqual(r, n) || (r = n, t(n));
            }
            var r = void 0;
            return f.asyncCall(n), e.subscribe(n);
        }
        var o = e("babel-runtime/helpers/defineProperty"), a = r(o), s = e("babel-runtime/core-js/object/assign"), l = r(s), c = e("babel-runtime/core-js/object/keys"), u = r(c), d = e("lodash"), f = e("lib/util");
        n.observeStore = i, n.bindActions = function(e, t) {
            return (0, u["default"])(e).filter(function(t) {
                return e[t];
            }).reduce(function(n, r) {
                return (0, l["default"])(n, (0, a["default"])({}, r, function() {
                    var n = e[r].apply(e, arguments), i = "undefined" == typeof n.sync || n.sync;
                    return t((0, l["default"])({}, n, {
                        sync: i
                    }));
                }));
            }, {});
        };
    }, {
        "babel-runtime/core-js/object/assign": 18,
        "babel-runtime/core-js/object/keys": 22,
        "babel-runtime/helpers/defineProperty": 30,
        "lib/util": 259,
        lodash: "lodash"
    } ],
    249: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function i(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = arguments[2], r = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h, t = arguments[1], r = (e.page || e.config || {}).domain;
                return t.sync && c.emitBackground("dispatch", (0, a["default"])({}, t, {
                    domain: r
                })), t.type == p ? (0, a["default"])({}, e, t.data) : n ? n(e, t) : e;
            }, i = l.createStore(r, {}, l.applyMiddleware(m)), o = d.bindActions((0, a["default"])({}, u.pureActions, t), i.dispatch);
            return c.on("state", function(e) {
                f.asyncCall(function() {
                    return i.dispatch({
                        type: p,
                        data: e
                    });
                }, 0);
            }), d.observeStore(i, e), {
                store: i,
                actions: o
            };
        }
        var o = e("babel-runtime/core-js/object/assign"), a = r(o), s = e("redux-logger"), l = e("redux"), c = e("lib/message"), u = e("lib/bg/features/actions"), d = e("./helpers"), f = e("../util"), m = s({
            level: "debug",
            collapsed: function() {
                return !0;
            },
            predicate: function() {
                return !1;
            }
        }), p = "store/SYNC", h = {
            page: {},
            connection: {}
        };
        n.createMirrorStore = i;
    }, {
        "../util": 259,
        "./helpers": 248,
        "babel-runtime/core-js/object/assign": 18,
        "lib/bg/features/actions": 161,
        "lib/message": 233,
        redux: "redux",
        "redux-logger": "redux-logger"
    } ],
    250: [ function(e, t, n) {
        "use strict";
        function r() {
            function e() {
                o.emitBackground("bg-reload", {});
            }
            function t() {
                o.emitBackground("reset", {});
            }
            function n() {
                o.emitBackground("get-tracker-log", {}, function(e) {
                    return i.emitDomEvent("tracker-log", e);
                });
            }
            function r() {
                o.emitBackground("get-capi-log", {}, function(e) {
                    return i.emitDomEvent("capi-log", e);
                });
            }
            function s() {
                o.emitBackground("get-extid", {}, function(e) {
                    return i.emitDomEvent("extid", e);
                });
            }
            function l() {
                o.emitBackground("get-localforage", {}, function(e) {
                    return i.emitDomEvent("localforage", e);
                });
            }
            function c(e) {
                o.emitBackground("set-localforage", {
                    key: e.key,
                    value: e.value
                }, function(e) {
                    return i.emitDomEvent("localforage", e);
                });
            }
            function u(e) {
                var t = e.key;
                a.prefs.get(t).then(function(e) {
                    return i.emitDomEvent("pref", {
                        key: t,
                        value: e
                    });
                });
            }
            function d(e) {
                var t = e.key, n = e.value;
                a.prefs.set(t, n);
            }
            i.listen(document, "bg-reload", e), i.listen(document, "reset", t), i.listen(document, "get-extid", s), 
            i.listen(document, "get-capi-log", r), i.listen(document, "get-tracker-log", n), 
            i.listen(document, "get-localforage", l), i.listen(document, "set-localforage", c), 
            i.listen(document, "get-pref", u), i.listen(document, "set-prefs", d);
        }
        var i = e("./dom"), o = e("./message"), a = e("./bg/prefs");
        n.api = r;
    }, {
        "./bg/prefs": 165,
        "./dom": 184,
        "./message": 233
    } ],
    251: [ function(e, t, n) {
        "use strict";
        var r = {};
        n.timers = {
            start: function(e) {
                r[e] = Date.now();
            },
            stop: function(e) {
                var t = this.passed(e);
                return delete r[e], t;
            },
            passed: function(e) {
                return e && r[e] ? Date.now() - r[e] : 0;
            }
        };
    }, {} ],
    252: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function i() {
            var e = new j.LoggingImpl.SimpleLogger("gnar", j.Logging.LogLevel.INFO, function(e) {
                x.call("felog.warn", e.message, e.extra);
            }), t = new j.TimeSeriesImpl.AbstractMetricsStorage("gnar", function(e, t) {
                x.call("statsc.ui.timing", e, t);
            }, function(e) {
                x.call("statsc.ui.increment", e);
            }), n = function(e, t) {
                return E.fetch(e, (0, u["default"])({
                    isText: !0,
                    timeout: 5e3
                }, t));
            }, r = new S.BackendStorage(n, C.GNAR.url), i = new S.ChromeCookieStorage(C.GNAR.url, C.GNAR.domain), o = new S.ContainerIdManager(k.isChrome() ? i : r, [ new S.CookieStorage(C.GNAR.domain), new S.LocalStorage(), new S.MemoryStorage() ], e.getLogger("containerId"), t.getCounter("containerId"), k.isChrome() ? 1e3 : 5e3);
            return new S.GnarClientImpl(C.GNAR.url, k.getBrowser() + "Ext", C.getVersion(), n, o, e, t, (!0));
        }
        function o() {
            return m(this, void 0, void 0, l["default"].mark(function t() {
                var n, r, o;
                return l["default"].wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        n = {
                            toJSON: function() {
                                var e = p["default"](15), t = Date.now();
                                return function() {
                                    return Date.now() - t > k.DAY && (e = p["default"](15), t = Date.now()), e;
                                };
                            }()
                        }, r = function() {
                            return k.isFF() && y.forge.request.ajax;
                        }(), b(), _(), e("tracker"), T.tracker().init({
                            mixpanel: {
                                key: C.MIXPANEL.key,
                                qaKey: C.MIXPANEL.qaKey,
                                dapi: C.DAPI,
                                ajax: r
                            },
                            felog: {
                                application: "browserplugin",
                                key: C.FELOG.key,
                                url: C.URLS.raven,
                                project: C.FELOG.project,
                                commit: C.getVersion(),
                                version: C.getVersion(),
                                readyOnSetUser: !1,
                                sessionId: p["default"](15),
                                sessionIdDaily: n
                            },
                            statsc: {
                                url: C.STATSC.URL
                            }
                        }), T.tracker().statsc.createRoot({
                            prefix: C.STATSC.PREFIX,
                            postfix: k.getBrowser() + ".extension.world",
                            id: "ui"
                        });
                        try {
                            T.tracker().gnar = i();
                        } catch (a) {
                            x.call("felog.error", "gnarClient_initialization_failed", {
                                rawError: a && a.message ? a.message : a
                            });
                        }
                        return t.next = 10, N();

                      case 10:
                        if (t.t0 = t.sent, t.t0) {
                            t.next = 13;
                            break;
                        }
                        t.t0 = g["default"]("mpCookie");

                      case 13:
                        if (o = t.t0) {
                            t.next = 16;
                            break;
                        }
                        return t.abrupt("return");

                      case 16:
                        window.mixpanel.persistence.load(), x.call("mixpanel.setProps", {
                            gProduct: "Extension-" + k.getBrowser(),
                            fullProductVersion: C.getVersion()
                        }, "Ext");

                      case 18:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            }));
        }
        function a(e) {
            function t(e, t) {
                if (t) {
                    if (!e) return x.call("felog.warn", "malfunction_update_id");
                    g["default"](e, t), h["default"](e, null), h["default"](e, t, o);
                }
            }
            var n = e.mpCookie, r = e.dapi, i = w.getDomain(), o = {
                path: "/",
                domain: i,
                expires: new Date(new Date().setYear(new Date().getFullYear() + 1))
            };
            t(C.MIXPANEL.cookie, n), t("__fngrprnt__", r);
        }
        var s = e("babel-runtime/regenerator"), l = r(s), c = e("babel-runtime/core-js/object/assign"), u = r(c), d = e("babel-runtime/core-js/promise"), f = r(d), m = function(e, t, n, r) {
            return new (n || (n = f["default"]))(function(i, o) {
                function a(e) {
                    try {
                        l(r.next(e));
                    } catch (t) {
                        o(t);
                    }
                }
                function s(e) {
                    try {
                        l(r["throw"](e));
                    } catch (t) {
                        o(t);
                    }
                }
                function l(e) {
                    e.done ? i(e.value) : new n(function(t) {
                        t(e.value);
                    }).then(a, s);
                }
                l((r = r.apply(e, t)).next());
            });
        }, p = e("@grammarly-npm/alphanumeric"), h = e("cookie"), g = e("local-storage"), b = e("vendor/mixpanel"), _ = e("vendor/mixpanel-2.2"), v = e("../bg/cookie"), y = e("lib/forge"), w = e("../location"), E = e("lib/request"), k = e("../util"), C = e("../config"), x = e("./call"), T = e("./tracker"), S = e("@grammarly-npm/gnarclientweb"), j = e("@grammarly-npm/frontend_telemetry"), N = function() {
            return v.getCookie(C.MIXPANEL.cookie)["catch"](function() {
                return "";
            });
        };
        n.init = o, n.processCookiesFromGrammarly = a, n.getContainerId = function() {
            return m(void 0, void 0, void 0, l["default"].mark(function e() {
                var t;
                return l["default"].wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = void 0, e.prev = 1, e.next = 4, T.tracker().gnar.getContainerId();

                      case 4:
                        t = e.sent, e.next = 11;
                        break;

                      case 7:
                        e.prev = 7, e.t0 = e["catch"](1), x.call("felog.error", "gnarClient_getContainerId_failed", {
                            rawError: e.t0 && e.t0.message ? e.t0.message : e.t0
                        }), t = "";

                      case 11:
                        return e.abrupt("return", t);

                      case 12:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 1, 7 ] ]);
            }));
        };
    }, {
        "../bg/cookie": 160,
        "../config": 180,
        "../location": 232,
        "../util": 259,
        "./call": 253,
        "./tracker": 258,
        "@grammarly-npm/alphanumeric": 1,
        "@grammarly-npm/frontend_telemetry": 2,
        "@grammarly-npm/gnarclientweb": 8,
        "babel-runtime/core-js/object/assign": 18,
        "babel-runtime/core-js/promise": 25,
        "babel-runtime/regenerator": 155,
        cookie: "cookie",
        "lib/forge": 212,
        "lib/request": 237,
        "local-storage": "local-storage",
        tracker: "tracker",
        "vendor/mixpanel": "vendor/mixpanel",
        "vendor/mixpanel-2.2": "vendor/mixpanel-2.2"
    } ],
    253: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function i(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            var i = function(t) {
                return e.includes("felog") ? g.felog.apply(g, (0, f["default"])(s(n))) : e.includes("statsc.ui.increment") ? b.statsc.apply(b, [ e.split(".").pop() ].concat(n)) : void console.warn("tracking call " + e + " failed, reason: ", t);
            };
            if (p.isBg()) return p.asyncCall(function() {
                try {
                    o(e, n);
                } catch (t) {
                    i(t);
                }
            }, 20);
            var a = 1e4, l = setTimeout(function() {
                return u("timeout call through bg page");
            }, a), c = function() {
                return clearInterval(l);
            }, u = function(e) {
                c(), i(e);
            };
            m.emitBackground("tracking-call", {
                msg: e,
                data: n
            }, c, u);
        }
        function o(e, t) {
            var n = e.split("."), r = n.pop(), i = n.reduce(function(e, t) {
                return t in e ? e[t] : {};
            }, h.tracker());
            return i && i[r] ? (i[r].apply(i, (0, f["default"])(t)), void a(e, t)) : console.error("No method " + e + " in tracker object");
        }
        function a(e, t) {
            console.info(e, t);
        }
        function s() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = {
                headers: {
                    "User-Agent": navigator.userAgent
                }
            };
            if (e.length < 2) return [ e[0], {
                request: t
            } ];
            var n = e[1], r = "string" == typeof n ? {
                message: n
            } : n;
            return [ e[0], (0, u["default"])({}, r, {
                request: t
            }) ].concat((0, f["default"])(e.slice(2)));
        }
        function l() {
            var e = _.slice(0);
            return _.length = 0, e;
        }
        var c = e("babel-runtime/core-js/object/assign"), u = r(c), d = e("babel-runtime/helpers/toConsumableArray"), f = r(d), m = e("../message"), p = e("../util"), h = e("./tracker"), g = e("./felogPixel"), b = e("./statscPixel"), _ = [];
        n.call = i, n.runMessage = o, n.getLog = l;
    }, {
        "../message": 233,
        "../util": 259,
        "./felogPixel": 254,
        "./statscPixel": 257,
        "./tracker": 258,
        "babel-runtime/core-js/object/assign": 18,
        "babel-runtime/helpers/toConsumableArray": 35
    } ],
    254: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function i(e, t) {
            var n = {};
            try {
                (0, a["default"])(t), n = t;
            } catch (r) {
                console.error(r);
            }
            var i = document.createElement("img"), o = {
                logger: "javascript",
                platform: "javascript",
                tags: {
                    application: "browserplugin",
                    fromPixel: !0,
                    commit: s.getVersion(),
                    version: s.getVersion()
                },
                message: e,
                extra: n
            }, l = "https://" + s.URLS.raven + "/api/" + s.FELOG.project + "/store/\n?sentry_version=4\n&sentry_client=raven-js/1.1.16\n&sentry_key=" + s.FELOG.key + "\n&sentry_data=" + encodeURIComponent((0, 
            a["default"])(o));
            return i.src = l, console.info(e, t), i;
        }
        var o = e("babel-runtime/core-js/json/stringify"), a = r(o), s = e("../config");
        n.felog = i;
    }, {
        "../config": 180,
        "babel-runtime/core-js/json/stringify": 16
    } ],
    255: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function i() {
            var t = e("./bgonly"), n = t.init, r = t.processCookiesFromGrammarly;
            n()["catch"](function(e) {
                return f.call("felog.error", "bg_tracking_start_fail", {
                    error: e
                });
            }), window.addEventListener("unhandledrejection", function(e) {
                window.onerror && window.onerror("Promise unhandledrejection", "", "", "", e.reason);
            }), window.__forgeExceptions && window.__forgeExceptions.length && window.onerror && window.__forgeExceptions.forEach(function(e) {
                var t;
                return (t = window).onerror.apply(t, (0, l["default"])(e));
            }), p = e("./on").on, u.on("tracking-fire", function(e) {
                var t = e.msg, n = e.data;
                return o.apply(void 0, [ t ].concat((0, l["default"])(n)));
            }), u.on("tracker-init", r), u.on("tracking-call", function(e) {
                var t = e.msg, n = e.data, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c._f;
                f.call.apply(f, [ t ].concat((0, l["default"])(n))), r();
            }), o("activity-ping");
        }
        function o(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            if (c.isBg()) {
                if (!p[e]) return console.error("No handler specified for message: " + e);
                c.asyncCall(function() {
                    var t;
                    return (t = p)[e].apply(t, n);
                }, 20);
            } else u.emitBackground("tracking-fire", {
                msg: e,
                data: n
            });
        }
        function a() {
            function t() {
                n++, n > o && clearInterval(i);
                var e = {
                    mpCookie: r(d.MIXPANEL.cookie),
                    gnar: r("gnar_containerId"),
                    dapi: r("__fngrprnt__")
                };
                e.mpCookie && (clearInterval(i), u.emitBackground("tracker-init", e));
            }
            var n = 0, r = e("cookie");
            r["default"] && (r = r["default"]);
            var i = setInterval(t, 500), o = 10;
        }
        var s = e("babel-runtime/helpers/toConsumableArray"), l = r(s), c = e("../util"), u = e("../message"), d = e("../config"), f = e("./call"), m = e("./call");
        n.call = m.call, n.getLog = m.getLog;
        var p = {};
        n.initBg = i, n.fire = o, n.initContentScript = a;
    }, {
        "../config": 180,
        "../message": 233,
        "../util": 259,
        "./bgonly": 252,
        "./call": 253,
        "./on": 256,
        "babel-runtime/helpers/toConsumableArray": 35,
        cookie: "cookie"
    } ],
    256: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        var i, o = e("babel-runtime/helpers/defineProperty"), a = r(o), s = e("babel-runtime/regenerator"), l = r(s), c = e("babel-runtime/helpers/slicedToArray"), u = r(c), d = e("babel-runtime/core-js/promise"), f = r(d), m = function(e, t, n, r) {
            return new (n || (n = f["default"]))(function(i, o) {
                function a(e) {
                    try {
                        l(r.next(e));
                    } catch (t) {
                        o(t);
                    }
                }
                function s(e) {
                    try {
                        l(r["throw"](e));
                    } catch (t) {
                        o(t);
                    }
                }
                function l(e) {
                    e.done ? i(e.value) : new n(function(t) {
                        t(e.value);
                    }).then(a, s);
                }
                l((r = r.apply(e, t)).next());
            });
        }, p = e("../bg/prefs"), h = e("../config"), g = e("../util"), b = e("./call");
        n.on = (i = {}, (0, a["default"])(i, "activity-ping", function() {
            var e = function(e) {
                return parseFloat(Math.round(100 * e * 100) / 100).toFixed(2);
            };
            setInterval(function() {
                return g.isChrome() ? void (window.chrome.system && window.chrome.system.cpu && window.chrome.system.cpu.getInfo(function(t) {
                    var n = t.processors.map(function(e) {
                        return (e.usage.total - e.usage.idle) / e.usage.total;
                    }).reduce(function(e, t, n, r) {
                        return e + t / r.length;
                    }, 0), r = window.performance.memory, i = r.usedJSHeapSize, o = r.totalJSHeapSize;
                    n = e(n), b.call("statsc.ui.increment", "activity:activity_ping"), b.call("statsc.ui.gauge", {
                        "performance:memory_used": i,
                        "performance:memory_used_of_total": e((o - i) / o),
                        "performance:cpu_load": n
                    });
                })) : b.call("statsc.ui.increment", "activity:activity_ping");
            }, h.FELOG.pingTimeout);
        }), (0, a["default"])(i, "daily-ping", function(e, t) {
            return m(this, void 0, void 0, l["default"].mark(function n() {
                var r, i, o, a, s, c;
                return l["default"].wrap(function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        if (!h.debug && e) {
                            n.next = 2;
                            break;
                        }
                        return n.abrupt("return");

                      case 2:
                        return b.call("gnar.pingMaybe"), n.next = 5, p.prefs.get("pingDate");

                      case 5:
                        if (r = n.sent, "string" != typeof r && (r = ""), i = r.split("|"), o = (0, u["default"])(i, 2), 
                        a = o[0], s = o[1], c = t ? "cookiesDisabled" : e, !(a && a > Date.now() && s == c)) {
                            n.next = 11;
                            break;
                        }
                        return n.abrupt("return");

                      case 11:
                        b.call("mixpanel.dapiEvent", "Daily_Ping", {
                            gProduct: "Extension-" + g.getBrowser()
                        }), b.call("mixpanel.track", "Ext:Daily_Ping"), b.call("felog.event", "daily_ping"), 
                        p.prefs.set("pingDate", [ g.getNextPingDate(), c ].join("|"));

                      case 15:
                      case "end":
                        return n.stop();
                    }
                }, n, this);
            }));
        }), (0, a["default"])(i, "app_signin_success", function() {
            b.call("mixpanel.track", "G:User_Login_Succeeded"), b.call("gnar.track", "userLoginForm/accepted"), 
            b.call("statsc.ui.increment", "stability:app_signin_success");
        }), (0, a["default"])(i, "app_signup_success", function() {
            b.call("mixpanel.track", "G:User_Account_Created"), b.call("gnar.track", "userAccountSignupForm/accepted"), 
            b.call("statsc.ui.increment", "stability:app_signup_success");
        }), (0, a["default"])(i, "signin-error", function(e) {
            e.errorType = "Server-Side", b.call("mixpanel.track", "G:User_Login_Rejected"), 
            b.call("gnar.track", "userLoginForm/rejected");
        }), (0, a["default"])(i, "signup-error", function(e) {
            e.errorType = "Server-Side", b.call("mixpanel.track", "G:User_Signup_Rejected"), 
            b.call("gnar.track", "userAccountSignupForm/rejected");
        }), (0, a["default"])(i, "upgrade-after-register", function() {
            return m(this, void 0, void 0, l["default"].mark(function e() {
                return l["default"].wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        b.call("mixpanel.track", "NE:Account_Type_Selected", {
                            accountTypeSelected: "premium"
                        }), b.call("gnar.track", "Account_Type_Selected");

                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
        }), (0, a["default"])(i, "hook-clicked", function(e) {
            var t = {
                placement: e
            };
            b.call("gnar.track", "upgradeHookClicked", t), b.call("mixpanel.track", "Ext:Upgrade_To_Plus_Clicked", t), 
            b.call("felog.info", "upgrade_click", t), b.call("statsc.ui.increment", "activity:upgrade." + e + ".click");
        }), (0, a["default"])(i, "correct-btn-clicked", function() {
            b.call("mixpanel.track", "Ext:Gbutton_Clicked"), b.call("gnar.track", "gbuttonClicked"), 
            b.call("statsc.ui.increment", "stability:editor.gbutton_clicked"), b.call("felog.event", "g_button_clicked");
        }), (0, a["default"])(i, "btn-disable-in-field", function(e) {
            b.call("mixpanel.track", "Ext:Checking_in_field_toggled", {
                enabled: e
            }), b.call("gnar.track", "checkingInFieldToggled", {
                enabled: e
            }), b.call("statsc.ui.increment", "stability:disable_in_field." + (e ? "on" : "off")), 
            b.call("felog.info", "g_button_disable_in_field_click");
        }), (0, a["default"])(i, "button-change-state", function(e) {
            b.call("statsc.ui.increment", "stability:g_button_minimize_toggled");
        }), (0, a["default"])(i, "login-attempt", function(e) {
            b.call("gnar.track", "signInClicked", {
                placement: e
            }), b.call("mixpanel.track", "Ext:Sign_In_Clicked", {
                placement: e
            });
        }), (0, a["default"])(i, "show-dictionary", function() {
            b.call("gnar.track", "showDictionary"), b.call("mixpanel.track", "Ext:Show_Dictionary");
        }), (0, a["default"])(i, "referral-shown", function(e) {
            b.call("mixpanel.track", "WE:Referral_Notification_Shown", {
                placement: e
            }), b.call("gnar.track", "referral/referralNotificationShown", {
                placement: e
            });
        }), (0, a["default"])(i, "referral-clicked", function(e) {
            b.call("mixpanel.track", "WE:Referral_Button_Clicked", {
                placement: e
            }), b.call("gnar.track", "referral/referralButtonClicked", {
                placement: e
            });
        }), (0, a["default"])(i, "tab-connected", function(e, t, n) {
            var r = t.enabled, i = n.cookiesDisabled;
            this["daily-ping"](e, i), r || b.call("felog.info", "not_enable_on_domain");
        }), (0, a["default"])(i, "session-invalidate", function(e, t, n, r, i) {
            var o = e.id, a = e.name, s = e.anonymous, l = e.premium, c = e.email, u = e.type;
            o != t.id && (b.call("gnar.setUser", o), b.call("mixpanel.initProps"), b.call("felog.setUser", {
                id: o,
                name: a,
                anonymous: s,
                premium: l,
                email: c,
                type: u,
                containerId: i
            }), this["daily-ping"](o, r)), n && b.call("felog.info", "session_invalidated_by", {
                reason: n,
                userChanged: o != t.id
            }), t.email && !t.anonymous && s && b.call("felog.warn", "unexpected_user_convert_to_anonymous", {
                email: t.email,
                token: t.token,
                grauth: t.grauth,
                tokenEqualsGrauth: t.token == t.grauth,
                cookiesDisabled: r,
                reason: n
            });
        }), (0, a["default"])(i, "set-weak-dialect", function(e) {
            b.call("mixpanel.track", "G:Language_Weak_Preference", {
                dialect: e
            }), b.call("gnar.track", "languageWeakPreference", {
                dialect: e
            }), b.call("statsc.ui.increment", "stability:weak_dialect_changed"), b.call("felog.info", "weak_dialect_changed", {
                dialect: e
            });
        }), (0, a["default"])(i, "change-dialect", function(e) {
            var t = e.language, n = e.dialectWeak, r = {
                language: t
            };
            n && (r.sameAsWeak = t == n), b.call("felog.info", "language_dialect_changed", r), 
            b.call("mixpanel.track", "G:Language_Strong_Preference", r), b.call("gnar.track", "languageStrongPreference", r), 
            b.call("statsc.ui.increment", "stability:language_dialect_changed");
        }), (0, a["default"])(i, "get-dapi-prop-error", function(e, t) {
            b.call("statsc.ui.increment", "stability:get_dapi_prop_error"), b.call("felog.info", "get_dapi_prop_error", {
                error: t,
                property: e
            });
        }), (0, a["default"])(i, "set-dapi-prop-error", function(e, t) {
            b.call("statsc.ui.increment", "stability:set_dapi_prop_error"), b.call("felog.info", "set_dapi_prop_error", {
                error: t,
                property: e
            });
        }), (0, a["default"])(i, "change-defs", function(e) {
            b.call("felog.info", "toggle_extension_defs", e), b.call("mixpanel.track", "Ext:Definitions_Toggled:Popup", e), 
            b.call("statsc.ui.increment", "stability:definitions_toggled"), b.call("gnar.track", "definitionsToggled", e);
        }), (0, a["default"])(i, "change-grammar", function(e) {
            b.call("felog.info", "toggle_extension_on_site", e), b.call("statsc.ui.increment", "stability:toggle_extension_on_site"), 
            b.call("mixpanel.track", "Ext:Checking_Toggled:Popup", e), b.call("gnar.track", "checkingToggled", e);
        }), (0, a["default"])(i, "popup-open", function() {
            b.call("felog.info", "extension_toolbar_btn_click"), b.call("gnar.track", "browserToolbarButtonClicked"), 
            b.call("mixpanel.track", "Ext:Browser_Toolbar_Button_Clicked");
        }), (0, a["default"])(i, "popup-open-on-unsupported", function() {
            b.call("gnar.track", "browserToolbarButtonClicked/unsupported"), b.call("mixpanel.track", "Ext:Settings_Open_Unsupported_Domain");
        }), (0, a["default"])(i, "cookie-overflow", function(e, t) {
            b.call("felog.warn", "too_big_cookie_header", {
                total: e,
                biggestCookie: t
            }), b.call("statsc.ui.timing", "stability:too_big_cookie_header.total", e);
        }), (0, a["default"])(i, "premium-popup-show", function() {
            b.call("mixpanel.track", "Ext:Upgrade_Referral_Popup_Shown"), b.call("gnar.track", "upgradeReferralPopupShown");
        }), (0, a["default"])(i, "premium-popup-upgrade-click", function() {
            b.call("mixpanel.track", "Ext:Upgrade_Referral_Premium_Btn_Clicked"), b.call("gnar.track", "upgradeReferralPremiumBtnClicked");
        }), (0, a["default"])(i, "premium-popup-referral-click", function() {
            b.call("mixpanel.track", "Ext:Upgrade_Referral_Invite_Btn_Clicked"), b.call("gnar.track", "upgradeReferralInviteBtnClicked");
        }), i);
    }, {
        "../bg/prefs": 165,
        "../config": 180,
        "../util": 259,
        "./call": 253,
        "babel-runtime/core-js/promise": 25,
        "babel-runtime/helpers/defineProperty": 30,
        "babel-runtime/helpers/slicedToArray": 34,
        "babel-runtime/regenerator": 155
    } ],
    257: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function i(e, t) {
            var n = t && t.split(":");
            if (n[0] && n[1]) {
                var r = "grammarly.ui." + n[0] + "." + s.getBrowser() + ".extension.world." + n[1], i = {
                    c: {}
                };
                i.c[r] = [ "1" ];
                var o = document.createElement("img");
                return o.src = l.STATSC.URL + "?json=" + (0, a["default"])(i), console.info(e, t), 
                o;
            }
        }
        var o = e("babel-runtime/core-js/json/stringify"), a = r(o), s = e("../util"), l = e("../config");
        n.statsc = i;
    }, {
        "../config": 180,
        "../util": 259,
        "babel-runtime/core-js/json/stringify": 16
    } ],
    258: [ function(e, t, n) {
        "use strict";
        function r() {
            return window.tracker;
        }
        n.tracker = r;
    }, {} ],
    259: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function i() {
            return window.navigator.userAgent.indexOf("Firefox") != -1;
        }
        function o() {
            return !!window.chrome;
        }
        function a() {
            return /^((?!chrome).)*safari/i.test(navigator.userAgent);
        }
        function s() {
            return /^((?!chrome).)*safari/i.test(navigator.userAgent) && navigator.userAgent.indexOf("Version/8.0") != -1;
        }
        function l() {
            return navigator.appVersion.indexOf("Win") != -1;
        }
        function c() {
            return window.IS_BG;
        }
        function u() {
            return window.IS_POPUP;
        }
        function d() {
            return c() || u();
        }
        function f() {
            return o() ? "chrome" : i() ? "firefox" : a() ? "safari" : "other";
        }
        function m(e) {
            var t = [ "freeeeeeee@grammarly.com", "premiumuser@grammarly.com" ].indexOf(e) != -1;
            return !t && /^.*@grammarly.com$/.test(e);
        }
        function p() {
            return window.chrome && window.chrome.runtime && window.chrome.runtime.lastError;
        }
        function h(e) {
            return !!(e && e.constructor && e.call && e.apply);
        }
        function g(e, t) {
            function n() {
                function n() {
                    i(), e();
                }
                function i() {
                    var i = setTimeout(n, t);
                    r[e] = i;
                }
                i();
            }
            var r = g.items = g.items || {}, i = r[e];
            if (i || t) return i && !t ? (clearTimeout(i), void delete r[e]) : void n();
        }
        function b(e) {
            g(e);
        }
        function _() {
            return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
        }
        function v() {
            return _() + _() + "-" + _() + "-" + _() + "-" + _() + "-" + _() + _() + _();
        }
        function y() {}
        function w() {
            return !0;
        }
        function E() {
            o() && window.chrome.runtime.reload();
        }
        function k(e) {
            if (e.location) {
                var t = "mail.google.com" == e.location.host, n = e.querySelector("iframe#js_frame") && e.querySelector("iframe#sound_frame");
                return t || n;
            }
        }
        function C(e) {
            return /^[-!#$%&\'*+\\./0-9=?A-Z^_`a-z{|}~]+@[-!#$%&\'*+\\/0-9=?A-Z^_`a-z{|}~]+\.[-!#$%&\'*+\\./0-9=?A-Z^_`a-z{|}~]+$/.test(e);
        }
        function x(e) {
            return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        function T(e, t) {
            return t[1 == e ? 0 : 1];
        }
        function S(e) {
            return re.transform(e, function(e, t) {
                return e[t] = y;
            });
        }
        function j(e, t, n) {
            var r = {};
            return function() {
                var i = "_memoize_" + (t ? t.apply(this, arguments) : arguments[0]);
                return hasOwnProperty.call(r, i) ? r[i] : (n && setTimeout(function() {
                    delete r[i];
                }, n), r[i] = e.apply(this, arguments));
            };
        }
        function N(e, t) {
            return (0, Z["default"])(t).reduce(function(n, r) {
                return (0, J["default"])({}, n, (0, X["default"])({}, r, function() {
                    for (var n = arguments.length, i = Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                    return e.then(function() {
                        return t[r].apply(t, i);
                    });
                }));
            }, {});
        }
        function I(e) {
            return new te["default"](function(t) {
                return e(t);
            });
        }
        function A(e, t) {
            return Math.floor(Math.random() * (t - e + 1)) + e;
        }
        function D(e) {
            return new te["default"](function(t) {
                return setTimeout(t, e);
            });
        }
        function P(e) {
            if (e) {
                var t = new Date(e);
                if ("Invalid Date" != t.toString()) return ae[t.getMonth()] + " " + t.getDate() + ", " + t.getFullYear();
            }
        }
        function L(e) {
            var t = function() {};
            return t.prototype = e(), t;
        }
        function M() {
            function e(e) {
                return e.split(".").map(function(e) {
                    return Number(e) || 0;
                });
            }
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", r = e(t), i = e(n), o = Array(Math.abs(r.length - i.length)).fill(0);
            if (r.length > i.length ? i.push.apply(i, (0, Y["default"])(o)) : r.push.apply(r, (0, 
            Y["default"])(o)), r.every(function(e, t) {
                return e === i[t];
            })) return 0;
            for (var a = 0, s = r.length; a < s; a++) {
                if (r[a] > i[a]) return 1;
                if (r[a] < i[a]) return -1;
            }
            return -1;
        }
        function R() {
            return ne(this, void 0, void 0, V["default"].mark(function e() {
                return V["default"].wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (o()) {
                            e.next = 2;
                            break;
                        }
                        return e.abrupt("return", null);

                      case 2:
                        return e.prev = 2, e.next = 5, te["default"].race([ new te["default"](function(e) {
                            return window.chrome.runtime.sendMessage("ping", e);
                        }), D(1e4).then(function() {
                            return "timeouted";
                        }) ]);

                      case 5:
                        return e.abrupt("return", e.sent);

                      case 8:
                        return e.prev = 8, e.t0 = e["catch"](2), e.abrupt("return", "orphaned");

                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 2, 8 ] ]);
            }));
        }
        function F(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
            setTimeout(e, t);
        }
        function O() {
            function e(e) {
                if (a.length) {
                    var t = a.shift();
                    t(e);
                } else i ? o.push(e) : o[0] = e;
            }
            function t() {
                return o.length ? te["default"].resolve(o.shift()) : new te["default"](function(e) {
                    return a.push(e);
                });
            }
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = n.buffered, i = void 0 === r || r, o = [], a = [];
            return {
                take: t,
                put: e
            };
        }
        function G(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
            if (!e) return NaN;
            var n = ie.createHash("superfasthash");
            return parseInt(n.hash(e), 16) % t;
        }
        function z(e) {
            return e.which || e.charCode || e.keyCode || 0;
        }
        function B() {
            var e = new Date();
            return e.getHours() > 2 && e.setDate(e.getDate() + 1), e.setHours(3), e.setMinutes(Math.floor(60 * Math.random())), 
            e.getTime();
        }
        function W() {
            var e = "test_localstorage_availability", t = "test";
            try {
                oe(e, t);
                var n = oe(e);
                if (n !== t) return {
                    enabled: !1,
                    message: "wrong property returned: [" + n + "]"
                };
            } catch (r) {
                return {
                    enabled: !1,
                    message: r.message
                };
            }
            return {
                enabled: !0
            };
        }
        function H(e) {
            return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
        }
        var U = e("babel-runtime/regenerator"), V = r(U), q = e("babel-runtime/helpers/toConsumableArray"), Y = r(q), K = e("babel-runtime/helpers/defineProperty"), X = r(K), Q = e("babel-runtime/core-js/object/assign"), J = r(Q), $ = e("babel-runtime/core-js/object/keys"), Z = r($), ee = e("babel-runtime/core-js/promise"), te = r(ee), ne = function(e, t, n, r) {
            return new (n || (n = te["default"]))(function(i, o) {
                function a(e) {
                    try {
                        l(r.next(e));
                    } catch (t) {
                        o(t);
                    }
                }
                function s(e) {
                    try {
                        l(r["throw"](e));
                    } catch (t) {
                        o(t);
                    }
                }
                function l(e) {
                    e.done ? i(e.value) : new n(function(t) {
                        t(e.value);
                    }).then(a, s);
                }
                l((r = r.apply(e, t)).next());
            });
        }, re = e("lodash"), ie = e("non-crypto-hash"), oe = e("local-storage");
        n.isFF = i, n.isChrome = o, n.isSafari = a, n.isSafari8 = s, n.isWindows = l, n.isBg = c, 
        n.isPopup = u, n.isBgOrPopup = d, n.getBrowser = f, n.isGrammarlyEmail = m, n.chromeBgError = p, 
        n.isFunction = h, n.interval = g, n.cancelInterval = b, n.S4 = _, n.guid = v, n._f = y, 
        n._F = w, n.bgPageReload = E, n.isGmail = k, n.isValidEmail = C, n.formatNumber = x, 
        n.declension = T, n.stub = S, n.memoize = j, n.syncWait = N, n.promisify = I, n.getRandomIntInclusive = A, 
        n.delay = D;
        var ae = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
        n.formatDate = P, n.createClass = L, n.versionComparator = M, n.isBgAlive = R, n.asyncCall = F, 
        n.createChannel = O, n.normalizedHashCode = G, n.keyCode = z, n.SECOND = 1e3, n.MINUTE = 60 * n.SECOND, 
        n.HOUR = 60 * n.MINUTE, n.DAY = 24 * n.HOUR, n.pastDays = function(e) {
            return Math.round(Math.abs(new Date() - new Date(e)) / n.DAY);
        }, n.getNextPingDate = B, n.checkLocalStorage = W, n.escapeRegExp = H;
    }, {
        "babel-runtime/core-js/object/assign": 18,
        "babel-runtime/core-js/object/keys": 22,
        "babel-runtime/core-js/promise": 25,
        "babel-runtime/helpers/defineProperty": 30,
        "babel-runtime/helpers/toConsumableArray": 35,
        "babel-runtime/regenerator": 155,
        "local-storage": "local-storage",
        lodash: "lodash",
        "non-crypto-hash": "non-crypto-hash"
    } ],
    260: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function i(e, t, n, r) {
            var i = r ? t + "_forced" : t, o = {
                listeners: []
            }, a = function(e) {
                var t = o.listeners.indexOf(n);
                t > -1 && o.listeners.splice(t, 1);
            };
            if ("on" != e && "once" != e || (o = b[i] || (b[i] = {
                domEventListener: function(t) {
                    g.emit(i, t), "once" == e && a(n);
                },
                listeners: []
            }), o.domEventListener.__wrapFunc = o.domEventListener.__wrapFunc || function(e) {
                o.domEventListener((0, m["default"])({
                    originalEvent: e,
                    preventDefault: h._f,
                    stopPropagation: h._f
                }, e.detail));
            }, 0 == o.listeners.length && (window.addEventListener(t, o.domEventListener, r), 
            window.addEventListener(t + "-gr", o.domEventListener.__wrapFunc, r)), o.listeners.push(n)), 
            "un" == e) {
                var s = b[i];
                if (!s) return;
                a(n), 0 == s.listeners.length && (window.removeEventListener(t, s.domEventListener, r), 
                window.removeEventListener(t + "-gr", s.domEventListener.__wrapFunc, r));
            }
            g[e](i, n);
        }
        function o(e) {
            return function(t, n, r) {
                if ("object" == ("undefined" == typeof t ? "undefined" : (0, d["default"])(t))) {
                    var o = !0, a = !1, l = void 0;
                    try {
                        for (var u, f = (0, c["default"])((0, s["default"])(t)); !(o = (u = f.next()).done); o = !0) {
                            var m = u.value;
                            i(e, m, t[m], n);
                        }
                    } catch (p) {
                        a = !0, l = p;
                    } finally {
                        try {
                            !o && f["return"] && f["return"]();
                        } finally {
                            if (a) throw l;
                        }
                    }
                } else i(e, t, n, r);
            };
        }
        var a = e("babel-runtime/core-js/object/keys"), s = r(a), l = e("babel-runtime/core-js/get-iterator"), c = r(l), u = e("babel-runtime/helpers/typeof"), d = r(u), f = e("babel-runtime/core-js/object/assign"), m = r(f), p = e("emitter"), h = e("./util"), g = p({}), b = {};
        n.on = o("on"), n.off = o("un"), n.once = o("one");
    }, {
        "./util": 259,
        "babel-runtime/core-js/get-iterator": 14,
        "babel-runtime/core-js/object/assign": 18,
        "babel-runtime/core-js/object/keys": 22,
        "babel-runtime/helpers/typeof": 36,
        emitter: "emitter"
    } ]
}, {}, [ 157 ]);