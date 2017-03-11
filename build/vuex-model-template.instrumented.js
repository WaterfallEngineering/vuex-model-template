(function webpackUniversalModuleDefinition(e, t) {
    if (typeof exports === "object" && typeof module === "object") module.exports = t(require("es6-promise"), require("vuex")); else if (typeof define === "function" && define.amd) define([ "es6-promise", "vuex" ], t); else {
        var r = typeof exports === "object" ? t(require("es6-promise"), require("vuex")) : t(e["es6-promise"], e["vuex"]);
        for (var n in r) (typeof exports === "object" ? exports : e)[n] = r[n];
    }
})(this, function(e, t) {
    return function(e) {
        var t = {};
        function __webpack_require__(r) {
            if (t[r]) return t[r].exports;
            var n = t[r] = {
                i: r,
                l: false,
                exports: {}
            };
            e[r].call(n.exports, n, n.exports, __webpack_require__);
            n.l = true;
            return n.exports;
        }
        __webpack_require__.m = e;
        __webpack_require__.c = t;
        __webpack_require__.i = function(e) {
            return e;
        };
        __webpack_require__.d = function(e, t, r) {
            if (!__webpack_require__.o(e, t)) {
                Object.defineProperty(e, t, {
                    configurable: false,
                    enumerable: true,
                    get: r
                });
            }
        };
        __webpack_require__.n = function(e) {
            var t = e && e.__esModule ? function getDefault() {
                return e["default"];
            } : function getModuleExports() {
                return e;
            };
            __webpack_require__.d(t, "a", t);
            return t;
        };
        __webpack_require__.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        };
        __webpack_require__.p = "";
        return __webpack_require__(__webpack_require__.s = 102);
    }([ function(e, t, r) {
        var n = r(24), i = r(25);
        function copyObject(e, t, r, o) {
            var a = !r;
            r || (r = {});
            var u = -1, f = t.length;
            while (++u < f) {
                var l = t[u];
                var c = o ? o(r[l], e[l], l, r, e) : undefined;
                if (c === undefined) {
                    c = e[l];
                }
                if (a) {
                    i(r, l, c);
                } else {
                    n(r, l, c);
                }
            }
            return r;
        }
        e.exports = copyObject;
    }, function(e, t) {
        var r = Array.isArray;
        e.exports = r;
    }, function(e, t) {
        function isObject(e) {
            var t = typeof e;
            return e != null && (t == "object" || t == "function");
        }
        e.exports = isObject;
    }, function(e, t, r) {
        var n = r(10);
        var i = n(Object.keys, Object);
        e.exports = i;
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(18);
        var i = _interopRequireDefault(n);
        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        t.default = i.default.getProxy({
            Any: Symbol("Any"),
            Array: Symbol("Array"),
            Boolean: Symbol("Boolean"),
            Complex: Symbol("Complex"),
            Number: Symbol("Number"),
            Object: Symbol("Object"),
            String: Symbol("String"),
            Symbol: Symbol("Symbol")
        });
    }, function(e, t, r) {
        var n = r(12);
        function assocIndexOf(e, t) {
            var r = e.length;
            while (r--) {
                if (n(e[r][0], t)) {
                    return r;
                }
            }
            return -1;
        }
        e.exports = assocIndexOf;
    }, function(e, t) {
        var r = Object.prototype;
        var n = r.toString;
        function objectToString(e) {
            return n.call(e);
        }
        e.exports = objectToString;
    }, function(e, t, r) {
        var n = r(88), i = r(82), o = r(83);
        function baseRest(e, t) {
            return o(i(e, t, n), e + "");
        }
        e.exports = baseRest;
    }, function(e, t) {
        function isObjectLike(e) {
            return e != null && typeof e == "object";
        }
        e.exports = isObjectLike;
    }, function(e, t) {
        function arrayMap(e, t) {
            var r = -1, n = e == null ? 0 : e.length, i = Array(n);
            while (++r < n) {
                i[r] = t(e[r], r, e);
            }
            return i;
        }
        e.exports = arrayMap;
    }, function(e, t) {
        function overArg(e, t) {
            return function(r) {
                return e(t(r));
            };
        }
        e.exports = overArg;
    }, function(e, t) {
        function arrayEach(e, t) {
            var r = -1, n = e == null ? 0 : e.length;
            while (++r < n) {
                if (t(e[r], r, e) === false) {
                    break;
                }
            }
            return e;
        }
        e.exports = arrayEach;
    }, function(e, t) {
        function eq(e, t) {
            return e === t || e !== e && t !== t;
        }
        e.exports = eq;
    }, function(e, t, r) {
        var n = r(52), i = r(55);
        function forOwn(e, t) {
            return e && n(e, i(t));
        }
        e.exports = forOwn;
    }, function(e, t, r) {
        var n = r(6), i = r(2);
        var o = "[object AsyncFunction]", a = "[object Function]", u = "[object GeneratorFunction]", f = "[object Proxy]";
        function isFunction(e) {
            if (!i(e)) {
                return false;
            }
            var t = n(e);
            return t == a || t == u || t == o || t == f;
        }
        e.exports = isFunction;
    }, function(e, t) {
        function nativeKeysIn(e) {
            var t = [];
            if (e != null) {
                for (var r in Object(e)) {
                    t.push(r);
                }
            }
            return t;
        }
        e.exports = nativeKeysIn;
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(86);
        var i = _interopRequireDefault(n);
        var o = r(31);
        var a = _interopRequireDefault(o);
        var u = r(89);
        var f = _interopRequireDefault(u);
        var l = r(3);
        var c = _interopRequireDefault(l);
        var s = r(87);
        var p = _interopRequireDefault(s);
        var v = r(34);
        var d = _interopRequireDefault(v);
        var y = r(95);
        var b = _interopRequireDefault(y);
        var h = r(2);
        var _ = _interopRequireDefault(h);
        var x = r(92);
        var g = _interopRequireDefault(x);
        var j = r(11);
        var m = _interopRequireDefault(j);
        var O = r(1);
        var w = _interopRequireDefault(O);
        var A = r(96);
        var q = _interopRequireDefault(A);
        var P = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
            return typeof e;
        } : function(e) {
            return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        };
        t.validateProperty = validateProperty;
        t.default = function(e, t) {
            if (!this) {
                return;
            }
            k = [];
            validate.call(e, t);
            (0, i.default)(this, e);
            apply.call(this, e, t);
        };
        var D = r(4);
        var R = _interopRequireDefault(D);
        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function validateProperty(e) {
            if ((0, q.default)(this)) {
                return;
            }
            switch (e.type) {
              case R.default.Any:
                break;

              case R.default.Array:
                if (!(0, w.default)(this)) {
                    throwError(e.type, this);
                } else {
                    (0, m.default)(this, function(t) {
                        validateProperty.call(t, e.items);
                    });
                }
                break;

              case R.default.Boolean:
                if (!(0, g.default)(this)) {
                    throwError(e.type, this);
                }
                break;

              case R.default.Complex:
                if (!(0, _.default)(this)) {
                    throwError(e.type, this);
                }
                validate.call(this, e.properties);
                break;

              case R.default.Number:
                if (!(0, b.default)(this)) {
                    throwError(e.type, this);
                }
                break;

              case R.default.Object:
                if (!(0, _.default)(this)) {
                    throwError(e.type, this);
                }
                break;

              case R.default.String:
                if (!(0, d.default)(this)) {
                    throwError(e.type, this);
                }
                break;

              default:
                throw new Error("unexpected type");
            }
        }
        function throwError(e, t) {
            throw new Error("expected '" + e.toString() + "' but got '" + (typeof t === "undefined" ? "undefined" : P(t)) + "' in '" + k.join(".") + "'");
        }
        var k = [];
        function validate(e) {
            var t = this;
            var r = (0, p.default)((0, c.default)(this), (0, c.default)(e));
            if (r.length) {
                throw new Error("unexpected properties found in '" + (k.join(".") || "data") + "': '" + r + "'");
            }
            var n = (0, f.default)((0, c.default)(this), (0, c.default)(e));
            (0, m.default)(n, function(r) {
                var n;
                k.push(r);
                (n = t[r], validateProperty).call(n, e[r]);
                k.splice(-1);
            });
        }
        function apply(e, t) {
            var r = this;
            var n = (0, p.default)((0, c.default)(t), (0, c.default)(e));
            (0, m.default)(n, function(n) {
                if (t[n].type !== R.default.Complex) {
                    r[n] = (0, a.default)(t[n].defaultValue);
                } else {
                    var i;
                    console.log("apply default value to complex type", n);
                    r[n] = {};
                    var o = e && e[n];
                    (i = r[n], apply).call(i, o, t[n].properties);
                }
            });
            var i = (0, f.default)((0, c.default)(t), (0, c.default)(e));
            (0, m.default)(i, function(n) {
                if (t[n].type === R.default.Complex && e[n]) {
                    var i;
                    console.log("apply default to properties of complex type", n);
                    (i = r[n], apply).call(i, e[n], t[n].properties);
                }
            });
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(4);
        var i = _interopRequireDefault(n);
        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        t.default = function(e) {
            if (e === i.default.Array) {
                return [ "set", "add", "remove", "clear" ];
            } else {
                return [ "set" ];
            }
        };
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(3);
        var i = _interopRequireDefault(n);
        var o = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
            return typeof e;
        } : function(e) {
            return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        };
        var a = function() {
            function defineProperties(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n);
                }
            }
            return function(e, t, r) {
                if (t) defineProperties(e.prototype, t);
                if (r) defineProperties(e, r);
                return e;
            };
        }();
        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function _classCallCheck(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        var u = new WeakMap();
        var f = function() {
            function ProxyWrapper() {
                _classCallCheck(this, ProxyWrapper);
            }
            a(ProxyWrapper, null, [ {
                key: "getProxy",
                value: function getProxy(e) {
                    var t = (0, i.default)(e);
                    t.forEach(function(t) {
                        if (o(e[t]) === "object" && !Array.isArray(e[t]) && !u.get(e[t])) {
                            e[t] = ProxyWrapper.getProxy(e[t]);
                            u.set(e[t], true);
                        }
                    });
                    e = new Proxy(e, {
                        get: function get(e, r) {
                            if ((typeof r === "undefined" ? "undefined" : o(r)) !== "symbol" && r !== "__ob__" && r !== "_isVue" && r !== "toJSON" && r !== "actions" && r !== "$moduleId" && r !== "$store" && r !== "$template" && r !== "then" && t.indexOf(r) === -1) {
                                throw new Error("unknown property '" + r + "'");
                            }
                            return e[r];
                        }
                    });
                    return e;
                }
            } ]);
            return ProxyWrapper;
        }();
        t.default = f;
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.mutate = mutate;
        t.act = act;
        var n = r(101);
        function mutate(e) {
            for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) {
                r[i - 1] = arguments[i];
            }
            (0, n.mapMutations)([ e ])[e].call(this, r);
        }
        function act(e) {
            for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) {
                r[i - 1] = arguments[i];
            }
            if (r.length === 1) {
                return (0, n.mapActions)([ e ])[e].call(this, r.pop());
            } else {
                return (0, n.mapActions)([ e ])[e].call(this, r);
            }
        }
    }, function(e, t, r) {
        var n = r(1);
        function castArray() {
            if (!arguments.length) {
                return [];
            }
            var e = arguments[0];
            return n(e) ? e : [ e ];
        }
        e.exports = castArray;
    }, function(e, t) {
        function apply(e, t, r) {
            switch (r.length) {
              case 0:
                return e.call(t);

              case 1:
                return e.call(t, r[0]);

              case 2:
                return e.call(t, r[0], r[1]);

              case 3:
                return e.call(t, r[0], r[1], r[2]);
            }
            return e.apply(t, r);
        }
        e.exports = apply;
    }, function(e, t, r) {
        var n = r(26);
        function arrayIncludes(e, t) {
            var r = e == null ? 0 : e.length;
            return !!r && n(e, t, 0) > -1;
        }
        e.exports = arrayIncludes;
    }, function(e, t) {
        function arrayIncludesWith(e, t, r) {
            var n = -1, i = e == null ? 0 : e.length;
            while (++n < i) {
                if (r(t, e[n])) {
                    return true;
                }
            }
            return false;
        }
        e.exports = arrayIncludesWith;
    }, function(e, t, r) {
        var n = r(25), i = r(12);
        var o = Object.prototype;
        var a = o.hasOwnProperty;
        function assignValue(e, t, r) {
            var o = e[t];
            if (!(a.call(e, t) && i(o, r)) || r === undefined && !(t in e)) {
                n(e, t, r);
            }
        }
        e.exports = assignValue;
    }, function(e, t, r) {
        var n = r(62);
        function baseAssignValue(e, t, r) {
            if (t == "__proto__" && n) {
                n(e, t, {
                    configurable: true,
                    enumerable: true,
                    value: r,
                    writable: true
                });
            } else {
                e[t] = r;
            }
        }
        e.exports = baseAssignValue;
    }, function(e, t) {
        function strictIndexOf(e, t, r) {
            var n = r - 1, i = e.length;
            while (++n < i) {
                if (e[n] === t) {
                    return n;
                }
            }
            return -1;
        }
        e.exports = strictIndexOf;
    }, function(e, t) {
        function baseUnary(e) {
            return function(t) {
                return e(t);
            };
        }
        e.exports = baseUnary;
    }, function(e, t, r) {
        var n = r(26);
        function arrayIncludes(e, t) {
            var r = e == null ? 0 : e.length;
            return !!r && n(e, t, 0) > -1;
        }
        e.exports = arrayIncludes;
    }, function(e, t, r) {
        var n = r(7), i = r(75);
        function createAssigner(e) {
            return n(function(t, r) {
                var n = -1, o = r.length, a = o > 1 ? r[o - 1] : undefined, u = o > 2 ? r[2] : undefined;
                a = e.length > 3 && typeof a == "function" ? (o--, a) : undefined;
                if (u && i(r[0], r[1], u)) {
                    a = o < 3 ? undefined : a;
                    o = 1;
                }
                t = Object(t);
                while (++n < o) {
                    var f = r[n];
                    if (f) {
                        e(t, f, n, a);
                    }
                }
                return t;
            });
        }
        e.exports = createAssigner;
    }, function(e, t, r) {
        var n = r(63);
        var i = typeof self == "object" && self && self.Object === Object && self;
        var o = n || i || Function("return this")();
        e.exports = o;
    }, function(e, t, r) {
        var n = r(47);
        var i = 1, o = 4;
        function cloneDeep(e) {
            return n(e, i | o);
        }
        e.exports = cloneDeep;
    }, function(e, t, r) {
        e.exports = r(84);
    }, function(e, t, r) {
        var n = r(91), i = r(8);
        function isArrayLikeObject(e) {
            return i(e) && n(e);
        }
        e.exports = isArrayLikeObject;
    }, function(e, t, r) {
        var n = r(6), i = r(1), o = r(8);
        var a = "[object String]";
        function isString(e) {
            return typeof e == "string" || !i(e) && o(e) && n(e) == a;
        }
        e.exports = isString;
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.TYPE = t.ModelObject = undefined;
        var n = r(4);
        var i = _interopRequireDefault(n);
        var o = r(39);
        var a = _interopRequireDefault(o);
        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        var u = t.ModelObject = a.default;
        var f = t.TYPE = i.default;
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(34);
        var i = _interopRequireDefault(n);
        var o = r(2);
        var a = _interopRequireDefault(o);
        var u = r(32);
        var f = _interopRequireDefault(u);
        var l = r(13);
        var c = _interopRequireDefault(l);
        var s = r(11);
        var p = _interopRequireDefault(s);
        var v = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) {
                    if (Object.prototype.hasOwnProperty.call(r, n)) {
                        e[n] = r[n];
                    }
                }
            }
            return e;
        };
        t.default = function(e, t) {
            var r = v({}, visitUserActions.call(this, e), visitCustomActions.call(this, t));
            this.actions = {};
            buildActions.call(this, r, this.actions);
        };
        var d = r(19);
        var y = r(17);
        var b = _interopRequireDefault(y);
        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        var h = typeof Promise === "undefined" ? r(100).Promise : Promise;
        var _ = [];
        function visitUserActions(e) {
            var t = this;
            var r = {};
            var n = Object.getOwnPropertyNames(e);
            (0, p.default)(n, function(n) {
                r[n] = {};
                (0, c.default)((0, b.default)(e[n].type), function(e) {
                    var i = "[" + t.$moduleId + "]/" + _.join("/") + (_.length ? "/" : "") + n + ":" + e;
                    r[n][e] = i;
                });
                if (e[n].properties) {
                    _.push(n);
                    r[n] = (0, f.default)(r[n], visitUserActions.call(t, e[n].properties));
                    _.splice(-1);
                }
            });
            return r;
        }
        function visitCustomActions(e) {
            var t = this;
            var r = {};
            (0, c.default)(e, function(e, n) {
                var i = "[" + t.$moduleId + "]:" + n;
                r[n] = i;
            });
            return r;
        }
        function buildActions(e, t) {
            var r = this;
            (0, c.default)(e, function(e, n) {
                if ((0, a.default)(e)) {
                    t[n] = {};
                    buildActions.call(r, e, t[n]);
                } else if ((0, i.default)(e)) {
                    t[n] = function() {
                        var t;
                        for (var n = arguments.length, i = Array(n), o = 0; o < n; o++) {
                            i[o] = arguments[o];
                        }
                        (t = console).log.apply(t, [ "do", e, r ].concat(i));
                        return h.resolve(d.act.call.apply(d.act, [ r, e, r ].concat(i)));
                    };
                }
            });
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(97);
        var i = _interopRequireDefault(n);
        var o = r(31);
        var a = _interopRequireDefault(o);
        var u = r(32);
        var f = _interopRequireDefault(u);
        var l = r(14);
        var c = _interopRequireDefault(l);
        var s = r(13);
        var p = _interopRequireDefault(s);
        var v = r(11);
        var d = _interopRequireDefault(v);
        var y = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) {
                    if (Object.prototype.hasOwnProperty.call(r, n)) {
                        e[n] = r[n];
                    }
                }
            }
            return e;
        };
        var b = function() {
            function sliceIterator(e, t) {
                var r = [];
                var n = true;
                var i = false;
                var o = undefined;
                try {
                    for (var a = e[Symbol.iterator](), u; !(n = (u = a.next()).done); n = true) {
                        r.push(u.value);
                        if (t && r.length === t) break;
                    }
                } catch (e) {
                    i = true;
                    o = e;
                } finally {
                    try {
                        if (!n && a["return"]) a["return"]();
                    } finally {
                        if (i) throw o;
                    }
                }
                return r;
            }
            return function(e, t) {
                if (Array.isArray(e)) {
                    return e;
                } else if (Symbol.iterator in Object(e)) {
                    return sliceIterator(e, t);
                } else {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance");
                }
            };
        }();
        t.default = function(e, t) {
            var r = this;
            if (m[this.$moduleId]) {
                h.mutate.call(this, "add" + this.$moduleId, m[this.$moduleId], this);
                return;
            }
            m[this.$moduleId] = {
                items: [ this ]
            };
            var n = {};
            (0, p.default)(t, function(e, t) {
                n["[" + r.$moduleId + "]:" + t] = e;
            });
            return this.$store.registerModule(this.$moduleId, {
                state: m,
                actions: y({}, visitActions.call(this, e), n),
                mutations: y({}, visitMutations.call(this, e), _defineProperty({}, "add" + this.$moduleId, function undefined(e, t) {
                    var r = b(t, 2), n = r[0], i = r[1];
                    n.items.push(i);
                }))
            });
        };
        var h = r(19);
        var _ = r(16);
        var x = r(17);
        var g = _interopRequireDefault(x);
        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function _defineProperty(e, t, r) {
            if (t in e) {
                Object.defineProperty(e, t, {
                    value: r,
                    enumerable: true,
                    configurable: true,
                    writable: true
                });
            } else {
                e[t] = r;
            }
            return e;
        }
        var j = [];
        function visitActions(e) {
            var t = this;
            var r = {};
            var n = Object.getOwnPropertyNames(e);
            (0, d.default)(n, function(n) {
                (0, p.default)((0, g.default)(e[n].type), function(i) {
                    var o = "[" + t.$moduleId + "]/" + j.join("/") + (j.length ? "/" : "") + n + ":" + i;
                    r[o] = function(t, r) {
                        var i = t.commit;
                        var a = b(r, 2), u = a[0], f = a[1];
                        console.log("act", o, u, f);
                        i(o, [ u, f ]);
                        if ((0, c.default)(e[n].corollary)) {
                            e[n].corollary.call(u);
                        }
                    };
                });
                if (e[n].properties) {
                    j.push(n);
                    (0, f.default)(r, visitActions.call(t, e[n].properties));
                    j.splice(-1);
                }
            });
            return r;
        }
        function visitMutations(e) {
            var t = this;
            var r = {};
            var n = Object.getOwnPropertyNames(e);
            (0, d.default)(n, function(n) {
                (0, p.default)((0, g.default)(e[n].type), function(o) {
                    var u = "[" + t.$moduleId + "]/" + j.join("/") + (j.length ? "/" : "") + n + ":" + o;
                    var f = (0, a.default)(j);
                    if (o === "set") {
                        r[u] = function(t, r) {
                            var o = b(r, 2), a = o[0], l = o[1];
                            console.log("mutate", u, a, l);
                            _.validateProperty.call(l, e[n]);
                            (0, i.default)(f, function(e, t) {
                                return e[t];
                            }, a)[n] = l;
                        };
                    } else if (o === "clear") {
                        r[u] = function(e, t) {
                            var r = b(t, 2), o = r[0], a = r[1];
                            console.log("mutate", u, o, a);
                            (0, i.default)(f, function(e, t) {
                                return e[t];
                            }, o)[n].splice(0);
                        };
                    } else if (o === "add") {
                        r[u] = function(t, r) {
                            var o = b(r, 2), a = o[0], l = o[1];
                            console.log("mutate", u, a, l);
                            _.validateProperty.call(l, e[n].items);
                            (0, i.default)(f, function(e, t) {
                                return e[t];
                            }, a)[n].push(l);
                        };
                    } else if (o === "remove") {
                        r[u] = function(e, t) {
                            var r = b(t, 2), o = r[0], a = r[1];
                            console.log("mutate", u, o, a);
                            var l = (0, i.default)(f, function(e, t) {
                                return e[t];
                            }, o)[n];
                            var c = l.indexOf(a);
                            if (c !== -1) {
                                l.splice(c, 1);
                            } else {
                                console.log("item " + a + " not found");
                            }
                        };
                    }
                });
                if (e[n].properties) {
                    j.push(n);
                    (0, f.default)(r, visitMutations.call(t, e[n].properties));
                    j.splice(-1);
                }
            });
            return r;
        }
        var m = {};
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.default = function() {
            var e = this.constructor.name;
            n[e] = n[e] || 0;
            return e + "/" + n[e]++;
        };
        var n = {};
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = function() {
            function defineProperties(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n);
                }
            }
            return function(e, t, r) {
                if (t) defineProperties(e.prototype, t);
                if (r) defineProperties(e, r);
                return e;
            };
        }();
        var i = r(16);
        var o = _interopRequireDefault(i);
        var a = r(36);
        var u = _interopRequireDefault(a);
        var f = r(37);
        var l = _interopRequireDefault(f);
        var c = r(38);
        var s = _interopRequireDefault(c);
        var p = r(40);
        var v = _interopRequireDefault(p);
        var d = r(18);
        var y = _interopRequireDefault(d);
        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function _classCallCheck(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        var b = new WeakMap();
        var h = function() {
            function ModelObject(e, t, r) {
                var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
                _classCallCheck(this, ModelObject);
                b.set(this, {
                    $objectId: s.default.call(this),
                    $moduleId: this.constructor.name,
                    $store: e,
                    $template: r
                });
                o.default.call(this, t, r);
                u.default.call(this, r, n);
                var i = y.default.getProxy(this);
                l.default.call(i, r, n);
                return i;
            }
            n(ModelObject, [ {
                key: "toJSON",
                value: function toJSON() {
                    return v.default.call(this, {}, this.$template);
                }
            }, {
                key: "$moduleId",
                get: function get() {
                    return b.get(this).$moduleId;
                }
            }, {
                key: "$store",
                get: function get() {
                    return b.get(this).$store;
                }
            }, {
                key: "$template",
                get: function get() {
                    return b.get(this).$template;
                }
            } ]);
            return ModelObject;
        }();
        t.default = h;
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r(14);
        var i = _interopRequireDefault(n);
        var o = r(13);
        var a = _interopRequireDefault(o);
        t.default = persist;
        var u = r(4);
        var f = _interopRequireDefault(u);
        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function persist(e, t) {
            var r = this;
            (0, a.default)(t, function(t, n) {
                if (t.transient) {
                    return;
                }
                if (t.type === f.default.Object) {
                    e[n] = r[n];
                    if ((0, i.default)(t.transform)) {
                        e[n] = t.transform(r[n]);
                    }
                } else if (t.type === f.default.Complex) {
                    if (r[n]) {
                        var o;
                        e[n] = (o = r[n], persist).call(o, {}, t.properties);
                    }
                } else {
                    e[n] = r[n];
                }
            });
            return e;
        }
    }, function(e, t, r) {
        var n = r(77), i = r(78), o = r(79), a = r(80), u = r(81);
        function ListCache(e) {
            var t = -1, r = e == null ? 0 : e.length;
            this.clear();
            while (++t < r) {
                var n = e[t];
                this.set(n[0], n[1]);
            }
        }
        ListCache.prototype.clear = n;
        ListCache.prototype["delete"] = i;
        ListCache.prototype.get = o;
        ListCache.prototype.has = a;
        ListCache.prototype.set = u;
        e.exports = ListCache;
    }, function(e, t, r) {
        var n = r(30);
        var i = n.Symbol;
        e.exports = i;
    }, function(e, t) {
        function arrayEach(e, t) {
            var r = -1, n = e == null ? 0 : e.length;
            while (++r < n) {
                if (t(e[r], r, e) === false) {
                    break;
                }
            }
            return e;
        }
        e.exports = arrayEach;
    }, function(e, t) {
        function arrayPush(e, t) {
            var r = -1, n = t.length, i = e.length;
            while (++r < n) {
                e[i + r] = t[r];
            }
            return e;
        }
        e.exports = arrayPush;
    }, function(e, t, r) {
        var n = r(0), i = r(3);
        function baseAssign(e, t) {
            return e && n(t, i(t), e);
        }
        e.exports = baseAssign;
    }, function(e, t, r) {
        var n = r(0), i = r(15);
        function baseAssignIn(e, t) {
            return e && n(t, i(t), e);
        }
        e.exports = baseAssignIn;
    }, function(e, t, r) {
        var n = r(41), i = r(43), o = r(24), a = r(45), u = r(46), f = r(56), l = r(57), c = r(58), s = r(59), p = r(64), v = r(65), d = r(70), y = r(71), b = r(72), h = r(73), _ = r(1), x = r(93), g = r(2), j = r(3);
        var m = 1, O = 2, w = 4;
        var A = "[object Arguments]", q = "[object Array]", P = "[object Boolean]", D = "[object Date]", R = "[object Error]", k = "[object Function]", S = "[object GeneratorFunction]", C = "[object Map]", I = "[object Number]", M = "[object Object]", F = "[object RegExp]", $ = "[object Set]", E = "[object String]", L = "[object Symbol]", B = "[object WeakMap]";
        var N = "[object ArrayBuffer]", U = "[object DataView]", T = "[object Float32Array]", W = "[object Float64Array]", V = "[object Int8Array]", G = "[object Int16Array]", K = "[object Int32Array]", z = "[object Uint8Array]", J = "[object Uint8ClampedArray]", H = "[object Uint16Array]", Y = "[object Uint32Array]";
        var Q = {};
        Q[A] = Q[q] = Q[N] = Q[U] = Q[P] = Q[D] = Q[T] = Q[W] = Q[V] = Q[G] = Q[K] = Q[C] = Q[I] = Q[M] = Q[F] = Q[$] = Q[E] = Q[L] = Q[z] = Q[J] = Q[H] = Q[Y] = true;
        Q[R] = Q[k] = Q[B] = false;
        function baseClone(e, t, r, q, P, D) {
            var R, C = t & m, I = t & O, F = t & w;
            if (r) {
                R = P ? r(e, q, P, D) : r(e);
            }
            if (R !== undefined) {
                return R;
            }
            if (!g(e)) {
                return e;
            }
            var $ = _(e);
            if ($) {
                R = y(e);
                if (!C) {
                    return l(e, R);
                }
            } else {
                var E = d(e), L = E == k || E == S;
                if (x(e)) {
                    return f(e, C);
                }
                if (E == M || E == A || L && !P) {
                    R = I || L ? {} : h(e);
                    if (!C) {
                        return I ? s(e, u(R, e)) : c(e, a(R, e));
                    }
                } else {
                    if (!Q[E]) {
                        return P ? e : {};
                    }
                    R = b(e, E, baseClone, C);
                }
            }
            D || (D = new n());
            var B = D.get(e);
            if (B) {
                return B;
            }
            D.set(e, R);
            var N = F ? I ? v : p : I ? keysIn : j;
            var U = $ ? undefined : N(e);
            i(U || e, function(n, i) {
                if (U) {
                    i = n;
                    n = e[i];
                }
                o(R, i, baseClone(n, t, r, i, e, D));
            });
            return R;
        }
        e.exports = baseClone;
    }, function(e, t, r) {
        var n = r(2);
        var i = Object.create;
        var o = function() {
            function object() {}
            return function(e) {
                if (!n(e)) {
                    return {};
                }
                if (i) {
                    return i(e);
                }
                object.prototype = e;
                var t = new object();
                object.prototype = undefined;
                return t;
            };
        }();
        e.exports = o;
    }, function(e, t, r) {
        var n = r(20), i = r(22), o = r(23), a = r(9), u = r(27), f = r(28);
        var l = 200;
        function baseDifference(e, t, r, c) {
            var s = -1, p = i, v = true, d = e.length, y = [], b = t.length;
            if (!d) {
                return y;
            }
            if (r) {
                t = a(t, u(r));
            }
            if (c) {
                p = o;
                v = false;
            } else if (t.length >= l) {
                p = f;
                v = false;
                t = new n(t);
            }
            e: while (++s < d) {
                var h = e[s], _ = r == null ? h : r(h);
                h = c || h !== 0 ? h : 0;
                if (v && _ === _) {
                    var x = b;
                    while (x--) {
                        if (t[x] === _) {
                            continue e;
                        }
                    }
                    y.push(h);
                } else if (!p(t, _, c)) {
                    y.push(h);
                }
            }
            return y;
        }
        e.exports = baseDifference;
    }, function(e, t, r) {
        var n = r(44), i = r(74);
        function baseFlatten(e, t, r, o, a) {
            var u = -1, f = e.length;
            r || (r = i);
            a || (a = []);
            while (++u < f) {
                var l = e[u];
                if (t > 0 && r(l)) {
                    if (t > 1) {
                        baseFlatten(l, t - 1, r, o, a);
                    } else {
                        n(a, l);
                    }
                } else if (!o) {
                    a[a.length] = l;
                }
            }
            return a;
        }
        e.exports = baseFlatten;
    }, function(e, t, r) {
        var n = r(60);
        var i = n();
        e.exports = i;
    }, function(e, t, r) {
        var n = r(51), i = r(3);
        function baseForOwn(e, t) {
            return e && n(e, t, i);
        }
        e.exports = baseForOwn;
    }, function(e, t, r) {
        var n = r(20), i = r(22), o = r(23), a = r(9), u = r(27), f = r(28);
        var l = Math.min;
        function baseIntersection(e, t, r) {
            var c = r ? o : i, s = e[0].length, p = e.length, v = p, d = Array(p), y = Infinity, b = [];
            while (v--) {
                var h = e[v];
                if (v && t) {
                    h = a(h, u(t));
                }
                y = l(h.length, y);
                d[v] = !r && (t || s >= 120 && h.length >= 120) ? new n(v && h) : undefined;
            }
            h = e[0];
            var _ = -1, x = d[0];
            e: while (++_ < s && b.length < y) {
                var g = h[_], j = t ? t(g) : g;
                g = r || g !== 0 ? g : 0;
                if (!(x ? f(x, j) : c(b, j, r))) {
                    v = p;
                    while (--v) {
                        var m = d[v];
                        if (!(m ? f(m, j) : c(e[v], j, r))) {
                            continue e;
                        }
                    }
                    if (x) {
                        x.push(j);
                    }
                    b.push(g);
                }
            }
            return b;
        }
        e.exports = baseIntersection;
    }, function(e, t, r) {
        var n = r(33);
        function castArrayLikeObject(e) {
            return n(e) ? e : [];
        }
        e.exports = castArrayLikeObject;
    }, function(e, t) {
        function identity(e) {
            return e;
        }
        e.exports = identity;
    }, function(e, t, r) {
        (function(e) {
            var n = r(30);
            var i = typeof t == "object" && t && !t.nodeType && t;
            var o = i && typeof e == "object" && e && !e.nodeType && e;
            var a = o && o.exports === i;
            var u = a ? n.Buffer : undefined, f = u ? u.allocUnsafe : undefined;
            function cloneBuffer(e, t) {
                if (t) {
                    return e.slice();
                }
                var r = e.length, n = f ? f(r) : new e.constructor(r);
                e.copy(n);
                return n;
            }
            e.exports = cloneBuffer;
        }).call(t, r(99)(e));
    }, function(e, t) {
        function copyArray(e, t) {
            var r = -1, n = e.length;
            t || (t = Array(n));
            while (++r < n) {
                t[r] = e[r];
            }
            return t;
        }
        e.exports = copyArray;
    }, function(e, t, r) {
        var n = r(0), i = r(68);
        function copySymbols(e, t) {
            return n(e, i(e), t);
        }
        e.exports = copySymbols;
    }, function(e, t, r) {
        var n = r(0), i = r(69);
        function copySymbolsIn(e, t) {
            return n(e, i(e), t);
        }
        e.exports = copySymbolsIn;
    }, function(e, t) {
        function createBaseFor(e) {
            return function(t, r, n) {
                var i = -1, o = Object(t), a = n(t), u = a.length;
                while (u--) {
                    var f = a[e ? u : ++i];
                    if (r(o[f], f, o) === false) {
                        break;
                    }
                }
                return t;
            };
        }
        e.exports = createBaseFor;
    }, function(e, t, r) {
        var n = r(12);
        var i = Object.prototype;
        var o = i.hasOwnProperty;
        function customDefaultsAssignIn(e, t, r, a) {
            if (e === undefined || n(e, i[r]) && !o.call(a, r)) {
                return t;
            }
            return e;
        }
        e.exports = customDefaultsAssignIn;
    }, function(e, t, r) {
        var n = r(66);
        var i = function() {
            try {
                var e = n(Object, "defineProperty");
                e({}, "", {});
                return e;
            } catch (e) {}
        }();
        e.exports = i;
    }, function(e, t, r) {
        (function(t) {
            var r = typeof t == "object" && t && t.Object === Object && t;
            e.exports = r;
        }).call(t, r(98));
    }, function(e, t, r) {
        var n = r(10);
        var i = n(Object.keys, Object);
        e.exports = i;
    }, function(e, t) {
        function nativeKeysIn(e) {
            var t = [];
            if (e != null) {
                for (var r in Object(e)) {
                    t.push(r);
                }
            }
            return t;
        }
        e.exports = nativeKeysIn;
    }, function(e, t) {
        function getValue(e, t) {
            return e == null ? undefined : e[t];
        }
        e.exports = getValue;
    }, function(e, t, r) {
        var n = r(10);
        var i = n(Object.getPrototypeOf, Object);
        e.exports = i;
    }, function(e, t) {
        function stubArray() {
            return [];
        }
        e.exports = stubArray;
    }, function(e, t) {
        function stubArray() {
            return [];
        }
        e.exports = stubArray;
    }, function(e, t) {
        var r = Object.prototype;
        var n = r.toString;
        function objectToString(e) {
            return n.call(e);
        }
        e.exports = objectToString;
    }, function(e, t) {
        var r = Object.prototype;
        var n = r.hasOwnProperty;
        function initCloneArray(e) {
            var t = e.length, r = e.constructor(t);
            if (t && typeof e[0] == "string" && n.call(e, "index")) {
                r.index = e.index;
                r.input = e.input;
            }
            return r;
        }
        e.exports = initCloneArray;
    }, function(e, t) {
        function identity(e) {
            return e;
        }
        e.exports = identity;
    }, function(e, t, r) {
        var n = r(48), i = r(67), o = r(76);
        function initCloneObject(e) {
            return typeof e.constructor == "function" && !o(e) ? n(i(e)) : {};
        }
        e.exports = initCloneObject;
    }, function(e, t, r) {
        var n = r(42), i = r(90), o = r(1);
        var a = n ? n.isConcatSpreadable : undefined;
        function isFlattenable(e) {
            return o(e) || i(e) || !!(a && e && e[a]);
        }
        e.exports = isFlattenable;
    }, function(e, t) {
        function stubFalse() {
            return false;
        }
        e.exports = stubFalse;
    }, function(e, t) {
        function stubFalse() {
            return false;
        }
        e.exports = stubFalse;
    }, function(e, t) {
        function listCacheClear() {
            this.__data__ = [];
            this.size = 0;
        }
        e.exports = listCacheClear;
    }, function(e, t, r) {
        var n = r(5);
        var i = Array.prototype;
        var o = i.splice;
        function listCacheDelete(e) {
            var t = this.__data__, r = n(t, e);
            if (r < 0) {
                return false;
            }
            var i = t.length - 1;
            if (r == i) {
                t.pop();
            } else {
                o.call(t, r, 1);
            }
            --this.size;
            return true;
        }
        e.exports = listCacheDelete;
    }, function(e, t, r) {
        var n = r(5);
        function listCacheGet(e) {
            var t = this.__data__, r = n(t, e);
            return r < 0 ? undefined : t[r][1];
        }
        e.exports = listCacheGet;
    }, function(e, t, r) {
        var n = r(5);
        function listCacheHas(e) {
            return n(this.__data__, e) > -1;
        }
        e.exports = listCacheHas;
    }, function(e, t, r) {
        var n = r(5);
        function listCacheSet(e, t) {
            var r = this.__data__, i = n(r, e);
            if (i < 0) {
                ++this.size;
                r.push([ e, t ]);
            } else {
                r[i][1] = t;
            }
            return this;
        }
        e.exports = listCacheSet;
    }, function(e, t, r) {
        var n = r(21);
        var i = Math.max;
        function overRest(e, t, r) {
            t = i(t === undefined ? e.length - 1 : t, 0);
            return function() {
                var o = arguments, a = -1, u = i(o.length - t, 0), f = Array(u);
                while (++a < u) {
                    f[a] = o[t + a];
                }
                a = -1;
                var l = Array(t + 1);
                while (++a < t) {
                    l[a] = o[a];
                }
                l[t] = r(f);
                return n(e, this, l);
            };
        }
        e.exports = overRest;
    }, function(e, t) {
        function identity(e) {
            return e;
        }
        e.exports = identity;
    }, function(e, t, r) {
        var n = r(0), i = r(29), o = r(15);
        var a = i(function(e, t) {
            n(t, o(t), e);
        });
        e.exports = a;
    }, function(e, t, r) {
        var n = r(0), i = r(29), o = r(15);
        var a = i(function(e, t, r, i) {
            n(t, o(t), e, i);
        });
        e.exports = a;
    }, function(e, t, r) {
        var n = r(21), i = r(85), o = r(7), a = r(61);
        var u = o(function(e) {
            e.push(undefined, a);
            return n(i, undefined, e);
        });
        e.exports = u;
    }, function(e, t, r) {
        var n = r(49), i = r(50), o = r(7), a = r(33);
        var u = o(function(e, t) {
            return a(e) ? n(e, i(t, 1, a, true)) : [];
        });
        e.exports = u;
    }, function(e, t) {
        function identity(e) {
            return e;
        }
        e.exports = identity;
    }, function(e, t, r) {
        var n = r(9), i = r(53), o = r(7), a = r(54);
        var u = o(function(e) {
            var t = n(e, a);
            return t.length && t[0] === e[0] ? i(t) : [];
        });
        e.exports = u;
    }, function(e, t) {
        function stubFalse() {
            return false;
        }
        e.exports = stubFalse;
    }, function(e, t, r) {
        var n = r(14), i = r(94);
        function isArrayLike(e) {
            return e != null && i(e.length) && !n(e);
        }
        e.exports = isArrayLike;
    }, function(e, t, r) {
        var n = r(6), i = r(8);
        var o = "[object Boolean]";
        function isBoolean(e) {
            return e === true || e === false || i(e) && n(e) == o;
        }
        e.exports = isBoolean;
    }, function(e, t) {
        function stubFalse() {
            return false;
        }
        e.exports = stubFalse;
    }, function(e, t) {
        var r = 9007199254740991;
        function isLength(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= r;
        }
        e.exports = isLength;
    }, function(e, t, r) {
        var n = r(6), i = r(8);
        var o = "[object Number]";
        function isNumber(e) {
            return typeof e == "number" || i(e) && n(e) == o;
        }
        e.exports = isNumber;
    }, function(e, t) {
        function isUndefined(e) {
            return e === undefined;
        }
        e.exports = isUndefined;
    }, function(e, t) {
        function arrayReduce(e, t, r, n) {
            var i = -1, o = e == null ? 0 : e.length;
            if (n && o) {
                r = e[++i];
            }
            while (++i < o) {
                r = t(r, e[i], i, e);
            }
            return r;
        }
        e.exports = arrayReduce;
    }, function(e, t) {
        var r;
        r = function() {
            return this;
        }();
        try {
            r = r || Function("return this")() || (1, eval)("this");
        } catch (e) {
            if (typeof window === "object") r = window;
        }
        e.exports = r;
    }, function(e, t) {
        e.exports = function(e) {
            if (!e.webpackPolyfill) {
                e.deprecate = function() {};
                e.paths = [];
                if (!e.children) e.children = [];
                Object.defineProperty(e, "loaded", {
                    enumerable: true,
                    get: function() {
                        return e.l;
                    }
                });
                Object.defineProperty(e, "id", {
                    enumerable: true,
                    get: function() {
                        return e.i;
                    }
                });
                e.webpackPolyfill = 1;
            }
            return e;
        };
    }, function(t, r) {
        t.exports = e;
    }, function(e, r) {
        e.exports = t;
    }, function(e, t, r) {
        e.exports = r(35);
    } ]);
});