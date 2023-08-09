import { createElement } from "react";
var n = function(t2, s, r, e) {
  var u;
  s[0] = 0;
  for (var h2 = 1; h2 < s.length; h2++) {
    var p = s[h2++], a = s[h2] ? (s[0] |= p ? 1 : 2, r[s[h2++]]) : s[++h2];
    3 === p ? e[0] = a : 4 === p ? e[1] = Object.assign(e[1] || {}, a) : 5 === p ? (e[1] = e[1] || {})[s[++h2]] = a : 6 === p ? e[1][s[++h2]] += a + "" : p ? (u = t2.apply(a, n(t2, a, r, ["", null])), e.push(u), a[0] ? s[0] |= 2 : (s[h2 - 2] = 0, s[h2] = u)) : e.push(a);
  }
  return e;
}, t = /* @__PURE__ */ new Map();
function m(s) {
  var r = t.get(this);
  return r || (r = /* @__PURE__ */ new Map(), t.set(this, r)), (r = n(this, r.get(s) || (r.set(s, r = function(n2) {
    for (var t2, s2, r2 = 1, e = "", u = "", h2 = [0], p = function(n3) {
      1 === r2 && (n3 || (e = e.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? h2.push(0, n3, e) : 3 === r2 && (n3 || e) ? (h2.push(3, n3, e), r2 = 2) : 2 === r2 && "..." === e && n3 ? h2.push(4, n3, 0) : 2 === r2 && e && !n3 ? h2.push(5, 0, true, e) : r2 >= 5 && ((e || !n3 && 5 === r2) && (h2.push(r2, 0, e, s2), r2 = 6), n3 && (h2.push(r2, n3, 0, s2), r2 = 6)), e = "";
    }, a = 0; a < n2.length; a++) {
      a && (1 === r2 && p(), p(a));
      for (var l = 0; l < n2[a].length; l++)
        t2 = n2[a][l], 1 === r2 ? "<" === t2 ? (p(), h2 = [h2], r2 = 3) : e += t2 : 4 === r2 ? "--" === e && ">" === t2 ? (r2 = 1, e = "") : e = t2 + e[0] : u ? t2 === u ? u = "" : e += t2 : '"' === t2 || "'" === t2 ? u = t2 : ">" === t2 ? (p(), r2 = 1) : r2 && ("=" === t2 ? (r2 = 5, s2 = e, e = "") : "/" === t2 && (r2 < 5 || ">" === n2[a][l + 1]) ? (p(), 3 === r2 && (h2 = h2[0]), r2 = h2, (h2 = h2[0]).push(2, 0, r2), r2 = 0) : " " === t2 || "	" === t2 || "\n" === t2 || "\r" === t2 ? (p(), r2 = 2) : e += t2), 3 === r2 && "!--" === e && (r2 = 4, h2 = h2[0]);
    }
    return p(), h2;
  }(s)), r), arguments, [])).length > 1 ? r : r[0];
}
var o = m.bind(createElement);
var B = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ce(e) {
  if (e.__esModule)
    return e;
  var t2 = e.default;
  if (typeof t2 == "function") {
    var r = function n2() {
      if (this instanceof n2) {
        var o2 = [null];
        o2.push.apply(o2, arguments);
        var a = Function.bind.apply(t2, o2);
        return new a();
      }
      return t2.apply(this, arguments);
    };
    r.prototype = t2.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: true }), Object.keys(e).forEach(function(n2) {
    var o2 = Object.getOwnPropertyDescriptor(e, n2);
    Object.defineProperty(r, n2, o2.get ? o2 : {
      enumerable: true,
      get: function() {
        return e[n2];
      }
    });
  }), r;
}
var qt = {}, K = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.ERROR_MESSAGES = void 0, function(t2) {
    t2.FILE_READ = `[interface-forge] error reading file :filePath

:fileError`, t2.FILE_WRITE = `[interface-forge] error writing file :filePath

:fileError`, t2.INVALID_EXTENSION = "[interface-forge] file extension is not supported :fileExtension", t2.MISSING_BUILD_ARGS = "[interface-forge] missing required build arguments: :missingArgs", t2.MISSING_DERIVED_PARAMETERS = "[interface-forge] missing derived parameters: :missingValues", t2.MISSING_FILENAME = "[interface-forge] missing filename", t2.PATH_IS_NOT_ABSOLUTE = "[interface-forge] fixture file path is not absolute", t2.PROMISE_DEFAULTS = "[interface-forge] buildSync does not support Promise defaults", t2.PROMISE_FACTORY = "[interface-forge] buildSync does not support factory functions returning Promises", t2.PROMISE_OVERRIDES = "[interface-forge] buildSync does not support Promise overrides", t2.PROMISE_VALUE = "[interface-forge] Promise value encountered during buildSync for key :key";
  }(e.ERROR_MESSAGES || (e.ERROR_MESSAGES = {}));
})(K);
var le = {}, re = { exports: {} }, Ge = {}, Ht = function(t2) {
  return t2 && typeof t2 == "object" && typeof t2.copy == "function" && typeof t2.fill == "function" && typeof t2.readUInt8 == "function";
}, we = { exports: {} };
typeof Object.create == "function" ? we.exports = function(t2, r) {
  t2.super_ = r, t2.prototype = Object.create(r.prototype, {
    constructor: {
      value: t2,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
} : we.exports = function(t2, r) {
  t2.super_ = r;
  var n2 = function() {
  };
  n2.prototype = r.prototype, t2.prototype = new n2(), t2.prototype.constructor = t2;
};
var Kt = we.exports;
(function(e) {
  var t2 = /%[sdj%]/g;
  e.format = function(i) {
    if (!N(i)) {
      for (var s = [], u = 0; u < arguments.length; u++)
        s.push(o2(arguments[u]));
      return s.join(" ");
    }
    for (var u = 1, w = arguments, V = w.length, E = String(i).replace(t2, function(I) {
      if (I === "%%")
        return "%";
      if (u >= V)
        return I;
      switch (I) {
        case "%s":
          return String(w[u++]);
        case "%d":
          return Number(w[u++]);
        case "%j":
          try {
            return JSON.stringify(w[u++]);
          } catch {
            return "[Circular]";
          }
        default:
          return I;
      }
    }), _ = w[u]; u < V; _ = w[++u])
      P(_) || !k(_) ? E += " " + _ : E += " " + o2(_);
    return E;
  }, e.deprecate = function(i, s) {
    if (x(B.process))
      return function() {
        return e.deprecate(i, s).apply(this, arguments);
      };
    if (process.noDeprecation === true)
      return i;
    var u = false;
    function w() {
      if (!u) {
        if (process.throwDeprecation)
          throw new Error(s);
        process.traceDeprecation ? console.trace(s) : console.error(s), u = true;
      }
      return i.apply(this, arguments);
    }
    return w;
  };
  var r = {}, n2;
  e.debuglog = function(i) {
    if (x(n2) && (n2 = {}.NODE_DEBUG || ""), i = i.toUpperCase(), !r[i])
      if (new RegExp("\\b" + i + "\\b", "i").test(n2)) {
        var s = process.pid;
        r[i] = function() {
          var u = e.format.apply(e, arguments);
          console.error("%s %d: %s", i, s, u);
        };
      } else
        r[i] = function() {
        };
    return r[i];
  };
  function o2(i, s) {
    var u = {
      seen: [],
      stylize: c
    };
    return arguments.length >= 3 && (u.depth = arguments[2]), arguments.length >= 4 && (u.colors = arguments[3]), S(s) ? u.showHidden = s : s && e._extend(u, s), x(u.showHidden) && (u.showHidden = false), x(u.depth) && (u.depth = 2), x(u.colors) && (u.colors = false), x(u.customInspect) && (u.customInspect = true), u.colors && (u.stylize = a), m2(u, i, u.depth);
  }
  e.inspect = o2, o2.colors = {
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
  }, o2.styles = {
    special: "cyan",
    number: "yellow",
    boolean: "yellow",
    undefined: "grey",
    null: "bold",
    string: "green",
    date: "magenta",
    regexp: "red"
  };
  function a(i, s) {
    var u = o2.styles[s];
    return u ? "\x1B[" + o2.colors[u][0] + "m" + i + "\x1B[" + o2.colors[u][1] + "m" : i;
  }
  function c(i, s) {
    return i;
  }
  function f(i) {
    var s = {};
    return i.forEach(function(u, w) {
      s[u] = true;
    }), s;
  }
  function m2(i, s, u) {
    if (i.customInspect && s && ae(s.inspect) && s.inspect !== e.inspect && !(s.constructor && s.constructor.prototype === s)) {
      var w = s.inspect(u, i);
      return N(w) || (w = m2(i, w, u)), w;
    }
    var V = p(i, s);
    if (V)
      return V;
    var E = Object.keys(s), _ = f(E);
    if (i.showHidden && (E = Object.getOwnPropertyNames(s)), se(s) && (E.indexOf("message") >= 0 || E.indexOf("description") >= 0))
      return l(s);
    if (E.length === 0) {
      if (ae(s)) {
        var I = s.name ? ": " + s.name : "";
        return i.stylize("[Function" + I + "]", "special");
      }
      if (G(s))
        return i.stylize(RegExp.prototype.toString.call(s), "regexp");
      if (ge(s))
        return i.stylize(Date.prototype.toString.call(s), "date");
      if (se(s))
        return l(s);
    }
    var M = "", W = false, ue = ["{", "}"];
    if (d(s) && (W = true, ue = ["[", "]"]), ae(s)) {
      var Lt = s.name ? ": " + s.name : "";
      M = " [Function" + Lt + "]";
    }
    if (G(s) && (M = " " + RegExp.prototype.toString.call(s)), ge(s) && (M = " " + Date.prototype.toUTCString.call(s)), se(s) && (M = " " + l(s)), E.length === 0 && (!W || s.length == 0))
      return ue[0] + M + ue[1];
    if (u < 0)
      return G(s) ? i.stylize(RegExp.prototype.toString.call(s), "regexp") : i.stylize("[Object]", "special");
    i.seen.push(s);
    var _e;
    return W ? _e = y(i, s, u, _, E) : _e = E.map(function(kt) {
      return g(i, s, u, _, kt, W);
    }), i.seen.pop(), b(_e, M, ue);
  }
  function p(i, s) {
    if (x(s))
      return i.stylize("undefined", "undefined");
    if (N(s)) {
      var u = "'" + JSON.stringify(s).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
      return i.stylize(u, "string");
    }
    if (A(s))
      return i.stylize("" + s, "number");
    if (S(s))
      return i.stylize("" + s, "boolean");
    if (P(s))
      return i.stylize("null", "null");
  }
  function l(i) {
    return "[" + Error.prototype.toString.call(i) + "]";
  }
  function y(i, s, u, w, V) {
    for (var E = [], _ = 0, I = s.length; _ < I; ++_)
      Fe(s, String(_)) ? E.push(g(
        i,
        s,
        u,
        w,
        String(_),
        true
      )) : E.push("");
    return V.forEach(function(M) {
      M.match(/^\d+$/) || E.push(g(
        i,
        s,
        u,
        w,
        M,
        true
      ));
    }), E;
  }
  function g(i, s, u, w, V, E) {
    var _, I, M;
    if (M = Object.getOwnPropertyDescriptor(s, V) || { value: s[V] }, M.get ? M.set ? I = i.stylize("[Getter/Setter]", "special") : I = i.stylize("[Getter]", "special") : M.set && (I = i.stylize("[Setter]", "special")), Fe(w, V) || (_ = "[" + V + "]"), I || (i.seen.indexOf(M.value) < 0 ? (P(u) ? I = m2(i, M.value, null) : I = m2(i, M.value, u - 1), I.indexOf(`
`) > -1 && (E ? I = I.split(`
`).map(function(W) {
      return "  " + W;
    }).join(`
`).substr(2) : I = `
` + I.split(`
`).map(function(W) {
      return "   " + W;
    }).join(`
`))) : I = i.stylize("[Circular]", "special")), x(_)) {
      if (E && V.match(/^\d+$/))
        return I;
      _ = JSON.stringify("" + V), _.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (_ = _.substr(1, _.length - 2), _ = i.stylize(_, "name")) : (_ = _.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), _ = i.stylize(_, "string"));
    }
    return _ + ": " + I;
  }
  function b(i, s, u) {
    var w = i.reduce(function(V, E) {
      return E.indexOf(`
`) >= 0, V + E.replace(/\u001b\[\d\d?m/g, "").length + 1;
    }, 0);
    return w > 60 ? u[0] + (s === "" ? "" : s + `
 `) + " " + i.join(`,
  `) + " " + u[1] : u[0] + s + " " + i.join(", ") + " " + u[1];
  }
  function d(i) {
    return Array.isArray(i);
  }
  e.isArray = d;
  function S(i) {
    return typeof i == "boolean";
  }
  e.isBoolean = S;
  function P(i) {
    return i === null;
  }
  e.isNull = P;
  function j(i) {
    return i == null;
  }
  e.isNullOrUndefined = j;
  function A(i) {
    return typeof i == "number";
  }
  e.isNumber = A;
  function N(i) {
    return typeof i == "string";
  }
  e.isString = N;
  function z(i) {
    return typeof i == "symbol";
  }
  e.isSymbol = z;
  function x(i) {
    return i === void 0;
  }
  e.isUndefined = x;
  function G(i) {
    return k(i) && be(i) === "[object RegExp]";
  }
  e.isRegExp = G;
  function k(i) {
    return typeof i == "object" && i !== null;
  }
  e.isObject = k;
  function ge(i) {
    return k(i) && be(i) === "[object Date]";
  }
  e.isDate = ge;
  function se(i) {
    return k(i) && (be(i) === "[object Error]" || i instanceof Error);
  }
  e.isError = se;
  function ae(i) {
    return typeof i == "function";
  }
  e.isFunction = ae;
  function Gt(i) {
    return i === null || typeof i == "boolean" || typeof i == "number" || typeof i == "string" || typeof i == "symbol" || typeof i > "u";
  }
  e.isPrimitive = Gt, e.isBuffer = Ht;
  function be(i) {
    return Object.prototype.toString.call(i);
  }
  function Se(i) {
    return i < 10 ? "0" + i.toString(10) : i.toString(10);
  }
  var zt = [
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
  function $t() {
    var i = /* @__PURE__ */ new Date(), s = [
      Se(i.getHours()),
      Se(i.getMinutes()),
      Se(i.getSeconds())
    ].join(":");
    return [i.getDate(), zt[i.getMonth()], s].join(" ");
  }
  e.log = function() {
    console.log("%s - %s", $t(), e.format.apply(e, arguments));
  }, e.inherits = Kt, e._extend = function(i, s) {
    if (!s || !k(s))
      return i;
    for (var u = Object.keys(s), w = u.length; w--; )
      i[u[w]] = s[u[w]];
    return i;
  };
  function Fe(i, s) {
    return Object.prototype.hasOwnProperty.call(i, s);
  }
})(Ge);
var Zt = process.platform === "win32", L = Ge;
function ye(e, t2) {
  for (var r = [], n2 = 0; n2 < e.length; n2++) {
    var o2 = e[n2];
    !o2 || o2 === "." || (o2 === ".." ? r.length && r[r.length - 1] !== ".." ? r.pop() : t2 && r.push("..") : r.push(o2));
  }
  return r;
}
function ee(e) {
  for (var t2 = e.length - 1, r = 0; r <= t2 && !e[r]; r++)
    ;
  for (var n2 = t2; n2 >= 0 && !e[n2]; n2--)
    ;
  return r === 0 && n2 === t2 ? e : r > n2 ? [] : e.slice(r, n2 + 1);
}
var ze = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/, Xt = /^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/, F = {};
function de(e) {
  var t2 = ze.exec(e), r = (t2[1] || "") + (t2[2] || ""), n2 = t2[3] || "", o2 = Xt.exec(n2), a = o2[1], c = o2[2], f = o2[3];
  return [r, a, c, f];
}
function Ae(e) {
  var t2 = ze.exec(e), r = t2[1] || "", n2 = !!r && r[1] !== ":";
  return {
    device: r,
    isUnc: n2,
    isAbsolute: n2 || !!t2[2],
    tail: t2[3]
  };
}
function $e(e) {
  return "\\\\" + e.replace(/^[\\\/]+/, "").replace(/[\\\/]+/g, "\\");
}
F.resolve = function() {
  for (var e = "", t2 = "", r = false, n2 = arguments.length - 1; n2 >= -1; n2--) {
    var o2;
    if (n2 >= 0 ? o2 = arguments[n2] : e ? (o2 = process.env["=" + e], (!o2 || o2.substr(0, 3).toLowerCase() !== e.toLowerCase() + "\\") && (o2 = e + "\\")) : o2 = process.cwd(), L.isString(o2)) {
      if (!o2)
        continue;
    } else
      throw new TypeError("Arguments to path.resolve must be strings");
    var a = Ae(o2), c = a.device, f = a.isUnc, m2 = a.isAbsolute, p = a.tail;
    if (!(c && e && c.toLowerCase() !== e.toLowerCase()) && (e || (e = c), r || (t2 = p + "\\" + t2, r = m2), e && r))
      break;
  }
  return f && (e = $e(e)), t2 = ye(
    t2.split(/[\\\/]+/),
    !r
  ).join("\\"), e + (r ? "\\" : "") + t2 || ".";
};
F.normalize = function(e) {
  var t2 = Ae(e), r = t2.device, n2 = t2.isUnc, o2 = t2.isAbsolute, a = t2.tail, c = /[\\\/]$/.test(a);
  return a = ye(a.split(/[\\\/]+/), !o2).join("\\"), !a && !o2 && (a = "."), a && c && (a += "\\"), n2 && (r = $e(r)), r + (o2 ? "\\" : "") + a;
};
F.isAbsolute = function(e) {
  return Ae(e).isAbsolute;
};
F.join = function() {
  for (var e = [], t2 = 0; t2 < arguments.length; t2++) {
    var r = arguments[t2];
    if (!L.isString(r))
      throw new TypeError("Arguments to path.join must be strings");
    r && e.push(r);
  }
  var n2 = e.join("\\");
  return /^[\\\/]{2}[^\\\/]/.test(e[0]) || (n2 = n2.replace(/^[\\\/]{2,}/, "\\")), F.normalize(n2);
};
F.relative = function(e, t2) {
  e = F.resolve(e), t2 = F.resolve(t2);
  for (var r = e.toLowerCase(), n2 = t2.toLowerCase(), o2 = ee(t2.split("\\")), a = ee(r.split("\\")), c = ee(n2.split("\\")), f = Math.min(a.length, c.length), m2 = f, p = 0; p < f; p++)
    if (a[p] !== c[p]) {
      m2 = p;
      break;
    }
  if (m2 == 0)
    return t2;
  for (var l = [], p = m2; p < a.length; p++)
    l.push("..");
  return l = l.concat(o2.slice(m2)), l.join("\\");
};
F._makeLong = function(e) {
  if (!L.isString(e))
    return e;
  if (!e)
    return "";
  var t2 = F.resolve(e);
  return /^[a-zA-Z]\:\\/.test(t2) ? "\\\\?\\" + t2 : /^\\\\[^?.]/.test(t2) ? "\\\\?\\UNC\\" + t2.substring(2) : e;
};
F.dirname = function(e) {
  var t2 = de(e), r = t2[0], n2 = t2[1];
  return !r && !n2 ? "." : (n2 && (n2 = n2.substr(0, n2.length - 1)), r + n2);
};
F.basename = function(e, t2) {
  var r = de(e)[2];
  return t2 && r.substr(-1 * t2.length) === t2 && (r = r.substr(0, r.length - t2.length)), r;
};
F.extname = function(e) {
  return de(e)[3];
};
F.format = function(e) {
  if (!L.isObject(e))
    throw new TypeError(
      "Parameter 'pathObject' must be an object, not " + typeof e
    );
  var t2 = e.root || "";
  if (!L.isString(t2))
    throw new TypeError(
      "'pathObject.root' must be a string or undefined, not " + typeof e.root
    );
  var r = e.dir, n2 = e.base || "";
  return r ? r[r.length - 1] === F.sep ? r + n2 : r + F.sep + n2 : n2;
};
F.parse = function(e) {
  if (!L.isString(e))
    throw new TypeError(
      "Parameter 'pathString' must be a string, not " + typeof e
    );
  var t2 = de(e);
  if (!t2 || t2.length !== 4)
    throw new TypeError("Invalid path '" + e + "'");
  return {
    root: t2[0],
    dir: t2[0] + t2[1].slice(0, -1),
    base: t2[2],
    ext: t2[3],
    name: t2[2].slice(0, t2[2].length - t2[3].length)
  };
};
F.sep = "\\";
F.delimiter = ";";
var Yt = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/, D = {};
function pe(e) {
  return Yt.exec(e).slice(1);
}
D.resolve = function() {
  for (var e = "", t2 = false, r = arguments.length - 1; r >= -1 && !t2; r--) {
    var n2 = r >= 0 ? arguments[r] : process.cwd();
    if (L.isString(n2)) {
      if (!n2)
        continue;
    } else
      throw new TypeError("Arguments to path.resolve must be strings");
    e = n2 + "/" + e, t2 = n2[0] === "/";
  }
  return e = ye(
    e.split("/"),
    !t2
  ).join("/"), (t2 ? "/" : "") + e || ".";
};
D.normalize = function(e) {
  var t2 = D.isAbsolute(e), r = e && e[e.length - 1] === "/";
  return e = ye(e.split("/"), !t2).join("/"), !e && !t2 && (e = "."), e && r && (e += "/"), (t2 ? "/" : "") + e;
};
D.isAbsolute = function(e) {
  return e.charAt(0) === "/";
};
D.join = function() {
  for (var e = "", t2 = 0; t2 < arguments.length; t2++) {
    var r = arguments[t2];
    if (!L.isString(r))
      throw new TypeError("Arguments to path.join must be strings");
    r && (e ? e += "/" + r : e += r);
  }
  return D.normalize(e);
};
D.relative = function(e, t2) {
  e = D.resolve(e).substr(1), t2 = D.resolve(t2).substr(1);
  for (var r = ee(e.split("/")), n2 = ee(t2.split("/")), o2 = Math.min(r.length, n2.length), a = o2, c = 0; c < o2; c++)
    if (r[c] !== n2[c]) {
      a = c;
      break;
    }
  for (var f = [], c = a; c < r.length; c++)
    f.push("..");
  return f = f.concat(n2.slice(a)), f.join("/");
};
D._makeLong = function(e) {
  return e;
};
D.dirname = function(e) {
  var t2 = pe(e), r = t2[0], n2 = t2[1];
  return !r && !n2 ? "." : (n2 && (n2 = n2.substr(0, n2.length - 1)), r + n2);
};
D.basename = function(e, t2) {
  var r = pe(e)[2];
  return t2 && r.substr(-1 * t2.length) === t2 && (r = r.substr(0, r.length - t2.length)), r;
};
D.extname = function(e) {
  return pe(e)[3];
};
D.format = function(e) {
  if (!L.isObject(e))
    throw new TypeError(
      "Parameter 'pathObject' must be an object, not " + typeof e
    );
  var t2 = e.root || "";
  if (!L.isString(t2))
    throw new TypeError(
      "'pathObject.root' must be a string or undefined, not " + typeof e.root
    );
  var r = e.dir ? e.dir + D.sep : "", n2 = e.base || "";
  return r + n2;
};
D.parse = function(e) {
  if (!L.isString(e))
    throw new TypeError(
      "Parameter 'pathString' must be a string, not " + typeof e
    );
  var t2 = pe(e);
  if (!t2 || t2.length !== 4)
    throw new TypeError("Invalid path '" + e + "'");
  return t2[1] = t2[1] || "", t2[2] = t2[2] || "", t2[3] = t2[3] || "", {
    root: t2[0],
    dir: t2[0] + t2[1].slice(0, -1),
    base: t2[2],
    ext: t2[3],
    name: t2[2].slice(0, t2[2].length - t2[3].length)
  };
};
D.sep = "/";
D.delimiter = ":";
Zt ? re.exports = F : re.exports = D;
re.exports.posix = D;
re.exports.win32 = F;
var Le = re.exports, $ = {};
const T = (e) => Object.prototype.toString.call(e);
function v(e, t2) {
  return t2 ? (r) => e(r, t2) : (r) => e(r);
}
function h(e) {
  return (t2, r) => {
    if (!e(t2, r))
      throw new TypeError(r == null ? void 0 : r.message);
  };
}
function Ee(...e) {
  return function(t2, ...r) {
    for (const n2 of e)
      if (n2(t2, ...r))
        return true;
    return false;
  };
}
const O = v((e) => typeof e == "object" && e !== null), Ie = v((e) => O(e) && (T(e) === "[object ArrayBuffer]" || e instanceof ArrayBuffer)), Oe = v((e) => O(e) && (T(e) === "[object SharedArrayBuffer]" || e instanceof SharedArrayBuffer)), ke = Ee(Ie, Oe), Qt = h(ke);
function We(e, t2) {
  return v((r) => Array.isArray(r) && (!(t2 != null && t2.valueValidator) || r.every(t2.valueValidator)))(e);
}
function er(e, t2) {
  return h(We)(e, t2);
}
const tr = h(Ie);
function Je(e) {
  return v((t2) => typeof t2 == "function" && T(t2) === "[object AsyncFunction]")(e);
}
function rr(e, t2) {
  return h(Je)(e, t2);
}
function qe(e) {
  return v((t2) => O(t2) && T(t2) === "[object AsyncGenerator]")(e);
}
function nr(e, t2) {
  return h(qe)(e, t2);
}
function He(e) {
  return v((t2) => typeof t2 == "function" && T(t2) === "[object AsyncGeneratorFunction]")(e);
}
function ir(e, t2) {
  return h(He)(e, t2);
}
function Ke(e) {
  return v((t2) => O(t2) && typeof Reflect.get(t2, Symbol.asyncIterator) == "function")(e);
}
function or(e, t2) {
  return h(Ke)(e, t2);
}
const Ze = v((e) => typeof e == "bigint"), sr = h(Ze), Xe = v((e) => typeof e == "boolean"), ar = h(Xe), Ye = v((e) => O(e) && (T(e) === "[object Boolean]" || e instanceof Boolean)), ur = h(Ye), Qe = v((e) => typeof Buffer < "u" && e instanceof Buffer), cr = h(Qe), et = v((e) => O(e) && (T(e) === "[object DataView]" || e instanceof DataView)), fr = h(et), tt = v((e) => O(e) && (T(e) === "[object Date]" || e instanceof Date)), lr = h(tt), ie = v((e) => e === void 0);
function yr(e, t2) {
  if (ie(e))
    throw TypeError(t2 == null ? void 0 : t2.message);
}
function rt(e) {
  return v((t2) => O(t2) && (T(t2) === "[object Error]" || t2 instanceof Error))(e);
}
function dr(e, t2) {
  return h(rt)(e, t2);
}
function nt(e) {
  return v((t2) => typeof t2 == "function" && T(t2) === "[object Function]")(e);
}
function pr(e, t2) {
  return h(nt)(e, t2);
}
function it(e) {
  return v((t2) => O(t2) && T(t2) === "[object Generator]")(e);
}
function mr(e, t2) {
  return h(it)(e, t2);
}
function ot(e) {
  return v((t2) => typeof t2 == "function" && T(t2) === "[object GeneratorFunction]")(e);
}
function hr(e, t2) {
  return h(ot)(e, t2);
}
const je = v((e) => typeof e == "string");
function st(e) {
  return v((t2) => O(t2) && typeof Reflect.get(t2, Symbol.iterator) == "function" || je(t2))(e);
}
function vr(e, t2) {
  return h(st)(e, t2);
}
function at(e) {
  return v((t2) => O(t2) && typeof Reflect.get(t2, "next") == "function")(e);
}
function gr(e, t2) {
  return h(at)(e, t2);
}
function ut(e, t2) {
  return v((r) => (r instanceof Map || O(r) && T(r) === "[object Map]") && (!(t2 != null && t2.valueValidator) || [...r.values()].every(t2.valueValidator)) && (!(t2 != null && t2.keyValidator) || [...r.keys()].every(t2.keyValidator)))(e);
}
function br(e, t2) {
  return h(ut)(e, t2);
}
const oe = v((e) => e === null);
function Sr(e, t2) {
  if (oe(e))
    throw TypeError(t2 == null ? void 0 : t2.message);
}
function _r(e, t2) {
  if (ie(e) || oe(e))
    throw TypeError(t2 == null ? void 0 : t2.message);
}
const wr = h(oe), ct = Ee(oe, ie), Ar = h(ct), ft = v((e) => typeof e == "number"), Er = h(ft), lt = v((e) => O(e) && (T(e) === "[object Number]" || e instanceof Number)), Ir = h(lt), Or = h(O);
function yt(e) {
  return v((t2) => t2 instanceof Promise || O(t2) && typeof Reflect.get(t2, "then") == "function")(e);
}
function jr(e, t2) {
  return h(yt)(e, t2);
}
function dt(e, t2) {
  return v((r) => O(r) && T(r) === "[object Object]" && (!(t2 != null && t2.valueValidator) || Object.values(r).every(t2.valueValidator)) && (!(t2 != null && t2.keyValidator) || Object.keys(r).every(t2.keyValidator)))(e);
}
function Fr(e, t2) {
  return h(dt)(e, t2);
}
const pt = v((e) => O(e) && (T(e) === "[object RegExp]" || e instanceof RegExp)), Rr = h(pt);
function mt(e, t2) {
  return v((r) => O(r) && (T(r) === "[object Set]" || r instanceof Set) && (!(t2 != null && t2.valueValidator) || [...r].every(t2.valueValidator)))(e);
}
function Pr(e, t2) {
  return h(mt)(e, t2);
}
const Dr = h(Oe), Tr = h(je), ht = v((e) => O(e) && (T(e) === "[object String]" || e instanceof String)), Nr = h(ht), vt = v((e) => typeof e == "symbol"), Mr = h(vt), C = v((e) => e instanceof Object.getPrototypeOf(Int8Array) || e instanceof Object.getPrototypeOf(Uint8Array)), gt = (e) => v((t2) => C(t2) && t2[Symbol.toStringTag] === "Int8Array")(e), bt = (e) => v((t2) => C(t2) && t2[Symbol.toStringTag] === "Uint8Array")(e), St = (e) => v((t2) => C(t2) && t2[Symbol.toStringTag] === "Uint8ClampedArray")(e), _t = (e) => v((t2) => C(t2) && t2[Symbol.toStringTag] === "Int16Array")(e), wt = (e) => v((t2) => C(t2) && t2[Symbol.toStringTag] === "Uint16Array")(e), At = (e) => v((t2) => C(t2) && t2[Symbol.toStringTag] === "Int32Array")(e), Et = (e) => v((t2) => C(t2) && t2[Symbol.toStringTag] === "Uint32Array")(e), It = (e) => v((t2) => C(t2) && t2[Symbol.toStringTag] === "Float32Array")(e), Ot = (e) => v((t2) => C(t2) && t2[Symbol.toStringTag] === "Float64Array")(e), jt = (e) => v((t2) => C(t2) && t2[Symbol.toStringTag] === "BigInt64Array")(e), Ft = (e) => v((t2) => C(t2) && t2[Symbol.toStringTag] === "BigUint64Array")(e), Br = h(C), Vr = h(gt), Ur = h(bt), xr = h(St), Cr = h(_t), Gr = h(wt), zr = h(At), $r = h(Et), Lr = h(It), kr = h(Ot), Wr = h(jt), Jr = h(Ft), qr = h(ie);
function Rt(e) {
  return v((t2) => t2 instanceof WeakMap || O(t2) && T(t2) === "[object WeakMap]")(e);
}
function Hr(e, t2) {
  return h(Rt)(e, t2);
}
function Pt(e) {
  return v((t2) => t2 instanceof WeakSet || O(t2) && T(t2) === "[object WeakSet]")(e);
}
function Kr(e, t2) {
  return h(Pt)(e, t2);
}
function Dt(e) {
  return e !== void 0;
}
function Tt(e) {
  return e !== null;
}
function Zr(e) {
  return Dt(e) && Tt(e);
}
const Xr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  assertIsAnyArrayBuffer: Qt,
  assertIsArray: er,
  assertIsArrayBuffer: tr,
  assertIsAsyncFunction: rr,
  assertIsAsyncGenerator: nr,
  assertIsAsyncGeneratorFunction: ir,
  assertIsAsyncIterable: or,
  assertIsBigInt: sr,
  assertIsBigInt64Array: Wr,
  assertIsBigUint64Array: Jr,
  assertIsBoolean: ar,
  assertIsBooleanObject: ur,
  assertIsBuffer: cr,
  assertIsDataView: fr,
  assertIsDate: lr,
  assertIsDefined: yr,
  assertIsError: dr,
  assertIsFloat32Array: Lr,
  assertIsFloat64Array: kr,
  assertIsFunction: pr,
  assertIsGenerator: mr,
  assertIsGeneratorFunction: hr,
  assertIsInt16Array: Cr,
  assertIsInt32Array: zr,
  assertIsInt8Array: Vr,
  assertIsIterable: vr,
  assertIsIterator: gr,
  assertIsMap: br,
  assertIsNotNull: Sr,
  assertIsNotNullish: _r,
  assertIsNull: wr,
  assertIsNullish: Ar,
  assertIsNumber: Er,
  assertIsNumberObject: Ir,
  assertIsObject: Or,
  assertIsPromise: jr,
  assertIsRecord: Fr,
  assertIsRegExp: Rr,
  assertIsSet: Pr,
  assertIsSharedArrayBuffer: Dr,
  assertIsString: Tr,
  assertIsStringObject: Nr,
  assertIsSymbol: Mr,
  assertIsTypedArray: Br,
  assertIsUint16Array: Gr,
  assertIsUint32Array: $r,
  assertIsUint8Array: Ur,
  assertIsUint8ClampedArray: xr,
  assertIsUndefined: qr,
  assertIsWeakMap: Hr,
  assertIsWeakSet: Kr,
  createTypeAssertion: h,
  createTypeGuard: v,
  isAnyArrayBuffer: ke,
  isArray: We,
  isArrayBuffer: Ie,
  isAsyncFunction: Je,
  isAsyncGenerator: qe,
  isAsyncGeneratorFunction: He,
  isAsyncIterable: Ke,
  isBigInt: Ze,
  isBigInt64Array: jt,
  isBigUint64Array: Ft,
  isBoolean: Xe,
  isBooleanObject: Ye,
  isBuffer: Qe,
  isDataView: et,
  isDate: tt,
  isDefined: Dt,
  isError: rt,
  isFloat32Array: It,
  isFloat64Array: Ot,
  isFunction: nt,
  isGenerator: it,
  isGeneratorFunction: ot,
  isInt16Array: _t,
  isInt32Array: At,
  isInt8Array: gt,
  isIterable: st,
  isIterator: at,
  isMap: ut,
  isNotNull: Tt,
  isNotNullish: Zr,
  isNull: oe,
  isNullish: ct,
  isNumber: ft,
  isNumberObject: lt,
  isObject: O,
  isPromise: yt,
  isRecord: dt,
  isRegExp: pt,
  isSet: mt,
  isSharedArrayBuffer: Oe,
  isString: je,
  isStringObject: ht,
  isSymbol: vt,
  isTypedArray: C,
  isUint16Array: wt,
  isUint32Array: Et,
  isUint8Array: bt,
  isUint8ClampedArray: St,
  isUndefined: ie,
  isUnion: Ee,
  isWeakMap: Rt,
  isWeakSet: Pt
}, Symbol.toStringTag, { value: "Module" })), Z = /* @__PURE__ */ Ce(Xr);
var q = {};
Object.defineProperty(q, "__esModule", { value: true });
q.sample = q.iterate = void 0;
function Nt(e) {
  const t2 = [];
  for (const r of e)
    t2.push(r);
  return t2;
}
function Yr(e) {
  const t2 = Nt(e);
  return function* () {
    let r = 0;
    for (; ; ) {
      const n2 = t2[r];
      r === t2.length - 1 ? r = 0 : r++, yield n2;
    }
  }();
}
q.iterate = Yr;
function Qr(e) {
  const t2 = Nt(e);
  return function* () {
    let r = null, n2 = null;
    for (; ; ) {
      for (t2.length <= 1 && (yield t2[0]), r = n2; n2 === r; )
        n2 = t2[Math.floor(Math.random() * t2.length)];
      yield n2;
    }
  }();
}
q.sample = Qr;
var H = {};
Object.defineProperty(H, "__esModule", { value: true });
H.merge = H.getValueFromNestedArray = void 0;
const De = Z;
function Mt(e, t2) {
  return Array.isArray(e[0]) ? Mt(e[0], t2 + 1) : [e[0], t2];
}
H.getValueFromNestedArray = Mt;
function Bt(e, ...t2) {
  const r = Object.assign({}, e);
  for (const n2 of t2.filter(Boolean))
    for (const [o2, a] of Object.entries(n2)) {
      const c = Reflect.get(r, o2);
      (0, De.isRecord)(a) && (0, De.isRecord)(c) ? Reflect.set(r, o2, Bt(c, a)) : Reflect.set(r, o2, a);
    }
  return r;
}
H.merge = Bt;
var me = {};
Object.defineProperty(me, "__esModule", { value: true });
me.parseOptions = void 0;
const Te = Z;
function en(e) {
  return (0, Te.createTypeGuard)((t2) => (0, Te.isObject)(t2) && (Reflect.has(t2, "overrides") || Reflect.has(t2, "factory")))(e);
}
function tn(e, t2) {
  if (!e)
    return [void 0, void 0];
  if (en(e)) {
    const { overrides: r, factory: n2 } = e;
    return [
      typeof r == "function" ? r(t2) : r,
      n2
    ];
  }
  return [
    typeof e == "function" ? e(t2) : e,
    void 0
  ];
}
me.parseOptions = tn;
var X = {}, Ne;
function rn() {
  if (Ne)
    return X;
  Ne = 1;
  var e = B && B.__awaiter || function(m2, p, l, y) {
    function g(b) {
      return b instanceof l ? b : new l(function(d) {
        d(b);
      });
    }
    return new (l || (l = Promise))(function(b, d) {
      function S(A) {
        try {
          j(y.next(A));
        } catch (N) {
          d(N);
        }
      }
      function P(A) {
        try {
          j(y.throw(A));
        } catch (N) {
          d(N);
        }
      }
      function j(A) {
        A.done ? b(A.value) : g(A.value).then(S, P);
      }
      j((y = y.apply(m2, p || [])).next());
    });
  }, t2 = B && B.__rest || function(m2, p) {
    var l = {};
    for (var y in m2)
      Object.prototype.hasOwnProperty.call(m2, y) && p.indexOf(y) < 0 && (l[y] = m2[y]);
    if (m2 != null && typeof Object.getOwnPropertySymbols == "function")
      for (var g = 0, y = Object.getOwnPropertySymbols(m2); g < y.length; g++)
        p.indexOf(y[g]) < 0 && Object.prototype.propertyIsEnumerable.call(m2, y[g]) && (l[y[g]] = m2[y[g]]);
    return l;
  };
  Object.defineProperty(X, "__esModule", { value: true }), X.parseFactorySchema = void 0;
  const r = Z, n2 = K, o2 = he();
  function a(m2, p, l) {
    var { value: y } = m2, g = m2.options, b = g === void 0 ? {} : g, { batch: d } = b, S = t2(b, ["batch"]);
    return y instanceof o2.TypeFactory ? d ? p ? y.batchSync(d, S) : y.batch(d, S) : p ? y.buildSync(S) : y.build(S) : y(l);
  }
  function c(m2) {
    return e(this, void 0, void 0, function* () {
      const p = {};
      for (const [l, y] of Object.entries(m2)) {
        const g = (0, r.isPromise)(y) ? yield y : y;
        (0, r.isRecord)(g) ? Reflect.set(p, l, yield c(g)) : Reflect.set(p, l, g);
      }
      return p;
    });
  }
  function f(m2, p, l, y = "") {
    const g = {};
    for (let [b, d] of Object.entries(m2)) {
      if (d instanceof o2.TypeFactory ? d = l ? d.buildSync() : d.build() : d instanceof o2.Ref ? d = a(d, l, p) : (0, r.isIterator)(d) ? d = d.next().value : !(d instanceof o2.DerivedValueProxy) && (0, r.isRecord)(d) && (d = f(d, p, l, b)), (0, r.isPromise)(d) && l)
        throw new Error(n2.ERROR_MESSAGES.PROMISE_VALUE.replace(":key", y ? `${y}.${b}` : b));
      g[b] = d;
    }
    return l ? g : c(g);
  }
  return X.parseFactorySchema = f, X;
}
var J = {}, Me;
function nn() {
  if (Me)
    return J;
  Me = 1, Object.defineProperty(J, "__esModule", { value: true }), J.validateFactoryResult = J.validateFactorySchema = void 0;
  const e = Z, t2 = K, r = he();
  function n2(c, f, m2 = "") {
    const p = [];
    for (const [l, y] of Object.entries(c))
      y instanceof f ? p.push(m2 ? `${m2}.${l}` : l) : (0, e.isRecord)(y) && p.push(...n2(y, f, l));
    return p;
  }
  function o2(c) {
    const f = n2(c, r.BuildArgProxy);
    if (f.length)
      throw new Error(t2.ERROR_MESSAGES.MISSING_BUILD_ARGS.replace(":missingArgs", f.join(", ")));
    return c;
  }
  J.validateFactorySchema = o2;
  function a(c) {
    const f = n2(c, r.DerivedValueProxy);
    if (f.length)
      throw new Error(t2.ERROR_MESSAGES.MISSING_DERIVED_PARAMETERS.replace(":missingValues", f.join(", ")));
    return c;
  }
  return J.validateFactoryResult = a, J;
}
var Be;
function he() {
  if (Be)
    return $;
  Be = 1;
  var e = B && B.__awaiter || function(g, b, d, S) {
    function P(j) {
      return j instanceof d ? j : new d(function(A) {
        A(j);
      });
    }
    return new (d || (d = Promise))(function(j, A) {
      function N(G) {
        try {
          x(S.next(G));
        } catch (k) {
          A(k);
        }
      }
      function z(G) {
        try {
          x(S.throw(G));
        } catch (k) {
          A(k);
        }
      }
      function x(G) {
        G.done ? j(G.value) : P(G.value).then(N, z);
      }
      x((S = S.apply(g, b || [])).next());
    });
  };
  Object.defineProperty($, "__esModule", { value: true }), $.TypeFactory = $.Ref = $.DerivedValueProxy = $.BuildArgProxy = void 0;
  const t2 = Z, r = K, n2 = q, o2 = H, a = me, c = rn(), f = nn();
  class m2 {
  }
  $.BuildArgProxy = m2;
  class p {
  }
  $.DerivedValueProxy = p;
  class l {
    constructor(b, d) {
      this.value = b, this.options = d;
    }
  }
  $.Ref = l;
  class y {
    constructor(b, d) {
      this.preBuild = (S, P) => {
        const j = this.counter;
        this.counter++;
        const A = typeof this.defaults == "function" ? this.defaults(j) : this.defaults, [N, z = this.factory] = (0, a.parseOptions)(P, j);
        if (S) {
          if ((0, t2.isPromise)(A))
            throw new Error(r.ERROR_MESSAGES.PROMISE_DEFAULTS);
          if ((0, t2.isPromise)(N))
            throw new Error(r.ERROR_MESSAGES.PROMISE_OVERRIDES);
        }
        return { defaults: A, overrides: N, factory: z, iteration: j };
      }, this.build = (S) => e(this, void 0, void 0, function* () {
        const { defaults: P, overrides: j, factory: A, iteration: N } = this.preBuild(false, S), z = yield this.performBuild(yield P, yield j, N, false);
        return this.postBuild(false, A ? A(z, N) : z);
      }), this.buildSync = (S) => {
        const { defaults: P, overrides: j, factory: A, iteration: N } = this.preBuild(true, S), z = this.performBuild(P, j, N, true);
        return this.postBuild(true, A ? A(z, N) : z);
      }, this.defaults = b, this.factory = d, this.counter = 0;
    }
    resetCounter(b = 0) {
      this.counter = b;
    }
    postBuild(b, d) {
      if ((0, t2.isPromise)(d)) {
        if (b)
          throw new Error(r.ERROR_MESSAGES.PROMISE_FACTORY);
        return d.then((S) => (0, f.validateFactoryResult)(S));
      }
      return (0, f.validateFactoryResult)(d);
    }
    performBuild(b, d, S, P) {
      const j = (0, f.validateFactorySchema)((0, o2.merge)(b, d));
      return (0, c.parseFactorySchema)(j, S, P);
    }
    batch(b, d) {
      return e(this, void 0, void 0, function* () {
        return Promise.all(new Array(b).fill(d).map(this.build));
      });
    }
    batchSync(b, d) {
      return new Array(b).fill(d).map(this.buildSync);
    }
    static required() {
      return new m2();
    }
    static derived() {
      return new p();
    }
    static use(b, d) {
      return new l(b, d);
    }
  }
  return $.TypeFactory = y, y.iterate = n2.iterate, y.sample = n2.sample, $;
}
var U = {};
const on = {}, sn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: on
}, Symbol.toStringTag, { value: "Module" })), an = /* @__PURE__ */ Ce(sn);
var Vt = B && B.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(U, "__esModule", { value: true });
U.isSameStructure = U.mapKeyPaths = U.writeFixtureFile = U.readFileIfExists = U.parseFilePath = U.validateAbsolutePath = void 0;
const un = Z, te = Vt(an), ce = Vt(Le), ne = K, cn = H;
function Ut(e) {
  if (!(e != null && e.trim()))
    throw new Error(ne.ERROR_MESSAGES.MISSING_FILENAME);
  if (!ce.default.isAbsolute(e))
    throw new Error(ne.ERROR_MESSAGES.PATH_IS_NOT_ABSOLUTE);
}
U.validateAbsolutePath = Ut;
function fn(e) {
  Ut(e);
  let t2 = ce.default.basename(e);
  const r = e.replace(t2, "") + "__fixtures__/", n2 = ce.default.extname(t2);
  if (!n2)
    t2 = t2 + ".json";
  else {
    if (n2.toLowerCase() !== ".json")
      throw new Error(ne.ERROR_MESSAGES.INVALID_EXTENSION.replace(":fileExtension", n2));
    n2 !== ".json" && (t2 = t2.replace(n2, ".json"));
  }
  return {
    fixturesDir: r,
    fullPath: ce.default.join(r, t2)
  };
}
U.parseFilePath = fn;
function ln(e) {
  if (te.default.existsSync(e))
    try {
      const t2 = te.default.readFileSync(e, {
        encoding: "utf-8"
      });
      return JSON.parse(t2);
    } catch (t2) {
      throw new Error(ne.ERROR_MESSAGES.FILE_READ.replace(":filePath", e).replace(":fileError", t2.message));
    }
  return null;
}
U.readFileIfExists = ln;
function yn(e, { fixturesDir: t2, fullPath: r }) {
  try {
    return te.default.existsSync(t2) || te.default.mkdirSync(t2), te.default.writeFileSync(r, JSON.stringify(e)), e;
  } catch (n2) {
    throw new Error(ne.ERROR_MESSAGES.FILE_WRITE.replace(":filePath", r).replace(":fileError", ": " + JSON.stringify(n2)));
  }
}
U.writeFixtureFile = yn;
function fe(e, t2 = "") {
  const r = [];
  for (let [n2, o2] of Object.entries(e)) {
    o2 !== void 0 && r.push(n2);
    let a = t2 ? `${t2}.${n2}` : n2;
    if (Array.isArray(o2)) {
      let [c, f] = (0, cn.getValueFromNestedArray)(o2, 1);
      for (o2 = c; f > 0; )
        f--, a += "[0]";
    }
    (0, un.isRecord)(o2) ? r.push(...fe(o2, a)) : o2 !== void 0 && r.push(a);
  }
  return [...new Set(r)];
}
U.mapKeyPaths = fe;
function dn(e, t2) {
  return JSON.stringify(fe(e).sort()) === JSON.stringify(fe(t2).sort());
}
U.isSameStructure = dn;
var Ve = B && B.__awaiter || function(e, t2, r, n2) {
  function o2(a) {
    return a instanceof r ? a : new r(function(c) {
      c(a);
    });
  }
  return new (r || (r = Promise))(function(a, c) {
    function f(l) {
      try {
        p(n2.next(l));
      } catch (y) {
        c(y);
      }
    }
    function m2(l) {
      try {
        p(n2.throw(l));
      } catch (y) {
        c(y);
      }
    }
    function p(l) {
      l.done ? a(l.value) : o2(l.value).then(f, m2);
    }
    p((n2 = n2.apply(e, t2 || [])).next());
  });
}, pn = B && B.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(le, "__esModule", { value: true });
le.FixtureFactory = void 0;
const mn = pn(Le), hn = he(), Y = U;
class vn extends hn.TypeFactory {
  constructor(t2, r, n2) {
    super(t2, r), n2 != null && n2.trim() && ((0, Y.validateAbsolutePath)(n2), this.defaultPath = n2);
  }
  getOrCreateFixture(t2, r) {
    const n2 = (0, Y.parseFilePath)(this.defaultPath ? mn.default.join(this.defaultPath, t2) : t2), o2 = (0, Y.readFileIfExists)(n2.fullPath);
    return o2 && (0, Y.isSameStructure)(r, o2) ? o2 : (0, Y.writeFixtureFile)(r, n2);
  }
  fixture(t2, r) {
    return Ve(this, void 0, void 0, function* () {
      const n2 = yield this.build(r);
      return this.getOrCreateFixture(t2, n2);
    });
  }
  fixtureSync(t2, r) {
    const n2 = this.buildSync(r);
    return this.getOrCreateFixture(t2, n2);
  }
  fixtureBatch(t2, r, n2) {
    return Ve(this, void 0, void 0, function* () {
      const o2 = yield this.batch(r, n2);
      return this.getOrCreateFixture(t2, o2);
    });
  }
  fixtureBatchSync(t2, r, n2) {
    const o2 = this.batchSync(r, n2);
    return this.getOrCreateFixture(t2, o2);
  }
}
le.FixtureFactory = vn;
var xt = {};
Object.defineProperty(xt, "__esModule", { value: true });
(function(e) {
  var t2 = B && B.__createBinding || (Object.create ? function(o2, a, c, f) {
    f === void 0 && (f = c);
    var m2 = Object.getOwnPropertyDescriptor(a, c);
    (!m2 || ("get" in m2 ? !a.__esModule : m2.writable || m2.configurable)) && (m2 = { enumerable: true, get: function() {
      return a[c];
    } }), Object.defineProperty(o2, f, m2);
  } : function(o2, a, c, f) {
    f === void 0 && (f = c), o2[f] = a[c];
  }), r = B && B.__exportStar || function(o2, a) {
    for (var c in o2)
      c !== "default" && !Object.prototype.hasOwnProperty.call(a, c) && t2(a, o2, c);
  };
  Object.defineProperty(e, "__esModule", { value: true }), e.ERROR_MESSAGES = void 0;
  var n2 = K;
  Object.defineProperty(e, "ERROR_MESSAGES", { enumerable: true, get: function() {
    return n2.ERROR_MESSAGES;
  } }), r(le, e), r(q, e), r(he(), e), r(xt, e);
})(qt);
function Ct(e) {
  return (t2) => typeof t2 == e;
}
const wn = Ct("function");
function An(e) {
  return wn(e);
}
function R(e, t2) {
  return {
    meta: () => t2,
    redefine: (n2, o2) => R(n2, o2),
    closure: () => `${e}`,
    value: (...n2) => An(e) ? e(...n2) : e,
    log: () => {
      console.log(`${e}: ${t2}: `);
    }
  };
}
function ti(e, t2) {
  const r = {
    ...t2,
    type: "component",
    version: Math.round(Date.now() / 1e6) + 1,
    primary: "view",
    hierachy: "secondary"
  };
  return R(
    e,
    r
  );
}
function NavBar(props) {
  const Component = ti(
    () => o`<section>
    <nav class="relative py-6 bg-black z-50">
      <div class="container px-4 mx-auto">
        <div class="flex items-center relative">
          <a
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-block text-lg font-bold"
            href="#"
          >
            <img
              class="h-10"
              src="saturn-assets/logos/logo-saturn-light.svg"
              alt=""
              width="auto"
            />
          </a>
          <div>
            <button
              class="navbar-burger flex w-12 h-12 items-center justify-center bg-gray-800 hover:bg-gray-700 rounded-md transition duration-200"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 12H21"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M3 6H21"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M3 18H21"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <div class="hidden lg:block ml-auto">
            <div class="flex items-center">
              <a
                class="inline-block mr-9 text-sm font-semibold text-orange-900 hover:text-orange-50"
                href="#"
                >Sign In</a
              >
              <a
                class="relative group inline-block py-3 px-4 text-sm font-semibold text-orange-50 hover:text-orange-900 bg-orange-900 rounded-md overflow-hidden transition duration-300"
                href="#"
              >
                <div
                  class="absolute top-0 right-full w-full h-full bg-white transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"
                ></div>
                <span class="relative">Create an account</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div
      class="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-md z-50"
    >
      <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
      <nav
        class="relative flex flex-col py-6 px-10 w-full h-full bg-white border-r overflow-y-auto"
      >
        <div class="flex items-center mb-16">
          <a class="mr-auto text-2xl font-medium leading-none" href="#">
            <img
              class="h-10"
              src="saturn-assets/logos/logo-saturn-dark.svg"
              alt=""
              width="auto"
            />
          </a>
          <button class="navbar-close">
            <svg
              class="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div>
          <ul class="mb-2">
            <li>
              <a
                class="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg"
                href="#"
                >About Us</a
              >
            </li>
            <li>
              <a
                class="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg"
                href="#"
                >Featured</a
              >
            </li>
            <li>
              <a
                class="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg"
                href="#"
                >Solutions</a
              >
            </li>
            <li>
              <a
                class="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg"
                href="#"
                >Products</a
              >
            </li>
            <li>
              <a
                class="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg"
                href="#"
                >Articles</a
              >
            </li>
          </ul>
          <div class="py-8 px-6 mb-6 border-t border-b border-gray-200">
            <a
              class="flex items-center text-sm font-semibold text-orange-900 hover:text-orange-600"
              href="#"
            >
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.3337 6.05833C17.2811 5.9059 17.1854 5.77202 17.0582 5.67292C16.931 5.57381 16.7777 5.51374 16.617 5.5L11.8754 4.80833L9.75038 0.499999C9.68215 0.359106 9.5756 0.240284 9.44296 0.157143C9.31031 0.074003 9.15693 0.0299072 9.00039 0.0299072C8.84384 0.0299072 8.69046 0.074003 8.55781 0.157143C8.42517 0.240284 8.31862 0.359106 8.25039 0.499999L6.12539 4.8L1.38372 5.5C1.22949 5.52192 1.08449 5.58663 0.96518 5.6868C0.845868 5.78696 0.757021 5.91856 0.708721 6.06666C0.664509 6.21139 0.660541 6.36543 0.697245 6.51224C0.733948 6.65905 0.809936 6.7931 0.917055 6.9L4.35872 10.2333L3.52539 14.9667C3.49564 15.1229 3.51121 15.2844 3.57028 15.432C3.62935 15.5797 3.72943 15.7074 3.85872 15.8C3.98474 15.8901 4.13337 15.9433 4.28793 15.9536C4.44249 15.9639 4.59686 15.9309 4.73372 15.8583L9.00039 13.6333L13.2504 15.8667C13.3673 15.9326 13.4994 15.9671 13.6337 15.9667C13.8102 15.9673 13.9824 15.9118 14.1254 15.8083C14.2547 15.7157 14.3548 15.588 14.4138 15.4404C14.4729 15.2927 14.4885 15.1312 14.4587 14.975L13.6254 10.2417L17.067 6.90833C17.1874 6.8064 17.2763 6.67242 17.3235 6.52195C17.3707 6.37149 17.3742 6.21073 17.3337 6.05833ZM12.2087 9.39166C12.111 9.48619 12.0379 9.6032 11.9957 9.73247C11.9536 9.86175 11.9438 9.99937 11.9671 10.1333L12.5671 13.625L9.43372 11.9583C9.31315 11.8941 9.17865 11.8605 9.04205 11.8605C8.90546 11.8605 8.77095 11.8941 8.65039 11.9583L5.51705 13.625L6.11705 10.1333C6.14033 9.99937 6.13048 9.86175 6.08836 9.73247C6.04623 9.6032 5.97312 9.48619 5.87539 9.39166L3.37539 6.89166L6.88372 6.38333C7.01872 6.36455 7.14705 6.31295 7.25747 6.23304C7.36789 6.15313 7.45702 6.04736 7.51705 5.925L9.00039 2.75L10.5671 5.93333C10.6271 6.0557 10.7162 6.16147 10.8266 6.24137C10.9371 6.32128 11.0654 6.37289 11.2004 6.39166L14.7087 6.9L12.2087 9.39166Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span class="ml-3">Upgrade to Premium</span>
            </a>
          </div>
          <div class="flex px-6 mb-16 items-center">
            <a
              class="inline-block mr-9 text-sm font-semibold text-orange-900 hover:text-gray-900"
              href="#"
              >Sign In</a
            ><a
              class="inline-block py-3 px-4 text-sm font-semibold text-orange-900 hover:text-white border border-gray-300 hover:border-orange-600 hover:bg-orange-900 rounded-md transition duration-200"
              href="#"
              >Create an account</a
            >
          </div>
          <div>
            <div
              class="flex w-20 h-20 mb-6 items-center justify-center bg-orange-50 rounded-full"
            >
              <svg
                width="29"
                height="28"
                viewBox="0 0 29 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.3333 16.6667C24.9797 16.6667 24.6406 16.8072 24.3905 17.0572C24.1405 17.3073 24 17.6464 24 18V23.3334C24 23.687 23.8595 24.0261 23.6095 24.2762C23.3594 24.5262 23.0203 24.6667 22.6667 24.6667H4C3.64638 24.6667 3.30724 24.5262 3.05719 24.2762C2.80714 24.0261 2.66667 23.687 2.66667 23.3334V10.5467L10.5067 18.4C11.2567 19.1491 12.2733 19.5698 13.3333 19.5698C14.3933 19.5698 15.41 19.1491 16.16 18.4L18.3467 16.2134C18.5977 15.9623 18.7388 15.6218 18.7388 15.2667C18.7388 14.9116 18.5977 14.5711 18.3467 14.32C18.0956 14.069 17.7551 13.9279 17.4 13.9279C17.0449 13.9279 16.7044 14.069 16.4533 14.32L14.2667 16.5067C14.0174 16.751 13.6823 16.8878 13.3333 16.8878C12.9843 16.8878 12.6492 16.751 12.4 16.5067L4.54667 8.66669H13.3333C13.687 8.66669 14.0261 8.52622 14.2761 8.27617C14.5262 8.02612 14.6667 7.68698 14.6667 7.33336C14.6667 6.97974 14.5262 6.6406 14.2761 6.39055C14.0261 6.1405 13.687 6.00002 13.3333 6.00002H4C2.93913 6.00002 1.92172 6.42145 1.17157 7.1716C0.421427 7.92174 0 8.93916 0 10V23.3334C0 24.3942 0.421427 25.4116 1.17157 26.1618C1.92172 26.9119 2.93913 27.3334 4 27.3334H22.6667C23.7275 27.3334 24.7449 26.9119 25.4951 26.1618C26.2452 25.4116 26.6667 24.3942 26.6667 23.3334V18C26.6667 17.6464 26.5262 17.3073 26.2761 17.0572C26.0261 16.8072 25.687 16.6667 25.3333 16.6667ZM27.6133 5.05336L23.6133 1.05336C23.4865 0.93197 23.337 0.836817 23.1733 0.773358C22.8487 0.64 22.4846 0.64 22.16 0.773358C21.9963 0.836817 21.8468 0.93197 21.72 1.05336L17.72 5.05336C17.4689 5.30443 17.3279 5.64496 17.3279 6.00002C17.3279 6.35509 17.4689 6.69562 17.72 6.94669C17.9711 7.19776 18.3116 7.33881 18.6667 7.33881C19.0217 7.33881 19.3623 7.19776 19.6133 6.94669L21.3333 5.21336V12.6667C21.3333 13.0203 21.4738 13.3595 21.7239 13.6095C21.9739 13.8595 22.313 14 22.6667 14C23.0203 14 23.3594 13.8595 23.6095 13.6095C23.8595 13.3595 24 13.0203 24 12.6667V5.21336L25.72 6.94669C25.844 7.07166 25.9914 7.17086 26.1539 7.23855C26.3164 7.30624 26.4907 7.34109 26.6667 7.34109C26.8427 7.34109 27.017 7.30624 27.1794 7.23855C27.3419 7.17086 27.4894 7.07166 27.6133 6.94669C27.7383 6.82274 27.8375 6.67527 27.9052 6.51279C27.9729 6.35032 28.0077 6.17604 28.0077 6.00002C28.0077 5.82401 27.9729 5.64973 27.9052 5.48726C27.8375 5.32478 27.7383 5.17731 27.6133 5.05336Z"
                  fill="black"
                ></path>
              </svg>
            </div>
            <span class="block mb-3 text-sm text-gray-500">Drop us a line</span>
            <a class="font-semibold text-black" href="#">hello@shuffle.dev</a>
          </div>
        </div>
      </nav>
    </div>
  </section>`
  );
  return Component;
}
export { NavBar };
//# sourceMappingURL=index.es.js.map
