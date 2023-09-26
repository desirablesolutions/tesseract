function tr(e, r) {
  const n = {
    ...r,
    type: "utility",
    version: 1,
    primary: "model",
    hierachy: "primary"
  };
  return ge(
    e,
    n
  );
}
var Re = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Fn(e) {
  if (e.__esModule)
    return e;
  var r = e.default;
  if (typeof r == "function") {
    var n = function o() {
      if (this instanceof o) {
        var c = [null];
        c.push.apply(c, arguments);
        var l = Function.bind.apply(r, c);
        return new l();
      }
      return r.apply(this, arguments);
    };
    n.prototype = r.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: true }), Object.keys(e).forEach(function(o) {
    var c = Object.getOwnPropertyDescriptor(e, o);
    Object.defineProperty(n, o, c.get ? c : {
      enumerable: true,
      get: function() {
        return e[o];
      }
    });
  }), n;
}
var jt = { exports: {} }, G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vn;
function Bi() {
  if (vn)
    return G;
  vn = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), f = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), _ = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), h = Symbol.iterator;
  function S(s) {
    return s === null || typeof s != "object" ? null : (s = h && s[h] || s["@@iterator"], typeof s == "function" ? s : null);
  }
  var P = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, A = Object.assign, F = {};
  function V(s, m, x) {
    this.props = s, this.context = m, this.refs = F, this.updater = x || P;
  }
  V.prototype.isReactComponent = {}, V.prototype.setState = function(s, m) {
    if (typeof s != "object" && typeof s != "function" && s != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, s, m, "setState");
  }, V.prototype.forceUpdate = function(s) {
    this.updater.enqueueForceUpdate(this, s, "forceUpdate");
  };
  function U() {
  }
  U.prototype = V.prototype;
  function k(s, m, x) {
    this.props = s, this.context = m, this.refs = F, this.updater = x || P;
  }
  var Z = k.prototype = new U();
  Z.constructor = k, A(Z, V.prototype), Z.isPureReactComponent = true;
  var te = Array.isArray, B = Object.prototype.hasOwnProperty, Q = { current: null }, ie = { key: true, ref: true, __self: true, __source: true };
  function Oe(s, m, x) {
    var O, I = {}, $ = null, H = null;
    if (m != null)
      for (O in m.ref !== void 0 && (H = m.ref), m.key !== void 0 && ($ = "" + m.key), m)
        B.call(m, O) && !ie.hasOwnProperty(O) && (I[O] = m[O]);
    var J = arguments.length - 2;
    if (J === 1)
      I.children = x;
    else if (1 < J) {
      for (var ee = Array(J), ue = 0; ue < J; ue++)
        ee[ue] = arguments[ue + 2];
      I.children = ee;
    }
    if (s && s.defaultProps)
      for (O in J = s.defaultProps, J)
        I[O] === void 0 && (I[O] = J[O]);
    return { $$typeof: e, type: s, key: $, ref: H, props: I, _owner: Q.current };
  }
  function Ce(s, m) {
    return { $$typeof: e, type: s.type, key: m, ref: s.ref, props: s.props, _owner: s._owner };
  }
  function Ae(s) {
    return typeof s == "object" && s !== null && s.$$typeof === e;
  }
  function je(s) {
    var m = { "=": "=0", ":": "=2" };
    return "$" + s.replace(/[=:]/g, function(x) {
      return m[x];
    });
  }
  var W = /\/+/g;
  function fe(s, m) {
    return typeof s == "object" && s !== null && s.key != null ? je("" + s.key) : m.toString(36);
  }
  function ye(s, m, x, O, I) {
    var $ = typeof s;
    ($ === "undefined" || $ === "boolean") && (s = null);
    var H = false;
    if (s === null)
      H = true;
    else
      switch ($) {
        case "string":
        case "number":
          H = true;
          break;
        case "object":
          switch (s.$$typeof) {
            case e:
            case r:
              H = true;
          }
      }
    if (H)
      return H = s, I = I(H), s = O === "" ? "." + fe(H, 0) : O, te(I) ? (x = "", s != null && (x = s.replace(W, "$&/") + "/"), ye(I, m, x, "", function(ue) {
        return ue;
      })) : I != null && (Ae(I) && (I = Ce(I, x + (!I.key || H && H.key === I.key ? "" : ("" + I.key).replace(W, "$&/") + "/") + s)), m.push(I)), 1;
    if (H = 0, O = O === "" ? "." : O + ":", te(s))
      for (var J = 0; J < s.length; J++) {
        $ = s[J];
        var ee = O + fe($, J);
        H += ye($, m, x, ee, I);
      }
    else if (ee = S(s), typeof ee == "function")
      for (s = ee.call(s), J = 0; !($ = s.next()).done; )
        $ = $.value, ee = O + fe($, J++), H += ye($, m, x, ee, I);
    else if ($ === "object")
      throw m = String(s), Error("Objects are not valid as a React child (found: " + (m === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : m) + "). If you meant to render a collection of children, use an array instead.");
    return H;
  }
  function de(s, m, x) {
    if (s == null)
      return s;
    var O = [], I = 0;
    return ye(s, O, "", "", function($) {
      return m.call(x, $, I++);
    }), O;
  }
  function _e(s) {
    if (s._status === -1) {
      var m = s._result;
      m = m(), m.then(function(x) {
        (s._status === 0 || s._status === -1) && (s._status = 1, s._result = x);
      }, function(x) {
        (s._status === 0 || s._status === -1) && (s._status = 2, s._result = x);
      }), s._status === -1 && (s._status = 0, s._result = m);
    }
    if (s._status === 1)
      return s._result.default;
    throw s._result;
  }
  var u = { current: null }, g = { transition: null }, R = { ReactCurrentDispatcher: u, ReactCurrentBatchConfig: g, ReactCurrentOwner: Q };
  return G.Children = { map: de, forEach: function(s, m, x) {
    de(s, function() {
      m.apply(this, arguments);
    }, x);
  }, count: function(s) {
    var m = 0;
    return de(s, function() {
      m++;
    }), m;
  }, toArray: function(s) {
    return de(s, function(m) {
      return m;
    }) || [];
  }, only: function(s) {
    if (!Ae(s))
      throw Error("React.Children.only expected to receive a single React element child.");
    return s;
  } }, G.Component = V, G.Fragment = n, G.Profiler = c, G.PureComponent = k, G.StrictMode = o, G.Suspense = y, G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R, G.cloneElement = function(s, m, x) {
    if (s == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + s + ".");
    var O = A({}, s.props), I = s.key, $ = s.ref, H = s._owner;
    if (m != null) {
      if (m.ref !== void 0 && ($ = m.ref, H = Q.current), m.key !== void 0 && (I = "" + m.key), s.type && s.type.defaultProps)
        var J = s.type.defaultProps;
      for (ee in m)
        B.call(m, ee) && !ie.hasOwnProperty(ee) && (O[ee] = m[ee] === void 0 && J !== void 0 ? J[ee] : m[ee]);
    }
    var ee = arguments.length - 2;
    if (ee === 1)
      O.children = x;
    else if (1 < ee) {
      J = Array(ee);
      for (var ue = 0; ue < ee; ue++)
        J[ue] = arguments[ue + 2];
      O.children = J;
    }
    return { $$typeof: e, type: s.type, key: I, ref: $, props: O, _owner: H };
  }, G.createContext = function(s) {
    return s = { $$typeof: f, _currentValue: s, _currentValue2: s, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, s.Provider = { $$typeof: l, _context: s }, s.Consumer = s;
  }, G.createElement = Oe, G.createFactory = function(s) {
    var m = Oe.bind(null, s);
    return m.type = s, m;
  }, G.createRef = function() {
    return { current: null };
  }, G.forwardRef = function(s) {
    return { $$typeof: p, render: s };
  }, G.isValidElement = Ae, G.lazy = function(s) {
    return { $$typeof: b, _payload: { _status: -1, _result: s }, _init: _e };
  }, G.memo = function(s, m) {
    return { $$typeof: _, type: s, compare: m === void 0 ? null : m };
  }, G.startTransition = function(s) {
    var m = g.transition;
    g.transition = {};
    try {
      s();
    } finally {
      g.transition = m;
    }
  }, G.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, G.useCallback = function(s, m) {
    return u.current.useCallback(s, m);
  }, G.useContext = function(s) {
    return u.current.useContext(s);
  }, G.useDebugValue = function() {
  }, G.useDeferredValue = function(s) {
    return u.current.useDeferredValue(s);
  }, G.useEffect = function(s, m) {
    return u.current.useEffect(s, m);
  }, G.useId = function() {
    return u.current.useId();
  }, G.useImperativeHandle = function(s, m, x) {
    return u.current.useImperativeHandle(s, m, x);
  }, G.useInsertionEffect = function(s, m) {
    return u.current.useInsertionEffect(s, m);
  }, G.useLayoutEffect = function(s, m) {
    return u.current.useLayoutEffect(s, m);
  }, G.useMemo = function(s, m) {
    return u.current.useMemo(s, m);
  }, G.useReducer = function(s, m, x) {
    return u.current.useReducer(s, m, x);
  }, G.useRef = function(s) {
    return u.current.useRef(s);
  }, G.useState = function(s) {
    return u.current.useState(s);
  }, G.useSyncExternalStore = function(s, m, x) {
    return u.current.useSyncExternalStore(s, m, x);
  }, G.useTransition = function() {
    return u.current.useTransition();
  }, G.version = "18.2.0", G;
}
jt.exports = Bi();
var Dt = jt.exports, Dn = function(e, r, n, o) {
  var c;
  r[0] = 0;
  for (var l = 1; l < r.length; l++) {
    var f = r[l++], p = r[l] ? (r[0] |= f ? 1 : 2, n[r[l++]]) : r[++l];
    f === 3 ? o[0] = p : f === 4 ? o[1] = Object.assign(o[1] || {}, p) : f === 5 ? (o[1] = o[1] || {})[r[++l]] = p : f === 6 ? o[1][r[++l]] += p + "" : f ? (c = e.apply(p, Dn(e, p, n, ["", null])), o.push(c), p[0] ? r[0] |= 2 : (r[l - 2] = 0, r[l] = c)) : o.push(p);
  }
  return o;
}, mn = /* @__PURE__ */ new Map();
function Mn(e) {
  var r = mn.get(this);
  return r || (r = /* @__PURE__ */ new Map(), mn.set(this, r)), (r = Dn(this, r.get(e) || (r.set(e, r = function(n) {
    for (var o, c, l = 1, f = "", p = "", y = [0], _ = function(S) {
      l === 1 && (S || (f = f.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? y.push(0, S, f) : l === 3 && (S || f) ? (y.push(3, S, f), l = 2) : l === 2 && f === "..." && S ? y.push(4, S, 0) : l === 2 && f && !S ? y.push(5, 0, true, f) : l >= 5 && ((f || !S && l === 5) && (y.push(l, 0, f, c), l = 6), S && (y.push(l, S, 0, c), l = 6)), f = "";
    }, b = 0; b < n.length; b++) {
      b && (l === 1 && _(), _(b));
      for (var h = 0; h < n[b].length; h++)
        o = n[b][h], l === 1 ? o === "<" ? (_(), y = [y], l = 3) : f += o : l === 4 ? f === "--" && o === ">" ? (l = 1, f = "") : f = o + f[0] : p ? o === p ? p = "" : f += o : o === '"' || o === "'" ? p = o : o === ">" ? (_(), l = 1) : l && (o === "=" ? (l = 5, c = f, f = "") : o === "/" && (l < 5 || n[b][h + 1] === ">") ? (_(), l === 3 && (y = y[0]), l = y, (y = y[0]).push(2, 0, l), l = 0) : o === " " || o === "	" || o === `
` || o === "\r" ? (_(), l = 2) : f += o), l === 3 && f === "!--" && (l = 4, y = y[0]);
    }
    return _(), y;
  }(e)), r), arguments, [])).length > 1 ? r : r[0];
}
Mn.bind(Dt.createElement);
var $n = {}, fr = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.ERROR_MESSAGES = void 0, function(r) {
    r.FILE_READ = `[interface-forge] error reading file :filePath

:fileError`, r.FILE_WRITE = `[interface-forge] error writing file :filePath

:fileError`, r.INVALID_EXTENSION = "[interface-forge] file extension is not supported :fileExtension", r.MISSING_BUILD_ARGS = "[interface-forge] missing required build arguments: :missingArgs", r.MISSING_DERIVED_PARAMETERS = "[interface-forge] missing derived parameters: :missingValues", r.MISSING_FILENAME = "[interface-forge] missing filename", r.PATH_IS_NOT_ABSOLUTE = "[interface-forge] fixture file path is not absolute", r.PROMISE_DEFAULTS = "[interface-forge] buildSync does not support Promise defaults", r.PROMISE_FACTORY = "[interface-forge] buildSync does not support factory functions returning Promises", r.PROMISE_OVERRIDES = "[interface-forge] buildSync does not support Promise overrides", r.PROMISE_VALUE = "[interface-forge] Promise value encountered during buildSync for key :key";
  }(e.ERROR_MESSAGES || (e.ERROR_MESSAGES = {}));
})(fr);
var et = {}, xr = { exports: {} }, Vn = {}, Ki = function(r) {
  return r && typeof r == "object" && typeof r.copy == "function" && typeof r.fill == "function" && typeof r.readUInt8 == "function";
}, It = { exports: {} };
typeof Object.create == "function" ? It.exports = function(r, n) {
  r.super_ = n, r.prototype = Object.create(n.prototype, {
    constructor: {
      value: r,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
} : It.exports = function(r, n) {
  r.super_ = n;
  var o = function() {
  };
  o.prototype = n.prototype, r.prototype = new o(), r.prototype.constructor = r;
};
var Ji = It.exports;
(function(e) {
  var r = /%[sdj%]/g;
  e.format = function(u) {
    if (!Z(u)) {
      for (var g = [], R = 0; R < arguments.length; R++)
        g.push(c(arguments[R]));
      return g.join(" ");
    }
    for (var R = 1, s = arguments, m = s.length, x = String(u).replace(r, function(I) {
      if (I === "%%")
        return "%";
      if (R >= m)
        return I;
      switch (I) {
        case "%s":
          return String(s[R++]);
        case "%d":
          return Number(s[R++]);
        case "%j":
          try {
            return JSON.stringify(s[R++]);
          } catch {
            return "[Circular]";
          }
        default:
          return I;
      }
    }), O = s[R]; R < m; O = s[++R])
      V(O) || !ie(O) ? x += " " + O : x += " " + c(O);
    return x;
  }, e.deprecate = function(u, g) {
    if (B(Re.process))
      return function() {
        return e.deprecate(u, g).apply(this, arguments);
      };
    if (process.noDeprecation === true)
      return u;
    var R = false;
    function s() {
      if (!R) {
        if (process.throwDeprecation)
          throw new Error(g);
        process.traceDeprecation ? console.trace(g) : console.error(g), R = true;
      }
      return u.apply(this, arguments);
    }
    return s;
  };
  var n = {}, o;
  e.debuglog = function(u) {
    if (B(o) && (o = {}.NODE_DEBUG || ""), u = u.toUpperCase(), !n[u])
      if (new RegExp("\\b" + u + "\\b", "i").test(o)) {
        var g = process.pid;
        n[u] = function() {
          var R = e.format.apply(e, arguments);
          console.error("%s %d: %s", u, g, R);
        };
      } else
        n[u] = function() {
        };
    return n[u];
  };
  function c(u, g) {
    var R = {
      seen: [],
      stylize: f
    };
    return arguments.length >= 3 && (R.depth = arguments[2]), arguments.length >= 4 && (R.colors = arguments[3]), F(g) ? R.showHidden = g : g && e._extend(R, g), B(R.showHidden) && (R.showHidden = false), B(R.depth) && (R.depth = 2), B(R.colors) && (R.colors = false), B(R.customInspect) && (R.customInspect = true), R.colors && (R.stylize = l), y(R, u, R.depth);
  }
  e.inspect = c, c.colors = {
    bold: [1, 22],
    italic: [3, 23],
    underline: [4, 24],
    inverse: [7, 27],
    white: [37, 39],
    grey: [90, 39],
    black: [30, 39],
    blue: [34, 39],
    cyan: [36, 39],
    green: [32, 39],
    magenta: [35, 39],
    red: [31, 39],
    yellow: [33, 39]
  }, c.styles = {
    special: "cyan",
    number: "yellow",
    boolean: "yellow",
    undefined: "grey",
    null: "bold",
    string: "green",
    date: "magenta",
    regexp: "red"
  };
  function l(u, g) {
    var R = c.styles[g];
    return R ? "\x1B[" + c.colors[R][0] + "m" + u + "\x1B[" + c.colors[R][1] + "m" : u;
  }
  function f(u, g) {
    return u;
  }
  function p(u) {
    var g = {};
    return u.forEach(function(R, s) {
      g[R] = true;
    }), g;
  }
  function y(u, g, R) {
    if (u.customInspect && g && Ae(g.inspect) && g.inspect !== e.inspect && !(g.constructor && g.constructor.prototype === g)) {
      var s = g.inspect(R, u);
      return Z(s) || (s = y(u, s, R)), s;
    }
    var m = _(u, g);
    if (m)
      return m;
    var x = Object.keys(g), O = p(x);
    if (u.showHidden && (x = Object.getOwnPropertyNames(g)), Ce(g) && (x.indexOf("message") >= 0 || x.indexOf("description") >= 0))
      return b(g);
    if (x.length === 0) {
      if (Ae(g)) {
        var I = g.name ? ": " + g.name : "";
        return u.stylize("[Function" + I + "]", "special");
      }
      if (Q(g))
        return u.stylize(RegExp.prototype.toString.call(g), "regexp");
      if (Oe(g))
        return u.stylize(Date.prototype.toString.call(g), "date");
      if (Ce(g))
        return b(g);
    }
    var $ = "", H = false, J = ["{", "}"];
    if (A(g) && (H = true, J = ["[", "]"]), Ae(g)) {
      var ee = g.name ? ": " + g.name : "";
      $ = " [Function" + ee + "]";
    }
    if (Q(g) && ($ = " " + RegExp.prototype.toString.call(g)), Oe(g) && ($ = " " + Date.prototype.toUTCString.call(g)), Ce(g) && ($ = " " + b(g)), x.length === 0 && (!H || g.length == 0))
      return J[0] + $ + J[1];
    if (R < 0)
      return Q(g) ? u.stylize(RegExp.prototype.toString.call(g), "regexp") : u.stylize("[Object]", "special");
    u.seen.push(g);
    var ue;
    return H ? ue = h(u, g, R, O, x) : ue = x.map(function(Me) {
      return S(u, g, R, O, Me, H);
    }), u.seen.pop(), P(ue, $, J);
  }
  function _(u, g) {
    if (B(g))
      return u.stylize("undefined", "undefined");
    if (Z(g)) {
      var R = "'" + JSON.stringify(g).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
      return u.stylize(R, "string");
    }
    if (k(g))
      return u.stylize("" + g, "number");
    if (F(g))
      return u.stylize("" + g, "boolean");
    if (V(g))
      return u.stylize("null", "null");
  }
  function b(u) {
    return "[" + Error.prototype.toString.call(u) + "]";
  }
  function h(u, g, R, s, m) {
    for (var x = [], O = 0, I = g.length; O < I; ++O)
      _e(g, String(O)) ? x.push(S(
        u,
        g,
        R,
        s,
        String(O),
        true
      )) : x.push("");
    return m.forEach(function($) {
      $.match(/^\d+$/) || x.push(S(
        u,
        g,
        R,
        s,
        $,
        true
      ));
    }), x;
  }
  function S(u, g, R, s, m, x) {
    var O, I, $;
    if ($ = Object.getOwnPropertyDescriptor(g, m) || { value: g[m] }, $.get ? $.set ? I = u.stylize("[Getter/Setter]", "special") : I = u.stylize("[Getter]", "special") : $.set && (I = u.stylize("[Setter]", "special")), _e(s, m) || (O = "[" + m + "]"), I || (u.seen.indexOf($.value) < 0 ? (V(R) ? I = y(u, $.value, null) : I = y(u, $.value, R - 1), I.indexOf(`
`) > -1 && (x ? I = I.split(`
`).map(function(H) {
      return "  " + H;
    }).join(`
`).substr(2) : I = `
` + I.split(`
`).map(function(H) {
      return "   " + H;
    }).join(`
`))) : I = u.stylize("[Circular]", "special")), B(O)) {
      if (x && m.match(/^\d+$/))
        return I;
      O = JSON.stringify("" + m), O.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (O = O.substr(1, O.length - 2), O = u.stylize(O, "name")) : (O = O.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), O = u.stylize(O, "string"));
    }
    return O + ": " + I;
  }
  function P(u, g, R) {
    var s = u.reduce(function(m, x) {
      return x.indexOf(`
`) >= 0, m + x.replace(/\u001b\[\d\d?m/g, "").length + 1;
    }, 0);
    return s > 60 ? R[0] + (g === "" ? "" : g + `
 `) + " " + u.join(`,
  `) + " " + R[1] : R[0] + g + " " + u.join(", ") + " " + R[1];
  }
  function A(u) {
    return Array.isArray(u);
  }
  e.isArray = A;
  function F(u) {
    return typeof u == "boolean";
  }
  e.isBoolean = F;
  function V(u) {
    return u === null;
  }
  e.isNull = V;
  function U(u) {
    return u == null;
  }
  e.isNullOrUndefined = U;
  function k(u) {
    return typeof u == "number";
  }
  e.isNumber = k;
  function Z(u) {
    return typeof u == "string";
  }
  e.isString = Z;
  function te(u) {
    return typeof u == "symbol";
  }
  e.isSymbol = te;
  function B(u) {
    return u === void 0;
  }
  e.isUndefined = B;
  function Q(u) {
    return ie(u) && W(u) === "[object RegExp]";
  }
  e.isRegExp = Q;
  function ie(u) {
    return typeof u == "object" && u !== null;
  }
  e.isObject = ie;
  function Oe(u) {
    return ie(u) && W(u) === "[object Date]";
  }
  e.isDate = Oe;
  function Ce(u) {
    return ie(u) && (W(u) === "[object Error]" || u instanceof Error);
  }
  e.isError = Ce;
  function Ae(u) {
    return typeof u == "function";
  }
  e.isFunction = Ae;
  function je(u) {
    return u === null || typeof u == "boolean" || typeof u == "number" || typeof u == "string" || typeof u == "symbol" || typeof u > "u";
  }
  e.isPrimitive = je, e.isBuffer = Ki;
  function W(u) {
    return Object.prototype.toString.call(u);
  }
  function fe(u) {
    return u < 10 ? "0" + u.toString(10) : u.toString(10);
  }
  var ye = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  function de() {
    var u = /* @__PURE__ */ new Date(), g = [
      fe(u.getHours()),
      fe(u.getMinutes()),
      fe(u.getSeconds())
    ].join(":");
    return [u.getDate(), ye[u.getMonth()], g].join(" ");
  }
  e.log = function() {
    console.log("%s - %s", de(), e.format.apply(e, arguments));
  }, e.inherits = Ji, e._extend = function(u, g) {
    if (!g || !ie(g))
      return u;
    for (var R = Object.keys(g), s = R.length; s--; )
      u[R[s]] = g[R[s]];
    return u;
  };
  function _e(u, g) {
    return Object.prototype.hasOwnProperty.call(u, g);
  }
})(Vn);
var Xi = process.platform === "win32", De = Vn;
function rt(e, r) {
  for (var n = [], o = 0; o < e.length; o++) {
    var c = e[o];
    !c || c === "." || (c === ".." ? n.length && n[n.length - 1] !== ".." ? n.pop() : r && n.push("..") : n.push(c));
  }
  return n;
}
function Or(e) {
  for (var r = e.length - 1, n = 0; n <= r && !e[n]; n++)
    ;
  for (var o = r; o >= 0 && !e[o]; o--)
    ;
  return n === 0 && o === r ? e : n > o ? [] : e.slice(n, o + 1);
}
var Ln = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/, Zi = /^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/, me = {};
function tt(e) {
  var r = Ln.exec(e), n = (r[1] || "") + (r[2] || ""), o = r[3] || "", c = Zi.exec(o), l = c[1], f = c[2], p = c[3];
  return [n, l, f, p];
}
function Mt(e) {
  var r = Ln.exec(e), n = r[1] || "", o = !!n && n[1] !== ":";
  return {
    device: n,
    isUnc: o,
    isAbsolute: o || !!r[2],
    tail: r[3]
  };
}
function Un(e) {
  return "\\\\" + e.replace(/^[\\\/]+/, "").replace(/[\\\/]+/g, "\\");
}
me.resolve = function() {
  for (var e = "", r = "", n = false, o = arguments.length - 1; o >= -1; o--) {
    var c;
    if (o >= 0 ? c = arguments[o] : e ? (c = process.env["=" + e], (!c || c.substr(0, 3).toLowerCase() !== e.toLowerCase() + "\\") && (c = e + "\\")) : c = process.cwd(), De.isString(c)) {
      if (!c)
        continue;
    } else
      throw new TypeError("Arguments to path.resolve must be strings");
    var l = Mt(c), f = l.device, p = l.isUnc, y = l.isAbsolute, _ = l.tail;
    if (!(f && e && f.toLowerCase() !== e.toLowerCase()) && (e || (e = f), n || (r = _ + "\\" + r, n = y), e && n))
      break;
  }
  return p && (e = Un(e)), r = rt(
    r.split(/[\\\/]+/),
    !n
  ).join("\\"), e + (n ? "\\" : "") + r || ".";
};
me.normalize = function(e) {
  var r = Mt(e), n = r.device, o = r.isUnc, c = r.isAbsolute, l = r.tail, f = /[\\\/]$/.test(l);
  return l = rt(l.split(/[\\\/]+/), !c).join("\\"), !l && !c && (l = "."), l && f && (l += "\\"), o && (n = Un(n)), n + (c ? "\\" : "") + l;
};
me.isAbsolute = function(e) {
  return Mt(e).isAbsolute;
};
me.join = function() {
  for (var e = [], r = 0; r < arguments.length; r++) {
    var n = arguments[r];
    if (!De.isString(n))
      throw new TypeError("Arguments to path.join must be strings");
    n && e.push(n);
  }
  var o = e.join("\\");
  return /^[\\\/]{2}[^\\\/]/.test(e[0]) || (o = o.replace(/^[\\\/]{2,}/, "\\")), me.normalize(o);
};
me.relative = function(e, r) {
  e = me.resolve(e), r = me.resolve(r);
  for (var n = e.toLowerCase(), o = r.toLowerCase(), c = Or(r.split("\\")), l = Or(n.split("\\")), f = Or(o.split("\\")), p = Math.min(l.length, f.length), y = p, _ = 0; _ < p; _++)
    if (l[_] !== f[_]) {
      y = _;
      break;
    }
  if (y == 0)
    return r;
  for (var b = [], _ = y; _ < l.length; _++)
    b.push("..");
  return b = b.concat(c.slice(y)), b.join("\\");
};
me._makeLong = function(e) {
  if (!De.isString(e))
    return e;
  if (!e)
    return "";
  var r = me.resolve(e);
  return /^[a-zA-Z]\:\\/.test(r) ? "\\\\?\\" + r : /^\\\\[^?.]/.test(r) ? "\\\\?\\UNC\\" + r.substring(2) : e;
};
me.dirname = function(e) {
  var r = tt(e), n = r[0], o = r[1];
  return !n && !o ? "." : (o && (o = o.substr(0, o.length - 1)), n + o);
};
me.basename = function(e, r) {
  var n = tt(e)[2];
  return r && n.substr(-1 * r.length) === r && (n = n.substr(0, n.length - r.length)), n;
};
me.extname = function(e) {
  return tt(e)[3];
};
me.format = function(e) {
  if (!De.isObject(e))
    throw new TypeError(
      "Parameter 'pathObject' must be an object, not " + typeof e
    );
  var r = e.root || "";
  if (!De.isString(r))
    throw new TypeError(
      "'pathObject.root' must be a string or undefined, not " + typeof e.root
    );
  var n = e.dir, o = e.base || "";
  return n ? n[n.length - 1] === me.sep ? n + o : n + me.sep + o : o;
};
me.parse = function(e) {
  if (!De.isString(e))
    throw new TypeError(
      "Parameter 'pathString' must be a string, not " + typeof e
    );
  var r = tt(e);
  if (!r || r.length !== 4)
    throw new TypeError("Invalid path '" + e + "'");
  return {
    root: r[0],
    dir: r[0] + r[1].slice(0, -1),
    base: r[2],
    ext: r[3],
    name: r[2].slice(0, r[2].length - r[3].length)
  };
};
me.sep = "\\";
me.delimiter = ";";
var Qi = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/, he = {};
function nt(e) {
  return Qi.exec(e).slice(1);
}
he.resolve = function() {
  for (var e = "", r = false, n = arguments.length - 1; n >= -1 && !r; n--) {
    var o = n >= 0 ? arguments[n] : process.cwd();
    if (De.isString(o)) {
      if (!o)
        continue;
    } else
      throw new TypeError("Arguments to path.resolve must be strings");
    e = o + "/" + e, r = o[0] === "/";
  }
  return e = rt(
    e.split("/"),
    !r
  ).join("/"), (r ? "/" : "") + e || ".";
};
he.normalize = function(e) {
  var r = he.isAbsolute(e), n = e && e[e.length - 1] === "/";
  return e = rt(e.split("/"), !r).join("/"), !e && !r && (e = "."), e && n && (e += "/"), (r ? "/" : "") + e;
};
he.isAbsolute = function(e) {
  return e.charAt(0) === "/";
};
he.join = function() {
  for (var e = "", r = 0; r < arguments.length; r++) {
    var n = arguments[r];
    if (!De.isString(n))
      throw new TypeError("Arguments to path.join must be strings");
    n && (e ? e += "/" + n : e += n);
  }
  return he.normalize(e);
};
he.relative = function(e, r) {
  e = he.resolve(e).substr(1), r = he.resolve(r).substr(1);
  for (var n = Or(e.split("/")), o = Or(r.split("/")), c = Math.min(n.length, o.length), l = c, f = 0; f < c; f++)
    if (n[f] !== o[f]) {
      l = f;
      break;
    }
  for (var p = [], f = l; f < n.length; f++)
    p.push("..");
  return p = p.concat(o.slice(l)), p.join("/");
};
he._makeLong = function(e) {
  return e;
};
he.dirname = function(e) {
  var r = nt(e), n = r[0], o = r[1];
  return !n && !o ? "." : (o && (o = o.substr(0, o.length - 1)), n + o);
};
he.basename = function(e, r) {
  var n = nt(e)[2];
  return r && n.substr(-1 * r.length) === r && (n = n.substr(0, n.length - r.length)), n;
};
he.extname = function(e) {
  return nt(e)[3];
};
he.format = function(e) {
  if (!De.isObject(e))
    throw new TypeError(
      "Parameter 'pathObject' must be an object, not " + typeof e
    );
  var r = e.root || "";
  if (!De.isString(r))
    throw new TypeError(
      "'pathObject.root' must be a string or undefined, not " + typeof e.root
    );
  var n = e.dir ? e.dir + he.sep : "", o = e.base || "";
  return n + o;
};
he.parse = function(e) {
  if (!De.isString(e))
    throw new TypeError(
      "Parameter 'pathString' must be a string, not " + typeof e
    );
  var r = nt(e);
  if (!r || r.length !== 4)
    throw new TypeError("Invalid path '" + e + "'");
  return r[1] = r[1] || "", r[2] = r[2] || "", r[3] = r[3] || "", {
    root: r[0],
    dir: r[0] + r[1].slice(0, -1),
    base: r[2],
    ext: r[3],
    name: r[2].slice(0, r[2].length - r[3].length)
  };
};
he.sep = "/";
he.delimiter = ":";
Xi ? xr.exports = me : xr.exports = he;
xr.exports.posix = he;
xr.exports.win32 = me;
var zn = xr.exports, Fe = {};
const we = (e) => Object.prototype.toString.call(e);
function N(e, r) {
  return r ? (n) => e(n, r) : (n) => e(n);
}
function M(e) {
  return (r, n) => {
    if (!e(r, n))
      throw new TypeError(n == null ? void 0 : n.message);
  };
}
function Nt(...e) {
  return function(r, ...n) {
    for (const o of e)
      if (o(r, ...n))
        return true;
    return false;
  };
}
const ve = N((e) => typeof e == "object" && e !== null), $t = N((e) => ve(e) && (we(e) === "[object ArrayBuffer]" || e instanceof ArrayBuffer)), Vt = N((e) => ve(e) && (we(e) === "[object SharedArrayBuffer]" || e instanceof SharedArrayBuffer)), Bn = Nt($t, Vt), ea = M(Bn);
function Gn(e, r) {
  return N((n) => Array.isArray(n) && (!(r != null && r.valueValidator) || n.every(r.valueValidator)))(e);
}
function ra(e, r) {
  return M(Gn)(e, r);
}
const ta = M($t);
function Wn(e) {
  return N((r) => typeof r == "function" && we(r) === "[object AsyncFunction]")(e);
}
function na(e, r) {
  return M(Wn)(e, r);
}
function Yn(e) {
  return N((r) => ve(r) && we(r) === "[object AsyncGenerator]")(e);
}
function oa(e, r) {
  return M(Yn)(e, r);
}
function qn(e) {
  return N((r) => typeof r == "function" && we(r) === "[object AsyncGeneratorFunction]")(e);
}
function ia(e, r) {
  return M(qn)(e, r);
}
function Hn(e) {
  return N((r) => ve(r) && typeof Reflect.get(r, Symbol.asyncIterator) == "function")(e);
}
function aa(e, r) {
  return M(Hn)(e, r);
}
const Kn = N((e) => typeof e == "bigint"), sa = M(Kn), Jn = N((e) => typeof e == "boolean"), ua = M(Jn), Xn = N((e) => ve(e) && (we(e) === "[object Boolean]" || e instanceof Boolean)), la = M(Xn), Zn = N((e) => typeof Buffer < "u" && e instanceof Buffer), ca = M(Zn), Qn = N((e) => ve(e) && (we(e) === "[object DataView]" || e instanceof DataView)), fa = M(Qn), eo = N((e) => ve(e) && (we(e) === "[object Date]" || e instanceof Date)), da = M(eo), Tr = N((e) => e === void 0);
function pa(e, r) {
  if (Tr(e))
    throw TypeError(r == null ? void 0 : r.message);
}
function ro(e) {
  return N((r) => ve(r) && (we(r) === "[object Error]" || r instanceof Error))(e);
}
function va(e, r) {
  return M(ro)(e, r);
}
function to(e) {
  return N((r) => typeof r == "function" && we(r) === "[object Function]")(e);
}
function ya(e, r) {
  return M(to)(e, r);
}
function no(e) {
  return N((r) => ve(r) && we(r) === "[object Generator]")(e);
}
function ma(e, r) {
  return M(no)(e, r);
}
function oo(e) {
  return N((r) => typeof r == "function" && we(r) === "[object GeneratorFunction]")(e);
}
function ga(e, r) {
  return M(oo)(e, r);
}
const Lt = N((e) => typeof e == "string");
function io(e) {
  return N((r) => ve(r) && typeof Reflect.get(r, Symbol.iterator) == "function" || Lt(r))(e);
}
function ba(e, r) {
  return M(io)(e, r);
}
function ao(e) {
  return N((r) => ve(r) && typeof Reflect.get(r, "next") == "function")(e);
}
function ha(e, r) {
  return M(ao)(e, r);
}
function so(e, r) {
  return N((n) => (n instanceof Map || ve(n) && we(n) === "[object Map]") && (!(r != null && r.valueValidator) || [...n.values()].every(r.valueValidator)) && (!(r != null && r.keyValidator) || [...n.keys()].every(r.keyValidator)))(e);
}
function wa(e, r) {
  return M(so)(e, r);
}
const jr = N((e) => e === null);
function _a(e, r) {
  if (jr(e))
    throw TypeError(r == null ? void 0 : r.message);
}
function Ea(e, r) {
  if (Tr(e) || jr(e))
    throw TypeError(r == null ? void 0 : r.message);
}
const Sa = M(jr), uo = Nt(jr, Tr), Ra = M(uo), lo = N((e) => typeof e == "number"), Oa = M(lo), co = N((e) => ve(e) && (we(e) === "[object Number]" || e instanceof Number)), Ca = M(co), Aa = M(ve);
function fo(e) {
  return N((r) => r instanceof Promise || ve(r) && typeof Reflect.get(r, "then") == "function")(e);
}
function xa(e, r) {
  return M(fo)(e, r);
}
function po(e, r) {
  return N((n) => ve(n) && we(n) === "[object Object]" && (!(r != null && r.valueValidator) || Object.values(n).every(r.valueValidator)) && (!(r != null && r.keyValidator) || Object.keys(n).every(r.keyValidator)))(e);
}
function Pa(e, r) {
  return M(po)(e, r);
}
const vo = N((e) => ve(e) && (we(e) === "[object RegExp]" || e instanceof RegExp)), Ta = M(vo);
function yo(e, r) {
  return N((n) => ve(n) && (we(n) === "[object Set]" || n instanceof Set) && (!(r != null && r.valueValidator) || [...n].every(r.valueValidator)))(e);
}
function ja(e, r) {
  return M(yo)(e, r);
}
const Ia = M(Vt), ka = M(Lt), mo = N((e) => ve(e) && (we(e) === "[object String]" || e instanceof String)), Fa = M(mo), go = N((e) => typeof e == "symbol"), Da = M(go), Te = N((e) => e instanceof Object.getPrototypeOf(Int8Array) || e instanceof Object.getPrototypeOf(Uint8Array)), bo = (e) => N((r) => Te(r) && r[Symbol.toStringTag] === "Int8Array")(e), ho = (e) => N((r) => Te(r) && r[Symbol.toStringTag] === "Uint8Array")(e), wo = (e) => N((r) => Te(r) && r[Symbol.toStringTag] === "Uint8ClampedArray")(e), _o = (e) => N((r) => Te(r) && r[Symbol.toStringTag] === "Int16Array")(e), Eo = (e) => N((r) => Te(r) && r[Symbol.toStringTag] === "Uint16Array")(e), So = (e) => N((r) => Te(r) && r[Symbol.toStringTag] === "Int32Array")(e), Ro = (e) => N((r) => Te(r) && r[Symbol.toStringTag] === "Uint32Array")(e), Oo = (e) => N((r) => Te(r) && r[Symbol.toStringTag] === "Float32Array")(e), Co = (e) => N((r) => Te(r) && r[Symbol.toStringTag] === "Float64Array")(e), Ao = (e) => N((r) => Te(r) && r[Symbol.toStringTag] === "BigInt64Array")(e), xo = (e) => N((r) => Te(r) && r[Symbol.toStringTag] === "BigUint64Array")(e), Ma = M(Te), Na = M(bo), $a = M(ho), Va = M(wo), La = M(_o), Ua = M(Eo), za = M(So), Ba = M(Ro), Ga = M(Oo), Wa = M(Co), Ya = M(Ao), qa = M(xo), Ha = M(Tr);
function Po(e) {
  return N((r) => r instanceof WeakMap || ve(r) && we(r) === "[object WeakMap]")(e);
}
function Ka(e, r) {
  return M(Po)(e, r);
}
function To(e) {
  return N((r) => r instanceof WeakSet || ve(r) && we(r) === "[object WeakSet]")(e);
}
function Ja(e, r) {
  return M(To)(e, r);
}
function jo(e) {
  return e !== void 0;
}
function Io(e) {
  return e !== null;
}
function Xa(e) {
  return jo(e) && Io(e);
}
const Za = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  assertIsAnyArrayBuffer: ea,
  assertIsArray: ra,
  assertIsArrayBuffer: ta,
  assertIsAsyncFunction: na,
  assertIsAsyncGenerator: oa,
  assertIsAsyncGeneratorFunction: ia,
  assertIsAsyncIterable: aa,
  assertIsBigInt: sa,
  assertIsBigInt64Array: Ya,
  assertIsBigUint64Array: qa,
  assertIsBoolean: ua,
  assertIsBooleanObject: la,
  assertIsBuffer: ca,
  assertIsDataView: fa,
  assertIsDate: da,
  assertIsDefined: pa,
  assertIsError: va,
  assertIsFloat32Array: Ga,
  assertIsFloat64Array: Wa,
  assertIsFunction: ya,
  assertIsGenerator: ma,
  assertIsGeneratorFunction: ga,
  assertIsInt16Array: La,
  assertIsInt32Array: za,
  assertIsInt8Array: Na,
  assertIsIterable: ba,
  assertIsIterator: ha,
  assertIsMap: wa,
  assertIsNotNull: _a,
  assertIsNotNullish: Ea,
  assertIsNull: Sa,
  assertIsNullish: Ra,
  assertIsNumber: Oa,
  assertIsNumberObject: Ca,
  assertIsObject: Aa,
  assertIsPromise: xa,
  assertIsRecord: Pa,
  assertIsRegExp: Ta,
  assertIsSet: ja,
  assertIsSharedArrayBuffer: Ia,
  assertIsString: ka,
  assertIsStringObject: Fa,
  assertIsSymbol: Da,
  assertIsTypedArray: Ma,
  assertIsUint16Array: Ua,
  assertIsUint32Array: Ba,
  assertIsUint8Array: $a,
  assertIsUint8ClampedArray: Va,
  assertIsUndefined: Ha,
  assertIsWeakMap: Ka,
  assertIsWeakSet: Ja,
  createTypeAssertion: M,
  createTypeGuard: N,
  isAnyArrayBuffer: Bn,
  isArray: Gn,
  isArrayBuffer: $t,
  isAsyncFunction: Wn,
  isAsyncGenerator: Yn,
  isAsyncGeneratorFunction: qn,
  isAsyncIterable: Hn,
  isBigInt: Kn,
  isBigInt64Array: Ao,
  isBigUint64Array: xo,
  isBoolean: Jn,
  isBooleanObject: Xn,
  isBuffer: Zn,
  isDataView: Qn,
  isDate: eo,
  isDefined: jo,
  isError: ro,
  isFloat32Array: Oo,
  isFloat64Array: Co,
  isFunction: to,
  isGenerator: no,
  isGeneratorFunction: oo,
  isInt16Array: _o,
  isInt32Array: So,
  isInt8Array: bo,
  isIterable: io,
  isIterator: ao,
  isMap: so,
  isNotNull: Io,
  isNotNullish: Xa,
  isNull: jr,
  isNullish: uo,
  isNumber: lo,
  isNumberObject: co,
  isObject: ve,
  isPromise: fo,
  isRecord: po,
  isRegExp: vo,
  isSet: yo,
  isSharedArrayBuffer: Vt,
  isString: Lt,
  isStringObject: mo,
  isSymbol: go,
  isTypedArray: Te,
  isUint16Array: Eo,
  isUint32Array: Ro,
  isUint8Array: ho,
  isUint8ClampedArray: wo,
  isUndefined: Tr,
  isUnion: Nt,
  isWeakMap: Po,
  isWeakSet: To
}, Symbol.toStringTag, { value: "Module" })), dr = /* @__PURE__ */ Fn(Za);
var er = {};
Object.defineProperty(er, "__esModule", { value: true });
er.sample = er.iterate = void 0;
function ko(e) {
  const r = [];
  for (const n of e)
    r.push(n);
  return r;
}
function Qa(e) {
  const r = ko(e);
  return function* () {
    let n = 0;
    for (; ; ) {
      const o = r[n];
      n === r.length - 1 ? n = 0 : n++, yield o;
    }
  }();
}
er.iterate = Qa;
function es(e) {
  const r = ko(e);
  return function* () {
    let n = null, o = null;
    for (; ; ) {
      for (r.length <= 1 && (yield r[0]), n = o; o === n; )
        o = r[Math.floor(Math.random() * r.length)];
      yield o;
    }
  }();
}
er.sample = es;
var rr = {};
Object.defineProperty(rr, "__esModule", { value: true });
rr.merge = rr.getValueFromNestedArray = void 0;
const hn = dr;
function Fo(e, r) {
  return Array.isArray(e[0]) ? Fo(e[0], r + 1) : [e[0], r];
}
rr.getValueFromNestedArray = Fo;
function Do(e, ...r) {
  const n = Object.assign({}, e);
  for (const o of r.filter(Boolean))
    for (const [c, l] of Object.entries(o)) {
      const f = Reflect.get(n, c);
      (0, hn.isRecord)(l) && (0, hn.isRecord)(f) ? Reflect.set(n, c, Do(f, l)) : Reflect.set(n, c, l);
    }
  return n;
}
rr.merge = Do;
var ot = {};
Object.defineProperty(ot, "__esModule", { value: true });
ot.parseOptions = void 0;
const wn = dr;
function rs(e) {
  return (0, wn.createTypeGuard)((r) => (0, wn.isObject)(r) && (Reflect.has(r, "overrides") || Reflect.has(r, "factory")))(e);
}
function ts(e, r) {
  if (!e)
    return [void 0, void 0];
  if (rs(e)) {
    const { overrides: n, factory: o } = e;
    return [
      typeof n == "function" ? n(r) : n,
      o
    ];
  }
  return [
    typeof e == "function" ? e(r) : e,
    void 0
  ];
}
ot.parseOptions = ts;
var hr = {}, _n;
function ns() {
  if (_n)
    return hr;
  _n = 1;
  var e = Re && Re.__awaiter || function(y, _, b, h) {
    function S(P) {
      return P instanceof b ? P : new b(function(A) {
        A(P);
      });
    }
    return new (b || (b = Promise))(function(P, A) {
      function F(k) {
        try {
          U(h.next(k));
        } catch (Z) {
          A(Z);
        }
      }
      function V(k) {
        try {
          U(h.throw(k));
        } catch (Z) {
          A(Z);
        }
      }
      function U(k) {
        k.done ? P(k.value) : S(k.value).then(F, V);
      }
      U((h = h.apply(y, _ || [])).next());
    });
  }, r = Re && Re.__rest || function(y, _) {
    var b = {};
    for (var h in y)
      Object.prototype.hasOwnProperty.call(y, h) && _.indexOf(h) < 0 && (b[h] = y[h]);
    if (y != null && typeof Object.getOwnPropertySymbols == "function")
      for (var S = 0, h = Object.getOwnPropertySymbols(y); S < h.length; S++)
        _.indexOf(h[S]) < 0 && Object.prototype.propertyIsEnumerable.call(y, h[S]) && (b[h[S]] = y[h[S]]);
    return b;
  };
  Object.defineProperty(hr, "__esModule", { value: true }), hr.parseFactorySchema = void 0;
  const n = dr, o = fr, c = it();
  function l(y, _, b) {
    var { value: h } = y, S = y.options, P = S === void 0 ? {} : S, { batch: A } = P, F = r(P, ["batch"]);
    return h instanceof c.TypeFactory ? A ? _ ? h.batchSync(A, F) : h.batch(A, F) : _ ? h.buildSync(F) : h.build(F) : h(b);
  }
  function f(y) {
    return e(this, void 0, void 0, function* () {
      const _ = {};
      for (const [b, h] of Object.entries(y)) {
        const S = (0, n.isPromise)(h) ? yield h : h;
        (0, n.isRecord)(S) ? Reflect.set(_, b, yield f(S)) : Reflect.set(_, b, S);
      }
      return _;
    });
  }
  function p(y, _, b, h = "") {
    const S = {};
    for (let [P, A] of Object.entries(y)) {
      if (A instanceof c.TypeFactory ? A = b ? A.buildSync() : A.build() : A instanceof c.Ref ? A = l(A, b, _) : (0, n.isIterator)(A) ? A = A.next().value : !(A instanceof c.DerivedValueProxy) && (0, n.isRecord)(A) && (A = p(A, _, b, P)), (0, n.isPromise)(A) && b)
        throw new Error(o.ERROR_MESSAGES.PROMISE_VALUE.replace(":key", h ? `${h}.${P}` : P));
      S[P] = A;
    }
    return b ? S : f(S);
  }
  return hr.parseFactorySchema = p, hr;
}
var Ze = {}, En;
function os() {
  if (En)
    return Ze;
  En = 1, Object.defineProperty(Ze, "__esModule", { value: true }), Ze.validateFactoryResult = Ze.validateFactorySchema = void 0;
  const e = dr, r = fr, n = it();
  function o(f, p, y = "") {
    const _ = [];
    for (const [b, h] of Object.entries(f))
      h instanceof p ? _.push(y ? `${y}.${b}` : b) : (0, e.isRecord)(h) && _.push(...o(h, p, b));
    return _;
  }
  function c(f) {
    const p = o(f, n.BuildArgProxy);
    if (p.length)
      throw new Error(r.ERROR_MESSAGES.MISSING_BUILD_ARGS.replace(":missingArgs", p.join(", ")));
    return f;
  }
  Ze.validateFactorySchema = c;
  function l(f) {
    const p = o(f, n.DerivedValueProxy);
    if (p.length)
      throw new Error(r.ERROR_MESSAGES.MISSING_DERIVED_PARAMETERS.replace(":missingValues", p.join(", ")));
    return f;
  }
  return Ze.validateFactoryResult = l, Ze;
}
var Sn;
function it() {
  if (Sn)
    return Fe;
  Sn = 1;
  var e = Re && Re.__awaiter || function(S, P, A, F) {
    function V(U) {
      return U instanceof A ? U : new A(function(k) {
        k(U);
      });
    }
    return new (A || (A = Promise))(function(U, k) {
      function Z(Q) {
        try {
          B(F.next(Q));
        } catch (ie) {
          k(ie);
        }
      }
      function te(Q) {
        try {
          B(F.throw(Q));
        } catch (ie) {
          k(ie);
        }
      }
      function B(Q) {
        Q.done ? U(Q.value) : V(Q.value).then(Z, te);
      }
      B((F = F.apply(S, P || [])).next());
    });
  };
  Object.defineProperty(Fe, "__esModule", { value: true }), Fe.TypeFactory = Fe.Ref = Fe.DerivedValueProxy = Fe.BuildArgProxy = void 0;
  const r = dr, n = fr, o = er, c = rr, l = ot, f = ns(), p = os();
  class y {
  }
  Fe.BuildArgProxy = y;
  class _ {
  }
  Fe.DerivedValueProxy = _;
  class b {
    constructor(P, A) {
      this.value = P, this.options = A;
    }
  }
  Fe.Ref = b;
  class h {
    constructor(P, A) {
      this.preBuild = (F, V) => {
        const U = this.counter;
        this.counter++;
        const k = typeof this.defaults == "function" ? this.defaults(U) : this.defaults, [Z, te = this.factory] = (0, l.parseOptions)(V, U);
        if (F) {
          if ((0, r.isPromise)(k))
            throw new Error(n.ERROR_MESSAGES.PROMISE_DEFAULTS);
          if ((0, r.isPromise)(Z))
            throw new Error(n.ERROR_MESSAGES.PROMISE_OVERRIDES);
        }
        return { defaults: k, overrides: Z, factory: te, iteration: U };
      }, this.build = (F) => e(this, void 0, void 0, function* () {
        const { defaults: V, overrides: U, factory: k, iteration: Z } = this.preBuild(false, F), te = yield this.performBuild(yield V, yield U, Z, false);
        return this.postBuild(false, k ? k(te, Z) : te);
      }), this.buildSync = (F) => {
        const { defaults: V, overrides: U, factory: k, iteration: Z } = this.preBuild(true, F), te = this.performBuild(V, U, Z, true);
        return this.postBuild(true, k ? k(te, Z) : te);
      }, this.defaults = P, this.factory = A, this.counter = 0;
    }
    resetCounter(P = 0) {
      this.counter = P;
    }
    postBuild(P, A) {
      if ((0, r.isPromise)(A)) {
        if (P)
          throw new Error(n.ERROR_MESSAGES.PROMISE_FACTORY);
        return A.then((F) => (0, p.validateFactoryResult)(F));
      }
      return (0, p.validateFactoryResult)(A);
    }
    performBuild(P, A, F, V) {
      const U = (0, p.validateFactorySchema)((0, c.merge)(P, A));
      return (0, f.parseFactorySchema)(U, F, V);
    }
    batch(P, A) {
      return e(this, void 0, void 0, function* () {
        return Promise.all(new Array(P).fill(A).map(this.build));
      });
    }
    batchSync(P, A) {
      return new Array(P).fill(A).map(this.buildSync);
    }
    static required() {
      return new y();
    }
    static derived() {
      return new _();
    }
    static use(P, A) {
      return new b(P, A);
    }
  }
  return Fe.TypeFactory = h, h.iterate = o.iterate, h.sample = o.sample, Fe;
}
var Pe = {};
const is = {}, as = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: is
}, Symbol.toStringTag, { value: "Module" })), ss = /* @__PURE__ */ Fn(as);
var Mo = Re && Re.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Pe, "__esModule", { value: true });
Pe.isSameStructure = Pe.mapKeyPaths = Pe.writeFixtureFile = Pe.readFileIfExists = Pe.parseFilePath = Pe.validateAbsolutePath = void 0;
const us = dr, Cr = Mo(ss), Zr = Mo(zn), Pr = fr, ls = rr;
function No(e) {
  if (!(e != null && e.trim()))
    throw new Error(Pr.ERROR_MESSAGES.MISSING_FILENAME);
  if (!Zr.default.isAbsolute(e))
    throw new Error(Pr.ERROR_MESSAGES.PATH_IS_NOT_ABSOLUTE);
}
Pe.validateAbsolutePath = No;
function cs(e) {
  No(e);
  let r = Zr.default.basename(e);
  const n = e.replace(r, "") + "__fixtures__/", o = Zr.default.extname(r);
  if (!o)
    r = r + ".json";
  else {
    if (o.toLowerCase() !== ".json")
      throw new Error(Pr.ERROR_MESSAGES.INVALID_EXTENSION.replace(":fileExtension", o));
    o !== ".json" && (r = r.replace(o, ".json"));
  }
  return {
    fixturesDir: n,
    fullPath: Zr.default.join(n, r)
  };
}
Pe.parseFilePath = cs;
function fs(e) {
  if (Cr.default.existsSync(e))
    try {
      const r = Cr.default.readFileSync(e, {
        encoding: "utf-8"
      });
      return JSON.parse(r);
    } catch (r) {
      throw new Error(Pr.ERROR_MESSAGES.FILE_READ.replace(":filePath", e).replace(":fileError", r.message));
    }
  return null;
}
Pe.readFileIfExists = fs;
function ds(e, { fixturesDir: r, fullPath: n }) {
  try {
    return Cr.default.existsSync(r) || Cr.default.mkdirSync(r), Cr.default.writeFileSync(n, JSON.stringify(e)), e;
  } catch (o) {
    throw new Error(Pr.ERROR_MESSAGES.FILE_WRITE.replace(":filePath", n).replace(":fileError", ": " + JSON.stringify(o)));
  }
}
Pe.writeFixtureFile = ds;
function Qr(e, r = "") {
  const n = [];
  for (let [o, c] of Object.entries(e)) {
    c !== void 0 && n.push(o);
    let l = r ? `${r}.${o}` : o;
    if (Array.isArray(c)) {
      let [f, p] = (0, ls.getValueFromNestedArray)(c, 1);
      for (c = f; p > 0; )
        p--, l += "[0]";
    }
    (0, us.isRecord)(c) ? n.push(...Qr(c, l)) : c !== void 0 && n.push(l);
  }
  return [...new Set(n)];
}
Pe.mapKeyPaths = Qr;
function ps(e, r) {
  return JSON.stringify(Qr(e).sort()) === JSON.stringify(Qr(r).sort());
}
Pe.isSameStructure = ps;
var Rn = Re && Re.__awaiter || function(e, r, n, o) {
  function c(l) {
    return l instanceof n ? l : new n(function(f) {
      f(l);
    });
  }
  return new (n || (n = Promise))(function(l, f) {
    function p(b) {
      try {
        _(o.next(b));
      } catch (h) {
        f(h);
      }
    }
    function y(b) {
      try {
        _(o.throw(b));
      } catch (h) {
        f(h);
      }
    }
    function _(b) {
      b.done ? l(b.value) : c(b.value).then(p, y);
    }
    _((o = o.apply(e, r || [])).next());
  });
}, vs = Re && Re.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(et, "__esModule", { value: true });
et.FixtureFactory = void 0;
const ys = vs(zn), ms = it(), wr = Pe;
class gs extends ms.TypeFactory {
  constructor(r, n, o) {
    super(r, n), o != null && o.trim() && ((0, wr.validateAbsolutePath)(o), this.defaultPath = o);
  }
  getOrCreateFixture(r, n) {
    const o = (0, wr.parseFilePath)(this.defaultPath ? ys.default.join(this.defaultPath, r) : r), c = (0, wr.readFileIfExists)(o.fullPath);
    return c && (0, wr.isSameStructure)(n, c) ? c : (0, wr.writeFixtureFile)(n, o);
  }
  fixture(r, n) {
    return Rn(this, void 0, void 0, function* () {
      const o = yield this.build(n);
      return this.getOrCreateFixture(r, o);
    });
  }
  fixtureSync(r, n) {
    const o = this.buildSync(n);
    return this.getOrCreateFixture(r, o);
  }
  fixtureBatch(r, n, o) {
    return Rn(this, void 0, void 0, function* () {
      const c = yield this.batch(n, o);
      return this.getOrCreateFixture(r, c);
    });
  }
  fixtureBatchSync(r, n, o) {
    const c = this.batchSync(n, o);
    return this.getOrCreateFixture(r, c);
  }
}
et.FixtureFactory = gs;
var $o = {};
Object.defineProperty($o, "__esModule", { value: true });
(function(e) {
  var r = Re && Re.__createBinding || (Object.create ? function(c, l, f, p) {
    p === void 0 && (p = f);
    var y = Object.getOwnPropertyDescriptor(l, f);
    (!y || ("get" in y ? !l.__esModule : y.writable || y.configurable)) && (y = { enumerable: true, get: function() {
      return l[f];
    } }), Object.defineProperty(c, p, y);
  } : function(c, l, f, p) {
    p === void 0 && (p = f), c[p] = l[f];
  }), n = Re && Re.__exportStar || function(c, l) {
    for (var f in c)
      f !== "default" && !Object.prototype.hasOwnProperty.call(l, f) && r(l, c, f);
  };
  Object.defineProperty(e, "__esModule", { value: true }), e.ERROR_MESSAGES = void 0;
  var o = fr;
  Object.defineProperty(e, "ERROR_MESSAGES", { enumerable: true, get: function() {
    return o.ERROR_MESSAGES;
  } }), n(et, e), n(er, e), n(it(), e), n($o, e);
})($n);
const On = /* @__PURE__ */ Symbol.for("@effect/data/Global/globalStoreId");
On in globalThis || (globalThis[On] = /* @__PURE__ */ new Map());
function bs(e) {
  return new $n.TypeFactory(e);
}
function Vo(e) {
  return (r) => typeof r == e;
}
const Es = Vo("function");
function Lo(e) {
  return Es(e);
}
function ge(e, r) {
  const n = {
    meta: () => r,
    version: () => `${Date.now()}`,
    generate: (o) => bs(
      () => ({ ...o })
    ).buildSync(),
    redefine: (o, c) => ge(o, c),
    closure: () => `${e}`,
    value: (...o) => {
      if (Lo(e))
        try {
          return e(...o);
        } catch (c) {
          return c;
        }
      else
        return e;
    },
    log: () => {
      console.log(`[Definition]: ${n.meta()}
                   [Closure]: ${n.closure()}
                   [Value]: ${n.value()}
                   [Version]: ${n.version()}`);
    }
  };
  return n;
}
function Uo(e) {
  var r, n, o = "";
  if (typeof e == "string" || typeof e == "number")
    o += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (r = 0; r < e.length; r++)
        e[r] && (n = Uo(e[r])) && (o && (o += " "), o += n);
    else
      for (r in e)
        e[r] && (o && (o += " "), o += r);
  return o;
}
function Os() {
  for (var e, r, n = 0, o = ""; n < arguments.length; )
    (e = arguments[n++]) && (r = Uo(e)) && (o && (o += " "), o += r);
  return o;
}
const Cn = {
  default: Os
};
function zs(e) {
  const r = e ? Cn[e] : Cn.default;
  return tr(
    r
  );
}
function Ts(e, r) {
  const n = {
    ...r,
    type: "component",
    version: Math.round(Date.now() / 1e6) + 1,
    primary: "view",
    hierachy: "secondary"
  };
  return ge(
    e,
    n
  );
}
var kt = { exports: {} }, Er = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var An;
function js() {
  if (An)
    return Er;
  An = 1;
  var e = Dt, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, c = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: true, ref: true, __self: true, __source: true };
  function f(p, y, _) {
    var b, h = {}, S = null, P = null;
    _ !== void 0 && (S = "" + _), y.key !== void 0 && (S = "" + y.key), y.ref !== void 0 && (P = y.ref);
    for (b in y)
      o.call(y, b) && !l.hasOwnProperty(b) && (h[b] = y[b]);
    if (p && p.defaultProps)
      for (b in y = p.defaultProps, y)
        h[b] === void 0 && (h[b] = y[b]);
    return { $$typeof: r, type: p, key: S, ref: P, props: h, _owner: c.current };
  }
  return Er.Fragment = n, Er.jsx = f, Er.jsxs = f, Er;
}
kt.exports = js();
var Ar = kt.exports;
function ks({
  views: e,
  presets: r
}) {
  const n = {
    type: "variadicComponent",
    version: Math.round(Date.now() / 1e6) + 1,
    primary: "view",
    hierachy: "tertiary"
  }, o = e.default.container, c = e.default.component, { sx: l } = r.default;
  return Ts(
    (...p) => /* @__PURE__ */ Ar.jsx(o, { sx: l, children: /* @__PURE__ */ Ar.jsx(c, { ...p }) }),
    n
  );
}
ks({
  views: {
    default: {
      container: ({ children: e }) => /* @__PURE__ */ Ar.jsx("div", { children: e }),
      component: ({ props: e }) => /* @__PURE__ */ Ar.jsx(Ar.Fragment, {})
    }
  },
  presets: {
    default: {
      sx: {
        borders: {
          base: {
            color: "red"
          }
        }
      }
    }
  }
});
const SPACE_CHARACTER = " ";
const serializeClasses = zs();
function defineStylizer({
  preset,
  overrides
}) {
  const BASE = "base";
  const VOID_STRING = "";
  const result = serializeClasses.value(
    Object.entries(preset).map(([directive, stylizer]) => {
      return `${directive == BASE ? VOID_STRING : `${directive}:`}${stylizer(
        overrides
      )}`;
    })
  );
  return ge(result);
}
function defineStyleSet(params) {
  const result = ge(() => {
    return serializeClasses.value(
      Object.entries(params.sxMappings).map(([key, stylizer]) => {
        return `${stylizer(
          params[key]
        ).value()}`;
      })
    );
  });
  return result;
}
const TesseractScreenReaderPreset = {
  default: {
    base: () => "sr-only"
  },
  disabled: {
    base: () => "not-sr-only"
  },
  custom: {
    base: (overrides) => `${overrides.className}`
  }
};
const TesseractAccessibilityPreset = {
  screenReader: TesseractScreenReaderPreset
};
function accessibility({
  screenReader: screenReader2
}) {
  return defineStyleSet({
    ...TesseractAccessibilityPreset
  });
}
function screenReader({ preset, sx }) {
  const presetLoad = TesseractScreenReaderPreset;
  return defineStylizer({
    preset: presetLoad[preset],
    overrides: sx
  });
}
const TesseractBackgroundColorPreset = {
  default: {
    base: () => "bg-transparent"
  },
  black: {
    base: () => "bg-black"
  },
  white: {
    base: () => "bg-white"
  },
  red: {
    base: (overrides) => `bg-red-${overrides.intensity * 100}`
  },
  orange: {
    base: (overrides) => `bg-red-${overrides.intensity * 100}`
  },
  yellow: {
    base: (overrides) => `bg-yellow-${overrides.intensity * 100}`
  },
  green: {
    base: (overrides) => `bg-green-${overrides.intensity * 100}`
  },
  blue: {
    base: (overrides) => `bg-blue-${overrides.intensity * 100}`
  },
  indigo: {
    base: (overrides) => `bg-indigo-${overrides.intensity * 100}`
  },
  violet: {
    base: (overrides) => `bg-violet-${overrides.intensity * 100}`
  },
  gray: {
    base: (overrides) => `bg-gray-${overrides.intensity * 100}`
  }
};
function backgroundColor({
  preset,
  sx
}) {
  return defineStylizer({
    preset: TesseractBackgroundColorPreset[preset],
    overrides: sx
  });
}
backgroundColor({
  preset: "green",
  sx: {
    intensity: 9
  }
});
function background(params) {
  const backgroundsSxMap = {
    backgroundColor
  };
  return ge(() => {
    return Object.entries(backgroundsSxMap).map(([key, stylizer]) => {
      return `${stylizer(
        params[key]
      ).value()}`;
    }).join(" ");
  });
}
export { SPACE_CHARACTER, TesseractAccessibilityPreset, TesseractScreenReaderPreset, accessibility, background, backgroundColor, defineStyleSet, defineStylizer, screenReader, serializeClasses };
//# sourceMappingURL=index.es.js.map
